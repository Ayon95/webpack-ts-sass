const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "./src/index.ts"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  // webpack will resolve modules or files having these extensions
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      // all TS files will be handled by ts-loader
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack demo",
      template: path.resolve(__dirname, "./public/index.html"),
    }),
  ],
};
