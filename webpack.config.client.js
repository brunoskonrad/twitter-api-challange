var webpack = require("webpack");

module.exports = {
  entry: './src/client.jsx',
  output: {
    path: './public/js',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      }
    ]
  },
  resolve: {
    alias: {
      components: __dirname + '/src/components'
    }
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ]
};
