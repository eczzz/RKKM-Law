import type { BlogPost } from './blog/types';

export type { BlogPost } from './blog/types';

const postModules = import.meta.glob<{ post?: BlogPost; posts?: BlogPost[] }>('./blog/*.ts', {
  eager: true,
});

const posts: BlogPost[] = Object.values(postModules).flatMap((module) => [
  ...(module.post ? [module.post] : []),
  ...(module.posts ?? []),
]);

export const blogPosts: BlogPost[] = [...posts].sort((a, b) =>
  b.publishedDate.localeCompare(a.publishedDate),
);

export function formatPublishedDate(iso: string): string {
  const [year, month, day] = iso.split('-').map(Number);
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

const allowedTags = new Set([
  'p',
  'h2',
  'h3',
  'ul',
  'ol',
  'li',
  'strong',
  'em',
  'b',
  'i',
  'blockquote',
  'a',
]);

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function getSafeHref(attrs: string): string | null {
  const match = attrs.match(/\bhref\s*=\s*("([^"]*)"|'([^']*)'|([^\s>]+))/i);
  const href = match?.[2] ?? match?.[3] ?? match?.[4];
  if (!href) return null;

  const trimmed = href.trim();
  if (/^(https?:|mailto:|tel:|\/|#)/i.test(trimmed)) {
    return escapeHtml(trimmed);
  }

  return null;
}

export function sanitizeBlogBody(html: string): string {
  return html
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<\s*(script|style|iframe|object|embed|form|input|button)[^>]*>[\s\S]*?<\s*\/\s*\1\s*>/gi, '')
    .replace(/<\s*(script|style|iframe|object|embed|form|input|button)[^>]*\/?\s*>/gi, '')
    .replace(/<\/?\s*([a-z0-9]+)([^>]*)>/gi, (match, tagName, attrs) => {
      const tag = String(tagName).toLowerCase();
      const isClosing = /^<\s*\//.test(match);

      if (!allowedTags.has(tag)) return '';
      if (isClosing) return `</${tag}>`;
      if (tag === 'a') {
        const safeHref = getSafeHref(String(attrs));
        return safeHref ? `<a href="${safeHref}">` : '<a>';
      }

      return `<${tag}>`;
    })
    .replace(/<p>\s*(?:&nbsp;|&#160;|\s)*\s*<\/p>/gi, '')
    .trim();
}
