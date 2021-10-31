<template>
  <div>
    <header class=" align-items-center">
      <img src="../assets/msu_logo.jpg" alt="лого мгу" class="mr-4">
      <img src="../assets/logo_dig_com.jpg" alt="лого цифкома" class="mr-10 grayscale-img">
      <button class="common-btn">Пансионаты</button>
      <button class="common-btn">Горячие путевки</button>
      <button class="common-btn">Кто может получить</button>
      <button class="common-btn mr-auto">О проекте</button>

      <button class="common-btn">Войти</button>
      <button type="button" class="reg-btn">Зарегистрироваться</button>
    </header>
  </div>

</template>
<script>
</script>
<style scoped>
header {
    height: 15vh;
  display: flex;
  align-items: center;
  padding: 44px 75px 0 75px;
  margin: 0;
  min-width: 1745px;
}
img {
  width: 100px;
  height: 100px;
  object-fit: cover;
}
.reg-btn {
  /* darkblue */
  background: #445273;
  border-radius: 50px;
  padding: 19px 47px;
  color: #fff;
}
.common-btn {
  margin-right: 2rem;
}
.grayscale-img {
filter: grayscale(100%);
}
</style>