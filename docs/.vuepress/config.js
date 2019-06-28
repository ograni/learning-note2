module.exports = {
    title: 'Vue.js 정복 캠프 학습 노트?',
    description: '나는 오늘 무엇을 배웠는가',
    base: '/learning-note2/',
    // head: [
    //   [
    //     'link',
    //     {
    //       rel: 'icon',
    //       href: '/logo.png',
    //     },
    //   ],
    // ],
    themeConfig: {
        sidebar: [
            // '/day1',
            {
                title: 'Day 1',
                collapsable: false,
                children: [
                    '/vuepress', 
                    '/instance'
                ],
            },
            {
                title: 'Day 2',
                collapsable: false,
                children: [
                    '/component'
                ],
            },
        ],
    },
    // themeConfig: {
    //     sidebar: {
    //         '/week1/': [
    //             '', /* /foo/ */
    //             'one', /* /foo/one.html */
    //             'two' /* /foo/two.html */
    //         ],
    //     }
    // },
}