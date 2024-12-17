import{s as Se,e as C,E as y,c as P,a as z,G as A,d as T,b as m,i as S,g as k,n as ae,O as we,h as ie,j as ne,P as Me,Q as oe,J as O,M as Te,C as ye,D as w,F as M,I as ue,H as I,R,S as W,T as Ae,r as fe}from"./scheduler.B1M72nnb.js";import{e as H}from"./each.DGeM46PS.js";import{S as pe,i as Ie}from"./index.B0AvrpxK.js";const Oe='<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>',je='<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>',Ue='<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z"/></svg>',Ve='<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"/></svg>';function re(l,e,t){const a=l.slice();return a[43]=e[t],a}function ce(l,e,t){const a=l.slice();return a[46]=e[t],a}function he(l){let e,t,a,u,f,s,i=H(l[0].amounts),r=[];for(let o=0;o<i.length;o+=1)r[o]=me(ce(l,i,o));return{c(){e=C("label"),t=C("select");for(let o=0;o<r.length;o+=1)r[o].c();this.h()},l(o){e=P(o,"LABEL",{class:!0});var h=z(e);t=P(h,"SELECT",{class:!0,"aria-label":!0});var c=z(t);for(let g=0;g<r.length;g+=1)r[g].l(c);c.forEach(T),h.forEach(T),this.h()},h(){m(t,"class",a="paginator-select "+l[19]),t.disabled=l[1],m(t,"aria-label","Select Amount"),l[0].limit===void 0&&Me(()=>l[32].call(t)),m(e,"class",u="paginator-label "+l[20])},m(o,h){S(o,e,h),k(e,t);for(let c=0;c<r.length;c+=1)r[c]&&r[c].m(t,null);oe(t,l[0].limit,!0),f||(s=[O(t,"change",l[32]),O(t,"change",l[23])],f=!0)},p(o,h){if(h[0]&33){i=H(o[0].amounts);let c;for(c=0;c<i.length;c+=1){const g=ce(o,i,c);r[c]?r[c].p(g,h):(r[c]=me(g),r[c].c(),r[c].m(t,null))}for(;c<r.length;c+=1)r[c].d(1);r.length=i.length}h[0]&524288&&a!==(a="paginator-select "+o[19])&&m(t,"class",a),h[0]&2&&(t.disabled=o[1]),h[0]&1&&oe(t,o[0].limit),h[0]&1048576&&u!==(u="paginator-label "+o[20])&&m(e,"class",u)},d(o){o&&T(e),Te(r,o),f=!1,ye(s)}}}function me(l){let e,t=l[46]+"",a,u,f,s;return{c(){e=C("option"),a=w(t),u=y(),f=w(l[5]),this.h()},l(i){e=P(i,"OPTION",{});var r=z(e);a=M(r,t),u=A(r),f=M(r,l[5]),r.forEach(T),this.h()},h(){e.__value=s=l[46],ue(e,e.__value)},m(i,r){S(i,e,r),k(e,a),k(e,u),k(e,f)},p(i,r){r[0]&1&&t!==(t=i[46]+"")&&I(a,t),r[0]&32&&I(f,i[5]),r[0]&1&&s!==(s=i[46])&&(e.__value=s,ue(e,e.__value))},d(i){i&&T(e)}}}function be(l){let e,t,a,u,f;return{c(){e=C("button"),t=new R(!1),this.h()},l(s){e=P(s,"BUTTON",{type:!0,"aria-label":!0,class:!0});var i=z(e);t=W(i,!1),i.forEach(T),this.h()},h(){t.a=null,m(e,"type","button"),m(e,"aria-label",l[12]),m(e,"class",l[6]),e.disabled=a=l[1]||l[0].page===0},m(s,i){S(s,e,i),t.m(l[9],e),u||(f=O(e,"click",l[33]),u=!0)},p(s,i){i[0]&512&&t.p(s[9]),i[0]&4096&&m(e,"aria-label",s[12]),i[0]&64&&m(e,"class",s[6]),i[0]&3&&a!==(a=s[1]||s[0].page===0)&&(e.disabled=a)},d(s){s&&T(e),u=!1,f()}}}function ge(l){let e,t,a,u,f;return{c(){e=C("button"),t=new R(!1),this.h()},l(s){e=P(s,"BUTTON",{type:!0,"aria-label":!0,class:!0});var i=z(e);t=W(i,!1),i.forEach(T),this.h()},h(){t.a=null,m(e,"type","button"),m(e,"aria-label",l[13]),m(e,"class",l[6]),e.disabled=a=l[1]||l[0].page===0},m(s,i){S(s,e,i),t.m(l[7],e),u||(f=O(e,"click",l[34]),u=!0)},p(s,i){i[0]&128&&t.p(s[7]),i[0]&8192&&m(e,"aria-label",s[13]),i[0]&64&&m(e,"class",s[6]),i[0]&3&&a!==(a=s[1]||s[0].page===0)&&(e.disabled=a)},d(s){s&&T(e),u=!1,f()}}}function De(l){let e,t=H(l[17]),a=[];for(let u=0;u<t.length;u+=1)a[u]=_e(re(l,t,u));return{c(){for(let u=0;u<a.length;u+=1)a[u].c();e=fe()},l(u){for(let f=0;f<a.length;f+=1)a[f].l(u);e=fe()},m(u,f){for(let s=0;s<a.length;s+=1)a[s]&&a[s].m(u,f);S(u,e,f)},p(u,f){if(f[0]&21102658){t=H(u[17]);let s;for(s=0;s<t.length;s+=1){const i=re(u,t,s);a[s]?a[s].p(i,f):(a[s]=_e(i),a[s].c(),a[s].m(e.parentNode,e))}for(;s<a.length;s+=1)a[s].d(1);a.length=t.length}},d(u){u&&T(e),Te(a,u)}}}function He(l){let e,t=l[0].page*l[0].limit+1+"",a,u,f=Math.min(l[0].page*l[0].limit+l[0].limit,l[0].size)+"",s,i,r,o,h,c=l[0].size+"",g,E;return{c(){e=C("button"),a=w(t),u=w("-"),s=w(f),i=w(" "),r=C("span"),o=w(l[11]),h=y(),g=w(c),this.h()},l(_){e=P(_,"BUTTON",{type:!0,class:!0});var d=z(e);a=M(d,t),u=M(d,"-"),s=M(d,f),i=M(d," "),r=P(d,"SPAN",{class:!0});var v=z(r);o=M(v,l[11]),h=A(v),g=M(v,c),v.forEach(T),d.forEach(T),this.h()},h(){m(r,"class","opacity-50"),m(e,"type","button"),m(e,"class",E=l[6]+" pointer-events-none !text-sm")},m(_,d){S(_,e,d),k(e,a),k(e,u),k(e,s),k(e,i),k(e,r),k(r,o),k(r,h),k(r,g)},p(_,d){d[0]&1&&t!==(t=_[0].page*_[0].limit+1+"")&&I(a,t),d[0]&1&&f!==(f=Math.min(_[0].page*_[0].limit+_[0].limit,_[0].size)+"")&&I(s,f),d[0]&2048&&I(o,_[11]),d[0]&1&&c!==(c=_[0].size+"")&&I(g,c),d[0]&64&&E!==(E=_[6]+" pointer-events-none !text-sm")&&m(e,"class",E)},d(_){_&&T(e)}}}function _e(l){let e,t=(l[43]>=0?l[43]+1:"...")+"",a,u,f,s,i;function r(){return l[35](l[43])}return{c(){e=C("button"),a=w(t),u=y(),this.h()},l(o){e=P(o,"BUTTON",{type:!0,class:!0});var h=z(e);a=M(h,t),u=A(h),h.forEach(T),this.h()},h(){m(e,"type","button"),e.disabled=l[1],m(e,"class",f=l[6]+" "+l[22](l[43]))},m(o,h){S(o,e,h),k(e,a),k(e,u),s||(i=O(e,"click",r),s=!0)},p(o,h){l=o,h[0]&131072&&t!==(t=(l[43]>=0?l[43]+1:"...")+"")&&I(a,t),h[0]&2&&(e.disabled=l[1]),h[0]&4325440&&f!==(f=l[6]+" "+l[22](l[43]))&&m(e,"class",f)},d(o){o&&T(e),s=!1,i()}}}function de(l){let e,t,a,u,f;return{c(){e=C("button"),t=new R(!1),this.h()},l(s){e=P(s,"BUTTON",{type:!0,"aria-label":!0,class:!0});var i=z(e);t=W(i,!1),i.forEach(T),this.h()},h(){t.a=null,m(e,"type","button"),m(e,"aria-label",l[14]),m(e,"class",l[6]),e.disabled=a=l[1]||(l[0].page+1)*l[0].limit>=l[0].size},m(s,i){S(s,e,i),t.m(l[8],e),u||(f=O(e,"click",l[36]),u=!0)},p(s,i){i[0]&256&&t.p(s[8]),i[0]&16384&&m(e,"aria-label",s[14]),i[0]&64&&m(e,"class",s[6]),i[0]&3&&a!==(a=s[1]||(s[0].page+1)*s[0].limit>=s[0].size)&&(e.disabled=a)},d(s){s&&T(e),u=!1,f()}}}function ve(l){let e,t,a,u,f;return{c(){e=C("button"),t=new R(!1),this.h()},l(s){e=P(s,"BUTTON",{type:!0,"aria-label":!0,class:!0});var i=z(e);t=W(i,!1),i.forEach(T),this.h()},h(){t.a=null,m(e,"type","button"),m(e,"aria-label",l[15]),m(e,"class",l[6]),e.disabled=a=l[1]||(l[0].page+1)*l[0].limit>=l[0].size},m(s,i){S(s,e,i),t.m(l[10],e),u||(f=O(e,"click",l[37]),u=!0)},p(s,i){i[0]&1024&&t.p(s[10]),i[0]&32768&&m(e,"aria-label",s[15]),i[0]&64&&m(e,"class",s[6]),i[0]&3&&a!==(a=s[1]||(s[0].page+1)*s[0].limit>=s[0].size)&&(e.disabled=a)},d(s){s&&T(e),u=!1,f()}}}function Re(l){let e,t,a,u,f,s,i,r,o,h=l[0].amounts.length&&he(l),c=l[3]&&be(l),g=l[2]&&ge(l);function E(b,L){return b[4]===!1?He:De}let _=E(l),d=_(l),v=l[2]&&de(l),N=l[3]&&ve(l);return{c(){e=C("div"),h&&h.c(),t=y(),a=C("div"),c&&c.c(),u=y(),g&&g.c(),f=y(),d.c(),s=y(),v&&v.c(),i=y(),N&&N.c(),this.h()},l(b){e=P(b,"DIV",{class:!0,"data-testid":!0});var L=z(e);h&&h.l(L),t=A(L),a=P(L,"DIV",{class:!0});var F=z(a);c&&c.l(F),u=A(F),g&&g.l(F),f=A(F),d.l(F),s=A(F),v&&v.l(F),i=A(F),N&&N.l(F),F.forEach(T),L.forEach(T),this.h()},h(){m(a,"class",r="paginator-controls "+l[18]),m(e,"class",o="paginator "+l[21]),m(e,"data-testid","paginator")},m(b,L){S(b,e,L),h&&h.m(e,null),k(e,t),k(e,a),c&&c.m(a,null),k(a,u),g&&g.m(a,null),k(a,f),d.m(a,null),k(a,s),v&&v.m(a,null),k(a,i),N&&N.m(a,null)},p(b,L){b[0].amounts.length?h?h.p(b,L):(h=he(b),h.c(),h.m(e,t)):h&&(h.d(1),h=null),b[3]?c?c.p(b,L):(c=be(b),c.c(),c.m(a,u)):c&&(c.d(1),c=null),b[2]?g?g.p(b,L):(g=ge(b),g.c(),g.m(a,f)):g&&(g.d(1),g=null),_===(_=E(b))&&d?d.p(b,L):(d.d(1),d=_(b),d&&(d.c(),d.m(a,s))),b[2]?v?v.p(b,L):(v=de(b),v.c(),v.m(a,i)):v&&(v.d(1),v=null),b[3]?N?N.p(b,L):(N=ve(b),N.c(),N.m(a,null)):N&&(N.d(1),N=null),L[0]&262144&&r!==(r="paginator-controls "+b[18])&&m(a,"class",r),L[0]&2097152&&o!==(o="paginator "+b[21])&&m(e,"class",o)},i:ae,o:ae,d(b){b&&T(e),h&&h.d(),c&&c.d(),g&&g.d(),d.d(),v&&v.d(),N&&N.d()}}}const We="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4",qe="w-full md:w-auto";function Ge(l,e,t){let a,u,f,s,i;const r=we();let{settings:o={page:0,limit:5,size:0,amounts:[1,2,5,10]}}=e,{disabled:h=!1}=e,{showPreviousNextButtons:c=!0}=e,{showFirstLastButtons:g=!1}=e,{showNumerals:E=!1}=e,{maxNumerals:_=1}=e,{justify:d="justify-between"}=e,{select:v="select min-w-[150px]"}=e,{amountText:N="Items"}=e,{regionControl:b="btn-group"}=e,{controlVariant:L="variant-filled"}=e,{controlSeparator:F=""}=e,{active:q="variant-filled-primary"}=e,{buttonClasses:Q="!px-3 !py-1.5 fill-current"}=e,{buttonTextPrevious:K=Oe}=e,{buttonTextNext:X=je}=e,{buttonTextFirst:Y=Ue}=e,{buttonTextLast:Z=Ve}=e,{separatorText:x="of"}=e,{labelFirst:$="First page"}=e,{labelPrevious:ee="Previous page"}=e,{labelNext:te="Next page"}=e,{labelLast:le="Last page"}=e,B=Math.max(0,Math.ceil(o.size/o.limit-1)),V=D();function se(){r("amount",o.limit),t(16,B=Math.max(0,Math.ceil(o.size/o.limit-1))),o.page>B&&t(0,o.page=B,o),t(17,V=D())}function j(n){n<0||(t(0,o.page=n,o),r("page",o.page),t(17,V=D()))}function Le(){const n=[];for(let p=0;p<=B;p++)n.push(p);return n}function D(){const n=[],p=o.page<_+2,G=o.page>B-(_+2);if(B<=_*2+1)return Le();if(n.push(0),p||n.push(-1),p||G){const U=p?1:B-(_+2),Ee=G?B-1:_+2;for(let J=U;J<=Ee;J++)n.push(J)}else for(let U=o.page-_;U<=o.page+_;U++)n.push(U);return G||n.push(-1),n.push(B),n}function ke(n){t(16,B=Math.max(0,Math.ceil(n/o.limit-1))),t(17,V=D())}function Ne(){o.limit=Ae(this),t(0,o)}const Fe=()=>{j(0)},Be=()=>{j(o.page-1)},Ce=n=>j(n),Pe=()=>{j(o.page+1)},ze=()=>{j(B)};return l.$$set=n=>{t(42,e=ie(ie({},e),ne(n))),"settings"in n&&t(0,o=n.settings),"disabled"in n&&t(1,h=n.disabled),"showPreviousNextButtons"in n&&t(2,c=n.showPreviousNextButtons),"showFirstLastButtons"in n&&t(3,g=n.showFirstLastButtons),"showNumerals"in n&&t(4,E=n.showNumerals),"maxNumerals"in n&&t(25,_=n.maxNumerals),"justify"in n&&t(26,d=n.justify),"select"in n&&t(27,v=n.select),"amountText"in n&&t(5,N=n.amountText),"regionControl"in n&&t(28,b=n.regionControl),"controlVariant"in n&&t(29,L=n.controlVariant),"controlSeparator"in n&&t(30,F=n.controlSeparator),"active"in n&&t(31,q=n.active),"buttonClasses"in n&&t(6,Q=n.buttonClasses),"buttonTextPrevious"in n&&t(7,K=n.buttonTextPrevious),"buttonTextNext"in n&&t(8,X=n.buttonTextNext),"buttonTextFirst"in n&&t(9,Y=n.buttonTextFirst),"buttonTextLast"in n&&t(10,Z=n.buttonTextLast),"separatorText"in n&&t(11,x=n.separatorText),"labelFirst"in n&&t(12,$=n.labelFirst),"labelPrevious"in n&&t(13,ee=n.labelPrevious),"labelNext"in n&&t(14,te=n.labelNext),"labelLast"in n&&t(15,le=n.labelLast)},l.$$.update=()=>{l.$$.dirty[0]&1|l.$$.dirty[1]&1&&t(22,a=n=>n===o.page?`${q} pointer-events-none`:""),l.$$.dirty[0]&33554432&&se(),l.$$.dirty[0]&1&&ke(o.size),t(21,u=`${We} ${d} ${e.class??""}`),l.$$.dirty[0]&134217728&&t(19,s=`${v}`),l.$$.dirty[0]&1879048192&&t(18,i=`${b} ${L} ${F}`)},t(20,f=`${qe}`),e=ne(e),[o,h,c,g,E,N,Q,K,X,Y,Z,x,$,ee,te,le,B,V,i,s,f,u,a,se,j,_,d,v,b,L,F,q,Ne,Fe,Be,Ce,Pe,ze]}class Xe extends pe{constructor(e){super(),Ie(this,e,Ge,Re,Se,{settings:0,disabled:1,showPreviousNextButtons:2,showFirstLastButtons:3,showNumerals:4,maxNumerals:25,justify:26,select:27,amountText:5,regionControl:28,controlVariant:29,controlSeparator:30,active:31,buttonClasses:6,buttonTextPrevious:7,buttonTextNext:8,buttonTextFirst:9,buttonTextLast:10,separatorText:11,labelFirst:12,labelPrevious:13,labelNext:14,labelLast:15},null,[-1,-1])}}export{Xe as P};
