'use strict';

let path = require('path');
let srcPath = path.join(__dirname, '/../src/');

let baseConfig = require('./base');

// Add needed plugins here
let BowerWebpackPlugin = require('bower-webpack-plugin');

module.exports = {
    devtool: 'eval',
    module: {
        preLoaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'isparta-instrumenter-loader',
                include: [
                    path.join(__dirname, '/../src')
                ]
            }
        ],
        postLoaders: [
            {
                include: path.resolve('node_modules/pixi.js'),
                loader: 'transform?brfs'
            }
        ],
        loaders: [
            {
                test: /\.(png|jpg|gif|woff|woff2|css|sass|scss|less|styl)$/,
                loader: 'null-loader'
            },
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                include: [].concat(
                    baseConfig.additionalPaths,
                    [
                        path.join(__dirname, '/../src'),
                        path.join(__dirname, '/../test')
                    ]
                )
            },
            {
                test: /\.json$/,
                loader: 'json'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        root: [srcPath],
        alias: {
            actions: srcPath + 'actions/',
            helpers: path.join(__dirname, '/../test/helpers'),
            components: srcPath + 'components/',
            sources: srcPath + 'sources/',
            stores: srcPath + 'stores/',
            styles: srcPath + 'styles/',
            config: srcPath + 'config/' + process.env.REACT_WEBPACK_ENV
        }
    },
    plugins: [
        new BowerWebpackPlugin({
            searchResolveModulesDirectories: false
        })
    ]
};
