import{W as Ee,X as ye,Y as Z,Z as Se,a as ae,e as I,c as E,d as P,h as y,j as o,D as le,k as K,l as _,n as A,N as W,O as ee,b as U,i as M,_ as ne,$ as F,w as V,r as ue,a0 as ie,P as De,Q as Te,J as pe,K as Ce,L as Pe,M as we,S as G,G as Le,B as $,z as x,a1 as ze,y as Be,t as de,f as he,m as Ve}from"../chunks/scheduler.BgK5Tl8W.js";import{g as fe,t as J,c as me,a as R,S as se,i as re,j as Ae,b as be,d as ge,m as _e,e as ke}from"../chunks/index.NEkLQFSy.js";import"../chunks/ProgressBar.svelte_svelte_type_style_lang.D45o3ZTf.js";import{g as Ne}from"../chunks/spread.CN4WR7uZ.js";import{g as je}from"../chunks/entry.BNszQ6d3.js";function ce(l,e){const t=e.token={};function a(s,r,c,i){if(e.token!==t)return;e.resolved=i;let u=e.ctx;c!==void 0&&(u=u.slice(),u[c]=i);const f=s&&(e.current=s)(u);let b=!1;e.block&&(e.blocks?e.blocks.forEach((v,g)=>{g!==r&&v&&(fe(),J(v,1,1,()=>{e.blocks[g]===v&&(e.blocks[g]=null)}),me())}):e.block.d(1),f.c(),R(f,1),f.m(e.mount(),e.anchor),b=!0),e.block=f,e.blocks&&(e.blocks[r]=f),b&&Se()}if(Ee(l)){const s=ye();if(l.then(r=>{Z(s),a(e.then,1,e.value,r),Z(null)},r=>{if(Z(s),a(e.catch,2,e.error,r),Z(null),!e.hasCatch)throw r}),e.current!==e.pending)return a(e.pending,0),!0}else{if(e.current!==e.then)return a(e.then,1,e.value,l),!0;e.resolved=l}}function Ue(l,e,t){const a=e.slice(),{resolved:s}=l;l.current===l.then&&(a[l.value]=s),l.current===l.catch&&(a[l.error]=s),l.block.p(a,t)}function Me(l){let e,t,a,s=`${l[4]?100:l[7]}%`,r,c;return{c(){e=I("div"),t=I("div"),this.h()},l(i){e=E(i,"DIV",{class:!0,"data-testid":!0,role:!0,"aria-labelledby":!0,"aria-valuenow":!0,"aria-valuemin":!0,"aria-valuemax":!0});var u=P(e);t=E(u,"DIV",{class:!0}),P(t).forEach(y),u.forEach(y),this.h()},h(){o(t,"class",a="progress-bar-meter "+l[5]+" svelte-12wvf64"),le(t,"width",s),o(e,"class",r="progress-bar "+l[6]+" svelte-12wvf64"),o(e,"data-testid","progress-bar"),o(e,"role","progressbar"),o(e,"aria-labelledby",l[3]),o(e,"aria-valuenow",l[0]),o(e,"aria-valuemin",l[1]),o(e,"aria-valuemax",c=l[2]-l[1])},m(i,u){K(i,e,u),_(e,t)},p(i,[u]){u&32&&a!==(a="progress-bar-meter "+i[5]+" svelte-12wvf64")&&o(t,"class",a),u&144&&s!==(s=`${i[4]?100:i[7]}%`)&&le(t,"width",s),u&64&&r!==(r="progress-bar "+i[6]+" svelte-12wvf64")&&o(e,"class",r),u&8&&o(e,"aria-labelledby",i[3]),u&1&&o(e,"aria-valuenow",i[0]),u&2&&o(e,"aria-valuemin",i[1]),u&6&&c!==(c=i[2]-i[1])&&o(e,"aria-valuemax",c)},i:A,o:A,d(i){i&&y(e)}}}const Oe="w-full overflow-hidden",Ge="h-full";function Re(l,e,t){let a,s,r,c,i,{value:u=void 0}=e,{min:f=0}=e,{max:b=100}=e,{height:v="h-2"}=e,{rounded:g="rounded-token"}=e,{transition:m="transition-[width]"}=e,{animIndeterminate:T="anim-indeterminate"}=e,{meter:w="bg-surface-900-50-token"}=e,{track:D="bg-surface-200-700-token"}=e,{labelledby:z=""}=e;return l.$$set=n=>{t(15,e=W(W({},e),ee(n))),"value"in n&&t(0,u=n.value),"min"in n&&t(1,f=n.min),"max"in n&&t(2,b=n.max),"height"in n&&t(8,v=n.height),"rounded"in n&&t(9,g=n.rounded),"transition"in n&&t(10,m=n.transition),"animIndeterminate"in n&&t(11,T=n.animIndeterminate),"meter"in n&&t(12,w=n.meter),"track"in n&&t(13,D=n.track),"labelledby"in n&&t(3,z=n.labelledby)},l.$$.update=()=>{l.$$.dirty&7&&t(7,a=u?100*(u-f)/(b-f):0),l.$$.dirty&1&&t(4,s=u===void 0||u<0),l.$$.dirty&2064&&t(14,r=s?T:""),t(6,c=`${Oe} ${D} ${v} ${g} ${e.class??""}`),l.$$.dirty&22016&&t(5,i=`${Ge} ${w} ${g} ${r} ${m}`)},e=ee(e),[u,f,b,z,s,i,c,a,v,g,m,T,w,D,r]}class Je extends se{constructor(e){super(),re(this,e,Re,Me,ae,{value:0,min:1,max:2,height:8,rounded:9,transition:10,animIndeterminate:11,meter:12,track:13,labelledby:3})}}function oe(l){let e,t;const a=l[22].default,s=pe(a,l,l[21],null);return{c(){e=I("div"),s&&s.c(),this.h()},l(r){e=E(r,"DIV",{class:!0});var c=P(e);s&&s.l(c),c.forEach(y),this.h()},h(){o(e,"class","slide-toggle-text ml-3")},m(r,c){K(r,e,c),s&&s.m(e,null),t=!0},p(r,c){s&&s.p&&(!t||c[0]&2097152)&&Ce(s,a,r,r[21],t?we(a,r[21],c,null):Pe(r[21]),null)},i(r){t||(R(s,r),t=!0)},o(r){J(s,r),t=!1},d(r){r&&y(e),s&&s.d(r)}}}function Ke(l){let e,t,a,s,r,c,i,u,f,b,v,g,m,T,w,D=[{type:"checkbox"},{class:"slide-toggle-input hidden"},{name:l[1]},l[8](),{disabled:s=l[9].disabled}],z={};for(let d=0;d<D.length;d+=1)z=W(z,D[d]);let n=l[10].default&&oe(l);return{c(){e=I("div"),t=I("label"),a=I("input"),r=U(),c=I("div"),i=I("div"),b=U(),n&&n.c(),this.h()},l(d){e=E(d,"DIV",{id:!0,class:!0,"data-testid":!0,role:!0,"aria-label":!0,"aria-checked":!0,tabindex:!0});var k=P(e);t=E(k,"LABEL",{class:!0});var B=P(t);a=E(B,"INPUT",{type:!0,class:!0,name:!0}),r=M(B),c=E(B,"DIV",{class:!0});var N=P(c);i=E(N,"DIV",{class:!0}),P(i).forEach(y),N.forEach(y),b=M(B),n&&n.l(B),B.forEach(y),k.forEach(y),this.h()},h(){ne(a,z),o(i,"class",u="slide-toggle-thumb "+l[3]),F(i,"cursor-not-allowed",l[9].disabled),o(c,"class",f="slide-toggle-track "+l[4]),F(c,"cursor-not-allowed",l[9].disabled),o(t,"class",v="slide-toggle-label "+l[5]),o(e,"id",l[2]),o(e,"class",g="slide-toggle "+l[6]),o(e,"data-testid","slide-toggle"),o(e,"role","switch"),o(e,"aria-label",l[2]),o(e,"aria-checked",l[0]),o(e,"tabindex","0")},m(d,k){K(d,e,k),_(e,t),_(t,a),a.autofocus&&a.focus(),a.checked=l[0],_(t,r),_(t,c),_(c,i),_(t,b),n&&n.m(t,null),m=!0,T||(w=[V(a,"change",l[31]),V(a,"click",l[23]),V(a,"keydown",l[24]),V(a,"keyup",l[25]),V(a,"keypress",l[26]),V(a,"mouseover",l[27]),V(a,"change",l[28]),V(a,"focus",l[29]),V(a,"blur",l[30]),V(e,"keydown",l[7])],T=!0)},p(d,k){ne(a,z=Ne(D,[{type:"checkbox"},{class:"slide-toggle-input hidden"},(!m||k[0]&2)&&{name:d[1]},d[8](),(!m||k[0]&512&&s!==(s=d[9].disabled))&&{disabled:s}])),k[0]&1&&(a.checked=d[0]),(!m||k[0]&8&&u!==(u="slide-toggle-thumb "+d[3]))&&o(i,"class",u),(!m||k[0]&520)&&F(i,"cursor-not-allowed",d[9].disabled),(!m||k[0]&16&&f!==(f="slide-toggle-track "+d[4]))&&o(c,"class",f),(!m||k[0]&528)&&F(c,"cursor-not-allowed",d[9].disabled),d[10].default?n?(n.p(d,k),k[0]&1024&&R(n,1)):(n=oe(d),n.c(),R(n,1),n.m(t,null)):n&&(fe(),J(n,1,1,()=>{n=null}),me()),(!m||k[0]&32&&v!==(v="slide-toggle-label "+d[5]))&&o(t,"class",v),(!m||k[0]&4)&&o(e,"id",d[2]),(!m||k[0]&64&&g!==(g="slide-toggle "+d[6]))&&o(e,"class",g),(!m||k[0]&4)&&o(e,"aria-label",d[2]),(!m||k[0]&1)&&o(e,"aria-checked",d[0])},i(d){m||(R(n),m=!0)},o(d){J(n),m=!1},d(d){d&&y(e),n&&n.d(),T=!1,ue(w)}}}const qe="inline-block",He="unstyled flex items-center",Qe="flex transition-all duration-[200ms] cursor-pointer",We="w-[50%] h-full scale-[0.8] transition-all duration-[200ms] shadow";function Xe(l,e,t){let a,s,r,c,i,u,f,b;const v=["name","checked","size","background","active","border","rounded","label"];let g=ie(e,v),{$$slots:m={},$$scope:T}=e;const w=De(m),D=Te();let{name:z}=e,{checked:n=!1}=e,{size:d="md"}=e,{background:k="bg-surface-400 dark:bg-surface-700"}=e,{active:B="bg-surface-900 dark:bg-surface-300"}=e,{border:N=""}=e,{rounded:j="rounded-full"}=e,{label:q=""}=e,O;switch(d){case"sm":O="w-12 h-6";break;case"lg":O="w-20 h-10";break;default:O="w-16 h-8"}function te(h){["Enter","Space"].includes(h.code)&&(h.preventDefault(),D("keyup",h),h.currentTarget.firstChild.click())}function X(){return delete g.class,g}function p(h){G.call(this,l,h)}function L(h){G.call(this,l,h)}function S(h){G.call(this,l,h)}function C(h){G.call(this,l,h)}function H(h){G.call(this,l,h)}function Q(h){G.call(this,l,h)}function Y(h){G.call(this,l,h)}function ve(h){G.call(this,l,h)}function Ie(){n=this.checked,t(0,n)}return l.$$set=h=>{t(9,e=W(W({},e),ee(h))),t(33,g=ie(e,v)),"name"in h&&t(1,z=h.name),"checked"in h&&t(0,n=h.checked),"size"in h&&t(11,d=h.size),"background"in h&&t(12,k=h.background),"active"in h&&t(13,B=h.active),"border"in h&&t(14,N=h.border),"rounded"in h&&t(15,j=h.rounded),"label"in h&&t(2,q=h.label),"$$scope"in h&&t(21,T=h.$$scope)},l.$$.update=()=>{l.$$.dirty[0]&12289&&t(19,a=n?B:`${k} cursor-pointer`),l.$$.dirty[0]&1&&t(18,s=n?"bg-white/75":"bg-white"),l.$$.dirty[0]&1&&t(17,r=n?"translate-x-full":""),t(20,c=e.disabled===!0?"opacity-50":"hover:brightness-[105%] dark:hover:brightness-110 cursor-pointer"),t(6,i=`${qe} ${j} ${c} ${e.class??""}`),l.$$.dirty[0]&638976&&t(4,f=`${Qe} ${N} ${j} ${O} ${a}`),l.$$.dirty[0]&425984&&t(3,b=`${We} ${j} ${s} ${r}`)},t(5,u=`${He}`),e=ee(e),[n,z,q,b,f,u,i,te,X,e,w,d,k,B,N,j,O,r,s,a,c,T,m,p,L,S,C,H,Q,Y,ve,Ie]}class Ye extends se{constructor(e){super(),re(this,e,Xe,Ke,ae,{name:1,checked:0,size:11,background:12,active:13,border:14,rounded:15,label:2},null,[-1,-1])}}function Ze(l){let e;return{c(){e=de("Remember me")},l(t){e=he(t,"Remember me")},m(t,a){K(t,e,a)},d(t){t&&y(e)}}}function Fe(l){let e,t,a,s="Error",r,c,i=l[9].message+"",u;return{c(){e=I("aside"),t=I("div"),a=I("h3"),a.textContent=s,r=U(),c=I("p"),u=de(i),this.h()},l(f){e=E(f,"ASIDE",{class:!0});var b=P(e);t=E(b,"DIV",{class:!0});var v=P(t);a=E(v,"H3",{class:!0,"data-svelte-h":!0}),$(a)!=="svelte-mmnhjy"&&(a.textContent=s),r=M(v),c=E(v,"P",{});var g=P(c);u=he(g,i),g.forEach(y),v.forEach(y),b.forEach(y),this.h()},h(){o(a,"class","h3"),o(t,"class","alert-message -3"),o(e,"class","alert errorw incorrect variant-ghost-error text-left svelte-1rgklt7"),le(e,"margin-top","10px")},m(f,b){K(f,e,b),_(e,t),_(t,a),_(t,r),_(t,c),_(c,u)},p(f,b){b&8&&i!==(i=f[9].message+"")&&Ve(u,i)},i:A,o:A,d(f){f&&y(e)}}}function xe(l){return{c:A,l:A,m:A,p:A,i:A,o:A,d:A}}function $e(l){let e,t,a;return t=new Je({props:{meter:"bg-gradient-to-r from-secondary-400 to-secondary-600"}}),{c(){e=I("div"),be(t.$$.fragment),this.h()},l(s){e=E(s,"DIV",{class:!0});var r=P(e);ge(t.$$.fragment,r),r.forEach(y),this.h()},h(){o(e,"class","loading svelte-1rgklt7")},m(s,r){K(s,e,r),_e(t,e,null),a=!0},p:A,i(s){a||(R(t.$$.fragment,s),a=!0)},o(s){J(t.$$.fragment,s),a=!1},d(s){s&&y(e),ke(t)}}}function et(l){let e,t,a,s,r="Username",c,i,u,f,b,v="Password",g,m,T,w,D,z,n,d,k="Login",B,N,j,q,O;function te(L){l[7](L)}let X={name:"cookie",active:"bg-gradient-to-r from-secondary-200 to-secondary-700",size:"sm",$$slots:{default:[Ze]},$$scope:{ctx:l}};l[0]!==void 0&&(X.checked=l[0]),D=new Ye({props:X}),Le.push(()=>Ae(D,"checked",te));let p={ctx:l,current:null,token:null,hasCatch:!0,pending:$e,then:xe,catch:Fe,error:9,blocks:[,,,]};return ce(N=l[3],p),{c(){e=I("div"),t=I("div"),a=I("label"),s=I("span"),s.textContent=r,c=U(),i=I("input"),u=U(),f=I("label"),b=I("span"),b.textContent=v,g=U(),m=I("input"),T=U(),w=I("label"),be(D.$$.fragment),n=U(),d=I("button"),d.textContent=k,B=U(),p.block.c(),this.h()},l(L){e=E(L,"DIV",{class:!0});var S=P(e);t=E(S,"DIV",{class:!0});var C=P(t);a=E(C,"LABEL",{class:!0});var H=P(a);s=E(H,"SPAN",{"data-svelte-h":!0}),$(s)!=="svelte-9difb2"&&(s.textContent=r),c=M(H),i=E(H,"INPUT",{class:!0,placeholder:!0}),H.forEach(y),u=M(C),f=E(C,"LABEL",{class:!0});var Q=P(f);b=E(Q,"SPAN",{"data-svelte-h":!0}),$(b)!=="svelte-1kvjhoz"&&(b.textContent=v),g=M(Q),m=E(Q,"INPUT",{class:!0,type:!0,placeholder:!0}),Q.forEach(y),T=M(C),w=E(C,"LABEL",{class:!0});var Y=P(w);ge(D.$$.fragment,Y),Y.forEach(y),n=M(C),d=E(C,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),$(d)!=="svelte-6xw33d"&&(d.textContent=k),C.forEach(y),B=M(S),p.block.l(S),S.forEach(y),this.h()},h(){o(i,"class","input"),o(i,"placeholder","id"),o(a,"class","label text-left"),o(m,"class","input"),o(m,"type","password"),o(m,"placeholder","password"),o(f,"class","label text-left"),o(w,"class","flex items-center space-x-2"),o(d,"type","button"),o(d,"class","btn login bg-gradient-to-br variant-gradient-primary-tertiary svelte-1rgklt7"),o(t,"class","card p-4 window text-token space-y-4 text-center svelte-1rgklt7"),o(e,"class","container")},m(L,S){K(L,e,S),_(e,t),_(t,a),_(a,s),_(a,c),_(a,i),x(i,l[1]),_(t,u),_(t,f),_(f,b),_(f,g),_(f,m),x(m,l[2]),_(t,T),_(t,w),_e(D,w,null),_(t,n),_(t,d),_(e,B),p.block.m(e,p.anchor=null),p.mount=()=>e,p.anchor=null,j=!0,q||(O=[V(i,"input",l[5]),V(m,"input",l[6]),V(d,"click",l[8])],q=!0)},p(L,[S]){l=L,S&2&&i.value!==l[1]&&x(i,l[1]),S&4&&m.value!==l[2]&&x(m,l[2]);const C={};S&1024&&(C.$$scope={dirty:S,ctx:l}),!z&&S&1&&(z=!0,C.checked=l[0],ze(()=>z=!1)),D.$set(C),p.ctx=l,S&8&&N!==(N=l[3])&&ce(N,p)||Ue(p,l,S)},i(L){j||(R(D.$$.fragment,L),R(p.block),j=!0)},o(L){J(D.$$.fragment,L);for(let S=0;S<3;S+=1){const C=p.blocks[S];J(C)}j=!1},d(L){L&&y(e),ke(D),p.block.d(),p.token=null,p=null,q=!1,ue(O)}}}function tt(l,e,t){Be(async()=>{t(1,r=localStorage.getItem("name")??""),t(2,c=localStorage.getItem("pass")??""),t(0,s=r!=""||c!="")});async function a(){const g={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:r,pass:c})},m=await fetch("https://worker-rust.zillorz.workers.dev/getGradeData",g);let T=await m.text();if(m.status!=200)throw new Error(T);s?(localStorage.setItem("name",r),localStorage.setItem("pass",c)):localStorage.clear(),sessionStorage.setItem("name",r),sessionStorage.setItem("pass",c),sessionStorage.setItem("data",T),sessionStorage.setItem("cdata",T),sessionStorage.setItem("expiry",(Date.now()+1e3*60*15).toString()),await je("/grades")}let s=!1,r="",c="",i;function u(){r=this.value,t(1,r)}function f(){c=this.value,t(2,c)}function b(g){s=g,t(0,s)}return[s,r,c,i,a,u,f,b,()=>{t(3,i=a())}]}class ct extends se{constructor(e){super(),re(this,e,tt,et,ae,{})}}export{ct as component};
