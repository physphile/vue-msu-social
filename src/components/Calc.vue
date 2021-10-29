<template>
  <div>
    <div class="calc-input">
      <div class="input-group mb-3 grid3cols">
        <div class="input-group-prepend">
          <label class="calc-label" for="inputHotel">Пансионат</label>
        </div>
        <select class="display-select" id="inputHotel">
          <option selected>Выберите...</option>
          <option value="1">Красновидово</option>
          <option value="2">Солнечный</option>
          <option value="3">Университетский</option>
          <option value="4">Буревестник</option>
        </select>
      </div>

      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <label class="calc-label" for="inputCheckIn">Заезд</label>
        </div>
        <input type="date" id="inputCheckIn" class="display-select">
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <label class="calc-label" for="inputCheckOut">Выезд</label>
        </div>
        <input type="date" id="inputCheckOut" class="display-select">
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <label class="calc-label" for="inputGuests">Число гостей</label>
        </div>
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
.display-select {
  background: #FFFFFF;
  box-shadow: 0px 4px 21px rgba(0, 0, 0, 0.07);
  border-radius: 50px;
  border: none;
  padding: 16px 30px;

  appearance: none;
  flex-grow: 1;
  font-size: 20px;
  color: #868686;
  font-weight: 500;
}
.calc-input {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: 1fr 1fr;
  grid-column-gap: 2rem;
  grid-row-gap: 1rem;
  margin-bottom: 2rem;
}
.grid3cols{
  grid-column-start: 1;
  grid-column-end: 4;
  display: flex;
}
.calc-label {
   margin: auto;
   margin-right: 1rem;
   font-weight: 500;
  font-size: 20px;
 }
.book-btn {
  /* blue */
  background: #3D62BB;
  border-radius: 50px;
  color: white;
  padding: 19px 47px;
}
</style>