# Contact Form Validation — Build Plan

## Context

The site is vanilla HTML/CSS with no JavaScript beyond a one-liner for the mobile menu.
Form fields: `name`, `email`, `subject`, `message`.
Currently only HTML5 `required` attributes provide any validation.

---

## Steps

### Step 1 — Create the JS file and hook it into the form
- Create `form-validation.js`
- Add a `<script>` tag to `contact.html`
- Add an `id` to the `<form>` element so JS can target it
- Add a `submit` event listener that calls `event.preventDefault()`

**Test:** Submit the form — page should no longer reload.

---

### Step 2 — Write individual field validators
- Validate `name`: not empty, at least 2 characters
- Validate `email`: not empty, matches a basic email pattern
- Validate `message`: not empty, at least 10 characters

**Test:** Call each function in the browser console with good/bad values and confirm they return true/false correctly.

---

### Step 3 — Show and clear error messages in the UI
- Add `<span class="error-msg">` elements below each field in the HTML
- Write a helper to display an error message and mark the field invalid
- Write a helper to clear an error and mark the field valid

**Test:** Manually call the helpers in the console to see messages appear/disappear.

---

### Step 4 — Wire validation into the submit handler
- On submit, run all validators and show errors for any that fail
- Block submission if any field is invalid

**Test:** Submit with various combinations of empty/filled fields and confirm the right errors appear.

---

### Step 5 — Add real-time validation (on blur)
- Attach `blur` event listeners to each field so it validates when the user leaves it

**Test:** Tab through the form, leaving fields empty or with bad values, and confirm errors show field-by-field.

---

### Step 6 — Add a success state
- On valid submission, hide the form and show a "Message sent!" confirmation message

**Test:** Fill all fields correctly, submit, and confirm the success message appears.

---

### Step 7 — Style the error and success states
- Add CSS for `.error-msg` (red text), `.field-invalid` (red border), `.field-valid` (green border), and the success banner

**Test:** Visually review all states — empty submit, partial errors, full success.
