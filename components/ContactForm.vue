<template>
<form name="contact" method="POST" netlify>
  <input type="hidden" name="form-name" value="contact" />
  <p>
    <label>お名前 <input type="text" name="name" /></label>   
  </p>
  <p>
    <label>メールアドレス<input type="email" name="email" /></label>
  </p>
  <p>
    <label>お問い合わせ内容<textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">送信する</button>
  </p>
</form>
</template>