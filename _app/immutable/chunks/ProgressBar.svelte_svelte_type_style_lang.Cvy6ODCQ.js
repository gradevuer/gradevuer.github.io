import{w as M,r as S}from"./index.D6JtOKJ8.js";import{a3 as L}from"./scheduler.CUUnO8oO.js";const i={};function h(e){return e==="local"?localStorage:sessionStorage}function l(e,t,r){const s=(r==null?void 0:r.serializer)??JSON,m=(r==null?void 0:r.storage)??"local";function u(n,c){h(m).setItem(n,s.stringify(c))}if(!i[e]){const n=M(t,o=>{const a=h(m).getItem(e);a&&o(s.parse(a));{const g=d=>{d.key===e&&o(d.newValue?s.parse(d.newValue):null)};return window.addEventListener("storage",g),()=>window.removeEventListener("storage",g)}}),{subscribe:c,set:f}=n;i[e]={set(o){u(e,o),f(o)},update(o){const a=o(L(n));u(e,a),f(a)},subscribe:c}}return i[e]}const P=l("modeOsPrefers",!1),E=l("modeUserPrefers",void 0),U=l("modeCurrent",!1);function b(){const e=window.matchMedia("(prefers-color-scheme: light)").matches;return P.set(e),e}function I(e){E.set(e)}function O(e){const t=document.documentElement.classList,r="dark";e===!0?t.remove(r):t.add(r),U.set(e)}function R(){const e=document.documentElement.classList,t=localStorage.getItem("modeUserPrefers")==="false",r=!("modeUserPrefers"in localStorage),s=window.matchMedia("(prefers-color-scheme: dark)").matches;t||r&&s?e.add("dark"):e.remove("dark")}const w="(prefers-reduced-motion: reduce)";function p(){return window.matchMedia(w).matches}const x=S(p(),e=>{{const t=s=>{e(s.matches)},r=window.matchMedia(w);return r.addEventListener("change",t),()=>{r.removeEventListener("change",t)}}});export{O as a,I as b,b as g,U as m,x as p,R as s};