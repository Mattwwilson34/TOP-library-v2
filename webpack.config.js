const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  externals: {
    crypto: 'crypto',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    fallback: {
      crypto: false,
    },
  },
};
