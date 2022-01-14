const path = require("path");

const mode = process.env.NODE_ENV || "production";

module.exports = {
  mode,
  entry: "./index",
  devtool: "hidden-source-map",
  devServer: {
    // contentBase: "./dist",
    // contentBase: path.join(__dirname, "dist"),
    historyApiFallback: {
      index: "index.html",
    },
  },
  output: {
    publicPath: "auto",
  },
  // optimization: {
  //   minimize: mode === "production",
  // },
  resolve: {
    extensions: [
      ".tsx",
      ".ts",
      ".jsx",
      ".js",
      ".json",
      ".css",
    ],
  },
  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
