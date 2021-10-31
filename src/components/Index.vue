<template>
  <div>
    <Header>

    </Header>

      <div class="display">
        <span>
          <h1 class="">Забронируй отдых<br>в <span class="txt-primary">пансионатах МГУ</span><br>онлайн</h1>
          <Calc></Calc>
        </span>
        <Carousel></Carousel>
      </div>


  </div>
</template>
<script>
// import HelloWorld from './components/HelloWorld';
import Header from './Header'
import Calc from './Calc'
import Carousel from './Carousel'

export default {
  name: 'App',

  components: {
    // HelloWorld,
    Header, Calc, Carousel
  },

  data: () => ({
    //
  }),
};
</script>
<style scoped>
.display {
  margin-top: 26px;
  display: flex;
  padding-left: 220px;
  padding-right: 71px;
  height: 832px;
}
h1 span {
  font-family: Montserrat, sans-serif;
}
.display h1{
  font-weight: 700;
  margin-top: 46px;
  margin-bottom: 65px;
  font-size: 64px;
  min-width: 685px;
  font-family: Montserrat, sans-serif;
}
.txt-primary {
  color: #3a62bc;
  font-weight: bold;
}
.display span {
  flex-grow: 1;
  margin-right: 1rem;
}
</style>