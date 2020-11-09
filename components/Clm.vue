<template>
  <div class="clm">
    <slot />
  </div>
</template>

<style lang="sass">
@import '~assets/scss/_mixin.scss';
.clm
  width: 40%
  margin-left: auto
  margin-right: auto
  @include mediaQuery-down(md)
    width: 80%  
</style>