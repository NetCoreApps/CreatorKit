var js = Object.defineProperty;
var Bs = (e, l, t) => l in e ? js(e, l, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[l] = t;
var ye = (e, l, t) => (Bs(e, typeof l != "symbol" ? l + "" : l, t), t);
import { defineComponent as Y, computed as c, openBlock as o, createElementBlock as u, normalizeClass as w, unref as s, createElementVNode as n, createCommentVNode as C, renderSlot as Z, ref as I, toDisplayString as V, inject as Oe, nextTick as ul, isRef as In, h as ft, resolveComponent as U, createBlock as X, withCtx as ve, mergeProps as Ce, useAttrs as Rs, createVNode as fe, createTextVNode as he, watchEffect as Ml, normalizeStyle as Hl, withModifiers as je, Fragment as be, renderList as $e, withDirectives as gt, vModelCheckbox as Nl, withKeys as Es, createStaticVNode as dl, vModelSelect as Hs, useSlots as zl, onMounted as lt, createSlots as Ul, normalizeProps as _t, guardReactiveProps as al, vModelDynamic as Ns, onUnmounted as Ut, watch as At, vModelText as zs, provide as qt, resolveDynamicComponent as Us, resolveDirective as qs } from "vue";
import { errorResponseExcept as Qs, dateFmt as Fn, toTime as Ks, omit as nt, enc as Al, setQueryString as Gs, appendQueryString as Rt, nameOf as Ws, ApiResult as Ze, lastRightPart as pt, leftPart as cl, map as De, toDate as bt, toDateTime as Zs, toCamelCase as Js, mapGet as ce, chop as Xs, humanize as Ie, delaySet as Pn, queryString as Tl, combinePaths as Ys, rightPart as ea, toPascalCase as Ye, errorResponse as dt, trimEnd as ta, $1 as ol, lastLeftPart as la, ResponseStatus as Ll, ResponseError as Vn, HttpMethods as ql, uniqueKeys as Il, humanify as Dn, fromXsdDuration as On, isDate as fl, timeFmt12 as na, apiValue as sa, indexOfAny as aa, each as oa } from "@servicestack/client";
const ia = { class: "flex items-center" }, ra = {
  key: 0,
  class: "flex-shrink-0 mr-3"
}, ua = {
  key: 0,
  class: "h-5 w-5 text-yellow-400",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, da = /* @__PURE__ */ n("path", {
  "fill-rule": "evenodd",
  d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
  "clip-rule": "evenodd"
}, null, -1), ca = [
  da
], fa = {
  key: 1,
  class: "h-5 w-5 text-red-400",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, ma = /* @__PURE__ */ n("path", {
  "fill-rule": "evenodd",
  d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z",
  "clip-rule": "evenodd"
}, null, -1), va = [
  ma
], ha = {
  key: 2,
  class: "h-5 w-5 text-blue-400",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, ga = /* @__PURE__ */ n("path", {
  "fill-rule": "evenodd",
  d: "M19 10.5a8.5 8.5 0 11-17 0 8.5 8.5 0 0117 0zM8.25 9.75A.75.75 0 019 9h.253a1.75 1.75 0 011.709 2.13l-.46 2.066a.25.25 0 00.245.304H11a.75.75 0 010 1.5h-.253a1.75 1.75 0 01-1.709-2.13l.46-2.066a.25.25 0 00-.245-.304H9a.75.75 0 01-.75-.75zM10 7a1 1 0 100-2 1 1 0 000 2z",
  "clip-rule": "evenodd"
}, null, -1), pa = [
  ga
], ya = {
  key: 3,
  class: "h-5 w-5 text-green-400",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, ba = /* @__PURE__ */ n("path", {
  "fill-rule": "evenodd",
  d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
  "clip-rule": "evenodd"
}, null, -1), wa = [
  ba
], xa = /* @__PURE__ */ Y({
  __name: "Alert",
  props: {
    type: { default: "warn" },
    hideIcon: { type: Boolean }
  },
  setup(e) {
    const l = e, t = c(() => l.type == "info" ? "bg-blue-50 dark:bg-blue-200" : l.type == "error" ? "bg-red-50 dark:bg-red-200" : l.type == "success" ? "bg-green-50 dark:bg-green-200" : "bg-yellow-50 dark:bg-yellow-200"), a = c(() => l.type == "info" ? "border-blue-400" : l.type == "error" ? "border-red-400" : l.type == "success" ? "border-green-400" : "border-yellow-400"), i = c(() => l.type == "info" ? "text-blue-700" : l.type == "error" ? "text-red-700" : l.type == "success" ? "text-green-700" : "text-yellow-700");
    return (r, d) => (o(), u("div", {
      class: w([s(t), s(a), "border-l-4 p-4"])
    }, [
      n("div", ia, [
        e.hideIcon ? C("", !0) : (o(), u("div", ra, [
          e.type == "warn" ? (o(), u("svg", ua, ca)) : e.type == "error" ? (o(), u("svg", fa, va)) : e.type == "info" ? (o(), u("svg", ha, pa)) : e.type == "success" ? (o(), u("svg", ya, wa)) : C("", !0)
        ])),
        n("div", null, [
          n("p", {
            class: w([s(i), "text-sm"])
          }, [
            Z(r.$slots, "default")
          ], 2)
        ])
      ])
    ], 2));
  }
}), ka = {
  key: 0,
  class: "rounded-md bg-green-50 dark:bg-green-200 p-4",
  role: "alert"
}, $a = { class: "flex" }, Ca = /* @__PURE__ */ n("div", { class: "flex-shrink-0" }, [
  /* @__PURE__ */ n("svg", {
    class: "h-5 w-5 text-green-400 dark:text-green-500",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    /* @__PURE__ */ n("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M5 13l4 4L19 7"
    })
  ])
], -1), _a = { class: "ml-3" }, La = { class: "text-sm font-medium text-green-800" }, Va = { key: 0 }, Sa = { class: "ml-auto pl-3" }, Ma = { class: "-mx-1.5 -my-1.5" }, Aa = /* @__PURE__ */ n("span", { class: "sr-only" }, "Dismiss", -1), Ta = /* @__PURE__ */ n("svg", {
  class: "h-5 w-5",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ n("path", { d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" })
], -1), Ia = [
  Aa,
  Ta
], Fa = /* @__PURE__ */ Y({
  __name: "AlertSuccess",
  props: {
    message: null
  },
  setup(e) {
    const l = I(!1);
    return (t, a) => l.value ? C("", !0) : (o(), u("div", ka, [
      n("div", $a, [
        Ca,
        n("div", _a, [
          n("h3", La, [
            e.message ? (o(), u("span", Va, V(e.message), 1)) : Z(t.$slots, "default", { key: 1 })
          ])
        ]),
        n("div", Sa, [
          n("div", Ma, [
            n("button", {
              type: "button",
              class: "inline-flex rounded-md bg-green-50 dark:bg-green-200 p-1.5 text-green-500 dark:text-green-600 hover:bg-green-100 dark:hover:bg-green-700 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50 dark:ring-offset-green-200",
              onClick: a[0] || (a[0] = (i) => l.value = !0)
            }, Ia)
          ])
        ])
      ])
    ]));
  }
}), Pa = { class: "flex" }, Da = /* @__PURE__ */ n("div", { class: "flex-shrink-0" }, [
  /* @__PURE__ */ n("svg", {
    class: "h-5 w-5 text-red-400",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, [
    /* @__PURE__ */ n("path", {
      fill: "currentColor",
      d: "M12 2c5.53 0 10 4.47 10 10s-4.47 10-10 10S2 17.53 2 12S6.47 2 12 2m3.59 5L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17L17 15.59L13.41 12L17 8.41L15.59 7Z"
    })
  ])
], -1), Oa = { class: "ml-3" }, ja = { class: "text-sm text-red-700 dark:text-red-200" }, Ba = /* @__PURE__ */ Y({
  __name: "ErrorSummary",
  props: {
    status: null,
    except: null,
    class: null
  },
  setup(e) {
    const l = e;
    let t = Oe("ApiState", void 0);
    const a = c(() => l.status || t != null && t.error.value ? Qs.call({ responseStatus: l.status ?? (t == null ? void 0 : t.error.value) }, l.except ?? []) : null);
    return (i, r) => s(a) ? (o(), u("div", {
      key: 0,
      class: w(`bg-red-50 dark:bg-red-900 border-l-4 border-red-400 p-4 ${i.$props.class}`)
    }, [
      n("div", Pa, [
        Da,
        n("div", Oa, [
          n("p", ja, V(s(a)), 1)
        ])
      ])
    ], 2)) : C("", !0);
  }
}), Ra = ["id", "aria-describedby"], Ea = /* @__PURE__ */ Y({
  __name: "InputDescription",
  props: {
    id: null,
    description: null
  },
  setup(e) {
    return (l, t) => e.description ? (o(), u("div", {
      key: "description",
      class: "mt-2 text-sm text-gray-500",
      id: `${e.id}-description`,
      "aria-describedby": `${e.id}-description`
    }, [
      n("div", null, V(e.description), 1)
    ], 8, Ra)) : C("", !0);
  }
});
function ml(e) {
  return Fn(e).replace(/\//g, "-");
}
function jn(e) {
  return e == null ? "" : Ks(e);
}
function Bn(e, l) {
  e.value = null, ul(() => e.value = l);
}
function kt(e) {
  return Object.keys(e).forEach((l) => {
    const t = e[l];
    e[l] = In(t) ? s(t) : t;
  }), e;
}
function Lt(e, l, t) {
  t ? (l.value = e.entering.cls + " " + e.entering.from, setTimeout(() => l.value = e.entering.cls + " " + e.entering.to, 0)) : (l.value = e.leaving.cls + " " + e.leaving.from, setTimeout(() => l.value = e.leaving.cls + " " + e.leaving.to, 0));
}
function tl() {
  if (typeof document > "u")
    return;
  let e = document.activeElement, l = e && e.form;
  if (l) {
    let t = ':not([disabled]):not([tabindex="-1"])', a = l.querySelectorAll(`a:not([disabled]), button${t}, input[type=text]${t}, [tabindex]${t}`), i = Array.prototype.filter.call(
      a,
      (d) => d.offsetWidth > 0 || d.offsetHeight > 0 || d === e
    ), r = i.indexOf(e);
    r > -1 && (i[r + 1] || i[0]).focus();
  }
}
function Tt(e) {
  if (!e)
    return null;
  if (typeof e == "string")
    return e;
  const l = typeof e == "function" ? new e() : typeof e == "object" ? e : null;
  if (!l)
    throw new Error(`Invalid DTO Type '${typeof e}'`);
  if (typeof l.getTypeName != "function")
    throw new Error(`${JSON.stringify(l)} is not a Request DTO`);
  const t = l.getTypeName();
  if (!t)
    throw new Error("DTO Required");
  return t;
}
function et(e, l, t) {
  t || (t = {});
  let a = t.cls || t.className || t.class;
  return a && (t = nt(t, ["cls", "class", "className"]), t.class = a), l == null ? `<${e}` + Fl(t) + "/>" : `<${e}` + Fl(t) + `>${l || ""}</${e}>`;
}
function Fl(e) {
  return Object.keys(e).reduce((l, t) => `${l} ${t}="${Al(e[t])}"`, "");
}
function vl(e) {
  return Object.assign({ target: "_blank", rel: "noopener", class: "text-blue-600" }, e);
}
function Ct(e) {
  return Wl(e);
}
let Ha = ["string", "number", "boolean", "null", "undefined"];
function yt(e) {
  return Ha.indexOf(typeof e) >= 0 || e instanceof Date;
}
function Et(e) {
  return !yt(e);
}
class Rn {
  get length() {
    return typeof localStorage > "u" ? 0 : localStorage.length;
  }
  getItem(l) {
    return typeof localStorage > "u" ? null : localStorage.getItem(l);
  }
  setItem(l, t) {
    typeof localStorage > "u" || localStorage.setItem(l, t);
  }
  removeItem(l) {
    typeof localStorage > "u" || localStorage.removeItem(l);
  }
  clear() {
    typeof localStorage > "u" || localStorage.clear();
  }
  key(l) {
    return typeof localStorage > "u" ? null : localStorage.key(l);
  }
}
function il(e) {
  return typeof e == "string" ? JSON.parse(e) : null;
}
function Ql(e) {
  if (typeof history < "u") {
    const l = Gs(location.href, e);
    history.pushState({}, "", l);
  }
}
function Kl(e, l) {
  if (["function", "Function", "eval", "=>", ";"].some((i) => e.includes(i)))
    throw new Error(`Unsafe script: '${e}'`);
  const a = Object.assign(
    Object.keys(globalThis).reduce((i, r) => (i[r] = void 0, i), {}),
    l
  );
  return new Function("with(this) { return (" + e + ") }").call(a);
}
function Pl(e) {
  typeof navigator < "u" && navigator.clipboard.writeText(e);
}
function En(e) {
  const l = ne.config.storage.getItem(e);
  return l ? JSON.parse(l) : null;
}
function Gl(e, l) {
  return Rt(`swr.${Ws(e)}`, l ? Object.assign({}, e, l) : e);
}
function Na(e) {
  if (e.request) {
    const l = Gl(e.request, e.args);
    ne.config.storage.removeItem(l);
  }
}
async function Hn(e, l, t, a, i) {
  const r = Gl(l, a);
  t(new Ze({ response: En(r) }));
  const d = await e.api(l, a, i);
  if (d.succeeded && d.response) {
    d.response._date = new Date().valueOf();
    const v = JSON.stringify(d.response);
    ne.config.storage.setItem(r, v), t(d);
  }
  return d;
}
function za() {
  return {
    LocalStore: Rn,
    dateInputFormat: ml,
    timeInputFormat: jn,
    setRef: Bn,
    unRefs: kt,
    transition: Lt,
    focusNextElement: tl,
    getTypeName: Tt,
    htmlTag: et,
    htmlAttrs: Fl,
    linkAttrs: vl,
    toAppUrl: Ct,
    isPrimitive: yt,
    isComplexType: Et,
    pushState: Ql,
    scopedExpr: Kl,
    copyText: Pl,
    fromCache: En,
    swrCacheKey: Gl,
    swrClear: Na,
    swrApi: Hn
  };
}
class ne {
}
ye(ne, "config", {
  redirectSignIn: "/signin",
  redirectSignOut: "/auth/logout",
  navigate: (l) => location.href = l,
  assetsPathResolver: (l) => l,
  fallbackPathResolver: (l) => l,
  storage: new Rn(),
  tableIcon: { svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><g fill='none' stroke='currentColor' stroke-width='1.5'><path d='M5 12v6s0 3 7 3s7-3 7-3v-6'/><path d='M5 6v6s0 3 7 3s7-3 7-3V6'/><path d='M12 3c7 0 7 3 7 3s0 3-7 3s-7-3-7-3s0-3 7-3Z'/></g></svg>" }
}), ye(ne, "autoQueryGridDefaults", {
  deny: [],
  hide: [],
  toolbarButtonClass: void 0,
  tableStyle: "stripedRows",
  take: 25,
  maxFieldLength: 150
}), ye(ne, "user", I(null)), ye(ne, "metadata", I(null));
function Ua(e) {
  ne.config = Object.assign(ne.config, e);
}
function qa(e) {
  ne.autoQueryGridDefaults = Object.assign(ne.autoQueryGridDefaults, e);
}
function Wl(e) {
  return e && ne.config.assetsPathResolver ? ne.config.assetsPathResolver(e) : e;
}
function Qa(e) {
  return e && ne.config.fallbackPathResolver ? ne.config.fallbackPathResolver(e) : e;
}
function wt() {
  const e = c(() => ne.config), l = c(() => ne.autoQueryGridDefaults);
  return {
    config: e,
    setConfig: Ua,
    autoQueryGridDefaults: l,
    setAutoQueryGridDefaults: qa,
    assetsPathResolver: Wl,
    fallbackPathResolver: Qa
  };
}
const Nn = "png,jpg,jpeg,jfif,gif,svg,webp".split(","), zn = {
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
}, Sn = Object.keys(zn), at = (e, l) => `<svg xmlns='http://www.w3.org/2000/svg' aria-hidden='true' role='img' preserveAspectRatio='xMidYMid meet' viewBox='${e}'>${l}</svg>`, ll = {
  img: at("4 4 16 16", "<path fill='currentColor' d='M20 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zm-2 0H6v6.38l2.19-2.19l5.23 5.23l1-1a1.59 1.59 0 0 1 2.11.11L18 16V6zm-5 3.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0z'/>"),
  vid: at("0 0 24 24", "<path fill='currentColor' d='m14 2l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8m4 18V9h-5V4H6v16h12m-2-2l-2.5-1.7V18H8v-5h5.5v1.7L16 13v5Z'/>"),
  aud: at("0 0 24 24", "<path fill='currentColor' d='M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6zm10-9h-4v3.88a2.247 2.247 0 0 0-3.5 1.87c0 1.24 1.01 2.25 2.25 2.25S13 17.99 13 16.75V13h3v-2z'/>"),
  ppt: at("0 0 48 48", "<g fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='4'><path d='M4 8h40'/><path d='M8 8h32v26H8V8Z' clip-rule='evenodd'/><path d='m22 16l5 5l-5 5m-6 16l8-8l8 8'/></g>"),
  xls: at("0 0 256 256", "<path fill='currentColor' d='M200 26H72a14 14 0 0 0-14 14v26H40a14 14 0 0 0-14 14v96a14 14 0 0 0 14 14h18v26a14 14 0 0 0 14 14h128a14 14 0 0 0 14-14V40a14 14 0 0 0-14-14Zm-42 76h44v52h-44Zm44-62v50h-44V80a14 14 0 0 0-14-14h-2V38h58a2 2 0 0 1 2 2ZM70 40a2 2 0 0 1 2-2h58v28H70ZM38 176V80a2 2 0 0 1 2-2h104a2 2 0 0 1 2 2v96a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2Zm32 40v-26h60v28H72a2 2 0 0 1-2-2Zm130 2h-58v-28h2a14 14 0 0 0 14-14v-10h44v50a2 2 0 0 1-2 2ZM69.2 148.4L84.5 128l-15.3-20.4a6 6 0 1 1 9.6-7.2L92 118l13.2-17.6a6 6 0 0 1 9.6 7.2L99.5 128l15.3 20.4a6 6 0 0 1-9.6 7.2L92 138l-13.2 17.6a6 6 0 1 1-9.6-7.2Z'/>"),
  doc: at("0 0 32 32", "<path fill='currentColor' d='M26 30H11a2.002 2.002 0 0 1-2-2v-6h2v6h15V6h-9V4h9a2.002 2.002 0 0 1 2 2v22a2.002 2.002 0 0 1-2 2Z'/><path fill='currentColor' d='M17 10h7v2h-7zm-1 5h8v2h-8zm-1 5h9v2h-9zm-6-1a5.005 5.005 0 0 1-5-5V3h2v11a3 3 0 0 0 6 0V5a1 1 0 0 0-2 0v10H8V5a3 3 0 0 1 6 0v9a5.005 5.005 0 0 1-5 5z'/>"),
  zip: at("0 0 16 16", "<g fill='currentColor'><path d='M6.5 7.5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v.938l.4 1.599a1 1 0 0 1-.416 1.074l-.93.62a1 1 0 0 1-1.109 0l-.93-.62a1 1 0 0 1-.415-1.074l.4-1.599V7.5zm2 0h-1v.938a1 1 0 0 1-.03.243l-.4 1.598l.93.62l.93-.62l-.4-1.598a1 1 0 0 1-.03-.243V7.5z'/><path d='M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm5.5-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9v1H8v1h1v1H8v1h1v1H7.5V5h-1V4h1V3h-1V2h1V1z'/></g>"),
  exe: at("0 0 16 16", "<path fill='currentColor' fill-rule='evenodd' d='M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM2.575 15.202H.785v-1.073H2.47v-.606H.785v-1.025h1.79v-.648H0v3.999h2.575v-.647ZM6.31 11.85h-.893l-.823 1.439h-.036l-.832-1.439h-.931l1.227 1.983l-1.239 2.016h.861l.853-1.415h.035l.85 1.415h.908l-1.254-1.992L6.31 11.85Zm1.025 3.352h1.79v.647H6.548V11.85h2.576v.648h-1.79v1.025h1.684v.606H7.334v1.073Z'/>"),
  att: at("0 0 24 24", "<path fill='currentColor' d='M14 0a5 5 0 0 1 5 5v12a7 7 0 1 1-14 0V9h2v8a5 5 0 0 0 10 0V5a3 3 0 1 0-6 0v12a1 1 0 1 0 2 0V6h2v11a3 3 0 1 1-6 0V5a5 5 0 0 1 5-5Z'/>")
}, Ka = /[\r\n%#()<>?[\\\]^`{|}]/g, Mn = 1024, Ga = ["Bytes", "KB", "MB", "GB", "TB"], Wa = (() => {
  const e = "application/", l = e + "vnd.openxmlformats-officedocument.", t = "image/", a = "text/", i = "audio/", r = "video/", d = {
    jpg: t + "jpeg",
    tif: t + "tiff",
    svg: t + "svg+xml",
    ico: t + "x-icon",
    ts: a + "typescript",
    py: a + "x-python",
    sh: a + "x-sh",
    mp3: i + "mpeg3",
    mpg: r + "mpeg",
    ogv: r + "ogg",
    xlsx: l + "spreadsheetml.sheet",
    xltx: l + "spreadsheetml.template",
    docx: l + "wordprocessingml.document",
    dotx: l + "wordprocessingml.template",
    pptx: l + "presentationml.presentation",
    potx: l + "presentationml.template",
    ppsx: l + "presentationml.slideshow",
    mdb: e + "vnd.ms-access"
  };
  function v(m, g) {
    m.split(",").forEach((p) => d[p] = g);
  }
  function f(m, g) {
    m.split(",").forEach((p) => d[p] = g(p));
  }
  return f("jpeg,gif,png,tiff,bmp,webp", (m) => t + m), f("jsx,csv,css", (m) => a + m), f("aac,ac3,aiff,m4a,m4b,m4p,mid,midi,wav", (m) => i + m), f("3gpp,avi,dv,divx,ogg,mp4,webm", (m) => r + m), f("rtf,pdf", (m) => e + m), v("htm,html,shtm", a + "html"), v("js,mjs,cjs", a + "javascript"), v("yml,yaml", e + "yaml"), v("bat,cmd", e + "bat"), v("xml,csproj,fsproj,vbproj", a + "xml"), v("txt,ps1", a + "plain"), v("qt,mov", r + "quicktime"), v("doc,dot", e + "msword"), v("xls,xlt,xla", e + "excel"), v("ppt,oit,pps,ppa", e + "vnd.ms-powerpoint"), v("cer,crt,der", e + "x-x509-ca-cert"), v("gz,tgz,zip,rar,lzh,z", e + "x-compressed"), v("aaf,aca,asd,bin,cab,chm,class,cur,db,dat,deploy,dll,dsp,exe,fla,ics,inf,mix,msi,mso,obj,ocx,prm,prx,psd,psp,qxd,sea,snp,so,sqlite,toc,ttf,u32,xmp,xsn,xtp", e + "octet-stream"), d;
})();
let Dl = [];
function Un(e) {
  return e = e.replace(/"/g, "'"), e = e.replace(/>\s+</g, "><"), e = e.replace(/\s{2,}/g, " "), e.replace(Ka, encodeURIComponent);
}
function Zl(e) {
  return "data:image/svg+xml;utf8," + Un(e);
}
function qn(e) {
  let l = URL.createObjectURL(e);
  return Dl.push(l), l;
}
function Qn() {
  Dl.forEach((e) => {
    try {
      URL.revokeObjectURL(e);
    } catch (l) {
      console.error("URL.revokeObjectURL", l);
    }
  }), Dl = [];
}
function Jl(e) {
  if (!e)
    return null;
  let l = cl(e, "?");
  return pt(l, "/");
}
function Qt(e) {
  let l = Jl(e);
  return l == null || l.indexOf(".") === -1 ? null : pt(l, ".").toLowerCase();
}
function Xl(e) {
  let l = Qt(e.name);
  return l && Nn.indexOf(l) >= 0 ? qn(e) : mt(e.name);
}
function Yl(e) {
  if (!e)
    return !1;
  if (e.startsWith("blob:") || e.startsWith("data:"))
    return !0;
  let l = Qt(e);
  return l && Nn.indexOf(l) >= 0 || !1;
}
function mt(e) {
  if (!e)
    return null;
  let l = Qt(e);
  return l == null || Yl(e) ? e : Bt(l) || Zl(ll.doc);
}
function Bt(e) {
  let l = Kn(e);
  return l && Zl(l) || null;
}
function Kn(e) {
  if (ll[e])
    return ll[e];
  for (let l = 0; l < Sn.length; l++) {
    let t = Sn[l];
    if (zn[t].indexOf(e) >= 0)
      return ll[t];
  }
  return null;
}
function en(e, l = 2) {
  if (e === 0)
    return "0 Bytes";
  const t = l < 0 ? 0 : l, a = Math.floor(Math.log(e) / Math.log(Mn));
  return parseFloat((e / Math.pow(Mn, a)).toFixed(t)) + " " + Ga[a];
}
function Za(e) {
  return e.files && Array.from(e.files).map((l) => ({ fileName: l.name, contentLength: l.size, filePath: Xl(l) }));
}
function hl(e, l) {
  e.onerror = null, e.src = tn(e.src, l) || "";
}
function tn(e, l) {
  return Bt(pt(e, ".").toLowerCase()) || (l ? Bt(l) || l : null) || Bt("doc");
}
function Ol(e) {
  if (!e)
    throw new Error("fileNameOrExt required");
  const l = pt(e, ".").toLowerCase();
  return Wa[l] || "application/" + l;
}
function Dm() {
  return {
    extSvg: Kn,
    extSrc: Bt,
    getExt: Qt,
    encodeSvg: Un,
    canPreview: Yl,
    getFileName: Jl,
    getMimeType: Ol,
    formatBytes: en,
    filePathUri: mt,
    svgToDataUri: Zl,
    fileImageUri: Xl,
    objectUrl: qn,
    flush: Qn,
    inputFiles: Za,
    iconOnError: hl,
    iconFallbackSrc: tn
  };
}
class Ja {
  constructor(l) {
    ye(this, "view");
    ye(this, "includeTypes");
    Object.assign(this, l);
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
const Vt = "/metadata/app.json", Xa = {
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
}, Ya = {
  number: "Int32",
  checkbox: "Boolean",
  date: "DateTime",
  "datetime-local": "DateTime",
  time: "TimeSpan"
}, jl = {
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
[...Object.keys(jl), ...Object.values(jl)];
const eo = {
  String: "string",
  Boolean: "bool",
  ...jl
};
function Yt(e) {
  return eo[e] || e;
}
function Gn(e, l) {
  return e ? (l || (l = []), e === "Nullable`1" ? Yt(l[0]) + "?" : e.endsWith("[]") ? `List<${Yt(e.substring(0, e.length - 2))}>` : l.length === 0 ? Yt(e) : cl(Yt(e), "`") + "<" + l.join(",") + ">") : "";
}
function to(e) {
  return e && Gn(e.name, e.genericArgs);
}
class St {
  constructor() {
    ye(this, "Query");
    ye(this, "QueryInto");
    ye(this, "Create");
    ye(this, "Update");
    ye(this, "Patch");
    ye(this, "Delete");
  }
  get AnyQuery() {
    return this.Query || this.QueryInto;
  }
  get AnyUpdate() {
    return this.Patch || this.Update;
  }
  toArray() {
    return [this.Query, this.QueryInto, this.Create, this.Update, this.Patch, this.Delete].filter((t) => !!t).map((t) => t);
  }
  get empty() {
    return !this.Query && !this.QueryInto && !this.Create && !this.Update && !this.Patch && !this.Delete;
  }
  add(l) {
    Te.isQueryInto(l) && !this.QueryInto ? this.QueryInto = l : Te.isQuery(l) && !this.Query ? this.Query = l : Te.isCreate(l) && !this.Create ? this.Create = l : Te.isUpdate(l) && !this.Update ? this.Update = l : Te.isPatch(l) && !this.Patch ? this.Patch = l : Te.isDelete(l) && !this.Delete && (this.Delete = l);
  }
  static from(l) {
    const t = new St();
    return l.forEach((a) => {
      t.add(a);
    }), t;
  }
  static forType(l, t) {
    var i;
    let a = new St();
    return l && (t ?? (t = (i = ne.metadata.value) == null ? void 0 : i.api), t == null || t.operations.forEach((r) => {
      var d;
      ((d = r.dataModel) == null ? void 0 : d.name) == l && a.add(r);
    })), a;
  }
}
const Te = {
  Create: "ICreateDb`1",
  Update: "IUpdateDb`1",
  Patch: "IPatchDb`1",
  Delete: "IDeleteDb`1",
  AnyRead: ["QueryDb`1", "QueryDb`2"],
  AnyWrite: ["ICreateDb`1", "IUpdateDb`1", "IPatchDb`1", "IDeleteDb`1"],
  isAnyQuery: (e) => De(e.request.inherits, (l) => Te.AnyRead.indexOf(l.name) >= 0),
  isQuery: (e) => De(e.request.inherits, (l) => l.name === "QueryDb`1"),
  isQueryInto: (e) => De(e.request.inherits, (l) => l.name === "QueryDb`2"),
  isCrud: (e) => {
    var l;
    return (l = e.request.implements) == null ? void 0 : l.some((t) => Te.AnyWrite.indexOf(t.name) >= 0);
  },
  isCreate: (e) => el(e, Te.Create),
  isUpdate: (e) => el(e, Te.Update),
  isPatch: (e) => el(e, Te.Patch),
  isDelete: (e) => el(e, Te.Delete),
  model: (e) => {
    var l, t, a;
    return e ? De(e.inherits, (i) => Te.AnyRead.indexOf(i.name) >= 0) ? (l = e.inherits) == null ? void 0 : l.genericArgs[0] : (a = (t = e.implements) == null ? void 0 : t.find((i) => Te.AnyWrite.indexOf(i.name) >= 0)) == null ? void 0 : a.genericArgs[0] : null;
  }
};
function lo(e) {
  var l;
  return ((l = e.input) == null ? void 0 : l.type) || gl(ln(e));
}
function Wn(e) {
  return e.endsWith("?") ? Xs(e, 1) : e;
}
function gl(e) {
  return Xa[Wn(e)];
}
function no(e) {
  return e && Ya[e] || "String";
}
function ln(e) {
  return e.type === "Nullable`1" ? e.genericArgs[0] : e.type;
}
function Bl(e) {
  return e && gl(e) == "number" || !1;
}
function Zn(e) {
  return e && e.toLowerCase() == "string" || !1;
}
function so(e) {
  return e == "List`1" || e.startsWith("List<") || e.endsWith("[]");
}
function Jn(e) {
  if (!(e != null && e.type))
    return !1;
  const l = ln(e);
  return e.isValueType && l.indexOf("`") == -1 || e.isEnum ? !1 : gl(e.type) == null;
}
function Xn(e) {
  var t, a, i;
  if (!(e != null && e.type))
    return !1;
  const l = ln(e);
  return e.isValueType && l.indexOf("`") == -1 || e.isEnum || ((t = e.input) == null ? void 0 : t.type) == "file" || ((a = e.input) == null ? void 0 : a.type) == "tag" || ((i = e.input) == null ? void 0 : i.type) == "combobox" ? !0 : gl(e.type) != null;
}
function Ht(e, l) {
  let t = typeof e == "string" ? pl(e) : e;
  t || (console.warn(`Metadata not found for: ${e}`), t = { request: { name: e } });
  let a = function() {
    return function(r) {
      Object.assign(this, r);
    };
  }(), i = function() {
    function r(d) {
      Object.assign(this, d);
    }
    return r.prototype.createResponse = function() {
      return t.returnsVoid ? void 0 : new a();
    }, r.prototype.getTypeName = function() {
      return t.request.name;
    }, r.prototype.getMethod = function() {
      return t.method || "POST";
    }, r;
  }();
  return new i(l);
}
function ao(e, l, t = {}) {
  let a = function() {
    return function(r) {
      Object.assign(this, r);
    };
  }(), i = function() {
    function r(d) {
      Object.assign(this, d);
    }
    return r.prototype.createResponse = function() {
      return typeof t.createResponse == "function" ? t.createResponse() : new a();
    }, r.prototype.getTypeName = function() {
      return e;
    }, r.prototype.getMethod = function() {
      return t.method || "POST";
    }, r;
  }();
  return new i(l);
}
function nl(e, l) {
  return e ? (Object.keys(e).forEach((t) => {
    let a = e[t];
    typeof a == "string" && a.startsWith("/Date") && (e[t] = ml(bt(a)));
  }), e) : {};
}
function oo(e, l) {
  let t = {};
  return Array.from(e.elements).forEach((a) => {
    var g;
    let i = a;
    if (!i.id || i.value == null || i.value === "")
      return;
    const r = i.id.toLowerCase(), d = l && l.find((p) => p.name.toLowerCase() == r);
    let v = d == null ? void 0 : d.type, f = (g = d == null ? void 0 : d.genericArgs) == null ? void 0 : g[0], m = i.type === "checkbox" ? i.checked : i.value;
    Bl(v) ? m = Number(m) : v === "List`1" && typeof m == "string" && (m = m.split(",").map((p) => Bl(f) ? Number(p) : p)), t[i.id] = m;
  }), t;
}
function nn(e) {
  var l;
  return ((l = e == null ? void 0 : e.api) == null ? void 0 : l.operations) && e.api.operations.length > 0;
}
function io(e) {
  if (e != null && e.assert && !ne.metadata.value)
    throw new Error("useMetadata() not configured, see: https://docs.servicestack.net/vue/use-metadata");
  return ne.metadata.value;
}
function Nt(e) {
  return e && nn(e) ? (e.date = Zs(new Date()), ne.metadata.value = e, typeof localStorage < "u" && localStorage.setItem(Vt, JSON.stringify(e)), !0) : !1;
}
function ro() {
  ne.metadata.value = null, typeof localStorage < "u" && localStorage.removeItem(Vt);
}
function Yn() {
  if (ne.metadata.value != null)
    return !0;
  let e = globalThis.Server;
  if (nn(e))
    Nt(e);
  else {
    const l = typeof localStorage < "u" ? localStorage.getItem(Vt) : null;
    if (l)
      try {
        Nt(JSON.parse(l));
      } catch {
        console.error(`Could not JSON.parse ${Vt} from localStorage`);
      }
  }
  return ne.metadata.value != null;
}
async function An(e, l) {
  let t = l ? await l() : await fetch(e);
  if (t.ok) {
    let a = await t.text();
    Nt(JSON.parse(a));
  } else
    console.error(`Could not download ${l ? "AppMetadata" : e}: ${t.statusText}`);
  nn(ne.metadata.value) || console.warn("AppMetadata is not available");
}
async function uo(e) {
  var r;
  const { olderThan: l, resolvePath: t, resolve: a } = e || {};
  let i = Yn() && l !== 0;
  if (i && l) {
    let d = bt((r = ne.metadata.value) == null ? void 0 : r.date);
    (!d || new Date().getTime() - d.getTime() > l) && (i = !1);
  }
  if (!i) {
    if ((t || a) && await An(t || Vt, a), ne.metadata.value != null)
      return;
    const d = Oe("client");
    if (d != null) {
      const v = await d.api(new Ja());
      v.succeeded && Nt(v.response);
    }
    if (ne.metadata.value != null)
      return;
    await An(Vt);
  }
  return ne.metadata.value;
}
function it(e, l) {
  var d;
  let t = (d = ne.metadata.value) == null ? void 0 : d.api;
  if (!t || !e)
    return null;
  let a = t.types.find((v) => v.name.toLowerCase() === e.toLowerCase() && (!l || v.namespace == l));
  if (a)
    return a;
  let i = pl(e);
  if (i)
    return i.request;
  let r = t.operations.find((v) => v.response && v.response.name.toLowerCase() === e.toLowerCase() && (!l || v.response.namespace == l));
  return r ? r.response : null;
}
function pl(e) {
  var a;
  let l = (a = ne.metadata.value) == null ? void 0 : a.api;
  return l ? l.operations.find((i) => i.request.name.toLowerCase() === e.toLowerCase()) : null;
}
function co({ dataModel: e }) {
  var a;
  const l = (a = ne.metadata.value) == null ? void 0 : a.api;
  if (!l)
    return [];
  let t = l.operations;
  if (e) {
    const i = typeof e == "string" ? it(e) : e;
    t = t.filter((r) => es(r.dataModel, i));
  }
  return t;
}
function sn(e) {
  return e ? it(e.name, e.namespace) : null;
}
function es(e, l) {
  return e && l && e.name === l.name && (!e.namespace || !l.namespace || e.namespace === l.namespace);
}
function fo(e, l) {
  let t = it(e);
  return t && t.properties && t.properties.find((i) => i.name.toLowerCase() === l.toLowerCase());
}
function ts(e) {
  return ls(it(e));
}
function ls(e) {
  if (e && e.isEnum && e.enumNames != null) {
    let l = {};
    for (let t = 0; t < e.enumNames.length; t++) {
      const a = (e.enumDescriptions ? e.enumDescriptions[t] : null) || e.enumNames[t], i = (e.enumValues != null ? e.enumValues[t] : null) || e.enumNames[t];
      l[i] = a;
    }
    return l;
  }
  return null;
}
function ns(e) {
  if (!e)
    return null;
  let l = {}, t = e.input && e.input.allowableEntries;
  if (t) {
    for (let i = 0; i < t.length; i++) {
      let r = t[i];
      l[r.key] = r.value;
    }
    return l;
  }
  let a = e.allowableValues || (e.input ? e.input.allowableValues : null);
  if (a) {
    for (let i = 0; i < a.length; i++) {
      let r = a[i];
      l[r] = r;
    }
    return l;
  }
  if (e.isEnum) {
    const i = e.genericArgs && e.genericArgs.length == 1 ? e.genericArgs[0] : e.type, r = it(i);
    if (r)
      return ls(r);
  }
  return null;
}
function an(e) {
  if (!e)
    return;
  const l = [];
  return Object.keys(e).forEach((t) => l.push({ key: t, value: e[t] })), l;
}
function mo(e, l) {
  const a = ((i, r) => Object.assign({
    id: i,
    name: i,
    type: r
  }, l))(e.name, (l == null ? void 0 : l.type) || lo(e) || "text");
  return e.isEnum && (a.type = "select", a.allowableEntries = an(ns(e))), a;
}
function vo(e) {
  let l = [];
  if (e) {
    const t = Ke(e), a = pl(e.name), i = sn(a == null ? void 0 : a.dataModel);
    t.forEach((r) => {
      var v, f, m;
      if (!Xn(r))
        return;
      const d = mo(r, r.input);
      if (d.id = Js(d.id), d.type == "file" && r.uploadTo && !d.accept) {
        const g = (f = (v = ne.metadata.value) == null ? void 0 : v.plugins.filesUpload) == null ? void 0 : f.locations.find((p) => p.name == r.uploadTo);
        g && !d.accept && g.allowExtensions && (d.accept = g.allowExtensions.map((p) => p.startsWith(".") ? p : `.${p}`).join(","));
      }
      if (i) {
        const g = (m = i.properties) == null ? void 0 : m.find((p) => p.name == r.name);
        r.ref || (r.ref = g == null ? void 0 : g.ref);
      }
      if (d.options)
        try {
          const g = {
            $typeFields: t.map((h) => h.name),
            $dataModelFields: i ? Ke(i).map((h) => h.name) : []
          }, p = Kl(d.options, g);
          Object.keys(p).forEach((h) => {
            d[h] = p[h];
          });
        } catch {
          console.error(`failed to evaluate '${d.options}'`);
        }
      l.push(d);
    });
  }
  return l;
}
function Ke(e) {
  if (!e)
    return [];
  let l = [], t = {};
  function a(i) {
    i.forEach((r) => {
      t[r.name] || (t[r.name] = 1, l.push(r));
    });
  }
  for (; e; )
    e.properties && a(e.properties), e = e.inherits ? sn(e.inherits) : null;
  return l.map((i) => i.type.endsWith("[]") ? { ...i, type: "List`1", genericArgs: [i.type.substring(0, i.type.length - 2)] } : i);
}
function el(e, l) {
  var t;
  return ((t = e.request.implements) == null ? void 0 : t.some((a) => a.name === l)) || !1;
}
function Kt(e) {
  return e ? ss(e, Ke(e)) : null;
}
function ss(e, l) {
  let t = l.find((r) => r.name.toLowerCase() === "id");
  if (t && t.isPrimaryKey)
    return t;
  let i = l.find((r) => r.isPrimaryKey) || t;
  if (!i) {
    let r = Te.model(e);
    if (r)
      return De(it(r), (d) => Kt(d));
    console.error(`Primary Key not found in ${e.name}`);
  }
  return i || null;
}
function ho(e, l) {
  return De(Kt(e), (t) => ce(l, t.name));
}
function as(e, l, t) {
  return e && e.valueType === "none" ? "" : t.key === "%In" || t.key === "%Between" ? `(${t.value})` : go(l, t.value);
}
function go(e, l) {
  return e ? (e = Wn(e), Bl(e) || e === "Boolean" ? l : so(e) ? `[${l}]` : `'${l}'`) : l;
}
function Je() {
  const e = c(() => {
    var a;
    return ((a = ne.metadata.value) == null ? void 0 : a.app) || null;
  }), l = c(() => {
    var a;
    return ((a = ne.metadata.value) == null ? void 0 : a.api) || null;
  }), t = c(() => {
    var a;
    return ((a = ne.metadata.value) == null ? void 0 : a.plugins.autoQuery.viewerConventions) || [];
  });
  return Yn(), {
    loadMetadata: uo,
    getMetadata: io,
    setMetadata: Nt,
    clearMetadata: ro,
    metadataApp: e,
    metadataApi: l,
    filterDefinitions: t,
    typeOf: it,
    typeOfRef: sn,
    typeEquals: es,
    apiOf: pl,
    findApis: co,
    typeName: to,
    typeName2: Gn,
    property: fo,
    enumOptions: ts,
    propertyOptions: ns,
    createFormLayout: vo,
    typeProperties: Ke,
    supportsProp: Xn,
    Crud: Te,
    Apis: St,
    getPrimaryKey: Kt,
    getPrimaryKeyByProps: ss,
    getId: ho,
    createDto: Ht,
    makeDto: ao,
    toFormValues: nl,
    formValues: oo,
    isComplexProp: Jn,
    asKvps: an
  };
}
const We = class {
  static async getOrFetchValue(l, t, a, i, r, d, v) {
    const f = We.getValue(a, v, r);
    return f ?? (await We.fetchLookupIds(l, t, a, i, r, d, [v]), We.getValue(a, v, r));
  }
  static getValue(l, t, a) {
    const i = We.Lookup[l];
    if (i) {
      const r = i[t];
      if (r)
        return a = a.toLowerCase(), r[a];
    }
  }
  static setValue(l, t, a, i) {
    const r = We.Lookup[l] ?? (We.Lookup[l] = {}), d = r[t] ?? (r[t] = {});
    a = a.toLowerCase(), d[a] = i;
  }
  static setRefValue(l, t) {
    const a = ce(t, l.refId);
    if (a == null || l.refLabel == null)
      return null;
    const i = ce(t, l.refLabel);
    return We.setValue(l.model, a, l.refLabel, i), i;
  }
  static async fetchLookupIds(l, t, a, i, r, d, v) {
    const f = t.operations.find((m) => {
      var g;
      return Te.isAnyQuery(m) && ((g = m.dataModel) == null ? void 0 : g.name) == a;
    });
    if (f) {
      const m = We.Lookup[a] ?? (We.Lookup[a] = {}), g = [];
      Object.keys(m).forEach((M) => {
        const O = m[M];
        ce(O, r) && g.push(M);
      });
      const p = v.filter((M) => !g.includes(M));
      if (p.length == 0)
        return;
      const h = d ? null : `${i},${r}`, b = {
        [i + "In"]: p.join(",")
      };
      h && (b.fields = h);
      const k = Ht(f, b), _ = await l.api(k, { jsconfig: "edv,eccn" });
      if (_.succeeded)
        (ce(_.response, "results") || []).forEach((O) => {
          if (!ce(O, i)) {
            console.error(`result[${i}] == null`, O);
            return;
          }
          const N = `${ce(O, i)}`, q = ce(O, r);
          r = r.toLowerCase();
          const Q = m[N] ?? (m[N] = {});
          Q[r] = `${q}`;
        });
      else {
        console.error(`Failed to call ${f.request.name}`);
        return;
      }
    }
  }
};
let vt = We;
ye(vt, "Lookup", {});
const os = Y({
  inheritAttrs: !1,
  props: {
    image: Object,
    svg: String,
    src: String,
    alt: String,
    type: String
  },
  setup(e, { attrs: l }) {
    return () => {
      let t = e.image;
      if (e.type) {
        const { typeOf: r } = Je(), d = r(e.type);
        d || console.warn(`Type ${e.type} does not exist`), d != null && d.icon ? t = d == null ? void 0 : d.icon : console.warn(`Type ${e.type} does not have a [Svg] icon`);
      }
      let a = e.svg || (t == null ? void 0 : t.svg) || "";
      if (a.startsWith("<svg ")) {
        let d = cl(a, ">").indexOf("class="), v = `${(t == null ? void 0 : t.cls) || ""} ${l.class || ""}`;
        if (d == -1)
          a = `<svg class="${v}" ${a.substring(4)}`;
        else {
          const f = d + 6 + 1;
          a = `${a.substring(0, f) + v} ${a.substring(f)}`;
        }
        return ft("span", { innerHTML: a });
      } else
        return ft("img", {
          class: [t == null ? void 0 : t.cls, l.class],
          src: Wl(e.src || (t == null ? void 0 : t.uri)),
          onError: (r) => hl(r.target)
        });
    };
  }
}), po = { class: "text-2xl font-semibold text-gray-900 dark:text-gray-300" }, yo = { class: "flex" }, bo = /* @__PURE__ */ n("path", {
  d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
  fill: "currentColor"
}, null, -1), wo = /* @__PURE__ */ n("path", {
  d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
  fill: "currentFill"
}, null, -1), xo = [
  bo,
  wo
], ko = /* @__PURE__ */ Y({
  __name: "Loading",
  props: {
    imageClass: { default: "w-6 h-6" }
  },
  setup(e) {
    return (l, t) => (o(), u("div", po, [
      n("div", yo, [
        (o(), u("svg", {
          class: w(["self-center inline mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300", e.imageClass]),
          role: "status",
          viewBox: "0 0 100 101",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, xo, 2)),
        n("span", null, [
          Z(l.$slots, "default")
        ])
      ])
    ]));
  }
}), $o = ["href", "onClick"], Co = ["type"], _o = /* @__PURE__ */ Y({
  __name: "OutlineButton",
  props: {
    type: { default: "submit" },
    href: null
  },
  setup(e) {
    const l = "inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-200 disabled:text-gray-400 bg-white dark:bg-black hover:bg-gray-50 hover:dark:bg-gray-900 disabled:hover:bg-white dark:disabled:hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:ring-offset-black";
    return (t, a) => {
      const i = U("router-link");
      return e.href ? (o(), X(i, {
        key: 0,
        to: e.href
      }, {
        default: ve(({ navigate: r }) => [
          n("button", {
            class: w(l),
            href: e.href,
            onClick: r
          }, [
            Z(t.$slots, "default")
          ], 8, $o)
        ]),
        _: 3
      }, 8, ["to"])) : (o(), u("button", Ce({
        key: 1,
        type: e.type,
        class: l
      }, t.$attrs), [
        Z(t.$slots, "default")
      ], 16, Co));
    };
  }
}), Lo = ["href", "onClick"], Vo = ["type"], So = /* @__PURE__ */ Y({
  __name: "PrimaryButton",
  props: {
    type: { default: "submit" },
    href: null,
    color: { default: "indigo" }
  },
  setup(e) {
    const l = e, t = {
      blue: "text-white bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:hover:bg-blue-400 focus:ring-indigo-500 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
      purple: "text-white bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 disabled:hover:bg-purple-400 focus:ring-indigo-500 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
      red: "focus:ring-red-500 text-white bg-red-600 hover:bg-red-700 disabled:bg-red-400 disabled:hover:bg-red-400 focus:ring-red-500 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-500",
      green: "focus:ring-green-300 text-white bg-green-600 hover:bg-green-700 disabled:bg-green-400 disabled:hover:bg-green-400 focus:ring-green-500 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-500",
      sky: "focus:ring-sky-300 text-white bg-sky-600 hover:bg-sky-700 disabled:bg-sky-400 disabled:hover:bg-sky-400 focus:ring-sky-500 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-500",
      cyan: "focus:ring-cyan-300 text-white bg-cyan-600 hover:bg-cyan-700 disabled:bg-cyan-400 disabled:hover:bg-cyan-400 focus:ring-cyan-500 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-500",
      indigo: "focus:ring-2 focus:ring-offset-2 text-white bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 disabled:hover:bg-indigo-400 focus:ring-indigo-500 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    }, a = c(() => "inline-flex justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 dark:ring-offset-black " + (t[l.color] || t.indigo));
    return (i, r) => {
      const d = U("router-link");
      return e.href ? (o(), X(d, {
        key: 0,
        to: e.href
      }, {
        default: ve(({ navigate: v }) => [
          n("button", {
            class: w(s(a)),
            href: e.href,
            onClick: v
          }, [
            Z(i.$slots, "default")
          ], 10, Lo)
        ]),
        _: 3
      }, 8, ["to"])) : (o(), u("button", Ce({
        key: 1,
        type: e.type,
        class: s(a)
      }, i.$attrs), [
        Z(i.$slots, "default")
      ], 16, Vo));
    };
  }
}), Mo = ["type", "href", "onClick"], Ao = ["type"], To = /* @__PURE__ */ Y({
  __name: "SecondaryButton",
  props: {
    type: null,
    href: null
  },
  setup(e) {
    const l = "inline-flex justify-center rounded-md border border-gray-300 py-2 px-4 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-400 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700 focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:ring-offset-black";
    return (t, a) => {
      const i = U("router-link");
      return e.href ? (o(), X(i, {
        key: 0,
        to: e.href
      }, {
        default: ve(({ navigate: r }) => [
          n("button", {
            type: e.type ?? "button",
            class: w(l),
            href: e.href,
            onClick: r
          }, [
            Z(t.$slots, "default")
          ], 8, Mo)
        ]),
        _: 3
      }, 8, ["to"])) : (o(), u("button", Ce({
        key: 1,
        type: e.type ?? "button",
        class: l
      }, t.$attrs), [
        Z(t.$slots, "default")
      ], 16, Ao));
    };
  }
});
function He(e, l) {
  return Array.isArray(e) ? e.indexOf(l) >= 0 : e == l || e.includes(l);
}
const rl = {
  blue: "text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200",
  purple: "text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-200",
  red: "text-red-700 dark:text-red-400 hover:text-red-900 dark:hover:text-red-200",
  green: "text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-200",
  sky: "text-sky-600 dark:text-sky-400 hover:text-sky-800 dark:hover:text-sky-200",
  cyan: "text-cyan-600 dark:text-cyan-400 hover:text-cyan-800 dark:hover:text-cyan-200",
  indigo: "text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-200"
}, ot = {
  base: "block w-full sm:text-sm rounded-md dark:text-white dark:bg-gray-900 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none",
  invalid: "pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500",
  valid: "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 dark:border-gray-600"
}, ht = {
  panelClass: "shadow sm:rounded-md",
  formClass: "space-y-6 bg-white dark:bg-black py-6 px-4 sm:p-6",
  headingClass: "text-lg font-medium leading-6 text-gray-900 dark:text-gray-100",
  subHeadingClass: "mt-1 text-sm text-gray-500 dark:text-gray-400"
}, jt = {
  panelClass: "pointer-events-auto w-screen xl:max-w-3xl md:max-w-xl max-w-lg",
  formClass: "flex h-full flex-col divide-y divide-gray-200 dark:divide-gray-700 shadow-xl bg-white dark:bg-black",
  titlebarClass: "bg-gray-50 dark:bg-gray-900 px-4 py-6 sm:px-6",
  headingClass: "text-lg font-medium text-gray-900 dark:text-gray-100",
  subHeadingClass: "mt-1 text-sm text-gray-500 dark:text-gray-400",
  closeButtonClass: "rounded-md bg-gray-50 dark:bg-gray-900 text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:ring-offset-black"
}, Rl = {
  modalClass: "relative transform overflow-hidden rounded-lg bg-white dark:bg-black text-left shadow-xl transition-all sm:my-8",
  sizeClass: "sm:max-w-prose lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl sm:w-full"
}, Ue = {
  panelClass(e = "slideOver") {
    return e == "card" ? ht.panelClass : jt.panelClass;
  },
  formClass(e = "slideOver") {
    return e == "card" ? ht.formClass : jt.formClass;
  },
  headingClass(e = "slideOver") {
    return e == "card" ? ht.headingClass : jt.headingClass;
  },
  subHeadingClass(e = "slideOver") {
    return e == "card" ? ht.subHeadingClass : jt.subHeadingClass;
  },
  buttonsClass: "mt-4 px-4 py-3 bg-gray-50 dark:bg-gray-900 sm:px-6 flex flex-wrap justify-between",
  legendClass: "text-base font-medium text-gray-900 dark:text-gray-100 text-center mb-4"
}, oe = {
  getGridClass(e = "stripedRows") {
    return oe.gridClass;
  },
  getGrid2Class(e = "stripedRows") {
    return He(e, "fullWidth") ? "overflow-x-auto" : oe.grid2Class;
  },
  getGrid3Class(e = "stripedRows") {
    return He(e, "fullWidth") ? "inline-block min-w-full py-2 align-middle" : oe.grid3Class;
  },
  getGrid4Class(e = "stripedRows") {
    return He(e, "whiteBackground") ? "" : He(e, "fullWidth") ? "overflow-hidden shadow-sm ring-1 ring-black ring-opacity-5" : oe.grid4Class;
  },
  getTableClass(e = "stripedRows") {
    return He(e, "fullWidth") || He(e, "verticalLines") ? "min-w-full divide-y divide-gray-300" : oe.tableClass;
  },
  getTheadClass(e = "stripedRows") {
    return He(e, "whiteBackground") ? "" : oe.theadClass;
  },
  getTheadRowClass(e = "stripedRows") {
    return oe.theadRowClass + (He(e, "verticalLines") ? " divide-x divide-gray-200 dark:divide-gray-700" : "");
  },
  getTheadCellClass(e = "stripedRows") {
    return oe.theadCellClass + (He(e, "uppercaseHeadings") ? " uppercase" : "");
  },
  getTbodyClass(e = "stripedRows") {
    return (He(e, "whiteBackground") || He(e, "verticalLines") ? "divide-y divide-gray-200 dark:divide-gray-800" : oe.tableClass) + (He(e, "verticalLines") ? " bg-white" : "");
  },
  getTableRowClass(e = "stripedRows", l, t, a) {
    return (a ? "cursor-pointer " : "") + (t ? "bg-indigo-100 dark:bg-blue-800" : (a ? "hover:bg-yellow-50 dark:hover:bg-blue-900 " : "") + (He(e, "stripedRows") ? l % 2 == 0 ? "bg-white dark:bg-black" : "bg-gray-50 dark:bg-gray-800" : "bg-white dark:bg-black")) + (He(e, "verticalLines") ? " divide-x divide-gray-200 dark:divide-gray-700" : "");
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
}, Om = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  a: rl,
  card: ht,
  form: Ue,
  grid: oe,
  input: ot,
  modal: Rl,
  slideOver: jt
}, Symbol.toStringTag, { value: "Module" })), Io = /* @__PURE__ */ Y({
  __name: "TextLink",
  props: {
    color: { default: "blue" }
  },
  setup(e) {
    const l = e, t = Rs(), a = c(() => (rl[l.color] || rl.blue) + (t.href ? "" : " cursor-pointer"));
    return (i, r) => (o(), u("a", {
      class: w(s(a))
    }, [
      Z(i.$slots, "default")
    ], 2));
  }
}), Fo = {
  class: "flex",
  "aria-label": "Breadcrumb"
}, Po = {
  role: "list",
  class: "flex items-center space-x-4"
}, Do = ["href", "title"], Oo = /* @__PURE__ */ n("svg", {
  class: "h-6 w-6 flex-shrink-0",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ n("path", {
    "fill-rule": "evenodd",
    d: "M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z",
    "clip-rule": "evenodd"
  })
], -1), jo = { class: "sr-only" }, Bo = /* @__PURE__ */ Y({
  __name: "Breadcrumbs",
  props: {
    homeHref: { default: "/" },
    homeLabel: { default: "Home" }
  },
  setup(e) {
    return (l, t) => (o(), u("nav", Fo, [
      n("ol", Po, [
        n("li", null, [
          n("div", null, [
            n("a", {
              href: e.homeHref,
              class: "text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400",
              title: e.homeLabel
            }, [
              Oo,
              n("span", jo, V(e.homeLabel), 1)
            ], 8, Do)
          ])
        ]),
        Z(l.$slots, "default")
      ])
    ]));
  }
}), Ro = { class: "flex items-center" }, Eo = /* @__PURE__ */ n("svg", {
  class: "h-6 w-6 flex-shrink-0 text-gray-400 dark:text-gray-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ n("path", {
    "fill-rule": "evenodd",
    d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z",
    "clip-rule": "evenodd"
  })
], -1), Ho = ["href", "title"], No = ["title"], zo = /* @__PURE__ */ Y({
  __name: "Breadcrumb",
  props: {
    href: null,
    title: null
  },
  setup(e) {
    return (l, t) => (o(), u("li", null, [
      n("div", Ro, [
        Eo,
        e.href ? (o(), u("a", {
          key: 0,
          href: e.href,
          class: "ml-4 text-lg font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300",
          title: e.title
        }, [
          Z(l.$slots, "default")
        ], 8, Ho)) : (o(), u("span", {
          key: 1,
          class: "ml-4 text-lg font-medium text-gray-700 dark:text-gray-300",
          title: e.title
        }, [
          Z(l.$slots, "default")
        ], 8, No))
      ])
    ]));
  }
}), Uo = {
  key: 0,
  class: "text-base font-semibold text-gray-500 dark:text-gray-400"
}, qo = {
  role: "list",
  class: "mt-4 divide-y divide-gray-200 dark:divide-gray-800 border-t border-b border-gray-200 dark:border-gray-800"
}, Qo = /* @__PURE__ */ Y({
  __name: "NavList",
  props: {
    title: null
  },
  setup(e) {
    return (l, t) => (o(), u("div", null, [
      e.title ? (o(), u("h2", Uo, V(e.title), 1)) : C("", !0),
      n("ul", qo, [
        Z(l.$slots, "default")
      ])
    ]));
  }
}), Ko = { class: "relative flex items-start space-x-4 py-6" }, Go = { class: "flex-shrink-0" }, Wo = { class: "flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50 dark:bg-indigo-900" }, Zo = { class: "min-w-0 flex-1" }, Jo = { class: "text-base font-medium text-gray-900 dark:text-gray-100" }, Xo = { class: "rounded-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2" }, Yo = ["href"], ei = /* @__PURE__ */ n("span", {
  class: "absolute inset-0",
  "aria-hidden": "true"
}, null, -1), ti = { class: "text-base text-gray-500" }, li = /* @__PURE__ */ n("div", { class: "flex-shrink-0 self-center" }, [
  /* @__PURE__ */ n("svg", {
    class: "h-5 w-5 text-gray-400",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    /* @__PURE__ */ n("path", {
      "fill-rule": "evenodd",
      d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z",
      "clip-rule": "evenodd"
    })
  ])
], -1), ni = /* @__PURE__ */ Y({
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
    return (l, t) => {
      const a = U("Icon");
      return o(), u("li", Ko, [
        n("div", Go, [
          n("span", Wo, [
            fe(a, {
              class: "w-6 h-6 text-indigo-700 dark:text-indigo-300",
              image: e.icon,
              src: e.iconSrc,
              svg: e.iconSvg,
              alt: e.iconAlt
            }, null, 8, ["image", "src", "svg", "alt"])
          ])
        ]),
        n("div", Zo, [
          n("h3", Jo, [
            n("span", Xo, [
              n("a", {
                href: e.href,
                class: "focus:outline-none"
              }, [
                ei,
                he(" " + V(e.title), 1)
              ], 8, Yo)
            ])
          ]),
          n("p", ti, [
            Z(l.$slots, "default")
          ])
        ]),
        li
      ]);
    };
  }
});
function si(e) {
  ne.user.value = e;
}
function ai() {
  ne.user.value = null;
}
function is(e) {
  var l;
  return (((l = ne.user.value) == null ? void 0 : l.roles) || []).indexOf(e) >= 0;
}
function oi(e) {
  var l;
  return (((l = ne.user.value) == null ? void 0 : l.permissions) || []).indexOf(e) >= 0;
}
function on() {
  return is("Admin");
}
function sl(e) {
  if (!e)
    return !1;
  if (!e.requiresAuth)
    return !0;
  const l = ne.user.value;
  if (!l)
    return !1;
  if (on())
    return !0;
  let [t, a] = [l.roles || [], l.permissions || []], [i, r, d, v] = [
    e.requiredRoles || [],
    e.requiredPermissions || [],
    e.requiresAnyRole || [],
    e.requiresAnyPermission || []
  ];
  return !(!i.every((f) => t.indexOf(f) >= 0) || d.length > 0 && !d.some((f) => t.indexOf(f) >= 0) || !r.every((f) => a.indexOf(f) >= 0) || v.length > 0 && !v.every((f) => a.indexOf(f) >= 0));
}
function ii(e) {
  if (!e || !e.requiresAuth)
    return null;
  const l = ne.user.value;
  if (!l)
    return `<b>${e.request.name}</b> requires Authentication`;
  if (on())
    return null;
  let [t, a] = [l.roles || [], l.permissions || []], [i, r, d, v] = [
    e.requiredRoles || [],
    e.requiredPermissions || [],
    e.requiresAnyRole || [],
    e.requiresAnyPermission || []
  ], f = i.filter((g) => t.indexOf(g) < 0);
  if (f.length > 0)
    return `Requires ${f.map((g) => "<b>" + g + "</b>").join(", ")} Role` + (f.length > 1 ? "s" : "");
  let m = r.filter((g) => a.indexOf(g) < 0);
  return m.length > 0 ? `Requires ${m.map((g) => "<b>" + g + "</b>").join(", ")} Permission` + (m.length > 1 ? "s" : "") : d.length > 0 && !d.some((g) => t.indexOf(g) >= 0) ? `Requires any ${d.filter((g) => t.indexOf(g) < 0).map((g) => "<b>" + g + "</b>").join(", ")} Role` + (f.length > 1 ? "s" : "") : v.length > 0 && !v.every((g) => a.indexOf(g) >= 0) ? `Requires any ${v.filter((g) => a.indexOf(g) < 0).map((g) => "<b>" + g + "</b>").join(", ")} Permission` + (m.length > 1 ? "s" : "") : null;
}
function rn() {
  const e = c(() => ne.user.value || null), l = c(() => ne.user.value != null);
  return { signIn: si, signOut: ai, user: e, isAuthenticated: l, hasRole: is, hasPermission: oi, isAdmin: on, canAccess: sl, invalidAccessMessage: ii };
}
const ri = { key: 0 }, ui = { class: "md:p-4" }, rs = /* @__PURE__ */ Y({
  __name: "EnsureAccess",
  props: {
    invalidAccess: null,
    alertClass: null
  },
  emits: ["done"],
  setup(e) {
    const { isAuthenticated: l } = rn(), { config: t } = wt(), a = () => {
      let r = location.href.substring(location.origin.length) || "/";
      const d = Rt(t.value.redirectSignIn, { redirect: r });
      t.value.navigate(d);
    }, i = () => {
      let r = location.href.substring(location.origin.length) || "/";
      const d = Rt(t.value.redirectSignOut, { ReturnUrl: r });
      t.value.navigate(d);
    };
    return (r, d) => {
      const v = U("Alert"), f = U("SecondaryButton");
      return e.invalidAccess ? (o(), u("div", ri, [
        fe(v, {
          class: w(e.alertClass),
          innerHTML: e.invalidAccess
        }, null, 8, ["class", "innerHTML"]),
        n("div", ui, [
          s(l) ? (o(), X(f, {
            key: 1,
            onClick: i
          }, {
            default: ve(() => [
              he("Sign Out")
            ]),
            _: 1
          })) : (o(), X(f, {
            key: 0,
            onClick: a
          }, {
            default: ve(() => [
              he("Sign In")
            ]),
            _: 1
          }))
        ])
      ])) : C("", !0);
    };
  }
}), di = { class: "absolute top-0 right-0 bg-white dark:bg-black border dark:border-gray-800 rounded normal-case text-sm shadow w-80" }, ci = { class: "p-4" }, fi = /* @__PURE__ */ n("h3", { class: "text-base font-medium mb-3 dark:text-gray-100" }, "Sort", -1), mi = { class: "flex w-full justify-center" }, vi = /* @__PURE__ */ n("svg", {
  class: "w-6 h-6",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16"
}, [
  /* @__PURE__ */ n("g", { fill: "currentColor" }, [
    /* @__PURE__ */ n("path", {
      "fill-rule": "evenodd",
      d: "M10.082 5.629L9.664 7H8.598l1.789-5.332h1.234L13.402 7h-1.12l-.419-1.371h-1.781zm1.57-.785L11 2.687h-.047l-.652 2.157h1.351z"
    }),
    /* @__PURE__ */ n("path", { d: "M12.96 14H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V14zm-8.46-.5a.5.5 0 0 1-1 0V3.707L2.354 4.854a.5.5 0 1 1-.708-.708l2-1.999l.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L4.5 3.707V13.5z" })
  ])
], -1), hi = /* @__PURE__ */ n("span", null, "ASC", -1), gi = [
  vi,
  hi
], pi = /* @__PURE__ */ dl('<svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g fill="currentColor"><path d="M12.96 7H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V7z"></path><path fill-rule="evenodd" d="M10.082 12.629L9.664 14H8.598l1.789-5.332h1.234L13.402 14h-1.12l-.419-1.371h-1.781zm1.57-.785L11 9.688h-.047l-.652 2.156h1.351z"></path><path d="M4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999l.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z"></path></g></svg><span>DESC</span>', 2), yi = [
  pi
], bi = /* @__PURE__ */ n("h3", { class: "text-base font-medium mt-4 mb-2" }, " Filter ", -1), wi = { key: 0 }, xi = ["id", "value"], ki = ["for"], $i = { key: 1 }, Ci = { class: "mb-2" }, _i = { class: "inline-flex rounded-full items-center py-0.5 pl-2.5 pr-1 text-sm font-medium bg-indigo-100 text-indigo-700" }, Li = ["onClick"], Vi = /* @__PURE__ */ n("svg", {
  class: "h-2 w-2",
  stroke: "currentColor",
  fill: "none",
  viewBox: "0 0 8 8"
}, [
  /* @__PURE__ */ n("path", {
    "stroke-linecap": "round",
    "stroke-width": "1.5",
    d: "M1 1l6 6m0-6L1 7"
  })
], -1), Si = [
  Vi
], Mi = { class: "flex" }, Ai = /* @__PURE__ */ n("svg", {
  class: "h-6 w-6",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ n("path", {
    "fill-rule": "evenodd",
    d: "M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z",
    "clip-rule": "evenodd"
  })
], -1), Ti = [
  Ai
], Ii = { class: "bg-gray-50 dark:bg-gray-900 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse" }, un = /* @__PURE__ */ Y({
  __name: "FilterColumn",
  props: {
    definitions: null,
    column: null,
    topLeft: null
  },
  emits: ["done", "save"],
  setup(e, { emit: l }) {
    const t = e, a = I(), i = I(""), r = I(""), d = I([]), v = c(() => t.column.meta.isEnum == !0), f = c(() => t.column.meta.isEnum == !0 ? an(ts(t.column.type)) : []), m = c(() => {
      var $;
      return (($ = h(t.column.type)) == null ? void 0 : $.map((j) => ({ key: j.value, value: j.name }))) || [];
    }), g = I({ filters: [] }), p = c(() => g.value.filters);
    Ml(() => g.value = Object.assign({}, t.column.settings, {
      filters: Array.from(t.column.settings.filters)
    })), Ml(() => {
      var $, j, B;
      return d.value = ((B = (j = ($ = t.column.settings.filters) == null ? void 0 : $[0]) == null ? void 0 : j.value) == null ? void 0 : B.split(",")) || [];
    });
    function h($) {
      let j = t.definitions;
      return Zn($) || (j = j.filter((B) => B.types !== "string")), j;
    }
    function b($, j) {
      return h($).find((B) => B.value === j);
    }
    function k() {
      var j;
      if (!i.value)
        return;
      let $ = (j = b(t.column.type, i.value)) == null ? void 0 : j.name;
      $ && (g.value.filters.push({ key: i.value, name: $, value: r.value }), i.value = r.value = "");
    }
    function _($) {
      g.value.filters.splice($, 1);
    }
    function M($) {
      return as(b(t.column.type, $.key), t.column.type, $);
    }
    function O() {
      l("done");
    }
    function N() {
      var $;
      i.value = "%", ($ = a.value) == null || $.focus();
    }
    function q() {
      if (r.value && k(), v.value) {
        let $ = Object.values(d.value).filter((j) => j);
        g.value.filters = $.length > 0 ? [{ key: "%In", name: "In", value: $.join(",") }] : [];
      }
      l("save", g.value), l("done");
    }
    function Q($) {
      g.value.sort = $ === g.value.sort ? void 0 : $, ul(q);
    }
    return ($, j) => {
      var K;
      const B = U("SelectInput"), D = U("TextInput"), F = U("PrimaryButton"), E = U("SecondaryButton");
      return o(), u("div", {
        class: "fixed z-20 inset-0 overflow-y-auto",
        onClick: O,
        onVnodeMounted: N
      }, [
        n("div", {
          class: "absolute",
          style: Hl(`top:${e.topLeft.y}px;left:${e.topLeft.x}px`),
          onClick: j[5] || (j[5] = je(() => {
          }, ["stop"]))
        }, [
          n("div", di, [
            n("div", ci, [
              fi,
              n("div", mi, [
                n("button", {
                  type: "button",
                  title: "Sort Ascending",
                  onClick: j[0] || (j[0] = (G) => Q("ASC")),
                  class: w(`${g.value.sort === "ASC" ? "bg-indigo-100 border-indigo-500" : "bg-white hover:bg-gray-50 border-gray-300"} mr-1 inline-flex items-center px-2.5 py-1.5 border shadow-sm text-sm font-medium rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`)
                }, gi, 2),
                n("button", {
                  type: "button",
                  title: "Sort Descending",
                  onClick: j[1] || (j[1] = (G) => Q("DESC")),
                  class: w(`${g.value.sort === "DESC" ? "bg-indigo-100 border-indigo-500" : "bg-white hover:bg-gray-50 border-gray-300"} ml-1 inline-flex items-center px-2.5 py-1.5 border shadow-sm text-sm font-medium rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`)
                }, yi, 2)
              ]),
              bi,
              s(v) ? (o(), u("div", wi, [
                (o(!0), u(be, null, $e(s(f), (G) => (o(), u("div", {
                  key: G.key,
                  class: "flex items-center"
                }, [
                  gt(n("input", {
                    type: "checkbox",
                    id: G.key,
                    value: G.key,
                    "onUpdate:modelValue": j[2] || (j[2] = (te) => d.value = te),
                    class: "h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                  }, null, 8, xi), [
                    [Nl, d.value]
                  ]),
                  n("label", {
                    for: G.key,
                    class: "ml-3"
                  }, V(G.value), 9, ki)
                ]))), 128))
              ])) : (o(), u("div", $i, [
                (o(!0), u(be, null, $e(s(p), (G, te) => (o(), u("div", Ci, [
                  n("span", _i, [
                    he(V(e.column.name) + " " + V(G.name) + " " + V(M(G)) + " ", 1),
                    n("button", {
                      type: "button",
                      onClick: (T) => _(te),
                      class: "flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500 focus:outline-none focus:bg-indigo-500 focus:text-white"
                    }, Si, 8, Li)
                  ])
                ]))), 256)),
                n("div", Mi, [
                  fe(B, {
                    id: "filterRule",
                    class: "w-32 mr-1",
                    modelValue: i.value,
                    "onUpdate:modelValue": j[3] || (j[3] = (G) => i.value = G),
                    entries: s(m),
                    label: "",
                    placeholder: ""
                  }, null, 8, ["modelValue", "entries"]),
                  ((K = b(e.column.type, i.value)) == null ? void 0 : K.valueType) !== "none" ? (o(), X(D, {
                    key: 0,
                    ref_key: "txtFilter",
                    ref: a,
                    id: "filterValue",
                    class: "w-32 mr-1",
                    type: "text",
                    modelValue: r.value,
                    "onUpdate:modelValue": j[4] || (j[4] = (G) => r.value = G),
                    onKeyup: Es(k, ["enter"]),
                    label: "",
                    placeholder: ""
                  }, null, 8, ["modelValue", "onKeyup"])) : C("", !0),
                  n("div", { class: "pt-1" }, [
                    n("button", {
                      type: "button",
                      onClick: k,
                      class: "inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    }, Ti)
                  ])
                ])
              ]))
            ]),
            n("div", Ii, [
              fe(F, {
                onClick: q,
                color: "red",
                class: "ml-2"
              }, {
                default: ve(() => [
                  he(" Save ")
                ]),
                _: 1
              }),
              fe(E, { onClick: O }, {
                default: ve(() => [
                  he(" Cancel ")
                ]),
                _: 1
              })
            ])
          ])
        ], 4)
      ], 512);
    };
  }
}), Fi = { class: "px-4 sm:px-6 lg:px-8 text-sm" }, Pi = { class: "flex flex-wrap" }, Di = { class: "group pr-4 sm:pr-6 lg:pr-8" }, Oi = { class: "flex justify-between w-full font-medium" }, ji = { class: "w-6 flex justify-end" }, Bi = { class: "hidden group-hover:inline" }, Ri = ["onClick", "title"], Ei = /* @__PURE__ */ n("svg", {
  class: "h-2 w-2",
  stroke: "currentColor",
  fill: "none",
  viewBox: "0 0 8 8"
}, [
  /* @__PURE__ */ n("path", {
    "stroke-linecap": "round",
    "stroke-width": "1.5",
    d: "M1 1l6 6m0-6L1 7"
  })
], -1), Hi = [
  Ei
], Ni = {
  key: 0,
  class: "pt-2"
}, zi = { class: "ml-2" }, Ui = { key: 1 }, qi = { class: "pt-2" }, Qi = { class: "inline-flex rounded-full items-center py-0.5 pl-2.5 pr-1 text-sm font-medium bg-indigo-100 text-indigo-700" }, Ki = ["onClick"], Gi = /* @__PURE__ */ n("svg", {
  class: "h-2 w-2",
  stroke: "currentColor",
  fill: "none",
  viewBox: "0 0 8 8"
}, [
  /* @__PURE__ */ n("path", {
    "stroke-linecap": "round",
    "stroke-width": "1.5",
    d: "M1 1l6 6m0-6L1 7"
  })
], -1), Wi = [
  Gi
], Zi = /* @__PURE__ */ n("span", null, "Clear All", -1), Ji = [
  Zi
], dn = /* @__PURE__ */ Y({
  __name: "FilterViews",
  props: {
    definitions: null,
    columns: null
  },
  emits: ["done", "change"],
  setup(e, { emit: l }) {
    const t = e, a = c(() => t.columns.filter((p) => p.settings.filters.length > 0));
    function i(p) {
      var h, b;
      return (b = (h = p == null ? void 0 : p[0]) == null ? void 0 : h.value) == null ? void 0 : b.split(",");
    }
    function r(p) {
      let h = t.definitions;
      return Zn(p) || (h = h.filter((b) => b.types !== "string")), h;
    }
    function d(p, h) {
      return r(p).find((b) => b.value === h);
    }
    function v(p, h) {
      return as(d(p.type, h.value), p.type, h);
    }
    function f(p) {
      p.settings.filters = [], l("change", p);
    }
    function m(p, h) {
      p.settings.filters.splice(h, 1), l("change", p);
    }
    function g() {
      t.columns.forEach((p) => {
        p.settings.filters = [], l("change", p);
      }), l("done");
    }
    return (p, h) => (o(), u("div", Fi, [
      n("div", Pi, [
        (o(!0), u(be, null, $e(s(a), (b) => (o(), u("fieldset", Di, [
          n("legend", Oi, [
            n("span", null, V(s(Ie)(b.name)), 1),
            n("span", ji, [
              n("span", Bi, [
                n("button", {
                  onClick: (k) => f(b),
                  title: `Clear all ${s(Ie)(b.name)} filters`,
                  class: "flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-red-600 hover:bg-red-200 hover:text-red-500 focus:outline-none focus:bg-red-500 focus:text-white"
                }, Hi, 8, Ri)
              ])
            ])
          ]),
          b.meta.isEnum ? (o(), u("div", Ni, [
            (o(!0), u(be, null, $e(i(b.settings.filters), (k) => (o(), u("div", {
              key: k,
              class: "flex items-center"
            }, [
              n("label", zi, V(k), 1)
            ]))), 128))
          ])) : (o(), u("div", Ui, [
            (o(!0), u(be, null, $e(b.settings.filters, (k, _) => (o(), u("div", qi, [
              n("span", Qi, [
                he(V(b.name) + " " + V(k.name) + " " + V(v(b, k)) + " ", 1),
                n("button", {
                  type: "button",
                  onClick: (M) => m(b, _),
                  class: "flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500 focus:outline-none focus:bg-indigo-500 focus:text-white"
                }, Wi, 8, Ki)
              ])
            ]))), 256))
          ]))
        ]))), 256))
      ]),
      n("div", { class: "flex justify-center pt-4" }, [
        n("button", {
          type: "button",
          onClick: g,
          class: "inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        }, Ji)
      ])
    ]));
  }
}), Xi = { class: "bg-white dark:bg-black px-4 pt-5 pb-4 sm:p-6 sm:pb-4" }, Yi = { class: "" }, er = { class: "mt-3 text-center sm:mt-0 sm:mx-4 sm:text-left" }, tr = /* @__PURE__ */ n("h3", { class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-100" }, "Query Preferences", -1), lr = { class: "mt-4" }, nr = ["for"], sr = ["id"], ar = ["value", "selected"], or = { class: "mt-4 flex items-center py-4 border-b border-gray-200 dark:border-gray-800" }, ir = ["id", "checked"], rr = ["for"], ur = { class: "mt-4" }, dr = { class: "pb-2 px-4" }, cr = { class: "" }, fr = ["id", "value"], mr = ["for"], vr = { class: "bg-gray-50 dark:bg-gray-900 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse" }, cn = /* @__PURE__ */ Y({
  __name: "QueryPrefs",
  props: {
    id: { default: "QueryPrefs" },
    columns: null,
    prefs: null,
    maxLimit: null
  },
  emits: ["done", "save"],
  setup(e, { emit: l }) {
    const t = e, { autoQueryGridDefaults: a } = wt(), i = I({});
    Ml(() => i.value = Object.assign({
      take: a.value.take,
      selectedColumns: []
    }, t.prefs));
    const r = [10, 25, 50, 100, 250, 500, 1e3];
    function d() {
      l("done");
    }
    function v() {
      l("save", i.value);
    }
    return (f, m) => {
      const g = U("PrimaryButton"), p = U("SecondaryButton"), h = U("ModalDialog");
      return o(), X(h, {
        id: e.id,
        onDone: d,
        "size-class": "w-full sm:max-w-prose"
      }, {
        default: ve(() => [
          n("div", Xi, [
            n("div", Yi, [
              n("div", er, [
                tr,
                n("div", lr, [
                  n("label", {
                    for: `${e.id}-take`,
                    class: "block text-sm font-medium text-gray-700 dark:text-gray-300"
                  }, "Results per page", 8, nr),
                  gt(n("select", {
                    id: `${e.id}-take`,
                    "onUpdate:modelValue": m[0] || (m[0] = (b) => i.value.take = b),
                    class: "mt-1 block w-full pl-3 pr-10 py-2 text-base bg-white dark:bg-black border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  }, [
                    (o(!0), u(be, null, $e(r.filter((b) => t.maxLimit == null || b <= t.maxLimit), (b) => (o(), u("option", {
                      value: b,
                      selected: b === i.value.take
                    }, V(b), 9, ar))), 256))
                  ], 8, sr), [
                    [Hs, i.value.take]
                  ])
                ]),
                n("div", or, [
                  n("input", {
                    type: "radio",
                    id: `${e.id}-allColumns`,
                    onClick: m[1] || (m[1] = (b) => i.value.selectedColumns = []),
                    checked: i.value.selectedColumns.length === 0,
                    class: "focus:ring-indigo-500 h-4 w-4 bg-white dark:bg-black text-indigo-600 dark:text-indigo-400 border-gray-300 dark:border-gray-700"
                  }, null, 8, ir),
                  n("label", {
                    class: "ml-3 block text-gray-700 dark:text-gray-300",
                    for: `${e.id}-allColumns`
                  }, "View all columns", 8, rr)
                ]),
                n("div", ur, [
                  n("div", dr, [
                    n("div", cr, [
                      (o(!0), u(be, null, $e(e.columns, (b) => (o(), u("div", {
                        key: b.name,
                        class: "flex items-center"
                      }, [
                        gt(n("input", {
                          type: "checkbox",
                          id: b.name,
                          value: b.name,
                          "onUpdate:modelValue": m[2] || (m[2] = (k) => i.value.selectedColumns = k),
                          class: "h-4 w-4 bg-white dark:bg-black border-gray-300 dark:border-gray-700 rounded text-indigo-600 dark:text-indigo-400 focus:ring-indigo-500"
                        }, null, 8, fr), [
                          [Nl, i.value.selectedColumns]
                        ]),
                        n("label", {
                          for: b.name,
                          class: "ml-3"
                        }, V(b.name), 9, mr)
                      ]))), 128))
                    ])
                  ])
                ])
              ])
            ])
          ]),
          n("div", vr, [
            fe(g, {
              onClick: v,
              color: "red",
              class: "ml-2"
            }, {
              default: ve(() => [
                he(" Save ")
              ]),
              _: 1
            }),
            fe(p, { onClick: d }, {
              default: ve(() => [
                he(" Cancel ")
              ]),
              _: 1
            })
          ])
        ]),
        _: 1
      }, 8, ["id"]);
    };
  }
}), hr = { key: 0 }, gr = { key: 1 }, pr = {
  key: 2,
  class: "pt-1"
}, yr = { key: 0 }, br = { key: 1 }, wr = { key: 3 }, xr = { class: "pl-1 pt-1 flex flex-wrap" }, kr = { class: "flex mt-1" }, $r = ["title"], Cr = /* @__PURE__ */ n("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ n("g", {
    "stroke-width": "1.5",
    fill: "none"
  }, [
    /* @__PURE__ */ n("path", {
      d: "M9 3H3.6a.6.6 0 0 0-.6.6v16.8a.6.6 0 0 0 .6.6H9M9 3v18M9 3h6M9 21h6m0-18h5.4a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H15m0-18v18",
      stroke: "currentColor"
    })
  ])
], -1), _r = [
  Cr
], Lr = ["disabled"], Vr = /* @__PURE__ */ n("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ n("path", {
    d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6l6 6zM6 6h2v12H6z",
    fill: "currentColor"
  })
], -1), Sr = [
  Vr
], Mr = ["disabled"], Ar = /* @__PURE__ */ n("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ n("path", {
    d: "M15.41 7.41L14 6l-6 6l6 6l1.41-1.41L10.83 12z",
    fill: "currentColor"
  })
], -1), Tr = [
  Ar
], Ir = ["disabled"], Fr = /* @__PURE__ */ n("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ n("path", {
    d: "M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z",
    fill: "currentColor"
  })
], -1), Pr = [
  Fr
], Dr = ["disabled"], Or = /* @__PURE__ */ n("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ n("path", {
    d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6l-6-6zM16 6h2v12h-2z",
    fill: "currentColor"
  })
], -1), jr = [
  Or
], Br = {
  key: 0,
  class: "flex mt-1"
}, Rr = { class: "px-4 text-lg text-black dark:text-white" }, Er = { key: 0 }, Hr = { key: 1 }, Nr = /* @__PURE__ */ n("span", { class: "hidden xl:inline" }, " Showing Results ", -1), zr = { key: 2 }, Ur = { class: "flex flex-wrap" }, qr = {
  key: 0,
  class: "pl-2 mt-1"
}, Qr = /* @__PURE__ */ n("svg", {
  class: "w-5 h-5",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ n("path", {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M20 20v-5h-5M4 4v5h5m10.938 2A8.001 8.001 0 0 0 5.07 8m-1.008 5a8.001 8.001  0 0 0 14.868 3"
  })
], -1), Kr = [
  Qr
], Gr = {
  key: 1,
  class: "pl-2 mt-1"
}, Wr = /* @__PURE__ */ dl('<svg class="w-5 h-5 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M28.781 4.405h-10.13V2.018L2 4.588v22.527l16.651 2.868v-3.538h10.13A1.162 1.162 0 0 0 30 25.349V5.5a1.162 1.162 0 0 0-1.219-1.095zm.16 21.126H18.617l-.017-1.889h2.487v-2.2h-2.506l-.012-1.3h2.518v-2.2H18.55l-.012-1.3h2.549v-2.2H18.53v-1.3h2.557v-2.2H18.53v-1.3h2.557v-2.2H18.53v-2h10.411z" fill="#20744a" fill-rule="evenodd"></path><path fill="#20744a" d="M22.487 7.439h4.323v2.2h-4.323z"></path><path fill="#20744a" d="M22.487 10.94h4.323v2.2h-4.323z"></path><path fill="#20744a" d="M22.487 14.441h4.323v2.2h-4.323z"></path><path fill="#20744a" d="M22.487 17.942h4.323v2.2h-4.323z"></path><path fill="#20744a" d="M22.487 21.443h4.323v2.2h-4.323z"></path><path fill="#fff" fill-rule="evenodd" d="M6.347 10.673l2.146-.123l1.349 3.709l1.594-3.862l2.146-.123l-2.606 5.266l2.606 5.279l-2.269-.153l-1.532-4.024l-1.533 3.871l-2.085-.184l2.422-4.663l-2.238-4.993z"></path></svg><span class="text-green-900 dark:text-green-100">Excel</span>', 2), Zr = [
  Wr
], Jr = {
  key: 2,
  class: "pl-2 mt-1"
}, Xr = {
  key: 0,
  class: "w-5 h-5 mr-1 text-green-600 dark:text-green-400",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Yr = /* @__PURE__ */ n("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M5 13l4 4L19 7"
}, null, -1), eu = [
  Yr
], tu = {
  key: 1,
  class: "w-5 h-5 mr-1",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, lu = /* @__PURE__ */ n("g", { fill: "none" }, [
  /* @__PURE__ */ n("path", {
    d: "M8 4v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.242a2 2 0 0 0-.602-1.43L16.083 2.57A2 2 0 0 0 14.685 2H10a2 2 0 0 0-2 2z",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }),
  /* @__PURE__ */ n("path", {
    d: "M16 18v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  })
], -1), nu = [
  lu
], su = /* @__PURE__ */ n("span", { class: "whitespace-nowrap" }, "Copy URL", -1), au = {
  key: 3,
  class: "pl-2 mt-1"
}, ou = /* @__PURE__ */ n("svg", {
  class: "w-5 h-5",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ n("path", {
    fill: "currentColor",
    d: "M6.78 2.72a.75.75 0 0 1 0 1.06L4.56 6h8.69a7.75 7.75 0 1 1-7.75 7.75a.75.75 0 0 1 1.5 0a6.25 6.25 0 1 0 6.25-6.25H4.56l2.22 2.22a.75.75 0 1 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.5a.75.75 0 0 1 1.06 0Z"
  })
], -1), iu = [
  ou
], ru = {
  key: 4,
  class: "pl-2 mt-1"
}, uu = /* @__PURE__ */ n("svg", {
  class: "flex-none w-5 h-5 mr-2 text-gray-400 dark:text-gray-500 group-hover:text-gray-500",
  "aria-hidden": "true",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, [
  /* @__PURE__ */ n("path", {
    "fill-rule": "evenodd",
    d: "M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z",
    "clip-rule": "evenodd"
  })
], -1), du = { class: "mr-1" }, cu = {
  key: 0,
  class: "h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-gray-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, fu = /* @__PURE__ */ n("path", {
  "fill-rule": "evenodd",
  d: "M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z",
  "clip-rule": "evenodd"
}, null, -1), mu = [
  fu
], vu = {
  key: 1,
  class: "h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-gray-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, hu = /* @__PURE__ */ n("path", {
  "fill-rule": "evenodd",
  d: "M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z",
  "clip-rule": "evenodd"
}, null, -1), gu = [
  hu
], pu = {
  key: 5,
  class: "pl-2 mt-1"
}, yu = ["title"], bu = /* @__PURE__ */ n("svg", {
  class: "w-5 h-5 mr-1 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ n("path", {
    d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z",
    fill: "currentColor"
  })
], -1), wu = { class: "whitespace-nowrap" }, xu = { key: 7 }, ku = {
  key: 0,
  class: "cursor-pointer flex justify-between items-center hover:text-gray-900 dark:hover:text-gray-50"
}, $u = { class: "mr-1 select-none" }, Cu = {
  key: 1,
  class: "flex justify-between items-center"
}, _u = { class: "mr-1 select-none" }, Lu = /* @__PURE__ */ Y({
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
    edit: null
  },
  emits: ["headerSelected", "rowSelected"],
  setup(e, { expose: l, emit: t }) {
    const a = e, { config: i, autoQueryGridDefaults: r } = wt(), d = r, v = Oe("client"), f = i.value.storage;
    l({ update: Ge, search: hn, createRequestArgs: xl, reset: _n, createDone: Dt, createSave: _l, editDone: Pt, editSave: Jt });
    const m = (x) => typeof x == "string" ? x.split(",") : x || [];
    function g(x, L) {
      const ee = m(L);
      return x.reduce((W, de) => (W[de] = !ee.includes(de), W), {});
    }
    const p = "filtering,queryString,queryFilters".split(","), h = "copyApiUrl,downloadCsv,filtersView,newItem,pagingInfo,pagingNav,preferences,refresh,resetPreferences,toolbar".split(","), b = c(() => a.deny ? g(p, a.deny) : g(p, d.value.deny)), k = c(() => a.hide ? g(h, a.hide) : g(h, d.value.hide));
    function _(x) {
      return b.value[x];
    }
    function M(x) {
      return k.value[x];
    }
    const O = c(() => a.tableStyle ?? d.value.tableStyle), N = c(() => a.gridClass ?? oe.getGridClass(O.value)), q = c(() => a.grid2Class ?? oe.getGrid2Class(O.value)), Q = c(() => a.grid3Class ?? oe.getGrid3Class(O.value)), $ = c(() => a.grid4Class ?? oe.getGrid4Class(O.value)), j = c(() => a.tableClass ?? oe.getTableClass(O.value)), B = c(() => a.theadClass ?? oe.getTheadClass(O.value)), D = c(() => a.theadRowClass ?? oe.getTheadRowClass(O.value)), F = c(() => a.theadCellClass ?? oe.getTheadCellClass(O.value)), E = c(() => a.toolbarButtonClass ?? oe.toolbarButtonClass);
    function K(x, L) {
      var Le;
      if (a.rowClass)
        return a.rowClass(x, L);
      const ee = !!me.value.AnyUpdate, de = ((Le = ze.value) != null && Le.name ? ce(x, ze.value.name) : null) == H.value;
      return oe.getTableRowClass(a.tableStyle, L, de, ee);
    }
    const G = zl(), te = c(() => {
      var x;
      return $l(((x = me.value.AnyQuery.viewModel) == null ? void 0 : x.name) || me.value.AnyQuery.dataModel.name);
    }), T = c(() => {
      const x = Object.keys(G).map((L) => L.toLowerCase());
      return Ke(te.value).filter((L) => x.includes(L.name.toLowerCase()) || x.includes(L.name.toLowerCase() + "-header")).map((L) => L.name);
    });
    function y() {
      let x = m(a.selectedColumns);
      return x.length > 0 ? x : T.value.length > 0 ? T.value : [];
    }
    const A = c(() => {
      let L = y().map((W) => W.toLowerCase());
      const ee = Ke(te.value);
      return L.length > 0 ? L.map((W) => ee.find((de) => de.name.toLowerCase() === W)).filter((W) => W != null) : ee;
    }), le = c(() => {
      let x = A.value.map((ee) => ee.name), L = m(ge.value.selectedColumns).map((ee) => ee.toLowerCase());
      return L.length > 0 ? x.filter((ee) => L.includes(ee.toLowerCase())) : x;
    }), S = I([]), P = I(new Ze()), ue = I(new Ze()), ie = I(), se = I(!1), H = I(), J = I(), pe = I(!1), _e = I(), ae = I(a.skip), Pe = I(!1), Ae = 25, ge = I({ take: Ae }), Re = I(!1), Se = c(() => S.value.some((x) => x.settings.filters.length > 0 || !!x.settings.sort) || ge.value.selectedColumns), Ne = c(() => S.value.map((x) => x.settings.filters.length).reduce((x, L) => x + L, 0)), Xe = c(() => {
      var x;
      return Ke($l(xt.value || ((x = me.value.AnyQuery) == null ? void 0 : x.dataModel.name)));
    }), ze = c(() => {
      var x;
      return Kt($l(xt.value || ((x = me.value.AnyQuery) == null ? void 0 : x.dataModel.name)));
    }), R = c(() => ge.value.take ?? Ae), z = c(() => P.value.response ? ce(P.value.response, "results") : []), re = c(() => {
      var x;
      return ((x = P.value.response) == null ? void 0 : x.total) ?? z.value.length ?? 0;
    }), xe = c(() => ae.value > 0), we = c(() => ae.value > 0), Fe = c(() => z.value.length >= R.value), qe = c(() => z.value.length >= R.value), ke = {
      NoQuery: "No Query API was found"
    };
    function Ee(x) {
      if (x) {
        if (a.canFilter)
          return a.canFilter(x);
        const L = Xe.value.find((ee) => ee.name.toLowerCase() == x.toLowerCase());
        if (L)
          return !Jn(L);
      }
      return !1;
    }
    function Qe(x) {
      _("queryString") && Ql(x);
    }
    async function rt(x) {
      ae.value += x, ae.value < 0 && (ae.value = 0);
      const L = Math.floor(re.value / R.value) * R.value;
      ae.value > L && (ae.value = L), Qe({ skip: ae.value || void 0 }), await Ge();
    }
    async function Ft(x, L) {
      var de, Le;
      if (J.value = null, H.value = L, !x || !L)
        return;
      let ee = Ht(me.value.AnyQuery, { [x]: L });
      const W = await v.api(ee);
      if (W.succeeded) {
        let Me = (de = ce(W.response, "results")) == null ? void 0 : de[0];
        Me || console.warn(`API ${(Le = me.value.AnyQuery) == null ? void 0 : Le.request.name}(${x}:${L}) returned no results`), J.value = Me;
      }
    }
    async function $s(x, L) {
      var de;
      t("rowSelected", x, L);
      const ee = (de = ze.value) == null ? void 0 : de.name, W = ee ? ce(x, ee) : null;
      !ee || !W || (Qe({ edit: W }), Ft(ee, W));
    }
    function Cs(x, L) {
      var W;
      if (!_("filtering"))
        return;
      let ee = L.target;
      if (Ee(x) && (ee == null ? void 0 : ee.tagName) !== "TD") {
        let de = (W = ee == null ? void 0 : ee.closest("TABLE")) == null ? void 0 : W.getBoundingClientRect(), Le = S.value.find((Me) => Me.name.toLowerCase() == x.toLowerCase());
        if (Le && de) {
          let Me = 318, ut = de.x + Me + 10;
          _e.value = {
            column: Le,
            topLeft: {
              x: Math.max(Math.floor(L.clientX + Me / 2), ut),
              y: de.y + 45
            }
          };
        }
      }
      t("headerSelected", x, L);
    }
    function _s() {
      _e.value = null;
    }
    async function Ls(x) {
      var ee;
      let L = (ee = _e.value) == null ? void 0 : ee.column;
      L && (L.settings = x, f.setItem(Wt(L.name), JSON.stringify(L.settings)), await Ge()), _e.value = null;
    }
    async function Vs(x) {
      f.setItem(Wt(x.name), JSON.stringify(x.settings)), await Ge();
    }
    async function Ss(x) {
      pe.value = !1, ge.value = x, f.setItem(kl(), JSON.stringify(x)), await Ge();
    }
    async function Ge() {
      await hn(xl());
    }
    async function Ms() {
      await Ge();
    }
    async function hn(x) {
      const L = me.value.AnyQuery;
      if (!L) {
        console.error(ke.NoQuery);
        return;
      }
      let ee = Ht(L, x), W = Pn((Me) => {
        P.value.response = P.value.error = void 0, Re.value = Me;
      }), de = await v.api(ee);
      W(), ul(() => P.value = de);
      let Le = ce(de.response, "results") || [];
      !de.succeeded || Le.label == 0;
    }
    function xl() {
      let x = {
        include: "total",
        take: R.value
      }, L = m(ge.value.selectedColumns || a.selectedColumns);
      if (L.length > 0) {
        let W = ze.value;
        W && L.includes(W.name) && (L = [W.name, ...L]);
        const de = Xe.value, Le = [];
        L.forEach((Me) => {
          var Xt;
          const ut = de.find((Ve) => Ve.name.toLowerCase() == Me.toLowerCase());
          (Xt = ut == null ? void 0 : ut.ref) != null && Xt.selfId && Le.push(ut.ref.selfId), ce(G, Me) && Le.push(...de.filter((Ve) => {
            var ct, Ot;
            return ((Ot = (ct = Ve.ref) == null ? void 0 : ct.selfId) == null ? void 0 : Ot.toLowerCase()) == Me.toLowerCase();
          }).map((Ve) => Ve.name));
        }), Le.forEach((Me) => {
          L.includes(Me) || L.push(Me);
        }), x.fields = L.join(",");
      }
      let ee = [];
      if (S.value.forEach((W) => {
        W.settings.sort && ee.push((W.settings.sort === "DESC" ? "-" : "") + W.name), W.settings.filters.forEach((de) => {
          let Le = de.key.replace("%", W.name);
          x[Le] = de.value;
        });
      }), _("queryString") && _("queryFilters")) {
        let W = Tl(location.search);
        if (Object.keys(W).forEach((de) => {
          A.value.find((Me) => Me.name === de) && (x[de] = W[de]);
        }), typeof W.skip < "u") {
          const de = parseInt(W.skip);
          isNaN(de) || (ae.value = x.skip = de);
        }
      }
      return typeof x.skip > "u" && ae.value > 0 && (x.skip = ae.value), ee.length > 0 && (x.orderBy = ee.join(",")), x;
    }
    function As() {
      const x = gn("csv");
      Pl(x), typeof window < "u" && window.open(x);
    }
    function Ts() {
      const x = gn("json");
      Pl(x), Pe.value = !0, setTimeout(() => Pe.value = !1, 3e3);
    }
    function gn(x = "json") {
      var Le;
      const L = xl(), ee = `/api/${(Le = me.value.AnyQuery) == null ? void 0 : Le.request.name}`, W = Ys(v.baseUrl, Rt(ee, { ...L, jsconfig: "edv" }));
      return W.indexOf("?") >= 0 ? cl(W, "?") + "." + x + "?" + ea(W, "?") : W + ".json";
    }
    async function Is() {
      S.value.forEach((x) => {
        x.settings = { filters: [] }, f.removeItem(Wt(x.name));
      }), ge.value = { take: Ae }, f.removeItem(kl()), await Ge();
    }
    function Fs() {
      se.value = !0, Qe({ create: null });
    }
    const xt = c(() => Tt(a.type)), st = c(() => {
      var x;
      return xt.value || ((x = me.value.AnyQuery) == null ? void 0 : x.dataModel.name);
    }), kl = () => {
      var x;
      return `${a.id}/ApiPrefs/${xt.value || ((x = me.value.AnyQuery) == null ? void 0 : x.dataModel.name)}`;
    }, Wt = (x) => {
      var L;
      return `Column/${a.id}:${xt.value || ((L = me.value.AnyQuery) == null ? void 0 : L.dataModel.name)}.${x}`;
    }, { metadataApi: pn, typeOf: $l, apiOf: yn, filterDefinitions: Ps } = Je(), { invalidAccessMessage: Cl } = rn(), bn = c(() => a.filterDefinitions || Ps.value), me = c(() => {
      let x = m(a.apis);
      return x.length > 0 ? St.from(x.map((L) => yn(L)).filter((L) => L != null).map((L) => L)) : St.forType(xt.value, pn.value);
    }), Zt = (x) => `<span class="text-yellow-700">${x}</span>`, wn = c(() => {
      if (!pn.value)
        return Zt(`AppMetadata not loaded, see <a class="${rl.blue}" href="https://docs.servicestack.net/vue/use-metadata" target="_blank">useMetadata()</a>`);
      let L = m(a.apis).map((W) => yn(W) == null ? W : null).filter((W) => W != null);
      if (L.length > 0)
        return Zt(`Unknown API${L.length > 1 ? "s" : ""}: ${L.join(", ")}`);
      let ee = me.value;
      return ee.empty ? Zt("Mising DataModel in property 'type' or AutoQuery APIs to use in property 'apis'") : ee.AnyQuery ? null : Zt(ke.NoQuery);
    }), xn = c(() => me.value.AnyQuery && Cl(me.value.AnyQuery)), kn = c(() => me.value.Create && Cl(me.value.Create)), $n = c(() => me.value.AnyUpdate && Cl(me.value.AnyUpdate)), Ds = c(() => sl(me.value.Create));
    c(() => sl(me.value.AnyUpdate));
    const Cn = c(() => sl(me.value.Delete));
    function Pt() {
      J.value = null, H.value = null, Qe({ edit: void 0 });
    }
    function Dt() {
      se.value = !1, Qe({ create: void 0 });
    }
    async function Jt() {
      await Ge(), Pt();
    }
    async function _l() {
      await Ge(), Dt();
    }
    function _n() {
      var ee;
      P.value = new Ze(), ue.value = new Ze(), se.value = !1, H.value = null, J.value = null, pe.value = !1, _e.value = null, ae.value = a.skip, Pe.value = !1, ge.value = { take: Ae }, Re.value = !1;
      const x = a.prefs || il(f.getItem(kl()));
      x && (ge.value = x), S.value = A.value.map((W) => ({
        name: W.name,
        type: W.type,
        meta: W,
        settings: Object.assign(
          {
            filters: []
          },
          il(f.getItem(Wt(W.name)))
        )
      })), isNaN(a.skip) || (ae.value = a.skip);
      let L = (ee = ze.value) == null ? void 0 : ee.name;
      if (_("queryString")) {
        const W = Tl(location.search);
        typeof W.create < "u" ? se.value = typeof W.create < "u" : L && (typeof W.edit == "string" || typeof W.edit == "number") && Ft(L, W.edit);
      }
      a.create === !0 && (se.value = !0), L && a.edit != null && Ft(L, a.edit);
    }
    return lt(async () => {
      _n(), await Ge();
    }), (x, L) => {
      const ee = U("Alert"), W = U("EnsureAccessDialog"), de = U("AutoCreateForm"), Le = U("AutoEditForm"), Me = U("ErrorSummary"), ut = U("Loading"), Ln = U("SettingsIcons"), Xt = U("DataGrid");
      return s(wn) ? (o(), u("div", hr, [
        fe(ee, { innerHTML: s(wn) }, null, 8, ["innerHTML"])
      ])) : s(xn) ? (o(), u("div", gr, [
        fe(rs, { "invalid-access": s(xn) }, null, 8, ["invalid-access"])
      ])) : (o(), u("div", pr, [
        se.value && s(me).Create ? (o(), u("div", yr, [
          s(kn) ? (o(), X(W, {
            key: 0,
            title: `Create ${s(st)}`,
            "invalid-access": s(kn),
            "alert-class": "text-yellow-700",
            onDone: Dt
          }, null, 8, ["title", "invalid-access"])) : s(G).createform ? Z(x.$slots, "createform", {
            key: 1,
            type: s(me).Create.request.name,
            configure: e.configureField,
            done: Dt,
            save: _l
          }) : (o(), X(de, {
            key: 2,
            type: s(me).Create.request.name,
            configure: e.configureField,
            onDone: Dt,
            onSave: _l
          }, {
            header: ve(() => [
              Z(x.$slots, "formheader", {
                form: "create",
                apis: s(me),
                type: s(st)
              })
            ]),
            footer: ve(() => [
              Z(x.$slots, "formfooter", {
                form: "create",
                apis: s(me),
                type: s(st)
              })
            ]),
            _: 3
          }, 8, ["type", "configure"]))
        ])) : J.value && s(me).AnyUpdate ? (o(), u("div", br, [
          s($n) ? (o(), X(W, {
            key: 0,
            title: `Update ${s(st)}`,
            "invalid-access": s($n),
            "alert-class": "text-yellow-700",
            onDone: Pt
          }, null, 8, ["title", "invalid-access"])) : s(G).editform ? Z(x.$slots, "editform", {
            key: 1,
            model: J.value,
            type: s(me).AnyUpdate.request.name,
            deleteType: s(Cn) ? s(me).Delete.request.name : null,
            configure: e.configureField,
            done: Pt,
            save: Jt
          }) : (o(), X(Le, {
            key: 2,
            modelValue: J.value,
            "onUpdate:modelValue": L[0] || (L[0] = (Ve) => J.value = Ve),
            type: s(me).AnyUpdate.request.name,
            deleteType: s(Cn) ? s(me).Delete.request.name : null,
            configure: e.configureField,
            onDone: Pt,
            onSave: Jt,
            onDelete: Jt
          }, {
            header: ve(() => [
              Z(x.$slots, "formheader", {
                form: "edit",
                apis: s(me),
                type: s(st),
                model: J.value,
                id: H.value
              })
            ]),
            footer: ve(() => [
              Z(x.$slots, "formfooter", {
                form: "edit",
                apis: s(me),
                type: s(st),
                model: J.value,
                id: H.value
              })
            ]),
            _: 3
          }, 8, ["modelValue", "type", "deleteType", "configure"]))
        ])) : C("", !0),
        s(G).toolbar ? Z(x.$slots, "toolbar", { key: 2 }) : M("toolbar") ? (o(), u("div", wr, [
          pe.value ? (o(), X(cn, {
            key: 0,
            columns: s(A),
            prefs: ge.value,
            onDone: L[1] || (L[1] = (Ve) => pe.value = !1),
            onSave: Ss
          }, null, 8, ["columns", "prefs"])) : C("", !0),
          n("div", xr, [
            n("div", kr, [
              M("preferences") ? (o(), u("button", {
                key: 0,
                type: "button",
                class: "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400",
                title: `${s(st)} Preferences`,
                onClick: L[2] || (L[2] = (Ve) => pe.value = !pe.value)
              }, _r, 8, $r)) : C("", !0),
              M("pagingNav") ? (o(), u("button", {
                key: 1,
                type: "button",
                class: w(["pl-2", s(xe) ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                title: "First page",
                disabled: !s(xe),
                onClick: L[3] || (L[3] = (Ve) => rt(-s(re)))
              }, Sr, 10, Lr)) : C("", !0),
              M("pagingNav") ? (o(), u("button", {
                key: 2,
                type: "button",
                class: w(["pl-2", s(we) ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                title: "Previous page",
                disabled: !s(we),
                onClick: L[4] || (L[4] = (Ve) => rt(-s(R)))
              }, Tr, 10, Mr)) : C("", !0),
              M("pagingNav") ? (o(), u("button", {
                key: 3,
                type: "button",
                class: w(["pl-2", s(Fe) ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                title: "Next page",
                disabled: !s(Fe),
                onClick: L[5] || (L[5] = (Ve) => rt(s(R)))
              }, Pr, 10, Ir)) : C("", !0),
              M("pagingNav") ? (o(), u("button", {
                key: 4,
                type: "button",
                class: w(["pl-2", s(qe) ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                title: "Last page",
                disabled: !s(qe),
                onClick: L[6] || (L[6] = (Ve) => rt(s(re)))
              }, jr, 10, Dr)) : C("", !0)
            ]),
            M("pagingInfo") ? (o(), u("div", Br, [
              n("div", Rr, [
                Re.value ? (o(), u("span", Er, "Querying...")) : C("", !0),
                s(z).length ? (o(), u("span", Hr, [
                  Nr,
                  he(" " + V(ae.value + 1) + " - " + V(Math.min(ae.value + s(z).length, s(re))) + " ", 1),
                  n("span", null, " of " + V(s(re)), 1)
                ])) : P.value.completed ? (o(), u("span", zr, "No Results")) : C("", !0)
              ])
            ])) : C("", !0),
            n("div", Ur, [
              M("refresh") ? (o(), u("div", qr, [
                n("button", {
                  type: "button",
                  onClick: Ms,
                  title: "Refresh",
                  class: w(s(E))
                }, Kr, 2)
              ])) : C("", !0),
              M("downloadCsv") ? (o(), u("div", Gr, [
                n("button", {
                  type: "button",
                  onClick: As,
                  title: "Download CSV",
                  class: w(s(E))
                }, Zr, 2)
              ])) : C("", !0),
              M("copyApiUrl") ? (o(), u("div", Jr, [
                n("button", {
                  type: "button",
                  onClick: Ts,
                  title: "Copy API URL",
                  class: w(s(E))
                }, [
                  Pe.value ? (o(), u("svg", Xr, eu)) : (o(), u("svg", tu, nu)),
                  su
                ], 2)
              ])) : C("", !0),
              s(Se) && M("resetPreferences") ? (o(), u("div", au, [
                n("button", {
                  type: "button",
                  onClick: Is,
                  title: "Reset Preferences & Filters",
                  class: w(s(E))
                }, iu, 2)
              ])) : C("", !0),
              M("filtersView") && s(Ne) > 0 ? (o(), u("div", ru, [
                n("button", {
                  type: "button",
                  onClick: L[7] || (L[7] = (Ve) => ie.value = ie.value == "filters" ? null : "filters"),
                  class: w(s(E)),
                  "aria-expanded": "false"
                }, [
                  uu,
                  n("span", du, V(s(Ne)) + " " + V(s(Ne) == 1 ? "Filter" : "Filters"), 1),
                  ie.value != "filters" ? (o(), u("svg", cu, mu)) : (o(), u("svg", vu, gu))
                ], 2)
              ])) : C("", !0),
              M("newItem") && s(me).Create && s(Ds) ? (o(), u("div", pu, [
                n("button", {
                  type: "button",
                  onClick: Fs,
                  title: s(st),
                  class: w(s(E))
                }, [
                  bu,
                  n("span", wu, "New " + V(s(st)), 1)
                ], 10, yu)
              ])) : C("", !0),
              s(G).toolbarbuttons ? Z(x.$slots, "toolbarbuttons", {
                key: 6,
                toolbarButtonClass: s(E)
              }) : C("", !0)
            ])
          ])
        ])) : C("", !0),
        ie.value == "filters" ? (o(), X(dn, {
          key: 4,
          class: "border-y border-gray-200 dark:border-gray-800 py-8 my-2",
          definitions: s(bn),
          columns: S.value,
          onDone: L[8] || (L[8] = (Ve) => ie.value = null),
          onChange: Vs
        }, null, 8, ["definitions", "columns"])) : C("", !0),
        ue.value.error ?? P.value.error ? (o(), X(Me, {
          key: 5,
          status: ue.value.error ?? P.value.error
        }, null, 8, ["status"])) : Re.value ? (o(), X(ut, {
          key: 6,
          class: "p-2"
        })) : C("", !0),
        _e.value ? (o(), u("div", xu, [
          fe(un, {
            definitions: s(bn),
            column: _e.value.column,
            "top-left": _e.value.topLeft,
            onDone: _s,
            onSave: Ls
          }, null, 8, ["definitions", "column", "top-left"])
        ])) : C("", !0),
        s(z).length ? (o(), X(Xt, {
          key: 8,
          id: e.id,
          items: s(z),
          type: e.type,
          "selected-columns": s(le),
          class: "mt-1",
          onFiltersChanged: Ge,
          tableStyle: s(O),
          gridClass: s(N),
          grid2Class: s(q),
          grid3Class: s(Q),
          grid4Class: s($),
          tableClass: s(j),
          theadClass: s(B),
          theadRowClass: s(D),
          theadCellClass: s(F),
          tbodyClass: e.tbodyClass,
          rowClass: K,
          onRowSelected: $s,
          rowStyle: e.rowStyle,
          headerTitle: e.headerTitle,
          headerTitles: e.headerTitles,
          visibleFrom: e.visibleFrom,
          onHeaderSelected: Cs
        }, Ul({
          header: ve(({ column: Ve, label: ct }) => {
            var Ot;
            return [
              _("filtering") && Ee(Ve) ? (o(), u("div", ku, [
                n("span", $u, V(ct), 1),
                fe(Ln, {
                  column: S.value.find((Os) => Os.name.toLowerCase() === Ve.toLowerCase()),
                  "is-open": ((Ot = _e.value) == null ? void 0 : Ot.column.name) === Ve
                }, null, 8, ["column", "is-open"])
              ])) : (o(), u("div", Cu, [
                n("span", _u, V(ct), 1)
              ]))
            ];
          }),
          _: 2
        }, [
          $e(Object.keys(s(G)), (Ve) => ({
            name: Ve,
            fn: ve((ct) => [
              Z(x.$slots, Ve, _t(al(ct)))
            ])
          }))
        ]), 1032, ["id", "items", "type", "selected-columns", "tableStyle", "gridClass", "grid2Class", "grid3Class", "grid4Class", "tableClass", "theadClass", "theadRowClass", "theadCellClass", "tbodyClass", "rowStyle", "headerTitle", "headerTitles", "visibleFrom"])) : C("", !0)
      ]));
    };
  }
}), Vu = { class: "flex" }, Su = {
  key: 0,
  class: "w-4 h-4",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Mu = /* @__PURE__ */ n("g", { fill: "none" }, [
  /* @__PURE__ */ n("path", {
    d: "M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2.586a1 1 0 0 1-.293.707l-6.414 6.414a1 1 0 0 0-.293.707V17l-4 4v-6.586a1 1 0 0 0-.293-.707L3.293 7.293A1 1 0 0 1 3 6.586V4z",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  })
], -1), Au = [
  Mu
], Tu = /* @__PURE__ */ n("path", {
  d: "M505.5 658.7c3.2 4.4 9.7 4.4 12.9 0l178-246c3.8-5.3 0-12.7-6.5-12.7H643c-10.2 0-19.9 4.9-25.9 13.2L512 558.6L406.8 413.2c-6-8.3-15.6-13.2-25.9-13.2H334c-6.5 0-10.3 7.4-6.5 12.7l178 246z",
  fill: "currentColor"
}, null, -1), Iu = /* @__PURE__ */ n("path", {
  d: "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z",
  fill: "currentColor"
}, null, -1), Fu = [
  Tu,
  Iu
], Pu = {
  key: 2,
  class: "w-4 h-4",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, Du = /* @__PURE__ */ n("g", { fill: "none" }, [
  /* @__PURE__ */ n("path", {
    d: "M8.998 4.71L6.354 7.354a.5.5 0 1 1-.708-.707L9.115 3.18A.499.499 0 0 1 9.498 3H9.5a.5.5 0 0 1 .354.147l.01.01l3.49 3.49a.5.5 0 1 1-.707.707l-2.65-2.649V16.5a.5.5 0 0 1-1 0V4.71z",
    fill: "currentColor"
  })
], -1), Ou = [
  Du
], ju = {
  key: 3,
  class: "w-4 h-4",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, Bu = /* @__PURE__ */ n("g", { fill: "none" }, [
  /* @__PURE__ */ n("path", {
    d: "M10.002 15.29l2.645-2.644a.5.5 0 0 1 .707.707L9.886 16.82a.5.5 0 0 1-.384.179h-.001a.5.5 0 0 1-.354-.147l-.01-.01l-3.49-3.49a.5.5 0 1 1 .707-.707l2.648 2.649V3.5a.5.5 0 0 1 1 0v11.79z",
    fill: "currentColor"
  })
], -1), Ru = [
  Bu
], Eu = /* @__PURE__ */ Y({
  __name: "SettingsIcons",
  props: {
    column: null,
    isOpen: { type: Boolean }
  },
  setup(e) {
    return (l, t) => {
      var a, i, r, d, v, f, m;
      return o(), u("div", Vu, [
        (r = (i = (a = e.column) == null ? void 0 : a.settings) == null ? void 0 : i.filters) != null && r.length ? (o(), u("svg", Su, Au)) : (o(), u("svg", {
          key: 1,
          class: w(["w-4 h-4 transition-transform", e.isOpen ? "rotate-180" : ""]),
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 1024 1024"
        }, Fu, 2)),
        ((v = (d = e.column) == null ? void 0 : d.settings) == null ? void 0 : v.sort) === "ASC" ? (o(), u("svg", Pu, Ou)) : ((m = (f = e.column) == null ? void 0 : f.settings) == null ? void 0 : m.sort) === "DESC" ? (o(), u("svg", ju, Ru)) : C("", !0)
      ]);
    };
  }
}), Hu = /* @__PURE__ */ Y({
  __name: "EnsureAccessDialog",
  props: {
    title: null,
    subtitle: null,
    invalidAccess: null,
    alertClass: null
  },
  emits: ["done"],
  setup(e) {
    return (l, t) => {
      const a = U("EnsureAccess"), i = U("SlideOver");
      return e.invalidAccess ? (o(), X(i, {
        key: 0,
        title: e.title,
        onDone: t[0] || (t[0] = (r) => l.$emit("done")),
        "content-class": "relative flex-1"
      }, Ul({
        default: ve(() => [
          fe(a, {
            alertClass: e.alertClass,
            invalidAccess: e.invalidAccess
          }, null, 8, ["alertClass", "invalidAccess"])
        ]),
        _: 2
      }, [
        e.subtitle ? {
          name: "subtitle",
          fn: ve(() => [
            he(V(e.subtitle), 1)
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["title"])) : C("", !0);
    };
  }
}), Nu = ["for"], zu = { class: "mt-1 relative rounded-md shadow-sm" }, Uu = ["type", "name", "id", "placeholder", "value", "aria-invalid", "aria-describedby"], qu = {
  key: 0,
  class: "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
}, Qu = /* @__PURE__ */ n("svg", {
  class: "h-5 w-5 text-red-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ n("path", {
    "fill-rule": "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",
    "clip-rule": "evenodd"
  })
], -1), Ku = [
  Qu
], Gu = ["id"], Wu = ["id"], Zu = {
  inheritAttrs: !1
}, Ju = /* @__PURE__ */ Y({
  ...Zu,
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
  setup(e, { expose: l }) {
    const t = e, a = (h) => h.value;
    l({
      focus: r
    });
    const i = I();
    function r() {
      var h;
      (h = i.value) == null || h.focus();
    }
    const d = c(() => t.type || "text"), v = c(() => t.label ?? Ie(Ye(t.id))), f = c(() => t.placeholder ?? v.value);
    let m = Oe("ApiState", void 0);
    const g = c(() => dt.call({ responseStatus: t.status ?? (m == null ? void 0 : m.error.value) }, t.id)), p = c(() => [ot.base, g.value ? ot.invalid : ot.valid, t.inputClass]);
    return (h, b) => (o(), u("div", {
      class: w([h.$attrs.class])
    }, [
      s(v) ? (o(), u("label", {
        key: 0,
        for: e.id,
        class: w(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${e.labelClass ?? ""}`)
      }, V(s(v)), 11, Nu)) : C("", !0),
      n("div", zu, [
        n("input", Ce({
          ref_key: "txtInput",
          ref: i,
          type: s(d),
          name: e.id,
          id: e.id,
          class: s(p),
          placeholder: s(f),
          value: e.modelValue,
          onInput: b[0] || (b[0] = (k) => h.$emit("update:modelValue", a(k.target))),
          "aria-invalid": s(g) != null,
          "aria-describedby": `${e.id}-error`,
          step: "any"
        }, s(nt)(h.$attrs, ["class"])), null, 16, Uu),
        s(g) ? (o(), u("div", qu, Ku)) : C("", !0)
      ]),
      s(g) ? (o(), u("p", {
        key: 1,
        class: "mt-2 text-sm text-red-500",
        id: `${e.id}-error`
      }, V(s(g)), 9, Gu)) : e.help ? (o(), u("p", {
        key: 2,
        class: "mt-2 text-sm text-gray-500",
        id: `${e.id}-description`
      }, V(e.help), 9, Wu)) : C("", !0)
    ], 2));
  }
}), Xu = ["for"], Yu = { class: "mt-1 relative rounded-md shadow-sm" }, ed = ["name", "id", "placeholder", "aria-invalid", "aria-describedby"], td = ["id"], ld = ["id"], nd = {
  inheritAttrs: !1
}, sd = /* @__PURE__ */ Y({
  ...nd,
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
    const l = e, t = (f) => f.value, a = c(() => l.label ?? Ie(Ye(l.id))), i = c(() => l.placeholder ?? a.value);
    let r = Oe("ApiState", void 0);
    const d = c(() => dt.call({ responseStatus: l.status ?? (r == null ? void 0 : r.error.value) }, l.id)), v = c(() => ["shadow-sm " + ot.base, d.value ? "text-red-900 focus:ring-red-500 focus:border-red-500 border-red-300" : "text-gray-900 " + ot.valid, l.inputClass]);
    return (f, m) => (o(), u("div", {
      class: w([f.$attrs.class])
    }, [
      s(a) ? (o(), u("label", {
        key: 0,
        for: e.id,
        class: w(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${e.labelClass ?? ""}`)
      }, V(s(a)), 11, Xu)) : C("", !0),
      n("div", Yu, [
        n("textarea", Ce({
          name: e.id,
          id: e.id,
          class: s(v),
          placeholder: s(i),
          onInput: m[0] || (m[0] = (g) => f.$emit("update:modelValue", t(g.target))),
          "aria-invalid": s(d) != null,
          "aria-describedby": `${e.id}-error`
        }, s(nt)(f.$attrs, ["class"])), V(e.modelValue), 17, ed)
      ]),
      s(d) ? (o(), u("p", {
        key: 1,
        class: "mt-2 text-sm text-red-500",
        id: `${e.id}-error`
      }, V(s(d)), 9, td)) : e.help ? (o(), u("p", {
        key: 2,
        class: "mt-2 text-sm text-gray-500",
        id: `${e.id}-description`
      }, V(e.help), 9, ld)) : C("", !0)
    ], 2));
  }
}), ad = ["for"], od = ["id", "name", "value", "aria-invalid", "aria-describedby"], id = ["value"], rd = ["id"], ud = {
  inheritAttrs: !1
}, dd = /* @__PURE__ */ Y({
  ...ud,
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
    const l = e, t = (v) => v.value, a = c(() => l.label ?? Ie(Ye(l.id)));
    let i = Oe("ApiState", void 0);
    const r = c(() => dt.call({ responseStatus: l.status ?? (i == null ? void 0 : i.error.value) }, l.id)), d = c(() => l.entries || (l.values ? l.values.map((v) => ({ key: v, value: v })) : l.options ? Object.keys(l.options).map((v) => ({ key: v, value: l.options[v] })) : []));
    return (v, f) => (o(), u("div", {
      class: w([v.$attrs.class])
    }, [
      s(a) ? (o(), u("label", {
        key: 0,
        for: e.id,
        class: w(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${e.labelClass ?? ""}`)
      }, V(s(a)), 11, ad)) : C("", !0),
      n("select", Ce({
        id: e.id,
        name: e.id,
        class: [
          "mt-1 block w-full pl-3 pr-10 py-2 text-base focus:outline-none sm:text-sm rounded-md dark:text-white dark:bg-gray-900 dark:border-gray-600",
          s(r) ? "border-red-300 text-red-900 focus:ring-red-500 focus:border-red-500" : "border-gray-300 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500",
          e.inputClass
        ],
        value: e.modelValue,
        onInput: f[0] || (f[0] = (m) => v.$emit("update:modelValue", t(m.target))),
        "aria-invalid": s(r) != null,
        "aria-describedby": `${e.id}-error`
      }, s(nt)(v.$attrs, ["class"])), [
        (o(!0), u(be, null, $e(s(d), (m) => (o(), u("option", {
          value: m.key
        }, V(m.value), 9, id))), 256))
      ], 16, od),
      s(r) ? (o(), u("p", {
        key: 1,
        class: "mt-2 text-sm text-red-500",
        id: `${e.id}-error`
      }, V(s(r)), 9, rd)) : C("", !0)
    ], 2));
  }
}), cd = { class: "flex items-center h-5" }, fd = ["id", "name", "checked"], md = { class: "ml-3 text-sm" }, vd = ["for"], hd = {
  key: 0,
  class: "mt-2 text-sm text-red-500",
  id: "`${id}-error`"
}, gd = {
  key: 1,
  class: "mt-2 text-sm text-gray-500",
  id: "`${id}-description`"
}, pd = {
  inheritAttrs: !1
}, yd = /* @__PURE__ */ Y({
  ...pd,
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
  setup(e, { emit: l }) {
    const t = e, a = c(() => t.label ?? Ie(Ye(t.id)));
    let i = Oe("ApiState", void 0);
    const r = c(() => dt.call({ responseStatus: t.status ?? (i == null ? void 0 : i.error.value) }, t.id));
    return (d, v) => (o(), u("div", {
      class: w(["relative flex items-start", d.$attrs.class])
    }, [
      n("div", cd, [
        n("input", Ce({
          id: e.id,
          name: e.id,
          type: "checkbox",
          checked: e.modelValue,
          onInput: v[0] || (v[0] = (f) => d.$emit("update:modelValue", f.target.checked)),
          class: ["focus:ring-indigo-500 h-4 w-4 text-indigo-600 rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800", e.inputClass]
        }, s(nt)(d.$attrs, ["class"])), null, 16, fd)
      ]),
      n("div", md, [
        n("label", {
          for: e.id,
          class: w(`font-medium text-gray-700 dark:text-gray-300 ${e.labelClass ?? ""}`)
        }, V(s(a)), 11, vd),
        s(r) ? (o(), u("p", hd, V(s(r)), 1)) : e.help ? (o(), u("p", gd, V(e.help), 1)) : C("", !0)
      ])
    ], 2));
  }
}), bd = ["id"], wd = ["for"], xd = { class: "mt-1 relative rounded-md shadow-sm" }, kd = ["id", "name", "value"], $d = ["onClick"], Cd = { class: "flex flex-wrap pb-1.5" }, _d = { class: "pt-1.5 pl-1" }, Ld = { class: "inline-flex rounded-full items-center py-0.5 pl-2.5 pr-1 text-sm font-medium bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-300" }, Vd = ["onClick"], Sd = /* @__PURE__ */ n("svg", {
  class: "h-2 w-2",
  stroke: "currentColor",
  fill: "none",
  viewBox: "0 0 8 8"
}, [
  /* @__PURE__ */ n("path", {
    "stroke-linecap": "round",
    "stroke-width": "1.5",
    d: "M1 1l6 6m0-6L1 7"
  })
], -1), Md = [
  Sd
], Ad = { class: "pt-1.5 pl-1 shrink" }, Td = ["type", "name", "id", "aria-invalid", "aria-describedby", "onPaste"], Id = ["id"], Fd = ["onMouseover", "onClick"], Pd = { class: "block truncate" }, Dd = {
  key: 1,
  class: "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
}, Od = /* @__PURE__ */ n("svg", {
  class: "h-5 w-5 text-red-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ n("path", {
    "fill-rule": "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",
    "clip-rule": "evenodd"
  })
], -1), jd = [
  Od
], Bd = ["id"], Rd = ["id"], Ed = {
  inheritAttrs: !1
}, Hd = /* @__PURE__ */ Y({
  ...Ed,
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
    string: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const t = e, a = c(() => typeof t.modelValue == "string" ? t.modelValue.trim().length == 0 ? [] : t.modelValue.split(",") : t.modelValue || []), i = I(), r = I(!1), d = c(() => !t.allowableValues || t.allowableValues.length == 0 ? [] : t.allowableValues.filter((y) => !a.value.includes(y) && y.toLowerCase().includes(m.value.toLowerCase())));
    function v(y) {
      i.value = y;
    }
    const f = I(null), m = I(""), g = c(() => t.type || "text"), p = c(() => t.label ?? Ie(Ye(t.id)));
    let h = Oe("ApiState", void 0);
    const b = c(() => dt.call({ responseStatus: t.status ?? (h == null ? void 0 : h.error.value) }, t.id)), k = c(() => [
      "w-full cursor-text flex flex-wrap sm:text-sm rounded-md dark:text-white dark:bg-gray-900 border focus-within:border-transparent focus-within:ring-1 focus-within:outline-none",
      b.value ? "pr-10 border-red-300 text-red-900 placeholder-red-300 focus-within:outline-none focus-within:ring-red-500 focus-within:border-red-500" : "shadow-sm border-gray-300 dark:border-gray-600 focus-within:ring-indigo-500 focus-within:border-indigo-500",
      t.inputClass
    ]), _ = (y) => $(a.value.filter((A) => A != y));
    function M(y) {
      var A;
      document.activeElement === y.target && ((A = f.value) == null || A.focus());
    }
    const O = I();
    function N() {
      r.value = !0, O.value = !0;
    }
    function q() {
      N();
    }
    function Q() {
      G(B()), O.value = !1, setTimeout(() => {
        O.value || (r.value = !1);
      }, 200);
    }
    function $(y) {
      const A = t.string ? y.join(",") : y;
      l("update:modelValue", A);
    }
    function j(y) {
      if (y.key == "Backspace" && m.value.length == 0 && a.value.length > 0 && _(a.value[a.value.length - 1]), !(!t.allowableValues || t.allowableValues.length == 0))
        if (y.code == "Escape" || y.code == "Tab")
          r.value = !1;
        else if (y.code == "Home")
          i.value = d.value[0], E();
        else if (y.code == "End")
          i.value = d.value[d.value.length - 1], E();
        else if (y.code == "ArrowDown") {
          if (r.value = !0, !i.value)
            i.value = d.value[0];
          else {
            const A = d.value.indexOf(i.value);
            i.value = A + 1 < d.value.length ? d.value[A + 1] : d.value[0];
          }
          K();
        } else if (y.code == "ArrowUp") {
          if (!i.value)
            i.value = d.value[d.value.length - 1];
          else {
            const A = d.value.indexOf(i.value);
            i.value = A - 1 >= 0 ? d.value[A - 1] : d.value[d.value.length - 1];
          }
          K();
        } else
          y.code == "Enter" ? i.value && r.value ? (G(i.value), y.preventDefault()) : r.value = !1 : r.value = d.value.length > 0;
    }
    function B() {
      if (m.value.length == 0)
        return "";
      let y = ta(m.value.trim(), ",");
      return y[0] == "," && (y = y.substring(1)), y = y.trim(), y.length == 0 && r.value && d.value.length > 0 ? i.value : y;
    }
    function D(y) {
      const A = B();
      if (A.length > 0) {
        const le = t.delimiters.some((P) => P == y.key);
        if (le && y.preventDefault(), y.key == "Enter" || y.key == "NumpadEnter" || y.key.length == 1 && le) {
          G(A);
          return;
        }
      }
    }
    const F = { behavior: "smooth", block: "nearest", inline: "nearest", scrollMode: "if-needed" };
    function E() {
      setTimeout(() => {
        let y = ol(`#${t.id}-tag li.active`);
        y && y.scrollIntoView(F);
      }, 0);
    }
    function K() {
      setTimeout(() => {
        let y = ol(`#${t.id}-tag li.active`);
        y && ("scrollIntoViewIfNeeded" in y ? y.scrollIntoViewIfNeeded(F) : y.scrollIntoView(F));
      }, 0);
    }
    function G(y) {
      if (y.length === 0)
        return;
      const A = Array.from(a.value);
      A.indexOf(y) == -1 && A.push(y), $(A), m.value = "", r.value = !1;
    }
    function te(y) {
      var le;
      const A = (le = y.clipboardData) == null ? void 0 : le.getData("Text");
      T(A);
    }
    function T(y) {
      if (!y)
        return;
      const A = new RegExp(`\\n|\\t|${t.delimiters.join("|")}`), le = Array.from(a.value);
      y.split(A).map((P) => P.trim()).forEach((P) => {
        le.indexOf(P) == -1 && le.push(P);
      }), $(le), m.value = "";
    }
    return (y, A) => (o(), u("div", {
      class: w([y.$attrs.class]),
      id: `${e.id}-tag`,
      onmousemove: "cancelBlur=true"
    }, [
      s(p) ? (o(), u("label", {
        key: 0,
        for: e.id,
        class: w(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${e.labelClass ?? ""}`)
      }, V(s(p)), 11, wd)) : C("", !0),
      n("div", xd, [
        n("input", {
          type: "hidden",
          id: e.id,
          name: e.id,
          value: s(a).join(",")
        }, null, 8, kd),
        n("button", {
          class: w(s(k)),
          onClick: je(M, ["prevent"]),
          onFocus: A[2] || (A[2] = (le) => r.value = !0),
          tabindex: "-1"
        }, [
          n("div", Cd, [
            (o(!0), u(be, null, $e(s(a), (le) => (o(), u("div", _d, [
              n("span", Ld, [
                he(V(le) + " ", 1),
                n("button", {
                  type: "button",
                  onClick: (S) => _(le),
                  class: "flex-shrink-0 ml-1 h-4 w-4 rounded-full inline-flex items-center justify-center text-indigo-400 dark:text-indigo-500 hover:bg-indigo-200 dark:hover:bg-indigo-800 hover:text-indigo-500 dark:hover:text-indigo-400 focus:outline-none focus:bg-indigo-500 focus:text-white dark:focus:text-black"
                }, Md, 8, Vd)
              ])
            ]))), 256)),
            n("div", Ad, [
              gt(n("input", Ce({
                ref_key: "txtInput",
                ref: f,
                type: s(g),
                role: "combobox",
                "aria-controls": "options",
                "aria-expanded": "false",
                autocomplete: "off",
                spellcheck: "false",
                name: e.id,
                id: e.id,
                class: "p-0 dark:bg-transparent rounded-md border-none focus:!border-none focus:!outline-none",
                style: `box-shadow:none !important;width:${m.value.length + 1}ch`,
                "onUpdate:modelValue": A[0] || (A[0] = (le) => m.value = le),
                "aria-invalid": s(b) != null,
                "aria-describedby": `${e.id}-error`,
                onKeydown: j,
                onKeypress: D,
                onPaste: je(te, ["prevent", "stop"]),
                onFocus: q,
                onBlur: Q,
                onClick: A[1] || (A[1] = (le) => r.value = !0)
              }, s(nt)(y.$attrs, ["class"])), null, 16, Td), [
                [Ns, m.value]
              ])
            ])
          ])
        ], 42, $d),
        r.value && s(d).length ? (o(), u("ul", {
          key: 0,
          class: "absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-black py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",
          onKeydown: j,
          id: `${e.id}-options`,
          role: "listbox"
        }, [
          (o(!0), u(be, null, $e(s(d), (le) => (o(), u("li", {
            class: w([le === i.value ? "active bg-indigo-600 text-white" : "text-gray-900 dark:text-gray-100", "relative cursor-default select-none py-2 pl-3 pr-9"]),
            onMouseover: (S) => v(le),
            onClick: (S) => G(le),
            role: "option",
            tabindex: "-1"
          }, [
            n("span", Pd, V(le), 1)
          ], 42, Fd))), 256))
        ], 40, Id)) : C("", !0),
        s(b) ? (o(), u("div", Dd, jd)) : C("", !0)
      ]),
      s(b) ? (o(), u("p", {
        key: 1,
        class: "mt-2 text-sm text-red-500",
        id: `${e.id}-error`
      }, V(s(b)), 9, Bd)) : e.help ? (o(), u("p", {
        key: 2,
        class: "mt-2 text-sm text-gray-500",
        id: `${e.id}-description`
      }, V(e.help), 9, Rd)) : C("", !0)
    ], 10, bd));
  }
}), Nd = { class: "relative flex-grow mr-2 sm:mr-4" }, zd = ["for"], Ud = { class: "block mt-2" }, qd = { class: "sr-only" }, Qd = ["multiple", "name", "id", "placeholder", "aria-invalid", "aria-describedby"], Kd = {
  key: 0,
  class: "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
}, Gd = /* @__PURE__ */ n("svg", {
  class: "h-5 w-5 text-red-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ n("path", {
    "fill-rule": "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",
    "clip-rule": "evenodd"
  })
], -1), Wd = [
  Gd
], Zd = ["id"], Jd = ["id"], Xd = { key: 0 }, Yd = ["title"], ec = ["alt", "src"], tc = {
  key: 1,
  class: "mt-3"
}, lc = { class: "w-full" }, nc = { class: "pr-6 align-bottom pb-2" }, sc = ["title"], ac = ["src", "onError"], oc = ["href"], ic = {
  key: 1,
  class: "overflow-hidden"
}, rc = { class: "align-top pb-2 whitespace-nowrap" }, uc = {
  key: 0,
  class: "text-gray-500 dark:text-gray-400 text-sm bg-white dark:bg-black"
}, dc = /* @__PURE__ */ Y({
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
    var Q;
    const l = e, t = I(null), { assetsPathResolver: a, fallbackPathResolver: i } = wt(), r = {}, d = I(), v = I(((Q = l.files) == null ? void 0 : Q.map(f)) || []);
    function f($) {
      return $.filePath = a($.filePath), $;
    }
    l.values && l.values.length > 0 && (v.value = l.values.map(($) => {
      let j = $.replace(/\\/g, "/");
      return { fileName: la(pt(j, "/"), "."), filePath: j, contentType: Ol(j) };
    }).map(f));
    const m = c(() => l.label ?? Ie(Ye(l.id))), g = c(() => l.placeholder ?? m.value);
    let p = Oe("ApiState", void 0);
    const h = c(() => dt.call({ responseStatus: l.status ?? (p == null ? void 0 : p.error.value) }, l.id)), b = c(() => [
      "block w-full sm:text-sm rounded-md dark:text-white dark:bg-gray-900 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 dark:file:bg-violet-900 file:text-violet-700 dark:file:text-violet-200 hover:file:bg-violet-100 dark:hover:file:bg-violet-800",
      h.value ? "pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500" : "text-slate-500 dark:text-slate-400",
      l.inputClass
    ]), k = ($) => {
      let j = $.target;
      d.value = "", v.value = Array.from(j.files || []).map((B) => ({
        fileName: B.name,
        filePath: Xl(B),
        contentLength: B.size,
        contentType: B.type || Ol(B.name)
      }));
    }, _ = () => {
      var $;
      return ($ = t.value) == null ? void 0 : $.click();
    }, M = ($) => $ == null ? !1 : $.startsWith("data:") || $.startsWith("blob:"), O = c(() => {
      if (v.value.length > 0)
        return v.value[0].filePath;
      let $ = typeof l.modelValue == "string" ? l.modelValue : l.values && l.values[0];
      return $ && mt(a($)) || null;
    }), N = ($) => !$ || $.startsWith("data:") || $.endsWith(".svg") ? "" : "rounded-full object-cover";
    function q($) {
      d.value = i(O.value);
    }
    return Ut(Qn), ($, j) => (o(), u("div", {
      class: w(["flex", e.multiple ? "flex-col" : "justify-between"])
    }, [
      n("div", Nd, [
        s(m) ? (o(), u("label", {
          key: 0,
          for: e.id,
          class: w(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${e.labelClass ?? ""}`)
        }, V(s(m)), 11, zd)) : C("", !0),
        n("div", Ud, [
          n("span", qd, V(e.help ?? s(m)), 1),
          n("input", Ce({
            ref_key: "input",
            ref: t,
            type: "file",
            multiple: e.multiple,
            name: e.id,
            id: e.id,
            class: s(b),
            placeholder: s(g),
            "aria-invalid": s(h) != null,
            "aria-describedby": `${e.id}-error`
          }, $.$attrs, { onChange: k }), null, 16, Qd),
          s(h) ? (o(), u("div", Kd, Wd)) : C("", !0)
        ]),
        s(h) ? (o(), u("p", {
          key: 1,
          class: "mt-2 text-sm text-red-500",
          id: `${e.id}-error`
        }, V(s(h)), 9, Zd)) : e.help ? (o(), u("p", {
          key: 2,
          class: "mt-2 text-sm text-gray-500",
          id: `${e.id}-description`
        }, V(e.help), 9, Jd)) : C("", !0)
      ]),
      e.multiple ? (o(), u("div", tc, [
        n("table", lc, [
          (o(!0), u(be, null, $e(v.value, (B) => (o(), u("tr", null, [
            n("td", nc, [
              n("div", {
                class: "flex w-full",
                title: M(B.filePath) ? "" : B.filePath
              }, [
                n("img", {
                  src: r[s(mt)(B.filePath)] || s(a)(s(mt)(B.filePath)),
                  class: w(["mr-2 h-8 w-8", N(B.filePath)]),
                  onError: (D) => r[s(mt)(B.filePath)] = s(i)(s(mt)(B.filePath))
                }, null, 42, ac),
                M(B.filePath) ? (o(), u("span", ic, V(B.fileName), 1)) : (o(), u("a", {
                  key: 0,
                  href: s(a)(B.filePath || ""),
                  target: "_blank",
                  class: "overflow-hidden"
                }, V(B.fileName), 9, oc))
              ], 8, sc)
            ]),
            n("td", rc, [
              B.contentLength && B.contentLength > 0 ? (o(), u("span", uc, V(s(en)(B.contentLength)), 1)) : C("", !0)
            ])
          ]))), 256))
        ])
      ])) : (o(), u("div", Xd, [
        s(O) ? (o(), u("div", {
          key: 0,
          class: "shrink-0 cursor-pointer",
          title: M(s(O)) ? "" : s(O)
        }, [
          n("img", {
            onClick: _,
            class: w(["h-16 w-16", N(s(O))]),
            alt: `Current ${s(m) ?? ""}`,
            src: d.value || s(a)(s(O)),
            onError: q
          }, null, 42, ec)
        ], 8, Yd)) : C("", !0)
      ]))
    ], 2));
  }
}), cc = ["id"], fc = ["for"], mc = { class: "relative mt-1" }, vc = ["id", "placeholder"], hc = /* @__PURE__ */ n("svg", {
  class: "h-5 w-5 text-gray-400 dark:text-gray-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ n("path", {
    "fill-rule": "evenodd",
    d: "M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z",
    "clip-rule": "evenodd"
  })
], -1), gc = [
  hc
], pc = ["id"], yc = ["onMouseover", "onClick"], bc = /* @__PURE__ */ n("svg", {
  class: "h-5 w-5",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ n("path", {
    "fill-rule": "evenodd",
    d: "M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z",
    "clip-rule": "evenodd"
  })
], -1), wc = [
  bc
], xc = {
  key: 2,
  class: "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none",
  tabindex: "-1"
}, kc = /* @__PURE__ */ n("svg", {
  class: "h-5 w-5 text-red-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ n("path", {
    "fill-rule": "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",
    "clip-rule": "evenodd"
  })
], -1), $c = [
  kc
], Cc = ["id"], _c = ["id"], Lc = /* @__PURE__ */ Y({
  __name: "Autocomplete",
  props: {
    status: null,
    id: null,
    type: null,
    label: null,
    help: null,
    placeholder: null,
    multiple: { type: Boolean, default: !1 },
    options: { default: () => [] },
    modelValue: null,
    match: null,
    viewCount: { default: 100 },
    pageSize: { default: 8 }
  },
  emits: ["update:modelValue"],
  setup(e, { expose: l, emit: t }) {
    const a = e, i = I(!1);
    l({ toggle: E });
    function r(T) {
      return Array.isArray(a.modelValue) && a.modelValue.indexOf(T) >= 0;
    }
    const d = c(() => a.label ?? Ie(Ye(a.id)));
    let v = Oe("ApiState", void 0);
    const f = c(() => dt.call({ responseStatus: a.status ?? (v == null ? void 0 : v.error.value) }, a.id)), m = c(() => [ot.base, f.value ? ot.invalid : ot.valid]), g = I(null), p = I(""), h = I(null), b = I(a.viewCount), k = I([]), _ = c(() => p.value ? a.options.filter((y) => a.match(y, p.value)).slice(0, b.value) : a.options), M = ["Tab", "Escape", "ArrowDown", "ArrowUp", "Enter", "PageUp", "PageDown", "Home", "End"];
    function O(T) {
      h.value = T, k.value.indexOf(T) > Math.floor(b.value * 0.9) && (b.value += a.viewCount, te());
    }
    const N = [",", `
`, "	"];
    function q(T) {
      var A;
      const y = (A = T.clipboardData) == null ? void 0 : A.getData("Text");
      Q(y);
    }
    function Q(T) {
      if (!T)
        return;
      const y = N.some((A) => T.includes(A));
      if (!a.multiple || !y) {
        const A = a.options.filter((le) => a.match(le, T));
        A.length == 1 && (G(A[0]), i.value = !1, tl());
      } else if (y) {
        const A = new RegExp("\\r|\\n|\\t|,"), S = T.split(A).filter((P) => P.trim()).map((P) => a.options.find((ue) => a.match(ue, P))).filter((P) => !!P);
        if (S.length > 0) {
          p.value = "", i.value = !1, h.value = null;
          let P = Array.from(a.modelValue || []);
          S.forEach((ue) => {
            r(ue) ? P = P.filter((ie) => ie != ue) : P.push(ue);
          }), t("update:modelValue", P), tl();
        }
      }
    }
    function $(T) {
      M.indexOf(T.code) || K();
    }
    function j(T) {
      if (!(T.shiftKey || T.ctrlKey || T.altKey)) {
        if (!i.value) {
          T.code == "ArrowDown" && (i.value = !0, h.value = k.value[0]);
          return;
        }
        if (T.code == "Escape" || T.code == "Tab")
          i.value = !1;
        else if (T.code == "Home")
          h.value = k.value[0], D();
        else if (T.code == "End")
          h.value = k.value[k.value.length - 1], D();
        else if (T.code == "ArrowDown") {
          if (!h.value)
            h.value = k.value[0];
          else {
            const y = k.value.indexOf(h.value);
            h.value = y + 1 < k.value.length ? k.value[y + 1] : k.value[0];
          }
          F();
        } else if (T.code == "ArrowUp") {
          if (!h.value)
            h.value = k.value[k.value.length - 1];
          else {
            const y = k.value.indexOf(h.value);
            h.value = y - 1 >= 0 ? k.value[y - 1] : k.value[k.value.length - 1];
          }
          F();
        } else
          T.code == "Enter" && (h.value ? (G(h.value), a.multiple || (T.preventDefault(), tl())) : i.value = !1);
      }
    }
    const B = { behavior: "smooth", block: "nearest", inline: "nearest", scrollMode: "if-needed" };
    function D() {
      setTimeout(() => {
        let T = ol(`#${a.id}-autocomplete li.active`);
        T && T.scrollIntoView(B);
      }, 0);
    }
    function F() {
      setTimeout(() => {
        let T = ol(`#${a.id}-autocomplete li.active`);
        T && ("scrollIntoViewIfNeeded" in T ? T.scrollIntoViewIfNeeded(B) : T.scrollIntoView(B));
      }, 0);
    }
    function E(T) {
      var y;
      i.value = T, T && (K(), (y = g.value) == null || y.focus());
    }
    function K() {
      i.value = !0, te();
    }
    function G(T) {
      if (p.value = "", i.value = !1, a.multiple) {
        let y = Array.from(a.modelValue || []);
        r(T) ? y = y.filter((A) => A != T) : y.push(T), h.value = null, t("update:modelValue", y);
      } else {
        let y = T;
        a.modelValue == T && (y = null), t("update:modelValue", y);
      }
    }
    function te() {
      k.value = _.value;
    }
    return At(p, te), (T, y) => (o(), u("div", {
      id: `${e.id}-autocomplete`
    }, [
      s(d) ? (o(), u("label", {
        key: 0,
        for: `${e.id}-text`,
        class: "block text-sm font-medium text-gray-700 dark:text-gray-300"
      }, V(s(d)), 9, fc)) : C("", !0),
      n("div", mc, [
        gt(n("input", Ce({
          ref_key: "txtInput",
          ref: g,
          id: `${e.id}-text`,
          type: "text",
          role: "combobox",
          "aria-controls": "options",
          "aria-expanded": "false",
          autocomplete: "off",
          spellcheck: "false",
          "onUpdate:modelValue": y[0] || (y[0] = (A) => p.value = A),
          class: s(m),
          placeholder: e.multiple || !e.modelValue ? e.placeholder : "",
          onFocus: y[1] || (y[1] = (A) => i.value = !0),
          onKeydown: j,
          onKeyup: $,
          onClick: K,
          onPaste: q
        }, T.$attrs), null, 16, vc), [
          [zs, p.value]
        ]),
        n("button", {
          type: "button",
          onClick: y[2] || (y[2] = (A) => E(!i.value)),
          class: "absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none",
          tabindex: "-1"
        }, gc),
        i.value ? (o(), u("ul", {
          key: 0,
          class: "absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-black py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",
          onKeydown: j,
          id: `${e.id}-options`,
          role: "listbox"
        }, [
          (o(!0), u(be, null, $e(k.value, (A) => (o(), u("li", {
            class: w([A === h.value ? "active bg-indigo-600 text-white" : "text-gray-900 dark:text-gray-100", "relative cursor-default select-none py-2 pl-3 pr-9"]),
            onMouseover: (le) => O(A),
            onClick: (le) => G(A),
            role: "option",
            tabindex: "-1"
          }, [
            Z(T.$slots, "item", _t(al(A))),
            r(A) ? (o(), u("span", {
              key: 0,
              class: w(["absolute inset-y-0 right-0 flex items-center pr-4", A === h.value ? "text-white" : "text-indigo-600"])
            }, wc, 2)) : C("", !0)
          ], 42, yc))), 256))
        ], 40, pc)) : !e.multiple && e.modelValue ? (o(), u("div", {
          key: 1,
          onKeydown: j,
          onClick: y[3] || (y[3] = (A) => E(!i.value)),
          class: "h-8 -mt-8 ml-3 pt-0.5"
        }, [
          Z(T.$slots, "item", _t(al(e.modelValue)))
        ], 32)) : C("", !0),
        s(f) ? (o(), u("div", xc, $c)) : C("", !0)
      ]),
      s(f) ? (o(), u("p", {
        key: 1,
        class: "mt-2 text-sm text-red-500",
        id: `${e.id}-error`
      }, V(s(f)), 9, Cc)) : e.help ? (o(), u("p", {
        key: 2,
        class: "mt-2 text-sm text-gray-500",
        id: `${e.id}-description`
      }, V(e.help), 9, _c)) : C("", !0)
    ], 8, cc));
  }
}), Vc = ["id", "name", "value"], Sc = { class: "block truncate" }, Mc = /* @__PURE__ */ Y({
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
  setup(e, { expose: l, emit: t }) {
    const a = e;
    l({
      toggle(p) {
        var h;
        (h = d.value) == null || h.toggle(p);
      }
    });
    function i(p) {
      t("update:modelValue", p);
    }
    const r = c(() => a.multiple != null ? a.multiple : Array.isArray(a.modelValue)), d = I();
    function v(p, h) {
      return !h || p.value.toLowerCase().includes(h.toLowerCase());
    }
    const f = c(() => a.entries || (a.values ? a.values.map((p) => ({ key: p, value: p })) : a.options ? Object.keys(a.options).map((p) => ({ key: p, value: a.options[p] })) : [])), m = I(r.value ? [] : null);
    lt(() => {
      a.modelValue == null || a.modelValue === "" ? m.value = r.value ? [] : null : typeof a.modelValue == "string" ? m.value = f.value.find((p) => p.key === a.modelValue) || null : Array.isArray(a.modelValue) && (m.value = f.value.filter((p) => a.modelValue.includes(p.key)));
    });
    const g = c(() => m.value == null ? "" : Array.isArray(m.value) ? m.value.map((p) => encodeURIComponent(p.key)).join(",") : m.value.key);
    return (p, h) => {
      const b = U("Autocomplete");
      return o(), u(be, null, [
        n("input", {
          type: "hidden",
          id: e.id,
          name: e.id,
          value: s(g)
        }, null, 8, Vc),
        fe(b, Ce({
          ref_key: "input",
          ref: d,
          id: e.id,
          options: s(f),
          match: v,
          multiple: s(r)
        }, p.$attrs, {
          modelValue: m.value,
          "onUpdate:modelValue": [
            h[0] || (h[0] = (k) => m.value = k),
            i
          ]
        }), {
          item: ve(({ key: k, value: _ }) => [
            n("span", Sc, V(_), 1)
          ]),
          _: 1
        }, 16, ["id", "options", "multiple", "modelValue"])
      ], 64);
    };
  }
}), Ac = /* @__PURE__ */ Y({
  __name: "DynamicInput",
  props: {
    input: null,
    modelValue: null,
    api: null
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const t = e, a = c(() => t.input.type || "text"), i = "ignore,css,options,meta,allowableValues,allowableEntries,op,prop,type,id,name".split(","), r = c(() => nt(t.input, i)), d = I(De(
      t.modelValue[t.input.id],
      (f) => t.input.type === "file" ? null : t.input.type === "date" && f instanceof Date ? ml(f) : t.input.type === "time" ? jn(f) : f
    ));
    At(d, () => {
      t.modelValue[t.input.id] = d.value, l("update:modelValue", t.modelValue);
    });
    const v = c(() => {
      const f = t.modelValue[t.input.id];
      if (t.input.type !== "file" || !f)
        return [];
      if (typeof f == "string")
        return [{ filePath: f, fileName: pt(f, "/") }];
      if (!Array.isArray(f) && typeof f == "object")
        return f;
      if (Array.isArray(f)) {
        const m = [];
        return f.forEach((g) => {
          typeof g == "string" ? m.push({ filePath: g, fileName: pt(g, "/") }) : typeof g == "object" && m.push(g);
        }), m;
      }
    });
    return (f, m) => {
      var O, N, q, Q, $, j, B, D, F, E, K, G, te, T, y, A, le, S, P, ue, ie, se;
      const g = U("SelectInput"), p = U("CheckboxInput"), h = U("TagInput"), b = U("Combobox"), k = U("FileInput"), _ = U("TextareaInput"), M = U("TextInput");
      return s(a) == "select" ? (o(), X(g, Ce({
        key: 0,
        id: e.input.id,
        modelValue: d.value,
        "onUpdate:modelValue": m[0] || (m[0] = (H) => d.value = H),
        status: (O = e.api) == null ? void 0 : O.error,
        "input-class": (N = e.input.css) == null ? void 0 : N.input,
        "label-class": (q = e.input.css) == null ? void 0 : q.label,
        entries: e.input.allowableEntries,
        values: e.input.allowableValues
      }, s(r)), null, 16, ["id", "modelValue", "status", "input-class", "label-class", "entries", "values"])) : s(a) == "checkbox" ? (o(), X(p, Ce({
        key: 1,
        id: e.input.id,
        modelValue: d.value,
        "onUpdate:modelValue": m[1] || (m[1] = (H) => d.value = H),
        status: (Q = e.api) == null ? void 0 : Q.error,
        "input-class": ($ = e.input.css) == null ? void 0 : $.input,
        "label-class": (j = e.input.css) == null ? void 0 : j.label
      }, s(r)), null, 16, ["id", "modelValue", "status", "input-class", "label-class"])) : s(a) == "tag" ? (o(), X(h, Ce({
        key: 2,
        id: e.input.id,
        modelValue: d.value,
        "onUpdate:modelValue": m[2] || (m[2] = (H) => d.value = H),
        status: (B = e.api) == null ? void 0 : B.error,
        "input-class": (D = e.input.css) == null ? void 0 : D.input,
        "label-class": (F = e.input.css) == null ? void 0 : F.label,
        allowableValues: e.input.allowableValues,
        string: ((E = e.input.prop) == null ? void 0 : E.type) == "String"
      }, s(r)), null, 16, ["id", "modelValue", "status", "input-class", "label-class", "allowableValues", "string"])) : s(a) == "combobox" ? (o(), X(b, Ce({
        key: 3,
        id: e.input.id,
        modelValue: d.value,
        "onUpdate:modelValue": m[3] || (m[3] = (H) => d.value = H),
        status: (K = e.api) == null ? void 0 : K.error,
        "input-class": (G = e.input.css) == null ? void 0 : G.input,
        "label-class": (te = e.input.css) == null ? void 0 : te.label,
        entries: e.input.allowableEntries,
        values: e.input.allowableValues
      }, s(r)), null, 16, ["id", "modelValue", "status", "input-class", "label-class", "entries", "values"])) : s(a) == "file" ? (o(), X(k, Ce({
        key: 4,
        id: e.input.id,
        status: (T = e.api) == null ? void 0 : T.error,
        modelValue: d.value,
        "onUpdate:modelValue": m[4] || (m[4] = (H) => d.value = H),
        "input-class": (y = e.input.css) == null ? void 0 : y.input,
        "label-class": (A = e.input.css) == null ? void 0 : A.label,
        files: s(v)
      }, s(r)), null, 16, ["id", "status", "modelValue", "input-class", "label-class", "files"])) : s(a) == "textarea" ? (o(), X(_, Ce({
        key: 5,
        id: e.input.id,
        modelValue: d.value,
        "onUpdate:modelValue": m[5] || (m[5] = (H) => d.value = H),
        status: (le = e.api) == null ? void 0 : le.error,
        "input-class": (S = e.input.css) == null ? void 0 : S.input,
        "label-class": (P = e.input.css) == null ? void 0 : P.label
      }, s(r)), null, 16, ["id", "modelValue", "status", "input-class", "label-class"])) : (o(), X(M, Ce({
        key: 6,
        type: s(a),
        id: e.input.id,
        modelValue: d.value,
        "onUpdate:modelValue": m[6] || (m[6] = (H) => d.value = H),
        status: (ue = e.api) == null ? void 0 : ue.error,
        "input-class": (ie = e.input.css) == null ? void 0 : ie.input,
        "label-class": (se = e.input.css) == null ? void 0 : se.label
      }, s(r)), null, 16, ["type", "id", "modelValue", "status", "input-class", "label-class"]));
    };
  }
}), Tc = { class: "lookup-field" }, Ic = ["name", "value"], Fc = {
  key: 0,
  class: "flex justify-between"
}, Pc = ["for"], Dc = {
  key: 0,
  class: "flex items-center"
}, Oc = { class: "text-sm text-gray-500 dark:text-gray-400 pr-1" }, jc = /* @__PURE__ */ n("span", { class: "sr-only" }, "Clear", -1), Bc = /* @__PURE__ */ n("svg", {
  class: "h-4 w-4",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ n("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1), Rc = [
  jc,
  Bc
], Ec = {
  key: 1,
  class: "mt-1 relative"
}, Hc = { class: "w-full inline-flex truncate" }, Nc = { class: "text-blue-700 dark:text-blue-300 flex cursor-pointer" }, zc = /* @__PURE__ */ n("span", { class: "absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none" }, [
  /* @__PURE__ */ n("svg", {
    class: "h-5 w-5 text-gray-400 dark:text-gray-500",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    /* @__PURE__ */ n("path", {
      "fill-rule": "evenodd",
      d: "M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
      "clip-rule": "evenodd"
    })
  ])
], -1), Uc = ["id"], qc = ["id"], Qc = /* @__PURE__ */ Y({
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
  setup(e, { emit: l }) {
    const t = e, { config: a } = wt(), { metadataApi: i } = Je(), r = c(() => t.id || t.input.id), d = c(() => t.label ?? Ie(Ye(r.value)));
    let v = Oe("ApiState", void 0);
    const f = Oe("client"), m = c(() => dt.call({ responseStatus: t.status ?? (v == null ? void 0 : v.error.value) }, r.value)), g = I(""), p = I(""), h = c(() => ce(t.modelValue, r.value)), b = c(() => Ke(t.metadataType).find((N) => N.name.toLowerCase() == r.value.toLowerCase())), k = c(() => {
      var N, q, Q;
      return ((Q = it((q = (N = b.value) == null ? void 0 : N.ref) == null ? void 0 : q.model)) == null ? void 0 : Q.icon) || a.value.tableIcon;
    });
    let _;
    function M(N) {
      if (N) {
        if (_ == null) {
          console.warn("No ModalProvider required by LookupInput");
          return;
        }
        _.openModal({ name: "ModalLookup", ref: N }, (q) => {
          if (console.debug("openModal", g.value, " -> ", q, vt.setRefValue(N, q), N), q) {
            const Q = ce(q, N.refId);
            g.value = vt.setRefValue(N, q) || Q;
            const $ = s(t.modelValue);
            $[r.value] = Q, l("update:modelValue", $);
          }
        });
      }
    }
    function O() {
      t.modelValue[r.value] = null, g.value = "";
    }
    return lt(async () => {
      var D, F;
      _ = Oe("ModalProvider", void 0);
      const N = t.modelValue;
      t.modelValue[r.value] || (t.modelValue[r.value] = null);
      const q = b.value, Q = q == null ? void 0 : q.ref;
      if (!Q) {
        console.warn(`No RefInfo for property '${r.value}'`);
        return;
      }
      g.value = "";
      let $ = Q.selfId == null ? ce(N, q.name) : ce(N, Q.selfId);
      if (Et($) && ($ = ce(N, Q.refId)), $ == null)
        return;
      if (((D = i.value) == null ? void 0 : D.operations.find((E) => {
        var K;
        return ((K = E.dataModel) == null ? void 0 : K.name) == Q.model;
      })) != null) {
        const E = ce(N, q.name);
        if (Et(E))
          return;
        if (g.value = `${E}`, p.value = q.name, Q.refLabel != null) {
          const K = Ke(t.metadataType).find((te) => te.type == Q.model);
          K == null && console.warn(`Could not find ${Q.model} Property on ${t.metadataType.name}`);
          const G = K != null ? ce(N, K.name) : null;
          if (G != null) {
            let te = ce(G, Q.refLabel);
            te && (g.value = `${te}`, vt.setValue(Q.model, $, Q.refLabel, te));
          } else {
            const te = ((F = q.attributes) == null ? void 0 : F.some((y) => y.name == "Computed")) == !0;
            let T = await vt.getOrFetchValue(f, i.value, Q.model, Q.refId, Q.refLabel, te, $);
            g.value = T || `${Q.model}: ${g.value}`;
          }
        }
      }
    }), (N, q) => {
      var $;
      const Q = U("Icon");
      return o(), u("div", Tc, [
        n("input", {
          type: "hidden",
          name: s(r),
          value: s(h)
        }, null, 8, Ic),
        s(d) ? (o(), u("div", Fc, [
          n("label", {
            for: s(r),
            class: w(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${e.labelClass ?? ""}`)
          }, V(s(d)), 11, Pc),
          s(h) ? (o(), u("div", Dc, [
            n("span", Oc, V(s(h)), 1),
            n("button", {
              onClick: O,
              type: "button",
              title: "clear",
              class: "mr-1 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:ring-offset-black"
            }, Rc)
          ])) : C("", !0)
        ])) : C("", !0),
        ($ = s(b)) != null && $.ref ? (o(), u("div", Ec, [
          n("button", {
            type: "button",
            class: "lookup flex relative w-full bg-white dark:bg-black border border-gray-300 dark:border-gray-700 rounded-md shadow-sm pl-3 pr-10 py-2 text-left focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
            onClick: q[0] || (q[0] = (j) => M(s(b).ref)),
            "aria-haspopup": "listbox",
            "aria-expanded": "true",
            "aria-labelledby": "listbox-label"
          }, [
            n("span", Hc, [
              n("span", Nc, [
                fe(Q, {
                  class: "mr-1 w-5 h-5",
                  image: s(k)
                }, null, 8, ["image"]),
                n("span", null, V(g.value), 1)
              ])
            ]),
            zc
          ])
        ])) : C("", !0),
        s(m) ? (o(), u("p", {
          key: 2,
          class: "mt-2 text-sm text-red-500",
          id: `${s(r)}-error`
        }, V(s(m)), 9, Uc)) : e.help ? (o(), u("p", {
          key: 3,
          class: "mt-2 text-sm text-gray-500",
          id: `${s(r)}-description`
        }, V(e.help), 9, qc)) : C("", !0)
      ]);
    };
  }
}), Kc = /* @__PURE__ */ Y({
  __name: "AutoFormFields",
  props: {
    modelValue: null,
    type: null,
    api: null,
    formLayout: null,
    configureField: null,
    hideSummary: { type: Boolean },
    flexClass: { default: "flex flex-1 flex-col justify-between" },
    divideClass: { default: "divide-y divide-gray-200 px-4 sm:px-6" },
    spaceClass: { default: "space-y-6 pt-6 pb-5" },
    fieldsetClass: { default: "grid grid-cols-12 gap-6" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const t = e;
    function a(_, M) {
      t.modelValue[_.id] = ce(M, _.id), l("update:modelValue", t.modelValue);
    }
    const { metadataApi: i, apiOf: r, typeOf: d, typeOfRef: v, createFormLayout: f, Crud: m } = Je(), g = c(() => t.type || Tt(t.modelValue)), p = c(() => d(g.value)), h = c(() => {
      var _, M;
      return v((M = (_ = i.value) == null ? void 0 : _.operations.find((O) => O.request.name == g.value)) == null ? void 0 : M.dataModel) || p.value;
    }), b = c(() => {
      const _ = p.value;
      if (!_) {
        if (t.formLayout)
          return t.formLayout.map(($) => {
            const j = { name: $.id, type: no($.type) }, B = Object.assign({ prop: j }, $);
            return t.configureField && t.configureField(B), B;
          });
        throw new Error(`MetadataType for ${g.value} not found`);
      }
      const M = Ke(_), O = h.value, N = t.formLayout ? t.formLayout : f(_), q = [], Q = r(_.name);
      return N.forEach(($) => {
        var F;
        const j = M.find((E) => E.name == $.name);
        if ($.ignore)
          return;
        const B = ((F = O == null ? void 0 : O.properties) == null ? void 0 : F.find((E) => {
          var K;
          return E.name.toLowerCase() == ((K = $.name) == null ? void 0 : K.toLowerCase());
        })) ?? j, D = Object.assign({ prop: B, op: Q }, $);
        t.configureField && t.configureField(D), q.push(D);
      }), q;
    }), k = c(() => b.value.filter((_) => _.type != "hidden").map((_) => _.id));
    return (_, M) => {
      var Q;
      const O = U("ErrorSummary"), N = U("LookupInput"), q = U("DynamicInput");
      return o(), u(be, null, [
        e.hideSummary ? C("", !0) : (o(), X(O, {
          key: 0,
          status: (Q = e.api) == null ? void 0 : Q.error,
          except: s(k)
        }, null, 8, ["status", "except"])),
        n("div", {
          class: w(e.flexClass)
        }, [
          n("div", {
            class: w(e.divideClass)
          }, [
            n("div", {
              class: w(e.spaceClass)
            }, [
              n("fieldset", {
                class: w(e.fieldsetClass)
              }, [
                (o(!0), u(be, null, $e(s(b), ($) => {
                  var j, B, D;
                  return o(), u("div", {
                    key: "f.id",
                    class: w([
                      "w-full",
                      ((j = $.css) == null ? void 0 : j.field) ?? ($.type == "textarea" ? "col-span-12" : "col-span-12 xl:col-span-6" + ($.type == "checkbox" ? " flex items-center" : "")),
                      $.type == "hidden" ? "hidden" : ""
                    ])
                  }, [
                    ((B = $.prop) == null ? void 0 : B.ref) != null && $.type != "file" && !$.prop.isPrimaryKey ? (o(), X(N, {
                      key: 0,
                      metadataType: s(h),
                      input: $,
                      modelValue: e.modelValue,
                      "onUpdate:modelValue": (F) => a($, F),
                      status: (D = e.api) == null ? void 0 : D.error
                    }, null, 8, ["metadataType", "input", "modelValue", "onUpdate:modelValue", "status"])) : (o(), X(q, {
                      key: 1,
                      input: $,
                      modelValue: e.modelValue,
                      "onUpdate:modelValue": M[0] || (M[0] = (F) => _.$emit("update:modelValue", F)),
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
function yl() {
  const e = I(!1), l = I(), t = I(), a = Oe("client");
  function i({ message: h, errorCode: b, fieldName: k, errors: _ }) {
    return b || (b = "Exception"), _ || (_ = []), l.value = k ? new Ll({
      errorCode: b,
      message: h,
      errors: [new Vn({ fieldName: k, errorCode: b, message: h })]
    }) : new Ll({ errorCode: b, message: h, errors: _ });
  }
  function r({ fieldName: h, message: b, errorCode: k }) {
    if (k || (k = "Exception"), !l.value)
      i({ fieldName: h, message: b, errorCode: k });
    else {
      let _ = new Ll(l.value);
      _.errors = [
        ...(_.errors || []).filter((M) => {
          var O;
          return ((O = M.fieldName) == null ? void 0 : O.toLowerCase()) !== (h == null ? void 0 : h.toLowerCase());
        }),
        new Vn({ fieldName: h, message: b, errorCode: k })
      ], l.value = _;
    }
  }
  async function d(h, b, k) {
    e.value = !0;
    let _ = await a.api(kt(h), b, k);
    return e.value = !1, t.value = _.response, l.value = _.error, _;
  }
  async function v(h, b, k) {
    e.value = !0;
    let _ = await a.apiVoid(kt(h), b, k);
    return e.value = !1, t.value = _.response, l.value = _.error, _;
  }
  async function f(h, b, k, _) {
    e.value = !0;
    let M = await a.apiForm(kt(h), b, k, _);
    return e.value = !1, t.value = M.response, l.value = M.error, M;
  }
  async function m(h, b, k, _) {
    e.value = !0;
    let M = await a.apiFormVoid(kt(h), b, k, _);
    return e.value = !1, t.value = M.response, l.value = M.error, M;
  }
  async function g(h, b, k, _) {
    return Hn(a, h, b, k, _);
  }
  let p = { setError: i, addFieldError: r, loading: e, error: l, api: d, apiVoid: v, apiForm: f, apiFormVoid: m, swr: g, unRefs: kt, setRef: Bn };
  return qt("ApiState", p), p;
}
const Gc = ["onSubmit"], Wc = { key: 0 }, Zc = { key: 2 }, Jc = ["innerHTML"], Xc = /* @__PURE__ */ n("input", {
  type: "submit",
  class: "hidden"
}, null, -1), Yc = { class: "flex justify-end" }, e0 = /* @__PURE__ */ n("div", null, null, -1), t0 = /* @__PURE__ */ Y({
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
  setup(e, { emit: l }) {
    const t = e;
    qt("ModalProvider", {
      openModal: d
    });
    const i = I(), r = I();
    function d(F, E) {
      i.value = F, r.value = E;
    }
    async function v(F) {
      r.value && r.value(F), i.value = void 0, r.value = void 0;
    }
    const f = yl(), { getTypeName: m } = za(), { typeOf: g, Crud: p, createDto: h } = Je(), b = I(new Ze()), k = c(() => typeof t.buttonsClass == "string" ? t.formClass : Ue.buttonsClass), _ = c(() => typeof t.headingClass == "string" ? t.formClass : ht.headingClass), M = c(() => typeof t.subHeadingClass == "string" ? t.subHeadingClass : ht.subHeadingClass), O = c(() => {
      var F;
      return t.type ? m(t.type) : (F = t.modelValue) != null && F.getTypeName ? t.modelValue.getTypeName() : null;
    }), N = c(() => g(O.value)), q = I(t.modelValue || j()), Q = c(() => f.loading.value), $ = c(() => {
      var F;
      return t.heading || ((F = g(O.value)) == null ? void 0 : F.description) || Ie(O.value);
    });
    function j() {
      return typeof t.type == "string" ? h(t.type) : t.type ? new t.type() : t.modelValue;
    }
    async function B(F) {
      let E = F.target;
      const K = j();
      let G = De(K == null ? void 0 : K.getMethod, (y) => typeof y == "function" ? y() : null) || "POST", te = De(K == null ? void 0 : K.createResponse, (y) => typeof y == "function" ? y() : null) == null;
      const T = t.jsconfig;
      if (ql.hasRequestBody(G)) {
        let y = new K.constructor(), A = new FormData(E);
        console.debug("AutoForm.submitForm", y, A), te ? b.value = await f.apiFormVoid(y, A, { jsconfig: T }) : b.value = await f.apiForm(y, A, { jsconfig: T });
      } else {
        let y = new K.constructor(q.value);
        console.debug("AutoForm.submit", y), te ? b.value = await f.apiVoid(y, { jsconfig: T }) : b.value = await f.api(y, { jsconfig: T });
      }
      b.value.succeeded ? l("success", b.value.response) : l("error", b.value.error);
    }
    function D(F) {
      l("update:modelValue", F);
    }
    return (F, E) => {
      var y, A, le;
      const K = U("AutoFormFields"), G = U("FormLoading"), te = U("PrimaryButton"), T = U("ModalLookup");
      return s(N) ? (o(), u("form", {
        key: 0,
        onSubmit: je(B, ["prevent"]),
        autocomplete: "off",
        class: w(e.formClass)
      }, [
        n("div", {
          class: w(e.innerFormClass)
        }, [
          n("div", {
            class: w(e.bodyClass)
          }, [
            n("div", {
              class: w(e.headerClass)
            }, [
              F.$slots.heading ? (o(), u("div", Wc, [
                Z(F.$slots, "heading")
              ])) : (o(), u("h3", {
                key: 1,
                class: w(s(_))
              }, V(s($)), 3)),
              F.$slots.subheading ? (o(), u("div", Zc, [
                Z(F.$slots, "subheading")
              ])) : e.subHeading ? (o(), u("p", {
                key: 3,
                class: w(s(M))
              }, V(e.subHeading), 3)) : (y = s(N)) != null && y.notes ? (o(), u("p", {
                key: 4,
                class: w(["notes", s(M)]),
                innerHTML: (A = s(N)) == null ? void 0 : A.notes
              }, null, 10, Jc)) : C("", !0)
            ], 2),
            Z(F.$slots, "header"),
            Xc,
            fe(K, {
              type: e.type,
              modelValue: q.value,
              "onUpdate:modelValue": D,
              api: b.value,
              configureField: e.configureField
            }, null, 8, ["type", "modelValue", "api", "configureField"]),
            Z(F.$slots, "footer")
          ], 2),
          Z(F.$slots, "buttons", {}, () => [
            n("div", {
              class: w(s(k))
            }, [
              n("div", null, [
                e.showLoading && s(Q) ? (o(), X(G, { key: 0 })) : C("", !0)
              ]),
              n("div", Yc, [
                e0,
                fe(te, {
                  disabled: e.allowSubmit ? !e.allowSubmit(q.value) : !1
                }, {
                  default: ve(() => [
                    he(V(e.submitLabel), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ])
            ], 2)
          ])
        ], 2),
        ((le = i.value) == null ? void 0 : le.name) == "ModalLookup" && i.value.ref ? (o(), X(T, {
          key: 0,
          "ref-info": i.value.ref,
          onDone: v
        }, null, 8, ["ref-info"])) : C("", !0)
      ], 42, Gc)) : C("", !0);
    };
  }
}), l0 = { key: 0 }, n0 = { class: "text-red-700" }, s0 = /* @__PURE__ */ n("b", null, "type", -1), a0 = ["onSubmit"], o0 = { key: 0 }, i0 = { key: 2 }, r0 = ["innerHTML"], u0 = { class: "flex justify-end" }, d0 = {
  key: 2,
  class: "relative z-10",
  "aria-labelledby": "slide-over-title",
  role: "dialog",
  "aria-modal": "true"
}, c0 = /* @__PURE__ */ n("div", { class: "fixed inset-0" }, null, -1), f0 = { class: "fixed inset-0 overflow-hidden" }, m0 = ["onSubmit"], v0 = { class: "flex min-h-0 flex-1 flex-col overflow-auto" }, h0 = { class: "flex-1" }, g0 = { class: "bg-gray-50 dark:bg-gray-900 px-4 py-6 sm:px-6" }, p0 = { class: "flex items-start justify-between space-x-3" }, y0 = { class: "space-y-1" }, b0 = { key: 0 }, w0 = { key: 2 }, x0 = ["innerHTML"], k0 = { class: "flex h-7 items-center" }, $0 = { class: "flex justify-end" }, C0 = /* @__PURE__ */ Y({
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
    configureField: null
  },
  emits: ["done", "save", "error"],
  setup(e, { emit: l }) {
    const t = e;
    function a(S) {
    }
    qt("ModalProvider", {
      openModal: v
    });
    const r = I(), d = I();
    function v(S, P) {
      r.value = S, d.value = P;
    }
    async function f(S) {
      d.value && d.value(S), r.value = void 0, d.value = void 0;
    }
    const { typeOf: m, typeProperties: g, Crud: p, createDto: h, formValues: b } = Je(), k = c(() => Tt(t.type)), _ = c(() => m(k.value)), M = I(typeof t.type == "string" ? h(t.type) : t.type ? new t.type() : null), O = c(() => t.panelClass || Ue.panelClass(t.formStyle)), N = c(() => t.formClass || Ue.formClass(t.formStyle)), q = c(() => t.headingClass || Ue.headingClass(t.formStyle)), Q = c(() => t.subHeadingClass || Ue.subHeadingClass(t.formStyle)), $ = c(() => t.buttonsClass || Ue.buttonsClass), j = c(() => p.model(_.value)), B = c(() => {
      var S;
      return t.heading || ((S = m(k.value)) == null ? void 0 : S.description) || (j.value ? `New ${Ie(j.value)}` : Ie(k.value));
    }), D = I(new Ze());
    let F = yl(), E = c(() => F.loading.value);
    async function K(S) {
      var se, H;
      let P = S.target;
      if (!t.autosave) {
        l("save", new M.value.constructor(b(P, g(_.value))));
        return;
      }
      let ue = De((se = M.value) == null ? void 0 : se.getMethod, (J) => typeof J == "function" ? J() : null) || "POST", ie = De((H = M.value) == null ? void 0 : H.createResponse, (J) => typeof J == "function" ? J() : null) == null;
      if (ql.hasRequestBody(ue)) {
        let J = new M.value.constructor(), pe = new FormData(P);
        ie ? D.value = await F.apiFormVoid(J, pe, { jsconfig: "eccn" }) : D.value = await F.apiForm(J, pe, { jsconfig: "eccn" });
      } else {
        let J = b(P, g(_.value)), pe = new M.value.constructor(J);
        ie ? D.value = await F.apiVoid(pe, { jsconfig: "eccn" }) : D.value = await F.api(pe, { jsconfig: "eccn" });
      }
      D.value.succeeded ? (P.reset(), l("save", D.value.response)) : l("error", D.value.error);
    }
    function G() {
      l("done");
    }
    const te = I(!1), T = I(""), y = {
      entering: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-full", to: "translate-x-0" },
      leaving: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-0", to: "translate-x-full" }
    };
    At(te, () => {
      Lt(y, T, te.value), te.value || setTimeout(G, 700);
    }), te.value = !0;
    function A() {
      t.formStyle == "slideOver" ? te.value = !1 : G();
    }
    const le = (S) => {
      S.key === "Escape" && A();
    };
    return lt(() => window.addEventListener("keydown", le)), Ut(() => window.removeEventListener("keydown", le)), (S, P) => {
      var _e, ae, Pe, Ae, ge;
      const ue = U("AutoFormFields"), ie = U("FormLoading"), se = U("SecondaryButton"), H = U("PrimaryButton"), J = U("CloseButton"), pe = U("ModalLookup");
      return o(), u("div", null, [
        s(_) ? e.formStyle == "card" ? (o(), u("div", {
          key: 1,
          class: w(s(O))
        }, [
          n("form", {
            onSubmit: je(K, ["prevent"])
          }, [
            n("div", {
              class: w(s(N))
            }, [
              n("div", null, [
                S.$slots.heading ? (o(), u("div", o0, [
                  Z(S.$slots, "heading")
                ])) : (o(), u("h3", {
                  key: 1,
                  class: w(s(q))
                }, V(s(B)), 3)),
                S.$slots.subheading ? (o(), u("div", i0, [
                  Z(S.$slots, "subheading")
                ])) : e.subHeading ? (o(), u("p", {
                  key: 3,
                  class: w(s(Q))
                }, V(e.subHeading), 3)) : (_e = s(_)) != null && _e.notes ? (o(), u("p", {
                  key: 4,
                  class: w(["notes", s(Q)]),
                  innerHTML: (ae = s(_)) == null ? void 0 : ae.notes
                }, null, 10, r0)) : C("", !0)
              ]),
              Z(S.$slots, "header"),
              fe(ue, {
                modelValue: M.value,
                "onUpdate:modelValue": a,
                api: D.value,
                configureField: e.configureField
              }, null, 8, ["modelValue", "api", "configureField"]),
              Z(S.$slots, "footer")
            ], 2),
            n("div", {
              class: w(s($))
            }, [
              n("div", null, [
                e.showLoading && s(E) ? (o(), X(ie, { key: 0 })) : C("", !0)
              ]),
              n("div", u0, [
                e.showCancel ? (o(), X(se, {
                  key: 0,
                  onClick: A,
                  disabled: s(E)
                }, {
                  default: ve(() => [
                    he("Cancel")
                  ]),
                  _: 1
                }, 8, ["disabled"])) : C("", !0),
                fe(H, {
                  type: "submit",
                  class: "ml-4",
                  disabled: s(E)
                }, {
                  default: ve(() => [
                    he("Save")
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ])
            ], 2)
          ], 40, a0)
        ], 2)) : (o(), u("div", d0, [
          c0,
          n("div", f0, [
            n("div", {
              onMousedown: A,
              class: "absolute inset-0 overflow-hidden"
            }, [
              n("div", {
                onMousedown: P[0] || (P[0] = je(() => {
                }, ["stop"])),
                class: "pointer-events-none fixed inset-y-0 right-0 flex pl-10"
              }, [
                n("div", {
                  class: w(["pointer-events-auto w-screen xl:max-w-3xl md:max-w-xl max-w-lg", T.value])
                }, [
                  n("form", {
                    class: w(s(N)),
                    onSubmit: je(K, ["prevent"])
                  }, [
                    n("div", v0, [
                      n("div", h0, [
                        n("div", g0, [
                          n("div", p0, [
                            n("div", y0, [
                              S.$slots.heading ? (o(), u("div", b0, [
                                Z(S.$slots, "heading")
                              ])) : (o(), u("h3", {
                                key: 1,
                                class: w(s(q))
                              }, V(s(B)), 3)),
                              S.$slots.subheading ? (o(), u("div", w0, [
                                Z(S.$slots, "subheading")
                              ])) : e.subHeading ? (o(), u("p", {
                                key: 3,
                                class: w(s(Q))
                              }, V(e.subHeading), 3)) : (Pe = s(_)) != null && Pe.notes ? (o(), u("p", {
                                key: 4,
                                class: w(["notes", s(Q)]),
                                innerHTML: (Ae = s(_)) == null ? void 0 : Ae.notes
                              }, null, 10, x0)) : C("", !0)
                            ]),
                            n("div", k0, [
                              fe(J, {
                                "button-class": "bg-gray-50 dark:bg-gray-900",
                                onClose: A
                              })
                            ])
                          ])
                        ]),
                        Z(S.$slots, "header"),
                        fe(ue, {
                          modelValue: M.value,
                          "onUpdate:modelValue": a,
                          api: D.value,
                          configureField: e.configureField
                        }, null, 8, ["modelValue", "api", "configureField"]),
                        Z(S.$slots, "footer")
                      ])
                    ]),
                    n("div", {
                      class: w(s($))
                    }, [
                      n("div", null, [
                        e.showLoading && s(E) ? (o(), X(ie, { key: 0 })) : C("", !0)
                      ]),
                      n("div", $0, [
                        e.showCancel ? (o(), X(se, {
                          key: 0,
                          onClick: A,
                          disabled: s(E)
                        }, {
                          default: ve(() => [
                            he("Cancel")
                          ]),
                          _: 1
                        }, 8, ["disabled"])) : C("", !0),
                        fe(H, {
                          type: "submit",
                          class: "ml-4",
                          disabled: s(E)
                        }, {
                          default: ve(() => [
                            he("Save")
                          ]),
                          _: 1
                        }, 8, ["disabled"])
                      ])
                    ], 2)
                  ], 42, m0)
                ], 2)
              ], 32)
            ], 32)
          ])
        ])) : (o(), u("div", l0, [
          n("p", n0, [
            he("Could not create form for unknown "),
            s0,
            he(" " + V(s(k)), 1)
          ])
        ])),
        ((ge = r.value) == null ? void 0 : ge.name) == "ModalLookup" && r.value.ref ? (o(), X(pe, {
          key: 3,
          "ref-info": r.value.ref,
          onDone: f
        }, null, 8, ["ref-info"])) : C("", !0)
      ]);
    };
  }
}), _0 = { key: 0 }, L0 = { class: "text-red-700" }, V0 = /* @__PURE__ */ n("b", null, "type", -1), S0 = ["onSubmit"], M0 = { key: 0 }, A0 = { key: 2 }, T0 = ["innerHTML"], I0 = { class: "flex justify-end" }, F0 = {
  key: 2,
  class: "relative z-10",
  "aria-labelledby": "slide-over-title",
  role: "dialog",
  "aria-modal": "true"
}, P0 = /* @__PURE__ */ n("div", { class: "fixed inset-0" }, null, -1), D0 = { class: "fixed inset-0 overflow-hidden" }, O0 = ["onSubmit"], j0 = { class: "flex min-h-0 flex-1 flex-col overflow-auto" }, B0 = { class: "flex-1" }, R0 = { class: "bg-gray-50 dark:bg-gray-900 px-4 py-6 sm:px-6" }, E0 = { class: "flex items-start justify-between space-x-3" }, H0 = { class: "space-y-1" }, N0 = { key: 0 }, z0 = { key: 2 }, U0 = ["innerHTML"], q0 = { class: "flex h-7 items-center" }, Q0 = { class: "flex justify-end" }, K0 = /* @__PURE__ */ Y({
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
    configureField: null
  },
  emits: ["done", "save", "delete", "error"],
  setup(e, { emit: l }) {
    const t = e;
    function a(H) {
    }
    qt("ModalProvider", {
      openModal: v
    });
    const r = I(), d = I();
    function v(H, J) {
      r.value = H, d.value = J;
    }
    async function f(H) {
      d.value && d.value(H), r.value = void 0, d.value = void 0;
    }
    const { typeOf: m, apiOf: g, typeProperties: p, createFormLayout: h, getPrimaryKey: b, Crud: k, createDto: _, formValues: M } = Je(), O = c(() => Tt(t.type)), N = c(() => m(O.value)), q = I(typeof t.type == "string" ? _(t.type, nl(t.modelValue)) : t.type ? new t.type(nl(t.modelValue)) : null), Q = c(() => t.panelClass || Ue.panelClass(t.formStyle)), $ = c(() => t.formClass || Ue.formClass(t.formStyle)), j = c(() => t.headingClass || Ue.headingClass(t.formStyle)), B = c(() => t.subHeadingClass || Ue.subHeadingClass(t.formStyle)), D = c(() => k.model(N.value)), F = c(() => {
      var H;
      return t.heading || ((H = m(O.value)) == null ? void 0 : H.description) || (D.value ? `Update ${Ie(D.value)}` : Ie(O.value));
    }), E = I(new Ze());
    let K = yl(), G = c(() => K.loading.value);
    const te = () => De(m(k.model(N.value)), (H) => b(H));
    function T(H) {
      const { op: J, prop: pe } = H;
      J && (k.isPatch(J) || k.isUpdate(J)) && (H.disabled = pe == null ? void 0 : pe.isPrimaryKey), t.configureField && t.configureField(H);
    }
    async function y(H) {
      var Pe, Ae;
      let J = H.target;
      if (!t.autosave) {
        l("save", new q.value.constructor(M(J, p(N.value))));
        return;
      }
      let pe = De((Pe = q.value) == null ? void 0 : Pe.getMethod, (ge) => typeof ge == "function" ? ge() : null) || "POST", _e = De((Ae = q.value) == null ? void 0 : Ae.createResponse, (ge) => typeof ge == "function" ? ge() : null) == null, ae = te();
      if (ql.hasRequestBody(pe)) {
        let ge = new q.value.constructor(), Re = ce(t.modelValue, ae.name), Se = new FormData(J);
        ae && !Array.from(Se.keys()).some((R) => R.toLowerCase() == ae.name.toLowerCase()) && Se.append(ae.name, Re);
        let Ne = [];
        const Xe = O.value && g(O.value);
        if (Xe && k.isPatch(Xe)) {
          let R = nl(t.modelValue), z = h(N.value), re = {};
          if (ae && (re[ae.name] = Re), z.forEach((we) => {
            let Fe = we.id, qe = ce(R, Fe);
            if (ae && ae.name.toLowerCase() === Fe.toLowerCase())
              return;
            let ke = Se.get(Fe), Ee = ke != null, Qe = we.type === "checkbox" ? Ee !== !!qe : we.type === "file" ? Ee : ke != qe;
            !ke && !qe && (Qe = !1), Qe && (ke ? re[Fe] = ke : we.type !== "file" && Ne.push(Fe));
          }), Array.from(Se.keys()).filter((we) => !re[we]).forEach((we) => Se.delete(we)), Array.from(Se.keys()).filter((we) => we.toLowerCase() != ae.name.toLowerCase()).length == 0 && Ne.length == 0) {
            ie();
            return;
          }
        }
        const ze = Ne.length > 0 ? { jsconfig: "eccn", reset: Ne } : { jsconfig: "eccn" };
        _e ? E.value = await K.apiFormVoid(ge, Se, ze) : E.value = await K.apiForm(ge, Se, ze);
      } else {
        let ge = M(J, p(N.value));
        ae && !ce(ge, ae.name) && (ge[ae.name] = ce(t.modelValue, ae.name));
        let Re = new q.value.constructor(ge);
        _e ? E.value = await K.apiVoid(Re, { jsconfig: "eccn" }) : E.value = await K.api(Re, { jsconfig: "eccn" });
      }
      E.value.succeeded ? (J.reset(), l("save", E.value.response)) : l("error", E.value.error);
    }
    async function A(H) {
      let J = te();
      const pe = J ? ce(t.modelValue, J.name) : null;
      if (!pe) {
        console.error(`Could not find Primary Key for Type ${O.value} (${D.value})`);
        return;
      }
      const _e = { [J.name]: pe }, ae = typeof t.deleteType == "string" ? _(t.deleteType, _e) : t.deleteType ? new t.deleteType(_e) : null;
      De(ae.createResponse, (Ae) => typeof Ae == "function" ? Ae() : null) == null ? E.value = await K.apiVoid(ae) : E.value = await K.api(ae), E.value.succeeded ? l("delete", E.value.response) : l("error", E.value.error);
    }
    function le() {
      l("done");
    }
    const S = I(!1), P = I(""), ue = {
      entering: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-full", to: "translate-x-0" },
      leaving: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-0", to: "translate-x-full" }
    };
    At(S, () => {
      Lt(ue, P, S.value), S.value || setTimeout(le, 700);
    }), S.value = !0;
    function ie() {
      t.formStyle == "slideOver" ? S.value = !1 : le();
    }
    const se = (H) => {
      H.key === "Escape" && ie();
    };
    return lt(() => window.addEventListener("keydown", se)), Ut(() => window.removeEventListener("keydown", se)), (H, J) => {
      var Se, Ne, Xe, ze, R;
      const pe = U("AutoFormFields"), _e = U("ConfirmDelete"), ae = U("FormLoading"), Pe = U("SecondaryButton"), Ae = U("PrimaryButton"), ge = U("CloseButton"), Re = U("ModalLookup");
      return o(), u("div", null, [
        s(N) ? e.formStyle == "card" ? (o(), u("div", {
          key: 1,
          class: w(s(Q))
        }, [
          n("form", {
            onSubmit: je(y, ["prevent"])
          }, [
            n("div", {
              class: w(s($))
            }, [
              n("div", null, [
                H.$slots.heading ? (o(), u("div", M0, [
                  Z(H.$slots, "heading")
                ])) : (o(), u("h3", {
                  key: 1,
                  class: w(s(j))
                }, V(s(F)), 3)),
                H.$slots.subheading ? (o(), u("div", A0, [
                  Z(H.$slots, "subheading")
                ])) : e.subHeading ? (o(), u("p", {
                  key: 3,
                  class: w(s(B))
                }, V(e.subHeading), 3)) : (Se = s(N)) != null && Se.notes ? (o(), u("p", {
                  key: 4,
                  class: w(["notes", s(B)]),
                  innerHTML: (Ne = s(N)) == null ? void 0 : Ne.notes
                }, null, 10, T0)) : C("", !0)
              ]),
              Z(H.$slots, "header"),
              fe(pe, {
                modelValue: q.value,
                "onUpdate:modelValue": a,
                api: E.value,
                configureField: e.configureField
              }, null, 8, ["modelValue", "api", "configureField"]),
              Z(H.$slots, "footer")
            ], 2),
            n("div", {
              class: w(s(Ue).buttonsClass)
            }, [
              n("div", null, [
                e.deleteType ? (o(), X(_e, {
                  key: 0,
                  onDelete: A
                })) : C("", !0)
              ]),
              n("div", null, [
                e.showLoading && s(G) ? (o(), X(ae, { key: 0 })) : C("", !0)
              ]),
              n("div", I0, [
                fe(Pe, {
                  onClick: ie,
                  disabled: s(G)
                }, {
                  default: ve(() => [
                    he("Cancel")
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                fe(Ae, {
                  type: "submit",
                  class: "ml-4",
                  disabled: s(G)
                }, {
                  default: ve(() => [
                    he("Save")
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ])
            ], 2)
          ], 40, S0)
        ], 2)) : (o(), u("div", F0, [
          P0,
          n("div", D0, [
            n("div", {
              onMousedown: ie,
              class: "absolute inset-0 overflow-hidden"
            }, [
              n("div", {
                onMousedown: J[0] || (J[0] = je(() => {
                }, ["stop"])),
                class: "pointer-events-none fixed inset-y-0 right-0 flex pl-10"
              }, [
                n("div", {
                  class: w(["pointer-events-auto w-screen xl:max-w-3xl md:max-w-xl max-w-lg", P.value])
                }, [
                  n("form", {
                    class: w(s($)),
                    onSubmit: je(y, ["prevent"])
                  }, [
                    n("div", j0, [
                      n("div", B0, [
                        n("div", R0, [
                          n("div", E0, [
                            n("div", H0, [
                              H.$slots.heading ? (o(), u("div", N0, [
                                Z(H.$slots, "heading")
                              ])) : (o(), u("h3", {
                                key: 1,
                                class: w(s(j))
                              }, V(s(F)), 3)),
                              H.$slots.subheading ? (o(), u("div", z0, [
                                Z(H.$slots, "subheading")
                              ])) : e.subHeading ? (o(), u("p", {
                                key: 3,
                                class: w(s(B))
                              }, V(e.subHeading), 3)) : (Xe = s(N)) != null && Xe.notes ? (o(), u("p", {
                                key: 4,
                                class: w(["notes", s(B)]),
                                innerHTML: (ze = s(N)) == null ? void 0 : ze.notes
                              }, null, 10, U0)) : C("", !0)
                            ]),
                            n("div", q0, [
                              fe(ge, {
                                "button-class": "bg-gray-50 dark:bg-gray-900",
                                onClose: ie
                              })
                            ])
                          ])
                        ]),
                        Z(H.$slots, "header"),
                        fe(pe, {
                          modelValue: q.value,
                          "onUpdate:modelValue": a,
                          api: E.value,
                          configureField: T
                        }, null, 8, ["modelValue", "api"]),
                        Z(H.$slots, "footer")
                      ])
                    ]),
                    n("div", {
                      class: w(s(Ue).buttonsClass)
                    }, [
                      n("div", null, [
                        e.deleteType ? (o(), X(_e, {
                          key: 0,
                          onDelete: A
                        })) : C("", !0)
                      ]),
                      n("div", null, [
                        e.showLoading && s(G) ? (o(), X(ae, { key: 0 })) : C("", !0)
                      ]),
                      n("div", Q0, [
                        fe(Pe, {
                          onClick: ie,
                          disabled: s(G)
                        }, {
                          default: ve(() => [
                            he("Cancel")
                          ]),
                          _: 1
                        }, 8, ["disabled"]),
                        fe(Ae, {
                          type: "submit",
                          class: "ml-4",
                          disabled: s(G)
                        }, {
                          default: ve(() => [
                            he("Save")
                          ]),
                          _: 1
                        }, 8, ["disabled"])
                      ])
                    ], 2)
                  ], 42, O0)
                ], 2)
              ], 32)
            ], 32)
          ])
        ])) : (o(), u("div", _0, [
          n("p", L0, [
            he("Could not create form for unknown "),
            V0,
            he(" " + V(s(O)), 1)
          ])
        ])),
        ((R = r.value) == null ? void 0 : R.name) == "ModalLookup" && r.value.ref ? (o(), X(Re, {
          key: 3,
          "ref-info": r.value.ref,
          onDone: f
        }, null, 8, ["ref-info"])) : C("", !0)
      ]);
    };
  }
}), G0 = /* @__PURE__ */ n("label", {
  for: "confirmDelete",
  class: "ml-2 mr-2 select-none"
}, "confirm", -1), W0 = ["onClick"], Z0 = /* @__PURE__ */ Y({
  __name: "ConfirmDelete",
  emits: ["delete"],
  setup(e, { emit: l }) {
    let t = I(!1);
    const a = () => {
      t.value && l("delete");
    }, i = c(() => [
      "select-none inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white",
      t.value ? "cursor-pointer bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500" : "bg-red-400"
    ]);
    return (r, d) => (o(), u(be, null, [
      gt(n("input", {
        id: "confirmDelete",
        type: "checkbox",
        class: "focus:ring-indigo-500 h-4 w-4 text-indigo-600 rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:ring-offset-black",
        "onUpdate:modelValue": d[0] || (d[0] = (v) => In(t) ? t.value = v : t = v)
      }, null, 512), [
        [Nl, s(t)]
      ]),
      G0,
      n("span", Ce({
        onClick: je(a, ["prevent"]),
        class: s(i)
      }, r.$attrs), [
        Z(r.$slots, "default", {}, () => [
          he("Delete")
        ])
      ], 16, W0)
    ], 64));
  }
}), J0 = {
  class: "flex",
  title: "loading..."
}, X0 = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  x: "0px",
  y: "0px",
  width: "24px",
  height: "30px",
  viewBox: "0 0 24 30"
}, Y0 = /* @__PURE__ */ dl('<rect x="0" y="10" width="4" height="10" fill="#333" opacity="0.2"><animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0s" dur="0.6s" repeatCount="indefinite"></animate></rect><rect x="8" y="10" width="4" height="10" fill="#333" opacity="0.2"><animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate></rect><rect x="16" y="10" width="4" height="10" fill="#333" opacity="0.2"><animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate></rect>', 3), ef = [
  Y0
], tf = { class: "ml-2 mt-1 text-gray-400" }, lf = /* @__PURE__ */ Y({
  __name: "FormLoading",
  props: {
    icon: { type: Boolean, default: !0 },
    text: { default: "loading..." }
  },
  setup(e) {
    return Oe("ApiState", void 0), (l, t) => (o(), u("div", J0, [
      e.icon ? (o(), u("svg", X0, ef)) : C("", !0),
      n("span", tf, V(e.text), 1)
    ]));
  }
}), nf = ["onClick"], sf = {
  key: 3,
  class: "flex justify-between items-center"
}, af = { class: "mr-1 select-none" }, of = ["onClick"], rf = /* @__PURE__ */ Y({
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
  setup(e, { emit: l }) {
    const t = e, a = I(), i = I(null), r = (S) => i.value === S, d = zl(), v = (S) => Object.keys(d).find((P) => P.toLowerCase() == S.toLowerCase() + "-header"), f = (S) => Object.keys(d).find((P) => P.toLowerCase() == S.toLowerCase()), m = c(() => Il(t.items).filter((S) => !!(d[S] || d[S + "-header"]))), { typeOf: g, typeProperties: p } = Je(), h = c(() => Tt(t.type)), b = c(() => g(h.value)), k = c(() => p(b.value));
    function _(S) {
      const P = t.headerTitles && ce(t.headerTitles, S) || S;
      return t.headerTitle ? t.headerTitle(P) : Dn(P);
    }
    function M(S) {
      const P = S.toLowerCase();
      return k.value.find((ue) => ue.name.toLowerCase() == P);
    }
    function O(S) {
      const P = M(S);
      return P != null && P.format ? P.format : (P == null ? void 0 : P.type) == "TimeSpan" || (P == null ? void 0 : P.type) == "TimeOnly" ? { method: "time" } : null;
    }
    const N = {
      xs: "xs:table-cell",
      sm: "sm:table-cell",
      md: "md:table-cell",
      lg: "lg:table-cell",
      xl: "xl:table-cell",
      "2xl": "2xl:table-cell",
      never: ""
    };
    function q(S) {
      const P = t.visibleFrom && ce(t.visibleFrom, S);
      return P && De(N[P], (ue) => `hidden ${ue}`);
    }
    const Q = c(() => t.gridClass ?? oe.getGridClass(t.tableStyle)), $ = c(() => t.grid2Class ?? oe.getGrid2Class(t.tableStyle)), j = c(() => t.grid3Class ?? oe.getGrid3Class(t.tableStyle)), B = c(() => t.grid4Class ?? oe.getGrid4Class(t.tableStyle)), D = c(() => t.tableClass ?? oe.getTableClass(t.tableStyle)), F = c(() => t.tbodyClass ?? oe.getTbodyClass(t.tbodyClass)), E = c(() => t.theadClass ?? oe.getTheadClass(t.tableStyle)), K = c(() => t.theadRowClass ?? oe.getTheadRowClass(t.tableStyle)), G = c(() => t.theadCellClass ?? oe.getTheadCellClass(t.tableStyle));
    function te(S, P) {
      return t.rowClass ? t.rowClass(S, P) : oe.getTableRowClass(t.tableStyle, P, !!(t.isSelected && t.isSelected(S)), t.isSelected != null);
    }
    function T(S, P) {
      return t.rowStyle ? t.rowStyle(S, P) : void 0;
    }
    const y = c(() => {
      const S = (typeof t.selectedColumns == "string" ? t.selectedColumns.split(",") : t.selectedColumns) || (m.value.length > 0 ? m.value : Il(t.items)), P = k.value.reduce((ue, ie) => (ue[ie.name.toLowerCase()] = ie.format, ue), {});
      return S.filter((ue) => {
        var ie;
        return ((ie = P[ue.toLowerCase()]) == null ? void 0 : ie.method) != "hidden";
      });
    });
    function A(S, P) {
      l("headerSelected", P, S);
    }
    function le(S, P, ue) {
      l("rowSelected", ue, S);
    }
    return (S, P) => {
      const ue = U("CellFormat"), ie = U("PreviewFormat");
      return e.items.length ? (o(), u("div", {
        key: 0,
        ref_key: "refResults",
        ref: a,
        class: w(s(Q))
      }, [
        n("div", {
          class: w(s($))
        }, [
          n("div", {
            class: w(s(j))
          }, [
            n("div", {
              class: w(s(B))
            }, [
              n("table", {
                class: w(s(D))
              }, [
                n("thead", {
                  class: w(s(E))
                }, [
                  n("tr", {
                    class: w(s(K))
                  }, [
                    (o(!0), u(be, null, $e(s(y), (se) => (o(), u("td", {
                      class: w([q(se), s(G), r(se) ? "text-gray-900 dark:text-gray-50" : "text-gray-500 dark:text-gray-400"])
                    }, [
                      n("div", {
                        onClick: (H) => A(H, se)
                      }, [
                        s(d)[se + "-header"] ? Z(S.$slots, se + "-header", {
                          key: 0,
                          column: se
                        }) : v(se) ? Z(S.$slots, v(se), {
                          key: 1,
                          column: se
                        }) : s(d).header ? Z(S.$slots, "header", {
                          key: 2,
                          column: se,
                          label: _(se)
                        }) : (o(), u("div", sf, [
                          n("span", af, V(_(se)), 1)
                        ]))
                      ], 8, nf)
                    ], 2))), 256))
                  ], 2)
                ], 2),
                n("tbody", {
                  class: w(s(F))
                }, [
                  (o(!0), u(be, null, $e(e.items, (se, H) => (o(), u("tr", {
                    class: w(te(se, H)),
                    style: Hl(T(se, H)),
                    onClick: (J) => le(J, H, se)
                  }, [
                    (o(!0), u(be, null, $e(s(y), (J) => (o(), u("td", {
                      class: w([q(J), s(oe).tableCellClass])
                    }, [
                      s(d)[J] ? Z(S.$slots, J, _t(Ce({ key: 0 }, se))) : f(J) ? Z(S.$slots, f(J), _t(Ce({ key: 1 }, se))) : M(J) ? (o(), X(ue, {
                        key: 2,
                        type: s(b),
                        propType: M(J),
                        modelValue: se
                      }, null, 8, ["type", "propType", "modelValue"])) : (o(), X(ie, {
                        key: 3,
                        value: s(ce)(se, J),
                        format: O(J)
                      }, null, 8, ["value", "format"]))
                    ], 2))), 256))
                  ], 14, of))), 256))
                ], 2)
              ], 2)
            ], 2)
          ], 2)
        ], 2)
      ], 2)) : C("", !0);
    };
  }
});
let El = () => new Date().getTime(), uf = ["/", "T", ":", "-"], tt = {
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
}, df = new Intl.RelativeTimeFormat(tt.locale, {}), Tn = 24 * 60 * 60 * 1e3 * 365, Vl = {
  year: Tn,
  month: Tn / 12,
  day: 24 * 60 * 60 * 1e3,
  hour: 60 * 60 * 1e3,
  minute: 60 * 1e3,
  second: 1e3
}, $t = {
  currency: us,
  bytes: ds,
  link: cs,
  linkTel: fs,
  linkMailTo: ms,
  icon: vs,
  iconRounded: hs,
  attachment: gs,
  hidden: ps,
  time: ys,
  relativeTime: mn,
  relativeTimeFromMs: bl,
  formatDate: It,
  formatNumber: fn
};
"iconOnError" in globalThis || (globalThis.iconOnError = hl);
class Be {
}
ye(Be, "currency", { method: "currency" }), ye(Be, "bytes", { method: "bytes" }), ye(Be, "link", { method: "link" }), ye(Be, "linkTel", { method: "linkTel" }), ye(Be, "linkMailTo", { method: "linkMailTo" }), ye(Be, "icon", { method: "icon" }), ye(Be, "iconRounded", { method: "iconRounded" }), ye(Be, "attachment", { method: "attachment" }), ye(Be, "time", { method: "time" }), ye(Be, "relativeTime", { method: "relativeTime" }), ye(Be, "relativeTimeFromMs", { method: "relativeTimeFromMs" }), ye(Be, "date", { method: "formatDate" }), ye(Be, "number", { method: "formatNumber" }), ye(Be, "hidden", { method: "hidden" });
function cf(e) {
  tt = Object.assign({}, tt, e);
}
function ff(e) {
  Object.keys(e || {}).forEach((l) => {
    typeof e[l] == "function" && ($t[l] = e[l]);
  });
}
function Gt(e, l) {
  return l ? et("span", e, l) : e;
}
function us(e, l) {
  const t = nt(l, ["currency"]);
  return Gt(new Intl.NumberFormat(void 0, { style: "currency", currency: (l == null ? void 0 : l.currency) || "USD" }).format(e), t);
}
function ds(e, l) {
  return Gt(en(e), l);
}
function cs(e, l) {
  return et("a", e, vl({ ...l, href: e }));
}
function fs(e, l) {
  return et("a", e, vl({ ...l, href: `tel:${e}` }));
}
function ms(e, l) {
  l || (l = {});
  let { subject: t, body: a } = l, i = nt(l, ["subject", "body"]), r = {};
  return t && (r.subject = t), a && (r.body = a), et("a", e, vl({ ...i, href: `mailto:${Rt(e, r)}` }));
}
function vs(e, l) {
  return et("img", void 0, Object.assign({ class: "w-6 h-6", title: e, src: Ct(e), onerror: "iconOnError(this)" }, l));
}
function hs(e, l) {
  return et("img", void 0, Object.assign({ class: "w-8 h-8 rounded-full", title: e, src: Ct(e), onerror: "iconOnError(this)" }, l));
}
function gs(e, l) {
  let t = Jl(e), i = Qt(t) == null || Yl(e) ? Ct(e) : tn(e);
  const r = Ct(i);
  let d = l && (l["icon-class"] || l.iconClass), v = et("img", void 0, Object.assign({ class: "w-6 h-6", src: r, onerror: "iconOnError(this,'att')" }, d ? { class: d } : null)), f = `<span class="pl-1">${t}</span>`;
  return et("a", v + f, Object.assign({ class: "flex", href: Ct(e), title: e }, l ? nt(l, ["icon-class", "iconClass"]) : null));
}
function ps(e) {
  return "";
}
function ys(e, l) {
  let t = typeof e == "string" ? new Date(On(e) * 1e3) : fl(e) ? bt(e) : null;
  return Gt(t ? na(t) : e, l);
}
function It(e, l) {
  if (e == null)
    return "";
  let t = typeof e == "number" ? new Date(e) : typeof e == "string" ? bt(e) : e;
  if (!fl(t))
    return console.warn(`${t} is not a Date value`), e == null ? "" : `${e}`;
  let a = tt.date ? wl(tt.date) : null;
  return Gt(typeof a == "function" ? a(t) : Fn(t), l);
}
function fn(e, l) {
  if (typeof e != "number")
    return e;
  let t = tt.number ? wl(tt.number) : null, a = typeof t == "function" ? t(e) : `${e}`;
  return a === "" && (console.warn(`formatNumber(${e}) => ${a}`, t), a = `${e}`), Gt(a, l);
}
function bs(e, l, t) {
  let a = sa(e), i = l ? wl(l) : null;
  if (typeof i == "function") {
    let d = t;
    if (l != null && l.options)
      try {
        d = Kl(l.options, t);
      } catch (v) {
        console.error(`Could not evaluate '${l.options}'`, v, ", with scope:", t);
      }
    return i(e, d);
  }
  let r = a != null ? fl(a) ? It(a, t) : typeof a == "number" ? fn(a, t) : a : null;
  return r ?? "";
}
function zt(e, l, t) {
  return yt(e) ? bs(e, l, t) : pf(e, l, t);
}
function mf(e) {
  if (e == null)
    return NaN;
  if (typeof e == "number")
    return e;
  if (fl(e))
    return e.getTime() - El();
  if (typeof e == "string") {
    let l = Number(e);
    if (!isNaN(l))
      return l;
    if (e[0] === "P" || e.startsWith("-P"))
      return On(e) * 1e3 * -1;
    if (aa(e, uf) >= 0)
      return bt(e).getTime() - El();
  }
  return NaN;
}
function bl(e, l) {
  for (let t in Vl)
    if (Math.abs(e) > Vl[t] || t === "second")
      return (l || df).format(Math.round(e / Vl[t]), t);
}
function mn(e, l) {
  let t = mf(e);
  return isNaN(t) ? "" : bl(t, l);
}
function vf(e, l) {
  return bl(e.getTime() - (l ? l.getTime() : El()));
}
function wl(e) {
  if (!e)
    return null;
  let { method: l, options: t } = e, a = `${l}(${t})`, i = $t[a] || $t[l];
  if (typeof i == "function")
    return i;
  let r = e.locale || tt.locale;
  if (l.startsWith("Intl.")) {
    let d = r ? `'${r}'` : "undefined", v = `return new ${l}(${d},${t || "undefined"})`;
    try {
      let f = Function(v)();
      return i = l === "Intl.DateTimeFormat" ? (m) => f.format(bt(m)) : l === "Intl.NumberFormat" ? (m) => f.format(Number(m)) : l === "Intl.RelativeTimeFormat" ? (m) => mn(m, f) : (m) => f.format(m), $t[a] = i;
    } catch (f) {
      console.error(`Invalid format: ${v}`, f);
    }
  } else {
    let d = globalThis[l];
    if (typeof d == "function") {
      let v = t != null ? Function("return " + t)() : void 0;
      return i = (f) => d(f, v, r), $t[a] = i;
    }
    console.error(`No '${l}' function exists`, Object.keys($t));
  }
  return null;
}
function ws(e, l) {
  return e ? e.length > l ? e.substring(0, l) + "..." : e : "";
}
function xs(e) {
  return e.substring(0, 6) === "/Date(" ? It(bt(e)) : e;
}
function hf(e) {
  return vn(Mt(e)).replace(/"/g, "");
}
function ks(e) {
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
function vn(e, l = 4) {
  return e = ks(e), typeof e != "object" ? typeof e == "string" ? e : `${e}` : JSON.stringify(e, void 0, l);
}
function gf(e) {
  return e = ks(e), typeof e != "object" ? typeof e == "string" ? e : `${e}` : (e = Object.assign({}, e), e = Mt(e), vn(e));
}
function Mt(e) {
  if (e == null)
    return null;
  if (typeof e == "string")
    return xs(e);
  if (yt(e))
    return e;
  if (e instanceof Date)
    return It(e);
  if (Array.isArray(e))
    return e.map(Mt);
  if (typeof e == "object") {
    let l = {};
    return Object.keys(e).forEach((t) => {
      t != "__type" && (l[t] = Mt(e[t]));
    }), l;
  }
  return e;
}
function pf(e, l, t) {
  let a = e;
  if (Array.isArray(e)) {
    if (yt(e[0]))
      return a.join(",");
    e[0] != null && (a = e[0]);
  }
  if (a == null)
    return "";
  if (a instanceof Date)
    return It(a, t);
  let i = Object.keys(a), r = [];
  for (let d = 0; d < Math.min(tt.maxNestedFields, i.length); d++) {
    let v = i[d], f = `${Mt(a[v])}`;
    r.push(`<b class="font-medium">${v}</b>: ${Al(ws(xs(f), tt.maxNestedFieldLength))}`);
  }
  return i.length > 2 && r.push("..."), et("span", "{ " + r.join(", ") + " }", Object.assign({ title: Al(hf(e)) }, t));
}
function jm() {
  return {
    Formats: Be,
    setDefaultFormats: cf,
    setFormatters: ff,
    formatValue: zt,
    formatter: wl,
    dateInputFormat: ml,
    currency: us,
    bytes: ds,
    link: cs,
    linkTel: fs,
    linkMailTo: ms,
    icon: vs,
    iconRounded: hs,
    attachment: gs,
    hidden: ps,
    time: ys,
    relativeTime: mn,
    relativeTimeFromDate: vf,
    relativeTimeFromMs: bl,
    formatDate: It,
    formatNumber: fn,
    indentJson: vn,
    prettyJson: gf,
    scrub: Mt,
    truncate: ws,
    apiValueFmt: bs,
    iconOnError: hl
  };
}
const yf = Y({
  props: {
    type: Object,
    propType: Object,
    modelValue: Object
  },
  setup(e, { attrs: l }) {
    const { typeOf: t } = Je();
    function a(i) {
      return i != null && i.format ? i.format : (i == null ? void 0 : i.type) == "TimeSpan" || (i == null ? void 0 : i.type) == "TimeOnly" ? { method: "time" } : null;
    }
    return () => {
      var O;
      const i = a(e.propType), r = ce(e.modelValue, e.propType.name), d = Object.assign({}, e, l), v = ft("span", { innerHTML: zt(r, i, d) }), f = Et(r) && Array.isArray(r) ? ft("span", {}, [
        ft("span", { class: "mr-2" }, `${r.length}`),
        v
      ]) : v, m = (O = e.propType) == null ? void 0 : O.ref;
      if (!m)
        return f;
      const p = Ke(e.type).find((N) => N.type === m.model);
      if (!p)
        return f;
      const h = ce(e.modelValue, p.name), b = h && m.refLabel && ce(h, m.refLabel);
      if (!b)
        return f;
      const k = t(m.model), _ = k == null ? void 0 : k.icon, M = _ ? ft(os, { image: _, class: "w-5 h-5 mr-1" }) : null;
      return ft("span", { class: "flex", title: `${m.model} ${r}` }, [
        M,
        b
      ]);
    };
  }
}), bf = { key: 0 }, wf = {
  key: 0,
  class: "mr-2"
}, xf = ["innerHTML"], kf = ["innerHTML"], $f = {
  inheritAttrs: !1
}, Cf = /* @__PURE__ */ Y({
  ...$f,
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
    const l = e, t = c(() => Array.isArray(l.value));
    return (a, i) => s(Et)(e.value) ? (o(), u("span", bf, [
      e.includeCount && s(t) ? (o(), u("span", wf, V(e.value.length), 1)) : C("", !0),
      n("span", {
        innerHTML: s(zt)(e.value, e.format, a.$attrs)
      }, null, 8, xf)
    ])) : (o(), u("span", {
      key: 1,
      innerHTML: s(zt)(e.value, e.format, a.$attrs)
    }, null, 8, kf));
  }
}), _f = ["innerHTML"], Lf = { key: 0 }, Vf = /* @__PURE__ */ n("b", null, null, -1), Sf = { key: 2 }, Mf = /* @__PURE__ */ Y({
  __name: "HtmlFormat",
  props: {
    value: null,
    depth: { default: 0 },
    fieldAttrs: null,
    classes: { type: Function, default: (e, l, t, a, i) => a }
  },
  setup(e) {
    const l = e, t = c(() => yt(l.value)), a = c(() => Array.isArray(l.value)), i = (f) => Dn(f), r = (f) => l.fieldAttrs ? l.fieldAttrs(f) : null, d = c(() => Il(l.value)), v = (f) => f ? Object.keys(f).map((m) => ({ key: i(m), val: f[m] })) : [];
    return (f, m) => {
      const g = U("HtmlFormat", !0);
      return o(), u("div", {
        class: w(e.depth == 0 ? "prose html-format" : "")
      }, [
        s(t) ? (o(), u("div", {
          key: 0,
          innerHTML: s(zt)(e.value)
        }, null, 8, _f)) : s(a) ? (o(), u("div", {
          key: 1,
          class: w(e.classes("array", "div", e.depth, s(oe).gridClass))
        }, [
          s(yt)(e.value[0]) ? (o(), u("div", Lf, "[ " + V(e.value.join(", ")) + " ]", 1)) : (o(), u("div", {
            key: 1,
            class: w(e.classes("array", "div", e.depth, s(oe).grid2Class))
          }, [
            n("div", {
              class: w(e.classes("array", "div", e.depth, s(oe).grid3Class))
            }, [
              n("div", {
                class: w(e.classes("array", "div", e.depth, s(oe).grid4Class))
              }, [
                n("table", {
                  class: w(e.classes("object", "table", e.depth, s(oe).tableClass))
                }, [
                  n("thead", {
                    class: w(e.classes("array", "thead", e.depth, s(oe).theadClass))
                  }, [
                    n("tr", null, [
                      (o(!0), u(be, null, $e(s(d), (p) => (o(), u("th", {
                        class: w(e.classes("array", "th", e.depth, s(oe).theadCellClass + " whitespace-nowrap"))
                      }, [
                        Vf,
                        he(V(i(p)), 1)
                      ], 2))), 256))
                    ])
                  ], 2),
                  n("tbody", null, [
                    (o(!0), u(be, null, $e(e.value, (p, h) => (o(), u("tr", {
                      class: w(e.classes("array", "tr", e.depth, h % 2 == 0 ? "bg-white" : "bg-gray-50", h))
                    }, [
                      (o(!0), u(be, null, $e(s(d), (b) => (o(), u("td", {
                        class: w(e.classes("array", "td", e.depth, s(oe).tableCellClass))
                      }, [
                        fe(g, Ce({
                          value: p[b],
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
        ], 2)) : (o(), u("div", Sf, [
          n("table", {
            class: w(e.classes("object", "table", e.depth, "table-object"))
          }, [
            (o(!0), u(be, null, $e(v(e.value), (p) => (o(), u("tr", {
              class: w(e.classes("object", "tr", e.depth, ""))
            }, [
              n("th", {
                class: w(e.classes("object", "th", e.depth, "align-top py-2 px-4 text-left text-sm font-medium tracking-wider whitespace-nowrap"))
              }, V(p.key), 3),
              n("td", {
                class: w(e.classes("object", "td", e.depth, "align-top py-2 px-4 text-sm"))
              }, [
                fe(g, Ce({
                  value: p.val,
                  "field-attrs": e.fieldAttrs,
                  depth: e.depth + 1,
                  classes: e.classes
                }, r(p.key)), null, 16, ["value", "field-attrs", "depth", "classes"])
              ], 2)
            ], 2))), 256))
          ], 2)
        ]))
      ], 2);
    };
  }
}), Af = { class: "absolute top-0 right-0 pt-4 pr-4" }, Tf = /* @__PURE__ */ n("span", { class: "sr-only" }, "Close", -1), If = /* @__PURE__ */ n("svg", {
  class: "h-6 w-6",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ n("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1), Ff = [
  Tf,
  If
], Pf = /* @__PURE__ */ Y({
  __name: "CloseButton",
  props: {
    buttonClass: { default: "bg-white dark:bg-black" }
  },
  emits: ["close"],
  setup(e, { emit: l }) {
    return (t, a) => (o(), u("div", Af, [
      n("button", {
        type: "button",
        onClick: a[0] || (a[0] = (i) => t.$emit("close")),
        class: w([e.buttonClass, "rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:ring-offset-black"])
      }, Ff, 2)
    ]));
  }
}), Df = ["id", "aria-labelledby"], Of = /* @__PURE__ */ n("div", { class: "fixed inset-0" }, null, -1), jf = { class: "fixed inset-0 overflow-hidden" }, Bf = { class: "flex h-full flex-col bg-white dark:bg-black shadow-xl" }, Rf = { class: "flex min-h-0 flex-1 flex-col overflow-auto" }, Ef = { class: "flex-1" }, Hf = { class: "bg-gray-50 dark:bg-gray-900 px-4 py-6 sm:px-6" }, Nf = { class: "flex items-start justify-between space-x-3" }, zf = { class: "space-y-1" }, Uf = ["id"], qf = {
  key: 1,
  class: "text-sm text-gray-500"
}, Qf = { class: "flex h-7 items-center" }, Kf = { class: "flex-shrink-0 border-t border-gray-200 dark:border-gray-700 px-4 py-5 sm:px-6" }, Gf = /* @__PURE__ */ Y({
  __name: "SlideOver",
  props: {
    id: { default: "SlideOver" },
    title: null,
    contentClass: { default: "relative mt-6 flex-1 px-4 sm:px-6" }
  },
  emits: ["done"],
  setup(e, { emit: l }) {
    const t = I(!1), a = I(""), i = {
      entering: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-full", to: "translate-x-0" },
      leaving: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-0", to: "translate-x-full" }
    };
    At(t, () => {
      Lt(i, a, t.value), t.value || setTimeout(() => l("done"), 700);
    }), t.value = !0;
    const r = () => t.value = !1, d = (v) => {
      v.key === "Escape" && r();
    };
    return lt(() => window.addEventListener("keydown", d)), Ut(() => window.removeEventListener("keydown", d)), (v, f) => {
      const m = U("CloseButton");
      return o(), u("div", {
        id: e.id,
        class: "relative z-10",
        "aria-labelledby": e.id + "-title",
        role: "dialog",
        "aria-modal": "true"
      }, [
        Of,
        n("div", jf, [
          n("div", {
            onMousedown: r,
            class: "absolute inset-0 overflow-hidden"
          }, [
            n("div", {
              onMousedown: f[0] || (f[0] = je(() => {
              }, ["stop"])),
              class: "pointer-events-none fixed inset-y-0 right-0 flex pl-10"
            }, [
              n("div", {
                class: w(["pointer-events-auto w-screen xl:max-w-3xl md:max-w-xl max-w-lg", a.value])
              }, [
                n("div", Bf, [
                  n("div", Rf, [
                    n("div", Ef, [
                      n("div", Hf, [
                        n("div", Nf, [
                          n("div", zf, [
                            e.title ? (o(), u("h2", {
                              key: 0,
                              class: "text-lg font-medium text-gray-900 dark:text-gray-50",
                              id: e.id + "-title"
                            }, V(e.title), 9, Uf)) : C("", !0),
                            v.$slots.subtitle ? (o(), u("p", qf, [
                              Z(v.$slots, "subtitle")
                            ])) : C("", !0)
                          ]),
                          n("div", Qf, [
                            fe(m, {
                              "button-class": "bg-gray-50 dark:bg-gray-900",
                              onClose: r
                            })
                          ])
                        ])
                      ]),
                      n("div", {
                        class: w(e.contentClass)
                      }, [
                        Z(v.$slots, "default")
                      ], 2)
                    ])
                  ]),
                  n("div", Kf, [
                    Z(v.$slots, "footer")
                  ])
                ])
              ], 2)
            ], 32)
          ], 32)
        ])
      ], 8, Df);
    };
  }
}), Wf = ["id", "data-transition-for", "aria-labelledby"], Zf = { class: "fixed inset-0 z-10 overflow-y-auto" }, Jf = { class: "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0" }, Xf = /* @__PURE__ */ n("span", { class: "sr-only" }, "Close", -1), Yf = /* @__PURE__ */ n("svg", {
  class: "h-6 w-6",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ n("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1), e1 = [
  Xf,
  Yf
], t1 = /* @__PURE__ */ Y({
  __name: "ModalDialog",
  props: {
    id: { default: "ModalDialog" },
    modalClass: { default: Rl.modalClass },
    sizeClass: { default: Rl.sizeClass }
  },
  emits: ["done"],
  setup(e, { emit: l }) {
    const t = I(!1), a = I(""), i = {
      entering: { cls: "ease-out duration-300", from: "opacity-0", to: "opacity-100" },
      leaving: { cls: "ease-in duration-200", from: "opacity-100", to: "opacity-0" }
    }, r = I(""), d = {
      entering: { cls: "ease-out duration-300", from: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95", to: "opacity-100 translate-y-0 sm:scale-100" },
      leaving: { cls: "ease-in duration-200", from: "opacity-100 translate-y-0 sm:scale-100", to: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" }
    };
    At(t, () => {
      Lt(i, a, t.value), Lt(d, r, t.value), t.value || setTimeout(() => l("done"), 200);
    }), t.value = !0;
    const v = () => t.value = !1;
    qt("ModalProvider", {
      openModal: p
    });
    const m = I(), g = I();
    function p(k, _) {
      m.value = k, g.value = _;
    }
    async function h(k) {
      g.value && g.value(k), m.value = void 0, g.value = void 0;
    }
    const b = (k) => {
      k.key === "Escape" && v();
    };
    return lt(() => window.addEventListener("keydown", b)), Ut(() => window.removeEventListener("keydown", b)), (k, _) => {
      var O;
      const M = U("ModalLookup");
      return o(), u("div", {
        id: e.id,
        "data-transition-for": e.id,
        onMousedown: v,
        class: "relative z-10",
        "aria-labelledby": `${e.id}-title`,
        role: "dialog",
        "aria-modal": "true"
      }, [
        n("div", {
          class: w(["fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity", a.value])
        }, null, 2),
        n("div", Zf, [
          n("div", Jf, [
            n("div", {
              class: w([e.modalClass, e.sizeClass, r.value]),
              onMousedown: _[0] || (_[0] = je(() => {
              }, ["stop"]))
            }, [
              n("div", null, [
                n("div", { class: "hidden sm:block absolute top-0 right-0 pt-4 pr-4 z-10" }, [
                  n("button", {
                    type: "button",
                    onClick: v,
                    class: "bg-white dark:bg-black rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:ring-offset-black"
                  }, e1)
                ]),
                Z(k.$slots, "default")
              ])
            ], 34)
          ])
        ]),
        ((O = m.value) == null ? void 0 : O.name) == "ModalLookup" && m.value.ref ? (o(), X(M, {
          key: 0,
          "ref-info": m.value.ref,
          onDone: h
        }, null, 8, ["ref-info"])) : C("", !0)
      ], 40, Wf);
    };
  }
}), l1 = {
  class: "pt-2 overflow-auto",
  style: { "min-height": "620px" }
}, n1 = { class: "mt-3 pl-5 flex flex-wrap items-center" }, s1 = { class: "hidden sm:block text-xl leading-6 font-medium text-gray-900 dark:text-gray-50 mr-3" }, a1 = { class: "hidden md:inline" }, o1 = { class: "flex pb-1 sm:pb-0" }, i1 = ["title"], r1 = /* @__PURE__ */ n("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ n("g", {
    "stroke-width": "1.5",
    fill: "none"
  }, [
    /* @__PURE__ */ n("path", {
      d: "M9 3H3.6a.6.6 0 0 0-.6.6v16.8a.6.6 0 0 0 .6.6H9M9 3v18M9 3h6M9 21h6m0-18h5.4a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H15m0-18v18",
      stroke: "currentColor"
    })
  ])
], -1), u1 = [
  r1
], d1 = ["disabled"], c1 = /* @__PURE__ */ n("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ n("path", {
    d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6l6 6zM6 6h2v12H6z",
    fill: "currentColor"
  })
], -1), f1 = [
  c1
], m1 = ["disabled"], v1 = /* @__PURE__ */ n("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ n("path", {
    d: "M15.41 7.41L14 6l-6 6l6 6l1.41-1.41L10.83 12z",
    fill: "currentColor"
  })
], -1), h1 = [
  v1
], g1 = ["disabled"], p1 = /* @__PURE__ */ n("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ n("path", {
    d: "M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z",
    fill: "currentColor"
  })
], -1), y1 = [
  p1
], b1 = ["disabled"], w1 = /* @__PURE__ */ n("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ n("path", {
    d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6l-6-6zM16 6h2v12h-2z",
    fill: "currentColor"
  })
], -1), x1 = [
  w1
], k1 = {
  key: 0,
  class: "flex pb-1 sm:pb-0"
}, $1 = { class: "px-4 text-lg text-black dark:text-white" }, C1 = { key: 0 }, _1 = { key: 1 }, L1 = /* @__PURE__ */ n("span", { class: "hidden xl:inline" }, " Showing Results ", -1), V1 = { key: 2 }, S1 = {
  key: 1,
  class: "pl-2"
}, M1 = /* @__PURE__ */ n("svg", {
  class: "w-5 h-5",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ n("path", {
    fill: "currentColor",
    d: "M6.78 2.72a.75.75 0 0 1 0 1.06L4.56 6h8.69a7.75 7.75 0 1 1-7.75 7.75a.75.75 0 0 1 1.5 0a6.25 6.25 0 1 0 6.25-6.25H4.56l2.22 2.22a.75.75 0 1 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.5a.75.75 0 0 1 1.06 0Z"
  })
], -1), A1 = [
  M1
], T1 = { class: "flex pb-1 sm:pb-0" }, I1 = {
  key: 0,
  class: "pl-2"
}, F1 = /* @__PURE__ */ n("svg", {
  class: "flex-none w-5 h-5 mr-2 text-gray-400 dark:text-gray-500 group-hover:text-gray-500",
  "aria-hidden": "true",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, [
  /* @__PURE__ */ n("path", {
    "fill-rule": "evenodd",
    d: "M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z",
    "clip-rule": "evenodd"
  })
], -1), P1 = { class: "mr-1" }, D1 = {
  key: 0,
  class: "h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-gray-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, O1 = /* @__PURE__ */ n("path", {
  "fill-rule": "evenodd",
  d: "M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z",
  "clip-rule": "evenodd"
}, null, -1), j1 = [
  O1
], B1 = {
  key: 1,
  class: "h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-gray-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, R1 = /* @__PURE__ */ n("path", {
  "fill-rule": "evenodd",
  d: "M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z",
  "clip-rule": "evenodd"
}, null, -1), E1 = [
  R1
], H1 = { key: 1 }, N1 = { key: 4 }, z1 = { key: 0 }, U1 = {
  key: 0,
  class: "cursor-pointer flex justify-between items-center hover:text-gray-900 dark:hover:text-gray-50"
}, q1 = { class: "mr-1 select-none" }, Q1 = {
  key: 1,
  class: "flex justify-between items-center"
}, K1 = { class: "mr-1 select-none" }, G1 = /* @__PURE__ */ Y({
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
  setup(e, { emit: l }) {
    const t = e, a = zl(), { config: i } = wt(), { metadataApi: r, filterDefinitions: d } = Je(), v = Oe("client"), f = i.value.storage, m = c(() => t.toolbarButtonClass ?? oe.toolbarButtonClass), g = c(() => d.value), p = 25, h = I({ take: p }), b = I(new Ze()), k = I(t.skip), _ = I(!1), M = I(), O = (R) => typeof R == "string" ? R.split(",") : R || [];
    function N(R, z) {
      return oe.getTableRowClass("fullWidth", z, !1, !0);
    }
    function q() {
      let R = O(t.selectedColumns);
      return R.length > 0 ? R : [];
    }
    const Q = c(() => it(t.refInfo.model)), $ = c(() => {
      let z = q().map((xe) => xe.toLowerCase());
      const re = Ke(Q.value);
      return z.length > 0 ? z.map((xe) => re.find((we) => we.name.toLowerCase() === xe)).filter((xe) => xe != null) : re;
    }), j = c(() => {
      let R = $.value.map((re) => re.name), z = O(h.value.selectedColumns).map((re) => re.toLowerCase());
      return z.length > 0 ? R.filter((re) => z.includes(re.toLowerCase())) : R;
    }), B = c(() => h.value.take ?? p), D = c(() => b.value.response ? ce(b.value.response, "results") : []), F = c(() => {
      var R;
      return ((R = b.value.response) == null ? void 0 : R.total) ?? D.value.length ?? 0;
    }), E = c(() => k.value > 0), K = c(() => k.value > 0), G = c(() => D.value.length >= B.value), te = c(() => D.value.length >= B.value), T = I([]), y = c(() => T.value.some((R) => R.settings.filters.length > 0 || !!R.settings.sort)), A = c(() => T.value.map((R) => R.settings.filters.length).reduce((R, z) => R + z, 0)), le = c(() => Kt(Q.value)), S = c(() => {
      var R;
      return (R = r.value) == null ? void 0 : R.operations.find((z) => {
        var re;
        return ((re = z.dataModel) == null ? void 0 : re.name) == t.refInfo.model && Te.isAnyQuery(z);
      });
    }), P = I(), ue = I(!1), ie = I(), se = () => `${t.id}/ApiPrefs/${t.refInfo.model}`, H = (R) => `Column/${t.id}:${t.refInfo.model}.${R}`;
    async function J(R) {
      k.value += R, k.value < 0 && (k.value = 0);
      var z = Math.floor(F.value / B.value) * B.value;
      k.value > z && (k.value = z), await Se();
    }
    async function pe(R, z) {
      l("done", R);
    }
    function _e() {
      l("done", null);
    }
    function ae(R, z) {
      var xe, we, Fe;
      let re = z.target;
      if ((re == null ? void 0 : re.tagName) !== "TD") {
        let qe = (xe = re == null ? void 0 : re.closest("TABLE")) == null ? void 0 : xe.getBoundingClientRect(), ke = T.value.find((Ee) => Ee.name.toLowerCase() == R.toLowerCase());
        if (ke && qe) {
          let Ee = 318, rt = (((we = z.target) == null ? void 0 : we.tagName) === "DIV" ? z.target : (Fe = z.target) == null ? void 0 : Fe.closest("DIV")).getBoundingClientRect(), Ft = Ee + 25;
          ie.value = {
            column: ke,
            topLeft: {
              x: Math.max(Math.floor(rt.x + 25), Ft),
              y: Math.floor(115)
            }
          };
        }
      }
    }
    function Pe() {
      ie.value = null;
    }
    async function Ae(R) {
      var re;
      let z = (re = ie.value) == null ? void 0 : re.column;
      z && (z.settings = R, f.setItem(H(z.name), JSON.stringify(z.settings)), await Se()), ie.value = null;
    }
    async function ge(R) {
      f.setItem(H(R.name), JSON.stringify(R.settings)), await Se();
    }
    async function Re(R) {
      ue.value = !1, h.value = R, f.setItem(se(), JSON.stringify(R)), await Se();
    }
    async function Se() {
      await Ne(Xe());
    }
    async function Ne(R) {
      const z = S.value;
      if (!z) {
        console.error(`No Query API was found for ${t.refInfo.model}`);
        return;
      }
      let re = Ht(z, R), xe = Pn((qe) => {
        b.value.response = b.value.error = void 0, _.value = qe;
      }), we = await v.api(re);
      xe(), ul(() => b.value = we);
      let Fe = ce(we.response, "results") || [];
      !we.succeeded || Fe.label == 0;
    }
    function Xe() {
      let R = {
        include: "total",
        take: B.value
      }, z = O(h.value.selectedColumns || t.selectedColumns);
      if (z.length > 0) {
        let xe = le.value;
        xe && z.includes(xe.name) && (z = [xe.name, ...z]), R.fields = z.join(",");
      }
      let re = [];
      return T.value.forEach((xe) => {
        xe.settings.sort && re.push((xe.settings.sort === "DESC" ? "-" : "") + xe.name), xe.settings.filters.forEach((we) => {
          let Fe = we.key.replace("%", xe.name);
          R[Fe] = we.value;
        });
      }), typeof R.skip > "u" && k.value > 0 && (R.skip = k.value), re.length > 0 && (R.orderBy = re.join(",")), R;
    }
    async function ze() {
      T.value.forEach((R) => {
        R.settings = { filters: [] }, f.removeItem(H(R.name));
      }), await Se();
    }
    return lt(async () => {
      const R = t.prefs || il(f.getItem(se()));
      R && (h.value = R), T.value = $.value.map((z) => ({
        name: z.name,
        type: z.type,
        meta: z,
        settings: Object.assign(
          {
            filters: []
          },
          il(f.getItem(H(z.name)))
        )
      })), isNaN(t.skip) || (k.value = t.skip), await Se();
    }), (R, z) => {
      const re = U("ErrorSummary"), xe = U("Loading"), we = U("SettingsIcons"), Fe = U("DataGrid"), qe = U("ModalDialog");
      return o(), u(be, null, [
        e.refInfo ? (o(), X(qe, {
          key: 0,
          ref_key: "modalDialog",
          ref: P,
          id: e.id,
          onDone: _e
        }, {
          default: ve(() => [
            n("div", l1, [
              n("div", n1, [
                n("h3", s1, [
                  he(" Select "),
                  n("span", a1, V(s(Ie)(e.refInfo.model)), 1)
                ]),
                n("div", o1, [
                  e.showPreferences ? (o(), u("button", {
                    key: 0,
                    type: "button",
                    class: "pl-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400",
                    title: `${e.refInfo.model} Preferences`,
                    onClick: z[0] || (z[0] = (ke) => ue.value = !ue.value)
                  }, u1, 8, i1)) : C("", !0),
                  e.showPagingNav ? (o(), u("button", {
                    key: 1,
                    type: "button",
                    class: w(["pl-2", s(E) ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                    title: "First page",
                    disabled: !s(E),
                    onClick: z[1] || (z[1] = (ke) => J(-s(F)))
                  }, f1, 10, d1)) : C("", !0),
                  e.showPagingNav ? (o(), u("button", {
                    key: 2,
                    type: "button",
                    class: w(["pl-2", s(K) ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                    title: "Previous page",
                    disabled: !s(K),
                    onClick: z[2] || (z[2] = (ke) => J(-s(B)))
                  }, h1, 10, m1)) : C("", !0),
                  e.showPagingNav ? (o(), u("button", {
                    key: 3,
                    type: "button",
                    class: w(["pl-2", s(G) ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                    title: "Next page",
                    disabled: !s(G),
                    onClick: z[3] || (z[3] = (ke) => J(s(B)))
                  }, y1, 10, g1)) : C("", !0),
                  e.showPagingNav ? (o(), u("button", {
                    key: 4,
                    type: "button",
                    class: w(["pl-2", s(te) ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                    title: "Last page",
                    disabled: !s(te),
                    onClick: z[4] || (z[4] = (ke) => J(s(F)))
                  }, x1, 10, b1)) : C("", !0)
                ]),
                e.showPagingInfo ? (o(), u("div", k1, [
                  n("div", $1, [
                    _.value ? (o(), u("span", C1, "Querying...")) : C("", !0),
                    s(D).length ? (o(), u("span", _1, [
                      L1,
                      he(" " + V(k.value + 1) + " - " + V(Math.min(k.value + s(D).length, s(F))) + " ", 1),
                      n("span", null, " of " + V(s(F)), 1)
                    ])) : b.value.completed ? (o(), u("span", V1, "No Results")) : C("", !0)
                  ])
                ])) : C("", !0),
                s(y) && e.showResetPreferences ? (o(), u("div", S1, [
                  n("button", {
                    type: "button",
                    onClick: ze,
                    title: "Reset Preferences & Filters",
                    class: w(s(m))
                  }, A1, 2)
                ])) : C("", !0),
                n("div", T1, [
                  e.showFiltersView && s(A) > 0 ? (o(), u("div", I1, [
                    n("button", {
                      type: "button",
                      onClick: z[5] || (z[5] = (ke) => M.value = M.value == "filters" ? null : "filters"),
                      class: w(s(m)),
                      "aria-expanded": "false"
                    }, [
                      F1,
                      n("span", P1, V(s(A)) + " " + V(s(A) == 1 ? "Filter" : "Filters"), 1),
                      M.value != "filters" ? (o(), u("svg", D1, j1)) : (o(), u("svg", B1, E1))
                    ], 2)
                  ])) : C("", !0)
                ])
              ]),
              M.value == "filters" ? (o(), X(dn, {
                key: 0,
                class: "border-y border-gray-200 dark:border-gray-800 py-8 my-2",
                definitions: s(g),
                columns: T.value,
                onDone: z[6] || (z[6] = (ke) => M.value = null),
                onChange: ge
              }, null, 8, ["definitions", "columns"])) : C("", !0),
              ie.value ? (o(), u("div", H1, [
                fe(un, {
                  definitions: s(g),
                  column: ie.value.column,
                  "top-left": ie.value.topLeft,
                  onDone: Pe,
                  onSave: Ae
                }, null, 8, ["definitions", "column", "top-left"])
              ])) : C("", !0),
              b.value.error ? (o(), X(re, {
                key: 2,
                status: b.value.error
              }, null, 8, ["status"])) : _.value ? (o(), X(xe, { key: 3 })) : (o(), u("div", N1, [
                s(D).length ? (o(), u("div", z1, [
                  fe(Fe, {
                    id: e.id,
                    items: s(D),
                    type: e.refInfo.model,
                    "selected-columns": s(j),
                    onFiltersChanged: Se,
                    tableStyle: "fullWidth",
                    rowClass: N,
                    onRowSelected: pe,
                    onHeaderSelected: ae
                  }, Ul({
                    header: ve(({ column: ke, label: Ee }) => {
                      var Qe;
                      return [
                        e.allowFiltering && (!t.canFilter || t.canFilter(ke)) ? (o(), u("div", U1, [
                          n("span", q1, V(Ee), 1),
                          fe(we, {
                            column: T.value.find((rt) => rt.name.toLowerCase() === ke.toLowerCase()),
                            "is-open": ((Qe = ie.value) == null ? void 0 : Qe.column.name) === ke
                          }, null, 8, ["column", "is-open"])
                        ])) : (o(), u("div", Q1, [
                          n("span", K1, V(Ee), 1)
                        ]))
                      ];
                    }),
                    _: 2
                  }, [
                    $e(Object.keys(s(a)), (ke) => ({
                      name: ke,
                      fn: ve((Ee) => [
                        Z(R.$slots, ke, _t(al(Ee)))
                      ])
                    }))
                  ]), 1032, ["id", "items", "type", "selected-columns"])
                ])) : C("", !0)
              ]))
            ])
          ]),
          _: 3
        }, 8, ["id"])) : C("", !0),
        ue.value ? (o(), X(cn, {
          key: 1,
          columns: s($),
          prefs: h.value,
          onDone: z[7] || (z[7] = (ke) => ue.value = !1),
          onSave: Re
        }, null, 8, ["columns", "prefs"])) : C("", !0)
      ], 64);
    };
  }
}), W1 = { class: "sm:hidden" }, Z1 = ["for"], J1 = ["id", "name"], X1 = ["value"], Y1 = { class: "hidden sm:block" }, em = { class: "border-b border-gray-200" }, tm = {
  class: "-mb-px flex",
  "aria-label": "Tabs"
}, lm = ["onClick"], nm = /* @__PURE__ */ Y({
  __name: "Tabs",
  props: {
    tabs: null,
    id: { default: "tabs" },
    param: { default: "tab" },
    label: { type: Function, default: (e) => Ie(e) },
    selected: null,
    tabClass: null,
    bodyClass: { default: "p-4" },
    url: { type: Boolean, default: !0 }
  },
  setup(e) {
    const l = e, t = c(() => Object.keys(l.tabs)), a = (g) => l.label ? l.label(g) : Ie(g), i = c(() => l.id || "tabs"), r = c(() => l.param || "tab"), d = I();
    function v(g) {
      if (d.value = g, l.url) {
        const p = t.value[0];
        Ql({ tab: g === p ? void 0 : g });
      }
    }
    function f(g) {
      return d.value === g;
    }
    const m = c(() => `${100 / Object.keys(l.tabs).length}%`);
    return lt(() => {
      if (d.value = Object.keys(l.tabs)[0], l.url) {
        const p = Tl(location.search)[r.value];
        p && (d.value = p);
      }
    }), (g, p) => (o(), u("div", null, [
      n("div", W1, [
        n("label", {
          for: s(i),
          class: "sr-only"
        }, "Select a tab", 8, Z1),
        n("select", {
          id: s(i),
          name: s(i),
          class: "block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500",
          onChange: p[0] || (p[0] = (h) => {
            var b;
            return v((b = h.target) == null ? void 0 : b.value);
          })
        }, [
          (o(!0), u(be, null, $e(s(t), (h) => (o(), u("option", {
            key: h,
            value: h
          }, V(a(h)), 9, X1))), 128))
        ], 40, J1)
      ]),
      n("div", Y1, [
        n("div", em, [
          n("nav", tm, [
            (o(!0), u(be, null, $e(s(t), (h) => (o(), u("a", {
              href: "#",
              onClick: je((b) => v(h), ["prevent"]),
              style: Hl({ width: s(m) }),
              class: w([f(h) ? "border-indigo-500 text-indigo-600 py-4 px-1 text-center border-b-2 font-medium text-sm" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 py-4 px-1 text-center border-b-2 font-medium text-sm", e.tabClass])
            }, V(a(h)), 15, lm))), 256))
          ])
        ])
      ]),
      n("div", {
        class: w(e.bodyClass)
      }, [
        (o(), X(Us(e.tabs[d.value])))
      ], 2)
    ]));
  }
}), sm = /* @__PURE__ */ n("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-4 w-4 text-gray-400",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32"
}, [
  /* @__PURE__ */ n("path", {
    fill: "currentColor",
    d: "M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"
  })
], -1), am = [
  sm
], om = /* @__PURE__ */ n("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-4 w-4 text-indigo-600",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32"
}, [
  /* @__PURE__ */ n("path", {
    fill: "currentColor",
    d: "M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"
  })
], -1), im = [
  om
], rm = /* @__PURE__ */ Y({
  __name: "DarkModeToggle",
  setup(e) {
    const l = typeof document < "u" ? document.querySelector("html") : null;
    let t = I(l == null ? void 0 : l.classList.contains("dark"));
    function a() {
      t.value ? l == null || l.classList.remove("dark") : l == null || l.classList.add("dark"), t.value = !t.value, localStorage.setItem("color-scheme", t.value ? "dark" : "light");
    }
    return (i, r) => (o(), u("button", {
      type: "button",
      class: "bg-gray-200 dark:bg-gray-700 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:ring-offset-black",
      role: "switch",
      "aria-checked": "false",
      onClick: r[0] || (r[0] = (d) => a())
    }, [
      n("span", {
        class: w(`${s(t) ? "translate-x-0" : "translate-x-5"} pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white dark:bg-black shadow transform ring-0 transition ease-in-out duration-200`)
      }, [
        n("span", {
          class: w(`${s(t) ? "opacity-100 ease-in duration-200" : "opacity-0 ease-out duration-100"} absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`),
          "aria-hidden": "true"
        }, am, 2),
        n("span", {
          class: w(`${s(t) ? "opacity-0 ease-out duration-100" : "opacity-100 ease-in duration-200"} absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`),
          "aria-hidden": "true"
        }, im, 2)
      ], 2)
    ]));
  }
}), um = { key: 0 }, dm = {
  key: 1,
  class: "min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8"
}, cm = { class: "sm:mx-auto sm:w-full sm:max-w-md" }, fm = { class: "mt-6 text-center text-3xl font-extrabold text-gray-900" }, mm = {
  key: 0,
  class: "mt-4 text-center text-sm text-gray-600"
}, vm = { class: "relative z-0 inline-flex shadow-sm rounded-md" }, hm = { class: "mt-8 sm:mx-auto sm:w-full sm:max-w-md" }, gm = { class: "bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10" }, pm = ["onSubmit"], ym = { class: "mt-8" }, bm = {
  key: 1,
  class: "mt-6"
}, wm = /* @__PURE__ */ dl('<div class="relative"><div class="absolute inset-0 flex items-center"><div class="w-full border-t border-gray-300"></div></div><div class="relative flex justify-center text-sm"><span class="px-2 bg-white text-gray-500"> Or continue with </span></div></div>', 1), xm = { class: "mt-6 grid grid-cols-3 gap-3" }, km = ["href", "title"], $m = {
  key: 1,
  class: "h-5 w-5 text-gray-700",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 32"
}, Cm = /* @__PURE__ */ n("path", {
  d: "M16 8a5 5 0 1 0 5 5a5 5 0 0 0-5-5z",
  fill: "currentColor"
}, null, -1), _m = /* @__PURE__ */ n("path", {
  d: "M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2zm7.992 22.926A5.002 5.002 0 0 0 19 20h-6a5.002 5.002 0 0 0-4.992 4.926a12 12 0 1 1 15.985 0z",
  fill: "currentColor"
}, null, -1), Lm = [
  Cm,
  _m
], Vm = /* @__PURE__ */ Y({
  __name: "SignIn",
  props: {
    provider: null,
    title: { default: "Sign In" },
    tabs: { type: [Boolean, String], default: !0 },
    oauth: { type: [Boolean, String], default: !0 }
  },
  emits: ["login"],
  setup(e, { emit: l }) {
    const t = e, { getMetadata: a, createDto: i } = Je(), r = yl(), { signIn: d } = rn(), v = a({ assert: !0 }), f = v.plugins.auth, m = document.baseURI, g = v.app.baseUrl, p = I(i("Authenticate")), h = I(new Ze());
    lt(() => {
      f == null || f.authProviders.map((D) => D.formLayout).filter((D) => D).forEach((D) => D.forEach((F) => p.value[F.id] = ""));
    });
    const b = c(() => (f == null ? void 0 : f.authProviders.filter((D) => D.formLayout)) || []), k = c(() => b.value[0] || {}), _ = c(() => b.value[Math.max(b.value.length - 1, 0)] || {}), M = c(() => (t.provider ? f == null ? void 0 : f.authProviders.find((D) => D.name === t.provider) : null) ?? k.value), O = (D) => D === !1 || D === "false";
    function N(D) {
      return D.label || D.navItem && D.navItem.label;
    }
    const q = c(() => {
      var D;
      return (((D = M.value) == null ? void 0 : D.formLayout) || []).map((F) => {
        var E, K;
        return Object.assign({}, F, {
          type: (E = F.type) == null ? void 0 : E.toLowerCase(),
          autocomplete: F.autocomplete || (((K = F.type) == null ? void 0 : K.toLowerCase()) === "password" ? "current-password" : void 0) || (F.id.toLowerCase() === "username" ? "username" : void 0),
          css: Object.assign({ field: "col-span-12" }, F.css)
        });
      });
    }), Q = c(() => O(t.oauth) ? [] : (f == null ? void 0 : f.authProviders.filter((D) => D.type === "oauth")) || []), $ = c(() => {
      let D = oa(
        f == null ? void 0 : f.authProviders.filter((E) => E.formLayout && E.formLayout.length > 0),
        (E, K) => {
          let G = N(K) || Ye(K.name);
          E[G] = K.name === k.value.name ? "" : K.name;
        }
      );
      const F = M.value;
      return F && O(t.tabs) && (D = { [N(F) || Ye(F.name)]: F }), D;
    }), j = c(() => {
      let D = q.value.map((F) => F.id).filter((F) => F);
      return h.value.summaryMessage(D);
    });
    async function B() {
      if (p.value.provider = M.value.name, h.value = await r.api(p.value), h.value.succeeded) {
        const D = h.value.response;
        d(D), l("login", D), h.value = new Ze(), p.value = i("Authenticate");
      }
    }
    return (D, F) => {
      const E = U("ErrorSummary"), K = U("AutoFormFields"), G = U("PrimaryButton"), te = U("Icon"), T = qs("href");
      return s(f) ? (o(), u("div", dm, [
        n("div", cm, [
          n("h2", fm, V(e.title), 1),
          Object.keys(s($)).length > 1 ? (o(), u("p", mm, [
            n("span", vm, [
              (o(!0), u(be, null, $e(s($), (y, A) => gt((o(), u("a", {
                class: w([
                  y === "" || y === s(k).name ? "rounded-l-md" : y === s(_).name ? "rounded-r-md -ml-px" : "-ml-px",
                  e.provider === y ? "z-10 outline-none ring-1 ring-indigo-500 border-indigo-500" : "",
                  "cursor-pointer relative inline-flex items-center px-4 py-1 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                ])
              }, [
                he(V(A), 1)
              ], 2)), [
                [T, { provider: y }]
              ])), 256))
            ])
          ])) : C("", !0)
        ]),
        n("div", hm, [
          s(j) ? (o(), X(E, {
            key: 0,
            class: "mb-3",
            errorSummary: s(j)
          }, null, 8, ["errorSummary"])) : C("", !0),
          n("div", gm, [
            s(q).length ? (o(), u("form", {
              key: 0,
              onSubmit: je(B, ["prevent"])
            }, [
              fe(K, {
                modelValue: p.value,
                formLayout: s(q),
                api: h.value,
                hideSummary: !0,
                "divide-class": "",
                "space-class": "space-y-6"
              }, null, 8, ["modelValue", "formLayout", "api"]),
              n("div", ym, [
                fe(G, { class: "w-full" }, {
                  default: ve(() => [
                    he("Sign In")
                  ]),
                  _: 1
                })
              ])
            ], 40, pm)) : C("", !0),
            s(Q).length ? (o(), u("div", bm, [
              wm,
              n("div", xm, [
                (o(!0), u(be, null, $e(s(Q), (y) => (o(), u("div", null, [
                  n("a", {
                    href: s(g) + y.navItem.href + "?continue=" + s(m),
                    title: N(y),
                    class: "w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  }, [
                    y.icon ? (o(), X(te, {
                      key: 0,
                      image: y.icon,
                      class: "h-5 w-5 text-gray-700"
                    }, null, 8, ["image"])) : (o(), u("svg", $m, Lm))
                  ], 8, km)
                ]))), 256))
              ])
            ])) : C("", !0)
          ])
        ])
      ])) : (o(), u("div", um, "No Auth Plugin"));
    };
  }
}), Sm = {
  Alert: xa,
  AlertSuccess: Fa,
  ErrorSummary: Ba,
  InputDescription: Ea,
  Icon: os,
  Loading: ko,
  OutlineButton: _o,
  PrimaryButton: So,
  SecondaryButton: To,
  TextLink: Io,
  Breadcrumbs: Bo,
  Breadcrumb: zo,
  NavList: Qo,
  NavListItem: ni,
  AutoQueryGrid: Lu,
  SettingsIcons: Eu,
  FilterViews: dn,
  FilterColumn: un,
  QueryPrefs: cn,
  EnsureAccess: rs,
  EnsureAccessDialog: Hu,
  TextInput: Ju,
  TextareaInput: sd,
  SelectInput: dd,
  CheckboxInput: yd,
  TagInput: Hd,
  FileInput: dc,
  Autocomplete: Lc,
  Combobox: Mc,
  DynamicInput: Ac,
  LookupInput: Qc,
  AutoFormFields: Kc,
  AutoForm: t0,
  AutoCreateForm: C0,
  AutoEditForm: K0,
  ConfirmDelete: Z0,
  FormLoading: lf,
  DataGrid: rf,
  CellFormat: yf,
  PreviewFormat: Cf,
  HtmlFormat: Mf,
  CloseButton: Pf,
  SlideOver: Gf,
  ModalDialog: t1,
  ModalLookup: G1,
  Tabs: nm,
  DarkModeToggle: rm,
  SignIn: Vm
}, Mm = ["onClick", "title"], Am = /* @__PURE__ */ Y({
  __name: "RouterLink",
  props: {
    to: null
  },
  setup(e) {
    const l = e, { config: t } = wt(), a = () => t.value.navigate(l.to ?? "/");
    return (i, r) => (o(), u("a", Ce({
      onClick: je(a, ["prevent"]),
      title: e.to,
      href: "javascript:void(0)"
    }, i.$attrs), [
      Z(i.$slots, "default")
    ], 16, Mm));
  }
}), Tm = { RouterLink: Am }, Sl = Sm, Bm = {
  install(e) {
    Object.keys(Sl).forEach((l) => {
      e.component(l, Sl[l]);
    });
  },
  component(e) {
    return e && (Sl[e] || Tm[e]) || null;
  }
};
export {
  Om as css,
  Bm as default,
  rn as useAuth,
  yl as useClient,
  wt as useConfig,
  Dm as useFiles,
  jm as useFormatters,
  Je as useMetadata,
  za as useUtils
};
