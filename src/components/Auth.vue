<template>
    <div class="popup">
      <div class="auth" v-show="!pwdRecovery">
        <h2 class="auth-title">Вход в аккаунт</h2>
        <input type="email" class="auth-input text2" placeholder="Электронная почта">
        <input type="password" class="auth-input text2" placeholder="Пароль">
        <button class="auth-btn text2">Войти</button>
        <button class="forgot-pwd text2" @click="pwdRecovery = true">Не помню пароль</button>
        <span class="line"></span>
        <p class="no-acc text2">Нет аккаунта?</p>
        <button class="reg text2">Зарегестрироваться</button>
      </div>

      <div class="pwdRecovery" v-show="pwdRecovery">
        <h2 class="pwdRecovery-title">Сбросить пароль</h2>
        <p class="text1 message">Введите адрес электронной почты,<br>
          мы отправим вам инструкцию<br>
          по восстановлению пароля</p>
        <input type="email" class="auth-input text2" placeholder="Электронная почта">
        <button class="recovery-btn text2">Восстановить пароль</button>
        <button class="forgot-pwd text2" @click="pwdRecovery = false">Вернуться назад</button>
        <span class="line"></span>
        <p class="no-acc text2">Нет аккаунта?</p>
        <button class="reg text2">Зарегестрироваться</button>
      </div>
    </div>
</template>

<script>
export default {
  data(){
    return {
      pwdRecovery: false,
    }
  },
}
</script>

<style scoped>
.message {
  color: #858585;
  text-align: center;
  margin-bottom: 34px;
  line-height: 22px;
}

.popup {
  position: fixed;
  top: 50vh;
  margin-top: -314px;
  left: 50%;
  width: 480px;
  height: 628px;
  background: white;
  box-shadow: 0px 4px 32px rgba(0, 16, 61, 0.16);
  border-radius: 15px;
  margin-left: -240px;
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.auth, .pwdRecovery {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.auth-title, .pwdRecovery-title {
  margin: 60px auto 40px auto;
  font-weight: 600;
  font-size: 36px;
  font-family: Montserrat, sans-serif;
  text-align: center;
}
.pwdRecovery-title {
  margin-bottom: 20px;
}

.auth-input {
  background: #FFFFFF;
  width: 400px;
  height: 60px;
  margin: 0 auto;
  /* lightgray */
  border: 1px solid #E3E3E3;
  box-sizing: border-box;
  border-radius: 50px;
  padding: 16px 30px;
  margin-bottom: 20px;
}

.auth-btn, .recovery-btn {
  width: 400px;
  height: 62px;
  background: #E3E3E3;
  border-radius: 50px;
  color: #858585;
  margin-bottom: 40px;
}
.recovery-btn {
  background-color: #3D62BB;
  color: white;
}
.forgot-pwd {
  color: #3D62BB;
  margin-bottom: 40px;
}

.line {
  width: 342px;
  height: 0;
  border: 1px solid #E3E3E3;
  margin-bottom: 40px;
}

.no-acc {
  color: #858585;
  margin-bottom: 0;
}

.reg {
  color: #3D62BB;
  margin-bottom: 0;
}
</style>