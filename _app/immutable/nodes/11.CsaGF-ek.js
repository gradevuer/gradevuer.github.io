import{s as Ce,e as o,E as A,D as I,c as i,a as m,d as u,G as T,F as S,k as Ne,b as E,i as ke,g as e,I as Ie,J as $e,H as y,M as ye,o as Ve}from"../chunks/scheduler.B1M72nnb.js";import{S as Be,i as Re,b as ze,d as He,m as Me,a as Oe,t as xe,e as Je}from"../chunks/index.B0AvrpxK.js";import{e as Se}from"../chunks/each.DGeM46PS.js";import{P as je}from"../chunks/pageSelector.B1BqBIoE.js";import{W as qe}from"../chunks/main.D8RZwWgc.js";import{g as Ge}from"../chunks/stores.DhcoxCUz.js";import"../chunks/ProgressBar.svelte_svelte_type_style_lang.DqD7wnrs.js";import{g as Ae}from"../chunks/entry.BNuikcex.js";function Ue(s,t){const l=t.length,r=s.length;if(r>l)return!1;if(r===l)return s===t;e:for(var v=0,d=0;v<r;v++){for(var c=s.charCodeAt(v);d<l;)if(t.charCodeAt(d++)===c)continue e;return!1}return!0}function Te(s,t,l){const r=s.slice();return r[7]=t[l],r}function Pe(s){let t,l,r=s[7].name+"",v,d,c,g=s[7].email+"",D,P,w,h=s[7].job_title+"",L,k;return{c(){t=o("tr"),l=o("td"),v=I(r),d=A(),c=o("td"),D=I(g),P=A(),w=o("td"),L=I(h),k=A(),this.h()},l(n){t=i(n,"TR",{});var p=m(t);l=i(p,"TD",{class:!0});var R=m(l);v=S(R,r),R.forEach(u),d=T(p),c=i(p,"TD",{class:!0});var O=m(c);D=S(O,g),O.forEach(u),P=T(p),w=i(p,"TD",{class:!0});var V=m(w);L=S(V,h),V.forEach(u),k=T(p),p.forEach(u),this.h()},h(){E(l,"class","svelte-1awoh19"),E(c,"class","break-words svelte-1awoh19"),E(w,"class","svelte-1awoh19")},m(n,p){ke(n,t,p),e(t,l),e(l,v),e(t,d),e(t,c),e(c,D),e(t,P),e(t,w),e(w,L),e(t,k)},p(n,p){p&4&&r!==(r=n[7].name+"")&&y(v,r),p&4&&g!==(g=n[7].email+"")&&y(D,g),p&4&&h!==(h=n[7].job_title+"")&&y(L,h)},d(n){n&&u(t)}}}function We(s){let t,l,r,v,d,c,g,D,P=s[1].name+"",w,h,L,k,n,p=s[1].address+"",R,O,V=s[1].city+"",X,le,K=s[1].state+"",Z,re,C,z,ne,Y=s[1].phone_number+"",ee,oe,ie,ce,H,de,Q=s[1].principal_email+"",te,fe,x,$,ue,J,B,j,ge="<tr><th>Name</th> <th>Email</th> <th>Job Title</th></tr>",pe,q,N,he,be;r=new je({props:{classes:"select variant-ghost-primary",selected:"school info"}});let G=Se(s[2]),b=[];for(let a=0;a<G.length;a+=1)b[a]=Pe(Te(s,G,a));return{c(){t=o("div"),l=o("div"),ze(r.$$.fragment),v=A(),d=o("div"),c=o("div"),g=o("div"),D=o("span"),w=I(P),h=A(),L=o("br"),k=A(),n=o("span"),R=I(p),O=I(", "),X=I(V),le=I(", "),Z=I(K),re=A(),C=o("div"),z=o("span"),ne=I("Contact: "),ee=I(Y),oe=A(),ie=o("br"),ce=A(),H=o("span"),de=I("Prinicpal: "),te=I(Q),fe=A(),x=o("label"),$=o("input"),ue=A(),J=o("div"),B=o("table"),j=o("thead"),j.innerHTML=ge,pe=A(),q=o("tbody");for(let a=0;a<b.length;a+=1)b[a].c();this.h()},l(a){t=i(a,"DIV",{class:!0});var _=m(t);l=i(_,"DIV",{class:!0});var f=m(l);He(r.$$.fragment,f),f.forEach(u),v=T(_),d=i(_,"DIV",{class:!0});var M=m(d);c=i(M,"DIV",{class:!0});var ae=m(c);g=i(ae,"DIV",{});var U=m(g);D=i(U,"SPAN",{class:!0});var Ee=m(D);w=S(Ee,P),Ee.forEach(u),h=T(U),L=i(U,"BR",{}),k=T(U),n=i(U,"SPAN",{class:!0});var W=m(n);R=S(W,p),O=S(W,", "),X=S(W,V),le=S(W,", "),Z=S(W,K),W.forEach(u),U.forEach(u),re=T(ae),C=i(ae,"DIV",{class:!0});var F=m(C);z=i(F,"SPAN",{class:!0});var _e=m(z);ne=S(_e,"Contact: "),ee=S(_e,Y),_e.forEach(u),oe=T(F),ie=i(F,"BR",{}),ce=T(F),H=i(F,"SPAN",{class:!0});var me=m(H);de=S(me,"Prinicpal: "),te=S(me,Q),me.forEach(u),F.forEach(u),ae.forEach(u),fe=T(M),x=i(M,"LABEL",{class:!0});var we=m(x);$=i(we,"INPUT",{class:!0,placeholder:!0}),we.forEach(u),M.forEach(u),ue=T(_),J=i(_,"DIV",{class:!0});var Le=m(J);B=i(Le,"TABLE",{class:!0});var se=m(B);j=i(se,"THEAD",{"data-svelte-h":!0}),Ne(j)!=="svelte-1fnp01g"&&(j.innerHTML=ge),pe=T(se),q=i(se,"TBODY",{});var De=m(q);for(let ve=0;ve<b.length;ve+=1)b[ve].l(De);De.forEach(u),se.forEach(u),Le.forEach(u),_.forEach(u),this.h()},h(){E(l,"class","grid grid-cols-2 w-4/5"),E(D,"class","text-3xl"),E(n,"class","text-xl md:text-2xl"),E(z,"class","text-2xl"),E(H,"class","text-xl md:text-2xl break-words"),E(C,"class","pt-4 md:pt-0 md:justify-self-end"),E(c,"class","card pt-1 px-2 pb-4 grid md:grid-cols-2"),E($,"class","input"),E($,"placeholder","staff name"),E(x,"class","inp_size pt-4 svelte-1awoh19"),E(d,"class","w-4/5"),E(B,"class","table table-fixed"),E(J,"class","table-container w-4/5 pt-2"),E(t,"class","container")},m(a,_){ke(a,t,_),e(t,l),Me(r,l,null),e(t,v),e(t,d),e(d,c),e(c,g),e(g,D),e(D,w),e(g,h),e(g,L),e(g,k),e(g,n),e(n,R),e(n,O),e(n,X),e(n,le),e(n,Z),e(c,re),e(c,C),e(C,z),e(z,ne),e(z,ee),e(C,oe),e(C,ie),e(C,ce),e(C,H),e(H,de),e(H,te),e(d,fe),e(d,x),e(x,$),Ie($,s[0]),e(t,ue),e(t,J),e(J,B),e(B,j),e(B,pe),e(B,q);for(let f=0;f<b.length;f+=1)b[f]&&b[f].m(q,null);N=!0,he||(be=$e($,"input",s[3]),he=!0)},p(a,[_]){if((!N||_&2)&&P!==(P=a[1].name+"")&&y(w,P),(!N||_&2)&&p!==(p=a[1].address+"")&&y(R,p),(!N||_&2)&&V!==(V=a[1].city+"")&&y(X,V),(!N||_&2)&&K!==(K=a[1].state+"")&&y(Z,K),(!N||_&2)&&Y!==(Y=a[1].phone_number+"")&&y(ee,Y),(!N||_&2)&&Q!==(Q=a[1].principal_email+"")&&y(te,Q),_&1&&$.value!==a[0]&&Ie($,a[0]),_&4){G=Se(a[2]);let f;for(f=0;f<G.length;f+=1){const M=Te(a,G,f);b[f]?b[f].p(M,_):(b[f]=Pe(M),b[f].c(),b[f].m(q,null))}for(;f<b.length;f+=1)b[f].d(1);b.length=G.length}},i(a){N||(Oe(r.$$.fragment,a),N=!0)},o(a){xe(r.$$.fragment,a),N=!1},d(a){a&&u(t),Je(r),ye(b,a),he=!1,be()}}}function Fe(s,t,l){const r=Ge();let v={name:"Loading...",principal:"Loading...",principal_email:"Loading@loading.load",address:"Loading street",city:"Loaded City",state:"LD",zip_code:"12345",phone_number:"1-800-LOA-DING",website:"https://gradevuer.pages.dev/",staff:[]},d="",c=[];Ve(async()=>{Number.parseInt(sessionStorage.getItem("expiry")??"0")<Date.now()&&await Ae("/"),l(1,v=await D()),l(2,c=v.staff)});function g(w){let h=[];v.staff.forEach(L=>{let[k,n]=L.name.split(",");Ue(w.toLowerCase(),(n+k).toLowerCase())&&h.push(L)}),l(2,c=h)}async function D(){const w={headers:{"Accept-Encoding":"br",Authorization:`Bearer ${sessionStorage.getItem("token")}`}},h=await fetch(`${qe}/school`,w);if(h.headers.has("set-token")&&sessionStorage.setItem("token",h.headers.get("set-token")),h.status!=200){let L=await h.text();const k={message:`${L}`,background:"variant-filled-error bg-gradient-to-r from-error-400 to-error-600",timeout:3e3};throw r.trigger(k),await Ae("/grades"),new Error(L)}return JSON.parse(await h.text())}function P(){d=this.value,l(0,d)}return s.$$.update=()=>{s.$$.dirty&1&&g(d)},[d,v,c,P]}class st extends Be{constructor(t){super(),Re(this,t,Fe,We,Ce,{})}}export{st as component};