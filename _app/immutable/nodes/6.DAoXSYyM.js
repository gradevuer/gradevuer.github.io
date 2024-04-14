import{a as Q,e as f,b as x,c as p,d as b,B as K,i as I,h as _,j as d,k as L,l as i,n as O,x as R,o as W,t as N,f as U,D as X,w as Y,m as F}from"../chunks/scheduler.BgK5Tl8W.js";import{e as G}from"../chunks/each.Bt99gS3h.js";import{S as Z,i as tt}from"../chunks/index.NEkLQFSy.js";import{m as et}from"../chunks/ProgressBar.svelte_svelte_type_style_lang.D45o3ZTf.js";function H(s,e,n){const o=s.slice();return o[5]=e[n],o}function J(s){let e,n,o=S(s[5])+"",v,u,r,a,t,c,l,h,$="Button / Chip",V,C,g,P,w=S(s[5])+"",E,T,D,q,j;function M(){return s[4](s[5])}return{c(){e=f("div"),n=f("p"),v=N(o),u=x(),r=f("div"),a=f("input"),t=x(),c=f("div"),l=x(),h=f("span"),h.textContent=$,V=x(),C=f("div"),g=f("button"),P=N("Set theme to "),E=N(w),T=x(),this.h()},l(y){e=p(y,"DIV",{class:!0,"data-theme":!0});var m=b(e);n=p(m,"P",{class:!0});var A=b(n);v=U(A,o),A.forEach(_),u=I(m),r=p(m,"DIV",{class:!0});var k=b(r);a=p(k,"INPUT",{class:!0,placeholder:!0}),t=I(k),c=p(k,"DIV",{class:!0}),b(c).forEach(_),l=I(k),h=p(k,"SPAN",{class:!0,"data-svelte-h":!0}),K(h)!=="svelte-6ht70w"&&(h.textContent=$),k.forEach(_),V=I(m),C=p(m,"DIV",{class:!0});var z=b(C);g=p(z,"BUTTON",{type:!0,class:!0});var B=b(g);P=U(B,"Set theme to "),E=U(B,w),B.forEach(_),z.forEach(_),T=I(m),m.forEach(_),this.h()},h(){d(n,"class","text-center text-3xl pt-4"),d(a,"class","input w-1/3"),d(a,"placeholder","input"),X(a,"min-width","min(33.3%, 50px)"),d(c,"class","bg-gradient-to-r from-primary-500 via-secondary-500 to-tertiary-500 w-full h-full mx-5"),d(h,"class","chip bg-gradient-to-br variant-gradient-primary-tertiary float-right"),d(r,"class","my-5 flex items-center overflow-auto"),d(g,"type","button"),d(g,"class","btn login bg-gradient-to-br variant-gradient-primary-tertiary"),d(C,"class","flex items-end justify-center"),d(e,"class","card grid dgrid themecard m-10 p-4 svelte-1yqc1fn"),d(e,"data-theme",D=s[5])},m(y,m){L(y,e,m),i(e,n),i(n,v),i(e,u),i(e,r),i(r,a),i(r,t),i(r,c),i(r,l),i(r,h),i(e,V),i(e,C),i(C,g),i(g,P),i(g,E),i(e,T),q||(j=Y(g,"click",M),q=!0)},p(y,m){s=y,m&1&&o!==(o=S(s[5])+"")&&F(v,o),m&1&&w!==(w=S(s[5])+"")&&F(E,w),m&1&&D!==(D=s[5])&&d(e,"data-theme",D)},d(y){y&&_(e),q=!1,j()}}}function at(s){let e,n,o="Themes",v,u,r=G(s[0]?s[2]:s[1]),a=[];for(let t=0;t<r.length;t+=1)a[t]=J(H(s,r,t));return{c(){e=f("div"),n=f("p"),n.textContent=o,v=x(),u=f("div");for(let t=0;t<a.length;t+=1)a[t].c();this.h()},l(t){e=p(t,"DIV",{class:!0});var c=b(e);n=p(c,"P",{class:!0,"data-svelte-h":!0}),K(n)!=="svelte-1cey0va"&&(n.textContent=o),v=I(c),u=p(c,"DIV",{class:!0});var l=b(u);for(let h=0;h<a.length;h+=1)a[h].l(l);l.forEach(_),c.forEach(_),this.h()},h(){d(n,"class","text-5xl"),d(u,"class","theme-container svelte-1yqc1fn"),d(e,"class","container")},m(t,c){L(t,e,c),i(e,n),i(e,v),i(e,u);for(let l=0;l<a.length;l+=1)a[l]&&a[l].m(u,null)},p(t,[c]){if(c&15){r=G(t[0]?t[2]:t[1]);let l;for(l=0;l<r.length;l+=1){const h=H(t,r,l);a[l]?a[l].p(h,c):(a[l]=J(h),a[l].c(),a[l].m(u,null))}for(;l<a.length;l+=1)a[l].d(1);a.length=r.length}},i:O,o:O,d(t){t&&_(e),R(a,t)}}}function S(s){return s.substring(0,1).toUpperCase()+s.substring(1)}function lt(s,e,n){let o;W(s,et,t=>n(0,o=t));let v=["default","underwater","vintage","watermelon"],u=["banana","rose","sky","hamlindigo"];function r(t){document.body.setAttribute("data-theme",t),o?localStorage.setItem("light-theme",t):localStorage.setItem("theme",t)}return[o,v,u,r,t=>{r(t)}]}class ot extends Z{constructor(e){super(),tt(this,e,lt,at,Q,{})}}export{ot as component};