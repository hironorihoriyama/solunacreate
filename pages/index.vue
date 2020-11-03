<template>
  <div class="top">
    <Swiper />
    <TopMnu />
    <Clm>
      <p class="top_abtxt">
        ここ奈良の地では、日本人の原点を感じる風景があります。<br>
        無数の生命が響き合う生態系や、緑あふれる公園、社寺、古墳があります。<br>
        また、たくさんの人生の先達のストーリーが眠っています。<br>
        人生の節目で、これまでの人生を振り返り自分や子孫の将来について考えることができる地、奈良。<br>
        その奈良という地で、さまざまな対話の場を通じて自分の軸をもつお手伝いをします。
      </p>
      <Btn class="top_abbtn" :wh="true"><nuxt-link to="/about">ABOUT US</nuxt-link></Btn>
      <Nw />
    </Clm>
    <AtlBnr />
    <Clm>
      <p class="top_cmpttl">COMPANY</p>
      <table class="top_cmptxt">
        <tr><td>商号</td><td>ソルナ・クリエイト株式会社</td></tr>
        <tr><td>所在地</td><td>〒631-0823	奈良市西大寺国見町1丁目5 西大寺団地2号棟205</td></tr>
        <tr><td>連絡先</td><td>電話：0742-55-8998　/　FAX：0742-77-6059</td></tr>
        <tr><td>設立年月日</td><td>2015年5月25日</td></tr>
        <tr><td>資本金</td><td>500万円</td></tr>
        <tr><td>役員</td><td>代表取締役　大川 健</td></tr>
        <tr><td></td><td>取締役　大川 郁子</td></tr>
        <tr><td>経営理念</td><td>コーチングとコンサルティングで地域の未来づくりに貢献します。</td></tr>
        <tr><td>沿革</td><td>2007年4月　コーチング・ソルナ（主宰 大川郁子）を創業</td></tr>
        <tr><td></td><td>2015年5月　コンサルティング部門を加えソルナ・クリエイトとして法人化</td></tr>
        <tr><td>事業内容</td><td>・個人に対するコーチング（面談、スカイプなどにより行います）</td></tr>
        <tr><td></td><td>・コーチング技術を活用した研修の企画及び講師の派遣</td></tr>
        <tr><td></td><td>・地域政策コンサルタント</td></tr>
        <tr><td>取引銀行</td><td>南都銀行　県庁出張所</td></tr>
        <tr><td>業務提携</td><td>株式会社コミュニケーション・ファンデーション</td></tr>
        <tr><td></td><td>HRリスペクト株式会社</td></tr>
      </table>
      <Btn class="top_cmpbtn" :wh="true"><nuxt-link to="/about">CONTACT</nuxt-link></Btn>
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

.top
  @include wf-ten-mincho()
  &_abtxt
    margin-top: 127px
    color: $gray-txt
    font-size: 14px
  &_abbtn
    margin-top: 58px
    margin-right: auto
    margin-left: auto
  &_cmpttl
    margin-top: 74px
    text-align: center
    color: $gray-txt
  &_cmptxt
    margin-top: 72px
    color: $gray-txt
    font-size: 14px
    & td:nth-child(2n+1)
      width: 133px
  &_cmpbtn
    margin-top: 115px
    margin-right: auto
    margin-left: auto
</style>