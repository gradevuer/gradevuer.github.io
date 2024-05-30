import{s as ie,e as m,E as G,D as u,c as _,a as b,G as S,F as f,d as c,b as p,i as A,g as n,H as E,o as ce,n as de,U as ne}from"../chunks/scheduler.HaoJMjUf.js";import{S as pe,i as ue,b as fe,d as he,m as me,a as _e,t as ge,e as be}from"../chunks/index.G81k-Xhd.js";import{g as oe}from"../chunks/entry.bxCKXrBO.js";import{P as ve}from"../chunks/pageSelector.DErIiFTE.js";import{W as le}from"../chunks/main.DlQOQXQP.js";import{g as ke}from"../chunks/stores.6eYr0iPl.js";import"../chunks/ProgressBar.svelte_svelte_type_style_lang.F8mDr4Rg.js";function we(i){let e;return{c(){e=m("div"),this.h()},l(r){e=_(r,"DIV",{class:!0}),b(e).forEach(c),this.h()},h(){p(e,"class","float-right w-32 h-40 pl-2 placeholder animate-pulse")},m(r,t){A(r,e,t)},p:de,d(r){r&&c(e)}}}function Ee(i){let e,r;return{c(){e=m("img"),this.h()},l(t){e=_(t,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){ne(e.src,r=i[1])||p(e,"src",r),p(e,"alt","You"),p(e,"class","float-right")},m(t,o){A(t,e,o)},p(t,o){o&2&&!ne(e.src,r=t[1])&&p(e,"src",r)},d(t){t&&c(e)}}}function Le(i){let e,r,t=i[0].gender+"",o;return{c(){e=m("p"),r=u("Gender: "),o=u(t),this.h()},l(a){e=_(a,"P",{class:!0});var s=b(e);r=f(s,"Gender: "),o=f(s,t),s.forEach(c),this.h()},h(){p(e,"class","text-xl")},m(a,s){A(a,e,s),n(e,r),n(e,o)},p(a,s){s&1&&t!==(t=a[0].gender+"")&&E(o,t)},d(a){a&&c(e)}}}function $e(i){let e,r,t=i[0].gender+"",o;return{c(){e=m("p"),r=u("Gender: "),o=u(t),this.h()},l(a){e=_(a,"P",{class:!0});var s=b(e);r=f(s,"Gender: "),o=f(s,t),s.forEach(c),this.h()},h(){p(e,"class","text-xl bg-gradient-to-br from-pink-500 to-violet-500 bg-clip-text text-transparent box-decoration-clone")},m(a,s){A(a,e,s),n(e,r),n(e,o)},p(a,s){s&1&&t!==(t=a[0].gender+"")&&E(o,t)},d(a){a&&c(e)}}}function ye(i){let e,r,t=i[0].gender+"",o;return{c(){e=m("p"),r=u("Gender: "),o=u(t),this.h()},l(a){e=_(a,"P",{class:!0});var s=b(e);r=f(s,"Gender: "),o=f(s,t),s.forEach(c),this.h()},h(){p(e,"class","text-xl bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone")},m(a,s){A(a,e,s),n(e,r),n(e,o)},p(a,s){s&1&&t!==(t=a[0].gender+"")&&E(o,t)},d(a){a&&c(e)}}}function Ie(i){let e,r,t,o,a,s=i[0].name+"",R,L,g,$,y=i[0].id+"",H,T,M,I,W,B=i[0].grade+"",O,j,P,C,U=i[0].phone_number+"",q,J,D,K,V=i[0].birth_date+"",z,Y,x,w;function te(l,d){return l[1]?Ee:we}let F=te(i),v=F(i);function re(l,d){return l[0].gender=="Male"?ye:l[0].gender=="Female"?$e:Le}let N=re(i),k=N(i);return x=new ve({props:{classes:"select variant-ghost-primary",selected:"student info"}}),{c(){e=m("div"),r=m("div"),t=m("div"),v.c(),o=G(),a=m("h6"),R=u(s),L=G(),g=m("p"),$=u("Id: "),H=u(y),T=G(),k.c(),M=G(),I=m("p"),W=u("Grade: "),O=u(B),j=G(),P=m("p"),C=u("Phone number: "),q=u(U),J=G(),D=m("p"),K=u("Birth date: "),z=u(V),Y=G(),fe(x.$$.fragment),this.h()},l(l){e=_(l,"DIV",{class:!0});var d=b(e);r=_(d,"DIV",{class:!0});var ae=b(r);t=_(ae,"DIV",{class:!0});var h=b(t);v.l(h),o=S(h),a=_(h,"H6",{class:!0});var se=b(a);R=f(se,s),se.forEach(c),L=S(h),g=_(h,"P",{class:!0});var Q=b(g);$=f(Q,"Id: "),H=f(Q,y),Q.forEach(c),T=S(h),k.l(h),M=S(h),I=_(h,"P",{class:!0});var X=b(I);W=f(X,"Grade: "),O=f(X,B),X.forEach(c),j=S(h),P=_(h,"P",{class:!0});var Z=b(P);C=f(Z,"Phone number: "),q=f(Z,U),Z.forEach(c),J=S(h),D=_(h,"P",{class:!0});var ee=b(D);K=f(ee,"Birth date: "),z=f(ee,V),ee.forEach(c),h.forEach(c),ae.forEach(c),Y=S(d),he(x.$$.fragment,d),d.forEach(c),this.h()},h(){p(a,"class","text-3xl"),p(g,"class","text-xl"),p(I,"class","text-xl"),p(P,"class","text-lg"),p(D,"class","text-lg"),p(t,"class","p-4 space-y-2"),p(r,"class","card overflow-hidden width svelte-19pcsxx"),p(e,"class","container")},m(l,d){A(l,e,d),n(e,r),n(r,t),v.m(t,null),n(t,o),n(t,a),n(a,R),n(t,L),n(t,g),n(g,$),n(g,H),n(t,T),k.m(t,null),n(t,M),n(t,I),n(I,W),n(I,O),n(t,j),n(t,P),n(P,C),n(P,q),n(t,J),n(t,D),n(D,K),n(D,z),n(e,Y),me(x,e,null),w=!0},p(l,[d]){F===(F=te(l))&&v?v.p(l,d):(v.d(1),v=F(l),v&&(v.c(),v.m(t,o))),(!w||d&1)&&s!==(s=l[0].name+"")&&E(R,s),(!w||d&1)&&y!==(y=l[0].id+"")&&E(H,y),N===(N=re(l))&&k?k.p(l,d):(k.d(1),k=N(l),k&&(k.c(),k.m(t,M))),(!w||d&1)&&B!==(B=l[0].grade+"")&&E(O,B),(!w||d&1)&&U!==(U=l[0].phone_number+"")&&E(q,U),(!w||d&1)&&V!==(V=l[0].birth_date+"")&&E(z,V)},i(l){w||(_e(x.$$.fragment,l),w=!0)},o(l){ge(x.$$.fragment,l),w=!1},d(l){l&&c(e),v.d(),k.d(),be(x)}}}function Pe(i,e,r){const t=ke();ce(async()=>{Number.parseInt(sessionStorage.getItem("expiry")??"0")<Date.now()&&await oe("/"),r(0,o=await a()),r(1,s=await R())});let o={name:"Load Loaderson",id:"123456",gender:"Load",grade:"12",address:`12345 Loading street Ld
Loadingsburg, LD 54321`,birth_date:"1/23/4567",email:"123456@loading.com",phone_number:"123-456-7890",emergency_contacts:[],physician:{name:"Dr. Loader T Loading",workplace:"Loading Hospital",phone_number:"123-423-2342"},dentist:{name:"Dr. Denty Loader",workplace:"Loader Dentistry",phone_number:"321-654-0987"}};async function a(){const L={headers:{"Accept-Encoding":"br",Authorization:`Bearer ${sessionStorage.getItem("token")}`}},g=await fetch(`${le}/student`,L);let $=await g.text();if(g.status!=200){const y={message:`${$}`,background:"variant-filled-error bg-gradient-to-r from-error-400 to-error-600",timeout:3e3};throw t.trigger(y),await oe("/grades"),new Error($)}return JSON.parse($)}let s=null;async function R(){const L={headers:{"Accept-Encoding":"br",Authorization:`Bearer ${sessionStorage.getItem("token")}`}},g=await fetch(`${le}/photo`,L);return URL.createObjectURL(await g.blob())}return[o,s]}class Ue extends pe{constructor(e){super(),ue(this,e,Pe,Ie,ie,{})}}export{Ue as component};
