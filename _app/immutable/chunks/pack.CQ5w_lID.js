var he;try{he=new TextDecoder}catch{}var x,z,n=0,E={},b,X,V=0,$=0,P,q,L=[],p,Ee={useRecords:!1,mapsAsObjects:!0};class Ce{}const Ve=new Ce;Ve.name="MessagePack 0xC1";var Y=!1,ze=2,Oe;try{new Function("")}catch{ze=1/0}class ee{constructor(e){e&&(e.useRecords===!1&&e.mapsAsObjects===void 0&&(e.mapsAsObjects=!0),e.sequential&&e.trusted!==!1&&(e.trusted=!0,!e.structures&&e.useRecords!=!1&&(e.structures=[],e.maxSharedStructures||(e.maxSharedStructures=0))),e.structures?e.structures.sharedLength=e.structures.length:e.getStructures&&((e.structures=[]).uninitialized=!0,e.structures.sharedLength=0),e.int64AsNumber&&(e.int64AsType="number")),Object.assign(this,e)}unpack(e,r){if(x)return Ze(()=>(ge(),this?this.unpack(e,r):ee.prototype.unpack.call(Ee,e,r)));!e.buffer&&e.constructor===ArrayBuffer&&(e=typeof Buffer<"u"?Buffer.from(e):new Uint8Array(e)),typeof r=="object"?(z=r.end||e.length,n=r.start||0):(n=0,z=r>-1?r:e.length),$=0,X=null,P=null,x=e;try{p=e.dataView||(e.dataView=new DataView(e.buffer,e.byteOffset,e.byteLength))}catch(f){throw x=null,e instanceof Uint8Array?f:new Error("Source must be a Uint8Array or Buffer but was a "+(e&&typeof e=="object"?e.constructor.name:typeof e))}if(this instanceof ee){if(E=this,this.structures)return b=this.structures,ie(r);(!b||b.length>0)&&(b=[])}else E=Ee,(!b||b.length>0)&&(b=[]);return ie(r)}unpackMultiple(e,r){let f,s=0;try{Y=!0;let c=e.length,h=this?this.unpack(e,c):le.unpack(e,c);if(r){if(r(h,s,n)===!1)return;for(;n<c;)if(s=n,r(ie(),s,n)===!1)return}else{for(f=[h];n<c;)s=n,f.push(ie());return f}}catch(c){throw c.lastPosition=s,c.values=f,c}finally{Y=!1,ge()}}_mergeStructures(e,r){e=e||[],Object.isFrozen(e)&&(e=e.map(f=>f.slice(0)));for(let f=0,s=e.length;f<s;f++){let c=e[f];c&&(c.isShared=!0,f>=32&&(c.highByte=f-32>>5))}e.sharedLength=e.length;for(let f in r||[])if(f>=0){let s=e[f],c=r[f];c&&(s&&((e.restoreStructures||(e.restoreStructures=[]))[f]=s),e[f]=c)}return this.structures=e}decode(e,r){return this.unpack(e,r)}}function ie(t){try{if(!E.trusted&&!Y){let r=b.sharedLength||0;r<b.length&&(b.length=r)}let e;if(E.randomAccessStructure&&x[n]<64&&x[n]>=32&&Oe?(e=Oe(x,n,z,E),x=null,!(t&&t.lazy)&&e&&(e=e.toJSON()),n=z):e=_(),P&&(n=P.postBundlePosition,P=null),Y&&(b.restoreStructures=null),n==z)b&&b.restoreStructures&&Ae(),b=null,x=null,q&&(q=null);else{if(n>z)throw new Error("Unexpected end of MessagePack data");if(!Y){let r;try{r=JSON.stringify(e,(f,s)=>typeof s=="bigint"?`${s}n`:s).slice(0,100)}catch(f){r="(JSON view not available "+f+")"}throw new Error("Data read, but end of buffer not reached "+r)}}return e}catch(e){throw b&&b.restoreStructures&&Ae(),ge(),(e instanceof RangeError||e.message.startsWith("Unexpected end of buffer")||n>z)&&(e.incomplete=!0),e}}function Ae(){for(let t in b.restoreStructures)b[t]=b.restoreStructures[t];b.restoreStructures=null}function _(){let t=x[n++];if(t<160)if(t<128){if(t<64)return t;{let e=b[t&63]||E.getStructures&&Fe()[t&63];return e?(e.read||(e.read=we(e,t&63)),e.read()):t}}else if(t<144)if(t-=128,E.mapsAsObjects){let e={};for(let r=0;r<t;r++){let f=$e();f==="__proto__"&&(f="__proto_"),e[f]=_()}return e}else{let e=new Map;for(let r=0;r<t;r++)e.set(_(),_());return e}else{t-=144;let e=new Array(t);for(let r=0;r<t;r++)e[r]=_();return E.freezeData?Object.freeze(e):e}else if(t<192){let e=t-160;if($>=n)return X.slice(n-V,(n+=e)-V);if($==0&&z<140){let r=e<16?Se(e):Je(e);if(r!=null)return r}return de(e)}else{let e;switch(t){case 192:return null;case 193:return P?(e=_(),e>0?P[1].slice(P.position1,P.position1+=e):P[0].slice(P.position0,P.position0-=e)):Ve;case 194:return!1;case 195:return!0;case 196:if(e=x[n++],e===void 0)throw new Error("Unexpected end of buffer");return xe(e);case 197:return e=p.getUint16(n),n+=2,xe(e);case 198:return e=p.getUint32(n),n+=4,xe(e);case 199:return H(x[n++]);case 200:return e=p.getUint16(n),n+=2,H(e);case 201:return e=p.getUint32(n),n+=4,H(e);case 202:if(e=p.getFloat32(n),E.useFloat32>2){let r=pe[(x[n]&127)<<1|x[n+1]>>7];return n+=4,(r*e+(e>0?.5:-.5)>>0)/r}return n+=4,e;case 203:return e=p.getFloat64(n),n+=8,e;case 204:return x[n++];case 205:return e=p.getUint16(n),n+=2,e;case 206:return e=p.getUint32(n),n+=4,e;case 207:return E.int64AsType==="number"?(e=p.getUint32(n)*4294967296,e+=p.getUint32(n+4)):E.int64AsType==="string"?e=p.getBigUint64(n).toString():E.int64AsType==="auto"?(e=p.getBigUint64(n),e<=BigInt(2)<<BigInt(52)&&(e=Number(e))):e=p.getBigUint64(n),n+=8,e;case 208:return p.getInt8(n++);case 209:return e=p.getInt16(n),n+=2,e;case 210:return e=p.getInt32(n),n+=4,e;case 211:return E.int64AsType==="number"?(e=p.getInt32(n)*4294967296,e+=p.getUint32(n+4)):E.int64AsType==="string"?e=p.getBigInt64(n).toString():E.int64AsType==="auto"?(e=p.getBigInt64(n),e>=BigInt(-2)<<BigInt(52)&&e<=BigInt(2)<<BigInt(52)&&(e=Number(e))):e=p.getBigInt64(n),n+=8,e;case 212:if(e=x[n++],e==114)return Me(x[n++]&63);{let r=L[e];if(r)return r.read?(n++,r.read(_())):r.noBuffer?(n++,r()):r(x.subarray(n,++n));throw new Error("Unknown extension "+e)}case 213:return e=x[n],e==114?(n++,Me(x[n++]&63,x[n++])):H(2);case 214:return H(4);case 215:return H(8);case 216:return H(16);case 217:return e=x[n++],$>=n?X.slice(n-V,(n+=e)-V):We(e);case 218:return e=p.getUint16(n),n+=2,$>=n?X.slice(n-V,(n+=e)-V):ve(e);case 219:return e=p.getUint32(n),n+=4,$>=n?X.slice(n-V,(n+=e)-V):et(e);case 220:return e=p.getUint16(n),n+=2,_e(e);case 221:return e=p.getUint32(n),n+=4,_e(e);case 222:return e=p.getUint16(n),n+=2,Te(e);case 223:return e=p.getUint32(n),n+=4,Te(e);default:if(t>=224)return t-256;if(t===void 0){let r=new Error("Unexpected end of MessagePack data");throw r.incomplete=!0,r}throw new Error("Unknown MessagePack token "+t)}}}const Qe=/^[a-zA-Z_$][a-zA-Z\d_$]*$/;function we(t,e){function r(){if(r.count++>ze){let s=t.read=new Function("r","return function(){return "+(E.freezeData?"Object.freeze":"")+"({"+t.map(c=>c==="__proto__"?"__proto_:r()":Qe.test(c)?c+":r()":"["+JSON.stringify(c)+"]:r()").join(",")+"})}")(_);return t.highByte===0&&(t.read=Ie(e,t.read)),s()}let f={};for(let s=0,c=t.length;s<c;s++){let h=t[s];h==="__proto__"&&(h="__proto_"),f[h]=_()}return E.freezeData?Object.freeze(f):f}return r.count=0,t.highByte===0?Ie(e,r):r}const Ie=(t,e)=>function(){let r=x[n++];if(r===0)return e();let f=t<32?-(t+(r<<5)):t+(r<<5),s=b[f]||Fe()[f];if(!s)throw new Error("Record id is not defined for "+f);return s.read||(s.read=we(s,t)),s.read()};function Fe(){let t=Ze(()=>(x=null,E.getStructures()));return b=E._mergeStructures(t,b)}var de=te,We=te,ve=te,et=te;function te(t){let e;if(t<16&&(e=Se(t)))return e;if(t>64&&he)return he.decode(x.subarray(n,n+=t));const r=n+t,f=[];for(e="";n<r;){const s=x[n++];if(!(s&128))f.push(s);else if((s&224)===192){const c=x[n++]&63;f.push((s&31)<<6|c)}else if((s&240)===224){const c=x[n++]&63,h=x[n++]&63;f.push((s&31)<<12|c<<6|h)}else if((s&248)===240){const c=x[n++]&63,h=x[n++]&63,w=x[n++]&63;let A=(s&7)<<18|c<<12|h<<6|w;A>65535&&(A-=65536,f.push(A>>>10&1023|55296),A=56320|A&1023),f.push(A)}else f.push(s);f.length>=4096&&(e+=R.apply(String,f),f.length=0)}return f.length>0&&(e+=R.apply(String,f)),e}function _e(t){let e=new Array(t);for(let r=0;r<t;r++)e[r]=_();return E.freezeData?Object.freeze(e):e}function Te(t){if(E.mapsAsObjects){let e={};for(let r=0;r<t;r++){let f=$e();f==="__proto__"&&(f="__proto_"),e[f]=_()}return e}else{let e=new Map;for(let r=0;r<t;r++)e.set(_(),_());return e}}var R=String.fromCharCode;function Je(t){let e=n,r=new Array(t);for(let f=0;f<t;f++){const s=x[n++];if((s&128)>0){n=e;return}r[f]=s}return R.apply(String,r)}function Se(t){if(t<4)if(t<2){if(t===0)return"";{let e=x[n++];if((e&128)>1){n-=1;return}return R(e)}}else{let e=x[n++],r=x[n++];if((e&128)>0||(r&128)>0){n-=2;return}if(t<3)return R(e,r);let f=x[n++];if((f&128)>0){n-=3;return}return R(e,r,f)}else{let e=x[n++],r=x[n++],f=x[n++],s=x[n++];if((e&128)>0||(r&128)>0||(f&128)>0||(s&128)>0){n-=4;return}if(t<6){if(t===4)return R(e,r,f,s);{let c=x[n++];if((c&128)>0){n-=5;return}return R(e,r,f,s,c)}}else if(t<8){let c=x[n++],h=x[n++];if((c&128)>0||(h&128)>0){n-=6;return}if(t<7)return R(e,r,f,s,c,h);let w=x[n++];if((w&128)>0){n-=7;return}return R(e,r,f,s,c,h,w)}else{let c=x[n++],h=x[n++],w=x[n++],A=x[n++];if((c&128)>0||(h&128)>0||(w&128)>0||(A&128)>0){n-=8;return}if(t<10){if(t===8)return R(e,r,f,s,c,h,w,A);{let M=x[n++];if((M&128)>0){n-=9;return}return R(e,r,f,s,c,h,w,A,M)}}else if(t<12){let M=x[n++],T=x[n++];if((M&128)>0||(T&128)>0){n-=10;return}if(t<11)return R(e,r,f,s,c,h,w,A,M,T);let N=x[n++];if((N&128)>0){n-=11;return}return R(e,r,f,s,c,h,w,A,M,T,N)}else{let M=x[n++],T=x[n++],N=x[n++],F=x[n++];if((M&128)>0||(T&128)>0||(N&128)>0||(F&128)>0){n-=12;return}if(t<14){if(t===12)return R(e,r,f,s,c,h,w,A,M,T,N,F);{let j=x[n++];if((j&128)>0){n-=13;return}return R(e,r,f,s,c,h,w,A,M,T,N,F,j)}}else{let j=x[n++],G=x[n++];if((j&128)>0||(G&128)>0){n-=14;return}if(t<15)return R(e,r,f,s,c,h,w,A,M,T,N,F,j,G);let C=x[n++];if((C&128)>0){n-=15;return}return R(e,r,f,s,c,h,w,A,M,T,N,F,j,G,C)}}}}}function Re(){let t=x[n++],e;if(t<192)e=t-160;else switch(t){case 217:e=x[n++];break;case 218:e=p.getUint16(n),n+=2;break;case 219:e=p.getUint32(n),n+=4;break;default:throw new Error("Expected string")}return te(e)}function xe(t){return E.copyBuffers?Uint8Array.prototype.slice.call(x,n,n+=t):x.subarray(n,n+=t)}function H(t){let e=x[n++];if(L[e]){let r;return L[e](x.subarray(n,r=n+=t),f=>{n=f;try{return _()}finally{n=r}})}else throw new Error("Unknown extension type "+e)}var Pe=new Array(4096);function $e(){let t=x[n++];if(t>=160&&t<192){if(t=t-160,$>=n)return X.slice(n-V,(n+=t)-V);if(!($==0&&z<180))return de(t)}else return n--,qe(_());let e=(t<<5^(t>1?p.getUint16(n):t>0?x[n]:0))&4095,r=Pe[e],f=n,s=n+t-3,c,h=0;if(r&&r.bytes==t){for(;f<s;){if(c=p.getUint32(f),c!=r[h++]){f=1879048192;break}f+=4}for(s+=3;f<s;)if(c=x[f++],c!=r[h++]){f=1879048192;break}if(f===s)return n=f,r.string;s-=3,f=n}for(r=[],Pe[e]=r,r.bytes=t;f<s;)c=p.getUint32(f),r.push(c),f+=4;for(s+=3;f<s;)c=x[f++],r.push(c);let w=t<16?Se(t):Je(t);return w!=null?r.string=w:r.string=de(t)}function qe(t){if(typeof t=="string")return t;if(typeof t=="number"||typeof t=="boolean"||typeof t=="bigint")return t.toString();if(t==null)return t+"";throw new Error("Invalid property type for record",typeof t)}const Me=(t,e)=>{let r=_().map(qe),f=t;e!==void 0&&(t=t<32?-((e<<5)+t):(e<<5)+t,r.highByte=e);let s=b[t];return s&&(s.isShared||Y)&&((b.restoreStructures||(b.restoreStructures=[]))[t]=s),b[t]=r,r.read=we(r,f),r.read()};L[0]=()=>{};L[0].noBuffer=!0;L[66]=t=>{let e=t.length,r=BigInt(t[0]&128?t[0]-256:t[0]);for(let f=1;f<e;f++)r<<=8n,r+=BigInt(t[f]);return r};let tt={Error,TypeError,ReferenceError};L[101]=()=>{let t=_();return(tt[t[0]]||Error)(t[1],{cause:t[2]})};L[105]=t=>{if(E.structuredClone===!1)throw new Error("Structured clone extension is disabled");let e=p.getUint32(n-4);q||(q=new Map);let r=x[n],f;r>=144&&r<160||r==220||r==221?f=[]:f={};let s={target:f};q.set(e,s);let c=_();return s.used?Object.assign(f,c):(s.target=c,c)};L[112]=t=>{if(E.structuredClone===!1)throw new Error("Structured clone extension is disabled");let e=p.getUint32(n-4),r=q.get(e);return r.used=!0,r.target};L[115]=()=>new Set(_());const Ke=["Int8","Uint8","Uint8Clamped","Int16","Uint16","Int32","Uint32","Float32","Float64","BigInt64","BigUint64"].map(t=>t+"Array");let rt=typeof globalThis=="object"?globalThis:window;L[116]=t=>{let e=t[0],r=Ke[e];if(!r){if(e===16){let f=new ArrayBuffer(t.length-1);return new Uint8Array(f).set(t.subarray(1)),f}throw new Error("Could not find typed array for code "+e)}return new rt[r](Uint8Array.prototype.slice.call(t,1).buffer)};L[120]=()=>{let t=_();return new RegExp(t[0],t[1])};const nt=[];L[98]=t=>{let e=(t[0]<<24)+(t[1]<<16)+(t[2]<<8)+t[3],r=n;return n+=e-t.length,P=nt,P=[Re(),Re()],P.position0=0,P.position1=0,P.postBundlePosition=n,n=r,_()};L[255]=t=>t.length==4?new Date((t[0]*16777216+(t[1]<<16)+(t[2]<<8)+t[3])*1e3):t.length==8?new Date(((t[0]<<22)+(t[1]<<14)+(t[2]<<6)+(t[3]>>2))/1e6+((t[3]&3)*4294967296+t[4]*16777216+(t[5]<<16)+(t[6]<<8)+t[7])*1e3):t.length==12?new Date(((t[0]<<24)+(t[1]<<16)+(t[2]<<8)+t[3])/1e6+((t[4]&128?-281474976710656:0)+t[6]*1099511627776+t[7]*4294967296+t[8]*16777216+(t[9]<<16)+(t[10]<<8)+t[11])*1e3):new Date("invalid");function Ze(t){let e=z,r=n,f=V,s=$,c=X,h=q,w=P,A=new Uint8Array(x.slice(0,z)),M=b,T=b.slice(0,b.length),N=E,F=Y,j=t();return z=e,n=r,V=f,$=s,X=c,q=h,P=w,x=A,Y=F,b=M,b.splice(0,b.length,...T),E=N,p=new DataView(x.buffer,x.byteOffset,x.byteLength),j}function ge(){x=null,q=null,b=null}const pe=new Array(147);for(let t=0;t<256;t++)pe[t]=+("1e"+Math.floor(45.15-t*.30103));var le=new ee({useRecords:!1});const gt=le.unpack;le.unpackMultiple;le.unpack;let it=new Float32Array(1);new Uint8Array(it.buffer,0,4);let fe;try{fe=new TextEncoder}catch{}let ye,Xe;const ue=typeof Buffer<"u",se=ue?function(t){return Buffer.allocUnsafeSlow(t)}:Uint8Array,Ye=ue?Buffer:Uint8Array,Ne=ue?4294967296:2144337920;let l,v,B,i=0,D,O=null,st;const ft=21760,lt=/[\u0080-\uFFFF]/,Q=Symbol("record-id");class ut extends ee{constructor(e){super(e),this.offset=0;let r,f,s,c,h=Ye.prototype.utf8Write?function(u,g){return l.utf8Write(u,g,4294967295)}:fe&&fe.encodeInto?function(u,g){return fe.encodeInto(u,l.subarray(g)).written}:!1,w=this;e||(e={});let A=e&&e.sequential,M=e.structures||e.saveStructures,T=e.maxSharedStructures;if(T==null&&(T=M?32:0),T>8160)throw new Error("Maximum maxSharedStructure is 8160");e.structuredClone&&e.moreTypes==null&&(this.moreTypes=!0);let N=e.maxOwnStructures;N==null&&(N=M?32:64),!this.structures&&e.useRecords!=!1&&(this.structures=[]);let F=T>32||N+T>64,j=T+64,G=T+N+64;if(G>8256)throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");let C=[],ce=0,re=0;this.pack=this.encode=function(u,g){if(l||(l=new se(8192),B=l.dataView||(l.dataView=new DataView(l.buffer,0,8192)),i=0),D=l.length-10,D-i<2048?(l=new se(l.length),B=l.dataView||(l.dataView=new DataView(l.buffer,0,l.length)),D=l.length-10,i=0):i=i+7&2147483640,r=i,g&dt&&(i+=g&255),c=w.structuredClone?new Map:null,w.bundleStrings&&typeof u!="string"?(O=[],O.size=1/0):O=null,s=w.structures,s){s.uninitialized&&(s=w._mergeStructures(w.getStructures()));let a=s.sharedLength||0;if(a>T)throw new Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to "+s.sharedLength);if(!s.transitions){s.transitions=Object.create(null);for(let d=0;d<a;d++){let y=s[d];if(!y)continue;let m,S=s.transitions;for(let U=0,k=y.length;U<k;U++){let J=y[U];m=S[J],m||(m=S[J]=Object.create(null)),S=m}S[Q]=d+64}this.lastNamedStructuresLength=a}A||(s.nextId=a+64)}f&&(f=!1);let o;try{w.randomAccessStructure&&u&&u.constructor&&u.constructor===Object?He(u):I(u);let a=O;if(O&&je(r,I,0),c&&c.idsToInsert){let d=c.idsToInsert.sort((U,k)=>U.offset>k.offset?1:-1),y=d.length,m=-1;for(;a&&y>0;){let U=d[--y].offset+r;U<a.stringsPosition+r&&m===-1&&(m=0),U>a.position+r?m>=0&&(m+=6):(m>=0&&(B.setUint32(a.position+r,B.getUint32(a.position+r)+m),m=-1),a=a.previous,y++)}m>=0&&a&&B.setUint32(a.position+r,B.getUint32(a.position+r)+m),i+=d.length*6,i>D&&K(i),w.offset=i;let S=at(l.subarray(r,i),d);return c=null,S}return w.offset=i,g&xt?(l.start=r,l.end=i,l):l.subarray(r,i)}catch(a){throw o=a,a}finally{if(s&&(be(),f&&w.saveStructures)){let a=s.sharedLength||0,d=l.subarray(r,i),y=ot(s,w);if(!o)return w.saveStructures(y,y.isCompatible)===!1?w.pack(u,g):(w.lastNamedStructuresLength=a,l.length>1073741824&&(l=null),d)}l.length>1073741824&&(l=null),g&ht&&(i=r)}};const be=()=>{re<10&&re++;let u=s.sharedLength||0;if(s.length>u&&!A&&(s.length=u),ce>1e4)s.transitions=null,re=0,ce=0,C.length>0&&(C=[]);else if(C.length>0&&!A){for(let g=0,o=C.length;g<o;g++)C[g][Q]=0;C=[]}},ae=u=>{var g=u.length;g<16?l[i++]=144|g:g<65536?(l[i++]=220,l[i++]=g>>8,l[i++]=g&255):(l[i++]=221,B.setUint32(i,g),i+=4);for(let o=0;o<g;o++)I(u[o])},I=u=>{i>D&&(l=K(i));var g=typeof u,o;if(g==="string"){let a=u.length;if(O&&a>=4&&a<4096){if((O.size+=a)>ft){let S,U=(O[0]?O[0].length*3+O[1].length:0)+10;i+U>D&&(l=K(i+U));let k;O.position?(k=O,l[i]=200,i+=3,l[i++]=98,S=i-r,i+=4,je(r,I,0),B.setUint16(S+r-3,i-r-S)):(l[i++]=214,l[i++]=98,S=i-r,i+=4),O=["",""],O.previous=k,O.size=0,O.position=S}let m=lt.test(u);O[m?0:1]+=u,l[i++]=193,I(m?-a:a);return}let d;a<32?d=1:a<256?d=2:a<65536?d=3:d=5;let y=a*3;if(i+y>D&&(l=K(i+y)),a<64||!h){let m,S,U,k=i+d;for(m=0;m<a;m++)S=u.charCodeAt(m),S<128?l[k++]=S:S<2048?(l[k++]=S>>6|192,l[k++]=S&63|128):(S&64512)===55296&&((U=u.charCodeAt(m+1))&64512)===56320?(S=65536+((S&1023)<<10)+(U&1023),m++,l[k++]=S>>18|240,l[k++]=S>>12&63|128,l[k++]=S>>6&63|128,l[k++]=S&63|128):(l[k++]=S>>12|224,l[k++]=S>>6&63|128,l[k++]=S&63|128);o=k-i-d}else o=h(u,i+d);o<32?l[i++]=160|o:o<256?(d<2&&l.copyWithin(i+2,i+1,i+1+o),l[i++]=217,l[i++]=o):o<65536?(d<3&&l.copyWithin(i+3,i+2,i+2+o),l[i++]=218,l[i++]=o>>8,l[i++]=o&255):(d<5&&l.copyWithin(i+5,i+3,i+3+o),l[i++]=219,B.setUint32(i,o),i+=4),i+=o}else if(g==="number")if(u>>>0===u)u<32||u<128&&this.useRecords===!1||u<64&&!this.randomAccessStructure?l[i++]=u:u<256?(l[i++]=204,l[i++]=u):u<65536?(l[i++]=205,l[i++]=u>>8,l[i++]=u&255):(l[i++]=206,B.setUint32(i,u),i+=4);else if(u>>0===u)u>=-32?l[i++]=256+u:u>=-128?(l[i++]=208,l[i++]=u+256):u>=-32768?(l[i++]=209,B.setInt16(i,u),i+=2):(l[i++]=210,B.setInt32(i,u),i+=4);else{let a;if((a=this.useFloat32)>0&&u<4294967296&&u>=-2147483648){l[i++]=202,B.setFloat32(i,u);let d;if(a<4||(d=u*pe[(l[i]&127)<<1|l[i+1]>>7])>>0===d){i+=4;return}else i--}l[i++]=203,B.setFloat64(i,u),i+=8}else if(g==="object"||g==="function")if(!u)l[i++]=192;else{if(c){let d=c.get(u);if(d){if(!d.id){let y=c.idsToInsert||(c.idsToInsert=[]);d.id=y.push(d)}l[i++]=214,l[i++]=112,B.setUint32(i,d.id),i+=4;return}else c.set(u,{offset:i-r})}let a=u.constructor;if(a===Object)ne(u);else if(a===Array)ae(u);else if(a===Map)if(this.mapAsEmptyObject)l[i++]=128;else{o=u.size,o<16?l[i++]=128|o:o<65536?(l[i++]=222,l[i++]=o>>8,l[i++]=o&255):(l[i++]=223,B.setUint32(i,o),i+=4);for(let[d,y]of u)I(d),I(y)}else{for(let d=0,y=ye.length;d<y;d++){let m=Xe[d];if(u instanceof m){let S=ye[d];if(S.write){S.type&&(l[i++]=212,l[i++]=S.type,l[i++]=0);let W=S.write.call(this,u);W===u?Array.isArray(u)?ae(u):ne(u):I(W);return}let U=l,k=B,J=i;l=null;let Z;try{Z=S.pack.call(this,u,W=>(l=U,U=null,i+=W,i>D&&K(i),{target:l,targetView:B,position:i-W}),I)}finally{U&&(l=U,B=k,i=J,D=l.length-10)}Z&&(Z.length+i>D&&K(Z.length+i),i=ct(Z,l,i,S.type));return}}if(Array.isArray(u))ae(u);else{if(u.toJSON){const d=u.toJSON();if(d!==u)return I(d)}if(g==="function")return I(this.writeFunction&&this.writeFunction(u));ne(u)}}}else if(g==="boolean")l[i++]=u?195:194;else if(g==="bigint"){if(u<BigInt(1)<<BigInt(63)&&u>=-(BigInt(1)<<BigInt(63)))l[i++]=211,B.setBigInt64(i,u);else if(u<BigInt(1)<<BigInt(64)&&u>0)l[i++]=207,B.setBigUint64(i,u);else if(this.largeBigIntToFloat)l[i++]=203,B.setFloat64(i,Number(u));else if(this.useBigIntExtension&&u<2n**1023n&&u>-(2n**1023n)){l[i++]=199,i++,l[i++]=66;let a=[],d;do{let y=u&0xffn;d=(y&0x80n)===(u<0n?0x80n:0n),a.push(y),u>>=8n}while(!((u===0n||u===-1n)&&d));l[i-2]=a.length;for(let y=a.length;y>0;)l[i++]=Number(a[--y]);return}else throw new RangeError(u+" was too large to fit in MessagePack 64-bit integer format, use useBigIntExtension or set largeBigIntToFloat to convert to float-64");i+=8}else if(g==="undefined")this.encodeUndefinedAsNil?l[i++]=192:(l[i++]=212,l[i++]=0,l[i++]=0);else throw new Error("Unknown type: "+g)},me=this.variableMapSize||this.coercibleKeyAsNumber?u=>{let g=Object.keys(u),o=g.length;o<16?l[i++]=128|o:o<65536?(l[i++]=222,l[i++]=o>>8,l[i++]=o&255):(l[i++]=223,B.setUint32(i,o),i+=4);let a;if(this.coercibleKeyAsNumber)for(let d=0;d<o;d++){a=g[d];let y=Number(a);I(isNaN(y)?a:y),I(u[a])}else for(let d=0;d<o;d++)I(a=g[d]),I(u[a])}:u=>{l[i++]=222;let g=i-r;i+=2;let o=0;for(let a in u)(typeof u.hasOwnProperty!="function"||u.hasOwnProperty(a))&&(I(a),I(u[a]),o++);l[g+++r]=o>>8,l[g+r]=o&255},Ue=this.useRecords===!1?me:e.progressiveRecords&&!F?u=>{let g,o=s.transitions||(s.transitions=Object.create(null)),a=i++-r,d;for(let y in u)if(typeof u.hasOwnProperty!="function"||u.hasOwnProperty(y)){if(g=o[y],g)o=g;else{let m=Object.keys(u),S=o;o=s.transitions;let U=0;for(let k=0,J=m.length;k<J;k++){let Z=m[k];g=o[Z],g||(g=o[Z]=Object.create(null),U++),o=g}a+r+1==i?(i--,oe(o,m,U)):Be(o,m,a,U),d=!0,o=S[y]}I(u[y])}if(!d){let y=o[Q];y?l[a+r]=y:Be(o,Object.keys(u),a,0)}}:u=>{let g,o=s.transitions||(s.transitions=Object.create(null)),a=0;for(let y in u)(typeof u.hasOwnProperty!="function"||u.hasOwnProperty(y))&&(g=o[y],g||(g=o[y]=Object.create(null),a++),o=g);let d=o[Q];d?d>=96&&F?(l[i++]=((d-=96)&31)+96,l[i++]=d>>5):l[i++]=d:oe(o,o.__keys__||Object.keys(u),a);for(let y in u)(typeof u.hasOwnProperty!="function"||u.hasOwnProperty(y))&&I(u[y])},ke=typeof this.useRecords=="function"&&this.useRecords,ne=ke?u=>{ke(u)?Ue(u):me(u)}:Ue,K=u=>{let g;if(u>16777216){if(u-r>Ne)throw new Error("Packed buffer would be larger than maximum buffer size");g=Math.min(Ne,Math.round(Math.max((u-r)*(u>67108864?1.25:2),4194304)/4096)*4096)}else g=(Math.max(u-r<<2,l.length-1)>>12)+1<<12;let o=new se(g);return B=o.dataView||(o.dataView=new DataView(o.buffer,0,g)),u=Math.min(u,l.length),l.copy?l.copy(o,0,r,u):o.set(l.slice(r,u)),i-=r,r=0,D=o.length-10,l=o},oe=(u,g,o)=>{let a=s.nextId;a||(a=64),a<j&&this.shouldShareStructure&&!this.shouldShareStructure(g)?(a=s.nextOwnId,a<G||(a=j),s.nextOwnId=a+1):(a>=G&&(a=j),s.nextId=a+1);let d=g.highByte=a>=96&&F?a-96>>5:-1;u[Q]=a,u.__keys__=g,s[a-64]=g,a<j?(g.isShared=!0,s.sharedLength=a-63,f=!0,d>=0?(l[i++]=(a&31)+96,l[i++]=d):l[i++]=a):(d>=0?(l[i++]=213,l[i++]=114,l[i++]=(a&31)+96,l[i++]=d):(l[i++]=212,l[i++]=114,l[i++]=a),o&&(ce+=re*o),C.length>=N&&(C.shift()[Q]=0),C.push(u),I(g))},Be=(u,g,o,a)=>{let d=l,y=i,m=D,S=r;l=v,i=0,r=0,l||(v=l=new se(8192)),D=l.length-10,oe(u,g,a),v=l;let U=i;if(l=d,i=y,D=m,r=S,U>1){let k=i+U-1;k>D&&K(k);let J=o+r;l.copyWithin(J+U,J+1,i),l.set(v.slice(0,U),J),i=k}else l[o+r]=v[0]},He=u=>{let g=st(u,l,r,i,s,K,(o,a,d)=>{if(d)return f=!0;i=a;let y=l;return I(o),be(),y!==l?{position:i,targetView:B,target:l}:i},this);if(g===0)return ne(u);i=g}}useBuffer(e){l=e,B=new DataView(l.buffer,l.byteOffset,l.byteLength),i=0}clearSharedData(){this.structures&&(this.structures=[]),this.typedStructs&&(this.typedStructs=[])}}Xe=[Date,Set,Error,RegExp,ArrayBuffer,Object.getPrototypeOf(Uint8Array.prototype).constructor,Ce];ye=[{pack(t,e,r){let f=t.getTime()/1e3;if((this.useTimestamp32||t.getMilliseconds()===0)&&f>=0&&f<4294967296){let{target:s,targetView:c,position:h}=e(6);s[h++]=214,s[h++]=255,c.setUint32(h,f)}else if(f>0&&f<4294967296){let{target:s,targetView:c,position:h}=e(10);s[h++]=215,s[h++]=255,c.setUint32(h,t.getMilliseconds()*4e6+(f/1e3/4294967296>>0)),c.setUint32(h+4,f)}else if(isNaN(f)){if(this.onInvalidDate)return e(0),r(this.onInvalidDate());let{target:s,targetView:c,position:h}=e(3);s[h++]=212,s[h++]=255,s[h++]=255}else{let{target:s,targetView:c,position:h}=e(15);s[h++]=199,s[h++]=12,s[h++]=255,c.setUint32(h,t.getMilliseconds()*1e6),c.setBigInt64(h+4,BigInt(Math.floor(f)))}}},{pack(t,e,r){if(this.setAsEmptyObject)return e(0),r({});let f=Array.from(t),{target:s,position:c}=e(this.moreTypes?3:0);this.moreTypes&&(s[c++]=212,s[c++]=115,s[c++]=0),r(f)}},{pack(t,e,r){let{target:f,position:s}=e(this.moreTypes?3:0);this.moreTypes&&(f[s++]=212,f[s++]=101,f[s++]=0),r([t.name,t.message,t.cause])}},{pack(t,e,r){let{target:f,position:s}=e(this.moreTypes?3:0);this.moreTypes&&(f[s++]=212,f[s++]=120,f[s++]=0),r([t.source,t.flags])}},{pack(t,e){this.moreTypes?De(t,16,e):Le(ue?Buffer.from(t):new Uint8Array(t),e)}},{pack(t,e){let r=t.constructor;r!==Ye&&this.moreTypes?De(t,Ke.indexOf(r.name),e):Le(t,e)}},{pack(t,e){let{target:r,position:f}=e(1);r[f]=193}}];function De(t,e,r,f){let s=t.byteLength;if(s+1<256){var{target:c,position:h}=r(4+s);c[h++]=199,c[h++]=s+1}else if(s+1<65536){var{target:c,position:h}=r(5+s);c[h++]=200,c[h++]=s+1>>8,c[h++]=s+1&255}else{var{target:c,position:h,targetView:w}=r(7+s);c[h++]=201,w.setUint32(h,s+1),h+=4}c[h++]=116,c[h++]=e,t.buffer||(t=new Uint8Array(t)),c.set(new Uint8Array(t.buffer,t.byteOffset,t.byteLength),h)}function Le(t,e){let r=t.byteLength;var f,s;if(r<256){var{target:f,position:s}=e(r+2);f[s++]=196,f[s++]=r}else if(r<65536){var{target:f,position:s}=e(r+3);f[s++]=197,f[s++]=r>>8,f[s++]=r&255}else{var{target:f,position:s,targetView:c}=e(r+5);f[s++]=198,c.setUint32(s,r),s+=4}f.set(t,s)}function ct(t,e,r,f){let s=t.length;switch(s){case 1:e[r++]=212;break;case 2:e[r++]=213;break;case 4:e[r++]=214;break;case 8:e[r++]=215;break;case 16:e[r++]=216;break;default:s<256?(e[r++]=199,e[r++]=s):s<65536?(e[r++]=200,e[r++]=s>>8,e[r++]=s&255):(e[r++]=201,e[r++]=s>>24,e[r++]=s>>16&255,e[r++]=s>>8&255,e[r++]=s&255)}return e[r++]=f,e.set(t,r),r+=s,r}function at(t,e){let r,f=e.length*6,s=t.length-f;for(;r=e.pop();){let c=r.offset,h=r.id;t.copyWithin(c+f,c,s),f-=6;let w=c+f;t[w++]=214,t[w++]=105,t[w++]=h>>24,t[w++]=h>>16&255,t[w++]=h>>8&255,t[w++]=h&255,s=c}return t}function je(t,e,r){if(O.length>0){B.setUint32(O.position+t,i+r-O.position-t),O.stringsPosition=i-t;let f=O;O=null,e(f[0]),e(f[1])}}function ot(t,e){return t.isCompatible=r=>{let f=!r||(e.lastNamedStructuresLength||0)===r.length;return f||e._mergeStructures(r),f},t}let Ge=new ut({useRecords:!1});Ge.pack;Ge.pack;const xt=512,ht=1024,dt=2048;export{gt as u};
