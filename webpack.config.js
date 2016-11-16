const path = require('path')
const webpack = require('webpack')


module.exports = {
  entry: './src/main.js',

  output: {
    path: './static',
    filename: '[name].js'
  },

  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
    ]
  },

  resolve: {
    extensions: ['', '.js', '.vue'],
    fallback: ['./node_modules'],
    alias: {
      'vue$': 'vue/dist/vue'
    }
  },

  resolveLoader: {
    fallback: ['./node_modules']
  },

  devtool: '#eval-source-map'
}
