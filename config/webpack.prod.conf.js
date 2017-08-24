const webpack = require('webpack');
const merge = require('webpack-merge');

const baseWebpackConfig = require('./webpack.base.conf');

module.exports = merge({
  entry: [
    'babel-polyfill',
  ],
  module: {
    loaders: [
      {
        test: /.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false,
      },
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
  ],
  devtool: "source-map"
}, baseWebpackConfig);
