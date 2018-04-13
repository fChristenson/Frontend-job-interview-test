/**
 * It is hard to tell if using es6/fetch is a good or bad choice,
 * it could mean that the programmer is aware of es6 but it
 * could also mean that the programmer is not thinking about
 * older browser.
 */
const ul = document.getElementById("list");
const form = document.getElementById("form");
const inputField = document.getElementById("todo-field");

// no closure since webpack takes care of this for us
form.addEventListener("submit", async e => {
  e.preventDefault();
  const res = await fetch("http://localhost:3000/todo", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ todo: inputField.value })
  });
  // using await, should ask about why
  const json = await res.json();
  const li = document.createElement("li");
  li.innerHTML = json.todo;
  ul.appendChild(li);
});
