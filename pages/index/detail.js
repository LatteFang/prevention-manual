(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/index/detail" ], {
    "0b8a": function(t, n, e) {
        "use strict";
        e.d(n, "b", function() {
            return u;
        }), e.d(n, "c", function() {
            return o;
        }), e.d(n, "a", function() {
            return i;
        });
        var i = {
            uButton: function() {
                return e.e("uview-ui/components/u-button/u-button").then(e.bind(null, "b05d"));
            },
            uIcon: function() {
                return e.e("uview-ui/components/u-icon/u-icon").then(e.bind(null, "3673"));
            }
        }, u = function() {
            this.$createElement, this._self._c;
        }, o = [];
    },
    "18aa": function(t, n, e) {
        "use strict";
        (function(t) {
            e("389e"), i(e("66fd"));
            var n = i(e("ff14"));
            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = e, t(n.default);
        }).call(this, e("543d").createPage);
    },
    "336e": function(t, n, e) {},
    "857f": function(t, n, e) {
        "use strict";
        e.r(n);
        var i = e("c7a3"), u = e.n(i);
        for (var o in i) "default" !== o && function(t) {
            e.d(n, t, function() {
                return i[t];
            });
        }(o);
        n.default = u.a;
    },
    a13b: function(t, n, e) {
        "use strict";
        var i = e("336e");
        e.n(i).a;
    },
    c7a3: function(t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var i = {
            data: function() {
                return {
                    detail: {},
                    customStyle: {
                        marginTop: "15px",
                        color: "white",
                        backgroundColor: "#1bc78c"
                    }
                };
            },
            onLoad: function(t) {
                this.detail = JSON.parse(decodeURIComponent(t.detail)), console.log(this.detail);
            },
            onShareAppMessage: function() {
                return {
                    title: this.detail.question,
                    path: "/pages/index/detail?detail=" + encodeURIComponent(JSON.stringify(this.detail))
                };
            },
            onShareTimeline: function() {
                return {
                    title: this.detail.question,
                    path: "/pages/index/detail?detail=" + encodeURIComponent(JSON.stringify(this.detail))
                };
            },
            methods: {}
        };
        n.default = i;
    },
    ff14: function(t, n, e) {
        "use strict";
        e.r(n);
        var i = e("0b8a"), u = e("857f");
        for (var o in u) "default" !== o && function(t) {
            e.d(n, t, function() {
                return u[t];
            });
        }(o);
        e("a13b");
        var a = e("f0c5"), c = Object(a.a)(u.default, i.b, i.c, !1, null, null, null, !1, i.a, void 0);
        n.default = c.exports;
    }
}, [ [ "18aa", "common/runtime", "common/vendor" ] ] ]);