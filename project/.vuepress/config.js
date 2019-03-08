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
        path: '/introduction',      // optional, which should be a absolute path.
        collapsable: true,  // optional, defaults to true
        sidebarDepth: 1,
        children: [
            '/',
          'introduction',
        ]
      },
      {
        title: '1. Setup',   // required
        path: '/setup/testing-the-test',      // optional, which should be a absolute path.
        collapsable: true,  // optional, defaults to true
        sidebarDepth: 2,    // optional, defaults to 1
        children: [         // order of appearance...
          '/setup/testing-the-test',
          '/setup/parts-of-time',
          '/setup/time-issues',
          '/setup/the-marker',
        ]
      },
      {
        title: '2. Data',   // required
        path: '/data/seismic-event-collection',      // optional, which should be a absolute path.
        collapsable: true,  // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [         // order of appearance...
          '/data/seismic-event-collection',
          '/data/random-data-generation',
          '/data/true-vs-pseudo'
        ]
      },
      {
        title: '3. Tests & Graphs',   // required
        path: '/tests/unscaled-overlay',      // optional, which should be a absolute path.
        collapsable: true,  // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [         // order of appearance...
          '/tests/unscaled-overlay',
          '/tests/unscaled-earthquakes',
          '/tests/unscaled-php-rand',
          '/tests/unscaled-php-mtrand',
          '/tests/unscaled-ms-excel',
          '/tests/scaled-overlay',
          '/tests/scaled-month-graphs',
          '/tests/scaled-marker-graphs',
          '/tests/scaled-hour-graphs',
          '/tests/standard-deviations',
          '/tests/standard-deviation-months',
          '/tests/standard-deviation-markers',
          '/tests/standard-deviation-hours'
        ]
      },
      {
        title: '4. Extension',   // required
        path: '/extension/m4-anomaly',      // optional, collapsible item link
        collapsable: true,  // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [         // order of appearance...
          '/extension/m4-anomaly',
          '/extension/by-hour',
          '/extension/by-marker'
        ]
      },
      {
        title: '5. Findings',   // required
        path: '/findings/',      // optional, collapsible item link
        collapsable: true,  // optional, defaults to true
        sidebarDepth: 2,    // optional, defaults to 1
        children: [         // order of appearance...
          '/findings/'
        ]
      }
    ],
    nav: [
      {text: 'Data', link:'https://github.com/jakeYeager/qw-data-flux'},
      {text: 'Quake Works', link:'https://quake.works'},
    ]
  }
};
