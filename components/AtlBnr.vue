<template>
  <div class="atrbnr">
    <p class="atrbnr_msg">奈良の地域資源を生かした新しい仕事場</p>
    <Btn class="atrbnr_btn" :wh="true"><nuxt-link to="/about">ATELIER HORAI</nuxt-link></Btn>
  </div>
</template>

<style lang="sass">
@import '~assets/scss/_variable.scss';

.atrbnr
  margin-top: 118px
  height: 600px
  position: relative
  background-size: cover
  background-position: center
  background-image: url('~@/assets/img/atrbnr.jpg')
  display: flex
  justify-content: center
  &_msg
    position: absolute
    bottom: 147px
    font-size: 22px
    color: $white
  &_btn
    position: absolute
    bottom: 56px
</style>