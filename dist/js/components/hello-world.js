/*! aqUIkit 0.0.0 | http://www.getuikit.com | (c) 2014 - 2017 YOOtheme | MIT License */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define('uikithello_world', factory) :
	(global.aqUIkitHello_world = factory());
}(this, (function () { 'use strict';

function plugin(aqUIkit) {
  var obj;


  if (plugin.installed) {
    return;
  }

  var ref = aqUIkit.util;
  var addClass = ref.addClass;
  var pointerDown = ref.pointerDown;

  aqUIkit.component('hello-world', {

    init: function init() {
      console.log('init!', this);
      addClass(this.$el, 'aq-hello-world');
    },

    methods: {

      shout: function shout() {
        alert('this is dev hi world');
      }

    },

    events: ( obj = {}, obj[("" + pointerDown)] = function (e) {
        this.shout();
      }, obj)

  });

}

if (!false && typeof window !== 'undefined' && window.aqUIkit) {
  window.aqUIkit.use(plugin);
}

return plugin;

})));
