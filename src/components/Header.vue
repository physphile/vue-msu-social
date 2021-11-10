<template>
  <div>
    <header class=" align-items-center">
      <img src="../assets/msu_logo.png" alt="лого мгу" class="msu-logo">
      <img src="../assets/digcom_logo.png" alt="лого цифкома" class="digcom-logo">
      <button class="common-btn">Пансионаты</button>
      <button class="common-btn">Горячие путевки</button>
      <button class="common-btn">Кто может получить</button>
      <button class="common-btn mr-auto">О проекте</button>
      <button class="common-btn" @click="showAuth = true">Войти</button>
      <button type="button" class="reg-btn" @click="regBtnClick">Зарегистрироваться</button>
      <transition name="fade">
        <div class="blackout" v-show="showAuth" @click="showAuth = false"></div>
      </transition>

      <transition name="slide">
        <Auth v-show="showAuth"/>
      </transition>

    </header>
  </div>

</template>
<script>
import Auth from './Auth'
export default {
  components: {
    Auth
  },
  methods: {
    regBtnClick () {
      this.$router.push('/registration');
    }
  },
  data(){
    return {
      showAuth: false,
    }
  }
}
</script>
<style scoped>
.slide-enter-active, .slide-leave-active {
  transition: margin-top .5s;
}
.slide-enter, .slide-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  margin-top: 1000px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}

header {
    height: 15vh;
  display: flex;
  align-items: center;
  padding: 44px 3.91% 0 3.91%;
  margin: 0;
}
img {
  width: 100px;
  height: 100px;
  object-fit: cover;
}
.msu-logo {
  margin-right: 15px;
}
.digcom-logo {
  margin-right: 55px;
}
.reg-btn {
  /* darkblue */
  background: #445273;
  border-radius: 50px;
  padding: 19px 47px;
  color: #fff;
  font-size: 20px;
  transition: background-color .5s;
}
.reg-btn:hover {
  background-color: #3D62BB;
}

.common-btn {
  margin-right: 50px;
  font-size: 18px;
}
.common-btn:hover{
  color: #3D62BB;
}
.common-btn:active {
  color: #3D62BB;
  font-weight: 600;
}
.blackout {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 4;
  background-color: rgba(13, 19, 35, 0.4);;
}
</style>