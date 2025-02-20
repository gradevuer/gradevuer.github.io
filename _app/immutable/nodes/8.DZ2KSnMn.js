import{s as X,K as Z,e as E,E as A,c as y,a as S,d as v,G as L,k as x,b as $,i as N,g as b,L as ee,M as te,t as ae,o as se,D as P,F as B,H as C,J as Y,N as Q}from"../chunks/scheduler.BZk8TU8a.js";import{S as re,i as ne,f as oe,b as O,d as U,m as V,a as J,t as K,e as W}from"../chunks/index.CsWC3knp.js";import{e as j}from"../chunks/each.C4jGDMaV.js";import{P as ie}from"../chunks/pageSelector.CH7YCjw2.js";import{W as T}from"../chunks/main.D8RZwWgc.js";import{g as le}from"../chunks/stores.DGqWjAEG.js";import{m as ce}from"../chunks/ProgressBar.svelte_svelte_type_style_lang.BXgmfzrK.js";import{P as ue}from"../chunks/Paginator.Ds8y9u1q.js";import{g as q}from"../chunks/entry.Debqq_31.js";function F(a,e,t){const r=a.slice();return r[10]=e[t],r}function fe(a){let e,t=a[10].name+"",r,u,i,f;function o(){return a[6](a[10])}return{c(){e=E("a"),r=P(t),this.h()},l(l){e=y(l,"A",{href:!0,class:!0});var s=S(e);r=B(s,t),s.forEach(v),this.h()},h(){$(e,"href",u=T+"/document?gu="+a[10].gu),$(e,"class","text-primary-500")},m(l,s){N(l,e,s),b(e,r),i||(f=Y(e,"click",Q(o)),i=!0)},p(l,s){a=l,s&2&&t!==(t=a[10].name+"")&&C(r,t),s&2&&u!==(u=T+"/document?gu="+a[10].gu)&&$(e,"href",u)},d(l){l&&v(e),i=!1,f()}}}function de(a){let e,t=a[10].name+"",r,u,i,f;function o(){return a[5](a[10])}return{c(){e=E("a"),r=P(t),this.h()},l(l){e=y(l,"A",{href:!0,class:!0});var s=S(e);r=B(s,t),s.forEach(v),this.h()},h(){$(e,"href",u=T+"/document?gu="+a[10].gu),$(e,"class","text-primary-700")},m(l,s){N(l,e,s),b(e,r),i||(f=Y(e,"click",Q(o)),i=!0)},p(l,s){a=l,s&2&&t!==(t=a[10].name+"")&&C(r,t),s&2&&u!==(u=T+"/document?gu="+a[10].gu)&&$(e,"href",u)},d(l){l&&v(e),i=!1,f()}}}function G(a){let e,t,r,u,i=a[10].date+"",f,o;function l(m,c){return m[2]?de:fe}let s=l(a),h=s(a);return{c(){e=E("tr"),t=E("td"),h.c(),r=A(),u=E("td"),f=P(i),o=A(),this.h()},l(m){e=y(m,"TR",{});var c=S(e);t=y(c,"TD",{class:!0});var g=S(t);h.l(g),g.forEach(v),r=L(c),u=y(c,"TD",{class:!0});var _=S(u);f=B(_,i),_.forEach(v),o=L(c),c.forEach(v),this.h()},h(){$(t,"class","svelte-f3kpxx"),$(u,"class","svelte-f3kpxx")},m(m,c){N(m,e,c),b(e,t),h.m(t,null),b(e,r),b(e,u),b(u,f),b(e,o)},p(m,c){s===(s=l(m))&&h?h.p(m,c):(h.d(1),h=s(m),h&&(h.c(),h.m(t,null))),c&2&&i!==(i=m[10].date+"")&&C(f,i)},d(m){m&&v(e),h.d()}}}function he(a){let e,t,r,u,i,f,o,l="<tr><th>Name</th> <th>Date</th></tr>",s,h,m,c,g,_;r=new ie({props:{classes:"select variant-ghost-primary",selected:"documents"}});let k=j(a[1]),d=[];for(let n=0;n<k.length;n+=1)d[n]=G(F(a,k,n));function R(n){a[7](n)}let H={showNumerals:!0,maxNumerals:1};return a[0]!==void 0&&(H.settings=a[0]),c=new ue({props:H}),Z.push(()=>oe(c,"settings",R)),{c(){e=E("div"),t=E("div"),O(r.$$.fragment),u=A(),i=E("div"),f=E("table"),o=E("thead"),o.innerHTML=l,s=A(),h=E("tbody");for(let n=0;n<d.length;n+=1)d[n].c();m=A(),O(c.$$.fragment),this.h()},l(n){e=y(n,"DIV",{class:!0});var w=S(e);t=y(w,"DIV",{class:!0});var D=S(t);U(r.$$.fragment,D),D.forEach(v),u=L(w),i=y(w,"DIV",{class:!0});var p=S(i);f=y(p,"TABLE",{class:!0});var I=S(f);o=y(I,"THEAD",{"data-svelte-h":!0}),x(o)!=="svelte-d50u2s"&&(o.innerHTML=l),s=L(I),h=y(I,"TBODY",{});var M=S(h);for(let z=0;z<d.length;z+=1)d[z].l(M);M.forEach(v),I.forEach(v),p.forEach(v),m=L(w),U(c.$$.fragment,w),w.forEach(v),this.h()},h(){$(t,"class","grid grid-cols-2 w-4/5"),$(f,"class","table table-fixed"),$(i,"class","table-container w-4/5 pb-5"),$(e,"class","container")},m(n,w){N(n,e,w),b(e,t),V(r,t,null),b(e,u),b(e,i),b(i,f),b(f,o),b(f,s),b(f,h);for(let D=0;D<d.length;D+=1)d[D]&&d[D].m(h,null);b(e,m),V(c,e,null),_=!0},p(n,[w]){if(w&14){k=j(n[1]);let p;for(p=0;p<k.length;p+=1){const I=F(n,k,p);d[p]?d[p].p(I,w):(d[p]=G(I),d[p].c(),d[p].m(h,null))}for(;p<d.length;p+=1)d[p].d(1);d.length=k.length}const D={};!g&&w&1&&(g=!0,D.settings=n[0],ee(()=>g=!1)),c.$set(D)},i(n){_||(J(r.$$.fragment,n),J(c.$$.fragment,n),_=!0)},o(n){K(r.$$.fragment,n),K(c.$$.fragment,n),_=!1},d(n){n&&v(e),W(r),te(d,n),W(c)}}}function me(a,e,t){let r;ae(a,ce,g=>t(2,r=g));const u=le();let i=[],f=[],o={page:0,limit:7,size:0,amounts:[5,7,15]};se(async()=>{Number.parseInt(sessionStorage.getItem("expiry")??"0")<Date.now()&&await q("/"),t(4,i=await l())});async function l(){const g={headers:{"Accept-Encoding":"br",Authorization:`Bearer ${sessionStorage.getItem("token")}`}},_=await fetch(`${T}/documents`,g);if(_.headers.has("set-token")&&sessionStorage.setItem("token",_.headers.get("set-token")),_.status!=200){let d=await _.text();const R={message:`${d}`,background:"variant-filled-error bg-gradient-to-r from-error-400 to-error-600",timeout:3e3};throw u.trigger(R),await q("/grades"),new Error(d)}let k=JSON.parse(await _.text());return t(0,o.size=k.length,o),k}async function s(g){const _={headers:{"Accept-Encoding":"br",Authorization:`Bearer ${sessionStorage.getItem("token")}`}},k=await fetch(`${T}/document?gu=${g}`,_);k.headers.has("set-token")&&sessionStorage.setItem("token",k.headers.get("set-token"));var d=URL.createObjectURL(await k.blob());window.open(d,"_blank")}o.size=i.length;const h=g=>{s(g.gu)},m=g=>{s(g.gu)};function c(g){o=g,t(0,o)}return a.$$.update=()=>{a.$$.dirty&17&&t(1,f=i.slice(o.page*o.limit,o.page*o.limit+o.limit))},[o,f,r,s,i,h,m,c]}class ye extends re{constructor(e){super(),ne(this,e,me,he,X,{})}}export{ye as component};
