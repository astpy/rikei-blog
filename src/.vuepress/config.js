// .vuepress/config.js

module.exports = {

  // Title of your website
  title: 'Rikei Student Blog',

  // Description of your website
  description: '理系大学生が独自の観点から役立つ情報を共有するブログです。',

  // Language of your website
  locales: {
    '/': {
      lang: 'ja-JP',
    },
  },

  // Theme to use
  theme: 'meteorlxy',

  // Theme config
  themeConfig: {
    // Language of this theme. See the [Theme Language] section below.
    lang: 'ja-JP',

    // Personal infomation (delete the fields if you don't have / don't want to display)
    personalInfo: {
      // Nickname
      nickname: 'AstPy_ms',

      // Introduction of yourself (HTML supported)
      description: 'Masaki KUGE',

      // Email
      email: 'sketdance551@gmail.com',

      // Your location
      location: 'Tokyo, Japan',

      // Your organization
      organization: 'Tokyo Metropolitan University',
      // organization: 'ALONE',

      // Your avatar image
      // Set to external link
      avatar: 'https://i.gyazo.com/8ccebf461a2695100bb0de3efb548019.jpg',
      // Or put into `.vuepress/public` directory. E.g. `.vuepress/public/img/avatar.jpg`
      // avatar: '/img/avatar.jpg',

      // Accounts of SNS
      sns: {

        // Facebook account and link
        facebook: {
          account: 'Masaki Kuge',
          link: 'https://www.facebook.com/masaki.kuge.1',
        },
        
        // Github account and link
        github: {
          account: 'AstPy-ms',
          link: 'https://github.com/AstPy-ms',
        },

        // Twitter account and link
        twitter: {
          account: 'Masaki Kuge',
          link: 'https://twitter.com/kuge_masa',
        },        
      },
    },

    // Header Config (Optional)
    header: {
      // The background of the header. You can choose to use an image, or to use random pattern (geopattern)
      background: {
        // URL of the background image. If you set the URL, the random pattern will not be generated, and the `useGeo` will be ignored.
        url: '/assets/img/bg.jpg',

        // Use random pattern. If you set it to `false`, and you don't set the image URL, the background will be blank.
        useGeo: true,
      },

      // show title in the header or not
      showTitle: true,
    },

    // Footer Config (Optional)
    footer: {
      // Show 'Powered by VuePress' or not (enable it to support VuePress)
      poweredBy: true,

      // Show the theme that you are using (enable it to support this theme) (please do not disable it, haha)
      poweredByTheme: true,

      // Add your custom footer (HTML supported)
      custom: 'Copyright 2018-present <a href="https://github.com/meteorlxy" target="_blank">meteorlxy</a> | MIT License',
    },

    // Info Card Config (Optional)
    infoCard: {
      // The background of the info card's header. You can choose to use an image, or to use random pattern (geopattern)
      headerBackground: {
        // URL of the background image. If you set the URL, the random pattern will not be generated, and the `useGeo` will be ignored.
        url: '/assets/img/bg.jpg',

        // Use random pattern. If you set it to `false`, and you don't set the image URL, the background will be blank.
        useGeo: true,
      },
    },

    // Show the last updated time of your posts
    lastUpdated: true,

    // The content of your navbar links
    nav: [
      { text: 'Home', link: '/', exact: true },
      { text: 'Posts', link: '/posts/', exact: false },
      { text: "About", link: "/about/"},
    ],

    // Comments config. See the [Posts Comments] section below.
    comments: {
      owner: 'AstPy-ms',
      repo: 'rikei-blog',
      clientId: 'dab1fd7b53f389f4a25b',
      clientSecret: '0a731826fc14d265051cd91482c2720d03054825',
    },

    // Pagination config (Optional)
    pagination: {
      perPage: 5,
    },

    // Default Pages (Optional, the default value of all pages is `true`)
    defaultPages: {
      // Allow theme to add Home page (url: /)
      home: true,
      // Allow theme to add Posts page (url: /posts/)
      posts: true,
    },
  },
}

