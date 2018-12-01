const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

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
      }
    ]
  },
  plugins: [
  	new VueLoaderPlugin()
  ]
};