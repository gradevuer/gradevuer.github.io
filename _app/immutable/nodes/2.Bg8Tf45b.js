import{s as re,h as $,e as _,I as U,c as k,a as L,K as j,d as v,U as ee,b as c,V as F,i as M,g as m,E as B,G as oe,W as te,X as ke,R as pe,j as le,u as ve,v as Ee,w as Ie,x as ye,Y as K,O as Se,k as Z,L as Q,P as we,o as Ce,H as ie,J as ce,f as Te,N as De,n as R}from"../chunks/scheduler.CUUnO8oO.js";import{h as ae,u as Pe}from"../chunks/await_block.CLNGavX8.js";import{S as ue,i as de,a as W,g as Le,t as q,c as Ae,f as Be,b as fe,d as he,m as ge,e as me}from"../chunks/index.ClMIGeE-.js";import"../chunks/ProgressBar.svelte_svelte_type_style_lang.Cvy6ODCQ.js";import{P as ze}from"../chunks/ProgressBar.hmPEPtzu.js";import{g as Ve}from"../chunks/spread.CgU5AtxT.js";import{g as se}from"../chunks/entry.CvC0Xdl5.js";import{W as Ne}from"../chunks/main.DlQOQXQP.js";function ne(l){let t,e;const a=l[22].default,s=ve(a,l,l[21],null);return{c(){t=_("div"),s&&s.c(),this.h()},l(n){t=k(n,"DIV",{class:!0});var o=L(t);s&&s.l(o),o.forEach(v),this.h()},h(){c(t,"class","slide-toggle-text ml-3")},m(n,o){M(n,t,o),s&&s.m(t,null),e=!0},p(n,o){s&&s.p&&(!e||o[0]&2097152)&&Ee(s,a,n,n[21],e?ye(a,n[21],o,null):Ie(n[21]),null)},i(n){e||(W(s,n),e=!0)},o(n){q(s,n),e=!1},d(n){n&&v(t),s&&s.d(n)}}}function Re(l){let t,e,a,s,n,o,f,I,h,b,S,E,u,C,A,T=[{type:"checkbox"},{class:"slide-toggle-input hidden"},{name:l[1]},l[8](),{disabled:s=l[9].disabled}],z={};for(let r=0;r<T.length;r+=1)z=$(z,T[r]);let d=l[10].default&&ne(l);return{c(){t=_("div"),e=_("label"),a=_("input"),n=U(),o=_("div"),f=_("div"),b=U(),d&&d.c(),this.h()},l(r){t=k(r,"DIV",{id:!0,class:!0,"data-testid":!0,role:!0,"aria-label":!0,"aria-checked":!0,tabindex:!0});var g=L(t);e=k(g,"LABEL",{class:!0});var P=L(e);a=k(P,"INPUT",{type:!0,class:!0,name:!0}),n=j(P),o=k(P,"DIV",{class:!0});var V=L(o);f=k(V,"DIV",{class:!0}),L(f).forEach(v),V.forEach(v),b=j(P),d&&d.l(P),P.forEach(v),g.forEach(v),this.h()},h(){ee(a,z),c(f,"class",I="slide-toggle-thumb "+l[3]),F(f,"cursor-not-allowed",l[9].disabled),c(o,"class",h="slide-toggle-track "+l[4]),F(o,"cursor-not-allowed",l[9].disabled),c(e,"class",S="slide-toggle-label "+l[5]),c(t,"id",l[2]),c(t,"class",E="slide-toggle "+l[6]),c(t,"data-testid","slide-toggle"),c(t,"role","switch"),c(t,"aria-label",l[2]),c(t,"aria-checked",l[0]),c(t,"tabindex","0")},m(r,g){M(r,t,g),m(t,e),m(e,a),a.autofocus&&a.focus(),a.checked=l[0],m(e,n),m(e,o),m(o,f),m(e,b),d&&d.m(e,null),u=!0,C||(A=[B(a,"change",l[31]),B(a,"click",l[23]),B(a,"keydown",l[24]),B(a,"keyup",l[25]),B(a,"keypress",l[26]),B(a,"mouseover",l[27]),B(a,"change",l[28]),B(a,"focus",l[29]),B(a,"blur",l[30]),B(t,"keydown",l[7])],C=!0)},p(r,g){ee(a,z=Ve(T,[{type:"checkbox"},{class:"slide-toggle-input hidden"},(!u||g[0]&2)&&{name:r[1]},r[8](),(!u||g[0]&512&&s!==(s=r[9].disabled))&&{disabled:s}])),g[0]&1&&(a.checked=r[0]),(!u||g[0]&8&&I!==(I="slide-toggle-thumb "+r[3]))&&c(f,"class",I),(!u||g[0]&520)&&F(f,"cursor-not-allowed",r[9].disabled),(!u||g[0]&16&&h!==(h="slide-toggle-track "+r[4]))&&c(o,"class",h),(!u||g[0]&528)&&F(o,"cursor-not-allowed",r[9].disabled),r[10].default?d?(d.p(r,g),g[0]&1024&&W(d,1)):(d=ne(r),d.c(),W(d,1),d.m(e,null)):d&&(Le(),q(d,1,1,()=>{d=null}),Ae()),(!u||g[0]&32&&S!==(S="slide-toggle-label "+r[5]))&&c(e,"class",S),(!u||g[0]&4)&&c(t,"id",r[2]),(!u||g[0]&64&&E!==(E="slide-toggle "+r[6]))&&c(t,"class",E),(!u||g[0]&4)&&c(t,"aria-label",r[2]),(!u||g[0]&1)&&c(t,"aria-checked",r[0])},i(r){u||(W(d),u=!0)},o(r){q(d),u=!1},d(r){r&&v(t),d&&d.d(),C=!1,oe(A)}}}const Ue="inline-block",je="unstyled flex items-center",Oe="flex transition-all duration-[200ms] cursor-pointer",Ke="w-[50%] h-full scale-[0.8] transition-all duration-[200ms] shadow";function We(l,t,e){let a,s,n,o,f,I,h,b;const S=["name","checked","size","background","active","border","rounded","label"];let E=te(t,S),{$$slots:u={},$$scope:C}=t;const A=ke(u),T=pe();let{name:z}=t,{checked:d=!1}=t,{size:r="md"}=t,{background:g="bg-surface-400 dark:bg-surface-700"}=t,{active:P="bg-surface-900 dark:bg-surface-300"}=t,{border:V=""}=t,{rounded:N="rounded-full"}=t,{label:G=""}=t,O;switch(r){case"sm":O="w-12 h-6";break;case"lg":O="w-20 h-10";break;default:O="w-16 h-8"}function x(i){["Enter","Space"].includes(i.code)&&(i.preventDefault(),T("keyup",i),i.currentTarget.firstChild.click())}function X(){return delete E.class,E}function y(i){K.call(this,l,i)}function D(i){K.call(this,l,i)}function p(i){K.call(this,l,i)}function w(i){K.call(this,l,i)}function H(i){K.call(this,l,i)}function J(i){K.call(this,l,i)}function Y(i){K.call(this,l,i)}function be(i){K.call(this,l,i)}function _e(){d=this.checked,e(0,d)}return l.$$set=i=>{e(9,t=$($({},t),le(i))),e(33,E=te(t,S)),"name"in i&&e(1,z=i.name),"checked"in i&&e(0,d=i.checked),"size"in i&&e(11,r=i.size),"background"in i&&e(12,g=i.background),"active"in i&&e(13,P=i.active),"border"in i&&e(14,V=i.border),"rounded"in i&&e(15,N=i.rounded),"label"in i&&e(2,G=i.label),"$$scope"in i&&e(21,C=i.$$scope)},l.$$.update=()=>{l.$$.dirty[0]&12289&&e(19,a=d?P:`${g} cursor-pointer`),l.$$.dirty[0]&1&&e(18,s=d?"bg-white/75":"bg-white"),l.$$.dirty[0]&1&&e(17,n=d?"translate-x-full":""),e(20,o=t.disabled===!0?"opacity-50":"hover:brightness-[105%] dark:hover:brightness-110 cursor-pointer"),e(6,f=`${Ue} ${N} ${o} ${t.class??""}`),l.$$.dirty[0]&638976&&e(4,h=`${Oe} ${V} ${N} ${O} ${a}`),l.$$.dirty[0]&425984&&e(3,b=`${Ke} ${N} ${s} ${n}`)},e(5,I=`${je}`),t=le(t),[d,z,G,b,h,I,f,x,X,t,A,r,g,P,V,N,O,n,s,a,o,C,u,y,D,p,w,H,J,Y,be,_e]}class Ge extends ue{constructor(t){super(),de(this,t,We,Re,re,{name:1,checked:0,size:11,background:12,active:13,border:14,rounded:15,label:2},null,[-1,-1])}}function He(l){let t;return{c(){t=ie("Remember me")},l(e){t=ce(e,"Remember me")},m(e,a){M(e,t,a)},d(e){e&&v(t)}}}function Je(l){let t,e,a,s="Error",n,o,f=l[9].message+"",I;return{c(){t=_("aside"),e=_("div"),a=_("h3"),a.textContent=s,n=U(),o=_("p"),I=ie(f),this.h()},l(h){t=k(h,"ASIDE",{class:!0});var b=L(t);e=k(b,"DIV",{class:!0});var S=L(e);a=k(S,"H3",{class:!0,"data-svelte-h":!0}),Z(a)!=="svelte-mmnhjy"&&(a.textContent=s),n=j(S),o=k(S,"P",{});var E=L(o);I=ce(E,f),E.forEach(v),S.forEach(v),b.forEach(v),this.h()},h(){c(a,"class","h3"),c(e,"class","alert-message -3"),c(t,"class","alert errorw incorrect variant-ghost-error text-left svelte-1rgklt7"),Te(t,"margin-top","10px")},m(h,b){M(h,t,b),m(t,e),m(e,a),m(e,n),m(e,o),m(o,I)},p(h,b){b&8&&f!==(f=h[9].message+"")&&De(I,f)},i:R,o:R,d(h){h&&v(t)}}}function qe(l){return{c:R,l:R,m:R,p:R,i:R,o:R,d:R}}function Me(l){let t,e,a;return e=new ze({props:{meter:"bg-gradient-to-r from-secondary-400 to-secondary-600"}}),{c(){t=_("div"),fe(e.$$.fragment),this.h()},l(s){t=k(s,"DIV",{class:!0});var n=L(t);he(e.$$.fragment,n),n.forEach(v),this.h()},h(){c(t,"class","loading svelte-1rgklt7")},m(s,n){M(s,t,n),ge(e,t,null),a=!0},p:R,i(s){a||(W(e.$$.fragment,s),a=!0)},o(s){q(e.$$.fragment,s),a=!1},d(s){s&&v(t),me(e)}}}function Xe(l){let t,e,a,s,n="Username",o,f,I,h,b,S="Password",E,u,C,A,T,z,d,r,g="Login",P,V,N,G,O;function x(D){l[7](D)}let X={name:"cookie",active:"bg-gradient-to-r from-secondary-200 to-secondary-700",size:"sm",$$slots:{default:[He]},$$scope:{ctx:l}};l[0]!==void 0&&(X.checked=l[0]),T=new Ge({props:X}),Se.push(()=>Be(T,"checked",x));let y={ctx:l,current:null,token:null,hasCatch:!0,pending:Me,then:qe,catch:Je,error:9,blocks:[,,,]};return ae(V=l[3],y),{c(){t=_("div"),e=_("div"),a=_("label"),s=_("span"),s.textContent=n,o=U(),f=_("input"),I=U(),h=_("label"),b=_("span"),b.textContent=S,E=U(),u=_("input"),C=U(),A=_("label"),fe(T.$$.fragment),d=U(),r=_("button"),r.textContent=g,P=U(),y.block.c(),this.h()},l(D){t=k(D,"DIV",{class:!0});var p=L(t);e=k(p,"DIV",{class:!0});var w=L(e);a=k(w,"LABEL",{class:!0});var H=L(a);s=k(H,"SPAN",{"data-svelte-h":!0}),Z(s)!=="svelte-9difb2"&&(s.textContent=n),o=j(H),f=k(H,"INPUT",{class:!0,placeholder:!0}),H.forEach(v),I=j(w),h=k(w,"LABEL",{class:!0});var J=L(h);b=k(J,"SPAN",{"data-svelte-h":!0}),Z(b)!=="svelte-1kvjhoz"&&(b.textContent=S),E=j(J),u=k(J,"INPUT",{class:!0,type:!0,placeholder:!0}),J.forEach(v),C=j(w),A=k(w,"LABEL",{class:!0});var Y=L(A);he(T.$$.fragment,Y),Y.forEach(v),d=j(w),r=k(w,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),Z(r)!=="svelte-6xw33d"&&(r.textContent=g),w.forEach(v),P=j(p),y.block.l(p),p.forEach(v),this.h()},h(){c(f,"class","input"),c(f,"placeholder","id"),c(a,"class","label text-left"),c(u,"class","input"),c(u,"type","password"),c(u,"placeholder","password"),c(h,"class","label text-left"),c(A,"class","flex items-center space-x-2"),c(r,"type","button"),c(r,"class","btn login bg-gradient-to-br variant-gradient-primary-tertiary svelte-1rgklt7"),c(e,"class","card p-4 window text-token space-y-4 text-center svelte-1rgklt7"),c(t,"class","container")},m(D,p){M(D,t,p),m(t,e),m(e,a),m(a,s),m(a,o),m(a,f),Q(f,l[1]),m(e,I),m(e,h),m(h,b),m(h,E),m(h,u),Q(u,l[2]),m(e,C),m(e,A),ge(T,A,null),m(e,d),m(e,r),m(t,P),y.block.m(t,y.anchor=null),y.mount=()=>t,y.anchor=null,N=!0,G||(O=[B(f,"input",l[5]),B(u,"input",l[6]),B(r,"click",l[8])],G=!0)},p(D,[p]){l=D,p&2&&f.value!==l[1]&&Q(f,l[1]),p&4&&u.value!==l[2]&&Q(u,l[2]);const w={};p&1024&&(w.$$scope={dirty:p,ctx:l}),!z&&p&1&&(z=!0,w.checked=l[0],we(()=>z=!1)),T.$set(w),y.ctx=l,p&8&&V!==(V=l[3])&&ae(V,y)||Pe(y,l,p)},i(D){N||(W(T.$$.fragment,D),W(y.block),N=!0)},o(D){q(T.$$.fragment,D);for(let p=0;p<3;p+=1){const w=y.blocks[p];q(w)}N=!1},d(D){D&&v(t),me(T),y.block.d(),y.token=null,y=null,G=!1,oe(O)}}}function Ye(l,t,e){Ce(async()=>{e(1,n=localStorage.getItem("name")??""),e(2,o=localStorage.getItem("pass")??""),e(0,s=n!=""||o!="")});async function a(){if(n=="admin"&&o=="admin"){se("/admin");return}const E={headers:{"Content-Type":"application/json","Accept-Encoding":"br",Authorization:`Basic ${btoa(n+":"+o)}`}},u=await fetch(`${Ne}/grades`,E);let C=await u.text();if(u.status!=200)throw new Error(C);s?(localStorage.setItem("name",n),localStorage.setItem("pass",o)):localStorage.clear(),sessionStorage.setItem("data",C),sessionStorage.setItem("cdata",C);let A=JSON.parse(C);sessionStorage.setItem("token",A.token),sessionStorage.setItem("expiry",(Date.now()+1e3*60*15).toString()),await se("/grades")}let s=!1,n="",o="",f;function I(){n=this.value,e(1,n)}function h(){o=this.value,e(2,o)}function b(E){s=E,e(0,s)}return[s,n,o,f,a,I,h,b,()=>{e(3,f=a())}]}class st extends ue{constructor(t){super(),de(this,t,Ye,Xe,re,{})}}export{st as component};