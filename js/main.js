const selectCity = document.querySelector(".select-city");

const orderCall = document.querySelector(".order-a-call");
const selectCityBlock = document.querySelector(".select-city-block");
const selectCityYes = document.querySelector(".select-city-block-button-yes");
const selectCityNo = document.querySelector(".select-city-block-button-no");
const closeCities = document.querySelector("#close-1");
const closeCall = document.querySelector("#close-2");
const CitiesModal = document.querySelector("#modal-1");
const CallModal = document.querySelector("#modal-2");
const cities = document.querySelectorAll(".city-name");
const radioButton = document.querySelector(".radio-button");
const ButtonCall = document.querySelector(".modal-call-button");

selectCity.addEventListener("click", togleCityBlock);
selectCityYes.addEventListener("click", togleCityBlock);

selectCityNo.addEventListener("click", togleCitiesModal);
closeCities.addEventListener("click", togleCitiesModal);

radioButton.addEventListener("click", changeRadioButton);
orderCall.addEventListener("click", togleModalCall);
closeCall.addEventListener("click", togleModalCall);
ButtonCall.addEventListener("click", togleModalCallReset);

for (let i = 0; i < cities.length; i++) {
  cities[i].addEventListener("click", togleCitiesModal_SelectedCity);
}

function togleCityBlock() {
  selectCityBlock.classList.toggle("not-visible");
}
function countClick() {
  console.log("click");
}

function togleCitiesModal() {
  CitiesModal.classList.toggle("is-open");
  if (CitiesModal.classList.contains("is-open")) {
    disableScroll();
  } else {
    enableScroll();
  }
}

function togleCitiesModal_SelectedCity(event) {
  let city;
  if (event.target.innerText === "Москва и Подмосковье") city = "Москва";
  else if (event.target.innerText === "Санкт-Петербург и Ленинградская область")
    city = "СПб";
  else city = event.target.innerText;
  document.querySelector(".select-city-block-city").innerText = city + "?";
  document.querySelector(".select-city-text").innerText = city;
  selectCityBlock.classList.toggle("not-visible");
  CitiesModal.classList.toggle("is-open");
  if (CitiesModal.classList.contains("is-open")) {
    disableScroll();
  } else {
    enableScroll();
  }
}

function changeRadioButton(event) {
  if (event.target.closest("img").alt === "Off") {
    event.target.src = "img/RadioOn.png";
    event.target.closest("img").alt = "On";
  } else {
    event.target.src = "img/RadioOff.png";
    event.target.closest("img").alt = "Off";
  }
}

function togleModalCallReset() {
  if (
    document.querySelector(".modal-call-name").value == "" ||
    document.querySelector(".modal-call-phone").value == ""
  )
    alert("Пожалуйста, заполните оба поля!");
  else {
    CallModal.classList.toggle("is-open");
    if (CallModal.classList.contains("is-open")) {
      disableScroll();
    } else {
      enableScroll();
    }
    document.querySelector(".radio-button").src = "img/RadioOff.png";
    document.querySelector(".modal-call-name").value = "";
    document.querySelector(".modal-call-phone").value = "";
  }
}
function togleModalCall() {
  CallModal.classList.toggle("is-open");
  if (CallModal.classList.contains("is-open")) {
    disableScroll();
  } else {
    enableScroll();
  }
}
new WOW().init();
