module.exports = {
  entry: './app/main.js',
  output: {
    filename: 'static/bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015']
      }
    }]
  }
};
