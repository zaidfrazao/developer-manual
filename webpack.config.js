var debug = process.env.NODE_ENV !== "production";
var webpack = require("webpack");

module.exports = {
  context: __dirname + "/app",
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./index.js",
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
    ],
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.(png|jpg)$/,
        loader: "url-loader"
      }
    ]
  },
  output: {
    path: __dirname + "/build",
    filename: "index.bundle.js"
  },
  eslint: {
    configFile: './.eslintrc'
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
  ]
};
