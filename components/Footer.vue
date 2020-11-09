<template>
  <footer class="ft">
    <div class="ft_wp">
      <ul class="ft_ls">
        <li><a href="http://cc-soluna.com">HOME</a></li>
        <li><a href="http://cc-soluna.com/about">ABOUT US</a></li>
        <li><a href="http://cc-soluna.com/atelier">ATELIER</a></li>
        <li><a href="http://cc-soluna.com/#top_cmp">COMPANY</a></li>
        <li><a href="https://infallible-shannon-f2a1b1.netlify.app/">CONTACT</a></li>
      </ul>
      <address class="ft_ad">奈良市宝来1-7-25 / 0742-55-8998</address>
      <p class="ft_c">©Soluna Create inc.</p>
    </div>
  </footer>
</template>

<style lang="sass">
@import '~assets/scss/_variable.scss';
@import '~assets/scss/_mixin.scss';
.ft
  margin-top: 110px
  background-color: $gray-bg
  &_wp
    width: 71%
    margin-right: auto
    margin-left: auto
    position: relative
  &_ls
    padding-top: 94px
    padding-left: 0
    list-style: none
    text-align: center
    & li
      margin-bottom: 33px
      &:last-of-type
        margin-bottom: 0
        padding-bottom: 121px
        @include mediaQuery-down(md)
          padding-bottom: 161px
    & a
      text-decoration: none
      color: $gray-txt
  &_ad
    position: absolute
    bottom: 41px
    font-style: normal
    color: $gray-txt
    @include mediaQuery-down(md)
      bottom: 61px
      width: 100%
      text-align: center
  &_c
    width: 100%
    text-align: center
    position: absolute
    bottom: 41px
    color: $gray-txt

</style>