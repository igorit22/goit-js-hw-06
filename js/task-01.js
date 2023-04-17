// Отримуємо список всіх li.item в ul#categories
const categoriesList = document.querySelectorAll("#categories > .item");

// Виводимо кількість категорій в консоль
console.log("Number of categories:", categoriesList.length);

// Перебираємо кожен li.item в списку і виводимо в консоль заголовок та кількість його елементів
categoriesList.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const categoryElementsCount = category.querySelectorAll("li").length;
  console.log(`Category: ${categoryName}\nElements: ${categoryElementsCount}`);
});
