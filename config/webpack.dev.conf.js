const webpack = require('webpack');
const merge = require('webpack-merge');

const baseWebpackConfig = require('./webpack.base.conf');

module.exports = merge(baseWebpackConfig, {
  entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
  ],
  output: {
    publicPath: '/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  devtool: '#eval-source-map',
});
