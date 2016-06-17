const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const env = process.env.NODE_ENV || 'development';

module.exports = {
  devtool: 'cheap-module-eval-source-map',

  entry: [
    'react-hot-loader/patch',
    './index.js',
  ],

  resolve: {
    root: __dirname,
  },

  plugins: [
    // new webpack.HotModuleReplacementPlugin(), // never add this one if --hot is in cli
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env),
      __DEV__: env === 'development',
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
    }),
  ],

  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /node_modules/,
    },
    ],
  },
};
