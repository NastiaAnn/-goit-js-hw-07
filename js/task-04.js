const decrementBtn = document.querySelector('button[data-action="decrement');
const incrementBtn = document.querySelector('button[data-action="increment');
const btnValue = document.querySelector('#value');

let counterValue = Number(btnValue.textContent);

decrementBtn.addEventListener('click', handleDecrementBtnClick);

incrementBtn.addEventListener('click', handleIncrementBtnClick);

function handleDecrementBtnClick() {
  counterValue -= 1;
  btnValue.textContent = counterValue;
}
function handleIncrementBtnClick() {
  counterValue += 1;
  btnValue.textContent = counterValue;
}
