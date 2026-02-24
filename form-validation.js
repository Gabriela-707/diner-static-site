(function () {
  const form = document.getElementById('contact-form');

  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const isValid = validateForm();
      if (isValid) {
        console.log('Form is valid — ready to submit.');
      }
    });
  }

  function validateForm() {
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const messageField = document.getElementById('message');

    if (!nameField || !emailField || !messageField) {
      console.error('One or more form fields are missing from the DOM.');
      return false;
    }

    clearError(nameField);
    clearError(emailField);
    clearError(messageField);

    let isValid = true;

    if (!nameField.value.trim()) {
      showError(nameField, 'Please enter your name.');
      isValid = false;
    }

    if (!emailField.value.trim()) {
      showError(emailField, 'Please enter your email address.');
      isValid = false;
    } else if (!isValidEmail(emailField.value.trim())) {
      showError(emailField, 'Please enter a valid email address.');
      isValid = false;
    }

    if (!messageField.value.trim()) {
      showError(messageField, 'Please enter a message.');
      isValid = false;
    }

    return isValid;
  }

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function showError(field, message) {
    field.classList.add('field-invalid');
    const errorSpan = field.parentElement.querySelector('.error-msg');
    if (errorSpan) {
      errorSpan.textContent = message;
    }
  }

  function clearError(field) {
    field.classList.remove('field-invalid');
    const errorSpan = field.parentElement.querySelector('.error-msg');
    if (errorSpan) {
      errorSpan.textContent = '';
    }
  }
})();
