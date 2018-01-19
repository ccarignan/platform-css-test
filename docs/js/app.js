/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__boot__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_router__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_start_vue__ = __webpack_require__(4);






Object(__WEBPACK_IMPORTED_MODULE_0__boot__["a" /* default */])();

var base = '/';

if (location.pathname && location.pathname != '/') {
  base = location.pathname.split('/').slice(0, -1).join('/');
}

const routes = [{ path: '/', component: __WEBPACK_IMPORTED_MODULE_3__pages_start_vue__["a" /* default */] }];

const router = new __WEBPACK_IMPORTED_MODULE_2_vue_router___default.a({
  base, routes, mode: 'history', history: true, linkActiveAclass: 'aq-active'
});

window.addEventListener('load', function () {

  var app = new __WEBPACK_IMPORTED_MODULE_1_vue___default.a({
    router,
    el: '#app',
    extends: __WEBPACK_IMPORTED_MODULE_3__pages_start_vue__["a" /* default */],
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

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Bootstrap the initial doc page by injecting either the current
 * stable release of aqkit, or the current development version of aqkit.
 */

const storage = window.sessionStorage;
const key = '_aqkit_dev_mode';
const styles = ['aqkit.css'];
const scripts = ['aqkit.js', 'aqkit-icons.js'];

/* harmony default export */ __webpack_exports__["a"] = (function () {

  var dev = '';

  console.log('devMode?', storage[key]);

  if (storage[key] === 'true') {
    dev = 'dev/';
  }

  function addScript(script) {
    var el = document.createElement('script');
    el.src = `js/${dev}${script}`;
    document.head.appendChild(el);
  }

  function addStyle(style) {
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
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = VueRouter;

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_652c1366_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_start_vue__ = __webpack_require__(6);
var disposed = false
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = null
/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_652c1366_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_start_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "docs/src/pages/start.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-652c1366", Component.options)
  } else {
    hotAPI.reload("data-v-652c1366", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 5 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm._v("\n\n  " + _vm._s(_vm.message) + "\n\n  "),
    _c("label", [_vm._v("\n    version:\n  ")]),
    _vm._v(" "),
    _c(
      "select",
      {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.srcType,
            expression: "srcType"
          }
        ],
        on: {
          change: [
            function($event) {
              var $$selectedVal = Array.prototype.filter
                .call($event.target.options, function(o) {
                  return o.selected
                })
                .map(function(o) {
                  var val = "_value" in o ? o._value : o.value
                  return val
                })
              _vm.srcType = $event.target.multiple
                ? $$selectedVal
                : $$selectedVal[0]
            },
            _vm.change
          ]
        }
      },
      [
        _c("option", { attrs: { value: "stable" } }, [_vm._v("stable 0.0.1")]),
        _vm._v(" "),
        _c("option", { attrs: { value: "master" } }, [
          _vm._v("master 0.0.1-dev")
        ])
      ]
    ),
    _vm._v(" "),
    _c("hr"),
    _vm._v(" "),
    _vm._m(0)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "aq-container" }, [
      _c("h1", [_vm._v("platform-css-test")]),
      _vm._v(" "),
      _c("div", { attrs: { "aq-grid": "" } }, [
        _c("div", { staticClass: "aq-width-1-3@m" }, [
          _c("h2", [_vm._v("New component")]),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "aq-button aq-button-primary",
              attrs: { "aq-hello-world": "" }
            },
            [_vm._v("hello")]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "aq-width-1-3@m" }, [
          _c("h2", [_vm._v("Accordion")]),
          _vm._v(" "),
          _c("ul", { attrs: { "aq-accordion": "" } }, [
            _c("li", { staticClass: "aq-open" }, [
              _c(
                "a",
                { staticClass: "aq-accordion-title", attrs: { href: "#" } },
                [_vm._v("Item 1")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "aq-accordion-content" }, [
                _c("p", [
                  _vm._v(
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("li", [
              _c(
                "a",
                { staticClass: "aq-accordion-title", attrs: { href: "#" } },
                [_vm._v("Item 2")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "aq-accordion-content" }, [
                _c("p", [
                  _vm._v(
                    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit."
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("li", [
              _c(
                "a",
                { staticClass: "aq-accordion-title", attrs: { href: "#" } },
                [_vm._v("Item 3")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "aq-accordion-content" }, [
                _c("p", [
                  _vm._v(
                    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident."
                  )
                ])
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "aq-width-1-3@m" }, [
          _c("h2", [_vm._v("Alert")]),
          _vm._v(" "),
          _c("div", { attrs: { "aq-alert": "" } }, [
            _c("a", {
              staticClass: "aq-alert-close",
              attrs: { href: "#", "aq-close": "" }
            }),
            _vm._v(" "),
            _c("p", [
              _c("strong", [_vm._v("Alert!")]),
              _vm._v(" Lorem ipsum "),
              _c("a", { attrs: { href: "#" } }, [_vm._v("dolor")]),
              _vm._v(" sit amet... ")
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "aq-alert-primary", attrs: { "aq-alert": "" } },
            [
              _c("a", {
                staticClass: "aq-alert-close",
                attrs: { href: "#", "aq-close": "" }
              }),
              _vm._v(" "),
              _c("p", [
                _c("strong", [_vm._v("Primary!")]),
                _vm._v(" Lorem ipsum "),
                _c("a", { attrs: { href: "#" } }, [_vm._v("dolor")]),
                _vm._v(" sit amet... ")
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "aq-alert-success", attrs: { "aq-alert": "" } },
            [
              _c("a", {
                staticClass: "aq-alert-close",
                attrs: { href: "#", "aq-close": "" }
              }),
              _vm._v(" "),
              _c("p", [
                _c("strong", [_vm._v("Success!")]),
                _vm._v(" Lorem ipsum "),
                _c("a", { attrs: { href: "#" } }, [_vm._v("dolor")]),
                _vm._v(" sit amet... ")
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "aq-alert-warning", attrs: { "aq-alert": "" } },
            [
              _c("a", {
                staticClass: "aq-alert-close",
                attrs: { href: "#", "aq-close": "" }
              }),
              _vm._v(" "),
              _c("p", [
                _c("strong", [_vm._v("Warning!")]),
                _vm._v(" Lorem ipsum "),
                _c("a", { attrs: { href: "#" } }, [_vm._v("dolor")]),
                _vm._v(" sit amet... ")
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "aq-alert-danger", attrs: { "aq-alert": "" } },
            [
              _c("a", {
                staticClass: "aq-alert-close",
                attrs: { href: "#", "aq-close": "" }
              }),
              _vm._v(" "),
              _c("p", [
                _c("strong", [_vm._v("Danger!")]),
                _vm._v(" Lorem ipsum "),
                _c("a", { attrs: { href: "#" } }, [_vm._v("dolor")]),
                _vm._v(" sit amet... ")
              ])
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { attrs: { "aq-grid": "" } }, [
        _c("div", { staticClass: "aq-width-1-3@m" }, [
          _c("h2", [_vm._v("Aq Icons")]),
          _vm._v(" "),
          _c("ul", { staticClass: "aq-list" }, [
            _c("li", [
              _c("span", {
                staticClass: "aq-margin-small-right",
                attrs: { "aq-icon": "icon: activity" }
              }),
              _vm._v(" activity")
            ]),
            _vm._v(" "),
            _c("li", [
              _c("span", {
                staticClass: "aq-margin-small-right",
                attrs: { "aq-icon": "icon: add--circle" }
              }),
              _vm._v(" add--circle")
            ]),
            _vm._v(" "),
            _c("li", [
              _c("span", {
                staticClass: "aq-margin-small-right",
                attrs: { "aq-icon": "icon: add--database" }
              }),
              _vm._v(" add--database")
            ]),
            _vm._v(" "),
            _c("li", [
              _c("span", {
                staticClass: "aq-margin-small-right",
                attrs: { "aq-icon": "icon: add--environment" }
              }),
              _vm._v(" add--environment")
            ]),
            _vm._v(" "),
            _c("li", [
              _c("span", {
                staticClass: "aq-margin-small-right",
                attrs: { "aq-icon": "icon: product--cloud" }
              }),
              _vm._v(" product--cloud")
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "aq-width-1-3@m" }, [
          _c("h2", [_vm._v("Text-level semantics")]),
          _vm._v(" "),
          _c("ul", { staticClass: "aq-list" }, [
            _c("li", [
              _vm._v("The\n            "),
              _c("a", { attrs: { href: "#" } }, [
                _c("span", { attrs: { "aq-icon": "icon: happy" } }),
                _vm._v("\n              a element\n            ")
              ]),
              _vm._v("\n            example\n          ")
            ]),
            _vm._v(" "),
            _c("li", [
              _vm._v("The\n            "),
              _c("a", { staticClass: "aq-link-muted", attrs: { href: "#" } }, [
                _c("span", { attrs: { "aq-icon": "icon: happy" } }),
                _vm._v("\n              link-muted\n            ")
              ]),
              _vm._v("\n            example\n          ")
            ]),
            _vm._v(" "),
            _c("li", [
              _vm._v("The\n            "),
              _c("a", { staticClass: "aq-link-reset", attrs: { href: "#" } }, [
                _c("span", { attrs: { "aq-icon": "icon: happy" } }),
                _vm._v("\n              link-reset\n            ")
              ]),
              _vm._v("\n            example\n          ")
            ]),
            _vm._v(" "),
            _c("li", [
              _vm._v("The\n            "),
              _c("code", [
                _c("span", { attrs: { "aq-icon": "icon: happy" } }),
                _vm._v("\n              code element\n            ")
              ]),
              _vm._v("\n            example\n          ")
            ]),
            _vm._v(" "),
            _c("li", [
              _vm._v("The\n            "),
              _c("em", [
                _c("span", { attrs: { "aq-icon": "icon: happy" } }),
                _vm._v("\n              em element\n            ")
              ]),
              _vm._v("\n            example\n          ")
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "aq-width-1-3@m" }, [
          _c("h2", [_vm._v("Buttons")]),
          _vm._v(" "),
          _c("ul", { staticClass: "aq-list" }, [
            _c("li", [
              _c("button", { staticClass: "aq-button aq-button-default" }, [
                _c("span", {
                  staticClass: "aq-margin-small-right",
                  attrs: { "aq-icon": "icon: happy" }
                }),
                _vm._v("\n              Button\n            ")
              ])
            ]),
            _vm._v(" "),
            _c("li", [
              _c("button", { staticClass: "aq-button aq-button-primary" }, [
                _c("span", {
                  staticClass: "aq-margin-small-right",
                  attrs: { "aq-icon": "icon: happy" }
                }),
                _vm._v("\n              Button\n            ")
              ])
            ]),
            _vm._v(" "),
            _c("li", [
              _c("button", { staticClass: "aq-button aq-button-danger" }, [
                _c("span", {
                  staticClass: "aq-margin-small-right",
                  attrs: { "aq-icon": "icon: happy" }
                }),
                _vm._v("\n              Button\n            ")
              ])
            ]),
            _vm._v(" "),
            _c("li", [
              _c("button", { staticClass: "aq-button aq-button-secondary" }, [
                _c("span", {
                  staticClass: "aq-margin-small-right",
                  attrs: { "aq-icon": "icon: happy" }
                }),
                _vm._v("\n              Button\n            ")
              ])
            ]),
            _vm._v(" "),
            _c("li", [
              _c(
                "button",
                {
                  staticClass: "aq-button aq-button-default",
                  attrs: { disabled: "" }
                },
                [
                  _c("span", {
                    staticClass: "aq-margin-small-right",
                    attrs: { "aq-icon": "icon: happy" }
                  }),
                  _vm._v("\n              Button\n            ")
                ]
              )
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { attrs: { "aq-grid": "" } }, [
        _c("div", { staticClass: "aq-width-1-3@m" }, [
          _c("h2", [_vm._v("Badge")]),
          _vm._v(" "),
          _c("p", [
            _c("a", { staticClass: "aq-badge", attrs: { href: "#" } }, [
              _vm._v("1")
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "aq-badge" }, [_vm._v("2")]),
            _vm._v(" "),
            _c("span", { staticClass: "aq-badge" }, [_vm._v("10")]),
            _vm._v(" "),
            _c("span", { staticClass: "aq-badge" }, [_vm._v("100")]),
            _vm._v(" "),
            _c("span", { staticClass: "aq-badge" }, [
              _c("span", { attrs: { "aq-icon": "icon: happy" } })
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "aq-badge" }, [_vm._v("text")])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "aq-width-1-3@m" }, [
          _c("h2", [_vm._v("Label")]),
          _vm._v(" "),
          _c("span", { staticClass: "aq-label" }, [_vm._v("Default")]),
          _vm._v(" "),
          _c("span", { staticClass: "aq-label aq-label-success" }, [
            _vm._v("Success")
          ]),
          _vm._v(" "),
          _c("span", { staticClass: "aq-label aq-label-warning" }, [
            _vm._v("Warning")
          ]),
          _vm._v(" "),
          _c("span", { staticClass: "aq-label aq-label-danger" }, [
            _vm._v("Danger")
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "aq-width-1-3@m" }, [
          _c("h2", [_vm._v("Spinner")]),
          _vm._v(" "),
          _c("div", { attrs: { "aq-spinner": "ratio: 0.5" } }),
          _vm._v(" "),
          _c("div", { attrs: { "aq-spinner": "" } }),
          _vm._v(" "),
          _c("div", { attrs: { "aq-spinner": "ratio: 1.5" } }),
          _vm._v(" "),
          _c("div", { attrs: { "aq-spinner": "ratio: 2" } })
        ])
      ])
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-652c1366", esExports)
  }
}

/***/ })
/******/ ]);