const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', handleAmountOfNumberValidation);

function handleAmountOfNumberValidation(event) {
  const writtenElements = event.target.value.trim();
  const inputDataLength = Number(event.target.getAttribute('data-length'));
  if (writtenElements.length <= inputDataLength) {
    event.target.classList.add('valid');
    return;
  } else {
    event.target.classList.replace('valid', 'invalid');
  }
}
