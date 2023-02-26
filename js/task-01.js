const categoryList = document.querySelector('#categories');

const numberOfCategories = categoryList.children.length;

console.log(`Number of categories:`, numberOfCategories);

const listElements = document.querySelectorAll('.item');

listElements.forEach(element => {
  const categoryName = element.firstElementChild;
  const categoryElements = categoryName.nextElementSibling;
  console.log('Category:', categoryName.textContent);
  console.log('Elements:', categoryElements.children.length);
});
