
const WebpackCommon = require("../webpack.common");
const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  ...WebpackCommon,
  entry: './index',
  mode: "development",
  devtool: "hidden-source-map",
  output: {
    publicPath: "http://localhost:8082/",
  },
  devServer: {
    port: 8082,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'body',
      filename: 'remote.js',
      exposes: {
        './react': 'react',
        './react-dom': 'react-dom',
        "./Body": "./src/Body",

      },
      shared: ["react", "react-dom"],
    }),
  ],
};
