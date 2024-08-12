const buttonEl = document.querySelector("button");
const inputEl = document.querySelector("input");
const ulEl = document.querySelector("ul");

buttonEl.addEventListener("click", function () {
  const inputValue = inputEl.value;

  const listItem = document.createElement("li");
  listItem.textContent = inputValue;

  ulEl.appendChild(listItem);
  inputEl.value = "";
});
