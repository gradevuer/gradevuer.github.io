import{s as V,e as m,E,c as f,a as L,k as A,G as $,d as b,b as c,i as S,g as d,I as H,J as M,C as W,f as j,n as _}from"../chunks/scheduler.HaoJMjUf.js";import{h as U}from"../chunks/await_block._caT-Q6g.js";import{S as z,i as G,a as N,t as R,b as O,d as q,m as J,e as K}from"../chunks/index.G81k-Xhd.js";import"../chunks/ProgressBar.svelte_svelte_type_style_lang.F8mDr4Rg.js";import{P as F}from"../chunks/ProgressBar.Bc0vqXTf.js";import{g as Q}from"../chunks/entry.bxCKXrBO.js";import{W as X}from"../chunks/main.DlQOQXQP.js";function Y(n){let t,e='<div class="alert-message -3"><h3 class="h3">Error</h3> <p>Wrong password (nice try)</p></div>';return{c(){t=m("aside"),t.innerHTML=e,this.h()},l(a){t=f(a,"ASIDE",{class:!0,"data-svelte-h":!0}),A(t)!=="svelte-1kdt27b"&&(t.innerHTML=e),this.h()},h(){c(t,"class","alert errorw incorrect variant-ghost-error text-left svelte-1rgklt7"),j(t,"margin-top","10px")},m(a,s){S(a,t,s)},i:_,o:_,d(a){a&&b(t)}}}function Z(n){return{c:_,l:_,m:_,i:_,o:_,d:_}}function tt(n){let t,e,a;return e=new F({props:{meter:"bg-gradient-to-r from-secondary-400 to-secondary-600"}}),{c(){t=m("div"),O(e.$$.fragment),this.h()},l(s){t=f(s,"DIV",{class:!0});var i=L(t);q(e.$$.fragment,i),i.forEach(b),this.h()},h(){c(t,"class","loading svelte-1rgklt7")},m(s,i){S(s,t,i),J(e,t,null),a=!0},i(s){a||(N(e.$$.fragment,s),a=!0)},o(s){R(e.$$.fragment,s),a=!1},d(s){s&&b(t),K(e)}}}function et(n){let t,e,a,s='<span>Username</span> <input class="input" value="Admin" placeholder="id" disabled=""/>',i,u,v,y="Password",k,l,I,p,B="Authenicate",T,w,x,P,D,r={ctx:n,current:null,token:null,hasCatch:!0,pending:tt,then:Z,catch:Y,error:5,blocks:[,,,]};return U(w=n[1],r),{c(){t=m("div"),e=m("div"),a=m("label"),a.innerHTML=s,i=E(),u=m("label"),v=m("span"),v.textContent=y,k=E(),l=m("input"),I=E(),p=m("button"),p.textContent=B,T=E(),r.block.c(),this.h()},l(h){t=f(h,"DIV",{class:!0});var o=L(t);e=f(o,"DIV",{class:!0});var g=L(e);a=f(g,"LABEL",{class:!0,"data-svelte-h":!0}),A(a)!=="svelte-1y5u6gt"&&(a.innerHTML=s),i=$(g),u=f(g,"LABEL",{class:!0});var C=L(u);v=f(C,"SPAN",{"data-svelte-h":!0}),A(v)!=="svelte-1kvjhoz"&&(v.textContent=y),k=$(C),l=f(C,"INPUT",{class:!0,type:!0,placeholder:!0}),C.forEach(b),I=$(g),p=f(g,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),A(p)!=="svelte-lex68n"&&(p.textContent=B),g.forEach(b),T=$(o),r.block.l(o),o.forEach(b),this.h()},h(){c(a,"class","label text-left"),c(l,"class","input"),c(l,"type","password"),c(l,"placeholder","password"),c(u,"class","label text-left"),c(p,"type","button"),c(p,"class","btn login bg-gradient-to-br variant-gradient-primary-tertiary svelte-1rgklt7"),c(e,"class","card p-4 window text-token space-y-4 text-center svelte-1rgklt7"),c(t,"class","container")},m(h,o){S(h,t,o),d(t,e),d(e,a),d(e,i),d(e,u),d(u,v),d(u,k),d(u,l),H(l,n[0]),d(e,I),d(e,p),d(t,T),r.block.m(t,r.anchor=null),r.mount=()=>t,r.anchor=null,x=!0,P||(D=[M(l,"input",n[3]),M(p,"click",n[4])],P=!0)},p(h,[o]){n=h,o&1&&l.value!==n[0]&&H(l,n[0]),r.ctx=n,o&2&&w!==(w=n[1])&&U(w,r)},i(h){x||(N(r.block),x=!0)},o(h){for(let o=0;o<3;o+=1){const g=r.blocks[o];R(g)}x=!1},d(h){h&&b(t),r.block.d(),r.token=null,r=null,P=!1,W(D)}}}function at(n,t,e){let a="",s;async function i(){const y={headers:{"Content-Type":"application/json","Accept-Encoding":"br",Authorization:`Basic ${btoa("admin:"+a)}`}},k=await fetch(`${X}/suggestions/0`,y);let l=await k.text();if(k.status!=200)throw new Error(l);sessionStorage.setItem("suggestion_data",l),sessionStorage.setItem("admin_pass",a),await Q("/admin/suggestions")}function u(){a=this.value,e(0,a)}return[a,s,i,u,()=>{e(1,s=i())}]}class ut extends z{constructor(t){super(),G(this,t,at,et,V,{})}}export{ut as component};
