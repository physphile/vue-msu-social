<template>
  <div class="carousel">
    <div class="slides">

      <img src="../assets/solnechnyi.jpg" alt="" :class="{active: getActive(0)}">
      <img src="../assets/universitetskiy.jpg" alt="" :class="{active: getActive(1)}">
      <img src="../assets/krasnovidovo.png" alt="" :class="{active: getActive(2)}">
      <img src="../assets/burevestnik.jpg" alt="" :class="{active: getActive(3)}">
    </div>
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
    getActive(id){
      return ((this.active%4 + 4)%4 === id)
    }
  },
  data() {
    return {
      active: 0
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
  .slides img {

    position: absolute;
    opacity: 0;
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
    display: flex;
    background: rgba(252, 250, 247, 0.8);
    border: 1px solid #E9E9E9;
    box-sizing: border-box;
    box-shadow: 0px 5px 22px rgba(18, 31, 67, 0.08);
    backdrop-filter: blur(20px);

    /* Note: backdrop-filter has minimal browser support */
    border-radius: 15px;
  }
</style>