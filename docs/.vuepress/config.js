module.exports = {
    title: 'Vue.js 정복 캠프 학습 노트_이한솔',
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
        ],
    },
}