import{s as st,l as nt,e as _,m as A,c as b,a as k,k as U,p as I,d as S,b as y,i as tt,g as a,S as K,r as Y,a1 as et,u as rt,T as ot,y as it,o as lt,t as j,q as H,v as V}from"../chunks/scheduler.DMWpDARK.js";import{S as ct,i as ut,b as dt,c as gt,a as ft,m as mt,t as pt,d as ht,e as _t}from"../chunks/index.BR94DFz2.js";import{e as F}from"../chunks/each.j2oqGyuo.js";import{W as G}from"../chunks/main.DlQOQXQP.js";import{g as bt}from"../chunks/stores.Ckxyyx8M.js";import"../chunks/ProgressBar.svelte_svelte_type_style_lang.Q42aMCKc.js";import{P as vt}from"../chunks/Paginator.awarxIW_.js";import{g as yt}from"../chunks/entry.BO9B9-DH.js";import{b as Q}from"../chunks/util.UZ_QSrM9.js";import{u as wt}from"../chunks/pack.CTx6hWTx.js";let Et=!1;const Pt=Object.freeze(Object.defineProperty({__proto__:null,ssr:Et},Symbol.toStringTag,{value:"Module"}));function X(i,t,s){const r=i.slice();return r[8]=t[s],r}function Z(i){let t,s,r=i[8].name+"",m,T,w,l=new Date(Number(i[8].timestamp)).toLocaleString()+"",h,p,$,u=i[8].suggestion+"",f,c;return{c(){t=_("tr"),s=_("td"),m=j(r),T=A(),w=_("td"),h=j(l),p=A(),$=_("td"),f=j(u),c=A(),this.h()},l(n){t=b(n,"TR",{});var o=k(t);s=b(o,"TD",{class:!0});var N=k(s);m=H(N,r),N.forEach(S),T=I(o),w=b(o,"TD",{class:!0});var x=k(w);h=H(x,l),x.forEach(S),p=I(o),$=b(o,"TD",{class:!0});var B=k($);f=H(B,u),B.forEach(S),c=I(o),o.forEach(S),this.h()},h(){y(s,"class","svelte-1iuyved"),y(w,"class","svelte-1iuyved"),y($,"class","svelte-1iuyved")},m(n,o){tt(n,t,o),a(t,s),a(s,m),a(t,T),a(t,w),a(w,h),a(t,p),a(t,$),a($,f),a(t,c)},p(n,o){o&2&&r!==(r=n[8].name+"")&&V(m,r),o&2&&l!==(l=new Date(Number(n[8].timestamp)).toLocaleString()+"")&&V(h,l),o&2&&u!==(u=n[8].suggestion+"")&&V(f,u)},d(n){n&&S(t)}}}function St(i){let t,s,r,m,T="Bypass Id:",w,l,h,p,$="Extend",u,f,c,n,o="<tr><th>Name</th> <th>Time</th> <th>Suggestion</th></tr>",N,x,B,D,z,P,M,q,C=F(i[1]),d=[];for(let e=0;e<C.length;e+=1)d[e]=Z(X(i,C,e));function at(e){i[5](e)}let W={showNumerals:!0,maxNumerals:1};return i[0]!==void 0&&(W.settings=i[0]),D=new vt({props:W}),nt.push(()=>dt(D,"settings",at)),{c(){t=_("div"),s=_("div"),r=_("label"),m=_("span"),m.textContent=T,w=A(),l=_("input"),h=A(),p=_("button"),p.textContent=$,u=A(),f=_("div"),c=_("table"),n=_("thead"),n.innerHTML=o,N=A(),x=_("tbody");for(let e=0;e<d.length;e+=1)d[e].c();B=A(),gt(D.$$.fragment),this.h()},l(e){t=b(e,"DIV",{class:!0});var v=k(t);s=b(v,"DIV",{class:!0});var E=k(s);r=b(E,"LABEL",{class:!0});var g=k(r);m=b(g,"SPAN",{"data-svelte-h":!0}),U(m)!=="svelte-1w3lvyf"&&(m.textContent=T),w=I(g),l=b(g,"INPUT",{class:!0,type:!0,placeholder:!0}),g.forEach(S),h=I(E),p=b(E,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),U(p)!=="svelte-ot35gi"&&(p.textContent=$),E.forEach(S),u=I(v),f=b(v,"DIV",{class:!0});var L=k(f);c=b(L,"TABLE",{class:!0});var O=k(c);n=b(O,"THEAD",{"data-svelte-h":!0}),U(n)!=="svelte-p2lwii"&&(n.innerHTML=o),N=I(O),x=b(O,"TBODY",{});var J=k(x);for(let R=0;R<d.length;R+=1)d[R].l(J);J.forEach(S),O.forEach(S),L.forEach(S),B=I(v),ft(D.$$.fragment,v),v.forEach(S),this.h()},h(){y(l,"class","input"),y(l,"type","number"),y(l,"placeholder","id"),y(r,"class","label text-left"),y(p,"type","button"),y(p,"class","btn login bg-gradient-to-br variant-gradient-primary-tertiary h-fit"),y(s,"class","flex flex-row justify-center items-end space-x-3"),y(c,"class","table table-fixed"),y(f,"class","table-container w-4/5 pb-5"),y(t,"class","container")},m(e,v){tt(e,t,v),a(t,s),a(s,r),a(r,m),a(r,w),a(r,l),K(l,i[2]),a(s,h),a(s,p),a(t,u),a(t,f),a(f,c),a(c,n),a(c,N),a(c,x);for(let E=0;E<d.length;E+=1)d[E]&&d[E].m(x,null);a(t,B),mt(D,t,null),P=!0,M||(q=[Y(l,"input",i[4]),Y(p,"click",i[3])],M=!0)},p(e,[v]){if(v&4&&et(l.value)!==e[2]&&K(l,e[2]),v&2){C=F(e[1]);let g;for(g=0;g<C.length;g+=1){const L=X(e,C,g);d[g]?d[g].p(L,v):(d[g]=Z(L),d[g].c(),d[g].m(x,null))}for(;g<d.length;g+=1)d[g].d(1);d.length=C.length}const E={};!z&&v&1&&(z=!0,E.settings=e[0],rt(()=>z=!1)),D.$set(E)},i(e){P||(pt(D.$$.fragment,e),P=!0)},o(e){ht(D.$$.fragment,e),P=!1},d(e){e&&S(t),ot(d,e),_t(D),M=!1,it(q)}}}function Tt(i,t,s){const r=bt();let m=[],T={page:0,limit:50,size:1/0,amounts:[50]};lt(async()=>{sessionStorage.getItem("admin_pass")==null&&await yt("/admin"),s(1,m=JSON.parse(sessionStorage.get("suggestion_data")))});async function w(u){const f={headers:{"Accept-Encoding":"br",Authorization:`Basic ${Q("admin:"+sessionStorage.getItem("admin_pass"))}`}},c=await fetch(`${G}/suggestions/${u}`,f);if(c.status!=200){let n=await c.text();const o={message:`${n}`,background:"variant-filled-error bg-gradient-to-r from-error-400 to-error-600",timeout:3e3};throw r.trigger(o),new Error(n)}return wt(new Uint8Array(await c.arrayBuffer()))}async function l(){const u={headers:{"Accept-Encoding":"br",Authorization:`Basic ${Q("admin:"+sessionStorage.getItem("admin_pass"))}`},method:"post"},f=await fetch(`${G}/icache/${h}`,u);if(f.status!=200){let n=await f.text();const o={message:`${n}`,background:"variant-filled-error bg-gradient-to-r from-error-400 to-error-600",timeout:3e3};throw r.trigger(o),new Error(n)}const c={message:`Successfully extended ${h}'s cache limit`,background:"variant-filled-success bg-gradient-to-r from-success-400 to-success-600",timeout:3e3};r.trigger(c)}let h=0;function p(){h=et(this.value),s(2,h)}function $(u){T=u,s(0,T)}return i.$$.update=()=>{i.$$.dirty&1&&w(T.page).then(u=>{s(1,m=u)})},[T,m,h,l,p,$]}class Ot extends ct{constructor(t){super(),ut(this,t,Tt,St,st,{})}}export{Ot as component,Pt as universal};