const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const dotenv = require('dotenv').config({ path: __dirname + '/.env' });

module.exports = merge(common, {
  devtool: 'inline-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.parsed)
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.LoaderOptionsPlugin({
      debug: true,
      minimize: false
    })
  ],
  devServer: {
    host: '0.0.0.0',
    hot: true,
    port: 10000,
    inline: true,
    publicPath: '/',
    historyApiFallback: {
      index: '/index.html'
    },
    disableHostCheck: true
  }
});
