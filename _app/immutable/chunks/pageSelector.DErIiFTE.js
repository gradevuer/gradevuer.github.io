import{s as S,e as E,c as k,a as C,d as h,b as f,P as T,i as P,Q as d,J as m,n as _,M as j,C as F,D as I,E as N,F as O,G as q,I as w,g,T as y}from"./scheduler.HaoJMjUf.js";import{e as p}from"./each.BvinSC2D.js";import{S as D,i as G}from"./index.G81k-Xhd.js";import{g as J}from"./entry.bxCKXrBO.js";function v(a,e,c){const i=a.slice();return i[5]=e[c],i}function b(a){let e,c=M(a[5])+"",i,r;return{c(){e=E("option"),i=I(c),r=N(),this.h()},l(n){e=k(n,"OPTION",{});var t=C(e);i=O(t,c),r=q(t),t.forEach(h),this.h()},h(){e.__value=a[5],w(e,e.__value)},m(n,t){P(n,e,t),g(e,i),g(e,r)},p:_,d(n){n&&h(e)}}}function L(a){let e,c,i,r,n=p(a[2]),t=[];for(let s=0;s<n.length;s+=1)t[s]=b(v(a,n,s));return{c(){e=E("select");for(let s=0;s<t.length;s+=1)t[s].c();this.h()},l(s){e=k(s,"SELECT",{class:!0});var o=C(e);for(let l=0;l<t.length;l+=1)t[l].l(o);o.forEach(h),this.h()},h(){f(e,"class",c=a[1]+" selector svelte-j16bhc"),a[0]===void 0&&T(()=>a[4].call(e))},m(s,o){P(s,e,o);for(let l=0;l<t.length;l+=1)t[l]&&t[l].m(e,null);d(e,a[0],!0),i||(r=[m(e,"change",a[4]),m(e,"change",a[3])],i=!0)},p(s,[o]){if(o&4){n=p(s[2]);let l;for(l=0;l<n.length;l+=1){const u=v(s,n,l);t[l]?t[l].p(u,o):(t[l]=b(u),t[l].c(),t[l].m(e,null))}for(;l<t.length;l+=1)t[l].d(1);t.length=n.length}o&2&&c!==(c=s[1]+" selector svelte-j16bhc")&&f(e,"class",c),o&5&&d(e,s[0])},i:_,o:_,d(s){s&&h(e),j(t,s),i=!1,F(r)}}}function M(a){return a.substring(0,1).toUpperCase()+a.substring(1)}function Q(a,e,c){let i=["grades","schedule","school info","student info","documents"],{selected:r}=e,{classes:n=""}=e;function t(){J("/"+r.replace(" ","_"))}function s(){r=y(this),c(0,r),c(2,i)}return a.$$set=o=>{"selected"in o&&c(0,r=o.selected),"classes"in o&&c(1,n=o.classes)},[r,n,i,t,s]}class H extends D{constructor(e){super(),G(this,e,Q,L,S,{selected:0,classes:1})}}export{H as P};
