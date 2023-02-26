const form = document.querySelector('.login-form');

form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const emailEl = formElements.email.value;
  const passwordEl = formElements.password.value;
  if (emailEl === '' || passwordEl === '') {
    return alert('Please fill in all the fields!');
  } else {
    console.log(`Email: ${emailEl}, Password: ${passwordEl}`);
    event.currentTarget.reset();
  }
}
