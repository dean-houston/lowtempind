!(function (t, e) {
    "object" == typeof module && "object" == typeof module.exports
        ? (module.exports = t.document
              ? e(t, !0)
              : function (t) {
                    if (!t.document) throw new Error("jQuery requires a window with a document");
                    return e(t);
                })
        : e(t);
})("undefined" != typeof window ? window : this, function (t, e) {
    function i(t) {
        var e = t.length,
            i = rt.type(t);
        return "function" === i || rt.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === i || 0 === e || ("number" == typeof e && e > 0 && e - 1 in t);
    }
    function n(t, e, i) {
        if (rt.isFunction(e))
            return rt.grep(t, function (t, n) {
                return !!e.call(t, n, t) !== i;
            });
        if (e.nodeType)
            return rt.grep(t, function (t) {
                return (t === e) !== i;
            });
        if ("string" == typeof e) {
            if (ft.test(e)) return rt.filter(e, t, i);
            e = rt.filter(e, t);
        }
        return rt.grep(t, function (t) {
            return rt.inArray(t, e) >= 0 !== i;
        });
    }
    function o(t, e) {
        do t = t[e];
        while (t && 1 !== t.nodeType);
        return t;
    }
    function r(t) {
        var e = (xt[t] = {});
        return (
            rt.each(t.match(wt) || [], function (t, i) {
                e[i] = !0;
            }),
            e
        );
    }
    function s() {
        mt.addEventListener ? (mt.removeEventListener("DOMContentLoaded", a, !1), t.removeEventListener("load", a, !1)) : (mt.detachEvent("onreadystatechange", a), t.detachEvent("onload", a));
    }
    function a() {
        (mt.addEventListener || "load" === event.type || "complete" === mt.readyState) && (s(), rt.ready());
    }
    function l(t, e, i) {
        if (void 0 === i && 1 === t.nodeType) {
            var n = "data-" + e.replace(Et, "-$1").toLowerCase();
            if (((i = t.getAttribute(n)), "string" == typeof i)) {
                try {
                    i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : St.test(i) ? rt.parseJSON(i) : i;
                } catch (o) {}
                rt.data(t, e, i);
            } else i = void 0;
        }
        return i;
    }
    function c(t) {
        var e;
        for (e in t) if (("data" !== e || !rt.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
        return !0;
    }
    function d(t, e, i, n) {
        if (rt.acceptData(t)) {
            var o,
                r,
                s = rt.expando,
                a = t.nodeType,
                l = a ? rt.cache : t,
                c = a ? t[s] : t[s] && s;
            if ((c && l[c] && (n || l[c].data)) || void 0 !== i || "string" != typeof e)
                return (
                    c || (c = a ? (t[s] = Q.pop() || rt.guid++) : s),
                    l[c] || (l[c] = a ? {} : { toJSON: rt.noop }),
                    ("object" == typeof e || "function" == typeof e) && (n ? (l[c] = rt.extend(l[c], e)) : (l[c].data = rt.extend(l[c].data, e))),
                    (r = l[c]),
                    n || (r.data || (r.data = {}), (r = r.data)),
                    void 0 !== i && (r[rt.camelCase(e)] = i),
                    "string" == typeof e ? ((o = r[e]), null == o && (o = r[rt.camelCase(e)])) : (o = r),
                    o
                );
        }
    }
    function u(t, e, i) {
        if (rt.acceptData(t)) {
            var n,
                o,
                r = t.nodeType,
                s = r ? rt.cache : t,
                a = r ? t[rt.expando] : rt.expando;
            if (s[a]) {
                if (e && (n = i ? s[a] : s[a].data)) {
                    rt.isArray(e) ? (e = e.concat(rt.map(e, rt.camelCase))) : e in n ? (e = [e]) : ((e = rt.camelCase(e)), (e = e in n ? [e] : e.split(" "))), (o = e.length);
                    for (; o--; ) delete n[e[o]];
                    if (i ? !c(n) : !rt.isEmptyObject(n)) return;
                }
                (i || (delete s[a].data, c(s[a]))) && (r ? rt.cleanData([t], !0) : nt.deleteExpando || s != s.window ? delete s[a] : (s[a] = null));
            }
        }
    }
    function p() {
        return !0;
    }
    function f() {
        return !1;
    }
    function h() {
        try {
            return mt.activeElement;
        } catch (t) {}
    }
    function m(t) {
        var e = Dt.split("|"),
            i = t.createDocumentFragment();
        if (i.createElement) for (; e.length; ) i.createElement(e.pop());
        return i;
    }
    function g(t, e) {
        var i,
            n,
            o = 0,
            r = typeof t.getElementsByTagName !== Tt ? t.getElementsByTagName(e || "*") : typeof t.querySelectorAll !== Tt ? t.querySelectorAll(e || "*") : void 0;
        if (!r) for (r = [], i = t.childNodes || t; null != (n = i[o]); o++) !e || rt.nodeName(n, e) ? r.push(n) : rt.merge(r, g(n, e));
        return void 0 === e || (e && rt.nodeName(t, e)) ? rt.merge([t], r) : r;
    }
    function v(t) {
        Ot.test(t.type) && (t.defaultChecked = t.checked);
    }
    function y(t, e) {
        return rt.nodeName(t, "table") && rt.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t;
    }
    function b(t) {
        return (t.type = (null !== rt.find.attr(t, "type")) + "/" + t.type), t;
    }
    function w(t) {
        var e = Vt.exec(t.type);
        return e ? (t.type = e[1]) : t.removeAttribute("type"), t;
    }
    function x(t, e) {
        for (var i, n = 0; null != (i = t[n]); n++) rt._data(i, "globalEval", !e || rt._data(e[n], "globalEval"));
    }
    function k(t, e) {
        if (1 === e.nodeType && rt.hasData(t)) {
            var i,
                n,
                o,
                r = rt._data(t),
                s = rt._data(e, r),
                a = r.events;
            if (a) {
                delete s.handle, (s.events = {});
                for (i in a) for (n = 0, o = a[i].length; o > n; n++) rt.event.add(e, i, a[i][n]);
            }
            s.data && (s.data = rt.extend({}, s.data));
        }
    }
    function T(t, e) {
        var i, n, o;
        if (1 === e.nodeType) {
            if (((i = e.nodeName.toLowerCase()), !nt.noCloneEvent && e[rt.expando])) {
                o = rt._data(e);
                for (n in o.events) rt.removeEvent(e, n, o.handle);
                e.removeAttribute(rt.expando);
            }
            "script" === i && e.text !== t.text
                ? ((b(e).text = t.text), w(e))
                : "object" === i
                ? (e.parentNode && (e.outerHTML = t.outerHTML), nt.html5Clone && t.innerHTML && !rt.trim(e.innerHTML) && (e.innerHTML = t.innerHTML))
                : "input" === i && Ot.test(t.type)
                ? ((e.defaultChecked = e.checked = t.checked), e.value !== t.value && (e.value = t.value))
                : "option" === i
                ? (e.defaultSelected = e.selected = t.defaultSelected)
                : ("input" === i || "textarea" === i) && (e.defaultValue = t.defaultValue);
        }
    }
    function C(e, i) {
        var n,
            o = rt(i.createElement(e)).appendTo(i.body),
            r = t.getDefaultComputedStyle && (n = t.getDefaultComputedStyle(o[0])) ? n.display : rt.css(o[0], "display");
        return o.detach(), r;
    }
    function S(t) {
        var e = mt,
            i = te[t];
        return (
            i ||
                ((i = C(t, e)),
                ("none" !== i && i) ||
                    ((Zt = (Zt || rt("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement)), (e = (Zt[0].contentWindow || Zt[0].contentDocument).document), e.write(), e.close(), (i = C(t, e)), Zt.detach()),
                (te[t] = i)),
            i
        );
    }
    function E(t, e) {
        return {
            get: function () {
                var i = t();
                if (null != i) return i ? void delete this.get : (this.get = e).apply(this, arguments);
            },
        };
    }
    function A(t, e) {
        if (e in t) return e;
        for (var i = e.charAt(0).toUpperCase() + e.slice(1), n = e, o = fe.length; o--; ) if (((e = fe[o] + i), e in t)) return e;
        return n;
    }
    function _(t, e) {
        for (var i, n, o, r = [], s = 0, a = t.length; a > s; s++)
            (n = t[s]),
                n.style &&
                    ((r[s] = rt._data(n, "olddisplay")),
                    (i = n.style.display),
                    e
                        ? (r[s] || "none" !== i || (n.style.display = ""), "" === n.style.display && Lt(n) && (r[s] = rt._data(n, "olddisplay", S(n.nodeName))))
                        : ((o = Lt(n)), ((i && "none" !== i) || !o) && rt._data(n, "olddisplay", o ? i : rt.css(n, "display"))));
        for (s = 0; a > s; s++) (n = t[s]), n.style && ((e && "none" !== n.style.display && "" !== n.style.display) || (n.style.display = e ? r[s] || "" : "none"));
        return t;
    }
    function L(t, e, i) {
        var n = ce.exec(e);
        return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e;
    }
    function I(t, e, i, n, o) {
        for (var r = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > r; r += 2)
            "margin" === i && (s += rt.css(t, i + _t[r], !0, o)),
                n
                    ? ("content" === i && (s -= rt.css(t, "padding" + _t[r], !0, o)), "margin" !== i && (s -= rt.css(t, "border" + _t[r] + "Width", !0, o)))
                    : ((s += rt.css(t, "padding" + _t[r], !0, o)), "padding" !== i && (s += rt.css(t, "border" + _t[r] + "Width", !0, o)));
        return s;
    }
    function O(t, e, i) {
        var n = !0,
            o = "width" === e ? t.offsetWidth : t.offsetHeight,
            r = ne(t),
            s = nt.boxSizing && "border-box" === rt.css(t, "boxSizing", !1, r);
        if (0 >= o || null == o) {
            if (((o = oe(t, e, r)), (0 > o || null == o) && (o = t.style[e]), ie.test(o))) return o;
            (n = s && (nt.boxSizingReliable() || o === t.style[e])), (o = parseFloat(o) || 0);
        }
        return o + I(t, e, i || (s ? "border" : "content"), n, r) + "px";
    }
    function N(t, e, i, n, o) {
        return new N.prototype.init(t, e, i, n, o);
    }
    function j() {
        return (
            setTimeout(function () {
                he = void 0;
            }),
            (he = rt.now())
        );
    }
    function P(t, e) {
        var i,
            n = { height: t },
            o = 0;
        for (e = e ? 1 : 0; 4 > o; o += 2 - e) (i = _t[o]), (n["margin" + i] = n["padding" + i] = t);
        return e && (n.opacity = n.width = t), n;
    }
    function z(t, e, i) {
        for (var n, o = (we[e] || []).concat(we["*"]), r = 0, s = o.length; s > r; r++) if ((n = o[r].call(i, e, t))) return n;
    }
    function D(t, e, i) {
        var n,
            o,
            r,
            s,
            a,
            l,
            c,
            d,
            u = this,
            p = {},
            f = t.style,
            h = t.nodeType && Lt(t),
            m = rt._data(t, "fxshow");
        i.queue ||
            ((a = rt._queueHooks(t, "fx")),
            null == a.unqueued &&
                ((a.unqueued = 0),
                (l = a.empty.fire),
                (a.empty.fire = function () {
                    a.unqueued || l();
                })),
            a.unqueued++,
            u.always(function () {
                u.always(function () {
                    a.unqueued--, rt.queue(t, "fx").length || a.empty.fire();
                });
            })),
            1 === t.nodeType &&
                ("height" in e || "width" in e) &&
                ((i.overflow = [f.overflow, f.overflowX, f.overflowY]),
                (c = rt.css(t, "display")),
                (d = "none" === c ? rt._data(t, "olddisplay") || S(t.nodeName) : c),
                "inline" === d && "none" === rt.css(t, "float") && (nt.inlineBlockNeedsLayout && "inline" !== S(t.nodeName) ? (f.zoom = 1) : (f.display = "inline-block"))),
            i.overflow &&
                ((f.overflow = "hidden"),
                nt.shrinkWrapBlocks() ||
                    u.always(function () {
                        (f.overflow = i.overflow[0]), (f.overflowX = i.overflow[1]), (f.overflowY = i.overflow[2]);
                    }));
        for (n in e)
            if (((o = e[n]), ge.exec(o))) {
                if ((delete e[n], (r = r || "toggle" === o), o === (h ? "hide" : "show"))) {
                    if ("show" !== o || !m || void 0 === m[n]) continue;
                    h = !0;
                }
                p[n] = (m && m[n]) || rt.style(t, n);
            } else c = void 0;
        if (rt.isEmptyObject(p)) "inline" === ("none" === c ? S(t.nodeName) : c) && (f.display = c);
        else {
            m ? "hidden" in m && (h = m.hidden) : (m = rt._data(t, "fxshow", {})),
                r && (m.hidden = !h),
                h
                    ? rt(t).show()
                    : u.done(function () {
                          rt(t).hide();
                      }),
                u.done(function () {
                    var e;
                    rt._removeData(t, "fxshow");
                    for (e in p) rt.style(t, e, p[e]);
                });
            for (n in p) (s = z(h ? m[n] : 0, n, u)), n in m || ((m[n] = s.start), h && ((s.end = s.start), (s.start = "width" === n || "height" === n ? 1 : 0)));
        }
    }
    function H(t, e) {
        var i, n, o, r, s;
        for (i in t)
            if (((n = rt.camelCase(i)), (o = e[n]), (r = t[i]), rt.isArray(r) && ((o = r[1]), (r = t[i] = r[0])), i !== n && ((t[n] = r), delete t[i]), (s = rt.cssHooks[n]), s && "expand" in s)) {
                (r = s.expand(r)), delete t[n];
                for (i in r) i in t || ((t[i] = r[i]), (e[i] = o));
            } else e[n] = o;
    }
    function M(t, e, i) {
        var n,
            o,
            r = 0,
            s = be.length,
            a = rt.Deferred().always(function () {
                delete l.elem;
            }),
            l = function () {
                if (o) return !1;
                for (var e = he || j(), i = Math.max(0, c.startTime + c.duration - e), n = i / c.duration || 0, r = 1 - n, s = 0, l = c.tweens.length; l > s; s++) c.tweens[s].run(r);
                return a.notifyWith(t, [c, r, i]), 1 > r && l ? i : (a.resolveWith(t, [c]), !1);
            },
            c = a.promise({
                elem: t,
                props: rt.extend({}, e),
                opts: rt.extend(!0, { specialEasing: {} }, i),
                originalProperties: e,
                originalOptions: i,
                startTime: he || j(),
                duration: i.duration,
                tweens: [],
                createTween: function (e, i) {
                    var n = rt.Tween(t, c.opts, e, i, c.opts.specialEasing[e] || c.opts.easing);
                    return c.tweens.push(n), n;
                },
                stop: function (e) {
                    var i = 0,
                        n = e ? c.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; n > i; i++) c.tweens[i].run(1);
                    return e ? a.resolveWith(t, [c, e]) : a.rejectWith(t, [c, e]), this;
                },
            }),
            d = c.props;
        for (H(d, c.opts.specialEasing); s > r; r++) if ((n = be[r].call(c, t, d, c.opts))) return n;
        return (
            rt.map(d, z, c),
            rt.isFunction(c.opts.start) && c.opts.start.call(t, c),
            rt.fx.timer(rt.extend(l, { elem: t, anim: c, queue: c.opts.queue })),
            c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
        );
    }
    function B(t) {
        return function (e, i) {
            "string" != typeof e && ((i = e), (e = "*"));
            var n,
                o = 0,
                r = e.toLowerCase().match(wt) || [];
            if (rt.isFunction(i)) for (; (n = r[o++]); ) "+" === n.charAt(0) ? ((n = n.slice(1) || "*"), (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i);
        };
    }
    function R(t, e, i, n) {
        function o(a) {
            var l;
            return (
                (r[a] = !0),
                rt.each(t[a] || [], function (t, a) {
                    var c = a(e, i, n);
                    return "string" != typeof c || s || r[c] ? (s ? !(l = c) : void 0) : (e.dataTypes.unshift(c), o(c), !1);
                }),
                l
            );
        }
        var r = {},
            s = t === Fe;
        return o(e.dataTypes[0]) || (!r["*"] && o("*"));
    }
    function q(t, e) {
        var i,
            n,
            o = rt.ajaxSettings.flatOptions || {};
        for (n in e) void 0 !== e[n] && ((o[n] ? t : i || (i = {}))[n] = e[n]);
        return i && rt.extend(!0, t, i), t;
    }
    function W(t, e, i) {
        for (var n, o, r, s, a = t.contents, l = t.dataTypes; "*" === l[0]; ) l.shift(), void 0 === o && (o = t.mimeType || e.getResponseHeader("Content-Type"));
        if (o)
            for (s in a)
                if (a[s] && a[s].test(o)) {
                    l.unshift(s);
                    break;
                }
        if (l[0] in i) r = l[0];
        else {
            for (s in i) {
                if (!l[0] || t.converters[s + " " + l[0]]) {
                    r = s;
                    break;
                }
                n || (n = s);
            }
            r = r || n;
        }
        return r ? (r !== l[0] && l.unshift(r), i[r]) : void 0;
    }
    function F(t, e, i, n) {
        var o,
            r,
            s,
            a,
            l,
            c = {},
            d = t.dataTypes.slice();
        if (d[1]) for (s in t.converters) c[s.toLowerCase()] = t.converters[s];
        for (r = d.shift(); r; )
            if ((t.responseFields[r] && (i[t.responseFields[r]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), (l = r), (r = d.shift())))
                if ("*" === r) r = l;
                else if ("*" !== l && l !== r) {
                    if (((s = c[l + " " + r] || c["* " + r]), !s))
                        for (o in c)
                            if (((a = o.split(" ")), a[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]]))) {
                                s === !0 ? (s = c[o]) : c[o] !== !0 && ((r = a[0]), d.unshift(a[1]));
                                break;
                            }
                    if (s !== !0)
                        if (s && t["throws"]) e = s(e);
                        else
                            try {
                                e = s(e);
                            } catch (u) {
                                return { state: "parsererror", error: s ? u : "No conversion from " + l + " to " + r };
                            }
                }
        return { state: "success", data: e };
    }
    function U(t, e, i, n) {
        var o;
        if (rt.isArray(e))
            rt.each(e, function (e, o) {
                i || Ve.test(t) ? n(t, o) : U(t + "[" + ("object" == typeof o ? e : "") + "]", o, i, n);
            });
        else if (i || "object" !== rt.type(e)) n(t, e);
        else for (o in e) U(t + "[" + o + "]", e[o], i, n);
    }
    function X() {
        try {
            return new t.XMLHttpRequest();
        } catch (e) {}
    }
    function Y() {
        try {
            return new t.ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) {}
    }
    function V(t) {
        return rt.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1;
    }
    var Q = [],
        G = Q.slice,
        J = Q.concat,
        K = Q.push,
        Z = Q.indexOf,
        tt = {},
        et = tt.toString,
        it = tt.hasOwnProperty,
        nt = {},
        ot = "1.11.1",
        rt = function (t, e) {
            return new rt.fn.init(t, e);
        },
        st = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        at = /^-ms-/,
        lt = /-([\da-z])/gi,
        ct = function (t, e) {
            return e.toUpperCase();
        };
    (rt.fn = rt.prototype = {
        jquery: ot,
        constructor: rt,
        selector: "",
        length: 0,
        toArray: function () {
            return G.call(this);
        },
        get: function (t) {
            return null != t ? (0 > t ? this[t + this.length] : this[t]) : G.call(this);
        },
        pushStack: function (t) {
            var e = rt.merge(this.constructor(), t);
            return (e.prevObject = this), (e.context = this.context), e;
        },
        each: function (t, e) {
            return rt.each(this, t, e);
        },
        map: function (t) {
            return this.pushStack(
                rt.map(this, function (e, i) {
                    return t.call(e, i, e);
                })
            );
        },
        slice: function () {
            return this.pushStack(G.apply(this, arguments));
        },
        first: function () {
            return this.eq(0);
        },
        last: function () {
            return this.eq(-1);
        },
        eq: function (t) {
            var e = this.length,
                i = +t + (0 > t ? e : 0);
            return this.pushStack(i >= 0 && e > i ? [this[i]] : []);
        },
        end: function () {
            return this.prevObject || this.constructor(null);
        },
        push: K,
        sort: Q.sort,
        splice: Q.splice,
    }),
        (rt.extend = rt.fn.extend = function () {
            var t,
                e,
                i,
                n,
                o,
                r,
                s = arguments[0] || {},
                a = 1,
                l = arguments.length,
                c = !1;
            for ("boolean" == typeof s && ((c = s), (s = arguments[a] || {}), a++), "object" == typeof s || rt.isFunction(s) || (s = {}), a === l && ((s = this), a--); l > a; a++)
                if (null != (o = arguments[a]))
                    for (n in o)
                        (t = s[n]),
                            (i = o[n]),
                            s !== i &&
                                (c && i && (rt.isPlainObject(i) || (e = rt.isArray(i)))
                                    ? (e ? ((e = !1), (r = t && rt.isArray(t) ? t : [])) : (r = t && rt.isPlainObject(t) ? t : {}), (s[n] = rt.extend(c, r, i)))
                                    : void 0 !== i && (s[n] = i));
            return s;
        }),
        rt.extend({
            expando: "jQuery" + (ot + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (t) {
                throw new Error(t);
            },
            noop: function () {},
            isFunction: function (t) {
                return "function" === rt.type(t);
            },
            isArray:
                Array.isArray ||
                function (t) {
                    return "array" === rt.type(t);
                },
            isWindow: function (t) {
                return null != t && t == t.window;
            },
            isNumeric: function (t) {
                return !rt.isArray(t) && t - parseFloat(t) >= 0;
            },
            isEmptyObject: function (t) {
                var e;
                for (e in t) return !1;
                return !0;
            },
            isPlainObject: function (t) {
                var e;
                if (!t || "object" !== rt.type(t) || t.nodeType || rt.isWindow(t)) return !1;
                try {
                    if (t.constructor && !it.call(t, "constructor") && !it.call(t.constructor.prototype, "isPrototypeOf")) return !1;
                } catch (i) {
                    return !1;
                }
                if (nt.ownLast) for (e in t) return it.call(t, e);
                for (e in t);
                return void 0 === e || it.call(t, e);
            },
            type: function (t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? tt[et.call(t)] || "object" : typeof t;
            },
            globalEval: function (e) {
                e &&
                    rt.trim(e) &&
                    (
                        t.execScript ||
                        function (e) {
                            t.eval.call(t, e);
                        }
                    )(e);
            },
            camelCase: function (t) {
                return t.replace(at, "ms-").replace(lt, ct);
            },
            nodeName: function (t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
            },
            each: function (t, e, n) {
                var o,
                    r = 0,
                    s = t.length,
                    a = i(t);
                if (n) {
                    if (a) for (; s > r && ((o = e.apply(t[r], n)), o !== !1); r++);
                    else for (r in t) if (((o = e.apply(t[r], n)), o === !1)) break;
                } else if (a) for (; s > r && ((o = e.call(t[r], r, t[r])), o !== !1); r++);
                else for (r in t) if (((o = e.call(t[r], r, t[r])), o === !1)) break;
                return t;
            },
            trim: function (t) {
                return null == t ? "" : (t + "").replace(st, "");
            },
            makeArray: function (t, e) {
                var n = e || [];
                return null != t && (i(Object(t)) ? rt.merge(n, "string" == typeof t ? [t] : t) : K.call(n, t)), n;
            },
            inArray: function (t, e, i) {
                var n;
                if (e) {
                    if (Z) return Z.call(e, t, i);
                    for (n = e.length, i = i ? (0 > i ? Math.max(0, n + i) : i) : 0; n > i; i++) if (i in e && e[i] === t) return i;
                }
                return -1;
            },
            merge: function (t, e) {
                for (var i = +e.length, n = 0, o = t.length; i > n; ) t[o++] = e[n++];
                if (i !== i) for (; void 0 !== e[n]; ) t[o++] = e[n++];
                return (t.length = o), t;
            },
            grep: function (t, e, i) {
                for (var n, o = [], r = 0, s = t.length, a = !i; s > r; r++) (n = !e(t[r], r)), n !== a && o.push(t[r]);
                return o;
            },
            map: function (t, e, n) {
                var o,
                    r = 0,
                    s = t.length,
                    a = i(t),
                    l = [];
                if (a) for (; s > r; r++) (o = e(t[r], r, n)), null != o && l.push(o);
                else for (r in t) (o = e(t[r], r, n)), null != o && l.push(o);
                return J.apply([], l);
            },
            guid: 1,
            proxy: function (t, e) {
                var i, n, o;
                return (
                    "string" == typeof e && ((o = t[e]), (e = t), (t = o)),
                    rt.isFunction(t)
                        ? ((i = G.call(arguments, 2)),
                          (n = function () {
                              return t.apply(e || this, i.concat(G.call(arguments)));
                          }),
                          (n.guid = t.guid = t.guid || rt.guid++),
                          n)
                        : void 0
                );
            },
            now: function () {
                return +new Date();
            },
            support: nt,
        }),
        rt.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
            tt["[object " + e + "]"] = e.toLowerCase();
        });
    var dt = (function (t) {
        function e(t, e, i, n) {
            var o, r, s, a, l, c, u, f, h, m;
            if (((e ? e.ownerDocument || e : R) !== N && O(e), (e = e || N), (i = i || []), !t || "string" != typeof t)) return i;
            if (1 !== (a = e.nodeType) && 9 !== a) return [];
            if (P && !n) {
                if ((o = bt.exec(t)))
                    if ((s = o[1])) {
                        if (9 === a) {
                            if (((r = e.getElementById(s)), !r || !r.parentNode)) return i;
                            if (r.id === s) return i.push(r), i;
                        } else if (e.ownerDocument && (r = e.ownerDocument.getElementById(s)) && M(e, r) && r.id === s) return i.push(r), i;
                    } else {
                        if (o[2]) return tt.apply(i, e.getElementsByTagName(t)), i;
                        if ((s = o[3]) && x.getElementsByClassName && e.getElementsByClassName) return tt.apply(i, e.getElementsByClassName(s)), i;
                    }
                if (x.qsa && (!z || !z.test(t))) {
                    if (((f = u = B), (h = e), (m = 9 === a && t), 1 === a && "object" !== e.nodeName.toLowerCase())) {
                        for (c = S(t), (u = e.getAttribute("id")) ? (f = u.replace(xt, "\\$&")) : e.setAttribute("id", f), f = "[id='" + f + "'] ", l = c.length; l--; ) c[l] = f + p(c[l]);
                        (h = (wt.test(t) && d(e.parentNode)) || e), (m = c.join(","));
                    }
                    if (m)
                        try {
                            return tt.apply(i, h.querySelectorAll(m)), i;
                        } catch (g) {
                        } finally {
                            u || e.removeAttribute("id");
                        }
                }
            }
            return A(t.replace(ct, "$1"), e, i, n);
        }
        function i() {
            function t(i, n) {
                return e.push(i + " ") > k.cacheLength && delete t[e.shift()], (t[i + " "] = n);
            }
            var e = [];
            return t;
        }
        function n(t) {
            return (t[B] = !0), t;
        }
        function o(t) {
            var e = N.createElement("div");
            try {
                return !!t(e);
            } catch (i) {
                return !1;
            } finally {
                e.parentNode && e.parentNode.removeChild(e), (e = null);
            }
        }
        function r(t, e) {
            for (var i = t.split("|"), n = t.length; n--; ) k.attrHandle[i[n]] = e;
        }
        function s(t, e) {
            var i = e && t,
                n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || Q) - (~t.sourceIndex || Q);
            if (n) return n;
            if (i) for (; (i = i.nextSibling); ) if (i === e) return -1;
            return t ? 1 : -1;
        }
        function a(t) {
            return function (e) {
                var i = e.nodeName.toLowerCase();
                return "input" === i && e.type === t;
            };
        }
        function l(t) {
            return function (e) {
                var i = e.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && e.type === t;
            };
        }
        function c(t) {
            return n(function (e) {
                return (
                    (e = +e),
                    n(function (i, n) {
                        for (var o, r = t([], i.length, e), s = r.length; s--; ) i[(o = r[s])] && (i[o] = !(n[o] = i[o]));
                    })
                );
            });
        }
        function d(t) {
            return t && typeof t.getElementsByTagName !== V && t;
        }
        function u() {}
        function p(t) {
            for (var e = 0, i = t.length, n = ""; i > e; e++) n += t[e].value;
            return n;
        }
        function f(t, e, i) {
            var n = e.dir,
                o = i && "parentNode" === n,
                r = W++;
            return e.first
                ? function (e, i, r) {
                      for (; (e = e[n]); ) if (1 === e.nodeType || o) return t(e, i, r);
                  }
                : function (e, i, s) {
                      var a,
                          l,
                          c = [q, r];
                      if (s) {
                          for (; (e = e[n]); ) if ((1 === e.nodeType || o) && t(e, i, s)) return !0;
                      } else
                          for (; (e = e[n]); )
                              if (1 === e.nodeType || o) {
                                  if (((l = e[B] || (e[B] = {})), (a = l[n]) && a[0] === q && a[1] === r)) return (c[2] = a[2]);
                                  if (((l[n] = c), (c[2] = t(e, i, s)))) return !0;
                              }
                  };
        }
        function h(t) {
            return t.length > 1
                ? function (e, i, n) {
                      for (var o = t.length; o--; ) if (!t[o](e, i, n)) return !1;
                      return !0;
                  }
                : t[0];
        }
        function m(t, i, n) {
            for (var o = 0, r = i.length; r > o; o++) e(t, i[o], n);
            return n;
        }
        function g(t, e, i, n, o) {
            for (var r, s = [], a = 0, l = t.length, c = null != e; l > a; a++) (r = t[a]) && (!i || i(r, n, o)) && (s.push(r), c && e.push(a));
            return s;
        }
        function v(t, e, i, o, r, s) {
            return (
                o && !o[B] && (o = v(o)),
                r && !r[B] && (r = v(r, s)),
                n(function (n, s, a, l) {
                    var c,
                        d,
                        u,
                        p = [],
                        f = [],
                        h = s.length,
                        v = n || m(e || "*", a.nodeType ? [a] : a, []),
                        y = !t || (!n && e) ? v : g(v, p, t, a, l),
                        b = i ? (r || (n ? t : h || o) ? [] : s) : y;
                    if ((i && i(y, b, a, l), o)) for (c = g(b, f), o(c, [], a, l), d = c.length; d--; ) (u = c[d]) && (b[f[d]] = !(y[f[d]] = u));
                    if (n) {
                        if (r || t) {
                            if (r) {
                                for (c = [], d = b.length; d--; ) (u = b[d]) && c.push((y[d] = u));
                                r(null, (b = []), c, l);
                            }
                            for (d = b.length; d--; ) (u = b[d]) && (c = r ? it.call(n, u) : p[d]) > -1 && (n[c] = !(s[c] = u));
                        }
                    } else (b = g(b === s ? b.splice(h, b.length) : b)), r ? r(null, s, b, l) : tt.apply(s, b);
                })
            );
        }
        function y(t) {
            for (
                var e,
                    i,
                    n,
                    o = t.length,
                    r = k.relative[t[0].type],
                    s = r || k.relative[" "],
                    a = r ? 1 : 0,
                    l = f(
                        function (t) {
                            return t === e;
                        },
                        s,
                        !0
                    ),
                    c = f(
                        function (t) {
                            return it.call(e, t) > -1;
                        },
                        s,
                        !0
                    ),
                    d = [
                        function (t, i, n) {
                            return (!r && (n || i !== _)) || ((e = i).nodeType ? l(t, i, n) : c(t, i, n));
                        },
                    ];
                o > a;
                a++
            )
                if ((i = k.relative[t[a].type])) d = [f(h(d), i)];
                else {
                    if (((i = k.filter[t[a].type].apply(null, t[a].matches)), i[B])) {
                        for (n = ++a; o > n && !k.relative[t[n].type]; n++);
                        return v(a > 1 && h(d), a > 1 && p(t.slice(0, a - 1).concat({ value: " " === t[a - 2].type ? "*" : "" })).replace(ct, "$1"), i, n > a && y(t.slice(a, n)), o > n && y((t = t.slice(n))), o > n && p(t));
                    }
                    d.push(i);
                }
            return h(d);
        }
        function b(t, i) {
            var o = i.length > 0,
                r = t.length > 0,
                s = function (n, s, a, l, c) {
                    var d,
                        u,
                        p,
                        f = 0,
                        h = "0",
                        m = n && [],
                        v = [],
                        y = _,
                        b = n || (r && k.find.TAG("*", c)),
                        w = (q += null == y ? 1 : Math.random() || 0.1),
                        x = b.length;
                    for (c && (_ = s !== N && s); h !== x && null != (d = b[h]); h++) {
                        if (r && d) {
                            for (u = 0; (p = t[u++]); )
                                if (p(d, s, a)) {
                                    l.push(d);
                                    break;
                                }
                            c && (q = w);
                        }
                        o && ((d = !p && d) && f--, n && m.push(d));
                    }
                    if (((f += h), o && h !== f)) {
                        for (u = 0; (p = i[u++]); ) p(m, v, s, a);
                        if (n) {
                            if (f > 0) for (; h--; ) m[h] || v[h] || (v[h] = K.call(l));
                            v = g(v);
                        }
                        tt.apply(l, v), c && !n && v.length > 0 && f + i.length > 1 && e.uniqueSort(l);
                    }
                    return c && ((q = w), (_ = y)), m;
                };
            return o ? n(s) : s;
        }
        var w,
            x,
            k,
            T,
            C,
            S,
            E,
            A,
            _,
            L,
            I,
            O,
            N,
            j,
            P,
            z,
            D,
            H,
            M,
            B = "sizzle" + -new Date(),
            R = t.document,
            q = 0,
            W = 0,
            F = i(),
            U = i(),
            X = i(),
            Y = function (t, e) {
                return t === e && (I = !0), 0;
            },
            V = "undefined",
            Q = 1 << 31,
            G = {}.hasOwnProperty,
            J = [],
            K = J.pop,
            Z = J.push,
            tt = J.push,
            et = J.slice,
            it =
                J.indexOf ||
                function (t) {
                    for (var e = 0, i = this.length; i > e; e++) if (this[e] === t) return e;
                    return -1;
                },
            nt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ot = "[\\x20\\t\\r\\n\\f]",
            rt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            st = rt.replace("w", "w#"),
            at = "\\[" + ot + "*(" + rt + ")(?:" + ot + "*([*^$|!~]?=)" + ot + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + st + "))|)" + ot + "*\\]",
            lt = ":(" + rt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + at + ")*)|.*)\\)|)",
            ct = new RegExp("^" + ot + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ot + "+$", "g"),
            dt = new RegExp("^" + ot + "*," + ot + "*"),
            ut = new RegExp("^" + ot + "*([>+~]|" + ot + ")" + ot + "*"),
            pt = new RegExp("=" + ot + "*([^\\]'\"]*?)" + ot + "*\\]", "g"),
            ft = new RegExp(lt),
            ht = new RegExp("^" + st + "$"),
            mt = {
                ID: new RegExp("^#(" + rt + ")"),
                CLASS: new RegExp("^\\.(" + rt + ")"),
                TAG: new RegExp("^(" + rt.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + at),
                PSEUDO: new RegExp("^" + lt),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ot + "*(even|odd|(([+-]|)(\\d*)n|)" + ot + "*(?:([+-]|)" + ot + "*(\\d+)|))" + ot + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + nt + ")$", "i"),
                needsContext: new RegExp("^" + ot + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ot + "*((?:-\\d)?\\d*)" + ot + "*\\)|)(?=[^-]|$)", "i"),
            },
            gt = /^(?:input|select|textarea|button)$/i,
            vt = /^h\d$/i,
            yt = /^[^{]+\{\s*\[native \w/,
            bt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            wt = /[+~]/,
            xt = /'|\\/g,
            kt = new RegExp("\\\\([\\da-f]{1,6}" + ot + "?|(" + ot + ")|.)", "ig"),
            Tt = function (t, e, i) {
                var n = "0x" + e - 65536;
                return n !== n || i ? e : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320);
            };
        try {
            tt.apply((J = et.call(R.childNodes)), R.childNodes), J[R.childNodes.length].nodeType;
        } catch (Ct) {
            tt = {
                apply: J.length
                    ? function (t, e) {
                          Z.apply(t, et.call(e));
                      }
                    : function (t, e) {
                          for (var i = t.length, n = 0; (t[i++] = e[n++]); );
                          t.length = i - 1;
                      },
            };
        }
        (x = e.support = {}),
            (C = e.isXML = function (t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return e ? "HTML" !== e.nodeName : !1;
            }),
            (O = e.setDocument = function (t) {
                var e,
                    i = t ? t.ownerDocument || t : R,
                    n = i.defaultView;
                return i !== N && 9 === i.nodeType && i.documentElement
                    ? ((N = i),
                      (j = i.documentElement),
                      (P = !C(i)),
                      n &&
                          n !== n.top &&
                          (n.addEventListener
                              ? n.addEventListener(
                                    "unload",
                                    function () {
                                        O();
                                    },
                                    !1
                                )
                              : n.attachEvent &&
                                n.attachEvent("onunload", function () {
                                    O();
                                })),
                      (x.attributes = o(function (t) {
                          return (t.className = "i"), !t.getAttribute("className");
                      })),
                      (x.getElementsByTagName = o(function (t) {
                          return t.appendChild(i.createComment("")), !t.getElementsByTagName("*").length;
                      })),
                      (x.getElementsByClassName =
                          yt.test(i.getElementsByClassName) &&
                          o(function (t) {
                              return (t.innerHTML = "<div class='a'></div><div class='a i'></div>"), (t.firstChild.className = "i"), 2 === t.getElementsByClassName("i").length;
                          })),
                      (x.getById = o(function (t) {
                          return (j.appendChild(t).id = B), !i.getElementsByName || !i.getElementsByName(B).length;
                      })),
                      x.getById
                          ? ((k.find.ID = function (t, e) {
                                if (typeof e.getElementById !== V && P) {
                                    var i = e.getElementById(t);
                                    return i && i.parentNode ? [i] : [];
                                }
                            }),
                            (k.filter.ID = function (t) {
                                var e = t.replace(kt, Tt);
                                return function (t) {
                                    return t.getAttribute("id") === e;
                                };
                            }))
                          : (delete k.find.ID,
                            (k.filter.ID = function (t) {
                                var e = t.replace(kt, Tt);
                                return function (t) {
                                    var i = typeof t.getAttributeNode !== V && t.getAttributeNode("id");
                                    return i && i.value === e;
                                };
                            })),
                      (k.find.TAG = x.getElementsByTagName
                          ? function (t, e) {
                                return typeof e.getElementsByTagName !== V ? e.getElementsByTagName(t) : void 0;
                            }
                          : function (t, e) {
                                var i,
                                    n = [],
                                    o = 0,
                                    r = e.getElementsByTagName(t);
                                if ("*" === t) {
                                    for (; (i = r[o++]); ) 1 === i.nodeType && n.push(i);
                                    return n;
                                }
                                return r;
                            }),
                      (k.find.CLASS =
                          x.getElementsByClassName &&
                          function (t, e) {
                              return typeof e.getElementsByClassName !== V && P ? e.getElementsByClassName(t) : void 0;
                          }),
                      (D = []),
                      (z = []),
                      (x.qsa = yt.test(i.querySelectorAll)) &&
                          (o(function (t) {
                              (t.innerHTML = "<select msallowclip=''><option selected=''></option></select>"),
                                  t.querySelectorAll("[msallowclip^='']").length && z.push("[*^$]=" + ot + "*(?:''|\"\")"),
                                  t.querySelectorAll("[selected]").length || z.push("\\[" + ot + "*(?:value|" + nt + ")"),
                                  t.querySelectorAll(":checked").length || z.push(":checked");
                          }),
                          o(function (t) {
                              var e = i.createElement("input");
                              e.setAttribute("type", "hidden"),
                                  t.appendChild(e).setAttribute("name", "D"),
                                  t.querySelectorAll("[name=d]").length && z.push("name" + ot + "*[*^$|!~]?="),
                                  t.querySelectorAll(":enabled").length || z.push(":enabled", ":disabled"),
                                  t.querySelectorAll("*,:x"),
                                  z.push(",.*:");
                          })),
                      (x.matchesSelector = yt.test((H = j.matches || j.webkitMatchesSelector || j.mozMatchesSelector || j.oMatchesSelector || j.msMatchesSelector))) &&
                          o(function (t) {
                              (x.disconnectedMatch = H.call(t, "div")), H.call(t, "[s!='']:x"), D.push("!=", lt);
                          }),
                      (z = z.length && new RegExp(z.join("|"))),
                      (D = D.length && new RegExp(D.join("|"))),
                      (e = yt.test(j.compareDocumentPosition)),
                      (M =
                          e || yt.test(j.contains)
                              ? function (t, e) {
                                    var i = 9 === t.nodeType ? t.documentElement : t,
                                        n = e && e.parentNode;
                                    return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)));
                                }
                              : function (t, e) {
                                    if (e) for (; (e = e.parentNode); ) if (e === t) return !0;
                                    return !1;
                                }),
                      (Y = e
                          ? function (t, e) {
                                if (t === e) return (I = !0), 0;
                                var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                                return n
                                    ? n
                                    : ((n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1),
                                      1 & n || (!x.sortDetached && e.compareDocumentPosition(t) === n)
                                          ? t === i || (t.ownerDocument === R && M(R, t))
                                              ? -1
                                              : e === i || (e.ownerDocument === R && M(R, e))
                                              ? 1
                                              : L
                                              ? it.call(L, t) - it.call(L, e)
                                              : 0
                                          : 4 & n
                                          ? -1
                                          : 1);
                            }
                          : function (t, e) {
                                if (t === e) return (I = !0), 0;
                                var n,
                                    o = 0,
                                    r = t.parentNode,
                                    a = e.parentNode,
                                    l = [t],
                                    c = [e];
                                if (!r || !a) return t === i ? -1 : e === i ? 1 : r ? -1 : a ? 1 : L ? it.call(L, t) - it.call(L, e) : 0;
                                if (r === a) return s(t, e);
                                for (n = t; (n = n.parentNode); ) l.unshift(n);
                                for (n = e; (n = n.parentNode); ) c.unshift(n);
                                for (; l[o] === c[o]; ) o++;
                                return o ? s(l[o], c[o]) : l[o] === R ? -1 : c[o] === R ? 1 : 0;
                            }),
                      i)
                    : N;
            }),
            (e.matches = function (t, i) {
                return e(t, null, null, i);
            }),
            (e.matchesSelector = function (t, i) {
                if (((t.ownerDocument || t) !== N && O(t), (i = i.replace(pt, "='$1']")), x.matchesSelector && P && (!D || !D.test(i)) && (!z || !z.test(i))))
                    try {
                        var n = H.call(t, i);
                        if (n || x.disconnectedMatch || (t.document && 11 !== t.document.nodeType)) return n;
                    } catch (o) {}
                return e(i, N, null, [t]).length > 0;
            }),
            (e.contains = function (t, e) {
                return (t.ownerDocument || t) !== N && O(t), M(t, e);
            }),
            (e.attr = function (t, e) {
                (t.ownerDocument || t) !== N && O(t);
                var i = k.attrHandle[e.toLowerCase()],
                    n = i && G.call(k.attrHandle, e.toLowerCase()) ? i(t, e, !P) : void 0;
                return void 0 !== n ? n : x.attributes || !P ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null;
            }),
            (e.error = function (t) {
                throw new Error("Syntax error, unrecognized expression: " + t);
            }),
            (e.uniqueSort = function (t) {
                var e,
                    i = [],
                    n = 0,
                    o = 0;
                if (((I = !x.detectDuplicates), (L = !x.sortStable && t.slice(0)), t.sort(Y), I)) {
                    for (; (e = t[o++]); ) e === t[o] && (n = i.push(o));
                    for (; n--; ) t.splice(i[n], 1);
                }
                return (L = null), t;
            }),
            (T = e.getText = function (t) {
                var e,
                    i = "",
                    n = 0,
                    o = t.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) i += T(t);
                    } else if (3 === o || 4 === o) return t.nodeValue;
                } else for (; (e = t[n++]); ) i += T(e);
                return i;
            }),
            (k = e.selectors = {
                cacheLength: 50,
                createPseudo: n,
                match: mt,
                attrHandle: {},
                find: {},
                relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                preFilter: {
                    ATTR: function (t) {
                        return (t[1] = t[1].replace(kt, Tt)), (t[3] = (t[3] || t[4] || t[5] || "").replace(kt, Tt)), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4);
                    },
                    CHILD: function (t) {
                        return (
                            (t[1] = t[1].toLowerCase()),
                            "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), (t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3]))), (t[5] = +(t[7] + t[8] || "odd" === t[3]))) : t[3] && e.error(t[0]),
                            t
                        );
                    },
                    PSEUDO: function (t) {
                        var e,
                            i = !t[6] && t[2];
                        return mt.CHILD.test(t[0])
                            ? null
                            : (t[3] ? (t[2] = t[4] || t[5] || "") : i && ft.test(i) && (e = S(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && ((t[0] = t[0].slice(0, e)), (t[2] = i.slice(0, e))), t.slice(0, 3));
                    },
                },
                filter: {
                    TAG: function (t) {
                        var e = t.replace(kt, Tt).toLowerCase();
                        return "*" === t
                            ? function () {
                                  return !0;
                              }
                            : function (t) {
                                  return t.nodeName && t.nodeName.toLowerCase() === e;
                              };
                    },
                    CLASS: function (t) {
                        var e = F[t + " "];
                        return (
                            e ||
                            ((e = new RegExp("(^|" + ot + ")" + t + "(" + ot + "|$)")) &&
                                F(t, function (t) {
                                    return e.test(("string" == typeof t.className && t.className) || (typeof t.getAttribute !== V && t.getAttribute("class")) || "");
                                }))
                        );
                    },
                    ATTR: function (t, i, n) {
                        return function (o) {
                            var r = e.attr(o, t);
                            return null == r
                                ? "!=" === i
                                : i
                                ? ((r += ""),
                                  "=" === i
                                      ? r === n
                                      : "!=" === i
                                      ? r !== n
                                      : "^=" === i
                                      ? n && 0 === r.indexOf(n)
                                      : "*=" === i
                                      ? n && r.indexOf(n) > -1
                                      : "$=" === i
                                      ? n && r.slice(-n.length) === n
                                      : "~=" === i
                                      ? (" " + r + " ").indexOf(n) > -1
                                      : "|=" === i
                                      ? r === n || r.slice(0, n.length + 1) === n + "-"
                                      : !1)
                                : !0;
                        };
                    },
                    CHILD: function (t, e, i, n, o) {
                        var r = "nth" !== t.slice(0, 3),
                            s = "last" !== t.slice(-4),
                            a = "of-type" === e;
                        return 1 === n && 0 === o
                            ? function (t) {
                                  return !!t.parentNode;
                              }
                            : function (e, i, l) {
                                  var c,
                                      d,
                                      u,
                                      p,
                                      f,
                                      h,
                                      m = r !== s ? "nextSibling" : "previousSibling",
                                      g = e.parentNode,
                                      v = a && e.nodeName.toLowerCase(),
                                      y = !l && !a;
                                  if (g) {
                                      if (r) {
                                          for (; m; ) {
                                              for (u = e; (u = u[m]); ) if (a ? u.nodeName.toLowerCase() === v : 1 === u.nodeType) return !1;
                                              h = m = "only" === t && !h && "nextSibling";
                                          }
                                          return !0;
                                      }
                                      if (((h = [s ? g.firstChild : g.lastChild]), s && y)) {
                                          for (d = g[B] || (g[B] = {}), c = d[t] || [], f = c[0] === q && c[1], p = c[0] === q && c[2], u = f && g.childNodes[f]; (u = (++f && u && u[m]) || (p = f = 0) || h.pop()); )
                                              if (1 === u.nodeType && ++p && u === e) {
                                                  d[t] = [q, f, p];
                                                  break;
                                              }
                                      } else if (y && (c = (e[B] || (e[B] = {}))[t]) && c[0] === q) p = c[1];
                                      else for (; (u = (++f && u && u[m]) || (p = f = 0) || h.pop()) && ((a ? u.nodeName.toLowerCase() !== v : 1 !== u.nodeType) || !++p || (y && ((u[B] || (u[B] = {}))[t] = [q, p]), u !== e)); );
                                      return (p -= o), p === n || (p % n === 0 && p / n >= 0);
                                  }
                              };
                    },
                    PSEUDO: function (t, i) {
                        var o,
                            r = k.pseudos[t] || k.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                        return r[B]
                            ? r(i)
                            : r.length > 1
                            ? ((o = [t, t, "", i]),
                              k.setFilters.hasOwnProperty(t.toLowerCase())
                                  ? n(function (t, e) {
                                        for (var n, o = r(t, i), s = o.length; s--; ) (n = it.call(t, o[s])), (t[n] = !(e[n] = o[s]));
                                    })
                                  : function (t) {
                                        return r(t, 0, o);
                                    })
                            : r;
                    },
                },
                pseudos: {
                    not: n(function (t) {
                        var e = [],
                            i = [],
                            o = E(t.replace(ct, "$1"));
                        return o[B]
                            ? n(function (t, e, i, n) {
                                  for (var r, s = o(t, null, n, []), a = t.length; a--; ) (r = s[a]) && (t[a] = !(e[a] = r));
                              })
                            : function (t, n, r) {
                                  return (e[0] = t), o(e, null, r, i), !i.pop();
                              };
                    }),
                    has: n(function (t) {
                        return function (i) {
                            return e(t, i).length > 0;
                        };
                    }),
                    contains: n(function (t) {
                        return function (e) {
                            return (e.textContent || e.innerText || T(e)).indexOf(t) > -1;
                        };
                    }),
                    lang: n(function (t) {
                        return (
                            ht.test(t || "") || e.error("unsupported lang: " + t),
                            (t = t.replace(kt, Tt).toLowerCase()),
                            function (e) {
                                var i;
                                do if ((i = P ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))) return (i = i.toLowerCase()), i === t || 0 === i.indexOf(t + "-");
                                while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1;
                            }
                        );
                    }),
                    target: function (e) {
                        var i = t.location && t.location.hash;
                        return i && i.slice(1) === e.id;
                    },
                    root: function (t) {
                        return t === j;
                    },
                    focus: function (t) {
                        return t === N.activeElement && (!N.hasFocus || N.hasFocus()) && !!(t.type || t.href || ~t.tabIndex);
                    },
                    enabled: function (t) {
                        return t.disabled === !1;
                    },
                    disabled: function (t) {
                        return t.disabled === !0;
                    },
                    checked: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return ("input" === e && !!t.checked) || ("option" === e && !!t.selected);
                    },
                    selected: function (t) {
                        return t.parentNode && t.parentNode.selectedIndex, t.selected === !0;
                    },
                    empty: function (t) {
                        for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return !1;
                        return !0;
                    },
                    parent: function (t) {
                        return !k.pseudos.empty(t);
                    },
                    header: function (t) {
                        return vt.test(t.nodeName);
                    },
                    input: function (t) {
                        return gt.test(t.nodeName);
                    },
                    button: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return ("input" === e && "button" === t.type) || "button" === e;
                    },
                    text: function (t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase());
                    },
                    first: c(function () {
                        return [0];
                    }),
                    last: c(function (t, e) {
                        return [e - 1];
                    }),
                    eq: c(function (t, e, i) {
                        return [0 > i ? i + e : i];
                    }),
                    even: c(function (t, e) {
                        for (var i = 0; e > i; i += 2) t.push(i);
                        return t;
                    }),
                    odd: c(function (t, e) {
                        for (var i = 1; e > i; i += 2) t.push(i);
                        return t;
                    }),
                    lt: c(function (t, e, i) {
                        for (var n = 0 > i ? i + e : i; --n >= 0; ) t.push(n);
                        return t;
                    }),
                    gt: c(function (t, e, i) {
                        for (var n = 0 > i ? i + e : i; ++n < e; ) t.push(n);
                        return t;
                    }),
                },
            }),
            (k.pseudos.nth = k.pseudos.eq);
        for (w in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) k.pseudos[w] = a(w);
        for (w in { submit: !0, reset: !0 }) k.pseudos[w] = l(w);
        return (
            (u.prototype = k.filters = k.pseudos),
            (k.setFilters = new u()),
            (S = e.tokenize = function (t, i) {
                var n,
                    o,
                    r,
                    s,
                    a,
                    l,
                    c,
                    d = U[t + " "];
                if (d) return i ? 0 : d.slice(0);
                for (a = t, l = [], c = k.preFilter; a; ) {
                    (!n || (o = dt.exec(a))) && (o && (a = a.slice(o[0].length) || a), l.push((r = []))), (n = !1), (o = ut.exec(a)) && ((n = o.shift()), r.push({ value: n, type: o[0].replace(ct, " ") }), (a = a.slice(n.length)));
                    for (s in k.filter) !(o = mt[s].exec(a)) || (c[s] && !(o = c[s](o))) || ((n = o.shift()), r.push({ value: n, type: s, matches: o }), (a = a.slice(n.length)));
                    if (!n) break;
                }
                return i ? a.length : a ? e.error(t) : U(t, l).slice(0);
            }),
            (E = e.compile = function (t, e) {
                var i,
                    n = [],
                    o = [],
                    r = X[t + " "];
                if (!r) {
                    for (e || (e = S(t)), i = e.length; i--; ) (r = y(e[i])), r[B] ? n.push(r) : o.push(r);
                    (r = X(t, b(o, n))), (r.selector = t);
                }
                return r;
            }),
            (A = e.select = function (t, e, i, n) {
                var o,
                    r,
                    s,
                    a,
                    l,
                    c = "function" == typeof t && t,
                    u = !n && S((t = c.selector || t));
                if (((i = i || []), 1 === u.length)) {
                    if (((r = u[0] = u[0].slice(0)), r.length > 2 && "ID" === (s = r[0]).type && x.getById && 9 === e.nodeType && P && k.relative[r[1].type])) {
                        if (((e = (k.find.ID(s.matches[0].replace(kt, Tt), e) || [])[0]), !e)) return i;
                        c && (e = e.parentNode), (t = t.slice(r.shift().value.length));
                    }
                    for (o = mt.needsContext.test(t) ? 0 : r.length; o-- && ((s = r[o]), !k.relative[(a = s.type)]); )
                        if ((l = k.find[a]) && (n = l(s.matches[0].replace(kt, Tt), (wt.test(r[0].type) && d(e.parentNode)) || e))) {
                            if ((r.splice(o, 1), (t = n.length && p(r)), !t)) return tt.apply(i, n), i;
                            break;
                        }
                }
                return (c || E(t, u))(n, e, !P, i, (wt.test(t) && d(e.parentNode)) || e), i;
            }),
            (x.sortStable = B.split("").sort(Y).join("") === B),
            (x.detectDuplicates = !!I),
            O(),
            (x.sortDetached = o(function (t) {
                return 1 & t.compareDocumentPosition(N.createElement("div"));
            })),
            o(function (t) {
                return (t.innerHTML = "<a href='#'></a>"), "#" === t.firstChild.getAttribute("href");
            }) ||
                r("type|href|height|width", function (t, e, i) {
                    return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
                }),
            (x.attributes &&
                o(function (t) {
                    return (t.innerHTML = "<input/>"), t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value");
                })) ||
                r("value", function (t, e, i) {
                    return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue;
                }),
            o(function (t) {
                return null == t.getAttribute("disabled");
            }) ||
                r(nt, function (t, e, i) {
                    var n;
                    return i ? void 0 : t[e] === !0 ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null;
                }),
            e
        );
    })(t);
    (rt.find = dt), (rt.expr = dt.selectors), (rt.expr[":"] = rt.expr.pseudos), (rt.unique = dt.uniqueSort), (rt.text = dt.getText), (rt.isXMLDoc = dt.isXML), (rt.contains = dt.contains);
    var ut = rt.expr.match.needsContext,
        pt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        ft = /^.[^:#\[\.,]*$/;
    (rt.filter = function (t, e, i) {
        var n = e[0];
        return (
            i && (t = ":not(" + t + ")"),
            1 === e.length && 1 === n.nodeType
                ? rt.find.matchesSelector(n, t)
                    ? [n]
                    : []
                : rt.find.matches(
                      t,
                      rt.grep(e, function (t) {
                          return 1 === t.nodeType;
                      })
                  )
        );
    }),
        rt.fn.extend({
            find: function (t) {
                var e,
                    i = [],
                    n = this,
                    o = n.length;
                if ("string" != typeof t)
                    return this.pushStack(
                        rt(t).filter(function () {
                            for (e = 0; o > e; e++) if (rt.contains(n[e], this)) return !0;
                        })
                    );
                for (e = 0; o > e; e++) rt.find(t, n[e], i);
                return (i = this.pushStack(o > 1 ? rt.unique(i) : i)), (i.selector = this.selector ? this.selector + " " + t : t), i;
            },
            filter: function (t) {
                return this.pushStack(n(this, t || [], !1));
            },
            not: function (t) {
                return this.pushStack(n(this, t || [], !0));
            },
            is: function (t) {
                return !!n(this, "string" == typeof t && ut.test(t) ? rt(t) : t || [], !1).length;
            },
        });
    var ht,
        mt = t.document,
        gt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        vt = (rt.fn.init = function (t, e) {
            var i, n;
            if (!t) return this;
            if ("string" == typeof t) {
                if (((i = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : gt.exec(t)), !i || (!i[1] && e))) return !e || e.jquery ? (e || ht).find(t) : this.constructor(e).find(t);
                if (i[1]) {
                    if (((e = e instanceof rt ? e[0] : e), rt.merge(this, rt.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : mt, !0)), pt.test(i[1]) && rt.isPlainObject(e)))
                        for (i in e) rt.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                    return this;
                }
                if (((n = mt.getElementById(i[2])), n && n.parentNode)) {
                    if (n.id !== i[2]) return ht.find(t);
                    (this.length = 1), (this[0] = n);
                }
                return (this.context = mt), (this.selector = t), this;
            }
            return t.nodeType
                ? ((this.context = this[0] = t), (this.length = 1), this)
                : rt.isFunction(t)
                ? "undefined" != typeof ht.ready
                    ? ht.ready(t)
                    : t(rt)
                : (void 0 !== t.selector && ((this.selector = t.selector), (this.context = t.context)), rt.makeArray(t, this));
        });
    (vt.prototype = rt.fn), (ht = rt(mt));
    var yt = /^(?:parents|prev(?:Until|All))/,
        bt = { children: !0, contents: !0, next: !0, prev: !0 };
    rt.extend({
        dir: function (t, e, i) {
            for (var n = [], o = t[e]; o && 9 !== o.nodeType && (void 0 === i || 1 !== o.nodeType || !rt(o).is(i)); ) 1 === o.nodeType && n.push(o), (o = o[e]);
            return n;
        },
        sibling: function (t, e) {
            for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
            return i;
        },
    }),
        rt.fn.extend({
            has: function (t) {
                var e,
                    i = rt(t, this),
                    n = i.length;
                return this.filter(function () {
                    for (e = 0; n > e; e++) if (rt.contains(this, i[e])) return !0;
                });
            },
            closest: function (t, e) {
                for (var i, n = 0, o = this.length, r = [], s = ut.test(t) || "string" != typeof t ? rt(t, e || this.context) : 0; o > n; n++)
                    for (i = this[n]; i && i !== e; i = i.parentNode)
                        if (i.nodeType < 11 && (s ? s.index(i) > -1 : 1 === i.nodeType && rt.find.matchesSelector(i, t))) {
                            r.push(i);
                            break;
                        }
                return this.pushStack(r.length > 1 ? rt.unique(r) : r);
            },
            index: function (t) {
                return t ? ("string" == typeof t ? rt.inArray(this[0], rt(t)) : rt.inArray(t.jquery ? t[0] : t, this)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
            },
            add: function (t, e) {
                return this.pushStack(rt.unique(rt.merge(this.get(), rt(t, e))));
            },
            addBack: function (t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
            },
        }),
        rt.each(
            {
                parent: function (t) {
                    var e = t.parentNode;
                    return e && 11 !== e.nodeType ? e : null;
                },
                parents: function (t) {
                    return rt.dir(t, "parentNode");
                },
                parentsUntil: function (t, e, i) {
                    return rt.dir(t, "parentNode", i);
                },
                next: function (t) {
                    return o(t, "nextSibling");
                },
                prev: function (t) {
                    return o(t, "previousSibling");
                },
                nextAll: function (t) {
                    return rt.dir(t, "nextSibling");
                },
                prevAll: function (t) {
                    return rt.dir(t, "previousSibling");
                },
                nextUntil: function (t, e, i) {
                    return rt.dir(t, "nextSibling", i);
                },
                prevUntil: function (t, e, i) {
                    return rt.dir(t, "previousSibling", i);
                },
                siblings: function (t) {
                    return rt.sibling((t.parentNode || {}).firstChild, t);
                },
                children: function (t) {
                    return rt.sibling(t.firstChild);
                },
                contents: function (t) {
                    return rt.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : rt.merge([], t.childNodes);
                },
            },
            function (t, e) {
                rt.fn[t] = function (i, n) {
                    var o = rt.map(this, e, i);
                    return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (o = rt.filter(n, o)), this.length > 1 && (bt[t] || (o = rt.unique(o)), yt.test(t) && (o = o.reverse())), this.pushStack(o);
                };
            }
        );
    var wt = /\S+/g,
        xt = {};
    (rt.Callbacks = function (t) {
        t = "string" == typeof t ? xt[t] || r(t) : rt.extend({}, t);
        var e,
            i,
            n,
            o,
            s,
            a,
            l = [],
            c = !t.once && [],
            d = function (r) {
                for (i = t.memory && r, n = !0, s = a || 0, a = 0, o = l.length, e = !0; l && o > s; s++)
                    if (l[s].apply(r[0], r[1]) === !1 && t.stopOnFalse) {
                        i = !1;
                        break;
                    }
                (e = !1), l && (c ? c.length && d(c.shift()) : i ? (l = []) : u.disable());
            },
            u = {
                add: function () {
                    if (l) {
                        var n = l.length;
                        !(function r(e) {
                            rt.each(e, function (e, i) {
                                var n = rt.type(i);
                                "function" === n ? (t.unique && u.has(i)) || l.push(i) : i && i.length && "string" !== n && r(i);
                            });
                        })(arguments),
                            e ? (o = l.length) : i && ((a = n), d(i));
                    }
                    return this;
                },
                remove: function () {
                    return (
                        l &&
                            rt.each(arguments, function (t, i) {
                                for (var n; (n = rt.inArray(i, l, n)) > -1; ) l.splice(n, 1), e && (o >= n && o--, s >= n && s--);
                            }),
                        this
                    );
                },
                has: function (t) {
                    return t ? rt.inArray(t, l) > -1 : !(!l || !l.length);
                },
                empty: function () {
                    return (l = []), (o = 0), this;
                },
                disable: function () {
                    return (l = c = i = void 0), this;
                },
                disabled: function () {
                    return !l;
                },
                lock: function () {
                    return (c = void 0), i || u.disable(), this;
                },
                locked: function () {
                    return !c;
                },
                fireWith: function (t, i) {
                    return !l || (n && !c) || ((i = i || []), (i = [t, i.slice ? i.slice() : i]), e ? c.push(i) : d(i)), this;
                },
                fire: function () {
                    return u.fireWith(this, arguments), this;
                },
                fired: function () {
                    return !!n;
                },
            };
        return u;
    }),
        rt.extend({
            Deferred: function (t) {
                var e = [
                        ["resolve", "done", rt.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", rt.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", rt.Callbacks("memory")],
                    ],
                    i = "pending",
                    n = {
                        state: function () {
                            return i;
                        },
                        always: function () {
                            return o.done(arguments).fail(arguments), this;
                        },
                        then: function () {
                            var t = arguments;
                            return rt
                                .Deferred(function (i) {
                                    rt.each(e, function (e, r) {
                                        var s = rt.isFunction(t[e]) && t[e];
                                        o[r[1]](function () {
                                            var t = s && s.apply(this, arguments);
                                            t && rt.isFunction(t.promise) ? t.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[r[0] + "With"](this === n ? i.promise() : this, s ? [t] : arguments);
                                        });
                                    }),
                                        (t = null);
                                })
                                .promise();
                        },
                        promise: function (t) {
                            return null != t ? rt.extend(t, n) : n;
                        },
                    },
                    o = {};
                return (
                    (n.pipe = n.then),
                    rt.each(e, function (t, r) {
                        var s = r[2],
                            a = r[3];
                        (n[r[1]] = s.add),
                            a &&
                                s.add(
                                    function () {
                                        i = a;
                                    },
                                    e[1 ^ t][2].disable,
                                    e[2][2].lock
                                ),
                            (o[r[0]] = function () {
                                return o[r[0] + "With"](this === o ? n : this, arguments), this;
                            }),
                            (o[r[0] + "With"] = s.fireWith);
                    }),
                    n.promise(o),
                    t && t.call(o, o),
                    o
                );
            },
            when: function (t) {
                var e = 0,
                    i = G.call(arguments),
                    n = i.length,
                    o = 1 !== n || (t && rt.isFunction(t.promise)) ? n : 0,
                    r = 1 === o ? t : rt.Deferred(),
                    s = function (t, e, i) {
                        return function (n) {
                            (e[t] = this), (i[t] = arguments.length > 1 ? G.call(arguments) : n), i === a ? r.notifyWith(e, i) : --o || r.resolveWith(e, i);
                        };
                    },
                    a,
                    l,
                    c;
                if (n > 1) for (a = new Array(n), l = new Array(n), c = new Array(n); n > e; e++) i[e] && rt.isFunction(i[e].promise) ? i[e].promise().done(s(e, c, i)).fail(r.reject).progress(s(e, l, a)) : --o;
                return o || r.resolveWith(c, i), r.promise();
            },
        });
    var kt;
    (rt.fn.ready = function (t) {
        return rt.ready.promise().done(t), this;
    }),
        rt.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function (t) {
                t ? rt.readyWait++ : rt.ready(!0);
            },
            ready: function (t) {
                if (t === !0 ? !--rt.readyWait : !rt.isReady) {
                    if (!mt.body) return setTimeout(rt.ready);
                    (rt.isReady = !0), (t !== !0 && --rt.readyWait > 0) || (kt.resolveWith(mt, [rt]), rt.fn.triggerHandler && (rt(mt).triggerHandler("ready"), rt(mt).off("ready")));
                }
            },
        }),
        (rt.ready.promise = function (e) {
            if (!kt)
                if (((kt = rt.Deferred()), "complete" === mt.readyState)) setTimeout(rt.ready);
                else if (mt.addEventListener) mt.addEventListener("DOMContentLoaded", a, !1), t.addEventListener("load", a, !1);
                else {
                    mt.attachEvent("onreadystatechange", a), t.attachEvent("onload", a);
                    var i = !1;
                    try {
                        i = null == t.frameElement && mt.documentElement;
                    } catch (n) {}
                    i &&
                        i.doScroll &&
                        !(function o() {
                            if (!rt.isReady) {
                                try {
                                    i.doScroll("left");
                                } catch (t) {
                                    return setTimeout(o, 50);
                                }
                                s(), rt.ready();
                            }
                        })();
                }
            return kt.promise(e);
        });
    var Tt = "undefined",
        Ct;
    for (Ct in rt(nt)) break;
    (nt.ownLast = "0" !== Ct),
        (nt.inlineBlockNeedsLayout = !1),
        rt(function () {
            var t, e, i, n;
            (i = mt.getElementsByTagName("body")[0]),
                i &&
                    i.style &&
                    ((e = mt.createElement("div")),
                    (n = mt.createElement("div")),
                    (n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
                    i.appendChild(n).appendChild(e),
                    typeof e.style.zoom !== Tt && ((e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1"), (nt.inlineBlockNeedsLayout = t = 3 === e.offsetWidth), t && (i.style.zoom = 1)),
                    i.removeChild(n));
        }),
        (function () {
            var t = mt.createElement("div");
            if (null == nt.deleteExpando) {
                nt.deleteExpando = !0;
                try {
                    delete t.test;
                } catch (e) {
                    nt.deleteExpando = !1;
                }
            }
            t = null;
        })(),
        (rt.acceptData = function (t) {
            var e = rt.noData[(t.nodeName + " ").toLowerCase()],
                i = +t.nodeType || 1;
            return 1 !== i && 9 !== i ? !1 : !e || (e !== !0 && t.getAttribute("classid") === e);
        });
    var St = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Et = /([A-Z])/g;
    rt.extend({
        cache: {},
        noData: { "applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" },
        hasData: function (t) {
            return (t = t.nodeType ? rt.cache[t[rt.expando]] : t[rt.expando]), !!t && !c(t);
        },
        data: function (t, e, i) {
            return d(t, e, i);
        },
        removeData: function (t, e) {
            return u(t, e);
        },
        _data: function (t, e, i) {
            return d(t, e, i, !0);
        },
        _removeData: function (t, e) {
            return u(t, e, !0);
        },
    }),
        rt.fn.extend({
            data: function (t, e) {
                var i,
                    n,
                    o,
                    r = this[0],
                    s = r && r.attributes;
                if (void 0 === t) {
                    if (this.length && ((o = rt.data(r)), 1 === r.nodeType && !rt._data(r, "parsedAttrs"))) {
                        for (i = s.length; i--; ) s[i] && ((n = s[i].name), 0 === n.indexOf("data-") && ((n = rt.camelCase(n.slice(5))), l(r, n, o[n])));
                        rt._data(r, "parsedAttrs", !0);
                    }
                    return o;
                }
                return "object" == typeof t
                    ? this.each(function () {
                          rt.data(this, t);
                      })
                    : arguments.length > 1
                    ? this.each(function () {
                          rt.data(this, t, e);
                      })
                    : r
                    ? l(r, t, rt.data(r, t))
                    : void 0;
            },
            removeData: function (t) {
                return this.each(function () {
                    rt.removeData(this, t);
                });
            },
        }),
        rt.extend({
            queue: function (t, e, i) {
                var n;
                return t ? ((e = (e || "fx") + "queue"), (n = rt._data(t, e)), i && (!n || rt.isArray(i) ? (n = rt._data(t, e, rt.makeArray(i))) : n.push(i)), n || []) : void 0;
            },
            dequeue: function (t, e) {
                e = e || "fx";
                var i = rt.queue(t, e),
                    n = i.length,
                    o = i.shift(),
                    r = rt._queueHooks(t, e),
                    s = function () {
                        rt.dequeue(t, e);
                    };
                "inprogress" === o && ((o = i.shift()), n--), o && ("fx" === e && i.unshift("inprogress"), delete r.stop, o.call(t, s, r)), !n && r && r.empty.fire();
            },
            _queueHooks: function (t, e) {
                var i = e + "queueHooks";
                return (
                    rt._data(t, i) ||
                    rt._data(t, i, {
                        empty: rt.Callbacks("once memory").add(function () {
                            rt._removeData(t, e + "queue"), rt._removeData(t, i);
                        }),
                    })
                );
            },
        }),
        rt.fn.extend({
            queue: function (t, e) {
                var i = 2;
                return (
                    "string" != typeof t && ((e = t), (t = "fx"), i--),
                    arguments.length < i
                        ? rt.queue(this[0], t)
                        : void 0 === e
                        ? this
                        : this.each(function () {
                              var i = rt.queue(this, t, e);
                              rt._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && rt.dequeue(this, t);
                          })
                );
            },
            dequeue: function (t) {
                return this.each(function () {
                    rt.dequeue(this, t);
                });
            },
            clearQueue: function (t) {
                return this.queue(t || "fx", []);
            },
            promise: function (t, e) {
                var i,
                    n = 1,
                    o = rt.Deferred(),
                    r = this,
                    s = this.length,
                    a = function () {
                        --n || o.resolveWith(r, [r]);
                    };
                for ("string" != typeof t && ((e = t), (t = void 0)), t = t || "fx"; s--; ) (i = rt._data(r[s], t + "queueHooks")), i && i.empty && (n++, i.empty.add(a));
                return a(), o.promise(e);
            },
        });
    var At = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        _t = ["Top", "Right", "Bottom", "Left"],
        Lt = function (t, e) {
            return (t = e || t), "none" === rt.css(t, "display") || !rt.contains(t.ownerDocument, t);
        },
        It = (rt.access = function (t, e, i, n, o, r, s) {
            var a = 0,
                l = t.length,
                c = null == i;
            if ("object" === rt.type(i)) {
                o = !0;
                for (a in i) rt.access(t, e, a, i[a], !0, r, s);
            } else if (
                void 0 !== n &&
                ((o = !0),
                rt.isFunction(n) || (s = !0),
                c &&
                    (s
                        ? (e.call(t, n), (e = null))
                        : ((c = e),
                          (e = function (t, e, i) {
                              return c.call(rt(t), i);
                          }))),
                e)
            )
                for (; l > a; a++) e(t[a], i, s ? n : n.call(t[a], a, e(t[a], i)));
            return o ? t : c ? e.call(t) : l ? e(t[0], i) : r;
        }),
        Ot = /^(?:checkbox|radio)$/i;
    !(function () {
        var t = mt.createElement("input"),
            e = mt.createElement("div"),
            i = mt.createDocumentFragment();
        if (
            ((e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
            (nt.leadingWhitespace = 3 === e.firstChild.nodeType),
            (nt.tbody = !e.getElementsByTagName("tbody").length),
            (nt.htmlSerialize = !!e.getElementsByTagName("link").length),
            (nt.html5Clone = "<:nav></:nav>" !== mt.createElement("nav").cloneNode(!0).outerHTML),
            (t.type = "checkbox"),
            (t.checked = !0),
            i.appendChild(t),
            (nt.appendChecked = t.checked),
            (e.innerHTML = "<textarea>x</textarea>"),
            (nt.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue),
            i.appendChild(e),
            (e.innerHTML = "<input type='radio' checked='checked' name='t'/>"),
            (nt.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (nt.noCloneEvent = !0),
            e.attachEvent &&
                (e.attachEvent("onclick", function () {
                    nt.noCloneEvent = !1;
                }),
                e.cloneNode(!0).click()),
            null == nt.deleteExpando)
        ) {
            nt.deleteExpando = !0;
            try {
                delete e.test;
            } catch (n) {
                nt.deleteExpando = !1;
            }
        }
    })(),
        (function () {
            var e,
                i,
                n = mt.createElement("div");
            for (e in { submit: !0, change: !0, focusin: !0 }) (i = "on" + e), (nt[e + "Bubbles"] = i in t) || (n.setAttribute(i, "t"), (nt[e + "Bubbles"] = n.attributes[i].expando === !1));
            n = null;
        })();
    var $t = /^(?:input|select|textarea)$/i,
        Nt = /^key/,
        jt = /^(?:mouse|pointer|contextmenu)|click/,
        Pt = /^(?:focusinfocus|focusoutblur)$/,
        zt = /^([^.]*)(?:\.(.+)|)$/;
    (rt.event = {
        global: {},
        add: function (t, e, i, n, o) {
            var r,
                s,
                a,
                l,
                c,
                d,
                u,
                p,
                f,
                h,
                m,
                g = rt._data(t);
            if (g) {
                for (
                    i.handler && ((l = i), (i = l.handler), (o = l.selector)),
                        i.guid || (i.guid = rt.guid++),
                        (s = g.events) || (s = g.events = {}),
                        (d = g.handle) ||
                            ((d = g.handle = function (t) {
                                return typeof rt === Tt || (t && rt.event.triggered === t.type) ? void 0 : rt.event.dispatch.apply(d.elem, arguments);
                            }),
                            (d.elem = t)),
                        e = (e || "").match(wt) || [""],
                        a = e.length;
                    a--;

                )
                    (r = zt.exec(e[a]) || []),
                        (f = m = r[1]),
                        (h = (r[2] || "").split(".").sort()),
                        f &&
                            ((c = rt.event.special[f] || {}),
                            (f = (o ? c.delegateType : c.bindType) || f),
                            (c = rt.event.special[f] || {}),
                            (u = rt.extend({ type: f, origType: m, data: n, handler: i, guid: i.guid, selector: o, needsContext: o && rt.expr.match.needsContext.test(o), namespace: h.join(".") }, l)),
                            (p = s[f]) || ((p = s[f] = []), (p.delegateCount = 0), (c.setup && c.setup.call(t, n, h, d) !== !1) || (t.addEventListener ? t.addEventListener(f, d, !1) : t.attachEvent && t.attachEvent("on" + f, d))),
                            c.add && (c.add.call(t, u), u.handler.guid || (u.handler.guid = i.guid)),
                            o ? p.splice(p.delegateCount++, 0, u) : p.push(u),
                            (rt.event.global[f] = !0));
                t = null;
            }
        },
        remove: function (t, e, i, n, o) {
            var r,
                s,
                a,
                l,
                c,
                d,
                u,
                p,
                f,
                h,
                m,
                g = rt.hasData(t) && rt._data(t);
            if (g && (d = g.events)) {
                for (e = (e || "").match(wt) || [""], c = e.length; c--; )
                    if (((a = zt.exec(e[c]) || []), (f = m = a[1]), (h = (a[2] || "").split(".").sort()), f)) {
                        for (u = rt.event.special[f] || {}, f = (n ? u.delegateType : u.bindType) || f, p = d[f] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = r = p.length; r--; )
                            (s = p[r]),
                                (!o && m !== s.origType) ||
                                    (i && i.guid !== s.guid) ||
                                    (a && !a.test(s.namespace)) ||
                                    (n && n !== s.selector && ("**" !== n || !s.selector)) ||
                                    (p.splice(r, 1), s.selector && p.delegateCount--, u.remove && u.remove.call(t, s));
                        l && !p.length && ((u.teardown && u.teardown.call(t, h, g.handle) !== !1) || rt.removeEvent(t, f, g.handle), delete d[f]);
                    } else for (f in d) rt.event.remove(t, f + e[c], i, n, !0);
                rt.isEmptyObject(d) && (delete g.handle, rt._removeData(t, "events"));
            }
        },
        trigger: function (e, i, n, o) {
            var r,
                s,
                a,
                l,
                c,
                d,
                u,
                p = [n || mt],
                f = it.call(e, "type") ? e.type : e,
                h = it.call(e, "namespace") ? e.namespace.split(".") : [];
            if (
                ((a = d = n = n || mt),
                3 !== n.nodeType &&
                    8 !== n.nodeType &&
                    !Pt.test(f + rt.event.triggered) &&
                    (f.indexOf(".") >= 0 && ((h = f.split(".")), (f = h.shift()), h.sort()),
                    (s = f.indexOf(":") < 0 && "on" + f),
                    (e = e[rt.expando] ? e : new rt.Event(f, "object" == typeof e && e)),
                    (e.isTrigger = o ? 2 : 3),
                    (e.namespace = h.join(".")),
                    (e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                    (e.result = void 0),
                    e.target || (e.target = n),
                    (i = null == i ? [e] : rt.makeArray(i, [e])),
                    (c = rt.event.special[f] || {}),
                    o || !c.trigger || c.trigger.apply(n, i) !== !1))
            ) {
                if (!o && !c.noBubble && !rt.isWindow(n)) {
                    for (l = c.delegateType || f, Pt.test(l + f) || (a = a.parentNode); a; a = a.parentNode) p.push(a), (d = a);
                    d === (n.ownerDocument || mt) && p.push(d.defaultView || d.parentWindow || t);
                }
                for (u = 0; (a = p[u++]) && !e.isPropagationStopped(); )
                    (e.type = u > 1 ? l : c.bindType || f),
                        (r = (rt._data(a, "events") || {})[e.type] && rt._data(a, "handle")),
                        r && r.apply(a, i),
                        (r = s && a[s]),
                        r && r.apply && rt.acceptData(a) && ((e.result = r.apply(a, i)), e.result === !1 && e.preventDefault());
                if (((e.type = f), !o && !e.isDefaultPrevented() && (!c._default || c._default.apply(p.pop(), i) === !1) && rt.acceptData(n) && s && n[f] && !rt.isWindow(n))) {
                    (d = n[s]), d && (n[s] = null), (rt.event.triggered = f);
                    try {
                        n[f]();
                    } catch (m) {}
                    (rt.event.triggered = void 0), d && (n[s] = d);
                }
                return e.result;
            }
        },
        dispatch: function (t) {
            t = rt.event.fix(t);
            var e,
                i,
                n,
                o,
                r,
                s = [],
                a = G.call(arguments),
                l = (rt._data(this, "events") || {})[t.type] || [],
                c = rt.event.special[t.type] || {};
            if (((a[0] = t), (t.delegateTarget = this), !c.preDispatch || c.preDispatch.call(this, t) !== !1)) {
                for (s = rt.event.handlers.call(this, t, l), e = 0; (o = s[e++]) && !t.isPropagationStopped(); )
                    for (t.currentTarget = o.elem, r = 0; (n = o.handlers[r++]) && !t.isImmediatePropagationStopped(); )
                        (!t.namespace_re || t.namespace_re.test(n.namespace)) &&
                            ((t.handleObj = n), (t.data = n.data), (i = ((rt.event.special[n.origType] || {}).handle || n.handler).apply(o.elem, a)), void 0 !== i && (t.result = i) === !1 && (t.preventDefault(), t.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, t), t.result;
            }
        },
        handlers: function (t, e) {
            var i,
                n,
                o,
                r,
                s = [],
                a = e.delegateCount,
                l = t.target;
            if (a && l.nodeType && (!t.button || "click" !== t.type))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                        for (o = [], r = 0; a > r; r++) (n = e[r]), (i = n.selector + " "), void 0 === o[i] && (o[i] = n.needsContext ? rt(i, this).index(l) >= 0 : rt.find(i, this, null, [l]).length), o[i] && o.push(n);
                        o.length && s.push({ elem: l, handlers: o });
                    }
            return a < e.length && s.push({ elem: this, handlers: e.slice(a) }), s;
        },
        fix: function (t) {
            if (t[rt.expando]) return t;
            var e,
                i,
                n,
                o = t.type,
                r = t,
                s = this.fixHooks[o];
            for (s || (this.fixHooks[o] = s = jt.test(o) ? this.mouseHooks : Nt.test(o) ? this.keyHooks : {}), n = s.props ? this.props.concat(s.props) : this.props, t = new rt.Event(r), e = n.length; e--; ) (i = n[e]), (t[i] = r[i]);
            return t.target || (t.target = r.srcElement || mt), 3 === t.target.nodeType && (t.target = t.target.parentNode), (t.metaKey = !!t.metaKey), s.filter ? s.filter(t, r) : t;
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t;
            },
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (t, e) {
                var i,
                    n,
                    o,
                    r = e.button,
                    s = e.fromElement;
                return (
                    null == t.pageX &&
                        null != e.clientX &&
                        ((n = t.target.ownerDocument || mt),
                        (o = n.documentElement),
                        (i = n.body),
                        (t.pageX = e.clientX + ((o && o.scrollLeft) || (i && i.scrollLeft) || 0) - ((o && o.clientLeft) || (i && i.clientLeft) || 0)),
                        (t.pageY = e.clientY + ((o && o.scrollTop) || (i && i.scrollTop) || 0) - ((o && o.clientTop) || (i && i.clientTop) || 0))),
                    !t.relatedTarget && s && (t.relatedTarget = s === t.target ? e.toElement : s),
                    t.which || void 0 === r || (t.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0),
                    t
                );
            },
        },
        special: {
            load: { noBubble: !0 },
            focus: {
                trigger: function () {
                    if (this !== h() && this.focus)
                        try {
                            return this.focus(), !1;
                        } catch (t) {}
                },
                delegateType: "focusin",
            },
            blur: {
                trigger: function () {
                    return this === h() && this.blur ? (this.blur(), !1) : void 0;
                },
                delegateType: "focusout",
            },
            click: {
                trigger: function () {
                    return rt.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0;
                },
                _default: function (t) {
                    return rt.nodeName(t.target, "a");
                },
            },
            beforeunload: {
                postDispatch: function (t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result);
                },
            },
        },
        simulate: function (t, e, i, n) {
            var o = rt.extend(new rt.Event(), i, { type: t, isSimulated: !0, originalEvent: {} });
            n ? rt.event.trigger(o, null, e) : rt.event.dispatch.call(e, o), o.isDefaultPrevented() && i.preventDefault();
        },
    }),
        (rt.removeEvent = mt.removeEventListener
            ? function (t, e, i) {
                  t.removeEventListener && t.removeEventListener(e, i, !1);
              }
            : function (t, e, i) {
                  var n = "on" + e;
                  t.detachEvent && (typeof t[n] === Tt && (t[n] = null), t.detachEvent(n, i));
              }),
        (rt.Event = function (t, e) {
            return this instanceof rt.Event
                ? (t && t.type ? ((this.originalEvent = t), (this.type = t.type), (this.isDefaultPrevented = t.defaultPrevented || (void 0 === t.defaultPrevented && t.returnValue === !1) ? p : f)) : (this.type = t),
                  e && rt.extend(this, e),
                  (this.timeStamp = (t && t.timeStamp) || rt.now()),
                  void (this[rt.expando] = !0))
                : new rt.Event(t, e);
        }),
        (rt.Event.prototype = {
            isDefaultPrevented: f,
            isPropagationStopped: f,
            isImmediatePropagationStopped: f,
            preventDefault: function () {
                var t = this.originalEvent;
                (this.isDefaultPrevented = p), t && (t.preventDefault ? t.preventDefault() : (t.returnValue = !1));
            },
            stopPropagation: function () {
                var t = this.originalEvent;
                (this.isPropagationStopped = p), t && (t.stopPropagation && t.stopPropagation(), (t.cancelBubble = !0));
            },
            stopImmediatePropagation: function () {
                var t = this.originalEvent;
                (this.isImmediatePropagationStopped = p), t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation();
            },
        }),
        rt.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (t, e) {
            rt.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function (t) {
                    var i,
                        n = this,
                        o = t.relatedTarget,
                        r = t.handleObj;
                    return (!o || (o !== n && !rt.contains(n, o))) && ((t.type = r.origType), (i = r.handler.apply(this, arguments)), (t.type = e)), i;
                },
            };
        }),
        nt.submitBubbles ||
            (rt.event.special.submit = {
                setup: function () {
                    return rt.nodeName(this, "form")
                        ? !1
                        : void rt.event.add(this, "click._submit keypress._submit", function (t) {
                              var e = t.target,
                                  i = rt.nodeName(e, "input") || rt.nodeName(e, "button") ? e.form : void 0;
                              i &&
                                  !rt._data(i, "submitBubbles") &&
                                  (rt.event.add(i, "submit._submit", function (t) {
                                      t._submit_bubble = !0;
                                  }),
                                  rt._data(i, "submitBubbles", !0));
                          });
                },
                postDispatch: function (t) {
                    t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && rt.event.simulate("submit", this.parentNode, t, !0));
                },
                teardown: function () {
                    return rt.nodeName(this, "form") ? !1 : void rt.event.remove(this, "._submit");
                },
            }),
        nt.changeBubbles ||
            (rt.event.special.change = {
                setup: function () {
                    return $t.test(this.nodeName)
                        ? (("checkbox" === this.type || "radio" === this.type) &&
                              (rt.event.add(this, "propertychange._change", function (t) {
                                  "checked" === t.originalEvent.propertyName && (this._just_changed = !0);
                              }),
                              rt.event.add(this, "click._change", function (t) {
                                  this._just_changed && !t.isTrigger && (this._just_changed = !1), rt.event.simulate("change", this, t, !0);
                              })),
                          !1)
                        : void rt.event.add(this, "beforeactivate._change", function (t) {
                              var e = t.target;
                              $t.test(e.nodeName) &&
                                  !rt._data(e, "changeBubbles") &&
                                  (rt.event.add(e, "change._change", function (t) {
                                      !this.parentNode || t.isSimulated || t.isTrigger || rt.event.simulate("change", this.parentNode, t, !0);
                                  }),
                                  rt._data(e, "changeBubbles", !0));
                          });
                },
                handle: function (t) {
                    var e = t.target;
                    return this !== e || t.isSimulated || t.isTrigger || ("radio" !== e.type && "checkbox" !== e.type) ? t.handleObj.handler.apply(this, arguments) : void 0;
                },
                teardown: function () {
                    return rt.event.remove(this, "._change"), !$t.test(this.nodeName);
                },
            }),
        nt.focusinBubbles ||
            rt.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
                var i = function (t) {
                    rt.event.simulate(e, t.target, rt.event.fix(t), !0);
                };
                rt.event.special[e] = {
                    setup: function () {
                        var n = this.ownerDocument || this,
                            o = rt._data(n, e);
                        o || n.addEventListener(t, i, !0), rt._data(n, e, (o || 0) + 1);
                    },
                    teardown: function () {
                        var n = this.ownerDocument || this,
                            o = rt._data(n, e) - 1;
                        o ? rt._data(n, e, o) : (n.removeEventListener(t, i, !0), rt._removeData(n, e));
                    },
                };
            }),
        rt.fn.extend({
            on: function (t, e, i, n, o) {
                var r, s;
                if ("object" == typeof t) {
                    "string" != typeof e && ((i = i || e), (e = void 0));
                    for (r in t) this.on(r, e, i, t[r], o);
                    return this;
                }
                if ((null == i && null == n ? ((n = e), (i = e = void 0)) : null == n && ("string" == typeof e ? ((n = i), (i = void 0)) : ((n = i), (i = e), (e = void 0))), n === !1)) n = f;
                else if (!n) return this;
                return (
                    1 === o &&
                        ((s = n),
                        (n = function (t) {
                            return rt().off(t), s.apply(this, arguments);
                        }),
                        (n.guid = s.guid || (s.guid = rt.guid++))),
                    this.each(function () {
                        rt.event.add(this, t, n, i, e);
                    })
                );
            },
            one: function (t, e, i, n) {
                return this.on(t, e, i, n, 1);
            },
            off: function (t, e, i) {
                var n, o;
                if (t && t.preventDefault && t.handleObj) return (n = t.handleObj), rt(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
                if ("object" == typeof t) {
                    for (o in t) this.off(o, e, t[o]);
                    return this;
                }
                return (
                    (e === !1 || "function" == typeof e) && ((i = e), (e = void 0)),
                    i === !1 && (i = f),
                    this.each(function () {
                        rt.event.remove(this, t, i, e);
                    })
                );
            },
            trigger: function (t, e) {
                return this.each(function () {
                    rt.event.trigger(t, e, this);
                });
            },
            triggerHandler: function (t, e) {
                var i = this[0];
                return i ? rt.event.trigger(t, e, i, !0) : void 0;
            },
        });
    var Dt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Ht = / jQuery\d+="(?:null|\d+)"/g,
        Mt = new RegExp("<(?:" + Dt + ")[\\s/>]", "i"),
        Bt = /^\s+/,
        Rt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        qt = /<([\w:]+)/,
        Wt = /<tbody/i,
        Ft = /<|&#?\w+;/,
        Ut = /<(?:script|style|link)/i,
        Xt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Yt = /^$|\/(?:java|ecma)script/i,
        Vt = /^true\/(.*)/,
        Qt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Gt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: nt.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"],
        },
        Jt = m(mt),
        Kt = Jt.appendChild(mt.createElement("div"));
    (Gt.optgroup = Gt.option),
        (Gt.tbody = Gt.tfoot = Gt.colgroup = Gt.caption = Gt.thead),
        (Gt.th = Gt.td),
        rt.extend({
            clone: function (t, e, i) {
                var n,
                    o,
                    r,
                    s,
                    a,
                    l = rt.contains(t.ownerDocument, t);
                if (
                    (nt.html5Clone || rt.isXMLDoc(t) || !Mt.test("<" + t.nodeName + ">") ? (r = t.cloneNode(!0)) : ((Kt.innerHTML = t.outerHTML), Kt.removeChild((r = Kt.firstChild))),
                    !((nt.noCloneEvent && nt.noCloneChecked) || (1 !== t.nodeType && 11 !== t.nodeType) || rt.isXMLDoc(t)))
                )
                    for (n = g(r), a = g(t), s = 0; null != (o = a[s]); ++s) n[s] && T(o, n[s]);
                if (e)
                    if (i) for (a = a || g(t), n = n || g(r), s = 0; null != (o = a[s]); s++) k(o, n[s]);
                    else k(t, r);
                return (n = g(r, "script")), n.length > 0 && x(n, !l && g(t, "script")), (n = a = o = null), r;
            },
            buildFragment: function (t, e, i, n) {
                for (var o, r, s, a, l, c, d, u = t.length, p = m(e), f = [], h = 0; u > h; h++)
                    if (((r = t[h]), r || 0 === r))
                        if ("object" === rt.type(r)) rt.merge(f, r.nodeType ? [r] : r);
                        else if (Ft.test(r)) {
                            for (a = a || p.appendChild(e.createElement("div")), l = (qt.exec(r) || ["", ""])[1].toLowerCase(), d = Gt[l] || Gt._default, a.innerHTML = d[1] + r.replace(Rt, "<$1></$2>") + d[2], o = d[0]; o--; )
                                a = a.lastChild;
                            if ((!nt.leadingWhitespace && Bt.test(r) && f.push(e.createTextNode(Bt.exec(r)[0])), !nt.tbody))
                                for (r = "table" !== l || Wt.test(r) ? ("<table>" !== d[1] || Wt.test(r) ? 0 : a) : a.firstChild, o = r && r.childNodes.length; o--; )
                                    rt.nodeName((c = r.childNodes[o]), "tbody") && !c.childNodes.length && r.removeChild(c);
                            for (rt.merge(f, a.childNodes), a.textContent = ""; a.firstChild; ) a.removeChild(a.firstChild);
                            a = p.lastChild;
                        } else f.push(e.createTextNode(r));
                for (a && p.removeChild(a), nt.appendChecked || rt.grep(g(f, "input"), v), h = 0; (r = f[h++]); )
                    if ((!n || -1 === rt.inArray(r, n)) && ((s = rt.contains(r.ownerDocument, r)), (a = g(p.appendChild(r), "script")), s && x(a), i)) for (o = 0; (r = a[o++]); ) Yt.test(r.type || "") && i.push(r);
                return (a = null), p;
            },
            cleanData: function (t, e) {
                for (var i, n, o, r, s = 0, a = rt.expando, l = rt.cache, c = nt.deleteExpando, d = rt.event.special; null != (i = t[s]); s++)
                    if ((e || rt.acceptData(i)) && ((o = i[a]), (r = o && l[o]))) {
                        if (r.events) for (n in r.events) d[n] ? rt.event.remove(i, n) : rt.removeEvent(i, n, r.handle);
                        l[o] && (delete l[o], c ? delete i[a] : typeof i.removeAttribute !== Tt ? i.removeAttribute(a) : (i[a] = null), Q.push(o));
                    }
            },
        }),
        rt.fn.extend({
            text: function (t) {
                return It(
                    this,
                    function (t) {
                        return void 0 === t ? rt.text(this) : this.empty().append(((this[0] && this[0].ownerDocument) || mt).createTextNode(t));
                    },
                    null,
                    t,
                    arguments.length
                );
            },
            append: function () {
                return this.domManip(arguments, function (t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = y(this, t);
                        e.appendChild(t);
                    }
                });
            },
            prepend: function () {
                return this.domManip(arguments, function (t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = y(this, t);
                        e.insertBefore(t, e.firstChild);
                    }
                });
            },
            before: function () {
                return this.domManip(arguments, function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this);
                });
            },
            after: function () {
                return this.domManip(arguments, function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling);
                });
            },
            remove: function (t, e) {
                for (var i, n = t ? rt.filter(t, this) : this, o = 0; null != (i = n[o]); o++)
                    e || 1 !== i.nodeType || rt.cleanData(g(i)), i.parentNode && (e && rt.contains(i.ownerDocument, i) && x(g(i, "script")), i.parentNode.removeChild(i));
                return this;
            },
            empty: function () {
                for (var t, e = 0; null != (t = this[e]); e++) {
                    for (1 === t.nodeType && rt.cleanData(g(t, !1)); t.firstChild; ) t.removeChild(t.firstChild);
                    t.options && rt.nodeName(t, "select") && (t.options.length = 0);
                }
                return this;
            },
            clone: function (t, e) {
                return (
                    (t = null == t ? !1 : t),
                    (e = null == e ? t : e),
                    this.map(function () {
                        return rt.clone(this, t, e);
                    })
                );
            },
            html: function (t) {
                return It(
                    this,
                    function (t) {
                        var e = this[0] || {},
                            i = 0,
                            n = this.length;
                        if (void 0 === t) return 1 === e.nodeType ? e.innerHTML.replace(Ht, "") : void 0;
                        if ("string" == typeof t && !Ut.test(t) && (nt.htmlSerialize || !Mt.test(t)) && (nt.leadingWhitespace || !Bt.test(t)) && !Gt[(qt.exec(t) || ["", ""])[1].toLowerCase()]) {
                            t = t.replace(Rt, "<$1></$2>");
                            try {
                                for (; n > i; i++) (e = this[i] || {}), 1 === e.nodeType && (rt.cleanData(g(e, !1)), (e.innerHTML = t));
                                e = 0;
                            } catch (o) {}
                        }
                        e && this.empty().append(t);
                    },
                    null,
                    t,
                    arguments.length
                );
            },
            replaceWith: function () {
                var t = arguments[0];
                return (
                    this.domManip(arguments, function (e) {
                        (t = this.parentNode), rt.cleanData(g(this)), t && t.replaceChild(e, this);
                    }),
                    t && (t.length || t.nodeType) ? this : this.remove()
                );
            },
            detach: function (t) {
                return this.remove(t, !0);
            },
            domManip: function (t, e) {
                t = J.apply([], t);
                var i,
                    n,
                    o,
                    r,
                    s,
                    a,
                    l = 0,
                    c = this.length,
                    d = this,
                    u = c - 1,
                    p = t[0],
                    f = rt.isFunction(p);
                if (f || (c > 1 && "string" == typeof p && !nt.checkClone && Xt.test(p)))
                    return this.each(function (i) {
                        var n = d.eq(i);
                        f && (t[0] = p.call(this, i, n.html())), n.domManip(t, e);
                    });
                if (c && ((a = rt.buildFragment(t, this[0].ownerDocument, !1, this)), (i = a.firstChild), 1 === a.childNodes.length && (a = i), i)) {
                    for (r = rt.map(g(a, "script"), b), o = r.length; c > l; l++) (n = a), l !== u && ((n = rt.clone(n, !0, !0)), o && rt.merge(r, g(n, "script"))), e.call(this[l], n, l);
                    if (o)
                        for (s = r[r.length - 1].ownerDocument, rt.map(r, w), l = 0; o > l; l++)
                            (n = r[l]), Yt.test(n.type || "") && !rt._data(n, "globalEval") && rt.contains(s, n) && (n.src ? rt._evalUrl && rt._evalUrl(n.src) : rt.globalEval((n.text || n.textContent || n.innerHTML || "").replace(Qt, "")));
                    a = i = null;
                }
                return this;
            },
        }),
        rt.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (t, e) {
            rt.fn[t] = function (t) {
                for (var i, n = 0, o = [], r = rt(t), s = r.length - 1; s >= n; n++) (i = n === s ? this : this.clone(!0)), rt(r[n])[e](i), K.apply(o, i.get());
                return this.pushStack(o);
            };
        });
    var Zt,
        te = {};
    !(function () {
        var t;
        nt.shrinkWrapBlocks = function () {
            if (null != t) return t;
            t = !1;
            var e, i, n;
            return (
                (i = mt.getElementsByTagName("body")[0]),
                i && i.style
                    ? ((e = mt.createElement("div")),
                      (n = mt.createElement("div")),
                      (n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
                      i.appendChild(n).appendChild(e),
                      typeof e.style.zoom !== Tt &&
                          ((e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1"),
                          (e.appendChild(mt.createElement("div")).style.width = "5px"),
                          (t = 3 !== e.offsetWidth)),
                      i.removeChild(n),
                      t)
                    : void 0
            );
        };
    })();
    var ee = /^margin/,
        ie = new RegExp("^(" + At + ")(?!px)[a-z%]+$", "i"),
        ne,
        oe,
        re = /^(top|right|bottom|left)$/;
    t.getComputedStyle
        ? ((ne = function (t) {
              return t.ownerDocument.defaultView.getComputedStyle(t, null);
          }),
          (oe = function (t, e, i) {
              var n,
                  o,
                  r,
                  s,
                  a = t.style;
              return (
                  (i = i || ne(t)),
                  (s = i ? i.getPropertyValue(e) || i[e] : void 0),
                  i &&
                      ("" !== s || rt.contains(t.ownerDocument, t) || (s = rt.style(t, e)),
                      ie.test(s) && ee.test(e) && ((n = a.width), (o = a.minWidth), (r = a.maxWidth), (a.minWidth = a.maxWidth = a.width = s), (s = i.width), (a.width = n), (a.minWidth = o), (a.maxWidth = r))),
                  void 0 === s ? s : s + ""
              );
          }))
        : mt.documentElement.currentStyle &&
          ((ne = function (t) {
              return t.currentStyle;
          }),
          (oe = function (t, e, i) {
              var n,
                  o,
                  r,
                  s,
                  a = t.style;
              return (
                  (i = i || ne(t)),
                  (s = i ? i[e] : void 0),
                  null == s && a && a[e] && (s = a[e]),
                  ie.test(s) && !re.test(e) && ((n = a.left), (o = t.runtimeStyle), (r = o && o.left), r && (o.left = t.currentStyle.left), (a.left = "fontSize" === e ? "1em" : s), (s = a.pixelLeft + "px"), (a.left = n), r && (o.left = r)),
                  void 0 === s ? s : s + "" || "auto"
              );
          })),
        (function () {
            function e() {
                var e, i, n, o;
                (i = mt.getElementsByTagName("body")[0]),
                    i &&
                        i.style &&
                        ((e = mt.createElement("div")),
                        (n = mt.createElement("div")),
                        (n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
                        i.appendChild(n).appendChild(e),
                        (e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute"),
                        (r = s = !1),
                        (l = !0),
                        t.getComputedStyle &&
                            ((r = "1%" !== (t.getComputedStyle(e, null) || {}).top),
                            (s = "4px" === (t.getComputedStyle(e, null) || { width: "4px" }).width),
                            (o = e.appendChild(mt.createElement("div"))),
                            (o.style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
                            (o.style.marginRight = o.style.width = "0"),
                            (e.style.width = "1px"),
                            (l = !parseFloat((t.getComputedStyle(o, null) || {}).marginRight))),
                        (e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>"),
                        (o = e.getElementsByTagName("td")),
                        (o[0].style.cssText = "margin:0;border:0;padding:0;display:none"),
                        (a = 0 === o[0].offsetHeight),
                        a && ((o[0].style.display = ""), (o[1].style.display = "none"), (a = 0 === o[0].offsetHeight)),
                        i.removeChild(n));
            }
            var i, n, o, r, s, a, l;
            (i = mt.createElement("div")),
                (i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
                (o = i.getElementsByTagName("a")[0]),
                (n = o && o.style),
                n &&
                    ((n.cssText = "float:left;opacity:.5"),
                    (nt.opacity = "0.5" === n.opacity),
                    (nt.cssFloat = !!n.cssFloat),
                    (i.style.backgroundClip = "content-box"),
                    (i.cloneNode(!0).style.backgroundClip = ""),
                    (nt.clearCloneStyle = "content-box" === i.style.backgroundClip),
                    (nt.boxSizing = "" === n.boxSizing || "" === n.MozBoxSizing || "" === n.WebkitBoxSizing),
                    rt.extend(nt, {
                        reliableHiddenOffsets: function () {
                            return null == a && e(), a;
                        },
                        boxSizingReliable: function () {
                            return null == s && e(), s;
                        },
                        pixelPosition: function () {
                            return null == r && e(), r;
                        },
                        reliableMarginRight: function () {
                            return null == l && e(), l;
                        },
                    }));
        })(),
        (rt.swap = function (t, e, i, n) {
            var o,
                r,
                s = {};
            for (r in e) (s[r] = t.style[r]), (t.style[r] = e[r]);
            o = i.apply(t, n || []);
            for (r in e) t.style[r] = s[r];
            return o;
        });
    var se = /alpha\([^)]*\)/i,
        ae = /opacity\s*=\s*([^)]*)/,
        le = /^(none|table(?!-c[ea]).+)/,
        ce = new RegExp("^(" + At + ")(.*)$", "i"),
        de = new RegExp("^([+-])=(" + At + ")", "i"),
        ue = { position: "absolute", visibility: "hidden", display: "block" },
        pe = { letterSpacing: "0", fontWeight: "400" },
        fe = ["Webkit", "O", "Moz", "ms"];
    rt.extend({
        cssHooks: {
            opacity: {
                get: function (t, e) {
                    if (e) {
                        var i = oe(t, "opacity");
                        return "" === i ? "1" : i;
                    }
                },
            },
        },
        cssNumber: { columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
        cssProps: { float: nt.cssFloat ? "cssFloat" : "styleFloat" },
        style: function (t, e, i, n) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var o,
                    r,
                    s,
                    a = rt.camelCase(e),
                    l = t.style;
                if (((e = rt.cssProps[a] || (rt.cssProps[a] = A(l, a))), (s = rt.cssHooks[e] || rt.cssHooks[a]), void 0 === i)) return s && "get" in s && void 0 !== (o = s.get(t, !1, n)) ? o : l[e];
                if (
                    ((r = typeof i),
                    "string" === r && (o = de.exec(i)) && ((i = (o[1] + 1) * o[2] + parseFloat(rt.css(t, e))), (r = "number")),
                    null != i && i === i && ("number" !== r || rt.cssNumber[a] || (i += "px"), nt.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(s && "set" in s && void 0 === (i = s.set(t, i, n)))))
                )
                    try {
                        l[e] = i;
                    } catch (c) {}
            }
        },
        css: function (t, e, i, n) {
            var o,
                r,
                s,
                a = rt.camelCase(e);
            return (
                (e = rt.cssProps[a] || (rt.cssProps[a] = A(t.style, a))),
                (s = rt.cssHooks[e] || rt.cssHooks[a]),
                s && "get" in s && (r = s.get(t, !0, i)),
                void 0 === r && (r = oe(t, e, n)),
                "normal" === r && e in pe && (r = pe[e]),
                "" === i || i ? ((o = parseFloat(r)), i === !0 || rt.isNumeric(o) ? o || 0 : r) : r
            );
        },
    }),
        rt.each(["height", "width"], function (t, e) {
            rt.cssHooks[e] = {
                get: function (t, i, n) {
                    return i
                        ? le.test(rt.css(t, "display")) && 0 === t.offsetWidth
                            ? rt.swap(t, ue, function () {
                                  return O(t, e, n);
                              })
                            : O(t, e, n)
                        : void 0;
                },
                set: function (t, i, n) {
                    var o = n && ne(t);
                    return L(t, i, n ? I(t, e, n, nt.boxSizing && "border-box" === rt.css(t, "boxSizing", !1, o), o) : 0);
                },
            };
        }),
        nt.opacity ||
            (rt.cssHooks.opacity = {
                get: function (t, e) {
                    return ae.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : e ? "1" : "";
                },
                set: function (t, e) {
                    var i = t.style,
                        n = t.currentStyle,
                        o = rt.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                        r = (n && n.filter) || i.filter || "";
                    (i.zoom = 1), ((e >= 1 || "" === e) && "" === rt.trim(r.replace(se, "")) && i.removeAttribute && (i.removeAttribute("filter"), "" === e || (n && !n.filter))) || (i.filter = se.test(r) ? r.replace(se, o) : r + " " + o);
                },
            }),
        (rt.cssHooks.marginRight = E(nt.reliableMarginRight, function (t, e) {
            return e ? rt.swap(t, { display: "inline-block" }, oe, [t, "marginRight"]) : void 0;
        })),
        rt.each({ margin: "", padding: "", border: "Width" }, function (t, e) {
            (rt.cssHooks[t + e] = {
                expand: function (i) {
                    for (var n = 0, o = {}, r = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) o[t + _t[n] + e] = r[n] || r[n - 2] || r[0];
                    return o;
                },
            }),
                ee.test(t) || (rt.cssHooks[t + e].set = L);
        }),
        rt.fn.extend({
            css: function (t, e) {
                return It(
                    this,
                    function (t, e, i) {
                        var n,
                            o,
                            r = {},
                            s = 0;
                        if (rt.isArray(e)) {
                            for (n = ne(t), o = e.length; o > s; s++) r[e[s]] = rt.css(t, e[s], !1, n);
                            return r;
                        }
                        return void 0 !== i ? rt.style(t, e, i) : rt.css(t, e);
                    },
                    t,
                    e,
                    arguments.length > 1
                );
            },
            show: function () {
                return _(this, !0);
            },
            hide: function () {
                return _(this);
            },
            toggle: function (t) {
                return "boolean" == typeof t
                    ? t
                        ? this.show()
                        : this.hide()
                    : this.each(function () {
                          Lt(this) ? rt(this).show() : rt(this).hide();
                      });
            },
        }),
        (rt.Tween = N),
        (N.prototype = {
            constructor: N,
            init: function (t, e, i, n, o, r) {
                (this.elem = t), (this.prop = i), (this.easing = o || "swing"), (this.options = e), (this.start = this.now = this.cur()), (this.end = n), (this.unit = r || (rt.cssNumber[i] ? "" : "px"));
            },
            cur: function () {
                var t = N.propHooks[this.prop];
                return t && t.get ? t.get(this) : N.propHooks._default.get(this);
            },
            run: function (t) {
                var e,
                    i = N.propHooks[this.prop];
                return (
                    this.options.duration ? (this.pos = e = rt.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration)) : (this.pos = e = t),
                    (this.now = (this.end - this.start) * e + this.start),
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                    i && i.set ? i.set(this) : N.propHooks._default.set(this),
                    this
                );
            },
        }),
        (N.prototype.init.prototype = N.prototype),
        (N.propHooks = {
            _default: {
                get: function (t) {
                    var e;
                    return null == t.elem[t.prop] || (t.elem.style && null != t.elem.style[t.prop]) ? ((e = rt.css(t.elem, t.prop, "")), e && "auto" !== e ? e : 0) : t.elem[t.prop];
                },
                set: function (t) {
                    rt.fx.step[t.prop] ? rt.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[rt.cssProps[t.prop]] || rt.cssHooks[t.prop]) ? rt.style(t.elem, t.prop, t.now + t.unit) : (t.elem[t.prop] = t.now);
                },
            },
        }),
        (N.propHooks.scrollTop = N.propHooks.scrollLeft = {
            set: function (t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
            },
        }),
        (rt.easing = {
            linear: function (t) {
                return t;
            },
            swing: function (t) {
                return 0.5 - Math.cos(t * Math.PI) / 2;
            },
        }),
        (rt.fx = N.prototype.init),
        (rt.fx.step = {});
    var he,
        me,
        ge = /^(?:toggle|show|hide)$/,
        ve = new RegExp("^(?:([+-])=|)(" + At + ")([a-z%]*)$", "i"),
        ye = /queueHooks$/,
        be = [D],
        we = {
            "*": [
                function (t, e) {
                    var i = this.createTween(t, e),
                        n = i.cur(),
                        o = ve.exec(e),
                        r = (o && o[3]) || (rt.cssNumber[t] ? "" : "px"),
                        s = (rt.cssNumber[t] || ("px" !== r && +n)) && ve.exec(rt.css(i.elem, t)),
                        a = 1,
                        l = 20;
                    if (s && s[3] !== r) {
                        (r = r || s[3]), (o = o || []), (s = +n || 1);
                        do (a = a || ".5"), (s /= a), rt.style(i.elem, t, s + r);
                        while (a !== (a = i.cur() / n) && 1 !== a && --l);
                    }
                    return o && ((s = i.start = +s || +n || 0), (i.unit = r), (i.end = o[1] ? s + (o[1] + 1) * o[2] : +o[2])), i;
                },
            ],
        };
    (rt.Animation = rt.extend(M, {
        tweener: function (t, e) {
            rt.isFunction(t) ? ((e = t), (t = ["*"])) : (t = t.split(" "));
            for (var i, n = 0, o = t.length; o > n; n++) (i = t[n]), (we[i] = we[i] || []), we[i].unshift(e);
        },
        prefilter: function (t, e) {
            e ? be.unshift(t) : be.push(t);
        },
    })),
        (rt.speed = function (t, e, i) {
            var n = t && "object" == typeof t ? rt.extend({}, t) : { complete: i || (!i && e) || (rt.isFunction(t) && t), duration: t, easing: (i && e) || (e && !rt.isFunction(e) && e) };
            return (
                (n.duration = rt.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in rt.fx.speeds ? rt.fx.speeds[n.duration] : rt.fx.speeds._default),
                (null == n.queue || n.queue === !0) && (n.queue = "fx"),
                (n.old = n.complete),
                (n.complete = function () {
                    rt.isFunction(n.old) && n.old.call(this), n.queue && rt.dequeue(this, n.queue);
                }),
                n
            );
        }),
        rt.fn.extend({
            fadeTo: function (t, e, i, n) {
                return this.filter(Lt).css("opacity", 0).show().end().animate({ opacity: e }, t, i, n);
            },
            animate: function (t, e, i, n) {
                var o = rt.isEmptyObject(t),
                    r = rt.speed(e, i, n),
                    s = function () {
                        var e = M(this, rt.extend({}, t), r);
                        (o || rt._data(this, "finish")) && e.stop(!0);
                    };
                return (s.finish = s), o || r.queue === !1 ? this.each(s) : this.queue(r.queue, s);
            },
            stop: function (t, e, i) {
                var n = function (t) {
                    var e = t.stop;
                    delete t.stop, e(i);
                };
                return (
                    "string" != typeof t && ((i = e), (e = t), (t = void 0)),
                    e && t !== !1 && this.queue(t || "fx", []),
                    this.each(function () {
                        var e = !0,
                            o = null != t && t + "queueHooks",
                            r = rt.timers,
                            s = rt._data(this);
                        if (o) s[o] && s[o].stop && n(s[o]);
                        else for (o in s) s[o] && s[o].stop && ye.test(o) && n(s[o]);
                        for (o = r.length; o--; ) r[o].elem !== this || (null != t && r[o].queue !== t) || (r[o].anim.stop(i), (e = !1), r.splice(o, 1));
                        (e || !i) && rt.dequeue(this, t);
                    })
                );
            },
            finish: function (t) {
                return (
                    t !== !1 && (t = t || "fx"),
                    this.each(function () {
                        var e,
                            i = rt._data(this),
                            n = i[t + "queue"],
                            o = i[t + "queueHooks"],
                            r = rt.timers,
                            s = n ? n.length : 0;
                        for (i.finish = !0, rt.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = r.length; e--; ) r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
                        for (e = 0; s > e; e++) n[e] && n[e].finish && n[e].finish.call(this);
                        delete i.finish;
                    })
                );
            },
        }),
        rt.each(["toggle", "show", "hide"], function (t, e) {
            var i = rt.fn[e];
            rt.fn[e] = function (t, n, o) {
                return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(P(e, !0), t, n, o);
            };
        }),
        rt.each({ slideDown: P("show"), slideUp: P("hide"), slideToggle: P("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (t, e) {
            rt.fn[t] = function (t, i, n) {
                return this.animate(e, t, i, n);
            };
        }),
        (rt.timers = []),
        (rt.fx.tick = function () {
            var t,
                e = rt.timers,
                i = 0;
            for (he = rt.now(); i < e.length; i++) (t = e[i]), t() || e[i] !== t || e.splice(i--, 1);
            e.length || rt.fx.stop(), (he = void 0);
        }),
        (rt.fx.timer = function (t) {
            rt.timers.push(t), t() ? rt.fx.start() : rt.timers.pop();
        }),
        (rt.fx.interval = 13),
        (rt.fx.start = function () {
            me || (me = setInterval(rt.fx.tick, rt.fx.interval));
        }),
        (rt.fx.stop = function () {
            clearInterval(me), (me = null);
        }),
        (rt.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (rt.fn.delay = function (t, e) {
            return (
                (t = rt.fx ? rt.fx.speeds[t] || t : t),
                (e = e || "fx"),
                this.queue(e, function (e, i) {
                    var n = setTimeout(e, t);
                    i.stop = function () {
                        clearTimeout(n);
                    };
                })
            );
        }),
        (function () {
            var t, e, i, n, o;
            (e = mt.createElement("div")),
                e.setAttribute("className", "t"),
                (e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
                (n = e.getElementsByTagName("a")[0]),
                (i = mt.createElement("select")),
                (o = i.appendChild(mt.createElement("option"))),
                (t = e.getElementsByTagName("input")[0]),
                (n.style.cssText = "top:1px"),
                (nt.getSetAttribute = "t" !== e.className),
                (nt.style = /top/.test(n.getAttribute("style"))),
                (nt.hrefNormalized = "/a" === n.getAttribute("href")),
                (nt.checkOn = !!t.value),
                (nt.optSelected = o.selected),
                (nt.enctype = !!mt.createElement("form").enctype),
                (i.disabled = !0),
                (nt.optDisabled = !o.disabled),
                (t = mt.createElement("input")),
                t.setAttribute("value", ""),
                (nt.input = "" === t.getAttribute("value")),
                (t.value = "t"),
                t.setAttribute("type", "radio"),
                (nt.radioValue = "t" === t.value);
        })();
    var xe = /\r/g;
    rt.fn.extend({
        val: function (t) {
            var e,
                i,
                n,
                o = this[0];
            {
                if (arguments.length)
                    return (
                        (n = rt.isFunction(t)),
                        this.each(function (i) {
                            var o;
                            1 === this.nodeType &&
                                ((o = n ? t.call(this, i, rt(this).val()) : t),
                                null == o
                                    ? (o = "")
                                    : "number" == typeof o
                                    ? (o += "")
                                    : rt.isArray(o) &&
                                      (o = rt.map(o, function (t) {
                                          return null == t ? "" : t + "";
                                      })),
                                (e = rt.valHooks[this.type] || rt.valHooks[this.nodeName.toLowerCase()]),
                                (e && "set" in e && void 0 !== e.set(this, o, "value")) || (this.value = o));
                        })
                    );
                if (o) return (e = rt.valHooks[o.type] || rt.valHooks[o.nodeName.toLowerCase()]), e && "get" in e && void 0 !== (i = e.get(o, "value")) ? i : ((i = o.value), "string" == typeof i ? i.replace(xe, "") : null == i ? "" : i);
            }
        },
    }),
        rt.extend({
            valHooks: {
                option: {
                    get: function (t) {
                        var e = rt.find.attr(t, "value");
                        return null != e ? e : rt.trim(rt.text(t));
                    },
                },
                select: {
                    get: function (t) {
                        for (var e, i, n = t.options, o = t.selectedIndex, r = "select-one" === t.type || 0 > o, s = r ? null : [], a = r ? o + 1 : n.length, l = 0 > o ? a : r ? o : 0; a > l; l++)
                            if (((i = n[l]), (i.selected || l === o) && (nt.optDisabled ? !i.disabled : null === i.getAttribute("disabled")) && (!i.parentNode.disabled || !rt.nodeName(i.parentNode, "optgroup")))) {
                                if (((e = rt(i).val()), r)) return e;
                                s.push(e);
                            }
                        return s;
                    },
                    set: function (t, e) {
                        for (var i, n, o = t.options, r = rt.makeArray(e), s = o.length; s--; )
                            if (((n = o[s]), rt.inArray(rt.valHooks.option.get(n), r) >= 0))
                                try {
                                    n.selected = i = !0;
                                } catch (a) {
                                    n.scrollHeight;
                                }
                            else n.selected = !1;
                        return i || (t.selectedIndex = -1), o;
                    },
                },
            },
        }),
        rt.each(["radio", "checkbox"], function () {
            (rt.valHooks[this] = {
                set: function (t, e) {
                    return rt.isArray(e) ? (t.checked = rt.inArray(rt(t).val(), e) >= 0) : void 0;
                },
            }),
                nt.checkOn ||
                    (rt.valHooks[this].get = function (t) {
                        return null === t.getAttribute("value") ? "on" : t.value;
                    });
        });
    var ke,
        Te,
        Ce = rt.expr.attrHandle,
        Se = /^(?:checked|selected)$/i,
        Ee = nt.getSetAttribute,
        Ae = nt.input;
    rt.fn.extend({
        attr: function (t, e) {
            return It(this, rt.attr, t, e, arguments.length > 1);
        },
        removeAttr: function (t) {
            return this.each(function () {
                rt.removeAttr(this, t);
            });
        },
    }),
        rt.extend({
            attr: function (t, e, i) {
                var n,
                    o,
                    r = t.nodeType;
                if (t && 3 !== r && 8 !== r && 2 !== r)
                    return typeof t.getAttribute === Tt
                        ? rt.prop(t, e, i)
                        : ((1 === r && rt.isXMLDoc(t)) || ((e = e.toLowerCase()), (n = rt.attrHooks[e] || (rt.expr.match.bool.test(e) ? Te : ke))),
                          void 0 === i
                              ? n && "get" in n && null !== (o = n.get(t, e))
                                  ? o
                                  : ((o = rt.find.attr(t, e)), null == o ? void 0 : o)
                              : null !== i
                              ? n && "set" in n && void 0 !== (o = n.set(t, i, e))
                                  ? o
                                  : (t.setAttribute(e, i + ""), i)
                              : void rt.removeAttr(t, e));
            },
            removeAttr: function (t, e) {
                var i,
                    n,
                    o = 0,
                    r = e && e.match(wt);
                if (r && 1 === t.nodeType)
                    for (; (i = r[o++]); ) (n = rt.propFix[i] || i), rt.expr.match.bool.test(i) ? ((Ae && Ee) || !Se.test(i) ? (t[n] = !1) : (t[rt.camelCase("default-" + i)] = t[n] = !1)) : rt.attr(t, i, ""), t.removeAttribute(Ee ? i : n);
            },
            attrHooks: {
                type: {
                    set: function (t, e) {
                        if (!nt.radioValue && "radio" === e && rt.nodeName(t, "input")) {
                            var i = t.value;
                            return t.setAttribute("type", e), i && (t.value = i), e;
                        }
                    },
                },
            },
        }),
        (Te = {
            set: function (t, e, i) {
                return e === !1 ? rt.removeAttr(t, i) : (Ae && Ee) || !Se.test(i) ? t.setAttribute((!Ee && rt.propFix[i]) || i, i) : (t[rt.camelCase("default-" + i)] = t[i] = !0), i;
            },
        }),
        rt.each(rt.expr.match.bool.source.match(/\w+/g), function (t, e) {
            var i = Ce[e] || rt.find.attr;
            Ce[e] =
                (Ae && Ee) || !Se.test(e)
                    ? function (t, e, n) {
                          var o, r;
                          return n || ((r = Ce[e]), (Ce[e] = o), (o = null != i(t, e, n) ? e.toLowerCase() : null), (Ce[e] = r)), o;
                      }
                    : function (t, e, i) {
                          return i ? void 0 : t[rt.camelCase("default-" + e)] ? e.toLowerCase() : null;
                      };
        }),
        (Ae && Ee) ||
            (rt.attrHooks.value = {
                set: function (t, e, i) {
                    return rt.nodeName(t, "input") ? void (t.defaultValue = e) : ke && ke.set(t, e, i);
                },
            }),
        Ee ||
            ((ke = {
                set: function (t, e, i) {
                    var n = t.getAttributeNode(i);
                    return n || t.setAttributeNode((n = t.ownerDocument.createAttribute(i))), (n.value = e += ""), "value" === i || e === t.getAttribute(i) ? e : void 0;
                },
            }),
            (Ce.id = Ce.name = Ce.coords = function (t, e, i) {
                var n;
                return i ? void 0 : (n = t.getAttributeNode(e)) && "" !== n.value ? n.value : null;
            }),
            (rt.valHooks.button = {
                get: function (t, e) {
                    var i = t.getAttributeNode(e);
                    return i && i.specified ? i.value : void 0;
                },
                set: ke.set,
            }),
            (rt.attrHooks.contenteditable = {
                set: function (t, e, i) {
                    ke.set(t, "" === e ? !1 : e, i);
                },
            }),
            rt.each(["width", "height"], function (t, e) {
                rt.attrHooks[e] = {
                    set: function (t, i) {
                        return "" === i ? (t.setAttribute(e, "auto"), i) : void 0;
                    },
                };
            })),
        nt.style ||
            (rt.attrHooks.style = {
                get: function (t) {
                    return t.style.cssText || void 0;
                },
                set: function (t, e) {
                    return (t.style.cssText = e + "");
                },
            });
    var _e = /^(?:input|select|textarea|button|object)$/i,
        Le = /^(?:a|area)$/i;
    rt.fn.extend({
        prop: function (t, e) {
            return It(this, rt.prop, t, e, arguments.length > 1);
        },
        removeProp: function (t) {
            return (
                (t = rt.propFix[t] || t),
                this.each(function () {
                    try {
                        (this[t] = void 0), delete this[t];
                    } catch (e) {}
                })
            );
        },
    }),
        rt.extend({
            propFix: { for: "htmlFor", class: "className" },
            prop: function (t, e, i) {
                var n,
                    o,
                    r,
                    s = t.nodeType;
                if (t && 3 !== s && 8 !== s && 2 !== s)
                    return (
                        (r = 1 !== s || !rt.isXMLDoc(t)),
                        r && ((e = rt.propFix[e] || e), (o = rt.propHooks[e])),
                        void 0 !== i ? (o && "set" in o && void 0 !== (n = o.set(t, i, e)) ? n : (t[e] = i)) : o && "get" in o && null !== (n = o.get(t, e)) ? n : t[e]
                    );
            },
            propHooks: {
                tabIndex: {
                    get: function (t) {
                        var e = rt.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : _e.test(t.nodeName) || (Le.test(t.nodeName) && t.href) ? 0 : -1;
                    },
                },
            },
        }),
        nt.hrefNormalized ||
            rt.each(["href", "src"], function (t, e) {
                rt.propHooks[e] = {
                    get: function (t) {
                        return t.getAttribute(e, 4);
                    },
                };
            }),
        nt.optSelected ||
            (rt.propHooks.selected = {
                get: function (t) {
                    var e = t.parentNode;
                    return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null;
                },
            }),
        rt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            rt.propFix[this.toLowerCase()] = this;
        }),
        nt.enctype || (rt.propFix.enctype = "encoding");
    var Ie = /[\t\r\n\f]/g;
    rt.fn.extend({
        addClass: function (t) {
            var e,
                i,
                n,
                o,
                r,
                s,
                a = 0,
                l = this.length,
                c = "string" == typeof t && t;
            if (rt.isFunction(t))
                return this.each(function (e) {
                    rt(this).addClass(t.call(this, e, this.className));
                });
            if (c)
                for (e = (t || "").match(wt) || []; l > a; a++)
                    if (((i = this[a]), (n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(Ie, " ") : " ")))) {
                        for (r = 0; (o = e[r++]); ) n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                        (s = rt.trim(n)), i.className !== s && (i.className = s);
                    }
            return this;
        },
        removeClass: function (t) {
            var e,
                i,
                n,
                o,
                r,
                s,
                a = 0,
                l = this.length,
                c = 0 === arguments.length || ("string" == typeof t && t);
            if (rt.isFunction(t))
                return this.each(function (e) {
                    rt(this).removeClass(t.call(this, e, this.className));
                });
            if (c)
                for (e = (t || "").match(wt) || []; l > a; a++)
                    if (((i = this[a]), (n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(Ie, " ") : "")))) {
                        for (r = 0; (o = e[r++]); ) for (; n.indexOf(" " + o + " ") >= 0; ) n = n.replace(" " + o + " ", " ");
                        (s = t ? rt.trim(n) : ""), i.className !== s && (i.className = s);
                    }
            return this;
        },
        toggleClass: function (t, e) {
            var i = typeof t;
            return "boolean" == typeof e && "string" === i
                ? e
                    ? this.addClass(t)
                    : this.removeClass(t)
                : rt.isFunction(t)
                ? this.each(function (i) {
                      rt(this).toggleClass(t.call(this, i, this.className, e), e);
                  })
                : this.each(function () {
                      if ("string" === i) for (var e, n = 0, o = rt(this), r = t.match(wt) || []; (e = r[n++]); ) o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                      else (i === Tt || "boolean" === i) && (this.className && rt._data(this, "__className__", this.className), (this.className = this.className || t === !1 ? "" : rt._data(this, "__className__") || ""));
                  });
        },
        hasClass: function (t) {
            for (var e = " " + t + " ", i = 0, n = this.length; n > i; i++) if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(Ie, " ").indexOf(e) >= 0) return !0;
            return !1;
        },
    }),
        rt.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (
            t,
            e
        ) {
            rt.fn[e] = function (t, i) {
                return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e);
            };
        }),
        rt.fn.extend({
            hover: function (t, e) {
                return this.mouseenter(t).mouseleave(e || t);
            },
            bind: function (t, e, i) {
                return this.on(t, null, e, i);
            },
            unbind: function (t, e) {
                return this.off(t, null, e);
            },
            delegate: function (t, e, i, n) {
                return this.on(e, t, i, n);
            },
            undelegate: function (t, e, i) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i);
            },
        });
    var Oe = rt.now(),
        $e = /\?/,
        Ne = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    (rt.parseJSON = function (e) {
        if (t.JSON && t.JSON.parse) return t.JSON.parse(e + "");
        var i,
            n = null,
            o = rt.trim(e + "");
        return o &&
            !rt.trim(
                o.replace(Ne, function (t, e, o, r) {
                    return i && e && (n = 0), 0 === n ? t : ((i = o || e), (n += !r - !o), "");
                })
            )
            ? Function("return " + o)()
            : rt.error("Invalid JSON: " + e);
    }),
        (rt.parseXML = function (e) {
            var i, n;
            if (!e || "string" != typeof e) return null;
            try {
                t.DOMParser ? ((n = new DOMParser()), (i = n.parseFromString(e, "text/xml"))) : ((i = new ActiveXObject("Microsoft.XMLDOM")), (i.async = "false"), i.loadXML(e));
            } catch (o) {
                i = void 0;
            }
            return (i && i.documentElement && !i.getElementsByTagName("parsererror").length) || rt.error("Invalid XML: " + e), i;
        });
    var je,
        Pe,
        ze = /#.*$/,
        De = /([?&])_=[^&]*/,
        He = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Me = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Be = /^(?:GET|HEAD)$/,
        Re = /^\/\//,
        qe = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        We = {},
        Fe = {},
        Ue = "*/".concat("*");
    try {
        Pe = location.href;
    } catch (Xe) {
        (Pe = mt.createElement("a")), (Pe.href = ""), (Pe = Pe.href);
    }
    (je = qe.exec(Pe.toLowerCase()) || []),
        rt.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Pe,
                type: "GET",
                isLocal: Me.test(je[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: { "*": Ue, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
                contents: { xml: /xml/, html: /html/, json: /json/ },
                responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
                converters: { "* text": String, "text html": !0, "text json": rt.parseJSON, "text xml": rt.parseXML },
                flatOptions: { url: !0, context: !0 },
            },
            ajaxSetup: function (t, e) {
                return e ? q(q(t, rt.ajaxSettings), e) : q(rt.ajaxSettings, t);
            },
            ajaxPrefilter: B(We),
            ajaxTransport: B(Fe),
            ajax: function (t, e) {
                function i(t, e, i, n) {
                    var o,
                        d,
                        v,
                        y,
                        w,
                        k = e;
                    2 !== b &&
                        ((b = 2),
                        a && clearTimeout(a),
                        (c = void 0),
                        (s = n || ""),
                        (x.readyState = t > 0 ? 4 : 0),
                        (o = (t >= 200 && 300 > t) || 304 === t),
                        i && (y = W(u, x, i)),
                        (y = F(u, y, x, o)),
                        o
                            ? (u.ifModified && ((w = x.getResponseHeader("Last-Modified")), w && (rt.lastModified[r] = w), (w = x.getResponseHeader("etag")), w && (rt.etag[r] = w)),
                              204 === t || "HEAD" === u.type ? (k = "nocontent") : 304 === t ? (k = "notmodified") : ((k = y.state), (d = y.data), (v = y.error), (o = !v)))
                            : ((v = k), (t || !k) && ((k = "error"), 0 > t && (t = 0))),
                        (x.status = t),
                        (x.statusText = (e || k) + ""),
                        o ? h.resolveWith(p, [d, k, x]) : h.rejectWith(p, [x, k, v]),
                        x.statusCode(g),
                        (g = void 0),
                        l && f.trigger(o ? "ajaxSuccess" : "ajaxError", [x, u, o ? d : v]),
                        m.fireWith(p, [x, k]),
                        l && (f.trigger("ajaxComplete", [x, u]), --rt.active || rt.event.trigger("ajaxStop")));
                }
                "object" == typeof t && ((e = t), (t = void 0)), (e = e || {});
                var n,
                    o,
                    r,
                    s,
                    a,
                    l,
                    c,
                    d,
                    u = rt.ajaxSetup({}, e),
                    p = u.context || u,
                    f = u.context && (p.nodeType || p.jquery) ? rt(p) : rt.event,
                    h = rt.Deferred(),
                    m = rt.Callbacks("once memory"),
                    g = u.statusCode || {},
                    v = {},
                    y = {},
                    b = 0,
                    w = "canceled",
                    x = {
                        readyState: 0,
                        getResponseHeader: function (t) {
                            var e;
                            if (2 === b) {
                                if (!d) for (d = {}; (e = He.exec(s)); ) d[e[1].toLowerCase()] = e[2];
                                e = d[t.toLowerCase()];
                            }
                            return null == e ? null : e;
                        },
                        getAllResponseHeaders: function () {
                            return 2 === b ? s : null;
                        },
                        setRequestHeader: function (t, e) {
                            var i = t.toLowerCase();
                            return b || ((t = y[i] = y[i] || t), (v[t] = e)), this;
                        },
                        overrideMimeType: function (t) {
                            return b || (u.mimeType = t), this;
                        },
                        statusCode: function (t) {
                            var e;
                            if (t)
                                if (2 > b) for (e in t) g[e] = [g[e], t[e]];
                                else x.always(t[x.status]);
                            return this;
                        },
                        abort: function (t) {
                            var e = t || w;
                            return c && c.abort(e), i(0, e), this;
                        },
                    };
                if (
                    ((h.promise(x).complete = m.add),
                    (x.success = x.done),
                    (x.error = x.fail),
                    (u.url = ((t || u.url || Pe) + "").replace(ze, "").replace(Re, je[1] + "//")),
                    (u.type = e.method || e.type || u.method || u.type),
                    (u.dataTypes = rt
                        .trim(u.dataType || "*")
                        .toLowerCase()
                        .match(wt) || [""]),
                    null == u.crossDomain &&
                        ((n = qe.exec(u.url.toLowerCase())), (u.crossDomain = !(!n || (n[1] === je[1] && n[2] === je[2] && (n[3] || ("http:" === n[1] ? "80" : "443")) === (je[3] || ("http:" === je[1] ? "80" : "443")))))),
                    u.data && u.processData && "string" != typeof u.data && (u.data = rt.param(u.data, u.traditional)),
                    R(We, u, e, x),
                    2 === b)
                )
                    return x;
                (l = u.global),
                    l && 0 === rt.active++ && rt.event.trigger("ajaxStart"),
                    (u.type = u.type.toUpperCase()),
                    (u.hasContent = !Be.test(u.type)),
                    (r = u.url),
                    u.hasContent || (u.data && ((r = u.url += ($e.test(r) ? "&" : "?") + u.data), delete u.data), u.cache === !1 && (u.url = De.test(r) ? r.replace(De, "$1_=" + Oe++) : r + ($e.test(r) ? "&" : "?") + "_=" + Oe++)),
                    u.ifModified && (rt.lastModified[r] && x.setRequestHeader("If-Modified-Since", rt.lastModified[r]), rt.etag[r] && x.setRequestHeader("If-None-Match", rt.etag[r])),
                    ((u.data && u.hasContent && u.contentType !== !1) || e.contentType) && x.setRequestHeader("Content-Type", u.contentType),
                    x.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + Ue + "; q=0.01" : "") : u.accepts["*"]);
                for (o in u.headers) x.setRequestHeader(o, u.headers[o]);
                if (u.beforeSend && (u.beforeSend.call(p, x, u) === !1 || 2 === b)) return x.abort();
                w = "abort";
                for (o in { success: 1, error: 1, complete: 1 }) x[o](u[o]);
                if ((c = R(Fe, u, e, x))) {
                    (x.readyState = 1),
                        l && f.trigger("ajaxSend", [x, u]),
                        u.async &&
                            u.timeout > 0 &&
                            (a = setTimeout(function () {
                                x.abort("timeout");
                            }, u.timeout));
                    try {
                        (b = 1), c.send(v, i);
                    } catch (k) {
                        if (!(2 > b)) throw k;
                        i(-1, k);
                    }
                } else i(-1, "No Transport");
                return x;
            },
            getJSON: function (t, e, i) {
                return rt.get(t, e, i, "json");
            },
            getScript: function (t, e) {
                return rt.get(t, void 0, e, "script");
            },
        }),
        rt.each(["get", "post"], function (t, e) {
            rt[e] = function (t, i, n, o) {
                return rt.isFunction(i) && ((o = o || n), (n = i), (i = void 0)), rt.ajax({ url: t, type: e, dataType: o, data: i, success: n });
            };
        }),
        rt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
            rt.fn[e] = function (t) {
                return this.on(e, t);
            };
        }),
        (rt._evalUrl = function (t) {
            return rt.ajax({ url: t, type: "GET", dataType: "script", async: !1, global: !1, throws: !0 });
        }),
        rt.fn.extend({
            wrapAll: function (t) {
                if (rt.isFunction(t))
                    return this.each(function (e) {
                        rt(this).wrapAll(t.call(this, e));
                    });
                if (this[0]) {
                    var e = rt(t, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && e.insertBefore(this[0]),
                        e
                            .map(function () {
                                for (var t = this; t.firstChild && 1 === t.firstChild.nodeType; ) t = t.firstChild;
                                return t;
                            })
                            .append(this);
                }
                return this;
            },
            wrapInner: function (t) {
                return rt.isFunction(t)
                    ? this.each(function (e) {
                          rt(this).wrapInner(t.call(this, e));
                      })
                    : this.each(function () {
                          var e = rt(this),
                              i = e.contents();
                          i.length ? i.wrapAll(t) : e.append(t);
                      });
            },
            wrap: function (t) {
                var e = rt.isFunction(t);
                return this.each(function (i) {
                    rt(this).wrapAll(e ? t.call(this, i) : t);
                });
            },
            unwrap: function () {
                return this.parent()
                    .each(function () {
                        rt.nodeName(this, "body") || rt(this).replaceWith(this.childNodes);
                    })
                    .end();
            },
        }),
        (rt.expr.filters.hidden = function (t) {
            return (t.offsetWidth <= 0 && t.offsetHeight <= 0) || (!nt.reliableHiddenOffsets() && "none" === ((t.style && t.style.display) || rt.css(t, "display")));
        }),
        (rt.expr.filters.visible = function (t) {
            return !rt.expr.filters.hidden(t);
        });
    var Ye = /%20/g,
        Ve = /\[\]$/,
        Qe = /\r?\n/g,
        Ge = /^(?:submit|button|image|reset|file)$/i,
        Je = /^(?:input|select|textarea|keygen)/i;
    (rt.param = function (t, e) {
        var i,
            n = [],
            o = function (t, e) {
                (e = rt.isFunction(e) ? e() : null == e ? "" : e), (n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e));
            };
        if ((void 0 === e && (e = rt.ajaxSettings && rt.ajaxSettings.traditional), rt.isArray(t) || (t.jquery && !rt.isPlainObject(t))))
            rt.each(t, function () {
                o(this.name, this.value);
            });
        else for (i in t) U(i, t[i], e, o);
        return n.join("&").replace(Ye, "+");
    }),
        rt.fn.extend({
            serialize: function () {
                return rt.param(this.serializeArray());
            },
            serializeArray: function () {
                return this.map(function () {
                    var t = rt.prop(this, "elements");
                    return t ? rt.makeArray(t) : this;
                })
                    .filter(function () {
                        var t = this.type;
                        return this.name && !rt(this).is(":disabled") && Je.test(this.nodeName) && !Ge.test(t) && (this.checked || !Ot.test(t));
                    })
                    .map(function (t, e) {
                        var i = rt(this).val();
                        return null == i
                            ? null
                            : rt.isArray(i)
                            ? rt.map(i, function (t) {
                                  return { name: e.name, value: t.replace(Qe, "\r\n") };
                              })
                            : { name: e.name, value: i.replace(Qe, "\r\n") };
                    })
                    .get();
            },
        }),
        (rt.ajaxSettings.xhr =
            void 0 !== t.ActiveXObject
                ? function () {
                      return (!this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && X()) || Y();
                  }
                : X);
    var Ke = 0,
        Ze = {},
        ti = rt.ajaxSettings.xhr();
    t.ActiveXObject &&
        rt(t).on("unload", function () {
            for (var t in Ze) Ze[t](void 0, !0);
        }),
        (nt.cors = !!ti && "withCredentials" in ti),
        (ti = nt.ajax = !!ti),
        ti &&
            rt.ajaxTransport(function (t) {
                if (!t.crossDomain || nt.cors) {
                    var e;
                    return {
                        send: function (i, n) {
                            var o,
                                r = t.xhr(),
                                s = ++Ke;
                            if ((r.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)) for (o in t.xhrFields) r[o] = t.xhrFields[o];
                            t.mimeType && r.overrideMimeType && r.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                            for (o in i) void 0 !== i[o] && r.setRequestHeader(o, i[o] + "");
                            r.send((t.hasContent && t.data) || null),
                                (e = function (i, o) {
                                    var a, l, c;
                                    if (e && (o || 4 === r.readyState))
                                        if ((delete Ze[s], (e = void 0), (r.onreadystatechange = rt.noop), o)) 4 !== r.readyState && r.abort();
                                        else {
                                            (c = {}), (a = r.status), "string" == typeof r.responseText && (c.text = r.responseText);
                                            try {
                                                l = r.statusText;
                                            } catch (d) {
                                                l = "";
                                            }
                                            a || !t.isLocal || t.crossDomain ? 1223 === a && (a = 204) : (a = c.text ? 200 : 404);
                                        }
                                    c && n(a, l, c, r.getAllResponseHeaders());
                                }),
                                t.async ? (4 === r.readyState ? setTimeout(e) : (r.onreadystatechange = Ze[s] = e)) : e();
                        },
                        abort: function () {
                            e && e(void 0, !0);
                        },
                    };
                }
            }),
        rt.ajaxSetup({
            accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
            contents: { script: /(?:java|ecma)script/ },
            converters: {
                "text script": function (t) {
                    return rt.globalEval(t), t;
                },
            },
        }),
        rt.ajaxPrefilter("script", function (t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && ((t.type = "GET"), (t.global = !1));
        }),
        rt.ajaxTransport("script", function (t) {
            if (t.crossDomain) {
                var e,
                    i = mt.head || rt("head")[0] || mt.documentElement;
                return {
                    send: function (n, o) {
                        (e = mt.createElement("script")),
                            (e.async = !0),
                            t.scriptCharset && (e.charset = t.scriptCharset),
                            (e.src = t.url),
                            (e.onload = e.onreadystatechange = function (t, i) {
                                (i || !e.readyState || /loaded|complete/.test(e.readyState)) && ((e.onload = e.onreadystatechange = null), e.parentNode && e.parentNode.removeChild(e), (e = null), i || o(200, "success"));
                            }),
                            i.insertBefore(e, i.firstChild);
                    },
                    abort: function () {
                        e && e.onload(void 0, !0);
                    },
                };
            }
        });
    var ei = [],
        ii = /(=)\?(?=&|$)|\?\?/;
    rt.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var t = ei.pop() || rt.expando + "_" + Oe++;
            return (this[t] = !0), t;
        },
    }),
        rt.ajaxPrefilter("json jsonp", function (e, i, n) {
            var o,
                r,
                s,
                a = e.jsonp !== !1 && (ii.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && ii.test(e.data) && "data");
            return a || "jsonp" === e.dataTypes[0]
                ? ((o = e.jsonpCallback = rt.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                  a ? (e[a] = e[a].replace(ii, "$1" + o)) : e.jsonp !== !1 && (e.url += ($e.test(e.url) ? "&" : "?") + e.jsonp + "=" + o),
                  (e.converters["script json"] = function () {
                      return s || rt.error(o + " was not called"), s[0];
                  }),
                  (e.dataTypes[0] = "json"),
                  (r = t[o]),
                  (t[o] = function () {
                      s = arguments;
                  }),
                  n.always(function () {
                      (t[o] = r), e[o] && ((e.jsonpCallback = i.jsonpCallback), ei.push(o)), s && rt.isFunction(r) && r(s[0]), (s = r = void 0);
                  }),
                  "script")
                : void 0;
        }),
        (rt.parseHTML = function (t, e, i) {
            if (!t || "string" != typeof t) return null;
            "boolean" == typeof e && ((i = e), (e = !1)), (e = e || mt);
            var n = pt.exec(t),
                o = !i && [];
            return n ? [e.createElement(n[1])] : ((n = rt.buildFragment([t], e, o)), o && o.length && rt(o).remove(), rt.merge([], n.childNodes));
        });
    var ni = rt.fn.load;
    (rt.fn.load = function (t, e, i) {
        if ("string" != typeof t && ni) return ni.apply(this, arguments);
        var n,
            o,
            r,
            s = this,
            a = t.indexOf(" ");
        return (
            a >= 0 && ((n = rt.trim(t.slice(a, t.length))), (t = t.slice(0, a))),
            rt.isFunction(e) ? ((i = e), (e = void 0)) : e && "object" == typeof e && (r = "POST"),
            s.length > 0 &&
                rt
                    .ajax({ url: t, type: r, dataType: "html", data: e })
                    .done(function (t) {
                        (o = arguments), s.html(n ? rt("<div>").append(rt.parseHTML(t)).find(n) : t);
                    })
                    .complete(
                        i &&
                            function (t, e) {
                                s.each(i, o || [t.responseText, e, t]);
                            }
                    ),
            this
        );
    }),
        (rt.expr.filters.animated = function (t) {
            return rt.grep(rt.timers, function (e) {
                return t === e.elem;
            }).length;
        });
    var oi = t.document.documentElement;
    (rt.offset = {
        setOffset: function (t, e, i) {
            var n,
                o,
                r,
                s,
                a,
                l,
                c,
                d = rt.css(t, "position"),
                u = rt(t),
                p = {};
            "static" === d && (t.style.position = "relative"),
                (a = u.offset()),
                (r = rt.css(t, "top")),
                (l = rt.css(t, "left")),
                (c = ("absolute" === d || "fixed" === d) && rt.inArray("auto", [r, l]) > -1),
                c ? ((n = u.position()), (s = n.top), (o = n.left)) : ((s = parseFloat(r) || 0), (o = parseFloat(l) || 0)),
                rt.isFunction(e) && (e = e.call(t, i, a)),
                null != e.top && (p.top = e.top - a.top + s),
                null != e.left && (p.left = e.left - a.left + o),
                "using" in e ? e.using.call(t, p) : u.css(p);
        },
    }),
        rt.fn.extend({
            offset: function (t) {
                if (arguments.length)
                    return void 0 === t
                        ? this
                        : this.each(function (e) {
                              rt.offset.setOffset(this, t, e);
                          });
                var e,
                    i,
                    n = { top: 0, left: 0 },
                    o = this[0],
                    r = o && o.ownerDocument;
                if (r)
                    return (
                        (e = r.documentElement),
                        rt.contains(e, o)
                            ? (typeof o.getBoundingClientRect !== Tt && (n = o.getBoundingClientRect()),
                              (i = V(r)),
                              { top: n.top + (i.pageYOffset || e.scrollTop) - (e.clientTop || 0), left: n.left + (i.pageXOffset || e.scrollLeft) - (e.clientLeft || 0) })
                            : n
                    );
            },
            position: function () {
                if (this[0]) {
                    var t,
                        e,
                        i = { top: 0, left: 0 },
                        n = this[0];
                    return (
                        "fixed" === rt.css(n, "position")
                            ? (e = n.getBoundingClientRect())
                            : ((t = this.offsetParent()), (e = this.offset()), rt.nodeName(t[0], "html") || (i = t.offset()), (i.top += rt.css(t[0], "borderTopWidth", !0)), (i.left += rt.css(t[0], "borderLeftWidth", !0))),
                        { top: e.top - i.top - rt.css(n, "marginTop", !0), left: e.left - i.left - rt.css(n, "marginLeft", !0) }
                    );
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (var t = this.offsetParent || oi; t && !rt.nodeName(t, "html") && "static" === rt.css(t, "position"); ) t = t.offsetParent;
                    return t || oi;
                });
            },
        }),
        rt.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (t, e) {
            var i = /Y/.test(e);
            rt.fn[t] = function (n) {
                return It(
                    this,
                    function (t, n, o) {
                        var r = V(t);
                        return void 0 === o ? (r ? (e in r ? r[e] : r.document.documentElement[n]) : t[n]) : void (r ? r.scrollTo(i ? rt(r).scrollLeft() : o, i ? o : rt(r).scrollTop()) : (t[n] = o));
                    },
                    t,
                    n,
                    arguments.length,
                    null
                );
            };
        }),
        rt.each(["top", "left"], function (t, e) {
            rt.cssHooks[e] = E(nt.pixelPosition, function (t, i) {
                return i ? ((i = oe(t, e)), ie.test(i) ? rt(t).position()[e] + "px" : i) : void 0;
            });
        }),
        rt.each({ Height: "height", Width: "width" }, function (t, e) {
            rt.each({ padding: "inner" + t, content: e, "": "outer" + t }, function (i, n) {
                rt.fn[n] = function (n, o) {
                    var r = arguments.length && (i || "boolean" != typeof n),
                        s = i || (n === !0 || o === !0 ? "margin" : "border");
                    return It(
                        this,
                        function (e, i, n) {
                            var o;
                            return rt.isWindow(e)
                                ? e.document.documentElement["client" + t]
                                : 9 === e.nodeType
                                ? ((o = e.documentElement), Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t]))
                                : void 0 === n
                                ? rt.css(e, i, s)
                                : rt.style(e, i, n, s);
                        },
                        e,
                        r ? n : void 0,
                        r,
                        null
                    );
                };
            });
        }),
        (rt.fn.size = function () {
            return this.length;
        }),
        (rt.fn.andSelf = rt.fn.addBack),
        "function" == typeof define &&
            define.amd &&
            define("jquery", [], function () {
                return rt;
            });
    var ri = t.jQuery,
        si = t.$;
    return (
        (rt.noConflict = function (e) {
            return t.$ === rt && (t.$ = si), e && t.jQuery === rt && (t.jQuery = ri), rt;
        }),
        typeof e === Tt && (t.jQuery = t.$ = rt),
        rt
    );
}),
    function () {
        function t() {}
        function e(t, e) {
            for (var i = t.length; i--; ) if (t[i].listener === e) return i;
            return -1;
        }
        function i(t) {
            return function e() {
                return this[t].apply(this, arguments);
            };
        }
        var n = t.prototype,
            o = this,
            r = o.EventEmitter;
        (n.getListeners = function s(t) {
            var e = this._getEvents(),
                i,
                n;
            if ("object" == typeof t) {
                i = {};
                for (n in e) e.hasOwnProperty(n) && t.test(n) && (i[n] = e[n]);
            } else i = e[t] || (e[t] = []);
            return i;
        }),
            (n.flattenListeners = function a(t) {
                var e = [],
                    i;
                for (i = 0; i < t.length; i += 1) e.push(t[i].listener);
                return e;
            }),
            (n.getListenersAsObject = function l(t) {
                var e = this.getListeners(t),
                    i;
                return e instanceof Array && ((i = {}), (i[t] = e)), i || e;
            }),
            (n.addListener = function c(t, i) {
                var n = this.getListenersAsObject(t),
                    o = "object" == typeof i,
                    r;
                for (r in n) n.hasOwnProperty(r) && -1 === e(n[r], i) && n[r].push(o ? i : { listener: i, once: !1 });
                return this;
            }),
            (n.on = i("addListener")),
            (n.addOnceListener = function d(t, e) {
                return this.addListener(t, { listener: e, once: !0 });
            }),
            (n.once = i("addOnceListener")),
            (n.defineEvent = function u(t) {
                return this.getListeners(t), this;
            }),
            (n.defineEvents = function p(t) {
                for (var e = 0; e < t.length; e += 1) this.defineEvent(t[e]);
                return this;
            }),
            (n.removeListener = function f(t, i) {
                var n = this.getListenersAsObject(t),
                    o,
                    r;
                for (r in n) n.hasOwnProperty(r) && ((o = e(n[r], i)), -1 !== o && n[r].splice(o, 1));
                return this;
            }),
            (n.off = i("removeListener")),
            (n.addListeners = function h(t, e) {
                return this.manipulateListeners(!1, t, e);
            }),
            (n.removeListeners = function m(t, e) {
                return this.manipulateListeners(!0, t, e);
            }),
            (n.manipulateListeners = function g(t, e, i) {
                var n,
                    o,
                    r = t ? this.removeListener : this.addListener,
                    s = t ? this.removeListeners : this.addListeners;
                if ("object" != typeof e || e instanceof RegExp) for (n = i.length; n--; ) r.call(this, e, i[n]);
                else for (n in e) e.hasOwnProperty(n) && (o = e[n]) && ("function" == typeof o ? r.call(this, n, o) : s.call(this, n, o));
                return this;
            }),
            (n.removeEvent = function v(t) {
                var e = typeof t,
                    i = this._getEvents(),
                    n;
                if ("string" === e) delete i[t];
                else if ("object" === e) for (n in i) i.hasOwnProperty(n) && t.test(n) && delete i[n];
                else delete this._events;
                return this;
            }),
            (n.removeAllListeners = i("removeEvent")),
            (n.emitEvent = function y(t, e) {
                var i = this.getListenersAsObject(t),
                    n,
                    o,
                    r,
                    s;
                for (r in i)
                    if (i.hasOwnProperty(r))
                        for (o = i[r].length; o--; ) (n = i[r][o]), n.once === !0 && this.removeListener(t, n.listener), (s = n.listener.apply(this, e || [])), s === this._getOnceReturnValue() && this.removeListener(t, n.listener);
                return this;
            }),
            (n.trigger = i("emitEvent")),
            (n.emit = function b(t) {
                var e = Array.prototype.slice.call(arguments, 1);
                return this.emitEvent(t, e);
            }),
            (n.setOnceReturnValue = function w(t) {
                return (this._onceReturnValue = t), this;
            }),
            (n._getOnceReturnValue = function x() {
                return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0;
            }),
            (n._getEvents = function k() {
                return this._events || (this._events = {});
            }),
            (t.noConflict = function T() {
                return (o.EventEmitter = r), t;
            }),
            "function" == typeof define && define.amd
                ? define("eventEmitter/EventEmitter", [], function () {
                      return t;
                  })
                : "object" == typeof module && module.exports
                ? (module.exports = t)
                : (this.EventEmitter = t);
    }.call(this),
    (function (t) {
        function e(e) {
            var i = t.event;
            return (i.target = i.target || i.srcElement || e), i;
        }
        var i = document.documentElement,
            n = function () {};
        i.addEventListener
            ? (n = function (t, e, i) {
                  t.addEventListener(e, i, !1);
              })
            : i.attachEvent &&
              (n = function (t, i, n) {
                  (t[i + n] = n.handleEvent
                      ? function () {
                            var i = e(t);
                            n.handleEvent.call(n, i);
                        }
                      : function () {
                            var i = e(t);
                            n.call(t, i);
                        }),
                      t.attachEvent("on" + i, t[i + n]);
              });
        var o = function () {};
        i.removeEventListener
            ? (o = function (t, e, i) {
                  t.removeEventListener(e, i, !1);
              })
            : i.detachEvent &&
              (o = function (t, e, i) {
                  t.detachEvent("on" + e, t[e + i]);
                  try {
                      delete t[e + i];
                  } catch (n) {
                      t[e + i] = void 0;
                  }
              });
        var r = { bind: n, unbind: o };
        "function" == typeof define && define.amd ? define("eventie/eventie", r) : (t.eventie = r);
    })(this),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function (i, n) {
                  return e(t, i, n);
              })
            : "object" == typeof exports
            ? (module.exports = e(t, require("wolfy87-eventemitter"), require("eventie")))
            : (t.imagesLoaded = e(t, t.EventEmitter, t.eventie));
    })(window, function t(e, i, n) {
        function o(t, e) {
            for (var i in e) t[i] = e[i];
            return t;
        }
        function r(t) {
            return "[object Array]" === p.call(t);
        }
        function s(t) {
            var e = [];
            if (r(t)) e = t;
            else if ("number" == typeof t.length) for (var i = 0, n = t.length; n > i; i++) e.push(t[i]);
            else e.push(t);
            return e;
        }
        function a(t, e, i) {
            if (!(this instanceof a)) return new a(t, e);
            "string" == typeof t && (t = document.querySelectorAll(t)),
                (this.elements = s(t)),
                (this.options = o({}, this.options)),
                "function" == typeof e ? (i = e) : o(this.options, e),
                i && this.on("always", i),
                this.getImages(),
                $ && (this.jqDeferred = new $.Deferred());
            var n = this;
            setTimeout(function () {
                n.check();
            });
        }
        function l(t) {
            this.img = t;
        }
        function c(t) {
            (this.src = t), (f[t] = this);
        }
        var $ = e.jQuery,
            d = e.console,
            u = "undefined" != typeof d,
            p = Object.prototype.toString;
        (a.prototype = new i()),
            (a.prototype.options = {}),
            (a.prototype.getImages = function () {
                this.images = [];
                for (var t = 0, e = this.elements.length; e > t; t++) {
                    var i = this.elements[t];
                    "IMG" === i.nodeName && this.addImage(i);
                    var n = i.nodeType;
                    if (n && (1 === n || 9 === n || 11 === n))
                        for (var o = i.querySelectorAll("img"), r = 0, s = o.length; s > r; r++) {
                            var a = o[r];
                            this.addImage(a);
                        }
                }
            }),
            (a.prototype.addImage = function (t) {
                var e = new l(t);
                this.images.push(e);
            }),
            (a.prototype.check = function () {
                function t(t, o) {
                    return e.options.debug && u && d.log("confirm", t, o), e.progress(t), i++, i === n && e.complete(), !0;
                }
                var e = this,
                    i = 0,
                    n = this.images.length;
                if (((this.hasAnyBroken = !1), !n)) return void this.complete();
                for (var o = 0; n > o; o++) {
                    var r = this.images[o];
                    r.on("confirm", t), r.check();
                }
            }),
            (a.prototype.progress = function (t) {
                this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded;
                var e = this;
                setTimeout(function () {
                    e.emit("progress", e, t), e.jqDeferred && e.jqDeferred.notify && e.jqDeferred.notify(e, t);
                });
            }),
            (a.prototype.complete = function () {
                var t = this.hasAnyBroken ? "fail" : "done";
                this.isComplete = !0;
                var e = this;
                setTimeout(function () {
                    if ((e.emit(t, e), e.emit("always", e), e.jqDeferred)) {
                        var i = e.hasAnyBroken ? "reject" : "resolve";
                        e.jqDeferred[i](e);
                    }
                });
            }),
            $ &&
                ($.fn.imagesLoaded = function (t, e) {
                    var i = new a(this, t, e);
                    return i.jqDeferred.promise($(this));
                }),
            (l.prototype = new i()),
            (l.prototype.check = function () {
                var t = f[this.img.src] || new c(this.img.src);
                if (t.isConfirmed) return void this.confirm(t.isLoaded, "cached was confirmed");
                if (this.img.complete && void 0 !== this.img.naturalWidth) return void this.confirm(0 !== this.img.naturalWidth, "naturalWidth");
                var e = this;
                t.on("confirm", function (t, i) {
                    return e.confirm(t.isLoaded, i), !0;
                }),
                    t.check();
            }),
            (l.prototype.confirm = function (t, e) {
                (this.isLoaded = t), this.emit("confirm", this, e);
            });
        var f = {};
        return (
            (c.prototype = new i()),
            (c.prototype.check = function () {
                if (!this.isChecked) {
                    var t = new Image();
                    n.bind(t, "load", this), n.bind(t, "error", this), (t.src = this.src), (this.isChecked = !0);
                }
            }),
            (c.prototype.handleEvent = function (t) {
                var e = "on" + t.type;
                this[e] && this[e](t);
            }),
            (c.prototype.onload = function (t) {
                this.confirm(!0, "onload"), this.unbindProxyEvents(t);
            }),
            (c.prototype.onerror = function (t) {
                this.confirm(!1, "onerror"), this.unbindProxyEvents(t);
            }),
            (c.prototype.confirm = function (t, e) {
                (this.isConfirmed = !0), (this.isLoaded = t), this.emit("confirm", this, e);
            }),
            (c.prototype.unbindProxyEvents = function (t) {
                n.unbind(t.target, "load", this), n.unbind(t.target, "error", this);
            }),
            a
        );
    }),
    (function (t) {
        function e() {}
        function i($) {
            function t(t) {
                t.prototype.option ||
                    (t.prototype.option = function (t) {
                        $.isPlainObject(t) && (this.options = $.extend(!0, this.options, t));
                    });
            }
            function i(t, e) {
                $.fn[t] = function (i) {
                    if ("string" == typeof i) {
                        for (var r = n.call(arguments, 1), s = 0, a = this.length; a > s; s++) {
                            var l = this[s],
                                c = $.data(l, t);
                            if (c)
                                if ($.isFunction(c[i]) && "_" !== i.charAt(0)) {
                                    var d = c[i].apply(c, r);
                                    if (void 0 !== d) return d;
                                } else o("no such method '" + i + "' for " + t + " instance");
                            else o("cannot call methods on " + t + " prior to initialization; attempted to call '" + i + "'");
                        }
                        return this;
                    }
                    return this.each(function () {
                        var n = $.data(this, t);
                        n ? (n.option(i), n._init()) : ((n = new e(this, i)), $.data(this, t, n));
                    });
                };
            }
            if ($) {
                var o =
                    "undefined" == typeof console
                        ? e
                        : function (t) {
                              console.error(t);
                          };
                return (
                    ($.bridget = function (e, n) {
                        t(n), i(e, n);
                    }),
                    $.bridget
                );
            }
        }
        var n = Array.prototype.slice;
        "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], i) : i("object" == typeof exports ? require("jquery") : t.jQuery);
    })(window),
    (function (t) {
        function e(e) {
            var i = t.event;
            return (i.target = i.target || i.srcElement || e), i;
        }
        var i = document.documentElement,
            n = function () {};
        i.addEventListener
            ? (n = function (t, e, i) {
                  t.addEventListener(e, i, !1);
              })
            : i.attachEvent &&
              (n = function (t, i, n) {
                  (t[i + n] = n.handleEvent
                      ? function () {
                            var i = e(t);
                            n.handleEvent.call(n, i);
                        }
                      : function () {
                            var i = e(t);
                            n.call(t, i);
                        }),
                      t.attachEvent("on" + i, t[i + n]);
              });
        var o = function () {};
        i.removeEventListener
            ? (o = function (t, e, i) {
                  t.removeEventListener(e, i, !1);
              })
            : i.detachEvent &&
              (o = function (t, e, i) {
                  t.detachEvent("on" + e, t[e + i]);
                  try {
                      delete t[e + i];
                  } catch (n) {
                      t[e + i] = void 0;
                  }
              });
        var r = { bind: n, unbind: o };
        "function" == typeof define && define.amd ? define("eventie/eventie", r) : "object" == typeof exports ? (module.exports = r) : (t.eventie = r);
    })(this),
    (function (t) {
        function e(t) {
            "function" == typeof t && (e.isReady ? t() : s.push(t));
        }
        function i(t) {
            var i = "readystatechange" === t.type && "complete" !== r.readyState;
            e.isReady || i || n();
        }
        function n() {
            e.isReady = !0;
            for (var t = 0, i = s.length; i > t; t++) {
                var n = s[t];
                n();
            }
        }
        function o(o) {
            return "complete" === r.readyState ? n() : (o.bind(r, "DOMContentLoaded", i), o.bind(r, "readystatechange", i), o.bind(t, "load", i)), e;
        }
        var r = t.document,
            s = [];
        (e.isReady = !1), "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], o) : "object" == typeof exports ? (module.exports = o(require("eventie"))) : (t.docReady = o(t.eventie));
    })(window),
    function () {
        function t() {}
        function e(t, e) {
            for (var i = t.length; i--; ) if (t[i].listener === e) return i;
            return -1;
        }
        function i(t) {
            return function e() {
                return this[t].apply(this, arguments);
            };
        }
        var n = t.prototype,
            o = this,
            r = o.EventEmitter;
        (n.getListeners = function s(t) {
            var e = this._getEvents(),
                i,
                n;
            if (t instanceof RegExp) {
                i = {};
                for (n in e) e.hasOwnProperty(n) && t.test(n) && (i[n] = e[n]);
            } else i = e[t] || (e[t] = []);
            return i;
        }),
            (n.flattenListeners = function a(t) {
                var e = [],
                    i;
                for (i = 0; i < t.length; i += 1) e.push(t[i].listener);
                return e;
            }),
            (n.getListenersAsObject = function l(t) {
                var e = this.getListeners(t),
                    i;
                return e instanceof Array && ((i = {}), (i[t] = e)), i || e;
            }),
            (n.addListener = function c(t, i) {
                var n = this.getListenersAsObject(t),
                    o = "object" == typeof i,
                    r;
                for (r in n) n.hasOwnProperty(r) && -1 === e(n[r], i) && n[r].push(o ? i : { listener: i, once: !1 });
                return this;
            }),
            (n.on = i("addListener")),
            (n.addOnceListener = function d(t, e) {
                return this.addListener(t, { listener: e, once: !0 });
            }),
            (n.once = i("addOnceListener")),
            (n.defineEvent = function u(t) {
                return this.getListeners(t), this;
            }),
            (n.defineEvents = function p(t) {
                for (var e = 0; e < t.length; e += 1) this.defineEvent(t[e]);
                return this;
            }),
            (n.removeListener = function f(t, i) {
                var n = this.getListenersAsObject(t),
                    o,
                    r;
                for (r in n) n.hasOwnProperty(r) && ((o = e(n[r], i)), -1 !== o && n[r].splice(o, 1));
                return this;
            }),
            (n.off = i("removeListener")),
            (n.addListeners = function h(t, e) {
                return this.manipulateListeners(!1, t, e);
            }),
            (n.removeListeners = function m(t, e) {
                return this.manipulateListeners(!0, t, e);
            }),
            (n.manipulateListeners = function g(t, e, i) {
                var n,
                    o,
                    r = t ? this.removeListener : this.addListener,
                    s = t ? this.removeListeners : this.addListeners;
                if ("object" != typeof e || e instanceof RegExp) for (n = i.length; n--; ) r.call(this, e, i[n]);
                else for (n in e) e.hasOwnProperty(n) && (o = e[n]) && ("function" == typeof o ? r.call(this, n, o) : s.call(this, n, o));
                return this;
            }),
            (n.removeEvent = function v(t) {
                var e = typeof t,
                    i = this._getEvents(),
                    n;
                if ("string" === e) delete i[t];
                else if (t instanceof RegExp) for (n in i) i.hasOwnProperty(n) && t.test(n) && delete i[n];
                else delete this._events;
                return this;
            }),
            (n.removeAllListeners = i("removeEvent")),
            (n.emitEvent = function y(t, e) {
                var i = this.getListenersAsObject(t),
                    n,
                    o,
                    r,
                    s;
                for (r in i)
                    if (i.hasOwnProperty(r))
                        for (o = i[r].length; o--; ) (n = i[r][o]), n.once === !0 && this.removeListener(t, n.listener), (s = n.listener.apply(this, e || [])), s === this._getOnceReturnValue() && this.removeListener(t, n.listener);
                return this;
            }),
            (n.trigger = i("emitEvent")),
            (n.emit = function b(t) {
                var e = Array.prototype.slice.call(arguments, 1);
                return this.emitEvent(t, e);
            }),
            (n.setOnceReturnValue = function w(t) {
                return (this._onceReturnValue = t), this;
            }),
            (n._getOnceReturnValue = function x() {
                return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0;
            }),
            (n._getEvents = function k() {
                return this._events || (this._events = {});
            }),
            (t.noConflict = function T() {
                return (o.EventEmitter = r), t;
            }),
            "function" == typeof define && define.amd
                ? define("eventEmitter/EventEmitter", [], function () {
                      return t;
                  })
                : "object" == typeof module && module.exports
                ? (module.exports = t)
                : (o.EventEmitter = t);
    }.call(this),
    (function (t) {
        function e(t) {
            if (t) {
                if ("string" == typeof n[t]) return t;
                t = t.charAt(0).toUpperCase() + t.slice(1);
                for (var e, o = 0, r = i.length; r > o; o++) if (((e = i[o] + t), "string" == typeof n[e])) return e;
            }
        }
        var i = "Webkit Moz ms Ms O".split(" "),
            n = document.documentElement.style;
        "function" == typeof define && define.amd
            ? define("get-style-property/get-style-property", [], function () {
                  return e;
              })
            : "object" == typeof exports
            ? (module.exports = e)
            : (t.getStyleProperty = e);
    })(window),
    (function (t, e) {
        function i(t) {
            var e = parseFloat(t),
                i = -1 === t.indexOf("%") && !isNaN(e);
            return i && e;
        }
        function n() {}
        function o() {
            for (var t = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, e = 0, i = a.length; i > e; e++) {
                var n = a[e];
                t[n] = 0;
            }
            return t;
        }
        function r(e) {
            function n() {
                if (!c) {
                    c = !0;
                    var n = t.getComputedStyle;
                    if (
                        ((d = (function () {
                            var t = n
                                ? function (t) {
                                      return n(t, null);
                                  }
                                : function (t) {
                                      return t.currentStyle;
                                  };
                            return function e(i) {
                                var n = t(i);
                                return n || s("Style returned " + n + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), n;
                            };
                        })()),
                        (u = e("boxSizing")))
                    ) {
                        var o = document.createElement("div");
                        (o.style.width = "200px"), (o.style.padding = "1px 2px 3px 4px"), (o.style.borderStyle = "solid"), (o.style.borderWidth = "1px 2px 3px 4px"), (o.style[u] = "border-box");
                        var r = document.body || document.documentElement;
                        r.appendChild(o);
                        var a = d(o);
                        (p = 200 === i(a.width)), r.removeChild(o);
                    }
                }
            }
            function r(t) {
                if ((n(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType)) {
                    var e = d(t);
                    if ("none" === e.display) return o();
                    var r = {};
                    (r.width = t.offsetWidth), (r.height = t.offsetHeight);
                    for (var s = (r.isBorderBox = !(!u || !e[u] || "border-box" !== e[u])), c = 0, f = a.length; f > c; c++) {
                        var h = a[c],
                            m = e[h];
                        m = l(t, m);
                        var g = parseFloat(m);
                        r[h] = isNaN(g) ? 0 : g;
                    }
                    var v = r.paddingLeft + r.paddingRight,
                        y = r.paddingTop + r.paddingBottom,
                        b = r.marginLeft + r.marginRight,
                        w = r.marginTop + r.marginBottom,
                        x = r.borderLeftWidth + r.borderRightWidth,
                        k = r.borderTopWidth + r.borderBottomWidth,
                        T = s && p,
                        C = i(e.width);
                    C !== !1 && (r.width = C + (T ? 0 : v + x));
                    var S = i(e.height);
                    return S !== !1 && (r.height = S + (T ? 0 : y + k)), (r.innerWidth = r.width - (v + x)), (r.innerHeight = r.height - (y + k)), (r.outerWidth = r.width + b), (r.outerHeight = r.height + w), r;
                }
            }
            function l(e, i) {
                if (t.getComputedStyle || -1 === i.indexOf("%")) return i;
                var n = e.style,
                    o = n.left,
                    r = e.runtimeStyle,
                    s = r && r.left;
                return s && (r.left = e.currentStyle.left), (n.left = i), (i = n.pixelLeft), (n.left = o), s && (r.left = s), i;
            }
            var c = !1,
                d,
                u,
                p;
            return r;
        }
        var s =
                "undefined" == typeof console
                    ? n
                    : function (t) {
                          console.error(t);
                      },
            a = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
        "function" == typeof define && define.amd
            ? define("get-size/get-size", ["get-style-property/get-style-property"], r)
            : "object" == typeof exports
            ? (module.exports = r(require("desandro-get-style-property")))
            : (t.getSize = r(t.getStyleProperty));
    })(window),
    (function (t) {
        function e(t, e) {
            return t[r](e);
        }
        function i(t) {
            if (!t.parentNode) {
                var e = document.createDocumentFragment();
                e.appendChild(t);
            }
        }
        function n(t, e) {
            i(t);
            for (var n = t.parentNode.querySelectorAll(e), o = 0, r = n.length; r > o; o++) if (n[o] === t) return !0;
            return !1;
        }
        function o(t, n) {
            return i(t), e(t, n);
        }
        var r = (function () {
                if (t.matchesSelector) return "matchesSelector";
                for (var e = ["webkit", "moz", "ms", "o"], i = 0, n = e.length; n > i; i++) {
                    var o = e[i],
                        r = o + "MatchesSelector";
                    if (t[r]) return r;
                }
            })(),
            s;
        if (r) {
            var a = document.createElement("div"),
                l = e(a, "div");
            s = l ? e : o;
        } else s = n;
        "function" == typeof define && define.amd
            ? define("matches-selector/matches-selector", [], function () {
                  return s;
              })
            : "object" == typeof exports
            ? (module.exports = s)
            : (window.matchesSelector = s);
    })(Element.prototype),
    (function (t) {
        function e(t, e) {
            for (var i in e) t[i] = e[i];
            return t;
        }
        function i(t) {
            for (var e in t) return !1;
            return (e = null), !0;
        }
        function n(t) {
            return t.replace(/([A-Z])/g, function (t) {
                return "-" + t.toLowerCase();
            });
        }
        function o(t, o, r) {
            function a(t, e) {
                t && ((this.element = t), (this.layout = e), (this.position = { x: 0, y: 0 }), this._create());
            }
            var l = r("transition"),
                c = r("transform"),
                d = l && c,
                u = !!r("perspective"),
                p = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "otransitionend", transition: "transitionend" }[l],
                f = ["transform", "transition", "transitionDuration", "transitionProperty"],
                h = (function () {
                    for (var t = {}, e = 0, i = f.length; i > e; e++) {
                        var n = f[e],
                            o = r(n);
                        o && o !== n && (t[n] = o);
                    }
                    return t;
                })();
            e(a.prototype, t.prototype),
                (a.prototype._create = function () {
                    (this._transn = { ingProperties: {}, clean: {}, onEnd: {} }), this.css({ position: "absolute" });
                }),
                (a.prototype.handleEvent = function (t) {
                    var e = "on" + t.type;
                    this[e] && this[e](t);
                }),
                (a.prototype.getSize = function () {
                    this.size = o(this.element);
                }),
                (a.prototype.css = function (t) {
                    var e = this.element.style;
                    for (var i in t) {
                        var n = h[i] || i;
                        e[n] = t[i];
                    }
                }),
                (a.prototype.getPosition = function () {
                    var t = s(this.element),
                        e = this.layout.options,
                        i = e.isOriginLeft,
                        n = e.isOriginTop,
                        o = parseInt(t[i ? "left" : "right"], 10),
                        r = parseInt(t[n ? "top" : "bottom"], 10);
                    (o = isNaN(o) ? 0 : o), (r = isNaN(r) ? 0 : r);
                    var a = this.layout.size;
                    (o -= i ? a.paddingLeft : a.paddingRight), (r -= n ? a.paddingTop : a.paddingBottom), (this.position.x = o), (this.position.y = r);
                }),
                (a.prototype.layoutPosition = function () {
                    var t = this.layout.size,
                        e = this.layout.options,
                        i = {};
                    e.isOriginLeft ? ((i.left = this.position.x + t.paddingLeft + "px"), (i.right = "")) : ((i.right = this.position.x + t.paddingRight + "px"), (i.left = "")),
                        e.isOriginTop ? ((i.top = this.position.y + t.paddingTop + "px"), (i.bottom = "")) : ((i.bottom = this.position.y + t.paddingBottom + "px"), (i.top = "")),
                        this.css(i),
                        this.emitEvent("layout", [this]);
                });
            var m = u
                ? function (t, e) {
                      return "translate3d(" + t + "px, " + e + "px, 0)";
                  }
                : function (t, e) {
                      return "translate(" + t + "px, " + e + "px)";
                  };
            (a.prototype._transitionTo = function (t, e) {
                this.getPosition();
                var i = this.position.x,
                    n = this.position.y,
                    o = parseInt(t, 10),
                    r = parseInt(e, 10),
                    s = o === this.position.x && r === this.position.y;
                if ((this.setPosition(t, e), s && !this.isTransitioning)) return void this.layoutPosition();
                var a = t - i,
                    l = e - n,
                    c = {},
                    d = this.layout.options;
                (a = d.isOriginLeft ? a : -a), (l = d.isOriginTop ? l : -l), (c.transform = m(a, l)), this.transition({ to: c, onTransitionEnd: { transform: this.layoutPosition }, isCleaning: !0 });
            }),
                (a.prototype.goTo = function (t, e) {
                    this.setPosition(t, e), this.layoutPosition();
                }),
                (a.prototype.moveTo = d ? a.prototype._transitionTo : a.prototype.goTo),
                (a.prototype.setPosition = function (t, e) {
                    (this.position.x = parseInt(t, 10)), (this.position.y = parseInt(e, 10));
                }),
                (a.prototype._nonTransition = function (t) {
                    this.css(t.to), t.isCleaning && this._removeStyles(t.to);
                    for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this);
                }),
                (a.prototype._transition = function (t) {
                    if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
                    var e = this._transn;
                    for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
                    for (i in t.to) (e.ingProperties[i] = !0), t.isCleaning && (e.clean[i] = !0);
                    if (t.from) {
                        this.css(t.from);
                        var n = this.element.offsetHeight;
                        n = null;
                    }
                    this.enableTransition(t.to), this.css(t.to), (this.isTransitioning = !0);
                });
            var g = c && n(c) + ",opacity";
            (a.prototype.enableTransition = function () {
                this.isTransitioning || (this.css({ transitionProperty: g, transitionDuration: this.layout.options.transitionDuration }), this.element.addEventListener(p, this, !1));
            }),
                (a.prototype.transition = a.prototype[l ? "_transition" : "_nonTransition"]),
                (a.prototype.onwebkitTransitionEnd = function (t) {
                    this.ontransitionend(t);
                }),
                (a.prototype.onotransitionend = function (t) {
                    this.ontransitionend(t);
                });
            var v = { "-webkit-transform": "transform", "-moz-transform": "transform", "-o-transform": "transform" };
            (a.prototype.ontransitionend = function (t) {
                if (t.target === this.element) {
                    var e = this._transn,
                        n = v[t.propertyName] || t.propertyName;
                    if ((delete e.ingProperties[n], i(e.ingProperties) && this.disableTransition(), n in e.clean && ((this.element.style[t.propertyName] = ""), delete e.clean[n]), n in e.onEnd)) {
                        var o = e.onEnd[n];
                        o.call(this), delete e.onEnd[n];
                    }
                    this.emitEvent("transitionEnd", [this]);
                }
            }),
                (a.prototype.disableTransition = function () {
                    this.removeTransitionStyles(), this.element.removeEventListener(p, this, !1), (this.isTransitioning = !1);
                }),
                (a.prototype._removeStyles = function (t) {
                    var e = {};
                    for (var i in t) e[i] = "";
                    this.css(e);
                });
            var y = { transitionProperty: "", transitionDuration: "" };
            return (
                (a.prototype.removeTransitionStyles = function () {
                    this.css(y);
                }),
                (a.prototype.removeElem = function () {
                    this.element.parentNode.removeChild(this.element), this.emitEvent("remove", [this]);
                }),
                (a.prototype.remove = function () {
                    if (!l || !parseFloat(this.layout.options.transitionDuration)) return void this.removeElem();
                    var t = this;
                    this.on("transitionEnd", function () {
                        return t.removeElem(), !0;
                    }),
                        this.hide();
                }),
                (a.prototype.reveal = function () {
                    delete this.isHidden, this.css({ display: "" });
                    var t = this.layout.options;
                    this.transition({ from: t.hiddenStyle, to: t.visibleStyle, isCleaning: !0 });
                }),
                (a.prototype.hide = function () {
                    (this.isHidden = !0), this.css({ display: "" });
                    var t = this.layout.options;
                    this.transition({
                        from: t.visibleStyle,
                        to: t.hiddenStyle,
                        isCleaning: !0,
                        onTransitionEnd: {
                            opacity: function () {
                                this.isHidden && this.css({ display: "none" });
                            },
                        },
                    });
                }),
                (a.prototype.destroy = function () {
                    this.css({ position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: "" });
                }),
                a
            );
        }
        var r = t.getComputedStyle,
            s = r
                ? function (t) {
                      return r(t, null);
                  }
                : function (t) {
                      return t.currentStyle;
                  };
        "function" == typeof define && define.amd
            ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property"], o)
            : "object" == typeof exports
            ? (module.exports = o(require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property")))
            : ((t.Outlayer = {}), (t.Outlayer.Item = o(t.EventEmitter, t.getSize, t.getStyleProperty)));
    })(window),
    (function (t) {
        function e(t, e) {
            for (var i in e) t[i] = e[i];
            return t;
        }
        function i(t) {
            return "[object Array]" === u.call(t);
        }
        function n(t) {
            var e = [];
            if (i(t)) e = t;
            else if (t && "number" == typeof t.length) for (var n = 0, o = t.length; o > n; n++) e.push(t[n]);
            else e.push(t);
            return e;
        }
        function o(t, e) {
            var i = f(e, t);
            -1 !== i && e.splice(i, 1);
        }
        function r(t) {
            return t
                .replace(/(.)([A-Z])/g, function (t, e, i) {
                    return e + "-" + i;
                })
                .toLowerCase();
        }
        function s(i, s, u, f, h, m) {
            function g(t, i) {
                if (("string" == typeof t && (t = a.querySelector(t)), !t || !p(t))) return void (l && l.error("Bad " + this.constructor.namespace + " element: " + t));
                (this.element = t), (this.options = e({}, this.constructor.defaults)), this.option(i);
                var n = ++v;
                (this.element.outlayerGUID = n), (y[n] = this), this._create(), this.options.isInitLayout && this.layout();
            }
            var v = 0,
                y = {};
            return (
                (g.namespace = "outlayer"),
                (g.Item = m),
                (g.defaults = {
                    containerStyle: { position: "relative" },
                    isInitLayout: !0,
                    isOriginLeft: !0,
                    isOriginTop: !0,
                    isResizeBound: !0,
                    isResizingContainer: !0,
                    transitionDuration: "0.4s",
                    hiddenStyle: { opacity: 0, transform: "scale(0.001)" },
                    visibleStyle: { opacity: 1, transform: "scale(1)" },
                }),
                e(g.prototype, u.prototype),
                (g.prototype.option = function (t) {
                    e(this.options, t);
                }),
                (g.prototype._create = function () {
                    this.reloadItems(), (this.stamps = []), this.stamp(this.options.stamp), e(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize();
                }),
                (g.prototype.reloadItems = function () {
                    this.items = this._itemize(this.element.children);
                }),
                (g.prototype._itemize = function (t) {
                    for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0, r = e.length; r > o; o++) {
                        var s = e[o],
                            a = new i(s, this);
                        n.push(a);
                    }
                    return n;
                }),
                (g.prototype._filterFindItemElements = function (t) {
                    t = n(t);
                    for (var e = this.options.itemSelector, i = [], o = 0, r = t.length; r > o; o++) {
                        var s = t[o];
                        if (p(s))
                            if (e) {
                                h(s, e) && i.push(s);
                                for (var a = s.querySelectorAll(e), l = 0, c = a.length; c > l; l++) i.push(a[l]);
                            } else i.push(s);
                    }
                    return i;
                }),
                (g.prototype.getItemElements = function () {
                    for (var t = [], e = 0, i = this.items.length; i > e; e++) t.push(this.items[e].element);
                    return t;
                }),
                (g.prototype.layout = function () {
                    this._resetLayout(), this._manageStamps();
                    var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
                    this.layoutItems(this.items, t), (this._isLayoutInited = !0);
                }),
                (g.prototype._init = g.prototype.layout),
                (g.prototype._resetLayout = function () {
                    this.getSize();
                }),
                (g.prototype.getSize = function () {
                    this.size = f(this.element);
                }),
                (g.prototype._getMeasurement = function (t, e) {
                    var i = this.options[t],
                        n;
                    i ? ("string" == typeof i ? (n = this.element.querySelector(i)) : p(i) && (n = i), (this[t] = n ? f(n)[e] : i)) : (this[t] = 0);
                }),
                (g.prototype.layoutItems = function (t, e) {
                    (t = this._getItemsForLayout(t)), this._layoutItems(t, e), this._postLayout();
                }),
                (g.prototype._getItemsForLayout = function (t) {
                    for (var e = [], i = 0, n = t.length; n > i; i++) {
                        var o = t[i];
                        o.isIgnored || e.push(o);
                    }
                    return e;
                }),
                (g.prototype._layoutItems = function (t, e) {
                    function i() {
                        n.emitEvent("layoutComplete", [n, t]);
                    }
                    var n = this;
                    if (!t || !t.length) return void i();
                    this._itemsOn(t, "layout", i);
                    for (var o = [], r = 0, s = t.length; s > r; r++) {
                        var a = t[r],
                            l = this._getItemLayoutPosition(a);
                        (l.item = a), (l.isInstant = e || a.isLayoutInstant), o.push(l);
                    }
                    this._processLayoutQueue(o);
                }),
                (g.prototype._getItemLayoutPosition = function () {
                    return { x: 0, y: 0 };
                }),
                (g.prototype._processLayoutQueue = function (t) {
                    for (var e = 0, i = t.length; i > e; e++) {
                        var n = t[e];
                        this._positionItem(n.item, n.x, n.y, n.isInstant);
                    }
                }),
                (g.prototype._positionItem = function (t, e, i, n) {
                    n ? t.goTo(e, i) : t.moveTo(e, i);
                }),
                (g.prototype._postLayout = function () {
                    this.resizeContainer();
                }),
                (g.prototype.resizeContainer = function () {
                    if (this.options.isResizingContainer) {
                        var t = this._getContainerSize();
                        t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1));
                    }
                }),
                (g.prototype._getContainerSize = d),
                (g.prototype._setContainerMeasure = function (t, e) {
                    if (void 0 !== t) {
                        var i = this.size;
                        i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth),
                            (t = Math.max(t, 0)),
                            (this.element.style[e ? "width" : "height"] = t + "px");
                    }
                }),
                (g.prototype._itemsOn = function (t, e, i) {
                    function n() {
                        return o++, o === r && i.call(s), !0;
                    }
                    for (var o = 0, r = t.length, s = this, a = 0, l = t.length; l > a; a++) {
                        var c = t[a];
                        c.on(e, n);
                    }
                }),
                (g.prototype.ignore = function (t) {
                    var e = this.getItem(t);
                    e && (e.isIgnored = !0);
                }),
                (g.prototype.unignore = function (t) {
                    var e = this.getItem(t);
                    e && delete e.isIgnored;
                }),
                (g.prototype.stamp = function (t) {
                    if ((t = this._find(t))) {
                        this.stamps = this.stamps.concat(t);
                        for (var e = 0, i = t.length; i > e; e++) {
                            var n = t[e];
                            this.ignore(n);
                        }
                    }
                }),
                (g.prototype.unstamp = function (t) {
                    if ((t = this._find(t)))
                        for (var e = 0, i = t.length; i > e; e++) {
                            var n = t[e];
                            o(n, this.stamps), this.unignore(n);
                        }
                }),
                (g.prototype._find = function (t) {
                    return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), (t = n(t))) : void 0;
                }),
                (g.prototype._manageStamps = function () {
                    if (this.stamps && this.stamps.length) {
                        this._getBoundingRect();
                        for (var t = 0, e = this.stamps.length; e > t; t++) {
                            var i = this.stamps[t];
                            this._manageStamp(i);
                        }
                    }
                }),
                (g.prototype._getBoundingRect = function () {
                    var t = this.element.getBoundingClientRect(),
                        e = this.size;
                    this._boundingRect = {
                        left: t.left + e.paddingLeft + e.borderLeftWidth,
                        top: t.top + e.paddingTop + e.borderTopWidth,
                        right: t.right - (e.paddingRight + e.borderRightWidth),
                        bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth),
                    };
                }),
                (g.prototype._manageStamp = d),
                (g.prototype._getElementOffset = function (t) {
                    var e = t.getBoundingClientRect(),
                        i = this._boundingRect,
                        n = f(t),
                        o = { left: e.left - i.left - n.marginLeft, top: e.top - i.top - n.marginTop, right: i.right - e.right - n.marginRight, bottom: i.bottom - e.bottom - n.marginBottom };
                    return o;
                }),
                (g.prototype.handleEvent = function (t) {
                    var e = "on" + t.type;
                    this[e] && this[e](t);
                }),
                (g.prototype.bindResize = function () {
                    this.isResizeBound || (i.bind(t, "resize", this), (this.isResizeBound = !0));
                }),
                (g.prototype.unbindResize = function () {
                    this.isResizeBound && i.unbind(t, "resize", this), (this.isResizeBound = !1);
                }),
                (g.prototype.onresize = function () {
                    function t() {
                        e.resize(), delete e.resizeTimeout;
                    }
                    this.resizeTimeout && clearTimeout(this.resizeTimeout);
                    var e = this;
                    this.resizeTimeout = setTimeout(t, 100);
                }),
                (g.prototype.resize = function () {
                    this.isResizeBound && this.needsResizeLayout() && this.layout();
                }),
                (g.prototype.needsResizeLayout = function () {
                    var t = f(this.element),
                        e = this.size && t;
                    return e && t.innerWidth !== this.size.innerWidth;
                }),
                (g.prototype.addItems = function (t) {
                    var e = this._itemize(t);
                    return e.length && (this.items = this.items.concat(e)), e;
                }),
                (g.prototype.appended = function (t) {
                    var e = this.addItems(t);
                    e.length && (this.layoutItems(e, !0), this.reveal(e));
                }),
                (g.prototype.prepended = function (t) {
                    var e = this._itemize(t);
                    if (e.length) {
                        var i = this.items.slice(0);
                        (this.items = e.concat(i)), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i);
                    }
                }),
                (g.prototype.reveal = function (t) {
                    var e = t && t.length;
                    if (e)
                        for (var i = 0; e > i; i++) {
                            var n = t[i];
                            n.reveal();
                        }
                }),
                (g.prototype.hide = function (t) {
                    var e = t && t.length;
                    if (e)
                        for (var i = 0; e > i; i++) {
                            var n = t[i];
                            n.hide();
                        }
                }),
                (g.prototype.getItem = function (t) {
                    for (var e = 0, i = this.items.length; i > e; e++) {
                        var n = this.items[e];
                        if (n.element === t) return n;
                    }
                }),
                (g.prototype.getItems = function (t) {
                    if (t && t.length) {
                        for (var e = [], i = 0, n = t.length; n > i; i++) {
                            var o = t[i],
                                r = this.getItem(o);
                            r && e.push(r);
                        }
                        return e;
                    }
                }),
                (g.prototype.remove = function (t) {
                    t = n(t);
                    var e = this.getItems(t);
                    if (e && e.length) {
                        this._itemsOn(e, "remove", function () {
                            this.emitEvent("removeComplete", [this, e]);
                        });
                        for (var i = 0, r = e.length; r > i; i++) {
                            var s = e[i];
                            s.remove(), o(s, this.items);
                        }
                    }
                }),
                (g.prototype.destroy = function () {
                    var t = this.element.style;
                    (t.height = ""), (t.position = ""), (t.width = "");
                    for (var e = 0, i = this.items.length; i > e; e++) {
                        var n = this.items[e];
                        n.destroy();
                    }
                    this.unbindResize();
                    var o = this.element.outlayerGUID;
                    delete y[o], delete this.element.outlayerGUID, c && c.removeData(this.element, this.constructor.namespace);
                }),
                (g.data = function (t) {
                    var e = t && t.outlayerGUID;
                    return e && y[e];
                }),
                (g.create = function (t, i) {
                    function n() {
                        g.apply(this, arguments);
                    }
                    return (
                        Object.create ? (n.prototype = Object.create(g.prototype)) : e(n.prototype, g.prototype),
                        (n.prototype.constructor = n),
                        (n.defaults = e({}, g.defaults)),
                        e(n.defaults, i),
                        (n.prototype.settings = {}),
                        (n.namespace = t),
                        (n.data = g.data),
                        (n.Item = function o() {
                            m.apply(this, arguments);
                        }),
                        (n.Item.prototype = new m()),
                        s(function () {
                            for (var e = r(t), i = a.querySelectorAll(".js-" + e), o = "data-" + e + "-options", s = 0, d = i.length; d > s; s++) {
                                var u = i[s],
                                    p = u.getAttribute(o),
                                    f;
                                try {
                                    f = p && JSON.parse(p);
                                } catch (h) {
                                    l && l.error("Error parsing " + o + " on " + u.nodeName.toLowerCase() + (u.id ? "#" + u.id : "") + ": " + h);
                                    continue;
                                }
                                var m = new n(u, f);
                                c && c.data(u, t, m);
                            }
                        }),
                        c && c.bridget && c.bridget(t, n),
                        n
                    );
                }),
                (g.Item = m),
                g
            );
        }
        var a = t.document,
            l = t.console,
            c = t.jQuery,
            d = function () {},
            u = Object.prototype.toString,
            p =
                "function" == typeof HTMLElement || "object" == typeof HTMLElement
                    ? function h(t) {
                          return t instanceof HTMLElement;
                      }
                    : function m(t) {
                          return t && "object" == typeof t && 1 === t.nodeType && "string" == typeof t.nodeName;
                      },
            f = Array.prototype.indexOf
                ? function (t, e) {
                      return t.indexOf(e);
                  }
                : function (t, e) {
                      for (var i = 0, n = t.length; n > i; i++) if (t[i] === e) return i;
                      return -1;
                  };
        "function" == typeof define && define.amd
            ? define("outlayer/outlayer", ["eventie/eventie", "doc-ready/doc-ready", "eventEmitter/EventEmitter", "get-size/get-size", "matches-selector/matches-selector", "./item"], s)
            : "object" == typeof exports
            ? (module.exports = s(require("eventie"), require("doc-ready"), require("wolfy87-eventemitter"), require("get-size"), require("desandro-matches-selector"), require("./item")))
            : (t.Outlayer = s(t.eventie, t.docReady, t.EventEmitter, t.getSize, t.matchesSelector, t.Outlayer.Item));
    })(window),
    (function (t) {
        function e(t) {
            function e() {
                t.Item.apply(this, arguments);
            }
            (e.prototype = new t.Item()),
                (e.prototype._create = function () {
                    (this.id = this.layout.itemGUID++), t.Item.prototype._create.call(this), (this.sortData = {});
                }),
                (e.prototype.updateSortData = function () {
                    if (!this.isIgnored) {
                        (this.sortData.id = this.id), (this.sortData["original-order"] = this.id), (this.sortData.random = Math.random());
                        var t = this.layout.options.getSortData,
                            e = this.layout._sorters;
                        for (var i in t) {
                            var n = e[i];
                            this.sortData[i] = n(this.element, this);
                        }
                    }
                });
            var i = e.prototype.destroy;
            return (
                (e.prototype.destroy = function () {
                    i.apply(this, arguments), this.css({ display: "" });
                }),
                e
            );
        }
        "function" == typeof define && define.amd
            ? define("isotope/js/item", ["outlayer/outlayer"], e)
            : "object" == typeof exports
            ? (module.exports = e(require("outlayer")))
            : ((t.Isotope = t.Isotope || {}), (t.Isotope.Item = e(t.Outlayer)));
    })(window),
    (function (t) {
        function e(t, e) {
            function i(t) {
                (this.isotope = t), t && ((this.options = t.options[this.namespace]), (this.element = t.element), (this.items = t.filteredItems), (this.size = t.size));
            }
            return (
                (function () {
                    function t(t) {
                        return function () {
                            return e.prototype[t].apply(this.isotope, arguments);
                        };
                    }
                    for (var n = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], o = 0, r = n.length; r > o; o++) {
                        var s = n[o];
                        i.prototype[s] = t(s);
                    }
                })(),
                (i.prototype.needsVerticalResizeLayout = function () {
                    var e = t(this.isotope.element),
                        i = this.isotope.size && e;
                    return i && e.innerHeight !== this.isotope.size.innerHeight;
                }),
                (i.prototype._getMeasurement = function () {
                    this.isotope._getMeasurement.apply(this, arguments);
                }),
                (i.prototype.getColumnWidth = function () {
                    this.getSegmentSize("column", "Width");
                }),
                (i.prototype.getRowHeight = function () {
                    this.getSegmentSize("row", "Height");
                }),
                (i.prototype.getSegmentSize = function (t, e) {
                    var i = t + e,
                        n = "outer" + e;
                    if ((this._getMeasurement(i, n), !this[i])) {
                        var o = this.getFirstItemSize();
                        this[i] = (o && o[n]) || this.isotope.size["inner" + e];
                    }
                }),
                (i.prototype.getFirstItemSize = function () {
                    var e = this.isotope.filteredItems[0];
                    return e && e.element && t(e.element);
                }),
                (i.prototype.layout = function () {
                    this.isotope.layout.apply(this.isotope, arguments);
                }),
                (i.prototype.getSize = function () {
                    this.isotope.getSize(), (this.size = this.isotope.size);
                }),
                (i.modes = {}),
                (i.create = function (t, e) {
                    function n() {
                        i.apply(this, arguments);
                    }
                    return (n.prototype = new i()), e && (n.options = e), (n.prototype.namespace = t), (i.modes[t] = n), n;
                }),
                i
            );
        }
        "function" == typeof define && define.amd
            ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e)
            : "object" == typeof exports
            ? (module.exports = e(require("get-size"), require("outlayer")))
            : ((t.Isotope = t.Isotope || {}), (t.Isotope.LayoutMode = e(t.getSize, t.Outlayer)));
    })(window),
    (function (t) {
        function e(t, e) {
            var n = t.create("masonry");
            return (
                (n.prototype._resetLayout = function () {
                    this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
                    var t = this.cols;
                    for (this.colYs = []; t--; ) this.colYs.push(0);
                    this.maxY = 0;
                }),
                (n.prototype.measureColumns = function () {
                    if ((this.getContainerWidth(), !this.columnWidth)) {
                        var t = this.items[0],
                            i = t && t.element;
                        this.columnWidth = (i && e(i).outerWidth) || this.containerWidth;
                    }
                    (this.columnWidth += this.gutter), (this.cols = Math.floor((this.containerWidth + this.gutter) / this.columnWidth)), (this.cols = Math.max(this.cols, 1));
                }),
                (n.prototype.getContainerWidth = function () {
                    var t = this.options.isFitWidth ? this.element.parentNode : this.element,
                        i = e(t);
                    this.containerWidth = i && i.innerWidth;
                }),
                (n.prototype._getItemLayoutPosition = function (t) {
                    t.getSize();
                    var e = t.size.outerWidth % this.columnWidth,
                        n = e && 1 > e ? "round" : "ceil",
                        o = Math[n](t.size.outerWidth / this.columnWidth);
                    o = Math.min(o, this.cols);
                    for (var r = this._getColGroup(o), s = Math.min.apply(Math, r), a = i(r, s), l = { x: this.columnWidth * a, y: s }, c = s + t.size.outerHeight, d = this.cols + 1 - r.length, u = 0; d > u; u++) this.colYs[a + u] = c;
                    return l;
                }),
                (n.prototype._getColGroup = function (t) {
                    if (2 > t) return this.colYs;
                    for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++) {
                        var o = this.colYs.slice(n, n + t);
                        e[n] = Math.max.apply(Math, o);
                    }
                    return e;
                }),
                (n.prototype._manageStamp = function (t) {
                    var i = e(t),
                        n = this._getElementOffset(t),
                        o = this.options.isOriginLeft ? n.left : n.right,
                        r = o + i.outerWidth,
                        s = Math.floor(o / this.columnWidth);
                    s = Math.max(0, s);
                    var a = Math.floor(r / this.columnWidth);
                    (a -= r % this.columnWidth ? 0 : 1), (a = Math.min(this.cols - 1, a));
                    for (var l = (this.options.isOriginTop ? n.top : n.bottom) + i.outerHeight, c = s; a >= c; c++) this.colYs[c] = Math.max(l, this.colYs[c]);
                }),
                (n.prototype._getContainerSize = function () {
                    this.maxY = Math.max.apply(Math, this.colYs);
                    var t = { height: this.maxY };
                    return this.options.isFitWidth && (t.width = this._getContainerFitWidth()), t;
                }),
                (n.prototype._getContainerFitWidth = function () {
                    for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; ) t++;
                    return (this.cols - t) * this.columnWidth - this.gutter;
                }),
                (n.prototype.needsResizeLayout = function () {
                    var t = this.containerWidth;
                    return this.getContainerWidth(), t !== this.containerWidth;
                }),
                n
            );
        }
        var i = Array.prototype.indexOf
            ? function (t, e) {
                  return t.indexOf(e);
              }
            : function (t, e) {
                  for (var i = 0, n = t.length; n > i; i++) {
                      var o = t[i];
                      if (o === e) return i;
                  }
                  return -1;
              };
        "function" == typeof define && define.amd
            ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], e)
            : "object" == typeof exports
            ? (module.exports = e(require("outlayer"), require("get-size")))
            : (t.Masonry = e(t.Outlayer, t.getSize));
    })(window),
    (function (t) {
        function e(t, e) {
            for (var i in e) t[i] = e[i];
            return t;
        }
        function i(t, i) {
            var n = t.create("masonry"),
                o = n.prototype._getElementOffset,
                r = n.prototype.layout,
                s = n.prototype._getMeasurement;
            e(n.prototype, i.prototype), (n.prototype._getElementOffset = o), (n.prototype.layout = r), (n.prototype._getMeasurement = s);
            var a = n.prototype.measureColumns;
            n.prototype.measureColumns = function () {
                (this.items = this.isotope.filteredItems), a.call(this);
            };
            var l = n.prototype._manageStamp;
            return (
                (n.prototype._manageStamp = function () {
                    (this.options.isOriginLeft = this.isotope.options.isOriginLeft), (this.options.isOriginTop = this.isotope.options.isOriginTop), l.apply(this, arguments);
                }),
                n
            );
        }
        "function" == typeof define && define.amd
            ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], i)
            : "object" == typeof exports
            ? (module.exports = i(require("../layout-mode"), require("masonry-layout")))
            : i(t.Isotope.LayoutMode, t.Masonry);
    })(window),
    (function (t) {
        function e(t) {
            var e = t.create("fitRows");
            return (
                (e.prototype._resetLayout = function () {
                    (this.x = 0), (this.y = 0), (this.maxY = 0), this._getMeasurement("gutter", "outerWidth");
                }),
                (e.prototype._getItemLayoutPosition = function (t) {
                    t.getSize();
                    var e = t.size.outerWidth + this.gutter,
                        i = this.isotope.size.innerWidth + this.gutter;
                    0 !== this.x && e + this.x > i && ((this.x = 0), (this.y = this.maxY));
                    var n = { x: this.x, y: this.y };
                    return (this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight)), (this.x += e), n;
                }),
                (e.prototype._getContainerSize = function () {
                    return { height: this.maxY };
                }),
                e
            );
        }
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? (module.exports = e(require("../layout-mode"))) : e(t.Isotope.LayoutMode);
    })(window),
    (function (t) {
        function e(t) {
            var e = t.create("vertical", { horizontalAlignment: 0 });
            return (
                (e.prototype._resetLayout = function () {
                    this.y = 0;
                }),
                (e.prototype._getItemLayoutPosition = function (t) {
                    t.getSize();
                    var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
                        i = this.y;
                    return (this.y += t.size.outerHeight), { x: e, y: i };
                }),
                (e.prototype._getContainerSize = function () {
                    return { height: this.y };
                }),
                e
            );
        }
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof exports ? (module.exports = e(require("../layout-mode"))) : e(t.Isotope.LayoutMode);
    })(window),
    (function (t) {
        function e(t, e) {
            for (var i in e) t[i] = e[i];
            return t;
        }
        function i(t) {
            return "[object Array]" === d.call(t);
        }
        function n(t) {
            var e = [];
            if (i(t)) e = t;
            else if (t && "number" == typeof t.length) for (var n = 0, o = t.length; o > n; n++) e.push(t[n]);
            else e.push(t);
            return e;
        }
        function o(t, e) {
            var i = u(e, t);
            -1 !== i && e.splice(i, 1);
        }
        function r(t, i, r, l, d) {
            function u(t, e) {
                return function i(n, o) {
                    for (var r = 0, s = t.length; s > r; r++) {
                        var a = t[r],
                            l = n.sortData[a],
                            c = o.sortData[a];
                        if (l > c || c > l) {
                            var d = void 0 !== e[a] ? e[a] : e,
                                u = d ? 1 : -1;
                            return (l > c ? 1 : -1) * u;
                        }
                    }
                    return 0;
                };
            }
            var p = t.create("isotope", { layoutMode: "masonry", isJQueryFiltering: !0, sortAscending: !0 });
            (p.Item = l),
                (p.LayoutMode = d),
                (p.prototype._create = function () {
                    (this.itemGUID = 0), (this._sorters = {}), this._getSorters(), t.prototype._create.call(this), (this.modes = {}), (this.filteredItems = this.items), (this.sortHistory = ["original-order"]);
                    for (var e in d.modes) this._initLayoutMode(e);
                }),
                (p.prototype.reloadItems = function () {
                    (this.itemGUID = 0), t.prototype.reloadItems.call(this);
                }),
                (p.prototype._itemize = function () {
                    for (var e = t.prototype._itemize.apply(this, arguments), i = 0, n = e.length; n > i; i++) {
                        var o = e[i];
                        o.id = this.itemGUID++;
                    }
                    return this._updateItemsSortData(e), e;
                }),
                (p.prototype._initLayoutMode = function (t) {
                    var i = d.modes[t],
                        n = this.options[t] || {};
                    (this.options[t] = i.options ? e(i.options, n) : n), (this.modes[t] = new i(this));
                }),
                (p.prototype.layout = function () {
                    return !this._isLayoutInited && this.options.isInitLayout ? void this.arrange() : void this._layout();
                }),
                (p.prototype._layout = function () {
                    var t = this._getIsInstant();
                    this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), (this._isLayoutInited = !0);
                }),
                (p.prototype.arrange = function (t) {
                    this.option(t), this._getIsInstant(), (this.filteredItems = this._filter(this.items)), this._sort(), this._layout();
                }),
                (p.prototype._init = p.prototype.arrange),
                (p.prototype._getIsInstant = function () {
                    var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
                    return (this._isInstant = t), t;
                }),
                (p.prototype._filter = function (t) {
                    function e() {
                        u.reveal(o), u.hide(r);
                    }
                    var i = this.options.filter;
                    i = i || "*";
                    for (var n = [], o = [], r = [], s = this._getFilterTest(i), a = 0, l = t.length; l > a; a++) {
                        var c = t[a];
                        if (!c.isIgnored) {
                            var d = s(c);
                            d && n.push(c), d && c.isHidden ? o.push(c) : d || c.isHidden || r.push(c);
                        }
                    }
                    var u = this;
                    return this._isInstant ? this._noTransition(e) : e(), n;
                }),
                (p.prototype._getFilterTest = function (t) {
                    return s && this.options.isJQueryFiltering
                        ? function (e) {
                              return s(e.element).is(t);
                          }
                        : "function" == typeof t
                        ? function (e) {
                              return t(e.element);
                          }
                        : function (e) {
                              return r(e.element, t);
                          };
                }),
                (p.prototype.updateSortData = function (t) {
                    var e;
                    t ? ((t = n(t)), (e = this.getItems(t))) : (e = this.items), this._getSorters(), this._updateItemsSortData(e);
                }),
                (p.prototype._getSorters = function () {
                    var t = this.options.getSortData;
                    for (var e in t) {
                        var i = t[e];
                        this._sorters[e] = f(i);
                    }
                }),
                (p.prototype._updateItemsSortData = function (t) {
                    for (var e = t && t.length, i = 0; e && e > i; i++) {
                        var n = t[i];
                        n.updateSortData();
                    }
                });
            var f = (function () {
                function t(t) {
                    if ("string" != typeof t) return t;
                    var i = a(t).split(" "),
                        n = i[0],
                        o = n.match(/^\[(.+)\]$/),
                        r = o && o[1],
                        s = e(r, n),
                        l = p.sortDataParsers[i[1]];
                    return (t = l
                        ? function (t) {
                              return t && l(s(t));
                          }
                        : function (t) {
                              return t && s(t);
                          });
                }
                function e(t, e) {
                    var i;
                    return (i = t
                        ? function (e) {
                              return e.getAttribute(t);
                          }
                        : function (t) {
                              var i = t.querySelector(e);
                              return i && c(i);
                          });
                }
                return t;
            })();
            (p.sortDataParsers = {
                parseInt: function (t) {
                    return parseInt(t, 10);
                },
                parseFloat: function (t) {
                    return parseFloat(t);
                },
            }),
                (p.prototype._sort = function () {
                    var t = this.options.sortBy;
                    if (t) {
                        var e = [].concat.apply(t, this.sortHistory),
                            i = u(e, this.options.sortAscending);
                        this.filteredItems.sort(i), t !== this.sortHistory[0] && this.sortHistory.unshift(t);
                    }
                }),
                (p.prototype._mode = function () {
                    var t = this.options.layoutMode,
                        e = this.modes[t];
                    if (!e) throw new Error("No layout mode: " + t);
                    return (e.options = this.options[t]), e;
                }),
                (p.prototype._resetLayout = function () {
                    t.prototype._resetLayout.call(this), this._mode()._resetLayout();
                }),
                (p.prototype._getItemLayoutPosition = function (t) {
                    return this._mode()._getItemLayoutPosition(t);
                }),
                (p.prototype._manageStamp = function (t) {
                    this._mode()._manageStamp(t);
                }),
                (p.prototype._getContainerSize = function () {
                    return this._mode()._getContainerSize();
                }),
                (p.prototype.needsResizeLayout = function () {
                    return this._mode().needsResizeLayout();
                }),
                (p.prototype.appended = function (t) {
                    var e = this.addItems(t);
                    if (e.length) {
                        var i = this._filterRevealAdded(e);
                        this.filteredItems = this.filteredItems.concat(i);
                    }
                }),
                (p.prototype.prepended = function (t) {
                    var e = this._itemize(t);
                    if (e.length) {
                        var i = this.items.slice(0);
                        (this.items = e.concat(i)), this._resetLayout(), this._manageStamps();
                        var n = this._filterRevealAdded(e);
                        this.layoutItems(i), (this.filteredItems = n.concat(this.filteredItems));
                    }
                }),
                (p.prototype._filterRevealAdded = function (t) {
                    var e = this._noTransition(function () {
                        return this._filter(t);
                    });
                    return this.layoutItems(e, !0), this.reveal(e), t;
                }),
                (p.prototype.insert = function (t) {
                    var e = this.addItems(t);
                    if (e.length) {
                        var i,
                            n,
                            o = e.length;
                        for (i = 0; o > i; i++) (n = e[i]), this.element.appendChild(n.element);
                        var r = this._filter(e);
                        for (
                            this._noTransition(function () {
                                this.hide(r);
                            }),
                                i = 0;
                            o > i;
                            i++
                        )
                            e[i].isLayoutInstant = !0;
                        for (this.arrange(), i = 0; o > i; i++) delete e[i].isLayoutInstant;
                        this.reveal(r);
                    }
                });
            var h = p.prototype.remove;
            return (
                (p.prototype.remove = function (t) {
                    t = n(t);
                    var e = this.getItems(t);
                    if ((h.call(this, t), e && e.length))
                        for (var i = 0, r = e.length; r > i; i++) {
                            var s = e[i];
                            o(s, this.filteredItems);
                        }
                }),
                (p.prototype.shuffle = function () {
                    for (var t = 0, e = this.items.length; e > t; t++) {
                        var i = this.items[t];
                        i.sortData.random = Math.random();
                    }
                    (this.options.sortBy = "random"), this._sort(), this._layout();
                }),
                (p.prototype._noTransition = function (t) {
                    var e = this.options.transitionDuration;
                    this.options.transitionDuration = 0;
                    var i = t.call(this);
                    return (this.options.transitionDuration = e), i;
                }),
                (p.prototype.getFilteredItemElements = function () {
                    for (var t = [], e = 0, i = this.filteredItems.length; i > e; e++) t.push(this.filteredItems[e].element);
                    return t;
                }),
                p
            );
        }
        var s = t.jQuery,
            a = String.prototype.trim
                ? function (t) {
                      return t.trim();
                  }
                : function (t) {
                      return t.replace(/^\s+|\s+$/g, "");
                  },
            l = document.documentElement,
            c = l.textContent
                ? function (t) {
                      return t.textContent;
                  }
                : function (t) {
                      return t.innerText;
                  },
            d = Object.prototype.toString,
            u = Array.prototype.indexOf
                ? function (t, e) {
                      return t.indexOf(e);
                  }
                : function (t, e) {
                      for (var i = 0, n = t.length; n > i; i++) if (t[i] === e) return i;
                      return -1;
                  };
        "function" == typeof define && define.amd
            ? define([
                  "outlayer/outlayer",
                  "get-size/get-size",
                  "matches-selector/matches-selector",
                  "isotope/js/item",
                  "isotope/js/layout-mode",
                  "isotope/js/layout-modes/masonry",
                  "isotope/js/layout-modes/fit-rows",
                  "isotope/js/layout-modes/vertical",
              ], r)
            : "object" == typeof exports
            ? (module.exports = r(
                  require("outlayer"),
                  require("get-size"),
                  require("desandro-matches-selector"),
                  require("./item"),
                  require("./layout-mode"),
                  require("./layout-modes/masonry"),
                  require("./layout-modes/fit-rows"),
                  require("./layout-modes/vertical")
              ))
            : (t.Isotope = r(t.Outlayer, t.getSize, t.matchesSelector, t.Isotope.Item, t.Isotope.LayoutMode));
    })(window),
    (function (t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? (module.exports = t(require("jquery"))) : t(jQuery);
    })(function ($) {
        "use strict";
        var t = window.Slick || {};
        (t = (function () {
            function t(t, i) {
                var n = this,
                    o;
                (n.defaults = {
                    accessibility: !0,
                    adaptiveHeight: !1,
                    appendArrows: $(t),
                    appendDots: $(t),
                    arrows: !0,
                    asNavFor: null,
                    prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                    nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                    autoplay: !1,
                    autoplaySpeed: 3e3,
                    centerMode: !1,
                    centerPadding: "50px",
                    cssEase: "ease",
                    customPaging: function (t, e) {
                        return '<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">' + (e + 1) + "</button>";
                    },
                    dots: !1,
                    dotsClass: "slick-dots",
                    draggable: !0,
                    easing: "linear",
                    edgeFriction: 0.35,
                    fade: !1,
                    focusOnSelect: !1,
                    infinite: !0,
                    initialSlide: 0,
                    lazyLoad: "ondemand",
                    mobileFirst: !1,
                    pauseOnHover: !0,
                    pauseOnDotsHover: !1,
                    respondTo: "window",
                    responsive: null,
                    rows: 1,
                    rtl: !1,
                    slide: "",
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    swipe: !0,
                    swipeToSlide: !1,
                    touchMove: !0,
                    touchThreshold: 5,
                    useCSS: !0,
                    useTransform: !1,
                    variableWidth: !1,
                    vertical: !1,
                    verticalSwiping: !1,
                    waitForAnimate: !0,
                    zIndex: 1e3,
                }),
                    (n.initials = {
                        animating: !1,
                        dragging: !1,
                        autoPlayTimer: null,
                        currentDirection: 0,
                        currentLeft: null,
                        currentSlide: 0,
                        direction: 1,
                        $dots: null,
                        listWidth: null,
                        listHeight: null,
                        loadIndex: 0,
                        $nextArrow: null,
                        $prevArrow: null,
                        slideCount: null,
                        slideWidth: null,
                        $slideTrack: null,
                        $slides: null,
                        sliding: !1,
                        slideOffset: 0,
                        swipeLeft: null,
                        $list: null,
                        touchObject: {},
                        transformsEnabled: !1,
                        unslicked: !1,
                    }),
                    $.extend(n, n.initials),
                    (n.activeBreakpoint = null),
                    (n.animType = null),
                    (n.animProp = null),
                    (n.breakpoints = []),
                    (n.breakpointSettings = []),
                    (n.cssTransitions = !1),
                    (n.hidden = "hidden"),
                    (n.paused = !1),
                    (n.positionProp = null),
                    (n.respondTo = null),
                    (n.rowCount = 1),
                    (n.shouldClick = !0),
                    (n.$slider = $(t)),
                    (n.$slidesCache = null),
                    (n.transformType = null),
                    (n.transitionType = null),
                    (n.visibilityChange = "visibilitychange"),
                    (n.windowWidth = 0),
                    (n.windowTimer = null),
                    (o = $(t).data("slick") || {}),
                    (n.options = $.extend({}, n.defaults, o, i)),
                    (n.currentSlide = n.options.initialSlide),
                    (n.originalSettings = n.options),
                    "undefined" != typeof document.mozHidden
                        ? ((n.hidden = "mozHidden"), (n.visibilityChange = "mozvisibilitychange"))
                        : "undefined" != typeof document.webkitHidden && ((n.hidden = "webkitHidden"), (n.visibilityChange = "webkitvisibilitychange")),
                    (n.autoPlay = $.proxy(n.autoPlay, n)),
                    (n.autoPlayClear = $.proxy(n.autoPlayClear, n)),
                    (n.changeSlide = $.proxy(n.changeSlide, n)),
                    (n.clickHandler = $.proxy(n.clickHandler, n)),
                    (n.selectHandler = $.proxy(n.selectHandler, n)),
                    (n.setPosition = $.proxy(n.setPosition, n)),
                    (n.swipeHandler = $.proxy(n.swipeHandler, n)),
                    (n.dragHandler = $.proxy(n.dragHandler, n)),
                    (n.keyHandler = $.proxy(n.keyHandler, n)),
                    (n.autoPlayIterator = $.proxy(n.autoPlayIterator, n)),
                    (n.instanceUid = e++),
                    (n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
                    n.registerBreakpoints(),
                    n.init(!0),
                    n.checkResponsive(!0);
            }
            var e = 0;
            return t;
        })()),
            (t.prototype.addSlide = t.prototype.slickAdd = function (t, e, i) {
                var n = this;
                if ("boolean" == typeof e) (i = e), (e = null);
                else if (0 > e || e >= n.slideCount) return !1;
                n.unload(),
                    "number" == typeof e
                        ? 0 === e && 0 === n.$slides.length
                            ? $(t).appendTo(n.$slideTrack)
                            : i
                            ? $(t).insertBefore(n.$slides.eq(e))
                            : $(t).insertAfter(n.$slides.eq(e))
                        : i === !0
                        ? $(t).prependTo(n.$slideTrack)
                        : $(t).appendTo(n.$slideTrack),
                    (n.$slides = n.$slideTrack.children(this.options.slide)),
                    n.$slideTrack.children(this.options.slide).detach(),
                    n.$slideTrack.append(n.$slides),
                    n.$slides.each(function (t, e) {
                        $(e).attr("data-slick-index", t);
                    }),
                    (n.$slidesCache = n.$slides),
                    n.reinit();
            }),
            (t.prototype.animateHeight = function () {
                var t = this;
                if (1 === t.options.slidesToShow && t.options.adaptiveHeight === !0 && t.options.vertical === !1) {
                    var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
                    t.$list.animate({ height: e }, t.options.speed);
                }
            }),
            (t.prototype.animateSlide = function (t, e) {
                var i = {},
                    n = this;
                n.animateHeight(),
                    n.options.rtl === !0 && n.options.vertical === !1 && (t = -t),
                    n.transformsEnabled === !1
                        ? n.options.vertical === !1
                            ? n.$slideTrack.animate({ left: t }, n.options.speed, n.options.easing, e)
                            : n.$slideTrack.animate({ top: t }, n.options.speed, n.options.easing, e)
                        : n.cssTransitions === !1
                        ? (n.options.rtl === !0 && (n.currentLeft = -n.currentLeft),
                          $({ animStart: n.currentLeft }).animate(
                              { animStart: t },
                              {
                                  duration: n.options.speed,
                                  easing: n.options.easing,
                                  step: function (t) {
                                      (t = Math.ceil(t)), n.options.vertical === !1 ? ((i[n.animType] = "translate(" + t + "px, 0px)"), n.$slideTrack.css(i)) : ((i[n.animType] = "translate(0px," + t + "px)"), n.$slideTrack.css(i));
                                  },
                                  complete: function () {
                                      e && e.call();
                                  },
                              }
                          ))
                        : (n.applyTransition(),
                          (t = Math.ceil(t)),
                          n.options.vertical === !1 ? (i[n.animType] = "translate3d(" + t + "px, 0px, 0px)") : (i[n.animType] = "translate3d(0px," + t + "px, 0px)"),
                          n.$slideTrack.css(i),
                          e &&
                              setTimeout(function () {
                                  n.disableTransition(), e.call();
                              }, n.options.speed));
            }),
            (t.prototype.asNavFor = function (t) {
                var e = this,
                    i = e.options.asNavFor;
                i && null !== i && (i = $(i).not(e.$slider)),
                    null !== i &&
                        "object" == typeof i &&
                        i.each(function () {
                            var e = $(this).slick("getSlick");
                            e.unslicked || e.slideHandler(t, !0);
                        });
            }),
            (t.prototype.applyTransition = function (t) {
                var e = this,
                    i = {};
                e.options.fade === !1 ? (i[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase) : (i[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase),
                    e.options.fade === !1 ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i);
            }),
            (t.prototype.autoPlay = function () {
                var t = this;
                t.autoPlayTimer && clearInterval(t.autoPlayTimer), t.slideCount > t.options.slidesToShow && t.paused !== !0 && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed));
            }),
            (t.prototype.autoPlayClear = function () {
                var t = this;
                t.autoPlayTimer && clearInterval(t.autoPlayTimer);
            }),
            (t.prototype.autoPlayIterator = function () {
                var t = this;
                t.options.infinite === !1
                    ? 1 === t.direction
                        ? (t.currentSlide + 1 === t.slideCount - 1 && (t.direction = 0), t.slideHandler(t.currentSlide + t.options.slidesToScroll))
                        : (t.currentSlide - 1 === 0 && (t.direction = 1), t.slideHandler(t.currentSlide - t.options.slidesToScroll))
                    : t.slideHandler(t.currentSlide + t.options.slidesToScroll);
            }),
            (t.prototype.buildArrows = function () {
                var t = this;
                t.options.arrows === !0 &&
                    ((t.$prevArrow = $(t.options.prevArrow).addClass("slick-arrow")),
                    (t.$nextArrow = $(t.options.nextArrow).addClass("slick-arrow")),
                    t.slideCount > t.options.slidesToShow
                        ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
                          t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
                          t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows),
                          t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows),
                          t.options.infinite !== !0 && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"))
                        : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({ "aria-disabled": "true", tabindex: "-1" }));
            }),
            (t.prototype.buildDots = function () {
                var t = this,
                    e,
                    i;
                if (t.options.dots === !0 && t.slideCount > t.options.slidesToShow) {
                    for (i = '<ul class="' + t.options.dotsClass + '">', e = 0; e <= t.getDotCount(); e += 1) i += "<li>" + t.options.customPaging.call(this, t, e) + "</li>";
                    (i += "</ul>"), (t.$dots = $(i).appendTo(t.options.appendDots)), t.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false");
                }
            }),
            (t.prototype.buildOut = function () {
                var t = this;
                (t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide")),
                    (t.slideCount = t.$slides.length),
                    t.$slides.each(function (t, e) {
                        $(e)
                            .attr("data-slick-index", t)
                            .data("originalStyling", $(e).attr("style") || "");
                    }),
                    t.$slider.addClass("slick-slider"),
                    (t.$slideTrack = 0 === t.slideCount ? $('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent()),
                    (t.$list = t.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent()),
                    t.$slideTrack.css("opacity", 0),
                    (t.options.centerMode === !0 || t.options.swipeToSlide === !0) && (t.options.slidesToScroll = 1),
                    $("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"),
                    t.setupInfinite(),
                    t.buildArrows(),
                    t.buildDots(),
                    t.updateDots(),
                    t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0),
                    t.options.draggable === !0 && t.$list.addClass("draggable");
            }),
            (t.prototype.buildRows = function () {
                var t = this,
                    e,
                    i,
                    n,
                    o,
                    r,
                    s,
                    a;
                if (((o = document.createDocumentFragment()), (s = t.$slider.children()), t.options.rows > 1)) {
                    for (a = t.options.slidesPerRow * t.options.rows, r = Math.ceil(s.length / a), e = 0; r > e; e++) {
                        var l = document.createElement("div");
                        for (i = 0; i < t.options.rows; i++) {
                            var c = document.createElement("div");
                            for (n = 0; n < t.options.slidesPerRow; n++) {
                                var d = e * a + (i * t.options.slidesPerRow + n);
                                s.get(d) && c.appendChild(s.get(d));
                            }
                            l.appendChild(c);
                        }
                        o.appendChild(l);
                    }
                    t.$slider.html(o),
                        t.$slider
                            .children()
                            .children()
                            .children()
                            .css({ width: 100 / t.options.slidesPerRow + "%", display: "inline-block" });
                }
            }),
            (t.prototype.checkResponsive = function (t, e) {
                var i = this,
                    n,
                    o,
                    r,
                    s = !1,
                    a = i.$slider.width(),
                    l = window.innerWidth || $(window).width();
                if (("window" === i.respondTo ? (r = l) : "slider" === i.respondTo ? (r = a) : "min" === i.respondTo && (r = Math.min(l, a)), i.options.responsive && i.options.responsive.length && null !== i.options.responsive)) {
                    o = null;
                    for (n in i.breakpoints) i.breakpoints.hasOwnProperty(n) && (i.originalSettings.mobileFirst === !1 ? r < i.breakpoints[n] && (o = i.breakpoints[n]) : r > i.breakpoints[n] && (o = i.breakpoints[n]));
                    null !== o
                        ? null !== i.activeBreakpoint
                            ? (o !== i.activeBreakpoint || e) &&
                              ((i.activeBreakpoint = o),
                              "unslick" === i.breakpointSettings[o] ? i.unslick(o) : ((i.options = $.extend({}, i.originalSettings, i.breakpointSettings[o])), t === !0 && (i.currentSlide = i.options.initialSlide), i.refresh(t)),
                              (s = o))
                            : ((i.activeBreakpoint = o),
                              "unslick" === i.breakpointSettings[o] ? i.unslick(o) : ((i.options = $.extend({}, i.originalSettings, i.breakpointSettings[o])), t === !0 && (i.currentSlide = i.options.initialSlide), i.refresh(t)),
                              (s = o))
                        : null !== i.activeBreakpoint && ((i.activeBreakpoint = null), (i.options = i.originalSettings), t === !0 && (i.currentSlide = i.options.initialSlide), i.refresh(t), (s = o)),
                        t || s === !1 || i.$slider.trigger("breakpoint", [i, s]);
                }
            }),
            (t.prototype.changeSlide = function (t, e) {
                var i = this,
                    n = $(t.target),
                    o,
                    r,
                    s;
                switch ((n.is("a") && t.preventDefault(), n.is("li") || (n = n.closest("li")), (s = i.slideCount % i.options.slidesToScroll !== 0), (o = s ? 0 : (i.slideCount - i.currentSlide) % i.options.slidesToScroll), t.data.message)) {
                    case "previous":
                        (r = 0 === o ? i.options.slidesToScroll : i.options.slidesToShow - o), i.slideCount > i.options.slidesToShow && i.slideHandler(i.currentSlide - r, !1, e);
                        break;
                    case "next":
                        (r = 0 === o ? i.options.slidesToScroll : o), i.slideCount > i.options.slidesToShow && i.slideHandler(i.currentSlide + r, !1, e);
                        break;
                    case "index":
                        var a = 0 === t.data.index ? 0 : t.data.index || n.index() * i.options.slidesToScroll;
                        i.slideHandler(i.checkNavigable(a), !1, e), n.children().trigger("focus");
                        break;
                    default:
                        return;
                }
            }),
            (t.prototype.checkNavigable = function (t) {
                var e = this,
                    i,
                    n;
                if (((i = e.getNavigableIndexes()), (n = 0), t > i[i.length - 1])) t = i[i.length - 1];
                else
                    for (var o in i) {
                        if (t < i[o]) {
                            t = n;
                            break;
                        }
                        n = i[o];
                    }
                return t;
            }),
            (t.prototype.cleanUpEvents = function () {
                var t = this;
                t.options.dots &&
                    null !== t.$dots &&
                    ($("li", t.$dots).off("click.slick", t.changeSlide),
                    t.options.pauseOnDotsHover === !0 && t.options.autoplay === !0 && $("li", t.$dots).off("mouseenter.slick", $.proxy(t.setPaused, t, !0)).off("mouseleave.slick", $.proxy(t.setPaused, t, !1))),
                    t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide)),
                    t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler),
                    t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler),
                    t.$list.off("touchend.slick mouseup.slick", t.swipeHandler),
                    t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler),
                    t.$list.off("click.slick", t.clickHandler),
                    $(document).off(t.visibilityChange, t.visibility),
                    t.$list.off("mouseenter.slick", $.proxy(t.setPaused, t, !0)),
                    t.$list.off("mouseleave.slick", $.proxy(t.setPaused, t, !1)),
                    t.options.accessibility === !0 && t.$list.off("keydown.slick", t.keyHandler),
                    t.options.focusOnSelect === !0 && $(t.$slideTrack).children().off("click.slick", t.selectHandler),
                    $(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange),
                    $(window).off("resize.slick.slick-" + t.instanceUid, t.resize),
                    $("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault),
                    $(window).off("load.slick.slick-" + t.instanceUid, t.setPosition),
                    $(document).off("ready.slick.slick-" + t.instanceUid, t.setPosition);
            }),
            (t.prototype.cleanUpRows = function () {
                var t = this,
                    e;
                t.options.rows > 1 && ((e = t.$slides.children().children()), e.removeAttr("style"), t.$slider.html(e));
            }),
            (t.prototype.clickHandler = function (t) {
                var e = this;
                e.shouldClick === !1 && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault());
            }),
            (t.prototype.destroy = function (t) {
                var e = this;
                e.autoPlayClear(),
                    (e.touchObject = {}),
                    e.cleanUpEvents(),
                    $(".slick-cloned", e.$slider).detach(),
                    e.$dots && e.$dots.remove(),
                    e.$prevArrow &&
                        e.$prevArrow.length &&
                        (e.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove()),
                    e.$nextArrow &&
                        e.$nextArrow.length &&
                        (e.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove()),
                    e.$slides &&
                        (e.$slides
                            .removeClass("slick-slide slick-active slick-center slick-visible slick-current")
                            .removeAttr("aria-hidden")
                            .removeAttr("data-slick-index")
                            .each(function () {
                                $(this).attr("style", $(this).data("originalStyling"));
                            }),
                        e.$slideTrack.children(this.options.slide).detach(),
                        e.$slideTrack.detach(),
                        e.$list.detach(),
                        e.$slider.append(e.$slides)),
                    e.cleanUpRows(),
                    e.$slider.removeClass("slick-slider"),
                    e.$slider.removeClass("slick-initialized"),
                    (e.unslicked = !0),
                    t || e.$slider.trigger("destroy", [e]);
            }),
            (t.prototype.disableTransition = function (t) {
                var e = this,
                    i = {};
                (i[e.transitionType] = ""), e.options.fade === !1 ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i);
            }),
            (t.prototype.fadeSlide = function (t, e) {
                var i = this;
                i.cssTransitions === !1
                    ? (i.$slides.eq(t).css({ zIndex: i.options.zIndex }), i.$slides.eq(t).animate({ opacity: 1 }, i.options.speed, i.options.easing, e))
                    : (i.applyTransition(t),
                      i.$slides.eq(t).css({ opacity: 1, zIndex: i.options.zIndex }),
                      e &&
                          setTimeout(function () {
                              i.disableTransition(t), e.call();
                          }, i.options.speed));
            }),
            (t.prototype.fadeSlideOut = function (t) {
                var e = this;
                e.cssTransitions === !1 ? e.$slides.eq(t).animate({ opacity: 0, zIndex: e.options.zIndex - 2 }, e.options.speed, e.options.easing) : (e.applyTransition(t), e.$slides.eq(t).css({ opacity: 0, zIndex: e.options.zIndex - 2 }));
            }),
            (t.prototype.filterSlides = t.prototype.slickFilter = function (t) {
                var e = this;
                null !== t && ((e.$slidesCache = e.$slides), e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(t).appendTo(e.$slideTrack), e.reinit());
            }),
            (t.prototype.getCurrent = t.prototype.slickCurrentSlide = function () {
                var t = this;
                return t.currentSlide;
            }),
            (t.prototype.getDotCount = function () {
                var t = this,
                    e = 0,
                    i = 0,
                    n = 0;
                if (t.options.infinite === !0) for (; e < t.slideCount; ) ++n, (e = i + t.options.slidesToScroll), (i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow);
                else if (t.options.centerMode === !0) n = t.slideCount;
                else for (; e < t.slideCount; ) ++n, (e = i + t.options.slidesToScroll), (i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow);
                return n - 1;
            }),
            (t.prototype.getLeft = function (t) {
                var e = this,
                    i,
                    n,
                    o = 0,
                    r;
                return (
                    (e.slideOffset = 0),
                    (n = e.$slides.first().outerHeight(!0)),
                    e.options.infinite === !0
                        ? (e.slideCount > e.options.slidesToShow && ((e.slideOffset = e.slideWidth * e.options.slidesToShow * -1), (o = n * e.options.slidesToShow * -1)),
                          e.slideCount % e.options.slidesToScroll !== 0 &&
                              t + e.options.slidesToScroll > e.slideCount &&
                              e.slideCount > e.options.slidesToShow &&
                              (t > e.slideCount
                                  ? ((e.slideOffset = (e.options.slidesToShow - (t - e.slideCount)) * e.slideWidth * -1), (o = (e.options.slidesToShow - (t - e.slideCount)) * n * -1))
                                  : ((e.slideOffset = (e.slideCount % e.options.slidesToScroll) * e.slideWidth * -1), (o = (e.slideCount % e.options.slidesToScroll) * n * -1))))
                        : t + e.options.slidesToShow > e.slideCount && ((e.slideOffset = (t + e.options.slidesToShow - e.slideCount) * e.slideWidth), (o = (t + e.options.slidesToShow - e.slideCount) * n)),
                    e.slideCount <= e.options.slidesToShow && ((e.slideOffset = 0), (o = 0)),
                    e.options.centerMode === !0 && e.options.infinite === !0
                        ? (e.slideOffset += e.slideWidth * Math.floor(e.options.slidesToShow / 2) - e.slideWidth)
                        : e.options.centerMode === !0 && ((e.slideOffset = 0), (e.slideOffset += e.slideWidth * Math.floor(e.options.slidesToShow / 2))),
                    (i = e.options.vertical === !1 ? t * e.slideWidth * -1 + e.slideOffset : t * n * -1 + o),
                    e.options.variableWidth === !0 &&
                        ((r = e.slideCount <= e.options.slidesToShow || e.options.infinite === !1 ? e.$slideTrack.children(".slick-slide").eq(t) : e.$slideTrack.children(".slick-slide").eq(t + e.options.slidesToShow)),
                        (i = e.options.rtl === !0 ? (r[0] ? -1 * (e.$slideTrack.width() - r[0].offsetLeft - r.width()) : 0) : r[0] ? -1 * r[0].offsetLeft : 0),
                        e.options.centerMode === !0 &&
                            ((r = e.slideCount <= e.options.slidesToShow || e.options.infinite === !1 ? e.$slideTrack.children(".slick-slide").eq(t) : e.$slideTrack.children(".slick-slide").eq(t + e.options.slidesToShow + 1)),
                            (i = e.options.rtl === !0 ? (r[0] ? -1 * (e.$slideTrack.width() - r[0].offsetLeft - r.width()) : 0) : r[0] ? -1 * r[0].offsetLeft : 0),
                            (i += (e.$list.width() - r.outerWidth()) / 2))),
                    i
                );
            }),
            (t.prototype.getOption = t.prototype.slickGetOption = function (t) {
                var e = this;
                return e.options[t];
            }),
            (t.prototype.getNavigableIndexes = function () {
                var t = this,
                    e = 0,
                    i = 0,
                    n = [],
                    o;
                for (t.options.infinite === !1 ? (o = t.slideCount) : ((e = -1 * t.options.slidesToScroll), (i = -1 * t.options.slidesToScroll), (o = 2 * t.slideCount)); o > e; )
                    n.push(e), (e = i + t.options.slidesToScroll), (i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow);
                return n;
            }),
            (t.prototype.getSlick = function () {
                return this;
            }),
            (t.prototype.getSlideCount = function () {
                var t = this,
                    e,
                    i,
                    n;
                return (
                    (n = t.options.centerMode === !0 ? t.slideWidth * Math.floor(t.options.slidesToShow / 2) : 0),
                    t.options.swipeToSlide === !0
                        ? (t.$slideTrack.find(".slick-slide").each(function (e, o) {
                              return o.offsetLeft - n + $(o).outerWidth() / 2 > -1 * t.swipeLeft ? ((i = o), !1) : void 0;
                          }),
                          (e = Math.abs($(i).attr("data-slick-index") - t.currentSlide) || 1))
                        : t.options.slidesToScroll
                );
            }),
            (t.prototype.goTo = t.prototype.slickGoTo = function (t, e) {
                var i = this;
                i.changeSlide({ data: { message: "index", index: parseInt(t) } }, e);
            }),
            (t.prototype.init = function (t) {
                var e = this;
                $(e.$slider).hasClass("slick-initialized") || ($(e.$slider).addClass("slick-initialized"), e.buildRows(), e.buildOut(), e.setProps(), e.startLoad(), e.loadSlider(), e.initializeEvents(), e.updateArrows(), e.updateDots()),
                    t && e.$slider.trigger("init", [e]),
                    e.options.accessibility === !0 && e.initADA();
            }),
            (t.prototype.initArrowEvents = function () {
                var t = this;
                t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.on("click.slick", { message: "previous" }, t.changeSlide), t.$nextArrow.on("click.slick", { message: "next" }, t.changeSlide));
            }),
            (t.prototype.initDotEvents = function () {
                var t = this;
                t.options.dots === !0 && t.slideCount > t.options.slidesToShow && $("li", t.$dots).on("click.slick", { message: "index" }, t.changeSlide),
                    t.options.dots === !0 && t.options.pauseOnDotsHover === !0 && t.options.autoplay === !0 && $("li", t.$dots).on("mouseenter.slick", $.proxy(t.setPaused, t, !0)).on("mouseleave.slick", $.proxy(t.setPaused, t, !1));
            }),
            (t.prototype.initializeEvents = function () {
                var t = this;
                t.initArrowEvents(),
                    t.initDotEvents(),
                    t.$list.on("touchstart.slick mousedown.slick", { action: "start" }, t.swipeHandler),
                    t.$list.on("touchmove.slick mousemove.slick", { action: "move" }, t.swipeHandler),
                    t.$list.on("touchend.slick mouseup.slick", { action: "end" }, t.swipeHandler),
                    t.$list.on("touchcancel.slick mouseleave.slick", { action: "end" }, t.swipeHandler),
                    t.$list.on("click.slick", t.clickHandler),
                    $(document).on(t.visibilityChange, $.proxy(t.visibility, t)),
                    t.$list.on("mouseenter.slick", $.proxy(t.setPaused, t, !0)),
                    t.$list.on("mouseleave.slick", $.proxy(t.setPaused, t, !1)),
                    t.options.accessibility === !0 && t.$list.on("keydown.slick", t.keyHandler),
                    t.options.focusOnSelect === !0 && $(t.$slideTrack).children().on("click.slick", t.selectHandler),
                    $(window).on("orientationchange.slick.slick-" + t.instanceUid, $.proxy(t.orientationChange, t)),
                    $(window).on("resize.slick.slick-" + t.instanceUid, $.proxy(t.resize, t)),
                    $("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault),
                    $(window).on("load.slick.slick-" + t.instanceUid, t.setPosition),
                    $(document).on("ready.slick.slick-" + t.instanceUid, t.setPosition);
            }),
            (t.prototype.initUI = function () {
                var t = this;
                t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(), t.$nextArrow.show()),
                    t.options.dots === !0 && t.slideCount > t.options.slidesToShow && t.$dots.show(),
                    t.options.autoplay === !0 && t.autoPlay();
            }),
            (t.prototype.keyHandler = function (t) {
                var e = this;
                t.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
                    (37 === t.keyCode && e.options.accessibility === !0 ? e.changeSlide({ data: { message: "previous" } }) : 39 === t.keyCode && e.options.accessibility === !0 && e.changeSlide({ data: { message: "next" } }));
            }),
            (t.prototype.lazyLoad = function () {
                function t(t) {
                    $("img[data-lazy]", t).each(function () {
                        var t = $(this),
                            e = $(this).attr("data-lazy"),
                            i = document.createElement("img");
                        (i.onload = function () {
                            t.animate({ opacity: 0 }, 100, function () {
                                t.attr("src", e).animate({ opacity: 1 }, 200, function () {
                                    t.removeAttr("data-lazy").removeClass("slick-loading");
                                });
                            });
                        }),
                            (i.src = e);
                    });
                }
                var e = this,
                    i,
                    n,
                    o,
                    r;
                e.options.centerMode === !0
                    ? e.options.infinite === !0
                        ? ((o = e.currentSlide + (e.options.slidesToShow / 2 + 1)), (r = o + e.options.slidesToShow + 2))
                        : ((o = Math.max(0, e.currentSlide - (e.options.slidesToShow / 2 + 1))), (r = 2 + (e.options.slidesToShow / 2 + 1) + e.currentSlide))
                    : ((o = e.options.infinite ? e.options.slidesToShow + e.currentSlide : e.currentSlide), (r = o + e.options.slidesToShow), e.options.fade === !0 && (o > 0 && o--, r <= e.slideCount && r++)),
                    (i = e.$slider.find(".slick-slide").slice(o, r)),
                    t(i),
                    e.slideCount <= e.options.slidesToShow
                        ? ((n = e.$slider.find(".slick-slide")), t(n))
                        : e.currentSlide >= e.slideCount - e.options.slidesToShow
                        ? ((n = e.$slider.find(".slick-cloned").slice(0, e.options.slidesToShow)), t(n))
                        : 0 === e.currentSlide && ((n = e.$slider.find(".slick-cloned").slice(-1 * e.options.slidesToShow)), t(n));
            }),
            (t.prototype.loadSlider = function () {
                var t = this;
                t.setPosition(), t.$slideTrack.css({ opacity: 1 }), t.$slider.removeClass("slick-loading"), t.initUI(), "progressive" === t.options.lazyLoad && t.progressiveLazyLoad();
            }),
            (t.prototype.next = t.prototype.slickNext = function () {
                var t = this;
                t.changeSlide({ data: { message: "next" } });
            }),
            (t.prototype.orientationChange = function () {
                var t = this;
                t.checkResponsive(), t.setPosition();
            }),
            (t.prototype.pause = t.prototype.slickPause = function () {
                var t = this;
                t.autoPlayClear(), (t.paused = !0);
            }),
            (t.prototype.play = t.prototype.slickPlay = function () {
                var t = this;
                (t.paused = !1), t.autoPlay();
            }),
            (t.prototype.postSlide = function (t) {
                var e = this;
                e.$slider.trigger("afterChange", [e, t]), (e.animating = !1), e.setPosition(), (e.swipeLeft = null), e.options.autoplay === !0 && e.paused === !1 && e.autoPlay(), e.options.accessibility === !0 && e.initADA();
            }),
            (t.prototype.prev = t.prototype.slickPrev = function () {
                var t = this;
                t.changeSlide({ data: { message: "previous" } });
            }),
            (t.prototype.preventDefault = function (t) {
                t.preventDefault();
            }),
            (t.prototype.progressiveLazyLoad = function () {
                var t = this,
                    e,
                    i;
                (e = $("img[data-lazy]", t.$slider).length),
                    e > 0 &&
                        ((i = $("img[data-lazy]", t.$slider).first()),
                        i.attr("src", null),
                        i
                            .attr("src", i.attr("data-lazy"))
                            .removeClass("slick-loading")
                            .load(function () {
                                i.removeAttr("data-lazy"), t.progressiveLazyLoad(), t.options.adaptiveHeight === !0 && t.setPosition();
                            })
                            .error(function () {
                                i.removeAttr("data-lazy"), t.progressiveLazyLoad();
                            }));
            }),
            (t.prototype.refresh = function (t) {
                var e = this,
                    i,
                    n;
                (n = e.slideCount - e.options.slidesToShow),
                    e.options.infinite || (e.slideCount <= e.options.slidesToShow ? (e.currentSlide = 0) : e.currentSlide > n && (e.currentSlide = n)),
                    (i = e.currentSlide),
                    e.destroy(!0),
                    $.extend(e, e.initials, { currentSlide: i }),
                    e.init(),
                    t || e.changeSlide({ data: { message: "index", index: i } }, !1);
            }),
            (t.prototype.registerBreakpoints = function () {
                var t = this,
                    e,
                    i,
                    n,
                    o = t.options.responsive || null;
                if ("array" === $.type(o) && o.length) {
                    t.respondTo = t.options.respondTo || "window";
                    for (e in o)
                        if (((n = t.breakpoints.length - 1), (i = o[e].breakpoint), o.hasOwnProperty(e))) {
                            for (; n >= 0; ) t.breakpoints[n] && t.breakpoints[n] === i && t.breakpoints.splice(n, 1), n--;
                            t.breakpoints.push(i), (t.breakpointSettings[i] = o[e].settings);
                        }
                    t.breakpoints.sort(function (e, i) {
                        return t.options.mobileFirst ? e - i : i - e;
                    });
                }
            }),
            (t.prototype.reinit = function () {
                var t = this;
                (t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide")),
                    (t.slideCount = t.$slides.length),
                    t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll),
                    t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0),
                    t.registerBreakpoints(),
                    t.setProps(),
                    t.setupInfinite(),
                    t.buildArrows(),
                    t.updateArrows(),
                    t.initArrowEvents(),
                    t.buildDots(),
                    t.updateDots(),
                    t.initDotEvents(),
                    t.checkResponsive(!1, !0),
                    t.options.focusOnSelect === !0 && $(t.$slideTrack).children().on("click.slick", t.selectHandler),
                    t.setSlideClasses(0),
                    t.setPosition(),
                    t.$slider.trigger("reInit", [t]),
                    t.options.autoplay === !0 && t.focusHandler();
            }),
            (t.prototype.resize = function () {
                var t = this;
                $(window).width() !== t.windowWidth &&
                    (clearTimeout(t.windowDelay),
                    (t.windowDelay = window.setTimeout(function () {
                        (t.windowWidth = $(window).width()), t.checkResponsive(), t.unslicked || t.setPosition();
                    }, 50)));
            }),
            (t.prototype.removeSlide = t.prototype.slickRemove = function (t, e, i) {
                var n = this;
                return (
                    "boolean" == typeof t ? ((e = t), (t = e === !0 ? 0 : n.slideCount - 1)) : (t = e === !0 ? --t : t),
                    n.slideCount < 1 || 0 > t || t > n.slideCount - 1
                        ? !1
                        : (n.unload(),
                          i === !0 ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(t).remove(),
                          (n.$slides = n.$slideTrack.children(this.options.slide)),
                          n.$slideTrack.children(this.options.slide).detach(),
                          n.$slideTrack.append(n.$slides),
                          (n.$slidesCache = n.$slides),
                          void n.reinit())
                );
            }),
            (t.prototype.setCSS = function (t) {
                var e = this,
                    i = {},
                    n,
                    o;
                e.options.rtl === !0 && (t = -t),
                    (n = "left" == e.positionProp ? Math.ceil(t) + "px" : "0px"),
                    (o = "top" == e.positionProp ? Math.ceil(t) + "px" : "0px"),
                    (i[e.positionProp] = t),
                    e.transformsEnabled === !1
                        ? e.$slideTrack.css(i)
                        : ((i = {}), e.cssTransitions === !1 ? ((i[e.animType] = "translate(" + n + ", " + o + ")"), e.$slideTrack.css(i)) : ((i[e.animType] = "translate3d(" + n + ", " + o + ", 0px)"), e.$slideTrack.css(i)));
            }),
            (t.prototype.setDimensions = function () {
                var t = this;
                t.options.vertical === !1
                    ? t.options.centerMode === !0 && t.$list.css({ padding: "0px " + t.options.centerPadding })
                    : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), t.options.centerMode === !0 && t.$list.css({ padding: t.options.centerPadding + " 0px" })),
                    (t.listWidth = t.$list.width()),
                    (t.listHeight = t.$list.height()),
                    t.options.vertical === !1 && t.options.variableWidth === !1
                        ? ((t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow)), t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length)))
                        : t.options.variableWidth === !0
                        ? t.$slideTrack.width(5e3 * t.slideCount)
                        : ((t.slideWidth = Math.ceil(t.listWidth)), t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
                var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
                t.options.variableWidth === !1 && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e);
            }),
            (t.prototype.setFade = function () {
                var t = this,
                    e;
                t.$slides.each(function (i, n) {
                    (e = t.slideWidth * i * -1),
                        t.options.rtl === !0 ? $(n).css({ position: "relative", right: e, top: 0, zIndex: t.options.zIndex - 2, opacity: 0 }) : $(n).css({ position: "relative", left: e, top: 0, zIndex: t.options.zIndex - 2, opacity: 0 });
                }),
                    t.$slides.eq(t.currentSlide).css({ zIndex: t.options.zIndex - 1, opacity: 1 });
            }),
            (t.prototype.setHeight = function () {
                var t = this;
                if (1 === t.options.slidesToShow && t.options.adaptiveHeight === !0 && t.options.vertical === !1) {
                    var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
                    t.$list.css("height", e);
                }
            }),
            (t.prototype.setOption = t.prototype.slickSetOption = function (t, e, i) {
                var n = this,
                    o,
                    r;
                if ("responsive" === t && "array" === $.type(e))
                    for (r in e)
                        if ("array" !== $.type(n.options.responsive)) n.options.responsive = [e[r]];
                        else {
                            for (o = n.options.responsive.length - 1; o >= 0; ) n.options.responsive[o].breakpoint === e[r].breakpoint && n.options.responsive.splice(o, 1), o--;
                            n.options.responsive.push(e[r]);
                        }
                else n.options[t] = e;
                i === !0 && (n.unload(), n.reinit());
            }),
            (t.prototype.setPosition = function () {
                var t = this;
                t.setDimensions(), t.setHeight(), t.options.fade === !1 ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(), t.$slider.trigger("setPosition", [t]);
            }),
            (t.prototype.setProps = function () {
                var t = this,
                    e = document.body.style;
                (t.positionProp = t.options.vertical === !0 ? "top" : "left"),
                    "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"),
                    (void 0 !== e.WebkitTransition || void 0 !== e.MozTransition || void 0 !== e.msTransition) && t.options.useCSS === !0 && (t.cssTransitions = !0),
                    t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : (t.options.zIndex = t.defaults.zIndex)),
                    void 0 !== e.OTransform && ((t.animType = "OTransform"), (t.transformType = "-o-transform"), (t.transitionType = "OTransition"), void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)),
                    void 0 !== e.MozTransform &&
                        ((t.animType = "MozTransform"), (t.transformType = "-moz-transform"), (t.transitionType = "MozTransition"), void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)),
                    void 0 !== e.webkitTransform &&
                        ((t.animType = "webkitTransform"), (t.transformType = "-webkit-transform"), (t.transitionType = "webkitTransition"), void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)),
                    void 0 !== e.msTransform && ((t.animType = "msTransform"), (t.transformType = "-ms-transform"), (t.transitionType = "msTransition"), void 0 === e.msTransform && (t.animType = !1)),
                    void 0 !== e.transform && t.animType !== !1 && ((t.animType = "transform"), (t.transformType = "transform"), (t.transitionType = "transition")),
                    (t.transformsEnabled = t.options.useTransform && null !== t.animType && t.animType !== !1);
            }),
            (t.prototype.setSlideClasses = function (t) {
                var e = this,
                    i,
                    n,
                    o,
                    r;
                (n = e.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true")),
                    e.$slides.eq(t).addClass("slick-current"),
                    e.options.centerMode === !0
                        ? ((i = Math.floor(e.options.slidesToShow / 2)),
                          e.options.infinite === !0 &&
                              (t >= i && t <= e.slideCount - 1 - i
                                  ? e.$slides
                                        .slice(t - i, t + i + 1)
                                        .addClass("slick-active")
                                        .attr("aria-hidden", "false")
                                  : ((o = e.options.slidesToShow + t),
                                    n
                                        .slice(o - i + 1, o + i + 2)
                                        .addClass("slick-active")
                                        .attr("aria-hidden", "false")),
                              0 === t ? n.eq(n.length - 1 - e.options.slidesToShow).addClass("slick-center") : t === e.slideCount - 1 && n.eq(e.options.slidesToShow).addClass("slick-center")),
                          e.$slides.eq(t).addClass("slick-center"))
                        : t >= 0 && t <= e.slideCount - e.options.slidesToShow
                        ? e.$slides
                              .slice(t, t + e.options.slidesToShow)
                              .addClass("slick-active")
                              .attr("aria-hidden", "false")
                        : n.length <= e.options.slidesToShow
                        ? n.addClass("slick-active").attr("aria-hidden", "false")
                        : ((r = e.slideCount % e.options.slidesToShow),
                          (o = e.options.infinite === !0 ? e.options.slidesToShow + t : t),
                          e.options.slidesToShow == e.options.slidesToScroll && e.slideCount - t < e.options.slidesToShow
                              ? n
                                    .slice(o - (e.options.slidesToShow - r), o + r)
                                    .addClass("slick-active")
                                    .attr("aria-hidden", "false")
                              : n
                                    .slice(o, o + e.options.slidesToShow)
                                    .addClass("slick-active")
                                    .attr("aria-hidden", "false")),
                    "ondemand" === e.options.lazyLoad && e.lazyLoad();
            }),
            (t.prototype.setupInfinite = function () {
                var t = this,
                    e,
                    i,
                    n;
                if ((t.options.fade === !0 && (t.options.centerMode = !1), t.options.infinite === !0 && t.options.fade === !1 && ((i = null), t.slideCount > t.options.slidesToShow))) {
                    for (n = t.options.centerMode === !0 ? t.options.slidesToShow + 1 : t.options.slidesToShow, e = t.slideCount; e > t.slideCount - n; e -= 1)
                        (i = e - 1),
                            $(t.$slides[i])
                                .clone(!0)
                                .attr("id", "")
                                .attr("data-slick-index", i - t.slideCount)
                                .prependTo(t.$slideTrack)
                                .addClass("slick-cloned");
                    for (e = 0; n > e; e += 1)
                        (i = e),
                            $(t.$slides[i])
                                .clone(!0)
                                .attr("id", "")
                                .attr("data-slick-index", i + t.slideCount)
                                .appendTo(t.$slideTrack)
                                .addClass("slick-cloned");
                    t.$slideTrack
                        .find(".slick-cloned")
                        .find("[id]")
                        .each(function () {
                            $(this).attr("id", "");
                        });
                }
            }),
            (t.prototype.setPaused = function (t) {
                var e = this;
                e.options.autoplay === !0 && e.options.pauseOnHover === !0 && ((e.paused = t), t ? e.autoPlayClear() : e.autoPlay());
            }),
            (t.prototype.selectHandler = function (t) {
                var e = this,
                    i = $(t.target).is(".slick-slide") ? $(t.target) : $(t.target).parents(".slick-slide"),
                    n = parseInt(i.attr("data-slick-index"));
                return n || (n = 0), e.slideCount <= e.options.slidesToShow ? (e.setSlideClasses(n), void e.asNavFor(n)) : void e.slideHandler(n);
            }),
            (t.prototype.slideHandler = function (t, e, i) {
                var n,
                    o,
                    r,
                    s,
                    a = null,
                    l = this;
                return (
                    (e = e || !1),
                    (l.animating === !0 && l.options.waitForAnimate === !0) || (l.options.fade === !0 && l.currentSlide === t) || l.slideCount <= l.options.slidesToShow
                        ? void 0
                        : (e === !1 && l.asNavFor(t),
                          (n = t),
                          (a = l.getLeft(n)),
                          (s = l.getLeft(l.currentSlide)),
                          (l.currentLeft = null === l.swipeLeft ? s : l.swipeLeft),
                          l.options.infinite === !1 && l.options.centerMode === !1 && (0 > t || t > l.getDotCount() * l.options.slidesToScroll)
                              ? void (
                                    l.options.fade === !1 &&
                                    ((n = l.currentSlide),
                                    i !== !0
                                        ? l.animateSlide(s, function () {
                                              l.postSlide(n);
                                          })
                                        : l.postSlide(n))
                                )
                              : l.options.infinite === !1 && l.options.centerMode === !0 && (0 > t || t > l.slideCount - l.options.slidesToScroll)
                              ? void (
                                    l.options.fade === !1 &&
                                    ((n = l.currentSlide),
                                    i !== !0
                                        ? l.animateSlide(s, function () {
                                              l.postSlide(n);
                                          })
                                        : l.postSlide(n))
                                )
                              : (l.options.autoplay === !0 && clearInterval(l.autoPlayTimer),
                                (o =
                                    0 > n
                                        ? l.slideCount % l.options.slidesToScroll !== 0
                                            ? l.slideCount - (l.slideCount % l.options.slidesToScroll)
                                            : l.slideCount + n
                                        : n >= l.slideCount
                                        ? l.slideCount % l.options.slidesToScroll !== 0
                                            ? 0
                                            : n - l.slideCount
                                        : n),
                                (l.animating = !0),
                                l.$slider.trigger("beforeChange", [l, l.currentSlide, o]),
                                (r = l.currentSlide),
                                (l.currentSlide = o),
                                l.setSlideClasses(l.currentSlide),
                                l.updateDots(),
                                l.updateArrows(),
                                l.options.fade === !0
                                    ? (i !== !0
                                          ? (l.fadeSlideOut(r),
                                            l.fadeSlide(o, function () {
                                                l.postSlide(o);
                                            }))
                                          : l.postSlide(o),
                                      void l.animateHeight())
                                    : void (i !== !0
                                          ? l.animateSlide(a, function () {
                                                l.postSlide(o);
                                            })
                                          : l.postSlide(o))))
                );
            }),
            (t.prototype.startLoad = function () {
                var t = this;
                t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), t.$nextArrow.hide()),
                    t.options.dots === !0 && t.slideCount > t.options.slidesToShow && t.$dots.hide(),
                    t.$slider.addClass("slick-loading");
            }),
            (t.prototype.swipeDirection = function () {
                var t,
                    e,
                    i,
                    n,
                    o = this;
                return (
                    (t = o.touchObject.startX - o.touchObject.curX),
                    (e = o.touchObject.startY - o.touchObject.curY),
                    (i = Math.atan2(e, t)),
                    (n = Math.round((180 * i) / Math.PI)),
                    0 > n && (n = 360 - Math.abs(n)),
                    45 >= n && n >= 0
                        ? o.options.rtl === !1
                            ? "left"
                            : "right"
                        : 360 >= n && n >= 315
                        ? o.options.rtl === !1
                            ? "left"
                            : "right"
                        : n >= 135 && 225 >= n
                        ? o.options.rtl === !1
                            ? "right"
                            : "left"
                        : o.options.verticalSwiping === !0
                        ? n >= 35 && 135 >= n
                            ? "left"
                            : "right"
                        : "vertical"
                );
            }),
            (t.prototype.swipeEnd = function (t) {
                var e = this,
                    i;
                if (((e.dragging = !1), (e.shouldClick = e.touchObject.swipeLength > 10 ? !1 : !0), void 0 === e.touchObject.curX)) return !1;
                if ((e.touchObject.edgeHit === !0 && e.$slider.trigger("edge", [e, e.swipeDirection()]), e.touchObject.swipeLength >= e.touchObject.minSwipe))
                    switch (e.swipeDirection()) {
                        case "left":
                            (i = e.options.swipeToSlide ? e.checkNavigable(e.currentSlide + e.getSlideCount()) : e.currentSlide + e.getSlideCount()),
                                e.slideHandler(i),
                                (e.currentDirection = 0),
                                (e.touchObject = {}),
                                e.$slider.trigger("swipe", [e, "left"]);
                            break;
                        case "right":
                            (i = e.options.swipeToSlide ? e.checkNavigable(e.currentSlide - e.getSlideCount()) : e.currentSlide - e.getSlideCount()),
                                e.slideHandler(i),
                                (e.currentDirection = 1),
                                (e.touchObject = {}),
                                e.$slider.trigger("swipe", [e, "right"]);
                    }
                else e.touchObject.startX !== e.touchObject.curX && (e.slideHandler(e.currentSlide), (e.touchObject = {}));
            }),
            (t.prototype.swipeHandler = function (t) {
                var e = this;
                if (!(e.options.swipe === !1 || ("ontouchend" in document && e.options.swipe === !1) || (e.options.draggable === !1 && -1 !== t.type.indexOf("mouse"))))
                    switch (
                        ((e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1),
                        (e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold),
                        e.options.verticalSwiping === !0 && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold),
                        t.data.action)
                    ) {
                        case "start":
                            e.swipeStart(t);
                            break;
                        case "move":
                            e.swipeMove(t);
                            break;
                        case "end":
                            e.swipeEnd(t);
                    }
            }),
            (t.prototype.swipeMove = function (t) {
                var e = this,
                    i = !1,
                    n,
                    o,
                    r,
                    s,
                    a;
                return (
                    (a = void 0 !== t.originalEvent ? t.originalEvent.touches : null),
                    !e.dragging || (a && 1 !== a.length)
                        ? !1
                        : ((n = e.getLeft(e.currentSlide)),
                          (e.touchObject.curX = void 0 !== a ? a[0].pageX : t.clientX),
                          (e.touchObject.curY = void 0 !== a ? a[0].pageY : t.clientY),
                          (e.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(e.touchObject.curX - e.touchObject.startX, 2)))),
                          e.options.verticalSwiping === !0 && (e.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(e.touchObject.curY - e.touchObject.startY, 2)))),
                          (o = e.swipeDirection()),
                          "vertical" !== o
                              ? (void 0 !== t.originalEvent && e.touchObject.swipeLength > 4 && t.preventDefault(),
                                (s = (e.options.rtl === !1 ? 1 : -1) * (e.touchObject.curX > e.touchObject.startX ? 1 : -1)),
                                e.options.verticalSwiping === !0 && (s = e.touchObject.curY > e.touchObject.startY ? 1 : -1),
                                (r = e.touchObject.swipeLength),
                                (e.touchObject.edgeHit = !1),
                                e.options.infinite === !1 &&
                                    ((0 === e.currentSlide && "right" === o) || (e.currentSlide >= e.getDotCount() && "left" === o)) &&
                                    ((r = e.touchObject.swipeLength * e.options.edgeFriction), (e.touchObject.edgeHit = !0)),
                                e.options.vertical === !1 ? (e.swipeLeft = n + r * s) : (e.swipeLeft = n + r * (e.$list.height() / e.listWidth) * s),
                                e.options.verticalSwiping === !0 && (e.swipeLeft = n + r * s),
                                e.options.fade === !0 || e.options.touchMove === !1 ? !1 : e.animating === !0 ? ((e.swipeLeft = null), !1) : void e.setCSS(e.swipeLeft))
                              : void 0)
                );
            }),
            (t.prototype.swipeStart = function (t) {
                var e = this,
                    i;
                return 1 !== e.touchObject.fingerCount || e.slideCount <= e.options.slidesToShow
                    ? ((e.touchObject = {}), !1)
                    : (void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (i = t.originalEvent.touches[0]),
                      (e.touchObject.startX = e.touchObject.curX = void 0 !== i ? i.pageX : t.clientX),
                      (e.touchObject.startY = e.touchObject.curY = void 0 !== i ? i.pageY : t.clientY),
                      void (e.dragging = !0));
            }),
            (t.prototype.unfilterSlides = t.prototype.slickUnfilter = function () {
                var t = this;
                null !== t.$slidesCache && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.appendTo(t.$slideTrack), t.reinit());
            }),
            (t.prototype.unload = function () {
                var t = this;
                $(".slick-cloned", t.$slider).remove(),
                    t.$dots && t.$dots.remove(),
                    t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(),
                    t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(),
                    t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
            }),
            (t.prototype.unslick = function (t) {
                var e = this;
                e.$slider.trigger("unslick", [e, t]), e.destroy();
            }),
            (t.prototype.updateArrows = function () {
                var t = this,
                    e;
                (e = Math.floor(t.options.slidesToShow / 2)),
                    t.options.arrows === !0 &&
                        t.slideCount > t.options.slidesToShow &&
                        !t.options.infinite &&
                        (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
                        t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
                        0 === t.currentSlide
                            ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"))
                            : t.currentSlide >= t.slideCount - t.options.slidesToShow && t.options.centerMode === !1
                            ? (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"))
                            : t.currentSlide >= t.slideCount - 1 &&
                              t.options.centerMode === !0 &&
                              (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
            }),
            (t.prototype.updateDots = function () {
                var t = this;
                null !== t.$dots &&
                    (t.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"),
                    t.$dots
                        .find("li")
                        .eq(Math.floor(t.currentSlide / t.options.slidesToScroll))
                        .addClass("slick-active")
                        .attr("aria-hidden", "false"));
            }),
            (t.prototype.visibility = function () {
                var t = this;
                document[t.hidden] ? ((t.paused = !0), t.autoPlayClear()) : t.options.autoplay === !0 && ((t.paused = !1), t.autoPlay());
            }),
            (t.prototype.initADA = function () {
                var t = this;
                t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({ "aria-hidden": "true", tabindex: "-1" }).find("a, input, button, select").attr({ tabindex: "-1" }),
                    t.$slideTrack.attr("role", "listbox"),
                    t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function (e) {
                        $(this).attr({ role: "option", "aria-describedby": "slick-slide" + t.instanceUid + e });
                    }),
                    null !== t.$dots &&
                        t.$dots
                            .attr("role", "tablist")
                            .find("li")
                            .each(function (e) {
                                $(this).attr({ role: "presentation", "aria-selected": "false", "aria-controls": "navigation" + t.instanceUid + e, id: "slick-slide" + t.instanceUid + e });
                            })
                            .first()
                            .attr("aria-selected", "true")
                            .end()
                            .find("button")
                            .attr("role", "button")
                            .end()
                            .closest("div")
                            .attr("role", "toolbar"),
                    t.activateADA();
            }),
            (t.prototype.activateADA = function () {
                var t = this;
                t.$slideTrack.find(".slick-active").attr({ "aria-hidden": "false" }).find("a, input, button, select").attr({ tabindex: "0" });
            }),
            (t.prototype.focusHandler = function () {
                var t = this;
                t.$slider.on("focus.slick blur.slick", "*", function (e) {
                    e.stopImmediatePropagation();
                    var i = $(this);
                    setTimeout(function () {
                        t.isPlay && (i.is(":focus") ? (t.autoPlayClear(), (t.paused = !0)) : ((t.paused = !1), t.autoPlay()));
                    }, 0);
                });
            }),
            ($.fn.slick = function () {
                var e = this,
                    i = arguments[0],
                    n = Array.prototype.slice.call(arguments, 1),
                    o = e.length,
                    r,
                    s;
                for (r = 0; o > r; r++) if (("object" == typeof i || "undefined" == typeof i ? (e[r].slick = new t(e[r], i)) : (s = e[r].slick[i].apply(e[r].slick, n)), "undefined" != typeof s)) return s;
                return e;
            });
    });
var docCookies = {
        getItem: function (t) {
            return t ? decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(t).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null : null;
        },
        setItem: function (t, e, i, n, o, r) {
            if (!t || /^(?:expires|max\-age|path|domain|secure)$/i.test(t)) return !1;
            var s = "";
            if (i)
                switch (i.constructor) {
                    case Number:
                        s = i === 1 / 0 ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + i;
                        break;
                    case String:
                        s = "; expires=" + i;
                        break;
                    case Date:
                        s = "; expires=" + i.toUTCString();
                }
            return (document.cookie = encodeURIComponent(t) + "=" + encodeURIComponent(e) + s + (o ? "; domain=" + o : "") + (n ? "; path=" + n : "") + (r ? "; secure" : "")), !0;
        },
        removeItem: function (t, e, i) {
            return this.hasItem(t) ? ((document.cookie = encodeURIComponent(t) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (i ? "; domain=" + i : "") + (e ? "; path=" + e : "")), !0) : !1;
        },
        hasItem: function (t) {
            return t ? new RegExp("(?:^|;\\s*)" + encodeURIComponent(t).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=").test(document.cookie) : !1;
        },
        keys: function () {
            for (var t = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/), e = t.length, i = 0; e > i; i++) t[i] = decodeURIComponent(t[i]);
            return t;
        },
    },
    SharrrePlatform =
        SharrrePlatform ||
        (function () {
            var t = {};
            return {
                register: function (e, i) {
                    t[e] = i;
                },
                get: function (e, i) {
                    return t[e] ? new t[e](i) : (console.error("Sharrre - No platform found for " + e), !1);
                },
            };
        })();
SharrrePlatform.register("delicious", function (t) {
    return (
        (defaultSettings = { url: "", urlCount: !1, layout: "1", count: !0, popup: { width: 550, height: 550 } }),
        (defaultSettings = $.extend(!0, {}, defaultSettings, t)),
        {
            settings: defaultSettings,
            url: function (t) {
                return "http://feeds.delicious.com/v2/json/urlinfo/data?url={url}&callback=?";
            },
            trackingAction: { site: "delicious", action: "add" },
            load: function (t) {
                if ("tall" == t.options.buttons.delicious.size)
                    var e = "width:50px;",
                        i = "height:35px;width:50px;font-size:15px;line-height:35px;",
                        n = "height:18px;line-height:18px;margin-top:3px;";
                else
                    var e = "width:93px;",
                        i = "float:right;padding:0 3px;height:20px;width:26px;line-height:20px;",
                        n = "float:left;height:20px;line-height:20px;";
                var o = t.shorterTotal(t.options.count.delicious);
                "undefined" == typeof o && (o = 0),
                    $(t.element)
                        .find(".buttons")
                        .append(
                            '<div class="button delicious"><div style="' +
                                e +
                                'font:12px Arial,Helvetica,sans-serif;cursor:pointer;color:#666666;display:inline-block;float:none;height:20px;line-height:normal;margin:0;padding:0;text-indent:0;vertical-align:baseline;"><div style="' +
                                i +
                                'background-color:#fff;margin-bottom:5px;overflow:hidden;text-align:center;border:1px solid #ccc;border-radius:3px;">' +
                                o +
                                '</div><div style="' +
                                n +
                                'display:block;padding:0;text-align:center;text-decoration:none;width:50px;background-color:#7EACEE;border:1px solid #40679C;border-radius:3px;color:#fff;"><img src="https://www.delicious.com/static/img/delicious.small.gif" height="10" width="10" alt="Delicious" /> Add</div></div></div>'
                        ),
                    $(t.element)
                        .find(".delicious")
                        .on("click", function () {
                            t.openPopup("delicious");
                        });
            },
            tracking: function () {},
            popup: function (t) {
                window.open(
                    "https://www.delicious.com/save?v=5&noui&jump=close&url=" + encodeURIComponent("" !== this.settings.url ? this.settings.url : t.url) + "&title=" + t.text,
                    "delicious",
                    "toolbar=no,width=" + this.settings.popup.width + ", height=" + this.settings.popup.height
                );
            },
        }
    );
}),
    SharrrePlatform.register("digg", function (t) {
        return (
            (defaultSettings = { url: "", urlCount: !1, type: "DiggCompact", count: !0, popup: { width: 650, height: 360 } }),
            (defaultSettings = $.extend(!0, {}, defaultSettings, t)),
            {
                settings: defaultSettings,
                url: function (t) {
                    return "http://services.digg.com/2.0/story.getInfo?links={url}&type=javascript&callback=?";
                },
                trackingAction: { site: "digg", action: "add" },
                load: function (t) {
                    var e = this.settings;
                    $(t.element)
                        .find(".buttons")
                        .append('<div class="button digg"><a class="DiggThisButton ' + e.type + '" rel="nofollow external" href="http://digg.com/submit?url=' + encodeURIComponent("" !== e.url ? e.url : t.options.url) + '"></a></div>');
                    var i = 0;
                    "undefined" == typeof __DBW &&
                        0 == i &&
                        ((i = 1),
                        (function () {
                            var t = document.createElement("SCRIPT"),
                                e = document.getElementsByTagName("SCRIPT")[0];
                            (t.type = "text/javascript"), (t.async = !0), (t.src = "http://widgets.digg.com/buttons.js"), e.parentNode.insertBefore(t, e);
                        })());
                },
                tracking: function () {},
                popup: function (t) {
                    window.open(
                        "http://digg.com/tools/diggthis/submit?url=" + encodeURIComponent("" !== t.buttons.digg.url ? t.buttons.digg.url : t.url) + "&title=" + t.text + "&related=true&style=true",
                        "",
                        "toolbar=0, status=0, width=" + this.settings.popup.width + ", height=" + this.settings.popup.height
                    );
                },
            }
        );
    }),
    SharrrePlatform.register("facebook", function (t) {
        return (
            (defaultSettings = {
                url: "",
                urlCount: !1,
                action: "like",
                layout: "button_count",
                count: !0,
                width: "",
                send: "false",
                faces: "false",
                colorscheme: "",
                font: "",
                lang: "en_US",
                share: "",
                appId: "",
                popup: { width: 900, height: 500 },
            }),
            (defaultSettings = $.extend(!0, {}, defaultSettings, t)),
            {
                settings: defaultSettings,
                url: function (t) {
                    return "https://graph.facebook.com/fql?q=SELECT%20url,%20normalized_url,%20share_count,%20like_count,%20comment_count,%20total_count,commentsbox_count,%20comments_fbid,%20click_count%20FROM%20link_stat%20WHERE%20url=%27{url}%27&callback=?";
                },
                trackingAction: { site: "facebook", action: "like" },
                load: function (t) {
                    var e = this.settings;
                    $(t.element)
                        .find(".buttons")
                        .append(
                            '<div class="button facebook"><div id="fb-root"></div><div class="fb-like" data-href="' +
                                ("" !== e.url ? e.url : t.options.url) +
                                '" data-send="' +
                                e.send +
                                '" data-layout="' +
                                e.layout +
                                '" data-width="' +
                                e.width +
                                '" data-show-faces="' +
                                e.faces +
                                '" data-action="' +
                                e.action +
                                '" data-colorscheme="' +
                                e.colorscheme +
                                '" data-font="' +
                                e.font +
                                '" data-via="' +
                                e.via +
                                '" data-share="' +
                                e.share +
                                '"></div></div>'
                        );
                    var i = 0;
                    "undefined" == typeof FB && 0 == i
                        ? ((i = 1),
                          (function (t, i, n) {
                              var o,
                                  r = t.getElementsByTagName(i)[0];
                              t.getElementById(n) || ((o = t.createElement(i)), (o.id = n), (o.src = "https://connect.facebook.net/" + e.lang + "/all.js#xfbml=1"), e.appId && (o.src += "&appId=" + e.appId), r.parentNode.insertBefore(o, r));
                          })(document, "script", "facebook-jssdk"))
                        : FB.XFBML.parse();
                },
                tracking: function () {
                    fb = window.setInterval(function () {
                        "undefined" != typeof FB &&
                            (FB.Event.subscribe("edge.create", function (t) {
                                _gaq.push(["_trackSocial", "facebook", "like", t]);
                            }),
                            FB.Event.subscribe("edge.remove", function (t) {
                                _gaq.push(["_trackSocial", "facebook", "unlike", t]);
                            }),
                            FB.Event.subscribe("message.send", function (t) {
                                _gaq.push(["_trackSocial", "facebook", "send", t]);
                            }),
                            clearInterval(fb));
                    }, 1e3);
                },
                popup: function (t) {
                    window.open(
                        "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent("" !== this.settings.url ? this.settings.url : t.url) + "&t=" + t.text,
                        "",
                        "toolbar=0, status=0, width=" + this.settings.popup.width + ", height=" + this.settings.popup.height
                    );
                },
            }
        );
    }),
    SharrrePlatform.register("googlePlus", function (t) {
        return (
            (defaultSettings = { url: "", urlCount: !1, size: "medium", lang: "en-US", annotation: "", count: !0, popup: { width: 900, height: 500 } }),
            (defaultSettings = $.extend(!0, {}, defaultSettings, t)),
            {
                settings: defaultSettings,
                url: function (t) {
                    return t + "?url={url}&type=googlePlus";
                },
                trackingAction: { site: "Google", action: "+1" },
                load: function (t) {
                    var e = this.settings;
                    $(t.element)
                        .find(".buttons")
                        .append('<div class="button googleplus"><div class="g-plusone" data-size="' + e.size + '" data-href="' + ("" !== e.url ? e.url : t.options.url) + '" data-annotation="' + e.annotation + '"></div></div>'),
                        (window.___gcfg = { lang: e.lang });
                    var i = 0;
                    ("undefined" != typeof gapi && "undefined" != typeof gapi.plusone) || 0 != i
                        ? gapi.plusone.go()
                        : ((i = 1),
                          (function () {
                              var t = document.createElement("script");
                              (t.type = "text/javascript"), (t.async = !0), (t.src = "https://apis.google.com/js/plusone.js");
                              var e = document.getElementsByTagName("script")[0];
                              e.parentNode.insertBefore(t, e);
                          })());
                },
                tracking: function () {},
                popup: function (t) {
                    window.open(
                        "https://plus.google.com/share?hl=" + this.settings.lang + "&url=" + encodeURIComponent("" !== this.settings.url ? this.settings.url : t.url),
                        "",
                        "toolbar=0, status=0, width=" + this.settings.popup.width + ", height=" + this.settings.popup.height
                    );
                },
            }
        );
    }),
    SharrrePlatform.register("linkedin", function (t) {
        return (
            (defaultSettings = { url: "", urlCount: !1, counter: "", count: !0, popup: { width: 550, height: 550 } }),
            (defaultSettings = $.extend(!0, {}, defaultSettings, t)),
            {
                settings: defaultSettings,
                url: function (t) {
                    return "https://www.linkedin.com/countserv/count/share?format=jsonp&url={url}&callback=?";
                },
                trackingAction: { site: "linkedin", action: "share" },
                load: function (t) {
                    var e = this.settings;
                    $(t.element)
                        .find(".buttons")
                        .append('<div class="button linkedin"><script type="IN/share" data-url="' + ("" !== e.url ? e.url : t.options.url) + '" data-counter="' + e.counter + '"></script></div>');
                    var i = 0;
                    "undefined" == typeof window.IN && 0 == i
                        ? ((i = 1),
                          (function () {
                              var t = document.createElement("script");
                              (t.type = "text/javascript"), (t.async = !0), (t.src = "https://platform.linkedin.com/in.js");
                              var e = document.getElementsByTagName("script")[0];
                              e.parentNode.insertBefore(t, e);
                          })())
                        : "undefined" != typeof window.IN && window.IN.parse && IN.parse(document);
                },
                tracking: function () {},
                popup: function (t) {
                    window.open(
                        "https://www.linkedin.com/cws/share?url=" + encodeURIComponent("" !== this.settings.url ? this.settings.url : t.url) + "&token=&isFramed=true",
                        "linkedin",
                        "toolbar=no, width=" + this.settings.popup.width + ", height=" + this.settings.popup.height
                    );
                },
            }
        );
    }),
    SharrrePlatform.register("pinterest", function (t) {
        return (
            (defaultSettings = { url: "", media: "", description: "", layout: "horizontal", popup: { width: 700, height: 300 } }),
            (defaultSettings = $.extend(!0, {}, defaultSettings, t)),
            {
                settings: defaultSettings,
                url: function (t) {
                    return "https://api.pinterest.com/v1/urls/count.json?url={url}&callback=?";
                },
                trackingAction: { site: "pinterest", action: "pin" },
                load: function (t) {
                    var e = this.settings;
                    $(t.element)
                        .find(".buttons")
                        .append(
                            '<div class="button pinterest"><a href="https://www.pinterest.com/pin/create/button/?url=' +
                                ("" !== e.url ? e.url : t.options.url) +
                                "&media=" +
                                e.media +
                                "&description=" +
                                e.description +
                                '" data-pin-do="buttonBookmark" count-layout="' +
                                e.layout +
                                '">Pin It</a></div>'
                        ),
                        (function () {
                            var t = document.createElement("script");
                            (t.type = "text/javascript"), (t.async = !0), (t.src = "https://assets.pinterest.com/js/pinit.js"), t.setAttribute("data-pin-build", "parsePinBtns");
                            var e = document.getElementsByTagName("script")[0];
                            e.parentNode.insertBefore(t, e);
                        })(),
                        window.parsePinBtns && window.parsePinBtns(),
                        $(t.element)
                            .find(".pinterest")
                            .on("click", function () {
                                t.openPopup("pinterest");
                            });
                },
                tracking: function () {},
                popup: function (t) {
                    window.open(
                        "https://pinterest.com/pin/create/button/?url=" +
                            encodeURIComponent("" !== this.settings.url ? this.settings.url : t.url) +
                            "&media=" +
                            encodeURIComponent(this.settings.media) +
                            "&description=" +
                            this.settings.description,
                        "pinterest",
                        "toolbar=no,width=" + this.settings.popup.width + ", height=" + this.settings.popup.height
                    );
                },
            }
        );
    }),
    SharrrePlatform.register("reddit", function (t) {
        return (
            (defaultSettings = { url: "", urlCount: !1, count: !1, popup: { width: 900, height: 550 } }),
            (defaultSettings = $.extend(!0, {}, defaultSettings, t)),
            {
                settings: defaultSettings,
                trackingAction: { site: "reddit", action: "share" },
                url: function (t) {
                    return "";
                },
                load: function (t) {
                    var e = this.settings,
                        i = this;
                    $(t.element)
                        .find(".buttons")
                        .append(
                            '<div class="button reddit"><a href="https://www.reddit.com/submit?url=' +
                                ("" !== e.url ? e.url : t.options.url) +
                                '"><img src="https://www.redditstatic.com/spreddit7.gif" alt="submit to reddit" border="0" /></a></div>'
                        ),
                        $(t.element)
                            .find(".reddit")
                            .on("click", function () {
                                i.popup(t.options);
                            });
                },
                tracking: function () {},
                popup: function (t) {
                    window.open(
                        "https://www.reddit.com/submit?url=" + encodeURIComponent("" !== this.settings.url ? this.setting.url : t.url),
                        "",
                        "toolbar=0, status=0,width=" + this.settings.popup.width + ", height=" + this.settings.popup.height
                    );
                },
            }
        );
    }),
    SharrrePlatform.register("stumbleupon", function (t) {
        return (
            (defaultSettings = { url: "", urlCount: !1, size: "medium", count: !0, popup: { width: 550, height: 550 } }),
            (defaultSettings = $.extend(!0, {}, defaultSettings, t)),
            {
                settings: defaultSettings,
                url: function (t) {
                    return t + "?url={url}&type=stumbleupon";
                },
                trackingAction: { site: "stumbleupon", action: "add" },
                load: function (t) {
                    var e = this.settings;
                    $(t.element)
                        .find(".buttons")
                        .append('<div class="button stumbleupon"><su:badge layout="' + e.layout + '" location="' + ("" !== e.url ? e.url : t.options.url) + '"></su:badge></div>');
                    var i = 0;
                    "undefined" == typeof STMBLPN && 0 == i
                        ? ((i = 1),
                          (function () {
                              var t = document.createElement("script");
                              (t.type = "text/javascript"), (t.async = !0), (t.src = "https://platform.stumbleupon.com/1/widgets.js");
                              var e = document.getElementsByTagName("script")[0];
                              e.parentNode.insertBefore(t, e);
                          })(),
                          (s = window.setTimeout(function () {
                              "undefined" != typeof STMBLPN && (STMBLPN.processWidgets(), clearInterval(s));
                          }, 500)))
                        : ((STMBLPN.wasProcessLoaded = !1), STMBLPN.processWidgets());
                },
                tracking: function () {},
                popup: function (t) {
                    window.open(
                        "https://www.stumbleupon.com/badge/?url=" + encodeURIComponent("" !== this.settings.url ? this.settings.url : t.url),
                        "stumbleupon",
                        "toolbar=no, width=" + this.settings.popup.width + ", height=" + this.settings.popup.height
                    );
                },
            }
        );
    }),
    SharrrePlatform.register("tumblr", function (t) {
        return (
            (defaultSettings = { url: "", urlCount: !1, description: "", name: "", count: !1, title: "Share on Tumblr", color: "blue", notes: "none", popup: { width: 900, height: 500 } }),
            (defaultSettings = $.extend(!0, {}, defaultSettings, t)),
            {
                settings: defaultSettings,
                url: function (t) {
                    return "";
                },
                trackingAction: { site: "tumblr", action: "share" },
                load: function (t) {
                    var e = this.settings;
                    $(t.element)
                        .find(".buttons")
                        .append(
                            '<div title="' +
                                e.title +
                                '" class="button tumblr"><a class="tumblr-share-button" data-color="' +
                                e.color +
                                '" data-notes="' +
                                e.notes +
                                '" data-href="' +
                                ("" !== e.url ? e.url : t.options.url) +
                                '"  href="https://www.tumblr.com/share">' +
                                e.title +
                                "</a></div>"
                        );
                    var i = 0;
                    "undefined" == typeof Tumblr && 0 == i
                        ? ((i = 1),
                          (function () {
                              var t = document.createElement("script"),
                                  e = document.getElementsByTagName("script")[0];
                              (t.src = "https://secure.assets.tumblr.com/share-button.js"), e.parentNode.insertBefore(t, e);
                          })())
                        : Tumblr.activate_share_on_tumblr_buttons();
                },
                tracking: function () {},
                popup: function (t) {
                    window.open(
                        "https://www.tumblr.com/share/link?canonicalUrl=" +
                            encodeURIComponent("" !== this.settings.url ? this.settings.url : t.url) +
                            "&name=" +
                            encodeURIComponent(this.settings.name) +
                            "&description=" +
                            encodeURIComponent(this.settings.description),
                        "",
                        "toolbar=0, status=0, width=" + this.settings.popup.width + ", height=" + this.settings.popup.height
                    );
                },
            }
        );
    }),
    SharrrePlatform.register("twitter", function (t) {
        return (
            (defaultSettings = { url: "", urlCount: !1, count: !1, hashtags: "", via: "", related: "", lang: "en", popup: { width: 650, height: 360 } }),
            (defaultSettings = $.extend(!0, {}, defaultSettings, t)),
            {
                settings: defaultSettings,
                trackingAction: { site: "twitter", action: "tweet" },
                url: function (t) {
                    return "https://opensharecount.com/count.json?url={url}";
                },
                load: function (t) {
                    var e = this.settings;
                    $(t.element)
                        .find(".buttons")
                        .append(
                            '<div class="button twitter"><a href="https://twitter.com/share" class="twitter-share-button" data-url="' +
                                ("" !== e.url ? e.url : t.options.url) +
                                '" data-count="' +
                                e.count +
                                '" data-text="' +
                                t.options.text +
                                '" data-via="' +
                                e.via +
                                '" data-hashtags="' +
                                e.hashtags +
                                '" data-related="' +
                                e.related +
                                '" data-lang="' +
                                e.lang +
                                '">Tweet</a></div>'
                        );
                    var i = 0;
                    "undefined" == typeof twttr && 0 == i
                        ? ((i = 1),
                          (function () {
                              var t = document.createElement("script");
                              (t.type = "text/javascript"), (t.async = !0), (t.src = "https://platform.twitter.com/widgets.js");
                              var e = document.getElementsByTagName("script")[0];
                              e.parentNode.insertBefore(t, e);
                          })())
                        : $.ajax({ url: "https://platform.twitter.com/widgets.js", dataType: "script", cache: !0 });
                },
                tracking: function () {
                    tw = window.setInterval(function () {
                        "undefined" != typeof twttr &&
                            (twttr.events.bind("tweet", function (t) {
                                t && _gaq.push(["_trackSocial", "twitter", "tweet"]);
                            }),
                            clearInterval(tw));
                    }, 1e3);
                },
                popup: function (t) {
                    window.open(
                        "https://twitter.com/intent/tweet?text=" +
                            encodeURIComponent(t.text) +
                            "&url=" +
                            encodeURIComponent("" !== this.settings.url ? this.setting.url : t.url) +
                            ("" !== this.settings.via ? "&via=" + this.settings.via : ""),
                        "",
                        "toolbar=0, status=0,width=" + this.settings.popup.width + ", height=" + this.settings.popup.height
                    );
                },
            }
        );
    }),
    SharrrePlatform.register("twitterFollow", function (t) {
        return (
            (defaultSettings = { url: "", urlCount: !1, count: !0, display: "horizontal", lang: "en", popup: { width: 650, height: 360 }, user: "", size: "default", showCount: "false" }),
            (defaultSettings = $.extend(!0, {}, defaultSettings, t)),
            {
                settings: defaultSettings,
                trackingAction: { site: "twitter", action: "follow" },
                url: function (t) {
                    return "";
                },
                load: function (t) {
                    var e = this.settings;
                    $(t.element)
                        .find(".buttons")
                        .append(
                            '<div class="button twitterFollow"><a href="https://twitter.com/' +
                                e.user +
                                '" class="twitter-follow-button"" data-size="' +
                                e.size +
                                '" data-show-count="' +
                                e.showCount +
                                '" data-lang="' +
                                e.lang +
                                '">Follow @' +
                                e.user +
                                "</a></div>"
                        );
                    var i = 0;
                    "undefined" == typeof twttr && 0 == i
                        ? ((i = 1),
                          (function () {
                              var t = document.createElement("script");
                              (t.type = "text/javascript"), (t.async = !0), (t.src = "https://platform.twitter.com/widgets.js");
                              var e = document.getElementsByTagName("script")[0];
                              e.parentNode.insertBefore(t, e);
                          })())
                        : $.ajax({ url: "https://platform.twitter.com/widgets.js", dataType: "script", cache: !0 });
                },
                tracking: function () {},
                popup: function (t) {
                    window.open("https://twitter.com/intent/follow?screen_name=" + encodeURIComponent(this.settings.user), "", "toolbar=0, status=0, ,width=" + this.settings.popup.width + ", height=" + this.settings.popup.height);
                },
            }
        );
    }),
    (function (t, i, n, o) {
        function r(e, i) {
            (this.element = e), (this.options = t.extend(!0, {}, a, i)), (this.options.share = i.share), (this._defaults = a), (this._name = s), (this.platforms = {}), this.init();
        }
        var s = "sharrre",
            a = {
                className: "sharrre",
                share: {},
                shareTotal: 0,
                template: "",
                title: "",
                url: n.location.href,
                text: n.title,
                urlCurl: "sharrre.php",
                count: {},
                total: 0,
                shorterTotal: !0,
                enableHover: !0,
                enableCounter: !0,
                enableTracking: !1,
                defaultUrl: "javascript:void(0);",
                popup: { width: 900, height: 500 },
                hover: function () {},
                hide: function () {},
                click: function () {},
                render: function () {},
            };
        (r.prototype.init = function () {
            var e = this;
            t.each(e.options.share, function (t, i) {
                i === !0 && (e.platforms[t] = SharrrePlatform.get(t, e.options.buttons[t]));
            }),
                t(this.element).addClass(this.options.className),
                "undefined" != typeof t(this.element).data("title") && (this.options.title = t(this.element).attr("data-title")),
                "undefined" != typeof t(this.element).data("url") && (this.options.url = t(this.element).data("url")),
                "undefined" != typeof t(this.element).data("text") && (this.options.text = t(this.element).data("text")),
                t.each(this.options.share, function (t, i) {
                    i === !0 && e.options.shareTotal++;
                }),
                e.options.enableCounter === !0
                    ? t.each(this.options.share, function (t, i) {
                          if (i === !0)
                              try {
                                  e.getSocialJson(t);
                              } catch (n) {}
                      })
                    : "" !== e.options.template && (e.renderer(), (e.options.count[name] = 0), e.rendererPerso()),
                "" !== e.options.template ? this.options.render(this, this.options) : this.loadButtons(),
                t(this.element)
                    .on("mouseenter", function () {
                        0 === t(this).find(".buttons").length && e.options.enableHover === !0 && e.loadButtons(), e.options.hover(e, e.options);
                    })
                    .on("mouseleave", function () {
                        e.options.hide(e, e.options);
                    }),
                t(this.element).click(function (t) {
                    return t.preventDefault(), e.options.click(e, e.options), !1;
                });
        }),
            (r.prototype.loadButtons = function () {
                var e = this;
                t(this.element).append('<div class="buttons"></div>'),
                    t.each(e.options.share, function (t, i) {
                        1 == i && (e.platforms[t].load(e), e.options.enableTracking === !0 && e.platforms[t].tracking());
                    });
            }),
            (r.prototype.getSocialJson = function (e) {
                var i = this,
                    n = 0,
                    o = i.platforms[e].settings,
                    r = i.platforms[e].url(this.options.urlCurl),
                    s = encodeURIComponent(this.options.url);
                o.url.length && (r = o.url),
                    o.urlCount === !0 && "" !== r && (s = r),
                    o.count === !1 && (r = ""),
                    (url = r.replace("{url}", s)),
                    "" != url
                        ? t
                              .getJSON(url, function (t) {
                                  if ("undefined" != typeof t.count) {
                                      var o = t.count + "";
                                      (o = o.replace("Â ", "")), (n += parseInt(o, 10));
                                  } else t.data && t.data.length > 0 && "undefined" != typeof t.data[0].total_count ? (n += parseInt(t.data[0].total_count, 10)) : "undefined" != typeof t[0] ? (n += parseInt(t[0].total_posts, 10)) : "undefined" != typeof t[0];
                                  (i.options.count[e] = n), (i.options.total += n), i.renderer(), i.rendererPerso();
                              })
                              .error(function () {
                                  (i.options.count[e] = 0), i.rendererPerso();
                              })
                        : (i.renderer(), (i.options.count[e] = 0), i.rendererPerso());
            }),
            (r.prototype.rendererPerso = function () {
                var t = 0;
                for (e in this.options.count) t++;
                t === this.options.shareTotal && this.options.render(this, this.options);
            }),
            (r.prototype.renderer = function () {
                var e = this.options.total,
                    i = this.options.template;
                this.options.shorterTotal === !0 && (e = this.shorterTotal(e)),
                    "" !== i
                        ? ((i = i.replace("{total}", e)), t(this.element).html(i))
                        : t(this.element).html(
                              '<div class="box"><a class="count" href="' +
                                  this.options.defaultUrl +
                                  '">' +
                                  e +
                                  "</a>" +
                                  ("" !== this.options.title ? '<a class="share" href="' + this.options.defaultUrl + '">' + this.options.title + "</a>" : "") +
                                  "</div>"
                          );
            }),
            (r.prototype.shorterTotal = function (t) {
                return t >= 1e6 ? (t = (t / 1e6).toFixed(2) + "M") : t >= 1e3 && (t = (t / 1e3).toFixed(1) + "k"), t;
            }),
            (r.prototype.openPopup = function (t) {
                this.platforms[t].popup(this.options), this.options.enableTracking === !0 && ((infos = this.platforms[t].trackingAction), _gaq.push(["_trackSocial", infos.site, infos.action]));
            }),
            (r.prototype.simulateClick = function () {
                var e = t(this.element).html();
                t(this.element).html(e.replace(this.options.total, this.options.total + 1));
            }),
            (r.prototype.update = function (t, e) {
                "" !== t && (this.options.url = t), "" !== e && (this.options.text = e);
            }),
            (t.fn[s] = function (e) {
                var i = arguments;
                return e === o || "object" == typeof e
                    ? this.each(function () {
                          t(this).data("plugin_" + s) || t(this).data("plugin_" + s, new r(this, e));
                      })
                    : "string" == typeof e && "_" !== e[0] && "init" !== e
                    ? this.each(function () {
                          var n = t(this).data("plugin_" + s);
                          n instanceof r && "function" == typeof n[e] && n[e].apply(n, Array.prototype.slice.call(i, 1));
                      })
                    : void 0;
            });
    })(window.jQuery || window.Zepto, window, document),
    (function (t) {
        var e = !1,
            i = !1,
            n = {
                isUrl: function (t) {
                    var e = RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$", "i");
                    return e.test(t) ? !0 : !1;
                },
                loadContent: function (t, e) {
                    t.html(e);
                },
                addPrefix: function (t) {
                    var e = t.attr("id"),
                        i = t.attr("class");
                    "string" == typeof e && "" !== e && t.attr("id", e.replace(/([A-Za-z0-9_.\-]+)/g, "sidr-id-$1")),
                        "string" == typeof i && "" !== i && "sidr-inner" !== i && t.attr("class", i.replace(/([A-Za-z0-9_.\-]+)/g, "sidr-class-$1")),
                        t.removeAttr("style");
                },
                execute: function (n, r, s) {
                    "function" == typeof r ? ((s = r), (r = "sidr")) : r || (r = "sidr");
                    var a,
                        l,
                        c,
                        d = t("#" + r),
                        u = t(d.data("body")),
                        p = t("html"),
                        f = d.outerWidth(!0),
                        h = d.data("speed"),
                        m = d.data("side"),
                        g = d.data("displace"),
                        v = d.data("onOpen"),
                        y = d.data("onClose"),
                        b = "sidr" === r ? "sidr-open" : "sidr-open " + r + "-open";
                    if ("open" === n || ("toggle" === n && !d.is(":visible"))) {
                        if (d.is(":visible") || e) return;
                        if (i !== !1)
                            return void o.close(i, function () {
                                o.open(r);
                            });
                        (e = !0),
                            "left" === m ? ((a = { left: f + "px" }), (l = { left: "0px" })) : ((a = { right: f + "px" }), (l = { right: "0px" })),
                            u.is("body") && ((c = p.scrollTop()), p.css("overflow-x", "hidden").scrollTop(c)),
                            g
                                ? u
                                      .addClass("sidr-animating")
                                      .css({ width: u.width(), position: "absolute" })
                                      .animate(a, h, function () {
                                          t(this).addClass(b);
                                      })
                                : setTimeout(function () {
                                      t(this).addClass(b);
                                  }, h),
                            d.css("display", "block").animate(l, h, function () {
                                (e = !1), (i = r), "function" == typeof s && s(r), u.removeClass("sidr-animating");
                            }),
                            v();
                    } else {
                        if (!d.is(":visible") || e) return;
                        (e = !0),
                            "left" === m ? ((a = { left: 0 }), (l = { left: "-" + f + "px" })) : ((a = { right: 0 }), (l = { right: "-" + f + "px" })),
                            u.is("body") && ((c = p.scrollTop()), p.removeAttr("style").scrollTop(c)),
                            u.addClass("sidr-animating").animate(a, h).removeClass(b),
                            d.animate(l, h, function () {
                                d.removeAttr("style").hide(), u.removeAttr("style"), t("html").removeAttr("style"), (e = !1), (i = !1), "function" == typeof s && s(r), u.removeClass("sidr-animating");
                            }),
                            y();
                    }
                },
            },
            o = {
                open: function (t, e) {
                    n.execute("open", t, e);
                },
                close: function (t, e) {
                    n.execute("close", t, e);
                },
                toggle: function (t, e) {
                    n.execute("toggle", t, e);
                },
                toogle: function (t, e) {
                    n.execute("toggle", t, e);
                },
            };
        (t.sidr = function (e) {
            return o[e] ? o[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "function" != typeof e && "string" != typeof e && e ? void t.error("Method " + e + " does not exist on jQuery.sidr") : o.toggle.apply(this, arguments);
        }),
            (t.fn.sidr = function (e) {
                var i = t.extend({ name: "sidr", speed: 200, side: "left", source: null, renaming: !0, body: "body", displace: !0, onOpen: function () {}, onClose: function () {} }, e),
                    r = i.name,
                    s = t("#" + r);
                if (
                    (0 === s.length && (s = t("<div />").attr("id", r).appendTo(t("body"))),
                    s.addClass("sidr").addClass(i.side).data({ speed: i.speed, side: i.side, body: i.body, displace: i.displace, onOpen: i.onOpen, onClose: i.onClose }),
                    "function" == typeof i.source)
                ) {
                    var a = i.source(r);
                    n.loadContent(s, a);
                } else if ("string" == typeof i.source && n.isUrl(i.source))
                    t.get(i.source, function (t) {
                        n.loadContent(s, t);
                    });
                else if ("string" == typeof i.source) {
                    var l = "",
                        c = i.source.split(",");
                    if (
                        (t.each(c, function (e, i) {
                            l += '<div class="sidr-inner">' + t(i).html() + "</div>";
                        }),
                        i.renaming)
                    ) {
                        var d = t("<div />").html(l);
                        d.find("*").each(function (e, i) {
                            var o = t(i);
                            n.addPrefix(o);
                        }),
                            (l = d.html());
                    }
                    n.loadContent(s, l);
                } else null !== i.source && t.error("Invalid Sidr Source");
                return this.each(function () {
                    var e = t(this),
                        i = e.data("sidr");
                    i ||
                        (e.data("sidr", r),
                        "ontouchstart" in document.documentElement
                            ? (e.bind("touchstart", function (t) {
                                  t.originalEvent.touches[0], (this.touched = t.timeStamp);
                              }),
                              e.bind("touchend", function (t) {
                                  var e = Math.abs(t.timeStamp - this.touched);
                                  200 > e && (t.preventDefault(), o.toggle(r));
                              }))
                            : e.click(function (t) {
                                  t.preventDefault(), o.toggle(r);
                              }));
                });
            });
    })(jQuery),
    (function (t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto);
    })(function ($) {
        var t = "Close",
            e = "BeforeClose",
            i = "AfterClose",
            n = "BeforeAppend",
            o = "MarkupParse",
            r = "Open",
            s = "Change",
            a = "mfp",
            l = "." + a,
            c = "mfp-ready",
            d = "mfp-removing",
            u = "mfp-prevent-close",
            p,
            f = function () {},
            h = !!window.jQuery,
            m,
            g = $(window),
            v,
            y,
            b,
            w,
            x = function (t, e) {
                p.ev.on(a + t + l, e);
            },
            k = function (t, e, i, n) {
                var o = document.createElement("div");
                return (o.className = "mfp-" + t), i && (o.innerHTML = i), n ? e && e.appendChild(o) : ((o = $(o)), e && o.appendTo(e)), o;
            },
            T = function (t, e) {
                p.ev.triggerHandler(a + t, e), p.st.callbacks && ((t = t.charAt(0).toLowerCase() + t.slice(1)), p.st.callbacks[t] && p.st.callbacks[t].apply(p, $.isArray(e) ? e : [e]));
            },
            C = function (t) {
                return (t === w && p.currTemplate.closeBtn) || ((p.currTemplate.closeBtn = $(p.st.closeMarkup.replace("%title%", p.st.tClose))), (w = t)), p.currTemplate.closeBtn;
            },
            S = function () {
                $.magnificPopup.instance || ((p = new f()), p.init(), ($.magnificPopup.instance = p));
            },
            E = function () {
                var t = document.createElement("p").style,
                    e = ["ms", "O", "Moz", "Webkit"];
                if (void 0 !== t.transition) return !0;
                for (; e.length; ) if (e.pop() + "Transition" in t) return !0;
                return !1;
            };
        (f.prototype = {
            constructor: f,
            init: function () {
                var t = navigator.appVersion;
                (p.isLowIE = p.isIE8 = document.all && !document.addEventListener),
                    (p.isAndroid = /android/gi.test(t)),
                    (p.isIOS = /iphone|ipad|ipod/gi.test(t)),
                    (p.supportsTransition = E()),
                    (p.probablyMobile = p.isAndroid || p.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent)),
                    (v = $(document)),
                    (p.popupsCache = {});
            },
            open: function (t) {
                var e;
                if (t.isObj === !1) {
                    (p.items = t.items.toArray()), (p.index = 0);
                    var i = t.items,
                        n;
                    for (e = 0; e < i.length; e++)
                        if (((n = i[e]), n.parsed && (n = n.el[0]), n === t.el[0])) {
                            p.index = e;
                            break;
                        }
                } else (p.items = $.isArray(t.items) ? t.items : [t.items]), (p.index = t.index || 0);
                if (p.isOpen) return void p.updateItemHTML();
                (p.types = []),
                    (b = ""),
                    t.mainEl && t.mainEl.length ? (p.ev = t.mainEl.eq(0)) : (p.ev = v),
                    t.key ? (p.popupsCache[t.key] || (p.popupsCache[t.key] = {}), (p.currTemplate = p.popupsCache[t.key])) : (p.currTemplate = {}),
                    (p.st = $.extend(!0, {}, $.magnificPopup.defaults, t)),
                    (p.fixedContentPos = "auto" === p.st.fixedContentPos ? !p.probablyMobile : p.st.fixedContentPos),
                    p.st.modal && ((p.st.closeOnContentClick = !1), (p.st.closeOnBgClick = !1), (p.st.showCloseBtn = !1), (p.st.enableEscapeKey = !1)),
                    p.bgOverlay ||
                        ((p.bgOverlay = k("bg").on("click" + l, function () {
                            p.close();
                        })),
                        (p.wrap = k("wrap")
                            .attr("tabindex", -1)
                            .on("click" + l, function (t) {
                                p._checkIfClose(t.target) && p.close();
                            })),
                        (p.container = k("container", p.wrap))),
                    (p.contentContainer = k("content")),
                    p.st.preloader && (p.preloader = k("preloader", p.container, p.st.tLoading));
                var s = $.magnificPopup.modules;
                for (e = 0; e < s.length; e++) {
                    var a = s[e];
                    (a = a.charAt(0).toUpperCase() + a.slice(1)), p["init" + a].call(p);
                }
                T("BeforeOpen"),
                    p.st.showCloseBtn &&
                        (p.st.closeBtnInside
                            ? (x(o, function (t, e, i, n) {
                                  i.close_replaceWith = C(n.type);
                              }),
                              (b += " mfp-close-btn-in"))
                            : p.wrap.append(C())),
                    p.st.alignTop && (b += " mfp-align-top"),
                    p.fixedContentPos ? p.wrap.css({ overflow: p.st.overflowY, overflowX: "hidden", overflowY: p.st.overflowY }) : p.wrap.css({ top: g.scrollTop(), position: "absolute" }),
                    (p.st.fixedBgPos === !1 || ("auto" === p.st.fixedBgPos && !p.fixedContentPos)) && p.bgOverlay.css({ height: v.height(), position: "absolute" }),
                    p.st.enableEscapeKey &&
                        v.on("keyup" + l, function (t) {
                            27 === t.keyCode && p.close();
                        }),
                    g.on("resize" + l, function () {
                        p.updateSize();
                    }),
                    p.st.closeOnContentClick || (b += " mfp-auto-cursor"),
                    b && p.wrap.addClass(b);
                var d = (p.wH = g.height()),
                    u = {};
                if (p.fixedContentPos && p._hasScrollBar(d)) {
                    var f = p._getScrollbarSize();
                    f && (u.marginRight = f);
                }
                p.fixedContentPos && (p.isIE7 ? $("body, html").css("overflow", "hidden") : (u.overflow = "hidden"));
                var h = p.st.mainClass;
                return (
                    p.isIE7 && (h += " mfp-ie7"),
                    h && p._addClassToMFP(h),
                    p.updateItemHTML(),
                    T("BuildControls"),
                    $("html").css(u),
                    p.bgOverlay.add(p.wrap).prependTo(p.st.prependTo || $(document.body)),
                    (p._lastFocusedEl = document.activeElement),
                    setTimeout(function () {
                        p.content ? (p._addClassToMFP(c), p._setFocus()) : p.bgOverlay.addClass(c), v.on("focusin" + l, p._onFocusIn);
                    }, 16),
                    (p.isOpen = !0),
                    p.updateSize(d),
                    T(r),
                    t
                );
            },
            close: function () {
                p.isOpen &&
                    (T(e),
                    (p.isOpen = !1),
                    p.st.removalDelay && !p.isLowIE && p.supportsTransition
                        ? (p._addClassToMFP(d),
                          setTimeout(function () {
                              p._close();
                          }, p.st.removalDelay))
                        : p._close());
            },
            _close: function () {
                T(t);
                var e = d + " " + c + " ";
                if ((p.bgOverlay.detach(), p.wrap.detach(), p.container.empty(), p.st.mainClass && (e += p.st.mainClass + " "), p._removeClassFromMFP(e), p.fixedContentPos)) {
                    var n = { marginRight: "" };
                    p.isIE7 ? $("body, html").css("overflow", "") : (n.overflow = ""), $("html").css(n);
                }
                v.off("keyup" + l + " focusin" + l),
                    p.ev.off(l),
                    p.wrap.attr("class", "mfp-wrap").removeAttr("style"),
                    p.bgOverlay.attr("class", "mfp-bg"),
                    p.container.attr("class", "mfp-container"),
                    !p.st.showCloseBtn || (p.st.closeBtnInside && p.currTemplate[p.currItem.type] !== !0) || (p.currTemplate.closeBtn && p.currTemplate.closeBtn.detach()),
                    p.st.autoFocusLast && p._lastFocusedEl && $(p._lastFocusedEl).focus(),
                    (p.currItem = null),
                    (p.content = null),
                    (p.currTemplate = null),
                    (p.prevHeight = 0),
                    T(i);
            },
            updateSize: function (t) {
                if (p.isIOS) {
                    var e = document.documentElement.clientWidth / window.innerWidth,
                        i = window.innerHeight * e;
                    p.wrap.css("height", i), (p.wH = i);
                } else p.wH = t || g.height();
                p.fixedContentPos || p.wrap.css("height", p.wH), T("Resize");
            },
            updateItemHTML: function () {
                var t = p.items[p.index];
                p.contentContainer.detach(), p.content && p.content.detach(), t.parsed || (t = p.parseEl(p.index));
                var e = t.type;
                if ((T("BeforeChange", [p.currItem ? p.currItem.type : "", e]), (p.currItem = t), !p.currTemplate[e])) {
                    var i = p.st[e] ? p.st[e].markup : !1;
                    T("FirstMarkupParse", i), i ? (p.currTemplate[e] = $(i)) : (p.currTemplate[e] = !0);
                }
                y && y !== t.type && p.container.removeClass("mfp-" + y + "-holder");
                var n = p["get" + e.charAt(0).toUpperCase() + e.slice(1)](t, p.currTemplate[e]);
                p.appendContent(n, e), (t.preloaded = !0), T(s, t), (y = t.type), p.container.prepend(p.contentContainer), T("AfterChange");
            },
            appendContent: function (t, e) {
                (p.content = t),
                    t ? (p.st.showCloseBtn && p.st.closeBtnInside && p.currTemplate[e] === !0 ? p.content.find(".mfp-close").length || p.content.append(C()) : (p.content = t)) : (p.content = ""),
                    T(n),
                    p.container.addClass("mfp-" + e + "-holder"),
                    p.contentContainer.append(p.content);
            },
            parseEl: function (t) {
                var e = p.items[t],
                    i;
                if ((e.tagName ? (e = { el: $(e) }) : ((i = e.type), (e = { data: e, src: e.src })), e.el)) {
                    for (var n = p.types, o = 0; o < n.length; o++)
                        if (e.el.hasClass("mfp-" + n[o])) {
                            i = n[o];
                            break;
                        }
                    (e.src = e.el.attr("data-mfp-src")), e.src || (e.src = e.el.attr("href"));
                }
                return (e.type = i || p.st.type || "inline"), (e.index = t), (e.parsed = !0), (p.items[t] = e), T("ElementParse", e), p.items[t];
            },
            addGroup: function (t, e) {
                var i = function (i) {
                    (i.mfpEl = this), p._openClick(i, t, e);
                };
                e || (e = {});
                var n = "click.magnificPopup";
                (e.mainEl = t), e.items ? ((e.isObj = !0), t.off(n).on(n, i)) : ((e.isObj = !1), e.delegate ? t.off(n).on(n, e.delegate, i) : ((e.items = t), t.off(n).on(n, i)));
            },
            _openClick: function (t, e, i) {
                var n = void 0 !== i.midClick ? i.midClick : $.magnificPopup.defaults.midClick;
                if (n || !(2 === t.which || t.ctrlKey || t.metaKey || t.altKey || t.shiftKey)) {
                    var o = void 0 !== i.disableOn ? i.disableOn : $.magnificPopup.defaults.disableOn;
                    if (o)
                        if ($.isFunction(o)) {
                            if (!o.call(p)) return !0;
                        } else if (g.width() < o) return !0;
                    t.type && (t.preventDefault(), p.isOpen && t.stopPropagation()), (i.el = $(t.mfpEl)), i.delegate && (i.items = e.find(i.delegate)), p.open(i);
                }
            },
            updateStatus: function (t, e) {
                if (p.preloader) {
                    m !== t && p.container.removeClass("mfp-s-" + m), e || "loading" !== t || (e = p.st.tLoading);
                    var i = { status: t, text: e };
                    T("UpdateStatus", i),
                        (t = i.status),
                        (e = i.text),
                        p.preloader.html(e),
                        p.preloader.find("a").on("click", function (t) {
                            t.stopImmediatePropagation();
                        }),
                        p.container.addClass("mfp-s-" + t),
                        (m = t);
                }
            },
            _checkIfClose: function (t) {
                if (!$(t).hasClass(u)) {
                    var e = p.st.closeOnContentClick,
                        i = p.st.closeOnBgClick;
                    if (e && i) return !0;
                    if (!p.content || $(t).hasClass("mfp-close") || (p.preloader && t === p.preloader[0])) return !0;
                    if (t === p.content[0] || $.contains(p.content[0], t)) {
                        if (e) return !0;
                    } else if (i && $.contains(document, t)) return !0;
                    return !1;
                }
            },
            _addClassToMFP: function (t) {
                p.bgOverlay.addClass(t), p.wrap.addClass(t);
            },
            _removeClassFromMFP: function (t) {
                this.bgOverlay.removeClass(t), p.wrap.removeClass(t);
            },
            _hasScrollBar: function (t) {
                return (p.isIE7 ? v.height() : document.body.scrollHeight) > (t || g.height());
            },
            _setFocus: function () {
                (p.st.focus ? p.content.find(p.st.focus).eq(0) : p.wrap).focus();
            },
            _onFocusIn: function (t) {
                return t.target === p.wrap[0] || $.contains(p.wrap[0], t.target) ? void 0 : (p._setFocus(), !1);
            },
            _parseMarkup: function (t, e, i) {
                var n;
                i.data && (e = $.extend(i.data, e)),
                    T(o, [t, e, i]),
                    $.each(e, function (e, i) {
                        if (void 0 === i || i === !1) return !0;
                        if (((n = e.split("_")), n.length > 1)) {
                            var o = t.find(l + "-" + n[0]);
                            if (o.length > 0) {
                                var r = n[1];
                                "replaceWith" === r ? o[0] !== i[0] && o.replaceWith(i) : "img" === r ? (o.is("img") ? o.attr("src", i) : o.replaceWith($("<img>").attr("src", i).attr("class", o.attr("class")))) : o.attr(n[1], i);
                            }
                        } else t.find(l + "-" + e).html(i);
                    });
            },
            _getScrollbarSize: function () {
                if (void 0 === p.scrollbarSize) {
                    var t = document.createElement("div");
                    (t.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;"), document.body.appendChild(t), (p.scrollbarSize = t.offsetWidth - t.clientWidth), document.body.removeChild(t);
                }
                return p.scrollbarSize;
            },
        }),
            ($.magnificPopup = {
                instance: null,
                proto: f.prototype,
                modules: [],
                open: function (t, e) {
                    return S(), (t = t ? $.extend(!0, {}, t) : {}), (t.isObj = !0), (t.index = e || 0), this.instance.open(t);
                },
                close: function () {
                    return $.magnificPopup.instance && $.magnificPopup.instance.close();
                },
                registerModule: function (t, e) {
                    e.options && ($.magnificPopup.defaults[t] = e.options), $.extend(this.proto, e.proto), this.modules.push(t);
                },
                defaults: {
                    disableOn: 0,
                    key: null,
                    midClick: !1,
                    mainClass: "",
                    preloader: !0,
                    focus: "",
                    closeOnContentClick: !1,
                    closeOnBgClick: !0,
                    closeBtnInside: !0,
                    showCloseBtn: !0,
                    enableEscapeKey: !0,
                    modal: !1,
                    alignTop: !1,
                    removalDelay: 0,
                    prependTo: null,
                    fixedContentPos: "auto",
                    fixedBgPos: "auto",
                    overflowY: "auto",
                    closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
                    tClose: "Close (Esc)",
                    tLoading: "Loading...",
                    autoFocusLast: !0,
                },
            }),
            ($.fn.magnificPopup = function (t) {
                S();
                var e = $(this);
                if ("string" == typeof t)
                    if ("open" === t) {
                        var i,
                            n = h ? e.data("magnificPopup") : e[0].magnificPopup,
                            o = parseInt(arguments[1], 10) || 0;
                        n.items ? (i = n.items[o]) : ((i = e), n.delegate && (i = i.find(n.delegate)), (i = i.eq(o))), p._openClick({ mfpEl: i }, e, n);
                    } else p.isOpen && p[t].apply(p, Array.prototype.slice.call(arguments, 1));
                else (t = $.extend(!0, {}, t)), h ? e.data("magnificPopup", t) : (e[0].magnificPopup = t), p.addGroup(e, t);
                return e;
            });
        var A = "inline",
            _,
            L,
            I,
            O = function () {
                I && (L.after(I.addClass(_)).detach(), (I = null));
            };
        $.magnificPopup.registerModule(A, {
            options: { hiddenClass: "hide", markup: "", tNotFound: "Content not found" },
            proto: {
                initInline: function () {
                    p.types.push(A),
                        x(t + "." + A, function () {
                            O();
                        });
                },
                getInline: function (t, e) {
                    if ((O(), t.src)) {
                        var i = p.st.inline,
                            n = $(t.src);
                        if (n.length) {
                            var o = n[0].parentNode;
                            o && o.tagName && (L || ((_ = i.hiddenClass), (L = k(_)), (_ = "mfp-" + _)), (I = n.after(L).detach().removeClass(_))), p.updateStatus("ready");
                        } else p.updateStatus("error", i.tNotFound), (n = $("<div>"));
                        return (t.inlineElement = n), n;
                    }
                    return p.updateStatus("ready"), p._parseMarkup(e, {}, t), e;
                },
            },
        });
        var N = "ajax",
            j,
            P = function () {
                j && $(document.body).removeClass(j);
            },
            z = function () {
                P(), p.req && p.req.abort();
            };
        $.magnificPopup.registerModule(N, {
            options: { settings: null, cursor: "mfp-ajax-cur", tError: '<a href="%url%">The content</a> could not be loaded.' },
            proto: {
                initAjax: function () {
                    p.types.push(N), (j = p.st.ajax.cursor), x(t + "." + N, z), x("BeforeChange." + N, z);
                },
                getAjax: function (t) {
                    j && $(document.body).addClass(j), p.updateStatus("loading");
                    var e = $.extend(
                        {
                            url: t.src,
                            success: function (e, i, n) {
                                var o = { data: e, xhr: n };
                                T("ParseAjax", o),
                                    p.appendContent($(o.data), N),
                                    (t.finished = !0),
                                    P(),
                                    p._setFocus(),
                                    setTimeout(function () {
                                        p.wrap.addClass(c);
                                    }, 16),
                                    p.updateStatus("ready"),
                                    T("AjaxContentAdded");
                            },
                            error: function () {
                                P(), (t.finished = t.loadError = !0), p.updateStatus("error", p.st.ajax.tError.replace("%url%", t.src));
                            },
                        },
                        p.st.ajax.settings
                    );
                    return (p.req = $.ajax(e)), "";
                },
            },
        });
        var D,
            H = function (t) {
                if (t.data && void 0 !== t.data.title) return t.data.title;
                var e = p.st.image.titleSrc;
                if (e) {
                    if ($.isFunction(e)) return e.call(p, t);
                    if (t.el) return t.el.attr(e) || "";
                }
                return "";
            };
        $.magnificPopup.registerModule("image", {
            options: {
                markup:
                    '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
                cursor: "mfp-zoom-out-cur",
                titleSrc: "title",
                verticalFit: !0,
                tError: '<a href="%url%">The image</a> could not be loaded.',
            },
            proto: {
                initImage: function () {
                    var e = p.st.image,
                        i = ".image";
                    p.types.push("image"),
                        x(r + i, function () {
                            "image" === p.currItem.type && e.cursor && $(document.body).addClass(e.cursor);
                        }),
                        x(t + i, function () {
                            e.cursor && $(document.body).removeClass(e.cursor), g.off("resize" + l);
                        }),
                        x("Resize" + i, p.resizeImage),
                        p.isLowIE && x("AfterChange", p.resizeImage);
                },
                resizeImage: function () {
                    var t = p.currItem;
                    if (t && t.img && p.st.image.verticalFit) {
                        var e = 0;
                        p.isLowIE && (e = parseInt(t.img.css("padding-top"), 10) + parseInt(t.img.css("padding-bottom"), 10)), t.img.css("max-height", p.wH - e);
                    }
                },
                _onImageHasSize: function (t) {
                    t.img && ((t.hasSize = !0), D && clearInterval(D), (t.isCheckingImgSize = !1), T("ImageHasSize", t), t.imgHidden && (p.content && p.content.removeClass("mfp-loading"), (t.imgHidden = !1)));
                },
                findImageSize: function (t) {
                    var e = 0,
                        i = t.img[0],
                        n = function (o) {
                            D && clearInterval(D),
                                (D = setInterval(function () {
                                    return i.naturalWidth > 0 ? void p._onImageHasSize(t) : (e > 200 && clearInterval(D), e++, void (3 === e ? n(10) : 40 === e ? n(50) : 100 === e && n(500)));
                                }, o));
                        };
                    n(1);
                },
                getImage: function (t, e) {
                    var i = 0,
                        n = function () {
                            t &&
                                (t.img[0].complete
                                    ? (t.img.off(".mfploader"), t === p.currItem && (p._onImageHasSize(t), p.updateStatus("ready")), (t.hasSize = !0), (t.loaded = !0), T("ImageLoadComplete"))
                                    : (i++, 200 > i ? setTimeout(n, 100) : o()));
                        },
                        o = function () {
                            t && (t.img.off(".mfploader"), t === p.currItem && (p._onImageHasSize(t), p.updateStatus("error", r.tError.replace("%url%", t.src))), (t.hasSize = !0), (t.loaded = !0), (t.loadError = !0));
                        },
                        r = p.st.image,
                        s = e.find(".mfp-img");
                    if (s.length) {
                        var a = document.createElement("img");
                        (a.className = "mfp-img"),
                            t.el && t.el.find("img").length && (a.alt = t.el.find("img").attr("alt")),
                            (t.img = $(a).on("load.mfploader", n).on("error.mfploader", o)),
                            (a.src = t.src),
                            s.is("img") && (t.img = t.img.clone()),
                            (a = t.img[0]),
                            a.naturalWidth > 0 ? (t.hasSize = !0) : a.width || (t.hasSize = !1);
                    }
                    return (
                        p._parseMarkup(e, { title: H(t), img_replaceWith: t.img }, t),
                        p.resizeImage(),
                        t.hasSize
                            ? (D && clearInterval(D), t.loadError ? (e.addClass("mfp-loading"), p.updateStatus("error", r.tError.replace("%url%", t.src))) : (e.removeClass("mfp-loading"), p.updateStatus("ready")), e)
                            : (p.updateStatus("loading"), (t.loading = !0), t.hasSize || ((t.imgHidden = !0), e.addClass("mfp-loading"), p.findImageSize(t)), e)
                    );
                },
            },
        });
        var M,
            B = function () {
                return void 0 === M && (M = void 0 !== document.createElement("p").style.MozTransform), M;
            };
        $.magnificPopup.registerModule("zoom", {
            options: {
                enabled: !1,
                easing: "ease-in-out",
                duration: 300,
                opener: function (t) {
                    return t.is("img") ? t : t.find("img");
                },
            },
            proto: {
                initZoom: function () {
                    var i = p.st.zoom,
                        n = ".zoom",
                        o;
                    if (i.enabled && p.supportsTransition) {
                        var r = i.duration,
                            s = function (t) {
                                var e = t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                    n = "all " + i.duration / 1e3 + "s " + i.easing,
                                    o = { position: "fixed", zIndex: 9999, left: 0, top: 0, "-webkit-backface-visibility": "hidden" },
                                    r = "transition";
                                return (o["-webkit-" + r] = o["-moz-" + r] = o["-o-" + r] = o[r] = n), e.css(o), e;
                            },
                            a = function () {
                                p.content.css("visibility", "visible");
                            },
                            l,
                            c;
                        x("BuildControls" + n, function () {
                            if (p._allowZoom()) {
                                if ((clearTimeout(l), p.content.css("visibility", "hidden"), (o = p._getItemToZoom()), !o)) return void a();
                                (c = s(o)),
                                    c.css(p._getOffset()),
                                    p.wrap.append(c),
                                    (l = setTimeout(function () {
                                        c.css(p._getOffset(!0)),
                                            (l = setTimeout(function () {
                                                a(),
                                                    setTimeout(function () {
                                                        c.remove(), (o = c = null), T("ZoomAnimationEnded");
                                                    }, 16);
                                            }, r));
                                    }, 16));
                            }
                        }),
                            x(e + n, function () {
                                if (p._allowZoom()) {
                                    if ((clearTimeout(l), (p.st.removalDelay = r), !o)) {
                                        if (((o = p._getItemToZoom()), !o)) return;
                                        c = s(o);
                                    }
                                    c.css(p._getOffset(!0)),
                                        p.wrap.append(c),
                                        p.content.css("visibility", "hidden"),
                                        setTimeout(function () {
                                            c.css(p._getOffset());
                                        }, 16);
                                }
                            }),
                            x(t + n, function () {
                                p._allowZoom() && (a(), c && c.remove(), (o = null));
                            });
                    }
                },
                _allowZoom: function () {
                    return "image" === p.currItem.type;
                },
                _getItemToZoom: function () {
                    return p.currItem.hasSize ? p.currItem.img : !1;
                },
                _getOffset: function (t) {
                    var e;
                    e = t ? p.currItem.img : p.st.zoom.opener(p.currItem.el || p.currItem);
                    var i = e.offset(),
                        n = parseInt(e.css("padding-top"), 10),
                        o = parseInt(e.css("padding-bottom"), 10);
                    i.top -= $(window).scrollTop() - n;
                    var r = { width: e.width(), height: (h ? e.innerHeight() : e[0].offsetHeight) - o - n };
                    return B() ? (r["-moz-transform"] = r.transform = "translate(" + i.left + "px," + i.top + "px)") : ((r.left = i.left), (r.top = i.top)), r;
                },
            },
        });
        var R = "iframe",
            q = "//about:blank",
            W = function (t) {
                if (p.currTemplate[R]) {
                    var e = p.currTemplate[R].find("iframe");
                    e.length && (t || (e[0].src = q), p.isIE8 && e.css("display", t ? "block" : "none"));
                }
            };
        $.magnificPopup.registerModule(R, {
            options: {
                markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
                srcAction: "iframe_src",
                patterns: {
                    youtube: { index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1" },
                    vimeo: { index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1" },
                    gmaps: { index: "//maps.google.", src: "%id%&output=embed" },
                },
            },
            proto: {
                initIframe: function () {
                    p.types.push(R),
                        x("BeforeChange", function (t, e, i) {
                            e !== i && (e === R ? W() : i === R && W(!0));
                        }),
                        x(t + "." + R, function () {
                            W();
                        });
                },
                getIframe: function (t, e) {
                    var i = t.src,
                        n = p.st.iframe;
                    $.each(n.patterns, function () {
                        return i.indexOf(this.index) > -1 ? (this.id && (i = "string" == typeof this.id ? i.substr(i.lastIndexOf(this.id) + this.id.length, i.length) : this.id.call(this, i)), (i = this.src.replace("%id%", i)), !1) : void 0;
                    });
                    var o = {};
                    return n.srcAction && (o[n.srcAction] = i), p._parseMarkup(e, o, t), p.updateStatus("ready"), e;
                },
            },
        });
        var F = function (t) {
                var e = p.items.length;
                return t > e - 1 ? t - e : 0 > t ? e + t : t;
            },
            U = function (t, e, i) {
                return t.replace(/%curr%/gi, e + 1).replace(/%total%/gi, i);
            };
        $.magnificPopup.registerModule("gallery", {
            options: {
                enabled: !1,
                arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
                preload: [0, 2],
                navigateByImgClick: !0,
                arrows: !0,
                tPrev: "Previous (Left arrow key)",
                tNext: "Next (Right arrow key)",
                tCounter: "%curr% of %total%",
            },
            proto: {
                initGallery: function () {
                    var e = p.st.gallery,
                        i = ".mfp-gallery";
                    return (
                        (p.direction = !0),
                        e && e.enabled
                            ? ((b += " mfp-gallery"),
                              x(r + i, function () {
                                  e.navigateByImgClick &&
                                      p.wrap.on("click" + i, ".mfp-img", function () {
                                          return p.items.length > 1 ? (p.next(), !1) : void 0;
                                      }),
                                      v.on("keydown" + i, function (t) {
                                          37 === t.keyCode ? p.prev() : 39 === t.keyCode && p.next();
                                      });
                              }),
                              x("UpdateStatus" + i, function (t, e) {
                                  e.text && (e.text = U(e.text, p.currItem.index, p.items.length));
                              }),
                              x(o + i, function (t, i, n, o) {
                                  var r = p.items.length;
                                  n.counter = r > 1 ? U(e.tCounter, o.index, r) : "";
                              }),
                              x("BuildControls" + i, function () {
                                  if (p.items.length > 1 && e.arrows && !p.arrowLeft) {
                                      var t = e.arrowMarkup,
                                          i = (p.arrowLeft = $(t.replace(/%title%/gi, e.tPrev).replace(/%dir%/gi, "left")).addClass(u)),
                                          n = (p.arrowRight = $(t.replace(/%title%/gi, e.tNext).replace(/%dir%/gi, "right")).addClass(u));
                                      i.click(function () {
                                          p.prev();
                                      }),
                                          n.click(function () {
                                              p.next();
                                          }),
                                          p.container.append(i.add(n));
                                  }
                              }),
                              x(s + i, function () {
                                  p._preloadTimeout && clearTimeout(p._preloadTimeout),
                                      (p._preloadTimeout = setTimeout(function () {
                                          p.preloadNearbyImages(), (p._preloadTimeout = null);
                                      }, 16));
                              }),
                              void x(t + i, function () {
                                  v.off(i), p.wrap.off("click" + i), (p.arrowRight = p.arrowLeft = null);
                              }))
                            : !1
                    );
                },
                next: function () {
                    (p.direction = !0), (p.index = F(p.index + 1)), p.updateItemHTML();
                },
                prev: function () {
                    (p.direction = !1), (p.index = F(p.index - 1)), p.updateItemHTML();
                },
                goTo: function (t) {
                    (p.direction = t >= p.index), (p.index = t), p.updateItemHTML();
                },
                preloadNearbyImages: function () {
                    var t = p.st.gallery.preload,
                        e = Math.min(t[0], p.items.length),
                        i = Math.min(t[1], p.items.length),
                        n;
                    for (n = 1; n <= (p.direction ? i : e); n++) p._preloadItem(p.index + n);
                    for (n = 1; n <= (p.direction ? e : i); n++) p._preloadItem(p.index - n);
                },
                _preloadItem: function (t) {
                    if (((t = F(t)), !p.items[t].preloaded)) {
                        var e = p.items[t];
                        e.parsed || (e = p.parseEl(t)),
                            T("LazyLoad", e),
                            "image" === e.type &&
                                (e.img = $('<img class="mfp-img" />')
                                    .on("load.mfploader", function () {
                                        e.hasSize = !0;
                                    })
                                    .on("error.mfploader", function () {
                                        (e.hasSize = !0), (e.loadError = !0), T("LazyLoadError", e);
                                    })
                                    .attr("src", e.src)),
                            (e.preloaded = !0);
                    }
                },
            },
        });
        var X = "retina";
        $.magnificPopup.registerModule(X, {
            options: {
                replaceSrc: function (t) {
                    return t.src.replace(/\.\w+$/, function (t) {
                        return "@2x" + t;
                    });
                },
                ratio: 1,
            },
            proto: {
                initRetina: function () {
                    if (window.devicePixelRatio > 1) {
                        var t = p.st.retina,
                            e = t.ratio;
                        (e = isNaN(e) ? e() : e),
                            e > 1 &&
                                (x("ImageHasSize." + X, function (t, i) {
                                    i.img.css({ "max-width": i.img[0].naturalWidth / e, width: "100%" });
                                }),
                                x("ElementParse." + X, function (i, n) {
                                    n.src = t.replaceSrc(n, e);
                                }));
                    }
                },
            },
        }),
            S();
    }),
    (function (t) {
        var e;
        if ("object" == typeof exports) {
            try {
                e = require("jquery");
            } catch (i) {}
            module.exports = t(window, document, e);
        } else
            "function" == typeof define && define.amd
                ? define([], function () {
                      return t(window, document, window.jQuery);
                  })
                : (window.Dropkick = t(window, document, window.jQuery));
    })(function (t, e, i, n) {
        var o = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
            r = t.parent !== t.self,
            s = -1 !== navigator.appVersion.indexOf("MSIE"),
            a = function (i, n) {
                var o, r;
                if (this === t) return new a(i, n);
                for ("string" == typeof i && "#" === i[0] && (i = e.getElementById(i.substr(1))), o = 0; o < a.uid; o++) if (((r = a.cache[o]), r instanceof a && r.data.select === i)) return u.extend(r.data.settings, n), r;
                return i ? (i.length < 1 ? (console.error("You must have options inside your <select>: ", i), !1) : "SELECT" === i.nodeName ? this.init(i, n) : void 0) : (console.error("You must pass a select to DropKick"), !1);
            },
            l = function () {},
            c,
            d = { initialize: l, mobile: !1, change: l, open: l, close: l, search: "strict", bubble: !0 },
            u = {
                hasClass: function (t, e) {
                    var i = new RegExp("(^|\\s+)" + e + "(\\s+|$)");
                    return t && i.test(t.className);
                },
                addClass: function (t, e) {
                    t && !u.hasClass(t, e) && (t.className += " " + e);
                },
                removeClass: function (t, e) {
                    var i = new RegExp("(^|\\s+)" + e + "(\\s+|$)");
                    t && (t.className = t.className.replace(i, " "));
                },
                toggleClass: function (t, e) {
                    var i = u.hasClass(t, e) ? "remove" : "add";
                    u[i + "Class"](t, e);
                },
                extend: function (t) {
                    return (
                        Array.prototype.slice.call(arguments, 1).forEach(function (e) {
                            if (e) for (var i in e) t[i] = e[i];
                        }),
                        t
                    );
                },
                offset: function (i) {
                    var n = i.getBoundingClientRect() || { top: 0, left: 0 },
                        o = e.documentElement,
                        r = s ? o.scrollTop : t.pageYOffset,
                        a = s ? o.scrollLeft : t.pageXOffset;
                    return { top: n.top + r - o.clientTop, left: n.left + a - o.clientLeft };
                },
                position: function (t, e) {
                    for (var i = { top: 0, left: 0 }; t && t !== e; ) (i.top += t.offsetTop), (i.left += t.offsetLeft), (t = t.parentNode);
                    return i;
                },
                closest: function (t, e) {
                    for (; t; ) {
                        if (t === e) return t;
                        t = t.parentNode;
                    }
                    return !1;
                },
                create: function (t, i) {
                    var n,
                        o = e.createElement(t);
                    i || (i = {});
                    for (n in i) i.hasOwnProperty(n) && ("innerHTML" === n ? (o.innerHTML = i[n]) : o.setAttribute(n, i[n]));
                    return o;
                },
                deferred: function (e) {
                    return function () {
                        var i = arguments,
                            n = this;
                        t.setTimeout(function () {
                            e.apply(n, i);
                        }, 1);
                    };
                },
            };
        return (
            (a.cache = {}),
            (a.uid = 0),
            (a.prototype = {
                add: function (t, i) {
                    var n, o, r;
                    "string" == typeof t && ((n = t), (t = e.createElement("option")), (t.text = n)),
                        "OPTION" === t.nodeName &&
                            ((o = u.create("li", { class: "dk-option", "data-value": t.value, innerHTML: t.text, role: "option", "aria-selected": "false", id: "dk" + this.data.cacheID + "-" + (t.id || t.value.replace(" ", "-")) })),
                            u.addClass(o, t.className),
                            (this.length += 1),
                            t.disabled && (u.addClass(o, "dk-option-disabled"), o.setAttribute("aria-disabled", "true")),
                            t.hidden && (u.addClass(o, "dk-option-hidden"), o.setAttribute("aria-hidden", "true")),
                            this.data.select.add(t, i),
                            "number" == typeof i && (i = this.item(i)),
                            (r = this.options.indexOf(i)),
                            r > -1 ? (i.parentNode.insertBefore(o, i), this.options.splice(r, 0, o)) : (this.data.elem.lastChild.appendChild(o), this.options.push(o)),
                            o.addEventListener("mouseover", this),
                            t.selected && this.select(r));
                },
                item: function (t) {
                    return (t = 0 > t ? this.options.length + t : t), this.options[t] || null;
                },
                remove: function (t) {
                    var e = this.item(t);
                    e.parentNode.removeChild(e), this.options.splice(t, 1), this.data.select.remove(t), this.select(this.data.select.selectedIndex), (this.length -= 1);
                },
                init: function (t, i) {
                    var n,
                        s = a.build(t, "dk" + a.uid);
                    if (
                        ((this.data = {}),
                        (this.data.select = t),
                        (this.data.elem = s.elem),
                        (this.data.settings = u.extend({}, d, i)),
                        (this.disabled = t.disabled),
                        (this.form = t.form),
                        (this.length = t.length),
                        (this.multiple = t.multiple),
                        (this.options = s.options.slice(0)),
                        (this.selectedIndex = t.selectedIndex),
                        (this.selectedOptions = s.selected.slice(0)),
                        (this.value = t.value),
                        (this.data.cacheID = a.uid),
                        (a.cache[this.data.cacheID] = this),
                        this.data.settings.initialize.call(this),
                        (a.uid += 1),
                        this._changeListener || (t.addEventListener("change", this), (this._changeListener = !0)),
                        !o || this.data.settings.mobile)
                    ) {
                        if (
                            (t.parentNode.insertBefore(this.data.elem, t),
                            t.setAttribute("data-dkCacheId", this.data.cacheID),
                            this.data.elem.addEventListener("click", this),
                            this.data.elem.addEventListener("keydown", this),
                            this.data.elem.addEventListener("keypress", this),
                            this.form && this.form.addEventListener("reset", this),
                            !this.multiple)
                        )
                            for (n = 0; n < this.options.length; n++) this.options[n].addEventListener("mouseover", this);
                        c || (e.addEventListener("click", a.onDocClick), r && parent.document.addEventListener("click", a.onDocClick), (c = !0));
                    }
                    return this;
                },
                close: function () {
                    var t,
                        e = this.data.elem;
                    if (!this.isOpen || this.multiple) return !1;
                    for (t = 0; t < this.options.length; t++) u.removeClass(this.options[t], "dk-option-highlight");
                    e.lastChild.setAttribute("aria-expanded", "false"), u.removeClass(e.lastChild, "dk-select-options-highlight"), u.removeClass(e, "dk-select-open-(up|down)"), (this.isOpen = !1), this.data.settings.close.call(this);
                },
                open: u.deferred(function () {
                    var i,
                        o,
                        r,
                        s,
                        a,
                        l,
                        c = this.data.elem,
                        d = c.lastChild,
                        p = t.pageXOffset !== n,
                        f = "CSS1Compat" === (e.compatMode || ""),
                        h = p ? t.pageYOffset : f ? e.documentElement.scrollTop : e.body.scrollTop;
                    return (
                        (a = u.offset(c).top - h),
                        (l = t.innerHeight - (a + c.offsetHeight)),
                        this.isOpen || this.multiple
                            ? !1
                            : ((d.style.display = "block"),
                              (i = d.offsetHeight),
                              (d.style.display = ""),
                              (o = a > i),
                              (r = l > i),
                              (s = o && !r ? "-up" : "-down"),
                              (this.isOpen = !0),
                              u.addClass(c, "dk-select-open" + s),
                              d.setAttribute("aria-expanded", "true"),
                              this._scrollTo(this.options.length - 1),
                              this._scrollTo(this.selectedIndex),
                              void this.data.settings.open.call(this))
                    );
                }),
                disable: function (t, e) {
                    var i = "dk-option-disabled";
                    (0 === arguments.length || "boolean" == typeof t) && ((e = t === n ? !0 : !1), (t = this.data.elem), (i = "dk-select-disabled"), (this.disabled = e)),
                        e === n && (e = !0),
                        "number" == typeof t && (t = this.item(t)),
                        e ? (t.setAttribute("aria-disabled", !0), u.addClass(t, i)) : (t.setAttribute("aria-disabled", !1), u.removeClass(t, i));
                },
                hide: function (t, e) {
                    var i = "dk-option-hidden";
                    e === n && (e = !0), (t = this.item(t)), e ? (t.setAttribute("aria-hidden", !0), u.addClass(t, i)) : (t.setAttribute("aria-hidden", !1), u.removeClass(t, i));
                },
                select: function (t, e) {
                    var i,
                        n,
                        o,
                        r,
                        s = this.data.select;
                    if (("number" == typeof t && (t = this.item(t)), "string" == typeof t)) for (i = 0; i < this.length; i++) this.options[i].getAttribute("data-value") === t && (t = this.options[i]);
                    return !t || "string" == typeof t || (!e && u.hasClass(t, "dk-option-disabled"))
                        ? !1
                        : u.hasClass(t, "dk-option")
                        ? ((n = this.options.indexOf(t)),
                          (o = s.options[n]),
                          this.multiple
                              ? (u.toggleClass(t, "dk-option-selected"),
                                (o.selected = !o.selected),
                                u.hasClass(t, "dk-option-selected")
                                    ? (t.setAttribute("aria-selected", "true"), this.selectedOptions.push(t))
                                    : (t.setAttribute("aria-selected", "false"), (n = this.selectedOptions.indexOf(t)), this.selectedOptions.splice(n, 1)))
                              : ((r = this.data.elem.firstChild),
                                this.selectedOptions.length && (u.removeClass(this.selectedOptions[0], "dk-option-selected"), this.selectedOptions[0].setAttribute("aria-selected", "false")),
                                u.addClass(t, "dk-option-selected"),
                                t.setAttribute("aria-selected", "true"),
                                r.setAttribute("aria-activedescendant", t.id),
                                (r.className = "dk-selected " + o.className),
                                (r.innerHTML = o.text),
                                (this.selectedOptions[0] = t),
                                (o.selected = !0)),
                          (this.selectedIndex = s.selectedIndex),
                          (this.value = s.value),
                          e || this.data.select.dispatchEvent(new CustomEvent("change", { bubbles: this.data.settings.bubble })),
                          t)
                        : void 0;
                },
                selectOne: function (t, e) {
                    return this.reset(!0), this._scrollTo(t), this.select(t, e);
                },
                search: function (t, e) {
                    var i,
                        n,
                        o,
                        r,
                        s,
                        a,
                        l,
                        c,
                        d = this.data.select.options,
                        u = [];
                    if (!t) return this.options;
                    for (e = e ? e.toLowerCase() : "strict", e = "fuzzy" === e ? 2 : "partial" === e ? 1 : 0, c = new RegExp((e ? "" : "^") + t, "i"), i = 0; i < d.length; i++)
                        if (((o = d[i].text.toLowerCase()), 2 == e)) {
                            for (n = t.toLowerCase().split(""), r = s = a = l = 0; s < o.length; ) o[s] === n[r] ? ((a += 1 + a), r++) : (a = 0), (l += a), s++;
                            r === n.length && u.push({ e: this.options[i], s: l, i: i });
                        } else c.test(o) && u.push(this.options[i]);
                    return (
                        2 === e &&
                            (u = u
                                .sort(function (t, e) {
                                    return e.s - t.s || t.i - e.i;
                                })
                                .reduce(function (t, e) {
                                    return (t[t.length] = e.e), t;
                                }, [])),
                        u
                    );
                },
                focus: function () {
                    this.disabled || (this.multiple ? this.data.elem : this.data.elem.children[0]).focus();
                },
                reset: function (t) {
                    var e,
                        i = this.data.select;
                    for (this.selectedOptions.length = 0, e = 0; e < i.options.length; e++)
                        (i.options[e].selected = !1), u.removeClass(this.options[e], "dk-option-selected"), this.options[e].setAttribute("aria-selected", "false"), !t && i.options[e].defaultSelected && this.select(e, !0);
                    this.selectedOptions.length || this.multiple || this.select(0, !0);
                },
                refresh: function () {
                    Object.keys(this).length > 0 && (!o || this.data.settings.mobile) && this.dispose().init(this.data.select, this.data.settings);
                },
                dispose: function () {
                    return (
                        Object.keys(this).length > 0 && (!o || this.data.settings.mobile) && (delete a.cache[this.data.cacheID], this.data.elem.parentNode.removeChild(this.data.elem), this.data.select.removeAttribute("data-dkCacheId")),
                        this
                    );
                },
                handleEvent: function (t) {
                    if (!this.disabled)
                        switch (t.type) {
                            case "click":
                                this._delegate(t);
                                break;
                            case "keydown":
                                this._keyHandler(t);
                                break;
                            case "keypress":
                                this._searchOptions(t);
                                break;
                            case "mouseover":
                                this._highlight(t);
                                break;
                            case "reset":
                                this.reset();
                                break;
                            case "change":
                                this.data.settings.change.call(this);
                        }
                },
                _delegate: function (e) {
                    var i,
                        n,
                        o,
                        r,
                        s = e.target;
                    if (u.hasClass(s, "dk-option-disabled")) return !1;
                    if (this.multiple) {
                        if (u.hasClass(s, "dk-option"))
                            if (((i = t.getSelection()), "Range" === i.type && i.collapseToStart(), e.shiftKey))
                                if (
                                    ((o = this.options.indexOf(this.selectedOptions[0])),
                                    (r = this.options.indexOf(this.selectedOptions[this.selectedOptions.length - 1])),
                                    (n = this.options.indexOf(s)),
                                    n > o && r > n && (n = o),
                                    n > r && r > o && (r = o),
                                    this.reset(!0),
                                    r > n)
                                )
                                    for (; r + 1 > n; ) this.select(n++);
                                else for (; n > r - 1; ) this.select(n--);
                            else e.ctrlKey || e.metaKey ? this.select(s) : (this.reset(!0), this.select(s));
                    } else this[this.isOpen ? "close" : "open"](), u.hasClass(s, "dk-option") && this.select(s);
                },
                _highlight: function (t) {
                    var e,
                        i = t.target;
                    if (!this.multiple) {
                        for (e = 0; e < this.options.length; e++) u.removeClass(this.options[e], "dk-option-highlight");
                        u.addClass(this.data.elem.lastChild, "dk-select-options-highlight"), u.addClass(i, "dk-option-highlight");
                    }
                },
                _keyHandler: function (t) {
                    var e,
                        i,
                        n = this.selectedOptions,
                        o = this.options,
                        r = 1,
                        s = { tab: 9, enter: 13, esc: 27, space: 32, up: 38, down: 40 };
                    switch (t.keyCode) {
                        case s.up:
                            r = -1;
                        case s.down:
                            if ((t.preventDefault(), (e = n[n.length - 1]), u.hasClass(this.data.elem.lastChild, "dk-select-options-highlight")))
                                for (u.removeClass(this.data.elem.lastChild, "dk-select-options-highlight"), i = 0; i < o.length; i++) u.hasClass(o[i], "dk-option-highlight") && (u.removeClass(o[i], "dk-option-highlight"), (e = o[i]));
                            (r = o.indexOf(e) + r), r > o.length - 1 ? (r = o.length - 1) : 0 > r && (r = 0), this.data.select.options[r].disabled || (this.reset(!0), this.select(r), this._scrollTo(r));
                            break;
                        case s.space:
                            if (!this.isOpen) {
                                t.preventDefault(), this.open();
                                break;
                            }
                        case s.tab:
                        case s.enter:
                            for (r = 0; r < o.length; r++) u.hasClass(o[r], "dk-option-highlight") && this.select(r);
                        case s.esc:
                            this.isOpen && (t.preventDefault(), this.close());
                    }
                },
                _searchOptions: function (t) {
                    var e,
                        i = this,
                        o = String.fromCharCode(t.keyCode || t.which),
                        r = function () {
                            i.data.searchTimeout && clearTimeout(i.data.searchTimeout),
                                (i.data.searchTimeout = setTimeout(function () {
                                    i.data.searchString = "";
                                }, 1e3));
                        };
                    this.data.searchString === n && (this.data.searchString = ""),
                        r(),
                        (this.data.searchString += o),
                        (e = this.search(this.data.searchString, this.data.settings.search)),
                        e.length && (u.hasClass(e[0], "dk-option-disabled") || this.selectOne(e[0]));
                },
                _scrollTo: function (t) {
                    var e,
                        i,
                        n,
                        o = this.data.elem.lastChild;
                    return -1 === t || ("number" != typeof t && !t) || (!this.isOpen && !this.multiple)
                        ? !1
                        : ("number" == typeof t && (t = this.item(t)),
                          (e = u.position(t, o).top),
                          (i = e - o.scrollTop),
                          (n = i + t.offsetHeight),
                          void (n > o.offsetHeight ? ((e += t.offsetHeight), (o.scrollTop = e - o.offsetHeight)) : 0 > i && (o.scrollTop = e)));
                },
            }),
            (a.build = function (t, e) {
                var i,
                    n,
                    o,
                    r = [],
                    s = { elem: null, options: [], selected: [] },
                    a = function (t) {
                        var i,
                            n,
                            o,
                            r,
                            l = [];
                        switch (t.nodeName) {
                            case "OPTION":
                                (i = u.create("li", { class: "dk-option ", "data-value": t.value, innerHTML: t.text, role: "option", "aria-selected": "false", id: e + "-" + (t.id || t.value.replace(" ", "-")) })),
                                    u.addClass(i, t.className),
                                    t.disabled && (u.addClass(i, "dk-option-disabled"), i.setAttribute("aria-disabled", "true")),
                                    t.hidden && (u.addClass(i, "dk-option-hidden"), i.setAttribute("aria-hidden", "true")),
                                    t.selected && (u.addClass(i, "dk-option-selected"), i.setAttribute("aria-selected", "true"), s.selected.push(i)),
                                    s.options.push(this.appendChild(i));
                                break;
                            case "OPTGROUP":
                                for (
                                    n = u.create("li", { class: "dk-optgroup" }),
                                        t.label && n.appendChild(u.create("div", { class: "dk-optgroup-label", innerHTML: t.label })),
                                        o = u.create("ul", { class: "dk-optgroup-options" }),
                                        r = t.children.length;
                                    r--;
                                    l.unshift(t.children[r])
                                );
                                l.forEach(a, o), this.appendChild(n).appendChild(o);
                        }
                    };
                for (
                    s.elem = u.create("div", { class: "dk-select" + (t.multiple ? "-multi" : "") }),
                        n = u.create("ul", { class: "dk-select-options", id: e + "-listbox", role: "listbox" }),
                        t.disabled && (u.addClass(s.elem, "dk-select-disabled"), s.elem.setAttribute("aria-disabled", !0)),
                        s.elem.id = e + (t.id ? "-" + t.id : ""),
                        u.addClass(s.elem, t.className),
                        t.multiple
                            ? (s.elem.setAttribute("tabindex", t.getAttribute("tabindex") || "0"), n.setAttribute("aria-multiselectable", "true"))
                            : ((i = t.options[t.selectedIndex]),
                              s.elem.appendChild(
                                  u.create("div", { class: "dk-selected " + i.className, tabindex: t.tabindex || 0, innerHTML: i ? i.text : "&nbsp;", id: e + "-combobox", "aria-live": "assertive", "aria-owns": n.id, role: "combobox" })
                              ),
                              n.setAttribute("aria-expanded", "false")),
                        o = t.children.length;
                    o--;
                    r.unshift(t.children[o])
                );
                return r.forEach(a, s.elem.appendChild(n)), s;
            }),
            (a.onDocClick = function (t) {
                var e, i;
                if (1 !== t.target.nodeType) return !1;
                null !== (e = t.target.getAttribute("data-dkcacheid")) && a.cache[e].focus();
                for (i in a.cache) u.closest(t.target, a.cache[i].data.elem) || i === e || a.cache[i].disabled || a.cache[i].close();
            }),
            i !== n &&
                (i.fn.dropkick = function () {
                    var t = Array.prototype.slice.call(arguments);
                    return i(this).each(function () {
                        t[0] && "object" != typeof t[0] ? "string" == typeof t[0] && a.prototype[t[0]].apply(new a(this), t.slice(1)) : new a(this, t[0] || {});
                    });
                }),
            a
        );
    }),
    (function ($, t, e, i) {
        var n = $(t);
        ($.fn.lazyload = function (o) {
            function r() {
                var t = 0;
                s.each(function () {
                    var e = $(this);
                    if (!l.skip_invisible || e.is(":visible"))
                        if ($.abovethetop(this, l) || $.leftofbegin(this, l));
                        else if ($.belowthefold(this, l) || $.rightoffold(this, l)) {
                            if (++t > l.failure_limit) return !1;
                        } else e.trigger("appear"), (t = 0);
                });
            }
            var s = this,
                a,
                l = {
                    threshold: 0,
                    failure_limit: 0,
                    event: "scroll",
                    effect: "show",
                    container: t,
                    data_attribute: "original",
                    skip_invisible: !1,
                    appear: null,
                    load: null,
                    placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",
                };
            return (
                o && (i !== o.failurelimit && ((o.failure_limit = o.failurelimit), delete o.failurelimit), i !== o.effectspeed && ((o.effect_speed = o.effectspeed), delete o.effectspeed), $.extend(l, o)),
                (a = l.container === i || l.container === t ? n : $(l.container)),
                0 === l.event.indexOf("scroll") &&
                    a.on(l.event, function () {
                        return r();
                    }),
                this.each(function () {
                    var t = this,
                        e = $(t);
                    (t.loaded = !1),
                        (e.attr("src") === i || e.attr("src") === !1) && e.is("img") && e.attr("src", l.placeholder),
                        e.one("appear", function () {
                            if (!this.loaded) {
                                if (l.appear) {
                                    var i = s.length;
                                    l.appear.call(t, i, l);
                                }
                                $("<img />")
                                    .one("load", function () {
                                        var i = e.attr("data-" + l.data_attribute);
                                        e.hide(), e.is("img") ? e.attr("src", i) : e.css("background-image", "url('" + i + "')"), e[l.effect](l.effect_speed), (t.loaded = !0);
                                        var n = $.grep(s, function (t) {
                                            return !t.loaded;
                                        });
                                        if (((s = $(n)), l.load)) {
                                            var o = s.length;
                                            l.load.call(t, o, l);
                                        }
                                    })
                                    .attr("src", e.attr("data-" + l.data_attribute));
                            }
                        }),
                        0 !== l.event.indexOf("scroll") &&
                            e.on(l.event, function () {
                                t.loaded || e.trigger("appear");
                            });
                }),
                n.on("resize", function () {
                    r();
                }),
                /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) &&
                    n.on("pageshow", function (t) {
                        t.originalEvent &&
                            t.originalEvent.persisted &&
                            s.each(function () {
                                $(this).trigger("appear");
                            });
                    }),
                $(e).ready(function () {
                    r();
                }),
                this
            );
        }),
            ($.belowthefold = function (e, o) {
                var r;
                return (r = o.container === i || o.container === t ? (t.innerHeight ? t.innerHeight : n.height()) + n.scrollTop() : $(o.container).offset().top + $(o.container).height()), r <= $(e).offset().top - o.threshold;
            }),
            ($.rightoffold = function (e, o) {
                var r;
                return (r = o.container === i || o.container === t ? n.width() + n.scrollLeft() : $(o.container).offset().left + $(o.container).width()), r <= $(e).offset().left - o.threshold;
            }),
            ($.abovethetop = function (e, o) {
                var r;
                return (r = o.container === i || o.container === t ? n.scrollTop() : $(o.container).offset().top), r >= $(e).offset().top + o.threshold + $(e).height();
            }),
            ($.leftofbegin = function (e, o) {
                var r;
                return (r = o.container === i || o.container === t ? n.scrollLeft() : $(o.container).offset().left), r >= $(e).offset().left + o.threshold + $(e).width();
            }),
            ($.inviewport = function (t, e) {
                return !($.rightoffold(t, e) || $.leftofbegin(t, e) || $.belowthefold(t, e) || $.abovethetop(t, e));
            }),
            $.extend($.expr[":"], {
                "below-the-fold": function (t) {
                    return $.belowthefold(t, { threshold: 0 });
                },
                "above-the-top": function (t) {
                    return !$.belowthefold(t, { threshold: 0 });
                },
                "right-of-screen": function (t) {
                    return $.rightoffold(t, { threshold: 0 });
                },
                "left-of-screen": function (t) {
                    return !$.rightoffold(t, { threshold: 0 });
                },
                "in-viewport": function (t) {
                    return $.inviewport(t, { threshold: 0 });
                },
                "above-the-fold": function (t) {
                    return !$.belowthefold(t, { threshold: 0 });
                },
                "right-of-fold": function (t) {
                    return $.rightoffold(t, { threshold: 0 });
                },
                "left-of-fold": function (t) {
                    return !$.rightoffold(t, { threshold: 0 });
                },
            });
    })(jQuery, window, document),
    jQuery(document).ready(function ($) {
        function t() {
            $(".modal").css({ position: "fixed", left: ($(window).width() - $(".modal").outerWidth()) / 2, top: ($(window).height() - $(".modal").outerHeight()) / 2 });
        }
        function e() {
            var t = $(".gallery-item").width();
            $(".gallery-item a").css("height", t);
        }
        function i() {
            $(".social-buttons .twitter-wrap").sharrre({
                share: { twitter: !0 },
                template: '<div class="twitter"><i class="fa fa-twitter"></i></div>',
                enableHover: !1,
                enableTracking: !1,
                buttons: { twitter: {} },
                click: function (t, e) {
                    t.openPopup("twitter");
                },
            }),
                $(".social-buttons .facebook-wrap").sharrre({
                    share: { facebook: !0 },
                    template: '<div class="facebook"><i class="fa fa-facebook"></i></div>',
                    enableHover: !1,
                    enableTracking: !1,
                    buttons: { facebook: {} },
                    click: function (t, e) {
                        t.openPopup("facebook");
                    },
                });
        }
        $("#nav-activate").sidr({ name: "mobile-nav", side: "left", source: "#mobile-navigation", speed: 150, rename: !1, displace: !1 }),
            $("ul.sidr-class-sub-menu").hide(),
            $("li.sidr-class-menu-item-has-children > a").on("click", function (t) {
                t.preventDefault(), $(this).toggleClass("is-open"), $(this).next("ul.sidr-class-sub-menu").slideToggle();
            }),
            $("a#end-user").on("click", function () {
                docCookies.setItem("user_type", "end-user", 2592e3, "/");
            }),
            $("a#specifier").on("click", function () {
                docCookies.setItem("user_type", "specifier", 2592e3, "/");
            });
        var n = docCookies.getItem("user_type");
        "end-user" === n
            ? ($(".specifier-content").hide(), $(".end-user-content").show())
            : "specifier" === n
            ? ($(".specifier-content").show(), $(".end-user-content").hide())
            : ($(".specifier-content").hide(), $(".end-user-content").show()),
            $('#mobile-navigation a[href$="http://cafeteriarescue.com/"]').on("click", function (t) {
                t.preventDefault(),
                    $("#page-mask").show(),
                    $(".modal.caf-rescue").show(),
                    setTimeout(function () {
                        $("#page-mask").css("opacity", "1"), $(".modal.caf-rescue").css("opacity", "1");
                    }, 10);
            }),
            $("li.whats-new a, li.sidr-class-whats-new a").on("click", function (t) {
                t.preventDefault(),
                    $.sidr("close", "mobile-nav"),
                    $("#page-mask").show(),
                    $(".modal.whats-new").show(),
                    setTimeout(function () {
                        $("#page-mask").css("opacity", "1"), $(".modal.whats-new").css("opacity", "1");
                    }, 10);
            }),
            $("#modal-close").on("click", function (t) {
                t.preventDefault(),
                    $("#page-mask").css("opacity", "0"),
                    $(".modal").css("opacity", "0"),
                    setTimeout(function () {
                        $("#page-mask").hide(), $(".modal").hide();
                    }, 10);
            }),
            t(),
            $(window).resize(t),
            $("#search-activate").on("click", function (t) {
                t.preventDefault(), $("#searchform").toggle(), $(this).toggleClass("active");
            }),
            $("#page-mask").on("click", function () {
                $(this).hide(), $(".modal").hide();
            }),
            $("#slider").slick({
                infinite: !0,
                slide: ".slide",
                arrows: !0,
                appendArrows: "#slider .slider-nav",
                centerMode: !0,
                focusOnSelect: !0,
                variableWidth: !0,
                autoplay: !0,
                lazyLoad: "ondemand",
                speed: 300,
                responsive: [{ breakpoint: "1025", settings: { infinite: !0, slide: ".slide", arrows: !1, centerMode: !1, variableWidth: !1 } }],
            }),
            $("#case-study-slider").slick({ infinite: !0, slide: ".case-study", arrows: !0, prevArrow: $(".case-study-slider-prev"), nextArrow: $(".case-study-slider-next"), fade: !0 }),
            $(".horizontal-nav a").click(function () {
                return $("html, body").animate({ scrollTop: $($.attr(this, "href")).offset().top }, 500), !1;
            }),
            e(),
            $(window).resize(function () {
                e();
            }),
            $(".gallery-item").lazyload({ effect: "fadeIn" });
        var o = $(".gallery-items").imagesLoaded(function () {
                o.isotope({ itemSelector: ".gallery-item", layoutMode: "fitRows" });
            }),
            r = $(".grid-view").imagesLoaded(function () {
                r.isotope({ itemSelector: ".item" });
            });
        $(".sub-filter").hide(),
            $(".top-level").on("click", function (t) {
                t.preventDefault(), o.isotope({ filter: "*" });
                var e = $(this).attr("id");
                $(".sub-filter").hide(),
                    $("#" + e + "-filters").show(),
                    $(".top-level").removeClass("active"),
                    $(this).addClass("active"),
                    $(".filters li a").removeClass("active"),
                    $("#" + e + "-filters li:first-of-type a").addClass("active");
            }),
            $(".filters li a").on("click", function (t) {
                t.preventDefault();
                var e = $(this).attr("data-option-value");
                o.isotope({ filter: e }), $(".filters li a").removeClass("active"), $(this).addClass("active");
            }),
            $(".gallery-item a").on("click", function (t) {
                var e = $(this).attr("data-url"),
                    n = $(this).attr("data-text"),
                    o = $(this).attr("data-title"),
                    r = $(this).attr("data-pid");
                t.preventDefault(),
                    $(this).magnificPopup({
                        image: {
                            titleSrc: function () {
                                return (
                                    '<div class="details-link"><a class="project-link" href="#">Project Details</a></div><div class="social-buttons"><div class="box"><div class="middle"><div class="twitter-wrap"></div><div class="facebook-wrap"></div></div><div class="left">Share</div></div><div><a class="gpimb-btn gpimb-btn-addto" data-pid="' +
                                    r +
                                    '" href="#">Add to Mood Book <i class="fa fa-chevron-right"></i></a>&nbsp;<a class="gpimb-btn gpimb-btn-view" data-href="moodbook/yours/" href="moodbook/yours/">View Mood Book <i class="fa fa-chevron-right"></i></a></div></div>'
                                );
                            },
                        },
                        gallery: { enabled: !0, preload: [0, 4] },
                        type: "image",
                        mainClass: "mfp-with-zoom mfp-img-mobile",
                        callbacks: {
                            open: function () {
                                $(".details-link a").attr("href", e),
                                    $(".details-link a").text(o),
                                    $(".social-buttons .facebook-wrap").attr("data-url", e),
                                    $(".social-buttons .facebook-wrap").attr("data-text", n),
                                    $(".social-buttons .facebook-wrap").attr("data-title", o),
                                    $(".social-buttons .twitter-wrap").attr("data-url", e),
                                    $(".social-buttons .twitter-wrap").attr("data-text", n),
                                    $(".social-buttons .twitter-wrap").attr("data-title", o),
                                    i();
                            },
                        },
                    });
            }),
            $(".back-to-top").on("click", function (t) {
                return t.preventDefault(), $("html, body").animate({ scrollTop: 0 }, "slow"), !1;
            }),
            $(".filters-specsheets").change(function (t) {
                t.preventDefault();
                var e = $(this).find("option:selected").val();
                r.isotope({ filter: e });
            }),
            $(".filters-specsheets").dropkick({
                mobile: !0,
                change: function (t, e) {
                    "" != t && ($("#dk1-timescale").addClass("valid").removeClass("error"), $("#dk1-timescale .dk-selected").removeClass("dk-selected-disabled"));
                },
            }),
            $(".dk-selected").addClass("dk-selected-disabled");
    });
