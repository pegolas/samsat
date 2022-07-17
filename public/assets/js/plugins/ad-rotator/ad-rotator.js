! function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.rotator = t() : e.rotator = t()
}(this, (function () {
    return (() => {
        "use strict";
        var e, t = {
                379: (e, t, n) => {
                    n.d(t, {
                        rotator: () => f
                    });
                    const o = (...e) => {};
                    var i = function (e, t, n, o) {
                        return new(n || (n = Promise))((function (i, r) {
                            function s(e) {
                                try {
                                    a(o.next(e))
                                } catch (e) {
                                    r(e)
                                }
                            }

                            function l(e) {
                                try {
                                    a(o.throw(e))
                                } catch (e) {
                                    r(e)
                                }
                            }

                            function a(e) {
                                var t;
                                e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                                    e(t)
                                }))).then(s, l)
                            }
                            a((o = o.apply(e, t || [])).next())
                        }))
                    };
                    const r = "mobile",
                        s = "desktop",
                        l = window.screen.availWidth >= 992 ? s : r;
                    let a;
                    const c = {
                            target: "all",
                            timer: 5,
                            random: !0,
                            newTab: !1,
                            fallbackMode: !1
                        },
                        d = e => {
                            const t = e.reduce(((e, t) => e + (t.weight || 1)), 0);
                            let n = 0;
                            const o = e.map((e => {
                                    const o = (e.weight || 1) / t,
                                        i = o + n;
                                    return n += o, i
                                })),
                                i = Math.random();
                            let r = 0;
                            for (let e = 0, t = o.length; e < t; e++)
                                if (i <= o[e]) {
                                    r = e;
                                    break
                                } return r
                        },
                        u = (e, t, n, r, s = {}) => i(void 0, void 0, void 0, (function* () {
                            let i;
                            if (n.random) {
                                let e = 1 === r.length ? 0 : d(r);
                                for (; r.length > 1 && s.img === r[e].img;) e = d(r);
                                i = r[e], 1 !== r.length ? r.splice(e, 1) : r = JSON.parse(JSON.stringify(t))
                            } else i = r.shift(), r.length || (r = JSON.parse(JSON.stringify(t)));
                            const l = document.createElement("a");
                            l.href = i.url || "", l.setAttribute("rel", "noopener nofollow noreferrer"), n.linkClass && l.classList.add(n.linkClass), n.newTab && l.setAttribute("target", "_blank"), l.addEventListener("click", (e => {
                                (n.onClick || o)(e, i)
                            }));
                            const a = document.createElement("img");
                            return a.src = i.img, a.classList.add("fadeIn"), n.imgClass && a.classList.add(n.imgClass), i.title && (l.setAttribute("title", `${i.title}`), l.setAttribute("aria-label", `${i.title}`), a.setAttribute("alt", `${i.title}`)), yield(900, new Promise((e => setTimeout(e, 900)))), l.appendChild(a), e.innerHTML = "", e.appendChild(l), (n.cb || o)(i, e, n), {
                                unitsClone: r,
                                prevItem: i
                            }
                        })),
                        f = (e, t = [], n = {}) => {
                            let d = !1;
                            const f = Object.assign(Object.assign({}, c), n);
                            let m, p;
                            e && e instanceof HTMLElement && t && t instanceof Array && t.length && t[0] instanceof Object && t[0].url && t[0].img && !isNaN(f.timer) || (d = !0, console.error("Missing/malformed params - El, Units, Config", e, t, f));
                            let v = null;
                            t.sort(((e, t) => +(t.weight || 1) - +(e.weight || 1)));
                            let h = JSON.parse(JSON.stringify(t));
                            const b = {
                                    scrollEvRef: null,
                                    obs: null,
                                    init() {
                                        this.destroy(), e.addEventListener("mouseenter", (() => {
                                            g.pause(), (f.onHover || o)(v, e)
                                        })), e.addEventListener("mouseleave", (() => {
                                            g.resume()
                                        })), this.obs = new IntersectionObserver(this.obsCb.bind(g), {
                                            threshold: .5
                                        }), this.obs.observe(e), !f.sticky || f.sticky.constructor !== Object || f.sticky.noMobile && l === r || (this.scrollEvRef = ((e, t) => {
                                            if (!(e && e instanceof HTMLElement && t && t.constructor === Object)) return null;
                                            const {
                                                beforeEl: n,
                                                afterEl: o,
                                                offsetTop: i,
                                                offsetBottom: r
                                            } = t;
                                            let s = 0,
                                                l = 0,
                                                a = !1;
                                            const c = () => {
                                                if (!a) {
                                                    const t = window.scrollY;
                                                    if (n && n instanceof HTMLElement) {
                                                        const e = n.getBoundingClientRect();
                                                        s = t + e.top + e.height
                                                    }
                                                    o && o instanceof HTMLElement && (l = t + o.getBoundingClientRect().top), window.requestAnimationFrame((() => {
                                                        t > s && !(l && t > l - e.clientHeight - (parseInt(r, 10) || 0)) ? (e.classList.add("stickyElx"), e.style.position = "fixed", e.style.top = (parseInt(i, 10) || 0) + "px") : (e.style.top = "0", e.style.position = "relative", e.classList.remove("stickyElx")), a = !1
                                                    })), a = !0
                                                }
                                            };
                                            return window.addEventListener("scroll", c), c
                                        })(e, f.sticky))
                                    },
                                    destroy() {
                                        this.obs && this.obs.unobserve(e);
                                        const t = e.cloneNode(!0);
                                        e.parentNode.replaceChild(t, e), e = t, f.sticky || (window.removeEventListener("scroll", this.scrollEvRef), this.scrollEvRef = null, e.classList.remove("stickyElx"), "fixed" === e.style.position && (e.style.position = "relative"))
                                    },
                                    obsCb(e) {
                                        e.forEach((e => {
                                            e.intersectionRatio >= .5 ? g.resume() : g.pause()
                                        }))
                                    }
                                },
                                g = {
                                    conf: f,
                                    pause() {
                                        m && clearInterval(m)
                                    },
                                    start() {
                                        return i(this, void 0, void 0, (function* () {
                                            f.fallbackMode && (yield i(void 0, void 0, void 0, (function* () {
                                                if (void 0 !== a) return a;
                                                const e = document.createElement("div");
                                                if (e.className = window.atob("YjNFbCBhZHMgYWQgYWRzYm94IGRvdWJsZWNsaWNrIGFkLXBsYWNlbWVudCBjYXJib24tYWRzIHByZWJpZCBhZC11bml0"), document.body.appendChild(e), "none" == getComputedStyle(e).display) return a = !0;
                                                try {
                                                    yield fetch(window.atob("aHR0cHM6Ly9wYWdlYWQyLmdvb2dsZXN5bmRpY2F0aW9uLmNvbS9wYWdlYWQvanMvYWRzYnlnb29nbGUuanM="), {
                                                        method: "HEAD",
                                                        mode: "no-cors"
                                                    })
                                                } catch (e) {
                                                    return a = !0
                                                }
                                                a = !1
                                            })), !1 === a && (d = !0)), d || f.target === r && l !== r || f.target === s && l !== s || (b.init(), p = yield u(e, t, f, h), h = p.unitsClone, v = p.prevItem)
                                        }))
                                    },
                                    resume() {
                                        if (!d && (this.pause(), t.length > 1)) {
                                            const n = f.timer >= 2 ? f.timer : 5;
                                            m = window.setInterval((function () {
                                                return i(this, void 0, void 0, (function* () {
                                                    p = yield u(e, t, f, h, v), h = p.unitsClone, v = p.prevItem
                                                }))
                                            }), 1e3 * n - 900)
                                        }
                                    },
                                    destroy() {
                                        if (!d) {
                                            for (this.pause(); e.firstChild;) e.firstChild.remove();
                                            b.destroy()
                                        }
                                    },
                                    add(e) {
                                        d || e && e instanceof Object && e.url && e.img && t.push(e)
                                    },
                                    remove(e) {
                                        if (!d) return t.length <= 1 ? this.pause() : void(e ? t = t.filter((t => t.img !== e.img)) : t.pop())
                                    }
                                };
                            return g
                        }
                }
            },
            n = {};

        function o(e) {
            var i = n[e];
            if (void 0 !== i) return i.exports;
            var r = n[e] = {
                exports: {}
            };
            return t[e](r, r.exports, o), r.exports
        }
        o.m = t, e = [], o.O = (t, n, i, r) => {
            if (!n) {
                var s = 1 / 0;
                for (d = 0; d < e.length; d++) {
                    for (var [n, i, r] = e[d], l = !0, a = 0; a < n.length; a++)(!1 & r || s >= r) && Object.keys(o.O).every((e => o.O[e](n[a]))) ? n.splice(a--, 1) : (l = !1, r < s && (s = r));
                    if (l) {
                        e.splice(d--, 1);
                        var c = i();
                        void 0 !== c && (t = c)
                    }
                }
                return t
            }
            r = r || 0;
            for (var d = e.length; d > 0 && e[d - 1][2] > r; d--) e[d] = e[d - 1];
            e[d] = [n, i, r]
        }, o.d = (e, t) => {
            for (var n in t) o.o(t, n) && !o.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
        }, o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
            var e = {
                179: 0,
                296: 0
            };
            o.O.j = t => 0 === e[t];
            var t = (t, n) => {
                    var i, r, [s, l, a] = n,
                        c = 0;
                    if (s.some((t => 0 !== e[t]))) {
                        for (i in l) o.o(l, i) && (o.m[i] = l[i]);
                        if (a) var d = a(o)
                    }
                    for (t && t(n); c < s.length; c++) r = s[c], o.o(e, r) && e[r] && e[r][0](), e[s[c]] = 0;
                    return o.O(d)
                },
                n = this.webpackChunkrotator = this.webpackChunkrotator || [];
            n.forEach(t.bind(null, 0)), n.push = t.bind(null, n.push.bind(n))
        })();
        var i = o.O(void 0, [296], (() => o(379)));
        return (i = o.O(i)).rotator
    })()
}));