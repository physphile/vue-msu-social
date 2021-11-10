<template>
  <div class="carousel">
    <img :src="hotels[getId()].url" class="carousel-img">
    <div class="carousel-caption">
        <img src="../assets/locate_icon.png" alt="" class="locate">
      <span>
        <h5>{{ getCaptionTitle(getId()) }}</h5>
        <p class="mb-0 caption-text">{{ hotels[getId()].caption }}</p>
      </span>
    </div>
    <div class="controls">
      <button class="material-icons left" @click="--active">arrow_back</button>
      <button class="material-icons right" @click="++active">arrow_forward</button>
    </div>
  </div>
</template>
<script>
//«Солнечный»
export default {
  methods: {
    getId() {
      return ((this.active % 4 + 4) % 4)
    },
    getCaptionTitle(id){
      return this.hotels[id].title + ' «' + this.hotels[id].name + '»'
    }
  },
  data() {
    return {
      active: 0,

    }

  },
  props: [
      'hotels'
  ]
}
</script>
<style scoped>
.carousel-caption p {
  color: #858585;
  font-weight: 500;
  font-size: 20px;
}

.carousel-caption h5 {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 2px;
}

.locate {
  align-self: start;
  height: 30px;
  margin-right: 15.38px;
}

.carousel-img {
  margin-left: 77px;
  object-fit: cover;
  width: 629px;
  height: 832px;
  border-radius: 50px;
  box-shadow: 0 5px 22px rgba(18, 31, 67, 0.08);
}

.slides img.active {
  opacity: 1;
}

.controls {
  position: absolute;
  left: -43px;
  top: 200px;
  display: flex;
}
.controls button {
  border: 2px solid #DFDFDF;
  border-radius: 50%;
  color: #858585;
  width: 43px;
  height: 43px;
  margin-right: 9px;
}

.carousel-caption {
  position: absolute;
  padding: 25px 36px;
  left: -43px;
  top: 71px;
  width: 494px;
  height: 114px;
  display: flex;
  background: rgba(252, 250, 247, 0.8);
  border: 1px solid #E9E9E9;
  box-shadow: 0px 5px 22px rgba(18, 31, 67, 0.08);
  backdrop-filter: blur(20px);
  color: black;
  text-align: start;
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 15px;
  z-index: 2;
}
</style>