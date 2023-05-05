var Ws = Object.defineProperty;
var Gs = (e, t, l) => t in e ? Ws(e, t, { enumerable: !0, configurable: !0, writable: !0, value: l }) : e[t] = l;
var $e = (e, t, l) => (Gs(e, typeof t != "symbol" ? t + "" : t, l), l);
import { defineComponent as ae, computed as f, openBlock as a, createElementBlock as u, normalizeClass as x, unref as o, createElementVNode as s, createCommentVNode as C, renderSlot as X, ref as I, toDisplayString as A, inject as Ne, nextTick as At, isRef as Un, mergeProps as Le, withModifiers as qe, h as ht, resolveComponent as W, createBlock as le, withCtx as xe, useAttrs as Js, createVNode as ke, createTextVNode as Ce, watchEffect as Bl, normalizeStyle as Gl, Fragment as Se, renderList as Me, withDirectives as wt, vModelCheckbox as Jl, withKeys as qn, createStaticVNode as yl, vModelSelect as Xs, useSlots as Xl, getCurrentInstance as We, onMounted as nt, createSlots as Yl, normalizeProps as Tt, guardReactiveProps as vl, vModelDynamic as Ys, onUnmounted as Jt, watch as Ot, vModelText as eo, resolveDynamicComponent as Qn, provide as Xt, resolveDirective as to } from "vue";
import { errorResponseExcept as lo, dateFmt as Kn, toTime as no, omit as ut, enc as Rl, setQueryString as so, appendQueryString as Qt, nameOf as oo, ApiResult as et, lastRightPart as xt, leftPart as bl, map as ze, toDate as $t, toDateTime as ao, toCamelCase as io, mapGet as pe, chop as ro, fromXsdDuration as Zn, isDate as wl, timeFmt12 as uo, apiValue as co, indexOfAny as fo, createBus as mo, toKebabCase as Bn, humanize as Be, delaySet as Wn, rightPart as Dl, queryString as Hl, combinePaths as vo, toPascalCase as lt, errorResponse as ft, trimEnd as ho, $1 as hl, lastLeftPart as go, ResponseStatus as Pl, ResponseError as Rn, HttpMethods as en, uniqueKeys as El, humanify as Gn, each as po } from "@servicestack/client";
const yo = { class: "flex items-center" }, bo = {
  key: 0,
  class: "flex-shrink-0 mr-3"
}, wo = {
  key: 0,
  class: "h-5 w-5 text-yellow-400",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, xo = /* @__PURE__ */ s("path", {
  "fill-rule": "evenodd",
  d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
  "clip-rule": "evenodd"
}, null, -1), ko = [
  xo
], $o = {
  key: 1,
  class: "h-5 w-5 text-red-400",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, Co = /* @__PURE__ */ s("path", {
  "fill-rule": "evenodd",
  d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z",
  "clip-rule": "evenodd"
}, null, -1), _o = [
  Co
], Lo = {
  key: 2,
  class: "h-5 w-5 text-blue-400",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, Vo = /* @__PURE__ */ s("path", {
  "fill-rule": "evenodd",
  d: "M19 10.5a8.5 8.5 0 11-17 0 8.5 8.5 0 0117 0zM8.25 9.75A.75.75 0 019 9h.253a1.75 1.75 0 011.709 2.13l-.46 2.066a.25.25 0 00.245.304H11a.75.75 0 010 1.5h-.253a1.75 1.75 0 01-1.709-2.13l.46-2.066a.25.25 0 00-.245-.304H9a.75.75 0 01-.75-.75zM10 7a1 1 0 100-2 1 1 0 000 2z",
  "clip-rule": "evenodd"
}, null, -1), So = [
  Vo
], Mo = {
  key: 3,
  class: "h-5 w-5 text-green-400",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, Ao = /* @__PURE__ */ s("path", {
  "fill-rule": "evenodd",
  d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
  "clip-rule": "evenodd"
}, null, -1), To = [
  Ao
], Io = /* @__PURE__ */ ae({
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
      s("div", yo, [
        e.hideIcon ? C("", !0) : (a(), u("div", bo, [
          e.type == "warn" ? (a(), u("svg", wo, ko)) : e.type == "error" ? (a(), u("svg", $o, _o)) : e.type == "info" ? (a(), u("svg", Lo, So)) : e.type == "success" ? (a(), u("svg", Mo, To)) : C("", !0)
        ])),
        s("div", null, [
          s("p", {
            class: x([o(i), "text-sm"])
          }, [
            X(r.$slots, "default")
          ], 2)
        ])
      ])
    ], 2));
  }
}), Fo = {
  key: 0,
  class: "rounded-md bg-green-50 dark:bg-green-200 p-4",
  role: "alert"
}, Do = { class: "flex" }, Po = /* @__PURE__ */ s("div", { class: "flex-shrink-0" }, [
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
], -1), Oo = { class: "ml-3" }, jo = { class: "text-sm font-medium text-green-800" }, Bo = { key: 0 }, Ro = { class: "ml-auto pl-3" }, Ho = { class: "-mx-1.5 -my-1.5" }, Eo = /* @__PURE__ */ s("span", { class: "sr-only" }, "Dismiss", -1), zo = /* @__PURE__ */ s("svg", {
  class: "h-5 w-5",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ s("path", { d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" })
], -1), No = [
  Eo,
  zo
], Uo = /* @__PURE__ */ ae({
  __name: "AlertSuccess",
  props: {
    message: null
  },
  setup(e) {
    const t = I(!1);
    return (l, n) => t.value ? C("", !0) : (a(), u("div", Fo, [
      s("div", Do, [
        Po,
        s("div", Oo, [
          s("h3", jo, [
            e.message ? (a(), u("span", Bo, A(e.message), 1)) : X(l.$slots, "default", { key: 1 })
          ])
        ]),
        s("div", Ro, [
          s("div", Ho, [
            s("button", {
              type: "button",
              class: "inline-flex rounded-md bg-green-50 dark:bg-green-200 p-1.5 text-green-500 dark:text-green-600 hover:bg-green-100 dark:hover:bg-green-700 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50 dark:ring-offset-green-200",
              onClick: n[0] || (n[0] = (i) => t.value = !0)
            }, No)
          ])
        ])
      ])
    ]));
  }
}), qo = { class: "flex" }, Qo = /* @__PURE__ */ s("div", { class: "flex-shrink-0" }, [
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
], -1), Ko = { class: "ml-3" }, Zo = { class: "text-sm text-red-700 dark:text-red-200" }, Wo = /* @__PURE__ */ ae({
  __name: "ErrorSummary",
  props: {
    status: null,
    except: null,
    class: null
  },
  setup(e) {
    const t = e;
    let l = Ne("ApiState", void 0);
    const n = f(() => t.status || l != null && l.error.value ? lo.call({ responseStatus: t.status ?? (l == null ? void 0 : l.error.value) }, t.except ?? []) : null);
    return (i, r) => o(n) ? (a(), u("div", {
      key: 0,
      class: x(`bg-red-50 dark:bg-red-900 border-l-4 border-red-400 p-4 ${i.$props.class}`)
    }, [
      s("div", qo, [
        Qo,
        s("div", Ko, [
          s("p", Zo, A(o(n)), 1)
        ])
      ])
    ], 2)) : C("", !0);
  }
}), Go = ["id", "aria-describedby"], Jo = /* @__PURE__ */ ae({
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
      s("div", null, A(e.description), 1)
    ], 8, Go)) : C("", !0);
  }
});
function xl(e) {
  return Kn(e).replace(/\//g, "-");
}
function Jn(e) {
  return e == null ? "" : no(e);
}
function Xn(e, t) {
  e.value = null, At(() => e.value = t);
}
function Lt(e) {
  return Object.keys(e).forEach((t) => {
    const l = e[t];
    e[t] = Un(l) ? o(l) : l;
  }), e;
}
function It(e, t, l) {
  l ? (t.value = e.entering.cls + " " + e.entering.from, setTimeout(() => t.value = e.entering.cls + " " + e.entering.to, 0)) : (t.value = e.leaving.cls + " " + e.leaving.from, setTimeout(() => t.value = e.leaving.cls + " " + e.leaving.to, 0));
}
function dl(e) {
  if (typeof document > "u")
    return;
  let t = (e == null ? void 0 : e.after) || document.activeElement, l = t && t.form;
  if (l) {
    let n = ':not([disabled]):not([tabindex="-1"])', i = l.querySelectorAll(`a:not([disabled]), button${n}, input[type=text]${n}, [tabindex]${n}`), r = Array.prototype.filter.call(
      i,
      (c) => c.offsetWidth > 0 || c.offsetHeight > 0 || c === t
    ), d = r.indexOf(t);
    d > -1 && (r[d + 1] || r[0]).focus();
  }
}
function jt(e) {
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
function it(e, t, l) {
  l || (l = {});
  let n = l.cls || l.className || l.class;
  return n && (l = ut(l, ["cls", "class", "className"]), l.class = n), t == null ? `<${e}` + zl(l) + "/>" : `<${e}` + zl(l) + `>${t || ""}</${e}>`;
}
function zl(e) {
  return Object.keys(e).reduce((t, l) => `${t} ${l}="${Rl(e[l])}"`, "");
}
function kl(e) {
  return Object.assign({ target: "_blank", rel: "noopener", class: "text-blue-600" }, e);
}
function Mt(e) {
  return bn(e);
}
let Xo = ["string", "number", "boolean", "null", "undefined"];
function kt(e) {
  return Xo.indexOf(typeof e) >= 0 || e instanceof Date;
}
function Kt(e) {
  return !kt(e);
}
class Yn {
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
function gl(e) {
  return typeof e == "string" ? JSON.parse(e) : null;
}
function tn(e) {
  if (typeof history < "u") {
    const t = so(location.href, e);
    history.pushState({}, "", t);
  }
}
function ln(e, t) {
  if (["function", "Function", "eval", "=>", ";"].some((i) => e.includes(i)))
    throw new Error(`Unsafe script: '${e}'`);
  const n = Object.assign(
    Object.keys(globalThis).reduce((i, r) => (i[r] = void 0, i), {}),
    t
  );
  return new Function("with(this) { return (" + e + ") }").call(n);
}
function Nl(e) {
  typeof navigator < "u" && navigator.clipboard.writeText(e);
}
function es(e) {
  const t = ne.config.storage.getItem(e);
  return t ? JSON.parse(t) : null;
}
function nn(e, t) {
  return Qt(`swr.${oo(e)}`, t ? Object.assign({}, e, t) : e);
}
function Yo(e) {
  if (e.request) {
    const t = nn(e.request, e.args);
    ne.config.storage.removeItem(t);
  }
}
async function ts(e, t, l, n, i) {
  const r = nn(t, n);
  l(new et({ response: es(r) }));
  const d = await e.api(t, n, i);
  if (d.succeeded && d.response) {
    d.response._date = new Date().valueOf();
    const c = JSON.stringify(d.response);
    ne.config.storage.setItem(r, c), l(d);
  }
  return d;
}
function Vt(e) {
  return typeof e == "string" ? e.split(",") : e || [];
}
function St(e, t) {
  const l = Vt(t);
  return e.reduce((n, i) => (n[i] = !l.includes(i), n), {});
}
function ea() {
  return {
    LocalStore: Yn,
    dateInputFormat: xl,
    timeInputFormat: Jn,
    setRef: Xn,
    unRefs: Lt,
    transition: It,
    focusNextElement: dl,
    getTypeName: jt,
    htmlTag: it,
    htmlAttrs: zl,
    linkAttrs: kl,
    toAppUrl: Mt,
    isPrimitive: kt,
    isComplexType: Kt,
    pushState: tn,
    scopedExpr: ln,
    copyText: Nl,
    fromCache: es,
    swrCacheKey: nn,
    swrClear: Yo,
    swrApi: ts
  };
}
const ls = "png,jpg,jpeg,jfif,gif,svg,webp".split(","), ns = {
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
}, Hn = Object.keys(ns), ct = (e, t) => `<svg xmlns='http://www.w3.org/2000/svg' aria-hidden='true' role='img' preserveAspectRatio='xMidYMid meet' viewBox='${e}'>${t}</svg>`, cl = {
  img: ct("4 4 16 16", "<path fill='currentColor' d='M20 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zm-2 0H6v6.38l2.19-2.19l5.23 5.23l1-1a1.59 1.59 0 0 1 2.11.11L18 16V6zm-5 3.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0z'/>"),
  vid: ct("0 0 24 24", "<path fill='currentColor' d='m14 2l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8m4 18V9h-5V4H6v16h12m-2-2l-2.5-1.7V18H8v-5h5.5v1.7L16 13v5Z'/>"),
  aud: ct("0 0 24 24", "<path fill='currentColor' d='M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6zm10-9h-4v3.88a2.247 2.247 0 0 0-3.5 1.87c0 1.24 1.01 2.25 2.25 2.25S13 17.99 13 16.75V13h3v-2z'/>"),
  ppt: ct("0 0 48 48", "<g fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='4'><path d='M4 8h40'/><path d='M8 8h32v26H8V8Z' clip-rule='evenodd'/><path d='m22 16l5 5l-5 5m-6 16l8-8l8 8'/></g>"),
  xls: ct("0 0 256 256", "<path fill='currentColor' d='M200 26H72a14 14 0 0 0-14 14v26H40a14 14 0 0 0-14 14v96a14 14 0 0 0 14 14h18v26a14 14 0 0 0 14 14h128a14 14 0 0 0 14-14V40a14 14 0 0 0-14-14Zm-42 76h44v52h-44Zm44-62v50h-44V80a14 14 0 0 0-14-14h-2V38h58a2 2 0 0 1 2 2ZM70 40a2 2 0 0 1 2-2h58v28H70ZM38 176V80a2 2 0 0 1 2-2h104a2 2 0 0 1 2 2v96a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2Zm32 40v-26h60v28H72a2 2 0 0 1-2-2Zm130 2h-58v-28h2a14 14 0 0 0 14-14v-10h44v50a2 2 0 0 1-2 2ZM69.2 148.4L84.5 128l-15.3-20.4a6 6 0 1 1 9.6-7.2L92 118l13.2-17.6a6 6 0 0 1 9.6 7.2L99.5 128l15.3 20.4a6 6 0 0 1-9.6 7.2L92 138l-13.2 17.6a6 6 0 1 1-9.6-7.2Z'/>"),
  doc: ct("0 0 32 32", "<path fill='currentColor' d='M26 30H11a2.002 2.002 0 0 1-2-2v-6h2v6h15V6h-9V4h9a2.002 2.002 0 0 1 2 2v22a2.002 2.002 0 0 1-2 2Z'/><path fill='currentColor' d='M17 10h7v2h-7zm-1 5h8v2h-8zm-1 5h9v2h-9zm-6-1a5.005 5.005 0 0 1-5-5V3h2v11a3 3 0 0 0 6 0V5a1 1 0 0 0-2 0v10H8V5a3 3 0 0 1 6 0v9a5.005 5.005 0 0 1-5 5z'/>"),
  zip: ct("0 0 16 16", "<g fill='currentColor'><path d='M6.5 7.5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v.938l.4 1.599a1 1 0 0 1-.416 1.074l-.93.62a1 1 0 0 1-1.109 0l-.93-.62a1 1 0 0 1-.415-1.074l.4-1.599V7.5zm2 0h-1v.938a1 1 0 0 1-.03.243l-.4 1.598l.93.62l.93-.62l-.4-1.598a1 1 0 0 1-.03-.243V7.5z'/><path d='M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm5.5-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9v1H8v1h1v1H8v1h1v1H7.5V5h-1V4h1V3h-1V2h1V1z'/></g>"),
  exe: ct("0 0 16 16", "<path fill='currentColor' fill-rule='evenodd' d='M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM2.575 15.202H.785v-1.073H2.47v-.606H.785v-1.025h1.79v-.648H0v3.999h2.575v-.647ZM6.31 11.85h-.893l-.823 1.439h-.036l-.832-1.439h-.931l1.227 1.983l-1.239 2.016h.861l.853-1.415h.035l.85 1.415h.908l-1.254-1.992L6.31 11.85Zm1.025 3.352h1.79v.647H6.548V11.85h2.576v.648h-1.79v1.025h1.684v.606H7.334v1.073Z'/>"),
  att: ct("0 0 24 24", "<path fill='currentColor' d='M14 0a5 5 0 0 1 5 5v12a7 7 0 1 1-14 0V9h2v8a5 5 0 0 0 10 0V5a3 3 0 1 0-6 0v12a1 1 0 1 0 2 0V6h2v11a3 3 0 1 1-6 0V5a5 5 0 0 1 5-5Z'/>")
}, ta = /[\r\n%#()<>?[\\\]^`{|}]/g, En = 1024, la = ["Bytes", "KB", "MB", "GB", "TB"], na = (() => {
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
  function c(h, g) {
    h.split(",").forEach((p) => d[p] = g);
  }
  function m(h, g) {
    h.split(",").forEach((p) => d[p] = g(p));
  }
  return m("jpeg,gif,png,tiff,bmp,webp", (h) => l + h), m("jsx,csv,css", (h) => n + h), m("aac,ac3,aiff,m4a,m4b,m4p,mid,midi,wav", (h) => i + h), m("3gpp,avi,dv,divx,ogg,mp4,webm", (h) => r + h), m("rtf,pdf", (h) => e + h), c("htm,html,shtm", n + "html"), c("js,mjs,cjs", n + "javascript"), c("yml,yaml", e + "yaml"), c("bat,cmd", e + "bat"), c("xml,csproj,fsproj,vbproj", n + "xml"), c("txt,ps1", n + "plain"), c("qt,mov", r + "quicktime"), c("doc,dot", e + "msword"), c("xls,xlt,xla", e + "excel"), c("ppt,oit,pps,ppa", e + "vnd.ms-powerpoint"), c("cer,crt,der", e + "x-x509-ca-cert"), c("gz,tgz,zip,rar,lzh,z", e + "x-compressed"), c("aaf,aca,asd,bin,cab,chm,class,cur,db,dat,deploy,dll,dsp,exe,fla,ics,inf,mix,msi,mso,obj,ocx,prm,prx,psd,psp,qxd,sea,snp,so,sqlite,toc,ttf,u32,xmp,xsn,xtp", e + "octet-stream"), d;
})();
let Ul = [];
function ss(e) {
  return e = e.replace(/"/g, "'"), e = e.replace(/>\s+</g, "><"), e = e.replace(/\s{2,}/g, " "), e.replace(ta, encodeURIComponent);
}
function sn(e) {
  return "data:image/svg+xml;utf8," + ss(e);
}
function os(e) {
  let t = URL.createObjectURL(e);
  return Ul.push(t), t;
}
function as() {
  Ul.forEach((e) => {
    try {
      URL.revokeObjectURL(e);
    } catch (t) {
      console.error("URL.revokeObjectURL", t);
    }
  }), Ul = [];
}
function on(e) {
  if (!e)
    return null;
  let t = bl(e, "?");
  return xt(t, "/");
}
function Yt(e) {
  let t = on(e);
  return t == null || t.indexOf(".") === -1 ? null : xt(t, ".").toLowerCase();
}
function an(e) {
  let t = Yt(e.name);
  return t && ls.indexOf(t) >= 0 ? os(e) : gt(e.name);
}
function rn(e) {
  if (!e)
    return !1;
  if (e.startsWith("blob:") || e.startsWith("data:"))
    return !0;
  let t = Yt(e);
  return t && ls.indexOf(t) >= 0 || !1;
}
function gt(e) {
  if (!e)
    return null;
  let t = Yt(e);
  return t == null || rn(e) ? e : Ut(t) || sn(cl.doc);
}
function Ut(e) {
  let t = is(e);
  return t && sn(t) || null;
}
function is(e) {
  if (cl[e])
    return cl[e];
  for (let t = 0; t < Hn.length; t++) {
    let l = Hn[t];
    if (ns[l].indexOf(e) >= 0)
      return cl[l];
  }
  return null;
}
function un(e, t = 2) {
  if (e === 0)
    return "0 Bytes";
  const l = t < 0 ? 0 : t, n = Math.floor(Math.log(e) / Math.log(En));
  return parseFloat((e / Math.pow(En, n)).toFixed(l)) + " " + la[n];
}
function sa(e) {
  return e.files && Array.from(e.files).map((t) => ({ fileName: t.name, contentLength: t.size, filePath: an(t) }));
}
function $l(e, t) {
  e.onerror = null, e.src = dn(e.src, t) || "";
}
function dn(e, t) {
  return Ut(xt(e, ".").toLowerCase()) || (t ? Ut(t) || t : null) || Ut("doc");
}
function ql(e) {
  if (!e)
    throw new Error("fileNameOrExt required");
  const t = xt(e, ".").toLowerCase();
  return na[t] || "application/" + t;
}
function zv() {
  return {
    extSvg: is,
    extSrc: Ut,
    getExt: Yt,
    encodeSvg: ss,
    canPreview: rn,
    getFileName: on,
    getMimeType: ql,
    formatBytes: un,
    filePathUri: gt,
    svgToDataUri: sn,
    fileImageUri: an,
    objectUrl: os,
    flush: as,
    inputFiles: sa,
    iconOnError: $l,
    iconFallbackSrc: dn
  };
}
class oa {
  constructor(t) {
    $e(this, "view");
    $e(this, "includeTypes");
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
const Ft = "/metadata/app.json", aa = {
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
}, ia = {
  number: "Int32",
  checkbox: "Boolean",
  date: "DateTime",
  "datetime-local": "DateTime",
  time: "TimeSpan"
}, Ql = {
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
[...Object.keys(Ql), ...Object.values(Ql)];
const ra = {
  String: "string",
  Boolean: "bool",
  ...Ql
};
function rl(e) {
  return ra[e] || e;
}
function rs(e, t) {
  return e ? (t || (t = []), e === "Nullable`1" ? rl(t[0]) + "?" : e.endsWith("[]") ? `List<${rl(e.substring(0, e.length - 2))}>` : t.length === 0 ? rl(e) : bl(rl(e), "`") + "<" + t.join(",") + ">") : "";
}
function ua(e) {
  return e && rs(e.name, e.genericArgs);
}
class Dt {
  constructor() {
    $e(this, "Query");
    $e(this, "QueryInto");
    $e(this, "Create");
    $e(this, "Update");
    $e(this, "Patch");
    $e(this, "Delete");
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
    He.isQueryInto(t) && !this.QueryInto ? this.QueryInto = t : He.isQuery(t) && !this.Query ? this.Query = t : He.isCreate(t) && !this.Create ? this.Create = t : He.isUpdate(t) && !this.Update ? this.Update = t : He.isPatch(t) && !this.Patch ? this.Patch = t : He.isDelete(t) && !this.Delete && (this.Delete = t);
  }
  static from(t) {
    const l = new Dt();
    return t.forEach((n) => {
      l.add(n);
    }), l;
  }
  static forType(t, l) {
    var i;
    let n = new Dt();
    return t && (l ?? (l = (i = ne.metadata.value) == null ? void 0 : i.api), l == null || l.operations.forEach((r) => {
      var d;
      ((d = r.dataModel) == null ? void 0 : d.name) == t && n.add(r);
    })), n;
  }
}
const He = {
  Create: "ICreateDb`1",
  Update: "IUpdateDb`1",
  Patch: "IPatchDb`1",
  Delete: "IDeleteDb`1",
  AnyRead: ["QueryDb`1", "QueryDb`2"],
  AnyWrite: ["ICreateDb`1", "IUpdateDb`1", "IPatchDb`1", "IDeleteDb`1"],
  isAnyQuery: (e) => ze(e.request.inherits, (t) => He.AnyRead.indexOf(t.name) >= 0),
  isQuery: (e) => ze(e.request.inherits, (t) => t.name === "QueryDb`1"),
  isQueryInto: (e) => ze(e.request.inherits, (t) => t.name === "QueryDb`2"),
  isCrud: (e) => {
    var t;
    return (t = e.request.implements) == null ? void 0 : t.some((l) => He.AnyWrite.indexOf(l.name) >= 0);
  },
  isCreate: (e) => ul(e, He.Create),
  isUpdate: (e) => ul(e, He.Update),
  isPatch: (e) => ul(e, He.Patch),
  isDelete: (e) => ul(e, He.Delete),
  model: (e) => {
    var t, l, n;
    return e ? ze(e.inherits, (i) => He.AnyRead.indexOf(i.name) >= 0) ? (t = e.inherits) == null ? void 0 : t.genericArgs[0] : (n = (l = e.implements) == null ? void 0 : l.find((i) => He.AnyWrite.indexOf(i.name) >= 0)) == null ? void 0 : n.genericArgs[0] : null;
  }
};
function da(e) {
  var t;
  return ((t = e.input) == null ? void 0 : t.type) || Cl(cn(e));
}
function us(e) {
  return e.endsWith("?") ? ro(e, 1) : e;
}
function Cl(e) {
  return aa[us(e)];
}
function ca(e) {
  return e && ia[e] || "String";
}
function cn(e) {
  return e.type === "Nullable`1" ? e.genericArgs[0] : e.type;
}
function Kl(e) {
  return e && Cl(e) == "number" || !1;
}
function ds(e) {
  return e && e.toLowerCase() == "string" || !1;
}
function fa(e) {
  return e == "List`1" || e.startsWith("List<") || e.endsWith("[]");
}
function cs(e) {
  if (!(e != null && e.type))
    return !1;
  const t = cn(e);
  return e.isValueType && t.indexOf("`") == -1 || e.isEnum ? !1 : Cl(e.type) == null;
}
function fs(e) {
  var l, n, i;
  if (!(e != null && e.type))
    return !1;
  const t = cn(e);
  return e.isValueType && t.indexOf("`") == -1 || e.isEnum || ((l = e.input) == null ? void 0 : l.type) == "file" || ((n = e.input) == null ? void 0 : n.type) == "tag" || ((i = e.input) == null ? void 0 : i.type) == "combobox" ? !0 : Cl(e.type) != null;
}
function Zt(e, t) {
  let l = typeof e == "string" ? _l(e) : e;
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
function ma(e, t, l = {}) {
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
function fl(e, t) {
  return e ? (Object.keys(e).forEach((l) => {
    let n = e[l];
    typeof n == "string" && n.startsWith("/Date") && (e[l] = xl($t(n)));
  }), e) : {};
}
function va(e, t) {
  let l = {};
  return Array.from(e.elements).forEach((n) => {
    var g;
    let i = n;
    if (!i.id || i.value == null || i.value === "")
      return;
    const r = i.id.toLowerCase(), d = t && t.find((p) => p.name.toLowerCase() == r);
    let c = d == null ? void 0 : d.type, m = (g = d == null ? void 0 : d.genericArgs) == null ? void 0 : g[0], h = i.type === "checkbox" ? i.checked : i.value;
    Kl(c) ? h = Number(h) : c === "List`1" && typeof h == "string" && (h = h.split(",").map((p) => Kl(m) ? Number(p) : p)), l[i.id] = h;
  }), l;
}
function fn(e) {
  var t;
  return ((t = e == null ? void 0 : e.api) == null ? void 0 : t.operations) && e.api.operations.length > 0;
}
function ha(e) {
  if (e != null && e.assert && !ne.metadata.value)
    throw new Error("useMetadata() not configured, see: https://docs.servicestack.net/vue/use-metadata");
  return ne.metadata.value;
}
function Wt(e) {
  return e && fn(e) ? (e.date = ao(new Date()), ne.metadata.value = e, typeof localStorage < "u" && localStorage.setItem(Ft, JSON.stringify(e)), !0) : !1;
}
function ga() {
  ne.metadata.value = null, typeof localStorage < "u" && localStorage.removeItem(Ft);
}
function ms() {
  if (ne.metadata.value != null)
    return !0;
  let e = globalThis.Server;
  if (fn(e))
    Wt(e);
  else {
    const t = typeof localStorage < "u" ? localStorage.getItem(Ft) : null;
    if (t)
      try {
        Wt(JSON.parse(t));
      } catch {
        console.error(`Could not JSON.parse ${Ft} from localStorage`);
      }
  }
  return ne.metadata.value != null;
}
async function zn(e, t) {
  let l = t ? await t() : await fetch(e);
  if (l.ok) {
    let n = await l.text();
    Wt(JSON.parse(n));
  } else
    console.error(`Could not download ${t ? "AppMetadata" : e}: ${l.statusText}`);
  fn(ne.metadata.value) || console.warn("AppMetadata is not available");
}
async function pa(e) {
  var r;
  const { olderThan: t, resolvePath: l, resolve: n } = e || {};
  let i = ms() && t !== 0;
  if (i && t) {
    let d = $t((r = ne.metadata.value) == null ? void 0 : r.date);
    (!d || new Date().getTime() - d.getTime() > t) && (i = !1);
  }
  if (!i) {
    if ((l || n) && await zn(l || Ft, n), ne.metadata.value != null)
      return;
    const d = Ne("client");
    if (d != null) {
      const c = await d.api(new oa());
      c.succeeded && Wt(c.response);
    }
    if (ne.metadata.value != null)
      return;
    await zn(Ft);
  }
  return ne.metadata.value;
}
function st(e, t) {
  var d;
  let l = (d = ne.metadata.value) == null ? void 0 : d.api;
  if (!l || !e)
    return null;
  let n = l.types.find((c) => c.name.toLowerCase() === e.toLowerCase() && (!t || c.namespace == t));
  if (n)
    return n;
  let i = _l(e);
  if (i)
    return i.request;
  let r = l.operations.find((c) => c.response && c.response.name.toLowerCase() === e.toLowerCase() && (!t || c.response.namespace == t));
  return r ? r.response : null;
}
function _l(e) {
  var n;
  let t = (n = ne.metadata.value) == null ? void 0 : n.api;
  return t ? t.operations.find((i) => i.request.name.toLowerCase() === e.toLowerCase()) : null;
}
function ya({ dataModel: e }) {
  var n;
  const t = (n = ne.metadata.value) == null ? void 0 : n.api;
  if (!t)
    return [];
  let l = t.operations;
  if (e) {
    const i = typeof e == "string" ? st(e) : e;
    l = l.filter((r) => vs(r.dataModel, i));
  }
  return l;
}
function mn(e) {
  return e ? st(e.name, e.namespace) : null;
}
function vs(e, t) {
  return e && t && e.name === t.name && (!e.namespace || !t.namespace || e.namespace === t.namespace);
}
function ba(e, t) {
  let l = st(e);
  return l && l.properties && l.properties.find((i) => i.name.toLowerCase() === t.toLowerCase());
}
function hs(e) {
  return gs(st(e));
}
function gs(e) {
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
function ps(e) {
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
    const i = e.genericArgs && e.genericArgs.length == 1 ? e.genericArgs[0] : e.type, r = st(i);
    if (r)
      return gs(r);
  }
  return null;
}
function vn(e) {
  if (!e)
    return;
  const t = [];
  return Object.keys(e).forEach((l) => t.push({ key: l, value: e[l] })), t;
}
function wa(e, t) {
  const n = ((i, r) => Object.assign({
    id: i,
    name: i,
    type: r
  }, t))(e.name, (t == null ? void 0 : t.type) || da(e) || "text");
  return e.isEnum && (n.type = "select", n.allowableEntries = vn(ps(e))), n;
}
function xa(e) {
  let t = [];
  if (e) {
    const l = Ge(e), n = _l(e.name), i = mn(n == null ? void 0 : n.dataModel);
    l.forEach((r) => {
      var c, m, h;
      if (!fs(r))
        return;
      const d = wa(r, r.input);
      if (d.id = io(d.id), d.type == "file" && r.uploadTo && !d.accept) {
        const g = (m = (c = ne.metadata.value) == null ? void 0 : c.plugins.filesUpload) == null ? void 0 : m.locations.find((p) => p.name == r.uploadTo);
        g && !d.accept && g.allowExtensions && (d.accept = g.allowExtensions.map((p) => p.startsWith(".") ? p : `.${p}`).join(","));
      }
      if (i) {
        const g = (h = i.properties) == null ? void 0 : h.find((p) => p.name == r.name);
        r.ref || (r.ref = g == null ? void 0 : g.ref);
      }
      if (d.options)
        try {
          const g = {
            input: d,
            $typeFields: l.map((v) => v.name),
            $dataModelFields: i ? Ge(i).map((v) => v.name) : [],
            ...ne.config.scopeWhitelist
          }, p = ln(d.options, g);
          Object.keys(p).forEach((v) => {
            d[v] = p[v];
          });
        } catch {
          console.error(`failed to evaluate '${d.options}'`);
        }
      t.push(d);
    });
  }
  return t;
}
function hn(e, t) {
  var i, r;
  if (!t.type)
    return console.error("enumDescriptions missing {type:'EnumType'} options"), [`${e}`];
  const l = st(t.type);
  if (!(l != null && l.enumValues))
    return console.error(`Could not find metadata for ${t.type}`), [`${e}`];
  const n = [];
  for (let d = 0; d < l.enumValues.length; d++) {
    const c = parseInt(l.enumValues[d]);
    c > 0 && (c & e) === c && n.push(((i = l.enumDescriptions) == null ? void 0 : i[d]) || ((r = l.enumNames) == null ? void 0 : r[d]) || `${e}`);
  }
  return n;
}
function ys(e) {
  return (t) => typeof t == "number" ? hn(t, { type: e }) : t;
}
function Ge(e) {
  if (!e)
    return [];
  let t = [], l = {};
  function n(i) {
    i.forEach((r) => {
      l[r.name] || (l[r.name] = 1, t.push(r));
    });
  }
  for (; e; )
    e.properties && n(e.properties), e = e.inherits ? mn(e.inherits) : null;
  return t.map((i) => i.type.endsWith("[]") ? { ...i, type: "List`1", genericArgs: [i.type.substring(0, i.type.length - 2)] } : i);
}
function ul(e, t) {
  var l;
  return ((l = e.request.implements) == null ? void 0 : l.some((n) => n.name === t)) || !1;
}
function el(e) {
  return e ? bs(e, Ge(e)) : null;
}
function bs(e, t) {
  let l = t.find((r) => r.name.toLowerCase() === "id");
  if (l && l.isPrimaryKey)
    return l;
  let i = t.find((r) => r.isPrimaryKey) || l;
  if (!i) {
    let r = He.model(e);
    if (r)
      return ze(st(r), (d) => el(d));
    console.error(`Primary Key not found in ${e.name}`);
  }
  return i || null;
}
function ka(e, t) {
  return ze(el(e), (l) => pe(t, l.name));
}
function ws(e, t, l) {
  return e && e.valueType === "none" ? "" : l.key === "%In" || l.key === "%Between" ? `(${l.value})` : $a(t, l.value);
}
function $a(e, t) {
  return e ? (e = us(e), Kl(e) || e === "Boolean" ? t : fa(e) ? `[${t}]` : `'${t}'`) : t;
}
function ot() {
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
  return ms(), {
    loadMetadata: pa,
    getMetadata: ha,
    setMetadata: Wt,
    clearMetadata: ga,
    metadataApp: e,
    metadataApi: t,
    filterDefinitions: l,
    typeOf: st,
    typeOfRef: mn,
    typeEquals: vs,
    apiOf: _l,
    findApis: ya,
    typeName: ua,
    typeName2: rs,
    property: ba,
    enumOptions: hs,
    propertyOptions: ps,
    createFormLayout: xa,
    typeProperties: Ge,
    supportsProp: fs,
    Crud: He,
    Apis: Dt,
    getPrimaryKey: el,
    getPrimaryKeyByProps: bs,
    getId: ka,
    createDto: Zt,
    makeDto: ma,
    toFormValues: fl,
    formValues: va,
    isComplexProp: cs,
    asKvps: vn,
    expandEnumFlags: hn,
    enumFlagsConverter: ys
  };
}
const Ye = class {
  static async getOrFetchValue(t, l, n, i, r, d, c) {
    const m = Ye.getValue(n, c, r);
    return m ?? (await Ye.fetchLookupIds(t, l, n, i, r, d, [c]), Ye.getValue(n, c, r));
  }
  static getValue(t, l, n) {
    const i = Ye.Lookup[t];
    if (i) {
      const r = i[l];
      if (r)
        return n = n.toLowerCase(), r[n];
    }
  }
  static setValue(t, l, n, i) {
    const r = Ye.Lookup[t] ?? (Ye.Lookup[t] = {}), d = r[l] ?? (r[l] = {});
    n = n.toLowerCase(), d[n] = i;
  }
  static setRefValue(t, l) {
    const n = pe(l, t.refId);
    if (n == null || t.refLabel == null)
      return null;
    const i = pe(l, t.refLabel);
    return Ye.setValue(t.model, n, t.refLabel, i), i;
  }
  static async fetchLookupIds(t, l, n, i, r, d, c) {
    const m = l.operations.find((h) => {
      var g;
      return He.isAnyQuery(h) && ((g = h.dataModel) == null ? void 0 : g.name) == n;
    });
    if (m) {
      const h = Ye.Lookup[n] ?? (Ye.Lookup[n] = {}), g = [];
      Object.keys(h).forEach((J) => {
        const ee = h[J];
        pe(ee, r) && g.push(J);
      });
      const p = c.filter((J) => !g.includes(J));
      if (p.length == 0)
        return;
      const v = d ? null : `${i},${r}`, y = {
        [i + "In"]: p.join(",")
      };
      v && (y.fields = v);
      const $ = Zt(m, y), P = await t.api($, { jsconfig: "edv,eccn" });
      if (P.succeeded)
        (pe(P.response, "results") || []).forEach((ee) => {
          if (!pe(ee, i)) {
            console.error(`result[${i}] == null`, ee);
            return;
          }
          const S = `${pe(ee, i)}`, H = pe(ee, r);
          r = r.toLowerCase();
          const E = h[S] ?? (h[S] = {});
          E[r] = `${H}`;
        });
      else {
        console.error(`Failed to call ${m.request.name}`);
        return;
      }
    }
  }
};
let yt = Ye;
$e(yt, "Lookup", {});
let Zl = () => new Date().getTime(), Ca = ["/", "T", ":", "-"], rt = {
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
}, _a = new Intl.RelativeTimeFormat(rt.locale, {}), Nn = 24 * 60 * 60 * 1e3 * 365, Ol = {
  year: Nn,
  month: Nn / 12,
  day: 24 * 60 * 60 * 1e3,
  hour: 60 * 60 * 1e3,
  minute: 60 * 1e3,
  second: 1e3
}, pt = {
  currency: xs,
  bytes: ks,
  link: $s,
  linkTel: Cs,
  linkMailTo: _s,
  icon: Ls,
  iconRounded: Vs,
  attachment: Ss,
  hidden: Ms,
  time: As,
  relativeTime: pn,
  relativeTimeFromMs: Ll,
  enumFlags: Ta,
  formatDate: Bt,
  formatNumber: gn
};
"iconOnError" in globalThis || (globalThis.iconOnError = $l);
class Ue {
}
$e(Ue, "currency", { method: "currency" }), $e(Ue, "bytes", { method: "bytes" }), $e(Ue, "link", { method: "link" }), $e(Ue, "linkTel", { method: "linkTel" }), $e(Ue, "linkMailTo", { method: "linkMailTo" }), $e(Ue, "icon", { method: "icon" }), $e(Ue, "iconRounded", { method: "iconRounded" }), $e(Ue, "attachment", { method: "attachment" }), $e(Ue, "time", { method: "time" }), $e(Ue, "relativeTime", { method: "relativeTime" }), $e(Ue, "relativeTimeFromMs", { method: "relativeTimeFromMs" }), $e(Ue, "date", { method: "formatDate" }), $e(Ue, "number", { method: "formatNumber" }), $e(Ue, "hidden", { method: "hidden" }), $e(Ue, "enumFlags", { method: "enumFlags" });
function La(e) {
  rt = Object.assign({}, rt, e);
}
function Va(e) {
  Object.keys(e || {}).forEach((t) => {
    typeof e[t] == "function" && (pt[t] = e[t]);
  });
}
function Sa() {
  return pt;
}
function tl(e, t) {
  return t ? it("span", e, t) : e;
}
function xs(e, t) {
  const l = ut(t, ["currency"]);
  return tl(new Intl.NumberFormat(void 0, { style: "currency", currency: (t == null ? void 0 : t.currency) || "USD" }).format(e), l);
}
function ks(e, t) {
  return tl(un(e), t);
}
function $s(e, t) {
  return it("a", e, kl({ ...t, href: e }));
}
function Cs(e, t) {
  return it("a", e, kl({ ...t, href: `tel:${e}` }));
}
function _s(e, t) {
  t || (t = {});
  let { subject: l, body: n } = t, i = ut(t, ["subject", "body"]), r = {};
  return l && (r.subject = l), n && (r.body = n), it("a", e, kl({ ...i, href: `mailto:${Qt(e, r)}` }));
}
function Ls(e, t) {
  return it("img", void 0, Object.assign({ class: "w-6 h-6", title: e, src: Mt(e), onerror: "iconOnError(this)" }, t));
}
function Vs(e, t) {
  return it("img", void 0, Object.assign({ class: "w-8 h-8 rounded-full", title: e, src: Mt(e), onerror: "iconOnError(this)" }, t));
}
function Ss(e, t) {
  let l = on(e), i = Yt(l) == null || rn(e) ? Mt(e) : dn(e);
  const r = Mt(i);
  let d = t && (t["icon-class"] || t.iconClass), c = it("img", void 0, Object.assign({ class: "w-6 h-6", src: r, onerror: "iconOnError(this,'att')" }, d ? { class: d } : null)), m = `<span class="pl-1">${l}</span>`;
  return it("a", c + m, Object.assign({ class: "flex", href: Mt(e), title: e }, t ? ut(t, ["icon-class", "iconClass"]) : null));
}
function Ms(e) {
  return "";
}
function As(e, t) {
  let l = typeof e == "string" ? new Date(Zn(e) * 1e3) : wl(e) ? $t(e) : null;
  return tl(l ? uo(l) : e, t);
}
function Bt(e, t) {
  if (e == null)
    return "";
  let l = typeof e == "number" ? new Date(e) : typeof e == "string" ? $t(e) : e;
  if (!wl(l))
    return console.warn(`${l} is not a Date value`), e == null ? "" : `${e}`;
  let n = rt.date ? Vl(rt.date) : null;
  return tl(typeof n == "function" ? n(l) : Kn(l), t);
}
function gn(e, t) {
  if (typeof e != "number")
    return e;
  let l = rt.number ? Vl(rt.number) : null, n = typeof l == "function" ? l(e) : `${e}`;
  return n === "" && (console.warn(`formatNumber(${e}) => ${n}`, l), n = `${e}`), tl(n, t);
}
function Ts(e, t, l) {
  let n = co(e), i = t ? Vl(t) : null;
  if (typeof i == "function") {
    let d = l;
    if (t != null && t.options)
      try {
        d = ln(t.options, l);
      } catch (c) {
        console.error(`Could not evaluate '${t.options}'`, c, ", with scope:", l);
      }
    return i(e, d);
  }
  let r = n != null ? wl(n) ? Bt(n, l) : typeof n == "number" ? gn(n, l) : n : null;
  return r ?? "";
}
function Gt(e, t, l) {
  return kt(e) ? Ts(e, t, l) : Da(e, t, l);
}
function Ma(e) {
  if (e == null)
    return NaN;
  if (typeof e == "number")
    return e;
  if (wl(e))
    return e.getTime() - Zl();
  if (typeof e == "string") {
    let t = Number(e);
    if (!isNaN(t))
      return t;
    if (e[0] === "P" || e.startsWith("-P"))
      return Zn(e) * 1e3 * -1;
    if (fo(e, Ca) >= 0)
      return $t(e).getTime() - Zl();
  }
  return NaN;
}
function Ll(e, t) {
  for (let l in Ol)
    if (Math.abs(e) > Ol[l] || l === "second")
      return (t || _a).format(Math.round(e / Ol[l]), l);
}
function pn(e, t) {
  let l = Ma(e);
  return isNaN(l) ? "" : Ll(l, t);
}
function Aa(e, t) {
  return Ll(e.getTime() - (t ? t.getTime() : Zl()));
}
function Ta(e, t) {
  return hn(e, t).join(", ");
}
function Vl(e) {
  if (!e)
    return null;
  let { method: t, options: l } = e, n = `${t}(${l})`, i = pt[n] || pt[t];
  if (typeof i == "function")
    return i;
  let r = e.locale || rt.locale;
  if (t.startsWith("Intl.")) {
    let d = r ? `'${r}'` : "undefined", c = `return new ${t}(${d},${l || "undefined"})`;
    try {
      let m = Function(c)();
      return i = t === "Intl.DateTimeFormat" ? (h) => m.format($t(h)) : t === "Intl.NumberFormat" ? (h) => m.format(Number(h)) : t === "Intl.RelativeTimeFormat" ? (h) => pn(h, m) : (h) => m.format(h), pt[n] = i;
    } catch (m) {
      console.error(`Invalid format: ${c}`, m);
    }
  } else {
    let d = globalThis[t];
    if (typeof d == "function") {
      let c = l != null ? Function("return " + l)() : void 0;
      return i = (m) => d(m, c, r), pt[n] = i;
    }
    console.error(`No '${t}' function exists`, Object.keys(pt));
  }
  return null;
}
function Is(e, t) {
  return e ? e.length > t ? e.substring(0, t) + "..." : e : "";
}
function Fs(e) {
  return e.substring(0, 6) === "/Date(" ? Bt($t(e)) : e;
}
function Ia(e) {
  return yn(Pt(e)).replace(/"/g, "");
}
function Ds(e) {
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
function yn(e, t = 4) {
  return e = Ds(e), typeof e != "object" ? typeof e == "string" ? e : `${e}` : JSON.stringify(e, void 0, t);
}
function Fa(e) {
  return e = Ds(e), typeof e != "object" ? typeof e == "string" ? e : `${e}` : (e = Object.assign({}, e), e = Pt(e), yn(e));
}
function Pt(e) {
  if (e == null)
    return null;
  if (typeof e == "string")
    return Fs(e);
  if (kt(e))
    return e;
  if (e instanceof Date)
    return Bt(e);
  if (Array.isArray(e))
    return e.map(Pt);
  if (typeof e == "object") {
    let t = {};
    return Object.keys(e).forEach((l) => {
      l != "__type" && (t[l] = Pt(e[l]));
    }), t;
  }
  return e;
}
function Da(e, t, l) {
  let n = e;
  if (Array.isArray(e)) {
    if (kt(e[0]))
      return n.join(",");
    e[0] != null && (n = e[0]);
  }
  if (n == null)
    return "";
  if (n instanceof Date)
    return Bt(n, l);
  let i = Object.keys(n), r = [];
  for (let d = 0; d < Math.min(rt.maxNestedFields, i.length); d++) {
    let c = i[d], m = `${Pt(n[c])}`;
    r.push(`<b class="font-medium">${c}</b>: ${Rl(Is(Fs(m), rt.maxNestedFieldLength))}`);
  }
  return i.length > 2 && r.push("..."), it("span", "{ " + r.join(", ") + " }", Object.assign({ title: Rl(Ia(e)) }, l));
}
function Nv() {
  return {
    Formats: Ue,
    setDefaultFormats: La,
    setFormatters: Va,
    formatValue: Gt,
    formatter: Vl,
    dateInputFormat: xl,
    currency: xs,
    bytes: ks,
    link: $s,
    linkTel: Cs,
    linkMailTo: _s,
    icon: Ls,
    iconRounded: Vs,
    attachment: Ss,
    hidden: Ms,
    time: As,
    relativeTime: pn,
    relativeTimeFromDate: Aa,
    relativeTimeFromMs: Ll,
    formatDate: Bt,
    formatNumber: gn,
    indentJson: yn,
    prettyJson: Fa,
    scrub: Pt,
    truncate: Is,
    apiValueFmt: Ts,
    iconOnError: $l
  };
}
const Pa = ["onClick", "title"], Oa = /* @__PURE__ */ ae({
  __name: "RouterLink",
  props: {
    to: null
  },
  setup(e) {
    const t = e, { config: l } = Ct(), n = () => l.value.navigate(t.to ?? "/");
    return (i, r) => (a(), u("a", Le({
      onClick: qe(n, ["prevent"]),
      title: e.to,
      href: "javascript:void(0)"
    }, i.$attrs), [
      X(i.$slots, "default")
    ], 16, Pa));
  }
}), qt = class {
  static component(t) {
    const l = qt.components[t];
    if (l)
      return l;
    const n = Bn(t), i = Object.keys(qt.components).find((r) => Bn(r) === n);
    return i && qt.components[i] || null;
  }
};
let ne = qt;
$e(ne, "config", {
  redirectSignIn: "/signin",
  redirectSignOut: "/auth/logout",
  navigate: (t) => location.href = t,
  assetsPathResolver: (t) => t,
  fallbackPathResolver: (t) => t,
  storage: new Yn(),
  tableIcon: { svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><g fill='none' stroke='currentColor' stroke-width='1.5'><path d='M5 12v6s0 3 7 3s7-3 7-3v-6'/><path d='M5 6v6s0 3 7 3s7-3 7-3V6'/><path d='M12 3c7 0 7 3 7 3s0 3-7 3s-7-3-7-3s0-3 7-3Z'/></g></svg>" },
  scopeWhitelist: {
    enumFlagsConverter: ys,
    ...Sa()
  }
}), $e(ne, "autoQueryGridDefaults", {
  deny: [],
  hide: [],
  toolbarButtonClass: void 0,
  tableStyle: "stripedRows",
  take: 25,
  maxFieldLength: 150
}), $e(ne, "events", mo()), $e(ne, "user", I(null)), $e(ne, "metadata", I(null)), $e(ne, "components", {
  RouterLink: Oa
});
function ja(e) {
  ne.config = Object.assign(ne.config, e);
}
function Ba(e) {
  ne.autoQueryGridDefaults = Object.assign(ne.autoQueryGridDefaults, e);
}
function bn(e) {
  return e && ne.config.assetsPathResolver ? ne.config.assetsPathResolver(e) : e;
}
function Ra(e) {
  return e && ne.config.fallbackPathResolver ? ne.config.fallbackPathResolver(e) : e;
}
function Ct() {
  const e = f(() => ne.config), t = f(() => ne.autoQueryGridDefaults), l = ne.events;
  return {
    config: e,
    setConfig: ja,
    events: l,
    autoQueryGridDefaults: t,
    setAutoQueryGridDefaults: Ba,
    assetsPathResolver: bn,
    fallbackPathResolver: Ra
  };
}
const Ps = ae({
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
        const { typeOf: r } = ot(), d = r(e.type);
        d || console.warn(`Type ${e.type} does not exist`), d != null && d.icon ? l = d == null ? void 0 : d.icon : console.warn(`Type ${e.type} does not have a [Svg] icon`);
      }
      let n = e.svg || (l == null ? void 0 : l.svg) || "";
      if (n.startsWith("<svg ")) {
        let d = bl(n, ">").indexOf("class="), c = `${(l == null ? void 0 : l.cls) || ""} ${t.class || ""}`;
        if (d == -1)
          n = `<svg class="${c}" ${n.substring(4)}`;
        else {
          const m = d + 6 + 1;
          n = `${n.substring(0, m) + c} ${n.substring(m)}`;
        }
        return ht("span", { innerHTML: n });
      } else
        return ht("img", {
          class: [l == null ? void 0 : l.cls, t.class],
          src: bn(e.src || (l == null ? void 0 : l.uri)),
          onError: (r) => $l(r.target)
        });
    };
  }
}), Ha = { class: "text-2xl font-semibold text-gray-900 dark:text-gray-300" }, Ea = { class: "flex" }, za = /* @__PURE__ */ s("path", {
  d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
  fill: "currentColor"
}, null, -1), Na = /* @__PURE__ */ s("path", {
  d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
  fill: "currentFill"
}, null, -1), Ua = [
  za,
  Na
], qa = /* @__PURE__ */ ae({
  __name: "Loading",
  props: {
    imageClass: { default: "w-6 h-6" }
  },
  setup(e) {
    return (t, l) => (a(), u("div", Ha, [
      s("div", Ea, [
        (a(), u("svg", {
          class: x(["self-center inline mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300", e.imageClass]),
          role: "status",
          viewBox: "0 0 100 101",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, Ua, 2)),
        s("span", null, [
          X(t.$slots, "default")
        ])
      ])
    ]));
  }
}), Qa = ["href", "onClick"], Ka = ["type"], Za = /* @__PURE__ */ ae({
  __name: "OutlineButton",
  props: {
    type: { default: "submit" },
    href: null
  },
  setup(e) {
    const t = "inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-200 disabled:text-gray-400 bg-white dark:bg-black hover:bg-gray-50 hover:dark:bg-gray-900 disabled:hover:bg-white dark:disabled:hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:ring-offset-black";
    return (l, n) => {
      const i = W("router-link");
      return e.href ? (a(), le(i, {
        key: 0,
        to: e.href
      }, {
        default: xe(({ navigate: r }) => [
          s("button", {
            class: x(t),
            href: e.href,
            onClick: r
          }, [
            X(l.$slots, "default")
          ], 8, Qa)
        ]),
        _: 3
      }, 8, ["to"])) : (a(), u("button", Le({
        key: 1,
        type: e.type,
        class: t
      }, l.$attrs), [
        X(l.$slots, "default")
      ], 16, Ka));
    };
  }
}), Wa = ["href", "onClick"], Ga = ["type"], Ja = /* @__PURE__ */ ae({
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
      const d = W("router-link");
      return e.href ? (a(), le(d, {
        key: 0,
        to: e.href
      }, {
        default: xe(({ navigate: c }) => [
          s("button", {
            class: x(o(n)),
            href: e.href,
            onClick: c
          }, [
            X(i.$slots, "default")
          ], 10, Wa)
        ]),
        _: 3
      }, 8, ["to"])) : (a(), u("button", Le({
        key: 1,
        type: e.type,
        class: o(n)
      }, i.$attrs), [
        X(i.$slots, "default")
      ], 16, Ga));
    };
  }
}), Xa = ["type", "href", "onClick"], Ya = ["type"], ei = /* @__PURE__ */ ae({
  __name: "SecondaryButton",
  props: {
    type: null,
    href: null
  },
  setup(e) {
    const t = "inline-flex justify-center rounded-md border border-gray-300 py-2 px-4 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-400 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700 focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:ring-offset-black";
    return (l, n) => {
      const i = W("router-link");
      return e.href ? (a(), le(i, {
        key: 0,
        to: e.href
      }, {
        default: xe(({ navigate: r }) => [
          s("button", {
            type: e.type ?? "button",
            class: x(t),
            href: e.href,
            onClick: r
          }, [
            X(l.$slots, "default")
          ], 8, Xa)
        ]),
        _: 3
      }, 8, ["to"])) : (a(), u("button", Le({
        key: 1,
        type: e.type ?? "button",
        class: t
      }, l.$attrs), [
        X(l.$slots, "default")
      ], 16, Ya));
    };
  }
});
function Qe(e, t) {
  return Array.isArray(e) ? e.indexOf(t) >= 0 : e == t || e.includes(t);
}
const pl = {
  blue: "text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200",
  purple: "text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-200",
  red: "text-red-700 dark:text-red-400 hover:text-red-900 dark:hover:text-red-200",
  green: "text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-200",
  sky: "text-sky-600 dark:text-sky-400 hover:text-sky-800 dark:hover:text-sky-200",
  cyan: "text-cyan-600 dark:text-cyan-400 hover:text-cyan-800 dark:hover:text-cyan-200",
  indigo: "text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-200"
}, tt = {
  base: "block w-full sm:text-sm rounded-md dark:text-white dark:bg-gray-900 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none",
  invalid: "pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500",
  valid: "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 dark:border-gray-600"
}, bt = {
  panelClass: "shadow sm:rounded-md",
  formClass: "space-y-6 bg-white dark:bg-black py-6 px-4 sm:p-6",
  headingClass: "text-lg font-medium leading-6 text-gray-900 dark:text-gray-100",
  subHeadingClass: "mt-1 text-sm text-gray-500 dark:text-gray-400"
}, Nt = {
  panelClass: "pointer-events-auto w-screen xl:max-w-3xl md:max-w-xl max-w-lg",
  formClass: "flex h-full flex-col divide-y divide-gray-200 dark:divide-gray-700 shadow-xl bg-white dark:bg-black",
  titlebarClass: "bg-gray-50 dark:bg-gray-900 px-4 py-6 sm:px-6",
  headingClass: "text-lg font-medium text-gray-900 dark:text-gray-100",
  subHeadingClass: "mt-1 text-sm text-gray-500 dark:text-gray-400",
  closeButtonClass: "rounded-md bg-gray-50 dark:bg-gray-900 text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:ring-offset-black"
}, Wl = {
  modalClass: "relative transform overflow-hidden rounded-lg bg-white dark:bg-black text-left shadow-xl transition-all sm:my-8",
  sizeClass: "sm:max-w-prose lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl sm:w-full"
}, Ze = {
  panelClass(e = "slideOver") {
    return e == "card" ? bt.panelClass : Nt.panelClass;
  },
  formClass(e = "slideOver") {
    return e == "card" ? bt.formClass : Nt.formClass;
  },
  headingClass(e = "slideOver") {
    return e == "card" ? bt.headingClass : Nt.headingClass;
  },
  subHeadingClass(e = "slideOver") {
    return e == "card" ? bt.subHeadingClass : Nt.subHeadingClass;
  },
  buttonsClass: "mt-4 px-4 py-3 bg-gray-50 dark:bg-gray-900 sm:px-6 flex flex-wrap justify-between",
  legendClass: "text-base font-medium text-gray-900 dark:text-gray-100 text-center mb-4"
}, me = {
  getGridClass(e = "stripedRows") {
    return me.gridClass;
  },
  getGrid2Class(e = "stripedRows") {
    return Qe(e, "fullWidth") ? "overflow-x-auto" : me.grid2Class;
  },
  getGrid3Class(e = "stripedRows") {
    return Qe(e, "fullWidth") ? "inline-block min-w-full py-2 align-middle" : me.grid3Class;
  },
  getGrid4Class(e = "stripedRows") {
    return Qe(e, "whiteBackground") ? "" : Qe(e, "fullWidth") ? "overflow-hidden shadow-sm ring-1 ring-black ring-opacity-5" : me.grid4Class;
  },
  getTableClass(e = "stripedRows") {
    return Qe(e, "fullWidth") || Qe(e, "verticalLines") ? "min-w-full divide-y divide-gray-300" : me.tableClass;
  },
  getTheadClass(e = "stripedRows") {
    return Qe(e, "whiteBackground") ? "" : me.theadClass;
  },
  getTheadRowClass(e = "stripedRows") {
    return me.theadRowClass + (Qe(e, "verticalLines") ? " divide-x divide-gray-200 dark:divide-gray-700" : "");
  },
  getTheadCellClass(e = "stripedRows") {
    return me.theadCellClass + (Qe(e, "uppercaseHeadings") ? " uppercase" : "");
  },
  getTbodyClass(e = "stripedRows") {
    return (Qe(e, "whiteBackground") || Qe(e, "verticalLines") ? "divide-y divide-gray-200 dark:divide-gray-800" : me.tableClass) + (Qe(e, "verticalLines") ? " bg-white" : "");
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
}, ti = {
  colspans: "col-span-3 sm:col-span-3"
}, Uv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  a: pl,
  card: bt,
  dummy: ti,
  form: Ze,
  grid: me,
  input: tt,
  modal: Wl,
  slideOver: Nt
}, Symbol.toStringTag, { value: "Module" })), li = /* @__PURE__ */ ae({
  __name: "TextLink",
  props: {
    color: { default: "blue" }
  },
  setup(e) {
    const t = e, l = Js(), n = f(() => (pl[t.color] || pl.blue) + (l.href ? "" : " cursor-pointer"));
    return (i, r) => (a(), u("a", {
      class: x(o(n))
    }, [
      X(i.$slots, "default")
    ], 2));
  }
}), ni = {
  class: "flex",
  "aria-label": "Breadcrumb"
}, si = {
  role: "list",
  class: "flex items-center space-x-4"
}, oi = ["href", "title"], ai = /* @__PURE__ */ s("svg", {
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
], -1), ii = { class: "sr-only" }, ri = /* @__PURE__ */ ae({
  __name: "Breadcrumbs",
  props: {
    homeHref: { default: "/" },
    homeLabel: { default: "Home" }
  },
  setup(e) {
    return (t, l) => (a(), u("nav", ni, [
      s("ol", si, [
        s("li", null, [
          s("div", null, [
            s("a", {
              href: e.homeHref,
              class: "text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400",
              title: e.homeLabel
            }, [
              ai,
              s("span", ii, A(e.homeLabel), 1)
            ], 8, oi)
          ])
        ]),
        X(t.$slots, "default")
      ])
    ]));
  }
}), ui = { class: "flex items-center" }, di = /* @__PURE__ */ s("svg", {
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
], -1), ci = ["href", "title"], fi = ["title"], mi = /* @__PURE__ */ ae({
  __name: "Breadcrumb",
  props: {
    href: null,
    title: null
  },
  setup(e) {
    return (t, l) => (a(), u("li", null, [
      s("div", ui, [
        di,
        e.href ? (a(), u("a", {
          key: 0,
          href: e.href,
          class: "ml-4 text-lg font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300",
          title: e.title
        }, [
          X(t.$slots, "default")
        ], 8, ci)) : (a(), u("span", {
          key: 1,
          class: "ml-4 text-lg font-medium text-gray-700 dark:text-gray-300",
          title: e.title
        }, [
          X(t.$slots, "default")
        ], 8, fi))
      ])
    ]));
  }
}), vi = {
  key: 0,
  class: "text-base font-semibold text-gray-500 dark:text-gray-400"
}, hi = {
  role: "list",
  class: "mt-4 divide-y divide-gray-200 dark:divide-gray-800 border-t border-b border-gray-200 dark:border-gray-800"
}, gi = /* @__PURE__ */ ae({
  __name: "NavList",
  props: {
    title: null
  },
  setup(e) {
    return (t, l) => (a(), u("div", null, [
      e.title ? (a(), u("h2", vi, A(e.title), 1)) : C("", !0),
      s("ul", hi, [
        X(t.$slots, "default")
      ])
    ]));
  }
}), pi = { class: "relative flex items-start space-x-4 py-6" }, yi = { class: "flex-shrink-0" }, bi = { class: "flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50 dark:bg-indigo-900" }, wi = { class: "min-w-0 flex-1" }, xi = { class: "text-base font-medium text-gray-900 dark:text-gray-100" }, ki = { class: "rounded-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2" }, $i = ["href"], Ci = /* @__PURE__ */ s("span", {
  class: "absolute inset-0",
  "aria-hidden": "true"
}, null, -1), _i = { class: "text-base text-gray-500" }, Li = /* @__PURE__ */ s("div", { class: "flex-shrink-0 self-center" }, [
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
], -1), Vi = /* @__PURE__ */ ae({
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
      const n = W("Icon");
      return a(), u("li", pi, [
        s("div", yi, [
          s("span", bi, [
            ke(n, {
              class: "w-6 h-6 text-indigo-700 dark:text-indigo-300",
              image: e.icon,
              src: e.iconSrc,
              svg: e.iconSvg,
              alt: e.iconAlt
            }, null, 8, ["image", "src", "svg", "alt"])
          ])
        ]),
        s("div", wi, [
          s("h3", xi, [
            s("span", ki, [
              s("a", {
                href: e.href,
                class: "focus:outline-none"
              }, [
                Ci,
                Ce(" " + A(e.title), 1)
              ], 8, $i)
            ])
          ]),
          s("p", _i, [
            X(t.$slots, "default")
          ])
        ]),
        Li
      ]);
    };
  }
});
function Si(e) {
  ne.user.value = e, ne.events.publish("signIn", e);
}
function Mi() {
  ne.user.value = null, ne.events.publish("signOut", null);
}
function Os(e) {
  var t;
  return (((t = ne.user.value) == null ? void 0 : t.roles) || []).indexOf(e) >= 0;
}
function Ai(e) {
  var t;
  return (((t = ne.user.value) == null ? void 0 : t.permissions) || []).indexOf(e) >= 0;
}
function wn() {
  return Os("Admin");
}
function ml(e) {
  if (!e)
    return !1;
  if (!e.requiresAuth)
    return !0;
  const t = ne.user.value;
  if (!t)
    return !1;
  if (wn())
    return !0;
  let [l, n] = [t.roles || [], t.permissions || []], [i, r, d, c] = [
    e.requiredRoles || [],
    e.requiredPermissions || [],
    e.requiresAnyRole || [],
    e.requiresAnyPermission || []
  ];
  return !(!i.every((m) => l.indexOf(m) >= 0) || d.length > 0 && !d.some((m) => l.indexOf(m) >= 0) || !r.every((m) => n.indexOf(m) >= 0) || c.length > 0 && !c.every((m) => n.indexOf(m) >= 0));
}
function Ti(e) {
  if (!e || !e.requiresAuth)
    return null;
  const t = ne.user.value;
  if (!t)
    return `<b>${e.request.name}</b> requires Authentication`;
  if (wn())
    return null;
  let [l, n] = [t.roles || [], t.permissions || []], [i, r, d, c] = [
    e.requiredRoles || [],
    e.requiredPermissions || [],
    e.requiresAnyRole || [],
    e.requiresAnyPermission || []
  ], m = i.filter((g) => l.indexOf(g) < 0);
  if (m.length > 0)
    return `Requires ${m.map((g) => "<b>" + g + "</b>").join(", ")} Role` + (m.length > 1 ? "s" : "");
  let h = r.filter((g) => n.indexOf(g) < 0);
  return h.length > 0 ? `Requires ${h.map((g) => "<b>" + g + "</b>").join(", ")} Permission` + (h.length > 1 ? "s" : "") : d.length > 0 && !d.some((g) => l.indexOf(g) >= 0) ? `Requires any ${d.filter((g) => l.indexOf(g) < 0).map((g) => "<b>" + g + "</b>").join(", ")} Role` + (m.length > 1 ? "s" : "") : c.length > 0 && !c.every((g) => n.indexOf(g) >= 0) ? `Requires any ${c.filter((g) => n.indexOf(g) < 0).map((g) => "<b>" + g + "</b>").join(", ")} Permission` + (h.length > 1 ? "s" : "") : null;
}
function xn() {
  const e = f(() => ne.user.value || null), t = f(() => ne.user.value != null);
  return { signIn: Si, signOut: Mi, user: e, isAuthenticated: t, hasRole: Os, hasPermission: Ai, isAdmin: wn, canAccess: ml, invalidAccessMessage: Ti };
}
const Ii = { key: 0 }, Fi = { class: "md:p-4" }, js = /* @__PURE__ */ ae({
  __name: "EnsureAccess",
  props: {
    invalidAccess: null,
    alertClass: null
  },
  emits: ["done"],
  setup(e) {
    const { isAuthenticated: t } = xn(), { config: l } = Ct(), n = () => {
      let r = location.href.substring(location.origin.length) || "/";
      const d = Qt(l.value.redirectSignIn, { redirect: r });
      l.value.navigate(d);
    }, i = () => {
      let r = location.href.substring(location.origin.length) || "/";
      const d = Qt(l.value.redirectSignOut, { ReturnUrl: r });
      l.value.navigate(d);
    };
    return (r, d) => {
      const c = W("Alert"), m = W("SecondaryButton");
      return e.invalidAccess ? (a(), u("div", Ii, [
        ke(c, {
          class: x(e.alertClass),
          innerHTML: e.invalidAccess
        }, null, 8, ["class", "innerHTML"]),
        s("div", Fi, [
          o(t) ? (a(), le(m, {
            key: 1,
            onClick: i
          }, {
            default: xe(() => [
              Ce("Sign Out")
            ]),
            _: 1
          })) : (a(), le(m, {
            key: 0,
            onClick: n
          }, {
            default: xe(() => [
              Ce("Sign In")
            ]),
            _: 1
          }))
        ])
      ])) : C("", !0);
    };
  }
}), Di = { class: "absolute top-0 right-0 bg-white dark:bg-black border dark:border-gray-800 rounded normal-case text-sm shadow w-80" }, Pi = { class: "p-4" }, Oi = /* @__PURE__ */ s("h3", { class: "text-base font-medium mb-3 dark:text-gray-100" }, "Sort", -1), ji = { class: "flex w-full justify-center" }, Bi = /* @__PURE__ */ s("svg", {
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
], -1), Ri = /* @__PURE__ */ s("span", null, "ASC", -1), Hi = [
  Bi,
  Ri
], Ei = /* @__PURE__ */ yl('<svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g fill="currentColor"><path d="M12.96 7H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V7z"></path><path fill-rule="evenodd" d="M10.082 12.629L9.664 14H8.598l1.789-5.332h1.234L13.402 14h-1.12l-.419-1.371h-1.781zm1.57-.785L11 9.688h-.047l-.652 2.156h1.351z"></path><path d="M4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999l.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z"></path></g></svg><span>DESC</span>', 2), zi = [
  Ei
], Ni = /* @__PURE__ */ s("h3", { class: "text-base font-medium mt-4 mb-2" }, " Filter ", -1), Ui = { key: 0 }, qi = ["id", "value"], Qi = ["for"], Ki = { key: 1 }, Zi = { class: "mb-2" }, Wi = { class: "inline-flex rounded-full items-center py-0.5 pl-2.5 pr-1 text-sm font-medium bg-indigo-100 text-indigo-700" }, Gi = ["onClick"], Ji = /* @__PURE__ */ s("svg", {
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
], -1), Xi = [
  Ji
], Yi = { class: "flex" }, er = /* @__PURE__ */ s("svg", {
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
], -1), tr = [
  er
], lr = { class: "bg-gray-50 dark:bg-gray-900 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse" }, kn = /* @__PURE__ */ ae({
  __name: "FilterColumn",
  props: {
    definitions: null,
    column: null,
    topLeft: null
  },
  emits: ["done", "save"],
  setup(e, { emit: t }) {
    const l = e, n = I(), i = I(""), r = I(""), d = I([]), c = f(() => l.column.meta.isEnum == !0), m = f(() => st(l.column.meta.type)), h = f(() => l.column.meta.isEnum == !0 ? vn(hs(l.column.type)) : []), g = f(() => {
      var F;
      return ((F = y(l.column.type)) == null ? void 0 : F.map((M) => ({ key: M.value, value: M.name }))) || [];
    }), p = I({ filters: [] }), v = f(() => p.value.filters);
    Bl(() => p.value = Object.assign({}, l.column.settings, {
      filters: Array.from(l.column.settings.filters)
    })), Bl(() => {
      var M, B, L, z, K;
      let F = ((L = (B = (M = l.column.settings.filters) == null ? void 0 : M[0]) == null ? void 0 : B.value) == null ? void 0 : L.split(",")) || [];
      if (F.length > 0 && ((z = m.value) != null && z.isEnumInt)) {
        const se = parseInt(F[0]);
        F = ((K = m.value.enumValues) == null ? void 0 : K.filter((G) => (se & parseInt(G)) > 0)) || [];
      }
      d.value = F;
    });
    function y(F) {
      let M = l.definitions;
      return ds(F) || (M = M.filter((B) => B.types !== "string")), M;
    }
    function $(F, M) {
      return y(F).find((B) => B.value === M);
    }
    function P() {
      var M;
      if (!i.value)
        return;
      let F = (M = $(l.column.type, i.value)) == null ? void 0 : M.name;
      F && (p.value.filters.push({ key: i.value, name: F, value: r.value }), i.value = r.value = "");
    }
    function J(F) {
      p.value.filters.splice(F, 1);
    }
    function ee(F) {
      return ws($(l.column.type, F.key), l.column.type, F);
    }
    function S() {
      t("done");
    }
    function H() {
      var F;
      i.value = "%", (F = n.value) == null || F.focus();
    }
    function E() {
      var F;
      if (r.value && P(), c.value) {
        let M = Object.values(d.value).filter((B) => B);
        p.value.filters = M.length > 0 ? (F = m.value) != null && F.isEnumInt ? [{ key: "%HasAny", name: "HasAny", value: M.map((B) => parseInt(B)).reduce((B, L) => B + L, 0).toString() }] : [{ key: "%In", name: "In", value: M.join(",") }] : [];
      }
      t("save", p.value), t("done");
    }
    function Q(F) {
      p.value.sort = F === p.value.sort ? void 0 : F, At(E);
    }
    return (F, M) => {
      var se;
      const B = W("SelectInput"), L = W("TextInput"), z = W("PrimaryButton"), K = W("SecondaryButton");
      return a(), u("div", {
        class: "fixed z-20 inset-0 overflow-y-auto",
        onClick: S,
        onVnodeMounted: H
      }, [
        s("div", {
          class: "absolute",
          style: Gl(`top:${e.topLeft.y}px;left:${e.topLeft.x}px`),
          onClick: M[5] || (M[5] = qe(() => {
          }, ["stop"]))
        }, [
          s("div", Di, [
            s("div", Pi, [
              Oi,
              s("div", ji, [
                s("button", {
                  type: "button",
                  title: "Sort Ascending",
                  onClick: M[0] || (M[0] = (G) => Q("ASC")),
                  class: x(`${p.value.sort === "ASC" ? "bg-indigo-100 border-indigo-500" : "bg-white hover:bg-gray-50 border-gray-300"} mr-1 inline-flex items-center px-2.5 py-1.5 border shadow-sm text-sm font-medium rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`)
                }, Hi, 2),
                s("button", {
                  type: "button",
                  title: "Sort Descending",
                  onClick: M[1] || (M[1] = (G) => Q("DESC")),
                  class: x(`${p.value.sort === "DESC" ? "bg-indigo-100 border-indigo-500" : "bg-white hover:bg-gray-50 border-gray-300"} ml-1 inline-flex items-center px-2.5 py-1.5 border shadow-sm text-sm font-medium rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`)
                }, zi, 2)
              ]),
              Ni,
              o(c) ? (a(), u("div", Ui, [
                (a(!0), u(Se, null, Me(o(h), (G) => (a(), u("div", {
                  key: G.key,
                  class: "flex items-center"
                }, [
                  wt(s("input", {
                    type: "checkbox",
                    id: G.key,
                    value: G.key,
                    "onUpdate:modelValue": M[2] || (M[2] = (V) => d.value = V),
                    class: "h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                  }, null, 8, qi), [
                    [Jl, d.value]
                  ]),
                  s("label", {
                    for: G.key,
                    class: "ml-3"
                  }, A(G.value), 9, Qi)
                ]))), 128))
              ])) : (a(), u("div", Ki, [
                (a(!0), u(Se, null, Me(o(v), (G, V) => (a(), u("div", Zi, [
                  s("span", Wi, [
                    Ce(A(e.column.name) + " " + A(G.name) + " " + A(ee(G)) + " ", 1),
                    s("button", {
                      type: "button",
                      onClick: (R) => J(V),
                      class: "flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500 focus:outline-none focus:bg-indigo-500 focus:text-white"
                    }, Xi, 8, Gi)
                  ])
                ]))), 256)),
                s("div", Yi, [
                  ke(B, {
                    id: "filterRule",
                    class: "w-32 mr-1",
                    modelValue: i.value,
                    "onUpdate:modelValue": M[3] || (M[3] = (G) => i.value = G),
                    entries: o(g),
                    label: "",
                    placeholder: ""
                  }, null, 8, ["modelValue", "entries"]),
                  ((se = $(e.column.type, i.value)) == null ? void 0 : se.valueType) !== "none" ? (a(), le(L, {
                    key: 0,
                    ref_key: "txtFilter",
                    ref: n,
                    id: "filterValue",
                    class: "w-32 mr-1",
                    type: "text",
                    modelValue: r.value,
                    "onUpdate:modelValue": M[4] || (M[4] = (G) => r.value = G),
                    onKeyup: qn(P, ["enter"]),
                    label: "",
                    placeholder: ""
                  }, null, 8, ["modelValue", "onKeyup"])) : C("", !0),
                  s("div", { class: "pt-1" }, [
                    s("button", {
                      type: "button",
                      onClick: P,
                      class: "inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    }, tr)
                  ])
                ])
              ]))
            ]),
            s("div", lr, [
              ke(z, {
                onClick: E,
                color: "red",
                class: "ml-2"
              }, {
                default: xe(() => [
                  Ce(" Save ")
                ]),
                _: 1
              }),
              ke(K, { onClick: S }, {
                default: xe(() => [
                  Ce(" Cancel ")
                ]),
                _: 1
              })
            ])
          ])
        ], 4)
      ], 512);
    };
  }
}), nr = { class: "px-4 sm:px-6 lg:px-8 text-sm" }, sr = { class: "flex flex-wrap" }, or = { class: "group pr-4 sm:pr-6 lg:pr-8" }, ar = { class: "flex justify-between w-full font-medium" }, ir = { class: "w-6 flex justify-end" }, rr = { class: "hidden group-hover:inline" }, ur = ["onClick", "title"], dr = /* @__PURE__ */ s("svg", {
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
], -1), cr = [
  dr
], fr = {
  key: 0,
  class: "pt-2"
}, mr = { class: "ml-2" }, vr = { key: 1 }, hr = { class: "pt-2" }, gr = { class: "inline-flex rounded-full items-center py-0.5 pl-2.5 pr-1 text-sm font-medium bg-indigo-100 text-indigo-700" }, pr = ["onClick"], yr = /* @__PURE__ */ s("svg", {
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
], -1), br = [
  yr
], wr = /* @__PURE__ */ s("span", null, "Clear All", -1), xr = [
  wr
], $n = /* @__PURE__ */ ae({
  __name: "FilterViews",
  props: {
    definitions: null,
    columns: null
  },
  emits: ["done", "change"],
  setup(e, { emit: t }) {
    const l = e, n = f(() => l.columns.filter((p) => p.settings.filters.length > 0));
    function i(p) {
      var v, y;
      return (y = (v = p == null ? void 0 : p[0]) == null ? void 0 : v.value) == null ? void 0 : y.split(",");
    }
    function r(p) {
      let v = l.definitions;
      return ds(p) || (v = v.filter((y) => y.types !== "string")), v;
    }
    function d(p, v) {
      return r(p).find((y) => y.value === v);
    }
    function c(p, v) {
      return ws(d(p.type, v.value), p.type, v);
    }
    function m(p) {
      p.settings.filters = [], t("change", p);
    }
    function h(p, v) {
      p.settings.filters.splice(v, 1), t("change", p);
    }
    function g() {
      l.columns.forEach((p) => {
        p.settings.filters = [], t("change", p);
      }), t("done");
    }
    return (p, v) => (a(), u("div", nr, [
      s("div", sr, [
        (a(!0), u(Se, null, Me(o(n), (y) => (a(), u("fieldset", or, [
          s("legend", ar, [
            s("span", null, A(o(Be)(y.name)), 1),
            s("span", ir, [
              s("span", rr, [
                s("button", {
                  onClick: ($) => m(y),
                  title: `Clear all ${o(Be)(y.name)} filters`,
                  class: "flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-red-600 hover:bg-red-200 hover:text-red-500 focus:outline-none focus:bg-red-500 focus:text-white"
                }, cr, 8, ur)
              ])
            ])
          ]),
          y.meta.isEnum ? (a(), u("div", fr, [
            (a(!0), u(Se, null, Me(i(y.settings.filters), ($) => (a(), u("div", {
              key: $,
              class: "flex items-center"
            }, [
              s("label", mr, A($), 1)
            ]))), 128))
          ])) : (a(), u("div", vr, [
            (a(!0), u(Se, null, Me(y.settings.filters, ($, P) => (a(), u("div", hr, [
              s("span", gr, [
                Ce(A(y.name) + " " + A($.name) + " " + A(c(y, $)) + " ", 1),
                s("button", {
                  type: "button",
                  onClick: (J) => h(y, P),
                  class: "flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500 focus:outline-none focus:bg-indigo-500 focus:text-white"
                }, br, 8, pr)
              ])
            ]))), 256))
          ]))
        ]))), 256))
      ]),
      s("div", { class: "flex justify-center pt-4" }, [
        s("button", {
          type: "button",
          onClick: g,
          class: "inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        }, xr)
      ])
    ]));
  }
}), kr = { class: "bg-white dark:bg-black px-4 pt-5 pb-4 sm:p-6 sm:pb-4" }, $r = { class: "" }, Cr = { class: "mt-3 text-center sm:mt-0 sm:mx-4 sm:text-left" }, _r = /* @__PURE__ */ s("h3", { class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-100" }, "Query Preferences", -1), Lr = { class: "mt-4" }, Vr = ["for"], Sr = ["id"], Mr = ["value", "selected"], Ar = { class: "mt-4 flex items-center py-4 border-b border-gray-200 dark:border-gray-800" }, Tr = ["id", "checked"], Ir = ["for"], Fr = { class: "mt-4" }, Dr = { class: "pb-2 px-4" }, Pr = { class: "" }, Or = ["id", "value"], jr = ["for"], Br = { class: "bg-gray-50 dark:bg-gray-900 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse" }, Cn = /* @__PURE__ */ ae({
  __name: "QueryPrefs",
  props: {
    id: { default: "QueryPrefs" },
    columns: null,
    prefs: null,
    maxLimit: null
  },
  emits: ["done", "save"],
  setup(e, { emit: t }) {
    const l = e, { autoQueryGridDefaults: n } = Ct(), i = I({});
    Bl(() => i.value = Object.assign({
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
    return (m, h) => {
      const g = W("PrimaryButton"), p = W("SecondaryButton"), v = W("ModalDialog");
      return a(), le(v, {
        id: e.id,
        onDone: d,
        "size-class": "w-full sm:max-w-prose"
      }, {
        default: xe(() => [
          s("div", kr, [
            s("div", $r, [
              s("div", Cr, [
                _r,
                s("div", Lr, [
                  s("label", {
                    for: `${e.id}-take`,
                    class: "block text-sm font-medium text-gray-700 dark:text-gray-300"
                  }, "Results per page", 8, Vr),
                  wt(s("select", {
                    id: `${e.id}-take`,
                    "onUpdate:modelValue": h[0] || (h[0] = (y) => i.value.take = y),
                    class: "mt-1 block w-full pl-3 pr-10 py-2 text-base bg-white dark:bg-black border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  }, [
                    (a(!0), u(Se, null, Me(r.filter((y) => l.maxLimit == null || y <= l.maxLimit), (y) => (a(), u("option", {
                      value: y,
                      selected: y === i.value.take
                    }, A(y), 9, Mr))), 256))
                  ], 8, Sr), [
                    [Xs, i.value.take]
                  ])
                ]),
                s("div", Ar, [
                  s("input", {
                    type: "radio",
                    id: `${e.id}-allColumns`,
                    onClick: h[1] || (h[1] = (y) => i.value.selectedColumns = []),
                    checked: i.value.selectedColumns.length === 0,
                    class: "focus:ring-indigo-500 h-4 w-4 bg-white dark:bg-black text-indigo-600 dark:text-indigo-400 border-gray-300 dark:border-gray-700"
                  }, null, 8, Tr),
                  s("label", {
                    class: "ml-3 block text-gray-700 dark:text-gray-300",
                    for: `${e.id}-allColumns`
                  }, "View all columns", 8, Ir)
                ]),
                s("div", Fr, [
                  s("div", Dr, [
                    s("div", Pr, [
                      (a(!0), u(Se, null, Me(e.columns, (y) => (a(), u("div", {
                        key: y.name,
                        class: "flex items-center"
                      }, [
                        wt(s("input", {
                          type: "checkbox",
                          id: y.name,
                          value: y.name,
                          "onUpdate:modelValue": h[2] || (h[2] = ($) => i.value.selectedColumns = $),
                          class: "h-4 w-4 bg-white dark:bg-black border-gray-300 dark:border-gray-700 rounded text-indigo-600 dark:text-indigo-400 focus:ring-indigo-500"
                        }, null, 8, Or), [
                          [Jl, i.value.selectedColumns]
                        ]),
                        s("label", {
                          for: y.name,
                          class: "ml-3"
                        }, A(y.name), 9, jr)
                      ]))), 128))
                    ])
                  ])
                ])
              ])
            ])
          ]),
          s("div", Br, [
            ke(g, {
              onClick: c,
              color: "red",
              class: "ml-2"
            }, {
              default: xe(() => [
                Ce(" Save ")
              ]),
              _: 1
            }),
            ke(p, { onClick: d }, {
              default: xe(() => [
                Ce(" Cancel ")
              ]),
              _: 1
            })
          ])
        ]),
        _: 1
      }, 8, ["id"]);
    };
  }
}), Rr = { key: 0 }, Hr = { key: 1 }, Er = {
  key: 2,
  class: "pt-1"
}, zr = { key: 0 }, Nr = { key: 1 }, Ur = { key: 3 }, qr = { class: "pl-1 pt-1 flex flex-wrap" }, Qr = { class: "flex mt-1" }, Kr = ["title"], Zr = /* @__PURE__ */ s("svg", {
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
], -1), Wr = [
  Zr
], Gr = ["disabled"], Jr = /* @__PURE__ */ s("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ s("path", {
    d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6l6 6zM6 6h2v12H6z",
    fill: "currentColor"
  })
], -1), Xr = [
  Jr
], Yr = ["disabled"], eu = /* @__PURE__ */ s("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ s("path", {
    d: "M15.41 7.41L14 6l-6 6l6 6l1.41-1.41L10.83 12z",
    fill: "currentColor"
  })
], -1), tu = [
  eu
], lu = ["disabled"], nu = /* @__PURE__ */ s("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ s("path", {
    d: "M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z",
    fill: "currentColor"
  })
], -1), su = [
  nu
], ou = ["disabled"], au = /* @__PURE__ */ s("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ s("path", {
    d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6l-6-6zM16 6h2v12h-2z",
    fill: "currentColor"
  })
], -1), iu = [
  au
], ru = {
  key: 0,
  class: "flex mt-1"
}, uu = { class: "px-4 text-lg text-black dark:text-white" }, du = { key: 0 }, cu = { key: 1 }, fu = /* @__PURE__ */ s("span", { class: "hidden xl:inline" }, " Showing Results ", -1), mu = { key: 2 }, vu = { class: "flex flex-wrap" }, hu = {
  key: 0,
  class: "pl-2 mt-1"
}, gu = /* @__PURE__ */ s("svg", {
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
], -1), pu = [
  gu
], yu = {
  key: 1,
  class: "pl-2 mt-1"
}, bu = /* @__PURE__ */ yl('<svg class="w-5 h-5 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M28.781 4.405h-10.13V2.018L2 4.588v22.527l16.651 2.868v-3.538h10.13A1.162 1.162 0 0 0 30 25.349V5.5a1.162 1.162 0 0 0-1.219-1.095zm.16 21.126H18.617l-.017-1.889h2.487v-2.2h-2.506l-.012-1.3h2.518v-2.2H18.55l-.012-1.3h2.549v-2.2H18.53v-1.3h2.557v-2.2H18.53v-1.3h2.557v-2.2H18.53v-2h10.411z" fill="#20744a" fill-rule="evenodd"></path><path fill="#20744a" d="M22.487 7.439h4.323v2.2h-4.323z"></path><path fill="#20744a" d="M22.487 10.94h4.323v2.2h-4.323z"></path><path fill="#20744a" d="M22.487 14.441h4.323v2.2h-4.323z"></path><path fill="#20744a" d="M22.487 17.942h4.323v2.2h-4.323z"></path><path fill="#20744a" d="M22.487 21.443h4.323v2.2h-4.323z"></path><path fill="#fff" fill-rule="evenodd" d="M6.347 10.673l2.146-.123l1.349 3.709l1.594-3.862l2.146-.123l-2.606 5.266l2.606 5.279l-2.269-.153l-1.532-4.024l-1.533 3.871l-2.085-.184l2.422-4.663l-2.238-4.993z"></path></svg><span class="text-green-900 dark:text-green-100">Excel</span>', 2), wu = [
  bu
], xu = {
  key: 2,
  class: "pl-2 mt-1"
}, ku = {
  key: 0,
  class: "w-5 h-5 mr-1 text-green-600 dark:text-green-400",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, $u = /* @__PURE__ */ s("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M5 13l4 4L19 7"
}, null, -1), Cu = [
  $u
], _u = {
  key: 1,
  class: "w-5 h-5 mr-1",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Lu = /* @__PURE__ */ s("g", { fill: "none" }, [
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
], -1), Vu = [
  Lu
], Su = /* @__PURE__ */ s("span", { class: "whitespace-nowrap" }, "Copy URL", -1), Mu = {
  key: 3,
  class: "pl-2 mt-1"
}, Au = /* @__PURE__ */ s("svg", {
  class: "w-5 h-5",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ s("path", {
    fill: "currentColor",
    d: "M6.78 2.72a.75.75 0 0 1 0 1.06L4.56 6h8.69a7.75 7.75 0 1 1-7.75 7.75a.75.75 0 0 1 1.5 0a6.25 6.25 0 1 0 6.25-6.25H4.56l2.22 2.22a.75.75 0 1 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.5a.75.75 0 0 1 1.06 0Z"
  })
], -1), Tu = [
  Au
], Iu = {
  key: 4,
  class: "pl-2 mt-1"
}, Fu = /* @__PURE__ */ s("svg", {
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
], -1), Du = { class: "mr-1" }, Pu = {
  key: 0,
  class: "h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-gray-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, Ou = /* @__PURE__ */ s("path", {
  "fill-rule": "evenodd",
  d: "M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z",
  "clip-rule": "evenodd"
}, null, -1), ju = [
  Ou
], Bu = {
  key: 1,
  class: "h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-gray-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, Ru = /* @__PURE__ */ s("path", {
  "fill-rule": "evenodd",
  d: "M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z",
  "clip-rule": "evenodd"
}, null, -1), Hu = [
  Ru
], Eu = {
  key: 5,
  class: "pl-2 mt-1"
}, zu = ["title"], Nu = /* @__PURE__ */ s("svg", {
  class: "w-5 h-5 mr-1 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ s("path", {
    d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z",
    fill: "currentColor"
  })
], -1), Uu = { class: "whitespace-nowrap" }, qu = { key: 7 }, Qu = {
  key: 0,
  class: "cursor-pointer flex justify-between items-center hover:text-gray-900 dark:hover:text-gray-50"
}, Ku = { class: "mr-1 select-none" }, Zu = {
  key: 1,
  class: "flex justify-between items-center"
}, Wu = { class: "mr-1 select-none" }, Gu = /* @__PURE__ */ ae({
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
    const n = e, { config: i, autoQueryGridDefaults: r } = Ct(), d = r, c = Ne("client"), m = i.value.storage, h = "filtering,queryString,queryFilters".split(","), g = "copyApiUrl,downloadCsv,filtersView,newItem,pagingInfo,pagingNav,preferences,refresh,resetPreferences,toolbar".split(","), p = f(() => n.deny ? St(h, n.deny) : St(h, d.value.deny)), v = f(() => n.hide ? St(g, n.hide) : St(g, d.value.hide));
    function y(_) {
      return p.value[_];
    }
    function $(_) {
      return v.value[_];
    }
    const P = f(() => n.tableStyle ?? d.value.tableStyle), J = f(() => n.gridClass ?? me.getGridClass(P.value)), ee = f(() => n.grid2Class ?? me.getGrid2Class(P.value)), S = f(() => n.grid3Class ?? me.getGrid3Class(P.value)), H = f(() => n.grid4Class ?? me.getGrid4Class(P.value)), E = f(() => n.tableClass ?? me.getTableClass(P.value)), Q = f(() => n.theadClass ?? me.getTheadClass(P.value)), F = f(() => n.theadRowClass ?? me.getTheadRowClass(P.value)), M = f(() => n.theadCellClass ?? me.getTheadCellClass(P.value)), B = f(() => n.toolbarButtonClass ?? me.toolbarButtonClass);
    function L(_, T) {
      var _e;
      if (n.rowClass)
        return n.rowClass(_, T);
      const ue = !!ye.value.AnyUpdate, ve = ((_e = be.value) != null && _e.name ? pe(_, be.value.name) : null) == ie.value;
      return me.getTableRowClass(n.tableStyle, T, ve, ue);
    }
    const z = Xl(), K = f(() => {
      var _;
      return Tl(((_ = ye.value.AnyQuery.viewModel) == null ? void 0 : _.name) || ye.value.AnyQuery.dataModel.name);
    }), se = f(() => {
      const _ = Object.keys(z).map((T) => T.toLowerCase());
      return Ge(K.value).filter((T) => _.includes(T.name.toLowerCase()) || _.includes(T.name.toLowerCase() + "-header")).map((T) => T.name);
    });
    function G() {
      let _ = Vt(n.selectedColumns);
      return _.length > 0 ? _ : se.value.length > 0 ? se.value : [];
    }
    const V = f(() => {
      let T = G().map((te) => te.toLowerCase());
      const ue = Ge(K.value);
      return T.length > 0 ? T.map((te) => ue.find((ve) => ve.name.toLowerCase() === te)).filter((te) => te != null) : ue;
    }), R = f(() => {
      let _ = V.value.map((ue) => ue.name), T = Vt(fe.value.selectedColumns).map((ue) => ue.toLowerCase());
      return T.length > 0 ? _.filter((ue) => T.includes(ue.toLowerCase())) : _;
    }), b = I([]), U = I(new et()), k = I(new et()), w = I(), O = I(!1), ie = I(), N = I(), oe = I(!1), j = I(), ce = I(n.skip), he = I(!1), re = 25, fe = I({ take: re }), Z = I(!1), Y = f(() => b.value.some((_) => _.settings.filters.length > 0 || !!_.settings.sort) || fe.value.selectedColumns), we = f(() => b.value.map((_) => _.settings.filters.length).reduce((_, T) => _ + T, 0)), Ve = f(() => {
      var _;
      return Ge(Tl(_t.value || ((_ = ye.value.AnyQuery) == null ? void 0 : _.dataModel.name)));
    }), be = f(() => {
      var _;
      return el(Tl(_t.value || ((_ = ye.value.AnyQuery) == null ? void 0 : _.dataModel.name)));
    }), Pe = f(() => fe.value.take ?? re), Ie = f(() => U.value.response ? pe(U.value.response, "results") : []), D = f(() => {
      var _;
      return ((_ = U.value.response) == null ? void 0 : _.total) ?? Ie.value.length ?? 0;
    }), q = f(() => ce.value > 0), de = f(() => ce.value > 0), ge = f(() => Ie.value.length >= Pe.value), Ae = f(() => Ie.value.length >= Pe.value), Oe = I(), Ee = I(), Te = {
      NoQuery: "No Query API was found"
    };
    t({ update: Xe, search: Ln, createRequestArgs: Ml, reset: On, createDone: Et, createSave: Fl, editDone: Ht, editSave: al, forceUpdate: _n, setEdit: Hs, edit: N });
    function Re(_) {
      if (_) {
        if (n.canFilter)
          return n.canFilter(_);
        const T = Ve.value.find((ue) => ue.name.toLowerCase() == _.toLowerCase());
        if (T)
          return !cs(T);
      }
      return !1;
    }
    function Ke(_) {
      y("queryString") && tn(_);
    }
    async function Fe(_) {
      ce.value += _, ce.value < 0 && (ce.value = 0);
      const T = Math.floor(D.value / Pe.value) * Pe.value;
      ce.value > T && (ce.value = T), Ke({ skip: ce.value || void 0 }), await Xe();
    }
    async function Je(_, T) {
      var ve, _e;
      if (N.value = null, ie.value = T, !_ || !T)
        return;
      let ue = Zt(ye.value.AnyQuery, { [_]: T });
      const te = await c.api(ue);
      if (te.succeeded) {
        let je = (ve = pe(te.response, "results")) == null ? void 0 : ve[0];
        je || console.warn(`API ${(_e = ye.value.AnyQuery) == null ? void 0 : _e.request.name}(${_}:${T}) returned no results`), N.value = je;
      }
    }
    async function Rt(_, T) {
      var ve;
      l("rowSelected", _, T);
      const ue = (ve = be.value) == null ? void 0 : ve.name, te = ue ? pe(_, ue) : null;
      !ue || !te || (Ke({ edit: te }), Je(ue, te));
    }
    function mt(_, T) {
      var te;
      if (!y("filtering"))
        return;
      let ue = T.target;
      if (Re(_) && (ue == null ? void 0 : ue.tagName) !== "TD") {
        let ve = (te = ue == null ? void 0 : ue.closest("TABLE")) == null ? void 0 : te.getBoundingClientRect(), _e = b.value.find((je) => je.name.toLowerCase() == _.toLowerCase());
        if (_e && ve) {
          let je = 318, at = ve.x + je + 10;
          j.value = {
            column: _e,
            topLeft: {
              x: Math.max(Math.floor(T.clientX + je / 2), at),
              y: ve.y + 45
            }
          };
        }
      }
      l("headerSelected", _, T);
    }
    function ll() {
      j.value = null;
    }
    async function nl(_) {
      var ue;
      let T = (ue = j.value) == null ? void 0 : ue.column;
      T && (T.settings = _, m.setItem(sl(T.name), JSON.stringify(T.settings)), await Xe()), j.value = null;
    }
    async function Bs(_) {
      m.setItem(sl(_.name), JSON.stringify(_.settings)), await Xe();
    }
    async function Rs(_) {
      oe.value = !1, fe.value = _, m.setItem(Al(), JSON.stringify(_)), await Xe();
    }
    function Hs(_) {
      Object.assign(N.value, _), _n();
    }
    function _n() {
      var T, ue, te;
      (T = Oe.value) == null || T.forceUpdate(), (ue = Ee.value) == null || ue.forceUpdate();
      const _ = We();
      (te = _ == null ? void 0 : _.proxy) == null || te.$forceUpdate();
    }
    async function Xe() {
      await Ln(Ml());
    }
    async function Es() {
      await Xe();
    }
    async function Ln(_) {
      const T = ye.value.AnyQuery;
      if (!T) {
        console.error(Te.NoQuery);
        return;
      }
      let ue = Zt(T, _), te = Wn((je) => {
        U.value.response = U.value.error = void 0, Z.value = je;
      }), ve = await c.api(ue);
      te(), At(() => U.value = ve);
      let _e = pe(ve.response, "results") || [];
      !ve.succeeded || _e.label == 0;
    }
    function Ml() {
      let _ = {
        include: "total",
        take: Pe.value
      }, T = Vt(fe.value.selectedColumns || n.selectedColumns);
      if (T.length > 0) {
        let te = be.value;
        te && T.includes(te.name) && (T = [te.name, ...T]);
        const ve = Ve.value, _e = [];
        T.forEach((je) => {
          var il;
          const at = ve.find((De) => De.name.toLowerCase() == je.toLowerCase());
          (il = at == null ? void 0 : at.ref) != null && il.selfId && _e.push(at.ref.selfId), pe(z, je) && _e.push(...ve.filter((De) => {
            var vt, zt;
            return ((zt = (vt = De.ref) == null ? void 0 : vt.selfId) == null ? void 0 : zt.toLowerCase()) == je.toLowerCase();
          }).map((De) => De.name));
        }), _e.forEach((je) => {
          T.includes(je) || T.push(je);
        }), _.fields = T.join(",");
      }
      let ue = [];
      if (b.value.forEach((te) => {
        te.settings.sort && ue.push((te.settings.sort === "DESC" ? "-" : "") + te.name), te.settings.filters.forEach((ve) => {
          let _e = ve.key.replace("%", te.name);
          _[_e] = ve.value;
        });
      }), n.filters && Object.keys(n.filters).forEach((te) => {
        V.value.find((_e) => _e.name.toLowerCase() === te.toLowerCase()) && (_[te] = n.filters[te]);
      }), y("queryString") && y("queryFilters")) {
        const te = location.search ? location.search : location.hash.includes("?") ? "?" + Dl(location.hash, "?") : "";
        let ve = Hl(te);
        if (Object.keys(ve).forEach((_e) => {
          V.value.find((at) => at.name.toLowerCase() === _e.toLowerCase()) && (_[_e] = ve[_e]);
        }), typeof ve.skip < "u") {
          const _e = parseInt(ve.skip);
          isNaN(_e) || (ce.value = _.skip = _e);
        }
      }
      return typeof _.skip > "u" && ce.value > 0 && (_.skip = ce.value), ue.length > 0 && (_.orderBy = ue.join(",")), _;
    }
    function zs() {
      const _ = Vn("csv");
      Nl(_), typeof window < "u" && window.open(_);
    }
    function Ns() {
      const _ = Vn("json");
      Nl(_), he.value = !0, setTimeout(() => he.value = !1, 3e3);
    }
    function Vn(_ = "json") {
      var _e;
      const T = Ml(), ue = `/api/${(_e = ye.value.AnyQuery) == null ? void 0 : _e.request.name}`, te = vo(c.baseUrl, Qt(ue, { ...T, jsconfig: "edv" }));
      return te.indexOf("?") >= 0 ? bl(te, "?") + "." + _ + "?" + Dl(te, "?") : te + ".json";
    }
    async function Us() {
      b.value.forEach((_) => {
        _.settings = { filters: [] }, m.removeItem(sl(_.name));
      }), fe.value = { take: re }, m.removeItem(Al()), await Xe();
    }
    function qs() {
      O.value = !0, Ke({ create: null });
    }
    const _t = f(() => jt(n.type)), dt = f(() => {
      var _;
      return _t.value || ((_ = ye.value.AnyQuery) == null ? void 0 : _.dataModel.name);
    }), Al = () => {
      var _;
      return `${n.id}/ApiPrefs/${_t.value || ((_ = ye.value.AnyQuery) == null ? void 0 : _.dataModel.name)}`;
    }, sl = (_) => {
      var T;
      return `Column/${n.id}:${_t.value || ((T = ye.value.AnyQuery) == null ? void 0 : T.dataModel.name)}.${_}`;
    }, { metadataApi: Sn, typeOf: Tl, apiOf: Mn, filterDefinitions: Qs } = ot(), { invalidAccessMessage: Il } = xn(), An = f(() => n.filterDefinitions || Qs.value), ye = f(() => {
      let _ = Vt(n.apis);
      return _.length > 0 ? Dt.from(_.map((T) => Mn(T)).filter((T) => T != null).map((T) => T)) : Dt.forType(_t.value, Sn.value);
    }), ol = (_) => `<span class="text-yellow-700">${_}</span>`, Tn = f(() => {
      if (!Sn.value)
        return ol(`AppMetadata not loaded, see <a class="${pl.blue}" href="https://docs.servicestack.net/vue/use-metadata" target="_blank">useMetadata()</a>`);
      let T = Vt(n.apis).map((te) => Mn(te) == null ? te : null).filter((te) => te != null);
      if (T.length > 0)
        return ol(`Unknown API${T.length > 1 ? "s" : ""}: ${T.join(", ")}`);
      let ue = ye.value;
      return ue.empty ? ol("Mising DataModel in property 'type' or AutoQuery APIs to use in property 'apis'") : ue.AnyQuery ? null : ol(Te.NoQuery);
    }), In = f(() => ye.value.AnyQuery && Il(ye.value.AnyQuery)), Fn = f(() => ye.value.Create && Il(ye.value.Create)), Dn = f(() => ye.value.AnyUpdate && Il(ye.value.AnyUpdate)), Ks = f(() => ml(ye.value.Create));
    f(() => ml(ye.value.AnyUpdate));
    const Pn = f(() => ml(ye.value.Delete));
    function Ht() {
      N.value = null, ie.value = null, Ke({ edit: void 0 });
    }
    function Et() {
      O.value = !1, Ke({ create: void 0 });
    }
    async function al() {
      await Xe(), Ht();
    }
    async function Fl() {
      await Xe(), Et();
    }
    function On() {
      var ue;
      U.value = new et(), k.value = new et(), O.value = !1, ie.value = null, N.value = null, oe.value = !1, j.value = null, ce.value = n.skip, he.value = !1, fe.value = { take: re }, Z.value = !1;
      const _ = n.prefs || gl(m.getItem(Al()));
      _ && (fe.value = _), b.value = V.value.map((te) => ({
        name: te.name,
        type: te.type,
        meta: te,
        settings: Object.assign(
          {
            filters: []
          },
          gl(m.getItem(sl(te.name)))
        )
      })), isNaN(n.skip) || (ce.value = n.skip);
      let T = (ue = be.value) == null ? void 0 : ue.name;
      if (y("queryString")) {
        const te = location.search ? location.search : location.hash.includes("?") ? "?" + Dl(location.hash, "?") : "";
        let ve = Hl(te);
        typeof ve.create < "u" ? O.value = typeof ve.create < "u" : T && (typeof ve.edit == "string" || typeof ve.edit == "number") && Je(T, ve.edit);
      }
      n.create === !0 && (O.value = !0), T && n.edit != null && Je(T, n.edit);
    }
    return nt(async () => {
      On(), await Xe();
    }), (_, T) => {
      const ue = W("Alert"), te = W("EnsureAccessDialog"), ve = W("AutoCreateForm"), _e = W("AutoEditForm"), je = W("ErrorSummary"), at = W("Loading"), jn = W("SettingsIcons"), il = W("DataGrid");
      return o(Tn) ? (a(), u("div", Rr, [
        ke(ue, { innerHTML: o(Tn) }, null, 8, ["innerHTML"])
      ])) : o(In) ? (a(), u("div", Hr, [
        ke(js, { "invalid-access": o(In) }, null, 8, ["invalid-access"])
      ])) : (a(), u("div", Er, [
        O.value && o(ye).Create ? (a(), u("div", zr, [
          o(Fn) ? (a(), le(te, {
            key: 0,
            title: `Create ${o(dt)}`,
            "invalid-access": o(Fn),
            "alert-class": "text-yellow-700",
            onDone: Et
          }, null, 8, ["title", "invalid-access"])) : o(z).createform ? X(_.$slots, "createform", {
            key: 1,
            type: o(ye).Create.request.name,
            configure: e.configureField,
            done: Et,
            save: Fl
          }) : (a(), le(ve, {
            key: 2,
            ref_key: "createForm",
            ref: Oe,
            type: o(ye).Create.request.name,
            configure: e.configureField,
            onDone: Et,
            onSave: Fl
          }, {
            header: xe(() => [
              X(_.$slots, "formheader", {
                form: "create",
                formInstance: Oe.value,
                apis: o(ye),
                type: o(dt)
              })
            ]),
            footer: xe(() => [
              X(_.$slots, "formfooter", {
                form: "create",
                formInstance: Oe.value,
                apis: o(ye),
                type: o(dt)
              })
            ]),
            _: 3
          }, 8, ["type", "configure"]))
        ])) : N.value && o(ye).AnyUpdate ? (a(), u("div", Nr, [
          o(Dn) ? (a(), le(te, {
            key: 0,
            title: `Update ${o(dt)}`,
            "invalid-access": o(Dn),
            "alert-class": "text-yellow-700",
            onDone: Ht
          }, null, 8, ["title", "invalid-access"])) : o(z).editform ? X(_.$slots, "editform", {
            key: 1,
            model: N.value,
            type: o(ye).AnyUpdate.request.name,
            deleteType: o(Pn) ? o(ye).Delete.request.name : null,
            configure: e.configureField,
            done: Ht,
            save: al
          }) : (a(), le(_e, {
            key: 2,
            ref_key: "editForm",
            ref: Ee,
            modelValue: N.value,
            "onUpdate:modelValue": T[0] || (T[0] = (De) => N.value = De),
            type: o(ye).AnyUpdate.request.name,
            deleteType: o(Pn) ? o(ye).Delete.request.name : null,
            configure: e.configureField,
            onDone: Ht,
            onSave: al,
            onDelete: al
          }, {
            header: xe(() => [
              X(_.$slots, "formheader", {
                form: "edit",
                formInstance: Ee.value,
                apis: o(ye),
                type: o(dt),
                model: N.value,
                id: ie.value
              })
            ]),
            footer: xe(() => [
              X(_.$slots, "formfooter", {
                form: "edit",
                formInstance: Ee.value,
                apis: o(ye),
                type: o(dt),
                model: N.value,
                id: ie.value
              })
            ]),
            _: 3
          }, 8, ["modelValue", "type", "deleteType", "configure"]))
        ])) : C("", !0),
        o(z).toolbar ? X(_.$slots, "toolbar", { key: 2 }) : $("toolbar") ? (a(), u("div", Ur, [
          oe.value ? (a(), le(Cn, {
            key: 0,
            columns: o(V),
            prefs: fe.value,
            onDone: T[1] || (T[1] = (De) => oe.value = !1),
            onSave: Rs
          }, null, 8, ["columns", "prefs"])) : C("", !0),
          s("div", qr, [
            s("div", Qr, [
              $("preferences") ? (a(), u("button", {
                key: 0,
                type: "button",
                class: "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400",
                title: `${o(dt)} Preferences`,
                onClick: T[2] || (T[2] = (De) => oe.value = !oe.value)
              }, Wr, 8, Kr)) : C("", !0),
              $("pagingNav") ? (a(), u("button", {
                key: 1,
                type: "button",
                class: x(["pl-2", o(q) ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                title: "First page",
                disabled: !o(q),
                onClick: T[3] || (T[3] = (De) => Fe(-o(D)))
              }, Xr, 10, Gr)) : C("", !0),
              $("pagingNav") ? (a(), u("button", {
                key: 2,
                type: "button",
                class: x(["pl-2", o(de) ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                title: "Previous page",
                disabled: !o(de),
                onClick: T[4] || (T[4] = (De) => Fe(-o(Pe)))
              }, tu, 10, Yr)) : C("", !0),
              $("pagingNav") ? (a(), u("button", {
                key: 3,
                type: "button",
                class: x(["pl-2", o(ge) ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                title: "Next page",
                disabled: !o(ge),
                onClick: T[5] || (T[5] = (De) => Fe(o(Pe)))
              }, su, 10, lu)) : C("", !0),
              $("pagingNav") ? (a(), u("button", {
                key: 4,
                type: "button",
                class: x(["pl-2", o(Ae) ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                title: "Last page",
                disabled: !o(Ae),
                onClick: T[6] || (T[6] = (De) => Fe(o(D)))
              }, iu, 10, ou)) : C("", !0)
            ]),
            $("pagingInfo") ? (a(), u("div", ru, [
              s("div", uu, [
                Z.value ? (a(), u("span", du, "Querying...")) : C("", !0),
                o(Ie).length ? (a(), u("span", cu, [
                  fu,
                  Ce(" " + A(ce.value + 1) + " - " + A(Math.min(ce.value + o(Ie).length, o(D))) + " ", 1),
                  s("span", null, " of " + A(o(D)), 1)
                ])) : U.value.completed ? (a(), u("span", mu, "No Results")) : C("", !0)
              ])
            ])) : C("", !0),
            s("div", vu, [
              $("refresh") ? (a(), u("div", hu, [
                s("button", {
                  type: "button",
                  onClick: Es,
                  title: "Refresh",
                  class: x(o(B))
                }, pu, 2)
              ])) : C("", !0),
              $("downloadCsv") ? (a(), u("div", yu, [
                s("button", {
                  type: "button",
                  onClick: zs,
                  title: "Download CSV",
                  class: x(o(B))
                }, wu, 2)
              ])) : C("", !0),
              $("copyApiUrl") ? (a(), u("div", xu, [
                s("button", {
                  type: "button",
                  onClick: Ns,
                  title: "Copy API URL",
                  class: x(o(B))
                }, [
                  he.value ? (a(), u("svg", ku, Cu)) : (a(), u("svg", _u, Vu)),
                  Su
                ], 2)
              ])) : C("", !0),
              o(Y) && $("resetPreferences") ? (a(), u("div", Mu, [
                s("button", {
                  type: "button",
                  onClick: Us,
                  title: "Reset Preferences & Filters",
                  class: x(o(B))
                }, Tu, 2)
              ])) : C("", !0),
              $("filtersView") && o(we) > 0 ? (a(), u("div", Iu, [
                s("button", {
                  type: "button",
                  onClick: T[7] || (T[7] = (De) => w.value = w.value == "filters" ? null : "filters"),
                  class: x(o(B)),
                  "aria-expanded": "false"
                }, [
                  Fu,
                  s("span", Du, A(o(we)) + " " + A(o(we) == 1 ? "Filter" : "Filters"), 1),
                  w.value != "filters" ? (a(), u("svg", Pu, ju)) : (a(), u("svg", Bu, Hu))
                ], 2)
              ])) : C("", !0),
              $("newItem") && o(ye).Create && o(Ks) ? (a(), u("div", Eu, [
                s("button", {
                  type: "button",
                  onClick: qs,
                  title: o(dt),
                  class: x(o(B))
                }, [
                  Nu,
                  s("span", Uu, "New " + A(o(dt)), 1)
                ], 10, zu)
              ])) : C("", !0),
              o(z).toolbarbuttons ? X(_.$slots, "toolbarbuttons", {
                key: 6,
                toolbarButtonClass: o(B)
              }) : C("", !0)
            ])
          ])
        ])) : C("", !0),
        w.value == "filters" ? (a(), le($n, {
          key: 4,
          class: "border-y border-gray-200 dark:border-gray-800 py-8 my-2",
          definitions: o(An),
          columns: b.value,
          onDone: T[8] || (T[8] = (De) => w.value = null),
          onChange: Bs
        }, null, 8, ["definitions", "columns"])) : C("", !0),
        k.value.error ?? U.value.error ? (a(), le(je, {
          key: 5,
          status: k.value.error ?? U.value.error
        }, null, 8, ["status"])) : Z.value ? (a(), le(at, {
          key: 6,
          class: "p-2"
        })) : C("", !0),
        j.value ? (a(), u("div", qu, [
          ke(kn, {
            definitions: o(An),
            column: j.value.column,
            "top-left": j.value.topLeft,
            onDone: ll,
            onSave: nl
          }, null, 8, ["definitions", "column", "top-left"])
        ])) : C("", !0),
        o(Ie).length ? (a(), le(il, {
          key: 8,
          id: e.id,
          items: o(Ie),
          type: e.type,
          "selected-columns": o(R),
          class: "mt-1",
          onFiltersChanged: Xe,
          tableStyle: o(P),
          gridClass: o(J),
          grid2Class: o(ee),
          grid3Class: o(S),
          grid4Class: o(H),
          tableClass: o(E),
          theadClass: o(Q),
          theadRowClass: o(F),
          theadCellClass: o(M),
          tbodyClass: e.tbodyClass,
          rowClass: L,
          onRowSelected: Rt,
          rowStyle: e.rowStyle,
          headerTitle: e.headerTitle,
          headerTitles: e.headerTitles,
          visibleFrom: e.visibleFrom,
          onHeaderSelected: mt
        }, Yl({
          header: xe(({ column: De, label: vt }) => {
            var zt;
            return [
              y("filtering") && Re(De) ? (a(), u("div", Qu, [
                s("span", Ku, A(vt), 1),
                ke(jn, {
                  column: b.value.find((Zs) => Zs.name.toLowerCase() === De.toLowerCase()),
                  "is-open": ((zt = j.value) == null ? void 0 : zt.column.name) === De
                }, null, 8, ["column", "is-open"])
              ])) : (a(), u("div", Zu, [
                s("span", Wu, A(vt), 1)
              ]))
            ];
          }),
          _: 2
        }, [
          Me(Object.keys(o(z)), (De) => ({
            name: De,
            fn: xe((vt) => [
              X(_.$slots, De, Tt(vl(vt)))
            ])
          }))
        ]), 1032, ["id", "items", "type", "selected-columns", "tableStyle", "gridClass", "grid2Class", "grid3Class", "grid4Class", "tableClass", "theadClass", "theadRowClass", "theadCellClass", "tbodyClass", "rowStyle", "headerTitle", "headerTitles", "visibleFrom"])) : C("", !0)
      ]));
    };
  }
}), Ju = { class: "flex" }, Xu = {
  key: 0,
  class: "w-4 h-4",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Yu = /* @__PURE__ */ s("g", { fill: "none" }, [
  /* @__PURE__ */ s("path", {
    d: "M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2.586a1 1 0 0 1-.293.707l-6.414 6.414a1 1 0 0 0-.293.707V17l-4 4v-6.586a1 1 0 0 0-.293-.707L3.293 7.293A1 1 0 0 1 3 6.586V4z",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  })
], -1), ed = [
  Yu
], td = /* @__PURE__ */ s("path", {
  d: "M505.5 658.7c3.2 4.4 9.7 4.4 12.9 0l178-246c3.8-5.3 0-12.7-6.5-12.7H643c-10.2 0-19.9 4.9-25.9 13.2L512 558.6L406.8 413.2c-6-8.3-15.6-13.2-25.9-13.2H334c-6.5 0-10.3 7.4-6.5 12.7l178 246z",
  fill: "currentColor"
}, null, -1), ld = /* @__PURE__ */ s("path", {
  d: "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z",
  fill: "currentColor"
}, null, -1), nd = [
  td,
  ld
], sd = {
  key: 2,
  class: "w-4 h-4",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, od = /* @__PURE__ */ s("g", { fill: "none" }, [
  /* @__PURE__ */ s("path", {
    d: "M8.998 4.71L6.354 7.354a.5.5 0 1 1-.708-.707L9.115 3.18A.499.499 0 0 1 9.498 3H9.5a.5.5 0 0 1 .354.147l.01.01l3.49 3.49a.5.5 0 1 1-.707.707l-2.65-2.649V16.5a.5.5 0 0 1-1 0V4.71z",
    fill: "currentColor"
  })
], -1), ad = [
  od
], id = {
  key: 3,
  class: "w-4 h-4",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, rd = /* @__PURE__ */ s("g", { fill: "none" }, [
  /* @__PURE__ */ s("path", {
    d: "M10.002 15.29l2.645-2.644a.5.5 0 0 1 .707.707L9.886 16.82a.5.5 0 0 1-.384.179h-.001a.5.5 0 0 1-.354-.147l-.01-.01l-3.49-3.49a.5.5 0 1 1 .707-.707l2.648 2.649V3.5a.5.5 0 0 1 1 0v11.79z",
    fill: "currentColor"
  })
], -1), ud = [
  rd
], dd = /* @__PURE__ */ ae({
  __name: "SettingsIcons",
  props: {
    column: null,
    isOpen: { type: Boolean }
  },
  setup(e) {
    return (t, l) => {
      var n, i, r, d, c, m, h;
      return a(), u("div", Ju, [
        (r = (i = (n = e.column) == null ? void 0 : n.settings) == null ? void 0 : i.filters) != null && r.length ? (a(), u("svg", Xu, ed)) : (a(), u("svg", {
          key: 1,
          class: x(["w-4 h-4 transition-transform", e.isOpen ? "rotate-180" : ""]),
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 1024 1024"
        }, nd, 2)),
        ((c = (d = e.column) == null ? void 0 : d.settings) == null ? void 0 : c.sort) === "ASC" ? (a(), u("svg", sd, ad)) : ((h = (m = e.column) == null ? void 0 : m.settings) == null ? void 0 : h.sort) === "DESC" ? (a(), u("svg", id, ud)) : C("", !0)
      ]);
    };
  }
}), cd = /* @__PURE__ */ ae({
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
      const n = W("EnsureAccess"), i = W("SlideOver");
      return e.invalidAccess ? (a(), le(i, {
        key: 0,
        title: e.title,
        onDone: l[0] || (l[0] = (r) => t.$emit("done")),
        "content-class": "relative flex-1"
      }, Yl({
        default: xe(() => [
          ke(n, {
            alertClass: e.alertClass,
            invalidAccess: e.invalidAccess
          }, null, 8, ["alertClass", "invalidAccess"])
        ]),
        _: 2
      }, [
        e.subtitle ? {
          name: "subtitle",
          fn: xe(() => [
            Ce(A(e.subtitle), 1)
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["title"])) : C("", !0);
    };
  }
}), fd = ["for"], md = { class: "mt-1 relative rounded-md shadow-sm" }, vd = ["type", "name", "id", "placeholder", "value", "aria-invalid", "aria-describedby"], hd = {
  key: 0,
  class: "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
}, gd = /* @__PURE__ */ s("svg", {
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
], -1), pd = [
  gd
], yd = ["id"], bd = ["id"], wd = {
  inheritAttrs: !1
}, xd = /* @__PURE__ */ ae({
  ...wd,
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
    const l = e, n = (v) => v.value;
    t({
      focus: r
    });
    const i = I();
    function r() {
      var v;
      (v = i.value) == null || v.focus();
    }
    const d = f(() => l.type || "text"), c = f(() => l.label ?? Be(lt(l.id))), m = f(() => l.placeholder ?? c.value);
    let h = Ne("ApiState", void 0);
    const g = f(() => ft.call({ responseStatus: l.status ?? (h == null ? void 0 : h.error.value) }, l.id)), p = f(() => [tt.base, g.value ? tt.invalid : tt.valid, l.inputClass]);
    return (v, y) => (a(), u("div", {
      class: x([v.$attrs.class])
    }, [
      X(v.$slots, "header", Le({
        inputElement: i.value,
        id: e.id,
        modelValue: e.modelValue,
        status: e.status
      }, v.$attrs)),
      o(c) ? (a(), u("label", {
        key: 0,
        for: e.id,
        class: x(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${e.labelClass ?? ""}`)
      }, A(o(c)), 11, fd)) : C("", !0),
      s("div", md, [
        s("input", Le({
          ref_key: "inputElement",
          ref: i,
          type: o(d),
          name: e.id,
          id: e.id,
          class: o(p),
          placeholder: o(m),
          value: e.modelValue,
          onInput: y[0] || (y[0] = ($) => v.$emit("update:modelValue", n($.target))),
          "aria-invalid": o(g) != null,
          "aria-describedby": `${e.id}-error`,
          step: "any"
        }, o(ut)(v.$attrs, ["class"])), null, 16, vd),
        o(g) ? (a(), u("div", hd, pd)) : C("", !0)
      ]),
      o(g) ? (a(), u("p", {
        key: 1,
        class: "mt-2 text-sm text-red-500",
        id: `${e.id}-error`
      }, A(o(g)), 9, yd)) : e.help ? (a(), u("p", {
        key: 2,
        class: "mt-2 text-sm text-gray-500",
        id: `${e.id}-description`
      }, A(e.help), 9, bd)) : C("", !0),
      X(v.$slots, "footer", Le({
        inputElement: i.value,
        id: e.id,
        modelValue: e.modelValue,
        status: e.status
      }, v.$attrs))
    ], 2));
  }
}), kd = ["for"], $d = { class: "mt-1 relative rounded-md shadow-sm" }, Cd = ["name", "id", "placeholder", "aria-invalid", "aria-describedby"], _d = ["id"], Ld = ["id"], Vd = {
  inheritAttrs: !1
}, Sd = /* @__PURE__ */ ae({
  ...Vd,
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
    const t = e, l = (m) => m.value, n = f(() => t.label ?? Be(lt(t.id))), i = f(() => t.placeholder ?? n.value);
    let r = Ne("ApiState", void 0);
    const d = f(() => ft.call({ responseStatus: t.status ?? (r == null ? void 0 : r.error.value) }, t.id)), c = f(() => ["shadow-sm " + tt.base, d.value ? "text-red-900 focus:ring-red-500 focus:border-red-500 border-red-300" : "text-gray-900 " + tt.valid, t.inputClass]);
    return (m, h) => (a(), u("div", {
      class: x([m.$attrs.class])
    }, [
      o(n) ? (a(), u("label", {
        key: 0,
        for: e.id,
        class: x(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${e.labelClass ?? ""}`)
      }, A(o(n)), 11, kd)) : C("", !0),
      s("div", $d, [
        s("textarea", Le({
          name: e.id,
          id: e.id,
          class: o(c),
          placeholder: o(i),
          onInput: h[0] || (h[0] = (g) => m.$emit("update:modelValue", l(g.target))),
          "aria-invalid": o(d) != null,
          "aria-describedby": `${e.id}-error`
        }, o(ut)(m.$attrs, ["class"])), A(e.modelValue), 17, Cd)
      ]),
      o(d) ? (a(), u("p", {
        key: 1,
        class: "mt-2 text-sm text-red-500",
        id: `${e.id}-error`
      }, A(o(d)), 9, _d)) : e.help ? (a(), u("p", {
        key: 2,
        class: "mt-2 text-sm text-gray-500",
        id: `${e.id}-description`
      }, A(e.help), 9, Ld)) : C("", !0)
    ], 2));
  }
}), Md = ["for"], Ad = ["id", "name", "value", "aria-invalid", "aria-describedby"], Td = ["value"], Id = ["id"], Fd = {
  inheritAttrs: !1
}, Dd = /* @__PURE__ */ ae({
  ...Fd,
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
    const t = e, l = (c) => c.value, n = f(() => t.label ?? Be(lt(t.id)));
    let i = Ne("ApiState", void 0);
    const r = f(() => ft.call({ responseStatus: t.status ?? (i == null ? void 0 : i.error.value) }, t.id)), d = f(() => t.entries || (t.values ? t.values.map((c) => ({ key: c, value: c })) : t.options ? Object.keys(t.options).map((c) => ({ key: c, value: t.options[c] })) : []));
    return (c, m) => (a(), u("div", {
      class: x([c.$attrs.class])
    }, [
      o(n) ? (a(), u("label", {
        key: 0,
        for: e.id,
        class: x(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${e.labelClass ?? ""}`)
      }, A(o(n)), 11, Md)) : C("", !0),
      s("select", Le({
        id: e.id,
        name: e.id,
        class: [
          "mt-1 block w-full pl-3 pr-10 py-2 text-base focus:outline-none sm:text-sm rounded-md dark:text-white dark:bg-gray-900 dark:border-gray-600",
          o(r) ? "border-red-300 text-red-900 focus:ring-red-500 focus:border-red-500" : "border-gray-300 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500",
          e.inputClass
        ],
        value: e.modelValue,
        onInput: m[0] || (m[0] = (h) => c.$emit("update:modelValue", l(h.target))),
        "aria-invalid": o(r) != null,
        "aria-describedby": `${e.id}-error`
      }, o(ut)(c.$attrs, ["class"])), [
        (a(!0), u(Se, null, Me(o(d), (h) => (a(), u("option", {
          value: h.key
        }, A(h.value), 9, Td))), 256))
      ], 16, Ad),
      o(r) ? (a(), u("p", {
        key: 1,
        class: "mt-2 text-sm text-red-500",
        id: `${e.id}-error`
      }, A(o(r)), 9, Id)) : C("", !0)
    ], 2));
  }
}), Pd = { class: "flex items-center h-5" }, Od = ["id", "name", "checked"], jd = { class: "ml-3 text-sm" }, Bd = ["for"], Rd = {
  key: 0,
  class: "mt-2 text-sm text-red-500",
  id: "`${id}-error`"
}, Hd = {
  key: 1,
  class: "mt-2 text-sm text-gray-500",
  id: "`${id}-description`"
}, Ed = {
  inheritAttrs: !1
}, zd = /* @__PURE__ */ ae({
  ...Ed,
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
    const l = e, n = f(() => l.label ?? Be(lt(l.id)));
    let i = Ne("ApiState", void 0);
    const r = f(() => ft.call({ responseStatus: l.status ?? (i == null ? void 0 : i.error.value) }, l.id));
    return (d, c) => (a(), u("div", {
      class: x(["relative flex items-start", d.$attrs.class])
    }, [
      s("div", Pd, [
        s("input", Le({
          id: e.id,
          name: e.id,
          type: "checkbox",
          checked: e.modelValue,
          onInput: c[0] || (c[0] = (m) => d.$emit("update:modelValue", m.target.checked)),
          class: ["focus:ring-indigo-500 h-4 w-4 text-indigo-600 rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800", e.inputClass]
        }, o(ut)(d.$attrs, ["class"])), null, 16, Od)
      ]),
      s("div", jd, [
        s("label", {
          for: e.id,
          class: x(`font-medium text-gray-700 dark:text-gray-300 ${e.labelClass ?? ""}`)
        }, A(o(n)), 11, Bd),
        o(r) ? (a(), u("p", Rd, A(o(r)), 1)) : e.help ? (a(), u("p", Hd, A(e.help), 1)) : C("", !0)
      ])
    ], 2));
  }
}), Nd = ["id"], Ud = ["for"], qd = { class: "mt-1 relative rounded-md shadow-sm" }, Qd = ["id", "name", "value"], Kd = ["onClick"], Zd = { class: "flex flex-wrap pb-1.5" }, Wd = { class: "pt-1.5 pl-1" }, Gd = { class: "inline-flex rounded-full items-center py-0.5 pl-2.5 pr-1 text-sm font-medium bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-300" }, Jd = ["onClick"], Xd = /* @__PURE__ */ s("svg", {
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
], -1), Yd = [
  Xd
], ec = { class: "pt-1.5 pl-1 shrink" }, tc = ["type", "name", "id", "aria-invalid", "aria-describedby", "onPaste"], lc = ["id"], nc = ["onMouseover", "onClick"], sc = { class: "block truncate" }, oc = {
  key: 1,
  class: "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
}, ac = /* @__PURE__ */ s("svg", {
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
], -1), ic = [
  ac
], rc = ["id"], uc = ["id"], dc = {
  inheritAttrs: !1
}, cc = /* @__PURE__ */ ae({
  ...dc,
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
    function n(b) {
      return l.converter ? l.converter(b) : b;
    }
    const i = f(() => ze(n(l.modelValue), (b) => typeof b == "string" ? b.trim().length == 0 ? [] : b.split(",") : b) || []), r = I(), d = I(!1), c = f(() => !l.allowableValues || l.allowableValues.length == 0 ? [] : l.allowableValues.filter((b) => !i.value.includes(b) && b.toLowerCase().includes(g.value.toLowerCase())));
    function m(b) {
      r.value = b;
    }
    const h = I(null), g = I(""), p = f(() => l.type || "text"), v = f(() => l.label ?? Be(lt(l.id)));
    let y = Ne("ApiState", void 0);
    const $ = f(() => ft.call({ responseStatus: l.status ?? (y == null ? void 0 : y.error.value) }, l.id)), P = f(() => [
      "w-full cursor-text flex flex-wrap sm:text-sm rounded-md dark:text-white dark:bg-gray-900 border focus-within:border-transparent focus-within:ring-1 focus-within:outline-none",
      $.value ? "pr-10 border-red-300 text-red-900 placeholder-red-300 focus-within:outline-none focus-within:ring-red-500 focus-within:border-red-500" : "shadow-sm border-gray-300 dark:border-gray-600 focus-within:ring-indigo-500 focus-within:border-indigo-500",
      l.inputClass
    ]), J = (b) => F(i.value.filter((U) => U != b));
    function ee(b) {
      var U;
      document.activeElement === b.target && ((U = h.value) == null || U.focus());
    }
    const S = I();
    function H() {
      d.value = !0, S.value = !0;
    }
    function E() {
      H();
    }
    function Q() {
      G(B()), S.value = !1, setTimeout(() => {
        S.value || (d.value = !1);
      }, 200);
    }
    function F(b) {
      const U = l.string ? b.join(",") : b;
      t("update:modelValue", U);
    }
    function M(b) {
      if (b.key == "Backspace" && g.value.length == 0 && i.value.length > 0 && J(i.value[i.value.length - 1]), !(!l.allowableValues || l.allowableValues.length == 0))
        if (b.code == "Escape" || b.code == "Tab")
          d.value = !1;
        else if (b.code == "Home")
          r.value = c.value[0], K();
        else if (b.code == "End")
          r.value = c.value[c.value.length - 1], K();
        else if (b.code == "ArrowDown") {
          if (d.value = !0, !r.value)
            r.value = c.value[0];
          else {
            const U = c.value.indexOf(r.value);
            r.value = U + 1 < c.value.length ? c.value[U + 1] : c.value[0];
          }
          se();
        } else if (b.code == "ArrowUp") {
          if (!r.value)
            r.value = c.value[c.value.length - 1];
          else {
            const U = c.value.indexOf(r.value);
            r.value = U - 1 >= 0 ? c.value[U - 1] : c.value[c.value.length - 1];
          }
          se();
        } else
          b.code == "Enter" ? r.value && d.value ? (G(r.value), b.preventDefault()) : d.value = !1 : d.value = c.value.length > 0;
    }
    function B() {
      if (g.value.length == 0)
        return "";
      let b = ho(g.value.trim(), ",");
      return b[0] == "," && (b = b.substring(1)), b = b.trim(), b.length == 0 && d.value && c.value.length > 0 ? r.value : b;
    }
    function L(b) {
      const U = B();
      if (U.length > 0) {
        const k = l.delimiters.some((O) => O == b.key);
        if (k && b.preventDefault(), b.key == "Enter" || b.key == "NumpadEnter" || b.key.length == 1 && k) {
          G(U);
          return;
        }
      }
    }
    const z = { behavior: "smooth", block: "nearest", inline: "nearest", scrollMode: "if-needed" };
    function K() {
      setTimeout(() => {
        let b = hl(`#${l.id}-tag li.active`);
        b && b.scrollIntoView(z);
      }, 0);
    }
    function se() {
      setTimeout(() => {
        let b = hl(`#${l.id}-tag li.active`);
        b && ("scrollIntoViewIfNeeded" in b ? b.scrollIntoViewIfNeeded(z) : b.scrollIntoView(z));
      }, 0);
    }
    function G(b) {
      if (b.length === 0)
        return;
      const U = Array.from(i.value);
      U.indexOf(b) == -1 && U.push(b), F(U), g.value = "", d.value = !1;
    }
    function V(b) {
      var k;
      const U = (k = b.clipboardData) == null ? void 0 : k.getData("Text");
      R(U);
    }
    function R(b) {
      if (!b)
        return;
      const U = new RegExp(`\\n|\\t|${l.delimiters.join("|")}`), k = Array.from(i.value);
      b.split(U).map((O) => O.trim()).forEach((O) => {
        k.indexOf(O) == -1 && k.push(O);
      }), F(k), g.value = "";
    }
    return (b, U) => (a(), u("div", {
      class: x([b.$attrs.class]),
      id: `${e.id}-tag`,
      onmousemove: "cancelBlur=true"
    }, [
      o(v) ? (a(), u("label", {
        key: 0,
        for: e.id,
        class: x(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${e.labelClass ?? ""}`)
      }, A(o(v)), 11, Ud)) : C("", !0),
      s("div", qd, [
        s("input", {
          type: "hidden",
          id: e.id,
          name: e.id,
          value: o(i).join(",")
        }, null, 8, Qd),
        s("button", {
          class: x(o(P)),
          onClick: qe(ee, ["prevent"]),
          onFocus: U[2] || (U[2] = (k) => d.value = !0),
          tabindex: "-1"
        }, [
          s("div", Zd, [
            (a(!0), u(Se, null, Me(o(i), (k) => (a(), u("div", Wd, [
              s("span", Gd, [
                Ce(A(k) + " ", 1),
                s("button", {
                  type: "button",
                  onClick: (w) => J(k),
                  class: "flex-shrink-0 ml-1 h-4 w-4 rounded-full inline-flex items-center justify-center text-indigo-400 dark:text-indigo-500 hover:bg-indigo-200 dark:hover:bg-indigo-800 hover:text-indigo-500 dark:hover:text-indigo-400 focus:outline-none focus:bg-indigo-500 focus:text-white dark:focus:text-black"
                }, Yd, 8, Jd)
              ])
            ]))), 256)),
            s("div", ec, [
              wt(s("input", Le({
                ref_key: "txtInput",
                ref: h,
                type: o(p),
                role: "combobox",
                "aria-controls": "options",
                "aria-expanded": "false",
                autocomplete: "off",
                spellcheck: "false",
                name: `${e.id}-txt`,
                id: `${e.id}-txt`,
                class: "p-0 dark:bg-transparent rounded-md border-none focus:!border-none focus:!outline-none",
                style: `box-shadow:none !important;width:${g.value.length + 1}ch`,
                "onUpdate:modelValue": U[0] || (U[0] = (k) => g.value = k),
                "aria-invalid": o($) != null,
                "aria-describedby": `${e.id}-error`,
                onKeydown: M,
                onKeypress: L,
                onPaste: qe(V, ["prevent", "stop"]),
                onFocus: E,
                onBlur: Q,
                onClick: U[1] || (U[1] = (k) => d.value = !0)
              }, o(ut)(b.$attrs, ["class", "required"])), null, 16, tc), [
                [Ys, g.value]
              ])
            ])
          ])
        ], 42, Kd),
        d.value && o(c).length ? (a(), u("ul", {
          key: 0,
          class: "absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-black py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",
          onKeydown: M,
          id: `${e.id}-options`,
          role: "listbox"
        }, [
          (a(!0), u(Se, null, Me(o(c), (k) => (a(), u("li", {
            class: x([k === r.value ? "active bg-indigo-600 text-white" : "text-gray-900 dark:text-gray-100", "relative cursor-default select-none py-2 pl-3 pr-9"]),
            onMouseover: (w) => m(k),
            onClick: (w) => G(k),
            role: "option",
            tabindex: "-1"
          }, [
            s("span", sc, A(k), 1)
          ], 42, nc))), 256))
        ], 40, lc)) : C("", !0),
        o($) ? (a(), u("div", oc, ic)) : C("", !0)
      ]),
      o($) ? (a(), u("p", {
        key: 1,
        class: "mt-2 text-sm text-red-500",
        id: `${e.id}-error`
      }, A(o($)), 9, rc)) : e.help ? (a(), u("p", {
        key: 2,
        class: "mt-2 text-sm text-gray-500",
        id: `${e.id}-description`
      }, A(e.help), 9, uc)) : C("", !0)
    ], 10, Nd));
  }
}), fc = { class: "relative flex-grow mr-2 sm:mr-4" }, mc = ["for"], vc = { class: "block mt-2" }, hc = { class: "sr-only" }, gc = ["multiple", "name", "id", "placeholder", "aria-invalid", "aria-describedby"], pc = {
  key: 0,
  class: "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
}, yc = /* @__PURE__ */ s("svg", {
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
], -1), bc = [
  yc
], wc = ["id"], xc = ["id"], kc = { key: 0 }, $c = ["title"], Cc = ["alt", "src"], _c = {
  key: 1,
  class: "mt-3"
}, Lc = { class: "w-full" }, Vc = { class: "pr-6 align-bottom pb-2" }, Sc = ["title"], Mc = ["src", "onError"], Ac = ["href"], Tc = {
  key: 1,
  class: "overflow-hidden"
}, Ic = { class: "align-top pb-2 whitespace-nowrap" }, Fc = {
  key: 0,
  class: "text-gray-500 dark:text-gray-400 text-sm bg-white dark:bg-black"
}, Dc = /* @__PURE__ */ ae({
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
    var E;
    const t = e, l = I(null), { assetsPathResolver: n, fallbackPathResolver: i } = Ct(), r = {}, d = I(), c = I(((E = t.files) == null ? void 0 : E.map(m)) || []);
    function m(Q) {
      return Q.filePath = n(Q.filePath), Q;
    }
    t.values && t.values.length > 0 && (c.value = t.values.map((Q) => {
      let F = Q.replace(/\\/g, "/");
      return { fileName: go(xt(F, "/"), "."), filePath: F, contentType: ql(F) };
    }).map(m));
    const h = f(() => t.label ?? Be(lt(t.id))), g = f(() => t.placeholder ?? h.value);
    let p = Ne("ApiState", void 0);
    const v = f(() => ft.call({ responseStatus: t.status ?? (p == null ? void 0 : p.error.value) }, t.id)), y = f(() => [
      "block w-full sm:text-sm rounded-md dark:text-white dark:bg-gray-900 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 dark:file:bg-violet-900 file:text-violet-700 dark:file:text-violet-200 hover:file:bg-violet-100 dark:hover:file:bg-violet-800",
      v.value ? "pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500" : "text-slate-500 dark:text-slate-400",
      t.inputClass
    ]), $ = (Q) => {
      let F = Q.target;
      d.value = "", c.value = Array.from(F.files || []).map((M) => ({
        fileName: M.name,
        filePath: an(M),
        contentLength: M.size,
        contentType: M.type || ql(M.name)
      }));
    }, P = () => {
      var Q;
      return (Q = l.value) == null ? void 0 : Q.click();
    }, J = (Q) => Q == null ? !1 : Q.startsWith("data:") || Q.startsWith("blob:"), ee = f(() => {
      if (c.value.length > 0)
        return c.value[0].filePath;
      let Q = typeof t.modelValue == "string" ? t.modelValue : t.values && t.values[0];
      return Q && gt(n(Q)) || null;
    }), S = (Q) => !Q || Q.startsWith("data:") || Q.endsWith(".svg") ? "" : "rounded-full object-cover";
    function H(Q) {
      d.value = i(ee.value);
    }
    return Jt(as), (Q, F) => (a(), u("div", {
      class: x(["flex", e.multiple ? "flex-col" : "justify-between"])
    }, [
      s("div", fc, [
        o(h) ? (a(), u("label", {
          key: 0,
          for: e.id,
          class: x(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${e.labelClass ?? ""}`)
        }, A(o(h)), 11, mc)) : C("", !0),
        s("div", vc, [
          s("span", hc, A(e.help ?? o(h)), 1),
          s("input", Le({
            ref_key: "input",
            ref: l,
            type: "file",
            multiple: e.multiple,
            name: e.id,
            id: e.id,
            class: o(y),
            placeholder: o(g),
            "aria-invalid": o(v) != null,
            "aria-describedby": `${e.id}-error`
          }, Q.$attrs, { onChange: $ }), null, 16, gc),
          o(v) ? (a(), u("div", pc, bc)) : C("", !0)
        ]),
        o(v) ? (a(), u("p", {
          key: 1,
          class: "mt-2 text-sm text-red-500",
          id: `${e.id}-error`
        }, A(o(v)), 9, wc)) : e.help ? (a(), u("p", {
          key: 2,
          class: "mt-2 text-sm text-gray-500",
          id: `${e.id}-description`
        }, A(e.help), 9, xc)) : C("", !0)
      ]),
      e.multiple ? (a(), u("div", _c, [
        s("table", Lc, [
          (a(!0), u(Se, null, Me(c.value, (M) => (a(), u("tr", null, [
            s("td", Vc, [
              s("div", {
                class: "flex w-full",
                title: J(M.filePath) ? "" : M.filePath
              }, [
                s("img", {
                  src: r[o(gt)(M.filePath)] || o(n)(o(gt)(M.filePath)),
                  class: x(["mr-2 h-8 w-8", S(M.filePath)]),
                  onError: (B) => r[o(gt)(M.filePath)] = o(i)(o(gt)(M.filePath))
                }, null, 42, Mc),
                J(M.filePath) ? (a(), u("span", Tc, A(M.fileName), 1)) : (a(), u("a", {
                  key: 0,
                  href: o(n)(M.filePath || ""),
                  target: "_blank",
                  class: "overflow-hidden"
                }, A(M.fileName), 9, Ac))
              ], 8, Sc)
            ]),
            s("td", Ic, [
              M.contentLength && M.contentLength > 0 ? (a(), u("span", Fc, A(o(un)(M.contentLength)), 1)) : C("", !0)
            ])
          ]))), 256))
        ])
      ])) : (a(), u("div", kc, [
        o(ee) ? (a(), u("div", {
          key: 0,
          class: "shrink-0 cursor-pointer",
          title: J(o(ee)) ? "" : o(ee)
        }, [
          s("img", {
            onClick: P,
            class: x(["h-16 w-16", S(o(ee))]),
            alt: `Current ${o(h) ?? ""}`,
            src: d.value || o(n)(o(ee)),
            onError: H
          }, null, 42, Cc)
        ], 8, $c)) : C("", !0)
      ]))
    ], 2));
  }
}), Pc = ["id"], Oc = ["for"], jc = { class: "relative mt-1" }, Bc = ["id", "placeholder"], Rc = /* @__PURE__ */ s("svg", {
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
], -1), Hc = [
  Rc
], Ec = ["id"], zc = ["onMouseover", "onClick"], Nc = /* @__PURE__ */ s("svg", {
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
], -1), Uc = [
  Nc
], qc = {
  key: 2,
  class: "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none",
  tabindex: "-1"
}, Qc = /* @__PURE__ */ s("svg", {
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
], -1), Kc = [
  Qc
], Zc = ["id"], Wc = ["id"], Gc = /* @__PURE__ */ ae({
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
    const n = e, i = I(!1);
    t({ toggle: z });
    function r(V) {
      return Array.isArray(n.modelValue) && n.modelValue.indexOf(V) >= 0;
    }
    const d = f(() => n.label ?? Be(lt(n.id)));
    let c = Ne("ApiState", void 0);
    const m = f(() => ft.call({ responseStatus: n.status ?? (c == null ? void 0 : c.error.value) }, n.id)), h = f(() => [tt.base, m.value ? tt.invalid : tt.valid]), g = I(null), p = I(""), v = I(null), y = I(n.viewCount), $ = I([]), P = f(() => p.value ? n.options.filter((R) => n.match(R, p.value)).slice(0, y.value) : n.options), J = ["Tab", "Escape", "ArrowDown", "ArrowUp", "Enter", "PageUp", "PageDown", "Home", "End"];
    function ee(V) {
      v.value = V, $.value.indexOf(V) > Math.floor(y.value * 0.9) && (y.value += n.viewCount, G());
    }
    const S = [",", `
`, "	"];
    function H(V) {
      var b;
      const R = (b = V.clipboardData) == null ? void 0 : b.getData("Text");
      E(R);
    }
    function E(V) {
      if (!V)
        return;
      const R = S.some((b) => V.includes(b));
      if (!n.multiple || !R) {
        const b = n.options.filter((U) => n.match(U, V));
        b.length == 1 && (se(b[0]), i.value = !1, dl());
      } else if (R) {
        const b = new RegExp("\\r|\\n|\\t|,"), k = V.split(b).filter((w) => w.trim()).map((w) => n.options.find((O) => n.match(O, w))).filter((w) => !!w);
        if (k.length > 0) {
          p.value = "", i.value = !1, v.value = null;
          let w = Array.from(n.modelValue || []);
          k.forEach((O) => {
            r(O) ? w = w.filter((ie) => ie != O) : w.push(O);
          }), l("update:modelValue", w), dl();
        }
      }
    }
    function Q(V) {
      J.indexOf(V.code) || K();
    }
    function F(V) {
      if (!(V.shiftKey || V.ctrlKey || V.altKey)) {
        if (!i.value) {
          V.code == "ArrowDown" && (i.value = !0, v.value = $.value[0]);
          return;
        }
        if (V.code == "Escape")
          i.value && (V.stopPropagation(), i.value = !1);
        else if (V.code == "Tab")
          i.value = !1;
        else if (V.code == "Home")
          v.value = $.value[0], B();
        else if (V.code == "End")
          v.value = $.value[$.value.length - 1], B();
        else if (V.code == "ArrowDown") {
          if (!v.value)
            v.value = $.value[0];
          else {
            const R = $.value.indexOf(v.value);
            v.value = R + 1 < $.value.length ? $.value[R + 1] : $.value[0];
          }
          L();
        } else if (V.code == "ArrowUp") {
          if (!v.value)
            v.value = $.value[$.value.length - 1];
          else {
            const R = $.value.indexOf(v.value);
            v.value = R - 1 >= 0 ? $.value[R - 1] : $.value[$.value.length - 1];
          }
          L();
        } else
          V.code == "Enter" && (v.value ? (se(v.value), n.multiple || (V.preventDefault(), dl())) : i.value = !1);
      }
    }
    const M = { behavior: "smooth", block: "nearest", inline: "nearest", scrollMode: "if-needed" };
    function B() {
      setTimeout(() => {
        let V = hl(`#${n.id}-autocomplete li.active`);
        V && V.scrollIntoView(M);
      }, 0);
    }
    function L() {
      setTimeout(() => {
        let V = hl(`#${n.id}-autocomplete li.active`);
        V && ("scrollIntoViewIfNeeded" in V ? V.scrollIntoViewIfNeeded(M) : V.scrollIntoView(M));
      }, 0);
    }
    function z(V) {
      var R;
      i.value = V, V && (K(), (R = g.value) == null || R.focus());
    }
    function K() {
      i.value = !0, G();
    }
    function se(V) {
      if (p.value = "", i.value = !1, n.multiple) {
        let R = Array.from(n.modelValue || []);
        r(V) ? R = R.filter((b) => b != V) : R.push(V), v.value = null, l("update:modelValue", R);
      } else {
        let R = V;
        n.modelValue == V && (R = null), l("update:modelValue", R);
      }
    }
    function G() {
      $.value = P.value;
    }
    return Ot(p, G), (V, R) => (a(), u("div", {
      id: `${e.id}-autocomplete`
    }, [
      o(d) ? (a(), u("label", {
        key: 0,
        for: `${e.id}-text`,
        class: "block text-sm font-medium text-gray-700 dark:text-gray-300"
      }, A(o(d)), 9, Oc)) : C("", !0),
      s("div", jc, [
        wt(s("input", Le({
          ref_key: "txtInput",
          ref: g,
          id: `${e.id}-text`,
          type: "text",
          role: "combobox",
          "aria-controls": "options",
          "aria-expanded": "false",
          autocomplete: "off",
          spellcheck: "false",
          "onUpdate:modelValue": R[0] || (R[0] = (b) => p.value = b),
          class: o(h),
          placeholder: e.multiple || !e.modelValue ? e.placeholder : "",
          onFocus: K,
          onKeydown: F,
          onKeyup: Q,
          onClick: K,
          onPaste: H,
          required: !1
        }, V.$attrs), null, 16, Bc), [
          [eo, p.value]
        ]),
        s("button", {
          type: "button",
          onClick: R[1] || (R[1] = (b) => z(!i.value)),
          class: "absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none",
          tabindex: "-1"
        }, Hc),
        i.value ? (a(), u("ul", {
          key: 0,
          class: "absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-black py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",
          onKeydown: F,
          id: `${e.id}-options`,
          role: "listbox"
        }, [
          (a(!0), u(Se, null, Me($.value, (b) => (a(), u("li", {
            class: x([b === v.value ? "active bg-indigo-600 text-white" : "text-gray-900 dark:text-gray-100", "relative cursor-default select-none py-2 pl-3 pr-9"]),
            onMouseover: (U) => ee(b),
            onClick: (U) => se(b),
            role: "option",
            tabindex: "-1"
          }, [
            X(V.$slots, "item", Tt(vl(b))),
            r(b) ? (a(), u("span", {
              key: 0,
              class: x(["absolute inset-y-0 right-0 flex items-center pr-4", b === v.value ? "text-white" : "text-indigo-600"])
            }, Uc, 2)) : C("", !0)
          ], 42, zc))), 256))
        ], 40, Ec)) : !e.multiple && e.modelValue ? (a(), u("div", {
          key: 1,
          onKeydown: F,
          onClick: R[2] || (R[2] = (b) => z(!i.value)),
          class: "h-8 -mt-8 ml-3 pt-0.5"
        }, [
          X(V.$slots, "item", Tt(vl(e.modelValue)))
        ], 32)) : C("", !0),
        o(m) ? (a(), u("div", qc, Kc)) : C("", !0)
      ]),
      o(m) ? (a(), u("p", {
        key: 1,
        class: "mt-2 text-sm text-red-500",
        id: `${e.id}-error`
      }, A(o(m)), 9, Zc)) : e.help ? (a(), u("p", {
        key: 2,
        class: "mt-2 text-sm text-gray-500",
        id: `${e.id}-description`
      }, A(e.help), 9, Wc)) : C("", !0)
    ], 8, Pc));
  }
}), Jc = ["id", "name", "value"], Xc = { class: "block truncate" }, Yc = /* @__PURE__ */ ae({
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
      toggle(p) {
        var v;
        (v = d.value) == null || v.toggle(p);
      }
    });
    function i(p) {
      l("update:modelValue", p);
    }
    const r = f(() => n.multiple != null ? n.multiple : Array.isArray(n.modelValue)), d = I();
    function c(p, v) {
      return !v || p.value.toLowerCase().includes(v.toLowerCase());
    }
    const m = f(() => n.entries || (n.values ? n.values.map((p) => ({ key: p, value: p })) : n.options ? Object.keys(n.options).map((p) => ({ key: p, value: n.options[p] })) : [])), h = I(r.value ? [] : null);
    nt(() => {
      n.modelValue == null || n.modelValue === "" ? h.value = r.value ? [] : null : typeof n.modelValue == "string" ? h.value = m.value.find((p) => p.key === n.modelValue) || null : Array.isArray(n.modelValue) && (h.value = m.value.filter((p) => n.modelValue.includes(p.key)));
    });
    const g = f(() => h.value == null ? "" : Array.isArray(h.value) ? h.value.map((p) => encodeURIComponent(p.key)).join(",") : h.value.key);
    return (p, v) => {
      const y = W("Autocomplete");
      return a(), u(Se, null, [
        s("input", {
          type: "hidden",
          id: e.id,
          name: e.id,
          value: o(g)
        }, null, 8, Jc),
        ke(y, Le({
          ref_key: "input",
          ref: d,
          id: e.id,
          options: o(m),
          match: c,
          multiple: o(r)
        }, p.$attrs, {
          modelValue: h.value,
          "onUpdate:modelValue": [
            v[0] || (v[0] = ($) => h.value = $),
            i
          ]
        }), {
          item: xe(({ key: $, value: P }) => [
            s("span", Xc, A(P), 1)
          ]),
          _: 1
        }, 16, ["id", "options", "multiple", "modelValue"])
      ], 64);
    };
  }
}), e0 = /* @__PURE__ */ ae({
  __name: "DynamicInput",
  props: {
    input: null,
    modelValue: null,
    api: null
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const l = e, n = f(() => l.input.type || "text"), i = "ignore,css,options,meta,allowableValues,allowableEntries,op,prop,type,id,name".split(","), r = f(() => ut(l.input, i)), d = I(ze(
      l.modelValue[l.input.id],
      (m) => l.input.type === "file" ? null : l.input.type === "date" && m instanceof Date ? xl(m) : l.input.type === "time" ? Jn(m) : m
    ));
    Ot(d, () => {
      l.modelValue[l.input.id] = d.value, t("update:modelValue", l.modelValue);
    });
    const c = f(() => {
      const m = l.modelValue[l.input.id];
      if (l.input.type !== "file" || !m)
        return [];
      if (typeof m == "string")
        return [{ filePath: m, fileName: xt(m, "/") }];
      if (!Array.isArray(m) && typeof m == "object")
        return m;
      if (Array.isArray(m)) {
        const h = [];
        return m.forEach((g) => {
          typeof g == "string" ? h.push({ filePath: g, fileName: xt(g, "/") }) : typeof g == "object" && h.push(g);
        }), h;
      }
    });
    return (m, h) => {
      var S, H, E, Q, F, M, B, L, z, K, se, G, V, R, b, U, k, w, O, ie, N, oe, j, ce, he, re, fe, Z;
      const g = W("SelectInput"), p = W("CheckboxInput"), v = W("TagInput"), y = W("Combobox"), $ = W("FileInput"), P = W("TextareaInput"), J = W("MarkdownInput"), ee = W("TextInput");
      return o(ne).component(o(n)) ? (a(), le(Qn(o(ne).component(o(n))), Le({
        key: 0,
        id: e.input.id,
        modelValue: d.value,
        "onUpdate:modelValue": h[0] || (h[0] = (Y) => d.value = Y),
        status: (S = e.api) == null ? void 0 : S.error,
        "input-class": (H = e.input.css) == null ? void 0 : H.input,
        "label-class": (E = e.input.css) == null ? void 0 : E.label
      }, o(r)), null, 16, ["id", "modelValue", "status", "input-class", "label-class"])) : o(n) == "select" ? (a(), le(g, Le({
        key: 1,
        id: e.input.id,
        modelValue: d.value,
        "onUpdate:modelValue": h[1] || (h[1] = (Y) => d.value = Y),
        status: (Q = e.api) == null ? void 0 : Q.error,
        "input-class": (F = e.input.css) == null ? void 0 : F.input,
        "label-class": (M = e.input.css) == null ? void 0 : M.label,
        entries: e.input.allowableEntries,
        values: e.input.allowableValues
      }, o(r)), null, 16, ["id", "modelValue", "status", "input-class", "label-class", "entries", "values"])) : o(n) == "checkbox" ? (a(), le(p, Le({
        key: 2,
        id: e.input.id,
        modelValue: d.value,
        "onUpdate:modelValue": h[2] || (h[2] = (Y) => d.value = Y),
        status: (B = e.api) == null ? void 0 : B.error,
        "input-class": (L = e.input.css) == null ? void 0 : L.input,
        "label-class": (z = e.input.css) == null ? void 0 : z.label
      }, o(r)), null, 16, ["id", "modelValue", "status", "input-class", "label-class"])) : o(n) == "tag" ? (a(), le(v, Le({
        key: 3,
        id: e.input.id,
        modelValue: d.value,
        "onUpdate:modelValue": h[3] || (h[3] = (Y) => d.value = Y),
        status: (K = e.api) == null ? void 0 : K.error,
        "input-class": (se = e.input.css) == null ? void 0 : se.input,
        "label-class": (G = e.input.css) == null ? void 0 : G.label,
        allowableValues: e.input.allowableValues,
        string: ((V = e.input.prop) == null ? void 0 : V.type) == "String"
      }, o(r)), null, 16, ["id", "modelValue", "status", "input-class", "label-class", "allowableValues", "string"])) : o(n) == "combobox" ? (a(), le(y, Le({
        key: 4,
        id: e.input.id,
        modelValue: d.value,
        "onUpdate:modelValue": h[4] || (h[4] = (Y) => d.value = Y),
        status: (R = e.api) == null ? void 0 : R.error,
        "input-class": (b = e.input.css) == null ? void 0 : b.input,
        "label-class": (U = e.input.css) == null ? void 0 : U.label,
        entries: e.input.allowableEntries,
        values: e.input.allowableValues
      }, o(r)), null, 16, ["id", "modelValue", "status", "input-class", "label-class", "entries", "values"])) : o(n) == "file" ? (a(), le($, Le({
        key: 5,
        id: e.input.id,
        status: (k = e.api) == null ? void 0 : k.error,
        modelValue: d.value,
        "onUpdate:modelValue": h[5] || (h[5] = (Y) => d.value = Y),
        "input-class": (w = e.input.css) == null ? void 0 : w.input,
        "label-class": (O = e.input.css) == null ? void 0 : O.label,
        files: o(c)
      }, o(r)), null, 16, ["id", "status", "modelValue", "input-class", "label-class", "files"])) : o(n) == "textarea" ? (a(), le(P, Le({
        key: 6,
        id: e.input.id,
        modelValue: d.value,
        "onUpdate:modelValue": h[6] || (h[6] = (Y) => d.value = Y),
        status: (ie = e.api) == null ? void 0 : ie.error,
        "input-class": (N = e.input.css) == null ? void 0 : N.input,
        "label-class": (oe = e.input.css) == null ? void 0 : oe.label
      }, o(r)), null, 16, ["id", "modelValue", "status", "input-class", "label-class"])) : o(n) == "MarkdownInput" ? (a(), le(J, Le({
        key: 7,
        id: e.input.id,
        modelValue: d.value,
        "onUpdate:modelValue": h[7] || (h[7] = (Y) => d.value = Y),
        status: (j = e.api) == null ? void 0 : j.error,
        "input-class": (ce = e.input.css) == null ? void 0 : ce.input,
        "label-class": (he = e.input.css) == null ? void 0 : he.label
      }, o(r)), null, 16, ["id", "modelValue", "status", "input-class", "label-class"])) : (a(), le(ee, Le({
        key: 8,
        type: o(n),
        id: e.input.id,
        modelValue: d.value,
        "onUpdate:modelValue": h[8] || (h[8] = (Y) => d.value = Y),
        status: (re = e.api) == null ? void 0 : re.error,
        "input-class": (fe = e.input.css) == null ? void 0 : fe.input,
        "label-class": (Z = e.input.css) == null ? void 0 : Z.label
      }, o(r)), null, 16, ["type", "id", "modelValue", "status", "input-class", "label-class"]));
    };
  }
}), t0 = { class: "lookup-field" }, l0 = ["name", "value"], n0 = {
  key: 0,
  class: "flex justify-between"
}, s0 = ["for"], o0 = {
  key: 0,
  class: "flex items-center"
}, a0 = { class: "text-sm text-gray-500 dark:text-gray-400 pr-1" }, i0 = /* @__PURE__ */ s("span", { class: "sr-only" }, "Clear", -1), r0 = /* @__PURE__ */ s("svg", {
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
], -1), u0 = [
  i0,
  r0
], d0 = {
  key: 1,
  class: "mt-1 relative"
}, c0 = { class: "w-full inline-flex truncate" }, f0 = { class: "text-blue-700 dark:text-blue-300 flex cursor-pointer" }, m0 = /* @__PURE__ */ s("span", { class: "absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none" }, [
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
], -1), v0 = ["id"], h0 = ["id"], g0 = /* @__PURE__ */ ae({
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
    const l = e, { config: n } = Ct(), { metadataApi: i } = ot(), r = f(() => l.id || l.input.id), d = f(() => l.label ?? Be(lt(r.value)));
    let c = Ne("ApiState", void 0);
    const m = Ne("client"), h = f(() => ft.call({ responseStatus: l.status ?? (c == null ? void 0 : c.error.value) }, r.value)), g = I(""), p = I(""), v = f(() => pe(l.modelValue, r.value)), y = f(() => Ge(l.metadataType).find((S) => S.name.toLowerCase() == r.value.toLowerCase())), $ = f(() => {
      var S, H, E;
      return ((E = st((H = (S = y.value) == null ? void 0 : S.ref) == null ? void 0 : H.model)) == null ? void 0 : E.icon) || n.value.tableIcon;
    });
    let P;
    function J(S) {
      if (S) {
        if (P == null) {
          console.warn("No ModalProvider required by LookupInput");
          return;
        }
        P.openModal({ name: "ModalLookup", ref: S }, (H) => {
          if (console.debug("openModal", g.value, " -> ", H, yt.setRefValue(S, H), S), H) {
            const E = pe(H, S.refId);
            g.value = yt.setRefValue(S, H) || E;
            const Q = o(l.modelValue);
            Q[r.value] = E, t("update:modelValue", Q);
          }
        });
      }
    }
    function ee() {
      l.modelValue[r.value] = null, g.value = "";
    }
    return nt(async () => {
      var B, L;
      P = Ne("ModalProvider", void 0);
      const S = l.modelValue;
      l.modelValue[r.value] || (l.modelValue[r.value] = null);
      const H = y.value, E = H == null ? void 0 : H.ref;
      if (!E) {
        console.warn(`No RefInfo for property '${r.value}'`);
        return;
      }
      g.value = "";
      let Q = E.selfId == null ? pe(S, H.name) : pe(S, E.selfId);
      if (Kt(Q) && (Q = pe(S, E.refId)), Q == null)
        return;
      if (((B = i.value) == null ? void 0 : B.operations.find((z) => {
        var K;
        return ((K = z.dataModel) == null ? void 0 : K.name) == E.model;
      })) != null) {
        const z = pe(S, H.name);
        if (Kt(z))
          return;
        if (g.value = `${z}`, p.value = H.name, E.refLabel != null) {
          const K = Ge(l.metadataType).find((G) => G.type == E.model);
          K == null && console.warn(`Could not find ${E.model} Property on ${l.metadataType.name}`);
          const se = K != null ? pe(S, K.name) : null;
          if (se != null) {
            let G = pe(se, E.refLabel);
            G && (g.value = `${G}`, yt.setValue(E.model, Q, E.refLabel, G));
          } else {
            const G = ((L = H.attributes) == null ? void 0 : L.some((R) => R.name == "Computed")) == !0;
            let V = await yt.getOrFetchValue(m, i.value, E.model, E.refId, E.refLabel, G, Q);
            g.value = V || `${E.model}: ${g.value}`;
          }
        }
      }
    }), (S, H) => {
      var Q;
      const E = W("Icon");
      return a(), u("div", t0, [
        s("input", {
          type: "hidden",
          name: o(r),
          value: o(v)
        }, null, 8, l0),
        o(d) ? (a(), u("div", n0, [
          s("label", {
            for: o(r),
            class: x(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${e.labelClass ?? ""}`)
          }, A(o(d)), 11, s0),
          o(v) ? (a(), u("div", o0, [
            s("span", a0, A(o(v)), 1),
            s("button", {
              onClick: ee,
              type: "button",
              title: "clear",
              class: "mr-1 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:ring-offset-black"
            }, u0)
          ])) : C("", !0)
        ])) : C("", !0),
        (Q = o(y)) != null && Q.ref ? (a(), u("div", d0, [
          s("button", {
            type: "button",
            class: "lookup flex relative w-full bg-white dark:bg-black border border-gray-300 dark:border-gray-700 rounded-md shadow-sm pl-3 pr-10 py-2 text-left focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
            onClick: H[0] || (H[0] = (F) => J(o(y).ref)),
            "aria-haspopup": "listbox",
            "aria-expanded": "true",
            "aria-labelledby": "listbox-label"
          }, [
            s("span", c0, [
              s("span", f0, [
                ke(E, {
                  class: "mr-1 w-5 h-5",
                  image: o($)
                }, null, 8, ["image"]),
                s("span", null, A(g.value), 1)
              ])
            ]),
            m0
          ])
        ])) : C("", !0),
        o(h) ? (a(), u("p", {
          key: 2,
          class: "mt-2 text-sm text-red-500",
          id: `${o(r)}-error`
        }, A(o(h)), 9, v0)) : e.help ? (a(), u("p", {
          key: 3,
          class: "mt-2 text-sm text-gray-500",
          id: `${o(r)}-description`
        }, A(e.help), 9, h0)) : C("", !0)
      ]);
    };
  }
}), p0 = /* @__PURE__ */ ae({
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
      var H;
      const S = We();
      (H = S == null ? void 0 : S.proxy) == null || H.$forceUpdate();
    }
    function r(S, H) {
      d(S.id, pe(H, S.id));
    }
    function d(S, H) {
      n.modelValue[S] = H, l("update:modelValue", n.modelValue), i();
    }
    const { metadataApi: c, apiOf: m, typeOf: h, typeOfRef: g, createFormLayout: p, Crud: v } = ot(), y = f(() => n.type || jt(n.modelValue)), $ = f(() => h(y.value)), P = f(() => {
      var S, H;
      return g((H = (S = c.value) == null ? void 0 : S.operations.find((E) => E.request.name == y.value)) == null ? void 0 : H.dataModel) || $.value;
    }), J = f(() => {
      const S = $.value;
      if (!S) {
        if (n.formLayout) {
          const B = n.formLayout.map((L) => {
            const z = { name: L.id, type: ca(L.type) }, K = Object.assign({ prop: z }, L);
            return n.configureField && n.configureField(K), K;
          });
          return n.configureFormLayout && n.configureFormLayout(B), B;
        }
        throw new Error(`MetadataType for ${y.value} not found`);
      }
      const H = Ge(S), E = P.value, Q = n.formLayout ? n.formLayout : p(S), F = [], M = m(S.name);
      return Q.forEach((B) => {
        var se;
        const L = H.find((G) => G.name == B.name);
        if (B.ignore)
          return;
        const z = ((se = E == null ? void 0 : E.properties) == null ? void 0 : se.find((G) => {
          var V;
          return G.name.toLowerCase() == ((V = B.name) == null ? void 0 : V.toLowerCase());
        })) ?? L, K = Object.assign({ prop: z, op: M }, B);
        n.configureField && n.configureField(K), F.push(K);
      }), n.configureFormLayout && n.configureFormLayout(F), F;
    }), ee = f(() => J.value.filter((S) => S.type != "hidden").map((S) => S.id));
    return (S, H) => {
      var M;
      const E = W("ErrorSummary"), Q = W("LookupInput"), F = W("DynamicInput");
      return a(), u(Se, null, [
        e.hideSummary ? C("", !0) : (a(), le(E, {
          key: 0,
          status: (M = e.api) == null ? void 0 : M.error,
          except: o(ee)
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
                (a(!0), u(Se, null, Me(o(J), (B) => {
                  var L, z, K;
                  return a(), u("div", {
                    key: B.id,
                    class: x([
                      "w-full",
                      ((L = B.css) == null ? void 0 : L.field) ?? (B.type == "textarea" ? "col-span-12" : "col-span-12 xl:col-span-6" + (B.type == "checkbox" ? " flex items-center" : "")),
                      B.type == "hidden" ? "hidden" : ""
                    ])
                  }, [
                    ((z = B.prop) == null ? void 0 : z.ref) != null && B.type != "file" && !B.prop.isPrimaryKey ? (a(), le(Q, {
                      key: 0,
                      metadataType: o(P),
                      input: B,
                      modelValue: e.modelValue,
                      "onUpdate:modelValue": (se) => r(B, se),
                      status: (K = e.api) == null ? void 0 : K.error
                    }, null, 8, ["metadataType", "input", "modelValue", "onUpdate:modelValue", "status"])) : (a(), le(F, {
                      key: 1,
                      input: B,
                      modelValue: e.modelValue,
                      "onUpdate:modelValue": H[0] || (H[0] = (se) => S.$emit("update:modelValue", se)),
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
function Sl() {
  const e = I(!1), t = I(), l = I(), n = Ne("client");
  function i({ message: v, errorCode: y, fieldName: $, errors: P }) {
    return y || (y = "Exception"), P || (P = []), t.value = $ ? new Pl({
      errorCode: y,
      message: v,
      errors: [new Rn({ fieldName: $, errorCode: y, message: v })]
    }) : new Pl({ errorCode: y, message: v, errors: P });
  }
  function r({ fieldName: v, message: y, errorCode: $ }) {
    if ($ || ($ = "Exception"), !t.value)
      i({ fieldName: v, message: y, errorCode: $ });
    else {
      let P = new Pl(t.value);
      P.errors = [
        ...(P.errors || []).filter((J) => {
          var ee;
          return ((ee = J.fieldName) == null ? void 0 : ee.toLowerCase()) !== (v == null ? void 0 : v.toLowerCase());
        }),
        new Rn({ fieldName: v, message: y, errorCode: $ })
      ], t.value = P;
    }
  }
  async function d(v, y, $) {
    e.value = !0;
    let P = await n.api(Lt(v), y, $);
    return e.value = !1, l.value = P.response, t.value = P.error, P;
  }
  async function c(v, y, $) {
    e.value = !0;
    let P = await n.apiVoid(Lt(v), y, $);
    return e.value = !1, l.value = P.response, t.value = P.error, P;
  }
  async function m(v, y, $, P) {
    e.value = !0;
    let J = await n.apiForm(Lt(v), y, $, P);
    return e.value = !1, l.value = J.response, t.value = J.error, J;
  }
  async function h(v, y, $, P) {
    e.value = !0;
    let J = await n.apiFormVoid(Lt(v), y, $, P);
    return e.value = !1, l.value = J.response, t.value = J.error, J;
  }
  async function g(v, y, $, P) {
    return ts(n, v, y, $, P);
  }
  let p = { setError: i, addFieldError: r, loading: e, error: t, api: d, apiVoid: c, apiForm: m, apiFormVoid: h, swr: g, unRefs: Lt, setRef: Xn };
  return Xt("ApiState", p), p;
}
const y0 = ["onSubmit"], b0 = { key: 0 }, w0 = { key: 2 }, x0 = ["innerHTML"], k0 = /* @__PURE__ */ s("input", {
  type: "submit",
  class: "hidden"
}, null, -1), $0 = { class: "flex justify-end" }, C0 = /* @__PURE__ */ s("div", null, null, -1), _0 = /* @__PURE__ */ ae({
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
    Xt("ModalProvider", {
      openModal: d
    });
    const i = I(), r = I();
    function d(L, z) {
      i.value = L, r.value = z;
    }
    async function c(L) {
      r.value && r.value(L), i.value = void 0, r.value = void 0;
    }
    const m = Sl(), { getTypeName: h } = ea(), { typeOf: g, Crud: p, createDto: v } = ot(), y = I(new et()), $ = f(() => typeof l.buttonsClass == "string" ? l.formClass : Ze.buttonsClass), P = f(() => typeof l.headingClass == "string" ? l.formClass : bt.headingClass), J = f(() => typeof l.subHeadingClass == "string" ? l.subHeadingClass : bt.subHeadingClass), ee = f(() => {
      var L;
      return l.type ? h(l.type) : (L = l.modelValue) != null && L.getTypeName ? l.modelValue.getTypeName() : null;
    }), S = f(() => g(ee.value)), H = I(l.modelValue || F()), E = f(() => m.loading.value), Q = f(() => {
      var L;
      return l.heading || ((L = g(ee.value)) == null ? void 0 : L.description) || Be(ee.value);
    });
    function F() {
      return typeof l.type == "string" ? v(l.type) : l.type ? new l.type() : l.modelValue;
    }
    async function M(L) {
      let z = L.target;
      const K = F();
      let se = ze(K == null ? void 0 : K.getMethod, (R) => typeof R == "function" ? R() : null) || "POST", G = ze(K == null ? void 0 : K.createResponse, (R) => typeof R == "function" ? R() : null) == null;
      const V = l.jsconfig;
      if (en.hasRequestBody(se)) {
        let R = new K.constructor(), b = new FormData(z);
        console.debug("AutoForm.submitForm", R, b), G ? y.value = await m.apiFormVoid(R, b, { jsconfig: V }) : y.value = await m.apiForm(R, b, { jsconfig: V });
      } else {
        let R = new K.constructor(H.value);
        console.debug("AutoForm.submit", R), G ? y.value = await m.apiVoid(R, { jsconfig: V }) : y.value = await m.api(R, { jsconfig: V });
      }
      y.value.succeeded ? t("success", y.value.response) : t("error", y.value.error);
    }
    function B(L) {
      t("update:modelValue", L);
    }
    return (L, z) => {
      var R, b, U;
      const K = W("AutoFormFields"), se = W("FormLoading"), G = W("PrimaryButton"), V = W("ModalLookup");
      return o(S) ? (a(), u("form", {
        key: 0,
        onSubmit: qe(M, ["prevent"]),
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
              L.$slots.heading ? (a(), u("div", b0, [
                X(L.$slots, "heading")
              ])) : (a(), u("h3", {
                key: 1,
                class: x(o(P))
              }, A(o(Q)), 3)),
              L.$slots.subheading ? (a(), u("div", w0, [
                X(L.$slots, "subheading")
              ])) : e.subHeading ? (a(), u("p", {
                key: 3,
                class: x(o(J))
              }, A(e.subHeading), 3)) : (R = o(S)) != null && R.notes ? (a(), u("p", {
                key: 4,
                class: x(["notes", o(J)]),
                innerHTML: (b = o(S)) == null ? void 0 : b.notes
              }, null, 10, x0)) : C("", !0)
            ], 2),
            X(L.$slots, "header"),
            k0,
            ke(K, {
              type: e.type,
              modelValue: H.value,
              "onUpdate:modelValue": B,
              api: y.value,
              configureField: e.configureField
            }, null, 8, ["type", "modelValue", "api", "configureField"]),
            X(L.$slots, "footer")
          ], 2),
          X(L.$slots, "buttons", {}, () => [
            s("div", {
              class: x(o($))
            }, [
              s("div", null, [
                e.showLoading && o(E) ? (a(), le(se, { key: 0 })) : C("", !0)
              ]),
              s("div", $0, [
                C0,
                ke(G, {
                  disabled: e.allowSubmit ? !e.allowSubmit(H.value) : !1
                }, {
                  default: xe(() => [
                    Ce(A(e.submitLabel), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ])
            ], 2)
          ])
        ], 2),
        ((U = i.value) == null ? void 0 : U.name) == "ModalLookup" && i.value.ref ? (a(), le(V, {
          key: 0,
          "ref-info": i.value.ref,
          onDone: c
        }, null, 8, ["ref-info"])) : C("", !0)
      ], 42, y0)) : C("", !0);
    };
  }
}), L0 = { key: 0 }, V0 = { class: "text-red-700" }, S0 = /* @__PURE__ */ s("b", null, "type", -1), M0 = ["onSubmit"], A0 = { key: 0 }, T0 = { key: 2 }, I0 = ["innerHTML"], F0 = { class: "flex justify-end" }, D0 = {
  key: 2,
  class: "relative z-10",
  "aria-labelledby": "slide-over-title",
  role: "dialog",
  "aria-modal": "true"
}, P0 = /* @__PURE__ */ s("div", { class: "fixed inset-0" }, null, -1), O0 = { class: "fixed inset-0 overflow-hidden" }, j0 = ["onSubmit"], B0 = { class: "flex min-h-0 flex-1 flex-col overflow-auto" }, R0 = { class: "flex-1" }, H0 = { class: "bg-gray-50 dark:bg-gray-900 px-4 py-6 sm:px-6" }, E0 = { class: "flex items-start justify-between space-x-3" }, z0 = { class: "space-y-1" }, N0 = { key: 0 }, U0 = { key: 2 }, q0 = ["innerHTML"], Q0 = { class: "flex h-7 items-center" }, K0 = { class: "flex justify-end" }, Z0 = /* @__PURE__ */ ae({
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
    const n = e, i = I(), r = I(1);
    t({ forceUpdate: d, props: n, setModel: c, formFields: i });
    function d() {
      var ce, he;
      r.value++, (ce = i.value) == null || ce.forceUpdate();
      const j = We();
      (he = j == null ? void 0 : j.proxy) == null || he.$forceUpdate();
    }
    function c(j) {
      Object.assign(F.value, j), d();
    }
    function m(j) {
    }
    Xt("ModalProvider", {
      openModal: v
    });
    const g = I(), p = I();
    function v(j, ce) {
      g.value = j, p.value = ce;
    }
    async function y(j) {
      p.value && p.value(j), g.value = void 0, p.value = void 0;
    }
    const { typeOf: $, typeProperties: P, Crud: J, createDto: ee, formValues: S } = ot(), H = f(() => jt(n.type)), E = f(() => $(H.value)), F = I((() => typeof n.type == "string" ? ee(n.type) : n.type ? new n.type() : null)()), M = f(() => n.panelClass || Ze.panelClass(n.formStyle)), B = f(() => n.formClass || Ze.formClass(n.formStyle)), L = f(() => n.headingClass || Ze.headingClass(n.formStyle)), z = f(() => n.subHeadingClass || Ze.subHeadingClass(n.formStyle)), K = f(() => n.buttonsClass || Ze.buttonsClass), se = f(() => J.model(E.value)), G = f(() => {
      var j;
      return n.heading || ((j = $(H.value)) == null ? void 0 : j.description) || (se.value ? `New ${Be(se.value)}` : Be(H.value));
    }), V = I(new et());
    let R = Sl(), b = f(() => R.loading.value);
    async function U(j) {
      var fe, Z;
      let ce = j.target;
      if (!n.autosave) {
        l("save", new F.value.constructor(S(ce, P(E.value))));
        return;
      }
      let he = ze((fe = F.value) == null ? void 0 : fe.getMethod, (Y) => typeof Y == "function" ? Y() : null) || "POST", re = ze((Z = F.value) == null ? void 0 : Z.createResponse, (Y) => typeof Y == "function" ? Y() : null) == null;
      if (en.hasRequestBody(he)) {
        let Y = new F.value.constructor(), we = new FormData(ce);
        re ? V.value = await R.apiFormVoid(Y, we, { jsconfig: "eccn" }) : V.value = await R.apiForm(Y, we, { jsconfig: "eccn" });
      } else {
        let Y = S(ce, P(E.value)), we = new F.value.constructor(Y);
        re ? V.value = await R.apiVoid(we, { jsconfig: "eccn" }) : V.value = await R.api(we, { jsconfig: "eccn" });
      }
      V.value.succeeded ? (ce.reset(), l("save", V.value.response)) : l("error", V.value.error);
    }
    function k() {
      l("done");
    }
    const w = I(!1), O = I(""), ie = {
      entering: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-full", to: "translate-x-0" },
      leaving: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-0", to: "translate-x-full" }
    };
    Ot(w, () => {
      It(ie, O, w.value), w.value || setTimeout(k, 700);
    }), w.value = !0;
    function N() {
      n.formStyle == "slideOver" ? w.value = !1 : k();
    }
    const oe = (j) => {
      j.key === "Escape" && N();
    };
    return nt(() => window.addEventListener("keydown", oe)), Jt(() => window.removeEventListener("keydown", oe)), (j, ce) => {
      var Ve, be, Pe, Ie, D, q, de, ge, Ae;
      const he = W("AutoFormFields"), re = W("FormLoading"), fe = W("SecondaryButton"), Z = W("PrimaryButton"), Y = W("CloseButton"), we = W("ModalLookup");
      return a(), u("div", null, [
        o(E) ? e.formStyle == "card" ? (a(), u("div", {
          key: 1,
          class: x(o(M))
        }, [
          s("form", {
            onSubmit: qe(U, ["prevent"])
          }, [
            s("div", {
              class: x(o(B))
            }, [
              s("div", null, [
                j.$slots.heading ? (a(), u("div", A0, [
                  X(j.$slots, "heading")
                ])) : (a(), u("h3", {
                  key: 1,
                  class: x(o(L))
                }, A(o(G)), 3)),
                j.$slots.subheading ? (a(), u("div", T0, [
                  X(j.$slots, "subheading")
                ])) : e.subHeading ? (a(), u("p", {
                  key: 3,
                  class: x(o(z))
                }, A(e.subHeading), 3)) : (Ve = o(E)) != null && Ve.notes ? (a(), u("p", {
                  key: 4,
                  class: x(["notes", o(z)]),
                  innerHTML: (be = o(E)) == null ? void 0 : be.notes
                }, null, 10, I0)) : C("", !0)
              ]),
              X(j.$slots, "header", {
                formInstance: (Pe = We()) == null ? void 0 : Pe.exposed,
                model: F.value
              }),
              (a(), le(he, {
                ref_key: "formFields",
                ref: i,
                key: r.value,
                modelValue: F.value,
                "onUpdate:modelValue": m,
                api: V.value,
                configureField: e.configureField,
                configureFormLayout: e.configureFormLayout
              }, null, 8, ["modelValue", "api", "configureField", "configureFormLayout"])),
              X(j.$slots, "footer", {
                formInstance: (Ie = We()) == null ? void 0 : Ie.exposed,
                model: F.value
              })
            ], 2),
            s("div", {
              class: x(o(K))
            }, [
              s("div", null, [
                e.showLoading && o(b) ? (a(), le(re, { key: 0 })) : C("", !0)
              ]),
              s("div", F0, [
                e.showCancel ? (a(), le(fe, {
                  key: 0,
                  onClick: N,
                  disabled: o(b)
                }, {
                  default: xe(() => [
                    Ce("Cancel")
                  ]),
                  _: 1
                }, 8, ["disabled"])) : C("", !0),
                ke(Z, {
                  type: "submit",
                  class: "ml-4",
                  disabled: o(b)
                }, {
                  default: xe(() => [
                    Ce("Save")
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ])
            ], 2)
          ], 40, M0)
        ], 2)) : (a(), u("div", D0, [
          P0,
          s("div", O0, [
            s("div", {
              onMousedown: N,
              class: "absolute inset-0 overflow-hidden"
            }, [
              s("div", {
                onMousedown: ce[0] || (ce[0] = qe(() => {
                }, ["stop"])),
                class: "pointer-events-none fixed inset-y-0 right-0 flex pl-10"
              }, [
                s("div", {
                  class: x(["pointer-events-auto w-screen xl:max-w-3xl md:max-w-xl max-w-lg", O.value])
                }, [
                  s("form", {
                    class: x(o(B)),
                    onSubmit: qe(U, ["prevent"])
                  }, [
                    s("div", B0, [
                      s("div", R0, [
                        s("div", H0, [
                          s("div", E0, [
                            s("div", z0, [
                              j.$slots.heading ? (a(), u("div", N0, [
                                X(j.$slots, "heading")
                              ])) : (a(), u("h3", {
                                key: 1,
                                class: x(o(L))
                              }, A(o(G)), 3)),
                              j.$slots.subheading ? (a(), u("div", U0, [
                                X(j.$slots, "subheading")
                              ])) : e.subHeading ? (a(), u("p", {
                                key: 3,
                                class: x(o(z))
                              }, A(e.subHeading), 3)) : (D = o(E)) != null && D.notes ? (a(), u("p", {
                                key: 4,
                                class: x(["notes", o(z)]),
                                innerHTML: (q = o(E)) == null ? void 0 : q.notes
                              }, null, 10, q0)) : C("", !0)
                            ]),
                            s("div", Q0, [
                              ke(Y, {
                                "button-class": "bg-gray-50 dark:bg-gray-900",
                                onClose: N
                              })
                            ])
                          ])
                        ]),
                        X(j.$slots, "header", {
                          formInstance: (de = We()) == null ? void 0 : de.exposed,
                          model: F.value
                        }),
                        (a(), le(he, {
                          ref_key: "formFields",
                          ref: i,
                          key: r.value,
                          modelValue: F.value,
                          "onUpdate:modelValue": m,
                          api: V.value,
                          configureField: e.configureField,
                          configureFormLayout: e.configureFormLayout
                        }, null, 8, ["modelValue", "api", "configureField", "configureFormLayout"])),
                        X(j.$slots, "footer", {
                          formInstance: (ge = We()) == null ? void 0 : ge.exposed,
                          model: F.value
                        })
                      ])
                    ]),
                    s("div", {
                      class: x(o(K))
                    }, [
                      s("div", null, [
                        e.showLoading && o(b) ? (a(), le(re, { key: 0 })) : C("", !0)
                      ]),
                      s("div", K0, [
                        e.showCancel ? (a(), le(fe, {
                          key: 0,
                          onClick: N,
                          disabled: o(b)
                        }, {
                          default: xe(() => [
                            Ce("Cancel")
                          ]),
                          _: 1
                        }, 8, ["disabled"])) : C("", !0),
                        ke(Z, {
                          type: "submit",
                          class: "ml-4",
                          disabled: o(b)
                        }, {
                          default: xe(() => [
                            Ce("Save")
                          ]),
                          _: 1
                        }, 8, ["disabled"])
                      ])
                    ], 2)
                  ], 42, j0)
                ], 2)
              ], 32)
            ], 32)
          ])
        ])) : (a(), u("div", L0, [
          s("p", V0, [
            Ce("Could not create form for unknown "),
            S0,
            Ce(" " + A(o(H)), 1)
          ])
        ])),
        ((Ae = g.value) == null ? void 0 : Ae.name) == "ModalLookup" && g.value.ref ? (a(), le(we, {
          key: 3,
          "ref-info": g.value.ref,
          onDone: y
        }, null, 8, ["ref-info"])) : C("", !0)
      ]);
    };
  }
}), W0 = { key: 0 }, G0 = { class: "text-red-700" }, J0 = /* @__PURE__ */ s("b", null, "type", -1), X0 = ["onSubmit"], Y0 = { key: 0 }, ef = { key: 2 }, tf = ["innerHTML"], lf = { class: "flex justify-end" }, nf = {
  key: 2,
  class: "relative z-10",
  "aria-labelledby": "slide-over-title",
  role: "dialog",
  "aria-modal": "true"
}, sf = /* @__PURE__ */ s("div", { class: "fixed inset-0" }, null, -1), of = { class: "fixed inset-0 overflow-hidden" }, af = ["onSubmit"], rf = { class: "flex min-h-0 flex-1 flex-col overflow-auto" }, uf = { class: "flex-1" }, df = { class: "bg-gray-50 dark:bg-gray-900 px-4 py-6 sm:px-6" }, cf = { class: "flex items-start justify-between space-x-3" }, ff = { class: "space-y-1" }, mf = { key: 0 }, vf = { key: 2 }, hf = ["innerHTML"], gf = { class: "flex h-7 items-center" }, pf = { class: "flex justify-end" }, yf = /* @__PURE__ */ ae({
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
    const n = e, i = I(), r = I(1);
    t({ forceUpdate: d, props: n, setModel: c, formFields: i });
    function d() {
      var Y;
      r.value++, L.value = B();
      const Z = We();
      (Y = Z == null ? void 0 : Z.proxy) == null || Y.$forceUpdate();
    }
    function c(Z) {
      Object.assign(L.value, Z);
    }
    function m(Z) {
    }
    Xt("ModalProvider", {
      openModal: v
    });
    const g = I(), p = I();
    function v(Z, Y) {
      g.value = Z, p.value = Y;
    }
    async function y(Z) {
      p.value && p.value(Z), g.value = void 0, p.value = void 0;
    }
    const { typeOf: $, apiOf: P, typeProperties: J, createFormLayout: ee, getPrimaryKey: S, Crud: H, createDto: E, formValues: Q } = ot(), F = f(() => jt(n.type)), M = f(() => $(F.value)), B = () => typeof n.type == "string" ? E(n.type, fl(n.modelValue)) : n.type ? new n.type(fl(n.modelValue)) : null, L = I(B()), z = f(() => n.panelClass || Ze.panelClass(n.formStyle)), K = f(() => n.formClass || Ze.formClass(n.formStyle)), se = f(() => n.headingClass || Ze.headingClass(n.formStyle)), G = f(() => n.subHeadingClass || Ze.subHeadingClass(n.formStyle)), V = f(() => H.model(M.value)), R = f(() => {
      var Z;
      return n.heading || ((Z = $(F.value)) == null ? void 0 : Z.description) || (V.value ? `Update ${Be(V.value)}` : Be(F.value));
    }), b = I(new et());
    let U = Sl(), k = f(() => U.loading.value);
    const w = () => ze($(H.model(M.value)), (Z) => S(Z));
    function O(Z) {
      const { op: Y, prop: we } = Z;
      Y && (H.isPatch(Y) || H.isUpdate(Y)) && (Z.disabled = we == null ? void 0 : we.isPrimaryKey), n.configureField && n.configureField(Z);
    }
    async function ie(Z) {
      var Pe, Ie;
      let Y = Z.target;
      if (!n.autosave) {
        l("save", new L.value.constructor(Q(Y, J(M.value))));
        return;
      }
      let we = ze((Pe = L.value) == null ? void 0 : Pe.getMethod, (D) => typeof D == "function" ? D() : null) || "POST", Ve = ze((Ie = L.value) == null ? void 0 : Ie.createResponse, (D) => typeof D == "function" ? D() : null) == null, be = w();
      if (en.hasRequestBody(we)) {
        let D = new L.value.constructor(), q = pe(n.modelValue, be.name), de = new FormData(Y);
        be && !Array.from(de.keys()).some((Ee) => Ee.toLowerCase() == be.name.toLowerCase()) && de.append(be.name, q);
        let ge = [];
        const Ae = F.value && P(F.value);
        if (Ae && H.isPatch(Ae)) {
          let Ee = fl(n.modelValue), Te = ee(M.value), Re = {};
          if (be && (Re[be.name] = q), Te.forEach((Fe) => {
            let Je = Fe.id, Rt = pe(Ee, Je);
            if (be && be.name.toLowerCase() === Je.toLowerCase())
              return;
            let mt = de.get(Je), ll = mt != null, nl = Fe.type === "checkbox" ? ll !== !!Rt : Fe.type === "file" ? ll : mt != Rt;
            !mt && !Rt && (nl = !1), nl && (mt ? Re[Je] = mt : Fe.type !== "file" && ge.push(Je));
          }), Array.from(de.keys()).filter((Fe) => !Re[Fe]).forEach((Fe) => de.delete(Fe)), Array.from(de.keys()).filter((Fe) => Fe.toLowerCase() != be.name.toLowerCase()).length == 0 && ge.length == 0) {
            re();
            return;
          }
        }
        const Oe = ge.length > 0 ? { jsconfig: "eccn", reset: ge } : { jsconfig: "eccn" };
        Ve ? b.value = await U.apiFormVoid(D, de, Oe) : b.value = await U.apiForm(D, de, Oe);
      } else {
        let D = Q(Y, J(M.value));
        be && !pe(D, be.name) && (D[be.name] = pe(n.modelValue, be.name));
        let q = new L.value.constructor(D);
        Ve ? b.value = await U.apiVoid(q, { jsconfig: "eccn" }) : b.value = await U.api(q, { jsconfig: "eccn" });
      }
      b.value.succeeded ? (Y.reset(), l("save", b.value.response)) : l("error", b.value.error);
    }
    async function N(Z) {
      let Y = w();
      const we = Y ? pe(n.modelValue, Y.name) : null;
      if (!we) {
        console.error(`Could not find Primary Key for Type ${F.value} (${V.value})`);
        return;
      }
      const Ve = { [Y.name]: we }, be = typeof n.deleteType == "string" ? E(n.deleteType, Ve) : n.deleteType ? new n.deleteType(Ve) : null;
      ze(be.createResponse, (Ie) => typeof Ie == "function" ? Ie() : null) == null ? b.value = await U.apiVoid(be) : b.value = await U.api(be), b.value.succeeded ? l("delete", b.value.response) : l("error", b.value.error);
    }
    function oe() {
      l("done");
    }
    const j = I(!1), ce = I(""), he = {
      entering: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-full", to: "translate-x-0" },
      leaving: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-0", to: "translate-x-full" }
    };
    Ot(j, () => {
      It(he, ce, j.value), j.value || setTimeout(oe, 700);
    }), j.value = !0;
    function re() {
      n.formStyle == "slideOver" ? j.value = !1 : oe();
    }
    const fe = (Z) => {
      Z.key === "Escape" && re();
    };
    return nt(() => window.addEventListener("keydown", fe)), Jt(() => window.removeEventListener("keydown", fe)), (Z, Y) => {
      var de, ge, Ae, Oe, Ee, Te, Re, Ke, Fe;
      const we = W("AutoFormFields"), Ve = W("ConfirmDelete"), be = W("FormLoading"), Pe = W("SecondaryButton"), Ie = W("PrimaryButton"), D = W("CloseButton"), q = W("ModalLookup");
      return a(), u("div", null, [
        o(M) ? e.formStyle == "card" ? (a(), u("div", {
          key: 1,
          class: x(o(z))
        }, [
          s("form", {
            onSubmit: qe(ie, ["prevent"])
          }, [
            s("div", {
              class: x(o(K))
            }, [
              s("div", null, [
                Z.$slots.heading ? (a(), u("div", Y0, [
                  X(Z.$slots, "heading")
                ])) : (a(), u("h3", {
                  key: 1,
                  class: x(o(se))
                }, A(o(R)), 3)),
                Z.$slots.subheading ? (a(), u("div", ef, [
                  X(Z.$slots, "subheading")
                ])) : e.subHeading ? (a(), u("p", {
                  key: 3,
                  class: x(o(G))
                }, A(e.subHeading), 3)) : (de = o(M)) != null && de.notes ? (a(), u("p", {
                  key: 4,
                  class: x(["notes", o(G)]),
                  innerHTML: (ge = o(M)) == null ? void 0 : ge.notes
                }, null, 10, tf)) : C("", !0)
              ]),
              X(Z.$slots, "header", {
                formInstance: (Ae = We()) == null ? void 0 : Ae.exposed,
                model: L.value
              }),
              (a(), le(we, {
                ref_key: "formFields",
                ref: i,
                key: r.value,
                modelValue: L.value,
                "onUpdate:modelValue": m,
                api: b.value,
                configureField: e.configureField,
                configureFormLayout: e.configureFormLayout
              }, null, 8, ["modelValue", "api", "configureField", "configureFormLayout"])),
              X(Z.$slots, "footer", {
                formInstance: (Oe = We()) == null ? void 0 : Oe.exposed,
                model: L.value
              })
            ], 2),
            s("div", {
              class: x(o(Ze).buttonsClass)
            }, [
              s("div", null, [
                e.deleteType ? (a(), le(Ve, {
                  key: 0,
                  onDelete: N
                })) : C("", !0)
              ]),
              s("div", null, [
                e.showLoading && o(k) ? (a(), le(be, { key: 0 })) : C("", !0)
              ]),
              s("div", lf, [
                ke(Pe, {
                  onClick: re,
                  disabled: o(k)
                }, {
                  default: xe(() => [
                    Ce("Cancel")
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                ke(Ie, {
                  type: "submit",
                  class: "ml-4",
                  disabled: o(k)
                }, {
                  default: xe(() => [
                    Ce("Save")
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ])
            ], 2)
          ], 40, X0)
        ], 2)) : (a(), u("div", nf, [
          sf,
          s("div", of, [
            s("div", {
              onMousedown: re,
              class: "absolute inset-0 overflow-hidden"
            }, [
              s("div", {
                onMousedown: Y[0] || (Y[0] = qe(() => {
                }, ["stop"])),
                class: "pointer-events-none fixed inset-y-0 right-0 flex pl-10"
              }, [
                s("div", {
                  class: x(["pointer-events-auto w-screen xl:max-w-3xl md:max-w-xl max-w-lg", ce.value])
                }, [
                  s("form", {
                    class: x(o(K)),
                    onSubmit: qe(ie, ["prevent"])
                  }, [
                    s("div", rf, [
                      s("div", uf, [
                        s("div", df, [
                          s("div", cf, [
                            s("div", ff, [
                              Z.$slots.heading ? (a(), u("div", mf, [
                                X(Z.$slots, "heading")
                              ])) : (a(), u("h3", {
                                key: 1,
                                class: x(o(se))
                              }, A(o(R)), 3)),
                              Z.$slots.subheading ? (a(), u("div", vf, [
                                X(Z.$slots, "subheading")
                              ])) : e.subHeading ? (a(), u("p", {
                                key: 3,
                                class: x(o(G))
                              }, A(e.subHeading), 3)) : (Ee = o(M)) != null && Ee.notes ? (a(), u("p", {
                                key: 4,
                                class: x(["notes", o(G)]),
                                innerHTML: (Te = o(M)) == null ? void 0 : Te.notes
                              }, null, 10, hf)) : C("", !0)
                            ]),
                            s("div", gf, [
                              ke(D, {
                                "button-class": "bg-gray-50 dark:bg-gray-900",
                                onClose: re
                              })
                            ])
                          ])
                        ]),
                        X(Z.$slots, "header", {
                          formInstance: (Re = We()) == null ? void 0 : Re.exposed,
                          model: L.value
                        }),
                        (a(), le(we, {
                          ref_key: "formFields",
                          ref: i,
                          key: r.value,
                          modelValue: L.value,
                          "onUpdate:modelValue": m,
                          api: b.value,
                          configureField: O,
                          configureFormLayout: e.configureFormLayout
                        }, null, 8, ["modelValue", "api", "configureFormLayout"])),
                        X(Z.$slots, "footer", {
                          formInstance: (Ke = We()) == null ? void 0 : Ke.exposed,
                          model: L.value
                        })
                      ])
                    ]),
                    s("div", {
                      class: x(o(Ze).buttonsClass)
                    }, [
                      s("div", null, [
                        e.deleteType ? (a(), le(Ve, {
                          key: 0,
                          onDelete: N
                        })) : C("", !0)
                      ]),
                      s("div", null, [
                        e.showLoading && o(k) ? (a(), le(be, { key: 0 })) : C("", !0)
                      ]),
                      s("div", pf, [
                        ke(Pe, {
                          onClick: re,
                          disabled: o(k)
                        }, {
                          default: xe(() => [
                            Ce("Cancel")
                          ]),
                          _: 1
                        }, 8, ["disabled"]),
                        ke(Ie, {
                          type: "submit",
                          class: "ml-4",
                          disabled: o(k)
                        }, {
                          default: xe(() => [
                            Ce("Save")
                          ]),
                          _: 1
                        }, 8, ["disabled"])
                      ])
                    ], 2)
                  ], 42, af)
                ], 2)
              ], 32)
            ], 32)
          ])
        ])) : (a(), u("div", W0, [
          s("p", G0, [
            Ce("Could not create form for unknown "),
            J0,
            Ce(" " + A(o(F)), 1)
          ])
        ])),
        ((Fe = g.value) == null ? void 0 : Fe.name) == "ModalLookup" && g.value.ref ? (a(), le(q, {
          key: 3,
          "ref-info": g.value.ref,
          onDone: y
        }, null, 8, ["ref-info"])) : C("", !0)
      ]);
    };
  }
}), bf = /* @__PURE__ */ s("label", {
  for: "confirmDelete",
  class: "ml-2 mr-2 select-none"
}, "confirm", -1), wf = ["onClick"], xf = /* @__PURE__ */ ae({
  __name: "ConfirmDelete",
  emits: ["delete"],
  setup(e, { emit: t }) {
    let l = I(!1);
    const n = () => {
      l.value && t("delete");
    }, i = f(() => [
      "select-none inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white",
      l.value ? "cursor-pointer bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500" : "bg-red-400"
    ]);
    return (r, d) => (a(), u(Se, null, [
      wt(s("input", {
        id: "confirmDelete",
        type: "checkbox",
        class: "focus:ring-indigo-500 h-4 w-4 text-indigo-600 rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:ring-offset-black",
        "onUpdate:modelValue": d[0] || (d[0] = (c) => Un(l) ? l.value = c : l = c)
      }, null, 512), [
        [Jl, o(l)]
      ]),
      bf,
      s("span", Le({
        onClick: qe(n, ["prevent"]),
        class: o(i)
      }, r.$attrs), [
        X(r.$slots, "default", {}, () => [
          Ce("Delete")
        ])
      ], 16, wf)
    ], 64));
  }
}), kf = {
  class: "flex",
  title: "loading..."
}, $f = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  x: "0px",
  y: "0px",
  width: "24px",
  height: "30px",
  viewBox: "0 0 24 30"
}, Cf = /* @__PURE__ */ yl('<rect x="0" y="10" width="4" height="10" fill="#333" opacity="0.2"><animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0s" dur="0.6s" repeatCount="indefinite"></animate></rect><rect x="8" y="10" width="4" height="10" fill="#333" opacity="0.2"><animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate></rect><rect x="16" y="10" width="4" height="10" fill="#333" opacity="0.2"><animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate></rect>', 3), _f = [
  Cf
], Lf = { class: "ml-2 mt-1 text-gray-400" }, Vf = /* @__PURE__ */ ae({
  __name: "FormLoading",
  props: {
    icon: { type: Boolean, default: !0 },
    text: { default: "loading..." }
  },
  setup(e) {
    return Ne("ApiState", void 0), (t, l) => (a(), u("div", kf, [
      e.icon ? (a(), u("svg", $f, _f)) : C("", !0),
      s("span", Lf, A(e.text), 1)
    ]));
  }
}), Sf = ["onClick"], Mf = {
  key: 3,
  class: "flex justify-between items-center"
}, Af = { class: "mr-1 select-none" }, Tf = ["onClick"], If = /* @__PURE__ */ ae({
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
    const l = e, n = I(), i = I(null), r = (k) => i.value === k, d = Xl(), c = (k) => Object.keys(d).find((w) => w.toLowerCase() == k.toLowerCase() + "-header"), m = (k) => Object.keys(d).find((w) => w.toLowerCase() == k.toLowerCase()), h = f(() => El(l.items).filter((k) => !!(d[k] || d[k + "-header"]))), { typeOf: g, typeProperties: p } = ot(), v = f(() => jt(l.type)), y = f(() => g(v.value)), $ = f(() => p(y.value));
    function P(k) {
      const w = l.headerTitles && pe(l.headerTitles, k) || k;
      return l.headerTitle ? l.headerTitle(w) : Gn(w);
    }
    function J(k) {
      const w = k.toLowerCase();
      return $.value.find((O) => O.name.toLowerCase() == w);
    }
    function ee(k) {
      const w = J(k);
      return w != null && w.format ? w.format : (w == null ? void 0 : w.type) == "TimeSpan" || (w == null ? void 0 : w.type) == "TimeOnly" ? { method: "time" } : null;
    }
    const S = {
      xs: "xs:table-cell",
      sm: "sm:table-cell",
      md: "md:table-cell",
      lg: "lg:table-cell",
      xl: "xl:table-cell",
      "2xl": "2xl:table-cell",
      never: ""
    };
    function H(k) {
      const w = l.visibleFrom && pe(l.visibleFrom, k);
      return w && ze(S[w], (O) => `hidden ${O}`);
    }
    const E = f(() => l.gridClass ?? me.getGridClass(l.tableStyle)), Q = f(() => l.grid2Class ?? me.getGrid2Class(l.tableStyle)), F = f(() => l.grid3Class ?? me.getGrid3Class(l.tableStyle)), M = f(() => l.grid4Class ?? me.getGrid4Class(l.tableStyle)), B = f(() => l.tableClass ?? me.getTableClass(l.tableStyle)), L = f(() => l.tbodyClass ?? me.getTbodyClass(l.tbodyClass)), z = f(() => l.theadClass ?? me.getTheadClass(l.tableStyle)), K = f(() => l.theadRowClass ?? me.getTheadRowClass(l.tableStyle)), se = f(() => l.theadCellClass ?? me.getTheadCellClass(l.tableStyle));
    function G(k, w) {
      return l.rowClass ? l.rowClass(k, w) : me.getTableRowClass(l.tableStyle, w, !!(l.isSelected && l.isSelected(k)), l.isSelected != null);
    }
    function V(k, w) {
      return l.rowStyle ? l.rowStyle(k, w) : void 0;
    }
    const R = f(() => {
      const k = (typeof l.selectedColumns == "string" ? l.selectedColumns.split(",") : l.selectedColumns) || (h.value.length > 0 ? h.value : El(l.items)), w = $.value.reduce((O, ie) => (O[ie.name.toLowerCase()] = ie.format, O), {});
      return k.filter((O) => {
        var ie;
        return ((ie = w[O.toLowerCase()]) == null ? void 0 : ie.method) != "hidden";
      });
    });
    function b(k, w) {
      t("headerSelected", w, k);
    }
    function U(k, w, O) {
      t("rowSelected", O, k);
    }
    return (k, w) => {
      const O = W("CellFormat"), ie = W("PreviewFormat");
      return e.items.length ? (a(), u("div", {
        key: 0,
        ref_key: "refResults",
        ref: n,
        class: x(o(E))
      }, [
        s("div", {
          class: x(o(Q))
        }, [
          s("div", {
            class: x(o(F))
          }, [
            s("div", {
              class: x(o(M))
            }, [
              s("table", {
                class: x(o(B))
              }, [
                s("thead", {
                  class: x(o(z))
                }, [
                  s("tr", {
                    class: x(o(K))
                  }, [
                    (a(!0), u(Se, null, Me(o(R), (N) => (a(), u("td", {
                      class: x([H(N), o(se), r(N) ? "text-gray-900 dark:text-gray-50" : "text-gray-500 dark:text-gray-400"])
                    }, [
                      s("div", {
                        onClick: (oe) => b(oe, N)
                      }, [
                        o(d)[N + "-header"] ? X(k.$slots, N + "-header", {
                          key: 0,
                          column: N
                        }) : c(N) ? X(k.$slots, c(N), {
                          key: 1,
                          column: N
                        }) : o(d).header ? X(k.$slots, "header", {
                          key: 2,
                          column: N,
                          label: P(N)
                        }) : (a(), u("div", Mf, [
                          s("span", Af, A(P(N)), 1)
                        ]))
                      ], 8, Sf)
                    ], 2))), 256))
                  ], 2)
                ], 2),
                s("tbody", {
                  class: x(o(L))
                }, [
                  (a(!0), u(Se, null, Me(e.items, (N, oe) => (a(), u("tr", {
                    class: x(G(N, oe)),
                    style: Gl(V(N, oe)),
                    onClick: (j) => U(j, oe, N)
                  }, [
                    (a(!0), u(Se, null, Me(o(R), (j) => (a(), u("td", {
                      class: x([H(j), o(me).tableCellClass])
                    }, [
                      o(d)[j] ? X(k.$slots, j, Tt(Le({ key: 0 }, N))) : m(j) ? X(k.$slots, m(j), Tt(Le({ key: 1 }, N))) : J(j) ? (a(), le(O, {
                        key: 2,
                        type: o(y),
                        propType: J(j),
                        modelValue: N
                      }, null, 8, ["type", "propType", "modelValue"])) : (a(), le(ie, {
                        key: 3,
                        value: o(pe)(N, j),
                        format: ee(j)
                      }, null, 8, ["value", "format"]))
                    ], 2))), 256))
                  ], 14, Tf))), 256))
                ], 2)
              ], 2)
            ], 2)
          ], 2)
        ], 2)
      ], 2)) : C("", !0);
    };
  }
}), Ff = ae({
  props: {
    type: Object,
    propType: Object,
    modelValue: Object
  },
  setup(e, { attrs: t }) {
    const { typeOf: l } = ot();
    function n(i) {
      return i != null && i.format ? i.format : (i == null ? void 0 : i.type) == "TimeSpan" || (i == null ? void 0 : i.type) == "TimeOnly" ? { method: "time" } : null;
    }
    return () => {
      var ee;
      const i = n(e.propType), r = pe(e.modelValue, e.propType.name), d = Object.assign({}, e, t), c = ht("span", { innerHTML: Gt(r, i, d) }), m = Kt(r) && Array.isArray(r) ? ht("span", {}, [
        ht("span", { class: "mr-2" }, `${r.length}`),
        c
      ]) : c, h = (ee = e.propType) == null ? void 0 : ee.ref;
      if (!h)
        return m;
      const p = Ge(e.type).find((S) => S.type === h.model);
      if (!p)
        return m;
      const v = pe(e.modelValue, p.name), y = v && h.refLabel && pe(v, h.refLabel);
      if (!y)
        return m;
      const $ = l(h.model), P = $ == null ? void 0 : $.icon, J = P ? ht(Ps, { image: P, class: "w-5 h-5 mr-1" }) : null;
      return ht("span", { class: "flex", title: `${h.model} ${r}` }, [
        J,
        y
      ]);
    };
  }
}), Df = { key: 0 }, Pf = {
  key: 0,
  class: "mr-2"
}, Of = ["innerHTML"], jf = ["innerHTML"], Bf = {
  inheritAttrs: !1
}, Rf = /* @__PURE__ */ ae({
  ...Bf,
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
    return (n, i) => o(Kt)(e.value) ? (a(), u("span", Df, [
      e.includeCount && o(l) ? (a(), u("span", Pf, A(e.value.length), 1)) : C("", !0),
      s("span", {
        innerHTML: o(Gt)(e.value, e.format, n.$attrs)
      }, null, 8, Of)
    ])) : (a(), u("span", {
      key: 1,
      innerHTML: o(Gt)(e.value, e.format, n.$attrs)
    }, null, 8, jf));
  }
}), Hf = ["innerHTML"], Ef = { key: 0 }, zf = /* @__PURE__ */ s("b", null, null, -1), Nf = { key: 2 }, Uf = /* @__PURE__ */ ae({
  __name: "HtmlFormat",
  props: {
    value: null,
    depth: { default: 0 },
    fieldAttrs: null,
    classes: { type: Function, default: (e, t, l, n, i) => n }
  },
  setup(e) {
    const t = e, l = f(() => kt(t.value)), n = f(() => Array.isArray(t.value)), i = (m) => Gn(m), r = (m) => t.fieldAttrs ? t.fieldAttrs(m) : null, d = f(() => El(t.value)), c = (m) => m ? Object.keys(m).map((h) => ({ key: i(h), val: m[h] })) : [];
    return (m, h) => {
      const g = W("HtmlFormat", !0);
      return a(), u("div", {
        class: x(e.depth == 0 ? "prose html-format" : "")
      }, [
        o(l) ? (a(), u("div", {
          key: 0,
          innerHTML: o(Gt)(e.value)
        }, null, 8, Hf)) : o(n) ? (a(), u("div", {
          key: 1,
          class: x(e.classes("array", "div", e.depth, o(me).gridClass))
        }, [
          o(kt)(e.value[0]) ? (a(), u("div", Ef, "[ " + A(e.value.join(", ")) + " ]", 1)) : (a(), u("div", {
            key: 1,
            class: x(e.classes("array", "div", e.depth, o(me).grid2Class))
          }, [
            s("div", {
              class: x(e.classes("array", "div", e.depth, o(me).grid3Class))
            }, [
              s("div", {
                class: x(e.classes("array", "div", e.depth, o(me).grid4Class))
              }, [
                s("table", {
                  class: x(e.classes("object", "table", e.depth, o(me).tableClass))
                }, [
                  s("thead", {
                    class: x(e.classes("array", "thead", e.depth, o(me).theadClass))
                  }, [
                    s("tr", null, [
                      (a(!0), u(Se, null, Me(o(d), (p) => (a(), u("th", {
                        class: x(e.classes("array", "th", e.depth, o(me).theadCellClass + " whitespace-nowrap"))
                      }, [
                        zf,
                        Ce(A(i(p)), 1)
                      ], 2))), 256))
                    ])
                  ], 2),
                  s("tbody", null, [
                    (a(!0), u(Se, null, Me(e.value, (p, v) => (a(), u("tr", {
                      class: x(e.classes("array", "tr", e.depth, v % 2 == 0 ? "bg-white" : "bg-gray-50", v))
                    }, [
                      (a(!0), u(Se, null, Me(o(d), (y) => (a(), u("td", {
                        class: x(e.classes("array", "td", e.depth, o(me).tableCellClass))
                      }, [
                        ke(g, Le({
                          value: p[y],
                          "field-attrs": e.fieldAttrs,
                          depth: e.depth + 1,
                          classes: e.classes
                        }, r(y)), null, 16, ["value", "field-attrs", "depth", "classes"])
                      ], 2))), 256))
                    ], 2))), 256))
                  ])
                ], 2)
              ], 2)
            ], 2)
          ], 2))
        ], 2)) : (a(), u("div", Nf, [
          s("table", {
            class: x(e.classes("object", "table", e.depth, "table-object"))
          }, [
            (a(!0), u(Se, null, Me(c(e.value), (p) => (a(), u("tr", {
              class: x(e.classes("object", "tr", e.depth, ""))
            }, [
              s("th", {
                class: x(e.classes("object", "th", e.depth, "align-top py-2 px-4 text-left text-sm font-medium tracking-wider whitespace-nowrap"))
              }, A(p.key), 3),
              s("td", {
                class: x(e.classes("object", "td", e.depth, "align-top py-2 px-4 text-sm"))
              }, [
                ke(g, Le({
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
}), qf = { class: "absolute top-0 right-0 pt-4 pr-4" }, Qf = /* @__PURE__ */ s("span", { class: "sr-only" }, "Close", -1), Kf = /* @__PURE__ */ s("svg", {
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
], -1), Zf = [
  Qf,
  Kf
], Wf = /* @__PURE__ */ ae({
  __name: "CloseButton",
  props: {
    buttonClass: { default: "bg-white dark:bg-black" }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    return (l, n) => (a(), u("div", qf, [
      s("button", {
        type: "button",
        onClick: n[0] || (n[0] = (i) => l.$emit("close")),
        class: x([e.buttonClass, "rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:ring-offset-black"])
      }, Zf, 2)
    ]));
  }
}), Gf = ["id", "aria-labelledby"], Jf = /* @__PURE__ */ s("div", { class: "fixed inset-0" }, null, -1), Xf = { class: "fixed inset-0 overflow-hidden" }, Yf = { class: "flex h-full flex-col bg-white dark:bg-black shadow-xl" }, e1 = { class: "flex min-h-0 flex-1 flex-col overflow-auto" }, t1 = { class: "flex-1" }, l1 = { class: "bg-gray-50 dark:bg-gray-900 px-4 py-6 sm:px-6" }, n1 = { class: "flex items-start justify-between space-x-3" }, s1 = { class: "space-y-1" }, o1 = ["id"], a1 = {
  key: 1,
  class: "text-sm text-gray-500"
}, i1 = { class: "flex h-7 items-center" }, r1 = { class: "flex-shrink-0 border-t border-gray-200 dark:border-gray-700 px-4 py-5 sm:px-6" }, u1 = /* @__PURE__ */ ae({
  __name: "SlideOver",
  props: {
    id: { default: "SlideOver" },
    title: null,
    contentClass: { default: "relative mt-6 flex-1 px-4 sm:px-6" }
  },
  emits: ["done"],
  setup(e, { emit: t }) {
    const l = I(!1), n = I(""), i = {
      entering: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-full", to: "translate-x-0" },
      leaving: { cls: "transform transition ease-in-out duration-500 sm:duration-700", from: "translate-x-0", to: "translate-x-full" }
    };
    Ot(l, () => {
      It(i, n, l.value), l.value || setTimeout(() => t("done"), 700);
    }), l.value = !0;
    const r = () => l.value = !1, d = (c) => {
      c.key === "Escape" && r();
    };
    return nt(() => window.addEventListener("keydown", d)), Jt(() => window.removeEventListener("keydown", d)), (c, m) => {
      const h = W("CloseButton");
      return a(), u("div", {
        id: e.id,
        class: "relative z-10",
        "aria-labelledby": e.id + "-title",
        role: "dialog",
        "aria-modal": "true"
      }, [
        Jf,
        s("div", Xf, [
          s("div", {
            onMousedown: r,
            class: "absolute inset-0 overflow-hidden"
          }, [
            s("div", {
              onMousedown: m[0] || (m[0] = qe(() => {
              }, ["stop"])),
              class: "pointer-events-none fixed inset-y-0 right-0 flex pl-10"
            }, [
              s("div", {
                class: x(["pointer-events-auto w-screen xl:max-w-3xl md:max-w-xl max-w-lg", n.value])
              }, [
                s("div", Yf, [
                  s("div", e1, [
                    s("div", t1, [
                      s("div", l1, [
                        s("div", n1, [
                          s("div", s1, [
                            e.title ? (a(), u("h2", {
                              key: 0,
                              class: "text-lg font-medium text-gray-900 dark:text-gray-50",
                              id: e.id + "-title"
                            }, A(e.title), 9, o1)) : C("", !0),
                            c.$slots.subtitle ? (a(), u("p", a1, [
                              X(c.$slots, "subtitle")
                            ])) : C("", !0)
                          ]),
                          s("div", i1, [
                            ke(h, {
                              "button-class": "bg-gray-50 dark:bg-gray-900",
                              onClose: r
                            })
                          ])
                        ])
                      ]),
                      s("div", {
                        class: x(e.contentClass)
                      }, [
                        X(c.$slots, "default")
                      ], 2)
                    ])
                  ]),
                  s("div", r1, [
                    X(c.$slots, "footer")
                  ])
                ])
              ], 2)
            ], 32)
          ], 32)
        ])
      ], 8, Gf);
    };
  }
}), d1 = ["id", "data-transition-for", "aria-labelledby"], c1 = { class: "fixed inset-0 z-10 overflow-y-auto" }, f1 = { class: "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0" }, m1 = /* @__PURE__ */ s("span", { class: "sr-only" }, "Close", -1), v1 = /* @__PURE__ */ s("svg", {
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
], -1), h1 = [
  m1,
  v1
], g1 = /* @__PURE__ */ ae({
  __name: "ModalDialog",
  props: {
    id: { default: "ModalDialog" },
    modalClass: { default: Wl.modalClass },
    sizeClass: { default: Wl.sizeClass }
  },
  emits: ["done"],
  setup(e, { emit: t }) {
    const l = I(!1), n = I(""), i = {
      entering: { cls: "ease-out duration-300", from: "opacity-0", to: "opacity-100" },
      leaving: { cls: "ease-in duration-200", from: "opacity-100", to: "opacity-0" }
    }, r = I(""), d = {
      entering: { cls: "ease-out duration-300", from: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95", to: "opacity-100 translate-y-0 sm:scale-100" },
      leaving: { cls: "ease-in duration-200", from: "opacity-100 translate-y-0 sm:scale-100", to: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" }
    };
    Ot(l, () => {
      It(i, n, l.value), It(d, r, l.value), l.value || setTimeout(() => t("done"), 200);
    }), l.value = !0;
    const c = () => l.value = !1;
    Xt("ModalProvider", {
      openModal: p
    });
    const h = I(), g = I();
    function p($, P) {
      h.value = $, g.value = P;
    }
    async function v($) {
      g.value && g.value($), h.value = void 0, g.value = void 0;
    }
    const y = ($) => {
      $.key === "Escape" && c();
    };
    return nt(() => window.addEventListener("keydown", y)), Jt(() => window.removeEventListener("keydown", y)), ($, P) => {
      var ee;
      const J = W("ModalLookup");
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
        s("div", c1, [
          s("div", f1, [
            s("div", {
              class: x([e.modalClass, e.sizeClass, r.value]),
              onMousedown: P[0] || (P[0] = qe(() => {
              }, ["stop"]))
            }, [
              s("div", null, [
                s("div", { class: "hidden sm:block absolute top-0 right-0 pt-4 pr-4 z-10" }, [
                  s("button", {
                    type: "button",
                    onClick: c,
                    class: "bg-white dark:bg-black rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:ring-offset-black"
                  }, h1)
                ]),
                X($.$slots, "default")
              ])
            ], 34)
          ])
        ]),
        ((ee = h.value) == null ? void 0 : ee.name) == "ModalLookup" && h.value.ref ? (a(), le(J, {
          key: 0,
          "ref-info": h.value.ref,
          onDone: v
        }, null, 8, ["ref-info"])) : C("", !0)
      ], 40, d1);
    };
  }
}), p1 = {
  class: "pt-2 overflow-auto",
  style: { "min-height": "620px" }
}, y1 = { class: "mt-3 pl-5 flex flex-wrap items-center" }, b1 = { class: "hidden sm:block text-xl leading-6 font-medium text-gray-900 dark:text-gray-50 mr-3" }, w1 = { class: "hidden md:inline" }, x1 = { class: "flex pb-1 sm:pb-0" }, k1 = ["title"], $1 = /* @__PURE__ */ s("svg", {
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
], -1), C1 = [
  $1
], _1 = ["disabled"], L1 = /* @__PURE__ */ s("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ s("path", {
    d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6l6 6zM6 6h2v12H6z",
    fill: "currentColor"
  })
], -1), V1 = [
  L1
], S1 = ["disabled"], M1 = /* @__PURE__ */ s("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ s("path", {
    d: "M15.41 7.41L14 6l-6 6l6 6l1.41-1.41L10.83 12z",
    fill: "currentColor"
  })
], -1), A1 = [
  M1
], T1 = ["disabled"], I1 = /* @__PURE__ */ s("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ s("path", {
    d: "M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z",
    fill: "currentColor"
  })
], -1), F1 = [
  I1
], D1 = ["disabled"], P1 = /* @__PURE__ */ s("svg", {
  class: "w-8 h-8",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ s("path", {
    d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6l-6-6zM16 6h2v12h-2z",
    fill: "currentColor"
  })
], -1), O1 = [
  P1
], j1 = {
  key: 0,
  class: "flex pb-1 sm:pb-0"
}, B1 = { class: "px-4 text-lg text-black dark:text-white" }, R1 = { key: 0 }, H1 = { key: 1 }, E1 = /* @__PURE__ */ s("span", { class: "hidden xl:inline" }, " Showing Results ", -1), z1 = { key: 2 }, N1 = {
  key: 1,
  class: "pl-2"
}, U1 = /* @__PURE__ */ s("svg", {
  class: "w-5 h-5",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ s("path", {
    fill: "currentColor",
    d: "M6.78 2.72a.75.75 0 0 1 0 1.06L4.56 6h8.69a7.75 7.75 0 1 1-7.75 7.75a.75.75 0 0 1 1.5 0a6.25 6.25 0 1 0 6.25-6.25H4.56l2.22 2.22a.75.75 0 1 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.5a.75.75 0 0 1 1.06 0Z"
  })
], -1), q1 = [
  U1
], Q1 = { class: "flex pb-1 sm:pb-0" }, K1 = {
  key: 0,
  class: "pl-2"
}, Z1 = /* @__PURE__ */ s("svg", {
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
], -1), W1 = { class: "mr-1" }, G1 = {
  key: 0,
  class: "h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-gray-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, J1 = /* @__PURE__ */ s("path", {
  "fill-rule": "evenodd",
  d: "M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z",
  "clip-rule": "evenodd"
}, null, -1), X1 = [
  J1
], Y1 = {
  key: 1,
  class: "h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-gray-500",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true"
}, em = /* @__PURE__ */ s("path", {
  "fill-rule": "evenodd",
  d: "M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z",
  "clip-rule": "evenodd"
}, null, -1), tm = [
  em
], lm = { key: 1 }, nm = { key: 4 }, sm = { key: 0 }, om = {
  key: 0,
  class: "cursor-pointer flex justify-between items-center hover:text-gray-900 dark:hover:text-gray-50"
}, am = { class: "mr-1 select-none" }, im = {
  key: 1,
  class: "flex justify-between items-center"
}, rm = { class: "mr-1 select-none" }, um = /* @__PURE__ */ ae({
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
    const l = e, n = Xl(), { config: i } = Ct(), { metadataApi: r, filterDefinitions: d } = ot(), c = Ne("client"), m = i.value.storage, h = f(() => l.toolbarButtonClass ?? me.toolbarButtonClass), g = f(() => d.value), p = 25, v = I({ take: p }), y = I(new et()), $ = I(l.skip), P = I(!1), J = I(), ee = (D) => typeof D == "string" ? D.split(",") : D || [];
    function S(D, q) {
      return me.getTableRowClass("fullWidth", q, !1, !0);
    }
    function H() {
      let D = ee(l.selectedColumns);
      return D.length > 0 ? D : [];
    }
    const E = f(() => st(l.refInfo.model)), Q = f(() => {
      let q = H().map((ge) => ge.toLowerCase());
      const de = Ge(E.value);
      return q.length > 0 ? q.map((ge) => de.find((Ae) => Ae.name.toLowerCase() === ge)).filter((ge) => ge != null) : de;
    }), F = f(() => {
      let D = Q.value.map((de) => de.name), q = ee(v.value.selectedColumns).map((de) => de.toLowerCase());
      return q.length > 0 ? D.filter((de) => q.includes(de.toLowerCase())) : D;
    }), M = f(() => v.value.take ?? p), B = f(() => y.value.response ? pe(y.value.response, "results") : []), L = f(() => {
      var D;
      return ((D = y.value.response) == null ? void 0 : D.total) ?? B.value.length ?? 0;
    }), z = f(() => $.value > 0), K = f(() => $.value > 0), se = f(() => B.value.length >= M.value), G = f(() => B.value.length >= M.value), V = I([]), R = f(() => V.value.some((D) => D.settings.filters.length > 0 || !!D.settings.sort)), b = f(() => V.value.map((D) => D.settings.filters.length).reduce((D, q) => D + q, 0)), U = f(() => el(E.value)), k = f(() => {
      var D;
      return (D = r.value) == null ? void 0 : D.operations.find((q) => {
        var de;
        return ((de = q.dataModel) == null ? void 0 : de.name) == l.refInfo.model && He.isAnyQuery(q);
      });
    }), w = I(), O = I(!1), ie = I(), N = () => `${l.id}/ApiPrefs/${l.refInfo.model}`, oe = (D) => `Column/${l.id}:${l.refInfo.model}.${D}`;
    async function j(D) {
      $.value += D, $.value < 0 && ($.value = 0);
      var q = Math.floor(L.value / M.value) * M.value;
      $.value > q && ($.value = q), await Ve();
    }
    async function ce(D, q) {
      t("done", D);
    }
    function he() {
      t("done", null);
    }
    function re(D, q) {
      var ge, Ae, Oe;
      let de = q.target;
      if ((de == null ? void 0 : de.tagName) !== "TD") {
        let Ee = (ge = de == null ? void 0 : de.closest("TABLE")) == null ? void 0 : ge.getBoundingClientRect(), Te = V.value.find((Re) => Re.name.toLowerCase() == D.toLowerCase());
        if (Te && Ee) {
          let Re = 318, Fe = (((Ae = q.target) == null ? void 0 : Ae.tagName) === "DIV" ? q.target : (Oe = q.target) == null ? void 0 : Oe.closest("DIV")).getBoundingClientRect(), Je = Re + 25;
          ie.value = {
            column: Te,
            topLeft: {
              x: Math.max(Math.floor(Fe.x + 25), Je),
              y: Math.floor(115)
            }
          };
        }
      }
    }
    function fe() {
      ie.value = null;
    }
    async function Z(D) {
      var de;
      let q = (de = ie.value) == null ? void 0 : de.column;
      q && (q.settings = D, m.setItem(oe(q.name), JSON.stringify(q.settings)), await Ve()), ie.value = null;
    }
    async function Y(D) {
      m.setItem(oe(D.name), JSON.stringify(D.settings)), await Ve();
    }
    async function we(D) {
      O.value = !1, v.value = D, m.setItem(N(), JSON.stringify(D)), await Ve();
    }
    async function Ve() {
      await be(Pe());
    }
    async function be(D) {
      const q = k.value;
      if (!q) {
        console.error(`No Query API was found for ${l.refInfo.model}`);
        return;
      }
      let de = Zt(q, D), ge = Wn((Ee) => {
        y.value.response = y.value.error = void 0, P.value = Ee;
      }), Ae = await c.api(de);
      ge(), At(() => y.value = Ae);
      let Oe = pe(Ae.response, "results") || [];
      !Ae.succeeded || Oe.label == 0;
    }
    function Pe() {
      let D = {
        include: "total",
        take: M.value
      }, q = ee(v.value.selectedColumns || l.selectedColumns);
      if (q.length > 0) {
        let ge = U.value;
        ge && q.includes(ge.name) && (q = [ge.name, ...q]), D.fields = q.join(",");
      }
      let de = [];
      return V.value.forEach((ge) => {
        ge.settings.sort && de.push((ge.settings.sort === "DESC" ? "-" : "") + ge.name), ge.settings.filters.forEach((Ae) => {
          let Oe = Ae.key.replace("%", ge.name);
          D[Oe] = Ae.value;
        });
      }), typeof D.skip > "u" && $.value > 0 && (D.skip = $.value), de.length > 0 && (D.orderBy = de.join(",")), D;
    }
    async function Ie() {
      V.value.forEach((D) => {
        D.settings = { filters: [] }, m.removeItem(oe(D.name));
      }), await Ve();
    }
    return nt(async () => {
      const D = l.prefs || gl(m.getItem(N()));
      D && (v.value = D), V.value = Q.value.map((q) => ({
        name: q.name,
        type: q.type,
        meta: q,
        settings: Object.assign(
          {
            filters: []
          },
          gl(m.getItem(oe(q.name)))
        )
      })), isNaN(l.skip) || ($.value = l.skip), await Ve();
    }), (D, q) => {
      const de = W("ErrorSummary"), ge = W("Loading"), Ae = W("SettingsIcons"), Oe = W("DataGrid"), Ee = W("ModalDialog");
      return a(), u(Se, null, [
        e.refInfo ? (a(), le(Ee, {
          key: 0,
          ref_key: "modalDialog",
          ref: w,
          id: e.id,
          onDone: he
        }, {
          default: xe(() => [
            s("div", p1, [
              s("div", y1, [
                s("h3", b1, [
                  Ce(" Select "),
                  s("span", w1, A(o(Be)(e.refInfo.model)), 1)
                ]),
                s("div", x1, [
                  e.showPreferences ? (a(), u("button", {
                    key: 0,
                    type: "button",
                    class: "pl-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400",
                    title: `${e.refInfo.model} Preferences`,
                    onClick: q[0] || (q[0] = (Te) => O.value = !O.value)
                  }, C1, 8, k1)) : C("", !0),
                  e.showPagingNav ? (a(), u("button", {
                    key: 1,
                    type: "button",
                    class: x(["pl-2", o(z) ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                    title: "First page",
                    disabled: !o(z),
                    onClick: q[1] || (q[1] = (Te) => j(-o(L)))
                  }, V1, 10, _1)) : C("", !0),
                  e.showPagingNav ? (a(), u("button", {
                    key: 2,
                    type: "button",
                    class: x(["pl-2", o(K) ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                    title: "Previous page",
                    disabled: !o(K),
                    onClick: q[2] || (q[2] = (Te) => j(-o(M)))
                  }, A1, 10, S1)) : C("", !0),
                  e.showPagingNav ? (a(), u("button", {
                    key: 3,
                    type: "button",
                    class: x(["pl-2", o(se) ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                    title: "Next page",
                    disabled: !o(se),
                    onClick: q[3] || (q[3] = (Te) => j(o(M)))
                  }, F1, 10, T1)) : C("", !0),
                  e.showPagingNav ? (a(), u("button", {
                    key: 4,
                    type: "button",
                    class: x(["pl-2", o(G) ? "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" : "text-gray-400 dark:text-gray-500"]),
                    title: "Last page",
                    disabled: !o(G),
                    onClick: q[4] || (q[4] = (Te) => j(o(L)))
                  }, O1, 10, D1)) : C("", !0)
                ]),
                e.showPagingInfo ? (a(), u("div", j1, [
                  s("div", B1, [
                    P.value ? (a(), u("span", R1, "Querying...")) : C("", !0),
                    o(B).length ? (a(), u("span", H1, [
                      E1,
                      Ce(" " + A($.value + 1) + " - " + A(Math.min($.value + o(B).length, o(L))) + " ", 1),
                      s("span", null, " of " + A(o(L)), 1)
                    ])) : y.value.completed ? (a(), u("span", z1, "No Results")) : C("", !0)
                  ])
                ])) : C("", !0),
                o(R) && e.showResetPreferences ? (a(), u("div", N1, [
                  s("button", {
                    type: "button",
                    onClick: Ie,
                    title: "Reset Preferences & Filters",
                    class: x(o(h))
                  }, q1, 2)
                ])) : C("", !0),
                s("div", Q1, [
                  e.showFiltersView && o(b) > 0 ? (a(), u("div", K1, [
                    s("button", {
                      type: "button",
                      onClick: q[5] || (q[5] = (Te) => J.value = J.value == "filters" ? null : "filters"),
                      class: x(o(h)),
                      "aria-expanded": "false"
                    }, [
                      Z1,
                      s("span", W1, A(o(b)) + " " + A(o(b) == 1 ? "Filter" : "Filters"), 1),
                      J.value != "filters" ? (a(), u("svg", G1, X1)) : (a(), u("svg", Y1, tm))
                    ], 2)
                  ])) : C("", !0)
                ])
              ]),
              J.value == "filters" ? (a(), le($n, {
                key: 0,
                class: "border-y border-gray-200 dark:border-gray-800 py-8 my-2",
                definitions: o(g),
                columns: V.value,
                onDone: q[6] || (q[6] = (Te) => J.value = null),
                onChange: Y
              }, null, 8, ["definitions", "columns"])) : C("", !0),
              ie.value ? (a(), u("div", lm, [
                ke(kn, {
                  definitions: o(g),
                  column: ie.value.column,
                  "top-left": ie.value.topLeft,
                  onDone: fe,
                  onSave: Z
                }, null, 8, ["definitions", "column", "top-left"])
              ])) : C("", !0),
              y.value.error ? (a(), le(de, {
                key: 2,
                status: y.value.error
              }, null, 8, ["status"])) : P.value ? (a(), le(ge, { key: 3 })) : (a(), u("div", nm, [
                o(B).length ? (a(), u("div", sm, [
                  ke(Oe, {
                    id: e.id,
                    items: o(B),
                    type: e.refInfo.model,
                    "selected-columns": o(F),
                    onFiltersChanged: Ve,
                    tableStyle: "fullWidth",
                    rowClass: S,
                    onRowSelected: ce,
                    onHeaderSelected: re
                  }, Yl({
                    header: xe(({ column: Te, label: Re }) => {
                      var Ke;
                      return [
                        e.allowFiltering && (!l.canFilter || l.canFilter(Te)) ? (a(), u("div", om, [
                          s("span", am, A(Re), 1),
                          ke(Ae, {
                            column: V.value.find((Fe) => Fe.name.toLowerCase() === Te.toLowerCase()),
                            "is-open": ((Ke = ie.value) == null ? void 0 : Ke.column.name) === Te
                          }, null, 8, ["column", "is-open"])
                        ])) : (a(), u("div", im, [
                          s("span", rm, A(Re), 1)
                        ]))
                      ];
                    }),
                    _: 2
                  }, [
                    Me(Object.keys(o(n)), (Te) => ({
                      name: Te,
                      fn: xe((Re) => [
                        X(D.$slots, Te, Tt(vl(Re)))
                      ])
                    }))
                  ]), 1032, ["id", "items", "type", "selected-columns"])
                ])) : C("", !0)
              ]))
            ])
          ]),
          _: 3
        }, 8, ["id"])) : C("", !0),
        O.value ? (a(), le(Cn, {
          key: 1,
          columns: o(Q),
          prefs: v.value,
          onDone: q[7] || (q[7] = (Te) => O.value = !1),
          onSave: we
        }, null, 8, ["columns", "prefs"])) : C("", !0)
      ], 64);
    };
  }
}), dm = { class: "sm:hidden" }, cm = ["for"], fm = ["id", "name"], mm = ["value"], vm = { class: "hidden sm:block" }, hm = { class: "border-b border-gray-200" }, gm = {
  class: "-mb-px flex",
  "aria-label": "Tabs"
}, pm = ["onClick"], ym = /* @__PURE__ */ ae({
  __name: "Tabs",
  props: {
    tabs: null,
    id: { default: "tabs" },
    param: { default: "tab" },
    label: { type: Function, default: (e) => Be(e) },
    selected: null,
    tabClass: null,
    bodyClass: { default: "p-4" },
    url: { type: Boolean, default: !0 }
  },
  setup(e) {
    const t = e, l = f(() => Object.keys(t.tabs)), n = (g) => t.label ? t.label(g) : Be(g), i = f(() => t.id || "tabs"), r = f(() => t.param || "tab"), d = I();
    function c(g) {
      if (d.value = g, t.url) {
        const p = l.value[0];
        tn({ tab: g === p ? void 0 : g });
      }
    }
    function m(g) {
      return d.value === g;
    }
    const h = f(() => `${100 / Object.keys(t.tabs).length}%`);
    return nt(() => {
      if (d.value = Object.keys(t.tabs)[0], t.url) {
        const p = Hl(location.search)[r.value];
        p && (d.value = p);
      }
    }), (g, p) => (a(), u("div", null, [
      s("div", dm, [
        s("label", {
          for: o(i),
          class: "sr-only"
        }, "Select a tab", 8, cm),
        s("select", {
          id: o(i),
          name: o(i),
          class: "block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500",
          onChange: p[0] || (p[0] = (v) => {
            var y;
            return c((y = v.target) == null ? void 0 : y.value);
          })
        }, [
          (a(!0), u(Se, null, Me(o(l), (v) => (a(), u("option", {
            key: v,
            value: v
          }, A(n(v)), 9, mm))), 128))
        ], 40, fm)
      ]),
      s("div", vm, [
        s("div", hm, [
          s("nav", gm, [
            (a(!0), u(Se, null, Me(o(l), (v) => (a(), u("a", {
              href: "#",
              onClick: qe((y) => c(v), ["prevent"]),
              style: Gl({ width: o(h) }),
              class: x([m(v) ? "border-indigo-500 text-indigo-600 py-4 px-1 text-center border-b-2 font-medium text-sm" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 py-4 px-1 text-center border-b-2 font-medium text-sm", e.tabClass])
            }, A(n(v)), 15, pm))), 256))
          ])
        ])
      ]),
      s("div", {
        class: x(e.bodyClass)
      }, [
        (a(), le(Qn(e.tabs[d.value])))
      ], 2)
    ]));
  }
}), bm = /* @__PURE__ */ s("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-4 w-4 text-gray-400",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32"
}, [
  /* @__PURE__ */ s("path", {
    fill: "currentColor",
    d: "M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"
  })
], -1), wm = [
  bm
], xm = /* @__PURE__ */ s("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-4 w-4 text-indigo-600",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 32 32"
}, [
  /* @__PURE__ */ s("path", {
    fill: "currentColor",
    d: "M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"
  })
], -1), km = [
  xm
], $m = /* @__PURE__ */ ae({
  __name: "DarkModeToggle",
  setup(e) {
    const t = typeof document < "u" ? document.querySelector("html") : null;
    let l = I(t == null ? void 0 : t.classList.contains("dark"));
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
        }, wm, 2),
        s("span", {
          class: x(`${o(l) ? "opacity-0 ease-out duration-100" : "opacity-100 ease-in duration-200"} absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`),
          "aria-hidden": "true"
        }, km, 2)
      ], 2)
    ]));
  }
}), Cm = { key: 0 }, _m = {
  key: 1,
  class: "min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8"
}, Lm = { class: "sm:mx-auto sm:w-full sm:max-w-md" }, Vm = { class: "mt-6 text-center text-3xl font-extrabold text-gray-900" }, Sm = {
  key: 0,
  class: "mt-4 text-center text-sm text-gray-600"
}, Mm = { class: "relative z-0 inline-flex shadow-sm rounded-md" }, Am = ["onClick"], Tm = { class: "mt-8 sm:mx-auto sm:w-full sm:max-w-md" }, Im = { class: "bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10" }, Fm = ["onSubmit"], Dm = { class: "mt-8" }, Pm = {
  key: 1,
  class: "mt-6"
}, Om = /* @__PURE__ */ yl('<div class="relative"><div class="absolute inset-0 flex items-center"><div class="w-full border-t border-gray-300"></div></div><div class="relative flex justify-center text-sm"><span class="px-2 bg-white text-gray-500"> Or continue with </span></div></div>', 1), jm = { class: "mt-6 grid grid-cols-3 gap-3" }, Bm = ["href", "title"], Rm = {
  key: 1,
  class: "h-5 w-5 text-gray-700",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 32"
}, Hm = /* @__PURE__ */ s("path", {
  d: "M16 8a5 5 0 1 0 5 5a5 5 0 0 0-5-5z",
  fill: "currentColor"
}, null, -1), Em = /* @__PURE__ */ s("path", {
  d: "M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2zm7.992 22.926A5.002 5.002 0 0 0 19 20h-6a5.002 5.002 0 0 0-4.992 4.926a12 12 0 1 1 15.985 0z",
  fill: "currentColor"
}, null, -1), zm = [
  Hm,
  Em
], Nm = /* @__PURE__ */ ae({
  __name: "SignIn",
  props: {
    provider: null,
    title: { default: "Sign In" },
    tabs: { type: [Boolean, String], default: !0 },
    oauth: { type: [Boolean, String], default: !0 }
  },
  emits: ["login"],
  setup(e, { emit: t }) {
    const l = e, { getMetadata: n, createDto: i } = ot(), r = Sl(), { signIn: d } = xn(), c = n({ assert: !0 }), m = c.plugins.auth, h = document.baseURI, g = c.app.baseUrl, p = I(i("Authenticate")), v = I(new et()), y = I(l.provider);
    nt(() => {
      m == null || m.authProviders.map((L) => L.formLayout).filter((L) => L).forEach((L) => L.forEach((z) => p.value[z.id] = ""));
    });
    const $ = f(() => (m == null ? void 0 : m.authProviders.filter((L) => L.formLayout)) || []), P = f(() => $.value[0] || {}), J = f(() => $.value[Math.max($.value.length - 1, 0)] || {}), ee = f(() => (y.value ? m == null ? void 0 : m.authProviders.find((L) => L.name === y.value) : null) ?? P.value), S = (L) => L === !1 || L === "false";
    function H(L) {
      return L.label || L.navItem && L.navItem.label;
    }
    const E = f(() => {
      var L;
      return (((L = ee.value) == null ? void 0 : L.formLayout) || []).map((z) => {
        var K, se;
        return Object.assign({}, z, {
          type: (K = z.type) == null ? void 0 : K.toLowerCase(),
          autocomplete: z.autocomplete || (((se = z.type) == null ? void 0 : se.toLowerCase()) === "password" ? "current-password" : void 0) || (z.id.toLowerCase() === "username" ? "username" : void 0),
          css: Object.assign({ field: "col-span-12" }, z.css)
        });
      });
    }), Q = f(() => S(l.oauth) ? [] : (m == null ? void 0 : m.authProviders.filter((L) => L.type === "oauth")) || []), F = f(() => {
      let L = po(
        m == null ? void 0 : m.authProviders.filter((K) => K.formLayout && K.formLayout.length > 0),
        (K, se) => {
          let G = H(se) || lt(se.name);
          K[G] = se.name === P.value.name ? "" : se.name;
        }
      );
      const z = ee.value;
      return z && S(l.tabs) && (L = { [H(z) || lt(z.name)]: z }), L;
    }), M = f(() => {
      let L = E.value.map((z) => z.id).filter((z) => z);
      return v.value.summaryMessage(L);
    });
    async function B() {
      if (p.value.provider = ee.value.name, v.value = await r.api(p.value), v.value.succeeded) {
        const L = v.value.response;
        d(L), t("login", L), v.value = new et(), p.value = i("Authenticate");
      }
    }
    return (L, z) => {
      const K = W("ErrorSummary"), se = W("AutoFormFields"), G = W("PrimaryButton"), V = W("Icon"), R = to("href");
      return o(m) ? (a(), u("div", _m, [
        s("div", Lm, [
          s("h2", Vm, A(e.title), 1),
          Object.keys(o(F)).length > 1 ? (a(), u("p", Sm, [
            s("span", Mm, [
              (a(!0), u(Se, null, Me(o(F), (b, U) => wt((a(), u("a", {
                onClick: (k) => y.value = b,
                class: x([
                  b === "" || b === o(P).name ? "rounded-l-md" : b === o(J).name ? "rounded-r-md -ml-px" : "-ml-px",
                  y.value === b ? "z-10 outline-none ring-1 ring-indigo-500 border-indigo-500" : "",
                  "cursor-pointer relative inline-flex items-center px-4 py-1 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                ])
              }, [
                Ce(A(U), 1)
              ], 10, Am)), [
                [R, { provider: b }]
              ])), 256))
            ])
          ])) : C("", !0)
        ]),
        s("div", Tm, [
          o(M) ? (a(), le(K, {
            key: 0,
            class: "mb-3",
            errorSummary: o(M)
          }, null, 8, ["errorSummary"])) : C("", !0),
          s("div", Im, [
            o(E).length ? (a(), u("form", {
              key: 0,
              onSubmit: qe(B, ["prevent"])
            }, [
              ke(se, {
                modelValue: p.value,
                formLayout: o(E),
                api: v.value,
                hideSummary: !0,
                "divide-class": "",
                "space-class": "space-y-6"
              }, null, 8, ["modelValue", "formLayout", "api"]),
              s("div", Dm, [
                ke(G, { class: "w-full" }, {
                  default: xe(() => [
                    Ce("Sign In")
                  ]),
                  _: 1
                })
              ])
            ], 40, Fm)) : C("", !0),
            o(Q).length ? (a(), u("div", Pm, [
              Om,
              s("div", jm, [
                (a(!0), u(Se, null, Me(o(Q), (b) => (a(), u("div", null, [
                  s("a", {
                    href: o(g) + b.navItem.href + "?continue=" + o(h),
                    title: H(b),
                    class: "w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  }, [
                    b.icon ? (a(), le(V, {
                      key: 0,
                      image: b.icon,
                      class: "h-5 w-5 text-gray-700"
                    }, null, 8, ["image"])) : (a(), u("svg", Rm, zm))
                  ], 8, Bm)
                ]))), 256))
              ])
            ])) : C("", !0)
          ])
        ])
      ])) : (a(), u("div", Cm, "No Auth Plugin"));
    };
  }
}), Um = ["for"], qm = {
  key: 1,
  class: "border border-gray-200 flex justify-between"
}, Qm = { class: "p-2 flex flex-wrap gap-x-4" }, Km = /* @__PURE__ */ s("title", null, "Bold text (CTRL+B)", -1), Zm = /* @__PURE__ */ s("path", {
  fill: "currentColor",
  d: "M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79c0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79c0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"
}, null, -1), Wm = [
  Km,
  Zm
], Gm = /* @__PURE__ */ s("title", null, "Italics (CTRL+I)", -1), Jm = /* @__PURE__ */ s("path", {
  fill: "currentColor",
  d: "M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4h-8z"
}, null, -1), Xm = [
  Gm,
  Jm
], Ym = /* @__PURE__ */ s("title", null, "Insert Link (CTRL+K)", -1), ev = /* @__PURE__ */ s("path", {
  fill: "currentColor",
  d: "M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7a5 5 0 0 0-5 5a5 5 0 0 0 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1M8 13h8v-2H8v2m9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1c0 1.71-1.39 3.1-3.1 3.1h-4V17h4a5 5 0 0 0 5-5a5 5 0 0 0-5-5Z"
}, null, -1), tv = [
  Ym,
  ev
], lv = /* @__PURE__ */ s("title", null, "Blockquote (CTRL+Q)", -1), nv = /* @__PURE__ */ s("path", {
  fill: "currentColor",
  d: "m15 17l2-4h-4V6h7v7l-2 4h-3Zm-9 0l2-4H4V6h7v7l-2 4H6Z"
}, null, -1), sv = [
  lv,
  nv
], ov = /* @__PURE__ */ s("title", null, "Insert Image (CTRL+SHIFT+L)", -1), av = /* @__PURE__ */ s("path", {
  fill: "currentColor",
  d: "M2.992 21A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992ZM20 15V5H4v14L14 9l6 6Zm0 2.828l-6-6L6.828 19H20v-1.172ZM8 11a2 2 0 1 1 0-4a2 2 0 0 1 0 4Z"
}, null, -1), iv = [
  ov,
  av
], rv = /* @__PURE__ */ s("title", null, "Insert Code (CTRL+<)", -1), uv = /* @__PURE__ */ s("path", {
  fill: "currentColor",
  d: "m8 18l-6-6l6-6l1.425 1.425l-4.6 4.6L9.4 16.6L8 18Zm8 0l-1.425-1.425l4.6-4.6L14.6 7.4L16 6l6 6l-6 6Z"
}, null, -1), dv = [
  rv,
  uv
], cv = /* @__PURE__ */ s("title", null, "H2 Heading (CTRL+H)", -1), fv = /* @__PURE__ */ s("path", {
  fill: "currentColor",
  d: "M7 20V7H2V4h13v3h-5v13H7Zm9 0v-8h-3V9h9v3h-3v8h-3Z"
}, null, -1), mv = [
  cv,
  fv
], vv = /* @__PURE__ */ s("title", null, "Numbered List (ALT+1)", -1), hv = /* @__PURE__ */ s("path", {
  fill: "currentColor",
  d: "M3 22v-1.5h2.5v-.75H4v-1.5h1.5v-.75H3V16h3q.425 0 .713.288T7 17v1q0 .425-.288.713T6 19q.425 0 .713.288T7 20v1q0 .425-.288.713T6 22H3Zm0-7v-2.75q0-.425.288-.713T4 11.25h1.5v-.75H3V9h3q.425 0 .713.288T7 10v1.75q0 .425-.288.713T6 12.75H4.5v.75H7V15H3Zm1.5-7V3.5H3V2h3v6H4.5ZM9 19v-2h12v2H9Zm0-6v-2h12v2H9Zm0-6V5h12v2H9Z"
}, null, -1), gv = [
  vv,
  hv
], pv = /* @__PURE__ */ s("title", null, "Bulleted List (ALT+-)", -1), yv = /* @__PURE__ */ s("path", {
  fill: "currentColor",
  d: "M9 19v-2h12v2H9Zm0-6v-2h12v2H9Zm0-6V5h12v2H9ZM5 20q-.825 0-1.413-.588T3 18q0-.825.588-1.413T5 16q.825 0 1.413.588T7 18q0 .825-.588 1.413T5 20Zm0-6q-.825 0-1.413-.588T3 12q0-.825.588-1.413T5 10q.825 0 1.413.588T7 12q0 .825-.588 1.413T5 14Zm0-6q-.825 0-1.413-.588T3 6q0-.825.588-1.413T5 4q.825 0 1.413.588T7 6q0 .825-.588 1.413T5 8Z"
}, null, -1), bv = [
  pv,
  yv
], wv = /* @__PURE__ */ s("title", null, "Strike Through (ALT+S)", -1), xv = /* @__PURE__ */ s("path", {
  fill: "currentColor",
  d: "M10 19h4v-3h-4v3zM5 4v3h5v3h4V7h5V4H5zM3 14h18v-2H3v2z"
}, null, -1), kv = [
  wv,
  xv
], $v = /* @__PURE__ */ s("title", null, "Undo (CTRL+Z)", -1), Cv = /* @__PURE__ */ s("path", {
  fill: "currentColor",
  d: "M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88c3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"
}, null, -1), _v = [
  $v,
  Cv
], Lv = /* @__PURE__ */ s("title", null, "Redo (CTRL+SHIFT+Z)", -1), Vv = /* @__PURE__ */ s("path", {
  fill: "currentColor",
  d: "M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16a8.002 8.002 0 0 1 7.6-5.5c1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"
}, null, -1), Sv = [
  Lv,
  Vv
], Mv = {
  key: 0,
  class: "p-2 flex flex-wrap gap-x-4"
}, Av = ["href"], Tv = /* @__PURE__ */ s("path", {
  fill: "currentColor",
  d: "M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5c0-2.21-1.79-4-4-4z"
}, null, -1), Iv = [
  Tv
], Fv = { class: "" }, Dv = ["name", "id", "label", "value", "rows", "disabled", "onKeydown"], Pv = ["id"], Ov = ["id"], jv = /* @__PURE__ */ ae({
  __name: "MarkdownInput",
  props: {
    status: null,
    id: null,
    inputClass: null,
    label: null,
    labelClass: null,
    help: null,
    placeholder: null,
    modelValue: null,
    counter: { type: Boolean },
    rows: null,
    errorMessages: null,
    lang: null,
    autoFocus: { type: Boolean },
    disabled: { type: Boolean },
    helpUrl: { default: "https://guides.github.com/features/mastering-markdown/" },
    hide: null
  },
  emits: ["update:modelValue", "close"],
  setup(e, { emit: t }) {
    const l = e;
    let n = [], i = [], r = Ne("ApiState", void 0);
    const d = f(() => ft.call({ responseStatus: l.status ?? (r == null ? void 0 : r.error.value) }, l.id)), c = f(() => l.label ?? Be(lt(l.id))), m = "bold,italics,link,image,blockquote,code,heading,orderedList,unorderedList,strikethrough,undo,redo,help".split(","), h = f(() => l.hide ? St(m, l.hide) : St(m, []));
    function g(k) {
      return h.value[k];
    }
    const p = f(() => ["shadow-sm font-mono" + tt.base.replace("rounded-md", ""), d.value ? "text-red-900 focus:ring-red-500 focus:border-red-500 border-red-300" : "text-gray-900 " + tt.valid, l.inputClass]), v = "cursor-pointer text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400", y = I(), $ = () => y.value.selectionStart !== y.value.selectionEnd;
    function P() {
      const k = y.value;
      return k.value.substring(k.selectionStart, k.selectionEnd) || "";
    }
    function J() {
      const k = y.value, w = k.value, O = k.selectionStart, ie = w.substring(O, k.selectionEnd) || "", N = w.substring(0, O), oe = N.lastIndexOf(`
`);
      return {
        value: w,
        sel: ie,
        selPos: O,
        beforeSel: N,
        afterSel: w.substring(O),
        prevCRPos: oe,
        beforeCR: oe >= 0 ? N.substring(0, oe + 1) : "",
        afterCR: oe >= 0 ? N.substring(oe + 1) : ""
      };
    }
    function ee({ value: k, selectionStart: w, selectionEnd: O }) {
      O == null && (O = w), t("update:modelValue", k), At(() => {
        y.value.focus(), y.value.setSelectionRange(w, O);
      });
    }
    function S(k, w, O = "", { selectionAtEnd: ie, offsetStart: N, offsetEnd: oe, filterValue: j, filterSelection: ce } = {}) {
      const he = y.value;
      let re = he.value, fe = he.selectionEnd;
      n.push({ value: re, selectionStart: he.selectionStart, selectionEnd: he.selectionEnd }), i = [];
      const Z = he.selectionStart, Y = he.selectionEnd;
      let we = re.substring(0, Z), Ve = re.substring(Y);
      const be = k && we.endsWith(k) && Ve.startsWith(w);
      if (Z == Y) {
        if (be ? (re = we.substring(0, we.length - k.length) + Ve.substring(w.length), fe += -w.length) : (re = we + k + O + w + Ve, fe += k.length, N = 0, oe = (O == null ? void 0 : O.length) || 0, ie && (fe += oe, oe = 0)), j) {
          var Ie = { pos: fe };
          re = j(re, Ie), fe = Ie.pos;
        }
      } else {
        var D = re.substring(Z, Y);
        ce && (D = ce(D)), be ? (re = we.substring(0, we.length - k.length) + D + Ve.substring(w.length), N = -D.length - k.length, oe = D.length) : (re = we + k + D + w + Ve, N ? fe += (k + w).length : (fe = Z, N = k.length, oe = D.length));
      }
      t("update:modelValue", re), At(() => {
        he.focus(), N = fe + (N || 0), oe = (N || 0) + (oe || 0), he.setSelectionRange(N, oe);
      });
    }
    const H = () => S("**", "**", "bold"), E = () => S("_", "_", "italics"), Q = () => S("~~", "~~", "strikethrough"), F = () => S("[", "](https://)", "", { offsetStart: -9, offsetEnd: 8 }), M = () => S(`
> `, `
`, "Blockquote", {}), B = () => S("![](", ")");
    function L(k) {
      const w = P();
      if (w && !k.shiftKey)
        S("`", "`", "code");
      else {
        const O = l.lang || "js";
        w.indexOf(`
`) === -1 ? S("\n```" + O + `
`, "\n```\n", "// code") : S("```" + O + `
`, "```\n", "");
      }
    }
    function z() {
      if ($()) {
        let { sel: k, selPos: w, beforeSel: O, afterSel: ie, prevCRPos: N, beforeCR: oe, afterCR: j } = J();
        if (k.indexOf(`
`) === -1)
          S(`
 1. `, `
`);
        else if (!k.startsWith(" 1. ")) {
          let re = 1;
          S("", "", " - ", {
            selectionAtEnd: !0,
            filterSelection: (fe) => " 1. " + fe.replace(/\n$/, "").replace(/\n/g, (Z) => `
 ${++re}. `) + `
`
          });
        } else
          S("", "", "", {
            filterValue: (re, fe) => {
              if (N >= 0) {
                let Z = j.replace(/^ - /, "");
                O = oe + Z, fe.pos -= j.length - Z.length;
              }
              return O + ie;
            },
            filterSelection: (re) => re.replace(/^ 1. /g, "").replace(/\n \d+. /g, `
`)
          });
      } else
        S(`
 1. `, `
`, "List Item", { offsetStart: -10, offsetEnd: 9 });
    }
    function K() {
      if ($()) {
        let { sel: k, selPos: w, beforeSel: O, afterSel: ie, prevCRPos: N, beforeCR: oe, afterCR: j } = J();
        k.indexOf(`
`) === -1 ? S(`
 - `, `
`) : !k.startsWith(" - ") ? S("", "", " - ", {
          selectionAtEnd: !0,
          filterSelection: (re) => " - " + re.replace(/\n$/, "").replace(/\n/g, `
 - `) + `
`
        }) : S("", "", "", {
          filterValue: (re, fe) => {
            if (N >= 0) {
              let Z = j.replace(/^ - /, "");
              O = oe + Z, fe.pos -= j.length - Z.length;
            }
            return O + ie;
          },
          filterSelection: (re) => re.replace(/^ - /g, "").replace(/\n - /g, `
`)
        });
      } else
        S(`
 - `, `
`, "List Item", { offsetStart: -10, offsetEnd: 9 });
    }
    function se() {
      const k = P(), w = k.indexOf(`
`) === -1;
      k ? w ? S(`
## `, `
`, "") : S("## ", "", "") : S(`
## `, `
`, "Heading", { offsetStart: -8, offsetEnd: 7 });
    }
    function G() {
      let { sel: k, selPos: w, beforeSel: O, afterSel: ie, prevCRPos: N, beforeCR: oe, afterCR: j } = J();
      !k.startsWith("//") && !j.startsWith("//") ? k ? S("", "", "//", {
        selectionAtEnd: !0,
        filterSelection: (he) => "//" + he.replace(/\n$/, "").replace(/\n/g, `
//`) + `
`
      }) : ee({
        value: oe + "//" + j + ie,
        selectionStart: w + 2
      }) : S("", "", "", {
        filterValue: (he, re) => {
          if (N >= 0) {
            let fe = j.replace(/^\/\//, "");
            O = oe + fe, re.pos -= j.length - fe.length;
          }
          return O + ie;
        },
        filterSelection: (he) => he.replace(/^\/\//g, "").replace(/\n\/\//g, `
`)
      });
    }
    const V = () => S(`/*
`, `*/
`, "");
    function R() {
      if (n.length === 0)
        return !1;
      const k = y.value, w = n.pop();
      return i.push({ value: k.value, selectionStart: k.selectionStart, selectionEnd: k.selectionEnd }), ee(w), !0;
    }
    function b() {
      if (i.length === 0)
        return !1;
      const k = y.value, w = i.pop();
      return n.push({ value: k.value, selectionStart: k.selectionStart, selectionEnd: k.selectionEnd }), ee(w), !0;
    }
    const U = () => null;
    return nt(() => {
      n = [], i = [];
      const k = y.value;
      k.onkeydown = (w) => {
        if (w.key === "Escape" || w.keyCode === 27) {
          t("close");
          return;
        }
        const O = String.fromCharCode(w.keyCode).toLowerCase();
        O === "	" ? (!w.shiftKey ? S("", "", "    ", {
          selectionAtEnd: !0,
          filterSelection: (N) => "    " + N.replace(/\n$/, "").replace(/\n/g, `
    `) + `
`
        }) : S("", "", "", {
          filterValue: (N, oe) => {
            let { selPos: j, beforeSel: ce, afterSel: he, prevCRPos: re, beforeCR: fe, afterCR: Z } = J();
            if (re >= 0) {
              let Y = Z.replace(/\t/g, "    ").replace(/^ ? ? ? ?/, "");
              ce = fe + Y, oe.pos -= Z.length - Y.length;
            }
            return ce + he;
          },
          filterSelection: (N) => N.replace(/\t/g, "    ").replace(/^ ? ? ? ?/g, "").replace(/\n    /g, `
`)
        }), w.preventDefault()) : w.ctrlKey ? O === "z" ? w.shiftKey ? b() && w.preventDefault() : R() && w.preventDefault() : O === "b" && !w.shiftKey ? (H(), w.preventDefault()) : O === "h" && !w.shiftKey ? (se(), w.preventDefault()) : O === "i" && !w.shiftKey ? (E(), w.preventDefault()) : O === "q" && !w.shiftKey ? (M(), w.preventDefault()) : O === "k" ? w.shiftKey ? (B(), w.preventDefault()) : (F(), w.preventDefault()) : O === "," || w.key === "<" || w.key === ">" || w.keyCode === 188 ? (L(w), w.preventDefault()) : O === "/" || w.key === "/" ? (G(), w.preventDefault()) : (O === "?" || w.key === "?") && w.shiftKey && (V(), w.preventDefault()) : w.altKey && (w.key === "1" || w.key === "0" ? (z(), w.preventDefault()) : w.key === "-" ? (K(), w.preventDefault()) : w.key === "s" && (Q(), w.preventDefault()));
      };
    }), (k, w) => (a(), u("div", null, [
      X(k.$slots, "header", Le({
        inputElement: y.value,
        id: e.id,
        modelValue: e.modelValue,
        status: e.status
      }, k.$attrs)),
      o(c) ? (a(), u("label", {
        key: 0,
        for: e.id,
        class: x(`mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300 ${e.labelClass ?? ""}`)
      }, A(o(c)), 11, Um)) : C("", !0),
      e.disabled ? C("", !0) : (a(), u("div", qm, [
        s("div", Qm, [
          g("bold") ? (a(), u("svg", {
            key: 0,
            class: x(v),
            onClick: H,
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24"
          }, Wm)) : C("", !0),
          g("italics") ? (a(), u("svg", {
            key: 1,
            class: x(v),
            onClick: E,
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24"
          }, Xm)) : C("", !0),
          g("link") ? (a(), u("svg", {
            key: 2,
            class: x(v),
            onClick: F,
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24"
          }, tv)) : C("", !0),
          g("blockquote") ? (a(), u("svg", {
            key: 3,
            class: x(v),
            onClick: M,
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24"
          }, sv)) : C("", !0),
          g("image") ? (a(), u("svg", {
            key: 4,
            class: x(v),
            onClick: B,
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24"
          }, iv)) : C("", !0),
          g("code") ? (a(), u("svg", {
            key: 5,
            class: x(v),
            onClick: L,
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24"
          }, dv)) : C("", !0),
          g("heading") ? (a(), u("svg", {
            key: 6,
            class: x(v),
            onClick: se,
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24"
          }, mv)) : C("", !0),
          g("orderedList") ? (a(), u("svg", {
            key: 7,
            class: x(v),
            icon: "",
            onClick: z,
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24"
          }, gv)) : C("", !0),
          g("unorderedList") ? (a(), u("svg", {
            key: 8,
            class: x(v),
            onClick: K,
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24"
          }, bv)) : C("", !0),
          g("strikethrough") ? (a(), u("svg", {
            key: 9,
            class: x(v),
            onClick: Q,
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24"
          }, kv)) : C("", !0),
          g("undo") ? (a(), u("svg", {
            key: 10,
            class: x(v),
            onClick: R,
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24"
          }, _v)) : C("", !0),
          g("redo") ? (a(), u("svg", {
            key: 11,
            class: x(v),
            onClick: b,
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24"
          }, Sv)) : C("", !0),
          X(k.$slots, "icons")
        ]),
        g("help") && e.helpUrl ? (a(), u("div", Mv, [
          s("a", {
            title: "formatting help",
            target: "_blank",
            href: e.helpUrl
          }, [
            (a(), u("svg", {
              class: x(v),
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24"
            }, Iv))
          ], 8, Av)
        ])) : C("", !0)
      ])),
      s("div", Fv, [
        s("textarea", {
          ref_key: "txt",
          ref: y,
          name: e.id,
          id: e.id,
          class: x(o(p)),
          label: e.label,
          value: e.modelValue,
          rows: e.rows || 6,
          disabled: e.disabled,
          onInput: w[0] || (w[0] = (O) => {
            var ie;
            return k.$emit("update:modelValue", ((ie = O.target) == null ? void 0 : ie.value) || "");
          }),
          onKeydown: qn(U, ["tab"])
        }, null, 42, Dv)
      ]),
      o(d) ? (a(), u("p", {
        key: 2,
        class: "mt-2 text-sm text-red-500",
        id: `${e.id}-error`
      }, A(o(d)), 9, Pv)) : e.help ? (a(), u("p", {
        key: 3,
        class: "mt-2 text-sm text-gray-500",
        id: `${e.id}-description`
      }, A(e.help), 9, Ov)) : C("", !0),
      X(k.$slots, "footer", Le({
        inputElement: y.value,
        id: e.id,
        modelValue: e.modelValue,
        status: e.status
      }, k.$attrs))
    ]));
  }
}), Bv = {
  Alert: Io,
  AlertSuccess: Uo,
  ErrorSummary: Wo,
  InputDescription: Jo,
  Icon: Ps,
  Loading: qa,
  OutlineButton: Za,
  PrimaryButton: Ja,
  SecondaryButton: ei,
  TextLink: li,
  Breadcrumbs: ri,
  Breadcrumb: mi,
  NavList: gi,
  NavListItem: Vi,
  AutoQueryGrid: Gu,
  SettingsIcons: dd,
  FilterViews: $n,
  FilterColumn: kn,
  QueryPrefs: Cn,
  EnsureAccess: js,
  EnsureAccessDialog: cd,
  TextInput: xd,
  TextareaInput: Sd,
  SelectInput: Dd,
  CheckboxInput: zd,
  TagInput: cc,
  FileInput: Dc,
  Autocomplete: Gc,
  Combobox: Yc,
  DynamicInput: e0,
  LookupInput: g0,
  AutoFormFields: p0,
  AutoForm: _0,
  AutoCreateForm: Z0,
  AutoEditForm: yf,
  ConfirmDelete: xf,
  FormLoading: Vf,
  DataGrid: If,
  CellFormat: Ff,
  PreviewFormat: Rf,
  HtmlFormat: Uf,
  CloseButton: Wf,
  SlideOver: u1,
  ModalDialog: g1,
  ModalLookup: um,
  Tabs: ym,
  DarkModeToggle: $m,
  SignIn: Nm,
  MarkdownInput: jv
}, jl = Bv, qv = {
  install(e) {
    Object.keys(jl).forEach((l) => {
      e.component(l, jl[l]);
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
  component(e, t) {
    return e ? t ? ne.components[e] = t : ne.components[e] || jl[e] || null : null;
  }
};
export {
  Uv as css,
  qv as default,
  xn as useAuth,
  Sl as useClient,
  Ct as useConfig,
  zv as useFiles,
  Nv as useFormatters,
  ot as useMetadata,
  ea as useUtils
};
