<template>
  <v-app>
    <Index></Index>
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
}

</style>