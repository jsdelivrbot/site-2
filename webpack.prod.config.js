const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');
const validate = require('webpack-validator');

const parts = require("./lib/parts");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const PATHS = {
  app: path.join(__dirname, 'app'),
  assets: path.join(__dirname, 'assets'),
  build: path.join(__dirname, 'build')
};

const common = {
  entry: {
    app: PATHS.app,
    vendor: ['react']
  },
  output: {
    publicPath: '/',
    path: PATHS.build,
    filename: '[name].[chunkhash].js',
    chunkFilename: '[chunkhash].js'
  },
  plugins: [
    new ExtractTextPlugin('bundle.css'),
    new HtmlWebpackPlugin({
      template: "./index.html",
      title: 'Webpack demo'
    }),
    new webpack.optimize.DedupePlugin(),
  ]
};

var config = merge(common,
    parts.clean(PATHS.build),
    parts.setupCSS(PATHS.assets),
    parts.babel(),
    parts.fonts(),
    parts.images(),
    parts.extractBundle({
               name: 'vendor',
               entries: ['react','redux',
                         'react-redux','lodash',
                         'react-dom','react-router',
                         "whatwg-fetch",'marked',
                         'redux-thunk','es6-promise',
                         'isomorphic-fetch','wolfy87-eventemitter'
                         ]
     }),
    parts.minify()
);

module.exports = validate(config);