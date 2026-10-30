// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// User site on GitHub Pages: served from the domain root, so no `base` is needed.
export default defineConfig({
  site: 'https://mattsi.github.io',
  integrations: [mdx()],
  trailingSlash: 'ignore',
  markdown: {
    // Code blocks in posts and project pages: one theme per color mode (switched in global.css).
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
      wrap: false,
    },
  },
});
