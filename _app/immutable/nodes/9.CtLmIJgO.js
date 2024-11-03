import{s as X,K as Z,e as y,l as I,c as E,a as A,d as b,m as L,k as x,b as w,i as z,g as p,L as ee,M as te,z as ae,o as re,t as N,p as P,r as U,q as J,N as Q}from"../chunks/scheduler.BhNCGW4c.js";import{S as se,i as ne,f as oe,b as H,d as O,m as V,a as q,t as K,e as W}from"../chunks/index.By4zub_x.js";import{e as j}from"../chunks/each.CYVRkUBn.js";import{P as ie}from"../chunks/pageSelector.UFOusoNK.js";import{W as S}from"../chunks/main.DlQOQXQP.js";import{g as le}from"../chunks/stores.Bs2cUqnn.js";import{m as ce}from"../chunks/ProgressBar.svelte_svelte_type_style_lang.BXlGj4x9.js";import{P as ue}from"../chunks/Paginator.E6pnzFOd.js";import{g as Y}from"../chunks/entry.C8l_-luy.js";import{u as fe}from"../chunks/pack.CTx6hWTx.js";function F(a,e,t){const s=a.slice();return s[10]=e[t],s}function de(a){let e,t=a[10].name+"",s,u,i,f;function o(){return a[6](a[10])}return{c(){e=y("a"),s=N(t),this.h()},l(l){e=E(l,"A",{href:!0,class:!0});var r=A(e);s=P(r,t),r.forEach(b),this.h()},h(){w(e,"href",u=S+"/document/"+a[10].gu),w(e,"class","text-primary-500")},m(l,r){z(l,e,r),p(e,s),i||(f=J(e,"click",Q(o)),i=!0)},p(l,r){a=l,r&2&&t!==(t=a[10].name+"")&&U(s,t),r&2&&u!==(u=S+"/document/"+a[10].gu)&&w(e,"href",u)},d(l){l&&b(e),i=!1,f()}}}function me(a){let e,t=a[10].name+"",s,u,i,f;function o(){return a[5](a[10])}return{c(){e=y("a"),s=N(t),this.h()},l(l){e=E(l,"A",{href:!0,class:!0});var r=A(e);s=P(r,t),r.forEach(b),this.h()},h(){w(e,"href",u=S+"/document/"+a[10].gu),w(e,"class","text-primary-700")},m(l,r){z(l,e,r),p(e,s),i||(f=J(e,"click",Q(o)),i=!0)},p(l,r){a=l,r&2&&t!==(t=a[10].name+"")&&U(s,t),r&2&&u!==(u=S+"/document/"+a[10].gu)&&w(e,"href",u)},d(l){l&&b(e),i=!1,f()}}}function G(a){let e,t,s,u,i=a[10].date+"",f,o;function l(h,c){return h[2]?me:de}let r=l(a),m=r(a);return{c(){e=y("tr"),t=y("td"),m.c(),s=I(),u=y("td"),f=N(i),o=I(),this.h()},l(h){e=E(h,"TR",{});var c=A(e);t=E(c,"TD",{class:!0});var g=A(t);m.l(g),g.forEach(b),s=L(c),u=E(c,"TD",{class:!0});var v=A(u);f=P(v,i),v.forEach(b),o=L(c),c.forEach(b),this.h()},h(){w(t,"class","svelte-f3kpxx"),w(u,"class","svelte-f3kpxx")},m(h,c){z(h,e,c),p(e,t),m.m(t,null),p(e,s),p(e,u),p(u,f),p(e,o)},p(h,c){r===(r=l(h))&&m?m.p(h,c):(m.d(1),m=r(h),m&&(m.c(),m.m(t,null))),c&2&&i!==(i=h[10].date+"")&&U(f,i)},d(h){h&&b(e),m.d()}}}function he(a){let e,t,s,u,i,f,o,l="<tr><th>Name</th> <th>Date</th></tr>",r,m,h,c,g,v;s=new ie({props:{classes:"select variant-ghost-primary",selected:"documents"}});let $=j(a[1]),d=[];for(let n=0;n<$.length;n+=1)d[n]=G(F(a,$,n));function R(n){a[7](n)}let C={showNumerals:!0,maxNumerals:1};return a[0]!==void 0&&(C.settings=a[0]),c=new ue({props:C}),Z.push(()=>oe(c,"settings",R)),{c(){e=y("div"),t=y("div"),H(s.$$.fragment),u=I(),i=y("div"),f=y("table"),o=y("thead"),o.innerHTML=l,r=I(),m=y("tbody");for(let n=0;n<d.length;n+=1)d[n].c();h=I(),H(c.$$.fragment),this.h()},l(n){e=E(n,"DIV",{class:!0});var k=A(e);t=E(k,"DIV",{class:!0});var D=A(t);O(s.$$.fragment,D),D.forEach(b),u=L(k),i=E(k,"DIV",{class:!0});var _=A(i);f=E(_,"TABLE",{class:!0});var T=A(f);o=E(T,"THEAD",{"data-svelte-h":!0}),x(o)!=="svelte-d50u2s"&&(o.innerHTML=l),r=L(T),m=E(T,"TBODY",{});var M=A(m);for(let B=0;B<d.length;B+=1)d[B].l(M);M.forEach(b),T.forEach(b),_.forEach(b),h=L(k),O(c.$$.fragment,k),k.forEach(b),this.h()},h(){w(t,"class","grid grid-cols-2 w-4/5"),w(f,"class","table table-fixed"),w(i,"class","table-container w-4/5 pb-5"),w(e,"class","container")},m(n,k){z(n,e,k),p(e,t),V(s,t,null),p(e,u),p(e,i),p(i,f),p(f,o),p(f,r),p(f,m);for(let D=0;D<d.length;D+=1)d[D]&&d[D].m(m,null);p(e,h),V(c,e,null),v=!0},p(n,[k]){if(k&14){$=j(n[1]);let _;for(_=0;_<$.length;_+=1){const T=F(n,$,_);d[_]?d[_].p(T,k):(d[_]=G(T),d[_].c(),d[_].m(m,null))}for(;_<d.length;_+=1)d[_].d(1);d.length=$.length}const D={};!g&&k&1&&(g=!0,D.settings=n[0],ee(()=>g=!1)),c.$set(D)},i(n){v||(q(s.$$.fragment,n),q(c.$$.fragment,n),v=!0)},o(n){K(s.$$.fragment,n),K(c.$$.fragment,n),v=!1},d(n){n&&b(e),W(s),te(d,n),W(c)}}}function ge(a,e,t){let s;ae(a,ce,g=>t(2,s=g));const u=le();let i=[],f=[],o={page:0,limit:7,size:0,amounts:[5,7,15]};re(async()=>{Number.parseInt(sessionStorage.getItem("expiry")??"0")<Date.now()&&await Y("/"),t(4,i=await l())});async function l(){const g={headers:{"Accept-Encoding":"br",Authorization:`Bearer ${sessionStorage.getItem("token")}`}},v=await fetch(`${S}/documents`,g);if(v.status!=200){let d=await v.text();const R={message:`${d}`,background:"variant-filled-error bg-gradient-to-r from-error-400 to-error-600",timeout:3e3};throw u.trigger(R),await Y("/grades"),new Error(d)}let $=fe(new Uint8Array(await v.arrayBuffer()));return t(0,o.size=$.length,o),$}async function r(g){const v={headers:{"Accept-Encoding":"br",Authorization:`Bearer ${sessionStorage.getItem("token")}`}},$=await fetch(`${S}/document/${g}`,v);var d=URL.createObjectURL(await $.blob());window.open(d,"_blank")}o.size=i.length;const m=g=>{r(g.gu)},h=g=>{r(g.gu)};function c(g){o=g,t(0,o)}return a.$$.update=()=>{a.$$.dirty&17&&t(1,f=i.slice(o.page*o.limit,o.page*o.limit+o.limit))},[o,f,s,r,i,m,h,c]}class Ae extends se{constructor(e){super(),ne(this,e,ge,he,X,{})}}export{Ae as component};
