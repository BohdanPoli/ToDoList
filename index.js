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
  const payload = {
    text,
    isDone: false,
  };

  items.push(payload);
};

function handleSubmit(event) {
  event.preventDefault();

  const { value } = event.target.elements.text;

  addItem(value);
  render();
  refs.form.reset();
}

render();

refs.form.addEventListener("submit", handleSubmit);

const arr = [1, 2, "jh", 7];
