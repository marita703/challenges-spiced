console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);

  const data = Object.fromEntries(formData);

  console.log(data);

  const ageBadnessSum = parseInt(data.age) + parseInt(data.badness);

  console.log(
    "The age-badness-sum of " + String(data.firstName) + "is: " + ageBadnessSum
  );
});
