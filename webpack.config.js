// const webpack = require('webpack');
// const path = require('path');

// module.exports = {
//     plugins: [
//       // new webpack.NamedModulesPlugin(),
//       // new webpack.HotModuleReplacementPlugin()
//     ],
//     context: path.join(__dirname, 'src'),
//     entry: [
//       //  'webpack/hot/dev-server',
//       //  'webpack-hot-middleware/client',
//       //  'babel-polyfill',
//       //  'history',
//       './index.js'
//     ],
//     output: {
//       path: path.join(__dirname, 'www'),
//       filename: 'bundle.js',
//       publicPath: '/'
//     },
//     module: {
//       loaders: [{
//         test: /\.js$/,
//         exclude: /node_modules/,
//         loaders: ['react-hot-loader/webpack', 'babel-loader']
//       }],
//       resolve: {
//         modules: [
//           path.join(__dirname, 'node_modules'),
//         ],
//       },
//     };