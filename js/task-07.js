// const fontSizeControl = document.getElementById("font-size-control");
// const textSpan = document.getElementById("text");

// fontSizeControl.addEventListener("input", function () {
//   textSpan.style.fontSize = fontSizeControl.value + "px";
// });

// const fontSizeControl = document.querySelector('#font-size-control');
// const text = document.querySelector('#text');

// fontSizeControl.addEventListener('input', () => {
//   text.style.fontSize = `${fontSizeControl.value}px`;
// });


// const input = document.querySelector("#font-size-control");
// const span = document.querySelector("#text");

// input.value = input.min; // встановлення мінімального значення input при завантаженні сторінки
// span.style.fontSize = `${input.value}px`; // встановлення початкового розміру тексту при завантаженні сторінки

// input.addEventListener("input", (event) => {
//   span.style.fontSize = `${event.target.value}px`;
// });


const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");
const defaultValue = (parseInt(input.min) + parseInt(input.max)) / 2;

span.style.fontSize = `${defaultValue}px`;
input.value = defaultValue;

input.addEventListener("input", (event) => {
  span.style.fontSize = `${event.target.value}px`;
});
