function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["../nodes/0.Cyt7pvWo.js","../chunks/scheduler.BgK5Tl8W.js","../chunks/index.NEkLQFSy.js","../chunks/index.dMOHkvD3.js","../chunks/stores.BSME2v04.js","../chunks/ProgressBar.svelte_svelte_type_style_lang.D45o3ZTf.js","../assets/ProgressBar.Cirlo5Z8.css","../chunks/each.Bt99gS3h.js","../chunks/transitions.DZ-Rh8KR.js","../chunks/stores.Bx8X7Q0D.js","../chunks/entry.DW7OctHw.js","../assets/0.idNYPWEX.css","../nodes/1.Dw9XYdMw.js","../assets/1.Cz2UwI3h.css","../nodes/2.BvexslTi.js","../chunks/spread.CN4WR7uZ.js","../assets/2.Tr2rD_Gn.css","../nodes/3.oPtsTf5f.js","../chunks/stay.C-BlIyKy.js","../assets/3.LKP8FjCh.css","../nodes/4.D2hlx2UA.js","../chunks/globals.D0QH3NT1.js","../assets/4.BpKrkL3S.css","../nodes/5.BCNvubHX.js","../assets/5.BnIeKl3w.css","../nodes/6.DAoXSYyM.js","../assets/6.Vzq7q7Yn.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{a as q,b as B,C as h,i as U,k as E,h as p,F as j,y as F,e as G,c as H,d as W,j as I,D as d,t as z,f as J,m as K,G as V,H as y,I as Q}from"../chunks/scheduler.BgK5Tl8W.js";import{S as X,i as Y,t as g,c as A,a as w,g as D,b as R,d as O,m as P,e as L}from"../chunks/index.NEkLQFSy.js";const Z="modulepreload",M=function(a,e){return new URL(a,e).href},T={},k=function(e,n,i){let s=Promise.resolve();if(n&&n.length>0){const _=document.getElementsByTagName("link"),t=document.querySelector("meta[property=csp-nonce]"),r=(t==null?void 0:t.nonce)||(t==null?void 0:t.getAttribute("nonce"));s=Promise.all(n.map(o=>{if(o=M(o,i),o in T)return;T[o]=!0;const f=o.endsWith(".css"),l=f?'[rel="stylesheet"]':"";if(!!i)for(let b=_.length-1;b>=0;b--){const v=_[b];if(v.href===o&&(!f||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const u=document.createElement("link");if(u.rel=f?"stylesheet":Z,f||(u.as="script",u.crossOrigin=""),u.href=o,r&&u.setAttribute("nonce",r),document.head.appendChild(u),f)return new Promise((b,v)=>{u.addEventListener("load",b),u.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${o}`)))})}))}return s.then(()=>e()).catch(_=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=_,window.dispatchEvent(t),!t.defaultPrevented)throw _})},re={};function $(a){let e,n,i;var s=a[1][0];function _(t,r){return{props:{data:t[3],form:t[2]}}}return s&&(e=y(s,_(a)),a[12](e)),{c(){e&&R(e.$$.fragment),n=h()},l(t){e&&O(e.$$.fragment,t),n=h()},m(t,r){e&&P(e,t,r),E(t,n,r),i=!0},p(t,r){if(r&2&&s!==(s=t[1][0])){if(e){D();const o=e;g(o.$$.fragment,1,0,()=>{L(o,1)}),A()}s?(e=y(s,_(t)),t[12](e),R(e.$$.fragment),w(e.$$.fragment,1),P(e,n.parentNode,n)):e=null}else if(s){const o={};r&8&&(o.data=t[3]),r&4&&(o.form=t[2]),e.$set(o)}},i(t){i||(e&&w(e.$$.fragment,t),i=!0)},o(t){e&&g(e.$$.fragment,t),i=!1},d(t){t&&p(n),a[12](null),e&&L(e,t)}}}function x(a){let e,n,i;var s=a[1][0];function _(t,r){return{props:{data:t[3],$$slots:{default:[ee]},$$scope:{ctx:t}}}}return s&&(e=y(s,_(a)),a[11](e)),{c(){e&&R(e.$$.fragment),n=h()},l(t){e&&O(e.$$.fragment,t),n=h()},m(t,r){e&&P(e,t,r),E(t,n,r),i=!0},p(t,r){if(r&2&&s!==(s=t[1][0])){if(e){D();const o=e;g(o.$$.fragment,1,0,()=>{L(o,1)}),A()}s?(e=y(s,_(t)),t[11](e),R(e.$$.fragment),w(e.$$.fragment,1),P(e,n.parentNode,n)):e=null}else if(s){const o={};r&8&&(o.data=t[3]),r&8215&&(o.$$scope={dirty:r,ctx:t}),e.$set(o)}},i(t){i||(e&&w(e.$$.fragment,t),i=!0)},o(t){e&&g(e.$$.fragment,t),i=!1},d(t){t&&p(n),a[11](null),e&&L(e,t)}}}function ee(a){let e,n,i;var s=a[1][1];function _(t,r){return{props:{data:t[4],form:t[2]}}}return s&&(e=y(s,_(a)),a[10](e)),{c(){e&&R(e.$$.fragment),n=h()},l(t){e&&O(e.$$.fragment,t),n=h()},m(t,r){e&&P(e,t,r),E(t,n,r),i=!0},p(t,r){if(r&2&&s!==(s=t[1][1])){if(e){D();const o=e;g(o.$$.fragment,1,0,()=>{L(o,1)}),A()}s?(e=y(s,_(t)),t[10](e),R(e.$$.fragment),w(e.$$.fragment,1),P(e,n.parentNode,n)):e=null}else if(s){const o={};r&16&&(o.data=t[4]),r&4&&(o.form=t[2]),e.$set(o)}},i(t){i||(e&&w(e.$$.fragment,t),i=!0)},o(t){e&&g(e.$$.fragment,t),i=!1},d(t){t&&p(n),a[10](null),e&&L(e,t)}}}function S(a){let e,n=a[6]&&C(a);return{c(){e=G("div"),n&&n.c(),this.h()},l(i){e=H(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=W(e);n&&n.l(s),s.forEach(p),this.h()},h(){I(e,"id","svelte-announcer"),I(e,"aria-live","assertive"),I(e,"aria-atomic","true"),d(e,"position","absolute"),d(e,"left","0"),d(e,"top","0"),d(e,"clip","rect(0 0 0 0)"),d(e,"clip-path","inset(50%)"),d(e,"overflow","hidden"),d(e,"white-space","nowrap"),d(e,"width","1px"),d(e,"height","1px")},m(i,s){E(i,e,s),n&&n.m(e,null)},p(i,s){i[6]?n?n.p(i,s):(n=C(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&p(e),n&&n.d()}}}function C(a){let e;return{c(){e=z(a[7])},l(n){e=J(n,a[7])},m(n,i){E(n,e,i)},p(n,i){i&128&&K(e,n[7])},d(n){n&&p(e)}}}function te(a){let e,n,i,s,_;const t=[x,$],r=[];function o(l,m){return l[1][1]?0:1}e=o(a),n=r[e]=t[e](a);let f=a[5]&&S(a);return{c(){n.c(),i=B(),f&&f.c(),s=h()},l(l){n.l(l),i=U(l),f&&f.l(l),s=h()},m(l,m){r[e].m(l,m),E(l,i,m),f&&f.m(l,m),E(l,s,m),_=!0},p(l,[m]){let u=e;e=o(l),e===u?r[e].p(l,m):(D(),g(r[u],1,1,()=>{r[u]=null}),A(),n=r[e],n?n.p(l,m):(n=r[e]=t[e](l),n.c()),w(n,1),n.m(i.parentNode,i)),l[5]?f?f.p(l,m):(f=S(l),f.c(),f.m(s.parentNode,s)):f&&(f.d(1),f=null)},i(l){_||(w(n),_=!0)},o(l){g(n),_=!1},d(l){l&&(p(i),p(s)),r[e].d(l),f&&f.d(l)}}}function ne(a,e,n){let{stores:i}=e,{page:s}=e,{constructors:_}=e,{components:t=[]}=e,{form:r}=e,{data_0:o=null}=e,{data_1:f=null}=e;j(i.page.notify);let l=!1,m=!1,u=null;F(()=>{const c=i.page.subscribe(()=>{l&&(n(6,m=!0),Q().then(()=>{n(7,u=document.title||"untitled page")}))});return n(5,l=!0),c});function b(c){V[c?"unshift":"push"](()=>{t[1]=c,n(0,t)})}function v(c){V[c?"unshift":"push"](()=>{t[0]=c,n(0,t)})}function N(c){V[c?"unshift":"push"](()=>{t[0]=c,n(0,t)})}return a.$$set=c=>{"stores"in c&&n(8,i=c.stores),"page"in c&&n(9,s=c.page),"constructors"in c&&n(1,_=c.constructors),"components"in c&&n(0,t=c.components),"form"in c&&n(2,r=c.form),"data_0"in c&&n(3,o=c.data_0),"data_1"in c&&n(4,f=c.data_1)},a.$$.update=()=>{a.$$.dirty&768&&i.page.set(s)},[t,_,r,o,f,l,m,u,i,s,b,v,N]}class oe extends X{constructor(e){super(),Y(this,e,ne,te,q,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const ae=[()=>k(()=>import("../nodes/0.Cyt7pvWo.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]),import.meta.url),()=>k(()=>import("../nodes/1.Dw9XYdMw.js"),__vite__mapDeps([12,1,2,9,10,3,13]),import.meta.url),()=>k(()=>import("../nodes/2.BvexslTi.js"),__vite__mapDeps([14,1,2,5,3,6,15,10,16]),import.meta.url),()=>k(()=>import("../nodes/3.oPtsTf5f.js"),__vite__mapDeps([17,1,2,18,4,3,5,6,8,19]),import.meta.url),()=>k(()=>import("../nodes/4.D2hlx2UA.js"),__vite__mapDeps([20,1,2,21,7,9,10,3,15,18,4,5,6,22]),import.meta.url),()=>k(()=>import("../nodes/5.BCNvubHX.js"),__vite__mapDeps([23,1,21,7,2,10,3,4,5,6,24]),import.meta.url),()=>k(()=>import("../nodes/6.DAoXSYyM.js"),__vite__mapDeps([25,1,7,2,5,3,6,26]),import.meta.url)],le=[],fe={"/":[2],"/about":[3],"/classView/[slug]":[4],"/grades":[5],"/theme":[6]},ce={handleError:({error:a})=>{console.error(a)},reroute:()=>{}};export{fe as dictionary,ce as hooks,re as matchers,ae as nodes,oe as root,le as server_loads};
