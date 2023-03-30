import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Osutournament',
  description: 'Centralize osu tournament',
  rewrites: {
    'src/index.md': 'index.md',
    'src/api-examples.md': 'docs/api-examples.md',
    'src/markdown-examples.md': 'docs/markdown-examples.md',
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/docs/markdown-examples' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/docs/markdown-examples' },
          { text: 'Runtime API Examples', link: '/docs/api-examples' },
        ],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
  },
});
