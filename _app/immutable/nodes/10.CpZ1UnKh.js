import{s as ne,e as v,E as A,c as g,a as k,d as p,G as C,b as E,P as oe,i as $,g as f,Q as G,J as K,M as W,C as ie,o as ce,D as S,F as I,I as Q,H as R,T as de,k as ae,r as H,n as re}from"../chunks/scheduler.BZk8TU8a.js";import{h as U,u as fe}from"../chunks/await_block.Br0LvuUK.js";import{e as L}from"../chunks/each.C4jGDMaV.js";import{S as ue,i as he,b as _e,d as pe,m as me,a as ve,t as ge,e as be}from"../chunks/index.CsWC3knp.js";import{g as X}from"../chunks/entry.Debqq_31.js";import{P as ke}from"../chunks/pageSelector.CH7YCjw2.js";import{W as we}from"../chunks/main.D8RZwWgc.js";import{g as Ee}from"../chunks/stores.DGqWjAEG.js";import"../chunks/ProgressBar.svelte_svelte_type_style_lang.BXgmfzrK.js";function Y(r,e,s){const t=r.slice();return t[12]=e[s],t}function Pe(r,e,s){const t=r.slice();return t[8]=e[s],t}function Z(r,e,s){const t=r.slice();return t[16]=e[s],t}function ee(r){let e,s="- current";return{c(){e=v("span"),e.textContent=s},l(t){e=g(t,"SPAN",{"data-svelte-h":!0}),ae(e)!=="svelte-1xiodio"&&(e.textContent=s)},m(t,l){$(t,e,l)},d(t){t&&p(e)}}}function te(r){let e,s=r[16]+"",t,l,n,a,i=r[16]==r[1]&&ee();return{c(){e=v("option"),t=S(s),l=A(),i&&i.c(),n=A(),this.h()},l(o){e=g(o,"OPTION",{});var c=k(e);t=I(c,s),l=C(c),i&&i.l(c),n=C(c),c.forEach(p),this.h()},h(){e.__value=a=r[16],Q(e,e.__value)},m(o,c){$(o,e,c),f(e,t),f(e,l),i&&i.m(e,null),f(e,n)},p(o,c){c&4&&s!==(s=o[16]+"")&&R(t,s),o[16]==o[1]?i||(i=ee(),i.c(),i.m(e,n)):i&&(i.d(1),i=null),c&4&&a!==(a=o[16])&&(e.__value=a,Q(e,e.__value))},d(o){o&&p(e),i&&i.d()}}}function Se(r){let e,s=r[15]+"",t;return{c(){e=v("p"),t=S(s),this.h()},l(l){e=g(l,"P",{class:!0});var n=k(e);t=I(n,s),n.forEach(p),this.h()},h(){E(e,"class","text-3xl text-error-500")},m(l,n){$(l,e,n),f(e,t)},p(l,n){n&1&&s!==(s=l[15]+"")&&R(t,s)},d(l){l&&p(e)}}}function Ie(r){let e,s=L(se(r[11].classes)),t=[];for(let l=0;l<s.length;l+=1)t[l]=le(Y(r,s,l));return{c(){for(let l=0;l<t.length;l+=1)t[l].c();e=H()},l(l){for(let n=0;n<t.length;n+=1)t[n].l(l);e=H()},m(l,n){for(let a=0;a<t.length;a+=1)t[a]&&t[a].m(l,n);$(l,e,n)},p(l,n){if(n&1){s=L(se(l[11].classes));let a;for(a=0;a<s.length;a+=1){const i=Y(l,s,a);t[a]?t[a].p(i,n):(t[a]=le(i),t[a].c(),t[a].m(e.parentNode,e))}for(;a<t.length;a+=1)t[a].d(1);t.length=s.length}},d(l){l&&p(e),W(t,l)}}}function ye(r){let e,s=r[12].start_time+"",t,l,n=r[12].end_time+"",a;return{c(){e=v("p"),t=S(s),l=S(" - "),a=S(n),this.h()},l(i){e=g(i,"P",{class:!0});var o=k(e);t=I(o,s),l=I(o," - "),a=I(o,n),o.forEach(p),this.h()},h(){E(e,"class","text-2xl")},m(i,o){$(i,e,o),f(e,t),f(e,l),f(e,a)},p(i,o){o&1&&s!==(s=i[12].start_time+"")&&R(t,s),o&1&&n!==(n=i[12].end_time+"")&&R(a,n)},d(i){i&&p(e)}}}function Te(r){let e,s,t=r[12].period.includes("-")?"s":"",l,n,a=r[12].period+"",i;return{c(){e=v("p"),s=S("Period"),l=S(t),n=A(),i=S(a),this.h()},l(o){e=g(o,"P",{class:!0});var c=k(e);s=I(c,"Period"),l=I(c,t),n=C(c),i=I(c,a),c.forEach(p),this.h()},h(){E(e,"class","text-2xl")},m(o,c){$(o,e,c),f(e,s),f(e,l),f(e,n),f(e,i)},p(o,c){c&1&&t!==(t=o[12].period.includes("-")?"s":"")&&R(l,t),c&1&&a!==(a=o[12].period+"")&&R(i,a)},d(o){o&&p(e)}}}function le(r){let e,s,t,l=r[12].name+"",n,a,i,o,c,y=r[12].teacher+"",T,P,d,_,h,m,u,N,V=r[12].room+"",M,q;function j(b,w){return b[12].start_time==null||b[12].end_time==null?Te:ye}let B=j(r),D=B(r);return{c(){e=v("div"),s=v("div"),t=v("span"),n=S(l),a=A(),i=v("br"),o=A(),c=v("span"),T=S(y),P=A(),d=v("div"),D.c(),_=A(),h=v("br"),m=A(),u=v("p"),N=S("Room: "),M=S(V),q=A(),this.h()},l(b){e=g(b,"DIV",{class:!0});var w=k(e);s=g(w,"DIV",{class:!0});var x=k(s);t=g(x,"SPAN",{class:!0});var z=k(t);n=I(z,l),z.forEach(p),a=C(x),i=g(x,"BR",{}),o=C(x),c=g(x,"SPAN",{class:!0});var F=k(c);T=I(F,y),F.forEach(p),x.forEach(p),P=C(w),d=g(w,"DIV",{class:!0});var O=k(d);D.l(O),_=C(O),h=g(O,"BR",{}),m=C(O),u=g(O,"P",{class:!0});var J=k(u);N=I(J,"Room: "),M=I(J,V),J.forEach(p),O.forEach(p),q=C(w),w.forEach(p),this.h()},h(){E(t,"class","text-2xl"),E(c,"class","text-lg"),E(s,"class","flex50 block pl-3 svelte-spalkl"),E(u,"class","text-lg"),E(d,"class","flex50 block pr-3 text-right svelte-spalkl"),E(e,"class","card gradecard p-1 svelte-spalkl")},m(b,w){$(b,e,w),f(e,s),f(s,t),f(t,n),f(s,a),f(s,i),f(s,o),f(s,c),f(c,T),f(e,P),f(e,d),D.m(d,null),f(d,_),f(d,h),f(d,m),f(d,u),f(u,N),f(u,M),f(e,q)},p(b,w){w&1&&l!==(l=b[12].name+"")&&R(n,l),w&1&&y!==(y=b[12].teacher+"")&&R(T,y),B===(B=j(b))&&D?D.p(b,w):(D.d(1),D=B(b),D&&(D.c(),D.m(d,_))),w&1&&V!==(V=b[12].room+"")&&R(M,V)},d(b){b&&p(e),D.d()}}}function De(r){let e,s=L({length:8}),t=[];for(let l=0;l<s.length;l+=1)t[l]=Ae(Pe(r,s,l));return{c(){for(let l=0;l<t.length;l+=1)t[l].c();e=H()},l(l){for(let n=0;n<t.length;n+=1)t[n].l(l);e=H()},m(l,n){for(let a=0;a<t.length;a+=1)t[a]&&t[a].m(l,n);$(l,e,n)},p:re,d(l){l&&p(e),W(t,l)}}}function Ae(r){let e,s='<div class="flex50 block pl-3 pt-1 svelte-spalkl"><div class="h-2.5 rounded-lg bg-gray-700 w-24 md:w-48"></div> <br/> <div class="h-2.5 rounded-lg bg-gray-600 w-16 md:w-32"></div></div> <div class="flex50 pr-3 pt-1 flex items-end flex-col svelte-spalkl"><div class="h-2.5 rounded-lg bg-gray-700 w-28 md:w-48"></div> <br/> <div class="h-5 rounded-lg bg-gray-600 w-20 mr-2 mt-2 md:w-30"></div></div> ';return{c(){e=v("div"),e.innerHTML=s,this.h()},l(t){e=g(t,"DIV",{class:!0,"data-svelte-h":!0}),ae(e)!=="svelte-1q98nla"&&(e.innerHTML=s),this.h()},h(){E(e,"class","card gradecard placeholder animate-pulse p-2 svelte-spalkl")},m(t,l){$(t,e,l)},p:re,d(t){t&&p(e)}}}function Ce(r){let e,s,t,l,n,a,i,o,c,y,T;l=new ke({props:{classes:"select variant-ghost-primary",selected:"schedule"}});let P=L(r[2]),d=[];for(let h=0;h<P.length;h+=1)d[h]=te(Z(r,P,h));let _={ctx:r,current:null,token:null,hasCatch:!0,pending:De,then:Ie,catch:Se,value:11,error:15};return U(o=r[0],_),{c(){e=v("div"),s=v("div"),t=v("div"),_e(l.$$.fragment),n=A(),a=v("select");for(let h=0;h<d.length;h+=1)d[h].c();i=A(),_.block.c(),this.h()},l(h){e=g(h,"DIV",{class:!0});var m=k(e);s=g(m,"DIV",{class:!0});var u=k(s);t=g(u,"DIV",{});var N=k(t);pe(l.$$.fragment,N),N.forEach(p),n=C(u),a=g(u,"SELECT",{class:!0});var V=k(a);for(let M=0;M<d.length;M+=1)d[M].l(V);V.forEach(p),u.forEach(p),i=C(m),_.block.l(m),m.forEach(p),this.h()},h(){E(a,"class","select variant-ghost-primary selector justify-self-end svelte-spalkl"),r[1]===void 0&&oe(()=>r[4].call(a)),E(s,"class","grid grid-cols-2 w-4/5"),E(e,"class","container")},m(h,m){$(h,e,m),f(e,s),f(s,t),me(l,t,null),f(s,n),f(s,a);for(let u=0;u<d.length;u+=1)d[u]&&d[u].m(a,null);G(a,r[1],!0),f(e,i),_.block.m(e,_.anchor=null),_.mount=()=>e,_.anchor=null,c=!0,y||(T=[K(a,"change",r[4]),K(a,"change",r[3])],y=!0)},p(h,[m]){if(r=h,m&6){P=L(r[2]);let u;for(u=0;u<P.length;u+=1){const N=Z(r,P,u);d[u]?d[u].p(N,m):(d[u]=te(N),d[u].c(),d[u].m(a,null))}for(;u<d.length;u+=1)d[u].d(1);d.length=P.length}m&6&&G(a,r[1]),_.ctx=r,m&1&&o!==(o=r[0])&&U(o,_)||fe(_,r,m)},i(h){c||(ve(l.$$.fragment,h),c=!0)},o(h){ge(l.$$.fragment,h),c=!1},d(h){h&&p(e),be(l),W(d,h),_.block.d(),_.token=null,_=null,y=!1,ie(T)}}}function se(r){return r.filter(e=>(e.start_time!="12:00 AM"||e.end_time!="12:00 AM")&&e.period!="0"&&e.name!="Abbrev Schedule")}function $e(r,e,s){const t=Ee();ce(async()=>{Number.parseInt(sessionStorage.getItem("expiry")??"0")<Date.now()&&await X("/")});let l=n(null);async function n(T){const P={headers:{"Accept-Encoding":"br",Authorization:`Bearer ${sessionStorage.getItem("token")}`}},d=await fetch(`${we}/schedule${T!==null?"?term_index="+T:""}`,P);if(d.headers.has("set-token")&&sessionStorage.setItem("token",d.headers.get("set-token")),d.status!=200){let h=await d.text();const m={message:`${h}`,background:"variant-filled-error bg-gradient-to-r from-error-400 to-error-600",timeout:3e3};throw t.trigger(m),await X("/grades"),new Error(h)}let _=JSON.parse(await d.text());return T===null&&(i=_.term_index,s(2,c=i==-1?[..._.terms,"Today"]:_.terms)),console.debug(_),_}async function a(){o=="Today"?s(0,l=n(-1)):s(0,l=n(c.indexOf(o)))}let i=-1,o="Today",c=["Today"];function y(){o=de(this),s(1,o),s(2,c)}return[l,o,c,a,y]}class qe extends ue{constructor(e){super(),he(this,e,$e,Ce,ne,{})}}export{qe as component};
