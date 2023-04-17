//Створюєємо змінну counterValue, яка зберігає поточне значення лічильника.

let counterValue = 0;

//Отримуємо посилання на елемент лічильника за його ідентифікатором (#value) і на кнопки за допомогою атрибута data-action.

const valueEl = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

// Додаємо прослуховування кліків до кнопок, всередині яких збільшуємо або зменшуємо значення лічильника і оновлюємо вміст спану.

decrementBtn.addEventListener('click', () => {
    counterValue--;
    valueEl.textContent = counterValue;
});

incrementBtn.addEventListener('click', () => {
    counterValue++;
    valueEl.textContent = counterValue;
});
