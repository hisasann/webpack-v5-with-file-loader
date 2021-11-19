const webpack = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const path = require('path')

const environment = process.env.NODE_ENV || 'development'

process.noDeprecation = true

// 共通の設定
let config = {
  mode: environment,
  entry: {
    main: ['./src/index.jsx'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public'),
  },
  resolve: {
    extensions: ['.jsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/i,
        generator: {
          filename: 'images/[name][ext][query]'
        },
        type: 'asset/resource'
      },
      // {
      //   test: /\.(jpe?g|png|gif|svg)$/i,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         name: '/images/[name].[hash:7].[ext]',
      //         limit: 10000,
      //       },
      //     },
      //     {
      //       loader: 'image-webpack-loader',
      //       options: {
      //         bypassOnDebug: false,
      //       },
      //     },
      //   ],
      // },
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [environment === 'development' && require.resolve('react-refresh/babel')].filter(Boolean),
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              url: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
  ],
}

// development環境設定
if (environment === 'development') {
  config = Object.assign(config, {
    plugins: [
      ...config.plugins,
      new webpack.HotModuleReplacementPlugin(),
      new ReactRefreshWebpackPlugin(),
    ],
    devServer: {
      // Dev server client for web socket transport, hot and live reload logic
      hot: true,
      historyApiFallback: true,
      static: {
        directory: path.join(__dirname, 'public'),
      },
    },
  })
}

module.exports = config

