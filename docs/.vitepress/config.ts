import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Time-Wise",
  description: "Wisdom of Time",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "Home", link: "/" }],

    sidebar: [
      {
        text: "Reference",
        items: [
          { text: "DateTime", link: "/reference/datetime" },
          { text: "Offset", link: "/reference/offset" },
          { text: "Duration", link: "/reference/duration" },
        ],
      },
      {
        text: "VitePress",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/mahshidbahira/time-wise" },
    ],
  },
});
