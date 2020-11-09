<template>
  <form name="contact" method="POST" netlify>
    <input type="hidden" name="form-name" value="contact" />
    <table>
      <tr><td>お名前</td><td><input type="text" name="name" placeholder="例）大川 健" /></td></tr>
      <tr><td>メールアドレス</td><td><input type="email" name="email" placeholder="例）example@cc-soluna.com" /></td></tr>
      <tr><td>お問い合わせ内容</td><td><textarea name="message" placeholder="例）お問い合わせ内容をご記入ください"></textarea></td></tr>
    </table>
    <p><input type="checkbox" name="checkbox" v-model="checked">お問い合わせ内容にお間違いなければ、左のボックスにチェックを入れ、送信してください</p>
    <button type="submit" :disabled="!checked">送信する</button>
  </form>
</template>

<script>
export default {
  data: function() {
    return {
      checked: false,
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~assets/scss/_variable.scss';
@import '~assets/scss/_mixin.scss';

form
  @include wf-ten-mincho()
  margin-top: 107px
  color: $gray-txt
  & table
    width: 100%
    & tr
      vertical-align: top
      & td
        padding-bottom: 34.5px
        & input, & textarea
          @include wf-ten-mincho()
          width: 100%
          padding: 0
          border-radius: 0
          border-top: none
          border-left: none
          border-right: none
          border-bottom: 1px solid $gray-brd
          &::placeholder
            color: #DDDDDD
        & input
          height: 34.5px
          &:focus
            outline: none 
        & textarea
          height: 244.5px
          &:focus
            outline: none
  & p
    display: flex
    justify-content: flex-start
    align-items: center
    & input
      margin-right: 20px
      width: 25px
      height: 25px
      border: 1px solid $gray-brd
  & button
    @include wf-ten-mincho()
    margin-top: 40px
    margin-right: auto
    margin-left: auto
    display: block
    width: 240px
    height: 61px
    background-color: $white
    color: $gray-txt
    border: 1px solid $gray-brd
    &:hover
      background-color: $gray-bg
    &:disabled
      color: rgba(16, 16, 16, 0.2)
      border-color: rgba(16, 16, 16, 0.2)
      &:hover
      background-color: $white
</style>