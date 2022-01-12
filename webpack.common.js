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

      {
        // sass loader will compile Sass (.scss files) to CSS
        // then css loader will convert the CSS into modules that can be imported into JS files
        // then style loader will create style nodes from those CSS modules and inject them into <style></style> of index.html
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
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
