# Applied Claude Lab

Engineering-focused blog about using Claude AI in real software development and test automation workflows.

Built with [Astro](https://astro.build) and deployed on [Vercel](https://vercel.com).

## Development

```bash
npm install
npm run dev
```

## Writing Posts

Create a new `.md` file in `src/content/posts/`:

```markdown
---
title: "Your Post Title"
date: 2026-04-11
description: "Short description for SEO and listing."
tags: ["claude", "opentap"]
draft: false
---

Post content here...
```

Set `draft: true` to hide a post in production (still visible in dev).

## Build & Deploy

```bash
npm run build     # Build for production
npm run preview   # Preview production build locally
```

Deploys automatically to Vercel on push to `main`. Update the `site` URL in `astro.config.mjs` once your Vercel domain is confirmed.
