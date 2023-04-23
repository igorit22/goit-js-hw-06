const input = document.querySelector("#controls input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

createBtn.addEventListener("click", () => {
  const amount = input.value;
  if (
    amount < parseInt(input.getAttribute("min")) ||
    amount > parseInt(input.getAttribute("max"))
  ) {
    alert(
      `Будь ласка, введіть значення від ${input.min} до ${input.max}`
    );
    return;
  }

  let boxesMarkup = "";
  let size = 30;

  for (let i = 0; i < amount; i++) {
    boxesMarkup += `<div style="background-color: ${getRandomHexColor()}; width: ${size}px; height: ${size}px;"></div>`;
    size += 10;
  }

  boxes.insertAdjacentHTML("beforeend", boxesMarkup);
});

destroyBtn.addEventListener("click", () => {
  boxes.innerHTML = "";
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}
