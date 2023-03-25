console.clear();

const form = document.querySelector('[data-js="form"]');
const ul = document.querySelector('[data-js="todoList"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formElements = event.target.elements;
  let headLineValue = "";
  let taskValue = "";

  headLineValue = formElements.headline.value;
  taskValue = formElements.task.value;

  console.log("headLineValue:", headLineValue, " taskValue:", taskValue);

  createEntry(headLineValue, taskValue);

  event.target.reset();

  form.headline.focus();
});

function createEntry(headLineValue, taskValue) {
  const list = document.createElement("li");

  const listHeadline = document.createElement("h4");

  const listTask = document.createElement("p");

  ul.append(list);
  list.append(listHeadline);
  list.append(listTask);

  listHeadline.textContent = headLineValue;
  listTask.textContent = taskValue;
}
