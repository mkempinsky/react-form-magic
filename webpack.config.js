// https://github.com/krasimir/webpack-library-starter/blob/master/webpack.config.js
// https://krasimirtsonev.com/blog/article/javascript-library-starter-using-webpack-es6

const webpack = require('webpack');
const path = require('path');
const pkg = require('./package.json');
const nodeExternals = require('webpack-node-externals');
let libraryName = pkg.name;
let outputFile = libraryName + '.js';
const env = process.env.WEBPACK_ENV;

module.exports = {
    // mode: mode,
    entry: __dirname + '/src/index.js',
    // devtool: 'inline-source-map',
    output: {
        path: __dirname + '/lib',
        filename: outputFile,
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true,
        // https://github.com/webpack/webpack/issues/6525
        globalObject: "typeof self !== 'undefined' ? self : this",
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    externals: [nodeExternals()],
};
