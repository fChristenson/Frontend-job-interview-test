const ul = document.getElementById("list");
const openButton = document.getElementById("open-sidebar");
const themeButton = document.getElementById("theme-button");
const sidebar = document.getElementById("sidebar");
const form = document.getElementById("form");
const inputField = document.getElementById("todo-field");

/**
 * It is hard to tell if using es6/fetch is a good or bad choice,
 * it could mean that the programmer is aware of es6 but it
 * could also mean that the programmer is not thinking about
 * older browser.
 */
form.addEventListener("submit", e => {
  e.preventDefault();
  fetch("http://localhost:3000/todo", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ todo: inputField.value })
  })
    .then(res => {
      return res.json();
    })
    .then(json => {
      const li = document.createElement("li");
      li.innerHTML = json.todo;
      ul.appendChild(li);
    });
});

openButton.addEventListener("click", e => {
  e.preventDefault();
  sidebar.classList.toggle("sidebar-open");
});

themeButton.addEventListener("click", e => {
  e.preventDefault();
  const buttons = Array.from(document.querySelectorAll("button"));
  const headers = Array.from(document.querySelectorAll("h1"));
  const elements = buttons.concat(headers);

  document.body.classList.toggle("themed");
  elements.forEach(e => e.classList.toggle("themed"));
});
