<template>
  <div>
    <div class="calc-input">
      <div class="group-input grid3cols">
        <label class="calc-label" for="inputHotel">Пансионат</label>
        <select class="display-select hotel" id="inputHotel">
          <option selected>Выберите...</option>
          <option value="1">Красновидово</option>
          <option value="2">Солнечный</option>
          <option value="3">Университетский</option>
          <option value="4">Буревестник</option>
        </select>
      </div>
      <div class="row2">
        <div class="group-input ">
          <label class="calc-label" for="inputCheckIn">Заезд</label>
          <input type="date" id="inputCheckIn" class="display-select checkInOut">
          <img src="../assets/calendar.png" alt="">
        </div>
        <div class="group-input ">
          <label class="calc-label" for="inputCheckOut">Выезд</label>
          <input type="date" id="inputCheckOut" class="display-select checkInOut">
          <img src="../assets/calendar.png" alt="">
        </div>
        <div class="group-input ">
          <label class="calc-label guests-label" for="inputGuests">Число гостей</label>
          <select class="display-select guests" id="inputGuests ">
            <option value="1" selected>1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
      </div>

    </div>
    <button class="book-btn">Забронировать</button>
  </div>
</template>
<script>

</script>
<style scoped>
.guests-label {
  min-width: 134px;
}
.display-select {
  background: #FFFFFF;
  box-shadow: 0px 4px 21px rgba(0, 0, 0, 0.07);
  border-radius: 50px;
  border: none;
  padding: 16px 30px;
  appearance: none;
  flex-grow: 1;
  font-size: 20px;
  font-weight: 500;
  align-items: center;
}
.checkInOut {
  width: 204px;
  margin-right: 50px;
}
.hotel {
  width: 798px;
}
.guests {
  width: 102px;
}
.calc-input {
  display: flex;
  flex-direction: column;
  grid-row-gap: 48px;
  margin-bottom: 78px;
  align-items: flex-start;
}
label {
  margin-bottom: 0;
}
.group-input {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.row2 {
  display: flex;
}
.grid3cols {
  grid-column-start: 1;
  grid-column-end: 4;
  display: flex;
}

.calc-label {
  font-weight: 500;
  font-size: 20px;
  margin-right: 20px;
  color: #858585;
}

.book-btn {
  /* blue */
  background: #3D62BB;
  border-radius: 50px;
  color: white;
  padding: 19px 47px;
  margin-bottom: 32px;
  font-size: 20px;
}

input[type=date]::-webkit-calendar-picker-indicator {
  display: none;
}
/*@media screen and (max-width: 2200px) {*/
/*  .group-input {*/
/*    flex-direction: column;*/
/*    align-items: start;*/
/*    justify-content: stretch;*/
/*  }*/
/*}*/
.group-input img {
  position: absolute;
  left: 239.9px;
}
</style>