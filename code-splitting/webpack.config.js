var path = require('path');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "none", //production, development, none
  entry: "./index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    //loader 규칙 들어갈곳: rules
    rules: [
      // {
      //     test: /\.css$/,
      //     //css-loader = css파일이 webpack 안으로 들어갈 수 있게 해주는 것
      //     //style-loader = html파일에 css-loader로 들어간 css를 inline style로 <head></head>안에 박아주는 것
      //     //아래 use 방식은 오른쪽부터 왼쪽으로 loading되는 개념
      //     use: ['style-loader', 'css-loader']
      // },
      // {
      //     //scss 일 경우
      //     test: /\.scss$/,
      //     //scss일 경우는 sass-loader부터 css-loader 다음 style-loader순으로 적용해준다.
      //     use: ['style-loader', 'css-loader', 'sass-loader']
      // }
      //babel 적용시 예제로 rule 추가해봄
      // {
      //     test: /\.js$/,
      //     use: ['babel-loader']
      // }

      //plugin 적용 적용 하면 index.html에 main.css를 직접 끌어와야함
      {
        test: /\.css$/,
        use: [{ loader: MiniCssExtractPlugin.loader }, "css-loader"],
      },
    ],
  },
  //plugin 적용 적용 하면 index.html에 main.css를 직접 끌어와야함
  plugins: [new MiniCssExtractPlugin()],
};