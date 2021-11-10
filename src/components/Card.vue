<template>
  <div class="hotel-card">

    <span class="card-title">{{hotel.name}}</span>
    <span class="card-subtitle">{{hotel.title}}</span>
    <div class="img-wrap">
      <div class="card-image" :style="{'background-image': 'url(' + hotel.url+')'}"></div>
      <div class="gradient"></div>
    </div>

    <span class="place">
      <span class="material-icons mr-2 locate">place</span>
      <span class="card-place">{{hotel.place}}</span>
    </span>
    <button><span class="text2">Посмотреть</span></button>
  </div>
</template>

<script>
export default {

  props: [
      'hotel'
  ]
}
</script>

<style scoped>
  .hotel-card {
    box-shadow: 0 3.69792px 16.2708px rgba(18, 31, 67, 0.08);
    border-radius: 11.0938px;
    width: 355px;
    height: 336.97px;
    text-align: center;
    position: relative;
    transition: box-shadow .5s, color .5s;
  }
  .hotel-card:hover {
    box-shadow: 0px 3.69792px 25px rgba(87, 128, 223, 0.4);
    color: #3D62BB;
  }
.img-wrap {
  height: 81.4%;
  width: 100%;
}
  .card-image{
    width: 100%;
    height: 100%;
    border-radius: 11.0938px;
    background-size: cover;

  }
  .gradient {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 81.4%;
    border-radius: 11.0938px;
    background:linear-gradient(360deg, rgba(33, 44, 71, 0.4) 18.7%, rgba(26, 37, 62, 0) 122.7%);
  }
  button {
    margin-top: 17.06px;
    margin-bottom: 17.47px;
  }
  .card-subtitle {
    color: white;
    font-family: Inter, sans-serif;
    font-weight: 400;
    font-size: 14px;
    position: absolute;
    left: 26px;
    bottom: 88.55px;
    z-index: 2;
  }
  .card-title {
    color: white;
    font-family: Montserrat, sans-serif;
    font-weight: 600;
    font-size: 28px;
    position: absolute;
    left: 24px;
    z-index: 2;
    bottom: 111.43px;
    margin-bottom: 0;
  }
  .place {
    display: flex;
    flex-direction: row;
    align-items: center;
    position: absolute;
    background: rgba(255, 255, 255, 0.32);
    backdrop-filter: blur(13.6283px);
    left: 25.89px;
    top: 26.75px;
    color: white;
    /* Note: backdrop-filter has minimal browser support */
    border-radius: 34.0707px;
    padding: 7.39583px 17.0104px 7.39583px 13.3125px;
    z-index: 2;
  }
</style>