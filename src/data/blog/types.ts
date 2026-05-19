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
  body: string; // clean, limited HTML only
}
