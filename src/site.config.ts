// Site-wide text and links. Edit this file to change the intro, contact details and skills.
// Project content lives in src/content/projects/.

export const site = {
  name: 'Matt (Mian) Si',
  shortName: 'Matt Si', // top-left of every page and the footer
  title: 'Matt Si · Projects', // browser tab title
  description: 'Software engineer in Canada: web apps, real-time rendering, computer vision and games.',
  role: 'Software Engineer · Canada',
  handle: 'github.com/MattSi',

  // Intro paragraph under the name. Plain text; the LinkedIn link is added at the end.
  lede:
    "I'm a software engineer in Canada. I build web apps, desktop tools, real-time renderers and ML pipelines, " +
    'and I measure what I ship: a Rails dashboard query I made about 900× faster, a C++ OpenGL renderer written ' +
    'from scratch, a defect detector that beats its baseline. Every project below is public, documented and runs ' +
    'from a fresh clone.',

  email: 'mian.si@gmail.com',
  github: 'https://github.com/MattSi',
  linkedin: 'https://www.linkedin.com/in/mian-si-077bb921/',

  // Portfolio tab (home page) heading and intro.
  portfolioHeading: 'Portfolio',
  portfolioIntro:
    'Public projects with source code, live demos where they exist, and measured results. Click a featured project for the full write-up.',

  contactHeading: 'Open to software engineering roles in Canada.',
  contactText: "I'm happy to walk through any of these projects in detail. Email is the fastest way to reach me.",
};

// Tabs in the top bar. `match` marks extra paths that keep a tab highlighted.
export const tabs: { label: string; href: string; match?: string[] }[] = [
  { label: 'Portfolio', href: '/', match: ['/projects/'] },
  { label: 'About', href: '/about/' },
  { label: 'Posts', href: '/posts/' },
];

// Colored dots for languages. Add a language here before using it in a project file.
export const languageColors: Record<string, string> = {
  Ruby: 'var(--l-ruby)',
  'C++': 'var(--l-cpp)',
  Python: 'var(--l-py)',
  'C#': 'var(--l-cs)',
  Java: 'var(--l-java)',
  GDScript: 'var(--l-gd)',
  C: 'var(--l-c)',
};

// The row of languages under the intro.
export const languageStrip = [
  { name: 'Ruby', note: 'Rails 8' },
  { name: 'C++', note: 'OpenGL' },
  { name: 'Python', note: 'PyTorch, Whisper' },
  { name: 'C#', note: 'Unity 6' },
  { name: 'Java', note: 'Swing' },
  { name: 'GDScript', note: 'Godot 4' },
  { name: 'C', note: '' },
];

// "Skills, with evidence". Each link points to a project page (/projects/<file name>/) or any URL.
export const skills = [
  {
    area: 'Web back end',
    text: 'Rails 8, Active Record, multi-tenant scoping, MySQL index tuning with EXPLAIN',
    links: [{ label: 'casedesk', href: '/projects/casedesk/' }],
  },
  {
    area: 'Web front end',
    text: 'Hotwire (Turbo Streams, Stimulus), Tailwind CSS',
    links: [{ label: 'casedesk', href: '/projects/casedesk/' }],
  },
  {
    area: 'Testing and CI',
    text: 'Minitest, RuboCop, Brakeman, GitHub Actions, Kamal, Docker',
    links: [
      { label: 'casedesk', href: '/projects/casedesk/' },
      { label: 'ListenStudio', href: '/projects/listenstudio/' },
    ],
  },
  {
    area: 'Graphics',
    text: 'OpenGL 3.3, GLSL, framebuffers, instancing, lighting and post-processing',
    links: [{ label: 'OpenGL Rendering Engine', href: '/projects/opengl-rendering-engine/' }],
  },
  {
    area: 'Machine learning',
    text: 'PyTorch, Detectron2, COCO evaluation, leak-free data splits',
    links: [{ label: 'neu-det-two-stage', href: '/projects/steel-defect-detection/' }],
  },
  {
    area: 'Audio and speech',
    text: 'Whisper, TTS, PyAV decoding, threading in a desktop UI',
    links: [{ label: 'ListenStudio', href: '/projects/listenstudio/' }],
  },
  {
    area: 'Game development',
    text: 'Unity 6 (C#), Godot 4, editor tooling, web builds',
    links: [
      { label: 'space-war', href: '/projects/space-war/' },
      { label: 'Survivors3D', href: 'https://github.com/MattSi/Survivors3D-public' },
    ],
  },
  {
    area: 'Algorithms',
    text: 'Graph search (A*), competitive programming in C++',
    links: [
      { label: 'Maze', href: 'https://github.com/MattSi/Maze' },
      { label: 'uva', href: 'https://github.com/MattSi/uva' },
    ],
  },
];
