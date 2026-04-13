#!/usr/bin/env node
/**
 * Usage: node scripts/new-post.mjs "My Post Title"
 * Creates a new draft post in src/content/posts/ with today's date pre-filled.
 */
import { writeFileSync, existsSync } from 'fs';
import { join } from 'path';

const title = process.argv[2];
if (!title) {
  console.error('Usage: node scripts/new-post.mjs "My Post Title"');
  process.exit(1);
}

const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
const slug = title
  .toLowerCase()
  .replace(/[^a-z0-9\s-]/g, '')
  .trim()
  .replace(/\s+/g, '-');

const filePath = join(process.cwd(), 'src', 'content', 'posts', `${slug}.md`);

if (existsSync(filePath)) {
  console.error(`File already exists: ${filePath}`);
  process.exit(1);
}

const content = `---
title: "${title}"
date: ${today}
description: ""
tags: []
draft: true
---

Write your post here.
`;

writeFileSync(filePath, content);
console.log(`✓ Created: src/content/posts/${slug}.md`);
