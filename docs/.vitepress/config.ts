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
        text: "Guide",
        items: [{ text: "Getting Started", link: "/guide/" }],
      },
      {
        text: "Reference",
        items: [
          { text: "DateTime", link: "/reference/DateTime/" },
          { text: "Offset", link: "/reference/Offset/" },
          { text: "Interval", link: "/reference/Interval/" },
          { text: "Duration", link: "/reference/Duration/" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/mahshidbahira/time-wise" },
    ],
  },
});
