const form = document.getElementById('contact-form');

if (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const isValid = validateForm();
    if (isValid) {
      console.log('Form is valid — ready to submit.');
    }
  });
}

function validateForm() {
  let isValid = true;

  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');

  clearError(name);
  clearError(email);
  clearError(message);

  if (!name.value.trim()) {
    showError(name, 'Please enter your name.');
    isValid = false;
  }

  if (!email.value.trim()) {
    showError(email, 'Please enter your email address.');
    isValid = false;
  } else if (!isValidEmail(email.value.trim())) {
    showError(email, 'Please enter a valid email address.');
    isValid = false;
  }

  if (!message.value.trim()) {
    showError(message, 'Please enter a message.');
    isValid = false;
  }

  return isValid;
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function showError(field, message) {
  field.classList.add('input-error');
  const error = document.createElement('span');
  error.className = 'field-error';
  error.textContent = message;
  field.insertAdjacentElement('afterend', error);
}

function clearError(field) {
  field.classList.remove('input-error');
  const existing = field.nextElementSibling;
  if (existing && existing.classList.contains('field-error')) {
    existing.remove();
  }
}
