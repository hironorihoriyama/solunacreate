
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'SOLUNA CREATE ソルナ・クリエイト株式会社',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '未来をつくる、本物をつくる。さまざまな対話の場を通じて自分の軸をもつお手伝いをします。企業向けのコンサルティングから個人コーチングまで、コミュニケーションをとおして課題を解決するお手伝いをしています。' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'SOLUNA CREATE ソルナ・クリエイト株式会社' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'http://cc-soluna.com' },
      { hid: 'og:title', property: 'og:title', content: 'SOLUNA CREATE ソルナ・クリエイト株式会社' },
      { hid: 'og:description', property: 'og:description', content: '未来をつくる、本物をつくる。さまざまな対話の場を通じて自分の軸をもつお手伝いをします。企業向けのコンサルティングから個人コーチングまで、コミュニケーションをとおして課題を解決するお手伝いをしています。' },
      { hid: 'og:image', property: 'og:image', content: 'http://cc-soluna.com/og.jpg"' },
      { name: 'twitter:card', content: 'summary' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.gif' }
    ],
    script: [
      { src: 'https://use.typekit.net/lhf0nit.js'}
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/scss/common.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    '~/plugins/vue-awesome-swiper',
    {src: '~plugins/ga.js', mode: 'client'}
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  },
  loading: '@/components/loading.vue'
}
