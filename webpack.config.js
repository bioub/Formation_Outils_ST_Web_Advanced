/* eslint-disable */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { BannerPlugin } = require('webpack');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const json5 = require('json5');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (_, { mode }) => {
  const plugins = [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new CopyPlugin({
      patterns: [{ from: './src/img', to: './img' }],
    }),
    new BannerPlugin({
      banner: 'Copyright STMicrolectronics',
    }),
  ];

  if (mode === 'production') {
    plugins.push(
      new TerserWebpackPlugin({
        extractComments: false,
      }),
    );
    plugins.push(new MiniCssExtractPlugin());
  }

  /** @type {import('webpack').Configuration} */
  const config = {
    devtool: mode === 'development' ? 'inline-source-map' : false, // pas de fichier map pour le debugger;
    entry: './src/js/router.js',
    output: {
      clean: true,
      filename: mode === 'development' ? '[name].js' : '[name].[contenthash].js',
    },
    plugins,
    module: {
      rules: [
        {
          test: /\.json5$/,
          type: 'json',
          parser: {
            parse: json5.parse,
          },
        },
        {
          test: /\.js$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
              },
            },
          ],
        },
        {
          test: /\.css$/,
          use: [
            mode === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [['autoprefixer']],
                },
              },
            },
          ],
        },
        {
          test: /\.scss$/,
          use: [
            mode === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [['autoprefixer']],
                },
              },
            },
            'sass-loader',
          ],
        },
      ],
    },
  };

  return config;
};
