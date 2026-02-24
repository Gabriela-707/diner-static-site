(function () {
  const form = document.getElementById('contact-form');

  if (form) {
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const subjectField = document.getElementById('subject');
    const messageField = document.getElementById('message');

    if (!nameField || !emailField || !subjectField || !messageField) {
      console.error('One or more form fields are missing from the DOM.');
    } else {
      nameField.addEventListener('blur', () => validateName(nameField));
      emailField.addEventListener('blur', () => validateEmail(emailField));
      subjectField.addEventListener('blur', () => validateSubject(subjectField));
      messageField.addEventListener('blur', () => validateMessage(messageField));

      const formIntro = document.getElementById('form-intro');
      const successMsg = document.getElementById('form-success');

      form.addEventListener('submit', (event) => {
        event.preventDefault();

        const isValid = validateForm();
        if (isValid) {
          if (formIntro) formIntro.hidden = true;
          form.hidden = true;
          if (successMsg) successMsg.hidden = false;
        }
      });
    }

    function validateForm() {
      const results = [
        validateName(nameField),
        validateEmail(emailField),
        validateSubject(subjectField),
        validateMessage(messageField),
      ];
      return results.every(Boolean);
    }

    function validateName(field) {
      clearError(field);
      if (!field.value.trim()) {
        showError(field, 'Please enter your name.');
        return false;
      }
      showValid(field);
      return true;
    }

    function validateEmail(field) {
      clearError(field);
      if (!field.value.trim()) {
        showError(field, 'Please enter your email address.');
        return false;
      }
      if (!isValidEmail(field.value.trim())) {
        showError(field, 'Please enter a valid email address.');
        return false;
      }
      showValid(field);
      return true;
    }

    function validateSubject(field) {
      clearError(field);
      if (!field.value.trim()) {
        showError(field, 'Please enter a subject.');
        return false;
      }
      showValid(field);
      return true;
    }

    function validateMessage(field) {
      clearError(field);
      if (!field.value.trim()) {
        showError(field, 'Please enter a message.');
        return false;
      }
      showValid(field);
      return true;
    }
  }

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function showValid(field) {
    field.classList.add('field-valid');
  }

  function showError(field, message) {
    field.classList.add('field-invalid');
    const errorSpan = field.parentElement.querySelector('.error-msg');
    if (errorSpan) {
      errorSpan.textContent = message;
    }
  }

  function clearError(field) {
    field.classList.remove('field-invalid', 'field-valid');
    const errorSpan = field.parentElement.querySelector('.error-msg');
    if (errorSpan) {
      errorSpan.textContent = '';
    }
  }
})();
