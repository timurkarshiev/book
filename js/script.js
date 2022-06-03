const elBody = document.querySelector("body");
// CREATE
const newContainer = document.createElement("div");
const newForm = document.createElement("form");
const newInput = document.createElement("input");
const afterInput = document.createElement("input");
const newButton = document.createElement("button");
const newP = document.createElement("p");
//ATRIBUTE
newContainer.setAttribute("class", "container mt-5");
newForm.setAttribute("class", "form d-flex flex-column");
//INPUT
newInput.setAttribute("type", "text");
newInput.setAttribute(
  "class",
  "border-white hover-white shadow-lg p-3 mb-5 rounded"
);
newInput.setAttribute("placeholder", "Kitob nomini kiriting");
afterInput.setAttribute("type", "text");
afterInput.setAttribute("placeholder", "Author");
afterInput.setAttribute("required", "AFTER");
afterInput.setAttribute("class", "border-white shadow-lg p-3 mb-5 rounded");

newP.setAttribute("class", " shadow-lg p-3 mb-5 rounded");
//BUTTON
newButton.setAttribute("type", "submit");
newButton.setAttribute("class", "btn btn-danger");
// ADD
elBody.appendChild(newContainer);
newContainer.appendChild(newForm);
newForm.appendChild(newInput);
newForm.appendChild(afterInput);
newForm.appendChild(newButton);
newContainer.appendChild(newP);

newButton.textContent = "Submit";

newInput.style.color = "red";
newP.style.color = "red";
newP.style.maxWidth = "auto";
newP.style.fontWeight = "bold";
newP.style.margin = "0, auto";
newP.style.marginTop = "25px";

afterInput.style.color = "red";

const arr = [];

newForm.addEventListener("submit", (evl) => {
  evl.preventDefault();

  const inputValue = newInput.value;
  const afterInputValue = afterInput.value;

  const todo = {
    name: inputValue,
    text: afterInputValue,
  };
  arr.push(todo);
  newInput.value = null;
  afterInput.value = null;

  newP.style.border = "2px solid dodgerblue";

  newP.textContent = `${todo.name}, author:(${todo.text})`;
});
