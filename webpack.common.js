const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const tsconfigPath = `${__dirname}/tsconfig.json`;

module.exports = {
  entry: [`${__dirname}/src/index.tsx`],
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      filename: 'index.html',
      template: './template.html',
      inject: 'body',
      chunksSortMode: 'none'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
      },
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: 'ts-loader',
            options: { configFile: tsconfigPath }
          },
          {
            loader: 'ui-component-loader',
            options: {
              lib: 'antd',
              camel2: '-',
              style: 'style/css.js'
            }
          }
        ],
        include: path.resolve(`${__dirname}/src/`)
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
