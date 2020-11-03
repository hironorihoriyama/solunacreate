<template>
  <div
    class="mnu"
    :class="{ 'mnu-top': top, 'mnu-ab': ab, 'mnu-atl': atl, 'mnu-cnt': cnt }"
  >
    <div class="mnu_wp">
      <h1 class="mnu_ttl">SOLUNA CREATE</h1>
      <ul class="mnu_ls">
        <li><nuxt-link to="/">HOME</nuxt-link></li>
        <li><nuxt-link to="/about">ABOUT US</nuxt-link></li>
        <li><nuxt-link to="/atelier">ATELIER</nuxt-link></li>
        <li><a href="#">COMPANY</a></li>
        <li><nuxt-link to="/contact">CONTACT</nuxt-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    top: { type: Boolean, default: false },
    ab: { type: Boolean, default: false },
    atl: { type: Boolean, default: false },
    cnt: { type: Boolean, default: false },
  },
}
</script>

<style　lang="sass">
@import '~assets/scss/_variable.scss';
@import '~assets/scss/_mixin.scss';
.mnu
  width: 100%
  &-top
    height: 95px
  &-ab
    background-size: cover
    background-position: center
    background-image: url('~@/assets/img/ab_kv.jpg')
    & .mnu_wp
      position: relative
      margin-right: auto
      margin-left: auto
      width: 71%
      height: 640px
  &-atl
    background-size: cover
    background-position: center
    background-image: url('~@/assets/img/atl_kv.jpg')
    & .mnu_wp
      position: relative
      margin-right: auto
      margin-left: auto
      width: 71%
      height: 640px
  &-cnt .mnu_wp
    position: relative
    margin-right: auto
    margin-left: auto
    width: 71%
    height: 150px
    & .mnu_ttl
      color: $gray-txt
    & .mnu_ls a
      color: $gray-txt
  &_ttl
    position: absolute
    top: 81px
    text-align: center
    width: 100%
    color: $white
    @include wf-din()
  &_ls
    writing-mode: vertical-rl
    list-style: none
    padding: 0
    position: absolute
    top: 55px
    right: 0
    & li
      font-size: 14px
      margin-left: 33px
      &:last-of-type
        margin-bottom: 0
      & a
        text-decoration: none
        color: $white
</style>