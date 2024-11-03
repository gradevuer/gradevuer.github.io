import{s as ie,h as te,e as p,l as N,c as v,a as B,m as U,d as b,V as le,b as u,W as Q,i as q,g as h,q as L,I as ce,X as ae,Y as ke,O as pe,j as se,A as ve,B as Ee,C as ye,D as Ie,Z as J,K as Se,_ as we,k as $,J as x,L as Ce,o as Te,t as ue,p as de,f as De,r as Ae,n as R}from"../chunks/scheduler.BhNCGW4c.js";import{h as ne,u as Be}from"../chunks/await_block.Cu-niz3Q.js";import{S as fe,i as he,a as W,g as Le,t as H,c as Pe,f as Ve,b as me,d as ge,m as be,e as _e}from"../chunks/index.By4zub_x.js";import"../chunks/ProgressBar.svelte_svelte_type_style_lang.BXlGj4x9.js";import{P as ze}from"../chunks/ProgressBar.CJ0y7Qxz.js";import{g as Ne}from"../chunks/spread.CgU5AtxT.js";import{g as re}from"../chunks/entry.C8l_-luy.js";import{W as Ue}from"../chunks/main.DlQOQXQP.js";import{u as Re}from"../chunks/pack.CTx6hWTx.js";import{b as Oe,a as Ye}from"../chunks/util.UZ_QSrM9.js";function oe(l){let e,t;const a=l[22].default,s=ve(a,l,l[21],null);return{c(){e=p("div"),s&&s.c(),this.h()},l(n){e=v(n,"DIV",{class:!0});var r=B(e);s&&s.l(r),r.forEach(b),this.h()},h(){u(e,"class","slide-toggle-text ml-3")},m(n,r){q(n,e,r),s&&s.m(e,null),t=!0},p(n,r){s&&s.p&&(!t||r[0]&2097152)&&Ee(s,a,n,n[21],t?Ie(a,n[21],r,null):ye(n[21]),null)},i(n){t||(W(s,n),t=!0)},o(n){H(s,n),t=!1},d(n){n&&b(e),s&&s.d(n)}}}function je(l){let e,t,a,s,n,r,g,S,d,y,_,k,m,T,D,O=[{type:"checkbox"},{class:"slide-toggle-input hidden"},{name:l[1]},l[8](),{disabled:s=l[9].disabled}],A={};for(let c=0;c<O.length;c+=1)A=te(A,O[c]);let i=l[10].default&&oe(l);return{c(){e=p("div"),t=p("label"),a=p("input"),n=N(),r=p("div"),g=p("div"),y=N(),i&&i.c(),this.h()},l(c){e=v(c,"DIV",{id:!0,class:!0,"data-testid":!0,role:!0,"aria-label":!0,"aria-checked":!0,tabindex:!0});var f=B(e);t=v(f,"LABEL",{class:!0});var E=B(t);a=v(E,"INPUT",{type:!0,class:!0,name:!0}),n=U(E),r=v(E,"DIV",{class:!0});var Y=B(r);g=v(Y,"DIV",{class:!0}),B(g).forEach(b),Y.forEach(b),y=U(E),i&&i.l(E),E.forEach(b),f.forEach(b),this.h()},h(){le(a,A),u(g,"class",S="slide-toggle-thumb "+l[3]),Q(g,"cursor-not-allowed",l[9].disabled),u(r,"class",d="slide-toggle-track "+l[4]),Q(r,"cursor-not-allowed",l[9].disabled),u(t,"class",_="slide-toggle-label "+l[5]),u(e,"id",l[2]),u(e,"class",k="slide-toggle "+l[6]),u(e,"data-testid","slide-toggle"),u(e,"role","switch"),u(e,"aria-label",l[2]),u(e,"aria-checked",l[0]),u(e,"tabindex","0")},m(c,f){q(c,e,f),h(e,t),h(t,a),a.autofocus&&a.focus(),a.checked=l[0],h(t,n),h(t,r),h(r,g),h(t,y),i&&i.m(t,null),m=!0,T||(D=[L(a,"change",l[31]),L(a,"click",l[23]),L(a,"keydown",l[24]),L(a,"keyup",l[25]),L(a,"keypress",l[26]),L(a,"mouseover",l[27]),L(a,"change",l[28]),L(a,"focus",l[29]),L(a,"blur",l[30]),L(e,"keydown",l[7])],T=!0)},p(c,f){le(a,A=Ne(O,[{type:"checkbox"},{class:"slide-toggle-input hidden"},(!m||f[0]&2)&&{name:c[1]},c[8](),(!m||f[0]&512&&s!==(s=c[9].disabled))&&{disabled:s}])),f[0]&1&&(a.checked=c[0]),(!m||f[0]&8&&S!==(S="slide-toggle-thumb "+c[3]))&&u(g,"class",S),(!m||f[0]&520)&&Q(g,"cursor-not-allowed",c[9].disabled),(!m||f[0]&16&&d!==(d="slide-toggle-track "+c[4]))&&u(r,"class",d),(!m||f[0]&528)&&Q(r,"cursor-not-allowed",c[9].disabled),c[10].default?i?(i.p(c,f),f[0]&1024&&W(i,1)):(i=oe(c),i.c(),W(i,1),i.m(t,null)):i&&(Le(),H(i,1,1,()=>{i=null}),Pe()),(!m||f[0]&32&&_!==(_="slide-toggle-label "+c[5]))&&u(t,"class",_),(!m||f[0]&4)&&u(e,"id",c[2]),(!m||f[0]&64&&k!==(k="slide-toggle "+c[6]))&&u(e,"class",k),(!m||f[0]&4)&&u(e,"aria-label",c[2]),(!m||f[0]&1)&&u(e,"aria-checked",c[0])},i(c){m||(W(i),m=!0)},o(c){H(i),m=!1},d(c){c&&b(e),i&&i.d(),T=!1,ce(D)}}}const Je="inline-block",Ke="unstyled flex items-center",We="flex transition-all duration-[200ms] cursor-pointer",qe="w-[50%] h-full scale-[0.8] transition-all duration-[200ms] shadow";function Xe(l,e,t){let a,s,n,r,g,S,d,y;const _=["name","checked","size","background","active","border","rounded","label"];let k=ae(e,_),{$$slots:m={},$$scope:T}=e;const D=ke(m),O=pe();let{name:A}=e,{checked:i=!1}=e,{size:c="md"}=e,{background:f="bg-surface-400 dark:bg-surface-700"}=e,{active:E="bg-surface-900 dark:bg-surface-300"}=e,{border:Y=""}=e,{rounded:j="rounded-full"}=e,{label:K=""}=e,V;switch(c){case"sm":V="w-12 h-6";break;case"lg":V="w-20 h-10";break;default:V="w-16 h-8"}function M(o){["Enter","Space"].includes(o.code)&&(o.preventDefault(),O("keyup",o),o.currentTarget.firstChild.click())}function F(){return delete k.class,k}function ee(o){J.call(this,l,o)}function Z(o){J.call(this,l,o)}function w(o){J.call(this,l,o)}function C(o){J.call(this,l,o)}function I(o){J.call(this,l,o)}function P(o){J.call(this,l,o)}function z(o){J.call(this,l,o)}function X(o){J.call(this,l,o)}function G(){i=this.checked,t(0,i)}return l.$$set=o=>{t(9,e=te(te({},e),se(o))),t(33,k=ae(e,_)),"name"in o&&t(1,A=o.name),"checked"in o&&t(0,i=o.checked),"size"in o&&t(11,c=o.size),"background"in o&&t(12,f=o.background),"active"in o&&t(13,E=o.active),"border"in o&&t(14,Y=o.border),"rounded"in o&&t(15,j=o.rounded),"label"in o&&t(2,K=o.label),"$$scope"in o&&t(21,T=o.$$scope)},l.$$.update=()=>{l.$$.dirty[0]&12289&&t(19,a=i?E:`${f} cursor-pointer`),l.$$.dirty[0]&1&&t(18,s=i?"bg-white/75":"bg-white"),l.$$.dirty[0]&1&&t(17,n=i?"translate-x-full":""),t(20,r=e.disabled===!0?"opacity-50":"hover:brightness-[105%] dark:hover:brightness-110 cursor-pointer"),t(6,g=`${Je} ${j} ${r} ${e.class??""}`),l.$$.dirty[0]&638976&&t(4,d=`${We} ${Y} ${j} ${V} ${a}`),l.$$.dirty[0]&425984&&t(3,y=`${qe} ${j} ${s} ${n}`)},t(5,S=`${Ke}`),e=se(e),[i,A,K,y,d,S,g,M,F,e,D,c,f,E,Y,j,V,n,s,a,r,T,m,ee,Z,w,C,I,P,z,X,G]}class Ge extends fe{constructor(e){super(),he(this,e,Xe,je,ie,{name:1,checked:0,size:11,background:12,active:13,border:14,rounded:15,label:2},null,[-1,-1])}}function He(l){let e;return{c(){e=ue("Remember me")},l(t){e=de(t,"Remember me")},m(t,a){q(t,e,a)},d(t){t&&b(e)}}}function Me(l){let e,t,a,s="Error",n,r,g=l[9].message+"",S;return{c(){e=p("aside"),t=p("div"),a=p("h3"),a.textContent=s,n=N(),r=p("p"),S=ue(g),this.h()},l(d){e=v(d,"ASIDE",{class:!0});var y=B(e);t=v(y,"DIV",{class:!0});var _=B(t);a=v(_,"H3",{class:!0,"data-svelte-h":!0}),$(a)!=="svelte-mmnhjy"&&(a.textContent=s),n=U(_),r=v(_,"P",{});var k=B(r);S=de(k,g),k.forEach(b),_.forEach(b),y.forEach(b),this.h()},h(){u(a,"class","h3"),u(t,"class","alert-message -3"),u(e,"class","alert errorw incorrect variant-ghost-error text-left svelte-1rgklt7"),De(e,"margin-top","10px")},m(d,y){q(d,e,y),h(e,t),h(t,a),h(t,n),h(t,r),h(r,S)},p(d,y){y&8&&g!==(g=d[9].message+"")&&Ae(S,g)},i:R,o:R,d(d){d&&b(e)}}}function Fe(l){return{c:R,l:R,m:R,p:R,i:R,o:R,d:R}}function Ze(l){let e,t,a;return t=new ze({props:{meter:"bg-gradient-to-r from-secondary-400 to-secondary-600"}}),{c(){e=p("div"),me(t.$$.fragment),this.h()},l(s){e=v(s,"DIV",{class:!0});var n=B(e);ge(t.$$.fragment,n),n.forEach(b),this.h()},h(){u(e,"class","loading svelte-1rgklt7")},m(s,n){q(s,e,n),be(t,e,null),a=!0},p:R,i(s){a||(W(t.$$.fragment,s),a=!0)},o(s){H(t.$$.fragment,s),a=!1},d(s){s&&b(e),_e(t)}}}function Qe(l){let e,t,a,s,n,r,g="Username",S,d,y,_,k,m="Password",T,D,O,A,i,c,f,E,Y="Login",j,K,V,M,F;function ee(C){l[7](C)}let Z={name:"cookie",active:"bg-gradient-to-r from-secondary-200 to-secondary-700",size:"sm",$$slots:{default:[He]},$$scope:{ctx:l}};l[0]!==void 0&&(Z.checked=l[0]),i=new Ge({props:Z}),Se.push(()=>Ve(i,"checked",ee));let w={ctx:l,current:null,token:null,hasCatch:!0,pending:Ze,then:Fe,catch:Me,error:9,blocks:[,,,]};return ne(K=l[3],w),{c(){e=p("meta"),t=N(),a=p("div"),s=p("div"),n=p("label"),r=p("span"),r.textContent=g,S=N(),d=p("input"),y=N(),_=p("label"),k=p("span"),k.textContent=m,T=N(),D=p("input"),O=N(),A=p("label"),me(i.$$.fragment),f=N(),E=p("button"),E.textContent=Y,j=N(),w.block.c(),this.h()},l(C){const I=we("svelte-1il1nia",document.head);e=v(I,"META",{name:!0,content:!0}),I.forEach(b),t=U(C),a=v(C,"DIV",{class:!0});var P=B(a);s=v(P,"DIV",{class:!0});var z=B(s);n=v(z,"LABEL",{class:!0});var X=B(n);r=v(X,"SPAN",{"data-svelte-h":!0}),$(r)!=="svelte-9difb2"&&(r.textContent=g),S=U(X),d=v(X,"INPUT",{class:!0,placeholder:!0}),X.forEach(b),y=U(z),_=v(z,"LABEL",{class:!0});var G=B(_);k=v(G,"SPAN",{"data-svelte-h":!0}),$(k)!=="svelte-1kvjhoz"&&(k.textContent=m),T=U(G),D=v(G,"INPUT",{class:!0,type:!0,placeholder:!0}),G.forEach(b),O=U(z),A=v(z,"LABEL",{class:!0});var o=B(A);ge(i.$$.fragment,o),o.forEach(b),f=U(z),E=v(z,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),$(E)!=="svelte-1srbuiy"&&(E.textContent=Y),z.forEach(b),j=U(P),w.block.l(P),P.forEach(b),this.h()},h(){u(e,"name","google-site-verification"),u(e,"content","4YFyS1a7Ixvl_XHgVYcScG1RK3fXqElYSWJ_fvvYiyg"),u(d,"class","input"),u(d,"placeholder","id"),u(n,"class","label text-left"),u(D,"class","input"),u(D,"type","password"),u(D,"placeholder","password"),u(_,"class","label text-left"),u(A,"class","flex items-center space-x-2"),u(E,"type","button"),u(E,"class","btn login bg-gradient-to-br variant-gradient-primary-tertiary svelte-1rgklt7"),u(s,"class","card p-4 window text-token space-y-4 text-center svelte-1rgklt7"),u(a,"class","container")},m(C,I){h(document.head,e),q(C,t,I),q(C,a,I),h(a,s),h(s,n),h(n,r),h(n,S),h(n,d),x(d,l[1]),h(s,y),h(s,_),h(_,k),h(_,T),h(_,D),x(D,l[2]),h(s,O),h(s,A),be(i,A,null),h(s,f),h(s,E),h(a,j),w.block.m(a,w.anchor=null),w.mount=()=>a,w.anchor=null,V=!0,M||(F=[L(d,"input",l[5]),L(D,"input",l[6]),L(E,"click",l[8])],M=!0)},p(C,[I]){l=C,I&2&&d.value!==l[1]&&x(d,l[1]),I&4&&D.value!==l[2]&&x(D,l[2]);const P={};I&1024&&(P.$$scope={dirty:I,ctx:l}),!c&&I&1&&(c=!0,P.checked=l[0],Ce(()=>c=!1)),i.$set(P),w.ctx=l,I&8&&K!==(K=l[3])&&ne(K,w)||Be(w,l,I)},i(C){V||(W(i.$$.fragment,C),W(w.block),V=!0)},o(C){H(i.$$.fragment,C);for(let I=0;I<3;I+=1){const P=w.blocks[I];H(P)}V=!1},d(C){C&&(b(t),b(a)),b(e),_e(i),w.block.d(),w.token=null,w=null,M=!1,ce(F)}}}function xe(l,e,t){Te(async()=>{t(1,n=localStorage.getItem("name")??""),t(2,r=localStorage.getItem("pass")??""),t(0,s=n!=""||r!="")});async function a(){if(n=="admin"&&r=="admin"){re("/admin");return}const k={headers:{"Content-Type":"application/json","Accept-Encoding":"br",Authorization:`Basic ${Oe(n+":"+r)}`}},m=await fetch(`${Ue}/grades`,k);if(m.status!=200)throw new Error(await m.text());s?(localStorage.setItem("name",n),localStorage.setItem("pass",r)):localStorage.clear();let T=Re(new Uint8Array(await m.arrayBuffer()));sessionStorage.setItem("token",Ye(T.token)),T.token=new Uint8Array,sessionStorage.setItem("data",JSON.stringify(T)),sessionStorage.setItem("cdata",JSON.stringify(T)),sessionStorage.setItem("expiry",(Date.now()+1e3*60*15).toString()),await re("/grades")}let s=!1,n="",r="",g;function S(){n=this.value,t(1,n)}function d(){r=this.value,t(2,r)}function y(k){s=k,t(0,s)}return[s,n,r,g,a,S,d,y,()=>{t(3,g=a())}]}class ut extends fe{constructor(e){super(),he(this,e,xe,Qe,ie,{})}}export{ut as component};