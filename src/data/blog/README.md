# Blog posts

Add one TypeScript file per post in this directory and export a `post` object that satisfies `BlogPost`.

Files in this directory are picked up automatically by `src/data/blogPosts.ts`; no archive or route edits are needed.

`body` supports a small, intentionally safe HTML subset:

- `p`, `h2`, `h3`
- `ul`, `ol`, `li`
- `strong`, `em`, `b`, `i`
- `blockquote`
- `a` with a safe `href`

Do not paste full website backups, scripts, styles, embeds, iframes, tracking code, or arbitrary WordPress/WPBakery markup into `body`.
