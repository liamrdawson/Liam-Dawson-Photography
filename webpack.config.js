const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.[contentHash].js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: "./index.html",
        }),
        new HtmlWebpackPlugin({
            filename: 'gallery.html',
            template: "./gallery.html",
        }),
        new HtmlWebpackPlugin({
            filename: 'contact.html',
            template: "./contact.html",
        }),
        new HtmlWebpackPlugin({
            filename: 'about.html',
            template: "./about.html",
        }),
        new HtmlWebpackPlugin({
            filename: 'prints.html',
            template: "./prints.html",
        }),
        new HtmlWebpackPlugin({
            filename: 'success.html',
            template: "./success.html",
        })
    ],
    module: {
        rules: [ 
            {
                test: /\.scss$/,
                use: [  
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                    ]
            }
        ]
    }
}