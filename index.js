import { getItemTemplate } from "./getItemTemplate.js";
import { items } from "./items.js";

const refs = {
  list: document.querySelector(".list"),
  form: document.querySelector(".form"),
};

const render = () => {
  const lis = items.map(getItemTemplate).join("");
  refs.list.innerHTML = "";
  refs.list.insertAdjacentHTML("beforeend", lis);
};

const addItem = (text) => {
  const load = {
    text,
    isDone: false,
  };

  items.push(load);
};

function handleSubmit(event) {
  const { value } = event.target.elements.text;
  event.preventDefault();

  addItem(value);
  render();
  refs.form.reset();
}

render();

refs.form.addEventListener("submit", handleSubmit);
