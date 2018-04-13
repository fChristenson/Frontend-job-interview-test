webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports) {

// using a data attribute means that we can see that the element
// has a js script attached to it and it prevents css mutations
const ul = document.querySelector("[data-js=list]");
const clickCatcher = document.querySelector("[data-js=sidebar-click-catcher]");
const openButton = document.querySelector("[data-js=open-sidebar]");
const themeButton = document.querySelector("[data-js=theme-button]");
const sidebar = document.querySelector("[data-js=sidebar]");
const form = document.querySelector("[data-js=form]");
const inputField = document.querySelector("[data-js=todo-field]");

/**
 * It is hard to tell if using es6/fetch is a good or bad choice,
 * it could mean that the programmer is aware of es6 but it
 * could also mean that the programmer is not thinking about
 * older browser.
 */

// if the element is not there the rest of the script will still work
form &&
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
    const json = await res.json();
    const li = document.createElement("li");
    li.innerHTML = json.todo;
    ul.appendChild(li);
  });

// if the element is not there the rest of the script will still work
openButton &&
  openButton.addEventListener("click", e => {
    e.preventDefault();
    sidebar.classList.toggle("sidebar--open");
  });

// if the element is not there the rest of the script will still work
/**
 * We need a click catcher if we want to catch a user
 * clicking outside of the navbar list area
 */
clickCatcher &&
  clickCatcher.addEventListener("click", e => {
    e.preventDefault();
    sidebar.classList.toggle("sidebar--open");
  });

// if the element is not there the rest of the script will still work
themeButton &&
  themeButton.addEventListener("click", e => {
    e.preventDefault();
    document.body.classList.toggle("body--themed");
  });

/**
 * Clearly communicates what is missing, thinking about debugging.
 * 
 * It gets a lot easier to debugg large systems if you are uppfront
 * about what is needed for the program to work instead of assuming
 * that everything always works.
 * 
 * Why at the end of the file?
 * Because if it is at the top the event listeners will not be attached
 * since throwing an error will stop the execution of the script.
 */
if (!ul) throw new Error("Could not find [data-js=list]");
if (!clickCatcher) throw new Error("Could not find [sidebar-click-catcher]");
if (!openButton) throw new Error("Could not find [data-js=open-sidebar]");
if (!themeButton) throw new Error("Could not find [data-js=theme-button]");
if (!sidebar) throw new Error("Could not find [data-js=sidebar]");
if (!form) throw new Error("Could not find [data-js=form]");
if (!inputField) throw new Error("Could not find [data-js=todo-field]");


/***/ })
],[0]);