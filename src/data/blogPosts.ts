export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  featuredImage: string;
  featuredImageAlt: string;
  excerpt: string;
  author: string;
  publishedDate: string; // ISO date (YYYY-MM-DD)
  readTime: string;
  body: string; // raw HTML
}

// Placeholder body — replace per-post with real content when ready.
// Each section is deliberately long enough that the TOC anchor links scroll
// to visibly different positions during demo / client review.
const loremBody = `
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus, nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra.</p>

<p>Cras non magna vel ante adipiscing rhoncus. Vivamus a mi. Morbi neque. Aliquam erat volutpat. Integer ultrices lobortis eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>

<h2>What the Court Will Look At</h2>

<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt.</p>

<p>Ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>

<p>Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur. Et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.</p>

<h2>Preparing Your Documentation</h2>

<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>

<p>Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.</p>

<p>Omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus.</p>

<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>

<h2>Talking to an Attorney Early</h2>

<p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>

<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>

<p>Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>

<p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra.</p>
`.trim();

export const blogPosts: BlogPost[] = [
  {
    slug: 'what-to-know-before-filing-for-divorce-in-colorado',
    title: 'What to Know Before Filing for Divorce in Colorado',
    category: 'High-Asset Divorce',
    featuredImage: '/images/high-asset-divorce-attorneys-denver-co.webp',
    featuredImageAlt: 'High-asset divorce attorneys in Denver, Colorado',
    excerpt:
      'Before you file, there are decisions about timing, residency, and disclosure that can shape the next two years of your life. Here is what to think through first.',
    author: 'Kukreja McFarlane Law',
    publishedDate: '2026-04-22',
    readTime: '6 min read',
    body: loremBody,
  },
  {
    slug: 'dividing-a-privately-held-business-in-divorce',
    title: 'Dividing a Privately Held Business in Divorce',
    category: 'High-Asset Divorce',
    featuredImage: '/images/high-asset-divorce-attorneys-denver-co.webp',
    featuredImageAlt: 'High-asset divorce attorneys in Denver, Colorado',
    excerpt:
      'When a closely-held company is part of the marital estate, valuation, control, and tax treatment all change the calculus. A look at how Colorado courts approach the issue.',
    author: 'Kukreja McFarlane Law',
    publishedDate: '2026-04-10',
    readTime: '8 min read',
    body: loremBody,
  },
  {
    slug: 'mediation-vs-litigation-choosing-the-right-path',
    title: 'Mediation vs. Litigation: Choosing the Right Path for Your Family',
    category: 'Mediation & ADR',
    featuredImage: '/images/mediation-and-dispute-resolution-attorneys-denver-co.webp',
    featuredImageAlt: 'Mediation and dispute resolution attorneys in Denver, Colorado',
    excerpt:
      'Not every family law matter belongs in a courtroom. The case for confidential resolution, when it works, and when it does not.',
    author: 'Kukreja McFarlane Law',
    publishedDate: '2026-03-29',
    readTime: '5 min read',
    body: loremBody,
  },
];

export function formatPublishedDate(iso: string): string {
  const date = new Date(iso);
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}
