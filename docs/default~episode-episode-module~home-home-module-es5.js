function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~episode-episode-module~home-home-module"], {
  /***/
  "./node_modules/@scullyio/ng-lib/__ivy_ngcc__/fesm2015/scullyio-ng-lib.js":
  /*!********************************************************************************!*\
    !*** ./node_modules/@scullyio/ng-lib/__ivy_ngcc__/fesm2015/scullyio-ng-lib.js ***!
    \********************************************************************************/

  /*! exports provided: ComponentsModule, IdleMonitorService, ScullyContentComponent, ScullyRoutesService, TransferStateService, fromMutationObserver, isScullyGenerated, isScullyRunning */

  /***/
  function node_modulesScullyioNgLib__ivy_ngcc__Fesm2015ScullyioNgLibJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentsModule", function () {
      return ComponentsModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IdleMonitorService", function () {
      return IdleMonitorService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScullyContentComponent", function () {
      return ScullyContentComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScullyRoutesService", function () {
      return ScullyRoutesService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TransferStateService", function () {
      return TransferStateService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fromMutationObserver", function () {
      return fromMutationObserver;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isScullyGenerated", function () {
      return isScullyGenerated;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isScullyRunning", function () {
      return isScullyRunning;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/idleMonitor/idle-monitor.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @record
     */


    var _c0 = ["*"];

    function LocalState() {}

    if (false) {}

    var IdleMonitorService =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} zone
       * @param {?} router
       */
      function IdleMonitorService(zone, router) {
        var _this = this;

        _classCallCheck(this, IdleMonitorService);

        this.zone = zone;
        this.router = router;
        this.imState = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({
          idle: false,
          timeOut: 5 * 1000
        });
        this.idle$ = this.imState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pluck"])('idle'));
        this.initApp = new Event('AngularInitialized', {
          bubbles: true,
          cancelable: false
        });
        this.appReady = new Event('AngularReady', {
          bubbles: true,
          cancelable: false
        });
        this.appTimeout = new Event('AngularTimeout', {
          bubbles: true,
          cancelable: false
        });

        if (window) {
          window.dispatchEvent(this.initApp);
          this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(
          /**
          * @param {?} ev
          * @return {?}
          */
          function (ev) {
            return ev instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"] && ev.urlAfterRedirects !== undefined;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(
          /**
          * @return {?}
          */
          function () {
            return _this.zoneIdleCheck();
          })).subscribe();
        }
      }
      /**
       * @return {?}
       */


      _createClass(IdleMonitorService, [{
        key: "init",
        value: function init() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    return _context.abrupt("return", this.idle$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).toPromise());

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "zoneIdleCheck",
        value: function zoneIdleCheck() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            var taskTrackingZone;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!(Zone === undefined)) {
                      _context2.next = 2;
                      break;
                    }

                    return _context2.abrupt("return", this.simpleTimeout());

                  case 2:
                    /** @type {?} */
                    taskTrackingZone = Zone.current.get('TaskTrackingZone');

                    if (!(taskTrackingZone === undefined)) {
                      _context2.next = 5;
                      break;
                    }

                    return _context2.abrupt("return", this.simpleTimeout());

                  case 5:
                    if (!this.imState.value.idle) {
                      _context2.next = 8;
                      break;
                    }

                    _context2.next = 8;
                    return this.setState('idle', false);

                  case 8:
                    /** run the actual check for 'idle' outsides zone, otherwise it will never come to an end. */
                    this.zone.runOutsideAngular(
                    /**
                    * @return {?}
                    */
                    function () {
                      /** @type {?} */
                      var tCancel;
                      /** @type {?} */

                      var count = 0;
                      /** @type {?} */

                      var startTime = Date.now();
                      /** @type {?} */

                      var monitor =
                      /**
                      * @return {?}
                      */
                      function monitor() {
                        clearTimeout(tCancel); // console.table(taskTrackingZone.macroTasks);

                        if (Date.now() - startTime > 30 * 1000) {
                          /** bail out after 30 seconds. */
                          window.dispatchEvent(_this2.appTimeout);
                          return;
                        }

                        if (taskTrackingZone.macroTasks.length > 0 && taskTrackingZone.macroTasks.find(
                        /**
                        * @param {?} z
                        * @return {?}
                        */
                        function (z) {
                          return z.source.includes('XMLHttpRequest');
                        }) !== undefined || count < 1 // make sure it runs at least once!
                        ) {
                            tCancel = setTimeout(
                            /**
                            * @return {?}
                            */
                            function () {
                              count += 1;
                              monitor();
                            }, 50);
                            return;
                          }

                        window.dispatchEvent(_this2.appReady);

                        _this2.setState('idle', true);
                      };

                      monitor();
                    });

                  case 9:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "simpleTimeout",
        value: function simpleTimeout() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var _this3 = this;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    /** zone not available, use a timeout instead. */
                    console.warn('Scully is using timeouts, add the needed polyfills instead!');
                    _context3.next = 3;
                    return new Promise(
                    /**
                    * @param {?} r
                    * @return {?}
                    */
                    function (r) {
                      return setTimeout(r, _this3.imState.value.timeOut);
                    });

                  case 3:
                    window.dispatchEvent(this.appReady);

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
        /**
         * @param {?} milliseconds
         * @return {?}
         */

      }, {
        key: "setPupeteerTimoutValue",
        value: function setPupeteerTimoutValue(milliseconds) {
          this.imState.next(Object.assign(Object.assign({}, this.imState.value), {
            timeOut: milliseconds
          }));
        }
        /**
         * @private
         * @param {?} key
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "setState",
        value: function setState(key, value) {
          this.imState.next(Object.assign(Object.assign({}, this.imState.value), _defineProperty({}, key, value)));
        }
      }]);

      return IdleMonitorService;
    }();

    IdleMonitorService.ɵfac = function IdleMonitorService_Factory(t) {
      return new (t || IdleMonitorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };
    /** @nocollapse */


    IdleMonitorService.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };
    /** @nocollapse */


    IdleMonitorService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function IdleMonitorService_Factory() {
        return new IdleMonitorService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      },
      token: IdleMonitorService,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IdleMonitorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/utils/fetchHttp.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @template T
     * @param {?} url
     * @param {?=} responseType
     * @return {?}
     */


    function fetchHttp(url) {
      var responseType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'json';
      return new Promise(
      /**
      * @param {?} resolve
      * @param {?} reject
      * @return {?}
      */
      function (resolve, reject) {
        /** @type {?} */
        var xhr = new XMLHttpRequest();
        xhr.responseType = responseType;
        xhr.addEventListener('load',
        /**
        * @param {?} ev
        * @return {?}
        */
        function (ev) {
          return resolve(xhr.response);
        });
        xhr.addEventListener('error',
        /**
        * @param {...?} err
        * @return {?}
        */
        function () {
          for (var _len = arguments.length, err = new Array(_len), _key = 0; _key < _len; _key++) {
            err[_key] = arguments[_key];
          }

          return reject(err);
        });
        xhr.open('get', url, true);
        xhr.send();
      });
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/route-service/scully-routes.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @record
     */


    function ScullyRoute() {}

    if (false) {}

    var ScullyRoutesService =
    /*#__PURE__*/
    function () {
      function ScullyRoutesService() {
        _classCallCheck(this, ScullyRoutesService);

        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"](1);
        this.available$ = this.refresh.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(
        /**
        * @return {?}
        */
        function () {
          return fetchHttp('/assets/scully-routes.json');
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(
        /**
        * @return {?}
        */
        function () {
          console.warn('Scully routes file not found, are you running the in static version of your site?');
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(
          /** @type {?} */
          []);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])({
          refCount: false,
          bufferSize: 1
        }));
        this.topLevel$ = this.available$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(
        /**
        * @param {?} routes
        * @return {?}
        */
        function (routes) {
          return routes.filter(
          /**
          * @param {?} r
          * @return {?}
          */
          function (r) {
            return !r.route.slice(1).includes('/');
          });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])({
          refCount: false,
          bufferSize: 1
        }));
        /** kick off first cycle */

        this.reload();
      }
      /**
       * @return {?}
       */


      _createClass(ScullyRoutesService, [{
        key: "getCurrent",
        value: function getCurrent() {
          if (!location) {
            /** probably not in a browser, no current location available */
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])();
          }
          /** @type {?} */


          var curLocation = location.pathname;
          return this.available$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(
          /**
          * @param {?} list
          * @return {?}
          */
          function (list) {
            return list.find(
            /**
            * @param {?} r
            * @return {?}
            */
            function (r) {
              return curLocation.includes(r.route) || r.slugs && Array.isArray(r.slugs) && r.slugs.find(
              /**
              * @param {?} slug
              * @return {?}
              */
              function (slug) {
                return curLocation.includes(slug);
              }) !== undefined;
            });
          }));
        }
        /**
         * @return {?}
         */

      }, {
        key: "reload",
        value: function reload() {
          this.refresh.next();
        }
      }]);

      return ScullyRoutesService;
    }();

    ScullyRoutesService.ɵfac = function ScullyRoutesService_Factory(t) {
      return new (t || ScullyRoutesService)();
    };
    /** @nocollapse */


    ScullyRoutesService.ctorParameters = function () {
      return [];
    };
    /** @nocollapse */


    ScullyRoutesService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function ScullyRoutesService_Factory() {
        return new ScullyRoutesService();
      },
      token: ScullyRoutesService,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScullyRoutesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/scully-content/scully-content.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * this is needed, because otherwise the CLI borks while building
     * @type {?}
     */


    var scullyBegin = '<!--scullyContent-begin-->';
    /** @type {?} */

    var scullyEnd = '<!--scullyContent-end-->';

    var ScullyContentComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} elmRef
       * @param {?} srs
       * @param {?} router
       * @param {?} idle
       */
      function ScullyContentComponent(elmRef, srs, router, idle) {
        _classCallCheck(this, ScullyContentComponent);

        this.elmRef = elmRef;
        this.srs = srs;
        this.router = router;
        this.idle = idle;
        this.type = 'MD';
        this.elm =
        /** @type {?} */
        this.elmRef.nativeElement;
        this.routes = this.srs.available$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).toPromise();
      }
      /**
       * @return {?}
       */


      _createClass(ScullyContentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          /** make sure the idle-check is loaded. */
          this.idle.init();

          if (this.elm) {
            this.handlePage();
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "handlePage",
        value: function handlePage() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var template, curPage, parent, begin, end;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    /** @type {?} */
                    template = document.createElement('template'); // tslint:disable-next-line: no-string-literal

                    if (!window['scullyContent']) {
                      _context4.next = 5;
                      break;
                    }

                    /** upgrade existing static content */
                    // tslint:disable-next-line: no-string-literal
                    template.innerHTML = window['scullyContent'];
                    _context4.next = 8;
                    break;

                  case 5:
                    /** @type {?} */
                    curPage = location.href;
                    _context4.next = 8;
                    return fetchHttp(curPage, 'text').then(
                    /**
                    * @param {?} html
                    * @return {?}
                    */
                    function (html) {
                      try {
                        template.innerHTML = html.split(scullyBegin)[1].split(scullyEnd)[0];
                      } catch (e) {
                        template.innerHTML = "<h2>Sorry, could not parse static page content</h2>\n            <p>This might happen if you are not using the static generated pages.</p>";
                      }
                    }).catch(
                    /**
                    * @param {?} e
                    * @return {?}
                    */
                    function (e) {
                      template.innerHTML = '<h2>Sorry, could not load static page content</h2>';
                      console.error('problem during loading static scully content', e);
                    });

                  case 8:
                    /** @type {?} */
                    parent = this.elm.parentElement || document.body;
                    /** @type {?} */

                    begin = document.createComment('scullyContent-begin');
                    /** @type {?} */

                    end = document.createComment('scullyContent-end');
                    parent.insertBefore(begin, this.elm);
                    parent.insertBefore(template.content, this.elm);
                    parent.insertBefore(end, this.elm);
                    document.querySelectorAll('[href]').forEach(this.upgradeToRoutelink.bind(this));

                  case 15:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
        /**
         * @param {?} elm
         * @return {?}
         */

      }, {
        key: "upgradeToRoutelink",
        value: function upgradeToRoutelink(elm) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var _this4 = this;

            var routes, lnk, route;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.routes;

                  case 2:
                    routes = _context5.sent;

                    /** @type {?} */
                    lnk = elm.getAttribute('href').toLowerCase();
                    /** @type {?} */

                    route = routes.find(
                    /**
                    * @param {?} r
                    * @return {?}
                    */
                    function (r) {
                      return r.route.toLowerCase() === lnk;
                    });

                    if (lnk && route) {
                      elm.onclick =
                      /**
                      * @param {?} ev
                      * @return {?}
                      */
                      function (ev) {
                        /** @type {?} */
                        var splitRoute = route.route.split("/");
                        /** @type {?} */

                        var curSplit = location.pathname.split('/'); // loose last "part" of route

                        curSplit.pop();
                        ev.preventDefault();

                        _this4.router.navigate(splitRoute).catch(
                        /**
                        * @param {?} e
                        * @return {?}
                        */
                        function (e) {
                          return console.error('routing error', e);
                        });
                        /** check for the same route with different "data", and NOT a level higher (length) */


                        if (curSplit.every(
                        /**
                        * @param {?} part
                        * @param {?} i
                        * @return {?}
                        */
                        function (part, i) {
                          return splitRoute[i] === part;
                        }) && splitRoute.length > curSplit.length) {
                          setTimeout(
                          /**
                          * @return {?}
                          */
                          function () {
                            /** @type {?} */
                            var p = _this4.elm.parentElement;
                            /** @type {?} */

                            var cur =
                            /** @type {?} */
                            findComments(p, 'scullyContent-begin')[0];
                            /** @type {?} */

                            var next;

                            do {
                              next = cur.nextSibling;
                              p.removeChild(cur);
                              cur = next;
                            } while (next && next !== _this4.elm); // tslint:disable-next-line: no-string-literal


                            window['scullyContent'] = undefined;

                            _this4.handlePage();
                          }, 20);
                        }
                      };
                    }

                  case 6:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.mutationSubscription) {
            this.mutationSubscription.unsubscribe();
          }
        }
      }]);

      return ScullyContentComponent;
    }();

    ScullyContentComponent.ɵfac = function ScullyContentComponent_Factory(t) {
      return new (t || ScullyContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ScullyRoutesService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](IdleMonitorService));
    };

    ScullyContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ScullyContentComponent,
      selectors: [["scully-content"]],
      inputs: {
        type: "type"
      },
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function ScullyContentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      styles: ["\n      :host {\n        display: none;\n      }\n      scully-content {\n        display: none;\n      }\n    "],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    ScullyContentComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: ScullyRoutesService
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: IdleMonitorService
      }];
    };

    ScullyContentComponent.propDecorators = {
      type: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScullyContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          // tslint:disable-next-line: component-selector
          selector: 'scully-content',
          template: '<ng-content></ng-content>',
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          preserveWhitespaces: true,
          styles: ["\n      :host {\n        display: none;\n      }\n      scully-content {\n        display: none;\n      }\n    "]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: ScullyRoutesService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: IdleMonitorService
        }];
      }, {
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @param {?} elm
     * @param {?} config
     * @return {?}
     */


    function fromMutationObserver(elm, config) {
      return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](
      /**
      * @param {?} obs
      * @return {?}
      */
      function (obs) {
        /** @type {?} */
        var observer = new MutationObserver(
        /**
        * @param {?} mutations
        * @return {?}
        */
        function (mutations) {
          return mutations.forEach(
          /**
          * @param {?} mutation
          * @return {?}
          */
          function (mutation) {
            return obs.next(mutation);
          });
        });
        observer.observe(elm, config);
        return (
          /**
          * @return {?}
          */
          function () {
            return observer.disconnect();
          }
        );
      });
    }
    /**
     * @param {?} rootElem
     * @param {?=} searchText
     * @return {?}
     */


    function findComments(rootElem, searchText) {
      /** @type {?} */
      var comments = []; // Fourth argument, which is actually obsolete according to the DOM4 standard, seems required in IE 11

      /** @type {?} */

      var iterator = document.createNodeIterator(rootElem, NodeFilter.SHOW_COMMENT, {
        acceptNode:
        /**
        * @param {?} node
        * @return {?}
        */
        function acceptNode(node) {
          // Logic to determine whether to accept, reject or skip node
          // In this case, only accept nodes that have content
          // other than whitespace
          if (searchText && node.nodeValue && !node.nodeValue.includes(searchText)) {
            return NodeFilter.FILTER_REJECT;
          }

          return NodeFilter.FILTER_ACCEPT;
        }
      } // , false // IE-11 support requires this parameter.
      );
      /** @type {?} */

      var curNode; // tslint:disable-next-line: no-conditional-assignment

      while (curNode = iterator.nextNode()) {
        comments.push(curNode);
      }

      return comments;
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ComponentsModule = function ComponentsModule() {
      _classCallCheck(this, ComponentsModule);
    };

    ComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ComponentsModule
    });
    ComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ComponentsModule_Factory(t) {
        return new (t || ComponentsModule)();
      }
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ComponentsModule, {
        declarations: [ScullyContentComponent],
        exports: [ScullyContentComponent]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComponentsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [ScullyContentComponent],
          exports: [ScullyContentComponent]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/utils/isScully.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // tslint:disable: no-string-literal

    /** @type {?} */


    var isScullyRunning =
    /**
    * @return {?}
    */
    function isScullyRunning() {
      return window && window['ScullyIO'] === 'running';
    };
    /** @type {?} */


    var isScullyGenerated =
    /**
    * @return {?}
    */
    function isScullyGenerated() {
      return window && window['ScullyIO'] === 'generated';
    };
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/transfer-state/transfer-state.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var SCULLY_SCRIPT_ID = "scully-transfer-state";
    /** @type {?} */

    var SCULLY_STATE_START = "/** ___SCULLY_STATE_START___ */";
    /** @type {?} */

    var SCULLY_STATE_END = "/** ___SCULLY_STATE_END___ */";
    /**
     * @record
     */

    function State() {} // Adding this dynamic comment to suppress ngc error around Document as a DI token.
    // https://github.com/angular/angular/issues/20351#issuecomment-344009887

    /**
     * \@dynamic
     */


    var TransferStateService =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} document
       * @param {?} router
       */
      function TransferStateService(document, router) {
        var _this5 = this;

        _classCallCheck(this, TransferStateService);

        this.document = document;
        this.router = router;
        this.isNavigatingBS = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        this.stateBS = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({});
        this.state$ = this.isNavigatingBS.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(
        /**
        * @param {?} isNav
        * @return {?}
        */
        function (isNav) {
          return isNav ? rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"] : _this5.stateBS.asObservable();
        }));
        this.setupEnvForTransferState();
        this.setupNavStartDataFetching();
      }
      /**
       * @private
       * @return {?}
       */


      _createClass(TransferStateService, [{
        key: "setupEnvForTransferState",
        value: function setupEnvForTransferState() {
          if (isScullyRunning()) {
            // In Scully puppeteer
            this.script = this.document.createElement('script');
            this.script.setAttribute('id', SCULLY_SCRIPT_ID);
            this.document.head.appendChild(this.script);
          } else if (isScullyGenerated()) {
            // On the client AFTER scully rendered it
            this.stateBS.next(window && window[SCULLY_SCRIPT_ID] || {});
          }
        }
        /**
         * Getstate will return an observable that fires once and completes.
         * It does so right after the navigation for the page has finished.
         * @template T
         * @param {?} name The name of the state to
         * @return {?}
         */

      }, {
        key: "getState",
        value: function getState(name) {
          return this.state$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pluck"])(name));
        }
        /**
         * @template T
         * @param {?} name
         * @param {?} val
         * @return {?}
         */

      }, {
        key: "setState",
        value: function setState(name, val) {
          /** @type {?} */
          var newState = Object.assign(Object.assign({}, this.stateBS.value), _defineProperty({}, name, val));
          this.stateBS.next(newState);

          if (isScullyRunning()) {
            this.script.textContent = "window['".concat(SCULLY_SCRIPT_ID, "']=").concat(SCULLY_STATE_START).concat(JSON.stringify(newState)).concat(SCULLY_STATE_END);
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "setupNavStartDataFetching",
        value: function setupNavStartDataFetching() {
          var _this6 = this;

          /**
           * Each time the route changes, get the Scully state from the server-rendered page
           */
          if (!isScullyGenerated()) {
            return;
          }

          this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(
          /**
          * @param {?} e
          * @return {?}
          */
          function (e) {
            return e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(
          /**
          * @param {?} e
          * @return {?}
          */
          function (e) {
            _this6.isNavigatingBS.next(true);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])([
            /** prevent emitting before navigation to _this_ URL is done. */
            _this6.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(
            /**
            * @param {?} ev
            * @return {?}
            */
            function (ev) {
              return ev instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"] && ev.url === e.url;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()), // Get the next route's page from the server
            fetchHttp(e.url + '/index.html', 'text').catch(
            /**
            * @param {?} err
            * @return {?}
            */
            function (err) {
              console.warn('Failed transfering state from route', err);
              return '';
            })]);
          }),
          /** parse out the relevant piece off text, and conver to json */
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(
          /**
          * @param {?} __0
          * @return {?}
          */
          function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                e = _ref2[0],
                html = _ref2[1];

            try {
              /** @type {?} */
              var newStateStr = html.split(SCULLY_STATE_START)[1].split(SCULLY_STATE_END)[0];
              return JSON.parse(newStateStr);
            } catch (_a) {
              return null;
            }
          }),
          /** prevent progressing in case anything went sour above */
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(
          /**
          * @param {?} val
          * @return {?}
          */
          function (val) {
            return val !== null;
          }),
          /** activate the new state */
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(
          /**
          * @param {?} newState
          * @return {?}
          */
          function (newState) {
            /** signal to send out update */
            _this6.isNavigatingBS.next(false);
            /** replace the state, so we don't leak memory on old state */


            _this6.stateBS.next(newState);
          })).subscribe();
        }
      }]);

      return TransferStateService;
    }();

    TransferStateService.ɵfac = function TransferStateService_Factory(t) {
      return new (t || TransferStateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };
    /** @nocollapse */


    TransferStateService.ctorParameters = function () {
      return [{
        type: Document,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
        }]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };
    /** @nocollapse */


    TransferStateService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function TransferStateService_Factory() {
        return new TransferStateService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      },
      token: TransferStateService,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TransferStateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: Document,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
          }]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: scullyio-ng-lib.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=scullyio-ng-lib.js.map

    /***/

  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/shared/episode-summary.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shared/episode-summary.component.ts ***!
    \*****************************************************/

  /*! exports provided: EpisodeSummaryComponent */

  /***/
  function srcAppSharedEpisodeSummaryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EpisodeSummaryComponent", function () {
      return EpisodeSummaryComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _player_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./player.component */
    "./src/app/shared/player.component.ts");

    function EpisodeSummaryComponent_section_0_app_player_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-player", 2);
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("source", ctx_r2.episode.audio);
      }
    }

    function EpisodeSummaryComponent_section_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EpisodeSummaryComponent_section_0_app_player_5_Template, 1, 1, "app-player", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Epis\xF3dio #", ctx_r0.episode.number, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.episode.title, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showPlayer);
      }
    }

    function EpisodeSummaryComponent_summary_1_a_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Descubra mais");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r3.episode.route);
      }
    }

    function EpisodeSummaryComponent_summary_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "summary");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EpisodeSummaryComponent_summary_1_a_2_Template, 2, 1, "a", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.episode.description, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.preview);
      }
    }

    var EpisodeSummaryComponent =
    /*#__PURE__*/
    function () {
      function EpisodeSummaryComponent(_router) {
        _classCallCheck(this, EpisodeSummaryComponent);

        this._router = _router;
        this.showPlayer = true;
      }

      _createClass(EpisodeSummaryComponent, [{
        key: "preview",
        get: function get() {
          return this._router.routerState.snapshot.url !== this.episode.route;
        }
      }]);

      return EpisodeSummaryComponent;
    }();

    EpisodeSummaryComponent.ɵfac = function EpisodeSummaryComponent_Factory(t) {
      return new (t || EpisodeSummaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    EpisodeSummaryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EpisodeSummaryComponent,
      selectors: [["app-episode-summary"]],
      inputs: {
        episode: "episode",
        showPlayer: "showPlayer"
      },
      decls: 2,
      vars: 2,
      consts: [[4, "ngIf"], ["width", "120", 3, "source", 4, "ngIf"], ["width", "120", 3, "source"], [3, "routerLink", 4, "ngIf"], [3, "routerLink"]],
      template: function EpisodeSummaryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EpisodeSummaryComponent_section_0_Template, 6, 3, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EpisodeSummaryComponent_summary_1_Template, 3, 2, "summary", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.episode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.episode);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _player_component__WEBPACK_IMPORTED_MODULE_3__["PlayerComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["[_nghost-%COMP%] {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  height: 40vh;\r\n  background-color: #333333;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n}\r\n\r\nsection[_ngcontent-%COMP%] {\r\n  text-align: left;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: row;\r\n  -webkit-box-pack: justify;\r\n          justify-content: space-between;\r\n  position: relative;\r\n}\r\n\r\nsection[_ngcontent-%COMP%], summary[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n  min-width: 300px;\r\n  max-width: 1200px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  height: 150px;\r\n}\r\n\r\nsummary[_ngcontent-%COMP%] {\r\n  display: block;\r\n  color: #999;\r\n  font-size: 1.1em;\r\n  margin-top: 25px;\r\n  height: 120px;\r\n}\r\n\r\nsummary[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  border-left: 2px solid #1ba8c4;\r\n  padding-left: 7px;\r\n  color: #fff;\r\n  font-weight: 400;\r\n  font-size: 3.5em;\r\n  text-align: left;\r\n  margin-bottom: 10px;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  font-size: 0.5em;\r\n  font-weight: 200;\r\n}\r\n\r\napp-player[_ngcontent-%COMP%] {\r\n  display: block;\r\n  width: 120px;\r\n  height: 120px;\r\n  margin-top: 35px;\r\n  position: relative;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2VwaXNvZGUtc3VtbWFyeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsWUFBWTtFQUNaLHlCQUF5QjtFQUN6Qiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0Qix3QkFBdUI7VUFBdkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDhCQUFtQjtFQUFuQiw2QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHlCQUE4QjtVQUE5Qiw4QkFBOEI7RUFDOUIsa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQiw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsd0JBQXVCO1VBQXZCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2VwaXNvZGUtc3VtbWFyeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiA0MHZoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuc2VjdGlvbiB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuc2VjdGlvbixcclxuc3VtbWFyeSB7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gIG1heC13aWR0aDogMTIwMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG59XHJcblxyXG5zdW1tYXJ5IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjb2xvcjogIzk5OTtcclxuICBmb250LXNpemU6IDEuMWVtO1xyXG4gIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgaGVpZ2h0OiAxMjBweDtcclxufVxyXG5cclxuc3VtbWFyeSBhIHtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuaDEge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICMxYmE4YzQ7XHJcbiAgcGFkZGluZy1sZWZ0OiA3cHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXNpemU6IDMuNWVtO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbmgxIHNwYW4ge1xyXG4gIGZvbnQtc2l6ZTogMC41ZW07XHJcbiAgZm9udC13ZWlnaHQ6IDIwMDtcclxufVxyXG5cclxuYXBwLXBsYXllciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG4gIGhlaWdodDogMTIwcHg7XHJcbiAgbWFyZ2luLXRvcDogMzVweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EpisodeSummaryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-episode-summary',
          templateUrl: './episode-summary.component.html',
          styleUrls: ['./episode-summary.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, {
        episode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showPlayer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/episodes.ts":
  /*!************************************!*\
    !*** ./src/app/shared/episodes.ts ***!
    \************************************/

  /*! exports provided: Episodes */

  /***/
  function srcAppSharedEpisodesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Episodes", function () {
      return Episodes;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @scullyio/ng-lib */
    "./node_modules/@scullyio/ng-lib/__ivy_ngcc__/fesm2015/scullyio-ng-lib.js");

    var dateRe = /(\d\d?-\d\d?-\d\d\d\d)/;

    var Episodes = function Episodes(_srs) {
      _classCallCheck(this, Episodes);

      this._srs = _srs;
      this.episodes$ = this._srs.available$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (routeList) {
        routeList = routeList.filter(function (r) {
          return dateRe.test(r.route);
        }).sort(function (a, b) {
          var adate = dateRe.exec(a.route)[0];
          var bdate = dateRe.exec(b.route)[0];
          return new Date(bdate).getTime() - new Date(adate).getTime();
        });
        return routeList.filter(function (route) {
          return route.route.startsWith("/episode/");
        }).map(function (e, idx) {
          return Object.assign(Object.assign({}, e), {
            number: routeList.length - idx
          });
        });
      }));
    };

    Episodes.ɵfac = function Episodes_Factory(t) {
      return new (t || Episodes)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__["ScullyRoutesService"]));
    };

    Episodes.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: Episodes,
      factory: Episodes.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Episodes, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__["ScullyRoutesService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/player.component.ts":
  /*!********************************************!*\
    !*** ./src/app/shared/player.component.ts ***!
    \********************************************/

  /*! exports provided: PlayerComponent */

  /***/
  function srcAppSharedPlayerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlayerComponent", function () {
      return PlayerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var _c0 = ["audio"];
    var _c1 = ["progress"];
    var RADIUS = 50;

    var PlayerComponent =
    /*#__PURE__*/
    function () {
      function PlayerComponent() {
        _classCallCheck(this, PlayerComponent);

        this.width = 120;
        this.playing = false;
      }

      _createClass(PlayerComponent, [{
        key: "toggle",
        value: function toggle() {
          this.playing = !this.playing;

          if (this.playing) {
            this.audio.nativeElement.play();
          } else {
            this.audio.nativeElement.pause();
          }
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this7 = this;

          var progress = this.progress.nativeElement;
          var totalLength = progress.getTotalLength();
          var audio = this.audio.nativeElement;
          progress.setAttribute('stroke-dasharray', totalLength);
          progress.setAttribute('stroke-dashoffset', totalLength);
          audio.addEventListener('pause', function () {
            return _this7.playing = false;
          });
          audio.addEventListener('play', function () {
            return _this7.playing = true;
          });
          audio.addEventListener('timeupdate', function () {
            var currentTime = audio.currentTime;
            var maxduration = audio.duration;
            var calc = totalLength - currentTime / maxduration * totalLength;
            progress.setAttribute('stroke-dashoffset', calc);
          });
        }
      }, {
        key: "seek",
        value: function seek(evnt) {
          var ratio = this._calculateAngle(evnt) / 360;
          var audio = this.audio.nativeElement;
          var seekTo = ratio * audio.duration;
          audio.currentTime = seekTo;
        }
      }, {
        key: "_calculateAngle",
        value: function _calculateAngle(evnt) {
          var x = RADIUS * 2 / (this.width / evnt.offsetX);
          var y = RADIUS * 2 / (this.width / evnt.offsetY);
          var slope = (RADIUS - y) / (RADIUS - x);
          var angle = 180 * (Math.abs(Math.atan(slope)) / Math.PI);

          if (x <= RADIUS && y >= RADIUS) {
            return angle;
          }

          if (x > RADIUS && y >= RADIUS) {
            return 180 - angle;
          }

          if (x > RADIUS && y <= RADIUS) {
            return 180 + angle;
          }

          return 180 + (180 - angle);
        }
      }]);

      return PlayerComponent;
    }();

    PlayerComponent.ɵfac = function PlayerComponent_Factory(t) {
      return new (t || PlayerComponent)();
    };

    PlayerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PlayerComponent,
      selectors: [["app-player"]],
      viewQuery: function PlayerComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.audio = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.progress = _t.first);
        }
      },
      inputs: {
        width: "width",
        source: "source"
      },
      decls: 11,
      vars: 7,
      consts: [[1, "play", 3, "click"], [1, "arrow"], [1, "pause"], ["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 100 100"], ["cx", "50", "cy", "50", "r", "32", "stroke", "#eee", "fill", "transparent", "stroke-width", "2"], ["pointer-events", "stroke", "d", "\n    M 50 50\n    m -50, 0\n    a 50,50 0 1,0 100,0\n    a 50,50 0 1,0 -100,0", "stroke-miterlimit", "10", "fill", "transparent", "stroke", "#fff", "stroke-width", "20", 2, "opacity", "0.4", "cursor", "pointer", 3, "click"], ["d", "\n    M 50 50\n    m -50, 0\n    a 50,50 0 1,0 100,0\n    a 50,50 0 1,0 -100,0", "stroke-miterlimit", "10", "stroke", "#fff", "fill", "transparent", "stroke-width", "20"], ["progress", ""], ["preload", "auto"], ["audio", ""], ["type", "audio/mp3", 3, "src"]],
      template: function PlayerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerComponent_Template_button_click_0_listener($event) {
            return ctx.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "circle", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "path", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerComponent_Template__svg_path_click_5_listener($event) {
            return ctx.seek($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 6, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "audio", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "source", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.width - 40 + "px")("height", ctx.width - 40 + "px")("border-radius", ctx.width + "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hidden-arrow", ctx.playing);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hidden", !ctx.playing);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.width);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.source, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      styles: ["svg[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  stroke: #fff;\r\n  border-radius: 100%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  pointer-events: none;\r\n  z-index: 0;\r\n}\r\n\r\nsvg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n\r\n.play[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  z-index: 3;\r\n  background: transparent !important;\r\n  cursor: pointer;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  outline: none;\r\n  border: none;\r\n}\r\n\r\n.arrow[_ngcontent-%COMP%] {\r\n  -webkit-transition: all 0.3s;\r\n  transition: all 0.3s;\r\n\r\n  width: 0;\r\n  height: 0;\r\n  border-top-width: 15px;\r\n  border-bottom-width: 15px;\r\n  border-left-width: 25px;\r\n\r\n  border-top-color: transparent;\r\n  border-top-style: solid;\r\n  border-bottom-color: transparent;\r\n  border-bottom-style: solid;\r\n  border-left-style: solid;\r\n  border-left-color: #eee;\r\n\r\n  margin: auto;\r\n  margin-left: 22px;\r\n}\r\n\r\n.play[_ngcontent-%COMP%], .pause[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 50%;\r\n}\r\n\r\n.pause[_ngcontent-%COMP%] {\r\n  -webkit-transition: opacity 0.3s;\r\n  transition: opacity 0.3s;\r\n}\r\n\r\n\r\n\r\n.play[_ngcontent-%COMP%], .pause[_ngcontent-%COMP%], .pause[_ngcontent-%COMP%]::after, .pause[_ngcontent-%COMP%]::before {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n}\r\n\r\n.pause[_ngcontent-%COMP%]::after, .pause[_ngcontent-%COMP%]::before {\r\n  width: 12px;\r\n  height: 35px;\r\n  content: '';\r\n  background-color: #eee;\r\n  display: inline-block;\r\n  opacity: 1;\r\n}\r\n\r\n.pause[_ngcontent-%COMP%]::before {\r\n  left: calc(50% - 10px);\r\n}\r\n\r\n.pause[_ngcontent-%COMP%]::after {\r\n  left: calc(50% + 10px);\r\n}\r\n\r\n.hidden-arrow[_ngcontent-%COMP%] {\r\n  border-left-width: 0;\r\n}\r\n\r\n.hidden[_ngcontent-%COMP%] {\r\n  opacity: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3BsYXllci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix3Q0FBZ0M7VUFBaEMsZ0NBQWdDO0VBQ2hDLG9CQUFvQjtFQUNwQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsVUFBVTtFQUNWLGtDQUFrQztFQUNsQyxlQUFlO0VBQ2Ysd0NBQWdDO1VBQWhDLGdDQUFnQztFQUNoQyxhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsNEJBQW9CO0VBQXBCLG9CQUFvQjs7RUFFcEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLHVCQUF1Qjs7RUFFdkIsNkJBQTZCO0VBQzdCLHVCQUF1QjtFQUN2QixnQ0FBZ0M7RUFDaEMsMEJBQTBCO0VBQzFCLHdCQUF3QjtFQUN4Qix1QkFBdUI7O0VBRXZCLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQ0FBd0I7RUFBeEIsd0JBQXdCO0FBQzFCOztBQUVBLFdBQVc7O0FBQ1g7Ozs7RUFJRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCx3Q0FBZ0M7VUFBaEMsZ0NBQWdDO0FBQ2xDOztBQUVBOztFQUVFLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsVUFBVTtBQUNaOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3BsYXllci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic3ZnIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHN0cm9rZTogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIHotaW5kZXg6IDA7XHJcbn1cclxuXHJcbnN2ZyBwYXRoIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ucGxheSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB6LWluZGV4OiAzO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uYXJyb3cge1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG5cclxuICB3aWR0aDogMDtcclxuICBoZWlnaHQ6IDA7XHJcbiAgYm9yZGVyLXRvcC13aWR0aDogMTVweDtcclxuICBib3JkZXItYm90dG9tLXdpZHRoOiAxNXB4O1xyXG4gIGJvcmRlci1sZWZ0LXdpZHRoOiAyNXB4O1xyXG5cclxuICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItdG9wLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItbGVmdC1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICNlZWU7XHJcblxyXG4gIG1hcmdpbjogYXV0bztcclxuICBtYXJnaW4tbGVmdDogMjJweDtcclxufVxyXG5cclxuLnBsYXksXHJcbi5wYXVzZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLnBhdXNlIHtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3M7XHJcbn1cclxuXHJcbi8qIENlbnRlciAqL1xyXG4ucGxheSxcclxuLnBhdXNlLFxyXG4ucGF1c2U6OmFmdGVyLFxyXG4ucGF1c2U6OmJlZm9yZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG5cclxuLnBhdXNlOjphZnRlcixcclxuLnBhdXNlOjpiZWZvcmUge1xyXG4gIHdpZHRoOiAxMnB4O1xyXG4gIGhlaWdodDogMzVweDtcclxuICBjb250ZW50OiAnJztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4ucGF1c2U6OmJlZm9yZSB7XHJcbiAgbGVmdDogY2FsYyg1MCUgLSAxMHB4KTtcclxufVxyXG5cclxuLnBhdXNlOjphZnRlciB7XHJcbiAgbGVmdDogY2FsYyg1MCUgKyAxMHB4KTtcclxufVxyXG5cclxuLmhpZGRlbi1hcnJvdyB7XHJcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XHJcbn1cclxuXHJcbi5oaWRkZW4ge1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlayerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-player',
          templateUrl: './player.component.html',
          styleUrls: ['./player.component.css']
        }]
      }], null, {
        width: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        source: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        audio: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['audio']
        }],
        progress: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['progress']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _episode_summary_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./episode-summary.component */
    "./src/app/shared/episode-summary.component.ts");
    /* harmony import */


    var _episodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./episodes */
    "./src/app/shared/episodes.ts");
    /* harmony import */


    var _player_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./player.component */
    "./src/app/shared/player.component.ts");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
    SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      },
      providers: [{
        provide: _episodes__WEBPACK_IMPORTED_MODULE_4__["Episodes"],
        useClass: _episodes__WEBPACK_IMPORTED_MODULE_4__["Episodes"]
      }],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SharedModule, {
        declarations: [_episode_summary_component__WEBPACK_IMPORTED_MODULE_3__["EpisodeSummaryComponent"], _player_component__WEBPACK_IMPORTED_MODULE_5__["PlayerComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        exports: [_episode_summary_component__WEBPACK_IMPORTED_MODULE_3__["EpisodeSummaryComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_episode_summary_component__WEBPACK_IMPORTED_MODULE_3__["EpisodeSummaryComponent"], _player_component__WEBPACK_IMPORTED_MODULE_5__["PlayerComponent"]],
          exports: [_episode_summary_component__WEBPACK_IMPORTED_MODULE_3__["EpisodeSummaryComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
          providers: [{
            provide: _episodes__WEBPACK_IMPORTED_MODULE_4__["Episodes"],
            useClass: _episodes__WEBPACK_IMPORTED_MODULE_4__["Episodes"]
          }]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=default~episode-episode-module~home-home-module-es5.js.map