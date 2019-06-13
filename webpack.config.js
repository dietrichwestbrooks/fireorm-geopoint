'use strict';

const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  context: __dirname,
  entry: './index.ts',
  output: {
    filename: 'index.js',
    path: path.resolve('./dist'),
    libraryTarget: 'this'
  },
  target: 'node', // <-- Important
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true
        }
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  externals: [nodeExternals()] // <-- Important
};
