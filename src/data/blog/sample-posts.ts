import type { BlogPost } from './types';

const loremBody = `
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

<h2>What the Court Will Look At</h2>

<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>

<h2>Preparing Your Documentation</h2>

<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.</p>

<h2>Talking to an Attorney Early</h2>

<p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet.</p>
`.trim();

export const posts: BlogPost[] = [
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
