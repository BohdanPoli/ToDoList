export const getItemTemplate = ({
  text,
  isDone,
} = {}) => `<li class="list--item">
        <div class="list--container">
        <input type="checkbox" ${isDone ? "checked" : ""} />
        <span>${text}</span>
        </div>
        <button type="button">x</button>
    </li>`;
