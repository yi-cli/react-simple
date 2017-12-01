const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const HtmlwebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
const StyleExtHtmlWebpackPlugin = require('style-ext-html-webpack-plugin')

module.exports = {
  entry: './src/app.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
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
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader']
        })
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
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./vendor-manifest.json')
    }),
    new HtmlwebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      minify: { //html 压缩
        collapseWhitespace: true,
        minifyJS: true
      }
    }),
    new AddAssetHtmlPlugin({
      filepath: path.resolve(__dirname, './static/js/*.dll.js'),
      outputPath: 'static/js',
      publicPath: 'static/js'
    }),
    new ExtractTextPlugin('base.css'),
    new StyleExtHtmlWebpackPlugin({
      minify: true
    }),
    new CleanWebpackPlugin(['dist'])
  ],
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
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': path.join(__dirname, 'src')
    }
  }
}

if(process.env.NODE_ENV === 'dev') {
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin() // 跳过编译时出错的代码
  ])
} else if (process.env.NODE_ENV === 'production') {
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new UglifyJsPlugin({
      sourceMap: true,
      parallel: true
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
