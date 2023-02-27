function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBoxBtn = document.querySelector('button[data-create]');
const destroyBoxBtn = document.querySelector('button[data-destroy]');
const mainContainer = document.querySelector('#boxes');

const inputEl = document.querySelector('[type="number"]');

// createBoxBtn.addEventListener('click', handleNewBoxCreation);

// function handleNewBoxCreation(event) {
//   const result = handleNumberValue();
//   const coloredContainer = document.createElement('div');
//   coloredContainer.classList.add('colored_container');
//   mainContainer.append(coloredContainer);

// }
