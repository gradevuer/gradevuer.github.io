import{s as N,e as f,H as x,I as $,c as u,a as _,J as E,d,K as A,b as g,i as I,g as p,N as S,n as q,t as P}from"../chunks/scheduler.CUUnO8oO.js";import{S as y,i as C}from"../chunks/index.ClMIGeE-.js";import{p as D}from"../chunks/stores.rAIIzQ3X.js";function H(i){var b;let e,a,s=i[0].status+"",o,h,n,c=((b=i[0].error)==null?void 0:b.message)+"",m;return{c(){e=f("div"),a=f("span"),o=x(s),h=$(),n=f("span"),m=x(c),this.h()},l(r){e=u(r,"DIV",{class:!0});var t=_(e);a=u(t,"SPAN",{class:!0});var l=_(a);o=E(l,s),l.forEach(d),h=A(t),n=u(t,"SPAN",{class:!0});var v=_(n);m=E(v,c),v.forEach(d),t.forEach(d),this.h()},h(){g(a,"class","header bg-gradient-to-br from-error-200 to-error-700 bg-clip-text text-transparent box-decoration-clone svelte-1h74tq0"),g(n,"class","big bg-gradient-to-br from-error-200 to-error-700 bg-clip-text text-transparent box-decoration-clone svelte-1h74tq0"),g(e,"class","container")},m(r,t){I(r,e,t),p(e,a),p(a,o),p(e,h),p(e,n),p(n,m)},p(r,[t]){var l;t&1&&s!==(s=r[0].status+"")&&S(o,s),t&1&&c!==(c=((l=r[0].error)==null?void 0:l.message)+"")&&S(m,c)},i:q,o:q,d(r){r&&d(e)}}}function J(i,e,a){let s;return P(i,D,o=>a(0,s=o)),[s]}class k extends y{constructor(e){super(),C(this,e,J,H,N,{})}}export{k as component};