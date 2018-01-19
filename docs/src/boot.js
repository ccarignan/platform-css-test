/**
 * Bootstrap the initial doc page by injecting either the current
 * stable release of aqkit, or the current development version of aqkit.
 */

const storage = window.sessionStorage;
const key = '_aqkit_dev_mode';
const styles = ['aqkit.css'];
const scripts = ['aqkit.js', 'aqkit-icons.js'];

export default function () {

  var dev = '';

  console.log('devMode?', storage[key]);

  if (storage[key] === 'true') {
    dev = 'dev/';
  }

  function addScript (script) {
    var el = document.createElement('script');
    el.src = `js/${dev}${script}`;
    document.head.appendChild(el);
  }

  function addStyle (style) {
    var el = document.createElement('link');
    el.href = `css/${dev}${style}`;
    el.rel = 'stylesheet';
    document.head.appendChild(el);
  }

  styles.forEach(style => {
    addStyle(style);
  });

  scripts.forEach(script => {
    addScript(script);
  });

}
