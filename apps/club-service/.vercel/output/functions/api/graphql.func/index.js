globalThis._ENTRIES = {};
/**/ self.__PRERENDER_MANIFEST =
  '{"version":4,"routes":{},"dynamicRoutes":{},"preview":{"previewModeId":"eaf36d0859f66d13e272fc50fb7757a1","previewModeSigningKey":"4ed071d1c1f74e3d19273f1aa9470c47c133842fe7158ca0bfa9226e248f37f6","previewModeEncryptionKey":"2d62f4ca181137b8f9e0bed096358b5a9102a7638fc2a21e5c6f4a3eda6aa1eb"},"notFoundRoutes":[]}';
/**/
/******/ (() => {
  // webpackBootstrap
  /******/ 'use strict';
  /******/ var __webpack_modules__ = {};
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ var threw = true;
    /******/ try {
      /******/ __webpack_modules__[moduleId](
        module,
        module.exports,
        __webpack_require__
      );
      /******/ threw = false;
      /******/
    } finally {
      /******/ if (threw) delete __webpack_module_cache__[moduleId];
      /******/
    }
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/ __webpack_require__.m = __webpack_modules__;
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/chunk loaded */
  /******/ (() => {
    /******/ var deferred = [];
    /******/ __webpack_require__.O = (result, chunkIds, fn, priority) => {
      /******/ if (chunkIds) {
        /******/ priority = priority || 0;
        /******/ for (
          var i = deferred.length;
          i > 0 && deferred[i - 1][2] > priority;
          i--
        )
          deferred[i] = deferred[i - 1];
        /******/ deferred[i] = [chunkIds, fn, priority];
        /******/ return;
        /******/
      }
      /******/ var notFulfilled = Infinity;
      /******/ for (var i = 0; i < deferred.length; i++) {
        /******/ var [chunkIds, fn, priority] = deferred[i];
        /******/ var fulfilled = true;
        /******/ for (var j = 0; j < chunkIds.length; j++) {
          /******/ if (
            (priority & (1 === 0) || notFulfilled >= priority) &&
            Object.keys(__webpack_require__.O).every((key) =>
              __webpack_require__.O[key](chunkIds[j])
            )
          ) {
            /******/ chunkIds.splice(j--, 1);
            /******/
          } else {
            /******/ fulfilled = false;
            /******/ if (priority < notFulfilled) notFulfilled = priority;
            /******/
          }
          /******/
        }
        /******/ if (fulfilled) {
          /******/ deferred.splice(i--, 1);
          /******/ var r = fn();
          /******/ if (r !== undefined) result = r;
          /******/
        }
        /******/
      }
      /******/ return result;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/compat get default export */
  /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule
          ? /******/ () => module['default']
          : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/global */
  /******/ (() => {
    /******/ __webpack_require__.g = (function () {
      /******/ if (typeof globalThis === 'object') return globalThis;
      /******/ try {
        /******/ return this || new Function('return this')();
        /******/
      } catch (e) {
        /******/ if (typeof window === 'object') return window;
        /******/
      }
      /******/
    })();
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module',
        });
        /******/
      }
      /******/ Object.defineProperty(exports, '__esModule', { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/jsonp chunk loading */
  /******/ (() => {
    /******/ // no baseURI
    /******/
    /******/ // object to store loaded and loading chunks
    /******/ // undefined = chunk not loaded, null = chunk preloaded/prefetched
    /******/ // [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
    /******/ var installedChunks = {
      /******/ 993: 0,
      /******/
    };
    /******/
    /******/ // no chunk on demand loading
    /******/
    /******/ // no prefetching
    /******/
    /******/ // no preloaded
    /******/
    /******/ // no HMR
    /******/
    /******/ // no HMR manifest
    /******/
    /******/ __webpack_require__.O.j = (chunkId) =>
      installedChunks[chunkId] === 0;
    /******/
    /******/ // install a JSONP callback for chunk loading
    /******/ var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
      /******/ var [chunkIds, moreModules, runtime] = data;
      /******/ // add "moreModules" to the modules object,
      /******/ // then flag all "chunkIds" as loaded and fire callback
      /******/ var moduleId,
        chunkId,
        i = 0;
      /******/ if (chunkIds.some((id) => installedChunks[id] !== 0)) {
        /******/ for (moduleId in moreModules) {
          /******/ if (__webpack_require__.o(moreModules, moduleId)) {
            /******/ __webpack_require__.m[moduleId] = moreModules[moduleId];
            /******/
          }
          /******/
        }
        /******/ if (runtime) var result = runtime(__webpack_require__);
        /******/
      }
      /******/ if (parentChunkLoadingFunction) parentChunkLoadingFunction(data);
      /******/ for (; i < chunkIds.length; i++) {
        /******/ chunkId = chunkIds[i];
        /******/ if (
          __webpack_require__.o(installedChunks, chunkId) &&
          installedChunks[chunkId]
        ) {
          /******/ installedChunks[chunkId][0]();
          /******/
        }
        /******/ installedChunks[chunkId] = 0;
        /******/
      }
      /******/ return __webpack_require__.O(result);
      /******/
    };
    /******/
    /******/ var chunkLoadingGlobal = (self['webpackChunk_N_E'] =
      self['webpackChunk_N_E'] || []);
    /******/ chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
    /******/ chunkLoadingGlobal.push = webpackJsonpCallback.bind(
      null,
      chunkLoadingGlobal.push.bind(chunkLoadingGlobal)
    );
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/
  /******/
})();
//# sourceMappingURL=edge-runtime-webpack.js.map
/**/ (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [702],
  {
    67: (e) => {
      'use strict';
      e.exports = require('node:async_hooks');
    },
    195: (e) => {
      'use strict';
      e.exports = require('node:buffer');
    },
    89: (e, t, n) => {
      'use strict';
      let r, i, s, a, o, l, u, c, d, p, h;
      n.r(t), n.d(t, { default: () => uI });
      var f,
        m,
        g,
        y,
        v,
        T,
        b,
        E,
        N,
        _,
        S,
        I,
        O,
        w,
        A,
        x,
        C,
        D,
        R = {};
      async function L() {
        if (
          '_ENTRIES' in globalThis &&
          _ENTRIES.middleware_instrumentation &&
          _ENTRIES.middleware_instrumentation.register
        )
          try {
            await _ENTRIES.middleware_instrumentation.register();
          } catch (e) {
            throw (
              ((e.message = `An error occurred while loading instrumentation hook: ${e.message}`),
              e)
            );
          }
      }
      n.r(R),
        n.d(R, {
          classTeachers: () => uu,
          classes: () => ua,
          clubMembers: () => uc,
          clubs: () => ul,
          students: () => us,
          teachers: () => uo,
          timetable: () => ud,
        });
      let P = null;
      function k() {
        return P || (P = L()), P;
      }
      function $(e) {
        return `The edge runtime does not support Node.js '${e}' module.
Learn More: https://nextjs.org/docs/messages/node-module-in-edge-runtime`;
      }
      process !== n.g.process &&
        ((process.env = n.g.process.env), (n.g.process = process)),
        Object.defineProperty(globalThis, '__import_unsupported', {
          value: function (e) {
            let t = new Proxy(function () {}, {
              get(t, n) {
                if ('then' === n) return {};
                throw Error($(e));
              },
              construct() {
                throw Error($(e));
              },
              apply(n, r, i) {
                if ('function' == typeof i[0]) return i[0](t);
                throw Error($(e));
              },
            });
            return new Proxy({}, { get: () => t });
          },
          enumerable: !1,
          configurable: !1,
        }),
        k();
      class M extends Error {
        constructor({ page: e }) {
          super(`The middleware "${e}" accepts an async API directly with the form:
  
  export function middleware(request, event) {
    return NextResponse.redirect('/new-location')
  }
  
  Read more: https://nextjs.org/docs/messages/middleware-new-signature
  `);
        }
      }
      class F extends Error {
        constructor() {
          super(`The request.page has been deprecated in favour of \`URLPattern\`.
  Read more: https://nextjs.org/docs/messages/middleware-request-page
  `);
        }
      }
      class j extends Error {
        constructor() {
          super(`The request.ua has been removed in favour of \`userAgent\` function.
  Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent
  `);
        }
      }
      function U(e) {
        let t = {},
          n = [];
        if (e)
          for (let [r, i] of e.entries())
            'set-cookie' === r.toLowerCase()
              ? (n.push(
                  ...(function (e) {
                    var t,
                      n,
                      r,
                      i,
                      s,
                      a = [],
                      o = 0;
                    function l() {
                      for (; o < e.length && /\s/.test(e.charAt(o)); ) o += 1;
                      return o < e.length;
                    }
                    for (; o < e.length; ) {
                      for (t = o, s = !1; l(); )
                        if (',' === (n = e.charAt(o))) {
                          for (
                            r = o, o += 1, l(), i = o;
                            o < e.length &&
                            '=' !== (n = e.charAt(o)) &&
                            ';' !== n &&
                            ',' !== n;

                          )
                            o += 1;
                          o < e.length && '=' === e.charAt(o)
                            ? ((s = !0),
                              (o = i),
                              a.push(e.substring(t, r)),
                              (t = o))
                            : (o = r + 1);
                        } else o += 1;
                      (!s || o >= e.length) && a.push(e.substring(t, e.length));
                    }
                    return a;
                  })(i)
                ),
                (t[r] = 1 === n.length ? n[0] : n))
              : (t[r] = i);
        return t;
      }
      function B(e) {
        try {
          return String(new URL(String(e)));
        } catch (t) {
          throw Error(
            `URL is malformed "${String(
              e
            )}". Please use only absolute URLs - https://nextjs.org/docs/messages/middleware-relative-urls`,
            { cause: t }
          );
        }
      }
      let V = Symbol('response'),
        q = Symbol('passThrough'),
        Q = Symbol('waitUntil');
      class Y {
        constructor(e) {
          (this[Q] = []), (this[q] = !1);
        }
        respondWith(e) {
          this[V] || (this[V] = Promise.resolve(e));
        }
        passThroughOnException() {
          this[q] = !0;
        }
        waitUntil(e) {
          this[Q].push(e);
        }
      }
      class G extends Y {
        constructor(e) {
          super(e.request), (this.sourcePage = e.page);
        }
        get request() {
          throw new M({ page: this.sourcePage });
        }
        respondWith() {
          throw new M({ page: this.sourcePage });
        }
      }
      function J(e) {
        return e.replace(/\/$/, '') || '/';
      }
      function K(e) {
        let t = e.indexOf('#'),
          n = e.indexOf('?'),
          r = n > -1 && (t < 0 || n < t);
        return r || t > -1
          ? {
              pathname: e.substring(0, r ? n : t),
              query: r ? e.substring(n, t > -1 ? t : void 0) : '',
              hash: t > -1 ? e.slice(t) : '',
            }
          : { pathname: e, query: '', hash: '' };
      }
      function H(e, t) {
        if (!e.startsWith('/') || !t) return e;
        let { pathname: n, query: r, hash: i } = K(e);
        return '' + t + n + r + i;
      }
      function z(e, t) {
        if (!e.startsWith('/') || !t) return e;
        let { pathname: n, query: r, hash: i } = K(e);
        return '' + n + t + r + i;
      }
      function X(e, t) {
        if ('string' != typeof e) return !1;
        let { pathname: n } = K(e);
        return n === t || n.startsWith(t + '/');
      }
      function W(e, t) {
        let n;
        let r = e.split('/');
        return (
          (t || []).some(
            (t) =>
              !!r[1] &&
              r[1].toLowerCase() === t.toLowerCase() &&
              ((n = t), r.splice(1, 1), (e = r.join('/') || '/'), !0)
          ),
          { pathname: e, detectedLocale: n }
        );
      }
      let Z =
        /(?!^https?:\/\/)(127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}|\[::1\]|localhost)/;
      function ee(e, t) {
        return new URL(
          String(e).replace(Z, 'localhost'),
          t && String(t).replace(Z, 'localhost')
        );
      }
      let et = Symbol('NextURLInternal');
      class en {
        constructor(e, t, n) {
          let r, i;
          ('object' == typeof t && 'pathname' in t) || 'string' == typeof t
            ? ((r = t), (i = n || {}))
            : (i = n || t || {}),
            (this[et] = { url: ee(e, r ?? i.base), options: i, basePath: '' }),
            this.analyze();
        }
        analyze() {
          var e, t, n, r, i;
          let s = (function (e, t) {
              var n, r;
              let {
                  basePath: i,
                  i18n: s,
                  trailingSlash: a,
                } = null != (n = t.nextConfig) ? n : {},
                o = {
                  pathname: e,
                  trailingSlash: '/' !== e ? e.endsWith('/') : a,
                };
              i &&
                X(o.pathname, i) &&
                ((o.pathname = (function (e, t) {
                  if (!X(e, t)) return e;
                  let n = e.slice(t.length);
                  return n.startsWith('/') ? n : '/' + n;
                })(o.pathname, i)),
                (o.basePath = i));
              let l = o.pathname;
              if (
                o.pathname.startsWith('/_next/data/') &&
                o.pathname.endsWith('.json')
              ) {
                let e = o.pathname
                    .replace(/^\/_next\/data\//, '')
                    .replace(/\.json$/, '')
                    .split('/'),
                  n = e[0];
                (o.buildId = n),
                  (l = 'index' !== e[1] ? '/' + e.slice(1).join('/') : '/'),
                  !0 === t.parseData && (o.pathname = l);
              }
              if (s) {
                let e = t.i18nProvider
                  ? t.i18nProvider.analyze(o.pathname)
                  : W(o.pathname, s.locales);
                (o.locale = e.detectedLocale),
                  (o.pathname = null != (r = e.pathname) ? r : o.pathname),
                  !e.detectedLocale &&
                    o.buildId &&
                    (e = t.i18nProvider
                      ? t.i18nProvider.analyze(l)
                      : W(l, s.locales)).detectedLocale &&
                    (o.locale = e.detectedLocale);
              }
              return o;
            })(this[et].url.pathname, {
              nextConfig: this[et].options.nextConfig,
              parseData: !0,
              i18nProvider: this[et].options.i18nProvider,
            }),
            a = (function (e, t) {
              let n;
              if ((null == t ? void 0 : t.host) && !Array.isArray(t.host))
                n = t.host.toString().split(':', 1)[0];
              else {
                if (!e.hostname) return;
                n = e.hostname;
              }
              return n.toLowerCase();
            })(this[et].url, this[et].options.headers);
          this[et].domainLocale = this[et].options.i18nProvider
            ? this[et].options.i18nProvider.detectDomainLocale(a)
            : (function (e, t, n) {
                if (e)
                  for (let s of (n && (n = n.toLowerCase()), e)) {
                    var r, i;
                    if (
                      t ===
                        (null == (r = s.domain)
                          ? void 0
                          : r.split(':', 1)[0].toLowerCase()) ||
                      n === s.defaultLocale.toLowerCase() ||
                      (null == (i = s.locales)
                        ? void 0
                        : i.some((e) => e.toLowerCase() === n))
                    )
                      return s;
                  }
              })(
                null == (t = this[et].options.nextConfig)
                  ? void 0
                  : null == (e = t.i18n)
                  ? void 0
                  : e.domains,
                a
              );
          let o =
            (null == (n = this[et].domainLocale) ? void 0 : n.defaultLocale) ||
            (null == (i = this[et].options.nextConfig)
              ? void 0
              : null == (r = i.i18n)
              ? void 0
              : r.defaultLocale);
          (this[et].url.pathname = s.pathname),
            (this[et].defaultLocale = o),
            (this[et].basePath = s.basePath ?? ''),
            (this[et].buildId = s.buildId),
            (this[et].locale = s.locale ?? o),
            (this[et].trailingSlash = s.trailingSlash);
        }
        formatPathname() {
          var e;
          let t;
          return (
            (t = (function (e, t, n, r) {
              if (!t || t === n) return e;
              let i = e.toLowerCase();
              return !r && (X(i, '/api') || X(i, '/' + t.toLowerCase()))
                ? e
                : H(e, '/' + t);
            })(
              (e = {
                basePath: this[et].basePath,
                buildId: this[et].buildId,
                defaultLocale: this[et].options.forceLocale
                  ? void 0
                  : this[et].defaultLocale,
                locale: this[et].locale,
                pathname: this[et].url.pathname,
                trailingSlash: this[et].trailingSlash,
              }).pathname,
              e.locale,
              e.buildId ? void 0 : e.defaultLocale,
              e.ignorePrefix
            )),
            (e.buildId || !e.trailingSlash) && (t = J(t)),
            e.buildId &&
              (t = z(
                H(t, '/_next/data/' + e.buildId),
                '/' === e.pathname ? 'index.json' : '.json'
              )),
            (t = H(t, e.basePath)),
            !e.buildId && e.trailingSlash
              ? t.endsWith('/')
                ? t
                : z(t, '/')
              : J(t)
          );
        }
        formatSearch() {
          return this[et].url.search;
        }
        get buildId() {
          return this[et].buildId;
        }
        set buildId(e) {
          this[et].buildId = e;
        }
        get locale() {
          return this[et].locale ?? '';
        }
        set locale(e) {
          var t, n;
          if (
            !this[et].locale ||
            !(null == (n = this[et].options.nextConfig)
              ? void 0
              : null == (t = n.i18n)
              ? void 0
              : t.locales.includes(e))
          )
            throw TypeError(
              `The NextURL configuration includes no locale "${e}"`
            );
          this[et].locale = e;
        }
        get defaultLocale() {
          return this[et].defaultLocale;
        }
        get domainLocale() {
          return this[et].domainLocale;
        }
        get searchParams() {
          return this[et].url.searchParams;
        }
        get host() {
          return this[et].url.host;
        }
        set host(e) {
          this[et].url.host = e;
        }
        get hostname() {
          return this[et].url.hostname;
        }
        set hostname(e) {
          this[et].url.hostname = e;
        }
        get port() {
          return this[et].url.port;
        }
        set port(e) {
          this[et].url.port = e;
        }
        get protocol() {
          return this[et].url.protocol;
        }
        set protocol(e) {
          this[et].url.protocol = e;
        }
        get href() {
          let e = this.formatPathname(),
            t = this.formatSearch();
          return `${this.protocol}//${this.host}${e}${t}${this.hash}`;
        }
        set href(e) {
          (this[et].url = ee(e)), this.analyze();
        }
        get origin() {
          return this[et].url.origin;
        }
        get pathname() {
          return this[et].url.pathname;
        }
        set pathname(e) {
          this[et].url.pathname = e;
        }
        get hash() {
          return this[et].url.hash;
        }
        set hash(e) {
          this[et].url.hash = e;
        }
        get search() {
          return this[et].url.search;
        }
        set search(e) {
          this[et].url.search = e;
        }
        get password() {
          return this[et].url.password;
        }
        set password(e) {
          this[et].url.password = e;
        }
        get username() {
          return this[et].url.username;
        }
        set username(e) {
          this[et].url.username = e;
        }
        get basePath() {
          return this[et].basePath;
        }
        set basePath(e) {
          this[et].basePath = e.startsWith('/') ? e : `/${e}`;
        }
        toString() {
          return this.href;
        }
        toJSON() {
          return this.href;
        }
        [Symbol.for('edge-runtime.inspect.custom')]() {
          return {
            href: this.href,
            origin: this.origin,
            protocol: this.protocol,
            username: this.username,
            password: this.password,
            host: this.host,
            hostname: this.hostname,
            port: this.port,
            pathname: this.pathname,
            search: this.search,
            searchParams: this.searchParams,
            hash: this.hash,
          };
        }
        clone() {
          return new en(String(this), this[et].options);
        }
      }
      var er = n(109);
      let ei = Symbol('internal request');
      class es extends Request {
        constructor(e, t = {}) {
          let n = 'string' != typeof e && 'url' in e ? e.url : String(e);
          B(n), e instanceof Request ? super(e, t) : super(n, t);
          let r = new en(n, {
            headers: U(this.headers),
            nextConfig: t.nextConfig,
          });
          this[ei] = {
            cookies: new er.RequestCookies(this.headers),
            geo: t.geo || {},
            ip: t.ip,
            nextUrl: r,
            url: r.toString(),
          };
        }
        [Symbol.for('edge-runtime.inspect.custom')]() {
          return {
            cookies: this.cookies,
            geo: this.geo,
            ip: this.ip,
            nextUrl: this.nextUrl,
            url: this.url,
            bodyUsed: this.bodyUsed,
            cache: this.cache,
            credentials: this.credentials,
            destination: this.destination,
            headers: Object.fromEntries(this.headers),
            integrity: this.integrity,
            keepalive: this.keepalive,
            method: this.method,
            mode: this.mode,
            redirect: this.redirect,
            referrer: this.referrer,
            referrerPolicy: this.referrerPolicy,
            signal: this.signal,
          };
        }
        get cookies() {
          return this[ei].cookies;
        }
        get geo() {
          return this[ei].geo;
        }
        get ip() {
          return this[ei].ip;
        }
        get nextUrl() {
          return this[ei].nextUrl;
        }
        get page() {
          throw new F();
        }
        get ua() {
          throw new j();
        }
        get url() {
          return this[ei].url;
        }
      }
      let ea = Symbol('internal response'),
        eo = new Set([301, 302, 303, 307, 308]);
      function el(e, t) {
        var n;
        if (null == e ? void 0 : null == (n = e.request) ? void 0 : n.headers) {
          if (!(e.request.headers instanceof Headers))
            throw Error('request.headers must be an instance of Headers');
          let n = [];
          for (let [r, i] of e.request.headers)
            t.set('x-middleware-request-' + r, i), n.push(r);
          t.set('x-middleware-override-headers', n.join(','));
        }
      }
      class eu extends Response {
        constructor(e, t = {}) {
          super(e, t),
            (this[ea] = {
              cookies: new er.ResponseCookies(this.headers),
              url: t.url
                ? new en(t.url, {
                    headers: U(this.headers),
                    nextConfig: t.nextConfig,
                  })
                : void 0,
            });
        }
        [Symbol.for('edge-runtime.inspect.custom')]() {
          return {
            cookies: this.cookies,
            url: this.url,
            body: this.body,
            bodyUsed: this.bodyUsed,
            headers: Object.fromEntries(this.headers),
            ok: this.ok,
            redirected: this.redirected,
            status: this.status,
            statusText: this.statusText,
            type: this.type,
          };
        }
        get cookies() {
          return this[ea].cookies;
        }
        static json(e, t) {
          let n = Response.json(e, t);
          return new eu(n.body, n);
        }
        static redirect(e, t) {
          let n =
            'number' == typeof t ? t : (null == t ? void 0 : t.status) ?? 307;
          if (!eo.has(n))
            throw RangeError(
              'Failed to execute "redirect" on "response": Invalid status code'
            );
          let r = 'object' == typeof t ? t : {},
            i = new Headers(null == r ? void 0 : r.headers);
          return (
            i.set('Location', B(e)),
            new eu(null, { ...r, headers: i, status: n })
          );
        }
        static rewrite(e, t) {
          let n = new Headers(null == t ? void 0 : t.headers);
          return (
            n.set('x-middleware-rewrite', B(e)),
            el(t, n),
            new eu(null, { ...t, headers: n })
          );
        }
        static next(e) {
          let t = new Headers(null == e ? void 0 : e.headers);
          return (
            t.set('x-middleware-next', '1'),
            el(e, t),
            new eu(null, { ...e, headers: t })
          );
        }
      }
      function ec(e, t) {
        let n = 'string' == typeof t ? new URL(t) : t,
          r = new URL(e, t),
          i = n.protocol + '//' + n.host;
        return r.protocol + '//' + r.host === i
          ? r.toString().replace(i, '')
          : r.toString();
      }
      let ed = [['RSC'], ['Next-Router-State-Tree'], ['Next-Router-Prefetch']];
      n(636);
      let ep = {
        client: 'client',
        server: 'server',
        edgeServer: 'edge-server',
      };
      ep.client, ep.server, ep.edgeServer, Symbol('polyfills');
      let eh = [
          '__nextFallback',
          '__nextLocale',
          '__nextInferredLocaleFromDefault',
          '__nextDefaultLocale',
          '__nextIsNotFound',
          '_rsc',
        ],
        ef = ['__nextDataReq'];
      function em(e) {
        return e.startsWith('/') ? e : '/' + e;
      }
      let eg = 'nxtP',
        ey = 'x-prerender-revalidate',
        ev = '.meta',
        eT = 'x-next-revalidated-tags',
        eb = {
          shared: 'shared',
          reactServerComponents: 'rsc',
          serverSideRendering: 'ssr',
          actionBrowser: 'action-browser',
          api: 'api',
          middleware: 'middleware',
          edgeAsset: 'edge-asset',
          appPagesBrowser: 'app-pages-browser',
          appMetadataRoute: 'app-metadata-route',
          appRouteHandler: 'app-route-handler',
        };
      ({
        ...eb,
        GROUP: {
          server: [
            eb.reactServerComponents,
            eb.actionBrowser,
            eb.appMetadataRoute,
            eb.appRouteHandler,
          ],
          nonClientServerTarget: [eb.middleware, eb.api],
          app: [
            eb.reactServerComponents,
            eb.actionBrowser,
            eb.appMetadataRoute,
            eb.appRouteHandler,
            eb.serverSideRendering,
            eb.appPagesBrowser,
          ],
        },
      });
      class eE {
        static get(e, t, n) {
          let r = Reflect.get(e, t, n);
          return 'function' == typeof r ? r.bind(e) : r;
        }
        static set(e, t, n, r) {
          return Reflect.set(e, t, n, r);
        }
        static has(e, t) {
          return Reflect.has(e, t);
        }
        static deleteProperty(e, t) {
          return Reflect.deleteProperty(e, t);
        }
      }
      class eN extends Error {
        constructor() {
          super(
            'Headers cannot be modified. Read more: https://nextjs.org/docs/app/api-reference/functions/headers'
          );
        }
        static callable() {
          throw new eN();
        }
      }
      class e_ extends Headers {
        constructor(e) {
          super(),
            (this.headers = new Proxy(e, {
              get(t, n, r) {
                if ('symbol' == typeof n) return eE.get(t, n, r);
                let i = n.toLowerCase(),
                  s = Object.keys(e).find((e) => e.toLowerCase() === i);
                if (void 0 !== s) return eE.get(t, s, r);
              },
              set(t, n, r, i) {
                if ('symbol' == typeof n) return eE.set(t, n, r, i);
                let s = n.toLowerCase(),
                  a = Object.keys(e).find((e) => e.toLowerCase() === s);
                return eE.set(t, a ?? n, r, i);
              },
              has(t, n) {
                if ('symbol' == typeof n) return eE.has(t, n);
                let r = n.toLowerCase(),
                  i = Object.keys(e).find((e) => e.toLowerCase() === r);
                return void 0 !== i && eE.has(t, i);
              },
              deleteProperty(t, n) {
                if ('symbol' == typeof n) return eE.deleteProperty(t, n);
                let r = n.toLowerCase(),
                  i = Object.keys(e).find((e) => e.toLowerCase() === r);
                return void 0 === i || eE.deleteProperty(t, i);
              },
            }));
        }
        static seal(e) {
          return new Proxy(e, {
            get(e, t, n) {
              switch (t) {
                case 'append':
                case 'delete':
                case 'set':
                  return eN.callable;
                default:
                  return eE.get(e, t, n);
              }
            },
          });
        }
        merge(e) {
          return Array.isArray(e) ? e.join(', ') : e;
        }
        static from(e) {
          return e instanceof Headers ? e : new e_(e);
        }
        append(e, t) {
          let n = this.headers[e];
          'string' == typeof n
            ? (this.headers[e] = [n, t])
            : Array.isArray(n)
            ? n.push(t)
            : (this.headers[e] = t);
        }
        delete(e) {
          delete this.headers[e];
        }
        get(e) {
          let t = this.headers[e];
          return void 0 !== t ? this.merge(t) : null;
        }
        has(e) {
          return void 0 !== this.headers[e];
        }
        set(e, t) {
          this.headers[e] = t;
        }
        forEach(e, t) {
          for (let [n, r] of this.entries()) e.call(t, r, n, this);
        }
        *entries() {
          for (let e of Object.keys(this.headers)) {
            let t = e.toLowerCase(),
              n = this.get(t);
            yield [t, n];
          }
        }
        *keys() {
          for (let e of Object.keys(this.headers)) {
            let t = e.toLowerCase();
            yield t;
          }
        }
        *values() {
          for (let e of Object.keys(this.headers)) {
            let t = this.get(e);
            yield t;
          }
        }
        [Symbol.iterator]() {
          return this.entries();
        }
      }
      class eS extends Error {
        constructor() {
          super(
            'Cookies can only be modified in a Server Action or Route Handler. Read more: https://nextjs.org/docs/app/api-reference/functions/cookies#cookiessetname-value-options'
          );
        }
        static callable() {
          throw new eS();
        }
      }
      class eI {
        static seal(e) {
          return new Proxy(e, {
            get(e, t, n) {
              switch (t) {
                case 'clear':
                case 'delete':
                case 'set':
                  return eS.callable;
                default:
                  return eE.get(e, t, n);
              }
            },
          });
        }
      }
      let eO = Symbol.for('next.mutated.cookies');
      class ew {
        static wrap(e, t) {
          let n = new er.ResponseCookies(new Headers());
          for (let t of e.getAll()) n.set(t);
          let r = [],
            i = new Set(),
            s = () => {
              var e;
              let s =
                null == fetch.__nextGetStaticStore
                  ? void 0
                  : null == (e = fetch.__nextGetStaticStore.call(fetch))
                  ? void 0
                  : e.getStore();
              if (
                (s && (s.pathWasRevalidated = !0),
                (r = n.getAll().filter((e) => i.has(e.name))),
                t)
              ) {
                let e = [];
                for (let t of r) {
                  let n = new er.ResponseCookies(new Headers());
                  n.set(t), e.push(n.toString());
                }
                t(e);
              }
            };
          return new Proxy(n, {
            get(e, t, n) {
              switch (t) {
                case eO:
                  return r;
                case 'delete':
                  return function (...t) {
                    i.add('string' == typeof t[0] ? t[0] : t[0].name);
                    try {
                      e.delete(...t);
                    } finally {
                      s();
                    }
                  };
                case 'set':
                  return function (...t) {
                    i.add('string' == typeof t[0] ? t[0] : t[0].name);
                    try {
                      return e.set(...t);
                    } finally {
                      s();
                    }
                  };
                default:
                  return eE.get(e, t, n);
              }
            },
          });
        }
      }
      let eA = '__prerender_bypass';
      Symbol('__next_preview_data'), Symbol(eA);
      class ex {
        constructor(e, t, n, r) {
          var i;
          let s =
              e &&
              (function (e, t) {
                let n = e_.from(e.headers);
                return {
                  isOnDemandRevalidate: n.get(ey) === t.previewModeId,
                  revalidateOnlyGenerated: n.has(
                    'x-prerender-revalidate-if-generated'
                  ),
                };
              })(t, e).isOnDemandRevalidate,
            a = null == (i = n.get(eA)) ? void 0 : i.value;
          (this.isEnabled = !!(!s && a && e && a === e.previewModeId)),
            (this._previewModeId = null == e ? void 0 : e.previewModeId),
            (this._mutableCookies = r);
        }
        enable() {
          if (!this._previewModeId)
            throw Error(
              'Invariant: previewProps missing previewModeId this should never happen'
            );
          this._mutableCookies.set({
            name: eA,
            value: this._previewModeId,
            httpOnly: !0,
            sameSite: 'none',
            secure: !0,
            path: '/',
          });
        }
        disable() {
          this._mutableCookies.set({
            name: eA,
            value: '',
            httpOnly: !0,
            sameSite: 'none',
            secure: !0,
            path: '/',
            expires: new Date(0),
          });
        }
      }
      let eC = {
          wrap(e, { req: t, res: n, renderOpts: r }, i) {
            let s;
            function a(e) {
              n && n.setHeader('Set-Cookie', e);
            }
            r && 'previewProps' in r && (s = r.previewProps);
            let o = {},
              l = {
                get headers() {
                  return (
                    o.headers ||
                      (o.headers = (function (e) {
                        let t = e_.from(e);
                        for (let e of ed) t.delete(e.toString().toLowerCase());
                        return e_.seal(t);
                      })(t.headers)),
                    o.headers
                  );
                },
                get cookies() {
                  return (
                    o.cookies ||
                      (o.cookies = (function (e) {
                        let t = new er.RequestCookies(e_.from(e));
                        return eI.seal(t);
                      })(t.headers)),
                    o.cookies
                  );
                },
                get mutableCookies() {
                  return (
                    o.mutableCookies ||
                      (o.mutableCookies = (function (e, t) {
                        let n = new er.RequestCookies(e_.from(e));
                        return ew.wrap(n, t);
                      })(
                        t.headers,
                        (null == r ? void 0 : r.onUpdateCookies) ||
                          (n ? a : void 0)
                      )),
                    o.mutableCookies
                  );
                },
                get draftMode() {
                  return (
                    o.draftMode ||
                      (o.draftMode = new ex(
                        s,
                        t,
                        this.cookies,
                        this.mutableCookies
                      )),
                    o.draftMode
                  );
                },
              };
            return e.run(l, i, l);
          },
        },
        eD = Error(
          'Invariant: AsyncLocalStorage accessed in runtime where it is not available'
        );
      class eR {
        disable() {
          throw eD;
        }
        getStore() {}
        run() {
          throw eD;
        }
        exit() {
          throw eD;
        }
        enterWith() {
          throw eD;
        }
      }
      let eL = globalThis.AsyncLocalStorage,
        eP = eL ? new eL() : new eR();
      !(function (e) {
        (e.handleRequest = 'BaseServer.handleRequest'),
          (e.run = 'BaseServer.run'),
          (e.pipe = 'BaseServer.pipe'),
          (e.getStaticHTML = 'BaseServer.getStaticHTML'),
          (e.render = 'BaseServer.render'),
          (e.renderToResponseWithComponents =
            'BaseServer.renderToResponseWithComponents'),
          (e.renderToResponse = 'BaseServer.renderToResponse'),
          (e.renderToHTML = 'BaseServer.renderToHTML'),
          (e.renderError = 'BaseServer.renderError'),
          (e.renderErrorToResponse = 'BaseServer.renderErrorToResponse'),
          (e.renderErrorToHTML = 'BaseServer.renderErrorToHTML'),
          (e.render404 = 'BaseServer.render404');
      })(f || (f = {})),
        (function (e) {
          (e.loadDefaultErrorComponents =
            'LoadComponents.loadDefaultErrorComponents'),
            (e.loadComponents = 'LoadComponents.loadComponents');
        })(m || (m = {})),
        (function (e) {
          (e.getRequestHandler = 'NextServer.getRequestHandler'),
            (e.getServer = 'NextServer.getServer'),
            (e.getServerRequestHandler = 'NextServer.getServerRequestHandler'),
            (e.createServer = 'createServer.createServer');
        })(g || (g = {})),
        (function (e) {
          (e.compression = 'NextNodeServer.compression'),
            (e.getBuildId = 'NextNodeServer.getBuildId'),
            (e.generateStaticRoutes = 'NextNodeServer.generateStaticRoutes'),
            (e.generateFsStaticRoutes =
              'NextNodeServer.generateFsStaticRoutes'),
            (e.generatePublicRoutes = 'NextNodeServer.generatePublicRoutes'),
            (e.generateImageRoutes =
              'NextNodeServer.generateImageRoutes.route'),
            (e.sendRenderResult = 'NextNodeServer.sendRenderResult'),
            (e.proxyRequest = 'NextNodeServer.proxyRequest'),
            (e.runApi = 'NextNodeServer.runApi'),
            (e.render = 'NextNodeServer.render'),
            (e.renderHTML = 'NextNodeServer.renderHTML'),
            (e.imageOptimizer = 'NextNodeServer.imageOptimizer'),
            (e.getPagePath = 'NextNodeServer.getPagePath'),
            (e.getRoutesManifest = 'NextNodeServer.getRoutesManifest'),
            (e.findPageComponents = 'NextNodeServer.findPageComponents'),
            (e.getFontManifest = 'NextNodeServer.getFontManifest'),
            (e.getServerComponentManifest =
              'NextNodeServer.getServerComponentManifest'),
            (e.getRequestHandler = 'NextNodeServer.getRequestHandler'),
            (e.renderToHTML = 'NextNodeServer.renderToHTML'),
            (e.renderError = 'NextNodeServer.renderError'),
            (e.renderErrorToHTML = 'NextNodeServer.renderErrorToHTML'),
            (e.render404 = 'NextNodeServer.render404'),
            (e.route = 'route'),
            (e.onProxyReq = 'onProxyReq'),
            (e.apiResolver = 'apiResolver'),
            (e.internalFetch = 'internalFetch');
        })(y || (y = {})),
        ((v || (v = {})).startServer = 'startServer.startServer'),
        (function (e) {
          (e.getServerSideProps = 'Render.getServerSideProps'),
            (e.getStaticProps = 'Render.getStaticProps'),
            (e.renderToString = 'Render.renderToString'),
            (e.renderDocument = 'Render.renderDocument'),
            (e.createBodyResult = 'Render.createBodyResult');
        })(T || (T = {})),
        (function (e) {
          (e.renderToString = 'AppRender.renderToString'),
            (e.renderToReadableStream = 'AppRender.renderToReadableStream'),
            (e.getBodyResult = 'AppRender.getBodyResult'),
            (e.fetch = 'AppRender.fetch');
        })(b || (b = {})),
        ((E || (E = {})).executeRoute = 'Router.executeRoute'),
        ((N || (N = {})).runHandler = 'Node.runHandler'),
        ((_ || (_ = {})).runHandler = 'AppRouteRouteHandlers.runHandler'),
        (function (e) {
          (e.generateMetadata = 'ResolveMetadata.generateMetadata'),
            (e.generateViewport = 'ResolveMetadata.generateViewport');
        })(S || (S = {}));
      let ek = [
          'BaseServer.handleRequest',
          'Render.getServerSideProps',
          'Render.getStaticProps',
          'AppRender.fetch',
          'AppRender.getBodyResult',
          'Render.renderDocument',
          'Node.runHandler',
          'AppRouteRouteHandlers.runHandler',
          'ResolveMetadata.generateMetadata',
          'ResolveMetadata.generateViewport',
        ],
        {
          context: e$,
          propagation: eM,
          trace: eF,
          SpanStatusCode: ej,
          SpanKind: eU,
          ROOT_CONTEXT: eB,
        } = (r = n(855)),
        eV = (e) =>
          null !== e && 'object' == typeof e && 'function' == typeof e.then,
        eq = (e, t) => {
          (null == t ? void 0 : t.bubble) === !0
            ? e.setAttribute('next.bubble', !0)
            : (t && e.recordException(t),
              e.setStatus({
                code: ej.ERROR,
                message: null == t ? void 0 : t.message,
              })),
            e.end();
        },
        eQ = new Map(),
        eY = r.createContextKey('next.rootSpanId'),
        eG = 0,
        eJ = () => eG++;
      class eK {
        getTracerInstance() {
          return eF.getTracer('next.js', '0.0.1');
        }
        getContext() {
          return e$;
        }
        getActiveScopeSpan() {
          return eF.getSpan(null == e$ ? void 0 : e$.active());
        }
        withPropagatedContext(e, t, n) {
          let r = e$.active();
          if (eF.getSpanContext(r)) return t();
          let i = eM.extract(r, e, n);
          return e$.with(i, t);
        }
        trace(...e) {
          var t;
          let [n, r, i] = e,
            { fn: s, options: a } =
              'function' == typeof r
                ? { fn: r, options: {} }
                : { fn: i, options: { ...r } };
          if (
            (!ek.includes(n) && '1' !== process.env.NEXT_OTEL_VERBOSE) ||
            a.hideSpan
          )
            return s();
          let o = a.spanName ?? n,
            l = this.getSpanContext(
              (null == a ? void 0 : a.parentSpan) ?? this.getActiveScopeSpan()
            ),
            u = !1;
          l
            ? (null == (t = eF.getSpanContext(l)) ? void 0 : t.isRemote) &&
              (u = !0)
            : ((l = eB), (u = !0));
          let c = eJ();
          return (
            (a.attributes = {
              'next.span_name': o,
              'next.span_type': n,
              ...a.attributes,
            }),
            e$.with(l.setValue(eY, c), () =>
              this.getTracerInstance().startActiveSpan(o, a, (e) => {
                let t = () => {
                  eQ.delete(c);
                };
                u && eQ.set(c, new Map(Object.entries(a.attributes ?? {})));
                try {
                  if (s.length > 1) return s(e, (t) => eq(e, t));
                  let n = s(e);
                  return (
                    eV(n)
                      ? n
                          .then(
                            () => e.end(),
                            (t) => eq(e, t)
                          )
                          .finally(t)
                      : (e.end(), t()),
                    n
                  );
                } catch (n) {
                  throw (eq(e, n), t(), n);
                }
              })
            )
          );
        }
        wrap(...e) {
          let t = this,
            [n, r, i] = 3 === e.length ? e : [e[0], {}, e[1]];
          return ek.includes(n) || '1' === process.env.NEXT_OTEL_VERBOSE
            ? function () {
                let e = r;
                'function' == typeof e &&
                  'function' == typeof i &&
                  (e = e.apply(this, arguments));
                let s = arguments.length - 1,
                  a = arguments[s];
                if ('function' != typeof a)
                  return t.trace(n, e, () => i.apply(this, arguments));
                {
                  let r = t.getContext().bind(e$.active(), a);
                  return t.trace(
                    n,
                    e,
                    (e, t) => (
                      (arguments[s] = function (e) {
                        return null == t || t(e), r.apply(this, arguments);
                      }),
                      i.apply(this, arguments)
                    )
                  );
                }
              }
            : i;
        }
        startSpan(...e) {
          let [t, n] = e,
            r = this.getSpanContext(
              (null == n ? void 0 : n.parentSpan) ?? this.getActiveScopeSpan()
            );
          return this.getTracerInstance().startSpan(t, n, r);
        }
        getSpanContext(e) {
          return e ? eF.setSpan(e$.active(), e) : void 0;
        }
        getRootSpanAttributes() {
          let e = e$.active().getValue(eY);
          return eQ.get(e);
        }
      }
      let eH = (() => {
        let e = new eK();
        return () => e;
      })();
      class ez extends es {
        constructor(e) {
          super(e.input, e.init), (this.sourcePage = e.page);
        }
        get request() {
          throw new M({ page: this.sourcePage });
        }
        respondWith() {
          throw new M({ page: this.sourcePage });
        }
        waitUntil() {
          throw new M({ page: this.sourcePage });
        }
      }
      let eX = {
          keys: (e) => Array.from(e.keys()),
          get: (e, t) => e.get(t) ?? void 0,
        },
        eW = (e, t) => eH().withPropagatedContext(e.headers, t, eX),
        eZ = !1;
      async function e0(e) {
        let t, r;
        !(function () {
          if (
            !eZ &&
            ((eZ = !0), 'true' === process.env.NEXT_PRIVATE_TEST_PROXY)
          ) {
            let { interceptTestApis: e, wrapRequestHandler: t } = n(878);
            e(), (eW = t(eW));
          }
        })(),
          await k();
        let i = void 0 !== self.__BUILD_MANIFEST,
          s =
            'string' == typeof self.__PRERENDER_MANIFEST
              ? JSON.parse(self.__PRERENDER_MANIFEST)
              : void 0;
        e.request.url = e.request.url.replace(/\.rsc($|\?)/, '$1');
        let a = new en(e.request.url, {
          headers: e.request.headers,
          nextConfig: e.request.nextConfig,
        });
        for (let e of [...a.searchParams.keys()]) {
          let t = a.searchParams.getAll(e);
          if (e !== eg && e.startsWith(eg)) {
            let n = e.substring(eg.length);
            for (let e of (a.searchParams.delete(n), t))
              a.searchParams.append(n, e);
            a.searchParams.delete(e);
          }
        }
        let o = a.buildId;
        a.buildId = '';
        let l = e.request.headers['x-nextjs-data'];
        l && '/index' === a.pathname && (a.pathname = '/');
        let u = (function (e) {
            let t = new Headers();
            for (let [n, r] of Object.entries(e))
              for (let e of Array.isArray(r) ? r : [r])
                void 0 !== e &&
                  ('number' == typeof e && (e = e.toString()), t.append(n, e));
            return t;
          })(e.request.headers),
          c = new Map();
        if (!i)
          for (let e of ed) {
            let t = e.toString().toLowerCase();
            u.get(t) && (c.set(t, u.get(t)), u.delete(t));
          }
        let d = new ez({
          page: e.page,
          input: (function (e, t) {
            let n = 'string' == typeof e,
              r = n ? new URL(e) : e;
            for (let e of eh) r.searchParams.delete(e);
            if (t) for (let e of ef) r.searchParams.delete(e);
            return n ? r.toString() : r;
          })(a, !0).toString(),
          init: {
            body: e.request.body,
            geo: e.request.geo,
            headers: u,
            ip: e.request.ip,
            method: e.request.method,
            nextConfig: e.request.nextConfig,
            signal: e.request.signal,
          },
        });
        l &&
          Object.defineProperty(d, '__isData', { enumerable: !1, value: !0 }),
          !globalThis.__incrementalCache &&
            e.IncrementalCache &&
            (globalThis.__incrementalCache = new e.IncrementalCache({
              appDir: !0,
              fetchCache: !0,
              minimalMode: !0,
              fetchCacheKeyPrefix: void 0,
              dev: !1,
              requestHeaders: e.request.headers,
              requestProtocol: 'https',
              getPrerenderManifest: () => ({
                version: -1,
                routes: {},
                dynamicRoutes: {},
                notFoundRoutes: [],
                preview: { previewModeId: 'development-id' },
              }),
            }));
        let p = new G({ request: d, page: e.page });
        if (
          (t = await eW(d, () =>
            '/middleware' === e.page || '/src/middleware' === e.page
              ? eC.wrap(
                  eP,
                  {
                    req: d,
                    renderOpts: {
                      onUpdateCookies: (e) => {
                        r = e;
                      },
                      previewProps: (null == s ? void 0 : s.preview) || {
                        previewModeId: 'development-id',
                        previewModeEncryptionKey: '',
                        previewModeSigningKey: '',
                      },
                    },
                  },
                  () => e.handler(d, p)
                )
              : e.handler(d, p)
          )) &&
          !(t instanceof Response)
        )
          throw TypeError('Expected an instance of Response to be returned');
        t && r && t.headers.set('set-cookie', r);
        let h = null == t ? void 0 : t.headers.get('x-middleware-rewrite');
        if (t && h) {
          let n = new en(h, {
            forceLocale: !0,
            headers: e.request.headers,
            nextConfig: e.request.nextConfig,
          });
          n.host === d.nextUrl.host &&
            ((n.buildId = o || n.buildId),
            t.headers.set('x-middleware-rewrite', String(n)));
          let r = ec(String(n), String(a));
          l && t.headers.set('x-nextjs-rewrite', r);
        }
        let f = null == t ? void 0 : t.headers.get('Location');
        if (t && f && !i) {
          let n = new en(f, {
            forceLocale: !1,
            headers: e.request.headers,
            nextConfig: e.request.nextConfig,
          });
          (t = new Response(t.body, t)),
            n.host === d.nextUrl.host &&
              ((n.buildId = o || n.buildId),
              t.headers.set('Location', String(n))),
            l &&
              (t.headers.delete('Location'),
              t.headers.set('x-nextjs-redirect', ec(String(n), String(a))));
        }
        let m = t || eu.next(),
          g = m.headers.get('x-middleware-override-headers'),
          y = [];
        if (g) {
          for (let [e, t] of c)
            m.headers.set(`x-middleware-request-${e}`, t), y.push(e);
          y.length > 0 &&
            m.headers.set(
              'x-middleware-override-headers',
              g + ',' + y.join(',')
            );
        }
        return {
          response: m,
          waitUntil: Promise.all(p[Q]),
          fetchMetrics: d.fetchMetrics,
        };
      }
      var e1 = n(87),
        e2 = n.n(e1);
      let e4 = 0,
        e3 = 'x-vercel-cache-tags',
        e9 = 'x-vercel-sc-headers',
        e7 = 'x-vercel-revalidate',
        e6 = 'x-vercel-cache-item-name';
      class e8 {
        static isAvailable(e) {
          return !!(
            e._requestHeaders['x-vercel-sc-host'] ||
            process.env.SUSPENSE_CACHE_URL
          );
        }
        constructor(e) {
          if (
            ((this.debug = !!process.env.NEXT_PRIVATE_DEBUG_CACHE),
            (this.headers = {}),
            (this.headers['Content-Type'] = 'application/json'),
            e9 in e._requestHeaders)
          ) {
            let t = JSON.parse(e._requestHeaders[e9]);
            for (let e in t) this.headers[e] = t[e];
            delete e._requestHeaders[e9];
          }
          let t =
              e._requestHeaders['x-vercel-sc-host'] ||
              process.env.SUSPENSE_CACHE_URL,
            n =
              e._requestHeaders['x-vercel-sc-basepath'] ||
              process.env.SUSPENSE_CACHE_BASEPATH;
          process.env.SUSPENSE_CACHE_AUTH_TOKEN &&
            (this.headers.Authorization = `Bearer ${process.env.SUSPENSE_CACHE_AUTH_TOKEN}`),
            t
              ? ((this.cacheEndpoint = `https://${t}${n || ''}`),
                this.debug &&
                  console.log('using cache endpoint', this.cacheEndpoint))
              : this.debug && console.log('no cache endpoint available'),
            e.maxMemoryCacheSize
              ? i ||
                (this.debug &&
                  console.log('using memory store for fetch cache'),
                (i = new (e2())({
                  max: e.maxMemoryCacheSize,
                  length({ value: e }) {
                    var t;
                    if (!e) return 25;
                    if ('REDIRECT' === e.kind)
                      return JSON.stringify(e.props).length;
                    if ('IMAGE' === e.kind)
                      throw Error(
                        'invariant image should not be incremental-cache'
                      );
                    return 'FETCH' === e.kind
                      ? JSON.stringify(e.data || '').length
                      : 'ROUTE' === e.kind
                      ? e.body.length
                      : e.html.length +
                        ((null == (t = JSON.stringify(e.pageData))
                          ? void 0
                          : t.length) || 0);
                  },
                })))
              : this.debug &&
                console.log('not using memory store for fetch cache');
        }
        async revalidateTag(e) {
          if (
            (this.debug && console.log('revalidateTag', e), Date.now() < e4)
          ) {
            this.debug && console.log('rate limited ', e4);
            return;
          }
          try {
            let t = await fetch(
              `${this.cacheEndpoint}/v1/suspense-cache/revalidate?tags=${e}`,
              { method: 'POST', headers: this.headers, next: { internal: !0 } }
            );
            if (429 === t.status) {
              let e = t.headers.get('retry-after') || '60000';
              e4 = Date.now() + parseInt(e);
            }
            if (!t.ok) throw Error(`Request failed with status ${t.status}.`);
          } catch (t) {
            console.warn(`Failed to revalidate tag ${e}`, t);
          }
        }
        async get(...e) {
          let [t, n = {}] = e,
            { tags: r, softTags: s, kindHint: a, fetchIdx: o, fetchUrl: l } = n;
          if ('fetch' !== a) return null;
          if (Date.now() < e4)
            return this.debug && console.log('rate limited'), null;
          let u = null == i ? void 0 : i.get(t);
          if (
            (Date.now() - ((null == u ? void 0 : u.lastModified) || 0) > 2e3 &&
              (u = void 0),
            !u && this.cacheEndpoint)
          )
            try {
              let e = Date.now(),
                n = await fetch(
                  `${this.cacheEndpoint}/v1/suspense-cache/${t}`,
                  {
                    method: 'GET',
                    headers: {
                      ...this.headers,
                      [e6]: l,
                      [e3]: (null == r ? void 0 : r.join(',')) || '',
                      'x-next-cache-soft-tags':
                        (null == s ? void 0 : s.join(',')) || '',
                    },
                    next: {
                      internal: !0,
                      fetchType: 'cache-get',
                      fetchUrl: l,
                      fetchIdx: o,
                    },
                  }
                );
              if (429 === n.status) {
                let e = n.headers.get('retry-after') || '60000';
                e4 = Date.now() + parseInt(e);
              }
              if (404 === n.status)
                return (
                  this.debug &&
                    console.log(
                      `no fetch cache entry for ${t}, duration: ${
                        Date.now() - e
                      }ms`
                    ),
                  null
                );
              if (!n.ok)
                throw (
                  (console.error(await n.text()),
                  Error(`invalid response from cache ${n.status}`))
                );
              let a = await n.json();
              if (!a || 'FETCH' !== a.kind)
                throw (
                  (this.debug && console.log({ cached: a }),
                  Error('invalid cache value'))
                );
              let c = n.headers.get('x-vercel-cache-state'),
                d = n.headers.get('age');
              (u = {
                value: a,
                lastModified:
                  'fresh' !== c
                    ? Date.now() - 31536e3
                    : Date.now() - 1e3 * parseInt(d || '0', 10),
              }),
                this.debug &&
                  console.log(
                    `got fetch cache entry for ${t}, duration: ${
                      Date.now() - e
                    }ms, size: ${
                      Object.keys(a).length
                    }, cache-state: ${c} tags: ${
                      null == r ? void 0 : r.join(',')
                    } softTags: ${null == s ? void 0 : s.join(',')}`
                  ),
                u && (null == i || i.set(t, u));
            } catch (e) {
              this.debug && console.error('Failed to get from fetch-cache', e);
            }
          return u || null;
        }
        async set(...e) {
          let [t, n, r] = e,
            { fetchCache: s, fetchIdx: a, fetchUrl: o, tags: l } = r;
          if (s) {
            if (Date.now() < e4) {
              this.debug && console.log('rate limited');
              return;
            }
            if (
              (null == i || i.set(t, { value: n, lastModified: Date.now() }),
              this.cacheEndpoint)
            )
              try {
                let e = Date.now();
                null !== n &&
                  'revalidate' in n &&
                  (this.headers[e7] = n.revalidate.toString()),
                  !this.headers[e7] &&
                    null !== n &&
                    'data' in n &&
                    (this.headers['x-vercel-cache-control'] =
                      n.data.headers['cache-control']);
                let r = JSON.stringify({ ...n, tags: void 0 });
                this.debug && console.log('set cache', t);
                let i = await fetch(
                  `${this.cacheEndpoint}/v1/suspense-cache/${t}`,
                  {
                    method: 'POST',
                    headers: {
                      ...this.headers,
                      [e6]: o || '',
                      [e3]: (null == l ? void 0 : l.join(',')) || '',
                    },
                    body: r,
                    next: {
                      internal: !0,
                      fetchType: 'cache-set',
                      fetchUrl: o,
                      fetchIdx: a,
                    },
                  }
                );
                if (429 === i.status) {
                  let e = i.headers.get('retry-after') || '60000';
                  e4 = Date.now() + parseInt(e);
                }
                if (!i.ok)
                  throw (
                    (this.debug && console.log(await i.text()),
                    Error(`invalid response ${i.status}`))
                  );
                this.debug &&
                  console.log(
                    `successfully set to fetch-cache for ${t}, duration: ${
                      Date.now() - e
                    }ms, size: ${r.length}`
                  );
              } catch (e) {
                this.debug && console.error('Failed to update fetch cache', e);
              }
          }
        }
      }
      var e5 = n(523),
        te = n.n(e5);
      class tt {
        constructor(e) {
          (this.fs = e.fs),
            (this.flushToDisk = e.flushToDisk),
            (this.serverDistDir = e.serverDistDir),
            (this.appDir = !!e._appDir),
            (this.pagesDir = !!e._pagesDir),
            (this.revalidatedTags = e.revalidatedTags),
            (this.experimental = e.experimental),
            (this.debug = !!process.env.NEXT_PRIVATE_DEBUG_CACHE),
            e.maxMemoryCacheSize && !s
              ? (this.debug &&
                  console.log('using memory store for fetch cache'),
                (s = new (e2())({
                  max: e.maxMemoryCacheSize,
                  length({ value: e }) {
                    var t;
                    if (!e) return 25;
                    if ('REDIRECT' === e.kind)
                      return JSON.stringify(e.props).length;
                    if ('IMAGE' === e.kind)
                      throw Error(
                        'invariant image should not be incremental-cache'
                      );
                    return 'FETCH' === e.kind
                      ? JSON.stringify(e.data || '').length
                      : 'ROUTE' === e.kind
                      ? e.body.length
                      : e.html.length +
                        ((null == (t = JSON.stringify(e.pageData))
                          ? void 0
                          : t.length) || 0);
                  },
                })))
              : this.debug &&
                console.log('not using memory store for fetch cache'),
            this.serverDistDir &&
              this.fs &&
              ((this.tagsManifestPath = te().join(
                this.serverDistDir,
                '..',
                'cache',
                'fetch-cache',
                'tags-manifest.json'
              )),
              this.loadTagsManifest());
        }
        loadTagsManifest() {
          if (this.tagsManifestPath && this.fs && !a) {
            try {
              a = JSON.parse(
                this.fs.readFileSync(this.tagsManifestPath, 'utf8')
              );
            } catch (e) {
              a = { version: 1, items: {} };
            }
            this.debug && console.log('loadTagsManifest', a);
          }
        }
        async revalidateTag(e) {
          if (
            (this.debug && console.log('revalidateTag', e),
            this.loadTagsManifest(),
            !a || !this.tagsManifestPath)
          )
            return;
          let t = a.items[e] || {};
          (t.revalidatedAt = Date.now()), (a.items[e] = t);
          try {
            await this.fs.mkdir(te().dirname(this.tagsManifestPath)),
              await this.fs.writeFile(
                this.tagsManifestPath,
                JSON.stringify(a || {})
              ),
              this.debug && console.log('Updated tags manifest', a);
          } catch (e) {
            console.warn('Failed to update tags manifest.', e);
          }
        }
        async get(...e) {
          var t, n, r;
          let [i, o = {}] = e,
            { tags: l, softTags: u, kindHint: c } = o,
            d = null == s ? void 0 : s.get(i);
          if (
            (this.debug && console.log('get', i, l, c, !!d),
            (null == d ? void 0 : null == (t = d.value) ? void 0 : t.kind) ===
              'PAGE')
          ) {
            let e;
            let t =
              null == (r = d.value.headers) ? void 0 : r['x-next-cache-tags'];
            'string' == typeof t && (e = t.split(',')),
              (null == e ? void 0 : e.length) &&
                (this.loadTagsManifest(),
                e.some((e) => {
                  var t;
                  return (
                    (null == a
                      ? void 0
                      : null == (t = a.items[e])
                      ? void 0
                      : t.revalidatedAt) &&
                    (null == a ? void 0 : a.items[e].revalidatedAt) >=
                      ((null == d ? void 0 : d.lastModified) || Date.now())
                  );
                }) && (d = void 0));
          }
          return (
            d &&
              (null == d ? void 0 : null == (n = d.value) ? void 0 : n.kind) ===
                'FETCH' &&
              (this.loadTagsManifest(),
              [...(l || []), ...(u || [])].some((e) => {
                var t;
                return (
                  !!this.revalidatedTags.includes(e) ||
                  ((null == a
                    ? void 0
                    : null == (t = a.items[e])
                    ? void 0
                    : t.revalidatedAt) &&
                    (null == a ? void 0 : a.items[e].revalidatedAt) >=
                      ((null == d ? void 0 : d.lastModified) || Date.now()))
                );
              }) && (d = void 0)),
            d ?? null
          );
        }
        async set(...e) {
          let [t, n, r] = e;
          if (
            (null == s || s.set(t, { value: n, lastModified: Date.now() }),
            this.debug && console.log('set', t),
            this.flushToDisk)
          ) {
            if ((null == n ? void 0 : n.kind) === 'ROUTE') {
              let e = this.getFilePath(`${t}.body`, 'app');
              await this.fs.mkdir(te().dirname(e)),
                await this.fs.writeFile(e, n.body);
              let r = {
                headers: n.headers,
                status: n.status,
                postponed: void 0,
              };
              await this.fs.writeFile(
                e.replace(/\.body$/, ev),
                JSON.stringify(r, null, 2)
              );
              return;
            }
            if ((null == n ? void 0 : n.kind) === 'PAGE') {
              let e = 'string' == typeof n.pageData,
                r = this.getFilePath(`${t}.html`, e ? 'app' : 'pages');
              if (
                (await this.fs.mkdir(te().dirname(r)),
                await this.fs.writeFile(r, n.html),
                await this.fs.writeFile(
                  this.getFilePath(
                    `${t}${
                      e
                        ? this.experimental.ppr
                          ? '.prefetch.rsc'
                          : '.rsc'
                        : '.json'
                    }`,
                    e ? 'app' : 'pages'
                  ),
                  e ? n.pageData : JSON.stringify(n.pageData)
                ),
                n.headers || n.status)
              ) {
                let e = {
                  headers: n.headers,
                  status: n.status,
                  postponed: n.postponed,
                };
                await this.fs.writeFile(
                  r.replace(/\.html$/, ev),
                  JSON.stringify(e)
                );
              }
            } else if ((null == n ? void 0 : n.kind) === 'FETCH') {
              let e = this.getFilePath(t, 'fetch');
              await this.fs.mkdir(te().dirname(e)),
                await this.fs.writeFile(
                  e,
                  JSON.stringify({ ...n, tags: r.tags })
                );
            }
          }
        }
        detectFileKind(e) {
          if (!this.appDir && !this.pagesDir)
            throw Error(
              "Invariant: Can't determine file path kind, no page directory enabled"
            );
          if (!this.appDir && this.pagesDir) return 'pages';
          if (this.appDir && !this.pagesDir) return 'app';
          let t = this.getFilePath(e, 'pages');
          if (this.fs.existsSync(t)) return 'pages';
          if (((t = this.getFilePath(e, 'app')), this.fs.existsSync(t)))
            return 'app';
          throw Error(`Invariant: Unable to determine file path kind for ${e}`);
        }
        getFilePath(e, t) {
          switch (t) {
            case 'fetch':
              return te().join(
                this.serverDistDir,
                '..',
                'cache',
                'fetch-cache',
                e
              );
            case 'pages':
              return te().join(this.serverDistDir, 'pages', e);
            case 'app':
              return te().join(this.serverDistDir, 'app', e);
            default:
              throw Error("Invariant: Can't determine file path kind");
          }
        }
      }
      let tn = ['(..)(..)', '(.)', '(..)', '(...)'],
        tr = /\/\[[^/]+?\](?=\/|$)/;
      function ti(e) {
        var t;
        return /^\/index(\/|$)/.test(e) &&
          (void 0 !==
            (t = e).split('/').find((e) => tn.find((t) => e.startsWith(t))) &&
            (t = (function (e) {
              let t, n, r;
              for (let i of e.split('/'))
                if ((n = tn.find((e) => i.startsWith(e)))) {
                  [t, r] = e.split(n, 2);
                  break;
                }
              if (!t || !n || !r)
                throw Error(
                  `Invalid interception route: ${e}. Must be in the format /<intercepting route>/(..|...|..)(..)/<intercepted route>`
                );
              switch (
                ((t = em(
                  t
                    .split('/')
                    .reduce(
                      (e, t, n, r) =>
                        t
                          ? ('(' === t[0] && t.endsWith(')')) ||
                            '@' === t[0] ||
                            (('page' === t || 'route' === t) &&
                              n === r.length - 1)
                            ? e
                            : e + '/' + t
                          : e,
                      ''
                    )
                )),
                n)
              ) {
                case '(.)':
                  r = '/' === t ? `/${r}` : t + '/' + r;
                  break;
                case '(..)':
                  if ('/' === t)
                    throw Error(
                      `Invalid interception route: ${e}. Cannot use (..) marker at the root level, use (.) instead.`
                    );
                  r = t.split('/').slice(0, -1).concat(r).join('/');
                  break;
                case '(...)':
                  r = '/' + r;
                  break;
                case '(..)(..)':
                  let i = t.split('/');
                  if (i.length <= 2)
                    throw Error(
                      `Invalid interception route: ${e}. Cannot use (..)(..) marker at the root level or one level up.`
                    );
                  r = i.slice(0, -2).concat(r).join('/');
                  break;
                default:
                  throw Error('Invariant: unexpected marker');
              }
              return { interceptingRoute: t, interceptedRoute: r };
            })(t).interceptedRoute),
          !tr.test(t))
          ? '/index' + e
          : '/' === e
          ? '/index'
          : em(e);
      }
      function ts(e) {
        return e.replace(/\/$/, '').replace(/\/index$/, '') || '/';
      }
      'undefined' != typeof performance &&
        ['mark', 'measure', 'getEntriesByName'].every(
          (e) => 'function' == typeof performance[e]
        );
      class ta {
        constructor({
          fs: e,
          dev: t,
          appDir: n,
          pagesDir: r,
          flushToDisk: i,
          fetchCache: s,
          minimalMode: a,
          serverDistDir: o,
          requestHeaders: l,
          requestProtocol: u,
          maxMemoryCacheSize: c,
          getPrerenderManifest: d,
          fetchCacheKeyPrefix: p,
          CurCacheHandler: h,
          allowedRevalidateHeaderKeys: f,
          experimental: m,
        }) {
          var g, y, v, T;
          (this.locks = new Map()), (this.unlocks = new Map());
          let b = !!process.env.NEXT_PRIVATE_DEBUG_CACHE;
          h
            ? b && console.log('using custom cache handler', h.name)
            : (e &&
                o &&
                (b && console.log('using filesystem cache handler'), (h = tt)),
              e8.isAvailable({ _requestHeaders: l }) &&
                a &&
                s &&
                (b && console.log('using fetch cache handler'), (h = e8))),
            process.env.__NEXT_TEST_MAX_ISR_CACHE &&
              (c = parseInt(process.env.__NEXT_TEST_MAX_ISR_CACHE, 10)),
            (this.dev = t),
            (this.minimalMode = a),
            (this.requestHeaders = l),
            (this.requestProtocol = u),
            (this.allowedRevalidateHeaderKeys = f),
            (this.prerenderManifest = d()),
            (this.fetchCacheKeyPrefix = p);
          let E = [];
          l[ey] ===
            (null == (y = this.prerenderManifest)
              ? void 0
              : null == (g = y.preview)
              ? void 0
              : g.previewModeId) && (this.isOnDemandRevalidate = !0),
            a &&
              'string' == typeof l[eT] &&
              l['x-next-revalidate-tag-token'] ===
                (null == (T = this.prerenderManifest)
                  ? void 0
                  : null == (v = T.preview)
                  ? void 0
                  : v.previewModeId) &&
              (E = l[eT].split(',')),
            h &&
              (this.cacheHandler = new h({
                dev: t,
                fs: e,
                flushToDisk: i,
                serverDistDir: o,
                revalidatedTags: E,
                maxMemoryCacheSize: c,
                _pagesDir: !!r,
                _appDir: !!n,
                _requestHeaders: l,
                fetchCacheKeyPrefix: p,
                experimental: m,
              }));
        }
        calculateRevalidate(e, t, n) {
          if (n) return new Date().getTime() - 1e3;
          let { initialRevalidateSeconds: r } = this.prerenderManifest.routes[
            ts(e)
          ] || { initialRevalidateSeconds: 1 };
          return 'number' == typeof r ? 1e3 * r + t : r;
        }
        _getPathname(e, t) {
          return t ? e : ti(e);
        }
        async unlock(e) {
          let t = this.unlocks.get(e);
          t && (t(), this.locks.delete(e), this.unlocks.delete(e));
        }
        async lock(e) {
          process.env.__NEXT_INCREMENTAL_CACHE_IPC_PORT &&
            process.env.__NEXT_INCREMENTAL_CACHE_IPC_KEY;
          let t = () => Promise.resolve(),
            n = this.locks.get(e);
          if (n) await n;
          else {
            let n = new Promise((e) => {
              t = async () => {
                e();
              };
            });
            this.locks.set(e, n), this.unlocks.set(e, t);
          }
          return t;
        }
        async revalidateTag(e) {
          var t, n;
          return (
            process.env.__NEXT_INCREMENTAL_CACHE_IPC_PORT &&
              process.env.__NEXT_INCREMENTAL_CACHE_IPC_KEY,
            null == (n = this.cacheHandler)
              ? void 0
              : null == (t = n.revalidateTag)
              ? void 0
              : t.call(n, e)
          );
        }
        async fetchCacheKey(e, t = {}) {
          let n;
          let r = [],
            i = new TextEncoder(),
            s = new TextDecoder();
          if (t.body) {
            if ('function' == typeof t.body.getReader) {
              let e = t.body,
                n = [];
              try {
                await e.pipeTo(
                  new WritableStream({
                    write(e) {
                      'string' == typeof e
                        ? (n.push(i.encode(e)), r.push(e))
                        : (n.push(e), r.push(s.decode(e, { stream: !0 })));
                    },
                  })
                ),
                  r.push(s.decode());
                let a = n.reduce((e, t) => e + t.length, 0),
                  o = new Uint8Array(a),
                  l = 0;
                for (let e of n) o.set(e, l), (l += e.length);
                t._ogBody = o;
              } catch (e) {
                console.error('Problem reading body', e);
              }
            } else if ('function' == typeof t.body.keys) {
              let e = t.body;
              for (let n of ((t._ogBody = t.body), new Set([...e.keys()]))) {
                let t = e.getAll(n);
                r.push(
                  `${n}=${(
                    await Promise.all(
                      t.map(async (e) =>
                        'string' == typeof e ? e : await e.text()
                      )
                    )
                  ).join(',')}`
                );
              }
            } else if ('function' == typeof t.body.arrayBuffer) {
              let e = t.body,
                n = await e.arrayBuffer();
              r.push(await e.text()),
                (t._ogBody = new Blob([n], { type: e.type }));
            } else
              'string' == typeof t.body &&
                (r.push(t.body), (t._ogBody = t.body));
          }
          let a = JSON.stringify([
            'v3',
            this.fetchCacheKeyPrefix || '',
            e,
            t.method,
            'function' == typeof (t.headers || {}).keys
              ? Object.fromEntries(t.headers)
              : t.headers,
            t.mode,
            t.redirect,
            t.credentials,
            t.referrer,
            t.referrerPolicy,
            t.integrity,
            t.cache,
            r,
          ]);
          {
            var o;
            let e = i.encode(a);
            (o = await crypto.subtle.digest('SHA-256', e)),
              (n = Array.prototype.map
                .call(new Uint8Array(o), (e) => e.toString(16).padStart(2, '0'))
                .join(''));
          }
          return n;
        }
        async get(e, t = {}) {
          var n, r, i;
          let s, a;
          if (
            (process.env.__NEXT_INCREMENTAL_CACHE_IPC_PORT &&
              process.env.__NEXT_INCREMENTAL_CACHE_IPC_KEY,
            this.dev &&
              ('fetch' !== t.kindHint ||
                'no-cache' === this.requestHeaders['cache-control']))
          )
            return null;
          e = this._getPathname(e, 'fetch' === t.kindHint);
          let o = null,
            l = t.revalidate,
            u = await (null == (n = this.cacheHandler) ? void 0 : n.get(e, t));
          if (
            (null == u ? void 0 : null == (r = u.value) ? void 0 : r.kind) ===
            'FETCH'
          )
            return [...(t.tags || []), ...(t.softTags || [])].some((e) => {
              var t;
              return null == (t = this.revalidatedTags)
                ? void 0
                : t.includes(e);
            })
              ? null
              : ((l = l || u.value.revalidate),
                {
                  isStale: (Date.now() - (u.lastModified || 0)) / 1e3 > l,
                  value: { kind: 'FETCH', data: u.value.data, revalidate: l },
                  revalidateAfter: Date.now() + 1e3 * l,
                });
          let c =
            null == (i = this.prerenderManifest.routes[ts(e)])
              ? void 0
              : i.initialRevalidateSeconds;
          return (
            (null == u ? void 0 : u.lastModified) === -1
              ? ((s = -1), (a = -31536e3))
              : (s =
                  !!(
                    !1 !==
                      (a = this.calculateRevalidate(
                        e,
                        (null == u ? void 0 : u.lastModified) || Date.now(),
                        this.dev && 'fetch' !== t.kindHint
                      )) && a < Date.now()
                  ) || void 0),
            u &&
              (o = {
                isStale: s,
                curRevalidate: c,
                revalidateAfter: a,
                value: u.value,
              }),
            !u &&
              this.prerenderManifest.notFoundRoutes.includes(e) &&
              ((o = {
                isStale: s,
                value: null,
                curRevalidate: c,
                revalidateAfter: a,
              }),
              this.set(e, o.value, t)),
            o
          );
        }
        async set(e, t, n) {
          if (
            (process.env.__NEXT_INCREMENTAL_CACHE_IPC_PORT &&
              process.env.__NEXT_INCREMENTAL_CACHE_IPC_KEY,
            !this.dev || n.fetchCache)
          ) {
            if (n.fetchCache && JSON.stringify(t).length > 2097152) {
              if (this.dev)
                throw Error('fetch for over 2MB of data can not be cached');
              return;
            }
            e = this._getPathname(e, n.fetchCache);
            try {
              var r;
              void 0 === n.revalidate ||
                n.fetchCache ||
                (this.prerenderManifest.routes[e] = {
                  experimentalPPR: void 0,
                  dataRoute: te().posix.join('/_next/data', `${ti(e)}.json`),
                  srcRoute: null,
                  initialRevalidateSeconds: n.revalidate,
                  prefetchDataRoute: void 0,
                }),
                await (null == (r = this.cacheHandler)
                  ? void 0
                  : r.set(e, t, n));
            } catch (t) {
              console.warn('Failed to update prerender cache for', e, t);
            }
          }
        }
      }
      function to(e, t) {
        if (!e) throw Error(t);
      }
      function tl(e) {
        return 'object' == typeof e && null !== e;
      }
      function tu(e, t) {
        if (!e) throw Error(null != t ? t : 'Unexpected invariant triggered.');
      }
      let tc = /\r\n|[\n\r]/g;
      function td(e, t) {
        let n = 0,
          r = 1;
        for (let i of e.body.matchAll(tc)) {
          if (('number' == typeof i.index || tu(!1), i.index >= t)) break;
          (n = i.index + i[0].length), (r += 1);
        }
        return { line: r, column: t + 1 - n };
      }
      function tp(e, t) {
        let n = e.locationOffset.column - 1,
          r = ''.padStart(n) + e.body,
          i = t.line - 1,
          s = e.locationOffset.line - 1,
          a = t.line + s,
          o = 1 === t.line ? n : 0,
          l = t.column + o,
          u = `${e.name}:${a}:${l}
`,
          c = r.split(/\r\n|[\n\r]/g),
          d = c[i];
        if (d.length > 120) {
          let e = Math.floor(l / 80),
            t = [];
          for (let e = 0; e < d.length; e += 80) t.push(d.slice(e, e + 80));
          return (
            u +
            th([
              [`${a} |`, t[0]],
              ...t.slice(1, e + 1).map((e) => ['|', e]),
              ['|', '^'.padStart(l % 80)],
              ['|', t[e + 1]],
            ])
          );
        }
        return (
          u +
          th([
            [`${a - 1} |`, c[i - 1]],
            [`${a} |`, d],
            ['|', '^'.padStart(l)],
            [`${a + 1} |`, c[i + 1]],
          ])
        );
      }
      function th(e) {
        let t = e.filter(([e, t]) => void 0 !== t),
          n = Math.max(...t.map(([e]) => e.length));
        return t.map(([e, t]) => e.padStart(n) + (t ? ' ' + t : '')).join('\n');
      }
      class tf extends Error {
        constructor(e, ...t) {
          var n, r, i;
          let {
            nodes: s,
            source: a,
            positions: o,
            path: l,
            originalError: u,
            extensions: c,
          } = (function (e) {
            let t = e[0];
            return null == t || 'kind' in t || 'length' in t
              ? {
                  nodes: t,
                  source: e[1],
                  positions: e[2],
                  path: e[3],
                  originalError: e[4],
                  extensions: e[5],
                }
              : t;
          })(t);
          super(e),
            (this.name = 'GraphQLError'),
            (this.path = null != l ? l : void 0),
            (this.originalError = null != u ? u : void 0),
            (this.nodes = tm(Array.isArray(s) ? s : s ? [s] : void 0));
          let d = tm(
            null === (n = this.nodes) || void 0 === n
              ? void 0
              : n.map((e) => e.loc).filter((e) => null != e)
          );
          (this.source =
            null != a
              ? a
              : null == d
              ? void 0
              : null === (r = d[0]) || void 0 === r
              ? void 0
              : r.source),
            (this.positions =
              null != o ? o : null == d ? void 0 : d.map((e) => e.start)),
            (this.locations =
              o && a
                ? o.map((e) => td(a, e))
                : null == d
                ? void 0
                : d.map((e) => td(e.source, e.start)));
          let p = tl(null == u ? void 0 : u.extensions)
            ? null == u
              ? void 0
              : u.extensions
            : void 0;
          (this.extensions =
            null !== (i = null != c ? c : p) && void 0 !== i
              ? i
              : Object.create(null)),
            Object.defineProperties(this, {
              message: { writable: !0, enumerable: !0 },
              name: { enumerable: !1 },
              nodes: { enumerable: !1 },
              source: { enumerable: !1 },
              positions: { enumerable: !1 },
              originalError: { enumerable: !1 },
            }),
            null != u && u.stack
              ? Object.defineProperty(this, 'stack', {
                  value: u.stack,
                  writable: !0,
                  configurable: !0,
                })
              : Error.captureStackTrace
              ? Error.captureStackTrace(this, tf)
              : Object.defineProperty(this, 'stack', {
                  value: Error().stack,
                  writable: !0,
                  configurable: !0,
                });
        }
        get [Symbol.toStringTag]() {
          return 'GraphQLError';
        }
        toString() {
          let e = this.message;
          if (this.nodes) {
            for (let n of this.nodes)
              if (n.loc) {
                var t;
                e += '\n\n' + tp((t = n.loc).source, td(t.source, t.start));
              }
          } else if (this.source && this.locations)
            for (let t of this.locations) e += '\n\n' + tp(this.source, t);
          return e;
        }
        toJSON() {
          let e = { message: this.message };
          return (
            null != this.locations && (e.locations = this.locations),
            null != this.path && (e.path = this.path),
            null != this.extensions &&
              Object.keys(this.extensions).length > 0 &&
              (e.extensions = this.extensions),
            e
          );
        }
      }
      function tm(e) {
        return void 0 === e || 0 === e.length ? void 0 : e;
      }
      function tg(e, t, n) {
        return new tf(`Syntax Error: ${n}`, { source: e, positions: [t] });
      }
      class ty {
        constructor(e, t, n) {
          (this.start = e.start),
            (this.end = t.end),
            (this.startToken = e),
            (this.endToken = t),
            (this.source = n);
        }
        get [Symbol.toStringTag]() {
          return 'Location';
        }
        toJSON() {
          return { start: this.start, end: this.end };
        }
      }
      class tv {
        constructor(e, t, n, r, i, s) {
          (this.kind = e),
            (this.start = t),
            (this.end = n),
            (this.line = r),
            (this.column = i),
            (this.value = s),
            (this.prev = null),
            (this.next = null);
        }
        get [Symbol.toStringTag]() {
          return 'Token';
        }
        toJSON() {
          return {
            kind: this.kind,
            value: this.value,
            line: this.line,
            column: this.column,
          };
        }
      }
      let tT = {
          Name: [],
          Document: ['definitions'],
          OperationDefinition: [
            'description',
            'name',
            'variableDefinitions',
            'directives',
            'selectionSet',
          ],
          VariableDefinition: [
            'description',
            'variable',
            'type',
            'defaultValue',
            'directives',
          ],
          Variable: ['name'],
          SelectionSet: ['selections'],
          Field: ['alias', 'name', 'arguments', 'directives', 'selectionSet'],
          Argument: ['name', 'value'],
          FragmentSpread: ['name', 'directives'],
          InlineFragment: ['typeCondition', 'directives', 'selectionSet'],
          FragmentDefinition: [
            'description',
            'name',
            'variableDefinitions',
            'typeCondition',
            'directives',
            'selectionSet',
          ],
          IntValue: [],
          FloatValue: [],
          StringValue: [],
          BooleanValue: [],
          NullValue: [],
          EnumValue: [],
          ListValue: ['values'],
          ObjectValue: ['fields'],
          ObjectField: ['name', 'value'],
          Directive: ['name', 'arguments'],
          NamedType: ['name'],
          ListType: ['type'],
          NonNullType: ['type'],
          SchemaDefinition: ['description', 'directives', 'operationTypes'],
          OperationTypeDefinition: ['type'],
          ScalarTypeDefinition: ['description', 'name', 'directives'],
          ObjectTypeDefinition: [
            'description',
            'name',
            'interfaces',
            'directives',
            'fields',
          ],
          FieldDefinition: [
            'description',
            'name',
            'arguments',
            'type',
            'directives',
          ],
          InputValueDefinition: [
            'description',
            'name',
            'type',
            'defaultValue',
            'directives',
          ],
          InterfaceTypeDefinition: [
            'description',
            'name',
            'interfaces',
            'directives',
            'fields',
          ],
          UnionTypeDefinition: ['description', 'name', 'directives', 'types'],
          EnumTypeDefinition: ['description', 'name', 'directives', 'values'],
          EnumValueDefinition: ['description', 'name', 'directives'],
          InputObjectTypeDefinition: [
            'description',
            'name',
            'directives',
            'fields',
          ],
          DirectiveDefinition: [
            'description',
            'name',
            'arguments',
            'locations',
          ],
          SchemaExtension: ['directives', 'operationTypes'],
          ScalarTypeExtension: ['name', 'directives'],
          ObjectTypeExtension: ['name', 'interfaces', 'directives', 'fields'],
          InterfaceTypeExtension: [
            'name',
            'interfaces',
            'directives',
            'fields',
          ],
          UnionTypeExtension: ['name', 'directives', 'types'],
          EnumTypeExtension: ['name', 'directives', 'values'],
          InputObjectTypeExtension: ['name', 'directives', 'fields'],
          TypeCoordinate: ['name'],
          MemberCoordinate: ['name', 'memberName'],
          ArgumentCoordinate: ['name', 'fieldName', 'argumentName'],
          DirectiveCoordinate: ['name'],
          DirectiveArgumentCoordinate: ['name', 'argumentName'],
        },
        tb = new Set(Object.keys(tT));
      function tE(e) {
        let t = null == e ? void 0 : e.kind;
        return 'string' == typeof t && tb.has(t);
      }
      function tN(e) {
        return 9 === e || 32 === e;
      }
      function t_(e) {
        return e >= 48 && e <= 57;
      }
      function tS(e) {
        return (e >= 97 && e <= 122) || (e >= 65 && e <= 90);
      }
      function tI(e) {
        return tS(e) || 95 === e;
      }
      function tO(e) {
        return tS(e) || t_(e) || 95 === e;
      }
      !(function (e) {
        (e.QUERY = 'query'),
          (e.MUTATION = 'mutation'),
          (e.SUBSCRIPTION = 'subscription');
      })(I || (I = {})),
        (function (e) {
          (e.QUERY = 'QUERY'),
            (e.MUTATION = 'MUTATION'),
            (e.SUBSCRIPTION = 'SUBSCRIPTION'),
            (e.FIELD = 'FIELD'),
            (e.FRAGMENT_DEFINITION = 'FRAGMENT_DEFINITION'),
            (e.FRAGMENT_SPREAD = 'FRAGMENT_SPREAD'),
            (e.INLINE_FRAGMENT = 'INLINE_FRAGMENT'),
            (e.VARIABLE_DEFINITION = 'VARIABLE_DEFINITION'),
            (e.SCHEMA = 'SCHEMA'),
            (e.SCALAR = 'SCALAR'),
            (e.OBJECT = 'OBJECT'),
            (e.FIELD_DEFINITION = 'FIELD_DEFINITION'),
            (e.ARGUMENT_DEFINITION = 'ARGUMENT_DEFINITION'),
            (e.INTERFACE = 'INTERFACE'),
            (e.UNION = 'UNION'),
            (e.ENUM = 'ENUM'),
            (e.ENUM_VALUE = 'ENUM_VALUE'),
            (e.INPUT_OBJECT = 'INPUT_OBJECT'),
            (e.INPUT_FIELD_DEFINITION = 'INPUT_FIELD_DEFINITION');
        })(O || (O = {})),
        (function (e) {
          (e.NAME = 'Name'),
            (e.DOCUMENT = 'Document'),
            (e.OPERATION_DEFINITION = 'OperationDefinition'),
            (e.VARIABLE_DEFINITION = 'VariableDefinition'),
            (e.SELECTION_SET = 'SelectionSet'),
            (e.FIELD = 'Field'),
            (e.ARGUMENT = 'Argument'),
            (e.FRAGMENT_SPREAD = 'FragmentSpread'),
            (e.INLINE_FRAGMENT = 'InlineFragment'),
            (e.FRAGMENT_DEFINITION = 'FragmentDefinition'),
            (e.VARIABLE = 'Variable'),
            (e.INT = 'IntValue'),
            (e.FLOAT = 'FloatValue'),
            (e.STRING = 'StringValue'),
            (e.BOOLEAN = 'BooleanValue'),
            (e.NULL = 'NullValue'),
            (e.ENUM = 'EnumValue'),
            (e.LIST = 'ListValue'),
            (e.OBJECT = 'ObjectValue'),
            (e.OBJECT_FIELD = 'ObjectField'),
            (e.DIRECTIVE = 'Directive'),
            (e.NAMED_TYPE = 'NamedType'),
            (e.LIST_TYPE = 'ListType'),
            (e.NON_NULL_TYPE = 'NonNullType'),
            (e.SCHEMA_DEFINITION = 'SchemaDefinition'),
            (e.OPERATION_TYPE_DEFINITION = 'OperationTypeDefinition'),
            (e.SCALAR_TYPE_DEFINITION = 'ScalarTypeDefinition'),
            (e.OBJECT_TYPE_DEFINITION = 'ObjectTypeDefinition'),
            (e.FIELD_DEFINITION = 'FieldDefinition'),
            (e.INPUT_VALUE_DEFINITION = 'InputValueDefinition'),
            (e.INTERFACE_TYPE_DEFINITION = 'InterfaceTypeDefinition'),
            (e.UNION_TYPE_DEFINITION = 'UnionTypeDefinition'),
            (e.ENUM_TYPE_DEFINITION = 'EnumTypeDefinition'),
            (e.ENUM_VALUE_DEFINITION = 'EnumValueDefinition'),
            (e.INPUT_OBJECT_TYPE_DEFINITION = 'InputObjectTypeDefinition'),
            (e.DIRECTIVE_DEFINITION = 'DirectiveDefinition'),
            (e.SCHEMA_EXTENSION = 'SchemaExtension'),
            (e.SCALAR_TYPE_EXTENSION = 'ScalarTypeExtension'),
            (e.OBJECT_TYPE_EXTENSION = 'ObjectTypeExtension'),
            (e.INTERFACE_TYPE_EXTENSION = 'InterfaceTypeExtension'),
            (e.UNION_TYPE_EXTENSION = 'UnionTypeExtension'),
            (e.ENUM_TYPE_EXTENSION = 'EnumTypeExtension'),
            (e.INPUT_OBJECT_TYPE_EXTENSION = 'InputObjectTypeExtension'),
            (e.TYPE_COORDINATE = 'TypeCoordinate'),
            (e.MEMBER_COORDINATE = 'MemberCoordinate'),
            (e.ARGUMENT_COORDINATE = 'ArgumentCoordinate'),
            (e.DIRECTIVE_COORDINATE = 'DirectiveCoordinate'),
            (e.DIRECTIVE_ARGUMENT_COORDINATE = 'DirectiveArgumentCoordinate');
        })(w || (w = {})),
        (function (e) {
          (e.SOF = '<SOF>'),
            (e.EOF = '<EOF>'),
            (e.BANG = '!'),
            (e.DOLLAR = '$'),
            (e.AMP = '&'),
            (e.PAREN_L = '('),
            (e.PAREN_R = ')'),
            (e.DOT = '.'),
            (e.SPREAD = '...'),
            (e.COLON = ':'),
            (e.EQUALS = '='),
            (e.AT = '@'),
            (e.BRACKET_L = '['),
            (e.BRACKET_R = ']'),
            (e.BRACE_L = '{'),
            (e.PIPE = '|'),
            (e.BRACE_R = '}'),
            (e.NAME = 'Name'),
            (e.INT = 'Int'),
            (e.FLOAT = 'Float'),
            (e.STRING = 'String'),
            (e.BLOCK_STRING = 'BlockString'),
            (e.COMMENT = 'Comment');
        })(A || (A = {}));
      class tw {
        constructor(e) {
          let t = new tv(A.SOF, 0, 0, 0, 0);
          (this.source = e),
            (this.lastToken = t),
            (this.token = t),
            (this.line = 1),
            (this.lineStart = 0);
        }
        get [Symbol.toStringTag]() {
          return 'Lexer';
        }
        advance() {
          return (this.lastToken = this.token), (this.token = this.lookahead());
        }
        lookahead() {
          let e = this.token;
          if (e.kind !== A.EOF)
            do
              if (e.next) e = e.next;
              else {
                let t = (function (e, t) {
                  let n = e.source.body,
                    r = n.length,
                    i = t;
                  for (; i < r; ) {
                    let t = n.charCodeAt(i);
                    switch (t) {
                      case 65279:
                      case 9:
                      case 32:
                      case 44:
                        ++i;
                        continue;
                      case 10:
                        ++i, ++e.line, (e.lineStart = i);
                        continue;
                      case 13:
                        10 === n.charCodeAt(i + 1) ? (i += 2) : ++i,
                          ++e.line,
                          (e.lineStart = i);
                        continue;
                      case 35:
                        return (function (e, t) {
                          let n = e.source.body,
                            r = n.length,
                            i = t + 1;
                          for (; i < r; ) {
                            let e = n.charCodeAt(i);
                            if (10 === e || 13 === e) break;
                            if (tA(e)) ++i;
                            else if (tx(n, i)) i += 2;
                            else break;
                          }
                          return tL(e, A.COMMENT, t, i, n.slice(t + 1, i));
                        })(e, i);
                      case 33:
                        return tL(e, A.BANG, i, i + 1);
                      case 36:
                        return tL(e, A.DOLLAR, i, i + 1);
                      case 38:
                        return tL(e, A.AMP, i, i + 1);
                      case 40:
                        return tL(e, A.PAREN_L, i, i + 1);
                      case 41:
                        return tL(e, A.PAREN_R, i, i + 1);
                      case 46:
                        if (
                          46 === n.charCodeAt(i + 1) &&
                          46 === n.charCodeAt(i + 2)
                        )
                          return tL(e, A.SPREAD, i, i + 3);
                        break;
                      case 58:
                        return tL(e, A.COLON, i, i + 1);
                      case 61:
                        return tL(e, A.EQUALS, i, i + 1);
                      case 64:
                        return tL(e, A.AT, i, i + 1);
                      case 91:
                        return tL(e, A.BRACKET_L, i, i + 1);
                      case 93:
                        return tL(e, A.BRACKET_R, i, i + 1);
                      case 123:
                        return tL(e, A.BRACE_L, i, i + 1);
                      case 124:
                        return tL(e, A.PIPE, i, i + 1);
                      case 125:
                        return tL(e, A.BRACE_R, i, i + 1);
                      case 34:
                        if (
                          34 === n.charCodeAt(i + 1) &&
                          34 === n.charCodeAt(i + 2)
                        )
                          return (function (e, t) {
                            let n = e.source.body,
                              r = n.length,
                              i = e.lineStart,
                              s = t + 3,
                              a = s,
                              o = '',
                              l = [];
                            for (; s < r; ) {
                              let r = n.charCodeAt(s);
                              if (
                                34 === r &&
                                34 === n.charCodeAt(s + 1) &&
                                34 === n.charCodeAt(s + 2)
                              ) {
                                (o += n.slice(a, s)), l.push(o);
                                let r = tL(
                                  e,
                                  A.BLOCK_STRING,
                                  t,
                                  s + 3,
                                  (function (e) {
                                    var t, n;
                                    let r = Number.MAX_SAFE_INTEGER,
                                      i = null,
                                      s = -1;
                                    for (let t = 0; t < e.length; ++t) {
                                      let a = e[t],
                                        o = (function (e) {
                                          let t = 0;
                                          for (
                                            ;
                                            t < e.length && tN(e.charCodeAt(t));

                                          )
                                            ++t;
                                          return t;
                                        })(a);
                                      o !== a.length &&
                                        ((i =
                                          null !== (n = i) && void 0 !== n
                                            ? n
                                            : t),
                                        (s = t),
                                        0 !== t && o < r && (r = o));
                                    }
                                    return e
                                      .map((e, t) => (0 === t ? e : e.slice(r)))
                                      .slice(
                                        null !== (t = i) && void 0 !== t
                                          ? t
                                          : 0,
                                        s + 1
                                      );
                                  })(l).join('\n')
                                );
                                return (
                                  (e.line += l.length - 1), (e.lineStart = i), r
                                );
                              }
                              if (
                                92 === r &&
                                34 === n.charCodeAt(s + 1) &&
                                34 === n.charCodeAt(s + 2) &&
                                34 === n.charCodeAt(s + 3)
                              ) {
                                (o += n.slice(a, s)), (a = s + 1), (s += 4);
                                continue;
                              }
                              if (10 === r || 13 === r) {
                                (o += n.slice(a, s)),
                                  l.push(o),
                                  13 === r && 10 === n.charCodeAt(s + 1)
                                    ? (s += 2)
                                    : ++s,
                                  (o = ''),
                                  (a = s),
                                  (i = s);
                                continue;
                              }
                              if (tA(r)) ++s;
                              else if (tx(n, s)) s += 2;
                              else
                                throw tg(
                                  e.source,
                                  s,
                                  `Invalid character within String: ${tR(
                                    e,
                                    s
                                  )}.`
                                );
                            }
                            throw tg(e.source, s, 'Unterminated string.');
                          })(e, i);
                        return (function (e, t) {
                          let n = e.source.body,
                            r = n.length,
                            i = t + 1,
                            s = i,
                            a = '';
                          for (; i < r; ) {
                            let r = n.charCodeAt(i);
                            if (34 === r)
                              return (
                                (a += n.slice(s, i)),
                                tL(e, A.STRING, t, i + 1, a)
                              );
                            if (92 === r) {
                              a += n.slice(s, i);
                              let t =
                                117 === n.charCodeAt(i + 1)
                                  ? 123 === n.charCodeAt(i + 2)
                                    ? (function (e, t) {
                                        let n = e.source.body,
                                          r = 0,
                                          i = 3;
                                        for (; i < 12; ) {
                                          let e = n.charCodeAt(t + i++);
                                          if (125 === e) {
                                            if (i < 5 || !tA(r)) break;
                                            return {
                                              value: String.fromCodePoint(r),
                                              size: i,
                                            };
                                          }
                                          if ((r = (r << 4) | t$(e)) < 0) break;
                                        }
                                        throw tg(
                                          e.source,
                                          t,
                                          `Invalid Unicode escape sequence: "${n.slice(
                                            t,
                                            t + i
                                          )}".`
                                        );
                                      })(e, i)
                                    : (function (e, t) {
                                        let n = e.source.body,
                                          r = tk(n, t + 2);
                                        if (tA(r))
                                          return {
                                            value: String.fromCodePoint(r),
                                            size: 6,
                                          };
                                        if (
                                          tC(r) &&
                                          92 === n.charCodeAt(t + 6) &&
                                          117 === n.charCodeAt(t + 7)
                                        ) {
                                          let e = tk(n, t + 8);
                                          if (tD(e))
                                            return {
                                              value: String.fromCodePoint(r, e),
                                              size: 12,
                                            };
                                        }
                                        throw tg(
                                          e.source,
                                          t,
                                          `Invalid Unicode escape sequence: "${n.slice(
                                            t,
                                            t + 6
                                          )}".`
                                        );
                                      })(e, i)
                                  : (function (e, t) {
                                      let n = e.source.body;
                                      switch (n.charCodeAt(t + 1)) {
                                        case 34:
                                          return { value: '"', size: 2 };
                                        case 92:
                                          return { value: '\\', size: 2 };
                                        case 47:
                                          return { value: '/', size: 2 };
                                        case 98:
                                          return { value: '\b', size: 2 };
                                        case 102:
                                          return { value: '\f', size: 2 };
                                        case 110:
                                          return { value: '\n', size: 2 };
                                        case 114:
                                          return { value: '\r', size: 2 };
                                        case 116:
                                          return { value: '	', size: 2 };
                                      }
                                      throw tg(
                                        e.source,
                                        t,
                                        `Invalid character escape sequence: "${n.slice(
                                          t,
                                          t + 2
                                        )}".`
                                      );
                                    })(e, i);
                              (a += t.value), (i += t.size), (s = i);
                              continue;
                            }
                            if (10 === r || 13 === r) break;
                            if (tA(r)) ++i;
                            else if (tx(n, i)) i += 2;
                            else
                              throw tg(
                                e.source,
                                i,
                                `Invalid character within String: ${tR(e, i)}.`
                              );
                          }
                          throw tg(e.source, i, 'Unterminated string.');
                        })(e, i);
                    }
                    if (t_(t) || 45 === t)
                      return (function (e, t, n) {
                        let r = e.source.body,
                          i = t,
                          s = n,
                          a = !1;
                        if ((45 === s && (s = r.charCodeAt(++i)), 48 === s)) {
                          if (t_((s = r.charCodeAt(++i))))
                            throw tg(
                              e.source,
                              i,
                              `Invalid number, unexpected digit after 0: ${tR(
                                e,
                                i
                              )}.`
                            );
                        } else (i = tP(e, i, s)), (s = r.charCodeAt(i));
                        if (
                          (46 === s &&
                            ((a = !0),
                            (s = r.charCodeAt(++i)),
                            (i = tP(e, i, s)),
                            (s = r.charCodeAt(i))),
                          (69 === s || 101 === s) &&
                            ((a = !0),
                            (43 === (s = r.charCodeAt(++i)) || 45 === s) &&
                              (s = r.charCodeAt(++i)),
                            (i = tP(e, i, s)),
                            (s = r.charCodeAt(i))),
                          46 === s || tI(s))
                        )
                          throw tg(
                            e.source,
                            i,
                            `Invalid number, expected digit but got: ${tR(
                              e,
                              i
                            )}.`
                          );
                        return tL(e, a ? A.FLOAT : A.INT, t, i, r.slice(t, i));
                      })(e, i, t);
                    if (tI(t))
                      return (function (e, t) {
                        let n = e.source.body,
                          r = n.length,
                          i = t + 1;
                        for (; i < r; )
                          if (tO(n.charCodeAt(i))) ++i;
                          else break;
                        return tL(e, A.NAME, t, i, n.slice(t, i));
                      })(e, i);
                    throw tg(
                      e.source,
                      i,
                      39 === t
                        ? 'Unexpected single quote character (\'), did you mean to use a double quote (")?'
                        : tA(t) || tx(n, i)
                        ? `Unexpected character: ${tR(e, i)}.`
                        : `Invalid character: ${tR(e, i)}.`
                    );
                  }
                  return tL(e, A.EOF, r, r);
                })(this, e.end);
                (e.next = t), (t.prev = e), (e = t);
              }
            while (e.kind === A.COMMENT);
          return e;
        }
      }
      function tA(e) {
        return (e >= 0 && e <= 55295) || (e >= 57344 && e <= 1114111);
      }
      function tx(e, t) {
        return tC(e.charCodeAt(t)) && tD(e.charCodeAt(t + 1));
      }
      function tC(e) {
        return e >= 55296 && e <= 56319;
      }
      function tD(e) {
        return e >= 56320 && e <= 57343;
      }
      function tR(e, t) {
        let n = e.source.body.codePointAt(t);
        if (void 0 === n) return A.EOF;
        if (n >= 32 && n <= 126) {
          let e = String.fromCodePoint(n);
          return '"' === e ? "'\"'" : `"${e}"`;
        }
        return 'U+' + n.toString(16).toUpperCase().padStart(4, '0');
      }
      function tL(e, t, n, r, i) {
        let s = e.line,
          a = 1 + n - e.lineStart;
        return new tv(t, n, r, s, a, i);
      }
      function tP(e, t, n) {
        if (!t_(n))
          throw tg(
            e.source,
            t,
            `Invalid number, expected digit but got: ${tR(e, t)}.`
          );
        let r = e.source.body,
          i = t + 1;
        for (; t_(r.charCodeAt(i)); ) ++i;
        return i;
      }
      function tk(e, t) {
        return (
          (t$(e.charCodeAt(t)) << 12) |
          (t$(e.charCodeAt(t + 1)) << 8) |
          (t$(e.charCodeAt(t + 2)) << 4) |
          t$(e.charCodeAt(t + 3))
        );
      }
      function t$(e) {
        return e >= 48 && e <= 57
          ? e - 48
          : e >= 65 && e <= 70
          ? e - 55
          : e >= 97 && e <= 102
          ? e - 87
          : -1;
      }
      function tM(e) {
        return (function e(t, n) {
          switch (typeof t) {
            case 'string':
              return JSON.stringify(t);
            case 'function':
              return t.name ? `[function ${t.name}]` : '[function]';
            case 'object':
              return (function (t, n) {
                if (null === t) return 'null';
                if (n.includes(t)) return '[Circular]';
                let r = [...n, t];
                if ('function' == typeof t.toJSON) {
                  let n = t.toJSON();
                  if (n !== t) return 'string' == typeof n ? n : e(n, r);
                } else if (Array.isArray(t))
                  return (function (t, n) {
                    if (0 === t.length) return '[]';
                    if (n.length > 2) return '[Array]';
                    let r = Math.min(10, t.length),
                      i = t.length - r,
                      s = [];
                    for (let i = 0; i < r; ++i) s.push(e(t[i], n));
                    return (
                      1 === i
                        ? s.push('... 1 more item')
                        : i > 1 && s.push(`... ${i} more items`),
                      '[' + s.join(', ') + ']'
                    );
                  })(t, r);
                return (function (t, n) {
                  let r = Object.entries(t);
                  return 0 === r.length
                    ? '{}'
                    : n.length > 2
                    ? '[' +
                      (function (e) {
                        let t = Object.prototype.toString
                          .call(e)
                          .replace(/^\[object /, '')
                          .replace(/]$/, '');
                        if (
                          'Object' === t &&
                          'function' == typeof e.constructor
                        ) {
                          let t = e.constructor.name;
                          if ('string' == typeof t && '' !== t) return t;
                        }
                        return t;
                      })(t) +
                      ']'
                    : '{ ' +
                      r.map(([t, r]) => t + ': ' + e(r, n)).join(', ') +
                      ' }';
                })(t, r);
              })(t, n);
            default:
              return String(t);
          }
        })(e, []);
      }
      let tF = globalThis.process
        ? function (e, t) {
            return e instanceof t;
          }
        : function (e, t) {
            if (e instanceof t) return !0;
            if ('object' == typeof e && null !== e) {
              var n;
              let r = t.prototype[Symbol.toStringTag];
              if (
                r ===
                (Symbol.toStringTag in e
                  ? e[Symbol.toStringTag]
                  : null === (n = e.constructor) || void 0 === n
                  ? void 0
                  : n.name)
              ) {
                let t = tM(e);
                throw Error(`Cannot use ${r} "${t}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`);
              }
            }
            return !1;
          };
      class tj {
        constructor(e, t = 'GraphQL request', n = { line: 1, column: 1 }) {
          'string' == typeof e ||
            to(!1, `Body must be a string. Received: ${tM(e)}.`),
            (this.body = e),
            (this.name = t),
            (this.locationOffset = n),
            this.locationOffset.line > 0 ||
              to(
                !1,
                'line in locationOffset is 1-indexed and must be positive.'
              ),
            this.locationOffset.column > 0 ||
              to(
                !1,
                'column in locationOffset is 1-indexed and must be positive.'
              );
        }
        get [Symbol.toStringTag]() {
          return 'Source';
        }
      }
      function tU(e, t) {
        let n = new tB(e, t),
          r = n.parseDocument();
        return (
          Object.defineProperty(r, 'tokenCount', {
            enumerable: !1,
            value: n.tokenCount,
          }),
          r
        );
      }
      class tB {
        constructor(e, t = {}) {
          let { lexer: n, ...r } = t;
          if (n) this._lexer = n;
          else {
            let t = tF(e, tj) ? e : new tj(e);
            this._lexer = new tw(t);
          }
          (this._options = r), (this._tokenCounter = 0);
        }
        get tokenCount() {
          return this._tokenCounter;
        }
        parseName() {
          let e = this.expectToken(A.NAME);
          return this.node(e, { kind: w.NAME, value: e.value });
        }
        parseDocument() {
          return this.node(this._lexer.token, {
            kind: w.DOCUMENT,
            definitions: this.many(A.SOF, this.parseDefinition, A.EOF),
          });
        }
        parseDefinition() {
          if (this.peek(A.BRACE_L)) return this.parseOperationDefinition();
          let e = this.peekDescription(),
            t = e ? this._lexer.lookahead() : this._lexer.token;
          if (e && t.kind === A.BRACE_L)
            throw tg(
              this._lexer.source,
              this._lexer.token.start,
              'Unexpected description, descriptions are not supported on shorthand queries.'
            );
          if (t.kind === A.NAME) {
            switch (t.value) {
              case 'schema':
                return this.parseSchemaDefinition();
              case 'scalar':
                return this.parseScalarTypeDefinition();
              case 'type':
                return this.parseObjectTypeDefinition();
              case 'interface':
                return this.parseInterfaceTypeDefinition();
              case 'union':
                return this.parseUnionTypeDefinition();
              case 'enum':
                return this.parseEnumTypeDefinition();
              case 'input':
                return this.parseInputObjectTypeDefinition();
              case 'directive':
                return this.parseDirectiveDefinition();
            }
            switch (t.value) {
              case 'query':
              case 'mutation':
              case 'subscription':
                return this.parseOperationDefinition();
              case 'fragment':
                return this.parseFragmentDefinition();
            }
            if (e)
              throw tg(
                this._lexer.source,
                this._lexer.token.start,
                'Unexpected description, only GraphQL definitions support descriptions.'
              );
            if ('extend' === t.value) return this.parseTypeSystemExtension();
          }
          throw this.unexpected(t);
        }
        parseOperationDefinition() {
          let e;
          let t = this._lexer.token;
          if (this.peek(A.BRACE_L))
            return this.node(t, {
              kind: w.OPERATION_DEFINITION,
              operation: I.QUERY,
              description: void 0,
              name: void 0,
              variableDefinitions: [],
              directives: [],
              selectionSet: this.parseSelectionSet(),
            });
          let n = this.parseDescription(),
            r = this.parseOperationType();
          return (
            this.peek(A.NAME) && (e = this.parseName()),
            this.node(t, {
              kind: w.OPERATION_DEFINITION,
              operation: r,
              description: n,
              name: e,
              variableDefinitions: this.parseVariableDefinitions(),
              directives: this.parseDirectives(!1),
              selectionSet: this.parseSelectionSet(),
            })
          );
        }
        parseOperationType() {
          let e = this.expectToken(A.NAME);
          switch (e.value) {
            case 'query':
              return I.QUERY;
            case 'mutation':
              return I.MUTATION;
            case 'subscription':
              return I.SUBSCRIPTION;
          }
          throw this.unexpected(e);
        }
        parseVariableDefinitions() {
          return this.optionalMany(
            A.PAREN_L,
            this.parseVariableDefinition,
            A.PAREN_R
          );
        }
        parseVariableDefinition() {
          return this.node(this._lexer.token, {
            kind: w.VARIABLE_DEFINITION,
            description: this.parseDescription(),
            variable: this.parseVariable(),
            type: (this.expectToken(A.COLON), this.parseTypeReference()),
            defaultValue: this.expectOptionalToken(A.EQUALS)
              ? this.parseConstValueLiteral()
              : void 0,
            directives: this.parseConstDirectives(),
          });
        }
        parseVariable() {
          let e = this._lexer.token;
          return (
            this.expectToken(A.DOLLAR),
            this.node(e, { kind: w.VARIABLE, name: this.parseName() })
          );
        }
        parseSelectionSet() {
          return this.node(this._lexer.token, {
            kind: w.SELECTION_SET,
            selections: this.many(A.BRACE_L, this.parseSelection, A.BRACE_R),
          });
        }
        parseSelection() {
          return this.peek(A.SPREAD) ? this.parseFragment() : this.parseField();
        }
        parseField() {
          let e, t;
          let n = this._lexer.token,
            r = this.parseName();
          return (
            this.expectOptionalToken(A.COLON)
              ? ((e = r), (t = this.parseName()))
              : (t = r),
            this.node(n, {
              kind: w.FIELD,
              alias: e,
              name: t,
              arguments: this.parseArguments(!1),
              directives: this.parseDirectives(!1),
              selectionSet: this.peek(A.BRACE_L)
                ? this.parseSelectionSet()
                : void 0,
            })
          );
        }
        parseArguments(e) {
          let t = e ? this.parseConstArgument : this.parseArgument;
          return this.optionalMany(A.PAREN_L, t, A.PAREN_R);
        }
        parseArgument(e = !1) {
          let t = this._lexer.token,
            n = this.parseName();
          return (
            this.expectToken(A.COLON),
            this.node(t, {
              kind: w.ARGUMENT,
              name: n,
              value: this.parseValueLiteral(e),
            })
          );
        }
        parseConstArgument() {
          return this.parseArgument(!0);
        }
        parseFragment() {
          let e = this._lexer.token;
          this.expectToken(A.SPREAD);
          let t = this.expectOptionalKeyword('on');
          return !t && this.peek(A.NAME)
            ? this.node(e, {
                kind: w.FRAGMENT_SPREAD,
                name: this.parseFragmentName(),
                directives: this.parseDirectives(!1),
              })
            : this.node(e, {
                kind: w.INLINE_FRAGMENT,
                typeCondition: t ? this.parseNamedType() : void 0,
                directives: this.parseDirectives(!1),
                selectionSet: this.parseSelectionSet(),
              });
        }
        parseFragmentDefinition() {
          let e = this._lexer.token,
            t = this.parseDescription();
          return (this.expectKeyword('fragment'),
          !0 === this._options.allowLegacyFragmentVariables)
            ? this.node(e, {
                kind: w.FRAGMENT_DEFINITION,
                description: t,
                name: this.parseFragmentName(),
                variableDefinitions: this.parseVariableDefinitions(),
                typeCondition:
                  (this.expectKeyword('on'), this.parseNamedType()),
                directives: this.parseDirectives(!1),
                selectionSet: this.parseSelectionSet(),
              })
            : this.node(e, {
                kind: w.FRAGMENT_DEFINITION,
                description: t,
                name: this.parseFragmentName(),
                typeCondition:
                  (this.expectKeyword('on'), this.parseNamedType()),
                directives: this.parseDirectives(!1),
                selectionSet: this.parseSelectionSet(),
              });
        }
        parseFragmentName() {
          if ('on' === this._lexer.token.value) throw this.unexpected();
          return this.parseName();
        }
        parseValueLiteral(e) {
          let t = this._lexer.token;
          switch (t.kind) {
            case A.BRACKET_L:
              return this.parseList(e);
            case A.BRACE_L:
              return this.parseObject(e);
            case A.INT:
              return (
                this.advanceLexer(),
                this.node(t, { kind: w.INT, value: t.value })
              );
            case A.FLOAT:
              return (
                this.advanceLexer(),
                this.node(t, { kind: w.FLOAT, value: t.value })
              );
            case A.STRING:
            case A.BLOCK_STRING:
              return this.parseStringLiteral();
            case A.NAME:
              switch ((this.advanceLexer(), t.value)) {
                case 'true':
                  return this.node(t, { kind: w.BOOLEAN, value: !0 });
                case 'false':
                  return this.node(t, { kind: w.BOOLEAN, value: !1 });
                case 'null':
                  return this.node(t, { kind: w.NULL });
                default:
                  return this.node(t, { kind: w.ENUM, value: t.value });
              }
            case A.DOLLAR:
              if (e) {
                if (
                  (this.expectToken(A.DOLLAR),
                  this._lexer.token.kind === A.NAME)
                ) {
                  let e = this._lexer.token.value;
                  throw tg(
                    this._lexer.source,
                    t.start,
                    `Unexpected variable "$${e}" in constant value.`
                  );
                }
                throw this.unexpected(t);
              }
              return this.parseVariable();
            default:
              throw this.unexpected();
          }
        }
        parseConstValueLiteral() {
          return this.parseValueLiteral(!0);
        }
        parseStringLiteral() {
          let e = this._lexer.token;
          return (
            this.advanceLexer(),
            this.node(e, {
              kind: w.STRING,
              value: e.value,
              block: e.kind === A.BLOCK_STRING,
            })
          );
        }
        parseList(e) {
          return this.node(this._lexer.token, {
            kind: w.LIST,
            values: this.any(
              A.BRACKET_L,
              () => this.parseValueLiteral(e),
              A.BRACKET_R
            ),
          });
        }
        parseObject(e) {
          return this.node(this._lexer.token, {
            kind: w.OBJECT,
            fields: this.any(
              A.BRACE_L,
              () => this.parseObjectField(e),
              A.BRACE_R
            ),
          });
        }
        parseObjectField(e) {
          let t = this._lexer.token,
            n = this.parseName();
          return (
            this.expectToken(A.COLON),
            this.node(t, {
              kind: w.OBJECT_FIELD,
              name: n,
              value: this.parseValueLiteral(e),
            })
          );
        }
        parseDirectives(e) {
          let t = [];
          for (; this.peek(A.AT); ) t.push(this.parseDirective(e));
          return t;
        }
        parseConstDirectives() {
          return this.parseDirectives(!0);
        }
        parseDirective(e) {
          let t = this._lexer.token;
          return (
            this.expectToken(A.AT),
            this.node(t, {
              kind: w.DIRECTIVE,
              name: this.parseName(),
              arguments: this.parseArguments(e),
            })
          );
        }
        parseTypeReference() {
          let e;
          let t = this._lexer.token;
          if (this.expectOptionalToken(A.BRACKET_L)) {
            let n = this.parseTypeReference();
            this.expectToken(A.BRACKET_R),
              (e = this.node(t, { kind: w.LIST_TYPE, type: n }));
          } else e = this.parseNamedType();
          return this.expectOptionalToken(A.BANG)
            ? this.node(t, { kind: w.NON_NULL_TYPE, type: e })
            : e;
        }
        parseNamedType() {
          return this.node(this._lexer.token, {
            kind: w.NAMED_TYPE,
            name: this.parseName(),
          });
        }
        peekDescription() {
          return this.peek(A.STRING) || this.peek(A.BLOCK_STRING);
        }
        parseDescription() {
          if (this.peekDescription()) return this.parseStringLiteral();
        }
        parseSchemaDefinition() {
          let e = this._lexer.token,
            t = this.parseDescription();
          this.expectKeyword('schema');
          let n = this.parseConstDirectives(),
            r = this.many(
              A.BRACE_L,
              this.parseOperationTypeDefinition,
              A.BRACE_R
            );
          return this.node(e, {
            kind: w.SCHEMA_DEFINITION,
            description: t,
            directives: n,
            operationTypes: r,
          });
        }
        parseOperationTypeDefinition() {
          let e = this._lexer.token,
            t = this.parseOperationType();
          this.expectToken(A.COLON);
          let n = this.parseNamedType();
          return this.node(e, {
            kind: w.OPERATION_TYPE_DEFINITION,
            operation: t,
            type: n,
          });
        }
        parseScalarTypeDefinition() {
          let e = this._lexer.token,
            t = this.parseDescription();
          this.expectKeyword('scalar');
          let n = this.parseName(),
            r = this.parseConstDirectives();
          return this.node(e, {
            kind: w.SCALAR_TYPE_DEFINITION,
            description: t,
            name: n,
            directives: r,
          });
        }
        parseObjectTypeDefinition() {
          let e = this._lexer.token,
            t = this.parseDescription();
          this.expectKeyword('type');
          let n = this.parseName(),
            r = this.parseImplementsInterfaces(),
            i = this.parseConstDirectives(),
            s = this.parseFieldsDefinition();
          return this.node(e, {
            kind: w.OBJECT_TYPE_DEFINITION,
            description: t,
            name: n,
            interfaces: r,
            directives: i,
            fields: s,
          });
        }
        parseImplementsInterfaces() {
          return this.expectOptionalKeyword('implements')
            ? this.delimitedMany(A.AMP, this.parseNamedType)
            : [];
        }
        parseFieldsDefinition() {
          return this.optionalMany(
            A.BRACE_L,
            this.parseFieldDefinition,
            A.BRACE_R
          );
        }
        parseFieldDefinition() {
          let e = this._lexer.token,
            t = this.parseDescription(),
            n = this.parseName(),
            r = this.parseArgumentDefs();
          this.expectToken(A.COLON);
          let i = this.parseTypeReference(),
            s = this.parseConstDirectives();
          return this.node(e, {
            kind: w.FIELD_DEFINITION,
            description: t,
            name: n,
            arguments: r,
            type: i,
            directives: s,
          });
        }
        parseArgumentDefs() {
          return this.optionalMany(
            A.PAREN_L,
            this.parseInputValueDef,
            A.PAREN_R
          );
        }
        parseInputValueDef() {
          let e;
          let t = this._lexer.token,
            n = this.parseDescription(),
            r = this.parseName();
          this.expectToken(A.COLON);
          let i = this.parseTypeReference();
          this.expectOptionalToken(A.EQUALS) &&
            (e = this.parseConstValueLiteral());
          let s = this.parseConstDirectives();
          return this.node(t, {
            kind: w.INPUT_VALUE_DEFINITION,
            description: n,
            name: r,
            type: i,
            defaultValue: e,
            directives: s,
          });
        }
        parseInterfaceTypeDefinition() {
          let e = this._lexer.token,
            t = this.parseDescription();
          this.expectKeyword('interface');
          let n = this.parseName(),
            r = this.parseImplementsInterfaces(),
            i = this.parseConstDirectives(),
            s = this.parseFieldsDefinition();
          return this.node(e, {
            kind: w.INTERFACE_TYPE_DEFINITION,
            description: t,
            name: n,
            interfaces: r,
            directives: i,
            fields: s,
          });
        }
        parseUnionTypeDefinition() {
          let e = this._lexer.token,
            t = this.parseDescription();
          this.expectKeyword('union');
          let n = this.parseName(),
            r = this.parseConstDirectives(),
            i = this.parseUnionMemberTypes();
          return this.node(e, {
            kind: w.UNION_TYPE_DEFINITION,
            description: t,
            name: n,
            directives: r,
            types: i,
          });
        }
        parseUnionMemberTypes() {
          return this.expectOptionalToken(A.EQUALS)
            ? this.delimitedMany(A.PIPE, this.parseNamedType)
            : [];
        }
        parseEnumTypeDefinition() {
          let e = this._lexer.token,
            t = this.parseDescription();
          this.expectKeyword('enum');
          let n = this.parseName(),
            r = this.parseConstDirectives(),
            i = this.parseEnumValuesDefinition();
          return this.node(e, {
            kind: w.ENUM_TYPE_DEFINITION,
            description: t,
            name: n,
            directives: r,
            values: i,
          });
        }
        parseEnumValuesDefinition() {
          return this.optionalMany(
            A.BRACE_L,
            this.parseEnumValueDefinition,
            A.BRACE_R
          );
        }
        parseEnumValueDefinition() {
          let e = this._lexer.token,
            t = this.parseDescription(),
            n = this.parseEnumValueName(),
            r = this.parseConstDirectives();
          return this.node(e, {
            kind: w.ENUM_VALUE_DEFINITION,
            description: t,
            name: n,
            directives: r,
          });
        }
        parseEnumValueName() {
          if (
            'true' === this._lexer.token.value ||
            'false' === this._lexer.token.value ||
            'null' === this._lexer.token.value
          )
            throw tg(
              this._lexer.source,
              this._lexer.token.start,
              `${tV(
                this._lexer.token
              )} is reserved and cannot be used for an enum value.`
            );
          return this.parseName();
        }
        parseInputObjectTypeDefinition() {
          let e = this._lexer.token,
            t = this.parseDescription();
          this.expectKeyword('input');
          let n = this.parseName(),
            r = this.parseConstDirectives(),
            i = this.parseInputFieldsDefinition();
          return this.node(e, {
            kind: w.INPUT_OBJECT_TYPE_DEFINITION,
            description: t,
            name: n,
            directives: r,
            fields: i,
          });
        }
        parseInputFieldsDefinition() {
          return this.optionalMany(
            A.BRACE_L,
            this.parseInputValueDef,
            A.BRACE_R
          );
        }
        parseTypeSystemExtension() {
          let e = this._lexer.lookahead();
          if (e.kind === A.NAME)
            switch (e.value) {
              case 'schema':
                return this.parseSchemaExtension();
              case 'scalar':
                return this.parseScalarTypeExtension();
              case 'type':
                return this.parseObjectTypeExtension();
              case 'interface':
                return this.parseInterfaceTypeExtension();
              case 'union':
                return this.parseUnionTypeExtension();
              case 'enum':
                return this.parseEnumTypeExtension();
              case 'input':
                return this.parseInputObjectTypeExtension();
            }
          throw this.unexpected(e);
        }
        parseSchemaExtension() {
          let e = this._lexer.token;
          this.expectKeyword('extend'), this.expectKeyword('schema');
          let t = this.parseConstDirectives(),
            n = this.optionalMany(
              A.BRACE_L,
              this.parseOperationTypeDefinition,
              A.BRACE_R
            );
          if (0 === t.length && 0 === n.length) throw this.unexpected();
          return this.node(e, {
            kind: w.SCHEMA_EXTENSION,
            directives: t,
            operationTypes: n,
          });
        }
        parseScalarTypeExtension() {
          let e = this._lexer.token;
          this.expectKeyword('extend'), this.expectKeyword('scalar');
          let t = this.parseName(),
            n = this.parseConstDirectives();
          if (0 === n.length) throw this.unexpected();
          return this.node(e, {
            kind: w.SCALAR_TYPE_EXTENSION,
            name: t,
            directives: n,
          });
        }
        parseObjectTypeExtension() {
          let e = this._lexer.token;
          this.expectKeyword('extend'), this.expectKeyword('type');
          let t = this.parseName(),
            n = this.parseImplementsInterfaces(),
            r = this.parseConstDirectives(),
            i = this.parseFieldsDefinition();
          if (0 === n.length && 0 === r.length && 0 === i.length)
            throw this.unexpected();
          return this.node(e, {
            kind: w.OBJECT_TYPE_EXTENSION,
            name: t,
            interfaces: n,
            directives: r,
            fields: i,
          });
        }
        parseInterfaceTypeExtension() {
          let e = this._lexer.token;
          this.expectKeyword('extend'), this.expectKeyword('interface');
          let t = this.parseName(),
            n = this.parseImplementsInterfaces(),
            r = this.parseConstDirectives(),
            i = this.parseFieldsDefinition();
          if (0 === n.length && 0 === r.length && 0 === i.length)
            throw this.unexpected();
          return this.node(e, {
            kind: w.INTERFACE_TYPE_EXTENSION,
            name: t,
            interfaces: n,
            directives: r,
            fields: i,
          });
        }
        parseUnionTypeExtension() {
          let e = this._lexer.token;
          this.expectKeyword('extend'), this.expectKeyword('union');
          let t = this.parseName(),
            n = this.parseConstDirectives(),
            r = this.parseUnionMemberTypes();
          if (0 === n.length && 0 === r.length) throw this.unexpected();
          return this.node(e, {
            kind: w.UNION_TYPE_EXTENSION,
            name: t,
            directives: n,
            types: r,
          });
        }
        parseEnumTypeExtension() {
          let e = this._lexer.token;
          this.expectKeyword('extend'), this.expectKeyword('enum');
          let t = this.parseName(),
            n = this.parseConstDirectives(),
            r = this.parseEnumValuesDefinition();
          if (0 === n.length && 0 === r.length) throw this.unexpected();
          return this.node(e, {
            kind: w.ENUM_TYPE_EXTENSION,
            name: t,
            directives: n,
            values: r,
          });
        }
        parseInputObjectTypeExtension() {
          let e = this._lexer.token;
          this.expectKeyword('extend'), this.expectKeyword('input');
          let t = this.parseName(),
            n = this.parseConstDirectives(),
            r = this.parseInputFieldsDefinition();
          if (0 === n.length && 0 === r.length) throw this.unexpected();
          return this.node(e, {
            kind: w.INPUT_OBJECT_TYPE_EXTENSION,
            name: t,
            directives: n,
            fields: r,
          });
        }
        parseDirectiveDefinition() {
          let e = this._lexer.token,
            t = this.parseDescription();
          this.expectKeyword('directive'), this.expectToken(A.AT);
          let n = this.parseName(),
            r = this.parseArgumentDefs(),
            i = this.expectOptionalKeyword('repeatable');
          this.expectKeyword('on');
          let s = this.parseDirectiveLocations();
          return this.node(e, {
            kind: w.DIRECTIVE_DEFINITION,
            description: t,
            name: n,
            arguments: r,
            repeatable: i,
            locations: s,
          });
        }
        parseDirectiveLocations() {
          return this.delimitedMany(A.PIPE, this.parseDirectiveLocation);
        }
        parseDirectiveLocation() {
          let e = this._lexer.token,
            t = this.parseName();
          if (Object.prototype.hasOwnProperty.call(O, t.value)) return t;
          throw this.unexpected(e);
        }
        parseSchemaCoordinate() {
          let e, t;
          let n = this._lexer.token,
            r = this.expectOptionalToken(A.AT),
            i = this.parseName();
          return (!r &&
            this.expectOptionalToken(A.DOT) &&
            (e = this.parseName()),
          (r || e) &&
            this.expectOptionalToken(A.PAREN_L) &&
            ((t = this.parseName()),
            this.expectToken(A.COLON),
            this.expectToken(A.PAREN_R)),
          r)
            ? t
              ? this.node(n, {
                  kind: w.DIRECTIVE_ARGUMENT_COORDINATE,
                  name: i,
                  argumentName: t,
                })
              : this.node(n, { kind: w.DIRECTIVE_COORDINATE, name: i })
            : e
            ? t
              ? this.node(n, {
                  kind: w.ARGUMENT_COORDINATE,
                  name: i,
                  fieldName: e,
                  argumentName: t,
                })
              : this.node(n, {
                  kind: w.MEMBER_COORDINATE,
                  name: i,
                  memberName: e,
                })
            : this.node(n, { kind: w.TYPE_COORDINATE, name: i });
        }
        node(e, t) {
          return (
            !0 !== this._options.noLocation &&
              (t.loc = new ty(e, this._lexer.lastToken, this._lexer.source)),
            t
          );
        }
        peek(e) {
          return this._lexer.token.kind === e;
        }
        expectToken(e) {
          let t = this._lexer.token;
          if (t.kind === e) return this.advanceLexer(), t;
          throw tg(
            this._lexer.source,
            t.start,
            `Expected ${tq(e)}, found ${tV(t)}.`
          );
        }
        expectOptionalToken(e) {
          return this._lexer.token.kind === e && (this.advanceLexer(), !0);
        }
        expectKeyword(e) {
          let t = this._lexer.token;
          if (t.kind === A.NAME && t.value === e) this.advanceLexer();
          else
            throw tg(
              this._lexer.source,
              t.start,
              `Expected "${e}", found ${tV(t)}.`
            );
        }
        expectOptionalKeyword(e) {
          let t = this._lexer.token;
          return (
            t.kind === A.NAME && t.value === e && (this.advanceLexer(), !0)
          );
        }
        unexpected(e) {
          let t = null != e ? e : this._lexer.token;
          return tg(this._lexer.source, t.start, `Unexpected ${tV(t)}.`);
        }
        any(e, t, n) {
          this.expectToken(e);
          let r = [];
          for (; !this.expectOptionalToken(n); ) r.push(t.call(this));
          return r;
        }
        optionalMany(e, t, n) {
          if (this.expectOptionalToken(e)) {
            let e = [];
            do e.push(t.call(this));
            while (!this.expectOptionalToken(n));
            return e;
          }
          return [];
        }
        many(e, t, n) {
          this.expectToken(e);
          let r = [];
          do r.push(t.call(this));
          while (!this.expectOptionalToken(n));
          return r;
        }
        delimitedMany(e, t) {
          this.expectOptionalToken(e);
          let n = [];
          do n.push(t.call(this));
          while (this.expectOptionalToken(e));
          return n;
        }
        advanceLexer() {
          let { maxTokens: e } = this._options,
            t = this._lexer.advance();
          if (
            t.kind !== A.EOF &&
            (++this._tokenCounter, void 0 !== e && this._tokenCounter > e)
          )
            throw tg(
              this._lexer.source,
              t.start,
              `Document contains more that ${e} tokens. Parsing aborted.`
            );
        }
      }
      function tV(e) {
        let t = e.value;
        return tq(e.kind) + (null != t ? ` "${t}"` : '');
      }
      function tq(e) {
        return e === A.BANG ||
          e === A.DOLLAR ||
          e === A.AMP ||
          e === A.PAREN_L ||
          e === A.PAREN_R ||
          e === A.DOT ||
          e === A.SPREAD ||
          e === A.COLON ||
          e === A.EQUALS ||
          e === A.AT ||
          e === A.BRACKET_L ||
          e === A.BRACKET_R ||
          e === A.BRACE_L ||
          e === A.PIPE ||
          e === A.BRACE_R
          ? `"${e}"`
          : e;
      }
      function tQ(e, t) {
        let [n, r] = t ? [e, t] : [void 0, e],
          i = ' Did you mean ';
        n && (i += n + ' ');
        let s = r.map((e) => `"${e}"`);
        switch (s.length) {
          case 0:
            return '';
          case 1:
            return i + s[0] + '?';
          case 2:
            return i + s[0] + ' or ' + s[1] + '?';
        }
        let a = s.slice(0, 5),
          o = a.pop();
        return i + a.join(', ') + ', or ' + o + '?';
      }
      function tY(e) {
        return e;
      }
      function tG(e, t) {
        let n = Object.create(null);
        for (let r of e) n[t(r)] = r;
        return n;
      }
      function tJ(e, t, n) {
        let r = Object.create(null);
        for (let i of e) r[t(i)] = n(i);
        return r;
      }
      function tK(e, t) {
        let n = Object.create(null);
        for (let r of Object.keys(e)) n[r] = t(e[r], r);
        return n;
      }
      function tH(e, t) {
        let n = 0,
          r = 0;
        for (; n < e.length && r < t.length; ) {
          let i = e.charCodeAt(n),
            s = t.charCodeAt(r);
          if (tX(i) && tX(s)) {
            let a = 0;
            do ++n, (a = 10 * a + i - tz), (i = e.charCodeAt(n));
            while (tX(i) && a > 0);
            let o = 0;
            do ++r, (o = 10 * o + s - tz), (s = t.charCodeAt(r));
            while (tX(s) && o > 0);
            if (a < o) return -1;
            if (a > o) return 1;
          } else {
            if (i < s) return -1;
            if (i > s) return 1;
            ++n, ++r;
          }
        }
        return e.length - t.length;
      }
      let tz = 48;
      function tX(e) {
        return !isNaN(e) && tz <= e && e <= 57;
      }
      function tW(e, t) {
        let n = Object.create(null),
          r = new tZ(e),
          i = Math.floor(0.4 * e.length) + 1;
        for (let e of t) {
          let t = r.measure(e, i);
          void 0 !== t && (n[e] = t);
        }
        return Object.keys(n).sort((e, t) => {
          let r = n[e] - n[t];
          return 0 !== r ? r : tH(e, t);
        });
      }
      class tZ {
        constructor(e) {
          (this._input = e),
            (this._inputLowerCase = e.toLowerCase()),
            (this._inputArray = t0(this._inputLowerCase)),
            (this._rows = [
              Array(e.length + 1).fill(0),
              Array(e.length + 1).fill(0),
              Array(e.length + 1).fill(0),
            ]);
        }
        measure(e, t) {
          if (this._input === e) return 0;
          let n = e.toLowerCase();
          if (this._inputLowerCase === n) return 1;
          let r = t0(n),
            i = this._inputArray;
          if (r.length < i.length) {
            let e = r;
            (r = i), (i = e);
          }
          let s = r.length,
            a = i.length;
          if (s - a > t) return;
          let o = this._rows;
          for (let e = 0; e <= a; e++) o[0][e] = e;
          for (let e = 1; e <= s; e++) {
            let n = o[(e - 1) % 3],
              s = o[e % 3],
              l = (s[0] = e);
            for (let t = 1; t <= a; t++) {
              let a = r[e - 1] === i[t - 1] ? 0 : 1,
                u = Math.min(n[t] + 1, s[t - 1] + 1, n[t - 1] + a);
              e > 1 &&
                t > 1 &&
                r[e - 1] === i[t - 2] &&
                r[e - 2] === i[t - 1] &&
                (u = Math.min(u, o[(e - 2) % 3][t - 2] + 1)),
                u < l && (l = u),
                (s[t] = u);
            }
            if (l > t) return;
          }
          let l = o[s % 3][a];
          return l <= t ? l : void 0;
        }
      }
      function t0(e) {
        let t = e.length,
          n = Array(t);
        for (let r = 0; r < t; ++r) n[r] = e.charCodeAt(r);
        return n;
      }
      function t1(e) {
        if (null == e) return Object.create(null);
        if (null === Object.getPrototypeOf(e)) return e;
        let t = Object.create(null);
        for (let [n, r] of Object.entries(e)) t[n] = r;
        return t;
      }
      let t2 = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
      function t4(e) {
        return t3[e.charCodeAt(0)];
      }
      let t3 = [
          '\\u0000',
          '\\u0001',
          '\\u0002',
          '\\u0003',
          '\\u0004',
          '\\u0005',
          '\\u0006',
          '\\u0007',
          '\\b',
          '\\t',
          '\\n',
          '\\u000B',
          '\\f',
          '\\r',
          '\\u000E',
          '\\u000F',
          '\\u0010',
          '\\u0011',
          '\\u0012',
          '\\u0013',
          '\\u0014',
          '\\u0015',
          '\\u0016',
          '\\u0017',
          '\\u0018',
          '\\u0019',
          '\\u001A',
          '\\u001B',
          '\\u001C',
          '\\u001D',
          '\\u001E',
          '\\u001F',
          '',
          '',
          '\\"',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '\\\\',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '\\u007F',
          '\\u0080',
          '\\u0081',
          '\\u0082',
          '\\u0083',
          '\\u0084',
          '\\u0085',
          '\\u0086',
          '\\u0087',
          '\\u0088',
          '\\u0089',
          '\\u008A',
          '\\u008B',
          '\\u008C',
          '\\u008D',
          '\\u008E',
          '\\u008F',
          '\\u0090',
          '\\u0091',
          '\\u0092',
          '\\u0093',
          '\\u0094',
          '\\u0095',
          '\\u0096',
          '\\u0097',
          '\\u0098',
          '\\u0099',
          '\\u009A',
          '\\u009B',
          '\\u009C',
          '\\u009D',
          '\\u009E',
          '\\u009F',
        ],
        t9 = Object.freeze({});
      function t7(e, t, n = tT) {
        let r, i, s;
        let a = new Map();
        for (let e of Object.values(w)) a.set(e, t8(t, e));
        let o = Array.isArray(e),
          l = [e],
          u = -1,
          c = [],
          d = e,
          p = [],
          h = [];
        do {
          var f, m, g;
          let e;
          let y = ++u === l.length,
            v = y && 0 !== c.length;
          if (y) {
            if (
              ((i = 0 === h.length ? void 0 : p[p.length - 1]),
              (d = s),
              (s = h.pop()),
              v)
            ) {
              if (o) {
                d = d.slice();
                let e = 0;
                for (let [t, n] of c) {
                  let r = t - e;
                  null === n ? (d.splice(r, 1), e++) : (d[r] = n);
                }
              } else for (let [e, t] of ((d = { ...d }), c)) d[e] = t;
            }
            (u = r.index),
              (l = r.keys),
              (c = r.edits),
              (o = r.inArray),
              (r = r.prev);
          } else if (s) {
            if (null == (d = s[(i = o ? u : l[u])])) continue;
            p.push(i);
          }
          if (!Array.isArray(d)) {
            tE(d) || to(!1, `Invalid AST Node: ${tM(d)}.`);
            let n = y
              ? null === (f = a.get(d.kind)) || void 0 === f
                ? void 0
                : f.leave
              : null === (m = a.get(d.kind)) || void 0 === m
              ? void 0
              : m.enter;
            if ((e = null == n ? void 0 : n.call(t, d, i, s, p, h)) === t9)
              break;
            if (!1 === e) {
              if (!y) {
                p.pop();
                continue;
              }
            } else if (void 0 !== e && (c.push([i, e]), !y)) {
              if (tE(e)) d = e;
              else {
                p.pop();
                continue;
              }
            }
          }
          void 0 === e && v && c.push([i, d]),
            y
              ? p.pop()
              : ((r = { inArray: o, index: u, keys: l, edits: c, prev: r }),
                (l = (o = Array.isArray(d))
                  ? d
                  : null !== (g = n[d.kind]) && void 0 !== g
                  ? g
                  : []),
                (u = -1),
                (c = []),
                s && h.push(s),
                (s = d));
        } while (void 0 !== r);
        return 0 !== c.length ? c[c.length - 1][1] : e;
      }
      function t6(e) {
        let t = Array(e.length).fill(null),
          n = Object.create(null);
        for (let r of Object.values(w)) {
          let i = !1,
            s = Array(e.length).fill(void 0),
            a = Array(e.length).fill(void 0);
          for (let t = 0; t < e.length; ++t) {
            let { enter: n, leave: o } = t8(e[t], r);
            i || (i = null != n || null != o), (s[t] = n), (a[t] = o);
          }
          if (!i) continue;
          let o = {
            enter(...n) {
              let r = n[0];
              for (let a = 0; a < e.length; a++)
                if (null === t[a]) {
                  var i;
                  let o =
                    null === (i = s[a]) || void 0 === i
                      ? void 0
                      : i.apply(e[a], n);
                  if (!1 === o) t[a] = r;
                  else if (o === t9) t[a] = t9;
                  else if (void 0 !== o) return o;
                }
            },
            leave(...n) {
              let r = n[0];
              for (let s = 0; s < e.length; s++)
                if (null === t[s]) {
                  var i;
                  let r =
                    null === (i = a[s]) || void 0 === i
                      ? void 0
                      : i.apply(e[s], n);
                  if (r === t9) t[s] = t9;
                  else if (void 0 !== r && !1 !== r) return r;
                } else t[s] === r && (t[s] = null);
            },
          };
          n[r] = o;
        }
        return n;
      }
      function t8(e, t) {
        let n = e[t];
        return 'object' == typeof n
          ? n
          : 'function' == typeof n
          ? { enter: n, leave: void 0 }
          : { enter: e.enter, leave: e.leave };
      }
      function t5(e) {
        return t7(e, ne);
      }
      let ne = {
        Name: { leave: (e) => e.value },
        Variable: { leave: (e) => '$' + e.name },
        Document: { leave: (e) => nt(e.definitions, '\n\n') },
        OperationDefinition: {
          leave(e) {
            let t = ns(e.variableDefinitions)
                ? nr('(\n', nt(e.variableDefinitions, '\n'), '\n)')
                : nr('(', nt(e.variableDefinitions, ', '), ')'),
              n =
                nr('', e.description, '\n') +
                nt([e.operation, nt([e.name, t]), nt(e.directives, ' ')], ' ');
            return ('query' === n ? '' : n + ' ') + e.selectionSet;
          },
        },
        VariableDefinition: {
          leave: ({
            variable: e,
            type: t,
            defaultValue: n,
            directives: r,
            description: i,
          }) =>
            nr('', i, '\n') + e + ': ' + t + nr(' = ', n) + nr(' ', nt(r, ' ')),
        },
        SelectionSet: { leave: ({ selections: e }) => nn(e) },
        Field: {
          leave({
            alias: e,
            name: t,
            arguments: n,
            directives: r,
            selectionSet: i,
          }) {
            let s = nr('', e, ': ') + t,
              a = s + nr('(', nt(n, ', '), ')');
            return (
              a.length > 80 && (a = s + nr('(\n', ni(nt(n, '\n')), '\n)')),
              nt([a, nt(r, ' '), i], ' ')
            );
          },
        },
        Argument: { leave: ({ name: e, value: t }) => e + ': ' + t },
        FragmentSpread: {
          leave: ({ name: e, directives: t }) =>
            '...' + e + nr(' ', nt(t, ' ')),
        },
        InlineFragment: {
          leave: ({ typeCondition: e, directives: t, selectionSet: n }) =>
            nt(['...', nr('on ', e), nt(t, ' '), n], ' '),
        },
        FragmentDefinition: {
          leave: ({
            name: e,
            typeCondition: t,
            variableDefinitions: n,
            directives: r,
            selectionSet: i,
            description: s,
          }) =>
            nr('', s, '\n') +
            `fragment ${e}${nr('(', nt(n, ', '), ')')} ` +
            `on ${t} ${nr('', nt(r, ' '), ' ')}` +
            i,
        },
        IntValue: { leave: ({ value: e }) => e },
        FloatValue: { leave: ({ value: e }) => e },
        StringValue: {
          leave: ({ value: e, block: t }) =>
            t
              ? (function (e, t) {
                  let n = e.replace(/"""/g, '\\"""'),
                    r = n.split(/\r\n|[\n\r]/g),
                    i = 1 === r.length,
                    s =
                      r.length > 1 &&
                      r
                        .slice(1)
                        .every((e) => 0 === e.length || tN(e.charCodeAt(0))),
                    a = n.endsWith('\\"""'),
                    o = e.endsWith('"') && !a,
                    l = e.endsWith('\\'),
                    u = o || l,
                    c =
                      !(null != t && t.minimize) &&
                      (!i || e.length > 70 || u || s || a),
                    d = '',
                    p = i && tN(e.charCodeAt(0));
                  return (
                    ((c && !p) || s) && (d += '\n'),
                    (d += n),
                    (c || u) && (d += '\n'),
                    '"""' + d + '"""'
                  );
                })(e)
              : `"${e.replace(t2, t4)}"`,
        },
        BooleanValue: { leave: ({ value: e }) => (e ? 'true' : 'false') },
        NullValue: { leave: () => 'null' },
        EnumValue: { leave: ({ value: e }) => e },
        ListValue: { leave: ({ values: e }) => '[' + nt(e, ', ') + ']' },
        ObjectValue: { leave: ({ fields: e }) => '{' + nt(e, ', ') + '}' },
        ObjectField: { leave: ({ name: e, value: t }) => e + ': ' + t },
        Directive: {
          leave: ({ name: e, arguments: t }) =>
            '@' + e + nr('(', nt(t, ', '), ')'),
        },
        NamedType: { leave: ({ name: e }) => e },
        ListType: { leave: ({ type: e }) => '[' + e + ']' },
        NonNullType: { leave: ({ type: e }) => e + '!' },
        SchemaDefinition: {
          leave: ({ description: e, directives: t, operationTypes: n }) =>
            nr('', e, '\n') + nt(['schema', nt(t, ' '), nn(n)], ' '),
        },
        OperationTypeDefinition: {
          leave: ({ operation: e, type: t }) => e + ': ' + t,
        },
        ScalarTypeDefinition: {
          leave: ({ description: e, name: t, directives: n }) =>
            nr('', e, '\n') + nt(['scalar', t, nt(n, ' ')], ' '),
        },
        ObjectTypeDefinition: {
          leave: ({
            description: e,
            name: t,
            interfaces: n,
            directives: r,
            fields: i,
          }) =>
            nr('', e, '\n') +
            nt(
              ['type', t, nr('implements ', nt(n, ' & ')), nt(r, ' '), nn(i)],
              ' '
            ),
        },
        FieldDefinition: {
          leave: ({
            description: e,
            name: t,
            arguments: n,
            type: r,
            directives: i,
          }) =>
            nr('', e, '\n') +
            t +
            (ns(n)
              ? nr('(\n', ni(nt(n, '\n')), '\n)')
              : nr('(', nt(n, ', '), ')')) +
            ': ' +
            r +
            nr(' ', nt(i, ' ')),
        },
        InputValueDefinition: {
          leave: ({
            description: e,
            name: t,
            type: n,
            defaultValue: r,
            directives: i,
          }) =>
            nr('', e, '\n') + nt([t + ': ' + n, nr('= ', r), nt(i, ' ')], ' '),
        },
        InterfaceTypeDefinition: {
          leave: ({
            description: e,
            name: t,
            interfaces: n,
            directives: r,
            fields: i,
          }) =>
            nr('', e, '\n') +
            nt(
              [
                'interface',
                t,
                nr('implements ', nt(n, ' & ')),
                nt(r, ' '),
                nn(i),
              ],
              ' '
            ),
        },
        UnionTypeDefinition: {
          leave: ({ description: e, name: t, directives: n, types: r }) =>
            nr('', e, '\n') +
            nt(['union', t, nt(n, ' '), nr('= ', nt(r, ' | '))], ' '),
        },
        EnumTypeDefinition: {
          leave: ({ description: e, name: t, directives: n, values: r }) =>
            nr('', e, '\n') + nt(['enum', t, nt(n, ' '), nn(r)], ' '),
        },
        EnumValueDefinition: {
          leave: ({ description: e, name: t, directives: n }) =>
            nr('', e, '\n') + nt([t, nt(n, ' ')], ' '),
        },
        InputObjectTypeDefinition: {
          leave: ({ description: e, name: t, directives: n, fields: r }) =>
            nr('', e, '\n') + nt(['input', t, nt(n, ' '), nn(r)], ' '),
        },
        DirectiveDefinition: {
          leave: ({
            description: e,
            name: t,
            arguments: n,
            repeatable: r,
            locations: i,
          }) =>
            nr('', e, '\n') +
            'directive @' +
            t +
            (ns(n)
              ? nr('(\n', ni(nt(n, '\n')), '\n)')
              : nr('(', nt(n, ', '), ')')) +
            (r ? ' repeatable' : '') +
            ' on ' +
            nt(i, ' | '),
        },
        SchemaExtension: {
          leave: ({ directives: e, operationTypes: t }) =>
            nt(['extend schema', nt(e, ' '), nn(t)], ' '),
        },
        ScalarTypeExtension: {
          leave: ({ name: e, directives: t }) =>
            nt(['extend scalar', e, nt(t, ' ')], ' '),
        },
        ObjectTypeExtension: {
          leave: ({ name: e, interfaces: t, directives: n, fields: r }) =>
            nt(
              [
                'extend type',
                e,
                nr('implements ', nt(t, ' & ')),
                nt(n, ' '),
                nn(r),
              ],
              ' '
            ),
        },
        InterfaceTypeExtension: {
          leave: ({ name: e, interfaces: t, directives: n, fields: r }) =>
            nt(
              [
                'extend interface',
                e,
                nr('implements ', nt(t, ' & ')),
                nt(n, ' '),
                nn(r),
              ],
              ' '
            ),
        },
        UnionTypeExtension: {
          leave: ({ name: e, directives: t, types: n }) =>
            nt(['extend union', e, nt(t, ' '), nr('= ', nt(n, ' | '))], ' '),
        },
        EnumTypeExtension: {
          leave: ({ name: e, directives: t, values: n }) =>
            nt(['extend enum', e, nt(t, ' '), nn(n)], ' '),
        },
        InputObjectTypeExtension: {
          leave: ({ name: e, directives: t, fields: n }) =>
            nt(['extend input', e, nt(t, ' '), nn(n)], ' '),
        },
        TypeCoordinate: { leave: ({ name: e }) => e },
        MemberCoordinate: {
          leave: ({ name: e, memberName: t }) => nt([e, nr('.', t)]),
        },
        ArgumentCoordinate: {
          leave: ({ name: e, fieldName: t, argumentName: n }) =>
            nt([e, nr('.', t), nr('(', n, ':)')]),
        },
        DirectiveCoordinate: { leave: ({ name: e }) => nt(['@', e]) },
        DirectiveArgumentCoordinate: {
          leave: ({ name: e, argumentName: t }) =>
            nt(['@', e, nr('(', t, ':)')]),
        },
      };
      function nt(e, t = '') {
        var n;
        return null !== (n = null == e ? void 0 : e.filter((e) => e).join(t)) &&
          void 0 !== n
          ? n
          : '';
      }
      function nn(e) {
        return nr('{\n', ni(nt(e, '\n')), '\n}');
      }
      function nr(e, t, n = '') {
        return null != t && '' !== t ? e + t + n : '';
      }
      function ni(e) {
        return nr('  ', e.replace(/\n/g, '\n  '));
      }
      function ns(e) {
        var t;
        return (
          null !== (t = null == e ? void 0 : e.some((e) => e.includes('\n'))) &&
          void 0 !== t &&
          t
        );
      }
      function na(e, t) {
        switch (e.kind) {
          case w.NULL:
            return null;
          case w.INT:
            return parseInt(e.value, 10);
          case w.FLOAT:
            return parseFloat(e.value);
          case w.STRING:
          case w.ENUM:
          case w.BOOLEAN:
            return e.value;
          case w.LIST:
            return e.values.map((e) => na(e, t));
          case w.OBJECT:
            return tJ(
              e.fields,
              (e) => e.name.value,
              (e) => na(e.value, t)
            );
          case w.VARIABLE:
            return null == t ? void 0 : t[e.name.value];
        }
      }
      function no(e) {
        if (
          (null != e || to(!1, 'Must provide name.'),
          'string' == typeof e || to(!1, 'Expected name to be a string.'),
          0 === e.length)
        )
          throw new tf('Expected name to be a non-empty string.');
        for (let t = 1; t < e.length; ++t)
          if (!tO(e.charCodeAt(t)))
            throw new tf(
              `Names must only contain [_a-zA-Z0-9] but "${e}" does not.`
            );
        if (!tI(e.charCodeAt(0)))
          throw new tf(`Names must start with [_a-zA-Z] but "${e}" does not.`);
        return e;
      }
      function nl(e) {
        return (
          nu(e) || nc(e) || nd(e) || np(e) || nh(e) || nf(e) || nm(e) || ng(e)
        );
      }
      function nu(e) {
        return tF(e, nC);
      }
      function nc(e) {
        return tF(e, nD);
      }
      function nd(e) {
        return tF(e, nj);
      }
      function np(e) {
        return tF(e, nU);
      }
      function nh(e) {
        return tF(e, nV);
      }
      function nf(e) {
        return tF(e, nY);
      }
      function nm(e) {
        return tF(e, nN);
      }
      function ng(e) {
        return tF(e, n_);
      }
      function ny(e) {
        return nu(e) || nh(e) || nf(e) || (nS(e) && ny(e.ofType));
      }
      function nv(e) {
        return (
          nu(e) || nc(e) || nd(e) || np(e) || nh(e) || (nS(e) && nv(e.ofType))
        );
      }
      function nT(e) {
        return nu(e) || nh(e);
      }
      function nb(e) {
        return nc(e) || nd(e) || np(e);
      }
      function nE(e) {
        return nd(e) || np(e);
      }
      class nN {
        constructor(e) {
          nl(e) || to(!1, `Expected ${tM(e)} to be a GraphQL type.`),
            (this.ofType = e);
        }
        get [Symbol.toStringTag]() {
          return 'GraphQLList';
        }
        toString() {
          return '[' + String(this.ofType) + ']';
        }
        toJSON() {
          return this.toString();
        }
      }
      class n_ {
        constructor(e) {
          (function (e) {
            return nl(e) && !ng(e);
          })(e) || to(!1, `Expected ${tM(e)} to be a GraphQL nullable type.`),
            (this.ofType = e);
        }
        get [Symbol.toStringTag]() {
          return 'GraphQLNonNull';
        }
        toString() {
          return String(this.ofType) + '!';
        }
        toJSON() {
          return this.toString();
        }
      }
      function nS(e) {
        return nm(e) || ng(e);
      }
      function nI(e) {
        if (e) return ng(e) ? e.ofType : e;
      }
      function nO(e) {
        return nu(e) || nc(e) || nd(e) || np(e) || nh(e) || nf(e);
      }
      function nw(e) {
        if (e) {
          let t = e;
          for (; nS(t); ) t = t.ofType;
          return t;
        }
      }
      function nA(e) {
        return 'function' == typeof e ? e() : e;
      }
      function nx(e) {
        return 'function' == typeof e ? e() : e;
      }
      class nC {
        constructor(e) {
          var t, n, r, i;
          let s = null !== (t = e.parseValue) && void 0 !== t ? t : tY;
          (this.name = no(e.name)),
            (this.description = e.description),
            (this.specifiedByURL = e.specifiedByURL),
            (this.serialize =
              null !== (n = e.serialize) && void 0 !== n ? n : tY),
            (this.parseValue = s),
            (this.parseLiteral =
              null !== (r = e.parseLiteral) && void 0 !== r
                ? r
                : (e, t) => s(na(e, t))),
            (this.extensions = t1(e.extensions)),
            (this.astNode = e.astNode),
            (this.extensionASTNodes =
              null !== (i = e.extensionASTNodes) && void 0 !== i ? i : []),
            null == e.specifiedByURL ||
              'string' == typeof e.specifiedByURL ||
              to(
                !1,
                `${
                  this.name
                } must provide "specifiedByURL" as a string, but got: ${tM(
                  e.specifiedByURL
                )}.`
              ),
            null == e.serialize ||
              'function' == typeof e.serialize ||
              to(
                !1,
                `${this.name} must provide "serialize" function. If this custom Scalar is also used as an input type, ensure "parseValue" and "parseLiteral" functions are also provided.`
              ),
            e.parseLiteral &&
              (('function' == typeof e.parseValue &&
                'function' == typeof e.parseLiteral) ||
                to(
                  !1,
                  `${this.name} must provide both "parseValue" and "parseLiteral" functions.`
                ));
        }
        get [Symbol.toStringTag]() {
          return 'GraphQLScalarType';
        }
        toConfig() {
          return {
            name: this.name,
            description: this.description,
            specifiedByURL: this.specifiedByURL,
            serialize: this.serialize,
            parseValue: this.parseValue,
            parseLiteral: this.parseLiteral,
            extensions: this.extensions,
            astNode: this.astNode,
            extensionASTNodes: this.extensionASTNodes,
          };
        }
        toString() {
          return this.name;
        }
        toJSON() {
          return this.toString();
        }
      }
      class nD {
        constructor(e) {
          var t;
          (this.name = no(e.name)),
            (this.description = e.description),
            (this.isTypeOf = e.isTypeOf),
            (this.extensions = t1(e.extensions)),
            (this.astNode = e.astNode),
            (this.extensionASTNodes =
              null !== (t = e.extensionASTNodes) && void 0 !== t ? t : []),
            (this._fields = () => nL(e)),
            (this._interfaces = () => nR(e)),
            null == e.isTypeOf ||
              'function' == typeof e.isTypeOf ||
              to(
                !1,
                `${
                  this.name
                } must provide "isTypeOf" as a function, but got: ${tM(
                  e.isTypeOf
                )}.`
              );
        }
        get [Symbol.toStringTag]() {
          return 'GraphQLObjectType';
        }
        getFields() {
          return (
            'function' == typeof this._fields &&
              (this._fields = this._fields()),
            this._fields
          );
        }
        getInterfaces() {
          return (
            'function' == typeof this._interfaces &&
              (this._interfaces = this._interfaces()),
            this._interfaces
          );
        }
        toConfig() {
          return {
            name: this.name,
            description: this.description,
            interfaces: this.getInterfaces(),
            fields: n$(this.getFields()),
            isTypeOf: this.isTypeOf,
            extensions: this.extensions,
            astNode: this.astNode,
            extensionASTNodes: this.extensionASTNodes,
          };
        }
        toString() {
          return this.name;
        }
        toJSON() {
          return this.toString();
        }
      }
      function nR(e) {
        var t;
        let n = nA(null !== (t = e.interfaces) && void 0 !== t ? t : []);
        return (
          Array.isArray(n) ||
            to(
              !1,
              `${e.name} interfaces must be an Array or a function which returns an Array.`
            ),
          n
        );
      }
      function nL(e) {
        let t = nx(e.fields);
        return (
          nk(t) ||
            to(
              !1,
              `${e.name} fields must be an object with field names as keys or a function which returns such an object.`
            ),
          tK(t, (t, n) => {
            var r;
            nk(t) || to(!1, `${e.name}.${n} field config must be an object.`),
              null == t.resolve ||
                'function' == typeof t.resolve ||
                to(
                  !1,
                  `${
                    e.name
                  }.${n} field resolver must be a function if provided, but got: ${tM(
                    t.resolve
                  )}.`
                );
            let i = null !== (r = t.args) && void 0 !== r ? r : {};
            return (
              nk(i) ||
                to(
                  !1,
                  `${e.name}.${n} args must be an object with argument names as keys.`
                ),
              {
                name: no(n),
                description: t.description,
                type: t.type,
                args: nP(i),
                resolve: t.resolve,
                subscribe: t.subscribe,
                deprecationReason: t.deprecationReason,
                extensions: t1(t.extensions),
                astNode: t.astNode,
              }
            );
          })
        );
      }
      function nP(e) {
        return Object.entries(e).map(([e, t]) => ({
          name: no(e),
          description: t.description,
          type: t.type,
          defaultValue: t.defaultValue,
          deprecationReason: t.deprecationReason,
          extensions: t1(t.extensions),
          astNode: t.astNode,
        }));
      }
      function nk(e) {
        return tl(e) && !Array.isArray(e);
      }
      function n$(e) {
        return tK(e, (e) => ({
          description: e.description,
          type: e.type,
          args: nM(e.args),
          resolve: e.resolve,
          subscribe: e.subscribe,
          deprecationReason: e.deprecationReason,
          extensions: e.extensions,
          astNode: e.astNode,
        }));
      }
      function nM(e) {
        return tJ(
          e,
          (e) => e.name,
          (e) => ({
            description: e.description,
            type: e.type,
            defaultValue: e.defaultValue,
            deprecationReason: e.deprecationReason,
            extensions: e.extensions,
            astNode: e.astNode,
          })
        );
      }
      function nF(e) {
        return ng(e.type) && void 0 === e.defaultValue;
      }
      class nj {
        constructor(e) {
          var t;
          (this.name = no(e.name)),
            (this.description = e.description),
            (this.resolveType = e.resolveType),
            (this.extensions = t1(e.extensions)),
            (this.astNode = e.astNode),
            (this.extensionASTNodes =
              null !== (t = e.extensionASTNodes) && void 0 !== t ? t : []),
            (this._fields = nL.bind(void 0, e)),
            (this._interfaces = nR.bind(void 0, e)),
            null == e.resolveType ||
              'function' == typeof e.resolveType ||
              to(
                !1,
                `${
                  this.name
                } must provide "resolveType" as a function, but got: ${tM(
                  e.resolveType
                )}.`
              );
        }
        get [Symbol.toStringTag]() {
          return 'GraphQLInterfaceType';
        }
        getFields() {
          return (
            'function' == typeof this._fields &&
              (this._fields = this._fields()),
            this._fields
          );
        }
        getInterfaces() {
          return (
            'function' == typeof this._interfaces &&
              (this._interfaces = this._interfaces()),
            this._interfaces
          );
        }
        toConfig() {
          return {
            name: this.name,
            description: this.description,
            interfaces: this.getInterfaces(),
            fields: n$(this.getFields()),
            resolveType: this.resolveType,
            extensions: this.extensions,
            astNode: this.astNode,
            extensionASTNodes: this.extensionASTNodes,
          };
        }
        toString() {
          return this.name;
        }
        toJSON() {
          return this.toString();
        }
      }
      class nU {
        constructor(e) {
          var t;
          (this.name = no(e.name)),
            (this.description = e.description),
            (this.resolveType = e.resolveType),
            (this.extensions = t1(e.extensions)),
            (this.astNode = e.astNode),
            (this.extensionASTNodes =
              null !== (t = e.extensionASTNodes) && void 0 !== t ? t : []),
            (this._types = nB.bind(void 0, e)),
            null == e.resolveType ||
              'function' == typeof e.resolveType ||
              to(
                !1,
                `${
                  this.name
                } must provide "resolveType" as a function, but got: ${tM(
                  e.resolveType
                )}.`
              );
        }
        get [Symbol.toStringTag]() {
          return 'GraphQLUnionType';
        }
        getTypes() {
          return (
            'function' == typeof this._types && (this._types = this._types()),
            this._types
          );
        }
        toConfig() {
          return {
            name: this.name,
            description: this.description,
            types: this.getTypes(),
            resolveType: this.resolveType,
            extensions: this.extensions,
            astNode: this.astNode,
            extensionASTNodes: this.extensionASTNodes,
          };
        }
        toString() {
          return this.name;
        }
        toJSON() {
          return this.toString();
        }
      }
      function nB(e) {
        let t = nA(e.types);
        return (
          Array.isArray(t) ||
            to(
              !1,
              `Must provide Array of types or a function which returns such an array for Union ${e.name}.`
            ),
          t
        );
      }
      class nV {
        constructor(e) {
          var t;
          (this.name = no(e.name)),
            (this.description = e.description),
            (this.extensions = t1(e.extensions)),
            (this.astNode = e.astNode),
            (this.extensionASTNodes =
              null !== (t = e.extensionASTNodes) && void 0 !== t ? t : []),
            (this._values =
              'function' == typeof e.values
                ? e.values
                : nQ(this.name, e.values)),
            (this._valueLookup = null),
            (this._nameLookup = null);
        }
        get [Symbol.toStringTag]() {
          return 'GraphQLEnumType';
        }
        getValues() {
          return (
            'function' == typeof this._values &&
              (this._values = nQ(this.name, this._values())),
            this._values
          );
        }
        getValue(e) {
          return (
            null === this._nameLookup &&
              (this._nameLookup = tG(this.getValues(), (e) => e.name)),
            this._nameLookup[e]
          );
        }
        serialize(e) {
          null === this._valueLookup &&
            (this._valueLookup = new Map(
              this.getValues().map((e) => [e.value, e])
            ));
          let t = this._valueLookup.get(e);
          if (void 0 === t)
            throw new tf(
              `Enum "${this.name}" cannot represent value: ${tM(e)}`
            );
          return t.name;
        }
        parseValue(e) {
          if ('string' != typeof e) {
            let t = tM(e);
            throw new tf(
              `Enum "${this.name}" cannot represent non-string value: ${t}.` +
                nq(this, t)
            );
          }
          let t = this.getValue(e);
          if (null == t)
            throw new tf(
              `Value "${e}" does not exist in "${this.name}" enum.` +
                nq(this, e)
            );
          return t.value;
        }
        parseLiteral(e, t) {
          if (e.kind !== w.ENUM) {
            let t = t5(e);
            throw new tf(
              `Enum "${this.name}" cannot represent non-enum value: ${t}.` +
                nq(this, t),
              { nodes: e }
            );
          }
          let n = this.getValue(e.value);
          if (null == n) {
            let t = t5(e);
            throw new tf(
              `Value "${t}" does not exist in "${this.name}" enum.` +
                nq(this, t),
              { nodes: e }
            );
          }
          return n.value;
        }
        toConfig() {
          let e = tJ(
            this.getValues(),
            (e) => e.name,
            (e) => ({
              description: e.description,
              value: e.value,
              deprecationReason: e.deprecationReason,
              extensions: e.extensions,
              astNode: e.astNode,
            })
          );
          return {
            name: this.name,
            description: this.description,
            values: e,
            extensions: this.extensions,
            astNode: this.astNode,
            extensionASTNodes: this.extensionASTNodes,
          };
        }
        toString() {
          return this.name;
        }
        toJSON() {
          return this.toString();
        }
      }
      function nq(e, t) {
        return tQ(
          'the enum value',
          tW(
            t,
            e.getValues().map((e) => e.name)
          )
        );
      }
      function nQ(e, t) {
        return (
          nk(t) ||
            to(!1, `${e} values must be an object with value names as keys.`),
          Object.entries(t).map(
            ([t, n]) => (
              nk(n) ||
                to(
                  !1,
                  `${e}.${t} must refer to an object with a "value" key representing an internal value but got: ${tM(
                    n
                  )}.`
                ),
              {
                name: (function (e) {
                  if ('true' === e || 'false' === e || 'null' === e)
                    throw new tf(`Enum values cannot be named: ${e}`);
                  return no(e);
                })(t),
                description: n.description,
                value: void 0 !== n.value ? n.value : t,
                deprecationReason: n.deprecationReason,
                extensions: t1(n.extensions),
                astNode: n.astNode,
              }
            )
          )
        );
      }
      class nY {
        constructor(e) {
          var t, n;
          (this.name = no(e.name)),
            (this.description = e.description),
            (this.extensions = t1(e.extensions)),
            (this.astNode = e.astNode),
            (this.extensionASTNodes =
              null !== (t = e.extensionASTNodes) && void 0 !== t ? t : []),
            (this.isOneOf = null !== (n = e.isOneOf) && void 0 !== n && n),
            (this._fields = nG.bind(void 0, e));
        }
        get [Symbol.toStringTag]() {
          return 'GraphQLInputObjectType';
        }
        getFields() {
          return (
            'function' == typeof this._fields &&
              (this._fields = this._fields()),
            this._fields
          );
        }
        toConfig() {
          let e = tK(this.getFields(), (e) => ({
            description: e.description,
            type: e.type,
            defaultValue: e.defaultValue,
            deprecationReason: e.deprecationReason,
            extensions: e.extensions,
            astNode: e.astNode,
          }));
          return {
            name: this.name,
            description: this.description,
            fields: e,
            extensions: this.extensions,
            astNode: this.astNode,
            extensionASTNodes: this.extensionASTNodes,
            isOneOf: this.isOneOf,
          };
        }
        toString() {
          return this.name;
        }
        toJSON() {
          return this.toString();
        }
      }
      function nG(e) {
        let t = nx(e.fields);
        return (
          nk(t) ||
            to(
              !1,
              `${e.name} fields must be an object with field names as keys or a function which returns such an object.`
            ),
          tK(
            t,
            (t, n) => (
              'resolve' in t &&
                to(
                  !1,
                  `${e.name}.${n} field has a resolve property, but Input Types cannot define resolvers.`
                ),
              {
                name: no(n),
                description: t.description,
                type: t.type,
                defaultValue: t.defaultValue,
                deprecationReason: t.deprecationReason,
                extensions: t1(t.extensions),
                astNode: t.astNode,
              }
            )
          )
        );
      }
      function nJ(e) {
        return ng(e.type) && void 0 === e.defaultValue;
      }
      function nK(e, t, n) {
        return (
          t === n ||
          (ng(n)
            ? !!ng(t) && nK(e, t.ofType, n.ofType)
            : ng(t)
            ? nK(e, t.ofType, n)
            : nm(n)
            ? !!nm(t) && nK(e, t.ofType, n.ofType)
            : !nm(t) && nE(n) && (nd(t) || nc(t)) && e.isSubType(n, t))
        );
      }
      function nH(e, t, n) {
        return (
          t === n ||
          (nE(t)
            ? nE(n)
              ? e.getPossibleTypes(t).some((t) => e.isSubType(n, t))
              : e.isSubType(t, n)
            : !!nE(n) && e.isSubType(n, t))
        );
      }
      let nz = new nC({
          name: 'Int',
          description:
            'The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.',
          serialize(e) {
            let t = n4(e);
            if ('boolean' == typeof t) return t ? 1 : 0;
            let n = t;
            if (
              ('string' == typeof t && '' !== t && (n = Number(t)),
              'number' != typeof n || !Number.isInteger(n))
            )
              throw new tf(`Int cannot represent non-integer value: ${tM(t)}`);
            if (n > 2147483647 || n < -2147483648)
              throw new tf(
                'Int cannot represent non 32-bit signed integer value: ' + tM(t)
              );
            return n;
          },
          parseValue(e) {
            if ('number' != typeof e || !Number.isInteger(e))
              throw new tf(`Int cannot represent non-integer value: ${tM(e)}`);
            if (e > 2147483647 || e < -2147483648)
              throw new tf(
                `Int cannot represent non 32-bit signed integer value: ${e}`
              );
            return e;
          },
          parseLiteral(e) {
            if (e.kind !== w.INT)
              throw new tf(`Int cannot represent non-integer value: ${t5(e)}`, {
                nodes: e,
              });
            let t = parseInt(e.value, 10);
            if (t > 2147483647 || t < -2147483648)
              throw new tf(
                `Int cannot represent non 32-bit signed integer value: ${e.value}`,
                { nodes: e }
              );
            return t;
          },
        }),
        nX = new nC({
          name: 'Float',
          description:
            'The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).',
          serialize(e) {
            let t = n4(e);
            if ('boolean' == typeof t) return t ? 1 : 0;
            let n = t;
            if (
              ('string' == typeof t && '' !== t && (n = Number(t)),
              'number' != typeof n || !Number.isFinite(n))
            )
              throw new tf(
                `Float cannot represent non numeric value: ${tM(t)}`
              );
            return n;
          },
          parseValue(e) {
            if ('number' != typeof e || !Number.isFinite(e))
              throw new tf(
                `Float cannot represent non numeric value: ${tM(e)}`
              );
            return e;
          },
          parseLiteral(e) {
            if (e.kind !== w.FLOAT && e.kind !== w.INT)
              throw new tf(
                `Float cannot represent non numeric value: ${t5(e)}`,
                e
              );
            return parseFloat(e.value);
          },
        }),
        nW = new nC({
          name: 'String',
          description:
            'The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.',
          serialize(e) {
            let t = n4(e);
            if ('string' == typeof t) return t;
            if ('boolean' == typeof t) return t ? 'true' : 'false';
            if ('number' == typeof t && Number.isFinite(t)) return t.toString();
            throw new tf(`String cannot represent value: ${tM(e)}`);
          },
          parseValue(e) {
            if ('string' != typeof e)
              throw new tf(
                `String cannot represent a non string value: ${tM(e)}`
              );
            return e;
          },
          parseLiteral(e) {
            if (e.kind !== w.STRING)
              throw new tf(
                `String cannot represent a non string value: ${t5(e)}`,
                { nodes: e }
              );
            return e.value;
          },
        }),
        nZ = new nC({
          name: 'Boolean',
          description:
            'The `Boolean` scalar type represents `true` or `false`.',
          serialize(e) {
            let t = n4(e);
            if ('boolean' == typeof t) return t;
            if (Number.isFinite(t)) return 0 !== t;
            throw new tf(
              `Boolean cannot represent a non boolean value: ${tM(t)}`
            );
          },
          parseValue(e) {
            if ('boolean' != typeof e)
              throw new tf(
                `Boolean cannot represent a non boolean value: ${tM(e)}`
              );
            return e;
          },
          parseLiteral(e) {
            if (e.kind !== w.BOOLEAN)
              throw new tf(
                `Boolean cannot represent a non boolean value: ${t5(e)}`,
                { nodes: e }
              );
            return e.value;
          },
        }),
        n0 = new nC({
          name: 'ID',
          description:
            'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.',
          serialize(e) {
            let t = n4(e);
            if ('string' == typeof t) return t;
            if (Number.isInteger(t)) return String(t);
            throw new tf(`ID cannot represent value: ${tM(e)}`);
          },
          parseValue(e) {
            if ('string' == typeof e) return e;
            if ('number' == typeof e && Number.isInteger(e))
              return e.toString();
            throw new tf(`ID cannot represent value: ${tM(e)}`);
          },
          parseLiteral(e) {
            if (e.kind !== w.STRING && e.kind !== w.INT)
              throw new tf(
                'ID cannot represent a non-string and non-integer value: ' +
                  t5(e),
                { nodes: e }
              );
            return e.value;
          },
        }),
        n1 = Object.freeze([nW, nz, nX, nZ, n0]);
      function n2(e) {
        return n1.some(({ name: t }) => e.name === t);
      }
      function n4(e) {
        if (tl(e)) {
          if ('function' == typeof e.valueOf) {
            let t = e.valueOf();
            if (!tl(t)) return t;
          }
          if ('function' == typeof e.toJSON) return e.toJSON();
        }
        return e;
      }
      class n3 {
        constructor(e) {
          var t, n;
          (this.name = no(e.name)),
            (this.description = e.description),
            (this.locations = e.locations),
            (this.isRepeatable =
              null !== (t = e.isRepeatable) && void 0 !== t && t),
            (this.extensions = t1(e.extensions)),
            (this.astNode = e.astNode),
            Array.isArray(e.locations) ||
              to(!1, `@${e.name} locations must be an Array.`);
          let r = null !== (n = e.args) && void 0 !== n ? n : {};
          (tl(r) && !Array.isArray(r)) ||
            to(
              !1,
              `@${e.name} args must be an object with argument names as keys.`
            ),
            (this.args = nP(r));
        }
        get [Symbol.toStringTag]() {
          return 'GraphQLDirective';
        }
        toConfig() {
          return {
            name: this.name,
            description: this.description,
            locations: this.locations,
            args: nM(this.args),
            isRepeatable: this.isRepeatable,
            extensions: this.extensions,
            astNode: this.astNode,
          };
        }
        toString() {
          return '@' + this.name;
        }
        toJSON() {
          return this.toString();
        }
      }
      let n9 = new n3({
          name: 'include',
          description:
            'Directs the executor to include this field or fragment only when the `if` argument is true.',
          locations: [O.FIELD, O.FRAGMENT_SPREAD, O.INLINE_FRAGMENT],
          args: {
            if: { type: new n_(nZ), description: 'Included when true.' },
          },
        }),
        n7 = new n3({
          name: 'skip',
          description:
            'Directs the executor to skip this field or fragment when the `if` argument is true.',
          locations: [O.FIELD, O.FRAGMENT_SPREAD, O.INLINE_FRAGMENT],
          args: { if: { type: new n_(nZ), description: 'Skipped when true.' } },
        }),
        n6 = new n3({
          name: 'deprecated',
          description:
            'Marks an element of a GraphQL schema as no longer supported.',
          locations: [
            O.FIELD_DEFINITION,
            O.ARGUMENT_DEFINITION,
            O.INPUT_FIELD_DEFINITION,
            O.ENUM_VALUE,
          ],
          args: {
            reason: {
              type: nW,
              description:
                'Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by [CommonMark](https://commonmark.org/).',
              defaultValue: 'No longer supported',
            },
          },
        }),
        n8 = new n3({
          name: 'specifiedBy',
          description:
            'Exposes a URL that specifies the behavior of this scalar.',
          locations: [O.SCALAR],
          args: {
            url: {
              type: new n_(nW),
              description:
                'The URL that specifies the behavior of this scalar.',
            },
          },
        }),
        n5 = new n3({
          name: 'oneOf',
          description:
            'Indicates exactly one field must be supplied and this field must not be `null`.',
          locations: [O.INPUT_OBJECT],
          args: {},
        }),
        re = Object.freeze([n9, n7, n6, n8, n5]);
      function rt(e) {
        return re.some(({ name: t }) => t === e.name);
      }
      function rn(e) {
        return (
          'object' == typeof e &&
          'function' == typeof (null == e ? void 0 : e[Symbol.iterator])
        );
      }
      let rr = /^-?(?:0|[1-9][0-9]*)$/,
        ri = new nD({
          name: '__Schema',
          description:
            'A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.',
          fields: () => ({
            description: { type: nW, resolve: (e) => e.description },
            types: {
              description: 'A list of all types supported by this server.',
              type: new n_(new nN(new n_(ro))),
              resolve: (e) => Object.values(e.getTypeMap()),
            },
            queryType: {
              description: 'The type that query operations will be rooted at.',
              type: new n_(ro),
              resolve: (e) => e.getQueryType(),
            },
            mutationType: {
              description:
                'If this server supports mutation, the type that mutation operations will be rooted at.',
              type: ro,
              resolve: (e) => e.getMutationType(),
            },
            subscriptionType: {
              description:
                'If this server support subscription, the type that subscription operations will be rooted at.',
              type: ro,
              resolve: (e) => e.getSubscriptionType(),
            },
            directives: {
              description: 'A list of all directives supported by this server.',
              type: new n_(new nN(new n_(rs))),
              resolve: (e) => e.getDirectives(),
            },
          }),
        }),
        rs = new nD({
          name: '__Directive',
          description:
            "A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.\n\nIn some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.",
          fields: () => ({
            name: { type: new n_(nW), resolve: (e) => e.name },
            description: { type: nW, resolve: (e) => e.description },
            isRepeatable: { type: new n_(nZ), resolve: (e) => e.isRepeatable },
            locations: {
              type: new n_(new nN(new n_(ra))),
              resolve: (e) => e.locations,
            },
            args: {
              type: new n_(new nN(new n_(ru))),
              args: { includeDeprecated: { type: nZ, defaultValue: !1 } },
              resolve: (e, { includeDeprecated: t }) =>
                t ? e.args : e.args.filter((e) => null == e.deprecationReason),
            },
          }),
        }),
        ra = new nV({
          name: '__DirectiveLocation',
          description:
            'A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.',
          values: {
            QUERY: {
              value: O.QUERY,
              description: 'Location adjacent to a query operation.',
            },
            MUTATION: {
              value: O.MUTATION,
              description: 'Location adjacent to a mutation operation.',
            },
            SUBSCRIPTION: {
              value: O.SUBSCRIPTION,
              description: 'Location adjacent to a subscription operation.',
            },
            FIELD: {
              value: O.FIELD,
              description: 'Location adjacent to a field.',
            },
            FRAGMENT_DEFINITION: {
              value: O.FRAGMENT_DEFINITION,
              description: 'Location adjacent to a fragment definition.',
            },
            FRAGMENT_SPREAD: {
              value: O.FRAGMENT_SPREAD,
              description: 'Location adjacent to a fragment spread.',
            },
            INLINE_FRAGMENT: {
              value: O.INLINE_FRAGMENT,
              description: 'Location adjacent to an inline fragment.',
            },
            VARIABLE_DEFINITION: {
              value: O.VARIABLE_DEFINITION,
              description: 'Location adjacent to a variable definition.',
            },
            SCHEMA: {
              value: O.SCHEMA,
              description: 'Location adjacent to a schema definition.',
            },
            SCALAR: {
              value: O.SCALAR,
              description: 'Location adjacent to a scalar definition.',
            },
            OBJECT: {
              value: O.OBJECT,
              description: 'Location adjacent to an object type definition.',
            },
            FIELD_DEFINITION: {
              value: O.FIELD_DEFINITION,
              description: 'Location adjacent to a field definition.',
            },
            ARGUMENT_DEFINITION: {
              value: O.ARGUMENT_DEFINITION,
              description: 'Location adjacent to an argument definition.',
            },
            INTERFACE: {
              value: O.INTERFACE,
              description: 'Location adjacent to an interface definition.',
            },
            UNION: {
              value: O.UNION,
              description: 'Location adjacent to a union definition.',
            },
            ENUM: {
              value: O.ENUM,
              description: 'Location adjacent to an enum definition.',
            },
            ENUM_VALUE: {
              value: O.ENUM_VALUE,
              description: 'Location adjacent to an enum value definition.',
            },
            INPUT_OBJECT: {
              value: O.INPUT_OBJECT,
              description:
                'Location adjacent to an input object type definition.',
            },
            INPUT_FIELD_DEFINITION: {
              value: O.INPUT_FIELD_DEFINITION,
              description:
                'Location adjacent to an input object field definition.',
            },
          },
        }),
        ro = new nD({
          name: '__Type',
          description:
            'The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.',
          fields: () => ({
            kind: {
              type: new n_(rd),
              resolve: (e) =>
                nu(e)
                  ? x.SCALAR
                  : nc(e)
                  ? x.OBJECT
                  : nd(e)
                  ? x.INTERFACE
                  : np(e)
                  ? x.UNION
                  : nh(e)
                  ? x.ENUM
                  : nf(e)
                  ? x.INPUT_OBJECT
                  : nm(e)
                  ? x.LIST
                  : ng(e)
                  ? x.NON_NULL
                  : void tu(!1, `Unexpected type: "${tM(e)}".`),
            },
            name: { type: nW, resolve: (e) => ('name' in e ? e.name : void 0) },
            description: {
              type: nW,
              resolve: (e) => ('description' in e ? e.description : void 0),
            },
            specifiedByURL: {
              type: nW,
              resolve: (e) =>
                'specifiedByURL' in e ? e.specifiedByURL : void 0,
            },
            fields: {
              type: new nN(new n_(rl)),
              args: { includeDeprecated: { type: nZ, defaultValue: !1 } },
              resolve(e, { includeDeprecated: t }) {
                if (nc(e) || nd(e)) {
                  let n = Object.values(e.getFields());
                  return t ? n : n.filter((e) => null == e.deprecationReason);
                }
              },
            },
            interfaces: {
              type: new nN(new n_(ro)),
              resolve(e) {
                if (nc(e) || nd(e)) return e.getInterfaces();
              },
            },
            possibleTypes: {
              type: new nN(new n_(ro)),
              resolve(e, t, n, { schema: r }) {
                if (nE(e)) return r.getPossibleTypes(e);
              },
            },
            enumValues: {
              type: new nN(new n_(rc)),
              args: { includeDeprecated: { type: nZ, defaultValue: !1 } },
              resolve(e, { includeDeprecated: t }) {
                if (nh(e)) {
                  let n = e.getValues();
                  return t ? n : n.filter((e) => null == e.deprecationReason);
                }
              },
            },
            inputFields: {
              type: new nN(new n_(ru)),
              args: { includeDeprecated: { type: nZ, defaultValue: !1 } },
              resolve(e, { includeDeprecated: t }) {
                if (nf(e)) {
                  let n = Object.values(e.getFields());
                  return t ? n : n.filter((e) => null == e.deprecationReason);
                }
              },
            },
            ofType: {
              type: ro,
              resolve: (e) => ('ofType' in e ? e.ofType : void 0),
            },
            isOneOf: {
              type: nZ,
              resolve: (e) => {
                if (nf(e)) return e.isOneOf;
              },
            },
          }),
        }),
        rl = new nD({
          name: '__Field',
          description:
            'Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.',
          fields: () => ({
            name: { type: new n_(nW), resolve: (e) => e.name },
            description: { type: nW, resolve: (e) => e.description },
            args: {
              type: new n_(new nN(new n_(ru))),
              args: { includeDeprecated: { type: nZ, defaultValue: !1 } },
              resolve: (e, { includeDeprecated: t }) =>
                t ? e.args : e.args.filter((e) => null == e.deprecationReason),
            },
            type: { type: new n_(ro), resolve: (e) => e.type },
            isDeprecated: {
              type: new n_(nZ),
              resolve: (e) => null != e.deprecationReason,
            },
            deprecationReason: {
              type: nW,
              resolve: (e) => e.deprecationReason,
            },
          }),
        }),
        ru = new nD({
          name: '__InputValue',
          description:
            'Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.',
          fields: () => ({
            name: { type: new n_(nW), resolve: (e) => e.name },
            description: { type: nW, resolve: (e) => e.description },
            type: { type: new n_(ro), resolve: (e) => e.type },
            defaultValue: {
              type: nW,
              description:
                'A GraphQL-formatted string representing the default value for this input value.',
              resolve(e) {
                let { type: t, defaultValue: n } = e,
                  r = (function e(t, n) {
                    if (ng(n)) {
                      let r = e(t, n.ofType);
                      return (null == r ? void 0 : r.kind) === w.NULL
                        ? null
                        : r;
                    }
                    if (null === t) return { kind: w.NULL };
                    if (void 0 === t) return null;
                    if (nm(n)) {
                      let r = n.ofType;
                      if (rn(t)) {
                        let n = [];
                        for (let i of t) {
                          let t = e(i, r);
                          null != t && n.push(t);
                        }
                        return { kind: w.LIST, values: n };
                      }
                      return e(t, r);
                    }
                    if (nf(n)) {
                      if (!tl(t)) return null;
                      let r = [];
                      for (let i of Object.values(n.getFields())) {
                        let n = e(t[i.name], i.type);
                        n &&
                          r.push({
                            kind: w.OBJECT_FIELD,
                            name: { kind: w.NAME, value: i.name },
                            value: n,
                          });
                      }
                      return { kind: w.OBJECT, fields: r };
                    }
                    if (nT(n)) {
                      let e = n.serialize(t);
                      if (null == e) return null;
                      if ('boolean' == typeof e)
                        return { kind: w.BOOLEAN, value: e };
                      if ('number' == typeof e && Number.isFinite(e)) {
                        let t = String(e);
                        return rr.test(t)
                          ? { kind: w.INT, value: t }
                          : { kind: w.FLOAT, value: t };
                      }
                      if ('string' == typeof e)
                        return nh(n)
                          ? { kind: w.ENUM, value: e }
                          : n === n0 && rr.test(e)
                          ? { kind: w.INT, value: e }
                          : { kind: w.STRING, value: e };
                      throw TypeError(`Cannot convert value to AST: ${tM(e)}.`);
                    }
                    tu(!1, 'Unexpected input type: ' + tM(n));
                  })(n, t);
                return r ? t5(r) : null;
              },
            },
            isDeprecated: {
              type: new n_(nZ),
              resolve: (e) => null != e.deprecationReason,
            },
            deprecationReason: {
              type: nW,
              resolve: (e) => e.deprecationReason,
            },
          }),
        }),
        rc = new nD({
          name: '__EnumValue',
          description:
            'One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.',
          fields: () => ({
            name: { type: new n_(nW), resolve: (e) => e.name },
            description: { type: nW, resolve: (e) => e.description },
            isDeprecated: {
              type: new n_(nZ),
              resolve: (e) => null != e.deprecationReason,
            },
            deprecationReason: {
              type: nW,
              resolve: (e) => e.deprecationReason,
            },
          }),
        });
      !(function (e) {
        (e.SCALAR = 'SCALAR'),
          (e.OBJECT = 'OBJECT'),
          (e.INTERFACE = 'INTERFACE'),
          (e.UNION = 'UNION'),
          (e.ENUM = 'ENUM'),
          (e.INPUT_OBJECT = 'INPUT_OBJECT'),
          (e.LIST = 'LIST'),
          (e.NON_NULL = 'NON_NULL');
      })(x || (x = {}));
      let rd = new nV({
          name: '__TypeKind',
          description:
            'An enum describing what kind of type a given `__Type` is.',
          values: {
            SCALAR: {
              value: x.SCALAR,
              description: 'Indicates this type is a scalar.',
            },
            OBJECT: {
              value: x.OBJECT,
              description:
                'Indicates this type is an object. `fields` and `interfaces` are valid fields.',
            },
            INTERFACE: {
              value: x.INTERFACE,
              description:
                'Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields.',
            },
            UNION: {
              value: x.UNION,
              description:
                'Indicates this type is a union. `possibleTypes` is a valid field.',
            },
            ENUM: {
              value: x.ENUM,
              description:
                'Indicates this type is an enum. `enumValues` is a valid field.',
            },
            INPUT_OBJECT: {
              value: x.INPUT_OBJECT,
              description:
                'Indicates this type is an input object. `inputFields` is a valid field.',
            },
            LIST: {
              value: x.LIST,
              description:
                'Indicates this type is a list. `ofType` is a valid field.',
            },
            NON_NULL: {
              value: x.NON_NULL,
              description:
                'Indicates this type is a non-null. `ofType` is a valid field.',
            },
          },
        }),
        rp = {
          name: '__schema',
          type: new n_(ri),
          description: 'Access the current type schema of this server.',
          args: [],
          resolve: (e, t, n, { schema: r }) => r,
          deprecationReason: void 0,
          extensions: Object.create(null),
          astNode: void 0,
        },
        rh = {
          name: '__type',
          type: ro,
          description: 'Request the type information of a single type.',
          args: [
            {
              name: 'name',
              description: void 0,
              type: new n_(nW),
              defaultValue: void 0,
              deprecationReason: void 0,
              extensions: Object.create(null),
              astNode: void 0,
            },
          ],
          resolve: (e, { name: t }, n, { schema: r }) => r.getType(t),
          deprecationReason: void 0,
          extensions: Object.create(null),
          astNode: void 0,
        },
        rf = {
          name: '__typename',
          type: new n_(nW),
          description: 'The name of the current Object type at runtime.',
          args: [],
          resolve: (e, t, n, { parentType: r }) => r.name,
          deprecationReason: void 0,
          extensions: Object.create(null),
          astNode: void 0,
        },
        rm = Object.freeze([ri, rs, ra, ro, rl, ru, rc, rd]);
      function rg(e) {
        return rm.some(({ name: t }) => e.name === t);
      }
      class ry {
        constructor(e) {
          var t, n;
          (this.__validationErrors = !0 === e.assumeValid ? [] : void 0),
            tl(e) || to(!1, 'Must provide configuration object.'),
            !e.types ||
              Array.isArray(e.types) ||
              to(
                !1,
                `"types" must be Array if provided but got: ${tM(e.types)}.`
              ),
            !e.directives ||
              Array.isArray(e.directives) ||
              to(
                !1,
                `"directives" must be Array if provided but got: ${tM(
                  e.directives
                )}.`
              ),
            (this.description = e.description),
            (this.extensions = t1(e.extensions)),
            (this.astNode = e.astNode),
            (this.extensionASTNodes =
              null !== (t = e.extensionASTNodes) && void 0 !== t ? t : []),
            (this._queryType = e.query),
            (this._mutationType = e.mutation),
            (this._subscriptionType = e.subscription),
            (this._directives =
              null !== (n = e.directives) && void 0 !== n ? n : re);
          let r = new Set(e.types);
          if (null != e.types) for (let t of e.types) r.delete(t), rv(t, r);
          for (let e of (null != this._queryType && rv(this._queryType, r),
          null != this._mutationType && rv(this._mutationType, r),
          null != this._subscriptionType && rv(this._subscriptionType, r),
          this._directives))
            if (tF(e, n3)) for (let t of e.args) rv(t.type, r);
          for (let e of (rv(ri, r),
          (this._typeMap = Object.create(null)),
          (this._subTypeMap = Object.create(null)),
          (this._implementationsMap = Object.create(null)),
          r)) {
            if (null == e) continue;
            let t = e.name;
            if (
              (t ||
                to(
                  !1,
                  'One of the provided types for building the Schema is missing a name.'
                ),
              void 0 !== this._typeMap[t])
            )
              throw Error(
                `Schema must contain uniquely named types but contains multiple types named "${t}".`
              );
            if (((this._typeMap[t] = e), nd(e))) {
              for (let t of e.getInterfaces())
                if (nd(t)) {
                  let n = this._implementationsMap[t.name];
                  void 0 === n &&
                    (n = this._implementationsMap[t.name] =
                      { objects: [], interfaces: [] }),
                    n.interfaces.push(e);
                }
            } else if (nc(e)) {
              for (let t of e.getInterfaces())
                if (nd(t)) {
                  let n = this._implementationsMap[t.name];
                  void 0 === n &&
                    (n = this._implementationsMap[t.name] =
                      { objects: [], interfaces: [] }),
                    n.objects.push(e);
                }
            }
          }
        }
        get [Symbol.toStringTag]() {
          return 'GraphQLSchema';
        }
        getQueryType() {
          return this._queryType;
        }
        getMutationType() {
          return this._mutationType;
        }
        getSubscriptionType() {
          return this._subscriptionType;
        }
        getRootType(e) {
          switch (e) {
            case I.QUERY:
              return this.getQueryType();
            case I.MUTATION:
              return this.getMutationType();
            case I.SUBSCRIPTION:
              return this.getSubscriptionType();
          }
        }
        getTypeMap() {
          return this._typeMap;
        }
        getType(e) {
          return this.getTypeMap()[e];
        }
        getPossibleTypes(e) {
          return np(e) ? e.getTypes() : this.getImplementations(e).objects;
        }
        getImplementations(e) {
          let t = this._implementationsMap[e.name];
          return null != t ? t : { objects: [], interfaces: [] };
        }
        isSubType(e, t) {
          let n = this._subTypeMap[e.name];
          if (void 0 === n) {
            if (((n = Object.create(null)), np(e)))
              for (let t of e.getTypes()) n[t.name] = !0;
            else {
              let t = this.getImplementations(e);
              for (let e of t.objects) n[e.name] = !0;
              for (let e of t.interfaces) n[e.name] = !0;
            }
            this._subTypeMap[e.name] = n;
          }
          return void 0 !== n[t.name];
        }
        getDirectives() {
          return this._directives;
        }
        getDirective(e) {
          return this.getDirectives().find((t) => t.name === e);
        }
        toConfig() {
          return {
            description: this.description,
            query: this.getQueryType(),
            mutation: this.getMutationType(),
            subscription: this.getSubscriptionType(),
            types: Object.values(this.getTypeMap()),
            directives: this.getDirectives(),
            extensions: this.extensions,
            astNode: this.astNode,
            extensionASTNodes: this.extensionASTNodes,
            assumeValid: void 0 !== this.__validationErrors,
          };
        }
      }
      function rv(e, t) {
        let n = nw(e);
        if (!t.has(n)) {
          if ((t.add(n), np(n))) for (let e of n.getTypes()) rv(e, t);
          else if (nc(n) || nd(n)) {
            for (let e of n.getInterfaces()) rv(e, t);
            for (let e of Object.values(n.getFields()))
              for (let n of (rv(e.type, t), e.args)) rv(n.type, t);
          } else if (nf(n))
            for (let e of Object.values(n.getFields())) rv(e.type, t);
        }
        return t;
      }
      function rT(e) {
        if (
          (!(function (e) {
            if (!tF(e, ry))
              throw Error(`Expected ${tM(e)} to be a GraphQL schema.`);
          })(e),
          e.__validationErrors)
        )
          return e.__validationErrors;
        let t = new rE(e);
        (function (e) {
          var t, n, r;
          let i = e.schema,
            s = i.getQueryType();
          s
            ? nc(s) ||
              e.reportError(
                `Query root type must be Object type, it cannot be ${tM(s)}.`,
                null !== (t = rN(i, I.QUERY)) && void 0 !== t ? t : s.astNode
              )
            : e.reportError('Query root type must be provided.', i.astNode);
          let a = i.getMutationType();
          a &&
            !nc(a) &&
            e.reportError(
              `Mutation root type must be Object type if provided, it cannot be ${tM(
                a
              )}.`,
              null !== (n = rN(i, I.MUTATION)) && void 0 !== n ? n : a.astNode
            );
          let o = i.getSubscriptionType();
          o &&
            !nc(o) &&
            e.reportError(
              `Subscription root type must be Object type if provided, it cannot be ${tM(
                o
              )}.`,
              null !== (r = rN(i, I.SUBSCRIPTION)) && void 0 !== r
                ? r
                : o.astNode
            );
        })(t),
          (function (e) {
            for (let n of e.schema.getDirectives()) {
              if (!tF(n, n3)) {
                e.reportError(
                  `Expected directive but got: ${tM(n)}.`,
                  null == n ? void 0 : n.astNode
                );
                continue;
              }
              for (let r of (r_(e, n),
              0 === n.locations.length &&
                e.reportError(
                  `Directive @${n.name} must include 1 or more locations.`,
                  n.astNode
                ),
              n.args))
                if (
                  (r_(e, r),
                  ny(r.type) ||
                    e.reportError(
                      `The type of @${n.name}(${
                        r.name
                      }:) must be Input Type but got: ${tM(r.type)}.`,
                      r.astNode
                    ),
                  nF(r) && null != r.deprecationReason)
                ) {
                  var t;
                  e.reportError(
                    `Required argument @${n.name}(${r.name}:) cannot be deprecated.`,
                    [
                      rA(r.astNode),
                      null === (t = r.astNode) || void 0 === t
                        ? void 0
                        : t.type,
                    ]
                  );
                }
            }
          })(t),
          (function (e) {
            let t = (function (e) {
              let t = Object.create(null),
                n = [],
                r = Object.create(null);
              return function i(s) {
                if (!t[s.name]) {
                  for (let a of ((t[s.name] = !0),
                  (r[s.name] = n.length),
                  Object.values(s.getFields())))
                    if (ng(a.type) && nf(a.type.ofType)) {
                      let t = a.type.ofType,
                        s = r[t.name];
                      if ((n.push(a), void 0 === s)) i(t);
                      else {
                        let r = n.slice(s),
                          i = r.map((e) => e.name).join('.');
                        e.reportError(
                          `Cannot reference Input Object "${t.name}" within itself through a series of non-null fields: "${i}".`,
                          r.map((e) => e.astNode)
                        );
                      }
                      n.pop();
                    }
                  r[s.name] = void 0;
                }
              };
            })(e);
            for (let n of Object.values(e.schema.getTypeMap())) {
              if (!nO(n)) {
                e.reportError(
                  `Expected GraphQL named type but got: ${tM(n)}.`,
                  n.astNode
                );
                continue;
              }
              rg(n) || r_(e, n),
                nc(n)
                  ? (rS(e, n), rI(e, n))
                  : nd(n)
                  ? (rS(e, n), rI(e, n))
                  : np(n)
                  ? (function (e, t) {
                      let n = t.getTypes();
                      0 === n.length &&
                        e.reportError(
                          `Union type ${t.name} must define one or more member types.`,
                          [t.astNode, ...t.extensionASTNodes]
                        );
                      let r = Object.create(null);
                      for (let i of n) {
                        if (r[i.name]) {
                          e.reportError(
                            `Union type ${t.name} can only include type ${i.name} once.`,
                            rw(t, i.name)
                          );
                          continue;
                        }
                        (r[i.name] = !0),
                          nc(i) ||
                            e.reportError(
                              `Union type ${
                                t.name
                              } can only include Object types, it cannot include ${tM(
                                i
                              )}.`,
                              rw(t, String(i))
                            );
                      }
                    })(e, n)
                  : nh(n)
                  ? (function (e, t) {
                      let n = t.getValues();
                      for (let r of (0 === n.length &&
                        e.reportError(
                          `Enum type ${t.name} must define one or more values.`,
                          [t.astNode, ...t.extensionASTNodes]
                        ),
                      n))
                        r_(e, r);
                    })(e, n)
                  : nf(n) &&
                    ((function (e, t) {
                      let n = Object.values(t.getFields());
                      for (let s of (0 === n.length &&
                        e.reportError(
                          `Input Object type ${t.name} must define one or more fields.`,
                          [t.astNode, ...t.extensionASTNodes]
                        ),
                      n)) {
                        var r, i;
                        r_(e, s),
                          ny(s.type) ||
                            e.reportError(
                              `The type of ${t.name}.${
                                s.name
                              } must be Input Type but got: ${tM(s.type)}.`,
                              null === (r = s.astNode) || void 0 === r
                                ? void 0
                                : r.type
                            ),
                          nJ(s) &&
                            null != s.deprecationReason &&
                            e.reportError(
                              `Required input field ${t.name}.${s.name} cannot be deprecated.`,
                              [
                                rA(s.astNode),
                                null === (i = s.astNode) || void 0 === i
                                  ? void 0
                                  : i.type,
                              ]
                            ),
                          t.isOneOf &&
                            (function (e, t, n) {
                              if (ng(t.type)) {
                                var r;
                                n.reportError(
                                  `OneOf input field ${e.name}.${t.name} must be nullable.`,
                                  null === (r = t.astNode) || void 0 === r
                                    ? void 0
                                    : r.type
                                );
                              }
                              void 0 !== t.defaultValue &&
                                n.reportError(
                                  `OneOf input field ${e.name}.${t.name} cannot have a default value.`,
                                  t.astNode
                                );
                            })(t, s, e);
                      }
                    })(e, n),
                    t(n));
            }
          })(t);
        let n = t.getErrors();
        return (e.__validationErrors = n), n;
      }
      function rb(e) {
        let t = rT(e);
        if (0 !== t.length) throw Error(t.map((e) => e.message).join('\n\n'));
      }
      class rE {
        constructor(e) {
          (this._errors = []), (this.schema = e);
        }
        reportError(e, t) {
          let n = Array.isArray(t) ? t.filter(Boolean) : t;
          this._errors.push(new tf(e, { nodes: n }));
        }
        getErrors() {
          return this._errors;
        }
      }
      function rN(e, t) {
        var n;
        return null ===
          (n = [e.astNode, ...e.extensionASTNodes]
            .flatMap((e) => {
              var t;
              return null !== (t = null == e ? void 0 : e.operationTypes) &&
                void 0 !== t
                ? t
                : [];
            })
            .find((e) => e.operation === t)) || void 0 === n
          ? void 0
          : n.type;
      }
      function r_(e, t) {
        t.name.startsWith('__') &&
          e.reportError(
            `Name "${t.name}" must not begin with "__", which is reserved by GraphQL introspection.`,
            t.astNode
          );
      }
      function rS(e, t) {
        let n = Object.values(t.getFields());
        for (let a of (0 === n.length &&
          e.reportError(`Type ${t.name} must define one or more fields.`, [
            t.astNode,
            ...t.extensionASTNodes,
          ]),
        n)) {
          var r, i, s;
          for (let n of (r_(e, a),
          nv(a.type) ||
            e.reportError(
              `The type of ${t.name}.${
                a.name
              } must be Output Type but got: ${tM(a.type)}.`,
              null === (r = a.astNode) || void 0 === r ? void 0 : r.type
            ),
          a.args)) {
            let r = n.name;
            r_(e, n),
              ny(n.type) ||
                e.reportError(
                  `The type of ${t.name}.${
                    a.name
                  }(${r}:) must be Input Type but got: ${tM(n.type)}.`,
                  null === (i = n.astNode) || void 0 === i ? void 0 : i.type
                ),
              nF(n) &&
                null != n.deprecationReason &&
                e.reportError(
                  `Required argument ${t.name}.${a.name}(${r}:) cannot be deprecated.`,
                  [
                    rA(n.astNode),
                    null === (s = n.astNode) || void 0 === s ? void 0 : s.type,
                  ]
                );
          }
        }
      }
      function rI(e, t) {
        let n = Object.create(null);
        for (let r of t.getInterfaces()) {
          if (!nd(r)) {
            e.reportError(
              `Type ${tM(
                t
              )} must only implement Interface types, it cannot implement ${tM(
                r
              )}.`,
              rO(t, r)
            );
            continue;
          }
          if (t === r) {
            e.reportError(
              `Type ${t.name} cannot implement itself because it would create a circular reference.`,
              rO(t, r)
            );
            continue;
          }
          if (n[r.name]) {
            e.reportError(
              `Type ${t.name} can only implement ${r.name} once.`,
              rO(t, r)
            );
            continue;
          }
          (n[r.name] = !0),
            (function (e, t, n) {
              let r = t.getInterfaces();
              for (let i of n.getInterfaces())
                r.includes(i) ||
                  e.reportError(
                    i === t
                      ? `Type ${t.name} cannot implement ${n.name} because it would create a circular reference.`
                      : `Type ${t.name} must implement ${i.name} because it is implemented by ${n.name}.`,
                    [...rO(n, i), ...rO(t, n)]
                  );
            })(e, t, r),
            (function (e, t, n) {
              let r = t.getFields();
              for (let l of Object.values(n.getFields())) {
                var i, s, a, o;
                let u = l.name,
                  c = r[u];
                if (!c) {
                  e.reportError(
                    `Interface field ${n.name}.${u} expected but ${t.name} does not provide it.`,
                    [l.astNode, t.astNode, ...t.extensionASTNodes]
                  );
                  continue;
                }
                for (let r of (nK(e.schema, c.type, l.type) ||
                  e.reportError(
                    `Interface field ${n.name}.${u} expects type ${tM(
                      l.type
                    )} but ${t.name}.${u} is type ${tM(c.type)}.`,
                    [
                      null === (i = l.astNode) || void 0 === i
                        ? void 0
                        : i.type,
                      null === (s = c.astNode) || void 0 === s
                        ? void 0
                        : s.type,
                    ]
                  ),
                l.args)) {
                  let i = r.name,
                    s = c.args.find((e) => e.name === i);
                  if (!s) {
                    e.reportError(
                      `Interface field argument ${n.name}.${u}(${i}:) expected but ${t.name}.${u} does not provide it.`,
                      [r.astNode, c.astNode]
                    );
                    continue;
                  }
                  !(function e(t, n) {
                    return (
                      t === n ||
                      (!!((ng(t) && ng(n)) || (nm(t) && nm(n))) &&
                        e(t.ofType, n.ofType))
                    );
                  })(r.type, s.type) &&
                    e.reportError(
                      `Interface field argument ${
                        n.name
                      }.${u}(${i}:) expects type ${tM(r.type)} but ${
                        t.name
                      }.${u}(${i}:) is type ${tM(s.type)}.`,
                      [
                        null === (a = r.astNode) || void 0 === a
                          ? void 0
                          : a.type,
                        null === (o = s.astNode) || void 0 === o
                          ? void 0
                          : o.type,
                      ]
                    );
                }
                for (let r of c.args) {
                  let i = r.name;
                  !l.args.find((e) => e.name === i) &&
                    nF(r) &&
                    e.reportError(
                      `Object field ${t.name}.${u} includes required argument ${i} that is missing from the Interface field ${n.name}.${u}.`,
                      [r.astNode, l.astNode]
                    );
                }
              }
            })(e, t, r);
        }
      }
      function rO(e, t) {
        let { astNode: n, extensionASTNodes: r } = e;
        return (null != n ? [n, ...r] : r)
          .flatMap((e) => {
            var t;
            return null !== (t = e.interfaces) && void 0 !== t ? t : [];
          })
          .filter((e) => e.name.value === t.name);
      }
      function rw(e, t) {
        let { astNode: n, extensionASTNodes: r } = e;
        return (null != n ? [n, ...r] : r)
          .flatMap((e) => {
            var t;
            return null !== (t = e.types) && void 0 !== t ? t : [];
          })
          .filter((e) => e.name.value === t);
      }
      function rA(e) {
        var t;
        return null == e
          ? void 0
          : null === (t = e.directives) || void 0 === t
          ? void 0
          : t.find((e) => e.name.value === n6.name);
      }
      function rx(e, t) {
        switch (t.kind) {
          case w.LIST_TYPE: {
            let n = rx(e, t.type);
            return n && new nN(n);
          }
          case w.NON_NULL_TYPE: {
            let n = rx(e, t.type);
            return n && new n_(n);
          }
          case w.NAMED_TYPE:
            return e.getType(t.name.value);
        }
      }
      class rC {
        constructor(e, t, n) {
          (this._schema = e),
            (this._typeStack = []),
            (this._parentTypeStack = []),
            (this._inputTypeStack = []),
            (this._fieldDefStack = []),
            (this._defaultValueStack = []),
            (this._directive = null),
            (this._argument = null),
            (this._enumValue = null),
            (this._getFieldDef = null != n ? n : rD),
            t &&
              (ny(t) && this._inputTypeStack.push(t),
              nb(t) && this._parentTypeStack.push(t),
              nv(t) && this._typeStack.push(t));
        }
        get [Symbol.toStringTag]() {
          return 'TypeInfo';
        }
        getType() {
          if (this._typeStack.length > 0)
            return this._typeStack[this._typeStack.length - 1];
        }
        getParentType() {
          if (this._parentTypeStack.length > 0)
            return this._parentTypeStack[this._parentTypeStack.length - 1];
        }
        getInputType() {
          if (this._inputTypeStack.length > 0)
            return this._inputTypeStack[this._inputTypeStack.length - 1];
        }
        getParentInputType() {
          if (this._inputTypeStack.length > 1)
            return this._inputTypeStack[this._inputTypeStack.length - 2];
        }
        getFieldDef() {
          if (this._fieldDefStack.length > 0)
            return this._fieldDefStack[this._fieldDefStack.length - 1];
        }
        getDefaultValue() {
          if (this._defaultValueStack.length > 0)
            return this._defaultValueStack[this._defaultValueStack.length - 1];
        }
        getDirective() {
          return this._directive;
        }
        getArgument() {
          return this._argument;
        }
        getEnumValue() {
          return this._enumValue;
        }
        enter(e) {
          let t = this._schema;
          switch (e.kind) {
            case w.SELECTION_SET: {
              let e = nw(this.getType());
              this._parentTypeStack.push(nb(e) ? e : void 0);
              break;
            }
            case w.FIELD: {
              let n, r;
              let i = this.getParentType();
              i && (n = this._getFieldDef(t, i, e)) && (r = n.type),
                this._fieldDefStack.push(n),
                this._typeStack.push(nv(r) ? r : void 0);
              break;
            }
            case w.DIRECTIVE:
              this._directive = t.getDirective(e.name.value);
              break;
            case w.OPERATION_DEFINITION: {
              let n = t.getRootType(e.operation);
              this._typeStack.push(nc(n) ? n : void 0);
              break;
            }
            case w.INLINE_FRAGMENT:
            case w.FRAGMENT_DEFINITION: {
              let n = e.typeCondition,
                r = n ? rx(t, n) : nw(this.getType());
              this._typeStack.push(nv(r) ? r : void 0);
              break;
            }
            case w.VARIABLE_DEFINITION: {
              let n = rx(t, e.type);
              this._inputTypeStack.push(ny(n) ? n : void 0);
              break;
            }
            case w.ARGUMENT: {
              var n;
              let t, r;
              let i =
                null !== (n = this.getDirective()) && void 0 !== n
                  ? n
                  : this.getFieldDef();
              i &&
                (t = i.args.find((t) => t.name === e.name.value)) &&
                (r = t.type),
                (this._argument = t),
                this._defaultValueStack.push(t ? t.defaultValue : void 0),
                this._inputTypeStack.push(ny(r) ? r : void 0);
              break;
            }
            case w.LIST: {
              let e = nI(this.getInputType()),
                t = nm(e) ? e.ofType : e;
              this._defaultValueStack.push(void 0),
                this._inputTypeStack.push(ny(t) ? t : void 0);
              break;
            }
            case w.OBJECT_FIELD: {
              let t, n;
              let r = nw(this.getInputType());
              nf(r) && (n = r.getFields()[e.name.value]) && (t = n.type),
                this._defaultValueStack.push(n ? n.defaultValue : void 0),
                this._inputTypeStack.push(ny(t) ? t : void 0);
              break;
            }
            case w.ENUM: {
              let t;
              let n = nw(this.getInputType());
              nh(n) && (t = n.getValue(e.value)), (this._enumValue = t);
            }
          }
        }
        leave(e) {
          switch (e.kind) {
            case w.SELECTION_SET:
              this._parentTypeStack.pop();
              break;
            case w.FIELD:
              this._fieldDefStack.pop(), this._typeStack.pop();
              break;
            case w.DIRECTIVE:
              this._directive = null;
              break;
            case w.OPERATION_DEFINITION:
            case w.INLINE_FRAGMENT:
            case w.FRAGMENT_DEFINITION:
              this._typeStack.pop();
              break;
            case w.VARIABLE_DEFINITION:
              this._inputTypeStack.pop();
              break;
            case w.ARGUMENT:
              (this._argument = null),
                this._defaultValueStack.pop(),
                this._inputTypeStack.pop();
              break;
            case w.LIST:
            case w.OBJECT_FIELD:
              this._defaultValueStack.pop(), this._inputTypeStack.pop();
              break;
            case w.ENUM:
              this._enumValue = null;
          }
        }
      }
      function rD(e, t, n) {
        let r = n.name.value;
        return r === rp.name && e.getQueryType() === t
          ? rp
          : r === rh.name && e.getQueryType() === t
          ? rh
          : r === rf.name && nb(t)
          ? rf
          : nc(t) || nd(t)
          ? t.getFields()[r]
          : void 0;
      }
      function rR(e, t) {
        return {
          enter(...n) {
            let r = n[0];
            e.enter(r);
            let i = t8(t, r.kind).enter;
            if (i) {
              let s = i.apply(t, n);
              return void 0 !== s && (e.leave(r), tE(s) && e.enter(s)), s;
            }
          },
          leave(...n) {
            let r;
            let i = n[0],
              s = t8(t, i.kind).leave;
            return s && (r = s.apply(t, n)), e.leave(i), r;
          },
        };
      }
      function rL(e) {
        return (
          e.kind === w.OPERATION_DEFINITION || e.kind === w.FRAGMENT_DEFINITION
        );
      }
      function rP(e) {
        return (
          (e.kind === Kind.VARIABLE ||
            e.kind === Kind.INT ||
            e.kind === Kind.FLOAT ||
            e.kind === Kind.STRING ||
            e.kind === Kind.BOOLEAN ||
            e.kind === Kind.NULL ||
            e.kind === Kind.ENUM ||
            e.kind === Kind.LIST ||
            e.kind === Kind.OBJECT) &&
          (e.kind === Kind.LIST
            ? e.values.some(rP)
            : e.kind === Kind.OBJECT
            ? e.fields.some((e) => rP(e.value))
            : e.kind !== Kind.VARIABLE)
        );
      }
      function rk(e) {
        return (
          e.kind === w.SCHEMA_DEFINITION ||
          r$(e) ||
          e.kind === w.DIRECTIVE_DEFINITION
        );
      }
      function r$(e) {
        return (
          e.kind === w.SCALAR_TYPE_DEFINITION ||
          e.kind === w.OBJECT_TYPE_DEFINITION ||
          e.kind === w.INTERFACE_TYPE_DEFINITION ||
          e.kind === w.UNION_TYPE_DEFINITION ||
          e.kind === w.ENUM_TYPE_DEFINITION ||
          e.kind === w.INPUT_OBJECT_TYPE_DEFINITION
        );
      }
      function rM(e) {
        return e.kind === w.SCHEMA_EXTENSION || rF(e);
      }
      function rF(e) {
        return (
          e.kind === w.SCALAR_TYPE_EXTENSION ||
          e.kind === w.OBJECT_TYPE_EXTENSION ||
          e.kind === w.INTERFACE_TYPE_EXTENSION ||
          e.kind === w.UNION_TYPE_EXTENSION ||
          e.kind === w.ENUM_TYPE_EXTENSION ||
          e.kind === w.INPUT_OBJECT_TYPE_EXTENSION
        );
      }
      function rj(e) {
        let t = Object.create(null),
          n = e.getSchema();
        for (let e of n ? n.getDirectives() : re)
          t[e.name] = e.args.map((e) => e.name);
        for (let n of e.getDocument().definitions)
          if (n.kind === w.DIRECTIVE_DEFINITION) {
            var r;
            let e = null !== (r = n.arguments) && void 0 !== r ? r : [];
            t[n.name.value] = e.map((e) => e.name.value);
          }
        return {
          Directive(n) {
            let r = n.name.value,
              i = t[r];
            if (n.arguments && i)
              for (let t of n.arguments) {
                let n = t.name.value;
                if (!i.includes(n)) {
                  let s = tW(n, i);
                  e.reportError(
                    new tf(
                      `Unknown argument "${n}" on directive "@${r}".` + tQ(s),
                      { nodes: t }
                    )
                  );
                }
              }
            return !1;
          },
        };
      }
      function rU(e) {
        let t = Object.create(null),
          n = e.getSchema();
        for (let e of n ? n.getDirectives() : re) t[e.name] = e.locations;
        for (let n of e.getDocument().definitions)
          n.kind === w.DIRECTIVE_DEFINITION &&
            (t[n.name.value] = n.locations.map((e) => e.value));
        return {
          Directive(n, r, i, s, a) {
            let o = n.name.value,
              l = t[o];
            if (!l) {
              e.reportError(new tf(`Unknown directive "@${o}".`, { nodes: n }));
              return;
            }
            let u = (function (e) {
              let t = e[e.length - 1];
              switch (('kind' in t || tu(!1), t.kind)) {
                case w.OPERATION_DEFINITION:
                  return (function (e) {
                    switch (e) {
                      case I.QUERY:
                        return O.QUERY;
                      case I.MUTATION:
                        return O.MUTATION;
                      case I.SUBSCRIPTION:
                        return O.SUBSCRIPTION;
                    }
                  })(t.operation);
                case w.FIELD:
                  return O.FIELD;
                case w.FRAGMENT_SPREAD:
                  return O.FRAGMENT_SPREAD;
                case w.INLINE_FRAGMENT:
                  return O.INLINE_FRAGMENT;
                case w.FRAGMENT_DEFINITION:
                  return O.FRAGMENT_DEFINITION;
                case w.VARIABLE_DEFINITION:
                  return O.VARIABLE_DEFINITION;
                case w.SCHEMA_DEFINITION:
                case w.SCHEMA_EXTENSION:
                  return O.SCHEMA;
                case w.SCALAR_TYPE_DEFINITION:
                case w.SCALAR_TYPE_EXTENSION:
                  return O.SCALAR;
                case w.OBJECT_TYPE_DEFINITION:
                case w.OBJECT_TYPE_EXTENSION:
                  return O.OBJECT;
                case w.FIELD_DEFINITION:
                  return O.FIELD_DEFINITION;
                case w.INTERFACE_TYPE_DEFINITION:
                case w.INTERFACE_TYPE_EXTENSION:
                  return O.INTERFACE;
                case w.UNION_TYPE_DEFINITION:
                case w.UNION_TYPE_EXTENSION:
                  return O.UNION;
                case w.ENUM_TYPE_DEFINITION:
                case w.ENUM_TYPE_EXTENSION:
                  return O.ENUM;
                case w.ENUM_VALUE_DEFINITION:
                  return O.ENUM_VALUE;
                case w.INPUT_OBJECT_TYPE_DEFINITION:
                case w.INPUT_OBJECT_TYPE_EXTENSION:
                  return O.INPUT_OBJECT;
                case w.INPUT_VALUE_DEFINITION: {
                  let t = e[e.length - 3];
                  return (
                    'kind' in t || tu(!1),
                    t.kind === w.INPUT_OBJECT_TYPE_DEFINITION
                      ? O.INPUT_FIELD_DEFINITION
                      : O.ARGUMENT_DEFINITION
                  );
                }
                default:
                  tu(!1, 'Unexpected kind: ' + tM(t.kind));
              }
            })(a);
            u &&
              !l.includes(u) &&
              e.reportError(
                new tf(`Directive "@${o}" may not be used on ${u}.`, {
                  nodes: n,
                })
              );
          },
        };
      }
      function rB(e) {
        let t = e.getSchema(),
          n = t ? t.getTypeMap() : Object.create(null),
          r = Object.create(null);
        for (let t of e.getDocument().definitions)
          r$(t) && (r[t.name.value] = !0);
        let i = [...Object.keys(n), ...Object.keys(r)];
        return {
          NamedType(t, s, a, o, l) {
            let u = t.name.value;
            if (!n[u] && !r[u]) {
              var c, d;
              let n = null !== (c = l[2]) && void 0 !== c ? c : a,
                r = null != n && 'kind' in (d = n) && (rk(d) || rM(d));
              if (r && rV.includes(u)) return;
              let s = tW(u, r ? rV.concat(i) : i);
              e.reportError(
                new tf(`Unknown type "${u}".` + tQ(s), { nodes: t })
              );
            }
          },
        };
      }
      let rV = [...n1, ...rm].map((e) => e.name);
      function rq(e, t, n, r, i, s, a, o) {
        if (r.has(a, o, s)) return;
        r.add(a, o, s);
        let l = e.getFragment(o);
        if (!l) return;
        let [u, c] = rH(e, n, l);
        if (a !== u)
          for (let o of (rY(e, t, n, r, i, s, a, u), c))
            rq(e, t, n, r, i, s, a, o);
      }
      function rQ(e, t, n, r, i, s, a, o) {
        if (a === o || i.has(a, o, s)) return;
        i.add(a, o, s);
        let l = e.getFragment(a),
          u = e.getFragment(o);
        if (!l || !u) return;
        let [c, d] = rH(e, n, l),
          [p, h] = rH(e, n, u);
        for (let o of (rY(e, t, n, r, i, s, c, p), h))
          rQ(e, t, n, r, i, s, a, o);
        for (let a of d) rQ(e, t, n, r, i, s, a, o);
      }
      function rY(e, t, n, r, i, s, a, o) {
        for (let [l, u] of Object.entries(a)) {
          let a = o[l];
          if (a)
            for (let o of u)
              for (let u of a) {
                let a = rG(e, n, r, i, s, l, o, u);
                a && t.push(a);
              }
        }
      }
      function rG(e, t, n, r, i, s, a, o) {
        let [l, u, c] = a,
          [d, p, h] = o,
          f = i || (l !== d && nc(l) && nc(d));
        if (!f) {
          let e = u.name.value,
            t = p.name.value;
          if (e !== t)
            return [[s, `"${e}" and "${t}" are different fields`], [u], [p]];
          if (
            !(function (e, t) {
              let n = e.arguments,
                r = t.arguments;
              if (void 0 === n || 0 === n.length)
                return void 0 === r || 0 === r.length;
              if (void 0 === r || 0 === r.length || n.length !== r.length)
                return !1;
              let i = new Map(r.map(({ name: e, value: t }) => [e.value, t]));
              return n.every((e) => {
                let t = e.value,
                  n = i.get(e.name.value);
                return void 0 !== n && rJ(t) === rJ(n);
              });
            })(u, p)
          )
            return [[s, 'they have differing arguments'], [u], [p]];
        }
        let m = null == c ? void 0 : c.type,
          g = null == h ? void 0 : h.type;
        if (
          m &&
          g &&
          (function e(t, n) {
            return nm(t)
              ? !nm(n) || e(t.ofType, n.ofType)
              : !!nm(n) ||
                  (ng(t)
                    ? !ng(n) || e(t.ofType, n.ofType)
                    : !!ng(n) || (!!(nT(t) || nT(n)) && t !== n));
          })(m, g)
        )
          return [
            [s, `they return conflicting types "${tM(m)}" and "${tM(g)}"`],
            [u],
            [p],
          ];
        let y = u.selectionSet,
          v = p.selectionSet;
        if (y && v)
          return (function (e, t, n, r) {
            if (e.length > 0)
              return [
                [t, e.map(([e]) => e)],
                [n, ...e.map(([, e]) => e).flat()],
                [r, ...e.map(([, , e]) => e).flat()],
              ];
          })(
            (function (e, t, n, r, i, s, a, o, l) {
              let u = [],
                [c, d] = rK(e, t, s, a),
                [p, h] = rK(e, t, o, l);
              for (let s of (rY(e, u, t, n, r, i, c, p), h))
                rq(e, u, t, n, r, i, c, s);
              for (let s of d) rq(e, u, t, n, r, i, p, s);
              for (let s of d) for (let a of h) rQ(e, u, t, n, r, i, s, a);
              return u;
            })(e, t, n, r, f, nw(m), y, nw(g), v),
            s,
            u,
            p
          );
      }
      function rJ(e) {
        return t5(
          (function e(t) {
            switch (t.kind) {
              case w.OBJECT:
                return {
                  ...t,
                  fields: t.fields
                    .map((t) => ({ ...t, value: e(t.value) }))
                    .sort((e, t) => tH(e.name.value, t.name.value)),
                };
              case w.LIST:
                return { ...t, values: t.values.map(e) };
              case w.INT:
              case w.FLOAT:
              case w.STRING:
              case w.BOOLEAN:
              case w.NULL:
              case w.ENUM:
              case w.VARIABLE:
                return t;
            }
          })(e)
        );
      }
      function rK(e, t, n, r) {
        let i = t.get(r);
        if (i) return i;
        let s = Object.create(null),
          a = Object.create(null);
        !(function e(t, n, r, i, s) {
          for (let a of r.selections)
            switch (a.kind) {
              case w.FIELD: {
                let e;
                let t = a.name.value;
                (nc(n) || nd(n)) && (e = n.getFields()[t]);
                let r = a.alias ? a.alias.value : t;
                i[r] || (i[r] = []), i[r].push([n, a, e]);
                break;
              }
              case w.FRAGMENT_SPREAD:
                s[a.name.value] = !0;
                break;
              case w.INLINE_FRAGMENT: {
                let r = a.typeCondition,
                  o = r ? rx(t.getSchema(), r) : n;
                e(t, o, a.selectionSet, i, s);
              }
            }
        })(e, n, r, s, a);
        let o = [s, Object.keys(a)];
        return t.set(r, o), o;
      }
      function rH(e, t, n) {
        let r = t.get(n.selectionSet);
        if (r) return r;
        let i = rx(e.getSchema(), n.typeCondition);
        return rK(e, t, i, n.selectionSet);
      }
      class rz {
        constructor() {
          this._data = new Map();
        }
        has(e, t, n) {
          var r;
          let i =
            null === (r = this._data.get(e)) || void 0 === r
              ? void 0
              : r.get(t);
          return void 0 !== i && (!!n || n === i);
        }
        add(e, t, n) {
          let r = this._data.get(e);
          void 0 === r ? this._data.set(e, new Map([[t, n]])) : r.set(t, n);
        }
      }
      class rX {
        constructor() {
          this._orderedPairSet = new rz();
        }
        has(e, t, n) {
          return e < t
            ? this._orderedPairSet.has(e, t, n)
            : this._orderedPairSet.has(t, e, n);
        }
        add(e, t, n) {
          e < t
            ? this._orderedPairSet.add(e, t, n)
            : this._orderedPairSet.add(t, e, n);
        }
      }
      let rW = {
        [w.SCALAR_TYPE_DEFINITION]: w.SCALAR_TYPE_EXTENSION,
        [w.OBJECT_TYPE_DEFINITION]: w.OBJECT_TYPE_EXTENSION,
        [w.INTERFACE_TYPE_DEFINITION]: w.INTERFACE_TYPE_EXTENSION,
        [w.UNION_TYPE_DEFINITION]: w.UNION_TYPE_EXTENSION,
        [w.ENUM_TYPE_DEFINITION]: w.ENUM_TYPE_EXTENSION,
        [w.INPUT_OBJECT_TYPE_DEFINITION]: w.INPUT_OBJECT_TYPE_EXTENSION,
      };
      function rZ(e) {
        var t, n;
        let r = Object.create(null),
          i = e.getSchema();
        for (let e of null !== (t = null == i ? void 0 : i.getDirectives()) &&
        void 0 !== t
          ? t
          : re)
          r[e.name] = tG(e.args.filter(nF), (e) => e.name);
        for (let t of e.getDocument().definitions)
          if (t.kind === w.DIRECTIVE_DEFINITION) {
            let e = null !== (n = t.arguments) && void 0 !== n ? n : [];
            r[t.name.value] = tG(e.filter(r0), (e) => e.name.value);
          }
        return {
          Directive: {
            leave(t) {
              let n = t.name.value,
                i = r[n];
              if (i) {
                var s;
                let r = null !== (s = t.arguments) && void 0 !== s ? s : [],
                  a = new Set(r.map((e) => e.name.value));
                for (let [r, s] of Object.entries(i))
                  if (!a.has(r)) {
                    let i = nl(s.type) ? tM(s.type) : t5(s.type);
                    e.reportError(
                      new tf(
                        `Directive "@${n}" argument "${r}" of type "${i}" is required, but it was not provided.`,
                        { nodes: t }
                      )
                    );
                  }
              }
            },
          },
        };
      }
      function r0(e) {
        return e.type.kind === w.NON_NULL_TYPE && null == e.defaultValue;
      }
      function r1(e) {
        return e
          .map((e) =>
            'number' == typeof e ? '[' + e.toString() + ']' : '.' + e
          )
          .join('');
      }
      function r2(e, t, n) {
        return { prev: e, key: t, typename: n };
      }
      function r4(e) {
        let t = [],
          n = e;
        for (; n; ) t.push(n.key), (n = n.prev);
        return t.reverse();
      }
      function r3(e, t, n) {
        if (e) {
          if (e.kind === w.VARIABLE) {
            let r = e.name.value;
            if (null == n || void 0 === n[r]) return;
            let i = n[r];
            if (null === i && ng(t)) return;
            return i;
          }
          if (ng(t)) {
            if (e.kind === w.NULL) return;
            return r3(e, t.ofType, n);
          }
          if (e.kind === w.NULL) return null;
          if (nm(t)) {
            let r = t.ofType;
            if (e.kind === w.LIST) {
              let t = [];
              for (let i of e.values)
                if (r9(i, n)) {
                  if (ng(r)) return;
                  t.push(null);
                } else {
                  let e = r3(i, r, n);
                  if (void 0 === e) return;
                  t.push(e);
                }
              return t;
            }
            let i = r3(e, r, n);
            if (void 0 === i) return;
            return [i];
          }
          if (nf(t)) {
            if (e.kind !== w.OBJECT) return;
            let r = Object.create(null),
              i = tG(e.fields, (e) => e.name.value);
            for (let e of Object.values(t.getFields())) {
              let t = i[e.name];
              if (!t || r9(t.value, n)) {
                if (void 0 !== e.defaultValue) r[e.name] = e.defaultValue;
                else if (ng(e.type)) return;
                continue;
              }
              let s = r3(t.value, e.type, n);
              if (void 0 === s) return;
              r[e.name] = s;
            }
            if (t.isOneOf) {
              let e = Object.keys(r);
              if (1 !== e.length || null === r[e[0]]) return;
            }
            return r;
          }
          if (nT(t)) {
            let r;
            try {
              r = t.parseLiteral(e, n);
            } catch (e) {
              return;
            }
            if (void 0 === r) return;
            return r;
          }
          tu(!1, 'Unexpected input type: ' + tM(t));
        }
      }
      function r9(e, t) {
        return (
          e.kind === w.VARIABLE && (null == t || void 0 === t[e.name.value])
        );
      }
      function r7(e, t, n) {
        var r;
        let i = {},
          s = tG(
            null !== (r = t.arguments) && void 0 !== r ? r : [],
            (e) => e.name.value
          );
        for (let r of e.args) {
          let e = r.name,
            a = r.type,
            o = s[e];
          if (!o) {
            if (void 0 !== r.defaultValue) i[e] = r.defaultValue;
            else if (ng(a))
              throw new tf(
                `Argument "${e}" of required type "${tM(a)}" was not provided.`,
                { nodes: t }
              );
            continue;
          }
          let l = o.value,
            u = l.kind === w.NULL;
          if (l.kind === w.VARIABLE) {
            let t = l.name.value;
            if (null == n || !r8(n, t)) {
              if (void 0 !== r.defaultValue) i[e] = r.defaultValue;
              else if (ng(a))
                throw new tf(
                  `Argument "${e}" of required type "${tM(
                    a
                  )}" was provided the variable "$${t}" which was not provided a runtime value.`,
                  { nodes: l }
                );
              continue;
            }
            u = null == n[t];
          }
          if (u && ng(a))
            throw new tf(
              `Argument "${e}" of non-null type "${tM(a)}" must not be null.`,
              { nodes: l }
            );
          let c = r3(l, a, n);
          if (void 0 === c)
            throw new tf(`Argument "${e}" has invalid value ${t5(l)}.`, {
              nodes: l,
            });
          i[e] = c;
        }
        return i;
      }
      function r6(e, t, n) {
        var r;
        let i =
          null === (r = t.directives) || void 0 === r
            ? void 0
            : r.find((t) => t.name.value === e.name);
        if (i) return r7(e, i, n);
      }
      function r8(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }
      function r5(e, t, n, r, i) {
        let s = new Map();
        return ie(e, t, n, r, i, s, new Set()), s;
      }
      function ie(e, t, n, r, i, s, a) {
        for (let o of i.selections)
          switch (o.kind) {
            case w.FIELD: {
              if (!it(n, o)) continue;
              let e = o.alias ? o.alias.value : o.name.value,
                t = s.get(e);
              void 0 !== t ? t.push(o) : s.set(e, [o]);
              break;
            }
            case w.INLINE_FRAGMENT:
              if (!it(n, o) || !ir(e, o, r)) continue;
              ie(e, t, n, r, o.selectionSet, s, a);
              break;
            case w.FRAGMENT_SPREAD: {
              let i = o.name.value;
              if (a.has(i) || !it(n, o)) continue;
              a.add(i);
              let l = t[i];
              if (!l || !ir(e, l, r)) continue;
              ie(e, t, n, r, l.selectionSet, s, a);
            }
          }
      }
      function it(e, t) {
        let n = r6(n7, t, e);
        if ((null == n ? void 0 : n.if) === !0) return !1;
        let r = r6(n9, t, e);
        return (null == r ? void 0 : r.if) !== !1;
      }
      function ir(e, t, n) {
        let r = t.typeCondition;
        if (!r) return !0;
        let i = rx(e, r);
        return i === n || (!!nE(i) && e.isSubType(i, n));
      }
      function ii(e, t) {
        let n = new Map();
        for (let r of e) {
          let e = t(r),
            i = n.get(e);
          void 0 === i ? n.set(e, [r]) : i.push(r);
        }
        return n;
      }
      function is(e) {
        return { Field: t, Directive: t };
        function t(t) {
          var n;
          for (let [r, i] of ii(
            null !== (n = t.arguments) && void 0 !== n ? n : [],
            (e) => e.name.value
          ))
            i.length > 1 &&
              e.reportError(
                new tf(`There can be only one argument named "${r}".`, {
                  nodes: i.map((e) => e.name),
                })
              );
        }
      }
      function ia(e) {
        let t = Object.create(null),
          n = e.getSchema();
        for (let e of n ? n.getDirectives() : re) t[e.name] = !e.isRepeatable;
        for (let n of e.getDocument().definitions)
          n.kind === w.DIRECTIVE_DEFINITION &&
            (t[n.name.value] = !n.repeatable);
        let r = Object.create(null),
          i = Object.create(null);
        return {
          enter(n) {
            let s;
            if ('directives' in n && n.directives) {
              if (
                n.kind === w.SCHEMA_DEFINITION ||
                n.kind === w.SCHEMA_EXTENSION
              )
                s = r;
              else if (r$(n) || rF(n)) {
                let e = n.name.value;
                void 0 === (s = i[e]) && (i[e] = s = Object.create(null));
              } else s = Object.create(null);
              for (let r of n.directives) {
                let n = r.name.value;
                t[n] &&
                  (s[n]
                    ? e.reportError(
                        new tf(
                          `The directive "@${n}" can only be used once at this location.`,
                          { nodes: [s[n], r] }
                        )
                      )
                    : (s[n] = r));
              }
            }
          },
        };
      }
      function io(e) {
        let t = [],
          n = Object.create(null);
        return {
          ObjectValue: {
            enter() {
              t.push(n), (n = Object.create(null));
            },
            leave() {
              let e = t.pop();
              e || tu(!1), (n = e);
            },
          },
          ObjectField(t) {
            let r = t.name.value;
            n[r]
              ? e.reportError(
                  new tf(`There can be only one input field named "${r}".`, {
                    nodes: [n[r], t.name],
                  })
                )
              : (n[r] = t.name);
          },
        };
      }
      function il(e, t) {
        let n = e.getInputType();
        if (!n) return;
        let r = nw(n);
        if (!nT(r)) {
          let r = tM(n);
          e.reportError(
            new tf(`Expected value of type "${r}", found ${t5(t)}.`, {
              nodes: t,
            })
          );
          return;
        }
        try {
          let i = r.parseLiteral(t, void 0);
          if (void 0 === i) {
            let r = tM(n);
            e.reportError(
              new tf(`Expected value of type "${r}", found ${t5(t)}.`, {
                nodes: t,
              })
            );
          }
        } catch (i) {
          let r = tM(n);
          i instanceof tf
            ? e.reportError(i)
            : e.reportError(
                new tf(
                  `Expected value of type "${r}", found ${t5(t)}; ` + i.message,
                  { nodes: t, originalError: i }
                )
              );
        }
      }
      let iu = Object.freeze([
          function (e) {
            return {
              Document(t) {
                for (let n of t.definitions)
                  if (!rL(n)) {
                    let t =
                      n.kind === w.SCHEMA_DEFINITION ||
                      n.kind === w.SCHEMA_EXTENSION
                        ? 'schema'
                        : '"' + n.name.value + '"';
                    e.reportError(
                      new tf(`The ${t} definition is not executable.`, {
                        nodes: n,
                      })
                    );
                  }
                return !1;
              },
            };
          },
          function (e) {
            let t = Object.create(null);
            return {
              OperationDefinition(n) {
                let r = n.name;
                return (
                  r &&
                    (t[r.value]
                      ? e.reportError(
                          new tf(
                            `There can be only one operation named "${r.value}".`,
                            { nodes: [t[r.value], r] }
                          )
                        )
                      : (t[r.value] = r)),
                  !1
                );
              },
              FragmentDefinition: () => !1,
            };
          },
          function (e) {
            let t = 0;
            return {
              Document(e) {
                t = e.definitions.filter(
                  (e) => e.kind === w.OPERATION_DEFINITION
                ).length;
              },
              OperationDefinition(n) {
                !n.name &&
                  t > 1 &&
                  e.reportError(
                    new tf(
                      'This anonymous operation must be the only defined operation.',
                      { nodes: n }
                    )
                  );
              },
            };
          },
          function (e) {
            return {
              OperationDefinition(t) {
                if ('subscription' === t.operation) {
                  let n = e.getSchema(),
                    r = n.getSubscriptionType();
                  if (r) {
                    let i = t.name ? t.name.value : null,
                      s = Object.create(null),
                      a = e.getDocument(),
                      o = Object.create(null);
                    for (let e of a.definitions)
                      e.kind === w.FRAGMENT_DEFINITION && (o[e.name.value] = e);
                    let l = r5(n, o, s, r, t.selectionSet);
                    if (l.size > 1) {
                      let t = [...l.values()].slice(1).flat();
                      e.reportError(
                        new tf(
                          null != i
                            ? `Subscription "${i}" must select only one top level field.`
                            : 'Anonymous Subscription must select only one top level field.',
                          { nodes: t }
                        )
                      );
                    }
                    for (let t of l.values())
                      t[0].name.value.startsWith('__') &&
                        e.reportError(
                          new tf(
                            null != i
                              ? `Subscription "${i}" must not select an introspection top level field.`
                              : 'Anonymous Subscription must not select an introspection top level field.',
                            { nodes: t }
                          )
                        );
                  }
                }
              },
            };
          },
          rB,
          function (e) {
            return {
              InlineFragment(t) {
                let n = t.typeCondition;
                if (n) {
                  let t = rx(e.getSchema(), n);
                  if (t && !nb(t)) {
                    let t = t5(n);
                    e.reportError(
                      new tf(
                        `Fragment cannot condition on non composite type "${t}".`,
                        { nodes: n }
                      )
                    );
                  }
                }
              },
              FragmentDefinition(t) {
                let n = rx(e.getSchema(), t.typeCondition);
                if (n && !nb(n)) {
                  let n = t5(t.typeCondition);
                  e.reportError(
                    new tf(
                      `Fragment "${t.name.value}" cannot condition on non composite type "${n}".`,
                      { nodes: t.typeCondition }
                    )
                  );
                }
              },
            };
          },
          function (e) {
            return {
              VariableDefinition(t) {
                let n = rx(e.getSchema(), t.type);
                if (void 0 !== n && !ny(n)) {
                  let n = t.variable.name.value,
                    r = t5(t.type);
                  e.reportError(
                    new tf(
                      `Variable "$${n}" cannot be non-input type "${r}".`,
                      { nodes: t.type }
                    )
                  );
                }
              },
            };
          },
          function (e) {
            return {
              Field(t) {
                let n = e.getType(),
                  r = t.selectionSet;
                if (n) {
                  if (nT(nw(n))) {
                    if (r) {
                      let i = t.name.value,
                        s = tM(n);
                      e.reportError(
                        new tf(
                          `Field "${i}" must not have a selection since type "${s}" has no subfields.`,
                          { nodes: r }
                        )
                      );
                    }
                  } else if (r) {
                    if (0 === r.selections.length) {
                      let r = t.name.value,
                        i = tM(n);
                      e.reportError(
                        new tf(
                          `Field "${r}" of type "${i}" must have at least one field selected.`,
                          { nodes: t }
                        )
                      );
                    }
                  } else {
                    let r = t.name.value,
                      i = tM(n);
                    e.reportError(
                      new tf(
                        `Field "${r}" of type "${i}" must have a selection of subfields. Did you mean "${r} { ... }"?`,
                        { nodes: t }
                      )
                    );
                  }
                }
              },
            };
          },
          function (e) {
            return {
              Field(t) {
                let n = e.getParentType();
                if (n && !e.getFieldDef()) {
                  let r = e.getSchema(),
                    i = t.name.value,
                    s = tQ(
                      'to use an inline fragment on',
                      (function (e, t, n) {
                        if (!nE(t)) return [];
                        let r = new Set(),
                          i = Object.create(null);
                        for (let a of e.getPossibleTypes(t))
                          if (a.getFields()[n])
                            for (let e of (r.add(a),
                            (i[a.name] = 1),
                            a.getInterfaces())) {
                              var s;
                              e.getFields()[n] &&
                                (r.add(e),
                                (i[e.name] =
                                  (null !== (s = i[e.name]) && void 0 !== s
                                    ? s
                                    : 0) + 1));
                            }
                        return [...r]
                          .sort((t, n) => {
                            let r = i[n.name] - i[t.name];
                            return 0 !== r
                              ? r
                              : nd(t) && e.isSubType(t, n)
                              ? -1
                              : nd(n) && e.isSubType(n, t)
                              ? 1
                              : tH(t.name, n.name);
                          })
                          .map((e) => e.name);
                      })(r, n, i)
                    );
                  '' === s &&
                    (s = tQ(
                      nc(n) || nd(n) ? tW(i, Object.keys(n.getFields())) : []
                    )),
                    e.reportError(
                      new tf(
                        `Cannot query field "${i}" on type "${n.name}".` + s,
                        { nodes: t }
                      )
                    );
                }
              },
            };
          },
          function (e) {
            let t = Object.create(null);
            return {
              OperationDefinition: () => !1,
              FragmentDefinition(n) {
                let r = n.name.value;
                return (
                  t[r]
                    ? e.reportError(
                        new tf(`There can be only one fragment named "${r}".`, {
                          nodes: [t[r], n.name],
                        })
                      )
                    : (t[r] = n.name),
                  !1
                );
              },
            };
          },
          function (e) {
            return {
              FragmentSpread(t) {
                let n = t.name.value;
                e.getFragment(n) ||
                  e.reportError(
                    new tf(`Unknown fragment "${n}".`, { nodes: t.name })
                  );
              },
            };
          },
          function (e) {
            let t = [],
              n = [];
            return {
              OperationDefinition: (e) => (t.push(e), !1),
              FragmentDefinition: (e) => (n.push(e), !1),
              Document: {
                leave() {
                  let r = Object.create(null);
                  for (let n of t)
                    for (let t of e.getRecursivelyReferencedFragments(n))
                      r[t.name.value] = !0;
                  for (let t of n) {
                    let n = t.name.value;
                    !0 !== r[n] &&
                      e.reportError(
                        new tf(`Fragment "${n}" is never used.`, { nodes: t })
                      );
                  }
                },
              },
            };
          },
          function (e) {
            return {
              InlineFragment(t) {
                let n = e.getType(),
                  r = e.getParentType();
                if (nb(n) && nb(r) && !nH(e.getSchema(), n, r)) {
                  let i = tM(r),
                    s = tM(n);
                  e.reportError(
                    new tf(
                      `Fragment cannot be spread here as objects of type "${i}" can never be of type "${s}".`,
                      { nodes: t }
                    )
                  );
                }
              },
              FragmentSpread(t) {
                let n = t.name.value,
                  r = (function (e, t) {
                    let n = e.getFragment(t);
                    if (n) {
                      let t = rx(e.getSchema(), n.typeCondition);
                      if (nb(t)) return t;
                    }
                  })(e, n),
                  i = e.getParentType();
                if (r && i && !nH(e.getSchema(), r, i)) {
                  let s = tM(i),
                    a = tM(r);
                  e.reportError(
                    new tf(
                      `Fragment "${n}" cannot be spread here as objects of type "${s}" can never be of type "${a}".`,
                      { nodes: t }
                    )
                  );
                }
              },
            };
          },
          function (e) {
            let t = Object.create(null),
              n = [],
              r = Object.create(null);
            return {
              OperationDefinition: () => !1,
              FragmentDefinition: (i) => (
                (function i(s) {
                  if (t[s.name.value]) return;
                  let a = s.name.value;
                  t[a] = !0;
                  let o = e.getFragmentSpreads(s.selectionSet);
                  if (0 !== o.length) {
                    for (let t of ((r[a] = n.length), o)) {
                      let s = t.name.value,
                        a = r[s];
                      if ((n.push(t), void 0 === a)) {
                        let t = e.getFragment(s);
                        t && i(t);
                      } else {
                        let t = n.slice(a),
                          r = t
                            .slice(0, -1)
                            .map((e) => '"' + e.name.value + '"')
                            .join(', ');
                        e.reportError(
                          new tf(
                            `Cannot spread fragment "${s}" within itself` +
                              ('' !== r ? ` via ${r}.` : '.'),
                            { nodes: t }
                          )
                        );
                      }
                      n.pop();
                    }
                    r[a] = void 0;
                  }
                })(i),
                !1
              ),
            };
          },
          function (e) {
            return {
              OperationDefinition(t) {
                var n;
                for (let [r, i] of ii(
                  null !== (n = t.variableDefinitions) && void 0 !== n ? n : [],
                  (e) => e.variable.name.value
                ))
                  i.length > 1 &&
                    e.reportError(
                      new tf(`There can be only one variable named "$${r}".`, {
                        nodes: i.map((e) => e.variable.name),
                      })
                    );
              },
            };
          },
          function (e) {
            let t = Object.create(null);
            return {
              OperationDefinition: {
                enter() {
                  t = Object.create(null);
                },
                leave(n) {
                  for (let { node: r } of e.getRecursiveVariableUsages(n)) {
                    let i = r.name.value;
                    !0 !== t[i] &&
                      e.reportError(
                        new tf(
                          n.name
                            ? `Variable "$${i}" is not defined by operation "${n.name.value}".`
                            : `Variable "$${i}" is not defined.`,
                          { nodes: [r, n] }
                        )
                      );
                  }
                },
              },
              VariableDefinition(e) {
                t[e.variable.name.value] = !0;
              },
            };
          },
          function (e) {
            let t = [];
            return {
              OperationDefinition: {
                enter() {
                  t = [];
                },
                leave(n) {
                  let r = Object.create(null);
                  for (let { node: t } of e.getRecursiveVariableUsages(n))
                    r[t.name.value] = !0;
                  for (let i of t) {
                    let t = i.variable.name.value;
                    !0 !== r[t] &&
                      e.reportError(
                        new tf(
                          n.name
                            ? `Variable "$${t}" is never used in operation "${n.name.value}".`
                            : `Variable "$${t}" is never used.`,
                          { nodes: i }
                        )
                      );
                  }
                },
              },
              VariableDefinition(e) {
                t.push(e);
              },
            };
          },
          rU,
          ia,
          function (e) {
            return {
              ...rj(e),
              Argument(t) {
                let n = e.getArgument(),
                  r = e.getFieldDef(),
                  i = e.getParentType();
                if (!n && r && i) {
                  let n = t.name.value,
                    s = tW(
                      n,
                      r.args.map((e) => e.name)
                    );
                  e.reportError(
                    new tf(
                      `Unknown argument "${n}" on field "${i.name}.${r.name}".` +
                        tQ(s),
                      { nodes: t }
                    )
                  );
                }
              },
            };
          },
          is,
          function (e) {
            let t = {};
            return {
              OperationDefinition: {
                enter() {
                  t = {};
                },
              },
              VariableDefinition(e) {
                t[e.variable.name.value] = e;
              },
              ListValue(t) {
                if (!nm(nI(e.getParentInputType()))) return il(e, t), !1;
              },
              ObjectValue(t) {
                let n = nw(e.getInputType());
                if (!nf(n)) return il(e, t), !1;
                let r = tG(t.fields, (e) => e.name.value);
                for (let i of Object.values(n.getFields()))
                  if (!r[i.name] && nJ(i)) {
                    let r = tM(i.type);
                    e.reportError(
                      new tf(
                        `Field "${n.name}.${i.name}" of required type "${r}" was not provided.`,
                        { nodes: t }
                      )
                    );
                  }
                n.isOneOf &&
                  (function (e, t, n, r) {
                    var i;
                    let s = Object.keys(r);
                    if (1 !== s.length) {
                      e.reportError(
                        new tf(
                          `OneOf Input Object "${n.name}" must specify exactly one key.`,
                          { nodes: [t] }
                        )
                      );
                      return;
                    }
                    let a =
                      null === (i = r[s[0]]) || void 0 === i ? void 0 : i.value;
                    (a && a.kind !== w.NULL) ||
                      e.reportError(
                        new tf(`Field "${n.name}.${s[0]}" must be non-null.`, {
                          nodes: [t],
                        })
                      );
                  })(e, t, n, r);
              },
              ObjectField(t) {
                let n = nw(e.getParentInputType());
                if (!e.getInputType() && nf(n)) {
                  let r = tW(t.name.value, Object.keys(n.getFields()));
                  e.reportError(
                    new tf(
                      `Field "${t.name.value}" is not defined by type "${n.name}".` +
                        tQ(r),
                      { nodes: t }
                    )
                  );
                }
              },
              NullValue(t) {
                let n = e.getInputType();
                ng(n) &&
                  e.reportError(
                    new tf(
                      `Expected value of type "${tM(n)}", found ${t5(t)}.`,
                      { nodes: t }
                    )
                  );
              },
              EnumValue: (t) => il(e, t),
              IntValue: (t) => il(e, t),
              FloatValue: (t) => il(e, t),
              StringValue: (t) => il(e, t),
              BooleanValue: (t) => il(e, t),
            };
          },
          function (e) {
            return {
              ...rZ(e),
              Field: {
                leave(t) {
                  var n;
                  let r = e.getFieldDef();
                  if (!r) return !1;
                  let i = new Set(
                    null === (n = t.arguments) || void 0 === n
                      ? void 0
                      : n.map((e) => e.name.value)
                  );
                  for (let n of r.args)
                    if (!i.has(n.name) && nF(n)) {
                      let i = tM(n.type);
                      e.reportError(
                        new tf(
                          `Field "${r.name}" argument "${n.name}" of type "${i}" is required, but it was not provided.`,
                          { nodes: t }
                        )
                      );
                    }
                },
              },
            };
          },
          function (e) {
            let t = Object.create(null);
            return {
              OperationDefinition: {
                enter() {
                  t = Object.create(null);
                },
                leave(n) {
                  for (let {
                    node: s,
                    type: a,
                    defaultValue: o,
                    parentType: l,
                  } of e.getRecursiveVariableUsages(n)) {
                    let n = s.name.value,
                      u = t[n];
                    if (u && a) {
                      var r, i;
                      let t = e.getSchema(),
                        c = rx(t, u.type);
                      if (
                        c &&
                        ((r = u.defaultValue),
                        ng(a) && !ng(c)
                          ? !(
                              ((null != r && r.kind !== w.NULL) ||
                                void 0 !== o) &&
                              nK(t, c, a.ofType)
                            )
                          : !nK(t, c, a))
                      ) {
                        let t = tM(c),
                          r = tM(a);
                        e.reportError(
                          new tf(
                            `Variable "$${n}" of type "${t}" used in position expecting type "${r}".`,
                            { nodes: [u, s] }
                          )
                        );
                      }
                      nf(l) &&
                        l.isOneOf &&
                        nl((i = c)) &&
                        !ng(i) &&
                        e.reportError(
                          new tf(
                            `Variable "$${n}" is of type "${c}" but must be non-nullable to be used for OneOf Input Object "${l}".`,
                            { nodes: [u, s] }
                          )
                        );
                    }
                  }
                },
              },
              VariableDefinition(e) {
                t[e.variable.name.value] = e;
              },
            };
          },
          function (e) {
            let t = new rz(),
              n = new rX(),
              r = new Map();
            return {
              SelectionSet(i) {
                for (let [[s, a], o, l] of (function (e, t, n, r, i, s) {
                  let a = [],
                    [o, l] = rK(e, t, i, s);
                  if (
                    ((function (e, t, n, r, i, s) {
                      for (let [a, o] of Object.entries(s))
                        if (o.length > 1)
                          for (let s = 0; s < o.length; s++)
                            for (let l = s + 1; l < o.length; l++) {
                              let u = rG(e, n, r, i, !1, a, o[s], o[l]);
                              u && t.push(u);
                            }
                    })(e, a, t, n, r, o),
                    0 !== l.length)
                  )
                    for (let i = 0; i < l.length; i++) {
                      rq(e, a, t, n, r, !1, o, l[i]);
                      for (let s = i + 1; s < l.length; s++)
                        rQ(e, a, t, n, r, !1, l[i], l[s]);
                    }
                  return a;
                })(e, r, t, n, e.getParentType(), i)) {
                  let t = (function e(t) {
                    return Array.isArray(t)
                      ? t
                          .map(
                            ([t, n]) =>
                              `subfields "${t}" conflict because ` + e(n)
                          )
                          .join(' and ')
                      : t;
                  })(a);
                  e.reportError(
                    new tf(
                      `Fields "${s}" conflict because ${t}. Use different aliases on the fields to fetch both if this was intentional.`,
                      { nodes: o.concat(l) }
                    )
                  );
                }
              },
            };
          },
          io,
          ...Object.freeze([
            function (e) {
              return {
                Field(t) {
                  if (
                    ('__schema' === t.name.value ||
                      '__type' === t.name.value) &&
                    (function t(n, r = Object.create(null), i = 0) {
                      if (n.kind === w.FRAGMENT_SPREAD) {
                        let s = n.name.value;
                        if (!0 === r[s]) return !1;
                        let a = e.getFragment(s);
                        if (!a) return !1;
                        try {
                          return (r[s] = !0), t(a, r, i);
                        } finally {
                          r[s] = void 0;
                        }
                      }
                      if (
                        n.kind === w.FIELD &&
                        ('fields' === n.name.value ||
                          'interfaces' === n.name.value ||
                          'possibleTypes' === n.name.value ||
                          'inputFields' === n.name.value) &&
                        ++i >= 3
                      )
                        return !0;
                      if ('selectionSet' in n && n.selectionSet) {
                        for (let e of n.selectionSet.selections)
                          if (t(e, r, i)) return !0;
                      }
                      return !1;
                    })(t)
                  )
                    return (
                      e.reportError(
                        new tf('Maximum introspection depth exceeded', {
                          nodes: [t],
                        })
                      ),
                      !1
                    );
                },
              };
            },
          ]),
        ]),
        ic = Object.freeze([
          function (e) {
            var t, n, r;
            let i = e.getSchema(),
              s =
                null !==
                  (t =
                    null !==
                      (n =
                        null !== (r = null == i ? void 0 : i.astNode) &&
                        void 0 !== r
                          ? r
                          : null == i
                          ? void 0
                          : i.getQueryType()) && void 0 !== n
                      ? n
                      : null == i
                      ? void 0
                      : i.getMutationType()) && void 0 !== t
                  ? t
                  : null == i
                  ? void 0
                  : i.getSubscriptionType(),
              a = 0;
            return {
              SchemaDefinition(t) {
                if (s) {
                  e.reportError(
                    new tf(
                      'Cannot define a new schema within a schema extension.',
                      { nodes: t }
                    )
                  );
                  return;
                }
                a > 0 &&
                  e.reportError(
                    new tf('Must provide only one schema definition.', {
                      nodes: t,
                    })
                  ),
                  ++a;
              },
            };
          },
          function (e) {
            let t = e.getSchema(),
              n = Object.create(null),
              r = t
                ? {
                    query: t.getQueryType(),
                    mutation: t.getMutationType(),
                    subscription: t.getSubscriptionType(),
                  }
                : {};
            return { SchemaDefinition: i, SchemaExtension: i };
            function i(t) {
              var i;
              for (let s of null !== (i = t.operationTypes) && void 0 !== i
                ? i
                : []) {
                let t = s.operation,
                  i = n[t];
                r[t]
                  ? e.reportError(
                      new tf(
                        `Type for ${t} already defined in the schema. It cannot be redefined.`,
                        { nodes: s }
                      )
                    )
                  : i
                  ? e.reportError(
                      new tf(`There can be only one ${t} type in schema.`, {
                        nodes: [i, s],
                      })
                    )
                  : (n[t] = s);
              }
              return !1;
            }
          },
          function (e) {
            let t = Object.create(null),
              n = e.getSchema();
            return {
              ScalarTypeDefinition: r,
              ObjectTypeDefinition: r,
              InterfaceTypeDefinition: r,
              UnionTypeDefinition: r,
              EnumTypeDefinition: r,
              InputObjectTypeDefinition: r,
            };
            function r(r) {
              let i = r.name.value;
              if (null != n && n.getType(i)) {
                e.reportError(
                  new tf(
                    `Type "${i}" already exists in the schema. It cannot also be defined in this type definition.`,
                    { nodes: r.name }
                  )
                );
                return;
              }
              return (
                t[i]
                  ? e.reportError(
                      new tf(`There can be only one type named "${i}".`, {
                        nodes: [t[i], r.name],
                      })
                    )
                  : (t[i] = r.name),
                !1
              );
            }
          },
          function (e) {
            let t = e.getSchema(),
              n = t ? t.getTypeMap() : Object.create(null),
              r = Object.create(null);
            return { EnumTypeDefinition: i, EnumTypeExtension: i };
            function i(t) {
              var i;
              let s = t.name.value;
              r[s] || (r[s] = Object.create(null));
              let a = null !== (i = t.values) && void 0 !== i ? i : [],
                o = r[s];
              for (let t of a) {
                let r = t.name.value,
                  i = n[s];
                nh(i) && i.getValue(r)
                  ? e.reportError(
                      new tf(
                        `Enum value "${s}.${r}" already exists in the schema. It cannot also be defined in this type extension.`,
                        { nodes: t.name }
                      )
                    )
                  : o[r]
                  ? e.reportError(
                      new tf(
                        `Enum value "${s}.${r}" can only be defined once.`,
                        { nodes: [o[r], t.name] }
                      )
                    )
                  : (o[r] = t.name);
              }
              return !1;
            }
          },
          function (e) {
            let t = e.getSchema(),
              n = t ? t.getTypeMap() : Object.create(null),
              r = Object.create(null);
            return {
              InputObjectTypeDefinition: i,
              InputObjectTypeExtension: i,
              InterfaceTypeDefinition: i,
              InterfaceTypeExtension: i,
              ObjectTypeDefinition: i,
              ObjectTypeExtension: i,
            };
            function i(t) {
              var i, s;
              let a = t.name.value;
              r[a] || (r[a] = Object.create(null));
              let o = null !== (i = t.fields) && void 0 !== i ? i : [],
                l = r[a];
              for (let t of o) {
                let r = t.name.value;
                (nc((s = n[a])) || nd(s) || nf(s)) && null != s.getFields()[r]
                  ? e.reportError(
                      new tf(
                        `Field "${a}.${r}" already exists in the schema. It cannot also be defined in this type extension.`,
                        { nodes: t.name }
                      )
                    )
                  : l[r]
                  ? e.reportError(
                      new tf(`Field "${a}.${r}" can only be defined once.`, {
                        nodes: [l[r], t.name],
                      })
                    )
                  : (l[r] = t.name);
              }
              return !1;
            }
          },
          function (e) {
            return {
              DirectiveDefinition(e) {
                var t;
                let r = null !== (t = e.arguments) && void 0 !== t ? t : [];
                return n(`@${e.name.value}`, r);
              },
              InterfaceTypeDefinition: t,
              InterfaceTypeExtension: t,
              ObjectTypeDefinition: t,
              ObjectTypeExtension: t,
            };
            function t(e) {
              var t, r;
              let i = e.name.value;
              for (let s of null !== (t = e.fields) && void 0 !== t ? t : []) {
                let e = s.name.value;
                n(
                  `${i}.${e}`,
                  null !== (r = s.arguments) && void 0 !== r ? r : []
                );
              }
              return !1;
            }
            function n(t, n) {
              for (let [r, i] of ii(n, (e) => e.name.value))
                i.length > 1 &&
                  e.reportError(
                    new tf(`Argument "${t}(${r}:)" can only be defined once.`, {
                      nodes: i.map((e) => e.name),
                    })
                  );
              return !1;
            }
          },
          function (e) {
            let t = Object.create(null),
              n = e.getSchema();
            return {
              DirectiveDefinition(r) {
                let i = r.name.value;
                if (null != n && n.getDirective(i)) {
                  e.reportError(
                    new tf(
                      `Directive "@${i}" already exists in the schema. It cannot be redefined.`,
                      { nodes: r.name }
                    )
                  );
                  return;
                }
                return (
                  t[i]
                    ? e.reportError(
                        new tf(
                          `There can be only one directive named "@${i}".`,
                          { nodes: [t[i], r.name] }
                        )
                      )
                    : (t[i] = r.name),
                  !1
                );
              },
            };
          },
          rB,
          rU,
          ia,
          function (e) {
            let t = e.getSchema(),
              n = Object.create(null);
            for (let t of e.getDocument().definitions)
              r$(t) && (n[t.name.value] = t);
            return {
              ScalarTypeExtension: r,
              ObjectTypeExtension: r,
              InterfaceTypeExtension: r,
              UnionTypeExtension: r,
              EnumTypeExtension: r,
              InputObjectTypeExtension: r,
            };
            function r(r) {
              let i;
              let s = r.name.value,
                a = n[s],
                o = null == t ? void 0 : t.getType(s);
              if (
                (a
                  ? (i = rW[a.kind])
                  : o &&
                    (i = nu(o)
                      ? w.SCALAR_TYPE_EXTENSION
                      : nc(o)
                      ? w.OBJECT_TYPE_EXTENSION
                      : nd(o)
                      ? w.INTERFACE_TYPE_EXTENSION
                      : np(o)
                      ? w.UNION_TYPE_EXTENSION
                      : nh(o)
                      ? w.ENUM_TYPE_EXTENSION
                      : nf(o)
                      ? w.INPUT_OBJECT_TYPE_EXTENSION
                      : void tu(!1, 'Unexpected type: ' + tM(o))),
                i)
              ) {
                if (i !== r.kind) {
                  let t = (function (e) {
                    switch (e) {
                      case w.SCALAR_TYPE_EXTENSION:
                        return 'scalar';
                      case w.OBJECT_TYPE_EXTENSION:
                        return 'object';
                      case w.INTERFACE_TYPE_EXTENSION:
                        return 'interface';
                      case w.UNION_TYPE_EXTENSION:
                        return 'union';
                      case w.ENUM_TYPE_EXTENSION:
                        return 'enum';
                      case w.INPUT_OBJECT_TYPE_EXTENSION:
                        return 'input object';
                      default:
                        tu(!1, 'Unexpected kind: ' + tM(e));
                    }
                  })(r.kind);
                  e.reportError(
                    new tf(`Cannot extend non-${t} type "${s}".`, {
                      nodes: a ? [a, r] : r,
                    })
                  );
                }
              } else {
                let i = tW(
                  s,
                  Object.keys({
                    ...n,
                    ...(null == t ? void 0 : t.getTypeMap()),
                  })
                );
                e.reportError(
                  new tf(
                    `Cannot extend type "${s}" because it is not defined.` +
                      tQ(i),
                    { nodes: r.name }
                  )
                );
              }
            }
          },
          rj,
          is,
          io,
          rZ,
        ]);
      class id {
        constructor(e, t) {
          (this._ast = e),
            (this._fragments = void 0),
            (this._fragmentSpreads = new Map()),
            (this._recursivelyReferencedFragments = new Map()),
            (this._onError = t);
        }
        get [Symbol.toStringTag]() {
          return 'ASTValidationContext';
        }
        reportError(e) {
          this._onError(e);
        }
        getDocument() {
          return this._ast;
        }
        getFragment(e) {
          let t;
          if (this._fragments) t = this._fragments;
          else {
            for (let e of ((t = Object.create(null)),
            this.getDocument().definitions))
              e.kind === w.FRAGMENT_DEFINITION && (t[e.name.value] = e);
            this._fragments = t;
          }
          return t[e];
        }
        getFragmentSpreads(e) {
          let t = this._fragmentSpreads.get(e);
          if (!t) {
            let n;
            t = [];
            let r = [e];
            for (; (n = r.pop()); )
              for (let e of n.selections)
                e.kind === w.FRAGMENT_SPREAD
                  ? t.push(e)
                  : e.selectionSet && r.push(e.selectionSet);
            this._fragmentSpreads.set(e, t);
          }
          return t;
        }
        getRecursivelyReferencedFragments(e) {
          let t = this._recursivelyReferencedFragments.get(e);
          if (!t) {
            let n;
            t = [];
            let r = Object.create(null),
              i = [e.selectionSet];
            for (; (n = i.pop()); )
              for (let e of this.getFragmentSpreads(n)) {
                let n = e.name.value;
                if (!0 !== r[n]) {
                  r[n] = !0;
                  let e = this.getFragment(n);
                  e && (t.push(e), i.push(e.selectionSet));
                }
              }
            this._recursivelyReferencedFragments.set(e, t);
          }
          return t;
        }
      }
      class ip extends id {
        constructor(e, t, n) {
          super(e, n), (this._schema = t);
        }
        get [Symbol.toStringTag]() {
          return 'SDLValidationContext';
        }
        getSchema() {
          return this._schema;
        }
      }
      class ih extends id {
        constructor(e, t, n, r) {
          super(t, r),
            (this._schema = e),
            (this._typeInfo = n),
            (this._variableUsages = new Map()),
            (this._recursiveVariableUsages = new Map());
        }
        get [Symbol.toStringTag]() {
          return 'ValidationContext';
        }
        getSchema() {
          return this._schema;
        }
        getVariableUsages(e) {
          let t = this._variableUsages.get(e);
          if (!t) {
            let n = [],
              r = new rC(this._schema);
            t7(
              e,
              rR(r, {
                VariableDefinition: () => !1,
                Variable(e) {
                  n.push({
                    node: e,
                    type: r.getInputType(),
                    defaultValue: r.getDefaultValue(),
                    parentType: r.getParentInputType(),
                  });
                },
              })
            ),
              (t = n),
              this._variableUsages.set(e, t);
          }
          return t;
        }
        getRecursiveVariableUsages(e) {
          let t = this._recursiveVariableUsages.get(e);
          if (!t) {
            for (let n of ((t = this.getVariableUsages(e)),
            this.getRecursivelyReferencedFragments(e)))
              t = t.concat(this.getVariableUsages(n));
            this._recursiveVariableUsages.set(e, t);
          }
          return t;
        }
        getType() {
          return this._typeInfo.getType();
        }
        getParentType() {
          return this._typeInfo.getParentType();
        }
        getInputType() {
          return this._typeInfo.getInputType();
        }
        getParentInputType() {
          return this._typeInfo.getParentInputType();
        }
        getFieldDef() {
          return this._typeInfo.getFieldDef();
        }
        getDirective() {
          return this._typeInfo.getDirective();
        }
        getArgument() {
          return this._typeInfo.getArgument();
        }
        getEnumValue() {
          return this._typeInfo.getEnumValue();
        }
      }
      function im(e) {
        return 'function' == typeof (null == e ? void 0 : e.then);
      }
      function ig(e) {
        return Promise.all(Object.values(e)).then((t) => {
          let n = Object.create(null);
          for (let [r, i] of Object.keys(e).entries()) n[i] = t[r];
          return n;
        });
      }
      class iy extends Error {
        constructor(e) {
          super('Unexpected error value: ' + tM(e)),
            (this.name = 'NonErrorThrown'),
            (this.thrownValue = e);
        }
      }
      function iv(e, t, n) {
        var r;
        let i = e instanceof Error ? e : new iy(e);
        return Array.isArray(i.path)
          ? i
          : new tf(i.message, {
              nodes: null !== (r = i.nodes) && void 0 !== r ? r : t,
              source: i.source,
              positions: i.positions,
              path: n,
              originalError: i,
            });
      }
      let iT = (function (e) {
        let t;
        return function (n, r, i) {
          void 0 === t && (t = new WeakMap());
          let s = t.get(n);
          void 0 === s && ((s = new WeakMap()), t.set(n, s));
          let a = s.get(r);
          void 0 === a && ((a = new WeakMap()), s.set(r, a));
          let o = a.get(i);
          return void 0 === o && ((o = e(n, r, i)), a.set(i, o)), o;
        };
      })((e, t, n) =>
        (function (e, t, n, r, i) {
          let s = new Map(),
            a = new Set();
          for (let o of i)
            o.selectionSet && ie(e, t, n, r, o.selectionSet, s, a);
          return s;
        })(e.schema, e.fragments, e.variableValues, t, n)
      );
      function ib(e, t) {
        return 0 === t.length ? { data: e } : { errors: t, data: e };
      }
      function iE(e, t, n, r, i) {
        let s = Object.create(null),
          a = !1;
        try {
          for (let [o, l] of i.entries()) {
            let i = r2(r, o, t.name),
              u = iN(e, t, n, l, i);
            void 0 !== u && ((s[o] = u), im(u) && (a = !0));
          }
        } catch (e) {
          if (a)
            return ig(s).finally(() => {
              throw e;
            });
          throw e;
        }
        return a ? ig(s) : s;
      }
      function iN(e, t, n, r, i) {
        var s;
        let a = (function (e, t, n) {
          let r = n.name.value;
          return r === rp.name && e.getQueryType() === t
            ? rp
            : r === rh.name && e.getQueryType() === t
            ? rh
            : r === rf.name
            ? rf
            : t.getFields()[r];
        })(e.schema, t, r[0]);
        if (!a) return;
        let o = a.type,
          l = null !== (s = a.resolve) && void 0 !== s ? s : e.fieldResolver,
          u = {
            fieldName: a.name,
            fieldNodes: r,
            returnType: a.type,
            parentType: t,
            path: i,
            schema: e.schema,
            fragments: e.fragments,
            rootValue: e.rootValue,
            operation: e.operation,
            variableValues: e.variableValues,
          };
        try {
          let t;
          let s = r7(a, r[0], e.variableValues),
            c = e.contextValue,
            d = l(n, s, c, u);
          if (
            ((t = im(d)
              ? d.then((t) => iS(e, o, r, u, i, t))
              : iS(e, o, r, u, i, d)),
            im(t))
          )
            return t.then(void 0, (t) => {
              let n = iv(t, r, r4(i));
              return i_(n, o, e);
            });
          return t;
        } catch (t) {
          return i_(iv(t, r, r4(i)), o, e);
        }
      }
      function i_(e, t, n) {
        if (ng(t)) throw e;
        return n.errors.push(e), null;
      }
      function iS(e, t, n, r, i, s) {
        if (s instanceof Error) throw s;
        if (ng(t)) {
          let a = iS(e, t.ofType, n, r, i, s);
          if (null === a)
            throw Error(
              `Cannot return null for non-nullable field ${r.parentType.name}.${r.fieldName}.`
            );
          return a;
        }
        return null == s
          ? null
          : nm(t)
          ? (function (e, t, n, r, i, s) {
              if (!rn(s))
                throw new tf(
                  `Expected Iterable, but did not find one for field "${r.parentType.name}.${r.fieldName}".`
                );
              let a = t.ofType,
                o = !1,
                l = Array.from(s, (t, s) => {
                  let l = r2(i, s, void 0);
                  try {
                    let i;
                    if (
                      ((i = im(t)
                        ? t.then((t) => iS(e, a, n, r, l, t))
                        : iS(e, a, n, r, l, t)),
                      im(i))
                    )
                      return (
                        (o = !0),
                        i.then(void 0, (t) => {
                          let r = iv(t, n, r4(l));
                          return i_(r, a, e);
                        })
                      );
                    return i;
                  } catch (t) {
                    return i_(iv(t, n, r4(l)), a, e);
                  }
                });
              return o ? Promise.all(l) : l;
            })(e, t, n, r, i, s)
          : nT(t)
          ? (function (e, t) {
              let n = e.serialize(t);
              if (null == n)
                throw Error(
                  `Expected \`${tM(e)}.serialize(${tM(
                    t
                  )})\` to return non-nullable value, returned: ${tM(n)}`
                );
              return n;
            })(t, s)
          : nE(t)
          ? (function (e, t, n, r, i, s) {
              var a;
              let o = (
                null !== (a = t.resolveType) && void 0 !== a
                  ? a
                  : e.typeResolver
              )(s, e.contextValue, r, t);
              return im(o)
                ? o.then((a) => iO(e, iI(a, e, t, n, r, s), n, r, i, s))
                : iO(e, iI(o, e, t, n, r, s), n, r, i, s);
            })(e, t, n, r, i, s)
          : nc(t)
          ? iO(e, t, n, r, i, s)
          : void tu(
              !1,
              'Cannot complete value of unexpected output type: ' + tM(t)
            );
      }
      function iI(e, t, n, r, i, s) {
        if (null == e)
          throw new tf(
            `Abstract type "${n.name}" must resolve to an Object type at runtime for field "${i.parentType.name}.${i.fieldName}". Either the "${n.name}" type should provide a "resolveType" function or each possible type should provide an "isTypeOf" function.`,
            r
          );
        if (nc(e))
          throw new tf(
            'Support for returning GraphQLObjectType from resolveType was removed in graphql-js@16.0.0 please return type name instead.'
          );
        if ('string' != typeof e)
          throw new tf(
            `Abstract type "${
              n.name
            }" must resolve to an Object type at runtime for field "${
              i.parentType.name
            }.${i.fieldName}" with value ${tM(s)}, received "${tM(e)}".`
          );
        let a = t.schema.getType(e);
        if (null == a)
          throw new tf(
            `Abstract type "${n.name}" was resolved to a type "${e}" that does not exist inside the schema.`,
            { nodes: r }
          );
        if (!nc(a))
          throw new tf(
            `Abstract type "${n.name}" was resolved to a non-object type "${e}".`,
            { nodes: r }
          );
        if (!t.schema.isSubType(n, a))
          throw new tf(
            `Runtime Object type "${a.name}" is not a possible type for "${n.name}".`,
            { nodes: r }
          );
        return a;
      }
      function iO(e, t, n, r, i, s) {
        let a = iT(e, t, n);
        if (t.isTypeOf) {
          let o = t.isTypeOf(s, e.contextValue, r);
          if (im(o))
            return o.then((r) => {
              if (!r) throw iw(t, s, n);
              return iE(e, t, s, i, a);
            });
          if (!o) throw iw(t, s, n);
        }
        return iE(e, t, s, i, a);
      }
      function iw(e, t, n) {
        return new tf(`Expected value of type "${e.name}" but got: ${tM(t)}.`, {
          nodes: n,
        });
      }
      let iA = function (e, t, n, r) {
          if (tl(e) && 'string' == typeof e.__typename) return e.__typename;
          let i = n.schema.getPossibleTypes(r),
            s = [];
          for (let r = 0; r < i.length; r++) {
            let a = i[r];
            if (a.isTypeOf) {
              let i = a.isTypeOf(e, t, n);
              if (im(i)) s[r] = i;
              else if (i)
                return (
                  s.length && Promise.allSettled(s).catch(() => {}), a.name
                );
            }
          }
          if (s.length)
            return Promise.all(s).then((e) => {
              for (let t = 0; t < e.length; t++) if (e[t]) return i[t].name;
            });
        },
        ix = function (e, t, n, r) {
          if (tl(e) || 'function' == typeof e) {
            let i = e[r.fieldName];
            return 'function' == typeof i ? e[r.fieldName](t, n, r) : i;
          }
        },
        iC = tG([...n1, ...rm], (e) => e.name);
      function iD(e) {
        let t = r6(n6, e);
        return null == t ? void 0 : t.reason;
      }
      function iR(e) {
        let t = r6(n8, e);
        return null == t ? void 0 : t.url;
      }
      function iL(e, t) {
        (null != e && e.kind === w.DOCUMENT) ||
          to(!1, 'Must provide valid Document AST.'),
          (null == t ? void 0 : t.assumeValid) !== !0 &&
            (null == t ? void 0 : t.assumeValidSDL) !== !0 &&
            (function (e) {
              let t = (function (e, t, n = ic) {
                let r = [],
                  i = new ip(e, void 0, (e) => {
                    r.push(e);
                  });
                return t7(e, t6(n.map((e) => e(i)))), r;
              })(e);
              if (0 !== t.length)
                throw Error(t.map((e) => e.message).join('\n\n'));
            })(e);
        let n = (function (e, t, n) {
          var r, i, s, a, o;
          let l;
          let u = [],
            c = Object.create(null),
            d = [],
            p = [];
          for (let e of t.definitions)
            if (e.kind === w.SCHEMA_DEFINITION) l = e;
            else if (e.kind === w.SCHEMA_EXTENSION) p.push(e);
            else if (r$(e)) u.push(e);
            else if (rF(e)) {
              let t = e.name.value,
                n = c[t];
              c[t] = n ? n.concat([e]) : [e];
            } else e.kind === w.DIRECTIVE_DEFINITION && d.push(e);
          if (
            0 === Object.keys(c).length &&
            0 === u.length &&
            0 === d.length &&
            0 === p.length &&
            null == l
          )
            return e;
          let h = Object.create(null);
          for (let t of e.types)
            h[t.name] =
              rg(t) || n2(t)
                ? t
                : nu(t)
                ? (function (e) {
                    var t, n;
                    let r = e.toConfig(),
                      i = null !== (t = c[r.name]) && void 0 !== t ? t : [],
                      s = r.specifiedByURL;
                    for (let e of i)
                      s = null !== (n = iR(e)) && void 0 !== n ? n : s;
                    return new nC({
                      ...r,
                      specifiedByURL: s,
                      extensionASTNodes: r.extensionASTNodes.concat(i),
                    });
                  })(t)
                : nc(t)
                ? (function (e) {
                    var t;
                    let n = e.toConfig(),
                      r = null !== (t = c[n.name]) && void 0 !== t ? t : [];
                    return new nD({
                      ...n,
                      interfaces: () => [...e.getInterfaces().map(g), ...O(r)],
                      fields: () => ({ ...tK(n.fields, y), ...N(r) }),
                      extensionASTNodes: n.extensionASTNodes.concat(r),
                    });
                  })(t)
                : nd(t)
                ? (function (e) {
                    var t;
                    let n = e.toConfig(),
                      r = null !== (t = c[n.name]) && void 0 !== t ? t : [];
                    return new nj({
                      ...n,
                      interfaces: () => [...e.getInterfaces().map(g), ...O(r)],
                      fields: () => ({ ...tK(n.fields, y), ...N(r) }),
                      extensionASTNodes: n.extensionASTNodes.concat(r),
                    });
                  })(t)
                : np(t)
                ? (function (e) {
                    var t;
                    let n = e.toConfig(),
                      r = null !== (t = c[n.name]) && void 0 !== t ? t : [];
                    return new nU({
                      ...n,
                      types: () => [...e.getTypes().map(g), ...A(r)],
                      extensionASTNodes: n.extensionASTNodes.concat(r),
                    });
                  })(t)
                : nh(t)
                ? (function (e) {
                    var t;
                    let n = e.toConfig(),
                      r = null !== (t = c[e.name]) && void 0 !== t ? t : [];
                    return new nV({
                      ...n,
                      values: { ...n.values, ...I(r) },
                      extensionASTNodes: n.extensionASTNodes.concat(r),
                    });
                  })(t)
                : nf(t)
                ? (function (e) {
                    var t;
                    let n = e.toConfig(),
                      r = null !== (t = c[n.name]) && void 0 !== t ? t : [];
                    return new nY({
                      ...n,
                      fields: () => ({
                        ...tK(n.fields, (e) => ({ ...e, type: m(e.type) })),
                        ...S(r),
                      }),
                      extensionASTNodes: n.extensionASTNodes.concat(r),
                    });
                  })(t)
                : void tu(!1, 'Unexpected type: ' + tM(t));
          for (let e of u) {
            let t = e.name.value;
            h[t] =
              null !== (o = iC[t]) && void 0 !== o
                ? o
                : (function (e) {
                    var t, n, r, i, s, a, o;
                    let l = e.name.value,
                      u = null !== (t = c[l]) && void 0 !== t ? t : [];
                    switch (e.kind) {
                      case w.OBJECT_TYPE_DEFINITION: {
                        let t = [e, ...u];
                        return new nD({
                          name: l,
                          description:
                            null === (n = e.description) || void 0 === n
                              ? void 0
                              : n.value,
                          interfaces: () => O(t),
                          fields: () => N(t),
                          astNode: e,
                          extensionASTNodes: u,
                        });
                      }
                      case w.INTERFACE_TYPE_DEFINITION: {
                        let t = [e, ...u];
                        return new nj({
                          name: l,
                          description:
                            null === (r = e.description) || void 0 === r
                              ? void 0
                              : r.value,
                          interfaces: () => O(t),
                          fields: () => N(t),
                          astNode: e,
                          extensionASTNodes: u,
                        });
                      }
                      case w.ENUM_TYPE_DEFINITION: {
                        let t = [e, ...u];
                        return new nV({
                          name: l,
                          description:
                            null === (i = e.description) || void 0 === i
                              ? void 0
                              : i.value,
                          values: I(t),
                          astNode: e,
                          extensionASTNodes: u,
                        });
                      }
                      case w.UNION_TYPE_DEFINITION: {
                        let t = [e, ...u];
                        return new nU({
                          name: l,
                          description:
                            null === (s = e.description) || void 0 === s
                              ? void 0
                              : s.value,
                          types: () => A(t),
                          astNode: e,
                          extensionASTNodes: u,
                        });
                      }
                      case w.SCALAR_TYPE_DEFINITION:
                        return new nC({
                          name: l,
                          description:
                            null === (a = e.description) || void 0 === a
                              ? void 0
                              : a.value,
                          specifiedByURL: iR(e),
                          astNode: e,
                          extensionASTNodes: u,
                        });
                      case w.INPUT_OBJECT_TYPE_DEFINITION: {
                        let t = [e, ...u];
                        return new nY({
                          name: l,
                          description:
                            null === (o = e.description) || void 0 === o
                              ? void 0
                              : o.value,
                          fields: () => S(t),
                          astNode: e,
                          extensionASTNodes: u,
                          isOneOf: !!r6(n5, e),
                        });
                      }
                    }
                  })(e);
          }
          let f = {
            query: e.query && g(e.query),
            mutation: e.mutation && g(e.mutation),
            subscription: e.subscription && g(e.subscription),
            ...(l && T([l])),
            ...T(p),
          };
          return {
            description:
              null === (r = l) || void 0 === r
                ? void 0
                : null === (i = r.description) || void 0 === i
                ? void 0
                : i.value,
            ...f,
            types: Object.values(h),
            directives: [
              ...e.directives.map(function (e) {
                let t = e.toConfig();
                return new n3({ ...t, args: tK(t.args, v) });
              }),
              ...d.map(function (e) {
                var t;
                return new n3({
                  name: e.name.value,
                  description:
                    null === (t = e.description) || void 0 === t
                      ? void 0
                      : t.value,
                  locations: e.locations.map(({ value: e }) => e),
                  isRepeatable: e.repeatable,
                  args: _(e.arguments),
                  astNode: e,
                });
              }),
            ],
            extensions: Object.create(null),
            astNode: null !== (s = l) && void 0 !== s ? s : e.astNode,
            extensionASTNodes: e.extensionASTNodes.concat(p),
            assumeValid:
              null !== (a = null == n ? void 0 : n.assumeValid) &&
              void 0 !== a &&
              a,
          };
          function m(e) {
            return nm(e)
              ? new nN(m(e.ofType))
              : ng(e)
              ? new n_(m(e.ofType))
              : g(e);
          }
          function g(e) {
            return h[e.name];
          }
          function y(e) {
            return { ...e, type: m(e.type), args: e.args && tK(e.args, v) };
          }
          function v(e) {
            return { ...e, type: m(e.type) };
          }
          function T(e) {
            let t = {};
            for (let r of e) {
              var n;
              for (let e of null !== (n = r.operationTypes) && void 0 !== n
                ? n
                : [])
                t[e.operation] = b(e.type);
            }
            return t;
          }
          function b(e) {
            var t;
            let n = e.name.value,
              r = null !== (t = iC[n]) && void 0 !== t ? t : h[n];
            if (void 0 === r) throw Error(`Unknown type: "${n}".`);
            return r;
          }
          function E(e) {
            return e.kind === w.LIST_TYPE
              ? new nN(E(e.type))
              : e.kind === w.NON_NULL_TYPE
              ? new n_(E(e.type))
              : b(e);
          }
          function N(e) {
            let t = Object.create(null);
            for (let i of e) {
              var n, r;
              for (let e of null !== (n = i.fields) && void 0 !== n ? n : [])
                t[e.name.value] = {
                  type: E(e.type),
                  description:
                    null === (r = e.description) || void 0 === r
                      ? void 0
                      : r.value,
                  args: _(e.arguments),
                  deprecationReason: iD(e),
                  astNode: e,
                };
            }
            return t;
          }
          function _(e) {
            let t = Object.create(null);
            for (let r of null != e ? e : []) {
              var n;
              let e = E(r.type);
              t[r.name.value] = {
                type: e,
                description:
                  null === (n = r.description) || void 0 === n
                    ? void 0
                    : n.value,
                defaultValue: r3(r.defaultValue, e),
                deprecationReason: iD(r),
                astNode: r,
              };
            }
            return t;
          }
          function S(e) {
            let t = Object.create(null);
            for (let i of e) {
              var n, r;
              for (let e of null !== (n = i.fields) && void 0 !== n ? n : []) {
                let n = E(e.type);
                t[e.name.value] = {
                  type: n,
                  description:
                    null === (r = e.description) || void 0 === r
                      ? void 0
                      : r.value,
                  defaultValue: r3(e.defaultValue, n),
                  deprecationReason: iD(e),
                  astNode: e,
                };
              }
            }
            return t;
          }
          function I(e) {
            let t = Object.create(null);
            for (let i of e) {
              var n, r;
              for (let e of null !== (n = i.values) && void 0 !== n ? n : [])
                t[e.name.value] = {
                  description:
                    null === (r = e.description) || void 0 === r
                      ? void 0
                      : r.value,
                  deprecationReason: iD(e),
                  astNode: e,
                };
            }
            return t;
          }
          function O(e) {
            return e.flatMap((e) => {
              var t, n;
              return null !==
                (t =
                  null === (n = e.interfaces) || void 0 === n
                    ? void 0
                    : n.map(b)) && void 0 !== t
                ? t
                : [];
            });
          }
          function A(e) {
            return e.flatMap((e) => {
              var t, n;
              return null !==
                (t =
                  null === (n = e.types) || void 0 === n ? void 0 : n.map(b)) &&
                void 0 !== t
                ? t
                : [];
            });
          }
        })(
          {
            description: void 0,
            types: [],
            directives: [],
            extensions: Object.create(null),
            extensionASTNodes: [],
            assumeValid: !1,
          },
          e,
          t
        );
        if (null == n.astNode)
          for (let e of n.types)
            switch (e.name) {
              case 'Query':
                n.query = e;
                break;
              case 'Mutation':
                n.mutation = e;
                break;
              case 'Subscription':
                n.subscription = e;
            }
        let r = [
          ...n.directives,
          ...re.filter((e) => n.directives.every((t) => t.name !== e.name)),
        ];
        return new ry({ ...n, directives: r });
      }
      let iP = {};
      function ik(e, t, n, r) {
        let i = (function (e) {
          let t = (function (e) {
            let t = e.loc;
            if (!t) return;
            let n = [],
              r = t.startToken.prev;
            for (
              ;
              null != r &&
              r.kind === A.COMMENT &&
              null != r.next &&
              null != r.prev &&
              r.line + 1 === r.next.line &&
              r.line !== r.prev.line;

            ) {
              let e = String(r.value);
              n.push(e), (r = r.prev);
            }
            return n.length > 0 ? n.reverse().join('\n') : void 0;
          })(e);
          if (void 0 !== t)
            return (function (e) {
              let t = e.split(/\r\n|[\n\r]/g),
                n = (function (e) {
                  let t = null;
                  for (let n = 1; n < e.length; n++) {
                    let r = e[n],
                      i = iQ(r);
                    if (
                      i !== r.length &&
                      (null === t || i < t) &&
                      0 === (t = i)
                    )
                      break;
                  }
                  return null === t ? 0 : t;
                })(t);
              if (0 !== n)
                for (let e = 1; e < t.length; e++) t[e] = t[e].slice(n);
              for (; t.length > 0 && iY(t[0]); ) t.shift();
              for (; t.length > 0 && iY(t[t.length - 1]); ) t.pop();
              return t.join('\n');
            })(`
${t}`);
        })(e);
        if ('string' != typeof i || 0 === i.length) return;
        let s = [t];
        n && (s.push(n), r && s.push(r));
        let a = s.join('.');
        iP[a] || (iP[a] = []), iP[a].push(i);
      }
      function i$(e) {
        return '\n# ' + e.replace(/\n/g, '\n# ');
      }
      function iM(e, t) {
        return e ? e.filter((e) => e).join(t || '') : '';
      }
      function iF(e) {
        return e?.some((e) => e.includes('\n')) ?? !1;
      }
      function ij(e) {
        return e && `  ${e.replace(/\n/g, '\n  ')}`;
      }
      function iU(e) {
        return e && 0 !== e.length
          ? `{
${ij(iM(e, '\n'))}
}`
          : '';
      }
      function iB(e, t, n) {
        return t ? e + t + (n || '') : '';
      }
      let iV = {
          Name: { leave: (e) => e.value },
          Variable: { leave: (e) => '$' + e.name },
          Document: { leave: (e) => iM(e.definitions, '\n\n') },
          OperationDefinition: {
            leave: (e) => {
              let t = iB('(', iM(e.variableDefinitions, ', '), ')');
              return (
                iM([e.operation, iM([e.name, t]), iM(e.directives, ' ')], ' ') +
                ' ' +
                e.selectionSet
              );
            },
          },
          VariableDefinition: {
            leave: ({ variable: e, type: t, defaultValue: n, directives: r }) =>
              e + ': ' + t + iB(' = ', n) + iB(' ', iM(r, ' ')),
          },
          SelectionSet: { leave: ({ selections: e }) => iU(e) },
          Field: {
            leave({
              alias: e,
              name: t,
              arguments: n,
              directives: r,
              selectionSet: i,
            }) {
              let s = iB('', e, ': ') + t,
                a = s + iB('(', iM(n, ', '), ')');
              return (
                a.length > 80 && (a = s + iB('(\n', ij(iM(n, '\n')), '\n)')),
                iM([a, iM(r, ' '), i], ' ')
              );
            },
          },
          Argument: { leave: ({ name: e, value: t }) => e + ': ' + t },
          FragmentSpread: {
            leave: ({ name: e, directives: t }) =>
              '...' + e + iB(' ', iM(t, ' ')),
          },
          InlineFragment: {
            leave: ({ typeCondition: e, directives: t, selectionSet: n }) =>
              iM(['...', iB('on ', e), iM(t, ' '), n], ' '),
          },
          FragmentDefinition: {
            leave: ({
              name: e,
              typeCondition: t,
              variableDefinitions: n,
              directives: r,
              selectionSet: i,
            }) =>
              `fragment ${e}${iB('(', iM(n, ', '), ')')} on ${t} ${iB(
                '',
                iM(r, ' '),
                ' '
              )}` + i,
          },
          IntValue: { leave: ({ value: e }) => e },
          FloatValue: { leave: ({ value: e }) => e },
          StringValue: {
            leave: ({ value: e, block: t }) =>
              t
                ? (function (e, t = !1) {
                    let n = e.replace(/\\/g, '\\\\').replace(/"""/g, '\\"""');
                    return (' ' === e[0] || '	' === e[0]) &&
                      -1 === e.indexOf('\n')
                      ? `"""${n.replace(/"$/, '"\n')}"""`
                      : `"""
${t ? n : ij(n)}
"""`;
                  })(e)
                : JSON.stringify(e),
          },
          BooleanValue: { leave: ({ value: e }) => (e ? 'true' : 'false') },
          NullValue: { leave: () => 'null' },
          EnumValue: { leave: ({ value: e }) => e },
          ListValue: { leave: ({ values: e }) => '[' + iM(e, ', ') + ']' },
          ObjectValue: { leave: ({ fields: e }) => '{' + iM(e, ', ') + '}' },
          ObjectField: { leave: ({ name: e, value: t }) => e + ': ' + t },
          Directive: {
            leave: ({ name: e, arguments: t }) =>
              '@' + e + iB('(', iM(t, ', '), ')'),
          },
          NamedType: { leave: ({ name: e }) => e },
          ListType: { leave: ({ type: e }) => '[' + e + ']' },
          NonNullType: { leave: ({ type: e }) => e + '!' },
          SchemaDefinition: {
            leave: ({ directives: e, operationTypes: t }) =>
              iM(['schema', iM(e, ' '), iU(t)], ' '),
          },
          OperationTypeDefinition: {
            leave: ({ operation: e, type: t }) => e + ': ' + t,
          },
          ScalarTypeDefinition: {
            leave: ({ name: e, directives: t }) =>
              iM(['scalar', e, iM(t, ' ')], ' '),
          },
          ObjectTypeDefinition: {
            leave: ({ name: e, interfaces: t, directives: n, fields: r }) =>
              iM(
                ['type', e, iB('implements ', iM(t, ' & ')), iM(n, ' '), iU(r)],
                ' '
              ),
          },
          FieldDefinition: {
            leave: ({ name: e, arguments: t, type: n, directives: r }) =>
              e +
              (iF(t)
                ? iB('(\n', ij(iM(t, '\n')), '\n)')
                : iB('(', iM(t, ', '), ')')) +
              ': ' +
              n +
              iB(' ', iM(r, ' ')),
          },
          InputValueDefinition: {
            leave: ({ name: e, type: t, defaultValue: n, directives: r }) =>
              iM([e + ': ' + t, iB('= ', n), iM(r, ' ')], ' '),
          },
          InterfaceTypeDefinition: {
            leave: ({ name: e, interfaces: t, directives: n, fields: r }) =>
              iM(
                [
                  'interface',
                  e,
                  iB('implements ', iM(t, ' & ')),
                  iM(n, ' '),
                  iU(r),
                ],
                ' '
              ),
          },
          UnionTypeDefinition: {
            leave: ({ name: e, directives: t, types: n }) =>
              iM(['union', e, iM(t, ' '), iB('= ', iM(n, ' | '))], ' '),
          },
          EnumTypeDefinition: {
            leave: ({ name: e, directives: t, values: n }) =>
              iM(['enum', e, iM(t, ' '), iU(n)], ' '),
          },
          EnumValueDefinition: {
            leave: ({ name: e, directives: t }) => iM([e, iM(t, ' ')], ' '),
          },
          InputObjectTypeDefinition: {
            leave: ({ name: e, directives: t, fields: n }) =>
              iM(['input', e, iM(t, ' '), iU(n)], ' '),
          },
          DirectiveDefinition: {
            leave: ({ name: e, arguments: t, repeatable: n, locations: r }) =>
              'directive @' +
              e +
              (iF(t)
                ? iB('(\n', ij(iM(t, '\n')), '\n)')
                : iB('(', iM(t, ', '), ')')) +
              (n ? ' repeatable' : '') +
              ' on ' +
              iM(r, ' | '),
          },
          SchemaExtension: {
            leave: ({ directives: e, operationTypes: t }) =>
              iM(['extend schema', iM(e, ' '), iU(t)], ' '),
          },
          ScalarTypeExtension: {
            leave: ({ name: e, directives: t }) =>
              iM(['extend scalar', e, iM(t, ' ')], ' '),
          },
          ObjectTypeExtension: {
            leave: ({ name: e, interfaces: t, directives: n, fields: r }) =>
              iM(
                [
                  'extend type',
                  e,
                  iB('implements ', iM(t, ' & ')),
                  iM(n, ' '),
                  iU(r),
                ],
                ' '
              ),
          },
          InterfaceTypeExtension: {
            leave: ({ name: e, interfaces: t, directives: n, fields: r }) =>
              iM(
                [
                  'extend interface',
                  e,
                  iB('implements ', iM(t, ' & ')),
                  iM(n, ' '),
                  iU(r),
                ],
                ' '
              ),
          },
          UnionTypeExtension: {
            leave: ({ name: e, directives: t, types: n }) =>
              iM(['extend union', e, iM(t, ' '), iB('= ', iM(n, ' | '))], ' '),
          },
          EnumTypeExtension: {
            leave: ({ name: e, directives: t, values: n }) =>
              iM(['extend enum', e, iM(t, ' '), iU(n)], ' '),
          },
          InputObjectTypeExtension: {
            leave: ({ name: e, directives: t, fields: n }) =>
              iM(['extend input', e, iM(t, ' '), iU(n)], ' '),
          },
        },
        iq = Object.keys(iV).reduce((e, t) => {
          var n;
          return {
            ...e,
            [t]: {
              leave:
                ((n = iV[t].leave),
                (e, t, r, i, s) => {
                  let a = [],
                    o = i.reduce(
                      (e, t) => (
                        ['fields', 'arguments', 'values'].includes(t) &&
                          e.name &&
                          a.push(e.name.value),
                        e[t]
                      ),
                      s[0]
                    ),
                    l = [...a, o?.name?.value].filter(Boolean).join('.'),
                    u = [];
                  return (
                    e.kind.includes('Definition') && iP[l] && u.push(...iP[l]),
                    iM([...u.map(i$), e.description, n(e, t, r, i, s)], '\n')
                  );
                }),
            },
          };
        }, {});
      function iQ(e) {
        let t = 0;
        for (; t < e.length && (' ' === e[t] || '	' === e[t]); ) t++;
        return t;
      }
      function iY(e) {
        return iQ(e) === e.length;
      }
      function iG(e) {
        return iJ(e, []);
      }
      function iJ(e, t) {
        switch (typeof e) {
          case 'string':
            return JSON.stringify(e);
          case 'function':
            return e.name ? `[function ${e.name}]` : '[function]';
          case 'object':
            return (function (e, t) {
              if (null === e) return 'null';
              if (e instanceof Error)
                return 'AggregateError' === e.name
                  ? iK(e) + '\n' + iH(e.errors, t)
                  : iK(e);
              if (t.includes(e)) return '[Circular]';
              let n = [...t, e];
              if ('function' == typeof e.toJSON) {
                let t = e.toJSON();
                if (t !== e) return 'string' == typeof t ? t : iJ(t, n);
              } else if (Array.isArray(e)) return iH(e, n);
              return (function (e, t) {
                let n = Object.entries(e);
                return 0 === n.length
                  ? '{}'
                  : t.length > 3
                  ? '[' +
                    (function (e) {
                      let t = Object.prototype.toString
                        .call(e)
                        .replace(/^\[object /, '')
                        .replace(/]$/, '');
                      if (
                        'Object' === t &&
                        'function' == typeof e.constructor
                      ) {
                        let t = e.constructor.name;
                        if ('string' == typeof t && '' !== t) return t;
                      }
                      return t;
                    })(e) +
                    ']'
                  : '{ ' +
                    n.map(([e, n]) => e + ': ' + iJ(n, t)).join(', ') +
                    ' }';
              })(e, n);
            })(e, t);
          default:
            return String(e);
        }
      }
      function iK(e) {
        return (e.name = 'GraphQLError'), e.toString();
      }
      function iH(e, t) {
        if (0 === e.length) return '[]';
        if (t.length > 3) return '[Array]';
        let n = e.length,
          r = [];
        for (let i = 0; i < n; ++i) r.push(iJ(e[i], t));
        return '[' + r.join(', ') + ']';
      }
      function iz(e) {
        if (ng(e)) {
          let t = iz(e.ofType);
          if (t.kind === w.NON_NULL_TYPE)
            throw Error(
              `Invalid type node ${iG(
                e
              )}. Inner type of non-null type cannot be a non-null type.`
            );
          return { kind: w.NON_NULL_TYPE, type: t };
        }
        return nm(e)
          ? { kind: w.LIST_TYPE, type: iz(e.ofType) }
          : { kind: w.NAMED_TYPE, name: { kind: w.NAME, value: e.name } };
      }
      function iX(e) {
        if (null === e) return { kind: w.NULL };
        if (void 0 === e) return null;
        if (Array.isArray(e)) {
          let t = [];
          for (let n of e) {
            let e = iX(n);
            null != e && t.push(e);
          }
          return { kind: w.LIST, values: t };
        }
        if ('object' == typeof e) {
          if (e?.toJSON) return iX(e.toJSON());
          let t = [];
          for (let n in e) {
            let r = iX(e[n]);
            r &&
              t.push({
                kind: w.OBJECT_FIELD,
                name: { kind: w.NAME, value: n },
                value: r,
              });
          }
          return { kind: w.OBJECT, fields: t };
        }
        if ('boolean' == typeof e) return { kind: w.BOOLEAN, value: e };
        if ('bigint' == typeof e) return { kind: w.INT, value: String(e) };
        if ('number' == typeof e && isFinite(e)) {
          let t = String(e);
          return iW.test(t)
            ? { kind: w.INT, value: t }
            : { kind: w.FLOAT, value: t };
        }
        if ('string' == typeof e) return { kind: w.STRING, value: e };
        throw TypeError(`Cannot convert value to AST: ${e}.`);
      }
      let iW = /^-?(?:0|[1-9][0-9]*)$/;
      function iZ(e, t) {
        if (ng(t)) {
          let n = iZ(e, t.ofType);
          return n?.kind === w.NULL ? null : n;
        }
        if (null === e) return { kind: w.NULL };
        if (void 0 === e) return null;
        if (nm(t)) {
          let n = t.ofType;
          if (null != e && 'object' == typeof e && Symbol.iterator in e) {
            let t = [];
            for (let r of e) {
              let e = iZ(r, n);
              null != e && t.push(e);
            }
            return { kind: w.LIST, values: t };
          }
          return iZ(e, n);
        }
        if (nf(t)) {
          if (!('object' == typeof e && null !== e)) return null;
          let n = [];
          for (let r of Object.values(t.getFields())) {
            let t = iZ(e[r.name], r.type);
            t &&
              n.push({
                kind: w.OBJECT_FIELD,
                name: { kind: w.NAME, value: r.name },
                value: t,
              });
          }
          return { kind: w.OBJECT, fields: n };
        }
        if (nT(t)) {
          let n = t.serialize(e);
          return null == n
            ? null
            : nh(t)
            ? { kind: w.ENUM, value: n }
            : 'ID' === t.name && 'string' == typeof n && i0.test(n)
            ? { kind: w.INT, value: n }
            : iX(n);
        }
        console.assert(!1, 'Unexpected input type: ' + iG(t));
      }
      let i0 = /^-?(?:0|[1-9][0-9]*)$/;
      function i1(e) {
        return e.astNode?.description
          ? { ...e.astNode.description, block: !0 }
          : e.description
          ? { kind: w.STRING, value: e.description, block: !0 }
          : void 0;
      }
      let i2 = Object.freeze({
          major: 16,
          minor: 12,
          patch: 0,
          preReleaseTag: null,
        }),
        i4 = [
          'message',
          'locations',
          'path',
          'nodes',
          'source',
          'positions',
          'originalError',
          'name',
          'stack',
          'extensions',
          'coordinate',
        ];
      function i3(e, t) {
        var n;
        t?.originalError &&
          !(t.originalError instanceof Error) &&
          null != (n = t.originalError) &&
          'object' == typeof n &&
          Object.keys(n).every((e) => i4.includes(e)) &&
          (t.originalError = i3(t.originalError.message, t.originalError));
        let r =
          i2.major >= 16
            ? new tf(e, t)
            : new tf(
                e,
                t?.nodes,
                t?.source,
                t?.positions,
                t?.path,
                t?.originalError,
                t?.extensions
              );
        return (
          t?.coordinate &&
            null == r.coordinate &&
            Object.defineProperties(r, {
              coordinate: {
                value: t.coordinate,
                enumerable: !0,
                configurable: !0,
              },
            }),
          r
        );
      }
      function i9(e) {
        let t = new WeakMap();
        return function (n) {
          let r = t.get(n);
          if (void 0 === r) {
            let r = e(n);
            return t.set(n, r), r;
          }
          return r;
        };
      }
      function i7(e, t = ['directives']) {
        return Object.entries(
          (function (e, t, n = ['directives']) {
            let r = {};
            if (e.extensions) {
              let t = e.extensions;
              for (let e of n) t = t?.[e];
              if (null != t)
                for (let e in t) {
                  let n = t[e];
                  if (Array.isArray(n))
                    for (let t of n) {
                      let n = r[e];
                      n || ((n = []), (r[e] = n)), n.push(t);
                    }
                  else {
                    let t = r[e];
                    t || ((t = []), (r[e] = t)), t.push(n);
                  }
                }
            }
            let i = i9((e) => JSON.stringify(e)),
              s = [];
            for (let n of (e.astNode && s.push(e.astNode),
            e.extensionASTNodes && s.push(...e.extensionASTNodes),
            s))
              if (n.directives?.length)
                for (let e of n.directives) {
                  let n = e.name.value,
                    a = r[n];
                  a || ((a = []), (r[n] = a));
                  let o = t?.getDirective(n),
                    l = {};
                  if (
                    (o &&
                      (l = (function (e, t, n = {}) {
                        let r = {},
                          i = (t.arguments ?? []).reduce(
                            (e, t) => ({ ...e, [t.name.value]: t }),
                            {}
                          );
                        for (let {
                          name: s,
                          type: a,
                          defaultValue: o,
                        } of e.args) {
                          let e = i[s];
                          if (!e) {
                            if (void 0 !== o) r[s] = o;
                            else if (ng(a))
                              throw i3(
                                `Argument "${s}" of required type "${iG(
                                  a
                                )}" was not provided.`,
                                { nodes: [t] }
                              );
                            continue;
                          }
                          let l = e.value,
                            u = l.kind === w.NULL;
                          if (l.kind === w.VARIABLE) {
                            let e = l.name.value;
                            if (
                              null == n ||
                              !Object.prototype.hasOwnProperty.call(n, e)
                            ) {
                              if (void 0 !== o) r[s] = o;
                              else if (ng(a))
                                throw i3(
                                  `Argument "${s}" of required type "${iG(
                                    a
                                  )}" was provided the variable "$${e}" which was not provided a runtime value.`,
                                  { nodes: [l] }
                                );
                              continue;
                            }
                            u = null == n[e];
                          }
                          if (u && ng(a))
                            throw i3(
                              `Argument "${s}" of non-null type "${iG(
                                a
                              )}" must not be null.`,
                              { nodes: [l] }
                            );
                          let c = r3(l, a, n);
                          if (void 0 === c)
                            throw i3(
                              `Argument "${s}" has invalid value ${t5(l)}.`,
                              { nodes: [l] }
                            );
                          r[s] = c;
                        }
                        return r;
                      })(o, e)),
                    e.arguments)
                  )
                    for (let t of e.arguments) {
                      let e = t.name.value;
                      if (null == l[e]) {
                        let n = o?.args.find((t) => t.name === e);
                        n && (l[e] = r3(t.value, n.type));
                      }
                      null == l[e] && (l[e] = na(t.value));
                    }
                  if (s.length > 0 && a.length > 0) {
                    let e = i(l);
                    if (a.some((t) => i(t) === e)) continue;
                  }
                  a.push(l);
                }
            return r;
          })(e, void 0, t)
        )
          .map(([e, t]) => t?.map((t) => ({ name: e, args: t })))
          .flat(1 / 0)
          .filter(Boolean);
      }
      let i6 = (e) => (Array.isArray(e) ? e : e ? [e] : []);
      function i8(e) {
        let t;
        return (
          'alias' in e && (t = e.alias?.value),
          null == t && 'name' in e && (t = e.name?.value),
          null == t && (t = e.kind),
          t
        );
      }
      function i5(e, t, n) {
        let r = i8(e),
          i = i8(t);
        return 'function' == typeof n
          ? n(r, i)
          : String(r) < String(i)
          ? -1
          : String(r) > String(i)
          ? 1
          : 0;
      }
      function se(e) {
        return null != e;
      }
      i9(function (e) {
        let t = st(e);
        return new Set([...t].map((e) => e.name));
      });
      let st = i9(function (e) {
          let t = sn(e);
          return new Set(t.values());
        }),
        sn = i9(function (e) {
          let t = new Map(),
            n = e.getQueryType();
          n && t.set('query', n);
          let r = e.getMutationType();
          r && t.set('mutation', r);
          let i = e.getSubscriptionType();
          return i && t.set('subscription', i), t;
        });
      function sr(e, t, n) {
        let r,
          i = [],
          s = i7(e, n);
        null != s && (r = so(t, s));
        let a = null,
          o = null,
          l = null;
        return (
          null != r &&
            ((i = r.filter((e) => re.every((t) => t.name !== e.name.value))),
            (a = r.find((e) => 'deprecated' === e.name.value)),
            (o = r.find((e) => 'specifiedBy' === e.name.value)),
            (l = r.find((e) => 'oneOf' === e.name.value))),
          null != e.deprecationReason &&
            null == a &&
            (a = sa('deprecated', { reason: e.deprecationReason }, n6)),
          (null != e.specifiedByUrl ||
            (null != e.specifiedByURL && null == o)) &&
            (o = sa('specifiedBy', {
              url: e.specifiedByUrl || e.specifiedByURL,
            })),
          e.isOneOf && null == l && (l = sa('oneOf')),
          null != a && i.push(a),
          null != o && i.push(o),
          null != l && i.push(l),
          i
        );
      }
      function si(e, t, n) {
        return {
          kind: w.INPUT_VALUE_DEFINITION,
          description: i1(e),
          name: { kind: w.NAME, value: e.name },
          type: iz(e.type),
          defaultValue:
            void 0 !== e.defaultValue
              ? iZ(e.defaultValue, e.type) ?? void 0
              : void 0,
          directives: sr(e, t, n),
        };
      }
      function ss(e, t, n) {
        return {
          kind: w.FIELD_DEFINITION,
          description: i1(e),
          name: { kind: w.NAME, value: e.name },
          arguments: e.args.map((e) => si(e, t, n)),
          type: iz(e.type),
          directives: sr(e, t, n),
        };
      }
      function sa(e, t, n) {
        let r = [];
        for (let e in t) {
          let i;
          let s = t[e];
          if (null != n) {
            let t = n.args.find((t) => t.name === e);
            t && (i = iZ(s, t.type));
          }
          null == i && (i = iX(s)),
            null != i &&
              r.push({
                kind: w.ARGUMENT,
                name: { kind: w.NAME, value: e },
                value: i,
              });
        }
        return {
          kind: w.DIRECTIVE,
          name: { kind: w.NAME, value: e },
          arguments: r,
        };
      }
      function so(e, t) {
        let n = [];
        for (let { name: r, args: i } of t) {
          let t = e?.getDirective(r);
          n.push(sa(r, i, t));
        }
        return n;
      }
      function sl(e) {
        return e.as ?? e.url.name;
      }
      function su(e, t) {
        var n;
        if (e.url.name && t === `@${e.url.name}`)
          return (function (e) {
            let t = sl(e);
            return t && `@${t}`;
          })(e).substring(1);
        let r = e.imports.find((e) => e.name === t),
          i =
            r?.as ??
            r?.name ??
            ((n = sl(e)),
            n?.length
              ? t.startsWith('@')
                ? `@${n}__${t.substring(1)}`
                : `${n}__${t}`
              : t);
        return i.startsWith('@') ? i.substring(1) : i;
      }
      let sc = /v(\d{1,3})\.(\d{1,4})/i;
      function sd(e) {
        let t = new URL(e),
          n = t.pathname.split('/').filter(Boolean),
          r = n[n.length - 1];
        if (r) {
          if (sc.test(r)) {
            let e = n[n.length - 2];
            return {
              identity:
                t.origin + (e ? `/${n.slice(0, n.length - 1).join('/')}` : ''),
              name: e ?? null,
              version: r,
            };
          }
          return {
            identity: `${t.origin}/${n.join('/')}`,
            name: r,
            version: null,
          };
        }
        return { identity: t.origin, name: null, version: null };
      }
      function sp(e, t) {
        return t.some(({ value: t }) => t === e.value);
      }
      let sh = (e, t) => {
          if (e.kind === t.kind)
            switch (e.kind) {
              case w.LIST:
                return (
                  e.values.length === t.values.length &&
                  e.values.every((e) => t.values.find((t) => sh(e, t)))
                );
              case w.VARIABLE:
              case w.NULL:
                return !0;
              case w.OBJECT:
                return (
                  e.fields.length === t.fields.length &&
                  e.fields.every((e) =>
                    t.fields.find(
                      (t) =>
                        e.name.value === t.name.value && sh(e.value, t.value)
                    )
                  )
                );
              default:
                return e.value === t.value;
            }
          return !1;
        },
        sf = (e) => 'link' === e.name.value,
        sm = (e) => {
          let t = sf(e)
            ? e.arguments?.find((e) => 'url' === e.name.value)?.value
            : void 0;
          return t?.kind === 'StringValue' ? t.value : void 0;
        },
        sg = (e, t) =>
          e.name.value === t.name.value &&
          e.value.kind === t.value.kind &&
          sh(e.value, t.value),
        sy = (e, t) =>
          !!(
            e.name.value === t.name.value &&
            (e.arguments === t.arguments ||
              (e.arguments?.length === t.arguments?.length &&
                e.arguments?.every((e) => t.arguments?.find((t) => sg(e, t)))))
          );
      function sv(e = [], t = [], n, r) {
        let i = n && n.reverseDirectives,
          s = [];
        for (let o of [...(i ? e : t), ...(i ? t : e)]) {
          var a;
          if (
            ((a = n?.repeatableLinkImports),
            r?.[o.name.value]?.repeatable ?? a?.has(o.name.value))
          )
            s.find((e) => sy(o, e)) || s.push(o);
          else {
            let e = s.findIndex((e) => e.name.value === o.name.value);
            if (-1 === e) s.push(o);
            else {
              if (sf(o) && sf(s[e])) {
                let t = sm(o),
                  n = sm(s[e]);
                if (t && n && t !== n) {
                  s.push(o);
                  continue;
                }
              }
              let t = (function (e, t) {
                let n = [];
                for (let r of [...t, ...e]) {
                  let e = n.findIndex((e) => e.name.value === r.name.value);
                  if (-1 === e) n.push(r);
                  else {
                    let t = n[e];
                    if ('ListValue' === t.value.kind) {
                      let e = t.value.values,
                        n = r.value.values;
                      t.value = {
                        ...t.value,
                        values: sT(e, n, (e, t) => {
                          let n = e.value;
                          return !n || !t.some((e) => e.value === n);
                        }),
                      };
                    } else t.value = r.value;
                  }
                }
                return n;
              })(o.arguments ?? [], s[e].arguments ?? []);
              s[e] = { ...s[e], arguments: 0 === t.length ? void 0 : t };
            }
          }
        }
        return s;
      }
      function sT(e, t, n) {
        return e.concat(t.filter((t) => n(t, e)));
      }
      function sb(e) {
        let t = e;
        for (; t.kind === w.LIST_TYPE || 'NonNullType' === t.kind; ) t = t.type;
        return t;
      }
      function sE(e) {
        return e.kind !== w.NAMED_TYPE;
      }
      function sN(e) {
        return e.kind === w.LIST_TYPE;
      }
      function s_(e) {
        return e.kind === w.NON_NULL_TYPE;
      }
      function sS(e) {
        return sN(e)
          ? `[${sS(e.type)}]`
          : s_(e)
          ? `${sS(e.type)}!`
          : e.name.value;
      }
      function sI(e, t) {
        return null == e && null == t
          ? C.A_EQUALS_B
          : null == e
          ? C.A_SMALLER_THAN_B
          : null == t
          ? C.A_GREATER_THAN_B
          : e < t
          ? C.A_SMALLER_THAN_B
          : e > t
          ? C.A_GREATER_THAN_B
          : C.A_EQUALS_B;
      }
      function sO(e, t, n, r, i) {
        let s = [];
        if ((null != n && s.push(...n), null != t))
          for (let n of t) {
            let [t, a] = (function (e, t) {
              let n = e.findIndex((e) => e.name.value === t.name.value);
              return [n > -1 ? e[n] : null, n];
            })(s, n);
            if (t && !r?.ignoreFieldConflicts) {
              let o =
                (r?.onFieldTypeConflict &&
                  r.onFieldTypeConflict(t, n, e, r?.throwOnConflict)) ||
                (function (e, t, n, r = !1) {
                  let i = sS(t.type),
                    s = sS(n.type);
                  if (i !== s) {
                    let a = sb(t.type),
                      o = sb(n.type);
                    if (a.name.value !== o.name.value)
                      throw Error(
                        `Field "${n.name.value}" already defined with a different type. Declared as "${a.name.value}", but you tried to override with "${o.name.value}"`
                      );
                    if (
                      !(function e(t, n, r = !1) {
                        return sE(t) || sE(n)
                          ? s_(n)
                            ? e(s_(t) ? t.type : t, n.type)
                            : s_(t)
                            ? e(n, t, r)
                            : !!sN(t) &&
                              ((sN(n) && e(t.type, n.type)) ||
                                (s_(n) && e(t, n.type)))
                          : t.toString() === n.toString();
                      })(t.type, n.type, !r)
                    )
                      throw Error(
                        `Field '${e.name.value}.${t.name.value}' changed type from '${i}' to '${s}'`
                      );
                  }
                  return s_(n.type) && !s_(t.type) && (t.type = n.type), t;
                })(e, t, n, r?.throwOnConflict);
              (o.arguments = (function (e, t, n) {
                let r = (function (e, t) {
                  return e.reduce((e, n) => {
                    let r = e.findIndex((e) => e.name.value === n.name.value);
                    return -1 === r
                      ? e.concat([n])
                      : (t?.reverseArguments || (e[r] = n), e);
                  }, []);
                })([...t, ...e].filter(se), n);
                return n && n.sort && r.sort(i5), r;
              })(n.arguments || [], t.arguments || [], r)),
                (o.directives = sv(n.directives, t.directives, r, i)),
                (o.description = n.description || t.description),
                (s[a] = o);
            } else s.push(n);
          }
        if ((r && r.sort && s.sort(i5), r && r.exclusions)) {
          let t = r.exclusions;
          return s.filter(
            (n) => !t.includes(`${e.name.value}.${n.name.value}`)
          );
        }
        return s;
      }
      function sw(e = [], t = [], n = {}) {
        let r = [
          ...t,
          ...e.filter((e) => !t.find((t) => t.name.value === e.name.value)),
        ];
        return n && n.sort && r.sort(i5), r;
      }
      !(function (e) {
        (e[(e.A_SMALLER_THAN_B = -1)] = 'A_SMALLER_THAN_B'),
          (e[(e.A_EQUALS_B = 0)] = 'A_EQUALS_B'),
          (e[(e.A_GREATER_THAN_B = 1)] = 'A_GREATER_THAN_B');
      })(C || (C = {}));
      let sA = {
          query: 'Query',
          mutation: 'Mutation',
          subscription: 'Subscription',
        },
        sx = 'SCHEMA_DEF_SYMBOL';
      function sC(e, t, n = {}) {
        var r, i, s, a, o;
        for (let l of e)
          if ('name' in l) {
            let e = l.name?.value;
            if (
              (t?.commentDescriptions &&
                (function (e) {
                  let t = e.name?.value;
                  if (null != t)
                    switch ((ik(e, t), e.kind)) {
                      case 'EnumTypeDefinition':
                        if (e.values)
                          for (let n of e.values) ik(n, t, n.name.value);
                        break;
                      case 'ObjectTypeDefinition':
                      case 'InputObjectTypeDefinition':
                      case 'InterfaceTypeDefinition':
                        if (e.fields) {
                          for (let n of e.fields)
                            if (
                              (ik(n, t, n.name.value),
                              'FieldDefinition' === n.kind && n.arguments)
                            )
                              for (let e of n.arguments)
                                ik(e, t, n.name.value, e.name.value);
                        }
                    }
                })(l),
              null == e)
            )
              continue;
            if (t?.exclusions?.includes(e + '.*') || t?.exclusions?.includes(e))
              delete n[e];
            else
              switch (l.kind) {
                case w.OBJECT_TYPE_DEFINITION:
                case w.OBJECT_TYPE_EXTENSION:
                  n[e] = (function (e, t, n, r) {
                    if (t)
                      try {
                        return {
                          name: e.name,
                          description: e.description || t.description,
                          kind:
                            n?.convertExtensions ||
                            'ObjectTypeDefinition' === e.kind ||
                            'ObjectTypeDefinition' === t.kind
                              ? 'ObjectTypeDefinition'
                              : 'ObjectTypeExtension',
                          loc: e.loc,
                          fields: sO(e, e.fields, t.fields, n, r),
                          directives: sv(e.directives, t.directives, n, r),
                          interfaces: sw(e.interfaces, t.interfaces, n),
                        };
                      } catch (t) {
                        throw Error(
                          `Unable to merge GraphQL type "${e.name.value}": ${t.message}`
                        );
                      }
                    return n?.convertExtensions
                      ? { ...e, kind: w.OBJECT_TYPE_DEFINITION }
                      : e;
                  })(l, n[e], t, n);
                  break;
                case w.ENUM_TYPE_DEFINITION:
                case w.ENUM_TYPE_EXTENSION:
                  n[e] = (r = n[e])
                    ? {
                        name: l.name,
                        description: l.description || r.description,
                        kind:
                          t?.convertExtensions ||
                          'EnumTypeDefinition' === l.kind ||
                          'EnumTypeDefinition' === r.kind
                            ? 'EnumTypeDefinition'
                            : 'EnumTypeExtension',
                        loc: l.loc,
                        directives: sv(l.directives, r.directives, t, n),
                        values: (function (e, t, n, r) {
                          if (n?.consistentEnumMerge) {
                            let n = [];
                            e && n.push(...e), (e = t), (t = n);
                          }
                          let i = new Map();
                          if (e) for (let t of e) i.set(t.name.value, t);
                          if (t)
                            for (let e of t) {
                              let t = e.name.value;
                              if (i.has(t)) {
                                let n = i.get(t);
                                (n.description =
                                  e.description || n.description),
                                  (n.directives = sv(
                                    e.directives,
                                    n.directives,
                                    void 0
                                  ));
                              } else i.set(t, e);
                            }
                          let s = [...i.values()];
                          return n && n.sort && s.sort(i5), s;
                        })(l.values, r.values, t),
                      }
                    : t?.convertExtensions
                    ? { ...l, kind: w.ENUM_TYPE_DEFINITION }
                    : l;
                  break;
                case w.UNION_TYPE_DEFINITION:
                case w.UNION_TYPE_EXTENSION:
                  n[e] = (i = n[e])
                    ? {
                        name: l.name,
                        description: l.description || i.description,
                        directives: sv(l.directives, i.directives, t, n),
                        kind:
                          t?.convertExtensions ||
                          'UnionTypeDefinition' === l.kind ||
                          'UnionTypeDefinition' === i.kind
                            ? w.UNION_TYPE_DEFINITION
                            : w.UNION_TYPE_EXTENSION,
                        loc: l.loc,
                        types: sw(l.types, i.types, t),
                      }
                    : t?.convertExtensions
                    ? { ...l, kind: w.UNION_TYPE_DEFINITION }
                    : l;
                  break;
                case w.SCALAR_TYPE_DEFINITION:
                case w.SCALAR_TYPE_EXTENSION:
                  n[e] = (s = n[e])
                    ? {
                        name: l.name,
                        description: l.description || s.description,
                        kind:
                          t?.convertExtensions ||
                          'ScalarTypeDefinition' === l.kind ||
                          'ScalarTypeDefinition' === s.kind
                            ? 'ScalarTypeDefinition'
                            : 'ScalarTypeExtension',
                        loc: l.loc,
                        directives: sv(l.directives, s.directives, t, n),
                      }
                    : t?.convertExtensions
                    ? { ...l, kind: w.SCALAR_TYPE_DEFINITION }
                    : l;
                  break;
                case w.INPUT_OBJECT_TYPE_DEFINITION:
                case w.INPUT_OBJECT_TYPE_EXTENSION:
                  n[e] = (function (e, t, n, r) {
                    if (t)
                      try {
                        return {
                          name: e.name,
                          description: e.description || t.description,
                          kind:
                            n?.convertExtensions ||
                            'InputObjectTypeDefinition' === e.kind ||
                            'InputObjectTypeDefinition' === t.kind
                              ? 'InputObjectTypeDefinition'
                              : 'InputObjectTypeExtension',
                          loc: e.loc,
                          fields: sO(e, e.fields, t.fields, n),
                          directives: sv(e.directives, t.directives, n, r),
                        };
                      } catch (t) {
                        throw Error(
                          `Unable to merge GraphQL input type "${e.name.value}": ${t.message}`
                        );
                      }
                    return n?.convertExtensions
                      ? { ...e, kind: w.INPUT_OBJECT_TYPE_DEFINITION }
                      : e;
                  })(l, n[e], t, n);
                  break;
                case w.INTERFACE_TYPE_DEFINITION:
                case w.INTERFACE_TYPE_EXTENSION:
                  n[e] = (function (e, t, n, r) {
                    if (t)
                      try {
                        return {
                          name: e.name,
                          description: e.description || t.description,
                          kind:
                            n?.convertExtensions ||
                            'InterfaceTypeDefinition' === e.kind ||
                            'InterfaceTypeDefinition' === t.kind
                              ? 'InterfaceTypeDefinition'
                              : 'InterfaceTypeExtension',
                          loc: e.loc,
                          fields: sO(e, e.fields, t.fields, n, r),
                          directives: sv(e.directives, t.directives, n, r),
                          interfaces: e.interfaces
                            ? sw(e.interfaces, t.interfaces, n)
                            : void 0,
                        };
                      } catch (t) {
                        throw Error(
                          `Unable to merge GraphQL interface "${e.name.value}": ${t.message}`
                        );
                      }
                    return n?.convertExtensions
                      ? { ...e, kind: w.INTERFACE_TYPE_DEFINITION }
                      : e;
                  })(l, n[e], t, n);
                  break;
                case w.DIRECTIVE_DEFINITION:
                  n[e] &&
                    e in {} &&
                    !(
                      null != (a = n[e]) &&
                      'object' == typeof a &&
                      'kind' in a &&
                      'string' == typeof a.kind
                    ) &&
                    (n[e] = void 0),
                    (n[e] = (function (e, t) {
                      return t
                        ? {
                            ...e,
                            arguments: sT(
                              t.arguments || [],
                              e.arguments || [],
                              (e, t) =>
                                !sp(
                                  e.name,
                                  t.map((e) => e.name)
                                )
                            ),
                            locations: [
                              ...t.locations,
                              ...e.locations.filter((e) => !sp(e, t.locations)),
                            ],
                          }
                        : e;
                    })(l, n[e]));
              }
          } else
            (l.kind === w.SCHEMA_DEFINITION || l.kind === w.SCHEMA_EXTENSION) &&
              (n[sx] = (o = n[sx])
                ? {
                    kind:
                      l.kind === w.SCHEMA_DEFINITION ||
                      o.kind === w.SCHEMA_DEFINITION
                        ? w.SCHEMA_DEFINITION
                        : w.SCHEMA_EXTENSION,
                    description: l.description || o.description,
                    directives: sv(l.directives, o.directives, t, void 0),
                    operationTypes: (function (e = [], t = []) {
                      let n = [];
                      for (let r in sA) {
                        let i =
                          e.find((e) => e.operation === r) ||
                          t.find((e) => e.operation === r);
                        i && n.push(i);
                      }
                      return n;
                    })(l.operationTypes, o.operationTypes),
                  }
                : t?.convertExtensions
                ? { ...l, kind: w.SCHEMA_DEFINITION }
                : l);
        return n;
      }
      function sD(e, t) {
        let n;
        iP = {};
        let r = {
          kind: w.DOCUMENT,
          definitions: (function (e, t) {
            iP = {};
            let {
                allDirectives: n,
                allNodes: r,
                repeatableLinkImports: i,
              } = (function e(
                t,
                n,
                r = [],
                i = [],
                s = new Set(),
                a = new Set()
              ) {
                let o = (e) => {
                  a.add(e);
                };
                if (t && !s.has(t)) {
                  if ((s.add(t), 'function' == typeof t)) e(t(), n, r, i, s, a);
                  else if (Array.isArray(t))
                    for (let o of t) e(o, n, r, i, s, a);
                  else if (tF(t, ry))
                    e(
                      (function (e, t = {}) {
                        let n = t.pathToDirectivesInExtensions,
                          r = e.getTypeMap(),
                          i = (function (e, t) {
                            let n = new Map([
                                ['query', void 0],
                                ['mutation', void 0],
                                ['subscription', void 0],
                              ]),
                              r = [];
                            if (
                              (null != e.astNode && r.push(e.astNode),
                              null != e.extensionASTNodes)
                            )
                              for (let t of e.extensionASTNodes) r.push(t);
                            for (let e of r)
                              if (e.operationTypes)
                                for (let t of e.operationTypes)
                                  n.set(t.operation, t);
                            let i = sn(e);
                            for (let [e, t] of n) {
                              let r = i.get(e);
                              if (null != r) {
                                let i = iz(r);
                                null != t
                                  ? (t.type = i)
                                  : n.set(e, {
                                      kind: w.OPERATION_TYPE_DEFINITION,
                                      operation: e,
                                      type: i,
                                    });
                              }
                            }
                            let s = [...n.values()].filter(se),
                              a = sr(e, e, t);
                            if (!s.length && !a.length) return null;
                            let o = {
                                kind: s.length
                                  ? w.SCHEMA_DEFINITION
                                  : w.SCHEMA_EXTENSION,
                                operationTypes: s,
                                directives: a,
                              },
                              l = i1(e);
                            return l && (o.description = l), o;
                          })(e, n),
                          s = null != i ? [i] : [];
                        for (let t of e.getDirectives())
                          rt(t) ||
                            s.push(
                              (function (e, t, n) {
                                return {
                                  kind: w.DIRECTIVE_DEFINITION,
                                  description: i1(e),
                                  name: { kind: w.NAME, value: e.name },
                                  arguments: e.args?.map((e) => si(e, t, n)),
                                  repeatable: e.isRepeatable,
                                  locations:
                                    e.locations?.map((e) => ({
                                      kind: w.NAME,
                                      value: e,
                                    })) || [],
                                };
                              })(t, e, n)
                            );
                        for (let t in r) {
                          let i = r[t],
                            a = n2(i),
                            o = rg(i);
                          if (!a && !o) {
                            if (nc(i))
                              s.push(
                                (function (e, t, n) {
                                  return {
                                    kind: w.OBJECT_TYPE_DEFINITION,
                                    description: i1(e),
                                    name: { kind: w.NAME, value: e.name },
                                    fields: Object.values(e.getFields()).map(
                                      (e) => ss(e, t, n)
                                    ),
                                    interfaces: Object.values(
                                      e.getInterfaces()
                                    ).map((e) => iz(e)),
                                    directives: sr(e, t, n),
                                  };
                                })(i, e, n)
                              );
                            else if (nd(i))
                              s.push(
                                (function (e, t, n) {
                                  let r = {
                                    kind: w.INTERFACE_TYPE_DEFINITION,
                                    description: i1(e),
                                    name: { kind: w.NAME, value: e.name },
                                    fields: Object.values(e.getFields()).map(
                                      (e) => ss(e, t, n)
                                    ),
                                    directives: sr(e, t, n),
                                  };
                                  return (
                                    'getInterfaces' in e &&
                                      (r.interfaces = Object.values(
                                        e.getInterfaces()
                                      ).map((e) => iz(e))),
                                    r
                                  );
                                })(i, e, n)
                              );
                            else if (np(i))
                              s.push({
                                kind: w.UNION_TYPE_DEFINITION,
                                description: i1(i),
                                name: { kind: w.NAME, value: i.name },
                                directives: sr(i, e, n),
                                types: i.getTypes().map((e) => iz(e)),
                              });
                            else if (nf(i))
                              s.push(
                                (function (e, t, n) {
                                  return {
                                    kind: w.INPUT_OBJECT_TYPE_DEFINITION,
                                    description: i1(e),
                                    name: { kind: w.NAME, value: e.name },
                                    fields: Object.values(e.getFields()).map(
                                      (e) => ({
                                        kind: w.INPUT_VALUE_DEFINITION,
                                        description: i1(e),
                                        name: { kind: w.NAME, value: e.name },
                                        type: iz(e.type),
                                        directives: sr(e, t, n),
                                        defaultValue:
                                          iZ(e.defaultValue, e.type) ?? void 0,
                                      })
                                    ),
                                    directives: sr(e, t, n),
                                  };
                                })(i, e, n)
                              );
                            else if (nh(i))
                              s.push(
                                (function (e, t, n) {
                                  return {
                                    kind: w.ENUM_TYPE_DEFINITION,
                                    description: i1(e),
                                    name: { kind: w.NAME, value: e.name },
                                    values: Object.values(e.getValues()).map(
                                      (e) => ({
                                        kind: w.ENUM_VALUE_DEFINITION,
                                        description: i1(e),
                                        name: { kind: w.NAME, value: e.name },
                                        directives: sr(e, t, n),
                                      })
                                    ),
                                    directives: sr(e, t, n),
                                  };
                                })(i, e, n)
                              );
                            else if (nu(i))
                              s.push(
                                (function (e, t, n) {
                                  let r = so(t, i7(e, n)),
                                    i = e.specifiedByUrl || e.specifiedByURL;
                                  return (
                                    i &&
                                      !r.some(
                                        (e) => 'specifiedBy' === e.name.value
                                      ) &&
                                      r.push(sa('specifiedBy', { url: i })),
                                    {
                                      kind: w.SCALAR_TYPE_DEFINITION,
                                      description: i1(e),
                                      name: { kind: w.NAME, value: e.name },
                                      directives: r,
                                    }
                                  );
                                })(i, e, n)
                              );
                            else throw Error(`Unknown type ${i}.`);
                          }
                        }
                        return { kind: w.DOCUMENT, definitions: s };
                      })(t, n).definitions,
                      n,
                      r,
                      i,
                      s,
                      a
                    );
                  else if ('string' == typeof t || t instanceof tj)
                    e(tU(t, n).definitions, n, r, i, s, a);
                  else if ('object' == typeof t && (rL(t) || rk(t) || rM(t))) {
                    let e = (function (e) {
                        let t = [];
                        for (let n of e.definitions)
                          if (
                            n.kind === w.SCHEMA_EXTENSION ||
                            n.kind === w.SCHEMA_DEFINITION
                          ) {
                            let e = n.directives?.filter(
                                (e) => 'link' === e.name.value
                              ),
                              r =
                                e
                                  ?.map((e) =>
                                    (function (e) {
                                      let t, n;
                                      let r = [];
                                      for (let s of e)
                                        switch (s.name.value) {
                                          case 'url':
                                            s.value.kind === w.STRING &&
                                              (t = sd(s.value.value));
                                            break;
                                          case 'import':
                                            var i;
                                            r =
                                              (i = s.value).kind === w.LIST
                                                ? i.values
                                                    .map((e) => {
                                                      let t;
                                                      if (e.kind === w.STRING)
                                                        t = { name: e.value };
                                                      else if (
                                                        e.kind === w.OBJECT
                                                      ) {
                                                        let n,
                                                          r = '';
                                                        for (let t of e.fields)
                                                          'name' ===
                                                          t.name.value
                                                            ? t.value.kind ===
                                                                w.STRING &&
                                                              (r =
                                                                t.value.value)
                                                            : 'as' ===
                                                                t.name.value &&
                                                              t.value.kind ===
                                                                w.STRING &&
                                                              (n =
                                                                t.value.value);
                                                        t = { name: r, as: n };
                                                      }
                                                      return t;
                                                    })
                                                    .filter((e) => void 0 !== e)
                                                : [];
                                            break;
                                          case 'as':
                                            s.value.kind === w.STRING &&
                                              (n = s.value.value ?? void 0);
                                        }
                                      if (void 0 !== t)
                                        return { url: t, as: n, imports: r };
                                    })(e.arguments ?? [])
                                  )
                                  .filter((e) => void 0 !== e) ?? [];
                            t = t.concat(r);
                            let i = n.directives?.filter(
                                ({ name: e }) => 'core' === e.value
                              ),
                              s = i
                                ?.map((e) =>
                                  (function (e) {
                                    let t = e.find(
                                      ({ name: e, value: t }) =>
                                        'feature' === e.value &&
                                        t.kind === w.STRING
                                    );
                                    if (t)
                                      return {
                                        url: sd(t.value.value),
                                        imports: [],
                                      };
                                  })(e.arguments ?? [])
                                )
                                .filter((e) => void 0 !== e);
                            s && (t = t.concat(...s));
                          }
                        return t;
                      })({ definitions: [t], kind: w.DOCUMENT }),
                      n = e.find(
                        (e) =>
                          'https://specs.apollo.dev/federation' ===
                          e.url.identity
                      );
                    n && (o(su(n, '@composeDirective')), o(su(n, '@key')));
                    let s = e.find(
                      (e) => 'https://specs.apollo.dev/link' === e.url.identity
                    );
                    s && o(su(s, '@link')),
                      t.kind === w.DIRECTIVE_DEFINITION ? r.push(t) : i.push(t);
                  } else if (
                    t &&
                    'object' == typeof t &&
                    'kind' in t &&
                    t.kind === w.DOCUMENT
                  )
                    e(t.definitions, n, r, i, s, a);
                  else
                    throw Error(
                      `typeDefs must contain only strings, documents, schemas, or functions, got ${typeof t}`
                    );
                }
                return {
                  allDirectives: r,
                  allNodes: i,
                  repeatableLinkImports: a,
                };
              })(e, t),
              s = sC(n, t);
            t.repeatableLinkImports = i;
            let a = sC(r, t, s);
            if (t?.useSchemaDefinition) {
              let e = a[sx] || {
                  kind: w.SCHEMA_DEFINITION,
                  operationTypes: [],
                },
                t = e.operationTypes;
              for (let e in sA)
                if (!t.find((t) => t.operation === e)) {
                  let n = a[sA[e]];
                  null != n &&
                    null != n.name &&
                    t.push({
                      kind: w.OPERATION_TYPE_DEFINITION,
                      type: { kind: w.NAMED_TYPE, name: n.name },
                      operation: e,
                    });
                }
              e?.operationTypes?.length != null &&
                e.operationTypes.length > 0 &&
                (a[sx] = e);
            }
            t?.forceSchemaDefinition &&
              !a[sx]?.operationTypes?.length &&
              (a[sx] = {
                kind: w.SCHEMA_DEFINITION,
                operationTypes: [
                  {
                    kind: w.OPERATION_TYPE_DEFINITION,
                    operation: 'query',
                    type: {
                      kind: w.NAMED_TYPE,
                      name: { kind: w.NAME, value: 'Query' },
                    },
                  },
                ],
              });
            let o = Object.values(a);
            if (t?.sort) {
              let e = 'function' == typeof t.sort ? t.sort : sI;
              o.sort((t, n) => e(t.name?.value, n.name?.value));
            }
            return o;
          })(e, {
            useSchemaDefinition: !0,
            forceSchemaDefinition: !1,
            throwOnConflict: !1,
            commentDescriptions: !1,
            ...t,
          }),
        };
        return (n = t?.commentDescriptions ? t7(r, iq) : r), (iP = {}), n;
      }
      function sR(e, t = !1, n = !1, r = !1) {
        let i, s, a;
        if (0 === e.length) return;
        if (1 === e.length) return e[0];
        let o = !0,
          l = e.every((e) => {
            if (Array.isArray(e)) {
              if (void 0 === i) return (i = e.length), !0;
              if (i === e.length) return !0;
            } else o = !1;
            return !1;
          });
        if (r && l)
          return Array(i)
            .fill(null)
            .map((i, s) =>
              sR(
                e.map((e) => e[s]),
                t,
                n,
                r
              )
            );
        if (o) return e.flat(1);
        for (let i of (t &&
          (a = e.find((e) => sL(e))) &&
          (null == s && (s = {}),
          Object.setPrototypeOf(s, Object.create(Object.getPrototypeOf(a)))),
        e))
          if (null != i) {
            if (sL(i)) {
              if (a) {
                let e = Object.getPrototypeOf(s),
                  t = Object.getPrototypeOf(i);
                if (t)
                  for (let n of Object.getOwnPropertyNames(t)) {
                    let r = Object.getOwnPropertyDescriptor(t, n);
                    se(r) && Object.defineProperty(e, n, r);
                  }
              }
              for (let e in i)
                null == s && (s = {}),
                  e in s ? (s[e] = sR([s[e], i[e]], t, n, r)) : (s[e] = i[e]);
            } else
              s =
                Array.isArray(i) && Array.isArray(s) ? sR([s, i], t, n, r) : i;
          }
        return s;
      }
      function sL(e) {
        return e && 'object' == typeof e && !Array.isArray(e);
      }
      function sP(e, t) {
        if (e && t && t !== e.extensions) {
          if (!e.extensions) {
            e.extensions = t;
            return;
          }
          e.extensions = sR([e.extensions, t], !1, !0);
        }
      }
      function sk(e, t) {
        let n = e.getTypeMap();
        for (let e in n) {
          let r = n[e];
          if (!nw(r).name.startsWith('__')) {
            if (nc(r)) {
              let e = r.getFields();
              for (let n in e)
                for (let r of e[n].args)
                  r.defaultValue = t(r.type, r.defaultValue);
            } else if (nf(r)) {
              let e = r.getFields();
              for (let n in e) {
                let r = e[n];
                r.defaultValue = t(r.type, r.defaultValue);
              }
            }
          }
        }
      }
      function s$(e, t, n = null, r = null) {
        if (null == t) return t;
        let i = nI(e);
        if (nT(i)) return null != n ? n(i, t) : t;
        if (nm(i)) return i6(t).map((e) => s$(i.ofType, e, n, r));
        if (nf(i)) {
          let e = i.getFields(),
            s = {};
          for (let i in t) {
            let a = e[i];
            null != a && (s[i] = s$(a.type, t[i], n, r));
          }
          return null != r ? r(i, s) : s;
        }
      }
      function sM(e, t) {
        return s$(e, t, (e, t) => {
          try {
            return e.serialize(t);
          } catch {
            return t;
          }
        });
      }
      function sF(e, t) {
        return s$(e, t, (e, t) => {
          try {
            return e.parseValue(t);
          } catch {
            return t;
          }
        });
      }
      function sj(e, t) {
        let n = e.getTypeMap();
        for (let e in n) {
          let r = n[e];
          if (!nw(r).name.startsWith('__') && nc(r)) {
            let n = r.getFields();
            for (let r in n) t(n[r], e, r);
          }
        }
      }
      function sU(e, t) {
        if (t) {
          let n = e[t.name];
          if (nc(n)) return n;
        }
      }
      function sB(e, t = {}) {
        let n = sJ(
            sG(
              sq(
                sQ(
                  (function (e, t, n) {
                    let r = (function (e) {
                      let t = e[D.ENUM_VALUE];
                      return null != t ? t : null;
                    })(n);
                    return r
                      ? sq(
                          e,
                          t,
                          {
                            [D.ENUM_TYPE]: (e) => {
                              let n = e.toConfig(),
                                i = n.values,
                                s = {};
                              for (let n in i) {
                                let a = i[n],
                                  o = r(a, e.name, t, n);
                                if (void 0 === o) s[n] = a;
                                else if (Array.isArray(o)) {
                                  let [e, t] = o;
                                  s[e] = void 0 === t ? a : t;
                                } else null !== o && (s[n] = o);
                              }
                              return sK(new nV({ ...n, values: s }));
                            },
                          },
                          (e) => nh(e)
                        )
                      : e;
                  })(
                    sq(sQ(e.getTypeMap(), e, sM), e, t, (e) => nT(e)),
                    e,
                    t
                  ),
                  e,
                  sF
                ),
                e,
                t,
                (e) => !nT(e)
              ),
              e,
              t
            ),
            e,
            t
          ),
          { typeMap: r, directives: i } = (function (e, t) {
            let n = Object.create(null);
            for (let t in e) n[t] = e[t];
            let r = Object.create(null);
            for (let e in n) {
              let t = n[e];
              if (null == t || e.startsWith('__')) continue;
              let i = t.name;
              if (!i.startsWith('__')) {
                if (null != r[i]) {
                  console.warn(
                    `Duplicate schema type name ${i} found; keeping the existing one found in the schema`
                  );
                  continue;
                }
                r[i] = t;
              }
            }
            for (let e in r) r[e] = s(r[e]);
            return {
              typeMap: r,
              directives: t.map((e) =>
                (function (e) {
                  if (rt(e)) return e;
                  let t = e.toConfig();
                  return (t.args = i(t.args)), new n3(t);
                })(e)
              ),
            };
            function i(e) {
              let t = {};
              for (let n in e) {
                let r = e[n],
                  i = l(r.type);
                null != i && ((r.type = i), (t[n] = r));
              }
              return t;
            }
            function s(e) {
              if (nc(e)) {
                let t = e.toConfig();
                return new nD({
                  ...t,
                  fields: () => a(t.fields),
                  interfaces: () => o(t.interfaces),
                });
              }
              if (nd(e)) {
                let t = e.toConfig(),
                  n = { ...t, fields: () => a(t.fields) };
                return (
                  'interfaces' in n && (n.interfaces = () => o(t.interfaces)),
                  new nj(n)
                );
              }
              if (np(e)) {
                let t = e.toConfig();
                return new nU({ ...t, types: () => o(t.types) });
              }
              if (nf(e)) {
                let t = e.toConfig();
                return new nY({
                  ...t,
                  fields: () =>
                    (function (e) {
                      let t = {};
                      for (let n in e) {
                        let r = e[n],
                          i = l(r.type);
                        null != i && ((r.type = i), (t[n] = r));
                      }
                      return t;
                    })(t.fields),
                });
              }
              if (nh(e)) return new nV(e.toConfig());
              if (nu(e)) return n2(e) ? e : new nC(e.toConfig());
              throw Error(`Unexpected schema type: ${e}`);
            }
            function a(e) {
              let t = {};
              for (let n in e) {
                let r = e[n],
                  s = l(r.type);
                null != s &&
                  r.args &&
                  ((r.type = s), (r.args = i(r.args)), (t[n] = r));
              }
              return t;
            }
            function o(e) {
              let t = [];
              for (let n of e) {
                let e = l(n);
                null != e && t.push(e);
              }
              return t;
            }
            function l(e) {
              if (nm(e)) {
                let t = l(e.ofType);
                return null != t ? new nN(t) : null;
              }
              if (ng(e)) {
                let t = l(e.ofType);
                return null != t ? new n_(t) : null;
              }
              if (nO(e)) {
                let t = n[e.name];
                return (
                  void 0 === t &&
                    (r[
                      (t = !(function (e) {
                        if ('getFields' in e) {
                          let t = e.getFields();
                          for (let e in t) return '_fake' === t[e].name;
                        }
                        return !1;
                      })(e)
                        ? s(e)
                        : (function (e) {
                            switch (e.name) {
                              case nz.name:
                                return nz;
                              case nX.name:
                                return nX;
                              case nW.name:
                                return nW;
                              case nZ.name:
                                return nZ;
                              case n0.name:
                                return n0;
                              default:
                                return e;
                            }
                          })(e)).name
                    ] = n[e.name] =
                      t),
                  null != t ? r[t.name] : null
                );
              }
              return null;
            }
          })(
            n,
            (function (e, t, n) {
              let r = (function (e) {
                let t = e[D.DIRECTIVE];
                return null != t ? t : null;
              })(n);
              if (null == r) return e.slice();
              let i = [];
              for (let n of e) {
                let e = r(n, t);
                void 0 === e ? i.push(n) : null !== e && i.push(e);
              }
              return i;
            })(e.getDirectives(), e, t)
          );
        return new ry({
          ...e.toConfig(),
          query: sU(r, sU(n, e.getQueryType())),
          mutation: sU(r, sU(n, e.getMutationType())),
          subscription: sU(r, sU(n, e.getSubscriptionType())),
          types: Object.values(r),
          directives: i,
        });
      }
      !(function (e) {
        (e.TYPE = 'MapperKind.TYPE'),
          (e.SCALAR_TYPE = 'MapperKind.SCALAR_TYPE'),
          (e.ENUM_TYPE = 'MapperKind.ENUM_TYPE'),
          (e.COMPOSITE_TYPE = 'MapperKind.COMPOSITE_TYPE'),
          (e.OBJECT_TYPE = 'MapperKind.OBJECT_TYPE'),
          (e.INPUT_OBJECT_TYPE = 'MapperKind.INPUT_OBJECT_TYPE'),
          (e.ABSTRACT_TYPE = 'MapperKind.ABSTRACT_TYPE'),
          (e.UNION_TYPE = 'MapperKind.UNION_TYPE'),
          (e.INTERFACE_TYPE = 'MapperKind.INTERFACE_TYPE'),
          (e.ROOT_OBJECT = 'MapperKind.ROOT_OBJECT'),
          (e.QUERY = 'MapperKind.QUERY'),
          (e.MUTATION = 'MapperKind.MUTATION'),
          (e.SUBSCRIPTION = 'MapperKind.SUBSCRIPTION'),
          (e.DIRECTIVE = 'MapperKind.DIRECTIVE'),
          (e.FIELD = 'MapperKind.FIELD'),
          (e.COMPOSITE_FIELD = 'MapperKind.COMPOSITE_FIELD'),
          (e.OBJECT_FIELD = 'MapperKind.OBJECT_FIELD'),
          (e.ROOT_FIELD = 'MapperKind.ROOT_FIELD'),
          (e.QUERY_ROOT_FIELD = 'MapperKind.QUERY_ROOT_FIELD'),
          (e.MUTATION_ROOT_FIELD = 'MapperKind.MUTATION_ROOT_FIELD'),
          (e.SUBSCRIPTION_ROOT_FIELD = 'MapperKind.SUBSCRIPTION_ROOT_FIELD'),
          (e.INTERFACE_FIELD = 'MapperKind.INTERFACE_FIELD'),
          (e.INPUT_OBJECT_FIELD = 'MapperKind.INPUT_OBJECT_FIELD'),
          (e.ARGUMENT = 'MapperKind.ARGUMENT'),
          (e.ENUM_VALUE = 'MapperKind.ENUM_VALUE');
      })(D || (D = {}));
      let sV = ['String', 'ID', 'Int', 'Float', 'Boolean'];
      function sq(e, t, n, r = () => !0) {
        let i = {};
        for (let s in e)
          if (!s.startsWith('__') && !sV.includes(s)) {
            let a = e[s];
            if (null == a || !r(a)) {
              i[s] = a;
              continue;
            }
            let o = (function (e, t, n) {
              let r;
              let i = [
                ...(function (e, t) {
                  let n = e.getType(t),
                    r = [D.TYPE];
                  return (
                    nc(n)
                      ? (r.push(D.COMPOSITE_TYPE, D.OBJECT_TYPE),
                        t === e.getQueryType()?.name
                          ? r.push(D.ROOT_OBJECT, D.QUERY)
                          : t === e.getMutationType()?.name
                          ? r.push(D.ROOT_OBJECT, D.MUTATION)
                          : t === e.getSubscriptionType()?.name &&
                            r.push(D.ROOT_OBJECT, D.SUBSCRIPTION))
                      : nf(n)
                      ? r.push(D.INPUT_OBJECT_TYPE)
                      : nd(n)
                      ? r.push(
                          D.COMPOSITE_TYPE,
                          D.ABSTRACT_TYPE,
                          D.INTERFACE_TYPE
                        )
                      : np(n)
                      ? r.push(D.COMPOSITE_TYPE, D.ABSTRACT_TYPE, D.UNION_TYPE)
                      : nh(n)
                      ? r.push(D.ENUM_TYPE)
                      : nu(n) && r.push(D.SCALAR_TYPE),
                    r
                  );
                })(e, n),
              ];
              for (; !r && i.length > 0; ) r = t[i.pop()];
              return null != r ? r : null;
            })(t, n, s);
            if (null == o) {
              i[s] = a;
              continue;
            }
            let l = o(a, t);
            if (void 0 === l) {
              i[s] = a;
              continue;
            }
            i[s] = l;
          }
        return i;
      }
      function sQ(e, t, n) {
        let r = sJ(e, t, {
          [D.ARGUMENT]: (t) => {
            if (void 0 === t.defaultValue) return t;
            let r = sY(e, t.type);
            if (null != r) return { ...t, defaultValue: n(r, t.defaultValue) };
          },
        });
        return sG(r, t, {
          [D.INPUT_OBJECT_FIELD]: (e) => {
            if (void 0 === e.defaultValue) return e;
            let t = sY(r, e.type);
            if (null != t) return { ...e, defaultValue: n(t, e.defaultValue) };
          },
        });
      }
      function sY(e, t) {
        if (nm(t)) {
          let n = sY(e, t.ofType);
          return null != n ? new nN(n) : null;
        }
        if (ng(t)) {
          let n = sY(e, t.ofType);
          return null != n ? new n_(n) : null;
        }
        if (nO(t)) {
          let n = e[t.name];
          return null != n ? n : null;
        }
        return null;
      }
      function sG(e, t, n) {
        let r = {};
        for (let i in e)
          if (!i.startsWith('__')) {
            let s = e[i];
            if (!nc(s) && !nd(s) && !nf(s)) {
              r[i] = s;
              continue;
            }
            let a = (function (e, t, n) {
              let r;
              let i = [
                ...(function (e, t) {
                  let n = e.getType(t),
                    r = [D.FIELD];
                  return (
                    nc(n)
                      ? (r.push(D.COMPOSITE_FIELD, D.OBJECT_FIELD),
                        t === e.getQueryType()?.name
                          ? r.push(D.ROOT_FIELD, D.QUERY_ROOT_FIELD)
                          : t === e.getMutationType()?.name
                          ? r.push(D.ROOT_FIELD, D.MUTATION_ROOT_FIELD)
                          : t === e.getSubscriptionType()?.name &&
                            r.push(D.ROOT_FIELD, D.SUBSCRIPTION_ROOT_FIELD))
                      : nd(n)
                      ? r.push(D.COMPOSITE_FIELD, D.INTERFACE_FIELD)
                      : nf(n) && r.push(D.INPUT_OBJECT_FIELD),
                    r
                  );
                })(e, n),
              ];
              for (; !r && i.length > 0; ) r = t[i.pop()];
              return r ?? null;
            })(t, n, i);
            if (null == a) {
              r[i] = s;
              continue;
            }
            let o = s.toConfig(),
              l = o.fields,
              u = {};
            for (let e in l) {
              let n = l[e],
                r = a(n, e, i, t);
              if (void 0 === r) u[e] = n;
              else if (Array.isArray(r)) {
                let [e, t] = r;
                null != t.astNode &&
                  (t.astNode = {
                    ...t.astNode,
                    name: { ...t.astNode.name, value: e },
                  }),
                  (u[e] = void 0 === t ? n : t);
              } else null !== r && (u[e] = r);
            }
            nc(s)
              ? (r[i] = sK(new nD({ ...o, fields: u })))
              : nd(s)
              ? (r[i] = sK(new nj({ ...o, fields: u })))
              : (r[i] = sK(new nY({ ...o, fields: u })));
          }
        return r;
      }
      function sJ(e, t, n) {
        let r = {};
        for (let i in e)
          if (!i.startsWith('__')) {
            let s = e[i];
            if (!nc(s) && !nd(s)) {
              r[i] = s;
              continue;
            }
            let a = (function (e) {
              let t = e[D.ARGUMENT];
              return null != t ? t : null;
            })(n);
            if (null == a) {
              r[i] = s;
              continue;
            }
            let o = s.toConfig(),
              l = o.fields,
              u = {};
            for (let e in l) {
              let n = l[e],
                r = n.args;
              if (null == r) {
                u[e] = n;
                continue;
              }
              let s = Object.keys(r);
              if (!s.length) {
                u[e] = n;
                continue;
              }
              let o = {};
              for (let n of s) {
                let s = r[n],
                  l = a(s, e, i, t);
                if (void 0 === l) o[n] = s;
                else if (Array.isArray(l)) {
                  let [e, t] = l;
                  o[e] = t;
                } else null !== l && (o[n] = l);
              }
              u[e] = { ...n, args: o };
            }
            nc(s)
              ? (r[i] = new nD({ ...o, fields: u }))
              : nd(s)
              ? (r[i] = new nj({ ...o, fields: u }))
              : (r[i] = new nY({ ...o, fields: u }));
          }
        return r;
      }
      function sK(e) {
        if (nc(e)) {
          let t = e.toConfig();
          if (null != t.astNode) {
            let e = [];
            for (let n in t.fields) {
              let r = t.fields[n];
              null != r.astNode && e.push(r.astNode);
            }
            t.astNode = {
              ...t.astNode,
              kind: w.OBJECT_TYPE_DEFINITION,
              fields: e,
            };
          }
          return (
            null != t.extensionASTNodes &&
              (t.extensionASTNodes = t.extensionASTNodes.map((e) => ({
                ...e,
                kind: w.OBJECT_TYPE_EXTENSION,
                fields: void 0,
              }))),
            new nD(t)
          );
        }
        if (nd(e)) {
          let t = e.toConfig();
          if (null != t.astNode) {
            let e = [];
            for (let n in t.fields) {
              let r = t.fields[n];
              null != r.astNode && e.push(r.astNode);
            }
            t.astNode = {
              ...t.astNode,
              kind: w.INTERFACE_TYPE_DEFINITION,
              fields: e,
            };
          }
          return (
            null != t.extensionASTNodes &&
              (t.extensionASTNodes = t.extensionASTNodes.map((e) => ({
                ...e,
                kind: w.INTERFACE_TYPE_EXTENSION,
                fields: void 0,
              }))),
            new nj(t)
          );
        }
        if (nf(e)) {
          let t = e.toConfig();
          if (null != t.astNode) {
            let e = [];
            for (let n in t.fields) {
              let r = t.fields[n];
              null != r.astNode && e.push(r.astNode);
            }
            t.astNode = {
              ...t.astNode,
              kind: w.INPUT_OBJECT_TYPE_DEFINITION,
              fields: e,
            };
          }
          return (
            null != t.extensionASTNodes &&
              (t.extensionASTNodes = t.extensionASTNodes.map((e) => ({
                ...e,
                kind: w.INPUT_OBJECT_TYPE_EXTENSION,
                fields: void 0,
              }))),
            new nY(t)
          );
        }
        {
          if (!nh(e)) return e;
          let t = e.toConfig();
          if (null != t.astNode) {
            let e = [];
            for (let n in t.values) {
              let r = t.values[n];
              null != r.astNode && e.push(r.astNode);
            }
            t.astNode = { ...t.astNode, values: e };
          }
          return (
            null != t.extensionASTNodes &&
              (t.extensionASTNodes = t.extensionASTNodes.map((e) => ({
                ...e,
                values: void 0,
              }))),
            new nV(t)
          );
        }
      }
      function sH(e, t) {
        for (let n in t) e[n] = t[n];
      }
      function sz(e, t, n, r, i) {
        if (!n.resolve) {
          let n = `Resolver missing for "${r}.${i}".
To disable this validator, use:
  resolverValidationOptions: {
    ${e}: 'ignore'
  }`;
          if ('error' === t) throw Error(n);
          'warn' === t && console.warn(n);
          return;
        }
        if ('function' != typeof n.resolve)
          throw Error(`Resolver "${r}.${i}" must be a function`);
      }
      let sX = {
        origin: '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        preflightContinue: !1,
        optionsSuccessStatus: 204,
      };
      async function sW(e, t) {
        let n = e.headers.get('Origin') || void 0,
          r = 'function' == typeof t ? await t(n, e) : t;
        if (r)
          return (function (e, t) {
            let n = new Headers();
            return (
              '*' === t
                ? n.set('Access-Control-Allow-Origin', '*')
                : ('string' == typeof t
                    ? n.set('Access-Control-Allow-Origin', t)
                    : (function e(t, n) {
                        return Array.isArray(n)
                          ? n.some((n) => e(t, n))
                          : 'string' == typeof n
                          ? t === n
                          : n instanceof RegExp
                          ? n.test(t)
                          : !!n;
                      })(e ?? '', t) &&
                      e &&
                      n.set('Access-Control-Allow-Origin', e),
                  n.append('Vary', 'Origin')),
              n
            );
          })(n, r);
      }
      async function sZ(e, t, n) {
        let r = { ...sX, ...n },
          { headers: i } = t,
          s = await sW(e, r.origin ?? !1),
          a = (e, t) => {
            'Vary' === t ? i.append(t, e) : i.set(t, e);
          };
        if (!s) return t;
        s.forEach(a),
          r.credentials && i.set('Access-Control-Allow-Credentials', 'true');
        let o = Array.isArray(r.exposedHeaders)
          ? r.exposedHeaders.join(',')
          : r.exposedHeaders;
        if (
          (o && i.set('Access-Control-Expose-Headers', o),
          'OPTIONS' === e.method)
        ) {
          if (r.methods) {
            let e = Array.isArray(r.methods) ? r.methods.join(',') : r.methods;
            i.set('Access-Control-Allow-Methods', e);
          }
          return ((function (e, t) {
            let n = new Headers();
            return (
              t
                ? Array.isArray(t) && (t = t.join(','))
                : ((t = e.headers.get('Access-Control-Request-Headers')),
                  n.append('Vary', 'Access-Control-Request-Headers')),
              t && n.set('Access-Control-Allow-Headers', t),
              n
            );
          })(e, r.allowedHeaders).forEach(a),
          'number' == typeof r.maxAge &&
            i.set('Access-Control-Max-Age', String(r.maxAge)),
          r.preflightContinue)
            ? t
            : (i.set('Content-Length', '0'),
              new Response(null, {
                status: r.optionsSuccessStatus,
                headers: i,
              }));
        }
        return t;
      }
      var s0 = function () {
        return (s0 =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var i in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e;
          }).apply(this, arguments);
      };
      Object.create, Object.create;
      var s1 =
          ('function' == typeof SuppressedError && SuppressedError, new Map()),
        s2 = new Map(),
        s4 = !0,
        s3 = !1;
      function s9(e) {
        return e.replace(/[\s,]+/g, ' ').trim();
      }
      function s7(e) {
        for (var t = [], n = 1; n < arguments.length; n++)
          t[n - 1] = arguments[n];
        'string' == typeof e && (e = [e]);
        var r = e[0];
        return (
          t.forEach(function (t, n) {
            t && 'Document' === t.kind ? (r += t.loc.source.body) : (r += t),
              (r += e[n + 1]);
          }),
          (function (e) {
            var t = s9(e);
            if (!s1.has(t)) {
              var n,
                r,
                i,
                s,
                a,
                o = tU(e, {
                  experimentalFragmentVariables: s3,
                  allowLegacyFragmentVariables: s3,
                });
              if (!o || 'Document' !== o.kind)
                throw Error('Not a valid GraphQL document.');
              s1.set(
                t,
                ((n = new Set()),
                (r = []),
                o.definitions.forEach(function (e) {
                  if ('FragmentDefinition' === e.kind) {
                    var t,
                      i = e.name.value,
                      s = s9((t = e.loc).source.body.substring(t.start, t.end)),
                      a = s2.get(i);
                    a && !a.has(s)
                      ? s4 &&
                        console.warn(
                          'Warning: fragment with name ' +
                            i +
                            ' already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names'
                        )
                      : a || s2.set(i, (a = new Set())),
                      a.add(s),
                      n.has(s) || (n.add(s), r.push(e));
                  } else r.push(e);
                }),
                (i = s0(s0({}, o), { definitions: r })),
                (s = new Set(i.definitions)).forEach(function (e) {
                  e.loc && delete e.loc,
                    Object.keys(e).forEach(function (t) {
                      var n = e[t];
                      n && 'object' == typeof n && s.add(n);
                    });
                }),
                (a = i.loc) && (delete a.startToken, delete a.endToken),
                i)
              );
            }
            return s1.get(t);
          })(r)
        );
      }
      var s6 = {
        gql: s7,
        resetCaches: function () {
          s1.clear(), s2.clear();
        },
        disableFragmentWarnings: function () {
          s4 = !1;
        },
        enableExperimentalFragmentVariables: function () {
          s3 = !0;
        },
        disableExperimentalFragmentVariables: function () {
          s3 = !1;
        },
      };
      !(function (e) {
        (e.gql = s6.gql),
          (e.resetCaches = s6.resetCaches),
          (e.disableFragmentWarnings = s6.disableFragmentWarnings),
          (e.enableExperimentalFragmentVariables =
            s6.enableExperimentalFragmentVariables),
          (e.disableExperimentalFragmentVariables =
            s6.disableExperimentalFragmentVariables);
      })(s7 || (s7 = {})),
        (s7.default = s7);
      let s8 = s7,
        s5 = s7`
  enum ClubStatus {
    pending
    approved
    declined
  }

  type Club {
    id: ID!
    name: String!
    description: String
    status: ClubStatus!
    type: String!
    creatorId: String
    teacherId: String
    preferredTeachers: [String]
    minMember: Int!
    maxMember: Int!
    createdAt: String!
    updatedAt: String!
    timetables: [Timetable]
  }

  input CreateClubInput {
    name: String!
    description: String
    status: ClubStatus
    type: String!
    creatorId: String
    teacherId: String
    preferredTeachers: [String]
    minMember: Int!
    maxMember: Int!
  }

  input UpdateClubInput {
    id: ID!
    status: ClubStatus
    type: String
    teacherId: String
    minMember: Int
    maxMember: Int
  }

  extend type Query {
    getAllClubs: [Club!]!
    getClubById(id: ID!): Club
    getAllPendingClubs: [Club!]!
    getAllApprovedClubs: [Club!]!
  }

  extend type Mutation {
    createClubWithSchedules(
      input: CreateClubInput!
      startDate: String!
      classroom: String!
      startTime: String!
      duration: Int!
      frequency: String!
      selectedDays: [String!]
    ): Club

    createClub(input: CreateClubInput!): Club
    updateClub(input: UpdateClubInput!): Club
    deleteClub(id: ID!): ID
  }
`,
        ae = sD([
          s7`
  type Query {
    _empty: String
  }
  type Mutation {
    _empty: String
  }
`,
          s5,
          s8`
  type Timetable {
    id: ID!
    date: String!
    room: String!
    clubStartTime: String!
    duration: Int!
    clubId: String!
    club: Club
    createdAt: String!
    updatedAt: String!
  }

  input CreateTimetableInput {
    date: String!
    room: String!
    clubStartTime: String!
    duration: Int!
    clubId: String!
  }

  input UpdateTimetableInput {
    id: ID!
    date: String
    room: String
    clubStartTime: String
    duration: Int
  }

  extend type Query {
    getTimetables: [Timetable]
    getTimetableByClub(clubId: ID!): [Timetable]
  }

  extend type Mutation {
    createTimetable(input: CreateTimetableInput!): Timetable
    updateTimetable(input: UpdateTimetableInput!): Timetable
    deleteTimetable(id: ID!): Boolean
  }

  extend type Club {
    timetables: [Timetable]
  }
`,
        ]);
      n(430);
      let at = Symbol.for('drizzle:entityKind');
      function an(e, t) {
        if (!e || 'object' != typeof e) return !1;
        if (e instanceof t) return !0;
        if (!Object.prototype.hasOwnProperty.call(t, at))
          throw Error(
            `Class "${
              t.name ?? '<unknown>'
            }" doesn't look like a Drizzle entity. If this is incorrect and the class is provided by Drizzle, please report this as a bug.`
          );
        let n = Object.getPrototypeOf(e).constructor;
        if (n)
          for (; n; ) {
            if (at in n && n[at] === t[at]) return !0;
            n = Object.getPrototypeOf(n);
          }
        return !1;
      }
      Symbol.for('drizzle:hasOwnEntityKind');
      class ar {
        static {
          this[at] = 'ConsoleLogWriter';
        }
        write(e) {
          console.log(e);
        }
      }
      class ai {
        static {
          this[at] = 'DefaultLogger';
        }
        constructor(e) {
          this.writer = e?.writer ?? new ar();
        }
        logQuery(e, t) {
          let n = t.map((e) => {
              try {
                return JSON.stringify(e);
              } catch {
                return String(e);
              }
            }),
            r = n.length ? ` -- params: [${n.join(', ')}]` : '';
          this.writer.write(`Query: ${e}${r}`);
        }
      }
      class as {
        static {
          this[at] = 'NoopLogger';
        }
        logQuery() {}
      }
      let aa = Symbol.for('drizzle:Name'),
        ao = Symbol.for('drizzle:Schema'),
        al = Symbol.for('drizzle:Columns'),
        au = Symbol.for('drizzle:ExtraConfigColumns'),
        ac = Symbol.for('drizzle:OriginalName'),
        ad = Symbol.for('drizzle:BaseName'),
        ap = Symbol.for('drizzle:IsAlias'),
        ah = Symbol.for('drizzle:ExtraConfigBuilder'),
        af = Symbol.for('drizzle:IsDrizzleTable');
      class am {
        static {
          this[at] = 'Table';
        }
        static {
          this.Symbol = {
            Name: aa,
            Schema: ao,
            OriginalName: ac,
            Columns: al,
            ExtraConfigColumns: au,
            BaseName: ad,
            IsAlias: ap,
            ExtraConfigBuilder: ah,
          };
        }
        constructor(e, t, n) {
          (this[ap] = !1),
            (this[af] = !0),
            (this[ah] = void 0),
            (this[aa] = this[ac] = e),
            (this[ao] = t),
            (this[ad] = n);
        }
      }
      function ag(e) {
        return `${e[ao] ?? 'public'}.${e[aa]}`;
      }
      class ay {
        constructor(e, t) {
          (this.enumValues = void 0),
            (this.generated = void 0),
            (this.generatedIdentity = void 0),
            (this.table = e),
            (this.config = t),
            (this.name = t.name),
            (this.keyAsName = t.keyAsName),
            (this.notNull = t.notNull),
            (this.default = t.default),
            (this.defaultFn = t.defaultFn),
            (this.onUpdateFn = t.onUpdateFn),
            (this.hasDefault = t.hasDefault),
            (this.primary = t.primaryKey),
            (this.isUnique = t.isUnique),
            (this.uniqueName = t.uniqueName),
            (this.uniqueType = t.uniqueType),
            (this.dataType = t.dataType),
            (this.columnType = t.columnType),
            (this.generated = t.generated),
            (this.generatedIdentity = t.generatedIdentity);
        }
        static {
          this[at] = 'Column';
        }
        mapFromDriverValue(e) {
          return e;
        }
        mapToDriverValue(e) {
          return e;
        }
        shouldDisableInsert() {
          return (
            void 0 !== this.config.generated &&
            'byDefault' !== this.config.generated.type
          );
        }
      }
      let av = Symbol.for('drizzle:PgInlineForeignKeys'),
        aT = Symbol.for('drizzle:EnableRLS');
      class ab extends am {
        static {
          (o = am.Symbol.ExtraConfigBuilder),
            (l = am.Symbol.ExtraConfigColumns);
        }
        static {
          this[at] = 'PgTable';
        }
        static {
          this.Symbol = Object.assign({}, am.Symbol, {
            InlineForeignKeys: av,
            EnableRLS: aT,
          });
        }
        constructor(...e) {
          super(...e),
            (this[av] = []),
            (this[aT] = !1),
            (this[o] = void 0),
            (this[l] = {});
        }
      }
      class aE {
        static {
          this[at] = 'PgPrimaryKeyBuilder';
        }
        constructor(e, t) {
          (this.columns = e), (this.name = t);
        }
        build(e) {
          return new aN(e, this.columns, this.name);
        }
      }
      class aN {
        constructor(e, t, n) {
          (this.table = e), (this.columns = t), (this.name = n);
        }
        static {
          this[at] = 'PgPrimaryKey';
        }
        getName() {
          return (
            this.name ??
            `${this.table[ab.Symbol.Name]}_${this.columns
              .map((e) => e.name)
              .join('_')}_pk`
          );
        }
      }
      class a_ {
        static {
          this[at] = 'ColumnBuilder';
        }
        constructor(e, t, n) {
          (this.$default = this.$defaultFn),
            (this.$onUpdate = this.$onUpdateFn),
            (this.config = {
              name: e,
              keyAsName: '' === e,
              notNull: !1,
              default: void 0,
              hasDefault: !1,
              primaryKey: !1,
              isUnique: !1,
              uniqueName: void 0,
              uniqueType: void 0,
              dataType: t,
              columnType: n,
              generated: void 0,
            });
        }
        $type() {
          return this;
        }
        notNull() {
          return (this.config.notNull = !0), this;
        }
        default(e) {
          return (this.config.default = e), (this.config.hasDefault = !0), this;
        }
        $defaultFn(e) {
          return (
            (this.config.defaultFn = e), (this.config.hasDefault = !0), this
          );
        }
        $onUpdateFn(e) {
          return (
            (this.config.onUpdateFn = e), (this.config.hasDefault = !0), this
          );
        }
        primaryKey() {
          return (
            (this.config.primaryKey = !0), (this.config.notNull = !0), this
          );
        }
        setName(e) {
          '' === this.config.name && (this.config.name = e);
        }
      }
      class aS {
        static {
          this[at] = 'PgForeignKeyBuilder';
        }
        constructor(e, t) {
          (this._onUpdate = 'no action'),
            (this._onDelete = 'no action'),
            (this.reference = () => {
              let { name: t, columns: n, foreignColumns: r } = e();
              return {
                name: t,
                columns: n,
                foreignTable: r[0].table,
                foreignColumns: r,
              };
            }),
            t && ((this._onUpdate = t.onUpdate), (this._onDelete = t.onDelete));
        }
        onUpdate(e) {
          return (this._onUpdate = void 0 === e ? 'no action' : e), this;
        }
        onDelete(e) {
          return (this._onDelete = void 0 === e ? 'no action' : e), this;
        }
        build(e) {
          return new aI(e, this);
        }
      }
      class aI {
        constructor(e, t) {
          (this.table = e),
            (this.reference = t.reference),
            (this.onUpdate = t._onUpdate),
            (this.onDelete = t._onDelete);
        }
        static {
          this[at] = 'PgForeignKey';
        }
        getName() {
          let { name: e, columns: t, foreignColumns: n } = this.reference(),
            r = t.map((e) => e.name),
            i = n.map((e) => e.name),
            s = [this.table[aa], ...r, n[0].table[aa], ...i];
          return e ?? `${s.join('_')}_fk`;
        }
      }
      function aO(e, ...t) {
        return e(...t);
      }
      function aw(e, t) {
        return `${e[aa]}_${t.join('_')}_unique`;
      }
      class aA {
        constructor(e, t) {
          (this.nullsNotDistinctConfig = !1),
            (this.name = t),
            (this.columns = e);
        }
        static {
          this[at] = 'PgUniqueConstraintBuilder';
        }
        nullsNotDistinct() {
          return (this.nullsNotDistinctConfig = !0), this;
        }
        build(e) {
          return new aC(
            e,
            this.columns,
            this.nullsNotDistinctConfig,
            this.name
          );
        }
      }
      class ax {
        static {
          this[at] = 'PgUniqueOnConstraintBuilder';
        }
        constructor(e) {
          this.name = e;
        }
        on(...e) {
          return new aA(e, this.name);
        }
      }
      class aC {
        constructor(e, t, n, r) {
          (this.nullsNotDistinct = !1),
            (this.table = e),
            (this.columns = t),
            (this.name =
              r ??
              aw(
                this.table,
                this.columns.map((e) => e.name)
              )),
            (this.nullsNotDistinct = n);
        }
        static {
          this[at] = 'PgUniqueConstraint';
        }
        getName() {
          return this.name;
        }
      }
      function aD(e, t, n) {
        for (let r = t; r < e.length; r++) {
          let i = e[r];
          if ('\\' === i) {
            r++;
            continue;
          }
          if ('"' === i) return [e.slice(t, r).replace(/\\/g, ''), r + 1];
          if (!n && (',' === i || '}' === i))
            return [e.slice(t, r).replace(/\\/g, ''), r];
        }
        return [e.slice(t).replace(/\\/g, ''), e.length];
      }
      class aR extends a_ {
        static {
          this[at] = 'PgColumnBuilder';
        }
        array(e) {
          return new a$(this.config.name, this, e);
        }
        references(e, t = {}) {
          return this.foreignKeyConfigs.push({ ref: e, actions: t }), this;
        }
        unique(e, t) {
          return (
            (this.config.isUnique = !0),
            (this.config.uniqueName = e),
            (this.config.uniqueType = t?.nulls),
            this
          );
        }
        generatedAlwaysAs(e) {
          return (
            (this.config.generated = { as: e, type: 'always', mode: 'stored' }),
            this
          );
        }
        buildForeignKeys(e, t) {
          return this.foreignKeyConfigs.map(({ ref: n, actions: r }) =>
            aO(
              (n, r) => {
                let i = new aS(() => ({ columns: [e], foreignColumns: [n()] }));
                return (
                  r.onUpdate && i.onUpdate(r.onUpdate),
                  r.onDelete && i.onDelete(r.onDelete),
                  i.build(t)
                );
              },
              n,
              r
            )
          );
        }
        buildExtraConfigColumn(e) {
          return new aP(e, this.config);
        }
        constructor(...e) {
          super(...e), (this.foreignKeyConfigs = []);
        }
      }
      class aL extends ay {
        constructor(e, t) {
          t.uniqueName || (t.uniqueName = aw(e, [t.name])),
            super(e, t),
            (this.table = e);
        }
        static {
          this[at] = 'PgColumn';
        }
      }
      class aP extends aL {
        static {
          this[at] = 'ExtraConfigColumn';
        }
        getSQLType() {
          return this.getSQLType();
        }
        asc() {
          return (this.indexConfig.order = 'asc'), this;
        }
        desc() {
          return (this.indexConfig.order = 'desc'), this;
        }
        nullsFirst() {
          return (this.indexConfig.nulls = 'first'), this;
        }
        nullsLast() {
          return (this.indexConfig.nulls = 'last'), this;
        }
        op(e) {
          return (this.indexConfig.opClass = e), this;
        }
        constructor(...e) {
          super(...e),
            (this.indexConfig = {
              order: this.config.order ?? 'asc',
              nulls: this.config.nulls ?? 'last',
              opClass: this.config.opClass,
            }),
            (this.defaultConfig = {
              order: 'asc',
              nulls: 'last',
              opClass: void 0,
            });
        }
      }
      class ak {
        static {
          this[at] = 'IndexedColumn';
        }
        constructor(e, t, n, r) {
          (this.name = e),
            (this.keyAsName = t),
            (this.type = n),
            (this.indexConfig = r);
        }
      }
      class a$ extends aR {
        static {
          this[at] = 'PgArrayBuilder';
        }
        constructor(e, t, n) {
          super(e, 'array', 'PgArray'),
            (this.config.baseBuilder = t),
            (this.config.size = n);
        }
        build(e) {
          let t = this.config.baseBuilder.build(e);
          return new aM(e, this.config, t);
        }
      }
      class aM extends aL {
        constructor(e, t, n, r) {
          super(e, t),
            (this.baseColumn = n),
            (this.range = r),
            (this.size = t.size);
        }
        static {
          this[at] = 'PgArray';
        }
        getSQLType() {
          return `${this.baseColumn.getSQLType()}[${
            'number' == typeof this.size ? this.size : ''
          }]`;
        }
        mapFromDriverValue(e) {
          return (
            'string' == typeof e &&
              (e = (function (e) {
                let [t] = (function e(t, n = 0) {
                  let r = [],
                    i = n,
                    s = !1;
                  for (; i < t.length; ) {
                    let a = t[i];
                    if (',' === a) {
                      (s || i === n) && r.push(''), (s = !0), i++;
                      continue;
                    }
                    if (((s = !1), '\\' === a)) {
                      i += 2;
                      continue;
                    }
                    if ('"' === a) {
                      let [e, n] = aD(t, i + 1, !0);
                      r.push(e), (i = n);
                      continue;
                    }
                    if ('}' === a) return [r, i + 1];
                    if ('{' === a) {
                      let [n, s] = e(t, i + 1);
                      r.push(n), (i = s);
                      continue;
                    }
                    let [o, l] = aD(t, i, !1);
                    r.push(o), (i = l);
                  }
                  return [r, i];
                })(e, 1);
                return t;
              })(e)),
            e.map((e) => this.baseColumn.mapFromDriverValue(e))
          );
        }
        mapToDriverValue(e, t = !1) {
          let n = e.map((e) =>
            null === e
              ? null
              : an(this.baseColumn, aM)
              ? this.baseColumn.mapToDriverValue(e, !0)
              : this.baseColumn.mapToDriverValue(e)
          );
          return t
            ? n
            : (function e(t) {
                return `{${t
                  .map((t) =>
                    Array.isArray(t)
                      ? e(t)
                      : 'string' == typeof t
                      ? `"${t.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`
                      : `${t}`
                  )
                  .join(',')}}`;
              })(n);
        }
      }
      class aF extends aR {
        static {
          this[at] = 'PgEnumObjectColumnBuilder';
        }
        constructor(e, t) {
          super(e, 'string', 'PgEnumObjectColumn'), (this.config.enum = t);
        }
        build(e) {
          return new aj(e, this.config);
        }
      }
      class aj extends aL {
        static {
          this[at] = 'PgEnumObjectColumn';
        }
        constructor(e, t) {
          super(e, t),
            (this.enumValues = this.config.enum.enumValues),
            (this.enum = t.enum);
        }
        getSQLType() {
          return this.enum.enumName;
        }
      }
      let aU = Symbol.for('drizzle:isPgEnum');
      class aB extends aR {
        static {
          this[at] = 'PgEnumColumnBuilder';
        }
        constructor(e, t) {
          super(e, 'string', 'PgEnumColumn'), (this.config.enum = t);
        }
        build(e) {
          return new aV(e, this.config);
        }
      }
      class aV extends aL {
        static {
          this[at] = 'PgEnumColumn';
        }
        constructor(e, t) {
          super(e, t),
            (this.enum = this.config.enum),
            (this.enumValues = this.config.enum.enumValues),
            (this.enum = t.enum);
        }
        getSQLType() {
          return this.enum.enumName;
        }
      }
      class aq {
        static {
          this[at] = 'Subquery';
        }
        constructor(e, t, n, r = !1, i = []) {
          this._ = {
            brand: 'Subquery',
            sql: e,
            selectedFields: t,
            alias: n,
            isWith: r,
            usedTables: i,
          };
        }
      }
      class aQ extends aq {
        static {
          this[at] = 'WithSubquery';
        }
      }
      let aY = {
          startActiveSpan: (e, t) =>
            u
              ? (c || (c = u.trace.getTracer('drizzle-orm', '0.45.1')),
                aO(
                  (n, r) =>
                    r.startActiveSpan(e, (e) => {
                      try {
                        return t(e);
                      } catch (t) {
                        throw (
                          (e.setStatus({
                            code: n.SpanStatusCode.ERROR,
                            message:
                              t instanceof Error ? t.message : 'Unknown error',
                          }),
                          t)
                        );
                      } finally {
                        e.end();
                      }
                    }),
                  u,
                  c
                ))
              : t(),
        },
        aG = Symbol.for('drizzle:ViewBaseConfig');
      class aJ {
        static {
          this[at] = 'FakePrimitiveParam';
        }
      }
      function aK(e) {
        return null != e && 'function' == typeof e.getSQL;
      }
      class aH {
        static {
          this[at] = 'StringChunk';
        }
        constructor(e) {
          this.value = Array.isArray(e) ? e : [e];
        }
        getSQL() {
          return new az([this]);
        }
      }
      class az {
        constructor(e) {
          for (let t of ((this.decoder = aW),
          (this.shouldInlineParams = !1),
          (this.usedTables = []),
          (this.queryChunks = e),
          e))
            if (an(t, am)) {
              let e = t[am.Symbol.Schema];
              this.usedTables.push(
                void 0 === e ? t[am.Symbol.Name] : e + '.' + t[am.Symbol.Name]
              );
            }
        }
        static {
          this[at] = 'SQL';
        }
        append(e) {
          return this.queryChunks.push(...e.queryChunks), this;
        }
        toQuery(e) {
          return aY.startActiveSpan('drizzle.buildSQL', (t) => {
            let n = this.buildQueryFromSourceParams(this.queryChunks, e);
            return (
              t?.setAttributes({
                'drizzle.query.text': n.sql,
                'drizzle.query.params': JSON.stringify(n.params),
              }),
              n
            );
          });
        }
        buildQueryFromSourceParams(e, t) {
          let n = Object.assign({}, t, {
              inlineParams: t.inlineParams || this.shouldInlineParams,
              paramStartIndex: t.paramStartIndex || { value: 0 },
            }),
            {
              casing: r,
              escapeName: i,
              escapeParam: s,
              prepareTyping: a,
              inlineParams: o,
              paramStartIndex: l,
            } = n;
          return (function (e) {
            let t = { sql: '', params: [] };
            for (let n of e)
              (t.sql += n.sql),
                t.params.push(...n.params),
                n.typings?.length &&
                  (t.typings || (t.typings = []), t.typings.push(...n.typings));
            return t;
          })(
            e.map((e) => {
              if (an(e, aH)) return { sql: e.value.join(''), params: [] };
              if (an(e, aX)) return { sql: i(e.value), params: [] };
              if (void 0 === e) return { sql: '', params: [] };
              if (Array.isArray(e)) {
                let t = [new aH('(')];
                for (let [n, r] of e.entries())
                  t.push(r), n < e.length - 1 && t.push(new aH(', '));
                return (
                  t.push(new aH(')')), this.buildQueryFromSourceParams(t, n)
                );
              }
              if (an(e, az))
                return this.buildQueryFromSourceParams(e.queryChunks, {
                  ...n,
                  inlineParams: o || e.shouldInlineParams,
                });
              if (an(e, am)) {
                let t = e[am.Symbol.Schema],
                  n = e[am.Symbol.Name];
                return {
                  sql: void 0 === t || e[ap] ? i(n) : i(t) + '.' + i(n),
                  params: [],
                };
              }
              if (an(e, ay)) {
                let n = r.getColumnCasing(e);
                if ('indexes' === t.invokeSource)
                  return { sql: i(n), params: [] };
                let s = e.table[am.Symbol.Schema];
                return {
                  sql:
                    e.table[ap] || void 0 === s
                      ? i(e.table[am.Symbol.Name]) + '.' + i(n)
                      : i(s) + '.' + i(e.table[am.Symbol.Name]) + '.' + i(n),
                  params: [],
                };
              }
              if (an(e, a9)) {
                let t = e[aG].schema,
                  n = e[aG].name;
                return {
                  sql: void 0 === t || e[aG].isAlias ? i(n) : i(t) + '.' + i(n),
                  params: [],
                };
              }
              if (an(e, a0)) {
                if (an(e.value, a2))
                  return {
                    sql: s(l.value++, e),
                    params: [e],
                    typings: ['none'],
                  };
                let t =
                  null === e.value ? null : e.encoder.mapToDriverValue(e.value);
                if (an(t, az)) return this.buildQueryFromSourceParams([t], n);
                if (o) return { sql: this.mapInlineParam(t, n), params: [] };
                let r = ['none'];
                return (
                  a && (r = [a(e.encoder)]),
                  { sql: s(l.value++, t), params: [t], typings: r }
                );
              }
              return an(e, a2)
                ? { sql: s(l.value++, e), params: [e], typings: ['none'] }
                : an(e, az.Aliased) && void 0 !== e.fieldAlias
                ? { sql: i(e.fieldAlias), params: [] }
                : an(e, aq)
                ? e._.isWith
                  ? { sql: i(e._.alias), params: [] }
                  : this.buildQueryFromSourceParams(
                      [new aH('('), e._.sql, new aH(') '), new aX(e._.alias)],
                      n
                    )
                : e && 'function' == typeof e && aU in e && !0 === e[aU]
                ? e.schema
                  ? { sql: i(e.schema) + '.' + i(e.enumName), params: [] }
                  : { sql: i(e.enumName), params: [] }
                : aK(e)
                ? e.shouldOmitSQLParens?.()
                  ? this.buildQueryFromSourceParams([e.getSQL()], n)
                  : this.buildQueryFromSourceParams(
                      [new aH('('), e.getSQL(), new aH(')')],
                      n
                    )
                : o
                ? { sql: this.mapInlineParam(e, n), params: [] }
                : { sql: s(l.value++, e), params: [e], typings: ['none'] };
            })
          );
        }
        mapInlineParam(e, { escapeString: t }) {
          if (null === e) return 'null';
          if ('number' == typeof e || 'boolean' == typeof e)
            return e.toString();
          if ('string' == typeof e) return t(e);
          if ('object' == typeof e) {
            let n = e.toString();
            return '[object Object]' === n ? t(JSON.stringify(e)) : t(n);
          }
          throw Error('Unexpected param value: ' + e);
        }
        getSQL() {
          return this;
        }
        as(e) {
          return void 0 === e ? this : new az.Aliased(this, e);
        }
        mapWith(e) {
          return (
            (this.decoder =
              'function' == typeof e ? { mapFromDriverValue: e } : e),
            this
          );
        }
        inlineParams() {
          return (this.shouldInlineParams = !0), this;
        }
        if(e) {
          return e ? this : void 0;
        }
      }
      class aX {
        constructor(e) {
          this.value = e;
        }
        static {
          this[at] = 'Name';
        }
        getSQL() {
          return new az([this]);
        }
      }
      let aW = { mapFromDriverValue: (e) => e },
        aZ = { mapToDriverValue: (e) => e };
      ({ ...aW, ...aZ });
      class a0 {
        constructor(e, t = aZ) {
          (this.value = e), (this.encoder = t);
        }
        static {
          this[at] = 'Param';
        }
        getSQL() {
          return new az([this]);
        }
      }
      function a1(e, ...t) {
        let n = [];
        for (let [r, i] of ((t.length > 0 || (e.length > 0 && '' !== e[0])) &&
          n.push(new aH(e[0])),
        t.entries()))
          n.push(i, new aH(e[r + 1]));
        return new az(n);
      }
      ((e) => {
        (e.empty = function () {
          return new az([]);
        }),
          (e.fromList = function (e) {
            return new az(e);
          }),
          (e.raw = function (e) {
            return new az([new aH(e)]);
          }),
          (e.join = function (e, t) {
            let n = [];
            for (let [r, i] of e.entries())
              r > 0 && void 0 !== t && n.push(t), n.push(i);
            return new az(n);
          }),
          (e.identifier = function (e) {
            return new aX(e);
          }),
          (e.placeholder = function (e) {
            return new a2(e);
          }),
          (e.param = function (e, t) {
            return new a0(e, t);
          });
      })(a1 || (a1 = {})),
        ((e) => {
          class t {
            constructor(e, t) {
              (this.isSelectionField = !1),
                (this.sql = e),
                (this.fieldAlias = t);
            }
            static {
              this[at] = 'SQL.Aliased';
            }
            getSQL() {
              return this.sql;
            }
            clone() {
              return new t(this.sql, this.fieldAlias);
            }
          }
          e.Aliased = t;
        })(az || (az = {}));
      class a2 {
        constructor(e) {
          this.name = e;
        }
        static {
          this[at] = 'Placeholder';
        }
        getSQL() {
          return new az([this]);
        }
      }
      function a4(e, t) {
        return e.map((e) => {
          if (an(e, a2)) {
            if (!(e.name in t))
              throw Error(`No value for placeholder "${e.name}" was provided`);
            return t[e.name];
          }
          if (an(e, a0) && an(e.value, a2)) {
            if (!(e.value.name in t))
              throw Error(
                `No value for placeholder "${e.value.name}" was provided`
              );
            return e.encoder.mapToDriverValue(t[e.value.name]);
          }
          return e;
        });
      }
      let a3 = Symbol.for('drizzle:IsDrizzleView');
      class a9 {
        static {
          this[at] = 'View';
        }
        constructor({ name: e, schema: t, selectedFields: n, query: r }) {
          (this[a3] = !0),
            (this[aG] = {
              name: e,
              originalName: e,
              schema: t,
              selectedFields: n,
              query: r,
              isExisting: !r,
              isAlias: !1,
            });
        }
        getSQL() {
          return new az([this]);
        }
      }
      function a7(e, t) {
        return 'object' != typeof t ||
          null === t ||
          !('mapToDriverValue' in t) ||
          'function' != typeof t.mapToDriverValue ||
          aK(e) ||
          an(e, a0) ||
          an(e, a2) ||
          an(e, ay) ||
          an(e, am) ||
          an(e, a9)
          ? e
          : new a0(e, t);
      }
      (ay.prototype.getSQL = function () {
        return new az([this]);
      }),
        (am.prototype.getSQL = function () {
          return new az([this]);
        }),
        (aq.prototype.getSQL = function () {
          return new az([this]);
        });
      let a6 = (e, t) => a1`${e} = ${a7(t, e)}`,
        a8 = (e, t) => a1`${e} <> ${a7(t, e)}`;
      function a5(...e) {
        let t = e.filter((e) => void 0 !== e);
        return 0 === t.length
          ? void 0
          : new az(
              1 === t.length
                ? t
                : [new aH('('), a1.join(t, new aH(' and ')), new aH(')')]
            );
      }
      function oe(...e) {
        let t = e.filter((e) => void 0 !== e);
        return 0 === t.length
          ? void 0
          : new az(
              1 === t.length
                ? t
                : [new aH('('), a1.join(t, new aH(' or ')), new aH(')')]
            );
      }
      function ot(e) {
        return a1`not ${e}`;
      }
      let on = (e, t) => a1`${e} > ${a7(t, e)}`,
        or = (e, t) => a1`${e} >= ${a7(t, e)}`,
        oi = (e, t) => a1`${e} < ${a7(t, e)}`,
        os = (e, t) => a1`${e} <= ${a7(t, e)}`;
      function oa(e, t) {
        return Array.isArray(t)
          ? 0 === t.length
            ? a1`false`
            : a1`${e} in ${t.map((t) => a7(t, e))}`
          : a1`${e} in ${a7(t, e)}`;
      }
      function oo(e, t) {
        return Array.isArray(t)
          ? 0 === t.length
            ? a1`true`
            : a1`${e} not in ${t.map((t) => a7(t, e))}`
          : a1`${e} not in ${a7(t, e)}`;
      }
      function ol(e) {
        return a1`${e} is null`;
      }
      function ou(e) {
        return a1`${e} is not null`;
      }
      function oc(e) {
        return a1`exists ${e}`;
      }
      function od(e) {
        return a1`not exists ${e}`;
      }
      function op(e, t, n) {
        return a1`${e} between ${a7(t, e)} and ${a7(n, e)}`;
      }
      function oh(e, t, n) {
        return a1`${e} not between ${a7(t, e)} and ${a7(n, e)}`;
      }
      function of(e, t) {
        return a1`${e} like ${t}`;
      }
      function om(e, t) {
        return a1`${e} not like ${t}`;
      }
      function og(e, t) {
        return a1`${e} ilike ${t}`;
      }
      function oy(e, t) {
        return a1`${e} not ilike ${t}`;
      }
      function ov(e) {
        return a1`${e} asc`;
      }
      function oT(e) {
        return a1`${e} desc`;
      }
      class ob {
        constructor(e, t, n) {
          (this.sourceTable = e),
            (this.referencedTable = t),
            (this.relationName = n),
            (this.referencedTableName = t[am.Symbol.Name]);
        }
        static {
          this[at] = 'Relation';
        }
      }
      class oE {
        constructor(e, t) {
          (this.table = e), (this.config = t);
        }
        static {
          this[at] = 'Relations';
        }
      }
      class oN extends ob {
        constructor(e, t, n, r) {
          super(e, t, n?.relationName),
            (this.config = n),
            (this.isNullable = r);
        }
        static {
          this[at] = 'One';
        }
        withFieldName(e) {
          let t = new oN(
            this.sourceTable,
            this.referencedTable,
            this.config,
            this.isNullable
          );
          return (t.fieldName = e), t;
        }
      }
      class o_ extends ob {
        constructor(e, t, n) {
          super(e, t, n?.relationName), (this.config = n);
        }
        static {
          this[at] = 'Many';
        }
        withFieldName(e) {
          let t = new o_(this.sourceTable, this.referencedTable, this.config);
          return (t.fieldName = e), t;
        }
      }
      function oS(e) {
        return {
          one: function (t, n) {
            return new oN(
              e,
              t,
              n,
              n?.fields.reduce((e, t) => e && t.notNull, !0) ?? !1
            );
          },
          many: function (t, n) {
            return new o_(e, t, n);
          },
        };
      }
      class oI {
        constructor(e) {
          this.table = e;
        }
        static {
          this[at] = 'ColumnAliasProxyHandler';
        }
        get(e, t) {
          return 'table' === t ? this.table : e[t];
        }
      }
      class oO {
        constructor(e, t) {
          (this.alias = e), (this.replaceOriginalName = t);
        }
        static {
          this[at] = 'TableAliasProxyHandler';
        }
        get(e, t) {
          if (t === am.Symbol.IsAlias) return !0;
          if (
            t === am.Symbol.Name ||
            (this.replaceOriginalName && t === am.Symbol.OriginalName)
          )
            return this.alias;
          if (t === aG) return { ...e[aG], name: this.alias, isAlias: !0 };
          if (t === am.Symbol.Columns) {
            let t = e[am.Symbol.Columns];
            if (!t) return t;
            let n = {};
            return (
              Object.keys(t).map((r) => {
                n[r] = new Proxy(t[r], new oI(new Proxy(e, this)));
              }),
              n
            );
          }
          let n = e[t];
          return an(n, ay) ? new Proxy(n, new oI(new Proxy(e, this))) : n;
        }
      }
      class ow {
        constructor(e) {
          this.alias = e;
        }
        static {
          this[at] = 'RelationTableAliasProxyHandler';
        }
        get(e, t) {
          return 'sourceTable' === t ? oA(e.sourceTable, this.alias) : e[t];
        }
      }
      function oA(e, t) {
        return new Proxy(e, new oO(t, !1));
      }
      function ox(e, t) {
        return new Proxy(e, new oI(new Proxy(e.table, new oO(t, !1))));
      }
      function oC(e, t) {
        return new az.Aliased(oD(e.sql, t), e.fieldAlias);
      }
      function oD(e, t) {
        return a1.join(
          e.queryChunks.map((e) =>
            an(e, ay)
              ? ox(e, t)
              : an(e, az)
              ? oD(e, t)
              : an(e, az.Aliased)
              ? oC(e, t)
              : e
          )
        );
      }
      class oR {
        static {
          this[at] = 'SelectionProxyHandler';
        }
        constructor(e) {
          this.config = { ...e };
        }
        get(e, t) {
          if ('_' === t)
            return {
              ...e._,
              selectedFields: new Proxy(e._.selectedFields, this),
            };
          if (t === aG)
            return {
              ...e[aG],
              selectedFields: new Proxy(e[aG].selectedFields, this),
            };
          if ('symbol' == typeof t) return e[t];
          let n = (
            an(e, aq)
              ? e._.selectedFields
              : an(e, a9)
              ? e[aG].selectedFields
              : e
          )[t];
          if (an(n, az.Aliased)) {
            if ('sql' === this.config.sqlAliasedBehavior && !n.isSelectionField)
              return n.sql;
            let e = n.clone();
            return (e.isSelectionField = !0), e;
          }
          if (an(n, az)) {
            if ('sql' === this.config.sqlBehavior) return n;
            throw Error(
              `You tried to reference "${t}" field from a subquery, which is a raw SQL field, but it doesn't have an alias declared. Please add an alias to the field using ".as('alias')" method.`
            );
          }
          return an(n, ay)
            ? this.config.alias
              ? new Proxy(
                  n,
                  new oI(
                    new Proxy(
                      n.table,
                      new oO(
                        this.config.alias,
                        this.config.replaceOriginalName ?? !1
                      )
                    )
                  )
                )
              : n
            : 'object' != typeof n || null === n
            ? n
            : new Proxy(n, new oR(this.config));
        }
      }
      function oL(e) {
        return (
          e
            .replace(/['\u2019]/g, '')
            .match(/[\da-z]+|[A-Z]+(?![a-z])|[A-Z][\da-z]+/g) ?? []
        )
          .map((e) => e.toLowerCase())
          .join('_');
      }
      function oP(e) {
        return (
          e
            .replace(/['\u2019]/g, '')
            .match(/[\da-z]+|[A-Z]+(?![a-z])|[A-Z][\da-z]+/g) ?? []
        ).reduce(
          (e, t, n) =>
            e +
            (0 === n ? t.toLowerCase() : `${t[0].toUpperCase()}${t.slice(1)}`),
          ''
        );
      }
      function ok(e) {
        return e;
      }
      class o$ {
        static {
          this[at] = 'CasingCache';
        }
        constructor(e) {
          (this.cache = {}),
            (this.cachedTables = {}),
            (this.convert =
              'snake_case' === e ? oL : 'camelCase' === e ? oP : ok);
        }
        getColumnCasing(e) {
          if (!e.keyAsName) return e.name;
          let t = e.table[am.Symbol.Schema] ?? 'public',
            n = e.table[am.Symbol.OriginalName],
            r = `${t}.${n}.${e.name}`;
          return this.cache[r] || this.cacheTable(e.table), this.cache[r];
        }
        cacheTable(e) {
          let t = e[am.Symbol.Schema] ?? 'public',
            n = e[am.Symbol.OriginalName],
            r = `${t}.${n}`;
          if (!this.cachedTables[r]) {
            for (let t of Object.values(e[am.Symbol.Columns])) {
              let e = `${r}.${t.name}`;
              this.cache[e] = this.convert(t.name);
            }
            this.cachedTables[r] = !0;
          }
        }
        clearCache() {
          (this.cache = {}), (this.cachedTables = {});
        }
      }
      class oM extends Error {
        static {
          this[at] = 'DrizzleError';
        }
        constructor({ message: e, cause: t }) {
          super(e), (this.name = 'DrizzleError'), (this.cause = t);
        }
      }
      class oF extends Error {
        constructor(e, t, n) {
          super(`Failed query: ${e}
params: ${t}`),
            (this.query = e),
            (this.params = t),
            (this.cause = n),
            Error.captureStackTrace(this, oF),
            n && (this.cause = n);
        }
      }
      class oj extends oM {
        static {
          this[at] = 'TransactionRollbackError';
        }
        constructor() {
          super({ message: 'Rollback' });
        }
      }
      class oU {
        static {
          this[at] = 'SQLiteForeignKeyBuilder';
        }
        constructor(e, t) {
          (this.reference = () => {
            let { name: t, columns: n, foreignColumns: r } = e();
            return {
              name: t,
              columns: n,
              foreignTable: r[0].table,
              foreignColumns: r,
            };
          }),
            t && ((this._onUpdate = t.onUpdate), (this._onDelete = t.onDelete));
        }
        onUpdate(e) {
          return (this._onUpdate = e), this;
        }
        onDelete(e) {
          return (this._onDelete = e), this;
        }
        build(e) {
          return new oB(e, this);
        }
      }
      class oB {
        constructor(e, t) {
          (this.table = e),
            (this.reference = t.reference),
            (this.onUpdate = t._onUpdate),
            (this.onDelete = t._onDelete);
        }
        static {
          this[at] = 'SQLiteForeignKey';
        }
        getName() {
          let { name: e, columns: t, foreignColumns: n } = this.reference(),
            r = t.map((e) => e.name),
            i = n.map((e) => e.name),
            s = [this.table[aa], ...r, n[0].table[aa], ...i];
          return e ?? `${s.join('_')}_fk`;
        }
      }
      function oV(e, t) {
        return `${e[aa]}_${t.join('_')}_unique`;
      }
      class oq {
        constructor(e, t) {
          (this.name = t), (this.columns = e);
        }
        static {
          this[at] = 'SQLiteUniqueConstraintBuilder';
        }
        build(e) {
          return new oY(e, this.columns, this.name);
        }
      }
      class oQ {
        static {
          this[at] = 'SQLiteUniqueOnConstraintBuilder';
        }
        constructor(e) {
          this.name = e;
        }
        on(...e) {
          return new oq(e, this.name);
        }
      }
      class oY {
        constructor(e, t, n) {
          (this.table = e),
            (this.columns = t),
            (this.name =
              n ??
              oV(
                this.table,
                this.columns.map((e) => e.name)
              ));
        }
        static {
          this[at] = 'SQLiteUniqueConstraint';
        }
        getName() {
          return this.name;
        }
      }
      class oG extends a_ {
        static {
          this[at] = 'SQLiteColumnBuilder';
        }
        references(e, t = {}) {
          return this.foreignKeyConfigs.push({ ref: e, actions: t }), this;
        }
        unique(e) {
          return (
            (this.config.isUnique = !0), (this.config.uniqueName = e), this
          );
        }
        generatedAlwaysAs(e, t) {
          return (
            (this.config.generated = {
              as: e,
              type: 'always',
              mode: t?.mode ?? 'virtual',
            }),
            this
          );
        }
        buildForeignKeys(e, t) {
          return this.foreignKeyConfigs.map(({ ref: n, actions: r }) =>
            ((n, r) => {
              let i = new oU(() => ({ columns: [e], foreignColumns: [n()] }));
              return (
                r.onUpdate && i.onUpdate(r.onUpdate),
                r.onDelete && i.onDelete(r.onDelete),
                i.build(t)
              );
            })(n, r)
          );
        }
        constructor(...e) {
          super(...e), (this.foreignKeyConfigs = []);
        }
      }
      class oJ extends ay {
        constructor(e, t) {
          t.uniqueName || (t.uniqueName = oV(e, [t.name])),
            super(e, t),
            (this.table = e);
        }
        static {
          this[at] = 'SQLiteColumn';
        }
      }
      function oK(e, t, n) {
        let r = {},
          i = e.reduce((e, { path: i, field: s }, a) => {
            let o;
            o = an(s, ay)
              ? s
              : an(s, az)
              ? s.decoder
              : an(s, aq)
              ? s._.sql.decoder
              : s.sql.decoder;
            let l = e;
            for (let [e, u] of i.entries())
              if (e < i.length - 1) u in l || (l[u] = {}), (l = l[u]);
              else {
                let e = t[a],
                  c = (l[u] = null === e ? null : o.mapFromDriverValue(e));
                if (n && an(s, ay) && 2 === i.length) {
                  let e = i[0];
                  e in r
                    ? 'string' == typeof r[e] &&
                      r[e] !== s.table[aa] &&
                      (r[e] = !1)
                    : (r[e] = null === c && s.table[aa]);
                }
              }
            return e;
          }, {});
        if (n && Object.keys(r).length > 0)
          for (let [e, t] of Object.entries(r))
            'string' != typeof t || n[t] || (i[e] = null);
        return i;
      }
      function oH(e, t) {
        return Object.entries(e).reduce((e, [n, r]) => {
          if ('string' != typeof n) return e;
          let i = t ? [...t, n] : [n];
          return (
            an(r, ay) || an(r, az) || an(r, az.Aliased) || an(r, aq)
              ? e.push({ path: i, field: r })
              : an(r, am)
              ? e.push(...oH(r[am.Symbol.Columns], i))
              : e.push(...oH(r, i)),
            e
          );
        }, []);
      }
      function oz(e, t) {
        let n = Object.keys(e),
          r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (let [e, t] of n.entries()) if (t !== r[e]) return !1;
        return !0;
      }
      function oX(e, t) {
        let n = Object.entries(t)
          .filter(([, e]) => void 0 !== e)
          .map(([t, n]) =>
            an(n, az) || an(n, ay)
              ? [t, n]
              : [t, new a0(n, e[am.Symbol.Columns][t])]
          );
        if (0 === n.length) throw Error('No values to set');
        return Object.fromEntries(n);
      }
      function oW(e) {
        return an(e, aq)
          ? e._.alias
          : an(e, a9)
          ? e[aG].name
          : an(e, az)
          ? void 0
          : e[am.Symbol.IsAlias]
          ? e[am.Symbol.Name]
          : e[am.Symbol.BaseName];
      }
      function oZ(e, t) {
        return {
          name: 'string' == typeof e && e.length > 0 ? e : '',
          config: 'object' == typeof e ? e : t,
        };
      }
      let o0 = 'undefined' == typeof TextDecoder ? null : new TextDecoder();
      var o1 = n(195).Buffer;
      class o2 extends oG {
        static {
          this[at] = 'SQLiteBigIntBuilder';
        }
        constructor(e) {
          super(e, 'bigint', 'SQLiteBigInt');
        }
        build(e) {
          return new o4(e, this.config);
        }
      }
      class o4 extends oJ {
        static {
          this[at] = 'SQLiteBigInt';
        }
        getSQLType() {
          return 'blob';
        }
        mapFromDriverValue(e) {
          return void 0 !== o1 && o1.from
            ? BigInt(
                (o1.isBuffer(e)
                  ? e
                  : e instanceof ArrayBuffer
                  ? o1.from(e)
                  : e.buffer
                  ? o1.from(e.buffer, e.byteOffset, e.byteLength)
                  : o1.from(e)
                ).toString('utf8')
              )
            : BigInt(o0.decode(e));
        }
        mapToDriverValue(e) {
          return o1.from(e.toString());
        }
      }
      class o3 extends oG {
        static {
          this[at] = 'SQLiteBlobJsonBuilder';
        }
        constructor(e) {
          super(e, 'json', 'SQLiteBlobJson');
        }
        build(e) {
          return new o9(e, this.config);
        }
      }
      class o9 extends oJ {
        static {
          this[at] = 'SQLiteBlobJson';
        }
        getSQLType() {
          return 'blob';
        }
        mapFromDriverValue(e) {
          return void 0 !== o1 && o1.from
            ? JSON.parse(
                (o1.isBuffer(e)
                  ? e
                  : e instanceof ArrayBuffer
                  ? o1.from(e)
                  : e.buffer
                  ? o1.from(e.buffer, e.byteOffset, e.byteLength)
                  : o1.from(e)
                ).toString('utf8')
              )
            : JSON.parse(o0.decode(e));
        }
        mapToDriverValue(e) {
          return o1.from(JSON.stringify(e));
        }
      }
      class o7 extends oG {
        static {
          this[at] = 'SQLiteBlobBufferBuilder';
        }
        constructor(e) {
          super(e, 'buffer', 'SQLiteBlobBuffer');
        }
        build(e) {
          return new o6(e, this.config);
        }
      }
      class o6 extends oJ {
        static {
          this[at] = 'SQLiteBlobBuffer';
        }
        mapFromDriverValue(e) {
          return o1.isBuffer(e) ? e : o1.from(e);
        }
        getSQLType() {
          return 'blob';
        }
      }
      function o8(e, t) {
        let { name: n, config: r } = oZ(e, t);
        return r?.mode === 'json'
          ? new o3(n)
          : r?.mode === 'bigint'
          ? new o2(n)
          : new o7(n);
      }
      class o5 extends oG {
        static {
          this[at] = 'SQLiteCustomColumnBuilder';
        }
        constructor(e, t, n) {
          super(e, 'custom', 'SQLiteCustomColumn'),
            (this.config.fieldConfig = t),
            (this.config.customTypeParams = n);
        }
        build(e) {
          return new le(e, this.config);
        }
      }
      class le extends oJ {
        static {
          this[at] = 'SQLiteCustomColumn';
        }
        constructor(e, t) {
          super(e, t),
            (this.sqlName = t.customTypeParams.dataType(t.fieldConfig)),
            (this.mapTo = t.customTypeParams.toDriver),
            (this.mapFrom = t.customTypeParams.fromDriver);
        }
        getSQLType() {
          return this.sqlName;
        }
        mapFromDriverValue(e) {
          return 'function' == typeof this.mapFrom ? this.mapFrom(e) : e;
        }
        mapToDriverValue(e) {
          return 'function' == typeof this.mapTo ? this.mapTo(e) : e;
        }
      }
      function lt(e) {
        return (t, n) => {
          let { name: r, config: i } = oZ(t, n);
          return new o5(r, i, e);
        };
      }
      class ln extends oG {
        static {
          this[at] = 'SQLiteBaseIntegerBuilder';
        }
        constructor(e, t, n) {
          super(e, t, n), (this.config.autoIncrement = !1);
        }
        primaryKey(e) {
          return (
            e?.autoIncrement && (this.config.autoIncrement = !0),
            (this.config.hasDefault = !0),
            super.primaryKey()
          );
        }
      }
      class lr extends oJ {
        static {
          this[at] = 'SQLiteBaseInteger';
        }
        getSQLType() {
          return 'integer';
        }
        constructor(...e) {
          super(...e), (this.autoIncrement = this.config.autoIncrement);
        }
      }
      class li extends ln {
        static {
          this[at] = 'SQLiteIntegerBuilder';
        }
        constructor(e) {
          super(e, 'number', 'SQLiteInteger');
        }
        build(e) {
          return new ls(e, this.config);
        }
      }
      class ls extends lr {
        static {
          this[at] = 'SQLiteInteger';
        }
      }
      class la extends ln {
        static {
          this[at] = 'SQLiteTimestampBuilder';
        }
        constructor(e, t) {
          super(e, 'date', 'SQLiteTimestamp'), (this.config.mode = t);
        }
        defaultNow() {
          return this.default(
            a1`(cast((julianday('now') - 2440587.5)*86400000 as integer))`
          );
        }
        build(e) {
          return new lo(e, this.config);
        }
      }
      class lo extends lr {
        static {
          this[at] = 'SQLiteTimestamp';
        }
        mapFromDriverValue(e) {
          return new Date('timestamp' === this.config.mode ? 1e3 * e : e);
        }
        mapToDriverValue(e) {
          let t = e.getTime();
          return 'timestamp' === this.config.mode ? Math.floor(t / 1e3) : t;
        }
        constructor(...e) {
          super(...e), (this.mode = this.config.mode);
        }
      }
      class ll extends ln {
        static {
          this[at] = 'SQLiteBooleanBuilder';
        }
        constructor(e, t) {
          super(e, 'boolean', 'SQLiteBoolean'), (this.config.mode = t);
        }
        build(e) {
          return new lu(e, this.config);
        }
      }
      class lu extends lr {
        static {
          this[at] = 'SQLiteBoolean';
        }
        mapFromDriverValue(e) {
          return 1 === Number(e);
        }
        mapToDriverValue(e) {
          return e ? 1 : 0;
        }
        constructor(...e) {
          super(...e), (this.mode = this.config.mode);
        }
      }
      function lc(e, t) {
        let { name: n, config: r } = oZ(e, t);
        return r?.mode === 'timestamp' || r?.mode === 'timestamp_ms'
          ? new la(n, r.mode)
          : r?.mode === 'boolean'
          ? new ll(n, r.mode)
          : new li(n);
      }
      class ld extends oG {
        static {
          this[at] = 'SQLiteNumericBuilder';
        }
        constructor(e) {
          super(e, 'string', 'SQLiteNumeric');
        }
        build(e) {
          return new lp(e, this.config);
        }
      }
      class lp extends oJ {
        static {
          this[at] = 'SQLiteNumeric';
        }
        mapFromDriverValue(e) {
          return 'string' == typeof e ? e : String(e);
        }
        getSQLType() {
          return 'numeric';
        }
      }
      class lh extends oG {
        static {
          this[at] = 'SQLiteNumericNumberBuilder';
        }
        constructor(e) {
          super(e, 'number', 'SQLiteNumericNumber');
        }
        build(e) {
          return new lf(e, this.config);
        }
      }
      class lf extends oJ {
        static {
          this[at] = 'SQLiteNumericNumber';
        }
        mapFromDriverValue(e) {
          return 'number' == typeof e ? e : Number(e);
        }
        getSQLType() {
          return 'numeric';
        }
        constructor(...e) {
          super(...e), (this.mapToDriverValue = String);
        }
      }
      class lm extends oG {
        static {
          this[at] = 'SQLiteNumericBigIntBuilder';
        }
        constructor(e) {
          super(e, 'bigint', 'SQLiteNumericBigInt');
        }
        build(e) {
          return new lg(e, this.config);
        }
      }
      class lg extends oJ {
        static {
          this[at] = 'SQLiteNumericBigInt';
        }
        getSQLType() {
          return 'numeric';
        }
        constructor(...e) {
          super(...e),
            (this.mapFromDriverValue = BigInt),
            (this.mapToDriverValue = String);
        }
      }
      function ly(e, t) {
        let { name: n, config: r } = oZ(e, t),
          i = r?.mode;
        return 'number' === i
          ? new lh(n)
          : 'bigint' === i
          ? new lm(n)
          : new ld(n);
      }
      class lv extends oG {
        static {
          this[at] = 'SQLiteRealBuilder';
        }
        constructor(e) {
          super(e, 'number', 'SQLiteReal');
        }
        build(e) {
          return new lT(e, this.config);
        }
      }
      class lT extends oJ {
        static {
          this[at] = 'SQLiteReal';
        }
        getSQLType() {
          return 'real';
        }
      }
      function lb(e) {
        return new lv(e ?? '');
      }
      class lE extends oG {
        static {
          this[at] = 'SQLiteTextBuilder';
        }
        constructor(e, t) {
          super(e, 'string', 'SQLiteText'),
            (this.config.enumValues = t.enum),
            (this.config.length = t.length);
        }
        build(e) {
          return new lN(e, this.config);
        }
      }
      class lN extends oJ {
        static {
          this[at] = 'SQLiteText';
        }
        constructor(e, t) {
          super(e, t),
            (this.enumValues = this.config.enumValues),
            (this.length = this.config.length);
        }
        getSQLType() {
          return `text${this.config.length ? `(${this.config.length})` : ''}`;
        }
      }
      class l_ extends oG {
        static {
          this[at] = 'SQLiteTextJsonBuilder';
        }
        constructor(e) {
          super(e, 'json', 'SQLiteTextJson');
        }
        build(e) {
          return new lS(e, this.config);
        }
      }
      class lS extends oJ {
        static {
          this[at] = 'SQLiteTextJson';
        }
        getSQLType() {
          return 'text';
        }
        mapFromDriverValue(e) {
          return JSON.parse(e);
        }
        mapToDriverValue(e) {
          return JSON.stringify(e);
        }
      }
      function lI(e, t = {}) {
        let { name: n, config: r } = oZ(e, t);
        return 'json' === r.mode ? new l_(n) : new lE(n, r);
      }
      let lO = Symbol.for('drizzle:SQLiteInlineForeignKeys');
      class lw extends am {
        static {
          am.Symbol.Columns, (d = am.Symbol.ExtraConfigBuilder);
        }
        static {
          this[at] = 'SQLiteTable';
        }
        static {
          this.Symbol = Object.assign({}, am.Symbol, { InlineForeignKeys: lO });
        }
        constructor(...e) {
          super(...e), (this[lO] = []), (this[d] = void 0);
        }
      }
      let lA = (e, t, n) =>
        (function (e, t, n, r, i = e) {
          let s = new lw(e, void 0, i),
            a = Object.fromEntries(
              Object.entries(
                'function' == typeof t
                  ? t({
                      blob: o8,
                      customType: lt,
                      integer: lc,
                      numeric: ly,
                      real: lb,
                      text: lI,
                    })
                  : t
              ).map(([e, t]) => {
                t.setName(e);
                let n = t.build(s);
                return s[lO].push(...t.buildForeignKeys(n, s)), [e, n];
              })
            ),
            o = Object.assign(s, a);
          return (
            (o[am.Symbol.Columns] = a),
            (o[am.Symbol.ExtraConfigColumns] = a),
            n && (o[lw.Symbol.ExtraConfigBuilder] = n),
            o
          );
        })(e, t, n);
      class lx extends a9 {
        static {
          this[at] = 'SQLiteViewBase';
        }
      }
      class lC {
        static {
          this[at] = 'SQLiteDialect';
        }
        constructor(e) {
          this.casing = new o$(e?.casing);
        }
        escapeName(e) {
          return `"${e}"`;
        }
        escapeParam(e) {
          return '?';
        }
        escapeString(e) {
          return `'${e.replace(/'/g, "''")}'`;
        }
        buildWithCTE(e) {
          if (!e?.length) return;
          let t = [a1`with `];
          for (let [n, r] of e.entries())
            t.push(a1`${a1.identifier(r._.alias)} as (${r._.sql})`),
              n < e.length - 1 && t.push(a1`, `);
          return t.push(a1` `), a1.join(t);
        }
        buildDeleteQuery({
          table: e,
          where: t,
          returning: n,
          withList: r,
          limit: i,
          orderBy: s,
        }) {
          let a = this.buildWithCTE(r),
            o = n
              ? a1` returning ${this.buildSelection(n, { isSingleTable: !0 })}`
              : void 0,
            l = t ? a1` where ${t}` : void 0,
            u = this.buildOrderBy(s),
            c = this.buildLimit(i);
          return a1`${a}delete from ${e}${l}${o}${u}${c}`;
        }
        buildUpdateSet(e, t) {
          let n = e[am.Symbol.Columns],
            r = Object.keys(n).filter(
              (e) => void 0 !== t[e] || n[e]?.onUpdateFn !== void 0
            ),
            i = r.length;
          return a1.join(
            r.flatMap((e, r) => {
              let s = n[e],
                a = s.onUpdateFn?.(),
                o = t[e] ?? (an(a, az) ? a : a1.param(a, s)),
                l = a1`${a1.identifier(this.casing.getColumnCasing(s))} = ${o}`;
              return r < i - 1 ? [l, a1.raw(', ')] : [l];
            })
          );
        }
        buildUpdateQuery({
          table: e,
          set: t,
          where: n,
          returning: r,
          withList: i,
          joins: s,
          from: a,
          limit: o,
          orderBy: l,
        }) {
          let u = this.buildWithCTE(i),
            c = this.buildUpdateSet(e, t),
            d = a && a1.join([a1.raw(' from '), this.buildFromTable(a)]),
            p = this.buildJoins(s),
            h = r
              ? a1` returning ${this.buildSelection(r, { isSingleTable: !0 })}`
              : void 0,
            f = n ? a1` where ${n}` : void 0,
            m = this.buildOrderBy(l),
            g = this.buildLimit(o);
          return a1`${u}update ${e} set ${c}${d}${p}${f}${h}${m}${g}`;
        }
        buildSelection(e, { isSingleTable: t = !1 } = {}) {
          let n = e.length,
            r = e.flatMap(({ field: e }, r) => {
              let i = [];
              if (an(e, az.Aliased) && e.isSelectionField)
                i.push(a1.identifier(e.fieldAlias));
              else if (an(e, az.Aliased) || an(e, az)) {
                let n = an(e, az.Aliased) ? e.sql : e;
                t
                  ? i.push(
                      new az(
                        n.queryChunks.map((e) =>
                          an(e, ay)
                            ? a1.identifier(this.casing.getColumnCasing(e))
                            : e
                        )
                      )
                    )
                  : i.push(n),
                  an(e, az.Aliased) &&
                    i.push(a1` as ${a1.identifier(e.fieldAlias)}`);
              } else if (an(e, ay)) {
                let n = e.table[am.Symbol.Name];
                'SQLiteNumericBigInt' === e.columnType
                  ? t
                    ? i.push(
                        a1`cast(${a1.identifier(
                          this.casing.getColumnCasing(e)
                        )} as text)`
                      )
                    : i.push(
                        a1`cast(${a1.identifier(n)}.${a1.identifier(
                          this.casing.getColumnCasing(e)
                        )} as text)`
                      )
                  : t
                  ? i.push(a1.identifier(this.casing.getColumnCasing(e)))
                  : i.push(
                      a1`${a1.identifier(n)}.${a1.identifier(
                        this.casing.getColumnCasing(e)
                      )}`
                    );
              } else if (an(e, aq)) {
                let t = Object.entries(e._.selectedFields);
                if (1 === t.length) {
                  let n = t[0][1],
                    r = an(n, az)
                      ? n.decoder
                      : an(n, ay)
                      ? { mapFromDriverValue: (e) => n.mapFromDriverValue(e) }
                      : n.sql.decoder;
                  r && (e._.sql.decoder = r);
                }
                i.push(e);
              }
              return r < n - 1 && i.push(a1`, `), i;
            });
          return a1.join(r);
        }
        buildJoins(e) {
          if (!e || 0 === e.length) return;
          let t = [];
          if (e)
            for (let [n, r] of e.entries()) {
              0 === n && t.push(a1` `);
              let i = r.table,
                s = r.on ? a1` on ${r.on}` : void 0;
              if (an(i, lw)) {
                let e = i[lw.Symbol.Name],
                  n = i[lw.Symbol.Schema],
                  a = i[lw.Symbol.OriginalName],
                  o = e === a ? void 0 : r.alias;
                t.push(
                  a1`${a1.raw(r.joinType)} join ${
                    n ? a1`${a1.identifier(n)}.` : void 0
                  }${a1.identifier(a)}${o && a1` ${a1.identifier(o)}`}${s}`
                );
              } else t.push(a1`${a1.raw(r.joinType)} join ${i}${s}`);
              n < e.length - 1 && t.push(a1` `);
            }
          return a1.join(t);
        }
        buildLimit(e) {
          return 'object' == typeof e || ('number' == typeof e && e >= 0)
            ? a1` limit ${e}`
            : void 0;
        }
        buildOrderBy(e) {
          let t = [];
          if (e)
            for (let [n, r] of e.entries())
              t.push(r), n < e.length - 1 && t.push(a1`, `);
          return t.length > 0 ? a1` order by ${a1.join(t)}` : void 0;
        }
        buildFromTable(e) {
          return an(e, am) && e[am.Symbol.IsAlias]
            ? a1`${a1`${a1.identifier(e[am.Symbol.Schema] ?? '')}.`.if(
                e[am.Symbol.Schema]
              )}${a1.identifier(e[am.Symbol.OriginalName])} ${a1.identifier(
                e[am.Symbol.Name]
              )}`
            : e;
        }
        buildSelectQuery({
          withList: e,
          fields: t,
          fieldsFlat: n,
          where: r,
          having: i,
          table: s,
          joins: a,
          orderBy: o,
          groupBy: l,
          limit: u,
          offset: c,
          distinct: d,
          setOperators: p,
        }) {
          let h = n ?? oH(t);
          for (let e of h) {
            var f;
            if (
              an(e.field, ay) &&
              e.field.table[aa] !==
                (an(s, aq)
                  ? s._.alias
                  : an(s, lx)
                  ? s[aG].name
                  : an(s, az)
                  ? void 0
                  : s[aa]) &&
              ((f = e.field.table),
              !a?.some(
                ({ alias: e }) =>
                  e === (f[am.Symbol.IsAlias] ? f[aa] : f[am.Symbol.BaseName])
              ))
            ) {
              let t = e.field.table[aa];
              throw Error(
                `Your "${e.path.join(
                  '->'
                )}" field references a column "${t}"."${
                  e.field.name
                }", but the table "${t}" is not part of the query! Did you forget to join it?`
              );
            }
          }
          let m = !a || 0 === a.length,
            g = this.buildWithCTE(e),
            y = d ? a1` distinct` : void 0,
            v = this.buildSelection(h, { isSingleTable: m }),
            T = this.buildFromTable(s),
            b = this.buildJoins(a),
            E = r ? a1` where ${r}` : void 0,
            N = i ? a1` having ${i}` : void 0,
            _ = [];
          if (l)
            for (let [e, t] of l.entries())
              _.push(t), e < l.length - 1 && _.push(a1`, `);
          let S = _.length > 0 ? a1` group by ${a1.join(_)}` : void 0,
            I = this.buildOrderBy(o),
            O = this.buildLimit(u),
            w = c ? a1` offset ${c}` : void 0,
            A = a1`${g}select${y} ${v} from ${T}${b}${E}${S}${N}${I}${O}${w}`;
          return p.length > 0 ? this.buildSetOperations(A, p) : A;
        }
        buildSetOperations(e, t) {
          let [n, ...r] = t;
          if (!n)
            throw Error('Cannot pass undefined values to any set operator');
          return 0 === r.length
            ? this.buildSetOperationQuery({ leftSelect: e, setOperator: n })
            : this.buildSetOperations(
                this.buildSetOperationQuery({ leftSelect: e, setOperator: n }),
                r
              );
        }
        buildSetOperationQuery({
          leftSelect: e,
          setOperator: {
            type: t,
            isAll: n,
            rightSelect: r,
            limit: i,
            orderBy: s,
            offset: a,
          },
        }) {
          let o;
          let l = a1`${e.getSQL()} `,
            u = a1`${r.getSQL()}`;
          if (s && s.length > 0) {
            let e = [];
            for (let t of s)
              if (an(t, oJ)) e.push(a1.identifier(t.name));
              else if (an(t, az)) {
                for (let e = 0; e < t.queryChunks.length; e++) {
                  let n = t.queryChunks[e];
                  an(n, oJ) &&
                    (t.queryChunks[e] = a1.identifier(
                      this.casing.getColumnCasing(n)
                    ));
                }
                e.push(a1`${t}`);
              } else e.push(a1`${t}`);
            o = a1` order by ${a1.join(e, a1`, `)}`;
          }
          let c =
              'object' == typeof i || ('number' == typeof i && i >= 0)
                ? a1` limit ${i}`
                : void 0,
            d = a1.raw(`${t} ${n ? 'all ' : ''}`),
            p = a ? a1` offset ${a}` : void 0;
          return a1`${l}${d}${u}${o}${c}${p}`;
        }
        buildInsertQuery({
          table: e,
          values: t,
          onConflict: n,
          returning: r,
          withList: i,
          select: s,
        }) {
          let a = [],
            o = Object.entries(e[am.Symbol.Columns]).filter(
              ([e, t]) => !t.shouldDisableInsert()
            ),
            l = o.map(([, e]) => a1.identifier(this.casing.getColumnCasing(e)));
          if (s) an(t, az) ? a.push(t) : a.push(t.getSQL());
          else
            for (let [e, n] of (a.push(a1.raw('values ')), t.entries())) {
              let r = [];
              for (let [e, t] of o) {
                let i = n[e];
                if (void 0 === i || (an(i, a0) && void 0 === i.value)) {
                  let e;
                  if (null !== t.default && void 0 !== t.default)
                    e = an(t.default, az) ? t.default : a1.param(t.default, t);
                  else if (void 0 !== t.defaultFn) {
                    let n = t.defaultFn();
                    e = an(n, az) ? n : a1.param(n, t);
                  } else if (t.default || void 0 === t.onUpdateFn) e = a1`null`;
                  else {
                    let n = t.onUpdateFn();
                    e = an(n, az) ? n : a1.param(n, t);
                  }
                  r.push(e);
                } else r.push(i);
              }
              a.push(r), e < t.length - 1 && a.push(a1`, `);
            }
          let u = this.buildWithCTE(i),
            c = a1.join(a),
            d = r
              ? a1` returning ${this.buildSelection(r, { isSingleTable: !0 })}`
              : void 0,
            p = n?.length ? a1.join(n) : void 0;
          return a1`${u}insert into ${e} ${l} ${c}${p}${d}`;
        }
        sqlToQuery(e, t) {
          return e.toQuery({
            casing: this.casing,
            escapeName: this.escapeName,
            escapeParam: this.escapeParam,
            escapeString: this.escapeString,
            invokeSource: t,
          });
        }
        buildRelationalQuery({
          fullSchema: e,
          schema: t,
          tableNamesMap: n,
          table: r,
          tableConfig: i,
          queryConfig: s,
          tableAlias: a,
          nestedQueryRelation: o,
          joinOn: l,
        }) {
          let u,
            c = [],
            d,
            p,
            h = [],
            f,
            m = [];
          if (!0 === s)
            c = Object.entries(i.columns).map(([e, t]) => ({
              dbKey: t.name,
              tsKey: e,
              field: ox(t, a),
              relationTableTsKey: void 0,
              isJson: !1,
              selection: [],
            }));
          else {
            let r = Object.fromEntries(
              Object.entries(i.columns).map(([e, t]) => [e, ox(t, a)])
            );
            if (s.where) {
              let e =
                'function' == typeof s.where
                  ? s.where(r, {
                      and: a5,
                      between: op,
                      eq: a6,
                      exists: oc,
                      gt: on,
                      gte: or,
                      ilike: og,
                      inArray: oa,
                      isNull: ol,
                      isNotNull: ou,
                      like: of,
                      lt: oi,
                      lte: os,
                      ne: a8,
                      not: ot,
                      notBetween: oh,
                      notExists: od,
                      notLike: om,
                      notIlike: oy,
                      notInArray: oo,
                      or: oe,
                      sql: a1,
                    })
                  : s.where;
              f = e && oD(e, a);
            }
            let o = [],
              l = [];
            if (s.columns) {
              let e = !1;
              for (let [t, n] of Object.entries(s.columns))
                void 0 !== n &&
                  t in i.columns &&
                  (e || !0 !== n || (e = !0), l.push(t));
              l.length > 0 &&
                (l = e
                  ? l.filter((e) => s.columns?.[e] === !0)
                  : Object.keys(i.columns).filter((e) => !l.includes(e)));
            } else l = Object.keys(i.columns);
            for (let e of l) {
              let t = i.columns[e];
              o.push({ tsKey: e, value: t });
            }
            let u = [];
            if (
              (s.with &&
                (u = Object.entries(s.with)
                  .filter((e) => !!e[1])
                  .map(([e, t]) => ({
                    tsKey: e,
                    queryConfig: t,
                    relation: i.relations[e],
                  }))),
              s.extras)
            )
              for (let [e, t] of Object.entries(
                'function' == typeof s.extras
                  ? s.extras(r, { sql: a1 })
                  : s.extras
              ))
                o.push({ tsKey: e, value: oC(t, a) });
            for (let { tsKey: e, value: t } of o)
              c.push({
                dbKey: an(t, az.Aliased) ? t.fieldAlias : i.columns[e].name,
                tsKey: e,
                field: an(t, ay) ? ox(t, a) : t,
                relationTableTsKey: void 0,
                isJson: !1,
                selection: [],
              });
            let m =
              'function' == typeof s.orderBy
                ? s.orderBy(r, { sql: a1, asc: ov, desc: oT })
                : s.orderBy ?? [];
            for (let {
              tsKey: r,
              queryConfig: i,
              relation: o,
            } of (Array.isArray(m) || (m = [m]),
            (h = m.map((e) => (an(e, ay) ? ox(e, a) : oD(e, a)))),
            (d = s.limit),
            (p = s.offset),
            u)) {
              let s = (function (e, t, n) {
                  if (an(n, oN) && n.config)
                    return {
                      fields: n.config.fields,
                      references: n.config.references,
                    };
                  let r = t[ag(n.referencedTable)];
                  if (!r)
                    throw Error(
                      `Table "${
                        n.referencedTable[am.Symbol.Name]
                      }" not found in schema`
                    );
                  let i = e[r];
                  if (!i) throw Error(`Table "${r}" not found in schema`);
                  let s = n.sourceTable,
                    a = t[ag(s)];
                  if (!a)
                    throw Error(
                      `Table "${s[am.Symbol.Name]}" not found in schema`
                    );
                  let o = [];
                  for (let e of Object.values(i.relations))
                    ((n.relationName &&
                      n !== e &&
                      e.relationName === n.relationName) ||
                      (!n.relationName &&
                        e.referencedTable === n.sourceTable)) &&
                      o.push(e);
                  if (o.length > 1)
                    throw n.relationName
                      ? Error(
                          `There are multiple relations with name "${n.relationName}" in table "${r}"`
                        )
                      : Error(
                          `There are multiple relations between "${r}" and "${
                            n.sourceTable[am.Symbol.Name]
                          }". Please specify relation name`
                        );
                  if (o[0] && an(o[0], oN) && o[0].config)
                    return {
                      fields: o[0].config.references,
                      references: o[0].config.fields,
                    };
                  throw Error(
                    `There is not enough information to infer relation "${a}.${n.fieldName}"`
                  );
                })(t, n, o),
                l = n[ag(o.referencedTable)],
                u = `${a}_${r}`,
                d = a5(
                  ...s.fields.map((e, t) =>
                    a6(ox(s.references[t], u), ox(e, a))
                  )
                ),
                p = this.buildRelationalQuery({
                  fullSchema: e,
                  schema: t,
                  tableNamesMap: n,
                  table: e[l],
                  tableConfig: t[l],
                  queryConfig: an(o, oN)
                    ? !0 === i
                      ? { limit: 1 }
                      : { ...i, limit: 1 }
                    : i,
                  tableAlias: u,
                  joinOn: d,
                  nestedQueryRelation: o,
                }),
                h = a1`(${p.sql})`.as(r);
              c.push({
                dbKey: r,
                tsKey: r,
                field: h,
                relationTableTsKey: l,
                isJson: !0,
                selection: p.selection,
              });
            }
          }
          if (0 === c.length)
            throw new oM({
              message: `No fields selected for table "${i.tsName}" ("${a}"). You need to have at least one item in "columns", "with" or "extras". If you need to select all columns, omit the "columns" key or set it to undefined.`,
            });
          if (((f = a5(l, f)), o)) {
            let e = a1`json_array(${a1.join(
              c.map(({ field: e }) =>
                an(e, oJ)
                  ? a1.identifier(this.casing.getColumnCasing(e))
                  : an(e, az.Aliased)
                  ? e.sql
                  : e
              ),
              a1`, `
            )})`;
            an(o, o_) &&
              (e = a1`coalesce(json_group_array(${e}), json_array())`);
            let t = [
              {
                dbKey: 'data',
                tsKey: 'data',
                field: e.as('data'),
                isJson: !0,
                relationTableTsKey: i.tsName,
                selection: c,
              },
            ];
            void 0 !== d || void 0 !== p || h.length > 0
              ? ((u = this.buildSelectQuery({
                  table: oA(r, a),
                  fields: {},
                  fieldsFlat: [{ path: [], field: a1.raw('*') }],
                  where: f,
                  limit: d,
                  offset: p,
                  orderBy: h,
                  setOperators: [],
                })),
                (f = void 0),
                (d = void 0),
                (p = void 0),
                (h = void 0))
              : (u = oA(r, a)),
              (u = this.buildSelectQuery({
                table: an(u, lw) ? u : new aq(u, {}, a),
                fields: {},
                fieldsFlat: t.map(({ field: e }) => ({
                  path: [],
                  field: an(e, ay) ? ox(e, a) : e,
                })),
                joins: m,
                where: f,
                limit: d,
                offset: p,
                orderBy: h,
                setOperators: [],
              }));
          } else
            u = this.buildSelectQuery({
              table: oA(r, a),
              fields: {},
              fieldsFlat: c.map(({ field: e }) => ({
                path: [],
                field: an(e, ay) ? ox(e, a) : e,
              })),
              joins: m,
              where: f,
              limit: d,
              offset: p,
              orderBy: h,
              setOperators: [],
            });
          return { tableTsKey: i.tsName, sql: u, selection: c };
        }
      }
      class lD extends lC {
        static {
          this[at] = 'SQLiteSyncDialect';
        }
        migrate(e, t, n) {
          let r =
              void 0 === n
                ? '__drizzle_migrations'
                : 'string' == typeof n
                ? '__drizzle_migrations'
                : n.migrationsTable ?? '__drizzle_migrations',
            i = a1`
			CREATE TABLE IF NOT EXISTS ${a1.identifier(r)} (
				id SERIAL PRIMARY KEY,
				hash text NOT NULL,
				created_at numeric
			)
		`;
          t.run(i);
          let s =
            t.values(
              a1`SELECT id, hash, created_at FROM ${a1.identifier(
                r
              )} ORDER BY created_at DESC LIMIT 1`
            )[0] ?? void 0;
          t.run(a1`BEGIN`);
          try {
            for (let n of e)
              if (!s || Number(s[2]) < n.folderMillis) {
                for (let e of n.sql) t.run(a1.raw(e));
                t.run(
                  a1`INSERT INTO ${a1.identifier(
                    r
                  )} ("hash", "created_at") VALUES(${n.hash}, ${
                    n.folderMillis
                  })`
                );
              }
            t.run(a1`COMMIT`);
          } catch (e) {
            throw (t.run(a1`ROLLBACK`), e);
          }
        }
      }
      class lR extends lC {
        static {
          this[at] = 'SQLiteAsyncDialect';
        }
        async migrate(e, t, n) {
          let r =
              void 0 === n
                ? '__drizzle_migrations'
                : 'string' == typeof n
                ? '__drizzle_migrations'
                : n.migrationsTable ?? '__drizzle_migrations',
            i = a1`
			CREATE TABLE IF NOT EXISTS ${a1.identifier(r)} (
				id SERIAL PRIMARY KEY,
				hash text NOT NULL,
				created_at numeric
			)
		`;
          await t.run(i);
          let s =
            (
              await t.values(
                a1`SELECT id, hash, created_at FROM ${a1.identifier(
                  r
                )} ORDER BY created_at DESC LIMIT 1`
              )
            )[0] ?? void 0;
          await t.transaction(async (t) => {
            for (let n of e)
              if (!s || Number(s[2]) < n.folderMillis) {
                for (let e of n.sql) await t.run(a1.raw(e));
                await t.run(
                  a1`INSERT INTO ${a1.identifier(
                    r
                  )} ("hash", "created_at") VALUES(${n.hash}, ${
                    n.folderMillis
                  })`
                );
              }
          });
        }
      }
      class lL {
        static {
          this[at] = 'TypedQueryBuilder';
        }
        getSelectedFields() {
          return this._.selectedFields;
        }
      }
      class lP {
        static {
          p = Symbol.toStringTag;
        }
        static {
          this[at] = 'QueryPromise';
        }
        catch(e) {
          return this.then(void 0, e);
        }
        finally(e) {
          return this.then(
            (t) => (e?.(), t),
            (t) => {
              throw (e?.(), t);
            }
          );
        }
        then(e, t) {
          return this.execute().then(e, t);
        }
        constructor() {
          this[p] = 'QueryPromise';
        }
      }
      function lk(e) {
        return an(e, lw)
          ? [`${e[am.Symbol.BaseName]}`]
          : an(e, aq)
          ? e._.usedTables ?? []
          : an(e, az)
          ? e.usedTables ?? []
          : [];
      }
      class l$ {
        static {
          this[at] = 'SQLiteSelectBuilder';
        }
        constructor(e) {
          (this.fields = e.fields),
            (this.session = e.session),
            (this.dialect = e.dialect),
            (this.withList = e.withList),
            (this.distinct = e.distinct);
        }
        from(e) {
          let t;
          let n = !!this.fields;
          return (
            (t = this.fields
              ? this.fields
              : an(e, aq)
              ? Object.fromEntries(
                  Object.keys(e._.selectedFields).map((t) => [t, e[t]])
                )
              : an(e, lx)
              ? e[aG].selectedFields
              : an(e, az)
              ? {}
              : e[am.Symbol.Columns]),
            new lF({
              table: e,
              fields: t,
              isPartialSelect: n,
              session: this.session,
              dialect: this.dialect,
              withList: this.withList,
              distinct: this.distinct,
            })
          );
        }
      }
      class lM extends lL {
        static {
          this[at] = 'SQLiteSelectQueryBuilder';
        }
        constructor({
          table: e,
          fields: t,
          isPartialSelect: n,
          session: r,
          dialect: i,
          withList: s,
          distinct: a,
        }) {
          for (let o of (super(),
          (this.cacheConfig = void 0),
          (this.usedTables = new Set()),
          (this.leftJoin = this.createJoin('left')),
          (this.rightJoin = this.createJoin('right')),
          (this.innerJoin = this.createJoin('inner')),
          (this.fullJoin = this.createJoin('full')),
          (this.crossJoin = this.createJoin('cross')),
          (this.union = this.createSetOperator('union', !1)),
          (this.unionAll = this.createSetOperator('union', !0)),
          (this.intersect = this.createSetOperator('intersect', !1)),
          (this.except = this.createSetOperator('except', !1)),
          (this.config = {
            withList: s,
            table: e,
            fields: { ...t },
            distinct: a,
            setOperators: [],
          }),
          (this.isPartialSelect = n),
          (this.session = r),
          (this.dialect = i),
          (this._ = { selectedFields: t, config: this.config }),
          (this.tableName = oW(e)),
          (this.joinsNotNullableMap =
            'string' == typeof this.tableName ? { [this.tableName]: !0 } : {}),
          lk(e)))
            this.usedTables.add(o);
        }
        getUsedTables() {
          return [...this.usedTables];
        }
        createJoin(e) {
          return (t, n) => {
            let r = this.tableName,
              i = oW(t);
            for (let e of lk(t)) this.usedTables.add(e);
            if (
              'string' == typeof i &&
              this.config.joins?.some((e) => e.alias === i)
            )
              throw Error(`Alias "${i}" is already used in this query`);
            if (
              !this.isPartialSelect &&
              (1 === Object.keys(this.joinsNotNullableMap).length &&
                'string' == typeof r &&
                (this.config.fields = { [r]: this.config.fields }),
              'string' == typeof i && !an(t, az))
            ) {
              let e = an(t, aq)
                ? t._.selectedFields
                : an(t, a9)
                ? t[aG].selectedFields
                : t[am.Symbol.Columns];
              this.config.fields[i] = e;
            }
            if (
              ('function' == typeof n &&
                (n = n(
                  new Proxy(
                    this.config.fields,
                    new oR({ sqlAliasedBehavior: 'sql', sqlBehavior: 'sql' })
                  )
                )),
              this.config.joins || (this.config.joins = []),
              this.config.joins.push({
                on: n,
                table: t,
                joinType: e,
                alias: i,
              }),
              'string' == typeof i)
            )
              switch (e) {
                case 'left':
                  this.joinsNotNullableMap[i] = !1;
                  break;
                case 'right':
                  (this.joinsNotNullableMap = Object.fromEntries(
                    Object.entries(this.joinsNotNullableMap).map(([e]) => [
                      e,
                      !1,
                    ])
                  )),
                    (this.joinsNotNullableMap[i] = !0);
                  break;
                case 'cross':
                case 'inner':
                  this.joinsNotNullableMap[i] = !0;
                  break;
                case 'full':
                  (this.joinsNotNullableMap = Object.fromEntries(
                    Object.entries(this.joinsNotNullableMap).map(([e]) => [
                      e,
                      !1,
                    ])
                  )),
                    (this.joinsNotNullableMap[i] = !1);
              }
            return this;
          };
        }
        createSetOperator(e, t) {
          return (n) => {
            let r = 'function' == typeof n ? n(lU()) : n;
            if (!oz(this.getSelectedFields(), r.getSelectedFields()))
              throw Error(
                'Set operator error (union / intersect / except): selected fields are not the same or are in a different order'
              );
            return (
              this.config.setOperators.push({
                type: e,
                isAll: t,
                rightSelect: r,
              }),
              this
            );
          };
        }
        addSetOperators(e) {
          return this.config.setOperators.push(...e), this;
        }
        where(e) {
          return (
            'function' == typeof e &&
              (e = e(
                new Proxy(
                  this.config.fields,
                  new oR({ sqlAliasedBehavior: 'sql', sqlBehavior: 'sql' })
                )
              )),
            (this.config.where = e),
            this
          );
        }
        having(e) {
          return (
            'function' == typeof e &&
              (e = e(
                new Proxy(
                  this.config.fields,
                  new oR({ sqlAliasedBehavior: 'sql', sqlBehavior: 'sql' })
                )
              )),
            (this.config.having = e),
            this
          );
        }
        groupBy(...e) {
          if ('function' == typeof e[0]) {
            let t = e[0](
              new Proxy(
                this.config.fields,
                new oR({ sqlAliasedBehavior: 'alias', sqlBehavior: 'sql' })
              )
            );
            this.config.groupBy = Array.isArray(t) ? t : [t];
          } else this.config.groupBy = e;
          return this;
        }
        orderBy(...e) {
          if ('function' == typeof e[0]) {
            let t = e[0](
                new Proxy(
                  this.config.fields,
                  new oR({ sqlAliasedBehavior: 'alias', sqlBehavior: 'sql' })
                )
              ),
              n = Array.isArray(t) ? t : [t];
            this.config.setOperators.length > 0
              ? (this.config.setOperators.at(-1).orderBy = n)
              : (this.config.orderBy = n);
          } else
            this.config.setOperators.length > 0
              ? (this.config.setOperators.at(-1).orderBy = e)
              : (this.config.orderBy = e);
          return this;
        }
        limit(e) {
          return (
            this.config.setOperators.length > 0
              ? (this.config.setOperators.at(-1).limit = e)
              : (this.config.limit = e),
            this
          );
        }
        offset(e) {
          return (
            this.config.setOperators.length > 0
              ? (this.config.setOperators.at(-1).offset = e)
              : (this.config.offset = e),
            this
          );
        }
        getSQL() {
          return this.dialect.buildSelectQuery(this.config);
        }
        toSQL() {
          let { typings: e, ...t } = this.dialect.sqlToQuery(this.getSQL());
          return t;
        }
        as(e) {
          let t = [];
          if ((t.push(...lk(this.config.table)), this.config.joins))
            for (let e of this.config.joins) t.push(...lk(e.table));
          return new Proxy(
            new aq(this.getSQL(), this.config.fields, e, !1, [...new Set(t)]),
            new oR({
              alias: e,
              sqlAliasedBehavior: 'alias',
              sqlBehavior: 'error',
            })
          );
        }
        getSelectedFields() {
          return new Proxy(
            this.config.fields,
            new oR({
              alias: this.tableName,
              sqlAliasedBehavior: 'alias',
              sqlBehavior: 'error',
            })
          );
        }
        $dynamic() {
          return this;
        }
      }
      class lF extends lM {
        static {
          this[at] = 'SQLiteSelect';
        }
        _prepare(e = !0) {
          if (!this.session)
            throw Error(
              'Cannot execute a query on a query builder. Please use a database instance instead.'
            );
          let t = oH(this.config.fields),
            n = this.session[e ? 'prepareOneTimeQuery' : 'prepareQuery'](
              this.dialect.sqlToQuery(this.getSQL()),
              t,
              'all',
              !0,
              void 0,
              { type: 'select', tables: [...this.usedTables] },
              this.cacheConfig
            );
          return (n.joinsNotNullableMap = this.joinsNotNullableMap), n;
        }
        $withCache(e) {
          return (
            (this.cacheConfig =
              void 0 === e
                ? { config: {}, enable: !0, autoInvalidate: !0 }
                : !1 === e
                ? { enable: !1 }
                : { enable: !0, autoInvalidate: !0, ...e }),
            this
          );
        }
        prepare() {
          return this._prepare(!1);
        }
        async execute() {
          return this.all();
        }
        constructor(...e) {
          super(...e),
            (this.run = (e) => this._prepare().run(e)),
            (this.all = (e) => this._prepare().all(e)),
            (this.get = (e) => this._prepare().get(e)),
            (this.values = (e) => this._prepare().values(e));
        }
      }
      function lj(e, t) {
        return (n, r, ...i) => {
          let s = [r, ...i].map((n) => ({ type: e, isAll: t, rightSelect: n }));
          for (let e of s)
            if (!oz(n.getSelectedFields(), e.rightSelect.getSelectedFields()))
              throw Error(
                'Set operator error (union / intersect / except): selected fields are not the same or are in a different order'
              );
          return n.addSetOperators(s);
        };
      }
      !(function (e, t) {
        for (let n of t)
          for (let t of Object.getOwnPropertyNames(n.prototype))
            'constructor' !== t &&
              Object.defineProperty(
                e.prototype,
                t,
                Object.getOwnPropertyDescriptor(n.prototype, t) ||
                  Object.create(null)
              );
      })(lF, [lP]);
      let lU = () => ({ union: lB, unionAll: lV, intersect: lq, except: lQ }),
        lB = lj('union', !1),
        lV = lj('union', !0),
        lq = lj('intersect', !1),
        lQ = lj('except', !1);
      class lY {
        static {
          this[at] = 'SQLiteQueryBuilder';
        }
        constructor(e) {
          (this.$with = (e, t) => {
            let n = this;
            return {
              as: (r) => (
                'function' == typeof r && (r = r(n)),
                new Proxy(
                  new aQ(
                    r.getSQL(),
                    t ??
                      ('getSelectedFields' in r
                        ? r.getSelectedFields() ?? {}
                        : {}),
                    e,
                    !0
                  ),
                  new oR({
                    alias: e,
                    sqlAliasedBehavior: 'alias',
                    sqlBehavior: 'error',
                  })
                )
              ),
            };
          }),
            (this.dialect = an(e, lC) ? e : void 0),
            (this.dialectConfig = an(e, lC) ? void 0 : e);
        }
        with(...e) {
          let t = this;
          return {
            select: function (n) {
              return new l$({
                fields: n ?? void 0,
                session: void 0,
                dialect: t.getDialect(),
                withList: e,
              });
            },
            selectDistinct: function (n) {
              return new l$({
                fields: n ?? void 0,
                session: void 0,
                dialect: t.getDialect(),
                withList: e,
                distinct: !0,
              });
            },
          };
        }
        select(e) {
          return new l$({
            fields: e ?? void 0,
            session: void 0,
            dialect: this.getDialect(),
          });
        }
        selectDistinct(e) {
          return new l$({
            fields: e ?? void 0,
            session: void 0,
            dialect: this.getDialect(),
            distinct: !0,
          });
        }
        getDialect() {
          return (
            this.dialect || (this.dialect = new lD(this.dialectConfig)),
            this.dialect
          );
        }
      }
      class lG {
        constructor(e, t, n, r) {
          (this.table = e),
            (this.session = t),
            (this.dialect = n),
            (this.withList = r);
        }
        static {
          this[at] = 'SQLiteUpdateBuilder';
        }
        set(e) {
          return new lJ(
            this.table,
            oX(this.table, e),
            this.session,
            this.dialect,
            this.withList
          );
        }
      }
      class lJ extends lP {
        constructor(e, t, n, r, i) {
          super(),
            (this.leftJoin = this.createJoin('left')),
            (this.rightJoin = this.createJoin('right')),
            (this.innerJoin = this.createJoin('inner')),
            (this.fullJoin = this.createJoin('full')),
            (this.run = (e) => this._prepare().run(e)),
            (this.all = (e) => this._prepare().all(e)),
            (this.get = (e) => this._prepare().get(e)),
            (this.values = (e) => this._prepare().values(e)),
            (this.session = n),
            (this.dialect = r),
            (this.config = { set: t, table: e, withList: i, joins: [] });
        }
        static {
          this[at] = 'SQLiteUpdate';
        }
        from(e) {
          return (this.config.from = e), this;
        }
        createJoin(e) {
          return (t, n) => {
            let r = oW(t);
            if (
              'string' == typeof r &&
              this.config.joins.some((e) => e.alias === r)
            )
              throw Error(`Alias "${r}" is already used in this query`);
            if ('function' == typeof n) {
              let e = this.config.from
                ? an(t, lw)
                  ? t[am.Symbol.Columns]
                  : an(t, aq)
                  ? t._.selectedFields
                  : an(t, lx)
                  ? t[aG].selectedFields
                  : void 0
                : void 0;
              n = n(
                new Proxy(
                  this.config.table[am.Symbol.Columns],
                  new oR({ sqlAliasedBehavior: 'sql', sqlBehavior: 'sql' })
                ),
                e &&
                  new Proxy(
                    e,
                    new oR({ sqlAliasedBehavior: 'sql', sqlBehavior: 'sql' })
                  )
              );
            }
            return (
              this.config.joins.push({
                on: n,
                table: t,
                joinType: e,
                alias: r,
              }),
              this
            );
          };
        }
        where(e) {
          return (this.config.where = e), this;
        }
        orderBy(...e) {
          if ('function' == typeof e[0]) {
            let t = e[0](
                new Proxy(
                  this.config.table[am.Symbol.Columns],
                  new oR({ sqlAliasedBehavior: 'alias', sqlBehavior: 'sql' })
                )
              ),
              n = Array.isArray(t) ? t : [t];
            this.config.orderBy = n;
          } else this.config.orderBy = e;
          return this;
        }
        limit(e) {
          return (this.config.limit = e), this;
        }
        returning(e = this.config.table[lw.Symbol.Columns]) {
          return (this.config.returning = oH(e)), this;
        }
        getSQL() {
          return this.dialect.buildUpdateQuery(this.config);
        }
        toSQL() {
          let { typings: e, ...t } = this.dialect.sqlToQuery(this.getSQL());
          return t;
        }
        _prepare(e = !0) {
          return this.session[e ? 'prepareOneTimeQuery' : 'prepareQuery'](
            this.dialect.sqlToQuery(this.getSQL()),
            this.config.returning,
            this.config.returning ? 'all' : 'run',
            !0,
            void 0,
            { type: 'insert', tables: lk(this.config.table) }
          );
        }
        prepare() {
          return this._prepare(!1);
        }
        async execute() {
          return this.config.returning ? this.all() : this.run();
        }
        $dynamic() {
          return this;
        }
      }
      class lK {
        constructor(e, t, n, r) {
          (this.table = e),
            (this.session = t),
            (this.dialect = n),
            (this.withList = r);
        }
        static {
          this[at] = 'SQLiteInsertBuilder';
        }
        values(e) {
          if (0 === (e = Array.isArray(e) ? e : [e]).length)
            throw Error('values() must be called with at least one value');
          let t = e.map((e) => {
            let t = {},
              n = this.table[am.Symbol.Columns];
            for (let r of Object.keys(e)) {
              let i = e[r];
              t[r] = an(i, az) ? i : new a0(i, n[r]);
            }
            return t;
          });
          return new lH(
            this.table,
            t,
            this.session,
            this.dialect,
            this.withList
          );
        }
        select(e) {
          let t = 'function' == typeof e ? e(new lY()) : e;
          if (!an(t, az) && !oz(this.table[al], t._.selectedFields))
            throw Error(
              'Insert select error: selected fields are not the same or are in a different order compared to the table definition'
            );
          return new lH(
            this.table,
            t,
            this.session,
            this.dialect,
            this.withList,
            !0
          );
        }
      }
      class lH extends lP {
        constructor(e, t, n, r, i, s) {
          super(),
            (this.run = (e) => this._prepare().run(e)),
            (this.all = (e) => this._prepare().all(e)),
            (this.get = (e) => this._prepare().get(e)),
            (this.values = (e) => this._prepare().values(e)),
            (this.session = n),
            (this.dialect = r),
            (this.config = { table: e, values: t, withList: i, select: s });
        }
        static {
          this[at] = 'SQLiteInsert';
        }
        returning(e = this.config.table[lw.Symbol.Columns]) {
          return (this.config.returning = oH(e)), this;
        }
        onConflictDoNothing(e = {}) {
          if (
            (this.config.onConflict || (this.config.onConflict = []),
            void 0 === e.target)
          )
            this.config.onConflict.push(a1` on conflict do nothing`);
          else {
            let t = Array.isArray(e.target)
                ? a1`${e.target}`
                : a1`${[e.target]}`,
              n = e.where ? a1` where ${e.where}` : a1``;
            this.config.onConflict.push(a1` on conflict ${t} do nothing${n}`);
          }
          return this;
        }
        onConflictDoUpdate(e) {
          if (e.where && (e.targetWhere || e.setWhere))
            throw Error(
              'You cannot use both "where" and "targetWhere"/"setWhere" at the same time - "where" is deprecated, use "targetWhere" or "setWhere" instead.'
            );
          this.config.onConflict || (this.config.onConflict = []);
          let t = e.where ? a1` where ${e.where}` : void 0,
            n = e.targetWhere ? a1` where ${e.targetWhere}` : void 0,
            r = e.setWhere ? a1` where ${e.setWhere}` : void 0,
            i = Array.isArray(e.target) ? a1`${e.target}` : a1`${[e.target]}`,
            s = this.dialect.buildUpdateSet(
              this.config.table,
              oX(this.config.table, e.set)
            );
          return (
            this.config.onConflict.push(
              a1` on conflict ${i}${n} do update set ${s}${t}${r}`
            ),
            this
          );
        }
        getSQL() {
          return this.dialect.buildInsertQuery(this.config);
        }
        toSQL() {
          let { typings: e, ...t } = this.dialect.sqlToQuery(this.getSQL());
          return t;
        }
        _prepare(e = !0) {
          return this.session[e ? 'prepareOneTimeQuery' : 'prepareQuery'](
            this.dialect.sqlToQuery(this.getSQL()),
            this.config.returning,
            this.config.returning ? 'all' : 'run',
            !0,
            void 0,
            { type: 'insert', tables: lk(this.config.table) }
          );
        }
        prepare() {
          return this._prepare(!1);
        }
        async execute() {
          return this.config.returning ? this.all() : this.run();
        }
        $dynamic() {
          return this;
        }
      }
      class lz extends lP {
        constructor(e, t, n, r) {
          super(),
            (this.run = (e) => this._prepare().run(e)),
            (this.all = (e) => this._prepare().all(e)),
            (this.get = (e) => this._prepare().get(e)),
            (this.values = (e) => this._prepare().values(e)),
            (this.table = e),
            (this.session = t),
            (this.dialect = n),
            (this.config = { table: e, withList: r });
        }
        static {
          this[at] = 'SQLiteDelete';
        }
        where(e) {
          return (this.config.where = e), this;
        }
        orderBy(...e) {
          if ('function' == typeof e[0]) {
            let t = e[0](
                new Proxy(
                  this.config.table[am.Symbol.Columns],
                  new oR({ sqlAliasedBehavior: 'alias', sqlBehavior: 'sql' })
                )
              ),
              n = Array.isArray(t) ? t : [t];
            this.config.orderBy = n;
          } else this.config.orderBy = e;
          return this;
        }
        limit(e) {
          return (this.config.limit = e), this;
        }
        returning(e = this.table[lw.Symbol.Columns]) {
          return (this.config.returning = oH(e)), this;
        }
        getSQL() {
          return this.dialect.buildDeleteQuery(this.config);
        }
        toSQL() {
          let { typings: e, ...t } = this.dialect.sqlToQuery(this.getSQL());
          return t;
        }
        _prepare(e = !0) {
          return this.session[e ? 'prepareOneTimeQuery' : 'prepareQuery'](
            this.dialect.sqlToQuery(this.getSQL()),
            this.config.returning,
            this.config.returning ? 'all' : 'run',
            !0,
            void 0,
            { type: 'delete', tables: lk(this.config.table) }
          );
        }
        prepare() {
          return this._prepare(!1);
        }
        async execute(e) {
          return this._prepare().execute(e);
        }
        $dynamic() {
          return this;
        }
      }
      class lX extends az {
        static {
          h = Symbol.toStringTag;
        }
        constructor(e) {
          super(lX.buildEmbeddedCount(e.source, e.filters).queryChunks),
            (this[h] = 'SQLiteCountBuilderAsync'),
            (this.params = e),
            (this.session = e.session),
            (this.sql = lX.buildCount(e.source, e.filters));
        }
        static {
          this[at] = 'SQLiteCountBuilderAsync';
        }
        static buildEmbeddedCount(e, t) {
          return a1`(select count(*) from ${e}${a1.raw(' where ').if(t)}${t})`;
        }
        static buildCount(e, t) {
          return a1`select count(*) from ${e}${a1.raw(' where ').if(t)}${t}`;
        }
        then(e, t) {
          return Promise.resolve(this.session.count(this.sql)).then(e, t);
        }
        catch(e) {
          return this.then(void 0, e);
        }
        finally(e) {
          return this.then(
            (t) => (e?.(), t),
            (t) => {
              throw (e?.(), t);
            }
          );
        }
      }
      class lW {
        constructor(e, t, n, r, i, s, a, o) {
          (this.mode = e),
            (this.fullSchema = t),
            (this.schema = n),
            (this.tableNamesMap = r),
            (this.table = i),
            (this.tableConfig = s),
            (this.dialect = a),
            (this.session = o);
        }
        static {
          this[at] = 'SQLiteAsyncRelationalQueryBuilder';
        }
        findMany(e) {
          return 'sync' === this.mode
            ? new l0(
                this.fullSchema,
                this.schema,
                this.tableNamesMap,
                this.table,
                this.tableConfig,
                this.dialect,
                this.session,
                e || {},
                'many'
              )
            : new lZ(
                this.fullSchema,
                this.schema,
                this.tableNamesMap,
                this.table,
                this.tableConfig,
                this.dialect,
                this.session,
                e || {},
                'many'
              );
        }
        findFirst(e) {
          return 'sync' === this.mode
            ? new l0(
                this.fullSchema,
                this.schema,
                this.tableNamesMap,
                this.table,
                this.tableConfig,
                this.dialect,
                this.session,
                e ? { ...e, limit: 1 } : { limit: 1 },
                'first'
              )
            : new lZ(
                this.fullSchema,
                this.schema,
                this.tableNamesMap,
                this.table,
                this.tableConfig,
                this.dialect,
                this.session,
                e ? { ...e, limit: 1 } : { limit: 1 },
                'first'
              );
        }
      }
      class lZ extends lP {
        constructor(e, t, n, r, i, s, a, o, l) {
          super(),
            (this.fullSchema = e),
            (this.schema = t),
            (this.tableNamesMap = n),
            (this.table = r),
            (this.tableConfig = i),
            (this.dialect = s),
            (this.session = a),
            (this.config = o),
            (this.mode = l);
        }
        static {
          this[at] = 'SQLiteAsyncRelationalQuery';
        }
        getSQL() {
          return this.dialect.buildRelationalQuery({
            fullSchema: this.fullSchema,
            schema: this.schema,
            tableNamesMap: this.tableNamesMap,
            table: this.table,
            tableConfig: this.tableConfig,
            queryConfig: this.config,
            tableAlias: this.tableConfig.tsName,
          }).sql;
        }
        _prepare(e = !1) {
          let { query: t, builtQuery: n } = this._toSQL();
          return this.session[e ? 'prepareOneTimeQuery' : 'prepareQuery'](
            n,
            void 0,
            'first' === this.mode ? 'get' : 'all',
            !0,
            (e, n) => {
              let r = e.map((e) =>
                (function e(t, n, r, i, s = (e) => e) {
                  let a = {};
                  for (let [o, l] of i.entries())
                    if (l.isJson) {
                      let i = n.relations[l.tsKey],
                        u = r[o],
                        c = 'string' == typeof u ? JSON.parse(u) : u;
                      a[l.tsKey] = an(i, oN)
                        ? c && e(t, t[l.relationTableTsKey], c, l.selection, s)
                        : c.map((n) =>
                            e(t, t[l.relationTableTsKey], n, l.selection, s)
                          );
                    } else {
                      let e;
                      let t = s(r[o]),
                        n = l.field;
                      (e = an(n, ay)
                        ? n
                        : an(n, az)
                        ? n.decoder
                        : n.sql.decoder),
                        (a[l.tsKey] =
                          null === t ? null : e.mapFromDriverValue(t));
                    }
                  return a;
                })(this.schema, this.tableConfig, e, t.selection, n)
              );
              return 'first' === this.mode ? r[0] : r;
            }
          );
        }
        prepare() {
          return this._prepare(!1);
        }
        _toSQL() {
          let e = this.dialect.buildRelationalQuery({
              fullSchema: this.fullSchema,
              schema: this.schema,
              tableNamesMap: this.tableNamesMap,
              table: this.table,
              tableConfig: this.tableConfig,
              queryConfig: this.config,
              tableAlias: this.tableConfig.tsName,
            }),
            t = this.dialect.sqlToQuery(e.sql);
          return { query: e, builtQuery: t };
        }
        toSQL() {
          return this._toSQL().builtQuery;
        }
        executeRaw() {
          return 'first' === this.mode
            ? this._prepare(!1).get()
            : this._prepare(!1).all();
        }
        async execute() {
          return this.executeRaw();
        }
      }
      class l0 extends lZ {
        static {
          this[at] = 'SQLiteSyncRelationalQuery';
        }
        sync() {
          return this.executeRaw();
        }
      }
      class l1 extends lP {
        constructor(e, t, n, r, i) {
          super(),
            (this.execute = e),
            (this.getSQL = t),
            (this.dialect = r),
            (this.mapBatchResult = i),
            (this.config = { action: n });
        }
        static {
          this[at] = 'SQLiteRaw';
        }
        getQuery() {
          return {
            ...this.dialect.sqlToQuery(this.getSQL()),
            method: this.config.action,
          };
        }
        mapResult(e, t) {
          return t ? this.mapBatchResult(e) : e;
        }
        _prepare() {
          return this;
        }
        isResponseInArrayMode() {
          return !1;
        }
      }
      class l2 {
        constructor(e, t, n, r) {
          (this.$with = (e, t) => {
            let n = this;
            return {
              as: (r) => (
                'function' == typeof r && (r = r(new lY(n.dialect))),
                new Proxy(
                  new aQ(
                    r.getSQL(),
                    t ??
                      ('getSelectedFields' in r
                        ? r.getSelectedFields() ?? {}
                        : {}),
                    e,
                    !0
                  ),
                  new oR({
                    alias: e,
                    sqlAliasedBehavior: 'alias',
                    sqlBehavior: 'error',
                  })
                )
              ),
            };
          }),
            (this.resultKind = e),
            (this.dialect = t),
            (this.session = n),
            (this._ = r
              ? {
                  schema: r.schema,
                  fullSchema: r.fullSchema,
                  tableNamesMap: r.tableNamesMap,
                }
              : { schema: void 0, fullSchema: {}, tableNamesMap: {} }),
            (this.query = {});
          let i = this.query;
          if (this._.schema)
            for (let [s, a] of Object.entries(this._.schema))
              i[s] = new lW(
                e,
                r.fullSchema,
                this._.schema,
                this._.tableNamesMap,
                r.fullSchema[s],
                a,
                t,
                n
              );
          this.$cache = { invalidate: async (e) => {} };
        }
        static {
          this[at] = 'BaseSQLiteDatabase';
        }
        $count(e, t) {
          return new lX({ source: e, filters: t, session: this.session });
        }
        with(...e) {
          let t = this;
          return {
            select: function (n) {
              return new l$({
                fields: n ?? void 0,
                session: t.session,
                dialect: t.dialect,
                withList: e,
              });
            },
            selectDistinct: function (n) {
              return new l$({
                fields: n ?? void 0,
                session: t.session,
                dialect: t.dialect,
                withList: e,
                distinct: !0,
              });
            },
            update: function (n) {
              return new lG(n, t.session, t.dialect, e);
            },
            insert: function (n) {
              return new lK(n, t.session, t.dialect, e);
            },
            delete: function (n) {
              return new lz(n, t.session, t.dialect, e);
            },
          };
        }
        select(e) {
          return new l$({
            fields: e ?? void 0,
            session: this.session,
            dialect: this.dialect,
          });
        }
        selectDistinct(e) {
          return new l$({
            fields: e ?? void 0,
            session: this.session,
            dialect: this.dialect,
            distinct: !0,
          });
        }
        update(e) {
          return new lG(e, this.session, this.dialect);
        }
        insert(e) {
          return new lK(e, this.session, this.dialect);
        }
        delete(e) {
          return new lz(e, this.session, this.dialect);
        }
        run(e) {
          let t = 'string' == typeof e ? a1.raw(e) : e.getSQL();
          return 'async' === this.resultKind
            ? new l1(
                async () => this.session.run(t),
                () => t,
                'run',
                this.dialect,
                this.session.extractRawRunValueFromBatchResult.bind(
                  this.session
                )
              )
            : this.session.run(t);
        }
        all(e) {
          let t = 'string' == typeof e ? a1.raw(e) : e.getSQL();
          return 'async' === this.resultKind
            ? new l1(
                async () => this.session.all(t),
                () => t,
                'all',
                this.dialect,
                this.session.extractRawAllValueFromBatchResult.bind(
                  this.session
                )
              )
            : this.session.all(t);
        }
        get(e) {
          let t = 'string' == typeof e ? a1.raw(e) : e.getSQL();
          return 'async' === this.resultKind
            ? new l1(
                async () => this.session.get(t),
                () => t,
                'get',
                this.dialect,
                this.session.extractRawGetValueFromBatchResult.bind(
                  this.session
                )
              )
            : this.session.get(t);
        }
        values(e) {
          let t = 'string' == typeof e ? a1.raw(e) : e.getSQL();
          return 'async' === this.resultKind
            ? new l1(
                async () => this.session.values(t),
                () => t,
                'values',
                this.dialect,
                this.session.extractRawValuesValueFromBatchResult.bind(
                  this.session
                )
              )
            : this.session.values(t);
        }
        transaction(e, t) {
          return this.session.transaction(e, t);
        }
      }
      class l4 {
        static {
          this[at] = 'Cache';
        }
      }
      class l3 extends l4 {
        strategy() {
          return 'all';
        }
        static {
          this[at] = 'NoopCache';
        }
        async get(e) {}
        async put(e, t, n, r) {}
        async onMutate(e) {}
      }
      async function l9(e, t) {
        let n = `${e}-${JSON.stringify(t)}`,
          r = new TextEncoder().encode(n),
          i = await crypto.subtle.digest('SHA-256', r);
        return [...new Uint8Array(i)]
          .map((e) => e.toString(16).padStart(2, '0'))
          .join('');
      }
      class l7 extends lP {
        constructor(e) {
          super(), (this.resultCb = e);
        }
        static {
          this[at] = 'ExecuteResultSync';
        }
        async execute() {
          return this.resultCb();
        }
        sync() {
          return this.resultCb();
        }
      }
      class l6 {
        constructor(e, t, n, r, i, s) {
          (this.mode = e),
            (this.executeMethod = t),
            (this.query = n),
            (this.cache = r),
            (this.queryMetadata = i),
            (this.cacheConfig = s),
            r &&
              'all' === r.strategy() &&
              void 0 === s &&
              (this.cacheConfig = { enable: !0, autoInvalidate: !0 }),
            this.cacheConfig?.enable || (this.cacheConfig = void 0);
        }
        static {
          this[at] = 'PreparedQuery';
        }
        async queryWithCache(e, t, n) {
          if (
            void 0 === this.cache ||
            an(this.cache, l3) ||
            void 0 === this.queryMetadata
          )
            try {
              return await n();
            } catch (n) {
              throw new oF(e, t, n);
            }
          if (this.cacheConfig && !this.cacheConfig.enable)
            try {
              return await n();
            } catch (n) {
              throw new oF(e, t, n);
            }
          if (
            ('insert' === this.queryMetadata.type ||
              'update' === this.queryMetadata.type ||
              'delete' === this.queryMetadata.type) &&
            this.queryMetadata.tables.length > 0
          )
            try {
              let [e] = await Promise.all([
                n(),
                this.cache.onMutate({ tables: this.queryMetadata.tables }),
              ]);
              return e;
            } catch (n) {
              throw new oF(e, t, n);
            }
          if (!this.cacheConfig)
            try {
              return await n();
            } catch (n) {
              throw new oF(e, t, n);
            }
          if ('select' === this.queryMetadata.type) {
            let r = await this.cache.get(
              this.cacheConfig.tag ?? (await l9(e, t)),
              this.queryMetadata.tables,
              void 0 !== this.cacheConfig.tag,
              this.cacheConfig.autoInvalidate
            );
            if (void 0 === r) {
              let r;
              try {
                r = await n();
              } catch (n) {
                throw new oF(e, t, n);
              }
              return (
                await this.cache.put(
                  this.cacheConfig.tag ?? (await l9(e, t)),
                  r,
                  this.cacheConfig.autoInvalidate
                    ? this.queryMetadata.tables
                    : [],
                  void 0 !== this.cacheConfig.tag,
                  this.cacheConfig.config
                ),
                r
              );
            }
            return r;
          }
          try {
            return await n();
          } catch (n) {
            throw new oF(e, t, n);
          }
        }
        getQuery() {
          return this.query;
        }
        mapRunResult(e, t) {
          return e;
        }
        mapAllResult(e, t) {
          throw Error('Not implemented');
        }
        mapGetResult(e, t) {
          throw Error('Not implemented');
        }
        execute(e) {
          return 'async' === this.mode
            ? this[this.executeMethod](e)
            : new l7(() => this[this.executeMethod](e));
        }
        mapResult(e, t) {
          switch (this.executeMethod) {
            case 'run':
              return this.mapRunResult(e, t);
            case 'all':
              return this.mapAllResult(e, t);
            case 'get':
              return this.mapGetResult(e, t);
          }
        }
      }
      class l8 {
        constructor(e) {
          this.dialect = e;
        }
        static {
          this[at] = 'SQLiteSession';
        }
        prepareOneTimeQuery(e, t, n, r, i, s, a) {
          return this.prepareQuery(e, t, n, r, i, s, a);
        }
        run(e) {
          let t = this.dialect.sqlToQuery(e);
          try {
            return this.prepareOneTimeQuery(t, void 0, 'run', !1).run();
          } catch (e) {
            throw new oM({
              cause: e,
              message: `Failed to run the query '${t.sql}'`,
            });
          }
        }
        extractRawRunValueFromBatchResult(e) {
          return e;
        }
        all(e) {
          return this.prepareOneTimeQuery(
            this.dialect.sqlToQuery(e),
            void 0,
            'run',
            !1
          ).all();
        }
        extractRawAllValueFromBatchResult(e) {
          throw Error('Not implemented');
        }
        get(e) {
          return this.prepareOneTimeQuery(
            this.dialect.sqlToQuery(e),
            void 0,
            'run',
            !1
          ).get();
        }
        extractRawGetValueFromBatchResult(e) {
          throw Error('Not implemented');
        }
        values(e) {
          return this.prepareOneTimeQuery(
            this.dialect.sqlToQuery(e),
            void 0,
            'run',
            !1
          ).values();
        }
        async count(e) {
          return (await this.values(e))[0][0];
        }
        extractRawValuesValueFromBatchResult(e) {
          throw Error('Not implemented');
        }
      }
      class l5 extends l2 {
        constructor(e, t, n, r, i = 0) {
          super(e, t, n, r), (this.schema = r), (this.nestedIndex = i);
        }
        static {
          this[at] = 'SQLiteTransaction';
        }
        rollback() {
          throw new oj();
        }
      }
      class ue extends l8 {
        constructor(e, t, n, r = {}) {
          super(t),
            (this.client = e),
            (this.schema = n),
            (this.options = r),
            (this.logger = r.logger ?? new as()),
            (this.cache = r.cache ?? new l3());
        }
        static {
          this[at] = 'SQLiteD1Session';
        }
        prepareQuery(e, t, n, r, i, s, a) {
          return new ur(
            this.client.prepare(e.sql),
            e,
            this.logger,
            this.cache,
            s,
            a,
            t,
            n,
            r,
            i
          );
        }
        async batch(e) {
          let t = [],
            n = [];
          for (let r of e) {
            let e = r._prepare(),
              i = e.getQuery();
            if ((t.push(e), i.params.length > 0))
              n.push(e.stmt.bind(...i.params));
            else {
              let t = e.getQuery();
              n.push(this.client.prepare(t.sql).bind(...t.params));
            }
          }
          return (await this.client.batch(n)).map((e, n) =>
            t[n].mapResult(e, !0)
          );
        }
        extractRawAllValueFromBatchResult(e) {
          return e.results;
        }
        extractRawGetValueFromBatchResult(e) {
          return e.results[0];
        }
        extractRawValuesValueFromBatchResult(e) {
          return un(e.results);
        }
        async transaction(e, t) {
          let n = new ut('async', this.dialect, this, this.schema);
          await this.run(a1.raw(`begin${t?.behavior ? ' ' + t.behavior : ''}`));
          try {
            let t = await e(n);
            return await this.run(a1`commit`), t;
          } catch (e) {
            throw (await this.run(a1`rollback`), e);
          }
        }
      }
      class ut extends l5 {
        static {
          this[at] = 'D1Transaction';
        }
        async transaction(e) {
          let t = `sp${this.nestedIndex}`,
            n = new ut(
              'async',
              this.dialect,
              this.session,
              this.schema,
              this.nestedIndex + 1
            );
          await this.session.run(a1.raw(`savepoint ${t}`));
          try {
            let r = await e(n);
            return await this.session.run(a1.raw(`release savepoint ${t}`)), r;
          } catch (e) {
            throw (
              (await this.session.run(a1.raw(`rollback to savepoint ${t}`)), e)
            );
          }
        }
      }
      function un(e) {
        let t = [];
        for (let n of e) {
          let e = Object.keys(n).map((e) => n[e]);
          t.push(e);
        }
        return t;
      }
      class ur extends l6 {
        constructor(e, t, n, r, i, s, a, o, l, u) {
          super('async', o, t, r, i, s),
            (this.logger = n),
            (this._isResponseInArrayMode = l),
            (this.customResultMapper = u),
            (this.fields = a),
            (this.stmt = e);
        }
        static {
          this[at] = 'D1PreparedQuery';
        }
        async run(e) {
          let t = a4(this.query.params, e ?? {});
          return (
            this.logger.logQuery(this.query.sql, t),
            await this.queryWithCache(this.query.sql, t, async () =>
              this.stmt.bind(...t).run()
            )
          );
        }
        async all(e) {
          let {
            fields: t,
            query: n,
            logger: r,
            stmt: i,
            customResultMapper: s,
          } = this;
          if (!t && !s) {
            let t = a4(n.params, e ?? {});
            return (
              r.logQuery(n.sql, t),
              await this.queryWithCache(n.sql, t, async () =>
                i
                  .bind(...t)
                  .all()
                  .then(({ results: e }) => this.mapAllResult(e))
              )
            );
          }
          let a = await this.values(e);
          return this.mapAllResult(a);
        }
        mapAllResult(e, t) {
          return (t && (e = un(e.results)),
          this.fields || this.customResultMapper)
            ? this.customResultMapper
              ? this.customResultMapper(e)
              : e.map((e) => oK(this.fields, e, this.joinsNotNullableMap))
            : e;
        }
        async get(e) {
          let {
            fields: t,
            joinsNotNullableMap: n,
            query: r,
            logger: i,
            stmt: s,
            customResultMapper: a,
          } = this;
          if (!t && !a) {
            let t = a4(r.params, e ?? {});
            return (
              i.logQuery(r.sql, t),
              await this.queryWithCache(r.sql, t, async () =>
                s
                  .bind(...t)
                  .all()
                  .then(({ results: e }) => e[0])
              )
            );
          }
          let o = await this.values(e);
          return o[0] ? (a ? a(o) : oK(t, o[0], n)) : void 0;
        }
        mapGetResult(e, t) {
          return (t && (e = un(e.results)[0]),
          this.fields || this.customResultMapper)
            ? this.customResultMapper
              ? this.customResultMapper([e])
              : oK(this.fields, e, this.joinsNotNullableMap)
            : e;
        }
        async values(e) {
          let t = a4(this.query.params, e ?? {});
          return (
            this.logger.logQuery(this.query.sql, t),
            await this.queryWithCache(this.query.sql, t, async () =>
              this.stmt.bind(...t).raw()
            )
          );
        }
        isResponseInArrayMode() {
          return this._isResponseInArrayMode;
        }
      }
      class ui extends l2 {
        static {
          this[at] = 'D1Database';
        }
        async batch(e) {
          return this.session.batch(e);
        }
      }
      let us = lA('students', {
          id: lI('id').primaryKey(),
          authUserId: lI('authUserId'),
          classId: lI('classId').notNull(),
          studentCode: lI('studentCode').notNull(),
          azureEmail: lI('azureEmail').notNull(),
          registerNumber: lI('registerNumber').notNull(),
          personalEmail: lI('personalEmail'),
          profilePicture: lI('profilePicture'),
          firstName: lI('firstName'),
          lastName: lI('lastName'),
          phoneNumber: lI('phoneNumber'),
          activeStatus: lI('activeStatus').default('PENDING').notNull(),
          gender: lI('gender').default('OTHER'),
          profileProgress: lb('profileProgress'),
          isGraduated: lc('isGraduated').default(0),
          isAdvocator: lc('isAdvocator').default(0),
          isProfileVisible: lc('isProfileVisible').default(0),
          profileVisibledDate: lI('profileVisibledDate'),
          isProfileStaged: lc('isProfileStaged').default(0),
          isInternational: lc('isInternational').default(0),
          dateOfBirth: lI('dateOfBirth'),
          graduatedDate: lI('graduatedDate'),
          jobSeekingStatus: lI('jobSeekingStatus'),
          hasAgreedTerms: lc('hasAgreedTerms').default(0),
          createdAt: lI('createdAt')
            .default(a1`(CURRENT_TIMESTAMP)`)
            .notNull(),
          updatedAt: lI('updatedAt')
            .default(a1`(CURRENT_TIMESTAMP)`)
            .notNull(),
        }),
        ua = lA('classes', {
          id: lI('id').primaryKey(),
          classNumber: lI('classNumber').notNull(),
          className: lI('className').notNull(),
          classStartDate: lI('classStartDate')
            .default(a1`(CURRENT_TIMESTAMP)`)
            .notNull(),
          classEndDate: lI('classEndDate'),
          classStartTime: lI('classStartTime'),
          classEndTime: lI('classEndTime'),
          course: lI('course').default('CODING').notNull(),
          teachers: lI('teachers')
            .default(a1`(json_array())`)
            .notNull(),
          academicYearId: lI('academicYearId'),
          isFinished: lc('isFinished').default(0),
        }),
        uo = lA('teachers', {
          id: lI('id').primaryKey(),
          email: lI('email').notNull(),
          name: lI('name').notNull(),
          phoneNumber: lI('phoneNumber'),
          profilePicture: lI('profilePicture'),
          gender: lI('gender'),
          isActive: lc('isActive').default(1),
          createdAt: lI('createdAt')
            .default(a1`(CURRENT_TIMESTAMP)`)
            .notNull(),
          updatedAt: lI('updatedAt')
            .default(a1`(CURRENT_TIMESTAMP)`)
            .notNull(),
        }),
        ul = lA('clubs', {
          id: lI('id').primaryKey(),
          creatorId: lI('creatorId'),
          name: lI('name').notNull(),
          description: lI('description'),
          teacherId: lI('teacherId').references(() => uo.id),
          minMember: lc('minMember').notNull(),
          maxMember: lc('maxMember').notNull(),
          type: lI('type').notNull(),
          preferredTeachers: lI('preferredTeachers', { mode: 'json' }).$type(),
          status: lI('status').notNull(),
          createdAt: lI('createdAt')
            .default(a1`(CURRENT_TIMESTAMP)`)
            .notNull(),
          updatedAt: lI('updatedAt')
            .default(a1`(CURRENT_TIMESTAMP)`)
            .notNull(),
        }),
        uu = lA('class_teachers', {
          id: lI('id').primaryKey(),
          classId: lI('classId')
            .notNull()
            .references(() => ua.id, { onDelete: 'cascade' }),
          teacherId: lI('teacherId')
            .notNull()
            .references(() => uo.id, { onDelete: 'cascade' }),
          assignedAt: lI('assignedAt')
            .default(a1`(CURRENT_TIMESTAMP)`)
            .notNull(),
        }),
        uc = lA('club_members', {
          id: lI('id').primaryKey(),
          clubId: lI('clubId')
            .notNull()
            .references(() => ul.id, { onDelete: 'cascade' }),
          studentId: lI('studentId')
            .notNull()
            .references(() => us.id, { onDelete: 'cascade' }),
          joinedAt: lI('joinedAt')
            .default(a1`(CURRENT_TIMESTAMP)`)
            .notNull(),
        }),
        ud = lA('timetable', {
          id: lI('id').primaryKey(),
          date: lI('date').notNull(),
          room: lI('room').notNull(),
          clubStartTime: lI('clubStartTime').notNull(),
          duration: lc('duration'),
          clubId: lI('clubId')
            .notNull()
            .references(() => ul.id, { onDelete: 'cascade' }),
          createdAt: lI('createdAt')
            .default(a1`(CURRENT_TIMESTAMP)`)
            .notNull(),
          updatedAt: lI('updatedAt')
            .default(a1`(CURRENT_TIMESTAMP)`)
            .notNull(),
        }),
        up = (function (e, t = {}) {
          let n, r;
          let i = new lR({ casing: t.casing });
          if (
            (!0 === t.logger
              ? (n = new ai())
              : !1 !== t.logger && (n = t.logger),
            t.schema)
          ) {
            let e = (function (e, t) {
              1 === Object.keys(e).length &&
                'default' in e &&
                !an(e.default, am) &&
                (e = e.default);
              let n = {},
                r = {},
                i = {};
              for (let [s, a] of Object.entries(e))
                if (an(a, am)) {
                  let e = ag(a),
                    t = r[e];
                  for (let r of ((n[e] = s),
                  (i[s] = {
                    tsName: s,
                    dbName: a[am.Symbol.Name],
                    schema: a[am.Symbol.Schema],
                    columns: a[am.Symbol.Columns],
                    relations: t?.relations ?? {},
                    primaryKey: t?.primaryKey ?? [],
                  }),
                  Object.values(a[am.Symbol.Columns])))
                    r.primary && i[s].primaryKey.push(r);
                  let o = a[am.Symbol.ExtraConfigBuilder]?.(
                    a[am.Symbol.ExtraConfigColumns]
                  );
                  if (o)
                    for (let e of Object.values(o))
                      an(e, aE) && i[s].primaryKey.push(...e.columns);
                } else if (an(a, oE)) {
                  let e;
                  let s = ag(a.table),
                    o = n[s];
                  for (let [n, l] of Object.entries(a.config(t(a.table))))
                    if (o) {
                      let t = i[o];
                      (t.relations[n] = l), e && t.primaryKey.push(...e);
                    } else
                      s in r || (r[s] = { relations: {}, primaryKey: e }),
                        (r[s].relations[n] = l);
                }
              return { tables: i, tableNamesMap: n };
            })(t.schema, oS);
            r = {
              fullSchema: t.schema,
              schema: e.tables,
              tableNamesMap: e.tableNamesMap,
            };
          }
          let s = new ue(e, i, r, { logger: n, cache: t.cache }),
            a = new ui('async', i, s, r);
          return (
            (a.$client = e),
            (a.$cache = t.cache),
            a.$cache && (a.$cache.invalidate = t.cache?.onMutate),
            a
          );
        })(process.env.DB, { schema: R }),
        uh = (e) => e || null,
        uf = (e) => (e ? 'approved' : 'pending'),
        um = (e, t) => e || (t ? 'mentor' : 'self'),
        ug = (e, t) => (e ? null : t),
        uy = (e) => e ?? 0,
        uv = (e) => e ?? 0,
        uT = (e, t) => {
          let n = [
              'Sunday',
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
            ].findIndex((e) => e.toLowerCase() === t.toLowerCase()),
            r = new Date(e),
            i = new Date(r);
          return (
            i.setDate(r.getDate() + ((n + 7 - r.getDay()) % 7)),
            i.toISOString().split('T')[0]
          );
        },
        ub = (e, t) => {
          let {
              startDate: n,
              classroom: r,
              startTime: i,
              duration: s,
              frequency: a,
              selectedDays: o,
            } = e,
            l = { clubId: t, room: r, clubStartTime: i, duration: s };
          return 'ONCE' !== a && o?.length
            ? o.map((e) => ({ id: crypto.randomUUID(), date: uT(n, e), ...l }))
            : [{ id: crypto.randomUUID(), date: n, ...l }];
        },
        uE = (e) => {
          let t = e instanceof Error ? e.message : 'Unknown error';
          throw new tf(`Алдаа гарлаа: ${t}`);
        },
        uN = (function ({
          typeDefs: e,
          resolvers: t = {},
          resolverValidationOptions: n = {},
          inheritResolversFromInterfaces: r = !1,
          updateResolversInPlace: i = !1,
          schemaExtensions: s,
          defaultFieldResolver: a,
          ...o
        }) {
          let l;
          if ('object' != typeof n)
            throw Error('Expected `resolverValidationOptions` to be an object');
          if (!e) throw Error('Must provide typeDefs');
          if (
            ((l = (function ({
              schema: e,
              resolvers: t,
              defaultFieldResolver: n,
              resolverValidationOptions: r = {},
              inheritResolversFromInterfaces: i = !1,
              updateResolversInPlace: s = !1,
            }) {
              var a;
              let {
                  requireResolversToMatchSchema: o = 'error',
                  requireResolversForResolveType: l,
                } = r,
                u = i
                  ? (function (e, t) {
                      let n = {},
                        r = e.getTypeMap();
                      for (let e in r) {
                        let i = r[e];
                        if ('getInterfaces' in i) {
                          for (let r of ((n[e] = {}), i.getInterfaces()))
                            if (t[r.name])
                              for (let i in t[r.name])
                                ('__isTypeOf' !== i && i.startsWith('__')) ||
                                  (n[e][i] = t[r.name][i]);
                          let r = t[e];
                          n[e] = { ...n[e], ...r };
                        } else {
                          let r = t[e];
                          null != r && (n[e] = r);
                        }
                      }
                      return n;
                    })(e, t)
                  : t;
              for (let t in u) {
                let n = u[t];
                if ('object' != typeof n)
                  throw Error(
                    `"${t}" defined in resolvers, but has invalid value "${n}". The resolver's value must be of type object.`
                  );
                let r = e.getType(t);
                if (null == r) {
                  let e = `"${t}" defined in resolvers, but not in schema`;
                  if (o && 'error' !== o) {
                    'warn' === o && console.warn(e);
                    continue;
                  }
                  throw Error(e);
                }
                if (n2(r))
                  for (let e in n)
                    e.startsWith('__')
                      ? (r[e.substring(2)] = n[e])
                      : (r[e] = n[e]);
                else if (nh(r)) {
                  let e = r.getValues();
                  for (let t in n)
                    if (
                      !t.startsWith('__') &&
                      !e.some((e) => e.name === t) &&
                      o &&
                      'ignore' !== o
                    ) {
                      let e = `${r.name}.${t} was defined in resolvers, but not present within ${r.name}`;
                      if ('error' === o) throw Error(e);
                      console.warn(e);
                    }
                } else if (np(r)) {
                  for (let e in n)
                    if (!e.startsWith('__') && o && 'ignore' !== o) {
                      let t = `${r.name}.${e} was defined in resolvers, but ${r.name} is not an object or interface type`;
                      if ('error' === o) throw Error(t);
                      console.warn(t);
                    }
                } else if (nc(r) || nd(r)) {
                  for (let e in n)
                    if (!e.startsWith('__')) {
                      if (null == r.getFields()[e]) {
                        if (o && 'ignore' !== o) {
                          let n = `${t}.${e} defined in resolvers, but not in schema`;
                          if ('error' === o) throw Error(n);
                          console.error(n);
                        }
                      } else {
                        let r = n[e];
                        if ('function' != typeof r && 'object' != typeof r)
                          throw Error(
                            `Resolver ${t}.${e} must be object or function`
                          );
                      }
                    }
                }
              }
              return (
                (e = s
                  ? (function (e, t, n) {
                      let r = e.getTypeMap();
                      for (let n in t) {
                        let i = e.getType(n),
                          s = t[n];
                        if (nu(i))
                          for (let e in s)
                            e.startsWith('__')
                              ? (i[e.substring(2)] = s[e])
                              : 'astNode' === e && null != i.astNode
                              ? (i.astNode = {
                                  ...i.astNode,
                                  description:
                                    s?.astNode?.description ??
                                    i.astNode.description,
                                  directives: (
                                    i.astNode.directives ?? []
                                  ).concat(s?.astNode?.directives ?? []),
                                })
                              : 'extensionASTNodes' === e &&
                                null != i.extensionASTNodes
                              ? (i.extensionASTNodes =
                                  i.extensionASTNodes.concat(
                                    s?.extensionASTNodes ?? []
                                  ))
                              : 'extensions' === e &&
                                null != i.extensions &&
                                null != s.extensions
                              ? (i.extensions = Object.assign(
                                  Object.create(null),
                                  i.extensions,
                                  s.extensions
                                ))
                              : (i[e] = s[e]);
                        else if (nh(i)) {
                          let e = i.toConfig(),
                            t = e.values;
                          for (let n in s)
                            n.startsWith('__')
                              ? (e[n.substring(2)] = s[n])
                              : 'astNode' === n && null != e.astNode
                              ? (e.astNode = {
                                  ...e.astNode,
                                  description:
                                    s?.astNode?.description ??
                                    e.astNode.description,
                                  directives: (
                                    e.astNode.directives ?? []
                                  ).concat(s?.astNode?.directives ?? []),
                                })
                              : 'extensionASTNodes' === n &&
                                null != e.extensionASTNodes
                              ? (e.extensionASTNodes =
                                  e.extensionASTNodes.concat(
                                    s?.extensionASTNodes ?? []
                                  ))
                              : 'extensions' === n &&
                                null != i.extensions &&
                                null != s.extensions
                              ? (i.extensions = Object.assign(
                                  Object.create(null),
                                  i.extensions,
                                  s.extensions
                                ))
                              : t[n] && (t[n].value = s[n]);
                          r[n] = new nV(e);
                        } else if (np(i))
                          for (let e in s)
                            e.startsWith('__') && (i[e.substring(2)] = s[e]);
                        else if (nc(i) || nd(i))
                          for (let e in s) {
                            if (e.startsWith('__')) {
                              i[e.substring(2)] = s[e];
                              continue;
                            }
                            let t = i.getFields()[e];
                            if (null != t) {
                              let n = s[e];
                              'function' == typeof n
                                ? (t.resolve = n.bind(s))
                                : sH(t, n);
                            }
                          }
                      }
                      return (
                        sk(e, sM),
                        (function (e, t) {
                          let n = Object.create(null);
                          for (let t in e) {
                            let r = e[t];
                            if (null == r || t.startsWith('__')) continue;
                            let i = r.name;
                            if (!i.startsWith('__')) {
                              if (null != n[i]) {
                                console.warn(
                                  `Duplicate schema type name ${i} found; keeping the existing one found in the schema`
                                );
                                continue;
                              }
                              n[i] = r;
                            }
                          }
                          for (let t in n) {
                            let r = n[t];
                            e[t] = r;
                          }
                          for (let e of t)
                            e.args = e.args.filter(
                              (e) => ((e.type = s(e.type)), null !== e.type)
                            );
                          for (let t in e) {
                            let a = e[t];
                            !t.startsWith('__') &&
                              t in n &&
                              null != a &&
                              (function (e) {
                                if (nc(e)) {
                                  r(e), i(e);
                                  return;
                                }
                                if (nd(e)) {
                                  r(e), 'getInterfaces' in e && i(e);
                                  return;
                                }
                                if (np(e)) {
                                  (function (e) {
                                    let t = e.getTypes();
                                    t.push(
                                      ...t
                                        .splice(0)
                                        .map((e) => s(e))
                                        .filter(Boolean)
                                    );
                                  })(e);
                                  return;
                                }
                                if (nf(e)) {
                                  (function (e) {
                                    let t = e.getFields();
                                    for (let [e, n] of Object.entries(t))
                                      (n.type = s(n.type)),
                                        null === n.type && delete t[e];
                                  })(e);
                                  return;
                                }
                                if (!nT(e))
                                  throw Error(`Unexpected schema type: ${e}`);
                              })(a);
                          }
                          for (let t in e)
                            t.startsWith('__') || t in n || delete e[t];
                          function r(e) {
                            let t = e.getFields();
                            for (let [e, n] of Object.entries(t))
                              n.args
                                .map(
                                  (e) => (
                                    (e.type = s(e.type)),
                                    null === e.type ? null : e
                                  )
                                )
                                .filter(Boolean),
                                (n.type = s(n.type)),
                                null === n.type && delete t[e];
                          }
                          function i(e) {
                            if ('getInterfaces' in e) {
                              let t = e.getInterfaces();
                              t.push(
                                ...t
                                  .splice(0)
                                  .map((e) => s(e))
                                  .filter(Boolean)
                              );
                            }
                          }
                          function s(t) {
                            if (nm(t)) {
                              let e = s(t.ofType);
                              return null != e ? new nN(e) : null;
                            }
                            if (ng(t)) {
                              let e = s(t.ofType);
                              return null != e ? new n_(e) : null;
                            }
                            if (nO(t)) {
                              let n = e[t.name];
                              if (n && t !== n) return n;
                            }
                            return t;
                          }
                        })(e.getTypeMap(), e.getDirectives()),
                        sk(e, sF),
                        null != n &&
                          sj(e, (e) => {
                            e.resolve || (e.resolve = n);
                          }),
                        e
                      );
                    })(e, u, n)
                  : ((a = sB((a = e), {
                      [D.SCALAR_TYPE]: (e) => {
                        let t = e.toConfig(),
                          n = u[e.name];
                        if (!n2(e) && null != n) {
                          for (let r in n)
                            r.startsWith('__')
                              ? (t[r.substring(2)] = n[r])
                              : 'astNode' === r && null != t.astNode
                              ? (t.astNode = {
                                  ...t.astNode,
                                  description:
                                    n?.astNode?.description ??
                                    t.astNode.description,
                                  directives: (
                                    t.astNode.directives ?? []
                                  ).concat(n?.astNode?.directives ?? []),
                                })
                              : 'extensionASTNodes' === r &&
                                null != t.extensionASTNodes
                              ? (t.extensionASTNodes =
                                  t.extensionASTNodes.concat(
                                    n?.extensionASTNodes ?? []
                                  ))
                              : 'extensions' === r &&
                                null != t.extensions &&
                                null != n.extensions
                              ? (t.extensions = Object.assign(
                                  Object.create(null),
                                  e.extensions,
                                  n.extensions
                                ))
                              : (t[r] = n[r]);
                          return new nC(t);
                        }
                      },
                      [D.ENUM_TYPE]: (e) => {
                        let t = u[e.name],
                          n = e.toConfig(),
                          r = n.values;
                        if (null != t) {
                          for (let i in t)
                            i.startsWith('__')
                              ? (n[i.substring(2)] = t[i])
                              : 'astNode' === i && null != n.astNode
                              ? (n.astNode = {
                                  ...n.astNode,
                                  description:
                                    t?.astNode?.description ??
                                    n.astNode.description,
                                  directives: (
                                    n.astNode.directives ?? []
                                  ).concat(t?.astNode?.directives ?? []),
                                })
                              : 'extensionASTNodes' === i &&
                                null != n.extensionASTNodes
                              ? (n.extensionASTNodes =
                                  n.extensionASTNodes.concat(
                                    t?.extensionASTNodes ?? []
                                  ))
                              : 'extensions' === i &&
                                null != n.extensions &&
                                null != t.extensions
                              ? (n.extensions = Object.assign(
                                  Object.create(null),
                                  e.extensions,
                                  t.extensions
                                ))
                              : r[i] && (r[i].value = t[i]);
                          return new nV(n);
                        }
                      },
                      [D.UNION_TYPE]: (e) => {
                        let t = u[e.name];
                        if (null != t) {
                          let n = e.toConfig();
                          return (
                            t.__resolveType &&
                              (n.resolveType = t.__resolveType),
                            new nU(n)
                          );
                        }
                      },
                      [D.OBJECT_TYPE]: (e) => {
                        let t = u[e.name];
                        if (null != t) {
                          let n = e.toConfig();
                          return (
                            t.__isTypeOf && (n.isTypeOf = t.__isTypeOf),
                            new nD(n)
                          );
                        }
                      },
                      [D.INTERFACE_TYPE]: (e) => {
                        let t = u[e.name];
                        if (null != t) {
                          let n = e.toConfig();
                          return (
                            t.__resolveType &&
                              (n.resolveType = t.__resolveType),
                            new nj(n)
                          );
                        }
                      },
                      [D.COMPOSITE_FIELD]: (e, t, n) => {
                        let r = u[n];
                        if (null != r) {
                          let n = r[t];
                          if (null != n) {
                            let t = { ...e };
                            return (
                              'function' == typeof n
                                ? (t.resolve = n.bind(r))
                                : sH(t, n),
                              t
                            );
                          }
                        }
                      },
                    })),
                    null != n &&
                      (a = sB(a, {
                        [D.OBJECT_FIELD]: (e) => ({
                          ...e,
                          resolve: null != e.resolve ? e.resolve : n,
                        }),
                      })),
                    a)),
                l &&
                  'ignore' !== l &&
                  sB(e, {
                    [D.ABSTRACT_TYPE]: (e) => {
                      if (!e.resolveType) {
                        let t = `Type "${e.name}" is missing a "__resolveType" resolver. Pass 'ignore' into "resolverValidationOptions.requireResolversForResolveType" to disable this error.`;
                        if ('error' === l) throw Error(t);
                        'warn' === l && console.warn(t);
                      }
                    },
                  }),
                e
              );
            })({
              schema: (l = tF(e, ry)
                ? e
                : o?.commentDescriptions
                ? iL(
                    tU(sD(e, { ...o, commentDescriptions: !0 }), {
                      noLocation: null == o ? void 0 : o.noLocation,
                      allowLegacyFragmentVariables:
                        null == o ? void 0 : o.allowLegacyFragmentVariables,
                    }),
                    {
                      assumeValidSDL: null == o ? void 0 : o.assumeValidSDL,
                      assumeValid: null == o ? void 0 : o.assumeValid,
                    }
                  )
                : iL(sD(e, o), o)),
              resolvers: (function e(t, n) {
                if (!t || (Array.isArray(t) && 0 === t.length)) return {};
                if (!Array.isArray(t)) return t;
                if (1 === t.length) return t[0] || {};
                let r = [];
                for (let n of t)
                  Array.isArray(n) && (n = e(n)),
                    'object' == typeof n && n && r.push(n);
                let i = sR(r, !0);
                if (n?.exclusions)
                  for (let e of n.exclusions) {
                    let [t, n] = e.split('.');
                    !(
                      ['__proto__', 'constructor', 'prototype'].includes(t) ||
                      ['__proto__', 'constructor', 'prototype'].includes(n)
                    ) &&
                      (n && '*' !== n ? i[t] && delete i[t][n] : delete i[t]);
                  }
                return i;
              })(t),
              resolverValidationOptions: n,
              inheritResolversFromInterfaces: r,
              updateResolversInPlace: i,
              defaultFieldResolver: a,
            })),
            Object.keys(n).length > 0 &&
              (function (e, t = {}) {
                let {
                  requireResolversForArgs: n,
                  requireResolversForNonScalar: r,
                  requireResolversForAllFields: i,
                } = t;
                if (i && (n || r))
                  throw TypeError(
                    'requireResolversForAllFields takes precedence over the more specific assertions. Please configure either requireResolversForAllFields or requireResolversForArgs / requireResolversForNonScalar, but not a combination of them.'
                  );
                sj(e, (e, t, s) => {
                  i && sz('requireResolversForAllFields', i, e, t, s),
                    n &&
                      e.args.length > 0 &&
                      sz('requireResolversForArgs', n, e, t, s),
                    'ignore' === r ||
                      nu(nw(e.type)) ||
                      sz('requireResolversForNonScalar', r, e, t, s);
                });
              })(l, n),
            s)
          )
            for (let e of i6(s))
              !(function (e, t) {
                for (let [n, r] of (sP(e, t.schemaExtensions),
                Object.entries(t.types || {}))) {
                  let t = e.getType(n);
                  if (t) {
                    if (
                      (sP(t, r.extensions),
                      'object' === r.type || 'interface' === r.type)
                    )
                      for (let [e, n] of Object.entries(r.fields)) {
                        let r = t.getFields()[e];
                        if (r)
                          for (let [e, t] of (sP(r, n.extensions),
                          Object.entries(n.arguments)))
                            sP(
                              r.args.find((t) => t.name === e),
                              t
                            );
                      }
                    else if ('input' === r.type)
                      for (let [e, n] of Object.entries(r.fields))
                        sP(t.getFields()[e], n.extensions);
                    else if ('enum' === r.type)
                      for (let [e, n] of Object.entries(r.values))
                        sP(t.getValue(e), n);
                  }
                }
              })(l, e);
          return l;
        })({
          typeDefs: ae,
          resolvers: {
            Query: {
              getAllClubs: async () => {
                try {
                  return await up.select().from(ul);
                } catch (e) {
                  throw (
                    (console.error('Error in getAllClubs:', e),
                    Error('Клубүүдийн мэдээллийг авахад алдаа гарлаа.'))
                  );
                }
              },
              getAllApprovedClubs: async () => {
                try {
                  return await up
                    .select()
                    .from(ul)
                    .where(a6(ul.status, 'approved'));
                } catch (e) {
                  throw (
                    (console.error('Error in getAllApprovedClubs:', e),
                    Error(
                      'Батлагдсан клубүүдийн мэдээллийг авахад алдаа гарлаа.'
                    ))
                  );
                }
              },
              getAllPendingClubs: async () => {
                try {
                  return await up
                    .select()
                    .from(ul)
                    .where(a6(ul.status, 'pending'));
                } catch (e) {
                  throw (
                    (console.error('Error in getAllPendingClubs:', e),
                    Error(
                      'Хүлээгдэж буй клубүүдийн мэдээллийг авахад алдаа гарлаа.'
                    ))
                  );
                }
              },
            },
            Mutation: {
              createClubWithSchedules: async (e, t) => {
                console.log('MUTATION START:', t);
                try {
                  let e = crypto.randomUUID(),
                    [n] = await up
                      .insert(ul)
                      .values({
                        id: e,
                        name: t.input.name,
                        description: t.input.description,
                        creatorId: t.input.creatorId,
                        teacherId: uh(t.input.teacherId),
                        status: uf(t.input.teacherId),
                        type: um(t.input.type, t.input.teacherId),
                        preferredTeachers: ug(
                          t.input.teacherId,
                          t.input.preferredTeachers
                        ),
                        minMember: uy(t.input.minMember),
                        maxMember: uv(t.input.maxMember),
                      })
                      .returning();
                  if (!n) throw Error('Клуб үүсгэж чадсангүй.');
                  let r = ub(t, e);
                  return (
                    await up.insert(ud).values(r),
                    console.log('SUCCESS: Club and schedules created.'),
                    n
                  );
                } catch (e) {
                  uE(e);
                }
              },
              deleteClub: async (e, { id: t }) => {
                let n = await up
                  .delete(ul)
                  .where(a6(ul.id, t))
                  .returning({ deletedId: ul.id })
                  .catch(() => {
                    throw new tf('Клуб устгахад алдаа гарлаа.');
                  });
                if (!n?.length) throw new tf('Устгах клуб олдсонгүй.');
                return n[0].deletedId;
              },
            },
            Club: {
              timetables: async (e) =>
                await up.select().from(ud).where(a6(ud.clubId, e.id)),
            },
          },
        }),
        u_ = async (e) => {
          let t;
          return (
            (t =
              'POST' !== e.method
                ? eu.redirect(
                    `https://studio.apollographql.com/sandbox/explorer?endpoint=${e.url}`,
                    302
                  )
                : await uS(e)),
            sZ(e, t)
          );
        },
        uS = async (e) => {
          var t, n, r;
          try {
            let { query: r, variables: i, operationName: s } = await e.json();
            return (
              (n = await ((t = {
                schema: uN,
                source: r,
                variableValues: i,
                operationName: s,
              }),
              new Promise((e) =>
                e(
                  (function (e) {
                    let t;
                    arguments.length < 2 ||
                      to(
                        !1,
                        'graphql@16 dropped long-deprecated support for positional arguments, please pass an object instead.'
                      );
                    let {
                        schema: n,
                        source: r,
                        rootValue: i,
                        contextValue: s,
                        variableValues: a,
                        operationName: o,
                        fieldResolver: l,
                        typeResolver: u,
                      } = e,
                      c = rT(n);
                    if (c.length > 0) return { errors: c };
                    try {
                      t = tU(r);
                    } catch (e) {
                      return { errors: [e] };
                    }
                    let d = (function (e, t, n = iu, r, i = new rC(e)) {
                      var s;
                      let a =
                        null !== (s = null == r ? void 0 : r.maxErrors) &&
                        void 0 !== s
                          ? s
                          : 100;
                      t || to(!1, 'Must provide document.'), rb(e);
                      let o = Object.freeze({}),
                        l = [],
                        u = new ih(e, t, i, (e) => {
                          if (l.length >= a)
                            throw (
                              (l.push(
                                new tf(
                                  'Too many validation errors, error limit reached. Validation aborted.'
                                )
                              ),
                              o)
                            );
                          l.push(e);
                        }),
                        c = t6(n.map((e) => e(u)));
                      try {
                        t7(t, rR(i, c));
                      } catch (e) {
                        if (e !== o) throw e;
                      }
                      return l;
                    })(n, t);
                    return d.length > 0
                      ? { errors: d }
                      : (function (e) {
                          arguments.length < 2 ||
                            to(
                              !1,
                              'graphql@16 dropped long-deprecated support for positional arguments, please pass an object instead.'
                            );
                          let {
                            schema: t,
                            document: n,
                            variableValues: r,
                            rootValue: i,
                          } = e;
                          n || to(!1, 'Must provide document.'),
                            rb(t),
                            null == r ||
                              tl(r) ||
                              to(
                                !1,
                                'Variables must be provided as an Object where each property is a variable value. Perhaps look to see if an unparsed JSON string was provided.'
                              );
                          let s = (function (e) {
                            var t, n, r;
                            let i;
                            let {
                                schema: s,
                                document: a,
                                rootValue: o,
                                contextValue: l,
                                variableValues: u,
                                operationName: c,
                                fieldResolver: d,
                                typeResolver: p,
                                subscribeFieldResolver: h,
                                options: f,
                              } = e,
                              m = Object.create(null);
                            for (let e of a.definitions)
                              switch (e.kind) {
                                case w.OPERATION_DEFINITION:
                                  if (null == c) {
                                    if (void 0 !== i)
                                      return [
                                        new tf(
                                          'Must provide operation name if query contains multiple operations.'
                                        ),
                                      ];
                                    i = e;
                                  } else
                                    (null === (t = e.name) || void 0 === t
                                      ? void 0
                                      : t.value) === c && (i = e);
                                  break;
                                case w.FRAGMENT_DEFINITION:
                                  m[e.name.value] = e;
                              }
                            if (!i)
                              return null != c
                                ? [new tf(`Unknown operation named "${c}".`)]
                                : [new tf('Must provide an operation.')];
                            let g = (function (e, t, n, r) {
                              let i = [],
                                s = null == r ? void 0 : r.maxErrors;
                              try {
                                let r = (function (e, t, n, r) {
                                  let i = {};
                                  for (let s of t) {
                                    let t = s.variable.name.value,
                                      a = rx(e, s.type);
                                    if (!ny(a)) {
                                      let e = t5(s.type);
                                      r(
                                        new tf(
                                          `Variable "$${t}" expected value of type "${e}" which cannot be used as an input type.`,
                                          { nodes: s.type }
                                        )
                                      );
                                      continue;
                                    }
                                    if (!r8(n, t)) {
                                      if (s.defaultValue)
                                        i[t] = r3(s.defaultValue, a);
                                      else if (ng(a)) {
                                        let e = tM(a);
                                        r(
                                          new tf(
                                            `Variable "$${t}" of required type "${e}" was not provided.`,
                                            { nodes: s }
                                          )
                                        );
                                      }
                                      continue;
                                    }
                                    let o = n[t];
                                    if (null === o && ng(a)) {
                                      let e = tM(a);
                                      r(
                                        new tf(
                                          `Variable "$${t}" of non-null type "${e}" must not be null.`,
                                          { nodes: s }
                                        )
                                      );
                                      continue;
                                    }
                                    i[t] = (function (
                                      e,
                                      t,
                                      n = function (e, t, n) {
                                        let r = 'Invalid value ' + tM(t);
                                        throw (
                                          (e.length > 0 &&
                                            (r += ` at "value${r1(e)}"`),
                                          (n.message = r + ': ' + n.message),
                                          n)
                                        );
                                      }
                                    ) {
                                      return (function e(t, n, r, i) {
                                        if (ng(n))
                                          return null != t
                                            ? e(t, n.ofType, r, i)
                                            : void r(
                                                r4(i),
                                                t,
                                                new tf(
                                                  `Expected non-nullable type "${tM(
                                                    n
                                                  )}" not to be null.`
                                                )
                                              );
                                        if (null == t) return null;
                                        if (nm(n)) {
                                          let s = n.ofType;
                                          return rn(t)
                                            ? Array.from(t, (t, n) =>
                                                e(t, s, r, r2(i, n, void 0))
                                              )
                                            : [e(t, s, r, i)];
                                        }
                                        if (nf(n)) {
                                          if (!tl(t) || Array.isArray(t)) {
                                            r(
                                              r4(i),
                                              t,
                                              new tf(
                                                `Expected type "${n.name}" to be an object.`
                                              )
                                            );
                                            return;
                                          }
                                          let s = {},
                                            a = n.getFields();
                                          for (let o of Object.values(a)) {
                                            let a = t[o.name];
                                            if (void 0 === a) {
                                              if (void 0 !== o.defaultValue)
                                                s[o.name] = o.defaultValue;
                                              else if (ng(o.type)) {
                                                let e = tM(o.type);
                                                r(
                                                  r4(i),
                                                  t,
                                                  new tf(
                                                    `Field "${o.name}" of required type "${e}" was not provided.`
                                                  )
                                                );
                                              }
                                              continue;
                                            }
                                            s[o.name] = e(
                                              a,
                                              o.type,
                                              r,
                                              r2(i, o.name, n.name)
                                            );
                                          }
                                          for (let e of Object.keys(t))
                                            if (!a[e]) {
                                              let s = tW(
                                                e,
                                                Object.keys(n.getFields())
                                              );
                                              r(
                                                r4(i),
                                                t,
                                                new tf(
                                                  `Field "${e}" is not defined by type "${n.name}".` +
                                                    tQ(s)
                                                )
                                              );
                                            }
                                          if (n.isOneOf) {
                                            let e = Object.keys(s);
                                            1 !== e.length &&
                                              r(
                                                r4(i),
                                                t,
                                                new tf(
                                                  `Exactly one key must be specified for OneOf type "${n.name}".`
                                                )
                                              );
                                            let a = e[0],
                                              o = s[a];
                                            null === o &&
                                              r(
                                                r4(i).concat(a),
                                                o,
                                                new tf(
                                                  `Field "${a}" must be non-null.`
                                                )
                                              );
                                          }
                                          return s;
                                        }
                                        if (nT(n)) {
                                          let e;
                                          try {
                                            e = n.parseValue(t);
                                          } catch (e) {
                                            e instanceof tf
                                              ? r(r4(i), t, e)
                                              : r(
                                                  r4(i),
                                                  t,
                                                  new tf(
                                                    `Expected type "${n.name}". ` +
                                                      e.message,
                                                    { originalError: e }
                                                  )
                                                );
                                            return;
                                          }
                                          return (
                                            void 0 === e &&
                                              r(
                                                r4(i),
                                                t,
                                                new tf(
                                                  `Expected type "${n.name}".`
                                                )
                                              ),
                                            e
                                          );
                                        }
                                        tu(
                                          !1,
                                          'Unexpected input type: ' + tM(n)
                                        );
                                      })(e, t, n, void 0);
                                    })(o, a, (e, n, i) => {
                                      let a =
                                        `Variable "$${t}" got invalid value ` +
                                        tM(n);
                                      e.length > 0 &&
                                        (a += ` at "${t}${r1(e)}"`),
                                        r(
                                          new tf(a + '; ' + i.message, {
                                            nodes: s,
                                            originalError: i,
                                          })
                                        );
                                    });
                                  }
                                  return i;
                                })(e, t, n, (e) => {
                                  if (null != s && i.length >= s)
                                    throw new tf(
                                      'Too many errors processing variables, error limit reached. Execution aborted.'
                                    );
                                  i.push(e);
                                });
                                if (0 === i.length) return { coerced: r };
                              } catch (e) {
                                i.push(e);
                              }
                              return { errors: i };
                            })(
                              s,
                              null !== (n = i.variableDefinitions) &&
                                void 0 !== n
                                ? n
                                : [],
                              null != u ? u : {},
                              {
                                maxErrors:
                                  null !==
                                    (r =
                                      null == f
                                        ? void 0
                                        : f.maxCoercionErrors) && void 0 !== r
                                    ? r
                                    : 50,
                              }
                            );
                            return g.errors
                              ? g.errors
                              : {
                                  schema: s,
                                  fragments: m,
                                  rootValue: o,
                                  contextValue: l,
                                  operation: i,
                                  variableValues: g.coerced,
                                  fieldResolver: null != d ? d : ix,
                                  typeResolver: null != p ? p : iA,
                                  subscribeFieldResolver: null != h ? h : ix,
                                  errors: [],
                                };
                          })(e);
                          if (!('schema' in s)) return { errors: s };
                          try {
                            let { operation: e } = s,
                              t = (function (e, t, n) {
                                let r = e.schema.getRootType(t.operation);
                                if (null == r)
                                  throw new tf(
                                    `Schema is not configured to execute ${t.operation} operation.`,
                                    { nodes: t }
                                  );
                                let i = r5(
                                    e.schema,
                                    e.fragments,
                                    e.variableValues,
                                    r,
                                    t.selectionSet
                                  ),
                                  s = void 0;
                                switch (t.operation) {
                                  case I.QUERY:
                                    return iE(e, r, n, s, i);
                                  case I.MUTATION:
                                    return (function (e, t, n) {
                                      let r = n;
                                      for (let n of e)
                                        r = im(r)
                                          ? r.then((e) => t(e, n))
                                          : t(r, n);
                                      return r;
                                    })(
                                      i.entries(),
                                      (t, [i, a]) => {
                                        let o = r2(s, i, r.name),
                                          l = iN(e, r, n, a, o);
                                        return void 0 === l
                                          ? t
                                          : im(l)
                                          ? l.then((e) => ((t[i] = e), t))
                                          : ((t[i] = l), t);
                                      },
                                      Object.create(null)
                                    );
                                  case I.SUBSCRIPTION:
                                    return iE(e, r, n, s, i);
                                }
                              })(s, e, i);
                            if (im(t))
                              return t.then(
                                (e) => ib(e, s.errors),
                                (e) => (s.errors.push(e), ib(null, s.errors))
                              );
                            return ib(t, s.errors);
                          } catch (e) {
                            return s.errors.push(e), ib(null, s.errors);
                          }
                        })({
                          schema: n,
                          document: t,
                          rootValue: i,
                          contextValue: s,
                          variableValues: a,
                          operationName: o,
                          fieldResolver: l,
                          typeResolver: u,
                        });
                  })(t)
                )
              ))),
              new Response(JSON.stringify(n), {
                status: 200,
                headers: { 'Content-Type': 'application/json' },
              })
            );
          } catch (e) {
            return (
              console.error(e),
              (r = String(e)),
              new Response(JSON.stringify({ message: r }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
              })
            );
          }
        };
      function uI(e) {
        return e0({
          ...e,
          IncrementalCache: ta,
          page: '/api/graphql',
          handler: u_,
        });
      }
    },
    430: (e, t, n) => {
      'use strict';
      var r,
        i,
        s,
        a,
        o = Object.create,
        l = Object.defineProperty,
        u = Object.getOwnPropertyDescriptor,
        c = Object.getOwnPropertyNames,
        d = Object.getPrototypeOf,
        p = Object.prototype.hasOwnProperty,
        h = (e, t, n, r) => {
          if ((t && 'object' == typeof t) || 'function' == typeof t)
            for (let i of c(t))
              p.call(e, i) ||
                i === n ||
                l(e, i, {
                  get: () => t[i],
                  enumerable: !(r = u(t, i)) || r.enumerable,
                });
          return e;
        },
        f =
          ((r = {
            '../../node_modules/dedent-tabs/dist/dedent-tabs.js'(e) {
              Object.defineProperty(e, '__esModule', { value: !0 }),
                (e.default = function (e) {
                  for (
                    var t = 'string' == typeof e ? [e] : e.raw, n = '', r = 0;
                    r < t.length;
                    r++
                  )
                    if (
                      ((n += t[r]
                        .replace(/\\\n[ \t]*/g, '')
                        .replace(/\\`/g, '`')
                        .replace(/\\\$/g, '$')
                        .replace(/\\\{/g, '{')),
                      r < (1 >= arguments.length ? 0 : arguments.length - 1))
                    ) {
                      var i = n
                        .substring(n.lastIndexOf('\n') + 1)
                        .match(/^(\s*)\S?/);
                      n += (
                        (1 > r + 1 || arguments.length <= r + 1
                          ? void 0
                          : arguments[r + 1]) + ''
                      ).replace(/\n/g, '\n' + i[1]);
                    }
                  var s = n.split('\n'),
                    a = null;
                  if (
                    (s.forEach(function (e) {
                      var t = e.match(/^(\s+)\S+/);
                      if (t) {
                        var n = t[1].length;
                        a = a ? (0, Math.min)(a, n) : n;
                      }
                    }),
                    null !== a)
                  ) {
                    var o = a;
                    n = s
                      .map(function (e) {
                        return ' ' === e[0] || '	' === e[0] ? e.slice(o) : e;
                      })
                      .join('\n');
                  }
                  return n.trim().replace(/\\n/g, '\n');
                });
            },
          }),
          function () {
            return (
              i || (0, r[c(r)[0]])((i = { exports: {} }).exports, i), i.exports
            );
          }),
        m = {};
      ((e, t) => {
        for (var n in t) l(e, n, { get: t[n], enumerable: !0 });
      })(m, { getOptionalRequestContext: () => v, getRequestContext: () => T }),
        (e.exports = h(l({}, '__esModule', { value: !0 }), m)),
        n(581);
      var g =
          ((a = null != (s = f()) ? o(d(s)) : {}),
          h(
            s && s.__esModule
              ? a
              : l(a, 'default', { value: s, enumerable: !0 }),
            s
          )),
        y = Symbol.for('__cloudflare-request-context__');
      function v() {
        let e = globalThis[y];
        if ('nodejs' == (process?.release?.name === 'node' ? 'nodejs' : 'edge'))
          throw Error(g.default`
			\`getRequestContext\` and \`getOptionalRequestContext\` can only be run
			inside the edge runtime, so please make sure to have included
			\`export const runtime = 'edge'\` in all the routes using such functions
			(regardless of whether they are used directly or indirectly through imports).
		`);
        return e;
      }
      function T() {
        let e = v();
        if (!e) {
          if (process?.env?.NEXT_PHASE === 'phase-production-build')
            throw Error(g.default`
				\n\`getRequestContext\` is being called at the top level of a route file, this is not supported
				for more details see https://developers.cloudflare.com/pages/framework-guides/nextjs/ssr/troubleshooting/#top-level-getrequestcontext \n
			`);
          throw Error('Failed to retrieve the Cloudflare request context.');
        }
        return e;
      }
    },
    109: (e) => {
      'use strict';
      var t = Object.defineProperty,
        n = Object.getOwnPropertyDescriptor,
        r = Object.getOwnPropertyNames,
        i = Object.prototype.hasOwnProperty,
        s = {};
      function a(e) {
        var t;
        let n = [
          'path' in e && e.path && `Path=${e.path}`,
          'expires' in e &&
            (e.expires || 0 === e.expires) &&
            `Expires=${('number' == typeof e.expires
              ? new Date(e.expires)
              : e.expires
            ).toUTCString()}`,
          'maxAge' in e && 'number' == typeof e.maxAge && `Max-Age=${e.maxAge}`,
          'domain' in e && e.domain && `Domain=${e.domain}`,
          'secure' in e && e.secure && 'Secure',
          'httpOnly' in e && e.httpOnly && 'HttpOnly',
          'sameSite' in e && e.sameSite && `SameSite=${e.sameSite}`,
          'priority' in e && e.priority && `Priority=${e.priority}`,
        ].filter(Boolean);
        return `${e.name}=${encodeURIComponent(
          null != (t = e.value) ? t : ''
        )}; ${n.join('; ')}`;
      }
      function o(e) {
        let t = new Map();
        for (let n of e.split(/; */)) {
          if (!n) continue;
          let e = n.indexOf('=');
          if (-1 === e) {
            t.set(n, 'true');
            continue;
          }
          let [r, i] = [n.slice(0, e), n.slice(e + 1)];
          try {
            t.set(r, decodeURIComponent(null != i ? i : 'true'));
          } catch {}
        }
        return t;
      }
      function l(e) {
        var t, n;
        if (!e) return;
        let [[r, i], ...s] = o(e),
          {
            domain: a,
            expires: l,
            httponly: d,
            maxage: p,
            path: h,
            samesite: f,
            secure: m,
            priority: g,
          } = Object.fromEntries(s.map(([e, t]) => [e.toLowerCase(), t]));
        return (function (e) {
          let t = {};
          for (let n in e) e[n] && (t[n] = e[n]);
          return t;
        })({
          name: r,
          value: decodeURIComponent(i),
          domain: a,
          ...(l && { expires: new Date(l) }),
          ...(d && { httpOnly: !0 }),
          ...('string' == typeof p && { maxAge: Number(p) }),
          path: h,
          ...(f && {
            sameSite: u.includes((t = (t = f).toLowerCase())) ? t : void 0,
          }),
          ...(m && { secure: !0 }),
          ...(g && {
            priority: c.includes((n = (n = g).toLowerCase())) ? n : void 0,
          }),
        });
      }
      ((e, n) => {
        for (var r in n) t(e, r, { get: n[r], enumerable: !0 });
      })(s, {
        RequestCookies: () => d,
        ResponseCookies: () => p,
        parseCookie: () => o,
        parseSetCookie: () => l,
        stringifyCookie: () => a,
      }),
        (e.exports = ((e, s, a, o) => {
          if ((s && 'object' == typeof s) || 'function' == typeof s)
            for (let a of r(s))
              i.call(e, a) ||
                void 0 === a ||
                t(e, a, {
                  get: () => s[a],
                  enumerable: !(o = n(s, a)) || o.enumerable,
                });
          return e;
        })(t({}, '__esModule', { value: !0 }), s));
      var u = ['strict', 'lax', 'none'],
        c = ['low', 'medium', 'high'],
        d = class {
          constructor(e) {
            (this._parsed = new Map()), (this._headers = e);
            let t = e.get('cookie');
            if (t)
              for (let [e, n] of o(t))
                this._parsed.set(e, { name: e, value: n });
          }
          [Symbol.iterator]() {
            return this._parsed[Symbol.iterator]();
          }
          get size() {
            return this._parsed.size;
          }
          get(...e) {
            let t = 'string' == typeof e[0] ? e[0] : e[0].name;
            return this._parsed.get(t);
          }
          getAll(...e) {
            var t;
            let n = Array.from(this._parsed);
            if (!e.length) return n.map(([e, t]) => t);
            let r =
              'string' == typeof e[0]
                ? e[0]
                : null == (t = e[0])
                ? void 0
                : t.name;
            return n.filter(([e]) => e === r).map(([e, t]) => t);
          }
          has(e) {
            return this._parsed.has(e);
          }
          set(...e) {
            let [t, n] = 1 === e.length ? [e[0].name, e[0].value] : e,
              r = this._parsed;
            return (
              r.set(t, { name: t, value: n }),
              this._headers.set(
                'cookie',
                Array.from(r)
                  .map(([e, t]) => a(t))
                  .join('; ')
              ),
              this
            );
          }
          delete(e) {
            let t = this._parsed,
              n = Array.isArray(e) ? e.map((e) => t.delete(e)) : t.delete(e);
            return (
              this._headers.set(
                'cookie',
                Array.from(t)
                  .map(([e, t]) => a(t))
                  .join('; ')
              ),
              n
            );
          }
          clear() {
            return this.delete(Array.from(this._parsed.keys())), this;
          }
          [Symbol.for('edge-runtime.inspect.custom')]() {
            return `RequestCookies ${JSON.stringify(
              Object.fromEntries(this._parsed)
            )}`;
          }
          toString() {
            return [...this._parsed.values()]
              .map((e) => `${e.name}=${encodeURIComponent(e.value)}`)
              .join('; ');
          }
        },
        p = class {
          constructor(e) {
            var t, n, r;
            (this._parsed = new Map()), (this._headers = e);
            let i =
              null !=
              (r =
                null != (n = null == (t = e.getSetCookie) ? void 0 : t.call(e))
                  ? n
                  : e.get('set-cookie'))
                ? r
                : [];
            for (let e of Array.isArray(i)
              ? i
              : (function (e) {
                  if (!e) return [];
                  var t,
                    n,
                    r,
                    i,
                    s,
                    a = [],
                    o = 0;
                  function l() {
                    for (; o < e.length && /\s/.test(e.charAt(o)); ) o += 1;
                    return o < e.length;
                  }
                  for (; o < e.length; ) {
                    for (t = o, s = !1; l(); )
                      if (',' === (n = e.charAt(o))) {
                        for (
                          r = o, o += 1, l(), i = o;
                          o < e.length &&
                          '=' !== (n = e.charAt(o)) &&
                          ';' !== n &&
                          ',' !== n;

                        )
                          o += 1;
                        o < e.length && '=' === e.charAt(o)
                          ? ((s = !0),
                            (o = i),
                            a.push(e.substring(t, r)),
                            (t = o))
                          : (o = r + 1);
                      } else o += 1;
                    (!s || o >= e.length) && a.push(e.substring(t, e.length));
                  }
                  return a;
                })(i)) {
              let t = l(e);
              t && this._parsed.set(t.name, t);
            }
          }
          get(...e) {
            let t = 'string' == typeof e[0] ? e[0] : e[0].name;
            return this._parsed.get(t);
          }
          getAll(...e) {
            var t;
            let n = Array.from(this._parsed.values());
            if (!e.length) return n;
            let r =
              'string' == typeof e[0]
                ? e[0]
                : null == (t = e[0])
                ? void 0
                : t.name;
            return n.filter((e) => e.name === r);
          }
          has(e) {
            return this._parsed.has(e);
          }
          set(...e) {
            let [t, n, r] = 1 === e.length ? [e[0].name, e[0].value, e[0]] : e,
              i = this._parsed;
            return (
              i.set(
                t,
                (function (e = { name: '', value: '' }) {
                  return (
                    'number' == typeof e.expires &&
                      (e.expires = new Date(e.expires)),
                    e.maxAge &&
                      (e.expires = new Date(Date.now() + 1e3 * e.maxAge)),
                    (null === e.path || void 0 === e.path) && (e.path = '/'),
                    e
                  );
                })({ name: t, value: n, ...r })
              ),
              (function (e, t) {
                for (let [, n] of (t.delete('set-cookie'), e)) {
                  let e = a(n);
                  t.append('set-cookie', e);
                }
              })(i, this._headers),
              this
            );
          }
          delete(...e) {
            let [t, n, r] =
              'string' == typeof e[0]
                ? [e[0]]
                : [e[0].name, e[0].path, e[0].domain];
            return this.set({
              name: t,
              path: n,
              domain: r,
              value: '',
              expires: new Date(0),
            });
          }
          [Symbol.for('edge-runtime.inspect.custom')]() {
            return `ResponseCookies ${JSON.stringify(
              Object.fromEntries(this._parsed)
            )}`;
          }
          toString() {
            return [...this._parsed.values()].map(a).join('; ');
          }
        };
    },
    855: (e, t, n) => {
      'use strict';
      (() => {
        var t = {
            491: (e, t, n) => {
              Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.ContextAPI = void 0);
              let r = n(223),
                i = n(172),
                s = n(930),
                a = 'context',
                o = new r.NoopContextManager();
              class l {
                constructor() {}
                static getInstance() {
                  return (
                    this._instance || (this._instance = new l()), this._instance
                  );
                }
                setGlobalContextManager(e) {
                  return (0, i.registerGlobal)(a, e, s.DiagAPI.instance());
                }
                active() {
                  return this._getContextManager().active();
                }
                with(e, t, n, ...r) {
                  return this._getContextManager().with(e, t, n, ...r);
                }
                bind(e, t) {
                  return this._getContextManager().bind(e, t);
                }
                _getContextManager() {
                  return (0, i.getGlobal)(a) || o;
                }
                disable() {
                  this._getContextManager().disable(),
                    (0, i.unregisterGlobal)(a, s.DiagAPI.instance());
                }
              }
              t.ContextAPI = l;
            },
            930: (e, t, n) => {
              Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.DiagAPI = void 0);
              let r = n(56),
                i = n(912),
                s = n(957),
                a = n(172);
              class o {
                constructor() {
                  function e(e) {
                    return function (...t) {
                      let n = (0, a.getGlobal)('diag');
                      if (n) return n[e](...t);
                    };
                  }
                  let t = this;
                  (t.setLogger = (e, n = { logLevel: s.DiagLogLevel.INFO }) => {
                    var r, o, l;
                    if (e === t) {
                      let e = Error(
                        'Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation'
                      );
                      return (
                        t.error(
                          null !== (r = e.stack) && void 0 !== r ? r : e.message
                        ),
                        !1
                      );
                    }
                    'number' == typeof n && (n = { logLevel: n });
                    let u = (0, a.getGlobal)('diag'),
                      c = (0, i.createLogLevelDiagLogger)(
                        null !== (o = n.logLevel) && void 0 !== o
                          ? o
                          : s.DiagLogLevel.INFO,
                        e
                      );
                    if (u && !n.suppressOverrideMessage) {
                      let e =
                        null !== (l = Error().stack) && void 0 !== l
                          ? l
                          : '<failed to generate stacktrace>';
                      u.warn(`Current logger will be overwritten from ${e}`),
                        c.warn(
                          `Current logger will overwrite one already registered from ${e}`
                        );
                    }
                    return (0, a.registerGlobal)('diag', c, t, !0);
                  }),
                    (t.disable = () => {
                      (0, a.unregisterGlobal)('diag', t);
                    }),
                    (t.createComponentLogger = (e) =>
                      new r.DiagComponentLogger(e)),
                    (t.verbose = e('verbose')),
                    (t.debug = e('debug')),
                    (t.info = e('info')),
                    (t.warn = e('warn')),
                    (t.error = e('error'));
                }
                static instance() {
                  return (
                    this._instance || (this._instance = new o()), this._instance
                  );
                }
              }
              t.DiagAPI = o;
            },
            653: (e, t, n) => {
              Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.MetricsAPI = void 0);
              let r = n(660),
                i = n(172),
                s = n(930),
                a = 'metrics';
              class o {
                constructor() {}
                static getInstance() {
                  return (
                    this._instance || (this._instance = new o()), this._instance
                  );
                }
                setGlobalMeterProvider(e) {
                  return (0, i.registerGlobal)(a, e, s.DiagAPI.instance());
                }
                getMeterProvider() {
                  return (0, i.getGlobal)(a) || r.NOOP_METER_PROVIDER;
                }
                getMeter(e, t, n) {
                  return this.getMeterProvider().getMeter(e, t, n);
                }
                disable() {
                  (0, i.unregisterGlobal)(a, s.DiagAPI.instance());
                }
              }
              t.MetricsAPI = o;
            },
            181: (e, t, n) => {
              Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.PropagationAPI = void 0);
              let r = n(172),
                i = n(874),
                s = n(194),
                a = n(277),
                o = n(369),
                l = n(930),
                u = 'propagation',
                c = new i.NoopTextMapPropagator();
              class d {
                constructor() {
                  (this.createBaggage = o.createBaggage),
                    (this.getBaggage = a.getBaggage),
                    (this.getActiveBaggage = a.getActiveBaggage),
                    (this.setBaggage = a.setBaggage),
                    (this.deleteBaggage = a.deleteBaggage);
                }
                static getInstance() {
                  return (
                    this._instance || (this._instance = new d()), this._instance
                  );
                }
                setGlobalPropagator(e) {
                  return (0, r.registerGlobal)(u, e, l.DiagAPI.instance());
                }
                inject(e, t, n = s.defaultTextMapSetter) {
                  return this._getGlobalPropagator().inject(e, t, n);
                }
                extract(e, t, n = s.defaultTextMapGetter) {
                  return this._getGlobalPropagator().extract(e, t, n);
                }
                fields() {
                  return this._getGlobalPropagator().fields();
                }
                disable() {
                  (0, r.unregisterGlobal)(u, l.DiagAPI.instance());
                }
                _getGlobalPropagator() {
                  return (0, r.getGlobal)(u) || c;
                }
              }
              t.PropagationAPI = d;
            },
            997: (e, t, n) => {
              Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.TraceAPI = void 0);
              let r = n(172),
                i = n(846),
                s = n(139),
                a = n(607),
                o = n(930),
                l = 'trace';
              class u {
                constructor() {
                  (this._proxyTracerProvider = new i.ProxyTracerProvider()),
                    (this.wrapSpanContext = s.wrapSpanContext),
                    (this.isSpanContextValid = s.isSpanContextValid),
                    (this.deleteSpan = a.deleteSpan),
                    (this.getSpan = a.getSpan),
                    (this.getActiveSpan = a.getActiveSpan),
                    (this.getSpanContext = a.getSpanContext),
                    (this.setSpan = a.setSpan),
                    (this.setSpanContext = a.setSpanContext);
                }
                static getInstance() {
                  return (
                    this._instance || (this._instance = new u()), this._instance
                  );
                }
                setGlobalTracerProvider(e) {
                  let t = (0, r.registerGlobal)(
                    l,
                    this._proxyTracerProvider,
                    o.DiagAPI.instance()
                  );
                  return t && this._proxyTracerProvider.setDelegate(e), t;
                }
                getTracerProvider() {
                  return (0, r.getGlobal)(l) || this._proxyTracerProvider;
                }
                getTracer(e, t) {
                  return this.getTracerProvider().getTracer(e, t);
                }
                disable() {
                  (0, r.unregisterGlobal)(l, o.DiagAPI.instance()),
                    (this._proxyTracerProvider = new i.ProxyTracerProvider());
                }
              }
              t.TraceAPI = u;
            },
            277: (e, t, n) => {
              Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.deleteBaggage =
                  t.setBaggage =
                  t.getActiveBaggage =
                  t.getBaggage =
                    void 0);
              let r = n(491),
                i = (0, n(780).createContextKey)('OpenTelemetry Baggage Key');
              function s(e) {
                return e.getValue(i) || void 0;
              }
              (t.getBaggage = s),
                (t.getActiveBaggage = function () {
                  return s(r.ContextAPI.getInstance().active());
                }),
                (t.setBaggage = function (e, t) {
                  return e.setValue(i, t);
                }),
                (t.deleteBaggage = function (e) {
                  return e.deleteValue(i);
                });
            },
            993: (e, t) => {
              Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.BaggageImpl = void 0);
              class n {
                constructor(e) {
                  this._entries = e ? new Map(e) : new Map();
                }
                getEntry(e) {
                  let t = this._entries.get(e);
                  if (t) return Object.assign({}, t);
                }
                getAllEntries() {
                  return Array.from(this._entries.entries()).map(([e, t]) => [
                    e,
                    t,
                  ]);
                }
                setEntry(e, t) {
                  let r = new n(this._entries);
                  return r._entries.set(e, t), r;
                }
                removeEntry(e) {
                  let t = new n(this._entries);
                  return t._entries.delete(e), t;
                }
                removeEntries(...e) {
                  let t = new n(this._entries);
                  for (let n of e) t._entries.delete(n);
                  return t;
                }
                clear() {
                  return new n();
                }
              }
              t.BaggageImpl = n;
            },
            830: (e, t) => {
              Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.baggageEntryMetadataSymbol = void 0),
                (t.baggageEntryMetadataSymbol = Symbol('BaggageEntryMetadata'));
            },
            369: (e, t, n) => {
              Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.baggageEntryMetadataFromString = t.createBaggage = void 0);
              let r = n(930),
                i = n(993),
                s = n(830),
                a = r.DiagAPI.instance();
              (t.createBaggage = function (e = {}) {
                return new i.BaggageImpl(new Map(Object.entries(e)));
              }),
                (t.baggageEntryMetadataFromString = function (e) {
                  return (
                    'string' != typeof e &&
                      (a.error(
                        `Cannot create baggage metadata from unknown type: ${typeof e}`
                      ),
                      (e = '')),
                    {
                      __TYPE__: s.baggageEntryMetadataSymbol,
                      toString: () => e,
                    }
                  );
                });
            },
            67: (e, t, n) => {
              Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.context = void 0);
              let r = n(491);
              t.context = r.ContextAPI.getInstance();
            },
            223: (e, t, n) => {
              Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.NoopContextManager = void 0);
              let r = n(780);
              class i {
                active() {
                  return r.ROOT_CONTEXT;
                }
                with(e, t, n, ...r) {
                  return t.call(n, ...r);
                }
                bind(e, t) {
                  return t;
                }
                enable() {
                  return this;
                }
                disable() {
                  return this;
                }
              }
              t.NoopContextManager = i;
            },
            780: (e, t) => {
              Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.ROOT_CONTEXT = t.createContextKey = void 0),
                (t.createContextKey = function (e) {
                  return Symbol.for(e);
                });
              class n {
                constructor(e) {
                  let t = this;
                  (t._currentContext = e ? new Map(e) : new Map()),
                    (t.getValue = (e) => t._currentContext.get(e)),
                    (t.setValue = (e, r) => {
                      let i = new n(t._currentContext);
                      return i._currentContext.set(e, r), i;
                    }),
                    (t.deleteValue = (e) => {
                      let r = new n(t._currentContext);
                      return r._currentContext.delete(e), r;
                    });
                }
              }
              t.ROOT_CONTEXT = new n();
            },
            506: (e, t, n) => {
              Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.diag = void 0);
              let r = n(930);
              t.diag = r.DiagAPI.instance();
            },
            56: (e, t, n) => {
              Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.DiagComponentLogger = void 0);
              let r = n(172);
              class i {
                constructor(e) {
                  this._namespace = e.namespace || 'DiagComponentLogger';
                }
                debug(...e) {
                  return s('debug', this._namespace, e);
                }
                error(...e) {
                  return s('error', this._namespace, e);
                }
                info(...e) {
                  return s('info', this._namespace, e);
                }
                warn(...e) {
                  return s('warn', this._namespace, e);
                }
                verbose(...e) {
                  return s('verbose', this._namespace, e);
                }
              }
              function s(e, t, n) {
                let i = (0, r.getGlobal)('diag');
                if (i) return n.unshift(t), i[e](...n);
              }
              t.DiagComponentLogger = i;
            },
            972: (e, t) => {
              Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.DiagConsoleLogger = void 0);
              let n = [
                { n: 'error', c: 'error' },
                { n: 'warn', c: 'warn' },
                { n: 'info', c: 'info' },
                { n: 'debug', c: 'debug' },
                { n: 'verbose', c: 'trace' },
              ];
              class r {
                constructor() {
                  for (let e = 0; e < n.length; e++)
                    this[n[e].n] = (function (e) {
                      return function (...t) {
                        if (console) {
                          let n = console[e];
                          if (
                            ('function' != typeof n && (n = console.log),
                            'function' == typeof n)
                          )
                            return n.apply(console, t);
                        }
                      };
                    })(n[e].c);
                }
              }
              t.DiagConsoleLogger = r;
            },
            912: (e, t, n) => {
              Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.createLogLevelDiagLogger = void 0);
              let r = n(957);
              t.createLogLevelDiagLogger = function (e, t) {
                function n(n, r) {
                  let i = t[n];
                  return 'function' == typeof i && e >= r
                    ? i.bind(t)
                    : function () {};
                }
                return (
                  e < r.DiagLogLevel.NONE
                    ? (e = r.DiagLogLevel.NONE)
                    : e > r.DiagLogLevel.ALL && (e = r.DiagLogLevel.ALL),
                  (t = t || {}),
                  {
                    error: n('error', r.DiagLogLevel.ERROR),
                    warn: n('warn', r.DiagLogLevel.WARN),
                    info: n('info', r.DiagLogLevel.INFO),
                    debug: n('debug', r.DiagLogLevel.DEBUG),
                    verbose: n('verbose', r.DiagLogLevel.VERBOSE),
                  }
                );
              };
            },
            957: (e, t) => {
              Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.DiagLogLevel = void 0),
                (function (e) {
                  (e[(e.NONE = 0)] = 'NONE'),
                    (e[(e.ERROR = 30)] = 'ERROR'),
                    (e[(e.WARN = 50)] = 'WARN'),
                    (e[(e.INFO = 60)] = 'INFO'),
                    (e[(e.DEBUG = 70)] = 'DEBUG'),
                    (e[(e.VERBOSE = 80)] = 'VERBOSE'),
                    (e[(e.ALL = 9999)] = 'ALL');
                })(t.DiagLogLevel || (t.DiagLogLevel = {}));
            },
            172: (e, t, n) => {
              Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.unregisterGlobal = t.getGlobal = t.registerGlobal = void 0);
              let r = n(200),
                i = n(521),
                s = n(130),
                a = i.VERSION.split('.')[0],
                o = Symbol.for(`opentelemetry.js.api.${a}`),
                l = r._globalThis;
              (t.registerGlobal = function (e, t, n, r = !1) {
                var s;
                let a = (l[o] =
                  null !== (s = l[o]) && void 0 !== s
                    ? s
                    : { version: i.VERSION });
                if (!r && a[e]) {
                  let t = Error(
                    `@opentelemetry/api: Attempted duplicate registration of API: ${e}`
                  );
                  return n.error(t.stack || t.message), !1;
                }
                if (a.version !== i.VERSION) {
                  let t = Error(
                    `@opentelemetry/api: Registration of version v${a.version} for ${e} does not match previously registered API v${i.VERSION}`
                  );
                  return n.error(t.stack || t.message), !1;
                }
                return (
                  (a[e] = t),
                  n.debug(
                    `@opentelemetry/api: Registered a global for ${e} v${i.VERSION}.`
                  ),
                  !0
                );
              }),
                (t.getGlobal = function (e) {
                  var t, n;
                  let r =
                    null === (t = l[o]) || void 0 === t ? void 0 : t.version;
                  if (r && (0, s.isCompatible)(r))
                    return null === (n = l[o]) || void 0 === n ? void 0 : n[e];
                }),
                (t.unregisterGlobal = function (e, t) {
                  t.debug(
                    `@opentelemetry/api: Unregistering a global for ${e} v${i.VERSION}.`
                  );
                  let n = l[o];
                  n && delete n[e];
                });
            },
            130: (e, t, n) => {
              Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.isCompatible = t._makeCompatibilityCheck = void 0);
              let r = n(521),
                i = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
              function s(e) {
                let t = new Set([e]),
                  n = new Set(),
                  r = e.match(i);
                if (!r) return () => !1;
                let s = {
                  major: +r[1],
                  minor: +r[2],
                  patch: +r[3],
                  prerelease: r[4],
                };
                if (null != s.prerelease)
                  return function (t) {
                    return t === e;
                  };
                function a(e) {
                  return n.add(e), !1;
                }
                return function (e) {
                  if (t.has(e)) return !0;
                  if (n.has(e)) return !1;
                  let r = e.match(i);
                  if (!r) return a(e);
                  let o = {
                    major: +r[1],
                    minor: +r[2],
                    patch: +r[3],
                    prerelease: r[4],
                  };
                  return null != o.prerelease || s.major !== o.major
                    ? a(e)
                    : 0 === s.major
                    ? s.minor === o.minor && s.patch <= o.patch
                      ? (t.add(e), !0)
                      : a(e)
                    : s.minor <= o.minor
                    ? (t.add(e), !0)
                    : a(e);
                };
              }
              (t._makeCompatibilityCheck = s), (t.isCompatible = s(r.VERSION));
            },
            886: (e, t, n) => {
              Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.metrics = void 0);
              let r = n(653);
              t.metrics = r.MetricsAPI.getInstance();
            },
            901: (e, t) => {
              Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.ValueType = void 0),
                (function (e) {
                  (e[(e.INT = 0)] = 'INT'), (e[(e.DOUBLE = 1)] = 'DOUBLE');
                })(t.ValueType || (t.ValueType = {}));
            },
            102: (e, t) => {
              Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.createNoopMeter =
                  t.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC =
                  t.NOOP_OBSERVABLE_GAUGE_METRIC =
                  t.NOOP_OBSERVABLE_COUNTER_METRIC =
                  t.NOOP_UP_DOWN_COUNTER_METRIC =
                  t.NOOP_HISTOGRAM_METRIC =
                  t.NOOP_COUNTER_METRIC =
                  t.NOOP_METER =
                  t.NoopObservableUpDownCounterMetric =
                  t.NoopObservableGaugeMetric =
                  t.NoopObservableCounterMetric =
                  t.NoopObservableMetric =
                  t.NoopHistogramMetric =
                  t.NoopUpDownCounterMetric =
                  t.NoopCounterMetric =
                  t.NoopMetric =
                  t.NoopMeter =
                    void 0);
              class n {
                constructor() {}
                createHistogram(e, n) {
                  return t.NOOP_HISTOGRAM_METRIC;
                }
                createCounter(e, n) {
                  return t.NOOP_COUNTER_METRIC;
                }
                createUpDownCounter(e, n) {
                  return t.NOOP_UP_DOWN_COUNTER_METRIC;
                }
                createObservableGauge(e, n) {
                  return t.NOOP_OBSERVABLE_GAUGE_METRIC;
                }
                createObservableCounter(e, n) {
                  return t.NOOP_OBSERVABLE_COUNTER_METRIC;
                }
                createObservableUpDownCounter(e, n) {
                  return t.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC;
                }
                addBatchObservableCallback(e, t) {}
                removeBatchObservableCallback(e) {}
              }
              t.NoopMeter = n;
              class r {}
              t.NoopMetric = r;
              class i extends r {
                add(e, t) {}
              }
              t.NoopCounterMetric = i;
              class s extends r {
                add(e, t) {}
              }
              t.NoopUpDownCounterMetric = s;
              class a extends r {
                record(e, t) {}
              }
              t.NoopHistogramMetric = a;
              class o {
                addCallback(e) {}
                removeCallback(e) {}
              }
              t.NoopObservableMetric = o;
              class l extends o {}
              t.NoopObservableCounterMetric = l;
              class u extends o {}
              t.NoopObservableGaugeMetric = u;
              class c extends o {}
              (t.NoopObservableUpDownCounterMetric = c),
                (t.NOOP_METER = new n()),
                (t.NOOP_COUNTER_METRIC = new i()),
                (t.NOOP_HISTOGRAM_METRIC = new a()),
                (t.NOOP_UP_DOWN_COUNTER_METRIC = new s()),
                (t.NOOP_OBSERVABLE_COUNTER_METRIC = new l()),
                (t.NOOP_OBSERVABLE_GAUGE_METRIC = new u()),
                (t.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = new c()),
                (t.createNoopMeter = function () {
                  return t.NOOP_METER;
                });
            },
            660: (e, t, n) => {
              Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.NOOP_METER_PROVIDER = t.NoopMeterProvider = void 0);
              let r = n(102);
              class i {
                getMeter(e, t, n) {
                  return r.NOOP_METER;
                }
              }
              (t.NoopMeterProvider = i), (t.NOOP_METER_PROVIDER = new i());
            },
            200: function (e, t, n) {
              var r =
                  (this && this.__createBinding) ||
                  (Object.create
                    ? function (e, t, n, r) {
                        void 0 === r && (r = n),
                          Object.defineProperty(e, r, {
                            enumerable: !0,
                            get: function () {
                              return t[n];
                            },
                          });
                      }
                    : function (e, t, n, r) {
                        void 0 === r && (r = n), (e[r] = t[n]);
                      }),
                i =
                  (this && this.__exportStar) ||
                  function (e, t) {
                    for (var n in e)
                      'default' === n ||
                        Object.prototype.hasOwnProperty.call(t, n) ||
                        r(t, e, n);
                  };
              Object.defineProperty(t, '__esModule', { value: !0 }),
                i(n(46), t);
            },
            651: (e, t) => {
              Object.defineProperty(t, '__esModule', { value: !0 }),
                (t._globalThis = void 0),
                (t._globalThis =
                  'object' == typeof globalThis ? globalThis : n.g);
            },
            46: function (e, t, n) {
              var r =
                  (this && this.__createBinding) ||
                  (Object.create
                    ? function (e, t, n, r) {
                        void 0 === r && (r = n),
                          Object.defineProperty(e, r, {
                            enumerable: !0,
                            get: function () {
                              return t[n];
                            },
                          });
                      }
                    : function (e, t, n, r) {
                        void 0 === r && (r = n), (e[r] = t[n]);
                      }),
                i =
                  (this && this.__exportStar) ||
                  function (e, t) {
                    for (var n in e)
                      'default' === n ||
                        Object.prototype.hasOwnProperty.call(t, n) ||
                        r(t, e, n);
                  };
              Object.defineProperty(t, '__esModule', { value: !0 }),
                i(n(651), t);
            },
            939: (e, t, n) => {
              Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.propagation = void 0);
              let r = n(181);
              t.propagation = r.PropagationAPI.getInstance();
            },
            874: (e, t) => {
              Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.NoopTextMapPropagator = void 0);
              class n {
                inject(e, t) {}
                extract(e, t) {
                  return e;
                }
                fields() {
                  return [];
                }
              }
              t.NoopTextMapPropagator = n;
            },
            194: (e, t) => {
              Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.defaultTextMapSetter = t.defaultTextMapGetter = void 0),
                (t.defaultTextMapGetter = {
                  get(e, t) {
                    if (null != e) return e[t];
                  },
                  keys: (e) => (null == e ? [] : Object.keys(e)),
                }),
                (t.defaultTextMapSetter = {
                  set(e, t, n) {
                    null != e && (e[t] = n);
                  },
                });
            },
            845: (e, t, n) => {
              Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.trace = void 0);
              let r = n(997);
              t.trace = r.TraceAPI.getInstance();
            },
            403: (e, t, n) => {
              Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.NonRecordingSpan = void 0);
              let r = n(476);
              class i {
                constructor(e = r.INVALID_SPAN_CONTEXT) {
                  this._spanContext = e;
                }
                spanContext() {
                  return this._spanContext;
                }
                setAttribute(e, t) {
                  return this;
                }
                setAttributes(e) {
                  return this;
                }
                addEvent(e, t) {
                  return this;
                }
                setStatus(e) {
                  return this;
                }
                updateName(e) {
                  return this;
                }
                end(e) {}
                isRecording() {
                  return !1;
                }
                recordException(e, t) {}
              }
              t.NonRecordingSpan = i;
            },
            614: (e, t, n) => {
              Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.NoopTracer = void 0);
              let r = n(491),
                i = n(607),
                s = n(403),
                a = n(139),
                o = r.ContextAPI.getInstance();
              class l {
                startSpan(e, t, n = o.active()) {
                  if (null == t ? void 0 : t.root)
                    return new s.NonRecordingSpan();
                  let r = n && (0, i.getSpanContext)(n);
                  return 'object' == typeof r &&
                    'string' == typeof r.spanId &&
                    'string' == typeof r.traceId &&
                    'number' == typeof r.traceFlags &&
                    (0, a.isSpanContextValid)(r)
                    ? new s.NonRecordingSpan(r)
                    : new s.NonRecordingSpan();
                }
                startActiveSpan(e, t, n, r) {
                  let s, a, l;
                  if (arguments.length < 2) return;
                  2 == arguments.length
                    ? (l = t)
                    : 3 == arguments.length
                    ? ((s = t), (l = n))
                    : ((s = t), (a = n), (l = r));
                  let u = null != a ? a : o.active(),
                    c = this.startSpan(e, s, u),
                    d = (0, i.setSpan)(u, c);
                  return o.with(d, l, void 0, c);
                }
              }
              t.NoopTracer = l;
            },
            124: (e, t, n) => {
              Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.NoopTracerProvider = void 0);
              let r = n(614);
              class i {
                getTracer(e, t, n) {
                  return new r.NoopTracer();
                }
              }
              t.NoopTracerProvider = i;
            },
            125: (e, t, n) => {
              Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.ProxyTracer = void 0);
              let r = new (n(614).NoopTracer)();
              class i {
                constructor(e, t, n, r) {
                  (this._provider = e),
                    (this.name = t),
                    (this.version = n),
                    (this.options = r);
                }
                startSpan(e, t, n) {
                  return this._getTracer().startSpan(e, t, n);
                }
                startActiveSpan(e, t, n, r) {
                  let i = this._getTracer();
                  return Reflect.apply(i.startActiveSpan, i, arguments);
                }
                _getTracer() {
                  if (this._delegate) return this._delegate;
                  let e = this._provider.getDelegateTracer(
                    this.name,
                    this.version,
                    this.options
                  );
                  return e ? ((this._delegate = e), this._delegate) : r;
                }
              }
              t.ProxyTracer = i;
            },
            846: (e, t, n) => {
              Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.ProxyTracerProvider = void 0);
              let r = n(125),
                i = new (n(124).NoopTracerProvider)();
              class s {
                getTracer(e, t, n) {
                  var i;
                  return null !== (i = this.getDelegateTracer(e, t, n)) &&
                    void 0 !== i
                    ? i
                    : new r.ProxyTracer(this, e, t, n);
                }
                getDelegate() {
                  var e;
                  return null !== (e = this._delegate) && void 0 !== e ? e : i;
                }
                setDelegate(e) {
                  this._delegate = e;
                }
                getDelegateTracer(e, t, n) {
                  var r;
                  return null === (r = this._delegate) || void 0 === r
                    ? void 0
                    : r.getTracer(e, t, n);
                }
              }
              t.ProxyTracerProvider = s;
            },
            996: (e, t) => {
              Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.SamplingDecision = void 0),
                (function (e) {
                  (e[(e.NOT_RECORD = 0)] = 'NOT_RECORD'),
                    (e[(e.RECORD = 1)] = 'RECORD'),
                    (e[(e.RECORD_AND_SAMPLED = 2)] = 'RECORD_AND_SAMPLED');
                })(t.SamplingDecision || (t.SamplingDecision = {}));
            },
            607: (e, t, n) => {
              Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.getSpanContext =
                  t.setSpanContext =
                  t.deleteSpan =
                  t.setSpan =
                  t.getActiveSpan =
                  t.getSpan =
                    void 0);
              let r = n(780),
                i = n(403),
                s = n(491),
                a = (0, r.createContextKey)('OpenTelemetry Context Key SPAN');
              function o(e) {
                return e.getValue(a) || void 0;
              }
              function l(e, t) {
                return e.setValue(a, t);
              }
              (t.getSpan = o),
                (t.getActiveSpan = function () {
                  return o(s.ContextAPI.getInstance().active());
                }),
                (t.setSpan = l),
                (t.deleteSpan = function (e) {
                  return e.deleteValue(a);
                }),
                (t.setSpanContext = function (e, t) {
                  return l(e, new i.NonRecordingSpan(t));
                }),
                (t.getSpanContext = function (e) {
                  var t;
                  return null === (t = o(e)) || void 0 === t
                    ? void 0
                    : t.spanContext();
                });
            },
            325: (e, t, n) => {
              Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.TraceStateImpl = void 0);
              let r = n(564);
              class i {
                constructor(e) {
                  (this._internalState = new Map()), e && this._parse(e);
                }
                set(e, t) {
                  let n = this._clone();
                  return (
                    n._internalState.has(e) && n._internalState.delete(e),
                    n._internalState.set(e, t),
                    n
                  );
                }
                unset(e) {
                  let t = this._clone();
                  return t._internalState.delete(e), t;
                }
                get(e) {
                  return this._internalState.get(e);
                }
                serialize() {
                  return this._keys()
                    .reduce((e, t) => (e.push(t + '=' + this.get(t)), e), [])
                    .join(',');
                }
                _parse(e) {
                  !(e.length > 512) &&
                    ((this._internalState = e
                      .split(',')
                      .reverse()
                      .reduce((e, t) => {
                        let n = t.trim(),
                          i = n.indexOf('=');
                        if (-1 !== i) {
                          let s = n.slice(0, i),
                            a = n.slice(i + 1, t.length);
                          (0, r.validateKey)(s) &&
                            (0, r.validateValue)(a) &&
                            e.set(s, a);
                        }
                        return e;
                      }, new Map())),
                    this._internalState.size > 32 &&
                      (this._internalState = new Map(
                        Array.from(this._internalState.entries())
                          .reverse()
                          .slice(0, 32)
                      )));
                }
                _keys() {
                  return Array.from(this._internalState.keys()).reverse();
                }
                _clone() {
                  let e = new i();
                  return (e._internalState = new Map(this._internalState)), e;
                }
              }
              t.TraceStateImpl = i;
            },
            564: (e, t) => {
              Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.validateValue = t.validateKey = void 0);
              let n = '[_0-9a-z-*/]',
                r = `[a-z]${n}{0,255}`,
                i = `[a-z0-9]${n}{0,240}@[a-z]${n}{0,13}`,
                s = RegExp(`^(?:${r}|${i})$`),
                a = /^[ -~]{0,255}[!-~]$/,
                o = /,|=/;
              (t.validateKey = function (e) {
                return s.test(e);
              }),
                (t.validateValue = function (e) {
                  return a.test(e) && !o.test(e);
                });
            },
            98: (e, t, n) => {
              Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.createTraceState = void 0);
              let r = n(325);
              t.createTraceState = function (e) {
                return new r.TraceStateImpl(e);
              };
            },
            476: (e, t, n) => {
              Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.INVALID_SPAN_CONTEXT =
                  t.INVALID_TRACEID =
                  t.INVALID_SPANID =
                    void 0);
              let r = n(475);
              (t.INVALID_SPANID = '0000000000000000'),
                (t.INVALID_TRACEID = '00000000000000000000000000000000'),
                (t.INVALID_SPAN_CONTEXT = {
                  traceId: t.INVALID_TRACEID,
                  spanId: t.INVALID_SPANID,
                  traceFlags: r.TraceFlags.NONE,
                });
            },
            357: (e, t) => {
              Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.SpanKind = void 0),
                (function (e) {
                  (e[(e.INTERNAL = 0)] = 'INTERNAL'),
                    (e[(e.SERVER = 1)] = 'SERVER'),
                    (e[(e.CLIENT = 2)] = 'CLIENT'),
                    (e[(e.PRODUCER = 3)] = 'PRODUCER'),
                    (e[(e.CONSUMER = 4)] = 'CONSUMER');
                })(t.SpanKind || (t.SpanKind = {}));
            },
            139: (e, t, n) => {
              Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.wrapSpanContext =
                  t.isSpanContextValid =
                  t.isValidSpanId =
                  t.isValidTraceId =
                    void 0);
              let r = n(476),
                i = n(403),
                s = /^([0-9a-f]{32})$/i,
                a = /^[0-9a-f]{16}$/i;
              function o(e) {
                return s.test(e) && e !== r.INVALID_TRACEID;
              }
              function l(e) {
                return a.test(e) && e !== r.INVALID_SPANID;
              }
              (t.isValidTraceId = o),
                (t.isValidSpanId = l),
                (t.isSpanContextValid = function (e) {
                  return o(e.traceId) && l(e.spanId);
                }),
                (t.wrapSpanContext = function (e) {
                  return new i.NonRecordingSpan(e);
                });
            },
            847: (e, t) => {
              Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.SpanStatusCode = void 0),
                (function (e) {
                  (e[(e.UNSET = 0)] = 'UNSET'),
                    (e[(e.OK = 1)] = 'OK'),
                    (e[(e.ERROR = 2)] = 'ERROR');
                })(t.SpanStatusCode || (t.SpanStatusCode = {}));
            },
            475: (e, t) => {
              Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.TraceFlags = void 0),
                (function (e) {
                  (e[(e.NONE = 0)] = 'NONE'), (e[(e.SAMPLED = 1)] = 'SAMPLED');
                })(t.TraceFlags || (t.TraceFlags = {}));
            },
            521: (e, t) => {
              Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.VERSION = void 0),
                (t.VERSION = '1.6.0');
            },
          },
          r = {};
        function i(e) {
          var n = r[e];
          if (void 0 !== n) return n.exports;
          var s = (r[e] = { exports: {} }),
            a = !0;
          try {
            t[e].call(s.exports, s, s.exports, i), (a = !1);
          } finally {
            a && delete r[e];
          }
          return s.exports;
        }
        i.ab = '//';
        var s = {};
        (() => {
          Object.defineProperty(s, '__esModule', { value: !0 }),
            (s.trace =
              s.propagation =
              s.metrics =
              s.diag =
              s.context =
              s.INVALID_SPAN_CONTEXT =
              s.INVALID_TRACEID =
              s.INVALID_SPANID =
              s.isValidSpanId =
              s.isValidTraceId =
              s.isSpanContextValid =
              s.createTraceState =
              s.TraceFlags =
              s.SpanStatusCode =
              s.SpanKind =
              s.SamplingDecision =
              s.ProxyTracerProvider =
              s.ProxyTracer =
              s.defaultTextMapSetter =
              s.defaultTextMapGetter =
              s.ValueType =
              s.createNoopMeter =
              s.DiagLogLevel =
              s.DiagConsoleLogger =
              s.ROOT_CONTEXT =
              s.createContextKey =
              s.baggageEntryMetadataFromString =
                void 0);
          var e = i(369);
          Object.defineProperty(s, 'baggageEntryMetadataFromString', {
            enumerable: !0,
            get: function () {
              return e.baggageEntryMetadataFromString;
            },
          });
          var t = i(780);
          Object.defineProperty(s, 'createContextKey', {
            enumerable: !0,
            get: function () {
              return t.createContextKey;
            },
          }),
            Object.defineProperty(s, 'ROOT_CONTEXT', {
              enumerable: !0,
              get: function () {
                return t.ROOT_CONTEXT;
              },
            });
          var n = i(972);
          Object.defineProperty(s, 'DiagConsoleLogger', {
            enumerable: !0,
            get: function () {
              return n.DiagConsoleLogger;
            },
          });
          var r = i(957);
          Object.defineProperty(s, 'DiagLogLevel', {
            enumerable: !0,
            get: function () {
              return r.DiagLogLevel;
            },
          });
          var a = i(102);
          Object.defineProperty(s, 'createNoopMeter', {
            enumerable: !0,
            get: function () {
              return a.createNoopMeter;
            },
          });
          var o = i(901);
          Object.defineProperty(s, 'ValueType', {
            enumerable: !0,
            get: function () {
              return o.ValueType;
            },
          });
          var l = i(194);
          Object.defineProperty(s, 'defaultTextMapGetter', {
            enumerable: !0,
            get: function () {
              return l.defaultTextMapGetter;
            },
          }),
            Object.defineProperty(s, 'defaultTextMapSetter', {
              enumerable: !0,
              get: function () {
                return l.defaultTextMapSetter;
              },
            });
          var u = i(125);
          Object.defineProperty(s, 'ProxyTracer', {
            enumerable: !0,
            get: function () {
              return u.ProxyTracer;
            },
          });
          var c = i(846);
          Object.defineProperty(s, 'ProxyTracerProvider', {
            enumerable: !0,
            get: function () {
              return c.ProxyTracerProvider;
            },
          });
          var d = i(996);
          Object.defineProperty(s, 'SamplingDecision', {
            enumerable: !0,
            get: function () {
              return d.SamplingDecision;
            },
          });
          var p = i(357);
          Object.defineProperty(s, 'SpanKind', {
            enumerable: !0,
            get: function () {
              return p.SpanKind;
            },
          });
          var h = i(847);
          Object.defineProperty(s, 'SpanStatusCode', {
            enumerable: !0,
            get: function () {
              return h.SpanStatusCode;
            },
          });
          var f = i(475);
          Object.defineProperty(s, 'TraceFlags', {
            enumerable: !0,
            get: function () {
              return f.TraceFlags;
            },
          });
          var m = i(98);
          Object.defineProperty(s, 'createTraceState', {
            enumerable: !0,
            get: function () {
              return m.createTraceState;
            },
          });
          var g = i(139);
          Object.defineProperty(s, 'isSpanContextValid', {
            enumerable: !0,
            get: function () {
              return g.isSpanContextValid;
            },
          }),
            Object.defineProperty(s, 'isValidTraceId', {
              enumerable: !0,
              get: function () {
                return g.isValidTraceId;
              },
            }),
            Object.defineProperty(s, 'isValidSpanId', {
              enumerable: !0,
              get: function () {
                return g.isValidSpanId;
              },
            });
          var y = i(476);
          Object.defineProperty(s, 'INVALID_SPANID', {
            enumerable: !0,
            get: function () {
              return y.INVALID_SPANID;
            },
          }),
            Object.defineProperty(s, 'INVALID_TRACEID', {
              enumerable: !0,
              get: function () {
                return y.INVALID_TRACEID;
              },
            }),
            Object.defineProperty(s, 'INVALID_SPAN_CONTEXT', {
              enumerable: !0,
              get: function () {
                return y.INVALID_SPAN_CONTEXT;
              },
            });
          let v = i(67);
          Object.defineProperty(s, 'context', {
            enumerable: !0,
            get: function () {
              return v.context;
            },
          });
          let T = i(506);
          Object.defineProperty(s, 'diag', {
            enumerable: !0,
            get: function () {
              return T.diag;
            },
          });
          let b = i(886);
          Object.defineProperty(s, 'metrics', {
            enumerable: !0,
            get: function () {
              return b.metrics;
            },
          });
          let E = i(939);
          Object.defineProperty(s, 'propagation', {
            enumerable: !0,
            get: function () {
              return E.propagation;
            },
          });
          let N = i(845);
          Object.defineProperty(s, 'trace', {
            enumerable: !0,
            get: function () {
              return N.trace;
            },
          }),
            (s.default = {
              context: v.context,
              diag: T.diag,
              metrics: b.metrics,
              propagation: E.propagation,
              trace: N.trace,
            });
        })(),
          (e.exports = s);
      })();
    },
    70: (e) => {
      'use strict';
      (() => {
        'undefined' != typeof __nccwpck_require__ &&
          (__nccwpck_require__.ab = '//');
        var t = {};
        (() => {
          /*!
           * cookie
           * Copyright(c) 2012-2014 Roman Shtylman
           * Copyright(c) 2015 Douglas Christopher Wilson
           * MIT Licensed
           */ (t.parse = function (t, n) {
            if ('string' != typeof t)
              throw TypeError('argument str must be a string');
            for (
              var i = {}, s = t.split(r), a = (n || {}).decode || e, o = 0;
              o < s.length;
              o++
            ) {
              var l = s[o],
                u = l.indexOf('=');
              if (!(u < 0)) {
                var c = l.substr(0, u).trim(),
                  d = l.substr(++u, l.length).trim();
                '"' == d[0] && (d = d.slice(1, -1)),
                  void 0 == i[c] &&
                    (i[c] = (function (e, t) {
                      try {
                        return t(e);
                      } catch (t) {
                        return e;
                      }
                    })(d, a));
              }
            }
            return i;
          }),
            (t.serialize = function (e, t, r) {
              var s = r || {},
                a = s.encode || n;
              if ('function' != typeof a)
                throw TypeError('option encode is invalid');
              if (!i.test(e)) throw TypeError('argument name is invalid');
              var o = a(t);
              if (o && !i.test(o)) throw TypeError('argument val is invalid');
              var l = e + '=' + o;
              if (null != s.maxAge) {
                var u = s.maxAge - 0;
                if (isNaN(u) || !isFinite(u))
                  throw TypeError('option maxAge is invalid');
                l += '; Max-Age=' + Math.floor(u);
              }
              if (s.domain) {
                if (!i.test(s.domain))
                  throw TypeError('option domain is invalid');
                l += '; Domain=' + s.domain;
              }
              if (s.path) {
                if (!i.test(s.path)) throw TypeError('option path is invalid');
                l += '; Path=' + s.path;
              }
              if (s.expires) {
                if ('function' != typeof s.expires.toUTCString)
                  throw TypeError('option expires is invalid');
                l += '; Expires=' + s.expires.toUTCString();
              }
              if (
                (s.httpOnly && (l += '; HttpOnly'),
                s.secure && (l += '; Secure'),
                s.sameSite)
              )
                switch (
                  'string' == typeof s.sameSite
                    ? s.sameSite.toLowerCase()
                    : s.sameSite
                ) {
                  case !0:
                  case 'strict':
                    l += '; SameSite=Strict';
                    break;
                  case 'lax':
                    l += '; SameSite=Lax';
                    break;
                  case 'none':
                    l += '; SameSite=None';
                    break;
                  default:
                    throw TypeError('option sameSite is invalid');
                }
              return l;
            });
          var e = decodeURIComponent,
            n = encodeURIComponent,
            r = /; */,
            i = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
        })(),
          (e.exports = t);
      })();
    },
    87: (e) => {
      'use strict';
      (() => {
        var t = {
            806: (e, t, n) => {
              let r = n(190),
                i = Symbol('max'),
                s = Symbol('length'),
                a = Symbol('lengthCalculator'),
                o = Symbol('allowStale'),
                l = Symbol('maxAge'),
                u = Symbol('dispose'),
                c = Symbol('noDisposeOnSet'),
                d = Symbol('lruList'),
                p = Symbol('cache'),
                h = Symbol('updateAgeOnGet'),
                f = () => 1;
              class m {
                constructor(e) {
                  if (
                    ('number' == typeof e && (e = { max: e }),
                    e || (e = {}),
                    e.max && ('number' != typeof e.max || e.max < 0))
                  )
                    throw TypeError('max must be a non-negative number');
                  this[i] = e.max || 1 / 0;
                  let t = e.length || f;
                  if (
                    ((this[a] = 'function' != typeof t ? f : t),
                    (this[o] = e.stale || !1),
                    e.maxAge && 'number' != typeof e.maxAge)
                  )
                    throw TypeError('maxAge must be a number');
                  (this[l] = e.maxAge || 0),
                    (this[u] = e.dispose),
                    (this[c] = e.noDisposeOnSet || !1),
                    (this[h] = e.updateAgeOnGet || !1),
                    this.reset();
                }
                set max(e) {
                  if ('number' != typeof e || e < 0)
                    throw TypeError('max must be a non-negative number');
                  (this[i] = e || 1 / 0), v(this);
                }
                get max() {
                  return this[i];
                }
                set allowStale(e) {
                  this[o] = !!e;
                }
                get allowStale() {
                  return this[o];
                }
                set maxAge(e) {
                  if ('number' != typeof e)
                    throw TypeError('maxAge must be a non-negative number');
                  (this[l] = e), v(this);
                }
                get maxAge() {
                  return this[l];
                }
                set lengthCalculator(e) {
                  'function' != typeof e && (e = f),
                    e !== this[a] &&
                      ((this[a] = e),
                      (this[s] = 0),
                      this[d].forEach((e) => {
                        (e.length = this[a](e.value, e.key)),
                          (this[s] += e.length);
                      })),
                    v(this);
                }
                get lengthCalculator() {
                  return this[a];
                }
                get length() {
                  return this[s];
                }
                get itemCount() {
                  return this[d].length;
                }
                rforEach(e, t) {
                  t = t || this;
                  for (let n = this[d].tail; null !== n; ) {
                    let r = n.prev;
                    E(this, e, n, t), (n = r);
                  }
                }
                forEach(e, t) {
                  t = t || this;
                  for (let n = this[d].head; null !== n; ) {
                    let r = n.next;
                    E(this, e, n, t), (n = r);
                  }
                }
                keys() {
                  return this[d].toArray().map((e) => e.key);
                }
                values() {
                  return this[d].toArray().map((e) => e.value);
                }
                reset() {
                  this[u] &&
                    this[d] &&
                    this[d].length &&
                    this[d].forEach((e) => this[u](e.key, e.value)),
                    (this[p] = new Map()),
                    (this[d] = new r()),
                    (this[s] = 0);
                }
                dump() {
                  return this[d]
                    .map(
                      (e) =>
                        !y(this, e) && {
                          k: e.key,
                          v: e.value,
                          e: e.now + (e.maxAge || 0),
                        }
                    )
                    .toArray()
                    .filter((e) => e);
                }
                dumpLru() {
                  return this[d];
                }
                set(e, t, n) {
                  if ((n = n || this[l]) && 'number' != typeof n)
                    throw TypeError('maxAge must be a number');
                  let r = n ? Date.now() : 0,
                    o = this[a](t, e);
                  if (this[p].has(e)) {
                    if (o > this[i]) return T(this, this[p].get(e)), !1;
                    let a = this[p].get(e).value;
                    return (
                      this[u] && !this[c] && this[u](e, a.value),
                      (a.now = r),
                      (a.maxAge = n),
                      (a.value = t),
                      (this[s] += o - a.length),
                      (a.length = o),
                      this.get(e),
                      v(this),
                      !0
                    );
                  }
                  let h = new b(e, t, o, r, n);
                  return h.length > this[i]
                    ? (this[u] && this[u](e, t), !1)
                    : ((this[s] += h.length),
                      this[d].unshift(h),
                      this[p].set(e, this[d].head),
                      v(this),
                      !0);
                }
                has(e) {
                  return !!this[p].has(e) && !y(this, this[p].get(e).value);
                }
                get(e) {
                  return g(this, e, !0);
                }
                peek(e) {
                  return g(this, e, !1);
                }
                pop() {
                  let e = this[d].tail;
                  return e ? (T(this, e), e.value) : null;
                }
                del(e) {
                  T(this, this[p].get(e));
                }
                load(e) {
                  this.reset();
                  let t = Date.now();
                  for (let n = e.length - 1; n >= 0; n--) {
                    let r = e[n],
                      i = r.e || 0;
                    if (0 === i) this.set(r.k, r.v);
                    else {
                      let e = i - t;
                      e > 0 && this.set(r.k, r.v, e);
                    }
                  }
                }
                prune() {
                  this[p].forEach((e, t) => g(this, t, !1));
                }
              }
              let g = (e, t, n) => {
                  let r = e[p].get(t);
                  if (r) {
                    let t = r.value;
                    if (y(e, t)) {
                      if ((T(e, r), !e[o])) return;
                    } else
                      n &&
                        (e[h] && (r.value.now = Date.now()),
                        e[d].unshiftNode(r));
                    return t.value;
                  }
                },
                y = (e, t) => {
                  if (!t || (!t.maxAge && !e[l])) return !1;
                  let n = Date.now() - t.now;
                  return t.maxAge ? n > t.maxAge : e[l] && n > e[l];
                },
                v = (e) => {
                  if (e[s] > e[i])
                    for (let t = e[d].tail; e[s] > e[i] && null !== t; ) {
                      let n = t.prev;
                      T(e, t), (t = n);
                    }
                },
                T = (e, t) => {
                  if (t) {
                    let n = t.value;
                    e[u] && e[u](n.key, n.value),
                      (e[s] -= n.length),
                      e[p].delete(n.key),
                      e[d].removeNode(t);
                  }
                };
              class b {
                constructor(e, t, n, r, i) {
                  (this.key = e),
                    (this.value = t),
                    (this.length = n),
                    (this.now = r),
                    (this.maxAge = i || 0);
                }
              }
              let E = (e, t, n, r) => {
                let i = n.value;
                y(e, i) && (T(e, n), e[o] || (i = void 0)),
                  i && t.call(r, i.value, i.key, e);
              };
              e.exports = m;
            },
            76: (e) => {
              e.exports = function (e) {
                e.prototype[Symbol.iterator] = function* () {
                  for (let e = this.head; e; e = e.next) yield e.value;
                };
              };
            },
            190: (e, t, n) => {
              function r(e) {
                var t = this;
                if (
                  (t instanceof r || (t = new r()),
                  (t.tail = null),
                  (t.head = null),
                  (t.length = 0),
                  e && 'function' == typeof e.forEach)
                )
                  e.forEach(function (e) {
                    t.push(e);
                  });
                else if (arguments.length > 0)
                  for (var n = 0, i = arguments.length; n < i; n++)
                    t.push(arguments[n]);
                return t;
              }
              function i(e, t, n, r) {
                if (!(this instanceof i)) return new i(e, t, n, r);
                (this.list = r),
                  (this.value = e),
                  t ? ((t.next = this), (this.prev = t)) : (this.prev = null),
                  n ? ((n.prev = this), (this.next = n)) : (this.next = null);
              }
              (e.exports = r),
                (r.Node = i),
                (r.create = r),
                (r.prototype.removeNode = function (e) {
                  if (e.list !== this)
                    throw Error(
                      'removing node which does not belong to this list'
                    );
                  var t = e.next,
                    n = e.prev;
                  return (
                    t && (t.prev = n),
                    n && (n.next = t),
                    e === this.head && (this.head = t),
                    e === this.tail && (this.tail = n),
                    e.list.length--,
                    (e.next = null),
                    (e.prev = null),
                    (e.list = null),
                    t
                  );
                }),
                (r.prototype.unshiftNode = function (e) {
                  if (e !== this.head) {
                    e.list && e.list.removeNode(e);
                    var t = this.head;
                    (e.list = this),
                      (e.next = t),
                      t && (t.prev = e),
                      (this.head = e),
                      this.tail || (this.tail = e),
                      this.length++;
                  }
                }),
                (r.prototype.pushNode = function (e) {
                  if (e !== this.tail) {
                    e.list && e.list.removeNode(e);
                    var t = this.tail;
                    (e.list = this),
                      (e.prev = t),
                      t && (t.next = e),
                      (this.tail = e),
                      this.head || (this.head = e),
                      this.length++;
                  }
                }),
                (r.prototype.push = function () {
                  for (var e, t = 0, n = arguments.length; t < n; t++)
                    (e = arguments[t]),
                      (this.tail = new i(e, this.tail, null, this)),
                      this.head || (this.head = this.tail),
                      this.length++;
                  return this.length;
                }),
                (r.prototype.unshift = function () {
                  for (var e, t = 0, n = arguments.length; t < n; t++)
                    (e = arguments[t]),
                      (this.head = new i(e, null, this.head, this)),
                      this.tail || (this.tail = this.head),
                      this.length++;
                  return this.length;
                }),
                (r.prototype.pop = function () {
                  if (this.tail) {
                    var e = this.tail.value;
                    return (
                      (this.tail = this.tail.prev),
                      this.tail ? (this.tail.next = null) : (this.head = null),
                      this.length--,
                      e
                    );
                  }
                }),
                (r.prototype.shift = function () {
                  if (this.head) {
                    var e = this.head.value;
                    return (
                      (this.head = this.head.next),
                      this.head ? (this.head.prev = null) : (this.tail = null),
                      this.length--,
                      e
                    );
                  }
                }),
                (r.prototype.forEach = function (e, t) {
                  t = t || this;
                  for (var n = this.head, r = 0; null !== n; r++)
                    e.call(t, n.value, r, this), (n = n.next);
                }),
                (r.prototype.forEachReverse = function (e, t) {
                  t = t || this;
                  for (var n = this.tail, r = this.length - 1; null !== n; r--)
                    e.call(t, n.value, r, this), (n = n.prev);
                }),
                (r.prototype.get = function (e) {
                  for (var t = 0, n = this.head; null !== n && t < e; t++)
                    n = n.next;
                  if (t === e && null !== n) return n.value;
                }),
                (r.prototype.getReverse = function (e) {
                  for (var t = 0, n = this.tail; null !== n && t < e; t++)
                    n = n.prev;
                  if (t === e && null !== n) return n.value;
                }),
                (r.prototype.map = function (e, t) {
                  t = t || this;
                  for (var n = new r(), i = this.head; null !== i; )
                    n.push(e.call(t, i.value, this)), (i = i.next);
                  return n;
                }),
                (r.prototype.mapReverse = function (e, t) {
                  t = t || this;
                  for (var n = new r(), i = this.tail; null !== i; )
                    n.push(e.call(t, i.value, this)), (i = i.prev);
                  return n;
                }),
                (r.prototype.reduce = function (e, t) {
                  var n,
                    r = this.head;
                  if (arguments.length > 1) n = t;
                  else if (this.head)
                    (r = this.head.next), (n = this.head.value);
                  else
                    throw TypeError(
                      'Reduce of empty list with no initial value'
                    );
                  for (var i = 0; null !== r; i++)
                    (n = e(n, r.value, i)), (r = r.next);
                  return n;
                }),
                (r.prototype.reduceReverse = function (e, t) {
                  var n,
                    r = this.tail;
                  if (arguments.length > 1) n = t;
                  else if (this.tail)
                    (r = this.tail.prev), (n = this.tail.value);
                  else
                    throw TypeError(
                      'Reduce of empty list with no initial value'
                    );
                  for (var i = this.length - 1; null !== r; i--)
                    (n = e(n, r.value, i)), (r = r.prev);
                  return n;
                }),
                (r.prototype.toArray = function () {
                  for (
                    var e = Array(this.length), t = 0, n = this.head;
                    null !== n;
                    t++
                  )
                    (e[t] = n.value), (n = n.next);
                  return e;
                }),
                (r.prototype.toArrayReverse = function () {
                  for (
                    var e = Array(this.length), t = 0, n = this.tail;
                    null !== n;
                    t++
                  )
                    (e[t] = n.value), (n = n.prev);
                  return e;
                }),
                (r.prototype.slice = function (e, t) {
                  (t = t || this.length) < 0 && (t += this.length),
                    (e = e || 0) < 0 && (e += this.length);
                  var n = new r();
                  if (t < e || t < 0) return n;
                  e < 0 && (e = 0), t > this.length && (t = this.length);
                  for (var i = 0, s = this.head; null !== s && i < e; i++)
                    s = s.next;
                  for (; null !== s && i < t; i++, s = s.next) n.push(s.value);
                  return n;
                }),
                (r.prototype.sliceReverse = function (e, t) {
                  (t = t || this.length) < 0 && (t += this.length),
                    (e = e || 0) < 0 && (e += this.length);
                  var n = new r();
                  if (t < e || t < 0) return n;
                  e < 0 && (e = 0), t > this.length && (t = this.length);
                  for (
                    var i = this.length, s = this.tail;
                    null !== s && i > t;
                    i--
                  )
                    s = s.prev;
                  for (; null !== s && i > e; i--, s = s.prev) n.push(s.value);
                  return n;
                }),
                (r.prototype.splice = function (e, t) {
                  e > this.length && (e = this.length - 1),
                    e < 0 && (e = this.length + e);
                  for (var n = 0, r = this.head; null !== r && n < e; n++)
                    r = r.next;
                  for (var s = [], n = 0; r && n < t; n++)
                    s.push(r.value), (r = this.removeNode(r));
                  null === r && (r = this.tail),
                    r !== this.head && r !== this.tail && (r = r.prev);
                  for (var n = 2; n < arguments.length; n++)
                    r = (function (e, t, n) {
                      var r =
                        t === e.head
                          ? new i(n, null, t, e)
                          : new i(n, t, t.next, e);
                      return (
                        null === r.next && (e.tail = r),
                        null === r.prev && (e.head = r),
                        e.length++,
                        r
                      );
                    })(this, r, arguments[n]);
                  return s;
                }),
                (r.prototype.reverse = function () {
                  for (
                    var e = this.head, t = this.tail, n = e;
                    null !== n;
                    n = n.prev
                  ) {
                    var r = n.prev;
                    (n.prev = n.next), (n.next = r);
                  }
                  return (this.head = t), (this.tail = e), this;
                });
              try {
                n(76)(r);
              } catch (e) {}
            },
          },
          n = {};
        function r(e) {
          var i = n[e];
          if (void 0 !== i) return i.exports;
          var s = (n[e] = { exports: {} }),
            a = !0;
          try {
            t[e](s, s.exports, r), (a = !1);
          } finally {
            a && delete n[e];
          }
          return s.exports;
        }
        r.ab = '//';
        var i = r(806);
        e.exports = i;
      })();
    },
    459: (e) => {
      'use strict';
      !(function () {
        var t = {
            114: function (e) {
              function t(e) {
                if ('string' != typeof e)
                  throw TypeError(
                    'Path must be a string. Received ' + JSON.stringify(e)
                  );
              }
              function n(e, t) {
                for (
                  var n, r = '', i = 0, s = -1, a = 0, o = 0;
                  o <= e.length;
                  ++o
                ) {
                  if (o < e.length) n = e.charCodeAt(o);
                  else if (47 === n) break;
                  else n = 47;
                  if (47 === n) {
                    if (s === o - 1 || 1 === a);
                    else if (s !== o - 1 && 2 === a) {
                      if (
                        r.length < 2 ||
                        2 !== i ||
                        46 !== r.charCodeAt(r.length - 1) ||
                        46 !== r.charCodeAt(r.length - 2)
                      ) {
                        if (r.length > 2) {
                          var l = r.lastIndexOf('/');
                          if (l !== r.length - 1) {
                            -1 === l
                              ? ((r = ''), (i = 0))
                              : (i =
                                  (r = r.slice(0, l)).length -
                                  1 -
                                  r.lastIndexOf('/')),
                              (s = o),
                              (a = 0);
                            continue;
                          }
                        } else if (2 === r.length || 1 === r.length) {
                          (r = ''), (i = 0), (s = o), (a = 0);
                          continue;
                        }
                      }
                      t && (r.length > 0 ? (r += '/..') : (r = '..'), (i = 2));
                    } else
                      r.length > 0
                        ? (r += '/' + e.slice(s + 1, o))
                        : (r = e.slice(s + 1, o)),
                        (i = o - s - 1);
                    (s = o), (a = 0);
                  } else 46 === n && -1 !== a ? ++a : (a = -1);
                }
                return r;
              }
              var r = {
                resolve: function () {
                  for (
                    var e, r, i = '', s = !1, a = arguments.length - 1;
                    a >= -1 && !s;
                    a--
                  )
                    a >= 0
                      ? (r = arguments[a])
                      : (void 0 === e && (e = ''), (r = e)),
                      t(r),
                      0 !== r.length &&
                        ((i = r + '/' + i), (s = 47 === r.charCodeAt(0)));
                  return ((i = n(i, !s)), s)
                    ? i.length > 0
                      ? '/' + i
                      : '/'
                    : i.length > 0
                    ? i
                    : '.';
                },
                normalize: function (e) {
                  if ((t(e), 0 === e.length)) return '.';
                  var r = 47 === e.charCodeAt(0),
                    i = 47 === e.charCodeAt(e.length - 1);
                  return (0 !== (e = n(e, !r)).length || r || (e = '.'),
                  e.length > 0 && i && (e += '/'),
                  r)
                    ? '/' + e
                    : e;
                },
                isAbsolute: function (e) {
                  return t(e), e.length > 0 && 47 === e.charCodeAt(0);
                },
                join: function () {
                  if (0 == arguments.length) return '.';
                  for (var e, n = 0; n < arguments.length; ++n) {
                    var i = arguments[n];
                    t(i),
                      i.length > 0 && (void 0 === e ? (e = i) : (e += '/' + i));
                  }
                  return void 0 === e ? '.' : r.normalize(e);
                },
                relative: function (e, n) {
                  if (
                    (t(e),
                    t(n),
                    e === n || (e = r.resolve(e)) === (n = r.resolve(n)))
                  )
                    return '';
                  for (var i = 1; i < e.length && 47 === e.charCodeAt(i); ++i);
                  for (
                    var s = e.length, a = s - i, o = 1;
                    o < n.length && 47 === n.charCodeAt(o);
                    ++o
                  );
                  for (
                    var l = n.length - o, u = a < l ? a : l, c = -1, d = 0;
                    d <= u;
                    ++d
                  ) {
                    if (d === u) {
                      if (l > u) {
                        if (47 === n.charCodeAt(o + d))
                          return n.slice(o + d + 1);
                        if (0 === d) return n.slice(o + d);
                      } else
                        a > u &&
                          (47 === e.charCodeAt(i + d)
                            ? (c = d)
                            : 0 === d && (c = 0));
                      break;
                    }
                    var p = e.charCodeAt(i + d);
                    if (p !== n.charCodeAt(o + d)) break;
                    47 === p && (c = d);
                  }
                  var h = '';
                  for (d = i + c + 1; d <= s; ++d)
                    (d === s || 47 === e.charCodeAt(d)) &&
                      (0 === h.length ? (h += '..') : (h += '/..'));
                  return h.length > 0
                    ? h + n.slice(o + c)
                    : ((o += c), 47 === n.charCodeAt(o) && ++o, n.slice(o));
                },
                _makeLong: function (e) {
                  return e;
                },
                dirname: function (e) {
                  if ((t(e), 0 === e.length)) return '.';
                  for (
                    var n = e.charCodeAt(0),
                      r = 47 === n,
                      i = -1,
                      s = !0,
                      a = e.length - 1;
                    a >= 1;
                    --a
                  )
                    if (47 === (n = e.charCodeAt(a))) {
                      if (!s) {
                        i = a;
                        break;
                      }
                    } else s = !1;
                  return -1 === i
                    ? r
                      ? '/'
                      : '.'
                    : r && 1 === i
                    ? '//'
                    : e.slice(0, i);
                },
                basename: function (e, n) {
                  if (void 0 !== n && 'string' != typeof n)
                    throw TypeError('"ext" argument must be a string');
                  t(e);
                  var r,
                    i = 0,
                    s = -1,
                    a = !0;
                  if (void 0 !== n && n.length > 0 && n.length <= e.length) {
                    if (n.length === e.length && n === e) return '';
                    var o = n.length - 1,
                      l = -1;
                    for (r = e.length - 1; r >= 0; --r) {
                      var u = e.charCodeAt(r);
                      if (47 === u) {
                        if (!a) {
                          i = r + 1;
                          break;
                        }
                      } else
                        -1 === l && ((a = !1), (l = r + 1)),
                          o >= 0 &&
                            (u === n.charCodeAt(o)
                              ? -1 == --o && (s = r)
                              : ((o = -1), (s = l)));
                    }
                    return (
                      i === s ? (s = l) : -1 === s && (s = e.length),
                      e.slice(i, s)
                    );
                  }
                  for (r = e.length - 1; r >= 0; --r)
                    if (47 === e.charCodeAt(r)) {
                      if (!a) {
                        i = r + 1;
                        break;
                      }
                    } else -1 === s && ((a = !1), (s = r + 1));
                  return -1 === s ? '' : e.slice(i, s);
                },
                extname: function (e) {
                  t(e);
                  for (
                    var n = -1, r = 0, i = -1, s = !0, a = 0, o = e.length - 1;
                    o >= 0;
                    --o
                  ) {
                    var l = e.charCodeAt(o);
                    if (47 === l) {
                      if (!s) {
                        r = o + 1;
                        break;
                      }
                      continue;
                    }
                    -1 === i && ((s = !1), (i = o + 1)),
                      46 === l
                        ? -1 === n
                          ? (n = o)
                          : 1 !== a && (a = 1)
                        : -1 !== n && (a = -1);
                  }
                  return -1 === n ||
                    -1 === i ||
                    0 === a ||
                    (1 === a && n === i - 1 && n === r + 1)
                    ? ''
                    : e.slice(n, i);
                },
                format: function (e) {
                  var t, n;
                  if (null === e || 'object' != typeof e)
                    throw TypeError(
                      'The "pathObject" argument must be of type Object. Received type ' +
                        typeof e
                    );
                  return (
                    (t = e.dir || e.root),
                    (n = e.base || (e.name || '') + (e.ext || '')),
                    t ? (t === e.root ? t + n : t + '/' + n) : n
                  );
                },
                parse: function (e) {
                  t(e);
                  var n,
                    r = { root: '', dir: '', base: '', ext: '', name: '' };
                  if (0 === e.length) return r;
                  var i = e.charCodeAt(0),
                    s = 47 === i;
                  s ? ((r.root = '/'), (n = 1)) : (n = 0);
                  for (
                    var a = -1, o = 0, l = -1, u = !0, c = e.length - 1, d = 0;
                    c >= n;
                    --c
                  ) {
                    if (47 === (i = e.charCodeAt(c))) {
                      if (!u) {
                        o = c + 1;
                        break;
                      }
                      continue;
                    }
                    -1 === l && ((u = !1), (l = c + 1)),
                      46 === i
                        ? -1 === a
                          ? (a = c)
                          : 1 !== d && (d = 1)
                        : -1 !== a && (d = -1);
                  }
                  return (
                    -1 === a ||
                    -1 === l ||
                    0 === d ||
                    (1 === d && a === l - 1 && a === o + 1)
                      ? -1 !== l &&
                        (0 === o && s
                          ? (r.base = r.name = e.slice(1, l))
                          : (r.base = r.name = e.slice(o, l)))
                      : (0 === o && s
                          ? ((r.name = e.slice(1, a)), (r.base = e.slice(1, l)))
                          : ((r.name = e.slice(o, a)),
                            (r.base = e.slice(o, l))),
                        (r.ext = e.slice(a, l))),
                    o > 0 ? (r.dir = e.slice(0, o - 1)) : s && (r.dir = '/'),
                    r
                  );
                },
                sep: '/',
                delimiter: ':',
                win32: null,
                posix: null,
              };
              (r.posix = r), (e.exports = r);
            },
          },
          n = {};
        function r(e) {
          var i = n[e];
          if (void 0 !== i) return i.exports;
          var s = (n[e] = { exports: {} }),
            a = !0;
          try {
            t[e](s, s.exports, r), (a = !1);
          } finally {
            a && delete n[e];
          }
          return s.exports;
        }
        r.ab = '//';
        var i = r(114);
        e.exports = i;
      })();
    },
    581: () => {},
    523: (e, t, n) => {
      'use strict';
      let r;
      (r = n(459)), (e.exports = r);
    },
    636: (e) => {
      'use strict';
      e.exports = [
        'chrome 64',
        'edge 79',
        'firefox 67',
        'opera 51',
        'safari 12',
      ];
    },
    156: (e, t, n) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          withRequest: function () {
            return s;
          },
          getTestReqInfo: function () {
            return a;
          },
        });
      let r = new (n(67).AsyncLocalStorage)();
      function i(e, t) {
        let n = t.header(e, 'next-test-proxy-port');
        if (n)
          return {
            url: t.url(e),
            proxyPort: Number(n),
            testData: t.header(e, 'next-test-data') || '',
          };
      }
      function s(e, t, n) {
        let s = i(e, t);
        return s ? r.run(s, n) : n();
      }
      function a(e, t) {
        return r.getStore() || (e && t ? i(e, t) : void 0);
      }
    },
    78: (e, t, n) => {
      'use strict';
      var r = n(195).Buffer;
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          reader: function () {
            return s;
          },
          handleFetch: function () {
            return o;
          },
          interceptFetch: function () {
            return l;
          },
        });
      let i = n(156),
        s = { url: (e) => e.url, header: (e, t) => e.headers.get(t) };
      async function a(e, t) {
        let {
          url: n,
          method: i,
          headers: s,
          body: a,
          cache: o,
          credentials: l,
          integrity: u,
          mode: c,
          redirect: d,
          referrer: p,
          referrerPolicy: h,
        } = t;
        return {
          testData: e,
          api: 'fetch',
          request: {
            url: n,
            method: i,
            headers: [
              ...Array.from(s),
              [
                'next-test-stack',
                (function () {
                  let e = (Error().stack ?? '').split('\n');
                  for (let t = 1; t < e.length; t++)
                    if (e[t].length > 0) {
                      e = e.slice(t);
                      break;
                    }
                  return (e = (e = (e = e.filter(
                    (e) => !e.includes('/next/dist/')
                  )).slice(0, 5)).map((e) =>
                    e.replace('webpack-internal:///(rsc)/', '').trim()
                  )).join('    ');
                })(),
              ],
            ],
            body: a ? r.from(await t.arrayBuffer()).toString('base64') : null,
            cache: o,
            credentials: l,
            integrity: u,
            mode: c,
            redirect: d,
            referrer: p,
            referrerPolicy: h,
          },
        };
      }
      async function o(e, t) {
        let n = (0, i.getTestReqInfo)(t, s);
        if (!n) throw Error(`No test info for ${t.method} ${t.url}`);
        let { testData: o, proxyPort: l } = n,
          u = await a(o, t),
          c = await e(`http://localhost:${l}`, {
            method: 'POST',
            body: JSON.stringify(u),
            next: { internal: !0 },
          });
        if (!c.ok) throw Error(`Proxy request failed: ${c.status}`);
        let d = await c.json(),
          { api: p } = d;
        switch (p) {
          case 'continue':
            return e(t);
          case 'abort':
          case 'unhandled':
            throw Error(`Proxy request aborted [${t.method} ${t.url}]`);
        }
        return (function (e) {
          let { status: t, headers: n, body: i } = e.response;
          return new Response(i ? r.from(i, 'base64') : null, {
            status: t,
            headers: new Headers(n),
          });
        })(d);
      }
      function l(e) {
        return (
          (n.g.fetch = function (t, n) {
            var r;
            return (
              null == n ? void 0 : null == (r = n.next) ? void 0 : r.internal
            )
              ? e(t, n)
              : o(e, new Request(t, n));
          }),
          () => {
            n.g.fetch = e;
          }
        );
      }
    },
    878: (e, t, n) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          interceptTestApis: function () {
            return s;
          },
          wrapRequestHandler: function () {
            return a;
          },
        });
      let r = n(156),
        i = n(78);
      function s() {
        return (0, i.interceptFetch)(n.g.fetch);
      }
      function a(e) {
        return (t, n) => (0, r.withRequest)(t, i.reader, () => e(t, n));
      }
    },
  },
  (e) => {
    var t = e((e.s = 89));
    (_ENTRIES = 'undefined' == typeof _ENTRIES ? {} : _ENTRIES)[
      'middleware_pages/api/graphql'
    ] = t;
  },
]);
//# sourceMappingURL=graphql.js.map;
export default (function () {
  const module = { exports: {}, loaded: false };
  const fn = function (module, exports) {
    'use strict';
    var x = Object.defineProperty;
    var N = Object.getOwnPropertyDescriptor;
    var E = Object.getOwnPropertyNames;
    var b = Object.prototype.hasOwnProperty;
    var w = (e, n) => {
        for (var t in n) x(e, t, { get: n[t], enumerable: !0 });
      },
      T = (e, n, t, o) => {
        if ((n && typeof n == 'object') || typeof n == 'function')
          for (let i of E(n))
            !b.call(e, i) &&
              i !== t &&
              x(e, i, {
                get: () => n[i],
                enumerable: !(o = N(n, i)) || o.enumerable,
              });
        return e;
      };
    var P = (e) => T(x({}, '__esModule', { value: !0 }), e);
    var S = {};
    w(S, { default: () => y });
    module.exports = P(S);
    var f = require('async_hooks'),
      L = '@next/request-context',
      d = Symbol.for(L),
      h = Symbol.for('internal.storage');
    function _() {
      let e = globalThis;
      if (!e[d]) {
        let n = new f.AsyncLocalStorage(),
          t = { get: () => n.getStore(), [h]: n };
        e[d] = t;
      }
      return e[d];
    }
    var U = _();
    function m(e, n) {
      return U[h].run(e, n);
    }
    function R(e) {
      let n = {};
      return (
        e &&
          e.forEach((t, o) => {
            (n[o] = t), o.toLowerCase() === 'set-cookie' && (n[o] = A(t));
          }),
        n
      );
    }
    function A(e) {
      let n = [],
        t = 0,
        o,
        i,
        g,
        r,
        a;
      function u() {
        for (; t < e.length && /\s/.test(e.charAt(t)); ) t += 1;
        return t < e.length;
      }
      function s() {
        return (i = e.charAt(t)), i !== '=' && i !== ';' && i !== ',';
      }
      for (; t < e.length; ) {
        for (o = t, a = !1; u(); )
          if (((i = e.charAt(t)), i === ',')) {
            for (g = t, t += 1, u(), r = t; t < e.length && s(); ) t += 1;
            t < e.length && e.charAt(t) === '='
              ? ((a = !0), (t = r), n.push(e.substring(o, g)), (o = t))
              : (t = g + 1);
          } else t += 1;
        (!a || t >= e.length) && n.push(e.substring(o, e.length));
      }
      return n;
    }
    function y(e) {
      let n = e.staticRoutes.map((o) => ({
          regexp: new RegExp(o.namedRegex),
          page: o.page,
        })),
        t =
          e.dynamicRoutes?.map((o) => ({
            regexp: new RegExp(o.namedRegex),
            page: o.page,
          })) || [];
      return async function (i, g) {
        let r = new URL(i.url).pathname,
          a = {};
        if (
          (e.nextConfig?.basePath &&
            r.startsWith(e.nextConfig.basePath) &&
            (r = r.replace(e.nextConfig.basePath, '') || '/'),
          e.nextConfig?.i18n)
        )
          for (let s of e.nextConfig.i18n.locales) {
            let l = new RegExp(`^/${s}($|/)`, 'i');
            if (r.match(l)) {
              r = r.replace(l, '/') || '/';
              break;
            }
          }
        for (let s of n)
          if (s.regexp.exec(r)) {
            a.name = s.page;
            break;
          }
        if (!a.name) {
          let s = C(r);
          for (let l of t || []) {
            if (s && !C(l.page)) continue;
            let p = l.regexp.exec(r);
            if (p) {
              a = { name: l.page, params: p.groups };
              break;
            }
          }
        }
        let u = await m({ waitUntil: g.waitUntil }, () =>
          _ENTRIES[`middleware_${e.name}`].default.call(
            {},
            {
              request: {
                url: i.url,
                method: i.method,
                headers: R(i.headers),
                ip: c(i.headers, 'x-real-ip'),
                geo: {
                  city: c(i.headers, 'x-vercel-ip-city', !0),
                  country: c(i.headers, 'x-vercel-ip-country', !0),
                  latitude: c(i.headers, 'x-vercel-ip-latitude'),
                  longitude: c(i.headers, 'x-vercel-ip-longitude'),
                  region: c(i.headers, 'x-vercel-ip-country-region', !0),
                },
                nextConfig: e.nextConfig,
                page: a,
                body: i.body,
              },
            }
          )
        );
        return u.waitUntil && g.waitUntil(u.waitUntil), u.response;
      };
    }
    function c(e, n, t = !1) {
      let o = e.get(n) || void 0;
      return t && o ? decodeURIComponent(o) : o;
    }
    function C(e) {
      return e === '/api' || e.startsWith('/api/');
    }
  };
  fn(module, module.exports);
  return module.exports;
}
  .call({})
  .default({
    name: 'pages/api/graphql',
    staticRoutes: [
      { page: '/', regex: '^/(?:/)?$', routeKeys: {}, namedRegex: '^/(?:/)?$' },
    ],
    dynamicRoutes: [],
    nextConfig: { basePath: '' },
  }));
