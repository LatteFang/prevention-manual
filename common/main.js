(global.webpackJsonp = global.webpackJsonp || []).push([ [ "common/main" ], {
    3044: function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n("e207");
        for (var r in o) "default" !== r && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(r);
        n("aa94");
        var c = n("f0c5"), u = Object(c.a)(o.default, void 0, void 0, !1, null, null, null, !1, void 0, void 0);
        t.default = u.exports;
    },
    "4a4d": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var o = {
            onLaunch: function() {
                console.log("下载更多源码就到汇云资源网"), console.log("airymz.com"), console.log("汇云资源网");
            },
            onShow: function() {
                console.log("App Show");
            },
            onHide: function() {
                console.log("App Hide");
            }
        };
        t.default = o;
    },
    aa94: function(e, t, n) {
        "use strict";
        var o = n("ff4d");
        n.n(o).a;
    },
    c439: function(e, t, n) {
        "use strict";
        (function(e) {
            n("389e");
            var t = c(n("3044")), o = c(n("66fd")), r = c(n("6776"));
            function c(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function u(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), n.push.apply(n, o);
                }
                return n;
            }
            function i(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e;
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = n, o.default.use(r.default), o.default.config.productionTip = !1, 
            t.default.mpType = "app", e(new o.default(function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? u(Object(n), !0).forEach(function(t) {
                        i(e, t, n[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    });
                }
                return e;
            }({}, t.default))).$mount();
        }).call(this, n("543d").createApp);
    },
    e207: function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n("4a4d"), r = n.n(o);
        for (var c in o) "default" !== c && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(c);
        t.default = r.a;
    },
    ff4d: function(e, t, n) {}
}, [ [ "c439", "common/runtime", "common/vendor" ] ] ]);