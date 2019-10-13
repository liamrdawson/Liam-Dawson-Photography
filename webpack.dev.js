const path = require("path");
const common = require("./webpack.config");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
    mode: "development",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: "./index.html",
        }),
        new HtmlWebpackPlugin({
            filename: 'gallery.html',
            template: "./src/html/gallery.html",
        }),
        new HtmlWebpackPlugin({
            filename: 'contact.html',
            template: "./src/html/contact.html",
        }),
        new HtmlWebpackPlugin({
            filename: 'about.html',
            template: "./src/html/about.html",
        }),
        new HtmlWebpackPlugin({
            filename: 'prints.html',
            template: "./src/html/prints.html",
        }),
        new HtmlWebpackPlugin({
            filename: 'success.html',
            template: "./src/html/success.html",
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
});