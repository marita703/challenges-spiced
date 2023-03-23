console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formElements = event.target.elements;

  // so this is how this works: first we need the function on the top (we can actually also use form, because we already called the form in the first thing of the code), and then we create a new varible called checkbox then we use the variable created up formElements. VERY IMPORTANT name of the checkbox in HTML .checked.. this will give us a boolean variable.
  const checkbox = formElements.tos.checked;

  console.log(checkbox);

  if (checkbox === true) {
    return hideTosError();
  } else {
    showTosError();
  }

  // eslint-disable-next-line no-alert
  alert("Form submitted");
});
