const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Отримуємо список ul#ingredients
const ingredientsList = document.querySelector("#ingredients");

// Перебираємо масив ingredients і для кожного елемента створюємо новий елемент li та додаємо до списку ul#ingredients
ingredients.forEach((ingredient) => {
  // Створюємо новий елемент li
  const li = document.createElement("li");
  // Встановлюємо текстовий вміст елемента li на основі значення з масиву ingredients
  li.textContent = ingredient;
  // Додаємо клас "item" до елемента li
  li.classList.add("item");
  // Додаємо елемент li до списку ul#ingredients
  ingredientsList.appendChild(li);
});
