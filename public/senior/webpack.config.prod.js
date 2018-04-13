const path = require("path");
const webpack = require("webpack");

// Knowing about webpack or a similar tool and knowing how to setup
// the config file for production is above avarage for even a senior
module.exports = {
  entry: {
    prod: path.resolve(__dirname, "test.v3.js")
  },
  output: {
    path: path.resolve(__dirname, ".."),
    filename: "bundle.[name].js"
  },
  plugins: [
    // this is far from a perfect config, this is just for the demo
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: Infinity
    })
  ]
};
