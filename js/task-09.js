function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
console.log(getRandomHexColor());

const changeColorBtn = document.querySelector('.change-color');
const currentColorName = document.querySelector('.color');
const body = document.body;

changeColorBtn.addEventListener('click', handleBodyColorChangeBtn);

function handleBodyColorChangeBtn(event) {
  body.style.backgroundColor = getRandomHexColor();
  currentColorName.textContent = getRandomHexColor();
}
