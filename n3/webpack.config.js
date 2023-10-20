// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MyPlugin = require('./plugins/my-plugin')
const FileListPlugin = require('./plugins/file-list-plugin');

const isProduction = process.env.NODE_ENV == 'production';
const webpack = require('webpack');

/** @type {webpack.Configuration} */
const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
    },

    output: {
        library: "$", // IIFE 变量名
        libraryTarget: "var" // 变量何种方式定义
    },
    target: "web", // web | node

    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),
        new FileListPlugin("文件列表.md")
        // new MyPlugin()

        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            // {
            //     test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
            //     type: 'asset',
            // },
            {
                test: /\.css$/,
                use: [
                    "./loaders/style-loader.js"
                ]
            },
            {
                test: /\.png/,
                use: [
                    "./loaders/img-loader.js"
                ]
            }

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
        noParse: /jquery/ // 跳过正则命中的文件，可以用来跳过已经有构建版本的第三方库
    },
    resolve: {
        modules: ["node_modules"], // webpack 处理模块依赖时对包的查找位置
        extensions: [".js", ".json"], // 补全导入路径，默认补全 js/json
        alias: {
            "@": path.resolve(__dirname, 'src')
        }
    },
    externals: { // 打包结果排除，后期 CDN 引入
        "jquery": "$"
    },
    stats: { // 控制输出结果
        color: true,
        modules: false, // 隐藏模块
    } 
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
        
        
    } else {
        config.mode = 'development';
    }
    return config;
};
