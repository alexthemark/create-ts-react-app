const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const finalCssLoader =
  // style loader comes with hot reload, but MiniCssExtract pulls CSS out of the javascript, so we have to use different loaders for each
  process.env.NODE_ENV === "production"
    ? MiniCssExtractPlugin.loader
    : "style-loader";

module.exports = {
  baseConfig: {
    entry: {
      app: "./src/index.tsx"
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].bundle.js"
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx", ".less", ".css"],
      alias: {
        "@material-ui/core": "@material-ui/core/es",
        "@material-ui/icons": "@material-ui/icons/es"
      }
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: [
            {
              loader: "babel-loader"
            },
            {
              loader: "awesome-typescript-loader"
            }
          ]
        },
        {
          test: /\.less$/,
          use: [finalCssLoader, "css-loader", "less-loader"]
        },
        {
          test: /\.css$/,
          use: [finalCssLoader, "css-loader"]
        }
      ]
    },
    stats: "verbose",
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        title: "Create TS React App"
      })
    ]
  }
};
