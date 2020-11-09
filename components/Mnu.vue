<template>
  <div
    class="mnu"
    :class="{ 'mnu-cnt': cnt }"
  >
    <div class="mnu_wp">
      <h1 class="mnu_ttl">SOLUNA CREATE</h1>
      <ul class="mnu_ls">
        <li><a href="#">HOME</a></li>
        <li><a href="#">ABOUT US</a></li>
        <li><a href="#">ATELIER</a></li>
        <li><a href="#">COMPANY</a></li>
        <li><a href="#">CONTACT</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cnt: { type: Boolean, default: false },
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