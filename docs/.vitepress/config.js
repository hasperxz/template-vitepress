module.exports = {
    base: '/',//基础路径
    head: [
        ['meta', { name: 'keywords', content: 'vuepress 模板' }]
    ],
    host: '0.0.0.0',
    dest: './dist',//打包输出目录
    markdown: {
        lineNumbers: true
    },
    theme: undefined,
    themeConfig: {
        logo: '/images/misitebao.png',
        repo: 'https://github.com/misitebao/template-viteress', // 顶部显示的github地址
        docsRepo: 'https://github.com/misitebao/template-vitepress', //文档内改进页面的仓库地址
        docsDir: 'docs', //文档目录
        docsBranch: 'master', //分支
        editLinks: true,
        search: true,
        searchMaxSuggestions: 10,
        locales: {
            '/': {
                selectText: 'Languages',
                label: 'English',
                repoLabel: 'Source',
                editLinkText: 'Edit this page on GitHub',
                lastUpdated: 'Last Updated',
                serviceWorker: {
                    updatePopup: {
                        message: "New content is available.",
                        buttonText: "Refresh"
                    }
                },
                algolia: {},
                sidebarDepth: 2,
                // sidebar: 'auto',
                nav: [
                    {
                        text: 'Home', link: '/'
                    },
                    {
                        text: 'AAA',
                        items: [
                            { text: 'aaa', link: '/AAA/aaa' },
                            { text: 'bbb', link: '/AAA/bbb' }
                        ]
                    },
                    {
                        text: 'BBB',
                        items: [
                            { text: 'aaa', link: '/BBB/aaa' },
                            { text: 'bbb', link: '/BBB/bbb' }
                        ]
                    },
                ],
                sidebar: {
                    '/AAA/': [
                        {
                            text: 'AAAAAAAAAA',
                            path: '/AAA/',
                            collapsable: true,
                            children: [
                                { text: "aaaaaa", link: "/AAA/aaa" },
                                { text: "bbbbbb", link: "/AAA/bbb" }
                            ]
                        }
                    ],
                    '/BBB/': [
                        {
                            text: 'BBBBBBBBBB',
                            path: '/BBB/',
                            collapsable: true,
                            children: [
                                { text: "aaaaaa", link: "/BBB/aaa" },
                                { text: "bbbbbb", link: "/BBB/bbb" }
                            ]
                        }
                    ],
                }
            },
            '/zh/': {
                // 多语言下拉菜单的标题
                selectText: '选择语言',
                // 该语言在下拉菜单中的标签
                label: '简体中文',

                repoLabel: '查看源码',
                // 以下为可选的编辑链接选项
                // 默认为 "Edit this page"
                editLinkText: '帮助我们改善此页面！',
                // 最后更新时间
                lastUpdated: '最后更新时间',
                // Service Worker 的配置
                serviceWorker: {
                    updatePopup: {
                        message: "发现新内容可用.",
                        buttonText: "刷新"
                    }
                },
                // 当前 locale 的 algolia docsearch 选项
                algolia: {},
                sidebarDepth: 2,
                // sidebar: 'auto',
                nav: [
                    {
                        text: '主页', link: '/zh/'
                    },
                    {
                        text: 'AAA',
                        items: [
                            { text: 'aaa', link: '/zh/AAA/aaa' },
                            { text: 'bbb', link: '/zh/AAA/bbb' }
                        ]
                    },
                    {
                        text: 'BBB',
                        items: [
                            { text: 'aaa', link: '/zh/BBB/aaa' },
                            { text: 'bbb', link: '/zh/BBB/bbb' }
                        ]
                    },
                ],
                sidebar: {
                    '/zh/AAA/': [
                        {
                            text: 'AAAAAAAAAA',
                            path: '/zh/AAA/',
                            collapsable: false,
                            children: [
                                { text: "aaaaaa", link: "/zh/AAA/aaa" },
                                { text: "bbbbbb", link: "/zh/AAA/bbb" }
                            ]
                        }
                    ],
                    '/zh/BBB/': [
                        {
                            text: 'BBBBBBBBBB',
                            path: '/zh/BBB/',
                            collapsable: false,
                            children: [
                                { text: "aaaaaa", link: "/zh/BBB/aaa" },
                                { text: "bbbbbb", link: "/zh/BBB/bbb" }
                            ]
                        }
                    ],
                }
            }
        }
    },
    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
            lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
            title: 'Template Vitepress',
            description: `This is a vitepress initial template`
        },
        '/zh/': {
            lang: 'zh-CN',
            title: 'Vitepress模板',
            description: '这是一个Vitepress初始模板'
        }
    }
}