<template>
  <v-app>
    <router-view>
      <Index/>
    </router-view>

  </v-app>
</template>

<script>
import Index from './components/Index'
export default {
  name: 'App',

  components: {
    Index
  },

  data: () => ({
    //
  }),
};
</script>
<style>
* {
  font-family: Inter, sans-serif;
  font-weight: 500;
  margin: 0;
  box-sizing: border-box;
  outline: none;
}
*:hover, *:focus {
  outline: none;
}
h1 {
  font-family: Montserrat, sans-serif;
  font-weight: bold;
  font-size: 64px;
}
.text2, .text1 {
  font-family: Inter, sans-serif;
  font-weight: 500;
}
.text1 {
  font-size: 18px;
}
.text2 {
  font-size: 20px;
}
</style>