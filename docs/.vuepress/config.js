module.exports = {
    title: 'Vue.js_이한솔',
    description: '나는 오늘 무엇을 배웠는가',
    base: '/learning-note2/',
    head: [
      [
        'link',
        {
          rel: 'icon',
          href: '/logo.png',
        },
      ],
    ],
    markdown: {
        lineNumbers: true
    },
    plugins: ['@vuepress/back-to-top'],
    themeConfig: {
        sidebar: [
            // '/day1',
            {
                title: 'Day 1',
                collapsable: false,
                children: [
                    '/day01-0624',
                    '/vuepress', 
                    '/instance'
                ],
            },
            {
                title: 'Day 2',
                collapsable: false,
                children: [
                    '/component',
                    '/props'
                ],
            },
            {
                title: 'Day 3',
                collapsable: false,
                children: [
                    '/eventEmit',
                    '/axios'
                ],
            },
            {
                title: 'Day 4',
                collapsable: false,
                children: [
                    '/npm',
                    '/vue-cli',
                    '/Todo-app'
                ],
            },
        ],
    },
}