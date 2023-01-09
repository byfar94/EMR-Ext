(() => {
  "use strict";
  var e = {
      503: (e, t, n) => {
        n.d(t, { Z: () => a });
        var o = n(81),
          r = n.n(o),
          c = n(645),
          i = n.n(c)()(r());
        i.push([
          e.id,
          ".alert-contain{\n    position: absolute;\n    z-index: 10;\n    left: 50%; \n    transform: translate(-50%,0);\n    text-align: center;\n    border-radius: 1rem;\n    display: none;\n}\n\n.alert-info{\n    font-size: 1.25rem;\n    background-color: red;\n    color: white;\n    margin: 0.25rem;\n}\n\n.show{\n    display: block;\n}",
          "",
        ]);
        const a = i;
      },
      645: (e) => {
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var n = "",
                  o = void 0 !== t[5];
                return (
                  t[4] && (n += "@supports (".concat(t[4], ") {")),
                  t[2] && (n += "@media ".concat(t[2], " {")),
                  o &&
                    (n += "@layer".concat(
                      t[5].length > 0 ? " ".concat(t[5]) : "",
                      " {"
                    )),
                  (n += e(t)),
                  o && (n += "}"),
                  t[2] && (n += "}"),
                  t[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (t.i = function (e, n, o, r, c) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var i = {};
              if (o)
                for (var a = 0; a < this.length; a++) {
                  var s = this[a][0];
                  null != s && (i[s] = !0);
                }
              for (var l = 0; l < e.length; l++) {
                var u = [].concat(e[l]);
                (o && i[u[0]]) ||
                  (void 0 !== c &&
                    (void 0 === u[5] ||
                      (u[1] = "@layer"
                        .concat(u[5].length > 0 ? " ".concat(u[5]) : "", " {")
                        .concat(u[1], "}")),
                    (u[5] = c)),
                  n &&
                    (u[2]
                      ? ((u[1] = "@media "
                          .concat(u[2], " {")
                          .concat(u[1], "}")),
                        (u[2] = n))
                      : (u[2] = n)),
                  r &&
                    (u[4]
                      ? ((u[1] = "@supports ("
                          .concat(u[4], ") {")
                          .concat(u[1], "}")),
                        (u[4] = r))
                      : (u[4] = "".concat(r))),
                  t.push(u));
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
          for (var n = -1, o = 0; o < t.length; o++)
            if (t[o].identifier === e) {
              n = o;
              break;
            }
          return n;
        }
        function o(e, o) {
          for (var c = {}, i = [], a = 0; a < e.length; a++) {
            var s = e[a],
              l = o.base ? s[0] + o.base : s[0],
              u = c[l] || 0,
              d = "".concat(l, " ").concat(u);
            c[l] = u + 1;
            var p = n(d),
              f = {
                css: s[1],
                media: s[2],
                sourceMap: s[3],
                supports: s[4],
                layer: s[5],
              };
            if (-1 !== p) t[p].references++, t[p].updater(f);
            else {
              var v = r(f, o);
              (o.byIndex = a),
                t.splice(a, 0, { identifier: d, updater: v, references: 1 });
            }
            i.push(d);
          }
          return i;
        }
        function r(e, t) {
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
        e.exports = function (e, r) {
          var c = o((e = e || []), (r = r || {}));
          return function (e) {
            e = e || [];
            for (var i = 0; i < c.length; i++) {
              var a = n(c[i]);
              t[a].references--;
            }
            for (var s = o(e, r), l = 0; l < c.length; l++) {
              var u = n(c[l]);
              0 === t[u].references && (t[u].updater(), t.splice(u, 1));
            }
            c = s;
          };
        };
      },
      569: (e) => {
        var t = {};
        e.exports = function (e, n) {
          var o = (function (e) {
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
          if (!o)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          o.appendChild(n);
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
                var o = "";
                n.supports && (o += "@supports (".concat(n.supports, ") {")),
                  n.media && (o += "@media ".concat(n.media, " {"));
                var r = void 0 !== n.layer;
                r &&
                  (o += "@layer".concat(
                    n.layer.length > 0 ? " ".concat(n.layer) : "",
                    " {"
                  )),
                  (o += n.css),
                  r && (o += "}"),
                  n.media && (o += "}"),
                  n.supports && (o += "}");
                var c = n.sourceMap;
                c &&
                  "undefined" != typeof btoa &&
                  (o +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(c)))),
                      " */"
                    )),
                  t.styleTagTransform(o, e, t.options);
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
  function n(o) {
    var r = t[o];
    if (void 0 !== r) return r.exports;
    var c = (t[o] = { id: o, exports: {} });
    return e[o](c, c.exports, n), c.exports;
  }
  (n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (n.d = (e, t) => {
      for (var o in t)
        n.o(t, o) &&
          !n.o(e, o) &&
          Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.nc = void 0),
    (() => {
      var e = n(379),
        t = n.n(e),
        o = n(795),
        r = n.n(o),
        c = n(569),
        i = n.n(c),
        a = n(565),
        s = n.n(a),
        l = n(216),
        u = n.n(l),
        d = n(589),
        p = n.n(d),
        f = n(503),
        v = {};
      (v.styleTagTransform = p()),
        (v.setAttributes = s()),
        (v.insert = i().bind(null, "head")),
        (v.domAPI = r()),
        (v.insertStyleElement = u()),
        t()(f.Z, v),
        f.Z && f.Z.locals && f.Z.locals,
        chrome.runtime.onMessage.addListener(function (e, t, n) {
          if ("get-DOI" == e.txt) {
            console.log("recieved DOI");
            let e = document.querySelector(
              "#root_subjective_patient_presentation_date_of_injury_onset"
            )
              ? document.querySelector(
                  "#root_subjective_patient_presentation_date_of_injury_onset"
                ).value
              : "no DOI Section";
            if ((console.log(e), !e || "no DOI Section" == e))
              return "no DOI Section" == e
                ? void alert("Open Patient Presentation")
                : void alert("No DOI entered");
            n({ date: `${e}` });
          }
          if ("get-DOS" == e.txt) {
            console.log("recieved DOS");
            let e = document.querySelector(
              "#root_subjective_patient_presentation_date_of_surgery"
            )
              ? document.querySelector(
                  "#root_subjective_patient_presentation_date_of_surgery"
                ).value
              : "no DOS Section";
            if ((console.log(e), !e || "no DOS Section" == e))
              return "no DOS Section" == e
                ? void alert("Open Patient Presentation")
                : void alert("No DOS entered");
            n({ date: `${e}` });
          }
        });
      let m = function (e, t, n) {
          let o = document.createElement(e);
          return (
            null != t && o.classList.add(t), null != n && (o.innerText = n), o
          );
        },
        y = m("div", "alert-contain"),
        g = m("p", "alert-info", "Conflict!");
      document.querySelector("#react").append(y), y.append(g);
      let h = function (e) {
          return { count: e };
        },
        _ = h(0),
        x = h(0);
      document.body.addEventListener("click", function () {
        (x.count = 0),
          (_.count = 0),
          console.log(x.count),
          console.log(_.count),
          document.querySelectorAll("span").forEach(function (e) {
            1 == e.innerText.toLowerCase().includes("right") ||
            1 == e.innerText.includes(" R ")
              ? (console.log(e.innerText.includes("right")),
                (x.count += 1),
                _.count > 0 && _.count >= x.count && (e.style.color = "red"))
              : (1 != e.innerText.toLowerCase().includes("left") &&
                  1 != e.innerText.includes(" L ")) ||
                ((_.count += 1),
                x.count > 0 && x.count >= _.count
                  ? (e.style.color = "red")
                  : console.log("no L or R"));
          }),
          document
            .querySelectorAll(".sc-jtRlXQ.eFAlaQ.pre-p")
            .forEach(function (e) {
              console.log(e.innerText),
                1 == e.id.includes("right") && "" != e.innerText
                  ? (console.log(e.id.includes("right")),
                    (x.count += 1),
                    _.count > 0 &&
                      _.count >= x.count &&
                      (e.style.color = "red"))
                  : 1 == e.id.includes("left") && "" != e.innerText
                  ? ((_.count += 1),
                    x.count > 0 &&
                      x.count >= _.count &&
                      (e.style.color = "red"))
                  : console.log("no L or R");
            }),
          (function () {
            let e = document.querySelector(
              "#root_subjective_patient_presentation_treatment_side"
            );
            1 == e && "Right" == e.innerText
              ? ((x.count += 1),
                _.count > 0 && _.count >= x.count && (e.style.color = "red"))
              : 1 == e && "Left" == e.innerText
              ? ((_.count += 1),
                x.count > 0 && x.count >= _.count && (e.style.color = "red"))
              : console.log("No treatment side");
          })(),
          console.log(x.count),
          console.log(_.count),
          x.count > 0 && _.count > 0
            ? (console.log("CONFLICT!!"), y.classList.add("show"))
            : (console.log("No Conflict noted"), y.classList.remove("show"));
      });
    })();
})();
