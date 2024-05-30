import{s as Ce,e as o,E as S,D as I,c as i,a as _,d as u,G as T,F as A,k as Ne,b,i as Pe,g as e,I as Ie,J as $e,H as y,M as ye,o as Ve}from"../chunks/scheduler.HaoJMjUf.js";import{S as ke,i as Be,b as Re,d as ze,m as He,a as Me,t as Oe,e as Je}from"../chunks/index.G81k-Xhd.js";import{e as Ae}from"../chunks/each.BvinSC2D.js";import{P as qe}from"../chunks/pageSelector.DErIiFTE.js";import{W as xe}from"../chunks/main.DlQOQXQP.js";import{g as Ge}from"../chunks/stores.6eYr0iPl.js";import"../chunks/ProgressBar.svelte_svelte_type_style_lang.F8mDr4Rg.js";import{g as Se}from"../chunks/entry.bxCKXrBO.js";function Ue(s,t){const l=t.length,r=s.length;if(r>l)return!1;if(r===l)return s===t;e:for(var m=0,d=0;m<r;m++){for(var c=s.charCodeAt(m);d<l;)if(t.charCodeAt(d++)===c)continue e;return!1}return!0}function Te(s,t,l){const r=s.slice();return r[7]=t[l],r}function je(s){let t,l,r=s[7].name+"",m,d,c,v=s[7].email+"",D,j,E,w=s[7].job_title+"",L,P;return{c(){t=o("tr"),l=o("td"),m=I(r),d=S(),c=o("td"),D=I(v),j=S(),E=o("td"),L=I(w),P=S(),this.h()},l(n){t=i(n,"TR",{});var p=_(t);l=i(p,"TD",{class:!0});var B=_(l);m=A(B,r),B.forEach(u),d=T(p),c=i(p,"TD",{class:!0});var M=_(c);D=A(M,v),M.forEach(u),j=T(p),E=i(p,"TD",{class:!0});var V=_(E);L=A(V,w),V.forEach(u),P=T(p),p.forEach(u),this.h()},h(){b(l,"class","svelte-jj0ldd"),b(c,"class","break-words svelte-jj0ldd"),b(E,"class","svelte-jj0ldd")},m(n,p){Pe(n,t,p),e(t,l),e(l,m),e(t,d),e(t,c),e(c,D),e(t,j),e(t,E),e(E,L),e(t,P)},p(n,p){p&4&&r!==(r=n[7].name+"")&&y(m,r),p&4&&v!==(v=n[7].email+"")&&y(D,v),p&4&&w!==(w=n[7].job_title+"")&&y(L,w)},d(n){n&&u(t)}}}function We(s){let t,l,r,m,d,c,v,D,j=s[1].name+"",E,w,L,P,n,p=s[1].address+"",B,M,V=s[1].city+"",X,le,K=s[1].state+"",Z,re,C,R,ne,Y=s[1].phone_number+"",ee,oe,ie,ce,z,de,Q=s[1].principal_email+"",te,fe,O,$,ue,J,k,q,ge="<tr><th>Name</th> <th>Email</th> <th>Job Title</th></tr>",pe,x,N,he,be;r=new qe({props:{classes:"select variant-ghost-primary",selected:"school info"}});let G=Ae(s[2]),g=[];for(let a=0;a<G.length;a+=1)g[a]=je(Te(s,G,a));return{c(){t=o("div"),l=o("div"),Re(r.$$.fragment),m=S(),d=o("div"),c=o("div"),v=o("div"),D=o("span"),E=I(j),w=S(),L=o("br"),P=S(),n=o("span"),B=I(p),M=I(", "),X=I(V),le=I(", "),Z=I(K),re=S(),C=o("div"),R=o("span"),ne=I("Contact: "),ee=I(Y),oe=S(),ie=o("br"),ce=S(),z=o("span"),de=I("Prinicpal: "),te=I(Q),fe=S(),O=o("label"),$=o("input"),ue=S(),J=o("div"),k=o("table"),q=o("thead"),q.innerHTML=ge,pe=S(),x=o("tbody");for(let a=0;a<g.length;a+=1)g[a].c();this.h()},l(a){t=i(a,"DIV",{class:!0});var h=_(t);l=i(h,"DIV",{class:!0});var f=_(l);ze(r.$$.fragment,f),f.forEach(u),m=T(h),d=i(h,"DIV",{class:!0});var H=_(d);c=i(H,"DIV",{class:!0});var ae=_(c);v=i(ae,"DIV",{});var U=_(v);D=i(U,"SPAN",{class:!0});var Ee=_(D);E=A(Ee,j),Ee.forEach(u),w=T(U),L=i(U,"BR",{}),P=T(U),n=i(U,"SPAN",{class:!0});var W=_(n);B=A(W,p),M=A(W,", "),X=A(W,V),le=A(W,", "),Z=A(W,K),W.forEach(u),U.forEach(u),re=T(ae),C=i(ae,"DIV",{class:!0});var F=_(C);R=i(F,"SPAN",{class:!0});var _e=_(R);ne=A(_e,"Contact: "),ee=A(_e,Y),_e.forEach(u),oe=T(F),ie=i(F,"BR",{}),ce=T(F),z=i(F,"SPAN",{class:!0});var me=_(z);de=A(me,"Prinicpal: "),te=A(me,Q),me.forEach(u),F.forEach(u),ae.forEach(u),fe=T(H),O=i(H,"LABEL",{class:!0});var we=_(O);$=i(we,"INPUT",{class:!0,placeholder:!0}),we.forEach(u),H.forEach(u),ue=T(h),J=i(h,"DIV",{class:!0});var Le=_(J);k=i(Le,"TABLE",{class:!0});var se=_(k);q=i(se,"THEAD",{"data-svelte-h":!0}),Ne(q)!=="svelte-1w51ud0"&&(q.innerHTML=ge),pe=T(se),x=i(se,"TBODY",{});var De=_(x);for(let ve=0;ve<g.length;ve+=1)g[ve].l(De);De.forEach(u),se.forEach(u),Le.forEach(u),h.forEach(u),this.h()},h(){b(l,"class","grid grid-cols-2 w-4/5"),b(D,"class","text-3xl"),b(n,"class","text-xl md:text-2xl"),b(R,"class","text-2xl"),b(z,"class","text-xl md:text-2xl break-words"),b(C,"class","pt-4 md:pt-0 md:justify-self-end"),b(c,"class","card pt-1 px-2 pb-4 grid md:grid-cols-2"),b($,"class","input"),b($,"placeholder","staff name"),b(O,"class","inp_size pt-4 svelte-jj0ldd"),b(d,"class","w-4/5"),b(k,"class","table table-fixed"),b(J,"class","table-container w-4/5 pt-2"),b(t,"class","container")},m(a,h){Pe(a,t,h),e(t,l),He(r,l,null),e(t,m),e(t,d),e(d,c),e(c,v),e(v,D),e(D,E),e(v,w),e(v,L),e(v,P),e(v,n),e(n,B),e(n,M),e(n,X),e(n,le),e(n,Z),e(c,re),e(c,C),e(C,R),e(R,ne),e(R,ee),e(C,oe),e(C,ie),e(C,ce),e(C,z),e(z,de),e(z,te),e(d,fe),e(d,O),e(O,$),Ie($,s[0]),e(t,ue),e(t,J),e(J,k),e(k,q),e(k,pe),e(k,x);for(let f=0;f<g.length;f+=1)g[f]&&g[f].m(x,null);N=!0,he||(be=$e($,"input",s[3]),he=!0)},p(a,[h]){if((!N||h&2)&&j!==(j=a[1].name+"")&&y(E,j),(!N||h&2)&&p!==(p=a[1].address+"")&&y(B,p),(!N||h&2)&&V!==(V=a[1].city+"")&&y(X,V),(!N||h&2)&&K!==(K=a[1].state+"")&&y(Z,K),(!N||h&2)&&Y!==(Y=a[1].phone_number+"")&&y(ee,Y),(!N||h&2)&&Q!==(Q=a[1].principal_email+"")&&y(te,Q),h&1&&$.value!==a[0]&&Ie($,a[0]),h&4){G=Ae(a[2]);let f;for(f=0;f<G.length;f+=1){const H=Te(a,G,f);g[f]?g[f].p(H,h):(g[f]=je(H),g[f].c(),g[f].m(x,null))}for(;f<g.length;f+=1)g[f].d(1);g.length=G.length}},i(a){N||(Me(r.$$.fragment,a),N=!0)},o(a){Oe(r.$$.fragment,a),N=!1},d(a){a&&u(t),Je(r),ye(g,a),he=!1,be()}}}function Fe(s,t,l){const r=Ge();let m={name:"Loading...",principal:"Loading...",principal_email:"Loading@loading.load",address:"Loading street",city:"Loaded City",state:"LD",zip_code:"12345",phone_number:"1-800-LOA-DING",website:"https://gradevuer.pages.dev/",staff:[]},d="",c=[];Ve(async()=>{Number.parseInt(sessionStorage.getItem("expiry")??"0")<Date.now()&&await Se("/"),l(1,m=await D()),l(2,c=m.staff)});function v(E){let w=[];m.staff.forEach(L=>{let[P,n]=L.name.split(",");Ue(E.toLowerCase(),(n+P).toLowerCase())&&w.push(L)}),l(2,c=w)}async function D(){const E={headers:{"Accept-Encoding":"br",Authorization:`Bearer ${sessionStorage.getItem("token")}`}},w=await fetch(`${xe}/school`,E);let L=await w.text();if(w.status!=200){const P={message:`${L}`,background:"variant-filled-error bg-gradient-to-r from-error-400 to-error-600",timeout:3e3};throw r.trigger(P),await Se("/grades"),new Error(L)}return JSON.parse(L)}function j(){d=this.value,l(0,d)}return s.$$.update=()=>{s.$$.dirty&1&&v(d)},[d,m,c,j]}class st extends ke{constructor(t){super(),Be(this,t,Fe,We,Ce,{})}}export{st as component};
