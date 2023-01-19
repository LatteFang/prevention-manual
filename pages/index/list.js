(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/index/list" ], {
    "46a5": function(t, e, n) {},
    "4bd9": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var u = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }(n("bb83")), o = {
                data: function() {
                    return {
                        type: "",
                        dataSource: [],
                        customStyle: {
                            marginTop: "15px",
                            color: "white",
                            backgroundColor: "#1bc78c"
                        }
                    };
                },
                onLoad: function(t) {
                    this.type = t.type, console.log(this.type);
                    var e = u.default.questionList();
                    this.dataSource = e[this.type], console.log(this.dataSource);
                },
                onShow: function() {},
                onShareAppMessage: function() {
                    return {
                        title: this.dataSource.father,
                        path: "/pages/index/list?type=" + this.type
                    };
                },
                onShareTimeline: function() {
                    return {
                        title: this.dataSource.father,
                        path: "/pages/index/list?type=" + this.type
                    };
                },
                methods: {
                    goDetail: function(e) {
                        console.log(e), t.navigateTo({
                            url: "/pages/index/detail?detail=" + encodeURIComponent(JSON.stringify(e))
                        });
                    }
                }
            };
            e.default = o;
        }).call(this, n("543d").default);
    },
    "9b02": function(t, e, n) {
        "use strict";
        (function(t) {
            n("389e"), u(n("66fd"));
            var e = u(n("f775"));
            function u(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            wx.__webpack_require_UNI_MP_PLUGIN__ = n, t(e.default);
        }).call(this, n("543d").createPage);
    },
    b26a: function(t, e, n) {
        "use strict";
        n.r(e);
        var u = n("4bd9"), o = n.n(u);
        for (var i in u) "default" !== i && function(t) {
            n.d(e, t, function() {
                return u[t];
            });
        }(i);
        e.default = o.a;
    },
    c4ea: function(t, e, n) {
        "use strict";
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return i;
        }), n.d(e, "a", function() {
            return u;
        });
        var u = {
            uButton: function() {
                return n.e("uview-ui/components/u-button/u-button").then(n.bind(null, "b05d"));
            },
            uIcon: function() {
                return n.e("uview-ui/components/u-icon/u-icon").then(n.bind(null, "3673"));
            }
        }, o = function() {
            this.$createElement, this._self._c;
        }, i = [];
    },
    e05f: function(t, e, n) {
        "use strict";
        var u = n("46a5");
        n.n(u).a;
    },
    f775: function(t, e, n) {
        "use strict";
        n.r(e);
        var u = n("c4ea"), o = n("b26a");
        for (var i in o) "default" !== i && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(i);
        n("e05f");
        var a = n("f0c5"), c = Object(a.a)(o.default, u.b, u.c, !1, null, null, null, !1, u.a, void 0);
        e.default = c.exports;
    }
}, [ [ "9b02", "common/runtime", "common/vendor" ] ] ]);