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

// if the element is not there the rest of the script will still work
form &&
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

// if the element is not there the rest of the script will still work
openButton &&
  openButton.addEventListener("click", e => {
    e.preventDefault();
    sidebar.classList.toggle("sidebar-open");
  });

// if the element is not there the rest of the script will still work
themeButton &&
  themeButton.addEventListener("click", e => {
    e.preventDefault();
    const buttons = Array.from(document.querySelectorAll("button"));
    const headers = Array.from(document.querySelectorAll("h1"));
    const elements = buttons.concat(headers);

    document.body.classList.toggle("themed");
    elements.forEach(e => e.classList.toggle("themed"));
  });


/***/ })
/******/ ]);