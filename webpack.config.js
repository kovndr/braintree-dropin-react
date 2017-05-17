const path = require('path')

module.exports = {
  context: __dirname,
  entry: './example/clientApp.js',
  devtool: 'eval',
  output: {
    path: path.join(__dirname, '/example'),
    filename: 'bundle.js'
  },
  devServer: {
    publicPath: '/example/',
    contentBase: './example'
  },
  resolve: {
    extensions: ['.js']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  }
}