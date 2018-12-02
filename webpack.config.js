const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
	mode: 'development',
	entry: './src/index.js',
  output: {
  	 path: path.resolve(__dirname, 'dist'),
    filename: './bundle.js'
  },
  module: {
    rules: [
      { 
      	test: /\.js$/, 
      	use: {
      		loader: 'babel-loader',
      		options: {
      			presets: ['@babel/preset-env'],
      		}
      	} 
      },
      {
      	test: /\.vue$/, 
      	loader: 'vue-loader' 
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'vue-style-loader',
           MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
  	new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
 
  ]
};