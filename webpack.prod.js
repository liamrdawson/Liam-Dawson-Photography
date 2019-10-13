const path = require("path");
const common = require("./webpack.config.js");
const merge = require("webpack-merge");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = merge(common, {
    mode: "production",
    output: {
        filename: "[name].[contentHash].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin(),
            new TerserPlugin(),
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: "./index.html",
                minify: {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true
                }
            }),
            new HtmlWebpackPlugin({
                filename: 'gallery.html',
                template: "./src/html/gallery.html",
                minify: {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true
                }
            }),
            new HtmlWebpackPlugin({
                filename: 'contact.html',
                template: "./src/html/contact.html",
                minify: {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true
                }
            }),
            new HtmlWebpackPlugin({
                filename: 'about.html',
                template: "./src/html/about.html",
                minify: {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true
                }
            }),
            new HtmlWebpackPlugin({
                filename: 'prints.html',
                template: "./src/html/prints.html",
                minify: {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true
                }
            }),
            new HtmlWebpackPlugin({
                filename: 'success.html',
                template: "./src/html/success.html",
                minify: {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true
                }
            })
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].[contentHash].css"
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node-modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                      }
                },
            },
            {
                test: /\.scss$/,
                use: [  
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                    ]
            }
        ]
    }
});