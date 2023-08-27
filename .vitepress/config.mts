import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Taming Python",
  description: "No snakes involved",
  outDir: 'dist/',
  srcExclude: ["examples/**", "slides/**"],
  ignoreDeadLinks: true,
  rewrites: {
    'README.md': 'index.md'
  },
  themeConfig: {
    outline: 'deep',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/np-edu-sg/python' },
    ]
  }
})
