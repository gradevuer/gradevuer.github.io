import{s as R,K as z,e as S,E as y,c as T,a as w,k as B,G as L,d as $,b as D,i as P,g,L as q,M as C,o as J,D as N,F as x,H as A}from"../chunks/scheduler.HaoJMjUf.js";import{S as K,i as V,f as W,b as F,d as G,m as U,a as Y,t as j,e as Q}from"../chunks/index.G81k-Xhd.js";import{e as H}from"../chunks/each.BvinSC2D.js";import{W as X}from"../chunks/main.DlQOQXQP.js";import{g as Z}from"../chunks/stores.6eYr0iPl.js";import"../chunks/ProgressBar.svelte_svelte_type_style_lang.F8mDr4Rg.js";import{P as tt}from"../chunks/Paginator.BHBDf8Iq.js";import{g as et}from"../chunks/entry.CY06v9jW.js";function M(i,e,s){const n=i.slice();return n[5]=e[s],n}function O(i){let e,s,n=i[5].name+"",l,b,v,d=new Date(i[5].timestamp).toLocaleString()+"",m,c,f,h=i[5].suggestion+"",u,a;return{c(){e=S("tr"),s=S("td"),l=N(n),b=y(),v=S("td"),m=N(d),c=y(),f=S("td"),u=N(h),a=y(),this.h()},l(E){e=T(E,"TR",{});var r=w(e);s=T(r,"TD",{class:!0});var t=w(s);l=x(t,n),t.forEach($),b=L(r),v=T(r,"TD",{class:!0});var _=w(v);m=x(_,d),_.forEach($),c=L(r),f=T(r,"TD",{class:!0});var p=w(f);u=x(p,h),p.forEach($),a=L(r),r.forEach($),this.h()},h(){D(s,"class","svelte-1esh4ox"),D(v,"class","svelte-1esh4ox"),D(f,"class","svelte-1esh4ox")},m(E,r){P(E,e,r),g(e,s),g(s,l),g(e,b),g(e,v),g(v,m),g(e,c),g(e,f),g(f,u),g(e,a)},p(E,r){r&2&&n!==(n=E[5].name+"")&&A(l,n),r&2&&d!==(d=new Date(E[5].timestamp).toLocaleString()+"")&&A(m,d),r&2&&h!==(h=E[5].suggestion+"")&&A(u,h)},d(E){E&&$(e)}}}function at(i){let e,s,n,l,b="<tr><th>Name</th> <th>Time</th> <th>Suggestion</th></tr>",v,d,m,c,f,h,u=H(i[1]),a=[];for(let t=0;t<u.length;t+=1)a[t]=O(M(i,u,t));function E(t){i[2](t)}let r={showNumerals:!0,maxNumerals:1};return i[0]!==void 0&&(r.settings=i[0]),c=new tt({props:r}),z.push(()=>W(c,"settings",E)),{c(){e=S("div"),s=S("div"),n=S("table"),l=S("thead"),l.innerHTML=b,v=y(),d=S("tbody");for(let t=0;t<a.length;t+=1)a[t].c();m=y(),F(c.$$.fragment),this.h()},l(t){e=T(t,"DIV",{class:!0});var _=w(e);s=T(_,"DIV",{class:!0});var p=w(s);n=T(p,"TABLE",{class:!0});var o=w(n);l=T(o,"THEAD",{"data-svelte-h":!0}),B(l)!=="svelte-mzktsq"&&(l.innerHTML=b),v=L(o),d=T(o,"TBODY",{});var k=w(d);for(let I=0;I<a.length;I+=1)a[I].l(k);k.forEach($),o.forEach($),p.forEach($),m=L(_),G(c.$$.fragment,_),_.forEach($),this.h()},h(){D(n,"class","table table-fixed"),D(s,"class","table-container w-4/5 pb-5"),D(e,"class","container")},m(t,_){P(t,e,_),g(e,s),g(s,n),g(n,l),g(n,v),g(n,d);for(let p=0;p<a.length;p+=1)a[p]&&a[p].m(d,null);g(e,m),U(c,e,null),h=!0},p(t,[_]){if(_&2){u=H(t[1]);let o;for(o=0;o<u.length;o+=1){const k=M(t,u,o);a[o]?a[o].p(k,_):(a[o]=O(k),a[o].c(),a[o].m(d,null))}for(;o<a.length;o+=1)a[o].d(1);a.length=u.length}const p={};!f&&_&1&&(f=!0,p.settings=t[0],q(()=>f=!1)),c.$set(p)},i(t){h||(Y(c.$$.fragment,t),h=!0)},o(t){j(c.$$.fragment,t),h=!1},d(t){t&&$(e),C(a,t),Q(c)}}}function st(i,e,s){const n=Z();let l=[],b={page:0,limit:50,size:1/0,amounts:[50]};J(async()=>{sessionStorage.getItem("admin_pass")==null&&await et("/admin"),s(1,l=JSON.parse(sessionStorage.get("suggestion_data")))});async function v(m){const c={headers:{"Accept-Encoding":"br",Authorization:`Basic ${btoa("admin:"+sessionStorage.getItem("admin_pass"))}`}},f=await fetch(`${X}/suggestions/${m}`,c);let h=await f.text();if(f.status!=200){const u={message:`${h}`,background:"variant-filled-error bg-gradient-to-r from-error-400 to-error-600",timeout:3e3};throw n.trigger(u),new Error(h)}return JSON.parse(h)}function d(m){b=m,s(0,b)}return i.$$.update=()=>{i.$$.dirty&1&&v(b.page).then(m=>{s(1,l=m)})},[b,l,d]}class mt extends K{constructor(e){super(),V(this,e,st,at,R,{})}}export{mt as component};