// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const isProduction = process.env.NODE_ENV == "production";

/** @type {webpack.Configuration} */
const config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "scripts/[name].[chunkhash:5].js",
    // publicPath: '../'
  },
  externals: {
    cesium: "Cesium",
  },
  devServer: {
    https: true,
  },
  plugins: [
    new CleanWebpackPlugin({}),
    new HtmlWebpackPlugin({
      template: "./src/public/index.html",
      // chunks: ["main"], // 注入哪些 chunk 结果
      filename: "html/index.html",
    }),
    // 复制
    new CopyWebpackPlugin({
      patterns: [{ from: "./node_modules/cesium/Build/Cesium", to: "Cesium" }],
    }),
    // 定义全局变量
    new webpack.DefinePlugin({
        PI: `Math.PI`
    }),
    // 注入注释
    new webpack.BannerPlugin({
        banner: `author: mengdongbao`
    })

    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.(png|gif)$/,
        use: [
          // file-loader
          {
            loader: "file-loader",
            options: {
              name: "imgs/[name].[hash:5].[ext]",
            },
          },
          // {
          //     loader: 'url-loader',
          //     options: {
          //         limit: true
          //     }
          // }
        ],
      },
      // {
      //     test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
      //     type: 'asset',
      // },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};
