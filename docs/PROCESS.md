# Contact Form Validation — Process Notes

A record of decisions, iterations, and reasoning made during the implementation of contact form validation.

---

## Approach

The site is vanilla HTML/CSS with no build step, so the solution was kept in the same spirit: a single standalone JS file with no dependencies, wrapped in an IIFE to avoid polluting the global scope.

---

## Decision Log

### Why a separate JS file instead of inline `<script>`

Keeping logic in `form-validation.js` makes it easier to find, edit, and test independently. Inline scripts buried in HTML are harder to scan and review.

---

### Why IIFE instead of ES modules

The site has no bundler or module-aware build step. An IIFE (`(function () { ... })()`) gives the same scoping benefit as a module (no globals leaked) without requiring `type="module"` on the script tag or any tooling.

---

### Why `required` attributes were kept alongside JS validation

The `required` attributes provide a baseline layer of protection that works even if JS fails to load. The JS layer adds richer, real-time feedback on top. Both serve different purposes and don't conflict.

---

### Subject field added to validation

The original build plan listed `name`, `email`, and `message` as the three validated fields. During implementation, `subject` was also added — it has a `required` attribute in the HTML and it would be inconsistent to skip it in JS validation.

---

### Why `blur` for real-time validation instead of `input`

`blur` fires when the user leaves a field, which gives them a chance to finish typing before seeing an error. `input` fires on every keystroke and would show errors mid-word (e.g., flagging an incomplete email before the user has finished typing it), which feels aggressive and noisy.

---

### Success state: `scrollIntoView` vs CSS centering

When the form submits successfully, the form and its intro heading are hidden and a success banner is shown. Because the success message is in the normal document flow and the container collapses to the banner's own height, CSS vertical centering within the block has nothing to center *within*.

`scrollIntoView({ behavior: 'smooth', block: 'center' })` was used instead. It brings the element to the vertical center of the viewport regardless of where on the page the user is, requires no layout changes, and works even if the container height changes in the future.

Alternatives considered:
- **`min-height` on the container** — would preserve the form's visual footprint so a centered element has space to sit in, but adds layout coupling that doesn't serve any purpose after the success state appears.
- **`position: fixed` overlay** — pulls the message fully out of document flow, which is heavier than necessary for a simple banner and would require z-index management.

---

### Why the form intro (`#form-intro`) is hidden alongside the form

The intro text ("Fill out the form below…") no longer applies once the form is gone. Leaving it visible would make the success state read awkwardly, so it is hidden at the same time as the form element.

---

### Why `aria-live="polite"` on the success message

Screen readers don't automatically announce content that becomes visible via `hidden = false`. The `aria-live="polite"` attribute tells the browser to announce the success message to assistive technology without interrupting whatever the user is currently doing.

---

## Files Changed

| File | What changed |
|---|---|
| `contact.html` | Added field IDs, error `<span>` elements, success message markup, `<script>` tag |
| `form-validation.js` | New file — all validation logic |
| `styles.css` | Added styles for `.error-msg`, `.field-invalid`, `.field-valid`, `.form-success` |
