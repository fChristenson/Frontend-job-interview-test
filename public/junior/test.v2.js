/**
 * It is hard to tell if using es6/fetch is a good or bad choice,
 * it could mean that the programmer is aware of es6 but it
 * could also mean that the programmer is not thinking about
 * older browser.
 */

// aware of global scope problems, fixed it with a closure
(() => {
  const ul = document.getElementById("list");
  const form = document.getElementById("form");
  const inputField = document.getElementById("todo-field");

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
})();
