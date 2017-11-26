const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const HtmlwebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/app.jsx',
  output: {
    psth: path.resolve(__dirname, 'dist'),
    filename: 'static/js/[name][hash:6].js',
    publicPath: ''
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /(node_modules)/
      },
      {
        test: /\.(css|less)$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif|svg)(\?t=\d+)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8000,
            name: 'static/images/[name].[ext]'
          }
        }]
      }
    ]
  },
  plugins: [],
  devServer: {
    historyApiFallback: true,
    port: 8088,
    host: '127.0.0.1',
    https: false,
    hot: true,
    compress: true,
    disableHostCheck: true
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.json'],
    alias: {
      '@': path.join(__dirname, 'src')
    }
  }
}

if() {

}
