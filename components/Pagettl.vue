<template>
  <div class="pagettl">
    <h1>
      <img src="~/assets/img/logo.png" alt="TOUN" class="pagettl_logo">
    </h1>
  </div>
</template>

<style lang="sass">
@import '~assets/scss/_variable.scss';
@import '~assets/scss/_mixin.scss';
.pagettl
  animation: 1s appear
  margin: auto
  &_logo
    width: 50%
    @include mediaQuery-down(md)
      width: 30% 

@keyframes appear
  0% 
    opacity: 0

</style>
