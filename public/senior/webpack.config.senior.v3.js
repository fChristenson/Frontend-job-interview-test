const path = require("path");

// Knowing about webpack or a similar tool and knowing how to setup
// the config file is above avarage for a junior
module.exports = {
  entry: path.resolve(__dirname, "test.v3.js"),
  output: {
    path: path.resolve(__dirname, ".."),
    filename: "bundle.senior.v3.js"
  }
};
