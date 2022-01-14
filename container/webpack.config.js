const WebpackCommon = require("../webpack.common");
const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  ...WebpackCommon,
  entry: './index',
  mode: 'development',
  devtool: 'hidden-source-map',
  output: {
    publicPath: "http://localhost:8080/",
  },
  devServer: {
    port: 8080,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        'header': 'header@http://localhost:8081/remote.js',
        'body': 'body@http://localhost:8082/remote.js',
      },
      shared: ["react", "react-dom"],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
