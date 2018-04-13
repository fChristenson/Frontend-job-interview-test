const express = require("express");
const app = express();

app.get("/", (req, res) => {
  //TODO: show todo list to user
});

app.post("/todo", (req, res) => {
  //TODO: save a todo
});

module.exports = app;
