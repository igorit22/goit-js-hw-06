// // Отримуємо список всіх li.item в ul#categories
// const categoriesList = document.querySelectorAll(
//   "#categories > .item"
// );

// // Виводимо кількість категорій в консоль
// console.log("Number of categories:", categoriesList.length);

// // Перебираємо кожен li.item в списку і виводимо в консоль заголовок та кількість його елементів
// categoriesList.forEach((category) => {
//   const categoryName = category.querySelector("h2").textContent;
//   const categoryElementsCount =
//     category.querySelectorAll("li").length;
//   console.log(
//     `Category: ${categoryName}\nElements: ${categoryElementsCount}`
//   );
// });



// Отримуємо список всіх li.item в ul#categories
const categoriesUl = document.getElementById("categories");
const categoriesList = categoriesUl.children;

// Виводимо кількість категорій в консоль
console.log(`Number of categories: ${categoriesList.length}`);

// Перебираємо кожен li.item в списку і виводимо в консоль заголовок та кількість його елементів
for (let i = 0; i < categoriesList.length; i++) {
  const category = categoriesList[i];
  const categoryName = category.firstElementChild.textContent;
  const categoryElementsCount = category.lastElementChild.children.length;
  console.log(`Category: ${categoryName}\nElements: ${categoryElementsCount}`);
}
