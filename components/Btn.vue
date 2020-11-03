<template>
  <div
    class="btn"
    :class="{ 'btn_wh': wh, 'btn_bl': bl }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    wh: { type: Boolean, default: false },
    bl: { type: Boolean, default: false },
  },
}
</script>

<style lang="sass">
@import '~assets/scss/_variable.scss';
.btn
  width: 240px
  height: 61px
  border: 1px solid $gray-brd
  & a
    display: flex
    justify-content: center
    align-items: center
    font-size: 14px
    height: 100%
    text-decoration: none
    color: $gray-txt
  &_wh a
    background-color: $white
    &:hover
      background-color: $gray-bg
  &_bl a
    background-color: $gray-bg
    &:hover
      background-color: $white 

</style>
