module.exports = {
  title: "Vue.js_이한솔",
  description: "-ㅠ-",
  base: "/learning-note2/",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/logo.png",
      },
    ],
  ],
  markdown: {
    lineNumbers: true,
  },
  plugins: ["@vuepress/back-to-top"],
  themeConfig: {
    sidebar: [
      // '/day1',
      {
        title: "Reference",
        collapsable: false,
        children: ["/favorite"],
      },
      {
        title: "Day 1",
        collapsable: false,
        children: ["/day01-0624", "/vuepress", "/instance"],
      },
      {
        title: "Day 2",
        collapsable: false,
        children: ["/component", "/props"],
      },
      {
        title: "Day 3",
        collapsable: false,
        children: ["/eventEmit", "/axios"],
      },
      {
        title: "Day 4",
        collapsable: false,
        children: ["/npm", "/vue-cli", "/Todo-app"],
      },
      {
        title: "Day 4",
        collapsable: false,
        children: ["/npm", "/vue-cli", "/Todo-app"],
      },
      {
        title: "Day 5",
        collapsable: false,
        children: ["/slots", "/es6"],
      },
      {
        title: "Day 6 - 20190708 - mon",
        collapsable: false,
        children: ["/vueRouter", "/vue-news"],
      },
      {
        title: "Day 7 - 20190710 - wed",
        collapsable: false,
        children: ["/webpack"],
      },
      {
        title: "Day 8 - 20190715 mon",
        collapsable: false,
        children: ["/jQueyr-Vue"],
      },
    ],
  },
};
