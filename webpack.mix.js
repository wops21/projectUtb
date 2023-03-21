const mix = require('laravel-mix');


 mix.webpackConfig({
    resolve: {
      fallback: {
        "stream": require.resolve("stream-browserify"),
        crypto: require.resolve('crypto-browserify')
        
      }
    }
  });
mix.js('resources/js/app.js', 'public/js')
    .vue()
    .sass('resources/sass/app.scss', 'public/css');

mix.disableNotifications();