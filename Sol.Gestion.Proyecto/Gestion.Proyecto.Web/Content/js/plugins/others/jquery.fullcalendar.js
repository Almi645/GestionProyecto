/*

FullCalendar v1.5.3
http://arshaw.com/fullcalendar/

Use fullcalendar.css for basic styling.
For event drag & drop, requires jQuery UI draggable.
For event resizing, requires jQuery UI resizable.

Copyright (c) 2011 Adam Shaw
Dual licensed under the MIT and GPL licenses, located in
MIT-LICENSE.txt and GPL-LICENSE.txt respectively.

Date: Sat Jun 2 15:40:14 2012 +0300

*/
(function (t, sa) {
    function nb(a) { t.extend(true, cb, a) } function $b(a, b, e) {
        function c(v) { if (D) { B(); z(); ja(); O(v) } else f() } function f() { Q = b.theme ? "ui" : "fc"; a.addClass("fc"); b.isRTL && a.addClass("fc-rtl"); b.theme && a.addClass("ui-widget"); D = t("<div class='fc-content' style='position:relative'/>").prependTo(a); da = new ac(V, b); (C = da.render()) && a.prepend(C); x(b.defaultView); t(window).resize(la); m() || k() } function k() { setTimeout(function () { !s.start && m() && O() }, 0) } function i() {
            t(window).unbind("resize", la); da.destroy();
            D.remove(); a.removeClass("fc fc-rtl ui-widget")
        } function h() { return X.offsetWidth !== 0 } function m() { return t("body")[0].offsetWidth !== 0 } function x(v) {
            if (!s || v != s.name) {
                E++; na(); var N = s, Y; if (N) { (N.beforeHide || Gb)(); Wa(D, D.height()); N.element.hide() } else Wa(D, 1); D.css("overflow", "hidden"); if (s = G[v]) s.element.show(); else s = G[v] = new Fa[v](Y = l = t("<div class='fc-view fc-view-" + v + "' style='position:absolute'/>").appendTo(D), V); N && da.deactivateButton(N.name); da.activateButton(v); O(); D.css("overflow", ""); N &&
Wa(D, 1); Y || (s.afterShow || Gb)(); E--
            }
        } function O(v) { if (h()) { E++; na(); j === sa && B(); var N = false; if (!s.start || v || o < s.start || o >= s.end) { s.render(o, v || 0); ia(true); N = true } else if (s.sizeDirty) { s.clearEvents(); ia(); N = true } else if (s.eventsDirty) { s.clearEvents(); N = true } s.sizeDirty = false; s.eventsDirty = false; oa(N); T = a.outerWidth(); da.updateTitle(s.title); v = new Date; v >= s.start && v < s.end ? da.disableButton("today") : da.enableButton("today"); E--; s.trigger("viewDisplay", X) } } function Z() {
            z(); if (h()) {
                B(); ia(); na(); s.clearEvents();
                s.renderEvents(P); s.sizeDirty = false
            }
        } function z() { t.each(G, function (v, N) { N.sizeDirty = true }) } function B() { j = b.contentHeight ? b.contentHeight : b.height ? b.height - (C ? C.height() : 0) - Pa(D) : Math.round(D.width() / Math.max(b.aspectRatio, 0.5)) } function ia(v) { E++; s.setHeight(j, v); if (l) { l.css("position", "relative"); l = null } s.setWidth(D.width(), v); E-- } function la() { if (!E) if (s.start) { var v = ++H; setTimeout(function () { if (v == H && !E && h()) if (T != (T = a.outerWidth())) { E++; Z(); s.trigger("windowResize", X); E-- } }, 200) } else k() } function oa(v) {
            if (!b.lazyFetching ||
ta(s.visStart, s.visEnd)) xa(); else v && ba()
        } function xa() { K(s.visStart, s.visEnd) } function ra(v) { P = v; ba() } function ga(v) { ba(v) } function ba(v) { ja(); if (h()) { s.clearEvents(); s.renderEvents(P, v); s.eventsDirty = false } } function ja() { t.each(G, function (v, N) { N.eventsDirty = true }) } function ua(v, N, Y) { s.select(v, N, Y === sa ? true : Y) } function na() { s && s.unselect() } function $() { O(-1) } function fa() { O(1) } function ma() { ob(o, -1); O() } function pa() { ob(o, 1); O() } function U() { o = new Date; O() } function A(v, N, Y) {
            if (v instanceof Date) o =
w(v); else Hb(o, v, N, Y); O()
        } function q(v, N, Y) { v !== sa && ob(o, v); N !== sa && Xa(o, N); Y !== sa && aa(o, Y); O() } function d() { return w(o) } function u() { return s } function y(v, N) { if (N === sa) return b[v]; if (v == "height" || v == "contentHeight" || v == "aspectRatio") { b[v] = N; Z() } } function R(v, N) { if (b[v]) return b[v].apply(N || X, Array.prototype.slice.call(arguments, 2)) } var V = this; V.options = b; V.render = c; V.destroy = i; V.refetchEvents = xa; V.reportEvents = ra; V.reportEventChange = ga; V.rerenderEvents = ba; V.changeView = x; V.select = ua; V.unselect = na;
        V.prev = $; V.next = fa; V.prevYear = ma; V.nextYear = pa; V.today = U; V.gotoDate = A; V.incrementDate = q; V.formatDate = function (v, N) { return Qa(v, N, b) }; V.formatDates = function (v, N, Y) { return pb(v, N, Y, b) }; V.getDate = d; V.getView = u; V.option = y; V.trigger = R; bc.call(V, b, e); var ta = V.isFetchNeeded, K = V.fetchEvents, X = a[0], da, C, D, Q, s, G = {}, T, j, l, H = 0, E = 0, o = new Date, P = [], I; Hb(o, b.year, b.month, b.date); b.droppable && t(document).bind("dragstart", function (v, N) {
            var Y = v.target, ha = t(Y); if (!ha.parents(".fc").length) {
                var va = b.dropAccept; if (t.isFunction(va) ?
va.call(Y, ha) : ha.is(va)) { I = Y; s.dragStart(I, v, N) }
            }
        }).bind("dragstop", function (v, N) { if (I) { s.dragStop(I, v, N); I = null } })
    } function ac(a, b) {
        function e() { z = b.theme ? "ui" : "fc"; if (b.header) return Z = t("<table class='fc-header' style='width:100%'/>").append(t("<tr/>").append(f("left")).append(f("center")).append(f("right"))) } function c() { Z.remove() } function f(B) {
            var ia = t("<td class='fc-header-" + B + "'/>"); (B = b.header[B]) && t.each(B.split(" "), function (la) {
                la > 0 && ia.append("<span class='fc-header-space'/>"); var oa;
                t.each(this.split(","), function (xa, ra) {
                    if (ra == "title") { ia.append("<span class='fc-header-title'><h2>&nbsp;</h2></span>"); oa && oa.addClass(z + "-corner-right"); oa = null } else {
                        var ga; if (a[ra]) ga = a[ra]; else if (Fa[ra]) ga = function () { ja.removeClass(z + "-state-hover"); a.changeView(ra) }; if (ga) {
                            xa = b.theme ? qb(b.buttonIcons, ra) : null; var ba = qb(b.buttonText, ra), ja = t("<span class='fc-button fc-button-" + ra + " " + z + "-state-default'><span class='fc-button-inner'><span class='fc-button-content'>" + (xa ? "<span class='fc-icon-wrap'><span class='ui-icon ui-icon-" +
xa + "'/></span>" : ba) + "</span><span class='fc-button-effect'><span></span></span></span></span>"); if (ja) {
                                ja.click(function () { ja.hasClass(z + "-state-disabled") || ga() }).mousedown(function () { ja.not("." + z + "-state-active").not("." + z + "-state-disabled").addClass(z + "-state-down") }).mouseup(function () { ja.removeClass(z + "-state-down") }).hover(function () { ja.not("." + z + "-state-active").not("." + z + "-state-disabled").addClass(z + "-state-hover") }, function () { ja.removeClass(z + "-state-hover").removeClass(z + "-state-down") }).appendTo(ia);
                                oa || ja.addClass(z + "-corner-left"); oa = ja
                            }
                        }
                    }
                }); oa && oa.addClass(z + "-corner-right")
            }); return ia
        } function k(B) { Z.find("h2").html(B) } function i(B) { Z.find("span.fc-button-" + B).addClass(z + "-state-active") } function h(B) { Z.find("span.fc-button-" + B).removeClass(z + "-state-active") } function m(B) { Z.find("span.fc-button-" + B).addClass(z + "-state-disabled") } function x(B) { Z.find("span.fc-button-" + B).removeClass(z + "-state-disabled") } var O = this; O.render = e; O.destroy = c; O.updateTitle = k; O.activateButton = i; O.deactivateButton =
h; O.disableButton = m; O.enableButton = x; var Z = t([]), z
    } function bc(a, b) {
        function e(d, u) { return !fa || d < fa || u > ma } function c(d, u) { fa = d; ma = u; q = []; d = ++pa; U = u = $.length; for (var y = 0; y < u; y++) f($[y], d) } function f(d, u) { k(d, function (y) { if (u == pa) { if (y) { for (var R = 0; R < y.length; R++) { y[R].source = d; la(y[R]) } q = q.concat(y) } U--; U || ua(q) } }) } function k(d, u) {
            var y, R = Da.sourceFetchers, V; for (y = 0; y < R.length; y++) { V = R[y](d, fa, ma, u); if (V === true) return; else if (typeof V == "object") { k(V, u); return } } if (y = d.events) if (t.isFunction(y)) {
                B();
                y(w(fa), w(ma), function (da) { u(da); ia() })
            } else t.isArray(y) ? u(y) : u(); else if (d.url) { var ta = d.success, K = d.error, X = d.complete; y = t.extend({}, d.data || {}); R = Ya(d.startParam, a.startParam); V = Ya(d.endParam, a.endParam); if (R) y[R] = Math.round(+fa / 1E3); if (V) y[V] = Math.round(+ma / 1E3); B(); t.ajax(t.extend({}, cc, d, { data: y, success: function (da) { da = da || []; var C = db(ta, this, arguments); if (t.isArray(C)) da = C; u(da) }, error: function () { db(K, this, arguments); u() }, complete: function () { db(X, this, arguments); ia() } })) } else u()
        } function i(d) {
            if (d =
h(d)) { U++; f(d, pa) }
        } function h(d) { if (t.isFunction(d) || t.isArray(d)) d = { events: d }; else if (typeof d == "string") d = { url: d }; if (typeof d == "object") { oa(d); $.push(d); return d } } function m(d) { $ = t.grep($, function (u) { return !xa(u, d) }); q = t.grep(q, function (u) { return !xa(u.source, d) }); ua(q) } function x(d) {
            var u, y = q.length, R, V = ja().defaultEventEnd, ta = d.start - d._start, K = d.end ? d.end - (d._end || V(d)) : 0; for (u = 0; u < y; u++) {
                R = q[u]; if (R._id == d._id && R != d) {
                    R.start = new Date(+R.start + ta); R.end = d.end ? R.end ? new Date(+R.end + K) : new Date(+V(R) +
K) : null; R.title = d.title; R.url = d.url; R.allDay = d.allDay; R.className = d.className; R.editable = d.editable; R.color = d.color; R.backgroudColor = d.backgroudColor; R.borderColor = d.borderColor; R.textColor = d.textColor; la(R)
                }
            } la(d); ua(q)
        } function O(d, u) { la(d); if (!d.source) { if (u) { na.events.push(d); d.source = na } q.push(d) } ua(q) } function Z(d) {
            if (d) { if (!t.isFunction(d)) { var u = d + ""; d = function (R) { return R._id == u } } q = t.grep(q, d, true); for (y = 0; y < $.length; y++) if (t.isArray($[y].events)) $[y].events = t.grep($[y].events, d, true) } else {
                q =
[]; for (var y = 0; y < $.length; y++) if (t.isArray($[y].events)) $[y].events = []
            } ua(q)
        } function z(d) { if (t.isFunction(d)) return t.grep(q, d); else if (d) { d += ""; return t.grep(q, function (u) { return u._id == d }) } return q } function B() { A++ || ba("loading", null, true) } function ia() { --A || ba("loading", null, false) } function la(d) {
            var u = d.source || {}, y = Ya(u.ignoreTimezone, a.ignoreTimezone); d._id = d._id || (d.id === sa ? "_fc" + dc++ : d.id + ""); if (d.date) { if (!d.start) d.start = d.date; delete d.date } d._start = w(d.start = rb(d.start, y)); d.end = rb(d.end,
y); if (d.end && d.end <= d.start) d.end = null; d._end = d.end ? w(d.end) : null; if (d.allDay === sa) d.allDay = Ya(u.allDayDefault, a.allDayDefault); if (d.className) { if (typeof d.className == "string") d.className = d.className.split(/\s+/) } else d.className = []
        } function oa(d) { if (d.className) { if (typeof d.className == "string") d.className = d.className.split(/\s+/) } else d.className = []; for (var u = Da.sourceNormalizers, y = 0; y < u.length; y++) u[y](d) } function xa(d, u) { return d && u && ra(d) == ra(u) } function ra(d) {
            return (typeof d == "object" ? d.events ||
d.url : "") || d
        } var ga = this; ga.isFetchNeeded = e; ga.fetchEvents = c; ga.addEventSource = i; ga.removeEventSource = m; ga.updateEvent = x; ga.renderEvent = O; ga.removeEvents = Z; ga.clientEvents = z; ga.normalizeEvent = la; var ba = ga.trigger, ja = ga.getView, ua = ga.reportEvents, na = { events: [] }, $ = [na], fa, ma, pa = 0, U = 0, A = 0, q = []; for (ga = 0; ga < b.length; ga++) h(b[ga])
    } function ob(a, b, e) { a.setFullYear(a.getFullYear() + b); e || Ia(a); return a } function Xa(a, b, e) {
        if (+a) {
            b = a.getMonth() + b; var c = w(a); c.setDate(1); c.setMonth(b); a.setMonth(b); for (e || Ia(a); a.getMonth() !=
c.getMonth(); ) a.setDate(a.getDate() + (a < c ? 1 : -1))
        } return a
    } function ec(a, b, e) { aa(a, b * 7, e); return a } function aa(a, b, e) { if (+a) { b = a.getDate() + b; var c = w(a); c.setHours(9); c.setDate(b); a.setDate(b); e || Ia(a); sb(a, c) } return a } function sb(a, b) { if (+a) for (; a.getDate() != b.getDate(); ) a.setTime(+a + (a < b ? 1 : -1) * fc) } function wa(a, b) { a.setMinutes(a.getMinutes() + b); return a } function Ia(a) { a.setHours(0); a.setMinutes(0); a.setSeconds(0); a.setMilliseconds(0); return a } function w(a, b) { if (b) return Ia(new Date(+a)); return new Date(+a) }
    function Ib() { var a = 0, b; do b = new Date(1970, a++, 1); while (b.getHours()); return b } function Aa(a, b, e) { for (b = b || 1; !a.getDay() || e && a.getDay() == 1 || !e && a.getDay() == 6; ) aa(a, b); return a } function Ca(a, b) { return Math.round((w(a, true) - w(b, true)) / tb) } function Hb(a, b, e, c) { if (b !== sa && b != a.getFullYear()) { a.setDate(1); a.setMonth(0); a.setFullYear(b) } if (e !== sa && e != a.getMonth()) { a.setDate(1); a.setMonth(e) } c !== sa && a.setDate(c) } function Jb(a) {
        var b = a.getFullYear(), e = 8 - (new Date(a.getFullYear(), 0, 1)).getDay(); if (e == 8) e =
1; a = (Date.UTC(b, a.getMonth(), a.getDate(), 0, 0, 0) - Date.UTC(b, 0, 1, 0, 0, 0)) / 1E3 / 60 / 60 / 24 + 1; e = Math.floor((a - e + 7) / 7); if (e == 0) { b--; b = 8 - (new Date(b, 0, 1)).getDay(); e = b == 2 || b == 8 ? 53 : 52 } return e
    } function rb(a, b) { if (typeof a == "object") return a; if (typeof a == "number") return new Date(a * 1E3); if (typeof a == "string") { if (a.match(/^\d+(\.\d+)?$/)) return new Date(parseFloat(a) * 1E3); if (b === sa) b = true; return Kb(a, b) || (a ? new Date(a) : null) } return null } function Kb(a, b) {
        a = a.match(/^([0-9]{4})(-([0-9]{2})(-([0-9]{2})([T ]([0-9]{2}):([0-9]{2})(:([0-9]{2})(\.([0-9]+))?)?(Z|(([-+])([0-9]{2})(:?([0-9]{2}))?))?)?)?)?$/);
        if (!a) return null; var e = new Date(a[1], 0, 1); if (b || !a[13]) { b = new Date(a[1], 0, 1, 9, 0); if (a[3]) { e.setMonth(a[3] - 1); b.setMonth(a[3] - 1) } if (a[5]) { e.setDate(a[5]); b.setDate(a[5]) } sb(e, b); a[7] && e.setHours(a[7]); a[8] && e.setMinutes(a[8]); a[10] && e.setSeconds(a[10]); a[12] && e.setMilliseconds(Number("0." + a[12]) * 1E3); sb(e, b) } else {
            e.setUTCFullYear(a[1], a[3] ? a[3] - 1 : 0, a[5] || 1); e.setUTCHours(a[7] || 0, a[8] || 0, a[10] || 0, a[12] ? Number("0." + a[12]) * 1E3 : 0); if (a[14]) {
                b = Number(a[16]) * 60 + (a[18] ? Number(a[18]) : 0); b *= a[15] == "-" ? 1 : -1;
                e = new Date(+e + b * 60 * 1E3)
            }
        } return e
    } function Ra(a) { if (typeof a == "number") return a * 60; if (typeof a == "object") return a.getHours() * 60 + a.getMinutes(); if (a = a.match(/(\d+)(?::(\d+))?\s*(\w+)?/)) { var b = parseInt(a[1], 10); if (a[3]) { b %= 12; if (a[3].toLowerCase().charAt(0) == "p") b += 12 } return b * 60 + (a[2] ? parseInt(a[2], 10) : 0) } } function Qa(a, b, e) { return pb(a, null, b, e) } function pb(a, b, e, c) {
        c = c || cb; var f = a, k = b, i, h = e.length, m, x, O, Z = ""; for (i = 0; i < h; i++) {
            m = e.charAt(i); if (m == "'") for (x = i + 1; x < h; x++) {
                if (e.charAt(x) == "'") {
                    if (f) {
                        Z +=
x == i + 1 ? "'" : e.substring(i + 1, x); i = x
                    } break
                }
            } else if (m == "(") for (x = i + 1; x < h; x++) { if (e.charAt(x) == ")") { i = Qa(f, e.substring(i + 1, x), c); if (parseInt(i.replace(/\D/, ""), 10)) Z += i; i = x; break } } else if (m == "[") for (x = i + 1; x < h; x++) { if (e.charAt(x) == "]") { m = e.substring(i + 1, x); i = Qa(f, m, c); if (i != Qa(k, m, c)) Z += i; i = x; break } } else if (m == "{") { f = b; k = a } else if (m == "}") { f = a; k = b } else { for (x = h; x > i; x--) if (O = gc[e.substring(i, x)]) { if (f) Z += O(f, c); i = x - 1; break } if (x == i) if (f) Z += m }
        } return Z
    } function La(a) {
        return a.end ? hc(a.end, a.allDay) : aa(w(a.start),
1)
    } function hc(a, b) { a = w(a); return b || a.getHours() || a.getMinutes() ? aa(a, 1) : Ia(a) } function ic(a, b) { return (b.msLength - a.msLength) * 100 + (a.event.start - b.event.start) } function Lb(a, b) { return a.end > b.start && a.start < b.end } function eb(a, b, e, c) { var f = [], k, i = a.length, h, m, x, O, Z; for (k = 0; k < i; k++) { h = a[k]; m = h.start; x = b[k]; if (x > e && m < c) { if (m < e) { m = w(e); O = false } else { m = m; O = true } if (x > c) { x = w(c); Z = false } else { x = x; Z = true } f.push({ event: h, start: m, end: x, isStart: O, isEnd: Z, msLength: x - m }) } } return f.sort(ic) } function fb(a) {
        var b =
[], e, c = a.length, f, k, i, h; for (e = 0; e < c; e++) { f = a[e]; for (k = 0; ; ) { i = false; if (b[k]) for (h = 0; h < b[k].length; h++) if (Lb(b[k][h], f)) { i = true; break } if (i) k++; else break } if (b[k]) b[k].push(f); else b[k] = [f] } return b
    } function Mb(a, b, e) { a.unbind("mouseover").mouseover(function (c) { for (var f = c.target, k; f != this; ) { k = f; f = f.parentNode } if ((f = k._fci) !== sa) { k._fci = sa; k = b[f]; e(k.event, k.element, k); t(c.target).trigger(c) } c.stopPropagation() }) } function Sa(a, b, e) { for (var c = 0, f; c < a.length; c++) { f = t(a[c]); f.width(Math.max(0, b - ub(f, e))) } }
    function Nb(a, b, e) { for (var c = 0, f; c < a.length; c++) { f = t(a[c]); f.height(Math.max(0, b - Pa(f, e))) } } function ub(a, b) { return jc(a) + kc(a) + (b ? lc(a) : 0) } function jc(a) { return (parseFloat(t.curCSS(a[0], "paddingLeft", true)) || 0) + (parseFloat(t.curCSS(a[0], "paddingRight", true)) || 0) } function lc(a) { return (parseFloat(t.curCSS(a[0], "marginLeft", true)) || 0) + (parseFloat(t.curCSS(a[0], "marginRight", true)) || 0) } function kc(a) {
        return (parseFloat(t.curCSS(a[0], "borderLeftWidth", true)) || 0) + (parseFloat(t.curCSS(a[0], "borderRightWidth",
true)) || 0)
    } function Pa(a, b) { return mc(a) + nc(a) + (b ? Ob(a) : 0) } function mc(a) { return (parseFloat(t.curCSS(a[0], "paddingTop", true)) || 0) + (parseFloat(t.curCSS(a[0], "paddingBottom", true)) || 0) } function Ob(a) { return (parseFloat(t.curCSS(a[0], "marginTop", true)) || 0) + (parseFloat(t.curCSS(a[0], "marginBottom", true)) || 0) } function nc(a) { return (parseFloat(t.curCSS(a[0], "borderTopWidth", true)) || 0) + (parseFloat(t.curCSS(a[0], "borderBottomWidth", true)) || 0) } function Wa(a, b) {
        b = typeof b == "number" ? b + "px" : b; a.each(function (e,
c) { c.style.cssText += ";min-height:" + b + ";_height:" + b })
    } function Gb() { } function Pb(a, b) { return a - b } function Qb(a) { return Math.max.apply(Math, a) } function Ta(a) { return (a < 10 ? "0" : "") + a } function qb(a, b) { if (a[b] !== sa) return a[b]; b = b.split(/(?=[A-Z])/); for (var e = b.length - 1, c; e >= 0; e--) { c = a[b[e].toLowerCase()]; if (c !== sa) return c } return a[""] } function Ua(a) { return a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#039;").replace(/"/g, "&quot;").replace(/\n/g, "<br />") } function Rb(a) {
        return a.id +
"/" + a.className + "/" + a.style.cssText.replace(/(^|;)\s*(top|left|width|height)\s*:[^;]*/ig, "")
    } function Za(a) { a.attr("unselectable", "on").css("MozUserSelect", "none").bind("selectstart.ui", function () { return false }) } function gb(a) { a.children().removeClass("fc-first fc-last").filter(":first-child").addClass("fc-first").end().filter(":last-child").addClass("fc-last") } function $a(a, b) { a.each(function (e, c) { c.className = c.className.replace(/^fc-\w*/, "fc-id" + b) }) } function Sb(a, b) {
        var e = a.source || {}, c = a.color,
f = e.color, k = b("eventColor"), i = a.backgroundColor || c || e.backgroundColor || f || b("eventBackgroundColor") || k; c = a.borderColor || c || e.borderColor || f || b("eventBorderColor") || k; a = a.textColor || e.textColor || b("eventTextColor"); b = []; i && b.push("background-color:" + i); c && b.push("border-color:" + c); a && b.push("color:" + a); return b.join(";")
    } function db(a, b, e) { if (t.isFunction(a)) a = [a]; if (a) { var c, f; for (c = 0; c < a.length; c++) f = a[c].apply(b, e) || f; return f } } function Ya() {
        for (var a = 0; a < arguments.length; a++) if (arguments[a] !==
sa) return arguments[a]
    } function oc(a, b) {
        function e(h, m) { if (m) { Xa(h, m); h.setDate(1) } h = w(h, true); h.setDate(1); m = Xa(w(h), 1); var x = w(h), O = w(m), Z = f("firstDay"), z = f("weekends") ? 0 : 1; if (z) { Aa(x); Aa(O, -1, true) } aa(x, -((x.getDay() - Math.max(Z, z) + 7) % 7)); aa(O, (7 - O.getDay() + Math.max(Z, z)) % 7); Z = Math.round((O - x) / (tb * 7)); if (f("weekMode") == "fixed") { aa(O, (6 - Z) * 7); Z = 6 } c.title = i(h, f("titleFormat")); c.start = h; c.end = m; c.visStart = x; c.visEnd = O; k(6, Z, z ? 5 : 7, true) } var c = this; c.render = e; vb.call(c, a, b, "month"); var f = c.opt, k = c.renderBasic,
i = b.formatDate
    } function pc(a, b) { function e(h, m) { m && aa(h, m * 7); h = aa(w(h), -((h.getDay() - f("firstDay") + 7) % 7)); m = aa(w(h), 7); var x = w(h), O = w(m), Z = f("weekends"); if (!Z) { Aa(x); Aa(O, -1, true) } c.title = i(x, aa(w(O), -1), f("titleFormat")); c.start = h; c.end = m; c.visStart = x; c.visEnd = O; k(1, 1, Z ? 7 : 5, false) } var c = this; c.render = e; vb.call(c, a, b, "basicWeek"); var f = c.opt, k = c.renderBasic, i = b.formatDates } function qc(a, b) {
        function e(h, m) {
            if (m) { aa(h, m); f("weekends") || Aa(h, m < 0 ? -1 : 1) } c.title = i(h, f("titleFormat")); c.start = c.visStart =
w(h, true); c.end = c.visEnd = aa(w(c.start), 1); k(1, 1, 1, false)
        } var c = this; c.render = e; vb.call(c, a, b, "basicDay"); var f = c.opt, k = c.renderBasic, i = b.formatDate
    } function vb(a, b, e) {
        function c(F, g, p, n) { H = g; E = p; f(); (g = !da) ? k(F, n) : u(); i(g) } function f() { if (v = q("isRTL")) { N = -1; Y = E - 1 } else { N = 1; Y = 0 } ha = q("firstDay"); va = q("weekends") ? 0 : 1; qa = q("theme") ? "ui" : "fc"; ca = q("columnFormat") } function k(F, g) {
            var p, n = qa + "-widget-header", J = qa + "-widget-content", L; p = "<table class='fc-border-separate' style='width:100%' cellspacing='0'><thead><tr>";
            for (L = 0; L < E; L++) p += "<th class='fc- " + n + "'/>"; p += "</tr></thead><tbody>"; for (L = 0; L < F; L++) { p += "<tr class='fc-week" + L + "'>"; for (n = 0; n < E; n++) p += "<td class='fc- " + J + " fc-day" + (L * E + n) + "'><div>" + (g ? "<div class='fc-day-number'/>" : "") + "<div class='fc-day-content'><div style='position:relative'>&nbsp;</div></div></div></td>"; p += "</tr>" } p += "</tbody></table>"; F = t(p).appendTo(a); K = F.find("thead"); X = K.find("th"); da = F.find("tbody"); C = da.find("tr"); D = da.find("td"); Q = D.filter(":first-child"); s = C.eq(0).find("div.fc-day-content div");
            gb(K.add(K.find("tr"))); gb(C); C.eq(0).addClass("fc-first"); x(D); G = t("<div style='position:absolute;z-index:8;top:0;left:0'/>").appendTo(a)
        } function i(F) {
            var g = F || H == 1, p = A.start.getMonth(), n = Ia(new Date), J, L, ea; g && X.each(function (ka, ya) { J = t(ya); L = fa(ka); J.html(ta(L, ca)); $a(J, L) }); D.each(function (ka, ya) {
                J = t(ya); L = fa(ka); L.getMonth() == p ? J.removeClass("fc-other-month") : J.addClass("fc-other-month"); +L == +n ? J.addClass(qa + "-state-highlight fc-today") : J.removeClass(qa + "-state-highlight fc-today"); J.find("div.fc-day-number").text(L.getDate());
                g && $a(J, L)
            }); C.each(function (ka, ya) { ea = t(ya); if (ka < H) { ea.show(); ka == H - 1 ? ea.addClass("fc-last") : ea.removeClass("fc-last") } else ea.hide() })
        } function h(F) { j = F; F = j - K.height(); var g, p, n; if (q("weekMode") == "variable") g = p = Math.floor(F / (H == 1 ? 2 : 6)); else { g = Math.floor(F / H); p = F - g * (H - 1) } Q.each(function (J, L) { if (J < H) { n = t(L); Wa(n.find("> div"), (J == H - 1 ? p : g) - Pa(n)) } }) } function m(F) { T = F; I.clear(); l = Math.floor(T / E); Sa(X.slice(0, -1), l) } function x(F) { F.click(O).mousedown(V) } function O(F) {
            if (!q("selectable")) {
                var g = parseInt(this.className.match(/fc\-day(\d+)/)[1]);
                g = fa(g); d("dayClick", this, g, true, F)
            }
        } function Z(F, g, p) { p && o.build(); p = w(A.visStart); for (var n = aa(w(p), E), J = 0; J < H; J++) { var L = new Date(Math.max(p, F)), ea = new Date(Math.min(n, g)); if (L < ea) { var ka; if (v) { ka = Ca(ea, p) * N + Y + 1; L = Ca(L, p) * N + Y + 1 } else { ka = Ca(L, p); L = Ca(ea, p) } x(z(J, ka, J, L - 1)) } aa(p, 7); aa(n, 7) } } function z(F, g, p, n) { F = o.rect(F, g, p, n, a); return y(F, a) } function B(F) { return w(F) } function ia(F, g) { Z(F, aa(w(g), 1), true) } function la() { R() } function oa(F, g, p) { var n = ua(F); d("dayClick", D[n.row * E + n.col], F, g, p) } function xa(F,
g) { P.start(function (p) { R(); p && z(p.row, p.col, p.row, p.col) }, g) } function ra(F, g, p) { var n = P.stop(); R(); if (n) { n = na(n); d("drop", F, n, true, g, p) } } function ga(F) { return w(F.start) } function ba(F) { return I.left(F) } function ja(F) { return I.right(F) } function ua(F) { return { row: Math.floor(Ca(F, A.visStart) / 7), col: ma(F.getDay())} } function na(F) { return $(F.row, F.col) } function $(F, g) { return aa(w(A.visStart), F * 7 + g * N + Y) } function fa(F) { return $(Math.floor(F / E), F % E) } function ma(F) { return (F - Math.max(ha, va) + E) % E * N + Y } function pa(F) { return C.eq(F) }
        function U() { return { left: 0, right: T} } var A = this; A.renderBasic = c; A.setHeight = h; A.setWidth = m; A.renderDayOverlay = Z; A.defaultSelectionEnd = B; A.renderSelection = ia; A.clearSelection = la; A.reportDayClick = oa; A.dragStart = xa; A.dragStop = ra; A.defaultEventEnd = ga; A.getHoverListener = function () { return P }; A.colContentLeft = ba; A.colContentRight = ja; A.dayOfWeekCol = ma; A.dateCell = ua; A.cellDate = na; A.cellIsAllDay = function () { return true }; A.allDayRow = pa; A.allDayBounds = U; A.getRowCnt = function () { return H }; A.getColCnt = function () { return E };
        A.getColWidth = function () { return l }; A.getViewName = function () { return e }; A.getDaySegmentContainer = function () { return G }; wb.call(A, a, b, e); xb.call(A); yb.call(A); rc.call(A); var q = A.opt, d = A.trigger, u = A.clearEvents, y = A.renderOverlay, R = A.clearOverlays, V = A.daySelectionMousedown, ta = b.formatDate, K, X, da, C, D, Q, s, G, T, j, l, H, E, o, P, I, v, N, Y, ha, va, qa, ca; Za(a.addClass("fc-grid")); o = new zb(function (F, g) {
            var p, n, J; X.each(function (L, ea) { p = t(ea); n = p.offset().left; if (L) J[1] = n; J = [n]; g[L] = J }); J[1] = n + p.outerWidth(); C.each(function (L,
ea) { if (L < H) { p = t(ea); n = p.offset().top; if (L) J[1] = n; J = [n]; F[L] = J } }); J[1] = n + p.outerHeight()
        }); P = new Ab(o); I = new Bb(function (F) { return s.eq(F) })
    } function rc() {
        function a($, fa) { O($); ua(e($), fa) } function b() { Z(); oa().empty() } function e($) { var fa = ba(), ma = ja(), pa = w(k.visStart); ma = aa(w(pa), ma); var U = t.map($, La), A, q, d, u, y, R, V = []; for (A = 0; A < fa; A++) { q = fb(eb($, U, pa, ma)); for (d = 0; d < q.length; d++) { u = q[d]; for (y = 0; y < u.length; y++) { R = u[y]; R.row = A; R.level = d; V.push(R) } } aa(pa, 7); aa(ma, 7) } return V } function c($, fa, ma) {
            m($) &&
f($, fa); ma.isEnd && x($) && na($, fa, ma); z($, fa)
        } function f($, fa) {
            var ma = xa(), pa; fa.draggable({ zIndex: 9, delay: 50, opacity: i("dragOpacity"), revertDuration: i("dragRevertDuration"), start: function (U, A) { h("eventDragStart", fa, $, U, A); ia($, fa); ma.start(function (q, d, u, y) { fa.draggable("option", "revert", !q || !u && !y); ga(); if (q) { pa = u * 7 + y * (i("isRTL") ? -1 : 1); ra(aa(w($.start), pa), aa(La($), pa)) } else pa = 0 }, U, "drag") }, stop: function (U, A) {
                ma.stop(); ga(); h("eventDragStop", fa, $, U, A); if (pa) la(this, $, pa, 0, $.allDay, U, A); else {
                    fa.css("filter",
""); B($, fa)
                }
            }
            })
        } var k = this; k.renderEvents = a; k.compileDaySegs = e; k.clearEvents = b; k.bindDaySeg = c; Cb.call(k); var i = k.opt, h = k.trigger, m = k.isEventDraggable, x = k.isEventResizable, O = k.reportEvents, Z = k.reportEventClear, z = k.eventElementHandlers, B = k.showEvents, ia = k.hideEvents, la = k.eventDrop, oa = k.getDaySegmentContainer, xa = k.getHoverListener, ra = k.renderDayOverlay, ga = k.clearOverlays, ba = k.getRowCnt, ja = k.getColCnt, ua = k.renderDaySegs, na = k.resizableDayEvent
    } function sc(a, b) {
        function e(h, m) {
            m && aa(h, m * 1); h = wa(w(h, true),
Ra(f("minTime"))); m = wa(w(h), Ra(f("maxTime")) - Ra(f("minTime"))); var x = w(h), O = w(m); if (!f("weekends")) { Aa(x); Aa(O, -1, true) } c.title = i(x, aa(w(O), -1), f("titleFormat")); c.start = h; c.end = m; c.visStart = x; c.visEnd = O; h = Math.round((O - x) / 1E3 / 60 / f("slotMinutes")); k(f("resources").length, f("resources").length, h, false)
        } var c = this; c.render = e; hb.call(c, a, b, "resourceDay"); var f = c.opt, k = c.renderBasic, i = b.formatDates
    } function tc(a, b) {
        function e(h, m) {
            m && aa(h, m * 7); h = aa(w(h), -((h.getDay() - f("firstDay") + 7) % 7)); m = aa(w(h), 7);
            var x = w(h), O = w(m), Z = f("weekends"); if (!Z) { Aa(x); Aa(O, -1, true) } c.title = i(x, aa(w(O), -1), f("titleFormat")); c.start = h; c.end = m; c.visStart = x; c.visEnd = O; k(f("resources").length, f("resources").length, Z ? 7 : 5, false)
        } var c = this; c.render = e; hb.call(c, a, b, "resourceWeek"); var f = c.opt, k = c.renderBasic, i = b.formatDates
    } function uc(a, b) {
        function e(h, m) {
            m && aa(h, m * f("numberOfWeeks") * 7); h = aa(w(h), -((h.getDay() - f("firstDay") + 7) % 7)); m = ec(w(h), f("numberOfWeeks")); var x = w(h), O = w(m), Z = f("weekends"); if (!Z) { Aa(x); Aa(O, -1, true) } c.title =
i(x, aa(w(O), -1), f("titleFormat")); c.start = h; c.end = m; c.visStart = x; c.visEnd = O; k(f("resources").length, f("resources").length, Z ? f("numberOfWeeks") * 7 : f("numberOfWeeks") * 5, false)
        } var c = this; c.render = e; hb.call(c, a, b, "resourceNextWeeks"); var f = c.opt, k = c.renderBasic, i = b.formatDates
    } function vc(a, b) {
        function e(h, m) {
            if (m) { Xa(h, m * 1); h.setDate(1) } h = w(h, true); h.setDate(1); m = Xa(w(h), 1); var x = w(h), O = w(m); if (!f("weekends")) { Aa(x); Aa(O, -1, true) } c.title = i(x, aa(w(O), -1), f("titleFormat")); c.start = h; c.end = m; c.visStart =
x; c.visEnd = O; h = Math.round((O - x) / tb); k(f("resources").length, f("resources").length, h, false)
        } var c = this; c.render = e; hb.call(c, a, b, "resourceMonth"); var f = c.opt, k = c.renderBasic, i = b.formatDates
    } function hb(a, b, e) {
        function c(g, p, n, J) { E = p; o = n; f(); (p = !C) || e == "resourceMonth" ? k(g, J) : y(); i(p) } function f() { if (N = d("isRTL")) { Y = -1; ha = o - 1 } else { Y = 1; ha = 0 } va = d("firstDay"); qa = d("weekends") ? 0 : 1; ca = d("theme") ? "ui" : "fc"; F = d("columnFormat") } function k(g, p) {
            var n, J = ca + "-widget-header", L = ca + "-widget-content", ea, ka, ya = d("resources");
            n = "<table class='fc-border-separate' style='width:100%' cellspacing='0'><thead><tr class='fc-first fc-last'><th class='fc-resourceName'>&nbsp;</th>"; for (ea = 0; ea < o; ea++) n += "<th class='fc- " + J + "'/>"; n += "</tr></thead><tbody>"; for (ea = 0; ea < g; ea++) {
                J = ya[ea].id; ka = ya[ea].name; n += "<tr class='fc-week" + J + "'><td class='fc-resourceName'>" + ka + "</td>"; for (ka = 0; ka < o; ka++) n += "<td class='fc- " + L + " fc-day" + ka + " fc-resource" + J + "'><div>" + (p ? "<div class='fc-day-number'/>" : "") + "<div class='fc-day-content'><div style='position:relative'>&nbsp;</div></div></div></td>";
                n += "</tr>"
            } n += "</tbody></table>"; g = a.html(t(n)); X = g.find("thead"); da = X.find("th:not(th.fc-resourceName)"); C = g.find("tbody"); D = C.find("tr"); Q = C.find("td:not(td.fc-resourceName)"); s = D.children().filter(":first-child"); G = D.eq(0).find("div.fc-day-content div"); da.removeClass("fc-first fc-last").filter(":first").addClass("fc-first").end().filter(":last").addClass("fc-last"); Q.removeClass("fc-first fc-last"); D.each(function () { t(this).children("td:not(td.fc-resourceName):first").addClass("fc-first"); t(this).children("td:not(td.fc-resourceName):last").addClass("fc-last") });
            D.eq(0).addClass("fc-first"); x(Q); T = t("<div style='position:absolute;z-index:8;top:0;left:0'/>").appendTo(a)
        } function i() {
            q.start.getMonth(); var g = Ia(new Date), p, n, J; da.each(function (L, ea) { p = t(ea); n = fa(L); p.html(K(n, F)); if (n.getDay() == 0 || n.getDay() == 6) p.addClass("fc-weekend"); n.getDay() == 1 && e == "resourceNextWeeks" && p.html(p.html() + "<br>" + d("weekPrefix") + " " + Jb(n)); $a(p, L) }); Q.each(function (L, ea) {
                p = t(ea); n = fa(L); +n == +g ? p.addClass(ca + "-state-highlight fc-today") : p.removeClass(ca + "-state-highlight fc-today");
                p.find("div.fc-day-number").text(n.getDate()); $a(p, L)
            }); D.each(function (L, ea) { J = t(ea); if (L < E) { J.show(); L == E - 1 ? J.addClass("fc-last") : J.removeClass("fc-last") } else J.hide() })
        } function h(g) { l = g; g = l - X.height(); var p, n, J; if (d("weekMode") == "variable") p = n = Math.floor(g / (E == 1 ? 2 : 6)); else { p = Math.floor(g / E); n = g - p * (E - 1) } s.each(function (L, ea) { if (L < E) { J = t(ea); Wa(J.find("> div"), (L == E - 1 ? n : p) - Pa(J)) } }) } function m(g) {
            j = g; j -= t("th.fc-resourceName").css("width").replace("px", ""); v.clear(); H = Math.floor(j / o); Sa(da.slice(0,
-1), H)
        } function x(g) { g.click(O).mousedown(ta) } function O(g) { if (!d("selectable")) { var p = parseInt(this.className.match(/fc\-day(\d+)/)[1]); p = fa(p); u("dayClick", this, p, true, g) } } function Z(g, p, n, J) {
            n && P.build(); n = w(q.visStart); var L = aa(w(n), o); if (e == "resourceDay") L = wa(w(n), d("slotMinutes") * o); g = new Date(Math.max(n, g)); L = new Date(Math.min(L, p)); if (g < L) {
                if (e == "resourceDay") { p = (g - n) / 1E3 / 60 / d("slotMinutes"); n = (L - n) / 1E3 / 60 / d("slotMinutes") } else if (N) { p = Ca(L, n) * Y + ha + 1; n = Ca(g, n) * Y + ha + 1 } else {
                    p = Ca(g, n); n = Ca(L,
n)
                } x(z(J, p, J, n - 1))
            }
        } function z(g, p, n, J) { g = P.rect(g, Math.round(p), n, Math.round(J), a); return R(g, a) } function B(g) { return w(g) } function ia(g, p, n, J) { e == "resourceDay" ? Z(g, wa(w(p), d("slotMinutes")), true, J) : Z(g, aa(w(p), 1), true, J) } function la() { V() } function oa(g, p, n) { var J = ua(g); u("dayClick", Q[J.row * o + J.col], g, p, n) } function xa(g, p) { I.start(function (n) { V(); n && z(n.row, n.col, n.row, n.col) }, p) } function ra(g, p, n) { var J = I.stop(); V(); if (J) { J = na(J); u("drop", g, J, true, p, n) } } function ga(g) { return w(g.start) } function ba(g) { return v.left(g) }
        function ja(g) { return v.right(g) } function ua(g) { var p, n, J, L, ea, ka; if (e == "resourceDay") p = pa(g); else if (e == "resourceNextWeeks") { n = g.getFullYear(); J = g.getMonth(); g = g.getDate(); for (var ya = 0; ya < o; ya++) { L = $(ya); ea = L.getFullYear(); ka = L.getMonth(); L = L.getDate(); if (n == ea && J == ka && g == L) { p = ya; break } } if (typeof p == "undefined") p = ya } else p = ma(g.getDay()); return { col: p} } function na(g) { return $(g.col) } function $(g) { return e == "resourceDay" ? wa(w(q.visStart), g * d("slotMinutes")) : aa(w(q.visStart), g * Y + ha) } function fa(g) {
            return $(g %
o)
        } function ma(g) { return (g - Math.max(va, qa) + o) % o * Y + ha } function pa(g) { var p = g.getHours(); g = g.getMinutes(); for (var n = d("slotMinutes"), J, L, ea, ka, ya = 0; ya <= 60 / n; ya++) { J = ya * n; L = Math.abs(J - g); if (L <= ea || ya == 0) { ea = L; ka = J } if (ka == 60) { p++; ka = 0 } } g = ka; for (ya = 0; ya < o; ya++) if (fa(ya).getHours() == p && fa(ya).getMinutes() == g) return ya; return o } function U(g) { return D.eq(g) } function A() { var g = parseInt(t(X).find("th.fc-resourceName").css("width").replace("px", "")); return { left: g, right: j + g} } var q = this; q.renderBasic = c; q.setHeight =
h; q.setWidth = m; q.renderDayOverlay = Z; q.defaultSelectionEnd = B; q.renderSelection = ia; q.clearSelection = la; q.reportDayClick = oa; q.dragStart = xa; q.dragStop = ra; q.defaultEventEnd = ga; q.getHoverListener = function () { return I }; q.colContentLeft = ba; q.colContentRight = ja; q.dayOfWeekCol = ma; q.timeOfDayCol = pa; q.dateCell = ua; q.cellDate = na; q.cellIsAllDay = function () { return true }; q.allDayRow = U; q.allDayBounds = A; q.getRowCnt = function () { return E }; q.getColCnt = function () { return o }; q.getResources = function () { return d("resources") };
        q.getColWidth = function () { return H }; q.getViewName = function () { return e }; q.getDaySegmentContainer = function () { return T }; wb.call(q, a, b, e); xb.call(q); yb.call(q); wc.call(q); var d = q.opt, u = q.trigger, y = q.clearEvents, R = q.renderOverlay, V = q.clearOverlays, ta = q.daySelectionMousedown, K = b.formatDate, X, da, C, D, Q, s, G, T, j, l, H, E, o, P, I, v, N, Y, ha, va, qa, ca, F; Za(a.addClass("fc-grid")); P = new zb(function (g, p) {
            var n, J, L; da.each(function (ea, ka) { n = t(ka); J = n.offset().left; if (ea) L[1] = J; L = [J]; p[ea] = L }); L[1] = J + n.outerWidth(); D.each(function (ea,
ka) { if (ea < E) { n = t(ka); J = n.offset().top; if (ea) L[1] = J; L = [J]; g[ea] = L } }); L[1] = J + n.outerHeight()
        }); I = new Ab(P); v = new Bb(function (g) { return G.eq(g) })
    } function wc() {
        function a(u, y) { Z(u); fa(e(u), y) } function b() { z(); xa().empty() } function e(u) {
            var y = ja(), R = ua(), V = na(), ta = w(i.visStart); R = aa(w(ta), R); var K = t.map(u, La), X, da, C, D, Q, s, G, T = []; if ($() == "resourceDay") { R = w(i.visEnd); K = t.map(u, function (j) { return j.end || aa(j.start, 1) }) } for (X = 0; X < y; X++) {
                G = V[X].id; da = fb(eb(u, K, ta, R)); for (C = 0; C < da.length; C++) {
                    D = da[C]; for (Q =
0; Q < D.length; Q++) { s = D[Q]; s.row = X; s.level = C; G == s.event.resource && T.push(s) }
                }
            } return T
        } function c(u, y, R) { x(u) && f(u, y); R.isEnd && O(u) && k(u, y, R); B(u, y) } function f(u, y) {
            var R = ra(), V, ta, K, X, da, C = $(); y.draggable({ zIndex: 9, delay: 50, opacity: h("dragOpacity"), revertDuration: h("dragRevertDuration"), start: function (D, Q) {
                m("eventDragStart", y, u, D, Q); la(u, y); R.start(function (s, G, T, j) {
                    y.draggable("option", "revert", !s || !T && !j); ba(); if (s) {
                        K = T * (h("isRTL") ? -1 : 1); da = h("resources"); X = da[s.row].id; if (C == "resourceDay") {
                            ta =
j * (h("isRTL") ? -1 : 1) * h("slotMinutes"); ga(wa(w(u.start), ta), wa(w(u.end), ta), false, s.row)
                        } else { V = j * (h("isRTL") ? -1 : 1); ga(aa(w(u.start), V), aa(La(u), V), false, s.row) }
                    } else K = V = ta = 0
                }, D, "drag")
            }, stop: function (D, Q) { R.stop(); ba(); m("eventDragStop", y, u, D, Q); if (C == "resourceDay" && (ta || K)) oa(this, u, 0, ta, u.allDay, D, Q, X); else if (V || K) oa(this, u, V, 0, u.allDay, D, Q, X); else { y.css("filter", ""); ia(u, y) } }
            })
        } function k(u, y, R) {
            var V = h("isRTL"), ta = V ? "w" : "e", K = y.find("div.ui-resizable-" + ta), X = false; Za(y); y.mousedown(function (da) { da.preventDefault() }).click(function (da) {
                if (X) {
                    da.preventDefault();
                    da.stopImmediatePropagation()
                }
            }); K.mousedown(function (da) {
                function C(I) { m("eventResizeStop", this, u, I); t("body").css("cursor", ""); D.stop(); ba(); if (l) d(this, u, l, 0, I); else H && d(this, u, 0, H, I); setTimeout(function () { X = false }, 0) } if (da.which == 1) {
                    X = true; var D = i.getHoverListener(); ja(); var Q = ua(), s = $(), G = V ? -1 : 1, T = V ? Q - 1 : 0, j = y.css("top"), l, H, E, o = t.extend({}, u), P = ma(u.start); pa(); t("body").css("cursor", ta + "-resize").one("mouseup", C); m("eventResizeStart", this, u, da); D.start(function (I, v) {
                        if (I) {
                            Math.max(P.row, I.row);
                            I = I.col; if (s == "resourceDay") { H = h("slotMinutes") * I * G + T - (h("slotMinutes") * v.col * G + T); I = wa(U(u), H, true) } else { l = 7 + I * G + T - (7 + v.col * G + T); I = aa(U(u), l, true) } if (l || H) { o.end = I; var N = E; E = A(q([o]), R.row, j); E.find("*").css("cursor", ta + "-resize"); N && N.remove(); la(u) } else if (E) { ia(u); E.remove(); E = null } ba(); s == "resourceDay" ? ga(u.start, wa(w(I), 0), 1, v.row) : ga(u.start, aa(w(I), 1), 1, v.row)
                        }
                    }, da)
                }
            })
        } var i = this; i.renderEvents = a; i.compileDaySegs = e; i.clearEvents = b; i.bindDaySeg = c; i.resizableResourceEvent = k; Cb.call(i); var h =
i.opt, m = i.trigger, x = i.isEventDraggable, O = i.isEventResizable, Z = i.reportEvents, z = i.reportEventClear, B = i.eventElementHandlers, ia = i.showEvents, la = i.hideEvents, oa = i.eventDrop, xa = i.getDaySegmentContainer, ra = i.getHoverListener, ga = i.renderDayOverlay, ba = i.clearOverlays, ja = i.getRowCnt, ua = i.getColCnt, na = i.getResources, $ = i.getViewName, fa = i.renderDaySegs, ma = i.dateCell, pa = i.clearSelection, U = i.eventEnd, A = i.renderTempDaySegs, q = i.compileDaySegs, d = i.eventResize
    } function xc(a, b) {
        function e(h, m) {
            m && aa(h, m * 7); h = aa(w(h),
-((h.getDay() - f("firstDay") + 7) % 7)); m = aa(w(h), 7); var x = w(h), O = w(m), Z = f("weekends"); if (!Z) { Aa(x); Aa(O, -1, true) } c.title = i(x, aa(w(O), -1), f("titleFormat")); c.start = h; c.end = m; c.visStart = x; c.visEnd = O; k(Z ? 7 : 5)
        } var c = this; c.render = e; Tb.call(c, a, b, "agendaWeek"); var f = c.opt, k = c.renderAgenda, i = b.formatDates
    } function yc(a, b) {
        function e(h, m) { if (m) { aa(h, m); f("weekends") || Aa(h, m < 0 ? -1 : 1) } m = w(h, true); var x = aa(w(m), 1); c.title = i(h, f("titleFormat")); c.start = c.visStart = m; c.end = c.visEnd = x; k(1) } var c = this; c.render = e; Tb.call(c,
a, b, "agendaDay"); var f = c.opt, k = c.renderAgenda, i = b.formatDate
    } function Tb(a, b, e) {
        function c(r) { Ea = r; f(); H ? C() : k(); i() } function f() { ab = X("theme") ? "ui" : "fc"; Ub = X("weekends") ? 0 : 1; Vb = X("firstDay"); if (Wb = X("isRTL")) { Ja = -1; Ka = Ea - 1 } else { Ja = 1; Ka = 0 } Ma = Ra(X("minTime")); ib = Ra(X("maxTime")); Xb = X("columnFormat") } function k() {
            var r = ab + "-widget-header", W = ab + "-widget-content", M, S, za, Ba, Ga, Ha = X("slotMinutes") % 15 == 0; M = "<table style='width:100%' class='fc-agenda-days fc-border-separate' cellspacing='0'><thead><tr><th class='fc-agenda-axis " +
r + "'>&nbsp;</th>"; for (S = 0; S < Ea; S++) M += "<th class='fc- fc-col" + S + " " + r + "'/>"; M += "<th class='fc-agenda-gutter " + r + "'>&nbsp;</th></tr></thead><tbody><tr><th class='fc-agenda-axis " + r + "'>&nbsp;</th>"; for (S = 0; S < Ea; S++) M += "<td class='fc- fc-col" + S + " " + W + "'><div><div class='fc-day-content'><div style='position:relative'>&nbsp;</div></div></div></td>"; M += "<td class='fc-agenda-gutter " + W + "'>&nbsp;</td></tr></tbody></table>"; H = t(M).appendTo(a); E = H.find("thead"); o = E.find("th").slice(1, -1); P = H.find("tbody");
            I = P.find("td").slice(0, -1); v = I.find("div.fc-day-content div"); N = I.eq(0); Y = N.find("> div"); gb(E.add(E.find("tr"))); gb(P.add(P.find("tr"))); L = E.find("th:first"); ea = H.find(".fc-agenda-gutter"); ha = t("<div style='position:absolute;z-index:2;left:0;width:100%'/>").appendTo(a); if (X("allDaySlot")) {
                va = t("<div style='position:absolute;z-index:8;top:0;left:0'/>").appendTo(ha); M = "<table style='width:100%' class='fc-agenda-allday' cellspacing='0'><tr><th class='" + r + " fc-agenda-axis'>" + X("allDayText") + "</th><td><div class='fc-day-content'><div style='position:relative'/></div></td><th class='" +
r + " fc-agenda-gutter'>&nbsp;</th></tr></table>"; qa = t(M).appendTo(ha); ca = qa.find("tr"); z(ca.find("td")); L = L.add(qa.find("th:first")); ea = ea.add(qa.find("th.fc-agenda-gutter")); ha.append("<div class='fc-agenda-divider " + r + "'><div class='fc-agenda-divider-inner'/></div>")
            } else va = t([]); F = t("<div style='position:absolute;width:100%;overflow-x:hidden;overflow-y:auto'/>").appendTo(ha); g = t("<div style='position:relative;width:100%;overflow:hidden'/>").appendTo(F); p = t("<div style='position:absolute;z-index:8;top:0;left:0'/>").appendTo(g);
            M = "<table class='fc-agenda-slots' style='width:100%' cellspacing='0'><tbody>"; za = Ib(); Ba = wa(w(za), ib); wa(za, Ma); for (S = Db = 0; za < Ba; S++) { Ga = za.getMinutes(); M += "<tr class='fc-slot" + S + " " + (!Ga ? "" : "fc-minor") + "'><th class='fc-agenda-axis " + r + "'>" + (!Ha || !Ga ? l(za, X("axisFormat")) : "&nbsp;") + "</th><td class='" + W + "'><div style='position:relative'>&nbsp;</div></td></tr>"; wa(za, X("slotMinutes")); Db++ } M += "</tbody></table>"; n = t(M).appendTo(g); J = n.find("div:first"); B(n.find("td")); L = L.add(n.find("th:first"))
        } function i() {
            var r,
W, M, S, za = Ia(new Date); for (r = 0; r < Ea; r++) { S = ua(r); W = o.eq(r); W.html(l(S, Xb)); M = I.eq(r); +S == +za ? M.addClass(ab + "-state-highlight fc-today") : M.removeClass(ab + "-state-highlight fc-today"); $a(W.add(M), S) }
        } function h(r, W) { if (r === sa) r = Yb; Yb = r; Eb = {}; var M = P.position().top, S = F.position().top; r = Math.min(r - M, n.height() + S + 1); Y.height(r - Pa(N)); ha.css("top", M); F.height(r - S - 1); bb = J.height() + 1; W && x() } function m(r) {
            ya = r; jb.clear(); Na = 0; Sa(L.width("").each(function (W, M) { Na = Math.max(Na, t(M).outerWidth()) }), Na); r = F[0].clientWidth;
            if (Fb = F.width() - r) { Sa(ea, Fb); ea.show().prev().removeClass("fc-last") } else ea.hide().prev().addClass("fc-last"); kb = Math.floor((r - Na) / Ea); Sa(o.slice(0, -1), kb)
        } function x() { function r() { F.scrollTop(S) } var W = Ib(), M = w(W); M.setHours(X("firstHour")); var S = fa(W, M) + 1; r(); setTimeout(r, 0) } function O() { Zb = F.scrollTop() } function Z() { F.scrollTop(Zb) } function z(r) { r.click(ia).mousedown(T) } function B(r) { r.click(ia).mousedown(y) } function ia(r) {
            if (!X("selectable")) {
                var W = Math.min(Ea - 1, Math.floor((r.pageX - H.offset().left -
Na) / kb)), M = ua(W), S = this.parentNode.className.match(/fc-slot(\d+)/); if (S) { S = parseInt(S[1]) * X("slotMinutes"); var za = Math.floor(S / 60); M.setHours(za); M.setMinutes(S % 60 + Ma); da("dayClick", I[W], M, false, r) } else da("dayClick", I[W], M, true, r)
            }
        } function la(r, W, M) { M && Oa.build(); var S = w(K.visStart); if (Wb) { M = Ca(W, S) * Ja + Ka + 1; r = Ca(r, S) * Ja + Ka + 1 } else { M = Ca(r, S); r = Ca(W, S) } M = Math.max(0, M); r = Math.min(Ea, r); M < r && z(oa(0, M, 0, r - 1)) } function oa(r, W, M, S) { r = Oa.rect(r, W, M, S, ha); return D(r, ha) } function xa(r, W) {
            for (var M = w(K.visStart),
S = aa(w(M), 1), za = 0; za < Ea; za++) { var Ba = new Date(Math.max(M, r)), Ga = new Date(Math.min(S, W)); if (Ba < Ga) { var Ha = za * Ja + Ka; Ha = Oa.rect(0, Ha, 0, Ha, g); Ba = fa(M, Ba); Ga = fa(M, Ga); Ha.top = Ba; Ha.height = Ga - Ba; B(D(Ha, g)) } aa(M, 1); aa(S, 1) }
        } function ra(r) { return jb.left(r) } function ga(r) { return jb.right(r) } function ba(r) { return { row: Math.floor(Ca(r, K.visStart) / 7), col: $(r.getDay())} } function ja(r) { var W = ua(r.col); r = r.row; X("allDaySlot") && r--; r >= 0 && wa(W, Ma + r * X("slotMinutes")); return W } function ua(r) {
            return aa(w(K.visStart),
r * Ja + Ka)
        } function na(r) { return X("allDaySlot") && !r.row } function $(r) { return (r - Math.max(Vb, Ub) + Ea) % Ea * Ja + Ka } function fa(r, W) { r = w(r, true); if (W < wa(w(r), Ma)) return 0; if (W >= wa(w(r), ib)) return n.height(); r = X("slotMinutes"); W = W.getHours() * 60 + W.getMinutes() - Ma; var M = Math.floor(W / r), S = Eb[M]; if (S === sa) S = Eb[M] = n.find("tr:eq(" + M + ") td div")[0].offsetTop; return Math.max(0, Math.round(S - 1 + bb * (W % r / r))) } function ma() { return { left: Na, right: ya - Fb} } function pa() { return ca } function U(r) {
            var W = w(r.start); if (r.allDay) return W;
            return wa(W, X("defaultEventMinutes"))
        } function A(r, W) { if (W) return w(r); return wa(w(r), X("slotMinutes")) } function q(r, W, M) { if (M) X("allDaySlot") && la(r, aa(w(W), 1), true); else d(r, W) } function d(r, W) {
            var M = X("selectHelper"); Oa.build(); if (M) {
                var S = Ca(r, K.visStart) * Ja + Ka; if (S >= 0 && S < Ea) {
                    S = Oa.rect(0, S, 0, S, g); var za = fa(r, r), Ba = fa(r, W); if (Ba > za) {
                        S.top = za; S.height = Ba - za; S.left += 2; S.width -= 5; if (t.isFunction(M)) { if (r = M(r, W)) { S.position = "absolute"; S.zIndex = 8; ka = t(r).css(S).appendTo(g) } } else {
                            S.isStart = true; S.isEnd =
true; ka = t(j({ title: "", start: r, end: W, className: ["fc-select-helper"], editable: false }, S)); ka.css("opacity", X("dragOpacity"))
                        } if (ka) { B(ka); g.append(ka); Sa(ka, S.width, true); Nb(ka, S.height, true) }
                    }
                }
            } else xa(r, W)
        } function u() { Q(); if (ka) { ka.remove(); ka = null } } function y(r) {
            if (r.which == 1 && X("selectable")) {
                G(r); var W; Va.start(function (M, S) { u(); if (M && M.col == S.col && !na(M)) { S = ja(S); M = ja(M); W = [S, wa(w(S), X("slotMinutes")), M, wa(w(M), X("slotMinutes"))].sort(Pb); d(W[0], W[3]) } else W = null }, r); t(document).one("mouseup",
function (M) { Va.stop(); if (W) { +W[0] == +W[1] && R(W[0], false, M); s(W[0], W[3], false, M) } })
            }
        } function R(r, W, M) { da("dayClick", I[$(r.getDay())], r, W, M) } function V(r, W) { Va.start(function (M) { Q(); if (M) if (na(M)) oa(M.row, M.col, M.row, M.col); else { M = ja(M); var S = wa(w(M), X("defaultEventMinutes")); xa(M, S) } }, W) } function ta(r, W, M) { var S = Va.stop(); Q(); S && da("drop", r, ja(S), na(S), W, M) } var K = this; K.renderAgenda = c; K.setWidth = m; K.setHeight = h; K.beforeHide = O; K.afterShow = Z; K.defaultEventEnd = U; K.timePosition = fa; K.dayOfWeekCol = $; K.dateCell =
ba; K.cellDate = ja; K.cellIsAllDay = na; K.allDayRow = pa; K.allDayBounds = ma; K.getHoverListener = function () { return Va }; K.colContentLeft = ra; K.colContentRight = ga; K.getDaySegmentContainer = function () { return va }; K.getSlotSegmentContainer = function () { return p }; K.getMinMinute = function () { return Ma }; K.getMaxMinute = function () { return ib }; K.getBodyContent = function () { return g }; K.getRowCnt = function () { return 1 }; K.getColCnt = function () { return Ea }; K.getColWidth = function () { return kb }; K.getSlotHeight = function () { return bb }; K.getViewName =
function () { return e }; K.defaultSelectionEnd = A; K.renderDayOverlay = la; K.renderSelection = q; K.clearSelection = u; K.reportDayClick = R; K.dragStart = V; K.dragStop = ta; wb.call(K, a, b, e); xb.call(K); yb.call(K); zc.call(K); var X = K.opt, da = K.trigger, C = K.clearEvents, D = K.renderOverlay, Q = K.clearOverlays, s = K.reportSelection, G = K.unselect, T = K.daySelectionMousedown, j = K.slotSegHtml, l = b.formatDate, H, E, o, P, I, v, N, Y, ha, va, qa, ca, F, g, p, n, J, L, ea, ka, ya, Yb, Na, kb, Fb, bb, Zb, Ea, Db, Oa, Va, jb, Eb = {}, ab, Vb, Ub, Wb, Ja, Ka, Ma, ib, Xb; Za(a.addClass("fc-agenda"));
        Oa = new zb(function (r, W) { function M(lb) { return Math.max(Ha, Math.min(Ac, lb)) } var S, za, Ba; o.each(function (lb, Bc) { S = t(Bc); za = S.offset().left; if (lb) Ba[1] = za; Ba = [za]; W[lb] = Ba }); Ba[1] = za + S.outerWidth(); if (X("allDaySlot")) { S = ca; za = S.offset().top; r[0] = [za, za + S.outerHeight()] } for (var Ga = g.offset().top, Ha = F.offset().top, Ac = Ha + F.outerHeight(), mb = 0; mb < Db; mb++) r.push([M(Ga + bb * mb), M(Ga + bb * (mb + 1))]) }); Va = new Ab(Oa); jb = new Bb(function (r) { return v.eq(r) })
    } function zc() {
        function a(j, l) {
            ra(j); var H, E = j.length, o = [], P =
[]; for (H = 0; H < E; H++) j[H].allDay ? o.push(j[H]) : P.push(j[H]); if (B("allDaySlot")) { q(e(o), l); ja() } k(c(P), l)
        } function b() { ga(); ua().empty(); na().empty() } function e(j) { j = fb(eb(j, t.map(j, La), z.visStart, z.visEnd)); var l, H = j.length, E, o, P, I = []; for (l = 0; l < H; l++) { E = j[l]; for (o = 0; o < E.length; o++) { P = E[o]; P.row = 0; P.level = l; I.push(P) } } return I } function c(j) {
            var l = u(), H = ma(), E = fa(), o = wa(w(z.visStart), H), P = t.map(j, f), I, v, N, Y, ha, va, qa = []; for (I = 0; I < l; I++) {
                v = fb(eb(j, P, o, wa(w(o), E - H))); Cc(v); for (N = 0; N < v.length; N++) {
                    Y = v[N];
                    for (ha = 0; ha < Y.length; ha++) { va = Y[ha]; va.col = I; va.level = N; qa.push(va) }
                } aa(o, 1, true)
            } return qa
        } function f(j) { return j.end ? w(j.end) : wa(w(j.start), B("defaultEventMinutes")) } function k(j, l) {
            var H, E = j.length, o, P, I, v, N, Y, ha, va, qa, ca = "", F, g, p = {}, n = {}, J = na(), L; H = u(); if (F = B("isRTL")) { g = -1; L = H - 1 } else { g = 1; L = 0 } for (H = 0; H < E; H++) {
                o = j[H]; P = o.event; I = pa(o.start, o.start); v = pa(o.start, o.end); N = o.col; Y = o.level; ha = o.forward || 0; va = U(N * g + L); qa = A(N * g + L) - va; qa = Math.min(qa - 6, qa * 0.95); N = Y ? qa / (Y + ha + 1) : ha ? (qa / (ha + 1) - 6) * 2 : qa; Y =
va + qa / (Y + ha + 1) * Y * g + (F ? qa - N : 0); o.top = I; o.left = Y; o.outerWidth = N; o.outerHeight = v - I; ca += i(P, o)
            } J[0].innerHTML = ca; F = J.children(); for (H = 0; H < E; H++) { o = j[H]; P = o.event; ca = t(F[H]); g = ia("eventRender", P, P, ca); if (g === false) ca.remove(); else { if (g && g !== true) { ca.remove(); ca = t(g).css({ position: "absolute", top: o.top, left: o.left }).appendTo(J) } o.element = ca; if (P._id === l) m(P, ca, o); else ca[0]._fci = H; ta(P, ca) } } Mb(J, j, m); for (H = 0; H < E; H++) {
                o = j[H]; if (ca = o.element) {
                    P = p[l = o.key = Rb(ca[0])]; o.vsides = P === sa ? (p[l] = Pa(ca, true)) : P; P = n[l];
                    o.hsides = P === sa ? (n[l] = ub(ca, true)) : P; l = ca.find("div.fc-event-content"); if (l.length) o.contentTop = l[0].offsetTop
                }
            } for (H = 0; H < E; H++) { o = j[H]; if (ca = o.element) { ca[0].style.width = Math.max(0, o.outerWidth - o.hsides) + "px"; p = Math.max(0, o.outerHeight - o.vsides); ca[0].style.height = p + "px"; P = o.event; if (o.contentTop !== sa && p - o.contentTop < 10) { ca.find("div.fc-event-time").text(G(P.start, B("timeFormat")) + " - " + P.title); ca.find("div.fc-event-title").remove() } ia("eventAfterRender", P, P, ca) } }
        } function i(j, l) {
            var H = "<", E = j.url,
o = Sb(j, B), P = o ? " style='" + o + "'" : "", I = ["fc-event", "fc-event-skin", "fc-event-vert"]; la(j) && I.push("fc-event-draggable"); l.isStart && I.push("fc-corner-top"); l.isEnd && I.push("fc-corner-bottom"); I = I.concat(j.className); if (j.source) I = I.concat(j.source.className || []); H += E ? "a href='" + Ua(j.url) + "'" : "div"; H += " class='" + I.join(" ") + "' style='position:absolute;z-index:8;top:" + l.top + "px;left:" + l.left + "px;" + o + "'><div class='fc-event-inner fc-event-skin'" + P + "><div class='fc-event-head fc-event-skin'" + P + "><div class='fc-event-time'>" +
Ua(T(j.start, j.end, B("timeFormat"))) + "</div></div><div class='fc-event-content'><div class='fc-event-title'>" + Ua(j.title) + "</div></div><div class='fc-event-bg'></div></div>"; if (l.isEnd && oa(j)) H += "<div class='ui-resizable-handle ui-resizable-s'>=</div>"; H += "</" + (E ? "a" : "div") + ">"; return H
        } function h(j, l, H) { la(j) && x(j, l, H.isStart); H.isEnd && oa(j) && d(j, l, H); ba(j, l) } function m(j, l, H) { var E = l.find("div.fc-event-time"); la(j) && O(j, l, E); H.isEnd && oa(j) && Z(j, l, E); ba(j, l) } function x(j, l, H) {
            function E() {
                if (!I) {
                    l.width(o).height("").draggable("option",
"grid", null); I = true
                }
            } var o, P, I = true, v, N = B("isRTL") ? -1 : 1, Y = $(), ha = y(), va = R(), qa = ma(); l.draggable({ zIndex: 9, opacity: B("dragOpacity", "month"), revertDuration: B("dragRevertDuration"), start: function (ca, F) {
                ia("eventDragStart", l, j, ca, F); X(j, l); o = l.width(); Y.start(function (g, p, n, J) {
                    Q(); if (g) {
                        P = false; v = J * N; if (g.row) if (H) { if (I) { l.width(ha - 10); Nb(l, va * Math.round((j.end ? (j.end - j.start) / Dc : B("defaultEventMinutes")) / B("slotMinutes"))); l.draggable("option", "grid", [ha, 1]); I = false } } else P = true; else {
                            D(aa(w(j.start),
v), aa(La(j), v)); E()
                        } P = P || I && !v
                    } else { E(); P = true } l.draggable("option", "revert", P)
                }, ca, "drag")
            }, stop: function (ca, F) { Y.stop(); Q(); ia("eventDragStop", l, j, ca, F); if (P) { E(); l.css("filter", ""); K(j, l) } else { var g = 0; I || (g = Math.round((l.offset().top - V().offset().top) / va) * B("slotMinutes") + qa - (j.start.getHours() * 60 + j.start.getMinutes())); da(this, j, v, g, I, ca, F) } }
            })
        } function O(j, l, H) {
            function E(g) { var p = wa(w(j.start), g), n; if (j.end) n = wa(w(j.end), g); H.text(T(p, n, B("timeFormat"))) } function o() {
                if (I) {
                    H.css("display", "");
                    l.draggable("option", "grid", [ca, F]); I = false
                }
            } var P, I = false, v, N, Y, ha = B("isRTL") ? -1 : 1, va = $(), qa = u(), ca = y(), F = R(); l.draggable({ zIndex: 9, scroll: false, grid: [ca, F], axis: qa == 1 ? "y" : false, opacity: B("dragOpacity"), revertDuration: B("dragRevertDuration"), start: function (g, p) {
                ia("eventDragStart", l, j, g, p); X(j, l); P = l.position(); N = Y = 0; va.start(function (n, J, L, ea) {
                    l.draggable("option", "revert", !n); Q(); if (n) {
                        v = ea * ha; if (B("allDaySlot") && !n.row) {
                            if (!I) { I = true; H.hide(); l.draggable("option", "grid", null) } D(aa(w(j.start),
v), aa(La(j), v))
                        } else o()
                    }
                }, g, "drag")
            }, drag: function (g, p) { N = Math.round((p.position.top - P.top) / F) * B("slotMinutes"); if (N != Y) { I || E(N); Y = N } }, stop: function (g, p) { var n = va.stop(); Q(); ia("eventDragStop", l, j, g, p); if (n && (v || N || I)) da(this, j, v, I ? 0 : N, I, g, p); else { o(); l.css("filter", ""); l.css(P); E(0); K(j, l) } }
            })
        } function Z(j, l, H) {
            var E, o, P = R(); l.resizable({ handles: { s: "div.ui-resizable-s" }, grid: P, start: function (I, v) { E = o = 0; X(j, l); l.css("z-index", 9); ia("eventResizeStart", this, j, I, v) }, resize: function (I, v) {
                E = Math.round((Math.max(P,
l.height()) - v.originalSize.height) / P); if (E != o) { H.text(T(j.start, !E && !j.end ? null : wa(xa(j), B("slotMinutes") * E), B("timeFormat"))); o = E }
            }, stop: function (I, v) { ia("eventResizeStop", this, j, I, v); if (E) C(this, j, 0, B("slotMinutes") * E, I, v); else { l.css("z-index", 8); K(j, l) } }
            })
        } var z = this; z.renderEvents = a; z.compileDaySegs = e; z.clearEvents = b; z.slotSegHtml = i; z.bindDaySeg = h; Cb.call(z); var B = z.opt, ia = z.trigger, la = z.isEventDraggable, oa = z.isEventResizable, xa = z.eventEnd, ra = z.reportEvents, ga = z.reportEventClear, ba = z.eventElementHandlers,
ja = z.setHeight, ua = z.getDaySegmentContainer, na = z.getSlotSegmentContainer, $ = z.getHoverListener, fa = z.getMaxMinute, ma = z.getMinMinute, pa = z.timePosition, U = z.colContentLeft, A = z.colContentRight, q = z.renderDaySegs, d = z.resizableDayEvent, u = z.getColCnt, y = z.getColWidth, R = z.getSlotHeight, V = z.getBodyContent, ta = z.reportEventElement, K = z.showEvents, X = z.hideEvents, da = z.eventDrop, C = z.eventResize, D = z.renderDayOverlay, Q = z.clearOverlays, s = z.calendar, G = s.formatDate, T = s.formatDates
    } function Cc(a) {
        var b, e, c, f, k, i; for (b = a.length -
1; b > 0; b--) { f = a[b]; for (e = 0; e < f.length; e++) { k = f[e]; for (c = 0; c < a[b - 1].length; c++) { i = a[b - 1][c]; if (Lb(k, i)) i.forward = Math.max(i.forward || 0, (k.forward || 0) + 1) } } }
    } function wb(a, b, e) {
        function c(U, A) { var q = pa[U]; if (typeof q == "object") return U == "resources" ? q : qb(q, A || e); return q } function f(U, A) { return b.trigger.apply(b, [U, A || ba].concat(Array.prototype.slice.call(arguments, 2), [ba])) } function k(U) { return h(U) && !c("disableDragging") } function i(U) { return h(U) && !c("disableResizing") } function h(U) {
            return Ya(U.editable,
(U.source || {}).editable, c("editable"))
        } function m(U) { $ = {}; var A, q = U.length, d; for (A = 0; A < q; A++) { d = U[A]; if ($[d._id]) $[d._id].push(d); else $[d._id] = [d] } } function x(U) { return U.end ? w(U.end) : ja(U) } function O(U, A) { fa.push(A); if (ma[U._id]) ma[U._id].push(A); else ma[U._id] = [A] } function Z() { fa = []; ma = {} } function z(U, A) {
            A.click(function (q) { if (!A.hasClass("ui-draggable-dragging") && !A.hasClass("ui-resizable-resizing")) return f("eventClick", this, U, q) }).hover(function (q) { f("eventMouseover", this, U, q) }, function (q) {
                f("eventMouseout",
this, U, q)
            })
        } function B(U, A) { la(U, A, "show") } function ia(U, A) { la(U, A, "hide") } function la(U, A, q) { U = ma[U._id]; var d, u = U.length; for (d = 0; d < u; d++) if (!A || U[d][0] != A[0]) U[d][q]() } function oa(U, A, q, d, u, y, R, V) { var ta = A.allDay, K = A._id; ra($[K], q, d, u, V); f("eventDrop", U, A, q, d, u, function () { ra($[K], -q, -d, ta); na(K) }, y, R, V); na(K) } function xa(U, A, q, d, u, y) { var R = A._id; ga($[R], q, d); f("eventResize", U, A, q, d, function () { ga($[R], -q, -d); na(R) }, u, y); na(R) } function ra(U, A, q, d, u) {
            q = q || 0; for (var y, R = U.length, V = 0; V < R; V++) {
                y = U[V];
                if (d !== sa) y.allDay = d; wa(aa(y.start, A, true), q); if (y.end) y.end = wa(aa(y.end, A, true), q); if (y.resource != u && R == 1) y.resource = u; ua(y, pa)
            }
        } function ga(U, A, q) { q = q || 0; for (var d, u = U.length, y = 0; y < u; y++) { d = U[y]; d.end = wa(aa(x(d), A, true), q); ua(d, pa) } } var ba = this; ba.element = a; ba.calendar = b; ba.name = e; ba.opt = c; ba.trigger = f; ba.isEventDraggable = k; ba.isEventResizable = i; ba.reportEvents = m; ba.eventEnd = x; ba.reportEventElement = O; ba.reportEventClear = Z; ba.eventElementHandlers = z; ba.showEvents = B; ba.hideEvents = ia; ba.eventDrop = oa;
        ba.eventResize = xa; var ja = ba.defaultEventEnd, ua = b.normalizeEvent, na = b.reportEventChange, $ = {}, fa = [], ma = {}, pa = b.options
    } function Cb() {
        function a(C, D) { var Q = y(), s = na(), G = $(), T = 0, j, l, H = C.length, E, o; Q[0].innerHTML = e(C); c(C, Q.children()); f(C); k(C, Q, D); i(C); h(C); m(C); D = x(); for (Q = 0; Q < s; Q++) { j = []; for (l = 0; l < G; l++) j[l] = 0; for (; T < H && (E = C[T]).row == Q; ) { l = Qb(j.slice(E.startCol, E.endCol)); E.top = l; l += E.outerHeight; for (o = E.startCol; o < E.endCol; o++) j[o] = l; T++ } D[Q].height(Qb(j)) } Z(C, O(D)) } function b(C, D, Q) {
            var s = t("<div/>"),
G = y(), T = C.length, j; s[0].innerHTML = e(C); s = s.children(); G.append(s); c(C, s); i(C); h(C); m(C); Z(C, O(x())); s = []; for (G = 0; G < T; G++) if (j = C[G].element) { C[G].row === D && j.css("top", Q); s.push(j[0]) } return t(s)
        } function e(C) {
            var D = ia("isRTL"), Q, s = C.length, G, T, j, l; Q = ma(); var H = Q.left, E = Q.right, o, P, I, v, N, Y = "", ha = da(); for (Q = 0; Q < s; Q++) {
                G = C[Q]; T = G.event; l = ["fc-event", "fc-event-skin", "fc-event-hori"]; oa(T) && l.push("fc-event-draggable"); if (D) {
                    G.isStart && l.push("fc-corner-right"); G.isEnd && l.push("fc-corner-left"); o = A(G.end.getDay() -
1); P = A(G.start.getDay()); I = G.isEnd ? pa(o) : H; v = G.isStart ? U(P) : E
                } else { G.isStart && l.push("fc-corner-left"); G.isEnd && l.push("fc-corner-right"); if (ha == "resourceMonth") { o = G.start.getDate() - 1; P = G.end.getDate() - 2; if (P < 0) P = $() - 1 } else if (ha == "resourceNextWeeks") { o = d(G.start).col; P = d(G.end).col - 1 } else if (ha == "resourceDay") { o = q(G.start); P = q(G.end) - 1 } else { o = A(G.start.getDay()); P = A(G.end.getDay() - 1) } I = G.isStart ? pa(o) : H; v = G.isEnd ? U(P) : E } l = l.concat(T.className); if (T.source) l = l.concat(T.source.className || []); j = T.url;
                N = Sb(T, ia); Y += j ? "<a href='" + Ua(j) + "'" : "<div"; Y += " class='" + l.join(" ") + "' style='position:absolute;z-index:8;left:" + I + "px;" + N + "'><div class='fc-event-inner fc-event-skin'" + (N ? " style='" + N + "'" : "") + ">"; if (!T.allDay && G.isStart) Y += "<span class='fc-event-time'>" + Ua(V(T.start, T.end, ia("timeFormat"))) + "</span>"; Y += "<span class='fc-event-title' " + (N ? " style='" + N + "'" : "") + ">" + Ua(T.title) + "</span></div>"; if (G.isEnd && xa(T)) Y += "<div class='ui-resizable-handle ui-resizable-" + (D ? "w" : "e") + "'>&nbsp;&nbsp;&nbsp;</div>";
                Y += "</" + (j ? "a" : "div") + ">"; G.left = I; G.outerWidth = v - I; G.startCol = o; G.endCol = P + 1
            } return Y
        } function c(C, D) { var Q, s = C.length, G, T, j; for (Q = 0; Q < s; Q++) { G = C[Q]; T = G.event; j = t(D[Q]); T = la("eventRender", T, T, j); if (T === false) j.remove(); else { if (T && T !== true) { T = t(T).css({ position: "absolute", left: G.left }); j.replaceWith(T); j = T } G.element = j } } } function f(C) { var D, Q = C.length, s, G; for (D = 0; D < Q; D++) { s = C[D]; (G = s.element) && ga(s.event, G) } } function k(C, D, Q) {
            var s, G = C.length, T, j, l; for (s = 0; s < G; s++) {
                T = C[s]; if (j = T.element) {
                    l = T.event;
                    if (l._id === Q) R(l, j, T); else j[0]._fci = s
                }
            } Mb(D, C, R)
        } function i(C) { var D, Q = C.length, s, G, T, j, l = {}; for (D = 0; D < Q; D++) { s = C[D]; if (G = s.element) { T = s.key = Rb(G[0]); j = l[T]; if (j === sa) j = l[T] = ub(G, true); s.hsides = j } } } function h(C) { var D, Q = C.length, s, G; for (D = 0; D < Q; D++) { s = C[D]; if (G = s.element) G[0].style.width = Math.max(0, s.outerWidth - s.hsides) + "px" } } function m(C) { var D, Q = C.length, s, G, T, j, l = {}; for (D = 0; D < Q; D++) { s = C[D]; if (G = s.element) { T = s.key; j = l[T]; if (j === sa) j = l[T] = Ob(G); s.outerHeight = G[0].offsetHeight + j } } } function x() {
            var C,
D = na(), Q = []; for (C = 0; C < D; C++) Q[C] = fa(C).find("td:not(.fc-resourceName):first div.fc-day-content > div"); return Q
        } function O(C) { var D, Q = C.length, s = []; for (D = 0; D < Q; D++) s[D] = C[D][0].offsetTop; return s } function Z(C, D) { var Q, s = C.length, G, T; for (Q = 0; Q < s; Q++) { G = C[Q]; if (T = G.element) { T[0].style.top = D[G.row] + (G.top || 0) + "px"; G = G.event; la("eventAfterRender", G, G, T) } } } function z(C, D, Q) {
            var s = ia("isRTL"), G = s ? "w" : "e", T = D.find("div.ui-resizable-" + G), j = false; Za(D); D.mousedown(function (l) { l.preventDefault() }).click(function (l) {
                if (j) {
                    l.preventDefault();
                    l.stopImmediatePropagation()
                }
            }); T.mousedown(function (l) {
                function H(ca) { la("eventResizeStop", this, C, ca); t("body").css("cursor", ""); E.stop(); K(); Y && ua(this, C, Y, 0, ca); setTimeout(function () { j = false }, 0) } if (l.which == 1) {
                    j = true; var E = B.getHoverListener(), o = na(), P = $(), I = s ? -1 : 1, v = s ? P - 1 : 0, N = D.css("top"), Y, ha, va = t.extend({}, C), qa = d(C.start); X(); t("body").css("cursor", G + "-resize").one("mouseup", H); la("eventResizeStart", this, C, l); E.start(function (ca, F) {
                        if (ca) {
                            var g = Math.max(qa.row, ca.row); ca = ca.col; if (o == 1) g = 0;
                            if (g == qa.row) ca = s ? Math.min(qa.col, ca) : Math.max(qa.col, ca); Y = g * 7 + ca * I + v - (F.row * 7 + F.col * I + v); F = aa(ra(C), Y, true); if (Y) { va.end = F; g = ha; ha = b(u([va]), Q.row, N); ha.find("*").css("cursor", G + "-resize"); g && g.remove(); ja(C) } else if (ha) { ba(C); ha.remove(); ha = null } K(); ta(C.start, aa(w(F), 1))
                        }
                    }, l)
                }
            })
        } var B = this; B.renderDaySegs = a; B.resizableDayEvent = z; B.renderTempDaySegs = b; var ia = B.opt, la = B.trigger, oa = B.isEventDraggable, xa = B.isEventResizable, ra = B.eventEnd, ga = B.reportEventElement, ba = B.showEvents, ja = B.hideEvents, ua = B.eventResize,
na = B.getRowCnt, $ = B.getColCnt, fa = B.allDayRow, ma = B.allDayBounds, pa = B.colContentLeft, U = B.colContentRight, A = B.dayOfWeekCol, q = B.timeOfDayCol, d = B.dateCell, u = B.compileDaySegs, y = B.getDaySegmentContainer, R = B.bindDaySeg, V = B.calendar.formatDates, ta = B.renderDayOverlay, K = B.clearOverlays, X = B.clearSelection, da = B.getViewName
    } function yb() {
        function a(z, B, ia) { b(); B || (B = h(z, ia)); m(z, B, ia); e(z, B, ia) } function b(z) { if (Z) { Z = false; x(); i("unselect", null, z) } } function e(z, B, ia, la, oa) { Z = true; i("select", null, z, B, ia, la, "", oa) }
        function c(z) {
            var B = f.cellDate, ia = f.cellIsAllDay, la = f.getHoverListener(), oa = f.reportDayClick, xa, ra = k("resources"), ga = O(); if (z.which == 1 && k("selectable")) {
                b(z); var ba; la.start(function (ja, ua) { x(); if (ja && ia(ja)) { ba = [B(ua), B(ja)].sort(Pb); m(ba[0], ba[1], ga == "resourceDay" ? false : true, ja.row); xa = ja.row } else ba = null }, z); t(document).one("mouseup", function (ja) {
                    la.stop(); if (ba) {
                        if (+ba[0] == +ba[1]) oa(ba[0], ga == "resourceDay" ? false : true, ja); e(ba[0], ga == "resourceDay" ? wa(ba[1], k("slotMinutes")) : ba[1], ga == "resourceDay" ?
false : true, ja, ra[xa])
                    }
                })
            }
        } var f = this; f.select = a; f.unselect = b; f.reportSelection = e; f.daySelectionMousedown = c; var k = f.opt, i = f.trigger, h = f.defaultSelectionEnd, m = f.renderSelection, x = f.clearSelection, O = f.getViewName, Z = false; k("selectable") && k("unselectAuto") && t(document).mousedown(function (z) { var B = k("unselectCancel"); if (B) if (t(z.target).parents(B).length) return; b(z) })
    } function xb() {
        function a(k, i) {
            var h = f.shift(); h || (h = t("<div class='fc-cell-overlay' style='position:absolute;z-index:3'/>")); h[0].parentNode !=
i[0] && h.appendTo(i); c.push(h.css(k).show()); return h
        } function b() { for (var k; k = c.shift(); ) f.push(k.hide().unbind()) } var e = this; e.renderOverlay = a; e.clearOverlays = b; var c = [], f = []
    } function zb(a) {
        var b = this, e, c; b.build = function () { e = []; c = []; a(e, c) }; b.cell = function (f, k) { var i = e.length, h = c.length, m, x = -1, O = -1; for (m = 0; m < i; m++) if (k >= e[m][0] && k < e[m][1]) { x = m; break } for (m = 0; m < h; m++) if (f >= c[m][0] && f < c[m][1]) { O = m; break } return x >= 0 && O >= 0 ? { row: x, col: O} : null }; b.rect = function (f, k, i, h, m) {
            m = m.offset(); return { top: e[f][0] -
m.top, left: c[k][0] - m.left, width: c[h][1] - c[k][0], height: e[i][1] - e[f][0]
            }
        }
    } function Ab(a) { function b(h) { Ec(h); h = a.cell(h.pageX, h.pageY); if (!h != !i || h && (h.row != i.row || h.col != i.col)) { if (h) { k || (k = h); f(h, k, h.row - k.row, h.col - k.col) } else f(h, k); i = h } } var e = this, c, f, k, i; e.start = function (h, m, x) { f = h; k = i = null; a.build(); b(m); c = x || "mousemove"; t(document).bind(c, b) }; e.stop = function () { t(document).unbind(c, b); return i } } function Ec(a) { if (a.pageX === sa) { a.pageX = a.originalEvent.pageX; a.pageY = a.originalEvent.pageY } } function Bb(a) {
        function b(i) {
            return c[i] =
c[i] || a(i)
        } var e = this, c = {}, f = {}, k = {}; e.left = function (i) { return f[i] = f[i] === sa ? b(i).position().left : f[i] }; e.right = function (i) { return k[i] = k[i] === sa ? e.left(i) + b(i).width() : k[i] }; e.clear = function () { c = {}; f = {}; k = {} }
    } var cb = { defaultView: "month", aspectRatio: 1.35, header: { left: "title", center: "", right: "today prev,next" }, weekends: true, allDayDefault: true, ignoreTimezone: true, lazyFetching: true, startParam: "start", endParam: "end", titleFormat: { month: "MMMM yyyy", week: "MMM d[ yyyy]{ '&#8212;'[ MMM] d yyyy}", day: "dddd, MMM d, yyyy",
        resourceMonth: "MMMM yyyy", resourceWeek: "MMM d[ yyyy]{ '&#8212;'[ MMM] d yyyy}", resourceNextWeeks: "MMM d[ yyyy]{ '&#8212;'[ MMM] d yyyy}", resourceDay: "dddd, MMM d, yyyy"
    }, columnFormat: { month: "ddd", week: "ddd M/d", day: "dddd M/d", resourceDay: "H:mm", resourceMonth: "M/d", resourceWeek: "ddd M/d", resourceNextWeeks: "ddd M/d" }, timeFormat: { "": "h(:mm)t" }, isRTL: false, firstDay: 0, monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthNamesShort: ["Jan",
"Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], buttonText: { prev: "&nbsp;&#9668;&nbsp;", next: "&nbsp;&#9658;&nbsp;", prevYear: "&nbsp;&lt;&lt;&nbsp;", nextYear: "&nbsp;&gt;&gt;&nbsp;", today: "today", month: "month", week: "week", day: "day", resourceDay: "resource day", resourceWeek: "resource week", resourceNextWeeks: "resource next weeks", resourceMonth: "resource month" },
        theme: false, buttonIcons: { prev: "circle-triangle-w", next: "circle-triangle-e" }, unselectAuto: true, dropAccept: "*", numberOfWeeks: 4, weekPrefix: "Week"
    }, Fc = { header: { left: "next,prev today", center: "", right: "title" }, buttonText: { prev: "&nbsp;&#9658;&nbsp;", next: "&nbsp;&#9668;&nbsp;", prevYear: "&nbsp;&gt;&gt;&nbsp;", nextYear: "&nbsp;&lt;&lt;&nbsp;" }, buttonIcons: { prev: "circle-triangle-e", next: "circle-triangle-w"} }, Da = t.fullCalendar = { version: "1.5.3" }, Fa = Da.views = {}; t.fn.fullCalendar = function (a) {
        if (typeof a == "string") {
            var b =
Array.prototype.slice.call(arguments, 1), e; this.each(function () { var f = t.data(this, "fullCalendar"); if (f && t.isFunction(f[a])) { f = f[a].apply(f, b); if (e === sa) e = f; a == "destroy" && t.removeData(this, "fullCalendar") } }); if (e !== sa) return e; return this
        } var c = a.eventSources || []; delete a.eventSources; if (a.events) { c.push(a.events); delete a.events } a = t.extend(true, {}, cb, a.isRTL || a.isRTL === sa && cb.isRTL ? Fc : {}, a); this.each(function (f, k) { f = t(k); k = new $b(f, a, c); f.data("fullCalendar", k); k.render() }); return this
    }; Da.sourceNormalizers =
[]; Da.sourceFetchers = []; var cc = { dataType: "json", cache: false }, dc = 1; Da.addDays = aa; Da.cloneDate = w; Da.parseDate = rb; Da.parseISO8601 = Kb; Da.parseTime = Ra; Da.formatDate = Qa; Da.formatDates = pb; var tb = 864E5, fc = 36E5, Dc = 6E4, gc = { s: function (a) { return a.getSeconds() }, ss: function (a) { return Ta(a.getSeconds()) }, m: function (a) { return a.getMinutes() }, mm: function (a) { return Ta(a.getMinutes()) }, h: function (a) { return a.getHours() % 12 || 12 }, hh: function (a) { return Ta(a.getHours() % 12 || 12) }, H: function (a) { return a.getHours() }, HH: function (a) { return Ta(a.getHours()) },
    d: function (a) { return a.getDate() }, dd: function (a) { return Ta(a.getDate()) }, ddd: function (a, b) { return b.dayNamesShort[a.getDay()] }, dddd: function (a, b) { return b.dayNames[a.getDay()] }, W: function (a) { return Jb(a) }, M: function (a) { return a.getMonth() + 1 }, MM: function (a) { return Ta(a.getMonth() + 1) }, MMM: function (a, b) { return b.monthNamesShort[a.getMonth()] }, MMMM: function (a, b) { return b.monthNames[a.getMonth()] }, yy: function (a) { return (a.getFullYear() + "").substring(2) }, yyyy: function (a) { return a.getFullYear() }, t: function (a) {
        return a.getHours() <
12 ? "a" : "p"
    }, tt: function (a) { return a.getHours() < 12 ? "am" : "pm" }, T: function (a) { return a.getHours() < 12 ? "A" : "P" }, TT: function (a) { return a.getHours() < 12 ? "AM" : "PM" }, u: function (a) { return Qa(a, "yyyy-MM-dd'T'HH:mm:ss'Z'") }, S: function (a) { a = a.getDate(); if (a > 10 && a < 20) return "th"; return ["st", "nd", "rd"][a % 10 - 1] || "th" }
}; Da.applyAll = db; Fa.month = oc; Fa.basicWeek = pc; Fa.basicDay = qc; nb({ weekMode: "fixed" }); Fa.resourceDay = sc; Fa.resourceWeek = tc; Fa.resourceNextWeeks = uc; Fa.resourceMonth = vc; nb({ weekMode: "fixed" }); Fa.agendaWeek =
xc; Fa.agendaDay = yc; nb({ allDaySlot: true, allDayText: "all-day", firstHour: 6, slotMinutes: 30, defaultEventMinutes: 120, axisFormat: "h(:mm)tt", timeFormat: { agenda: "h:mm{ - h:mm}" }, dragOpacity: { agenda: 0.5 }, minTime: 0, maxTime: 24 })
})(jQuery);