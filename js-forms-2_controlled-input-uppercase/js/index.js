console.clear();

const input = document.querySelector('[data-js="toUpperCase"]');

input.addEventListener("input", (event) => {
  console.log(event.target.value);
  const inputValue = event.target.value;

  event.target.value = inputValue.toUpperCase();
});
