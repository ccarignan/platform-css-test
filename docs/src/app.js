import boot from './boot'
import Vue from 'vue';
import VueRouter from 'vue-router';

import PageStart from './pages/start.vue';

boot();

var base = '/';

if (location.pathname && location.pathname != '/') {
  base = location.pathname.split('/').slice(0, -1).join('/');
}

const routes = [
  { path: '/', component: PageStart }
];

const router = new VueRouter({
  base, routes, mode: 'history', history: true, linkActiveAclass: 'aq-active'
});

window.addEventListener('load', function () {

  var app = new Vue({
    router,
    el: '#app',
    extends: PageStart,
    data: {
      message: 'Hello Vue!'
    },
    methods: {
      change: function () {
        window.sessionStorage['_aqkit_dev_mode'] = this.srcType === 'master';
        location.reload();
      }
    },
    beforeCreate: function () {
      this.srcType = window.sessionStorage['_aqkit_dev_mode'] === 'true' ? 'master' : 'stable';
    }
  });

});
