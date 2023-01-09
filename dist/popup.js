(() => {
  "use strict";
  var e = {
      699: (e, t, n) => {
        n.d(t, { Z: () => u });
        var r = n(81),
          a = n.n(r),
          o = n(645),
          i = n.n(o)()(a());
        i.push([
          e.id,
          ".doi-contain{\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    gap: 0.25rem;\n    min-width: 7.5rem;\n    border: 1px black solid;\n    margin-bottom: .25rem;\n    border-radius: 0.5rem;\n}\n\n.dos-contain{\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    gap: 0.25rem;\n    min-width: 7.5rem;\n    border: 1px black solid;\n    border-radius: 0.5rem;\n}",
          "",
        ]);
        const u = i;
      },
      645: (e) => {
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var n = "",
                  r = void 0 !== t[5];
                return (
                  t[4] && (n += "@supports (".concat(t[4], ") {")),
                  t[2] && (n += "@media ".concat(t[2], " {")),
                  r &&
                    (n += "@layer".concat(
                      t[5].length > 0 ? " ".concat(t[5]) : "",
                      " {"
                    )),
                  (n += e(t)),
                  r && (n += "}"),
                  t[2] && (n += "}"),
                  t[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (t.i = function (e, n, r, a, o) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var i = {};
              if (r)
                for (var u = 0; u < this.length; u++) {
                  var s = this[u][0];
                  null != s && (i[s] = !0);
                }
              for (var d = 0; d < e.length; d++) {
                var l = [].concat(e[d]);
                (r && i[l[0]]) ||
                  (void 0 !== o &&
                    (void 0 === l[5] ||
                      (l[1] = "@layer"
                        .concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {")
                        .concat(l[1], "}")),
                    (l[5] = o)),
                  n &&
                    (l[2]
                      ? ((l[1] = "@media "
                          .concat(l[2], " {")
                          .concat(l[1], "}")),
                        (l[2] = n))
                      : (l[2] = n)),
                  a &&
                    (l[4]
                      ? ((l[1] = "@supports ("
                          .concat(l[4], ") {")
                          .concat(l[1], "}")),
                        (l[4] = a))
                      : (l[4] = "".concat(a))),
                  t.push(l));
              }
            }),
            t
          );
        };
      },
      81: (e) => {
        e.exports = function (e) {
          return e[1];
        };
      },
      379: (e) => {
        var t = [];
        function n(e) {
          for (var n = -1, r = 0; r < t.length; r++)
            if (t[r].identifier === e) {
              n = r;
              break;
            }
          return n;
        }
        function r(e, r) {
          for (var o = {}, i = [], u = 0; u < e.length; u++) {
            var s = e[u],
              d = r.base ? s[0] + r.base : s[0],
              l = o[d] || 0,
              c = "".concat(d, " ").concat(l);
            o[d] = l + 1;
            var m = n(c),
              f = {
                css: s[1],
                media: s[2],
                sourceMap: s[3],
                supports: s[4],
                layer: s[5],
              };
            if (-1 !== m) t[m].references++, t[m].updater(f);
            else {
              var h = a(f, r);
              (r.byIndex = u),
                t.splice(u, 0, { identifier: c, updater: h, references: 1 });
            }
            i.push(c);
          }
          return i;
        }
        function a(e, t) {
          var n = t.domAPI(t);
          return (
            n.update(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap &&
                  t.supports === e.supports &&
                  t.layer === e.layer
                )
                  return;
                n.update((e = t));
              } else n.remove();
            }
          );
        }
        e.exports = function (e, a) {
          var o = r((e = e || []), (a = a || {}));
          return function (e) {
            e = e || [];
            for (var i = 0; i < o.length; i++) {
              var u = n(o[i]);
              t[u].references--;
            }
            for (var s = r(e, a), d = 0; d < o.length; d++) {
              var l = n(o[d]);
              0 === t[l].references && (t[l].updater(), t.splice(l, 1));
            }
            o = s;
          };
        };
      },
      569: (e) => {
        var t = {};
        e.exports = function (e, n) {
          var r = (function (e) {
            if (void 0 === t[e]) {
              var n = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (e) {
                  n = null;
                }
              t[e] = n;
            }
            return t[e];
          })(e);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(n);
        };
      },
      216: (e) => {
        e.exports = function (e) {
          var t = document.createElement("style");
          return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
        };
      },
      565: (e, t, n) => {
        e.exports = function (e) {
          var t = n.nc;
          t && e.setAttribute("nonce", t);
        };
      },
      795: (e) => {
        e.exports = function (e) {
          var t = e.insertStyleElement(e);
          return {
            update: function (n) {
              !(function (e, t, n) {
                var r = "";
                n.supports && (r += "@supports (".concat(n.supports, ") {")),
                  n.media && (r += "@media ".concat(n.media, " {"));
                var a = void 0 !== n.layer;
                a &&
                  (r += "@layer".concat(
                    n.layer.length > 0 ? " ".concat(n.layer) : "",
                    " {"
                  )),
                  (r += n.css),
                  a && (r += "}"),
                  n.media && (r += "}"),
                  n.supports && (r += "}");
                var o = n.sourceMap;
                o &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(o)))),
                      " */"
                    )),
                  t.styleTagTransform(r, e, t.options);
              })(t, e, n);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(t);
            },
          };
        };
      },
      589: (e) => {
        e.exports = function (e, t) {
          if (t.styleSheet) t.styleSheet.cssText = e;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(e));
          }
        };
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var o = (t[r] = { id: r, exports: {} });
    return e[r](o, o.exports, n), o.exports;
  }
  (n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.nc = void 0),
    (() => {
      var e = {};
      function t() {
        return e;
      }
      function r(e) {
        var t = new Date(
          Date.UTC(
            e.getFullYear(),
            e.getMonth(),
            e.getDate(),
            e.getHours(),
            e.getMinutes(),
            e.getSeconds(),
            e.getMilliseconds()
          )
        );
        return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
      }
      function a(e, t) {
        if (t.length < e)
          throw new TypeError(
            e +
              " argument" +
              (e > 1 ? "s" : "") +
              " required, but only " +
              t.length +
              " present"
          );
      }
      function o(e) {
        return (
          (o =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          o(e)
        );
      }
      function i(e) {
        a(1, arguments);
        var t = Object.prototype.toString.call(e);
        return e instanceof Date || ("object" === o(e) && "[object Date]" === t)
          ? new Date(e.getTime())
          : "number" == typeof e || "[object Number]" === t
          ? new Date(e)
          : (("string" != typeof e && "[object String]" !== t) ||
              "undefined" == typeof console ||
              (console.warn(
                "Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"
              ),
              console.warn(new Error().stack)),
            new Date(NaN));
      }
      function u(e, t) {
        a(2, arguments);
        var n = i(e),
          r = i(t),
          o = n.getTime() - r.getTime();
        return o < 0 ? -1 : o > 0 ? 1 : o;
      }
      function s(e, t) {
        if (null == e)
          throw new TypeError(
            "assign requires that input parameter not be null or undefined"
          );
        for (var n in t)
          Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return e;
      }
      function d(e) {
        return s({}, e);
      }
      var l = {
        lessThanXSeconds: {
          one: "less than a second",
          other: "less than {{count}} seconds",
        },
        xSeconds: { one: "1 second", other: "{{count}} seconds" },
        halfAMinute: "half a minute",
        lessThanXMinutes: {
          one: "less than a minute",
          other: "less than {{count}} minutes",
        },
        xMinutes: { one: "1 minute", other: "{{count}} minutes" },
        aboutXHours: { one: "about 1 hour", other: "about {{count}} hours" },
        xHours: { one: "1 hour", other: "{{count}} hours" },
        xDays: { one: "1 day", other: "{{count}} days" },
        aboutXWeeks: { one: "about 1 week", other: "about {{count}} weeks" },
        xWeeks: { one: "1 week", other: "{{count}} weeks" },
        aboutXMonths: { one: "about 1 month", other: "about {{count}} months" },
        xMonths: { one: "1 month", other: "{{count}} months" },
        aboutXYears: { one: "about 1 year", other: "about {{count}} years" },
        xYears: { one: "1 year", other: "{{count}} years" },
        overXYears: { one: "over 1 year", other: "over {{count}} years" },
        almostXYears: { one: "almost 1 year", other: "almost {{count}} years" },
      };
      function c(e) {
        return function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            n = t.width ? String(t.width) : e.defaultWidth,
            r = e.formats[n] || e.formats[e.defaultWidth];
          return r;
        };
      }
      const m = {
        date: c({
          formats: {
            full: "EEEE, MMMM do, y",
            long: "MMMM do, y",
            medium: "MMM d, y",
            short: "MM/dd/yyyy",
          },
          defaultWidth: "full",
        }),
        time: c({
          formats: {
            full: "h:mm:ss a zzzz",
            long: "h:mm:ss a z",
            medium: "h:mm:ss a",
            short: "h:mm a",
          },
          defaultWidth: "full",
        }),
        dateTime: c({
          formats: {
            full: "{{date}} 'at' {{time}}",
            long: "{{date}} 'at' {{time}}",
            medium: "{{date}}, {{time}}",
            short: "{{date}}, {{time}}",
          },
          defaultWidth: "full",
        }),
      };
      var f = {
        lastWeek: "'last' eeee 'at' p",
        yesterday: "'yesterday at' p",
        today: "'today at' p",
        tomorrow: "'tomorrow at' p",
        nextWeek: "eeee 'at' p",
        other: "P",
      };
      function h(e) {
        return function (t, n) {
          var r;
          if (
            "formatting" ===
              (null != n && n.context ? String(n.context) : "standalone") &&
            e.formattingValues
          ) {
            var a = e.defaultFormattingWidth || e.defaultWidth,
              o = null != n && n.width ? String(n.width) : a;
            r = e.formattingValues[o] || e.formattingValues[a];
          } else {
            var i = e.defaultWidth,
              u = null != n && n.width ? String(n.width) : e.defaultWidth;
            r = e.values[u] || e.values[i];
          }
          return r[e.argumentCallback ? e.argumentCallback(t) : t];
        };
      }
      const p = {
        ordinalNumber: function (e, t) {
          var n = Number(e),
            r = n % 100;
          if (r > 20 || r < 10)
            switch (r % 10) {
              case 1:
                return n + "st";
              case 2:
                return n + "nd";
              case 3:
                return n + "rd";
            }
          return n + "th";
        },
        era: h({
          values: {
            narrow: ["B", "A"],
            abbreviated: ["BC", "AD"],
            wide: ["Before Christ", "Anno Domini"],
          },
          defaultWidth: "wide",
        }),
        quarter: h({
          values: {
            narrow: ["1", "2", "3", "4"],
            abbreviated: ["Q1", "Q2", "Q3", "Q4"],
            wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
          },
          defaultWidth: "wide",
          argumentCallback: function (e) {
            return e - 1;
          },
        }),
        month: h({
          values: {
            narrow: [
              "J",
              "F",
              "M",
              "A",
              "M",
              "J",
              "J",
              "A",
              "S",
              "O",
              "N",
              "D",
            ],
            abbreviated: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
            wide: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ],
          },
          defaultWidth: "wide",
        }),
        day: h({
          values: {
            narrow: ["S", "M", "T", "W", "T", "F", "S"],
            short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            wide: [
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
          },
          defaultWidth: "wide",
        }),
        dayPeriod: h({
          values: {
            narrow: {
              am: "a",
              pm: "p",
              midnight: "mi",
              noon: "n",
              morning: "morning",
              afternoon: "afternoon",
              evening: "evening",
              night: "night",
            },
            abbreviated: {
              am: "AM",
              pm: "PM",
              midnight: "midnight",
              noon: "noon",
              morning: "morning",
              afternoon: "afternoon",
              evening: "evening",
              night: "night",
            },
            wide: {
              am: "a.m.",
              pm: "p.m.",
              midnight: "midnight",
              noon: "noon",
              morning: "morning",
              afternoon: "afternoon",
              evening: "evening",
              night: "night",
            },
          },
          defaultWidth: "wide",
          formattingValues: {
            narrow: {
              am: "a",
              pm: "p",
              midnight: "mi",
              noon: "n",
              morning: "in the morning",
              afternoon: "in the afternoon",
              evening: "in the evening",
              night: "at night",
            },
            abbreviated: {
              am: "AM",
              pm: "PM",
              midnight: "midnight",
              noon: "noon",
              morning: "in the morning",
              afternoon: "in the afternoon",
              evening: "in the evening",
              night: "at night",
            },
            wide: {
              am: "a.m.",
              pm: "p.m.",
              midnight: "midnight",
              noon: "noon",
              morning: "in the morning",
              afternoon: "in the afternoon",
              evening: "in the evening",
              night: "at night",
            },
          },
          defaultFormattingWidth: "wide",
        }),
      };
      function g(e) {
        return function (t) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            r = n.width,
            a =
              (r && e.matchPatterns[r]) || e.matchPatterns[e.defaultMatchWidth],
            o = t.match(a);
          if (!o) return null;
          var i,
            u = o[0],
            s =
              (r && e.parsePatterns[r]) || e.parsePatterns[e.defaultParseWidth],
            d = Array.isArray(s)
              ? y(s, function (e) {
                  return e.test(u);
                })
              : v(s, function (e) {
                  return e.test(u);
                });
          (i = e.valueCallback ? e.valueCallback(d) : d),
            (i = n.valueCallback ? n.valueCallback(i) : i);
          var l = t.slice(u.length);
          return { value: i, rest: l };
        };
      }
      function v(e, t) {
        for (var n in e) if (e.hasOwnProperty(n) && t(e[n])) return n;
      }
      function y(e, t) {
        for (var n = 0; n < e.length; n++) if (t(e[n])) return n;
      }
      var b,
        w = {
          ordinalNumber:
            ((b = {
              matchPattern: /^(\d+)(th|st|nd|rd)?/i,
              parsePattern: /\d+/i,
              valueCallback: function (e) {
                return parseInt(e, 10);
              },
            }),
            function (e) {
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                n = e.match(b.matchPattern);
              if (!n) return null;
              var r = n[0],
                a = e.match(b.parsePattern);
              if (!a) return null;
              var o = b.valueCallback ? b.valueCallback(a[0]) : a[0];
              o = t.valueCallback ? t.valueCallback(o) : o;
              var i = e.slice(r.length);
              return { value: o, rest: i };
            }),
          era: g({
            matchPatterns: {
              narrow: /^(b|a)/i,
              abbreviated:
                /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
              wide: /^(before christ|before common era|anno domini|common era)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/^b/i, /^(a|c)/i] },
            defaultParseWidth: "any",
          }),
          quarter: g({
            matchPatterns: {
              narrow: /^[1234]/i,
              abbreviated: /^q[1234]/i,
              wide: /^[1234](th|st|nd|rd)? quarter/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] },
            defaultParseWidth: "any",
            valueCallback: function (e) {
              return e + 1;
            },
          }),
          month: g({
            matchPatterns: {
              narrow: /^[jfmasond]/i,
              abbreviated:
                /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
              wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              narrow: [
                /^j/i,
                /^f/i,
                /^m/i,
                /^a/i,
                /^m/i,
                /^j/i,
                /^j/i,
                /^a/i,
                /^s/i,
                /^o/i,
                /^n/i,
                /^d/i,
              ],
              any: [
                /^ja/i,
                /^f/i,
                /^mar/i,
                /^ap/i,
                /^may/i,
                /^jun/i,
                /^jul/i,
                /^au/i,
                /^s/i,
                /^o/i,
                /^n/i,
                /^d/i,
              ],
            },
            defaultParseWidth: "any",
          }),
          day: g({
            matchPatterns: {
              narrow: /^[smtwf]/i,
              short: /^(su|mo|tu|we|th|fr|sa)/i,
              abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
              wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
              narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
              any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
            },
            defaultParseWidth: "any",
          }),
          dayPeriod: g({
            matchPatterns: {
              narrow:
                /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
              any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
            },
            defaultMatchWidth: "any",
            parsePatterns: {
              any: {
                am: /^a/i,
                pm: /^p/i,
                midnight: /^mi/i,
                noon: /^no/i,
                morning: /morning/i,
                afternoon: /afternoon/i,
                evening: /evening/i,
                night: /night/i,
              },
            },
            defaultParseWidth: "any",
          }),
        };
      const M = {
        code: "en-US",
        formatDistance: function (e, t, n) {
          var r,
            a = l[e];
          return (
            (r =
              "string" == typeof a
                ? a
                : 1 === t
                ? a.one
                : a.other.replace("{{count}}", t.toString())),
            null != n && n.addSuffix
              ? n.comparison && n.comparison > 0
                ? "in " + r
                : r + " ago"
              : r
          );
        },
        formatLong: m,
        formatRelative: function (e, t, n, r) {
          return f[e];
        },
        localize: p,
        match: w,
        options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
      };
      var S = 6e4,
        x = 1440,
        W = 43200,
        D = 525600;
      function P(e, n, o) {
        var l, c, m;
        a(2, arguments);
        var f = t(),
          h =
            null !==
              (l =
                null !== (c = null == o ? void 0 : o.locale) && void 0 !== c
                  ? c
                  : f.locale) && void 0 !== l
              ? l
              : M;
        if (!h.formatDistance)
          throw new RangeError(
            "locale must contain localize.formatDistance property"
          );
        var p = u(e, n);
        if (isNaN(p)) throw new RangeError("Invalid time value");
        var g,
          v,
          y = s(d(o), {
            addSuffix: Boolean(null == o ? void 0 : o.addSuffix),
            comparison: p,
          });
        p > 0 ? ((g = i(n)), (v = i(e))) : ((g = i(e)), (v = i(n)));
        var b,
          w = String(
            null !== (m = null == o ? void 0 : o.roundingMethod) && void 0 !== m
              ? m
              : "round"
          );
        if ("floor" === w) b = Math.floor;
        else if ("ceil" === w) b = Math.ceil;
        else {
          if ("round" !== w)
            throw new RangeError(
              "roundingMethod must be 'floor', 'ceil' or 'round'"
            );
          b = Math.round;
        }
        var P,
          T = v.getTime() - g.getTime(),
          C = T / S,
          k = r(v) - r(g),
          j = (T - k) / S,
          E = null == o ? void 0 : o.unit;
        if (
          "second" ===
          (P = E
            ? String(E)
            : C < 1
            ? "second"
            : C < 60
            ? "minute"
            : C < x
            ? "hour"
            : j < W
            ? "day"
            : j < D
            ? "month"
            : "year")
        ) {
          var A = b(T / 1e3);
          return h.formatDistance("xSeconds", A, y);
        }
        if ("minute" === P) {
          var O = b(C);
          return h.formatDistance("xMinutes", O, y);
        }
        if ("hour" === P) {
          var N = b(C / 60);
          return h.formatDistance("xHours", N, y);
        }
        if ("day" === P) {
          var F = b(j / x);
          return h.formatDistance("xDays", F, y);
        }
        if ("month" === P) {
          var q = b(j / W);
          return 12 === q && "month" !== E
            ? h.formatDistance("xYears", 1, y)
            : h.formatDistance("xMonths", q, y);
        }
        if ("year" === P) {
          var I = b(j / D);
          return h.formatDistance("xYears", I, y);
        }
        throw new RangeError(
          "unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'"
        );
      }
      function T(e, t) {
        return a(1, arguments), P(e, Date.now(), t);
      }
      function C(e) {
        a(1, arguments);
        var t = e / 7;
        return Math.floor(t);
      }
      Math.pow(10, 8);
      var k = n(379),
        j = n.n(k),
        E = n(795),
        A = n.n(E),
        O = n(569),
        N = n.n(O),
        F = n(565),
        q = n.n(F),
        I = n(216),
        J = n.n(I),
        Y = n(589),
        X = n.n(Y),
        z = n(699),
        L = {};
      (L.styleTagTransform = X()),
        (L.setAttributes = q()),
        (L.insert = N().bind(null, "head")),
        (L.domAPI = A()),
        (L.insertStyleElement = J()),
        j()(z.Z, L),
        z.Z && z.Z.locals && z.Z.locals;
      let R = function (e, t, n) {
          let r = document.createElement(e);
          return (
            null != t && r.classList.add(t), null != n && (r.innerText = n), r
          );
        },
        H = R("div", "doi-contain"),
        U = R("button", "DOI-button", "DOI"),
        Z = R("p", "injury-p", ""),
        B = R("div", "dos-contain"),
        Q = R("button", "DOS-button", "DOS"),
        V = R("p", "Surgery-p", "");
      document.body.appendChild(H),
        H.appendChild(U),
        H.appendChild(Z),
        document.body.appendChild(B),
        B.appendChild(Q),
        B.appendChild(V),
        U.addEventListener("click", function () {
          chrome.tabs.query({ active: !0, currentWindow: !0 }, function (e) {
            console.log("Sent from pop up to content script"),
              chrome.tabs.sendMessage(
                e[0].id,
                { txt: "get-DOI" },
                function (e) {
                  console.log(e.date);
                  let t = `${e.date.toString()}`.replace(/,/g, ", ");
                  console.log(t);
                  let n = T(new Date(t), { unit: "day" }).replace(
                      /[^0-9]/g,
                      ""
                    ),
                    r = C(n);
                  console.log(n), (Z.innerText = `${r} weeks`);
                }
              );
          });
        }),
        Q.addEventListener("click", function () {
          chrome.tabs.query({ active: !0, currentWindow: !0 }, function (e) {
            console.log("Sent from pop up to content script"),
              chrome.tabs.sendMessage(
                e[0].id,
                { txt: "get-DOS" },
                function (e) {
                  console.log(e.date);
                  let t = `${e.date.toString()}`.replace(/,/g, ", ");
                  console.log(t);
                  let n = T(new Date(t), { unit: "day" }).replace(
                      /[^0-9]/g,
                      ""
                    ),
                    r = C(n);
                  console.log(n), (V.innerText = `${r} weeks`);
                }
              );
          });
        });
    })();
})();