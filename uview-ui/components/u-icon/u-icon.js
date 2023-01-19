(global.webpackJsonp = global.webpackJsonp || []).push([ [ "uview-ui/components/u-icon/u-icon" ], {
    "03de": function(t, i, e) {},
    3673: function(t, i, e) {
        "use strict";
        e.r(i);
        var n = e("e0b7"), o = e("4328");
        for (var u in o) "default" !== u && function(t) {
            e.d(i, t, function() {
                return o[t];
            });
        }(u);
        e("a0e5");
        var l = e("f0c5"), s = Object(l.a)(o.default, n.b, n.c, !1, null, "9e9bab12", null, !1, n.a, void 0);
        i.default = s.exports;
    },
    4328: function(t, i, e) {
        "use strict";
        e.r(i);
        var n = e("6cd9"), o = e.n(n);
        for (var u in n) "default" !== u && function(t) {
            e.d(i, t, function() {
                return n[t];
            });
        }(u);
        i.default = o.a;
    },
    "6cd9": function(t, i, e) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.default = void 0;
        var n = {
            name: "u-icon",
            props: {
                name: {
                    type: String,
                    default: ""
                },
                color: {
                    type: String,
                    default: ""
                },
                size: {
                    type: [ Number, String ],
                    default: "inherit"
                },
                bold: {
                    type: Boolean,
                    default: !1
                },
                index: {
                    type: [ Number, String ],
                    default: ""
                },
                hoverClass: {
                    type: String,
                    default: ""
                },
                customPrefix: {
                    type: String,
                    default: "uicon"
                },
                label: {
                    type: [ String, Number ],
                    default: ""
                },
                labelPos: {
                    type: String,
                    default: "right"
                },
                labelSize: {
                    type: [ String, Number ],
                    default: "28"
                },
                labelColor: {
                    type: String,
                    default: "#606266"
                },
                marginLeft: {
                    type: [ String, Number ],
                    default: "6"
                },
                marginTop: {
                    type: [ String, Number ],
                    default: "6"
                },
                marginRight: {
                    type: [ String, Number ],
                    default: "6"
                },
                marginBottom: {
                    type: [ String, Number ],
                    default: "6"
                },
                imgMode: {
                    type: String,
                    default: "widthFix"
                },
                customStyle: {
                    type: Object,
                    default: function() {
                        return {};
                    }
                },
                width: {
                    type: [ String, Number ],
                    default: ""
                },
                height: {
                    type: [ String, Number ],
                    default: ""
                },
                top: {
                    type: [ String, Number ],
                    default: 0
                },
                showDecimalIcon: {
                    type: Boolean,
                    default: !1
                },
                inactiveColor: {
                    type: String,
                    default: "#ececec"
                },
                percent: {
                    type: [ Number, String ],
                    default: "50"
                }
            },
            computed: {
                customClass: function() {
                    var t = [];
                    return t.push(this.customPrefix + "-" + this.name), "uicon" == this.customPrefix ? t.push("u-iconfont") : t.push(this.customPrefix), 
                    this.showDecimalIcon && this.inactiveColor && this.$u.config.type.includes(this.inactiveColor) ? t.push("u-icon__icon--" + this.inactiveColor) : this.color && this.$u.config.type.includes(this.color) && t.push("u-icon__icon--" + this.color), 
                    t;
                },
                iconStyle: function() {
                    var t = {};
                    return t = {
                        fontSize: "inherit" == this.size ? "inherit" : this.$u.addUnit(this.size),
                        fontWeight: this.bold ? "bold" : "normal",
                        top: this.$u.addUnit(this.top)
                    }, this.showDecimalIcon && this.inactiveColor && !this.$u.config.type.includes(this.inactiveColor) ? t.color = this.inactiveColor : this.color && !this.$u.config.type.includes(this.color) && (t.color = this.color), 
                    t;
                },
                isImg: function() {
                    return -1 !== this.name.indexOf("/");
                },
                imgStyle: function() {
                    var t = {};
                    return t.width = this.width ? this.$u.addUnit(this.width) : this.$u.addUnit(this.size), 
                    t.height = this.height ? this.$u.addUnit(this.height) : this.$u.addUnit(this.size), 
                    t;
                },
                decimalIconStyle: function() {
                    var t = {};
                    return t = {
                        fontSize: "inherit" == this.size ? "inherit" : this.$u.addUnit(this.size),
                        fontWeight: this.bold ? "bold" : "normal",
                        top: this.$u.addUnit(this.top),
                        width: this.percent + "%"
                    }, this.color && !this.$u.config.type.includes(this.color) && (t.color = this.color), 
                    t;
                },
                decimalIconClass: function() {
                    var t = [];
                    return t.push(this.customPrefix + "-" + this.name), "uicon" == this.customPrefix ? t.push("u-iconfont") : t.push(this.customPrefix), 
                    this.color && this.$u.config.type.includes(this.color) ? t.push("u-icon__icon--" + this.color) : t.push("u-icon__icon--primary"), 
                    t;
                }
            },
            methods: {
                click: function() {
                    this.$emit("click", this.index);
                },
                touchstart: function() {
                    this.$emit("touchstart", this.index);
                }
            }
        };
        i.default = n;
    },
    a0e5: function(t, i, e) {
        "use strict";
        var n = e("03de");
        e.n(n).a;
    },
    e0b7: function(t, i, e) {
        "use strict";
        e.d(i, "b", function() {
            return n;
        }), e.d(i, "c", function() {
            return o;
        }), e.d(i, "a", function() {});
        var n = function() {
            var t = this, i = (t.$createElement, t._self._c, t.__get_style([ t.customStyle ])), e = t.isImg ? t.__get_style([ t.imgStyle ]) : null, n = t.isImg ? null : t.__get_style([ t.iconStyle ]), o = !t.isImg && t.showDecimalIcon ? t.__get_style([ t.decimalIconStyle ]) : null, u = "" !== t.label ? t.$u.addUnit(t.labelSize) : null, l = "" !== t.label && "right" == t.labelPos ? t.$u.addUnit(t.marginLeft) : null, s = "" !== t.label && "bottom" == t.labelPos ? t.$u.addUnit(t.marginTop) : null, c = "" !== t.label && "left" == t.labelPos ? t.$u.addUnit(t.marginRight) : null, r = "" !== t.label && "top" == t.labelPos ? t.$u.addUnit(t.marginBottom) : null;
            t.$mp.data = Object.assign({}, {
                $root: {
                    s0: i,
                    s1: e,
                    s2: n,
                    s3: o,
                    g0: u,
                    g1: l,
                    g2: s,
                    g3: c,
                    g4: r
                }
            });
        }, o = [];
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "uview-ui/components/u-icon/u-icon-create-component", {
    "uview-ui/components/u-icon/u-icon-create-component": function(t, i, e) {
        e("543d").createComponent(e("3673"));
    }
}, [ [ "uview-ui/components/u-icon/u-icon-create-component" ] ] ]);