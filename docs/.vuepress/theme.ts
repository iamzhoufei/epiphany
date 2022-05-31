import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
  hostname: "https://epiphany.3055.io",

  author: {
    name: "舟匪",
    url: "https:/3055.io",
  },

  iconAssets: "//at.alicdn.com/t/font_2410206_a0xb9hku9iu.css",

  logo: "/logo.svg",

  repo: "https://github.com/iamzhoufei",

  docsDir: "demo/src",

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: sidebar,

  // footer: "MIT Licensed | Copyright © 2022 舟匪",

  displayFooter: true,

  pageInfo: ["Author", "Original", "Date", "Category", "Tag"],

  blog: {
    name: '舟匪',
    avatar: 'https://avatars.githubusercontent.com/u/81286048?v=4',
    roundAvatar: true,
    description: "一个前端开发者",
    medias: {
      GitHub: "https://github.com/iamzhoufei",
    },
  },

  plugins: {
    blog: {
      autoExcerpt: true,
    },
    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
