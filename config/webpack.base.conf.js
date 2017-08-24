const path = require('path');

module.exports = {
  entry: [
    './dev/main.js',
  ],
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: 'main.js',
  },
  performance: {
    hints: false,
  },
};
