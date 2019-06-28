module.exports = {
    title: 'Vue.js 정복 캠프 학습 노트 복습',
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
                title: 'Day 1입니다',
                collapsable: false,
                children: ['/components'],
            },
        ],
    },
};
