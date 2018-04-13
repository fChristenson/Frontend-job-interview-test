/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
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
 * Why at the end of the file?
 * Because if it is at the top the event listeners will not be attached.
 */
if (!ul) throw new Error("Could not find [data-js=list]");
if (!clickCatcher) throw new Error("Could not find [sidebar-click-catcher]");
if (!openButton) throw new Error("Could not find [data-js=open-sidebar]");
if (!themeButton) throw new Error("Could not find [data-js=theme-button]");
if (!sidebar) throw new Error("Could not find [data-js=sidebar]");
if (!form) throw new Error("Could not find [data-js=form]");
if (!inputField) throw new Error("Could not find [data-js=todo-field]");


/***/ })
/******/ ]);