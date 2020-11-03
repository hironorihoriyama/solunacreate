<template>
  <div class="atl">
    <Mnu :atl="true" />
    <Clm>
      <div class="atl_sc">
        <p class="atl_sc_ttl-sub">ATELIER HORAI</p>
        <p class="atl_sc_ttl">奈良の地域資源を生かした新しい仕事場</p>
        <p class="atl_sc_txt">1Fギャラリーサロン、2Fシェアオフィス、3Fスタジオの3フロアからなるアトリエ宝来は、奈良の地域資源を生かした新しい仕事場です。奈良県産の杉材を贅沢に用いた空間は、優しい香りに包まれて落ち着いて話ができる空間です。また、調度品も県内の木工作家の作品を使っており、アートに囲まれた静かな空間で、深い対話ができるサロンとなっています。</p>
      </div>
      <div class="atl_pnl">
        <img src="~/assets/img/atl1.jpg" alt="atl1" class="atl_pnl_img">
        <div class="atl_pnl_wp-a">
          <div class="atl_pnl_wp-b">
            <img src="~/assets/img/atl2.jpg" alt="atl2" class="atl_pnl_img">
            <img src="~/assets/img/atl3.jpg" alt="atl3" class="atl_pnl_img">
          </div>
          <div class="atl_pnl_wp-b">
            <img src="~/assets/img/atl4.jpg" alt="atl4" class="atl_pnl_img">
            <img src="~/assets/img/atl5.jpg" alt="atl5" class="atl_pnl_img">
          </div>
        </div>
        <img src="~/assets/img/atl6.jpg" alt="atl6" class="atl_pnl_img">
        <div class="atl_pnl_wp-a">
          <img src="~/assets/img/atl7.jpg" alt="atl7" class="atl_pnl_img-sm">
          <img src="~/assets/img/atl8.jpg" alt="atl8" class="atl_pnl_img-sm">
        </div>
        <img src="~/assets/img/atl9.jpg" alt="atl9" class="atl_pnl_img">
      </div>
      <div class="atl_sc-sm">
        <img src="~/assets/img/atl_fee.jpg" alt="atl_fee" class="atl_sc_img">
        <p class="atl_sc_txt">
          ●キッチン使用料：550円/1時間、4,400円/日　●来客用駐車場使用料：100円/1時間、500円/日　●プロジェクター大（80inchスクリーン付）：2,000円/日　●プロジェクター小（60inchスクリーン付）：1,000円/日　●ブルーレイプレーヤー（スピーカー付）：1,000円/日　●ホワイトボード：500円/日　●コピー（A4白黒）：5円/1枚、（A4カラー）：20円/1枚　●FAX送受信：10円/1枚　●どこでもシート（60x80cm）：200円/枚　●コーヒー（１ポット約8杯分）：1,000円/1ポット　●ティーセット（１ポット約8杯分アソートセット）：1,000円/1ポット　●緑茶（１ポット約8杯分）：500円/1ポット<br>
          <br>
          ※お申し込みいただいた展示や行事の内容が、当施設の目的に相応しくないと判断される場合は、ギャラリー等の使用をお断りすることがあります。
        </p>
      </div>
      <div class="atl_sc-sm">
        <p class="atl_sc_ttl-sm">アクセス</p>
        <img src="~/assets/img/atl_map.jpg" alt="atl_map" class="atl_sc_img">
        <p class="atl_sc_txt">
          〒631-0845 奈良県奈良市宝来町1-7-25 【Google Maps】<br>
          TEL: 0742-55-8998 / FAX: 0742-77-6059 / info@cc-soluna.com<br>
          <br>
          ●電車でお越しの方：近鉄橿原線 尼ヶ辻駅西出口より徒歩5分<br>
          ●お車でお越しの方：国道308号より垂仁天皇陵古墳方面へ<br>
          ※来客用に1〜3番の駐車場を借りています
        </p>
      </div>
      <div class="atl_sc-sm">
        <p class="atl_sc_ttl-sm">ご協力御礼（敬称略）</p>
        <p class="atl_sc_txt">
          奈良県奈良の木ブランド課（資金融資 奈良の木利用枠の認定）、奈良県信用保証協会（資金融資）、株式会社南都銀行西大寺支店（資金融資）、住友不動産販売株式会社八木営業センター（物件仲介）、合同会社オフィスキャンプ坂本大祐（総合監修）、株式会社スペースマイン（リフォーム工事）、タクミ電気（空調機器）、奈良OAシステム株式会社（ネットワーク機器）、近鉄ケーブルネットワーク（インターネットサービス）、セコム株式会社西大寺営業所（機械警備）、富田洋子（作品展示）、石田太一（施設名揮毫）<br>
          <br>
          アトリエ宝来プロジェクトを通じて、多くのご縁をいただきましたことに感謝いたします。<br>
          2020年5月 ソルナ・クリエイト株式会社 大川健・郁子
        </p>
      </div>
      <Btn :wh="true" class="atl_btn"><nuxt-link to="/">CONTACT</nuxt-link></Btn>
    </Clm>
    <Footer />
  </div>
</template>

<style lang="sass">
@import '~assets/scss/_variable.scss';
@import '~assets/scss/_mixin.scss';

.atl
  @include wf-ten-mincho()
  &_sc
    margin-top: 93px
    &-sm
      margin-top: 77px
    &_ttl
      margin-top: 20px
      text-align: center
      color: $gray-txt
      font-size: 24px
      &-sub
        text-align: center
        color: $gray-txt
        font-size: 18px
      &-sm
        text-align: center
        color: $gray-txt
        font-size: 14px
    &_txt
      margin-top: 60px
      color: $gray-txt
      font-size: 14px
    &_img
      display: block
      margin-top: 45px
      width: 100%
  &_pnl
    margin-top: 60px
    display: flex
    flex-direction: column
    flex-wrap: wrap
    justify-content: center
    align-items: flex-start
    &_img
      display: block
      width: 100%
      margin-bottom: 32px
      &-sm
        width: 45%
        margin-bottom: 32px
    &_wp-a
      display: flex
      flex-direction: row
      flex-wrap: wrap
      justify-content: space-between
      align-items: flex-start
    &_wp-b
      width: 45%
      display: flex
      flex-direction: column
      flex-wrap: wrap
      justify-content: center
      align-items: flex-start
  &_btn
    margin-right: auto
    margin-left: auto
    margin-top: 77px
</style>