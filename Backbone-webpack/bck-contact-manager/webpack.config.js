var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './src/js/app.js',
    output: {
        filename: './build/js/bundle.js'
    },
    resolve: {
        alias: {
            jquery:   __dirname + './lib/jquery/jquery.js',
            underscore:   __dirname + './lib/underscore/underscore.js',
            // underscore: 'lodash',
            backbone: __dirname + './lib/backbone/backbone.js'
        }
    },
    resolveLoader: {
      modules: [
      "node_modules"
      ]
      },
      resolve: {
      modules: [
      path.join(__dirname, "lib"),
    //   "node_modules"
      ]},
    module: {
      loaders: [
          {test: /\.css$/, loader: "style-loader!css-loader"},
          {test: /\.png$/, loader: "url-loader?mimetype=image/png"},
      ]
  },
  plugins: [new webpack.ProvidePlugin({
    $: "jquery",
    Backbone: "backbone",
    _: "underscore"
})]
    
};
