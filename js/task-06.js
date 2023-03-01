const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', handleAmountOfNumberValidation);

function handleAmountOfNumberValidation(event) {
  const writtenElements = event.target.value.trim();
  const inputDataLength = Number(event.target.getAttribute('data-length'));
  if (writtenElements.length === Number(event.target.getAttribute('data-length'))) {
    event.currentTarget.classList.remove('invalid');
    event.currentTarget.classList.add('valid');
    return;
  } else {
    event.currentTarget.classList.add('invalid');
  }
}
