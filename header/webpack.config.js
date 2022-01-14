const WebpackCommon = require("../webpack.common");
const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  ...WebpackCommon,
  entry: './index',
  mode: "development",
  devtool: "hidden-source-map",
  output: {
    publicPath: "http://localhost:8081/",
  },
  devServer: {
    port: 8081,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "header",
      filename: "remote.js",
      exposes: {
        "./Header": "./src/Header",
      },
      // shared: ["react", "react-dom"],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
