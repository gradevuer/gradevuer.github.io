import{s as ge,e as m,E as V,c as v,a as x,d as p,G as D,b as w,P as pe,i as P,g as u,Q,J as X,M as ne,C as he,o as me,D as J,F as R,I as ve,H,T as be,k as j,r as U,n as W}from"../chunks/scheduler.HaoJMjUf.js";import{S as ke,i as Ie,b as ie,d as ce,m as fe,t as L,c as de,a as G,e as ue,g as _e}from"../chunks/index.G81k-Xhd.js";import{m as Y,g as Se}from"../chunks/util.bEHLoHXH.js";import{e as B,u as we,o as ye}from"../chunks/each.BvinSC2D.js";import{g as Ee}from"../chunks/entry.bxCKXrBO.js";import{W as Ne}from"../chunks/main.DlQOQXQP.js";import{g as xe}from"../chunks/stores.6eYr0iPl.js";import"../chunks/ProgressBar.svelte_svelte_type_style_lang.F8mDr4Rg.js";import{G as $e}from"../chunks/gradeText.0XH_dBwp.js";import{P as Ce}from"../chunks/pageSelector.DErIiFTE.js";const{Map:Te}=Se;function Z(i,e,l){const s=i.slice();return s[11]=e[l],s[10]=l,s}function ee(i,e,l){const s=i.slice();return s[8]=e[l],s[10]=l,s}function te(i,e,l){const s=i.slice();return s[13]=e[l],s[10]=l,s}function se(i){let e,l="- current";return{c(){e=m("span"),e.textContent=l},l(s){e=v(s,"SPAN",{"data-svelte-h":!0}),j(e)!=="svelte-1xiodio"&&(e.textContent=l)},m(s,r){P(s,e,r)},d(s){s&&p(e)}}}function le(i){let e,l=i[13].name+"",s,r,n,t=i[10]===i[1]&&se();return{c(){e=m("option"),s=J(l),r=V(),t&&t.c(),n=V(),this.h()},l(a){e=v(a,"OPTION",{});var o=x(e);s=R(o,l),r=D(o),t&&t.l(o),n=D(o),o.forEach(p),this.h()},h(){e.__value=i[10],ve(e,e.__value)},m(a,o){P(a,e,o),u(e,s),u(e,r),t&&t.m(e,null),u(e,n)},p(a,o){o&1&&l!==(l=a[13].name+"")&&H(s,l),a[10]===a[1]?t||(t=se(),t.c(),t.m(e,n)):t&&(t.d(1),t=null)},d(a){a&&p(e),t&&t.d()}}}function Ve(i){let e=[],l=new Te,s,r,n=B(i[0].classes);const t=a=>a[10];for(let a=0;a<n.length;a+=1){let o=Z(i,n,a),d=t(o);l.set(d,e[a]=re(d,o))}return{c(){for(let a=0;a<e.length;a+=1)e[a].c();s=U()},l(a){for(let o=0;o<e.length;o+=1)e[o].l(a);s=U()},m(a,o){for(let d=0;d<e.length;d+=1)e[d]&&e[d].m(a,o);P(a,s,o),r=!0},p(a,o){o&1&&(n=B(a[0].classes),_e(),e=we(e,o,t,1,a,n,l,s.parentNode,ye,re,s,Z),de())},i(a){if(!r){for(let o=0;o<n.length;o+=1)G(e[o]);r=!0}},o(a){for(let o=0;o<e.length;o+=1)L(e[o]);r=!1},d(a){a&&p(s);for(let o=0;o<e.length;o+=1)e[o].d(a)}}}function De(i){let e,l=B({length:i[0].classes.length==0?7:i[0].classes.length}),s=[];for(let r=0;r<l.length;r+=1)s[r]=ae(ee(i,l,r));return{c(){for(let r=0;r<s.length;r+=1)s[r].c();e=U()},l(r){for(let n=0;n<s.length;n+=1)s[n].l(r);e=U()},m(r,n){for(let t=0;t<s.length;t+=1)s[t]&&s[t].m(r,n);P(r,e,n)},p(r,n){if(n&1){l=B({length:r[0].classes.length==0?7:r[0].classes.length});let t;for(t=0;t<l.length;t+=1){const a=ee(r,l,t);s[t]?s[t].p(a,n):(s[t]=ae(),s[t].c(),s[t].m(e.parentNode,e))}for(;t<s.length;t+=1)s[t].d(1);s.length=l.length}},i:W,o:W,d(r){r&&p(e),ne(s,r)}}}function Pe(i){let e=i[11].grade+"",l,s,r=i[11].letter_grade+"",n;return{c(){l=J(e),s=J("% - "),n=J(r)},l(t){l=R(t,e),s=R(t,"% - "),n=R(t,r)},m(t,a){P(t,l,a),P(t,s,a),P(t,n,a)},p(t,a){a&1&&e!==(e=t[11].grade+"")&&H(l,e),a&1&&r!==(r=t[11].letter_grade+"")&&H(n,r)},d(t){t&&(p(l),p(s),p(n))}}}function re(i,e){let l,s,r,n=oe(e[11].name)+"",t,a,o,d,I,y=e[11].teacher+"",$,b,f,E,S,M,c,_,g,h="View",C,z,O;return E=new $e({props:{style:"text-3xl bg-gradient-to-t",grade:Y(e[11].letter_grade),$$slots:{default:[Pe]},$$scope:{ctx:e}}}),{key:i,first:null,c(){l=m("div"),s=m("div"),r=m("span"),t=J(n),a=V(),o=m("br"),d=V(),I=m("span"),$=J(y),b=V(),f=m("div"),ie(E.$$.fragment),S=V(),M=m("br"),c=V(),_=m("a"),g=m("button"),g.textContent=h,z=V(),this.h()},l(N){l=v(N,"DIV",{class:!0});var k=x(l);s=v(k,"DIV",{class:!0});var T=x(s);r=v(T,"SPAN",{class:!0});var q=x(r);t=R(q,n),q.forEach(p),a=D(T),o=v(T,"BR",{}),d=D(T),I=v(T,"SPAN",{class:!0});var F=x(I);$=R(F,y),F.forEach(p),T.forEach(p),b=D(k),f=v(k,"DIV",{class:!0});var A=x(f);ce(E.$$.fragment,A),S=D(A),M=v(A,"BR",{}),c=D(A),_=v(A,"A",{href:!0});var K=x(_);g=v(K,"BUTTON",{class:!0,"data-svelte-h":!0}),j(g)!=="svelte-1x6mmyt"&&(g.textContent=h),K.forEach(p),A.forEach(p),z=D(k),k.forEach(p),this.h()},h(){w(r,"class","text-xl"),w(I,"class","text-l"),w(s,"class","flex50 block pl-3 svelte-1e6zu7p"),w(g,"class","btn bg-gradient-to-br variant-gradient-primary-tertiary mr-2 mt-2"),w(_,"href",C="/classView/"+e[10]),w(f,"class","flex50 block pr-3 text-right svelte-1e6zu7p"),w(l,"class","card gradecard p-1 svelte-1e6zu7p"),this.first=l},m(N,k){P(N,l,k),u(l,s),u(s,r),u(r,t),u(s,a),u(s,o),u(s,d),u(s,I),u(I,$),u(l,b),u(l,f),fe(E,f,null),u(f,S),u(f,M),u(f,c),u(f,_),u(_,g),u(l,z),O=!0},p(N,k){e=N,(!O||k&1)&&n!==(n=oe(e[11].name)+"")&&H(t,n),(!O||k&1)&&y!==(y=e[11].teacher+"")&&H($,y);const T={};k&1&&(T.grade=Y(e[11].letter_grade)),k&32769&&(T.$$scope={dirty:k,ctx:e}),E.$set(T),(!O||k&1&&C!==(C="/classView/"+e[10]))&&w(_,"href",C)},i(N){O||(G(E.$$.fragment,N),O=!0)},o(N){L(E.$$.fragment,N),O=!1},d(N){N&&p(l),ue(E)}}}function ae(i){let e,l='<div class="flex50 block pl-3 pt-1 svelte-1e6zu7p"><div class="h-2.5 rounded-lg bg-gray-700 w-24 md:w-48"></div> <br/> <div class="h-2.5 rounded-lg bg-gray-600 w-16 md:w-32"></div></div> <div class="flex50 pr-3 pt-1 flex items-end flex-col svelte-1e6zu7p"><div class="h-2.5 rounded-lg bg-gray-700 w-28 md:w-48"></div> <br/> <div class="h-5 rounded-lg bg-gray-600 w-20 mr-2 mt-2 md:w-30"></div></div> ';return{c(){e=m("div"),e.innerHTML=l,this.h()},l(s){e=v(s,"DIV",{class:!0,"data-svelte-h":!0}),j(e)!=="svelte-sbkri4"&&(e.innerHTML=l),this.h()},h(){w(e,"class","card gradecard placeholder animate-pulse p-2 svelte-1e6zu7p")},m(s,r){P(s,e,r)},p:W,d(s){s&&p(e)}}}function ze(i){let e,l,s,r,n,t,a,o,d,I,y,$;r=new Ce({props:{classes:"select variant-ghost-primary",selected:"grades"}});let b=B(i[0].reporting_periods),f=[];for(let c=0;c<b.length;c+=1)f[c]=le(te(i,b,c));const E=[De,Ve],S=[];function M(c,_){return c[3]?0:1}return o=M(i),d=S[o]=E[o](i),{c(){e=m("div"),l=m("div"),s=m("div"),ie(r.$$.fragment),n=V(),t=m("select");for(let c=0;c<f.length;c+=1)f[c].c();a=V(),d.c(),this.h()},l(c){e=v(c,"DIV",{class:!0});var _=x(e);l=v(_,"DIV",{class:!0});var g=x(l);s=v(g,"DIV",{});var h=x(s);ce(r.$$.fragment,h),h.forEach(p),n=D(g),t=v(g,"SELECT",{class:!0});var C=x(t);for(let z=0;z<f.length;z+=1)f[z].l(C);C.forEach(p),g.forEach(p),a=D(_),d.l(_),_.forEach(p),this.h()},h(){w(t,"class","select variant-ghost-primary selector justify-self-end svelte-1e6zu7p"),i[2]===void 0&&pe(()=>i[5].call(t)),w(l,"class","grid grid-cols-2 w-4/5"),w(e,"class","container")},m(c,_){P(c,e,_),u(e,l),u(l,s),fe(r,s,null),u(l,n),u(l,t);for(let g=0;g<f.length;g+=1)f[g]&&f[g].m(t,null);Q(t,i[2],!0),u(e,a),S[o].m(e,null),I=!0,y||($=[X(t,"change",i[5]),X(t,"change",i[4])],y=!0)},p(c,[_]){if(_&3){b=B(c[0].reporting_periods);let h;for(h=0;h<b.length;h+=1){const C=te(c,b,h);f[h]?f[h].p(C,_):(f[h]=le(C),f[h].c(),f[h].m(t,null))}for(;h<f.length;h+=1)f[h].d(1);f.length=b.length}_&4&&Q(t,c[2]);let g=o;o=M(c),o===g?S[o].p(c,_):(_e(),L(S[g],1,1,()=>{S[g]=null}),de(),d=S[o],d?d.p(c,_):(d=S[o]=E[o](c),d.c()),G(d,1),d.m(e,null))},i(c){I||(G(r.$$.fragment,c),G(d),I=!0)},o(c){L(r.$$.fragment,c),L(d),I=!1},d(c){c&&p(e),ue(r),ne(f,c),S[o].d(),y=!1,he($)}}}function oe(i){return i.split("(")[0].trim()}function Oe(i,e,l){const s=xe();let r={classes:[],report_period:0,reporting_periods:[]},n=0,t,a=new Map,o=!1;async function d(){if(a.has(t)){l(0,r=a.get(t)),sessionStorage.setItem("data",JSON.stringify(r));return}l(3,o=!0);const y={headers:{"Accept-Encoding":"br",Authorization:`Bearer ${sessionStorage.getItem("token")}`}},$=await fetch(`${Ne}/grades/${t}`,y);let b=await $.text();if($.status!=200){const f={message:`Error loading ${r.reporting_periods[t].name}: ${b}`,background:"variant-filled-error bg-gradient-to-r from-error-400 to-error-600",timeout:3e3};throw l(0,r=a.get(n)),l(3,o=!1),l(2,t=n),s.trigger(f),new Error(b)}l(0,r=JSON.parse(b)),l(3,o=!1),sessionStorage.setItem("data",b),a.set(t,r)}me(async()=>{(sessionStorage.getItem("data")===null||Number.parseInt(sessionStorage.getItem("expiry")??"0")<Date.now())&&await Ee("/"),l(0,r=JSON.parse(sessionStorage.getItem("data"))),sessionStorage.getItem("cidx")===null?sessionStorage.setItem("cidx",""+r.report_period):Number.parseInt(sessionStorage.getItem("cidx"))!=r.report_period&&a.set(Number.parseInt(sessionStorage.getItem("cidx")),JSON.parse(sessionStorage.getItem("cdata"))),l(1,n=Number.parseInt(sessionStorage.getItem("cidx"))),l(2,t=r.report_period),a.set(t,r)});function I(){t=be(this),l(2,t)}return[r,n,t,o,d,I]}class je extends ke{constructor(e){super(),Ie(this,e,Oe,ze,ge,{})}}export{je as component};
