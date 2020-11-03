<template>
  <div v-swiper:mySwiper="swiperOption" v-bind:style="styleObject">
    <div class="swiper-wrapper">
      <div class="swiper-slide swiper-slide_01" v-bind:style="styleObject"></div>
      <div class="swiper-slide swiper-slide_02" v-bind:style="styleObject"></div>
      <div class="swiper-slide swiper-slide_03" v-bind:style="styleObject"></div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  data() {
    let innerHeight = 0
    if(process.browser) {
      innerHeight = window.innerHeight
    }
    return {
      styleObject: {
        minHeight: innerHeight + 'px'
      },
      swiperOption: {
        speed: 1000,
        loop: true,
        effect: 'fade',
        autoplay: {
          delay: 5000,
        }
      },
    }
  },
  methods: {
    handleResize: function() {
      this.styleObject.minHeight = window.innerHeight + 'px'
    },
  },
  mounted() {
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
  },
}
</script>

<style　lang="sass">
@import '~assets/scss/_mixin.scss';
.swiper
  &-container
    z-index: -1
    position: absolute
    width: 100%
    height: 100%
  &-slide
    background-size: cover
    background-position: center
    &_01
      background-image: url('~@/assets/img/kv1.jpg')
      @include mediaQuery-down(md)
        background-image: url('~@/assets/img/kv1.jpg')
    &_02
      background-image: url('~@/assets/img/kv2.jpg')
      @include mediaQuery-down(md)
        background-image: url('~@/assets/img/kv2.jpg')
    &_03
      background-image: url('~@/assets/img/kv3.jpg')
      @include mediaQuery-down(md)
        background-image: url('~@/assets/img/kv3.jpg')
</style>
