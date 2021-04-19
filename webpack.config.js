const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: ['@babel/polyfill', './js/Layout.jsx']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
      port: 4200
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html'
        }),
        new MiniCssExtractPlugin({
          filename: 'style.css'
        })
    ],
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader ,'css-loader']
          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: [
                    '@babel/preset-env'
                ],
                plugin: [
                    '@babel/plugin-proposal-class-properties'
                ]
              }
            }
          },
          {
            test: /\.jsx$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: [
                    '@babel/preset-env',
                    '@babel/preset-react'
                ],
                plugins: [
                    '@babel/plugin-proposal-class-properties',
                ]
              }
            }
          }
        ]
      }
}