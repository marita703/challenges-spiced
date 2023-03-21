console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

// I modified the () in the event listener with the calculate pizza gain

let pizzaSize1 = 24;
let pizzaSize2 = 24;

pizzaInput1.addEventListener("input", () => {
  var pizzaSize1 = pizzaInput1.value;
  calculatePizzaGain(pizzaSize1, pizzaSize2);
  updatePizzaDisplay(pizza1, pizzaSize1);
  updateOutputColor(pizzaSize1, pizzaSize2);
});

pizzaInput2.addEventListener("input", () => {
  var pizzaSize2 = pizzaInput2.value;
  calculatePizzaGain(pizzaSize1, pizzaSize2);
  updatePizzaDisplay(pizza2, pizzaSize2);
  updateOutputColor(pizzaSize1, pizzaSize2);
});

// Task 1

function calculatePizzaGain(diameter1, diameter2) {
  let areaPizza1 = Math.PI * Math.pow(diameter1, 2);
  console.log("area pizza1", areaPizza1);
  let areaPizza2 = Math.PI * Math.pow(diameter2, 2);
  console.log("area pizza2", areaPizza2);
  let pizzaGainPercentage = ((areaPizza2 - areaPizza1) / areaPizza1) * 100;
  console.log("pizza Gain:", pizzaGainPercentage);
  let textContent = Math.round(pizzaGainPercentage);
  console.log("text Content", textContent);
  output.innerHTML = textContent;
}

// Task 2

function updatePizzaDisplay(pizzaElement, newSize) {
  let newDisplaySize = (newSize / 24) * 100;
  pizzaElement.style.width = String(newDisplaySize) + "px";
}

// Task 3

function updateOutputColor(size1, size2) {
  // write your code here

  if (size1 > size2) {
    outputSection.style.backgroundColor = "var(--red)";
  } else {
    outputSection.style.backgroundColor = "var(--green)";
  }
}
