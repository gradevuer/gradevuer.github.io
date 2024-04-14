var rt=Object.defineProperty;var st=(s,e,n)=>e in s?rt(s,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[e]=n;var Q=(s,e,n)=>(st(s,typeof e!="symbol"?e+"":e,n),n);import{a as Ne,e as x,b as F,t as W,c as w,d as C,h as p,i as L,f as Z,j as l,D as B,k as U,l as c,m as ce,n as O,N as Ae,_ as Fe,$ as Le,z as ke,w as oe,ag as it,O as Oe,G as tt,p as ye,q as Ee,C as Ue,o as ot,y as lt,ah as at,x as ut,r as nt,B as fe,a1 as ct,ai as Me}from"../chunks/scheduler.BgK5Tl8W.js";import{S as Ce,i as Se,a as $,t as ie,c as Pe,b as me,d as ge,m as be,g as De,e as ve,j as ft}from"../chunks/index.NEkLQFSy.js";import{g as dt}from"../chunks/globals.D0QH3NT1.js";import{e as Te,u as ht,o as pt}from"../chunks/each.Bt99gS3h.js";import{p as _t}from"../chunks/stores.Bx8X7Q0D.js";import{g as qe}from"../chunks/entry.DW7OctHw.js";import{g as mt}from"../chunks/spread.CN4WR7uZ.js";import{S as gt,O as bt}from"../chunks/stay.C-BlIyKy.js";import{g as vt}from"../chunks/stores.BSME2v04.js";import"../chunks/ProgressBar.svelte_svelte_type_style_lang.D45o3ZTf.js";function xt(s){let e,n,t=`${s[1]}%`,r,i,o=s[0][0]+"",_,E,S=s[3](s[0][1].points_earned)+"",N,G,D=s[3](s[0][1].points_possible)+"",M,X,H=s[2].toFixed(2)+"",V,R;return{c(){e=x("div"),n=x("div"),r=F(),i=x("span"),_=W(o),E=W(" - "),N=W(S),G=W(" / "),M=W(D),X=W(", "),V=W(H),R=W("%"),this.h()},l(v){e=w(v,"DIV",{class:!0});var z=C(e);n=w(z,"DIV",{class:!0}),C(n).forEach(p),r=L(z),i=w(z,"SPAN",{class:!0});var I=C(i);_=Z(I,o),E=Z(I," - "),N=Z(I,S),G=Z(I," / "),M=Z(I,D),X=Z(I,", "),V=Z(I,H),R=Z(I,"%"),I.forEach(p),z.forEach(p),this.h()},h(){l(n,"class","progress-bar-meter filled card bg-gradient-to-r from-tertiary-400 to-tertiary-700 absolute svelte-qlccnd"),B(n,"width",t),B(n,"height","100%"),l(i,"class","ml-2"),l(e,"class","progress-bar card bar mt-2 height3 flex items-center relative svelte-qlccnd")},m(v,z){U(v,e,z),c(e,n),c(e,r),c(e,i),c(i,_),c(i,E),c(i,N),c(i,G),c(i,M),c(i,X),c(i,V),c(i,R)},p(v,[z]){z&2&&t!==(t=`${v[1]}%`)&&B(n,"width",t),z&1&&o!==(o=v[0][0]+"")&&ce(_,o),z&1&&S!==(S=v[3](v[0][1].points_earned)+"")&&ce(N,S),z&1&&D!==(D=v[3](v[0][1].points_possible)+"")&&ce(M,D),z&4&&H!==(H=v[2].toFixed(2)+"")&&ce(V,H)},i:O,o:O,d(v){v&&p(e)}}}function wt(s,e,n){let{data:t}=e,r=_=>Math.round(_*100)/100,i=0,o=0;return s.$$set=_=>{"data"in _&&n(0,t=_.data)},s.$$.update=()=>{s.$$.dirty&7&&(n(1,i=t[1].points_earned/t[1].points_possible*100),n(2,o=i),0>i&&n(1,i=0),(isNaN(i)||i>100)&&n(1,i=100),isNaN(o)&&n(2,o=0))},[t,i,o,r]}class kt extends Ce{constructor(e){super(),Se(this,e,wt,xt,Ne,{data:0})}}const yt=`
  height: 0 !important;
  visibility: hidden !important;
  overflow: hidden !important;
  position: absolute !important;
  z-index: -1000 !important;
  top: 0 !important;
  right: 0 !important;
  pointer-events: none !important;
  opacity: 0 !important;
  font-size: 1.25rem; 
`,Et=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function Re(s){if(s){if(typeof s=="string"){const e=Number.parseInt(s,10);if(!Number.isNaN(s))return e}if(typeof s=="number")return s}return 0}function Nt(s){const e=s.getPropertyValue("box-sizing"),n=Number.parseFloat(s.getPropertyValue("padding-bottom"))+Number.parseFloat(s.getPropertyValue("padding-top")),t=Number.parseFloat(s.getPropertyValue("border-bottom-width"))+Number.parseFloat(s.getPropertyValue("border-top-width"));return{boxSizing:e,paddingSize:n,borderSize:t}}function Ge(s){return s==="border-box"}const te=class te{constructor(){Q(this,"_element");Q(this,"_minRows",0);Q(this,"_maxRows",0);Q(this,"_minHeightFromResizeObserver",0);Q(this,"_sourceStyles");Q(this,"_hasDragStarted",!1);Q(this,"_lastCalculatedHeight",0);Q(this,"_probablyResizeHappen",!1);Q(this,"hasStarted",!1);Q(this,"__onpointerdown",e=>{this._element.setPointerCapture(e.pointerId),this._hasDragStarted=!0});Q(this,"__onpointermove",()=>{this._probablyResizeHappen=!0});Q(this,"__onpointerup",e=>{if(this._element.releasePointerCapture(e.pointerId),this._hasDragStarted=!1,this._probablyResizeHappen){const n=Re(this._element.style.getPropertyValue("height"));!Number.isNaN(n)&&n!==this._lastCalculatedHeight&&(this._minHeightFromResizeObserver=n)}this._probablyResizeHappen=!1})}__setup({styles:e,maxRows:n,minRows:t}){if(this._sourceStyles=e,this._maxRows=Re(n),this._minRows=Re(t),this._element.addEventListener("pointerdown",this.__onpointerdown),this._element.addEventListener("pointermove",this.__onpointermove),this._element.addEventListener("pointerup",this.__onpointerup),te._proxyTextareaElement===void 0){te._proxyTextareaElement=document.createElement("textarea");const r=Et.map(i=>`${i}:${e.getPropertyValue(i)}`).join(";");te._proxyTextareaElement.setAttribute("style",`${r};${yt}`),(te._proxyTextareaElement.parentNode===null||te._proxyTextareaElement.parentNode!==document.body)&&document.body.appendChild(te._proxyTextareaElement)}}__updateText(e){te._proxyTextareaElement.value=e}__getComputedHeight(){const{boxSizing:e,paddingSize:n,borderSize:t}=Nt(this._sourceStyles);let r=te._proxyTextareaElement.scrollHeight;if(this._maxRows!==0||this._minRows!==0){te._proxyTextareaElement.value="";const i=te._proxyTextareaElement.scrollHeight-n;if(this._minRows!==0){let o=i*this._minRows;Ge(e)&&(o+=n+t),r=Math.max(r,o)}if(this._maxRows!==0){let o=i*this._maxRows;Ge(e)&&(o+=n+t),r=Math.min(r,o)}}return r=Math.max(r,this._minHeightFromResizeObserver),this._lastCalculatedHeight=r,r}start(e,n,t){if(this.hasStarted)return;this._element=e;const r=getComputedStyle(e);this.__setup({styles:r,maxRows:t,minRows:n}),this.hasStarted=!0}onUpdateText(e){this.__updateText(e),this._element.style.setProperty("height",this.__getComputedHeight()+"px")}cleanUp(){var e,n,t;(e=this._element)==null||e.removeEventListener("pointerdown",this.__onpointerdown),(n=this._element)==null||n.removeEventListener("pointermove",this.__onpointermove),(t=this._element)==null||t.removeEventListener("pointerup",this.__onpointerup)}};Q(te,"_proxyTextareaElement");let He=te;function Ct(s){let e,n,t,r=[s[2]],i={};for(let o=0;o<r.length;o+=1)i=Ae(i,r[o]);return{c(){e=x("textarea"),this.h()},l(o){e=w(o,"TEXTAREA",{}),C(e).forEach(p),this.h()},h(){Fe(e,i),Le(e,"svelte-ati980",!0)},m(o,_){U(o,e,_),e.autofocus&&e.focus(),s[5](e),ke(e,s[0]),n||(t=oe(e,"input",s[6]),n=!0)},p(o,[_]){Fe(e,i=mt(r,[_&4&&o[2]])),_&1&&ke(e,o[0]),Le(e,"svelte-ati980",!0)},i:O,o:O,d(o){o&&p(e),s[5](null),n=!1,t()}}}function St(s,e,n){let{value:t=""}=e,{minRows:r=void 0}=e,{maxRows:i=void 0}=e,o=null;const _=new He;it(()=>{_.cleanUp()});function E(N){tt[N?"unshift":"push"](()=>{o=N,n(1,o)})}function S(){t=this.value,n(0,t)}return s.$$set=N=>{n(2,e=Ae(Ae({},e),Oe(N))),"value"in N&&n(0,t=N.value),"minRows"in N&&n(3,r=N.minRows),"maxRows"in N&&n(4,i=N.maxRows)},s.$$.update=()=>{s.$$.dirty&27&&(o!==null&&!_.hasStarted&&_.start(o,r,i),_.hasStarted&&_.onUpdateText((t||"").toString()))},e=Oe(e),[t,o,e,r,i,E,S]}class zt extends Ce{constructor(e){super(),Se(this,e,St,Ct,Ne,{value:0,minRows:3,maxRows:4})}}function Tt(s){let e,n;return{c(){e=ye("svg"),n=ye("path"),this.h()},l(t){e=Ee(t,"svg",{xmlns:!0,fill:!0,viewBox:!0,"stroke-width":!0,stroke:!0,style:!0});var r=C(e);n=Ee(r,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),C(n).forEach(p),r.forEach(p),this.h()},h(){l(n,"stroke-linecap","round"),l(n,"stroke-linejoin","round"),l(n,"d","M12 4.5v15m7.5-7.5h-15"),l(e,"xmlns","http://www.w3.org/2000/svg"),l(e,"fill","none"),l(e,"viewBox","0 0 24 24"),l(e,"stroke-width","1.5"),l(e,"stroke","currentColor"),B(e,"width","1em"),B(e,"height","1em")},m(t,r){U(t,e,r),c(e,n)},p:O,i:O,o:O,d(t){t&&p(e)}}}class Mt extends Ce{constructor(e){super(),Se(this,e,null,Tt,Ne,{})}}function Rt(s){let e,n;return{c(){e=ye("svg"),n=ye("path"),this.h()},l(t){e=Ee(t,"svg",{xmlns:!0,fill:!0,viewBox:!0,"stroke-width":!0,stroke:!0,style:!0});var r=C(e);n=Ee(r,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),C(n).forEach(p),r.forEach(p),this.h()},h(){l(n,"stroke-linecap","round"),l(n,"stroke-linejoin","round"),l(n,"d","M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"),l(e,"xmlns","http://www.w3.org/2000/svg"),l(e,"fill","none"),l(e,"viewBox","0 0 24 24"),l(e,"stroke-width","1.5"),l(e,"stroke","currentColor"),B(e,"width","1em"),B(e,"height","1em")},m(t,r){U(t,e,r),c(e,n)},p:O,i:O,o:O,d(t){t&&p(e)}}}class At extends Ce{constructor(e){super(),Se(this,e,null,Rt,Ne,{})}}function Pt(s){let e,n;return{c(){e=ye("svg"),n=ye("path"),this.h()},l(t){e=Ee(t,"svg",{xmlns:!0,fill:!0,viewBox:!0,"stroke-width":!0,stroke:!0,style:!0});var r=C(e);n=Ee(r,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),C(n).forEach(p),r.forEach(p),this.h()},h(){l(n,"stroke-linecap","round"),l(n,"stroke-linejoin","round"),l(n,"d","m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"),l(e,"xmlns","http://www.w3.org/2000/svg"),l(e,"fill","none"),l(e,"viewBox","0 0 24 24"),l(e,"stroke-width","1.5"),l(e,"stroke","currentColor"),B(e,"width","1em"),B(e,"height","1em")},m(t,r){U(t,e,r),c(e,n)},p:O,i:O,o:O,d(t){t&&p(e)}}}class Dt extends Ce{constructor(e){super(),Se(this,e,null,Pt,Ne,{})}}const Ht=(s,{min_size:e=10,max_size:n=100}={min_size:10,max_size:100})=>{(()=>{s.parentElement&&jt(s,s.parentElement,e,n)})()};function It({clientWidth:s,clientHeight:e,scrollWidth:n,scrollHeight:t}){return t>e||n>s}function jt(s,e,n,t){let r=n,i=!1,o=n;for(s.style.fontSize=`${o}px`;!i&&r<t;)i=It(e),i||(s.style.fontSize=`${r}px`,r+=2);o=r-4,s.style.fontSize=`${o}px`}const Vt="display: inline-block; width: 100%; height: 100%;",{Map:Bt}=dt;function Xe(s,e,n){const t=s.slice();return t[23]=e[n],t[24]=e,t[25]=n,t}function Ye(s,e,n){const t=s.slice();return t[26]=e[n],t}function Je(s){let e,n,t,r,i,o=et(s[0].name)+"",_,E,S,N,G,D=(s[1]*100).toFixed(2)+"",M,X,H,V,R,v,z,I,Y,A,ue,J,ne,m,f,k,T,b=[],d=new Bt,y,j,re;function xe(a,u){return a[3].length>1?Xt:a[3]=="A"?Gt:a[3]=="B"?qt:a[3]=="C"?Ut:a[3]=="D"?Ot:a[3]=="E"?Lt:Ft}let we=xe(s),ee=we(s),P=Te(s[4]),g=[];for(let a=0;a<P.length;a+=1)g[a]=Ke(Ye(s,P,a));const q=a=>ie(g[a],1,1,()=>{g[a]=null});z=new At({}),A=new gt({}),ne=new bt({}),k=new Mt({});let de=Te(s[2]);const ze=a=>a[25];for(let a=0;a<de.length;a+=1){let u=Xe(s,de,a),h=ze(u);d.set(h,b[a]=$e(h,u))}return{c(){e=x("div"),n=x("div"),t=x("div"),r=x("div"),i=x("h1"),_=W(o),E=F(),S=x("div"),ee.c(),N=F(),G=x("span"),M=W(D),X=W("%"),H=F();for(let a=0;a<g.length;a+=1)g[a].c();V=F(),R=x("div"),v=x("button"),me(z.$$.fragment),I=F(),Y=x("button"),me(A.$$.fragment),ue=F(),J=x("button"),me(ne.$$.fragment),m=F(),f=x("button"),me(k.$$.fragment),T=F();for(let a=0;a<b.length;a+=1)b[a].c();this.h()},l(a){e=w(a,"DIV",{class:!0});var u=C(e);n=w(u,"DIV",{class:!0});var h=C(n);t=w(h,"DIV",{class:!0});var K=C(t);r=w(K,"DIV",{style:!0});var se=C(r);i=w(se,"H1",{class:!0});var he=C(i);_=Z(he,o),he.forEach(p),se.forEach(p),K.forEach(p),E=L(h),S=w(h,"DIV",{class:!0,style:!0});var le=C(S);ee.l(le),N=L(le),G=w(le,"SPAN",{class:!0});var ae=C(G);M=Z(ae,D),X=Z(ae,"%"),ae.forEach(p),le.forEach(p),h.forEach(p),H=L(u);for(let _e=0;_e<g.length;_e+=1)g[_e].l(u);V=L(u),R=w(u,"DIV",{class:!0});var pe=C(R);v=w(pe,"BUTTON",{class:!0,style:!0});var Ie=C(v);ge(z.$$.fragment,Ie),Ie.forEach(p),I=L(pe),Y=w(pe,"BUTTON",{class:!0,style:!0});var je=C(Y);ge(A.$$.fragment,je),je.forEach(p),ue=L(pe),J=w(pe,"BUTTON",{class:!0,style:!0});var Ve=C(J);ge(ne.$$.fragment,Ve),Ve.forEach(p),m=L(pe),f=w(pe,"BUTTON",{class:!0,style:!0});var Be=C(f);ge(k.$$.fragment,Be),Be.forEach(p),pe.forEach(p),T=L(u);for(let _e=0;_e<b.length;_e+=1)b[_e].l(u);u.forEach(p),this.h()},h(){l(i,"class","leading-none text-center"),l(r,"style",Vt),l(t,"class","overflow-hidden"),B(t,"height","120px"),l(G,"class","pb-1"),l(S,"class","float-right card items-center aspect-square text-center justify-self-end grid graderows p-1"),B(S,"width","120px"),B(S,"height","120px"),l(n,"class","grid auto2 flex items-center mx-2 svelte-8ep104"),l(v,"class","btn bg-gradient-to-tr variant-filled-secondary from-secondary-400 to-secondary-600 items-center justify-center flex text-3xl aspect-square p-0 justify-self-center"),B(v,"width","2em"),B(v,"height","2em"),l(Y,"class","btn bg-gradient-to-tr variant-filled-secondary from-secondary-400 to-secondary-600 items-center justify-center flex text-3xl aspect-square p-0 justify-self-center"),B(Y,"width","2em"),B(Y,"height","2em"),l(J,"class","btn bg-gradient-to-tr variant-filled-secondary from-secondary-400 to-secondary-600 items-center justify-center flex text-3xl aspect-square p-0 justify-self-center"),B(J,"width","2em"),B(J,"height","2em"),l(f,"class","btn bg-gradient-to-tl variant-filled-secondary from-secondary-400 to-secondary-600 items-center justify-center flex text-3xl justify-self-center aspect-square p-0"),l(f,"style","width: 2em; height 2em;"),l(R,"class","grid grid-cols-4 my-2"),B(R,"width","min(85%, 50em)"),l(e,"class","container svelte-8ep104")},m(a,u){U(a,e,u),c(e,n),c(n,t),c(t,r),c(r,i),c(i,_),c(n,E),c(n,S),ee.m(S,null),c(S,N),c(S,G),c(G,M),c(G,X),c(e,H);for(let h=0;h<g.length;h+=1)g[h]&&g[h].m(e,null);c(e,V),c(e,R),c(R,v),be(z,v,null),c(R,I),c(R,Y),be(A,Y,null),c(R,ue),c(R,J),be(ne,J,null),c(R,m),c(R,f),be(k,f,null),c(e,T);for(let h=0;h<b.length;h+=1)b[h]&&b[h].m(e,null);y=!0,j||(re=[at(Ht.call(null,i,{min_size:12,max_size:100})),oe(v,"click",s[9]),oe(Y,"click",s[11]),oe(J,"click",s[12]),oe(f,"click",s[8])],j=!0)},p(a,u){if((!y||u&1)&&o!==(o=et(a[0].name)+"")&&ce(_,o),we===(we=xe(a))&&ee?ee.p(a,u):(ee.d(1),ee=we(a),ee&&(ee.c(),ee.m(S,N))),(!y||u&2)&&D!==(D=(a[1]*100).toFixed(2)+"")&&ce(M,D),u&16){P=Te(a[4]);let h;for(h=0;h<P.length;h+=1){const K=Ye(a,P,h);g[h]?(g[h].p(K,u),$(g[h],1)):(g[h]=Ke(K),g[h].c(),$(g[h],1),g[h].m(e,V))}for(De(),h=P.length;h<g.length;h+=1)q(h);Pe()}u&1188&&(de=Te(a[2]),De(),b=ht(b,u,ze,1,a,de,d,e,pt,$e,null,Xe),Pe())},i(a){if(!y){for(let u=0;u<P.length;u+=1)$(g[u]);$(z.$$.fragment,a),$(A.$$.fragment,a),$(ne.$$.fragment,a),$(k.$$.fragment,a);for(let u=0;u<de.length;u+=1)$(b[u]);y=!0}},o(a){g=g.filter(Boolean);for(let u=0;u<g.length;u+=1)ie(g[u]);ie(z.$$.fragment,a),ie(A.$$.fragment,a),ie(ne.$$.fragment,a),ie(k.$$.fragment,a);for(let u=0;u<b.length;u+=1)ie(b[u]);y=!1},d(a){a&&p(e),ee.d(),ut(g,a),ve(z),ve(A),ve(ne),ve(k);for(let u=0;u<b.length;u+=1)b[u].d();j=!1,nt(re)}}}function Ft(s){let e,n;return{c(){e=x("span"),n=W(s[3]),this.h()},l(t){e=w(t,"SPAN",{class:!0});var r=C(e);n=Z(r,s[3]),r.forEach(p),this.h()},h(){l(e,"class","text-7xl")},m(t,r){U(t,e,r),c(e,n)},p(t,r){r&8&&ce(n,t[3])},d(t){t&&p(e)}}}function Lt(s){let e,n="E";return{c(){e=x("span"),e.textContent=n,this.h()},l(t){e=w(t,"SPAN",{class:!0,"data-svelte-h":!0}),fe(e)!=="svelte-1r9tqx3"&&(e.textContent=n),this.h()},h(){l(e,"class","text-7xl bg-gradient-to-r bg-clip-text text-transparent box-decoration-clone from-error-300 to-error-700")},m(t,r){U(t,e,r)},p:O,d(t){t&&p(e)}}}function Ot(s){let e,n="D";return{c(){e=x("span"),e.textContent=n,this.h()},l(t){e=w(t,"SPAN",{class:!0,"data-svelte-h":!0}),fe(e)!=="svelte-ufk8re"&&(e.textContent=n),this.h()},h(){l(e,"class","text-7xl bg-gradient-to-r bg-clip-text text-transparent box-decoration-clone from-error-400 to-warning-600")},m(t,r){U(t,e,r)},p:O,d(t){t&&p(e)}}}function Ut(s){let e,n="C";return{c(){e=x("span"),e.textContent=n,this.h()},l(t){e=w(t,"SPAN",{class:!0,"data-svelte-h":!0}),fe(e)!=="svelte-1xjgozt"&&(e.textContent=n),this.h()},h(){l(e,"class","text-7xl bg-gradient-to-r bg-clip-text text-transparent box-decoration-clone from-warning-400 to-warning-600")},m(t,r){U(t,e,r)},p:O,d(t){t&&p(e)}}}function qt(s){let e,n="B";return{c(){e=x("span"),e.textContent=n,this.h()},l(t){e=w(t,"SPAN",{class:!0,"data-svelte-h":!0}),fe(e)!=="svelte-1t49uvv"&&(e.textContent=n),this.h()},h(){l(e,"class","text-7xl bg-gradient-to-r bg-clip-text text-transparent box-decoration-clone from-warning-400 to-success-600")},m(t,r){U(t,e,r)},p:O,d(t){t&&p(e)}}}function Gt(s){let e,n="A";return{c(){e=x("span"),e.textContent=n,this.h()},l(t){e=w(t,"SPAN",{class:!0,"data-svelte-h":!0}),fe(e)!=="svelte-fhbyd"&&(e.textContent=n),this.h()},h(){l(e,"class","text-7xl bg-gradient-to-r bg-clip-text text-transparent box-decoration-clone from-success-400 to-success-600")},m(t,r){U(t,e,r)},p:O,d(t){t&&p(e)}}}function Xt(s){let e,n;return{c(){e=x("span"),n=W(s[3]),this.h()},l(t){e=w(t,"SPAN",{class:!0});var r=C(e);n=Z(r,s[3]),r.forEach(p),this.h()},h(){l(e,"class","text-6xl")},m(t,r){U(t,e,r),c(e,n)},p(t,r){r&8&&ce(n,t[3])},d(t){t&&p(e)}}}function Ke(s){let e,n;return e=new kt({props:{data:s[26]}}),{c(){me(e.$$.fragment)},l(t){ge(e.$$.fragment,t)},m(t,r){be(e,t,r),n=!0},p(t,r){const i={};r&16&&(i.data=t[26]),e.$set(i)},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){ie(e.$$.fragment,t),n=!1},d(t){ve(e,t)}}}function Qe(s){let e,n="Missing";return{c(){e=x("span"),e.textContent=n,this.h()},l(t){e=w(t,"SPAN",{class:!0,"data-svelte-h":!0}),fe(e)!=="svelte-uco7xh"&&(e.textContent=n),this.h()},h(){l(e,"class","badge variant-filled-error bg-gradient-to-tl from-error-400 to-error-600 mx-2")},m(t,r){U(t,e,r)},d(t){t&&p(e)}}}function We(s){let e,n="Late";return{c(){e=x("span"),e.textContent=n,this.h()},l(t){e=w(t,"SPAN",{class:!0,"data-svelte-h":!0}),fe(e)!=="svelte-1p3ksm9"&&(e.textContent=n),this.h()},h(){l(e,"class","badge variant-filled-error bg-gradient-to-tl from-error-400 to-error-600 mx-2")},m(t,r){U(t,e,r)},d(t){t&&p(e)}}}function Ze(s){let e,n="Not For Grading";return{c(){e=x("span"),e.textContent=n,this.h()},l(t){e=w(t,"SPAN",{class:!0,"data-svelte-h":!0}),fe(e)!=="svelte-adp61l"&&(e.textContent=n),this.h()},h(){l(e,"class","badge variant-filled-warning bg-gradient-to-tl from-warning-400 to-warning-600 mx-2")},m(t,r){U(t,e,r)},d(t){t&&p(e)}}}function $e(s,e){var de,ze,a;let n,t,r,i,o,_,E,S,N,G="/",D,M,X,H,V,R,v,z=e[23].kind+"",I,Y,A,ue=(de=e[23].notes)==null?void 0:de.includes("Missing"),J,ne=(ze=e[23].notes)==null?void 0:ze.includes("Late"),m,f=(a=e[23].notes)==null?void 0:a.includes("Not For Grading"),k,T,b,d;function y(u){e[13](u,e[23])}let j={class:"text-xl"};e[23].name!==void 0&&(j.value=e[23].name),r=new zt({props:j}),tt.push(()=>ft(r,"value",y));function re(){e[14].call(E,e[24],e[25])}function xe(){e[15].call(M,e[24],e[25])}V=new Dt({});function we(){return e[16](e[25])}function ee(){return e[17](e[23])}let P=ue&&Qe(),g=ne&&We(),q=f&&Ze();return{key:s,first:null,c(){n=x("div"),t=x("div"),me(r.$$.fragment),o=F(),_=x("div"),E=x("input"),S=F(),N=x("span"),N.textContent=G,D=F(),M=x("input"),X=F(),H=x("button"),me(V.$$.fragment),R=F(),v=x("button"),I=W(z),Y=F(),A=x("div"),P&&P.c(),J=F(),g&&g.c(),m=F(),q&&q.c(),k=F(),this.h()},l(u){n=w(u,"DIV",{class:!0});var h=C(n);t=w(h,"DIV",{class:!0});var K=C(t);ge(r.$$.fragment,K),o=L(K),_=w(K,"DIV",{class:!0});var se=C(_);E=w(se,"INPUT",{type:!0,class:!0}),S=L(se),N=w(se,"SPAN",{class:!0,"data-svelte-h":!0}),fe(N)!=="svelte-1ye6x73"&&(N.textContent=G),D=L(se),M=w(se,"INPUT",{type:!0,class:!0}),se.forEach(p),X=L(K),H=w(K,"BUTTON",{class:!0});var he=C(H);ge(V.$$.fragment,he),he.forEach(p),K.forEach(p),R=L(h),v=w(h,"BUTTON",{type:!0,class:!0});var le=C(v);I=Z(le,z),le.forEach(p),Y=L(h),A=w(h,"DIV",{class:!0});var ae=C(A);P&&P.l(ae),J=L(ae),g&&g.l(ae),m=L(ae),q&&q.l(ae),ae.forEach(p),k=L(h),h.forEach(p),this.h()},h(){l(E,"type","number"),l(E,"class","input entry text-right pr-3 float-left svelte-8ep104"),l(N,"class","seperator text-xl"),l(M,"type","number"),l(M,"class","input entry float-right pl-3 svelte-8ep104"),l(_,"class","grade text-center justify-center items-center svelte-8ep104"),l(H,"class","text-error-500 mr-2"),l(t,"class","grid tripleauto svelte-8ep104"),l(v,"type","button"),l(v,"class","btn btn-small variant-ghost-primary text-md"),l(A,"class","float-right mt-3"),l(n,"class","card assign relative p-1 svelte-8ep104"),this.first=n},m(u,h){U(u,n,h),c(n,t),be(r,t,null),c(t,o),c(t,_),c(_,E),ke(E,e[23].points_earned),c(_,S),c(_,N),c(_,D),c(_,M),ke(M,e[23].points_possible),c(t,X),c(t,H),be(V,H,null),c(n,R),c(n,v),c(v,I),c(n,Y),c(n,A),P&&P.m(A,null),c(A,J),g&&g.m(A,null),c(A,m),q&&q.m(A,null),c(n,k),T=!0,b||(d=[oe(E,"input",re),oe(E,"input",e[5]),oe(M,"input",xe),oe(M,"input",e[5]),oe(H,"click",we),oe(v,"click",ee)],b=!0)},p(u,h){var se,he,le;e=u;const K={};!i&&h&4&&(i=!0,K.value=e[23].name,ct(()=>i=!1)),r.$set(K),h&4&&Me(E.value)!==e[23].points_earned&&ke(E,e[23].points_earned),h&4&&Me(M.value)!==e[23].points_possible&&ke(M,e[23].points_possible),(!T||h&4)&&z!==(z=e[23].kind+"")&&ce(I,z),h&4&&(ue=(se=e[23].notes)==null?void 0:se.includes("Missing")),ue?P||(P=Qe(),P.c(),P.m(A,J)):P&&(P.d(1),P=null),h&4&&(ne=(he=e[23].notes)==null?void 0:he.includes("Late")),ne?g||(g=We(),g.c(),g.m(A,m)):g&&(g.d(1),g=null),h&4&&(f=(le=e[23].notes)==null?void 0:le.includes("Not For Grading")),f?q||(q=Ze(),q.c(),q.m(A,null)):q&&(q.d(1),q=null)},i(u){T||($(r.$$.fragment,u),$(V.$$.fragment,u),T=!0)},o(u){ie(r.$$.fragment,u),ie(V.$$.fragment,u),T=!1},d(u){u&&p(n),ve(r),ve(V),P&&P.d(),g&&g.d(),q&&q.d(),b=!1,nt(d)}}}function Yt(s){let e,n,t=s[0]&&Je(s);return{c(){t&&t.c(),e=Ue()},l(r){t&&t.l(r),e=Ue()},m(r,i){t&&t.m(r,i),U(r,e,i),n=!0},p(r,[i]){r[0]?t?(t.p(r,i),i&1&&$(t,1)):(t=Je(r),t.c(),$(t,1),t.m(e.parentNode,e)):t&&(De(),ie(t,1,1,()=>{t=null}),Pe())},i(r){n||($(t),n=!0)},o(r){ie(t),n=!1},d(r){r&&p(e),t&&t.d(r)}}}function et(s){return s.split("(")[0].trim()}function Jt(s,e,n){let t;ot(s,_t,m=>n(19,t=m));let r,i=0,o=[],_="F",E=new Map,S=[];const N=vt();function G(){let m=new Map;E.forEach((f,k)=>{m.set(k,{weight:f.weight,points_earned:0,points_possible:0})}),o.forEach(f=>{var k;!((k=f.notes)!=null&&k.includes("Not For Grading"))&&f.points_earned!==null&&f.points_possible!==null&&(m.get(f.kind).points_earned+=f.points_earned,m.get(f.kind).points_possible+=f.points_possible)}),n(4,E=m)}function D(){G();let m=0;E.forEach((T,b)=>{T.points_possible!=0&&T.points_earned!==null&&(m+=T.weight)});let f=!0,k=0;E.forEach((T,b)=>{let d=T.points_earned/T.points_possible*(T.weight/m);!isNaN(d)&&T.points_earned!==null&&T.points_possible!==null&&(k+=d,f=!1)}),n(1,i=k),n(1,i=Math.round(i*1e4)/1e4),isNaN(i)||f?(n(3,_="N/A"),n(1,i=0)):i>=.895?n(3,_="A"):i>=.795?n(3,_="B"):i>=.695?n(3,_="C"):i>=.595?n(3,_="D"):n(3,_="E")}function M(m){let f=structuredClone(E);m.forEach((b,d)=>{f.get(d).points_earned+=b[0],f.get(d).points_possible+=b[1]});let k=0;f.forEach((b,d)=>{b.points_possible!=0&&b.points_earned!==null&&(k+=b.weight)});let T=0;return f.forEach((b,d)=>{let y=b.points_earned/b.points_possible*(b.weight/k);!isNaN(y)&&b.points_earned!==null&&b.points_possible!==null&&(T+=y)}),Math.round(T*1e4)/1e4}function X(m){let f=.895;if(m)if(i>=.895){const d={message:"No need to optimize.",background:"variant-filled-error bg-gradient-to-r from-error-400 to-error-600",timeout:3e3};N.trigger(d);return}else i>=.795?f=.895:i>=.695?f=.795:i>=.595?f=.695:f=.595;else if(i>=.895)f=.895;else if(i>=.795)f=.795;else if(i>=.695)f=.695;else if(i>=.595)f=.595;else{const d={message:"No need to optimize.",background:"variant-filled-error bg-gradient-to-r from-error-400 to-error-600",timeout:3e3};N.trigger(d);return}let k=new Map;E.forEach((d,y)=>{k.set(y,{weight:d.weight,min_easy:0,max_earned:0,possible:0,guess:0})}),k=new Map([...k].sort((d,y)=>d[1].weight-y[1].weight));let T=0;if(o.forEach(d=>{var y,j;!((y=d.notes)!=null&&y.includes("Not For Grading"))&&d.points_possible!==null&&d.points_earned===null&&(k.get(d.kind).max_earned+=d.points_possible*((j=d.notes)!=null&&j.includes("Late")?.9:1),k.get(d.kind).possible+=d.points_possible,T++)}),T==0){const d={message:"No assignments to optimize.",background:"variant-filled-error bg-gradient-to-r from-error-400 to-error-600",timeout:3e3};N.trigger(d);return}k.forEach((d,y)=>{d.min_easy=d.max_earned*(d.weight<=.11?.9:.5),d.guess=d.min_easy});function b(d){let y=new Map;return k.forEach((j,re)=>{y.set(re,[Math.floor(j.guess*1e4)/1e4,j.possible])}),M(y)>=d}for(let[d,y]of k){if(y.max_earned==0)continue;let j=0,re=Math.round(y.max_earned*10+1)/10,xe=0;for(;j<re&&!(++xe>1025);)y.guess=Math.floor((re+j)*5)/10,b(f)?re=y.guess:j=Math.round(y.guess*10+1)/10;y.guess=Math.min(y.max_earned,j)}if(k.forEach((d,y)=>{d.guess=Math.round(d.guess*1e4)/1e4}),o.forEach(d=>{var y,j;if(!((y=d.notes)!=null&&y.includes("Not For Grading"))&&d.points_possible!==null&&d.points_earned===null){let re=d.points_possible*((j=d.notes)!=null&&j.includes("Late")?.9:1);d.points_earned=Math.ceil(re/k.get(d.kind).max_earned*k.get(d.kind).guess*10)/10}}),n(2,o=[...o]),D(),i<f&&m){const d={message:"You cannot go any higher than "+Math.round(i*1e4)/100+"%",background:"variant-filled-error bg-gradient-to-r from-error-400 to-error-600",timeout:3e3};N.trigger(d);return}}function H(m){let f=S.indexOf(m.kind)+1;f>=S.length&&(f=0),m.kind=S[f],n(2,o=[...o]),D()}function V(){n(2,o=[{name:"Unknown Assignment",kind:S[0],points_possible:null,points_earned:null,notes:null,selected:!1},...o])}function R(){n(2,o=structuredClone(r.assignments)),D()}function v(m){o.splice(m,1),n(2,o=[...o]),D()}lt(async()=>{let m=Number.parseInt(t.params.slug);(Number.parseInt(sessionStorage.getItem("expiry")??"0")<Date.now()||!Number.isFinite(m))&&await qe("/");let f=JSON.parse(sessionStorage.getItem("data"));(m<0||m>=f.classes.length)&&await qe("/grades"),n(0,r=f.classes[m]),n(4,E=new Map(Object.entries(r.categories))),n(4,E=new Map([...E].sort())),S=Array.from(E.keys()),n(2,o=structuredClone(r.assignments)),n(3,_=r.letter_grade),n(1,i=r.grade/100)});const z=()=>{X(!1)},I=()=>{X(!0)};function Y(m,f){s.$$.not_equal(f.name,m)&&(f.name=m,n(2,o))}function A(m,f){m[f].points_earned=Me(this.value),n(2,o)}function ue(m,f){m[f].points_possible=Me(this.value),n(2,o)}return[r,i,o,_,E,D,X,H,V,R,v,z,I,Y,A,ue,m=>{v(m)},m=>{H(m)}]}class ln extends Ce{constructor(e){super(),Se(this,e,Jt,Yt,Ne,{})}}export{ln as component};