const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsContainer = document.querySelector('#ingredients');

const elements = ingredients.map(option => {
  const listElement = document.createElement('li');
  listElement.textContent = option;
  listElement.classList.add('item');
  return listElement;
});

ingredientsContainer.append(...elements);
