---
title: How to write a post on this site
description: A template post. Copy this file, change the settings at the top, write below them, and set draft to false.
date: 2026-10-30
tags: [meta]
draft: true # drafts only show up in `npm run dev`, never on the published site
---

This post is a template. It only appears while you run `npm run dev`, so it never shows up on mattsi.github.io.

## Start a new post

1. Copy this file in `src/content/posts/` and give it a short file name with dashes, like `rails-index-tuning.md`. The file name becomes the address: `/posts/rails-index-tuning/`.
2. Change `title`, `description`, `date` and `tags` at the top.
3. Write the post below the second `---` line.
4. Set `draft: false` when it is ready, then push. The Posts tab sorts posts by `date`, newest first.

## What you can use

Paragraphs are plain text. **Bold**, *italic*, `inline code` and [links](https://github.com/MattSi) work as usual.

- Bullet lists
- like this one

> Quotes start with `>`.

| Tables | work | too |
|---|---:|---:|
| Before | 358 ms | 1 |
| After | 0.4 ms | 2 |

Code blocks get syntax highlighting:

```ruby
# A composite index that matches the query's filter and sort
add_index :tasks, [:assignee_id, :status, :due_at]
```

Images go in `public/images/posts/` and are written like this:

`![What the image shows](/images/posts/my-image.webp)`

For captions, side-by-side images, number cards or before/after bars, rename the file to `.mdx` and use the components described in the README (`<Figure>`, `<FigureRow>`, `<Kpis>`, `<Bench>`).
