<template>
  <div
    class="mnu"
    :class="{ 'mnu-cnt': cnt }"
  >
    <div class="mnu_wp">
      <h1 class="mnu_ttl">SOLUNA CREATE</h1>
      <div class="mnu_btn_wp">
        <a
          class="mnu_btn"
          :class="{ active: tgl }"
          @click="tgl=!tgl"
          href="#"
        >
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>
      <ul
        class="mnu_ls"
        :class="{ active: tgl }"
      >
        <li><a href="http://cc-soluna.com">HOME</a></li>
        <li><a href="http://cc-soluna.com/about">ABOUT US</a></li>
        <li><a href="http://cc-soluna.com/atelier">ATELIER</a></li>
        <li><a href="http://cc-soluna.com/#top_cmp">COMPANY</a></li>
        <li><a href="https://infallible-shannon-f2a1b1.netlify.app/">CONTACT</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cnt: { type: Boolean, default: false },
  },
  data: function() {
    return {
      tgl: false,
    }
  },
}
</script>

<style　lang="sass">
@import '~assets/scss/_variable.scss';
@import '~assets/scss/_mixin.scss';
.mnu
  width: 100%
  &-cnt .mnu_wp
    position: relative
    margin-right: auto
    margin-left: auto
    width: 71%
    height: 160px
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
  &_btn, &_btn span
    display: inline-block
    transition: all .4s
    box-sizing: border-box
  &_btn
    position: relative
    width: 40px
    height: 34px
    &:focus
      outline: none
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0)
    &_wp
      z-index: 11
      display: none
      position: fixed
      top: 50px
      right: 35px
      @include mediaQuery-down(md)
        display: block
    & span
      position: absolute
      left: 0
      width: 100%
      height: 4px
      background-color: $gray-brd
      border-radius: 4px
      &:nth-of-type(1)
        top: 0
      &:nth-of-type(2)
        top: 15px
      &:nth-of-type(3)
        bottom: 0
    &.active span:nth-of-type(1)
      -webkit-transform: translateY(15px) rotate(-45deg)
      transform: translateY(15px) rotate(-45deg)
    &.active span:nth-of-type(2)
      opacity: 0
    &.active span:nth-of-type(3)
      -webkit-transform: translateY(-15px) rotate(45deg)
      transform: translateY(-15px) rotate(45deg)
  &_ls
    writing-mode: vertical-rl
    list-style: none
    padding: 0
    position: absolute
    top: 55px
    right: 0
    @include mediaQuery-down(md)
      display: none
    & li
      font-size: 14px
      margin-left: 33px
      &:last-of-type
        margin-bottom: 0
      & a
        text-decoration: none
        color: $white
    &.active
      z-index: 10
      display: block
      position: fixed
      top: 0
      left: 0
      height: 100%
      padding-top: 180px
      writing-mode: unset
      background-color: rgba(0, 0, 0, 0.5)
      & li
        font-size: 24px
        text-align: center
        margin-left: 0
        margin-bottom: 30px
        & a
          color: $white !important
</style>