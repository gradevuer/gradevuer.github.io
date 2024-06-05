import{s as ie,e as _,E as x,D as u,c as g,a as b,G,F as f,d as c,b as p,i as B,g as s,H as E,o as ce,n as de,U as se}from"../chunks/scheduler.HaoJMjUf.js";import{S as pe,i as ue,b as fe,d as he,m as me,a as _e,t as ge,e as be}from"../chunks/index.G81k-Xhd.js";import{g as oe}from"../chunks/entry.CY06v9jW.js";import{P as ve}from"../chunks/pageSelector.CIVgMxR1.js";import{W as le}from"../chunks/main.DlQOQXQP.js";import{g as we}from"../chunks/stores.6eYr0iPl.js";import"../chunks/ProgressBar.svelte_svelte_type_style_lang.F8mDr4Rg.js";import{u as ke}from"../chunks/pack.CQ5w_lID.js";function Ee(i){let e;return{c(){e=_("div"),this.h()},l(r){e=g(r,"DIV",{class:!0}),b(e).forEach(c),this.h()},h(){p(e,"class","float-right w-32 h-40 pl-2 placeholder animate-pulse")},m(r,t){B(r,e,t)},p:de,d(r){r&&c(e)}}}function ye(i){let e,r;return{c(){e=_("img"),this.h()},l(t){e=g(t,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){se(e.src,r=i[1])||p(e,"src",r),p(e,"alt","You"),p(e,"class","float-right")},m(t,o){B(t,e,o)},p(t,o){o&2&&!se(e.src,r=t[1])&&p(e,"src",r)},d(t){t&&c(e)}}}function Le(i){let e,r,t=i[0].gender+"",o;return{c(){e=_("p"),r=u("Gender: "),o=u(t),this.h()},l(a){e=g(a,"P",{class:!0});var n=b(e);r=f(n,"Gender: "),o=f(n,t),n.forEach(c),this.h()},h(){p(e,"class","text-xl")},m(a,n){B(a,e,n),s(e,r),s(e,o)},p(a,n){n&1&&t!==(t=a[0].gender+"")&&E(o,t)},d(a){a&&c(e)}}}function $e(i){let e,r,t=i[0].gender+"",o;return{c(){e=_("p"),r=u("Gender: "),o=u(t),this.h()},l(a){e=g(a,"P",{class:!0});var n=b(e);r=f(n,"Gender: "),o=f(n,t),n.forEach(c),this.h()},h(){p(e,"class","text-xl bg-gradient-to-br from-pink-500 to-violet-500 bg-clip-text text-transparent box-decoration-clone")},m(a,n){B(a,e,n),s(e,r),s(e,o)},p(a,n){n&1&&t!==(t=a[0].gender+"")&&E(o,t)},d(a){a&&c(e)}}}function Ie(i){let e,r,t=i[0].gender+"",o;return{c(){e=_("p"),r=u("Gender: "),o=u(t),this.h()},l(a){e=g(a,"P",{class:!0});var n=b(e);r=f(n,"Gender: "),o=f(n,t),n.forEach(c),this.h()},h(){p(e,"class","text-xl bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone")},m(a,n){B(a,e,n),s(e,r),s(e,o)},p(a,n){n&1&&t!==(t=a[0].gender+"")&&E(o,t)},d(a){a&&c(e)}}}function Pe(i){let e,r,t,o,a,n=i[0].name+"",S,y,m,A,L=i[0].id+"",H,W,M,$,j,R=i[0].grade+"",q,C,I,K,U=i[0].phone_number+"",z,N,P,Y,V=i[0].birth_date+"",F,J,D,k;function te(l,d){return l[1]?ye:Ee}let O=te(i),v=O(i);function re(l,d){return l[0].gender=="Male"?Ie:l[0].gender=="Female"?$e:Le}let T=re(i),w=T(i);return D=new ve({props:{classes:"select variant-ghost-primary",selected:"student info"}}),{c(){e=_("div"),r=_("div"),t=_("div"),v.c(),o=x(),a=_("h6"),S=u(n),y=x(),m=_("p"),A=u("Id: "),H=u(L),W=x(),w.c(),M=x(),$=_("p"),j=u("Grade: "),q=u(R),C=x(),I=_("p"),K=u("Phone number: "),z=u(U),N=x(),P=_("p"),Y=u("Birth date: "),F=u(V),J=x(),fe(D.$$.fragment),this.h()},l(l){e=g(l,"DIV",{class:!0});var d=b(e);r=g(d,"DIV",{class:!0});var ae=b(r);t=g(ae,"DIV",{class:!0});var h=b(t);v.l(h),o=G(h),a=g(h,"H6",{class:!0});var ne=b(a);S=f(ne,n),ne.forEach(c),y=G(h),m=g(h,"P",{class:!0});var Q=b(m);A=f(Q,"Id: "),H=f(Q,L),Q.forEach(c),W=G(h),w.l(h),M=G(h),$=g(h,"P",{class:!0});var X=b($);j=f(X,"Grade: "),q=f(X,R),X.forEach(c),C=G(h),I=g(h,"P",{class:!0});var Z=b(I);K=f(Z,"Phone number: "),z=f(Z,U),Z.forEach(c),N=G(h),P=g(h,"P",{class:!0});var ee=b(P);Y=f(ee,"Birth date: "),F=f(ee,V),ee.forEach(c),h.forEach(c),ae.forEach(c),J=G(d),he(D.$$.fragment,d),d.forEach(c),this.h()},h(){p(a,"class","text-3xl"),p(m,"class","text-xl"),p($,"class","text-xl"),p(I,"class","text-lg"),p(P,"class","text-lg"),p(t,"class","p-4 space-y-2"),p(r,"class","card overflow-hidden width svelte-19pcsxx"),p(e,"class","container")},m(l,d){B(l,e,d),s(e,r),s(r,t),v.m(t,null),s(t,o),s(t,a),s(a,S),s(t,y),s(t,m),s(m,A),s(m,H),s(t,W),w.m(t,null),s(t,M),s(t,$),s($,j),s($,q),s(t,C),s(t,I),s(I,K),s(I,z),s(t,N),s(t,P),s(P,Y),s(P,F),s(e,J),me(D,e,null),k=!0},p(l,[d]){O===(O=te(l))&&v?v.p(l,d):(v.d(1),v=O(l),v&&(v.c(),v.m(t,o))),(!k||d&1)&&n!==(n=l[0].name+"")&&E(S,n),(!k||d&1)&&L!==(L=l[0].id+"")&&E(H,L),T===(T=re(l))&&w?w.p(l,d):(w.d(1),w=T(l),w&&(w.c(),w.m(t,M))),(!k||d&1)&&R!==(R=l[0].grade+"")&&E(q,R),(!k||d&1)&&U!==(U=l[0].phone_number+"")&&E(z,U),(!k||d&1)&&V!==(V=l[0].birth_date+"")&&E(F,V)},i(l){k||(_e(D.$$.fragment,l),k=!0)},o(l){ge(D.$$.fragment,l),k=!1},d(l){l&&c(e),v.d(),w.d(),be(D)}}}function De(i,e,r){const t=we();ce(async()=>{Number.parseInt(sessionStorage.getItem("expiry")??"0")<Date.now()&&await oe("/"),r(0,o=await a()),r(1,n=await S())});let o={name:"Load Loaderson",id:"123456",gender:"Load",grade:"12",address:`12345 Loading street Ld
Loadingsburg, LD 54321`,birth_date:"1/23/4567",email:"123456@loading.com",phone_number:"123-456-7890",emergency_contacts:[],physician:{name:"Dr. Loader T Loading",workplace:"Loading Hospital",phone_number:"123-423-2342"},dentist:{name:"Dr. Denty Loader",workplace:"Loader Dentistry",phone_number:"321-654-0987"}};async function a(){const y={headers:{"Accept-Encoding":"br",Authorization:`Bearer ${sessionStorage.getItem("token")}`}},m=await fetch(`${le}/student`,y);if(m.status!=200){let A=await m.text();const L={message:`${A}`,background:"variant-filled-error bg-gradient-to-r from-error-400 to-error-600",timeout:3e3};throw t.trigger(L),await oe("/grades"),new Error(A)}return ke(new Uint8Array(await m.arrayBuffer()))}let n=null;async function S(){const y={headers:{"Accept-Encoding":"br",Authorization:`Bearer ${sessionStorage.getItem("token")}`}},m=await fetch(`${le}/photo`,y);return URL.createObjectURL(await m.blob())}return[o,n]}class He extends pe{constructor(e){super(),ue(this,e,De,Pe,ie,{})}}export{He as component};
