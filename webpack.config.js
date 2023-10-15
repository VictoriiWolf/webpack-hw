const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/entry.js',

    module: {
        rules: [{
            test: /\.css$/,
            use: [
                MiniCSSExtractPlugin,
                'css-loader'
            ]
        }],

        plugins: [ 
            new HtmlWebpackPlugin()
        ]
    }
 }