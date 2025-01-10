// Copyright 2024 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    library: 'helloWorld',
    path: path.resolve(__dirname, '../dist/hello-world'),
  },
};





// const webpack = require('webpack');
// const path = require('path');

// module.exports = {
//   entry: './src/main.js', // Entry point for your application
//   output: {
//     library: 'helloWorld', // Name of the global variable for the library
//     path: path.resolve(__dirname, '../dist/hello-world'), // Output directory
//     // filename: 'bundle.js', // Output file name
//   },
//   resolve: {
//     fallback: {
//       http: require.resolve('stream-http'), // Polyfill for 'http'
//       https: require.resolve('https-browserify'), // Polyfill for 'https'
//       stream: require.resolve('stream-browserify'), // Polyfill for 'stream'
//       buffer: require.resolve('buffer/'), // Polyfill for 'buffer'
//       os: require.resolve('os-browserify/browser'), // Polyfill for 'os'
//       util: require.resolve('util/'), // Polyfill for 'util'
//       path: require.resolve('path-browserify'), // Polyfill for 'path'
//       assert: require.resolve('assert/'), // Polyfill for 'assert'
//       crypto: require.resolve('crypto-browserify'), // Polyfill for 'crypto'
//       url: require.resolve('url/'), // Polyfill for 'url'
//       querystring: require.resolve('querystring-es3'), // Polyfill for 'querystring'
//       vm: require.resolve('vm-browserify'), // Polyfill for 'vm'
//       net: false, // Exclude 'net' (not available in the browser)
//       tls: false, // Exclude 'tls' (not available in the browser)
//       child_process: false, // Exclude 'child_process' (not available in the browser)
//       fs: false, // Exclude 'fs' (not available in the browser)
//     },
//   },
//   plugins: [
//     new webpack.ProvidePlugin({
//       Buffer: ['buffer', 'Buffer'], // Provide Buffer globally for dependencies
//       process: 'process/browser', // Provide process globally for dependencies
//     }),
//     new webpack.DefinePlugin({
//       'process.env.GOOGLE_API_USE_FALLBACK': JSON.stringify('true'), // Enable fallback mode for Google libraries
//     }),
//   ],
//   mode: 'development', // Set to 'production' for production builds
// };
