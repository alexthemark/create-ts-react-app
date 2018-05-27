const webpack = require("webpack");
const baseConfig = require("./webpack.config.base.js").baseConfig;
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = Object.assign({}, baseConfig, {
  plugins: [
    ...baseConfig.plugins,
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new BundleAnalyzerPlugin({
      reportFilename: "analyzed-bundle.html",
      analyzerMode: "static",
      openAnalyzer: false
    })
  ],
  devtool: false,
  mode: "production"
});
