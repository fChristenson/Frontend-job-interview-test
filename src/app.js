const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");

const makePath = (dir, filename) => {
  return path.resolve(__dirname, "..", "public", dir, filename);
};

// a junior should know how memory storage works
// using a file for this is also ok
const todos = ["get milk", "get butter", "learn Javascript"];

app.use(bodyParser.json());
app.set("view engine", "ejs");
app.use(express.static(path.resolve(__dirname, "..", "public")));

app.get("/junior", (req, res) => {
  res.render(makePath("junior", "index.ejs"));
});

app.get("/junior/v1", (req, res) => {
  res.render(makePath("junior", "index.v1.ejs"), { todos });
});

app.get("/junior/v2", (req, res) => {
  res.render(makePath("junior", "index.v2.ejs"), { todos });
});

app.get("/junior/v3", (req, res) => {
  res.render(makePath("junior", "index.v3.ejs"), { todos });
});

app.get("/senior/v1", (req, res) => {
  res.render(makePath("senior", "index.v1.ejs"), { todos });
});

app.get("/senior/v2", (req, res) => {
  res.render(makePath("senior", "index.v2.ejs"), { todos });
});

app.get("/senior/v3", (req, res) => {
  res.render(makePath("senior", "index.v3.ejs"), { todos });
});

app.post("/todo", (req, res) => {
  todos.push(req.body.todo);
  res.json(req.body);
});

module.exports = app;
