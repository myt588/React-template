const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

// const USER = (process.env.USER || '').replace(/_\./, '-');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
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
