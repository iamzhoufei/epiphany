import { sidebar } from "vuepress-theme-hope";

export default sidebar([
  {
    text: "文档合集",
    icon: "note",
    prefix: "/posts/",
    children: [
      {
        text: "React",
        prefix: 'react/',
        collapsable: true,
        children: [
          'React的性能分析'
        ],
      },
      {
        text: "Vue",
        prefix: 'vue/',
        collapsable: true,
        children: [
          'Vue3的reactivity源码'
        ],
      },
      {
        text: "vim练习",
        prefix: 'vim/',
        collapsable: true,
        children: [
          'vim练习记录 - 01',
          'vim练习记录 - 02',
          'vim练习记录 - 03',
          'vim练习记录 - 04',
          'vim练习记录 - 05'
        ],
      },
      {
        text: "网络相关",
        prefix: 'network/',
        collapsable: true,
        children: [
          '建立TCP连接的过程',
          '释放TCP连接的过程'
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
