const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        main: "./src/index.js",
    },
    module: {
        rules: [ 
            {
                test: /\.html$/,
                use: [  
                    "html-loader"
                    ]
            },
            {
                test: /\.(svg|jpg|jpeg|png|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "imgs"
                    }
                }
            }
        ]
    }
}