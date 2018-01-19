const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = [

  {
    entry: './docs/src/app.js',
    output: {
      filename: 'app.js',
      path: path.join(__dirname, 'docs/js')
    },
    externals: {
      'vue': 'Vue',
      'vue-router': 'VueRouter'
    },
    module: {
      loaders: [
        {
          loader: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/
        },
        {
          loader: 'vue-loader',
          test: /\.vue$/
        }
      ]
    },
    plugins: [
      new BrowserSyncPlugin({
        host: 'localhost',
        port: 8000,
        server: { baseDir: ['docs/'] },
        files: ['docs/**/*'],
        tunnel: true
      })
    ],
    watchOptions: {
      ignored: /node_modules/
    }
  }

];
