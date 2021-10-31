<template>
  <div>
    <div class="calc-input">
      <div class="group-input grid3cols">
        <label class="calc-label" for="inputHotel">Пансионат</label>
        <select class="display-select" id="inputHotel">
          <option selected>Выберите...</option>
          <option value="1">Красновидово</option>
          <option value="2">Солнечный</option>
          <option value="3">Университетский</option>
          <option value="4">Буревестник</option>
        </select>
      </div>

      <div class="group-input">
        <label class="calc-label" for="inputCheckIn">Заезд</label>
        <input type="date" id="inputCheckIn" class="display-select">
      </div>
      <div class="group-input inputs">
        <label class="calc-label" for="inputCheckOut">Выезд</label>
        <input type="date" id="inputCheckOut" class="display-select">
      </div>
      <div class="group-input">
        <label class="calc-label guests-label" for="inputGuests">Число гостей</label>
        <select class="display-select" id="inputGuests">
          <option selected>Выберите...</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
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
  width: 100%;
  appearance: none;
  flex-grow: 1;
  font-size: 20px;
  color: #868686;
  font-weight: 500;
}

.calc-input {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto;
  grid-column-gap: 2rem;
  grid-row-gap: 48px;
  margin-bottom: 78px;
}
label {
  margin-bottom: 0;
}
.group-input {
  display: flex;
  flex-direction: row;
  align-items: center;

}
.grid3cols {
  grid-column-start: 1;
  grid-column-end: 4;
  display: flex;
}

.calc-label {
  font-weight: 500;
  font-size: 20px;
  margin-right: 2rem;
}

.book-btn {
  /* blue */
  background: #3D62BB;
  border-radius: 50px;
  color: white;
  padding: 19px 47px;
}

input[type=date]::-webkit-calendar-picker-indicator {
  display: none;
}
@media screen and (max-width: 2200px) {
  .group-input {
    flex-direction: column;
    align-items: start;
    justify-content: stretch;
  }
}
</style>