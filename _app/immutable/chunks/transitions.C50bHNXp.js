import{$ as b,a0 as g}from"./scheduler.HaoJMjUf.js";function h(n){const a=n-1;return a*a*a+1}function v(n,{delay:a=0,duration:e=400,easing:s=b}={}){const i=+getComputedStyle(n).opacity;return{delay:a,duration:e,easing:s,css:t=>`opacity: ${t*i}`}}function F(n,{delay:a=0,duration:e=400,easing:s=h,x:i=0,y:t=0,opacity:l=0}={}){const c=getComputedStyle(n),d=+c.opacity,o=c.transform==="none"?"":c.transform,p=d*(1-l),[u,y]=g(i),[_,m]=g(t);return{delay:a,duration:e,easing:s,css:($,f)=>`
			transform: ${o} translate(${(1-$)*u}${y}, ${(1-$)*_}${m});
			opacity: ${d-p*f}`}}function w(n,{delay:a=0,duration:e=400,easing:s=h,axis:i="y"}={}){const t=getComputedStyle(n),l=+t.opacity,c=i==="y"?"height":"width",d=parseFloat(t[c]),o=i==="y"?["top","bottom"]:["left","right"],p=o.map(r=>`${r[0].toUpperCase()}${r.slice(1)}`),u=parseFloat(t[`padding${p[0]}`]),y=parseFloat(t[`padding${p[1]}`]),_=parseFloat(t[`margin${p[0]}`]),m=parseFloat(t[`margin${p[1]}`]),$=parseFloat(t[`border${p[0]}Width`]),f=parseFloat(t[`border${p[1]}Width`]);return{delay:a,duration:e,easing:s,css:r=>`overflow: hidden;opacity: ${Math.min(r*20,1)*l};${c}: ${r*d}px;padding-${o[0]}: ${r*u}px;padding-${o[1]}: ${r*y}px;margin-${o[0]}: ${r*_}px;margin-${o[1]}: ${r*m}px;border-${o[0]}-width: ${r*$}px;border-${o[1]}-width: ${r*f}px;`}}function C(n,a){const{transition:e,params:s,enabled:i}=a;return i?e(n,s):"duration"in s?e(n,{duration:0}):{duration:0}}export{F as a,h as c,C as d,v as f,w as s};
