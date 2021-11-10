<template>
  <div>
    <Header :showAuth="showAuth"/>
      <div class="display">
        <span>
          <h1 class="">Забронируй отдых<br>в <span class="txt-primary">пансионатах МГУ</span><br>онлайн</h1>
          <Calc></Calc>
        </span>
        <Carousel :hotels="hotels"></Carousel>
      </div>
    <div class="hotels">
      <h1>Пансионаты</h1>
      <div class="cards" >
        <Card v-for="hotel in hotels" :key="hotel.id" :hotel = "hotel"/>
      </div>

    </div>

  </div>
</template>
<script>

// import HelloWorld from './components/HelloWorld';

import Header from './Header'
import Calc from './Calc'
import Carousel from './Carousel'
import axios from 'axios'
import Card from './Card'

export default {
  name: 'App',

  components: {
    // HelloWorld,
    Header, Calc, Carousel, Card
  },
  methods: {
    getWeather(){
      axios
          .get('https://api.openweathermap.org/data/2.5/weather?q=Moscow&appid=375b5b72defecfdfccfa090d50f49db4')
          .then(response => (this.info = response.data.main))
    },
  },

  data: () => ({
    info: 'нет инфы',
    showAuth: false,
    hotels: [
      { title: "Пансионат",
        name: "Солнечный",
        caption: "Республика Абхазия, село Амжвахус",
        place: 'Абхазия',
        url: require("../assets/solnechnyi.jpg")
      },
      { title: "Пансионат",
        name: "Университетский",
        caption: "Московская область, д. Волково",
        place: 'Московская область',
        url: require("../assets/universitetskiy.jpg")
      },
      { title: "Пансионат",
        name: "Буревестник",
        caption: "Краснодарский край, Сочи",
        place: 'Сочи',
        url: require("../assets/burevestnik.jpg")
      },
      { title: "Дом отдыха",
        name: "Красновидово",
        caption: "Московская область",
        place: 'Московская область',
        url: require("../assets/krasnovidovo.png")
      },
    ]
  }),
};
</script>
<style scoped>
.display {
  margin-top: 26px;
  display: flex;
  padding-left: 11.46%;
  padding-right: 3.91%;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
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
  width: auto;
  align-self: start;
}
@media screen and (max-width: 1900px) {
  .display{
    flex-direction: column;
  }
}
.hotels {
  padding: 57px 220px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.cards {
  display: grid;
  grid-template-columns: auto auto auto auto;
  flex-direction: row;
  margin-top: 96.66px;
  grid-column-gap: 20px;
  grid-row-gap: 38.03px;
  align-self: center;
}
@media screen and (max-width: 1900px){
  .cards {
    grid-template-columns: auto auto auto;
  }
}
@media screen and (max-width: 1550px){
  .cards {
    grid-template-columns: auto auto;
  }
}

</style>