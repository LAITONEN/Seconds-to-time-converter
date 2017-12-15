
const webpack = require('webpack');
const path = require('path');
const banner = require('./res/banner');

module.exports = {

  watch: true,
  bail: false,
  entry: ['./src/index'],

  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'index.js',
    libraryTarget: 'umd',
    library: 'AminoChallenge'
  },

  module: {

    rules: [
      {
        test: /\.js(x)?$/i,
        enforce: 'pre',
        exclude: [
          path.resolve(__dirname, '../node_modules')
        ],
        use: [
          {
            loader: 'eslint-loader',
            options: {
              formatter: require('eslint/lib/formatters/stylish')
            }
          }
        ]
      },
      {
        test: /\.modernizrrc(\.json)?$/i,
        loader: "modernizr-loader!json-loader"
      },
      {
        test: /\.js(x)?$/i,
        loader: 'babel-loader',
        exclude: [
          path.resolve(__dirname, '../node_modules')
        ]
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.json', '.jsx'],

    alias: {
      package$: path.resolve(__dirname, "../package.json")
    },

    modules: [
      'node_modules',
      'src'
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
         NODE_ENV: JSON.stringify("production")
       }
    }),
    new webpack.BannerPlugin(banner)
  ]
}