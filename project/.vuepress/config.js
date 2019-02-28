module.exports = {
  plugins: [
    '@vuepress/clean-urls',
    '@vuepress/back-to-top',
    '@vuepress/google-analytics',
  ],
  chainMarkdown (config) {
    // Add extra markdown-it plugin
    config
        .plugin('footnote')
        .use(require('markdown-it-footnote'))
  },
  'ga': 'UA-99759012-14',
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['link', { rel: 'apple-touch-icon', sizes:'180x180', href: `/icons/apple-touch-icon.png` }],
    ['link', { rel: 'icon', type:'image/png', sizes:'32x32', href: `/icons/favicon-32x32.png` }],
    ['link', { rel: 'icon', type:'image/png', sizes:'16x16', href: `/icons/favicon-16x16.png` }],
    ['link', { rel: 'manifest', href: '/icons/site.manifest' }]
  ],
  title: 'The Flux', // default page/site title
  description: 'An analysis of the categorical timestamp values of large seismic event populations against equivalent populations of random and pseudo-random data.', // default page meta tag
  themeConfig: {
    theme: '@vuepress/theme-default',
    lastUpdated: 'Last Updated',
    // displayAllHeaders: true,
    sidebar: [
      {
        title: 'Main',   // required
        path: '/motivation',      // optional, which should be a absolute path.
        collapsable: true,  // optional, defaults to true
        sidebarDepth: 1,
        children: [
          'motivation',
          'quick-start'
        ]
      }
    ],
    nav: [
      {text: 'Data', link:'https://github.com/jakeYeager/qw-data-flux'},
      {text: 'Quake Works', link:'https://quake.works'},
    ]
  }
};
