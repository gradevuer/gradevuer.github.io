import{s as st,K as nt,e as _,l as I,c as b,a as k,k as U,m as A,d as S,b as y,i as tt,g as a,J as W,q as Y,a1 as et,L as rt,M as ot,I as it,o as lt,t as j,p as H,r as V}from"../chunks/scheduler.BhNCGW4c.js";import{S as ct,i as ut,f as dt,b as gt,d as ft,m as mt,a as pt,t as ht,e as _t}from"../chunks/index.By4zub_x.js";import{e as F}from"../chunks/each.CYVRkUBn.js";import{W as G}from"../chunks/main.DlQOQXQP.js";import{g as bt}from"../chunks/stores.Bs2cUqnn.js";import"../chunks/ProgressBar.svelte_svelte_type_style_lang.BXlGj4x9.js";import{P as vt}from"../chunks/Paginator.E6pnzFOd.js";import{g as yt}from"../chunks/entry.C8l_-luy.js";import{b as Q}from"../chunks/util.UZ_QSrM9.js";import{u as wt}from"../chunks/pack.CTx6hWTx.js";let Et=!1;const Pt=Object.freeze(Object.defineProperty({__proto__:null,ssr:Et},Symbol.toStringTag,{value:"Module"}));function X(i,t,s){const r=i.slice();return r[8]=t[s],r}function Z(i){let t,s,r=i[8].name+"",m,$,w,l=new Date(Number(i[8].timestamp)).toLocaleString()+"",h,p,T,u=i[8].suggestion+"",f,c;return{c(){t=_("tr"),s=_("td"),m=j(r),$=I(),w=_("td"),h=j(l),p=I(),T=_("td"),f=j(u),c=I(),this.h()},l(n){t=b(n,"TR",{});var o=k(t);s=b(o,"TD",{class:!0});var L=k(s);m=H(L,r),L.forEach(S),$=A(o),w=b(o,"TD",{class:!0});var x=k(w);h=H(x,l),x.forEach(S),p=A(o),T=b(o,"TD",{class:!0});var N=k(T);f=H(N,u),N.forEach(S),c=A(o),o.forEach(S),this.h()},h(){y(s,"class","svelte-1iuyved"),y(w,"class","svelte-1iuyved"),y(T,"class","svelte-1iuyved")},m(n,o){tt(n,t,o),a(t,s),a(s,m),a(t,$),a(t,w),a(w,h),a(t,p),a(t,T),a(T,f),a(t,c)},p(n,o){o&2&&r!==(r=n[8].name+"")&&V(m,r),o&2&&l!==(l=new Date(Number(n[8].timestamp)).toLocaleString()+"")&&V(h,l),o&2&&u!==(u=n[8].suggestion+"")&&V(f,u)},d(n){n&&S(t)}}}function St(i){let t,s,r,m,$="Bypass Id:",w,l,h,p,T="Extend",u,f,c,n,o="<tr><th>Name</th> <th>Time</th> <th>Suggestion</th></tr>",L,x,N,D,M,P,z,q,B=F(i[1]),d=[];for(let e=0;e<B.length;e+=1)d[e]=Z(X(i,B,e));function at(e){i[5](e)}let J={showNumerals:!0,maxNumerals:1};return i[0]!==void 0&&(J.settings=i[0]),D=new vt({props:J}),nt.push(()=>dt(D,"settings",at)),{c(){t=_("div"),s=_("div"),r=_("label"),m=_("span"),m.textContent=$,w=I(),l=_("input"),h=I(),p=_("button"),p.textContent=T,u=I(),f=_("div"),c=_("table"),n=_("thead"),n.innerHTML=o,L=I(),x=_("tbody");for(let e=0;e<d.length;e+=1)d[e].c();N=I(),gt(D.$$.fragment),this.h()},l(e){t=b(e,"DIV",{class:!0});var v=k(t);s=b(v,"DIV",{class:!0});var E=k(s);r=b(E,"LABEL",{class:!0});var g=k(r);m=b(g,"SPAN",{"data-svelte-h":!0}),U(m)!=="svelte-1w3lvyf"&&(m.textContent=$),w=A(g),l=b(g,"INPUT",{class:!0,type:!0,placeholder:!0}),g.forEach(S),h=A(E),p=b(E,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),U(p)!=="svelte-ot35gi"&&(p.textContent=T),E.forEach(S),u=A(v),f=b(v,"DIV",{class:!0});var C=k(f);c=b(C,"TABLE",{class:!0});var O=k(c);n=b(O,"THEAD",{"data-svelte-h":!0}),U(n)!=="svelte-p2lwii"&&(n.innerHTML=o),L=A(O),x=b(O,"TBODY",{});var K=k(x);for(let R=0;R<d.length;R+=1)d[R].l(K);K.forEach(S),O.forEach(S),C.forEach(S),N=A(v),ft(D.$$.fragment,v),v.forEach(S),this.h()},h(){y(l,"class","input"),y(l,"type","number"),y(l,"placeholder","id"),y(r,"class","label text-left"),y(p,"type","button"),y(p,"class","btn login bg-gradient-to-br variant-gradient-primary-tertiary h-fit"),y(s,"class","flex flex-row justify-center items-end space-x-3"),y(c,"class","table table-fixed"),y(f,"class","table-container w-4/5 pb-5"),y(t,"class","container")},m(e,v){tt(e,t,v),a(t,s),a(s,r),a(r,m),a(r,w),a(r,l),W(l,i[2]),a(s,h),a(s,p),a(t,u),a(t,f),a(f,c),a(c,n),a(c,L),a(c,x);for(let E=0;E<d.length;E+=1)d[E]&&d[E].m(x,null);a(t,N),mt(D,t,null),P=!0,z||(q=[Y(l,"input",i[4]),Y(p,"click",i[3])],z=!0)},p(e,[v]){if(v&4&&et(l.value)!==e[2]&&W(l,e[2]),v&2){B=F(e[1]);let g;for(g=0;g<B.length;g+=1){const C=X(e,B,g);d[g]?d[g].p(C,v):(d[g]=Z(C),d[g].c(),d[g].m(x,null))}for(;g<d.length;g+=1)d[g].d(1);d.length=B.length}const E={};!M&&v&1&&(M=!0,E.settings=e[0],rt(()=>M=!1)),D.$set(E)},i(e){P||(pt(D.$$.fragment,e),P=!0)},o(e){ht(D.$$.fragment,e),P=!1},d(e){e&&S(t),ot(d,e),_t(D),z=!1,it(q)}}}function $t(i,t,s){const r=bt();let m=[],$={page:0,limit:50,size:1/0,amounts:[50]};lt(async()=>{sessionStorage.getItem("admin_pass")==null&&await yt("/admin"),s(1,m=JSON.parse(sessionStorage.get("suggestion_data")))});async function w(u){const f={headers:{"Accept-Encoding":"br",Authorization:`Basic ${Q("admin:"+sessionStorage.getItem("admin_pass"))}`}},c=await fetch(`${G}/suggestions/${u}`,f);if(c.status!=200){let n=await c.text();const o={message:`${n}`,background:"variant-filled-error bg-gradient-to-r from-error-400 to-error-600",timeout:3e3};throw r.trigger(o),new Error(n)}return wt(new Uint8Array(await c.arrayBuffer()))}async function l(){const u={headers:{"Accept-Encoding":"br",Authorization:`Basic ${Q("admin:"+sessionStorage.getItem("admin_pass"))}`},method:"post"},f=await fetch(`${G}/icache/${h}`,u);if(f.status!=200){let n=await f.text();const o={message:`${n}`,background:"variant-filled-error bg-gradient-to-r from-error-400 to-error-600",timeout:3e3};throw r.trigger(o),new Error(n)}const c={message:`Successfully extended ${h}'s cache limit`,background:"variant-filled-success bg-gradient-to-r from-success-400 to-success-600",timeout:3e3};r.trigger(c)}let h=0;function p(){h=et(this.value),s(2,h)}function T(u){$=u,s(0,$)}return i.$$.update=()=>{i.$$.dirty&1&&w($.page).then(u=>{s(1,m=u)})},[$,m,h,l,p,T]}class Ot extends ct{constructor(t){super(),ut(this,t,$t,St,st,{})}}export{Ot as component,Pt as universal};
