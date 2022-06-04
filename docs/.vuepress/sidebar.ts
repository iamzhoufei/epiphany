import { sidebar } from "vuepress-theme-hope";

export default sidebar([
  {
    text: "文档合集",
    icon: "note",
    prefix: "/posts/",
    children: [
      {
        text: "React",
        icon: "react",
        prefix: 'react/',
        collapsable: true,
        children: [
          'React的性能分析'
        ],
      },
      {
        text: "Vue",
        icon: "vue",
        prefix: 'vue/',
        collapsable: true,
        children: [
          'Vue3的reactivity源码'
        ],
      },
      {
        text: "vim练习记录",
        icon: "vim",
        prefix: 'vim/',
        collapsable: true,
        children: [
          'vim练习记录 - 01',
          'vim练习记录 - 02',
          'vim练习记录 - 03',
          'vim练习记录 - 04'
        ],
      },
    ],
  },
  {
    text: "工具合集",
    icon: "note",
    prefix: "/tools/",
    children: [
      '工具合集主页'
    ],
  },
]);
