const webpack = require("webpack");
const baseConfig = require("./webpack.config.base.js").baseConfig;

module.exports = Object.assign({}, baseConfig, {
  plugins: [
    ...baseConfig.plugins,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development")
    })
  ],
  devServer: {
    hot: true,
    historyApiFallback: true
  },
  devtool: "inline-source-map",
  mode: "development"
});
