'use strict';

var path = require("path");
var CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    entry: {
        polyfills: './app/polyfills.ts',
        vendor: './app/vendor.ts',
        main: './app/main.ts'
        /*polyfills: [
            './node_modules/core-js/client/shim.min.js',
            './node_modules/zone.js/dist/zone.js',
            './node_modules/reflect-metadata/Reflect.js',
            './node_modules/systemjs/dist/system.src.js'
        ]*/
    },
    output: {
        path: path.join(__dirname, './dist/assets'),
        publicPath: '/assets/',
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    module: {
        loaders: [
            { test: /\.ts[x]?$/, loader: 'ts-loader' }
        ]
    },
    plugins: [
        /*new CommonsChunkPlugin({
            name: ['vendor', 'polyfills']
        }),*/
        new CopyWebpackPlugin([
            { from: './index.html', to: path.join(__dirname, 'dist') },
            { from: './assets/**/*', to: path.join(__dirname, 'dist') },
            { from: './app/template/**/*', to: path.join(__dirname, 'dist') }
        ])
    ],
    devServer: {
        contentBase: "./dist",
        historyApiFallback: true
    }
}
