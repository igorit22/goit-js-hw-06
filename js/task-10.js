// Отримаємо посилання на елементи із сторінки

const input = document.querySelector("#controls input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesDiv = document.querySelector("#boxes");

// Функція для створення колекції елементів

function createBoxes(amount) {
  const boxes = [];
  let size = 30;

  // Створюємо цикл для створення заданої кількості елементів

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
    size += 10;
  }

  // Додаємо фрагмент з елементами до контейнера

  boxesDiv.append(...boxes);
}

// Функція для очищення контейнера з елементами (очищуємо HTML-вміст контейнера)

function destroyBoxes() {
  boxesDiv.innerHTML = "";
}

// Функція для генерації випадкового кольору у форматі HEX

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Додаємо обробники подій

createBtn.addEventListener("click", () => {
  createBoxes(input.value);
  input.value = "";
});

destroyBtn.addEventListener("click", destroyBoxes);
