<template>
  <div class="carousel">
    <img :src="getActiveUrl()">
    <div class="caption">
      <button class="material-icons mr-2 locate" @click="--active">place</button>
      <span>
        <h5>Пансионат «Солнечный»</h5>
        <p class="mb-0 caption-text">Республика Абхазия, село Амжвахус</p>
      </span>
    </div>
    <div class="controls">
      <button class="material-icons" @click="--active">arrow_back</button>
      <button class="material-icons" @click="++active">arrow_forward</button>
    </div>
  </div>
</template>
<script>

export default {
  methods: {
    getId() {
      return ((this.active % 4 + 4) % 4)
    },
    getActiveUrl() {
      let id = this.getId()
      if (id === 0)
        return require("../assets/solnechnyi.jpg")
      else if (id === 1)
        return require("../assets/universitetskiy.jpg")
      else if (id === 2)
        return require("../assets/krasnovidovo.png")
      else if (id === 3)
        return require("../assets/burevestnik.jpg")
    }
  },
  data() {
    return {
      active: 0,
      activeImg: "../assets/solnechnyi.jpg",
    }

  }
}
</script>
<style scoped>
.caption p {
  color: #858585;
  font-weight: 500;
  font-size: 20px;
}

.caption h5 {
  font-size: 24px;
  font-weight: 600;
}

.locate {
  align-self: start;
  height: 30px;
}

.carousel img {
  /*position: absolute;*/
  /*opacity: 0;*/
  margin-left: 125px;
  left: 125px;
  top: 0;
  object-fit: cover;
  width: 629px;
  height: 832px;
  border-radius: 50px;
}

.slides img.active {
  opacity: 1;
}

.controls {
  position: absolute;
  left: 0;
  top: 200px;
  display: flex;
}

.controls button {
  border: 2px solid #DFDFDF;
  border-radius: 50%;
  color: #858585;
  width: 43px;
  height: 43px;
  margin-right: 0.5rem;
}

.caption {
  position: absolute;
  padding: 1.5rem;
  top: 71px;
  width: 492px;
  display: flex;
  background: rgba(252, 250, 247, 0.8);
  border: 1px solid #E9E9E9;
  box-shadow: 0px 5px 22px rgba(18, 31, 67, 0.08);
  backdrop-filter: blur(20px);

  /* Note: backdrop-filter has minimal browser support */
  border-radius: 15px;
}
</style>