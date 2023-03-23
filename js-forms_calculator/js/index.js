console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const a = parseInt(form.numberA.value);
  const b = parseInt(form.numberB.value);
  const sum = form.addition.checked;
  const subs = form.subtract.checked;
  const mult = form.multiplication.checked;
  const div = form.division.checked;
  console.log(sum, mult, div, subs);

  console.log(a, b);
  let result;

  // --v-- write your code here --v--

  if (sum === true) {
    result = add(a, b);
    console.log(add(a, b));
  } else if (subs === true) {
    result = substract(a, b);
  } else if (mult === true) {
    result = multiply(a, b);
  } else {
    result = divide(a, b);
  }

  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
