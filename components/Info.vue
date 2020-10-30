<template>
  <div class="info">
    <p class="info_text info_text-jp">
      古都奈良で生まれたTOUNは<br>
      「New nostalgic」なスニーカーのブランドです。<br>
      時代を経ても、どこか懐かしい、でも新しい。<br>
      そんな靴づくりを目指しています。
    </p>
    <p class="info_text info_text-l info_text-en">
      The sneaker brand &quot;TOUN&quot; was born in the ancient city of Nara <br>
      and that concept is &quot;New nostalgic&quot;. <br>
      We hope that make you feel &quot;nostalgic, but new&quot; <br>
      by our products in any period.
    </p>
  </div>
</template>

<style lang="sass">
@import '~assets/scss/_variable.scss';
@import '~assets/scss/_mixin.scss';
.info
  &_text
    color: $keycolor
    letter-spacing: .1em
    line-height: 2.6rem
    @include wf-ten-mincho()
    &-l
      margin: 1.25rem 0
    &-jp
      font-size: $fs-mid
      @include mediaQuery-down(md)
        font-size: small
    &-en
      font-size: .8rem
      line-height: 1.6rem
      @include mediaQuery-down(md)
        display: none
</style>
