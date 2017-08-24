/* eslint-disable no-console */

const express = require('express');
const webpackDev = require('webpack-dev-middleware');
const webpackHot = require('webpack-hot-middleware');
const webpackConfig = require('./config/webpack.dev.conf');
const compiler = require('webpack')(webpackConfig);

const app = express();
app.disable('x-powered-by');

const port = 9000;
const url = `http://localhost:${port}`;

app.use(webpackDev(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
  stats: { colors: true },
}));

app.use(webpackHot(compiler, {
  log: console.log,
  path: '/__webpack_hmr',
  heartbeat: 10 * 1000,
}));

app.use(express.static('dist'));

app.listen(port, () => console.log(`Listening on ${url}/`));
