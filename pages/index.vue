<template>
  <div class="cnt">
    <Mnu :cnt="true" />
    <Clm>
      <p class="cnt_ttl">CONTACT</p>
      <p class="cnt_txt">
        ソルナ・クリエイトへのご質問、コーチングやコンサルティングに関するご相談やご要望、アトリエ宝来へのお問い合わせなど、お気軽にご連絡ください。<br>
        <br>
        [ 個人情報の保護について ]<br>
        ●インターネットを通じて当ウェブサイトの「お問い合わせ」をご利用いただいた際に、必要な情報の元となるお客様の個人情報の取扱いを行います。<br>
        ●お客様の個人情報を、お客様の同意なしに第三者に開示することはありません。
      </p>
      <ContactForm />
    </Clm>
    <Footer />
  </div>
</template>

<script>
export default {
  data: function() {
    return {}
  },
}
</script>

<style lang="sass">
@import '~assets/scss/_variable.scss';
@import '~assets/scss/_mixin.scss';

.cnt
  @include wf-ten-mincho()
  &_ttl
    margin-top: 110px
    font-size: 18px
    text-align: center
    color: $gray-txt
  &_txt
    margin-top: 89px
    font-size: 14px
    color: $gray-txt
</style>