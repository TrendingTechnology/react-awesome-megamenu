var path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/MegaMenu.js",
  output: {
    path: path.resolve("lib"),
    filename: "MegaMenu.js",
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        use: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"]
      }
    ]
  }
};
