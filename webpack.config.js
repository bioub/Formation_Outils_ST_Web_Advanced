/* eslint-disable */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = (_, { mode }) => {
  /** @type {import('webpack').Configuration} */
  const config = {
    devtool: mode === 'development' ? 'inline-source-map' : false, // pas de fichier map pour le debugger;
    entry: './src/js/router.js',
    output: {
      clean: true,
      filename: mode === 'development' ? '[name].js' : '[name].[contenthash].js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
      new CopyPlugin({
        patterns: [{ from: './src/img', to: './img' }],
      }),
    ],
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
  };

  return config;
};
