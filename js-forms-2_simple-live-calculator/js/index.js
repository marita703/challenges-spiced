console.clear();

const firstInput = document.querySelector('[data-js="firstValue"]');
const secondInput = document.querySelector('[data-js="secondValue"]');
const result = document.querySelector('[data-js="result"]');

firstInput.addEventListener("input", (event) => {
  const firstValue = parseInt(event.target.value);

  const secondValue = secondInput.value;

  const multiplication = firstValue * secondValue;

  console.log("first value ", firstValue, "second Value", secondValue);

  result.textContent = multiplication;
});

secondInput.addEventListener("input", (event) => {
  const firstValue = firstInput.value;

  const secondValue = parseInt(event.target.value);

  const multiplication = firstValue * secondValue;

  console.log(result);

  result.textContent = multiplication;
});
