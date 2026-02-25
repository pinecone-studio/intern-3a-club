var ru = Object.defineProperty;
var Pp = Object.getOwnPropertyDescriptor;
var Lp = Object.getOwnPropertyNames;
var kp = Object.prototype.hasOwnProperty;
var Ys = (Qe, Le) => () => (Qe && (Le = Qe((Qe = 0))), Le);
var Qs = (Qe, Le, Gn, Ce) => {
    if ((Le && typeof Le == 'object') || typeof Le == 'function')
      for (let xe of Lp(Le))
        !kp.call(Qe, xe) &&
          xe !== Gn &&
          ru(Qe, xe, {
            get: () => Le[xe],
            enumerable: !(Ce = Pp(Le, xe)) || Ce.enumerable,
          });
    return Qe;
  },
  sn = (Qe, Le, Gn) => (Qs(Qe, Le, 'default'), Gn && Qs(Gn, Le, 'default'));
var Gs = (Qe) => Qs(ru({}, '__esModule', { value: !0 }), Qe);
var br = {};
import * as Yp from 'node:async_hooks';
var iu = Ys(() => {
  sn(br, Yp);
});
var Er = {};
import * as Gp from 'node:buffer';
var su = Ys(() => {
  sn(Er, Gp);
});
var Nr = {};
import * as Kp from 'async_hooks';
var au = Ys(() => {
  sn(Nr, Kp);
});
var Ks = globalThis.__nextOnPagesRoutesIsolation.getProxyFor('/api/graphql'),
  Jp = ((Qe, Le, Gn) => (
    (Le._ENTRIES = {}),
    (Qe.__PRERENDER_MANIFEST =
      '{"version":4,"routes":{},"dynamicRoutes":{},"preview":{"previewModeId":"eaf36d0859f66d13e272fc50fb7757a1","previewModeSigningKey":"4ed071d1c1f74e3d19273f1aa9470c47c133842fe7158ca0bfa9226e248f37f6","previewModeEncryptionKey":"2d62f4ca181137b8f9e0bed096358b5a9102a7638fc2a21e5c6f4a3eda6aa1eb"},"notFoundRoutes":[]}'),
    (() => {
      'use strict';
      var Ce = {},
        xe = {};
      function ue(pe) {
        var be = xe[pe];
        if (be !== void 0) return be.exports;
        var W = (xe[pe] = { exports: {} }),
          M = !0;
        try {
          Ce[pe](W, W.exports, ue), (M = !1);
        } finally {
          M && delete xe[pe];
        }
        return W.exports;
      }
      (ue.m = Ce),
        (() => {
          var pe = [];
          ue.O = (be, W, M, Q) => {
            if (W) {
              Q = Q || 0;
              for (var m = pe.length; m > 0 && pe[m - 1][2] > Q; m--)
                pe[m] = pe[m - 1];
              pe[m] = [W, M, Q];
              return;
            }
            for (var v = 1 / 0, m = 0; m < pe.length; m++) {
              for (var [W, M, Q] = pe[m], T = !0, b = 0; b < W.length; b++)
                (Q & !1 || v >= Q) &&
                Object.keys(ue.O).every((L) => ue.O[L](W[b]))
                  ? W.splice(b--, 1)
                  : ((T = !1), Q < v && (v = Q));
              if (T) {
                pe.splice(m--, 1);
                var E = M();
                E !== void 0 && (be = E);
              }
            }
            return be;
          };
        })(),
        (ue.n = (pe) => {
          var be = pe && pe.__esModule ? () => pe.default : () => pe;
          return ue.d(be, { a: be }), be;
        }),
        (ue.d = (pe, be) => {
          for (var W in be)
            ue.o(be, W) &&
              !ue.o(pe, W) &&
              Object.defineProperty(pe, W, { enumerable: !0, get: be[W] });
        }),
        (ue.g = (function () {
          if (typeof Le == 'object') return Le;
          try {
            return this || new Function('return this')();
          } catch {
            if (typeof window == 'object') return window;
          }
        })()),
        (ue.o = (pe, be) => Object.prototype.hasOwnProperty.call(pe, be)),
        (ue.r = (pe) => {
          typeof Symbol < 'u' &&
            Symbol.toStringTag &&
            Object.defineProperty(pe, Symbol.toStringTag, { value: 'Module' }),
            Object.defineProperty(pe, '__esModule', { value: !0 });
        }),
        (() => {
          var pe = { 993: 0 };
          ue.O.j = (M) => pe[M] === 0;
          var be = (M, Q) => {
              var [m, v, T] = Q,
                b,
                E,
                y = 0;
              if (m.some((C) => pe[C] !== 0)) {
                for (b in v) ue.o(v, b) && (ue.m[b] = v[b]);
                if (T) var N = T(ue);
              }
              for (M && M(Q); y < m.length; y++)
                (E = m[y]), ue.o(pe, E) && pe[E] && pe[E][0](), (pe[E] = 0);
              return ue.O(N);
            },
            W = (Qe.webpackChunk_N_E = Qe.webpackChunk_N_E || []);
          W.forEach(be.bind(null, 0)), (W.push = be.bind(null, W.push.bind(W)));
        })();
    })(),
    (Qe.webpackChunk_N_E = Qe.webpackChunk_N_E || []).push([
      [702],
      {
        67: (Ce) => {
          'use strict';
          Ce.exports = (iu(), Gs(br));
        },
        195: (Ce) => {
          'use strict';
          Ce.exports = (su(), Gs(Er));
        },
        89: (Ce, xe, ue) => {
          'use strict';
          let pe, be, W, M, Q, m, v, T, b, E, y;
          ue.r(xe), ue.d(xe, { default: () => Cp });
          var N,
            C,
            x,
            L,
            $,
            K,
            te,
            me,
            ye,
            _e,
            ne,
            fe,
            U,
            f,
            _,
            re,
            Se,
            ie,
            $e = {};
          async function Xe() {
            if (
              'globalThis._ENTRIES' in Le &&
              Le._ENTRIES.middleware_instrumentation &&
              Le._ENTRIES.middleware_instrumentation.register
            )
              try {
                await Le._ENTRIES.middleware_instrumentation.register();
              } catch (t) {
                throw (
                  ((t.message = `An error occurred while loading instrumentation hook: ${t.message}`),
                  t)
                );
              }
          }
          ue.r($e),
            ue.d($e, {
              classTeachers: () => gp,
              classes: () => Xl,
              clubMembers: () => vp,
              clubs: () => wt,
              students: () => Wl,
              teachers: () => js,
              timetable: () => yi,
            });
          let ft = null;
          function Js() {
            return ft || (ft = Xe()), ft;
          }
          function Ni(t) {
            return `The edge runtime does not support Node.js '${t}' module.
Learn More: https://nextjs.org/docs/messages/node-module-in-edge-runtime`;
          }
          process !== ue.g.process &&
            ((process.env = ue.g.process.env), (ue.g.process = process)),
            Object.defineProperty(Le, '__import_unsupported', {
              value: function (t) {
                let e = new Proxy(function () {}, {
                  get(n, r) {
                    if (r === 'then') return {};
                    throw Error(Ni(t));
                  },
                  construct() {
                    throw Error(Ni(t));
                  },
                  apply(n, r, i) {
                    if (typeof i[0] == 'function') return i[0](e);
                    throw Error(Ni(t));
                  },
                });
                return new Proxy({}, { get: () => e });
              },
              enumerable: !1,
              configurable: !0,
            }),
            Js();
          class Kn extends Error {
            constructor({ page: e }) {
              super(`The middleware "${e}" accepts an async API directly with the form:
  
  export function middleware(request, event) {
    return NextResponse.redirect('/new-location')
  }
  
  Read more: https://nextjs.org/docs/messages/middleware-new-signature
  `);
            }
          }
          class ou extends Error {
            constructor() {
              super(
                'The request.page has been deprecated in favour of `URLPattern`.\n  Read more: https://nextjs.org/docs/messages/middleware-request-page\n  '
              );
            }
          }
          class lu extends Error {
            constructor() {
              super(
                'The request.ua has been removed in favour of `userAgent` function.\n  Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent\n  '
              );
            }
          }
          function Hs(t) {
            let e = {},
              n = [];
            if (t)
              for (let [r, i] of t.entries())
                r.toLowerCase() === 'set-cookie'
                  ? (n.push(
                      ...(function (s) {
                        var o,
                          a,
                          u,
                          c,
                          l,
                          d = [],
                          p = 0;
                        function g() {
                          for (; p < s.length && /\s/.test(s.charAt(p)); )
                            p += 1;
                          return p < s.length;
                        }
                        for (; p < s.length; ) {
                          for (o = p, l = !1; g(); )
                            if ((a = s.charAt(p)) === ',') {
                              for (
                                u = p, p += 1, g(), c = p;
                                p < s.length &&
                                (a = s.charAt(p)) !== '=' &&
                                a !== ';' &&
                                a !== ',';

                              )
                                p += 1;
                              p < s.length && s.charAt(p) === '='
                                ? ((l = !0),
                                  (p = c),
                                  d.push(s.substring(o, u)),
                                  (o = p))
                                : (p = u + 1);
                            } else p += 1;
                          (!l || p >= s.length) &&
                            d.push(s.substring(o, s.length));
                        }
                        return d;
                      })(i)
                    ),
                    (e[r] = n.length === 1 ? n[0] : n))
                  : (e[r] = i);
            return e;
          }
          function Si(t) {
            try {
              return String(new URL(String(t)));
            } catch (e) {
              throw Error(
                `URL is malformed "${String(
                  t
                )}". Please use only absolute URLs - https://nextjs.org/docs/messages/middleware-relative-urls`,
                { cause: e }
              );
            }
          }
          let zs = Symbol('response'),
            Ws = Symbol('passThrough'),
            _i = Symbol('waitUntil');
          class uu {
            constructor(e) {
              (this[_i] = []), (this[Ws] = !1);
            }
            respondWith(e) {
              this[zs] || (this[zs] = Promise.resolve(e));
            }
            passThroughOnException() {
              this[Ws] = !0;
            }
            waitUntil(e) {
              this[_i].push(e);
            }
          }
          class cu extends uu {
            constructor(e) {
              super(e.request), (this.sourcePage = e.page);
            }
            get request() {
              throw new Kn({ page: this.sourcePage });
            }
            respondWith() {
              throw new Kn({ page: this.sourcePage });
            }
          }
          function Xs(t) {
            return t.replace(/\/$/, '') || '/';
          }
          function Ii(t) {
            let e = t.indexOf('#'),
              n = t.indexOf('?'),
              r = n > -1 && (e < 0 || n < e);
            return r || e > -1
              ? {
                  pathname: t.substring(0, r ? n : e),
                  query: r ? t.substring(n, e > -1 ? e : void 0) : '',
                  hash: e > -1 ? t.slice(e) : '',
                }
              : { pathname: t, query: '', hash: '' };
          }
          function Oi(t, e) {
            if (!t.startsWith('/') || !e) return t;
            let { pathname: n, query: r, hash: i } = Ii(t);
            return '' + e + n + r + i;
          }
          function Zs(t, e) {
            if (!t.startsWith('/') || !e) return t;
            let { pathname: n, query: r, hash: i } = Ii(t);
            return '' + n + e + r + i;
          }
          function Sr(t, e) {
            if (typeof t != 'string') return !1;
            let { pathname: n } = Ii(t);
            return n === e || n.startsWith(e + '/');
          }
          function ea(t, e) {
            let n,
              r = t.split('/');
            return (
              (e || []).some(
                (i) =>
                  !!r[1] &&
                  r[1].toLowerCase() === i.toLowerCase() &&
                  ((n = i), r.splice(1, 1), (t = r.join('/') || '/'), !0)
              ),
              { pathname: t, detectedLocale: n }
            );
          }
          let ta =
            /(?!^https?:\/\/)(127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}|\[::1\]|localhost)/;
          function na(t, e) {
            return new URL(
              String(t).replace(ta, 'localhost'),
              e && String(e).replace(ta, 'localhost')
            );
          }
          let Te = Symbol('NextURLInternal');
          class vn {
            constructor(e, n, r) {
              let i, s;
              (typeof n == 'object' && 'pathname' in n) || typeof n == 'string'
                ? ((i = n), (s = r || {}))
                : (s = r || n || {}),
                (this[Te] = {
                  url: na(e, i ?? s.base),
                  options: s,
                  basePath: '',
                }),
                this.analyze();
            }
            analyze() {
              var e, n, r, i, s;
              let o = (function (c, l) {
                  var d, p;
                  let {
                      basePath: g,
                      i18n: h,
                      trailingSlash: S,
                    } = (d = l.nextConfig) != null ? d : {},
                    I = {
                      pathname: c,
                      trailingSlash: c !== '/' ? c.endsWith('/') : S,
                    };
                  g &&
                    Sr(I.pathname, g) &&
                    ((I.pathname = (function (R, A) {
                      if (!Sr(R, A)) return R;
                      let O = R.slice(A.length);
                      return O.startsWith('/') ? O : '/' + O;
                    })(I.pathname, g)),
                    (I.basePath = g));
                  let w = I.pathname;
                  if (
                    I.pathname.startsWith('/_next/data/') &&
                    I.pathname.endsWith('.json')
                  ) {
                    let R = I.pathname
                        .replace(/^\/_next\/data\//, '')
                        .replace(/\.json$/, '')
                        .split('/'),
                      A = R[0];
                    (I.buildId = A),
                      (w = R[1] !== 'index' ? '/' + R.slice(1).join('/') : '/'),
                      l.parseData === !0 && (I.pathname = w);
                  }
                  if (h) {
                    let R = l.i18nProvider
                      ? l.i18nProvider.analyze(I.pathname)
                      : ea(I.pathname, h.locales);
                    (I.locale = R.detectedLocale),
                      (I.pathname = (p = R.pathname) != null ? p : I.pathname),
                      !R.detectedLocale &&
                        I.buildId &&
                        (R = l.i18nProvider
                          ? l.i18nProvider.analyze(w)
                          : ea(w, h.locales)).detectedLocale &&
                        (I.locale = R.detectedLocale);
                  }
                  return I;
                })(this[Te].url.pathname, {
                  nextConfig: this[Te].options.nextConfig,
                  parseData: !0,
                  i18nProvider: this[Te].options.i18nProvider,
                }),
                a = (function (c, l) {
                  let d;
                  if (l?.host && !Array.isArray(l.host))
                    d = l.host.toString().split(':', 1)[0];
                  else {
                    if (!c.hostname) return;
                    d = c.hostname;
                  }
                  return d.toLowerCase();
                })(this[Te].url, this[Te].options.headers);
              this[Te].domainLocale = this[Te].options.i18nProvider
                ? this[Te].options.i18nProvider.detectDomainLocale(a)
                : (function (c, l, d) {
                    if (c)
                      for (let h of (d && (d = d.toLowerCase()), c)) {
                        var p, g;
                        if (
                          l ===
                            ((p = h.domain) == null
                              ? void 0
                              : p.split(':', 1)[0].toLowerCase()) ||
                          d === h.defaultLocale.toLowerCase() ||
                          ((g = h.locales) == null
                            ? void 0
                            : g.some((S) => S.toLowerCase() === d))
                        )
                          return h;
                      }
                  })(
                    (n = this[Te].options.nextConfig) == null ||
                      (e = n.i18n) == null
                      ? void 0
                      : e.domains,
                    a
                  );
              let u =
                ((r = this[Te].domainLocale) == null
                  ? void 0
                  : r.defaultLocale) ||
                ((s = this[Te].options.nextConfig) == null ||
                (i = s.i18n) == null
                  ? void 0
                  : i.defaultLocale);
              (this[Te].url.pathname = o.pathname),
                (this[Te].defaultLocale = u),
                (this[Te].basePath = o.basePath ?? ''),
                (this[Te].buildId = o.buildId),
                (this[Te].locale = o.locale ?? u),
                (this[Te].trailingSlash = o.trailingSlash);
            }
            formatPathname() {
              var e;
              let n;
              return (
                (n = (function (r, i, s, o) {
                  if (!i || i === s) return r;
                  let a = r.toLowerCase();
                  return !o && (Sr(a, '/api') || Sr(a, '/' + i.toLowerCase()))
                    ? r
                    : Oi(r, '/' + i);
                })(
                  (e = {
                    basePath: this[Te].basePath,
                    buildId: this[Te].buildId,
                    defaultLocale: this[Te].options.forceLocale
                      ? void 0
                      : this[Te].defaultLocale,
                    locale: this[Te].locale,
                    pathname: this[Te].url.pathname,
                    trailingSlash: this[Te].trailingSlash,
                  }).pathname,
                  e.locale,
                  e.buildId ? void 0 : e.defaultLocale,
                  e.ignorePrefix
                )),
                (e.buildId || !e.trailingSlash) && (n = Xs(n)),
                e.buildId &&
                  (n = Zs(
                    Oi(n, '/_next/data/' + e.buildId),
                    e.pathname === '/' ? 'index.json' : '.json'
                  )),
                (n = Oi(n, e.basePath)),
                !e.buildId && e.trailingSlash
                  ? n.endsWith('/')
                    ? n
                    : Zs(n, '/')
                  : Xs(n)
              );
            }
            formatSearch() {
              return this[Te].url.search;
            }
            get buildId() {
              return this[Te].buildId;
            }
            set buildId(e) {
              this[Te].buildId = e;
            }
            get locale() {
              return this[Te].locale ?? '';
            }
            set locale(e) {
              var n, r;
              if (
                !this[Te].locale ||
                !(
                  !(
                    (r = this[Te].options.nextConfig) == null ||
                    (n = r.i18n) == null
                  ) && n.locales.includes(e)
                )
              )
                throw TypeError(
                  `The NextURL configuration includes no locale "${e}"`
                );
              this[Te].locale = e;
            }
            get defaultLocale() {
              return this[Te].defaultLocale;
            }
            get domainLocale() {
              return this[Te].domainLocale;
            }
            get searchParams() {
              return this[Te].url.searchParams;
            }
            get host() {
              return this[Te].url.host;
            }
            set host(e) {
              this[Te].url.host = e;
            }
            get hostname() {
              return this[Te].url.hostname;
            }
            set hostname(e) {
              this[Te].url.hostname = e;
            }
            get port() {
              return this[Te].url.port;
            }
            set port(e) {
              this[Te].url.port = e;
            }
            get protocol() {
              return this[Te].url.protocol;
            }
            set protocol(e) {
              this[Te].url.protocol = e;
            }
            get href() {
              let e = this.formatPathname(),
                n = this.formatSearch();
              return `${this.protocol}//${this.host}${e}${n}${this.hash}`;
            }
            set href(e) {
              (this[Te].url = na(e)), this.analyze();
            }
            get origin() {
              return this[Te].url.origin;
            }
            get pathname() {
              return this[Te].url.pathname;
            }
            set pathname(e) {
              this[Te].url.pathname = e;
            }
            get hash() {
              return this[Te].url.hash;
            }
            set hash(e) {
              this[Te].url.hash = e;
            }
            get search() {
              return this[Te].url.search;
            }
            set search(e) {
              this[Te].url.search = e;
            }
            get password() {
              return this[Te].url.password;
            }
            set password(e) {
              this[Te].url.password = e;
            }
            get username() {
              return this[Te].url.username;
            }
            set username(e) {
              this[Te].url.username = e;
            }
            get basePath() {
              return this[Te].basePath;
            }
            set basePath(e) {
              this[Te].basePath = e.startsWith('/') ? e : `/${e}`;
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
              return new vn(String(this), this[Te].options);
            }
          }
          var kn = ue(109);
          let Mn = Symbol('internal request');
          class du extends Request {
            constructor(e, n = {}) {
              let r = typeof e != 'string' && 'url' in e ? e.url : String(e);
              Si(r), e instanceof Request ? super(e, n) : super(r, n);
              let i = new vn(r, {
                headers: Hs(this.headers),
                nextConfig: n.nextConfig,
              });
              this[Mn] = {
                cookies: new kn.RequestCookies(this.headers),
                geo: n.geo || {},
                ip: n.ip,
                nextUrl: i,
                url: i.toString(),
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
              return this[Mn].cookies;
            }
            get geo() {
              return this[Mn].geo;
            }
            get ip() {
              return this[Mn].ip;
            }
            get nextUrl() {
              return this[Mn].nextUrl;
            }
            get page() {
              throw new ou();
            }
            get ua() {
              throw new lu();
            }
            get url() {
              return this[Mn].url;
            }
          }
          let ra = Symbol('internal response'),
            pu = new Set([301, 302, 303, 307, 308]);
          function ia(t, e) {
            var n;
            if (!(t == null || (n = t.request) == null) && n.headers) {
              if (!(t.request.headers instanceof Headers))
                throw Error('request.headers must be an instance of Headers');
              let r = [];
              for (let [i, s] of t.request.headers)
                e.set('x-middleware-request-' + i, s), r.push(i);
              e.set('x-middleware-override-headers', r.join(','));
            }
          }
          class yn extends Response {
            constructor(e, n = {}) {
              super(e, n),
                (this[ra] = {
                  cookies: new kn.ResponseCookies(this.headers),
                  url: n.url
                    ? new vn(n.url, {
                        headers: Hs(this.headers),
                        nextConfig: n.nextConfig,
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
              return this[ra].cookies;
            }
            static json(e, n) {
              let r = Response.json(e, n);
              return new yn(r.body, r);
            }
            static redirect(e, n) {
              let r = typeof n == 'number' ? n : n?.status ?? 307;
              if (!pu.has(r))
                throw RangeError(
                  'Failed to execute "redirect" on "response": Invalid status code'
                );
              let i = typeof n == 'object' ? n : {},
                s = new Headers(i?.headers);
              return (
                s.set('Location', Si(e)),
                new yn(null, { ...i, headers: s, status: r })
              );
            }
            static rewrite(e, n) {
              let r = new Headers(n?.headers);
              return (
                r.set('x-middleware-rewrite', Si(e)),
                ia(n, r),
                new yn(null, { ...n, headers: r })
              );
            }
            static next(e) {
              let n = new Headers(e?.headers);
              return (
                n.set('x-middleware-next', '1'),
                ia(e, n),
                new yn(null, { ...e, headers: n })
              );
            }
          }
          function sa(t, e) {
            let n = typeof e == 'string' ? new URL(e) : e,
              r = new URL(t, e),
              i = n.protocol + '//' + n.host;
            return r.protocol + '//' + r.host === i
              ? r.toString().replace(i, '')
              : r.toString();
          }
          let aa = [
            ['RSC'],
            ['Next-Router-State-Tree'],
            ['Next-Router-Prefetch'],
          ];
          ue(636);
          let wi = {
            client: 'client',
            server: 'server',
            edgeServer: 'edge-server',
          };
          wi.client, wi.server, wi.edgeServer, Symbol('polyfills');
          let fu = [
              '__nextFallback',
              '__nextLocale',
              '__nextInferredLocaleFromDefault',
              '__nextDefaultLocale',
              '__nextIsNotFound',
              '_rsc',
            ],
            hu = ['__nextDataReq'];
          function oa(t) {
            return t.startsWith('/') ? t : '/' + t;
          }
          let Ai = 'nxtP',
            la = 'x-prerender-revalidate',
            ua = '.meta',
            ca = 'x-next-revalidated-tags',
            ht = {
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
            ...ht,
            GROUP:
              (ht.reactServerComponents,
              ht.actionBrowser,
              ht.appMetadataRoute,
              ht.appRouteHandler,
              ht.middleware,
              ht.api,
              ht.reactServerComponents,
              ht.actionBrowser,
              ht.appMetadataRoute,
              ht.appRouteHandler,
              ht.serverSideRendering,
              ht.appPagesBrowser),
          });
          class xt {
            static get(e, n, r) {
              let i = Reflect.get(e, n, r);
              return typeof i == 'function' ? i.bind(e) : i;
            }
            static set(e, n, r, i) {
              return Reflect.set(e, n, r, i);
            }
            static has(e, n) {
              return Reflect.has(e, n);
            }
            static deleteProperty(e, n) {
              return Reflect.deleteProperty(e, n);
            }
          }
          class xi extends Error {
            constructor() {
              super(
                'Headers cannot be modified. Read more: https://nextjs.org/docs/app/api-reference/functions/headers'
              );
            }
            static callable() {
              throw new xi();
            }
          }
          class Tn extends Headers {
            constructor(e) {
              super(),
                (this.headers = new Proxy(e, {
                  get(n, r, i) {
                    if (typeof r == 'symbol') return xt.get(n, r, i);
                    let s = r.toLowerCase(),
                      o = Object.keys(e).find((a) => a.toLowerCase() === s);
                    if (o !== void 0) return xt.get(n, o, i);
                  },
                  set(n, r, i, s) {
                    if (typeof r == 'symbol') return xt.set(n, r, i, s);
                    let o = r.toLowerCase(),
                      a = Object.keys(e).find((u) => u.toLowerCase() === o);
                    return xt.set(n, a ?? r, i, s);
                  },
                  has(n, r) {
                    if (typeof r == 'symbol') return xt.has(n, r);
                    let i = r.toLowerCase(),
                      s = Object.keys(e).find((o) => o.toLowerCase() === i);
                    return s !== void 0 && xt.has(n, s);
                  },
                  deleteProperty(n, r) {
                    if (typeof r == 'symbol') return xt.deleteProperty(n, r);
                    let i = r.toLowerCase(),
                      s = Object.keys(e).find((o) => o.toLowerCase() === i);
                    return s === void 0 || xt.deleteProperty(n, s);
                  },
                }));
            }
            static seal(e) {
              return new Proxy(e, {
                get(n, r, i) {
                  switch (r) {
                    case 'append':
                    case 'delete':
                    case 'set':
                      return xi.callable;
                    default:
                      return xt.get(n, r, i);
                  }
                },
              });
            }
            merge(e) {
              return Array.isArray(e) ? e.join(', ') : e;
            }
            static from(e) {
              return e instanceof Headers ? e : new Tn(e);
            }
            append(e, n) {
              let r = this.headers[e];
              typeof r == 'string'
                ? (this.headers[e] = [r, n])
                : Array.isArray(r)
                ? r.push(n)
                : (this.headers[e] = n);
            }
            delete(e) {
              delete this.headers[e];
            }
            get(e) {
              let n = this.headers[e];
              return n !== void 0 ? this.merge(n) : null;
            }
            has(e) {
              return this.headers[e] !== void 0;
            }
            set(e, n) {
              this.headers[e] = n;
            }
            forEach(e, n) {
              for (let [r, i] of this.entries()) e.call(n, i, r, this);
            }
            *entries() {
              for (let e of Object.keys(this.headers)) {
                let n = e.toLowerCase(),
                  r = this.get(n);
                yield [n, r];
              }
            }
            *keys() {
              for (let e of Object.keys(this.headers)) yield e.toLowerCase();
            }
            *values() {
              for (let e of Object.keys(this.headers)) yield this.get(e);
            }
            [Symbol.iterator]() {
              return this.entries();
            }
          }
          class Ci extends Error {
            constructor() {
              super(
                'Cookies can only be modified in a Server Action or Route Handler. Read more: https://nextjs.org/docs/app/api-reference/functions/cookies#cookiessetname-value-options'
              );
            }
            static callable() {
              throw new Ci();
            }
          }
          class mu {
            static seal(e) {
              return new Proxy(e, {
                get(n, r, i) {
                  switch (r) {
                    case 'clear':
                    case 'delete':
                    case 'set':
                      return Ci.callable;
                    default:
                      return xt.get(n, r, i);
                  }
                },
              });
            }
          }
          let gu = Symbol.for('next.mutated.cookies');
          class vu {
            static wrap(e, n) {
              let r = new kn.ResponseCookies(new Headers());
              for (let a of e.getAll()) r.set(a);
              let i = [],
                s = new Set(),
                o = () => {
                  var a;
                  let u =
                    fetch.__nextGetStaticStore == null ||
                    (a = fetch.__nextGetStaticStore.call(fetch)) == null
                      ? void 0
                      : a.getStore();
                  if (
                    (u && (u.pathWasRevalidated = !0),
                    (i = r.getAll().filter((c) => s.has(c.name))),
                    n)
                  ) {
                    let c = [];
                    for (let l of i) {
                      let d = new kn.ResponseCookies(new Headers());
                      d.set(l), c.push(d.toString());
                    }
                    n(c);
                  }
                };
              return new Proxy(r, {
                get(a, u, c) {
                  switch (u) {
                    case gu:
                      return i;
                    case 'delete':
                      return function (...l) {
                        s.add(typeof l[0] == 'string' ? l[0] : l[0].name);
                        try {
                          a.delete(...l);
                        } finally {
                          o();
                        }
                      };
                    case 'set':
                      return function (...l) {
                        s.add(typeof l[0] == 'string' ? l[0] : l[0].name);
                        try {
                          return a.set(...l);
                        } finally {
                          o();
                        }
                      };
                    default:
                      return xt.get(a, u, c);
                  }
                },
              });
            }
          }
          let _r = '__prerender_bypass';
          Symbol('__next_preview_data'), Symbol(_r);
          class yu {
            constructor(e, n, r, i) {
              var s;
              let o =
                  e &&
                  (function (u, c) {
                    let l = Tn.from(u.headers);
                    return {
                      isOnDemandRevalidate: l.get(la) === c.previewModeId,
                      revalidateOnlyGenerated: l.has(
                        'x-prerender-revalidate-if-generated'
                      ),
                    };
                  })(n, e).isOnDemandRevalidate,
                a = (s = r.get(_r)) == null ? void 0 : s.value;
              (this.isEnabled = !!(!o && a && e && a === e.previewModeId)),
                (this._previewModeId = e?.previewModeId),
                (this._mutableCookies = i);
            }
            enable() {
              if (!this._previewModeId)
                throw Error(
                  'Invariant: previewProps missing previewModeId this should never happen'
                );
              this._mutableCookies.set({
                name: _r,
                value: this._previewModeId,
                httpOnly: !0,
                sameSite: 'none',
                secure: !0,
                path: '/',
              });
            }
            disable() {
              this._mutableCookies.set({
                name: _r,
                value: '',
                httpOnly: !0,
                sameSite: 'none',
                secure: !0,
                path: '/',
                expires: new Date(0),
              });
            }
          }
          let Tu = {
              wrap(t, { req: e, res: n, renderOpts: r }, i) {
                let s;
                function o(c) {
                  n && n.setHeader('Set-Cookie', c);
                }
                r && 'previewProps' in r && (s = r.previewProps);
                let a = {},
                  u = {
                    get headers() {
                      return (
                        a.headers ||
                          (a.headers = (function (c) {
                            let l = Tn.from(c);
                            for (let d of aa)
                              l.delete(d.toString().toLowerCase());
                            return Tn.seal(l);
                          })(e.headers)),
                        a.headers
                      );
                    },
                    get cookies() {
                      return (
                        a.cookies ||
                          (a.cookies = (function (c) {
                            let l = new kn.RequestCookies(Tn.from(c));
                            return mu.seal(l);
                          })(e.headers)),
                        a.cookies
                      );
                    },
                    get mutableCookies() {
                      return (
                        a.mutableCookies ||
                          (a.mutableCookies = (function (c, l) {
                            let d = new kn.RequestCookies(Tn.from(c));
                            return vu.wrap(d, l);
                          })(
                            e.headers,
                            r?.onUpdateCookies || (n ? o : void 0)
                          )),
                        a.mutableCookies
                      );
                    },
                    get draftMode() {
                      return (
                        a.draftMode ||
                          (a.draftMode = new yu(
                            s,
                            e,
                            this.cookies,
                            this.mutableCookies
                          )),
                        a.draftMode
                      );
                    },
                  };
                return t.run(u, i, u);
              },
            },
            Ir = Error(
              'Invariant: AsyncLocalStorage accessed in runtime where it is not available'
            );
          class bu {
            disable() {
              throw Ir;
            }
            getStore() {}
            run() {
              throw Ir;
            }
            exit() {
              throw Ir;
            }
            enterWith() {
              throw Ir;
            }
          }
          let da = Le.AsyncLocalStorage,
            Eu = da ? new da() : new bu();
          (function (t) {
            (t.handleRequest = 'BaseServer.handleRequest'),
              (t.run = 'BaseServer.run'),
              (t.pipe = 'BaseServer.pipe'),
              (t.getStaticHTML = 'BaseServer.getStaticHTML'),
              (t.render = 'BaseServer.render'),
              (t.renderToResponseWithComponents =
                'BaseServer.renderToResponseWithComponents'),
              (t.renderToResponse = 'BaseServer.renderToResponse'),
              (t.renderToHTML = 'BaseServer.renderToHTML'),
              (t.renderError = 'BaseServer.renderError'),
              (t.renderErrorToResponse = 'BaseServer.renderErrorToResponse'),
              (t.renderErrorToHTML = 'BaseServer.renderErrorToHTML'),
              (t.render404 = 'BaseServer.render404');
          })(N || (N = {})),
            (function (t) {
              (t.loadDefaultErrorComponents =
                'LoadComponents.loadDefaultErrorComponents'),
                (t.loadComponents = 'LoadComponents.loadComponents');
            })(C || (C = {})),
            (function (t) {
              (t.getRequestHandler = 'NextServer.getRequestHandler'),
                (t.getServer = 'NextServer.getServer'),
                (t.getServerRequestHandler =
                  'NextServer.getServerRequestHandler'),
                (t.createServer = 'createServer.createServer');
            })(x || (x = {})),
            (function (t) {
              (t.compression = 'NextNodeServer.compression'),
                (t.getBuildId = 'NextNodeServer.getBuildId'),
                (t.generateStaticRoutes =
                  'NextNodeServer.generateStaticRoutes'),
                (t.generateFsStaticRoutes =
                  'NextNodeServer.generateFsStaticRoutes'),
                (t.generatePublicRoutes =
                  'NextNodeServer.generatePublicRoutes'),
                (t.generateImageRoutes =
                  'NextNodeServer.generateImageRoutes.route'),
                (t.sendRenderResult = 'NextNodeServer.sendRenderResult'),
                (t.proxyRequest = 'NextNodeServer.proxyRequest'),
                (t.runApi = 'NextNodeServer.runApi'),
                (t.render = 'NextNodeServer.render'),
                (t.renderHTML = 'NextNodeServer.renderHTML'),
                (t.imageOptimizer = 'NextNodeServer.imageOptimizer'),
                (t.getPagePath = 'NextNodeServer.getPagePath'),
                (t.getRoutesManifest = 'NextNodeServer.getRoutesManifest'),
                (t.findPageComponents = 'NextNodeServer.findPageComponents'),
                (t.getFontManifest = 'NextNodeServer.getFontManifest'),
                (t.getServerComponentManifest =
                  'NextNodeServer.getServerComponentManifest'),
                (t.getRequestHandler = 'NextNodeServer.getRequestHandler'),
                (t.renderToHTML = 'NextNodeServer.renderToHTML'),
                (t.renderError = 'NextNodeServer.renderError'),
                (t.renderErrorToHTML = 'NextNodeServer.renderErrorToHTML'),
                (t.render404 = 'NextNodeServer.render404'),
                (t.route = 'route'),
                (t.onProxyReq = 'onProxyReq'),
                (t.apiResolver = 'apiResolver'),
                (t.internalFetch = 'internalFetch');
            })(L || (L = {})),
            (($ || ($ = {})).startServer = 'startServer.startServer'),
            (function (t) {
              (t.getServerSideProps = 'Render.getServerSideProps'),
                (t.getStaticProps = 'Render.getStaticProps'),
                (t.renderToString = 'Render.renderToString'),
                (t.renderDocument = 'Render.renderDocument'),
                (t.createBodyResult = 'Render.createBodyResult');
            })(K || (K = {})),
            (function (t) {
              (t.renderToString = 'AppRender.renderToString'),
                (t.renderToReadableStream = 'AppRender.renderToReadableStream'),
                (t.getBodyResult = 'AppRender.getBodyResult'),
                (t.fetch = 'AppRender.fetch');
            })(te || (te = {})),
            ((me || (me = {})).executeRoute = 'Router.executeRoute'),
            ((ye || (ye = {})).runHandler = 'Node.runHandler'),
            ((_e || (_e = {})).runHandler = 'AppRouteRouteHandlers.runHandler'),
            (function (t) {
              (t.generateMetadata = 'ResolveMetadata.generateMetadata'),
                (t.generateViewport = 'ResolveMetadata.generateViewport');
            })(ne || (ne = {}));
          let pa = [
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
              context: Kt,
              propagation: Nu,
              trace: Jn,
              SpanStatusCode: Su,
              SpanKind: Mp,
              ROOT_CONTEXT: _u,
            } = (pe = ue(855)),
            Iu = (t) =>
              t !== null && typeof t == 'object' && typeof t.then == 'function',
            Di = (t, e) => {
              e?.bubble === !0
                ? t.setAttribute('next.bubble', !0)
                : (e && t.recordException(e),
                  t.setStatus({ code: Su.ERROR, message: e?.message })),
                t.end();
            },
            Ri = new Map(),
            fa = pe.createContextKey('next.rootSpanId'),
            Ou = 0,
            wu = () => Ou++;
          class Au {
            getTracerInstance() {
              return Jn.getTracer('next.js', '0.0.1');
            }
            getContext() {
              return Kt;
            }
            getActiveScopeSpan() {
              return Jn.getSpan(Kt?.active());
            }
            withPropagatedContext(e, n, r) {
              let i = Kt.active();
              if (Jn.getSpanContext(i)) return n();
              let s = Nu.extract(i, e, r);
              return Kt.with(s, n);
            }
            trace(...e) {
              var n;
              let [r, i, s] = e,
                { fn: o, options: a } =
                  typeof i == 'function'
                    ? { fn: i, options: {} }
                    : { fn: s, options: { ...i } };
              if (
                (!pa.includes(r) && process.env.NEXT_OTEL_VERBOSE !== '1') ||
                a.hideSpan
              )
                return o();
              let u = a.spanName ?? r,
                c = this.getSpanContext(
                  a?.parentSpan ?? this.getActiveScopeSpan()
                ),
                l = !1;
              c
                ? (n = Jn.getSpanContext(c)) != null && n.isRemote && (l = !0)
                : ((c = _u), (l = !0));
              let d = wu();
              return (
                (a.attributes = {
                  'next.span_name': u,
                  'next.span_type': r,
                  ...a.attributes,
                }),
                Kt.with(c.setValue(fa, d), () =>
                  this.getTracerInstance().startActiveSpan(u, a, (p) => {
                    let g = () => {
                      Ri.delete(d);
                    };
                    l && Ri.set(d, new Map(Object.entries(a.attributes ?? {})));
                    try {
                      if (o.length > 1) return o(p, (S) => Di(p, S));
                      let h = o(p);
                      return (
                        Iu(h)
                          ? h
                              .then(
                                () => p.end(),
                                (S) => Di(p, S)
                              )
                              .finally(g)
                          : (p.end(), g()),
                        h
                      );
                    } catch (h) {
                      throw (Di(p, h), g(), h);
                    }
                  })
                )
              );
            }
            wrap(...e) {
              let n = this,
                [r, i, s] = e.length === 3 ? e : [e[0], {}, e[1]];
              return pa.includes(r) || process.env.NEXT_OTEL_VERBOSE === '1'
                ? function () {
                    let o = i;
                    typeof o == 'function' &&
                      typeof s == 'function' &&
                      (o = o.apply(this, arguments));
                    let a = arguments.length - 1,
                      u = arguments[a];
                    if (typeof u != 'function')
                      return n.trace(r, o, () => s.apply(this, arguments));
                    {
                      let c = n.getContext().bind(Kt.active(), u);
                      return n.trace(
                        r,
                        o,
                        (l, d) => (
                          (arguments[a] = function (p) {
                            return d?.(p), c.apply(this, arguments);
                          }),
                          s.apply(this, arguments)
                        )
                      );
                    }
                  }
                : s;
            }
            startSpan(...e) {
              let [n, r] = e,
                i = this.getSpanContext(
                  r?.parentSpan ?? this.getActiveScopeSpan()
                );
              return this.getTracerInstance().startSpan(n, r, i);
            }
            getSpanContext(e) {
              return e ? Jn.setSpan(Kt.active(), e) : void 0;
            }
            getRootSpanAttributes() {
              let e = Kt.active().getValue(fa);
              return Ri.get(e);
            }
          }
          let xu = (() => {
            let t = new Au();
            return () => t;
          })();
          class Cu extends du {
            constructor(e) {
              super(e.input, e.init), (this.sourcePage = e.page);
            }
            get request() {
              throw new Kn({ page: this.sourcePage });
            }
            respondWith() {
              throw new Kn({ page: this.sourcePage });
            }
            waitUntil() {
              throw new Kn({ page: this.sourcePage });
            }
          }
          let Du = {
              keys: (t) => Array.from(t.keys()),
              get: (t, e) => t.get(e) ?? void 0,
            },
            Pi = (t, e) => xu().withPropagatedContext(t.headers, e, Du),
            ha = !1;
          async function Ru(t) {
            let e, n;
            (function () {
              if (
                !ha &&
                ((ha = !0), process.env.NEXT_PRIVATE_TEST_PROXY === 'true')
              ) {
                let { interceptTestApis: w, wrapRequestHandler: R } = ue(878);
                w(), (Pi = R(Pi));
              }
            })(),
              await Js();
            let r = Qe.__BUILD_MANIFEST !== void 0,
              i =
                typeof Qe.__PRERENDER_MANIFEST == 'string'
                  ? JSON.parse(Qe.__PRERENDER_MANIFEST)
                  : void 0;
            t.request.url = t.request.url.replace(/\.rsc($|\?)/, '$1');
            let s = new vn(t.request.url, {
              headers: t.request.headers,
              nextConfig: t.request.nextConfig,
            });
            for (let w of [...s.searchParams.keys()]) {
              let R = s.searchParams.getAll(w);
              if (w !== Ai && w.startsWith(Ai)) {
                let A = w.substring(Ai.length);
                for (let O of (s.searchParams.delete(A), R))
                  s.searchParams.append(A, O);
                s.searchParams.delete(w);
              }
            }
            let o = s.buildId;
            s.buildId = '';
            let a = t.request.headers['x-nextjs-data'];
            a && s.pathname === '/index' && (s.pathname = '/');
            let u = (function (w) {
                let R = new Headers();
                for (let [A, O] of Object.entries(w))
                  for (let P of Array.isArray(O) ? O : [O])
                    P !== void 0 &&
                      (typeof P == 'number' && (P = P.toString()),
                      R.append(A, P));
                return R;
              })(t.request.headers),
              c = new Map();
            if (!r)
              for (let w of aa) {
                let R = w.toString().toLowerCase();
                u.get(R) && (c.set(R, u.get(R)), u.delete(R));
              }
            let l = new Cu({
              page: t.page,
              input: (function (w, R) {
                let A = typeof w == 'string',
                  O = A ? new URL(w) : w;
                for (let P of fu) O.searchParams.delete(P);
                if (R) for (let P of hu) O.searchParams.delete(P);
                return A ? O.toString() : O;
              })(s, !0).toString(),
              init: {
                body: t.request.body,
                geo: t.request.geo,
                headers: u,
                ip: t.request.ip,
                method: t.request.method,
                nextConfig: t.request.nextConfig,
                signal: t.request.signal,
              },
            });
            a &&
              Object.defineProperty(l, '__isData', {
                enumerable: !1,
                value: !0,
              }),
              !Le.__incrementalCache &&
                t.IncrementalCache &&
                (Le.__incrementalCache = new t.IncrementalCache({
                  appDir: !0,
                  fetchCache: !0,
                  minimalMode: !0,
                  fetchCacheKeyPrefix: void 0,
                  dev: !1,
                  requestHeaders: t.request.headers,
                  requestProtocol: 'https',
                  getPrerenderManifest: () => ({
                    version: -1,
                    routes: {},
                    dynamicRoutes: {},
                    notFoundRoutes: [],
                    preview: { previewModeId: 'development-id' },
                  }),
                }));
            let d = new cu({ request: l, page: t.page });
            if (
              (e = await Pi(l, () =>
                t.page === '/middleware' || t.page === '/src/middleware'
                  ? Tu.wrap(
                      Eu,
                      {
                        req: l,
                        renderOpts: {
                          onUpdateCookies: (w) => {
                            n = w;
                          },
                          previewProps: i?.preview || {
                            previewModeId: 'development-id',
                            previewModeEncryptionKey: '',
                            previewModeSigningKey: '',
                          },
                        },
                      },
                      () => t.handler(l, d)
                    )
                  : t.handler(l, d)
              )) &&
              !(e instanceof Response)
            )
              throw TypeError(
                'Expected an instance of Response to be returned'
              );
            e && n && e.headers.set('set-cookie', n);
            let p = e?.headers.get('x-middleware-rewrite');
            if (e && p) {
              let w = new vn(p, {
                forceLocale: !0,
                headers: t.request.headers,
                nextConfig: t.request.nextConfig,
              });
              w.host === l.nextUrl.host &&
                ((w.buildId = o || w.buildId),
                e.headers.set('x-middleware-rewrite', String(w)));
              let R = sa(String(w), String(s));
              a && e.headers.set('x-nextjs-rewrite', R);
            }
            let g = e?.headers.get('Location');
            if (e && g && !r) {
              let w = new vn(g, {
                forceLocale: !1,
                headers: t.request.headers,
                nextConfig: t.request.nextConfig,
              });
              (e = new Response(e.body, e)),
                w.host === l.nextUrl.host &&
                  ((w.buildId = o || w.buildId),
                  e.headers.set('Location', String(w))),
                a &&
                  (e.headers.delete('Location'),
                  e.headers.set('x-nextjs-redirect', sa(String(w), String(s))));
            }
            let h = e || yn.next(),
              S = h.headers.get('x-middleware-override-headers'),
              I = [];
            if (S) {
              for (let [w, R] of c)
                h.headers.set(`x-middleware-request-${w}`, R), I.push(w);
              I.length > 0 &&
                h.headers.set(
                  'x-middleware-override-headers',
                  S + ',' + I.join(',')
                );
            }
            return {
              response: h,
              waitUntil: Promise.all(d[_i]),
              fetchMetrics: l.fetchMetrics,
            };
          }
          var Pu = ue(87),
            ma = ue.n(Pu);
          let bn = 0,
            ga = 'x-vercel-cache-tags',
            Li = 'x-vercel-sc-headers',
            va = 'x-vercel-revalidate',
            ya = 'x-vercel-cache-item-name';
          class Ta {
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
                Li in e._requestHeaders)
              ) {
                let i = JSON.parse(e._requestHeaders[Li]);
                for (let s in i) this.headers[s] = i[s];
                delete e._requestHeaders[Li];
              }
              let n =
                  e._requestHeaders['x-vercel-sc-host'] ||
                  process.env.SUSPENSE_CACHE_URL,
                r =
                  e._requestHeaders['x-vercel-sc-basepath'] ||
                  process.env.SUSPENSE_CACHE_BASEPATH;
              process.env.SUSPENSE_CACHE_AUTH_TOKEN &&
                (this.headers.Authorization = `Bearer ${process.env.SUSPENSE_CACHE_AUTH_TOKEN}`),
                n
                  ? ((this.cacheEndpoint = `https://${n}${r || ''}`),
                    this.debug &&
                      console.log('using cache endpoint', this.cacheEndpoint))
                  : this.debug && console.log('no cache endpoint available'),
                e.maxMemoryCacheSize
                  ? be ||
                    (this.debug &&
                      console.log('using memory store for fetch cache'),
                    (be = new (ma())({
                      max: e.maxMemoryCacheSize,
                      length({ value: i }) {
                        var s;
                        if (!i) return 25;
                        if (i.kind === 'REDIRECT')
                          return JSON.stringify(i.props).length;
                        if (i.kind === 'IMAGE')
                          throw Error(
                            'invariant image should not be incremental-cache'
                          );
                        return i.kind === 'FETCH'
                          ? JSON.stringify(i.data || '').length
                          : i.kind === 'ROUTE'
                          ? i.body.length
                          : i.html.length +
                            (((s = JSON.stringify(i.pageData)) == null
                              ? void 0
                              : s.length) || 0);
                      },
                    })))
                  : this.debug &&
                    console.log('not using memory store for fetch cache');
            }
            async revalidateTag(e) {
              if (
                (this.debug && console.log('revalidateTag', e), Date.now() < bn)
              ) {
                this.debug && console.log('rate limited ', bn);
                return;
              }
              try {
                let n = await fetch(
                  `${this.cacheEndpoint}/v1/suspense-cache/revalidate?tags=${e}`,
                  {
                    method: 'POST',
                    headers: this.headers,
                    next: { internal: !0 },
                  }
                );
                if (n.status === 429) {
                  let r = n.headers.get('retry-after') || '60000';
                  bn = Date.now() + parseInt(r);
                }
                if (!n.ok)
                  throw Error(`Request failed with status ${n.status}.`);
              } catch (n) {
                console.warn(`Failed to revalidate tag ${e}`, n);
              }
            }
            async get(...e) {
              let [n, r = {}] = e,
                {
                  tags: i,
                  softTags: s,
                  kindHint: o,
                  fetchIdx: a,
                  fetchUrl: u,
                } = r;
              if (o !== 'fetch') return null;
              if (Date.now() < bn)
                return this.debug && console.log('rate limited'), null;
              let c = be?.get(n);
              if (
                (Date.now() - (c?.lastModified || 0) > 2e3 && (c = void 0),
                !c && this.cacheEndpoint)
              )
                try {
                  let l = Date.now(),
                    d = await fetch(
                      `${this.cacheEndpoint}/v1/suspense-cache/${n}`,
                      {
                        method: 'GET',
                        headers: {
                          ...this.headers,
                          [ya]: u,
                          [ga]: i?.join(',') || '',
                          'x-next-cache-soft-tags': s?.join(',') || '',
                        },
                        next: {
                          internal: !0,
                          fetchType: 'cache-get',
                          fetchUrl: u,
                          fetchIdx: a,
                        },
                      }
                    );
                  if (d.status === 429) {
                    let S = d.headers.get('retry-after') || '60000';
                    bn = Date.now() + parseInt(S);
                  }
                  if (d.status === 404)
                    return (
                      this.debug &&
                        console.log(
                          `no fetch cache entry for ${n}, duration: ${
                            Date.now() - l
                          }ms`
                        ),
                      null
                    );
                  if (!d.ok)
                    throw (
                      (console.error(await d.text()),
                      Error(`invalid response from cache ${d.status}`))
                    );
                  let p = await d.json();
                  if (!p || p.kind !== 'FETCH')
                    throw (
                      (this.debug && console.log({ cached: p }),
                      Error('invalid cache value'))
                    );
                  let g = d.headers.get('x-vercel-cache-state'),
                    h = d.headers.get('age');
                  (c = {
                    value: p,
                    lastModified:
                      g !== 'fresh'
                        ? Date.now() - 31536e3
                        : Date.now() - 1e3 * parseInt(h || '0', 10),
                  }),
                    this.debug &&
                      console.log(
                        `got fetch cache entry for ${n}, duration: ${
                          Date.now() - l
                        }ms, size: ${
                          Object.keys(p).length
                        }, cache-state: ${g} tags: ${i?.join(
                          ','
                        )} softTags: ${s?.join(',')}`
                      ),
                    c && be?.set(n, c);
                } catch (l) {
                  this.debug &&
                    console.error('Failed to get from fetch-cache', l);
                }
              return c || null;
            }
            async set(...e) {
              let [n, r, i] = e,
                { fetchCache: s, fetchIdx: o, fetchUrl: a, tags: u } = i;
              if (s) {
                if (Date.now() < bn) {
                  this.debug && console.log('rate limited');
                  return;
                }
                if (
                  (be?.set(n, { value: r, lastModified: Date.now() }),
                  this.cacheEndpoint)
                )
                  try {
                    let c = Date.now();
                    r !== null &&
                      'revalidate' in r &&
                      (this.headers[va] = r.revalidate.toString()),
                      !this.headers[va] &&
                        r !== null &&
                        'data' in r &&
                        (this.headers['x-vercel-cache-control'] =
                          r.data.headers['cache-control']);
                    let l = JSON.stringify({ ...r, tags: void 0 });
                    this.debug && console.log('set cache', n);
                    let d = await fetch(
                      `${this.cacheEndpoint}/v1/suspense-cache/${n}`,
                      {
                        method: 'POST',
                        headers: {
                          ...this.headers,
                          [ya]: a || '',
                          [ga]: u?.join(',') || '',
                        },
                        body: l,
                        next: {
                          internal: !0,
                          fetchType: 'cache-set',
                          fetchUrl: a,
                          fetchIdx: o,
                        },
                      }
                    );
                    if (d.status === 429) {
                      let p = d.headers.get('retry-after') || '60000';
                      bn = Date.now() + parseInt(p);
                    }
                    if (!d.ok)
                      throw (
                        (this.debug && console.log(await d.text()),
                        Error(`invalid response ${d.status}`))
                      );
                    this.debug &&
                      console.log(
                        `successfully set to fetch-cache for ${n}, duration: ${
                          Date.now() - c
                        }ms, size: ${l.length}`
                      );
                  } catch (c) {
                    this.debug &&
                      console.error('Failed to update fetch cache', c);
                  }
              }
            }
          }
          var Lu = ue(523),
            Jt = ue.n(Lu);
          class ku {
            constructor(e) {
              (this.fs = e.fs),
                (this.flushToDisk = e.flushToDisk),
                (this.serverDistDir = e.serverDistDir),
                (this.appDir = !!e._appDir),
                (this.pagesDir = !!e._pagesDir),
                (this.revalidatedTags = e.revalidatedTags),
                (this.experimental = e.experimental),
                (this.debug = !!process.env.NEXT_PRIVATE_DEBUG_CACHE),
                e.maxMemoryCacheSize && !W
                  ? (this.debug &&
                      console.log('using memory store for fetch cache'),
                    (W = new (ma())({
                      max: e.maxMemoryCacheSize,
                      length({ value: n }) {
                        var r;
                        if (!n) return 25;
                        if (n.kind === 'REDIRECT')
                          return JSON.stringify(n.props).length;
                        if (n.kind === 'IMAGE')
                          throw Error(
                            'invariant image should not be incremental-cache'
                          );
                        return n.kind === 'FETCH'
                          ? JSON.stringify(n.data || '').length
                          : n.kind === 'ROUTE'
                          ? n.body.length
                          : n.html.length +
                            (((r = JSON.stringify(n.pageData)) == null
                              ? void 0
                              : r.length) || 0);
                      },
                    })))
                  : this.debug &&
                    console.log('not using memory store for fetch cache'),
                this.serverDistDir &&
                  this.fs &&
                  ((this.tagsManifestPath = Jt().join(
                    this.serverDistDir,
                    '..',
                    'cache',
                    'fetch-cache',
                    'tags-manifest.json'
                  )),
                  this.loadTagsManifest());
            }
            loadTagsManifest() {
              if (this.tagsManifestPath && this.fs && !M) {
                try {
                  M = JSON.parse(
                    this.fs.readFileSync(this.tagsManifestPath, 'utf8')
                  );
                } catch {
                  M = { version: 1, items: {} };
                }
                this.debug && console.log('loadTagsManifest', M);
              }
            }
            async revalidateTag(e) {
              if (
                (this.debug && console.log('revalidateTag', e),
                this.loadTagsManifest(),
                !M || !this.tagsManifestPath)
              )
                return;
              let n = M.items[e] || {};
              (n.revalidatedAt = Date.now()), (M.items[e] = n);
              try {
                await this.fs.mkdir(Jt().dirname(this.tagsManifestPath)),
                  await this.fs.writeFile(
                    this.tagsManifestPath,
                    JSON.stringify(M || {})
                  ),
                  this.debug && console.log('Updated tags manifest', M);
              } catch (r) {
                console.warn('Failed to update tags manifest.', r);
              }
            }
            async get(...e) {
              var n, r, i;
              let [s, o = {}] = e,
                { tags: a, softTags: u, kindHint: c } = o,
                l = W?.get(s);
              if (
                (this.debug && console.log('get', s, a, c, !!l),
                (l == null || (n = l.value) == null ? void 0 : n.kind) ===
                  'PAGE')
              ) {
                let d,
                  p =
                    (i = l.value.headers) == null
                      ? void 0
                      : i['x-next-cache-tags'];
                typeof p == 'string' && (d = p.split(',')),
                  d?.length &&
                    (this.loadTagsManifest(),
                    d.some((g) => {
                      var h;
                      return (
                        (M == null || (h = M.items[g]) == null
                          ? void 0
                          : h.revalidatedAt) &&
                        M?.items[g].revalidatedAt >=
                          (l?.lastModified || Date.now())
                      );
                    }) && (l = void 0));
              }
              return (
                l &&
                  (l == null || (r = l.value) == null ? void 0 : r.kind) ===
                    'FETCH' &&
                  (this.loadTagsManifest(),
                  [...(a || []), ...(u || [])].some((d) => {
                    var p;
                    return (
                      !!this.revalidatedTags.includes(d) ||
                      ((M == null || (p = M.items[d]) == null
                        ? void 0
                        : p.revalidatedAt) &&
                        M?.items[d].revalidatedAt >=
                          (l?.lastModified || Date.now()))
                    );
                  }) && (l = void 0)),
                l ?? null
              );
            }
            async set(...e) {
              let [n, r, i] = e;
              if (
                (W?.set(n, { value: r, lastModified: Date.now() }),
                this.debug && console.log('set', n),
                this.flushToDisk)
              ) {
                if (r?.kind === 'ROUTE') {
                  let s = this.getFilePath(`${n}.body`, 'app');
                  await this.fs.mkdir(Jt().dirname(s)),
                    await this.fs.writeFile(s, r.body);
                  let o = {
                    headers: r.headers,
                    status: r.status,
                    postponed: void 0,
                  };
                  await this.fs.writeFile(
                    s.replace(/\.body$/, ua),
                    JSON.stringify(o, null, 2)
                  );
                  return;
                }
                if (r?.kind === 'PAGE') {
                  let s = typeof r.pageData == 'string',
                    o = this.getFilePath(`${n}.html`, s ? 'app' : 'pages');
                  if (
                    (await this.fs.mkdir(Jt().dirname(o)),
                    await this.fs.writeFile(o, r.html),
                    await this.fs.writeFile(
                      this.getFilePath(
                        `${n}${
                          s
                            ? this.experimental.ppr
                              ? '.prefetch.rsc'
                              : '.rsc'
                            : '.json'
                        }`,
                        s ? 'app' : 'pages'
                      ),
                      s ? r.pageData : JSON.stringify(r.pageData)
                    ),
                    r.headers || r.status)
                  ) {
                    let a = {
                      headers: r.headers,
                      status: r.status,
                      postponed: r.postponed,
                    };
                    await this.fs.writeFile(
                      o.replace(/\.html$/, ua),
                      JSON.stringify(a)
                    );
                  }
                } else if (r?.kind === 'FETCH') {
                  let s = this.getFilePath(n, 'fetch');
                  await this.fs.mkdir(Jt().dirname(s)),
                    await this.fs.writeFile(
                      s,
                      JSON.stringify({ ...r, tags: i.tags })
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
              let n = this.getFilePath(e, 'pages');
              if (this.fs.existsSync(n)) return 'pages';
              if (((n = this.getFilePath(e, 'app')), this.fs.existsSync(n)))
                return 'app';
              throw Error(
                `Invariant: Unable to determine file path kind for ${e}`
              );
            }
            getFilePath(e, n) {
              switch (n) {
                case 'fetch':
                  return Jt().join(
                    this.serverDistDir,
                    '..',
                    'cache',
                    'fetch-cache',
                    e
                  );
                case 'pages':
                  return Jt().join(this.serverDistDir, 'pages', e);
                case 'app':
                  return Jt().join(this.serverDistDir, 'app', e);
                default:
                  throw Error("Invariant: Can't determine file path kind");
              }
            }
          }
          let ba = ['(..)(..)', '(.)', '(..)', '(...)'],
            Mu = /\/\[[^/]+?\](?=\/|$)/;
          function Ea(t) {
            var e;
            return /^\/index(\/|$)/.test(t) &&
              ((e = t)
                .split('/')
                .find((n) => ba.find((r) => n.startsWith(r))) !== void 0 &&
                (e = (function (n) {
                  let r, i, s;
                  for (let o of n.split('/'))
                    if ((i = ba.find((a) => o.startsWith(a)))) {
                      [r, s] = n.split(i, 2);
                      break;
                    }
                  if (!r || !i || !s)
                    throw Error(
                      `Invalid interception route: ${n}. Must be in the format /<intercepting route>/(..|...|..)(..)/<intercepted route>`
                    );
                  switch (
                    ((r = oa(
                      r
                        .split('/')
                        .reduce(
                          (o, a, u, c) =>
                            a
                              ? (a[0] === '(' && a.endsWith(')')) ||
                                a[0] === '@' ||
                                ((a === 'page' || a === 'route') &&
                                  u === c.length - 1)
                                ? o
                                : o + '/' + a
                              : o,
                          ''
                        )
                    )),
                    i)
                  ) {
                    case '(.)':
                      s = r === '/' ? `/${s}` : r + '/' + s;
                      break;
                    case '(..)':
                      if (r === '/')
                        throw Error(
                          `Invalid interception route: ${n}. Cannot use (..) marker at the root level, use (.) instead.`
                        );
                      s = r.split('/').slice(0, -1).concat(s).join('/');
                      break;
                    case '(...)':
                      s = '/' + s;
                      break;
                    case '(..)(..)':
                      let o = r.split('/');
                      if (o.length <= 2)
                        throw Error(
                          `Invalid interception route: ${n}. Cannot use (..)(..) marker at the root level or one level up.`
                        );
                      s = o.slice(0, -2).concat(s).join('/');
                      break;
                    default:
                      throw Error('Invariant: unexpected marker');
                  }
                  return { interceptingRoute: r, interceptedRoute: s };
                })(e).interceptedRoute),
              !Mu.test(e))
              ? '/index' + t
              : t === '/'
              ? '/index'
              : oa(t);
          }
          function Na(t) {
            return t.replace(/\/$/, '').replace(/\/index$/, '') || '/';
          }
          typeof performance < 'u' &&
            ['mark', 'measure', 'getEntriesByName'].every(
              (t) => typeof performance[t] == 'function'
            );
          class $u {
            constructor({
              fs: e,
              dev: n,
              appDir: r,
              pagesDir: i,
              flushToDisk: s,
              fetchCache: o,
              minimalMode: a,
              serverDistDir: u,
              requestHeaders: c,
              requestProtocol: l,
              maxMemoryCacheSize: d,
              getPrerenderManifest: p,
              fetchCacheKeyPrefix: g,
              CurCacheHandler: h,
              allowedRevalidateHeaderKeys: S,
              experimental: I,
            }) {
              var w, R, A, O;
              (this.locks = new Map()), (this.unlocks = new Map());
              let P = !!process.env.NEXT_PRIVATE_DEBUG_CACHE;
              h
                ? P && console.log('using custom cache handler', h.name)
                : (e &&
                    u &&
                    (P && console.log('using filesystem cache handler'),
                    (h = ku)),
                  Ta.isAvailable({ _requestHeaders: c }) &&
                    a &&
                    o &&
                    (P && console.log('using fetch cache handler'), (h = Ta))),
                process.env.__NEXT_TEST_MAX_ISR_CACHE &&
                  (d = parseInt(process.env.__NEXT_TEST_MAX_ISR_CACHE, 10)),
                (this.dev = n),
                (this.minimalMode = a),
                (this.requestHeaders = c),
                (this.requestProtocol = l),
                (this.allowedRevalidateHeaderKeys = S),
                (this.prerenderManifest = p()),
                (this.fetchCacheKeyPrefix = g);
              let B = [];
              c[la] ===
                ((R = this.prerenderManifest) == null || (w = R.preview) == null
                  ? void 0
                  : w.previewModeId) && (this.isOnDemandRevalidate = !0),
                a &&
                  typeof c[ca] == 'string' &&
                  c['x-next-revalidate-tag-token'] ===
                    ((O = this.prerenderManifest) == null ||
                    (A = O.preview) == null
                      ? void 0
                      : A.previewModeId) &&
                  (B = c[ca].split(',')),
                h &&
                  (this.cacheHandler = new h({
                    dev: n,
                    fs: e,
                    flushToDisk: s,
                    serverDistDir: u,
                    revalidatedTags: B,
                    maxMemoryCacheSize: d,
                    _pagesDir: !!i,
                    _appDir: !!r,
                    _requestHeaders: c,
                    fetchCacheKeyPrefix: g,
                    experimental: I,
                  }));
            }
            calculateRevalidate(e, n, r) {
              if (r) return new Date().getTime() - 1e3;
              let { initialRevalidateSeconds: i } = this.prerenderManifest
                .routes[Na(e)] || { initialRevalidateSeconds: 1 };
              return typeof i == 'number' ? 1e3 * i + n : i;
            }
            _getPathname(e, n) {
              return n ? e : Ea(e);
            }
            async unlock(e) {
              let n = this.unlocks.get(e);
              n && (n(), this.locks.delete(e), this.unlocks.delete(e));
            }
            async lock(e) {
              process.env.__NEXT_INCREMENTAL_CACHE_IPC_PORT &&
                process.env.__NEXT_INCREMENTAL_CACHE_IPC_KEY;
              let n = () => Promise.resolve(),
                r = this.locks.get(e);
              if (r) await r;
              else {
                let i = new Promise((s) => {
                  n = async () => {
                    s();
                  };
                });
                this.locks.set(e, i), this.unlocks.set(e, n);
              }
              return n;
            }
            async revalidateTag(e) {
              var n, r;
              return (
                process.env.__NEXT_INCREMENTAL_CACHE_IPC_PORT &&
                  process.env.__NEXT_INCREMENTAL_CACHE_IPC_KEY,
                (r = this.cacheHandler) == null || (n = r.revalidateTag) == null
                  ? void 0
                  : n.call(r, e)
              );
            }
            async fetchCacheKey(e, n = {}) {
              let r,
                i = [],
                s = new TextEncoder(),
                o = new TextDecoder();
              if (n.body)
                if (typeof n.body.getReader == 'function') {
                  let c = n.body,
                    l = [];
                  try {
                    await c.pipeTo(
                      new WritableStream({
                        write(h) {
                          typeof h == 'string'
                            ? (l.push(s.encode(h)), i.push(h))
                            : (l.push(h), i.push(o.decode(h, { stream: !0 })));
                        },
                      })
                    ),
                      i.push(o.decode());
                    let d = l.reduce((h, S) => h + S.length, 0),
                      p = new Uint8Array(d),
                      g = 0;
                    for (let h of l) p.set(h, g), (g += h.length);
                    n._ogBody = p;
                  } catch (d) {
                    console.error('Problem reading body', d);
                  }
                } else if (typeof n.body.keys == 'function') {
                  let c = n.body;
                  for (let l of ((n._ogBody = n.body),
                  new Set([...c.keys()]))) {
                    let d = c.getAll(l);
                    i.push(
                      `${l}=${(
                        await Promise.all(
                          d.map(async (p) =>
                            typeof p == 'string' ? p : await p.text()
                          )
                        )
                      ).join(',')}`
                    );
                  }
                } else if (typeof n.body.arrayBuffer == 'function') {
                  let c = n.body,
                    l = await c.arrayBuffer();
                  i.push(await c.text()),
                    (n._ogBody = new Blob([l], { type: c.type }));
                } else
                  typeof n.body == 'string' &&
                    (i.push(n.body), (n._ogBody = n.body));
              let a = JSON.stringify([
                'v3',
                this.fetchCacheKeyPrefix || '',
                e,
                n.method,
                typeof (n.headers || {}).keys == 'function'
                  ? Object.fromEntries(n.headers)
                  : n.headers,
                n.mode,
                n.redirect,
                n.credentials,
                n.referrer,
                n.referrerPolicy,
                n.integrity,
                n.cache,
                i,
              ]);
              {
                var u;
                let c = s.encode(a);
                (u = await crypto.subtle.digest('SHA-256', c)),
                  (r = Array.prototype.map
                    .call(new Uint8Array(u), (l) =>
                      l.toString(16).padStart(2, '0')
                    )
                    .join(''));
              }
              return r;
            }
            async get(e, n = {}) {
              var r, i, s;
              let o, a;
              if (
                (process.env.__NEXT_INCREMENTAL_CACHE_IPC_PORT &&
                  process.env.__NEXT_INCREMENTAL_CACHE_IPC_KEY,
                this.dev &&
                  (n.kindHint !== 'fetch' ||
                    this.requestHeaders['cache-control'] === 'no-cache'))
              )
                return null;
              e = this._getPathname(e, n.kindHint === 'fetch');
              let u = null,
                c = n.revalidate,
                l = await ((r = this.cacheHandler) == null
                  ? void 0
                  : r.get(e, n));
              if (
                (l == null || (i = l.value) == null ? void 0 : i.kind) ===
                'FETCH'
              )
                return [...(n.tags || []), ...(n.softTags || [])].some((p) => {
                  var g;
                  return (g = this.revalidatedTags) == null
                    ? void 0
                    : g.includes(p);
                })
                  ? null
                  : ((c = c || l.value.revalidate),
                    {
                      isStale: (Date.now() - (l.lastModified || 0)) / 1e3 > c,
                      value: {
                        kind: 'FETCH',
                        data: l.value.data,
                        revalidate: c,
                      },
                      revalidateAfter: Date.now() + 1e3 * c,
                    });
              let d =
                (s = this.prerenderManifest.routes[Na(e)]) == null
                  ? void 0
                  : s.initialRevalidateSeconds;
              return (
                l?.lastModified === -1
                  ? ((o = -1), (a = -31536e3))
                  : (o =
                      ((a = this.calculateRevalidate(
                        e,
                        l?.lastModified || Date.now(),
                        this.dev && n.kindHint !== 'fetch'
                      )) !== !1 &&
                        a < Date.now()) ||
                      void 0),
                l &&
                  (u = {
                    isStale: o,
                    curRevalidate: d,
                    revalidateAfter: a,
                    value: l.value,
                  }),
                !l &&
                  this.prerenderManifest.notFoundRoutes.includes(e) &&
                  ((u = {
                    isStale: o,
                    value: null,
                    curRevalidate: d,
                    revalidateAfter: a,
                  }),
                  this.set(e, u.value, n)),
                u
              );
            }
            async set(e, n, r) {
              if (
                (process.env.__NEXT_INCREMENTAL_CACHE_IPC_PORT &&
                  process.env.__NEXT_INCREMENTAL_CACHE_IPC_KEY,
                !this.dev || r.fetchCache)
              ) {
                if (r.fetchCache && JSON.stringify(n).length > 2097152) {
                  if (this.dev)
                    throw Error('fetch for over 2MB of data can not be cached');
                  return;
                }
                e = this._getPathname(e, r.fetchCache);
                try {
                  var i;
                  r.revalidate === void 0 ||
                    r.fetchCache ||
                    (this.prerenderManifest.routes[e] = {
                      experimentalPPR: void 0,
                      dataRoute: Jt().posix.join(
                        '/_next/data',
                        `${Ea(e)}.json`
                      ),
                      srcRoute: null,
                      initialRevalidateSeconds: r.revalidate,
                      prefetchDataRoute: void 0,
                    }),
                    await ((i = this.cacheHandler) == null
                      ? void 0
                      : i.set(e, n, r));
                } catch (s) {
                  console.warn('Failed to update prerender cache for', e, s);
                }
              }
            }
          }
          function De(t, e) {
            if (!t) throw Error(e);
          }
          function Ct(t) {
            return typeof t == 'object' && t !== null;
          }
          function mt(t, e) {
            if (!t) throw Error(e ?? 'Unexpected invariant triggered.');
          }
          let Fu = /\r\n|[\n\r]/g;
          function ki(t, e) {
            let n = 0,
              r = 1;
            for (let i of t.body.matchAll(Fu)) {
              if ((typeof i.index == 'number' || mt(!1), i.index >= e)) break;
              (n = i.index + i[0].length), (r += 1);
            }
            return { line: r, column: e + 1 - n };
          }
          function Sa(t, e) {
            let n = t.locationOffset.column - 1,
              r = ''.padStart(n) + t.body,
              i = e.line - 1,
              s = t.locationOffset.line - 1,
              o = e.line + s,
              a = e.line === 1 ? n : 0,
              u = e.column + a,
              c = `${t.name}:${o}:${u}
`,
              l = r.split(/\r\n|[\n\r]/g),
              d = l[i];
            if (d.length > 120) {
              let p = Math.floor(u / 80),
                g = [];
              for (let h = 0; h < d.length; h += 80) g.push(d.slice(h, h + 80));
              return (
                c +
                _a([
                  [`${o} |`, g[0]],
                  ...g.slice(1, p + 1).map((h) => ['|', h]),
                  ['|', '^'.padStart(u % 80)],
                  ['|', g[p + 1]],
                ])
              );
            }
            return (
              c +
              _a([
                [`${o - 1} |`, l[i - 1]],
                [`${o} |`, d],
                ['|', '^'.padStart(u)],
                [`${o + 1} |`, l[i + 1]],
              ])
            );
          }
          function _a(t) {
            let e = t.filter(([r, i]) => i !== void 0),
              n = Math.max(...e.map(([r]) => r.length));
            return e.map(([r, i]) => r.padStart(n) + (i ? ' ' + i : '')).join(`
`);
          }
          class j extends Error {
            constructor(e, ...n) {
              var r, i, s;
              let {
                nodes: o,
                source: a,
                positions: u,
                path: c,
                originalError: l,
                extensions: d,
              } = (function (h) {
                let S = h[0];
                return S == null || 'kind' in S || 'length' in S
                  ? {
                      nodes: S,
                      source: h[1],
                      positions: h[2],
                      path: h[3],
                      originalError: h[4],
                      extensions: h[5],
                    }
                  : S;
              })(n);
              super(e),
                (this.name = 'GraphQLError'),
                (this.path = c ?? void 0),
                (this.originalError = l ?? void 0),
                (this.nodes = Ia(Array.isArray(o) ? o : o ? [o] : void 0));
              let p = Ia(
                (r = this.nodes) === null || r === void 0
                  ? void 0
                  : r.map((h) => h.loc).filter((h) => h != null)
              );
              (this.source =
                a ??
                (p == null || (i = p[0]) === null || i === void 0
                  ? void 0
                  : i.source)),
                (this.positions = u ?? p?.map((h) => h.start)),
                (this.locations =
                  u && a
                    ? u.map((h) => ki(a, h))
                    : p?.map((h) => ki(h.source, h.start)));
              let g = Ct(l?.extensions) ? l?.extensions : void 0;
              (this.extensions =
                (s = d ?? g) !== null && s !== void 0
                  ? s
                  : Object.create(null)),
                Object.defineProperties(this, {
                  message: { writable: !0, enumerable: !0 },
                  name: { enumerable: !1 },
                  nodes: { enumerable: !1 },
                  source: { enumerable: !1 },
                  positions: { enumerable: !1 },
                  originalError: { enumerable: !1 },
                }),
                l != null && l.stack
                  ? Object.defineProperty(this, 'stack', {
                      value: l.stack,
                      writable: !0,
                      configurable: !0,
                    })
                  : Error.captureStackTrace
                  ? Error.captureStackTrace(this, j)
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
                for (let r of this.nodes)
                  if (r.loc) {
                    var n;
                    e +=
                      `

` + Sa((n = r.loc).source, ki(n.source, n.start));
                  }
              } else if (this.source && this.locations)
                for (let r of this.locations)
                  e +=
                    `

` + Sa(this.source, r);
              return e;
            }
            toJSON() {
              let e = { message: this.message };
              return (
                this.locations != null && (e.locations = this.locations),
                this.path != null && (e.path = this.path),
                this.extensions != null &&
                  Object.keys(this.extensions).length > 0 &&
                  (e.extensions = this.extensions),
                e
              );
            }
          }
          function Ia(t) {
            return t === void 0 || t.length === 0 ? void 0 : t;
          }
          function He(t, e, n) {
            return new j(`Syntax Error: ${n}`, { source: t, positions: [e] });
          }
          class ju {
            constructor(e, n, r) {
              (this.start = e.start),
                (this.end = n.end),
                (this.startToken = e),
                (this.endToken = n),
                (this.source = r);
            }
            get [Symbol.toStringTag]() {
              return 'Location';
            }
            toJSON() {
              return { start: this.start, end: this.end };
            }
          }
          class Oa {
            constructor(e, n, r, i, s, o) {
              (this.kind = e),
                (this.start = n),
                (this.end = r),
                (this.line = i),
                (this.column = s),
                (this.value = o),
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
          let wa = {
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
              Field: [
                'alias',
                'name',
                'arguments',
                'directives',
                'selectionSet',
              ],
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
              UnionTypeDefinition: [
                'description',
                'name',
                'directives',
                'types',
              ],
              EnumTypeDefinition: [
                'description',
                'name',
                'directives',
                'values',
              ],
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
              ObjectTypeExtension: [
                'name',
                'interfaces',
                'directives',
                'fields',
              ],
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
            Uu = new Set(Object.keys(wa));
          function Mi(t) {
            let e = t?.kind;
            return typeof e == 'string' && Uu.has(e);
          }
          function $i(t) {
            return t === 9 || t === 32;
          }
          function Hn(t) {
            return t >= 48 && t <= 57;
          }
          function Aa(t) {
            return (t >= 97 && t <= 122) || (t >= 65 && t <= 90);
          }
          function Fi(t) {
            return Aa(t) || t === 95;
          }
          function xa(t) {
            return Aa(t) || Hn(t) || t === 95;
          }
          (function (t) {
            (t.QUERY = 'query'),
              (t.MUTATION = 'mutation'),
              (t.SUBSCRIPTION = 'subscription');
          })(fe || (fe = {})),
            (function (t) {
              (t.QUERY = 'QUERY'),
                (t.MUTATION = 'MUTATION'),
                (t.SUBSCRIPTION = 'SUBSCRIPTION'),
                (t.FIELD = 'FIELD'),
                (t.FRAGMENT_DEFINITION = 'FRAGMENT_DEFINITION'),
                (t.FRAGMENT_SPREAD = 'FRAGMENT_SPREAD'),
                (t.INLINE_FRAGMENT = 'INLINE_FRAGMENT'),
                (t.VARIABLE_DEFINITION = 'VARIABLE_DEFINITION'),
                (t.SCHEMA = 'SCHEMA'),
                (t.SCALAR = 'SCALAR'),
                (t.OBJECT = 'OBJECT'),
                (t.FIELD_DEFINITION = 'FIELD_DEFINITION'),
                (t.ARGUMENT_DEFINITION = 'ARGUMENT_DEFINITION'),
                (t.INTERFACE = 'INTERFACE'),
                (t.UNION = 'UNION'),
                (t.ENUM = 'ENUM'),
                (t.ENUM_VALUE = 'ENUM_VALUE'),
                (t.INPUT_OBJECT = 'INPUT_OBJECT'),
                (t.INPUT_FIELD_DEFINITION = 'INPUT_FIELD_DEFINITION');
            })(U || (U = {})),
            (function (t) {
              (t.NAME = 'Name'),
                (t.DOCUMENT = 'Document'),
                (t.OPERATION_DEFINITION = 'OperationDefinition'),
                (t.VARIABLE_DEFINITION = 'VariableDefinition'),
                (t.SELECTION_SET = 'SelectionSet'),
                (t.FIELD = 'Field'),
                (t.ARGUMENT = 'Argument'),
                (t.FRAGMENT_SPREAD = 'FragmentSpread'),
                (t.INLINE_FRAGMENT = 'InlineFragment'),
                (t.FRAGMENT_DEFINITION = 'FragmentDefinition'),
                (t.VARIABLE = 'Variable'),
                (t.INT = 'IntValue'),
                (t.FLOAT = 'FloatValue'),
                (t.STRING = 'StringValue'),
                (t.BOOLEAN = 'BooleanValue'),
                (t.NULL = 'NullValue'),
                (t.ENUM = 'EnumValue'),
                (t.LIST = 'ListValue'),
                (t.OBJECT = 'ObjectValue'),
                (t.OBJECT_FIELD = 'ObjectField'),
                (t.DIRECTIVE = 'Directive'),
                (t.NAMED_TYPE = 'NamedType'),
                (t.LIST_TYPE = 'ListType'),
                (t.NON_NULL_TYPE = 'NonNullType'),
                (t.SCHEMA_DEFINITION = 'SchemaDefinition'),
                (t.OPERATION_TYPE_DEFINITION = 'OperationTypeDefinition'),
                (t.SCALAR_TYPE_DEFINITION = 'ScalarTypeDefinition'),
                (t.OBJECT_TYPE_DEFINITION = 'ObjectTypeDefinition'),
                (t.FIELD_DEFINITION = 'FieldDefinition'),
                (t.INPUT_VALUE_DEFINITION = 'InputValueDefinition'),
                (t.INTERFACE_TYPE_DEFINITION = 'InterfaceTypeDefinition'),
                (t.UNION_TYPE_DEFINITION = 'UnionTypeDefinition'),
                (t.ENUM_TYPE_DEFINITION = 'EnumTypeDefinition'),
                (t.ENUM_VALUE_DEFINITION = 'EnumValueDefinition'),
                (t.INPUT_OBJECT_TYPE_DEFINITION = 'InputObjectTypeDefinition'),
                (t.DIRECTIVE_DEFINITION = 'DirectiveDefinition'),
                (t.SCHEMA_EXTENSION = 'SchemaExtension'),
                (t.SCALAR_TYPE_EXTENSION = 'ScalarTypeExtension'),
                (t.OBJECT_TYPE_EXTENSION = 'ObjectTypeExtension'),
                (t.INTERFACE_TYPE_EXTENSION = 'InterfaceTypeExtension'),
                (t.UNION_TYPE_EXTENSION = 'UnionTypeExtension'),
                (t.ENUM_TYPE_EXTENSION = 'EnumTypeExtension'),
                (t.INPUT_OBJECT_TYPE_EXTENSION = 'InputObjectTypeExtension'),
                (t.TYPE_COORDINATE = 'TypeCoordinate'),
                (t.MEMBER_COORDINATE = 'MemberCoordinate'),
                (t.ARGUMENT_COORDINATE = 'ArgumentCoordinate'),
                (t.DIRECTIVE_COORDINATE = 'DirectiveCoordinate'),
                (t.DIRECTIVE_ARGUMENT_COORDINATE =
                  'DirectiveArgumentCoordinate');
            })(f || (f = {})),
            (function (t) {
              (t.SOF = '<SOF>'),
                (t.EOF = '<EOF>'),
                (t.BANG = '!'),
                (t.DOLLAR = '$'),
                (t.AMP = '&'),
                (t.PAREN_L = '('),
                (t.PAREN_R = ')'),
                (t.DOT = '.'),
                (t.SPREAD = '...'),
                (t.COLON = ':'),
                (t.EQUALS = '='),
                (t.AT = '@'),
                (t.BRACKET_L = '['),
                (t.BRACKET_R = ']'),
                (t.BRACE_L = '{'),
                (t.PIPE = '|'),
                (t.BRACE_R = '}'),
                (t.NAME = 'Name'),
                (t.INT = 'Int'),
                (t.FLOAT = 'Float'),
                (t.STRING = 'String'),
                (t.BLOCK_STRING = 'BlockString'),
                (t.COMMENT = 'Comment');
            })(_ || (_ = {}));
          class Bu {
            constructor(e) {
              let n = new Oa(_.SOF, 0, 0, 0, 0);
              (this.source = e),
                (this.lastToken = n),
                (this.token = n),
                (this.line = 1),
                (this.lineStart = 0);
            }
            get [Symbol.toStringTag]() {
              return 'Lexer';
            }
            advance() {
              return (
                (this.lastToken = this.token), (this.token = this.lookahead())
              );
            }
            lookahead() {
              let e = this.token;
              if (e.kind !== _.EOF)
                do
                  if (e.next) e = e.next;
                  else {
                    let n = (function (r, i) {
                      let s = r.source.body,
                        o = s.length,
                        a = i;
                      for (; a < o; ) {
                        let u = s.charCodeAt(a);
                        switch (u) {
                          case 65279:
                          case 9:
                          case 32:
                          case 44:
                            ++a;
                            continue;
                          case 10:
                            ++a, ++r.line, (r.lineStart = a);
                            continue;
                          case 13:
                            s.charCodeAt(a + 1) === 10 ? (a += 2) : ++a,
                              ++r.line,
                              (r.lineStart = a);
                            continue;
                          case 35:
                            return (function (c, l) {
                              let d = c.source.body,
                                p = d.length,
                                g = l + 1;
                              for (; g < p; ) {
                                let h = d.charCodeAt(g);
                                if (h === 10 || h === 13) break;
                                if ($n(h)) ++g;
                                else if (Or(d, g)) g += 2;
                                else break;
                              }
                              return Ye(c, _.COMMENT, l, g, d.slice(l + 1, g));
                            })(r, a);
                          case 33:
                            return Ye(r, _.BANG, a, a + 1);
                          case 36:
                            return Ye(r, _.DOLLAR, a, a + 1);
                          case 38:
                            return Ye(r, _.AMP, a, a + 1);
                          case 40:
                            return Ye(r, _.PAREN_L, a, a + 1);
                          case 41:
                            return Ye(r, _.PAREN_R, a, a + 1);
                          case 46:
                            if (
                              s.charCodeAt(a + 1) === 46 &&
                              s.charCodeAt(a + 2) === 46
                            )
                              return Ye(r, _.SPREAD, a, a + 3);
                            break;
                          case 58:
                            return Ye(r, _.COLON, a, a + 1);
                          case 61:
                            return Ye(r, _.EQUALS, a, a + 1);
                          case 64:
                            return Ye(r, _.AT, a, a + 1);
                          case 91:
                            return Ye(r, _.BRACKET_L, a, a + 1);
                          case 93:
                            return Ye(r, _.BRACKET_R, a, a + 1);
                          case 123:
                            return Ye(r, _.BRACE_L, a, a + 1);
                          case 124:
                            return Ye(r, _.PIPE, a, a + 1);
                          case 125:
                            return Ye(r, _.BRACE_R, a, a + 1);
                          case 34:
                            return s.charCodeAt(a + 1) === 34 &&
                              s.charCodeAt(a + 2) === 34
                              ? (function (c, l) {
                                  let d = c.source.body,
                                    p = d.length,
                                    g = c.lineStart,
                                    h = l + 3,
                                    S = h,
                                    I = '',
                                    w = [];
                                  for (; h < p; ) {
                                    let R = d.charCodeAt(h);
                                    if (
                                      R === 34 &&
                                      d.charCodeAt(h + 1) === 34 &&
                                      d.charCodeAt(h + 2) === 34
                                    ) {
                                      (I += d.slice(S, h)), w.push(I);
                                      let A = Ye(
                                        c,
                                        _.BLOCK_STRING,
                                        l,
                                        h + 3,
                                        (function (O) {
                                          var P, B;
                                          let k = Number.MAX_SAFE_INTEGER,
                                            Z = null,
                                            z = -1;
                                          for (let H = 0; H < O.length; ++H) {
                                            let ae = O[H],
                                              oe = (function (de) {
                                                let G = 0;
                                                for (
                                                  ;
                                                  G < de.length &&
                                                  $i(de.charCodeAt(G));

                                                )
                                                  ++G;
                                                return G;
                                              })(ae);
                                            oe !== ae.length &&
                                              ((Z =
                                                (B = Z) !== null && B !== void 0
                                                  ? B
                                                  : H),
                                              (z = H),
                                              H !== 0 && oe < k && (k = oe));
                                          }
                                          return O.map((H, ae) =>
                                            ae === 0 ? H : H.slice(k)
                                          ).slice(
                                            (P = Z) !== null && P !== void 0
                                              ? P
                                              : 0,
                                            z + 1
                                          );
                                        })(w).join(`
`)
                                      );
                                      return (
                                        (c.line += w.length - 1),
                                        (c.lineStart = g),
                                        A
                                      );
                                    }
                                    if (
                                      R === 92 &&
                                      d.charCodeAt(h + 1) === 34 &&
                                      d.charCodeAt(h + 2) === 34 &&
                                      d.charCodeAt(h + 3) === 34
                                    ) {
                                      (I += d.slice(S, h)),
                                        (S = h + 1),
                                        (h += 4);
                                      continue;
                                    }
                                    if (R === 10 || R === 13) {
                                      (I += d.slice(S, h)),
                                        w.push(I),
                                        R === 13 && d.charCodeAt(h + 1) === 10
                                          ? (h += 2)
                                          : ++h,
                                        (I = ''),
                                        (S = h),
                                        (g = h);
                                      continue;
                                    }
                                    if ($n(R)) ++h;
                                    else if (Or(d, h)) h += 2;
                                    else
                                      throw He(
                                        c.source,
                                        h,
                                        `Invalid character within String: ${En(
                                          c,
                                          h
                                        )}.`
                                      );
                                  }
                                  throw He(c.source, h, 'Unterminated string.');
                                })(r, a)
                              : (function (c, l) {
                                  let d = c.source.body,
                                    p = d.length,
                                    g = l + 1,
                                    h = g,
                                    S = '';
                                  for (; g < p; ) {
                                    let I = d.charCodeAt(g);
                                    if (I === 34)
                                      return (
                                        (S += d.slice(h, g)),
                                        Ye(c, _.STRING, l, g + 1, S)
                                      );
                                    if (I === 92) {
                                      S += d.slice(h, g);
                                      let w =
                                        d.charCodeAt(g + 1) === 117
                                          ? d.charCodeAt(g + 2) === 123
                                            ? (function (R, A) {
                                                let O = R.source.body,
                                                  P = 0,
                                                  B = 3;
                                                for (; B < 12; ) {
                                                  let k = O.charCodeAt(A + B++);
                                                  if (k === 125) {
                                                    if (B < 5 || !$n(P)) break;
                                                    return {
                                                      value:
                                                        String.fromCodePoint(P),
                                                      size: B,
                                                    };
                                                  }
                                                  if (
                                                    (P = (P << 4) | zn(k)) < 0
                                                  )
                                                    break;
                                                }
                                                throw He(
                                                  R.source,
                                                  A,
                                                  `Invalid Unicode escape sequence: "${O.slice(
                                                    A,
                                                    A + B
                                                  )}".`
                                                );
                                              })(c, g)
                                            : (function (R, A) {
                                                let O = R.source.body,
                                                  P = Ra(O, A + 2);
                                                if ($n(P))
                                                  return {
                                                    value:
                                                      String.fromCodePoint(P),
                                                    size: 6,
                                                  };
                                                if (
                                                  Ca(P) &&
                                                  O.charCodeAt(A + 6) === 92 &&
                                                  O.charCodeAt(A + 7) === 117
                                                ) {
                                                  let B = Ra(O, A + 8);
                                                  if (Da(B))
                                                    return {
                                                      value:
                                                        String.fromCodePoint(
                                                          P,
                                                          B
                                                        ),
                                                      size: 12,
                                                    };
                                                }
                                                throw He(
                                                  R.source,
                                                  A,
                                                  `Invalid Unicode escape sequence: "${O.slice(
                                                    A,
                                                    A + 6
                                                  )}".`
                                                );
                                              })(c, g)
                                          : (function (R, A) {
                                              let O = R.source.body;
                                              switch (O.charCodeAt(A + 1)) {
                                                case 34:
                                                  return {
                                                    value: '"',
                                                    size: 2,
                                                  };
                                                case 92:
                                                  return {
                                                    value: '\\',
                                                    size: 2,
                                                  };
                                                case 47:
                                                  return {
                                                    value: '/',
                                                    size: 2,
                                                  };
                                                case 98:
                                                  return {
                                                    value: '\b',
                                                    size: 2,
                                                  };
                                                case 102:
                                                  return {
                                                    value: '\f',
                                                    size: 2,
                                                  };
                                                case 110:
                                                  return {
                                                    value: `
`,
                                                    size: 2,
                                                  };
                                                case 114:
                                                  return {
                                                    value: '\r',
                                                    size: 2,
                                                  };
                                                case 116:
                                                  return { value: '	', size: 2 };
                                              }
                                              throw He(
                                                R.source,
                                                A,
                                                `Invalid character escape sequence: "${O.slice(
                                                  A,
                                                  A + 2
                                                )}".`
                                              );
                                            })(c, g);
                                      (S += w.value), (g += w.size), (h = g);
                                      continue;
                                    }
                                    if (I === 10 || I === 13) break;
                                    if ($n(I)) ++g;
                                    else if (Or(d, g)) g += 2;
                                    else
                                      throw He(
                                        c.source,
                                        g,
                                        `Invalid character within String: ${En(
                                          c,
                                          g
                                        )}.`
                                      );
                                  }
                                  throw He(c.source, g, 'Unterminated string.');
                                })(r, a);
                        }
                        if (Hn(u) || u === 45)
                          return (function (c, l, d) {
                            let p = c.source.body,
                              g = l,
                              h = d,
                              S = !1;
                            if (
                              (h === 45 && (h = p.charCodeAt(++g)), h === 48)
                            ) {
                              if (Hn((h = p.charCodeAt(++g))))
                                throw He(
                                  c.source,
                                  g,
                                  `Invalid number, unexpected digit after 0: ${En(
                                    c,
                                    g
                                  )}.`
                                );
                            } else (g = ji(c, g, h)), (h = p.charCodeAt(g));
                            if (
                              (h === 46 &&
                                ((S = !0),
                                (h = p.charCodeAt(++g)),
                                (g = ji(c, g, h)),
                                (h = p.charCodeAt(g))),
                              (h === 69 || h === 101) &&
                                ((S = !0),
                                ((h = p.charCodeAt(++g)) === 43 || h === 45) &&
                                  (h = p.charCodeAt(++g)),
                                (g = ji(c, g, h)),
                                (h = p.charCodeAt(g))),
                              h === 46 || Fi(h))
                            )
                              throw He(
                                c.source,
                                g,
                                `Invalid number, expected digit but got: ${En(
                                  c,
                                  g
                                )}.`
                              );
                            return Ye(
                              c,
                              S ? _.FLOAT : _.INT,
                              l,
                              g,
                              p.slice(l, g)
                            );
                          })(r, a, u);
                        if (Fi(u))
                          return (function (c, l) {
                            let d = c.source.body,
                              p = d.length,
                              g = l + 1;
                            for (; g < p && xa(d.charCodeAt(g)); ) ++g;
                            return Ye(c, _.NAME, l, g, d.slice(l, g));
                          })(r, a);
                        throw He(
                          r.source,
                          a,
                          u === 39
                            ? `Unexpected single quote character ('), did you mean to use a double quote (")?`
                            : $n(u) || Or(s, a)
                            ? `Unexpected character: ${En(r, a)}.`
                            : `Invalid character: ${En(r, a)}.`
                        );
                      }
                      return Ye(r, _.EOF, o, o);
                    })(this, e.end);
                    (e.next = n), (n.prev = e), (e = n);
                  }
                while (e.kind === _.COMMENT);
              return e;
            }
          }
          function $n(t) {
            return (t >= 0 && t <= 55295) || (t >= 57344 && t <= 1114111);
          }
          function Or(t, e) {
            return Ca(t.charCodeAt(e)) && Da(t.charCodeAt(e + 1));
          }
          function Ca(t) {
            return t >= 55296 && t <= 56319;
          }
          function Da(t) {
            return t >= 56320 && t <= 57343;
          }
          function En(t, e) {
            let n = t.source.body.codePointAt(e);
            if (n === void 0) return _.EOF;
            if (n >= 32 && n <= 126) {
              let r = String.fromCodePoint(n);
              return r === '"' ? `'"'` : `"${r}"`;
            }
            return 'U+' + n.toString(16).toUpperCase().padStart(4, '0');
          }
          function Ye(t, e, n, r, i) {
            let s = t.line,
              o = 1 + n - t.lineStart;
            return new Oa(e, n, r, s, o, i);
          }
          function ji(t, e, n) {
            if (!Hn(n))
              throw He(
                t.source,
                e,
                `Invalid number, expected digit but got: ${En(t, e)}.`
              );
            let r = t.source.body,
              i = e + 1;
            for (; Hn(r.charCodeAt(i)); ) ++i;
            return i;
          }
          function Ra(t, e) {
            return (
              (zn(t.charCodeAt(e)) << 12) |
              (zn(t.charCodeAt(e + 1)) << 8) |
              (zn(t.charCodeAt(e + 2)) << 4) |
              zn(t.charCodeAt(e + 3))
            );
          }
          function zn(t) {
            return t >= 48 && t <= 57
              ? t - 48
              : t >= 65 && t <= 70
              ? t - 55
              : t >= 97 && t <= 102
              ? t - 87
              : -1;
          }
          function ee(t) {
            return (function e(n, r) {
              switch (typeof n) {
                case 'string':
                  return JSON.stringify(n);
                case 'function':
                  return n.name ? `[function ${n.name}]` : '[function]';
                case 'object':
                  return (function (i, s) {
                    if (i === null) return 'null';
                    if (s.includes(i)) return '[Circular]';
                    let o = [...s, i];
                    if (typeof i.toJSON == 'function') {
                      let a = i.toJSON();
                      if (a !== i) return typeof a == 'string' ? a : e(a, o);
                    } else if (Array.isArray(i))
                      return (function (a, u) {
                        if (a.length === 0) return '[]';
                        if (u.length > 2) return '[Array]';
                        let c = Math.min(10, a.length),
                          l = a.length - c,
                          d = [];
                        for (let p = 0; p < c; ++p) d.push(e(a[p], u));
                        return (
                          l === 1
                            ? d.push('... 1 more item')
                            : l > 1 && d.push(`... ${l} more items`),
                          '[' + d.join(', ') + ']'
                        );
                      })(i, o);
                    return (function (a, u) {
                      let c = Object.entries(a);
                      return c.length === 0
                        ? '{}'
                        : u.length > 2
                        ? '[' +
                          (function (l) {
                            let d = Object.prototype.toString
                              .call(l)
                              .replace(/^\[object /, '')
                              .replace(/]$/, '');
                            if (
                              d === 'Object' &&
                              typeof l.constructor == 'function'
                            ) {
                              let p = l.constructor.name;
                              if (typeof p == 'string' && p !== '') return p;
                            }
                            return d;
                          })(a) +
                          ']'
                        : '{ ' +
                          c.map(([l, d]) => l + ': ' + e(d, u)).join(', ') +
                          ' }';
                    })(i, o);
                  })(n, r);
                default:
                  return String(n);
              }
            })(t, []);
          }
          let lt = Le.process
            ? function (t, e) {
                return t instanceof e;
              }
            : function (t, e) {
                if (t instanceof e) return !0;
                if (typeof t == 'object' && t !== null) {
                  var n;
                  let r = e.prototype[Symbol.toStringTag];
                  if (
                    r ===
                    (Symbol.toStringTag in t
                      ? t[Symbol.toStringTag]
                      : (n = t.constructor) === null || n === void 0
                      ? void 0
                      : n.name)
                  ) {
                    let i = ee(t);
                    throw Error(`Cannot use ${r} "${i}" from another module or realm.

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
          class Ui {
            constructor(e, n = 'GraphQL request', r = { line: 1, column: 1 }) {
              typeof e == 'string' ||
                De(!1, `Body must be a string. Received: ${ee(e)}.`),
                (this.body = e),
                (this.name = n),
                (this.locationOffset = r),
                this.locationOffset.line > 0 ||
                  De(
                    !1,
                    'line in locationOffset is 1-indexed and must be positive.'
                  ),
                this.locationOffset.column > 0 ||
                  De(
                    !1,
                    'column in locationOffset is 1-indexed and must be positive.'
                  );
            }
            get [Symbol.toStringTag]() {
              return 'Source';
            }
          }
          function wr(t, e) {
            let n = new Vu(t, e),
              r = n.parseDocument();
            return (
              Object.defineProperty(r, 'tokenCount', {
                enumerable: !1,
                value: n.tokenCount,
              }),
              r
            );
          }
          class Vu {
            constructor(e, n = {}) {
              let { lexer: r, ...i } = n;
              if (r) this._lexer = r;
              else {
                let s = lt(e, Ui) ? e : new Ui(e);
                this._lexer = new Bu(s);
              }
              (this._options = i), (this._tokenCounter = 0);
            }
            get tokenCount() {
              return this._tokenCounter;
            }
            parseName() {
              let e = this.expectToken(_.NAME);
              return this.node(e, { kind: f.NAME, value: e.value });
            }
            parseDocument() {
              return this.node(this._lexer.token, {
                kind: f.DOCUMENT,
                definitions: this.many(_.SOF, this.parseDefinition, _.EOF),
              });
            }
            parseDefinition() {
              if (this.peek(_.BRACE_L)) return this.parseOperationDefinition();
              let e = this.peekDescription(),
                n = e ? this._lexer.lookahead() : this._lexer.token;
              if (e && n.kind === _.BRACE_L)
                throw He(
                  this._lexer.source,
                  this._lexer.token.start,
                  'Unexpected description, descriptions are not supported on shorthand queries.'
                );
              if (n.kind === _.NAME) {
                switch (n.value) {
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
                switch (n.value) {
                  case 'query':
                  case 'mutation':
                  case 'subscription':
                    return this.parseOperationDefinition();
                  case 'fragment':
                    return this.parseFragmentDefinition();
                }
                if (e)
                  throw He(
                    this._lexer.source,
                    this._lexer.token.start,
                    'Unexpected description, only GraphQL definitions support descriptions.'
                  );
                if (n.value === 'extend')
                  return this.parseTypeSystemExtension();
              }
              throw this.unexpected(n);
            }
            parseOperationDefinition() {
              let e,
                n = this._lexer.token;
              if (this.peek(_.BRACE_L))
                return this.node(n, {
                  kind: f.OPERATION_DEFINITION,
                  operation: fe.QUERY,
                  description: void 0,
                  name: void 0,
                  variableDefinitions: [],
                  directives: [],
                  selectionSet: this.parseSelectionSet(),
                });
              let r = this.parseDescription(),
                i = this.parseOperationType();
              return (
                this.peek(_.NAME) && (e = this.parseName()),
                this.node(n, {
                  kind: f.OPERATION_DEFINITION,
                  operation: i,
                  description: r,
                  name: e,
                  variableDefinitions: this.parseVariableDefinitions(),
                  directives: this.parseDirectives(!1),
                  selectionSet: this.parseSelectionSet(),
                })
              );
            }
            parseOperationType() {
              let e = this.expectToken(_.NAME);
              switch (e.value) {
                case 'query':
                  return fe.QUERY;
                case 'mutation':
                  return fe.MUTATION;
                case 'subscription':
                  return fe.SUBSCRIPTION;
              }
              throw this.unexpected(e);
            }
            parseVariableDefinitions() {
              return this.optionalMany(
                _.PAREN_L,
                this.parseVariableDefinition,
                _.PAREN_R
              );
            }
            parseVariableDefinition() {
              return this.node(this._lexer.token, {
                kind: f.VARIABLE_DEFINITION,
                description: this.parseDescription(),
                variable: this.parseVariable(),
                type: (this.expectToken(_.COLON), this.parseTypeReference()),
                defaultValue: this.expectOptionalToken(_.EQUALS)
                  ? this.parseConstValueLiteral()
                  : void 0,
                directives: this.parseConstDirectives(),
              });
            }
            parseVariable() {
              let e = this._lexer.token;
              return (
                this.expectToken(_.DOLLAR),
                this.node(e, { kind: f.VARIABLE, name: this.parseName() })
              );
            }
            parseSelectionSet() {
              return this.node(this._lexer.token, {
                kind: f.SELECTION_SET,
                selections: this.many(
                  _.BRACE_L,
                  this.parseSelection,
                  _.BRACE_R
                ),
              });
            }
            parseSelection() {
              return this.peek(_.SPREAD)
                ? this.parseFragment()
                : this.parseField();
            }
            parseField() {
              let e,
                n,
                r = this._lexer.token,
                i = this.parseName();
              return (
                this.expectOptionalToken(_.COLON)
                  ? ((e = i), (n = this.parseName()))
                  : (n = i),
                this.node(r, {
                  kind: f.FIELD,
                  alias: e,
                  name: n,
                  arguments: this.parseArguments(!1),
                  directives: this.parseDirectives(!1),
                  selectionSet: this.peek(_.BRACE_L)
                    ? this.parseSelectionSet()
                    : void 0,
                })
              );
            }
            parseArguments(e) {
              let n = e ? this.parseConstArgument : this.parseArgument;
              return this.optionalMany(_.PAREN_L, n, _.PAREN_R);
            }
            parseArgument(e = !1) {
              let n = this._lexer.token,
                r = this.parseName();
              return (
                this.expectToken(_.COLON),
                this.node(n, {
                  kind: f.ARGUMENT,
                  name: r,
                  value: this.parseValueLiteral(e),
                })
              );
            }
            parseConstArgument() {
              return this.parseArgument(!0);
            }
            parseFragment() {
              let e = this._lexer.token;
              this.expectToken(_.SPREAD);
              let n = this.expectOptionalKeyword('on');
              return !n && this.peek(_.NAME)
                ? this.node(e, {
                    kind: f.FRAGMENT_SPREAD,
                    name: this.parseFragmentName(),
                    directives: this.parseDirectives(!1),
                  })
                : this.node(e, {
                    kind: f.INLINE_FRAGMENT,
                    typeCondition: n ? this.parseNamedType() : void 0,
                    directives: this.parseDirectives(!1),
                    selectionSet: this.parseSelectionSet(),
                  });
            }
            parseFragmentDefinition() {
              let e = this._lexer.token,
                n = this.parseDescription();
              return (
                this.expectKeyword('fragment'),
                this._options.allowLegacyFragmentVariables === !0
                  ? this.node(e, {
                      kind: f.FRAGMENT_DEFINITION,
                      description: n,
                      name: this.parseFragmentName(),
                      variableDefinitions: this.parseVariableDefinitions(),
                      typeCondition:
                        (this.expectKeyword('on'), this.parseNamedType()),
                      directives: this.parseDirectives(!1),
                      selectionSet: this.parseSelectionSet(),
                    })
                  : this.node(e, {
                      kind: f.FRAGMENT_DEFINITION,
                      description: n,
                      name: this.parseFragmentName(),
                      typeCondition:
                        (this.expectKeyword('on'), this.parseNamedType()),
                      directives: this.parseDirectives(!1),
                      selectionSet: this.parseSelectionSet(),
                    })
              );
            }
            parseFragmentName() {
              if (this._lexer.token.value === 'on') throw this.unexpected();
              return this.parseName();
            }
            parseValueLiteral(e) {
              let n = this._lexer.token;
              switch (n.kind) {
                case _.BRACKET_L:
                  return this.parseList(e);
                case _.BRACE_L:
                  return this.parseObject(e);
                case _.INT:
                  return (
                    this.advanceLexer(),
                    this.node(n, { kind: f.INT, value: n.value })
                  );
                case _.FLOAT:
                  return (
                    this.advanceLexer(),
                    this.node(n, { kind: f.FLOAT, value: n.value })
                  );
                case _.STRING:
                case _.BLOCK_STRING:
                  return this.parseStringLiteral();
                case _.NAME:
                  switch ((this.advanceLexer(), n.value)) {
                    case 'true':
                      return this.node(n, { kind: f.BOOLEAN, value: !0 });
                    case 'false':
                      return this.node(n, { kind: f.BOOLEAN, value: !1 });
                    case 'null':
                      return this.node(n, { kind: f.NULL });
                    default:
                      return this.node(n, { kind: f.ENUM, value: n.value });
                  }
                case _.DOLLAR:
                  if (e) {
                    if (
                      (this.expectToken(_.DOLLAR),
                      this._lexer.token.kind === _.NAME)
                    ) {
                      let r = this._lexer.token.value;
                      throw He(
                        this._lexer.source,
                        n.start,
                        `Unexpected variable "$${r}" in constant value.`
                      );
                    }
                    throw this.unexpected(n);
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
                  kind: f.STRING,
                  value: e.value,
                  block: e.kind === _.BLOCK_STRING,
                })
              );
            }
            parseList(e) {
              return this.node(this._lexer.token, {
                kind: f.LIST,
                values: this.any(
                  _.BRACKET_L,
                  () => this.parseValueLiteral(e),
                  _.BRACKET_R
                ),
              });
            }
            parseObject(e) {
              return this.node(this._lexer.token, {
                kind: f.OBJECT,
                fields: this.any(
                  _.BRACE_L,
                  () => this.parseObjectField(e),
                  _.BRACE_R
                ),
              });
            }
            parseObjectField(e) {
              let n = this._lexer.token,
                r = this.parseName();
              return (
                this.expectToken(_.COLON),
                this.node(n, {
                  kind: f.OBJECT_FIELD,
                  name: r,
                  value: this.parseValueLiteral(e),
                })
              );
            }
            parseDirectives(e) {
              let n = [];
              for (; this.peek(_.AT); ) n.push(this.parseDirective(e));
              return n;
            }
            parseConstDirectives() {
              return this.parseDirectives(!0);
            }
            parseDirective(e) {
              let n = this._lexer.token;
              return (
                this.expectToken(_.AT),
                this.node(n, {
                  kind: f.DIRECTIVE,
                  name: this.parseName(),
                  arguments: this.parseArguments(e),
                })
              );
            }
            parseTypeReference() {
              let e,
                n = this._lexer.token;
              if (this.expectOptionalToken(_.BRACKET_L)) {
                let r = this.parseTypeReference();
                this.expectToken(_.BRACKET_R),
                  (e = this.node(n, { kind: f.LIST_TYPE, type: r }));
              } else e = this.parseNamedType();
              return this.expectOptionalToken(_.BANG)
                ? this.node(n, { kind: f.NON_NULL_TYPE, type: e })
                : e;
            }
            parseNamedType() {
              return this.node(this._lexer.token, {
                kind: f.NAMED_TYPE,
                name: this.parseName(),
              });
            }
            peekDescription() {
              return this.peek(_.STRING) || this.peek(_.BLOCK_STRING);
            }
            parseDescription() {
              if (this.peekDescription()) return this.parseStringLiteral();
            }
            parseSchemaDefinition() {
              let e = this._lexer.token,
                n = this.parseDescription();
              this.expectKeyword('schema');
              let r = this.parseConstDirectives(),
                i = this.many(
                  _.BRACE_L,
                  this.parseOperationTypeDefinition,
                  _.BRACE_R
                );
              return this.node(e, {
                kind: f.SCHEMA_DEFINITION,
                description: n,
                directives: r,
                operationTypes: i,
              });
            }
            parseOperationTypeDefinition() {
              let e = this._lexer.token,
                n = this.parseOperationType();
              this.expectToken(_.COLON);
              let r = this.parseNamedType();
              return this.node(e, {
                kind: f.OPERATION_TYPE_DEFINITION,
                operation: n,
                type: r,
              });
            }
            parseScalarTypeDefinition() {
              let e = this._lexer.token,
                n = this.parseDescription();
              this.expectKeyword('scalar');
              let r = this.parseName(),
                i = this.parseConstDirectives();
              return this.node(e, {
                kind: f.SCALAR_TYPE_DEFINITION,
                description: n,
                name: r,
                directives: i,
              });
            }
            parseObjectTypeDefinition() {
              let e = this._lexer.token,
                n = this.parseDescription();
              this.expectKeyword('type');
              let r = this.parseName(),
                i = this.parseImplementsInterfaces(),
                s = this.parseConstDirectives(),
                o = this.parseFieldsDefinition();
              return this.node(e, {
                kind: f.OBJECT_TYPE_DEFINITION,
                description: n,
                name: r,
                interfaces: i,
                directives: s,
                fields: o,
              });
            }
            parseImplementsInterfaces() {
              return this.expectOptionalKeyword('implements')
                ? this.delimitedMany(_.AMP, this.parseNamedType)
                : [];
            }
            parseFieldsDefinition() {
              return this.optionalMany(
                _.BRACE_L,
                this.parseFieldDefinition,
                _.BRACE_R
              );
            }
            parseFieldDefinition() {
              let e = this._lexer.token,
                n = this.parseDescription(),
                r = this.parseName(),
                i = this.parseArgumentDefs();
              this.expectToken(_.COLON);
              let s = this.parseTypeReference(),
                o = this.parseConstDirectives();
              return this.node(e, {
                kind: f.FIELD_DEFINITION,
                description: n,
                name: r,
                arguments: i,
                type: s,
                directives: o,
              });
            }
            parseArgumentDefs() {
              return this.optionalMany(
                _.PAREN_L,
                this.parseInputValueDef,
                _.PAREN_R
              );
            }
            parseInputValueDef() {
              let e,
                n = this._lexer.token,
                r = this.parseDescription(),
                i = this.parseName();
              this.expectToken(_.COLON);
              let s = this.parseTypeReference();
              this.expectOptionalToken(_.EQUALS) &&
                (e = this.parseConstValueLiteral());
              let o = this.parseConstDirectives();
              return this.node(n, {
                kind: f.INPUT_VALUE_DEFINITION,
                description: r,
                name: i,
                type: s,
                defaultValue: e,
                directives: o,
              });
            }
            parseInterfaceTypeDefinition() {
              let e = this._lexer.token,
                n = this.parseDescription();
              this.expectKeyword('interface');
              let r = this.parseName(),
                i = this.parseImplementsInterfaces(),
                s = this.parseConstDirectives(),
                o = this.parseFieldsDefinition();
              return this.node(e, {
                kind: f.INTERFACE_TYPE_DEFINITION,
                description: n,
                name: r,
                interfaces: i,
                directives: s,
                fields: o,
              });
            }
            parseUnionTypeDefinition() {
              let e = this._lexer.token,
                n = this.parseDescription();
              this.expectKeyword('union');
              let r = this.parseName(),
                i = this.parseConstDirectives(),
                s = this.parseUnionMemberTypes();
              return this.node(e, {
                kind: f.UNION_TYPE_DEFINITION,
                description: n,
                name: r,
                directives: i,
                types: s,
              });
            }
            parseUnionMemberTypes() {
              return this.expectOptionalToken(_.EQUALS)
                ? this.delimitedMany(_.PIPE, this.parseNamedType)
                : [];
            }
            parseEnumTypeDefinition() {
              let e = this._lexer.token,
                n = this.parseDescription();
              this.expectKeyword('enum');
              let r = this.parseName(),
                i = this.parseConstDirectives(),
                s = this.parseEnumValuesDefinition();
              return this.node(e, {
                kind: f.ENUM_TYPE_DEFINITION,
                description: n,
                name: r,
                directives: i,
                values: s,
              });
            }
            parseEnumValuesDefinition() {
              return this.optionalMany(
                _.BRACE_L,
                this.parseEnumValueDefinition,
                _.BRACE_R
              );
            }
            parseEnumValueDefinition() {
              let e = this._lexer.token,
                n = this.parseDescription(),
                r = this.parseEnumValueName(),
                i = this.parseConstDirectives();
              return this.node(e, {
                kind: f.ENUM_VALUE_DEFINITION,
                description: n,
                name: r,
                directives: i,
              });
            }
            parseEnumValueName() {
              if (
                this._lexer.token.value === 'true' ||
                this._lexer.token.value === 'false' ||
                this._lexer.token.value === 'null'
              )
                throw He(
                  this._lexer.source,
                  this._lexer.token.start,
                  `${Ar(
                    this._lexer.token
                  )} is reserved and cannot be used for an enum value.`
                );
              return this.parseName();
            }
            parseInputObjectTypeDefinition() {
              let e = this._lexer.token,
                n = this.parseDescription();
              this.expectKeyword('input');
              let r = this.parseName(),
                i = this.parseConstDirectives(),
                s = this.parseInputFieldsDefinition();
              return this.node(e, {
                kind: f.INPUT_OBJECT_TYPE_DEFINITION,
                description: n,
                name: r,
                directives: i,
                fields: s,
              });
            }
            parseInputFieldsDefinition() {
              return this.optionalMany(
                _.BRACE_L,
                this.parseInputValueDef,
                _.BRACE_R
              );
            }
            parseTypeSystemExtension() {
              let e = this._lexer.lookahead();
              if (e.kind === _.NAME)
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
              let n = this.parseConstDirectives(),
                r = this.optionalMany(
                  _.BRACE_L,
                  this.parseOperationTypeDefinition,
                  _.BRACE_R
                );
              if (n.length === 0 && r.length === 0) throw this.unexpected();
              return this.node(e, {
                kind: f.SCHEMA_EXTENSION,
                directives: n,
                operationTypes: r,
              });
            }
            parseScalarTypeExtension() {
              let e = this._lexer.token;
              this.expectKeyword('extend'), this.expectKeyword('scalar');
              let n = this.parseName(),
                r = this.parseConstDirectives();
              if (r.length === 0) throw this.unexpected();
              return this.node(e, {
                kind: f.SCALAR_TYPE_EXTENSION,
                name: n,
                directives: r,
              });
            }
            parseObjectTypeExtension() {
              let e = this._lexer.token;
              this.expectKeyword('extend'), this.expectKeyword('type');
              let n = this.parseName(),
                r = this.parseImplementsInterfaces(),
                i = this.parseConstDirectives(),
                s = this.parseFieldsDefinition();
              if (r.length === 0 && i.length === 0 && s.length === 0)
                throw this.unexpected();
              return this.node(e, {
                kind: f.OBJECT_TYPE_EXTENSION,
                name: n,
                interfaces: r,
                directives: i,
                fields: s,
              });
            }
            parseInterfaceTypeExtension() {
              let e = this._lexer.token;
              this.expectKeyword('extend'), this.expectKeyword('interface');
              let n = this.parseName(),
                r = this.parseImplementsInterfaces(),
                i = this.parseConstDirectives(),
                s = this.parseFieldsDefinition();
              if (r.length === 0 && i.length === 0 && s.length === 0)
                throw this.unexpected();
              return this.node(e, {
                kind: f.INTERFACE_TYPE_EXTENSION,
                name: n,
                interfaces: r,
                directives: i,
                fields: s,
              });
            }
            parseUnionTypeExtension() {
              let e = this._lexer.token;
              this.expectKeyword('extend'), this.expectKeyword('union');
              let n = this.parseName(),
                r = this.parseConstDirectives(),
                i = this.parseUnionMemberTypes();
              if (r.length === 0 && i.length === 0) throw this.unexpected();
              return this.node(e, {
                kind: f.UNION_TYPE_EXTENSION,
                name: n,
                directives: r,
                types: i,
              });
            }
            parseEnumTypeExtension() {
              let e = this._lexer.token;
              this.expectKeyword('extend'), this.expectKeyword('enum');
              let n = this.parseName(),
                r = this.parseConstDirectives(),
                i = this.parseEnumValuesDefinition();
              if (r.length === 0 && i.length === 0) throw this.unexpected();
              return this.node(e, {
                kind: f.ENUM_TYPE_EXTENSION,
                name: n,
                directives: r,
                values: i,
              });
            }
            parseInputObjectTypeExtension() {
              let e = this._lexer.token;
              this.expectKeyword('extend'), this.expectKeyword('input');
              let n = this.parseName(),
                r = this.parseConstDirectives(),
                i = this.parseInputFieldsDefinition();
              if (r.length === 0 && i.length === 0) throw this.unexpected();
              return this.node(e, {
                kind: f.INPUT_OBJECT_TYPE_EXTENSION,
                name: n,
                directives: r,
                fields: i,
              });
            }
            parseDirectiveDefinition() {
              let e = this._lexer.token,
                n = this.parseDescription();
              this.expectKeyword('directive'), this.expectToken(_.AT);
              let r = this.parseName(),
                i = this.parseArgumentDefs(),
                s = this.expectOptionalKeyword('repeatable');
              this.expectKeyword('on');
              let o = this.parseDirectiveLocations();
              return this.node(e, {
                kind: f.DIRECTIVE_DEFINITION,
                description: n,
                name: r,
                arguments: i,
                repeatable: s,
                locations: o,
              });
            }
            parseDirectiveLocations() {
              return this.delimitedMany(_.PIPE, this.parseDirectiveLocation);
            }
            parseDirectiveLocation() {
              let e = this._lexer.token,
                n = this.parseName();
              if (Object.prototype.hasOwnProperty.call(U, n.value)) return n;
              throw this.unexpected(e);
            }
            parseSchemaCoordinate() {
              let e,
                n,
                r = this._lexer.token,
                i = this.expectOptionalToken(_.AT),
                s = this.parseName();
              return (
                !i && this.expectOptionalToken(_.DOT) && (e = this.parseName()),
                (i || e) &&
                  this.expectOptionalToken(_.PAREN_L) &&
                  ((n = this.parseName()),
                  this.expectToken(_.COLON),
                  this.expectToken(_.PAREN_R)),
                i
                  ? n
                    ? this.node(r, {
                        kind: f.DIRECTIVE_ARGUMENT_COORDINATE,
                        name: s,
                        argumentName: n,
                      })
                    : this.node(r, { kind: f.DIRECTIVE_COORDINATE, name: s })
                  : e
                  ? n
                    ? this.node(r, {
                        kind: f.ARGUMENT_COORDINATE,
                        name: s,
                        fieldName: e,
                        argumentName: n,
                      })
                    : this.node(r, {
                        kind: f.MEMBER_COORDINATE,
                        name: s,
                        memberName: e,
                      })
                  : this.node(r, { kind: f.TYPE_COORDINATE, name: s })
              );
            }
            node(e, n) {
              return (
                this._options.noLocation !== !0 &&
                  (n.loc = new ju(
                    e,
                    this._lexer.lastToken,
                    this._lexer.source
                  )),
                n
              );
            }
            peek(e) {
              return this._lexer.token.kind === e;
            }
            expectToken(e) {
              let n = this._lexer.token;
              if (n.kind === e) return this.advanceLexer(), n;
              throw He(
                this._lexer.source,
                n.start,
                `Expected ${Pa(e)}, found ${Ar(n)}.`
              );
            }
            expectOptionalToken(e) {
              return this._lexer.token.kind === e && (this.advanceLexer(), !0);
            }
            expectKeyword(e) {
              let n = this._lexer.token;
              if (n.kind === _.NAME && n.value === e) this.advanceLexer();
              else
                throw He(
                  this._lexer.source,
                  n.start,
                  `Expected "${e}", found ${Ar(n)}.`
                );
            }
            expectOptionalKeyword(e) {
              let n = this._lexer.token;
              return (
                n.kind === _.NAME && n.value === e && (this.advanceLexer(), !0)
              );
            }
            unexpected(e) {
              let n = e ?? this._lexer.token;
              return He(this._lexer.source, n.start, `Unexpected ${Ar(n)}.`);
            }
            any(e, n, r) {
              this.expectToken(e);
              let i = [];
              for (; !this.expectOptionalToken(r); ) i.push(n.call(this));
              return i;
            }
            optionalMany(e, n, r) {
              if (this.expectOptionalToken(e)) {
                let i = [];
                do i.push(n.call(this));
                while (!this.expectOptionalToken(r));
                return i;
              }
              return [];
            }
            many(e, n, r) {
              this.expectToken(e);
              let i = [];
              do i.push(n.call(this));
              while (!this.expectOptionalToken(r));
              return i;
            }
            delimitedMany(e, n) {
              this.expectOptionalToken(e);
              let r = [];
              do r.push(n.call(this));
              while (this.expectOptionalToken(e));
              return r;
            }
            advanceLexer() {
              let { maxTokens: e } = this._options,
                n = this._lexer.advance();
              if (
                n.kind !== _.EOF &&
                (++this._tokenCounter, e !== void 0 && this._tokenCounter > e)
              )
                throw He(
                  this._lexer.source,
                  n.start,
                  `Document contains more that ${e} tokens. Parsing aborted.`
                );
            }
          }
          function Ar(t) {
            let e = t.value;
            return Pa(t.kind) + (e != null ? ` "${e}"` : '');
          }
          function Pa(t) {
            return t === _.BANG ||
              t === _.DOLLAR ||
              t === _.AMP ||
              t === _.PAREN_L ||
              t === _.PAREN_R ||
              t === _.DOT ||
              t === _.SPREAD ||
              t === _.COLON ||
              t === _.EQUALS ||
              t === _.AT ||
              t === _.BRACKET_L ||
              t === _.BRACKET_R ||
              t === _.BRACE_L ||
              t === _.PIPE ||
              t === _.BRACE_R
              ? `"${t}"`
              : t;
          }
          function Ht(t, e) {
            let [n, r] = e ? [t, e] : [void 0, t],
              i = ' Did you mean ';
            n && (i += n + ' ');
            let s = r.map((u) => `"${u}"`);
            switch (s.length) {
              case 0:
                return '';
              case 1:
                return i + s[0] + '?';
              case 2:
                return i + s[0] + ' or ' + s[1] + '?';
            }
            let o = s.slice(0, 5),
              a = o.pop();
            return i + o.join(', ') + ', or ' + a + '?';
          }
          function La(t) {
            return t;
          }
          function Nn(t, e) {
            let n = Object.create(null);
            for (let r of t) n[e(r)] = r;
            return n;
          }
          function Bi(t, e, n) {
            let r = Object.create(null);
            for (let i of t) r[e(i)] = n(i);
            return r;
          }
          function zt(t, e) {
            let n = Object.create(null);
            for (let r of Object.keys(t)) n[r] = e(t[r], r);
            return n;
          }
          function Vi(t, e) {
            let n = 0,
              r = 0;
            for (; n < t.length && r < e.length; ) {
              let i = t.charCodeAt(n),
                s = e.charCodeAt(r);
              if (xr(i) && xr(s)) {
                let o = 0;
                do ++n, (o = 10 * o + i - qi), (i = t.charCodeAt(n));
                while (xr(i) && o > 0);
                let a = 0;
                do ++r, (a = 10 * a + s - qi), (s = e.charCodeAt(r));
                while (xr(s) && a > 0);
                if (o < a) return -1;
                if (o > a) return 1;
              } else {
                if (i < s) return -1;
                if (i > s) return 1;
                ++n, ++r;
              }
            }
            return t.length - e.length;
          }
          let qi = 48;
          function xr(t) {
            return !isNaN(t) && qi <= t && t <= 57;
          }
          function an(t, e) {
            let n = Object.create(null),
              r = new qu(t),
              i = Math.floor(0.4 * t.length) + 1;
            for (let s of e) {
              let o = r.measure(s, i);
              o !== void 0 && (n[s] = o);
            }
            return Object.keys(n).sort((s, o) => {
              let a = n[s] - n[o];
              return a !== 0 ? a : Vi(s, o);
            });
          }
          class qu {
            constructor(e) {
              (this._input = e),
                (this._inputLowerCase = e.toLowerCase()),
                (this._inputArray = ka(this._inputLowerCase)),
                (this._rows = [
                  Array(e.length + 1).fill(0),
                  Array(e.length + 1).fill(0),
                  Array(e.length + 1).fill(0),
                ]);
            }
            measure(e, n) {
              if (this._input === e) return 0;
              let r = e.toLowerCase();
              if (this._inputLowerCase === r) return 1;
              let i = ka(r),
                s = this._inputArray;
              if (i.length < s.length) {
                let l = i;
                (i = s), (s = l);
              }
              let o = i.length,
                a = s.length;
              if (o - a > n) return;
              let u = this._rows;
              for (let l = 0; l <= a; l++) u[0][l] = l;
              for (let l = 1; l <= o; l++) {
                let d = u[(l - 1) % 3],
                  p = u[l % 3],
                  g = (p[0] = l);
                for (let h = 1; h <= a; h++) {
                  let S = i[l - 1] === s[h - 1] ? 0 : 1,
                    I = Math.min(d[h] + 1, p[h - 1] + 1, d[h - 1] + S);
                  l > 1 &&
                    h > 1 &&
                    i[l - 1] === s[h - 2] &&
                    i[l - 2] === s[h - 1] &&
                    (I = Math.min(I, u[(l - 2) % 3][h - 2] + 1)),
                    I < g && (g = I),
                    (p[h] = I);
                }
                if (g > n) return;
              }
              let c = u[o % 3][a];
              return c <= n ? c : void 0;
            }
          }
          function ka(t) {
            let e = t.length,
              n = Array(e);
            for (let r = 0; r < e; ++r) n[r] = t.charCodeAt(r);
            return n;
          }
          function St(t) {
            if (t == null) return Object.create(null);
            if (Object.getPrototypeOf(t) === null) return t;
            let e = Object.create(null);
            for (let [n, r] of Object.entries(t)) e[n] = r;
            return e;
          }
          let Qu = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
          function Yu(t) {
            return Gu[t.charCodeAt(0)];
          }
          let Gu = [
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
            Wn = Object.freeze({});
          function Xn(t, e, n = wa) {
            let r,
              i,
              s,
              o = new Map();
            for (let w of Object.values(f)) o.set(w, Cr(e, w));
            let a = Array.isArray(t),
              u = [t],
              c = -1,
              l = [],
              d = t,
              p = [],
              g = [];
            do {
              var h, S, I;
              let w,
                R = ++c === u.length,
                A = R && l.length !== 0;
              if (R) {
                if (
                  ((i = g.length === 0 ? void 0 : p[p.length - 1]),
                  (d = s),
                  (s = g.pop()),
                  A)
                )
                  if (a) {
                    d = d.slice();
                    let O = 0;
                    for (let [P, B] of l) {
                      let k = P - O;
                      B === null ? (d.splice(k, 1), O++) : (d[k] = B);
                    }
                  } else for (let [O, P] of ((d = { ...d }), l)) d[O] = P;
                (c = r.index),
                  (u = r.keys),
                  (l = r.edits),
                  (a = r.inArray),
                  (r = r.prev);
              } else if (s) {
                if ((d = s[(i = a ? c : u[c])]) == null) continue;
                p.push(i);
              }
              if (!Array.isArray(d)) {
                Mi(d) || De(!1, `Invalid AST Node: ${ee(d)}.`);
                let O = R
                  ? (h = o.get(d.kind)) === null || h === void 0
                    ? void 0
                    : h.leave
                  : (S = o.get(d.kind)) === null || S === void 0
                  ? void 0
                  : S.enter;
                if ((w = O?.call(e, d, i, s, p, g)) === Wn) break;
                if (w === !1) {
                  if (!R) {
                    p.pop();
                    continue;
                  }
                } else if (w !== void 0 && (l.push([i, w]), !R))
                  if (Mi(w)) d = w;
                  else {
                    p.pop();
                    continue;
                  }
              }
              w === void 0 && A && l.push([i, d]),
                R
                  ? p.pop()
                  : ((r = { inArray: a, index: c, keys: u, edits: l, prev: r }),
                    (u = (a = Array.isArray(d))
                      ? d
                      : (I = n[d.kind]) !== null && I !== void 0
                      ? I
                      : []),
                    (c = -1),
                    (l = []),
                    s && g.push(s),
                    (s = d));
            } while (r !== void 0);
            return l.length !== 0 ? l[l.length - 1][1] : t;
          }
          function Ma(t) {
            let e = Array(t.length).fill(null),
              n = Object.create(null);
            for (let r of Object.values(f)) {
              let i = !1,
                s = Array(t.length).fill(void 0),
                o = Array(t.length).fill(void 0);
              for (let u = 0; u < t.length; ++u) {
                let { enter: c, leave: l } = Cr(t[u], r);
                i || (i = c != null || l != null), (s[u] = c), (o[u] = l);
              }
              if (!i) continue;
              let a = {
                enter(...u) {
                  let c = u[0];
                  for (let d = 0; d < t.length; d++)
                    if (e[d] === null) {
                      var l;
                      let p =
                        (l = s[d]) === null || l === void 0
                          ? void 0
                          : l.apply(t[d], u);
                      if (p === !1) e[d] = c;
                      else if (p === Wn) e[d] = Wn;
                      else if (p !== void 0) return p;
                    }
                },
                leave(...u) {
                  let c = u[0];
                  for (let d = 0; d < t.length; d++)
                    if (e[d] === null) {
                      var l;
                      let p =
                        (l = o[d]) === null || l === void 0
                          ? void 0
                          : l.apply(t[d], u);
                      if (p === Wn) e[d] = Wn;
                      else if (p !== void 0 && p !== !1) return p;
                    } else e[d] === c && (e[d] = null);
                },
              };
              n[r] = a;
            }
            return n;
          }
          function Cr(t, e) {
            let n = t[e];
            return typeof n == 'object'
              ? n
              : typeof n == 'function'
              ? { enter: n, leave: void 0 }
              : { enter: t.enter, leave: t.leave };
          }
          function Ge(t) {
            return Xn(t, Ku);
          }
          let Ku = {
            Name: { leave: (t) => t.value },
            Variable: { leave: (t) => '$' + t.name },
            Document: {
              leave: (t) =>
                ce(
                  t.definitions,
                  `

`
                ),
            },
            OperationDefinition: {
              leave(t) {
                let e = Qi(t.variableDefinitions)
                    ? Ie(
                        `(
`,
                        ce(
                          t.variableDefinitions,
                          `
`
                        ),
                        `
)`
                      )
                    : Ie('(', ce(t.variableDefinitions, ', '), ')'),
                  n =
                    Ie(
                      '',
                      t.description,
                      `
`
                    ) +
                    ce(
                      [t.operation, ce([t.name, e]), ce(t.directives, ' ')],
                      ' '
                    );
                return (n === 'query' ? '' : n + ' ') + t.selectionSet;
              },
            },
            VariableDefinition: {
              leave: ({
                variable: t,
                type: e,
                defaultValue: n,
                directives: r,
                description: i,
              }) =>
                Ie(
                  '',
                  i,
                  `
`
                ) +
                t +
                ': ' +
                e +
                Ie(' = ', n) +
                Ie(' ', ce(r, ' ')),
            },
            SelectionSet: { leave: ({ selections: t }) => Dt(t) },
            Field: {
              leave({
                alias: t,
                name: e,
                arguments: n,
                directives: r,
                selectionSet: i,
              }) {
                let s = Ie('', t, ': ') + e,
                  o = s + Ie('(', ce(n, ', '), ')');
                return (
                  o.length > 80 &&
                    (o =
                      s +
                      Ie(
                        `(
`,
                        Dr(
                          ce(
                            n,
                            `
`
                          )
                        ),
                        `
)`
                      )),
                  ce([o, ce(r, ' '), i], ' ')
                );
              },
            },
            Argument: { leave: ({ name: t, value: e }) => t + ': ' + e },
            FragmentSpread: {
              leave: ({ name: t, directives: e }) =>
                '...' + t + Ie(' ', ce(e, ' ')),
            },
            InlineFragment: {
              leave: ({ typeCondition: t, directives: e, selectionSet: n }) =>
                ce(['...', Ie('on ', t), ce(e, ' '), n], ' '),
            },
            FragmentDefinition: {
              leave: ({
                name: t,
                typeCondition: e,
                variableDefinitions: n,
                directives: r,
                selectionSet: i,
                description: s,
              }) =>
                Ie(
                  '',
                  s,
                  `
`
                ) +
                `fragment ${t}${Ie('(', ce(n, ', '), ')')} on ${e} ${Ie(
                  '',
                  ce(r, ' '),
                  ' '
                )}` +
                i,
            },
            IntValue: { leave: ({ value: t }) => t },
            FloatValue: { leave: ({ value: t }) => t },
            StringValue: {
              leave: ({ value: t, block: e }) =>
                e
                  ? (function (n, r) {
                      let i = n.replace(/"""/g, '\\"""'),
                        s = i.split(/\r\n|[\n\r]/g),
                        o = s.length === 1,
                        a =
                          s.length > 1 &&
                          s
                            .slice(1)
                            .every(
                              (S) => S.length === 0 || $i(S.charCodeAt(0))
                            ),
                        u = i.endsWith('\\"""'),
                        c = n.endsWith('"') && !u,
                        l = n.endsWith('\\'),
                        d = c || l,
                        p =
                          !(r != null && r.minimize) &&
                          (!o || n.length > 70 || d || a || u),
                        g = '',
                        h = o && $i(n.charCodeAt(0));
                      return (
                        ((p && !h) || a) &&
                          (g += `
`),
                        (g += i),
                        (p || d) &&
                          (g += `
`),
                        '"""' + g + '"""'
                      );
                    })(t)
                  : `"${t.replace(Qu, Yu)}"`,
            },
            BooleanValue: { leave: ({ value: t }) => (t ? 'true' : 'false') },
            NullValue: { leave: () => 'null' },
            EnumValue: { leave: ({ value: t }) => t },
            ListValue: { leave: ({ values: t }) => '[' + ce(t, ', ') + ']' },
            ObjectValue: { leave: ({ fields: t }) => '{' + ce(t, ', ') + '}' },
            ObjectField: { leave: ({ name: t, value: e }) => t + ': ' + e },
            Directive: {
              leave: ({ name: t, arguments: e }) =>
                '@' + t + Ie('(', ce(e, ', '), ')'),
            },
            NamedType: { leave: ({ name: t }) => t },
            ListType: { leave: ({ type: t }) => '[' + t + ']' },
            NonNullType: { leave: ({ type: t }) => t + '!' },
            SchemaDefinition: {
              leave: ({ description: t, directives: e, operationTypes: n }) =>
                Ie(
                  '',
                  t,
                  `
`
                ) + ce(['schema', ce(e, ' '), Dt(n)], ' '),
            },
            OperationTypeDefinition: {
              leave: ({ operation: t, type: e }) => t + ': ' + e,
            },
            ScalarTypeDefinition: {
              leave: ({ description: t, name: e, directives: n }) =>
                Ie(
                  '',
                  t,
                  `
`
                ) + ce(['scalar', e, ce(n, ' ')], ' '),
            },
            ObjectTypeDefinition: {
              leave: ({
                description: t,
                name: e,
                interfaces: n,
                directives: r,
                fields: i,
              }) =>
                Ie(
                  '',
                  t,
                  `
`
                ) +
                ce(
                  [
                    'type',
                    e,
                    Ie('implements ', ce(n, ' & ')),
                    ce(r, ' '),
                    Dt(i),
                  ],
                  ' '
                ),
            },
            FieldDefinition: {
              leave: ({
                description: t,
                name: e,
                arguments: n,
                type: r,
                directives: i,
              }) =>
                Ie(
                  '',
                  t,
                  `
`
                ) +
                e +
                (Qi(n)
                  ? Ie(
                      `(
`,
                      Dr(
                        ce(
                          n,
                          `
`
                        )
                      ),
                      `
)`
                    )
                  : Ie('(', ce(n, ', '), ')')) +
                ': ' +
                r +
                Ie(' ', ce(i, ' ')),
            },
            InputValueDefinition: {
              leave: ({
                description: t,
                name: e,
                type: n,
                defaultValue: r,
                directives: i,
              }) =>
                Ie(
                  '',
                  t,
                  `
`
                ) + ce([e + ': ' + n, Ie('= ', r), ce(i, ' ')], ' '),
            },
            InterfaceTypeDefinition: {
              leave: ({
                description: t,
                name: e,
                interfaces: n,
                directives: r,
                fields: i,
              }) =>
                Ie(
                  '',
                  t,
                  `
`
                ) +
                ce(
                  [
                    'interface',
                    e,
                    Ie('implements ', ce(n, ' & ')),
                    ce(r, ' '),
                    Dt(i),
                  ],
                  ' '
                ),
            },
            UnionTypeDefinition: {
              leave: ({ description: t, name: e, directives: n, types: r }) =>
                Ie(
                  '',
                  t,
                  `
`
                ) + ce(['union', e, ce(n, ' '), Ie('= ', ce(r, ' | '))], ' '),
            },
            EnumTypeDefinition: {
              leave: ({ description: t, name: e, directives: n, values: r }) =>
                Ie(
                  '',
                  t,
                  `
`
                ) + ce(['enum', e, ce(n, ' '), Dt(r)], ' '),
            },
            EnumValueDefinition: {
              leave: ({ description: t, name: e, directives: n }) =>
                Ie(
                  '',
                  t,
                  `
`
                ) + ce([e, ce(n, ' ')], ' '),
            },
            InputObjectTypeDefinition: {
              leave: ({ description: t, name: e, directives: n, fields: r }) =>
                Ie(
                  '',
                  t,
                  `
`
                ) + ce(['input', e, ce(n, ' '), Dt(r)], ' '),
            },
            DirectiveDefinition: {
              leave: ({
                description: t,
                name: e,
                arguments: n,
                repeatable: r,
                locations: i,
              }) =>
                Ie(
                  '',
                  t,
                  `
`
                ) +
                'directive @' +
                e +
                (Qi(n)
                  ? Ie(
                      `(
`,
                      Dr(
                        ce(
                          n,
                          `
`
                        )
                      ),
                      `
)`
                    )
                  : Ie('(', ce(n, ', '), ')')) +
                (r ? ' repeatable' : '') +
                ' on ' +
                ce(i, ' | '),
            },
            SchemaExtension: {
              leave: ({ directives: t, operationTypes: e }) =>
                ce(['extend schema', ce(t, ' '), Dt(e)], ' '),
            },
            ScalarTypeExtension: {
              leave: ({ name: t, directives: e }) =>
                ce(['extend scalar', t, ce(e, ' ')], ' '),
            },
            ObjectTypeExtension: {
              leave: ({ name: t, interfaces: e, directives: n, fields: r }) =>
                ce(
                  [
                    'extend type',
                    t,
                    Ie('implements ', ce(e, ' & ')),
                    ce(n, ' '),
                    Dt(r),
                  ],
                  ' '
                ),
            },
            InterfaceTypeExtension: {
              leave: ({ name: t, interfaces: e, directives: n, fields: r }) =>
                ce(
                  [
                    'extend interface',
                    t,
                    Ie('implements ', ce(e, ' & ')),
                    ce(n, ' '),
                    Dt(r),
                  ],
                  ' '
                ),
            },
            UnionTypeExtension: {
              leave: ({ name: t, directives: e, types: n }) =>
                ce(
                  ['extend union', t, ce(e, ' '), Ie('= ', ce(n, ' | '))],
                  ' '
                ),
            },
            EnumTypeExtension: {
              leave: ({ name: t, directives: e, values: n }) =>
                ce(['extend enum', t, ce(e, ' '), Dt(n)], ' '),
            },
            InputObjectTypeExtension: {
              leave: ({ name: t, directives: e, fields: n }) =>
                ce(['extend input', t, ce(e, ' '), Dt(n)], ' '),
            },
            TypeCoordinate: { leave: ({ name: t }) => t },
            MemberCoordinate: {
              leave: ({ name: t, memberName: e }) => ce([t, Ie('.', e)]),
            },
            ArgumentCoordinate: {
              leave: ({ name: t, fieldName: e, argumentName: n }) =>
                ce([t, Ie('.', e), Ie('(', n, ':)')]),
            },
            DirectiveCoordinate: { leave: ({ name: t }) => ce(['@', t]) },
            DirectiveArgumentCoordinate: {
              leave: ({ name: t, argumentName: e }) =>
                ce(['@', t, Ie('(', e, ':)')]),
            },
          };
          function ce(t, e = '') {
            var n;
            return (n = t?.filter((r) => r).join(e)) !== null && n !== void 0
              ? n
              : '';
          }
          function Dt(t) {
            return Ie(
              `{
`,
              Dr(
                ce(
                  t,
                  `
`
                )
              ),
              `
}`
            );
          }
          function Ie(t, e, n = '') {
            return e != null && e !== '' ? t + e + n : '';
          }
          function Dr(t) {
            return Ie(
              '  ',
              t.replace(
                /\n/g,
                `
  `
              )
            );
          }
          function Qi(t) {
            var e;
            return (
              (e = t?.some((n) =>
                n.includes(`
`)
              )) !== null &&
              e !== void 0 &&
              e
            );
          }
          function Rr(t, e) {
            switch (t.kind) {
              case f.NULL:
                return null;
              case f.INT:
                return parseInt(t.value, 10);
              case f.FLOAT:
                return parseFloat(t.value);
              case f.STRING:
              case f.ENUM:
              case f.BOOLEAN:
                return t.value;
              case f.LIST:
                return t.values.map((n) => Rr(n, e));
              case f.OBJECT:
                return Bi(
                  t.fields,
                  (n) => n.name.value,
                  (n) => Rr(n.value, e)
                );
              case f.VARIABLE:
                return e?.[t.name.value];
            }
          }
          function Rt(t) {
            if (
              (t != null || De(!1, 'Must provide name.'),
              typeof t == 'string' || De(!1, 'Expected name to be a string.'),
              t.length === 0)
            )
              throw new j('Expected name to be a non-empty string.');
            for (let e = 1; e < t.length; ++e)
              if (!xa(t.charCodeAt(e)))
                throw new j(
                  `Names must only contain [_a-zA-Z0-9] but "${t}" does not.`
                );
            if (!Fi(t.charCodeAt(0)))
              throw new j(
                `Names must start with [_a-zA-Z] but "${t}" does not.`
              );
            return t;
          }
          function Pr(t) {
            return (
              gt(t) ||
              we(t) ||
              Pe(t) ||
              We(t) ||
              Be(t) ||
              ke(t) ||
              Me(t) ||
              Oe(t)
            );
          }
          function gt(t) {
            return lt(t, Ut);
          }
          function we(t) {
            return lt(t, ct);
          }
          function Pe(t) {
            return lt(t, un);
          }
          function We(t) {
            return lt(t, tr);
          }
          function Be(t) {
            return lt(t, Bt);
          }
          function ke(t) {
            return lt(t, Sn);
          }
          function Me(t) {
            return lt(t, Ze);
          }
          function Oe(t) {
            return lt(t, Ae);
          }
          function Pt(t) {
            return gt(t) || Be(t) || ke(t) || (Yi(t) && Pt(t.ofType));
          }
          function Zn(t) {
            return (
              gt(t) ||
              we(t) ||
              Pe(t) ||
              We(t) ||
              Be(t) ||
              (Yi(t) && Zn(t.ofType))
            );
          }
          function vt(t) {
            return gt(t) || Be(t);
          }
          function on(t) {
            return we(t) || Pe(t) || We(t);
          }
          function ln(t) {
            return Pe(t) || We(t);
          }
          class Ze {
            constructor(e) {
              Pr(e) || De(!1, `Expected ${ee(e)} to be a GraphQL type.`),
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
          class Ae {
            constructor(e) {
              (function (n) {
                return Pr(n) && !Oe(n);
              })(e) ||
                De(!1, `Expected ${ee(e)} to be a GraphQL nullable type.`),
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
          function Yi(t) {
            return Me(t) || Oe(t);
          }
          function Gi(t) {
            if (t) return Oe(t) ? t.ofType : t;
          }
          function Lr(t) {
            return gt(t) || we(t) || Pe(t) || We(t) || Be(t) || ke(t);
          }
          function ut(t) {
            if (t) {
              let e = t;
              for (; Yi(e); ) e = e.ofType;
              return e;
            }
          }
          function $a(t) {
            return typeof t == 'function' ? t() : t;
          }
          function Fa(t) {
            return typeof t == 'function' ? t() : t;
          }
          class Ut {
            constructor(e) {
              var n, r, i, s;
              let o = (n = e.parseValue) !== null && n !== void 0 ? n : La;
              (this.name = Rt(e.name)),
                (this.description = e.description),
                (this.specifiedByURL = e.specifiedByURL),
                (this.serialize =
                  (r = e.serialize) !== null && r !== void 0 ? r : La),
                (this.parseValue = o),
                (this.parseLiteral =
                  (i = e.parseLiteral) !== null && i !== void 0
                    ? i
                    : (a, u) => o(Rr(a, u))),
                (this.extensions = St(e.extensions)),
                (this.astNode = e.astNode),
                (this.extensionASTNodes =
                  (s = e.extensionASTNodes) !== null && s !== void 0 ? s : []),
                e.specifiedByURL == null ||
                  typeof e.specifiedByURL == 'string' ||
                  De(
                    !1,
                    `${
                      this.name
                    } must provide "specifiedByURL" as a string, but got: ${ee(
                      e.specifiedByURL
                    )}.`
                  ),
                e.serialize == null ||
                  typeof e.serialize == 'function' ||
                  De(
                    !1,
                    `${this.name} must provide "serialize" function. If this custom Scalar is also used as an input type, ensure "parseValue" and "parseLiteral" functions are also provided.`
                  ),
                e.parseLiteral &&
                  ((typeof e.parseValue == 'function' &&
                    typeof e.parseLiteral == 'function') ||
                    De(
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
          class ct {
            constructor(e) {
              var n;
              (this.name = Rt(e.name)),
                (this.description = e.description),
                (this.isTypeOf = e.isTypeOf),
                (this.extensions = St(e.extensions)),
                (this.astNode = e.astNode),
                (this.extensionASTNodes =
                  (n = e.extensionASTNodes) !== null && n !== void 0 ? n : []),
                (this._fields = () => Ua(e)),
                (this._interfaces = () => ja(e)),
                e.isTypeOf == null ||
                  typeof e.isTypeOf == 'function' ||
                  De(
                    !1,
                    `${
                      this.name
                    } must provide "isTypeOf" as a function, but got: ${ee(
                      e.isTypeOf
                    )}.`
                  );
            }
            get [Symbol.toStringTag]() {
              return 'GraphQLObjectType';
            }
            getFields() {
              return (
                typeof this._fields == 'function' &&
                  (this._fields = this._fields()),
                this._fields
              );
            }
            getInterfaces() {
              return (
                typeof this._interfaces == 'function' &&
                  (this._interfaces = this._interfaces()),
                this._interfaces
              );
            }
            toConfig() {
              return {
                name: this.name,
                description: this.description,
                interfaces: this.getInterfaces(),
                fields: Va(this.getFields()),
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
          function ja(t) {
            var e;
            let n = $a((e = t.interfaces) !== null && e !== void 0 ? e : []);
            return (
              Array.isArray(n) ||
                De(
                  !1,
                  `${t.name} interfaces must be an Array or a function which returns an Array.`
                ),
              n
            );
          }
          function Ua(t) {
            let e = Fa(t.fields);
            return (
              Fn(e) ||
                De(
                  !1,
                  `${t.name} fields must be an object with field names as keys or a function which returns such an object.`
                ),
              zt(e, (n, r) => {
                var i;
                Fn(n) ||
                  De(!1, `${t.name}.${r} field config must be an object.`),
                  n.resolve == null ||
                    typeof n.resolve == 'function' ||
                    De(
                      !1,
                      `${
                        t.name
                      }.${r} field resolver must be a function if provided, but got: ${ee(
                        n.resolve
                      )}.`
                    );
                let s = (i = n.args) !== null && i !== void 0 ? i : {};
                return (
                  Fn(s) ||
                    De(
                      !1,
                      `${t.name}.${r} args must be an object with argument names as keys.`
                    ),
                  {
                    name: Rt(r),
                    description: n.description,
                    type: n.type,
                    args: Ba(s),
                    resolve: n.resolve,
                    subscribe: n.subscribe,
                    deprecationReason: n.deprecationReason,
                    extensions: St(n.extensions),
                    astNode: n.astNode,
                  }
                );
              })
            );
          }
          function Ba(t) {
            return Object.entries(t).map(([e, n]) => ({
              name: Rt(e),
              description: n.description,
              type: n.type,
              defaultValue: n.defaultValue,
              deprecationReason: n.deprecationReason,
              extensions: St(n.extensions),
              astNode: n.astNode,
            }));
          }
          function Fn(t) {
            return Ct(t) && !Array.isArray(t);
          }
          function Va(t) {
            return zt(t, (e) => ({
              description: e.description,
              type: e.type,
              args: qa(e.args),
              resolve: e.resolve,
              subscribe: e.subscribe,
              deprecationReason: e.deprecationReason,
              extensions: e.extensions,
              astNode: e.astNode,
            }));
          }
          function qa(t) {
            return Bi(
              t,
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
          function er(t) {
            return Oe(t.type) && t.defaultValue === void 0;
          }
          class un {
            constructor(e) {
              var n;
              (this.name = Rt(e.name)),
                (this.description = e.description),
                (this.resolveType = e.resolveType),
                (this.extensions = St(e.extensions)),
                (this.astNode = e.astNode),
                (this.extensionASTNodes =
                  (n = e.extensionASTNodes) !== null && n !== void 0 ? n : []),
                (this._fields = Ua.bind(void 0, e)),
                (this._interfaces = ja.bind(void 0, e)),
                e.resolveType == null ||
                  typeof e.resolveType == 'function' ||
                  De(
                    !1,
                    `${
                      this.name
                    } must provide "resolveType" as a function, but got: ${ee(
                      e.resolveType
                    )}.`
                  );
            }
            get [Symbol.toStringTag]() {
              return 'GraphQLInterfaceType';
            }
            getFields() {
              return (
                typeof this._fields == 'function' &&
                  (this._fields = this._fields()),
                this._fields
              );
            }
            getInterfaces() {
              return (
                typeof this._interfaces == 'function' &&
                  (this._interfaces = this._interfaces()),
                this._interfaces
              );
            }
            toConfig() {
              return {
                name: this.name,
                description: this.description,
                interfaces: this.getInterfaces(),
                fields: Va(this.getFields()),
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
          class tr {
            constructor(e) {
              var n;
              (this.name = Rt(e.name)),
                (this.description = e.description),
                (this.resolveType = e.resolveType),
                (this.extensions = St(e.extensions)),
                (this.astNode = e.astNode),
                (this.extensionASTNodes =
                  (n = e.extensionASTNodes) !== null && n !== void 0 ? n : []),
                (this._types = Ju.bind(void 0, e)),
                e.resolveType == null ||
                  typeof e.resolveType == 'function' ||
                  De(
                    !1,
                    `${
                      this.name
                    } must provide "resolveType" as a function, but got: ${ee(
                      e.resolveType
                    )}.`
                  );
            }
            get [Symbol.toStringTag]() {
              return 'GraphQLUnionType';
            }
            getTypes() {
              return (
                typeof this._types == 'function' &&
                  (this._types = this._types()),
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
          function Ju(t) {
            let e = $a(t.types);
            return (
              Array.isArray(e) ||
                De(
                  !1,
                  `Must provide Array of types or a function which returns such an array for Union ${t.name}.`
                ),
              e
            );
          }
          class Bt {
            constructor(e) {
              var n;
              (this.name = Rt(e.name)),
                (this.description = e.description),
                (this.extensions = St(e.extensions)),
                (this.astNode = e.astNode),
                (this.extensionASTNodes =
                  (n = e.extensionASTNodes) !== null && n !== void 0 ? n : []),
                (this._values =
                  typeof e.values == 'function'
                    ? e.values
                    : Qa(this.name, e.values)),
                (this._valueLookup = null),
                (this._nameLookup = null);
            }
            get [Symbol.toStringTag]() {
              return 'GraphQLEnumType';
            }
            getValues() {
              return (
                typeof this._values == 'function' &&
                  (this._values = Qa(this.name, this._values())),
                this._values
              );
            }
            getValue(e) {
              return (
                this._nameLookup === null &&
                  (this._nameLookup = Nn(this.getValues(), (n) => n.name)),
                this._nameLookup[e]
              );
            }
            serialize(e) {
              this._valueLookup === null &&
                (this._valueLookup = new Map(
                  this.getValues().map((r) => [r.value, r])
                ));
              let n = this._valueLookup.get(e);
              if (n === void 0)
                throw new j(
                  `Enum "${this.name}" cannot represent value: ${ee(e)}`
                );
              return n.name;
            }
            parseValue(e) {
              if (typeof e != 'string') {
                let r = ee(e);
                throw new j(
                  `Enum "${this.name}" cannot represent non-string value: ${r}.` +
                    kr(this, r)
                );
              }
              let n = this.getValue(e);
              if (n == null)
                throw new j(
                  `Value "${e}" does not exist in "${this.name}" enum.` +
                    kr(this, e)
                );
              return n.value;
            }
            parseLiteral(e, n) {
              if (e.kind !== f.ENUM) {
                let i = Ge(e);
                throw new j(
                  `Enum "${this.name}" cannot represent non-enum value: ${i}.` +
                    kr(this, i),
                  { nodes: e }
                );
              }
              let r = this.getValue(e.value);
              if (r == null) {
                let i = Ge(e);
                throw new j(
                  `Value "${i}" does not exist in "${this.name}" enum.` +
                    kr(this, i),
                  { nodes: e }
                );
              }
              return r.value;
            }
            toConfig() {
              let e = Bi(
                this.getValues(),
                (n) => n.name,
                (n) => ({
                  description: n.description,
                  value: n.value,
                  deprecationReason: n.deprecationReason,
                  extensions: n.extensions,
                  astNode: n.astNode,
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
          function kr(t, e) {
            return Ht(
              'the enum value',
              an(
                e,
                t.getValues().map((n) => n.name)
              )
            );
          }
          function Qa(t, e) {
            return (
              Fn(e) ||
                De(
                  !1,
                  `${t} values must be an object with value names as keys.`
                ),
              Object.entries(e).map(
                ([n, r]) => (
                  Fn(r) ||
                    De(
                      !1,
                      `${t}.${n} must refer to an object with a "value" key representing an internal value but got: ${ee(
                        r
                      )}.`
                    ),
                  {
                    name: (function (i) {
                      if (i === 'true' || i === 'false' || i === 'null')
                        throw new j(`Enum values cannot be named: ${i}`);
                      return Rt(i);
                    })(n),
                    description: r.description,
                    value: r.value !== void 0 ? r.value : n,
                    deprecationReason: r.deprecationReason,
                    extensions: St(r.extensions),
                    astNode: r.astNode,
                  }
                )
              )
            );
          }
          class Sn {
            constructor(e) {
              var n, r;
              (this.name = Rt(e.name)),
                (this.description = e.description),
                (this.extensions = St(e.extensions)),
                (this.astNode = e.astNode),
                (this.extensionASTNodes =
                  (n = e.extensionASTNodes) !== null && n !== void 0 ? n : []),
                (this.isOneOf = (r = e.isOneOf) !== null && r !== void 0 && r),
                (this._fields = Hu.bind(void 0, e));
            }
            get [Symbol.toStringTag]() {
              return 'GraphQLInputObjectType';
            }
            getFields() {
              return (
                typeof this._fields == 'function' &&
                  (this._fields = this._fields()),
                this._fields
              );
            }
            toConfig() {
              let e = zt(this.getFields(), (n) => ({
                description: n.description,
                type: n.type,
                defaultValue: n.defaultValue,
                deprecationReason: n.deprecationReason,
                extensions: n.extensions,
                astNode: n.astNode,
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
          function Hu(t) {
            let e = Fa(t.fields);
            return (
              Fn(e) ||
                De(
                  !1,
                  `${t.name} fields must be an object with field names as keys or a function which returns such an object.`
                ),
              zt(
                e,
                (n, r) => (
                  'resolve' in n &&
                    De(
                      !1,
                      `${t.name}.${r} field has a resolve property, but Input Types cannot define resolvers.`
                    ),
                  {
                    name: Rt(r),
                    description: n.description,
                    type: n.type,
                    defaultValue: n.defaultValue,
                    deprecationReason: n.deprecationReason,
                    extensions: St(n.extensions),
                    astNode: n.astNode,
                  }
                )
              )
            );
          }
          function Ya(t) {
            return Oe(t.type) && t.defaultValue === void 0;
          }
          function jn(t, e, n) {
            return (
              e === n ||
              (Oe(n)
                ? !!Oe(e) && jn(t, e.ofType, n.ofType)
                : Oe(e)
                ? jn(t, e.ofType, n)
                : Me(n)
                ? !!Me(e) && jn(t, e.ofType, n.ofType)
                : !Me(e) && ln(n) && (Pe(e) || we(e)) && t.isSubType(n, e))
            );
          }
          function Ga(t, e, n) {
            return (
              e === n ||
              (ln(e)
                ? ln(n)
                  ? t.getPossibleTypes(e).some((r) => t.isSubType(n, r))
                  : t.isSubType(e, n)
                : !!ln(n) && t.isSubType(n, e))
            );
          }
          let Ki = new Ut({
              name: 'Int',
              description:
                'The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.',
              serialize(t) {
                let e = rr(t);
                if (typeof e == 'boolean') return e ? 1 : 0;
                let n = e;
                if (
                  (typeof e == 'string' && e !== '' && (n = Number(e)),
                  typeof n != 'number' || !Number.isInteger(n))
                )
                  throw new j(
                    `Int cannot represent non-integer value: ${ee(e)}`
                  );
                if (n > 2147483647 || n < -2147483648)
                  throw new j(
                    'Int cannot represent non 32-bit signed integer value: ' +
                      ee(e)
                  );
                return n;
              },
              parseValue(t) {
                if (typeof t != 'number' || !Number.isInteger(t))
                  throw new j(
                    `Int cannot represent non-integer value: ${ee(t)}`
                  );
                if (t > 2147483647 || t < -2147483648)
                  throw new j(
                    `Int cannot represent non 32-bit signed integer value: ${t}`
                  );
                return t;
              },
              parseLiteral(t) {
                if (t.kind !== f.INT)
                  throw new j(
                    `Int cannot represent non-integer value: ${Ge(t)}`,
                    { nodes: t }
                  );
                let e = parseInt(t.value, 10);
                if (e > 2147483647 || e < -2147483648)
                  throw new j(
                    `Int cannot represent non 32-bit signed integer value: ${t.value}`,
                    { nodes: t }
                  );
                return e;
              },
            }),
            Ji = new Ut({
              name: 'Float',
              description:
                'The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).',
              serialize(t) {
                let e = rr(t);
                if (typeof e == 'boolean') return e ? 1 : 0;
                let n = e;
                if (
                  (typeof e == 'string' && e !== '' && (n = Number(e)),
                  typeof n != 'number' || !Number.isFinite(n))
                )
                  throw new j(
                    `Float cannot represent non numeric value: ${ee(e)}`
                  );
                return n;
              },
              parseValue(t) {
                if (typeof t != 'number' || !Number.isFinite(t))
                  throw new j(
                    `Float cannot represent non numeric value: ${ee(t)}`
                  );
                return t;
              },
              parseLiteral(t) {
                if (t.kind !== f.FLOAT && t.kind !== f.INT)
                  throw new j(
                    `Float cannot represent non numeric value: ${Ge(t)}`,
                    t
                  );
                return parseFloat(t.value);
              },
            }),
            Fe = new Ut({
              name: 'String',
              description:
                'The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.',
              serialize(t) {
                let e = rr(t);
                if (typeof e == 'string') return e;
                if (typeof e == 'boolean') return e ? 'true' : 'false';
                if (typeof e == 'number' && Number.isFinite(e))
                  return e.toString();
                throw new j(`String cannot represent value: ${ee(t)}`);
              },
              parseValue(t) {
                if (typeof t != 'string')
                  throw new j(
                    `String cannot represent a non string value: ${ee(t)}`
                  );
                return t;
              },
              parseLiteral(t) {
                if (t.kind !== f.STRING)
                  throw new j(
                    `String cannot represent a non string value: ${Ge(t)}`,
                    { nodes: t }
                  );
                return t.value;
              },
            }),
            rt = new Ut({
              name: 'Boolean',
              description:
                'The `Boolean` scalar type represents `true` or `false`.',
              serialize(t) {
                let e = rr(t);
                if (typeof e == 'boolean') return e;
                if (Number.isFinite(e)) return e !== 0;
                throw new j(
                  `Boolean cannot represent a non boolean value: ${ee(e)}`
                );
              },
              parseValue(t) {
                if (typeof t != 'boolean')
                  throw new j(
                    `Boolean cannot represent a non boolean value: ${ee(t)}`
                  );
                return t;
              },
              parseLiteral(t) {
                if (t.kind !== f.BOOLEAN)
                  throw new j(
                    `Boolean cannot represent a non boolean value: ${Ge(t)}`,
                    { nodes: t }
                  );
                return t.value;
              },
            }),
            Mr = new Ut({
              name: 'ID',
              description:
                'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.',
              serialize(t) {
                let e = rr(t);
                if (typeof e == 'string') return e;
                if (Number.isInteger(e)) return String(e);
                throw new j(`ID cannot represent value: ${ee(t)}`);
              },
              parseValue(t) {
                if (typeof t == 'string') return t;
                if (typeof t == 'number' && Number.isInteger(t))
                  return t.toString();
                throw new j(`ID cannot represent value: ${ee(t)}`);
              },
              parseLiteral(t) {
                if (t.kind !== f.STRING && t.kind !== f.INT)
                  throw new j(
                    'ID cannot represent a non-string and non-integer value: ' +
                      Ge(t),
                    { nodes: t }
                  );
                return t.value;
              },
            }),
            Hi = Object.freeze([Fe, Ki, Ji, rt, Mr]);
          function nr(t) {
            return Hi.some(({ name: e }) => t.name === e);
          }
          function rr(t) {
            if (Ct(t)) {
              if (typeof t.valueOf == 'function') {
                let e = t.valueOf();
                if (!Ct(e)) return e;
              }
              if (typeof t.toJSON == 'function') return t.toJSON();
            }
            return t;
          }
          class Vt {
            constructor(e) {
              var n, r;
              (this.name = Rt(e.name)),
                (this.description = e.description),
                (this.locations = e.locations),
                (this.isRepeatable =
                  (n = e.isRepeatable) !== null && n !== void 0 && n),
                (this.extensions = St(e.extensions)),
                (this.astNode = e.astNode),
                Array.isArray(e.locations) ||
                  De(!1, `@${e.name} locations must be an Array.`);
              let i = (r = e.args) !== null && r !== void 0 ? r : {};
              (Ct(i) && !Array.isArray(i)) ||
                De(
                  !1,
                  `@${e.name} args must be an object with argument names as keys.`
                ),
                (this.args = Ba(i));
            }
            get [Symbol.toStringTag]() {
              return 'GraphQLDirective';
            }
            toConfig() {
              return {
                name: this.name,
                description: this.description,
                locations: this.locations,
                args: qa(this.args),
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
          let Ka = new Vt({
              name: 'include',
              description:
                'Directs the executor to include this field or fragment only when the `if` argument is true.',
              locations: [U.FIELD, U.FRAGMENT_SPREAD, U.INLINE_FRAGMENT],
              args: {
                if: { type: new Ae(rt), description: 'Included when true.' },
              },
            }),
            Ja = new Vt({
              name: 'skip',
              description:
                'Directs the executor to skip this field or fragment when the `if` argument is true.',
              locations: [U.FIELD, U.FRAGMENT_SPREAD, U.INLINE_FRAGMENT],
              args: {
                if: { type: new Ae(rt), description: 'Skipped when true.' },
              },
            }),
            $r = new Vt({
              name: 'deprecated',
              description:
                'Marks an element of a GraphQL schema as no longer supported.',
              locations: [
                U.FIELD_DEFINITION,
                U.ARGUMENT_DEFINITION,
                U.INPUT_FIELD_DEFINITION,
                U.ENUM_VALUE,
              ],
              args: {
                reason: {
                  type: Fe,
                  description:
                    'Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by [CommonMark](https://commonmark.org/).',
                  defaultValue: 'No longer supported',
                },
              },
            }),
            Ha = new Vt({
              name: 'specifiedBy',
              description:
                'Exposes a URL that specifies the behavior of this scalar.',
              locations: [U.SCALAR],
              args: {
                url: {
                  type: new Ae(Fe),
                  description:
                    'The URL that specifies the behavior of this scalar.',
                },
              },
            }),
            za = new Vt({
              name: 'oneOf',
              description:
                'Indicates exactly one field must be supplied and this field must not be `null`.',
              locations: [U.INPUT_OBJECT],
              args: {},
            }),
            cn = Object.freeze([Ka, Ja, $r, Ha, za]);
          function Wa(t) {
            return cn.some(({ name: e }) => e === t.name);
          }
          function zi(t) {
            return (
              typeof t == 'object' && typeof t?.[Symbol.iterator] == 'function'
            );
          }
          let Xa = /^-?(?:0|[1-9][0-9]*)$/,
            Wi = new ct({
              name: '__Schema',
              description:
                'A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.',
              fields: () => ({
                description: { type: Fe, resolve: (t) => t.description },
                types: {
                  description: 'A list of all types supported by this server.',
                  type: new Ae(new Ze(new Ae(Lt))),
                  resolve: (t) => Object.values(t.getTypeMap()),
                },
                queryType: {
                  description:
                    'The type that query operations will be rooted at.',
                  type: new Ae(Lt),
                  resolve: (t) => t.getQueryType(),
                },
                mutationType: {
                  description:
                    'If this server supports mutation, the type that mutation operations will be rooted at.',
                  type: Lt,
                  resolve: (t) => t.getMutationType(),
                },
                subscriptionType: {
                  description:
                    'If this server support subscription, the type that subscription operations will be rooted at.',
                  type: Lt,
                  resolve: (t) => t.getSubscriptionType(),
                },
                directives: {
                  description:
                    'A list of all directives supported by this server.',
                  type: new Ae(new Ze(new Ae(Za))),
                  resolve: (t) => t.getDirectives(),
                },
              }),
            }),
            Za = new ct({
              name: '__Directive',
              description: `A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.

In some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.`,
              fields: () => ({
                name: { type: new Ae(Fe), resolve: (t) => t.name },
                description: { type: Fe, resolve: (t) => t.description },
                isRepeatable: {
                  type: new Ae(rt),
                  resolve: (t) => t.isRepeatable,
                },
                locations: {
                  type: new Ae(new Ze(new Ae(eo))),
                  resolve: (t) => t.locations,
                },
                args: {
                  type: new Ae(new Ze(new Ae(Fr))),
                  args: { includeDeprecated: { type: rt, defaultValue: !1 } },
                  resolve: (t, { includeDeprecated: e }) =>
                    e
                      ? t.args
                      : t.args.filter((n) => n.deprecationReason == null),
                },
              }),
            }),
            eo = new Bt({
              name: '__DirectiveLocation',
              description:
                'A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.',
              values: {
                QUERY: {
                  value: U.QUERY,
                  description: 'Location adjacent to a query operation.',
                },
                MUTATION: {
                  value: U.MUTATION,
                  description: 'Location adjacent to a mutation operation.',
                },
                SUBSCRIPTION: {
                  value: U.SUBSCRIPTION,
                  description: 'Location adjacent to a subscription operation.',
                },
                FIELD: {
                  value: U.FIELD,
                  description: 'Location adjacent to a field.',
                },
                FRAGMENT_DEFINITION: {
                  value: U.FRAGMENT_DEFINITION,
                  description: 'Location adjacent to a fragment definition.',
                },
                FRAGMENT_SPREAD: {
                  value: U.FRAGMENT_SPREAD,
                  description: 'Location adjacent to a fragment spread.',
                },
                INLINE_FRAGMENT: {
                  value: U.INLINE_FRAGMENT,
                  description: 'Location adjacent to an inline fragment.',
                },
                VARIABLE_DEFINITION: {
                  value: U.VARIABLE_DEFINITION,
                  description: 'Location adjacent to a variable definition.',
                },
                SCHEMA: {
                  value: U.SCHEMA,
                  description: 'Location adjacent to a schema definition.',
                },
                SCALAR: {
                  value: U.SCALAR,
                  description: 'Location adjacent to a scalar definition.',
                },
                OBJECT: {
                  value: U.OBJECT,
                  description:
                    'Location adjacent to an object type definition.',
                },
                FIELD_DEFINITION: {
                  value: U.FIELD_DEFINITION,
                  description: 'Location adjacent to a field definition.',
                },
                ARGUMENT_DEFINITION: {
                  value: U.ARGUMENT_DEFINITION,
                  description: 'Location adjacent to an argument definition.',
                },
                INTERFACE: {
                  value: U.INTERFACE,
                  description: 'Location adjacent to an interface definition.',
                },
                UNION: {
                  value: U.UNION,
                  description: 'Location adjacent to a union definition.',
                },
                ENUM: {
                  value: U.ENUM,
                  description: 'Location adjacent to an enum definition.',
                },
                ENUM_VALUE: {
                  value: U.ENUM_VALUE,
                  description: 'Location adjacent to an enum value definition.',
                },
                INPUT_OBJECT: {
                  value: U.INPUT_OBJECT,
                  description:
                    'Location adjacent to an input object type definition.',
                },
                INPUT_FIELD_DEFINITION: {
                  value: U.INPUT_FIELD_DEFINITION,
                  description:
                    'Location adjacent to an input object field definition.',
                },
              },
            }),
            Lt = new ct({
              name: '__Type',
              description:
                'The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.',
              fields: () => ({
                kind: {
                  type: new Ae(ro),
                  resolve: (t) =>
                    gt(t)
                      ? re.SCALAR
                      : we(t)
                      ? re.OBJECT
                      : Pe(t)
                      ? re.INTERFACE
                      : We(t)
                      ? re.UNION
                      : Be(t)
                      ? re.ENUM
                      : ke(t)
                      ? re.INPUT_OBJECT
                      : Me(t)
                      ? re.LIST
                      : Oe(t)
                      ? re.NON_NULL
                      : void mt(!1, `Unexpected type: "${ee(t)}".`),
                },
                name: {
                  type: Fe,
                  resolve: (t) => ('name' in t ? t.name : void 0),
                },
                description: {
                  type: Fe,
                  resolve: (t) => ('description' in t ? t.description : void 0),
                },
                specifiedByURL: {
                  type: Fe,
                  resolve: (t) =>
                    'specifiedByURL' in t ? t.specifiedByURL : void 0,
                },
                fields: {
                  type: new Ze(new Ae(to)),
                  args: { includeDeprecated: { type: rt, defaultValue: !1 } },
                  resolve(t, { includeDeprecated: e }) {
                    if (we(t) || Pe(t)) {
                      let n = Object.values(t.getFields());
                      return e
                        ? n
                        : n.filter((r) => r.deprecationReason == null);
                    }
                  },
                },
                interfaces: {
                  type: new Ze(new Ae(Lt)),
                  resolve(t) {
                    if (we(t) || Pe(t)) return t.getInterfaces();
                  },
                },
                possibleTypes: {
                  type: new Ze(new Ae(Lt)),
                  resolve(t, e, n, { schema: r }) {
                    if (ln(t)) return r.getPossibleTypes(t);
                  },
                },
                enumValues: {
                  type: new Ze(new Ae(no)),
                  args: { includeDeprecated: { type: rt, defaultValue: !1 } },
                  resolve(t, { includeDeprecated: e }) {
                    if (Be(t)) {
                      let n = t.getValues();
                      return e
                        ? n
                        : n.filter((r) => r.deprecationReason == null);
                    }
                  },
                },
                inputFields: {
                  type: new Ze(new Ae(Fr)),
                  args: { includeDeprecated: { type: rt, defaultValue: !1 } },
                  resolve(t, { includeDeprecated: e }) {
                    if (ke(t)) {
                      let n = Object.values(t.getFields());
                      return e
                        ? n
                        : n.filter((r) => r.deprecationReason == null);
                    }
                  },
                },
                ofType: {
                  type: Lt,
                  resolve: (t) => ('ofType' in t ? t.ofType : void 0),
                },
                isOneOf: {
                  type: rt,
                  resolve: (t) => {
                    if (ke(t)) return t.isOneOf;
                  },
                },
              }),
            }),
            to = new ct({
              name: '__Field',
              description:
                'Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.',
              fields: () => ({
                name: { type: new Ae(Fe), resolve: (t) => t.name },
                description: { type: Fe, resolve: (t) => t.description },
                args: {
                  type: new Ae(new Ze(new Ae(Fr))),
                  args: { includeDeprecated: { type: rt, defaultValue: !1 } },
                  resolve: (t, { includeDeprecated: e }) =>
                    e
                      ? t.args
                      : t.args.filter((n) => n.deprecationReason == null),
                },
                type: { type: new Ae(Lt), resolve: (t) => t.type },
                isDeprecated: {
                  type: new Ae(rt),
                  resolve: (t) => t.deprecationReason != null,
                },
                deprecationReason: {
                  type: Fe,
                  resolve: (t) => t.deprecationReason,
                },
              }),
            }),
            Fr = new ct({
              name: '__InputValue',
              description:
                'Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.',
              fields: () => ({
                name: { type: new Ae(Fe), resolve: (t) => t.name },
                description: { type: Fe, resolve: (t) => t.description },
                type: { type: new Ae(Lt), resolve: (t) => t.type },
                defaultValue: {
                  type: Fe,
                  description:
                    'A GraphQL-formatted string representing the default value for this input value.',
                  resolve(t) {
                    let { type: e, defaultValue: n } = t,
                      r = (function i(s, o) {
                        if (Oe(o)) {
                          let a = i(s, o.ofType);
                          return a?.kind === f.NULL ? null : a;
                        }
                        if (s === null) return { kind: f.NULL };
                        if (s === void 0) return null;
                        if (Me(o)) {
                          let a = o.ofType;
                          if (zi(s)) {
                            let u = [];
                            for (let c of s) {
                              let l = i(c, a);
                              l != null && u.push(l);
                            }
                            return { kind: f.LIST, values: u };
                          }
                          return i(s, a);
                        }
                        if (ke(o)) {
                          if (!Ct(s)) return null;
                          let a = [];
                          for (let u of Object.values(o.getFields())) {
                            let c = i(s[u.name], u.type);
                            c &&
                              a.push({
                                kind: f.OBJECT_FIELD,
                                name: { kind: f.NAME, value: u.name },
                                value: c,
                              });
                          }
                          return { kind: f.OBJECT, fields: a };
                        }
                        if (vt(o)) {
                          let a = o.serialize(s);
                          if (a == null) return null;
                          if (typeof a == 'boolean')
                            return { kind: f.BOOLEAN, value: a };
                          if (typeof a == 'number' && Number.isFinite(a)) {
                            let u = String(a);
                            return Xa.test(u)
                              ? { kind: f.INT, value: u }
                              : { kind: f.FLOAT, value: u };
                          }
                          if (typeof a == 'string')
                            return Be(o)
                              ? { kind: f.ENUM, value: a }
                              : o === Mr && Xa.test(a)
                              ? { kind: f.INT, value: a }
                              : { kind: f.STRING, value: a };
                          throw TypeError(
                            `Cannot convert value to AST: ${ee(a)}.`
                          );
                        }
                        mt(!1, 'Unexpected input type: ' + ee(o));
                      })(n, e);
                    return r ? Ge(r) : null;
                  },
                },
                isDeprecated: {
                  type: new Ae(rt),
                  resolve: (t) => t.deprecationReason != null,
                },
                deprecationReason: {
                  type: Fe,
                  resolve: (t) => t.deprecationReason,
                },
              }),
            }),
            no = new ct({
              name: '__EnumValue',
              description:
                'One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.',
              fields: () => ({
                name: { type: new Ae(Fe), resolve: (t) => t.name },
                description: { type: Fe, resolve: (t) => t.description },
                isDeprecated: {
                  type: new Ae(rt),
                  resolve: (t) => t.deprecationReason != null,
                },
                deprecationReason: {
                  type: Fe,
                  resolve: (t) => t.deprecationReason,
                },
              }),
            });
          (function (t) {
            (t.SCALAR = 'SCALAR'),
              (t.OBJECT = 'OBJECT'),
              (t.INTERFACE = 'INTERFACE'),
              (t.UNION = 'UNION'),
              (t.ENUM = 'ENUM'),
              (t.INPUT_OBJECT = 'INPUT_OBJECT'),
              (t.LIST = 'LIST'),
              (t.NON_NULL = 'NON_NULL');
          })(re || (re = {}));
          let ro = new Bt({
              name: '__TypeKind',
              description:
                'An enum describing what kind of type a given `__Type` is.',
              values: {
                SCALAR: {
                  value: re.SCALAR,
                  description: 'Indicates this type is a scalar.',
                },
                OBJECT: {
                  value: re.OBJECT,
                  description:
                    'Indicates this type is an object. `fields` and `interfaces` are valid fields.',
                },
                INTERFACE: {
                  value: re.INTERFACE,
                  description:
                    'Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields.',
                },
                UNION: {
                  value: re.UNION,
                  description:
                    'Indicates this type is a union. `possibleTypes` is a valid field.',
                },
                ENUM: {
                  value: re.ENUM,
                  description:
                    'Indicates this type is an enum. `enumValues` is a valid field.',
                },
                INPUT_OBJECT: {
                  value: re.INPUT_OBJECT,
                  description:
                    'Indicates this type is an input object. `inputFields` is a valid field.',
                },
                LIST: {
                  value: re.LIST,
                  description:
                    'Indicates this type is a list. `ofType` is a valid field.',
                },
                NON_NULL: {
                  value: re.NON_NULL,
                  description:
                    'Indicates this type is a non-null. `ofType` is a valid field.',
                },
              },
            }),
            jr = {
              name: '__schema',
              type: new Ae(Wi),
              description: 'Access the current type schema of this server.',
              args: [],
              resolve: (t, e, n, { schema: r }) => r,
              deprecationReason: void 0,
              extensions: Object.create(null),
              astNode: void 0,
            },
            Ur = {
              name: '__type',
              type: Lt,
              description: 'Request the type information of a single type.',
              args: [
                {
                  name: 'name',
                  description: void 0,
                  type: new Ae(Fe),
                  defaultValue: void 0,
                  deprecationReason: void 0,
                  extensions: Object.create(null),
                  astNode: void 0,
                },
              ],
              resolve: (t, { name: e }, n, { schema: r }) => r.getType(e),
              deprecationReason: void 0,
              extensions: Object.create(null),
              astNode: void 0,
            },
            Br = {
              name: '__typename',
              type: new Ae(Fe),
              description: 'The name of the current Object type at runtime.',
              args: [],
              resolve: (t, e, n, { parentType: r }) => r.name,
              deprecationReason: void 0,
              extensions: Object.create(null),
              astNode: void 0,
            },
            Xi = Object.freeze([Wi, Za, eo, Lt, to, Fr, no, ro]);
          function Zi(t) {
            return Xi.some(({ name: e }) => t.name === e);
          }
          class ir {
            constructor(e) {
              var n, r;
              (this.__validationErrors = e.assumeValid === !0 ? [] : void 0),
                Ct(e) || De(!1, 'Must provide configuration object.'),
                !e.types ||
                  Array.isArray(e.types) ||
                  De(
                    !1,
                    `"types" must be Array if provided but got: ${ee(e.types)}.`
                  ),
                !e.directives ||
                  Array.isArray(e.directives) ||
                  De(
                    !1,
                    `"directives" must be Array if provided but got: ${ee(
                      e.directives
                    )}.`
                  ),
                (this.description = e.description),
                (this.extensions = St(e.extensions)),
                (this.astNode = e.astNode),
                (this.extensionASTNodes =
                  (n = e.extensionASTNodes) !== null && n !== void 0 ? n : []),
                (this._queryType = e.query),
                (this._mutationType = e.mutation),
                (this._subscriptionType = e.subscription),
                (this._directives =
                  (r = e.directives) !== null && r !== void 0 ? r : cn);
              let i = new Set(e.types);
              if (e.types != null) for (let s of e.types) i.delete(s), kt(s, i);
              for (let s of (this._queryType != null && kt(this._queryType, i),
              this._mutationType != null && kt(this._mutationType, i),
              this._subscriptionType != null && kt(this._subscriptionType, i),
              this._directives))
                if (lt(s, Vt)) for (let o of s.args) kt(o.type, i);
              for (let s of (kt(Wi, i),
              (this._typeMap = Object.create(null)),
              (this._subTypeMap = Object.create(null)),
              (this._implementationsMap = Object.create(null)),
              i)) {
                if (s == null) continue;
                let o = s.name;
                if (
                  (o ||
                    De(
                      !1,
                      'One of the provided types for building the Schema is missing a name.'
                    ),
                  this._typeMap[o] !== void 0)
                )
                  throw Error(
                    `Schema must contain uniquely named types but contains multiple types named "${o}".`
                  );
                if (((this._typeMap[o] = s), Pe(s))) {
                  for (let a of s.getInterfaces())
                    if (Pe(a)) {
                      let u = this._implementationsMap[a.name];
                      u === void 0 &&
                        (u = this._implementationsMap[a.name] =
                          { objects: [], interfaces: [] }),
                        u.interfaces.push(s);
                    }
                } else if (we(s)) {
                  for (let a of s.getInterfaces())
                    if (Pe(a)) {
                      let u = this._implementationsMap[a.name];
                      u === void 0 &&
                        (u = this._implementationsMap[a.name] =
                          { objects: [], interfaces: [] }),
                        u.objects.push(s);
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
                case fe.QUERY:
                  return this.getQueryType();
                case fe.MUTATION:
                  return this.getMutationType();
                case fe.SUBSCRIPTION:
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
              return We(e) ? e.getTypes() : this.getImplementations(e).objects;
            }
            getImplementations(e) {
              let n = this._implementationsMap[e.name];
              return n ?? { objects: [], interfaces: [] };
            }
            isSubType(e, n) {
              let r = this._subTypeMap[e.name];
              if (r === void 0) {
                if (((r = Object.create(null)), We(e)))
                  for (let i of e.getTypes()) r[i.name] = !0;
                else {
                  let i = this.getImplementations(e);
                  for (let s of i.objects) r[s.name] = !0;
                  for (let s of i.interfaces) r[s.name] = !0;
                }
                this._subTypeMap[e.name] = r;
              }
              return r[n.name] !== void 0;
            }
            getDirectives() {
              return this._directives;
            }
            getDirective(e) {
              return this.getDirectives().find((n) => n.name === e);
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
                assumeValid: this.__validationErrors !== void 0,
              };
            }
          }
          function kt(t, e) {
            let n = ut(t);
            if (!e.has(n)) {
              if ((e.add(n), We(n))) for (let r of n.getTypes()) kt(r, e);
              else if (we(n) || Pe(n)) {
                for (let r of n.getInterfaces()) kt(r, e);
                for (let r of Object.values(n.getFields()))
                  for (let i of (kt(r.type, e), r.args)) kt(i.type, e);
              } else if (ke(n))
                for (let r of Object.values(n.getFields())) kt(r.type, e);
            }
            return e;
          }
          function io(t) {
            if (
              ((function (r) {
                if (!lt(r, ir))
                  throw Error(`Expected ${ee(r)} to be a GraphQL schema.`);
              })(t),
              t.__validationErrors)
            )
              return t.__validationErrors;
            let e = new zu(t);
            (function (r) {
              var i, s, o;
              let a = r.schema,
                u = a.getQueryType();
              u
                ? we(u) ||
                  r.reportError(
                    `Query root type must be Object type, it cannot be ${ee(
                      u
                    )}.`,
                    (i = es(a, fe.QUERY)) !== null && i !== void 0
                      ? i
                      : u.astNode
                  )
                : r.reportError('Query root type must be provided.', a.astNode);
              let c = a.getMutationType();
              c &&
                !we(c) &&
                r.reportError(
                  `Mutation root type must be Object type if provided, it cannot be ${ee(
                    c
                  )}.`,
                  (s = es(a, fe.MUTATION)) !== null && s !== void 0
                    ? s
                    : c.astNode
                );
              let l = a.getSubscriptionType();
              l &&
                !we(l) &&
                r.reportError(
                  `Subscription root type must be Object type if provided, it cannot be ${ee(
                    l
                  )}.`,
                  (o = es(a, fe.SUBSCRIPTION)) !== null && o !== void 0
                    ? o
                    : l.astNode
                );
            })(e),
              (function (r) {
                for (let s of r.schema.getDirectives()) {
                  if (!lt(s, Vt)) {
                    r.reportError(
                      `Expected directive but got: ${ee(s)}.`,
                      s?.astNode
                    );
                    continue;
                  }
                  for (let o of (_n(r, s),
                  s.locations.length === 0 &&
                    r.reportError(
                      `Directive @${s.name} must include 1 or more locations.`,
                      s.astNode
                    ),
                  s.args))
                    if (
                      (_n(r, o),
                      Pt(o.type) ||
                        r.reportError(
                          `The type of @${s.name}(${
                            o.name
                          }:) must be Input Type but got: ${ee(o.type)}.`,
                          o.astNode
                        ),
                      er(o) && o.deprecationReason != null)
                    ) {
                      var i;
                      r.reportError(
                        `Required argument @${s.name}(${o.name}:) cannot be deprecated.`,
                        [
                          ts(o.astNode),
                          (i = o.astNode) === null || i === void 0
                            ? void 0
                            : i.type,
                        ]
                      );
                    }
                }
              })(e),
              (function (r) {
                let i = (function (s) {
                  let o = Object.create(null),
                    a = [],
                    u = Object.create(null);
                  return function c(l) {
                    if (!o[l.name]) {
                      for (let d of ((o[l.name] = !0),
                      (u[l.name] = a.length),
                      Object.values(l.getFields())))
                        if (Oe(d.type) && ke(d.type.ofType)) {
                          let p = d.type.ofType,
                            g = u[p.name];
                          if ((a.push(d), g === void 0)) c(p);
                          else {
                            let h = a.slice(g),
                              S = h.map((I) => I.name).join('.');
                            s.reportError(
                              `Cannot reference Input Object "${p.name}" within itself through a series of non-null fields: "${S}".`,
                              h.map((I) => I.astNode)
                            );
                          }
                          a.pop();
                        }
                      u[l.name] = void 0;
                    }
                  };
                })(r);
                for (let s of Object.values(r.schema.getTypeMap())) {
                  if (!Lr(s)) {
                    r.reportError(
                      `Expected GraphQL named type but got: ${ee(s)}.`,
                      s.astNode
                    );
                    continue;
                  }
                  Zi(s) || _n(r, s),
                    we(s) || Pe(s)
                      ? (ao(r, s), oo(r, s))
                      : We(s)
                      ? (function (o, a) {
                          let u = a.getTypes();
                          u.length === 0 &&
                            o.reportError(
                              `Union type ${a.name} must define one or more member types.`,
                              [a.astNode, ...a.extensionASTNodes]
                            );
                          let c = Object.create(null);
                          for (let l of u) {
                            if (c[l.name]) {
                              o.reportError(
                                `Union type ${a.name} can only include type ${l.name} once.`,
                                lo(a, l.name)
                              );
                              continue;
                            }
                            (c[l.name] = !0),
                              we(l) ||
                                o.reportError(
                                  `Union type ${
                                    a.name
                                  } can only include Object types, it cannot include ${ee(
                                    l
                                  )}.`,
                                  lo(a, String(l))
                                );
                          }
                        })(r, s)
                      : Be(s)
                      ? (function (o, a) {
                          let u = a.getValues();
                          for (let c of (u.length === 0 &&
                            o.reportError(
                              `Enum type ${a.name} must define one or more values.`,
                              [a.astNode, ...a.extensionASTNodes]
                            ),
                          u))
                            _n(o, c);
                        })(r, s)
                      : ke(s) &&
                        ((function (o, a) {
                          let u = Object.values(a.getFields());
                          for (let d of (u.length === 0 &&
                            o.reportError(
                              `Input Object type ${a.name} must define one or more fields.`,
                              [a.astNode, ...a.extensionASTNodes]
                            ),
                          u)) {
                            var c, l;
                            _n(o, d),
                              Pt(d.type) ||
                                o.reportError(
                                  `The type of ${a.name}.${
                                    d.name
                                  } must be Input Type but got: ${ee(d.type)}.`,
                                  (c = d.astNode) === null || c === void 0
                                    ? void 0
                                    : c.type
                                ),
                              Ya(d) &&
                                d.deprecationReason != null &&
                                o.reportError(
                                  `Required input field ${a.name}.${d.name} cannot be deprecated.`,
                                  [
                                    ts(d.astNode),
                                    (l = d.astNode) === null || l === void 0
                                      ? void 0
                                      : l.type,
                                  ]
                                ),
                              a.isOneOf &&
                                (function (p, g, h) {
                                  if (Oe(g.type)) {
                                    var S;
                                    h.reportError(
                                      `OneOf input field ${p.name}.${g.name} must be nullable.`,
                                      (S = g.astNode) === null || S === void 0
                                        ? void 0
                                        : S.type
                                    );
                                  }
                                  g.defaultValue !== void 0 &&
                                    h.reportError(
                                      `OneOf input field ${p.name}.${g.name} cannot have a default value.`,
                                      g.astNode
                                    );
                                })(a, d, o);
                          }
                        })(r, s),
                        i(s));
                }
              })(e);
            let n = e.getErrors();
            return (t.__validationErrors = n), n;
          }
          function so(t) {
            let e = io(t);
            if (e.length !== 0)
              throw Error(
                e.map((n) => n.message).join(`

`)
              );
          }
          class zu {
            constructor(e) {
              (this._errors = []), (this.schema = e);
            }
            reportError(e, n) {
              let r = Array.isArray(n) ? n.filter(Boolean) : n;
              this._errors.push(new j(e, { nodes: r }));
            }
            getErrors() {
              return this._errors;
            }
          }
          function es(t, e) {
            var n;
            return (n = [t.astNode, ...t.extensionASTNodes]
              .flatMap((r) => {
                var i;
                return (i = r?.operationTypes) !== null && i !== void 0
                  ? i
                  : [];
              })
              .find((r) => r.operation === e)) === null || n === void 0
              ? void 0
              : n.type;
          }
          function _n(t, e) {
            e.name.startsWith('__') &&
              t.reportError(
                `Name "${e.name}" must not begin with "__", which is reserved by GraphQL introspection.`,
                e.astNode
              );
          }
          function ao(t, e) {
            let n = Object.values(e.getFields());
            for (let o of (n.length === 0 &&
              t.reportError(`Type ${e.name} must define one or more fields.`, [
                e.astNode,
                ...e.extensionASTNodes,
              ]),
            n)) {
              var r, i, s;
              for (let a of (_n(t, o),
              Zn(o.type) ||
                t.reportError(
                  `The type of ${e.name}.${
                    o.name
                  } must be Output Type but got: ${ee(o.type)}.`,
                  (r = o.astNode) === null || r === void 0 ? void 0 : r.type
                ),
              o.args)) {
                let u = a.name;
                _n(t, a),
                  Pt(a.type) ||
                    t.reportError(
                      `The type of ${e.name}.${
                        o.name
                      }(${u}:) must be Input Type but got: ${ee(a.type)}.`,
                      (i = a.astNode) === null || i === void 0 ? void 0 : i.type
                    ),
                  er(a) &&
                    a.deprecationReason != null &&
                    t.reportError(
                      `Required argument ${e.name}.${o.name}(${u}:) cannot be deprecated.`,
                      [
                        ts(a.astNode),
                        (s = a.astNode) === null || s === void 0
                          ? void 0
                          : s.type,
                      ]
                    );
              }
            }
          }
          function oo(t, e) {
            let n = Object.create(null);
            for (let r of e.getInterfaces()) {
              if (!Pe(r)) {
                t.reportError(
                  `Type ${ee(
                    e
                  )} must only implement Interface types, it cannot implement ${ee(
                    r
                  )}.`,
                  sr(e, r)
                );
                continue;
              }
              if (e === r) {
                t.reportError(
                  `Type ${e.name} cannot implement itself because it would create a circular reference.`,
                  sr(e, r)
                );
                continue;
              }
              if (n[r.name]) {
                t.reportError(
                  `Type ${e.name} can only implement ${r.name} once.`,
                  sr(e, r)
                );
                continue;
              }
              (n[r.name] = !0),
                (function (i, s, o) {
                  let a = s.getInterfaces();
                  for (let u of o.getInterfaces())
                    a.includes(u) ||
                      i.reportError(
                        u === s
                          ? `Type ${s.name} cannot implement ${o.name} because it would create a circular reference.`
                          : `Type ${s.name} must implement ${u.name} because it is implemented by ${o.name}.`,
                        [...sr(o, u), ...sr(s, o)]
                      );
                })(t, e, r),
                (function (i, s, o) {
                  let a = s.getFields();
                  for (let p of Object.values(o.getFields())) {
                    var u, c, l, d;
                    let g = p.name,
                      h = a[g];
                    if (!h) {
                      i.reportError(
                        `Interface field ${o.name}.${g} expected but ${s.name} does not provide it.`,
                        [p.astNode, s.astNode, ...s.extensionASTNodes]
                      );
                      continue;
                    }
                    for (let S of (jn(i.schema, h.type, p.type) ||
                      i.reportError(
                        `Interface field ${o.name}.${g} expects type ${ee(
                          p.type
                        )} but ${s.name}.${g} is type ${ee(h.type)}.`,
                        [
                          (u = p.astNode) === null || u === void 0
                            ? void 0
                            : u.type,
                          (c = h.astNode) === null || c === void 0
                            ? void 0
                            : c.type,
                        ]
                      ),
                    p.args)) {
                      let I = S.name,
                        w = h.args.find((R) => R.name === I);
                      if (!w) {
                        i.reportError(
                          `Interface field argument ${o.name}.${g}(${I}:) expected but ${s.name}.${g} does not provide it.`,
                          [S.astNode, h.astNode]
                        );
                        continue;
                      }
                      !(function R(A, O) {
                        return (
                          A === O ||
                          (!!((Oe(A) && Oe(O)) || (Me(A) && Me(O))) &&
                            R(A.ofType, O.ofType))
                        );
                      })(S.type, w.type) &&
                        i.reportError(
                          `Interface field argument ${
                            o.name
                          }.${g}(${I}:) expects type ${ee(S.type)} but ${
                            s.name
                          }.${g}(${I}:) is type ${ee(w.type)}.`,
                          [
                            (l = S.astNode) === null || l === void 0
                              ? void 0
                              : l.type,
                            (d = w.astNode) === null || d === void 0
                              ? void 0
                              : d.type,
                          ]
                        );
                    }
                    for (let S of h.args) {
                      let I = S.name;
                      !p.args.find((w) => w.name === I) &&
                        er(S) &&
                        i.reportError(
                          `Object field ${s.name}.${g} includes required argument ${I} that is missing from the Interface field ${o.name}.${g}.`,
                          [S.astNode, p.astNode]
                        );
                    }
                  }
                })(t, e, r);
            }
          }
          function sr(t, e) {
            let { astNode: n, extensionASTNodes: r } = t;
            return (n != null ? [n, ...r] : r)
              .flatMap((i) => {
                var s;
                return (s = i.interfaces) !== null && s !== void 0 ? s : [];
              })
              .filter((i) => i.name.value === e.name);
          }
          function lo(t, e) {
            let { astNode: n, extensionASTNodes: r } = t;
            return (n != null ? [n, ...r] : r)
              .flatMap((i) => {
                var s;
                return (s = i.types) !== null && s !== void 0 ? s : [];
              })
              .filter((i) => i.name.value === e);
          }
          function ts(t) {
            var e;
            return t == null || (e = t.directives) === null || e === void 0
              ? void 0
              : e.find((n) => n.name.value === $r.name);
          }
          function yt(t, e) {
            switch (e.kind) {
              case f.LIST_TYPE: {
                let n = yt(t, e.type);
                return n && new Ze(n);
              }
              case f.NON_NULL_TYPE: {
                let n = yt(t, e.type);
                return n && new Ae(n);
              }
              case f.NAMED_TYPE:
                return t.getType(e.name.value);
            }
          }
          class uo {
            constructor(e, n, r) {
              (this._schema = e),
                (this._typeStack = []),
                (this._parentTypeStack = []),
                (this._inputTypeStack = []),
                (this._fieldDefStack = []),
                (this._defaultValueStack = []),
                (this._directive = null),
                (this._argument = null),
                (this._enumValue = null),
                (this._getFieldDef = r ?? Wu),
                n &&
                  (Pt(n) && this._inputTypeStack.push(n),
                  on(n) && this._parentTypeStack.push(n),
                  Zn(n) && this._typeStack.push(n));
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
                return this._defaultValueStack[
                  this._defaultValueStack.length - 1
                ];
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
              let n = this._schema;
              switch (e.kind) {
                case f.SELECTION_SET: {
                  let i = ut(this.getType());
                  this._parentTypeStack.push(on(i) ? i : void 0);
                  break;
                }
                case f.FIELD: {
                  let i,
                    s,
                    o = this.getParentType();
                  o && (i = this._getFieldDef(n, o, e)) && (s = i.type),
                    this._fieldDefStack.push(i),
                    this._typeStack.push(Zn(s) ? s : void 0);
                  break;
                }
                case f.DIRECTIVE:
                  this._directive = n.getDirective(e.name.value);
                  break;
                case f.OPERATION_DEFINITION: {
                  let i = n.getRootType(e.operation);
                  this._typeStack.push(we(i) ? i : void 0);
                  break;
                }
                case f.INLINE_FRAGMENT:
                case f.FRAGMENT_DEFINITION: {
                  let i = e.typeCondition,
                    s = i ? yt(n, i) : ut(this.getType());
                  this._typeStack.push(Zn(s) ? s : void 0);
                  break;
                }
                case f.VARIABLE_DEFINITION: {
                  let i = yt(n, e.type);
                  this._inputTypeStack.push(Pt(i) ? i : void 0);
                  break;
                }
                case f.ARGUMENT: {
                  var r;
                  let i,
                    s,
                    o =
                      (r = this.getDirective()) !== null && r !== void 0
                        ? r
                        : this.getFieldDef();
                  o &&
                    (i = o.args.find((a) => a.name === e.name.value)) &&
                    (s = i.type),
                    (this._argument = i),
                    this._defaultValueStack.push(i ? i.defaultValue : void 0),
                    this._inputTypeStack.push(Pt(s) ? s : void 0);
                  break;
                }
                case f.LIST: {
                  let i = Gi(this.getInputType()),
                    s = Me(i) ? i.ofType : i;
                  this._defaultValueStack.push(void 0),
                    this._inputTypeStack.push(Pt(s) ? s : void 0);
                  break;
                }
                case f.OBJECT_FIELD: {
                  let i,
                    s,
                    o = ut(this.getInputType());
                  ke(o) && (s = o.getFields()[e.name.value]) && (i = s.type),
                    this._defaultValueStack.push(s ? s.defaultValue : void 0),
                    this._inputTypeStack.push(Pt(i) ? i : void 0);
                  break;
                }
                case f.ENUM: {
                  let i,
                    s = ut(this.getInputType());
                  Be(s) && (i = s.getValue(e.value)), (this._enumValue = i);
                }
              }
            }
            leave(e) {
              switch (e.kind) {
                case f.SELECTION_SET:
                  this._parentTypeStack.pop();
                  break;
                case f.FIELD:
                  this._fieldDefStack.pop(), this._typeStack.pop();
                  break;
                case f.DIRECTIVE:
                  this._directive = null;
                  break;
                case f.OPERATION_DEFINITION:
                case f.INLINE_FRAGMENT:
                case f.FRAGMENT_DEFINITION:
                  this._typeStack.pop();
                  break;
                case f.VARIABLE_DEFINITION:
                  this._inputTypeStack.pop();
                  break;
                case f.ARGUMENT:
                  (this._argument = null),
                    this._defaultValueStack.pop(),
                    this._inputTypeStack.pop();
                  break;
                case f.LIST:
                case f.OBJECT_FIELD:
                  this._defaultValueStack.pop(), this._inputTypeStack.pop();
                  break;
                case f.ENUM:
                  this._enumValue = null;
              }
            }
          }
          function Wu(t, e, n) {
            let r = n.name.value;
            return r === jr.name && t.getQueryType() === e
              ? jr
              : r === Ur.name && t.getQueryType() === e
              ? Ur
              : r === Br.name && on(e)
              ? Br
              : we(e) || Pe(e)
              ? e.getFields()[r]
              : void 0;
          }
          function co(t, e) {
            return {
              enter(...n) {
                let r = n[0];
                t.enter(r);
                let i = Cr(e, r.kind).enter;
                if (i) {
                  let s = i.apply(e, n);
                  return s !== void 0 && (t.leave(r), Mi(s) && t.enter(s)), s;
                }
              },
              leave(...n) {
                let r,
                  i = n[0],
                  s = Cr(e, i.kind).leave;
                return s && (r = s.apply(e, n)), t.leave(i), r;
              },
            };
          }
          function po(t) {
            return (
              t.kind === f.OPERATION_DEFINITION ||
              t.kind === f.FRAGMENT_DEFINITION
            );
          }
          function fo(t) {
            return (
              (t.kind === Kind.VARIABLE ||
                t.kind === Kind.INT ||
                t.kind === Kind.FLOAT ||
                t.kind === Kind.STRING ||
                t.kind === Kind.BOOLEAN ||
                t.kind === Kind.NULL ||
                t.kind === Kind.ENUM ||
                t.kind === Kind.LIST ||
                t.kind === Kind.OBJECT) &&
              (t.kind === Kind.LIST
                ? t.values.some(fo)
                : t.kind === Kind.OBJECT
                ? t.fields.some((e) => fo(e.value))
                : t.kind !== Kind.VARIABLE)
            );
          }
          function ho(t) {
            return (
              t.kind === f.SCHEMA_DEFINITION ||
              ar(t) ||
              t.kind === f.DIRECTIVE_DEFINITION
            );
          }
          function ar(t) {
            return (
              t.kind === f.SCALAR_TYPE_DEFINITION ||
              t.kind === f.OBJECT_TYPE_DEFINITION ||
              t.kind === f.INTERFACE_TYPE_DEFINITION ||
              t.kind === f.UNION_TYPE_DEFINITION ||
              t.kind === f.ENUM_TYPE_DEFINITION ||
              t.kind === f.INPUT_OBJECT_TYPE_DEFINITION
            );
          }
          function mo(t) {
            return t.kind === f.SCHEMA_EXTENSION || ns(t);
          }
          function ns(t) {
            return (
              t.kind === f.SCALAR_TYPE_EXTENSION ||
              t.kind === f.OBJECT_TYPE_EXTENSION ||
              t.kind === f.INTERFACE_TYPE_EXTENSION ||
              t.kind === f.UNION_TYPE_EXTENSION ||
              t.kind === f.ENUM_TYPE_EXTENSION ||
              t.kind === f.INPUT_OBJECT_TYPE_EXTENSION
            );
          }
          function go(t) {
            let e = Object.create(null),
              n = t.getSchema();
            for (let i of n ? n.getDirectives() : cn)
              e[i.name] = i.args.map((s) => s.name);
            for (let i of t.getDocument().definitions)
              if (i.kind === f.DIRECTIVE_DEFINITION) {
                var r;
                let s = (r = i.arguments) !== null && r !== void 0 ? r : [];
                e[i.name.value] = s.map((o) => o.name.value);
              }
            return {
              Directive(i) {
                let s = i.name.value,
                  o = e[s];
                if (i.arguments && o)
                  for (let a of i.arguments) {
                    let u = a.name.value;
                    if (!o.includes(u)) {
                      let c = an(u, o);
                      t.reportError(
                        new j(
                          `Unknown argument "${u}" on directive "@${s}".` +
                            Ht(c),
                          { nodes: a }
                        )
                      );
                    }
                  }
                return !1;
              },
            };
          }
          function vo(t) {
            let e = Object.create(null),
              n = t.getSchema();
            for (let r of n ? n.getDirectives() : cn) e[r.name] = r.locations;
            for (let r of t.getDocument().definitions)
              r.kind === f.DIRECTIVE_DEFINITION &&
                (e[r.name.value] = r.locations.map((i) => i.value));
            return {
              Directive(r, i, s, o, a) {
                let u = r.name.value,
                  c = e[u];
                if (!c) {
                  t.reportError(
                    new j(`Unknown directive "@${u}".`, { nodes: r })
                  );
                  return;
                }
                let l = (function (d) {
                  let p = d[d.length - 1];
                  switch (('kind' in p || mt(!1), p.kind)) {
                    case f.OPERATION_DEFINITION:
                      return (function (g) {
                        switch (g) {
                          case fe.QUERY:
                            return U.QUERY;
                          case fe.MUTATION:
                            return U.MUTATION;
                          case fe.SUBSCRIPTION:
                            return U.SUBSCRIPTION;
                        }
                      })(p.operation);
                    case f.FIELD:
                      return U.FIELD;
                    case f.FRAGMENT_SPREAD:
                      return U.FRAGMENT_SPREAD;
                    case f.INLINE_FRAGMENT:
                      return U.INLINE_FRAGMENT;
                    case f.FRAGMENT_DEFINITION:
                      return U.FRAGMENT_DEFINITION;
                    case f.VARIABLE_DEFINITION:
                      return U.VARIABLE_DEFINITION;
                    case f.SCHEMA_DEFINITION:
                    case f.SCHEMA_EXTENSION:
                      return U.SCHEMA;
                    case f.SCALAR_TYPE_DEFINITION:
                    case f.SCALAR_TYPE_EXTENSION:
                      return U.SCALAR;
                    case f.OBJECT_TYPE_DEFINITION:
                    case f.OBJECT_TYPE_EXTENSION:
                      return U.OBJECT;
                    case f.FIELD_DEFINITION:
                      return U.FIELD_DEFINITION;
                    case f.INTERFACE_TYPE_DEFINITION:
                    case f.INTERFACE_TYPE_EXTENSION:
                      return U.INTERFACE;
                    case f.UNION_TYPE_DEFINITION:
                    case f.UNION_TYPE_EXTENSION:
                      return U.UNION;
                    case f.ENUM_TYPE_DEFINITION:
                    case f.ENUM_TYPE_EXTENSION:
                      return U.ENUM;
                    case f.ENUM_VALUE_DEFINITION:
                      return U.ENUM_VALUE;
                    case f.INPUT_OBJECT_TYPE_DEFINITION:
                    case f.INPUT_OBJECT_TYPE_EXTENSION:
                      return U.INPUT_OBJECT;
                    case f.INPUT_VALUE_DEFINITION: {
                      let g = d[d.length - 3];
                      return (
                        'kind' in g || mt(!1),
                        g.kind === f.INPUT_OBJECT_TYPE_DEFINITION
                          ? U.INPUT_FIELD_DEFINITION
                          : U.ARGUMENT_DEFINITION
                      );
                    }
                    default:
                      mt(!1, 'Unexpected kind: ' + ee(p.kind));
                  }
                })(a);
                l &&
                  !c.includes(l) &&
                  t.reportError(
                    new j(`Directive "@${u}" may not be used on ${l}.`, {
                      nodes: r,
                    })
                  );
              },
            };
          }
          function yo(t) {
            let e = t.getSchema(),
              n = e ? e.getTypeMap() : Object.create(null),
              r = Object.create(null);
            for (let s of t.getDocument().definitions)
              ar(s) && (r[s.name.value] = !0);
            let i = [...Object.keys(n), ...Object.keys(r)];
            return {
              NamedType(s, o, a, u, c) {
                let l = s.name.value;
                if (!n[l] && !r[l]) {
                  var d, p;
                  let g = (d = c[2]) !== null && d !== void 0 ? d : a,
                    h = g != null && 'kind' in (p = g) && (ho(p) || mo(p));
                  if (h && To.includes(l)) return;
                  let S = an(l, h ? To.concat(i) : i);
                  t.reportError(
                    new j(`Unknown type "${l}".` + Ht(S), { nodes: s })
                  );
                }
              },
            };
          }
          let To = [...Hi, ...Xi].map((t) => t.name);
          function Vr(t, e, n, r, i, s, o, a) {
            if (r.has(o, a, s)) return;
            r.add(o, a, s);
            let u = t.getFragment(a);
            if (!u) return;
            let [c, l] = is(t, n, u);
            if (o !== c)
              for (let d of (rs(t, e, n, r, i, s, o, c), l))
                Vr(t, e, n, r, i, s, o, d);
          }
          function qr(t, e, n, r, i, s, o, a) {
            if (o === a || i.has(o, a, s)) return;
            i.add(o, a, s);
            let u = t.getFragment(o),
              c = t.getFragment(a);
            if (!u || !c) return;
            let [l, d] = is(t, n, u),
              [p, g] = is(t, n, c);
            for (let h of (rs(t, e, n, r, i, s, l, p), g))
              qr(t, e, n, r, i, s, o, h);
            for (let h of d) qr(t, e, n, r, i, s, h, a);
          }
          function rs(t, e, n, r, i, s, o, a) {
            for (let [u, c] of Object.entries(o)) {
              let l = a[u];
              if (l)
                for (let d of c)
                  for (let p of l) {
                    let g = bo(t, n, r, i, s, u, d, p);
                    g && e.push(g);
                  }
            }
          }
          function bo(t, e, n, r, i, s, o, a) {
            let [u, c, l] = o,
              [d, p, g] = a,
              h = i || (u !== d && we(u) && we(d));
            if (!h) {
              let A = c.name.value,
                O = p.name.value;
              if (A !== O)
                return [
                  [s, `"${A}" and "${O}" are different fields`],
                  [c],
                  [p],
                ];
              if (
                !(function (P, B) {
                  let k = P.arguments,
                    Z = B.arguments;
                  if (k === void 0 || k.length === 0)
                    return Z === void 0 || Z.length === 0;
                  if (Z === void 0 || Z.length === 0 || k.length !== Z.length)
                    return !1;
                  let z = new Map(
                    Z.map(({ name: H, value: ae }) => [H.value, ae])
                  );
                  return k.every((H) => {
                    let ae = H.value,
                      oe = z.get(H.name.value);
                    return oe !== void 0 && Eo(ae) === Eo(oe);
                  });
                })(c, p)
              )
                return [[s, 'they have differing arguments'], [c], [p]];
            }
            let S = l?.type,
              I = g?.type;
            if (
              S &&
              I &&
              (function A(O, P) {
                return Me(O)
                  ? !Me(P) || A(O.ofType, P.ofType)
                  : !!Me(P) ||
                      (Oe(O)
                        ? !Oe(P) || A(O.ofType, P.ofType)
                        : !!Oe(P) || (!!(vt(O) || vt(P)) && O !== P));
              })(S, I)
            )
              return [
                [s, `they return conflicting types "${ee(S)}" and "${ee(I)}"`],
                [c],
                [p],
              ];
            let w = c.selectionSet,
              R = p.selectionSet;
            if (w && R)
              return (function (A, O, P, B) {
                if (A.length > 0)
                  return [
                    [O, A.map(([k]) => k)],
                    [P, ...A.map(([, k]) => k).flat()],
                    [B, ...A.map(([, , k]) => k).flat()],
                  ];
              })(
                (function (A, O, P, B, k, Z, z, H, ae) {
                  let oe = [],
                    [de, G] = Qr(A, O, Z, z),
                    [se, F] = Qr(A, O, H, ae);
                  for (let V of (rs(A, oe, O, P, B, k, de, se), F))
                    Vr(A, oe, O, P, B, k, de, V);
                  for (let V of G) Vr(A, oe, O, P, B, k, se, V);
                  for (let V of G) for (let q of F) qr(A, oe, O, P, B, k, V, q);
                  return oe;
                })(t, e, n, r, h, ut(S), w, ut(I), R),
                s,
                c,
                p
              );
          }
          function Eo(t) {
            return Ge(
              (function e(n) {
                switch (n.kind) {
                  case f.OBJECT:
                    return {
                      ...n,
                      fields: n.fields
                        .map((r) => ({ ...r, value: e(r.value) }))
                        .sort((r, i) => Vi(r.name.value, i.name.value)),
                    };
                  case f.LIST:
                    return { ...n, values: n.values.map(e) };
                  case f.INT:
                  case f.FLOAT:
                  case f.STRING:
                  case f.BOOLEAN:
                  case f.NULL:
                  case f.ENUM:
                  case f.VARIABLE:
                    return n;
                }
              })(t)
            );
          }
          function Qr(t, e, n, r) {
            let i = e.get(r);
            if (i) return i;
            let s = Object.create(null),
              o = Object.create(null);
            (function u(c, l, d, p, g) {
              for (let h of d.selections)
                switch (h.kind) {
                  case f.FIELD: {
                    let S,
                      I = h.name.value;
                    (we(l) || Pe(l)) && (S = l.getFields()[I]);
                    let w = h.alias ? h.alias.value : I;
                    p[w] || (p[w] = []), p[w].push([l, h, S]);
                    break;
                  }
                  case f.FRAGMENT_SPREAD:
                    g[h.name.value] = !0;
                    break;
                  case f.INLINE_FRAGMENT: {
                    let S = h.typeCondition,
                      I = S ? yt(c.getSchema(), S) : l;
                    u(c, I, h.selectionSet, p, g);
                  }
                }
            })(t, n, r, s, o);
            let a = [s, Object.keys(o)];
            return e.set(r, a), a;
          }
          function is(t, e, n) {
            let r = e.get(n.selectionSet);
            if (r) return r;
            let i = yt(t.getSchema(), n.typeCondition);
            return Qr(t, e, i, n.selectionSet);
          }
          class No {
            constructor() {
              this._data = new Map();
            }
            has(e, n, r) {
              var i;
              let s =
                (i = this._data.get(e)) === null || i === void 0
                  ? void 0
                  : i.get(n);
              return s !== void 0 && (!!r || r === s);
            }
            add(e, n, r) {
              let i = this._data.get(e);
              i === void 0 ? this._data.set(e, new Map([[n, r]])) : i.set(n, r);
            }
          }
          class Xu {
            constructor() {
              this._orderedPairSet = new No();
            }
            has(e, n, r) {
              return e < n
                ? this._orderedPairSet.has(e, n, r)
                : this._orderedPairSet.has(n, e, r);
            }
            add(e, n, r) {
              e < n
                ? this._orderedPairSet.add(e, n, r)
                : this._orderedPairSet.add(n, e, r);
            }
          }
          let Zu = {
            [f.SCALAR_TYPE_DEFINITION]: f.SCALAR_TYPE_EXTENSION,
            [f.OBJECT_TYPE_DEFINITION]: f.OBJECT_TYPE_EXTENSION,
            [f.INTERFACE_TYPE_DEFINITION]: f.INTERFACE_TYPE_EXTENSION,
            [f.UNION_TYPE_DEFINITION]: f.UNION_TYPE_EXTENSION,
            [f.ENUM_TYPE_DEFINITION]: f.ENUM_TYPE_EXTENSION,
            [f.INPUT_OBJECT_TYPE_DEFINITION]: f.INPUT_OBJECT_TYPE_EXTENSION,
          };
          function So(t) {
            var e, n;
            let r = Object.create(null),
              i = t.getSchema();
            for (let s of (e = i?.getDirectives()) !== null && e !== void 0
              ? e
              : cn)
              r[s.name] = Nn(s.args.filter(er), (o) => o.name);
            for (let s of t.getDocument().definitions)
              if (s.kind === f.DIRECTIVE_DEFINITION) {
                let o = (n = s.arguments) !== null && n !== void 0 ? n : [];
                r[s.name.value] = Nn(o.filter(ec), (a) => a.name.value);
              }
            return {
              Directive: {
                leave(s) {
                  let o = s.name.value,
                    a = r[o];
                  if (a) {
                    var u;
                    let c = (u = s.arguments) !== null && u !== void 0 ? u : [],
                      l = new Set(c.map((d) => d.name.value));
                    for (let [d, p] of Object.entries(a))
                      if (!l.has(d)) {
                        let g = Pr(p.type) ? ee(p.type) : Ge(p.type);
                        t.reportError(
                          new j(
                            `Directive "@${o}" argument "${d}" of type "${g}" is required, but it was not provided.`,
                            { nodes: s }
                          )
                        );
                      }
                  }
                },
              },
            };
          }
          function ec(t) {
            return t.type.kind === f.NON_NULL_TYPE && t.defaultValue == null;
          }
          function _o(t) {
            return t
              .map((e) =>
                typeof e == 'number' ? '[' + e.toString() + ']' : '.' + e
              )
              .join('');
          }
          function or(t, e, n) {
            return { prev: t, key: e, typename: n };
          }
          function Tt(t) {
            let e = [],
              n = t;
            for (; n; ) e.push(n.key), (n = n.prev);
            return e.reverse();
          }
          function qt(t, e, n) {
            if (t) {
              if (t.kind === f.VARIABLE) {
                let r = t.name.value;
                if (n == null || n[r] === void 0) return;
                let i = n[r];
                return i === null && Oe(e) ? void 0 : i;
              }
              if (Oe(e)) return t.kind === f.NULL ? void 0 : qt(t, e.ofType, n);
              if (t.kind === f.NULL) return null;
              if (Me(e)) {
                let r = e.ofType;
                if (t.kind === f.LIST) {
                  let s = [];
                  for (let o of t.values)
                    if (Io(o, n)) {
                      if (Oe(r)) return;
                      s.push(null);
                    } else {
                      let a = qt(o, r, n);
                      if (a === void 0) return;
                      s.push(a);
                    }
                  return s;
                }
                let i = qt(t, r, n);
                return i === void 0 ? void 0 : [i];
              }
              if (ke(e)) {
                if (t.kind !== f.OBJECT) return;
                let r = Object.create(null),
                  i = Nn(t.fields, (s) => s.name.value);
                for (let s of Object.values(e.getFields())) {
                  let o = i[s.name];
                  if (!o || Io(o.value, n)) {
                    if (s.defaultValue !== void 0) r[s.name] = s.defaultValue;
                    else if (Oe(s.type)) return;
                    continue;
                  }
                  let a = qt(o.value, s.type, n);
                  if (a === void 0) return;
                  r[s.name] = a;
                }
                if (e.isOneOf) {
                  let s = Object.keys(r);
                  if (s.length !== 1 || r[s[0]] === null) return;
                }
                return r;
              }
              if (vt(e)) {
                let r;
                try {
                  r = e.parseLiteral(t, n);
                } catch {
                  return;
                }
                return r === void 0 ? void 0 : r;
              }
              mt(!1, 'Unexpected input type: ' + ee(e));
            }
          }
          function Io(t, e) {
            return (
              t.kind === f.VARIABLE && (e == null || e[t.name.value] === void 0)
            );
          }
          function Oo(t, e, n) {
            var r;
            let i = {},
              s = Nn(
                (r = e.arguments) !== null && r !== void 0 ? r : [],
                (o) => o.name.value
              );
            for (let o of t.args) {
              let a = o.name,
                u = o.type,
                c = s[a];
              if (!c) {
                if (o.defaultValue !== void 0) i[a] = o.defaultValue;
                else if (Oe(u))
                  throw new j(
                    `Argument "${a}" of required type "${ee(
                      u
                    )}" was not provided.`,
                    { nodes: e }
                  );
                continue;
              }
              let l = c.value,
                d = l.kind === f.NULL;
              if (l.kind === f.VARIABLE) {
                let g = l.name.value;
                if (n == null || !wo(n, g)) {
                  if (o.defaultValue !== void 0) i[a] = o.defaultValue;
                  else if (Oe(u))
                    throw new j(
                      `Argument "${a}" of required type "${ee(
                        u
                      )}" was provided the variable "$${g}" which was not provided a runtime value.`,
                      { nodes: l }
                    );
                  continue;
                }
                d = n[g] == null;
              }
              if (d && Oe(u))
                throw new j(
                  `Argument "${a}" of non-null type "${ee(
                    u
                  )}" must not be null.`,
                  { nodes: l }
                );
              let p = qt(l, u, n);
              if (p === void 0)
                throw new j(`Argument "${a}" has invalid value ${Ge(l)}.`, {
                  nodes: l,
                });
              i[a] = p;
            }
            return i;
          }
          function lr(t, e, n) {
            var r;
            let i =
              (r = e.directives) === null || r === void 0
                ? void 0
                : r.find((s) => s.name.value === t.name);
            if (i) return Oo(t, i, n);
          }
          function wo(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
          }
          function Ao(t, e, n, r, i) {
            let s = new Map();
            return Yr(t, e, n, r, i, s, new Set()), s;
          }
          function Yr(t, e, n, r, i, s, o) {
            for (let a of i.selections)
              switch (a.kind) {
                case f.FIELD: {
                  if (!ss(n, a)) continue;
                  let u = a.alias ? a.alias.value : a.name.value,
                    c = s.get(u);
                  c !== void 0 ? c.push(a) : s.set(u, [a]);
                  break;
                }
                case f.INLINE_FRAGMENT:
                  if (!ss(n, a) || !xo(t, a, r)) continue;
                  Yr(t, e, n, r, a.selectionSet, s, o);
                  break;
                case f.FRAGMENT_SPREAD: {
                  let u = a.name.value;
                  if (o.has(u) || !ss(n, a)) continue;
                  o.add(u);
                  let c = e[u];
                  if (!c || !xo(t, c, r)) continue;
                  Yr(t, e, n, r, c.selectionSet, s, o);
                }
              }
          }
          function ss(t, e) {
            let n = lr(Ja, e, t);
            if (n?.if === !0) return !1;
            let r = lr(Ka, e, t);
            return r?.if !== !1;
          }
          function xo(t, e, n) {
            let r = e.typeCondition;
            if (!r) return !0;
            let i = yt(t, r);
            return i === n || (!!ln(i) && t.isSubType(i, n));
          }
          function as(t, e) {
            let n = new Map();
            for (let r of t) {
              let i = e(r),
                s = n.get(i);
              s === void 0 ? n.set(i, [r]) : s.push(r);
            }
            return n;
          }
          function Co(t) {
            return { Field: e, Directive: e };
            function e(n) {
              var r;
              for (let [i, s] of as(
                (r = n.arguments) !== null && r !== void 0 ? r : [],
                (o) => o.name.value
              ))
                s.length > 1 &&
                  t.reportError(
                    new j(`There can be only one argument named "${i}".`, {
                      nodes: s.map((o) => o.name),
                    })
                  );
            }
          }
          function Do(t) {
            let e = Object.create(null),
              n = t.getSchema();
            for (let s of n ? n.getDirectives() : cn)
              e[s.name] = !s.isRepeatable;
            for (let s of t.getDocument().definitions)
              s.kind === f.DIRECTIVE_DEFINITION &&
                (e[s.name.value] = !s.repeatable);
            let r = Object.create(null),
              i = Object.create(null);
            return {
              enter(s) {
                let o;
                if ('directives' in s && s.directives) {
                  if (
                    s.kind === f.SCHEMA_DEFINITION ||
                    s.kind === f.SCHEMA_EXTENSION
                  )
                    o = r;
                  else if (ar(s) || ns(s)) {
                    let a = s.name.value;
                    (o = i[a]) === void 0 && (i[a] = o = Object.create(null));
                  } else o = Object.create(null);
                  for (let a of s.directives) {
                    let u = a.name.value;
                    e[u] &&
                      (o[u]
                        ? t.reportError(
                            new j(
                              `The directive "@${u}" can only be used once at this location.`,
                              { nodes: [o[u], a] }
                            )
                          )
                        : (o[u] = a));
                  }
                }
              },
            };
          }
          function Ro(t) {
            let e = [],
              n = Object.create(null);
            return {
              ObjectValue: {
                enter() {
                  e.push(n), (n = Object.create(null));
                },
                leave() {
                  let r = e.pop();
                  r || mt(!1), (n = r);
                },
              },
              ObjectField(r) {
                let i = r.name.value;
                n[i]
                  ? t.reportError(
                      new j(`There can be only one input field named "${i}".`, {
                        nodes: [n[i], r.name],
                      })
                    )
                  : (n[i] = r.name);
              },
            };
          }
          function In(t, e) {
            let n = t.getInputType();
            if (!n) return;
            let r = ut(n);
            if (!vt(r)) {
              let i = ee(n);
              t.reportError(
                new j(`Expected value of type "${i}", found ${Ge(e)}.`, {
                  nodes: e,
                })
              );
              return;
            }
            try {
              if (r.parseLiteral(e, void 0) === void 0) {
                let s = ee(n);
                t.reportError(
                  new j(`Expected value of type "${s}", found ${Ge(e)}.`, {
                    nodes: e,
                  })
                );
              }
            } catch (i) {
              let s = ee(n);
              i instanceof j
                ? t.reportError(i)
                : t.reportError(
                    new j(
                      `Expected value of type "${s}", found ${Ge(e)}; ` +
                        i.message,
                      { nodes: e, originalError: i }
                    )
                  );
            }
          }
          let tc = Object.freeze([
              function (t) {
                return {
                  Document(e) {
                    for (let n of e.definitions)
                      if (!po(n)) {
                        let r =
                          n.kind === f.SCHEMA_DEFINITION ||
                          n.kind === f.SCHEMA_EXTENSION
                            ? 'schema'
                            : '"' + n.name.value + '"';
                        t.reportError(
                          new j(`The ${r} definition is not executable.`, {
                            nodes: n,
                          })
                        );
                      }
                    return !1;
                  },
                };
              },
              function (t) {
                let e = Object.create(null);
                return {
                  OperationDefinition(n) {
                    let r = n.name;
                    return (
                      r &&
                        (e[r.value]
                          ? t.reportError(
                              new j(
                                `There can be only one operation named "${r.value}".`,
                                { nodes: [e[r.value], r] }
                              )
                            )
                          : (e[r.value] = r)),
                      !1
                    );
                  },
                  FragmentDefinition: () => !1,
                };
              },
              function (t) {
                let e = 0;
                return {
                  Document(n) {
                    e = n.definitions.filter(
                      (r) => r.kind === f.OPERATION_DEFINITION
                    ).length;
                  },
                  OperationDefinition(n) {
                    !n.name &&
                      e > 1 &&
                      t.reportError(
                        new j(
                          'This anonymous operation must be the only defined operation.',
                          { nodes: n }
                        )
                      );
                  },
                };
              },
              function (t) {
                return {
                  OperationDefinition(e) {
                    if (e.operation === 'subscription') {
                      let n = t.getSchema(),
                        r = n.getSubscriptionType();
                      if (r) {
                        let i = e.name ? e.name.value : null,
                          s = Object.create(null),
                          o = t.getDocument(),
                          a = Object.create(null);
                        for (let c of o.definitions)
                          c.kind === f.FRAGMENT_DEFINITION &&
                            (a[c.name.value] = c);
                        let u = Ao(n, a, s, r, e.selectionSet);
                        if (u.size > 1) {
                          let c = [...u.values()].slice(1).flat();
                          t.reportError(
                            new j(
                              i != null
                                ? `Subscription "${i}" must select only one top level field.`
                                : 'Anonymous Subscription must select only one top level field.',
                              { nodes: c }
                            )
                          );
                        }
                        for (let c of u.values())
                          c[0].name.value.startsWith('__') &&
                            t.reportError(
                              new j(
                                i != null
                                  ? `Subscription "${i}" must not select an introspection top level field.`
                                  : 'Anonymous Subscription must not select an introspection top level field.',
                                { nodes: c }
                              )
                            );
                      }
                    }
                  },
                };
              },
              yo,
              function (t) {
                return {
                  InlineFragment(e) {
                    let n = e.typeCondition;
                    if (n) {
                      let r = yt(t.getSchema(), n);
                      if (r && !on(r)) {
                        let i = Ge(n);
                        t.reportError(
                          new j(
                            `Fragment cannot condition on non composite type "${i}".`,
                            { nodes: n }
                          )
                        );
                      }
                    }
                  },
                  FragmentDefinition(e) {
                    let n = yt(t.getSchema(), e.typeCondition);
                    if (n && !on(n)) {
                      let r = Ge(e.typeCondition);
                      t.reportError(
                        new j(
                          `Fragment "${e.name.value}" cannot condition on non composite type "${r}".`,
                          { nodes: e.typeCondition }
                        )
                      );
                    }
                  },
                };
              },
              function (t) {
                return {
                  VariableDefinition(e) {
                    let n = yt(t.getSchema(), e.type);
                    if (n !== void 0 && !Pt(n)) {
                      let r = e.variable.name.value,
                        i = Ge(e.type);
                      t.reportError(
                        new j(
                          `Variable "$${r}" cannot be non-input type "${i}".`,
                          { nodes: e.type }
                        )
                      );
                    }
                  },
                };
              },
              function (t) {
                return {
                  Field(e) {
                    let n = t.getType(),
                      r = e.selectionSet;
                    if (n)
                      if (vt(ut(n))) {
                        if (r) {
                          let i = e.name.value,
                            s = ee(n);
                          t.reportError(
                            new j(
                              `Field "${i}" must not have a selection since type "${s}" has no subfields.`,
                              { nodes: r }
                            )
                          );
                        }
                      } else if (r) {
                        if (r.selections.length === 0) {
                          let i = e.name.value,
                            s = ee(n);
                          t.reportError(
                            new j(
                              `Field "${i}" of type "${s}" must have at least one field selected.`,
                              { nodes: e }
                            )
                          );
                        }
                      } else {
                        let i = e.name.value,
                          s = ee(n);
                        t.reportError(
                          new j(
                            `Field "${i}" of type "${s}" must have a selection of subfields. Did you mean "${i} { ... }"?`,
                            { nodes: e }
                          )
                        );
                      }
                  },
                };
              },
              function (t) {
                return {
                  Field(e) {
                    let n = t.getParentType();
                    if (n && !t.getFieldDef()) {
                      let r = t.getSchema(),
                        i = e.name.value,
                        s = Ht(
                          'to use an inline fragment on',
                          (function (o, a, u) {
                            if (!ln(a)) return [];
                            let c = new Set(),
                              l = Object.create(null);
                            for (let p of o.getPossibleTypes(a))
                              if (p.getFields()[u])
                                for (let g of (c.add(p),
                                (l[p.name] = 1),
                                p.getInterfaces())) {
                                  var d;
                                  g.getFields()[u] &&
                                    (c.add(g),
                                    (l[g.name] =
                                      ((d = l[g.name]) !== null && d !== void 0
                                        ? d
                                        : 0) + 1));
                                }
                            return [...c]
                              .sort((p, g) => {
                                let h = l[g.name] - l[p.name];
                                return h !== 0
                                  ? h
                                  : Pe(p) && o.isSubType(p, g)
                                  ? -1
                                  : Pe(g) && o.isSubType(g, p)
                                  ? 1
                                  : Vi(p.name, g.name);
                              })
                              .map((p) => p.name);
                          })(r, n, i)
                        );
                      s === '' &&
                        (s = Ht(
                          we(n) || Pe(n)
                            ? an(i, Object.keys(n.getFields()))
                            : []
                        )),
                        t.reportError(
                          new j(
                            `Cannot query field "${i}" on type "${n.name}".` +
                              s,
                            { nodes: e }
                          )
                        );
                    }
                  },
                };
              },
              function (t) {
                let e = Object.create(null);
                return {
                  OperationDefinition: () => !1,
                  FragmentDefinition(n) {
                    let r = n.name.value;
                    return (
                      e[r]
                        ? t.reportError(
                            new j(
                              `There can be only one fragment named "${r}".`,
                              { nodes: [e[r], n.name] }
                            )
                          )
                        : (e[r] = n.name),
                      !1
                    );
                  },
                };
              },
              function (t) {
                return {
                  FragmentSpread(e) {
                    let n = e.name.value;
                    t.getFragment(n) ||
                      t.reportError(
                        new j(`Unknown fragment "${n}".`, { nodes: e.name })
                      );
                  },
                };
              },
              function (t) {
                let e = [],
                  n = [];
                return {
                  OperationDefinition: (r) => (e.push(r), !1),
                  FragmentDefinition: (r) => (n.push(r), !1),
                  Document: {
                    leave() {
                      let r = Object.create(null);
                      for (let i of e)
                        for (let s of t.getRecursivelyReferencedFragments(i))
                          r[s.name.value] = !0;
                      for (let i of n) {
                        let s = i.name.value;
                        r[s] !== !0 &&
                          t.reportError(
                            new j(`Fragment "${s}" is never used.`, {
                              nodes: i,
                            })
                          );
                      }
                    },
                  },
                };
              },
              function (t) {
                return {
                  InlineFragment(e) {
                    let n = t.getType(),
                      r = t.getParentType();
                    if (on(n) && on(r) && !Ga(t.getSchema(), n, r)) {
                      let i = ee(r),
                        s = ee(n);
                      t.reportError(
                        new j(
                          `Fragment cannot be spread here as objects of type "${i}" can never be of type "${s}".`,
                          { nodes: e }
                        )
                      );
                    }
                  },
                  FragmentSpread(e) {
                    let n = e.name.value,
                      r = (function (s, o) {
                        let a = s.getFragment(o);
                        if (a) {
                          let u = yt(s.getSchema(), a.typeCondition);
                          if (on(u)) return u;
                        }
                      })(t, n),
                      i = t.getParentType();
                    if (r && i && !Ga(t.getSchema(), r, i)) {
                      let s = ee(i),
                        o = ee(r);
                      t.reportError(
                        new j(
                          `Fragment "${n}" cannot be spread here as objects of type "${s}" can never be of type "${o}".`,
                          { nodes: e }
                        )
                      );
                    }
                  },
                };
              },
              function (t) {
                let e = Object.create(null),
                  n = [],
                  r = Object.create(null);
                return {
                  OperationDefinition: () => !1,
                  FragmentDefinition: (i) => (
                    (function s(o) {
                      if (e[o.name.value]) return;
                      let a = o.name.value;
                      e[a] = !0;
                      let u = t.getFragmentSpreads(o.selectionSet);
                      if (u.length !== 0) {
                        for (let c of ((r[a] = n.length), u)) {
                          let l = c.name.value,
                            d = r[l];
                          if ((n.push(c), d === void 0)) {
                            let p = t.getFragment(l);
                            p && s(p);
                          } else {
                            let p = n.slice(d),
                              g = p
                                .slice(0, -1)
                                .map((h) => '"' + h.name.value + '"')
                                .join(', ');
                            t.reportError(
                              new j(
                                `Cannot spread fragment "${l}" within itself` +
                                  (g !== '' ? ` via ${g}.` : '.'),
                                { nodes: p }
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
              function (t) {
                return {
                  OperationDefinition(e) {
                    var n;
                    for (let [r, i] of as(
                      (n = e.variableDefinitions) !== null && n !== void 0
                        ? n
                        : [],
                      (s) => s.variable.name.value
                    ))
                      i.length > 1 &&
                        t.reportError(
                          new j(
                            `There can be only one variable named "$${r}".`,
                            { nodes: i.map((s) => s.variable.name) }
                          )
                        );
                  },
                };
              },
              function (t) {
                let e = Object.create(null);
                return {
                  OperationDefinition: {
                    enter() {
                      e = Object.create(null);
                    },
                    leave(n) {
                      for (let { node: r } of t.getRecursiveVariableUsages(n)) {
                        let i = r.name.value;
                        e[i] !== !0 &&
                          t.reportError(
                            new j(
                              n.name
                                ? `Variable "$${i}" is not defined by operation "${n.name.value}".`
                                : `Variable "$${i}" is not defined.`,
                              { nodes: [r, n] }
                            )
                          );
                      }
                    },
                  },
                  VariableDefinition(n) {
                    e[n.variable.name.value] = !0;
                  },
                };
              },
              function (t) {
                let e = [];
                return {
                  OperationDefinition: {
                    enter() {
                      e = [];
                    },
                    leave(n) {
                      let r = Object.create(null);
                      for (let { node: i } of t.getRecursiveVariableUsages(n))
                        r[i.name.value] = !0;
                      for (let i of e) {
                        let s = i.variable.name.value;
                        r[s] !== !0 &&
                          t.reportError(
                            new j(
                              n.name
                                ? `Variable "$${s}" is never used in operation "${n.name.value}".`
                                : `Variable "$${s}" is never used.`,
                              { nodes: i }
                            )
                          );
                      }
                    },
                  },
                  VariableDefinition(n) {
                    e.push(n);
                  },
                };
              },
              vo,
              Do,
              function (t) {
                return {
                  ...go(t),
                  Argument(e) {
                    let n = t.getArgument(),
                      r = t.getFieldDef(),
                      i = t.getParentType();
                    if (!n && r && i) {
                      let s = e.name.value,
                        o = an(
                          s,
                          r.args.map((a) => a.name)
                        );
                      t.reportError(
                        new j(
                          `Unknown argument "${s}" on field "${i.name}.${r.name}".` +
                            Ht(o),
                          { nodes: e }
                        )
                      );
                    }
                  },
                };
              },
              Co,
              function (t) {
                let e = {};
                return {
                  OperationDefinition: {
                    enter() {
                      e = {};
                    },
                  },
                  VariableDefinition(n) {
                    e[n.variable.name.value] = n;
                  },
                  ListValue(n) {
                    if (!Me(Gi(t.getParentInputType()))) return In(t, n), !1;
                  },
                  ObjectValue(n) {
                    let r = ut(t.getInputType());
                    if (!ke(r)) return In(t, n), !1;
                    let i = Nn(n.fields, (s) => s.name.value);
                    for (let s of Object.values(r.getFields()))
                      if (!i[s.name] && Ya(s)) {
                        let o = ee(s.type);
                        t.reportError(
                          new j(
                            `Field "${r.name}.${s.name}" of required type "${o}" was not provided.`,
                            { nodes: n }
                          )
                        );
                      }
                    r.isOneOf &&
                      (function (s, o, a, u) {
                        var c;
                        let l = Object.keys(u);
                        if (l.length !== 1) {
                          s.reportError(
                            new j(
                              `OneOf Input Object "${a.name}" must specify exactly one key.`,
                              { nodes: [o] }
                            )
                          );
                          return;
                        }
                        let d =
                          (c = u[l[0]]) === null || c === void 0
                            ? void 0
                            : c.value;
                        (d && d.kind !== f.NULL) ||
                          s.reportError(
                            new j(
                              `Field "${a.name}.${l[0]}" must be non-null.`,
                              { nodes: [o] }
                            )
                          );
                      })(t, n, r, i);
                  },
                  ObjectField(n) {
                    let r = ut(t.getParentInputType());
                    if (!t.getInputType() && ke(r)) {
                      let i = an(n.name.value, Object.keys(r.getFields()));
                      t.reportError(
                        new j(
                          `Field "${n.name.value}" is not defined by type "${r.name}".` +
                            Ht(i),
                          { nodes: n }
                        )
                      );
                    }
                  },
                  NullValue(n) {
                    let r = t.getInputType();
                    Oe(r) &&
                      t.reportError(
                        new j(
                          `Expected value of type "${ee(r)}", found ${Ge(n)}.`,
                          { nodes: n }
                        )
                      );
                  },
                  EnumValue: (n) => In(t, n),
                  IntValue: (n) => In(t, n),
                  FloatValue: (n) => In(t, n),
                  StringValue: (n) => In(t, n),
                  BooleanValue: (n) => In(t, n),
                };
              },
              function (t) {
                return {
                  ...So(t),
                  Field: {
                    leave(e) {
                      var n;
                      let r = t.getFieldDef();
                      if (!r) return !1;
                      let i = new Set(
                        (n = e.arguments) === null || n === void 0
                          ? void 0
                          : n.map((s) => s.name.value)
                      );
                      for (let s of r.args)
                        if (!i.has(s.name) && er(s)) {
                          let o = ee(s.type);
                          t.reportError(
                            new j(
                              `Field "${r.name}" argument "${s.name}" of type "${o}" is required, but it was not provided.`,
                              { nodes: e }
                            )
                          );
                        }
                    },
                  },
                };
              },
              function (t) {
                let e = Object.create(null);
                return {
                  OperationDefinition: {
                    enter() {
                      e = Object.create(null);
                    },
                    leave(n) {
                      for (let {
                        node: s,
                        type: o,
                        defaultValue: a,
                        parentType: u,
                      } of t.getRecursiveVariableUsages(n)) {
                        let c = s.name.value,
                          l = e[c];
                        if (l && o) {
                          var r, i;
                          let d = t.getSchema(),
                            p = yt(d, l.type);
                          if (
                            p &&
                            ((r = l.defaultValue),
                            Oe(o) && !Oe(p)
                              ? !(
                                  ((r != null && r.kind !== f.NULL) ||
                                    a !== void 0) &&
                                  jn(d, p, o.ofType)
                                )
                              : !jn(d, p, o))
                          ) {
                            let g = ee(p),
                              h = ee(o);
                            t.reportError(
                              new j(
                                `Variable "$${c}" of type "${g}" used in position expecting type "${h}".`,
                                { nodes: [l, s] }
                              )
                            );
                          }
                          ke(u) &&
                            u.isOneOf &&
                            Pr((i = p)) &&
                            !Oe(i) &&
                            t.reportError(
                              new j(
                                `Variable "$${c}" is of type "${p}" but must be non-nullable to be used for OneOf Input Object "${u}".`,
                                { nodes: [l, s] }
                              )
                            );
                        }
                      }
                    },
                  },
                  VariableDefinition(n) {
                    e[n.variable.name.value] = n;
                  },
                };
              },
              function (t) {
                let e = new No(),
                  n = new Xu(),
                  r = new Map();
                return {
                  SelectionSet(i) {
                    for (let [[s, o], a, u] of (function (c, l, d, p, g, h) {
                      let S = [],
                        [I, w] = Qr(c, l, g, h);
                      if (
                        ((function (R, A, O, P, B, k) {
                          for (let [Z, z] of Object.entries(k))
                            if (z.length > 1)
                              for (let H = 0; H < z.length; H++)
                                for (let ae = H + 1; ae < z.length; ae++) {
                                  let oe = bo(R, O, P, B, !1, Z, z[H], z[ae]);
                                  oe && A.push(oe);
                                }
                        })(c, S, l, d, p, I),
                        w.length !== 0)
                      )
                        for (let R = 0; R < w.length; R++) {
                          Vr(c, S, l, d, p, !1, I, w[R]);
                          for (let A = R + 1; A < w.length; A++)
                            qr(c, S, l, d, p, !1, w[R], w[A]);
                        }
                      return S;
                    })(t, r, e, n, t.getParentType(), i)) {
                      let c = (function l(d) {
                        return Array.isArray(d)
                          ? d
                              .map(
                                ([p, g]) =>
                                  `subfields "${p}" conflict because ` + l(g)
                              )
                              .join(' and ')
                          : d;
                      })(o);
                      t.reportError(
                        new j(
                          `Fields "${s}" conflict because ${c}. Use different aliases on the fields to fetch both if this was intentional.`,
                          { nodes: a.concat(u) }
                        )
                      );
                    }
                  },
                };
              },
              Ro,
              ...Object.freeze([
                function (t) {
                  return {
                    Field(e) {
                      if (
                        (e.name.value === '__schema' ||
                          e.name.value === '__type') &&
                        (function n(r, i = Object.create(null), s = 0) {
                          if (r.kind === f.FRAGMENT_SPREAD) {
                            let o = r.name.value;
                            if (i[o] === !0) return !1;
                            let a = t.getFragment(o);
                            if (!a) return !1;
                            try {
                              return (i[o] = !0), n(a, i, s);
                            } finally {
                              i[o] = void 0;
                            }
                          }
                          if (
                            r.kind === f.FIELD &&
                            (r.name.value === 'fields' ||
                              r.name.value === 'interfaces' ||
                              r.name.value === 'possibleTypes' ||
                              r.name.value === 'inputFields') &&
                            ++s >= 3
                          )
                            return !0;
                          if ('selectionSet' in r && r.selectionSet) {
                            for (let o of r.selectionSet.selections)
                              if (n(o, i, s)) return !0;
                          }
                          return !1;
                        })(e)
                      )
                        return (
                          t.reportError(
                            new j('Maximum introspection depth exceeded', {
                              nodes: [e],
                            })
                          ),
                          !1
                        );
                    },
                  };
                },
              ]),
            ]),
            nc = Object.freeze([
              function (t) {
                var e, n, r;
                let i = t.getSchema(),
                  s =
                    (e =
                      (n =
                        (r = i?.astNode) !== null && r !== void 0
                          ? r
                          : i?.getQueryType()) !== null && n !== void 0
                        ? n
                        : i?.getMutationType()) !== null && e !== void 0
                      ? e
                      : i?.getSubscriptionType(),
                  o = 0;
                return {
                  SchemaDefinition(a) {
                    if (s) {
                      t.reportError(
                        new j(
                          'Cannot define a new schema within a schema extension.',
                          { nodes: a }
                        )
                      );
                      return;
                    }
                    o > 0 &&
                      t.reportError(
                        new j('Must provide only one schema definition.', {
                          nodes: a,
                        })
                      ),
                      ++o;
                  },
                };
              },
              function (t) {
                let e = t.getSchema(),
                  n = Object.create(null),
                  r = e
                    ? {
                        query: e.getQueryType(),
                        mutation: e.getMutationType(),
                        subscription: e.getSubscriptionType(),
                      }
                    : {};
                return { SchemaDefinition: i, SchemaExtension: i };
                function i(s) {
                  var o;
                  for (let a of (o = s.operationTypes) !== null && o !== void 0
                    ? o
                    : []) {
                    let u = a.operation,
                      c = n[u];
                    r[u]
                      ? t.reportError(
                          new j(
                            `Type for ${u} already defined in the schema. It cannot be redefined.`,
                            { nodes: a }
                          )
                        )
                      : c
                      ? t.reportError(
                          new j(`There can be only one ${u} type in schema.`, {
                            nodes: [c, a],
                          })
                        )
                      : (n[u] = a);
                  }
                  return !1;
                }
              },
              function (t) {
                let e = Object.create(null),
                  n = t.getSchema();
                return {
                  ScalarTypeDefinition: r,
                  ObjectTypeDefinition: r,
                  InterfaceTypeDefinition: r,
                  UnionTypeDefinition: r,
                  EnumTypeDefinition: r,
                  InputObjectTypeDefinition: r,
                };
                function r(i) {
                  let s = i.name.value;
                  if (n != null && n.getType(s)) {
                    t.reportError(
                      new j(
                        `Type "${s}" already exists in the schema. It cannot also be defined in this type definition.`,
                        { nodes: i.name }
                      )
                    );
                    return;
                  }
                  return (
                    e[s]
                      ? t.reportError(
                          new j(`There can be only one type named "${s}".`, {
                            nodes: [e[s], i.name],
                          })
                        )
                      : (e[s] = i.name),
                    !1
                  );
                }
              },
              function (t) {
                let e = t.getSchema(),
                  n = e ? e.getTypeMap() : Object.create(null),
                  r = Object.create(null);
                return { EnumTypeDefinition: i, EnumTypeExtension: i };
                function i(s) {
                  var o;
                  let a = s.name.value;
                  r[a] || (r[a] = Object.create(null));
                  let u = (o = s.values) !== null && o !== void 0 ? o : [],
                    c = r[a];
                  for (let l of u) {
                    let d = l.name.value,
                      p = n[a];
                    Be(p) && p.getValue(d)
                      ? t.reportError(
                          new j(
                            `Enum value "${a}.${d}" already exists in the schema. It cannot also be defined in this type extension.`,
                            { nodes: l.name }
                          )
                        )
                      : c[d]
                      ? t.reportError(
                          new j(
                            `Enum value "${a}.${d}" can only be defined once.`,
                            { nodes: [c[d], l.name] }
                          )
                        )
                      : (c[d] = l.name);
                  }
                  return !1;
                }
              },
              function (t) {
                let e = t.getSchema(),
                  n = e ? e.getTypeMap() : Object.create(null),
                  r = Object.create(null);
                return {
                  InputObjectTypeDefinition: i,
                  InputObjectTypeExtension: i,
                  InterfaceTypeDefinition: i,
                  InterfaceTypeExtension: i,
                  ObjectTypeDefinition: i,
                  ObjectTypeExtension: i,
                };
                function i(s) {
                  var o, a;
                  let u = s.name.value;
                  r[u] || (r[u] = Object.create(null));
                  let c = (o = s.fields) !== null && o !== void 0 ? o : [],
                    l = r[u];
                  for (let d of c) {
                    let p = d.name.value;
                    (we((a = n[u])) || Pe(a) || ke(a)) &&
                    a.getFields()[p] != null
                      ? t.reportError(
                          new j(
                            `Field "${u}.${p}" already exists in the schema. It cannot also be defined in this type extension.`,
                            { nodes: d.name }
                          )
                        )
                      : l[p]
                      ? t.reportError(
                          new j(`Field "${u}.${p}" can only be defined once.`, {
                            nodes: [l[p], d.name],
                          })
                        )
                      : (l[p] = d.name);
                  }
                  return !1;
                }
              },
              function (t) {
                return {
                  DirectiveDefinition(r) {
                    var i;
                    let s = (i = r.arguments) !== null && i !== void 0 ? i : [];
                    return n(`@${r.name.value}`, s);
                  },
                  InterfaceTypeDefinition: e,
                  InterfaceTypeExtension: e,
                  ObjectTypeDefinition: e,
                  ObjectTypeExtension: e,
                };
                function e(r) {
                  var i, s;
                  let o = r.name.value;
                  for (let a of (i = r.fields) !== null && i !== void 0
                    ? i
                    : []) {
                    let u = a.name.value;
                    n(
                      `${o}.${u}`,
                      (s = a.arguments) !== null && s !== void 0 ? s : []
                    );
                  }
                  return !1;
                }
                function n(r, i) {
                  for (let [s, o] of as(i, (a) => a.name.value))
                    o.length > 1 &&
                      t.reportError(
                        new j(
                          `Argument "${r}(${s}:)" can only be defined once.`,
                          { nodes: o.map((a) => a.name) }
                        )
                      );
                  return !1;
                }
              },
              function (t) {
                let e = Object.create(null),
                  n = t.getSchema();
                return {
                  DirectiveDefinition(r) {
                    let i = r.name.value;
                    if (n != null && n.getDirective(i)) {
                      t.reportError(
                        new j(
                          `Directive "@${i}" already exists in the schema. It cannot be redefined.`,
                          { nodes: r.name }
                        )
                      );
                      return;
                    }
                    return (
                      e[i]
                        ? t.reportError(
                            new j(
                              `There can be only one directive named "@${i}".`,
                              { nodes: [e[i], r.name] }
                            )
                          )
                        : (e[i] = r.name),
                      !1
                    );
                  },
                };
              },
              yo,
              vo,
              Do,
              function (t) {
                let e = t.getSchema(),
                  n = Object.create(null);
                for (let i of t.getDocument().definitions)
                  ar(i) && (n[i.name.value] = i);
                return {
                  ScalarTypeExtension: r,
                  ObjectTypeExtension: r,
                  InterfaceTypeExtension: r,
                  UnionTypeExtension: r,
                  EnumTypeExtension: r,
                  InputObjectTypeExtension: r,
                };
                function r(i) {
                  let s,
                    o = i.name.value,
                    a = n[o],
                    u = e?.getType(o);
                  if (
                    (a
                      ? (s = Zu[a.kind])
                      : u &&
                        (s = gt(u)
                          ? f.SCALAR_TYPE_EXTENSION
                          : we(u)
                          ? f.OBJECT_TYPE_EXTENSION
                          : Pe(u)
                          ? f.INTERFACE_TYPE_EXTENSION
                          : We(u)
                          ? f.UNION_TYPE_EXTENSION
                          : Be(u)
                          ? f.ENUM_TYPE_EXTENSION
                          : ke(u)
                          ? f.INPUT_OBJECT_TYPE_EXTENSION
                          : void mt(!1, 'Unexpected type: ' + ee(u))),
                    s)
                  ) {
                    if (s !== i.kind) {
                      let c = (function (l) {
                        switch (l) {
                          case f.SCALAR_TYPE_EXTENSION:
                            return 'scalar';
                          case f.OBJECT_TYPE_EXTENSION:
                            return 'object';
                          case f.INTERFACE_TYPE_EXTENSION:
                            return 'interface';
                          case f.UNION_TYPE_EXTENSION:
                            return 'union';
                          case f.ENUM_TYPE_EXTENSION:
                            return 'enum';
                          case f.INPUT_OBJECT_TYPE_EXTENSION:
                            return 'input object';
                          default:
                            mt(!1, 'Unexpected kind: ' + ee(l));
                        }
                      })(i.kind);
                      t.reportError(
                        new j(`Cannot extend non-${c} type "${o}".`, {
                          nodes: a ? [a, i] : i,
                        })
                      );
                    }
                  } else {
                    let c = an(o, Object.keys({ ...n, ...e?.getTypeMap() }));
                    t.reportError(
                      new j(
                        `Cannot extend type "${o}" because it is not defined.` +
                          Ht(c),
                        { nodes: i.name }
                      )
                    );
                  }
                }
              },
              go,
              Co,
              Ro,
              So,
            ]);
          class Po {
            constructor(e, n) {
              (this._ast = e),
                (this._fragments = void 0),
                (this._fragmentSpreads = new Map()),
                (this._recursivelyReferencedFragments = new Map()),
                (this._onError = n);
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
              let n;
              if (this._fragments) n = this._fragments;
              else {
                for (let r of ((n = Object.create(null)),
                this.getDocument().definitions))
                  r.kind === f.FRAGMENT_DEFINITION && (n[r.name.value] = r);
                this._fragments = n;
              }
              return n[e];
            }
            getFragmentSpreads(e) {
              let n = this._fragmentSpreads.get(e);
              if (!n) {
                let r;
                n = [];
                let i = [e];
                for (; (r = i.pop()); )
                  for (let s of r.selections)
                    s.kind === f.FRAGMENT_SPREAD
                      ? n.push(s)
                      : s.selectionSet && i.push(s.selectionSet);
                this._fragmentSpreads.set(e, n);
              }
              return n;
            }
            getRecursivelyReferencedFragments(e) {
              let n = this._recursivelyReferencedFragments.get(e);
              if (!n) {
                let r;
                n = [];
                let i = Object.create(null),
                  s = [e.selectionSet];
                for (; (r = s.pop()); )
                  for (let o of this.getFragmentSpreads(r)) {
                    let a = o.name.value;
                    if (i[a] !== !0) {
                      i[a] = !0;
                      let u = this.getFragment(a);
                      u && (n.push(u), s.push(u.selectionSet));
                    }
                  }
                this._recursivelyReferencedFragments.set(e, n);
              }
              return n;
            }
          }
          class rc extends Po {
            constructor(e, n, r) {
              super(e, r), (this._schema = n);
            }
            get [Symbol.toStringTag]() {
              return 'SDLValidationContext';
            }
            getSchema() {
              return this._schema;
            }
          }
          class ic extends Po {
            constructor(e, n, r, i) {
              super(n, i),
                (this._schema = e),
                (this._typeInfo = r),
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
              let n = this._variableUsages.get(e);
              if (!n) {
                let r = [],
                  i = new uo(this._schema);
                Xn(
                  e,
                  co(i, {
                    VariableDefinition: () => !1,
                    Variable(s) {
                      r.push({
                        node: s,
                        type: i.getInputType(),
                        defaultValue: i.getDefaultValue(),
                        parentType: i.getParentInputType(),
                      });
                    },
                  })
                ),
                  (n = r),
                  this._variableUsages.set(e, n);
              }
              return n;
            }
            getRecursiveVariableUsages(e) {
              let n = this._recursiveVariableUsages.get(e);
              if (!n) {
                for (let r of ((n = this.getVariableUsages(e)),
                this.getRecursivelyReferencedFragments(e)))
                  n = n.concat(this.getVariableUsages(r));
                this._recursiveVariableUsages.set(e, n);
              }
              return n;
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
          function Mt(t) {
            return typeof t?.then == 'function';
          }
          function Lo(t) {
            return Promise.all(Object.values(t)).then((e) => {
              let n = Object.create(null);
              for (let [r, i] of Object.keys(t).entries()) n[i] = e[r];
              return n;
            });
          }
          class sc extends Error {
            constructor(e) {
              super('Unexpected error value: ' + ee(e)),
                (this.name = 'NonErrorThrown'),
                (this.thrownValue = e);
            }
          }
          function Gr(t, e, n) {
            var r;
            let i = t instanceof Error ? t : new sc(t);
            return Array.isArray(i.path)
              ? i
              : new j(i.message, {
                  nodes: (r = i.nodes) !== null && r !== void 0 ? r : e,
                  source: i.source,
                  positions: i.positions,
                  path: n,
                  originalError: i,
                });
          }
          let ac = (function (t) {
            let e;
            return function (n, r, i) {
              e === void 0 && (e = new WeakMap());
              let s = e.get(n);
              s === void 0 && ((s = new WeakMap()), e.set(n, s));
              let o = s.get(r);
              o === void 0 && ((o = new WeakMap()), s.set(r, o));
              let a = o.get(i);
              return a === void 0 && ((a = t(n, r, i)), o.set(i, a)), a;
            };
          })((t, e, n) =>
            (function (r, i, s, o, a) {
              let u = new Map(),
                c = new Set();
              for (let l of a)
                l.selectionSet && Yr(r, i, s, o, l.selectionSet, u, c);
              return u;
            })(t.schema, t.fragments, t.variableValues, e, n)
          );
          function Kr(t, e) {
            return e.length === 0 ? { data: t } : { errors: e, data: t };
          }
          function Jr(t, e, n, r, i) {
            let s = Object.create(null),
              o = !1;
            try {
              for (let [a, u] of i.entries()) {
                let c = or(r, a, e.name),
                  l = ko(t, e, n, u, c);
                l !== void 0 && ((s[a] = l), Mt(l) && (o = !0));
              }
            } catch (a) {
              if (o)
                return Lo(s).finally(() => {
                  throw a;
                });
              throw a;
            }
            return o ? Lo(s) : s;
          }
          function ko(t, e, n, r, i) {
            var s;
            let o = (function (l, d, p) {
              let g = p.name.value;
              return g === jr.name && l.getQueryType() === d
                ? jr
                : g === Ur.name && l.getQueryType() === d
                ? Ur
                : g === Br.name
                ? Br
                : d.getFields()[g];
            })(t.schema, e, r[0]);
            if (!o) return;
            let a = o.type,
              u =
                (s = o.resolve) !== null && s !== void 0 ? s : t.fieldResolver,
              c = {
                fieldName: o.name,
                fieldNodes: r,
                returnType: o.type,
                parentType: e,
                path: i,
                schema: t.schema,
                fragments: t.fragments,
                rootValue: t.rootValue,
                operation: t.operation,
                variableValues: t.variableValues,
              };
            try {
              let l,
                d = Oo(o, r[0], t.variableValues),
                p = t.contextValue,
                g = u(n, d, p, c);
              return (
                (l = Mt(g)
                  ? g.then((h) => ur(t, a, r, c, i, h))
                  : ur(t, a, r, c, i, g)),
                Mt(l)
                  ? l.then(void 0, (h) => {
                      let S = Gr(h, r, Tt(i));
                      return Hr(S, a, t);
                    })
                  : l
              );
            } catch (l) {
              return Hr(Gr(l, r, Tt(i)), a, t);
            }
          }
          function Hr(t, e, n) {
            if (Oe(e)) throw t;
            return n.errors.push(t), null;
          }
          function ur(t, e, n, r, i, s) {
            if (s instanceof Error) throw s;
            if (Oe(e)) {
              let o = ur(t, e.ofType, n, r, i, s);
              if (o === null)
                throw Error(
                  `Cannot return null for non-nullable field ${r.parentType.name}.${r.fieldName}.`
                );
              return o;
            }
            return s == null
              ? null
              : Me(e)
              ? (function (o, a, u, c, l, d) {
                  if (!zi(d))
                    throw new j(
                      `Expected Iterable, but did not find one for field "${c.parentType.name}.${c.fieldName}".`
                    );
                  let p = a.ofType,
                    g = !1,
                    h = Array.from(d, (S, I) => {
                      let w = or(l, I, void 0);
                      try {
                        let R;
                        return (
                          (R = Mt(S)
                            ? S.then((A) => ur(o, p, u, c, w, A))
                            : ur(o, p, u, c, w, S)),
                          Mt(R)
                            ? ((g = !0),
                              R.then(void 0, (A) => {
                                let O = Gr(A, u, Tt(w));
                                return Hr(O, p, o);
                              }))
                            : R
                        );
                      } catch (R) {
                        return Hr(Gr(R, u, Tt(w)), p, o);
                      }
                    });
                  return g ? Promise.all(h) : h;
                })(t, e, n, r, i, s)
              : vt(e)
              ? (function (o, a) {
                  let u = o.serialize(a);
                  if (u == null)
                    throw Error(
                      `Expected \`${ee(o)}.serialize(${ee(
                        a
                      )})\` to return non-nullable value, returned: ${ee(u)}`
                    );
                  return u;
                })(e, s)
              : ln(e)
              ? (function (o, a, u, c, l, d) {
                  var p;
                  let g = (
                    (p = a.resolveType) !== null && p !== void 0
                      ? p
                      : o.typeResolver
                  )(d, o.contextValue, c, a);
                  return Mt(g)
                    ? g.then((h) => os(o, Mo(h, o, a, u, c, d), u, c, l, d))
                    : os(o, Mo(g, o, a, u, c, d), u, c, l, d);
                })(t, e, n, r, i, s)
              : we(e)
              ? os(t, e, n, r, i, s)
              : void mt(
                  !1,
                  'Cannot complete value of unexpected output type: ' + ee(e)
                );
          }
          function Mo(t, e, n, r, i, s) {
            if (t == null)
              throw new j(
                `Abstract type "${n.name}" must resolve to an Object type at runtime for field "${i.parentType.name}.${i.fieldName}". Either the "${n.name}" type should provide a "resolveType" function or each possible type should provide an "isTypeOf" function.`,
                r
              );
            if (we(t))
              throw new j(
                'Support for returning GraphQLObjectType from resolveType was removed in graphql-js@16.0.0 please return type name instead.'
              );
            if (typeof t != 'string')
              throw new j(
                `Abstract type "${
                  n.name
                }" must resolve to an Object type at runtime for field "${
                  i.parentType.name
                }.${i.fieldName}" with value ${ee(s)}, received "${ee(t)}".`
              );
            let o = e.schema.getType(t);
            if (o == null)
              throw new j(
                `Abstract type "${n.name}" was resolved to a type "${t}" that does not exist inside the schema.`,
                { nodes: r }
              );
            if (!we(o))
              throw new j(
                `Abstract type "${n.name}" was resolved to a non-object type "${t}".`,
                { nodes: r }
              );
            if (!e.schema.isSubType(n, o))
              throw new j(
                `Runtime Object type "${o.name}" is not a possible type for "${n.name}".`,
                { nodes: r }
              );
            return o;
          }
          function os(t, e, n, r, i, s) {
            let o = ac(t, e, n);
            if (e.isTypeOf) {
              let a = e.isTypeOf(s, t.contextValue, r);
              if (Mt(a))
                return a.then((u) => {
                  if (!u) throw $o(e, s, n);
                  return Jr(t, e, s, i, o);
                });
              if (!a) throw $o(e, s, n);
            }
            return Jr(t, e, s, i, o);
          }
          function $o(t, e, n) {
            return new j(
              `Expected value of type "${t.name}" but got: ${ee(e)}.`,
              { nodes: n }
            );
          }
          let oc = function (t, e, n, r) {
              if (Ct(t) && typeof t.__typename == 'string') return t.__typename;
              let i = n.schema.getPossibleTypes(r),
                s = [];
              for (let o = 0; o < i.length; o++) {
                let a = i[o];
                if (a.isTypeOf) {
                  let u = a.isTypeOf(t, e, n);
                  if (Mt(u)) s[o] = u;
                  else if (u)
                    return (
                      s.length && Promise.allSettled(s).catch(() => {}), a.name
                    );
                }
              }
              if (s.length)
                return Promise.all(s).then((o) => {
                  for (let a = 0; a < o.length; a++) if (o[a]) return i[a].name;
                });
            },
            Fo = function (t, e, n, r) {
              if (Ct(t) || typeof t == 'function') {
                let i = t[r.fieldName];
                return typeof i == 'function' ? t[r.fieldName](e, n, r) : i;
              }
            },
            jo = Nn([...Hi, ...Xi], (t) => t.name);
          function zr(t) {
            let e = lr($r, t);
            return e?.reason;
          }
          function Uo(t) {
            let e = lr(Ha, t);
            return e?.url;
          }
          function Bo(t, e) {
            (t != null && t.kind === f.DOCUMENT) ||
              De(!1, 'Must provide valid Document AST.'),
              e?.assumeValid !== !0 &&
                e?.assumeValidSDL !== !0 &&
                (function (i) {
                  let s = (function (o, a, u = nc) {
                    let c = [],
                      l = new rc(o, void 0, (d) => {
                        c.push(d);
                      });
                    return Xn(o, Ma(u.map((d) => d(l)))), c;
                  })(i);
                  if (s.length !== 0)
                    throw Error(
                      s.map((o) => o.message).join(`

`)
                    );
                })(t);
            let n = (function (i, s, o) {
              var a, u, c, l, d;
              let p,
                g = [],
                h = Object.create(null),
                S = [],
                I = [];
              for (let F of s.definitions)
                if (F.kind === f.SCHEMA_DEFINITION) p = F;
                else if (F.kind === f.SCHEMA_EXTENSION) I.push(F);
                else if (ar(F)) g.push(F);
                else if (ns(F)) {
                  let V = F.name.value,
                    q = h[V];
                  h[V] = q ? q.concat([F]) : [F];
                } else F.kind === f.DIRECTIVE_DEFINITION && S.push(F);
              if (
                Object.keys(h).length === 0 &&
                g.length === 0 &&
                S.length === 0 &&
                I.length === 0 &&
                p == null
              )
                return i;
              let w = Object.create(null);
              for (let F of i.types)
                w[F.name] =
                  Zi(F) || nr(F)
                    ? F
                    : gt(F)
                    ? (function (V) {
                        var q, X;
                        let ve = V.toConfig(),
                          Ne =
                            (q = h[ve.name]) !== null && q !== void 0 ? q : [],
                          Re = ve.specifiedByURL;
                        for (let Ke of Ne)
                          Re = (X = Uo(Ke)) !== null && X !== void 0 ? X : Re;
                        return new Ut({
                          ...ve,
                          specifiedByURL: Re,
                          extensionASTNodes: ve.extensionASTNodes.concat(Ne),
                        });
                      })(F)
                    : we(F)
                    ? (function (V) {
                        var q;
                        let X = V.toConfig(),
                          ve =
                            (q = h[X.name]) !== null && q !== void 0 ? q : [];
                        return new ct({
                          ...X,
                          interfaces: () => [
                            ...V.getInterfaces().map(O),
                            ...G(ve),
                          ],
                          fields: () => ({ ...zt(X.fields, P), ...H(ve) }),
                          extensionASTNodes: X.extensionASTNodes.concat(ve),
                        });
                      })(F)
                    : Pe(F)
                    ? (function (V) {
                        var q;
                        let X = V.toConfig(),
                          ve =
                            (q = h[X.name]) !== null && q !== void 0 ? q : [];
                        return new un({
                          ...X,
                          interfaces: () => [
                            ...V.getInterfaces().map(O),
                            ...G(ve),
                          ],
                          fields: () => ({ ...zt(X.fields, P), ...H(ve) }),
                          extensionASTNodes: X.extensionASTNodes.concat(ve),
                        });
                      })(F)
                    : We(F)
                    ? (function (V) {
                        var q;
                        let X = V.toConfig(),
                          ve =
                            (q = h[X.name]) !== null && q !== void 0 ? q : [];
                        return new tr({
                          ...X,
                          types: () => [...V.getTypes().map(O), ...se(ve)],
                          extensionASTNodes: X.extensionASTNodes.concat(ve),
                        });
                      })(F)
                    : Be(F)
                    ? (function (V) {
                        var q;
                        let X = V.toConfig(),
                          ve =
                            (q = h[V.name]) !== null && q !== void 0 ? q : [];
                        return new Bt({
                          ...X,
                          values: { ...X.values, ...de(ve) },
                          extensionASTNodes: X.extensionASTNodes.concat(ve),
                        });
                      })(F)
                    : ke(F)
                    ? (function (V) {
                        var q;
                        let X = V.toConfig(),
                          ve =
                            (q = h[X.name]) !== null && q !== void 0 ? q : [];
                        return new Sn({
                          ...X,
                          fields: () => ({
                            ...zt(X.fields, (Ne) => ({
                              ...Ne,
                              type: A(Ne.type),
                            })),
                            ...oe(ve),
                          }),
                          extensionASTNodes: X.extensionASTNodes.concat(ve),
                        });
                      })(F)
                    : void mt(!1, 'Unexpected type: ' + ee(F));
              for (let F of g) {
                let V = F.name.value;
                w[V] =
                  (d = jo[V]) !== null && d !== void 0
                    ? d
                    : (function (q) {
                        var X, ve, Ne, Re, Ke, en, bt;
                        let jt = q.name.value,
                          Je = (X = h[jt]) !== null && X !== void 0 ? X : [];
                        switch (q.kind) {
                          case f.OBJECT_TYPE_DEFINITION: {
                            let Et = [q, ...Je];
                            return new ct({
                              name: jt,
                              description:
                                (ve = q.description) === null || ve === void 0
                                  ? void 0
                                  : ve.value,
                              interfaces: () => G(Et),
                              fields: () => H(Et),
                              astNode: q,
                              extensionASTNodes: Je,
                            });
                          }
                          case f.INTERFACE_TYPE_DEFINITION: {
                            let Et = [q, ...Je];
                            return new un({
                              name: jt,
                              description:
                                (Ne = q.description) === null || Ne === void 0
                                  ? void 0
                                  : Ne.value,
                              interfaces: () => G(Et),
                              fields: () => H(Et),
                              astNode: q,
                              extensionASTNodes: Je,
                            });
                          }
                          case f.ENUM_TYPE_DEFINITION: {
                            let Et = [q, ...Je];
                            return new Bt({
                              name: jt,
                              description:
                                (Re = q.description) === null || Re === void 0
                                  ? void 0
                                  : Re.value,
                              values: de(Et),
                              astNode: q,
                              extensionASTNodes: Je,
                            });
                          }
                          case f.UNION_TYPE_DEFINITION: {
                            let Et = [q, ...Je];
                            return new tr({
                              name: jt,
                              description:
                                (Ke = q.description) === null || Ke === void 0
                                  ? void 0
                                  : Ke.value,
                              types: () => se(Et),
                              astNode: q,
                              extensionASTNodes: Je,
                            });
                          }
                          case f.SCALAR_TYPE_DEFINITION:
                            return new Ut({
                              name: jt,
                              description:
                                (en = q.description) === null || en === void 0
                                  ? void 0
                                  : en.value,
                              specifiedByURL: Uo(q),
                              astNode: q,
                              extensionASTNodes: Je,
                            });
                          case f.INPUT_OBJECT_TYPE_DEFINITION: {
                            let Et = [q, ...Je];
                            return new Sn({
                              name: jt,
                              description:
                                (bt = q.description) === null || bt === void 0
                                  ? void 0
                                  : bt.value,
                              fields: () => oe(Et),
                              astNode: q,
                              extensionASTNodes: Je,
                              isOneOf: !!lr(za, q),
                            });
                          }
                        }
                      })(F);
              }
              let R = {
                query: i.query && O(i.query),
                mutation: i.mutation && O(i.mutation),
                subscription: i.subscription && O(i.subscription),
                ...(p && k([p])),
                ...k(I),
              };
              return {
                description:
                  (a = p) === null ||
                  a === void 0 ||
                  (u = a.description) === null ||
                  u === void 0
                    ? void 0
                    : u.value,
                ...R,
                types: Object.values(w),
                directives: [
                  ...i.directives.map(function (F) {
                    let V = F.toConfig();
                    return new Vt({ ...V, args: zt(V.args, B) });
                  }),
                  ...S.map(function (F) {
                    var V;
                    return new Vt({
                      name: F.name.value,
                      description:
                        (V = F.description) === null || V === void 0
                          ? void 0
                          : V.value,
                      locations: F.locations.map(({ value: q }) => q),
                      isRepeatable: F.repeatable,
                      args: ae(F.arguments),
                      astNode: F,
                    });
                  }),
                ],
                extensions: Object.create(null),
                astNode: (c = p) !== null && c !== void 0 ? c : i.astNode,
                extensionASTNodes: i.extensionASTNodes.concat(I),
                assumeValid: (l = o?.assumeValid) !== null && l !== void 0 && l,
              };
              function A(F) {
                return Me(F)
                  ? new Ze(A(F.ofType))
                  : Oe(F)
                  ? new Ae(A(F.ofType))
                  : O(F);
              }
              function O(F) {
                return w[F.name];
              }
              function P(F) {
                return { ...F, type: A(F.type), args: F.args && zt(F.args, B) };
              }
              function B(F) {
                return { ...F, type: A(F.type) };
              }
              function k(F) {
                let V = {};
                for (let X of F) {
                  var q;
                  for (let ve of (q = X.operationTypes) !== null && q !== void 0
                    ? q
                    : [])
                    V[ve.operation] = Z(ve.type);
                }
                return V;
              }
              function Z(F) {
                var V;
                let q = F.name.value,
                  X = (V = jo[q]) !== null && V !== void 0 ? V : w[q];
                if (X === void 0) throw Error(`Unknown type: "${q}".`);
                return X;
              }
              function z(F) {
                return F.kind === f.LIST_TYPE
                  ? new Ze(z(F.type))
                  : F.kind === f.NON_NULL_TYPE
                  ? new Ae(z(F.type))
                  : Z(F);
              }
              function H(F) {
                let V = Object.create(null);
                for (let ve of F) {
                  var q, X;
                  for (let Ne of (q = ve.fields) !== null && q !== void 0
                    ? q
                    : [])
                    V[Ne.name.value] = {
                      type: z(Ne.type),
                      description:
                        (X = Ne.description) === null || X === void 0
                          ? void 0
                          : X.value,
                      args: ae(Ne.arguments),
                      deprecationReason: zr(Ne),
                      astNode: Ne,
                    };
                }
                return V;
              }
              function ae(F) {
                let V = Object.create(null);
                for (let X of F ?? []) {
                  var q;
                  let ve = z(X.type);
                  V[X.name.value] = {
                    type: ve,
                    description:
                      (q = X.description) === null || q === void 0
                        ? void 0
                        : q.value,
                    defaultValue: qt(X.defaultValue, ve),
                    deprecationReason: zr(X),
                    astNode: X,
                  };
                }
                return V;
              }
              function oe(F) {
                let V = Object.create(null);
                for (let ve of F) {
                  var q, X;
                  for (let Ne of (q = ve.fields) !== null && q !== void 0
                    ? q
                    : []) {
                    let Re = z(Ne.type);
                    V[Ne.name.value] = {
                      type: Re,
                      description:
                        (X = Ne.description) === null || X === void 0
                          ? void 0
                          : X.value,
                      defaultValue: qt(Ne.defaultValue, Re),
                      deprecationReason: zr(Ne),
                      astNode: Ne,
                    };
                  }
                }
                return V;
              }
              function de(F) {
                let V = Object.create(null);
                for (let ve of F) {
                  var q, X;
                  for (let Ne of (q = ve.values) !== null && q !== void 0
                    ? q
                    : [])
                    V[Ne.name.value] = {
                      description:
                        (X = Ne.description) === null || X === void 0
                          ? void 0
                          : X.value,
                      deprecationReason: zr(Ne),
                      astNode: Ne,
                    };
                }
                return V;
              }
              function G(F) {
                return F.flatMap((V) => {
                  var q, X;
                  return (q =
                    (X = V.interfaces) === null || X === void 0
                      ? void 0
                      : X.map(Z)) !== null && q !== void 0
                    ? q
                    : [];
                });
              }
              function se(F) {
                return F.flatMap((V) => {
                  var q, X;
                  return (q =
                    (X = V.types) === null || X === void 0
                      ? void 0
                      : X.map(Z)) !== null && q !== void 0
                    ? q
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
              t,
              e
            );
            if (n.astNode == null)
              for (let i of n.types)
                switch (i.name) {
                  case 'Query':
                    n.query = i;
                    break;
                  case 'Mutation':
                    n.mutation = i;
                    break;
                  case 'Subscription':
                    n.subscription = i;
                }
            let r = [
              ...n.directives,
              ...cn.filter((i) => n.directives.every((s) => s.name !== i.name)),
            ];
            return new ir({ ...n, directives: r });
          }
          let dn = {};
          function Wr(t, e, n, r) {
            let i = (function (a) {
              let u = (function (c) {
                let l = c.loc;
                if (!l) return;
                let d = [],
                  p = l.startToken.prev;
                for (
                  ;
                  p != null &&
                  p.kind === _.COMMENT &&
                  p.next != null &&
                  p.prev != null &&
                  p.line + 1 === p.next.line &&
                  p.line !== p.prev.line;

                ) {
                  let g = String(p.value);
                  d.push(g), (p = p.prev);
                }
                return d.length > 0
                  ? d.reverse().join(`
`)
                  : void 0;
              })(a);
              if (u !== void 0)
                return (function (c) {
                  let l = c.split(/\r\n|[\n\r]/g),
                    d = (function (p) {
                      let g = null;
                      for (let h = 1; h < p.length; h++) {
                        let S = p[h],
                          I = Qo(S);
                        if (
                          I !== S.length &&
                          (g === null || I < g) &&
                          (g = I) === 0
                        )
                          break;
                      }
                      return g === null ? 0 : g;
                    })(l);
                  if (d !== 0)
                    for (let p = 1; p < l.length; p++) l[p] = l[p].slice(d);
                  for (; l.length > 0 && Yo(l[0]); ) l.shift();
                  for (; l.length > 0 && Yo(l[l.length - 1]); ) l.pop();
                  return l.join(`
`);
                })(`
${u}`);
            })(t);
            if (typeof i != 'string' || i.length === 0) return;
            let s = [e];
            n && (s.push(n), r && s.push(r));
            let o = s.join('.');
            dn[o] || (dn[o] = []), dn[o].push(i);
          }
          function lc(t) {
            return (
              `
# ` +
              t.replace(
                /\n/g,
                `
# `
              )
            );
          }
          function he(t, e) {
            return t ? t.filter((n) => n).join(e || '') : '';
          }
          function Vo(t) {
            return (
              t?.some((e) =>
                e.includes(`
`)
              ) ?? !1
            );
          }
          function cr(t) {
            return (
              t &&
              `  ${t.replace(
                /\n/g,
                `
  `
              )}`
            );
          }
          function $t(t) {
            return t && t.length !== 0
              ? `{
${cr(
  he(
    t,
    `
`
  )
)}
}`
              : '';
          }
          function je(t, e, n) {
            return e ? t + e + (n || '') : '';
          }
          let qo = {
              Name: { leave: (t) => t.value },
              Variable: { leave: (t) => '$' + t.name },
              Document: {
                leave: (t) =>
                  he(
                    t.definitions,
                    `

`
                  ),
              },
              OperationDefinition: {
                leave: (t) => {
                  let e = je('(', he(t.variableDefinitions, ', '), ')');
                  return (
                    he(
                      [t.operation, he([t.name, e]), he(t.directives, ' ')],
                      ' '
                    ) +
                    ' ' +
                    t.selectionSet
                  );
                },
              },
              VariableDefinition: {
                leave: ({
                  variable: t,
                  type: e,
                  defaultValue: n,
                  directives: r,
                }) => t + ': ' + e + je(' = ', n) + je(' ', he(r, ' ')),
              },
              SelectionSet: { leave: ({ selections: t }) => $t(t) },
              Field: {
                leave({
                  alias: t,
                  name: e,
                  arguments: n,
                  directives: r,
                  selectionSet: i,
                }) {
                  let s = je('', t, ': ') + e,
                    o = s + je('(', he(n, ', '), ')');
                  return (
                    o.length > 80 &&
                      (o =
                        s +
                        je(
                          `(
`,
                          cr(
                            he(
                              n,
                              `
`
                            )
                          ),
                          `
)`
                        )),
                    he([o, he(r, ' '), i], ' ')
                  );
                },
              },
              Argument: { leave: ({ name: t, value: e }) => t + ': ' + e },
              FragmentSpread: {
                leave: ({ name: t, directives: e }) =>
                  '...' + t + je(' ', he(e, ' ')),
              },
              InlineFragment: {
                leave: ({ typeCondition: t, directives: e, selectionSet: n }) =>
                  he(['...', je('on ', t), he(e, ' '), n], ' '),
              },
              FragmentDefinition: {
                leave: ({
                  name: t,
                  typeCondition: e,
                  variableDefinitions: n,
                  directives: r,
                  selectionSet: i,
                }) =>
                  `fragment ${t}${je('(', he(n, ', '), ')')} on ${e} ${je(
                    '',
                    he(r, ' '),
                    ' '
                  )}` + i,
              },
              IntValue: { leave: ({ value: t }) => t },
              FloatValue: { leave: ({ value: t }) => t },
              StringValue: {
                leave: ({ value: t, block: e }) =>
                  e
                    ? (function (n, r = !1) {
                        let i = n
                          .replace(/\\/g, '\\\\')
                          .replace(/"""/g, '\\"""');
                        return (n[0] === ' ' || n[0] === '	') &&
                          n.indexOf(`
`) === -1
                          ? `"""${i.replace(
                              /"$/,
                              `"
`
                            )}"""`
                          : `"""
${r ? i : cr(i)}
"""`;
                      })(t)
                    : JSON.stringify(t),
              },
              BooleanValue: { leave: ({ value: t }) => (t ? 'true' : 'false') },
              NullValue: { leave: () => 'null' },
              EnumValue: { leave: ({ value: t }) => t },
              ListValue: { leave: ({ values: t }) => '[' + he(t, ', ') + ']' },
              ObjectValue: {
                leave: ({ fields: t }) => '{' + he(t, ', ') + '}',
              },
              ObjectField: { leave: ({ name: t, value: e }) => t + ': ' + e },
              Directive: {
                leave: ({ name: t, arguments: e }) =>
                  '@' + t + je('(', he(e, ', '), ')'),
              },
              NamedType: { leave: ({ name: t }) => t },
              ListType: { leave: ({ type: t }) => '[' + t + ']' },
              NonNullType: { leave: ({ type: t }) => t + '!' },
              SchemaDefinition: {
                leave: ({ directives: t, operationTypes: e }) =>
                  he(['schema', he(t, ' '), $t(e)], ' '),
              },
              OperationTypeDefinition: {
                leave: ({ operation: t, type: e }) => t + ': ' + e,
              },
              ScalarTypeDefinition: {
                leave: ({ name: t, directives: e }) =>
                  he(['scalar', t, he(e, ' ')], ' '),
              },
              ObjectTypeDefinition: {
                leave: ({ name: t, interfaces: e, directives: n, fields: r }) =>
                  he(
                    [
                      'type',
                      t,
                      je('implements ', he(e, ' & ')),
                      he(n, ' '),
                      $t(r),
                    ],
                    ' '
                  ),
              },
              FieldDefinition: {
                leave: ({ name: t, arguments: e, type: n, directives: r }) =>
                  t +
                  (Vo(e)
                    ? je(
                        `(
`,
                        cr(
                          he(
                            e,
                            `
`
                          )
                        ),
                        `
)`
                      )
                    : je('(', he(e, ', '), ')')) +
                  ': ' +
                  n +
                  je(' ', he(r, ' ')),
              },
              InputValueDefinition: {
                leave: ({ name: t, type: e, defaultValue: n, directives: r }) =>
                  he([t + ': ' + e, je('= ', n), he(r, ' ')], ' '),
              },
              InterfaceTypeDefinition: {
                leave: ({ name: t, interfaces: e, directives: n, fields: r }) =>
                  he(
                    [
                      'interface',
                      t,
                      je('implements ', he(e, ' & ')),
                      he(n, ' '),
                      $t(r),
                    ],
                    ' '
                  ),
              },
              UnionTypeDefinition: {
                leave: ({ name: t, directives: e, types: n }) =>
                  he(['union', t, he(e, ' '), je('= ', he(n, ' | '))], ' '),
              },
              EnumTypeDefinition: {
                leave: ({ name: t, directives: e, values: n }) =>
                  he(['enum', t, he(e, ' '), $t(n)], ' '),
              },
              EnumValueDefinition: {
                leave: ({ name: t, directives: e }) => he([t, he(e, ' ')], ' '),
              },
              InputObjectTypeDefinition: {
                leave: ({ name: t, directives: e, fields: n }) =>
                  he(['input', t, he(e, ' '), $t(n)], ' '),
              },
              DirectiveDefinition: {
                leave: ({
                  name: t,
                  arguments: e,
                  repeatable: n,
                  locations: r,
                }) =>
                  'directive @' +
                  t +
                  (Vo(e)
                    ? je(
                        `(
`,
                        cr(
                          he(
                            e,
                            `
`
                          )
                        ),
                        `
)`
                      )
                    : je('(', he(e, ', '), ')')) +
                  (n ? ' repeatable' : '') +
                  ' on ' +
                  he(r, ' | '),
              },
              SchemaExtension: {
                leave: ({ directives: t, operationTypes: e }) =>
                  he(['extend schema', he(t, ' '), $t(e)], ' '),
              },
              ScalarTypeExtension: {
                leave: ({ name: t, directives: e }) =>
                  he(['extend scalar', t, he(e, ' ')], ' '),
              },
              ObjectTypeExtension: {
                leave: ({ name: t, interfaces: e, directives: n, fields: r }) =>
                  he(
                    [
                      'extend type',
                      t,
                      je('implements ', he(e, ' & ')),
                      he(n, ' '),
                      $t(r),
                    ],
                    ' '
                  ),
              },
              InterfaceTypeExtension: {
                leave: ({ name: t, interfaces: e, directives: n, fields: r }) =>
                  he(
                    [
                      'extend interface',
                      t,
                      je('implements ', he(e, ' & ')),
                      he(n, ' '),
                      $t(r),
                    ],
                    ' '
                  ),
              },
              UnionTypeExtension: {
                leave: ({ name: t, directives: e, types: n }) =>
                  he(
                    ['extend union', t, he(e, ' '), je('= ', he(n, ' | '))],
                    ' '
                  ),
              },
              EnumTypeExtension: {
                leave: ({ name: t, directives: e, values: n }) =>
                  he(['extend enum', t, he(e, ' '), $t(n)], ' '),
              },
              InputObjectTypeExtension: {
                leave: ({ name: t, directives: e, fields: n }) =>
                  he(['extend input', t, he(e, ' '), $t(n)], ' '),
              },
            },
            uc = Object.keys(qo).reduce((t, e) => {
              var n;
              return {
                ...t,
                [e]: {
                  leave:
                    ((n = qo[e].leave),
                    (r, i, s, o, a) => {
                      let u = [],
                        c = o.reduce(
                          (p, g) => (
                            ['fields', 'arguments', 'values'].includes(g) &&
                              p.name &&
                              u.push(p.name.value),
                            p[g]
                          ),
                          a[0]
                        ),
                        l = [...u, c?.name?.value].filter(Boolean).join('.'),
                        d = [];
                      return (
                        r.kind.includes('Definition') &&
                          dn[l] &&
                          d.push(...dn[l]),
                        he(
                          [...d.map(lc), r.description, n(r, i, s, o, a)],
                          `
`
                        )
                      );
                    }),
                },
              };
            }, {});
          function Qo(t) {
            let e = 0;
            for (; e < t.length && (t[e] === ' ' || t[e] === '	'); ) e++;
            return e;
          }
          function Yo(t) {
            return Qo(t) === t.length;
          }
          function dr(t) {
            return Xr(t, []);
          }
          function Xr(t, e) {
            switch (typeof t) {
              case 'string':
                return JSON.stringify(t);
              case 'function':
                return t.name ? `[function ${t.name}]` : '[function]';
              case 'object':
                return (function (n, r) {
                  if (n === null) return 'null';
                  if (n instanceof Error)
                    return n.name === 'AggregateError'
                      ? Go(n) +
                          `
` +
                          Ko(n.errors, r)
                      : Go(n);
                  if (r.includes(n)) return '[Circular]';
                  let i = [...r, n];
                  if (typeof n.toJSON == 'function') {
                    let s = n.toJSON();
                    if (s !== n) return typeof s == 'string' ? s : Xr(s, i);
                  } else if (Array.isArray(n)) return Ko(n, i);
                  return (function (s, o) {
                    let a = Object.entries(s);
                    return a.length === 0
                      ? '{}'
                      : o.length > 3
                      ? '[' +
                        (function (u) {
                          let c = Object.prototype.toString
                            .call(u)
                            .replace(/^\[object /, '')
                            .replace(/]$/, '');
                          if (
                            c === 'Object' &&
                            typeof u.constructor == 'function'
                          ) {
                            let l = u.constructor.name;
                            if (typeof l == 'string' && l !== '') return l;
                          }
                          return c;
                        })(s) +
                        ']'
                      : '{ ' +
                        a.map(([u, c]) => u + ': ' + Xr(c, o)).join(', ') +
                        ' }';
                  })(n, i);
                })(t, e);
              default:
                return String(t);
            }
          }
          function Go(t) {
            return (t.name = 'GraphQLError'), t.toString();
          }
          function Ko(t, e) {
            if (t.length === 0) return '[]';
            if (e.length > 3) return '[Array]';
            let n = t.length,
              r = [];
            for (let i = 0; i < n; ++i) r.push(Xr(t[i], e));
            return '[' + r.join(', ') + ']';
          }
          function Wt(t) {
            if (Oe(t)) {
              let e = Wt(t.ofType);
              if (e.kind === f.NON_NULL_TYPE)
                throw Error(
                  `Invalid type node ${dr(
                    t
                  )}. Inner type of non-null type cannot be a non-null type.`
                );
              return { kind: f.NON_NULL_TYPE, type: e };
            }
            return Me(t)
              ? { kind: f.LIST_TYPE, type: Wt(t.ofType) }
              : { kind: f.NAMED_TYPE, name: { kind: f.NAME, value: t.name } };
          }
          function pr(t) {
            if (t === null) return { kind: f.NULL };
            if (t === void 0) return null;
            if (Array.isArray(t)) {
              let e = [];
              for (let n of t) {
                let r = pr(n);
                r != null && e.push(r);
              }
              return { kind: f.LIST, values: e };
            }
            if (typeof t == 'object') {
              if (t?.toJSON) return pr(t.toJSON());
              let e = [];
              for (let n in t) {
                let r = pr(t[n]);
                r &&
                  e.push({
                    kind: f.OBJECT_FIELD,
                    name: { kind: f.NAME, value: n },
                    value: r,
                  });
              }
              return { kind: f.OBJECT, fields: e };
            }
            if (typeof t == 'boolean') return { kind: f.BOOLEAN, value: t };
            if (typeof t == 'bigint') return { kind: f.INT, value: String(t) };
            if (typeof t == 'number' && isFinite(t)) {
              let e = String(t);
              return cc.test(e)
                ? { kind: f.INT, value: e }
                : { kind: f.FLOAT, value: e };
            }
            if (typeof t == 'string') return { kind: f.STRING, value: t };
            throw TypeError(`Cannot convert value to AST: ${t}.`);
          }
          let cc = /^-?(?:0|[1-9][0-9]*)$/;
          function On(t, e) {
            if (Oe(e)) {
              let n = On(t, e.ofType);
              return n?.kind === f.NULL ? null : n;
            }
            if (t === null) return { kind: f.NULL };
            if (t === void 0) return null;
            if (Me(e)) {
              let n = e.ofType;
              if (t != null && typeof t == 'object' && Symbol.iterator in t) {
                let r = [];
                for (let i of t) {
                  let s = On(i, n);
                  s != null && r.push(s);
                }
                return { kind: f.LIST, values: r };
              }
              return On(t, n);
            }
            if (ke(e)) {
              if (!(typeof t == 'object' && t !== null)) return null;
              let n = [];
              for (let r of Object.values(e.getFields())) {
                let i = On(t[r.name], r.type);
                i &&
                  n.push({
                    kind: f.OBJECT_FIELD,
                    name: { kind: f.NAME, value: r.name },
                    value: i,
                  });
              }
              return { kind: f.OBJECT, fields: n };
            }
            if (vt(e)) {
              let n = e.serialize(t);
              return n == null
                ? null
                : Be(e)
                ? { kind: f.ENUM, value: n }
                : e.name === 'ID' && typeof n == 'string' && dc.test(n)
                ? { kind: f.INT, value: n }
                : pr(n);
            }
            console.assert(!1, 'Unexpected input type: ' + dr(e));
          }
          let dc = /^-?(?:0|[1-9][0-9]*)$/;
          function _t(t) {
            return t.astNode?.description
              ? { ...t.astNode.description, block: !0 }
              : t.description
              ? { kind: f.STRING, value: t.description, block: !0 }
              : void 0;
          }
          let pc = Object.freeze({
              major: 16,
              minor: 12,
              patch: 0,
              preReleaseTag: null,
            }),
            fc = [
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
          function fr(t, e) {
            var n;
            e?.originalError &&
              !(e.originalError instanceof Error) &&
              (n = e.originalError) != null &&
              typeof n == 'object' &&
              Object.keys(n).every((i) => fc.includes(i)) &&
              (e.originalError = fr(e.originalError.message, e.originalError));
            let r =
              pc.major >= 16
                ? new j(t, e)
                : new j(
                    t,
                    e?.nodes,
                    e?.source,
                    e?.positions,
                    e?.path,
                    e?.originalError,
                    e?.extensions
                  );
            return (
              e?.coordinate &&
                r.coordinate == null &&
                Object.defineProperties(r, {
                  coordinate: {
                    value: e.coordinate,
                    enumerable: !0,
                    configurable: !0,
                  },
                }),
              r
            );
          }
          function Zr(t) {
            let e = new WeakMap();
            return function (n) {
              let r = e.get(n);
              if (r === void 0) {
                let i = t(n);
                return e.set(n, i), i;
              }
              return r;
            };
          }
          function Jo(t, e = ['directives']) {
            return Object.entries(
              (function (n, r, i = ['directives']) {
                let s = {};
                if (n.extensions) {
                  let u = n.extensions;
                  for (let c of i) u = u?.[c];
                  if (u != null)
                    for (let c in u) {
                      let l = u[c];
                      if (Array.isArray(l))
                        for (let d of l) {
                          let p = s[c];
                          p || ((p = []), (s[c] = p)), p.push(d);
                        }
                      else {
                        let d = s[c];
                        d || ((d = []), (s[c] = d)), d.push(l);
                      }
                    }
                }
                let o = Zr((u) => JSON.stringify(u)),
                  a = [];
                for (let u of (n.astNode && a.push(n.astNode),
                n.extensionASTNodes && a.push(...n.extensionASTNodes),
                a))
                  if (u.directives?.length)
                    for (let c of u.directives) {
                      let l = c.name.value,
                        d = s[l];
                      d || ((d = []), (s[l] = d));
                      let p = r?.getDirective(l),
                        g = {};
                      if (
                        (p &&
                          (g = (function (h, S, I = {}) {
                            let w = {},
                              R = (S.arguments ?? []).reduce(
                                (A, O) => ({ ...A, [O.name.value]: O }),
                                {}
                              );
                            for (let {
                              name: A,
                              type: O,
                              defaultValue: P,
                            } of h.args) {
                              let B = R[A];
                              if (!B) {
                                if (P !== void 0) w[A] = P;
                                else if (Oe(O))
                                  throw fr(
                                    `Argument "${A}" of required type "${dr(
                                      O
                                    )}" was not provided.`,
                                    { nodes: [S] }
                                  );
                                continue;
                              }
                              let k = B.value,
                                Z = k.kind === f.NULL;
                              if (k.kind === f.VARIABLE) {
                                let H = k.name.value;
                                if (
                                  I == null ||
                                  !Object.prototype.hasOwnProperty.call(I, H)
                                ) {
                                  if (P !== void 0) w[A] = P;
                                  else if (Oe(O))
                                    throw fr(
                                      `Argument "${A}" of required type "${dr(
                                        O
                                      )}" was provided the variable "$${H}" which was not provided a runtime value.`,
                                      { nodes: [k] }
                                    );
                                  continue;
                                }
                                Z = I[H] == null;
                              }
                              if (Z && Oe(O))
                                throw fr(
                                  `Argument "${A}" of non-null type "${dr(
                                    O
                                  )}" must not be null.`,
                                  { nodes: [k] }
                                );
                              let z = qt(k, O, I);
                              if (z === void 0)
                                throw fr(
                                  `Argument "${A}" has invalid value ${Ge(k)}.`,
                                  { nodes: [k] }
                                );
                              w[A] = z;
                            }
                            return w;
                          })(p, c)),
                        c.arguments)
                      )
                        for (let h of c.arguments) {
                          let S = h.name.value;
                          if (g[S] == null) {
                            let I = p?.args.find((w) => w.name === S);
                            I && (g[S] = qt(h.value, I.type));
                          }
                          g[S] == null && (g[S] = Rr(h.value));
                        }
                      if (a.length > 0 && d.length > 0) {
                        let h = o(g);
                        if (d.some((S) => o(S) === h)) continue;
                      }
                      d.push(g);
                    }
                return s;
              })(t, void 0, e)
            )
              .map(([n, r]) => r?.map((i) => ({ name: n, args: i })))
              .flat(1 / 0)
              .filter(Boolean);
          }
          let Ho = (t) => (Array.isArray(t) ? t : t ? [t] : []);
          function zo(t) {
            let e;
            return (
              'alias' in t && (e = t.alias?.value),
              e == null && 'name' in t && (e = t.name?.value),
              e == null && (e = t.kind),
              e
            );
          }
          function ei(t, e, n) {
            let r = zo(t),
              i = zo(e);
            return typeof n == 'function'
              ? n(r, i)
              : String(r) < String(i)
              ? -1
              : String(r) > String(i)
              ? 1
              : 0;
          }
          function ls(t) {
            return t != null;
          }
          Zr(function (t) {
            let e = hc(t);
            return new Set([...e].map((n) => n.name));
          });
          let hc = Zr(function (t) {
              let e = Wo(t);
              return new Set(e.values());
            }),
            Wo = Zr(function (t) {
              let e = new Map(),
                n = t.getQueryType();
              n && e.set('query', n);
              let r = t.getMutationType();
              r && e.set('mutation', r);
              let i = t.getSubscriptionType();
              return i && e.set('subscription', i), e;
            });
          function Qt(t, e, n) {
            let r,
              i = [],
              s = Jo(t, n);
            s != null && (r = el(e, s));
            let o = null,
              a = null,
              u = null;
            return (
              r != null &&
                ((i = r.filter((c) =>
                  cn.every((l) => l.name !== c.name.value)
                )),
                (o = r.find((c) => c.name.value === 'deprecated')),
                (a = r.find((c) => c.name.value === 'specifiedBy')),
                (u = r.find((c) => c.name.value === 'oneOf'))),
              t.deprecationReason != null &&
                o == null &&
                (o = hr('deprecated', { reason: t.deprecationReason }, $r)),
              (t.specifiedByUrl != null ||
                (t.specifiedByURL != null && a == null)) &&
                (a = hr('specifiedBy', {
                  url: t.specifiedByUrl || t.specifiedByURL,
                })),
              t.isOneOf && u == null && (u = hr('oneOf')),
              o != null && i.push(o),
              a != null && i.push(a),
              u != null && i.push(u),
              i
            );
          }
          function Xo(t, e, n) {
            return {
              kind: f.INPUT_VALUE_DEFINITION,
              description: _t(t),
              name: { kind: f.NAME, value: t.name },
              type: Wt(t.type),
              defaultValue:
                t.defaultValue !== void 0
                  ? On(t.defaultValue, t.type) ?? void 0
                  : void 0,
              directives: Qt(t, e, n),
            };
          }
          function Zo(t, e, n) {
            return {
              kind: f.FIELD_DEFINITION,
              description: _t(t),
              name: { kind: f.NAME, value: t.name },
              arguments: t.args.map((r) => Xo(r, e, n)),
              type: Wt(t.type),
              directives: Qt(t, e, n),
            };
          }
          function hr(t, e, n) {
            let r = [];
            for (let i in e) {
              let s,
                o = e[i];
              if (n != null) {
                let a = n.args.find((u) => u.name === i);
                a && (s = On(o, a.type));
              }
              s == null && (s = pr(o)),
                s != null &&
                  r.push({
                    kind: f.ARGUMENT,
                    name: { kind: f.NAME, value: i },
                    value: s,
                  });
            }
            return {
              kind: f.DIRECTIVE,
              name: { kind: f.NAME, value: t },
              arguments: r,
            };
          }
          function el(t, e) {
            let n = [];
            for (let { name: r, args: i } of e) {
              let s = t?.getDirective(r);
              n.push(hr(r, i, s));
            }
            return n;
          }
          function tl(t) {
            return t.as ?? t.url.name;
          }
          function us(t, e) {
            var n;
            if (t.url.name && e === `@${t.url.name}`)
              return (function (s) {
                let o = tl(s);
                return o && `@${o}`;
              })(t).substring(1);
            let r = t.imports.find((s) => s.name === e),
              i =
                r?.as ??
                r?.name ??
                ((n = tl(t)),
                n?.length
                  ? e.startsWith('@')
                    ? `@${n}__${e.substring(1)}`
                    : `${n}__${e}`
                  : e);
            return i.startsWith('@') ? i.substring(1) : i;
          }
          let mc = /v(\d{1,3})\.(\d{1,4})/i;
          function nl(t) {
            let e = new URL(t),
              n = e.pathname.split('/').filter(Boolean),
              r = n[n.length - 1];
            if (r) {
              if (mc.test(r)) {
                let i = n[n.length - 2];
                return {
                  identity:
                    e.origin +
                    (i ? `/${n.slice(0, n.length - 1).join('/')}` : ''),
                  name: i ?? null,
                  version: r,
                };
              }
              return {
                identity: `${e.origin}/${n.join('/')}`,
                name: r,
                version: null,
              };
            }
            return { identity: e.origin, name: null, version: null };
          }
          function rl(t, e) {
            return e.some(({ value: n }) => n === t.value);
          }
          let cs = (t, e) => {
              if (t.kind === e.kind)
                switch (t.kind) {
                  case f.LIST:
                    return (
                      t.values.length === e.values.length &&
                      t.values.every((n) => e.values.find((r) => cs(n, r)))
                    );
                  case f.VARIABLE:
                  case f.NULL:
                    return !0;
                  case f.OBJECT:
                    return (
                      t.fields.length === e.fields.length &&
                      t.fields.every((n) =>
                        e.fields.find(
                          (r) =>
                            n.name.value === r.name.value &&
                            cs(n.value, r.value)
                        )
                      )
                    );
                  default:
                    return t.value === e.value;
                }
              return !1;
            },
            ds = (t) => t.name.value === 'link',
            il = (t) => {
              let e = ds(t)
                ? t.arguments?.find((n) => n.name.value === 'url')?.value
                : void 0;
              return e?.kind === 'StringValue' ? e.value : void 0;
            },
            gc = (t, e) =>
              t.name.value === e.name.value &&
              t.value.kind === e.value.kind &&
              cs(t.value, e.value),
            vc = (t, e) =>
              !!(
                t.name.value === e.name.value &&
                (t.arguments === e.arguments ||
                  (t.arguments?.length === e.arguments?.length &&
                    t.arguments?.every((n) =>
                      e.arguments?.find((r) => gc(n, r))
                    )))
              );
          function Xt(t = [], e = [], n, r) {
            let i = n && n.reverseDirectives,
              s = [];
            for (let a of [...(i ? t : e), ...(i ? e : t)]) {
              var o;
              if (
                ((o = n?.repeatableLinkImports),
                r?.[a.name.value]?.repeatable ?? o?.has(a.name.value))
              )
                s.find((u) => vc(a, u)) || s.push(a);
              else {
                let u = s.findIndex((c) => c.name.value === a.name.value);
                if (u === -1) s.push(a);
                else {
                  if (ds(a) && ds(s[u])) {
                    let l = il(a),
                      d = il(s[u]);
                    if (l && d && l !== d) {
                      s.push(a);
                      continue;
                    }
                  }
                  let c = (function (l, d) {
                    let p = [];
                    for (let g of [...d, ...l]) {
                      let h = p.findIndex((S) => S.name.value === g.name.value);
                      if (h === -1) p.push(g);
                      else {
                        let S = p[h];
                        if (S.value.kind === 'ListValue') {
                          let I = S.value.values,
                            w = g.value.values;
                          S.value = {
                            ...S.value,
                            values: sl(I, w, (R, A) => {
                              let O = R.value;
                              return !O || !A.some((P) => P.value === O);
                            }),
                          };
                        } else S.value = g.value;
                      }
                    }
                    return p;
                  })(a.arguments ?? [], s[u].arguments ?? []);
                  s[u] = { ...s[u], arguments: c.length === 0 ? void 0 : c };
                }
              }
            }
            return s;
          }
          function sl(t, e, n) {
            return t.concat(e.filter((r) => n(r, t)));
          }
          function al(t) {
            let e = t;
            for (; e.kind === f.LIST_TYPE || e.kind === 'NonNullType'; )
              e = e.type;
            return e;
          }
          function ol(t) {
            return t.kind !== f.NAMED_TYPE;
          }
          function ps(t) {
            return t.kind === f.LIST_TYPE;
          }
          function wn(t) {
            return t.kind === f.NON_NULL_TYPE;
          }
          function ti(t) {
            return ps(t)
              ? `[${ti(t.type)}]`
              : wn(t)
              ? `${ti(t.type)}!`
              : t.name.value;
          }
          function yc(t, e) {
            return t == null && e == null
              ? Se.A_EQUALS_B
              : t == null
              ? Se.A_SMALLER_THAN_B
              : e == null
              ? Se.A_GREATER_THAN_B
              : t < e
              ? Se.A_SMALLER_THAN_B
              : t > e
              ? Se.A_GREATER_THAN_B
              : Se.A_EQUALS_B;
          }
          function fs(t, e, n, r, i) {
            let s = [];
            if ((n != null && s.push(...n), e != null))
              for (let o of e) {
                let [a, u] = (function (c, l) {
                  let d = c.findIndex((p) => p.name.value === l.name.value);
                  return [d > -1 ? c[d] : null, d];
                })(s, o);
                if (a && !r?.ignoreFieldConflicts) {
                  let c =
                    (r?.onFieldTypeConflict &&
                      r.onFieldTypeConflict(a, o, t, r?.throwOnConflict)) ||
                    (function (l, d, p, g = !1) {
                      let h = ti(d.type),
                        S = ti(p.type);
                      if (h !== S) {
                        let I = al(d.type),
                          w = al(p.type);
                        if (I.name.value !== w.name.value)
                          throw Error(
                            `Field "${p.name.value}" already defined with a different type. Declared as "${I.name.value}", but you tried to override with "${w.name.value}"`
                          );
                        if (
                          !(function R(A, O, P = !1) {
                            return ol(A) || ol(O)
                              ? wn(O)
                                ? R(wn(A) ? A.type : A, O.type)
                                : wn(A)
                                ? R(O, A, P)
                                : !!ps(A) &&
                                  ((ps(O) && R(A.type, O.type)) ||
                                    (wn(O) && R(A, O.type)))
                              : A.toString() === O.toString();
                          })(d.type, p.type, !g)
                        )
                          throw Error(
                            `Field '${l.name.value}.${d.name.value}' changed type from '${h}' to '${S}'`
                          );
                      }
                      return wn(p.type) && !wn(d.type) && (d.type = p.type), d;
                    })(t, a, o, r?.throwOnConflict);
                  (c.arguments = (function (l, d, p) {
                    let g = (function (h, S) {
                      return h.reduce((I, w) => {
                        let R = I.findIndex(
                          (A) => A.name.value === w.name.value
                        );
                        return R === -1
                          ? I.concat([w])
                          : (S?.reverseArguments || (I[R] = w), I);
                      }, []);
                    })([...d, ...l].filter(ls), p);
                    return p && p.sort && g.sort(ei), g;
                  })(o.arguments || [], a.arguments || [], r)),
                    (c.directives = Xt(o.directives, a.directives, r, i)),
                    (c.description = o.description || a.description),
                    (s[u] = c);
                } else s.push(o);
              }
            if ((r && r.sort && s.sort(ei), r && r.exclusions)) {
              let o = r.exclusions;
              return s.filter(
                (a) => !o.includes(`${t.name.value}.${a.name.value}`)
              );
            }
            return s;
          }
          function hs(t = [], e = [], n = {}) {
            let r = [
              ...e,
              ...t.filter((i) => !e.find((s) => s.name.value === i.name.value)),
            ];
            return n && n.sort && r.sort(ei), r;
          }
          (function (t) {
            (t[(t.A_SMALLER_THAN_B = -1)] = 'A_SMALLER_THAN_B'),
              (t[(t.A_EQUALS_B = 0)] = 'A_EQUALS_B'),
              (t[(t.A_GREATER_THAN_B = 1)] = 'A_GREATER_THAN_B');
          })(Se || (Se = {}));
          let ms = {
              query: 'Query',
              mutation: 'Mutation',
              subscription: 'Subscription',
            },
            Un = 'SCHEMA_DEF_SYMBOL';
          function ll(t, e, n = {}) {
            var r, i, s, o, a;
            for (let u of t)
              if ('name' in u) {
                let c = u.name?.value;
                if (
                  (e?.commentDescriptions &&
                    (function (l) {
                      let d = l.name?.value;
                      if (d != null)
                        switch ((Wr(l, d), l.kind)) {
                          case 'EnumTypeDefinition':
                            if (l.values)
                              for (let p of l.values) Wr(p, d, p.name.value);
                            break;
                          case 'ObjectTypeDefinition':
                          case 'InputObjectTypeDefinition':
                          case 'InterfaceTypeDefinition':
                            if (l.fields) {
                              for (let p of l.fields)
                                if (
                                  (Wr(p, d, p.name.value),
                                  p.kind === 'FieldDefinition' && p.arguments)
                                )
                                  for (let g of p.arguments)
                                    Wr(g, d, p.name.value, g.name.value);
                            }
                        }
                    })(u),
                  c == null)
                )
                  continue;
                if (
                  e?.exclusions?.includes(c + '.*') ||
                  e?.exclusions?.includes(c)
                )
                  delete n[c];
                else
                  switch (u.kind) {
                    case f.OBJECT_TYPE_DEFINITION:
                    case f.OBJECT_TYPE_EXTENSION:
                      n[c] = (function (l, d, p, g) {
                        if (d)
                          try {
                            return {
                              name: l.name,
                              description: l.description || d.description,
                              kind:
                                p?.convertExtensions ||
                                l.kind === 'ObjectTypeDefinition' ||
                                d.kind === 'ObjectTypeDefinition'
                                  ? 'ObjectTypeDefinition'
                                  : 'ObjectTypeExtension',
                              loc: l.loc,
                              fields: fs(l, l.fields, d.fields, p, g),
                              directives: Xt(l.directives, d.directives, p, g),
                              interfaces: hs(l.interfaces, d.interfaces, p),
                            };
                          } catch (h) {
                            throw Error(
                              `Unable to merge GraphQL type "${l.name.value}": ${h.message}`
                            );
                          }
                        return p?.convertExtensions
                          ? { ...l, kind: f.OBJECT_TYPE_DEFINITION }
                          : l;
                      })(u, n[c], e, n);
                      break;
                    case f.ENUM_TYPE_DEFINITION:
                    case f.ENUM_TYPE_EXTENSION:
                      n[c] = (r = n[c])
                        ? {
                            name: u.name,
                            description: u.description || r.description,
                            kind:
                              e?.convertExtensions ||
                              u.kind === 'EnumTypeDefinition' ||
                              r.kind === 'EnumTypeDefinition'
                                ? 'EnumTypeDefinition'
                                : 'EnumTypeExtension',
                            loc: u.loc,
                            directives: Xt(u.directives, r.directives, e, n),
                            values: (function (l, d, p, g) {
                              if (p?.consistentEnumMerge) {
                                let I = [];
                                l && I.push(...l), (l = d), (d = I);
                              }
                              let h = new Map();
                              if (l) for (let I of l) h.set(I.name.value, I);
                              if (d)
                                for (let I of d) {
                                  let w = I.name.value;
                                  if (h.has(w)) {
                                    let R = h.get(w);
                                    (R.description =
                                      I.description || R.description),
                                      (R.directives = Xt(
                                        I.directives,
                                        R.directives,
                                        void 0
                                      ));
                                  } else h.set(w, I);
                                }
                              let S = [...h.values()];
                              return p && p.sort && S.sort(ei), S;
                            })(u.values, r.values, e),
                          }
                        : e?.convertExtensions
                        ? { ...u, kind: f.ENUM_TYPE_DEFINITION }
                        : u;
                      break;
                    case f.UNION_TYPE_DEFINITION:
                    case f.UNION_TYPE_EXTENSION:
                      n[c] = (i = n[c])
                        ? {
                            name: u.name,
                            description: u.description || i.description,
                            directives: Xt(u.directives, i.directives, e, n),
                            kind:
                              e?.convertExtensions ||
                              u.kind === 'UnionTypeDefinition' ||
                              i.kind === 'UnionTypeDefinition'
                                ? f.UNION_TYPE_DEFINITION
                                : f.UNION_TYPE_EXTENSION,
                            loc: u.loc,
                            types: hs(u.types, i.types, e),
                          }
                        : e?.convertExtensions
                        ? { ...u, kind: f.UNION_TYPE_DEFINITION }
                        : u;
                      break;
                    case f.SCALAR_TYPE_DEFINITION:
                    case f.SCALAR_TYPE_EXTENSION:
                      n[c] = (s = n[c])
                        ? {
                            name: u.name,
                            description: u.description || s.description,
                            kind:
                              e?.convertExtensions ||
                              u.kind === 'ScalarTypeDefinition' ||
                              s.kind === 'ScalarTypeDefinition'
                                ? 'ScalarTypeDefinition'
                                : 'ScalarTypeExtension',
                            loc: u.loc,
                            directives: Xt(u.directives, s.directives, e, n),
                          }
                        : e?.convertExtensions
                        ? { ...u, kind: f.SCALAR_TYPE_DEFINITION }
                        : u;
                      break;
                    case f.INPUT_OBJECT_TYPE_DEFINITION:
                    case f.INPUT_OBJECT_TYPE_EXTENSION:
                      n[c] = (function (l, d, p, g) {
                        if (d)
                          try {
                            return {
                              name: l.name,
                              description: l.description || d.description,
                              kind:
                                p?.convertExtensions ||
                                l.kind === 'InputObjectTypeDefinition' ||
                                d.kind === 'InputObjectTypeDefinition'
                                  ? 'InputObjectTypeDefinition'
                                  : 'InputObjectTypeExtension',
                              loc: l.loc,
                              fields: fs(l, l.fields, d.fields, p),
                              directives: Xt(l.directives, d.directives, p, g),
                            };
                          } catch (h) {
                            throw Error(
                              `Unable to merge GraphQL input type "${l.name.value}": ${h.message}`
                            );
                          }
                        return p?.convertExtensions
                          ? { ...l, kind: f.INPUT_OBJECT_TYPE_DEFINITION }
                          : l;
                      })(u, n[c], e, n);
                      break;
                    case f.INTERFACE_TYPE_DEFINITION:
                    case f.INTERFACE_TYPE_EXTENSION:
                      n[c] = (function (l, d, p, g) {
                        if (d)
                          try {
                            return {
                              name: l.name,
                              description: l.description || d.description,
                              kind:
                                p?.convertExtensions ||
                                l.kind === 'InterfaceTypeDefinition' ||
                                d.kind === 'InterfaceTypeDefinition'
                                  ? 'InterfaceTypeDefinition'
                                  : 'InterfaceTypeExtension',
                              loc: l.loc,
                              fields: fs(l, l.fields, d.fields, p, g),
                              directives: Xt(l.directives, d.directives, p, g),
                              interfaces: l.interfaces
                                ? hs(l.interfaces, d.interfaces, p)
                                : void 0,
                            };
                          } catch (h) {
                            throw Error(
                              `Unable to merge GraphQL interface "${l.name.value}": ${h.message}`
                            );
                          }
                        return p?.convertExtensions
                          ? { ...l, kind: f.INTERFACE_TYPE_DEFINITION }
                          : l;
                      })(u, n[c], e, n);
                      break;
                    case f.DIRECTIVE_DEFINITION:
                      n[c] &&
                        c in {} &&
                        !(
                          (o = n[c]) != null &&
                          typeof o == 'object' &&
                          'kind' in o &&
                          typeof o.kind == 'string'
                        ) &&
                        (n[c] = void 0),
                        (n[c] = (function (l, d) {
                          return d
                            ? {
                                ...l,
                                arguments: sl(
                                  d.arguments || [],
                                  l.arguments || [],
                                  (p, g) =>
                                    !rl(
                                      p.name,
                                      g.map((h) => h.name)
                                    )
                                ),
                                locations: [
                                  ...d.locations,
                                  ...l.locations.filter(
                                    (p) => !rl(p, d.locations)
                                  ),
                                ],
                              }
                            : l;
                        })(u, n[c]));
                  }
              } else
                (u.kind === f.SCHEMA_DEFINITION ||
                  u.kind === f.SCHEMA_EXTENSION) &&
                  (n[Un] = (a = n[Un])
                    ? {
                        kind:
                          u.kind === f.SCHEMA_DEFINITION ||
                          a.kind === f.SCHEMA_DEFINITION
                            ? f.SCHEMA_DEFINITION
                            : f.SCHEMA_EXTENSION,
                        description: u.description || a.description,
                        directives: Xt(u.directives, a.directives, e, void 0),
                        operationTypes: (function (c = [], l = []) {
                          let d = [];
                          for (let p in ms) {
                            let g =
                              c.find((h) => h.operation === p) ||
                              l.find((h) => h.operation === p);
                            g && d.push(g);
                          }
                          return d;
                        })(u.operationTypes, a.operationTypes),
                      }
                    : e?.convertExtensions
                    ? { ...u, kind: f.SCHEMA_DEFINITION }
                    : u);
            return n;
          }
          function gs(t, e) {
            let n;
            dn = {};
            let r = {
              kind: f.DOCUMENT,
              definitions: (function (i, s) {
                dn = {};
                let {
                    allDirectives: o,
                    allNodes: a,
                    repeatableLinkImports: u,
                  } = (function p(
                    g,
                    h,
                    S = [],
                    I = [],
                    w = new Set(),
                    R = new Set()
                  ) {
                    let A = (O) => {
                      R.add(O);
                    };
                    if (g && !w.has(g))
                      if ((w.add(g), typeof g == 'function'))
                        p(g(), h, S, I, w, R);
                      else if (Array.isArray(g))
                        for (let O of g) p(O, h, S, I, w, R);
                      else if (lt(g, ir))
                        p(
                          (function (O, P = {}) {
                            let B = P.pathToDirectivesInExtensions,
                              k = O.getTypeMap(),
                              Z = (function (H, ae) {
                                let oe = new Map([
                                    ['query', void 0],
                                    ['mutation', void 0],
                                    ['subscription', void 0],
                                  ]),
                                  de = [];
                                if (
                                  (H.astNode != null && de.push(H.astNode),
                                  H.extensionASTNodes != null)
                                )
                                  for (let X of H.extensionASTNodes) de.push(X);
                                for (let X of de)
                                  if (X.operationTypes)
                                    for (let ve of X.operationTypes)
                                      oe.set(ve.operation, ve);
                                let G = Wo(H);
                                for (let [X, ve] of oe) {
                                  let Ne = G.get(X);
                                  if (Ne != null) {
                                    let Re = Wt(Ne);
                                    ve != null
                                      ? (ve.type = Re)
                                      : oe.set(X, {
                                          kind: f.OPERATION_TYPE_DEFINITION,
                                          operation: X,
                                          type: Re,
                                        });
                                  }
                                }
                                let se = [...oe.values()].filter(ls),
                                  F = Qt(H, H, ae);
                                if (!se.length && !F.length) return null;
                                let V = {
                                    kind: se.length
                                      ? f.SCHEMA_DEFINITION
                                      : f.SCHEMA_EXTENSION,
                                    operationTypes: se,
                                    directives: F,
                                  },
                                  q = _t(H);
                                return q && (V.description = q), V;
                              })(O, B),
                              z = Z != null ? [Z] : [];
                            for (let H of O.getDirectives())
                              Wa(H) ||
                                z.push(
                                  (function (ae, oe, de) {
                                    return {
                                      kind: f.DIRECTIVE_DEFINITION,
                                      description: _t(ae),
                                      name: { kind: f.NAME, value: ae.name },
                                      arguments: ae.args?.map((G) =>
                                        Xo(G, oe, de)
                                      ),
                                      repeatable: ae.isRepeatable,
                                      locations:
                                        ae.locations?.map((G) => ({
                                          kind: f.NAME,
                                          value: G,
                                        })) || [],
                                    };
                                  })(H, O, B)
                                );
                            for (let H in k) {
                              let ae = k[H],
                                oe = nr(ae),
                                de = Zi(ae);
                              if (!oe && !de)
                                if (we(ae))
                                  z.push(
                                    (function (G, se, F) {
                                      return {
                                        kind: f.OBJECT_TYPE_DEFINITION,
                                        description: _t(G),
                                        name: { kind: f.NAME, value: G.name },
                                        fields: Object.values(
                                          G.getFields()
                                        ).map((V) => Zo(V, se, F)),
                                        interfaces: Object.values(
                                          G.getInterfaces()
                                        ).map((V) => Wt(V)),
                                        directives: Qt(G, se, F),
                                      };
                                    })(ae, O, B)
                                  );
                                else if (Pe(ae))
                                  z.push(
                                    (function (G, se, F) {
                                      let V = {
                                        kind: f.INTERFACE_TYPE_DEFINITION,
                                        description: _t(G),
                                        name: { kind: f.NAME, value: G.name },
                                        fields: Object.values(
                                          G.getFields()
                                        ).map((q) => Zo(q, se, F)),
                                        directives: Qt(G, se, F),
                                      };
                                      return (
                                        'getInterfaces' in G &&
                                          (V.interfaces = Object.values(
                                            G.getInterfaces()
                                          ).map((q) => Wt(q))),
                                        V
                                      );
                                    })(ae, O, B)
                                  );
                                else if (We(ae))
                                  z.push({
                                    kind: f.UNION_TYPE_DEFINITION,
                                    description: _t(ae),
                                    name: { kind: f.NAME, value: ae.name },
                                    directives: Qt(ae, O, B),
                                    types: ae.getTypes().map((G) => Wt(G)),
                                  });
                                else if (ke(ae))
                                  z.push(
                                    (function (G, se, F) {
                                      return {
                                        kind: f.INPUT_OBJECT_TYPE_DEFINITION,
                                        description: _t(G),
                                        name: { kind: f.NAME, value: G.name },
                                        fields: Object.values(
                                          G.getFields()
                                        ).map((V) => ({
                                          kind: f.INPUT_VALUE_DEFINITION,
                                          description: _t(V),
                                          name: { kind: f.NAME, value: V.name },
                                          type: Wt(V.type),
                                          directives: Qt(V, se, F),
                                          defaultValue:
                                            On(V.defaultValue, V.type) ??
                                            void 0,
                                        })),
                                        directives: Qt(G, se, F),
                                      };
                                    })(ae, O, B)
                                  );
                                else if (Be(ae))
                                  z.push(
                                    (function (G, se, F) {
                                      return {
                                        kind: f.ENUM_TYPE_DEFINITION,
                                        description: _t(G),
                                        name: { kind: f.NAME, value: G.name },
                                        values: Object.values(
                                          G.getValues()
                                        ).map((V) => ({
                                          kind: f.ENUM_VALUE_DEFINITION,
                                          description: _t(V),
                                          name: { kind: f.NAME, value: V.name },
                                          directives: Qt(V, se, F),
                                        })),
                                        directives: Qt(G, se, F),
                                      };
                                    })(ae, O, B)
                                  );
                                else if (gt(ae))
                                  z.push(
                                    (function (G, se, F) {
                                      let V = el(se, Jo(G, F)),
                                        q =
                                          G.specifiedByUrl || G.specifiedByURL;
                                      return (
                                        q &&
                                          !V.some(
                                            (X) =>
                                              X.name.value === 'specifiedBy'
                                          ) &&
                                          V.push(hr('specifiedBy', { url: q })),
                                        {
                                          kind: f.SCALAR_TYPE_DEFINITION,
                                          description: _t(G),
                                          name: { kind: f.NAME, value: G.name },
                                          directives: V,
                                        }
                                      );
                                    })(ae, O, B)
                                  );
                                else throw Error(`Unknown type ${ae}.`);
                            }
                            return { kind: f.DOCUMENT, definitions: z };
                          })(g, h).definitions,
                          h,
                          S,
                          I,
                          w,
                          R
                        );
                      else if (typeof g == 'string' || g instanceof Ui)
                        p(wr(g, h).definitions, h, S, I, w, R);
                      else if (
                        typeof g == 'object' &&
                        (po(g) || ho(g) || mo(g))
                      ) {
                        let O = (function (k) {
                            let Z = [];
                            for (let z of k.definitions)
                              if (
                                z.kind === f.SCHEMA_EXTENSION ||
                                z.kind === f.SCHEMA_DEFINITION
                              ) {
                                let H = z.directives?.filter(
                                    (G) => G.name.value === 'link'
                                  ),
                                  ae =
                                    H?.map((G) =>
                                      (function (se) {
                                        let F,
                                          V,
                                          q = [];
                                        for (let ve of se)
                                          switch (ve.name.value) {
                                            case 'url':
                                              ve.value.kind === f.STRING &&
                                                (F = nl(ve.value.value));
                                              break;
                                            case 'import':
                                              var X;
                                              q =
                                                (X = ve.value).kind === f.LIST
                                                  ? X.values
                                                      .map((Ne) => {
                                                        let Re;
                                                        if (
                                                          Ne.kind === f.STRING
                                                        )
                                                          Re = {
                                                            name: Ne.value,
                                                          };
                                                        else if (
                                                          Ne.kind === f.OBJECT
                                                        ) {
                                                          let Ke,
                                                            en = '';
                                                          for (let bt of Ne.fields)
                                                            bt.name.value ===
                                                            'name'
                                                              ? bt.value
                                                                  .kind ===
                                                                  f.STRING &&
                                                                (en =
                                                                  bt.value
                                                                    .value)
                                                              : bt.name
                                                                  .value ===
                                                                  'as' &&
                                                                bt.value
                                                                  .kind ===
                                                                  f.STRING &&
                                                                (Ke =
                                                                  bt.value
                                                                    .value);
                                                          Re = {
                                                            name: en,
                                                            as: Ke,
                                                          };
                                                        }
                                                        return Re;
                                                      })
                                                      .filter(
                                                        (Ne) => Ne !== void 0
                                                      )
                                                  : [];
                                              break;
                                            case 'as':
                                              ve.value.kind === f.STRING &&
                                                (V = ve.value.value ?? void 0);
                                          }
                                        if (F !== void 0)
                                          return { url: F, as: V, imports: q };
                                      })(G.arguments ?? [])
                                    ).filter((G) => G !== void 0) ?? [];
                                Z = Z.concat(ae);
                                let oe = z.directives?.filter(
                                    ({ name: G }) => G.value === 'core'
                                  ),
                                  de = oe
                                    ?.map((G) =>
                                      (function (se) {
                                        let F = se.find(
                                          ({ name: V, value: q }) =>
                                            V.value === 'feature' &&
                                            q.kind === f.STRING
                                        );
                                        if (F)
                                          return {
                                            url: nl(F.value.value),
                                            imports: [],
                                          };
                                      })(G.arguments ?? [])
                                    )
                                    .filter((G) => G !== void 0);
                                de && (Z = Z.concat(...de));
                              }
                            return Z;
                          })({ definitions: [g], kind: f.DOCUMENT }),
                          P = O.find(
                            (k) =>
                              k.url.identity ===
                              'https://specs.apollo.dev/federation'
                          );
                        P && (A(us(P, '@composeDirective')), A(us(P, '@key')));
                        let B = O.find(
                          (k) =>
                            k.url.identity === 'https://specs.apollo.dev/link'
                        );
                        B && A(us(B, '@link')),
                          g.kind === f.DIRECTIVE_DEFINITION
                            ? S.push(g)
                            : I.push(g);
                      } else if (
                        g &&
                        typeof g == 'object' &&
                        'kind' in g &&
                        g.kind === f.DOCUMENT
                      )
                        p(g.definitions, h, S, I, w, R);
                      else
                        throw Error(
                          `typeDefs must contain only strings, documents, schemas, or functions, got ${typeof g}`
                        );
                    return {
                      allDirectives: S,
                      allNodes: I,
                      repeatableLinkImports: R,
                    };
                  })(i, s),
                  c = ll(o, s);
                s.repeatableLinkImports = u;
                let l = ll(a, s, c);
                if (s?.useSchemaDefinition) {
                  let p = l[Un] || {
                      kind: f.SCHEMA_DEFINITION,
                      operationTypes: [],
                    },
                    g = p.operationTypes;
                  for (let h in ms)
                    if (!g.find((S) => S.operation === h)) {
                      let S = l[ms[h]];
                      S != null &&
                        S.name != null &&
                        g.push({
                          kind: f.OPERATION_TYPE_DEFINITION,
                          type: { kind: f.NAMED_TYPE, name: S.name },
                          operation: h,
                        });
                    }
                  p?.operationTypes?.length != null &&
                    p.operationTypes.length > 0 &&
                    (l[Un] = p);
                }
                s?.forceSchemaDefinition &&
                  !l[Un]?.operationTypes?.length &&
                  (l[Un] = {
                    kind: f.SCHEMA_DEFINITION,
                    operationTypes: [
                      {
                        kind: f.OPERATION_TYPE_DEFINITION,
                        operation: 'query',
                        type: {
                          kind: f.NAMED_TYPE,
                          name: { kind: f.NAME, value: 'Query' },
                        },
                      },
                    ],
                  });
                let d = Object.values(l);
                if (s?.sort) {
                  let p = typeof s.sort == 'function' ? s.sort : yc;
                  d.sort((g, h) => p(g.name?.value, h.name?.value));
                }
                return d;
              })(t, {
                useSchemaDefinition: !0,
                forceSchemaDefinition: !1,
                throwOnConflict: !1,
                commentDescriptions: !1,
                ...e,
              }),
            };
            return (n = e?.commentDescriptions ? Xn(r, uc) : r), (dn = {}), n;
          }
          function mr(t, e = !1, n = !1, r = !1) {
            let i, s, o;
            if (t.length === 0) return;
            if (t.length === 1) return t[0];
            let a = !0,
              u = t.every((c) => {
                if (Array.isArray(c)) {
                  if (i === void 0) return (i = c.length), !0;
                  if (i === c.length) return !0;
                } else a = !1;
                return !1;
              });
            if (r && u)
              return Array(i)
                .fill(null)
                .map((c, l) =>
                  mr(
                    t.map((d) => d[l]),
                    e,
                    n,
                    r
                  )
                );
            if (a) return t.flat(1);
            for (let c of (e &&
              (o = t.find((l) => ul(l))) &&
              (s == null && (s = {}),
              Object.setPrototypeOf(
                s,
                Object.create(Object.getPrototypeOf(o))
              )),
            t))
              if (c != null)
                if (ul(c)) {
                  if (o) {
                    let l = Object.getPrototypeOf(s),
                      d = Object.getPrototypeOf(c);
                    if (d)
                      for (let p of Object.getOwnPropertyNames(d)) {
                        let g = Object.getOwnPropertyDescriptor(d, p);
                        ls(g) && Object.defineProperty(l, p, g);
                      }
                  }
                  for (let l in c)
                    s == null && (s = {}),
                      l in s
                        ? (s[l] = mr([s[l], c[l]], e, n, r))
                        : (s[l] = c[l]);
                } else
                  s =
                    Array.isArray(c) && Array.isArray(s)
                      ? mr([s, c], e, n, r)
                      : c;
            return s;
          }
          function ul(t) {
            return t && typeof t == 'object' && !Array.isArray(t);
          }
          function Bn(t, e) {
            if (t && e && e !== t.extensions) {
              if (!t.extensions) {
                t.extensions = e;
                return;
              }
              t.extensions = mr([t.extensions, e], !1, !0);
            }
          }
          function cl(t, e) {
            let n = t.getTypeMap();
            for (let r in n) {
              let i = n[r];
              if (!ut(i).name.startsWith('__')) {
                if (we(i)) {
                  let s = i.getFields();
                  for (let o in s)
                    for (let a of s[o].args)
                      a.defaultValue = e(a.type, a.defaultValue);
                } else if (ke(i)) {
                  let s = i.getFields();
                  for (let o in s) {
                    let a = s[o];
                    a.defaultValue = e(a.type, a.defaultValue);
                  }
                }
              }
            }
          }
          function ni(t, e, n = null, r = null) {
            if (e == null) return e;
            let i = Gi(t);
            if (vt(i)) return n != null ? n(i, e) : e;
            if (Me(i)) return Ho(e).map((s) => ni(i.ofType, s, n, r));
            if (ke(i)) {
              let s = i.getFields(),
                o = {};
              for (let a in e) {
                let u = s[a];
                u != null && (o[a] = ni(u.type, e[a], n, r));
              }
              return r != null ? r(i, o) : o;
            }
          }
          function dl(t, e) {
            return ni(t, e, (n, r) => {
              try {
                return n.serialize(r);
              } catch {
                return r;
              }
            });
          }
          function pl(t, e) {
            return ni(t, e, (n, r) => {
              try {
                return n.parseValue(r);
              } catch {
                return r;
              }
            });
          }
          function fl(t, e) {
            let n = t.getTypeMap();
            for (let r in n) {
              let i = n[r];
              if (!ut(i).name.startsWith('__') && we(i)) {
                let s = i.getFields();
                for (let o in s) e(s[o], r, o);
              }
            }
          }
          function Vn(t, e) {
            if (e) {
              let n = t[e.name];
              if (we(n)) return n;
            }
          }
          function vs(t, e = {}) {
            let n = gl(
                ml(
                  ys(
                    hl(
                      (function (s, o, a) {
                        let u = (function (c) {
                          let l = c[ie.ENUM_VALUE];
                          return l ?? null;
                        })(a);
                        return u
                          ? ys(
                              s,
                              o,
                              {
                                [ie.ENUM_TYPE]: (c) => {
                                  let l = c.toConfig(),
                                    d = l.values,
                                    p = {};
                                  for (let g in d) {
                                    let h = d[g],
                                      S = u(h, c.name, o, g);
                                    if (S === void 0) p[g] = h;
                                    else if (Array.isArray(S)) {
                                      let [I, w] = S;
                                      p[I] = w === void 0 ? h : w;
                                    } else S !== null && (p[g] = S);
                                  }
                                  return ii(new Bt({ ...l, values: p }));
                                },
                              },
                              (c) => Be(c)
                            )
                          : s;
                      })(
                        ys(hl(t.getTypeMap(), t, dl), t, e, (s) => vt(s)),
                        t,
                        e
                      ),
                      t,
                      pl
                    ),
                    t,
                    e,
                    (s) => !vt(s)
                  ),
                  t,
                  e
                ),
                t,
                e
              ),
              { typeMap: r, directives: i } = (function (s, o) {
                let a = Object.create(null);
                for (let h in s) a[h] = s[h];
                let u = Object.create(null);
                for (let h in a) {
                  let S = a[h];
                  if (S == null || h.startsWith('__')) continue;
                  let I = S.name;
                  if (!I.startsWith('__')) {
                    if (u[I] != null) {
                      console.warn(
                        `Duplicate schema type name ${I} found; keeping the existing one found in the schema`
                      );
                      continue;
                    }
                    u[I] = S;
                  }
                }
                for (let h in u) u[h] = l(u[h]);
                return {
                  typeMap: u,
                  directives: o.map((h) =>
                    (function (S) {
                      if (Wa(S)) return S;
                      let I = S.toConfig();
                      return (I.args = c(I.args)), new Vt(I);
                    })(h)
                  ),
                };
                function c(h) {
                  let S = {};
                  for (let I in h) {
                    let w = h[I],
                      R = g(w.type);
                    R != null && ((w.type = R), (S[I] = w));
                  }
                  return S;
                }
                function l(h) {
                  if (we(h)) {
                    let S = h.toConfig();
                    return new ct({
                      ...S,
                      fields: () => d(S.fields),
                      interfaces: () => p(S.interfaces),
                    });
                  }
                  if (Pe(h)) {
                    let S = h.toConfig(),
                      I = { ...S, fields: () => d(S.fields) };
                    return (
                      'interfaces' in I &&
                        (I.interfaces = () => p(S.interfaces)),
                      new un(I)
                    );
                  }
                  if (We(h)) {
                    let S = h.toConfig();
                    return new tr({ ...S, types: () => p(S.types) });
                  }
                  if (ke(h)) {
                    let S = h.toConfig();
                    return new Sn({
                      ...S,
                      fields: () =>
                        (function (I) {
                          let w = {};
                          for (let R in I) {
                            let A = I[R],
                              O = g(A.type);
                            O != null && ((A.type = O), (w[R] = A));
                          }
                          return w;
                        })(S.fields),
                    });
                  }
                  if (Be(h)) return new Bt(h.toConfig());
                  if (gt(h)) return nr(h) ? h : new Ut(h.toConfig());
                  throw Error(`Unexpected schema type: ${h}`);
                }
                function d(h) {
                  let S = {};
                  for (let I in h) {
                    let w = h[I],
                      R = g(w.type);
                    R != null &&
                      w.args &&
                      ((w.type = R), (w.args = c(w.args)), (S[I] = w));
                  }
                  return S;
                }
                function p(h) {
                  let S = [];
                  for (let I of h) {
                    let w = g(I);
                    w != null && S.push(w);
                  }
                  return S;
                }
                function g(h) {
                  if (Me(h)) {
                    let S = g(h.ofType);
                    return S != null ? new Ze(S) : null;
                  }
                  if (Oe(h)) {
                    let S = g(h.ofType);
                    return S != null ? new Ae(S) : null;
                  }
                  if (Lr(h)) {
                    let S = a[h.name];
                    return (
                      S === void 0 &&
                        (u[
                          (S = (function (I) {
                            if ('getFields' in I) {
                              let w = I.getFields();
                              for (let R in w) return w[R].name === '_fake';
                            }
                            return !1;
                          })(h)
                            ? (function (I) {
                                switch (I.name) {
                                  case Ki.name:
                                    return Ki;
                                  case Ji.name:
                                    return Ji;
                                  case Fe.name:
                                    return Fe;
                                  case rt.name:
                                    return rt;
                                  case Mr.name:
                                    return Mr;
                                  default:
                                    return I;
                                }
                              })(h)
                            : l(h)).name
                        ] = a[h.name] =
                          S),
                      S != null ? u[S.name] : null
                    );
                  }
                  return null;
                }
              })(
                n,
                (function (s, o, a) {
                  let u = (function (l) {
                    let d = l[ie.DIRECTIVE];
                    return d ?? null;
                  })(a);
                  if (u == null) return s.slice();
                  let c = [];
                  for (let l of s) {
                    let d = u(l, o);
                    d === void 0 ? c.push(l) : d !== null && c.push(d);
                  }
                  return c;
                })(t.getDirectives(), t, e)
              );
            return new ir({
              ...t.toConfig(),
              query: Vn(r, Vn(n, t.getQueryType())),
              mutation: Vn(r, Vn(n, t.getMutationType())),
              subscription: Vn(r, Vn(n, t.getSubscriptionType())),
              types: Object.values(r),
              directives: i,
            });
          }
          (function (t) {
            (t.TYPE = 'MapperKind.TYPE'),
              (t.SCALAR_TYPE = 'MapperKind.SCALAR_TYPE'),
              (t.ENUM_TYPE = 'MapperKind.ENUM_TYPE'),
              (t.COMPOSITE_TYPE = 'MapperKind.COMPOSITE_TYPE'),
              (t.OBJECT_TYPE = 'MapperKind.OBJECT_TYPE'),
              (t.INPUT_OBJECT_TYPE = 'MapperKind.INPUT_OBJECT_TYPE'),
              (t.ABSTRACT_TYPE = 'MapperKind.ABSTRACT_TYPE'),
              (t.UNION_TYPE = 'MapperKind.UNION_TYPE'),
              (t.INTERFACE_TYPE = 'MapperKind.INTERFACE_TYPE'),
              (t.ROOT_OBJECT = 'MapperKind.ROOT_OBJECT'),
              (t.QUERY = 'MapperKind.QUERY'),
              (t.MUTATION = 'MapperKind.MUTATION'),
              (t.SUBSCRIPTION = 'MapperKind.SUBSCRIPTION'),
              (t.DIRECTIVE = 'MapperKind.DIRECTIVE'),
              (t.FIELD = 'MapperKind.FIELD'),
              (t.COMPOSITE_FIELD = 'MapperKind.COMPOSITE_FIELD'),
              (t.OBJECT_FIELD = 'MapperKind.OBJECT_FIELD'),
              (t.ROOT_FIELD = 'MapperKind.ROOT_FIELD'),
              (t.QUERY_ROOT_FIELD = 'MapperKind.QUERY_ROOT_FIELD'),
              (t.MUTATION_ROOT_FIELD = 'MapperKind.MUTATION_ROOT_FIELD'),
              (t.SUBSCRIPTION_ROOT_FIELD =
                'MapperKind.SUBSCRIPTION_ROOT_FIELD'),
              (t.INTERFACE_FIELD = 'MapperKind.INTERFACE_FIELD'),
              (t.INPUT_OBJECT_FIELD = 'MapperKind.INPUT_OBJECT_FIELD'),
              (t.ARGUMENT = 'MapperKind.ARGUMENT'),
              (t.ENUM_VALUE = 'MapperKind.ENUM_VALUE');
          })(ie || (ie = {}));
          let Tc = ['String', 'ID', 'Int', 'Float', 'Boolean'];
          function ys(t, e, n, r = () => !0) {
            let i = {};
            for (let s in t)
              if (!s.startsWith('__') && !Tc.includes(s)) {
                let o = t[s];
                if (o == null || !r(o)) {
                  i[s] = o;
                  continue;
                }
                let a = (function (c, l, d) {
                  let p,
                    g = [
                      ...(function (h, S) {
                        let I = h.getType(S),
                          w = [ie.TYPE];
                        return (
                          we(I)
                            ? (w.push(ie.COMPOSITE_TYPE, ie.OBJECT_TYPE),
                              S === h.getQueryType()?.name
                                ? w.push(ie.ROOT_OBJECT, ie.QUERY)
                                : S === h.getMutationType()?.name
                                ? w.push(ie.ROOT_OBJECT, ie.MUTATION)
                                : S === h.getSubscriptionType()?.name &&
                                  w.push(ie.ROOT_OBJECT, ie.SUBSCRIPTION))
                            : ke(I)
                            ? w.push(ie.INPUT_OBJECT_TYPE)
                            : Pe(I)
                            ? w.push(
                                ie.COMPOSITE_TYPE,
                                ie.ABSTRACT_TYPE,
                                ie.INTERFACE_TYPE
                              )
                            : We(I)
                            ? w.push(
                                ie.COMPOSITE_TYPE,
                                ie.ABSTRACT_TYPE,
                                ie.UNION_TYPE
                              )
                            : Be(I)
                            ? w.push(ie.ENUM_TYPE)
                            : gt(I) && w.push(ie.SCALAR_TYPE),
                          w
                        );
                      })(c, d),
                    ];
                  for (; !p && g.length > 0; ) p = l[g.pop()];
                  return p ?? null;
                })(e, n, s);
                if (a == null) {
                  i[s] = o;
                  continue;
                }
                let u = a(o, e);
                if (u === void 0) {
                  i[s] = o;
                  continue;
                }
                i[s] = u;
              }
            return i;
          }
          function hl(t, e, n) {
            let r = gl(t, e, {
              [ie.ARGUMENT]: (i) => {
                if (i.defaultValue === void 0) return i;
                let s = ri(t, i.type);
                if (s != null)
                  return { ...i, defaultValue: n(s, i.defaultValue) };
              },
            });
            return ml(r, e, {
              [ie.INPUT_OBJECT_FIELD]: (i) => {
                if (i.defaultValue === void 0) return i;
                let s = ri(r, i.type);
                if (s != null)
                  return { ...i, defaultValue: n(s, i.defaultValue) };
              },
            });
          }
          function ri(t, e) {
            if (Me(e)) {
              let n = ri(t, e.ofType);
              return n != null ? new Ze(n) : null;
            }
            if (Oe(e)) {
              let n = ri(t, e.ofType);
              return n != null ? new Ae(n) : null;
            }
            if (Lr(e)) {
              let n = t[e.name];
              return n ?? null;
            }
            return null;
          }
          function ml(t, e, n) {
            let r = {};
            for (let i in t)
              if (!i.startsWith('__')) {
                let s = t[i];
                if (!we(s) && !Pe(s) && !ke(s)) {
                  r[i] = s;
                  continue;
                }
                let o = (function (l, d, p) {
                  let g,
                    h = [
                      ...(function (S, I) {
                        let w = S.getType(I),
                          R = [ie.FIELD];
                        return (
                          we(w)
                            ? (R.push(ie.COMPOSITE_FIELD, ie.OBJECT_FIELD),
                              I === S.getQueryType()?.name
                                ? R.push(ie.ROOT_FIELD, ie.QUERY_ROOT_FIELD)
                                : I === S.getMutationType()?.name
                                ? R.push(ie.ROOT_FIELD, ie.MUTATION_ROOT_FIELD)
                                : I === S.getSubscriptionType()?.name &&
                                  R.push(
                                    ie.ROOT_FIELD,
                                    ie.SUBSCRIPTION_ROOT_FIELD
                                  ))
                            : Pe(w)
                            ? R.push(ie.COMPOSITE_FIELD, ie.INTERFACE_FIELD)
                            : ke(w) && R.push(ie.INPUT_OBJECT_FIELD),
                          R
                        );
                      })(l, p),
                    ];
                  for (; !g && h.length > 0; ) g = d[h.pop()];
                  return g ?? null;
                })(e, n, i);
                if (o == null) {
                  r[i] = s;
                  continue;
                }
                let a = s.toConfig(),
                  u = a.fields,
                  c = {};
                for (let l in u) {
                  let d = u[l],
                    p = o(d, l, i, e);
                  if (p === void 0) c[l] = d;
                  else if (Array.isArray(p)) {
                    let [g, h] = p;
                    h.astNode != null &&
                      (h.astNode = {
                        ...h.astNode,
                        name: { ...h.astNode.name, value: g },
                      }),
                      (c[g] = h === void 0 ? d : h);
                  } else p !== null && (c[l] = p);
                }
                we(s)
                  ? (r[i] = ii(new ct({ ...a, fields: c })))
                  : Pe(s)
                  ? (r[i] = ii(new un({ ...a, fields: c })))
                  : (r[i] = ii(new Sn({ ...a, fields: c })));
              }
            return r;
          }
          function gl(t, e, n) {
            let r = {};
            for (let i in t)
              if (!i.startsWith('__')) {
                let s = t[i];
                if (!we(s) && !Pe(s)) {
                  r[i] = s;
                  continue;
                }
                let o = (function (l) {
                  let d = l[ie.ARGUMENT];
                  return d ?? null;
                })(n);
                if (o == null) {
                  r[i] = s;
                  continue;
                }
                let a = s.toConfig(),
                  u = a.fields,
                  c = {};
                for (let l in u) {
                  let d = u[l],
                    p = d.args;
                  if (p == null) {
                    c[l] = d;
                    continue;
                  }
                  let g = Object.keys(p);
                  if (!g.length) {
                    c[l] = d;
                    continue;
                  }
                  let h = {};
                  for (let S of g) {
                    let I = p[S],
                      w = o(I, l, i, e);
                    if (w === void 0) h[S] = I;
                    else if (Array.isArray(w)) {
                      let [R, A] = w;
                      h[R] = A;
                    } else w !== null && (h[S] = w);
                  }
                  c[l] = { ...d, args: h };
                }
                we(s)
                  ? (r[i] = new ct({ ...a, fields: c }))
                  : Pe(s)
                  ? (r[i] = new un({ ...a, fields: c }))
                  : (r[i] = new Sn({ ...a, fields: c }));
              }
            return r;
          }
          function ii(t) {
            if (we(t)) {
              let e = t.toConfig();
              if (e.astNode != null) {
                let n = [];
                for (let r in e.fields) {
                  let i = e.fields[r];
                  i.astNode != null && n.push(i.astNode);
                }
                e.astNode = {
                  ...e.astNode,
                  kind: f.OBJECT_TYPE_DEFINITION,
                  fields: n,
                };
              }
              return (
                e.extensionASTNodes != null &&
                  (e.extensionASTNodes = e.extensionASTNodes.map((n) => ({
                    ...n,
                    kind: f.OBJECT_TYPE_EXTENSION,
                    fields: void 0,
                  }))),
                new ct(e)
              );
            }
            if (Pe(t)) {
              let e = t.toConfig();
              if (e.astNode != null) {
                let n = [];
                for (let r in e.fields) {
                  let i = e.fields[r];
                  i.astNode != null && n.push(i.astNode);
                }
                e.astNode = {
                  ...e.astNode,
                  kind: f.INTERFACE_TYPE_DEFINITION,
                  fields: n,
                };
              }
              return (
                e.extensionASTNodes != null &&
                  (e.extensionASTNodes = e.extensionASTNodes.map((n) => ({
                    ...n,
                    kind: f.INTERFACE_TYPE_EXTENSION,
                    fields: void 0,
                  }))),
                new un(e)
              );
            }
            if (ke(t)) {
              let e = t.toConfig();
              if (e.astNode != null) {
                let n = [];
                for (let r in e.fields) {
                  let i = e.fields[r];
                  i.astNode != null && n.push(i.astNode);
                }
                e.astNode = {
                  ...e.astNode,
                  kind: f.INPUT_OBJECT_TYPE_DEFINITION,
                  fields: n,
                };
              }
              return (
                e.extensionASTNodes != null &&
                  (e.extensionASTNodes = e.extensionASTNodes.map((n) => ({
                    ...n,
                    kind: f.INPUT_OBJECT_TYPE_EXTENSION,
                    fields: void 0,
                  }))),
                new Sn(e)
              );
            }
            {
              if (!Be(t)) return t;
              let e = t.toConfig();
              if (e.astNode != null) {
                let n = [];
                for (let r in e.values) {
                  let i = e.values[r];
                  i.astNode != null && n.push(i.astNode);
                }
                e.astNode = { ...e.astNode, values: n };
              }
              return (
                e.extensionASTNodes != null &&
                  (e.extensionASTNodes = e.extensionASTNodes.map((n) => ({
                    ...n,
                    values: void 0,
                  }))),
                new Bt(e)
              );
            }
          }
          function vl(t, e) {
            for (let n in e) t[n] = e[n];
          }
          function Ts(t, e, n, r, i) {
            if (!n.resolve) {
              let s = `Resolver missing for "${r}.${i}".
To disable this validator, use:
  resolverValidationOptions: {
    ${t}: 'ignore'
  }`;
              if (e === 'error') throw Error(s);
              e === 'warn' && console.warn(s);
              return;
            }
            if (typeof n.resolve != 'function')
              throw Error(`Resolver "${r}.${i}" must be a function`);
          }
          let bc = {
            origin: '*',
            methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
            preflightContinue: !1,
            optionsSuccessStatus: 204,
          };
          async function Ec(t, e) {
            let n = t.headers.get('Origin') || void 0,
              r = typeof e == 'function' ? await e(n, t) : e;
            if (r)
              return (function (i, s) {
                let o = new Headers();
                return (
                  s === '*'
                    ? o.set('Access-Control-Allow-Origin', '*')
                    : (typeof s == 'string'
                        ? o.set('Access-Control-Allow-Origin', s)
                        : (function a(u, c) {
                            return Array.isArray(c)
                              ? c.some((l) => a(u, l))
                              : typeof c == 'string'
                              ? u === c
                              : c instanceof RegExp
                              ? c.test(u)
                              : !!c;
                          })(i ?? '', s) &&
                          i &&
                          o.set('Access-Control-Allow-Origin', i),
                      o.append('Vary', 'Origin')),
                  o
                );
              })(n, r);
          }
          async function Nc(t, e, n) {
            let r = { ...bc, ...n },
              { headers: i } = e,
              s = await Ec(t, r.origin ?? !1),
              o = (u, c) => {
                c === 'Vary' ? i.append(c, u) : i.set(c, u);
              };
            if (!s) return e;
            s.forEach(o),
              r.credentials &&
                i.set('Access-Control-Allow-Credentials', 'true');
            let a = Array.isArray(r.exposedHeaders)
              ? r.exposedHeaders.join(',')
              : r.exposedHeaders;
            if (
              (a && i.set('Access-Control-Expose-Headers', a),
              t.method === 'OPTIONS')
            ) {
              if (r.methods) {
                let u = Array.isArray(r.methods)
                  ? r.methods.join(',')
                  : r.methods;
                i.set('Access-Control-Allow-Methods', u);
              }
              return (
                (function (u, c) {
                  let l = new Headers();
                  return (
                    c
                      ? Array.isArray(c) && (c = c.join(','))
                      : ((c = u.headers.get('Access-Control-Request-Headers')),
                        l.append('Vary', 'Access-Control-Request-Headers')),
                    c && l.set('Access-Control-Allow-Headers', c),
                    l
                  );
                })(t, r.allowedHeaders).forEach(o),
                typeof r.maxAge == 'number' &&
                  i.set('Access-Control-Max-Age', String(r.maxAge)),
                r.preflightContinue
                  ? e
                  : (i.set('Content-Length', '0'),
                    new Response(null, {
                      status: r.optionsSuccessStatus,
                      headers: i,
                    }))
              );
            }
            return e;
          }
          var bs = function () {
              return (bs =
                Object.assign ||
                function (t) {
                  for (var e, n = 1, r = arguments.length; n < r; n++)
                    for (var i in (e = arguments[n]))
                      Object.prototype.hasOwnProperty.call(e, i) &&
                        (t[i] = e[i]);
                  return t;
                }).apply(this, arguments);
            },
            si =
              (typeof SuppressedError == 'function' && SuppressedError,
              new Map()),
            Es = new Map(),
            yl = !0,
            ai = !1;
          function Tl(t) {
            return t.replace(/[\s,]+/g, ' ').trim();
          }
          function pn(t) {
            for (var e = [], n = 1; n < arguments.length; n++)
              e[n - 1] = arguments[n];
            typeof t == 'string' && (t = [t]);
            var r = t[0];
            return (
              e.forEach(function (i, s) {
                i && i.kind === 'Document'
                  ? (r += i.loc.source.body)
                  : (r += i),
                  (r += t[s + 1]);
              }),
              (function (i) {
                var s = Tl(i);
                if (!si.has(s)) {
                  var o,
                    a,
                    u,
                    c,
                    l,
                    d = wr(i, {
                      experimentalFragmentVariables: ai,
                      allowLegacyFragmentVariables: ai,
                    });
                  if (!d || d.kind !== 'Document')
                    throw Error('Not a valid GraphQL document.');
                  si.set(
                    s,
                    ((o = new Set()),
                    (a = []),
                    d.definitions.forEach(function (p) {
                      if (p.kind === 'FragmentDefinition') {
                        var g,
                          h = p.name.value,
                          S = Tl(
                            (g = p.loc).source.body.substring(g.start, g.end)
                          ),
                          I = Es.get(h);
                        I && !I.has(S)
                          ? yl &&
                            console.warn(
                              'Warning: fragment with name ' +
                                h +
                                ` already exists.
graphql-tag enforces all fragment names across your application to be unique; read more about
this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names`
                            )
                          : I || Es.set(h, (I = new Set())),
                          I.add(S),
                          o.has(S) || (o.add(S), a.push(p));
                      } else a.push(p);
                    }),
                    (u = bs(bs({}, d), { definitions: a })),
                    (c = new Set(u.definitions)).forEach(function (p) {
                      p.loc && delete p.loc,
                        Object.keys(p).forEach(function (g) {
                          var h = p[g];
                          h && typeof h == 'object' && c.add(h);
                        });
                    }),
                    (l = u.loc) && (delete l.startToken, delete l.endToken),
                    u)
                  );
                }
                return si.get(s);
              })(r)
            );
          }
          var gr = {
            gql: pn,
            resetCaches: function () {
              si.clear(), Es.clear();
            },
            disableFragmentWarnings: function () {
              yl = !1;
            },
            enableExperimentalFragmentVariables: function () {
              ai = !0;
            },
            disableExperimentalFragmentVariables: function () {
              ai = !1;
            },
          };
          (function (t) {
            (t.gql = gr.gql),
              (t.resetCaches = gr.resetCaches),
              (t.disableFragmentWarnings = gr.disableFragmentWarnings),
              (t.enableExperimentalFragmentVariables =
                gr.enableExperimentalFragmentVariables),
              (t.disableExperimentalFragmentVariables =
                gr.disableExperimentalFragmentVariables);
          })(pn || (pn = {})),
            (pn.default = pn);
          let Sc = pn,
            _c = pn`
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
            Ic = gs([
              pn`
  type Query {
    _empty: String
  }
  type Mutation {
    _empty: String
  }
`,
              _c,
              Sc`
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
          ue(430);
          let Y = Symbol.for('drizzle:entityKind');
          function J(t, e) {
            if (!t || typeof t != 'object') return !1;
            if (t instanceof e) return !0;
            if (!Object.prototype.hasOwnProperty.call(e, Y))
              throw Error(
                `Class "${
                  e.name ?? '<unknown>'
                }" doesn't look like a Drizzle entity. If this is incorrect and the class is provided by Drizzle, please report this as a bug.`
              );
            let n = Object.getPrototypeOf(t).constructor;
            if (n)
              for (; n; ) {
                if (Y in n && n[Y] === e[Y]) return !0;
                n = Object.getPrototypeOf(n);
              }
            return !1;
          }
          Symbol.for('drizzle:hasOwnEntityKind');
          class Oc {
            static {
              this[Y] = 'ConsoleLogWriter';
            }
            write(e) {
              console.log(e);
            }
          }
          class wc {
            static {
              this[Y] = 'DefaultLogger';
            }
            constructor(e) {
              this.writer = e?.writer ?? new Oc();
            }
            logQuery(e, n) {
              let r = n.map((s) => {
                  try {
                    return JSON.stringify(s);
                  } catch {
                    return String(s);
                  }
                }),
                i = r.length ? ` -- params: [${r.join(', ')}]` : '';
              this.writer.write(`Query: ${e}${i}`);
            }
          }
          class Ac {
            static {
              this[Y] = 'NoopLogger';
            }
            logQuery() {}
          }
          let it = Symbol.for('drizzle:Name'),
            Ns = Symbol.for('drizzle:Schema'),
            bl = Symbol.for('drizzle:Columns'),
            xc = Symbol.for('drizzle:ExtraConfigColumns'),
            El = Symbol.for('drizzle:OriginalName'),
            Nl = Symbol.for('drizzle:BaseName'),
            oi = Symbol.for('drizzle:IsAlias'),
            Sl = Symbol.for('drizzle:ExtraConfigBuilder'),
            Cc = Symbol.for('drizzle:IsDrizzleTable');
          class le {
            static {
              this[Y] = 'Table';
            }
            static {
              this.Symbol = {
                Name: it,
                Schema: Ns,
                OriginalName: El,
                Columns: bl,
                ExtraConfigColumns: xc,
                BaseName: Nl,
                IsAlias: oi,
                ExtraConfigBuilder: Sl,
              };
            }
            constructor(e, n, r) {
              (this[oi] = !1),
                (this[Cc] = !0),
                (this[Sl] = void 0),
                (this[it] = this[El] = e),
                (this[Ns] = n),
                (this[Nl] = r);
            }
          }
          function vr(t) {
            return `${t[Ns] ?? 'public'}.${t[it]}`;
          }
          class Ve {
            constructor(e, n) {
              (this.enumValues = void 0),
                (this.generated = void 0),
                (this.generatedIdentity = void 0),
                (this.table = e),
                (this.config = n),
                (this.name = n.name),
                (this.keyAsName = n.keyAsName),
                (this.notNull = n.notNull),
                (this.default = n.default),
                (this.defaultFn = n.defaultFn),
                (this.onUpdateFn = n.onUpdateFn),
                (this.hasDefault = n.hasDefault),
                (this.primary = n.primaryKey),
                (this.isUnique = n.isUnique),
                (this.uniqueName = n.uniqueName),
                (this.uniqueType = n.uniqueType),
                (this.dataType = n.dataType),
                (this.columnType = n.columnType),
                (this.generated = n.generated),
                (this.generatedIdentity = n.generatedIdentity);
            }
            static {
              this[Y] = 'Column';
            }
            mapFromDriverValue(e) {
              return e;
            }
            mapToDriverValue(e) {
              return e;
            }
            shouldDisableInsert() {
              return (
                this.config.generated !== void 0 &&
                this.config.generated.type !== 'byDefault'
              );
            }
          }
          let _l = Symbol.for('drizzle:PgInlineForeignKeys'),
            Il = Symbol.for('drizzle:EnableRLS');
          class Dc extends le {
            static {
              (Q = le.Symbol.ExtraConfigBuilder),
                (m = le.Symbol.ExtraConfigColumns);
            }
            static {
              this[Y] = 'PgTable';
            }
            static {
              this.Symbol = Object.assign({}, le.Symbol, {
                InlineForeignKeys: _l,
                EnableRLS: Il,
              });
            }
            constructor(...e) {
              super(...e),
                (this[_l] = []),
                (this[Il] = !1),
                (this[Q] = void 0),
                (this[m] = {});
            }
          }
          class Rc {
            static {
              this[Y] = 'PgPrimaryKeyBuilder';
            }
            constructor(e, n) {
              (this.columns = e), (this.name = n);
            }
            build(e) {
              return new Pc(e, this.columns, this.name);
            }
          }
          class Pc {
            constructor(e, n, r) {
              (this.table = e), (this.columns = n), (this.name = r);
            }
            static {
              this[Y] = 'PgPrimaryKey';
            }
            getName() {
              return (
                this.name ??
                `${this.table[Dc.Symbol.Name]}_${this.columns
                  .map((e) => e.name)
                  .join('_')}_pk`
              );
            }
          }
          class Ol {
            static {
              this[Y] = 'ColumnBuilder';
            }
            constructor(e, n, r) {
              (this.$default = this.$defaultFn),
                (this.$onUpdate = this.$onUpdateFn),
                (this.config = {
                  name: e,
                  keyAsName: e === '',
                  notNull: !1,
                  default: void 0,
                  hasDefault: !1,
                  primaryKey: !1,
                  isUnique: !1,
                  uniqueName: void 0,
                  uniqueType: void 0,
                  dataType: n,
                  columnType: r,
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
              return (
                (this.config.default = e), (this.config.hasDefault = !0), this
              );
            }
            $defaultFn(e) {
              return (
                (this.config.defaultFn = e), (this.config.hasDefault = !0), this
              );
            }
            $onUpdateFn(e) {
              return (
                (this.config.onUpdateFn = e),
                (this.config.hasDefault = !0),
                this
              );
            }
            primaryKey() {
              return (
                (this.config.primaryKey = !0), (this.config.notNull = !0), this
              );
            }
            setName(e) {
              this.config.name === '' && (this.config.name = e);
            }
          }
          class Lc {
            static {
              this[Y] = 'PgForeignKeyBuilder';
            }
            constructor(e, n) {
              (this._onUpdate = 'no action'),
                (this._onDelete = 'no action'),
                (this.reference = () => {
                  let { name: r, columns: i, foreignColumns: s } = e();
                  return {
                    name: r,
                    columns: i,
                    foreignTable: s[0].table,
                    foreignColumns: s,
                  };
                }),
                n &&
                  ((this._onUpdate = n.onUpdate),
                  (this._onDelete = n.onDelete));
            }
            onUpdate(e) {
              return (this._onUpdate = e === void 0 ? 'no action' : e), this;
            }
            onDelete(e) {
              return (this._onDelete = e === void 0 ? 'no action' : e), this;
            }
            build(e) {
              return new kc(e, this);
            }
          }
          class kc {
            constructor(e, n) {
              (this.table = e),
                (this.reference = n.reference),
                (this.onUpdate = n._onUpdate),
                (this.onDelete = n._onDelete);
            }
            static {
              this[Y] = 'PgForeignKey';
            }
            getName() {
              let { name: e, columns: n, foreignColumns: r } = this.reference(),
                i = n.map((a) => a.name),
                s = r.map((a) => a.name),
                o = [this.table[it], ...i, r[0].table[it], ...s];
              return e ?? `${o.join('_')}_fk`;
            }
          }
          function wl(t, ...e) {
            return t(...e);
          }
          function Al(t, e) {
            return `${t[it]}_${e.join('_')}_unique`;
          }
          class Mc {
            constructor(e, n) {
              (this.nullsNotDistinctConfig = !1),
                (this.name = n),
                (this.columns = e);
            }
            static {
              this[Y] = 'PgUniqueConstraintBuilder';
            }
            nullsNotDistinct() {
              return (this.nullsNotDistinctConfig = !0), this;
            }
            build(e) {
              return new $c(
                e,
                this.columns,
                this.nullsNotDistinctConfig,
                this.name
              );
            }
          }
          class $p {
            static {
              this[Y] = 'PgUniqueOnConstraintBuilder';
            }
            constructor(e) {
              this.name = e;
            }
            on(...e) {
              return new Mc(e, this.name);
            }
          }
          class $c {
            constructor(e, n, r, i) {
              (this.nullsNotDistinct = !1),
                (this.table = e),
                (this.columns = n),
                (this.name =
                  i ??
                  Al(
                    this.table,
                    this.columns.map((s) => s.name)
                  )),
                (this.nullsNotDistinct = r);
            }
            static {
              this[Y] = 'PgUniqueConstraint';
            }
            getName() {
              return this.name;
            }
          }
          function xl(t, e, n) {
            for (let r = e; r < t.length; r++) {
              let i = t[r];
              if (i === '\\') {
                r++;
                continue;
              }
              if (i === '"') return [t.slice(e, r).replace(/\\/g, ''), r + 1];
              if (!n && (i === ',' || i === '}'))
                return [t.slice(e, r).replace(/\\/g, ''), r];
            }
            return [t.slice(e).replace(/\\/g, ''), t.length];
          }
          class Ss extends Ol {
            static {
              this[Y] = 'PgColumnBuilder';
            }
            array(e) {
              return new jc(this.config.name, this, e);
            }
            references(e, n = {}) {
              return this.foreignKeyConfigs.push({ ref: e, actions: n }), this;
            }
            unique(e, n) {
              return (
                (this.config.isUnique = !0),
                (this.config.uniqueName = e),
                (this.config.uniqueType = n?.nulls),
                this
              );
            }
            generatedAlwaysAs(e) {
              return (
                (this.config.generated = {
                  as: e,
                  type: 'always',
                  mode: 'stored',
                }),
                this
              );
            }
            buildForeignKeys(e, n) {
              return this.foreignKeyConfigs.map(({ ref: r, actions: i }) =>
                wl(
                  (s, o) => {
                    let a = new Lc(() => ({
                      columns: [e],
                      foreignColumns: [s()],
                    }));
                    return (
                      o.onUpdate && a.onUpdate(o.onUpdate),
                      o.onDelete && a.onDelete(o.onDelete),
                      a.build(n)
                    );
                  },
                  r,
                  i
                )
              );
            }
            buildExtraConfigColumn(e) {
              return new Fc(e, this.config);
            }
            constructor(...e) {
              super(...e), (this.foreignKeyConfigs = []);
            }
          }
          class li extends Ve {
            constructor(e, n) {
              n.uniqueName || (n.uniqueName = Al(e, [n.name])),
                super(e, n),
                (this.table = e);
            }
            static {
              this[Y] = 'PgColumn';
            }
          }
          class Fc extends li {
            static {
              this[Y] = 'ExtraConfigColumn';
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
          class Fp {
            static {
              this[Y] = 'IndexedColumn';
            }
            constructor(e, n, r, i) {
              (this.name = e),
                (this.keyAsName = n),
                (this.type = r),
                (this.indexConfig = i);
            }
          }
          class jc extends Ss {
            static {
              this[Y] = 'PgArrayBuilder';
            }
            constructor(e, n, r) {
              super(e, 'array', 'PgArray'),
                (this.config.baseBuilder = n),
                (this.config.size = r);
            }
            build(e) {
              let n = this.config.baseBuilder.build(e);
              return new _s(e, this.config, n);
            }
          }
          class _s extends li {
            constructor(e, n, r, i) {
              super(e, n),
                (this.baseColumn = r),
                (this.range = i),
                (this.size = n.size);
            }
            static {
              this[Y] = 'PgArray';
            }
            getSQLType() {
              return `${this.baseColumn.getSQLType()}[${
                typeof this.size == 'number' ? this.size : ''
              }]`;
            }
            mapFromDriverValue(e) {
              return (
                typeof e == 'string' &&
                  (e = (function (n) {
                    let [r] = (function i(s, o = 0) {
                      let a = [],
                        u = o,
                        c = !1;
                      for (; u < s.length; ) {
                        let l = s[u];
                        if (l === ',') {
                          (c || u === o) && a.push(''), (c = !0), u++;
                          continue;
                        }
                        if (((c = !1), l === '\\')) {
                          u += 2;
                          continue;
                        }
                        if (l === '"') {
                          let [g, h] = xl(s, u + 1, !0);
                          a.push(g), (u = h);
                          continue;
                        }
                        if (l === '}') return [a, u + 1];
                        if (l === '{') {
                          let [g, h] = i(s, u + 1);
                          a.push(g), (u = h);
                          continue;
                        }
                        let [d, p] = xl(s, u, !1);
                        a.push(d), (u = p);
                      }
                      return [a, u];
                    })(n, 1);
                    return r;
                  })(e)),
                e.map((n) => this.baseColumn.mapFromDriverValue(n))
              );
            }
            mapToDriverValue(e, n = !1) {
              let r = e.map((i) =>
                i === null
                  ? null
                  : J(this.baseColumn, _s)
                  ? this.baseColumn.mapToDriverValue(i, !0)
                  : this.baseColumn.mapToDriverValue(i)
              );
              return n
                ? r
                : (function i(s) {
                    return `{${s
                      .map((o) =>
                        Array.isArray(o)
                          ? i(o)
                          : typeof o == 'string'
                          ? `"${o.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`
                          : `${o}`
                      )
                      .join(',')}}`;
                  })(r);
            }
          }
          class jp extends Ss {
            static {
              this[Y] = 'PgEnumObjectColumnBuilder';
            }
            constructor(e, n) {
              super(e, 'string', 'PgEnumObjectColumn'), (this.config.enum = n);
            }
            build(e) {
              return new Uc(e, this.config);
            }
          }
          class Uc extends li {
            static {
              this[Y] = 'PgEnumObjectColumn';
            }
            constructor(e, n) {
              super(e, n),
                (this.enumValues = this.config.enum.enumValues),
                (this.enum = n.enum);
            }
            getSQLType() {
              return this.enum.enumName;
            }
          }
          let Cl = Symbol.for('drizzle:isPgEnum');
          class Up extends Ss {
            static {
              this[Y] = 'PgEnumColumnBuilder';
            }
            constructor(e, n) {
              super(e, 'string', 'PgEnumColumn'), (this.config.enum = n);
            }
            build(e) {
              return new Bc(e, this.config);
            }
          }
          class Bc extends li {
            static {
              this[Y] = 'PgEnumColumn';
            }
            constructor(e, n) {
              super(e, n),
                (this.enum = this.config.enum),
                (this.enumValues = this.config.enum.enumValues),
                (this.enum = n.enum);
            }
            getSQLType() {
              return this.enum.enumName;
            }
          }
          class st {
            static {
              this[Y] = 'Subquery';
            }
            constructor(e, n, r, i = !1, s = []) {
              this._ = {
                brand: 'Subquery',
                sql: e,
                selectedFields: n,
                alias: r,
                isWith: i,
                usedTables: s,
              };
            }
          }
          class Dl extends st {
            static {
              this[Y] = 'WithSubquery';
            }
          }
          let Vc = {
              startActiveSpan: (t, e) =>
                v
                  ? (T || (T = v.trace.getTracer('drizzle-orm', '0.45.1')),
                    wl(
                      (n, r) =>
                        r.startActiveSpan(t, (i) => {
                          try {
                            return e(i);
                          } catch (s) {
                            throw (
                              (i.setStatus({
                                code: n.SpanStatusCode.ERROR,
                                message:
                                  s instanceof Error
                                    ? s.message
                                    : 'Unknown error',
                              }),
                              s)
                            );
                          } finally {
                            i.end();
                          }
                        }),
                      v,
                      T
                    ))
                  : e(),
            },
            at = Symbol.for('drizzle:ViewBaseConfig');
          class Bp {
            static {
              this[Y] = 'FakePrimitiveParam';
            }
          }
          function Rl(t) {
            return t != null && typeof t.getSQL == 'function';
          }
          class et {
            static {
              this[Y] = 'StringChunk';
            }
            constructor(e) {
              this.value = Array.isArray(e) ? e : [e];
            }
            getSQL() {
              return new Ee([this]);
            }
          }
          class Ee {
            constructor(e) {
              for (let n of ((this.decoder = Pl),
              (this.shouldInlineParams = !1),
              (this.usedTables = []),
              (this.queryChunks = e),
              e))
                if (J(n, le)) {
                  let r = n[le.Symbol.Schema];
                  this.usedTables.push(
                    r === void 0
                      ? n[le.Symbol.Name]
                      : r + '.' + n[le.Symbol.Name]
                  );
                }
            }
            static {
              this[Y] = 'SQL';
            }
            append(e) {
              return this.queryChunks.push(...e.queryChunks), this;
            }
            toQuery(e) {
              return Vc.startActiveSpan('drizzle.buildSQL', (n) => {
                let r = this.buildQueryFromSourceParams(this.queryChunks, e);
                return (
                  n?.setAttributes({
                    'drizzle.query.text': r.sql,
                    'drizzle.query.params': JSON.stringify(r.params),
                  }),
                  r
                );
              });
            }
            buildQueryFromSourceParams(e, n) {
              let r = Object.assign({}, n, {
                  inlineParams: n.inlineParams || this.shouldInlineParams,
                  paramStartIndex: n.paramStartIndex || { value: 0 },
                }),
                {
                  casing: i,
                  escapeName: s,
                  escapeParam: o,
                  prepareTyping: a,
                  inlineParams: u,
                  paramStartIndex: c,
                } = r;
              return (function (l) {
                let d = { sql: '', params: [] };
                for (let p of l)
                  (d.sql += p.sql),
                    d.params.push(...p.params),
                    p.typings?.length &&
                      (d.typings || (d.typings = []),
                      d.typings.push(...p.typings));
                return d;
              })(
                e.map((l) => {
                  if (J(l, et)) return { sql: l.value.join(''), params: [] };
                  if (J(l, Is)) return { sql: s(l.value), params: [] };
                  if (l === void 0) return { sql: '', params: [] };
                  if (Array.isArray(l)) {
                    let d = [new et('(')];
                    for (let [p, g] of l.entries())
                      d.push(g), p < l.length - 1 && d.push(new et(', '));
                    return (
                      d.push(new et(')')), this.buildQueryFromSourceParams(d, r)
                    );
                  }
                  if (J(l, Ee))
                    return this.buildQueryFromSourceParams(l.queryChunks, {
                      ...r,
                      inlineParams: u || l.shouldInlineParams,
                    });
                  if (J(l, le)) {
                    let d = l[le.Symbol.Schema],
                      p = l[le.Symbol.Name];
                    return {
                      sql: d === void 0 || l[oi] ? s(p) : s(d) + '.' + s(p),
                      params: [],
                    };
                  }
                  if (J(l, Ve)) {
                    let d = i.getColumnCasing(l);
                    if (n.invokeSource === 'indexes')
                      return { sql: s(d), params: [] };
                    let p = l.table[le.Symbol.Schema];
                    return {
                      sql:
                        l.table[oi] || p === void 0
                          ? s(l.table[le.Symbol.Name]) + '.' + s(d)
                          : s(p) +
                            '.' +
                            s(l.table[le.Symbol.Name]) +
                            '.' +
                            s(d),
                      params: [],
                    };
                  }
                  if (J(l, Qn)) {
                    let d = l[at].schema,
                      p = l[at].name;
                    return {
                      sql:
                        d === void 0 || l[at].isAlias
                          ? s(p)
                          : s(d) + '.' + s(p),
                      params: [],
                    };
                  }
                  if (J(l, fn)) {
                    if (J(l.value, qn))
                      return {
                        sql: o(c.value++, l),
                        params: [l],
                        typings: ['none'],
                      };
                    let d =
                      l.value === null
                        ? null
                        : l.encoder.mapToDriverValue(l.value);
                    if (J(d, Ee))
                      return this.buildQueryFromSourceParams([d], r);
                    if (u)
                      return { sql: this.mapInlineParam(d, r), params: [] };
                    let p = ['none'];
                    return (
                      a && (p = [a(l.encoder)]),
                      { sql: o(c.value++, d), params: [d], typings: p }
                    );
                  }
                  return J(l, qn)
                    ? { sql: o(c.value++, l), params: [l], typings: ['none'] }
                    : J(l, Ee.Aliased) && l.fieldAlias !== void 0
                    ? { sql: s(l.fieldAlias), params: [] }
                    : J(l, st)
                    ? l._.isWith
                      ? { sql: s(l._.alias), params: [] }
                      : this.buildQueryFromSourceParams(
                          [
                            new et('('),
                            l._.sql,
                            new et(') '),
                            new Is(l._.alias),
                          ],
                          r
                        )
                    : l && typeof l == 'function' && Cl in l && l[Cl] === !0
                    ? l.schema
                      ? { sql: s(l.schema) + '.' + s(l.enumName), params: [] }
                      : { sql: s(l.enumName), params: [] }
                    : Rl(l)
                    ? l.shouldOmitSQLParens?.()
                      ? this.buildQueryFromSourceParams([l.getSQL()], r)
                      : this.buildQueryFromSourceParams(
                          [new et('('), l.getSQL(), new et(')')],
                          r
                        )
                    : u
                    ? { sql: this.mapInlineParam(l, r), params: [] }
                    : { sql: o(c.value++, l), params: [l], typings: ['none'] };
                })
              );
            }
            mapInlineParam(e, { escapeString: n }) {
              if (e === null) return 'null';
              if (typeof e == 'number' || typeof e == 'boolean')
                return e.toString();
              if (typeof e == 'string') return n(e);
              if (typeof e == 'object') {
                let r = e.toString();
                return n(r === '[object Object]' ? JSON.stringify(e) : r);
              }
              throw Error('Unexpected param value: ' + e);
            }
            getSQL() {
              return this;
            }
            as(e) {
              return e === void 0 ? this : new Ee.Aliased(this, e);
            }
            mapWith(e) {
              return (
                (this.decoder =
                  typeof e == 'function' ? { mapFromDriverValue: e } : e),
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
          class Is {
            constructor(e) {
              this.value = e;
            }
            static {
              this[Y] = 'Name';
            }
            getSQL() {
              return new Ee([this]);
            }
          }
          let Pl = { mapFromDriverValue: (t) => t },
            Ll = { mapToDriverValue: (t) => t };
          ({ ...Pl, ...Ll });
          class fn {
            constructor(e, n = Ll) {
              (this.value = e), (this.encoder = n);
            }
            static {
              this[Y] = 'Param';
            }
            getSQL() {
              return new Ee([this]);
            }
          }
          function D(t, ...e) {
            let n = [];
            for (let [r, i] of ((e.length > 0 ||
              (t.length > 0 && t[0] !== '')) &&
              n.push(new et(t[0])),
            e.entries()))
              n.push(i, new et(t[r + 1]));
            return new Ee(n);
          }
          ((t) => {
            (t.empty = function () {
              return new Ee([]);
            }),
              (t.fromList = function (e) {
                return new Ee(e);
              }),
              (t.raw = function (e) {
                return new Ee([new et(e)]);
              }),
              (t.join = function (e, n) {
                let r = [];
                for (let [i, s] of e.entries())
                  i > 0 && n !== void 0 && r.push(n), r.push(s);
                return new Ee(r);
              }),
              (t.identifier = function (e) {
                return new Is(e);
              }),
              (t.placeholder = function (e) {
                return new qn(e);
              }),
              (t.param = function (e, n) {
                return new fn(e, n);
              });
          })(D || (D = {})),
            ((t) => {
              class e {
                constructor(r, i) {
                  (this.isSelectionField = !1),
                    (this.sql = r),
                    (this.fieldAlias = i);
                }
                static {
                  this[Y] = 'SQL.Aliased';
                }
                getSQL() {
                  return this.sql;
                }
                clone() {
                  return new e(this.sql, this.fieldAlias);
                }
              }
              t.Aliased = e;
            })(Ee || (Ee = {}));
          class qn {
            constructor(e) {
              this.name = e;
            }
            static {
              this[Y] = 'Placeholder';
            }
            getSQL() {
              return new Ee([this]);
            }
          }
          function ui(t, e) {
            return t.map((n) => {
              if (J(n, qn)) {
                if (!(n.name in e))
                  throw Error(
                    `No value for placeholder "${n.name}" was provided`
                  );
                return e[n.name];
              }
              if (J(n, fn) && J(n.value, qn)) {
                if (!(n.value.name in e))
                  throw Error(
                    `No value for placeholder "${n.value.name}" was provided`
                  );
                return n.encoder.mapToDriverValue(e[n.value.name]);
              }
              return n;
            });
          }
          let qc = Symbol.for('drizzle:IsDrizzleView');
          class Qn {
            static {
              this[Y] = 'View';
            }
            constructor({ name: e, schema: n, selectedFields: r, query: i }) {
              (this[qc] = !0),
                (this[at] = {
                  name: e,
                  originalName: e,
                  schema: n,
                  selectedFields: r,
                  query: i,
                  isExisting: !i,
                  isAlias: !1,
                });
            }
            getSQL() {
              return new Ee([this]);
            }
          }
          function dt(t, e) {
            return typeof e != 'object' ||
              e === null ||
              !('mapToDriverValue' in e) ||
              typeof e.mapToDriverValue != 'function' ||
              Rl(t) ||
              J(t, fn) ||
              J(t, qn) ||
              J(t, Ve) ||
              J(t, le) ||
              J(t, Qn)
              ? t
              : new fn(t, e);
          }
          (Ve.prototype.getSQL = function () {
            return new Ee([this]);
          }),
            (le.prototype.getSQL = function () {
              return new Ee([this]);
            }),
            (st.prototype.getSQL = function () {
              return new Ee([this]);
            });
          let Yn = (t, e) => D`${t} = ${dt(e, t)}`,
            Qc = (t, e) => D`${t} <> ${dt(e, t)}`;
          function Os(...t) {
            let e = t.filter((n) => n !== void 0);
            return e.length === 0
              ? void 0
              : new Ee(
                  e.length === 1
                    ? e
                    : [new et('('), D.join(e, new et(' and ')), new et(')')]
                );
          }
          function Yc(...t) {
            let e = t.filter((n) => n !== void 0);
            return e.length === 0
              ? void 0
              : new Ee(
                  e.length === 1
                    ? e
                    : [new et('('), D.join(e, new et(' or ')), new et(')')]
                );
          }
          function Gc(t) {
            return D`not ${t}`;
          }
          let Kc = (t, e) => D`${t} > ${dt(e, t)}`,
            Jc = (t, e) => D`${t} >= ${dt(e, t)}`,
            Hc = (t, e) => D`${t} < ${dt(e, t)}`,
            zc = (t, e) => D`${t} <= ${dt(e, t)}`;
          function Wc(t, e) {
            return Array.isArray(e)
              ? e.length === 0
                ? D`false`
                : D`${t} in ${e.map((n) => dt(n, t))}`
              : D`${t} in ${dt(e, t)}`;
          }
          function Xc(t, e) {
            return Array.isArray(e)
              ? e.length === 0
                ? D`true`
                : D`${t} not in ${e.map((n) => dt(n, t))}`
              : D`${t} not in ${dt(e, t)}`;
          }
          function Zc(t) {
            return D`${t} is null`;
          }
          function ed(t) {
            return D`${t} is not null`;
          }
          function td(t) {
            return D`exists ${t}`;
          }
          function nd(t) {
            return D`not exists ${t}`;
          }
          function rd(t, e, n) {
            return D`${t} between ${dt(e, t)} and ${dt(n, t)}`;
          }
          function id(t, e, n) {
            return D`${t} not between ${dt(e, t)} and ${dt(n, t)}`;
          }
          function sd(t, e) {
            return D`${t} like ${e}`;
          }
          function ad(t, e) {
            return D`${t} not like ${e}`;
          }
          function od(t, e) {
            return D`${t} ilike ${e}`;
          }
          function ld(t, e) {
            return D`${t} not ilike ${e}`;
          }
          function ud(t) {
            return D`${t} asc`;
          }
          function cd(t) {
            return D`${t} desc`;
          }
          class kl {
            constructor(e, n, r) {
              (this.sourceTable = e),
                (this.referencedTable = n),
                (this.relationName = r),
                (this.referencedTableName = n[le.Symbol.Name]);
            }
            static {
              this[Y] = 'Relation';
            }
          }
          class dd {
            constructor(e, n) {
              (this.table = e), (this.config = n);
            }
            static {
              this[Y] = 'Relations';
            }
          }
          class An extends kl {
            constructor(e, n, r, i) {
              super(e, n, r?.relationName),
                (this.config = r),
                (this.isNullable = i);
            }
            static {
              this[Y] = 'One';
            }
            withFieldName(e) {
              let n = new An(
                this.sourceTable,
                this.referencedTable,
                this.config,
                this.isNullable
              );
              return (n.fieldName = e), n;
            }
          }
          class ci extends kl {
            constructor(e, n, r) {
              super(e, n, r?.relationName), (this.config = r);
            }
            static {
              this[Y] = 'Many';
            }
            withFieldName(e) {
              let n = new ci(
                this.sourceTable,
                this.referencedTable,
                this.config
              );
              return (n.fieldName = e), n;
            }
          }
          function pd(t) {
            return {
              one: function (e, n) {
                return new An(
                  t,
                  e,
                  n,
                  n?.fields.reduce((r, i) => r && i.notNull, !0) ?? !1
                );
              },
              many: function (e, n) {
                return new ci(t, e, n);
              },
            };
          }
          class di {
            constructor(e) {
              this.table = e;
            }
            static {
              this[Y] = 'ColumnAliasProxyHandler';
            }
            get(e, n) {
              return n === 'table' ? this.table : e[n];
            }
          }
          class ws {
            constructor(e, n) {
              (this.alias = e), (this.replaceOriginalName = n);
            }
            static {
              this[Y] = 'TableAliasProxyHandler';
            }
            get(e, n) {
              if (n === le.Symbol.IsAlias) return !0;
              if (
                n === le.Symbol.Name ||
                (this.replaceOriginalName && n === le.Symbol.OriginalName)
              )
                return this.alias;
              if (n === at) return { ...e[at], name: this.alias, isAlias: !0 };
              if (n === le.Symbol.Columns) {
                let i = e[le.Symbol.Columns];
                if (!i) return i;
                let s = {};
                return (
                  Object.keys(i).map((o) => {
                    s[o] = new Proxy(i[o], new di(new Proxy(e, this)));
                  }),
                  s
                );
              }
              let r = e[n];
              return J(r, Ve) ? new Proxy(r, new di(new Proxy(e, this))) : r;
            }
          }
          class Vp {
            constructor(e) {
              this.alias = e;
            }
            static {
              this[Y] = 'RelationTableAliasProxyHandler';
            }
            get(e, n) {
              return n === 'sourceTable' ? pi(e.sourceTable, this.alias) : e[n];
            }
          }
          function pi(t, e) {
            return new Proxy(t, new ws(e, !1));
          }
          function Zt(t, e) {
            return new Proxy(t, new di(new Proxy(t.table, new ws(e, !1))));
          }
          function Ml(t, e) {
            return new Ee.Aliased(fi(t.sql, e), t.fieldAlias);
          }
          function fi(t, e) {
            return D.join(
              t.queryChunks.map((n) =>
                J(n, Ve)
                  ? Zt(n, e)
                  : J(n, Ee)
                  ? fi(n, e)
                  : J(n, Ee.Aliased)
                  ? Ml(n, e)
                  : n
              )
            );
          }
          class ot {
            static {
              this[Y] = 'SelectionProxyHandler';
            }
            constructor(e) {
              this.config = { ...e };
            }
            get(e, n) {
              if (n === '_')
                return {
                  ...e._,
                  selectedFields: new Proxy(e._.selectedFields, this),
                };
              if (n === at)
                return {
                  ...e[at],
                  selectedFields: new Proxy(e[at].selectedFields, this),
                };
              if (typeof n == 'symbol') return e[n];
              let r = (
                J(e, st)
                  ? e._.selectedFields
                  : J(e, Qn)
                  ? e[at].selectedFields
                  : e
              )[n];
              if (J(r, Ee.Aliased)) {
                if (
                  this.config.sqlAliasedBehavior === 'sql' &&
                  !r.isSelectionField
                )
                  return r.sql;
                let i = r.clone();
                return (i.isSelectionField = !0), i;
              }
              if (J(r, Ee)) {
                if (this.config.sqlBehavior === 'sql') return r;
                throw Error(
                  `You tried to reference "${n}" field from a subquery, which is a raw SQL field, but it doesn't have an alias declared. Please add an alias to the field using ".as('alias')" method.`
                );
              }
              return J(r, Ve)
                ? this.config.alias
                  ? new Proxy(
                      r,
                      new di(
                        new Proxy(
                          r.table,
                          new ws(
                            this.config.alias,
                            this.config.replaceOriginalName ?? !1
                          )
                        )
                      )
                    )
                  : r
                : typeof r != 'object' || r === null
                ? r
                : new Proxy(r, new ot(this.config));
            }
          }
          function fd(t) {
            return (
              t
                .replace(/['\u2019]/g, '')
                .match(/[\da-z]+|[A-Z]+(?![a-z])|[A-Z][\da-z]+/g) ?? []
            )
              .map((e) => e.toLowerCase())
              .join('_');
          }
          function hd(t) {
            return (
              t
                .replace(/['\u2019]/g, '')
                .match(/[\da-z]+|[A-Z]+(?![a-z])|[A-Z][\da-z]+/g) ?? []
            ).reduce(
              (e, n, r) =>
                e +
                (r === 0
                  ? n.toLowerCase()
                  : `${n[0].toUpperCase()}${n.slice(1)}`),
              ''
            );
          }
          function md(t) {
            return t;
          }
          class gd {
            static {
              this[Y] = 'CasingCache';
            }
            constructor(e) {
              (this.cache = {}),
                (this.cachedTables = {}),
                (this.convert =
                  e === 'snake_case' ? fd : e === 'camelCase' ? hd : md);
            }
            getColumnCasing(e) {
              if (!e.keyAsName) return e.name;
              let n = e.table[le.Symbol.Schema] ?? 'public',
                r = e.table[le.Symbol.OriginalName],
                i = `${n}.${r}.${e.name}`;
              return this.cache[i] || this.cacheTable(e.table), this.cache[i];
            }
            cacheTable(e) {
              let n = e[le.Symbol.Schema] ?? 'public',
                r = e[le.Symbol.OriginalName],
                i = `${n}.${r}`;
              if (!this.cachedTables[i]) {
                for (let s of Object.values(e[le.Symbol.Columns])) {
                  let o = `${i}.${s.name}`;
                  this.cache[o] = this.convert(s.name);
                }
                this.cachedTables[i] = !0;
              }
            }
            clearCache() {
              (this.cache = {}), (this.cachedTables = {});
            }
          }
          class As extends Error {
            static {
              this[Y] = 'DrizzleError';
            }
            constructor({ message: e, cause: n }) {
              super(e), (this.name = 'DrizzleError'), (this.cause = n);
            }
          }
          class hn extends Error {
            constructor(e, n, r) {
              super(`Failed query: ${e}
params: ${n}`),
                (this.query = e),
                (this.params = n),
                (this.cause = r),
                Error.captureStackTrace(this, hn),
                r && (this.cause = r);
            }
          }
          class vd extends As {
            static {
              this[Y] = 'TransactionRollbackError';
            }
            constructor() {
              super({ message: 'Rollback' });
            }
          }
          class yd {
            static {
              this[Y] = 'SQLiteForeignKeyBuilder';
            }
            constructor(e, n) {
              (this.reference = () => {
                let { name: r, columns: i, foreignColumns: s } = e();
                return {
                  name: r,
                  columns: i,
                  foreignTable: s[0].table,
                  foreignColumns: s,
                };
              }),
                n &&
                  ((this._onUpdate = n.onUpdate),
                  (this._onDelete = n.onDelete));
            }
            onUpdate(e) {
              return (this._onUpdate = e), this;
            }
            onDelete(e) {
              return (this._onDelete = e), this;
            }
            build(e) {
              return new Td(e, this);
            }
          }
          class Td {
            constructor(e, n) {
              (this.table = e),
                (this.reference = n.reference),
                (this.onUpdate = n._onUpdate),
                (this.onDelete = n._onDelete);
            }
            static {
              this[Y] = 'SQLiteForeignKey';
            }
            getName() {
              let { name: e, columns: n, foreignColumns: r } = this.reference(),
                i = n.map((a) => a.name),
                s = r.map((a) => a.name),
                o = [this.table[it], ...i, r[0].table[it], ...s];
              return e ?? `${o.join('_')}_fk`;
            }
          }
          function $l(t, e) {
            return `${t[it]}_${e.join('_')}_unique`;
          }
          class bd {
            constructor(e, n) {
              (this.name = n), (this.columns = e);
            }
            static {
              this[Y] = 'SQLiteUniqueConstraintBuilder';
            }
            build(e) {
              return new Ed(e, this.columns, this.name);
            }
          }
          class qp {
            static {
              this[Y] = 'SQLiteUniqueOnConstraintBuilder';
            }
            constructor(e) {
              this.name = e;
            }
            on(...e) {
              return new bd(e, this.name);
            }
          }
          class Ed {
            constructor(e, n, r) {
              (this.table = e),
                (this.columns = n),
                (this.name =
                  r ??
                  $l(
                    this.table,
                    this.columns.map((i) => i.name)
                  ));
            }
            static {
              this[Y] = 'SQLiteUniqueConstraint';
            }
            getName() {
              return this.name;
            }
          }
          class Ft extends Ol {
            static {
              this[Y] = 'SQLiteColumnBuilder';
            }
            references(e, n = {}) {
              return this.foreignKeyConfigs.push({ ref: e, actions: n }), this;
            }
            unique(e) {
              return (
                (this.config.isUnique = !0), (this.config.uniqueName = e), this
              );
            }
            generatedAlwaysAs(e, n) {
              return (
                (this.config.generated = {
                  as: e,
                  type: 'always',
                  mode: n?.mode ?? 'virtual',
                }),
                this
              );
            }
            buildForeignKeys(e, n) {
              return this.foreignKeyConfigs.map(({ ref: r, actions: i }) =>
                ((s, o) => {
                  let a = new yd(() => ({
                    columns: [e],
                    foreignColumns: [s()],
                  }));
                  return (
                    o.onUpdate && a.onUpdate(o.onUpdate),
                    o.onDelete && a.onDelete(o.onDelete),
                    a.build(n)
                  );
                })(r, i)
              );
            }
            constructor(...e) {
              super(...e), (this.foreignKeyConfigs = []);
            }
          }
          class pt extends Ve {
            constructor(e, n) {
              n.uniqueName || (n.uniqueName = $l(e, [n.name])),
                super(e, n),
                (this.table = e);
            }
            static {
              this[Y] = 'SQLiteColumn';
            }
          }
          function xs(t, e, n) {
            let r = {},
              i = t.reduce((s, { path: o, field: a }, u) => {
                let c;
                c = J(a, Ve)
                  ? a
                  : J(a, Ee)
                  ? a.decoder
                  : J(a, st)
                  ? a._.sql.decoder
                  : a.sql.decoder;
                let l = s;
                for (let [d, p] of o.entries())
                  if (d < o.length - 1) p in l || (l[p] = {}), (l = l[p]);
                  else {
                    let g = e[u],
                      h = (l[p] = g === null ? null : c.mapFromDriverValue(g));
                    if (n && J(a, Ve) && o.length === 2) {
                      let S = o[0];
                      S in r
                        ? typeof r[S] == 'string' &&
                          r[S] !== a.table[it] &&
                          (r[S] = !1)
                        : (r[S] = h === null && a.table[it]);
                    }
                  }
                return s;
              }, {});
            if (n && Object.keys(r).length > 0)
              for (let [s, o] of Object.entries(r))
                typeof o != 'string' || n[o] || (i[s] = null);
            return i;
          }
          function xn(t, e) {
            return Object.entries(t).reduce((n, [r, i]) => {
              if (typeof r != 'string') return n;
              let s = e ? [...e, r] : [r];
              return (
                J(i, Ve) || J(i, Ee) || J(i, Ee.Aliased) || J(i, st)
                  ? n.push({ path: s, field: i })
                  : J(i, le)
                  ? n.push(...xn(i[le.Symbol.Columns], s))
                  : n.push(...xn(i, s)),
                n
              );
            }, []);
          }
          function Cs(t, e) {
            let n = Object.keys(t),
              r = Object.keys(e);
            if (n.length !== r.length) return !1;
            for (let [i, s] of n.entries()) if (s !== r[i]) return !1;
            return !0;
          }
          function Fl(t, e) {
            let n = Object.entries(e)
              .filter(([, r]) => r !== void 0)
              .map(([r, i]) =>
                J(i, Ee) || J(i, Ve)
                  ? [r, i]
                  : [r, new fn(i, t[le.Symbol.Columns][r])]
              );
            if (n.length === 0) throw Error('No values to set');
            return Object.fromEntries(n);
          }
          function Ds(t) {
            return J(t, st)
              ? t._.alias
              : J(t, Qn)
              ? t[at].name
              : J(t, Ee)
              ? void 0
              : t[le.Symbol.IsAlias]
              ? t[le.Symbol.Name]
              : t[le.Symbol.BaseName];
          }
          function yr(t, e) {
            return {
              name: typeof t == 'string' && t.length > 0 ? t : '',
              config: typeof t == 'object' ? t : e,
            };
          }
          let jl = typeof TextDecoder > 'u' ? null : new TextDecoder();
          var tt = ue(195).Buffer;
          class Nd extends Ft {
            static {
              this[Y] = 'SQLiteBigIntBuilder';
            }
            constructor(e) {
              super(e, 'bigint', 'SQLiteBigInt');
            }
            build(e) {
              return new Sd(e, this.config);
            }
          }
          class Sd extends pt {
            static {
              this[Y] = 'SQLiteBigInt';
            }
            getSQLType() {
              return 'blob';
            }
            mapFromDriverValue(e) {
              return tt !== void 0 && tt.from
                ? BigInt(
                    (tt.isBuffer(e)
                      ? e
                      : e instanceof ArrayBuffer
                      ? tt.from(e)
                      : e.buffer
                      ? tt.from(e.buffer, e.byteOffset, e.byteLength)
                      : tt.from(e)
                    ).toString('utf8')
                  )
                : BigInt(jl.decode(e));
            }
            mapToDriverValue(e) {
              return tt.from(e.toString());
            }
          }
          class _d extends Ft {
            static {
              this[Y] = 'SQLiteBlobJsonBuilder';
            }
            constructor(e) {
              super(e, 'json', 'SQLiteBlobJson');
            }
            build(e) {
              return new Id(e, this.config);
            }
          }
          class Id extends pt {
            static {
              this[Y] = 'SQLiteBlobJson';
            }
            getSQLType() {
              return 'blob';
            }
            mapFromDriverValue(e) {
              return tt !== void 0 && tt.from
                ? JSON.parse(
                    (tt.isBuffer(e)
                      ? e
                      : e instanceof ArrayBuffer
                      ? tt.from(e)
                      : e.buffer
                      ? tt.from(e.buffer, e.byteOffset, e.byteLength)
                      : tt.from(e)
                    ).toString('utf8')
                  )
                : JSON.parse(jl.decode(e));
            }
            mapToDriverValue(e) {
              return tt.from(JSON.stringify(e));
            }
          }
          class Od extends Ft {
            static {
              this[Y] = 'SQLiteBlobBufferBuilder';
            }
            constructor(e) {
              super(e, 'buffer', 'SQLiteBlobBuffer');
            }
            build(e) {
              return new wd(e, this.config);
            }
          }
          class wd extends pt {
            static {
              this[Y] = 'SQLiteBlobBuffer';
            }
            mapFromDriverValue(e) {
              return tt.isBuffer(e) ? e : tt.from(e);
            }
            getSQLType() {
              return 'blob';
            }
          }
          function Ad(t, e) {
            let { name: n, config: r } = yr(t, e);
            return r?.mode === 'json'
              ? new _d(n)
              : r?.mode === 'bigint'
              ? new Nd(n)
              : new Od(n);
          }
          class xd extends Ft {
            static {
              this[Y] = 'SQLiteCustomColumnBuilder';
            }
            constructor(e, n, r) {
              super(e, 'custom', 'SQLiteCustomColumn'),
                (this.config.fieldConfig = n),
                (this.config.customTypeParams = r);
            }
            build(e) {
              return new Cd(e, this.config);
            }
          }
          class Cd extends pt {
            static {
              this[Y] = 'SQLiteCustomColumn';
            }
            constructor(e, n) {
              super(e, n),
                (this.sqlName = n.customTypeParams.dataType(n.fieldConfig)),
                (this.mapTo = n.customTypeParams.toDriver),
                (this.mapFrom = n.customTypeParams.fromDriver);
            }
            getSQLType() {
              return this.sqlName;
            }
            mapFromDriverValue(e) {
              return typeof this.mapFrom == 'function' ? this.mapFrom(e) : e;
            }
            mapToDriverValue(e) {
              return typeof this.mapTo == 'function' ? this.mapTo(e) : e;
            }
          }
          function Dd(t) {
            return (e, n) => {
              let { name: r, config: i } = yr(e, n);
              return new xd(r, i, t);
            };
          }
          class Rs extends Ft {
            static {
              this[Y] = 'SQLiteBaseIntegerBuilder';
            }
            constructor(e, n, r) {
              super(e, n, r), (this.config.autoIncrement = !1);
            }
            primaryKey(e) {
              return (
                e?.autoIncrement && (this.config.autoIncrement = !0),
                (this.config.hasDefault = !0),
                super.primaryKey()
              );
            }
          }
          class Ps extends pt {
            static {
              this[Y] = 'SQLiteBaseInteger';
            }
            getSQLType() {
              return 'integer';
            }
            constructor(...e) {
              super(...e), (this.autoIncrement = this.config.autoIncrement);
            }
          }
          class Rd extends Rs {
            static {
              this[Y] = 'SQLiteIntegerBuilder';
            }
            constructor(e) {
              super(e, 'number', 'SQLiteInteger');
            }
            build(e) {
              return new Pd(e, this.config);
            }
          }
          class Pd extends Ps {
            static {
              this[Y] = 'SQLiteInteger';
            }
          }
          class Ld extends Rs {
            static {
              this[Y] = 'SQLiteTimestampBuilder';
            }
            constructor(e, n) {
              super(e, 'date', 'SQLiteTimestamp'), (this.config.mode = n);
            }
            defaultNow() {
              return this.default(
                D`(cast((julianday('now') - 2440587.5)*86400000 as integer))`
              );
            }
            build(e) {
              return new kd(e, this.config);
            }
          }
          class kd extends Ps {
            static {
              this[Y] = 'SQLiteTimestamp';
            }
            mapFromDriverValue(e) {
              return new Date(this.config.mode === 'timestamp' ? 1e3 * e : e);
            }
            mapToDriverValue(e) {
              let n = e.getTime();
              return this.config.mode === 'timestamp' ? Math.floor(n / 1e3) : n;
            }
            constructor(...e) {
              super(...e), (this.mode = this.config.mode);
            }
          }
          class Md extends Rs {
            static {
              this[Y] = 'SQLiteBooleanBuilder';
            }
            constructor(e, n) {
              super(e, 'boolean', 'SQLiteBoolean'), (this.config.mode = n);
            }
            build(e) {
              return new $d(e, this.config);
            }
          }
          class $d extends Ps {
            static {
              this[Y] = 'SQLiteBoolean';
            }
            mapFromDriverValue(e) {
              return Number(e) === 1;
            }
            mapToDriverValue(e) {
              return e ? 1 : 0;
            }
            constructor(...e) {
              super(...e), (this.mode = this.config.mode);
            }
          }
          function It(t, e) {
            let { name: n, config: r } = yr(t, e);
            return r?.mode === 'timestamp' || r?.mode === 'timestamp_ms'
              ? new Ld(n, r.mode)
              : r?.mode === 'boolean'
              ? new Md(n, r.mode)
              : new Rd(n);
          }
          class Fd extends Ft {
            static {
              this[Y] = 'SQLiteNumericBuilder';
            }
            constructor(e) {
              super(e, 'string', 'SQLiteNumeric');
            }
            build(e) {
              return new jd(e, this.config);
            }
          }
          class jd extends pt {
            static {
              this[Y] = 'SQLiteNumeric';
            }
            mapFromDriverValue(e) {
              return typeof e == 'string' ? e : String(e);
            }
            getSQLType() {
              return 'numeric';
            }
          }
          class Ud extends Ft {
            static {
              this[Y] = 'SQLiteNumericNumberBuilder';
            }
            constructor(e) {
              super(e, 'number', 'SQLiteNumericNumber');
            }
            build(e) {
              return new Bd(e, this.config);
            }
          }
          class Bd extends pt {
            static {
              this[Y] = 'SQLiteNumericNumber';
            }
            mapFromDriverValue(e) {
              return typeof e == 'number' ? e : Number(e);
            }
            getSQLType() {
              return 'numeric';
            }
            constructor(...e) {
              super(...e), (this.mapToDriverValue = String);
            }
          }
          class Vd extends Ft {
            static {
              this[Y] = 'SQLiteNumericBigIntBuilder';
            }
            constructor(e) {
              super(e, 'bigint', 'SQLiteNumericBigInt');
            }
            build(e) {
              return new qd(e, this.config);
            }
          }
          class qd extends pt {
            static {
              this[Y] = 'SQLiteNumericBigInt';
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
          function Qd(t, e) {
            let { name: n, config: r } = yr(t, e),
              i = r?.mode;
            return i === 'number'
              ? new Ud(n)
              : i === 'bigint'
              ? new Vd(n)
              : new Fd(n);
          }
          class Yd extends Ft {
            static {
              this[Y] = 'SQLiteRealBuilder';
            }
            constructor(e) {
              super(e, 'number', 'SQLiteReal');
            }
            build(e) {
              return new Gd(e, this.config);
            }
          }
          class Gd extends pt {
            static {
              this[Y] = 'SQLiteReal';
            }
            getSQLType() {
              return 'real';
            }
          }
          function Ul(t) {
            return new Yd(t ?? '');
          }
          class Kd extends Ft {
            static {
              this[Y] = 'SQLiteTextBuilder';
            }
            constructor(e, n) {
              super(e, 'string', 'SQLiteText'),
                (this.config.enumValues = n.enum),
                (this.config.length = n.length);
            }
            build(e) {
              return new Jd(e, this.config);
            }
          }
          class Jd extends pt {
            static {
              this[Y] = 'SQLiteText';
            }
            constructor(e, n) {
              super(e, n),
                (this.enumValues = this.config.enumValues),
                (this.length = this.config.length);
            }
            getSQLType() {
              return `text${
                this.config.length ? `(${this.config.length})` : ''
              }`;
            }
          }
          class Hd extends Ft {
            static {
              this[Y] = 'SQLiteTextJsonBuilder';
            }
            constructor(e) {
              super(e, 'json', 'SQLiteTextJson');
            }
            build(e) {
              return new zd(e, this.config);
            }
          }
          class zd extends pt {
            static {
              this[Y] = 'SQLiteTextJson';
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
          function ge(t, e = {}) {
            let { name: n, config: r } = yr(t, e);
            return r.mode === 'json' ? new Hd(n) : new Kd(n, r);
          }
          let Ls = Symbol.for('drizzle:SQLiteInlineForeignKeys');
          class Ot extends le {
            static {
              le.Symbol.Columns, (b = le.Symbol.ExtraConfigBuilder);
            }
            static {
              this[Y] = 'SQLiteTable';
            }
            static {
              this.Symbol = Object.assign({}, le.Symbol, {
                InlineForeignKeys: Ls,
              });
            }
            constructor(...e) {
              super(...e), (this[Ls] = []), (this[b] = void 0);
            }
          }
          let Cn = (t, e, n) =>
            (function (r, i, s, o, a = r) {
              let u = new Ot(r, void 0, a),
                c = Object.fromEntries(
                  Object.entries(
                    typeof i == 'function'
                      ? i({
                          blob: Ad,
                          customType: Dd,
                          integer: It,
                          numeric: Qd,
                          real: Ul,
                          text: ge,
                        })
                      : i
                  ).map(([d, p]) => {
                    p.setName(d);
                    let g = p.build(u);
                    return u[Ls].push(...p.buildForeignKeys(g, u)), [d, g];
                  })
                ),
                l = Object.assign(u, c);
              return (
                (l[le.Symbol.Columns] = c),
                (l[le.Symbol.ExtraConfigColumns] = c),
                s && (l[Ot.Symbol.ExtraConfigBuilder] = s),
                l
              );
            })(t, e, n);
          class ks extends Qn {
            static {
              this[Y] = 'SQLiteViewBase';
            }
          }
          class hi {
            static {
              this[Y] = 'SQLiteDialect';
            }
            constructor(e) {
              this.casing = new gd(e?.casing);
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
              let n = [D`with `];
              for (let [r, i] of e.entries())
                n.push(D`${D.identifier(i._.alias)} as (${i._.sql})`),
                  r < e.length - 1 && n.push(D`, `);
              return n.push(D` `), D.join(n);
            }
            buildDeleteQuery({
              table: e,
              where: n,
              returning: r,
              withList: i,
              limit: s,
              orderBy: o,
            }) {
              let a = this.buildWithCTE(i),
                u = r
                  ? D` returning ${this.buildSelection(r, {
                      isSingleTable: !0,
                    })}`
                  : void 0,
                c = n ? D` where ${n}` : void 0,
                l = this.buildOrderBy(o),
                d = this.buildLimit(s);
              return D`${a}delete from ${e}${c}${u}${l}${d}`;
            }
            buildUpdateSet(e, n) {
              let r = e[le.Symbol.Columns],
                i = Object.keys(r).filter(
                  (o) => n[o] !== void 0 || r[o]?.onUpdateFn !== void 0
                ),
                s = i.length;
              return D.join(
                i.flatMap((o, a) => {
                  let u = r[o],
                    c = u.onUpdateFn?.(),
                    l = n[o] ?? (J(c, Ee) ? c : D.param(c, u)),
                    d = D`${D.identifier(
                      this.casing.getColumnCasing(u)
                    )} = ${l}`;
                  return a < s - 1 ? [d, D.raw(', ')] : [d];
                })
              );
            }
            buildUpdateQuery({
              table: e,
              set: n,
              where: r,
              returning: i,
              withList: s,
              joins: o,
              from: a,
              limit: u,
              orderBy: c,
            }) {
              let l = this.buildWithCTE(s),
                d = this.buildUpdateSet(e, n),
                p = a && D.join([D.raw(' from '), this.buildFromTable(a)]),
                g = this.buildJoins(o),
                h = i
                  ? D` returning ${this.buildSelection(i, {
                      isSingleTable: !0,
                    })}`
                  : void 0,
                S = r ? D` where ${r}` : void 0,
                I = this.buildOrderBy(c),
                w = this.buildLimit(u);
              return D`${l}update ${e} set ${d}${p}${g}${S}${h}${I}${w}`;
            }
            buildSelection(e, { isSingleTable: n = !1 } = {}) {
              let r = e.length,
                i = e.flatMap(({ field: s }, o) => {
                  let a = [];
                  if (J(s, Ee.Aliased) && s.isSelectionField)
                    a.push(D.identifier(s.fieldAlias));
                  else if (J(s, Ee.Aliased) || J(s, Ee)) {
                    let u = J(s, Ee.Aliased) ? s.sql : s;
                    n
                      ? a.push(
                          new Ee(
                            u.queryChunks.map((c) =>
                              J(c, Ve)
                                ? D.identifier(this.casing.getColumnCasing(c))
                                : c
                            )
                          )
                        )
                      : a.push(u),
                      J(s, Ee.Aliased) &&
                        a.push(D` as ${D.identifier(s.fieldAlias)}`);
                  } else if (J(s, Ve)) {
                    let u = s.table[le.Symbol.Name];
                    s.columnType === 'SQLiteNumericBigInt'
                      ? n
                        ? a.push(
                            D`cast(${D.identifier(
                              this.casing.getColumnCasing(s)
                            )} as text)`
                          )
                        : a.push(
                            D`cast(${D.identifier(u)}.${D.identifier(
                              this.casing.getColumnCasing(s)
                            )} as text)`
                          )
                      : n
                      ? a.push(D.identifier(this.casing.getColumnCasing(s)))
                      : a.push(
                          D`${D.identifier(u)}.${D.identifier(
                            this.casing.getColumnCasing(s)
                          )}`
                        );
                  } else if (J(s, st)) {
                    let u = Object.entries(s._.selectedFields);
                    if (u.length === 1) {
                      let c = u[0][1],
                        l = J(c, Ee)
                          ? c.decoder
                          : J(c, Ve)
                          ? {
                              mapFromDriverValue: (d) =>
                                c.mapFromDriverValue(d),
                            }
                          : c.sql.decoder;
                      l && (s._.sql.decoder = l);
                    }
                    a.push(s);
                  }
                  return o < r - 1 && a.push(D`, `), a;
                });
              return D.join(i);
            }
            buildJoins(e) {
              if (!e || e.length === 0) return;
              let n = [];
              if (e)
                for (let [r, i] of e.entries()) {
                  r === 0 && n.push(D` `);
                  let s = i.table,
                    o = i.on ? D` on ${i.on}` : void 0;
                  if (J(s, Ot)) {
                    let a = s[Ot.Symbol.Name],
                      u = s[Ot.Symbol.Schema],
                      c = s[Ot.Symbol.OriginalName],
                      l = a === c ? void 0 : i.alias;
                    n.push(
                      D`${D.raw(i.joinType)} join ${
                        u ? D`${D.identifier(u)}.` : void 0
                      }${D.identifier(c)}${l && D` ${D.identifier(l)}`}${o}`
                    );
                  } else n.push(D`${D.raw(i.joinType)} join ${s}${o}`);
                  r < e.length - 1 && n.push(D` `);
                }
              return D.join(n);
            }
            buildLimit(e) {
              return typeof e == 'object' || (typeof e == 'number' && e >= 0)
                ? D` limit ${e}`
                : void 0;
            }
            buildOrderBy(e) {
              let n = [];
              if (e)
                for (let [r, i] of e.entries())
                  n.push(i), r < e.length - 1 && n.push(D`, `);
              return n.length > 0 ? D` order by ${D.join(n)}` : void 0;
            }
            buildFromTable(e) {
              return J(e, le) && e[le.Symbol.IsAlias]
                ? D`${D`${D.identifier(e[le.Symbol.Schema] ?? '')}.`.if(
                    e[le.Symbol.Schema]
                  )}${D.identifier(e[le.Symbol.OriginalName])} ${D.identifier(
                    e[le.Symbol.Name]
                  )}`
                : e;
            }
            buildSelectQuery({
              withList: e,
              fields: n,
              fieldsFlat: r,
              where: i,
              having: s,
              table: o,
              joins: a,
              orderBy: u,
              groupBy: c,
              limit: l,
              offset: d,
              distinct: p,
              setOperators: g,
            }) {
              let h = r ?? xn(n);
              for (let G of h) {
                var S;
                if (
                  J(G.field, Ve) &&
                  G.field.table[it] !==
                    (J(o, st)
                      ? o._.alias
                      : J(o, ks)
                      ? o[at].name
                      : J(o, Ee)
                      ? void 0
                      : o[it]) &&
                  ((S = G.field.table),
                  !a?.some(
                    ({ alias: se }) =>
                      se ===
                      (S[le.Symbol.IsAlias] ? S[it] : S[le.Symbol.BaseName])
                  ))
                ) {
                  let se = G.field.table[it];
                  throw Error(
                    `Your "${G.path.join(
                      '->'
                    )}" field references a column "${se}"."${
                      G.field.name
                    }", but the table "${se}" is not part of the query! Did you forget to join it?`
                  );
                }
              }
              let I = !a || a.length === 0,
                w = this.buildWithCTE(e),
                R = p ? D` distinct` : void 0,
                A = this.buildSelection(h, { isSingleTable: I }),
                O = this.buildFromTable(o),
                P = this.buildJoins(a),
                B = i ? D` where ${i}` : void 0,
                k = s ? D` having ${s}` : void 0,
                Z = [];
              if (c)
                for (let [G, se] of c.entries())
                  Z.push(se), G < c.length - 1 && Z.push(D`, `);
              let z = Z.length > 0 ? D` group by ${D.join(Z)}` : void 0,
                H = this.buildOrderBy(u),
                ae = this.buildLimit(l),
                oe = d ? D` offset ${d}` : void 0,
                de = D`${w}select${R} ${A} from ${O}${P}${B}${z}${k}${H}${ae}${oe}`;
              return g.length > 0 ? this.buildSetOperations(de, g) : de;
            }
            buildSetOperations(e, n) {
              let [r, ...i] = n;
              if (!r)
                throw Error('Cannot pass undefined values to any set operator');
              return i.length === 0
                ? this.buildSetOperationQuery({ leftSelect: e, setOperator: r })
                : this.buildSetOperations(
                    this.buildSetOperationQuery({
                      leftSelect: e,
                      setOperator: r,
                    }),
                    i
                  );
            }
            buildSetOperationQuery({
              leftSelect: e,
              setOperator: {
                type: n,
                isAll: r,
                rightSelect: i,
                limit: s,
                orderBy: o,
                offset: a,
              },
            }) {
              let u,
                c = D`${e.getSQL()} `,
                l = D`${i.getSQL()}`;
              if (o && o.length > 0) {
                let h = [];
                for (let S of o)
                  if (J(S, pt)) h.push(D.identifier(S.name));
                  else if (J(S, Ee)) {
                    for (let I = 0; I < S.queryChunks.length; I++) {
                      let w = S.queryChunks[I];
                      J(w, pt) &&
                        (S.queryChunks[I] = D.identifier(
                          this.casing.getColumnCasing(w)
                        ));
                    }
                    h.push(D`${S}`);
                  } else h.push(D`${S}`);
                u = D` order by ${D.join(h, D`, `)}`;
              }
              let d =
                  typeof s == 'object' || (typeof s == 'number' && s >= 0)
                    ? D` limit ${s}`
                    : void 0,
                p = D.raw(`${n} ${r ? 'all ' : ''}`),
                g = a ? D` offset ${a}` : void 0;
              return D`${c}${p}${l}${u}${d}${g}`;
            }
            buildInsertQuery({
              table: e,
              values: n,
              onConflict: r,
              returning: i,
              withList: s,
              select: o,
            }) {
              let a = [],
                u = Object.entries(e[le.Symbol.Columns]).filter(
                  ([h, S]) => !S.shouldDisableInsert()
                ),
                c = u.map(([, h]) =>
                  D.identifier(this.casing.getColumnCasing(h))
                );
              if (o) J(n, Ee) ? a.push(n) : a.push(n.getSQL());
              else
                for (let [h, S] of (a.push(D.raw('values ')), n.entries())) {
                  let I = [];
                  for (let [w, R] of u) {
                    let A = S[w];
                    if (A === void 0 || (J(A, fn) && A.value === void 0)) {
                      let O;
                      if (R.default !== null && R.default !== void 0)
                        O = J(R.default, Ee)
                          ? R.default
                          : D.param(R.default, R);
                      else if (R.defaultFn !== void 0) {
                        let P = R.defaultFn();
                        O = J(P, Ee) ? P : D.param(P, R);
                      } else if (R.default || R.onUpdateFn === void 0)
                        O = D`null`;
                      else {
                        let P = R.onUpdateFn();
                        O = J(P, Ee) ? P : D.param(P, R);
                      }
                      I.push(O);
                    } else I.push(A);
                  }
                  a.push(I), h < n.length - 1 && a.push(D`, `);
                }
              let l = this.buildWithCTE(s),
                d = D.join(a),
                p = i
                  ? D` returning ${this.buildSelection(i, {
                      isSingleTable: !0,
                    })}`
                  : void 0,
                g = r?.length ? D.join(r) : void 0;
              return D`${l}insert into ${e} ${c} ${d}${g}${p}`;
            }
            sqlToQuery(e, n) {
              return e.toQuery({
                casing: this.casing,
                escapeName: this.escapeName,
                escapeParam: this.escapeParam,
                escapeString: this.escapeString,
                invokeSource: n,
              });
            }
            buildRelationalQuery({
              fullSchema: e,
              schema: n,
              tableNamesMap: r,
              table: i,
              tableConfig: s,
              queryConfig: o,
              tableAlias: a,
              nestedQueryRelation: u,
              joinOn: c,
            }) {
              let l,
                d = [],
                p,
                g,
                h = [],
                S,
                I = [];
              if (o === !0)
                d = Object.entries(s.columns).map(([w, R]) => ({
                  dbKey: R.name,
                  tsKey: w,
                  field: Zt(R, a),
                  relationTableTsKey: void 0,
                  isJson: !1,
                  selection: [],
                }));
              else {
                let w = Object.fromEntries(
                  Object.entries(s.columns).map(([B, k]) => [B, Zt(k, a)])
                );
                if (o.where) {
                  let B =
                    typeof o.where == 'function'
                      ? o.where(w, {
                          and: Os,
                          between: rd,
                          eq: Yn,
                          exists: td,
                          gt: Kc,
                          gte: Jc,
                          ilike: od,
                          inArray: Wc,
                          isNull: Zc,
                          isNotNull: ed,
                          like: sd,
                          lt: Hc,
                          lte: zc,
                          ne: Qc,
                          not: Gc,
                          notBetween: id,
                          notExists: nd,
                          notLike: ad,
                          notIlike: ld,
                          notInArray: Xc,
                          or: Yc,
                          sql: D,
                        })
                      : o.where;
                  S = B && fi(B, a);
                }
                let R = [],
                  A = [];
                if (o.columns) {
                  let B = !1;
                  for (let [k, Z] of Object.entries(o.columns))
                    Z !== void 0 &&
                      k in s.columns &&
                      (B || Z !== !0 || (B = !0), A.push(k));
                  A.length > 0 &&
                    (A = B
                      ? A.filter((k) => o.columns?.[k] === !0)
                      : Object.keys(s.columns).filter((k) => !A.includes(k)));
                } else A = Object.keys(s.columns);
                for (let B of A) {
                  let k = s.columns[B];
                  R.push({ tsKey: B, value: k });
                }
                let O = [];
                if (
                  (o.with &&
                    (O = Object.entries(o.with)
                      .filter((B) => !!B[1])
                      .map(([B, k]) => ({
                        tsKey: B,
                        queryConfig: k,
                        relation: s.relations[B],
                      }))),
                  o.extras)
                )
                  for (let [B, k] of Object.entries(
                    typeof o.extras == 'function'
                      ? o.extras(w, { sql: D })
                      : o.extras
                  ))
                    R.push({ tsKey: B, value: Ml(k, a) });
                for (let { tsKey: B, value: k } of R)
                  d.push({
                    dbKey: J(k, Ee.Aliased) ? k.fieldAlias : s.columns[B].name,
                    tsKey: B,
                    field: J(k, Ve) ? Zt(k, a) : k,
                    relationTableTsKey: void 0,
                    isJson: !1,
                    selection: [],
                  });
                let P =
                  typeof o.orderBy == 'function'
                    ? o.orderBy(w, { sql: D, asc: ud, desc: cd })
                    : o.orderBy ?? [];
                for (let {
                  tsKey: B,
                  queryConfig: k,
                  relation: Z,
                } of (Array.isArray(P) || (P = [P]),
                (h = P.map((z) => (J(z, Ve) ? Zt(z, a) : fi(z, a)))),
                (p = o.limit),
                (g = o.offset),
                O)) {
                  let z = (function (se, F, V) {
                      if (J(V, An) && V.config)
                        return {
                          fields: V.config.fields,
                          references: V.config.references,
                        };
                      let q = F[vr(V.referencedTable)];
                      if (!q)
                        throw Error(
                          `Table "${
                            V.referencedTable[le.Symbol.Name]
                          }" not found in schema`
                        );
                      let X = se[q];
                      if (!X) throw Error(`Table "${q}" not found in schema`);
                      let ve = V.sourceTable,
                        Ne = F[vr(ve)];
                      if (!Ne)
                        throw Error(
                          `Table "${ve[le.Symbol.Name]}" not found in schema`
                        );
                      let Re = [];
                      for (let Ke of Object.values(X.relations))
                        ((V.relationName &&
                          V !== Ke &&
                          Ke.relationName === V.relationName) ||
                          (!V.relationName &&
                            Ke.referencedTable === V.sourceTable)) &&
                          Re.push(Ke);
                      if (Re.length > 1)
                        throw V.relationName
                          ? Error(
                              `There are multiple relations with name "${V.relationName}" in table "${q}"`
                            )
                          : Error(
                              `There are multiple relations between "${q}" and "${
                                V.sourceTable[le.Symbol.Name]
                              }". Please specify relation name`
                            );
                      if (Re[0] && J(Re[0], An) && Re[0].config)
                        return {
                          fields: Re[0].config.references,
                          references: Re[0].config.fields,
                        };
                      throw Error(
                        `There is not enough information to infer relation "${Ne}.${V.fieldName}"`
                      );
                    })(n, r, Z),
                    H = r[vr(Z.referencedTable)],
                    ae = `${a}_${B}`,
                    oe = Os(
                      ...z.fields.map((se, F) =>
                        Yn(Zt(z.references[F], ae), Zt(se, a))
                      )
                    ),
                    de = this.buildRelationalQuery({
                      fullSchema: e,
                      schema: n,
                      tableNamesMap: r,
                      table: e[H],
                      tableConfig: n[H],
                      queryConfig: J(Z, An)
                        ? k === !0
                          ? { limit: 1 }
                          : { ...k, limit: 1 }
                        : k,
                      tableAlias: ae,
                      joinOn: oe,
                      nestedQueryRelation: Z,
                    }),
                    G = D`(${de.sql})`.as(B);
                  d.push({
                    dbKey: B,
                    tsKey: B,
                    field: G,
                    relationTableTsKey: H,
                    isJson: !0,
                    selection: de.selection,
                  });
                }
              }
              if (d.length === 0)
                throw new As({
                  message: `No fields selected for table "${s.tsName}" ("${a}"). You need to have at least one item in "columns", "with" or "extras". If you need to select all columns, omit the "columns" key or set it to undefined.`,
                });
              if (((S = Os(c, S)), u)) {
                let w = D`json_array(${D.join(
                  d.map(({ field: A }) =>
                    J(A, pt)
                      ? D.identifier(this.casing.getColumnCasing(A))
                      : J(A, Ee.Aliased)
                      ? A.sql
                      : A
                  ),
                  D`, `
                )})`;
                J(u, ci) &&
                  (w = D`coalesce(json_group_array(${w}), json_array())`);
                let R = [
                  {
                    dbKey: 'data',
                    tsKey: 'data',
                    field: w.as('data'),
                    isJson: !0,
                    relationTableTsKey: s.tsName,
                    selection: d,
                  },
                ];
                p !== void 0 || g !== void 0 || h.length > 0
                  ? ((l = this.buildSelectQuery({
                      table: pi(i, a),
                      fields: {},
                      fieldsFlat: [{ path: [], field: D.raw('*') }],
                      where: S,
                      limit: p,
                      offset: g,
                      orderBy: h,
                      setOperators: [],
                    })),
                    (S = void 0),
                    (p = void 0),
                    (g = void 0),
                    (h = void 0))
                  : (l = pi(i, a)),
                  (l = this.buildSelectQuery({
                    table: J(l, Ot) ? l : new st(l, {}, a),
                    fields: {},
                    fieldsFlat: R.map(({ field: A }) => ({
                      path: [],
                      field: J(A, Ve) ? Zt(A, a) : A,
                    })),
                    joins: I,
                    where: S,
                    limit: p,
                    offset: g,
                    orderBy: h,
                    setOperators: [],
                  }));
              } else
                l = this.buildSelectQuery({
                  table: pi(i, a),
                  fields: {},
                  fieldsFlat: d.map(({ field: w }) => ({
                    path: [],
                    field: J(w, Ve) ? Zt(w, a) : w,
                  })),
                  joins: I,
                  where: S,
                  limit: p,
                  offset: g,
                  orderBy: h,
                  setOperators: [],
                });
              return { tableTsKey: s.tsName, sql: l, selection: d };
            }
          }
          class Wd extends hi {
            static {
              this[Y] = 'SQLiteSyncDialect';
            }
            migrate(e, n, r) {
              let i =
                  r === void 0 || typeof r == 'string'
                    ? '__drizzle_migrations'
                    : r.migrationsTable ?? '__drizzle_migrations',
                s = D`
			CREATE TABLE IF NOT EXISTS ${D.identifier(i)} (
				id SERIAL PRIMARY KEY,
				hash text NOT NULL,
				created_at numeric
			)
		`;
              n.run(s);
              let o =
                n.values(
                  D`SELECT id, hash, created_at FROM ${D.identifier(
                    i
                  )} ORDER BY created_at DESC LIMIT 1`
                )[0] ?? void 0;
              n.run(D`BEGIN`);
              try {
                for (let a of e)
                  if (!o || Number(o[2]) < a.folderMillis) {
                    for (let u of a.sql) n.run(D.raw(u));
                    n.run(
                      D`INSERT INTO ${D.identifier(
                        i
                      )} ("hash", "created_at") VALUES(${a.hash}, ${
                        a.folderMillis
                      })`
                    );
                  }
                n.run(D`COMMIT`);
              } catch (a) {
                throw (n.run(D`ROLLBACK`), a);
              }
            }
          }
          class Xd extends hi {
            static {
              this[Y] = 'SQLiteAsyncDialect';
            }
            async migrate(e, n, r) {
              let i =
                  r === void 0 || typeof r == 'string'
                    ? '__drizzle_migrations'
                    : r.migrationsTable ?? '__drizzle_migrations',
                s = D`
			CREATE TABLE IF NOT EXISTS ${D.identifier(i)} (
				id SERIAL PRIMARY KEY,
				hash text NOT NULL,
				created_at numeric
			)
		`;
              await n.run(s);
              let o =
                (
                  await n.values(
                    D`SELECT id, hash, created_at FROM ${D.identifier(
                      i
                    )} ORDER BY created_at DESC LIMIT 1`
                  )
                )[0] ?? void 0;
              await n.transaction(async (a) => {
                for (let u of e)
                  if (!o || Number(o[2]) < u.folderMillis) {
                    for (let c of u.sql) await a.run(D.raw(c));
                    await a.run(
                      D`INSERT INTO ${D.identifier(
                        i
                      )} ("hash", "created_at") VALUES(${u.hash}, ${
                        u.folderMillis
                      })`
                    );
                  }
              });
            }
          }
          class Zd {
            static {
              this[Y] = 'TypedQueryBuilder';
            }
            getSelectedFields() {
              return this._.selectedFields;
            }
          }
          class Dn {
            static {
              E = Symbol.toStringTag;
            }
            static {
              this[Y] = 'QueryPromise';
            }
            catch(e) {
              return this.then(void 0, e);
            }
            finally(e) {
              return this.then(
                (n) => (e?.(), n),
                (n) => {
                  throw (e?.(), n);
                }
              );
            }
            then(e, n) {
              return this.execute().then(e, n);
            }
            constructor() {
              this[E] = 'QueryPromise';
            }
          }
          function Rn(t) {
            return J(t, Ot)
              ? [`${t[le.Symbol.BaseName]}`]
              : J(t, st)
              ? t._.usedTables ?? []
              : J(t, Ee)
              ? t.usedTables ?? []
              : [];
          }
          class mn {
            static {
              this[Y] = 'SQLiteSelectBuilder';
            }
            constructor(e) {
              (this.fields = e.fields),
                (this.session = e.session),
                (this.dialect = e.dialect),
                (this.withList = e.withList),
                (this.distinct = e.distinct);
            }
            from(e) {
              let n,
                r = !!this.fields;
              return (
                (n = this.fields
                  ? this.fields
                  : J(e, st)
                  ? Object.fromEntries(
                      Object.keys(e._.selectedFields).map((i) => [i, e[i]])
                    )
                  : J(e, ks)
                  ? e[at].selectedFields
                  : J(e, Ee)
                  ? {}
                  : e[le.Symbol.Columns]),
                new Bl({
                  table: e,
                  fields: n,
                  isPartialSelect: r,
                  session: this.session,
                  dialect: this.dialect,
                  withList: this.withList,
                  distinct: this.distinct,
                })
              );
            }
          }
          class ep extends Zd {
            static {
              this[Y] = 'SQLiteSelectQueryBuilder';
            }
            constructor({
              table: e,
              fields: n,
              isPartialSelect: r,
              session: i,
              dialect: s,
              withList: o,
              distinct: a,
            }) {
              for (let u of (super(),
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
                withList: o,
                table: e,
                fields: { ...n },
                distinct: a,
                setOperators: [],
              }),
              (this.isPartialSelect = r),
              (this.session = i),
              (this.dialect = s),
              (this._ = { selectedFields: n, config: this.config }),
              (this.tableName = Ds(e)),
              (this.joinsNotNullableMap =
                typeof this.tableName == 'string'
                  ? { [this.tableName]: !0 }
                  : {}),
              Rn(e)))
                this.usedTables.add(u);
            }
            getUsedTables() {
              return [...this.usedTables];
            }
            createJoin(e) {
              return (n, r) => {
                let i = this.tableName,
                  s = Ds(n);
                for (let o of Rn(n)) this.usedTables.add(o);
                if (
                  typeof s == 'string' &&
                  this.config.joins?.some((o) => o.alias === s)
                )
                  throw Error(`Alias "${s}" is already used in this query`);
                if (
                  !this.isPartialSelect &&
                  (Object.keys(this.joinsNotNullableMap).length === 1 &&
                    typeof i == 'string' &&
                    (this.config.fields = { [i]: this.config.fields }),
                  typeof s == 'string' && !J(n, Ee))
                ) {
                  let o = J(n, st)
                    ? n._.selectedFields
                    : J(n, Qn)
                    ? n[at].selectedFields
                    : n[le.Symbol.Columns];
                  this.config.fields[s] = o;
                }
                if (
                  (typeof r == 'function' &&
                    (r = r(
                      new Proxy(
                        this.config.fields,
                        new ot({
                          sqlAliasedBehavior: 'sql',
                          sqlBehavior: 'sql',
                        })
                      )
                    )),
                  this.config.joins || (this.config.joins = []),
                  this.config.joins.push({
                    on: r,
                    table: n,
                    joinType: e,
                    alias: s,
                  }),
                  typeof s == 'string')
                )
                  switch (e) {
                    case 'left':
                      this.joinsNotNullableMap[s] = !1;
                      break;
                    case 'right':
                      (this.joinsNotNullableMap = Object.fromEntries(
                        Object.entries(this.joinsNotNullableMap).map(([o]) => [
                          o,
                          !1,
                        ])
                      )),
                        (this.joinsNotNullableMap[s] = !0);
                      break;
                    case 'cross':
                    case 'inner':
                      this.joinsNotNullableMap[s] = !0;
                      break;
                    case 'full':
                      (this.joinsNotNullableMap = Object.fromEntries(
                        Object.entries(this.joinsNotNullableMap).map(([o]) => [
                          o,
                          !1,
                        ])
                      )),
                        (this.joinsNotNullableMap[s] = !1);
                  }
                return this;
              };
            }
            createSetOperator(e, n) {
              return (r) => {
                let i = typeof r == 'function' ? r(tp()) : r;
                if (!Cs(this.getSelectedFields(), i.getSelectedFields()))
                  throw Error(
                    'Set operator error (union / intersect / except): selected fields are not the same or are in a different order'
                  );
                return (
                  this.config.setOperators.push({
                    type: e,
                    isAll: n,
                    rightSelect: i,
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
                typeof e == 'function' &&
                  (e = e(
                    new Proxy(
                      this.config.fields,
                      new ot({ sqlAliasedBehavior: 'sql', sqlBehavior: 'sql' })
                    )
                  )),
                (this.config.where = e),
                this
              );
            }
            having(e) {
              return (
                typeof e == 'function' &&
                  (e = e(
                    new Proxy(
                      this.config.fields,
                      new ot({ sqlAliasedBehavior: 'sql', sqlBehavior: 'sql' })
                    )
                  )),
                (this.config.having = e),
                this
              );
            }
            groupBy(...e) {
              if (typeof e[0] == 'function') {
                let n = e[0](
                  new Proxy(
                    this.config.fields,
                    new ot({ sqlAliasedBehavior: 'alias', sqlBehavior: 'sql' })
                  )
                );
                this.config.groupBy = Array.isArray(n) ? n : [n];
              } else this.config.groupBy = e;
              return this;
            }
            orderBy(...e) {
              if (typeof e[0] == 'function') {
                let n = e[0](
                    new Proxy(
                      this.config.fields,
                      new ot({
                        sqlAliasedBehavior: 'alias',
                        sqlBehavior: 'sql',
                      })
                    )
                  ),
                  r = Array.isArray(n) ? n : [n];
                this.config.setOperators.length > 0
                  ? (this.config.setOperators.at(-1).orderBy = r)
                  : (this.config.orderBy = r);
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
              let { typings: e, ...n } = this.dialect.sqlToQuery(this.getSQL());
              return n;
            }
            as(e) {
              let n = [];
              if ((n.push(...Rn(this.config.table)), this.config.joins))
                for (let r of this.config.joins) n.push(...Rn(r.table));
              return new Proxy(
                new st(this.getSQL(), this.config.fields, e, !1, [
                  ...new Set(n),
                ]),
                new ot({
                  alias: e,
                  sqlAliasedBehavior: 'alias',
                  sqlBehavior: 'error',
                })
              );
            }
            getSelectedFields() {
              return new Proxy(
                this.config.fields,
                new ot({
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
          class Bl extends ep {
            static {
              this[Y] = 'SQLiteSelect';
            }
            _prepare(e = !0) {
              if (!this.session)
                throw Error(
                  'Cannot execute a query on a query builder. Please use a database instance instead.'
                );
              let n = xn(this.config.fields),
                r = this.session[e ? 'prepareOneTimeQuery' : 'prepareQuery'](
                  this.dialect.sqlToQuery(this.getSQL()),
                  n,
                  'all',
                  !0,
                  void 0,
                  { type: 'select', tables: [...this.usedTables] },
                  this.cacheConfig
                );
              return (r.joinsNotNullableMap = this.joinsNotNullableMap), r;
            }
            $withCache(e) {
              return (
                (this.cacheConfig =
                  e === void 0
                    ? { config: {}, enable: !0, autoInvalidate: !0 }
                    : e === !1
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
                (this.run = (n) => this._prepare().run(n)),
                (this.all = (n) => this._prepare().all(n)),
                (this.get = (n) => this._prepare().get(n)),
                (this.values = (n) => this._prepare().values(n));
            }
          }
          function mi(t, e) {
            return (n, r, ...i) => {
              let s = [r, ...i].map((o) => ({
                type: t,
                isAll: e,
                rightSelect: o,
              }));
              for (let o of s)
                if (
                  !Cs(n.getSelectedFields(), o.rightSelect.getSelectedFields())
                )
                  throw Error(
                    'Set operator error (union / intersect / except): selected fields are not the same or are in a different order'
                  );
              return n.addSetOperators(s);
            };
          }
          (function (t, e) {
            for (let n of e)
              for (let r of Object.getOwnPropertyNames(n.prototype))
                r !== 'constructor' &&
                  Object.defineProperty(
                    t.prototype,
                    r,
                    Object.getOwnPropertyDescriptor(n.prototype, r) ||
                      Object.create(null)
                  );
          })(Bl, [Dn]);
          let tp = () => ({
              union: np,
              unionAll: rp,
              intersect: ip,
              except: sp,
            }),
            np = mi('union', !1),
            rp = mi('union', !0),
            ip = mi('intersect', !1),
            sp = mi('except', !1);
          class Vl {
            static {
              this[Y] = 'SQLiteQueryBuilder';
            }
            constructor(e) {
              (this.$with = (n, r) => {
                let i = this;
                return {
                  as: (s) => (
                    typeof s == 'function' && (s = s(i)),
                    new Proxy(
                      new Dl(
                        s.getSQL(),
                        r ??
                          ('getSelectedFields' in s
                            ? s.getSelectedFields() ?? {}
                            : {}),
                        n,
                        !0
                      ),
                      new ot({
                        alias: n,
                        sqlAliasedBehavior: 'alias',
                        sqlBehavior: 'error',
                      })
                    )
                  ),
                };
              }),
                (this.dialect = J(e, hi) ? e : void 0),
                (this.dialectConfig = J(e, hi) ? void 0 : e);
            }
            with(...e) {
              let n = this;
              return {
                select: function (r) {
                  return new mn({
                    fields: r ?? void 0,
                    session: void 0,
                    dialect: n.getDialect(),
                    withList: e,
                  });
                },
                selectDistinct: function (r) {
                  return new mn({
                    fields: r ?? void 0,
                    session: void 0,
                    dialect: n.getDialect(),
                    withList: e,
                    distinct: !0,
                  });
                },
              };
            }
            select(e) {
              return new mn({
                fields: e ?? void 0,
                session: void 0,
                dialect: this.getDialect(),
              });
            }
            selectDistinct(e) {
              return new mn({
                fields: e ?? void 0,
                session: void 0,
                dialect: this.getDialect(),
                distinct: !0,
              });
            }
            getDialect() {
              return (
                this.dialect || (this.dialect = new Wd(this.dialectConfig)),
                this.dialect
              );
            }
          }
          class ql {
            constructor(e, n, r, i) {
              (this.table = e),
                (this.session = n),
                (this.dialect = r),
                (this.withList = i);
            }
            static {
              this[Y] = 'SQLiteUpdateBuilder';
            }
            set(e) {
              return new ap(
                this.table,
                Fl(this.table, e),
                this.session,
                this.dialect,
                this.withList
              );
            }
          }
          class ap extends Dn {
            constructor(e, n, r, i, s) {
              super(),
                (this.leftJoin = this.createJoin('left')),
                (this.rightJoin = this.createJoin('right')),
                (this.innerJoin = this.createJoin('inner')),
                (this.fullJoin = this.createJoin('full')),
                (this.run = (o) => this._prepare().run(o)),
                (this.all = (o) => this._prepare().all(o)),
                (this.get = (o) => this._prepare().get(o)),
                (this.values = (o) => this._prepare().values(o)),
                (this.session = r),
                (this.dialect = i),
                (this.config = { set: n, table: e, withList: s, joins: [] });
            }
            static {
              this[Y] = 'SQLiteUpdate';
            }
            from(e) {
              return (this.config.from = e), this;
            }
            createJoin(e) {
              return (n, r) => {
                let i = Ds(n);
                if (
                  typeof i == 'string' &&
                  this.config.joins.some((s) => s.alias === i)
                )
                  throw Error(`Alias "${i}" is already used in this query`);
                if (typeof r == 'function') {
                  let s = this.config.from
                    ? J(n, Ot)
                      ? n[le.Symbol.Columns]
                      : J(n, st)
                      ? n._.selectedFields
                      : J(n, ks)
                      ? n[at].selectedFields
                      : void 0
                    : void 0;
                  r = r(
                    new Proxy(
                      this.config.table[le.Symbol.Columns],
                      new ot({ sqlAliasedBehavior: 'sql', sqlBehavior: 'sql' })
                    ),
                    s &&
                      new Proxy(
                        s,
                        new ot({
                          sqlAliasedBehavior: 'sql',
                          sqlBehavior: 'sql',
                        })
                      )
                  );
                }
                return (
                  this.config.joins.push({
                    on: r,
                    table: n,
                    joinType: e,
                    alias: i,
                  }),
                  this
                );
              };
            }
            where(e) {
              return (this.config.where = e), this;
            }
            orderBy(...e) {
              if (typeof e[0] == 'function') {
                let n = e[0](
                    new Proxy(
                      this.config.table[le.Symbol.Columns],
                      new ot({
                        sqlAliasedBehavior: 'alias',
                        sqlBehavior: 'sql',
                      })
                    )
                  ),
                  r = Array.isArray(n) ? n : [n];
                this.config.orderBy = r;
              } else this.config.orderBy = e;
              return this;
            }
            limit(e) {
              return (this.config.limit = e), this;
            }
            returning(e = this.config.table[Ot.Symbol.Columns]) {
              return (this.config.returning = xn(e)), this;
            }
            getSQL() {
              return this.dialect.buildUpdateQuery(this.config);
            }
            toSQL() {
              let { typings: e, ...n } = this.dialect.sqlToQuery(this.getSQL());
              return n;
            }
            _prepare(e = !0) {
              return this.session[e ? 'prepareOneTimeQuery' : 'prepareQuery'](
                this.dialect.sqlToQuery(this.getSQL()),
                this.config.returning,
                this.config.returning ? 'all' : 'run',
                !0,
                void 0,
                { type: 'insert', tables: Rn(this.config.table) }
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
          class Ql {
            constructor(e, n, r, i) {
              (this.table = e),
                (this.session = n),
                (this.dialect = r),
                (this.withList = i);
            }
            static {
              this[Y] = 'SQLiteInsertBuilder';
            }
            values(e) {
              if ((e = Array.isArray(e) ? e : [e]).length === 0)
                throw Error('values() must be called with at least one value');
              let n = e.map((r) => {
                let i = {},
                  s = this.table[le.Symbol.Columns];
                for (let o of Object.keys(r)) {
                  let a = r[o];
                  i[o] = J(a, Ee) ? a : new fn(a, s[o]);
                }
                return i;
              });
              return new Yl(
                this.table,
                n,
                this.session,
                this.dialect,
                this.withList
              );
            }
            select(e) {
              let n = typeof e == 'function' ? e(new Vl()) : e;
              if (!J(n, Ee) && !Cs(this.table[bl], n._.selectedFields))
                throw Error(
                  'Insert select error: selected fields are not the same or are in a different order compared to the table definition'
                );
              return new Yl(
                this.table,
                n,
                this.session,
                this.dialect,
                this.withList,
                !0
              );
            }
          }
          class Yl extends Dn {
            constructor(e, n, r, i, s, o) {
              super(),
                (this.run = (a) => this._prepare().run(a)),
                (this.all = (a) => this._prepare().all(a)),
                (this.get = (a) => this._prepare().get(a)),
                (this.values = (a) => this._prepare().values(a)),
                (this.session = r),
                (this.dialect = i),
                (this.config = { table: e, values: n, withList: s, select: o });
            }
            static {
              this[Y] = 'SQLiteInsert';
            }
            returning(e = this.config.table[Ot.Symbol.Columns]) {
              return (this.config.returning = xn(e)), this;
            }
            onConflictDoNothing(e = {}) {
              if (
                (this.config.onConflict || (this.config.onConflict = []),
                e.target === void 0)
              )
                this.config.onConflict.push(D` on conflict do nothing`);
              else {
                let n = Array.isArray(e.target)
                    ? D`${e.target}`
                    : D`${[e.target]}`,
                  r = e.where ? D` where ${e.where}` : D``;
                this.config.onConflict.push(
                  D` on conflict ${n} do nothing${r}`
                );
              }
              return this;
            }
            onConflictDoUpdate(e) {
              if (e.where && (e.targetWhere || e.setWhere))
                throw Error(
                  'You cannot use both "where" and "targetWhere"/"setWhere" at the same time - "where" is deprecated, use "targetWhere" or "setWhere" instead.'
                );
              this.config.onConflict || (this.config.onConflict = []);
              let n = e.where ? D` where ${e.where}` : void 0,
                r = e.targetWhere ? D` where ${e.targetWhere}` : void 0,
                i = e.setWhere ? D` where ${e.setWhere}` : void 0,
                s = Array.isArray(e.target) ? D`${e.target}` : D`${[e.target]}`,
                o = this.dialect.buildUpdateSet(
                  this.config.table,
                  Fl(this.config.table, e.set)
                );
              return (
                this.config.onConflict.push(
                  D` on conflict ${s}${r} do update set ${o}${n}${i}`
                ),
                this
              );
            }
            getSQL() {
              return this.dialect.buildInsertQuery(this.config);
            }
            toSQL() {
              let { typings: e, ...n } = this.dialect.sqlToQuery(this.getSQL());
              return n;
            }
            _prepare(e = !0) {
              return this.session[e ? 'prepareOneTimeQuery' : 'prepareQuery'](
                this.dialect.sqlToQuery(this.getSQL()),
                this.config.returning,
                this.config.returning ? 'all' : 'run',
                !0,
                void 0,
                { type: 'insert', tables: Rn(this.config.table) }
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
          class Gl extends Dn {
            constructor(e, n, r, i) {
              super(),
                (this.run = (s) => this._prepare().run(s)),
                (this.all = (s) => this._prepare().all(s)),
                (this.get = (s) => this._prepare().get(s)),
                (this.values = (s) => this._prepare().values(s)),
                (this.table = e),
                (this.session = n),
                (this.dialect = r),
                (this.config = { table: e, withList: i });
            }
            static {
              this[Y] = 'SQLiteDelete';
            }
            where(e) {
              return (this.config.where = e), this;
            }
            orderBy(...e) {
              if (typeof e[0] == 'function') {
                let n = e[0](
                    new Proxy(
                      this.config.table[le.Symbol.Columns],
                      new ot({
                        sqlAliasedBehavior: 'alias',
                        sqlBehavior: 'sql',
                      })
                    )
                  ),
                  r = Array.isArray(n) ? n : [n];
                this.config.orderBy = r;
              } else this.config.orderBy = e;
              return this;
            }
            limit(e) {
              return (this.config.limit = e), this;
            }
            returning(e = this.table[Ot.Symbol.Columns]) {
              return (this.config.returning = xn(e)), this;
            }
            getSQL() {
              return this.dialect.buildDeleteQuery(this.config);
            }
            toSQL() {
              let { typings: e, ...n } = this.dialect.sqlToQuery(this.getSQL());
              return n;
            }
            _prepare(e = !0) {
              return this.session[e ? 'prepareOneTimeQuery' : 'prepareQuery'](
                this.dialect.sqlToQuery(this.getSQL()),
                this.config.returning,
                this.config.returning ? 'all' : 'run',
                !0,
                void 0,
                { type: 'delete', tables: Rn(this.config.table) }
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
          class gi extends Ee {
            static {
              y = Symbol.toStringTag;
            }
            constructor(e) {
              super(gi.buildEmbeddedCount(e.source, e.filters).queryChunks),
                (this[y] = 'SQLiteCountBuilderAsync'),
                (this.params = e),
                (this.session = e.session),
                (this.sql = gi.buildCount(e.source, e.filters));
            }
            static {
              this[Y] = 'SQLiteCountBuilderAsync';
            }
            static buildEmbeddedCount(e, n) {
              return D`(select count(*) from ${e}${D.raw(' where ').if(
                n
              )}${n})`;
            }
            static buildCount(e, n) {
              return D`select count(*) from ${e}${D.raw(' where ').if(n)}${n}`;
            }
            then(e, n) {
              return Promise.resolve(this.session.count(this.sql)).then(e, n);
            }
            catch(e) {
              return this.then(void 0, e);
            }
            finally(e) {
              return this.then(
                (n) => (e?.(), n),
                (n) => {
                  throw (e?.(), n);
                }
              );
            }
          }
          class op {
            constructor(e, n, r, i, s, o, a, u) {
              (this.mode = e),
                (this.fullSchema = n),
                (this.schema = r),
                (this.tableNamesMap = i),
                (this.table = s),
                (this.tableConfig = o),
                (this.dialect = a),
                (this.session = u);
            }
            static {
              this[Y] = 'SQLiteAsyncRelationalQueryBuilder';
            }
            findMany(e) {
              return this.mode === 'sync'
                ? new Kl(
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
                : new Ms(
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
              return this.mode === 'sync'
                ? new Kl(
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
                : new Ms(
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
          class Ms extends Dn {
            constructor(e, n, r, i, s, o, a, u, c) {
              super(),
                (this.fullSchema = e),
                (this.schema = n),
                (this.tableNamesMap = r),
                (this.table = i),
                (this.tableConfig = s),
                (this.dialect = o),
                (this.session = a),
                (this.config = u),
                (this.mode = c);
            }
            static {
              this[Y] = 'SQLiteAsyncRelationalQuery';
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
              let { query: n, builtQuery: r } = this._toSQL();
              return this.session[e ? 'prepareOneTimeQuery' : 'prepareQuery'](
                r,
                void 0,
                this.mode === 'first' ? 'get' : 'all',
                !0,
                (i, s) => {
                  let o = i.map((a) =>
                    (function u(c, l, d, p, g = (h) => h) {
                      let h = {};
                      for (let [S, I] of p.entries())
                        if (I.isJson) {
                          let w = l.relations[I.tsKey],
                            R = d[S],
                            A = typeof R == 'string' ? JSON.parse(R) : R;
                          h[I.tsKey] = J(w, An)
                            ? A &&
                              u(c, c[I.relationTableTsKey], A, I.selection, g)
                            : A.map((O) =>
                                u(c, c[I.relationTableTsKey], O, I.selection, g)
                              );
                        } else {
                          let w,
                            R = g(d[S]),
                            A = I.field;
                          (w = J(A, Ve)
                            ? A
                            : J(A, Ee)
                            ? A.decoder
                            : A.sql.decoder),
                            (h[I.tsKey] =
                              R === null ? null : w.mapFromDriverValue(R));
                        }
                      return h;
                    })(this.schema, this.tableConfig, a, n.selection, s)
                  );
                  return this.mode === 'first' ? o[0] : o;
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
                n = this.dialect.sqlToQuery(e.sql);
              return { query: e, builtQuery: n };
            }
            toSQL() {
              return this._toSQL().builtQuery;
            }
            executeRaw() {
              return this.mode === 'first'
                ? this._prepare(!1).get()
                : this._prepare(!1).all();
            }
            async execute() {
              return this.executeRaw();
            }
          }
          class Kl extends Ms {
            static {
              this[Y] = 'SQLiteSyncRelationalQuery';
            }
            sync() {
              return this.executeRaw();
            }
          }
          class vi extends Dn {
            constructor(e, n, r, i, s) {
              super(),
                (this.execute = e),
                (this.getSQL = n),
                (this.dialect = i),
                (this.mapBatchResult = s),
                (this.config = { action: r });
            }
            static {
              this[Y] = 'SQLiteRaw';
            }
            getQuery() {
              return {
                ...this.dialect.sqlToQuery(this.getSQL()),
                method: this.config.action,
              };
            }
            mapResult(e, n) {
              return n ? this.mapBatchResult(e) : e;
            }
            _prepare() {
              return this;
            }
            isResponseInArrayMode() {
              return !1;
            }
          }
          class Jl {
            constructor(e, n, r, i) {
              (this.$with = (o, a) => {
                let u = this;
                return {
                  as: (c) => (
                    typeof c == 'function' && (c = c(new Vl(u.dialect))),
                    new Proxy(
                      new Dl(
                        c.getSQL(),
                        a ??
                          ('getSelectedFields' in c
                            ? c.getSelectedFields() ?? {}
                            : {}),
                        o,
                        !0
                      ),
                      new ot({
                        alias: o,
                        sqlAliasedBehavior: 'alias',
                        sqlBehavior: 'error',
                      })
                    )
                  ),
                };
              }),
                (this.resultKind = e),
                (this.dialect = n),
                (this.session = r),
                (this._ = i
                  ? {
                      schema: i.schema,
                      fullSchema: i.fullSchema,
                      tableNamesMap: i.tableNamesMap,
                    }
                  : { schema: void 0, fullSchema: {}, tableNamesMap: {} }),
                (this.query = {});
              let s = this.query;
              if (this._.schema)
                for (let [o, a] of Object.entries(this._.schema))
                  s[o] = new op(
                    e,
                    i.fullSchema,
                    this._.schema,
                    this._.tableNamesMap,
                    i.fullSchema[o],
                    a,
                    n,
                    r
                  );
              this.$cache = { invalidate: async (o) => {} };
            }
            static {
              this[Y] = 'BaseSQLiteDatabase';
            }
            $count(e, n) {
              return new gi({ source: e, filters: n, session: this.session });
            }
            with(...e) {
              let n = this;
              return {
                select: function (r) {
                  return new mn({
                    fields: r ?? void 0,
                    session: n.session,
                    dialect: n.dialect,
                    withList: e,
                  });
                },
                selectDistinct: function (r) {
                  return new mn({
                    fields: r ?? void 0,
                    session: n.session,
                    dialect: n.dialect,
                    withList: e,
                    distinct: !0,
                  });
                },
                update: function (r) {
                  return new ql(r, n.session, n.dialect, e);
                },
                insert: function (r) {
                  return new Ql(r, n.session, n.dialect, e);
                },
                delete: function (r) {
                  return new Gl(r, n.session, n.dialect, e);
                },
              };
            }
            select(e) {
              return new mn({
                fields: e ?? void 0,
                session: this.session,
                dialect: this.dialect,
              });
            }
            selectDistinct(e) {
              return new mn({
                fields: e ?? void 0,
                session: this.session,
                dialect: this.dialect,
                distinct: !0,
              });
            }
            update(e) {
              return new ql(e, this.session, this.dialect);
            }
            insert(e) {
              return new Ql(e, this.session, this.dialect);
            }
            delete(e) {
              return new Gl(e, this.session, this.dialect);
            }
            run(e) {
              let n = typeof e == 'string' ? D.raw(e) : e.getSQL();
              return this.resultKind === 'async'
                ? new vi(
                    async () => this.session.run(n),
                    () => n,
                    'run',
                    this.dialect,
                    this.session.extractRawRunValueFromBatchResult.bind(
                      this.session
                    )
                  )
                : this.session.run(n);
            }
            all(e) {
              let n = typeof e == 'string' ? D.raw(e) : e.getSQL();
              return this.resultKind === 'async'
                ? new vi(
                    async () => this.session.all(n),
                    () => n,
                    'all',
                    this.dialect,
                    this.session.extractRawAllValueFromBatchResult.bind(
                      this.session
                    )
                  )
                : this.session.all(n);
            }
            get(e) {
              let n = typeof e == 'string' ? D.raw(e) : e.getSQL();
              return this.resultKind === 'async'
                ? new vi(
                    async () => this.session.get(n),
                    () => n,
                    'get',
                    this.dialect,
                    this.session.extractRawGetValueFromBatchResult.bind(
                      this.session
                    )
                  )
                : this.session.get(n);
            }
            values(e) {
              let n = typeof e == 'string' ? D.raw(e) : e.getSQL();
              return this.resultKind === 'async'
                ? new vi(
                    async () => this.session.values(n),
                    () => n,
                    'values',
                    this.dialect,
                    this.session.extractRawValuesValueFromBatchResult.bind(
                      this.session
                    )
                  )
                : this.session.values(n);
            }
            transaction(e, n) {
              return this.session.transaction(e, n);
            }
          }
          class lp {
            static {
              this[Y] = 'Cache';
            }
          }
          class Hl extends lp {
            strategy() {
              return 'all';
            }
            static {
              this[Y] = 'NoopCache';
            }
            async get(e) {}
            async put(e, n, r, i) {}
            async onMutate(e) {}
          }
          async function zl(t, e) {
            let n = `${t}-${JSON.stringify(e)}`,
              r = new TextEncoder().encode(n),
              i = await crypto.subtle.digest('SHA-256', r);
            return [...new Uint8Array(i)]
              .map((s) => s.toString(16).padStart(2, '0'))
              .join('');
          }
          class up extends Dn {
            constructor(e) {
              super(), (this.resultCb = e);
            }
            static {
              this[Y] = 'ExecuteResultSync';
            }
            async execute() {
              return this.resultCb();
            }
            sync() {
              return this.resultCb();
            }
          }
          class cp {
            constructor(e, n, r, i, s, o) {
              (this.mode = e),
                (this.executeMethod = n),
                (this.query = r),
                (this.cache = i),
                (this.queryMetadata = s),
                (this.cacheConfig = o),
                i &&
                  i.strategy() === 'all' &&
                  o === void 0 &&
                  (this.cacheConfig = { enable: !0, autoInvalidate: !0 }),
                this.cacheConfig?.enable || (this.cacheConfig = void 0);
            }
            static {
              this[Y] = 'PreparedQuery';
            }
            async queryWithCache(e, n, r) {
              if (
                this.cache === void 0 ||
                J(this.cache, Hl) ||
                this.queryMetadata === void 0
              )
                try {
                  return await r();
                } catch (i) {
                  throw new hn(e, n, i);
                }
              if (this.cacheConfig && !this.cacheConfig.enable)
                try {
                  return await r();
                } catch (i) {
                  throw new hn(e, n, i);
                }
              if (
                (this.queryMetadata.type === 'insert' ||
                  this.queryMetadata.type === 'update' ||
                  this.queryMetadata.type === 'delete') &&
                this.queryMetadata.tables.length > 0
              )
                try {
                  let [i] = await Promise.all([
                    r(),
                    this.cache.onMutate({ tables: this.queryMetadata.tables }),
                  ]);
                  return i;
                } catch (i) {
                  throw new hn(e, n, i);
                }
              if (!this.cacheConfig)
                try {
                  return await r();
                } catch (i) {
                  throw new hn(e, n, i);
                }
              if (this.queryMetadata.type === 'select') {
                let i = await this.cache.get(
                  this.cacheConfig.tag ?? (await zl(e, n)),
                  this.queryMetadata.tables,
                  this.cacheConfig.tag !== void 0,
                  this.cacheConfig.autoInvalidate
                );
                if (i === void 0) {
                  let s;
                  try {
                    s = await r();
                  } catch (o) {
                    throw new hn(e, n, o);
                  }
                  return (
                    await this.cache.put(
                      this.cacheConfig.tag ?? (await zl(e, n)),
                      s,
                      this.cacheConfig.autoInvalidate
                        ? this.queryMetadata.tables
                        : [],
                      this.cacheConfig.tag !== void 0,
                      this.cacheConfig.config
                    ),
                    s
                  );
                }
                return i;
              }
              try {
                return await r();
              } catch (i) {
                throw new hn(e, n, i);
              }
            }
            getQuery() {
              return this.query;
            }
            mapRunResult(e, n) {
              return e;
            }
            mapAllResult(e, n) {
              throw Error('Not implemented');
            }
            mapGetResult(e, n) {
              throw Error('Not implemented');
            }
            execute(e) {
              return this.mode === 'async'
                ? this[this.executeMethod](e)
                : new up(() => this[this.executeMethod](e));
            }
            mapResult(e, n) {
              switch (this.executeMethod) {
                case 'run':
                  return this.mapRunResult(e, n);
                case 'all':
                  return this.mapAllResult(e, n);
                case 'get':
                  return this.mapGetResult(e, n);
              }
            }
          }
          class dp {
            constructor(e) {
              this.dialect = e;
            }
            static {
              this[Y] = 'SQLiteSession';
            }
            prepareOneTimeQuery(e, n, r, i, s, o, a) {
              return this.prepareQuery(e, n, r, i, s, o, a);
            }
            run(e) {
              let n = this.dialect.sqlToQuery(e);
              try {
                return this.prepareOneTimeQuery(n, void 0, 'run', !1).run();
              } catch (r) {
                throw new As({
                  cause: r,
                  message: `Failed to run the query '${n.sql}'`,
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
          class pp extends Jl {
            constructor(e, n, r, i, s = 0) {
              super(e, n, r, i), (this.schema = i), (this.nestedIndex = s);
            }
            static {
              this[Y] = 'SQLiteTransaction';
            }
            rollback() {
              throw new vd();
            }
          }
          class fp extends dp {
            constructor(e, n, r, i = {}) {
              super(n),
                (this.client = e),
                (this.schema = r),
                (this.options = i),
                (this.logger = i.logger ?? new Ac()),
                (this.cache = i.cache ?? new Hl());
            }
            static {
              this[Y] = 'SQLiteD1Session';
            }
            prepareQuery(e, n, r, i, s, o, a) {
              return new hp(
                this.client.prepare(e.sql),
                e,
                this.logger,
                this.cache,
                o,
                a,
                n,
                r,
                i,
                s
              );
            }
            async batch(e) {
              let n = [],
                r = [];
              for (let i of e) {
                let s = i._prepare(),
                  o = s.getQuery();
                if ((n.push(s), o.params.length > 0))
                  r.push(s.stmt.bind(...o.params));
                else {
                  let a = s.getQuery();
                  r.push(this.client.prepare(a.sql).bind(...a.params));
                }
              }
              return (await this.client.batch(r)).map((i, s) =>
                n[s].mapResult(i, !0)
              );
            }
            extractRawAllValueFromBatchResult(e) {
              return e.results;
            }
            extractRawGetValueFromBatchResult(e) {
              return e.results[0];
            }
            extractRawValuesValueFromBatchResult(e) {
              return Fs(e.results);
            }
            async transaction(e, n) {
              let r = new $s('async', this.dialect, this, this.schema);
              await this.run(
                D.raw(`begin${n?.behavior ? ' ' + n.behavior : ''}`)
              );
              try {
                let i = await e(r);
                return await this.run(D`commit`), i;
              } catch (i) {
                throw (await this.run(D`rollback`), i);
              }
            }
          }
          class $s extends pp {
            static {
              this[Y] = 'D1Transaction';
            }
            async transaction(e) {
              let n = `sp${this.nestedIndex}`,
                r = new $s(
                  'async',
                  this.dialect,
                  this.session,
                  this.schema,
                  this.nestedIndex + 1
                );
              await this.session.run(D.raw(`savepoint ${n}`));
              try {
                let i = await e(r);
                return (
                  await this.session.run(D.raw(`release savepoint ${n}`)), i
                );
              } catch (i) {
                throw (
                  (await this.session.run(D.raw(`rollback to savepoint ${n}`)),
                  i)
                );
              }
            }
          }
          function Fs(t) {
            let e = [];
            for (let n of t) {
              let r = Object.keys(n).map((i) => n[i]);
              e.push(r);
            }
            return e;
          }
          class hp extends cp {
            constructor(e, n, r, i, s, o, a, u, c, l) {
              super('async', u, n, i, s, o),
                (this.logger = r),
                (this._isResponseInArrayMode = c),
                (this.customResultMapper = l),
                (this.fields = a),
                (this.stmt = e);
            }
            static {
              this[Y] = 'D1PreparedQuery';
            }
            async run(e) {
              let n = ui(this.query.params, e ?? {});
              return (
                this.logger.logQuery(this.query.sql, n),
                await this.queryWithCache(this.query.sql, n, async () =>
                  this.stmt.bind(...n).run()
                )
              );
            }
            async all(e) {
              let {
                fields: n,
                query: r,
                logger: i,
                stmt: s,
                customResultMapper: o,
              } = this;
              if (!n && !o) {
                let u = ui(r.params, e ?? {});
                return (
                  i.logQuery(r.sql, u),
                  await this.queryWithCache(r.sql, u, async () =>
                    s
                      .bind(...u)
                      .all()
                      .then(({ results: c }) => this.mapAllResult(c))
                  )
                );
              }
              let a = await this.values(e);
              return this.mapAllResult(a);
            }
            mapAllResult(e, n) {
              return (
                n && (e = Fs(e.results)),
                this.fields || this.customResultMapper
                  ? this.customResultMapper
                    ? this.customResultMapper(e)
                    : e.map((r) => xs(this.fields, r, this.joinsNotNullableMap))
                  : e
              );
            }
            async get(e) {
              let {
                fields: n,
                joinsNotNullableMap: r,
                query: i,
                logger: s,
                stmt: o,
                customResultMapper: a,
              } = this;
              if (!n && !a) {
                let c = ui(i.params, e ?? {});
                return (
                  s.logQuery(i.sql, c),
                  await this.queryWithCache(i.sql, c, async () =>
                    o
                      .bind(...c)
                      .all()
                      .then(({ results: l }) => l[0])
                  )
                );
              }
              let u = await this.values(e);
              return u[0] ? (a ? a(u) : xs(n, u[0], r)) : void 0;
            }
            mapGetResult(e, n) {
              return (
                n && (e = Fs(e.results)[0]),
                this.fields || this.customResultMapper
                  ? this.customResultMapper
                    ? this.customResultMapper([e])
                    : xs(this.fields, e, this.joinsNotNullableMap)
                  : e
              );
            }
            async values(e) {
              let n = ui(this.query.params, e ?? {});
              return (
                this.logger.logQuery(this.query.sql, n),
                await this.queryWithCache(this.query.sql, n, async () =>
                  this.stmt.bind(...n).raw()
                )
              );
            }
            isResponseInArrayMode() {
              return this._isResponseInArrayMode;
            }
          }
          class mp extends Jl {
            static {
              this[Y] = 'D1Database';
            }
            async batch(e) {
              return this.session.batch(e);
            }
          }
          let Wl = Cn('students', {
              id: ge('id').primaryKey(),
              authUserId: ge('authUserId'),
              classId: ge('classId').notNull(),
              studentCode: ge('studentCode').notNull(),
              azureEmail: ge('azureEmail').notNull(),
              registerNumber: ge('registerNumber').notNull(),
              personalEmail: ge('personalEmail'),
              profilePicture: ge('profilePicture'),
              firstName: ge('firstName'),
              lastName: ge('lastName'),
              phoneNumber: ge('phoneNumber'),
              activeStatus: ge('activeStatus').default('PENDING').notNull(),
              gender: ge('gender').default('OTHER'),
              profileProgress: Ul('profileProgress'),
              isGraduated: It('isGraduated').default(0),
              isAdvocator: It('isAdvocator').default(0),
              isProfileVisible: It('isProfileVisible').default(0),
              profileVisibledDate: ge('profileVisibledDate'),
              isProfileStaged: It('isProfileStaged').default(0),
              isInternational: It('isInternational').default(0),
              dateOfBirth: ge('dateOfBirth'),
              graduatedDate: ge('graduatedDate'),
              jobSeekingStatus: ge('jobSeekingStatus'),
              hasAgreedTerms: It('hasAgreedTerms').default(0),
              createdAt: ge('createdAt')
                .default(D`(CURRENT_TIMESTAMP)`)
                .notNull(),
              updatedAt: ge('updatedAt')
                .default(D`(CURRENT_TIMESTAMP)`)
                .notNull(),
            }),
            Xl = Cn('classes', {
              id: ge('id').primaryKey(),
              classNumber: ge('classNumber').notNull(),
              className: ge('className').notNull(),
              classStartDate: ge('classStartDate')
                .default(D`(CURRENT_TIMESTAMP)`)
                .notNull(),
              classEndDate: ge('classEndDate'),
              classStartTime: ge('classStartTime'),
              classEndTime: ge('classEndTime'),
              course: ge('course').default('CODING').notNull(),
              teachers: ge('teachers')
                .default(D`(json_array())`)
                .notNull(),
              academicYearId: ge('academicYearId'),
              isFinished: It('isFinished').default(0),
            }),
            js = Cn('teachers', {
              id: ge('id').primaryKey(),
              email: ge('email').notNull(),
              name: ge('name').notNull(),
              phoneNumber: ge('phoneNumber'),
              profilePicture: ge('profilePicture'),
              gender: ge('gender'),
              isActive: It('isActive').default(1),
              createdAt: ge('createdAt')
                .default(D`(CURRENT_TIMESTAMP)`)
                .notNull(),
              updatedAt: ge('updatedAt')
                .default(D`(CURRENT_TIMESTAMP)`)
                .notNull(),
            }),
            wt = Cn('clubs', {
              id: ge('id').primaryKey(),
              creatorId: ge('creatorId'),
              name: ge('name').notNull(),
              description: ge('description'),
              teacherId: ge('teacherId').references(() => js.id),
              minMember: It('minMember').notNull(),
              maxMember: It('maxMember').notNull(),
              type: ge('type').notNull(),
              preferredTeachers: ge('preferredTeachers', {
                mode: 'json',
              }).$type(),
              status: ge('status').notNull(),
              createdAt: ge('createdAt')
                .default(D`(CURRENT_TIMESTAMP)`)
                .notNull(),
              updatedAt: ge('updatedAt')
                .default(D`(CURRENT_TIMESTAMP)`)
                .notNull(),
            }),
            gp = Cn('class_teachers', {
              id: ge('id').primaryKey(),
              classId: ge('classId')
                .notNull()
                .references(() => Xl.id, { onDelete: 'cascade' }),
              teacherId: ge('teacherId')
                .notNull()
                .references(() => js.id, { onDelete: 'cascade' }),
              assignedAt: ge('assignedAt')
                .default(D`(CURRENT_TIMESTAMP)`)
                .notNull(),
            }),
            vp = Cn('club_members', {
              id: ge('id').primaryKey(),
              clubId: ge('clubId')
                .notNull()
                .references(() => wt.id, { onDelete: 'cascade' }),
              studentId: ge('studentId')
                .notNull()
                .references(() => Wl.id, { onDelete: 'cascade' }),
              joinedAt: ge('joinedAt')
                .default(D`(CURRENT_TIMESTAMP)`)
                .notNull(),
            }),
            yi = Cn('timetable', {
              id: ge('id').primaryKey(),
              date: ge('date').notNull(),
              room: ge('room').notNull(),
              clubStartTime: ge('clubStartTime').notNull(),
              duration: It('duration'),
              clubId: ge('clubId')
                .notNull()
                .references(() => wt.id, { onDelete: 'cascade' }),
              createdAt: ge('createdAt')
                .default(D`(CURRENT_TIMESTAMP)`)
                .notNull(),
              updatedAt: ge('updatedAt')
                .default(D`(CURRENT_TIMESTAMP)`)
                .notNull(),
            }),
            Pn = (function (t, e = {}) {
              let n,
                r,
                i = new Xd({ casing: e.casing });
              if (
                (e.logger === !0
                  ? (n = new wc())
                  : e.logger !== !1 && (n = e.logger),
                e.schema)
              ) {
                let a = (function (u, c) {
                  Object.keys(u).length === 1 &&
                    'default' in u &&
                    !J(u.default, le) &&
                    (u = u.default);
                  let l = {},
                    d = {},
                    p = {};
                  for (let [g, h] of Object.entries(u))
                    if (J(h, le)) {
                      let S = vr(h),
                        I = d[S];
                      for (let R of ((l[S] = g),
                      (p[g] = {
                        tsName: g,
                        dbName: h[le.Symbol.Name],
                        schema: h[le.Symbol.Schema],
                        columns: h[le.Symbol.Columns],
                        relations: I?.relations ?? {},
                        primaryKey: I?.primaryKey ?? [],
                      }),
                      Object.values(h[le.Symbol.Columns])))
                        R.primary && p[g].primaryKey.push(R);
                      let w = h[le.Symbol.ExtraConfigBuilder]?.(
                        h[le.Symbol.ExtraConfigColumns]
                      );
                      if (w)
                        for (let R of Object.values(w))
                          J(R, Rc) && p[g].primaryKey.push(...R.columns);
                    } else if (J(h, dd)) {
                      let S,
                        I = vr(h.table),
                        w = l[I];
                      for (let [R, A] of Object.entries(h.config(c(h.table))))
                        if (w) {
                          let O = p[w];
                          (O.relations[R] = A), S && O.primaryKey.push(...S);
                        } else
                          I in d || (d[I] = { relations: {}, primaryKey: S }),
                            (d[I].relations[R] = A);
                    }
                  return { tables: p, tableNamesMap: l };
                })(e.schema, pd);
                r = {
                  fullSchema: e.schema,
                  schema: a.tables,
                  tableNamesMap: a.tableNamesMap,
                };
              }
              let s = new fp(t, i, r, { logger: n, cache: e.cache }),
                o = new mp('async', i, s, r);
              return (
                (o.$client = t),
                (o.$cache = e.cache),
                o.$cache && (o.$cache.invalidate = e.cache?.onMutate),
                o
              );
            })(process.env.DB, { schema: $e }),
            yp = (t) => t || null,
            Tp = (t) => (t ? 'approved' : 'pending'),
            bp = (t, e) => t || (e ? 'mentor' : 'self'),
            Ep = (t, e) => (t ? null : e),
            Np = (t) => t ?? 0,
            Sp = (t) => t ?? 0,
            _p = (t, e) => {
              let n = [
                  'Sunday',
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Saturday',
                ].findIndex((s) => s.toLowerCase() === e.toLowerCase()),
                r = new Date(t),
                i = new Date(r);
              return (
                i.setDate(r.getDate() + ((n + 7 - r.getDay()) % 7)),
                i.toISOString().split('T')[0]
              );
            },
            Ip = (t, e) => {
              let {
                  startDate: n,
                  classroom: r,
                  startTime: i,
                  duration: s,
                  frequency: o,
                  selectedDays: a,
                } = t,
                u = { clubId: e, room: r, clubStartTime: i, duration: s };
              return o !== 'ONCE' && a?.length
                ? a.map((c) => ({
                    id: crypto.randomUUID(),
                    date: _p(n, c),
                    ...u,
                  }))
                : [{ id: crypto.randomUUID(), date: n, ...u }];
            },
            Op = (t) => {
              let e = t instanceof Error ? t.message : 'Unknown error';
              throw new j(
                `\u0410\u043B\u0434\u0430\u0430 \u0433\u0430\u0440\u043B\u0430\u0430: ${e}`
              );
            },
            wp = (function ({
              typeDefs: t,
              resolvers: e = {},
              resolverValidationOptions: n = {},
              inheritResolversFromInterfaces: r = !1,
              updateResolversInPlace: i = !1,
              schemaExtensions: s,
              defaultFieldResolver: o,
              ...a
            }) {
              let u;
              if (typeof n != 'object')
                throw Error(
                  'Expected `resolverValidationOptions` to be an object'
                );
              if (!t) throw Error('Must provide typeDefs');
              if (
                ((u = (function ({
                  schema: c,
                  resolvers: l,
                  defaultFieldResolver: d,
                  resolverValidationOptions: p = {},
                  inheritResolversFromInterfaces: g = !1,
                  updateResolversInPlace: h = !1,
                }) {
                  var S;
                  let {
                      requireResolversToMatchSchema: I = 'error',
                      requireResolversForResolveType: w,
                    } = p,
                    R = g
                      ? (function (A, O) {
                          let P = {},
                            B = A.getTypeMap();
                          for (let k in B) {
                            let Z = B[k];
                            if ('getInterfaces' in Z) {
                              for (let H of ((P[k] = {}), Z.getInterfaces()))
                                if (O[H.name])
                                  for (let ae in O[H.name])
                                    (ae !== '__isTypeOf' &&
                                      ae.startsWith('__')) ||
                                      (P[k][ae] = O[H.name][ae]);
                              let z = O[k];
                              P[k] = { ...P[k], ...z };
                            } else {
                              let z = O[k];
                              z != null && (P[k] = z);
                            }
                          }
                          return P;
                        })(c, l)
                      : l;
                  for (let A in R) {
                    let O = R[A];
                    if (typeof O != 'object')
                      throw Error(
                        `"${A}" defined in resolvers, but has invalid value "${O}". The resolver's value must be of type object.`
                      );
                    let P = c.getType(A);
                    if (P == null) {
                      let B = `"${A}" defined in resolvers, but not in schema`;
                      if (I && I !== 'error') {
                        I === 'warn' && console.warn(B);
                        continue;
                      }
                      throw Error(B);
                    }
                    if (nr(P))
                      for (let B in O)
                        B.startsWith('__')
                          ? (P[B.substring(2)] = O[B])
                          : (P[B] = O[B]);
                    else if (Be(P)) {
                      let B = P.getValues();
                      for (let k in O)
                        if (
                          !k.startsWith('__') &&
                          !B.some((Z) => Z.name === k) &&
                          I &&
                          I !== 'ignore'
                        ) {
                          let Z = `${P.name}.${k} was defined in resolvers, but not present within ${P.name}`;
                          if (I === 'error') throw Error(Z);
                          console.warn(Z);
                        }
                    } else if (We(P)) {
                      for (let B in O)
                        if (!B.startsWith('__') && I && I !== 'ignore') {
                          let k = `${P.name}.${B} was defined in resolvers, but ${P.name} is not an object or interface type`;
                          if (I === 'error') throw Error(k);
                          console.warn(k);
                        }
                    } else if (we(P) || Pe(P)) {
                      for (let B in O)
                        if (!B.startsWith('__'))
                          if (P.getFields()[B] == null) {
                            if (I && I !== 'ignore') {
                              let k = `${A}.${B} defined in resolvers, but not in schema`;
                              if (I === 'error') throw Error(k);
                              console.error(k);
                            }
                          } else {
                            let k = O[B];
                            if (typeof k != 'function' && typeof k != 'object')
                              throw Error(
                                `Resolver ${A}.${B} must be object or function`
                              );
                          }
                    }
                  }
                  return (
                    (c = h
                      ? (function (A, O, P) {
                          let B = A.getTypeMap();
                          for (let k in O) {
                            let Z = A.getType(k),
                              z = O[k];
                            if (gt(Z))
                              for (let H in z)
                                H.startsWith('__')
                                  ? (Z[H.substring(2)] = z[H])
                                  : H === 'astNode' && Z.astNode != null
                                  ? (Z.astNode = {
                                      ...Z.astNode,
                                      description:
                                        z?.astNode?.description ??
                                        Z.astNode.description,
                                      directives: (
                                        Z.astNode.directives ?? []
                                      ).concat(z?.astNode?.directives ?? []),
                                    })
                                  : H === 'extensionASTNodes' &&
                                    Z.extensionASTNodes != null
                                  ? (Z.extensionASTNodes =
                                      Z.extensionASTNodes.concat(
                                        z?.extensionASTNodes ?? []
                                      ))
                                  : H === 'extensions' &&
                                    Z.extensions != null &&
                                    z.extensions != null
                                  ? (Z.extensions = Object.assign(
                                      Object.create(null),
                                      Z.extensions,
                                      z.extensions
                                    ))
                                  : (Z[H] = z[H]);
                            else if (Be(Z)) {
                              let H = Z.toConfig(),
                                ae = H.values;
                              for (let oe in z)
                                oe.startsWith('__')
                                  ? (H[oe.substring(2)] = z[oe])
                                  : oe === 'astNode' && H.astNode != null
                                  ? (H.astNode = {
                                      ...H.astNode,
                                      description:
                                        z?.astNode?.description ??
                                        H.astNode.description,
                                      directives: (
                                        H.astNode.directives ?? []
                                      ).concat(z?.astNode?.directives ?? []),
                                    })
                                  : oe === 'extensionASTNodes' &&
                                    H.extensionASTNodes != null
                                  ? (H.extensionASTNodes =
                                      H.extensionASTNodes.concat(
                                        z?.extensionASTNodes ?? []
                                      ))
                                  : oe === 'extensions' &&
                                    Z.extensions != null &&
                                    z.extensions != null
                                  ? (Z.extensions = Object.assign(
                                      Object.create(null),
                                      Z.extensions,
                                      z.extensions
                                    ))
                                  : ae[oe] && (ae[oe].value = z[oe]);
                              B[k] = new Bt(H);
                            } else if (We(Z))
                              for (let H in z)
                                H.startsWith('__') &&
                                  (Z[H.substring(2)] = z[H]);
                            else if (we(Z) || Pe(Z))
                              for (let H in z) {
                                if (H.startsWith('__')) {
                                  Z[H.substring(2)] = z[H];
                                  continue;
                                }
                                let ae = Z.getFields()[H];
                                if (ae != null) {
                                  let oe = z[H];
                                  typeof oe == 'function'
                                    ? (ae.resolve = oe.bind(z))
                                    : vl(ae, oe);
                                }
                              }
                          }
                          return (
                            cl(A, dl),
                            (function (k, Z) {
                              let z = Object.create(null);
                              for (let de in k) {
                                let G = k[de];
                                if (G == null || de.startsWith('__')) continue;
                                let se = G.name;
                                if (!se.startsWith('__')) {
                                  if (z[se] != null) {
                                    console.warn(
                                      `Duplicate schema type name ${se} found; keeping the existing one found in the schema`
                                    );
                                    continue;
                                  }
                                  z[se] = G;
                                }
                              }
                              for (let de in z) {
                                let G = z[de];
                                k[de] = G;
                              }
                              for (let de of Z)
                                de.args = de.args.filter(
                                  (G) => (
                                    (G.type = oe(G.type)), G.type !== null
                                  )
                                );
                              for (let de in k) {
                                let G = k[de];
                                !de.startsWith('__') &&
                                  de in z &&
                                  G != null &&
                                  (function (se) {
                                    if (we(se)) {
                                      H(se), ae(se);
                                      return;
                                    }
                                    if (Pe(se)) {
                                      H(se), 'getInterfaces' in se && ae(se);
                                      return;
                                    }
                                    if (We(se)) {
                                      (function (F) {
                                        let V = F.getTypes();
                                        V.push(
                                          ...V.splice(0)
                                            .map((q) => oe(q))
                                            .filter(Boolean)
                                        );
                                      })(se);
                                      return;
                                    }
                                    if (ke(se)) {
                                      (function (F) {
                                        let V = F.getFields();
                                        for (let [q, X] of Object.entries(V))
                                          (X.type = oe(X.type)),
                                            X.type === null && delete V[q];
                                      })(se);
                                      return;
                                    }
                                    if (!vt(se))
                                      throw Error(
                                        `Unexpected schema type: ${se}`
                                      );
                                  })(G);
                              }
                              for (let de in k)
                                de.startsWith('__') || de in z || delete k[de];
                              function H(de) {
                                let G = de.getFields();
                                for (let [se, F] of Object.entries(G))
                                  F.args
                                    .map(
                                      (V) => (
                                        (V.type = oe(V.type)),
                                        V.type === null ? null : V
                                      )
                                    )
                                    .filter(Boolean),
                                    (F.type = oe(F.type)),
                                    F.type === null && delete G[se];
                              }
                              function ae(de) {
                                if ('getInterfaces' in de) {
                                  let G = de.getInterfaces();
                                  G.push(
                                    ...G.splice(0)
                                      .map((se) => oe(se))
                                      .filter(Boolean)
                                  );
                                }
                              }
                              function oe(de) {
                                if (Me(de)) {
                                  let G = oe(de.ofType);
                                  return G != null ? new Ze(G) : null;
                                }
                                if (Oe(de)) {
                                  let G = oe(de.ofType);
                                  return G != null ? new Ae(G) : null;
                                }
                                if (Lr(de)) {
                                  let G = k[de.name];
                                  if (G && de !== G) return G;
                                }
                                return de;
                              }
                            })(A.getTypeMap(), A.getDirectives()),
                            cl(A, pl),
                            P != null &&
                              fl(A, (k) => {
                                k.resolve || (k.resolve = P);
                              }),
                            A
                          );
                        })(c, R, d)
                      : ((S = vs((S = c), {
                          [ie.SCALAR_TYPE]: (A) => {
                            let O = A.toConfig(),
                              P = R[A.name];
                            if (!nr(A) && P != null) {
                              for (let B in P)
                                B.startsWith('__')
                                  ? (O[B.substring(2)] = P[B])
                                  : B === 'astNode' && O.astNode != null
                                  ? (O.astNode = {
                                      ...O.astNode,
                                      description:
                                        P?.astNode?.description ??
                                        O.astNode.description,
                                      directives: (
                                        O.astNode.directives ?? []
                                      ).concat(P?.astNode?.directives ?? []),
                                    })
                                  : B === 'extensionASTNodes' &&
                                    O.extensionASTNodes != null
                                  ? (O.extensionASTNodes =
                                      O.extensionASTNodes.concat(
                                        P?.extensionASTNodes ?? []
                                      ))
                                  : B === 'extensions' &&
                                    O.extensions != null &&
                                    P.extensions != null
                                  ? (O.extensions = Object.assign(
                                      Object.create(null),
                                      A.extensions,
                                      P.extensions
                                    ))
                                  : (O[B] = P[B]);
                              return new Ut(O);
                            }
                          },
                          [ie.ENUM_TYPE]: (A) => {
                            let O = R[A.name],
                              P = A.toConfig(),
                              B = P.values;
                            if (O != null) {
                              for (let k in O)
                                k.startsWith('__')
                                  ? (P[k.substring(2)] = O[k])
                                  : k === 'astNode' && P.astNode != null
                                  ? (P.astNode = {
                                      ...P.astNode,
                                      description:
                                        O?.astNode?.description ??
                                        P.astNode.description,
                                      directives: (
                                        P.astNode.directives ?? []
                                      ).concat(O?.astNode?.directives ?? []),
                                    })
                                  : k === 'extensionASTNodes' &&
                                    P.extensionASTNodes != null
                                  ? (P.extensionASTNodes =
                                      P.extensionASTNodes.concat(
                                        O?.extensionASTNodes ?? []
                                      ))
                                  : k === 'extensions' &&
                                    P.extensions != null &&
                                    O.extensions != null
                                  ? (P.extensions = Object.assign(
                                      Object.create(null),
                                      A.extensions,
                                      O.extensions
                                    ))
                                  : B[k] && (B[k].value = O[k]);
                              return new Bt(P);
                            }
                          },
                          [ie.UNION_TYPE]: (A) => {
                            let O = R[A.name];
                            if (O != null) {
                              let P = A.toConfig();
                              return (
                                O.__resolveType &&
                                  (P.resolveType = O.__resolveType),
                                new tr(P)
                              );
                            }
                          },
                          [ie.OBJECT_TYPE]: (A) => {
                            let O = R[A.name];
                            if (O != null) {
                              let P = A.toConfig();
                              return (
                                O.__isTypeOf && (P.isTypeOf = O.__isTypeOf),
                                new ct(P)
                              );
                            }
                          },
                          [ie.INTERFACE_TYPE]: (A) => {
                            let O = R[A.name];
                            if (O != null) {
                              let P = A.toConfig();
                              return (
                                O.__resolveType &&
                                  (P.resolveType = O.__resolveType),
                                new un(P)
                              );
                            }
                          },
                          [ie.COMPOSITE_FIELD]: (A, O, P) => {
                            let B = R[P];
                            if (B != null) {
                              let k = B[O];
                              if (k != null) {
                                let Z = { ...A };
                                return (
                                  typeof k == 'function'
                                    ? (Z.resolve = k.bind(B))
                                    : vl(Z, k),
                                  Z
                                );
                              }
                            }
                          },
                        })),
                        d != null &&
                          (S = vs(S, {
                            [ie.OBJECT_FIELD]: (A) => ({
                              ...A,
                              resolve: A.resolve != null ? A.resolve : d,
                            }),
                          })),
                        S)),
                    w &&
                      w !== 'ignore' &&
                      vs(c, {
                        [ie.ABSTRACT_TYPE]: (A) => {
                          if (!A.resolveType) {
                            let O = `Type "${A.name}" is missing a "__resolveType" resolver. Pass 'ignore' into "resolverValidationOptions.requireResolversForResolveType" to disable this error.`;
                            if (w === 'error') throw Error(O);
                            w === 'warn' && console.warn(O);
                          }
                        },
                      }),
                    c
                  );
                })({
                  schema: (u = lt(t, ir)
                    ? t
                    : a?.commentDescriptions
                    ? Bo(
                        wr(gs(t, { ...a, commentDescriptions: !0 }), {
                          noLocation: a?.noLocation,
                          allowLegacyFragmentVariables:
                            a?.allowLegacyFragmentVariables,
                        }),
                        {
                          assumeValidSDL: a?.assumeValidSDL,
                          assumeValid: a?.assumeValid,
                        }
                      )
                    : Bo(gs(t, a), a)),
                  resolvers: (function c(l, d) {
                    if (!l || (Array.isArray(l) && l.length === 0)) return {};
                    if (!Array.isArray(l)) return l;
                    if (l.length === 1) return l[0] || {};
                    let p = [];
                    for (let h of l)
                      Array.isArray(h) && (h = c(h)),
                        typeof h == 'object' && h && p.push(h);
                    let g = mr(p, !0);
                    if (d?.exclusions)
                      for (let h of d.exclusions) {
                        let [S, I] = h.split('.');
                        !(
                          ['__proto__', 'constructor', 'prototype'].includes(
                            S
                          ) ||
                          ['__proto__', 'constructor', 'prototype'].includes(I)
                        ) &&
                          (I && I !== '*'
                            ? g[S] && delete g[S][I]
                            : delete g[S]);
                      }
                    return g;
                  })(e),
                  resolverValidationOptions: n,
                  inheritResolversFromInterfaces: r,
                  updateResolversInPlace: i,
                  defaultFieldResolver: o,
                })),
                Object.keys(n).length > 0 &&
                  (function (c, l = {}) {
                    let {
                      requireResolversForArgs: d,
                      requireResolversForNonScalar: p,
                      requireResolversForAllFields: g,
                    } = l;
                    if (g && (d || p))
                      throw TypeError(
                        'requireResolversForAllFields takes precedence over the more specific assertions. Please configure either requireResolversForAllFields or requireResolversForArgs / requireResolversForNonScalar, but not a combination of them.'
                      );
                    fl(c, (h, S, I) => {
                      g && Ts('requireResolversForAllFields', g, h, S, I),
                        d &&
                          h.args.length > 0 &&
                          Ts('requireResolversForArgs', d, h, S, I),
                        p === 'ignore' ||
                          gt(ut(h.type)) ||
                          Ts('requireResolversForNonScalar', p, h, S, I);
                    });
                  })(u, n),
                s)
              )
                for (let c of Ho(s))
                  (function (l, d) {
                    for (let [p, g] of (Bn(l, d.schemaExtensions),
                    Object.entries(d.types || {}))) {
                      let h = l.getType(p);
                      if (h) {
                        if (
                          (Bn(h, g.extensions),
                          g.type === 'object' || g.type === 'interface')
                        )
                          for (let [S, I] of Object.entries(g.fields)) {
                            let w = h.getFields()[S];
                            if (w)
                              for (let [R, A] of (Bn(w, I.extensions),
                              Object.entries(I.arguments)))
                                Bn(
                                  w.args.find((O) => O.name === R),
                                  A
                                );
                          }
                        else if (g.type === 'input')
                          for (let [S, I] of Object.entries(g.fields))
                            Bn(h.getFields()[S], I.extensions);
                        else if (g.type === 'enum')
                          for (let [S, I] of Object.entries(g.values))
                            Bn(h.getValue(S), I);
                      }
                    }
                  })(u, c);
              return u;
            })({
              typeDefs: Ic,
              resolvers: {
                Query: {
                  getAllClubs: async () => {
                    try {
                      return await Pn.select().from(wt);
                    } catch (t) {
                      throw (
                        (console.error('Error in getAllClubs:', t),
                        Error(
                          '\u041A\u043B\u0443\u0431\u04AF\u04AF\u0434\u0438\u0439\u043D \u043C\u044D\u0434\u044D\u044D\u043B\u043B\u0438\u0439\u0433 \u0430\u0432\u0430\u0445\u0430\u0434 \u0430\u043B\u0434\u0430\u0430 \u0433\u0430\u0440\u043B\u0430\u0430.'
                        ))
                      );
                    }
                  },
                  getAllApprovedClubs: async () => {
                    try {
                      return await Pn.select()
                        .from(wt)
                        .where(Yn(wt.status, 'approved'));
                    } catch (t) {
                      throw (
                        (console.error('Error in getAllApprovedClubs:', t),
                        Error(
                          '\u0411\u0430\u0442\u043B\u0430\u0433\u0434\u0441\u0430\u043D \u043A\u043B\u0443\u0431\u04AF\u04AF\u0434\u0438\u0439\u043D \u043C\u044D\u0434\u044D\u044D\u043B\u043B\u0438\u0439\u0433 \u0430\u0432\u0430\u0445\u0430\u0434 \u0430\u043B\u0434\u0430\u0430 \u0433\u0430\u0440\u043B\u0430\u0430.'
                        ))
                      );
                    }
                  },
                  getAllPendingClubs: async () => {
                    try {
                      return await Pn.select()
                        .from(wt)
                        .where(Yn(wt.status, 'pending'));
                    } catch (t) {
                      throw (
                        (console.error('Error in getAllPendingClubs:', t),
                        Error(
                          '\u0425\u04AF\u043B\u044D\u044D\u0433\u0434\u044D\u0436 \u0431\u0443\u0439 \u043A\u043B\u0443\u0431\u04AF\u04AF\u0434\u0438\u0439\u043D \u043C\u044D\u0434\u044D\u044D\u043B\u043B\u0438\u0439\u0433 \u0430\u0432\u0430\u0445\u0430\u0434 \u0430\u043B\u0434\u0430\u0430 \u0433\u0430\u0440\u043B\u0430\u0430.'
                        ))
                      );
                    }
                  },
                },
                Mutation: {
                  createClubWithSchedules: async (t, e) => {
                    console.log('MUTATION START:', e);
                    try {
                      let n = crypto.randomUUID(),
                        [r] = await Pn.insert(wt)
                          .values({
                            id: n,
                            name: e.input.name,
                            description: e.input.description,
                            creatorId: e.input.creatorId,
                            teacherId: yp(e.input.teacherId),
                            status: Tp(e.input.teacherId),
                            type: bp(e.input.type, e.input.teacherId),
                            preferredTeachers: Ep(
                              e.input.teacherId,
                              e.input.preferredTeachers
                            ),
                            minMember: Np(e.input.minMember),
                            maxMember: Sp(e.input.maxMember),
                          })
                          .returning();
                      if (!r)
                        throw Error(
                          '\u041A\u043B\u0443\u0431 \u04AF\u04AF\u0441\u0433\u044D\u0436 \u0447\u0430\u0434\u0441\u0430\u043D\u0433\u04AF\u0439.'
                        );
                      let i = Ip(e, n);
                      return (
                        await Pn.insert(yi).values(i),
                        console.log('SUCCESS: Club and schedules created.'),
                        r
                      );
                    } catch (n) {
                      Op(n);
                    }
                  },
                  deleteClub: async (t, { id: e }) => {
                    let n = await Pn.delete(wt)
                      .where(Yn(wt.id, e))
                      .returning({ deletedId: wt.id })
                      .catch(() => {
                        throw new j(
                          '\u041A\u043B\u0443\u0431 \u0443\u0441\u0442\u0433\u0430\u0445\u0430\u0434 \u0430\u043B\u0434\u0430\u0430 \u0433\u0430\u0440\u043B\u0430\u0430.'
                        );
                      });
                    if (!n?.length)
                      throw new j(
                        '\u0423\u0441\u0442\u0433\u0430\u0445 \u043A\u043B\u0443\u0431 \u043E\u043B\u0434\u0441\u043E\u043D\u0433\u04AF\u0439.'
                      );
                    return n[0].deletedId;
                  },
                },
                Club: {
                  timetables: async (t) =>
                    await Pn.select().from(yi).where(Yn(yi.clubId, t.id)),
                },
              },
            }),
            Ap = async (t) => {
              let e;
              return (
                (e =
                  t.method !== 'POST'
                    ? yn.redirect(
                        `https://studio.apollographql.com/sandbox/explorer?endpoint=${t.url}`,
                        302
                      )
                    : await xp(t)),
                Nc(t, e)
              );
            },
            xp = async (t) => {
              var e, n, r;
              try {
                let {
                  query: i,
                  variables: s,
                  operationName: o,
                } = await t.json();
                return (
                  (n = await ((e = {
                    schema: wp,
                    source: i,
                    variableValues: s,
                    operationName: o,
                  }),
                  new Promise((a) =>
                    a(
                      (function (u) {
                        let c;
                        arguments.length < 2 ||
                          De(
                            !1,
                            'graphql@16 dropped long-deprecated support for positional arguments, please pass an object instead.'
                          );
                        let {
                            schema: l,
                            source: d,
                            rootValue: p,
                            contextValue: g,
                            variableValues: h,
                            operationName: S,
                            fieldResolver: I,
                            typeResolver: w,
                          } = u,
                          R = io(l);
                        if (R.length > 0) return { errors: R };
                        try {
                          c = wr(d);
                        } catch (O) {
                          return { errors: [O] };
                        }
                        let A = (function (O, P, B = tc, k, Z = new uo(O)) {
                          var z;
                          let H =
                            (z = k?.maxErrors) !== null && z !== void 0
                              ? z
                              : 100;
                          P || De(!1, 'Must provide document.'), so(O);
                          let ae = Object.freeze({}),
                            oe = [],
                            de = new ic(O, P, Z, (se) => {
                              if (oe.length >= H)
                                throw (
                                  (oe.push(
                                    new j(
                                      'Too many validation errors, error limit reached. Validation aborted.'
                                    )
                                  ),
                                  ae)
                                );
                              oe.push(se);
                            }),
                            G = Ma(B.map((se) => se(de)));
                          try {
                            Xn(P, co(Z, G));
                          } catch (se) {
                            if (se !== ae) throw se;
                          }
                          return oe;
                        })(l, c);
                        return A.length > 0
                          ? { errors: A }
                          : (function (O) {
                              arguments.length < 2 ||
                                De(
                                  !1,
                                  'graphql@16 dropped long-deprecated support for positional arguments, please pass an object instead.'
                                );
                              let {
                                schema: P,
                                document: B,
                                variableValues: k,
                                rootValue: Z,
                              } = O;
                              B || De(!1, 'Must provide document.'),
                                so(P),
                                k == null ||
                                  Ct(k) ||
                                  De(
                                    !1,
                                    'Variables must be provided as an Object where each property is a variable value. Perhaps look to see if an unparsed JSON string was provided.'
                                  );
                              let z = (function (H) {
                                var ae, oe, de;
                                let G,
                                  {
                                    schema: se,
                                    document: F,
                                    rootValue: V,
                                    contextValue: q,
                                    variableValues: X,
                                    operationName: ve,
                                    fieldResolver: Ne,
                                    typeResolver: Re,
                                    subscribeFieldResolver: Ke,
                                    options: en,
                                  } = H,
                                  bt = Object.create(null);
                                for (let Je of F.definitions)
                                  switch (Je.kind) {
                                    case f.OPERATION_DEFINITION:
                                      if (ve == null) {
                                        if (G !== void 0)
                                          return [
                                            new j(
                                              'Must provide operation name if query contains multiple operations.'
                                            ),
                                          ];
                                        G = Je;
                                      } else
                                        ((ae = Je.name) === null ||
                                        ae === void 0
                                          ? void 0
                                          : ae.value) === ve && (G = Je);
                                      break;
                                    case f.FRAGMENT_DEFINITION:
                                      bt[Je.name.value] = Je;
                                  }
                                if (!G)
                                  return ve != null
                                    ? [
                                        new j(
                                          `Unknown operation named "${ve}".`
                                        ),
                                      ]
                                    : [new j('Must provide an operation.')];
                                let jt = (function (Je, Et, Dp, Zl) {
                                  let Tr = [],
                                    eu = Zl?.maxErrors;
                                  try {
                                    let Us = (function (Bs, Rp, tu, Ti) {
                                      let Vs = {};
                                      for (let tn of Rp) {
                                        let nn = tn.variable.name.value,
                                          Ln = yt(Bs, tn.type);
                                        if (!Pt(Ln)) {
                                          let Yt = Ge(tn.type);
                                          Ti(
                                            new j(
                                              `Variable "$${nn}" expected value of type "${Yt}" which cannot be used as an input type.`,
                                              { nodes: tn.type }
                                            )
                                          );
                                          continue;
                                        }
                                        if (!wo(tu, nn)) {
                                          if (tn.defaultValue)
                                            Vs[nn] = qt(tn.defaultValue, Ln);
                                          else if (Oe(Ln)) {
                                            let Yt = ee(Ln);
                                            Ti(
                                              new j(
                                                `Variable "$${nn}" of required type "${Yt}" was not provided.`,
                                                { nodes: tn }
                                              )
                                            );
                                          }
                                          continue;
                                        }
                                        let nu = tu[nn];
                                        if (nu === null && Oe(Ln)) {
                                          let Yt = ee(Ln);
                                          Ti(
                                            new j(
                                              `Variable "$${nn}" of non-null type "${Yt}" must not be null.`,
                                              { nodes: tn }
                                            )
                                          );
                                          continue;
                                        }
                                        Vs[nn] = (function (
                                          Yt,
                                          qs,
                                          bi = function (Gt, qe, Ue) {
                                            let nt = 'Invalid value ' + ee(qe);
                                            throw (
                                              (Gt.length > 0 &&
                                                (nt += ` at "value${_o(Gt)}"`),
                                              (Ue.message =
                                                nt + ': ' + Ue.message),
                                              Ue)
                                            );
                                          }
                                        ) {
                                          return (function Gt(qe, Ue, nt, Nt) {
                                            if (Oe(Ue))
                                              return qe != null
                                                ? Gt(qe, Ue.ofType, nt, Nt)
                                                : void nt(
                                                    Tt(Nt),
                                                    qe,
                                                    new j(
                                                      `Expected non-nullable type "${ee(
                                                        Ue
                                                      )}" not to be null.`
                                                    )
                                                  );
                                            if (qe == null) return null;
                                            if (Me(Ue)) {
                                              let At = Ue.ofType;
                                              return zi(qe)
                                                ? Array.from(qe, (rn, ze) =>
                                                    Gt(
                                                      rn,
                                                      At,
                                                      nt,
                                                      or(Nt, ze, void 0)
                                                    )
                                                  )
                                                : [Gt(qe, At, nt, Nt)];
                                            }
                                            if (ke(Ue)) {
                                              if (
                                                !Ct(qe) ||
                                                Array.isArray(qe)
                                              ) {
                                                nt(
                                                  Tt(Nt),
                                                  qe,
                                                  new j(
                                                    `Expected type "${Ue.name}" to be an object.`
                                                  )
                                                );
                                                return;
                                              }
                                              let At = {},
                                                rn = Ue.getFields();
                                              for (let ze of Object.values(
                                                rn
                                              )) {
                                                let gn = qe[ze.name];
                                                if (gn === void 0) {
                                                  if (
                                                    ze.defaultValue !== void 0
                                                  )
                                                    At[ze.name] =
                                                      ze.defaultValue;
                                                  else if (Oe(ze.type)) {
                                                    let Ei = ee(ze.type);
                                                    nt(
                                                      Tt(Nt),
                                                      qe,
                                                      new j(
                                                        `Field "${ze.name}" of required type "${Ei}" was not provided.`
                                                      )
                                                    );
                                                  }
                                                  continue;
                                                }
                                                At[ze.name] = Gt(
                                                  gn,
                                                  ze.type,
                                                  nt,
                                                  or(Nt, ze.name, Ue.name)
                                                );
                                              }
                                              for (let ze of Object.keys(qe))
                                                if (!rn[ze]) {
                                                  let gn = an(
                                                    ze,
                                                    Object.keys(Ue.getFields())
                                                  );
                                                  nt(
                                                    Tt(Nt),
                                                    qe,
                                                    new j(
                                                      `Field "${ze}" is not defined by type "${Ue.name}".` +
                                                        Ht(gn)
                                                    )
                                                  );
                                                }
                                              if (Ue.isOneOf) {
                                                let ze = Object.keys(At);
                                                ze.length !== 1 &&
                                                  nt(
                                                    Tt(Nt),
                                                    qe,
                                                    new j(
                                                      `Exactly one key must be specified for OneOf type "${Ue.name}".`
                                                    )
                                                  );
                                                let gn = ze[0],
                                                  Ei = At[gn];
                                                Ei === null &&
                                                  nt(
                                                    Tt(Nt).concat(gn),
                                                    Ei,
                                                    new j(
                                                      `Field "${gn}" must be non-null.`
                                                    )
                                                  );
                                              }
                                              return At;
                                            }
                                            if (vt(Ue)) {
                                              let At;
                                              try {
                                                At = Ue.parseValue(qe);
                                              } catch (rn) {
                                                rn instanceof j
                                                  ? nt(Tt(Nt), qe, rn)
                                                  : nt(
                                                      Tt(Nt),
                                                      qe,
                                                      new j(
                                                        `Expected type "${Ue.name}". ` +
                                                          rn.message,
                                                        { originalError: rn }
                                                      )
                                                    );
                                                return;
                                              }
                                              return (
                                                At === void 0 &&
                                                  nt(
                                                    Tt(Nt),
                                                    qe,
                                                    new j(
                                                      `Expected type "${Ue.name}".`
                                                    )
                                                  ),
                                                At
                                              );
                                            }
                                            mt(
                                              !1,
                                              'Unexpected input type: ' + ee(Ue)
                                            );
                                          })(Yt, qs, bi, void 0);
                                        })(nu, Ln, (Yt, qs, bi) => {
                                          let Gt =
                                            `Variable "$${nn}" got invalid value ` +
                                            ee(qs);
                                          Yt.length > 0 &&
                                            (Gt += ` at "${nn}${_o(Yt)}"`),
                                            Ti(
                                              new j(Gt + '; ' + bi.message, {
                                                nodes: tn,
                                                originalError: bi,
                                              })
                                            );
                                        });
                                      }
                                      return Vs;
                                    })(Je, Et, Dp, (Bs) => {
                                      if (eu != null && Tr.length >= eu)
                                        throw new j(
                                          'Too many errors processing variables, error limit reached. Execution aborted.'
                                        );
                                      Tr.push(Bs);
                                    });
                                    if (Tr.length === 0) return { coerced: Us };
                                  } catch (Us) {
                                    Tr.push(Us);
                                  }
                                  return { errors: Tr };
                                })(
                                  se,
                                  (oe = G.variableDefinitions) !== null &&
                                    oe !== void 0
                                    ? oe
                                    : [],
                                  X ?? {},
                                  {
                                    maxErrors:
                                      (de = en?.maxCoercionErrors) !== null &&
                                      de !== void 0
                                        ? de
                                        : 50,
                                  }
                                );
                                return jt.errors
                                  ? jt.errors
                                  : {
                                      schema: se,
                                      fragments: bt,
                                      rootValue: V,
                                      contextValue: q,
                                      operation: G,
                                      variableValues: jt.coerced,
                                      fieldResolver: Ne ?? Fo,
                                      typeResolver: Re ?? oc,
                                      subscribeFieldResolver: Ke ?? Fo,
                                      errors: [],
                                    };
                              })(O);
                              if (!('schema' in z)) return { errors: z };
                              try {
                                let { operation: H } = z,
                                  ae = (function (oe, de, G) {
                                    let se = oe.schema.getRootType(
                                      de.operation
                                    );
                                    if (se == null)
                                      throw new j(
                                        `Schema is not configured to execute ${de.operation} operation.`,
                                        { nodes: de }
                                      );
                                    let F = Ao(
                                        oe.schema,
                                        oe.fragments,
                                        oe.variableValues,
                                        se,
                                        de.selectionSet
                                      ),
                                      V;
                                    switch (de.operation) {
                                      case fe.QUERY:
                                        return Jr(oe, se, G, V, F);
                                      case fe.MUTATION:
                                        return (function (q, X, ve) {
                                          let Ne = ve;
                                          for (let Re of q)
                                            Ne = Mt(Ne)
                                              ? Ne.then((Ke) => X(Ke, Re))
                                              : X(Ne, Re);
                                          return Ne;
                                        })(
                                          F.entries(),
                                          (q, [X, ve]) => {
                                            let Ne = or(V, X, se.name),
                                              Re = ko(oe, se, G, ve, Ne);
                                            return Re === void 0
                                              ? q
                                              : Mt(Re)
                                              ? Re.then(
                                                  (Ke) => ((q[X] = Ke), q)
                                                )
                                              : ((q[X] = Re), q);
                                          },
                                          Object.create(null)
                                        );
                                      case fe.SUBSCRIPTION:
                                        return Jr(oe, se, G, V, F);
                                    }
                                  })(z, H, Z);
                                return Mt(ae)
                                  ? ae.then(
                                      (oe) => Kr(oe, z.errors),
                                      (oe) => (
                                        z.errors.push(oe), Kr(null, z.errors)
                                      )
                                    )
                                  : Kr(ae, z.errors);
                              } catch (H) {
                                return z.errors.push(H), Kr(null, z.errors);
                              }
                            })({
                              schema: l,
                              document: c,
                              rootValue: p,
                              contextValue: g,
                              variableValues: h,
                              operationName: S,
                              fieldResolver: I,
                              typeResolver: w,
                            });
                      })(e)
                    )
                  ))),
                  new Response(JSON.stringify(n), {
                    status: 200,
                    headers: { 'Content-Type': 'application/json' },
                  })
                );
              } catch (i) {
                return (
                  console.error(i),
                  (r = String(i)),
                  new Response(JSON.stringify({ message: r }), {
                    status: 400,
                    headers: { 'Content-Type': 'application/json' },
                  })
                );
              }
            };
          function Cp(t) {
            return Ru({
              ...t,
              IncrementalCache: $u,
              page: '/api/graphql',
              handler: Ap,
            });
          }
        },
        430: (Ce, xe, ue) => {
          'use strict';
          var pe,
            be,
            W,
            M,
            Q = Object.create,
            m = Object.defineProperty,
            v = Object.getOwnPropertyDescriptor,
            T = Object.getOwnPropertyNames,
            b = Object.getPrototypeOf,
            E = Object.prototype.hasOwnProperty,
            y = (te, me, ye, _e) => {
              if ((me && typeof me == 'object') || typeof me == 'function')
                for (let ne of T(me))
                  E.call(te, ne) ||
                    ne === ye ||
                    m(te, ne, {
                      get: () => me[ne],
                      enumerable: !(_e = v(me, ne)) || _e.enumerable,
                    });
              return te;
            },
            N =
              ((pe = {
                '../../node_modules/dedent-tabs/dist/dedent-tabs.js'(te) {
                  Object.defineProperty(te, '__esModule', { value: !0 }),
                    (te.default = function (me) {
                      for (
                        var ye = typeof me == 'string' ? [me] : me.raw,
                          _e = '',
                          ne = 0;
                        ne < ye.length;
                        ne++
                      )
                        if (
                          ((_e += ye[ne]
                            .replace(/\\\n[ \t]*/g, '')
                            .replace(/\\`/g, '`')
                            .replace(/\\\$/g, '$')
                            .replace(/\\\{/g, '{')),
                          ne <
                            (1 >= arguments.length ? 0 : arguments.length - 1))
                        ) {
                          var fe = _e
                            .substring(
                              _e.lastIndexOf(`
`) + 1
                            )
                            .match(/^(\s*)\S?/);
                          _e += (
                            (1 > ne + 1 || arguments.length <= ne + 1
                              ? void 0
                              : arguments[ne + 1]) + ''
                          ).replace(
                            /\n/g,
                            `
` + fe[1]
                          );
                        }
                      var U = _e.split(`
`),
                        f = null;
                      if (
                        (U.forEach(function (re) {
                          var Se = re.match(/^(\s+)\S+/);
                          if (Se) {
                            var ie = Se[1].length;
                            f = f ? (0, Math.min)(f, ie) : ie;
                          }
                        }),
                        f !== null)
                      ) {
                        var _ = f;
                        _e = U.map(function (re) {
                          return re[0] === ' ' || re[0] === '	'
                            ? re.slice(_)
                            : re;
                        }).join(`
`);
                      }
                      return _e.trim().replace(
                        /\\n/g,
                        `
`
                      );
                    });
                },
              }),
              function () {
                return (
                  be || (0, pe[T(pe)[0]])((be = { exports: {} }).exports, be),
                  be.exports
                );
              }),
            C = {};
          ((te, me) => {
            for (var ye in me) m(te, ye, { get: me[ye], enumerable: !0 });
          })(C, {
            getOptionalRequestContext: () => $,
            getRequestContext: () => K,
          }),
            (Ce.exports = y(m({}, '__esModule', { value: !0 }), C)),
            ue(581);
          var x =
              ((M = (W = N()) != null ? Q(b(W)) : {}),
              y(
                W && W.__esModule
                  ? M
                  : m(M, 'default', { value: W, enumerable: !0 }),
                W
              )),
            L = Symbol.for('__cloudflare-request-context__');
          function $() {
            let te = Le[L];
            if (
              (process?.release?.name === 'node' ? 'nodejs' : 'edge') ==
              'nodejs'
            )
              throw Error(x.default`
			\`getRequestContext\` and \`getOptionalRequestContext\` can only be run
			inside the edge runtime, so please make sure to have included
			\`export const runtime = 'edge'\` in all the routes using such functions
			(regardless of whether they are used directly or indirectly through imports).
		`);
            return te;
          }
          function K() {
            let te = $();
            if (!te)
              throw process?.env?.NEXT_PHASE === 'phase-production-build'
                ? Error(x.default`
				\n\`getRequestContext\` is being called at the top level of a route file, this is not supported
				for more details see https://developers.cloudflare.com/pages/framework-guides/nextjs/ssr/troubleshooting/#top-level-getrequestcontext \n
			`)
                : Error('Failed to retrieve the Cloudflare request context.');
            return te;
          }
        },
        109: (Ce) => {
          'use strict';
          var xe = Object.defineProperty,
            ue = Object.getOwnPropertyDescriptor,
            pe = Object.getOwnPropertyNames,
            be = Object.prototype.hasOwnProperty,
            W = {};
          function M(y) {
            var N;
            let C = [
              'path' in y && y.path && `Path=${y.path}`,
              'expires' in y &&
                (y.expires || y.expires === 0) &&
                `Expires=${(typeof y.expires == 'number'
                  ? new Date(y.expires)
                  : y.expires
                ).toUTCString()}`,
              'maxAge' in y &&
                typeof y.maxAge == 'number' &&
                `Max-Age=${y.maxAge}`,
              'domain' in y && y.domain && `Domain=${y.domain}`,
              'secure' in y && y.secure && 'Secure',
              'httpOnly' in y && y.httpOnly && 'HttpOnly',
              'sameSite' in y && y.sameSite && `SameSite=${y.sameSite}`,
              'priority' in y && y.priority && `Priority=${y.priority}`,
            ].filter(Boolean);
            return `${y.name}=${encodeURIComponent(
              (N = y.value) != null ? N : ''
            )}; ${C.join('; ')}`;
          }
          function Q(y) {
            let N = new Map();
            for (let C of y.split(/; */)) {
              if (!C) continue;
              let x = C.indexOf('=');
              if (x === -1) {
                N.set(C, 'true');
                continue;
              }
              let [L, $] = [C.slice(0, x), C.slice(x + 1)];
              try {
                N.set(L, decodeURIComponent($ ?? 'true'));
              } catch {}
            }
            return N;
          }
          function m(y) {
            var N, C;
            if (!y) return;
            let [[x, L], ...$] = Q(y),
              {
                domain: K,
                expires: te,
                httponly: me,
                maxage: ye,
                path: _e,
                samesite: ne,
                secure: fe,
                priority: U,
              } = Object.fromEntries($.map(([f, _]) => [f.toLowerCase(), _]));
            return (function (f) {
              let _ = {};
              for (let re in f) f[re] && (_[re] = f[re]);
              return _;
            })({
              name: x,
              value: decodeURIComponent(L),
              domain: K,
              ...(te && { expires: new Date(te) }),
              ...(me && { httpOnly: !0 }),
              ...(typeof ye == 'string' && { maxAge: Number(ye) }),
              path: _e,
              ...(ne && {
                sameSite: v.includes((N = (N = ne).toLowerCase())) ? N : void 0,
              }),
              ...(fe && { secure: !0 }),
              ...(U && {
                priority: T.includes((C = (C = U).toLowerCase())) ? C : void 0,
              }),
            });
          }
          ((y, N) => {
            for (var C in N) xe(y, C, { get: N[C], enumerable: !0 });
          })(W, {
            RequestCookies: () => b,
            ResponseCookies: () => E,
            parseCookie: () => Q,
            parseSetCookie: () => m,
            stringifyCookie: () => M,
          }),
            (Ce.exports = ((y, N, C, x) => {
              if ((N && typeof N == 'object') || typeof N == 'function')
                for (let L of pe(N))
                  be.call(y, L) ||
                    L === void 0 ||
                    xe(y, L, {
                      get: () => N[L],
                      enumerable: !(x = ue(N, L)) || x.enumerable,
                    });
              return y;
            })(xe({}, '__esModule', { value: !0 }), W));
          var v = ['strict', 'lax', 'none'],
            T = ['low', 'medium', 'high'],
            b = class {
              constructor(y) {
                (this._parsed = new Map()), (this._headers = y);
                let N = y.get('cookie');
                if (N)
                  for (let [C, x] of Q(N))
                    this._parsed.set(C, { name: C, value: x });
              }
              [Symbol.iterator]() {
                return this._parsed[Symbol.iterator]();
              }
              get size() {
                return this._parsed.size;
              }
              get(...y) {
                let N = typeof y[0] == 'string' ? y[0] : y[0].name;
                return this._parsed.get(N);
              }
              getAll(...y) {
                var N;
                let C = Array.from(this._parsed);
                if (!y.length) return C.map(([L, $]) => $);
                let x =
                  typeof y[0] == 'string'
                    ? y[0]
                    : (N = y[0]) == null
                    ? void 0
                    : N.name;
                return C.filter(([L]) => L === x).map(([L, $]) => $);
              }
              has(y) {
                return this._parsed.has(y);
              }
              set(...y) {
                let [N, C] = y.length === 1 ? [y[0].name, y[0].value] : y,
                  x = this._parsed;
                return (
                  x.set(N, { name: N, value: C }),
                  this._headers.set(
                    'cookie',
                    Array.from(x)
                      .map(([L, $]) => M($))
                      .join('; ')
                  ),
                  this
                );
              }
              delete(y) {
                let N = this._parsed,
                  C = Array.isArray(y)
                    ? y.map((x) => N.delete(x))
                    : N.delete(y);
                return (
                  this._headers.set(
                    'cookie',
                    Array.from(N)
                      .map(([x, L]) => M(L))
                      .join('; ')
                  ),
                  C
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
                  .map((y) => `${y.name}=${encodeURIComponent(y.value)}`)
                  .join('; ');
              }
            },
            E = class {
              constructor(y) {
                var N, C, x;
                (this._parsed = new Map()), (this._headers = y);
                let L =
                  (x =
                    (C = (N = y.getSetCookie) == null ? void 0 : N.call(y)) !=
                    null
                      ? C
                      : y.get('set-cookie')) != null
                    ? x
                    : [];
                for (let $ of Array.isArray(L)
                  ? L
                  : (function (K) {
                      if (!K) return [];
                      var te,
                        me,
                        ye,
                        _e,
                        ne,
                        fe = [],
                        U = 0;
                      function f() {
                        for (; U < K.length && /\s/.test(K.charAt(U)); ) U += 1;
                        return U < K.length;
                      }
                      for (; U < K.length; ) {
                        for (te = U, ne = !1; f(); )
                          if ((me = K.charAt(U)) === ',') {
                            for (
                              ye = U, U += 1, f(), _e = U;
                              U < K.length &&
                              (me = K.charAt(U)) !== '=' &&
                              me !== ';' &&
                              me !== ',';

                            )
                              U += 1;
                            U < K.length && K.charAt(U) === '='
                              ? ((ne = !0),
                                (U = _e),
                                fe.push(K.substring(te, ye)),
                                (te = U))
                              : (U = ye + 1);
                          } else U += 1;
                        (!ne || U >= K.length) &&
                          fe.push(K.substring(te, K.length));
                      }
                      return fe;
                    })(L)) {
                  let K = m($);
                  K && this._parsed.set(K.name, K);
                }
              }
              get(...y) {
                let N = typeof y[0] == 'string' ? y[0] : y[0].name;
                return this._parsed.get(N);
              }
              getAll(...y) {
                var N;
                let C = Array.from(this._parsed.values());
                if (!y.length) return C;
                let x =
                  typeof y[0] == 'string'
                    ? y[0]
                    : (N = y[0]) == null
                    ? void 0
                    : N.name;
                return C.filter((L) => L.name === x);
              }
              has(y) {
                return this._parsed.has(y);
              }
              set(...y) {
                let [N, C, x] =
                    y.length === 1 ? [y[0].name, y[0].value, y[0]] : y,
                  L = this._parsed;
                return (
                  L.set(
                    N,
                    (function ($ = { name: '', value: '' }) {
                      return (
                        typeof $.expires == 'number' &&
                          ($.expires = new Date($.expires)),
                        $.maxAge &&
                          ($.expires = new Date(Date.now() + 1e3 * $.maxAge)),
                        ($.path === null || $.path === void 0) &&
                          ($.path = '/'),
                        $
                      );
                    })({ name: N, value: C, ...x })
                  ),
                  (function ($, K) {
                    for (let [, te] of (K.delete('set-cookie'), $)) {
                      let me = M(te);
                      K.append('set-cookie', me);
                    }
                  })(L, this._headers),
                  this
                );
              }
              delete(...y) {
                let [N, C, x] =
                  typeof y[0] == 'string'
                    ? [y[0]]
                    : [y[0].name, y[0].path, y[0].domain];
                return this.set({
                  name: N,
                  path: C,
                  domain: x,
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
                return [...this._parsed.values()].map(M).join('; ');
              }
            };
        },
        855: (Ce, xe, ue) => {
          'use strict';
          (() => {
            var pe = {
                491: (Q, m, v) => {
                  Object.defineProperty(m, '__esModule', { value: !0 }),
                    (m.ContextAPI = void 0);
                  let T = v(223),
                    b = v(172),
                    E = v(930),
                    y = 'context',
                    N = new T.NoopContextManager();
                  class C {
                    constructor() {}
                    static getInstance() {
                      return (
                        this._instance || (this._instance = new C()),
                        this._instance
                      );
                    }
                    setGlobalContextManager(L) {
                      return (0, b.registerGlobal)(y, L, E.DiagAPI.instance());
                    }
                    active() {
                      return this._getContextManager().active();
                    }
                    with(L, $, K, ...te) {
                      return this._getContextManager().with(L, $, K, ...te);
                    }
                    bind(L, $) {
                      return this._getContextManager().bind(L, $);
                    }
                    _getContextManager() {
                      return (0, b.getGlobal)(y) || N;
                    }
                    disable() {
                      this._getContextManager().disable(),
                        (0, b.unregisterGlobal)(y, E.DiagAPI.instance());
                    }
                  }
                  m.ContextAPI = C;
                },
                930: (Q, m, v) => {
                  Object.defineProperty(m, '__esModule', { value: !0 }),
                    (m.DiagAPI = void 0);
                  let T = v(56),
                    b = v(912),
                    E = v(957),
                    y = v(172);
                  class N {
                    constructor() {
                      function x($) {
                        return function (...K) {
                          let te = (0, y.getGlobal)('diag');
                          if (te) return te[$](...K);
                        };
                      }
                      let L = this;
                      (L.setLogger = (
                        $,
                        K = { logLevel: E.DiagLogLevel.INFO }
                      ) => {
                        var te, me, ye;
                        if ($ === L) {
                          let fe = Error(
                            'Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation'
                          );
                          return (
                            L.error(
                              (te = fe.stack) !== null && te !== void 0
                                ? te
                                : fe.message
                            ),
                            !1
                          );
                        }
                        typeof K == 'number' && (K = { logLevel: K });
                        let _e = (0, y.getGlobal)('diag'),
                          ne = (0, b.createLogLevelDiagLogger)(
                            (me = K.logLevel) !== null && me !== void 0
                              ? me
                              : E.DiagLogLevel.INFO,
                            $
                          );
                        if (_e && !K.suppressOverrideMessage) {
                          let fe =
                            (ye = Error().stack) !== null && ye !== void 0
                              ? ye
                              : '<failed to generate stacktrace>';
                          _e.warn(
                            `Current logger will be overwritten from ${fe}`
                          ),
                            ne.warn(
                              `Current logger will overwrite one already registered from ${fe}`
                            );
                        }
                        return (0, y.registerGlobal)('diag', ne, L, !0);
                      }),
                        (L.disable = () => {
                          (0, y.unregisterGlobal)('diag', L);
                        }),
                        (L.createComponentLogger = ($) =>
                          new T.DiagComponentLogger($)),
                        (L.verbose = x('verbose')),
                        (L.debug = x('debug')),
                        (L.info = x('info')),
                        (L.warn = x('warn')),
                        (L.error = x('error'));
                    }
                    static instance() {
                      return (
                        this._instance || (this._instance = new N()),
                        this._instance
                      );
                    }
                  }
                  m.DiagAPI = N;
                },
                653: (Q, m, v) => {
                  Object.defineProperty(m, '__esModule', { value: !0 }),
                    (m.MetricsAPI = void 0);
                  let T = v(660),
                    b = v(172),
                    E = v(930),
                    y = 'metrics';
                  class N {
                    constructor() {}
                    static getInstance() {
                      return (
                        this._instance || (this._instance = new N()),
                        this._instance
                      );
                    }
                    setGlobalMeterProvider(x) {
                      return (0, b.registerGlobal)(y, x, E.DiagAPI.instance());
                    }
                    getMeterProvider() {
                      return (0, b.getGlobal)(y) || T.NOOP_METER_PROVIDER;
                    }
                    getMeter(x, L, $) {
                      return this.getMeterProvider().getMeter(x, L, $);
                    }
                    disable() {
                      (0, b.unregisterGlobal)(y, E.DiagAPI.instance());
                    }
                  }
                  m.MetricsAPI = N;
                },
                181: (Q, m, v) => {
                  Object.defineProperty(m, '__esModule', { value: !0 }),
                    (m.PropagationAPI = void 0);
                  let T = v(172),
                    b = v(874),
                    E = v(194),
                    y = v(277),
                    N = v(369),
                    C = v(930),
                    x = 'propagation',
                    L = new b.NoopTextMapPropagator();
                  class $ {
                    constructor() {
                      (this.createBaggage = N.createBaggage),
                        (this.getBaggage = y.getBaggage),
                        (this.getActiveBaggage = y.getActiveBaggage),
                        (this.setBaggage = y.setBaggage),
                        (this.deleteBaggage = y.deleteBaggage);
                    }
                    static getInstance() {
                      return (
                        this._instance || (this._instance = new $()),
                        this._instance
                      );
                    }
                    setGlobalPropagator(te) {
                      return (0, T.registerGlobal)(x, te, C.DiagAPI.instance());
                    }
                    inject(te, me, ye = E.defaultTextMapSetter) {
                      return this._getGlobalPropagator().inject(te, me, ye);
                    }
                    extract(te, me, ye = E.defaultTextMapGetter) {
                      return this._getGlobalPropagator().extract(te, me, ye);
                    }
                    fields() {
                      return this._getGlobalPropagator().fields();
                    }
                    disable() {
                      (0, T.unregisterGlobal)(x, C.DiagAPI.instance());
                    }
                    _getGlobalPropagator() {
                      return (0, T.getGlobal)(x) || L;
                    }
                  }
                  m.PropagationAPI = $;
                },
                997: (Q, m, v) => {
                  Object.defineProperty(m, '__esModule', { value: !0 }),
                    (m.TraceAPI = void 0);
                  let T = v(172),
                    b = v(846),
                    E = v(139),
                    y = v(607),
                    N = v(930),
                    C = 'trace';
                  class x {
                    constructor() {
                      (this._proxyTracerProvider = new b.ProxyTracerProvider()),
                        (this.wrapSpanContext = E.wrapSpanContext),
                        (this.isSpanContextValid = E.isSpanContextValid),
                        (this.deleteSpan = y.deleteSpan),
                        (this.getSpan = y.getSpan),
                        (this.getActiveSpan = y.getActiveSpan),
                        (this.getSpanContext = y.getSpanContext),
                        (this.setSpan = y.setSpan),
                        (this.setSpanContext = y.setSpanContext);
                    }
                    static getInstance() {
                      return (
                        this._instance || (this._instance = new x()),
                        this._instance
                      );
                    }
                    setGlobalTracerProvider($) {
                      let K = (0, T.registerGlobal)(
                        C,
                        this._proxyTracerProvider,
                        N.DiagAPI.instance()
                      );
                      return K && this._proxyTracerProvider.setDelegate($), K;
                    }
                    getTracerProvider() {
                      return (0, T.getGlobal)(C) || this._proxyTracerProvider;
                    }
                    getTracer($, K) {
                      return this.getTracerProvider().getTracer($, K);
                    }
                    disable() {
                      (0, T.unregisterGlobal)(C, N.DiagAPI.instance()),
                        (this._proxyTracerProvider =
                          new b.ProxyTracerProvider());
                    }
                  }
                  m.TraceAPI = x;
                },
                277: (Q, m, v) => {
                  Object.defineProperty(m, '__esModule', { value: !0 }),
                    (m.deleteBaggage =
                      m.setBaggage =
                      m.getActiveBaggage =
                      m.getBaggage =
                        void 0);
                  let T = v(491),
                    b = (0, v(780).createContextKey)(
                      'OpenTelemetry Baggage Key'
                    );
                  function E(y) {
                    return y.getValue(b) || void 0;
                  }
                  (m.getBaggage = E),
                    (m.getActiveBaggage = function () {
                      return E(T.ContextAPI.getInstance().active());
                    }),
                    (m.setBaggage = function (y, N) {
                      return y.setValue(b, N);
                    }),
                    (m.deleteBaggage = function (y) {
                      return y.deleteValue(b);
                    });
                },
                993: (Q, m) => {
                  Object.defineProperty(m, '__esModule', { value: !0 }),
                    (m.BaggageImpl = void 0);
                  class v {
                    constructor(b) {
                      this._entries = b ? new Map(b) : new Map();
                    }
                    getEntry(b) {
                      let E = this._entries.get(b);
                      if (E) return Object.assign({}, E);
                    }
                    getAllEntries() {
                      return Array.from(this._entries.entries()).map(
                        ([b, E]) => [b, E]
                      );
                    }
                    setEntry(b, E) {
                      let y = new v(this._entries);
                      return y._entries.set(b, E), y;
                    }
                    removeEntry(b) {
                      let E = new v(this._entries);
                      return E._entries.delete(b), E;
                    }
                    removeEntries(...b) {
                      let E = new v(this._entries);
                      for (let y of b) E._entries.delete(y);
                      return E;
                    }
                    clear() {
                      return new v();
                    }
                  }
                  m.BaggageImpl = v;
                },
                830: (Q, m) => {
                  Object.defineProperty(m, '__esModule', { value: !0 }),
                    (m.baggageEntryMetadataSymbol = void 0),
                    (m.baggageEntryMetadataSymbol = Symbol(
                      'BaggageEntryMetadata'
                    ));
                },
                369: (Q, m, v) => {
                  Object.defineProperty(m, '__esModule', { value: !0 }),
                    (m.baggageEntryMetadataFromString = m.createBaggage =
                      void 0);
                  let T = v(930),
                    b = v(993),
                    E = v(830),
                    y = T.DiagAPI.instance();
                  (m.createBaggage = function (N = {}) {
                    return new b.BaggageImpl(new Map(Object.entries(N)));
                  }),
                    (m.baggageEntryMetadataFromString = function (N) {
                      return (
                        typeof N != 'string' &&
                          (y.error(
                            `Cannot create baggage metadata from unknown type: ${typeof N}`
                          ),
                          (N = '')),
                        {
                          __TYPE__: E.baggageEntryMetadataSymbol,
                          toString: () => N,
                        }
                      );
                    });
                },
                67: (Q, m, v) => {
                  Object.defineProperty(m, '__esModule', { value: !0 }),
                    (m.context = void 0);
                  let T = v(491);
                  m.context = T.ContextAPI.getInstance();
                },
                223: (Q, m, v) => {
                  Object.defineProperty(m, '__esModule', { value: !0 }),
                    (m.NoopContextManager = void 0);
                  let T = v(780);
                  class b {
                    active() {
                      return T.ROOT_CONTEXT;
                    }
                    with(y, N, C, ...x) {
                      return N.call(C, ...x);
                    }
                    bind(y, N) {
                      return N;
                    }
                    enable() {
                      return this;
                    }
                    disable() {
                      return this;
                    }
                  }
                  m.NoopContextManager = b;
                },
                780: (Q, m) => {
                  Object.defineProperty(m, '__esModule', { value: !0 }),
                    (m.ROOT_CONTEXT = m.createContextKey = void 0),
                    (m.createContextKey = function (T) {
                      return Symbol.for(T);
                    });
                  class v {
                    constructor(b) {
                      let E = this;
                      (E._currentContext = b ? new Map(b) : new Map()),
                        (E.getValue = (y) => E._currentContext.get(y)),
                        (E.setValue = (y, N) => {
                          let C = new v(E._currentContext);
                          return C._currentContext.set(y, N), C;
                        }),
                        (E.deleteValue = (y) => {
                          let N = new v(E._currentContext);
                          return N._currentContext.delete(y), N;
                        });
                    }
                  }
                  m.ROOT_CONTEXT = new v();
                },
                506: (Q, m, v) => {
                  Object.defineProperty(m, '__esModule', { value: !0 }),
                    (m.diag = void 0);
                  let T = v(930);
                  m.diag = T.DiagAPI.instance();
                },
                56: (Q, m, v) => {
                  Object.defineProperty(m, '__esModule', { value: !0 }),
                    (m.DiagComponentLogger = void 0);
                  let T = v(172);
                  class b {
                    constructor(N) {
                      this._namespace = N.namespace || 'DiagComponentLogger';
                    }
                    debug(...N) {
                      return E('debug', this._namespace, N);
                    }
                    error(...N) {
                      return E('error', this._namespace, N);
                    }
                    info(...N) {
                      return E('info', this._namespace, N);
                    }
                    warn(...N) {
                      return E('warn', this._namespace, N);
                    }
                    verbose(...N) {
                      return E('verbose', this._namespace, N);
                    }
                  }
                  function E(y, N, C) {
                    let x = (0, T.getGlobal)('diag');
                    if (x) return C.unshift(N), x[y](...C);
                  }
                  m.DiagComponentLogger = b;
                },
                972: (Q, m) => {
                  Object.defineProperty(m, '__esModule', { value: !0 }),
                    (m.DiagConsoleLogger = void 0);
                  let v = [
                    { n: 'error', c: 'error' },
                    { n: 'warn', c: 'warn' },
                    { n: 'info', c: 'info' },
                    { n: 'debug', c: 'debug' },
                    { n: 'verbose', c: 'trace' },
                  ];
                  class T {
                    constructor() {
                      for (let E = 0; E < v.length; E++)
                        this[v[E].n] = (function (y) {
                          return function (...N) {
                            if (console) {
                              let C = console[y];
                              if (
                                (typeof C != 'function' && (C = console.log),
                                typeof C == 'function')
                              )
                                return C.apply(console, N);
                            }
                          };
                        })(v[E].c);
                    }
                  }
                  m.DiagConsoleLogger = T;
                },
                912: (Q, m, v) => {
                  Object.defineProperty(m, '__esModule', { value: !0 }),
                    (m.createLogLevelDiagLogger = void 0);
                  let T = v(957);
                  m.createLogLevelDiagLogger = function (b, E) {
                    function y(N, C) {
                      let x = E[N];
                      return typeof x == 'function' && b >= C
                        ? x.bind(E)
                        : function () {};
                    }
                    return (
                      b < T.DiagLogLevel.NONE
                        ? (b = T.DiagLogLevel.NONE)
                        : b > T.DiagLogLevel.ALL && (b = T.DiagLogLevel.ALL),
                      (E = E || {}),
                      {
                        error: y('error', T.DiagLogLevel.ERROR),
                        warn: y('warn', T.DiagLogLevel.WARN),
                        info: y('info', T.DiagLogLevel.INFO),
                        debug: y('debug', T.DiagLogLevel.DEBUG),
                        verbose: y('verbose', T.DiagLogLevel.VERBOSE),
                      }
                    );
                  };
                },
                957: (Q, m) => {
                  Object.defineProperty(m, '__esModule', { value: !0 }),
                    (m.DiagLogLevel = void 0),
                    (function (v) {
                      (v[(v.NONE = 0)] = 'NONE'),
                        (v[(v.ERROR = 30)] = 'ERROR'),
                        (v[(v.WARN = 50)] = 'WARN'),
                        (v[(v.INFO = 60)] = 'INFO'),
                        (v[(v.DEBUG = 70)] = 'DEBUG'),
                        (v[(v.VERBOSE = 80)] = 'VERBOSE'),
                        (v[(v.ALL = 9999)] = 'ALL');
                    })(m.DiagLogLevel || (m.DiagLogLevel = {}));
                },
                172: (Q, m, v) => {
                  Object.defineProperty(m, '__esModule', { value: !0 }),
                    (m.unregisterGlobal =
                      m.getGlobal =
                      m.registerGlobal =
                        void 0);
                  let T = v(200),
                    b = v(521),
                    E = v(130),
                    y = b.VERSION.split('.')[0],
                    N = Symbol.for(`opentelemetry.js.api.${y}`),
                    C = T._globalThis;
                  (m.registerGlobal = function (x, L, $, K = !1) {
                    var te;
                    let me = (C[N] =
                      (te = C[N]) !== null && te !== void 0
                        ? te
                        : { version: b.VERSION });
                    if (!K && me[x]) {
                      let ye = Error(
                        `@opentelemetry/api: Attempted duplicate registration of API: ${x}`
                      );
                      return $.error(ye.stack || ye.message), !1;
                    }
                    if (me.version !== b.VERSION) {
                      let ye = Error(
                        `@opentelemetry/api: Registration of version v${me.version} for ${x} does not match previously registered API v${b.VERSION}`
                      );
                      return $.error(ye.stack || ye.message), !1;
                    }
                    return (
                      (me[x] = L),
                      $.debug(
                        `@opentelemetry/api: Registered a global for ${x} v${b.VERSION}.`
                      ),
                      !0
                    );
                  }),
                    (m.getGlobal = function (x) {
                      var L, $;
                      let K =
                        (L = C[N]) === null || L === void 0
                          ? void 0
                          : L.version;
                      if (K && (0, E.isCompatible)(K))
                        return ($ = C[N]) === null || $ === void 0
                          ? void 0
                          : $[x];
                    }),
                    (m.unregisterGlobal = function (x, L) {
                      L.debug(
                        `@opentelemetry/api: Unregistering a global for ${x} v${b.VERSION}.`
                      );
                      let $ = C[N];
                      $ && delete $[x];
                    });
                },
                130: (Q, m, v) => {
                  Object.defineProperty(m, '__esModule', { value: !0 }),
                    (m.isCompatible = m._makeCompatibilityCheck = void 0);
                  let T = v(521),
                    b = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
                  function E(y) {
                    let N = new Set([y]),
                      C = new Set(),
                      x = y.match(b);
                    if (!x) return () => !1;
                    let L = {
                      major: +x[1],
                      minor: +x[2],
                      patch: +x[3],
                      prerelease: x[4],
                    };
                    if (L.prerelease != null)
                      return function (K) {
                        return K === y;
                      };
                    function $(K) {
                      return C.add(K), !1;
                    }
                    return function (K) {
                      if (N.has(K)) return !0;
                      if (C.has(K)) return !1;
                      let te = K.match(b);
                      if (!te) return $(K);
                      let me = {
                        major: +te[1],
                        minor: +te[2],
                        patch: +te[3],
                        prerelease: te[4],
                      };
                      return me.prerelease != null || L.major !== me.major
                        ? $(K)
                        : L.major === 0
                        ? L.minor === me.minor && L.patch <= me.patch
                          ? (N.add(K), !0)
                          : $(K)
                        : L.minor <= me.minor
                        ? (N.add(K), !0)
                        : $(K);
                    };
                  }
                  (m._makeCompatibilityCheck = E),
                    (m.isCompatible = E(T.VERSION));
                },
                886: (Q, m, v) => {
                  Object.defineProperty(m, '__esModule', { value: !0 }),
                    (m.metrics = void 0);
                  let T = v(653);
                  m.metrics = T.MetricsAPI.getInstance();
                },
                901: (Q, m) => {
                  Object.defineProperty(m, '__esModule', { value: !0 }),
                    (m.ValueType = void 0),
                    (function (v) {
                      (v[(v.INT = 0)] = 'INT'), (v[(v.DOUBLE = 1)] = 'DOUBLE');
                    })(m.ValueType || (m.ValueType = {}));
                },
                102: (Q, m) => {
                  Object.defineProperty(m, '__esModule', { value: !0 }),
                    (m.createNoopMeter =
                      m.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC =
                      m.NOOP_OBSERVABLE_GAUGE_METRIC =
                      m.NOOP_OBSERVABLE_COUNTER_METRIC =
                      m.NOOP_UP_DOWN_COUNTER_METRIC =
                      m.NOOP_HISTOGRAM_METRIC =
                      m.NOOP_COUNTER_METRIC =
                      m.NOOP_METER =
                      m.NoopObservableUpDownCounterMetric =
                      m.NoopObservableGaugeMetric =
                      m.NoopObservableCounterMetric =
                      m.NoopObservableMetric =
                      m.NoopHistogramMetric =
                      m.NoopUpDownCounterMetric =
                      m.NoopCounterMetric =
                      m.NoopMetric =
                      m.NoopMeter =
                        void 0);
                  class v {
                    constructor() {}
                    createHistogram(K, te) {
                      return m.NOOP_HISTOGRAM_METRIC;
                    }
                    createCounter(K, te) {
                      return m.NOOP_COUNTER_METRIC;
                    }
                    createUpDownCounter(K, te) {
                      return m.NOOP_UP_DOWN_COUNTER_METRIC;
                    }
                    createObservableGauge(K, te) {
                      return m.NOOP_OBSERVABLE_GAUGE_METRIC;
                    }
                    createObservableCounter(K, te) {
                      return m.NOOP_OBSERVABLE_COUNTER_METRIC;
                    }
                    createObservableUpDownCounter(K, te) {
                      return m.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC;
                    }
                    addBatchObservableCallback(K, te) {}
                    removeBatchObservableCallback(K) {}
                  }
                  m.NoopMeter = v;
                  class T {}
                  m.NoopMetric = T;
                  class b extends T {
                    add(K, te) {}
                  }
                  m.NoopCounterMetric = b;
                  class E extends T {
                    add(K, te) {}
                  }
                  m.NoopUpDownCounterMetric = E;
                  class y extends T {
                    record(K, te) {}
                  }
                  m.NoopHistogramMetric = y;
                  class N {
                    addCallback(K) {}
                    removeCallback(K) {}
                  }
                  m.NoopObservableMetric = N;
                  class C extends N {}
                  m.NoopObservableCounterMetric = C;
                  class x extends N {}
                  m.NoopObservableGaugeMetric = x;
                  class L extends N {}
                  (m.NoopObservableUpDownCounterMetric = L),
                    (m.NOOP_METER = new v()),
                    (m.NOOP_COUNTER_METRIC = new b()),
                    (m.NOOP_HISTOGRAM_METRIC = new y()),
                    (m.NOOP_UP_DOWN_COUNTER_METRIC = new E()),
                    (m.NOOP_OBSERVABLE_COUNTER_METRIC = new C()),
                    (m.NOOP_OBSERVABLE_GAUGE_METRIC = new x()),
                    (m.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = new L()),
                    (m.createNoopMeter = function () {
                      return m.NOOP_METER;
                    });
                },
                660: (Q, m, v) => {
                  Object.defineProperty(m, '__esModule', { value: !0 }),
                    (m.NOOP_METER_PROVIDER = m.NoopMeterProvider = void 0);
                  let T = v(102);
                  class b {
                    getMeter(y, N, C) {
                      return T.NOOP_METER;
                    }
                  }
                  (m.NoopMeterProvider = b), (m.NOOP_METER_PROVIDER = new b());
                },
                200: function (Q, m, v) {
                  var T =
                      (this && this.__createBinding) ||
                      (Object.create
                        ? function (E, y, N, C) {
                            C === void 0 && (C = N),
                              Object.defineProperty(E, C, {
                                enumerable: !0,
                                get: function () {
                                  return y[N];
                                },
                              });
                          }
                        : function (E, y, N, C) {
                            C === void 0 && (C = N), (E[C] = y[N]);
                          }),
                    b =
                      (this && this.__exportStar) ||
                      function (E, y) {
                        for (var N in E)
                          N === 'default' ||
                            Object.prototype.hasOwnProperty.call(y, N) ||
                            T(y, E, N);
                      };
                  Object.defineProperty(m, '__esModule', { value: !0 }),
                    b(v(46), m);
                },
                651: (Q, m) => {
                  Object.defineProperty(m, '__esModule', { value: !0 }),
                    (m._globalThis = void 0),
                    (m._globalThis = typeof Le == 'object' ? Le : ue.g);
                },
                46: function (Q, m, v) {
                  var T =
                      (this && this.__createBinding) ||
                      (Object.create
                        ? function (E, y, N, C) {
                            C === void 0 && (C = N),
                              Object.defineProperty(E, C, {
                                enumerable: !0,
                                get: function () {
                                  return y[N];
                                },
                              });
                          }
                        : function (E, y, N, C) {
                            C === void 0 && (C = N), (E[C] = y[N]);
                          }),
                    b =
                      (this && this.__exportStar) ||
                      function (E, y) {
                        for (var N in E)
                          N === 'default' ||
                            Object.prototype.hasOwnProperty.call(y, N) ||
                            T(y, E, N);
                      };
                  Object.defineProperty(m, '__esModule', { value: !0 }),
                    b(v(651), m);
                },
                939: (Q, m, v) => {
                  Object.defineProperty(m, '__esModule', { value: !0 }),
                    (m.propagation = void 0);
                  let T = v(181);
                  m.propagation = T.PropagationAPI.getInstance();
                },
                874: (Q, m) => {
                  Object.defineProperty(m, '__esModule', { value: !0 }),
                    (m.NoopTextMapPropagator = void 0);
                  class v {
                    inject(b, E) {}
                    extract(b, E) {
                      return b;
                    }
                    fields() {
                      return [];
                    }
                  }
                  m.NoopTextMapPropagator = v;
                },
                194: (Q, m) => {
                  Object.defineProperty(m, '__esModule', { value: !0 }),
                    (m.defaultTextMapSetter = m.defaultTextMapGetter = void 0),
                    (m.defaultTextMapGetter = {
                      get(v, T) {
                        if (v != null) return v[T];
                      },
                      keys: (v) => (v == null ? [] : Object.keys(v)),
                    }),
                    (m.defaultTextMapSetter = {
                      set(v, T, b) {
                        v != null && (v[T] = b);
                      },
                    });
                },
                845: (Q, m, v) => {
                  Object.defineProperty(m, '__esModule', { value: !0 }),
                    (m.trace = void 0);
                  let T = v(997);
                  m.trace = T.TraceAPI.getInstance();
                },
                403: (Q, m, v) => {
                  Object.defineProperty(m, '__esModule', { value: !0 }),
                    (m.NonRecordingSpan = void 0);
                  let T = v(476);
                  class b {
                    constructor(y = T.INVALID_SPAN_CONTEXT) {
                      this._spanContext = y;
                    }
                    spanContext() {
                      return this._spanContext;
                    }
                    setAttribute(y, N) {
                      return this;
                    }
                    setAttributes(y) {
                      return this;
                    }
                    addEvent(y, N) {
                      return this;
                    }
                    setStatus(y) {
                      return this;
                    }
                    updateName(y) {
                      return this;
                    }
                    end(y) {}
                    isRecording() {
                      return !1;
                    }
                    recordException(y, N) {}
                  }
                  m.NonRecordingSpan = b;
                },
                614: (Q, m, v) => {
                  Object.defineProperty(m, '__esModule', { value: !0 }),
                    (m.NoopTracer = void 0);
                  let T = v(491),
                    b = v(607),
                    E = v(403),
                    y = v(139),
                    N = T.ContextAPI.getInstance();
                  class C {
                    startSpan(L, $, K = N.active()) {
                      if ($?.root) return new E.NonRecordingSpan();
                      let te = K && (0, b.getSpanContext)(K);
                      return typeof te == 'object' &&
                        typeof te.spanId == 'string' &&
                        typeof te.traceId == 'string' &&
                        typeof te.traceFlags == 'number' &&
                        (0, y.isSpanContextValid)(te)
                        ? new E.NonRecordingSpan(te)
                        : new E.NonRecordingSpan();
                    }
                    startActiveSpan(L, $, K, te) {
                      let me, ye, _e;
                      if (arguments.length < 2) return;
                      arguments.length == 2
                        ? (_e = $)
                        : arguments.length == 3
                        ? ((me = $), (_e = K))
                        : ((me = $), (ye = K), (_e = te));
                      let ne = ye ?? N.active(),
                        fe = this.startSpan(L, me, ne),
                        U = (0, b.setSpan)(ne, fe);
                      return N.with(U, _e, void 0, fe);
                    }
                  }
                  m.NoopTracer = C;
                },
                124: (Q, m, v) => {
                  Object.defineProperty(m, '__esModule', { value: !0 }),
                    (m.NoopTracerProvider = void 0);
                  let T = v(614);
                  class b {
                    getTracer(y, N, C) {
                      return new T.NoopTracer();
                    }
                  }
                  m.NoopTracerProvider = b;
                },
                125: (Q, m, v) => {
                  Object.defineProperty(m, '__esModule', { value: !0 }),
                    (m.ProxyTracer = void 0);
                  let T = new (v(614).NoopTracer)();
                  class b {
                    constructor(y, N, C, x) {
                      (this._provider = y),
                        (this.name = N),
                        (this.version = C),
                        (this.options = x);
                    }
                    startSpan(y, N, C) {
                      return this._getTracer().startSpan(y, N, C);
                    }
                    startActiveSpan(y, N, C, x) {
                      let L = this._getTracer();
                      return Reflect.apply(L.startActiveSpan, L, arguments);
                    }
                    _getTracer() {
                      if (this._delegate) return this._delegate;
                      let y = this._provider.getDelegateTracer(
                        this.name,
                        this.version,
                        this.options
                      );
                      return y ? ((this._delegate = y), this._delegate) : T;
                    }
                  }
                  m.ProxyTracer = b;
                },
                846: (Q, m, v) => {
                  Object.defineProperty(m, '__esModule', { value: !0 }),
                    (m.ProxyTracerProvider = void 0);
                  let T = v(125),
                    b = new (v(124).NoopTracerProvider)();
                  class E {
                    getTracer(N, C, x) {
                      var L;
                      return (L = this.getDelegateTracer(N, C, x)) !== null &&
                        L !== void 0
                        ? L
                        : new T.ProxyTracer(this, N, C, x);
                    }
                    getDelegate() {
                      var N;
                      return (N = this._delegate) !== null && N !== void 0
                        ? N
                        : b;
                    }
                    setDelegate(N) {
                      this._delegate = N;
                    }
                    getDelegateTracer(N, C, x) {
                      var L;
                      return (L = this._delegate) === null || L === void 0
                        ? void 0
                        : L.getTracer(N, C, x);
                    }
                  }
                  m.ProxyTracerProvider = E;
                },
                996: (Q, m) => {
                  Object.defineProperty(m, '__esModule', { value: !0 }),
                    (m.SamplingDecision = void 0),
                    (function (v) {
                      (v[(v.NOT_RECORD = 0)] = 'NOT_RECORD'),
                        (v[(v.RECORD = 1)] = 'RECORD'),
                        (v[(v.RECORD_AND_SAMPLED = 2)] = 'RECORD_AND_SAMPLED');
                    })(m.SamplingDecision || (m.SamplingDecision = {}));
                },
                607: (Q, m, v) => {
                  Object.defineProperty(m, '__esModule', { value: !0 }),
                    (m.getSpanContext =
                      m.setSpanContext =
                      m.deleteSpan =
                      m.setSpan =
                      m.getActiveSpan =
                      m.getSpan =
                        void 0);
                  let T = v(780),
                    b = v(403),
                    E = v(491),
                    y = (0, T.createContextKey)(
                      'OpenTelemetry Context Key SPAN'
                    );
                  function N(x) {
                    return x.getValue(y) || void 0;
                  }
                  function C(x, L) {
                    return x.setValue(y, L);
                  }
                  (m.getSpan = N),
                    (m.getActiveSpan = function () {
                      return N(E.ContextAPI.getInstance().active());
                    }),
                    (m.setSpan = C),
                    (m.deleteSpan = function (x) {
                      return x.deleteValue(y);
                    }),
                    (m.setSpanContext = function (x, L) {
                      return C(x, new b.NonRecordingSpan(L));
                    }),
                    (m.getSpanContext = function (x) {
                      var L;
                      return (L = N(x)) === null || L === void 0
                        ? void 0
                        : L.spanContext();
                    });
                },
                325: (Q, m, v) => {
                  Object.defineProperty(m, '__esModule', { value: !0 }),
                    (m.TraceStateImpl = void 0);
                  let T = v(564);
                  class b {
                    constructor(y) {
                      (this._internalState = new Map()), y && this._parse(y);
                    }
                    set(y, N) {
                      let C = this._clone();
                      return (
                        C._internalState.has(y) && C._internalState.delete(y),
                        C._internalState.set(y, N),
                        C
                      );
                    }
                    unset(y) {
                      let N = this._clone();
                      return N._internalState.delete(y), N;
                    }
                    get(y) {
                      return this._internalState.get(y);
                    }
                    serialize() {
                      return this._keys()
                        .reduce(
                          (y, N) => (y.push(N + '=' + this.get(N)), y),
                          []
                        )
                        .join(',');
                    }
                    _parse(y) {
                      !(y.length > 512) &&
                        ((this._internalState = y
                          .split(',')
                          .reverse()
                          .reduce((N, C) => {
                            let x = C.trim(),
                              L = x.indexOf('=');
                            if (L !== -1) {
                              let $ = x.slice(0, L),
                                K = x.slice(L + 1, C.length);
                              (0, T.validateKey)($) &&
                                (0, T.validateValue)(K) &&
                                N.set($, K);
                            }
                            return N;
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
                      let y = new b();
                      return (
                        (y._internalState = new Map(this._internalState)), y
                      );
                    }
                  }
                  m.TraceStateImpl = b;
                },
                564: (Q, m) => {
                  Object.defineProperty(m, '__esModule', { value: !0 }),
                    (m.validateValue = m.validateKey = void 0);
                  let v = '[_0-9a-z-*/]',
                    T = `[a-z]${v}{0,255}`,
                    b = `[a-z0-9]${v}{0,240}@[a-z]${v}{0,13}`,
                    E = RegExp(`^(?:${T}|${b})$`),
                    y = /^[ -~]{0,255}[!-~]$/,
                    N = /,|=/;
                  (m.validateKey = function (C) {
                    return E.test(C);
                  }),
                    (m.validateValue = function (C) {
                      return y.test(C) && !N.test(C);
                    });
                },
                98: (Q, m, v) => {
                  Object.defineProperty(m, '__esModule', { value: !0 }),
                    (m.createTraceState = void 0);
                  let T = v(325);
                  m.createTraceState = function (b) {
                    return new T.TraceStateImpl(b);
                  };
                },
                476: (Q, m, v) => {
                  Object.defineProperty(m, '__esModule', { value: !0 }),
                    (m.INVALID_SPAN_CONTEXT =
                      m.INVALID_TRACEID =
                      m.INVALID_SPANID =
                        void 0);
                  let T = v(475);
                  (m.INVALID_SPANID = '0000000000000000'),
                    (m.INVALID_TRACEID = '00000000000000000000000000000000'),
                    (m.INVALID_SPAN_CONTEXT = {
                      traceId: m.INVALID_TRACEID,
                      spanId: m.INVALID_SPANID,
                      traceFlags: T.TraceFlags.NONE,
                    });
                },
                357: (Q, m) => {
                  Object.defineProperty(m, '__esModule', { value: !0 }),
                    (m.SpanKind = void 0),
                    (function (v) {
                      (v[(v.INTERNAL = 0)] = 'INTERNAL'),
                        (v[(v.SERVER = 1)] = 'SERVER'),
                        (v[(v.CLIENT = 2)] = 'CLIENT'),
                        (v[(v.PRODUCER = 3)] = 'PRODUCER'),
                        (v[(v.CONSUMER = 4)] = 'CONSUMER');
                    })(m.SpanKind || (m.SpanKind = {}));
                },
                139: (Q, m, v) => {
                  Object.defineProperty(m, '__esModule', { value: !0 }),
                    (m.wrapSpanContext =
                      m.isSpanContextValid =
                      m.isValidSpanId =
                      m.isValidTraceId =
                        void 0);
                  let T = v(476),
                    b = v(403),
                    E = /^([0-9a-f]{32})$/i,
                    y = /^[0-9a-f]{16}$/i;
                  function N(x) {
                    return E.test(x) && x !== T.INVALID_TRACEID;
                  }
                  function C(x) {
                    return y.test(x) && x !== T.INVALID_SPANID;
                  }
                  (m.isValidTraceId = N),
                    (m.isValidSpanId = C),
                    (m.isSpanContextValid = function (x) {
                      return N(x.traceId) && C(x.spanId);
                    }),
                    (m.wrapSpanContext = function (x) {
                      return new b.NonRecordingSpan(x);
                    });
                },
                847: (Q, m) => {
                  Object.defineProperty(m, '__esModule', { value: !0 }),
                    (m.SpanStatusCode = void 0),
                    (function (v) {
                      (v[(v.UNSET = 0)] = 'UNSET'),
                        (v[(v.OK = 1)] = 'OK'),
                        (v[(v.ERROR = 2)] = 'ERROR');
                    })(m.SpanStatusCode || (m.SpanStatusCode = {}));
                },
                475: (Q, m) => {
                  Object.defineProperty(m, '__esModule', { value: !0 }),
                    (m.TraceFlags = void 0),
                    (function (v) {
                      (v[(v.NONE = 0)] = 'NONE'),
                        (v[(v.SAMPLED = 1)] = 'SAMPLED');
                    })(m.TraceFlags || (m.TraceFlags = {}));
                },
                521: (Q, m) => {
                  Object.defineProperty(m, '__esModule', { value: !0 }),
                    (m.VERSION = void 0),
                    (m.VERSION = '1.6.0');
                },
              },
              be = {};
            function W(Q) {
              var m = be[Q];
              if (m !== void 0) return m.exports;
              var v = (be[Q] = { exports: {} }),
                T = !0;
              try {
                pe[Q].call(v.exports, v, v.exports, W), (T = !1);
              } finally {
                T && delete be[Q];
              }
              return v.exports;
            }
            W.ab = '//';
            var M = {};
            (() => {
              Object.defineProperty(M, '__esModule', { value: !0 }),
                (M.trace =
                  M.propagation =
                  M.metrics =
                  M.diag =
                  M.context =
                  M.INVALID_SPAN_CONTEXT =
                  M.INVALID_TRACEID =
                  M.INVALID_SPANID =
                  M.isValidSpanId =
                  M.isValidTraceId =
                  M.isSpanContextValid =
                  M.createTraceState =
                  M.TraceFlags =
                  M.SpanStatusCode =
                  M.SpanKind =
                  M.SamplingDecision =
                  M.ProxyTracerProvider =
                  M.ProxyTracer =
                  M.defaultTextMapSetter =
                  M.defaultTextMapGetter =
                  M.ValueType =
                  M.createNoopMeter =
                  M.DiagLogLevel =
                  M.DiagConsoleLogger =
                  M.ROOT_CONTEXT =
                  M.createContextKey =
                  M.baggageEntryMetadataFromString =
                    void 0);
              var Q = W(369);
              Object.defineProperty(M, 'baggageEntryMetadataFromString', {
                enumerable: !0,
                get: function () {
                  return Q.baggageEntryMetadataFromString;
                },
              });
              var m = W(780);
              Object.defineProperty(M, 'createContextKey', {
                enumerable: !0,
                get: function () {
                  return m.createContextKey;
                },
              }),
                Object.defineProperty(M, 'ROOT_CONTEXT', {
                  enumerable: !0,
                  get: function () {
                    return m.ROOT_CONTEXT;
                  },
                });
              var v = W(972);
              Object.defineProperty(M, 'DiagConsoleLogger', {
                enumerable: !0,
                get: function () {
                  return v.DiagConsoleLogger;
                },
              });
              var T = W(957);
              Object.defineProperty(M, 'DiagLogLevel', {
                enumerable: !0,
                get: function () {
                  return T.DiagLogLevel;
                },
              });
              var b = W(102);
              Object.defineProperty(M, 'createNoopMeter', {
                enumerable: !0,
                get: function () {
                  return b.createNoopMeter;
                },
              });
              var E = W(901);
              Object.defineProperty(M, 'ValueType', {
                enumerable: !0,
                get: function () {
                  return E.ValueType;
                },
              });
              var y = W(194);
              Object.defineProperty(M, 'defaultTextMapGetter', {
                enumerable: !0,
                get: function () {
                  return y.defaultTextMapGetter;
                },
              }),
                Object.defineProperty(M, 'defaultTextMapSetter', {
                  enumerable: !0,
                  get: function () {
                    return y.defaultTextMapSetter;
                  },
                });
              var N = W(125);
              Object.defineProperty(M, 'ProxyTracer', {
                enumerable: !0,
                get: function () {
                  return N.ProxyTracer;
                },
              });
              var C = W(846);
              Object.defineProperty(M, 'ProxyTracerProvider', {
                enumerable: !0,
                get: function () {
                  return C.ProxyTracerProvider;
                },
              });
              var x = W(996);
              Object.defineProperty(M, 'SamplingDecision', {
                enumerable: !0,
                get: function () {
                  return x.SamplingDecision;
                },
              });
              var L = W(357);
              Object.defineProperty(M, 'SpanKind', {
                enumerable: !0,
                get: function () {
                  return L.SpanKind;
                },
              });
              var $ = W(847);
              Object.defineProperty(M, 'SpanStatusCode', {
                enumerable: !0,
                get: function () {
                  return $.SpanStatusCode;
                },
              });
              var K = W(475);
              Object.defineProperty(M, 'TraceFlags', {
                enumerable: !0,
                get: function () {
                  return K.TraceFlags;
                },
              });
              var te = W(98);
              Object.defineProperty(M, 'createTraceState', {
                enumerable: !0,
                get: function () {
                  return te.createTraceState;
                },
              });
              var me = W(139);
              Object.defineProperty(M, 'isSpanContextValid', {
                enumerable: !0,
                get: function () {
                  return me.isSpanContextValid;
                },
              }),
                Object.defineProperty(M, 'isValidTraceId', {
                  enumerable: !0,
                  get: function () {
                    return me.isValidTraceId;
                  },
                }),
                Object.defineProperty(M, 'isValidSpanId', {
                  enumerable: !0,
                  get: function () {
                    return me.isValidSpanId;
                  },
                });
              var ye = W(476);
              Object.defineProperty(M, 'INVALID_SPANID', {
                enumerable: !0,
                get: function () {
                  return ye.INVALID_SPANID;
                },
              }),
                Object.defineProperty(M, 'INVALID_TRACEID', {
                  enumerable: !0,
                  get: function () {
                    return ye.INVALID_TRACEID;
                  },
                }),
                Object.defineProperty(M, 'INVALID_SPAN_CONTEXT', {
                  enumerable: !0,
                  get: function () {
                    return ye.INVALID_SPAN_CONTEXT;
                  },
                });
              let _e = W(67);
              Object.defineProperty(M, 'context', {
                enumerable: !0,
                get: function () {
                  return _e.context;
                },
              });
              let ne = W(506);
              Object.defineProperty(M, 'diag', {
                enumerable: !0,
                get: function () {
                  return ne.diag;
                },
              });
              let fe = W(886);
              Object.defineProperty(M, 'metrics', {
                enumerable: !0,
                get: function () {
                  return fe.metrics;
                },
              });
              let U = W(939);
              Object.defineProperty(M, 'propagation', {
                enumerable: !0,
                get: function () {
                  return U.propagation;
                },
              });
              let f = W(845);
              Object.defineProperty(M, 'trace', {
                enumerable: !0,
                get: function () {
                  return f.trace;
                },
              }),
                (M.default = {
                  context: _e.context,
                  diag: ne.diag,
                  metrics: fe.metrics,
                  propagation: U.propagation,
                  trace: f.trace,
                });
            })(),
              (Ce.exports = M);
          })();
        },
        70: (Ce) => {
          'use strict';
          (() => {
            typeof __nccwpck_require__ < 'u' && (__nccwpck_require__.ab = '//');
            var xe = {};
            (() => {
              (xe.parse = function (M, Q) {
                if (typeof M != 'string')
                  throw TypeError('argument str must be a string');
                for (
                  var m = {},
                    v = M.split(be),
                    T = (Q || {}).decode || ue,
                    b = 0;
                  b < v.length;
                  b++
                ) {
                  var E = v[b],
                    y = E.indexOf('=');
                  if (!(y < 0)) {
                    var N = E.substr(0, y).trim(),
                      C = E.substr(++y, E.length).trim();
                    C[0] == '"' && (C = C.slice(1, -1)),
                      m[N] == null &&
                        (m[N] = (function (x, L) {
                          try {
                            return L(x);
                          } catch {
                            return x;
                          }
                        })(C, T));
                  }
                }
                return m;
              }),
                (xe.serialize = function (M, Q, m) {
                  var v = m || {},
                    T = v.encode || pe;
                  if (typeof T != 'function')
                    throw TypeError('option encode is invalid');
                  if (!W.test(M)) throw TypeError('argument name is invalid');
                  var b = T(Q);
                  if (b && !W.test(b))
                    throw TypeError('argument val is invalid');
                  var E = M + '=' + b;
                  if (v.maxAge != null) {
                    var y = v.maxAge - 0;
                    if (isNaN(y) || !isFinite(y))
                      throw TypeError('option maxAge is invalid');
                    E += '; Max-Age=' + Math.floor(y);
                  }
                  if (v.domain) {
                    if (!W.test(v.domain))
                      throw TypeError('option domain is invalid');
                    E += '; Domain=' + v.domain;
                  }
                  if (v.path) {
                    if (!W.test(v.path))
                      throw TypeError('option path is invalid');
                    E += '; Path=' + v.path;
                  }
                  if (v.expires) {
                    if (typeof v.expires.toUTCString != 'function')
                      throw TypeError('option expires is invalid');
                    E += '; Expires=' + v.expires.toUTCString();
                  }
                  if (
                    (v.httpOnly && (E += '; HttpOnly'),
                    v.secure && (E += '; Secure'),
                    v.sameSite)
                  )
                    switch (
                      typeof v.sameSite == 'string'
                        ? v.sameSite.toLowerCase()
                        : v.sameSite
                    ) {
                      case !0:
                      case 'strict':
                        E += '; SameSite=Strict';
                        break;
                      case 'lax':
                        E += '; SameSite=Lax';
                        break;
                      case 'none':
                        E += '; SameSite=None';
                        break;
                      default:
                        throw TypeError('option sameSite is invalid');
                    }
                  return E;
                });
              var ue = decodeURIComponent,
                pe = encodeURIComponent,
                be = /; */,
                W = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
            })(),
              (Ce.exports = xe);
          })();
        },
        87: (Ce) => {
          'use strict';
          (() => {
            var xe = {
                806: (W, M, Q) => {
                  let m = Q(190),
                    v = Symbol('max'),
                    T = Symbol('length'),
                    b = Symbol('lengthCalculator'),
                    E = Symbol('allowStale'),
                    y = Symbol('maxAge'),
                    N = Symbol('dispose'),
                    C = Symbol('noDisposeOnSet'),
                    x = Symbol('lruList'),
                    L = Symbol('cache'),
                    $ = Symbol('updateAgeOnGet'),
                    K = () => 1;
                  class te {
                    constructor(_) {
                      if (
                        (typeof _ == 'number' && (_ = { max: _ }),
                        _ || (_ = {}),
                        _.max && (typeof _.max != 'number' || _.max < 0))
                      )
                        throw TypeError('max must be a non-negative number');
                      this[v] = _.max || 1 / 0;
                      let re = _.length || K;
                      if (
                        ((this[b] = typeof re != 'function' ? K : re),
                        (this[E] = _.stale || !1),
                        _.maxAge && typeof _.maxAge != 'number')
                      )
                        throw TypeError('maxAge must be a number');
                      (this[y] = _.maxAge || 0),
                        (this[N] = _.dispose),
                        (this[C] = _.noDisposeOnSet || !1),
                        (this[$] = _.updateAgeOnGet || !1),
                        this.reset();
                    }
                    set max(_) {
                      if (typeof _ != 'number' || _ < 0)
                        throw TypeError('max must be a non-negative number');
                      (this[v] = _ || 1 / 0), _e(this);
                    }
                    get max() {
                      return this[v];
                    }
                    set allowStale(_) {
                      this[E] = !!_;
                    }
                    get allowStale() {
                      return this[E];
                    }
                    set maxAge(_) {
                      if (typeof _ != 'number')
                        throw TypeError('maxAge must be a non-negative number');
                      (this[y] = _), _e(this);
                    }
                    get maxAge() {
                      return this[y];
                    }
                    set lengthCalculator(_) {
                      typeof _ != 'function' && (_ = K),
                        _ !== this[b] &&
                          ((this[b] = _),
                          (this[T] = 0),
                          this[x].forEach((re) => {
                            (re.length = this[b](re.value, re.key)),
                              (this[T] += re.length);
                          })),
                        _e(this);
                    }
                    get lengthCalculator() {
                      return this[b];
                    }
                    get length() {
                      return this[T];
                    }
                    get itemCount() {
                      return this[x].length;
                    }
                    rforEach(_, re) {
                      re = re || this;
                      for (let Se = this[x].tail; Se !== null; ) {
                        let ie = Se.prev;
                        U(this, _, Se, re), (Se = ie);
                      }
                    }
                    forEach(_, re) {
                      re = re || this;
                      for (let Se = this[x].head; Se !== null; ) {
                        let ie = Se.next;
                        U(this, _, Se, re), (Se = ie);
                      }
                    }
                    keys() {
                      return this[x].toArray().map((_) => _.key);
                    }
                    values() {
                      return this[x].toArray().map((_) => _.value);
                    }
                    reset() {
                      this[N] &&
                        this[x] &&
                        this[x].length &&
                        this[x].forEach((_) => this[N](_.key, _.value)),
                        (this[L] = new Map()),
                        (this[x] = new m()),
                        (this[T] = 0);
                    }
                    dump() {
                      return this[x]
                        .map(
                          (_) =>
                            !ye(this, _) && {
                              k: _.key,
                              v: _.value,
                              e: _.now + (_.maxAge || 0),
                            }
                        )
                        .toArray()
                        .filter((_) => _);
                    }
                    dumpLru() {
                      return this[x];
                    }
                    set(_, re, Se) {
                      if ((Se = Se || this[y]) && typeof Se != 'number')
                        throw TypeError('maxAge must be a number');
                      let ie = Se ? Date.now() : 0,
                        $e = this[b](re, _);
                      if (this[L].has(_)) {
                        if ($e > this[v]) return ne(this, this[L].get(_)), !1;
                        let ft = this[L].get(_).value;
                        return (
                          this[N] && !this[C] && this[N](_, ft.value),
                          (ft.now = ie),
                          (ft.maxAge = Se),
                          (ft.value = re),
                          (this[T] += $e - ft.length),
                          (ft.length = $e),
                          this.get(_),
                          _e(this),
                          !0
                        );
                      }
                      let Xe = new fe(_, re, $e, ie, Se);
                      return Xe.length > this[v]
                        ? (this[N] && this[N](_, re), !1)
                        : ((this[T] += Xe.length),
                          this[x].unshift(Xe),
                          this[L].set(_, this[x].head),
                          _e(this),
                          !0);
                    }
                    has(_) {
                      return (
                        !!this[L].has(_) && !ye(this, this[L].get(_).value)
                      );
                    }
                    get(_) {
                      return me(this, _, !0);
                    }
                    peek(_) {
                      return me(this, _, !1);
                    }
                    pop() {
                      let _ = this[x].tail;
                      return _ ? (ne(this, _), _.value) : null;
                    }
                    del(_) {
                      ne(this, this[L].get(_));
                    }
                    load(_) {
                      this.reset();
                      let re = Date.now();
                      for (let Se = _.length - 1; Se >= 0; Se--) {
                        let ie = _[Se],
                          $e = ie.e || 0;
                        if ($e === 0) this.set(ie.k, ie.v);
                        else {
                          let Xe = $e - re;
                          Xe > 0 && this.set(ie.k, ie.v, Xe);
                        }
                      }
                    }
                    prune() {
                      this[L].forEach((_, re) => me(this, re, !1));
                    }
                  }
                  let me = (f, _, re) => {
                      let Se = f[L].get(_);
                      if (Se) {
                        let ie = Se.value;
                        if (ye(f, ie)) {
                          if ((ne(f, Se), !f[E])) return;
                        } else
                          re &&
                            (f[$] && (Se.value.now = Date.now()),
                            f[x].unshiftNode(Se));
                        return ie.value;
                      }
                    },
                    ye = (f, _) => {
                      if (!_ || (!_.maxAge && !f[y])) return !1;
                      let re = Date.now() - _.now;
                      return _.maxAge ? re > _.maxAge : f[y] && re > f[y];
                    },
                    _e = (f) => {
                      if (f[T] > f[v])
                        for (let _ = f[x].tail; f[T] > f[v] && _ !== null; ) {
                          let re = _.prev;
                          ne(f, _), (_ = re);
                        }
                    },
                    ne = (f, _) => {
                      if (_) {
                        let re = _.value;
                        f[N] && f[N](re.key, re.value),
                          (f[T] -= re.length),
                          f[L].delete(re.key),
                          f[x].removeNode(_);
                      }
                    };
                  class fe {
                    constructor(_, re, Se, ie, $e) {
                      (this.key = _),
                        (this.value = re),
                        (this.length = Se),
                        (this.now = ie),
                        (this.maxAge = $e || 0);
                    }
                  }
                  let U = (f, _, re, Se) => {
                    let ie = re.value;
                    ye(f, ie) && (ne(f, re), f[E] || (ie = void 0)),
                      ie && _.call(Se, ie.value, ie.key, f);
                  };
                  W.exports = te;
                },
                76: (W) => {
                  W.exports = function (M) {
                    M.prototype[Symbol.iterator] = function* () {
                      for (let Q = this.head; Q; Q = Q.next) yield Q.value;
                    };
                  };
                },
                190: (W, M, Q) => {
                  function m(T) {
                    var b = this;
                    if (
                      (b instanceof m || (b = new m()),
                      (b.tail = null),
                      (b.head = null),
                      (b.length = 0),
                      T && typeof T.forEach == 'function')
                    )
                      T.forEach(function (N) {
                        b.push(N);
                      });
                    else if (arguments.length > 0)
                      for (var E = 0, y = arguments.length; E < y; E++)
                        b.push(arguments[E]);
                    return b;
                  }
                  function v(T, b, E, y) {
                    if (!(this instanceof v)) return new v(T, b, E, y);
                    (this.list = y),
                      (this.value = T),
                      b
                        ? ((b.next = this), (this.prev = b))
                        : (this.prev = null),
                      E
                        ? ((E.prev = this), (this.next = E))
                        : (this.next = null);
                  }
                  (W.exports = m),
                    (m.Node = v),
                    (m.create = m),
                    (m.prototype.removeNode = function (T) {
                      if (T.list !== this)
                        throw Error(
                          'removing node which does not belong to this list'
                        );
                      var b = T.next,
                        E = T.prev;
                      return (
                        b && (b.prev = E),
                        E && (E.next = b),
                        T === this.head && (this.head = b),
                        T === this.tail && (this.tail = E),
                        T.list.length--,
                        (T.next = null),
                        (T.prev = null),
                        (T.list = null),
                        b
                      );
                    }),
                    (m.prototype.unshiftNode = function (T) {
                      if (T !== this.head) {
                        T.list && T.list.removeNode(T);
                        var b = this.head;
                        (T.list = this),
                          (T.next = b),
                          b && (b.prev = T),
                          (this.head = T),
                          this.tail || (this.tail = T),
                          this.length++;
                      }
                    }),
                    (m.prototype.pushNode = function (T) {
                      if (T !== this.tail) {
                        T.list && T.list.removeNode(T);
                        var b = this.tail;
                        (T.list = this),
                          (T.prev = b),
                          b && (b.next = T),
                          (this.tail = T),
                          this.head || (this.head = T),
                          this.length++;
                      }
                    }),
                    (m.prototype.push = function () {
                      for (var T, b = 0, E = arguments.length; b < E; b++)
                        (T = arguments[b]),
                          (this.tail = new v(T, this.tail, null, this)),
                          this.head || (this.head = this.tail),
                          this.length++;
                      return this.length;
                    }),
                    (m.prototype.unshift = function () {
                      for (var T, b = 0, E = arguments.length; b < E; b++)
                        (T = arguments[b]),
                          (this.head = new v(T, null, this.head, this)),
                          this.tail || (this.tail = this.head),
                          this.length++;
                      return this.length;
                    }),
                    (m.prototype.pop = function () {
                      if (this.tail) {
                        var T = this.tail.value;
                        return (
                          (this.tail = this.tail.prev),
                          this.tail
                            ? (this.tail.next = null)
                            : (this.head = null),
                          this.length--,
                          T
                        );
                      }
                    }),
                    (m.prototype.shift = function () {
                      if (this.head) {
                        var T = this.head.value;
                        return (
                          (this.head = this.head.next),
                          this.head
                            ? (this.head.prev = null)
                            : (this.tail = null),
                          this.length--,
                          T
                        );
                      }
                    }),
                    (m.prototype.forEach = function (T, b) {
                      b = b || this;
                      for (var E = this.head, y = 0; E !== null; y++)
                        T.call(b, E.value, y, this), (E = E.next);
                    }),
                    (m.prototype.forEachReverse = function (T, b) {
                      b = b || this;
                      for (
                        var E = this.tail, y = this.length - 1;
                        E !== null;
                        y--
                      )
                        T.call(b, E.value, y, this), (E = E.prev);
                    }),
                    (m.prototype.get = function (T) {
                      for (var b = 0, E = this.head; E !== null && b < T; b++)
                        E = E.next;
                      if (b === T && E !== null) return E.value;
                    }),
                    (m.prototype.getReverse = function (T) {
                      for (var b = 0, E = this.tail; E !== null && b < T; b++)
                        E = E.prev;
                      if (b === T && E !== null) return E.value;
                    }),
                    (m.prototype.map = function (T, b) {
                      b = b || this;
                      for (var E = new m(), y = this.head; y !== null; )
                        E.push(T.call(b, y.value, this)), (y = y.next);
                      return E;
                    }),
                    (m.prototype.mapReverse = function (T, b) {
                      b = b || this;
                      for (var E = new m(), y = this.tail; y !== null; )
                        E.push(T.call(b, y.value, this)), (y = y.prev);
                      return E;
                    }),
                    (m.prototype.reduce = function (T, b) {
                      var E,
                        y = this.head;
                      if (arguments.length > 1) E = b;
                      else if (this.head)
                        (y = this.head.next), (E = this.head.value);
                      else
                        throw TypeError(
                          'Reduce of empty list with no initial value'
                        );
                      for (var N = 0; y !== null; N++)
                        (E = T(E, y.value, N)), (y = y.next);
                      return E;
                    }),
                    (m.prototype.reduceReverse = function (T, b) {
                      var E,
                        y = this.tail;
                      if (arguments.length > 1) E = b;
                      else if (this.tail)
                        (y = this.tail.prev), (E = this.tail.value);
                      else
                        throw TypeError(
                          'Reduce of empty list with no initial value'
                        );
                      for (var N = this.length - 1; y !== null; N--)
                        (E = T(E, y.value, N)), (y = y.prev);
                      return E;
                    }),
                    (m.prototype.toArray = function () {
                      for (
                        var T = Array(this.length), b = 0, E = this.head;
                        E !== null;
                        b++
                      )
                        (T[b] = E.value), (E = E.next);
                      return T;
                    }),
                    (m.prototype.toArrayReverse = function () {
                      for (
                        var T = Array(this.length), b = 0, E = this.tail;
                        E !== null;
                        b++
                      )
                        (T[b] = E.value), (E = E.prev);
                      return T;
                    }),
                    (m.prototype.slice = function (T, b) {
                      (b = b || this.length) < 0 && (b += this.length),
                        (T = T || 0) < 0 && (T += this.length);
                      var E = new m();
                      if (b < T || b < 0) return E;
                      T < 0 && (T = 0), b > this.length && (b = this.length);
                      for (var y = 0, N = this.head; N !== null && y < T; y++)
                        N = N.next;
                      for (; N !== null && y < b; y++, N = N.next)
                        E.push(N.value);
                      return E;
                    }),
                    (m.prototype.sliceReverse = function (T, b) {
                      (b = b || this.length) < 0 && (b += this.length),
                        (T = T || 0) < 0 && (T += this.length);
                      var E = new m();
                      if (b < T || b < 0) return E;
                      T < 0 && (T = 0), b > this.length && (b = this.length);
                      for (
                        var y = this.length, N = this.tail;
                        N !== null && y > b;
                        y--
                      )
                        N = N.prev;
                      for (; N !== null && y > T; y--, N = N.prev)
                        E.push(N.value);
                      return E;
                    }),
                    (m.prototype.splice = function (T, b) {
                      T > this.length && (T = this.length - 1),
                        T < 0 && (T = this.length + T);
                      for (var E = 0, y = this.head; y !== null && E < T; E++)
                        y = y.next;
                      for (var N = [], E = 0; y && E < b; E++)
                        N.push(y.value), (y = this.removeNode(y));
                      y === null && (y = this.tail),
                        y !== this.head && y !== this.tail && (y = y.prev);
                      for (var E = 2; E < arguments.length; E++)
                        y = (function (x, L, $) {
                          var K =
                            L === x.head
                              ? new v($, null, L, x)
                              : new v($, L, L.next, x);
                          return (
                            K.next === null && (x.tail = K),
                            K.prev === null && (x.head = K),
                            x.length++,
                            K
                          );
                        })(this, y, arguments[E]);
                      return N;
                    }),
                    (m.prototype.reverse = function () {
                      for (
                        var T = this.head, b = this.tail, E = T;
                        E !== null;
                        E = E.prev
                      ) {
                        var y = E.prev;
                        (E.prev = E.next), (E.next = y);
                      }
                      return (this.head = b), (this.tail = T), this;
                    });
                  try {
                    Q(76)(m);
                  } catch {}
                },
              },
              ue = {};
            function pe(W) {
              var M = ue[W];
              if (M !== void 0) return M.exports;
              var Q = (ue[W] = { exports: {} }),
                m = !0;
              try {
                xe[W](Q, Q.exports, pe), (m = !1);
              } finally {
                m && delete ue[W];
              }
              return Q.exports;
            }
            pe.ab = '//';
            var be = pe(806);
            Ce.exports = be;
          })();
        },
        459: (Ce) => {
          'use strict';
          (function () {
            var xe = {
                114: function (W) {
                  function M(v) {
                    if (typeof v != 'string')
                      throw TypeError(
                        'Path must be a string. Received ' + JSON.stringify(v)
                      );
                  }
                  function Q(v, T) {
                    for (
                      var b, E = '', y = 0, N = -1, C = 0, x = 0;
                      x <= v.length;
                      ++x
                    ) {
                      if (x < v.length) b = v.charCodeAt(x);
                      else {
                        if (b === 47) break;
                        b = 47;
                      }
                      if (b === 47) {
                        if (!(N === x - 1 || C === 1))
                          if (N !== x - 1 && C === 2) {
                            if (
                              E.length < 2 ||
                              y !== 2 ||
                              E.charCodeAt(E.length - 1) !== 46 ||
                              E.charCodeAt(E.length - 2) !== 46
                            ) {
                              if (E.length > 2) {
                                var L = E.lastIndexOf('/');
                                if (L !== E.length - 1) {
                                  L === -1
                                    ? ((E = ''), (y = 0))
                                    : (y =
                                        (E = E.slice(0, L)).length -
                                        1 -
                                        E.lastIndexOf('/')),
                                    (N = x),
                                    (C = 0);
                                  continue;
                                }
                              } else if (E.length === 2 || E.length === 1) {
                                (E = ''), (y = 0), (N = x), (C = 0);
                                continue;
                              }
                            }
                            T &&
                              (E.length > 0 ? (E += '/..') : (E = '..'),
                              (y = 2));
                          } else
                            E.length > 0
                              ? (E += '/' + v.slice(N + 1, x))
                              : (E = v.slice(N + 1, x)),
                              (y = x - N - 1);
                        (N = x), (C = 0);
                      } else b === 46 && C !== -1 ? ++C : (C = -1);
                    }
                    return E;
                  }
                  var m = {
                    resolve: function () {
                      for (
                        var v, T, b = '', E = !1, y = arguments.length - 1;
                        y >= -1 && !E;
                        y--
                      )
                        y >= 0
                          ? (T = arguments[y])
                          : (v === void 0 && (v = ''), (T = v)),
                          M(T),
                          T.length !== 0 &&
                            ((b = T + '/' + b), (E = T.charCodeAt(0) === 47));
                      return (
                        (b = Q(b, !E)),
                        E
                          ? b.length > 0
                            ? '/' + b
                            : '/'
                          : b.length > 0
                          ? b
                          : '.'
                      );
                    },
                    normalize: function (v) {
                      if ((M(v), v.length === 0)) return '.';
                      var T = v.charCodeAt(0) === 47,
                        b = v.charCodeAt(v.length - 1) === 47;
                      return (
                        (v = Q(v, !T)).length !== 0 || T || (v = '.'),
                        v.length > 0 && b && (v += '/'),
                        T ? '/' + v : v
                      );
                    },
                    isAbsolute: function (v) {
                      return M(v), v.length > 0 && v.charCodeAt(0) === 47;
                    },
                    join: function () {
                      if (arguments.length == 0) return '.';
                      for (var v, T = 0; T < arguments.length; ++T) {
                        var b = arguments[T];
                        M(b),
                          b.length > 0 &&
                            (v === void 0 ? (v = b) : (v += '/' + b));
                      }
                      return v === void 0 ? '.' : m.normalize(v);
                    },
                    relative: function (v, T) {
                      if (
                        (M(v),
                        M(T),
                        v === T || (v = m.resolve(v)) === (T = m.resolve(T)))
                      )
                        return '';
                      for (
                        var b = 1;
                        b < v.length && v.charCodeAt(b) === 47;
                        ++b
                      );
                      for (
                        var E = v.length, y = E - b, N = 1;
                        N < T.length && T.charCodeAt(N) === 47;
                        ++N
                      );
                      for (
                        var C = T.length - N, x = y < C ? y : C, L = -1, $ = 0;
                        $ <= x;
                        ++$
                      ) {
                        if ($ === x) {
                          if (C > x) {
                            if (T.charCodeAt(N + $) === 47)
                              return T.slice(N + $ + 1);
                            if ($ === 0) return T.slice(N + $);
                          } else
                            y > x &&
                              (v.charCodeAt(b + $) === 47
                                ? (L = $)
                                : $ === 0 && (L = 0));
                          break;
                        }
                        var K = v.charCodeAt(b + $);
                        if (K !== T.charCodeAt(N + $)) break;
                        K === 47 && (L = $);
                      }
                      var te = '';
                      for ($ = b + L + 1; $ <= E; ++$)
                        ($ === E || v.charCodeAt($) === 47) &&
                          (te.length === 0 ? (te += '..') : (te += '/..'));
                      return te.length > 0
                        ? te + T.slice(N + L)
                        : ((N += L), T.charCodeAt(N) === 47 && ++N, T.slice(N));
                    },
                    _makeLong: function (v) {
                      return v;
                    },
                    dirname: function (v) {
                      if ((M(v), v.length === 0)) return '.';
                      for (
                        var T = v.charCodeAt(0),
                          b = T === 47,
                          E = -1,
                          y = !0,
                          N = v.length - 1;
                        N >= 1;
                        --N
                      )
                        if ((T = v.charCodeAt(N)) === 47) {
                          if (!y) {
                            E = N;
                            break;
                          }
                        } else y = !1;
                      return E === -1
                        ? b
                          ? '/'
                          : '.'
                        : b && E === 1
                        ? '//'
                        : v.slice(0, E);
                    },
                    basename: function (v, T) {
                      if (T !== void 0 && typeof T != 'string')
                        throw TypeError('"ext" argument must be a string');
                      M(v);
                      var b,
                        E = 0,
                        y = -1,
                        N = !0;
                      if (
                        T !== void 0 &&
                        T.length > 0 &&
                        T.length <= v.length
                      ) {
                        if (T.length === v.length && T === v) return '';
                        var C = T.length - 1,
                          x = -1;
                        for (b = v.length - 1; b >= 0; --b) {
                          var L = v.charCodeAt(b);
                          if (L === 47) {
                            if (!N) {
                              E = b + 1;
                              break;
                            }
                          } else
                            x === -1 && ((N = !1), (x = b + 1)),
                              C >= 0 &&
                                (L === T.charCodeAt(C)
                                  ? --C == -1 && (y = b)
                                  : ((C = -1), (y = x)));
                        }
                        return (
                          E === y ? (y = x) : y === -1 && (y = v.length),
                          v.slice(E, y)
                        );
                      }
                      for (b = v.length - 1; b >= 0; --b)
                        if (v.charCodeAt(b) === 47) {
                          if (!N) {
                            E = b + 1;
                            break;
                          }
                        } else y === -1 && ((N = !1), (y = b + 1));
                      return y === -1 ? '' : v.slice(E, y);
                    },
                    extname: function (v) {
                      M(v);
                      for (
                        var T = -1,
                          b = 0,
                          E = -1,
                          y = !0,
                          N = 0,
                          C = v.length - 1;
                        C >= 0;
                        --C
                      ) {
                        var x = v.charCodeAt(C);
                        if (x === 47) {
                          if (!y) {
                            b = C + 1;
                            break;
                          }
                          continue;
                        }
                        E === -1 && ((y = !1), (E = C + 1)),
                          x === 46
                            ? T === -1
                              ? (T = C)
                              : N !== 1 && (N = 1)
                            : T !== -1 && (N = -1);
                      }
                      return T === -1 ||
                        E === -1 ||
                        N === 0 ||
                        (N === 1 && T === E - 1 && T === b + 1)
                        ? ''
                        : v.slice(T, E);
                    },
                    format: function (v) {
                      var T, b;
                      if (v === null || typeof v != 'object')
                        throw TypeError(
                          'The "pathObject" argument must be of type Object. Received type ' +
                            typeof v
                        );
                      return (
                        (T = v.dir || v.root),
                        (b = v.base || (v.name || '') + (v.ext || '')),
                        T ? (T === v.root ? T + b : T + '/' + b) : b
                      );
                    },
                    parse: function (v) {
                      M(v);
                      var T,
                        b = { root: '', dir: '', base: '', ext: '', name: '' };
                      if (v.length === 0) return b;
                      var E = v.charCodeAt(0),
                        y = E === 47;
                      y ? ((b.root = '/'), (T = 1)) : (T = 0);
                      for (
                        var N = -1,
                          C = 0,
                          x = -1,
                          L = !0,
                          $ = v.length - 1,
                          K = 0;
                        $ >= T;
                        --$
                      ) {
                        if ((E = v.charCodeAt($)) === 47) {
                          if (!L) {
                            C = $ + 1;
                            break;
                          }
                          continue;
                        }
                        x === -1 && ((L = !1), (x = $ + 1)),
                          E === 46
                            ? N === -1
                              ? (N = $)
                              : K !== 1 && (K = 1)
                            : N !== -1 && (K = -1);
                      }
                      return (
                        N === -1 ||
                        x === -1 ||
                        K === 0 ||
                        (K === 1 && N === x - 1 && N === C + 1)
                          ? x !== -1 &&
                            (C === 0 && y
                              ? (b.base = b.name = v.slice(1, x))
                              : (b.base = b.name = v.slice(C, x)))
                          : (C === 0 && y
                              ? ((b.name = v.slice(1, N)),
                                (b.base = v.slice(1, x)))
                              : ((b.name = v.slice(C, N)),
                                (b.base = v.slice(C, x))),
                            (b.ext = v.slice(N, x))),
                        C > 0
                          ? (b.dir = v.slice(0, C - 1))
                          : y && (b.dir = '/'),
                        b
                      );
                    },
                    sep: '/',
                    delimiter: ':',
                    win32: null,
                    posix: null,
                  };
                  (m.posix = m), (W.exports = m);
                },
              },
              ue = {};
            function pe(W) {
              var M = ue[W];
              if (M !== void 0) return M.exports;
              var Q = (ue[W] = { exports: {} }),
                m = !0;
              try {
                xe[W](Q, Q.exports, pe), (m = !1);
              } finally {
                m && delete ue[W];
              }
              return Q.exports;
            }
            pe.ab = '//';
            var be = pe(114);
            Ce.exports = be;
          })();
        },
        581: () => {},
        523: (Ce, xe, ue) => {
          'use strict';
          let pe;
          (pe = ue(459)), (Ce.exports = pe);
        },
        636: (Ce) => {
          'use strict';
          Ce.exports = [
            'chrome 64',
            'edge 79',
            'firefox 67',
            'opera 51',
            'safari 12',
          ];
        },
        156: (Ce, xe, ue) => {
          'use strict';
          Object.defineProperty(xe, '__esModule', { value: !0 }),
            (function (Q, m) {
              for (var v in m)
                Object.defineProperty(Q, v, { enumerable: !0, get: m[v] });
            })(xe, {
              withRequest: function () {
                return W;
              },
              getTestReqInfo: function () {
                return M;
              },
            });
          let pe = new (ue(67).AsyncLocalStorage)();
          function be(Q, m) {
            let v = m.header(Q, 'next-test-proxy-port');
            if (v)
              return {
                url: m.url(Q),
                proxyPort: Number(v),
                testData: m.header(Q, 'next-test-data') || '',
              };
          }
          function W(Q, m, v) {
            let T = be(Q, m);
            return T ? pe.run(T, v) : v();
          }
          function M(Q, m) {
            return pe.getStore() || (Q && m ? be(Q, m) : void 0);
          }
        },
        78: (Ce, xe, ue) => {
          'use strict';
          var pe = ue(195).Buffer;
          Object.defineProperty(xe, '__esModule', { value: !0 }),
            (function (v, T) {
              for (var b in T)
                Object.defineProperty(v, b, { enumerable: !0, get: T[b] });
            })(xe, {
              reader: function () {
                return W;
              },
              handleFetch: function () {
                return Q;
              },
              interceptFetch: function () {
                return m;
              },
            });
          let be = ue(156),
            W = { url: (v) => v.url, header: (v, T) => v.headers.get(T) };
          async function M(v, T) {
            let {
              url: b,
              method: E,
              headers: y,
              body: N,
              cache: C,
              credentials: x,
              integrity: L,
              mode: $,
              redirect: K,
              referrer: te,
              referrerPolicy: me,
            } = T;
            return {
              testData: v,
              api: 'fetch',
              request: {
                url: b,
                method: E,
                headers: [
                  ...Array.from(y),
                  [
                    'next-test-stack',
                    (function () {
                      let ye = (Error().stack ?? '').split(`
`);
                      for (let _e = 1; _e < ye.length; _e++)
                        if (ye[_e].length > 0) {
                          ye = ye.slice(_e);
                          break;
                        }
                      return (ye = (ye = (ye = ye.filter(
                        (_e) => !_e.includes('/next/dist/')
                      )).slice(0, 5)).map((_e) =>
                        _e.replace('webpack-internal:///(rsc)/', '').trim()
                      )).join('    ');
                    })(),
                  ],
                ],
                body: N
                  ? pe.from(await T.arrayBuffer()).toString('base64')
                  : null,
                cache: C,
                credentials: x,
                integrity: L,
                mode: $,
                redirect: K,
                referrer: te,
                referrerPolicy: me,
              },
            };
          }
          async function Q(v, T) {
            let b = (0, be.getTestReqInfo)(T, W);
            if (!b) throw Error(`No test info for ${T.method} ${T.url}`);
            let { testData: E, proxyPort: y } = b,
              N = await M(E, T),
              C = await v(`http://localhost:${y}`, {
                method: 'POST',
                body: JSON.stringify(N),
                next: { internal: !0 },
              });
            if (!C.ok) throw Error(`Proxy request failed: ${C.status}`);
            let x = await C.json(),
              { api: L } = x;
            switch (L) {
              case 'continue':
                return v(T);
              case 'abort':
              case 'unhandled':
                throw Error(`Proxy request aborted [${T.method} ${T.url}]`);
            }
            return (function ($) {
              let { status: K, headers: te, body: me } = $.response;
              return new Response(me ? pe.from(me, 'base64') : null, {
                status: K,
                headers: new Headers(te),
              });
            })(x);
          }
          function m(v) {
            return (
              (ue.g.fetch = function (T, b) {
                var E;
                return !(b == null || (E = b.next) == null) && E.internal
                  ? v(T, b)
                  : Q(v, new Request(T, b));
              }),
              () => {
                ue.g.fetch = v;
              }
            );
          }
        },
        878: (Ce, xe, ue) => {
          'use strict';
          Object.defineProperty(xe, '__esModule', { value: !0 }),
            (function (Q, m) {
              for (var v in m)
                Object.defineProperty(Q, v, { enumerable: !0, get: m[v] });
            })(xe, {
              interceptTestApis: function () {
                return W;
              },
              wrapRequestHandler: function () {
                return M;
              },
            });
          let pe = ue(156),
            be = ue(78);
          function W() {
            return (0, be.interceptFetch)(ue.g.fetch);
          }
          function M(Q) {
            return (m, v) => (0, pe.withRequest)(m, be.reader, () => Q(m, v));
          }
        },
      },
      (Ce) => {
        var xe = Ce((Ce.s = 89));
        (Le._ENTRIES = typeof Le._ENTRIES > 'u' ? {} : Le._ENTRIES)[
          'middleware_pages/api/graphql'
        ] = xe;
      },
    ]),
    function () {
      let Ce = { exports: {}, loaded: !1 };
      return (
        (function (ue, pe) {
          'use strict';
          var be = Object.defineProperty,
            W = Object.getOwnPropertyDescriptor,
            M = Object.getOwnPropertyNames,
            Q = Object.prototype.hasOwnProperty,
            m = (ne, fe) => {
              for (var U in fe) be(ne, U, { get: fe[U], enumerable: !0 });
            },
            v = (ne, fe, U, f) => {
              if ((fe && typeof fe == 'object') || typeof fe == 'function')
                for (let _ of M(fe))
                  !Q.call(ne, _) &&
                    _ !== U &&
                    be(ne, _, {
                      get: () => fe[_],
                      enumerable: !(f = W(fe, _)) || f.enumerable,
                    });
              return ne;
            },
            T = (ne) => v(be({}, '__esModule', { value: !0 }), ne),
            b = {};
          m(b, { default: () => me }), (ue.exports = T(b));
          var E = (au(), Gs(Nr)),
            y = '@next/request-context',
            N = Symbol.for(y),
            C = Symbol.for('internal.storage');
          function x() {
            let ne = Le;
            if (!ne[N]) {
              let fe = new E.AsyncLocalStorage(),
                U = { get: () => fe.getStore(), [C]: fe };
              ne[N] = U;
            }
            return ne[N];
          }
          var L = x();
          function $(ne, fe) {
            return L[C].run(ne, fe);
          }
          function K(ne) {
            let fe = {};
            return (
              ne &&
                ne.forEach((U, f) => {
                  (fe[f] = U),
                    f.toLowerCase() === 'set-cookie' && (fe[f] = te(U));
                }),
              fe
            );
          }
          function te(ne) {
            let fe = [],
              U = 0,
              f,
              _,
              re,
              Se,
              ie;
            function $e() {
              for (; U < ne.length && /\s/.test(ne.charAt(U)); ) U += 1;
              return U < ne.length;
            }
            function Xe() {
              return (_ = ne.charAt(U)), _ !== '=' && _ !== ';' && _ !== ',';
            }
            for (; U < ne.length; ) {
              for (f = U, ie = !1; $e(); )
                if (((_ = ne.charAt(U)), _ === ',')) {
                  for (re = U, U += 1, $e(), Se = U; U < ne.length && Xe(); )
                    U += 1;
                  U < ne.length && ne.charAt(U) === '='
                    ? ((ie = !0),
                      (U = Se),
                      fe.push(ne.substring(f, re)),
                      (f = U))
                    : (U = re + 1);
                } else U += 1;
              (!ie || U >= ne.length) && fe.push(ne.substring(f, ne.length));
            }
            return fe;
          }
          function me(ne) {
            let fe = ne.staticRoutes.map((f) => ({
                regexp: new RegExp(f.namedRegex),
                page: f.page,
              })),
              U =
                ne.dynamicRoutes?.map((f) => ({
                  regexp: new RegExp(f.namedRegex),
                  page: f.page,
                })) || [];
            return async function (f, _) {
              let re = new URL(f.url).pathname,
                Se = {};
              if (
                (ne.nextConfig?.basePath &&
                  re.startsWith(ne.nextConfig.basePath) &&
                  (re = re.replace(ne.nextConfig.basePath, '') || '/'),
                ne.nextConfig?.i18n)
              )
                for (let $e of ne.nextConfig.i18n.locales) {
                  let Xe = new RegExp(`^/${$e}($|/)`, 'i');
                  if (re.match(Xe)) {
                    re = re.replace(Xe, '/') || '/';
                    break;
                  }
                }
              for (let $e of fe)
                if ($e.regexp.exec(re)) {
                  Se.name = $e.page;
                  break;
                }
              if (!Se.name) {
                let $e = _e(re);
                for (let Xe of U || []) {
                  if ($e && !_e(Xe.page)) continue;
                  let ft = Xe.regexp.exec(re);
                  if (ft) {
                    Se = { name: Xe.page, params: ft.groups };
                    break;
                  }
                }
              }
              let ie = await $({ waitUntil: _.waitUntil }, () =>
                Le._ENTRIES[`middleware_${ne.name}`].default.call(
                  {},
                  {
                    request: {
                      url: f.url,
                      method: f.method,
                      headers: K(f.headers),
                      ip: ye(f.headers, 'x-real-ip'),
                      geo: {
                        city: ye(f.headers, 'x-vercel-ip-city', !0),
                        country: ye(f.headers, 'x-vercel-ip-country', !0),
                        latitude: ye(f.headers, 'x-vercel-ip-latitude'),
                        longitude: ye(f.headers, 'x-vercel-ip-longitude'),
                        region: ye(f.headers, 'x-vercel-ip-country-region', !0),
                      },
                      nextConfig: ne.nextConfig,
                      page: Se,
                      body: f.body,
                    },
                  }
                )
              );
              return ie.waitUntil && _.waitUntil(ie.waitUntil), ie.response;
            };
          }
          function ye(ne, fe, U = !1) {
            let f = ne.get(fe) || void 0;
            return U && f ? decodeURIComponent(f) : f;
          }
          function _e(ne) {
            return ne === '/api' || ne.startsWith('/api/');
          }
        })(Ce, Ce.exports),
        Ce.exports
      );
    }
      .call({})
      .default({
        name: 'pages/api/graphql',
        staticRoutes: [
          {
            page: '/',
            regex: '^/(?:/)?$',
            routeKeys: {},
            namedRegex: '^/(?:/)?$',
          },
        ],
        dynamicRoutes: [],
        nextConfig: { basePath: '' },
      })
  ))(Ks, Ks, Ks);
export { Jp as default };
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
