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
    filename: '[name].[hash].js',
    chunkFilename: '[hash].js'
  },
  plugins: [
    new ExtractTextPlugin('bundle.css'),
    new HtmlWebpackPlugin({
      template: "./index.html",
      title: 'Webpack demo'
    }),
//    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};

var config = merge(common,
    parts.clean(PATHS.build),
    parts.setupCSS(PATHS.assets),
    parts.babel(),
    parts.images(),
    parts.extractBundle({
            name: 'vendor',
            entries: ['react','lodash','react-dom','react-motion']
          }),
    parts.assets(PATHS.assets),
    parts.minify()
);

module.exports = validate(config);