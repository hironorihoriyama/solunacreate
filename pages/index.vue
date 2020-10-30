<template>
  <div
    class="top_container"
    v-bind:style="styleObject"
  >
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div class="swiper-slide swiper-slide_01" v-bind:style="styleObject"></div>
        <div class="swiper-slide swiper-slide_02" v-bind:style="styleObject"></div>
        <div class="swiper-slide swiper-slide_03" v-bind:style="styleObject"></div>
        <div class="swiper-slide swiper-slide_04" v-bind:style="styleObject"></div>
        <div class="swiper-slide swiper-slide_05" v-bind:style="styleObject"></div>
        <div class="swiper-slide swiper-slide_06" v-bind:style="styleObject"></div>
        <div class="swiper-slide swiper-slide_07" v-bind:style="styleObject"></div>
        <div class="swiper-slide swiper-slide_08" v-bind:style="styleObject"></div>
      </div>
    </div>
    <div class="top_main">
      <Pagettl class="top_main_pagettl-l" />
      <Sns class="top_main_links-l" />
      <Button />
    </div>
    <Info class="top_info" />
    <Links class="top_links" />
    <Address class="top_right" />
    <Copyright class="top_bottom" />
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
@import '~assets/scss/_variable.scss';
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
      background-image: url('~@/assets/img/kv.jpg')
      @include mediaQuery-down(md)
        background-image: url('~@/assets/img/kv-sp.jpg')
    &_02
      background-image: url('~@/assets/img/kv2.jpg')
      @include mediaQuery-down(md)
        background-image: url('~@/assets/img/kv2-sp.jpg')
    &_03
      background-image: url('~@/assets/img/kv-M3_001-pc.jpg')
      @include mediaQuery-down(md)
        background-image: url('~@/assets/img/kv-M3_001-sp.jpg')
    &_04
      background-image: url('~@/assets/img/kv-M5_001-pc.jpg')
      @include mediaQuery-down(md)
        background-image: url('~@/assets/img/kv-M5_001-sp.jpg')
    &_05
      background-image: url('~@/assets/img/kv-L3_001-pc.jpg')
      @include mediaQuery-down(md)
        background-image: url('~@/assets/img/kv-L3_001-sp.jpg')
    &_06
      background-image: url('~@/assets/img/kv-L5_001-pc.jpg')
      @include mediaQuery-down(md)
        background-image: url('~@/assets/img/kv-L5_001-sp.jpg')
    &_07
      background-image: url('~@/assets/img/kv-L7_001-pc.jpg')
      @include mediaQuery-down(md)
        background-image: url('~@/assets/img/kv-L7_001-sp.jpg')
    &_08
      background-image: url('~@/assets/img/kv-L7_M3_001-pc.jpg')
      @include mediaQuery-down(md)
        background-image: url('~@/assets/img/kv-L7_M3_001-sp.jpg')
.top
  &_container
    margin: 0 auto
    display: flex
    justify-content: center
    align-items: center
    position: relative
  &_main
    text-align: center
    &_pagettl
      &-l
        padding-top: 10rem
        @include mediaQuery-down(md)
          padding-top: 30rem
    &_links
      &-l
        margin-top: 2rem
        margin-bottom: 3rem
  &_info
    position: absolute
    top: $yend
    left: $xend
  &_links
    font-size: $fs-small
    position: absolute
    left: -2rem
    transform: rotate(90deg)
    @include mediaQuery-down(md)
      display: none
  &_right
    position: absolute
    right: -10rem
    transform: rotate(-90deg)
    @include mediaQuery-down(md)
      display: none
  &_bottom
    position: absolute
    bottom: $yend
    right: $xend
    @include mediaQuery-down(md)
      display: none

</style>
