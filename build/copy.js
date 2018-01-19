var exec = require('child_process').exec;
var argv = require('minimist')(process.argv.slice(2));

var files = [
  'css/aqkit.css',
  'js/aqkit.js',
  'js/aqkit-icons.js'
];

var dev = argv.dev ? 'dev/' : '';

var copies = files.map( file => {

  var dest = file.replace(/(css|js)\//, (dir) => {
    return `${dir}${dev}`;
  });

  return { src: file, dest: dest };

});

copies.forEach( file => {
  exec(`cp ./dist/${file.src} ./docs/${file.dest}`);
});
