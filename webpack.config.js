const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  //react entry file
  entry: './src/index.jsx',
  //where compiled code will go
  output: {
    //the directory where our compiled code will go
    path: path.join(__dirname, '/dist'),
    //the name of our compiled file
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        //1. look for js, jsx, jsANY files
        test: /\.js.*$/,
        //2. except for files in node_modules
        exclude: /node_modules/,
        //3. specify we want to use the babel-loader for this module (to indicate we want to transpile the test file?)
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}