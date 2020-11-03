<template>
  <div v-bind:style="styleObject" class="topmnu">
    <Mnu :top="true" />
    <p class="topmnu_msg">未来をつくる、本物をつくる</p>
    <address class="topmnu_adr">
      1-7-25, Horai, Nara-shi, 631-0845, Japan<br>
      0742-55-8998<br>
      http://cc-soluna.com
    </address>
  </div>
</template>

<script>
export default {
  data() {
    let innerHeight = 0
    if(process.browser) {
      innerHeight = window.innerHeight
    }
    return {
      styleObject: {
        minHeight: innerHeight + 'px'
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
.topmnu
  z-index: 1
  position: relative
  margin-right: auto
  margin-left: auto
  width: 71%
  height: 100%
  color: $white
  &_msg
    writing-mode: vertical-rl
    position: absolute
    right: 0
    bottom: 49.8px
    font-size: 30px
  &_adr
    position: absolute
    left: 0
    bottom: 50px
    font-style: normal
</style>
