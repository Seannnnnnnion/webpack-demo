const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.[hash].bundle.js",
  },
  //development[无压缩],production[压缩]
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", //babel让浏览器用比较新的语法
        },
      },
      {
        test: /\.png/,
        type: "asset/resource",
      },
    ],
  },
  devtool: "source-map",//声称.map文件，在浏览器中可以看到你写的源代码，方便你debug
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html", //以index.html为模板生成dist中的文件
    }),
    new MiniCssExtractPlugin({
      //打包成单独的css文件
      filename: "./main.[hash].css", //以哈希值的形式命名生成的css文件
    }),
  ],
};
