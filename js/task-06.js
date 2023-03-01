const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', handleAmountOfNumberValidation);

function handleAmountOfNumberValidation(event) {
  const writtenElements = event.target.value.trim();
  const inputDataLength = Number(event.target.getAttribute('data-length'));

  if (writtenElements.length === inputDataLength) {
    event.currentTarget.classList.add('valid');
    event.currentTarget.classList.remove('invalid');
  } else {
    event.currentTarget.classList.remove('valid');
    event.currentTarget.classList.add('invalid');
  }
}
