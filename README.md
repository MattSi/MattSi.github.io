# mattsi.github.io

Personal project site for Matt (Mian) Si, built with [Astro](https://astro.build) and published to GitHub Pages at **https://mattsi.github.io/**.

The site has three tabs:

| Tab | Address | Content |
|---|---|---|
| Portfolio | `/` | featured projects (each with its own page under `/projects/`) and smaller projects |
| About | `/about/` | introduction, languages, skills with links, contact |
| Posts | `/posts/` | articles, newest first, plus an RSS feed at `/rss.xml` |

## Edit the site

Everything you will normally change is plain text:

| What | Where |
|---|---|
| Name, intro, Portfolio heading, contact details, skills, tabs | `src/site.config.ts` |
| The story on the About tab ("How I got here", "How I work") | `src/about.md` |
| Resume icon in the top bar (hidden now) | add a PDF to `public/` and set `resume` in `src/site.config.ts` |
| A project (card text, page content, links) | `src/content/projects/<name>.md` or `.mdx` |
| A post | `src/content/posts/<name>.md` or `.mdx` |
| Images and animations | `public/images/projects/`, `public/images/posts/` |
| Colors and fonts | the `:root` block at the top of `src/styles/global.css` |

### Posts

Each file in `src/content/posts/` is one post, at `/posts/<file name>/`. Start from `how-to-write-a-post.md`, which explains the format and shows what Markdown can do.

- **`title`**, **`description`** (shown in the list and in link previews), **`date`** (e.g. `2026-11-02`), optional **`updated`** and **`tags`**.
- **`draft: true`** keeps a post visible only in `npm run dev`. Set it to `false` (or remove it) to publish.
- Code blocks get syntax highlighting in both light and dark mode.
- Posts can use the same components as project pages if the file ends in `.mdx`.

### Projects

Each file in `src/content/projects/` is one project. The settings at the top (between the `---` lines) control the card and the page header; the text below is the project page.

- **`featured: true`** puts the project in the top grid and gives it its own page at `/projects/<file name>/`. Without it, the project is a small card under "More projects" and the body text is not used.
- **`order`** sets the position inside its section (smallest first).
- **`cover`** is the card image; **`hero`** is the large image at the top of the project page (defaults to `cover`). Paths start at `public/`, so `public/images/projects/maze.webp` is written `/images/projects/maze.webp`.
- **`demo`** and **`source`** become the "Live Demo" / "Play" and "GitHub Source" links.
- **`facts`** is the fact table next to the hero image.

All fields are listed, with comments, in `src/content.config.ts`. If a field has the wrong type, `npm run build` stops and names the file and field.

To add a project, copy an existing file, rename it, and edit it. To hide one, delete the file or move it out of the folder.

### Project page content

Project bodies are Markdown: `## Heading`, paragraphs, `- ` lists (shown with arrows), `1. ` lists (shown as numbered steps), `**bold**`, `` `code` `` and tables. In `.mdx` files you can also use these components, with no import needed:

```mdx
<Figure src="/images/projects/foo.webp" alt="What the image shows" caption="Optional caption." />
<Figure narrow src="..." alt="..." />   {/* smaller image, good for square charts */}

<FigureRow caption="One caption under both images.">
  <Figure src="..." alt="..." />
  <Figure src="..." alt="..." />
</FigureRow>

<Kpis items={[{ value: '0.401', label: 'COCO AP<br>baseline 0.391' }]} />

<Bench rows={[{ name: 'Top priority', before: 358, after: 0.4 }]} unit="ms" note="Optional note." />
```

## Run it locally

You need Node.js 22.12 or newer.

```bash
npm install
npm run dev        # http://localhost:4321, reloads as you edit
npm run build      # writes the finished site to dist/
npm run preview    # serves dist/ to check a build
```

**Windows with Smart App Control:** if `npm run dev` fails with "An Application Control policy has blocked this file", Windows is blocking Astro's native compiler. Run this once after `npm install`:

```bash
npm run setup:windows
```

It installs the WebAssembly build of the compiler, and the `dev`/`build`/`preview` scripts switch to it automatically (see `scripts/astro.mjs`). GitHub's build servers do not need this.

## Publish

Push to `master`. The workflow in `.github/workflows/deploy.yml` builds the site and deploys it to GitHub Pages; the run shows up under the repository's **Actions** tab, and the site updates about a minute after it finishes.

One-time setting: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

## Layout

```
src/
├── site.config.ts          # site-wide text, tabs, contact, skills
├── content.config.ts       # project and post fields and their types
├── content/
│   ├── projects/           # one file per project
│   └── posts/              # one file per post
├── components/             # header, footer, cards, Figure, FigureRow, Kpis, Bench, Table
├── layouts/Layout.astro    # <head>, fonts, header, footer
├── lib/posts.ts            # post sorting, dates, reading time
├── pages/
│   ├── index.astro         # Portfolio tab
│   ├── about.astro         # About tab
│   ├── posts/index.astro   # Posts tab
│   ├── posts/[slug].astro  # post page template
│   ├── projects/[slug].astro  # project page template
│   ├── rss.xml.ts          # RSS feed
│   └── 404.astro
└── styles/global.css
public/                     # copied as-is: images, favicon
scripts/astro.mjs           # starts Astro (WebAssembly compiler on blocked Windows machines)
```
