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
    path: PATHS.build,
    filename: '[name].[chunkhash].js',
    chunkFilename: '[chunkhash].js'
  },
  plugins: [
    new ExtractTextPlugin('bundle.css'),
    new HtmlWebpackPlugin({
      template: "./index.html",
      title: 'Webpack demo'
    })
  ]
};

var config = merge(common,
    parts.setupCSS(PATHS.assets),
    parts.babel(),
    parts.images(),
    parts.extractBundle({
            name: 'vendor',
            entries: ['react','redux','react-redux','lodash','react-dom','react-router',"whatwg-fetch",'marked','redux-thunk']
          })
    );

module.exports = validate(config);