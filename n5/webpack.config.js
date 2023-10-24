const webpack = require('webpack');
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')


/** @type {webpack.Configuration} */
const config = {
    mode: "development",
    watch: true,
    entry: "./src/index.js",
    output: {
        filename: "[name].[chunkhash:5].js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg)$/,
                use: [{
                    loader: 'file-loader',
                }]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({}),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        
    ]

}
module.exports = config