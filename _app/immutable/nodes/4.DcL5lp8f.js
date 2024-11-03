import{s as J,e as h,l as C,c as f,a as x,k as B,m as $,d as k,b as d,i as T,g as o,J as N,q as U,I as R,t as O,p as V,f as q,r as z,n as b}from"../chunks/scheduler.BhNCGW4c.js";import{h as W,u as M}from"../chunks/await_block.Cu-niz3Q.js";import{S as G,i as K,a as j,t as H,b as F,d as Q,m as X,e as Y}from"../chunks/index.By4zub_x.js";import"../chunks/ProgressBar.svelte_svelte_type_style_lang.BXlGj4x9.js";import{P as Z}from"../chunks/ProgressBar.CJ0y7Qxz.js";import{g as tt}from"../chunks/entry.C8l_-luy.js";import{W as et}from"../chunks/main.DlQOQXQP.js";import{b as at}from"../chunks/util.UZ_QSrM9.js";import{u as st}from"../chunks/pack.CTx6hWTx.js";function nt(r){let t,e,a,n="Error",i,l,_,g=r[5]+"",m;return{c(){t=h("aside"),e=h("div"),a=h("h3"),a.textContent=n,i=C(),l=h("p"),_=O("Wrong password (nice try) "),m=O(g),this.h()},l(s){t=f(s,"ASIDE",{class:!0});var v=x(t);e=f(v,"DIV",{class:!0});var u=x(e);a=f(u,"H3",{class:!0,"data-svelte-h":!0}),B(a)!=="svelte-mmnhjy"&&(a.textContent=n),i=$(u),l=f(u,"P",{});var E=x(l);_=V(E,"Wrong password (nice try) "),m=V(E,g),E.forEach(k),u.forEach(k),v.forEach(k),this.h()},h(){d(a,"class","h3"),d(e,"class","alert-message"),d(t,"class","alert errorw incorrect variant-ghost-error text-left svelte-1rgklt7"),q(t,"margin-top","10px")},m(s,v){T(s,t,v),o(t,e),o(e,a),o(e,i),o(e,l),o(l,_),o(l,m)},p(s,v){v&2&&g!==(g=s[5]+"")&&z(m,g)},i:b,o:b,d(s){s&&k(t)}}}function rt(r){return{c:b,l:b,m:b,p:b,i:b,o:b,d:b}}function lt(r){let t,e,a;return e=new Z({props:{meter:"bg-gradient-to-r from-secondary-400 to-secondary-600"}}),{c(){t=h("div"),F(e.$$.fragment),this.h()},l(n){t=f(n,"DIV",{class:!0});var i=x(t);Q(e.$$.fragment,i),i.forEach(k),this.h()},h(){d(t,"class","loading svelte-1rgklt7")},m(n,i){T(n,t,i),X(e,t,null),a=!0},p:b,i(n){a||(j(e.$$.fragment,n),a=!0)},o(n){H(e.$$.fragment,n),a=!1},d(n){n&&k(t),Y(e)}}}function ot(r){let t,e,a,n='<span>Username</span> <input class="input" value="Admin" placeholder="id" disabled=""/>',i,l,_,g="Password",m,s,v,u,E="Authenicate",L,I,A,P,D,c={ctx:r,current:null,token:null,hasCatch:!0,pending:lt,then:rt,catch:nt,error:5,blocks:[,,,]};return W(I=r[1],c),{c(){t=h("div"),e=h("div"),a=h("label"),a.innerHTML=n,i=C(),l=h("label"),_=h("span"),_.textContent=g,m=C(),s=h("input"),v=C(),u=h("button"),u.textContent=E,L=C(),c.block.c(),this.h()},l(y){t=f(y,"DIV",{class:!0});var p=x(t);e=f(p,"DIV",{class:!0});var w=x(e);a=f(w,"LABEL",{class:!0,"data-svelte-h":!0}),B(a)!=="svelte-1y5u6gt"&&(a.innerHTML=n),i=$(w),l=f(w,"LABEL",{class:!0});var S=x(l);_=f(S,"SPAN",{"data-svelte-h":!0}),B(_)!=="svelte-1kvjhoz"&&(_.textContent=g),m=$(S),s=f(S,"INPUT",{class:!0,type:!0,placeholder:!0}),S.forEach(k),v=$(w),u=f(w,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),B(u)!=="svelte-lex68n"&&(u.textContent=E),w.forEach(k),L=$(p),c.block.l(p),p.forEach(k),this.h()},h(){d(a,"class","label text-left"),d(s,"class","input"),d(s,"type","password"),d(s,"placeholder","password"),d(l,"class","label text-left"),d(u,"type","button"),d(u,"class","btn login bg-gradient-to-br variant-gradient-primary-tertiary svelte-1rgklt7"),d(e,"class","card p-4 window text-token space-y-4 text-center svelte-1rgklt7"),d(t,"class","container")},m(y,p){T(y,t,p),o(t,e),o(e,a),o(e,i),o(e,l),o(l,_),o(l,m),o(l,s),N(s,r[0]),o(e,v),o(e,u),o(t,L),c.block.m(t,c.anchor=null),c.mount=()=>t,c.anchor=null,A=!0,P||(D=[U(s,"input",r[3]),U(u,"click",r[4])],P=!0)},p(y,[p]){r=y,p&1&&s.value!==r[0]&&N(s,r[0]),c.ctx=r,p&2&&I!==(I=r[1])&&W(I,c)||M(c,r,p)},i(y){A||(j(c.block),A=!0)},o(y){for(let p=0;p<3;p+=1){const w=c.blocks[p];H(w)}A=!1},d(y){y&&k(t),c.block.d(),c.token=null,c=null,P=!1,R(D)}}}function it(r,t,e){let a="",n;async function i(){const g={headers:{"Content-Type":"application/json","Accept-Encoding":"br",Authorization:`Basic ${at("admin:"+a)}`}},m=await fetch(`${et}/suggestions/0`,g);if(m.status!=200)throw new Error(await m.text());let s=st(new Uint8Array(await m.arrayBuffer()));BigInt.prototype.toJSON=function(){return this.toString()},sessionStorage.setItem("suggestion_data",JSON.stringify(s)),sessionStorage.setItem("admin_pass",a),await tt("/admin/suggestions")}function l(){a=this.value,e(0,a)}return[a,n,i,l,()=>{e(1,n=i())}]}class vt extends G{constructor(t){super(),K(this,t,it,ot,J,{})}}export{vt as component};