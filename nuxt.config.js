
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
    title: 'TOUN',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'TOUN（トウン）は「New nostalgic」なスニーカーのブランドです。時代を経ても、どこか懐かしい、でも新しい。そんな靴づくりを目指しています。古くから革靴の産地であった奈良県中部エリア、TOUNのスニーカーは、その地でつくられています。日本で初めて都ができた奈良の地でデザインされ、つくられたTOUNのスニーカーは連綿と続く時の流れから学び、新しいものを生み出す「New nostalgic」がコンセプトです。' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'TOUN | 奈良のスニーカーブランド' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://toun-nara.jp' },
      { hid: 'og:title', property: 'og:title', content: 'TOUN | 奈良のスニーカーブランド' },
      { hid: 'og:description', property: 'og:description', content: 'TOUN（トウン）は「New nostalgic」なスニーカーのブランドです。時代を経ても、どこか懐かしい、でも新しい。そんな靴づくりを目指しています。古くから革靴の産地であった奈良県中部エリア、TOUNのスニーカーは、その地でつくられています。日本で初めて都ができた奈良の地でデザインされ、つくられたTOUNのスニーカーは連綿と続く時の流れから学び、新しいものを生み出す「New nostalgic」がコンセプトです。' },
      { hid: 'og:image', property: 'og:image', content: 'https://toun-nara.jp/og.png"' },
      { name: 'twitter:card', content: 'summary' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
    '~/plugins/vue-awesome-swiper'
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
