const { resolve } = require('path');

exports.output = {
  filename: '[name].[hash:7].js',
  path: resolve(__dirname, '../dist'),
};

exports.alias = {
  '@': resolve(__dirname, '../src'),
  src: resolve(__dirname, '../src'),
  base: resolve(__dirname, '../base'),
  example: resolve(__dirname, '../example'),
};

exports.externals = {
  vue: 'Vue',
  'vue-router': 'VueRouter',
};

exports.extensions = ['*', '.js', '.vue', '.json'];
