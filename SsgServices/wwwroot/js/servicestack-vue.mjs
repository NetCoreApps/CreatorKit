var qs = Object.defineProperty;
var Qs = (e, t, l) => t in e ? qs(e, t, { enumerable: !0, configurable: !0, writable: !0, value: l }) : e[t] = l;
var we = (e, t, l) => (Qs(e, typeof t != "symbol" ? t + "" : t, l), l);
import { defineComponent as se, computed as f, openBlock as a, createElementBlock as u, normalizeClass as x, unref as o, createElementVNode as s, createCommentVNode as $, renderSlot as Z, ref as S, toDisplayString as M, inject as He, nextTick as vl, isRef as Rn, h as gt, resolveComponent as q, createBlock as X, withCtx as he, mergeProps as Me, useAttrs as Ks, createVNode as ge, createTextVNode as pe, watchEffect as Pl, normalizeStyle as Kl, withModifiers as Ne, Fragment as ke, renderList as _e, withDirectives as xt, vModelCheckbox as Gl, withKeys as Gs, createStaticVNode as hl, vModelSelect as Ws, useSlots as Wl, getCurrentInstance as We, onMounted as at, createSlots as Zl, normalizeProps as St, guardReactiveProps as dl, vModelDynamic as Zs, onUnmounted as Kt, watch as Dt, vModelText as Js, provide as Gt, resolveDynamicComponent as Xs, resolveDirective as Ys } from "vue";
import { errorResponseExcept as eo, dateFmt as Hn, toTime as to, omit as it, enc as jl, setQueryString as lo, appendQueryString as Nt, nameOf as no, ApiResult as Ye, lastRightPart as kt, leftPart as gl, map as Ee, toDate as Ct, toDateTime as so, toCamelCase as oo, mapGet as fe, chop as ao, fromXsdDuration as Nn, isDate as pl, timeFmt12 as io, apiValue as ro, indexOfAny as uo, createBus as co, humanize as Oe, delaySet as zn, rightPart as Fl, queryString as Ol, combinePaths as fo, toPascalCase as nt, errorResponse as vt, trimEnd as mo, $1 as cl, lastLeftPart as vo, ResponseStatus as Tl, ResponseError as Pn, HttpMethods as Jl, uniqueKeys as Bl, humanify as Un, each as ho } from "@servicestack/client";
const go = { class: "flex items-center" }, po = {
  key: 0,
  class: "flex-shrink-0 mr-3"
}, yo = {
  key: 0,
  class: "h-5 w-5 text-yellow-400",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, bo = /* @__PURE__ */ s("path", {
  "fill-rule": "evenodd",
  d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
  "clip-rule": "evenodd"
}, null, -1), wo = [
  bo
], xo = {
  key: 1,
  class: "h-5 w-5 text-red-400",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, ko = /* @__PURE__ */ s("path", {
  "fill-rule": "evenodd",
  d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z",
  "clip-rule": "evenodd"
}, null, -1), $o = [
  ko
], Co = {
  key: 2,
  class: "h-5 w-5 text-blue-400",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, _o = /* @__PURE__ */ s("path", {
  "fill-rule": "evenodd",
  d: "M19 10.5a8.5 8.5 0 11-17 0 8.5 8.5 0 0117 0zM8.25 9.75A.75.75 0 019 9h.253a1.75 1.75 0 011.709 2.13l-.46 2.066a.25.25 0 00.245.304H11a.75.75 0 010 1.5h-.253a1.75 1.75 0 01-1.709-2.13l.46-2.066a.25.25 0 00-.245-.304H9a.75.75 0 01-.75-.75zM10 7a1 1 0 100-2 1 1 0 000 2z",
  "clip-rule": "evenodd"
}, null, -1), Lo = [
  _o
], Vo = {
  key: 3,
  class: "h-5 w-5 text-green-400",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, Mo = /* @__PURE__ */ s("path", {
  "fill-rule": "evenodd",
  d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
  "clip-rule": "evenodd"
}, null, -1), So = [
  Mo
], Ao = /* @__PURE__ */ se({
  __name: "Alert",
  props: {
    type: { default: "warn" },
    hideIcon: { type: Boolean }
  },
  setup(e) {
    const t = e, l = f(() => t.type == "info" ? "bg-blue-50 dark:bg-blue-200" : t.type == "error" ? "bg-red-50 dark:bg-red-200" : t.type == "success" ? "bg-green-50 dark:bg-green-200" : "bg-yellow-50 dark:bg-yellow-200"), n = f(() => t.type == "info" ? "border-blue-400" : t.type == "error" ? "border-red-400" : t.type == "success" ? "border-green-400" : "border-yellow-400"), i = f(() => t.type == "info" ? "text-blue-700" : t.type == "error" ? "text-red-700" : t.type == "success" ? "text-green-700" : "text-yellow-700");
    return (r, d) => (a(), u("div", {
      class: x([o(l), o(n), "border-l-4 p-4"])
    }, [
      s("div", go, [
        e.hideIcon ? $("", !0) : (a(), u("div", po, [
          e.type == "warn" ? (a(), u("svg", yo, wo)) : e.type == "error" ? (a(), u("svg", xo, $o)) : e.type == "info" ? (a(), u("svg", Co, Lo)) : e.type == "success" ? (a(), u("svg", Vo, So)) : $("", !0)
        ])),
        s("div", null, [
          s("p", {
            class: x([o(i), "text-sm"])
          }, [
            Z(r.$slots, "default")
          ], 2)
        ])
      ])
    ], 2));
  }
}), Fo = {
  key: 0,
  class: "rounded-md bg-green-50 dark:bg-green-200 p-4",
  role: "alert"
}, To = { class: "flex" }, Io = /* @__PURE__ */ s("div", { class: "flex-shrink-0" }, [
  /* @__PURE__ */ s("svg", {
    class: "h-5 w-5 text-green-400 dark:text-green-500",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    /* @__PURE__ */ s("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M5 13l4 4L19 7"
    })
  ])
], -1), Do = { class: "ml-3" }, Po = { class: "text-sm font-medium text-green-800" }, jo = { key: 0 }, Oo = { class: "ml-auto pl-3" }, Bo = { class: "-mx-1.5 -my-1.5" }, Eo = /* @__PURE__ */ s("span", { class: "sr-only" }, "Dismiss", -1), Ro = /* @__PURE__ */ s("svg", {
  class: "h-5 w-5",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ s("path", { d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" })
], -1), Ho = [
  Eo,
  Ro
], No = /* @__PURE__ */ se({
  __name: "AlertSuccess",
  props: {
    message: null
  },
  setup(e) {
    const t = S(!1);
    return (l, n) => t.value ? $("", !0) : (a(), u("div", Fo, [
      s("div", To, [
        Io,
        s("div", Do, [
          s("h3", Po, [
            e.message ? (a(), u("span", jo, M(e.message), 1)) : Z(l.$slots, "default", { key: 1 })
          ])
        ]),
        s("div", Oo, [
          s("div", Bo, [
            s("button", {
              type: "button",
              class: "inline-flex rounded-md bg-green-50 dark:bg-green-200 p-1.5 text-green-500 dark:text-green-600 hover:bg-green-100 dark:hover:bg-green-700 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50 dark:ring-offset-green-200",
              onClick: n[0] || (n[0] = (i) => t.value = !0)
            }, Ho)
          ])
        ])
      ])
    ]));
  }
}), zo = { class: "flex" }, Uo = /* @__PURE__ */ s("div", { class: "flex-shrink-0" }, [
  /* @__PURE__ */ s("svg", {
    class: "h-5 w-5 text-red-400",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, [
    /* @__PURE__ */ s("path", {
      fill: "currentColor",
      d: "M12 2c5.53 0 10 4.47 10 10s-4.47 10-10 10S2 17.53 2 12S6.47 2 12 2m3.59 5L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17L17 15.59L13.41 12L17 8.41L15.59 7Z"
    })
  ])
], -1), qo = { class: "ml-3" }, Qo = { class: "text-sm text-red-700 dark:text-red-200" }, Ko = /* @__PURE__ */ se({
  __name: "ErrorSummary",
  props: {
    status: null,
    except: null,
    class: null
  },
  setup(e) {
    const t = e;
    let l = He("ApiState", void 0);
    const n = f(() => t.status || l != null && l.error.value ? eo.call({ responseStatus: t.status ?? (l == null ? void 0 : l.error.value) }, t.except ?? []) : null);
    return (i, r) => o(n) ? (a(), u("div", {
      key: 0,
      class: x(`bg-red-50 dark:bg-red-900 border-l-4 border-red-400 p-4 ${i.$props.class}`)
    }, [
      s("div", zo, [
        Uo,
        s("div", qo, [
          s("p", Qo, M(o(n)), 1)
        ])
      ])
    ], 2)) : $("", !0);
  }
}), Go = ["id", "aria-describedby"], Wo = /* @__PURE__ */ se({
  __name: "InputDescription",
  props: {
    id: null,
    description: null
  },
  setup(e) {
    return (t, l) => e.description ? (a(), u("div", {
      key: "description",
      class: "mt-2 text-sm text-gray-500",
      id: `${e.id}-description`,
      "aria-describedby": `${e.id}-description`
    }, [
      s("div", null, M(e.description), 1)
    ], 8, Go)) : $("", !0);
  }
});
function yl(e) {
  return Hn(e).replace(/\//g, "-");
}
function qn(e) {
  return e == null ? "" : to(e);
}
function Qn(e, t) {
  e.value = null, vl(() => e.value = t);
}
function Vt(e) {
  return Object.keys(e).forEach((t) => {
    const l = e[t];
    e[t] = Rn(l) ? o(l) : l;
  }), e;
}
function At(e, t, l) {
  l ? (t.value = e.entering.cls + " " + e.entering.from, setTimeout(() => t.value = e.entering.cls + " " + e.entering.to, 0)) : (t.value = e.leaving.cls + " " + e.leaving.from, setTimeout(() => t.value = e.leaving.cls + " " + e.leaving.to, 0));
}
function al() {
  if (typeof document > "u")
    return;
  let e = document.activeElement, t = e && e.form;
  if (t) {
    let l = ':not([disabled]):not([tabindex="-1"])', n = t.querySelectorAll(`a:not([disabled]), button${l}, input[type=text]${l}, [tabindex]${l}`), i = Array.prototype.filter.call(
      n,
      (d) => d.offsetWidth > 0 || d.offsetHeight > 0 || d === e
    ), r = i.indexOf(e);
    r > -1 && (i[r + 1] || i[0]).focus();
  }
}
function Pt(e) {
  if (!e)
    return null;
  if (typeof e == "string")
    return e;
  const t = typeof e == "function" ? new e() : typeof e == "object" ? e : null;
  if (!t)
    throw new Error(`Invalid DTO Type '${typeof e}'`);
  if (typeof t.getTypeName != "function")
    throw new Error(`${JSON.stringify(t)} is not a Request DTO`);
  const l = t.getTypeName();
  if (!l)
    throw new Error("DTO Required");
  return l;
}
function st(e, t, l) {
  l || (l = {});
  let n = l.cls || l.className || l.class;
  return n && (l = it(l, ["cls", "class", "className"]), l.class = n), t == null ? `<${e}` + El(l) + "/>" : `<${e}` + El(l) + `>${t || ""}</${e}>`;
}
function El(e) {
  return Object.keys(e).reduce((t, l) => `${t} ${l}="${jl(e[l])}"`, "");
}
function bl(e) {
  return Object.assign({ target: "_blank", rel: "noopener", class: "text-blue-600" }, e);
}
function Mt(e) {
  return gn(e);
}
let Zo = ["string", "number", "boolean", "null", "undefined"];
function $t(e) {
  return Zo.indexOf(typeof e) >= 0 || e instanceof Date;
}
function zt(e) {
  return !$t(e);
}
class Kn {
  get length() {
    return typeof localStorage > "u" ? 0 : localStorage.length;
  }
  getItem(t) {
    return typeof localStorage > "u" ? null : localStorage.getItem(t);
  }
  setItem(t, l) {
    typeof localStorage > "u" || localStorage.setItem(t, l);
  }
  removeItem(t) {
    typeof localStorage > "u" || localStorage.removeItem(t);
  }
  clear() {
    typeof localStorage > "u" || localStorage.clear();
  }
  key(t) {
    return typeof localStorage > "u" ? null : localStorage.key(t);
  }
}
function fl(e) {
  return typeof e == "string" ? JSON.parse(e) : null;
}
function Xl(e) {
  if (typeof history < "u") {
    const t = lo(location.href, e);
    history.pushState({}, "", t);
  }
}
function Yl(e, t) {
  if (["function", "Function", "eval", "=>", ";"].some((i) => e.includes(i)))
    throw new Error(`Unsafe script: '${e}'`);
  const n = Object.assign(
    Object.keys(globalThis).reduce((i, r) => (i[r] = void 0, i), {}),
    t
  );
  return new Function("with(this) { return (" + e + ") }").call(n);
}
function Rl(e) {
  typeof navigator < "u" && navigator.clipboard.writeText(e);
}
function Gn(e) {
  const t = ne.config.storage.getItem(e);
  return t ? JSON.parse(t) : null;
}
function en(e, t) {
  return Nt(`swr.${no(e)}`, t ? Object.assign({}, e, t) : e);
}
function Jo(e) {
  if (e.request) {
    const t = en(e.request, e.args);
    ne.config.storage.removeItem(t);
  }
}
async function Wn(e, t, l, n, i) {
  const r = en(t, n);
  l(new Ye({ response: Gn(r) }));
  const d = await e.api(t, n, i);
  if (d.succeeded && d.response) {
    d.response._date = new Date().valueOf();
    const c = JSON.stringify(d.response);
    ne.config.storage.setItem(r, c), l(d);
  }
  return d;
}
function Xo() {
  return {
    LocalStore: Kn,
    dateInputFormat: yl,
    timeInputFormat: qn,
    setRef: Qn,
    unRefs: Vt,
    transition: At,
    focusNextElement: al,
    getTypeName: Pt,
    htmlTag: st,
    htmlAttrs: El,
    linkAttrs: bl,
    toAppUrl: Mt,
    isPrimitive: $t,
    isComplexType: zt,
    pushState: Xl,
    scopedExpr: Yl,
    copyText: Rl,
    fromCache: Gn,
    swrCacheKey: en,
    swrClear: Jo,
    swrApi: Wn
  };
}
const Zn = "png,jpg,jpeg,jfif,gif,svg,webp".split(","), Jn = {
  img: "png,jpg,jpeg,gif,svg,webp,png,jpg,jpeg,gif,bmp,tif,tiff,webp,ai,psd,ps".split(","),
  vid: "avi,m4v,mov,mp4,mpg,mpeg,wmv,webm".split(","),
  aud: "mp3,mpa,ogg,wav,wma,mid,webm".split(","),
  ppt: "key,odp,pps,ppt,pptx".split(","),
  xls: "xls,xlsm,xlsx,ods,csv,tsv".split(","),
  doc: "doc,docx,pdf,rtf,tex,txt,md,rst,xls,xlsm,xlsx,ods,key,odp,pps,ppt,pptx".split(","),
  zip: "zip,tar,gz,7z,rar,gzip,deflate,br,iso,dmg,z,lz,lz4,lzh,s7z,apl,arg,jar,war".split(","),
  exe: "exe,bat,sh,cmd,com,app,msi,run,vb,vbs,js,ws,wsh".split(","),
  att: "bin,oct,dat".split(",")
  //attachment
}, jn = Object.keys(Jn), ct = (e, t) => `<svg xmlns='http://www.w3.org/2000/svg' aria-hidden='true' role='img' preserveAspectRatio='xMidYMid meet' viewBox='${e}'>${t}</svg>`, il = {
  img: ct("4 4 16 16", "<path fill='currentColor' d='M20 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zm-2 0H6v6.38l2.19-2.19l5.23 5.23l1-1a1.59 1.59 0 0 1 2.11.11L18 16V6zm-5 3.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0z'/>"),
  vid: ct("0 0 24 24", "<path fill='currentColor' d='m14 2l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8m4 18V9h-5V4H6v16h12m-2-2l-2.5-1.7V18H8v-5h5.5v1.7L16 13v5Z'/>"),
  aud: ct("0 0 24 24", "<path fill='currentColor' d='M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6zm10-9h-4v3.88a2.247 2.247 0 0 0-3.5 1.87c0 1.24 1.01 2.25 2.25 2.25S13 17.99 13 16.75V13h3v-2z'/>"),
  ppt: ct("0 0 48 48", "<g fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='4'><path d='M4 8h40'/><path d='M8 8h32v26H8V8Z' clip-rule='evenodd'/><path d='m22 16l5 5l-5 5m-6 16l8-8l8 8'/></g>"),
  xls: ct("0 0 256 256", "<path fill='currentColor' d='M200 26H72a14 14 0 0 0-14 14v26H40a14 14 0 0 0-14 14v96a14 14 0 0 0 14 14h18v26a14 14 0 0 0 14 14h128a14 14 0 0 0 14-14V40a14 14 0 0 0-14-14Zm-42 76h44v52h-44Zm44-62v50h-44V80a14 14 0 0 0-14-14h-2V38h58a2 2 0 0 1 2 2ZM70 40a2 2 0 0 1 2-2h58v28H70ZM38 176V80a2 2 0 0 1 2-2h104a2 2 0 0 1 2 2v96a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2Zm32 40v-26h60v28H72a2 2 0 0 1-2-2Zm130 2h-58v-28h2a14 14 0 0 0 14-14v-10h44v50a2 2 0 0 1-2 2ZM69.2 148.4L84.5 128l-15.3-20.4a6 6 0 1 1 9.6-7.2L92 118l13.2-17.6a6 6 0 0 1 9.6 7.2L99.5 128l15.3 20.4a6 6 0 0 1-9.6 7.2L92 138l-13.2 17.6a6 6 0 1 1-9.6-7.2Z'/>"),
  doc: ct("0 0 32 32", "<path fill='currentColor' d='M26 30H11a2.002 2.002 0 0 1-2-2v-6h2v6h15V6h-9V4h9a2.002 2.002 0 0 1 2 2v22a2.002 2.002 0 0 1-2 2Z'/><path fill='currentColor' d='M17 10h7v2h-7zm-1 5h8v2h-8zm-1 5h9v2h-9zm-6-1a5.005 5.005 0 0 1-5-5V3h2v11a3 3 0 0 0 6 0V5a1 1 0 0 0-2 0v10H8V5a3 3 0 0 1 6 0v9a5.005 5.005 0 0 1-5 5z'/>"),
  zip: ct("0 0 16 16", "<g fill='currentColor'><path d='M6.5 7.5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v.938l.4 1.599a1 1 0 0 1-.416 1.074l-.93.62a1 1 0 0 1-1.109 0l-.93-.62a1 1 0 0 1-.415-1.074l.4-1.599V7.5zm2 0h-1v.938a1 1 0 0 1-.03.243l-.4 1.598l.93.62l.93-.62l-.4-1.598a1 1 0 0 1-.03-.243V7.5z'/><path d='M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm5.5-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9v1H8v1h1v1H8v1h1v1H7.5V5h-1V4h1V3h-1V2h1V1z'/></g>"),
  exe: ct("0 0 16 16", "<path fill='currentColor' fill-rule='evenodd' d='M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM2.575 15.202H.785v-1.073H2.47v-.606H.785v-1.025h1.79v-.648H0v3.999h2.575v-.647ZM6.31 11.85h-.893l-.823 1.439h-.036l-.832-1.439h-.931l1.227 1.983l-1.239 2.016h.861l.853-1.415h.035l.85 1.415h.908l-1.254-1.992L6.31 11.85Zm1.025 3.352h1.79v.647H6.548V11.85h2.576v.648h-1.79v1.025h1.684v.606H7.334v1.073Z'/>"),
  att: ct("0 0 24 24", "<path fill='currentColor' d='M14 0a5 5 0 0 1 5 5v12a7 7 0 1 1-14 0V9h2v8a5 5 0 0 0 10 0V5a3 3 0 1 0-6 0v12a1 1 0 1 0 2 0V6h2v11a3 3 0 1 1-6 0V5a5 5 0 0 1 5-5Z'/>")
}, Yo = /[\r\n%#()<>?[\\\]^`{|}]/g, On = 1024, ea = ["Bytes", "KB", "MB", "GB", "TB"], ta = (() => {
  const e = "application/", t = e + "vnd.openxmlformats-officedocument.", l = "image/", n = "text/", i = "audio/", r = "video/", d = {
    jpg: l + "jpeg",
    tif: l + "tiff",
    svg: l + "svg+xml",
    ico: l + "x-icon",
    ts: n + "typescript",
    py: n + "x-python",
    sh: n + "x-sh",
    mp3: i + "mpeg3",
    mpg: r + "mpeg",
    ogv: r + "ogg",
    xlsx: t + "spreadsheetml.sheet",
    xltx: t + "spreadsheetml.template",
    docx: t + "wordprocessingml.document",
    dotx: t + "wordprocessingml.template",
    pptx: t + "presentationml.presentation",
    potx: t + "presentationml.template",
    ppsx: t + "presentationml.slideshow",
    mdb: e + "vnd.ms-access"
  };
  function c(v, h) {
    v.split(",").forEach((y) => d[y] = h);
  }
  function m(v, h) {
    v.split(",").forEach((y) => d[y] = h(y));
  }
  return m("jpeg,gif,png,tiff,bmp,webp", (v) => l + v), m("jsx,csv,css", (v) => n + v), m("aac,ac3,aiff,m4a,m4b,m4p,mid,midi,wav", (v) => i + v), m("3gpp,avi,dv,divx,ogg,mp4,webm", (v) => r + v), m("rtf,pdf", (v) => e + v), c("htm,html,shtm", n + "html"), c("js,mjs,cjs", n + "javascript"), c("yml,yaml", e + "yaml"), c("bat,cmd", e + "bat"), c("xml,csproj,fsproj,vbproj", n + "xml"), c("txt,ps1", n + "plain"), c("qt,mov", r + "quicktime"), c("doc,dot", e + "msword"), c("xls,xlt,xla", e + "excel"), c("ppt,oit,pps,ppa", e + "vnd.ms-powerpoint"), c("cer,crt,der", e + "x-x509-ca-cert"), c("gz,tgz,zip,rar,lzh,z", e + "x-compressed"), c("aaf,aca,asd,bin,cab,chm,class,cur,db,dat,deploy,dll,dsp,exe,fla,ics,inf,mix,msi,mso,obj,ocx,prm,prx,psd,psp,qxd,sea,snp,so,sqlite,toc,ttf,u32,xmp,xsn,xtp", e + "octet-stream"), d;
})();
let Hl = [];
function Xn(e) {
  return e = e.replace(/"/g, "'"), e = e.replace(/>\s+</g, "><"), e = e.replace(/\s{2,}/g, " "), e.replace(Yo, encodeURIComponent);
}
function tn(e) {
  return "data:image/svg+xml;utf8," + Xn(e);
}
function Yn(e) {
  let t = URL.createObjectURL(e);
  return Hl.push(t), t;
}
function es() {
  Hl.forEach((e) => {
    try {
      URL.revokeObjectURL(e);
    } catch (t) {
      console.error("URL.revokeObjectURL", t);
    }
  }), Hl = [];
}
function ln(e) {
  if (!e)
    return null;
  let t = gl(e, "?");
  return kt(t, "/");
}
function Wt(e) {
  let t = ln(e);
  return t == null || t.indexOf(".") === -1 ? null : kt(t, ".").toLowerCase();
}
function nn(e) {
  let t = Wt(e.name);
  return t && Zn.indexOf(t) >= 0 ? Yn(e) : pt(e.name);
}
function sn(e) {
  if (!e)
    return !1;
  if (e.startsWith("blob:") || e.startsWith("data:"))
    return !0;
  let t = Wt(e);
  return t && Zn.indexOf(t) >= 0 || !1;
}
function pt(e) {
  if (!e)
    return null;
  let t = Wt(e);
  return t == null || sn(e) ? e : Ht(t) || tn(il.doc);
}
function Ht(e) {
  let t = ts(e);
  return t && tn(t) || null;
}
function ts(e) {
  if (il[e])
    return il[e];
  for (let t = 0; t < jn.length; t++) {
    let l = jn[t];
    if (Jn[l].indexOf(e) >= 0)
      return il[l];
  }
  return null;
}
function on(e, t = 2) {
  if (e === 0)
    return "0 Bytes";
  const l = t < 0 ? 0 : t, n = Math.floor(Math.log(e) / Math.log(On));
  return parseFloat((e / Math.pow(On, n)).toFixed(l)) + " " + ea[n];
}
function la(e) {
  return e.files && Array.from(e.files).map((t) => ({ fileName: t.name, contentLength: t.size, filePath: nn(t) }));
}
function wl(e, t) {
  e.onerror = null, e.src = an(e.src, t) || "";
}
function an(e, t) {
  return Ht(kt(e, ".").toLowerCase()) || (t ? Ht(t) || t : null) || Ht("doc");
}
function Nl(e) {
  if (!e)
    throw new Error("fileNameOrExt required");
  const t = kt(e, ".").toLowerCase();
  return ta[t] || "application/" + t;
}
function K1() {
  return {
    extSvg: ts,
    extSrc: Ht,
    getExt: Wt,
    encodeSvg: Xn,
    canPreview: sn,
    getFileName: ln,
    getMimeType: Nl,
    formatBytes: on,
    filePathUri: pt,
    svgToDataUri: tn,
    fileImageUri: nn,
    objectUrl: Yn,
    flush: es,
    inputFiles: la,
    iconOnError: wl,
    iconFallbackSrc: an
  };
}
class na {
  constructor(t) {
    we(this, "view");
    we(this, "includeTypes");
    Object.assign(this, t);
  }
  getTypeName() {
    return "MetadataApp";
  }
  getMethod() {
    return "GET";
  }
  createResponse() {
    return {};
  }
}
const Ft = "/metadata/app.json", sa = {
  Boolean: "checkbox",
  DateTime: "date",
  DateOnly: "date",
  DateTimeOffset: "date",
  TimeSpan: "time",
  TimeOnly: "time",
  Byte: "number",
  Short: "number",
  Int64: "number",
  Int32: "number",
  UInt16: "number",
  UInt32: "number",
  UInt64: "number",
  Single: "number",
  Double: "number",
  Decimal: "number",
  String: "text",
  Guid: "text",
  Uri: "text"
}, oa = {
  number: "Int32",
  checkbox: "Boolean",
  date: "DateTime",
  "datetime-local": "DateTime",
  time: "TimeSpan"
}, zl = {
  Byte: "byte",
  Int16: "short",
  Int32: "int",
  Int64: "long",
  UInt16: "ushort",
  Unt32: "uint",
  UInt64: "ulong",
  Single: "float",
  Double: "double",
  Decimal: "decimal"
};
[...Object.keys(zl), ...Object.values(zl)];
const aa = {
  String: "string",
  Boolean: "bool",
  ...zl
};
function sl(e) {
  return aa[e] || e;
}
function ls(e, t) {
  return e ? (t || (t = []), e === "Nullable`1" ? sl(t[0]) + "?" : e.endsWith("[]") ? `List<${sl(e.substring(0, e.length - 2))}>` : t.length === 0 ? sl(e) : gl(sl(e), "`") + "<" + t.join(",") + ">") : "";
}
function ia(e) {
  return e && ls(e.name, e.genericArgs);
}
class Tt {
  constructor() {
    we(this, "Query");
    we(this, "QueryInto");
    we(this, "Create");
    we(this, "Update");
    we(this, "Patch");
    we(this, "Delete");
  }
  get AnyQuery() {
    return this.Query || this.QueryInto;
  }
  get AnyUpdate() {
    return this.Patch || this.Update;
  }
  toArray() {
    return [this.Query, this.QueryInto, this.Create, this.Update, this.Patch, this.Delete].filter((l) => !!l).map((l) => l);
  }
  get empty() {
    return !this.Query && !this.QueryInto && !this.Create && !this.Update && !this.Patch && !this.Delete;
  }
  add(t) {
    je.isQueryInto(t) && !this.QueryInto ? this.QueryInto = t : je.isQuery(t) && !this.Query ? this.Query = t : je.isCreate(t) && !this.Create ? this.Create = t : je.isUpdate(t) && !this.Update ? this.Update = t : je.isPatch(t) && !this.Patch ? this.Patch = t : je.isDelete(t) && !this.Delete && (this.Delete = t);
  }
  static from(t) {
    const l = new Tt();
    return t.forEach((n) => {
      l.add(n);
    }), l;
  }
  static forType(t, l) {
    var i;
    let n = new Tt();
    return t && (l ?? (l = (i = ne.metadata.value) == null ? void 0 : i.api), l == null || l.operations.forEach((r) => {
      var d;
      ((d = r.dataModel) == null ? void 0 : d.name) == t && n.add(r);
    })), n;
  }
}
const je = {
  Create: "ICreateDb`1",
  Update: "IUpdateDb`1",
  Patch: "IPatchDb`1",
  Delete: "IDeleteDb`1",
  AnyRead: ["QueryDb`1", "QueryDb`2"],
  AnyWrite: ["ICreateDb`1", "IUpdateDb`1", "IPatchDb`1", "IDeleteDb`1"],
  isAnyQuery: (e) => Ee(e.request.inherits, (t) => je.AnyRead.indexOf(t.name) >= 0),
  isQuery: (e) => Ee(e.request.inherits, (t) => t.name === "QueryDb`1"),
  isQueryInto: (e) => Ee(e.request.inherits, (t) => t.name === "QueryDb`2"),
  isCrud: (e) => {
    var t;
    return (t = e.request.implements) == null ? void 0 : t.some((l) => je.AnyWrite.indexOf(l.name) >= 0);
  },
  isCreate: (e) => ol(e, je.Create),
  isUpdate: (e) => ol(e, je.Update),
  isPatch: (e) => ol(e, je.Patch),
  isDelete: (e) => ol(e, je.Delete),
  model: (e) => {
    var t, l, n;
    return e ? Ee(e.inherits, (i) => je.AnyRead.indexOf(i.name) >= 0) ? (t = e.inherits) == null ? void 0 : t.genericArgs[0] : (n = (l = e.implements) == null ? void 0 : l.find((i) => je.AnyWrite.indexOf(i.name) >= 0)) == null ? void 0 : n.genericArgs[0] : null;
  }
};
function ra(e) {
  var t;
  return ((t = e.input) == null ? void 0 : t.type) || xl(rn(e));
}
function ns(e) {
  return e.endsWith("?") ? ao(e, 1) : e;
}
function xl(e) {
  return sa[ns(e)];
}
function ua(e) {
  return e && oa[e] || "String";
}
function rn(e) {
  return e.type === "Nullable`1" ? e.genericArgs[0] : e.type;
}
function Ul(e) {
  return e && xl(e) == "number" || !1;
}
function ss(e) {
  return e && e.toLowerCase() == "string" || !1;
}
function da(e) {
  return e == "List`1" || e.startsWith("List<") || e.endsWith("[]");
}
function os(e) {
  if (!(e != null && e.type))
    return !1;
  const t = rn(e);
  return e.isValueType && t.indexOf("`") == -1 || e.isEnum ? !1 : xl(e.type) == null;
}
function as(e) {
  var l, n, i;
  if (!(e != null && e.type))
    return !1;
  const t = rn(e);
  return e.isValueType && t.indexOf("`") == -1 || e.isEnum || ((l = e.input) == null ? void 0 : l.type) == "file" || ((n = e.input) == null ? void 0 : n.type) == "tag" || ((i = e.input) == null ? void 0 : i.type) == "combobox" ? !0 : xl(e.type) != null;
}
function Ut(e, t) {
  let l = typeof e == "string" ? kl(e) : e;
  l || (console.warn(`Metadata not found for: ${e}`), l = { request: { name: e } });
  let n = function() {
    return function(r) {
      Object.assign(this, r);
    };
  }(), i = function() {
    function r(d) {
      Object.assign(this, d);
    }
    return r.prototype.createResponse = function() {
      return l.returnsVoid ? void 0 : new n();
    }, r.prototype.getTypeName = function() {
      return l.request.name;
    }, r.prototype.getMethod = function() {
      return l.method || "POST";
    }, r;
  }();
  return new i(t);
}
function ca(e, t, l = {}) {
  let n = function() {
    return function(r) {
      Object.assign(this, r);
    };
  }(), i = function() {
    function r(d) {
      Object.assign(this, d);
    }
    return r.prototype.createResponse = function() {
      return typeof l.createResponse == "function" ? l.createResponse() : new n();
    }, r.prototype.getTypeName = function() {
      return e;
    }, r.prototype.getMethod = function() {
      return l.method || "POST";
    }, r;
  }();
  return new i(t);
}
function rl(e, t) {
  return e ? (Object.keys(e).forEach((l) => {
    let n = e[l];
    typeof n == "string" && n.startsWith("/Date") && (e[l] = yl(Ct(n)));
  }), e) : {};
}
function fa(e, t) {
  let l = {};
  return Array.from(e.elements).forEach((n) => {
    var h;
    let i = n;
    if (!i.id || i.value == null || i.value === "")
      return;
    const r = i.id.toLowerCase(), d = t && t.find((y) => y.name.toLowerCase() == r);
    let c = d == null ? void 0 : d.type, m = (h = d == null ? void 0 : d.genericArgs) == null ? void 0 : h[0], v = i.type === "checkbox" ? i.checked : i.value;
    Ul(c) ? v = Number(v) : c === "List`1" && typeof v == "string" && (v = v.split(",").map((y) => Ul(m) ? Number(y) : y)), l[i.id] = v;
  }), l;
}
function un(e) {
  var t;
  return ((t = e == null ? void 0 : e.api) == null ? void 0 : t.operations) && e.api.operations.length > 0;
}
function ma(e) {
  if (e != null && e.assert && !ne.metadata.value)
    throw new Error("useMetadata() not configured, see: https://docs.servicestack.net/vue/use-metadata");
  return ne.metadata.value;
}
function qt(e) {
  return e && un(e) ? (e.date = so(new Date()), ne.metadata.value = e, typeof localStorage < "u" && localStorage.setItem(Ft, JSON.stringify(e)), !0) : !1;
}
function va() {
  ne.metadata.value = null, typeof localStorage < "u" && localStorage.removeItem(Ft);
}
function is() {
  if (ne.metadata.value != null)
    return !0;
  let e = globalThis.Server;
  if (un(e))
    qt(e);
  else {
    const t = typeof localStorage < "u" ? localStorage.getItem(Ft) : null;
    if (t)
      try {
        qt(JSON.parse(t));
      } catch {
        console.error(`Could not JSON.parse ${Ft} from localStorage`);
      }
  }
  return ne.metadata.value != null;
}
async function Bn(e, t) {
  let l = t ? await t() : await fetch(e);
  if (l.ok) {
    let n = await l.text();
    qt(JSON.parse(n));
  } else
    console.error(`Could not download ${t ? "AppMetadata" : e}: ${l.statusText}`);
  un(ne.metadata.value) || console.warn("AppMetadata is not available");
}
async function ha(e) {
  var r;
  const { olderThan: t, resolvePath: l, resolve: n } = e || {};
  let i = is() && t !== 0;
  if (i && t) {
    let d = Ct((r = ne.metadata.value) == null ? void 0 : r.date);
    (!d || new Date().getTime() - d.getTime() > t) && (i = !1);
  }
  if (!i) {
    if ((l || n) && await Bn(l || Ft, n), ne.metadata.value != null)
      return;
    const d = He("client");
    if (d != null) {
      const c = await d.api(new na());
      c.succeeded && qt(c.response);
    }
    if (ne.metadata.value != null)
      return;
    await Bn(Ft);
  }
  return ne.metadata.value;
}
function rt(e, t) {
  var d;
  let l = (d = ne.metadata.value) == null ? void 0 : d.api;
  if (!l || !e)
    return null;
  let n = l.types.find((c) => c.name.toLowerCase() === e.toLowerCase() && (!t || c.namespace == t));
  if (n)
    return n;
  let i = kl(e);
  if (i)
    return i.request;
  let r = l.operations.find((c) => c.response && c.response.name.toLowerCase() === e.toLowerCase() && (!t || c.response.namespace == t));
  return r ? r.response : null;
}
function kl(e) {
  var n;
  let t = (n = ne.metadata.value) == null ? void 0 : n.api;
  return t ? t.operations.find((i) => i.request.name.toLowerCase() === e.toLowerCase()) : null;
}
function ga({ dataModel: e }) {
  var n;
  const t = (n = ne.metadata.value) == null ? void 0 : n.api;
  if (!t)
    return [];
  let l = t.operations;
  if (e) {
    const i = typeof e == "string" ? rt(e) : e;
    l = l.filter((r) => rs(r.dataModel, i));
  }
  return l;
}
function dn(e) {
  return e ? rt(e.name, e.namespace) : null;
}
function rs(e, t) {
  return e && t && e.name === t.name && (!e.namespace || !t.namespace || e.namespace === t.namespace);
}
function pa(e, t) {
  let l = rt(e);
  return l && l.properties && l.properties.find((i) => i.name.toLowerCase() === t.toLowerCase());
}
function us(e) {
  return ds(rt(e));
}
function ds(e) {
  if (e && e.isEnum && e.enumNames != null) {
    let t = {};
    for (let l = 0; l < e.enumNames.length; l++) {
      const n = (e.enumDescriptions ? e.enumDescriptions[l] : null) || e.enumNames[l], i = (e.enumValues != null ? e.enumValues[l] : null) || e.enumNames[l];
      t[i] = n;
    }
    return t;
  }
  return null;
}
function cs(e) {
  if (!e)
    return null;
  let t = {}, l = e.input && e.input.allowableEntries;
  if (l) {
    for (let i = 0; i < l.length; i++) {
      let r = l[i];
      t[r.key] = r.value;
    }
    return t;
  }
  let n = e.allowableValues || (e.input ? e.input.allowableValues : null);
  if (n) {
    for (let i = 0; i < n.length; i++) {
      let r = n[i];
      t[r] = r;
    }
    return t;
  }
  if (e.isEnum) {
    const i = e.genericArgs && e.genericArgs.length == 1 ? e.genericArgs[0] : e.type, r = rt(i);
    if (r)
      return ds(r);
  }
  return null;
}
function cn(e) {
  if (!e)
    return;
  const t = [];
  return Object.keys(e).forEach((l) => t.push({ key: l, value: e[l] })), t;
}
function ya(e, t) {
  const n = ((i, r) => Object.assign({
    id: i,
    name: i,
    type: r
  }, t))(e.name, (t == null ? void 0 : t.type) || ra(e) || "text");
  return e.isEnum && (n.type = "select", n.allowableEntries = cn(cs(e))), n;
}
function ba(e) {
  let t = [];
  if (e) {
    const l = Ze(e), n = kl(e.name), i = dn(n == null ? void 0 : n.dataModel);
    l.forEach((r) => {
      var c, m, v;
      if (!as(r))
        return;
      const d = ya(r, r.input);
      if (d.id = oo(d.id), d.type == "file" && r.uploadTo && !d.accept) {
        const h = (m = (c = ne.metadata.value) == null ? void 0 : c.plugins.filesUpload) == null ? void 0 : m.locations.find((y) => y.name == r.uploadTo);
        h && !d.accept && h.allowExtensions && (d.accept = h.allowExtensions.map((y) => y.startsWith(".") ? y : `.${y}`).join(","));
      }
      if (i) {
        const h = (v = i.properties) == null ? void 0 : v.find((y) => y.name == r.name);
        r.ref || (r.ref = h == null ? void 0 : h.ref);
      }
      if (d.options)
        try {
          const h = {
            input: d,
            $typeFields: l.map((g) => g.name),
            $dataModelFields: i ? Ze(i).map((g) => g.name) : [],
            ...ne.config.scopeWhitelist
          }, y = Yl(d.options, h);
          Object.keys(y).forEach((g) => {
            d[g] = y[g];
          });
        } catch {
          console.error(`failed to evaluate '${d.options}'`);
        }
      t.push(d);
    });
  }
  return t;
}
function fn(e, t) {
  var i, r;
  if (!t.type)
    return console.error("enumDescriptions missing {type:'EnumType'} options"), [`${e}`];
  const l = rt(t.type);
  if (!(l != null && l.enumValues))
    return console.error(`Could not find metadata for ${t.type}`), [`${e}`];
  const n = [];
  for (let d = 0; d < l.enumValues.length; d++) {
    const c = parseInt(l.enumValues[d]);
    c > 0 && (c & e) === c && n.push(((i = l.enumDescriptions) == null ? void 0 : i[d]) || ((r = l.enumNames) == null ? void 0 : r[d]) || `${e}`);
  }
  return n;
}
function fs(e) {
  return (t) => typeof t == "number" ? fn(t, { type: e }) : t;
}
function Ze(e) {
  if (!e)
    return [];
  let t = [], l = {};
  function n(i) {
    i.forEach((r) => {
      l[r.name] || (l[r.name] = 1, t.push(r));
    });
  }
  for (; e; )
    e.properties && n(e.properties), e = e.inherits ? dn(e.inherits) : null;
  return t.map((i) => i.type.endsWith("[]") ? { ...i, type: "List`1", genericArgs: [i.type.substring(0, i.type.length - 2)] } : i);
}
function ol(e, t) {
  var l;
  return ((l = e.request.implements) == null ? void 0 : l.some((n) => n.name === t)) || !1;
}
function Zt(e) {
  return e ? ms(e, Ze(e)) : null;
}
function ms(e, t) {
  let l = t.find((r) => r.name.toLowerCase() === "id");
  if (l && l.isPrimaryKey)
    return l;
  let i = t.find((r) => r.isPrimaryKey) || l;
  if (!i) {
    let r = je.model(e);
    if (r)
      return Ee(rt(r), (d) => Zt(d));
    console.error(`Primary Key not found in ${e.name}`);
  }
  return i || null;
}
function wa(e, t) {
  return Ee(Zt(e), (l) => fe(t, l.name));
}
function vs(e, t, l) {
  return e && e.valueType === "none" ? "" : l.key === "%In" || l.key === "%Between" ? `(${l.value})` : xa(t, l.value);
}
function xa(e, t) {
  return e ? (e = ns(e), Ul(e) || e === "Boolean" ? t : da(e) ? `[${t}]` : `'${t}'`) : t;
}
function et() {
  const e = f(() => {
    var n;
    return ((n = ne.metadata.value) == null ? void 0 : n.app) || null;
  }), t = f(() => {
    var n;
    return ((n = ne.metadata.value) == null ? void 0 : n.api) || null;
  }), l = f(() => {
    var n;
    return ((n = ne.metadata.value) == null ? void 0 : n.plugins.autoQuery.viewerConventions) || [];
  });
  return is(), {
    loadMetadata: ha,
    getMetadata: ma,
    setMetadata: qt,
    clearMetadata: va,
    metadataApp: e,
    metadataApi: t,
    filterDefinitions: l,
    typeOf: rt,
    typeOfRef: dn,
    typeEquals: rs,
    apiOf: kl,
    findApis: ga,
    typeName: ia,
    typeName2: ls,
    property: pa,
    enumOptions: us,
    propertyOptions: cs,
    createFormLayout: ba,
    typeProperties: Ze,
    supportsProp: as,
    Crud: je,
    Apis: Tt,
    getPrimaryKey: Zt,
    getPrimaryKeyByProps: ms,
    getId: wa,
    createDto: Ut,
    makeDto: ca,
    toFormValues: rl,
    formValues: fa,
    isComplexProp: os,
    asKvps: cn,
    expandEnumFlags: fn,
    enumFlagsConverter: fs
  };
}
const Xe = class {
  static async getOrFetchValue(t, l, n, i, r, d, c) {
    const m = Xe.getValue(n, c, r);
    return m ?? (await Xe.fetchLookupIds(t, l, n, i, r, d, [c]), Xe.getValue(n, c, r));
  }
  static getValue(t, l, n) {
    const i = Xe.Lookup[t];
    if (i) {
      const r = i[l];
      if (r)
        return n = n.toLowerCase(), r[n];
    }
  }
  static setValue(t, l, n, i) {
    const r = Xe.Lookup[t] ?? (Xe.Lookup[t] = {}), d = r[l] ?? (r[l] = {});
    n = n.toLowerCase(), d[n] = i;
  }
  static setRefValue(t, l) {
    const n = fe(l, t.refId);
    if (n == null || t.refLabel == null)
      return null;
    const i = fe(l, t.refLabel);
    return Xe.setValue(t.model, n, t.refLabel, i), i;
  }
  static async fetchLookupIds(t, l, n, i, r, d, c) {
    const m = l.operations.find((v) => {
      var h;
      return je.isAnyQuery(v) && ((h = v.dataModel) == null ? void 0 : h.name) == n;
    });
    if (m) {
      const v = Xe.Lookup[n] ?? (Xe.Lookup[n] = {}), h = [];
      Object.keys(v).forEach((R) => {
        const Q = v[R];
        fe(Q, r) && h.push(R);
      });
      const y = c.filter((R) => !h.includes(R));
      if (y.length == 0)
        return;
      const g = d ? null : `${i},${r}`, b = {
        [i + "In"]: y.join(",")
      };
      g && (b.fields = g);
      const k = Ut(m, b), I = await t.api(k, { jsconfig: "edv,eccn" });
      if (I.succeeded)
        (fe(I.response, "results") || []).forEach((Q) => {
          if (!fe(Q, i)) {
            console.error(`result[${i}] == null`, Q);
            return;
          }
          const D = `${fe(Q, i)}`, B = fe(Q, r);
          r = r.toLowerCase();
          const H = v[D] ?? (v[D] = {});
          H[r] = `${B}`;
        });
      else {
        console.error(`Failed to call ${m.request.name}`);
        return;
      }
    }
  }
};
let bt = Xe;
we(bt, "Lookup", {});
let ql = () => new Date().getTime(), ka = ["/", "T", ":", "-"], ot = {
  //locale: null,
  assumeUtc: !0,
  //number: null,
  date: {
    method: "Intl.DateTimeFormat",
    options: "{dateStyle:'medium'}"
  },
  maxFieldLength: 150,
  maxNestedFields: 2,
  maxNestedFieldLength: 30
}, $a = new Intl.RelativeTimeFormat(ot.locale, {}), En = 24 * 60 * 60 * 1e3 * 365, Il = {
  year: En,
  month: En / 12,
  day: 24 * 60 * 60 * 1e3,
  hour: 60 * 60 * 1e3,
  minute: 60 * 1e3,
  second: 1e3
}, yt = {
  currency: hs,
  bytes: gs,
  link: ps,
  linkTel: ys,
  linkMailTo: bs,
  icon: ws,
  iconRounded: xs,
  attachment: ks,
  hidden: $s,
  time: Cs,
  relativeTime: vn,
  relativeTimeFromMs: $l,
  enumFlags: Sa,
  formatDate: jt,
  formatNumber: mn
};
"iconOnError" in globalThis || (globalThis.iconOnError = wl);
class Re {
}
we(Re, "currency", { method: "currency" }), we(Re, "bytes", { method: "bytes" }), we(Re, "link", { method: "link" }), we(Re, "linkTel", { method: "linkTel" }), we(Re, "linkMailTo", { method: "linkMailTo" }), we(Re, "icon", { method: "icon" }), we(Re, "iconRounded", { method: "iconRounded" }), we(Re, "attachment", { method: "attachment" }), we(Re, "time", { method: "time" }), we(Re, "relativeTime", { method: "relativeTime" }), we(Re, "relativeTimeFromMs", { method: "relativeTimeFromMs" }), we(Re, "date", { method: "formatDate" }), we(Re, "number", { method: "formatNumber" }), we(Re, "hidden", { method: "hidden" }), we(Re, "enumFlags", { method: "enumFlags" });
function Ca(e) {
  ot = Object.assign({}, ot, e);
}
function _a(e) {
  Object.keys(e || {}).forEach((t) => {
    typeof e[t] == "function" && (yt[t] = e[t]);
  });
}
function La() {
  return yt;
}
function Jt(e, t) {
  return t ? st("span", e, t) : e;
}
function hs(e, t) {
  const l = it(t, ["currency"]);
  return Jt(new Intl.NumberFormat(void 0, { style: "currency", currency: (t == null ? void 0 : t.currency) || "USD" }).format(e), l);
}
function gs(e, t) {
  return Jt(on(e), t);
}
function ps(e, t) {
  return st("a", e, bl({ ...t, href: e }));
}
function ys(e, t) {
  return st("a", e, bl({ ...t, href: `tel:${e}` }));
}
function bs(e, t) {
  t || (t = {});
  let { subject: l, body: n } = t, i = it(t, ["subject", "body"]), r = {};
  return l && (r.subject = l), n && (r.body = n), st("a", e, bl({ ...i, href: `mailto:${Nt(e, r)}` }));
}
function ws(e, t) {
  return st("img", void 0, Object.assign({ class: "w-6 h-6", title: e, src: Mt(e), onerror: "iconOnError(this)" }, t));
}
function xs(e, t) {
  return st("img", void 0, Object.assign({ class: "w-8 h-8 rounded-full", title: e, src: Mt(e), onerror: "iconOnError(this)" }, t));
}
function ks(e, t) {
  let l = ln(e), i = Wt(l) == null || sn(e) ? Mt(e) : an(e);
  const r = Mt(i);
  let d = t && (t["icon-class"] || t.iconClass), c = st("img", void 0, Object.assign({ class: "w-6 h-6", src: r, onerror: "iconOnError(this,'att')" }, d ? { class: d } : null)), m = `<span class="pl-1">${l}</span>`;
  return st("a", c + m, Object.assign({ class: "flex", href: Mt(e), title: e }, t ? it(t, ["icon-class", "iconClass"]) : null));
}
function $s(e) {
  return "";
}
function Cs(e, t) {
  let l = typeof e == "string" ? new Date(Nn(e) * 1e3) : pl(e) ? Ct(e) : null;
  return Jt(l ? io(l) : e, t);
}
function jt(e, t) {
  if (e == null)
    return "";
  let l = typeof e == "number" ? new Date(e) : typeof e == "string" ? Ct(e) : e;
  if (!pl(l))
    return console.warn(`${l} is not a Date value`), e == null ? "" : `${e}`;
  let n = ot.date ? Cl(ot.date) : null;
  return Jt(typeof n == "function" ? n(l) : Hn(l), t);
}
function mn(e, t) {
  if (typeof e != "number")
    return e;
  let l = ot.number ? Cl(ot.number) : null, n = typeof l == "function" ? l(e) : `${e}`;
  return n === "" && (console.warn(`formatNumber(${e}) => ${n}`, l), n = `${e}`), Jt(n, t);
}
function _s(e, t, l) {
  let n = ro(e), i = t ? Cl(t) : null;
  if (typeof i == "function") {
    let d = l;
    if (t != null && t.options)
      try {
        d = Yl(t.options, l);
      } catch (c) {
        console.error(`Could not evaluate '${t.options}'`, c, ", with scope:", l);
      }
    return i(e, d);
  }
  let r = n != null ? pl(n) ? jt(n, l) : typeof n == "number" ? mn(n, l) : n : null;
  return r ?? "";
}
function Qt(e, t, l) {
  return $t(e) ? _s(e, t, l) : Ta(e, t, l);
}
function Va(e) {
  if (e == null)
    return NaN;
  if (typeof e == "number")
    return e;
  if (pl(e))
    return e.getTime() - ql();
  if (typeof e == "string") {
    let t = Number(e);
    if (!isNaN(t))
      return t;
    if (e[0] === "P" || e.startsWith("-P"))
      return Nn(e) * 1e3 * -1;
    if (uo(e, ka) >= 0)
      return Ct(e).getTime() - ql();
  }
  return NaN;
}
function $l(e, t) {
  for (let l in Il)
    if (Math.abs(e) > Il[l] || l === "second")
      return (t || $a).format(Math.round(e / Il[l]), l);
}
function vn(e, t) {
  let l = Va(e);
  return isNaN(l) ? "" : $l(l, t);
}
function Ma(e, t) {
  return $l(e.getTime() - (t ? t.getTime() : ql()));
}
function Sa(e, t) {
  return fn(e, t).join(", ");
}
function Cl(e) {
  if (!e)
    return null;
  let { method: t, options: l } = e, n = `${t}(${l})`, i = yt[n] || yt[t];
  if (typeof i == "function")
    return i;
  let r = e.locale || ot.locale;
  if (t.startsWith("Intl.")) {
    let d = r ? `'${r}'` : "undefined", c = `return new ${t}(${d},${l || "undefined"})`;
    try {
      let m = Function(c)();
      return i = t === "Intl.DateTimeFormat" ? (v) => m.format(Ct(v)) : t === "Intl.NumberFormat" ? (v) => m.format(Number(v)) : t === "Intl.RelativeTimeFormat" ? (v) => vn(v, m) : (v) => m.format(v), yt[n] = i;
    } catch (m) {
      console.error(`Invalid format: ${c}`, m);
    }
  } else {
    let d = globalThis[t];
    if (typeof d == "function") {
      let c = l != null ? Function("return " + l)() : void 0;
      return i = (m) => d(m, c, r), yt[n] = i;
    }
    console.error(`No '${t}' function exists`, Object.keys(yt));
  }
  return null;
}
function Ls(e, t) {
  return e ? e.length > t ? e.substring(0, t) + "..." : e : "";
}
function Vs(e) {
  return e.substring(0, 6) === "/Date(" ? jt(Ct(e)) : e;
}
function Aa(e) {
  return hn(It(e)).replace(/"/g, "");
}
function Ms(e) {
  if (e == null || e === "")
    return "";
  if (typeof e == "string")
    try {
      return JSON.parse(e);
    } catch {
      console.warn("couldn't parse as JSON", e);
    }
  return e;
}
function hn(e, t = 4) {
  return e = Ms(e), typeof e != "object" ? typeof e == "string" ? e : `${e}` : JSON.stringify(e, void 0, t);
}
function Fa(e) {
  return e = Ms(e), typeof e != "object" ? typeof e == "string" ? e : `${e}` : (e = Object.assign({}, e), e = It(e), hn(e));
}
function It(e) {
  if (e == null)
    return null;
  if (typeof e == "string")
    return Vs(e);
  if ($t(e))
    return e;
  if (e instanceof Date)
    return jt(e);
  if (Array.isArray(e))
    return e.map(It);
  if (typeof e == "object") {
    let t = {};
    return Object.keys(e).forEach((l) => {
      l != "__type" && (t[l] = It(e[l]));
    }), t;
  }
  return e;
}
function Ta(e, t, l) {
  let n = e;
  if (Array.isArray(e)) {
    if ($t(e[0]))
      return n.join(",");
    e[0] != null && (n = e[0]);
  }
  if (n == null)
    return "";
  if (n instanceof Date)
    return jt(n, l);
  let i = Object.keys(n), r = [];
  for (let d = 0; d < Math.min(ot.maxNestedFields, i.length); d++) {
    let c = i[d], m = `${It(n[c])}`;
    r.push(`<b class="font-medium">${c}</b>: ${jl(Ls(Vs(m), ot.maxNestedFieldLength))}`);
  }
  return i.length > 2 && r.push("..."), st("span", "{ " + r.join(", ") + " }", Object.assign({ title: jl(Aa(e)) }, l));
}
function G1() {
  return {
    Formats: Re,
    setDefaultFormats: Ca,
    setFormatters: _a,
    formatValue: Qt,
    formatter: Cl,
    dateInputFormat: yl,
    currency: hs,
    bytes: gs,
    link: ps,
    linkTel: ys,
    linkMailTo: bs,
    icon: ws,
    iconRounded: xs,
    attachment: ks,
    hidden: $s,
    time: Cs,
    relativeTime: vn,
    relativeTimeFromDate: Ma,
    relativeTimeFromMs: $l,
    formatDate: jt,
    formatNumber: mn,
    indentJson: hn,
    prettyJson: Fa,
    scrub: It,
    truncate: Ls,
    apiValueFmt: _s,
    iconOnError: wl
  };
}
class ne {
}
we(ne, "config", {
  redirectSignIn: "/signin",
  redirectSignOut: "/auth/logout",
  navigate: (t) => location.href = t,
  assetsPathResolver: (t) => t,
  fallbackPathResolver: (t) => t,
  storage: new Kn(),
  tableIcon: { svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><g fill='none' stroke='currentColor' stroke-width='1.5'><path d='M5 12v6s0 3 7 3s7-3 7-3v-6'/><path d='M5 6v6s0 3 7 3s7-3 7-3V6'/><path d='M12 3c7 0 7 3 7 3s0 3-7 3s-7-3-7-3s0-3 7-3Z'/></g></svg>" },
  scopeWhitelist: {
    enumFlagsConverter: fs,
    ...La()
  }
}), we(ne, "autoQueryGridDefaults", {
  deny: [],
  hide: [],
  toolbarButtonClass: void 0,
  tableStyle: "stripedRows",
  take: 25,
  maxFieldLength: 150
}), we(ne, "events", co()), we(ne, "user", S(null)), we(ne, "metadata", S(null));
function Ia(e) {
  ne.config = Object.assign(ne.config, e);
}
function Da(e) {
  ne.autoQueryGridDefaults = Object.assign(ne.autoQueryGridDefaults, e);
}
function gn(e) {
  return e && ne.config.assetsPathResolver ? ne.config.assetsPathResolver(e) : e;
}
function Pa(e) {
  return e && ne.config.fallbackPathResolver ? ne.config.fallbackPathResolver(e) : e;
}
function _t() {
  const e = f(() => ne.config), t = f(() => ne.autoQueryGridDefaults), l = ne.events;
  return {
    config: e,
    setConfig: Ia,
    events: l,
    autoQueryGridDefaults: t,
    setAutoQueryGridDefaults: Da,
    assetsPathResolver: gn,
    fallbackPathResolver: Pa
  };
}
const Ss = se({
  inheritAttrs: !1,
  props: {
    image: Object,
    svg: String,
    src: String,
    alt: String,
    type: String
  },
  setup(e, { attrs: t }) {
    return () => {
      let l = e.image;
      if (e.type) {
        const { typeOf: r } = et(), d = r(e.type);
        d || console.warn(`Type ${e.type} does not exist`), d != null && d.icon ? l = d == null ? void 0 : d.icon : console.warn(`Type ${e.type} does not have a [Svg] icon`);
      }
      let n = e.svg || (l == null ? void 0 : l.svg) || "";
      if (n.startsWith("<svg ")) {
        let d = gl(n, ">").indexOf("class="), c = `${(l == null ? void 0 : l.cls) || ""} ${t.class || ""}`;
        if (d == -1)
          n = `<svg class="${c}" ${n.substring(4)}`;
        else {
          const m = d + 6 + 1;
          n = `${n.substring(0, m) + c} ${n.substring(m)}`;
        }
        return gt("span", { innerHTML: n });
      } else
        return gt("img", {
          class: [l == null ? void 0 : l.cls, t.class],
          src: gn(e.src || (l == null ? void 0 : l.uri)),
          onError: (r) => wl(r.target)
        });
    };
  }
}), ja = { class: "text-2xl font-semibold text-gray-900 dark:text-gray-300" }, Oa = { class: "flex" }, Ba = /* @__PURE__ */ s("path", {
  d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
  fill: "currentColor"
}, null, -1), Ea = /* @__PURE__ */ s("path", {
  d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
  fill: "currentFill"
}, null, -1), Ra = [
  Ba,
  Ea
], Ha = /* @__PURE__ */ se({
  __name: "Loading",
  props: {
    imageClass: { default: "w-6 h-6" }
  },
  setup(e) {
    return (t, l) => (a(), u("div", ja, [
      s("div", Oa, [
        (a(), u("svg", {
          class: x(["self-center inline mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300", e.imageClass]),
          role: "status",
          viewBox: "0 0 100 101",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, Ra, 2)),
        s("span", null, [
          Z(t.$slots, "default")
        ])
      ])
    ]));
  }
}), Na = ["href", "onClick"], za = ["type"], Ua = /* @__PURE__ */ se({
  __name: "OutlineButton",
  props: {
    type: { default: "submit" },
    href: null
  },
  setup(e) {
    const t = "inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-200 disabled:text-gray-400 bg-white dark:bg-black hover:bg-gray-50 hover:dark:bg-gray-900 disabled:hover:bg-white dark:disabled:hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:ring-offset-black";
    return (l, n) => {
      const i = q("router-link");
      return e.href ? (a(), X(i, {
        key: 0,
        to: e.href
      }, {
        default: he(({ navigate: r }) => [
          s("button", {
            class: x(t),
            href: e.href,
            onClick: r
          }, [
            Z(l.$slots, "default")
          ], 8, Na)
        ]),
        _: 3
      }, 8, ["to"])) : (a(), u("button", Me({
        key: 1,
        type: e.type,
        class: t
      }, l.$attrs), [
        Z(l.$slots, "default")
      ], 16, za));
    };
  }
}), qa = ["href", "onClick"], Qa = ["type"], Ka = /* @__PURE__ */ se({
  __name: "PrimaryButton",
  props: {
    type: { default: "submit" },
    href: null,
    color: { default: "indigo" }
  },
  setup(e) {
    const t = e, l = {
      blue: "text-white bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:hover:bg-blue-400 focus:ring-indigo-500 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
      purple: "text-white bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 disabled:hover:bg-purple-400 focus:ring-indigo-500 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
      red: "focus:ring-red-500 text-white bg-red-600 hover:bg-red-700 disabled:bg-red-400 disabled:hover:bg-red-400 focus:ring-red-500 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-500",
      green: "focus:ring-green-300 text-white bg-green-600 hover:bg-green-700 disabled:bg-green-400 disabled:hover:bg-green-400 focus:ring-green-500 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-500",
      sky: "focus:ring-sky-300 text-white bg-sky-600 hover:bg-sky-700 disabled:bg-sky-400 disabled:hover:bg-sky-400 focus:ring-sky-500 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-500",
      cyan: "focus:ring-cyan-300 text-white bg-cyan-600 hover:bg-cyan-700 disabled:bg-cyan-400 disabled:hover:bg-cyan-400 focus:ring-cyan-500 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-500",
      indigo: "focus:ring-2 focus:ring-offset-2 text-white bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 disabled:hover:bg-indigo-400 focus:ring-indigo-500 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    }, n = f(() => "inline-flex justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 dark:ring-offset-black " + (l[t.color] || l.indigo));
    return (i, r) => {
      const d = q("router-link");
      return e.href ? (a(), X(d, {
        key: 0,
        to: e.href
      }, {
        default: he(({ navigate: c }) => [
          s("button", {
            class: x(o(n)),
            href: e.href,
            onClick: c
          }, [
            Z(i.$slots, "default")
          ], 10, qa)
        ]),
        _: 3
      }, 8, ["to"])) : (a(), u("button", Me({
        key: 1,
        type: e.type,
        class: o(n)
      }, i.$attrs), [
        Z(i.$slots, "default")
      ], 16, Qa));
    };
  }
}), Ga = ["type", "href", "onClick"], Wa = ["type"], Za = /* @__PURE__ */ se({
  __name: "SecondaryButton",
  props: {
    type: null,
    href: null
  },
  setup(e) {
    const t = "inline-flex justify-center rounded-md border border-gray-300 py-2 px-4 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-400 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700 focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:ring-offset-black";
    return (l, n) => {
      const i = q("router-link");
      return e.href ? (a(), X(i, {
        key: 0,
        to: e.href
      }, {
        default: he(({ navigate: r }) => [
          s("button", {
            type: e.type ?? "button",
            class: x(t),
            href: e.href,
            onClick: r
          }, [
            Z(l.$slots, "default")
          ], 8, Ga)
        ]),
        _: 3
      }, 8, ["to"])) : (a(), u("button", Me({
        key: 1,
        type: e.type ?? "button",
        class: t
      }, l.$attrs), [
        Z(l.$slots, "default")
      ], 16, Wa));
    };
  }
});
function Qe(e, t) {
  return Array.isArray(e) ? e.indexOf(t) >= 0 : e == t || e.includes(t);
}
const ml = {
  blue: "text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200",
  purple: "text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-200",
  red: "text-red-700 dark:text-red-400 hover:text-red-900 dark:hover:text-red-200",
  green: "text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-200",
  sky: "text-sky-600 dark:text-sky-400 hover:text-sky-800 dark:hover:text-sky-200",
  cyan: "text-cyan-600 dark:text-cyan-400 hover:text-cyan-800 dark:hover:text-cyan-200",
  indigo: "text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-200"
}, ft = {
  base: "block w-full sm:text-sm rounded-md dark:text-white dark:bg-gray-900 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none",
  invalid: "pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500",
  valid: "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 dark:border-gray-600"
}, wt = {
  panelClass: "shadow sm:rounded-md",
  formClass: "space-y-6 bg-white dark:bg-black py-6 px-4 sm:p-6",
  headingClass: "text-lg font-medium leading-6 text-gray-900 dark:text-gray-100",
  subHeadingClass: "mt-1 text-sm text-gray-500 dark:text-gray-400"
}, Rt = {
  panelClass: "pointer-events-auto w-screen xl:max-w-3xl md:max-w-xl max-w-lg",
  formClass: "flex h-full flex-col divide-y divide-gray-200 dark:divide-gray-700 shadow-xl bg-white dark:bg-black",
  titlebarClass: "bg-gray-50 dark:bg-gray-900 px-4 py-6 sm:px-6",
  headingClass: "text-lg font-medium text-gray-900 dark:text-gray-100",
  subHeadingClass: "mt-1 text-sm text-gray-500 dark:text-gray-400",
  closeButtonClass: "rounded-md bg-gray-50 dark:bg-gray-900 text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:ring-offset-black"
}, Ql = {
  modalClass: "relative transform overflow-hidden rounded-lg bg-white dark:bg-black text-left shadow-xl transition-all sm:my-8",
  sizeClass: "sm:max-w-prose lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl sm:w-full"
}, Ge = {
  panelClass(e = "slideOver") {
    return e == "card" ? wt.panelClass : Rt.panelClass;
  },
  formClass(e = "slideOver") {
    return e == "card" ? wt.formClass : Rt.formClass;
  },
  headingClass(e = "slideOver") {
    return e == "card" ? wt.headingClass : Rt.headingClass;
  },
  subHeadingClass(e = "slideOver") {
    return e == "card" ? wt.subHeadingClass : Rt.subHeadingClass;
  },
  buttonsClass: "mt-4 px-4 py-3 bg-gray-50 dark:bg-gray-900 sm:px-6 flex flex-wrap justify-between",
  legendClass: "text-base font-medium text-gray-900 dark:text-gray-100 text-center mb-4"
}, ue = {
  getGridClass(e = "stripedRows") {
    return ue.gridClass;
  },
  getGrid2Class(e = "stripedRows") {
    return Qe(e, "fullWidth") ? "overflow-x-auto" : ue.grid2Class;
  },
  getGrid3Class(e = "stripedRows") {
    return Qe(e, "fullWidth") ? "inline-block min-w-full py-2 align-middle" : ue.grid3Class;
  },
  getGrid4Class(e = "stripedRows") {
    return Qe(e, "whiteBackground") ? "" : Qe(e, "fullWidth") ? "overflow-hidden shadow-sm ring-1 ring-black ring-opacity-5" : ue.grid4Class;
  },
  getTableClass(e = "stripedRows") {
    return Qe(e, "fullWidth") || Qe(e, "verticalLines") ? "min-w-full divide-y divide-gray-300" : ue.tableClass;
  },
  getTheadClass(e = "stripedRows") {
    return Qe(e, "whiteBackground") ? "" : ue.theadClass;
  },
  getTheadRowClass(e = "stripedRows") {
    return ue.theadRowClass + (Qe(e, "verticalLines") ? " divide-x divide-gray-200 dark:divide-gray-700" : "");
  },
  getTheadCellClass(e = "stripedRows") {
    return ue.theadCellClass + (Qe(e, "uppercaseHeadings") ? " uppercase" : "");
  },
  getTbodyClass(e = "stripedRows") {
    return (Qe(e, "whiteBackground") || Qe(e, "verticalLines") ? "divide-y divide-gray-200 dark:divide-gray-800" : ue.tableClass) + (Qe(e, "verticalLines") ? " bg-white" : "");
  },
  getTableRowClass(e = "stripedRows", t, l, n) {
    return (n ? "cursor-pointer " : "") + (l ? "bg-indigo-100 dark:bg-blue-800" : (n ? "hover:bg-yellow-50 dark:hover:bg-blue-900 " : "") + (Qe(e, "stripedRows") ? t % 2 == 0 ? "bg-white dark:bg-black" : "bg-gray-50 dark:bg-gray-800" : "bg-white dark:bg-black")) + (Qe(e, "verticalLines") ? " divide-x divide-gray-200 dark:divide-gray-700" : "");
  },
  gridClass: "flex flex-col",
  //original -margins + padding forces scroll bars when parent is w-full for no clear benefits?
  //original: -my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8
  grid2Class: "",
  //original: inline-block min-w-full py-2 align-middle md:px-6 lg:px-8
  grid3Class: "inline-block min-w-full py-2 align-middle",
  grid4Class: "overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg",
  tableClass: "min-w-full divide-y divide-gray-200 dark:divide-gray-700",
  theadClass: "bg-gray-50 dark:bg-gray-900",
  tableCellClass: "px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400",
  theadRowClass: "select-none",
  theadCellClass: "px-6 py-4 text-left text-sm font-medium tracking-wider whitespace-nowrap",
  toolbarButtonClass: "inline-flex items-center px-2.5 py-1.5 border border-gray-300 dark:border-gray-700 shadow-sm text-sm font-medium rounded text-gray-700 dark:text-gray-300 bg-white dark:bg-black hover:bg-gray-50 dark:hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:ring-offset-black"
}, Ja = {
  colspans: "col-span-3 sm:col-span-3"
}, W1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  a: ml,
  card: wt,
  dummy: Ja,
  form: Ge,
  grid: ue,
  input: ft,
  modal: Ql,
  slideOver: Rt
}, Symbol.toStringTag, { value: "Module" })), Xa = /* @__PURE__ */ se({
  __name: "TextLink",
  props: {
    color: { default: "blue" }
  },
  setup(e) {
    const t = e, l = Ks(), n = f(() => (ml[t.color] || ml.blue) + (l.href ? "" : " cursor-pointer"));
    return (i, r) => (a(), u("a", {
      class: x(o(n))
    }, [
      Z(i.$slots, "default")
    ], 2));
  }
}), Ya = {
  class: "flex",
  "aria-label": "Breadcrumb"
}, ei = {
  role: "list",
  class: "flex items-center space-x-4"
}, ti = ["href", "title"], li = /* @__PURE__ */ s("svg", {
  class: "h-6 w-6 flex-shrink-0",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ s("path", {
    "fill-rule": "evenodd",
    d: "M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z",
    "clip-rule": "evenodd"
  })
], -1), ni = { class: "sr-only" }, si = /* @__PURE__ */ se({
  __name: "Breadcrumbs",
  props: {
    homeHref: { default: "/" },
    homeLabel: { default: "Home" }
  },
  setup(e) {
    return (t, l) => (a(), u("nav", Ya, [
      s("ol", ei, [
        s("li", null, [
          s("div", null, [
            s("a", {
              href: e.homeHref,
              class: "text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400",
              title: e.homeLabel
            }, [
              li,
              s("span", ni, M(e.homeLabel), 1)
            ], 8, ti)
          ])
        ]),
        Z(t.$slots, "default")
      ])
    ]));
  }
}), oi = { class: "flex items-center" }, ai = /* @__PURE__ */ s("svg", {
  class: "h-6 w-6 flex-shrink-0 text-gray-400 dark:text-gray-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ s("path", {
    "fill-rule": "evenodd",
    d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z",
    "clip-rule": "evenodd"
  })
], -1), ii = ["href", "title"], ri = ["title"], ui = /* @__PURE__ */ se({
  __name: "Breadcrumb",
  props: {
    href: null,
    title: null
  },
  setup(e) {
    return (t, l) => (a(), u("li", null, [
      s("div", oi, [
        ai,
        e.href ? (a(), u("a", {
          key: 0,
          href: e.href,
          class: "ml-4 text-lg font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300",
          title: e.title
        }, [
          Z(t.$slots, "default")
        ], 8, ii)) : (a(), u("span", {
          key: 1,
          class: "ml-4 text-lg font-medium text-gray-700 dark:text-gray-300",
          title: e.title
        }, [
          Z(t.$slots, "default")
        ], 8, ri))
      ])
    ]));
  }
}), di = {
  key: 0,
  class: "text-base font-semibold text-gray-500 dark:text-gray-400"
}, ci = {
  role: "list",
  class: "mt-4 divide-y divide-gray-200 dark:divide-gray-800 border-t border-b border-gray-200 dark:border-gray-800"
}, fi = /* @__PURE__ */ se({
  __name: "NavList",
  props: {
    title: null
  },
  setup(e) {
    return (t, l) => (a(), u("div", null, [
      e.title ? (a(), u("h2", di, M(e.title), 1)) : $("", !0),
      s("ul", ci, [
        Z(t.$slots, "default")
      ])
    ]));
  }
}), mi = { class: "relative flex items-start space-x-4 py-6" }, vi = { class: "flex-shrink-0" }, hi = { class: "flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50 dark:bg-indigo-900" }, gi = { class: "min-w-0 flex-1" }, pi = { class: "text-base font-medium text-gray-900 dark:text-gray-100" }, yi = { class: "rounded-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2" }, bi = ["href"], wi = /* @__PURE__ */ s("span", {
  class: "absolute inset-0",
  "aria-hidden": "true"
}, null, -1), xi = { class: "text-base text-gray-500" }, ki = /* @__PURE__ */ s("div", { class: "flex-shrink-0 self-center" }, [
  /* @__PURE__ */ s("svg", {
    class: "h-5 w-5 text-gray-400",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    /* @__PURE__ */ s("path", {
      "fill-rule": "evenodd",
      d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z",
      "clip-rule": "evenodd"
    })
  ])
], -1), $i = /* @__PURE__ */ se({
  __name: "NavListItem",
  props: {
    title: null,
    href: null,
    icon: null,
    iconSvg: null,
    iconSrc: null,
    iconAlt: null
  },
  setup(e) {
    return (t, l) => {
      const n = q("Icon");
      return a(), u("li", mi, [
        s("div", vi, [
          s("span", hi, [
            ge(n, {
              class: "w-6 h-6 text-indigo-700 dark:text-indigo-300",
              image: e.icon,
              src: e.iconSrc,
              svg: e.iconSvg,
              alt: e.iconAlt
            }, null, 8, ["image", "src", "svg", "alt"])
          ])
        ]),
        s("div", gi, [
          s("h3", pi, [
            s("span", yi, [
              s("a", {
                href: e.href,
                class: "focus:outline-none"
              }, [
                wi,
                pe(" " + M(e.title), 1)
              ], 8, bi)
            ])
          ]),
          s("p", xi, [
            Z(t.$slots, "default")
          ])
        ]),
        ki
      ]);
    };
  }
});
function Ci(e) {
  ne.user.value = e, ne.events.publish("signIn", e);
}
function _i() {
  ne.user.value = null, ne.events.publish("signOut", null);
}
function As(e) {
  var t;
  return (((t = ne.user.value) == null ? void 0 : t.roles) || []).indexOf(e) >= 0;
}
function Li(e) {
  var t;
  return (((t = ne.user.value) == null ? void 0 : t.permissions) || []).indexOf(e) >= 0;
}
function pn() {
  return As("Admin");
}
function ul(e) {
  if (!e)
    return !1;
  if (!e.requiresAuth)
    return !0;
  const t = ne.user.value;
  if (!t)
    return !1;
  if (pn())
    return !0;
  let [l, n] = [t.roles || [], t.permissions || []], [i, r, d, c] = [
    e.requiredRoles || [],
    e.requiredPermissions || [],
    e.requiresAnyRole || [],
    e.requiresAnyPermission || []
  ];
  return !(!i.every((m) => l.indexOf(m) >= 0) || d.length > 0 && !d.some((m) => l.indexOf(m) >= 0) || !r.every((m) => n.indexOf(m) >= 0) || c.length > 0 && !c.every((m) => n.indexOf(m) >= 0));
}
function Vi(e) {
  if (!e || !e.requiresAuth)
    return null;
  const t = ne.user.value;
  if (!t)
    return `<b>${e.request.name}</b> requires Authentication`;
  if (pn())
    return null;
  let [l, n] = [t.roles || [], t.permissions || []], [i, r, d, c] = [
    e.requiredRoles || [],
    e.requiredPermissions || [],
    e.requiresAnyRole || [],
    e.requiresAnyPermission || []
  ], m = i.filter((h) => l.indexOf(h) < 0);
  if (m.length > 0)
    return `Requires ${m.map((h) => "<b>" + h + "</b>").join(", ")} Role` + (m.length > 1 ? "s" : "");
  let v = r.filter((h) => n.indexOf(h) < 0);
  return v.length > 0 ? `Requires ${v.map((h) => "<b>" + h + "</b>").join(", ")} Permission` + (v.length > 1 ? "s" : "") : d.length > 0 && !d.some((h) => l.indexOf(h) >= 0) ? `Requires any ${d.filter((h) => l.indexOf(h) < 0).map((h) => "<b>" + h + "</b>").join(", ")} Role` + (m.length > 1 ? "s" : "") : c.length > 0 && !c.every((h) => n.indexOf(h) >= 0) ? `Requires any ${c.filter((h) => n.indexOf(h) < 0).map((h) => "<b>" + h + "</b>").join(", ")} Permission` + (v.length > 1 ? "s" : "") : null;
}
function yn() {
  const e = f(() => ne.user.value || null), t = f(() => ne.user.value != null);
  return { signIn: Ci, signOut: _i, user: e, isAuthenticated: t, hasRole: As, hasPermission: Li, isAdmin: pn, canAccess: ul, invalidAccessMessage: Vi };
}
const Mi = { key: 0 }, Si = { class: "md:p-4" }, Fs = /* @__PURE__ */ se({
  __name: "EnsureAccess",
  props: {
    invalidAccess: null,
    alertClass: null
  },
  emits: ["done"],
  setup(e) {
    const { isAuthenticated: t } = yn(), { config: l } = _t(), n = () => {
      let r = location.href.substring(location.origin.length) || "/";
      const d = Nt(l.value.redirectSignIn, { redirect: r });
      l.value.navigate(d);
    }, i = () => {
      let r = location.href.substring(location.origin.length) || "/";
      const d = Nt(l.value.redirectSignOut, { ReturnUrl: r });
      l.value.navigate(d);
    };
    return (r, d) => {
      const c = q("Alert"), m = q("SecondaryButton");
      return e.invalidAccess ? (a(), u("div", Mi, [
        ge(c, {
          class: x(e.alertClass),
          innerHTML: e.invalidAccess
        }, null, 8, ["class", "innerHTML"]),
        s("div", Si, [
          o(t) ? (a(), X(m, {
            key: 1,
            onClick: i
          }, {
            default: he(() => [
              pe("Sign Out")
            ]),
            _: 1
          })) : (a(), X(m, {
            key: 0,
            onClick: n
          }, {
            default: he(() => [
              pe("Sign In")
            ]),
            _: 1
          }))
        ])
      ])) : $("", !0);
    };
  }
}), Ai = { class: "absolute top-0 right-0 bg-white dark:bg-black border dark:border-gray-800 rounded normal-case text-sm shadow w-80" }, Fi = { class: "p-4" }, Ti = /* @__PURE__ */ s("h3", { class: "text-base font-medium mb-3 dark:text-gray-100" }, "Sort", -1), Ii = { class: "flex w-full justify-center" }, Di = /* @__PURE__ */ s("svg", {
  class: "w-6 h-6",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16"
}, [
  /* @__PURE__ */ s("g", { fill: "currentColor" }, [
    /* @__PURE__ */ s("path", {
      "fill-rule": "evenodd",
      d: "M10.082 5.629L9.664 7H8.598l1.789-5.332h1.234L13.402 7h-1.12l-.419-1.371h-1.781zm1.57-.785L11 2.687h-.047l-.652 2.157h1.351z"
    }),
    /* @__PURE__ */ s("path", { d: "M12.96 14H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V14zm-8.46-.5a.5.5 0 0 1-1 0V3.707L2.354 4.854a.5.5 0 1 1-.708-.708l2-1.999l.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L4.5 3.707V13.5z" })
  ])
], -1), Pi = /* @__PURE__ */ s("span", null, "ASC", -1), ji = [
  Di,
  Pi
], Oi = /* @__PURE__ */ hl('<svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g fill="currentColor"><path d="M12.96 7H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V7z"></path><path fill-rule="evenodd" d="M10.082 12.629L9.664 14H8.598l1.789-5.332h1.234L13.402 14h-1.12l-.419-1.371h-1.781zm1.57-.785L11 9.688h-.047l-.652 2.156h1.351z"></path><path d="M4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999l.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z"></path></g></svg><span>DESC</span>', 2), Bi = [
  Oi
], Ei = /* @__PURE__ */ s("h3", { class: "text-base font-medium mt-4 mb-2" }, " Filter ", -1), Ri = { key: 0 }, Hi = ["id", "value"], Ni = ["for"], zi = { key: 1 }, Ui = { class: "mb-2" }, qi = { class: "inline-flex rounded-full items-center py-0.5 pl-2.5 pr-1 text-sm font-medium bg-indigo-100 text-indigo-700" }, Qi = ["onClick"], Ki = /* @__PURE__ */ s("svg", {
  class: "h-2 w-2",
  stroke: "currentColor",
  fill: "none",
  viewBox: "0 0 8 8"
}, [
  /* @__PURE__ */ s("path", {
    "stroke-linecap": "round",
    "stroke-width": "1.5",
    d: "M1 1l6 6m0-6L1 7"
  })
], -1), Gi = [
  Ki
], Wi = { class: "flex" }, Zi = /* @__PURE__ */ s("svg", {
  class: "h-6 w-6",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ s("path", {
    "fill-rule": "evenodd",
    d: "M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z",
    "clip-rule": "evenodd"
  })
], -1), Ji = [
  Zi
], Xi = { class: "bg-gray-50 dark:bg-gray-900 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse" }, bn = /* @__PURE__ */ se({
  __name: "FilterColumn",
  props: {
    definitions: null,
    column: null,
    topLeft: null
  },
  emits: ["done", "save"],
  setup(e, { emit: t }) {
    const l = e, n = S(), i = S(""), r = S(""), d = S([]), c = f(() => l.column.meta.isEnum == !0), m = f(() => l.column.meta.isEnum == !0 ? cn(us(l.column.type)) : []), v = f(() => {
      var V;
      return ((V = g(l.column.type)) == null ? void 0 : V.map((A) => ({ key: A.value, value: A.name }))) || [];
    }), h = S({ filters: [] }), y = f(() => h.value.filters);
    Pl(() => h.value = Object.assign({}, l.column.settings, {
      filters: Array.from(l.column.settings.filters)
    })), Pl(() => {
      var V, A, j;
      return d.value = ((j = (A = (V = l.column.settings.filters) == null ? void 0 : V[0]) == null ? void 0 : A.value) == null ? void 0 : j.split(",")) || [];
    });
    function g(V) {
      let A = l.definitions;
      return ss(V) || (A = A.filter((j) => j.types !== "string")), A;
    }
    function b(V, A) {
      return g(V).find((j) => j.value === A);
    }
    function k() {
      var A;
      if (!i.value)
        return;
      let V = (A = b(l.column.type, i.value)) == null ? void 0 : A.name;
      V && (h.value.filters.push({ key: i.value, name: V, value: r.value }), i.value = r.value = "");
    }
    function I(V) {
      h.value.filters.splice(V, 1);
    }
    function R(V) {
      return vs(b(l.column.type, V.key), l.column.type, V);
    }
    function Q() {
      t("done");
    }
    function D() {
      var V;
      i.value = "%", (V = n.value) == null || V.focus();
    }
    function B() {
      if (r.value && k(), c.value) {
        let V = Object.values(d.value).filter((A) => A);
        h.value.filters = V.length > 0 ? [{ key: "%In", name: "In", value: V.join(",") }] : [];
      }
      t("save", h.value), t("done");
    }
    function H(V) {
      h.value.sort = V === h.value.sort ? void 0 : V, vl(B);
    }
    return (V, A) => {
      var K;
      const j = q("SelectInput"), J = q("TextInput"), C = q("PrimaryButton"), N = q("SecondaryButton");
      return a(), u("div", {
        class: "fixed z-20 inset-0 overflow-y-auto",
        onClick: Q,
        onVnodeMounted: D
      }, [
        s("div", {
          class: "absolute",
          style: Kl(`top:${e.topLeft.y}px;left:${e.topLeft.x}px`),
          onClick: A[5] || (A[5] = Ne(() => {
          }, ["stop"]))
        }, [
          s("div", Ai, [
            s("div", Fi, [
              Ti,
              s("div", Ii, [
                s("button", {
                  type: "button",
                  title: "Sort Ascending",
                  onClick: A[0] || (A[0] = (z) => H("ASC")),
                  class: x(`${h.value.sort === "ASC" ? "bg-indigo-100 border-indigo-500" : "bg-white hover:bg-gray-50 border-gray-300"} mr-1 inline-flex items-center px-2.5 py-1.5 border shadow-sm text-sm font-medium rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`)
                }, ji, 2),
                s("button", {
                  type: "button",
                  title: "Sort Descending",
                  onClick: A[1] || (A[1] = (z) => H("DESC")),
                  class: x(`${h.value.sort === "DESC" ? "bg-indigo-100 border-indigo-500" : "bg-white hover:bg-gray-50 border-gray-300"} ml-1 inline-flex items-center px-2.5 py-1.5 border shadow-sm text-sm font-medium rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`)
                }, Bi, 2)
              ]),
              Ei,
              o(c) ? (a(), u("div", Ri, [
                (a(!0), u(ke, null, _e(o(m), (z) => (a(), u("div", {
                  key: z.key,
                  class: "flex items-center"
                }, [
                  xt(s("input", {
                    type: "checkbox",
                    id: z.key,
                    value: z.key,
                    "onUpdate:modelValue": A[2] || (A[2] = (Y) => d.value = Y),
                    class: "h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                  }, null, 8, Hi), [
                    [Gl, d.value]
                  ]),
                  s("label", {
                    for: z.key,
                    class: "ml-3"
                  }, M(z.value), 9, Ni)
                ]))), 128))
              ])) : (a(), u("div", zi, [
                (a(!0), u(ke, null, _e(o(y), (z, Y) => (a(), u("div", Ui, [
                  s("span", qi, [
                    pe(M(e.column.name) + " " + M(z.name) + " " + M(R(z)) + " ", 1),
                    s("button", {
                      type: "button",
                      onClick: (_) => I(Y),
                      class: "flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500 focus:outline-none focus:bg-indigo-500 focus:text-white"
                    }, Gi, 8, Qi)
                  ])
                ]))), 256)),
                s("div", Wi, [
                  ge(j, {
                    id: "filterRule",
                    class: "w-32 mr-1",
                    modelValue: i.value,
                    "onUpdate:modelValue": A[3] || (A[3] = (z) => i.value = z),
                    entries: o(v),
                    label: "",
                    placeholder: ""
                  }, null, 8, ["modelValue", "entries"]),
                  ((K = b(e.column.type, i.value)) == null ? void 0 : K.valueType) !== "none" ? (a(), X(J, {
                    key: 0,
                    ref_key: "txtFilter",
                    ref: n,
                    id: "filterValue",
                    class: "w-32 mr-1",
                    type: "text",
                    modelValue: r.value,
                    "onUpdate:modelValue": A[4] || (A[4] = (z) => r.value = z),
                    onKeyup: Gs(k, ["enter"]),
                    label: "",
                    placeholder: ""
                  }, null, 8, ["modelValue", "onKeyup"])) : $("", !0),
                  s("div", { class: "pt-1" }, [
                    s("button", {
                      type: "button",
                      onClick: k,
                      class: "inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    }, Ji)
                  ])
                ])
              ]))
            ]),
            s("div", Xi, [
              ge(C, {
                onClick: B,
                color: "red",
                class: "ml-2"
              }, {
                default: he(() => [
                  pe(" Save ")
                ]),
                _: 1
              }),
              ge(N, { onClick: Q }, {
                default: he(() => [
                  pe(" Cancel ")
                ]),
                _: 1
              })
            ])
          ])
        ], 4)
      ], 512);
    };
  }
}), Yi = { class: "px-4 sm:px-6 lg:px-8 text-sm" }, er = { class: "flex flex-wrap" }, tr = { class: "group pr-4 sm:pr-6 lg:pr-8" }, lr = { class: "flex justify-between w-full font-medium" }, nr = { class: "w-6 flex justify-end" }, sr = { class: "hidden group-hover:inline" }, or = ["onClick", "title"], ar = /* @__PURE__ */ s("svg", {
  class: "h-2 w-2",
  stroke: "currentColor",
  fill: "none",
  viewBox: "0 0 8 8"
}, [
  /* @__PURE__ */ s("path", {
    "stroke-linecap": "round",
    "stroke-width": "1.5",
    d: "M1 1l6 6m0-6L1 7"
  })
], -1), ir = [
  ar
], rr = {
  key: 0,
  class: "pt-2"
}, ur = { class: "ml-2" }, dr = { key: 1 }, cr = { class: "pt-2" }, fr = { class: "inline-flex rounded-full items-center py-0.5 pl-2.5 pr-1 text-sm font-medium bg-indigo-100 text-indigo-700" }, mr = ["onClick"], vr = /* @__PURE__ */ s("svg", {
  class: "h-2 w-2",
  stroke: "currentColor",
  fill: "none",
  viewBox: "0 0 8 8"
}, [
  /* @__PURE__ */ s("path", {
    "stroke-linecap": "round",
    "stroke-width": "1.5",
    d: "M1 1l6 6m0-6L1 7"
  })
], -1), hr = [
  vr
], gr = /* @__PURE__ */ s("span", null, "Clear All", -1), pr = [
  gr
], wn = /* @__PURE__ */ se({
  __name: "FilterViews",
  props: {
    definitions: null,
    columns: null
  },
  emits: ["done", "change"],
  setup(e, { emit: t }) {
    const l = e, n = f(() => l.columns.filter((y) => y.settings.filters.length > 0));
    function i(y) {
      var g, b;
      return (b = (g = y == null ? void 0 : y[0]) == null ? void 0 : g.value) == null ? void 0 : b.split(",");
    }
    function r(y) {
      let g = l.definitions;
      return ss(y) || (g = g.filter((b) => b.types !== "string")), g;
    }
    function d(y, g) {
      return r(y).find((b) => b.value === g);
    }
    function c(y, g) {
      return vs(d(y.type, g.value), y.type, g);
    }
    function m(y) {
      y.settings.filters = [], t("change", y);
    }
    function v(y, g) {
      y.settings.filters.splice(g, 1), t("change", y);
    }
    function h() {
      l.columns.forEach((y) => {
        y.settings.filters = [], t("change", y);
      }), t("done");
    }
    return (y, g) => (a(), u("div", Yi, [
      s("div", er, [
        (a(!0), u(ke, null, _e(o(n), (b) => (a(), u("fieldset", tr, [
          s("legend", lr, [
            s("span", null, M(o(Oe)(b.name)), 1),
            s("span", nr, [
              s("span", sr, [
                s("button", {
                  onClick: (k) => m(b),
                  title: `Clear all ${o(Oe)(b.name)} filters`,
                  class: "flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-red-600 hover:bg-red-200 hover:text-red-500 focus:outline-none focus:bg-red-500 focus:text-white"
                }, ir, 8, or)
              ])
            ])
          ]),
          b.meta.isEnum ? (a(), u("div", rr, [
            (a(!0), u(ke, null, _e(i(b.settings.filters), (k) => (a(), u("div", {
              key: k,
              class: "flex items-center"
            }, [
              s("label", ur, M(k), 1)
            ]))), 128))
          ])) : (a(), u("div", dr, [
            (a(!0), u(ke, null, _e(b.settings.filters, (k, I) => (a(), u("div", cr, [
              s("span", fr, [
                pe(M(b.name) + " " + M(k.name) + " " + M(c(b, k)) + " ", 1),
                s("button", {
                  type: "button",
                  onClick: (R) => v(b, I),
                  class: "flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500 focus:outline-none focus:bg-indigo-500 focus:text-white"
                }, hr, 8, mr)
              ])
            ]))), 256))
          ]))
        ]))), 256))
      ]),
      s("div", { class: "flex justify-center pt-4" }, [
        s("button", {
          type: "button",
          onClick: h,
          class: "inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        }, pr)
      ])
    ]));
  }
}), yr = { class: "bg-white dark:bg-black px-4 pt-5 pb-4 sm:p-6 sm:pb-4" }, br = { class: "" }, wr = { class: "mt-3 text-center sm:mt-0 sm:mx-4 sm:text-left" }, xr = /* @__PURE__ */ s("h3", { class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-100" }, "Query Preferences", -1), kr = { class: "mt-4" }, $r = ["for"], Cr = ["id"], _r = ["value", "selected"], Lr = { class: "mt-4 flex items-center py-4 border-b border-gray-200 dark:border-gray-800" }, Vr = ["id", "checked"], Mr = ["for"], Sr = { class: "mt-4" }, Ar = { class: "pb-2 px-4" }, Fr = { class: "" }, Tr = ["id", "value"], Ir = ["for"], Dr = { class: "bg-gray-50 dark:bg-gray-900 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse" }, xn = /* @__PURE__ */ se({
  __name: "QueryPrefs",
  props: {
    id: { default: "QueryPrefs" },
    columns: null,
    prefs: null,
    maxLimit: null
  },
  emits: ["done", "save"],
  setup(e, { emit: t }) {
    const l = e, { autoQueryGridDefaults: n } = _t(), i = S({});
    Pl(() => i.value = Object.assign({
      take: n.value.take,
      selectedColumns: []
    }, l.prefs));
    const r = [10, 25, 50, 100, 250, 500, 1e3];
    function d() {
      t("done");
    }
    function c() {
      t("save", i.value);
    }
    return (m, v) => {
      const h = q("PrimaryButton"), y = q("SecondaryButton"), g = q("ModalDialog");
      return a(), X(g, {
        id: e.id,
        onDone: d,
        "size-class": "w-full sm:max-w-prose"
      }, {
        default: he(() => [
          s("div", yr, [
            s("div", br, [
              s("div", wr, [
                xr,
                s("div", kr, [
                  s("label", {
                    for: `${e.id}-take`,
                    class: "block text-sm font-medium text-gray-700 dark:text-gray-300"
                  }, "Results per page", 8, $r),
                  xt(s("select", {
                    id: `${e.id}-take`,
                    "onUpdate:modelValue": v[0] || (v[0] = (b) => i.value.take = b),
                    class: "mt-1 block w-full pl-3 pr-10 py-2 text-base bg-white dark:bg-black border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  }, [
                    (a(!0), u(ke, null, _e(r.filter((b) => l.maxLimit == null || b <= l.maxLimit), (b) => (a(), u("option", {
                      value: b,
                      selected: b === i.value.take
                    }, M(b), 9, _r))), 256))
                  ], 8, Cr), [
                    [Ws, i.value.take]
                  ])
                ]),
                s("div", Lr, [
                  s("input", {
                    type: "radio",
                    id: `${e.id}-allColumns`,
                    onClick: v[1] || (v[1] = (b) => i.value.selectedColumns = []),
                    checked: i.value.selectedColumns.length === 0,
                    class: "focus:ring-indigo-500 h-4 w-4 bg-white dark:bg-black text-indigo-600 dark:text-indigo-400 border-gray-300 dark:border-gray-700"
                  }, null, 8, Vr),
                  s("label", {
                    class: "ml-3 block text-gray-700 dark:text-gray-300",
                    for: `${e.id}-allColumns`
                  }, "View all columns", 8, Mr)
                ]),
                s("div", Sr, [
                  s("div", Ar, [
                    s("div", Fr, [
                      (a(!0), u(ke, null, _e(e.columns, (b) => (a(), u("div", {
                        key: b.name,
                        class: "flex items-center"
                      }, [
                        xt(s("input", {
                          type: "checkbox",
                          id: b.name,
                          value: b.name,
                          "onUpdate:modelValue": v[2] || (v[2] = (k) => i.value.selectedColumns = k),
                          class: "h-4 w-4 bg-white dark:bg-black border-gray-300 dark:border-gray-700 rounded text-indigo-600 dark:text-indigo-400 focus:ring-indigo-500"
                        }, null, 8, Tr), [
                          [Gl, i.value.selectedColumns]
                        ]),
                        s("label", {
                          for: b.name,
                          class: "ml-3"
                        }, M(b.name), 9, Ir)
                      ]))), 128))
                    ])
                  ])
                ])
              ])
            ])
          ]),
          s("div", Dr, [
            ge(h, {
              onClick: c,
              color: "red",
              class: "ml-2"
            }, {
              default: he(() => [
                pe(" Save ")
              ]),
              _: 1
            }),
            ge(y, { onClick: d }, {
              default: he(() => [
                pe(" Cancel ")
              ]),
              _: 1
            })
          ])
        ]),
        _: 1
      }, 8, ["id"]);
    };
  }
}), Pr = { key: 0 }, jr = { key: 1 }, Or = {
  key: 2,
  class: "pt-1"
}, Br = { key: 0 }, Er = { key: 1 }, Rr = { key: 3 }, Hr = { class: "pl-1 pt-1 flex flex-wrap" }, Nr = { class: "flex mt-1" }, zr = ["title"], Ur = /* @__PURE__ */ s("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ s("g", {
    "stroke-width": "1.5",
    fill: "none"
  }, [
    /* @__PURE__ */ s("path", {
      d: "M9 3H3.6a.6.6 0 0 0-.6.6v16.8a.6.6 0 0 0 .6.6H9M9 3v18M9 3h6M9 21h6m0-18h5.4a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H15m0-18v18",
      stroke: "currentColor"
    })
  ])
], -1), qr = [
  Ur
], Qr = ["disabled"], Kr = /* @__PURE__ */ s("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ s("path", {
    d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6l6 6zM6 6h2v12H6z",
    fill: "currentColor"
  })
], -1), Gr = [
  Kr
], Wr = ["disabled"], Zr = /* @__PURE__ */ s("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ s("path", {
    d: "M15.41 7.41L14 6l-6 6l6 6l1.41-1.41L10.83 12z",
    fill: "currentColor"
  })
], -1), Jr = [
  Zr
], Xr = ["disabled"], Yr = /* @__PURE__ */ s("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ s("path", {
    d: "M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z",
    fill: "currentColor"
  })
], -1), eu = [
  Yr
], tu = ["disabled"], lu = /* @__PURE__ */ s("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ s("path", {
    d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6l-6-6zM16 6h2v12h-2z",
    fill: "currentColor"
  })
], -1), nu = [
  lu
], su = {
  key: 0,
  class: "flex mt-1"
}, ou = { class: "px-4 text-lg text-black dark:text-white" }, au = { key: 0 }, iu = { key: 1 }, ru = /* @__PURE__ */ s("span", { class: "hidden xl:inline" }, " Showing Results ", -1), uu = { key: 2 }, du = { class: "flex flex-wrap" }, cu = {
  key: 0,
  class: "pl-2 mt-1"
}, fu = /* @__PURE__ */ s("svg", {
  class: "w-5 h-5",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ s("path", {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M20 20v-5h-5M4 4v5h5m10.938 2A8.001 8.001 0 0 0 5.07 8m-1.008 5a8.001 8.001  0 0 0 14.868 3"
  })
], -1), mu = [
  fu
], vu = {
  key: 1,
  class: "pl-2 mt-1"
}, hu = /* @__PURE__ */ hl('<svg class="w-5 h-5 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M28.781 4.405h-10.13V2.018L2 4.588v22.527l16.651 2.868v-3.538h10.13A1.162 1.162 0 0 0 30 25.349V5.5a1.162 1.162 0 0 0-1.219-1.095zm.16 21.126H18.617l-.017-1.889h2.487v-2.2h-2.506l-.012-1.3h2.518v-2.2H18.55l-.012-1.3h2.549v-2.2H18.53v-1.3h2.557v-2.2H18.53v-1.3h2.557v-2.2H18.53v-2h10.411z" fill="#20744a" fill-rule="evenodd"></path><path fill="#20744a" d="M22.487 7.439h4.323v2.2h-4.323z"></path><path fill="#20744a" d="M22.487 10.94h4.323v2.2h-4.323z"></path><path fill="#20744a" d="M22.487 14.441h4.323v2.2h-4.323z"></path><path fill="#20744a" d="M22.487 17.942h4.323v2.2h-4.323z"></path><path fill="#20744a" d="M22.487 21.443h4.323v2.2h-4.323z"></path><path fill="#fff" fill-rule="evenodd" d="M6.347 10.673l2.146-.123l1.349 3.709l1.594-3.862l2.146-.123l-2.606 5.266l2.606 5.279l-2.269-.153l-1.532-4.024l-1.533 3.871l-2.085-.184l2.422-4.663l-2.238-4.993z"></path></svg><span class="text-green-900 dark:text-green-100">Excel</span>', 2), gu = [
  hu
], pu = {
  key: 2,
  class: "pl-2 mt-1"
}, yu = {
  key: 0,
  class: "w-5 h-5 mr-1 text-green-600 dark:text-green-400",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, bu = /* @__PURE__ */ s("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M5 13l4 4L19 7"
}, null, -1), wu = [
  bu
], xu = {
  key: 1,
  class: "w-5 h-5 mr-1",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, ku = /* @__PURE__ */ s("g", { fill: "none" }, [
  /* @__PURE__ */ s("path", {
    d: "M8 4v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.242a2 2 0 0 0-.602-1.43L16.083 2.57A2 2 0 0 0 14.685 2H10a2 2 0 0 0-2 2z",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }),
  /* @__PURE__ */ s("path", {
    d: "M16 18v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  })
], -1), $u = [
  ku
], Cu = /* @__PURE__ */ s("span", { class: "whitespace-nowrap" }, "Copy URL", -1), _u = {
  key: 3,
  class: "pl-2 mt-1"
}, Lu = /* @__PURE__ */ s("svg", {
  class: "w-5 h-5",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ s("path", {
    fill: "currentColor",
    d: "M6.78 2.72a.75.75 0 0 1 0 1.06L4.56 6h8.69a7.75 7.75 0 1 1-7.75 7.75a.75.75 0 0 1 1.5 0a6.25 6.25 0 1 0 6.25-6.25H4.56l2.22 2.22a.75.75 0 1 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.5a.75.75 0 0 1 1.06 0Z"
  })
], -1), Vu = [
  Lu
], Mu = {
  key: 4,
  class: "pl-2 mt-1"
}, Su = /* @__PURE__ */ s("svg", {
  class: "flex-none w-5 h-5 mr-2 text-gray-400 dark:text-gray-500 group-hover:text-gray-500",
  "aria-hidden": "true",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, [
  /* @__PURE__ */ s("path", {
    "fill-rule": "evenodd",
    d: "M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z",
    "clip-rule": "evenodd"
  })
], -1), Au = { class: "mr-1" }, Fu = {
  key: 0,
  class: "h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-gray-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, Tu = /* @__PURE__ */ s("path", {
  "fill-rule": "evenodd",
  d: "M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z",
  "clip-rule": "evenodd"
}, null, -1), Iu = [
  Tu
], Du = {
  key: 1,
  class: "h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-gray-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, Pu = /* @__PURE__ */ s("path", {
  "fill-rule": "evenodd",
  d: "M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z",
  "clip-rule": "evenodd"
}, null, -1), ju = [
  Pu
], Ou = {
  key: 5,
  class: "pl-2 mt-1"
}, Bu = ["title"], Eu = /* @__PURE__ */ s("svg", {
  class: "w-5 h-5 mr-1 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ s("path", {
    d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z",
    fill: "currentColor"
  })
], -1), Ru = { class: "whitespace-nowrap" }, Hu = { key: 7 }, Nu = {
  key: 0,
  class: "cursor-pointer flex justify-between items-center hover:text-gray-900 dark:hover:text-gray-50"
}, zu = { class: "mr-1 select-none" }, Uu = {
  key: 1,
  class: "flex justify-between items-center"
}, qu = { class: "mr-1 select-none" }, Qu = /* @__PURE__ */ se({
  __name: "AutoQueryGrid",
  props: {
    filterDefinitions: null,
    id: { default: "AutoQueryGrid" },
    apis: null,
    type: null,
    prefs: null,
    deny: null,
    hide: null,
    selectedColumns: null,
    toolbarButtonClass: null,
    tableStyle: null,
    gridClass: null,
    grid2Class: null,
    grid3Class: null,
    grid4Class: null,
    tableClass: null,
    theadClass: null,
    tbodyClass: null,
    theadRowClass: null,
    theadCellClass: null,
    headerTitle: null,
    headerTitles: null,
    visibleFrom: null,
    rowClass: null,
    rowStyle: null,
    apiPrefs: null,
    canFilter: null,
    disableKeyBindings: null,
    configureField: null,
    skip: { default: 0 },
    create: { type: Boolean },
    edit: null,
    filters: null
  },
  emits: ["headerSelected", "rowSelected"],
  setup(e, { expose: t, emit: l }) {
    const n = e, { config: i, autoQueryGridDefaults: r } = _t(), d = r, c = He("client"), m = i.value.storage, v = (w) => typeof w == "string" ? w.split(",") : w || [];
    function h(w, L) {
      const le = v(L);
      return w.reduce((W, re) => (W[re] = !le.includes(re), W), {});
    }
    const y = "filtering,queryString,queryFilters".split(","), g = "copyApiUrl,downloadCsv,filtersView,newItem,pagingInfo,pagingNav,preferences,refresh,resetPreferences,toolbar".split(","), b = f(() => n.deny ? h(y, n.deny) : h(y, d.value.deny)), k = f(() => n.hide ? h(g, n.hide) : h(g, d.value.hide));
    function I(w) {
      return b.value[w];
    }
    function R(w) {
      return k.value[w];
    }
    const Q = f(() => n.tableStyle ?? d.value.tableStyle), D = f(() => n.gridClass ?? ue.getGridClass(Q.value)), B = f(() => n.grid2Class ?? ue.getGrid2Class(Q.value)), H = f(() => n.grid3Class ?? ue.getGrid3Class(Q.value)), V = f(() => n.grid4Class ?? ue.getGrid4Class(Q.value)), A = f(() => n.tableClass ?? ue.getTableClass(Q.value)), j = f(() => n.theadClass ?? ue.getTheadClass(Q.value)), J = f(() => n.theadRowClass ?? ue.getTheadRowClass(Q.value)), C = f(() => n.theadCellClass ?? ue.getTheadCellClass(Q.value)), N = f(() => n.toolbarButtonClass ?? ue.toolbarButtonClass);
    function K(w, L) {
      var be;
      if (n.rowClass)
        return n.rowClass(w, L);
      const le = !!me.value.AnyUpdate, re = ((be = De.value) != null && be.name ? fe(w, De.value.name) : null) == de.value;
      return ue.getTableRowClass(n.tableStyle, L, re, le);
    }
    const z = Wl(), Y = f(() => {
      var w;
      return Ml(((w = me.value.AnyQuery.viewModel) == null ? void 0 : w.name) || me.value.AnyQuery.dataModel.name);
    }), _ = f(() => {
      const w = Object.keys(z).map((L) => L.toLowerCase());
      return Ze(Y.value).filter((L) => w.includes(L.name.toLowerCase()) || w.includes(L.name.toLowerCase() + "-header")).map((L) => L.name);
    });
    function O() {
      let w = v(n.selectedColumns);
      return w.length > 0 ? w : _.value.length > 0 ? _.value : [];
    }
    const p = f(() => {
      let L = O().map((W) => W.toLowerCase());
      const le = Ze(Y.value);
      return L.length > 0 ? L.map((W) => le.find((re) => re.name.toLowerCase() === W)).filter((W) => W != null) : le;
    }), G = f(() => {
      let w = p.value.map((le) => le.name), L = v(oe.value.selectedColumns).map((le) => le.toLowerCase());
      return L.length > 0 ? w.filter((le) => L.includes(le.toLowerCase())) : w;
    }), F = S([]), E = S(new Ye()), ae = S(new Ye()), ve = S(), ie = S(!1), de = S(), U = S(), Ve = S(!1), Ae = S(), ye = S(n.skip), ze = S(!1), ee = 25, oe = S({ take: ee }), Ce = S(!1), Fe = f(() => F.value.some((w) => w.settings.filters.length > 0 || !!w.settings.sort) || oe.value.selectedColumns), xe = f(() => F.value.map((w) => w.settings.filters.length).reduce((w, L) => w + L, 0)), qe = f(() => {
      var w;
      return Ze(Ml(Lt.value || ((w = me.value.AnyQuery) == null ? void 0 : w.dataModel.name)));
    }), De = f(() => {
      var w;
      return Zt(Ml(Lt.value || ((w = me.value.AnyQuery) == null ? void 0 : w.dataModel.name)));
    }), T = f(() => oe.value.take ?? ee), P = f(() => E.value.response ? fe(E.value.response, "results") : []), te = f(() => {
      var w;
      return ((w = E.value.response) == null ? void 0 : w.total) ?? P.value.length ?? 0;
    }), ce = f(() => ye.value > 0), Le = f(() => ye.value > 0), Be = f(() => P.value.length >= T.value), Ue = f(() => P.value.length >= T.value), $e = S(), Te = S(), tt = {
      NoQuery: "No Query API was found"
    };
    t({ update: Je, search: $n, createRequestArgs: Ll, reset: In, createDone: Bt, createSave: Al, editDone: Ot, editSave: ll, forceUpdate: kn, setEdit: js, edit: U });
    function Ie(w) {
      if (w) {
        if (n.canFilter)
          return n.canFilter(w);
        const L = qe.value.find((le) => le.name.toLowerCase() == w.toLowerCase());
        if (L)
          return !os(L);
      }
      return !1;
    }
    function Ke(w) {
      I("queryString") && Xl(w);
    }
    async function mt(w) {
      ye.value += w, ye.value < 0 && (ye.value = 0);
      const L = Math.floor(te.value / T.value) * T.value;
      ye.value > L && (ye.value = L), Ke({ skip: ye.value || void 0 }), await Je();
    }
    async function ut(w, L) {
      var re, be;
      if (U.value = null, de.value = L, !w || !L)
        return;
      let le = Ut(me.value.AnyQuery, { [w]: L });
      const W = await c.api(le);
      if (W.succeeded) {
        let Pe = (re = fe(W.response, "results")) == null ? void 0 : re[0];
        Pe || console.warn(`API ${(be = me.value.AnyQuery) == null ? void 0 : be.request.name}(${w}:${L}) returned no results`), U.value = Pe;
      }
    }
    async function Xt(w, L) {
      var re;
      l("rowSelected", w, L);
      const le = (re = De.value) == null ? void 0 : re.name, W = le ? fe(w, le) : null;
      !le || !W || (Ke({ edit: W }), ut(le, W));
    }
    function Yt(w, L) {
      var W;
      if (!I("filtering"))
        return;
      let le = L.target;
      if (Ie(w) && (le == null ? void 0 : le.tagName) !== "TD") {
        let re = (W = le == null ? void 0 : le.closest("TABLE")) == null ? void 0 : W.getBoundingClientRect(), be = F.value.find((Pe) => Pe.name.toLowerCase() == w.toLowerCase());
        if (be && re) {
          let Pe = 318, lt = re.x + Pe + 10;
          Ae.value = {
            column: be,
            topLeft: {
              x: Math.max(Math.floor(L.clientX + Pe / 2), lt),
              y: re.y + 45
            }
          };
        }
      }
      l("headerSelected", w, L);
    }
    function Ts() {
      Ae.value = null;
    }
    async function Is(w) {
      var le;
      let L = (le = Ae.value) == null ? void 0 : le.column;
      L && (L.settings = w, m.setItem(el(L.name), JSON.stringify(L.settings)), await Je()), Ae.value = null;
    }
    async function Ds(w) {
      m.setItem(el(w.name), JSON.stringify(w.settings)), await Je();
    }
    async function Ps(w) {
      Ve.value = !1, oe.value = w, m.setItem(Vl(), JSON.stringify(w)), await Je();
    }
    function js(w) {
      Object.assign(U.value, w), kn();
    }
    function kn() {
      var L, le, W;
      (L = $e.value) == null || L.forceUpdate(), (le = Te.value) == null || le.forceUpdate();
      const w = We();
      (W = w == null ? void 0 : w.proxy) == null || W.$forceUpdate();
    }
    async function Je() {
      await $n(Ll());
    }
    async function Os() {
      await Je();
    }
    async function $n(w) {
      const L = me.value.AnyQuery;
      if (!L) {
        console.error(tt.NoQuery);
        return;
      }
      let le = Ut(L, w), W = zn((Pe) => {
        E.value.response = E.value.error = void 0, Ce.value = Pe;
      }), re = await c.api(le);
      W(), vl(() => E.value = re);
      let be = fe(re.response, "results") || [];
      !re.succeeded || be.label == 0;
    }
    function Ll() {
      let w = {
        include: "total",
        take: T.value
      }, L = v(oe.value.selectedColumns || n.selectedColumns);
      if (L.length > 0) {
        let W = De.value;
        W && L.includes(W.name) && (L = [W.name, ...L]);
        const re = qe.value, be = [];
        L.forEach((Pe) => {
          var nl;
          const lt = re.find((Se) => Se.name.toLowerCase() == Pe.toLowerCase());
          (nl = lt == null ? void 0 : lt.ref) != null && nl.selfId && be.push(lt.ref.selfId), fe(z, Pe) && be.push(...re.filter((Se) => {
            var ht, Et;
            return ((Et = (ht = Se.ref) == null ? void 0 : ht.selfId) == null ? void 0 : Et.toLowerCase()) == Pe.toLowerCase();
          }).map((Se) => Se.name));
        }), be.forEach((Pe) => {
          L.includes(Pe) || L.push(Pe);
        }), w.fields = L.join(",");
      }
      let le = [];
      if (F.value.forEach((W) => {
        W.settings.sort && le.push((W.settings.sort === "DESC" ? "-" : "") + W.name), W.settings.filters.forEach((re) => {
          let be = re.key.replace("%", W.name);
          w[be] = re.value;
        });
      }), n.filters && Object.keys(n.filters).forEach((W) => {
        p.value.find((be) => be.name.toLowerCase() === W.toLowerCase()) && (w[W] = n.filters[W]);
      }), I("queryString") && I("queryFilters")) {
        const W = location.search ? location.search : location.hash.includes("?") ? "?" + Fl(location.hash, "?") : "";
        let re = Ol(W);
        if (Object.keys(re).forEach((be) => {
          p.value.find((lt) => lt.name.toLowerCase() === be.toLowerCase()) && (w[be] = re[be]);
        }), typeof re.skip < "u") {
          const be = parseInt(re.skip);
          isNaN(be) || (ye.value = w.skip = be);
        }
      }
      return typeof w.skip > "u" && ye.value > 0 && (w.skip = ye.value), le.length > 0 && (w.orderBy = le.join(",")), w;
    }
    function Bs() {
      const w = Cn("csv");
      Rl(w), typeof window < "u" && window.open(w);
    }
    function Es() {
      const w = Cn("json");
      Rl(w), ze.value = !0, setTimeout(() => ze.value = !1, 3e3);
    }
    function Cn(w = "json") {
      var be;
      const L = Ll(), le = `/api/${(be = me.value.AnyQuery) == null ? void 0 : be.request.name}`, W = fo(c.baseUrl, Nt(le, { ...L, jsconfig: "edv" }));
      return W.indexOf("?") >= 0 ? gl(W, "?") + "." + w + "?" + Fl(W, "?") : W + ".json";
    }
    async function Rs() {
      F.value.forEach((w) => {
        w.settings = { filters: [] }, m.removeItem(el(w.name));
      }), oe.value = { take: ee }, m.removeItem(Vl()), await Je();
    }
    function Hs() {
      ie.value = !0, Ke({ create: null });
    }
    const Lt = f(() => Pt(n.type)), dt = f(() => {
      var w;
      return Lt.value || ((w = me.value.AnyQuery) == null ? void 0 : w.dataModel.name);
    }), Vl = () => {
      var w;
      return `${n.id}/ApiPrefs/${Lt.value || ((w = me.value.AnyQuery) == null ? void 0 : w.dataModel.name)}`;
    }, el = (w) => {
      var L;
      return `Column/${n.id}:${Lt.value || ((L = me.value.AnyQuery) == null ? void 0 : L.dataModel.name)}.${w}`;
    }, { metadataApi: _n, typeOf: Ml, apiOf: Ln, filterDefinitions: Ns } = et(), { invalidAccessMessage: Sl } = yn(), Vn = f(() => n.filterDefinitions || Ns.value), me = f(() => {
      let w = v(n.apis);
      return w.length > 0 ? Tt.from(w.map((L) => Ln(L)).filter((L) => L != null).map((L) => L)) : Tt.forType(Lt.value, _n.value);
    }), tl = (w) => `<span class="text-yellow-700">${w}</span>`, Mn = f(() => {
      if (!_n.value)
        return tl(`AppMetadata not loaded, see <a class="${ml.blue}" href="https://docs.servicestack.net/vue/use-metadata" target="_blank">useMetadata()</a>`);
      let L = v(n.apis).map((W) => Ln(W) == null ? W : null).filter((W) => W != null);
      if (L.length > 0)
        return tl(`Unknown API${L.length > 1 ? "s" : ""}: ${L.join(", ")}`);
      let le = me.value;
      return le.empty ? tl("Mising DataModel in property 'type' or AutoQuery APIs to use in property 'apis'") : le.AnyQuery ? null : tl(tt.NoQuery);
    }), Sn = f(() => me.value.AnyQuery && Sl(me.value.AnyQuery)), An = f(() => me.value.Create && Sl(me.value.Create)), Fn = f(() => me.value.AnyUpdate && Sl(me.value.AnyUpdate)), zs = f(() => ul(me.value.Create));
    f(() => ul(me.value.AnyUpdate));
    const Tn = f(() => ul(me.value.Delete));
    function Ot() {
      U.value = null, de.value = null, Ke({ edit: void 0 });
    }
    function Bt() {
      ie.value = !1, Ke({ create: void 0 });
    }
    async function ll() {
      await Je(), Ot();
    }
    async function Al() {
      await Je(), Bt();
    }
    function In() {
      var le;
      E.value = new Ye(), ae.value = new Ye(), ie.value = !1, de.value = null, U.value = null, Ve.value = !1, Ae.value = null, ye.value = n.skip, ze.value = !1, oe.value = { take: ee }, Ce.value = !1;
      const w = n.prefs || fl(m.getItem(Vl()));
      w && (oe.value = w), F.value = p.value.map((W) => ({
        name: W.name,
        type: W.type,
        meta: W,
        settings: Object.assign(
          {
            filters: []
          },
          fl(m.getItem(el(W.name)))
        )
      })), isNaN(n.skip) || (ye.value = n.skip);
      let L = (le = De.value) == null ? void 0 : le.name;
      if (I("queryString")) {
        const W = location.search ? location.search : location.hash.includes("?") ? "?" + Fl(location.hash, "?") : "";
        let re = Ol(W);
        typeof re.create < "u" ? ie.value = typeof re.create < "u" : L && (typeof re.edit == "string" || typeof re.edit == "number") && ut(L, re.edit);
      }
      n.create === !0 && (ie.value = !0), L && n.edit != null && ut(L, n.edit);
    }
    return at(async () => {
      In(), await Je();
    }), (w, L) => {
      const le = q("Alert"), W = q("EnsureAccessDialog"), re = q("AutoCreateForm"), be = q("AutoEditForm"), Pe = q("ErrorSummary"), lt = q("Loading"), Dn = q("SettingsIcons"), nl = q("DataGrid");
      return o(Mn) ? (a(), u("div", Pr, [
        ge(le, { innerHTML: o(Mn) }, null, 8, ["innerHTML"])
      ])) : o(Sn) ? (a(), u("div", jr, [
        ge(Fs, { "invalid-access": o(Sn) }, null, 8, ["invalid-access"])
      ])) : (a(), u("div", Or, [
        ie.value && o(me).Create ? (a(), u("div", Br, [
          o(An) ? (a(), X(W, {
            key: 0,
            title: `Create ${o(dt)}`,
            "invalid-access": o(An),
            "alert-class": "text-yellow-700",
            onDone: Bt
          }, null, 8, ["title", "invalid-access"])) : o(z).createform ? Z(w.$slots, "createform", {
            key: 1,
            type: o(me).Create.request.name,
            configure: e.configureField,
            done: Bt,
            save: Al
          }) : (a(), X(re, {
            key: 2,
            ref_key: "createForm",
            ref: $e,
            type: o(me).Create.request.name,
            configure: e.configureField,
            onDone: Bt,
            onSave: Al
          }, {
            header: he(() => [
              Z(w.$slots, "formheader", {
                form: "create",
                formInstance: $e.value,
                apis: o(me),
                type: o(dt)
              })
            ]),
            footer: he(() => [
              Z(w.$slots, "formfooter", {
                form: "create",
                formInstance: $e.value,
                apis: o(me),
                type: o(dt)
              })
            ]),
            _: 3
          }, 8, ["type", "configure"]))
        ])) : U.value && o(me).AnyUpdate ? (a(), u("div", Er, [
          o(Fn) ? (a(), X(W, {
            key: 0,
            title: `Update ${o(dt)}`,
            "invalid-access": o(Fn),
            "alert-class": "text-yellow-700",
            onDone: Ot
          }, null, 8, ["title", "invalid-access"])) : o(z).editform ? Z(w.$slots, "editform", {
            key: 1,
            model: U.value,
            type: o(me).AnyUpdate.request.name,
            deleteType: o(Tn) ? o(me).Delete.request.name : null,
            configure: e.configureField,
            done: Ot,
            save: ll
          }) : (a(), X(be, {
            key: 2,
            ref_key: "editForm",
            ref: Te,
            modelValue: U.value,
            "onUpdate:modelValue": L[0] || (L[0] = (Se) => U.value = Se),
            type: o(me).AnyUpdate.request.name,
            deleteType: o(Tn) ? o(me).Delete.request.name : null,
            configure: e.configureField,
            onDone: Ot,
            onSave: ll,
            onDelete: ll
          }, {
            header: he(() => [
              Z(w.$slots, "formheader", {
                form: "edit",
                formInstance: Te.value,
                apis: o(me),
                type: o(dt),
                model: U.value,
                id: de.value
              })
            ]),
            footer: he(() => [
              Z(w.$slots, "formfooter", {
                form: "edit",
                formInstance: Te.value,
                apis: o(me),
                type: o(dt),
                model: U.value,
                id: de.value
              })
            ]),
            _: 3
          }, 8, ["modelValue", "type", "deleteType", "configure"]))
        ])) : $("", !0),
        o(z).toolbar ? Z(w.$slots, "toolbar", { key: 2 }) : R("toolbar") ? (a(), u("div", Rr, [
          Ve.value ? (a(), X(xn, {
            key: 0,
            columns: o(p),
            prefs: oe.value,
            onDone: L[1] || (L[1] = (Se) => Ve.value = !1),
            onSave: Ps
          }, null, 8, ["columns", "prefs"])) : $("", !0),
          s("div", Hr, [
            s("div", Nr, [
              R("preferences") ? (a(), u("button", {
                key: 0,
                type: "button",
                class: "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400",
                title: `${o(dt)} Preferences`,
                onClick: L[2] || (L[2] = (Se) => Ve.value = !Ve.value)
              }, qr, 8, zr)) : $("", !0),
              R("pagingNav") ? (a(), u("button", {
                key: 1,
                type: "button",
                class: x(["pl-2", o(ce) ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                title: "First page",
                disabled: !o(ce),
                onClick: L[3] || (L[3] = (Se) => mt(-o(te)))
              }, Gr, 10, Qr)) : $("", !0),
              R("pagingNav") ? (a(), u("button", {
                key: 2,
                type: "button",
                class: x(["pl-2", o(Le) ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                title: "Previous page",
                disabled: !o(Le),
                onClick: L[4] || (L[4] = (Se) => mt(-o(T)))
              }, Jr, 10, Wr)) : $("", !0),
              R("pagingNav") ? (a(), u("button", {
                key: 3,
                type: "button",
                class: x(["pl-2", o(Be) ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                title: "Next page",
                disabled: !o(Be),
                onClick: L[5] || (L[5] = (Se) => mt(o(T)))
              }, eu, 10, Xr)) : $("", !0),
              R("pagingNav") ? (a(), u("button", {
                key: 4,
                type: "button",
                class: x(["pl-2", o(Ue) ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                title: "Last page",
                disabled: !o(Ue),
                onClick: L[6] || (L[6] = (Se) => mt(o(te)))
              }, nu, 10, tu)) : $("", !0)
            ]),
            R("pagingInfo") ? (a(), u("div", su, [
              s("div", ou, [
                Ce.value ? (a(), u("span", au, "Querying...")) : $("", !0),
                o(P).length ? (a(), u("span", iu, [
                  ru,
                  pe(" " + M(ye.value + 1) + " - " + M(Math.min(ye.value + o(P).length, o(te))) + " ", 1),
                  s("span", null, " of " + M(o(te)), 1)
                ])) : E.value.completed ? (a(), u("span", uu, "No Results")) : $("", !0)
              ])
            ])) : $("", !0),
            s("div", du, [
              R("refresh") ? (a(), u("div", cu, [
                s("button", {
                  type: "button",
                  onClick: Os,
                  title: "Refresh",
                  class: x(o(N))
                }, mu, 2)
              ])) : $("", !0),
              R("downloadCsv") ? (a(), u("div", vu, [
                s("button", {
                  type: "button",
                  onClick: Bs,
                  title: "Download CSV",
                  class: x(o(N))
                }, gu, 2)
              ])) : $("", !0),
              R("copyApiUrl") ? (a(), u("div", pu, [
                s("button", {
                  type: "button",
                  onClick: Es,
                  title: "Copy API URL",
                  class: x(o(N))
                }, [
                  ze.value ? (a(), u("svg", yu, wu)) : (a(), u("svg", xu, $u)),
                  Cu
                ], 2)
              ])) : $("", !0),
              o(Fe) && R("resetPreferences") ? (a(), u("div", _u, [
                s("button", {
                  type: "button",
                  onClick: Rs,
                  title: "Reset Preferences & Filters",
                  class: x(o(N))
                }, Vu, 2)
              ])) : $("", !0),
              R("filtersView") && o(xe) > 0 ? (a(), u("div", Mu, [
                s("button", {
                  type: "button",
                  onClick: L[7] || (L[7] = (Se) => ve.value = ve.value == "filters" ? null : "filters"),
                  class: x(o(N)),
                  "aria-expanded": "false"
                }, [
                  Su,
                  s("span", Au, M(o(xe)) + " " + M(o(xe) == 1 ? "Filter" : "Filters"), 1),
                  ve.value != "filters" ? (a(), u("svg", Fu, Iu)) : (a(), u("svg", Du, ju))
                ], 2)
              ])) : $("", !0),
              R("newItem") && o(me).Create && o(zs) ? (a(), u("div", Ou, [
                s("button", {
                  type: "button",
                  onClick: Hs,
                  title: o(dt),
                  class: x(o(N))
                }, [
                  Eu,
                  s("span", Ru, "New " + M(o(dt)), 1)
                ], 10, Bu)
              ])) : $("", !0),
              o(z).toolbarbuttons ? Z(w.$slots, "toolbarbuttons", {
                key: 6,
                toolbarButtonClass: o(N)
              }) : $("", !0)
            ])
          ])
        ])) : $("", !0),
        ve.value == "filters" ? (a(), X(wn, {
          key: 4,
          class: "border-y border-gray-200 dark:border-gray-800 py-8 my-2",
          definitions: o(Vn),
          columns: F.value,
          onDone: L[8] || (L[8] = (Se) => ve.value = null),
          onChange: Ds
        }, null, 8, ["definitions", "columns"])) : $("", !0),
        ae.value.error ?? E.value.error ? (a(), X(Pe, {
          key: 5,
          status: ae.value.error ?? E.value.error
        }, null, 8, ["status"])) : Ce.value ? (a(), X(lt, {
          key: 6,
          class: "p-2"
        })) : $("", !0),
        Ae.value ? (a(), u("div", Hu, [
          ge(bn, {
            definitions: o(Vn),
            column: Ae.value.column,
            "top-left": Ae.value.topLeft,
            onDone: Ts,
            onSave: Is
          }, null, 8, ["definitions", "column", "top-left"])
        ])) : $("", !0),
        o(P).length ? (a(), X(nl, {
          key: 8,
          id: e.id,
          items: o(P),
          type: e.type,
          "selected-columns": o(G),
          class: "mt-1",
          onFiltersChanged: Je,
          tableStyle: o(Q),
          gridClass: o(D),
          grid2Class: o(B),
          grid3Class: o(H),
          grid4Class: o(V),
          tableClass: o(A),
          theadClass: o(j),
          theadRowClass: o(J),
          theadCellClass: o(C),
          tbodyClass: e.tbodyClass,
          rowClass: K,
          onRowSelected: Xt,
          rowStyle: e.rowStyle,
          headerTitle: e.headerTitle,
          headerTitles: e.headerTitles,
          visibleFrom: e.visibleFrom,
          onHeaderSelected: Yt
        }, Zl({
          header: he(({ column: Se, label: ht }) => {
            var Et;
            return [
              I("filtering") && Ie(Se) ? (a(), u("div", Nu, [
                s("span", zu, M(ht), 1),
                ge(Dn, {
                  column: F.value.find((Us) => Us.name.toLowerCase() === Se.toLowerCase()),
                  "is-open": ((Et = Ae.value) == null ? void 0 : Et.column.name) === Se
                }, null, 8, ["column", "is-open"])
              ])) : (a(), u("div", Uu, [
                s("span", qu, M(ht), 1)
              ]))
            ];
          }),
          _: 2
        }, [
          _e(Object.keys(o(z)), (Se) => ({
            name: Se,
            fn: he((ht) => [
              Z(w.$slots, Se, St(dl(ht)))
            ])
          }))
        ]), 1032, ["id", "items", "type", "selected-columns", "tableStyle", "gridClass", "grid2Class", "grid3Class", "grid4Class", "tableClass", "theadClass", "theadRowClass", "theadCellClass", "tbodyClass", "rowStyle", "headerTitle", "headerTitles", "visibleFrom"])) : $("", !0)
      ]));
    };
  }
}), Ku = { class: "flex" }, Gu = {
  key: 0,
  class: "w-4 h-4",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Wu = /* @__PURE__ */ s("g", { fill: "none" }, [
  /* @__PURE__ */ s("path", {
    d: "M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2.586a1 1 0 0 1-.293.707l-6.414 6.414a1 1 0 0 0-.293.707V17l-4 4v-6.586a1 1 0 0 0-.293-.707L3.293 7.293A1 1 0 0 1 3 6.586V4z",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  })
], -1), Zu = [
  Wu
], Ju = /* @__PURE__ */ s("path", {
  d: "M505.5 658.7c3.2 4.4 9.7 4.4 12.9 0l178-246c3.8-5.3 0-12.7-6.5-12.7H643c-10.2 0-19.9 4.9-25.9 13.2L512 558.6L406.8 413.2c-6-8.3-15.6-13.2-25.9-13.2H334c-6.5 0-10.3 7.4-6.5 12.7l178 246z",
  fill: "currentColor"
}, null, -1), Xu = /* @__PURE__ */ s("path", {
  d: "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z",
  fill: "currentColor"
}, null, -1), Yu = [
  Ju,
  Xu
], ed = {
  key: 2,
  class: "w-4 h-4",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, td = /* @__PURE__ */ s("g", { fill: "none" }, [
  /* @__PURE__ */ s("path", {
    d: "M8.998 4.71L6.354 7.354a.5.5 0 1 1-.708-.707L9.115 3.18A.499.499 0 0 1 9.498 3H9.5a.5.5 0 0 1 .354.147l.01.01l3.49 3.49a.5.5 0 1 1-.707.707l-2.65-2.649V16.5a.5.5 0 0 1-1 0V4.71z",
    fill: "currentColor"
  })
], -1), ld = [
  td
], nd = {
  key: 3,
  class: "w-4 h-4",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, sd = /* @__PURE__ */ s("g", { fill: "none" }, [
  /* @__PURE__ */ s("path", {
    d: "M10.002 15.29l2.645-2.644a.5.5 0 0 1 .707.707L9.886 16.82a.5.5 0 0 1-.384.179h-.001a.5.5 0 0 1-.354-.147l-.01-.01l-3.49-3.49a.5.5 0 1 1 .707-.707l2.648 2.649V3.5a.5.5 0 0 1 1 0v11.79z",
    fill: "currentColor"
  })
], -1), od = [
  sd
], ad = /* @__PURE__ */ se({
  __name: "SettingsIcons",
  props: {
    column: null,
    isOpen: { type: Boolean }
  },
  setup(e) {
    return (t, l) => {
      var n, i, r, d, c, m, v;
      return a(), u("div", Ku, [
        (r = (i = (n = e.column) == null ? void 0 : n.settings) == null ? void 0 : i.filters) != null && r.length ? (a(), u("svg", Gu, Zu)) : (a(), u("svg", {
          key: 1,
          class: x(["w-4 h-4 transition-transform", e.isOpen ? "rotate-180" : ""]),
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 1024 1024"
        }, Yu, 2)),
        ((c = (d = e.column) == null ? void 0 : d.settings) == null ? void 0 : c.sort) === "ASC" ? (a(), u("svg", ed, ld)) : ((v = (m = e.column) == null ? void 0 : m.settings) == null ? void 0 : v.sort) === "DESC" ? (a(), u("svg", nd, od)) : $("", !0)
      ]);
    };
  }
}), id = /* @__PURE__ */ se({
  __name: "EnsureAccessDialog",
  props: {
    title: null,
    subtitle: null,
    invalidAccess: null,
    alertClass: null
  },
  emits: ["done"],
  setup(e) {
    return (t, l) => {
      const n = q("EnsureAccess"), i = q("SlideOver");
      return e.invalidAccess ? (a(), X(i, {
        key: 0,
        title: e.title,
        onDone: l[0] || (l[0] = (r) => t.$emit("done")),
        "content-class": "relative flex-1"
      }, Zl({
        default: he(() => [
          ge(n, {
            alertClass: e.alertClass,
            invalidAccess: e.invalidAccess
          }, null, 8, ["alertClass", "invalidAccess"])
        ]),
        _: 2
      }, [
        e.subtitle ? {
          name: "subtitle",
          fn: he(() => [
            pe(M(e.subtitle), 1)
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["title"])) : $("", !0);
    };
  }
}), rd = ["for"], ud = { class: "mt-1 relative rounded-md shadow-sm" }, dd = ["type", "name", "id", "placeholder", "value", "aria-invalid", "aria-describedby"], cd = {
  key: 0,
  class: "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
}, fd = /* @__PURE__ */ s("svg", {
  class: "h-5 w-5 text-red-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ s("path", {
    "fill-rule": "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",
    "clip-rule": "evenodd"
  })
], -1), md = [
  fd
], vd = ["id"], hd = ["id"], gd = {
  inheritAttrs: !1
}, pd = /* @__PURE__ */ se({
  ...gd,
  __name: "TextInput",
  props: {
    status: null,
    id: null,
    type: null,
    inputClass: null,
    label: null,
    labelClass: null,
    help: null,
    placeholder: null,
    modelValue: null
  },
  setup(e, { expose: t }) {
    const l = e, n = (g) => g.value;
    t({
      focus: r
    });
    const i = S();
    function r() {
      var g;
      (g = i.value) == null || g.focus();
    }
    const d = f(() => l.type || "text"), c = f(() => l.label ?? Oe(nt(l.id))), m = f(() => l.placeholder ?? c.value);
    let v = He("ApiState", void 0);
    const h = f(() => vt.call({ responseStatus: l.status ?? (v == null ? void 0 : v.error.value) }, l.id)), y = f(() => [ft.base, h.value ? ft.invalid : ft.valid, l.inputClass]);
    return (g, b) => (a(), u("div", {
      class: x([g.$attrs.class])
    }, [
      o(c) ? (a(), u("label", {
        key: 0,
        for: e.id,
        class: x(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${e.labelClass ?? ""}`)
      }, M(o(c)), 11, rd)) : $("", !0),
      s("div", ud, [
        s("input", Me({
          ref_key: "txtInput",
          ref: i,
          type: o(d),
          name: e.id,
          id: e.id,
          class: o(y),
          placeholder: o(m),
          value: e.modelValue,
          onInput: b[0] || (b[0] = (k) => g.$emit("update:modelValue", n(k.target))),
          "aria-invalid": o(h) != null,
          "aria-describedby": `${e.id}-error`,
          step: "any"
        }, o(it)(g.$attrs, ["class"])), null, 16, dd),
        o(h) ? (a(), u("div", cd, md)) : $("", !0)
      ]),
      o(h) ? (a(), u("p", {
        key: 1,
        class: "mt-2 text-sm text-red-500",
        id: `${e.id}-error`
      }, M(o(h)), 9, vd)) : e.help ? (a(), u("p", {
        key: 2,
        class: "mt-2 text-sm text-gray-500",
        id: `${e.id}-description`
      }, M(e.help), 9, hd)) : $("", !0)
    ], 2));
  }
}), yd = ["for"], bd = { class: "mt-1 relative rounded-md shadow-sm" }, wd = ["name", "id", "placeholder", "aria-invalid", "aria-describedby"], xd = ["id"], kd = ["id"], $d = {
  inheritAttrs: !1
}, Cd = /* @__PURE__ */ se({
  ...$d,
  __name: "TextareaInput",
  props: {
    status: null,
    id: null,
    inputClass: null,
    label: null,
    labelClass: null,
    help: null,
    placeholder: null,
    modelValue: null
  },
  setup(e) {
    const t = e, l = (m) => m.value, n = f(() => t.label ?? Oe(nt(t.id))), i = f(() => t.placeholder ?? n.value);
    let r = He("ApiState", void 0);
    const d = f(() => vt.call({ responseStatus: t.status ?? (r == null ? void 0 : r.error.value) }, t.id)), c = f(() => ["shadow-sm " + ft.base, d.value ? "text-red-900 focus:ring-red-500 focus:border-red-500 border-red-300" : "text-gray-900 " + ft.valid, t.inputClass]);
    return (m, v) => (a(), u("div", {
      class: x([m.$attrs.class])
    }, [
      o(n) ? (a(), u("label", {
        key: 0,
        for: e.id,
        class: x(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${e.labelClass ?? ""}`)
      }, M(o(n)), 11, yd)) : $("", !0),
      s("div", bd, [
        s("textarea", Me({
          name: e.id,
          id: e.id,
          class: o(c),
          placeholder: o(i),
          onInput: v[0] || (v[0] = (h) => m.$emit("update:modelValue", l(h.target))),
          "aria-invalid": o(d) != null,
          "aria-describedby": `${e.id}-error`
        }, o(it)(m.$attrs, ["class"])), M(e.modelValue), 17, wd)
      ]),
      o(d) ? (a(), u("p", {
        key: 1,
        class: "mt-2 text-sm text-red-500",
        id: `${e.id}-error`
      }, M(o(d)), 9, xd)) : e.help ? (a(), u("p", {
        key: 2,
        class: "mt-2 text-sm text-gray-500",
        id: `${e.id}-description`
      }, M(e.help), 9, kd)) : $("", !0)
    ], 2));
  }
}), _d = ["for"], Ld = ["id", "name", "value", "aria-invalid", "aria-describedby"], Vd = ["value"], Md = ["id"], Sd = {
  inheritAttrs: !1
}, Ad = /* @__PURE__ */ se({
  ...Sd,
  __name: "SelectInput",
  props: {
    status: null,
    id: null,
    modelValue: null,
    inputClass: null,
    label: null,
    labelClass: null,
    options: null,
    values: null,
    entries: null
  },
  setup(e) {
    const t = e, l = (c) => c.value, n = f(() => t.label ?? Oe(nt(t.id)));
    let i = He("ApiState", void 0);
    const r = f(() => vt.call({ responseStatus: t.status ?? (i == null ? void 0 : i.error.value) }, t.id)), d = f(() => t.entries || (t.values ? t.values.map((c) => ({ key: c, value: c })) : t.options ? Object.keys(t.options).map((c) => ({ key: c, value: t.options[c] })) : []));
    return (c, m) => (a(), u("div", {
      class: x([c.$attrs.class])
    }, [
      o(n) ? (a(), u("label", {
        key: 0,
        for: e.id,
        class: x(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${e.labelClass ?? ""}`)
      }, M(o(n)), 11, _d)) : $("", !0),
      s("select", Me({
        id: e.id,
        name: e.id,
        class: [
          "mt-1 block w-full pl-3 pr-10 py-2 text-base focus:outline-none sm:text-sm rounded-md dark:text-white dark:bg-gray-900 dark:border-gray-600",
          o(r) ? "border-red-300 text-red-900 focus:ring-red-500 focus:border-red-500" : "border-gray-300 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500",
          e.inputClass
        ],
        value: e.modelValue,
        onInput: m[0] || (m[0] = (v) => c.$emit("update:modelValue", l(v.target))),
        "aria-invalid": o(r) != null,
        "aria-describedby": `${e.id}-error`
      }, o(it)(c.$attrs, ["class"])), [
        (a(!0), u(ke, null, _e(o(d), (v) => (a(), u("option", {
          value: v.key
        }, M(v.value), 9, Vd))), 256))
      ], 16, Ld),
      o(r) ? (a(), u("p", {
        key: 1,
        class: "mt-2 text-sm text-red-500",
        id: `${e.id}-error`
      }, M(o(r)), 9, Md)) : $("", !0)
    ], 2));
  }
}), Fd = { class: "flex items-center h-5" }, Td = ["id", "name", "checked"], Id = { class: "ml-3 text-sm" }, Dd = ["for"], Pd = {
  key: 0,
  class: "mt-2 text-sm text-red-500",
  id: "`${id}-error`"
}, jd = {
  key: 1,
  class: "mt-2 text-sm text-gray-500",
  id: "`${id}-description`"
}, Od = {
  inheritAttrs: !1
}, Bd = /* @__PURE__ */ se({
  ...Od,
  __name: "CheckboxInput",
  props: {
    modelValue: { type: Boolean },
    status: null,
    id: null,
    inputClass: null,
    label: null,
    labelClass: null,
    help: null
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const l = e, n = f(() => l.label ?? Oe(nt(l.id)));
    let i = He("ApiState", void 0);
    const r = f(() => vt.call({ responseStatus: l.status ?? (i == null ? void 0 : i.error.value) }, l.id));
    return (d, c) => (a(), u("div", {
      class: x(["relative flex items-start", d.$attrs.class])
    }, [
      s("div", Fd, [
        s("input", Me({
          id: e.id,
          name: e.id,
          type: "checkbox",
          checked: e.modelValue,
          onInput: c[0] || (c[0] = (m) => d.$emit("update:modelValue", m.target.checked)),
          class: ["focus:ring-indigo-500 h-4 w-4 text-indigo-600 rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800", e.inputClass]
        }, o(it)(d.$attrs, ["class"])), null, 16, Td)
      ]),
      s("div", Id, [
        s("label", {
          for: e.id,
          class: x(`font-medium text-gray-700 dark:text-gray-300 ${e.labelClass ?? ""}`)
        }, M(o(n)), 11, Dd),
        o(r) ? (a(), u("p", Pd, M(o(r)), 1)) : e.help ? (a(), u("p", jd, M(e.help), 1)) : $("", !0)
      ])
    ], 2));
  }
}), Ed = ["id"], Rd = ["for"], Hd = { class: "mt-1 relative rounded-md shadow-sm" }, Nd = ["id", "name", "value"], zd = ["onClick"], Ud = { class: "flex flex-wrap pb-1.5" }, qd = { class: "pt-1.5 pl-1" }, Qd = { class: "inline-flex rounded-full items-center py-0.5 pl-2.5 pr-1 text-sm font-medium bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-300" }, Kd = ["onClick"], Gd = /* @__PURE__ */ s("svg", {
  class: "h-2 w-2",
  stroke: "currentColor",
  fill: "none",
  viewBox: "0 0 8 8"
}, [
  /* @__PURE__ */ s("path", {
    "stroke-linecap": "round",
    "stroke-width": "1.5",
    d: "M1 1l6 6m0-6L1 7"
  })
], -1), Wd = [
  Gd
], Zd = { class: "pt-1.5 pl-1 shrink" }, Jd = ["type", "name", "id", "aria-invalid", "aria-describedby", "onPaste"], Xd = ["id"], Yd = ["onMouseover", "onClick"], ec = { class: "block truncate" }, tc = {
  key: 1,
  class: "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
}, lc = /* @__PURE__ */ s("svg", {
  class: "h-5 w-5 text-red-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ s("path", {
    "fill-rule": "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",
    "clip-rule": "evenodd"
  })
], -1), nc = [
  lc
], sc = ["id"], oc = ["id"], ac = {
  inheritAttrs: !1
}, ic = /* @__PURE__ */ se({
  ...ac,
  __name: "TagInput",
  props: {
    status: null,
    id: null,
    type: null,
    inputClass: null,
    label: null,
    labelClass: null,
    help: null,
    modelValue: { default: () => [] },
    delimiters: { default: () => [","] },
    allowableValues: null,
    string: { type: Boolean },
    converter: null
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const l = e;
    function n(p) {
      return l.converter ? l.converter(p) : p;
    }
    const i = f(() => Ee(n(l.modelValue), (p) => typeof p == "string" ? p.trim().length == 0 ? [] : p.split(",") : p) || []), r = S(), d = S(!1), c = f(() => !l.allowableValues || l.allowableValues.length == 0 ? [] : l.allowableValues.filter((p) => !i.value.includes(p) && p.toLowerCase().includes(h.value.toLowerCase())));
    function m(p) {
      r.value = p;
    }
    const v = S(null), h = S(""), y = f(() => l.type || "text"), g = f(() => l.label ?? Oe(nt(l.id)));
    let b = He("ApiState", void 0);
    const k = f(() => vt.call({ responseStatus: l.status ?? (b == null ? void 0 : b.error.value) }, l.id)), I = f(() => [
      "w-full cursor-text flex flex-wrap sm:text-sm rounded-md dark:text-white dark:bg-gray-900 border focus-within:border-transparent focus-within:ring-1 focus-within:outline-none",
      k.value ? "pr-10 border-red-300 text-red-900 placeholder-red-300 focus-within:outline-none focus-within:ring-red-500 focus-within:border-red-500" : "shadow-sm border-gray-300 dark:border-gray-600 focus-within:ring-indigo-500 focus-within:border-indigo-500",
      l.inputClass
    ]), R = (p) => A(i.value.filter((G) => G != p));
    function Q(p) {
      var G;
      document.activeElement === p.target && ((G = v.value) == null || G.focus());
    }
    const D = S();
    function B() {
      d.value = !0, D.value = !0;
    }
    function H() {
      B();
    }
    function V() {
      Y(J()), D.value = !1, setTimeout(() => {
        D.value || (d.value = !1);
      }, 200);
    }
    function A(p) {
      const G = l.string ? p.join(",") : p;
      t("update:modelValue", G);
    }
    function j(p) {
      if (p.key == "Backspace" && h.value.length == 0 && i.value.length > 0 && R(i.value[i.value.length - 1]), !(!l.allowableValues || l.allowableValues.length == 0))
        if (p.code == "Escape" || p.code == "Tab")
          d.value = !1;
        else if (p.code == "Home")
          r.value = c.value[0], K();
        else if (p.code == "End")
          r.value = c.value[c.value.length - 1], K();
        else if (p.code == "ArrowDown") {
          if (d.value = !0, !r.value)
            r.value = c.value[0];
          else {
            const G = c.value.indexOf(r.value);
            r.value = G + 1 < c.value.length ? c.value[G + 1] : c.value[0];
          }
          z();
        } else if (p.code == "ArrowUp") {
          if (!r.value)
            r.value = c.value[c.value.length - 1];
          else {
            const G = c.value.indexOf(r.value);
            r.value = G - 1 >= 0 ? c.value[G - 1] : c.value[c.value.length - 1];
          }
          z();
        } else
          p.code == "Enter" ? r.value && d.value ? (Y(r.value), p.preventDefault()) : d.value = !1 : d.value = c.value.length > 0;
    }
    function J() {
      if (h.value.length == 0)
        return "";
      let p = mo(h.value.trim(), ",");
      return p[0] == "," && (p = p.substring(1)), p = p.trim(), p.length == 0 && d.value && c.value.length > 0 ? r.value : p;
    }
    function C(p) {
      const G = J();
      if (G.length > 0) {
        const F = l.delimiters.some((ae) => ae == p.key);
        if (F && p.preventDefault(), p.key == "Enter" || p.key == "NumpadEnter" || p.key.length == 1 && F) {
          Y(G);
          return;
        }
      }
    }
    const N = { behavior: "smooth", block: "nearest", inline: "nearest", scrollMode: "if-needed" };
    function K() {
      setTimeout(() => {
        let p = cl(`#${l.id}-tag li.active`);
        p && p.scrollIntoView(N);
      }, 0);
    }
    function z() {
      setTimeout(() => {
        let p = cl(`#${l.id}-tag li.active`);
        p && ("scrollIntoViewIfNeeded" in p ? p.scrollIntoViewIfNeeded(N) : p.scrollIntoView(N));
      }, 0);
    }
    function Y(p) {
      if (p.length === 0)
        return;
      const G = Array.from(i.value);
      G.indexOf(p) == -1 && G.push(p), A(G), h.value = "", d.value = !1;
    }
    function _(p) {
      var F;
      const G = (F = p.clipboardData) == null ? void 0 : F.getData("Text");
      O(G);
    }
    function O(p) {
      if (!p)
        return;
      const G = new RegExp(`\\n|\\t|${l.delimiters.join("|")}`), F = Array.from(i.value);
      p.split(G).map((ae) => ae.trim()).forEach((ae) => {
        F.indexOf(ae) == -1 && F.push(ae);
      }), A(F), h.value = "";
    }
    return (p, G) => (a(), u("div", {
      class: x([p.$attrs.class]),
      id: `${e.id}-tag`,
      onmousemove: "cancelBlur=true"
    }, [
      o(g) ? (a(), u("label", {
        key: 0,
        for: e.id,
        class: x(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${e.labelClass ?? ""}`)
      }, M(o(g)), 11, Rd)) : $("", !0),
      s("div", Hd, [
        s("input", {
          type: "hidden",
          id: e.id,
          name: e.id,
          value: o(i).join(",")
        }, null, 8, Nd),
        s("button", {
          class: x(o(I)),
          onClick: Ne(Q, ["prevent"]),
          onFocus: G[2] || (G[2] = (F) => d.value = !0),
          tabindex: "-1"
        }, [
          s("div", Ud, [
            (a(!0), u(ke, null, _e(o(i), (F) => (a(), u("div", qd, [
              s("span", Qd, [
                pe(M(F) + " ", 1),
                s("button", {
                  type: "button",
                  onClick: (E) => R(F),
                  class: "flex-shrink-0 ml-1 h-4 w-4 rounded-full inline-flex items-center justify-center text-indigo-400 dark:text-indigo-500 hover:bg-indigo-200 dark:hover:bg-indigo-800 hover:text-indigo-500 dark:hover:text-indigo-400 focus:outline-none focus:bg-indigo-500 focus:text-white dark:focus:text-black"
                }, Wd, 8, Kd)
              ])
            ]))), 256)),
            s("div", Zd, [
              xt(s("input", Me({
                ref_key: "txtInput",
                ref: v,
                type: o(y),
                role: "combobox",
                "aria-controls": "options",
                "aria-expanded": "false",
                autocomplete: "off",
                spellcheck: "false",
                name: `${e.id}-txt`,
                id: `${e.id}-txt`,
                class: "p-0 dark:bg-transparent rounded-md border-none focus:!border-none focus:!outline-none",
                style: `box-shadow:none !important;width:${h.value.length + 1}ch`,
                "onUpdate:modelValue": G[0] || (G[0] = (F) => h.value = F),
                "aria-invalid": o(k) != null,
                "aria-describedby": `${e.id}-error`,
                onKeydown: j,
                onKeypress: C,
                onPaste: Ne(_, ["prevent", "stop"]),
                onFocus: H,
                onBlur: V,
                onClick: G[1] || (G[1] = (F) => d.value = !0)
              }, o(it)(p.$attrs, ["class", "required"])), null, 16, Jd), [
                [Zs, h.value]
              ])
            ])
          ])
        ], 42, zd),
        d.value && o(c).length ? (a(), u("ul", {
          key: 0,
          class: "absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-black py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",
          onKeydown: j,
          id: `${e.id}-options`,
          role: "listbox"
        }, [
          (a(!0), u(ke, null, _e(o(c), (F) => (a(), u("li", {
            class: x([F === r.value ? "active bg-indigo-600 text-white" : "text-gray-900 dark:text-gray-100", "relative cursor-default select-none py-2 pl-3 pr-9"]),
            onMouseover: (E) => m(F),
            onClick: (E) => Y(F),
            role: "option",
            tabindex: "-1"
          }, [
            s("span", ec, M(F), 1)
          ], 42, Yd))), 256))
        ], 40, Xd)) : $("", !0),
        o(k) ? (a(), u("div", tc, nc)) : $("", !0)
      ]),
      o(k) ? (a(), u("p", {
        key: 1,
        class: "mt-2 text-sm text-red-500",
        id: `${e.id}-error`
      }, M(o(k)), 9, sc)) : e.help ? (a(), u("p", {
        key: 2,
        class: "mt-2 text-sm text-gray-500",
        id: `${e.id}-description`
      }, M(e.help), 9, oc)) : $("", !0)
    ], 10, Ed));
  }
}), rc = { class: "relative flex-grow mr-2 sm:mr-4" }, uc = ["for"], dc = { class: "block mt-2" }, cc = { class: "sr-only" }, fc = ["multiple", "name", "id", "placeholder", "aria-invalid", "aria-describedby"], mc = {
  key: 0,
  class: "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
}, vc = /* @__PURE__ */ s("svg", {
  class: "h-5 w-5 text-red-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ s("path", {
    "fill-rule": "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",
    "clip-rule": "evenodd"
  })
], -1), hc = [
  vc
], gc = ["id"], pc = ["id"], yc = { key: 0 }, bc = ["title"], wc = ["alt", "src"], xc = {
  key: 1,
  class: "mt-3"
}, kc = { class: "w-full" }, $c = { class: "pr-6 align-bottom pb-2" }, Cc = ["title"], _c = ["src", "onError"], Lc = ["href"], Vc = {
  key: 1,
  class: "overflow-hidden"
}, Mc = { class: "align-top pb-2 whitespace-nowrap" }, Sc = {
  key: 0,
  class: "text-gray-500 dark:text-gray-400 text-sm bg-white dark:bg-black"
}, Ac = /* @__PURE__ */ se({
  __name: "FileInput",
  props: {
    multiple: { type: Boolean },
    status: null,
    id: null,
    inputClass: null,
    label: null,
    labelClass: null,
    help: null,
    placeholder: null,
    modelValue: null,
    values: null,
    files: null
  },
  setup(e) {
    var H;
    const t = e, l = S(null), { assetsPathResolver: n, fallbackPathResolver: i } = _t(), r = {}, d = S(), c = S(((H = t.files) == null ? void 0 : H.map(m)) || []);
    function m(V) {
      return V.filePath = n(V.filePath), V;
    }
    t.values && t.values.length > 0 && (c.value = t.values.map((V) => {
      let A = V.replace(/\\/g, "/");
      return { fileName: vo(kt(A, "/"), "."), filePath: A, contentType: Nl(A) };
    }).map(m));
    const v = f(() => t.label ?? Oe(nt(t.id))), h = f(() => t.placeholder ?? v.value);
    let y = He("ApiState", void 0);
    const g = f(() => vt.call({ responseStatus: t.status ?? (y == null ? void 0 : y.error.value) }, t.id)), b = f(() => [
      "block w-full sm:text-sm rounded-md dark:text-white dark:bg-gray-900 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 dark:file:bg-violet-900 file:text-violet-700 dark:file:text-violet-200 hover:file:bg-violet-100 dark:hover:file:bg-violet-800",
      g.value ? "pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500" : "text-slate-500 dark:text-slate-400",
      t.inputClass
    ]), k = (V) => {
      let A = V.target;
      d.value = "", c.value = Array.from(A.files || []).map((j) => ({
        fileName: j.name,
        filePath: nn(j),
        contentLength: j.size,
        contentType: j.type || Nl(j.name)
      }));
    }, I = () => {
      var V;
      return (V = l.value) == null ? void 0 : V.click();
    }, R = (V) => V == null ? !1 : V.startsWith("data:") || V.startsWith("blob:"), Q = f(() => {
      if (c.value.length > 0)
        return c.value[0].filePath;
      let V = typeof t.modelValue == "string" ? t.modelValue : t.values && t.values[0];
      return V && pt(n(V)) || null;
    }), D = (V) => !V || V.startsWith("data:") || V.endsWith(".svg") ? "" : "rounded-full object-cover";
    function B(V) {
      d.value = i(Q.value);
    }
    return Kt(es), (V, A) => (a(), u("div", {
      class: x(["flex", e.multiple ? "flex-col" : "justify-between"])
    }, [
      s("div", rc, [
        o(v) ? (a(), u("label", {
          key: 0,
          for: e.id,
          class: x(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${e.labelClass ?? ""}`)
        }, M(o(v)), 11, uc)) : $("", !0),
        s("div", dc, [
          s("span", cc, M(e.help ?? o(v)), 1),
          s("input", Me({
            ref_key: "input",
            ref: l,
            type: "file",
            multiple: e.multiple,
            name: e.id,
            id: e.id,
            class: o(b),
            placeholder: o(h),
            "aria-invalid": o(g) != null,
            "aria-describedby": `${e.id}-error`
          }, V.$attrs, { onChange: k }), null, 16, fc),
          o(g) ? (a(), u("div", mc, hc)) : $("", !0)
        ]),
        o(g) ? (a(), u("p", {
          key: 1,
          class: "mt-2 text-sm text-red-500",
          id: `${e.id}-error`
        }, M(o(g)), 9, gc)) : e.help ? (a(), u("p", {
          key: 2,
          class: "mt-2 text-sm text-gray-500",
          id: `${e.id}-description`
        }, M(e.help), 9, pc)) : $("", !0)
      ]),
      e.multiple ? (a(), u("div", xc, [
        s("table", kc, [
          (a(!0), u(ke, null, _e(c.value, (j) => (a(), u("tr", null, [
            s("td", $c, [
              s("div", {
                class: "flex w-full",
                title: R(j.filePath) ? "" : j.filePath
              }, [
                s("img", {
                  src: r[o(pt)(j.filePath)] || o(n)(o(pt)(j.filePath)),
                  class: x(["mr-2 h-8 w-8", D(j.filePath)]),
                  onError: (J) => r[o(pt)(j.filePath)] = o(i)(o(pt)(j.filePath))
                }, null, 42, _c),
                R(j.filePath) ? (a(), u("span", Vc, M(j.fileName), 1)) : (a(), u("a", {
                  key: 0,
                  href: o(n)(j.filePath || ""),
                  target: "_blank",
                  class: "overflow-hidden"
                }, M(j.fileName), 9, Lc))
              ], 8, Cc)
            ]),
            s("td", Mc, [
              j.contentLength && j.contentLength > 0 ? (a(), u("span", Sc, M(o(on)(j.contentLength)), 1)) : $("", !0)
            ])
          ]))), 256))
        ])
      ])) : (a(), u("div", yc, [
        o(Q) ? (a(), u("div", {
          key: 0,
          class: "shrink-0 cursor-pointer",
          title: R(o(Q)) ? "" : o(Q)
        }, [
          s("img", {
            onClick: I,
            class: x(["h-16 w-16", D(o(Q))]),
            alt: `Current ${o(v) ?? ""}`,
            src: d.value || o(n)(o(Q)),
            onError: B
          }, null, 42, wc)
        ], 8, bc)) : $("", !0)
      ]))
    ], 2));
  }
}), Fc = ["id"], Tc = ["for"], Ic = { class: "relative mt-1" }, Dc = ["id", "placeholder", "required"], Pc = /* @__PURE__ */ s("svg", {
  class: "h-5 w-5 text-gray-400 dark:text-gray-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ s("path", {
    "fill-rule": "evenodd",
    d: "M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z",
    "clip-rule": "evenodd"
  })
], -1), jc = [
  Pc
], Oc = ["id"], Bc = ["onMouseover", "onClick"], Ec = /* @__PURE__ */ s("svg", {
  class: "h-5 w-5",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ s("path", {
    "fill-rule": "evenodd",
    d: "M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z",
    "clip-rule": "evenodd"
  })
], -1), Rc = [
  Ec
], Hc = {
  key: 2,
  class: "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none",
  tabindex: "-1"
}, Nc = /* @__PURE__ */ s("svg", {
  class: "h-5 w-5 text-red-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ s("path", {
    "fill-rule": "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",
    "clip-rule": "evenodd"
  })
], -1), zc = [
  Nc
], Uc = ["id"], qc = ["id"], Qc = /* @__PURE__ */ se({
  __name: "Autocomplete",
  props: {
    status: null,
    id: null,
    type: null,
    label: null,
    help: null,
    placeholder: null,
    multiple: { type: Boolean, default: !1 },
    required: { type: Boolean },
    options: { default: () => [] },
    modelValue: null,
    match: null,
    viewCount: { default: 100 },
    pageSize: { default: 8 }
  },
  emits: ["update:modelValue"],
  setup(e, { expose: t, emit: l }) {
    const n = e, i = S(!1);
    t({ toggle: N });
    function r(_) {
      return Array.isArray(n.modelValue) && n.modelValue.indexOf(_) >= 0;
    }
    const d = f(() => n.label ?? Oe(nt(n.id)));
    let c = He("ApiState", void 0);
    const m = f(() => vt.call({ responseStatus: n.status ?? (c == null ? void 0 : c.error.value) }, n.id)), v = f(() => [ft.base, m.value ? ft.invalid : ft.valid]), h = S(null), y = S(""), g = S(null), b = S(n.viewCount), k = S([]), I = f(() => y.value ? n.options.filter((O) => n.match(O, y.value)).slice(0, b.value) : n.options), R = ["Tab", "Escape", "ArrowDown", "ArrowUp", "Enter", "PageUp", "PageDown", "Home", "End"];
    function Q(_) {
      g.value = _, k.value.indexOf(_) > Math.floor(b.value * 0.9) && (b.value += n.viewCount, Y());
    }
    const D = [",", `
`, "	"];
    function B(_) {
      var p;
      const O = (p = _.clipboardData) == null ? void 0 : p.getData("Text");
      H(O);
    }
    function H(_) {
      if (!_)
        return;
      const O = D.some((p) => _.includes(p));
      if (!n.multiple || !O) {
        const p = n.options.filter((G) => n.match(G, _));
        p.length == 1 && (z(p[0]), i.value = !1, al());
      } else if (O) {
        const p = new RegExp("\\r|\\n|\\t|,"), F = _.split(p).filter((E) => E.trim()).map((E) => n.options.find((ae) => n.match(ae, E))).filter((E) => !!E);
        if (F.length > 0) {
          y.value = "", i.value = !1, g.value = null;
          let E = Array.from(n.modelValue || []);
          F.forEach((ae) => {
            r(ae) ? E = E.filter((ve) => ve != ae) : E.push(ae);
          }), l("update:modelValue", E), al();
        }
      }
    }
    function V(_) {
      R.indexOf(_.code) || K();
    }
    function A(_) {
      if (!(_.shiftKey || _.ctrlKey || _.altKey)) {
        if (!i.value) {
          _.code == "ArrowDown" && (i.value = !0, g.value = k.value[0]);
          return;
        }
        if (_.code == "Escape" || _.code == "Tab")
          i.value = !1;
        else if (_.code == "Home")
          g.value = k.value[0], J();
        else if (_.code == "End")
          g.value = k.value[k.value.length - 1], J();
        else if (_.code == "ArrowDown") {
          if (!g.value)
            g.value = k.value[0];
          else {
            const O = k.value.indexOf(g.value);
            g.value = O + 1 < k.value.length ? k.value[O + 1] : k.value[0];
          }
          C();
        } else if (_.code == "ArrowUp") {
          if (!g.value)
            g.value = k.value[k.value.length - 1];
          else {
            const O = k.value.indexOf(g.value);
            g.value = O - 1 >= 0 ? k.value[O - 1] : k.value[k.value.length - 1];
          }
          C();
        } else
          _.code == "Enter" && (g.value ? (z(g.value), n.multiple || (_.preventDefault(), al())) : i.value = !1);
      }
    }
    const j = { behavior: "smooth", block: "nearest", inline: "nearest", scrollMode: "if-needed" };
    function J() {
      setTimeout(() => {
        let _ = cl(`#${n.id}-autocomplete li.active`);
        _ && _.scrollIntoView(j);
      }, 0);
    }
    function C() {
      setTimeout(() => {
        let _ = cl(`#${n.id}-autocomplete li.active`);
        _ && ("scrollIntoViewIfNeeded" in _ ? _.scrollIntoViewIfNeeded(j) : _.scrollIntoView(j));
      }, 0);
    }
    function N(_) {
      var O;
      i.value = _, _ && (K(), (O = h.value) == null || O.focus());
    }
    function K() {
      i.value = !0, Y();
    }
    function z(_) {
      if (y.value = "", i.value = !1, n.multiple) {
        let O = Array.from(n.modelValue || []);
        r(_) ? O = O.filter((p) => p != _) : O.push(_), g.value = null, l("update:modelValue", O);
      } else {
        let O = _;
        n.modelValue == _ && (O = null), l("update:modelValue", O);
      }
    }
    function Y() {
      k.value = I.value;
    }
    return Dt(y, Y), (_, O) => (a(), u("div", {
      id: `${e.id}-autocomplete`
    }, [
      o(d) ? (a(), u("label", {
        key: 0,
        for: `${e.id}-text`,
        class: "block text-sm font-medium text-gray-700 dark:text-gray-300"
      }, M(o(d)), 9, Tc)) : $("", !0),
      s("div", Ic, [
        xt(s("input", Me({
          ref_key: "txtInput",
          ref: h,
          id: `${e.id}-text`,
          type: "text",
          role: "combobox",
          "aria-controls": "options",
          "aria-expanded": "false",
          autocomplete: "off",
          spellcheck: "false",
          "onUpdate:modelValue": O[0] || (O[0] = (p) => y.value = p),
          class: o(v),
          placeholder: e.multiple || !e.modelValue ? e.placeholder : "",
          onFocus: O[1] || (O[1] = (p) => i.value = !0),
          onKeydown: A,
          onKeyup: V,
          onClick: K,
          onPaste: B,
          required: e.multiple ? !1 : e.required
        }, _.$attrs), null, 16, Dc), [
          [Js, y.value]
        ]),
        s("button", {
          type: "button",
          onClick: O[2] || (O[2] = (p) => N(!i.value)),
          class: "absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none",
          tabindex: "-1"
        }, jc),
        i.value ? (a(), u("ul", {
          key: 0,
          class: "absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-black py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",
          onKeydown: A,
          id: `${e.id}-options`,
          role: "listbox"
        }, [
          (a(!0), u(ke, null, _e(k.value, (p) => (a(), u("li", {
            class: x([p === g.value ? "active bg-indigo-600 text-white" : "text-gray-900 dark:text-gray-100", "relative cursor-default select-none py-2 pl-3 pr-9"]),
            onMouseover: (G) => Q(p),
            onClick: (G) => z(p),
            role: "option",
            tabindex: "-1"
          }, [
            Z(_.$slots, "item", St(dl(p))),
            r(p) ? (a(), u("span", {
              key: 0,
              class: x(["absolute inset-y-0 right-0 flex items-center pr-4", p === g.value ? "text-white" : "text-indigo-600"])
            }, Rc, 2)) : $("", !0)
          ], 42, Bc))), 256))
        ], 40, Oc)) : !e.multiple && e.modelValue ? (a(), u("div", {
          key: 1,
          onKeydown: A,
          onClick: O[3] || (O[3] = (p) => N(!i.value)),
          class: "h-8 -mt-8 ml-3 pt-0.5"
        }, [
          Z(_.$slots, "item", St(dl(e.modelValue)))
        ], 32)) : $("", !0),
        o(m) ? (a(), u("div", Hc, zc)) : $("", !0)
      ]),
      o(m) ? (a(), u("p", {
        key: 1,
        class: "mt-2 text-sm text-red-500",
        id: `${e.id}-error`
      }, M(o(m)), 9, Uc)) : e.help ? (a(), u("p", {
        key: 2,
        class: "mt-2 text-sm text-gray-500",
        id: `${e.id}-description`
      }, M(e.help), 9, qc)) : $("", !0)
    ], 8, Fc));
  }
}), Kc = ["id", "name", "value"], Gc = { class: "block truncate" }, Wc = /* @__PURE__ */ se({
  __name: "Combobox",
  props: {
    id: null,
    modelValue: null,
    multiple: { type: Boolean },
    options: null,
    values: null,
    entries: null
  },
  emits: ["update:modelValue"],
  setup(e, { expose: t, emit: l }) {
    const n = e;
    t({
      toggle(y) {
        var g;
        (g = d.value) == null || g.toggle(y);
      }
    });
    function i(y) {
      l("update:modelValue", y);
    }
    const r = f(() => n.multiple != null ? n.multiple : Array.isArray(n.modelValue)), d = S();
    function c(y, g) {
      return !g || y.value.toLowerCase().includes(g.toLowerCase());
    }
    const m = f(() => n.entries || (n.values ? n.values.map((y) => ({ key: y, value: y })) : n.options ? Object.keys(n.options).map((y) => ({ key: y, value: n.options[y] })) : [])), v = S(r.value ? [] : null);
    at(() => {
      n.modelValue == null || n.modelValue === "" ? v.value = r.value ? [] : null : typeof n.modelValue == "string" ? v.value = m.value.find((y) => y.key === n.modelValue) || null : Array.isArray(n.modelValue) && (v.value = m.value.filter((y) => n.modelValue.includes(y.key)));
    });
    const h = f(() => v.value == null ? "" : Array.isArray(v.value) ? v.value.map((y) => encodeURIComponent(y.key)).join(",") : v.value.key);
    return (y, g) => {
      const b = q("Autocomplete");
      return a(), u(ke, null, [
        s("input", {
          type: "hidden",
          id: e.id,
          name: e.id,
          value: o(h)
        }, null, 8, Kc),
        ge(b, Me({
          ref_key: "input",
          ref: d,
          id: e.id,
          options: o(m),
          match: c,
          multiple: o(r)
        }, y.$attrs, {
          modelValue: v.value,
          "onUpdate:modelValue": [
            g[0] || (g[0] = (k) => v.value = k),
            i
          ]
        }), {
          item: he(({ key: k, value: I }) => [
            s("span", Gc, M(I), 1)
          ]),
          _: 1
        }, 16, ["id", "options", "multiple", "modelValue"])
      ], 64);
    };
  }
}), Zc = /* @__PURE__ */ se({
  __name: "DynamicInput",
  props: {
    input: null,
    modelValue: null,
    api: null
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const l = e, n = f(() => l.input.type || "text"), i = "ignore,css,options,meta,allowableValues,allowableEntries,op,prop,type,id,name".split(","), r = f(() => it(l.input, i)), d = S(Ee(
      l.modelValue[l.input.id],
      (m) => l.input.type === "file" ? null : l.input.type === "date" && m instanceof Date ? yl(m) : l.input.type === "time" ? qn(m) : m
    ));
    Dt(d, () => {
      l.modelValue[l.input.id] = d.value, t("update:modelValue", l.modelValue);
    });
    const c = f(() => {
      const m = l.modelValue[l.input.id];
      if (l.input.type !== "file" || !m)
        return [];
      if (typeof m == "string")
        return [{ filePath: m, fileName: kt(m, "/") }];
      if (!Array.isArray(m) && typeof m == "object")
        return m;
      if (Array.isArray(m)) {
        const v = [];
        return m.forEach((h) => {
          typeof h == "string" ? v.push({ filePath: h, fileName: kt(h, "/") }) : typeof h == "object" && v.push(h);
        }), v;
      }
    });
    return (m, v) => {
      var Q, D, B, H, V, A, j, J, C, N, K, z, Y, _, O, p, G, F, E, ae, ve, ie;
      const h = q("SelectInput"), y = q("CheckboxInput"), g = q("TagInput"), b = q("Combobox"), k = q("FileInput"), I = q("TextareaInput"), R = q("TextInput");
      return o(n) == "select" ? (a(), X(h, Me({
        key: 0,
        id: e.input.id,
        modelValue: d.value,
        "onUpdate:modelValue": v[0] || (v[0] = (de) => d.value = de),
        status: (Q = e.api) == null ? void 0 : Q.error,
        "input-class": (D = e.input.css) == null ? void 0 : D.input,
        "label-class": (B = e.input.css) == null ? void 0 : B.label,
        entries: e.input.allowableEntries,
        values: e.input.allowableValues
      }, o(r)), null, 16, ["id", "modelValue", "status", "input-class", "label-class", "entries", "values"])) : o(n) == "checkbox" ? (a(), X(y, Me({
        key: 1,
        id: e.input.id,
        modelValue: d.value,
        "onUpdate:modelValue": v[1] || (v[1] = (de) => d.value = de),
        status: (H = e.api) == null ? void 0 : H.error,
        "input-class": (V = e.input.css) == null ? void 0 : V.input,
        "label-class": (A = e.input.css) == null ? void 0 : A.label
      }, o(r)), null, 16, ["id", "modelValue", "status", "input-class", "label-class"])) : o(n) == "tag" ? (a(), X(g, Me({
        key: 2,
        id: e.input.id,
        modelValue: d.value,
        "onUpdate:modelValue": v[2] || (v[2] = (de) => d.value = de),
        status: (j = e.api) == null ? void 0 : j.error,
        "input-class": (J = e.input.css) == null ? void 0 : J.input,
        "label-class": (C = e.input.css) == null ? void 0 : C.label,
        allowableValues: e.input.allowableValues,
        string: ((N = e.input.prop) == null ? void 0 : N.type) == "String"
      }, o(r)), null, 16, ["id", "modelValue", "status", "input-class", "label-class", "allowableValues", "string"])) : o(n) == "combobox" ? (a(), X(b, Me({
        key: 3,
        id: e.input.id,
        modelValue: d.value,
        "onUpdate:modelValue": v[3] || (v[3] = (de) => d.value = de),
        status: (K = e.api) == null ? void 0 : K.error,
        "input-class": (z = e.input.css) == null ? void 0 : z.input,
        "label-class": (Y = e.input.css) == null ? void 0 : Y.label,
        entries: e.input.allowableEntries,
        values: e.input.allowableValues
      }, o(r)), null, 16, ["id", "modelValue", "status", "input-class", "label-class", "entries", "values"])) : o(n) == "file" ? (a(), X(k, Me({
        key: 4,
        id: e.input.id,
        status: (_ = e.api) == null ? void 0 : _.error,
        modelValue: d.value,
        "onUpdate:modelValue": v[4] || (v[4] = (de) => d.value = de),
        "input-class": (O = e.input.css) == null ? void 0 : O.input,
        "label-class": (p = e.input.css) == null ? void 0 : p.label,
        files: o(c)
      }, o(r)), null, 16, ["id", "status", "modelValue", "input-class", "label-class", "files"])) : o(n) == "textarea" ? (a(), X(I, Me({
        key: 5,
        id: e.input.id,
        modelValue: d.value,
        "onUpdate:modelValue": v[5] || (v[5] = (de) => d.value = de),
        status: (G = e.api) == null ? void 0 : G.error,
        "input-class": (F = e.input.css) == null ? void 0 : F.input,
        "label-class": (E = e.input.css) == null ? void 0 : E.label
      }, o(r)), null, 16, ["id", "modelValue", "status", "input-class", "label-class"])) : (a(), X(R, Me({
        key: 6,
        type: o(n),
        id: e.input.id,
        modelValue: d.value,
        "onUpdate:modelValue": v[6] || (v[6] = (de) => d.value = de),
        status: (ae = e.api) == null ? void 0 : ae.error,
        "input-class": (ve = e.input.css) == null ? void 0 : ve.input,
        "label-class": (ie = e.input.css) == null ? void 0 : ie.label
      }, o(r)), null, 16, ["type", "id", "modelValue", "status", "input-class", "label-class"]));
    };
  }
}), Jc = { class: "lookup-field" }, Xc = ["name", "value"], Yc = {
  key: 0,
  class: "flex justify-between"
}, e0 = ["for"], t0 = {
  key: 0,
  class: "flex items-center"
}, l0 = { class: "text-sm text-gray-500 dark:text-gray-400 pr-1" }, n0 = /* @__PURE__ */ s("span", { class: "sr-only" }, "Clear", -1), s0 = /* @__PURE__ */ s("svg", {
  class: "h-4 w-4",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ s("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1), o0 = [
  n0,
  s0
], a0 = {
  key: 1,
  class: "mt-1 relative"
}, i0 = { class: "w-full inline-flex truncate" }, r0 = { class: "text-blue-700 dark:text-blue-300 flex cursor-pointer" }, u0 = /* @__PURE__ */ s("span", { class: "absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none" }, [
  /* @__PURE__ */ s("svg", {
    class: "h-5 w-5 text-gray-400 dark:text-gray-500",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    /* @__PURE__ */ s("path", {
      "fill-rule": "evenodd",
      d: "M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
      "clip-rule": "evenodd"
    })
  ])
], -1), d0 = ["id"], c0 = ["id"], f0 = /* @__PURE__ */ se({
  __name: "LookupInput",
  props: {
    id: null,
    status: null,
    input: null,
    metadataType: null,
    modelValue: null,
    label: null,
    labelClass: null,
    help: null
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const l = e, { config: n } = _t(), { metadataApi: i } = et(), r = f(() => l.id || l.input.id), d = f(() => l.label ?? Oe(nt(r.value)));
    let c = He("ApiState", void 0);
    const m = He("client"), v = f(() => vt.call({ responseStatus: l.status ?? (c == null ? void 0 : c.error.value) }, r.value)), h = S(""), y = S(""), g = f(() => fe(l.modelValue, r.value)), b = f(() => Ze(l.metadataType).find((D) => D.name.toLowerCase() == r.value.toLowerCase())), k = f(() => {
      var D, B, H;
      return ((H = rt((B = (D = b.value) == null ? void 0 : D.ref) == null ? void 0 : B.model)) == null ? void 0 : H.icon) || n.value.tableIcon;
    });
    let I;
    function R(D) {
      if (D) {
        if (I == null) {
          console.warn("No ModalProvider required by LookupInput");
          return;
        }
        I.openModal({ name: "ModalLookup", ref: D }, (B) => {
          if (console.debug("openModal", h.value, " -> ", B, bt.setRefValue(D, B), D), B) {
            const H = fe(B, D.refId);
            h.value = bt.setRefValue(D, B) || H;
            const V = o(l.modelValue);
            V[r.value] = H, t("update:modelValue", V);
          }
        });
      }
    }
    function Q() {
      l.modelValue[r.value] = null, h.value = "";
    }
    return at(async () => {
      var J, C;
      I = He("ModalProvider", void 0);
      const D = l.modelValue;
      l.modelValue[r.value] || (l.modelValue[r.value] = null);
      const B = b.value, H = B == null ? void 0 : B.ref;
      if (!H) {
        console.warn(`No RefInfo for property '${r.value}'`);
        return;
      }
      h.value = "";
      let V = H.selfId == null ? fe(D, B.name) : fe(D, H.selfId);
      if (zt(V) && (V = fe(D, H.refId)), V == null)
        return;
      if (((J = i.value) == null ? void 0 : J.operations.find((N) => {
        var K;
        return ((K = N.dataModel) == null ? void 0 : K.name) == H.model;
      })) != null) {
        const N = fe(D, B.name);
        if (zt(N))
          return;
        if (h.value = `${N}`, y.value = B.name, H.refLabel != null) {
          const K = Ze(l.metadataType).find((Y) => Y.type == H.model);
          K == null && console.warn(`Could not find ${H.model} Property on ${l.metadataType.name}`);
          const z = K != null ? fe(D, K.name) : null;
          if (z != null) {
            let Y = fe(z, H.refLabel);
            Y && (h.value = `${Y}`, bt.setValue(H.model, V, H.refLabel, Y));
          } else {
            const Y = ((C = B.attributes) == null ? void 0 : C.some((O) => O.name == "Computed")) == !0;
            let _ = await bt.getOrFetchValue(m, i.value, H.model, H.refId, H.refLabel, Y, V);
            h.value = _ || `${H.model}: ${h.value}`;
          }
        }
      }
    }), (D, B) => {
      var V;
      const H = q("Icon");
      return a(), u("div", Jc, [
        s("input", {
          type: "hidden",
          name: o(r),
          value: o(g)
        }, null, 8, Xc),
        o(d) ? (a(), u("div", Yc, [
          s("label", {
            for: o(r),
            class: x(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${e.labelClass ?? ""}`)
          }, M(o(d)), 11, e0),
          o(g) ? (a(), u("div", t0, [
            s("span", l0, M(o(g)), 1),
            s("button", {
              onClick: Q,
              type: "button",
              title: "clear",
              class: "mr-1 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:ring-offset-black"
            }, o0)
          ])) : $("", !0)
        ])) : $("", !0),
        (V = o(b)) != null && V.ref ? (a(), u("div", a0, [
          s("button", {
            type: "button",
            class: "lookup flex relative w-full bg-white dark:bg-black border border-gray-300 dark:border-gray-700 rounded-md shadow-sm pl-3 pr-10 py-2 text-left focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
            onClick: B[0] || (B[0] = (A) => R(o(b).ref)),
            "aria-haspopup": "listbox",
            "aria-expanded": "true",
            "aria-labelledby": "listbox-label"
          }, [
            s("span", i0, [
              s("span", r0, [
                ge(H, {
                  class: "mr-1 w-5 h-5",
                  image: o(k)
                }, null, 8, ["image"]),
                s("span", null, M(h.value), 1)
              ])
            ]),
            u0
          ])
        ])) : $("", !0),
        o(v) ? (a(), u("p", {
          key: 2,
          class: "mt-2 text-sm text-red-500",
          id: `${o(r)}-error`
        }, M(o(v)), 9, d0)) : e.help ? (a(), u("p", {
          key: 3,
          class: "mt-2 text-sm text-gray-500",
          id: `${o(r)}-description`
        }, M(e.help), 9, c0)) : $("", !0)
      ]);
    };
  }
}), m0 = /* @__PURE__ */ se({
  __name: "AutoFormFields",
  props: {
    modelValue: null,
    type: null,
    api: null,
    formLayout: null,
    configureField: null,
    configureFormLayout: null,
    hideSummary: { type: Boolean },
    flexClass: { default: "flex flex-1 flex-col justify-between" },
    divideClass: { default: "divide-y divide-gray-200 px-4 sm:px-6" },
    spaceClass: { default: "space-y-6 pt-6 pb-5" },
    fieldsetClass: { default: "grid grid-cols-12 gap-6" }
  },
  emits: ["update:modelValue"],
  setup(e, { expose: t, emit: l }) {
    const n = e;
    t({ forceUpdate: i, props: n, updateValue: d });
    function i() {
      var B;
      const D = We();
      (B = D == null ? void 0 : D.proxy) == null || B.$forceUpdate();
    }
    function r(D, B) {
      d(D.id, fe(B, D.id));
    }
    function d(D, B) {
      n.modelValue[D] = B, l("update:modelValue", n.modelValue), i();
    }
    const { metadataApi: c, apiOf: m, typeOf: v, typeOfRef: h, createFormLayout: y, Crud: g } = et(), b = f(() => n.type || Pt(n.modelValue)), k = f(() => v(b.value)), I = f(() => {
      var D, B;
      return h((B = (D = c.value) == null ? void 0 : D.operations.find((H) => H.request.name == b.value)) == null ? void 0 : B.dataModel) || k.value;
    }), R = f(() => {
      const D = k.value;
      if (!D) {
        if (n.formLayout) {
          const J = n.formLayout.map((C) => {
            const N = { name: C.id, type: ua(C.type) }, K = Object.assign({ prop: N }, C);
            return n.configureField && n.configureField(K), K;
          });
          return n.configureFormLayout && n.configureFormLayout(J), J;
        }
        throw new Error(`MetadataType for ${b.value} not found`);
      }
      const B = Ze(D), H = I.value, V = n.formLayout ? n.formLayout : y(D), A = [], j = m(D.name);
      return V.forEach((J) => {
        var z;
        const C = B.find((Y) => Y.name == J.name);
        if (J.ignore)
          return;
        const N = ((z = H == null ? void 0 : H.properties) == null ? void 0 : z.find((Y) => {
          var _;
          return Y.name.toLowerCase() == ((_ = J.name) == null ? void 0 : _.toLowerCase());
        })) ?? C, K = Object.assign({ prop: N, op: j }, J);
        n.configureField && n.configureField(K), A.push(K);
      }), n.configureFormLayout && n.configureFormLayout(A), A;
    }), Q = f(() => R.value.filter((D) => D.type != "hidden").map((D) => D.id));
    return (D, B) => {
      var j;
      const H = q("ErrorSummary"), V = q("LookupInput"), A = q("DynamicInput");
      return a(), u(ke, null, [
        e.hideSummary ? $("", !0) : (a(), X(H, {
          key: 0,
          status: (j = e.api) == null ? void 0 : j.error,
          except: o(Q)
        }, null, 8, ["status", "except"])),
        s("div", {
          class: x(e.flexClass)
        }, [
          s("div", {
            class: x(e.divideClass)
          }, [
            s("div", {
              class: x(e.spaceClass)
            }, [
              s("fieldset", {
                class: x(e.fieldsetClass)
              }, [
                (a(!0), u(ke, null, _e(o(R), (J) => {
                  var C, N, K;
                  return a(), u("div", {
                    key: J.id,
                    class: x([
                      "w-full",
                      ((C = J.css) == null ? void 0 : C.field) ?? (J.type == "textarea" ? "col-span-12" : "col-span-12 xl:col-span-6" + (J.type == "checkbox" ? " flex items-center" : "")),
                      J.type == "hidden" ? "hidden" : ""
                    ])
                  }, [
                    ((N = J.prop) == null ? void 0 : N.ref) != null && J.type != "file" && !J.prop.isPrimaryKey ? (a(), X(V, {
                      key: 0,
                      metadataType: o(I),
                      input: J,
                      modelValue: e.modelValue,
                      "onUpdate:modelValue": (z) => r(J, z),
                      status: (K = e.api) == null ? void 0 : K.error
                    }, null, 8, ["metadataType", "input", "modelValue", "onUpdate:modelValue", "status"])) : (a(), X(A, {
                      key: 1,
                      input: J,
                      modelValue: e.modelValue,
                      "onUpdate:modelValue": B[0] || (B[0] = (z) => D.$emit("update:modelValue", z)),
                      api: e.api
                    }, null, 8, ["input", "modelValue", "api"]))
                  ], 2);
                }), 128))
              ], 2)
            ], 2)
          ], 2)
        ], 2)
      ], 64);
    };
  }
});
function _l() {
  const e = S(!1), t = S(), l = S(), n = He("client");
  function i({ message: g, errorCode: b, fieldName: k, errors: I }) {
    return b || (b = "Exception"), I || (I = []), t.value = k ? new Tl({
      errorCode: b,
      message: g,
      errors: [new Pn({ fieldName: k, errorCode: b, message: g })]
    }) : new Tl({ errorCode: b, message: g, errors: I });
  }
  function r({ fieldName: g, message: b, errorCode: k }) {
    if (k || (k = "Exception"), !t.value)
      i({ fieldName: g, message: b, errorCode: k });
    else {
      let I = new Tl(t.value);
      I.errors = [
        ...(I.errors || []).filter((R) => {
          var Q;
          return ((Q = R.fieldName) == null ? void 0 : Q.toLowerCase()) !== (g == null ? void 0 : g.toLowerCase());
        }),
        new Pn({ fieldName: g, message: b, errorCode: k })
      ], t.value = I;
    }
  }
  async function d(g, b, k) {
    e.value = !0;
    let I = await n.api(Vt(g), b, k);
    return e.value = !1, l.value = I.response, t.value = I.error, I;
  }
  async function c(g, b, k) {
    e.value = !0;
    let I = await n.apiVoid(Vt(g), b, k);
    return e.value = !1, l.value = I.response, t.value = I.error, I;
  }
  async function m(g, b, k, I) {
    e.value = !0;
    let R = await n.apiForm(Vt(g), b, k, I);
    return e.value = !1, l.value = R.response, t.value = R.error, R;
  }
  async function v(g, b, k, I) {
    e.value = !0;
    let R = await n.apiFormVoid(Vt(g), b, k, I);
    return e.value = !1, l.value = R.response, t.value = R.error, R;
  }
  async function h(g, b, k, I) {
    return Wn(n, g, b, k, I);
  }
  let y = { setError: i, addFieldError: r, loading: e, error: t, api: d, apiVoid: c, apiForm: m, apiFormVoid: v, swr: h, unRefs: Vt, setRef: Qn };
  return Gt("ApiState", y), y;
}
const v0 = ["onSubmit"], h0 = { key: 0 }, g0 = { key: 2 }, p0 = ["innerHTML"], y0 = /* @__PURE__ */ s("input", {
  type: "submit",
  class: "hidden"
}, null, -1), b0 = { class: "flex justify-end" }, w0 = /* @__PURE__ */ s("div", null, null, -1), x0 = /* @__PURE__ */ se({
  __name: "AutoForm",
  props: {
    type: null,
    modelValue: null,
    heading: null,
    subHeading: null,
    showLoading: { type: Boolean, default: !0 },
    jsconfig: { default: "eccn,edv" },
    configureField: null,
    bodyClass: null,
    formClass: { default: "shadow sm:rounded-md" },
    innerFormClass: null,
    headerClass: { default: "p-6" },
    buttonsClass: null,
    headingClass: null,
    subHeadingClass: null,
    submitLabel: { default: "Submit" },
    allowSubmit: null
  },
  emits: ["success", "error", "update:modelValue"],
  setup(e, { emit: t }) {
    const l = e;
    Gt("ModalProvider", {
      openModal: d
    });
    const i = S(), r = S();
    function d(C, N) {
      i.value = C, r.value = N;
    }
    async function c(C) {
      r.value && r.value(C), i.value = void 0, r.value = void 0;
    }
    const m = _l(), { getTypeName: v } = Xo(), { typeOf: h, Crud: y, createDto: g } = et(), b = S(new Ye()), k = f(() => typeof l.buttonsClass == "string" ? l.formClass : Ge.buttonsClass), I = f(() => typeof l.headingClass == "string" ? l.formClass : wt.headingClass), R = f(() => typeof l.subHeadingClass == "string" ? l.subHeadingClass : wt.subHeadingClass), Q = f(() => {
      var C;
      return l.type ? v(l.type) : (C = l.modelValue) != null && C.getTypeName ? l.modelValue.getTypeName() : null;
    }), D = f(() => h(Q.value)), B = S(l.modelValue || A()), H = f(() => m.loading.value), V = f(() => {
      var C;
      return l.heading || ((C = h(Q.value)) == null ? void 0 : C.description) || Oe(Q.value);
    });
    function A() {
      return typeof l.type == "string" ? g(l.type) : l.type ? new l.type() : l.modelValue;
    }
    async function j(C) {
      let N = C.target;
      const K = A();
      let z = Ee(K == null ? void 0 : K.getMethod, (O) => typeof O == "function" ? O() : null) || "POST", Y = Ee(K == null ? void 0 : K.createResponse, (O) => typeof O == "function" ? O() : null) == null;
      const _ = l.jsconfig;
      if (Jl.hasRequestBody(z)) {
        let O = new K.constructor(), p = new FormData(N);
        console.debug("AutoForm.submitForm", O, p), Y ? b.value = await m.apiFormVoid(O, p, { jsconfig: _ }) : b.value = await m.apiForm(O, p, { jsconfig: _ });
      } else {
        let O = new K.constructor(B.value);
        console.debug("AutoForm.submit", O), Y ? b.value = await m.apiVoid(O, { jsconfig: _ }) : b.value = await m.api(O, { jsconfig: _ });
      }
      b.value.succeeded ? t("success", b.value.response) : t("error", b.value.error);
    }
    function J(C) {
      t("update:modelValue", C);
    }
    return (C, N) => {
      var O, p, G;
      const K = q("AutoFormFields"), z = q("FormLoading"), Y = q("PrimaryButton"), _ = q("ModalLookup");
      return o(D) ? (a(), u("form", {
        key: 0,
        onSubmit: Ne(j, ["prevent"]),
        autocomplete: "off",
        class: x(e.formClass)
      }, [
        s("div", {
          class: x(e.innerFormClass)
        }, [
          s("div", {
            class: x(e.bodyClass)
          }, [
            s("div", {
              class: x(e.headerClass)
            }, [
              C.$slots.heading ? (a(), u("div", h0, [
                Z(C.$slots, "heading")
              ])) : (a(), u("h3", {
                key: 1,
                class: x(o(I))
              }, M(o(V)), 3)),
              C.$slots.subheading ? (a(), u("div", g0, [
                Z(C.$slots, "subheading")
              ])) : e.subHeading ? (a(), u("p", {
                key: 3,
                class: x(o(R))
              }, M(e.subHeading), 3)) : (O = o(D)) != null && O.notes ? (a(), u("p", {
                key: 4,
                class: x(["notes", o(R)]),
                innerHTML: (p = o(D)) == null ? void 0 : p.notes
              }, null, 10, p0)) : $("", !0)
            ], 2),
            Z(C.$slots, "header"),
            y0,
            ge(K, {
              type: e.type,
              modelValue: B.value,
              "onUpdate:modelValue": J,
              api: b.value,
              configureField: e.configureField
            }, null, 8, ["type", "modelValue", "api", "configureField"]),
            Z(C.$slots, "footer")
          ], 2),
          Z(C.$slots, "buttons", {}, () => [
            s("div", {
              class: x(o(k))
            }, [
              s("div", null, [
                e.showLoading && o(H) ? (a(), X(z, { key: 0 })) : $("", !0)
              ]),
              s("div", b0, [
                w0,
                ge(Y, {
                  disabled: e.allowSubmit ? !e.allowSubmit(B.value) : !1
                }, {
                  default: he(() => [
                    pe(M(e.submitLabel), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ])
            ], 2)
          ])
        ], 2),
        ((G = i.value) == null ? void 0 : G.name) == "ModalLookup" && i.value.ref ? (a(), X(_, {
          key: 0,
          "ref-info": i.value.ref,
          onDone: c
        }, null, 8, ["ref-info"])) : $("", !0)
      ], 42, v0)) : $("", !0);
    };
  }
}), k0 = { key: 0 }, $0 = { class: "text-red-700" }, C0 = /* @__PURE__ */ s("b", null, "type", -1), _0 = ["onSubmit"], L0 = { key: 0 }, V0 = { key: 2 }, M0 = ["innerHTML"], S0 = { class: "flex justify-end" }, A0 = {
  key: 2,
  class: "relative z-10",
  "aria-labelledby": "slide-over-title",
  role: "dialog",
  "aria-modal": "true"
}, F0 = /* @__PURE__ */ s("div", { class: "fixed inset-0" }, null, -1), T0 = { class: "fixed inset-0 overflow-hidden" }, I0 = ["onSubmit"], D0 = { class: "flex min-h-0 flex-1 flex-col overflow-auto" }, P0 = { class: "flex-1" }, j0 = { class: "bg-gray-50 dark:bg-gray-900 px-4 py-6 sm:px-6" }, O0 = { class: "flex items-start justify-between space-x-3" }, B0 = { class: "space-y-1" }, E0 = { key: 0 }, R0 = { key: 2 }, H0 = ["innerHTML"], N0 = { class: "flex h-7 items-center" }, z0 = { class: "flex justify-end" }, U0 = /* @__PURE__ */ se({
  __name: "AutoCreateForm",
  props: {
    type: null,
    formStyle: { default: "slideOver" },
    panelClass: null,
    formClass: null,
    headingClass: null,
    subHeadingClass: null,
    buttonsClass: null,
    heading: null,
    subHeading: null,
    autosave: { type: Boolean, default: !0 },
    showLoading: { type: Boolean, default: !0 },
    showCancel: { type: Boolean, default: !0 },
    configureField: null,
    configureFormLayout: null
  },
  emits: ["done", "save", "error"],
  setup(e, { expose: t, emit: l }) {
    const n = e, i = S(), r = S(1);
    t({ forceUpdate: d, props: n, setModel: c, formFields: i });
    function d() {
      var Ve, Ae;
      r.value++, (Ve = i.value) == null || Ve.forceUpdate();
      const U = We();
      (Ae = U == null ? void 0 : U.proxy) == null || Ae.$forceUpdate();
    }
    function c(U) {
      Object.assign(A.value, U), d();
    }
    function m(U) {
    }
    Gt("ModalProvider", {
      openModal: g
    });
    const h = S(), y = S();
    function g(U, Ve) {
      h.value = U, y.value = Ve;
    }
    async function b(U) {
      y.value && y.value(U), h.value = void 0, y.value = void 0;
    }
    const { typeOf: k, typeProperties: I, Crud: R, createDto: Q, formValues: D } = et(), B = f(() => Pt(n.type)), H = f(() => k(B.value)), A = S((() => typeof n.type == "string" ? Q(n.type) : n.type ? new n.type() : null)()), j = f(() => n.panelClass || Ge.panelClass(n.formStyle)), J = f(() => n.formClass || Ge.formClass(n.formStyle)), C = f(() => n.headingClass || Ge.headingClass(n.formStyle)), N = f(() => n.subHeadingClass || Ge.subHeadingClass(n.formStyle)), K = f(() => n.buttonsClass || Ge.buttonsClass), z = f(() => R.model(H.value)), Y = f(() => {
      var U;
      return n.heading || ((U = k(B.value)) == null ? void 0 : U.description) || (z.value ? `New ${Oe(z.value)}` : Oe(B.value));
    }), _ = S(new Ye());
    let O = _l(), p = f(() => O.loading.value);
    async function G(U) {
      var ze, ee;
      let Ve = U.target;
      if (!n.autosave) {
        l("save", new A.value.constructor(D(Ve, I(H.value))));
        return;
      }
      let Ae = Ee((ze = A.value) == null ? void 0 : ze.getMethod, (oe) => typeof oe == "function" ? oe() : null) || "POST", ye = Ee((ee = A.value) == null ? void 0 : ee.createResponse, (oe) => typeof oe == "function" ? oe() : null) == null;
      if (Jl.hasRequestBody(Ae)) {
        let oe = new A.value.constructor(), Ce = new FormData(Ve);
        ye ? _.value = await O.apiFormVoid(oe, Ce, { jsconfig: "eccn" }) : _.value = await O.apiForm(oe, Ce, { jsconfig: "eccn" });
      } else {
        let oe = D(Ve, I(H.value)), Ce = new A.value.constructor(oe);
        ye ? _.value = await O.apiVoid(Ce, { jsconfig: "eccn" }) : _.value = await O.api(Ce, { jsconfig: "eccn" });
      }
      _.value.succeeded ? (Ve.reset(), l("save", _.value.response)) : l("error", _.value.error);
    }
    function F() {
      l("done");
    }
    const E = S(!1), ae = S(""), ve = {
      entering: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-full", to: "translate-x-0" },
      leaving: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-0", to: "translate-x-full" }
    };
    Dt(E, () => {
      At(ve, ae, E.value), E.value || setTimeout(F, 700);
    }), E.value = !0;
    function ie() {
      n.formStyle == "slideOver" ? E.value = !1 : F();
    }
    const de = (U) => {
      U.key === "Escape" && ie();
    };
    return at(() => window.addEventListener("keydown", de)), Kt(() => window.removeEventListener("keydown", de)), (U, Ve) => {
      var Fe, xe, qe, De, T, P, te, ce, Le;
      const Ae = q("AutoFormFields"), ye = q("FormLoading"), ze = q("SecondaryButton"), ee = q("PrimaryButton"), oe = q("CloseButton"), Ce = q("ModalLookup");
      return a(), u("div", null, [
        o(H) ? e.formStyle == "card" ? (a(), u("div", {
          key: 1,
          class: x(o(j))
        }, [
          s("form", {
            onSubmit: Ne(G, ["prevent"])
          }, [
            s("div", {
              class: x(o(J))
            }, [
              s("div", null, [
                U.$slots.heading ? (a(), u("div", L0, [
                  Z(U.$slots, "heading")
                ])) : (a(), u("h3", {
                  key: 1,
                  class: x(o(C))
                }, M(o(Y)), 3)),
                U.$slots.subheading ? (a(), u("div", V0, [
                  Z(U.$slots, "subheading")
                ])) : e.subHeading ? (a(), u("p", {
                  key: 3,
                  class: x(o(N))
                }, M(e.subHeading), 3)) : (Fe = o(H)) != null && Fe.notes ? (a(), u("p", {
                  key: 4,
                  class: x(["notes", o(N)]),
                  innerHTML: (xe = o(H)) == null ? void 0 : xe.notes
                }, null, 10, M0)) : $("", !0)
              ]),
              Z(U.$slots, "header", {
                formInstance: (qe = We()) == null ? void 0 : qe.exposed,
                model: A.value
              }),
              (a(), X(Ae, {
                ref_key: "formFields",
                ref: i,
                key: r.value,
                modelValue: A.value,
                "onUpdate:modelValue": m,
                api: _.value,
                configureField: e.configureField,
                configureFormLayout: e.configureFormLayout
              }, null, 8, ["modelValue", "api", "configureField", "configureFormLayout"])),
              Z(U.$slots, "footer", {
                formInstance: (De = We()) == null ? void 0 : De.exposed,
                model: A.value
              })
            ], 2),
            s("div", {
              class: x(o(K))
            }, [
              s("div", null, [
                e.showLoading && o(p) ? (a(), X(ye, { key: 0 })) : $("", !0)
              ]),
              s("div", S0, [
                e.showCancel ? (a(), X(ze, {
                  key: 0,
                  onClick: ie,
                  disabled: o(p)
                }, {
                  default: he(() => [
                    pe("Cancel")
                  ]),
                  _: 1
                }, 8, ["disabled"])) : $("", !0),
                ge(ee, {
                  type: "submit",
                  class: "ml-4",
                  disabled: o(p)
                }, {
                  default: he(() => [
                    pe("Save")
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ])
            ], 2)
          ], 40, _0)
        ], 2)) : (a(), u("div", A0, [
          F0,
          s("div", T0, [
            s("div", {
              onMousedown: ie,
              class: "absolute inset-0 overflow-hidden"
            }, [
              s("div", {
                onMousedown: Ve[0] || (Ve[0] = Ne(() => {
                }, ["stop"])),
                class: "pointer-events-none fixed inset-y-0 right-0 flex pl-10"
              }, [
                s("div", {
                  class: x(["pointer-events-auto w-screen xl:max-w-3xl md:max-w-xl max-w-lg", ae.value])
                }, [
                  s("form", {
                    class: x(o(J)),
                    onSubmit: Ne(G, ["prevent"])
                  }, [
                    s("div", D0, [
                      s("div", P0, [
                        s("div", j0, [
                          s("div", O0, [
                            s("div", B0, [
                              U.$slots.heading ? (a(), u("div", E0, [
                                Z(U.$slots, "heading")
                              ])) : (a(), u("h3", {
                                key: 1,
                                class: x(o(C))
                              }, M(o(Y)), 3)),
                              U.$slots.subheading ? (a(), u("div", R0, [
                                Z(U.$slots, "subheading")
                              ])) : e.subHeading ? (a(), u("p", {
                                key: 3,
                                class: x(o(N))
                              }, M(e.subHeading), 3)) : (T = o(H)) != null && T.notes ? (a(), u("p", {
                                key: 4,
                                class: x(["notes", o(N)]),
                                innerHTML: (P = o(H)) == null ? void 0 : P.notes
                              }, null, 10, H0)) : $("", !0)
                            ]),
                            s("div", N0, [
                              ge(oe, {
                                "button-class": "bg-gray-50 dark:bg-gray-900",
                                onClose: ie
                              })
                            ])
                          ])
                        ]),
                        Z(U.$slots, "header", {
                          formInstance: (te = We()) == null ? void 0 : te.exposed,
                          model: A.value
                        }),
                        (a(), X(Ae, {
                          ref_key: "formFields",
                          ref: i,
                          key: r.value,
                          modelValue: A.value,
                          "onUpdate:modelValue": m,
                          api: _.value,
                          configureField: e.configureField,
                          configureFormLayout: e.configureFormLayout
                        }, null, 8, ["modelValue", "api", "configureField", "configureFormLayout"])),
                        Z(U.$slots, "footer", {
                          formInstance: (ce = We()) == null ? void 0 : ce.exposed,
                          model: A.value
                        })
                      ])
                    ]),
                    s("div", {
                      class: x(o(K))
                    }, [
                      s("div", null, [
                        e.showLoading && o(p) ? (a(), X(ye, { key: 0 })) : $("", !0)
                      ]),
                      s("div", z0, [
                        e.showCancel ? (a(), X(ze, {
                          key: 0,
                          onClick: ie,
                          disabled: o(p)
                        }, {
                          default: he(() => [
                            pe("Cancel")
                          ]),
                          _: 1
                        }, 8, ["disabled"])) : $("", !0),
                        ge(ee, {
                          type: "submit",
                          class: "ml-4",
                          disabled: o(p)
                        }, {
                          default: he(() => [
                            pe("Save")
                          ]),
                          _: 1
                        }, 8, ["disabled"])
                      ])
                    ], 2)
                  ], 42, I0)
                ], 2)
              ], 32)
            ], 32)
          ])
        ])) : (a(), u("div", k0, [
          s("p", $0, [
            pe("Could not create form for unknown "),
            C0,
            pe(" " + M(o(B)), 1)
          ])
        ])),
        ((Le = h.value) == null ? void 0 : Le.name) == "ModalLookup" && h.value.ref ? (a(), X(Ce, {
          key: 3,
          "ref-info": h.value.ref,
          onDone: b
        }, null, 8, ["ref-info"])) : $("", !0)
      ]);
    };
  }
}), q0 = { key: 0 }, Q0 = { class: "text-red-700" }, K0 = /* @__PURE__ */ s("b", null, "type", -1), G0 = ["onSubmit"], W0 = { key: 0 }, Z0 = { key: 2 }, J0 = ["innerHTML"], X0 = { class: "flex justify-end" }, Y0 = {
  key: 2,
  class: "relative z-10",
  "aria-labelledby": "slide-over-title",
  role: "dialog",
  "aria-modal": "true"
}, ef = /* @__PURE__ */ s("div", { class: "fixed inset-0" }, null, -1), tf = { class: "fixed inset-0 overflow-hidden" }, lf = ["onSubmit"], nf = { class: "flex min-h-0 flex-1 flex-col overflow-auto" }, sf = { class: "flex-1" }, of = { class: "bg-gray-50 dark:bg-gray-900 px-4 py-6 sm:px-6" }, af = { class: "flex items-start justify-between space-x-3" }, rf = { class: "space-y-1" }, uf = { key: 0 }, df = { key: 2 }, cf = ["innerHTML"], ff = { class: "flex h-7 items-center" }, mf = { class: "flex justify-end" }, vf = /* @__PURE__ */ se({
  __name: "AutoEditForm",
  props: {
    modelValue: null,
    type: null,
    deleteType: null,
    formStyle: { default: "slideOver" },
    panelClass: null,
    formClass: null,
    headingClass: null,
    subHeadingClass: null,
    heading: null,
    subHeading: null,
    autosave: { type: Boolean, default: !0 },
    showLoading: { type: Boolean, default: !0 },
    configureField: null,
    configureFormLayout: null
  },
  emits: ["done", "save", "delete", "error"],
  setup(e, { expose: t, emit: l }) {
    const n = e, i = S(), r = S(1);
    t({ forceUpdate: d, props: n, setModel: c, formFields: i });
    function d() {
      var oe;
      r.value++, C.value = J();
      const ee = We();
      (oe = ee == null ? void 0 : ee.proxy) == null || oe.$forceUpdate();
    }
    function c(ee) {
      Object.assign(C.value, ee);
    }
    function m(ee) {
    }
    Gt("ModalProvider", {
      openModal: g
    });
    const h = S(), y = S();
    function g(ee, oe) {
      h.value = ee, y.value = oe;
    }
    async function b(ee) {
      y.value && y.value(ee), h.value = void 0, y.value = void 0;
    }
    const { typeOf: k, apiOf: I, typeProperties: R, createFormLayout: Q, getPrimaryKey: D, Crud: B, createDto: H, formValues: V } = et(), A = f(() => Pt(n.type)), j = f(() => k(A.value)), J = () => typeof n.type == "string" ? H(n.type, rl(n.modelValue)) : n.type ? new n.type(rl(n.modelValue)) : null, C = S(J()), N = f(() => n.panelClass || Ge.panelClass(n.formStyle)), K = f(() => n.formClass || Ge.formClass(n.formStyle)), z = f(() => n.headingClass || Ge.headingClass(n.formStyle)), Y = f(() => n.subHeadingClass || Ge.subHeadingClass(n.formStyle)), _ = f(() => B.model(j.value)), O = f(() => {
      var ee;
      return n.heading || ((ee = k(A.value)) == null ? void 0 : ee.description) || (_.value ? `Update ${Oe(_.value)}` : Oe(A.value));
    }), p = S(new Ye());
    let G = _l(), F = f(() => G.loading.value);
    const E = () => Ee(k(B.model(j.value)), (ee) => D(ee));
    function ae(ee) {
      const { op: oe, prop: Ce } = ee;
      oe && (B.isPatch(oe) || B.isUpdate(oe)) && (ee.disabled = Ce == null ? void 0 : Ce.isPrimaryKey), n.configureField && n.configureField(ee);
    }
    async function ve(ee) {
      var qe, De;
      let oe = ee.target;
      if (!n.autosave) {
        l("save", new C.value.constructor(V(oe, R(j.value))));
        return;
      }
      let Ce = Ee((qe = C.value) == null ? void 0 : qe.getMethod, (T) => typeof T == "function" ? T() : null) || "POST", Fe = Ee((De = C.value) == null ? void 0 : De.createResponse, (T) => typeof T == "function" ? T() : null) == null, xe = E();
      if (Jl.hasRequestBody(Ce)) {
        let T = new C.value.constructor(), P = fe(n.modelValue, xe.name), te = new FormData(oe);
        xe && !Array.from(te.keys()).some((Ue) => Ue.toLowerCase() == xe.name.toLowerCase()) && te.append(xe.name, P);
        let ce = [];
        const Le = A.value && I(A.value);
        if (Le && B.isPatch(Le)) {
          let Ue = rl(n.modelValue), $e = Q(j.value), Te = {};
          if (xe && (Te[xe.name] = P), $e.forEach((Ie) => {
            let Ke = Ie.id, mt = fe(Ue, Ke);
            if (xe && xe.name.toLowerCase() === Ke.toLowerCase())
              return;
            let ut = te.get(Ke), Xt = ut != null, Yt = Ie.type === "checkbox" ? Xt !== !!mt : Ie.type === "file" ? Xt : ut != mt;
            !ut && !mt && (Yt = !1), Yt && (ut ? Te[Ke] = ut : Ie.type !== "file" && ce.push(Ke));
          }), Array.from(te.keys()).filter((Ie) => !Te[Ie]).forEach((Ie) => te.delete(Ie)), Array.from(te.keys()).filter((Ie) => Ie.toLowerCase() != xe.name.toLowerCase()).length == 0 && ce.length == 0) {
            ye();
            return;
          }
        }
        const Be = ce.length > 0 ? { jsconfig: "eccn", reset: ce } : { jsconfig: "eccn" };
        Fe ? p.value = await G.apiFormVoid(T, te, Be) : p.value = await G.apiForm(T, te, Be);
      } else {
        let T = V(oe, R(j.value));
        xe && !fe(T, xe.name) && (T[xe.name] = fe(n.modelValue, xe.name));
        let P = new C.value.constructor(T);
        Fe ? p.value = await G.apiVoid(P, { jsconfig: "eccn" }) : p.value = await G.api(P, { jsconfig: "eccn" });
      }
      p.value.succeeded ? (oe.reset(), l("save", p.value.response)) : l("error", p.value.error);
    }
    async function ie(ee) {
      let oe = E();
      const Ce = oe ? fe(n.modelValue, oe.name) : null;
      if (!Ce) {
        console.error(`Could not find Primary Key for Type ${A.value} (${_.value})`);
        return;
      }
      const Fe = { [oe.name]: Ce }, xe = typeof n.deleteType == "string" ? H(n.deleteType, Fe) : n.deleteType ? new n.deleteType(Fe) : null;
      Ee(xe.createResponse, (De) => typeof De == "function" ? De() : null) == null ? p.value = await G.apiVoid(xe) : p.value = await G.api(xe), p.value.succeeded ? l("delete", p.value.response) : l("error", p.value.error);
    }
    function de() {
      l("done");
    }
    const U = S(!1), Ve = S(""), Ae = {
      entering: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-full", to: "translate-x-0" },
      leaving: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-0", to: "translate-x-full" }
    };
    Dt(U, () => {
      At(Ae, Ve, U.value), U.value || setTimeout(de, 700);
    }), U.value = !0;
    function ye() {
      n.formStyle == "slideOver" ? U.value = !1 : de();
    }
    const ze = (ee) => {
      ee.key === "Escape" && ye();
    };
    return at(() => window.addEventListener("keydown", ze)), Kt(() => window.removeEventListener("keydown", ze)), (ee, oe) => {
      var te, ce, Le, Be, Ue, $e, Te, tt, Ie;
      const Ce = q("AutoFormFields"), Fe = q("ConfirmDelete"), xe = q("FormLoading"), qe = q("SecondaryButton"), De = q("PrimaryButton"), T = q("CloseButton"), P = q("ModalLookup");
      return a(), u("div", null, [
        o(j) ? e.formStyle == "card" ? (a(), u("div", {
          key: 1,
          class: x(o(N))
        }, [
          s("form", {
            onSubmit: Ne(ve, ["prevent"])
          }, [
            s("div", {
              class: x(o(K))
            }, [
              s("div", null, [
                ee.$slots.heading ? (a(), u("div", W0, [
                  Z(ee.$slots, "heading")
                ])) : (a(), u("h3", {
                  key: 1,
                  class: x(o(z))
                }, M(o(O)), 3)),
                ee.$slots.subheading ? (a(), u("div", Z0, [
                  Z(ee.$slots, "subheading")
                ])) : e.subHeading ? (a(), u("p", {
                  key: 3,
                  class: x(o(Y))
                }, M(e.subHeading), 3)) : (te = o(j)) != null && te.notes ? (a(), u("p", {
                  key: 4,
                  class: x(["notes", o(Y)]),
                  innerHTML: (ce = o(j)) == null ? void 0 : ce.notes
                }, null, 10, J0)) : $("", !0)
              ]),
              Z(ee.$slots, "header", {
                formInstance: (Le = We()) == null ? void 0 : Le.exposed,
                model: C.value
              }),
              (a(), X(Ce, {
                ref_key: "formFields",
                ref: i,
                key: r.value,
                modelValue: C.value,
                "onUpdate:modelValue": m,
                api: p.value,
                configureField: e.configureField,
                configureFormLayout: e.configureFormLayout
              }, null, 8, ["modelValue", "api", "configureField", "configureFormLayout"])),
              Z(ee.$slots, "footer", {
                formInstance: (Be = We()) == null ? void 0 : Be.exposed,
                model: C.value
              })
            ], 2),
            s("div", {
              class: x(o(Ge).buttonsClass)
            }, [
              s("div", null, [
                e.deleteType ? (a(), X(Fe, {
                  key: 0,
                  onDelete: ie
                })) : $("", !0)
              ]),
              s("div", null, [
                e.showLoading && o(F) ? (a(), X(xe, { key: 0 })) : $("", !0)
              ]),
              s("div", X0, [
                ge(qe, {
                  onClick: ye,
                  disabled: o(F)
                }, {
                  default: he(() => [
                    pe("Cancel")
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                ge(De, {
                  type: "submit",
                  class: "ml-4",
                  disabled: o(F)
                }, {
                  default: he(() => [
                    pe("Save")
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ])
            ], 2)
          ], 40, G0)
        ], 2)) : (a(), u("div", Y0, [
          ef,
          s("div", tf, [
            s("div", {
              onMousedown: ye,
              class: "absolute inset-0 overflow-hidden"
            }, [
              s("div", {
                onMousedown: oe[0] || (oe[0] = Ne(() => {
                }, ["stop"])),
                class: "pointer-events-none fixed inset-y-0 right-0 flex pl-10"
              }, [
                s("div", {
                  class: x(["pointer-events-auto w-screen xl:max-w-3xl md:max-w-xl max-w-lg", Ve.value])
                }, [
                  s("form", {
                    class: x(o(K)),
                    onSubmit: Ne(ve, ["prevent"])
                  }, [
                    s("div", nf, [
                      s("div", sf, [
                        s("div", of, [
                          s("div", af, [
                            s("div", rf, [
                              ee.$slots.heading ? (a(), u("div", uf, [
                                Z(ee.$slots, "heading")
                              ])) : (a(), u("h3", {
                                key: 1,
                                class: x(o(z))
                              }, M(o(O)), 3)),
                              ee.$slots.subheading ? (a(), u("div", df, [
                                Z(ee.$slots, "subheading")
                              ])) : e.subHeading ? (a(), u("p", {
                                key: 3,
                                class: x(o(Y))
                              }, M(e.subHeading), 3)) : (Ue = o(j)) != null && Ue.notes ? (a(), u("p", {
                                key: 4,
                                class: x(["notes", o(Y)]),
                                innerHTML: ($e = o(j)) == null ? void 0 : $e.notes
                              }, null, 10, cf)) : $("", !0)
                            ]),
                            s("div", ff, [
                              ge(T, {
                                "button-class": "bg-gray-50 dark:bg-gray-900",
                                onClose: ye
                              })
                            ])
                          ])
                        ]),
                        Z(ee.$slots, "header", {
                          formInstance: (Te = We()) == null ? void 0 : Te.exposed,
                          model: C.value
                        }),
                        (a(), X(Ce, {
                          ref_key: "formFields",
                          ref: i,
                          key: r.value,
                          modelValue: C.value,
                          "onUpdate:modelValue": m,
                          api: p.value,
                          configureField: ae,
                          configureFormLayout: e.configureFormLayout
                        }, null, 8, ["modelValue", "api", "configureFormLayout"])),
                        Z(ee.$slots, "footer", {
                          formInstance: (tt = We()) == null ? void 0 : tt.exposed,
                          model: C.value
                        })
                      ])
                    ]),
                    s("div", {
                      class: x(o(Ge).buttonsClass)
                    }, [
                      s("div", null, [
                        e.deleteType ? (a(), X(Fe, {
                          key: 0,
                          onDelete: ie
                        })) : $("", !0)
                      ]),
                      s("div", null, [
                        e.showLoading && o(F) ? (a(), X(xe, { key: 0 })) : $("", !0)
                      ]),
                      s("div", mf, [
                        ge(qe, {
                          onClick: ye,
                          disabled: o(F)
                        }, {
                          default: he(() => [
                            pe("Cancel")
                          ]),
                          _: 1
                        }, 8, ["disabled"]),
                        ge(De, {
                          type: "submit",
                          class: "ml-4",
                          disabled: o(F)
                        }, {
                          default: he(() => [
                            pe("Save")
                          ]),
                          _: 1
                        }, 8, ["disabled"])
                      ])
                    ], 2)
                  ], 42, lf)
                ], 2)
              ], 32)
            ], 32)
          ])
        ])) : (a(), u("div", q0, [
          s("p", Q0, [
            pe("Could not create form for unknown "),
            K0,
            pe(" " + M(o(A)), 1)
          ])
        ])),
        ((Ie = h.value) == null ? void 0 : Ie.name) == "ModalLookup" && h.value.ref ? (a(), X(P, {
          key: 3,
          "ref-info": h.value.ref,
          onDone: b
        }, null, 8, ["ref-info"])) : $("", !0)
      ]);
    };
  }
}), hf = /* @__PURE__ */ s("label", {
  for: "confirmDelete",
  class: "ml-2 mr-2 select-none"
}, "confirm", -1), gf = ["onClick"], pf = /* @__PURE__ */ se({
  __name: "ConfirmDelete",
  emits: ["delete"],
  setup(e, { emit: t }) {
    let l = S(!1);
    const n = () => {
      l.value && t("delete");
    }, i = f(() => [
      "select-none inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white",
      l.value ? "cursor-pointer bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500" : "bg-red-400"
    ]);
    return (r, d) => (a(), u(ke, null, [
      xt(s("input", {
        id: "confirmDelete",
        type: "checkbox",
        class: "focus:ring-indigo-500 h-4 w-4 text-indigo-600 rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:ring-offset-black",
        "onUpdate:modelValue": d[0] || (d[0] = (c) => Rn(l) ? l.value = c : l = c)
      }, null, 512), [
        [Gl, o(l)]
      ]),
      hf,
      s("span", Me({
        onClick: Ne(n, ["prevent"]),
        class: o(i)
      }, r.$attrs), [
        Z(r.$slots, "default", {}, () => [
          pe("Delete")
        ])
      ], 16, gf)
    ], 64));
  }
}), yf = {
  class: "flex",
  title: "loading..."
}, bf = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  x: "0px",
  y: "0px",
  width: "24px",
  height: "30px",
  viewBox: "0 0 24 30"
}, wf = /* @__PURE__ */ hl('<rect x="0" y="10" width="4" height="10" fill="#333" opacity="0.2"><animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0s" dur="0.6s" repeatCount="indefinite"></animate></rect><rect x="8" y="10" width="4" height="10" fill="#333" opacity="0.2"><animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate></rect><rect x="16" y="10" width="4" height="10" fill="#333" opacity="0.2"><animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate></rect>', 3), xf = [
  wf
], kf = { class: "ml-2 mt-1 text-gray-400" }, $f = /* @__PURE__ */ se({
  __name: "FormLoading",
  props: {
    icon: { type: Boolean, default: !0 },
    text: { default: "loading..." }
  },
  setup(e) {
    return He("ApiState", void 0), (t, l) => (a(), u("div", yf, [
      e.icon ? (a(), u("svg", bf, xf)) : $("", !0),
      s("span", kf, M(e.text), 1)
    ]));
  }
}), Cf = ["onClick"], _f = {
  key: 3,
  class: "flex justify-between items-center"
}, Lf = { class: "mr-1 select-none" }, Vf = ["onClick"], Mf = /* @__PURE__ */ se({
  __name: "DataGrid",
  props: {
    items: { default: () => [] },
    id: { default: "DataGrid" },
    type: null,
    tableStyle: { default: "stripedRows" },
    selectedColumns: null,
    gridClass: null,
    grid2Class: null,
    grid3Class: null,
    grid4Class: null,
    tableClass: null,
    theadClass: null,
    tbodyClass: null,
    theadRowClass: null,
    theadCellClass: null,
    isSelected: null,
    headerTitle: null,
    headerTitles: null,
    visibleFrom: null,
    rowClass: null,
    rowStyle: null
  },
  emits: ["headerSelected", "rowSelected"],
  setup(e, { emit: t }) {
    const l = e, n = S(), i = S(null), r = (F) => i.value === F, d = Wl(), c = (F) => Object.keys(d).find((E) => E.toLowerCase() == F.toLowerCase() + "-header"), m = (F) => Object.keys(d).find((E) => E.toLowerCase() == F.toLowerCase()), v = f(() => Bl(l.items).filter((F) => !!(d[F] || d[F + "-header"]))), { typeOf: h, typeProperties: y } = et(), g = f(() => Pt(l.type)), b = f(() => h(g.value)), k = f(() => y(b.value));
    function I(F) {
      const E = l.headerTitles && fe(l.headerTitles, F) || F;
      return l.headerTitle ? l.headerTitle(E) : Un(E);
    }
    function R(F) {
      const E = F.toLowerCase();
      return k.value.find((ae) => ae.name.toLowerCase() == E);
    }
    function Q(F) {
      const E = R(F);
      return E != null && E.format ? E.format : (E == null ? void 0 : E.type) == "TimeSpan" || (E == null ? void 0 : E.type) == "TimeOnly" ? { method: "time" } : null;
    }
    const D = {
      xs: "xs:table-cell",
      sm: "sm:table-cell",
      md: "md:table-cell",
      lg: "lg:table-cell",
      xl: "xl:table-cell",
      "2xl": "2xl:table-cell",
      never: ""
    };
    function B(F) {
      const E = l.visibleFrom && fe(l.visibleFrom, F);
      return E && Ee(D[E], (ae) => `hidden ${ae}`);
    }
    const H = f(() => l.gridClass ?? ue.getGridClass(l.tableStyle)), V = f(() => l.grid2Class ?? ue.getGrid2Class(l.tableStyle)), A = f(() => l.grid3Class ?? ue.getGrid3Class(l.tableStyle)), j = f(() => l.grid4Class ?? ue.getGrid4Class(l.tableStyle)), J = f(() => l.tableClass ?? ue.getTableClass(l.tableStyle)), C = f(() => l.tbodyClass ?? ue.getTbodyClass(l.tbodyClass)), N = f(() => l.theadClass ?? ue.getTheadClass(l.tableStyle)), K = f(() => l.theadRowClass ?? ue.getTheadRowClass(l.tableStyle)), z = f(() => l.theadCellClass ?? ue.getTheadCellClass(l.tableStyle));
    function Y(F, E) {
      return l.rowClass ? l.rowClass(F, E) : ue.getTableRowClass(l.tableStyle, E, !!(l.isSelected && l.isSelected(F)), l.isSelected != null);
    }
    function _(F, E) {
      return l.rowStyle ? l.rowStyle(F, E) : void 0;
    }
    const O = f(() => {
      const F = (typeof l.selectedColumns == "string" ? l.selectedColumns.split(",") : l.selectedColumns) || (v.value.length > 0 ? v.value : Bl(l.items)), E = k.value.reduce((ae, ve) => (ae[ve.name.toLowerCase()] = ve.format, ae), {});
      return F.filter((ae) => {
        var ve;
        return ((ve = E[ae.toLowerCase()]) == null ? void 0 : ve.method) != "hidden";
      });
    });
    function p(F, E) {
      t("headerSelected", E, F);
    }
    function G(F, E, ae) {
      t("rowSelected", ae, F);
    }
    return (F, E) => {
      const ae = q("CellFormat"), ve = q("PreviewFormat");
      return e.items.length ? (a(), u("div", {
        key: 0,
        ref_key: "refResults",
        ref: n,
        class: x(o(H))
      }, [
        s("div", {
          class: x(o(V))
        }, [
          s("div", {
            class: x(o(A))
          }, [
            s("div", {
              class: x(o(j))
            }, [
              s("table", {
                class: x(o(J))
              }, [
                s("thead", {
                  class: x(o(N))
                }, [
                  s("tr", {
                    class: x(o(K))
                  }, [
                    (a(!0), u(ke, null, _e(o(O), (ie) => (a(), u("td", {
                      class: x([B(ie), o(z), r(ie) ? "text-gray-900 dark:text-gray-50" : "text-gray-500 dark:text-gray-400"])
                    }, [
                      s("div", {
                        onClick: (de) => p(de, ie)
                      }, [
                        o(d)[ie + "-header"] ? Z(F.$slots, ie + "-header", {
                          key: 0,
                          column: ie
                        }) : c(ie) ? Z(F.$slots, c(ie), {
                          key: 1,
                          column: ie
                        }) : o(d).header ? Z(F.$slots, "header", {
                          key: 2,
                          column: ie,
                          label: I(ie)
                        }) : (a(), u("div", _f, [
                          s("span", Lf, M(I(ie)), 1)
                        ]))
                      ], 8, Cf)
                    ], 2))), 256))
                  ], 2)
                ], 2),
                s("tbody", {
                  class: x(o(C))
                }, [
                  (a(!0), u(ke, null, _e(e.items, (ie, de) => (a(), u("tr", {
                    class: x(Y(ie, de)),
                    style: Kl(_(ie, de)),
                    onClick: (U) => G(U, de, ie)
                  }, [
                    (a(!0), u(ke, null, _e(o(O), (U) => (a(), u("td", {
                      class: x([B(U), o(ue).tableCellClass])
                    }, [
                      o(d)[U] ? Z(F.$slots, U, St(Me({ key: 0 }, ie))) : m(U) ? Z(F.$slots, m(U), St(Me({ key: 1 }, ie))) : R(U) ? (a(), X(ae, {
                        key: 2,
                        type: o(b),
                        propType: R(U),
                        modelValue: ie
                      }, null, 8, ["type", "propType", "modelValue"])) : (a(), X(ve, {
                        key: 3,
                        value: o(fe)(ie, U),
                        format: Q(U)
                      }, null, 8, ["value", "format"]))
                    ], 2))), 256))
                  ], 14, Vf))), 256))
                ], 2)
              ], 2)
            ], 2)
          ], 2)
        ], 2)
      ], 2)) : $("", !0);
    };
  }
}), Sf = se({
  props: {
    type: Object,
    propType: Object,
    modelValue: Object
  },
  setup(e, { attrs: t }) {
    const { typeOf: l } = et();
    function n(i) {
      return i != null && i.format ? i.format : (i == null ? void 0 : i.type) == "TimeSpan" || (i == null ? void 0 : i.type) == "TimeOnly" ? { method: "time" } : null;
    }
    return () => {
      var Q;
      const i = n(e.propType), r = fe(e.modelValue, e.propType.name), d = Object.assign({}, e, t), c = gt("span", { innerHTML: Qt(r, i, d) }), m = zt(r) && Array.isArray(r) ? gt("span", {}, [
        gt("span", { class: "mr-2" }, `${r.length}`),
        c
      ]) : c, v = (Q = e.propType) == null ? void 0 : Q.ref;
      if (!v)
        return m;
      const y = Ze(e.type).find((D) => D.type === v.model);
      if (!y)
        return m;
      const g = fe(e.modelValue, y.name), b = g && v.refLabel && fe(g, v.refLabel);
      if (!b)
        return m;
      const k = l(v.model), I = k == null ? void 0 : k.icon, R = I ? gt(Ss, { image: I, class: "w-5 h-5 mr-1" }) : null;
      return gt("span", { class: "flex", title: `${v.model} ${r}` }, [
        R,
        b
      ]);
    };
  }
}), Af = { key: 0 }, Ff = {
  key: 0,
  class: "mr-2"
}, Tf = ["innerHTML"], If = ["innerHTML"], Df = {
  inheritAttrs: !1
}, Pf = /* @__PURE__ */ se({
  ...Df,
  __name: "PreviewFormat",
  props: {
    value: null,
    format: null,
    includeIcon: { type: Boolean, default: !0 },
    includeCount: { type: Boolean, default: !0 },
    maxFieldLength: { default: 150 },
    maxNestedFields: { default: 2 },
    maxNestedFieldLength: { default: 30 }
  },
  setup(e) {
    const t = e, l = f(() => Array.isArray(t.value));
    return (n, i) => o(zt)(e.value) ? (a(), u("span", Af, [
      e.includeCount && o(l) ? (a(), u("span", Ff, M(e.value.length), 1)) : $("", !0),
      s("span", {
        innerHTML: o(Qt)(e.value, e.format, n.$attrs)
      }, null, 8, Tf)
    ])) : (a(), u("span", {
      key: 1,
      innerHTML: o(Qt)(e.value, e.format, n.$attrs)
    }, null, 8, If));
  }
}), jf = ["innerHTML"], Of = { key: 0 }, Bf = /* @__PURE__ */ s("b", null, null, -1), Ef = { key: 2 }, Rf = /* @__PURE__ */ se({
  __name: "HtmlFormat",
  props: {
    value: null,
    depth: { default: 0 },
    fieldAttrs: null,
    classes: { type: Function, default: (e, t, l, n, i) => n }
  },
  setup(e) {
    const t = e, l = f(() => $t(t.value)), n = f(() => Array.isArray(t.value)), i = (m) => Un(m), r = (m) => t.fieldAttrs ? t.fieldAttrs(m) : null, d = f(() => Bl(t.value)), c = (m) => m ? Object.keys(m).map((v) => ({ key: i(v), val: m[v] })) : [];
    return (m, v) => {
      const h = q("HtmlFormat", !0);
      return a(), u("div", {
        class: x(e.depth == 0 ? "prose html-format" : "")
      }, [
        o(l) ? (a(), u("div", {
          key: 0,
          innerHTML: o(Qt)(e.value)
        }, null, 8, jf)) : o(n) ? (a(), u("div", {
          key: 1,
          class: x(e.classes("array", "div", e.depth, o(ue).gridClass))
        }, [
          o($t)(e.value[0]) ? (a(), u("div", Of, "[ " + M(e.value.join(", ")) + " ]", 1)) : (a(), u("div", {
            key: 1,
            class: x(e.classes("array", "div", e.depth, o(ue).grid2Class))
          }, [
            s("div", {
              class: x(e.classes("array", "div", e.depth, o(ue).grid3Class))
            }, [
              s("div", {
                class: x(e.classes("array", "div", e.depth, o(ue).grid4Class))
              }, [
                s("table", {
                  class: x(e.classes("object", "table", e.depth, o(ue).tableClass))
                }, [
                  s("thead", {
                    class: x(e.classes("array", "thead", e.depth, o(ue).theadClass))
                  }, [
                    s("tr", null, [
                      (a(!0), u(ke, null, _e(o(d), (y) => (a(), u("th", {
                        class: x(e.classes("array", "th", e.depth, o(ue).theadCellClass + " whitespace-nowrap"))
                      }, [
                        Bf,
                        pe(M(i(y)), 1)
                      ], 2))), 256))
                    ])
                  ], 2),
                  s("tbody", null, [
                    (a(!0), u(ke, null, _e(e.value, (y, g) => (a(), u("tr", {
                      class: x(e.classes("array", "tr", e.depth, g % 2 == 0 ? "bg-white" : "bg-gray-50", g))
                    }, [
                      (a(!0), u(ke, null, _e(o(d), (b) => (a(), u("td", {
                        class: x(e.classes("array", "td", e.depth, o(ue).tableCellClass))
                      }, [
                        ge(h, Me({
                          value: y[b],
                          "field-attrs": e.fieldAttrs,
                          depth: e.depth + 1,
                          classes: e.classes
                        }, r(b)), null, 16, ["value", "field-attrs", "depth", "classes"])
                      ], 2))), 256))
                    ], 2))), 256))
                  ])
                ], 2)
              ], 2)
            ], 2)
          ], 2))
        ], 2)) : (a(), u("div", Ef, [
          s("table", {
            class: x(e.classes("object", "table", e.depth, "table-object"))
          }, [
            (a(!0), u(ke, null, _e(c(e.value), (y) => (a(), u("tr", {
              class: x(e.classes("object", "tr", e.depth, ""))
            }, [
              s("th", {
                class: x(e.classes("object", "th", e.depth, "align-top py-2 px-4 text-left text-sm font-medium tracking-wider whitespace-nowrap"))
              }, M(y.key), 3),
              s("td", {
                class: x(e.classes("object", "td", e.depth, "align-top py-2 px-4 text-sm"))
              }, [
                ge(h, Me({
                  value: y.val,
                  "field-attrs": e.fieldAttrs,
                  depth: e.depth + 1,
                  classes: e.classes
                }, r(y.key)), null, 16, ["value", "field-attrs", "depth", "classes"])
              ], 2)
            ], 2))), 256))
          ], 2)
        ]))
      ], 2);
    };
  }
}), Hf = { class: "absolute top-0 right-0 pt-4 pr-4" }, Nf = /* @__PURE__ */ s("span", { class: "sr-only" }, "Close", -1), zf = /* @__PURE__ */ s("svg", {
  class: "h-6 w-6",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ s("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1), Uf = [
  Nf,
  zf
], qf = /* @__PURE__ */ se({
  __name: "CloseButton",
  props: {
    buttonClass: { default: "bg-white dark:bg-black" }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    return (l, n) => (a(), u("div", Hf, [
      s("button", {
        type: "button",
        onClick: n[0] || (n[0] = (i) => l.$emit("close")),
        class: x([e.buttonClass, "rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:ring-offset-black"])
      }, Uf, 2)
    ]));
  }
}), Qf = ["id", "aria-labelledby"], Kf = /* @__PURE__ */ s("div", { class: "fixed inset-0" }, null, -1), Gf = { class: "fixed inset-0 overflow-hidden" }, Wf = { class: "flex h-full flex-col bg-white dark:bg-black shadow-xl" }, Zf = { class: "flex min-h-0 flex-1 flex-col overflow-auto" }, Jf = { class: "flex-1" }, Xf = { class: "bg-gray-50 dark:bg-gray-900 px-4 py-6 sm:px-6" }, Yf = { class: "flex items-start justify-between space-x-3" }, em = { class: "space-y-1" }, tm = ["id"], lm = {
  key: 1,
  class: "text-sm text-gray-500"
}, nm = { class: "flex h-7 items-center" }, sm = { class: "flex-shrink-0 border-t border-gray-200 dark:border-gray-700 px-4 py-5 sm:px-6" }, om = /* @__PURE__ */ se({
  __name: "SlideOver",
  props: {
    id: { default: "SlideOver" },
    title: null,
    contentClass: { default: "relative mt-6 flex-1 px-4 sm:px-6" }
  },
  emits: ["done"],
  setup(e, { emit: t }) {
    const l = S(!1), n = S(""), i = {
      entering: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-full", to: "translate-x-0" },
      leaving: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-0", to: "translate-x-full" }
    };
    Dt(l, () => {
      At(i, n, l.value), l.value || setTimeout(() => t("done"), 700);
    }), l.value = !0;
    const r = () => l.value = !1, d = (c) => {
      c.key === "Escape" && r();
    };
    return at(() => window.addEventListener("keydown", d)), Kt(() => window.removeEventListener("keydown", d)), (c, m) => {
      const v = q("CloseButton");
      return a(), u("div", {
        id: e.id,
        class: "relative z-10",
        "aria-labelledby": e.id + "-title",
        role: "dialog",
        "aria-modal": "true"
      }, [
        Kf,
        s("div", Gf, [
          s("div", {
            onMousedown: r,
            class: "absolute inset-0 overflow-hidden"
          }, [
            s("div", {
              onMousedown: m[0] || (m[0] = Ne(() => {
              }, ["stop"])),
              class: "pointer-events-none fixed inset-y-0 right-0 flex pl-10"
            }, [
              s("div", {
                class: x(["pointer-events-auto w-screen xl:max-w-3xl md:max-w-xl max-w-lg", n.value])
              }, [
                s("div", Wf, [
                  s("div", Zf, [
                    s("div", Jf, [
                      s("div", Xf, [
                        s("div", Yf, [
                          s("div", em, [
                            e.title ? (a(), u("h2", {
                              key: 0,
                              class: "text-lg font-medium text-gray-900 dark:text-gray-50",
                              id: e.id + "-title"
                            }, M(e.title), 9, tm)) : $("", !0),
                            c.$slots.subtitle ? (a(), u("p", lm, [
                              Z(c.$slots, "subtitle")
                            ])) : $("", !0)
                          ]),
                          s("div", nm, [
                            ge(v, {
                              "button-class": "bg-gray-50 dark:bg-gray-900",
                              onClose: r
                            })
                          ])
                        ])
                      ]),
                      s("div", {
                        class: x(e.contentClass)
                      }, [
                        Z(c.$slots, "default")
                      ], 2)
                    ])
                  ]),
                  s("div", sm, [
                    Z(c.$slots, "footer")
                  ])
                ])
              ], 2)
            ], 32)
          ], 32)
        ])
      ], 8, Qf);
    };
  }
}), am = ["id", "data-transition-for", "aria-labelledby"], im = { class: "fixed inset-0 z-10 overflow-y-auto" }, rm = { class: "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0" }, um = /* @__PURE__ */ s("span", { class: "sr-only" }, "Close", -1), dm = /* @__PURE__ */ s("svg", {
  class: "h-6 w-6",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ s("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1), cm = [
  um,
  dm
], fm = /* @__PURE__ */ se({
  __name: "ModalDialog",
  props: {
    id: { default: "ModalDialog" },
    modalClass: { default: Ql.modalClass },
    sizeClass: { default: Ql.sizeClass }
  },
  emits: ["done"],
  setup(e, { emit: t }) {
    const l = S(!1), n = S(""), i = {
      entering: { cls: "ease-out duration-300", from: "opacity-0", to: "opacity-100" },
      leaving: { cls: "ease-in duration-200", from: "opacity-100", to: "opacity-0" }
    }, r = S(""), d = {
      entering: { cls: "ease-out duration-300", from: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95", to: "opacity-100 translate-y-0 sm:scale-100" },
      leaving: { cls: "ease-in duration-200", from: "opacity-100 translate-y-0 sm:scale-100", to: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" }
    };
    Dt(l, () => {
      At(i, n, l.value), At(d, r, l.value), l.value || setTimeout(() => t("done"), 200);
    }), l.value = !0;
    const c = () => l.value = !1;
    Gt("ModalProvider", {
      openModal: y
    });
    const v = S(), h = S();
    function y(k, I) {
      v.value = k, h.value = I;
    }
    async function g(k) {
      h.value && h.value(k), v.value = void 0, h.value = void 0;
    }
    const b = (k) => {
      k.key === "Escape" && c();
    };
    return at(() => window.addEventListener("keydown", b)), Kt(() => window.removeEventListener("keydown", b)), (k, I) => {
      var Q;
      const R = q("ModalLookup");
      return a(), u("div", {
        id: e.id,
        "data-transition-for": e.id,
        onMousedown: c,
        class: "relative z-10",
        "aria-labelledby": `${e.id}-title`,
        role: "dialog",
        "aria-modal": "true"
      }, [
        s("div", {
          class: x(["fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity", n.value])
        }, null, 2),
        s("div", im, [
          s("div", rm, [
            s("div", {
              class: x([e.modalClass, e.sizeClass, r.value]),
              onMousedown: I[0] || (I[0] = Ne(() => {
              }, ["stop"]))
            }, [
              s("div", null, [
                s("div", { class: "hidden sm:block absolute top-0 right-0 pt-4 pr-4 z-10" }, [
                  s("button", {
                    type: "button",
                    onClick: c,
                    class: "bg-white dark:bg-black rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:ring-offset-black"
                  }, cm)
                ]),
                Z(k.$slots, "default")
              ])
            ], 34)
          ])
        ]),
        ((Q = v.value) == null ? void 0 : Q.name) == "ModalLookup" && v.value.ref ? (a(), X(R, {
          key: 0,
          "ref-info": v.value.ref,
          onDone: g
        }, null, 8, ["ref-info"])) : $("", !0)
      ], 40, am);
    };
  }
}), mm = {
  class: "pt-2 overflow-auto",
  style: { "min-height": "620px" }
}, vm = { class: "mt-3 pl-5 flex flex-wrap items-center" }, hm = { class: "hidden sm:block text-xl leading-6 font-medium text-gray-900 dark:text-gray-50 mr-3" }, gm = { class: "hidden md:inline" }, pm = { class: "flex pb-1 sm:pb-0" }, ym = ["title"], bm = /* @__PURE__ */ s("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ s("g", {
    "stroke-width": "1.5",
    fill: "none"
  }, [
    /* @__PURE__ */ s("path", {
      d: "M9 3H3.6a.6.6 0 0 0-.6.6v16.8a.6.6 0 0 0 .6.6H9M9 3v18M9 3h6M9 21h6m0-18h5.4a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H15m0-18v18",
      stroke: "currentColor"
    })
  ])
], -1), wm = [
  bm
], xm = ["disabled"], km = /* @__PURE__ */ s("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ s("path", {
    d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6l6 6zM6 6h2v12H6z",
    fill: "currentColor"
  })
], -1), $m = [
  km
], Cm = ["disabled"], _m = /* @__PURE__ */ s("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ s("path", {
    d: "M15.41 7.41L14 6l-6 6l6 6l1.41-1.41L10.83 12z",
    fill: "currentColor"
  })
], -1), Lm = [
  _m
], Vm = ["disabled"], Mm = /* @__PURE__ */ s("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ s("path", {
    d: "M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z",
    fill: "currentColor"
  })
], -1), Sm = [
  Mm
], Am = ["disabled"], Fm = /* @__PURE__ */ s("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ s("path", {
    d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6l-6-6zM16 6h2v12h-2z",
    fill: "currentColor"
  })
], -1), Tm = [
  Fm
], Im = {
  key: 0,
  class: "flex pb-1 sm:pb-0"
}, Dm = { class: "px-4 text-lg text-black dark:text-white" }, Pm = { key: 0 }, jm = { key: 1 }, Om = /* @__PURE__ */ s("span", { class: "hidden xl:inline" }, " Showing Results ", -1), Bm = { key: 2 }, Em = {
  key: 1,
  class: "pl-2"
}, Rm = /* @__PURE__ */ s("svg", {
  class: "w-5 h-5",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ s("path", {
    fill: "currentColor",
    d: "M6.78 2.72a.75.75 0 0 1 0 1.06L4.56 6h8.69a7.75 7.75 0 1 1-7.75 7.75a.75.75 0 0 1 1.5 0a6.25 6.25 0 1 0 6.25-6.25H4.56l2.22 2.22a.75.75 0 1 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.5a.75.75 0 0 1 1.06 0Z"
  })
], -1), Hm = [
  Rm
], Nm = { class: "flex pb-1 sm:pb-0" }, zm = {
  key: 0,
  class: "pl-2"
}, Um = /* @__PURE__ */ s("svg", {
  class: "flex-none w-5 h-5 mr-2 text-gray-400 dark:text-gray-500 group-hover:text-gray-500",
  "aria-hidden": "true",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, [
  /* @__PURE__ */ s("path", {
    "fill-rule": "evenodd",
    d: "M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z",
    "clip-rule": "evenodd"
  })
], -1), qm = { class: "mr-1" }, Qm = {
  key: 0,
  class: "h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-gray-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, Km = /* @__PURE__ */ s("path", {
  "fill-rule": "evenodd",
  d: "M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z",
  "clip-rule": "evenodd"
}, null, -1), Gm = [
  Km
], Wm = {
  key: 1,
  class: "h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-gray-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, Zm = /* @__PURE__ */ s("path", {
  "fill-rule": "evenodd",
  d: "M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z",
  "clip-rule": "evenodd"
}, null, -1), Jm = [
  Zm
], Xm = { key: 1 }, Ym = { key: 4 }, e1 = { key: 0 }, t1 = {
  key: 0,
  class: "cursor-pointer flex justify-between items-center hover:text-gray-900 dark:hover:text-gray-50"
}, l1 = { class: "mr-1 select-none" }, n1 = {
  key: 1,
  class: "flex justify-between items-center"
}, s1 = { class: "mr-1 select-none" }, o1 = /* @__PURE__ */ se({
  __name: "ModalLookup",
  props: {
    id: { default: "ModalLookup" },
    refInfo: null,
    skip: { default: 0 },
    prefs: null,
    selectedColumns: null,
    allowFiltering: { type: [Boolean, null], default: !0 },
    showPreferences: { type: [Boolean, null], default: !0 },
    showPagingNav: { type: [Boolean, null], default: !0 },
    showPagingInfo: { type: [Boolean, null], default: !0 },
    showResetPreferences: { type: [Boolean, null], default: !0 },
    showFiltersView: { type: [Boolean, null], default: !0 },
    toolbarButtonClass: null,
    canFilter: null
  },
  emits: ["done"],
  setup(e, { emit: t }) {
    const l = e, n = Wl(), { config: i } = _t(), { metadataApi: r, filterDefinitions: d } = et(), c = He("client"), m = i.value.storage, v = f(() => l.toolbarButtonClass ?? ue.toolbarButtonClass), h = f(() => d.value), y = 25, g = S({ take: y }), b = S(new Ye()), k = S(l.skip), I = S(!1), R = S(), Q = (T) => typeof T == "string" ? T.split(",") : T || [];
    function D(T, P) {
      return ue.getTableRowClass("fullWidth", P, !1, !0);
    }
    function B() {
      let T = Q(l.selectedColumns);
      return T.length > 0 ? T : [];
    }
    const H = f(() => rt(l.refInfo.model)), V = f(() => {
      let P = B().map((ce) => ce.toLowerCase());
      const te = Ze(H.value);
      return P.length > 0 ? P.map((ce) => te.find((Le) => Le.name.toLowerCase() === ce)).filter((ce) => ce != null) : te;
    }), A = f(() => {
      let T = V.value.map((te) => te.name), P = Q(g.value.selectedColumns).map((te) => te.toLowerCase());
      return P.length > 0 ? T.filter((te) => P.includes(te.toLowerCase())) : T;
    }), j = f(() => g.value.take ?? y), J = f(() => b.value.response ? fe(b.value.response, "results") : []), C = f(() => {
      var T;
      return ((T = b.value.response) == null ? void 0 : T.total) ?? J.value.length ?? 0;
    }), N = f(() => k.value > 0), K = f(() => k.value > 0), z = f(() => J.value.length >= j.value), Y = f(() => J.value.length >= j.value), _ = S([]), O = f(() => _.value.some((T) => T.settings.filters.length > 0 || !!T.settings.sort)), p = f(() => _.value.map((T) => T.settings.filters.length).reduce((T, P) => T + P, 0)), G = f(() => Zt(H.value)), F = f(() => {
      var T;
      return (T = r.value) == null ? void 0 : T.operations.find((P) => {
        var te;
        return ((te = P.dataModel) == null ? void 0 : te.name) == l.refInfo.model && je.isAnyQuery(P);
      });
    }), E = S(), ae = S(!1), ve = S(), ie = () => `${l.id}/ApiPrefs/${l.refInfo.model}`, de = (T) => `Column/${l.id}:${l.refInfo.model}.${T}`;
    async function U(T) {
      k.value += T, k.value < 0 && (k.value = 0);
      var P = Math.floor(C.value / j.value) * j.value;
      k.value > P && (k.value = P), await Fe();
    }
    async function Ve(T, P) {
      t("done", T);
    }
    function Ae() {
      t("done", null);
    }
    function ye(T, P) {
      var ce, Le, Be;
      let te = P.target;
      if ((te == null ? void 0 : te.tagName) !== "TD") {
        let Ue = (ce = te == null ? void 0 : te.closest("TABLE")) == null ? void 0 : ce.getBoundingClientRect(), $e = _.value.find((Te) => Te.name.toLowerCase() == T.toLowerCase());
        if ($e && Ue) {
          let Te = 318, Ie = (((Le = P.target) == null ? void 0 : Le.tagName) === "DIV" ? P.target : (Be = P.target) == null ? void 0 : Be.closest("DIV")).getBoundingClientRect(), Ke = Te + 25;
          ve.value = {
            column: $e,
            topLeft: {
              x: Math.max(Math.floor(Ie.x + 25), Ke),
              y: Math.floor(115)
            }
          };
        }
      }
    }
    function ze() {
      ve.value = null;
    }
    async function ee(T) {
      var te;
      let P = (te = ve.value) == null ? void 0 : te.column;
      P && (P.settings = T, m.setItem(de(P.name), JSON.stringify(P.settings)), await Fe()), ve.value = null;
    }
    async function oe(T) {
      m.setItem(de(T.name), JSON.stringify(T.settings)), await Fe();
    }
    async function Ce(T) {
      ae.value = !1, g.value = T, m.setItem(ie(), JSON.stringify(T)), await Fe();
    }
    async function Fe() {
      await xe(qe());
    }
    async function xe(T) {
      const P = F.value;
      if (!P) {
        console.error(`No Query API was found for ${l.refInfo.model}`);
        return;
      }
      let te = Ut(P, T), ce = zn((Ue) => {
        b.value.response = b.value.error = void 0, I.value = Ue;
      }), Le = await c.api(te);
      ce(), vl(() => b.value = Le);
      let Be = fe(Le.response, "results") || [];
      !Le.succeeded || Be.label == 0;
    }
    function qe() {
      let T = {
        include: "total",
        take: j.value
      }, P = Q(g.value.selectedColumns || l.selectedColumns);
      if (P.length > 0) {
        let ce = G.value;
        ce && P.includes(ce.name) && (P = [ce.name, ...P]), T.fields = P.join(",");
      }
      let te = [];
      return _.value.forEach((ce) => {
        ce.settings.sort && te.push((ce.settings.sort === "DESC" ? "-" : "") + ce.name), ce.settings.filters.forEach((Le) => {
          let Be = Le.key.replace("%", ce.name);
          T[Be] = Le.value;
        });
      }), typeof T.skip > "u" && k.value > 0 && (T.skip = k.value), te.length > 0 && (T.orderBy = te.join(",")), T;
    }
    async function De() {
      _.value.forEach((T) => {
        T.settings = { filters: [] }, m.removeItem(de(T.name));
      }), await Fe();
    }
    return at(async () => {
      const T = l.prefs || fl(m.getItem(ie()));
      T && (g.value = T), _.value = V.value.map((P) => ({
        name: P.name,
        type: P.type,
        meta: P,
        settings: Object.assign(
          {
            filters: []
          },
          fl(m.getItem(de(P.name)))
        )
      })), isNaN(l.skip) || (k.value = l.skip), await Fe();
    }), (T, P) => {
      const te = q("ErrorSummary"), ce = q("Loading"), Le = q("SettingsIcons"), Be = q("DataGrid"), Ue = q("ModalDialog");
      return a(), u(ke, null, [
        e.refInfo ? (a(), X(Ue, {
          key: 0,
          ref_key: "modalDialog",
          ref: E,
          id: e.id,
          onDone: Ae
        }, {
          default: he(() => [
            s("div", mm, [
              s("div", vm, [
                s("h3", hm, [
                  pe(" Select "),
                  s("span", gm, M(o(Oe)(e.refInfo.model)), 1)
                ]),
                s("div", pm, [
                  e.showPreferences ? (a(), u("button", {
                    key: 0,
                    type: "button",
                    class: "pl-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400",
                    title: `${e.refInfo.model} Preferences`,
                    onClick: P[0] || (P[0] = ($e) => ae.value = !ae.value)
                  }, wm, 8, ym)) : $("", !0),
                  e.showPagingNav ? (a(), u("button", {
                    key: 1,
                    type: "button",
                    class: x(["pl-2", o(N) ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                    title: "First page",
                    disabled: !o(N),
                    onClick: P[1] || (P[1] = ($e) => U(-o(C)))
                  }, $m, 10, xm)) : $("", !0),
                  e.showPagingNav ? (a(), u("button", {
                    key: 2,
                    type: "button",
                    class: x(["pl-2", o(K) ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                    title: "Previous page",
                    disabled: !o(K),
                    onClick: P[2] || (P[2] = ($e) => U(-o(j)))
                  }, Lm, 10, Cm)) : $("", !0),
                  e.showPagingNav ? (a(), u("button", {
                    key: 3,
                    type: "button",
                    class: x(["pl-2", o(z) ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                    title: "Next page",
                    disabled: !o(z),
                    onClick: P[3] || (P[3] = ($e) => U(o(j)))
                  }, Sm, 10, Vm)) : $("", !0),
                  e.showPagingNav ? (a(), u("button", {
                    key: 4,
                    type: "button",
                    class: x(["pl-2", o(Y) ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                    title: "Last page",
                    disabled: !o(Y),
                    onClick: P[4] || (P[4] = ($e) => U(o(C)))
                  }, Tm, 10, Am)) : $("", !0)
                ]),
                e.showPagingInfo ? (a(), u("div", Im, [
                  s("div", Dm, [
                    I.value ? (a(), u("span", Pm, "Querying...")) : $("", !0),
                    o(J).length ? (a(), u("span", jm, [
                      Om,
                      pe(" " + M(k.value + 1) + " - " + M(Math.min(k.value + o(J).length, o(C))) + " ", 1),
                      s("span", null, " of " + M(o(C)), 1)
                    ])) : b.value.completed ? (a(), u("span", Bm, "No Results")) : $("", !0)
                  ])
                ])) : $("", !0),
                o(O) && e.showResetPreferences ? (a(), u("div", Em, [
                  s("button", {
                    type: "button",
                    onClick: De,
                    title: "Reset Preferences & Filters",
                    class: x(o(v))
                  }, Hm, 2)
                ])) : $("", !0),
                s("div", Nm, [
                  e.showFiltersView && o(p) > 0 ? (a(), u("div", zm, [
                    s("button", {
                      type: "button",
                      onClick: P[5] || (P[5] = ($e) => R.value = R.value == "filters" ? null : "filters"),
                      class: x(o(v)),
                      "aria-expanded": "false"
                    }, [
                      Um,
                      s("span", qm, M(o(p)) + " " + M(o(p) == 1 ? "Filter" : "Filters"), 1),
                      R.value != "filters" ? (a(), u("svg", Qm, Gm)) : (a(), u("svg", Wm, Jm))
                    ], 2)
                  ])) : $("", !0)
                ])
              ]),
              R.value == "filters" ? (a(), X(wn, {
                key: 0,
                class: "border-y border-gray-200 dark:border-gray-800 py-8 my-2",
                definitions: o(h),
                columns: _.value,
                onDone: P[6] || (P[6] = ($e) => R.value = null),
                onChange: oe
              }, null, 8, ["definitions", "columns"])) : $("", !0),
              ve.value ? (a(), u("div", Xm, [
                ge(bn, {
                  definitions: o(h),
                  column: ve.value.column,
                  "top-left": ve.value.topLeft,
                  onDone: ze,
                  onSave: ee
                }, null, 8, ["definitions", "column", "top-left"])
              ])) : $("", !0),
              b.value.error ? (a(), X(te, {
                key: 2,
                status: b.value.error
              }, null, 8, ["status"])) : I.value ? (a(), X(ce, { key: 3 })) : (a(), u("div", Ym, [
                o(J).length ? (a(), u("div", e1, [
                  ge(Be, {
                    id: e.id,
                    items: o(J),
                    type: e.refInfo.model,
                    "selected-columns": o(A),
                    onFiltersChanged: Fe,
                    tableStyle: "fullWidth",
                    rowClass: D,
                    onRowSelected: Ve,
                    onHeaderSelected: ye
                  }, Zl({
                    header: he(({ column: $e, label: Te }) => {
                      var tt;
                      return [
                        e.allowFiltering && (!l.canFilter || l.canFilter($e)) ? (a(), u("div", t1, [
                          s("span", l1, M(Te), 1),
                          ge(Le, {
                            column: _.value.find((Ie) => Ie.name.toLowerCase() === $e.toLowerCase()),
                            "is-open": ((tt = ve.value) == null ? void 0 : tt.column.name) === $e
                          }, null, 8, ["column", "is-open"])
                        ])) : (a(), u("div", n1, [
                          s("span", s1, M(Te), 1)
                        ]))
                      ];
                    }),
                    _: 2
                  }, [
                    _e(Object.keys(o(n)), ($e) => ({
                      name: $e,
                      fn: he((Te) => [
                        Z(T.$slots, $e, St(dl(Te)))
                      ])
                    }))
                  ]), 1032, ["id", "items", "type", "selected-columns"])
                ])) : $("", !0)
              ]))
            ])
          ]),
          _: 3
        }, 8, ["id"])) : $("", !0),
        ae.value ? (a(), X(xn, {
          key: 1,
          columns: o(V),
          prefs: g.value,
          onDone: P[7] || (P[7] = ($e) => ae.value = !1),
          onSave: Ce
        }, null, 8, ["columns", "prefs"])) : $("", !0)
      ], 64);
    };
  }
}), a1 = { class: "sm:hidden" }, i1 = ["for"], r1 = ["id", "name"], u1 = ["value"], d1 = { class: "hidden sm:block" }, c1 = { class: "border-b border-gray-200" }, f1 = {
  class: "-mb-px flex",
  "aria-label": "Tabs"
}, m1 = ["onClick"], v1 = /* @__PURE__ */ se({
  __name: "Tabs",
  props: {
    tabs: null,
    id: { default: "tabs" },
    param: { default: "tab" },
    label: { type: Function, default: (e) => Oe(e) },
    selected: null,
    tabClass: null,
    bodyClass: { default: "p-4" },
    url: { type: Boolean, default: !0 }
  },
  setup(e) {
    const t = e, l = f(() => Object.keys(t.tabs)), n = (h) => t.label ? t.label(h) : Oe(h), i = f(() => t.id || "tabs"), r = f(() => t.param || "tab"), d = S();
    function c(h) {
      if (d.value = h, t.url) {
        const y = l.value[0];
        Xl({ tab: h === y ? void 0 : h });
      }
    }
    function m(h) {
      return d.value === h;
    }
    const v = f(() => `${100 / Object.keys(t.tabs).length}%`);
    return at(() => {
      if (d.value = Object.keys(t.tabs)[0], t.url) {
        const y = Ol(location.search)[r.value];
        y && (d.value = y);
      }
    }), (h, y) => (a(), u("div", null, [
      s("div", a1, [
        s("label", {
          for: o(i),
          class: "sr-only"
        }, "Select a tab", 8, i1),
        s("select", {
          id: o(i),
          name: o(i),
          class: "block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500",
          onChange: y[0] || (y[0] = (g) => {
            var b;
            return c((b = g.target) == null ? void 0 : b.value);
          })
        }, [
          (a(!0), u(ke, null, _e(o(l), (g) => (a(), u("option", {
            key: g,
            value: g
          }, M(n(g)), 9, u1))), 128))
        ], 40, r1)
      ]),
      s("div", d1, [
        s("div", c1, [
          s("nav", f1, [
            (a(!0), u(ke, null, _e(o(l), (g) => (a(), u("a", {
              href: "#",
              onClick: Ne((b) => c(g), ["prevent"]),
              style: Kl({ width: o(v) }),
              class: x([m(g) ? "border-indigo-500 text-indigo-600 py-4 px-1 text-center border-b-2 font-medium text-sm" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 py-4 px-1 text-center border-b-2 font-medium text-sm", e.tabClass])
            }, M(n(g)), 15, m1))), 256))
          ])
        ])
      ]),
      s("div", {
        class: x(e.bodyClass)
      }, [
        (a(), X(Xs(e.tabs[d.value])))
      ], 2)
    ]));
  }
}), h1 = /* @__PURE__ */ s("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-4 w-4 text-gray-400",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32"
}, [
  /* @__PURE__ */ s("path", {
    fill: "currentColor",
    d: "M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"
  })
], -1), g1 = [
  h1
], p1 = /* @__PURE__ */ s("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-4 w-4 text-indigo-600",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32"
}, [
  /* @__PURE__ */ s("path", {
    fill: "currentColor",
    d: "M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"
  })
], -1), y1 = [
  p1
], b1 = /* @__PURE__ */ se({
  __name: "DarkModeToggle",
  setup(e) {
    const t = typeof document < "u" ? document.querySelector("html") : null;
    let l = S(t == null ? void 0 : t.classList.contains("dark"));
    function n() {
      l.value ? t == null || t.classList.remove("dark") : t == null || t.classList.add("dark"), l.value = !l.value, localStorage.setItem("color-scheme", l.value ? "dark" : "light");
    }
    return (i, r) => (a(), u("button", {
      type: "button",
      class: "bg-gray-200 dark:bg-gray-700 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:ring-offset-black",
      role: "switch",
      "aria-checked": "false",
      onClick: r[0] || (r[0] = (d) => n())
    }, [
      s("span", {
        class: x(`${o(l) ? "translate-x-0" : "translate-x-5"} pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white dark:bg-black shadow transform ring-0 transition ease-in-out duration-200`)
      }, [
        s("span", {
          class: x(`${o(l) ? "opacity-100 ease-in duration-200" : "opacity-0 ease-out duration-100"} absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`),
          "aria-hidden": "true"
        }, g1, 2),
        s("span", {
          class: x(`${o(l) ? "opacity-0 ease-out duration-100" : "opacity-100 ease-in duration-200"} absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`),
          "aria-hidden": "true"
        }, y1, 2)
      ], 2)
    ]));
  }
}), w1 = { key: 0 }, x1 = {
  key: 1,
  class: "min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8"
}, k1 = { class: "sm:mx-auto sm:w-full sm:max-w-md" }, $1 = { class: "mt-6 text-center text-3xl font-extrabold text-gray-900" }, C1 = {
  key: 0,
  class: "mt-4 text-center text-sm text-gray-600"
}, _1 = { class: "relative z-0 inline-flex shadow-sm rounded-md" }, L1 = ["onClick"], V1 = { class: "mt-8 sm:mx-auto sm:w-full sm:max-w-md" }, M1 = { class: "bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10" }, S1 = ["onSubmit"], A1 = { class: "mt-8" }, F1 = {
  key: 1,
  class: "mt-6"
}, T1 = /* @__PURE__ */ hl('<div class="relative"><div class="absolute inset-0 flex items-center"><div class="w-full border-t border-gray-300"></div></div><div class="relative flex justify-center text-sm"><span class="px-2 bg-white text-gray-500"> Or continue with </span></div></div>', 1), I1 = { class: "mt-6 grid grid-cols-3 gap-3" }, D1 = ["href", "title"], P1 = {
  key: 1,
  class: "h-5 w-5 text-gray-700",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 32"
}, j1 = /* @__PURE__ */ s("path", {
  d: "M16 8a5 5 0 1 0 5 5a5 5 0 0 0-5-5z",
  fill: "currentColor"
}, null, -1), O1 = /* @__PURE__ */ s("path", {
  d: "M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2zm7.992 22.926A5.002 5.002 0 0 0 19 20h-6a5.002 5.002 0 0 0-4.992 4.926a12 12 0 1 1 15.985 0z",
  fill: "currentColor"
}, null, -1), B1 = [
  j1,
  O1
], E1 = /* @__PURE__ */ se({
  __name: "SignIn",
  props: {
    provider: null,
    title: { default: "Sign In" },
    tabs: { type: [Boolean, String], default: !0 },
    oauth: { type: [Boolean, String], default: !0 }
  },
  emits: ["login"],
  setup(e, { emit: t }) {
    const l = e, { getMetadata: n, createDto: i } = et(), r = _l(), { signIn: d } = yn(), c = n({ assert: !0 }), m = c.plugins.auth, v = document.baseURI, h = c.app.baseUrl, y = S(i("Authenticate")), g = S(new Ye()), b = S(l.provider);
    at(() => {
      m == null || m.authProviders.map((C) => C.formLayout).filter((C) => C).forEach((C) => C.forEach((N) => y.value[N.id] = ""));
    });
    const k = f(() => (m == null ? void 0 : m.authProviders.filter((C) => C.formLayout)) || []), I = f(() => k.value[0] || {}), R = f(() => k.value[Math.max(k.value.length - 1, 0)] || {}), Q = f(() => (b.value ? m == null ? void 0 : m.authProviders.find((C) => C.name === b.value) : null) ?? I.value), D = (C) => C === !1 || C === "false";
    function B(C) {
      return C.label || C.navItem && C.navItem.label;
    }
    const H = f(() => {
      var C;
      return (((C = Q.value) == null ? void 0 : C.formLayout) || []).map((N) => {
        var K, z;
        return Object.assign({}, N, {
          type: (K = N.type) == null ? void 0 : K.toLowerCase(),
          autocomplete: N.autocomplete || (((z = N.type) == null ? void 0 : z.toLowerCase()) === "password" ? "current-password" : void 0) || (N.id.toLowerCase() === "username" ? "username" : void 0),
          css: Object.assign({ field: "col-span-12" }, N.css)
        });
      });
    }), V = f(() => D(l.oauth) ? [] : (m == null ? void 0 : m.authProviders.filter((C) => C.type === "oauth")) || []), A = f(() => {
      let C = ho(
        m == null ? void 0 : m.authProviders.filter((K) => K.formLayout && K.formLayout.length > 0),
        (K, z) => {
          let Y = B(z) || nt(z.name);
          K[Y] = z.name === I.value.name ? "" : z.name;
        }
      );
      const N = Q.value;
      return N && D(l.tabs) && (C = { [B(N) || nt(N.name)]: N }), C;
    }), j = f(() => {
      let C = H.value.map((N) => N.id).filter((N) => N);
      return g.value.summaryMessage(C);
    });
    async function J() {
      if (y.value.provider = Q.value.name, g.value = await r.api(y.value), g.value.succeeded) {
        const C = g.value.response;
        d(C), t("login", C), g.value = new Ye(), y.value = i("Authenticate");
      }
    }
    return (C, N) => {
      const K = q("ErrorSummary"), z = q("AutoFormFields"), Y = q("PrimaryButton"), _ = q("Icon"), O = Ys("href");
      return o(m) ? (a(), u("div", x1, [
        s("div", k1, [
          s("h2", $1, M(e.title), 1),
          Object.keys(o(A)).length > 1 ? (a(), u("p", C1, [
            s("span", _1, [
              (a(!0), u(ke, null, _e(o(A), (p, G) => xt((a(), u("a", {
                onClick: (F) => b.value = p,
                class: x([
                  p === "" || p === o(I).name ? "rounded-l-md" : p === o(R).name ? "rounded-r-md -ml-px" : "-ml-px",
                  b.value === p ? "z-10 outline-none ring-1 ring-indigo-500 border-indigo-500" : "",
                  "cursor-pointer relative inline-flex items-center px-4 py-1 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                ])
              }, [
                pe(M(G), 1)
              ], 10, L1)), [
                [O, { provider: p }]
              ])), 256))
            ])
          ])) : $("", !0)
        ]),
        s("div", V1, [
          o(j) ? (a(), X(K, {
            key: 0,
            class: "mb-3",
            errorSummary: o(j)
          }, null, 8, ["errorSummary"])) : $("", !0),
          s("div", M1, [
            o(H).length ? (a(), u("form", {
              key: 0,
              onSubmit: Ne(J, ["prevent"])
            }, [
              ge(z, {
                modelValue: y.value,
                formLayout: o(H),
                api: g.value,
                hideSummary: !0,
                "divide-class": "",
                "space-class": "space-y-6"
              }, null, 8, ["modelValue", "formLayout", "api"]),
              s("div", A1, [
                ge(Y, { class: "w-full" }, {
                  default: he(() => [
                    pe("Sign In")
                  ]),
                  _: 1
                })
              ])
            ], 40, S1)) : $("", !0),
            o(V).length ? (a(), u("div", F1, [
              T1,
              s("div", I1, [
                (a(!0), u(ke, null, _e(o(V), (p) => (a(), u("div", null, [
                  s("a", {
                    href: o(h) + p.navItem.href + "?continue=" + o(v),
                    title: B(p),
                    class: "w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  }, [
                    p.icon ? (a(), X(_, {
                      key: 0,
                      image: p.icon,
                      class: "h-5 w-5 text-gray-700"
                    }, null, 8, ["image"])) : (a(), u("svg", P1, B1))
                  ], 8, D1)
                ]))), 256))
              ])
            ])) : $("", !0)
          ])
        ])
      ])) : (a(), u("div", w1, "No Auth Plugin"));
    };
  }
}), R1 = {
  Alert: Ao,
  AlertSuccess: No,
  ErrorSummary: Ko,
  InputDescription: Wo,
  Icon: Ss,
  Loading: Ha,
  OutlineButton: Ua,
  PrimaryButton: Ka,
  SecondaryButton: Za,
  TextLink: Xa,
  Breadcrumbs: si,
  Breadcrumb: ui,
  NavList: fi,
  NavListItem: $i,
  AutoQueryGrid: Qu,
  SettingsIcons: ad,
  FilterViews: wn,
  FilterColumn: bn,
  QueryPrefs: xn,
  EnsureAccess: Fs,
  EnsureAccessDialog: id,
  TextInput: pd,
  TextareaInput: Cd,
  SelectInput: Ad,
  CheckboxInput: Bd,
  TagInput: ic,
  FileInput: Ac,
  Autocomplete: Qc,
  Combobox: Wc,
  DynamicInput: Zc,
  LookupInput: f0,
  AutoFormFields: m0,
  AutoForm: x0,
  AutoCreateForm: U0,
  AutoEditForm: vf,
  ConfirmDelete: pf,
  FormLoading: $f,
  DataGrid: Mf,
  CellFormat: Sf,
  PreviewFormat: Pf,
  HtmlFormat: Rf,
  CloseButton: qf,
  SlideOver: om,
  ModalDialog: fm,
  ModalLookup: o1,
  Tabs: v1,
  DarkModeToggle: b1,
  SignIn: E1
}, H1 = ["onClick", "title"], N1 = /* @__PURE__ */ se({
  __name: "RouterLink",
  props: {
    to: null
  },
  setup(e) {
    const t = e, { config: l } = _t(), n = () => l.value.navigate(t.to ?? "/");
    return (i, r) => (a(), u("a", Me({
      onClick: Ne(n, ["prevent"]),
      title: e.to,
      href: "javascript:void(0)"
    }, i.$attrs), [
      Z(i.$slots, "default")
    ], 16, H1));
  }
}), z1 = { RouterLink: N1 }, Dl = R1, Z1 = {
  install(e) {
    Object.keys(Dl).forEach((l) => {
      e.component(l, Dl[l]);
    });
    function t(l) {
      const i = Object.keys(l).filter((r) => l[r]).map((r) => `${encodeURIComponent(r)}=${encodeURIComponent(l[r])}`).join("&");
      return i ? "?" + i : "./";
    }
    e.directive("href", function(l, n) {
      l.href = t(n.value), l.onclick = (i) => {
        i.preventDefault(), history.pushState(n.value, "", t(n.value));
      };
    });
  },
  component(e) {
    return e && (Dl[e] || z1[e]) || null;
  }
};
export {
  W1 as css,
  Z1 as default,
  yn as useAuth,
  _l as useClient,
  _t as useConfig,
  K1 as useFiles,
  G1 as useFormatters,
  et as useMetadata,
  Xo as useUtils
};
