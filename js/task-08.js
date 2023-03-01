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
    const inputValue = {
      Email: `${emailEl}`,
      Password: `${passwordEl}`,
    };
    return console.log(inputValue);
    event.currentTarget.reset();
  }
}
