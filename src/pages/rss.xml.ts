// RSS feed of published posts at /rss.xml, so readers can follow new posts in a feed reader.
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { site } from '../site.config';

const escape = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');

export const GET: APIRoute = async ({ site: siteUrl }) => {
  const base = siteUrl?.toString() ?? 'https://mattsi.github.io/';
  const posts = (await getCollection('posts', (p) => !p.data.draft)).sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime(),
  );

  const items = posts
    .map((p) => {
      const url = new URL(`/posts/${p.id}/`, base).toString();
      return `    <item>
      <title>${escape(p.data.title)}</title>
      <link>${url}</link>
      <guid>${url}</guid>
      <pubDate>${p.data.date.toUTCString()}</pubDate>
      <description>${escape(p.data.description)}</description>
    </item>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escape(site.shortName)} · Posts</title>
    <link>${new URL('/posts/', base)}</link>
    <description>${escape(site.description)}</description>
    <language>en</language>
${items}
  </channel>
</rss>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
};
