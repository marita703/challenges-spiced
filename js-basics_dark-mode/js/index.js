console.clear();

const bodyElement = document.querySelector('[data-js="body"]');
const darkButton = document.querySelector('[data-js="dark-mode-button"]');
const lightButton = document.querySelector('[data-js="light-mode-button"]');
const togleButton = document.querySelector('[data-js="toggle-button"]');

console.log();

darkButton.addEventListener("click", () => {
  bodyElement.classList.add("dark");
  console.log("dark-mode-activated");
});

lightButton.addEventListener("click", () => {
  bodyElement.classList.remove("dark");
  console.log("light-mode-activated");
});

togleButton.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
  console.log("togle-mode-selected");
});
