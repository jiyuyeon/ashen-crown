var bb=Object.defineProperty;var Ns=(i,e)=>()=>(i&&(e=i(i=0)),e);var xb=(i,e)=>{for(var t in e)bb(i,t,{get:e[t],enumerable:!0})};function oi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]+"-"+fn[e&255]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[t&63|128]+fn[t>>8&255]+"-"+fn[t>>16&255]+fn[t>>24&255]+fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]).toLowerCase()}function Ke(i,e,t){return Math.max(e,Math.min(t,i))}function Tu(i,e){return(i%e+e)%e}function vb(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function _b(i,e,t){return i!==e?(t-i)/(e-i):0}function Ka(i,e,t){return(1-t)*i+t*e}function yb(i,e,t,n){return Ka(i,e,1-Math.exp(-t*n))}function Mb(i,e=1){return e-Math.abs(Tu(i,e*2)-e)}function Sb(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Tb(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function wb(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Eb(i,e){return i+Math.random()*(e-i)}function Ab(i){return i*(.5-Math.random())}function Rb(i){i!==void 0&&(_p=i);let e=_p+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Cb(i){return i*Ya}function Pb(i){return i*qs}function Ib(i){return(i&i-1)===0&&i!==0}function kb(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Lb(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Db(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),d=r((e-n)/2),u=a((e-n)/2),f=r((n-e)/2),m=a((n-e)/2);switch(s){case"XYX":i.set(o*h,c*d,c*u,o*l);break;case"YZY":i.set(c*u,o*h,c*d,o*l);break;case"ZXZ":i.set(c*d,c*u,o*h,o*l);break;case"XZX":i.set(o*h,c*m,c*f,o*l);break;case"YXY":i.set(c*f,o*h,c*m,o*l);break;case"ZYZ":i.set(c*m,c*f,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ri(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function pt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}function Eu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Qr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Um(){let i=Qr("canvas");return i.style.display="block",i}function ea(i){i in Mp||(Mp[i]=!0,console.warn(i))}function Fm(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Nb(){let i={enabled:!0,workingColorSpace:dn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===lt&&(s.r=qi(s.r),s.g=qi(s.g),s.b=qi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===lt&&(s.r=Kr(s.r),s.g=Kr(s.g),s.b=Kr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ts?Za:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ea("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ea("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[dn]:{primaries:e,whitePoint:n,transfer:Za,toXYZ:Sp,fromXYZ:Tp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:It},outputColorSpaceConfig:{drawingBufferColorSpace:It}},[It]:{primaries:e,whitePoint:n,transfer:lt,toXYZ:Sp,fromXYZ:Tp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:It}}}),i}function qi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Kr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}function Ed(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Zc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}function Rd(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Us.fromArray(i,r);let o=s.x*Math.abs(Us.x)+s.y*Math.abs(Us.y)+s.z*Math.abs(Us.z),c=e.dot(Us),l=t.dot(Us),h=n.dot(Us);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}function Hd(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function $b(i,e,t,n,s,r,a,o){let c;if(e.side===yn?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===ci,o),c===null)return null;Nc.copy(o),Nc.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Nc);return l<t.near||l>t.far?null:{distance:l,point:Nc.clone(),object:i}}function zc(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,Ic),i.getVertexPosition(c,kc),i.getVertexPosition(l,Lc);let h=$b(i,e,t,n,Ic,kc,Lc,Np);if(h){let d=new C;Wi.getBarycoord(Np,Ic,kc,Lc,d),s&&(h.uv=Wi.getInterpolatedAttribute(s,o,c,l,d,new fe)),r&&(h.uv1=Wi.getInterpolatedAttribute(r,o,c,l,d,new fe)),a&&(h.normal=Wi.getInterpolatedAttribute(a,o,c,l,d,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new C,materialIndex:0};Wi.getNormal(Ic,kc,Lc,u.normal),h.face=u,h.barycoord=d}return h}function or(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function gn(i){let e={};for(let t=0;t<i.length;t++){let n=or(i[t]);for(let s in n)e[s]=n[s]}return e}function Yb(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Au(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}function Oc(i,e,t,n,s,r){jr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Ga.x=r*jr.x-s*jr.y,Ga.y=s*jr.x+r*jr.y):Ga.copy(jr),i.copy(e),i.x+=Ga.x,i.y+=Ga.y,i.applyMatrix4(Bm)}function Wc(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(il.fromBufferAttribute(o,s),sl.fromBufferAttribute(o,r),t.distanceSqToSegment(il,sl,$d,Yp)>n)return;$d.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo($d);if(!(l<e.near||l>e.far))return{distance:l,point:Yp.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}function Qp(i,e,t,n,s,r,a){let o=Qd.distanceSqToPoint(i);if(o<t){let c=new C;Qd.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}function jc(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function rx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ax(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function em(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let c=0;c!==e;++c)s[a++]=i[o+c]}return s}function Hm(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}function ox(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Si;case"vector":case"vector2":case"vector3":case"vector4":return wi;case"color":return vo;case"quaternion":return Ti;case"bool":case"boolean":return Ki;case"string":return Ji}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function cx(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=ox(i.type);if(i.times===void 0){let t=[],n=[];Hm(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}function rm(i,e){return i.distance-e.distance}function ru(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)ru(r[a],e,t,!0)}}function Pu(i,e,t,n){let s=xx(n);switch(t){case gu:return i*e;case zl:return i*e/s.components*s.byteLength;case Ul:return i*e/s.components*s.byteLength;case xu:return i*e*2/s.components*s.byteLength;case Fl:return i*e*2/s.components*s.byteLength;case bu:return i*e*3/s.components*s.byteLength;case Mn:return i*e*4/s.components*s.byteLength;case Ol:return i*e*4/s.components*s.byteLength;case Io:case ko:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Lo:case Do:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Hl:case Gl:return Math.max(i,16)*Math.max(e,8)/4;case Bl:case Vl:return Math.max(i,8)*Math.max(e,8)/2;case Wl:case ql:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Xl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case jl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case $l:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Yl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Kl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Jl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Zl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ql:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case eh:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case th:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case nh:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ih:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case sh:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case rh:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ah:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case oh:case ch:case lh:return Math.ceil(i/4)*Math.ceil(e/4)*16;case hh:case dh:return Math.ceil(i/4)*Math.ceil(e/4)*8;case uh:case fh:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function xx(i){switch(i){case Vn:case uu:return{byteLength:1,components:1};case fa:case fu:case un:return{byteLength:2,components:1};case Dl:case Nl:return{byteLength:2,components:4};case ys:case Ll:case $n:return{byteLength:4,components:1};case pu:case mu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}var am,au,om,ou,gl,Ai,ci,yn,Zt,Qt,Xi,jt,cu,lu,bl,Fn,cm,lm,hm,dm,ir,um,fm,pm,Yc,Kc,Ro,mm,Co,gm,bm,xm,vm,_m,ym,xl,vl,_l,Vs,yl,Ml,ha,Sl,hu,Mm,Sm,es,Tl,wl,El,da,Al,Rl,Cl,Zd,Tm,du,sr,rr,Pl,Il,Po,An,xi,Jr,Jt,kl,ar,_n,ua,di,Vn,uu,fu,fa,Ll,ys,$n,un,Dl,Nl,Ms,pu,mu,gu,bu,Mn,Zr,Ss,zl,Ul,xu,Fl,Ol,Io,ko,Lo,Do,Bl,Hl,Vl,Gl,Wl,ql,Xl,jl,$l,Yl,Kl,Jl,Zl,Ql,eh,th,nh,ih,sh,rh,ah,oh,ch,lh,hh,dh,uh,fh,ph,mh,wm,Gs,Ws,$c,Bs,Hs,Ja,gh,Em,vu,No,pa,Am,Rm,bh,Cm,ts,It,dn,Za,lt,si,_u,yu,Qa,Pm,Im,km,Mu,Lm,Dm,Nm,zm,Jc,zo,Su,ai,eo,_i,fn,_p,Ya,qs,wu,fe,hn,C,Td,yp,qe,wd,Mp,Sp,Tp,je,kr,Zc,zb,ta,Ub,Ad,nn,ot,Qc,qt,to,el,On,Fi,ti,yc,Lr,Dr,Nr,ds,us,zs,Fa,Mc,Sc,Us,Fb,Oa,Cd,Rn,Oi,Pd,Tc,fs,Id,wc,kd,bs,Ce,zr,ni,Ob,Bb,ps,Ec,zn,wp,Ep,li,na,Hb,Ap,Ur,Bi,Ac,Ba,Vb,Gb,Rp,Cp,Pp,Ip,Wb,Fr,Ld,kt,ii,Hi,Dd,Vi,Or,Br,kp,Nd,zd,Ud,Fd,Od,Bd,Wi,Om,ms,Rc,re,pn,qb,mn,vt,Yt,Cc,Xb,Dt,no,io,nt,jb,jn,Vd,Hr,Un,Ha,on,_t,Lp,Fs,Pc,Dp,Ic,kc,Lc,Gd,Dc,Np,Nc,Ue,ia,Sn,Kb,Jb,it,so,gs,zp,Up,Kt,Vr,Gr,tl,ro,nl,Et,Zb,sa,ao,oo,Xs,vn,xs,ra,Wr,Va,qr,Xr,jr,Ga,Bm,Uc,Wa,Fc,Fp,Wd,Op,co,Bp,Hp,Vp,Qb,Gp,Bc,qd,Wp,Xd,js,aa,ji,qp,ex,lo,hi,$r,Xp,Hc,jp,tx,qa,Xa,$s,jd,nx,ix,bi,Os,sx,Vc,oa,$i,il,sl,$p,ja,Gc,$d,Yp,yi,Kp,Jp,ho,uo,ca,Zp,Qd,qc,Xc,fo,po,Ys,mo,Mi,vs,Ks,rl,Js,Bn,_s,Zs,Qs,go,Xt,Cn,bo,al,ol,Yi,cl,xo,ll,Pn,Ki,vo,Si,hl,Ti,Ji,wi,er,vi,dl,Vm,Ei,Gi,eu,la,Yr,ul,_o,tr,yo,Yd,tm,nm,Mo,tu,So,im,$a,Kd,nu,Hn,Zi,iu,nr,Qi,Jd,To,fl,wo,pl,Ru,lx,Cu,hx,dx,ux,fx,px,mx,gx,su,xt,ml,bx,Eo,sm,Ao,Iu=Ns(()=>{am=0,au=1,om=2,ou=1,gl=2,Ai=3,ci=0,yn=1,Zt=2,Qt=0,Xi=1,jt=2,cu=3,lu=4,bl=5,Fn=100,cm=101,lm=102,hm=103,dm=104,ir=200,um=201,fm=202,pm=203,Yc=204,Kc=205,Ro=206,mm=207,Co=208,gm=209,bm=210,xm=211,vm=212,_m=213,ym=214,xl=0,vl=1,_l=2,Vs=3,yl=4,Ml=5,ha=6,Sl=7,hu=0,Mm=1,Sm=2,es=0,Tl=1,wl=2,El=3,da=4,Al=5,Rl=6,Cl=7,Zd="attached",Tm="detached",du=300,sr=301,rr=302,Pl=303,Il=304,Po=306,An=1e3,xi=1001,Jr=1002,Jt=1003,kl=1004,ar=1005,_n=1006,ua=1007,di=1008,Vn=1009,uu=1010,fu=1011,fa=1012,Ll=1013,ys=1014,$n=1015,un=1016,Dl=1017,Nl=1018,Ms=1020,pu=35902,mu=35899,gu=1021,bu=1022,Mn=1023,Zr=1026,Ss=1027,zl=1028,Ul=1029,xu=1030,Fl=1031,Ol=1033,Io=33776,ko=33777,Lo=33778,Do=33779,Bl=35840,Hl=35841,Vl=35842,Gl=35843,Wl=36196,ql=37492,Xl=37496,jl=37808,$l=37809,Yl=37810,Kl=37811,Jl=37812,Zl=37813,Ql=37814,eh=37815,th=37816,nh=37817,ih=37818,sh=37819,rh=37820,ah=37821,oh=36492,ch=36494,lh=36495,hh=36283,dh=36284,uh=36285,fh=36286,ph=2200,mh=2201,wm=2202,Gs=2300,Ws=2301,$c=2302,Bs=2400,Hs=2401,Ja=2402,gh=2500,Em=2501,vu=0,No=1,pa=2,Am=3200,Rm=3201,bh=0,Cm=1,ts="",It="srgb",dn="srgb-linear",Za="linear",lt="srgb",si=7680,_u=7681,yu=517,Qa=519,Pm=512,Im=513,km=514,Mu=515,Lm=516,Dm=517,Nm=518,zm=519,Jc=35044,zo=35048,Su="300 es",ai=2e3,eo=2001,_i=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_p=1234567,Ya=Math.PI/180,qs=180/Math.PI;wu={DEG2RAD:Ya,RAD2DEG:qs,generateUUID:oi,clamp:Ke,euclideanModulo:Tu,mapLinear:vb,inverseLerp:_b,lerp:Ka,damp:yb,pingpong:Mb,smoothstep:Sb,smootherstep:Tb,randInt:wb,randFloat:Eb,randFloatSpread:Ab,seededRandom:Rb,degToRad:Cb,radToDeg:Pb,isPowerOfTwo:Ib,ceilPowerOfTwo:kb,floorPowerOfTwo:Lb,setQuaternionFromProperEuler:Db,normalize:pt,denormalize:ri},fe=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},hn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],f=r[a+1],m=r[a+2],b=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=u,e[t+1]=f,e[t+2]=m,e[t+3]=b;return}if(d!==b||c!==u||l!==f||h!==m){let g=1-o,p=c*u+l*f+h*m+d*b,v=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let w=Math.sqrt(_),E=Math.atan2(w,p*v);g=Math.sin(g*E)/w,o=Math.sin(o*E)/w}let x=o*v;if(c=c*g+u*x,l=l*g+f*x,h=h*g+m*x,d=d*g+b*x,g===1-o){let w=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=w,l*=w,h*=w,d*=w}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[a],u=r[a+1],f=r[a+2],m=r[a+3];return e[t]=o*m+h*d+c*f-l*u,e[t+1]=c*m+h*u+l*d-o*f,e[t+2]=l*m+h*f+o*u-c*d,e[t+3]=h*m-o*d-c*u-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),d=o(r/2),u=c(n/2),f=c(s/2),m=c(r/2);switch(a){case"XYZ":this._x=u*h*d+l*f*m,this._y=l*f*d-u*h*m,this._z=l*h*m+u*f*d,this._w=l*h*d-u*f*m;break;case"YXZ":this._x=u*h*d+l*f*m,this._y=l*f*d-u*h*m,this._z=l*h*m-u*f*d,this._w=l*h*d+u*f*m;break;case"ZXY":this._x=u*h*d-l*f*m,this._y=l*f*d+u*h*m,this._z=l*h*m+u*f*d,this._w=l*h*d-u*f*m;break;case"ZYX":this._x=u*h*d-l*f*m,this._y=l*f*d+u*h*m,this._z=l*h*m-u*f*d,this._w=l*h*d+u*f*m;break;case"YZX":this._x=u*h*d+l*f*m,this._y=l*f*d+u*h*m,this._z=l*h*m-u*f*d,this._w=l*h*d-u*f*m;break;case"XZY":this._x=u*h*d-l*f*m,this._y=l*f*d-u*h*m,this._z=l*h*m+u*f*d,this._w=l*h*d+u*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),d=Math.sin((1-t)*h)/l,u=Math.sin(t*h)/l;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yp.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+c*l+a*d-o*h,this.y=n+c*h+o*l-r*d,this.z=s+c*d+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Td.copy(this).projectOnVector(e),this.sub(Td)}reflect(e){return this.sub(Td.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Td=new C,yp=new hn,qe=class i{constructor(e,t,n,s,r,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],m=n[8],b=s[0],g=s[3],p=s[6],v=s[1],_=s[4],x=s[7],w=s[2],E=s[5],R=s[8];return r[0]=a*b+o*v+c*w,r[3]=a*g+o*_+c*E,r[6]=a*p+o*x+c*R,r[1]=l*b+h*v+d*w,r[4]=l*g+h*_+d*E,r[7]=l*p+h*x+d*R,r[2]=u*b+f*v+m*w,r[5]=u*g+f*_+m*E,r[8]=u*p+f*x+m*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=h*a-o*l,u=o*c-h*r,f=l*r-a*c,m=t*d+n*u+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/m;return e[0]=d*b,e[1]=(s*l-h*n)*b,e[2]=(o*n-s*a)*b,e[3]=u*b,e[4]=(h*t-s*c)*b,e[5]=(s*r-o*t)*b,e[6]=f*b,e[7]=(n*c-l*t)*b,e[8]=(a*t-n*r)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(wd.makeScale(e,t)),this}rotate(e){return this.premultiply(wd.makeRotation(-e)),this}translate(e,t){return this.premultiply(wd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},wd=new qe;Mp={};Sp=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tp=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);je=Nb();Zc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{kr===void 0&&(kr=Qr("canvas")),kr.width=e.width,kr.height=e.height;let s=kr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=kr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Qr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=qi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(qi(t[n]/255)*255):t[n]=qi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},zb=0,ta=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zb++}),this.uuid=oi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ed(s[a].image)):r.push(Ed(s[a]))}else r=Ed(s);n.url=r}return t||(e.images[this.uuid]=n),n}};Ub=0,Ad=new C,nn=class i extends _i{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=xi,s=xi,r=_n,a=di,o=Mn,c=Vn,l=i.DEFAULT_ANISOTROPY,h=ts){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ub++}),this.uuid=oi(),this.name="",this.source=new ta(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ad).x}get height(){return this.source.getSize(Ad).y}get depth(){return this.source.getSize(Ad).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==du)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case An:e.x=e.x-Math.floor(e.x);break;case xi:e.x=e.x<0?0:1;break;case Jr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case An:e.y=e.y-Math.floor(e.y);break;case xi:e.y=e.y<0?0:1;break;case Jr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=du;nn.DEFAULT_ANISOTROPY=1;ot=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],m=c[9],b=c[2],g=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-b)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+b)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(l+1)/2,x=(f+1)/2,w=(p+1)/2,E=(h+u)/4,R=(d+b)/4,I=(m+g)/4;return _>x&&_>w?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=E/n,r=R/n):x>w?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=E/s,r=I/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=R/r,s=I/r),this.set(n,s,r,t),this}let v=Math.sqrt((g-m)*(g-m)+(d-b)*(d-b)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(d-b)/v,this.z=(u-h)/v,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Qc=class extends _i{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new nn(s);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:_n,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new ta(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},qt=class extends Qc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},to=class extends nn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},el=class extends nn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},On=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ti.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ti.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ti.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ti):ti.fromBufferAttribute(r,a),ti.applyMatrix4(e.matrixWorld),this.expandByPoint(ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),yc.copy(n.boundingBox)),yc.applyMatrix4(e.matrixWorld),this.union(yc)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ti),ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fa),Mc.subVectors(this.max,Fa),Lr.subVectors(e.a,Fa),Dr.subVectors(e.b,Fa),Nr.subVectors(e.c,Fa),ds.subVectors(Dr,Lr),us.subVectors(Nr,Dr),zs.subVectors(Lr,Nr);let t=[0,-ds.z,ds.y,0,-us.z,us.y,0,-zs.z,zs.y,ds.z,0,-ds.x,us.z,0,-us.x,zs.z,0,-zs.x,-ds.y,ds.x,0,-us.y,us.x,0,-zs.y,zs.x,0];return!Rd(t,Lr,Dr,Nr,Mc)||(t=[1,0,0,0,1,0,0,0,1],!Rd(t,Lr,Dr,Nr,Mc))?!1:(Sc.crossVectors(ds,us),t=[Sc.x,Sc.y,Sc.z],Rd(t,Lr,Dr,Nr,Mc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Fi=[new C,new C,new C,new C,new C,new C,new C,new C],ti=new C,yc=new On,Lr=new C,Dr=new C,Nr=new C,ds=new C,us=new C,zs=new C,Fa=new C,Mc=new C,Sc=new C,Us=new C;Fb=new On,Oa=new C,Cd=new C,Rn=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Fb.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Oa.subVectors(e,this.center);let t=Oa.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Oa,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Cd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Oa.copy(e.center).add(Cd)),this.expandByPoint(Oa.copy(e.center).sub(Cd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Oi=new C,Pd=new C,Tc=new C,fs=new C,Id=new C,wc=new C,kd=new C,bs=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Oi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Oi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Oi.copy(this.origin).addScaledVector(this.direction,t),Oi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Pd.copy(e).add(t).multiplyScalar(.5),Tc.copy(t).sub(e).normalize(),fs.copy(this.origin).sub(Pd);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Tc),o=fs.dot(this.direction),c=-fs.dot(Tc),l=fs.lengthSq(),h=Math.abs(1-a*a),d,u,f,m;if(h>0)if(d=a*c-o,u=a*o-c,m=r*h,d>=0)if(u>=-m)if(u<=m){let b=1/h;d*=b,u*=b,f=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u<=-m?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=m?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Pd).addScaledVector(Tc,u),f}intersectSphere(e,t){Oi.subVectors(e.center,this.origin);let n=Oi.dot(this.direction),s=Oi.dot(Oi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,s=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,s=(e.min.x-u.x)*l),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Oi)!==null}intersectTriangle(e,t,n,s,r){Id.subVectors(t,e),wc.subVectors(n,e),kd.crossVectors(Id,wc);let a=this.direction.dot(kd),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;fs.subVectors(this.origin,e);let c=o*this.direction.dot(wc.crossVectors(fs,wc));if(c<0)return null;let l=o*this.direction.dot(Id.cross(fs));if(l<0||c+l>a)return null;let h=-o*fs.dot(kd);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ce=class i{constructor(e,t,n,s,r,a,o,c,l,h,d,u,f,m,b,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,d,u,f,m,b,g)}set(e,t,n,s,r,a,o,c,l,h,d,u,f,m,b,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=m,p[11]=b,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/zr.setFromMatrixColumn(e,0).length(),r=1/zr.setFromMatrixColumn(e,1).length(),a=1/zr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=a*h,f=a*d,m=o*h,b=o*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=f+m*l,t[5]=u-b*l,t[9]=-o*c,t[2]=b-u*l,t[6]=m+f*l,t[10]=a*c}else if(e.order==="YXZ"){let u=c*h,f=c*d,m=l*h,b=l*d;t[0]=u+b*o,t[4]=m*o-f,t[8]=a*l,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-m,t[6]=b+u*o,t[10]=a*c}else if(e.order==="ZXY"){let u=c*h,f=c*d,m=l*h,b=l*d;t[0]=u-b*o,t[4]=-a*d,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*h,t[9]=b-u*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let u=a*h,f=a*d,m=o*h,b=o*d;t[0]=c*h,t[4]=m*l-f,t[8]=u*l+b,t[1]=c*d,t[5]=b*l+u,t[9]=f*l-m,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let u=a*c,f=a*l,m=o*c,b=o*l;t[0]=c*h,t[4]=b-u*d,t[8]=m*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*d+m,t[10]=u-b*d}else if(e.order==="XZY"){let u=a*c,f=a*l,m=o*c,b=o*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=u*d+b,t[5]=a*h,t[9]=f*d-m,t[2]=m*d-f,t[6]=o*h,t[10]=b*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ob,e,Bb)}lookAt(e,t,n){let s=this.elements;return zn.subVectors(e,t),zn.lengthSq()===0&&(zn.z=1),zn.normalize(),ps.crossVectors(n,zn),ps.lengthSq()===0&&(Math.abs(n.z)===1?zn.x+=1e-4:zn.z+=1e-4,zn.normalize(),ps.crossVectors(n,zn)),ps.normalize(),Ec.crossVectors(zn,ps),s[0]=ps.x,s[4]=Ec.x,s[8]=zn.x,s[1]=ps.y,s[5]=Ec.y,s[9]=zn.y,s[2]=ps.z,s[6]=Ec.z,s[10]=zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],m=n[2],b=n[6],g=n[10],p=n[14],v=n[3],_=n[7],x=n[11],w=n[15],E=s[0],R=s[4],I=s[8],S=s[12],y=s[1],P=s[5],D=s[9],F=s[13],H=s[2],X=s[6],W=s[10],ee=s[14],V=s[3],Z=s[7],le=s[11],Me=s[15];return r[0]=a*E+o*y+c*H+l*V,r[4]=a*R+o*P+c*X+l*Z,r[8]=a*I+o*D+c*W+l*le,r[12]=a*S+o*F+c*ee+l*Me,r[1]=h*E+d*y+u*H+f*V,r[5]=h*R+d*P+u*X+f*Z,r[9]=h*I+d*D+u*W+f*le,r[13]=h*S+d*F+u*ee+f*Me,r[2]=m*E+b*y+g*H+p*V,r[6]=m*R+b*P+g*X+p*Z,r[10]=m*I+b*D+g*W+p*le,r[14]=m*S+b*F+g*ee+p*Me,r[3]=v*E+_*y+x*H+w*V,r[7]=v*R+_*P+x*X+w*Z,r[11]=v*I+_*D+x*W+w*le,r[15]=v*S+_*F+x*ee+w*Me,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],d=e[6],u=e[10],f=e[14],m=e[3],b=e[7],g=e[11],p=e[15];return m*(+r*c*d-s*l*d-r*o*u+n*l*u+s*o*f-n*c*f)+b*(+t*c*f-t*l*u+r*a*u-s*a*f+s*l*h-r*c*h)+g*(+t*l*d-t*o*f-r*a*d+n*a*f+r*o*h-n*l*h)+p*(-s*o*h-t*c*d+t*o*u+s*a*d-n*a*u+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=e[9],u=e[10],f=e[11],m=e[12],b=e[13],g=e[14],p=e[15],v=d*g*l-b*u*l+b*c*f-o*g*f-d*c*p+o*u*p,_=m*u*l-h*g*l-m*c*f+a*g*f+h*c*p-a*u*p,x=h*b*l-m*d*l+m*o*f-a*b*f-h*o*p+a*d*p,w=m*d*c-h*b*c-m*o*u+a*b*u+h*o*g-a*d*g,E=t*v+n*_+s*x+r*w;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/E;return e[0]=v*R,e[1]=(b*u*r-d*g*r-b*s*f+n*g*f+d*s*p-n*u*p)*R,e[2]=(o*g*r-b*c*r+b*s*l-n*g*l-o*s*p+n*c*p)*R,e[3]=(d*c*r-o*u*r-d*s*l+n*u*l+o*s*f-n*c*f)*R,e[4]=_*R,e[5]=(h*g*r-m*u*r+m*s*f-t*g*f-h*s*p+t*u*p)*R,e[6]=(m*c*r-a*g*r-m*s*l+t*g*l+a*s*p-t*c*p)*R,e[7]=(a*u*r-h*c*r+h*s*l-t*u*l-a*s*f+t*c*f)*R,e[8]=x*R,e[9]=(m*d*r-h*b*r-m*n*f+t*b*f+h*n*p-t*d*p)*R,e[10]=(a*b*r-m*o*r+m*n*l-t*b*l-a*n*p+t*o*p)*R,e[11]=(h*o*r-a*d*r-h*n*l+t*d*l+a*n*f-t*o*f)*R,e[12]=w*R,e[13]=(h*b*s-m*d*s+m*n*u-t*b*u-h*n*g+t*d*g)*R,e[14]=(m*o*s-a*b*s-m*n*c+t*b*c+a*n*g-t*o*g)*R,e[15]=(a*d*s-h*o*s+h*n*c-t*d*c-a*n*u+t*o*u)*R,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,d=o+o,u=r*l,f=r*h,m=r*d,b=a*h,g=a*d,p=o*d,v=c*l,_=c*h,x=c*d,w=n.x,E=n.y,R=n.z;return s[0]=(1-(b+p))*w,s[1]=(f+x)*w,s[2]=(m-_)*w,s[3]=0,s[4]=(f-x)*E,s[5]=(1-(u+p))*E,s[6]=(g+v)*E,s[7]=0,s[8]=(m+_)*R,s[9]=(g-v)*R,s[10]=(1-(u+b))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=zr.set(s[0],s[1],s[2]).length(),a=zr.set(s[4],s[5],s[6]).length(),o=zr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],ni.copy(this);let l=1/r,h=1/a,d=1/o;return ni.elements[0]*=l,ni.elements[1]*=l,ni.elements[2]*=l,ni.elements[4]*=h,ni.elements[5]*=h,ni.elements[6]*=h,ni.elements[8]*=d,ni.elements[9]*=d,ni.elements[10]*=d,t.setFromRotationMatrix(ni),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=ai,c=!1){let l=this.elements,h=2*r/(t-e),d=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),m,b;if(c)m=r/(a-r),b=a*r/(a-r);else if(o===ai)m=-(a+r)/(a-r),b=-2*a*r/(a-r);else if(o===eo)m=-a/(a-r),b=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=b,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=ai,c=!1){let l=this.elements,h=2/(t-e),d=2/(n-s),u=-(t+e)/(t-e),f=-(n+s)/(n-s),m,b;if(c)m=1/(a-r),b=a/(a-r);else if(o===ai)m=-2/(a-r),b=-(a+r)/(a-r);else if(o===eo)m=-1/(a-r),b=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=m,l[14]=b,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},zr=new C,ni=new Ce,Ob=new C(0,0,0),Bb=new C(1,1,1),ps=new C,Ec=new C,zn=new C,wp=new Ce,Ep=new hn,li=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ke(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return wp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ep.setFromEuler(this),this.setFromQuaternion(Ep,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};li.DEFAULT_ORDER="XYZ";na=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Hb=0,Ap=new C,Ur=new hn,Bi=new Ce,Ac=new C,Ba=new C,Vb=new C,Gb=new hn,Rp=new C(1,0,0),Cp=new C(0,1,0),Pp=new C(0,0,1),Ip={type:"added"},Wb={type:"removed"},Fr={type:"childadded",child:null},Ld={type:"childremoved",child:null},kt=class i extends _i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hb++}),this.uuid=oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new C,t=new li,n=new hn,s=new C(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ce},normalMatrix:{value:new qe}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new na,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ur.setFromAxisAngle(e,t),this.quaternion.multiply(Ur),this}rotateOnWorldAxis(e,t){return Ur.setFromAxisAngle(e,t),this.quaternion.premultiply(Ur),this}rotateX(e){return this.rotateOnAxis(Rp,e)}rotateY(e){return this.rotateOnAxis(Cp,e)}rotateZ(e){return this.rotateOnAxis(Pp,e)}translateOnAxis(e,t){return Ap.copy(e).applyQuaternion(this.quaternion),this.position.add(Ap.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Rp,e)}translateY(e){return this.translateOnAxis(Cp,e)}translateZ(e){return this.translateOnAxis(Pp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ac.copy(e):Ac.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ba.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bi.lookAt(Ba,Ac,this.up):Bi.lookAt(Ac,Ba,this.up),this.quaternion.setFromRotationMatrix(Bi),s&&(Bi.extractRotation(s.matrixWorld),Ur.setFromRotationMatrix(Bi),this.quaternion.premultiply(Ur.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ip),Fr.child=e,this.dispatchEvent(Fr),Fr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Wb),Ld.child=e,this.dispatchEvent(Ld),Ld.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ip),Fr.child=e,this.dispatchEvent(Fr),Fr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ba,e,Vb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ba,Gb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};kt.DEFAULT_UP=new C(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;ii=new C,Hi=new C,Dd=new C,Vi=new C,Or=new C,Br=new C,kp=new C,Nd=new C,zd=new C,Ud=new C,Fd=new ot,Od=new ot,Bd=new ot,Wi=class i{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ii.subVectors(e,t),s.cross(ii);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ii.subVectors(s,t),Hi.subVectors(n,t),Dd.subVectors(e,t);let a=ii.dot(ii),o=ii.dot(Hi),c=ii.dot(Dd),l=Hi.dot(Hi),h=Hi.dot(Dd),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(l*c-o*h)*u,m=(a*h-o*c)*u;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Vi)===null?!1:Vi.x>=0&&Vi.y>=0&&Vi.x+Vi.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Vi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Vi.x),c.addScaledVector(a,Vi.y),c.addScaledVector(o,Vi.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return Fd.setScalar(0),Od.setScalar(0),Bd.setScalar(0),Fd.fromBufferAttribute(e,t),Od.fromBufferAttribute(e,n),Bd.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Fd,r.x),a.addScaledVector(Od,r.y),a.addScaledVector(Bd,r.z),a}static isFrontFacing(e,t,n,s){return ii.subVectors(n,t),Hi.subVectors(e,t),ii.cross(Hi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ii.subVectors(this.c,this.b),Hi.subVectors(this.a,this.b),ii.cross(Hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Or.subVectors(s,n),Br.subVectors(r,n),Nd.subVectors(e,n);let c=Or.dot(Nd),l=Br.dot(Nd);if(c<=0&&l<=0)return t.copy(n);zd.subVectors(e,s);let h=Or.dot(zd),d=Br.dot(zd);if(h>=0&&d<=h)return t.copy(s);let u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Or,a);Ud.subVectors(e,r);let f=Or.dot(Ud),m=Br.dot(Ud);if(m>=0&&f<=m)return t.copy(r);let b=f*l-c*m;if(b<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(n).addScaledVector(Br,o);let g=h*m-f*d;if(g<=0&&d-h>=0&&f-m>=0)return kp.subVectors(r,s),o=(d-h)/(d-h+(f-m)),t.copy(s).addScaledVector(kp,o);let p=1/(g+b+u);return a=b*p,o=u*p,t.copy(n).addScaledVector(Or,a).addScaledVector(Br,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Om={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ms={h:0,s:0,l:0},Rc={h:0,s:0,l:0};re=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=It){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=je.workingColorSpace){return this.r=e,this.g=t,this.b=n,je.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=je.workingColorSpace){if(e=Tu(e,1),t=Ke(t,0,1),n=Ke(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Hd(a,r,e+1/3),this.g=Hd(a,r,e),this.b=Hd(a,r,e-1/3)}return je.colorSpaceToWorking(this,s),this}setStyle(e,t=It){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=It){let n=Om[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qi(e.r),this.g=qi(e.g),this.b=qi(e.b),this}copyLinearToSRGB(e){return this.r=Kr(e.r),this.g=Kr(e.g),this.b=Kr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=It){return je.workingToColorSpace(pn.copy(this),e),Math.round(Ke(pn.r*255,0,255))*65536+Math.round(Ke(pn.g*255,0,255))*256+Math.round(Ke(pn.b*255,0,255))}getHexString(e=It){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.workingToColorSpace(pn.copy(this),t);let n=pn.r,s=pn.g,r=pn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=je.workingColorSpace){return je.workingToColorSpace(pn.copy(this),t),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=It){je.workingToColorSpace(pn.copy(this),e);let t=pn.r,n=pn.g,s=pn.b;return e!==It?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ms),this.setHSL(ms.h+e,ms.s+t,ms.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ms),e.getHSL(Rc);let n=Ka(ms.h,Rc.h,t),s=Ka(ms.s,Rc.s,t),r=Ka(ms.l,Rc.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},pn=new re;re.NAMES=Om;qb=0,mn=class extends _i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qb++}),this.uuid=oi(),this.name="",this.type="Material",this.blending=Xi,this.side=ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yc,this.blendDst=Kc,this.blendEquation=Fn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new re(0,0,0),this.blendAlpha=0,this.depthFunc=Vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=si,this.stencilZFail=si,this.stencilZPass=si,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Xi&&(n.blending=this.blending),this.side!==ci&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Yc&&(n.blendSrc=this.blendSrc),this.blendDst!==Kc&&(n.blendDst=this.blendDst),this.blendEquation!==Fn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Vs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==si&&(n.stencilFail=this.stencilFail),this.stencilZFail!==si&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==si&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},vt=class extends mn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.combine=hu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Yt=new C,Cc=new fe,Xb=0,Dt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Xb++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Jc,this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Cc.fromBufferAttribute(this,t),Cc.applyMatrix3(e),this.setXY(t,Cc.x,Cc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix3(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ri(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=pt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ri(t,this.array)),t}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ri(t,this.array)),t}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ri(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ri(t,this.array)),t}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),s=pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),s=pt(s,this.array),r=pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Jc&&(e.usage=this.usage),e}},no=class extends Dt{constructor(e,t,n){super(new Uint16Array(e),t,n)}},io=class extends Dt{constructor(e,t,n){super(new Uint32Array(e),t,n)}},nt=class extends Dt{constructor(e,t,n){super(new Float32Array(e),t,n)}},jb=0,jn=new Ce,Vd=new kt,Hr=new C,Un=new On,Ha=new On,on=new C,_t=class i extends _i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jb++}),this.uuid=oi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Eu(e)?io:no)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jn.makeRotationFromQuaternion(e),this.applyMatrix4(jn),this}rotateX(e){return jn.makeRotationX(e),this.applyMatrix4(jn),this}rotateY(e){return jn.makeRotationY(e),this.applyMatrix4(jn),this}rotateZ(e){return jn.makeRotationZ(e),this.applyMatrix4(jn),this}translate(e,t,n){return jn.makeTranslation(e,t,n),this.applyMatrix4(jn),this}scale(e,t,n){return jn.makeScale(e,t,n),this.applyMatrix4(jn),this}lookAt(e){return Vd.lookAt(e),Vd.updateMatrix(),this.applyMatrix4(Vd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hr).negate(),this.translate(Hr.x,Hr.y,Hr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new nt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new On);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Un.setFromBufferAttribute(r),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,Un.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,Un.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(Un.min),this.boundingBox.expandByPoint(Un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){let n=this.boundingSphere.center;if(Un.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Ha.setFromBufferAttribute(o),this.morphTargetsRelative?(on.addVectors(Un.min,Ha.min),Un.expandByPoint(on),on.addVectors(Un.max,Ha.max),Un.expandByPoint(on)):(Un.expandByPoint(Ha.min),Un.expandByPoint(Ha.max))}Un.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)on.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(on));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)on.fromBufferAttribute(o,l),c&&(Hr.fromBufferAttribute(e,l),on.add(Hr)),s=Math.max(s,n.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Dt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let I=0;I<n.count;I++)o[I]=new C,c[I]=new C;let l=new C,h=new C,d=new C,u=new fe,f=new fe,m=new fe,b=new C,g=new C;function p(I,S,y){l.fromBufferAttribute(n,I),h.fromBufferAttribute(n,S),d.fromBufferAttribute(n,y),u.fromBufferAttribute(r,I),f.fromBufferAttribute(r,S),m.fromBufferAttribute(r,y),h.sub(l),d.sub(l),f.sub(u),m.sub(u);let P=1/(f.x*m.y-m.x*f.y);isFinite(P)&&(b.copy(h).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(P),g.copy(d).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(P),o[I].add(b),o[S].add(b),o[y].add(b),c[I].add(g),c[S].add(g),c[y].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let I=0,S=v.length;I<S;++I){let y=v[I],P=y.start,D=y.count;for(let F=P,H=P+D;F<H;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let _=new C,x=new C,w=new C,E=new C;function R(I){w.fromBufferAttribute(s,I),E.copy(w);let S=o[I];_.copy(S),_.sub(w.multiplyScalar(w.dot(S))).normalize(),x.crossVectors(E,S);let P=x.dot(c[I])<0?-1:1;a.setXYZW(I,_.x,_.y,_.z,P)}for(let I=0,S=v.length;I<S;++I){let y=v[I],P=y.start,D=y.count;for(let F=P,H=P+D;F<H;F+=3)R(e.getX(F+0)),R(e.getX(F+1)),R(e.getX(F+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Dt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new C,r=new C,a=new C,o=new C,c=new C,l=new C,h=new C,d=new C;if(e)for(let u=0,f=e.count;u<f;u+=3){let m=e.getX(u+0),b=e.getX(u+1),g=e.getX(u+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,g),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,b),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)on.fromBufferAttribute(e,t),on.normalize(),e.setXYZ(t,on.x,on.y,on.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(c.length*h),f=0,m=0;for(let b=0,g=c.length;b<g;b++){o.isInterleavedBufferAttribute?f=c[b]*o.data.stride+o.offset:f=c[b]*h;for(let p=0;p<h;p++)u[m++]=l[f++]}return new Dt(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){let u=l[h],f=e(u,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){let f=l[d];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Lp=new Ce,Fs=new bs,Pc=new Rn,Dp=new C,Ic=new C,kc=new C,Lc=new C,Gd=new C,Dc=new C,Np=new C,Nc=new C,Ue=class extends kt{constructor(e=new _t,t=new vt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Dc.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],d=r[c];h!==0&&(Gd.fromBufferAttribute(d,e),a?Dc.addScaledVector(Gd,h):Dc.addScaledVector(Gd.sub(t),h))}t.add(Dc)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Pc.copy(n.boundingSphere),Pc.applyMatrix4(r),Fs.copy(e.ray).recast(e.near),!(Pc.containsPoint(Fs.origin)===!1&&(Fs.intersectSphere(Pc,Dp)===null||Fs.origin.distanceToSquared(Dp)>(e.far-e.near)**2))&&(Lp.copy(r).invert(),Fs.copy(e.ray).applyMatrix4(Lp),!(n.boundingBox!==null&&Fs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Fs)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,b=u.length;m<b;m++){let g=u[m],p=a[g.materialIndex],v=Math.max(g.start,f.start),_=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let x=v,w=_;x<w;x+=3){let E=o.getX(x),R=o.getX(x+1),I=o.getX(x+2);s=zc(this,p,e,n,l,h,d,E,R,I),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),b=Math.min(o.count,f.start+f.count);for(let g=m,p=b;g<p;g+=3){let v=o.getX(g),_=o.getX(g+1),x=o.getX(g+2);s=zc(this,a,e,n,l,h,d,v,_,x),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,b=u.length;m<b;m++){let g=u[m],p=a[g.materialIndex],v=Math.max(g.start,f.start),_=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let x=v,w=_;x<w;x+=3){let E=x,R=x+1,I=x+2;s=zc(this,p,e,n,l,h,d,E,R,I),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),b=Math.min(c.count,f.start+f.count);for(let g=m,p=b;g<p;g+=3){let v=g,_=g+1,x=g+2;s=zc(this,a,e,n,l,h,d,v,_,x),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};ia=class i extends _t{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],d=[],u=0,f=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,s,a,2),m("x","z","y",1,-1,e,n,-t,s,a,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new nt(l,3)),this.setAttribute("normal",new nt(h,3)),this.setAttribute("uv",new nt(d,2));function m(b,g,p,v,_,x,w,E,R,I,S){let y=x/R,P=w/I,D=x/2,F=w/2,H=E/2,X=R+1,W=I+1,ee=0,V=0,Z=new C;for(let le=0;le<W;le++){let Me=le*P-F;for(let Ve=0;Ve<X;Ve++){let ct=Ve*y-D;Z[b]=ct*v,Z[g]=Me*_,Z[p]=H,l.push(Z.x,Z.y,Z.z),Z[b]=0,Z[g]=0,Z[p]=E>0?1:-1,h.push(Z.x,Z.y,Z.z),d.push(Ve/R),d.push(1-le/I),ee+=1}}for(let le=0;le<I;le++)for(let Me=0;Me<R;Me++){let Ve=u+Me+X*le,ct=u+Me+X*(le+1),ft=u+(Me+1)+X*(le+1),et=u+(Me+1)+X*le;c.push(Ve,ct,et),c.push(ct,ft,et),V+=6}o.addGroup(f,V,S),f+=V,u+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};Sn={clone:or,merge:gn},Kb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,it=class extends mn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kb,this.fragmentShader=Jb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=or(e.uniforms),this.uniformsGroups=Yb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},so=class extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ce,this.projectionMatrix=new Ce,this.projectionMatrixInverse=new Ce,this.coordinateSystem=ai,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},gs=new C,zp=new fe,Up=new fe,Kt=class extends so{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=qs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ya*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qs*2*Math.atan(Math.tan(Ya*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){gs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(gs.x,gs.y).multiplyScalar(-e/gs.z),gs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gs.x,gs.y).multiplyScalar(-e/gs.z)}getViewSize(e,t){return this.getViewBounds(e,zp,Up),t.subVectors(Up,zp)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ya*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Vr=-90,Gr=1,tl=class extends kt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Kt(Vr,Gr,e,t);s.layers=this.layers,this.add(s);let r=new Kt(Vr,Gr,e,t);r.layers=this.layers,this.add(r);let a=new Kt(Vr,Gr,e,t);a.layers=this.layers,this.add(a);let o=new Kt(Vr,Gr,e,t);o.layers=this.layers,this.add(o);let c=new Kt(Vr,Gr,e,t);c.layers=this.layers,this.add(c);let l=new Kt(Vr,Gr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===ai)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===eo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},ro=class extends nn{constructor(e=[],t=sr,n,s,r,a,o,c,l,h){super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},nl=class extends qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ro(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ia(5,5,5),r=new it({name:"CubemapFromEquirect",uniforms:or(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:yn,blending:Qt});r.uniforms.tEquirect.value=t;let a=new Ue(s,r),o=t.minFilter;return t.minFilter===di&&(t.minFilter=_n),new tl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Et=class extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Zb={type:"move"},sa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Et,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Et,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Et,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let b of e.hand.values()){let g=t.getJointPose(b,n),p=this._getHandJoint(l,b);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,m=.005;l.inputState.pinching&&u>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Zb)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Et;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ao=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new re(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},oo=class extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new li,this.environmentIntensity=1,this.environmentRotation=new li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Xs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Jc,this.updateRanges=[],this.version=0,this.uuid=oi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=oi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=oi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},vn=new C,xs=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.applyMatrix4(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.applyNormalMatrix(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.transformDirection(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ri(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=pt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ri(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ri(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ri(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ri(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),s=pt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),s=pt(s,this.array),r=pt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Dt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ra=class extends mn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new re(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Va=new C,qr=new C,Xr=new C,jr=new fe,Ga=new fe,Bm=new Ce,Uc=new C,Wa=new C,Fc=new C,Fp=new fe,Wd=new fe,Op=new fe,co=class extends kt{constructor(e=new ra){if(super(),this.isSprite=!0,this.type="Sprite",Wr===void 0){Wr=new _t;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Xs(t,5);Wr.setIndex([0,1,2,0,2,3]),Wr.setAttribute("position",new xs(n,3,0,!1)),Wr.setAttribute("uv",new xs(n,2,3,!1))}this.geometry=Wr,this.material=e,this.center=new fe(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),qr.setFromMatrixScale(this.matrixWorld),Bm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Xr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&qr.multiplyScalar(-Xr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Oc(Uc.set(-.5,-.5,0),Xr,a,qr,s,r),Oc(Wa.set(.5,-.5,0),Xr,a,qr,s,r),Oc(Fc.set(.5,.5,0),Xr,a,qr,s,r),Fp.set(0,0),Wd.set(1,0),Op.set(1,1);let o=e.ray.intersectTriangle(Uc,Wa,Fc,!1,Va);if(o===null&&(Oc(Wa.set(-.5,.5,0),Xr,a,qr,s,r),Wd.set(0,1),o=e.ray.intersectTriangle(Uc,Fc,Wa,!1,Va),o===null))return;let c=e.ray.origin.distanceTo(Va);c<e.near||c>e.far||t.push({distance:c,point:Va.clone(),uv:Wi.getInterpolation(Va,Uc,Wa,Fc,Fp,Wd,Op,new fe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};Bp=new C,Hp=new ot,Vp=new ot,Qb=new C,Gp=new Ce,Bc=new C,qd=new Rn,Wp=new Ce,Xd=new bs,js=class extends Ue{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Zd,this.bindMatrix=new Ce,this.bindMatrixInverse=new Ce,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new On),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Bc),this.boundingBox.expandByPoint(Bc)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Rn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Bc),this.boundingSphere.expandByPoint(Bc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qd.copy(this.boundingSphere),qd.applyMatrix4(s),e.ray.intersectsSphere(qd)!==!1&&(Wp.copy(s).invert(),Xd.copy(e.ray).applyMatrix4(Wp),!(this.boundingBox!==null&&Xd.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Xd)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new ot,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Zd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Tm?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Hp.fromBufferAttribute(s.attributes.skinIndex,e),Vp.fromBufferAttribute(s.attributes.skinWeight,e),Bp.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=Vp.getComponent(r);if(a!==0){let o=Hp.getComponent(r);Gp.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Qb.copy(Bp).applyMatrix4(Gp),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},aa=class extends kt{constructor(){super(),this.isBone=!0,this.type="Bone"}},ji=class extends nn{constructor(e=null,t=1,n=1,s,r,a,o,c,l=Jt,h=Jt,d,u){super(null,a,o,c,l,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},qp=new Ce,ex=new Ce,lo=class i{constructor(e=[],t=[]){this.uuid=oi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ce)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ce;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:ex;qp.multiplyMatrices(o,t[r]),qp.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new ji(t,e,e,Mn,$n);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new aa),this.bones.push(a),this.boneInverses.push(new Ce().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},hi=class extends Dt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},$r=new Ce,Xp=new Ce,Hc=[],jp=new On,tx=new Ce,qa=new Ue,Xa=new Rn,$s=class extends Ue{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new hi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,tx)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new On),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,$r),jp.copy(e.boundingBox).applyMatrix4($r),this.boundingBox.union(jp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Rn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,$r),Xa.copy(e.boundingSphere).applyMatrix4($r),this.boundingSphere.union(Xa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(qa.geometry=this.geometry,qa.material=this.material,qa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xa.copy(this.boundingSphere),Xa.applyMatrix4(n),e.ray.intersectsSphere(Xa)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,$r),Xp.multiplyMatrices(n,$r),qa.matrixWorld=Xp,qa.raycast(e,Hc);for(let a=0,o=Hc.length;a<o;a++){let c=Hc[a];c.instanceId=r,c.object=this,t.push(c)}Hc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new hi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ji(new Float32Array(s*this.count),s,this.count,zl,$n));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},jd=new C,nx=new C,ix=new qe,bi=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=jd.subVectors(n,t).cross(nx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(jd),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ix.getNormalMatrix(e),s=this.coplanarPoint(jd).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Os=new Rn,sx=new fe(.5,.5),Vc=new C,oa=class{constructor(e=new bi,t=new bi,n=new bi,s=new bi,r=new bi,a=new bi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ai,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],d=r[5],u=r[6],f=r[7],m=r[8],b=r[9],g=r[10],p=r[11],v=r[12],_=r[13],x=r[14],w=r[15];if(s[0].setComponents(l-a,f-h,p-m,w-v).normalize(),s[1].setComponents(l+a,f+h,p+m,w+v).normalize(),s[2].setComponents(l+o,f+d,p+b,w+_).normalize(),s[3].setComponents(l-o,f-d,p-b,w-_).normalize(),n)s[4].setComponents(c,u,g,x).normalize(),s[5].setComponents(l-c,f-u,p-g,w-x).normalize();else if(s[4].setComponents(l-c,f-u,p-g,w-x).normalize(),t===ai)s[5].setComponents(l+c,f+u,p+g,w+x).normalize();else if(t===eo)s[5].setComponents(c,u,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Os.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Os.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Os)}intersectsSprite(e){Os.center.set(0,0,0);let t=sx.distanceTo(e.center);return Os.radius=.7071067811865476+t,Os.applyMatrix4(e.matrixWorld),this.intersectsSphere(Os)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Vc.x=s.normal.x>0?e.max.x:e.min.x,Vc.y=s.normal.y>0?e.max.y:e.min.y,Vc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Vc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},$i=class extends mn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},il=new C,sl=new C,$p=new Ce,ja=new bs,Gc=new Rn,$d=new C,Yp=new C,yi=class extends kt{constructor(e=new _t,t=new $i){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)il.fromBufferAttribute(t,s-1),sl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=il.distanceTo(sl);e.setAttribute("lineDistance",new nt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Gc.copy(n.boundingSphere),Gc.applyMatrix4(s),Gc.radius+=r,e.ray.intersectsSphere(Gc)===!1)return;$p.copy(s).invert(),ja.copy(e.ray).applyMatrix4($p);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let b=f,g=m-1;b<g;b+=l){let p=h.getX(b),v=h.getX(b+1),_=Wc(this,e,ja,c,p,v,b);_&&t.push(_)}if(this.isLineLoop){let b=h.getX(m-1),g=h.getX(f),p=Wc(this,e,ja,c,b,g,m-1);p&&t.push(p)}}else{let f=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let b=f,g=m-1;b<g;b+=l){let p=Wc(this,e,ja,c,b,b+1,b);p&&t.push(p)}if(this.isLineLoop){let b=Wc(this,e,ja,c,m-1,f,m-1);b&&t.push(b)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};Kp=new C,Jp=new C,ho=class extends yi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Kp.fromBufferAttribute(t,s),Jp.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Kp.distanceTo(Jp);e.setAttribute("lineDistance",new nt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},uo=class extends yi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},ca=class extends mn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Zp=new Ce,Qd=new bs,qc=new Rn,Xc=new C,fo=class extends kt{constructor(e=new _t,t=new ca){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qc.copy(n.boundingSphere),qc.applyMatrix4(s),qc.radius+=r,e.ray.intersectsSphere(qc)===!1)return;Zp.copy(s).invert(),Qd.copy(e.ray).applyMatrix4(Zp);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){let u=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let m=u,b=f;m<b;m++){let g=l.getX(m);Xc.fromBufferAttribute(d,g),Qp(Xc,g,c,s,e,t,this)}}else{let u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let m=u,b=f;m<b;m++)Xc.fromBufferAttribute(d,m),Qp(Xc,m,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};po=class extends nn{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ys=class extends nn{constructor(e,t,n=ys,s,r,a,o=Jt,c=Jt,l,h=Zr,d=1){if(h!==Zr&&h!==Ss)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ta(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},mo=class extends nn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Mi=class i extends _t{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],c=[],l=new C,h=new fe;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let f=n+d/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,c.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new nt(a,3)),this.setAttribute("normal",new nt(o,3)),this.setAttribute("uv",new nt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},vs=class i extends _t{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],m=0,b=[],g=n/2,p=0;v(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new nt(d,3)),this.setAttribute("normal",new nt(u,3)),this.setAttribute("uv",new nt(f,2));function v(){let x=new C,w=new C,E=0,R=(t-e)/n;for(let I=0;I<=r;I++){let S=[],y=I/r,P=y*(t-e)+e;for(let D=0;D<=s;D++){let F=D/s,H=F*c+o,X=Math.sin(H),W=Math.cos(H);w.x=P*X,w.y=-y*n+g,w.z=P*W,d.push(w.x,w.y,w.z),x.set(X,R,W).normalize(),u.push(x.x,x.y,x.z),f.push(F,1-y),S.push(m++)}b.push(S)}for(let I=0;I<s;I++)for(let S=0;S<r;S++){let y=b[S][I],P=b[S+1][I],D=b[S+1][I+1],F=b[S][I+1];(e>0||S!==0)&&(h.push(y,P,F),E+=3),(t>0||S!==r-1)&&(h.push(P,D,F),E+=3)}l.addGroup(p,E,0),p+=E}function _(x){let w=m,E=new fe,R=new C,I=0,S=x===!0?e:t,y=x===!0?1:-1;for(let D=1;D<=s;D++)d.push(0,g*y,0),u.push(0,y,0),f.push(.5,.5),m++;let P=m;for(let D=0;D<=s;D++){let H=D/s*c+o,X=Math.cos(H),W=Math.sin(H);R.x=S*W,R.y=g*y,R.z=S*X,d.push(R.x,R.y,R.z),u.push(0,y,0),E.x=X*.5+.5,E.y=W*.5*y+.5,f.push(E.x,E.y),m++}for(let D=0;D<s;D++){let F=w+D,H=P+D;x===!0?h.push(H,H+1,F):h.push(H+1,H,F),I+=3}l.addGroup(p,I,x===!0?1:2),p+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ks=class i extends vs{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},rl=class i extends _t{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new nt(r,3)),this.setAttribute("normal",new nt(r.slice(),3)),this.setAttribute("uv",new nt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let _=new C,x=new C,w=new C;for(let E=0;E<t.length;E+=3)f(t[E+0],_),f(t[E+1],x),f(t[E+2],w),c(_,x,w,v)}function c(v,_,x,w){let E=w+1,R=[];for(let I=0;I<=E;I++){R[I]=[];let S=v.clone().lerp(x,I/E),y=_.clone().lerp(x,I/E),P=E-I;for(let D=0;D<=P;D++)D===0&&I===E?R[I][D]=S:R[I][D]=S.clone().lerp(y,D/P)}for(let I=0;I<E;I++)for(let S=0;S<2*(E-I)-1;S++){let y=Math.floor(S/2);S%2===0?(u(R[I][y+1]),u(R[I+1][y]),u(R[I][y])):(u(R[I][y+1]),u(R[I+1][y+1]),u(R[I+1][y]))}}function l(v){let _=new C;for(let x=0;x<r.length;x+=3)_.x=r[x+0],_.y=r[x+1],_.z=r[x+2],_.normalize().multiplyScalar(v),r[x+0]=_.x,r[x+1]=_.y,r[x+2]=_.z}function h(){let v=new C;for(let _=0;_<r.length;_+=3){v.x=r[_+0],v.y=r[_+1],v.z=r[_+2];let x=g(v)/2/Math.PI+.5,w=p(v)/Math.PI+.5;a.push(x,1-w)}m(),d()}function d(){for(let v=0;v<a.length;v+=6){let _=a[v+0],x=a[v+2],w=a[v+4],E=Math.max(_,x,w),R=Math.min(_,x,w);E>.9&&R<.1&&(_<.2&&(a[v+0]+=1),x<.2&&(a[v+2]+=1),w<.2&&(a[v+4]+=1))}}function u(v){r.push(v.x,v.y,v.z)}function f(v,_){let x=v*3;_.x=e[x+0],_.y=e[x+1],_.z=e[x+2]}function m(){let v=new C,_=new C,x=new C,w=new C,E=new fe,R=new fe,I=new fe;for(let S=0,y=0;S<r.length;S+=9,y+=6){v.set(r[S+0],r[S+1],r[S+2]),_.set(r[S+3],r[S+4],r[S+5]),x.set(r[S+6],r[S+7],r[S+8]),E.set(a[y+0],a[y+1]),R.set(a[y+2],a[y+3]),I.set(a[y+4],a[y+5]),w.copy(v).add(_).add(x).divideScalar(3);let P=g(w);b(E,y+0,v,P),b(R,y+2,_,P),b(I,y+4,x,P)}}function b(v,_,x,w){w<0&&v.x===1&&(a[_]=v.x-1),x.x===0&&x.z===0&&(a[_]=w/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},Js=class i extends rl{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Bn=class i extends _t{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,d=e/o,u=t/c,f=[],m=[],b=[],g=[];for(let p=0;p<h;p++){let v=p*u-a;for(let _=0;_<l;_++){let x=_*d-r;m.push(x,-v,0),b.push(0,0,1),g.push(_/o),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<o;v++){let _=v+l*p,x=v+l*(p+1),w=v+1+l*(p+1),E=v+1+l*p;f.push(_,x,E),f.push(x,w,E)}this.setIndex(f),this.setAttribute("position",new nt(m,3)),this.setAttribute("normal",new nt(b,3)),this.setAttribute("uv",new nt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},_s=class i extends _t{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],c=[],l=[],h=[],d=e,u=(t-e)/s,f=new C,m=new fe;for(let b=0;b<=s;b++){for(let g=0;g<=n;g++){let p=r+g/n*a;f.x=d*Math.cos(p),f.y=d*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,h.push(m.x,m.y)}d+=u}for(let b=0;b<s;b++){let g=b*(n+1);for(let p=0;p<n;p++){let v=p+g,_=v,x=v+n+1,w=v+n+2,E=v+1;o.push(_,x,E),o.push(x,w,E)}}this.setIndex(o),this.setAttribute("position",new nt(c,3)),this.setAttribute("normal",new nt(l,3)),this.setAttribute("uv",new nt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Zs=class i extends _t{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],d=new C,u=new C,f=[],m=[],b=[],g=[];for(let p=0;p<=n;p++){let v=[],_=p/n,x=0;p===0&&a===0?x=.5/t:p===n&&c===Math.PI&&(x=-.5/t);for(let w=0;w<=t;w++){let E=w/t;d.x=-e*Math.cos(s+E*r)*Math.sin(a+_*o),d.y=e*Math.cos(a+_*o),d.z=e*Math.sin(s+E*r)*Math.sin(a+_*o),m.push(d.x,d.y,d.z),u.copy(d).normalize(),b.push(u.x,u.y,u.z),g.push(E+x,1-_),v.push(l++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){let _=h[p][v+1],x=h[p][v],w=h[p+1][v],E=h[p+1][v+1];(p!==0||a>0)&&f.push(_,x,E),(p!==n-1||c<Math.PI)&&f.push(x,w,E)}this.setIndex(f),this.setAttribute("position",new nt(m,3)),this.setAttribute("normal",new nt(b,3)),this.setAttribute("uv",new nt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Qs=class i extends _t{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],c=[],l=[],h=new C,d=new C,u=new C;for(let f=0;f<=n;f++)for(let m=0;m<=s;m++){let b=m/s*r,g=f/n*Math.PI*2;d.x=(e+t*Math.cos(g))*Math.cos(b),d.y=(e+t*Math.cos(g))*Math.sin(b),d.z=t*Math.sin(g),o.push(d.x,d.y,d.z),h.x=e*Math.cos(b),h.y=e*Math.sin(b),u.subVectors(d,h).normalize(),c.push(u.x,u.y,u.z),l.push(m/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=s;m++){let b=(s+1)*f+m-1,g=(s+1)*(f-1)+m-1,p=(s+1)*(f-1)+m,v=(s+1)*f+m;a.push(b,g,v),a.push(g,p,v)}this.setIndex(a),this.setAttribute("position",new nt(o,3)),this.setAttribute("normal",new nt(c,3)),this.setAttribute("uv",new nt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},go=class extends it{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Xt=class extends mn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bh,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Cn=class extends Xt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new fe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ke(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},bo=class extends mn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bh,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},al=class extends mn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Am,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ol=class extends mn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};Yi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break t}a=t.length;break n}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},cl=class extends Yi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Bs,endingEnd:Bs}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Hs:r=e,o=2*t-n;break;case Ja:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Hs:a=e,c=2*n-t;break;case Ja:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,m=(n-t)/(s-t),b=m*m,g=b*m,p=-u*g+2*u*b-u*m,v=(1+u)*g+(-1.5-2*u)*b+(-.5+u)*m+1,_=(-1-f)*g+(1.5+f)*b+.5*m,x=f*g-f*b;for(let w=0;w!==o;++w)r[w]=p*a[h+w]+v*a[l+w]+_*a[c+w]+x*a[d+w];return r}},xo=class extends Yi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(s-t),d=1-h;for(let u=0;u!==o;++u)r[u]=a[l+u]*d+a[c+u]*h;return r}},ll=class extends Yi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Pn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=jc(t,this.TimeBufferType),this.values=jc(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:jc(e.times,Array),values:jc(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ll(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new xo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new cl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Gs:t=this.InterpolantFactoryMethodDiscrete;break;case Ws:t=this.InterpolantFactoryMethodLinear;break;case $c:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Gs;case this.InterpolantFactoryMethodLinear:return Ws;case this.InterpolantFactoryMethodSmooth:return $c}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&rx(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===$c,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let d=o*n,u=d-n,f=d+n;for(let m=0;m!==n;++m){let b=t[d+m];if(b!==t[u+m]||b!==t[f+m]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Pn.prototype.ValueTypeName="";Pn.prototype.TimeBufferType=Float32Array;Pn.prototype.ValueBufferType=Float32Array;Pn.prototype.DefaultInterpolation=Ws;Ki=class extends Pn{constructor(e,t,n){super(e,t,n)}};Ki.prototype.ValueTypeName="bool";Ki.prototype.ValueBufferType=Array;Ki.prototype.DefaultInterpolation=Gs;Ki.prototype.InterpolantFactoryMethodLinear=void 0;Ki.prototype.InterpolantFactoryMethodSmooth=void 0;vo=class extends Pn{constructor(e,t,n,s){super(e,t,n,s)}};vo.prototype.ValueTypeName="color";Si=class extends Pn{constructor(e,t,n,s){super(e,t,n,s)}};Si.prototype.ValueTypeName="number";hl=class extends Yi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)hn.slerpFlat(r,0,a,l-o,a,l,c);return r}},Ti=class extends Pn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new hl(this.times,this.values,this.getValueSize(),e)}};Ti.prototype.ValueTypeName="quaternion";Ti.prototype.InterpolantFactoryMethodSmooth=void 0;Ji=class extends Pn{constructor(e,t,n){super(e,t,n)}};Ji.prototype.ValueTypeName="string";Ji.prototype.ValueBufferType=Array;Ji.prototype.DefaultInterpolation=Gs;Ji.prototype.InterpolantFactoryMethodLinear=void 0;Ji.prototype.InterpolantFactoryMethodSmooth=void 0;wi=class extends Pn{constructor(e,t,n,s){super(e,t,n,s)}};wi.prototype.ValueTypeName="vector";er=class{constructor(e="",t=-1,n=[],s=gh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=oi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(cx(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(Pn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let h=ax(c);c=em(c,1,h),l=em(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new Si(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(r);if(h&&h.length>1){let d=h[1],u=s[d];u||(s[d]=u=[]),u.push(l)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(d,u,f,m,b){if(f.length!==0){let g=[],p=[];Hm(f,g,p,m),g.length!==0&&b.push(new d(u,g,p))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let d=0;d<l.length;d++){let u=l[d].keys;if(!(!u||u.length===0))if(u[0].morphTargets){let f={},m;for(m=0;m<u.length;m++)if(u[m].morphTargets)for(let b=0;b<u[m].morphTargets.length;b++)f[u[m].morphTargets[b]]=-1;for(let b in f){let g=[],p=[];for(let v=0;v!==u[m].morphTargets.length;++v){let _=u[m];g.push(_.time),p.push(_.morphTarget===b?1:0)}s.push(new Si(".morphTargetInfluence["+b+"]",g,p))}c=f.length*a}else{let f=".bones["+t[d].name+"]";n(wi,f+".position",u,"pos",s),n(Ti,f+".quaternion",u,"rot",s),n(wi,f+".scale",u,"scl",s)}}return s.length===0?null:new this(r,c,s,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};vi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},dl=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){let f=l[d],m=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Vm=new dl,Ei=class{constructor(e){this.manager=e!==void 0?e:Vm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ei.DEFAULT_MATERIAL_NAME="__DEFAULT";Gi={},eu=class extends Error{constructor(e,t){super(e),this.response=t}},la=class extends Ei{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=vi.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Gi[e]!==void 0){Gi[e].push({onLoad:t,onProgress:n,onError:s});return}Gi[e]=[],Gi[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=Gi[e],d=l.body.getReader(),u=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=u?parseInt(u):0,m=f!==0,b=0,g=new ReadableStream({start(p){v();function v(){d.read().then(({done:_,value:x})=>{if(_)p.close();else{b+=x.byteLength;let w=new ProgressEvent("progress",{lengthComputable:m,loaded:b,total:f});for(let E=0,R=h.length;E<R;E++){let I=h[E];I.onProgress&&I.onProgress(w)}p.enqueue(x),v()}},_=>{p.error(_)})}}});return new Response(g)}else throw new eu(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{let d=/charset="?([^;"\s]*)"?/i.exec(o),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return l.arrayBuffer().then(m=>f.decode(m))}}}).then(l=>{vi.add(`file:${e}`,l);let h=Gi[e];delete Gi[e];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=Gi[e];if(h===void 0)throw this.manager.itemError(e),l;delete Gi[e];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},Yr=new WeakMap,ul=class extends Ei{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=vi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let d=Yr.get(a);d===void 0&&(d=[],Yr.set(a,d)),d.push({onLoad:t,onError:s})}return a}let o=Qr("img");function c(){h(),t&&t(this);let d=Yr.get(this)||[];for(let u=0;u<d.length;u++){let f=d[u];f.onLoad&&f.onLoad(this)}Yr.delete(this),r.manager.itemEnd(e)}function l(d){h(),s&&s(d),vi.remove(`image:${e}`);let u=Yr.get(this)||[];for(let f=0;f<u.length;f++){let m=u[f];m.onError&&m.onError(d)}Yr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),vi.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}},_o=class extends Ei{constructor(e){super(e)}load(e,t,n,s){let r=new nn,a=new ul(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},tr=class extends kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},yo=class extends tr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new re(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Yd=new Ce,tm=new C,nm=new C,Mo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new fe(512,512),this.mapType=Vn,this.map=null,this.mapPass=null,this.matrix=new Ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new oa,this._frameExtents=new fe(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;tm.setFromMatrixPosition(e.matrixWorld),t.position.copy(tm),nm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(nm),t.updateMatrixWorld(),Yd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yd,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Yd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},tu=class extends Mo{constructor(){super(new Kt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=qs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},So=class extends tr{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new tu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},im=new Ce,$a=new C,Kd=new C,nu=class extends Mo{constructor(){super(new Kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new fe(4,2),this._viewportCount=6,this._viewports=[new ot(2,1,1,1),new ot(0,1,1,1),new ot(3,1,1,1),new ot(1,1,1,1),new ot(3,0,1,1),new ot(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),$a.setFromMatrixPosition(e.matrixWorld),n.position.copy($a),Kd.copy(n.position),Kd.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Kd),n.updateMatrixWorld(),s.makeTranslation(-$a.x,-$a.y,-$a.z),im.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(im,n.coordinateSystem,n.reversedDepth)}},Hn=class extends tr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new nu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Zi=class extends so{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},iu=class extends Mo{constructor(){super(new Zi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},nr=class extends tr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.shadow=new iu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Qi=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Jd=new WeakMap,To=class extends Ei{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=vi.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{if(Jd.has(a)===!0)s&&s(Jd.get(a)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(l),r.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return vi.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),Jd.set(c,l),vi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});vi.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},fl=class extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},wo=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}},pl=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,a;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,s=this.valueSize,r=e*s+s,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==s;++o)n[r+o]=n[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(n,r,0,o,s)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let c=t*this._origIndex;this._mixBufferRegion(n,s,c,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){o.setValue(n,s);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,a=s;r!==a;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,s){hn.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){let a=this._workIndex*r;hn.multiplyQuaternionsFlat(e,a,e,t,e,n),hn.slerpFlat(e,t,e,t,e,a,s)}_lerp(e,t,n,s,r){let a=1-s;for(let o=0;o!==r;++o){let c=t+o;e[c]=e[c]*a+e[n+o]*s}}_lerpAdditive(e,t,n,s,r){for(let a=0;a!==r;++a){let o=t+a;e[o]=e[o]+e[n+a]*s}}},Ru="\\[\\]\\.:\\/",lx=new RegExp("["+Ru+"]","g"),Cu="[^"+Ru+"]",hx="[^"+Ru.replace("\\.","")+"]",dx=/((?:WC+[\/:])*)/.source.replace("WC",Cu),ux=/(WCOD+)?/.source.replace("WCOD",hx),fx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Cu),px=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Cu),mx=new RegExp("^"+dx+ux+fx+px+"$"),gx=["material","materials","bones","map"],su=class{constructor(e,t,n){let s=n||xt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},xt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(lx,"")}static parseTrackName(e){let t=mx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);gx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};xt.Composite=su;xt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xt.prototype.GetterByBindingType=[xt.prototype._getValue_direct,xt.prototype._getValue_array,xt.prototype._getValue_arrayElement,xt.prototype._getValue_toArray];xt.prototype.SetterByBindingTypeAndVersioning=[[xt.prototype._setValue_direct,xt.prototype._setValue_direct_setNeedsUpdate,xt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_array,xt.prototype._setValue_array_setNeedsUpdate,xt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_arrayElement,xt.prototype._setValue_arrayElement_setNeedsUpdate,xt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_fromArray,xt.prototype._setValue_fromArray_setNeedsUpdate,xt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];ml=class{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;let r=t.tracks,a=r.length,o=new Array(a),c={endingStart:Bs,endingEnd:Bs};for(let l=0;l!==a;++l){let h=r[l].createInterpolant(null);o[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=mh,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let s=this._clip.duration,r=e._clip.duration,a=r/s,o=s/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let s=this._mixer,r=s.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=s._lendControlInterpolant(),this._timeScaleInterpolant=o);let c=o.parameterPositions,l=o.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/a,l[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Em:for(let h=0,d=c.length;h!==d;++h)c[h].evaluate(a),l[h].accumulateAdditive(o);break;case gh:default:for(let h=0,d=c.length;h!==d;++h)c[h].evaluate(a),l[h].accumulate(s,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,s=this.time+e,r=this._loopCount,a=n===wm;if(e===0)return r===-1?s:a&&(r&1)===1?t-s:s;if(n===ph){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),s>=t||s<0){let o=Math.floor(s/t);s-=t*o,r+=Math.abs(o);let c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=s;if(a&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){let s=this._interpolantSettings;n?(s.endingStart=Hs,s.endingEnd=Hs):(e?s.endingStart=this.zeroSlopeAtStart?Hs:Bs:s.endingStart=Ja,t?s.endingEnd=this.zeroSlopeAtEnd?Hs:Bs:s.endingEnd=Ja)}_scheduleFading(e,t,n){let s=this._mixer,r=s.time,a=this._weightInterpolant;a===null&&(a=s._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,c=a.sampleValues;return o[0]=r,c[0]=t,o[1]=r+e,c[1]=n,this}},bx=new Float32Array(1),Eo=class extends _i{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,a=e._propertyBindings,o=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName,h=l[c];h===void 0&&(h={},l[c]=h);for(let d=0;d!==r;++d){let u=s[d],f=u.name,m=h[f];if(m!==void 0)++m.referenceCount,a[d]=m;else{if(m=a[d],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,c,f));continue}let b=t&&t._propertyBindings[d].binding.parsedPath;m=new pl(xt.create(n,f,b),u.ValueTypeName,u.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,c,f),a[d]=m}o[d].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let s=this._actions,r=this._actionsByClip,a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=s.length,s.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,a=this._actionsByClip,o=a[r],c=o.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;let d=o.actionByRoot,u=(e._localRoot||this._root).uuid;delete d[u],c.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let s=this._bindingsByRootAndName,r=this._bindings,a=s[t];a===void 0&&(a={},s[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[s],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[s]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new xo(new Float32Array(2),new Float32Array(2),1,bx),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let s=t||this._root,r=s.uuid,a=typeof e=="string"?er.findByName(s,e):e,o=a!==null?a.uuid:e,c=this._actionsByClip[o],l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=gh),c!==void 0){let d=c.actionByRoot[r];if(d!==void 0&&d.blendMode===n)return d;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;let h=new ml(this,a,t,n);return this._bindAction(h,l),this._addInactiveAction(h,o,r),h}existingAction(e,t){let n=t||this._root,s=n.uuid,r=typeof e=="string"?er.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[s]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(s,e,r,a);let o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){let a=r.knownActions;for(let o=0,c=a.length;o!==c;++o){let l=a[o];this._deactivateAction(l);let h=l._cacheIndex,d=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,d._cacheIndex=h,t[h]=d,t.pop(),this._removeInactiveBindingsForAction(l)}delete s[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(let a in r){let o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}},sm=new Ce,Ao=class{constructor(e,t,n=0,s=1/0){this.ray=new bs(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new na,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return sm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(sm),this}intersectObject(e,t=!0,n=[]){return ru(e,this,n,t),n.sort(rm),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)ru(e[s],this,n,t);return n.sort(rm),n}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180")});function u0(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function _x(i){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,d=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){let h=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,h);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){let m=d[u],b=d[f];b.start<=m.start+m.count+1?m.count=Math.max(m.count,b.start+b.count-m.start):(++u,d[u]=b)}d.length=u+1;for(let f=0,m=d.length;f<m;f++){let b=d[f];i.bufferSubData(l,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}function ty(i,e,t,n,s,r,a){let o=new re(0),c=r===!0?0:1,l,h,d=null,u=0,f=null;function m(_){let x=_.isScene===!0?_.background:null;return x&&x.isTexture&&(x=(_.backgroundBlurriness>0?t:e).get(x)),x}function b(_){let x=!1,w=m(_);w===null?p(o,c):w&&w.isColor&&(p(w,1),x=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(_,x){let w=m(x);w&&(w.isCubeTexture||w.mapping===Po)?(h===void 0&&(h=new Ue(new ia(1,1,1),new it({name:"BackgroundCubeMaterial",uniforms:or(Ri.backgroundCube.uniforms),vertexShader:Ri.backgroundCube.vertexShader,fragmentShader:Ri.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,R,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),cr.copy(x.backgroundRotation),cr.x*=-1,cr.y*=-1,cr.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(cr.y*=-1,cr.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(ey.makeRotationFromEuler(cr)),h.material.toneMapped=je.getTransfer(w.colorSpace)!==lt,(d!==w||u!==w.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,d=w,u=w.version,f=i.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new Ue(new Bn(2,2),new it({name:"BackgroundMaterial",uniforms:or(Ri.background.uniforms),vertexShader:Ri.background.vertexShader,fragmentShader:Ri.background.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=je.getTransfer(w.colorSpace)!==lt,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(d!==w||u!==w.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,d=w,u=w.version,f=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function p(_,x){_.getRGB(xh,Au(i)),n.buffers.color.setClear(xh.r,xh.g,xh.b,x,a)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,x=1){o.set(_),c=x,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,p(o,c)},render:b,addToRenderList:g,dispose:v}}function ny(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(y,P,D,F,H){let X=!1,W=d(F,D,P);r!==W&&(r=W,l(r.object)),X=f(y,F,D,H),X&&m(y,F,D,H),H!==null&&e.update(H,i.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,x(y,P,D,F),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function d(y,P,D){let F=D.wireframe===!0,H=n[y.id];H===void 0&&(H={},n[y.id]=H);let X=H[P.id];X===void 0&&(X={},H[P.id]=X);let W=X[F];return W===void 0&&(W=u(c()),X[F]=W),W}function u(y){let P=[],D=[],F=[];for(let H=0;H<t;H++)P[H]=0,D[H]=0,F[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:D,attributeDivisors:F,object:y,attributes:{},index:null}}function f(y,P,D,F){let H=r.attributes,X=P.attributes,W=0,ee=D.getAttributes();for(let V in ee)if(ee[V].location>=0){let le=H[V],Me=X[V];if(Me===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(Me=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(Me=y.instanceColor)),le===void 0||le.attribute!==Me||Me&&le.data!==Me.data)return!0;W++}return r.attributesNum!==W||r.index!==F}function m(y,P,D,F){let H={},X=P.attributes,W=0,ee=D.getAttributes();for(let V in ee)if(ee[V].location>=0){let le=X[V];le===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(le=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(le=y.instanceColor));let Me={};Me.attribute=le,le&&le.data&&(Me.data=le.data),H[V]=Me,W++}r.attributes=H,r.attributesNum=W,r.index=F}function b(){let y=r.newAttributes;for(let P=0,D=y.length;P<D;P++)y[P]=0}function g(y){p(y,0)}function p(y,P){let D=r.newAttributes,F=r.enabledAttributes,H=r.attributeDivisors;D[y]=1,F[y]===0&&(i.enableVertexAttribArray(y),F[y]=1),H[y]!==P&&(i.vertexAttribDivisor(y,P),H[y]=P)}function v(){let y=r.newAttributes,P=r.enabledAttributes;for(let D=0,F=P.length;D<F;D++)P[D]!==y[D]&&(i.disableVertexAttribArray(D),P[D]=0)}function _(y,P,D,F,H,X,W){W===!0?i.vertexAttribIPointer(y,P,D,H,X):i.vertexAttribPointer(y,P,D,F,H,X)}function x(y,P,D,F){b();let H=F.attributes,X=D.getAttributes(),W=P.defaultAttributeValues;for(let ee in X){let V=X[ee];if(V.location>=0){let Z=H[ee];if(Z===void 0&&(ee==="instanceMatrix"&&y.instanceMatrix&&(Z=y.instanceMatrix),ee==="instanceColor"&&y.instanceColor&&(Z=y.instanceColor)),Z!==void 0){let le=Z.normalized,Me=Z.itemSize,Ve=e.get(Z);if(Ve===void 0)continue;let ct=Ve.buffer,ft=Ve.type,et=Ve.bytesPerElement,j=ft===i.INT||ft===i.UNSIGNED_INT||Z.gpuType===Ll;if(Z.isInterleavedBufferAttribute){let Y=Z.data,ue=Y.stride,Re=Z.offset;if(Y.isInstancedInterleavedBuffer){for(let be=0;be<V.locationSize;be++)p(V.location+be,Y.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let be=0;be<V.locationSize;be++)g(V.location+be);i.bindBuffer(i.ARRAY_BUFFER,ct);for(let be=0;be<V.locationSize;be++)_(V.location+be,Me/V.locationSize,ft,le,ue*et,(Re+Me/V.locationSize*be)*et,j)}else{if(Z.isInstancedBufferAttribute){for(let Y=0;Y<V.locationSize;Y++)p(V.location+Y,Z.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Y=0;Y<V.locationSize;Y++)g(V.location+Y);i.bindBuffer(i.ARRAY_BUFFER,ct);for(let Y=0;Y<V.locationSize;Y++)_(V.location+Y,Me/V.locationSize,ft,le,Me*et,Me/V.locationSize*Y*et,j)}}else if(W!==void 0){let le=W[ee];if(le!==void 0)switch(le.length){case 2:i.vertexAttrib2fv(V.location,le);break;case 3:i.vertexAttrib3fv(V.location,le);break;case 4:i.vertexAttrib4fv(V.location,le);break;default:i.vertexAttrib1fv(V.location,le)}}}}v()}function w(){I();for(let y in n){let P=n[y];for(let D in P){let F=P[D];for(let H in F)h(F[H].object),delete F[H];delete P[D]}delete n[y]}}function E(y){if(n[y.id]===void 0)return;let P=n[y.id];for(let D in P){let F=P[D];for(let H in F)h(F[H].object),delete F[H];delete P[D]}delete n[y.id]}function R(y){for(let P in n){let D=n[P];if(D[y.id]===void 0)continue;let F=D[y.id];for(let H in F)h(F[H].object),delete F[H];delete D[y.id]}}function I(){S(),a=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:S,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfProgram:R,initAttributes:b,enableAttribute:g,disableUnusedAttributes:v}}function iy(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function a(l,h,d){d!==0&&(i.drawArraysInstanced(n,l,h,d),t.update(h,n,d))}function o(l,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let f=0;for(let m=0;m<d;m++)f+=h[m];t.update(f,n,1)}function c(l,h,d,u){if(d===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<l.length;m++)a(l[m],h[m],u[m]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,u,0,d);let m=0;for(let b=0;b<d;b++)m+=h[b]*u[b];t.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function sy(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==Mn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let I=R===un&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Vn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==$n&&!I)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=m>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:b,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:w,maxSamples:E}}function ry(i){let e=this,t=null,n=0,s=!1,r=!1,a=new bi,o=new qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let m=d.clippingPlanes,b=d.clipIntersection,g=d.clipShadows,p=i.get(d);if(!s||m===null||m.length===0||r&&!g)r?h(null):l();else{let v=r?0:n,_=v*4,x=p.clippingState||null;c.value=x,x=h(m,u,_,f);for(let w=0;w!==_;++w)x[w]=t[w];p.clippingState=x,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,m){let b=d!==null?d.length:0,g=null;if(b!==0){if(g=c.value,m!==!0||g===null){let p=f+b*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let _=0,x=f;_!==b;++_,x+=4)a.copy(d[_]).applyMatrix4(v,o),a.normal.toArray(g,x),g[x+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,g}}function ay(i){let e=new WeakMap;function t(a,o){return o===Pl?a.mapping=sr:o===Il&&(a.mapping=rr),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Pl||o===Il)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new nl(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}function cy(i){let e=[],t=[],n=[],s=i,r=i-ga+1+Gm.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let c=1/o;a>i-ga?c=Gm[a-i+ga-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,m=6,b=3,g=2,p=1,v=new Float32Array(b*m*f),_=new Float32Array(g*m*f),x=new Float32Array(p*m*f);for(let E=0;E<f;E++){let R=E%3*2/3-1,I=E>2?0:-1,S=[R,I,0,R+2/3,I,0,R+2/3,I+1,0,R,I,0,R+2/3,I+1,0,R,I+1,0];v.set(S,b*m*E),_.set(u,g*m*E);let y=[E,E,E,E,E,E];x.set(y,p*m*E)}let w=new _t;w.setAttribute("position",new Dt(v,b)),w.setAttribute("uv",new Dt(_,g)),w.setAttribute("faceIndex",new Dt(x,p)),e.push(w),s>ga&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Xm(i,e,t){let n=new qt(i,e,t);return n.texture.mapping=Po,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function vh(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function ly(i,e,t){let n=new Float32Array(dr),s=new C(0,1,0);return new it({name:"SphericalGaussianBlur",defines:{n:dr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Xu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Qt,depthTest:!1,depthWrite:!1})}function jm(){return new it({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Qt,depthTest:!1,depthWrite:!1})}function $m(){return new it({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qt,depthTest:!1,depthWrite:!1})}function Xu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function hy(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===Pl||c===Il,h=c===sr||c===rr;if(l||h){let d=e.get(o),u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new yh(i)),d=l?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{let f=o.image;return l&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new yh(i)),d=l?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function dy(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&ea("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function uy(i,e,t,n){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let m in u.attributes)e.remove(u.attributes[m]);u.removeEventListener("dispose",a),delete s[u.id];let f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function c(d){let u=d.attributes;for(let f in u)e.update(u[f],i.ARRAY_BUFFER)}function l(d){let u=[],f=d.index,m=d.attributes.position,b=0;if(f!==null){let v=f.array;b=f.version;for(let _=0,x=v.length;_<x;_+=3){let w=v[_+0],E=v[_+1],R=v[_+2];u.push(w,E,E,R,R,w)}}else if(m!==void 0){let v=m.array;b=m.version;for(let _=0,x=v.length/3-1;_<x;_+=3){let w=_+0,E=_+1,R=_+2;u.push(w,E,E,R,R,w)}}else return;let g=new(Eu(u)?io:no)(u,1);g.version=b;let p=r.get(d);p&&e.remove(p),r.set(d,g)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function fy(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function c(u,f){i.drawElements(n,f,r,u*a),t.update(f,n,1)}function l(u,f,m){m!==0&&(i.drawElementsInstanced(n,f,r,u*a,m),t.update(f,n,m))}function h(u,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];t.update(g,n,1)}function d(u,f,m,b){if(m===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<u.length;p++)l(u[p]/a,f[p],b[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,u,0,b,0,m);let p=0;for(let v=0;v<m;v++)p+=f[v]*b[v];t.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function py(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function my(i,e,t){let n=new WeakMap,s=new ot;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let S=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",S)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],_=0;f===!0&&(_=1),m===!0&&(_=2),b===!0&&(_=3);let x=o.attributes.position.count*_,w=1;x>e.maxTextureSize&&(w=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let E=new Float32Array(x*w*4*d),R=new to(E,x,w,d);R.type=$n,R.needsUpdate=!0;let I=_*4;for(let y=0;y<d;y++){let P=g[y],D=p[y],F=v[y],H=x*w*4*y;for(let X=0;X<P.count;X++){let W=X*I;f===!0&&(s.fromBufferAttribute(P,X),E[H+W+0]=s.x,E[H+W+1]=s.y,E[H+W+2]=s.z,E[H+W+3]=0),m===!0&&(s.fromBufferAttribute(D,X),E[H+W+4]=s.x,E[H+W+5]=s.y,E[H+W+6]=s.z,E[H+W+7]=0),b===!0&&(s.fromBufferAttribute(F,X),E[H+W+8]=s.x,E[H+W+9]=s.y,E[H+W+10]=s.z,E[H+W+11]=F.itemSize===4?s.w:1)}}u={count:d,texture:R,size:new fe(x,w)},n.set(o,u),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let b=0;b<l.length;b++)f+=l[b];let m=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function gy(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,d=e.get(c,h);if(s.get(d)!==l&&(e.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let u=c.skeleton;s.get(u)!==l&&(u.update(),s.set(u,l))}return d}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}function xa(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Km[s];if(r===void 0&&(r=new Float32Array(s),Km[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function sn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function rn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Sh(i,e){let t=Jm[e];t===void 0&&(t=new Int32Array(e),Jm[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function by(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function xy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2fv(this.addr,e),rn(t,e)}}function vy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(sn(t,e))return;i.uniform3fv(this.addr,e),rn(t,e)}}function _y(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4fv(this.addr,e),rn(t,e)}}function yy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,n))return;e0.set(n),i.uniformMatrix2fv(this.addr,!1,e0),rn(t,n)}}function My(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,n))return;Qm.set(n),i.uniformMatrix3fv(this.addr,!1,Qm),rn(t,n)}}function Sy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,n))return;Zm.set(n),i.uniformMatrix4fv(this.addr,!1,Zm),rn(t,n)}}function Ty(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function wy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2iv(this.addr,e),rn(t,e)}}function Ey(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;i.uniform3iv(this.addr,e),rn(t,e)}}function Ay(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4iv(this.addr,e),rn(t,e)}}function Ry(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Cy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2uiv(this.addr,e),rn(t,e)}}function Py(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;i.uniform3uiv(this.addr,e),rn(t,e)}}function Iy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4uiv(this.addr,e),rn(t,e)}}function ky(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ym.compareFunction=Mu,r=Ym):r=f0,t.setTexture2D(e||r,s)}function Ly(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||m0,s)}function Dy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||g0,s)}function Ny(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||p0,s)}function zy(i){switch(i){case 5126:return by;case 35664:return xy;case 35665:return vy;case 35666:return _y;case 35674:return yy;case 35675:return My;case 35676:return Sy;case 5124:case 35670:return Ty;case 35667:case 35671:return wy;case 35668:case 35672:return Ey;case 35669:case 35673:return Ay;case 5125:return Ry;case 36294:return Cy;case 36295:return Py;case 36296:return Iy;case 35678:case 36198:case 36298:case 36306:case 35682:return ky;case 35679:case 36299:case 36307:return Ly;case 35680:case 36300:case 36308:case 36293:return Dy;case 36289:case 36303:case 36311:case 36292:return Ny}}function Uy(i,e){i.uniform1fv(this.addr,e)}function Fy(i,e){let t=xa(e,this.size,2);i.uniform2fv(this.addr,t)}function Oy(i,e){let t=xa(e,this.size,3);i.uniform3fv(this.addr,t)}function By(i,e){let t=xa(e,this.size,4);i.uniform4fv(this.addr,t)}function Hy(i,e){let t=xa(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Vy(i,e){let t=xa(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Gy(i,e){let t=xa(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Wy(i,e){i.uniform1iv(this.addr,e)}function qy(i,e){i.uniform2iv(this.addr,e)}function Xy(i,e){i.uniform3iv(this.addr,e)}function jy(i,e){i.uniform4iv(this.addr,e)}function $y(i,e){i.uniform1uiv(this.addr,e)}function Yy(i,e){i.uniform2uiv(this.addr,e)}function Ky(i,e){i.uniform3uiv(this.addr,e)}function Jy(i,e){i.uniform4uiv(this.addr,e)}function Zy(i,e,t){let n=this.cache,s=e.length,r=Sh(t,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||f0,r[a])}function Qy(i,e,t){let n=this.cache,s=e.length,r=Sh(t,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||m0,r[a])}function e1(i,e,t){let n=this.cache,s=e.length,r=Sh(t,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||g0,r[a])}function t1(i,e,t){let n=this.cache,s=e.length,r=Sh(t,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||p0,r[a])}function n1(i){switch(i){case 5126:return Uy;case 35664:return Fy;case 35665:return Oy;case 35666:return By;case 35674:return Hy;case 35675:return Vy;case 35676:return Gy;case 5124:case 35670:return Wy;case 35667:case 35671:return qy;case 35668:case 35672:return Xy;case 35669:case 35673:return jy;case 5125:return $y;case 36294:return Yy;case 36295:return Ky;case 36296:return Jy;case 35678:case 36198:case 36298:case 36306:case 35682:return Zy;case 35679:case 36299:case 36307:return Qy;case 35680:case 36300:case 36308:case 36293:return e1;case 36289:case 36303:case 36311:case 36292:return t1}}function t0(i,e){i.seq.push(e),i.map[e.id]=e}function i1(i,e,t){let n=i.name,s=n.length;for(Uu.lastIndex=0;;){let r=Uu.exec(n),a=Uu.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){t0(t,l===void 0?new Fu(o,i,e):new Ou(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new Bu(o),t0(t,d)),t=d}}}function n0(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}function a1(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function o1(i){je._getMatrix(i0,je.workingColorSpace,i);let e=`mat3( ${i0.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(i)){case Za:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function s0(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+a1(i.getShaderSource(e),o)}else return r}function c1(i,e){let t=o1(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function l1(i,e){let t;switch(e){case Tl:t="Linear";break;case wl:t="Reinhard";break;case El:t="Cineon";break;case da:t="ACESFilmic";break;case Rl:t="AgX";break;case Cl:t="Neutral";break;case Al:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function h1(){je.getLuminanceCoefficients(_h);let i=_h.x.toFixed(4),e=_h.y.toFixed(4),t=_h.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function d1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Uo).join(`
`)}function u1(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function f1(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Uo(i){return i!==""}function r0(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function a0(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function Hu(i){return i.replace(p1,g1)}function g1(i,e){let t=Xe[e];if(t===void 0){let n=m1.get(e);if(n!==void 0)t=Xe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Hu(t)}function o0(i){return i.replace(b1,x1)}function x1(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function c0(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function v1(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ou?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===gl?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ai&&(e="SHADOWMAP_TYPE_VSM"),e}function _1(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case sr:case rr:e="ENVMAP_TYPE_CUBE";break;case Po:e="ENVMAP_TYPE_CUBE_UV";break}return e}function y1(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case rr:e="ENVMAP_MODE_REFRACTION";break}return e}function M1(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case hu:e="ENVMAP_BLENDING_MULTIPLY";break;case Mm:e="ENVMAP_BLENDING_MIX";break;case Sm:e="ENVMAP_BLENDING_ADD";break}return e}function S1(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function T1(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=v1(t),l=_1(t),h=y1(t),d=M1(t),u=S1(t),f=d1(t),m=u1(r),b=s.createProgram(),g,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Uo).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Uo).join(`
`),p.length>0&&(p+=`
`)):(g=[c0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Uo).join(`
`),p=[c0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==es?"#define TONE_MAPPING":"",t.toneMapping!==es?Xe.tonemapping_pars_fragment:"",t.toneMapping!==es?l1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,c1("linearToOutputTexel",t.outputColorSpace),h1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Uo).join(`
`)),a=Hu(a),a=r0(a,t),a=a0(a,t),o=Hu(o),o=r0(o,t),o=a0(o,t),a=o0(a),o=o0(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Su?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Su?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=v+g+a,x=v+p+o,w=n0(s,s.VERTEX_SHADER,_),E=n0(s,s.FRAGMENT_SHADER,x);s.attachShader(b,w),s.attachShader(b,E),t.index0AttributeName!==void 0?s.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function R(P){if(i.debug.checkShaderErrors){let D=s.getProgramInfoLog(b)||"",F=s.getShaderInfoLog(w)||"",H=s.getShaderInfoLog(E)||"",X=D.trim(),W=F.trim(),ee=H.trim(),V=!0,Z=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,b,w,E);else{let le=s0(s,w,"vertex"),Me=s0(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+X+`
`+le+`
`+Me)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(W===""||ee==="")&&(Z=!1);Z&&(P.diagnostics={runnable:V,programLog:X,vertexShader:{log:W,prefix:g},fragmentShader:{log:ee,prefix:p}})}s.deleteShader(w),s.deleteShader(E),I=new ba(s,b),S=f1(s,b)}let I;this.getUniforms=function(){return I===void 0&&R(this),I};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(b,s1)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=r1++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=w,this.fragmentShader=E,this}function E1(i,e,t,n,s,r,a){let o=new na,c=new Vu,l=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures,f=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(S){return l.add(S),S===0?"uv":`uv${S}`}function g(S,y,P,D,F){let H=D.fog,X=F.geometry,W=S.isMeshStandardMaterial?D.environment:null,ee=(S.isMeshStandardMaterial?t:e).get(S.envMap||W),V=ee&&ee.mapping===Po?ee.image.height:null,Z=m[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let le=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Me=le!==void 0?le.length:0,Ve=0;X.morphAttributes.position!==void 0&&(Ve=1),X.morphAttributes.normal!==void 0&&(Ve=2),X.morphAttributes.color!==void 0&&(Ve=3);let ct,ft,et,j;if(Z){let dt=Ri[Z];ct=dt.vertexShader,ft=dt.fragmentShader}else ct=S.vertexShader,ft=S.fragmentShader,c.update(S),et=c.getVertexShaderID(S),j=c.getFragmentShaderID(S);let Y=i.getRenderTarget(),ue=i.state.buffers.depth.getReversed(),Re=F.isInstancedMesh===!0,be=F.isBatchedMesh===!0,Ye=!!S.map,$t=!!S.matcap,k=!!ee,mt=!!S.aoMap,He=!!S.lightMap,De=!!S.bumpMap,ve=!!S.normalMap,gt=!!S.displacementMap,_e=!!S.emissiveMap,Ge=!!S.metalnessMap,Vt=!!S.roughnessMap,Ct=S.anisotropy>0,A=S.clearcoat>0,M=S.dispersion>0,U=S.iridescence>0,q=S.sheen>0,K=S.transmission>0,G=Ct&&!!S.anisotropyMap,Se=A&&!!S.clearcoatMap,ie=A&&!!S.clearcoatNormalMap,xe=A&&!!S.clearcoatRoughnessMap,Ee=U&&!!S.iridescenceMap,te=U&&!!S.iridescenceThicknessMap,he=q&&!!S.sheenColorMap,ze=q&&!!S.sheenRoughnessMap,Ae=!!S.specularMap,ae=!!S.specularColorMap,Oe=!!S.specularIntensityMap,L=K&&!!S.transmissionMap,J=K&&!!S.thicknessMap,se=!!S.gradientMap,ye=!!S.alphaMap,Q=S.alphaTest>0,$=!!S.alphaHash,we=!!S.extensions,We=es;S.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(We=i.toneMapping);let At={shaderID:Z,shaderType:S.type,shaderName:S.name,vertexShader:ct,fragmentShader:ft,defines:S.defines,customVertexShaderID:et,customFragmentShaderID:j,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:be,batchingColor:be&&F._colorsTexture!==null,instancing:Re,instancingColor:Re&&F.instanceColor!==null,instancingMorph:Re&&F.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:Y===null?i.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:dn,alphaToCoverage:!!S.alphaToCoverage,map:Ye,matcap:$t,envMap:k,envMapMode:k&&ee.mapping,envMapCubeUVHeight:V,aoMap:mt,lightMap:He,bumpMap:De,normalMap:ve,displacementMap:u&&gt,emissiveMap:_e,normalMapObjectSpace:ve&&S.normalMapType===Cm,normalMapTangentSpace:ve&&S.normalMapType===bh,metalnessMap:Ge,roughnessMap:Vt,anisotropy:Ct,anisotropyMap:G,clearcoat:A,clearcoatMap:Se,clearcoatNormalMap:ie,clearcoatRoughnessMap:xe,dispersion:M,iridescence:U,iridescenceMap:Ee,iridescenceThicknessMap:te,sheen:q,sheenColorMap:he,sheenRoughnessMap:ze,specularMap:Ae,specularColorMap:ae,specularIntensityMap:Oe,transmission:K,transmissionMap:L,thicknessMap:J,gradientMap:se,opaque:S.transparent===!1&&S.blending===Xi&&S.alphaToCoverage===!1,alphaMap:ye,alphaTest:Q,alphaHash:$,combine:S.combine,mapUv:Ye&&b(S.map.channel),aoMapUv:mt&&b(S.aoMap.channel),lightMapUv:He&&b(S.lightMap.channel),bumpMapUv:De&&b(S.bumpMap.channel),normalMapUv:ve&&b(S.normalMap.channel),displacementMapUv:gt&&b(S.displacementMap.channel),emissiveMapUv:_e&&b(S.emissiveMap.channel),metalnessMapUv:Ge&&b(S.metalnessMap.channel),roughnessMapUv:Vt&&b(S.roughnessMap.channel),anisotropyMapUv:G&&b(S.anisotropyMap.channel),clearcoatMapUv:Se&&b(S.clearcoatMap.channel),clearcoatNormalMapUv:ie&&b(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&b(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&b(S.iridescenceMap.channel),iridescenceThicknessMapUv:te&&b(S.iridescenceThicknessMap.channel),sheenColorMapUv:he&&b(S.sheenColorMap.channel),sheenRoughnessMapUv:ze&&b(S.sheenRoughnessMap.channel),specularMapUv:Ae&&b(S.specularMap.channel),specularColorMapUv:ae&&b(S.specularColorMap.channel),specularIntensityMapUv:Oe&&b(S.specularIntensityMap.channel),transmissionMapUv:L&&b(S.transmissionMap.channel),thicknessMapUv:J&&b(S.thicknessMap.channel),alphaMapUv:ye&&b(S.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(ve||Ct),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!X.attributes.uv&&(Ye||ye),fog:!!H,useFog:S.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ue,skinning:F.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:Ve,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:We,decodeVideoTexture:Ye&&S.map.isVideoTexture===!0&&je.getTransfer(S.map.colorSpace)===lt,decodeVideoTextureEmissive:_e&&S.emissiveMap.isVideoTexture===!0&&je.getTransfer(S.emissiveMap.colorSpace)===lt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Zt,flipSided:S.side===yn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:we&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(we&&S.extensions.multiDraw===!0||be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return At.vertexUv1s=l.has(1),At.vertexUv2s=l.has(2),At.vertexUv3s=l.has(3),l.clear(),At}function p(S){let y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(let P in S.defines)y.push(P),y.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(v(y,S),_(y,S),y.push(i.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function v(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function _(S,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),y.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),S.push(o.mask)}function x(S){let y=m[S.type],P;if(y){let D=Ri[y];P=Sn.clone(D.uniforms)}else P=S.uniforms;return P}function w(S,y){let P;for(let D=0,F=h.length;D<F;D++){let H=h[D];if(H.cacheKey===y){P=H,++P.usedTimes;break}}return P===void 0&&(P=new T1(i,y,S,r),h.push(P)),P}function E(S){if(--S.usedTimes===0){let y=h.indexOf(S);h[y]=h[h.length-1],h.pop(),S.destroy()}}function R(S){c.remove(S)}function I(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:x,acquireProgram:w,releaseProgram:E,releaseShaderCache:R,programs:h,dispose:I}}function A1(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function R1(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function l0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function h0(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d,u,f,m,b,g){let p=i[e];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:m,renderOrder:d.renderOrder,z:b,group:g},i[e]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=m,p.renderOrder=d.renderOrder,p.z=b,p.group=g),e++,p}function o(d,u,f,m,b,g){let p=a(d,u,f,m,b,g);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function c(d,u,f,m,b,g){let p=a(d,u,f,m,b,g);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function l(d,u){t.length>1&&t.sort(d||R1),n.length>1&&n.sort(u||l0),s.length>1&&s.sort(u||l0)}function h(){for(let d=e,u=i.length;d<u;d++){let f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function C1(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new h0,i.set(n,[a])):s>=r.length?(a=new h0,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function P1(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new re};break;case"SpotLight":t={position:new C,direction:new C,color:new re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new re,groundColor:new re};break;case"RectAreaLight":t={color:new re,position:new C,halfWidth:new C,halfHeight:new C};break}return i[e.id]=t,t}}}function I1(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}function L1(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function D1(i){let e=new P1,t=I1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new C);let s=new C,r=new Ce,a=new Ce;function o(l){let h=0,d=0,u=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,m=0,b=0,g=0,p=0,v=0,_=0,x=0,w=0,E=0,R=0;l.sort(L1);for(let S=0,y=l.length;S<y;S++){let P=l[S],D=P.color,F=P.intensity,H=P.distance,X=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=D.r*F,d+=D.g*F,u+=D.b*F;else if(P.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(P.sh.coefficients[W],F);R++}else if(P.isDirectionalLight){let W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let ee=P.shadow,V=t.get(P);V.shadowIntensity=ee.intensity,V.shadowBias=ee.bias,V.shadowNormalBias=ee.normalBias,V.shadowRadius=ee.radius,V.shadowMapSize=ee.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=X,n.directionalShadowMatrix[f]=P.shadow.matrix,v++}n.directional[f]=W,f++}else if(P.isSpotLight){let W=e.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(D).multiplyScalar(F),W.distance=H,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,n.spot[b]=W;let ee=P.shadow;if(P.map&&(n.spotLightMap[w]=P.map,w++,ee.updateMatrices(P),P.castShadow&&E++),n.spotLightMatrix[b]=ee.matrix,P.castShadow){let V=t.get(P);V.shadowIntensity=ee.intensity,V.shadowBias=ee.bias,V.shadowNormalBias=ee.normalBias,V.shadowRadius=ee.radius,V.shadowMapSize=ee.mapSize,n.spotShadow[b]=V,n.spotShadowMap[b]=X,x++}b++}else if(P.isRectAreaLight){let W=e.get(P);W.color.copy(D).multiplyScalar(F),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),n.rectArea[g]=W,g++}else if(P.isPointLight){let W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){let ee=P.shadow,V=t.get(P);V.shadowIntensity=ee.intensity,V.shadowBias=ee.bias,V.shadowNormalBias=ee.normalBias,V.shadowRadius=ee.radius,V.shadowMapSize=ee.mapSize,V.shadowCameraNear=ee.camera.near,V.shadowCameraFar=ee.camera.far,n.pointShadow[m]=V,n.pointShadowMap[m]=X,n.pointShadowMatrix[m]=P.shadow.matrix,_++}n.point[m]=W,m++}else if(P.isHemisphereLight){let W=e.get(P);W.skyColor.copy(P.color).multiplyScalar(F),W.groundColor.copy(P.groundColor).multiplyScalar(F),n.hemi[p]=W,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let I=n.hash;(I.directionalLength!==f||I.pointLength!==m||I.spotLength!==b||I.rectAreaLength!==g||I.hemiLength!==p||I.numDirectionalShadows!==v||I.numPointShadows!==_||I.numSpotShadows!==x||I.numSpotMaps!==w||I.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=b,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=x+w-E,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=R,I.directionalLength=f,I.pointLength=m,I.spotLength=b,I.rectAreaLength=g,I.hemiLength=p,I.numDirectionalShadows=v,I.numPointShadows=_,I.numSpotShadows=x,I.numSpotMaps=w,I.numLightProbes=R,n.version=k1++)}function c(l,h){let d=0,u=0,f=0,m=0,b=0,g=h.matrixWorldInverse;for(let p=0,v=l.length;p<v;p++){let _=l[p];if(_.isDirectionalLight){let x=n.directional[d];x.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),d++}else if(_.isSpotLight){let x=n.spot[f];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),f++}else if(_.isRectAreaLight){let x=n.rectArea[m];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(g),a.identity(),r.copy(_.matrixWorld),r.premultiply(g),a.extractRotation(r),x.halfWidth.set(_.width*.5,0,0),x.halfHeight.set(0,_.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),m++}else if(_.isPointLight){let x=n.point[u];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(g),u++}else if(_.isHemisphereLight){let x=n.hemi[b];x.direction.setFromMatrixPosition(_.matrixWorld),x.direction.transformDirection(g),b++}}}return{setup:o,setupView:c,state:n}}function d0(i){let e=new D1(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function N1(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new d0(i),e.set(s,[o])):r>=a.length?(o=new d0(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}function F1(i,e,t){let n=new oa,s=new fe,r=new fe,a=new ot,o=new al({depthPacking:Rm}),c=new ol,l={},h=t.maxTextureSize,d={[ci]:yn,[yn]:ci,[Zt]:Zt},u=new it({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:z1,fragmentShader:U1}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let m=new _t;m.setAttribute("position",new Dt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Ue(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ou;let p=this.type;this.render=function(E,R,I){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;let S=i.getRenderTarget(),y=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Qt),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let F=p!==Ai&&this.type===Ai,H=p===Ai&&this.type!==Ai;for(let X=0,W=E.length;X<W;X++){let ee=E[X],V=ee.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let Z=V.getFrameExtents();if(s.multiply(Z),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Z.x),s.x=r.x*Z.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Z.y),s.y=r.y*Z.y,V.mapSize.y=r.y)),V.map===null||F===!0||H===!0){let Me=this.type!==Ai?{minFilter:Jt,magFilter:Jt}:{};V.map!==null&&V.map.dispose(),V.map=new qt(s.x,s.y,Me),V.map.texture.name=ee.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();let le=V.getViewportCount();for(let Me=0;Me<le;Me++){let Ve=V.getViewport(Me);a.set(r.x*Ve.x,r.y*Ve.y,r.x*Ve.z,r.y*Ve.w),D.viewport(a),V.updateMatrices(ee,Me),n=V.getFrustum(),x(R,I,V.camera,ee,this.type)}V.isPointLightShadow!==!0&&this.type===Ai&&v(V,I),V.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(S,y,P)};function v(E,R){let I=e.update(b);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new qt(s.x,s.y)),u.uniforms.shadow_pass.value=E.map.texture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(R,null,I,u,b,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(R,null,I,f,b,null)}function _(E,R,I,S){let y=null,P=I.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)y=P;else if(y=I.isPointLight===!0?c:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let D=y.uuid,F=R.uuid,H=l[D];H===void 0&&(H={},l[D]=H);let X=H[F];X===void 0&&(X=y.clone(),H[F]=X,R.addEventListener("dispose",w)),y=X}if(y.visible=R.visible,y.wireframe=R.wireframe,S===Ai?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:d[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,y.map=R.map,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,I.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let D=i.properties.get(y);D.light=I}return y}function x(E,R,I,S,y){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&y===Ai)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,E.matrixWorld);let F=e.update(E),H=E.material;if(Array.isArray(H)){let X=F.groups;for(let W=0,ee=X.length;W<ee;W++){let V=X[W],Z=H[V.materialIndex];if(Z&&Z.visible){let le=_(E,Z,S,y);E.onBeforeShadow(i,E,R,I,F,le,V),i.renderBufferDirect(I,null,F,le,E,V),E.onAfterShadow(i,E,R,I,F,le,V)}}}else if(H.visible){let X=_(E,H,S,y);E.onBeforeShadow(i,E,R,I,F,X,null),i.renderBufferDirect(I,null,F,X,E,null),E.onAfterShadow(i,E,R,I,F,X,null)}}let D=E.children;for(let F=0,H=D.length;F<H;F++)x(D[F],R,I,S,y)}function w(E){E.target.removeEventListener("dispose",w);for(let I in l){let S=l[I],y=E.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}function B1(i,e){function t(){let L=!1,J=new ot,se=null,ye=new ot(0,0,0,0);return{setMask:function(Q){se!==Q&&!L&&(i.colorMask(Q,Q,Q,Q),se=Q)},setLocked:function(Q){L=Q},setClear:function(Q,$,we,We,At){At===!0&&(Q*=We,$*=We,we*=We),J.set(Q,$,we,We),ye.equals(J)===!1&&(i.clearColor(Q,$,we,We),ye.copy(J))},reset:function(){L=!1,se=null,ye.set(-1,0,0,0)}}}function n(){let L=!1,J=!1,se=null,ye=null,Q=null;return{setReversed:function($){if(J!==$){let we=e.get("EXT_clip_control");$?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),J=$;let We=Q;Q=null,this.setClear(We)}},getReversed:function(){return J},setTest:function($){$?Y(i.DEPTH_TEST):ue(i.DEPTH_TEST)},setMask:function($){se!==$&&!L&&(i.depthMask($),se=$)},setFunc:function($){if(J&&($=O1[$]),ye!==$){switch($){case xl:i.depthFunc(i.NEVER);break;case vl:i.depthFunc(i.ALWAYS);break;case _l:i.depthFunc(i.LESS);break;case Vs:i.depthFunc(i.LEQUAL);break;case yl:i.depthFunc(i.EQUAL);break;case Ml:i.depthFunc(i.GEQUAL);break;case ha:i.depthFunc(i.GREATER);break;case Sl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ye=$}},setLocked:function($){L=$},setClear:function($){Q!==$&&(J&&($=1-$),i.clearDepth($),Q=$)},reset:function(){L=!1,se=null,ye=null,Q=null,J=!1}}}function s(){let L=!1,J=null,se=null,ye=null,Q=null,$=null,we=null,We=null,At=null;return{setTest:function(dt){L||(dt?Y(i.STENCIL_TEST):ue(i.STENCIL_TEST))},setMask:function(dt){J!==dt&&!L&&(i.stencilMask(dt),J=dt)},setFunc:function(dt,Ui,gi){(se!==dt||ye!==Ui||Q!==gi)&&(i.stencilFunc(dt,Ui,gi),se=dt,ye=Ui,Q=gi)},setOp:function(dt,Ui,gi){($!==dt||we!==Ui||We!==gi)&&(i.stencilOp(dt,Ui,gi),$=dt,we=Ui,We=gi)},setLocked:function(dt){L=dt},setClear:function(dt){At!==dt&&(i.clearStencil(dt),At=dt)},reset:function(){L=!1,J=null,se=null,ye=null,Q=null,$=null,we=null,We=null,At=null}}}let r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap,h={},d={},u=new WeakMap,f=[],m=null,b=!1,g=null,p=null,v=null,_=null,x=null,w=null,E=null,R=new re(0,0,0),I=0,S=!1,y=null,P=null,D=null,F=null,H=null,X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,ee=0,V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(V)[1]),W=ee>=1):V.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),W=ee>=2);let Z=null,le={},Me=i.getParameter(i.SCISSOR_BOX),Ve=i.getParameter(i.VIEWPORT),ct=new ot().fromArray(Me),ft=new ot().fromArray(Ve);function et(L,J,se,ye){let Q=new Uint8Array(4),$=i.createTexture();i.bindTexture(L,$),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let we=0;we<se;we++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(J,0,i.RGBA,1,1,ye,0,i.RGBA,i.UNSIGNED_BYTE,Q):i.texImage2D(J+we,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Q);return $}let j={};j[i.TEXTURE_2D]=et(i.TEXTURE_2D,i.TEXTURE_2D,1),j[i.TEXTURE_CUBE_MAP]=et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[i.TEXTURE_2D_ARRAY]=et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),j[i.TEXTURE_3D]=et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Y(i.DEPTH_TEST),a.setFunc(Vs),De(!1),ve(au),Y(i.CULL_FACE),mt(Qt);function Y(L){h[L]!==!0&&(i.enable(L),h[L]=!0)}function ue(L){h[L]!==!1&&(i.disable(L),h[L]=!1)}function Re(L,J){return d[L]!==J?(i.bindFramebuffer(L,J),d[L]=J,L===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=J),L===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=J),!0):!1}function be(L,J){let se=f,ye=!1;if(L){se=u.get(J),se===void 0&&(se=[],u.set(J,se));let Q=L.textures;if(se.length!==Q.length||se[0]!==i.COLOR_ATTACHMENT0){for(let $=0,we=Q.length;$<we;$++)se[$]=i.COLOR_ATTACHMENT0+$;se.length=Q.length,ye=!0}}else se[0]!==i.BACK&&(se[0]=i.BACK,ye=!0);ye&&i.drawBuffers(se)}function Ye(L){return m!==L?(i.useProgram(L),m=L,!0):!1}let $t={[Fn]:i.FUNC_ADD,[cm]:i.FUNC_SUBTRACT,[lm]:i.FUNC_REVERSE_SUBTRACT};$t[hm]=i.MIN,$t[dm]=i.MAX;let k={[ir]:i.ZERO,[um]:i.ONE,[fm]:i.SRC_COLOR,[Yc]:i.SRC_ALPHA,[bm]:i.SRC_ALPHA_SATURATE,[Co]:i.DST_COLOR,[Ro]:i.DST_ALPHA,[pm]:i.ONE_MINUS_SRC_COLOR,[Kc]:i.ONE_MINUS_SRC_ALPHA,[gm]:i.ONE_MINUS_DST_COLOR,[mm]:i.ONE_MINUS_DST_ALPHA,[xm]:i.CONSTANT_COLOR,[vm]:i.ONE_MINUS_CONSTANT_COLOR,[_m]:i.CONSTANT_ALPHA,[ym]:i.ONE_MINUS_CONSTANT_ALPHA};function mt(L,J,se,ye,Q,$,we,We,At,dt){if(L===Qt){b===!0&&(ue(i.BLEND),b=!1);return}if(b===!1&&(Y(i.BLEND),b=!0),L!==bl){if(L!==g||dt!==S){if((p!==Fn||x!==Fn)&&(i.blendEquation(i.FUNC_ADD),p=Fn,x=Fn),dt)switch(L){case Xi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jt:i.blendFunc(i.ONE,i.ONE);break;case cu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case lu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Xi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jt:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case cu:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case lu:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}v=null,_=null,w=null,E=null,R.set(0,0,0),I=0,g=L,S=dt}return}Q=Q||J,$=$||se,we=we||ye,(J!==p||Q!==x)&&(i.blendEquationSeparate($t[J],$t[Q]),p=J,x=Q),(se!==v||ye!==_||$!==w||we!==E)&&(i.blendFuncSeparate(k[se],k[ye],k[$],k[we]),v=se,_=ye,w=$,E=we),(We.equals(R)===!1||At!==I)&&(i.blendColor(We.r,We.g,We.b,At),R.copy(We),I=At),g=L,S=!1}function He(L,J){L.side===Zt?ue(i.CULL_FACE):Y(i.CULL_FACE);let se=L.side===yn;J&&(se=!se),De(se),L.blending===Xi&&L.transparent===!1?mt(Qt):mt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);let ye=L.stencilWrite;o.setTest(ye),ye&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),_e(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Y(i.SAMPLE_ALPHA_TO_COVERAGE):ue(i.SAMPLE_ALPHA_TO_COVERAGE)}function De(L){y!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),y=L)}function ve(L){L!==am?(Y(i.CULL_FACE),L!==P&&(L===au?i.cullFace(i.BACK):L===om?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ue(i.CULL_FACE),P=L}function gt(L){L!==D&&(W&&i.lineWidth(L),D=L)}function _e(L,J,se){L?(Y(i.POLYGON_OFFSET_FILL),(F!==J||H!==se)&&(i.polygonOffset(J,se),F=J,H=se)):ue(i.POLYGON_OFFSET_FILL)}function Ge(L){L?Y(i.SCISSOR_TEST):ue(i.SCISSOR_TEST)}function Vt(L){L===void 0&&(L=i.TEXTURE0+X-1),Z!==L&&(i.activeTexture(L),Z=L)}function Ct(L,J,se){se===void 0&&(Z===null?se=i.TEXTURE0+X-1:se=Z);let ye=le[se];ye===void 0&&(ye={type:void 0,texture:void 0},le[se]=ye),(ye.type!==L||ye.texture!==J)&&(Z!==se&&(i.activeTexture(se),Z=se),i.bindTexture(L,J||j[L]),ye.type=L,ye.texture=J)}function A(){let L=le[Z];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function M(){try{i.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function U(){try{i.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function q(){try{i.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function K(){try{i.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function G(){try{i.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Se(){try{i.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ie(){try{i.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xe(){try{i.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ee(){try{i.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function te(){try{i.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function he(L){ct.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),ct.copy(L))}function ze(L){ft.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),ft.copy(L))}function Ae(L,J){let se=l.get(J);se===void 0&&(se=new WeakMap,l.set(J,se));let ye=se.get(L);ye===void 0&&(ye=i.getUniformBlockIndex(J,L.name),se.set(L,ye))}function ae(L,J){let ye=l.get(J).get(L);c.get(J)!==ye&&(i.uniformBlockBinding(J,ye,L.__bindingPointIndex),c.set(J,ye))}function Oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},Z=null,le={},d={},u=new WeakMap,f=[],m=null,b=!1,g=null,p=null,v=null,_=null,x=null,w=null,E=null,R=new re(0,0,0),I=0,S=!1,y=null,P=null,D=null,F=null,H=null,ct.set(0,0,i.canvas.width,i.canvas.height),ft.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Y,disable:ue,bindFramebuffer:Re,drawBuffers:be,useProgram:Ye,setBlending:mt,setMaterial:He,setFlipSided:De,setCullFace:ve,setLineWidth:gt,setPolygonOffset:_e,setScissorTest:Ge,activeTexture:Vt,bindTexture:Ct,unbindTexture:A,compressedTexImage2D:M,compressedTexImage3D:U,texImage2D:Ee,texImage3D:te,updateUBOMapping:Ae,uniformBlockBinding:ae,texStorage2D:ie,texStorage3D:xe,texSubImage2D:q,texSubImage3D:K,compressedTexSubImage2D:G,compressedTexSubImage3D:Se,scissor:he,viewport:ze,reset:Oe}}function H1(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new fe,h=new WeakMap,d,u=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,M){return f?new OffscreenCanvas(A,M):Qr("canvas")}function b(A,M,U){let q=1,K=Ct(A);if((K.width>U||K.height>U)&&(q=U/Math.max(K.width,K.height)),q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let G=Math.floor(q*K.width),Se=Math.floor(q*K.height);d===void 0&&(d=m(G,Se));let ie=M?m(G,Se):d;return ie.width=G,ie.height=Se,ie.getContext("2d").drawImage(A,0,0,G,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+G+"x"+Se+")."),ie}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),A;return A}function g(A){return A.generateMipmaps}function p(A){i.generateMipmap(A)}function v(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(A,M,U,q,K=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let G=M;if(M===i.RED&&(U===i.FLOAT&&(G=i.R32F),U===i.HALF_FLOAT&&(G=i.R16F),U===i.UNSIGNED_BYTE&&(G=i.R8)),M===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(G=i.R8UI),U===i.UNSIGNED_SHORT&&(G=i.R16UI),U===i.UNSIGNED_INT&&(G=i.R32UI),U===i.BYTE&&(G=i.R8I),U===i.SHORT&&(G=i.R16I),U===i.INT&&(G=i.R32I)),M===i.RG&&(U===i.FLOAT&&(G=i.RG32F),U===i.HALF_FLOAT&&(G=i.RG16F),U===i.UNSIGNED_BYTE&&(G=i.RG8)),M===i.RG_INTEGER&&(U===i.UNSIGNED_BYTE&&(G=i.RG8UI),U===i.UNSIGNED_SHORT&&(G=i.RG16UI),U===i.UNSIGNED_INT&&(G=i.RG32UI),U===i.BYTE&&(G=i.RG8I),U===i.SHORT&&(G=i.RG16I),U===i.INT&&(G=i.RG32I)),M===i.RGB_INTEGER&&(U===i.UNSIGNED_BYTE&&(G=i.RGB8UI),U===i.UNSIGNED_SHORT&&(G=i.RGB16UI),U===i.UNSIGNED_INT&&(G=i.RGB32UI),U===i.BYTE&&(G=i.RGB8I),U===i.SHORT&&(G=i.RGB16I),U===i.INT&&(G=i.RGB32I)),M===i.RGBA_INTEGER&&(U===i.UNSIGNED_BYTE&&(G=i.RGBA8UI),U===i.UNSIGNED_SHORT&&(G=i.RGBA16UI),U===i.UNSIGNED_INT&&(G=i.RGBA32UI),U===i.BYTE&&(G=i.RGBA8I),U===i.SHORT&&(G=i.RGBA16I),U===i.INT&&(G=i.RGBA32I)),M===i.RGB&&(U===i.UNSIGNED_INT_5_9_9_9_REV&&(G=i.RGB9_E5),U===i.UNSIGNED_INT_10F_11F_11F_REV&&(G=i.R11F_G11F_B10F)),M===i.RGBA){let Se=K?Za:je.getTransfer(q);U===i.FLOAT&&(G=i.RGBA32F),U===i.HALF_FLOAT&&(G=i.RGBA16F),U===i.UNSIGNED_BYTE&&(G=Se===lt?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT_4_4_4_4&&(G=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(G=i.RGB5_A1)}return(G===i.R16F||G===i.R32F||G===i.RG16F||G===i.RG32F||G===i.RGBA16F||G===i.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function x(A,M){let U;return A?M===null||M===ys||M===Ms?U=i.DEPTH24_STENCIL8:M===$n?U=i.DEPTH32F_STENCIL8:M===fa&&(U=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ys||M===Ms?U=i.DEPTH_COMPONENT24:M===$n?U=i.DEPTH_COMPONENT32F:M===fa&&(U=i.DEPTH_COMPONENT16),U}function w(A,M){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==Jt&&A.minFilter!==_n?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function E(A){let M=A.target;M.removeEventListener("dispose",E),I(M),M.isVideoTexture&&h.delete(M)}function R(A){let M=A.target;M.removeEventListener("dispose",R),y(M)}function I(A){let M=n.get(A);if(M.__webglInit===void 0)return;let U=A.source,q=u.get(U);if(q){let K=q[M.__cacheKey];K.usedTimes--,K.usedTimes===0&&S(A),Object.keys(q).length===0&&u.delete(U)}n.remove(A)}function S(A){let M=n.get(A);i.deleteTexture(M.__webglTexture);let U=A.source,q=u.get(U);delete q[M.__cacheKey],a.memory.textures--}function y(A){let M=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(M.__webglFramebuffer[q]))for(let K=0;K<M.__webglFramebuffer[q].length;K++)i.deleteFramebuffer(M.__webglFramebuffer[q][K]);else i.deleteFramebuffer(M.__webglFramebuffer[q]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[q])}else{if(Array.isArray(M.__webglFramebuffer))for(let q=0;q<M.__webglFramebuffer.length;q++)i.deleteFramebuffer(M.__webglFramebuffer[q]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let q=0;q<M.__webglColorRenderbuffer.length;q++)M.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[q]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let U=A.textures;for(let q=0,K=U.length;q<K;q++){let G=n.get(U[q]);G.__webglTexture&&(i.deleteTexture(G.__webglTexture),a.memory.textures--),n.remove(U[q])}n.remove(A)}let P=0;function D(){P=0}function F(){let A=P;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),P+=1,A}function H(A){let M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function X(A,M){let U=n.get(A);if(A.isVideoTexture&&Ge(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&U.__version!==A.version){let q=A.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(U,A,M);return}}else A.isExternalTexture&&(U.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+M)}function W(A,M){let U=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&U.__version!==A.version){j(U,A,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+M)}function ee(A,M){let U=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&U.__version!==A.version){j(U,A,M);return}t.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+M)}function V(A,M){let U=n.get(A);if(A.version>0&&U.__version!==A.version){Y(U,A,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+M)}let Z={[An]:i.REPEAT,[xi]:i.CLAMP_TO_EDGE,[Jr]:i.MIRRORED_REPEAT},le={[Jt]:i.NEAREST,[kl]:i.NEAREST_MIPMAP_NEAREST,[ar]:i.NEAREST_MIPMAP_LINEAR,[_n]:i.LINEAR,[ua]:i.LINEAR_MIPMAP_NEAREST,[di]:i.LINEAR_MIPMAP_LINEAR},Me={[Pm]:i.NEVER,[zm]:i.ALWAYS,[Im]:i.LESS,[Mu]:i.LEQUAL,[km]:i.EQUAL,[Nm]:i.GEQUAL,[Lm]:i.GREATER,[Dm]:i.NOTEQUAL};function Ve(A,M){if(M.type===$n&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===_n||M.magFilter===ua||M.magFilter===ar||M.magFilter===di||M.minFilter===_n||M.minFilter===ua||M.minFilter===ar||M.minFilter===di)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Z[M.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Z[M.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Z[M.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,le[M.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,le[M.minFilter]),M.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Me[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Jt||M.minFilter!==ar&&M.minFilter!==di||M.type===$n&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let U=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function ct(A,M){let U=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",E));let q=M.source,K=u.get(q);K===void 0&&(K={},u.set(q,K));let G=H(M);if(G!==A.__cacheKey){K[G]===void 0&&(K[G]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,U=!0),K[G].usedTimes++;let Se=K[A.__cacheKey];Se!==void 0&&(K[A.__cacheKey].usedTimes--,Se.usedTimes===0&&S(M)),A.__cacheKey=G,A.__webglTexture=K[G].texture}return U}function ft(A,M,U){return Math.floor(Math.floor(A/U)/M)}function et(A,M,U,q){let G=A.updateRanges;if(G.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,U,q,M.data);else{G.sort((te,he)=>te.start-he.start);let Se=0;for(let te=1;te<G.length;te++){let he=G[Se],ze=G[te],Ae=he.start+he.count,ae=ft(ze.start,M.width,4),Oe=ft(he.start,M.width,4);ze.start<=Ae+1&&ae===Oe&&ft(ze.start+ze.count-1,M.width,4)===ae?he.count=Math.max(he.count,ze.start+ze.count-he.start):(++Se,G[Se]=ze)}G.length=Se+1;let ie=i.getParameter(i.UNPACK_ROW_LENGTH),xe=i.getParameter(i.UNPACK_SKIP_PIXELS),Ee=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let te=0,he=G.length;te<he;te++){let ze=G[te],Ae=Math.floor(ze.start/4),ae=Math.ceil(ze.count/4),Oe=Ae%M.width,L=Math.floor(Ae/M.width),J=ae,se=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Oe),i.pixelStorei(i.UNPACK_SKIP_ROWS,L),t.texSubImage2D(i.TEXTURE_2D,0,Oe,L,J,se,U,q,M.data)}A.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ie),i.pixelStorei(i.UNPACK_SKIP_PIXELS,xe),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ee)}}function j(A,M,U){let q=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(q=i.TEXTURE_3D);let K=ct(A,M),G=M.source;t.bindTexture(q,A.__webglTexture,i.TEXTURE0+U);let Se=n.get(G);if(G.version!==Se.__version||K===!0){t.activeTexture(i.TEXTURE0+U);let ie=je.getPrimaries(je.workingColorSpace),xe=M.colorSpace===ts?null:je.getPrimaries(M.colorSpace),Ee=M.colorSpace===ts||ie===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let te=b(M.image,!1,s.maxTextureSize);te=Vt(M,te);let he=r.convert(M.format,M.colorSpace),ze=r.convert(M.type),Ae=_(M.internalFormat,he,ze,M.colorSpace,M.isVideoTexture);Ve(q,M);let ae,Oe=M.mipmaps,L=M.isVideoTexture!==!0,J=Se.__version===void 0||K===!0,se=G.dataReady,ye=w(M,te);if(M.isDepthTexture)Ae=x(M.format===Ss,M.type),J&&(L?t.texStorage2D(i.TEXTURE_2D,1,Ae,te.width,te.height):t.texImage2D(i.TEXTURE_2D,0,Ae,te.width,te.height,0,he,ze,null));else if(M.isDataTexture)if(Oe.length>0){L&&J&&t.texStorage2D(i.TEXTURE_2D,ye,Ae,Oe[0].width,Oe[0].height);for(let Q=0,$=Oe.length;Q<$;Q++)ae=Oe[Q],L?se&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,ae.width,ae.height,he,ze,ae.data):t.texImage2D(i.TEXTURE_2D,Q,Ae,ae.width,ae.height,0,he,ze,ae.data);M.generateMipmaps=!1}else L?(J&&t.texStorage2D(i.TEXTURE_2D,ye,Ae,te.width,te.height),se&&et(M,te,he,ze)):t.texImage2D(i.TEXTURE_2D,0,Ae,te.width,te.height,0,he,ze,te.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){L&&J&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ye,Ae,Oe[0].width,Oe[0].height,te.depth);for(let Q=0,$=Oe.length;Q<$;Q++)if(ae=Oe[Q],M.format!==Mn)if(he!==null)if(L){if(se)if(M.layerUpdates.size>0){let we=Pu(ae.width,ae.height,M.format,M.type);for(let We of M.layerUpdates){let At=ae.data.subarray(We*we/ae.data.BYTES_PER_ELEMENT,(We+1)*we/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,We,ae.width,ae.height,1,he,At)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,ae.width,ae.height,te.depth,he,ae.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,Ae,ae.width,ae.height,te.depth,0,ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?se&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,ae.width,ae.height,te.depth,he,ze,ae.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Q,Ae,ae.width,ae.height,te.depth,0,he,ze,ae.data)}else{L&&J&&t.texStorage2D(i.TEXTURE_2D,ye,Ae,Oe[0].width,Oe[0].height);for(let Q=0,$=Oe.length;Q<$;Q++)ae=Oe[Q],M.format!==Mn?he!==null?L?se&&t.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,ae.width,ae.height,he,ae.data):t.compressedTexImage2D(i.TEXTURE_2D,Q,Ae,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?se&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,ae.width,ae.height,he,ze,ae.data):t.texImage2D(i.TEXTURE_2D,Q,Ae,ae.width,ae.height,0,he,ze,ae.data)}else if(M.isDataArrayTexture)if(L){if(J&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ye,Ae,te.width,te.height,te.depth),se)if(M.layerUpdates.size>0){let Q=Pu(te.width,te.height,M.format,M.type);for(let $ of M.layerUpdates){let we=te.data.subarray($*Q/te.data.BYTES_PER_ELEMENT,($+1)*Q/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$,te.width,te.height,1,he,ze,we)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,he,ze,te.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ae,te.width,te.height,te.depth,0,he,ze,te.data);else if(M.isData3DTexture)L?(J&&t.texStorage3D(i.TEXTURE_3D,ye,Ae,te.width,te.height,te.depth),se&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,he,ze,te.data)):t.texImage3D(i.TEXTURE_3D,0,Ae,te.width,te.height,te.depth,0,he,ze,te.data);else if(M.isFramebufferTexture){if(J)if(L)t.texStorage2D(i.TEXTURE_2D,ye,Ae,te.width,te.height);else{let Q=te.width,$=te.height;for(let we=0;we<ye;we++)t.texImage2D(i.TEXTURE_2D,we,Ae,Q,$,0,he,ze,null),Q>>=1,$>>=1}}else if(Oe.length>0){if(L&&J){let Q=Ct(Oe[0]);t.texStorage2D(i.TEXTURE_2D,ye,Ae,Q.width,Q.height)}for(let Q=0,$=Oe.length;Q<$;Q++)ae=Oe[Q],L?se&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,he,ze,ae):t.texImage2D(i.TEXTURE_2D,Q,Ae,he,ze,ae);M.generateMipmaps=!1}else if(L){if(J){let Q=Ct(te);t.texStorage2D(i.TEXTURE_2D,ye,Ae,Q.width,Q.height)}se&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,he,ze,te)}else t.texImage2D(i.TEXTURE_2D,0,Ae,he,ze,te);g(M)&&p(q),Se.__version=G.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function Y(A,M,U){if(M.image.length!==6)return;let q=ct(A,M),K=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+U);let G=n.get(K);if(K.version!==G.__version||q===!0){t.activeTexture(i.TEXTURE0+U);let Se=je.getPrimaries(je.workingColorSpace),ie=M.colorSpace===ts?null:je.getPrimaries(M.colorSpace),xe=M.colorSpace===ts||Se===ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);let Ee=M.isCompressedTexture||M.image[0].isCompressedTexture,te=M.image[0]&&M.image[0].isDataTexture,he=[];for(let $=0;$<6;$++)!Ee&&!te?he[$]=b(M.image[$],!0,s.maxCubemapSize):he[$]=te?M.image[$].image:M.image[$],he[$]=Vt(M,he[$]);let ze=he[0],Ae=r.convert(M.format,M.colorSpace),ae=r.convert(M.type),Oe=_(M.internalFormat,Ae,ae,M.colorSpace),L=M.isVideoTexture!==!0,J=G.__version===void 0||q===!0,se=K.dataReady,ye=w(M,ze);Ve(i.TEXTURE_CUBE_MAP,M);let Q;if(Ee){L&&J&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ye,Oe,ze.width,ze.height);for(let $=0;$<6;$++){Q=he[$].mipmaps;for(let we=0;we<Q.length;we++){let We=Q[we];M.format!==Mn?Ae!==null?L?se&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,we,0,0,We.width,We.height,Ae,We.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,we,Oe,We.width,We.height,0,We.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,we,0,0,We.width,We.height,Ae,ae,We.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,we,Oe,We.width,We.height,0,Ae,ae,We.data)}}}else{if(Q=M.mipmaps,L&&J){Q.length>0&&ye++;let $=Ct(he[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ye,Oe,$.width,$.height)}for(let $=0;$<6;$++)if(te){L?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,he[$].width,he[$].height,Ae,ae,he[$].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Oe,he[$].width,he[$].height,0,Ae,ae,he[$].data);for(let we=0;we<Q.length;we++){let At=Q[we].image[$].image;L?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,we+1,0,0,At.width,At.height,Ae,ae,At.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,we+1,Oe,At.width,At.height,0,Ae,ae,At.data)}}else{L?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ae,ae,he[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Oe,Ae,ae,he[$]);for(let we=0;we<Q.length;we++){let We=Q[we];L?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,we+1,0,0,Ae,ae,We.image[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,we+1,Oe,Ae,ae,We.image[$])}}}g(M)&&p(i.TEXTURE_CUBE_MAP),G.__version=K.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function ue(A,M,U,q,K,G){let Se=r.convert(U.format,U.colorSpace),ie=r.convert(U.type),xe=_(U.internalFormat,Se,ie,U.colorSpace),Ee=n.get(M),te=n.get(U);if(te.__renderTarget=M,!Ee.__hasExternalTextures){let he=Math.max(1,M.width>>G),ze=Math.max(1,M.height>>G);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,G,xe,he,ze,M.depth,0,Se,ie,null):t.texImage2D(K,G,xe,he,ze,0,Se,ie,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),_e(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,K,te.__webglTexture,0,gt(M)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,K,te.__webglTexture,G),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Re(A,M,U){if(i.bindRenderbuffer(i.RENDERBUFFER,A),M.depthBuffer){let q=M.depthTexture,K=q&&q.isDepthTexture?q.type:null,G=x(M.stencilBuffer,K),Se=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=gt(M);_e(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie,G,M.width,M.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,G,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,G,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Se,i.RENDERBUFFER,A)}else{let q=M.textures;for(let K=0;K<q.length;K++){let G=q[K],Se=r.convert(G.format,G.colorSpace),ie=r.convert(G.type),xe=_(G.internalFormat,Se,ie,G.colorSpace),Ee=gt(M);U&&_e(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ee,xe,M.width,M.height):_e(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ee,xe,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,xe,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function be(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let q=n.get(M.depthTexture);q.__renderTarget=M,(!q.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),X(M.depthTexture,0);let K=q.__webglTexture,G=gt(M);if(M.depthTexture.format===Zr)_e(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,G):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(M.depthTexture.format===Ss)_e(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,G):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Ye(A){let M=n.get(A),U=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){let q=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),q){let K=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,q.removeEventListener("dispose",K)};q.addEventListener("dispose",K),M.__depthDisposeCallback=K}M.__boundDepthTexture=q}if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");let q=A.texture.mipmaps;q&&q.length>0?be(M.__webglFramebuffer[0],A):be(M.__webglFramebuffer,A)}else if(U){M.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[q]),M.__webglDepthbuffer[q]===void 0)M.__webglDepthbuffer[q]=i.createRenderbuffer(),Re(M.__webglDepthbuffer[q],A,!1);else{let K=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,G=M.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,G),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,G)}}else{let q=A.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),Re(M.__webglDepthbuffer,A,!1);else{let K=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,G=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,G),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,G)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function $t(A,M,U){let q=n.get(A);M!==void 0&&ue(q.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&Ye(A)}function k(A){let M=A.texture,U=n.get(A),q=n.get(M);A.addEventListener("dispose",R);let K=A.textures,G=A.isWebGLCubeRenderTarget===!0,Se=K.length>1;if(Se||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=M.version,a.memory.textures++),G){U.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(M.mipmaps&&M.mipmaps.length>0){U.__webglFramebuffer[ie]=[];for(let xe=0;xe<M.mipmaps.length;xe++)U.__webglFramebuffer[ie][xe]=i.createFramebuffer()}else U.__webglFramebuffer[ie]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){U.__webglFramebuffer=[];for(let ie=0;ie<M.mipmaps.length;ie++)U.__webglFramebuffer[ie]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(Se)for(let ie=0,xe=K.length;ie<xe;ie++){let Ee=n.get(K[ie]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&_e(A)===!1){U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ie=0;ie<K.length;ie++){let xe=K[ie];U.__webglColorRenderbuffer[ie]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[ie]);let Ee=r.convert(xe.format,xe.colorSpace),te=r.convert(xe.type),he=_(xe.internalFormat,Ee,te,xe.colorSpace,A.isXRRenderTarget===!0),ze=gt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,ze,he,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.RENDERBUFFER,U.__webglColorRenderbuffer[ie])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),Re(U.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(G){t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Ve(i.TEXTURE_CUBE_MAP,M);for(let ie=0;ie<6;ie++)if(M.mipmaps&&M.mipmaps.length>0)for(let xe=0;xe<M.mipmaps.length;xe++)ue(U.__webglFramebuffer[ie][xe],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,xe);else ue(U.__webglFramebuffer[ie],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);g(M)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let ie=0,xe=K.length;ie<xe;ie++){let Ee=K[ie],te=n.get(Ee),he=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(he=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,te.__webglTexture),Ve(he,Ee),ue(U.__webglFramebuffer,A,Ee,i.COLOR_ATTACHMENT0+ie,he,0),g(Ee)&&p(he)}t.unbindTexture()}else{let ie=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ie=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ie,q.__webglTexture),Ve(ie,M),M.mipmaps&&M.mipmaps.length>0)for(let xe=0;xe<M.mipmaps.length;xe++)ue(U.__webglFramebuffer[xe],A,M,i.COLOR_ATTACHMENT0,ie,xe);else ue(U.__webglFramebuffer,A,M,i.COLOR_ATTACHMENT0,ie,0);g(M)&&p(ie),t.unbindTexture()}A.depthBuffer&&Ye(A)}function mt(A){let M=A.textures;for(let U=0,q=M.length;U<q;U++){let K=M[U];if(g(K)){let G=v(A),Se=n.get(K).__webglTexture;t.bindTexture(G,Se),p(G),t.unbindTexture()}}}let He=[],De=[];function ve(A){if(A.samples>0){if(_e(A)===!1){let M=A.textures,U=A.width,q=A.height,K=i.COLOR_BUFFER_BIT,G=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=n.get(A),ie=M.length>1;if(ie)for(let Ee=0;Ee<M.length;Ee++)t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);let xe=A.texture.mipmaps;xe&&xe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let Ee=0;Ee<M.length;Ee++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),ie){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Se.__webglColorRenderbuffer[Ee]);let te=n.get(M[Ee]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,te,0)}i.blitFramebuffer(0,0,U,q,0,0,U,q,K,i.NEAREST),c===!0&&(He.length=0,De.length=0,He.push(i.COLOR_ATTACHMENT0+Ee),A.depthBuffer&&A.resolveDepthBuffer===!1&&(He.push(G),De.push(G),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,De)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,He))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ie)for(let Ee=0;Ee<M.length;Ee++){t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,Se.__webglColorRenderbuffer[Ee]);let te=n.get(M[Ee]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,te,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){let M=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function gt(A){return Math.min(s.maxSamples,A.samples)}function _e(A){let M=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ge(A){let M=a.render.frame;h.get(A)!==M&&(h.set(A,M),A.update())}function Vt(A,M){let U=A.colorSpace,q=A.format,K=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||U!==dn&&U!==ts&&(je.getTransfer(U)===lt?(q!==Mn||K!==Vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),M}function Ct(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=D,this.setTexture2D=X,this.setTexture2DArray=W,this.setTexture3D=ee,this.setTextureCube=V,this.rebindTextures=$t,this.setupRenderTarget=k,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=_e}function V1(i,e){function t(n,s=ts){let r,a=je.getTransfer(s);if(n===Vn)return i.UNSIGNED_BYTE;if(n===Dl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Nl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===pu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===mu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===uu)return i.BYTE;if(n===fu)return i.SHORT;if(n===fa)return i.UNSIGNED_SHORT;if(n===Ll)return i.INT;if(n===ys)return i.UNSIGNED_INT;if(n===$n)return i.FLOAT;if(n===un)return i.HALF_FLOAT;if(n===gu)return i.ALPHA;if(n===bu)return i.RGB;if(n===Mn)return i.RGBA;if(n===Zr)return i.DEPTH_COMPONENT;if(n===Ss)return i.DEPTH_STENCIL;if(n===zl)return i.RED;if(n===Ul)return i.RED_INTEGER;if(n===xu)return i.RG;if(n===Fl)return i.RG_INTEGER;if(n===Ol)return i.RGBA_INTEGER;if(n===Io||n===ko||n===Lo||n===Do)if(a===lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Io)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Do)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Io)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ko)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Lo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Do)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Bl||n===Hl||n===Vl||n===Gl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Bl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Hl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Vl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Gl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Wl||n===ql||n===Xl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Wl||n===ql)return a===lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Xl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===jl||n===$l||n===Yl||n===Kl||n===Jl||n===Zl||n===Ql||n===eh||n===th||n===nh||n===ih||n===sh||n===rh||n===ah)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===jl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$l)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Yl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Kl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Jl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Zl)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ql)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===eh)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===th)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===nh)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ih)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===sh)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===rh)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ah)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===oh||n===ch||n===lh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===oh)return a===lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ch)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===lh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===hh||n===dh||n===uh||n===fh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===hh)return r.COMPRESSED_RED_RGTC1_EXT;if(n===dh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===uh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===fh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ms?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}function X1(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Au(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,v,_,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),d(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),u(g,p),p.isMeshPhysicalMaterial&&f(g,p,x)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),b(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?c(g,p,v,_):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===yn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===yn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let v=e.get(p),_=v.envMap,x=v.envMapRotation;_&&(g.envMap.value=_,lr.copy(x),lr.x*=-1,lr.y*=-1,lr.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(lr.y*=-1,lr.z*=-1),g.envMapRotation.value.setFromMatrix4(q1.makeRotationFromEuler(lr)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,v,_){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=_*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,v){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===yn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function b(g,p){let v=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function j1(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,_){let x=_.program;n.uniformBlockBinding(v,x)}function l(v,_){let x=s[v.id];x===void 0&&(m(v),x=h(v),s[v.id]=x,v.addEventListener("dispose",g));let w=_.program;n.updateUBOMapping(v,w);let E=e.render.frame;r[v.id]!==E&&(u(v),r[v.id]=E)}function h(v){let _=d();v.__bindingPointIndex=_;let x=i.createBuffer(),w=v.__size,E=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,w,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,x),x}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let _=s[v.id],x=v.uniforms,w=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let E=0,R=x.length;E<R;E++){let I=Array.isArray(x[E])?x[E]:[x[E]];for(let S=0,y=I.length;S<y;S++){let P=I[S];if(f(P,E,S,w)===!0){let D=P.__offset,F=Array.isArray(P.value)?P.value:[P.value],H=0;for(let X=0;X<F.length;X++){let W=F[X],ee=b(W);typeof W=="number"||typeof W=="boolean"?(P.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,D+H,P.__data)):W.isMatrix3?(P.__data[0]=W.elements[0],P.__data[1]=W.elements[1],P.__data[2]=W.elements[2],P.__data[3]=0,P.__data[4]=W.elements[3],P.__data[5]=W.elements[4],P.__data[6]=W.elements[5],P.__data[7]=0,P.__data[8]=W.elements[6],P.__data[9]=W.elements[7],P.__data[10]=W.elements[8],P.__data[11]=0):(W.toArray(P.__data,H),H+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,D,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,_,x,w){let E=v.value,R=_+"_"+x;if(w[R]===void 0)return typeof E=="number"||typeof E=="boolean"?w[R]=E:w[R]=E.clone(),!0;{let I=w[R];if(typeof E=="number"||typeof E=="boolean"){if(I!==E)return w[R]=E,!0}else if(I.equals(E)===!1)return I.copy(E),!0}return!1}function m(v){let _=v.uniforms,x=0,w=16;for(let R=0,I=_.length;R<I;R++){let S=Array.isArray(_[R])?_[R]:[_[R]];for(let y=0,P=S.length;y<P;y++){let D=S[y],F=Array.isArray(D.value)?D.value:[D.value];for(let H=0,X=F.length;H<X;H++){let W=F[H],ee=b(W),V=x%w,Z=V%ee.boundary,le=V+Z;x+=Z,le!==0&&w-le<ee.storage&&(x+=w-le),D.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=x,x+=ee.storage}}}let E=x%w;return E>0&&(x+=w-E),v.__size=x,v.__cache={},this}function b(v){let _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function g(v){let _=v.target;_.removeEventListener("dispose",g);let x=a.indexOf(_.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(let v in s)i.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}var yx,Mx,Sx,Tx,wx,Ex,Ax,Rx,Cx,Px,Ix,kx,Lx,Dx,Nx,zx,Ux,Fx,Ox,Bx,Hx,Vx,Gx,Wx,qx,Xx,jx,$x,Yx,Kx,Jx,Zx,Qx,ev,tv,nv,iv,sv,rv,av,ov,cv,lv,hv,dv,uv,fv,pv,mv,gv,bv,xv,vv,_v,yv,Mv,Sv,Tv,wv,Ev,Av,Rv,Cv,Pv,Iv,kv,Lv,Dv,Nv,zv,Uv,Fv,Ov,Bv,Hv,Vv,Gv,Wv,qv,Xv,jv,$v,Yv,Kv,Jv,Zv,Qv,e_,t_,n_,i_,s_,r_,a_,o_,c_,l_,h_,d_,u_,f_,p_,m_,g_,b_,x_,v_,__,y_,M_,S_,T_,w_,E_,A_,R_,C_,P_,I_,k_,L_,D_,N_,z_,U_,F_,O_,B_,H_,V_,G_,W_,q_,X_,j_,$_,Y_,K_,J_,Z_,Q_,Xe,ce,Ri,xh,cr,ey,ga,Gm,dr,ku,Wm,Lu,Du,Nu,zu,hr,ma,qm,oy,yh,f0,Ym,p0,m0,g0,Km,Jm,Zm,Qm,e0,Fu,Ou,Bu,Uu,ba,s1,r1,i0,_h,p1,m1,b1,w1,Vu,Gu,k1,z1,U1,O1,G1,W1,Wu,qu,lr,q1,Mh,Ut=Ns(()=>{Iu();Iu();yx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Mx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Sx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ex=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ax=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Rx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Px=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ix=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Dx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Nx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ux=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ox=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Gx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Wx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,qx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Xx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,jx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$x=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ev=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,tv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,nv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,iv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,sv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,av=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ov=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,uv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,fv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,pv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,vv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,_v=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,yv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Mv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Sv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Tv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ev=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Av=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Pv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Iv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Dv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Nv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Uv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ov=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Bv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Wv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$v=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Kv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,e_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,t_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,n_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,i_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,s_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,r_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,a_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,o_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,c_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,l_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,h_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,d_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,u_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,f_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,p_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,m_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,g_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,b_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,x_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,v_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,__=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,y_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,S_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,w_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,A_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,R_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,C_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,P_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,I_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,L_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,D_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,N_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,U_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,O_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,H_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,V_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,G_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,q_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,X_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,j_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Y_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,K_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,J_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Z_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Q_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xe={alphahash_fragment:yx,alphahash_pars_fragment:Mx,alphamap_fragment:Sx,alphamap_pars_fragment:Tx,alphatest_fragment:wx,alphatest_pars_fragment:Ex,aomap_fragment:Ax,aomap_pars_fragment:Rx,batching_pars_vertex:Cx,batching_vertex:Px,begin_vertex:Ix,beginnormal_vertex:kx,bsdfs:Lx,iridescence_fragment:Dx,bumpmap_pars_fragment:Nx,clipping_planes_fragment:zx,clipping_planes_pars_fragment:Ux,clipping_planes_pars_vertex:Fx,clipping_planes_vertex:Ox,color_fragment:Bx,color_pars_fragment:Hx,color_pars_vertex:Vx,color_vertex:Gx,common:Wx,cube_uv_reflection_fragment:qx,defaultnormal_vertex:Xx,displacementmap_pars_vertex:jx,displacementmap_vertex:$x,emissivemap_fragment:Yx,emissivemap_pars_fragment:Kx,colorspace_fragment:Jx,colorspace_pars_fragment:Zx,envmap_fragment:Qx,envmap_common_pars_fragment:ev,envmap_pars_fragment:tv,envmap_pars_vertex:nv,envmap_physical_pars_fragment:fv,envmap_vertex:iv,fog_vertex:sv,fog_pars_vertex:rv,fog_fragment:av,fog_pars_fragment:ov,gradientmap_pars_fragment:cv,lightmap_pars_fragment:lv,lights_lambert_fragment:hv,lights_lambert_pars_fragment:dv,lights_pars_begin:uv,lights_toon_fragment:pv,lights_toon_pars_fragment:mv,lights_phong_fragment:gv,lights_phong_pars_fragment:bv,lights_physical_fragment:xv,lights_physical_pars_fragment:vv,lights_fragment_begin:_v,lights_fragment_maps:yv,lights_fragment_end:Mv,logdepthbuf_fragment:Sv,logdepthbuf_pars_fragment:Tv,logdepthbuf_pars_vertex:wv,logdepthbuf_vertex:Ev,map_fragment:Av,map_pars_fragment:Rv,map_particle_fragment:Cv,map_particle_pars_fragment:Pv,metalnessmap_fragment:Iv,metalnessmap_pars_fragment:kv,morphinstance_vertex:Lv,morphcolor_vertex:Dv,morphnormal_vertex:Nv,morphtarget_pars_vertex:zv,morphtarget_vertex:Uv,normal_fragment_begin:Fv,normal_fragment_maps:Ov,normal_pars_fragment:Bv,normal_pars_vertex:Hv,normal_vertex:Vv,normalmap_pars_fragment:Gv,clearcoat_normal_fragment_begin:Wv,clearcoat_normal_fragment_maps:qv,clearcoat_pars_fragment:Xv,iridescence_pars_fragment:jv,opaque_fragment:$v,packing:Yv,premultiplied_alpha_fragment:Kv,project_vertex:Jv,dithering_fragment:Zv,dithering_pars_fragment:Qv,roughnessmap_fragment:e_,roughnessmap_pars_fragment:t_,shadowmap_pars_fragment:n_,shadowmap_pars_vertex:i_,shadowmap_vertex:s_,shadowmask_pars_fragment:r_,skinbase_vertex:a_,skinning_pars_vertex:o_,skinning_vertex:c_,skinnormal_vertex:l_,specularmap_fragment:h_,specularmap_pars_fragment:d_,tonemapping_fragment:u_,tonemapping_pars_fragment:f_,transmission_fragment:p_,transmission_pars_fragment:m_,uv_pars_fragment:g_,uv_pars_vertex:b_,uv_vertex:x_,worldpos_vertex:v_,background_vert:__,background_frag:y_,backgroundCube_vert:M_,backgroundCube_frag:S_,cube_vert:T_,cube_frag:w_,depth_vert:E_,depth_frag:A_,distanceRGBA_vert:R_,distanceRGBA_frag:C_,equirect_vert:P_,equirect_frag:I_,linedashed_vert:k_,linedashed_frag:L_,meshbasic_vert:D_,meshbasic_frag:N_,meshlambert_vert:z_,meshlambert_frag:U_,meshmatcap_vert:F_,meshmatcap_frag:O_,meshnormal_vert:B_,meshnormal_frag:H_,meshphong_vert:V_,meshphong_frag:G_,meshphysical_vert:W_,meshphysical_frag:q_,meshtoon_vert:X_,meshtoon_frag:j_,points_vert:$_,points_frag:Y_,shadow_vert:K_,shadow_frag:J_,sprite_vert:Z_,sprite_frag:Q_},ce={common:{diffuse:{value:new re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new re(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},Ri={basic:{uniforms:gn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:gn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new re(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:gn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new re(0)},specular:{value:new re(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:gn([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:gn([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new re(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:gn([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:gn([ce.points,ce.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:gn([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:gn([ce.common,ce.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:gn([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:gn([ce.sprite,ce.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:gn([ce.common,ce.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:gn([ce.lights,ce.fog,{color:{value:new re(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};Ri.physical={uniforms:gn([Ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new re(0)},specularColor:{value:new re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};xh={r:0,b:0,g:0},cr=new li,ey=new Ce;ga=4,Gm=[.125,.215,.35,.446,.526,.582],dr=20,ku=new Zi,Wm=new re,Lu=null,Du=0,Nu=0,zu=!1,hr=(1+Math.sqrt(5))/2,ma=1/hr,qm=[new C(-hr,ma,0),new C(hr,ma,0),new C(-ma,0,hr),new C(ma,0,hr),new C(0,hr,-ma),new C(0,hr,ma),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)],oy=new C,yh=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=oy}=r;Lu=this._renderer.getRenderTarget(),Du=this._renderer.getActiveCubeFace(),Nu=this._renderer.getActiveMipmapLevel(),zu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$m(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Lu,Du,Nu),this._renderer.xr.enabled=zu,e.scissorTest=!1,vh(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===sr||e.mapping===rr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Lu=this._renderer.getRenderTarget(),Du=this._renderer.getActiveCubeFace(),Nu=this._renderer.getActiveMipmapLevel(),zu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:un,format:Mn,colorSpace:dn,depthBuffer:!1},s=Xm(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xm(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cy(r)),this._blurMaterial=ly(r,e,t)}return s}_compileMaterial(e){let t=new Ue(this._lodPlanes[0],e);this._renderer.compile(t,ku)}_sceneToCubeUV(e,t,n,s,r){let c=new Kt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Wm),d.toneMapping=es,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));let b=new vt({name:"PMREM.Background",side:yn,depthWrite:!1,depthTest:!1}),g=new Ue(new ia,b),p=!1,v=e.background;v?v.isColor&&(b.color.copy(v),e.background=null,p=!0):(b.color.copy(Wm),p=!0);for(let _=0;_<6;_++){let x=_%3;x===0?(c.up.set(0,l[_],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[_],r.y,r.z)):x===1?(c.up.set(0,0,l[_]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[_],r.z)):(c.up.set(0,l[_],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[_]));let w=this._cubeSize;vh(s,x*w,_>2?w:0,w,w),d.setRenderTarget(s),p&&d.render(g,c),d.render(e,c)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=f,d.autoClear=u,e.background=v}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===sr||e.mapping===rr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=$m()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jm());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ue(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;vh(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,ku)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=qm[(s-r-1)%qm.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new Ue(this._lodPlanes[s],l),u=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*dr-1),b=r/m,g=isFinite(r)?1+Math.floor(h*b):dr;g>dr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${dr}`);let p=[],v=0;for(let R=0;R<dr;++R){let I=R/b,S=Math.exp(-I*I/2);p.push(S),R===0?v+=S:R<g&&(v+=2*S)}for(let R=0;R<p.length;R++)p[R]=p[R]/v;u.envMap.value=e.texture,u.samples.value=g,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=m,u.mipInt.value=_-n;let x=this._sizeLods[s],w=3*x*(s>_-ga?s-_+ga:0),E=4*(this._cubeSize-x);vh(t,w,E,3*x,2*x),c.setRenderTarget(t),c.render(d,ku)}};f0=new nn,Ym=new Ys(1,1),p0=new to,m0=new el,g0=new ro,Km=[],Jm=[],Zm=new Float32Array(16),Qm=new Float32Array(9),e0=new Float32Array(4);Fu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=zy(t.type)}},Ou=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=n1(t.type)}},Bu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Uu=/(\w+)(\])?(\[|\.)?/g;ba=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);i1(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};s1=37297,r1=0;i0=new qe;_h=new C;p1=/^[ \t]*#include +<([\w\d./]+)>/gm;m1=new Map;b1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;w1=0,Vu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Gu(e),t.set(e,n)),n}},Gu=class{constructor(e){this.id=w1++,this.code=e,this.usedTimes=0}};k1=0;z1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,U1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;O1={[xl]:vl,[_l]:ha,[yl]:Sl,[Vs]:Ml,[vl]:xl,[ha]:_l,[Sl]:yl,[Ml]:Vs};G1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,W1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Wu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new mo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new it({vertexShader:G1,fragmentShader:W1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ue(new Bn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},qu=class extends _i{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,m=null,b=typeof XRWebGLBinding<"u",g=new Wu,p={},v=t.getContextAttributes(),_=null,x=null,w=[],E=[],R=new fe,I=null,S=new Kt;S.viewport=new ot;let y=new Kt;y.viewport=new ot;let P=[S,y],D=new fl,F=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let Y=w[j];return Y===void 0&&(Y=new sa,w[j]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(j){let Y=w[j];return Y===void 0&&(Y=new sa,w[j]=Y),Y.getGripSpace()},this.getHand=function(j){let Y=w[j];return Y===void 0&&(Y=new sa,w[j]=Y),Y.getHandSpace()};function X(j){let Y=E.indexOf(j.inputSource);if(Y===-1)return;let ue=w[Y];ue!==void 0&&(ue.update(j.inputSource,j.frame,l||a),ue.dispatchEvent({type:j.type,data:j.inputSource}))}function W(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",ee);for(let j=0;j<w.length;j++){let Y=E[j];Y!==null&&(E[j]=null,w[j].disconnect(Y))}F=null,H=null,g.reset();for(let j in p)delete p[j];e.setRenderTarget(_),f=null,u=null,d=null,s=null,x=null,et.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&b&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(_=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",W),s.addEventListener("inputsourceschange",ee),v.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(R),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let ue=null,Re=null,be=null;v.depth&&(be=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=v.stencil?Ss:Zr,Re=v.stencil?Ms:ys);let Ye={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Ye),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),x=new qt(u.textureWidth,u.textureHeight,{format:Mn,type:Vn,depthTexture:new Ys(u.textureWidth,u.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{let ue={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ue),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new qt(f.framebufferWidth,f.framebufferHeight,{format:Mn,type:Vn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),et.setContext(s),et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ee(j){for(let Y=0;Y<j.removed.length;Y++){let ue=j.removed[Y],Re=E.indexOf(ue);Re>=0&&(E[Re]=null,w[Re].disconnect(ue))}for(let Y=0;Y<j.added.length;Y++){let ue=j.added[Y],Re=E.indexOf(ue);if(Re===-1){for(let Ye=0;Ye<w.length;Ye++)if(Ye>=E.length){E.push(ue),Re=Ye;break}else if(E[Ye]===null){E[Ye]=ue,Re=Ye;break}if(Re===-1)break}let be=w[Re];be&&be.connect(ue)}}let V=new C,Z=new C;function le(j,Y,ue){V.setFromMatrixPosition(Y.matrixWorld),Z.setFromMatrixPosition(ue.matrixWorld);let Re=V.distanceTo(Z),be=Y.projectionMatrix.elements,Ye=ue.projectionMatrix.elements,$t=be[14]/(be[10]-1),k=be[14]/(be[10]+1),mt=(be[9]+1)/be[5],He=(be[9]-1)/be[5],De=(be[8]-1)/be[0],ve=(Ye[8]+1)/Ye[0],gt=$t*De,_e=$t*ve,Ge=Re/(-De+ve),Vt=Ge*-De;if(Y.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Vt),j.translateZ(Ge),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),be[10]===-1)j.projectionMatrix.copy(Y.projectionMatrix),j.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{let Ct=$t+Ge,A=k+Ge,M=gt-Vt,U=_e+(Re-Vt),q=mt*k/A*Ct,K=He*k/A*Ct;j.projectionMatrix.makePerspective(M,U,q,K,Ct,A),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function Me(j,Y){Y===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(Y.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let Y=j.near,ue=j.far;g.texture!==null&&(g.depthNear>0&&(Y=g.depthNear),g.depthFar>0&&(ue=g.depthFar)),D.near=y.near=S.near=Y,D.far=y.far=S.far=ue,(F!==D.near||H!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),F=D.near,H=D.far),D.layers.mask=j.layers.mask|6,S.layers.mask=D.layers.mask&3,y.layers.mask=D.layers.mask&5;let Re=j.parent,be=D.cameras;Me(D,Re);for(let Ye=0;Ye<be.length;Ye++)Me(be[Ye],Re);be.length===2?le(D,S,y):D.projectionMatrix.copy(S.projectionMatrix),Ve(j,D,Re)};function Ve(j,Y,ue){ue===null?j.matrix.copy(Y.matrixWorld):(j.matrix.copy(ue.matrixWorld),j.matrix.invert(),j.matrix.multiply(Y.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(Y.projectionMatrix),j.projectionMatrixInverse.copy(Y.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=qs*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(j){c=j,u!==null&&(u.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(D)},this.getCameraTexture=function(j){return p[j]};let ct=null;function ft(j,Y){if(h=Y.getViewerPose(l||a),m=Y,h!==null){let ue=h.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let Re=!1;ue.length!==D.cameras.length&&(D.cameras.length=0,Re=!0);for(let k=0;k<ue.length;k++){let mt=ue[k],He=null;if(f!==null)He=f.getViewport(mt);else{let ve=d.getViewSubImage(u,mt);He=ve.viewport,k===0&&(e.setRenderTargetTextures(x,ve.colorTexture,ve.depthStencilTexture),e.setRenderTarget(x))}let De=P[k];De===void 0&&(De=new Kt,De.layers.enable(k),De.viewport=new ot,P[k]=De),De.matrix.fromArray(mt.transform.matrix),De.matrix.decompose(De.position,De.quaternion,De.scale),De.projectionMatrix.fromArray(mt.projectionMatrix),De.projectionMatrixInverse.copy(De.projectionMatrix).invert(),De.viewport.set(He.x,He.y,He.width,He.height),k===0&&(D.matrix.copy(De.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Re===!0&&D.cameras.push(De)}let be=s.enabledFeatures;if(be&&be.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){d=n.getBinding();let k=d.getDepthInformation(ue[0]);k&&k.isValid&&k.texture&&g.init(k,s.renderState)}if(be&&be.includes("camera-access")&&b){e.state.unbindTexture(),d=n.getBinding();for(let k=0;k<ue.length;k++){let mt=ue[k].camera;if(mt){let He=p[mt];He||(He=new mo,p[mt]=He);let De=d.getCameraImage(mt);He.sourceTexture=De}}}}for(let ue=0;ue<w.length;ue++){let Re=E[ue],be=w[ue];Re!==null&&be!==void 0&&be.update(Re,Y,l||a)}ct&&ct(j,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),m=null}let et=new u0;et.setAnimationLoop(ft),this.setAnimationLoop=function(j){ct=j},this.dispose=function(){}}},lr=new li,q1=new Ce;Mh=class{constructor(e={}){let{canvas:t=Um(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let m=new Uint32Array(4),b=new Int32Array(4),g=null,p=null,v=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=es,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let x=this,w=!1;this._outputColorSpace=It;let E=0,R=0,I=null,S=-1,y=null,P=new ot,D=new ot,F=null,H=new re(0),X=0,W=t.width,ee=t.height,V=1,Z=null,le=null,Me=new ot(0,0,W,ee),Ve=new ot(0,0,W,ee),ct=!1,ft=new oa,et=!1,j=!1,Y=new Ce,ue=new C,Re=new ot,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ye=!1;function $t(){return I===null?V:1}let k=n;function mt(T,N){return t.getContext(T,N)}try{let T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",ye,!1),t.addEventListener("webglcontextcreationerror",Q,!1),k===null){let N="webgl2";if(k=mt(N,T),k===null)throw mt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let He,De,ve,gt,_e,Ge,Vt,Ct,A,M,U,q,K,G,Se,ie,xe,Ee,te,he,ze,Ae,ae,Oe;function L(){He=new dy(k),He.init(),Ae=new V1(k,He),De=new sy(k,He,e,Ae),ve=new B1(k,He),De.reversedDepthBuffer&&u&&ve.buffers.depth.setReversed(!0),gt=new py(k),_e=new A1,Ge=new H1(k,He,ve,_e,De,Ae,gt),Vt=new ay(x),Ct=new hy(x),A=new _x(k),ae=new ny(k,A),M=new uy(k,A,gt,ae),U=new gy(k,M,A,gt),te=new my(k,De,Ge),ie=new ry(_e),q=new E1(x,Vt,Ct,He,De,ae,ie),K=new X1(x,_e),G=new C1,Se=new N1(He),Ee=new ty(x,Vt,Ct,ve,U,f,c),xe=new F1(x,U,De),Oe=new j1(k,gt,De,ve),he=new iy(k,He,gt),ze=new fy(k,He,gt),gt.programs=q.programs,x.capabilities=De,x.extensions=He,x.properties=_e,x.renderLists=G,x.shadowMap=xe,x.state=ve,x.info=gt}L();let J=new qu(x,k);this.xr=J,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let T=He.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=He.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(T){T!==void 0&&(V=T,this.setSize(W,ee,!1))},this.getSize=function(T){return T.set(W,ee)},this.setSize=function(T,N,O=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=T,ee=N,t.width=Math.floor(T*V),t.height=Math.floor(N*V),O===!0&&(t.style.width=T+"px",t.style.height=N+"px"),this.setViewport(0,0,T,N)},this.getDrawingBufferSize=function(T){return T.set(W*V,ee*V).floor()},this.setDrawingBufferSize=function(T,N,O){W=T,ee=N,V=O,t.width=Math.floor(T*O),t.height=Math.floor(N*O),this.setViewport(0,0,T,N)},this.getCurrentViewport=function(T){return T.copy(P)},this.getViewport=function(T){return T.copy(Me)},this.setViewport=function(T,N,O,B){T.isVector4?Me.set(T.x,T.y,T.z,T.w):Me.set(T,N,O,B),ve.viewport(P.copy(Me).multiplyScalar(V).round())},this.getScissor=function(T){return T.copy(Ve)},this.setScissor=function(T,N,O,B){T.isVector4?Ve.set(T.x,T.y,T.z,T.w):Ve.set(T,N,O,B),ve.scissor(D.copy(Ve).multiplyScalar(V).round())},this.getScissorTest=function(){return ct},this.setScissorTest=function(T){ve.setScissorTest(ct=T)},this.setOpaqueSort=function(T){Z=T},this.setTransparentSort=function(T){le=T},this.getClearColor=function(T){return T.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(T=!0,N=!0,O=!0){let B=0;if(T){let z=!1;if(I!==null){let ne=I.texture.format;z=ne===Ol||ne===Fl||ne===Ul}if(z){let ne=I.texture.type,de=ne===Vn||ne===ys||ne===fa||ne===Ms||ne===Dl||ne===Nl,Te=Ee.getClearColor(),ge=Ee.getClearAlpha(),Fe=Te.r,Be=Te.g,Ie=Te.b;de?(m[0]=Fe,m[1]=Be,m[2]=Ie,m[3]=ge,k.clearBufferuiv(k.COLOR,0,m)):(b[0]=Fe,b[1]=Be,b[2]=Ie,b[3]=ge,k.clearBufferiv(k.COLOR,0,b))}else B|=k.COLOR_BUFFER_BIT}N&&(B|=k.DEPTH_BUFFER_BIT),O&&(B|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",ye,!1),t.removeEventListener("webglcontextcreationerror",Q,!1),Ee.dispose(),G.dispose(),Se.dispose(),_e.dispose(),Vt.dispose(),Ct.dispose(),U.dispose(),ae.dispose(),Oe.dispose(),q.dispose(),J.dispose(),J.removeEventListener("sessionstart",gi),J.removeEventListener("sessionend",pp),Ls.stop()};function se(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function ye(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let T=gt.autoReset,N=xe.enabled,O=xe.autoUpdate,B=xe.needsUpdate,z=xe.type;L(),gt.autoReset=T,xe.enabled=N,xe.autoUpdate=O,xe.needsUpdate=B,xe.type=z}function Q(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function $(T){let N=T.target;N.removeEventListener("dispose",$),we(N)}function we(T){We(T),_e.remove(T)}function We(T){let N=_e.get(T).programs;N!==void 0&&(N.forEach(function(O){q.releaseProgram(O)}),T.isShaderMaterial&&q.releaseShaderCache(T))}this.renderBufferDirect=function(T,N,O,B,z,ne){N===null&&(N=be);let de=z.isMesh&&z.matrixWorld.determinant()<0,Te=db(T,N,O,B,z);ve.setMaterial(B,de);let ge=O.index,Fe=1;if(B.wireframe===!0){if(ge=M.getWireframeAttribute(O),ge===void 0)return;Fe=2}let Be=O.drawRange,Ie=O.attributes.position,Ze=Be.start*Fe,bt=(Be.start+Be.count)*Fe;ne!==null&&(Ze=Math.max(Ze,ne.start*Fe),bt=Math.min(bt,(ne.start+ne.count)*Fe)),ge!==null?(Ze=Math.max(Ze,0),bt=Math.min(bt,ge.count)):Ie!=null&&(Ze=Math.max(Ze,0),bt=Math.min(bt,Ie.count));let Gt=bt-Ze;if(Gt<0||Gt===1/0)return;ae.setup(z,B,Te,O,ge);let Pt,wt=he;if(ge!==null&&(Pt=A.get(ge),wt=ze,wt.setIndex(Pt)),z.isMesh)B.wireframe===!0?(ve.setLineWidth(B.wireframeLinewidth*$t()),wt.setMode(k.LINES)):wt.setMode(k.TRIANGLES);else if(z.isLine){let Ne=B.linewidth;Ne===void 0&&(Ne=1),ve.setLineWidth(Ne*$t()),z.isLineSegments?wt.setMode(k.LINES):z.isLineLoop?wt.setMode(k.LINE_LOOP):wt.setMode(k.LINE_STRIP)}else z.isPoints?wt.setMode(k.POINTS):z.isSprite&&wt.setMode(k.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)ea("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),wt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(He.get("WEBGL_multi_draw"))wt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let Ne=z._multiDrawStarts,Nt=z._multiDrawCounts,at=z._multiDrawCount,Dn=ge?A.get(ge).bytesPerElement:1,Ir=_e.get(B).currentProgram.getUniforms();for(let Nn=0;Nn<at;Nn++)Ir.setValue(k,"_gl_DrawID",Nn),wt.render(Ne[Nn]/Dn,Nt[Nn])}else if(z.isInstancedMesh)wt.renderInstances(Ze,Gt,z.count);else if(O.isInstancedBufferGeometry){let Ne=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,Nt=Math.min(O.instanceCount,Ne);wt.renderInstances(Ze,Gt,Nt)}else wt.render(Ze,Gt)};function At(T,N,O){T.transparent===!0&&T.side===Zt&&T.forceSinglePass===!1?(T.side=yn,T.needsUpdate=!0,_c(T,N,O),T.side=ci,T.needsUpdate=!0,_c(T,N,O),T.side=Zt):_c(T,N,O)}this.compile=function(T,N,O=null){O===null&&(O=T),p=Se.get(O),p.init(N),_.push(p),O.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),T!==O&&T.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();let B=new Set;return T.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let ne=z.material;if(ne)if(Array.isArray(ne))for(let de=0;de<ne.length;de++){let Te=ne[de];At(Te,O,z),B.add(Te)}else At(ne,O,z),B.add(ne)}),p=_.pop(),B},this.compileAsync=function(T,N,O=null){let B=this.compile(T,N,O);return new Promise(z=>{function ne(){if(B.forEach(function(de){_e.get(de).currentProgram.isReady()&&B.delete(de)}),B.size===0){z(T);return}setTimeout(ne,10)}He.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let dt=null;function Ui(T){dt&&dt(T)}function gi(){Ls.stop()}function pp(){Ls.start()}let Ls=new u0;Ls.setAnimationLoop(Ui),typeof self<"u"&&Ls.setContext(self),this.setAnimationLoop=function(T){dt=T,J.setAnimationLoop(T),T===null?Ls.stop():Ls.start()},J.addEventListener("sessionstart",gi),J.addEventListener("sessionend",pp),this.render=function(T,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(N),N=J.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,N,I),p=Se.get(T,_.length),p.init(N),_.push(p),Y.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),ft.setFromProjectionMatrix(Y,ai,N.reversedDepth),j=this.localClippingEnabled,et=ie.init(this.clippingPlanes,j),g=G.get(T,v.length),g.init(),v.push(g),J.enabled===!0&&J.isPresenting===!0){let ne=x.xr.getDepthSensingMesh();ne!==null&&Md(ne,N,-1/0,x.sortObjects)}Md(T,N,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(Z,le),Ye=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,Ye&&Ee.addToRenderList(g,T),this.info.render.frame++,et===!0&&ie.beginShadows();let O=p.state.shadowsArray;xe.render(O,T,N),et===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();let B=g.opaque,z=g.transmissive;if(p.setupLights(),N.isArrayCamera){let ne=N.cameras;if(z.length>0)for(let de=0,Te=ne.length;de<Te;de++){let ge=ne[de];gp(B,z,T,ge)}Ye&&Ee.render(T);for(let de=0,Te=ne.length;de<Te;de++){let ge=ne[de];mp(g,T,ge,ge.viewport)}}else z.length>0&&gp(B,z,T,N),Ye&&Ee.render(T),mp(g,T,N);I!==null&&R===0&&(Ge.updateMultisampleRenderTarget(I),Ge.updateRenderTargetMipmap(I)),T.isScene===!0&&T.onAfterRender(x,T,N),ae.resetDefaultState(),S=-1,y=null,_.pop(),_.length>0?(p=_[_.length-1],et===!0&&ie.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?g=v[v.length-1]:g=null};function Md(T,N,O,B){if(T.visible===!1)return;if(T.layers.test(N.layers)){if(T.isGroup)O=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(N);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ft.intersectsSprite(T)){B&&Re.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Y);let de=U.update(T),Te=T.material;Te.visible&&g.push(T,de,Te,O,Re.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||ft.intersectsObject(T))){let de=U.update(T),Te=T.material;if(B&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Re.copy(T.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),Re.copy(de.boundingSphere.center)),Re.applyMatrix4(T.matrixWorld).applyMatrix4(Y)),Array.isArray(Te)){let ge=de.groups;for(let Fe=0,Be=ge.length;Fe<Be;Fe++){let Ie=ge[Fe],Ze=Te[Ie.materialIndex];Ze&&Ze.visible&&g.push(T,de,Ze,O,Re.z,Ie)}}else Te.visible&&g.push(T,de,Te,O,Re.z,null)}}let ne=T.children;for(let de=0,Te=ne.length;de<Te;de++)Md(ne[de],N,O,B)}function mp(T,N,O,B){let z=T.opaque,ne=T.transmissive,de=T.transparent;p.setupLightsView(O),et===!0&&ie.setGlobalState(x.clippingPlanes,O),B&&ve.viewport(P.copy(B)),z.length>0&&vc(z,N,O),ne.length>0&&vc(ne,N,O),de.length>0&&vc(de,N,O),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function gp(T,N,O,B){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[B.id]===void 0&&(p.state.transmissionRenderTarget[B.id]=new qt(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float")?un:Vn,minFilter:di,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace}));let ne=p.state.transmissionRenderTarget[B.id],de=B.viewport||P;ne.setSize(de.z*x.transmissionResolutionScale,de.w*x.transmissionResolutionScale);let Te=x.getRenderTarget(),ge=x.getActiveCubeFace(),Fe=x.getActiveMipmapLevel();x.setRenderTarget(ne),x.getClearColor(H),X=x.getClearAlpha(),X<1&&x.setClearColor(16777215,.5),x.clear(),Ye&&Ee.render(O);let Be=x.toneMapping;x.toneMapping=es;let Ie=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),p.setupLightsView(B),et===!0&&ie.setGlobalState(x.clippingPlanes,B),vc(T,O,B),Ge.updateMultisampleRenderTarget(ne),Ge.updateRenderTargetMipmap(ne),He.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let bt=0,Gt=N.length;bt<Gt;bt++){let Pt=N[bt],wt=Pt.object,Ne=Pt.geometry,Nt=Pt.material,at=Pt.group;if(Nt.side===Zt&&wt.layers.test(B.layers)){let Dn=Nt.side;Nt.side=yn,Nt.needsUpdate=!0,bp(wt,O,B,Ne,Nt,at),Nt.side=Dn,Nt.needsUpdate=!0,Ze=!0}}Ze===!0&&(Ge.updateMultisampleRenderTarget(ne),Ge.updateRenderTargetMipmap(ne))}x.setRenderTarget(Te,ge,Fe),x.setClearColor(H,X),Ie!==void 0&&(B.viewport=Ie),x.toneMapping=Be}function vc(T,N,O){let B=N.isScene===!0?N.overrideMaterial:null;for(let z=0,ne=T.length;z<ne;z++){let de=T[z],Te=de.object,ge=de.geometry,Fe=de.group,Be=de.material;Be.allowOverride===!0&&B!==null&&(Be=B),Te.layers.test(O.layers)&&bp(Te,N,O,ge,Be,Fe)}}function bp(T,N,O,B,z,ne){T.onBeforeRender(x,N,O,B,z,ne),T.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),z.onBeforeRender(x,N,O,B,T,ne),z.transparent===!0&&z.side===Zt&&z.forceSinglePass===!1?(z.side=yn,z.needsUpdate=!0,x.renderBufferDirect(O,N,B,z,T,ne),z.side=ci,z.needsUpdate=!0,x.renderBufferDirect(O,N,B,z,T,ne),z.side=Zt):x.renderBufferDirect(O,N,B,z,T,ne),T.onAfterRender(x,N,O,B,z,ne)}function _c(T,N,O){N.isScene!==!0&&(N=be);let B=_e.get(T),z=p.state.lights,ne=p.state.shadowsArray,de=z.state.version,Te=q.getParameters(T,z.state,ne,N,O),ge=q.getProgramCacheKey(Te),Fe=B.programs;B.environment=T.isMeshStandardMaterial?N.environment:null,B.fog=N.fog,B.envMap=(T.isMeshStandardMaterial?Ct:Vt).get(T.envMap||B.environment),B.envMapRotation=B.environment!==null&&T.envMap===null?N.environmentRotation:T.envMapRotation,Fe===void 0&&(T.addEventListener("dispose",$),Fe=new Map,B.programs=Fe);let Be=Fe.get(ge);if(Be!==void 0){if(B.currentProgram===Be&&B.lightsStateVersion===de)return vp(T,Te),Be}else Te.uniforms=q.getUniforms(T),T.onBeforeCompile(Te,x),Be=q.acquireProgram(Te,ge),Fe.set(ge,Be),B.uniforms=Te.uniforms;let Ie=B.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ie.clippingPlanes=ie.uniform),vp(T,Te),B.needsLights=fb(T),B.lightsStateVersion=de,B.needsLights&&(Ie.ambientLightColor.value=z.state.ambient,Ie.lightProbe.value=z.state.probe,Ie.directionalLights.value=z.state.directional,Ie.directionalLightShadows.value=z.state.directionalShadow,Ie.spotLights.value=z.state.spot,Ie.spotLightShadows.value=z.state.spotShadow,Ie.rectAreaLights.value=z.state.rectArea,Ie.ltc_1.value=z.state.rectAreaLTC1,Ie.ltc_2.value=z.state.rectAreaLTC2,Ie.pointLights.value=z.state.point,Ie.pointLightShadows.value=z.state.pointShadow,Ie.hemisphereLights.value=z.state.hemi,Ie.directionalShadowMap.value=z.state.directionalShadowMap,Ie.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ie.spotShadowMap.value=z.state.spotShadowMap,Ie.spotLightMatrix.value=z.state.spotLightMatrix,Ie.spotLightMap.value=z.state.spotLightMap,Ie.pointShadowMap.value=z.state.pointShadowMap,Ie.pointShadowMatrix.value=z.state.pointShadowMatrix),B.currentProgram=Be,B.uniformsList=null,Be}function xp(T){if(T.uniformsList===null){let N=T.currentProgram.getUniforms();T.uniformsList=ba.seqWithValue(N.seq,T.uniforms)}return T.uniformsList}function vp(T,N){let O=_e.get(T);O.outputColorSpace=N.outputColorSpace,O.batching=N.batching,O.batchingColor=N.batchingColor,O.instancing=N.instancing,O.instancingColor=N.instancingColor,O.instancingMorph=N.instancingMorph,O.skinning=N.skinning,O.morphTargets=N.morphTargets,O.morphNormals=N.morphNormals,O.morphColors=N.morphColors,O.morphTargetsCount=N.morphTargetsCount,O.numClippingPlanes=N.numClippingPlanes,O.numIntersection=N.numClipIntersection,O.vertexAlphas=N.vertexAlphas,O.vertexTangents=N.vertexTangents,O.toneMapping=N.toneMapping}function db(T,N,O,B,z){N.isScene!==!0&&(N=be),Ge.resetTextureUnits();let ne=N.fog,de=B.isMeshStandardMaterial?N.environment:null,Te=I===null?x.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:dn,ge=(B.isMeshStandardMaterial?Ct:Vt).get(B.envMap||de),Fe=B.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Be=!!O.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Ie=!!O.morphAttributes.position,Ze=!!O.morphAttributes.normal,bt=!!O.morphAttributes.color,Gt=es;B.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Gt=x.toneMapping);let Pt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,wt=Pt!==void 0?Pt.length:0,Ne=_e.get(B),Nt=p.state.lights;if(et===!0&&(j===!0||T!==y)){let xn=T===y&&B.id===S;ie.setState(B,T,xn)}let at=!1;B.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==Nt.state.version||Ne.outputColorSpace!==Te||z.isBatchedMesh&&Ne.batching===!1||!z.isBatchedMesh&&Ne.batching===!0||z.isBatchedMesh&&Ne.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Ne.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Ne.instancing===!1||!z.isInstancedMesh&&Ne.instancing===!0||z.isSkinnedMesh&&Ne.skinning===!1||!z.isSkinnedMesh&&Ne.skinning===!0||z.isInstancedMesh&&Ne.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ne.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ne.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ne.instancingMorph===!1&&z.morphTexture!==null||Ne.envMap!==ge||B.fog===!0&&Ne.fog!==ne||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==ie.numPlanes||Ne.numIntersection!==ie.numIntersection)||Ne.vertexAlphas!==Fe||Ne.vertexTangents!==Be||Ne.morphTargets!==Ie||Ne.morphNormals!==Ze||Ne.morphColors!==bt||Ne.toneMapping!==Gt||Ne.morphTargetsCount!==wt)&&(at=!0):(at=!0,Ne.__version=B.version);let Dn=Ne.currentProgram;at===!0&&(Dn=_c(B,N,z));let Ir=!1,Nn=!1,Ua=!1,zt=Dn.getUniforms(),qn=Ne.uniforms;if(ve.useProgram(Dn.program)&&(Ir=!0,Nn=!0,Ua=!0),B.id!==S&&(S=B.id,Nn=!0),Ir||y!==T){ve.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),zt.setValue(k,"projectionMatrix",T.projectionMatrix),zt.setValue(k,"viewMatrix",T.matrixWorldInverse);let En=zt.map.cameraPosition;En!==void 0&&En.setValue(k,ue.setFromMatrixPosition(T.matrixWorld)),De.logarithmicDepthBuffer&&zt.setValue(k,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&zt.setValue(k,"isOrthographic",T.isOrthographicCamera===!0),y!==T&&(y=T,Nn=!0,Ua=!0)}if(z.isSkinnedMesh){zt.setOptional(k,z,"bindMatrix"),zt.setOptional(k,z,"bindMatrixInverse");let xn=z.skeleton;xn&&(xn.boneTexture===null&&xn.computeBoneTexture(),zt.setValue(k,"boneTexture",xn.boneTexture,Ge))}z.isBatchedMesh&&(zt.setOptional(k,z,"batchingTexture"),zt.setValue(k,"batchingTexture",z._matricesTexture,Ge),zt.setOptional(k,z,"batchingIdTexture"),zt.setValue(k,"batchingIdTexture",z._indirectTexture,Ge),zt.setOptional(k,z,"batchingColorTexture"),z._colorsTexture!==null&&zt.setValue(k,"batchingColorTexture",z._colorsTexture,Ge));let Xn=O.morphAttributes;if((Xn.position!==void 0||Xn.normal!==void 0||Xn.color!==void 0)&&te.update(z,O,Dn),(Nn||Ne.receiveShadow!==z.receiveShadow)&&(Ne.receiveShadow=z.receiveShadow,zt.setValue(k,"receiveShadow",z.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(qn.envMap.value=ge,qn.flipEnvMap.value=ge.isCubeTexture&&ge.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&N.environment!==null&&(qn.envMapIntensity.value=N.environmentIntensity),Nn&&(zt.setValue(k,"toneMappingExposure",x.toneMappingExposure),Ne.needsLights&&ub(qn,Ua),ne&&B.fog===!0&&K.refreshFogUniforms(qn,ne),K.refreshMaterialUniforms(qn,B,V,ee,p.state.transmissionRenderTarget[T.id]),ba.upload(k,xp(Ne),qn,Ge)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(ba.upload(k,xp(Ne),qn,Ge),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&zt.setValue(k,"center",z.center),zt.setValue(k,"modelViewMatrix",z.modelViewMatrix),zt.setValue(k,"normalMatrix",z.normalMatrix),zt.setValue(k,"modelMatrix",z.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){let xn=B.uniformsGroups;for(let En=0,Sd=xn.length;En<Sd;En++){let Ds=xn[En];Oe.update(Ds,Dn),Oe.bind(Ds,Dn)}}return Dn}function ub(T,N){T.ambientLightColor.needsUpdate=N,T.lightProbe.needsUpdate=N,T.directionalLights.needsUpdate=N,T.directionalLightShadows.needsUpdate=N,T.pointLights.needsUpdate=N,T.pointLightShadows.needsUpdate=N,T.spotLights.needsUpdate=N,T.spotLightShadows.needsUpdate=N,T.rectAreaLights.needsUpdate=N,T.hemisphereLights.needsUpdate=N}function fb(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(T,N,O){let B=_e.get(T);B.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),_e.get(T.texture).__webglTexture=N,_e.get(T.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:O,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,N){let O=_e.get(T);O.__webglFramebuffer=N,O.__useDefaultFramebuffer=N===void 0};let pb=k.createFramebuffer();this.setRenderTarget=function(T,N=0,O=0){I=T,E=N,R=O;let B=!0,z=null,ne=!1,de=!1;if(T){let ge=_e.get(T);if(ge.__useDefaultFramebuffer!==void 0)ve.bindFramebuffer(k.FRAMEBUFFER,null),B=!1;else if(ge.__webglFramebuffer===void 0)Ge.setupRenderTarget(T);else if(ge.__hasExternalTextures)Ge.rebindTextures(T,_e.get(T.texture).__webglTexture,_e.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Ie=T.depthTexture;if(ge.__boundDepthTexture!==Ie){if(Ie!==null&&_e.has(Ie)&&(T.width!==Ie.image.width||T.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ge.setupDepthRenderbuffer(T)}}let Fe=T.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(de=!0);let Be=_e.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Be[N])?z=Be[N][O]:z=Be[N],ne=!0):T.samples>0&&Ge.useMultisampledRTT(T)===!1?z=_e.get(T).__webglMultisampledFramebuffer:Array.isArray(Be)?z=Be[O]:z=Be,P.copy(T.viewport),D.copy(T.scissor),F=T.scissorTest}else P.copy(Me).multiplyScalar(V).floor(),D.copy(Ve).multiplyScalar(V).floor(),F=ct;if(O!==0&&(z=pb),ve.bindFramebuffer(k.FRAMEBUFFER,z)&&B&&ve.drawBuffers(T,z),ve.viewport(P),ve.scissor(D),ve.setScissorTest(F),ne){let ge=_e.get(T.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+N,ge.__webglTexture,O)}else if(de){let ge=N;for(let Fe=0;Fe<T.textures.length;Fe++){let Be=_e.get(T.textures[Fe]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Fe,Be.__webglTexture,O,ge)}}else if(T!==null&&O!==0){let ge=_e.get(T.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,ge.__webglTexture,O)}S=-1},this.readRenderTargetPixels=function(T,N,O,B,z,ne,de,Te=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=_e.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&de!==void 0&&(ge=ge[de]),ge){ve.bindFramebuffer(k.FRAMEBUFFER,ge);try{let Fe=T.textures[Te],Be=Fe.format,Ie=Fe.type;if(!De.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!De.textureTypeReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=T.width-B&&O>=0&&O<=T.height-z&&(T.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Te),k.readPixels(N,O,B,z,Ae.convert(Be),Ae.convert(Ie),ne))}finally{let Fe=I!==null?_e.get(I).__webglFramebuffer:null;ve.bindFramebuffer(k.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(T,N,O,B,z,ne,de,Te=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=_e.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&de!==void 0&&(ge=ge[de]),ge)if(N>=0&&N<=T.width-B&&O>=0&&O<=T.height-z){ve.bindFramebuffer(k.FRAMEBUFFER,ge);let Fe=T.textures[Te],Be=Fe.format,Ie=Fe.type;if(!De.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!De.textureTypeReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ze=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Ze),k.bufferData(k.PIXEL_PACK_BUFFER,ne.byteLength,k.STREAM_READ),T.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Te),k.readPixels(N,O,B,z,Ae.convert(Be),Ae.convert(Ie),0);let bt=I!==null?_e.get(I).__webglFramebuffer:null;ve.bindFramebuffer(k.FRAMEBUFFER,bt);let Gt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await Fm(k,Gt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Ze),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,ne),k.deleteBuffer(Ze),k.deleteSync(Gt),ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,N=null,O=0){let B=Math.pow(2,-O),z=Math.floor(T.image.width*B),ne=Math.floor(T.image.height*B),de=N!==null?N.x:0,Te=N!==null?N.y:0;Ge.setTexture2D(T,0),k.copyTexSubImage2D(k.TEXTURE_2D,O,0,0,de,Te,z,ne),ve.unbindTexture()};let mb=k.createFramebuffer(),gb=k.createFramebuffer();this.copyTextureToTexture=function(T,N,O=null,B=null,z=0,ne=null){ne===null&&(z!==0?(ea("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ne=z,z=0):ne=0);let de,Te,ge,Fe,Be,Ie,Ze,bt,Gt,Pt=T.isCompressedTexture?T.mipmaps[ne]:T.image;if(O!==null)de=O.max.x-O.min.x,Te=O.max.y-O.min.y,ge=O.isBox3?O.max.z-O.min.z:1,Fe=O.min.x,Be=O.min.y,Ie=O.isBox3?O.min.z:0;else{let Xn=Math.pow(2,-z);de=Math.floor(Pt.width*Xn),Te=Math.floor(Pt.height*Xn),T.isDataArrayTexture?ge=Pt.depth:T.isData3DTexture?ge=Math.floor(Pt.depth*Xn):ge=1,Fe=0,Be=0,Ie=0}B!==null?(Ze=B.x,bt=B.y,Gt=B.z):(Ze=0,bt=0,Gt=0);let wt=Ae.convert(N.format),Ne=Ae.convert(N.type),Nt;N.isData3DTexture?(Ge.setTexture3D(N,0),Nt=k.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Ge.setTexture2DArray(N,0),Nt=k.TEXTURE_2D_ARRAY):(Ge.setTexture2D(N,0),Nt=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,N.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,N.unpackAlignment);let at=k.getParameter(k.UNPACK_ROW_LENGTH),Dn=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Ir=k.getParameter(k.UNPACK_SKIP_PIXELS),Nn=k.getParameter(k.UNPACK_SKIP_ROWS),Ua=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Pt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Pt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Fe),k.pixelStorei(k.UNPACK_SKIP_ROWS,Be),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ie);let zt=T.isDataArrayTexture||T.isData3DTexture,qn=N.isDataArrayTexture||N.isData3DTexture;if(T.isDepthTexture){let Xn=_e.get(T),xn=_e.get(N),En=_e.get(Xn.__renderTarget),Sd=_e.get(xn.__renderTarget);ve.bindFramebuffer(k.READ_FRAMEBUFFER,En.__webglFramebuffer),ve.bindFramebuffer(k.DRAW_FRAMEBUFFER,Sd.__webglFramebuffer);for(let Ds=0;Ds<ge;Ds++)zt&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,_e.get(T).__webglTexture,z,Ie+Ds),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,_e.get(N).__webglTexture,ne,Gt+Ds)),k.blitFramebuffer(Fe,Be,de,Te,Ze,bt,de,Te,k.DEPTH_BUFFER_BIT,k.NEAREST);ve.bindFramebuffer(k.READ_FRAMEBUFFER,null),ve.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(z!==0||T.isRenderTargetTexture||_e.has(T)){let Xn=_e.get(T),xn=_e.get(N);ve.bindFramebuffer(k.READ_FRAMEBUFFER,mb),ve.bindFramebuffer(k.DRAW_FRAMEBUFFER,gb);for(let En=0;En<ge;En++)zt?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Xn.__webglTexture,z,Ie+En):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Xn.__webglTexture,z),qn?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,xn.__webglTexture,ne,Gt+En):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,xn.__webglTexture,ne),z!==0?k.blitFramebuffer(Fe,Be,de,Te,Ze,bt,de,Te,k.COLOR_BUFFER_BIT,k.NEAREST):qn?k.copyTexSubImage3D(Nt,ne,Ze,bt,Gt+En,Fe,Be,de,Te):k.copyTexSubImage2D(Nt,ne,Ze,bt,Fe,Be,de,Te);ve.bindFramebuffer(k.READ_FRAMEBUFFER,null),ve.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else qn?T.isDataTexture||T.isData3DTexture?k.texSubImage3D(Nt,ne,Ze,bt,Gt,de,Te,ge,wt,Ne,Pt.data):N.isCompressedArrayTexture?k.compressedTexSubImage3D(Nt,ne,Ze,bt,Gt,de,Te,ge,wt,Pt.data):k.texSubImage3D(Nt,ne,Ze,bt,Gt,de,Te,ge,wt,Ne,Pt):T.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,ne,Ze,bt,de,Te,wt,Ne,Pt.data):T.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,ne,Ze,bt,Pt.width,Pt.height,wt,Pt.data):k.texSubImage2D(k.TEXTURE_2D,ne,Ze,bt,de,Te,wt,Ne,Pt);k.pixelStorei(k.UNPACK_ROW_LENGTH,at),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Dn),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Ir),k.pixelStorei(k.UNPACK_SKIP_ROWS,Nn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ua),ne===0&&N.generateMipmaps&&k.generateMipmap(Nt),ve.unbindTexture()},this.initRenderTarget=function(T){_e.get(T).__webglFramebuffer===void 0&&Ge.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Ge.setTextureCube(T,0):T.isData3DTexture?Ge.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ge.setTexture2DArray(T,0):Ge.setTexture2D(T,0),ve.unbindTexture()},this.resetState=function(){E=0,R=0,I=null,ve.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}}});function Sa(i,e,t=[],n){let s=$e[i],r=s.base,a=Math.max(1,e)-1,o={...r,atk:0,hp:0,def:0};for(let l of qh)o[l]=Math.floor(s.attr[l]+s.grow[l]*a);for(let l of t)if(l)for(let[h,d]of Object.entries(l.stats))o[h]=(o[h]||0)+d;o.main=s.main,o.atk+=o[s.main]*Xh,o.hp+=o.vit*jh,o.def+=Math.round(r.def*(1+a*.05))+Math.floor(o.str*If),o.crit+=o.dex*kf;let c=Lt(i,n).passive.mods;return o.hp*=1+(c.hpPct||0),o.def=Math.round(o.def*(1+(c.defPct||0))),o.atk=Math.round(o.atk*(1+(c.atkPct||0))),o.crit+=c.crit||0,o.critDmg+=c.critDmg||0,o.haste=(o.haste||0)+(c.haste||0),o.speed*=1+(c.speedPct||0),o.hp=Math.round(o.hp),o}function F0(i){let e=i.atk*(1+Math.min(1,i.crit)*(i.critDmg-1))*(1+Li(i)*.5),t=i.hp*(1+i.def/100)/12;return Math.round(e+t)}var $e,fi,ss,qh,Xh,jh,If,kf,mr,Wh,Lf,$h,IM,gr,Li,Lt,Zo,Es,wn,Jo,Ot,Df,Yh,Kh,U0,pi=Ns(()=>{$e={knight:{name:"\uC131\uAE30\uC0AC",model:"Knight",show:["1H_Sword","Badge_Shield"],idle:"Idle",run:"Running_A",trail:"#ffd98a",desc:"\uBC29\uD328\uB85C \uD30C\uD2F0\uB97C \uC9C0\uD0A4\uAC70\uB098 \uC131\uAC80\uC73C\uB85C \uC801\uC744 \uBCA0\uB294 \uADFC\uC811 \uC804\uC0AC. \uAC15\uB825\uD55C \uBB34\uB825\uD654.",main:"str",attr:{str:20,dex:8,int:4,vit:28},grow:{str:1.4,dex:.4,int:.2,vit:2.24},base:{def:60,crit:.092,critDmg:2,speed:5.4,haste:0},basic:["kn_b1","kn_b2","kn_b3"]},barbarian:{name:"\uAD11\uC804\uC0AC",model:"Barbarian",show:["2H_Axe","Barbarian_Hat"],idle:"2H_Melee_Idle",run:"Running_A",trail:"#ff7a4a",desc:"\uAC70\uB300\uD55C \uB3C4\uB07C\uB97C \uD718\uB450\uB974\uB294 \uB3CC\uACA9\uD615 \uB51C\uB7EC. \uCCB4\uB825\uC774 \uB0AE\uC744\uC218\uB85D \uAC15\uD574\uC9D0.",main:"str",attr:{str:22,dex:10,int:3,vit:25},grow:{str:1.57,dex:.5,int:.1,vit:2},base:{def:34,crit:.11,critDmg:2,speed:5.5,haste:0},basic:["bb_b1","bb_b2","bb_b3"]},mage:{name:"\uB9C8\uBC95\uC0AC",model:"Mage",show:["2H_Staff","Mage_Hat"],idle:"Idle",run:"Running_B",trail:"#8fd0ff",desc:"\uC6D0\uC18C \uB9C8\uBC95\uC73C\uB85C \uC801\uC744 \uC4F8\uC5B4\uBC84\uB9AC\uAC70\uB098 \uCE58\uC720 \uB9C8\uBC95\uC73C\uB85C \uD30C\uD2F0\uB97C \uC0B4\uB9AC\uB294 \uC6D0\uAC70\uB9AC \uB9C8\uBC95\uC0AC.",main:"int",attr:{str:6,dex:10,int:24,vit:19},grow:{str:.3,dex:.5,int:1.65,vit:1.52},base:{def:27,crit:.11,critDmg:2,speed:5.3,haste:0},basic:["mg_b1","mg_b2","mg_b1"]},rogue:{name:"\uB3C4\uC801",model:"Rogue_Hooded",show:["Knife","Knife_Offhand"],idle:"Idle",run:"Running_A",trail:"#b98cff",desc:"\uC30D\uB2E8\uAC80\uC73C\uB85C \uB4F1 \uB4A4\uB97C \uB178\uB9AC\uB294 \uC554\uC0B4\uC790. \uBC31\uC5B4\uD0DD \uD53C\uD574 \uD2B9\uD654.",main:"dex",attr:{str:10,dex:21,int:5,vit:21},grow:{str:.5,dex:1.48,int:.2,vit:1.68},base:{def:35,crit:.199,critDmg:2.1,speed:5.9,haste:.1},basic:["rg_b1","rg_b2","rg_b3"]},archer:{name:"\uAD81\uC218",model:"Rogue_Hooded",show:["2H_Crossbow"],hide:["Rogue_Cape"],idle:"Idle",run:"Running_A",trail:"#a8e070",desc:"\uC11D\uAD81\uC73C\uB85C \uBA3C \uAC70\uB9AC\uC5D0\uC11C \uC801\uC744 \uAFF0\uB6AB\uB294 \uC0AC\uC218. \uAC70\uB9AC\uB97C \uBC8C\uB9AC\uBA70 \uC18D\uC0AC.",main:"dex",attr:{str:8,dex:22,int:6,vit:20},grow:{str:.4,dex:1.54,int:.3,vit:1.6},base:{def:31,crit:.138,critDmg:2.1,speed:5.6,haste:.05},basic:["ar_b1","ar_b2","ar_b1"]}},fi=Object.keys($e),ss={str:"\uD798",dex:"\uBBFC\uCCA9",int:"\uC9C0\uB2A5",vit:"\uCCB4\uB825"},qh=Object.keys(ss),Xh=5,jh=50,If=.5,kf=.001,mr=i=>$e[i].main==="int"?"\uB9C8\uB825":"\uACF5\uACA9\uB825",Wh={knight:[{id:"guardian",haste:"move",name:"\uC218\uD638 \uAE30\uC0AC",role:"tank",desc:"\uC801\uC758 \uACF5\uACA9\uC744 \uB04C\uC5B4\uC548\uACE0 \uD30C\uD2F0\uB97C \uC9C0\uD0A4\uB294 \uBC29\uD328.",skills:{q:"kn_q",w:"kn_taunt",e:"kn_e",r:"kn_r"},passive:{name:"\uBD88\uAD74\uC758 \uC218\uD638\uC790",desc:"\uCD5C\uB300 \uC0DD\uBA85\uB825 +35%, \uBC29\uC5B4\uB825 +60%, \uBC1B\uB294 \uD53C\uD574 -10%, \uBCF4\uD638\uB9C9 \uD6A8\uACFC +50%.",mods:{hpPct:.35,defPct:.6,dr:.1,shieldMult:1.5}}},{id:"crusader",haste:"move",name:"\uC9D5\uBC8C \uAE30\uC0AC",role:"dps",desc:"\uC131\uAC80\uC73C\uB85C \uC801\uC9C4\uC744 \uBCA0\uC5B4 \uAC00\uB974\uB294 \uACF5\uACA9\uD615 \uAE30\uC0AC.",skills:{q:"kn_q",w:"kn_w",e:"kn_holy",r:"kn_r"},passive:{name:"\uC9D5\uBC8C\uC758 \uB9F9\uC138",desc:"\uACF5\uACA9\uB825 +15%, \uCE58\uBA85\uD0C0 \uD655\uB960 +8%.",mods:{atkPct:.15,crit:.08}}}],barbarian:[{id:"berserker",haste:"move",name:"\uAD11\uC804\uC0AC",role:"dps",desc:"\uC0C1\uCC98\uAC00 \uAE4A\uC744\uC218\uB85D \uAC70\uC138\uC9C0\uB294 \uB3CC\uACA9\uD615 \uB51C\uB7EC.",skills:{q:"bb_q",w:"bb_w",e:"bb_e",r:"bb_r"},passive:{name:"\uD22C\uC9C0",desc:"\uC0DD\uBA85\uB825\uC774 50% \uC774\uD558\uC77C \uB54C \uACF5\uACA9\uB825 +20%.",mods:{lowHpAtk:.2}}},{id:"warlord",haste:"move",name:"\uC804\uC7C1\uAD70\uC8FC",role:"tank",desc:"\uD3EC\uD6A8\uB85C \uC801\uC744 \uB04C\uC5B4\uBAA8\uC73C\uACE0 \uAC15\uCCA0 \uAC19\uC740 \uBAB8\uC73C\uB85C \uBC84\uD2F0\uB294 \uC804\uC120\uC758 \uBCBD.",skills:{q:"bb_q",w:"bb_roar",e:"bb_iron",r:"bb_quake"},passive:{name:"\uAC15\uCCA0 \uC758\uC9C0",desc:"\uCD5C\uB300 \uC0DD\uBA85\uB825 +35%, \uBC29\uC5B4\uB825 +60%, \uBC1B\uB294 \uD53C\uD574 -10%.",mods:{hpPct:.35,defPct:.6,dr:.1}}}],mage:[{id:"elemental",haste:"cast",name:"\uC6D0\uC18C\uC220\uC0AC",role:"dps",desc:"\uD654\uC5FC, \uC11C\uB9AC, \uBC88\uAC1C\uB85C \uC801\uC744 \uD55C\uAEBC\uBC88\uC5D0 \uC4F8\uC5B4\uBC84\uB9BC.",skills:{q:"mg_q",w:"mg_w",e:"mg_chain",r:"mg_r"},passive:{name:"\uC6D0\uC18C \uC99D\uD3ED",desc:"\uCE58\uBA85\uD0C0 \uD53C\uD574 +30%, \uC2E0\uC18D +10%.",mods:{critDmg:.3,haste:.1}}},{id:"healer",haste:"cdr",name:"\uCE58\uC720\uC0AC",role:"heal",desc:"\uBE5B\uC73C\uB85C \uC801\uC744 \uD0DC\uC6B0\uBA70 \uD30C\uD2F0\uB97C \uD68C\uBCF5\uC2DC\uD0A4\uACE0 \uC4F0\uB7EC\uC9C4 \uB3D9\uB8CC\uB97C \uC77C\uC73C\uD0B4. \uD63C\uC790\uC11C\uB3C4 \uC2F8\uC6B8 \uC218 \uC788\uC74C.",skills:{q:"mg_holy",w:"mg_spring",e:"mg_orb",r:"mg_miracle"},passive:{name:"\uC0DD\uBA85\uC758 \uC0D8",desc:"\uCE58\uC720\uB7C9 +30%, \uCD5C\uB300 \uC0DD\uBA85\uB825 +10%, \uB9C8\uB825 +10%.",mods:{healMult:1.3,hpPct:.1,atkPct:.1}}}],archer:[{id:"marksman",haste:"cdr",name:"\uC11D\uAD81 \uC0AC\uC218",role:"dps",desc:"\uBB35\uC9C1\uD55C \uC11D\uAD81\uC73C\uB85C \uD55C \uBC1C \uD55C \uBC1C \uC801\uC744 \uAFF0\uB6AB\uB294 \uC800\uACA9\uC218.",skills:{q:"ar_q",w:"ar_w",e:"ar_e",r:"ar_r"},passive:{name:"\uB9E4\uC758 \uB208",desc:"\uCE58\uBA85\uD0C0 \uD655\uB960 +10%, \uCE58\uBA85\uD0C0 \uD53C\uD574 +20%.",mods:{crit:.1,critDmg:.2}}},{id:"ranger",haste:"attack",name:"\uC7A5\uAD81 \uAD81\uC0AC",role:"dps",weapon:"bow",desc:"\uD65C\uB85C \uC274 \uC0C8 \uC5C6\uC774 \uD654\uC0B4\uC744 \uD37C\uBD93\uB294 \uC18D\uC0AC\uD615 \uAD81\uC218.",basic:["ab_b1","ab_b2","ab_b1"],skills:{q:"ab_q",w:"ar_w",e:"ar_e",r:"ab_r"},passive:{name:"\uBC14\uB78C\uC758 \uC190",desc:"\uC2E0\uC18D +20%, \uC774\uB3D9 \uC18D\uB3C4 +8%, \uCE58\uBA85\uD0C0 \uD655\uB960 +5%.",mods:{haste:.2,speedPct:.08,crit:.05}}}],rogue:[{id:"assassin",haste:"attack",name:"\uC554\uC0B4\uC790",role:"dps",desc:"\uADF8\uB9BC\uC790 \uC18D\uC5D0\uC11C \uB4F1 \uB4A4\uB97C \uB178\uB9AC\uB294 \uC554\uC0B4\uC790.",skills:{q:"rg_q",w:"rg_w",e:"rg_e",r:"rg_r"},passive:{name:"\uC554\uC0B4 \uBCF8\uB2A5",desc:"\uBC31\uC5B4\uD0DD \uD53C\uD574 +30%.",mods:{backBonus:.3}}},{id:"trickster",haste:"cdr",name:"\uB3C5\uCE7C\uC7A1\uC774",role:"dps",desc:"\uB2E8\uAC80\uC744 \uD769\uBFCC\uB9AC\uACE0 \uB3C5\uC548\uAC1C\uB85C \uC801\uC744 \uB9D0\uB824 \uC8FD\uC774\uB294 \uAD11\uC5ED \uB51C\uB7EC.",skills:{q:"rg_fan",w:"rg_w",e:"rg_e",r:"rg_venom"},passive:{name:"\uB9F9\uB3C5\uC758 \uCE7C\uB0A0",desc:"\uCE58\uBA85\uD0C0 \uD655\uB960 +8%, \uC2E0\uC18D +15%.",mods:{crit:.08,haste:.15}}}]},Lf={tank:"\uD0F1\uCEE4",dps:"\uB51C\uB7EC",heal:"\uD790\uB7EC"},$h={move:"\uC774\uB3D9 \uC18D\uB3C4",cast:"\uC2DC\uC804 \uC18D\uB3C4",attack:"\uACF5\uACA9 \uC18D\uB3C4",cdr:"\uC7AC\uC0AC\uC6A9 \uB300\uAE30\uC2DC\uAC04 \uAC10\uC18C"},IM=.4,gr=(i,e)=>Lt(i,e).haste||"cdr",Li=i=>Math.min(IM,Math.max(0,i?.haste||0)),Lt=(i,e)=>Wh[i].find(t=>t.id===e)||Wh[i][0],Zo=(i,e)=>Lt(i,e).basic||$e[i].basic,Es=(i,e)=>({type:"cone",r:i,ang:e*Math.PI/180}),wn=i=>({type:"circle",r:i}),Jo=(i,e)=>({type:"rect",len:i,w:e}),Ot={dodge:{anim:"Dodge_Forward",dur:.42,lock:.42,move:[[0,.36,15]],iframes:[0,.38],cancelable:!1},potion:{anim:null,dur:.1,lock:0,spawns:[{t:0,heal:.35}]},kn_b1:{anim:"1H_Melee_Attack_Slice_Horizontal",dur:.46,lock:.4,combo:.26,move:[[.02,.14,4]],hits:[{t:.2,shape:Es(3.1,130),mult:.9,stag:4,kb:.5,fx:"slash"}]},kn_b2:{anim:"1H_Melee_Attack_Slice_Diagonal",dur:.46,lock:.4,combo:.26,move:[[.02,.14,4]],hits:[{t:.2,shape:Es(3.1,130),mult:1,stag:4,kb:.5,fx:"slash"}]},kn_b3:{anim:"1H_Melee_Attack_Chop",dur:.62,lock:.56,combo:.5,move:[[.05,.2,5]],hits:[{t:.3,shape:Es(3.4,90),mult:1.6,stag:8,kb:1.6,fx:"smash"}]},kn_q:{name:"\uBC29\uD328 \uB3CC\uC9C4",desc:"\uC804\uBC29\uC73C\uB85C \uB3CC\uC9C4\uD558\uBA70 \uBD80\uB52A\uD78C \uC801\uC744 \uBC00\uC5B4\uB0C4. \uCE74\uC6B4\uD130 \uAC00\uB2A5.",cd:8,anim:"Block_Attack",dur:.62,lock:.56,super:!0,move:[[.04,.34,21]],hits:[{t:.04,until:.36,every:.04,once:!0,shape:wn(1.8),off:.9,mult:2.2,stag:22,kb:3.5,counter:!0,fx:"bash"}]},kn_w:{name:"\uC2EC\uD310\uC758 \uBCA0\uAE30",desc:"\uB3C4\uC57D\uD558\uBA70 \uC804\uBC29 \uB113\uC740 \uBC94\uC704\uB97C \uB0B4\uB824\uCE68.",cd:6,anim:"1H_Melee_Attack_Jump_Chop",dur:.82,lock:.78,super:!0,move:[[.08,.36,7]],hits:[{t:.46,shape:Es(4.6,110),mult:3.4,stag:28,kb:2.2,fx:"judgement"}]},kn_e:{name:"\uC218\uD638\uC758 \uC11C\uC57D",desc:"\uC8FC\uBCC0 \uD30C\uD2F0\uC6D0\uC5D0\uAC8C \uCD5C\uB300 \uCCB4\uB825 25% \uBCF4\uD638\uB9C9(6\uCD08).",cd:16,anim:"Cheer",clip:[.2,1.3],dur:.7,lock:.6,spawns:[{t:.3,buff:{kind:"shield",pct:.25,dur:6,radius:12}}]},kn_taunt:{name:"\uB3C4\uBC1C",desc:"\uC8FC\uBCC0 \uC801\uC758 \uD45C\uC801\uC744 4\uCD08\uAC04 \uC790\uC2E0\uC5D0\uAC8C \uACE0\uC815\uD558\uACE0 5\uCD08\uAC04 \uBC1B\uB294 \uD53C\uD574 30% \uAC10\uC18C.",cd:12,anim:"Taunt",dur:.7,lock:.6,spawns:[{t:.25,taunt:{radius:9,dur:4}},{t:.25,buff:{kind:"guard",dr:.3,dur:5,self:!0}}]},kn_holy:{name:"\uBE5B\uC758 \uD30C\uB3D9",desc:"\uC804\uBC29 \uC77C\uC9C1\uC120\uC73C\uB85C \uBE5B\uC758 \uAC80\uAE30\uB97C \uB0B4\uBFDC\uC5B4 \uAD00\uD1B5 \uD53C\uD574.",cd:9,anim:"1H_Melee_Attack_Stab",clip:[.2,1.1],dur:.6,lock:.55,super:!0,move:[[.02,.12,6]],hits:[{t:.24,shape:Jo(8.5,2.6),mult:4.4,stag:18,kb:1.8,fx:"holy"}]},kn_r:{name:"\uCC9C\uBC8C",desc:"\uC9C0\uC815\uD55C \uC704\uCE58\uC5D0 \uB099\uB8B0\uB97C \uB5A8\uC5B4\uB728\uB9BC. \uBB34\uB825\uD654 \uCD5C\uC0C1.",cd:24,anim:"Spellcast_Raise",clip:[.3,1.6],dur:1,lock:.95,super:!0,range:9,spawns:[{t:.15,zone:{at:"target",shape:wn(4.8),warn:.7,dur:.01,mult:9,stag:70,kb:2,fx:"lightning",team:"player"}}]},bb_b1:{anim:"2H_Melee_Attack_Slice",dur:.58,lock:.5,combo:.36,move:[[.02,.16,4]],hits:[{t:.28,shape:Es(3.6,150),mult:1.15,stag:5,kb:.8,fx:"slash"}]},bb_b2:{anim:"2H_Melee_Attack_Chop",clip:[.2,1.3],dur:.62,lock:.54,combo:.4,move:[[.02,.16,4]],hits:[{t:.3,shape:Es(3.6,80),mult:1.35,stag:6,kb:1,fx:"smash"}]},bb_b3:{anim:"2H_Melee_Attack_Stab",clip:[.1,1.2],dur:.66,lock:.6,combo:.52,move:[[.1,.3,9]],hits:[{t:.3,shape:Jo(4.2,2.2),mult:1.9,stag:10,kb:2.4,fx:"thrust"}]},bb_q:{name:"\uB3C4\uC57D \uAC15\uD0C0",desc:"\uC9C0\uC815\uD55C \uC704\uCE58\uB85C \uB3C4\uC57D\uD574 \uCDA9\uACA9\uD30C\uB97C \uC77C\uC73C\uD0B4.",cd:9,anim:"Jump_Full_Short",clip:[.1,1.1],dur:.8,lock:.76,super:!0,range:10,leap:[.05,.55],hits:[{t:.56,shape:wn(3.8),mult:3.8,stag:26,kb:3,fx:"quake"}]},bb_w:{name:"\uD68C\uC804 \uBCA0\uAE30",desc:"\uC774\uB3D9\uD558\uBA70 \uC5F0\uC18D\uC73C\uB85C \uD68C\uC804\uD574 \uC8FC\uBCC0\uC744 \uBCB0.",cd:10,anim:"2H_Melee_Attack_Spinning",dur:2,lock:0,loopAnim:!0,moveScale:.6,super:!0,hits:[{t:.1,until:1.95,every:.24,shape:wn(3.2),mult:.75,stag:4,kb:.4,fx:"spin"}]},bb_e:{name:"\uC804\uD22C \uD568\uC131",desc:"8\uCD08\uAC04 \uACF5\uACA9\uB825 25%, \uC774\uB3D9 \uC18D\uB3C4 15% \uC99D\uAC00.",cd:18,anim:"Taunt",dur:.7,lock:.6,spawns:[{t:.25,buff:{kind:"rage",atk:.25,speed:.15,dur:8,self:!0}}]},bb_r:{name:"\uBD84\uB178 \uD3ED\uBC1C",desc:"\uAC70\uB300\uD55C \uD68C\uC804 \uC77C\uACA9. \uC783\uC740 \uCCB4\uB825\uC5D0 \uBE44\uB840\uD574 \uCD5C\uB300 60% \uAC15\uD654.",cd:26,anim:"2H_Melee_Attack_Spin",clip:[.2,2.1],dur:1.2,lock:1.15,super:!0,hits:[{t:.62,shape:wn(6.2),mult:9,stag:55,kb:4,fx:"rage",lowHpScale:.6}]},bb_roar:{name:"\uC704\uD611\uC758 \uD3EC\uD6A8",desc:"\uC8FC\uBCC0 \uC801\uC758 \uD45C\uC801\uC744 4\uCD08\uAC04 \uC790\uC2E0\uC5D0\uAC8C \uACE0\uC815\uD558\uACE0 5\uCD08\uAC04 \uBC1B\uB294 \uD53C\uD574 30% \uAC10\uC18C.",cd:12,anim:"Taunt",dur:.7,lock:.6,spawns:[{t:.25,taunt:{radius:10,dur:4}},{t:.25,buff:{kind:"guard",dr:.3,dur:5,self:!0}}]},bb_iron:{name:"\uAC15\uCCA0 \uD53C\uBD80",desc:"6\uCD08\uAC04 \uCD5C\uB300 \uC0DD\uBA85\uB825 35% \uBCF4\uD638\uB9C9\uC744 \uB450\uB974\uACE0 \uBC1B\uB294 \uD53C\uD574 20% \uAC10\uC18C.",cd:16,anim:"Cheer",clip:[.2,1.3],dur:.6,lock:.5,spawns:[{t:.25,buff:{kind:"shield",pct:.35,dur:6,radius:.5}},{t:.25,buff:{kind:"guard",dr:.2,dur:6,self:!0}}]},bb_quake:{name:"\uB300\uC9C0 \uBD84\uC1C4",desc:"\uB3C4\uB07C\uB85C \uB545\uC744 \uB0B4\uB9AC\uCCD0 \uC8FC\uBCC0 \uB113\uC740 \uBC94\uC704\uB97C \uAC15\uD0C0. \uBB34\uB825\uD654 \uCD5C\uC0C1.",cd:24,anim:"2H_Melee_Attack_Chop",clip:[.1,1.3],dur:1,lock:.95,super:!0,hits:[{t:.52,shape:wn(7),mult:6.5,stag:80,kb:3.5,fx:"quake"}]},mg_b1:{anim:"Spellcast_Shoot",clip:[.1,.8],dur:.42,lock:.34,combo:.28,spawns:[{t:.2,proj:"bolt"}]},mg_b2:{anim:"Spellcast_Shoot",clip:[.1,.8],dur:.42,lock:.34,combo:.28,spawns:[{t:.2,proj:"bolt"}]},mg_q:{name:"\uD654\uC5FC\uAD6C",desc:"\uC801\uC911 \uC2DC \uD3ED\uBC1C\uD558\uB294 \uD654\uC5FC\uAD6C\uB97C \uBC1C\uC0AC.",cd:5,anim:"Spellcast_Shoot",clip:[.05,.9],dur:.5,lock:.42,spawns:[{t:.22,proj:"fireball"}]},mg_w:{name:"\uC11C\uB9AC \uC7A5\uD310",desc:"\uC9C0\uC815 \uC704\uCE58\uC5D0 4\uCD08\uAC04 \uC5BC\uC74C \uD3ED\uD48D. \uC9C0\uC18D \uD53C\uD574\uC640 \uB454\uD654.",cd:11,anim:"Spellcasting",dur:.55,lock:.5,range:11,spawns:[{t:.3,zone:{at:"target",shape:wn(3.8),warn:0,dur:4,tick:.4,mult:.7,stag:3,slow:.45,fx:"frost",team:"player"}}]},mg_chain:{name:"\uC5F0\uC1C4 \uBC88\uAC1C",desc:"\uC870\uC900\uD55C \uC801\uC5D0\uAC8C \uBC88\uAC1C\uB97C \uB0B4\uB9AC\uAF42\uACE0 \uC8FC\uBCC0 \uC801 \uCD5C\uB300 4\uBA85\uC5D0\uAC8C \uD295\uAE40.",cd:8,anim:"Spellcast_Shoot",clip:[.05,.9],dur:.45,lock:.4,range:11,spawns:[{t:.2,chain:{n:5,jump:6.5,mult:2.6,decay:.8,stag:10}}]},mg_r:{name:"\uC6B4\uC11D \uB099\uD558",desc:"\uC9C0\uC815 \uC704\uCE58\uC5D0 \uAC70\uB300\uD55C \uC6B4\uC11D\uC744 \uB5A8\uC5B4\uB728\uB9BC.",cd:26,anim:"Spellcast_Long",clip:[.2,2.2],dur:1.1,lock:1.05,super:!0,range:12,spawns:[{t:.2,zone:{at:"target",shape:wn(5.2),warn:1.25,dur:.01,mult:13,stag:55,kb:3,fx:"meteor",team:"player"}}]},mg_holy:{name:"\uC2E0\uC131 \uD3ED\uBC1C",desc:"\uC9C0\uC815 \uC704\uCE58\uC5D0 \uBE5B\uC744 \uD130\uB728\uB824 \uC801\uC5D0\uAC8C \uD53C\uD574\uB97C \uC8FC\uACE0, \uBC94\uC704 \uC548 \uD30C\uD2F0\uC6D0\uC740 12% \uD68C\uBCF5.",cd:5,anim:"Spellcast_Raise",clip:[.3,1.3],dur:.5,lock:.42,range:12,spawns:[{t:.2,zone:{at:"target",shape:wn(3.6),warn:.25,dur:.01,mult:3.4,stag:14,kb:1,heal:.12,fx:"holyburst",team:"player"}}]},mg_orb:{name:"\uBE5B\uC758 \uAD6C\uCCB4",desc:"\uCC9C\uCC9C\uD788 \uB098\uC544\uAC00\uBA70 \uB2FF\uB294 \uBAA8\uB4E0 \uC801\uC744 \uAD00\uD1B5\uD558\uB294 \uBE5B\uC758 \uAD6C\uCCB4.",cd:7,anim:"Spellcast_Shoot",clip:[.05,.9],dur:.5,lock:.42,spawns:[{t:.22,proj:"lightorb"}]},mg_spring:{name:"\uC7AC\uC0DD\uC758 \uC0D8",desc:"\uC9C0\uC815 \uC704\uCE58\uC5D0 5\uCD08\uAC04 \uCE58\uC720\uC758 \uC0D8. \uC548\uC5D0 \uC788\uC73C\uBA74 0.5\uCD08\uB9C8\uB2E4 3.5% \uD68C\uBCF5.",cd:14,anim:"Spellcasting",dur:.55,lock:.5,range:12,spawns:[{t:.3,zone:{at:"target",shape:wn(4.2),warn:0,dur:5,tick:.5,heal:.035,fx:"spring",team:"player"}}]},mg_miracle:{name:"\uC0DD\uBA85\uC758 \uAE30\uC801",desc:"\uC8FC\uBCC0 \uD30C\uD2F0\uC6D0\uC744 50% \uD68C\uBCF5\uD558\uACE0 \uC4F0\uB7EC\uC9C4 \uB3D9\uB8CC\uB97C 35% \uC0DD\uBA85\uB825\uC73C\uB85C \uBD80\uD65C.",cd:40,anim:"Spellcast_Long",clip:[.2,2.2],dur:1.1,lock:1.05,super:!0,spawns:[{t:.55,miracle:{radius:14,heal:.5,revive:.35}}]},rg_b1:{anim:"Dualwield_Melee_Attack_Slice",clip:[.1,1],dur:.36,lock:.3,combo:.2,move:[[.02,.12,5]],hits:[{t:.16,shape:Es(2.7,120),mult:.75,stag:3,kb:.3,fx:"slash"}]},rg_b2:{anim:"Dualwield_Melee_Attack_Chop",clip:[.1,1.1],dur:.36,lock:.3,combo:.2,move:[[.02,.12,5]],hits:[{t:.16,shape:Es(2.7,120),mult:.8,stag:3,kb:.3,fx:"slash"}]},rg_b3:{anim:"Dualwield_Melee_Attack_Stab",clip:[.2,1.3],dur:.48,lock:.42,combo:.36,move:[[.04,.2,7]],hits:[{t:.22,shape:Jo(3.2,1.8),mult:1.3,stag:5,kb:1,fx:"thrust"}]},rg_q:{name:"\uADF8\uB9BC\uC790 \uCC0C\uB974\uAE30",desc:"\uC801\uC744 \uAFF0\uB6AB\uC73C\uBA70 \uB3CC\uC9C4. \uCE74\uC6B4\uD130 \uAC00\uB2A5.",cd:6,anim:"Dualwield_Melee_Attack_Stab",clip:[.2,1],dur:.46,lock:.42,super:!0,iframes:[.02,.3],move:[[.02,.3,24]],hits:[{t:.02,until:.32,every:.03,once:!0,shape:wn(1.6),mult:2.4,stag:16,kb:.5,counter:!0,fx:"shadow"}]},rg_w:{name:"\uCE7C\uB0A0 \uD3ED\uD48D",desc:"\uC8FC\uBCC0\uC744 \uBE60\uB974\uAC8C \uB2E4\uC12F \uBC88 \uBCB0.",cd:8,anim:"2H_Melee_Attack_Spin",clip:[.3,2],dur:.9,lock:.85,super:!0,hits:[{t:.12,until:.8,every:.16,shape:wn(3.3),mult:.9,stag:4,kb:.2,fx:"blades"}]},rg_e:{name:"\uC5F0\uB9C9",desc:"\uC5F0\uB9C9\uC744 \uD130\uB728\uB824 1.5\uCD08 \uBB34\uC801. \uC8FC\uBCC0 \uC801\uC774 \uB300\uC0C1\uC744 \uB193\uCE68.",cd:14,anim:"Throw",clip:[.3,1.1],dur:.4,lock:.3,iframes:[0,1.5],spawns:[{t:.1,smoke:5}]},rg_fan:{name:"\uB2E8\uAC80 \uBD80\uCC44",desc:"\uC804\uBC29 \uBD80\uCC44\uAF34\uB85C \uB2E8\uAC80 \uB2E4\uC12F \uC790\uB8E8\uB97C \uB358\uC9D0.",cd:5,anim:"Throw",clip:[.3,1.1],dur:.42,lock:.36,spawns:[{t:.16,proj:"dagger",fan:[-.32,-.16,0,.16,.32]}]},rg_venom:{name:"\uB3C5\uC548\uAC1C",desc:"\uC9C0\uC815 \uC704\uCE58\uC5D0 4\uCD08\uAC04 \uB3C5\uC548\uAC1C. \uC9C0\uC18D \uD53C\uD574\uC640 \uB454\uD654.",cd:20,anim:"Throw",clip:[.3,1.1],dur:.5,lock:.45,range:10,spawns:[{t:.2,zone:{at:"target",shape:wn(5),warn:.2,dur:4,tick:.35,mult:1.1,stag:4,slow:.4,fx:"poison",team:"player"}}]},rg_r:{name:"\uCC98\uD615",desc:"\uC9E7\uAC8C \uD30C\uACE0\uB4E4\uC5B4 \uCE58\uBA85\uC801\uC778 \uC77C\uACA9. \uBC31\uC5B4\uD0DD \uC2DC \uD53C\uD574 2\uBC30.",cd:20,anim:"1H_Melee_Attack_Stab",clip:[.3,1.2],dur:.6,lock:.56,super:!0,move:[[.02,.16,18]],hits:[{t:.24,shape:Jo(3.2,2.4),mult:11,stag:35,kb:1,fx:"execute",backMult:2}]},ab_b1:{anim:"1H_Ranged_Shoot",clip:[.2,.9],dur:.34,lock:.28,combo:.22,spawns:[{t:.14,proj:"arrowb"}]},ab_b2:{anim:"1H_Ranged_Shoot",clip:[.2,.9],dur:.34,lock:.28,combo:.22,spawns:[{t:.14,proj:"arrowb"}]},ab_q:{name:"\uC5F0\uC18D \uC0AC\uACA9",desc:"\uD654\uC0B4 \uC138 \uBC1C\uC744 \uBE60\uB974\uAC8C \uC5F0\uB2EC\uC544 \uC3E8.",cd:6,anim:"1H_Ranged_Shoot",clip:[.2,.9],dur:.72,lock:.66,spawns:[.12,.34,.56].map(i=>({t:i,proj:"arrowb",mult:1.7}))},ab_r:{name:"\uD3ED\uD48D \uD654\uC0B4",desc:"\uC804\uBC29 \uB113\uC740 \uBD80\uCC44\uAF34\uB85C \uD654\uC0B4\uC744 \uB450 \uCC28\uB840 \uC3DF\uC544\uB0C4.",cd:20,anim:"1H_Ranged_Aiming",clip:[0,1],dur:.95,lock:.9,super:!0,spawns:[.45,.7].map((i,e)=>({t:i,proj:"arrowb",mult:2.4,fan:[-.6,-.45,-.3,-.15,0,.15,.3,.45,.6].map(t=>t+e*.075)}))},ar_b1:{anim:"2H_Ranged_Shoot",clip:[.25,.95],dur:.44,lock:.36,combo:.3,spawns:[{t:.18,proj:"shot"}]},ar_b2:{anim:"2H_Ranged_Shoot",clip:[.25,.95],dur:.44,lock:.36,combo:.3,spawns:[{t:.18,proj:"shot"}]},ar_q:{name:"\uAD00\uD1B5 \uC0AC\uACA9",desc:"\uC77C\uC9C1\uC120\uC758 \uC801\uC744 \uBAA8\uB450 \uAFF0\uB6AB\uB294 \uAC15\uD654 \uD654\uC0B4.",cd:6,anim:"2H_Ranged_Shoot",clip:[.15,1],dur:.5,lock:.44,spawns:[{t:.24,proj:"pierce"}]},ar_w:{name:"\uD654\uC0B4\uBE44",desc:"\uC9C0\uC815 \uC704\uCE58\uC5D0 2.4\uCD08\uAC04 \uD654\uC0B4\uC744 \uD37C\uBD80\uC74C.",cd:12,anim:"1H_Ranged_Aiming",dur:.55,lock:.5,range:13,spawns:[{t:.3,zone:{at:"target",shape:wn(4.2),warn:.45,dur:2.4,tick:.3,mult:.6,stag:3,fx:"arrows",team:"player"}}]},ar_e:{name:"\uD6C4\uBC29 \uB3C4\uC57D",desc:"\uC870\uC900 \uBC18\uB300 \uBC29\uD5A5\uC73C\uB85C \uAD74\uB7EC \uBE60\uC9C0\uBA70 \uC81C\uC790\uB9AC\uC5D0 \uB454\uD654 \uB36B \uC124\uCE58.",cd:10,anim:"Dodge_Forward",dur:.42,lock:.42,away:!0,move:[[0,.36,16]],iframes:[0,.4],spawns:[{t:0,zone:{shape:wn(3),warn:0,dur:3,tick:.5,mult:.25,stag:2,slow:.5,fx:"trap",team:"player"}}]},ar_r:{name:"\uC9D1\uC911 \uC800\uACA9",desc:"\uC7A0\uC2DC \uC870\uC900 \uD6C4 \uC804\uBC29 \uC77C\uC9C1\uC120\uC744 \uAFF0\uB6AB\uB294 \uCE58\uBA85\uC801\uC778 \uD55C \uBC1C.",cd:22,anim:"1H_Ranged_Aiming",clip:[0,1],dur:1.15,lock:1.1,super:!0,hits:[{t:.85,shape:Jo(20,2.4),mult:11,stag:50,kb:2.5,fx:"snipe"}]}},Df={bolt:{speed:26,r:.45,life:.6,mult:.95,stag:3,kb:.3,fx:"bolt"},fireball:{speed:20,r:.6,life:.9,mult:1.5,stag:10,kb:1.5,explode:{r:3,mult:2.6,stag:12,kb:2},fx:"fireball"},arrow:{speed:24,r:.35,life:1.2,fx:"arrow"},shot:{speed:30,r:.4,life:.55,mult:.95,stag:3,kb:.3,fx:"arrow"},arrowb:{speed:32,r:.4,life:.55,mult:.78,stag:2,kb:.2,fx:"arrow"},pierce:{speed:34,r:.55,life:.62,mult:2.8,stag:12,kb:.8,pierce:!0,fx:"arrow"},dagger:{speed:26,r:.45,life:.42,mult:1.15,stag:4,kb:.4,fx:"dagger"},lightorb:{speed:13,r:.9,life:1.3,mult:2.6,stag:6,kb:.6,pierce:!0,fx:"lightorb"},bone:{speed:11,r:.6,life:3.5,fx:"soulfire"}},Yh=4,Kh=15,U0=3});function Ta(i){let e={hat:i?.hat!==!1};for(let t of As)e[t]=typeof i?.[t]=="string"&&LM.test(i[t])?i[t].toLowerCase():null;return e}function br(i,e){let t=kM[e]||{},n=Ta(i);for(let s of As)n[s]=n[s]??t[s]??null;return n}var As,Nf,O0,kM,LM,xr=Ns(()=>{As=["skin","hair","outfit","accent"],Nf={skin:"\uD53C\uBD80\uC0C9",hair:"\uBA38\uB9AC\uC0C9",outfit:"\uC637 \uC0C9",accent:"\uD3EC\uC778\uD2B8 \uC0C9",hat:"\uBA38\uB9AC \uC7A5\uC2DD"},O0={skin:[["\uAE30\uBCF8",null],["\uBC1D\uC740","#ffe2cf"],["\uAD6C\uB9BF\uBE5B","#e2a878"],["\uAC08\uC0C9","#b87a50"],["\uC9D9\uC740","#7a4a30"],["\uCC3D\uBC31\uD55C","#e4dcef"],["\uD68C\uC0C9","#9aa2ae"],["\uCD08\uB85D","#8fbf7a"]],hair:[["\uAE30\uBCF8",null],["\uAC80\uC815","#1c1a1f"],["\uAC08\uC0C9","#5a3a22"],["\uAE08\uBC1C","#e8c46a"],["\uC801\uBC1C","#b8452a"],["\uC740\uBC1C","#dfe4ea"],["\uD478\uB978","#3f63d6"],["\uBCF4\uB77C","#9a52cc"]],outfit:[["\uAE30\uBCF8",null],["\uC9C4\uD64D","#c3342f"],["\uCCAD\uB78C","#3563c9"],["\uC232","#2e8c4e"],["\uC790\uC218\uC815","#6f45c0"],["\uCE60\uD751","#23222a"],["\uC0C1\uC544","#e6ddc8"],["\uD669\uAE08","#d49a2a"],["\uAC00\uC8FD","#9a6a3c"],["\uCCAD\uB85D","#23868f"]],accent:[["\uAE30\uBCF8",null],["\uD669\uAE08","#d8b050"],["\uAC15\uCCA0","#9aa4ad"],["\uD751\uCCA0","#2e2e36"],["\uC9C4\uD64D","#c3342f"],["\uCCAD\uB78C","#3563c9"],["\uBC31\uC0C9","#f0ede6"],["\uAC08\uC0C9","#7a4e2c"]]},kM={archer:{outfit:"#9a6a3c"}},LM=/^#[0-9a-f]{6}$/i});function UM(i,e){if(i.lookUniforms)return i.lookUniforms;let t=B0[e],n={uCellRegion:{value:new Float32Array(32)},uRegionColor:{value:[0,1,2,3,4].map(()=>new re)},uRegionRef:{value:new Float32Array(5)},uRegionOn:{value:new Float32Array(5)}};return As.forEach((s,r)=>{for(let[a,o]of t[s])n.uCellRegion.value[a+o*8]=r+1;n.uRegionRef.value[r+1]=DM(new re(t.base[s]).convertSRGBToLinear())}),i.model.traverse(s=>{if(!s.isMesh||!s.material?.map)return;let r=s.material;r.onBeforeCompile=a=>{Object.assign(a.uniforms,n),a.fragmentShader=NM+a.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
${zM}`)},r.customProgramCacheKey=()=>"avatar-look",r.needsUpdate=!0}),i.lookUniforms=n,i.lookHat=t.hat,n}function wa(i,e,t={}){let n=UM(i,e);As.forEach((s,r)=>{let a=t[s];n.uRegionOn.value[r+1]=a?1:0,a&&n.uRegionColor.value[r+1].set(a).convertSRGBToLinear()}),i.lookHat&&i.model.traverse(s=>{s.name===i.lookHat&&(s.visible=t.hat!==!1)}),i.lookKey=Qo(t)}var B0,DM,NM,zM,Qo,H0,Jh=Ns(()=>{Ut();xr();B0={Knight:{skin:[[0,0]],hair:[[1,0]],outfit:[[0,1]],accent:[[3,0],[7,0]],base:{skin:"#f6c29f",hair:"#dcb281",outfit:"#da3539",accent:"#899499"},hat:"Knight_Helmet"},Barbarian:{skin:[[0,0]],hair:[[1,0]],outfit:[[0,1],[1,1]],accent:[[6,0]],base:{skin:"#f6c29f",hair:"#9a928a",outfit:"#507088",accent:"#9f5e47"},hat:"Barbarian_Hat"},Mage:{skin:[[0,0],[7,2]],hair:[[1,0]],outfit:[[0,1],[1,1],[7,1]],accent:[[2,1]],base:{skin:"#f6c29f",hair:"#201d20",outfit:"#4f4b79",accent:"#ab1a5c"},hat:"Mage_Hat"},Rogue_Hooded:{skin:[[0,0]],hair:[[1,0]],outfit:[[0,1],[1,1]],accent:[[5,0],[5,2]],base:{skin:"#f6c29f",hair:"#9f5e47",outfit:"#008955",accent:"#b57354"},hat:null}},DM=i=>.299*i.r+.587*i.g+.114*i.b,NM=`
uniform float uCellRegion[32];
uniform vec3 uRegionColor[5];
uniform float uRegionRef[5];
uniform float uRegionOn[5];
`,zM=`
{
  vec2 cell = floor(clamp(vMapUv, 0.0, 0.9999) * vec2(8.0, 4.0));
  int r = int(uCellRegion[int(cell.x + cell.y * 8.0)]);
  if (r > 0 && uRegionOn[r] > 0.5) {
    float l = dot(diffuseColor.rgb, vec3(0.299, 0.587, 0.114));
    diffuseColor.rgb = clamp(uRegionColor[r] * (l / max(uRegionRef[r], 0.02)), 0.0, 1.0);
  }
}`;Qo=(i={})=>[...As.map(e=>i[e]||""),i.hat===!1?0:1].join("|"),H0=i=>!!B0[i]?.hat});function Ea(i){let e=Math.max(1,Math.min(Ps,i|0))-1;return{hp:1+.5*e,atk:1+.15*e,xp:1+.3*e,ilvl:2*e,luck:.06*e}}function G0(i){return{hp:1+.75*(i-1),atk:1}}var vr,mi,Rs,rt,_r,Cs,V0,Ps,rs=Ns(()=>{vr=(i,e)=>({type:"cone",r:i,ang:e*Math.PI/180}),mi=i=>({type:"circle",r:i}),Rs=(i,e)=>({type:"rect",len:i,w:e}),rt={minion:{name:"\uB9DD\uC790 \uC878\uAC1C",model:"Skeleton_Minion",weapons:[["w_Skeleton_Blade","handslot.r"]],hp:320,atk:55,def:10,speed:3.3,r:.6,xp:12,drop:.08,range:2.1,attacks:["en_chop"],idle:"Idle_Combat",walk:"Walking_D_Skeletons",run:"Running_C"},warrior:{name:"\uB9DD\uC790 \uC804\uC0AC",model:"Skeleton_Warrior",weapons:[["w_Skeleton_Axe","handslot.r"],["w_Skeleton_Shield_Small_A","handslot.l"]],hp:700,atk:80,def:35,speed:2.9,r:.7,xp:24,drop:.14,range:2.6,attacks:["en_slice","en_bash"],shield:.6,idle:"Idle_Combat",walk:"Walking_D_Skeletons",run:"Running_C"},archer:{name:"\uB9DD\uC790 \uAD81\uC218",model:"Skeleton_Rogue",weapons:[["w_Skeleton_Crossbow","handslot.r"]],hp:360,atk:72,def:10,speed:3.4,r:.6,xp:18,drop:.12,range:15,keep:9,attacks:["en_shoot"],idle:"Idle_Combat",walk:"Walking_D_Skeletons",run:"Running_C"},mage:{name:"\uB9DD\uC790 \uC8FC\uC220\uC0AC",model:"Skeleton_Mage",weapons:[["w_Skeleton_Staff","handslot.r"]],hp:520,atk:70,def:15,speed:2.7,r:.6,xp:26,drop:.16,range:13,keep:8,attacks:["en_fire","en_fire","en_summon"],idle:"Idle_Combat",walk:"Walking_D_Skeletons",run:"Running_C"},priest:{name:"\uBF08\uC758 \uB300\uC0AC\uC81C \uBAA8\uB974\uAC04",title:"\uC608\uBC30\uB2F9\uC758 \uB9DD\uB839",model:"Skeleton_Mage",weapons:[["w_Skeleton_Staff","handslot.r"]],scale:2.2,boss:!0,loot:2,hp:13e3,atk:115,def:35,speed:2.8,r:1.5,xp:150,keep:7,patterns:"priest",introAnim:"Spellcast_Raise",idle:"Idle_Combat",walk:"Walking_D_Skeletons",run:"Running_C"},warden:{name:"\uBCF4\uBB3C\uACE0 \uC218\uBB38\uC7A5",title:"\uD669\uAE08\uC744 \uC9C0\uD0A4\uB294 \uADF8\uB9BC\uC790",model:"Skeleton_Rogue",weapons:[["w_Skeleton_Blade","handslot.r"],["w_Skeleton_Blade","handslot.l"]],scale:2.2,boss:!0,loot:2,hp:17500,atk:125,def:50,speed:4.4,r:1.5,xp:220,gap:"wd_dash",patterns:"warden",idle:"Idle_Combat",walk:"Walking_D_Skeletons",run:"Running_C"},king:{name:"\uD574\uACE8\uC655 \uC544\uB974\uCE74\uC2A4",title:"\uC800\uC8FC\uBC1B\uC740 \uC655\uAD00\uC758 \uC8FC\uC778",model:"Skeleton_Warrior",weapons:[["w_Skeleton_Axe","handslot.r"]],scale:2.4,boss:!0,crown:!0,judgement:!0,loot:3,hp:42e3,atk:150,def:60,speed:3.6,r:1.7,xp:400,range:4.5,gap:"kg_leap",patterns:"king",idle:"Idle_Combat",walk:"Walking_D_Skeletons",run:"Running_C"}};rt.priestShade={...rt.priest,name:"\uBAA8\uB974\uAC04\uC758 \uB9DD\uB839",title:"\uAEBC\uC9C0\uC9C0 \uC54A\uB294 \uC758\uC2DD",scale:2,hp:11e3,xp:120,tint:"#6ab8ff"};rt.wardenShade={...rt.warden,name:"\uC218\uBB38\uC7A5\uC758 \uADF8\uB9BC\uC790",title:"\uC625\uC88C\uB97C \uC9C0\uD0A4\uB294 \uCE7C\uB0A0",scale:2,hp:15e3,xp:170,tint:"#b05aff"};_r={hp:4.5,atk:1.4,scale:1.4,xp:4,drop:.9},Cs={spawn:{anim:"Skeletons_Awaken_Floor",dur:2.2,lock:2.2,iframes:[0,2.1]},hit:{anim:"Hit_A",dur:.4,lock:.4},stun:{anim:"Hit_B",dur:3,lock:3,loopAnim:!0},down:{anim:"Death_A",clip:[0,.75],hold:!0,dur:8,lock:8},getup:{anim:"Lie_StandUp",clip:[.6,2.3],dur:1.1,lock:1.1},en_chop:{anim:"1H_Melee_Attack_Chop",dur:1.15,lock:1.1,cd:1.6,hits:[{t:.62,shape:vr(2.5,90),mult:1,kb:1.2,tele:!0}]},en_slice:{anim:"1H_Melee_Attack_Slice_Horizontal",dur:1.1,lock:1.05,cd:1.8,hits:[{t:.6,shape:vr(3.1,150),mult:1.1,kb:1.5,tele:!0}]},en_bash:{anim:"Block_Attack",dur:1.25,lock:1.2,cd:4,super:!0,move:[[.62,.9,16]],hits:[{t:.62,until:.9,every:.05,once:!0,shape:mi(1.6),off:.8,mult:1.3,kb:3,tele:"rect",teleShape:Rs(5.2,1.8)}]},en_shoot:{anim:"1H_Ranged_Shoot",dur:1.55,lock:1.5,cd:2.6,hits:[],spawns:[{t:1.05,proj:"arrow",mult:1}],tele:{shape:Rs(22,.7),until:1.05},aimLock:.8},en_fire:{anim:"Spellcast_Shoot",dur:1.5,lock:1.45,cd:3.2,spawns:[{t:.3,zone:{at:"target",shape:mi(2.6),warn:1.1,dur:.01,mult:1.3,kb:1,fx:"soulburst",team:"enemy"}}]},en_summon:{anim:"Spellcast_Summon",clip:[.3,2.6],dur:1.8,lock:1.75,cd:9,spawns:[{t:1.2,summon:{kind:"minion",n:2,r:3}}]},kg_slash1:{anim:"2H_Melee_Attack_Slice",dur:1.25,lock:1.2,super:!0,move:[[.55,.75,6]],hits:[{t:.78,shape:vr(6.2,150),mult:1.2,kb:3,tele:!0}]},kg_slash2:{anim:"1H_Melee_Attack_Slice_Diagonal",dur:1,lock:.95,super:!0,move:[[.35,.55,6]],hits:[{t:.58,shape:vr(6.2,150),mult:1.2,kb:3,tele:!0}]},kg_slash3:{anim:"2H_Melee_Attack_Chop",dur:1.5,lock:1.45,super:!0,move:[[.6,.85,8]],hits:[{t:.95,shape:Rs(10,3.6),mult:1.8,kb:5,tele:!0,fx:"kingSmash"}]},kg_leap:{anim:"1H_Melee_Attack_Jump_Chop",dur:1.9,lock:1.85,super:!0,leap:[.35,1.15],leapToTarget:!0,hits:[{t:1.18,shape:mi(6.5),mult:2.1,kb:6,tele:!0,teleAt:"target",fx:"kingQuake"}]},kg_spin:{anim:"2H_Melee_Attack_Spin",clip:[.1,2.3],dur:2.1,lock:2.05,super:!0,hits:[{t:1.25,shape:mi(7.6),mult:1.9,kb:7,tele:!0,fx:"kingSpin"}]},kg_summon:{anim:"Spellcast_Summon",clip:[.2,3.2],dur:2.4,lock:2.35,super:!0,spawns:[{t:1.4,summon:{kind:"minion",n:5,r:7}}]},kg_charge:{anim:"2H_Melee_Attack_Stab",clip:[.1,1.6],dur:2,lock:1.95,super:!0,counterWindow:[.15,1.05],move:[[1.05,1.5,32]],hits:[{t:1.05,until:1.5,every:.04,once:!0,shape:mi(2.4),off:1.4,mult:2.4,kb:8,tele:"rect",teleShape:Rs(17,3.4)}]},kg_ring:{anim:"Spellcast_Long",clip:[.1,2.5],dur:3,lock:2.95,super:!0,noTrack:!0,hits:[{t:2.7,shape:{type:"donut",r:5.5,r2:30},mult:3.2,kb:4,tele:!0,fx:"kingRing",lethalFrom:3}]},kg_doom:{anim:"Spellcast_Raise",clip:[.2,1.9],dur:2.8,lock:2.75,super:!0,noTrack:!0,minDiff:3,hits:[{t:2.3,shape:vr(15,200),mult:6,kb:4,tele:!0,fx:"doom",lethalFrom:3}]},kg_judgement:{anim:"Spellcast_Raise",clip:[.2,1.9],hold:!0,dur:11,lock:11,super:!0,judgement:{gauge:1,time:10,mult:7}},pr_volley:{anim:"Spellcast_Shoot",dur:1.6,lock:1.55,super:!0,spawns:[0,1,2].map(()=>({t:.3,zone:{at:"target",scatter:3.5,shape:mi(2.8),warn:1.05,dur:.01,mult:1.3,kb:1,fx:"soulburst",team:"enemy"}}))},pr_bolt:{anim:"Spellcast_Shoot",dur:1.2,lock:1.15,super:!0,spawns:[{t:.6,proj:"bone",fan:[-.35,0,.35],mult:1.2}]},pr_nova:{anim:"Spellcast_Raise",clip:[.2,1.9],dur:1.8,lock:1.75,super:!0,hits:[{t:1.35,shape:mi(7),mult:2,kb:5,tele:!0,fx:"kingQuake"}]},pr_summon:{anim:"Spellcast_Summon",clip:[.2,3.2],dur:2.4,lock:2.35,super:!0,spawns:[{t:1.4,summon:{kind:"minion",n:3,r:5}},{t:1.4,summon:{kind:"archer",n:1,r:6}}]},pr_doom:{anim:"Spellcast_Summon",clip:[.3,2.6],dur:2.6,lock:2.55,super:!0,noTrack:!0,minDiff:2,spawns:[{t:.3,zone:{at:"all",shape:mi(3.4),warn:2.1,dur:.01,mult:4,kb:2,fx:"doom",team:"enemy",lethalFrom:2}}]},pr_rain:{anim:"Spellcast_Long",clip:[.2,2.2],dur:2.2,lock:2.15,super:!0,noTrack:!0,spawns:[{t:.4,zone:{at:"all",shape:mi(3.2),warn:1.3,dur:.01,mult:1.7,kb:2,fx:"soulburst",team:"enemy"}}]},wd_combo1:{anim:"Dualwield_Melee_Attack_Slice",dur:1,lock:.95,super:!0,move:[[.35,.55,7]],hits:[{t:.55,shape:vr(5.5,140),mult:1.1,kb:2.5,tele:!0}]},wd_combo2:{anim:"Dualwield_Melee_Attack_Chop",dur:.9,lock:.85,super:!0,move:[[.3,.5,7]],hits:[{t:.5,shape:vr(5.5,100),mult:1.25,kb:3,tele:!0}]},wd_dash:{anim:"Dualwield_Melee_Attack_Stab",clip:[.1,1.2],dur:1.5,lock:1.45,super:!0,counterWindow:[.1,.75],move:[[.75,1.05,34]],hits:[{t:.75,until:1.05,every:.04,once:!0,shape:mi(2.2),off:1.2,mult:2.2,kb:7,tele:"rect",teleShape:Rs(12,3)}]},wd_fan:{anim:"Throw",clip:[.3,1.1],dur:1.3,lock:1.25,super:!0,spawns:[{t:.8,proj:"arrow",fan:[-.5,-.25,0,.25,.5],mult:1.1}],tele:{shape:Rs(18,.6),until:.8}},wd_spin:{anim:"2H_Melee_Attack_Spin",clip:[.1,2.3],dur:1.7,lock:1.65,super:!0,hits:[{t:1,shape:mi(6),mult:1.8,kb:6,tele:!0,fx:"kingSpin"}]},wd_cross:{anim:"2H_Melee_Attack_Spin",clip:[.1,2.3],dur:2.3,lock:2.25,super:!0,noTrack:!0,minDiff:2,hits:[0,1,2,3].map(i=>({t:1.9,shape:Rs(24,3.4),rot:i*Math.PI/2,mult:5,kb:5,tele:"rect",fx:"doom",lethalFrom:2}))},wd_cross45:{anim:"2H_Melee_Attack_Spin",clip:[.1,2.3],dur:2.1,lock:2.05,super:!0,noTrack:!0,minDiff:2,hits:[0,1,2,3].map(i=>({t:1.7,shape:Rs(24,3.4),rot:Math.PI/4+i*Math.PI/2,mult:5,kb:5,tele:"rect",fx:"doom",lethalFrom:2}))},wd_vanish:{anim:"Throw",clip:[.3,1.1],dur:1,lock:.95,super:!0,iframes:[.3,.9],spawns:[{t:.55,behind:3}]}},V0={king:{1:[["kg_slash1","kg_slash2","kg_slash3"],["kg_leap"],["kg_spin"],["kg_charge"],["kg_summon"],["kg_leap","kg_spin"]],2:[["kg_slash1","kg_slash2","kg_slash3"],["kg_leap","kg_leap"],["kg_spin"],["kg_charge"],["kg_ring"],["kg_summon","kg_ring"],["kg_leap","kg_spin"],["kg_doom"],["kg_doom","kg_ring"]]},priest:{1:[["pr_volley"],["pr_bolt","pr_bolt"],["pr_nova"],["pr_summon"],["pr_volley","pr_bolt"]],2:[["pr_rain"],["pr_volley","pr_volley"],["pr_nova","pr_bolt"],["pr_summon","pr_rain"],["pr_rain","pr_nova"],["pr_doom"],["pr_doom","pr_volley"]]},warden:{1:[["wd_combo1","wd_combo2"],["wd_dash"],["wd_fan"],["wd_spin"],["wd_vanish","wd_combo1"]],2:[["wd_combo1","wd_combo2","wd_spin"],["wd_dash","wd_dash"],["wd_fan","wd_fan"],["wd_vanish","wd_combo2","wd_combo1"],["wd_spin","wd_dash"],["wd_cross","wd_cross45"],["wd_cross"]]}},Ps=10});var q0={};xb(q0,{Actor:()=>ec,enemyActor:()=>Zh,playerActor:()=>tc});function BM(){let i=new Et,e=new Xt({color:"#8a5a2c",roughness:.7}),t=.46,n=Math.PI*.8,s=new Ue(new Qs(t,.03,6,20,n),e);s.rotation.z=(Math.PI-n)/2;let r=t*Math.sin((Math.PI-n)/2),a=2*t*Math.cos((Math.PI-n)/2),o=new Ue(new vs(.006,.006,a,4),new vt({color:"#e8dcc0"}));o.rotation.z=Math.PI/2,o.position.y=r;let c=new Ue(new vs(.04,.04,.16,6),new Xt({color:"#3a2414",roughness:.9}));c.rotation.z=Math.PI/2,c.position.y=t,i.add(s,o,c),i.position.y=-t;let l=new Et;return l.add(i),l.rotation.set(0,0,Math.PI/2),l.traverse(h=>{h.isMesh&&(h.castShadow=!0)}),l}function tc(i,e,t,n=null){let s=$e[e],r=Lt(e,t),a=r.weapon==="bow",o=new ec(i,{model:s.model,show:a?[]:s.show,hideNodes:s.hide||[]});if(o.cls=e,o.spec=r.id,a&&o.handR){let c=BM();o.handR.add(c),c.traverse(l=>{l.isMesh&&l.material.emissive&&o.mats.push(l.material)})}return wa(o,s.model,br(n,e)),o.cfg={idle:s.idle,run:s.run,runSpeed:s.base.speed,death:"Death_A"},o}function Zh(i,e,t){let n=rt[e],s=(n.scale||1)*(t?_r.scale:1),r=new ec(i,{model:n.model,weapons:n.weapons,scale:s,boss:!!n.crown,elite:t,hideNodes:n.crown?["Skeleton_Warrior_Helmet"]:[]});return n.tint&&r.tint(n.tint,.35),r.cfg={idle:n.idle,run:n.walk,runSpeed:n.speed,death:"Death_C_Skeletons",intro:n.introAnim},r}var FM,W0,OM,ec,Qh=Ns(()=>{Ut();pi();xr();Jh();rs();FM={Knight:["1H_Sword_Offhand","Badge_Shield","Rectangle_Shield","Round_Shield","Spike_Shield","1H_Sword","2H_Sword"],Barbarian:["1H_Axe_Offhand","Barbarian_Round_Shield","1H_Axe","2H_Axe","Mug","Barbarian_Hat"],Mage:["Spellbook","Spellbook_open","1H_Wand","2H_Staff","Mage_Hat"],Rogue_Hooded:["Knife_Offhand","1H_Crossbow","2H_Crossbow","Knife","Throwable"]},W0=i=>Ot[i]||Cs[i],OM=.12,ec=class{constructor(e,{model:t,show:n=[],weapons:s=[],scale:r=1,boss:a=!1,elite:o=!1,hideNodes:c=[]}){this.assets=e,this.root=new Et,this.model=e.character(t),this.model.scale.setScalar(r),this.root.add(this.model),this.scale=r;let l=[...(FM[t]||[]).filter(h=>!n.includes(h)),...c];this.mats=[],this.model.traverse(h=>{l.includes(h.name)&&(h.visible=!1),h.isMesh&&this.mats.push(h.material),h.isBone&&h.name==="head"&&(this.head=h),h.isBone&&(h.name==="handslotr"||h.name==="handslot.r")&&(this.handR=h),h.isBone&&(h.name==="handslotl"||h.name==="handslot.l")&&(this.handL=h)});for(let[h,d]of s){let u=e.prop(h);u.traverse(f=>{f.isMesh&&(f.castShadow=!0,this.mats.push(f.material=f.material.clone()))}),(d==="handslot.l"?this.handL:this.handR)?.add(u)}this.mixer=new Eo(this.model),this.actions=new Map,this.cur=null,this.curName="",this.flashT=0,this.sink=0,this.headPos=new C,a&&this.makeCrown(),o&&this.tint("#ff5a3c",.35)}clip(e){let t=this.actions.get(e);if(!t){let n=this.assets.clips[e];if(!n)return null;t=this.mixer.clipAction(n),this.actions.set(e,t)}return t}play(e,{loop:t=!0,time:n=null,speed:s=1}={}){let r=this.clip(e);r&&(this.curName!==e&&(r.reset(),r.setLoop(t?mh:ph,1/0),r.clampWhenFinished=!t,r.enabled=!0,r.setEffectiveWeight(1),this.cur&&r.crossFadeFrom(this.cur,OM,!1),r.play(),this.cur=r,this.curName=e),n!==null?(r.time=Math.max(0,Math.min(n,r.getClip().duration-.001)),r.timeScale=0):r.timeScale=s)}animate(e,t,n){if(e.dead)this.play(n.death||"Death_A",{loop:!1}),e.deadT>2.4&&(this.sink=Math.min(1,(e.deadT-2.4)/1.6));else if(e.down)this.play("Lie_Idle");else if(e.act&&W0(e.act)?.anim){let s=W0(e.act),r=this.assets.clips[s.anim],[a,o]=s.clip||[0,r.duration],c=e.actT;s.loopAnim?c=a+c*1.4%(o-a):s.hold?c=a+Math.min(1,c/Math.min(s.dur,(o-a)*1.2))*(o-a):c=a+Math.min(1,c/s.dur)*(o-a),this.play(s.anim,{loop:!1,time:c})}else e.intro?this.play(n.intro||"Taunt",{loop:!0,speed:.8}):e.moving?this.play(n.run,{speed:n.runSpeed?Math.max(.6,e.speed/n.runSpeed):1}):this.play(n.idle);if(this.mixer.update(this.hitstop>0?0:t),this.hitstop>0&&(this.hitstop-=t),this.flashT>0){this.flashT-=t;let s=Math.max(0,this.flashT/.12);for(let r of this.mats)r.emissive?.setRGB(s*1.2,s*1.1,s);this.flashT<=0&&this.restoreTint()}this.model.position.y=-this.sink*2.2*this.scale,this.head&&this.head.getWorldPosition(this.headPos)}flash(){this.flashT=.12}reset(){this.mixer.stopAllAction(),this.cur=null,this.curName="",this.sink=0,this.hitstop=0,this.flashT=0,this.counterGlow=0,this.model.position.y=0,this.restoreTint()}addXray(e){for(let s of this.mats)s.stencilWrite=!0,s.stencilRef=1,s.stencilFunc=Qa,s.stencilZPass=_u;let t=new vt({color:e,transparent:!0,opacity:.5,depthWrite:!1,depthFunc:ha,stencilWrite:!0,stencilRef:1,stencilFunc:yu,stencilFail:si,stencilZFail:si,stencilZPass:si}),n=[];this.model.traverse(s=>{s.isSkinnedMesh&&s.visible&&n.push(s)});for(let s of n){let r=new js(s.geometry,t);r.bind(s.skeleton,s.bindMatrix),r.frustumCulled=!1,r.renderOrder=30,s.parent.add(r)}}tint(e,t){this.tintColor=new re(e).multiplyScalar(t),this.restoreTint()}restoreTint(){for(let e of this.mats)e.emissive&&e.name!=="Glow"&&(this.tintColor?e.emissive.copy(this.tintColor):e.emissive.setRGB(0,0,0))}makeCrown(){let e=new Et,t=new Xt({color:"#d8a640",metalness:.9,roughness:.25,emissive:"#ff7a1a",emissiveIntensity:1.2}),n=new Ue(new vs(.34,.3,.14,16,1,!0),t);e.add(n);for(let s=0;s<7;s++){let r=s/7*Math.PI*2,a=new Ue(new Ks(.06,.28,6),t);a.position.set(Math.cos(r)*.32,.18,Math.sin(r)*.32),e.add(a)}e.position.set(0,.62,0),this.head?.add(e),this.crown=e;for(let s of this.mats)s.name==="Glow"&&(s.emissive.set("#ff5020"),s.emissiveIntensity=7)}}});Ut();Ut();Ut();var Pi={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};Ut();Ut();var Tn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},$1=new Zi(-1,1,1,-1,0,1),ju=class extends _t{constructor(){super(),this.setAttribute("position",new nt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new nt([0,2,0,0,2,0],2))}},Y1=new ju,Ii=class{constructor(e){this._mesh=new Ue(Y1,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,$1)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var ur=class extends Tn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof it?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Sn.clone(e.uniforms),this.material=new it({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Ii(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Fo=class extends Tn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Th=class extends Tn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var wh=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new fe);this._width=n.width,this._height=n.height,t=new qt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:un}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ur(Pi),this.copyPass.material.blending=Qt,this.clock=new wo}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Fo!==void 0&&(a instanceof Fo?n=!0:a instanceof Th&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new fe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};Ut();var Eh=class extends Tn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new re}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};Ut();Ut();var Oo={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new fe},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Ce},cameraProjectionMatrixInverse:{value:new Ce},cameraWorldMatrix:{value:new Ce},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new C(-1,-1,-1)},sceneBoxMax:{value:new C(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif

		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}

		void main() {
			float depth = getDepth(vUv.xy);
			if (depth >= 1.0) {
				discard;
				return;
			}
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {

				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},Bo={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},Ah={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function b0(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=K1(e),n=t.length,s=new Uint8Array(n*4);for(let a=0;a<n;++a){let o=t[a],c=2*Math.PI*o/n,l=new C(Math.cos(c),Math.sin(c),0).normalize();s[a*4]=(l.x*.5+.5)*255,s[a*4+1]=(l.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}let r=new ji(s,e,e);return r.wrapS=An,r.wrapT=An,r.needsUpdate=!0,r}function K1(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let a=1;a<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=a++;r++,s--}return n}Ut();var Ho={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:$u(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new fe},cameraProjectionMatrixInverse:{value:new Ce},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;

		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;

			denoised += w * neighborColor;
			totalWeight += w;
		}

		void main() {
			float depth = getDepth(vUv.xy);
			vec3 viewNormal = getViewNormal(vUv);
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}

			if (totalWeight > 0.) {
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function $u(i,e,t){let n=J1(i,e,t),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let a=n[r];s+=`vec3(${a.x}, ${a.y}, ${a.z})${r<i-1?",":")"}`}return s}function J1(i,e,t){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*e*s/i,a=Math.pow(s/(i-1),t);n.push(new C(Math.cos(r),Math.sin(r),a))}return n}var Rh=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,s,r,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,c=Math.floor(e+o),l=Math.floor(t+o),h=(3-Math.sqrt(3))/6,d=(c+l)*h,u=c-d,f=l-d,m=e-u,b=t-f,g,p;m>b?(g=1,p=0):(g=0,p=1);let v=m-g+h,_=b-p+h,x=m-1+2*h,w=b-1+2*h,E=c&255,R=l&255,I=this.perm[E+this.perm[R]]%12,S=this.perm[E+g+this.perm[R+p]]%12,y=this.perm[E+1+this.perm[R+1]]%12,P=.5-m*m-b*b;P<0?n=0:(P*=P,n=P*P*this._dot(this.grad3[I],m,b));let D=.5-v*v-_*_;D<0?s=0:(D*=D,s=D*D*this._dot(this.grad3[S],v,_));let F=.5-x*x-w*w;return F<0?r=0:(F*=F,r=F*F*this._dot(this.grad3[y],x,w)),70*(n+s+r)}noise3d(e,t,n){let s,r,a,o,l=(e+t+n)*.3333333333333333,h=Math.floor(e+l),d=Math.floor(t+l),u=Math.floor(n+l),f=1/6,m=(h+d+u)*f,b=h-m,g=d-m,p=u-m,v=e-b,_=t-g,x=n-p,w,E,R,I,S,y;v>=_?_>=x?(w=1,E=0,R=0,I=1,S=1,y=0):v>=x?(w=1,E=0,R=0,I=1,S=0,y=1):(w=0,E=0,R=1,I=1,S=0,y=1):_<x?(w=0,E=0,R=1,I=0,S=1,y=1):v<x?(w=0,E=1,R=0,I=0,S=1,y=1):(w=0,E=1,R=0,I=1,S=1,y=0);let P=v-w+f,D=_-E+f,F=x-R+f,H=v-I+2*f,X=_-S+2*f,W=x-y+2*f,ee=v-1+3*f,V=_-1+3*f,Z=x-1+3*f,le=h&255,Me=d&255,Ve=u&255,ct=this.perm[le+this.perm[Me+this.perm[Ve]]]%12,ft=this.perm[le+w+this.perm[Me+E+this.perm[Ve+R]]]%12,et=this.perm[le+I+this.perm[Me+S+this.perm[Ve+y]]]%12,j=this.perm[le+1+this.perm[Me+1+this.perm[Ve+1]]]%12,Y=.6-v*v-_*_-x*x;Y<0?s=0:(Y*=Y,s=Y*Y*this._dot3(this.grad3[ct],v,_,x));let ue=.6-P*P-D*D-F*F;ue<0?r=0:(ue*=ue,r=ue*ue*this._dot3(this.grad3[ft],P,D,F));let Re=.6-H*H-X*X-W*W;Re<0?a=0:(Re*=Re,a=Re*Re*this._dot3(this.grad3[et],H,X,W));let be=.6-ee*ee-V*V-Z*Z;return be<0?o=0:(be*=be,o=be*be*this._dot3(this.grad3[j],ee,V,Z)),32*(s+r+a+o)}noise4d(e,t,n,s){let r=this.grad4,a=this.simplex,o=this.perm,c=(Math.sqrt(5)-1)/4,l=(5-Math.sqrt(5))/20,h,d,u,f,m,b=(e+t+n+s)*c,g=Math.floor(e+b),p=Math.floor(t+b),v=Math.floor(n+b),_=Math.floor(s+b),x=(g+p+v+_)*l,w=g-x,E=p-x,R=v-x,I=_-x,S=e-w,y=t-E,P=n-R,D=s-I,F=S>y?32:0,H=S>P?16:0,X=y>P?8:0,W=S>D?4:0,ee=y>D?2:0,V=P>D?1:0,Z=F+H+X+W+ee+V,le=a[Z][0]>=3?1:0,Me=a[Z][1]>=3?1:0,Ve=a[Z][2]>=3?1:0,ct=a[Z][3]>=3?1:0,ft=a[Z][0]>=2?1:0,et=a[Z][1]>=2?1:0,j=a[Z][2]>=2?1:0,Y=a[Z][3]>=2?1:0,ue=a[Z][0]>=1?1:0,Re=a[Z][1]>=1?1:0,be=a[Z][2]>=1?1:0,Ye=a[Z][3]>=1?1:0,$t=S-le+l,k=y-Me+l,mt=P-Ve+l,He=D-ct+l,De=S-ft+2*l,ve=y-et+2*l,gt=P-j+2*l,_e=D-Y+2*l,Ge=S-ue+3*l,Vt=y-Re+3*l,Ct=P-be+3*l,A=D-Ye+3*l,M=S-1+4*l,U=y-1+4*l,q=P-1+4*l,K=D-1+4*l,G=g&255,Se=p&255,ie=v&255,xe=_&255,Ee=o[G+o[Se+o[ie+o[xe]]]]%32,te=o[G+le+o[Se+Me+o[ie+Ve+o[xe+ct]]]]%32,he=o[G+ft+o[Se+et+o[ie+j+o[xe+Y]]]]%32,ze=o[G+ue+o[Se+Re+o[ie+be+o[xe+Ye]]]]%32,Ae=o[G+1+o[Se+1+o[ie+1+o[xe+1]]]]%32,ae=.6-S*S-y*y-P*P-D*D;ae<0?h=0:(ae*=ae,h=ae*ae*this._dot4(r[Ee],S,y,P,D));let Oe=.6-$t*$t-k*k-mt*mt-He*He;Oe<0?d=0:(Oe*=Oe,d=Oe*Oe*this._dot4(r[te],$t,k,mt,He));let L=.6-De*De-ve*ve-gt*gt-_e*_e;L<0?u=0:(L*=L,u=L*L*this._dot4(r[he],De,ve,gt,_e));let J=.6-Ge*Ge-Vt*Vt-Ct*Ct-A*A;J<0?f=0:(J*=J,f=J*J*this._dot4(r[ze],Ge,Vt,Ct,A));let se=.6-M*M-U*U-q*q-K*K;return se<0?m=0:(se*=se,m=se*se*this._dot4(r[Ae],M,U,q,K)),27*(h+d+u+f+m)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}_dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}};var Vo=class i extends Tn{constructor(e,t,n=512,s=512,r,a,o){super(),this.width=n,this.height=s,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=b0(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new qt(this.width,this.height,{type:un}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new it({defines:Object.assign({},Oo.defines),uniforms:Sn.clone(Oo.uniforms),vertexShader:Oo.vertexShader,fragmentShader:Oo.fragmentShader,blending:Qt,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new bo,this.normalMaterial.blending=Qt,this.pdMaterial=new it({defines:Object.assign({},Ho.defines),uniforms:Sn.clone(Ho.uniforms),vertexShader:Ho.vertexShader,fragmentShader:Ho.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new it({defines:Object.assign({},Bo.defines),uniforms:Sn.clone(Bo.uniforms),vertexShader:Bo.vertexShader,fragmentShader:Bo.fragmentShader,blending:Qt}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new it({uniforms:Sn.clone(Pi.uniforms),vertexShader:Pi.vertexShader,fragmentShader:Pi.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Co,blendDst:ir,blendEquation:Fn,blendSrcAlpha:Ro,blendDstAlpha:ir,blendEquationAlpha:Fn}),this.blendMaterial=new it({uniforms:Sn.clone(Ah.uniforms),vertexShader:Ah.vertexShader,fragmentShader:Ah.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:bl,blendSrc:Co,blendDst:ir,blendEquation:Fn,blendSrcAlpha:Ro,blendDstAlpha:ir,blendEquationAlpha:Fn}),this._fsQuad=new Ii(null),this._originalClearColor=new re,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new Ys,this.depthTexture.format=Ss,this.depthTexture.type=Ms,this.normalRenderTarget=new qt(this.width,this.height,{minFilter:Jt,magFilter:Jt,type:un,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=$u(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Qt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Qt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Qt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Qt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Qt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new Rh,n=e*e*4,s=new Uint8Array(n);for(let a=0;a<e;a++)for(let o=0;o<e;o++){let c=a,l=o;s[(a*e+o)*4]=(t.noise(c,l)*.5+.5)*255,s[(a*e+o)*4+1]=(t.noise(c+e,l)*.5+.5)*255,s[(a*e+o)*4+2]=(t.noise(c,l+e)*.5+.5)*255,s[(a*e+o)*4+3]=(t.noise(c+e,l+e)*.5+.5)*255}let r=new ji(s,e,e,Mn,Vn);return r.wrapS=An,r.wrapT=An,r.needsUpdate=!0,r}};Vo.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};Ut();Ut();var x0={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new re(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var va=class i extends Tn{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new fe(e.x,e.y):new fe(256,256),this.clearColor=new re(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new qt(r,a,{type:un}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new qt(r,a,{type:un});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let u=new qt(r,a,{type:un});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),a=Math.round(a/2)}let o=x0;this.highPassUniforms=Sn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new it({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new fe(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Sn.clone(Pi.uniforms),this.blendMaterial=new it({uniforms:this.copyUniforms,vertexShader:Pi.vertexShader,fragmentShader:Pi.fragmentShader,blending:jt,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new re,this._oldClearAlpha=1,this._basic=new vt,this._fsQuad=new Ii(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new fe(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new it({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new fe(.5,.5)},direction:{value:new fe(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(e){return new it({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};va.BlurDirectionX=new fe(1,0);va.BlurDirectionY=new fe(0,1);Ut();var Go={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Ch=class extends Tn{constructor(){super(),this.uniforms=Sn.clone(Go.uniforms),this.material=new go({name:Go.name,uniforms:this.uniforms,vertexShader:Go.vertexShader,fragmentShader:Go.fragmentShader}),this._fsQuad=new Ii(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},je.getTransfer(this._outputColorSpace)===lt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Tl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===wl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===El?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===da?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Rl?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Cl?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Al&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Z1={uniforms:{tDiffuse:{value:null},uTime:{value:0},uVignette:{value:.42},uSaturation:{value:1.08},uLift:{value:new C(.012,.01,.022)},uGain:{value:new C(1.04,1,.97)},uHurt:{value:0},uDesat:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
    uniform sampler2D tDiffuse; uniform float uTime, uVignette, uSaturation, uHurt, uDesat; uniform vec3 uLift, uGain;
    varying vec2 vUv;
    float hash(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233))) * 43758.5453); }
    void main(){
      vec4 c = texture2D(tDiffuse, vUv);
      vec3 col = c.rgb * uGain + uLift;
      float l = dot(col, vec3(0.2126,0.7152,0.0722));
      col = mix(vec3(l), col, uSaturation * (1.0 - uDesat));
      vec2 d = vUv - 0.5;
      float v = smoothstep(0.85, 0.2, length(d * vec2(1.0, 0.85)));
      col *= mix(1.0 - uVignette, 1.0, v);
      col = mix(col, col * vec3(1.35, 0.35, 0.3), uHurt * (1.0 - v) * 0.9);
      col += (hash(vUv * 900.0 + uTime) - 0.5) * 0.018;
      gl_FragColor = vec4(col, c.a);
    }`},Q1={uniforms:{tDiffuse:{value:null}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform sampler2D tDiffuse; varying vec2 vUv;
    void main(){
      vec4 c = texture2D(tDiffuse, vUv);
      if (any(isnan(c)) || any(isinf(c))) c = vec4(0.0, 0.0, 0.0, 1.0);
      gl_FragColor = vec4(min(c.rgb, vec3(24.0)), c.a);
    }`},fr=(i,e,t)=>i+(e-i)*t,Wo=(i,e,t)=>{let n=Math.max(0,Math.min(1,(t-i)/(e-i)));return n*n*(3-2*n)},v0=(i,e,t)=>{let n=e-i;for(;n>Math.PI;)n-=Math.PI*2;for(;n<-Math.PI;)n+=Math.PI*2;return i+n*t},Ph=class{constructor(e){this.canvas=e;let t=this.renderer=new Mh({canvas:e,antialias:!1,stencil:!0,powerPreference:"high-performance"});t.setPixelRatio(Math.min(devicePixelRatio,1.5)),t.outputColorSpace=It,t.toneMapping=da,t.toneMappingExposure=1.05,t.shadowMap.enabled=!0,t.shadowMap.type=gl,this.scene=new oo,this.scene.background=new re("#06050a"),this.scene.fog=new ao("#08070c",.026),this.camera=new Kt(34,1,.5,200),this.camOffset=new C(0,19,13.5),this.camTarget=new C,this.look=new C,this.cine=null,this.cinePos=new C,this.cineLook=new C,this.zoom=0,this.zoomTo=0,this.faceYaw=null,this.camYaw=null,this.shake=0,this.quality=2,this.hemi=new yo("#5a6690","#140f0c",.32),this.scene.add(this.hemi);let n=this.sun=new nr("#9fb0ee",.75);n.castShadow=!0,n.shadow.mapSize.set(2048,2048),n.shadow.bias=-4e-4,n.shadow.normalBias=.03;let s=n.shadow.camera;s.left=-26,s.right=26,s.top=26,s.bottom=-26,s.near=1,s.far=80,this.scene.add(n,n.target),this.heroLight=new Hn("#ffd9a8",0,9,1.6),this.scene.add(this.heroLight),this.cap=1.5,this.dynScale=1,this.buildComposer(),this.resize(),addEventListener("resize",()=>this.resize())}buildComposer(){let e=this.renderer,t=new qt(2,2,{type:un,samples:4,stencilBuffer:!0}),n=this.composer=new wh(e,t);n.addPass(new Eh(this.scene,this.camera)),this.gtao=new Vo(this.scene,this.camera,2,2),this.gtao.updateGtaoMaterial({radius:.9,distanceExponent:1.4,thickness:1.2,scale:1.1,samples:8}),this.gtao.blendIntensity=.85,n.addPass(this.gtao),n.addPass(new ur(Q1)),this.bloom=new va(new fe(2,2),.75,.55,.82),n.addPass(this.bloom),this.grade=new ur(Z1),n.addPass(this.grade),n.addPass(new Ch)}setQuality(e){e=Math.max(0,Math.min(3,e|0)),this.quality=e,this.gtao.enabled=e>=3,this.bloom.enabled=e>=1;let t=e>=1;this.renderer.shadowMap.enabled!==t&&(this.renderer.shadowMap.enabled=t);let n=e>=2?2048:1024;this.sun.shadow.mapSize.x!==n&&(this.sun.shadow.mapSize.set(n,n),this.sun.shadow.map?.dispose(),this.sun.shadow.map=null);let s=e>=3?4:e>=1?2:0;for(let r of[this.composer.renderTarget1,this.composer.renderTarget2])r.samples!==s&&(r.samples=s,r.dispose());this.cap=e>=2?1.5:e===1?1:.85,this.dynScale=1,this.resize()}adapt(e){let t=this.dynScale;e>1/50&&this.dynScale>.6?this.dynScale=Math.max(.6,this.dynScale-.1):e<1/58&&this.dynScale<1&&(this.dynScale=Math.min(1,this.dynScale+.05)),this.dynScale!==t&&this.resize()}resize(){let e=innerWidth,t=innerHeight;this.renderer.setPixelRatio(Math.min(devicePixelRatio,this.cap??1.5)*(this.dynScale??1)),this.renderer.setSize(e,t,!1),this.canvas.style.width=e+"px",this.canvas.style.height=t+"px",this.camera.aspect=e/t,this.camera.fov=e<t?52:34,this.camera.updateProjectionMatrix();let n=this.renderer.getPixelRatio();this.composer.setPixelRatio(n),this.composer.setSize(e,t)}follow(e,t,n,s){let r=1-Math.exp(-n*6),a=e+(s?.x||0),o=t+(s?.z||0);this.camTarget.x+=(a-this.camTarget.x)*r,this.camTarget.z+=(o-this.camTarget.z)*r}snap(e,t){this.camTarget.set(e,0,t)}cinematic(e){this.cine={...e,t:0}}cineShot(e,t,n){let s=this.cine;s.t+=e;let r=Math.min(1,s.t/s.dur);if(r>=1){this.cine=null;return}let a=Wo(0,.16,r)*(1-Wo(.84,1,r)),o=Wo(0,1,r),c=fr(s.dist[0],s.dist[1],o);this.cinePos.set(s.x+Math.cos(s.yaw)*c,fr(s.height[0],s.height[1],o),s.z+Math.sin(s.yaw)*c),this.cineLook.set(s.x,fr(s.look[0],s.look[1],o),s.z),t.lerp(this.cinePos,a),n.lerp(this.cineLook,a)}setAtmosphere({fog:e,bg:t,sky:n="#5a6690",ground:s="#140f0c",moon:r="#9fb0ee",moonI:a=.75}){this.scene.fog.color.set(e),this.scene.background.set(t),this.hemi.color.set(n),this.hemi.groundColor.set(s),this.sun.color.set(r),this.sun.intensity=a}addShake(e){this.shake=Math.min(1.2,this.shake+e)}render(e,t){let n=this.camera;this.shake*=Math.exp(-e*9);let s=this.shake;this.zoom+=(this.zoomTo-this.zoom)*(1-Math.exp(-e*8));let r=this.camOffset,a=Wo(0,1,this.zoom),o=Math.atan2(r.z,r.x),c=this.faceYaw===null?o:v0(o,this.faceYaw,Wo(.55,1,this.zoom));this.camYaw=this.camYaw===null?c:v0(this.camYaw,c,1-Math.exp(-e*3));let l=fr(Math.hypot(r.x,r.z),4.8,a),h=fr(r.y,2,a);n.position.set(this.camTarget.x+Math.cos(this.camYaw)*l,h,this.camTarget.z+Math.sin(this.camYaw)*l),this.look.set(this.camTarget.x,fr(.8,1.2,a),this.camTarget.z),this.cine&&this.cineShot(e,n.position,this.look),n.position.x+=(Math.random()-.5)*s,n.position.y+=(Math.random()-.5)*s*.6,n.position.z+=(Math.random()-.5)*s,n.lookAt(this.look);let d=this.heroLight.userData.follow;if(this.cine){let f=this.cine;this.heroLight.position.set(f.x+Math.cos(f.yaw)*3.5,this.cineLook.y+.5,f.z+Math.sin(f.yaw)*3.5),this.heroLight.intensity=45,this.heroLight.distance=14}else d&&d.parent?(this.heroLight.position.set(d.position.x+Math.cos(this.camYaw)*1.8*a,fr(3.2,2.3,a),d.position.z+Math.sin(this.camYaw)*1.8*a),this.heroLight.intensity=9,this.heroLight.distance=9):this.heroLight.intensity=0;let u=this.sun;u.position.set(this.camTarget.x-12,30,this.camTarget.z+8),u.target.position.set(this.camTarget.x,0,this.camTarget.z),this.grade.uniforms.uTime.value=t,this.composer.render(e)}pick(e,t){let n=new fe(e/innerWidth*2-1,-(t/innerHeight)*2+1),s=new Ao;s.setFromCamera(n,this.camera);let r=-s.ray.origin.y/Math.min(s.ray.direction.y,-.05);return{x:s.ray.origin.x+s.ray.direction.x*r,z:s.ray.origin.z+s.ray.direction.z*r}}toScreen(e){let t=e.clone().project(this.camera);return{x:(t.x*.5+.5)*innerWidth,y:(-t.y*.5+.5)*innerHeight,visible:t.z<1}}};Ut();Ut();Ut();function Ih(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new _t,l=0;for(let h=0;h<i.length;++h){let d=i[h],u=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(d.morphAttributes[f])}if(e){let f;if(t)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(t){let h=0,d=[];for(let u=0;u<i.length;++u){let f=i[u].index;for(let m=0;m<f.count;++m)d.push(f.getX(m)+h);h+=i[u].attributes.position.count}c.setIndex(d)}for(let h in r){let d=_0(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,d)}for(let h in a){let d=a[h][0].length;if(d===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let b=0;b<a[h].length;++b)f.push(a[h][b][u]);let m=_0(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}return c}function _0(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new Dt(a,t,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let d=c/t;for(let u=0,f=h.count;u<f;u++)for(let m=0;m<t;m++){let b=h.getComponent(u,m);o.setComponent(u+d,m,b)}}else a.set(h.array,c);c+=h.count*t}return s!==void 0&&(o.gpuType=s),o}function Yu(i,e){if(e===vu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===pa||e===No){let t=i.getIndex();if(t===null){let a=[],o=i.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===pa)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var kh=class extends Ei{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new nf(t)}),this.register(function(t){return new sf(t)}),this.register(function(t){return new ff(t)}),this.register(function(t){return new pf(t)}),this.register(function(t){return new mf(t)}),this.register(function(t){return new af(t)}),this.register(function(t){return new of(t)}),this.register(function(t){return new cf(t)}),this.register(function(t){return new lf(t)}),this.register(function(t){return new tf(t)}),this.register(function(t){return new hf(t)}),this.register(function(t){return new rf(t)}),this.register(function(t){return new uf(t)}),this.register(function(t){return new df(t)}),this.register(function(t){return new Qu(t)}),this.register(function(t){return new gf(t)}),this.register(function(t){return new bf(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=Qi.extractUrlBase(e);a=Qi.resolveURL(l,this.path)}else a=Qi.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new la(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===w0){try{a[Je.KHR_BINARY_GLTF]=new xf(e)}catch(d){s&&s(d);return}r=JSON.parse(a[Je.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new wf(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let d=this.pluginCallbacks[h](l);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,a[d.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let d=r.extensionsUsed[h],u=r.extensionsRequired||[];switch(d){case Je.KHR_MATERIALS_UNLIT:a[d]=new ef;break;case Je.KHR_DRACO_MESH_COMPRESSION:a[d]=new vf(r,this.dracoLoader);break;case Je.KHR_TEXTURE_TRANSFORM:a[d]=new _f;break;case Je.KHR_MESH_QUANTIZATION:a[d]=new yf;break;default:u.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function eM(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var Je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Qu=class{constructor(e){this.parser=e,this.name=Je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new re(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],dn);let d=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new nr(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Hn(h),l.distance=d;break;case"spot":l=new So(h),l.distance=d,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),ki(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},ef=class{constructor(){this.name=Je.KHR_MATERIALS_UNLIT}getMaterialType(){return vt}extendParams(e,t,n){let s=[];e.color=new re(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],dn),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,It))}return Promise.all(s)}},tf=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},nf=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new fe(o,o)}return Promise.all(r)}},sf=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},rf=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},af=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new re(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],dn)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,It)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},of=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},cf=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new re().setRGB(o[0],o[1],o[2],dn),Promise.all(r)}},lf=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},hf=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new re().setRGB(o[0],o[1],o[2],dn),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,It)),Promise.all(r)}},df=class{constructor(e){this.parser=e,this.name=Je.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}},uf=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},ff=class{constructor(e){this.parser=e,this.name=Je.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},pf=class{constructor(e){this.parser=e,this.name=Je.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},mf=class{constructor(e){this.parser=e,this.name=Je.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},gf=class{constructor(e){this.name=Je.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,d=s.byteStride,u=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,d,u,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*d);return a.decodeGltfBuffer(new Uint8Array(f),h,d,u,s.mode,s.filter),f})})}else return null}},bf=class{constructor(e){this.name=Je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==Yn.TRIANGLES&&l.mode!==Yn.TRIANGLE_STRIP&&l.mode!==Yn.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let h=l.pop(),d=h.isGroup?h.children:[h],u=l[0].count,f=[];for(let m of d){let b=new Ce,g=new C,p=new hn,v=new C(1,1,1),_=new $s(m.geometry,m.material,u);for(let x=0;x<u;x++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,x),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,x),c.SCALE&&v.fromBufferAttribute(c.SCALE,x),_.setMatrixAt(x,b.compose(g,p,v));for(let x in c)if(x==="_COLOR_0"){let w=c[x];_.instanceColor=new hi(w.array,w.itemSize,w.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&m.geometry.setAttribute(x,c[x]);kt.prototype.copy.call(_,m),this.parser.assignFinalMaterial(_),f.push(_)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},w0="glTF",qo=12,y0={JSON:1313821514,BIN:5130562},xf=class{constructor(e){this.name=Je.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,qo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==w0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-qo,r=new DataView(e,qo),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let c=r.getUint32(a,!0);if(a+=4,c===y0.JSON){let l=new Uint8Array(e,qo+a,o);this.content=n.decode(l)}else if(c===y0.BIN){let l=qo+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},vf=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let h in a){let d=Sf[h]||h.toLowerCase();o[d]=a[h]}for(let h in e.attributes){let d=Sf[h]||h.toLowerCase();if(a[h]!==void 0){let u=n.accessors[e.attributes[h]],f=_a[u.componentType];l[d]=f.name,c[d]=u.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(d,u){s.decodeDracoFile(h,function(f){for(let m in f.attributes){let b=f.attributes[m],g=c[m];g!==void 0&&(b.normalized=g)}d(f)},o,l,dn,u)})})}},_f=class{constructor(){this.name=Je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},yf=class{constructor(){this.name=Je.KHR_MESH_QUANTIZATION}},Lh=class extends Yi{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=s-t,d=(n-t)/h,u=d*d,f=u*d,m=e*l,b=m-l,g=-2*f+3*u,p=f-u,v=1-g,_=p-u+d;for(let x=0;x!==o;x++){let w=a[b+x+o],E=a[b+x+c]*h,R=a[m+x+o],I=a[m+x]*h;r[x]=v*w+_*E+g*R+p*I}return r}},tM=new hn,Mf=class extends Lh{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return tM.fromArray(r).normalize().toArray(r),r}},Yn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},_a={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},M0={9728:Jt,9729:_n,9984:kl,9985:ua,9986:ar,9987:di},S0={33071:xi,33648:Jr,10497:An},Ku={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Sf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ts={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},nM={CUBICSPLINE:void 0,LINEAR:Ws,STEP:Gs},Ju={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function iM(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Xt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ci})),i.DefaultMaterial}function pr(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ki(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function sM(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let d=e[l];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(s=!0),d.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){let d=e[l];if(n){let u=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):i.attributes.position;a.push(u)}if(s){let u=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):i.attributes.normal;o.push(u)}if(r){let u=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):i.attributes.color;c.push(u)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],d=l[1],u=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=d),r&&(i.morphAttributes.color=u),i.morphTargetsRelative=!0,i})}function rM(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function aM(i){let e,t=i.extensions&&i.extensions[Je.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Zu(t.attributes):e=i.indices+":"+Zu(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Zu(i.targets[n]);return e}function Zu(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Tf(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function oM(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var cM=new Ce,wf=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new eM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new _o(this.options.manager):this.textureLoader=new To(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new la(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return pr(r,o,s),ki(o,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,h]of a.children.entries())r(h,o.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Je.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(Qi.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=Ku[s.type],o=_a[s.componentType],c=s.normalized===!0,l=new o(s.count*a);return Promise.resolve(new Dt(l,a,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],c=Ku[s.type],l=_a[s.componentType],h=l.BYTES_PER_ELEMENT,d=h*c,u=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,m=s.normalized===!0,b,g;if(f&&f!==d){let p=Math.floor(u/f),v="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,_=t.cache.get(v);_||(b=new l(o,p*f,s.count*f/h),_=new Xs(b,f/h),t.cache.add(v,_)),g=new xs(_,c,u%f/h,m)}else o===null?b=new l(s.count*c):b=new l(o,u,s.count*c),g=new Dt(b,c,m);if(s.sparse!==void 0){let p=Ku.SCALAR,v=_a[s.sparse.indices.componentType],_=s.sparse.indices.byteOffset||0,x=s.sparse.values.byteOffset||0,w=new v(a[1],_,s.sparse.count*p),E=new l(a[2],x,s.sparse.count*c);o!==null&&(g=new Dt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let R=0,I=w.length;R<I;R++){let S=w[R];if(g.setX(S,E[R*c]),c>=2&&g.setY(S,E[R*c+1]),c>=3&&g.setZ(S,E[R*c+2]),c>=4&&g.setW(S,E[R*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let u=(r.samplers||{})[a.sampler]||{};return h.magFilter=M0[u.magFilter]||_n,h.minFilter=M0[u.minFilter]||di,h.wrapS=S0[u.wrapS]||An,h.wrapT=S0[u.wrapT]||An,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Jt&&h.minFilter!==_n,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let a=s.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(d){l=!0;let u=new Blob([d],{type:a.mimeType});return c=o.createObjectURL(u),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(d){return new Promise(function(u,f){let m=u;t.isImageBitmapLoader===!0&&(m=function(b){let g=new nn(b);g.needsUpdate=!0,u(g)}),t.load(Qi.resolveURL(d,r.path),m,void 0,f)})}).then(function(d){return l===!0&&o.revokeObjectURL(c),ki(d,a),d.userData.mimeType=a.mimeType||oM(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),d});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Je.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[Je.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(a);a=r.extensions[Je.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new ca,mn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new $i,mn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Xt}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},c=r.extensions||{},l=[];if(c[Je.KHR_MATERIALS_UNLIT]){let d=s[Je.KHR_MATERIALS_UNLIT];a=d.getMaterialType(),l.push(d.extendParams(o,r,t))}else{let d=r.pbrMetallicRoughness||{};if(o.color=new re(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){let u=d.baseColorFactor;o.color.setRGB(u[0],u[1],u[2],dn),o.opacity=u[3]}d.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",d.baseColorTexture,It)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),a=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Zt);let h=r.alphaMode||Ju.OPAQUE;if(h===Ju.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Ju.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==vt&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new fe(1,1),r.normalTexture.scale!==void 0)){let d=r.normalTexture.scale;o.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&a!==vt&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==vt){let d=r.emissiveFactor;o.emissive=new re().setRGB(d[0],d[1],d[2],dn)}return r.emissiveTexture!==void 0&&a!==vt&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,It)),Promise.all(l).then(function(){let d=new a(o);return r.name&&(d.name=r.name),ki(d,r),t.associations.set(d,{materials:e}),r.extensions&&pr(s,d,r),d})}createUniqueName(e){let t=xt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[Je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return T0(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],h=aM(l),d=s[h];if(d)a.push(d.promise);else{let u;l.extensions&&l.extensions[Je.KHR_DRACO_MESH_COMPRESSION]?u=r(l):u=T0(new _t,l,t),s[h]={primitive:l,promise:u},a.push(u)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let h=a[c].material===void 0?iM(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],d=[];for(let f=0,m=h.length;f<m;f++){let b=h[f],g=a[f],p,v=l[f];if(g.mode===Yn.TRIANGLES||g.mode===Yn.TRIANGLE_STRIP||g.mode===Yn.TRIANGLE_FAN||g.mode===void 0)p=r.isSkinnedMesh===!0?new js(b,v):new Ue(b,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===Yn.TRIANGLE_STRIP?p.geometry=Yu(p.geometry,No):g.mode===Yn.TRIANGLE_FAN&&(p.geometry=Yu(p.geometry,pa));else if(g.mode===Yn.LINES)p=new ho(b,v);else if(g.mode===Yn.LINE_STRIP)p=new yi(b,v);else if(g.mode===Yn.LINE_LOOP)p=new uo(b,v);else if(g.mode===Yn.POINTS)p=new fo(b,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&rM(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),ki(p,r),g.extensions&&pr(s,p,g),t.assignFinalMaterial(p),d.push(p)}for(let f=0,m=d.length;f<m;f++)t.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return r.extensions&&pr(s,d[0],r),d[0];let u=new Et;r.extensions&&pr(s,u,r),t.associations.set(u,{meshes:e});for(let f=0,m=d.length;f<m;f++)u.add(d[f]);return u})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Kt(wu.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Zi(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ki(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],c=[];for(let l=0,h=a.length;l<h;l++){let d=a[l];if(d){o.push(d);let u=new Ce;r!==null&&u.fromArray(r.array,l*16),c.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new lo(o,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let d=0,u=s.channels.length;d<u;d++){let f=s.channels[d],m=s.samplers[f.sampler],b=f.target,g=b.node,p=s.parameters!==void 0?s.parameters[m.input]:m.input,v=s.parameters!==void 0?s.parameters[m.output]:m.output;b.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",v)),l.push(m),h.push(b))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(d){let u=d[0],f=d[1],m=d[2],b=d[3],g=d[4],p=[];for(let _=0,x=u.length;_<x;_++){let w=u[_],E=f[_],R=m[_],I=b[_],S=g[_];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();let y=n._createAnimationTracks(w,E,R,I,S);if(y)for(let P=0;P<y.length;P++)p.push(y[P])}let v=new er(r,void 0,p);return ki(v,s),v})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=s.weights.length;c<l;c++)o.morphTargetInfluences[c]=s.weights[c]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){let h=l[0],d=l[1],u=l[2];u!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(u,cM)});for(let f=0,m=d.length;f<m;f++)h.add(d[f]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new aa:l.length>1?h=new Et:l.length===1?h=l[0]:h=new kt,h!==l[0])for(let d=0,u=l.length;d<u;d++)h.add(l[d]);if(r.name&&(h.userData.name=r.name,h.name=a),ki(h,r),r.extensions&&pr(n,h,r),r.matrix!==void 0){let d=new Ce;d.fromArray(r.matrix),h.applyMatrix4(d)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let d=s.associations.get(h);s.associations.set(h,{...d})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new Et;n.name&&(r.name=s.createUniqueName(n.name)),ki(r,n),n.extensions&&pr(t,r,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(s.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,d=c.length;h<d;h++)r.add(c[h]);let l=h=>{let d=new Map;for(let[u,f]of s.associations)(u instanceof mn||u instanceof nn)&&d.set(u,f);return h.traverse(u=>{let f=s.associations.get(u);f!=null&&d.set(u,f)}),d};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,c=[];Ts[r.path]===Ts.weights?e.traverse(function(u){u.morphTargetInfluences&&c.push(u.name?u.name:u.uuid)}):c.push(o);let l;switch(Ts[r.path]){case Ts.weights:l=Si;break;case Ts.rotation:l=Ti;break;case Ts.translation:case Ts.scale:l=wi;break;default:switch(n.itemSize){case 1:l=Si;break;case 2:case 3:default:l=wi;break}break}let h=s.interpolation!==void 0?nM[s.interpolation]:Ws,d=this._getArrayFromAccessor(n);for(let u=0,f=c.length;u<f;u++){let m=new l(c[u]+"."+Ts[r.path],t.array,d,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),a.push(m)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Tf(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Ti?Mf:Lh;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function lM(i,e,t){let n=e.attributes,s=new On;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(s.set(new C(c[0],c[1],c[2]),new C(l[0],l[1],l[2])),o.normalized){let h=Tf(_a[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new C,c=new C;for(let l=0,h=r.length;l<h;l++){let d=r[l];if(d.POSITION!==void 0){let u=t.json.accessors[d.POSITION],f=u.min,m=u.max;if(f!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),u.normalized){let b=Tf(_a[u.componentType]);c.multiplyScalar(b)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new Rn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function T0(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(let a in n){let o=Sf[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return je.workingColorSpace!==dn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${je.workingColorSpace}" not supported.`),ki(i,e),lM(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?sM(i,e.targets,t):i})}var E0=(function(){var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q:Odkr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq;w8Wqdbk;esezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9Uc;WFbGgocjdaocjd6EhDaicefhocbhqdnindndndnaeaq9nmbaDaeaq9RaqaDfae6Egkcsfglcl4cifcd4hxalc9WGgmTmecbhPawcjdfhsaohzinaraz9Rax6mvarazaxfgo9RcK6mvczhlcbhHinalgic9WfgOawcj;cbffhldndndndndnazaOco4fRbbaHcoG4ciGPlbedibkal9cb83ibalcwf9cb83ibxikalaoRblaoRbbgOco4gAaAciSgAE86bbawcj;cbfaifglcGfaoclfaAfgARbbaOcl4ciGgCaCciSgCE86bbalcVfaAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc7faAaCfgARbbaOciGgOaOciSgOE86bbalctfaAaOfgARbbaoRbegOco4gCaCciSgCE86bbalc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbalc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc93faAaCfgARbbaOciGgOaOciSgOE86bbalc94faAaOfgARbbaoRbdgOco4gCaCciSgCE86bbalc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbalc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc97faAaCfgARbbaOciGgOaOciSgOE86bbalc98faAaOfgORbbaoRbigoco4gAaAciSgAE86bbalc99faOaAfgORbbaocl4ciGgAaAciSgAE86bbalc9:faOaAfgORbbaocd4ciGgAaAciSgAE86bbalcufaOaAfglRbbaociGgoaociSgoE86bbalaofhoxdkalaoRbwaoRbbgOcl4gAaAcsSgAE86bbawcj;cbfaifglcGfaocwfaAfgARbbaOcsGgOaOcsSgOE86bbalcVfaAaOfgORbbaoRbegAcl4gCaCcsSgCE86bbalc7faOaCfgORbbaAcsGgAaAcsSgAE86bbalctfaOaAfgORbbaoRbdgAcl4gCaCcsSgCE86bbalc91faOaCfgORbbaAcsGgAaAcsSgAE86bbalc4faOaAfgORbbaoRbigAcl4gCaCcsSgCE86bbalc93faOaCfgORbbaAcsGgAaAcsSgAE86bbalc94faOaAfgORbbaoRblgAcl4gCaCcsSgCE86bbalc95faOaCfgORbbaAcsGgAaAcsSgAE86bbalc96faOaAfgORbbaoRbvgAcl4gCaCcsSgCE86bbalc97faOaCfgORbbaAcsGgAaAcsSgAE86bbalc98faOaAfgORbbaoRbogAcl4gCaCcsSgCE86bbalc99faOaCfgORbbaAcsGgAaAcsSgAE86bbalc9:faOaAfgORbbaoRbrgocl4gAaAcsSgAE86bbalcufaOaAfglRbbaocsGgoaocsSgoE86bbalaofhoxekalao8Pbb83bbalcwfaocwf8Pbb83bbaoczfhokdnaiam9pmbaHcdfhHaiczfhlarao9RcL0mekkaiam6mvaoTmvdnakTmbawaPfRbbhHawcj;cbfhlashiakhOinaialRbbgzce4cbazceG9R7aHfgH86bbaiadfhialcefhlaOcufgOmbkkascefhsaohzaPcefgPad9hmbxikkcbc99arao9Radcaadca0ESEhoxlkaoaxad2fhCdnakmbadhlinaoTmlarao9Rax6mlaoaxfhoalcufglmbkaChoxekcbhmawcjdfhAinarao9Rax6miawamfRbbhHawcj;cbfhlaAhiakhOinaialRbbgzce4cbazceG9R7aHfgH86bbaiadfhialcefhlaOcufgOmbkaAcefhAaoaxfhoamcefgmad9hmbkaChokabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqaombkc9:hoxekc9:hokavcj;ebf8Kjjjjbaok;cseHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhDaicefgqarfhidnaeTmbcmcsawceSEhkcbhxcbhmcbhPcbhwcbhlindnaiaD9nmbc9:hoxikdndnaqRbbgoc;Ve0mbavc;abfalaocu7gscl4fcsGcitfgzydlhrazydbhzdnaocsGgHak9pmbavawasfcsGcdtfydbaxaHEhoaHThsdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkaxasfhxcdhHavawcdtfaoBdbawasfhwcehsalhOxdkdndnaHcsSmbaHc987aHamffcefhoxekaicefhoai8SbbgHcFeGhsdndnaHcu9mmbaohixekaicvfhiascFbGhscrhHdninao8SbbgOcFbGaHtasVhsaOcu9kmeaocefhoaHcrfgHc8J9hmbxdkkaocefhikasce4cbasceG9R7amfhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhHavawcdtfaoBdbcehsawcefhwalhOaohmxekdnaocpe0mbaxcefgHavawaDaocsGfRbbgocl49RcsGcdtfydbaocz6gzEhravawao9RcsGcdtfydbaHazfgAaocsGgHEhoaHThCdndnadcd9hmbabaPcetfgHax87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHaxBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfaxBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgOaxBdlaOarBdbavawazfgwcsGcdtfaoBdbalcefcsGhOawaCfhwaxhzaAaCfhxxekaxcbaiRbbgOEgzaoc;:eSgHfhraOcsGhCaOcl4hAdndnaOcs0mbarcefhoxekarhoavawaA9RcsGcdtfydbhrkdndnaCmbaocefhxxekaohxavawaO9RcsGcdtfydbhokdndnaHTmbaicefhHxekaicdfhHai8SbegscFeGhzdnascu9kmbaicofhXazcFbGhzcrhidninaH8SbbgscFbGaitazVhzascu9kmeaHcefhHaicrfgic8J9hmbkaXhHxekaHcefhHkazce4cbazceG9R7amfgmhzkdndnaAcsSmbaHhsxekaHcefhsaH8SbbgicFeGhrdnaicu9kmbaHcvfhXarcFbGhrcrhidninas8SbbgHcFbGaitarVhraHcu9kmeascefhsaicrfgic8J9hmbkaXhsxekascefhskarce4cbarceG9R7amfgmhrkdndnaCcsSmbashixekascefhias8SbbgocFeGhHdnaocu9kmbascvfhXaHcFbGhHcrhodninai8SbbgscFbGaotaHVhHascu9kmeaicefhiaocrfgoc8J9hmbkaXhixekaicefhikaHce4cbaHceG9R7amfgmhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfazBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgXazBdlaXarBdbavawaOcz6aAcsSVfgwcsGcdtfaoBdbawaCTaCcsSVfhwalcefcsGhOkaqcefhqavc;abfaOcitfgOarBdlaOaoBdbavc;abfalasfcsGcitfgraoBdlarazBdbawcsGhwalaHfcsGhlaPcifgPae6mbkkcbc99aiaDSEhokavc;aef8Kjjjjbaok:flevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;oiliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabaiavcefciGfcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:OhDxekcjjjj94hDkabaiavciGfgkcd7cetfaD87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:OhDxekcjjjj94hDkabaiavcufciGfcetfaD87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohvxekcjjjj94hvkabakcetfav87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklzNbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q:6dkr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq:p9sqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk:N8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhlaicefhodnaeTmbadTmbalc;WFbGglcjdalcjd6EhwcbhDinawaeaD9RaDawfae6Egqcsfglc9WGgkci2hxakcethmalcl4cifcd4hPabaDad2fhsakc;ab6hzcbhHincbhOaohAdndninaraA9RaP6meavcj;cbfaOak2fhCaAaPfhocbhidnazmbarao9Rc;Gb6mbcbhlinaCalfhidndndndndnaAalco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklbaoczfhokdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklzaoczfhokdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklaaoczfhokdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WaoclfaYpQbfaXc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WaocwfaYpQbfaXc:q:yjjbfRbbfhoxekaiaopbbbpkl8Waoczfhokalc;abfhialcjefak0meaihlarao9Rc;Fb0mbkkdnaiak9pmbaici4hlinarao9RcK6miaCaifhXdndndndndnaAaico4fRbbalcoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpkbbxikaXaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkbbaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaXaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkbbaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaXaopbbbpkbbaoczfhokalcdfhlaiczfgiak6mbkkaoTmeaohAaOcefgOclSmdxbkkc9:hoxlkdnakTmbavcjdfaHfhiavaHfpbdbhYcbhXinaiavcj;cbfaXfglpblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLalakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEalamfpblbg3cep9Ta3aQp9op9Hp9rg3alaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfhiaXczfgXak6mbkkaHclfgHad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfgDae6mbkkcbc99arao9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk::seHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhDaicefgqarfhidnaeTmbcmcsawceSEhkcbhxcbhmcbhPcbhwcbhlindnaiaD9nmbc9:hoxikdndnaqRbbgoc;Ve0mbavc;abfalaocu7gscl4fcsGcitfgzydlhrazydbhzdnaocsGgHak9pmbavawasfcsGcdtfydbaxaHEhoaHThsdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkaxasfhxcdhHavawcdtfaoBdbawasfhwcehsalhOxdkdndnaHcsSmbaHc987aHamffcefhoxekaicefhoai8SbbgHcFeGhsdndnaHcu9mmbaohixekaicvfhiascFbGhscrhHdninao8SbbgOcFbGaHtasVhsaOcu9kmeaocefhoaHcrfgHc8J9hmbxdkkaocefhikasce4cbasceG9R7amfhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhHavawcdtfaoBdbcehsawcefhwalhOaohmxekdnaocpe0mbaxcefgHavawaDaocsGfRbbgocl49RcsGcdtfydbaocz6gzEhravawao9RcsGcdtfydbaHazfgAaocsGgHEhoaHThCdndnadcd9hmbabaPcetfgHax87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHaxBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfaxBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgOaxBdlaOarBdbavawazfgwcsGcdtfaoBdbalcefcsGhOawaCfhwaxhzaAaCfhxxekaxcbaiRbbgOEgzaoc;:eSgHfhraOcsGhCaOcl4hAdndnaOcs0mbarcefhoxekarhoavawaA9RcsGcdtfydbhrkdndnaCmbaocefhxxekaohxavawaO9RcsGcdtfydbhokdndnaHTmbaicefhHxekaicdfhHai8SbegscFeGhzdnascu9kmbaicofhXazcFbGhzcrhidninaH8SbbgscFbGaitazVhzascu9kmeaHcefhHaicrfgic8J9hmbkaXhHxekaHcefhHkazce4cbazceG9R7amfgmhzkdndnaAcsSmbaHhsxekaHcefhsaH8SbbgicFeGhrdnaicu9kmbaHcvfhXarcFbGhrcrhidninas8SbbgHcFbGaitarVhraHcu9kmeascefhsaicrfgic8J9hmbkaXhsxekascefhskarce4cbarceG9R7amfgmhrkdndnaCcsSmbashixekascefhias8SbbgocFeGhHdnaocu9kmbascvfhXaHcFbGhHcrhodninai8SbbgscFbGaotaHVhHascu9kmeaicefhiaocrfgoc8J9hmbkaXhixekaicefhikaHce4cbaHceG9R7amfgmhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfazBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgXazBdlaXarBdbavawaOcz6aAcsSVfgwcsGcdtfaoBdbawaCTaCcsSVfhwalcefcsGhOkaqcefhqavc;abfaOcitfgOarBdlaOaoBdbavc;abfalasfcsGcitfgraoBdlarazBdbawcsGhwalaHfcsGhlaPcifgPae6mbkkcbc99aiaDSEhokavc;aef8Kjjjjbaok:flevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:wPliuo97eue978Jjjjjbca9Rhiaec98Ghldndnadcl9hmbdnalTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalaeSmeaipxbbbbbbbbbbbbbbbbgqpklbaiabalcdtfgdaeciGglcdtgv;8qbbdnalTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDaqp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkadaiav;8qbbskdnalTmbcbhvabhdinadczfgxaxpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;Meawaqawamp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oaoarpmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgval6mbkkalaeSmbaiaeciGgvcitgdfcbcaad9R;8kbaiabalcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;Meawaqawamp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oaoarpmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaDakp;Mearp;Keamp9oaqakp;Mearp;Keczp:Rep9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalaeSmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaDakp;Mearp;Keamp9oaqakp;Mearp;Keczp:Rep9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbheabhdinadadpbbbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbadczfhdaeclfgeav6mbkkdnavalSmbaialciGgecdtgdVcbc;abad9R;8kbaiabavcdtfgvad;8qbbdnaeTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepklbkavaiad;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz:Dbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(t)?o(e):o(i),r,a=WebAssembly.instantiate(s,{}).then(function(p){r=p.instance,r.exports.__wasm_call_ctors()});function o(p){for(var v=new Uint8Array(p.length),_=0;_<p.length;++_){var x=p.charCodeAt(_);v[_]=x>96?x-97:x>64?x-39:x+4}for(var w=0,_=0;_<p.length;++_)v[w++]=v[_]<60?n[v[_]]:(v[_]-60)*64+v[++_];return v.buffer.slice(0,w)}function c(p,v,_,x,w,E,R){var I=p.exports.sbrk,S=x+3&-4,y=I(S*w),P=I(E.length),D=new Uint8Array(p.exports.memory.buffer);D.set(E,P);var F=v(y,x,w,P,E.length);if(F==0&&R&&R(y,S,w),_.set(D.subarray(y,y+x*w)),I(y-I(0)),F!=0)throw new Error("Malformed buffer data: "+F)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},d=[],u=0;function f(p){var v={object:new Worker(p),pending:0,requests:{}};return v.object.onmessage=function(_){var x=_.data;v.pending-=x.count,v.requests[x.id][x.action](x.value),delete v.requests[x.id]},v}function m(p){for(var v="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(s)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+g.name+";"+c.toString()+g.toString(),_=new Blob([v],{type:"text/javascript"}),x=URL.createObjectURL(_),w=d.length;w<p;++w)d[w]=f(x);for(var w=p;w<d.length;++w)d[w].object.postMessage({});d.length=p,URL.revokeObjectURL(x)}function b(p,v,_,x,w){for(var E=d[0],R=1;R<d.length;++R)d[R].pending<E.pending&&(E=d[R]);return new Promise(function(I,S){var y=new Uint8Array(_),P=++u;E.pending+=p,E.requests[P]={resolve:I,reject:S},E.object.postMessage({id:P,count:p,size:v,source:y,mode:x,filter:w},[y.buffer])})}function g(p){var v=p.data;if(!v.id)return self.close();self.ready.then(function(_){try{var x=new Uint8Array(v.count*v.size);c(_,_.exports[v.mode],x,v.count,v.size,v.source,_.exports[v.filter]),self.postMessage({id:v.id,count:v.count,action:"resolve",value:x},[x.buffer])}catch(w){self.postMessage({id:v.id,count:v.count,action:"reject",value:w})}})}return{ready:a,supported:!0,useWorkers:function(p){m(p)},decodeVertexBuffer:function(p,v,_,x,w){c(r,r.exports.meshopt_decodeVertexBuffer,p,v,_,x,r.exports[l[w]])},decodeIndexBuffer:function(p,v,_,x){c(r,r.exports.meshopt_decodeIndexBuffer,p,v,_,x)},decodeIndexSequence:function(p,v,_,x){c(r,r.exports.meshopt_decodeIndexSequence,p,v,_,x)},decodeGltfBuffer:function(p,v,_,x,w,E){c(r,r.exports[h[w]],p,v,_,x,r.exports[l[E]])},decodeGltfBufferAsync:function(p,v,_,x,w){return d.length>0?b(p,v,_,h[x],l[w]):a.then(function(){var E=new Uint8Array(p*v);return c(r,r.exports[h[x]],E,p,v,_,r.exports[l[w]]),E})}}})();function A0(i){let e=new Map,t=new Map,n=i.clone();return R0(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function R0(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)R0(i.children[n],e.children[n],t)}var dM="assets/",C0=["Knight","Barbarian","Mage","Rogue_Hooded","Skeleton_Minion","Skeleton_Warrior","Skeleton_Rogue","Skeleton_Mage"],Dh=class{constructor(){this.loader=new kh,this.loader.setMeshoptDecoder(E0),this.chars={},this.clips={},this.props=null,this.propCache=new Map}async load(e){let t=["anims","props",...C0],n=0,s=()=>e?.(++n/t.length),r=l=>this.loader.loadAsync(dM+l+".glb").then(h=>(s(),h)),[a,o,...c]=await Promise.all(t.map(r));for(let l of a.animations)this.clips[l.name]=l;C0.forEach((l,h)=>{this.chars[l]=c[h],P0(c[h].scene,!0)}),this.props=o.scene,P0(this.props,!1)}character(e){let t=A0(this.chars[e].scene);return t.traverse(n=>{n.isMesh&&(n.material=n.material.clone(),n.castShadow=!0,n.receiveShadow=!0,n.frustumCulled=!1)}),t}prop(e){let t=this.props.getObjectByName(e);if(!t)throw new Error("missing prop "+e);let n=t.clone(!0);return n.position.set(0,0,0),n.rotation.set(0,0,0),n.scale.set(1,1,1),n}propParts(e){if(this.propCache.has(e))return this.propCache.get(e);let t=this.prop(e);t.updateMatrixWorld(!0);let n=[];return t.traverse(s=>{s.isMesh&&n.push({geometry:s.geometry,material:s.material,matrix:s.matrixWorld.clone()})}),this.propCache.set(e,n),n}};function P0(i,e){i.traverse(t=>{if(!t.isMesh)return;t.castShadow=!0,t.receiveShadow=!0;let n=t.material;n&&n.isMeshStandardMaterial&&(n.roughness=e?.72:.86,n.metalness=0,n.map&&(n.map.anisotropy=4,n.map.colorSpace=It),n.name==="Glow"&&(n.emissive=new re("#7fe8ff"),n.emissiveIntensity=4))})}Ut();var ya=Math.PI*2,st=(i,e)=>i+Math.random()*(e-i),uM=new _s(.85,1,64),I0=new Bn(2,2),fM=new Mi(1,24),k0=(()=>{let i=new Bn(1,1);return i.translate(0,.5,0),i})();var pM=4,mM=28,gM=(()=>{let i=new Ks(.28,1.8,5);return i.translate(0,.9,0),i})();function bM(){let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.18,"rgba(255,255,255,.75)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),e.globalCompositeOperation="lighter",e.translate(64,64);for(let s=0;s<4;s++){e.rotate(Math.PI/4+s%2*.12);let r=e.createLinearGradient(-64,0,64,0);r.addColorStop(0,"rgba(255,255,255,0)"),r.addColorStop(.5,"rgba(255,255,255,.9)"),r.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=r,e.fillRect(-64,s%2?-1.5:-3,128,s%2?3:6)}let n=new po(i);return n.colorSpace=It,n}var xM=`varying vec2 vUv; uniform vec3 uColor; uniform float uA, uT;
  void main(){
    vec2 p = vUv * 2.0 - 1.0; float r = length(p); float a = atan(p.y, p.x);
    float ring = smoothstep(0.03, 0.0, abs(r - 0.92)) + smoothstep(0.02, 0.0, abs(r - 0.78)) * 0.8 + smoothstep(0.015, 0.0, abs(r - 0.42)) * 0.6;
    float ticks = step(0.8, r) * step(r, 0.9) * step(0.55, fract((a + uT * 0.8) * 24.0 / 6.2832)) * 0.7;
    float glyph = step(0.46, r) * step(r, 0.74) * step(0.82, fract((a - uT * 1.2) * 8.0 / 6.2832)) * smoothstep(0.02, 0.0, abs(fract(r * 9.0) - 0.5) - 0.3) * 0.6;
    float glow = smoothstep(1.0, 0.0, r) * 0.18;
    float v = (ring + ticks + glyph + glow) * step(r, 1.0) * uA;
    if (v < 0.01) discard;
    gl_FragColor = vec4(uColor * (1.4 + ring), v);
  }`,vM=`
  attribute vec4 iColor; attribute vec3 iData; // size, rotation, softness
  varying vec4 vColor; varying vec2 vUv; varying float vSoft;
  void main(){
    vColor = iColor; vUv = uv; vSoft = iData.z;
    vec4 mv = modelViewMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
    float c = cos(iData.y), s = sin(iData.y);
    vec2 p = mat2(c, -s, s, c) * position.xy * iData.x;
    mv.xy += p;
    gl_Position = projectionMatrix * mv;
  }`,_M=`
  varying vec4 vColor; varying vec2 vUv; varying float vSoft;
  void main(){
    float d = length(vUv - 0.5) * 2.0;
    float a = smoothstep(1.0, vSoft, d);
    if (a <= 0.001) discard;
    gl_FragColor = vec4(vColor.rgb, vColor.a * a);
  }`,Nh=class{constructor(e,t,n){this.max=t;let s=new Bn(1,1);this.color=new hi(new Float32Array(t*4),4),this.data=new hi(new Float32Array(t*3),3),this.color.setUsage(zo),this.data.setUsage(zo),s.setAttribute("iColor",this.color),s.setAttribute("iData",this.data);let r=new it({name:"particles",vertexShader:vM,fragmentShader:_M,transparent:!0,depthWrite:!1,blending:n});this.mesh=new $s(s,r,t),this.mesh.instanceMatrix.setUsage(zo),this.mesh.frustumCulled=!1,this.mesh.renderOrder=n===jt?20:10,e.add(this.mesh),this.parts=[],this.m=new Ce}add(e){this.parts.length>=this.max&&this.parts.shift(),this.parts.push(e)}update(e){let t=this.parts,n=0,s=this.m,r=this.color.array,a=this.data.array;for(let o=t.length-1;o>=0;o--){let c=t[o];if(c.life-=e,c.life<=0){t.splice(o,1);continue}let l=Math.exp(-c.drag*e);c.vx*=l,c.vy*=l,c.vz*=l,c.vy+=c.grav*e,c.x+=c.vx*e,c.y+=c.vy*e,c.z+=c.vz*e,c.floor&&c.y<.05&&(c.y=.05,c.vy*=-.3,c.vx*=.6,c.vz*=.6),c.rot+=c.spin*e}for(let o of t){let c=o.life/o.max,l=o.size*(o.grow?1+(1-c)*o.grow:1)*(o.shrink?Math.max(.05,c):1),h=o.alpha*(o.fadeIn?Math.min(1,(1-c)*6):1)*Math.min(1,c*2.2);s.makeTranslation(o.x,o.y,o.z),this.mesh.setMatrixAt(n,s),r[n*4]=o.r,r[n*4+1]=o.g,r[n*4+2]=o.b,r[n*4+3]=h,a[n*3]=l,a[n*3+1]=o.rot,a[n*3+2]=o.soft,n++}this.mesh.count=n,this.mesh.instanceMatrix.needsUpdate=!0,this.color.needsUpdate=!0,this.data.needsUpdate=!0}},yM="varying vec2 vP; uniform float uExtent; void main(){ vP = position.xy * uExtent; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",MM=`
  varying vec2 vP;
  uniform int uType; uniform float uR, uR2, uAng, uLen, uW, uFill, uAlpha, uTime; uniform vec3 uColor, uEdge;
  float edgeBand(float d, float w){ return smoothstep(w, 0.0, abs(d)); }
  void main(){
    // local frame: +x = facing direction, y = side
    vec2 p = vP; float r = length(p);
    float inside = 0.0, sd = 0.0, prog = 0.0;
    if (uType == 0) { sd = r - uR; inside = step(r, uR); prog = r / uR; }
    else if (uType == 1) { float a = abs(atan(p.y, p.x)); sd = max(r - uR, (a - uAng * 0.5) * r); inside = step(sd, 0.0); prog = r / uR; }
    else if (uType == 2) { float sx = max(-p.x, p.x - uLen); float sy = abs(p.y) - uW * 0.5; sd = max(sx, sy); inside = step(sd, 0.0); prog = p.x / uLen; }
    else { sd = max(uR - r, r - uR2); inside = step(sd, 0.0); prog = (r - uR) / (uR2 - uR); }
    float edge = edgeBand(sd, 0.12) * 1.3;
    float filled = inside * step(prog, uFill);
    float front = inside * smoothstep(0.06, 0.0, abs(prog - uFill)) * step(0.02, uFill);
    float grid = inside * (0.18 + 0.05 * sin(r * 6.0 - uTime * 4.0));
    vec3 col = uColor * (grid + filled * 0.55) + uEdge * (edge + front * 1.2);
    float a = (inside * (0.22 + filled * 0.45) + edge + front) * uAlpha;
    if (a < 0.005) discard;
    gl_FragColor = vec4(col, a);
  }`,zh=class{constructor(e){this.engine=e,this.scene=e.scene,this.add=new Nh(this.scene,4e3,jt),this.norm=new Nh(this.scene,1500,Xi),this.items=[],this.decals=new Map,this.emitters=[],this.lights=[];for(let t=0;t<pM;t++){let n=new Hn("#ffffff",0,10,1.8);this.scene.add(n),this.lights.push({l:n,life:0,max:1,i:0})}this.t=0,this.arcGeo=new Map,this.keepers=new Set,this.impacts=0,this.star=bM(),this.shardMat=new Xt({color:"#bfe8ff",emissive:"#4aa8ff",emissiveIntensity:1.4,roughness:.2,metalness:.1,transparent:!0,opacity:.85}),this.keepers.add(this.shardMat)}rune(e,t,n,s=1.6,r=.6){let a=new it({name:"rune",uniforms:{uColor:{value:new re(n)},uA:{value:0},uT:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:xM,transparent:!0,blending:jt,depthWrite:!1}),o=new Ue(I0,a);return o.rotation.x=-Math.PI/2,o.position.set(e,.09,t),o.renderOrder=6,this.timed(o,r,(c,l)=>{let h=1-l;c.scale.setScalar(s*(.6+.4*Math.min(1,h*4))),a.uniforms.uA.value=Math.min(1,h*6)*Math.min(1,l*2.5),a.uniforms.uT.value=this.t*2})}impact(e,t,n,s="#fff0c0",r=1.2,a=.16){if(this.impacts>=mM)return null;this.impacts++;let o=new ra({map:this.star,color:new re(s).multiplyScalar(2),transparent:!0,blending:jt,depthWrite:!1,depthTest:!1}),c=new co(o);return c.position.set(e,t,n),c.material.rotation=st(0,ya),c.userData.done=()=>this.impacts--,this.timed(c,a,(l,h)=>{let d=1-h;l.scale.setScalar(r*(.5+d*1.1)),o.opacity=h})}shards(e,t,n=3,s=9,r=1.1){let a=new Et;for(let o=0;o<s;o++){let c=o/s*ya+st(-.2,.2),l=n*st(.35,1),h=new Ue(gM,this.shardMat);h.position.set(Math.cos(c)*l,0,Math.sin(c)*l),h.rotation.set(st(-.35,.35),st(0,ya),st(-.35,.35)),h.userData.s=st(.6,1.3),a.add(h)}return a.position.set(e,0,t),this.timed(a,r,(o,c)=>{let l=1-c,h=l<.15?l/.15:c<.3?c/.3:1;for(let d of o.children)d.scale.set(d.userData.s,d.userData.s*h,d.userData.s)})}scorch(e,t,n=2.5,s=3){let r=new vt({color:"#0a0604",transparent:!0,opacity:.55,depthWrite:!1}),a=new Ue(fM,r);return a.rotation.x=-Math.PI/2,a.position.set(e,.055,t),a.scale.setScalar(n),a.renderOrder=1,this.timed(a,s,(o,c)=>{r.opacity=.55*Math.min(1,c*3)})}keep(e){e.traverse?.(t=>{t.material&&this.keepers.add(t.material)})}spark(e,t,n,s={}){let r=s.n??10,a=new re(s.color??"#ffcf7a"),o=s.normal?this.norm:this.add;for(let c=0;c<r;c++){let l=(s.dir??st(0,ya))+(s.spread!==void 0?st(-s.spread,s.spread):0),h=(s.speed??6)*st(.35,1.1),d=s.up??st(-.2,1)*h*.6,u=(s.life??.5)*st(.6,1.3),f=s.bright??1.6;o.add({x:e+st(-1,1)*(s.jitter||0),y:t,z:n+st(-1,1)*(s.jitter||0),vx:Math.cos(l)*h,vy:d,vz:Math.sin(l)*h,life:u,max:u,size:(s.size??.2)*st(.6,1.3),alpha:s.alpha??1,r:a.r*f,g:a.g*f,b:a.b*f,drag:s.drag??3,grav:s.grav??-4,rot:st(0,ya),spin:st(-3,3),soft:s.soft??0,grow:s.grow||0,shrink:s.shrink??!0,floor:s.floor,fadeIn:s.fadeIn})}}smoke(e,t,n,s={}){this.spark(e,t,n,{n:s.n??8,color:s.color??"#2a2630",normal:!0,bright:1,speed:s.speed??1.5,up:s.up??1,life:s.life??1.4,size:s.size??1.4,grow:s.grow??1.5,shrink:!1,drag:1.5,grav:.3,soft:.2,alpha:s.alpha??.5,jitter:s.jitter??.4,fadeIn:!0})}flash(e,t,n,s,r=20,a=10,o=.18){let c=this.lights[0];for(let l of this.lights)l.life/l.max<c.life/c.max&&(c=l);c.l.position.set(e,t,n),c.l.color.set(s),c.l.distance=a,c.life=o,c.max=o,c.i=r,c.l.intensity=r}timed(e,t,n){return this.scene.add(e),this.items.push({mesh:e,life:t,max:t,update:n}),e}ring(e,t,n,s,r=.5,a=.25,o=.06){let c=new vt({color:new re(s).multiplyScalar(2.2),transparent:!0,blending:jt,depthWrite:!1,side:Zt}),l=new Ue(uM,c);return l.rotation.x=-Math.PI/2,l.position.set(e,o,t),this.timed(l,r,(h,d)=>{let u=1-d,f=n*(.25+.75*(1-Math.pow(1-u,3)));h.scale.set(f,f,1),h.material.opacity=d;let m=h.geometry;h.userData.w||(h.userData.w=a)})}arc(e,t,n,s,r,a,o,c={}){let l=`${a.toFixed(2)}`,h=this.arcGeo.get(l);if(!h){h=new _s(.62,1,48,1,-a/2,a);let b=h.attributes.position,g=h.attributes.uv;for(let p=0;p<b.count;p++){let v=Math.atan2(b.getY(p),b.getX(p));g.setXY(p,(v+a/2)/a,Math.hypot(b.getX(p),b.getY(p)))}this.arcGeo.set(l,h)}let d=new re(o),u=new it({name:"arc",uniforms:{uT:{value:0},uColor:{value:d},uRev:{value:c.reverse?1:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`varying vec2 vUv; uniform float uT, uRev; uniform vec3 uColor;
        void main(){
          float u = mix(vUv.x, 1.0 - vUv.x, uRev);
          float head = uT * 1.4;
          float trail = smoothstep(head - 0.9, head, u) * step(u, head);
          float radial = smoothstep(0.62, 0.9, vUv.y) * smoothstep(1.0, 0.94, vUv.y);
          float core = smoothstep(0.88, 0.97, vUv.y) * smoothstep(1.0, 0.975, vUv.y);
          float head2 = smoothstep(head - 0.35, head, u);
          float a = trail * (radial * (0.25 + head2 * 0.6) + core * (0.5 + head2)) * (1.0 - smoothstep(0.55, 1.0, uT));
          if (a < 0.01) discard;
          gl_FragColor = vec4(uColor * (1.6 + core * 2.5), a);
        }`,transparent:!0,blending:jt,depthWrite:!1,side:Zt}),f=new Ue(h,u);f.rotation.order="YXZ",f.rotation.x=-Math.PI/2+(c.tilt??.18),f.rotation.y=-s,f.position.set(e,t,n),f.scale.set(r,r,1);let m=c.life??.28;return this.timed(f,m,(b,g)=>{b.material.uniforms.uT.value=1-g})}beam(e,t,n,s=6,r=.6,a=1,o={}){let c=new it({name:"beam",uniforms:{uColor:{value:new re(n)},uA:{value:1},uTime:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`varying vec2 vUv; uniform vec3 uColor; uniform float uA, uTime;
        void main(){ float x = abs(vUv.x - 0.5) * 2.0; float core = pow(1.0 - x, 3.0); float fade = pow(1.0 - vUv.y, 1.6);
          float flick = 0.85 + 0.15 * sin(uTime * 12.0 + vUv.y * 20.0);
          float a = core * fade * uA * flick; if (a < 0.01) discard; gl_FragColor = vec4(uColor * (1.2 + core * 2.0), a); }`,transparent:!0,blending:jt,depthWrite:!1,side:Zt}),l=new Et,h=new Ue(k0,c),d=new Ue(k0,c);return h.scale.set(r,s,1),d.scale.set(r,s,1),d.rotation.y=Math.PI/2,l.add(h,d),l.position.set(e,0,t),o.persistent?(this.scene.add(l),l):this.timed(l,a,(u,f)=>{c.uniforms.uA.value=f,c.uniforms.uTime.value=this.t})}bolt(e,t,n="#bfe4ff",s=14){let r=[],a=e,o=t;for(let d=s;d>=0;d-=1.1)r.push(new C(a,d,o)),a+=st(-.6,.6),o+=st(-.6,.6);r.push(new C(e,0,t));let c=new _t().setFromPoints(r),l=new $i({color:new re(n).multiplyScalar(4),transparent:!0,blending:jt}),h=new yi(c,l);h.userData.ownGeo=!0,this.timed(h,.25,(d,u)=>{d.material.opacity=u}),this.beam(e,t,n,s,1.2,.3)}zap(e,t,n,s,r,a,o="#bfe4ff"){let c=[],l=Math.max(4,Math.round(Math.hypot(s-e,a-n)/.7));for(let f=0;f<=l;f++){let m=f/l,b=f===0||f===l?0:.45;c.push(new C(e+(s-e)*m+st(-b,b),t+(r-t)*m+st(-b,b)*.6,n+(a-n)*m+st(-b,b)))}let h=new _t().setFromPoints(c),d=new $i({color:new re(o).multiplyScalar(4),transparent:!0,blending:jt}),u=new yi(h,d);u.userData.ownGeo=!0,this.timed(u,.3,(f,m)=>{f.material.opacity=m})}decal(e,t){let n=this.decals.get(e.id),s=e.shape,r=s.type==="rect"?Math.max(s.len,s.w)+1:(s.r2||s.r)+.5;if(!n){let h={circle:0,cone:1,rect:2,donut:3}[s.type],d=e.team!=="player",u=e.fx==="heal"||e.fx==="spring",f=e.fx==="trap",m=e.fx==="holyburst",b=e.fx==="poison",g=new it({name:"decal",uniforms:{uType:{value:h},uR:{value:s.r||0},uR2:{value:s.r2||0},uAng:{value:s.ang||0},uLen:{value:s.len||0},uW:{value:s.w||0},uFill:{value:0},uAlpha:{value:0},uTime:{value:0},uExtent:{value:r},uColor:{value:new re(e.lethal?"#a23cff":d?"#ff3b2a":e.fx==="frost"?"#6cc8ff":u?"#3fe08a":f?"#8fd05a":m?"#ffe7a0":b?"#7ac03a":"#ffb347")},uEdge:{value:new re(e.lethal?"#f0c0ff":d?"#ff8a5c":e.fx==="frost"?"#d8f2ff":u?"#c8ffd8":f?"#e0ffb0":m?"#fff8e0":b?"#d0ff90":"#ffe0a0")}},vertexShader:yM,fragmentShader:MM,transparent:!0,depthWrite:!1,blending:jt});n=new Ue(I0,g),n.rotation.order="YXZ",n.renderOrder=5,this.scene.add(n),this.decals.set(e.id,n)}let a=n.material.uniforms;n.position.set(e.x,.07+e.id%7*.002,e.z),n.rotation.set(-Math.PI/2,-e.dir,0),n.scale.set(r,r,1);let o=e.warn||.001,c=e.warn>0?Math.min(1,e.t/o):1;a.uFill.value=c;let l=e.team==="player"&&e.dur>.5;return a.uAlpha.value=l?.6:Math.min(1,e.t*6)*(e.t>o?Math.max(0,1-(e.t-o)*6):1),s.type==="rect"&&s.w<1&&(a.uAlpha.value*=.4),a.uTime.value=t,n.userData.seen=!0,n}sweepDecals(){for(let[e,t]of this.decals)t.userData.seen?t.userData.seen=!1:(this.scene.remove(t),this.keepers.has(t.material)||t.material.dispose(),this.decals.delete(e))}emitter(e){return this.emitters.push(e),e}fire(e,t,n,s=1,r="#ff8a2a"){let a=new re(r);this.add.add({x:e+st(-.06,.06)*s,y:t,z:n+st(-.06,.06)*s,vx:st(-.2,.2),vy:st(1.2,2.2)*s,vz:st(-.2,.2),life:st(.35,.6),max:.6,size:st(.25,.45)*s,alpha:.9,r:a.r*2.4,g:a.g*2.2,b:a.b*2,drag:2,grav:.5,rot:st(0,ya),spin:st(-2,2),soft:.1,shrink:!0}),Math.random()<.08&&this.add.add({x:e,y:t+.3,z:n,vx:st(-.5,.5),vy:st(1.5,3),vz:st(-.5,.5),life:1.2,max:1.2,size:.05,alpha:1,r:3,g:1.6,b:.6,drag:1,grav:-.5,rot:0,spin:0,soft:0,shrink:!0})}clearTransient(){for(let e of this.items)e.life=0;for(let e of this.lights)e.life=0;this.add.parts.length=0,this.norm.parts.length=0,this.update(0)}update(e){this.t+=e;for(let t of this.emitters)if(!t.dead)for(t.acc=(t.acc||0)+e*(t.rate||30);t.acc>=1;)t.acc-=1,t.emit(this);this.emitters=this.emitters.filter(t=>!t.dead);for(let t=this.items.length-1;t>=0;t--){let n=this.items[t];if(n.life-=e,n.life<=0){this.scene.remove(n.mesh),n.mesh.userData.done?.(),n.mesh.traverse?.(s=>{s.material&&!this.keepers.has(s.material)&&s.material.dispose?.(),s.userData.ownGeo&&s.geometry.dispose()}),this.items.splice(t,1);continue}n.update?.(n.mesh,n.life/n.max)}for(let t of this.lights){if(t.life<=0){t.l.intensity=0;continue}t.life-=e,t.l.intensity=t.i*Math.max(0,t.life/t.max)}this.add.update(e),this.norm.update(e)}};Ut();var L0=["        .........         ","        .........         ","        .........         ","        .........         ","        .........         ","        .........         ","        .........         ","        .........         ","            =             ","            =             ","......   .......          ","......   .......          ","......===.......          ","......   .......          ","......   .......          ","......   .......          ","  =                       ","  =      ,,,,,,,,,        ","......   ,,,,,,,,,        ","......   ,,,,,,,,,        ","......===,,,,,,,,,        ","......   ,,,,,,,,,        ","......   ,,,,,,,,,        ","         ,,,,,,,,,        ","         ,,,,,,,,,        "],SM=[" ............             "," ............             "," ............             "," ............             "," ............             "," ............             "," ............             "," ............             ","    =                     ","    =                     ","  ......                  ","  ......                  ","  ......    ...........   ","  ......    ...........   ","  ......====...........   ","  ......    ...........   ","  ......    ...........   ","  ......         =        ","                 =        ","              ........    ","              ........    ","              ........    ","              ........    ","              ........    ","              ........    "],D0=L0.map(i=>[...i].reverse().join(""));for(let i=0;i<8;i++)D0[i]=" ".repeat(7)+".".repeat(13)+" ".repeat(6);var TM=26,ws={1:0,2:30,3:60},Af=L0.map((i,e)=>i.padEnd(30)+SM[e].padEnd(30)+D0[e]),ns=Af[0].length,Xo=Af.length,jo=Af.map(i=>i.padEnd(ns," ").split("")),Oh=i=>i>=ws[3]?3:i>=ws[2]?2:1,wM=[{id:"yard",name:"\uC655\uAC00 \uBB18\uC5ED",x0:9,z0:17,x1:17,z1:24,seals:[],outdoor:!0,waves:[[["minion",11,19],["minion",13,18],["minion",15,19],["minion",12,21],["minion",16,21]],[["archer",10,18],["archer",16,18],["minion",13,20],["minion",11,22],["minion",15,22],["warrior",13,18]]]},{id:"r1",name:"\uB9DD\uC790\uC758 \uD68C\uB791",x0:0,z0:18,x1:5,z1:22,seals:[[6,20],[2,17]],waves:[[["minion",1,19],["minion",3,19],["minion",1,21],["warrior",3,21],["warrior",4,19],["minion",4,22]],[["archer",1,18],["archer",5,18],["mage",3,18],["minion",2,20],["minion",4,20]]]},{id:"r2",name:"\uBF08\uC758 \uC608\uBC30\uB2F9",x0:0,z0:10,x1:5,z1:15,seals:[[2,16],[6,12]],waves:[[["warrior",1,11],["warrior",4,11],["mage",2,10],["minion",1,13],["minion",4,13],["archer",3,10]],[["warrior",2,12,!0],["minion",0,14],["minion",5,14],["archer",0,10],["archer",5,10]]]},{id:"r3",name:"\uC655\uC758 \uBCF4\uBB3C\uACE0",x0:9,z0:10,x1:15,z1:15,seals:[[8,12],[12,9]],waves:[[["mage",10,11],["mage",14,11],["warrior",12,12],["minion",10,14],["minion",14,14],["minion",12,14]],[["archer",9,10],["archer",15,10],["warrior",11,11],["warrior",13,11],["mage",12,10,!0]]],chest:[12,10]},{id:"boss",name:"\uB300\uC0AC\uC81C\uC758 \uC81C\uB2E8",x0:8,z0:0,x1:16,z1:7,seals:[[12,8]],boss:[12,2],bossKind:"priest",waves:[]}],EM=[{id:"entry",name:"\uCE68\uC218\uB41C \uC785\uAD6C",x0:14,z0:19,x1:21,z1:24,seals:[[17,18]],waves:[[["minion",15,20],["minion",20,20],["minion",17,19],["archer",15,19],["archer",20,19]],[["warrior",16,20],["warrior",19,20],["minion",15,22],["minion",20,22],["mage",17,19]]]},{id:"hall",name:"\uBB3C\uC5D0 \uC7A0\uAE34 \uD68C\uB791",x0:12,z0:12,x1:22,z1:16,seals:[[17,17],[11,14]],waves:[[["archer",13,12],["archer",21,12],["warrior",15,14],["warrior",19,14],["minion",14,16],["minion",20,16],["mage",17,12]],[["warrior",17,13,!0],["archer",12,12],["archer",22,12],["minion",13,15],["minion",21,15],["minion",17,16]]]},{id:"vault",name:"\uAE08\uD654\uC758 \uC800\uC7A5\uACE0",x0:2,z0:10,x1:7,z1:17,seals:[[8,14],[4,9]],waves:[[["mage",3,11],["mage",6,11],["warrior",4,13],["archer",2,10],["archer",7,10],["minion",3,16],["minion",6,16]],[["priestShade",4,12],["minion",2,15],["minion",7,15]]],chest:[4,10]},{id:"strong",name:"\uBD09\uC778\uB41C \uAE08\uACE0",x0:1,z0:0,x1:12,z1:7,seals:[[4,8]],boss:[7,2],bossKind:"warden",waves:[]}],me=i=>TM-1-i,AM=[{id:"court",name:"\uBD88\uD0C0\uB294 \uC548\uB730",x0:me(17),z0:17,x1:me(9),z1:24,seals:[],outdoor:!0,waves:[[["minion",me(11),19],["minion",me(13),18],["minion",me(15),19],["warrior",me(12),21],["warrior",me(16),21],["archer",me(10),18]],[["archer",me(10),18],["archer",me(16),18],["mage",me(13),18],["warrior",me(11),22,!0],["minion",me(15),22],["minion",me(13),21]]]},{id:"gate",name:"\uBD88\uAE38\uC758 \uC131\uBB38",x0:me(5),z0:18,x1:me(0),z1:22,seals:[[me(6),20],[me(2),17]],waves:[[["warrior",me(1),19],["warrior",me(4),19],["mage",me(3),18],["minion",me(1),21],["minion",me(4),21],["archer",me(5),18]],[["warrior",me(3),20,!0],["archer",me(1),18],["archer",me(5),18],["mage",me(2),22],["mage",me(4),22]]]},{id:"hall",name:"\uBD88\uAF43\uC758 \uD68C\uB2F9",x0:me(5),z0:10,x1:me(0),z1:15,seals:[[me(2),16],[me(6),12]],waves:[[["mage",me(1),11],["mage",me(4),11],["warrior",me(2),12],["warrior",me(4),13],["archer",me(0),10],["archer",me(5),10]],[["priestShade",me(2),11],["minion",me(0),14],["minion",me(5),14]]]},{id:"armory",name:"\uC655\uC2E4 \uBB34\uAE30\uACE0",x0:me(15),z0:10,x1:me(9),z1:15,seals:[[me(8),12],[me(12),9]],waves:[[["warrior",me(10),11],["warrior",me(14),11],["mage",me(12),10,!0],["archer",me(9),10],["archer",me(15),10],["minion",me(12),14]],[["wardenShade",me(12),11],["archer",me(9),10],["archer",me(15),10]]],chest:[me(12),10]},{id:"throne",name:"\uBD88\uD0C0\uB294 \uC625\uC88C",x0:7,z0:0,x1:19,z1:7,seals:[[me(12),8]],boss:[me(12),2],bossKind:"king",waves:[]}];function Ef(i,e,t){let n=([s,r,...a])=>[s+e,r,...a];return{...i,chapter:t,x0:i.x0+e,x1:i.x1+e,seals:i.seals.map(n),waves:i.waves.map(s=>s.map(([r,a,o,c])=>[r,a+e,o,c])),boss:i.boss&&n(i.boss),chest:i.chest&&n(i.chest)}}var yt=[...wM.map(i=>Ef(i,ws[1],1)),...EM.map(i=>Ef(i,ws[2],2)),...AM.map(i=>Ef(i,ws[3],3))],ui=3,en={1:{name:"\uAE68\uC5B4\uB09C \uBB18\uC5ED",start:{x:52,z:92},intro:"\uBB18\uC5ED\uC758 \uC885\uC774 \uC2A4\uC2A4\uB85C \uC6B8\uB9B0\uB2E4. \uBB34\uB364\uC744 \uAE68\uC6B0\uB294 \uC790\uB97C \uCC3E\uC544 \uC9C0\uD558\uBB18\uC9C0\uB85C \uB0B4\uB824\uAC00\uB77C.",outro:'\uC4F0\uB7EC\uC9C0\uBA70 \uBAA8\uB974\uAC04\uC740 \uC6C3\uC5C8\uB2E4. "\uC655\uAD00\uC758 \uC870\uAC01\uC740 \uC774\uBBF8 \uBCF4\uBB3C\uACE0\uC5D0 \uBAA8\uC600\uB2E4." \uBB3C\uC5D0 \uC7A0\uAE34 \uBCF4\uBB3C\uACE0\uB85C \uAC00\uB294 \uAE38\uC774 \uC5F4\uB838\uB2E4.'},2:{name:"\uAC00\uB77C\uC549\uC740 \uBCF4\uBB3C\uACE0",start:{x:(ws[2]+17.5)*4,z:22.5*4},intro:"\uC655\uAD6D\uC758 \uAE08\uACE0\uB294 \uBC31 \uB144 \uB3D9\uC548 \uAC80\uC740 \uBB3C \uC544\uB798 \uC7A0\uACA8 \uC788\uC5C8\uB2E4. \uADF8 \uAE4A\uC740 \uACF3\uC5D0\uC11C \uBB34\uC5B8\uAC00\uAC00 \uC655\uAD00\uC758 \uC870\uAC01\uC744 \uC9C0\uD0A4\uACE0 \uC788\uB2E4.",outro:"\uC218\uBB38\uC7A5\uC774 \uBB34\uB108\uC9C0\uC790 \uAE08\uACE0 \uAC00\uC7A5 \uAE4A\uC740 \uACF3\uC758 \uBB38\uC774 \uC5F4\uB838\uB2E4. \uBD88\uD2F0\uAC00 \uD769\uB0A0\uB9AC\uB294 \uACC4\uB2E8 \uB05D\uC5D0\uC11C \uC61B \uC655\uC131\uC774 \uBD88\uD0C0\uACE0 \uC788\uB2E4."},3:{name:"\uBD88\uD0C0\uB294 \uC625\uC88C",start:{x:(ws[3]+me(13))*4,z:92},intro:"\uC655\uC131\uC740 \uBC31 \uB144\uC9F8 \uAEBC\uC9C0\uC9C0 \uC54A\uB294 \uBD88\uAE38 \uC18D\uC5D0 \uC788\uB2E4. \uC625\uC88C\uC5D0 \uC549\uC740 \uC790\uAC00 \uC800\uC8FC\uBC1B\uC740 \uC655\uAD00\uC758 \uC8FC\uC778\uC774\uB2E4.",outro:"\uC655\uAD00\uC774 \uBD80\uC11C\uC84C\uB2E4. \uADF8\uB7EC\uB098 \uBB34\uB108\uC9C4 \uC625\uC88C \uC544\uB798\uC5D0\uC11C \uBB34\uC5B8\uAC00\uAC00 \uC544\uC9C1 \uC228\uC744 \uC26C\uACE0 \uC788\uB2E4."}},Rf="\uBC31 \uB144 \uC804, \uBD88\uBA78\uC744 \uD0D0\uD55C \uC655 \uC544\uB974\uCE74\uC2A4\uB294 \uC800\uC8FC\uBC1B\uC740 \uC655\uAD00\uC744 \uC37C\uACE0 \uC655\uAD6D\uC740 \uD558\uB8FB\uBC24\uC5D0 \uBB34\uB108\uC84C\uB2E4. \uC774\uC81C \uC655\uAC00 \uBB18\uC5ED\uC758 \uBB34\uB364\uC774 \uD558\uB098\uB458 \uC5F4\uB9AC\uACE0 \uC788\uB2E4.",Ma=i=>Math.max(1,Math.min(ui,i|0)),N0=i=>yt.map((e,t)=>e.chapter===i?t:-1).filter(e=>e>=0),In=en[1].start,Ft=(i,e)=>i>=0&&e>=0&&i<ns&&e<Xo&&jo[e][i]!==" ",is=(i,e)=>[Math.floor(i/4+.5),Math.floor(e/4+.5)],Gn=(i,e)=>({x:i*4,z:e*4}),tt=(i,e,t,n,s)=>({x:(ws[i]+e)*4,z:t*4,r:n,prop:s}),Bh=[tt(1,9.5,1.5,.9,"d_pillar_decorated"),tt(1,14.5,1.5,.9,"d_pillar_decorated"),tt(1,9.5,5.5,.9,"d_pillar_decorated"),tt(1,14.5,5.5,.9,"d_pillar_decorated"),tt(1,1.5,11.5,.8,"d_pillar"),tt(1,3.5,13.5,.8,"d_pillar"),tt(1,10.5,12.5,.8,"d_column"),tt(1,13.5,12.5,.8,"d_column"),tt(1,10.4,20.3,.9,"h_grave_A"),tt(1,16.2,19.4,.9,"h_grave_B"),tt(1,14.6,23.2,1.1,"h_tree_dead_large"),tt(1,11.1,23.6,.9,"h_gravestone"),tt(1,16.6,22.5,.8,"h_grave_A_destroyed"),tt(2,14.5,13.5,.8,"d_column"),tt(2,19.5,13.5,.8,"d_column"),tt(2,14.5,15.5,.8,"d_column"),tt(2,19.5,15.5,.8,"d_column"),tt(2,3.5,1.5,.9,"d_pillar_decorated"),tt(2,9.5,1.5,.9,"d_pillar_decorated"),tt(2,3.5,5.5,.9,"d_pillar_decorated"),tt(2,9.5,5.5,.9,"d_pillar_decorated"),tt(2,3.5,12.5,.8,"d_pillar"),tt(2,5.5,15.5,.8,"d_pillar"),tt(3,8.5,1.5,.9,"d_pillar_decorated"),tt(3,16.5,1.5,.9,"d_pillar_decorated"),tt(3,8.5,5.5,.9,"d_pillar_decorated"),tt(3,16.5,5.5,.9,"d_pillar_decorated"),tt(3,me(1.5),11.5,.8,"d_pillar"),tt(3,me(3.5),13.5,.8,"d_pillar"),tt(3,me(10.5),12.5,.8,"d_column"),tt(3,me(13.5),12.5,.8,"d_column"),tt(3,me(10.4),20.3,.9,"d_rubble_large"),tt(3,me(16.2),19.4,.9,"h_tree_dead_large_decorated"),tt(3,me(14.6),23.2,1.1,"h_tree_dead_large"),tt(3,me(16.6),22.5,.8,"d_rubble_large")];function $o(i){let e=[];return yt.forEach((t,n)=>{if(i[n]==="active")for(let s of t.seals)e.push(s)}),e}function Yo(i,e){let[t,n]=is(i,e);return yt.findIndex(s=>t>=s.x0&&t<=s.x1&&n>=s.z0&&n<=s.z1)}var Uh=4/2,Fh=.5;function Cf(i,e,t){if(!Ft(i,e))return!0;if(t){for(let n of t)if(n[0]===i&&n[1]===e)return!0}return!1}function Kn(i,e,t){let n=!1;for(let s=0;s<2;s++){let[r,a]=is(i.x,i.z);for(let o=-1;o<=1;o++)for(let c=-1;c<=1;c++){let l=r+c,h=a+o;if(!Cf(l,h,t))continue;let d=l*4,u=h*4,f=d-Uh-Fh,m=d+Uh+Fh,b=u-Uh-Fh,g=u+Uh+Fh,p=Math.max(f,Math.min(i.x,m)),v=Math.max(b,Math.min(i.z,g)),_=i.x-p,x=i.z-v,w=_*_+x*x;if(w<e*e){if(w<1e-8){let E=i.x-f,R=m-i.x,I=i.z-b,S=g-i.z,y=Math.min(E,R,I,S);y===E?i.x=f-e:y===R?i.x=m+e:y===I?i.z=b-e:i.z=g+e}else{let E=Math.sqrt(w);i.x=p+_/E*e,i.z=v+x/E*e}n=!0}}}for(let s of Bh){let r=i.x-s.x,a=i.z-s.z,o=s.r+e,c=r*r+a*a;if(c<o*o){let l=Math.sqrt(c)||1e-4;i.x=s.x+r/l*o,i.z=s.z+a/l*o,n=!0}}return n}function RM(i,e,t){let[n,s]=is(i,e);return!Cf(n,s,t)}function Ko(i,e,t,n,s,r=0){let a=Math.hypot(t-i,n-e),o=Math.ceil(a/(r>0?.6:1)),c={x:0,z:0};for(let l=1;l<o;l++){let h=l/o,d=i+(t-i)*h,u=e+(n-e)*h;if(!RM(d,u,s)||r>0&&(c.x=d,c.z=u,Kn(c,r,s),Math.abs(c.x-d)+Math.abs(c.z-u)>.05))return!1}return!0}function Hh(i,e,t,n,s){let[r,a]=is(i,e),[o,c]=is(t,n);if(r===o&&a===c)return{x:t,z:n};let l=(b,g)=>g*ns+b,h=[[r,a]],d=new Map,u=new Map([[l(r,a),0]]),f=new Map([[l(r,a),Math.abs(o-r)+Math.abs(c-a)]]),m=0;for(;h.length&&m++<600;){let b=0;for(let v=1;v<h.length;v++)f.get(l(...h[v]))<f.get(l(...h[b]))&&(b=v);let[g,p]=h.splice(b,1)[0];if(g===o&&p===c){let v=l(g,p),_=v;for(;d.has(v)&&d.get(v)!==l(r,a);)_=v,v=d.get(v);let x=d.has(v)?v:_;return Gn(x%ns,Math.floor(x/ns))}for(let[v,_]of[[1,0],[-1,0],[0,1],[0,-1]]){let x=g+v,w=p+_;if(Cf(x,w,s))continue;let E=l(x,w),R=u.get(l(g,p))+1;R<(u.get(E)??1/0)&&(d.set(E,l(g,p)),u.set(E,R),f.set(E,R+Math.abs(o-x)+Math.abs(c-w)),h.some(([I,S])=>I===x&&S===w)||h.push([x,w]))}}return null}function Vh(i){let e=i>>>0,t=()=>{e=e+1831565813>>>0;let n=e;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296};return t.range=(n,s)=>n+t()*(s-n),t.int=(n,s)=>Math.floor(n+t()*(s-n+1)),t.pick=n=>n[Math.floor(t()*n.length)],t.chance=n=>t()<n,t}var Jn=Math.PI*2,Wn={1:{torch:"#ff9448",bossTorch:"#7fd0ff",flame:"#ff7a26",bossFlame:"#58b6ff",banner:["d_banner_patternA_red","d_banner_thin_red"],fog:"#08070c",bg:"#06050a"},2:{torch:"#4fe0c8",bossTorch:"#8fd0ff",flame:"#2fd8c0",bossFlame:"#7fc8ff",banner:["d_banner_patternB_blue"],fog:"#040c10",bg:"#02070a",sky:"#3a7a8a",ground:"#06161a",moon:"#8fd8e8",moonI:.6},3:{torch:"#ff6a2a",bossTorch:"#ff3a1a",flame:"#ff5a1a",bossFlame:"#ff2a0a",banner:["d_banner_triple_red","d_banner_shield_red"],fog:"#130605",bg:"#0b0403",sky:"#8a4a3a",ground:"#2a0c06",moon:"#ff9a6a",moonI:.55}},z0=16,CM=/floor|path|rubble_half|coin|candle|bone|skull/;function PM(i){let e=new _t,t=i.attributes.position.count;for(let n of["position","normal","uv"]){let s=i.attributes[n],r=n==="uv"?2:3,a=new Float32Array(t*r);if(s)for(let o=0;o<t;o++)a[o*r]=s.getX(o),a[o*r+1]=s.getY(o),r===3&&(a[o*r+2]=s.getZ(o));e.setAttribute(n,new Dt(a,r))}return i.index?e.setIndex(new Dt(Uint32Array.from(i.index.array),1)):e.setIndex([...Array(t).keys()]),e}var Pf=class{constructor(e){this.assets=e,this.byKey=new Map,this.floatCache=new Map}add(e,t,n,s,r=0,a=1,o=1){let c=new Ce().compose(new C(t,n,s),new hn().setFromAxisAngle(new C(0,1,0),r),new C(a,a*o,a));this.byKey.has(e)||this.byKey.set(e,[]),this.byKey.get(e).push(c)}build(e){let t=new Map,n=new Ce;for(let[a,o]of this.byKey){let c=!CM.test(a);for(let l of this.assets.propParts(a)){let h=this.floatCache.get(l.geometry);h||(h=PM(l.geometry),this.floatCache.set(l.geometry,h));for(let d of o){let u=`${Math.floor(d.elements[12]/z0)},${Math.floor(d.elements[14]/z0)}|${l.material.uuid}|${c}`,f=t.get(u);f||(f={material:l.material,cast:c,geos:[]},t.set(u,f)),f.geos.push(h.clone().applyMatrix4(n.multiplyMatrices(d,l.matrix)))}}}let s=0,r=0;for(let a of t.values()){let o=Ih(a.geos,!1);for(let l of a.geos)l.dispose();o.computeBoundingSphere();let c=new Ue(o,a.material);c.castShadow=a.cast,c.receiveShadow=!0,c.matrixAutoUpdate=!1,e.add(c),s++,r+=o.index.count/3}for(let a of this.floatCache.values())a.dispose();this.stats={meshes:s,tris:Math.round(r)}}},Gh=class{constructor(e,t,n){this.engine=e,this.assets=t,this.vfx=n,this.group=new Et,this.torches=[],this.water=[],this.cracks=[],this.chapter=1,this.seals=[],this.chests=new Map,this.build(),e.scene.add(this.group),this.lightPool=[];for(let s=0;s<6;s++){let r=new Hn("#ff9448",0,15,1.7);e.scene.add(r),this.lightPool.push(r)}}prop(e,t,n,s,r=0,a=1){this.inst.add(e,t,n,s,r,a)}build(){let e=Vh(1337),t=this.inst=new Pf(this.assets),n=(c,l)=>Ft(c,l)&&jo[l][c]===",",s=(c,l)=>yt.find(h=>c>=h.x0&&c<=h.x1&&l>=h.z0&&l<=h.z1);for(let c=0;c<Xo;c++)for(let l=0;l<ns;l++){if(!Ft(l,c))continue;let{x:h,z:d}=Gn(l,c),u=s(l,c),f=Oh(l),m=Wn[f],b=Math.floor(e()*4)*(Jn/4);if(n(l,c))f===3?t.add(e()<.3?"d_floor_dirt_large_rocky":"d_floor_dirt_large",h,0,d,b):t.add(e()<.04?"h_floor_dirt_grave":"h_floor_dirt",h,0,d,b);else if(f===2){for(let[p,v]of[[-1,-1],[1,-1],[-1,1],[1,1]]){let _=e();t.add(_<.18?"d_floor_tile_small_broken_A":_<.3?"d_floor_tile_small_weeds_A":_<.36?"d_floor_tile_small_broken_B":"d_floor_tile_small",h+p,0,d+v,Math.floor(e()*4)*(Jn/4))}this.water.push([h,d])}else if(f===3){let p=e();t.add(p<.4?"d_floor_tile_large_rocks":p<.46&&u?"d_floor_tile_big_grate":"d_floor_tile_large",h,0,d,b),e()<.3&&this.cracks.push([h+(e()-.5)*2,d+(e()-.5)*2,e()*Jn])}else{let p=e(),v=u?.boss?p<.2?"d_floor_tile_large_rocks":"d_floor_tile_large":p<.14?"d_floor_tile_large_rocks":p<.2&&u?"d_floor_tile_big_grate":"d_floor_tile_large";t.add(v,h,0,d,b)}let g=[[0,-1,0,-2,0],[0,1,Math.PI,2,0],[-1,0,Math.PI/2,0,-2],[1,0,-Math.PI/2,0,2]];for(let[p,v,_,x,w]of g){if(Ft(l+p,c+v))continue;let E=h+w,R=d+x,I=_;if(n(l,c)&&f===1){t.add(e()<.2?"h_fence_broken":"h_fence",E,0,R,I),t.add("h_fence_pillar",E+(v!==0?2:0),0,R+(p!==0?2:0));continue}let S=e(),y=v===1,P=y?"d_wall":S<.1?"d_wall_cracked":S<.16&&u?"d_wall_shelves":S<.2&&u&&!u.boss?"d_wall_window_closed":S<.26&&u?"d_wall_arched":"d_wall";if(!y&&f===2&&S<.3&&u&&!u.boss&&(P=S<.18?"d_wall_archedwindow_gated":"d_wall_arched"),!y&&f===3&&(P=n(l,c)?S<.5?"d_wall_broken":"d_wall_half":S<.22?"d_wall_cracked":S<.32?"d_wall_broken":P),t.add(P,E,0,R,I,1,y?.22:1),y)continue;let D=E-w*.25,F=R-x*.25,H=(l*7+c*13+(p+2)*3+v)%5;if(P==="d_wall"&&(H===0||u?.boss&&H<3)){this.prop("d_torch_mounted",D,2,F,I);let X=D+Math.sin(I)*.45,W=F+Math.cos(I)*.45;this.torches.push({x:X,y:2.75,z:W,color:u?.boss?m.bossTorch:m.torch,flame:u?.boss?m.bossFlame:m.flame,boss:!!u?.boss})}else P==="d_wall"&&u&&H===2&&this.prop(u.boss&&f!==2?"d_banner_triple_red":m.banner[Math.floor(e()*m.banner.length)],D,0,F,I)}}for(let c of Bh)this.prop(c.prop,c.x,0,c.z,e()*Jn);let r=(c,l,h,d=1.2)=>{for(let u=0;u<h;u++){let f=Math.floor(e()*4),m=(l.x0-.5)*4+d,b=(l.x1+.5)*4-d,g=(l.z0-.5)*4+d,p=(l.z1+.5)*4-d,v=m+e()*(b-m),_=g+e()*(p-g);f===0?_=g:f===1?_=p:f===2?v=m:v=b,this.prop(c[Math.floor(e()*c.length)],v,0,_,e()*Jn)}};for(let c of yt){if(c.outdoor)continue;let l=c.chapter;if(c.boss){let h=Gn(...c.boss);if(l===1){r(["d_candle_triple","d_candle_lit","h_skull_candle","h_bone_A","h_ribcage","d_rubble_half"],c,26,1),this.prop("d_stairs_wide",h.x,0,h.z-9.8,0);for(let d of[-6,6])this.prop("h_shrine_candles",h.x+d,0,h.z-7,0);for(let[d,u]of[[-10,0],[10,0],[-10,12],[10,12]])this.prop("h_coffin_decorated",h.x+d,0,h.z+u,d>0?-Math.PI/2:Math.PI/2)}else if(l===2){r(["d_coin_stack_large","d_coin_stack_medium","d_chest","d_trunk_large_A","d_candle_melted","d_keyring_hanging"],c,30,1);for(let[d,u]of[[-8,-4],[8,-4],[-8,10],[8,10]])this.prop("d_chest_gold",h.x+d,0,h.z+u,d>0?-Math.PI/2:Math.PI/2)}else{r(["d_rubble_large","d_rubble_half","d_sword_shield_broken","d_candle_triple","h_skull_candle"],c,26,1),this.prop("d_stairs_wide",h.x,0,h.z-9.8,0);for(let d of[-8,8])this.prop("h_shrine_candles",h.x+d,0,h.z-7,0),this.torches.push({x:h.x+d,y:1.6,z:h.z-7,color:Wn[3].bossTorch,flame:Wn[3].bossFlame,boss:!0})}}else l===2?r(["d_barrel_large","d_barrel_small_stack","d_crates_stacked","d_keg","d_shelf_small_candles","d_trunk_large_A","d_coin_stack_medium","d_rubble_half"],c,16):l===3?r(["d_rubble_large","d_rubble_half","d_sword_shield_broken","d_table_long_broken","d_barrel_large","d_candle_triple","h_bone_B"],c,16):r(["d_barrel_large","d_barrel_small","d_crates_stacked","d_box_stacked","d_candle_triple","d_rubble_half","h_bone_B","h_skull","d_keg","d_trunk_large_A","d_candle_melted"],c,14);if(c.chest){let h=Gn(...c.chest);for(let[d,u]of[[-2.2,.2],[2.2,.4],[-1.6,-1.2],[1.4,-1.4]])this.prop(e()<.5?"d_coin_stack_large":"d_coin_stack_medium",h.x+d,0,h.z+u,e()*Jn)}}let a=yt[0];for(let c=0;c<16;c++){let l=a.x0+e()*(a.x1-a.x0),h=a.z0+e()*(a.z1-a.z0),d=l*4,u=h*4;Math.hypot(d-52,u-92)<6||Bh.some(f=>Math.hypot(f.x-d,f.z-u)<3)||this.prop(["h_gravemarker_A","h_gravemarker_B","h_skull","h_bone_C","h_candle_triple","h_lantern_standing"][Math.floor(e()*6)],d,0,u,e()*Jn)}for(let c=0;c<70;c++){let l=e()*Jn,h=52,d=20.5*4,u=22+e()*22,f=h+Math.cos(l)*u*1.1,m=d+Math.sin(l)*u*.9,[b,g]=[Math.round(f/4),Math.round(m/4)];if(Ft(b,g)||Ft(b+1,g)||Ft(b-1,g)||Ft(b,g+1)||Ft(b,g-1))continue;let p=e(),v=p<.45?e()<.5?"h_tree_dead_large":"h_tree_dead_medium":p<.7?"h_grave_A":p<.85?"h_gravestone":"h_post_lantern";this.prop(v,f,0,m,e()*Jn,.9+e()*.5),v==="h_post_lantern"&&this.torches.push({x:f,y:3,z:m,color:"#ffb35c",outdoor:!0})}for(let c=0;c<26;c++){let l=6+Math.floor(e()*16),h=15+Math.floor(e()*13);Ft(l,h)||Ft(l-1,h)||Ft(l+1,h)||Ft(l,h-1)||Ft(l,h+1)||l<9&&h<23}let o=new Ue(new Mi(60,48),new Xt({color:"#1a1712",roughness:1}));o.rotation.x=-Math.PI/2,o.position.set(52,-.12,20.5*4),o.receiveShadow=!0,this.group.add(o);{let c=yt.find(u=>u.chapter===3&&u.outdoor),l=(c.x0+c.x1)/2*4,h=(c.z0+c.z1)/2*4,d=new Ue(new Mi(46,40),new Xt({color:"#1c0e0a",roughness:1}));d.rotation.x=-Math.PI/2,d.position.set(l,-.12,h),d.receiveShadow=!0,this.group.add(d);for(let[u,f]of[[-12,-8],[12,-8],[-12,8],[12,8]]){let m=l+u,b=h+f;Ft(...is(m,b))&&(this.prop("h_lantern_standing",m,0,b,e()*Jn,1.3),this.torches.push({x:m,y:2.4,z:b,color:Wn[3].torch,flame:Wn[3].flame,outdoor:!0}))}for(let u=0;u<60;u++){let f=e()*Jn,m=20+e()*20,b=l+Math.cos(f)*m*1.1,g=h+Math.sin(f)*m*.9,[p,v]=is(b,g);if(Oh(p)!==3||Ft(p,v)||Ft(p+1,v)||Ft(p-1,v)||Ft(p,v+1)||Ft(p,v-1))continue;let _=e(),x=_<.3?"h_tree_dead_large":_<.55?"d_rubble_large":_<.75?"d_wall_broken":_<.9?"d_pillar":"h_post_lantern";this.prop(x,b,0,g,e()*Jn,.9+e()*.4),x==="h_post_lantern"&&this.torches.push({x:b,y:3,z:g,color:Wn[3].torch,flame:Wn[3].flame,outdoor:!0})}}if(this.water.length){let c=this.water.map(([h,d])=>{let u=new Bn(4,4);return u.rotateX(-Math.PI/2),u.translate(h,.05,d),u}),l=new Ue(Ih(c,!1),new Xt({color:"#237a88",emissive:"#0a3a44",transparent:!0,opacity:.5,roughness:.08,metalness:.3,depthWrite:!1}));for(let h of c)h.dispose();l.renderOrder=2,this.group.add(l)}if(this.cracks.length){let c=this.cracks.map(([h,d,u])=>{let f=new Bn(2.4,.1);return f.rotateX(-Math.PI/2),f.rotateY(u),f.translate(h,.06,d),f}),l=new Ue(Ih(c,!1),new vt({color:new re("#ff5a14").multiplyScalar(2.5)}));for(let h of c)h.dispose();this.group.add(l)}this.prop("h_arch",8.5*4,0,80,Math.PI/2),this.prop("h_post_skull",8.5*4,0,19.3*4-1.5,0),this.prop("h_post_skull",8.5*4,0,20.7*4+1.5,0);for(let c=0;c<yt.length;c++)for(let[l,h]of yt[c].seals){let{x:d,z:u}=Gn(l,h),f=Ft(l,h-1)||Ft(l,h+1),m=this.makeSeal();m.position.set(d,0,u),m.rotation.y=f?0:Math.PI/2,m.visible=!1,this.group.add(m),this.seals.push({room:c,mesh:m,x:d,z:u,a:0})}t.build(this.group);for(let c of this.torches){let l=c.flame||(c.boss?"#58b6ff":"#ff7a26");this.vfx.emitter({rate:c.outdoor?14:26,emit:h=>h.fire(c.x,c.y,c.z,c.outdoor?.5:.8,l)})}this.vfx.emitter({rate:30,emit:c=>{this.chapter!==3||!this.focus||c.spark(this.focus.x+(Math.random()-.5)*34,.2,this.focus.z+(Math.random()-.5)*26,{n:1,color:"#ff8a3a",speed:.4,up:1.5+Math.random()*1.5,size:.1,grav:.3,drag:.5,life:2.4})}})}makeSeal(){let e=new it({name:"seal",uniforms:{uTime:{value:0},uA:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`varying vec2 vUv; uniform float uTime, uA;
        float h(vec2 p){ return fract(sin(dot(p, vec2(41.3, 289.1))) * 43758.5); }
        void main(){
          vec2 g = vUv * vec2(8.0, 6.0);
          vec2 id = floor(g); vec2 f = fract(g) - 0.5;
          float rune = step(0.72, h(id + floor(uTime * 0.7))) * smoothstep(0.35, 0.2, abs(f.x)) * smoothstep(0.42, 0.3, abs(f.y));
          float wave = 0.5 + 0.5 * sin(vUv.y * 18.0 - uTime * 4.0);
          float edge = smoothstep(0.1, 0.0, vUv.y) + smoothstep(0.9, 1.0, vUv.y) * 0.3;
          float fade = smoothstep(1.0, 0.2, vUv.y);
          float a = (0.25 + wave * 0.15 + rune * 0.7 + edge) * fade * uA;
          gl_FragColor = vec4(vec3(1.0, 0.25, 0.18) * (1.2 + rune * 2.0), a);
        }`,transparent:!0,blending:jt,depthWrite:!1,side:Zt}),t=new Bn(3.2,3.6);return t.translate(0,1.8,0),new Ue(t,e)}update(e,t,n,s){this.focus=s,this.chapter=Oh(is(s.x,s.z)[0]);for(let a of this.seals){let o=n[a.room]==="active";a.a+=((o?1:0)-a.a)*Math.min(1,e*5),a.mesh.visible=a.a>.01,a.mesh.material.uniforms.uA.value=a.a,a.mesh.material.uniforms.uTime.value=t,o&&Math.random()<e*20&&this.vfx.spark(a.x+(Math.random()-.5)*3,Math.random()*3,a.z,{n:1,color:"#ff5533",speed:.5,up:1,life:.8,size:.12,grav:.5})}let r=this.torches.map(a=>({tc:a,d:(a.x-s.x)**2+(a.z-s.z)**2})).sort((a,o)=>a.d-o.d);this.lightPool.forEach((a,o)=>{let c=r[o];if(!c||c.d>1600){a.intensity=0;return}let l=c.tc;a.position.set(l.x,l.y,l.z),a.color.set(l.color);let h=1+Math.sin(t*13+o*3.1)*.07+Math.sin(t*31+o)*.05;a.intensity=(l.outdoor?14:l.boss?28:24)*h,a.distance=l.outdoor?12:15})}};Qh();var HM=[0,2,3,5,7,8,10],zf=[[50,53,57],[46,50,53],[48,52,55],[45,49,52]],nc=i=>440*2**((i-69)/12),ed=class{constructor(){this.ctx=null,this.vol={master:.8,music:.5,sfx:.85},this.mode="menu",this.last={}}unlock(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let e=window.AudioContext||window.webkitAudioContext;if(!e)return;let t=this.ctx=new e;this.comp=t.createDynamicsCompressor(),this.comp.threshold.value=-12,this.comp.ratio.value=5,this.comp.attack.value=.003,this.master=t.createGain(),this.master.gain.value=this.vol.master,this.comp.connect(this.master).connect(t.destination),this.sfx=t.createGain(),this.sfx.gain.value=this.vol.sfx,this.sfx.connect(this.comp),this.music=t.createGain(),this.music.gain.value=this.vol.music,this.music.connect(this.comp),this.reverb=t.createConvolver(),this.reverb.buffer=this.impulse(3.6,2.4);let n=t.createGain();n.gain.value=.55,this.reverb.connect(n).connect(this.comp),this.noiseBuf=this.makeNoise(2),this.startMusic()}setVolume(e,t){if(this.vol[e]=t,!this.ctx)return;(e==="master"?this.master:e==="music"?this.music:this.sfx).gain.setTargetAtTime(t,this.ctx.currentTime,.05)}impulse(e,t){let n=this.ctx,s=n.sampleRate*e,r=n.createBuffer(2,s,n.sampleRate);for(let a=0;a<2;a++){let o=r.getChannelData(a);for(let c=0;c<s;c++)o[c]=(Math.random()*2-1)*(1-c/s)**t}return r}makeNoise(e){let t=this.ctx,n=t.sampleRate*e,s=t.createBuffer(1,n,t.sampleRate),r=s.getChannelData(0);for(let a=0;a<n;a++)r[a]=Math.random()*2-1;return s}out(e){let t=this.ctx,n=e.vol??1,s=0;if(e.L&&e.x!==void 0){let c=e.x-e.L.x,l=(e.z??e.L.z)-e.L.z;n*=Math.max(0,1-Math.hypot(c,l)/40)**1.3,s=Math.max(-1,Math.min(1,c/18))}if(n<.01)return null;let r=t.createGain();r.gain.value=n;let a=t.createStereoPanner();a.pan.value=s,r.connect(a).connect(this.sfx);let o=t.createGain();return o.gain.value=e.wet??.25,a.connect(o).connect(this.reverb),r}tone(e,{type:t="sine",f0:n,f1:s,dur:r,vol:a=.3,attack:o=.005,delay:c=0,detune:l=0}){let h=this.ctx,d=h.currentTime+c,u=h.createOscillator(),f=h.createGain();u.type=t,u.detune.value=l,u.frequency.setValueAtTime(n,d),s&&u.frequency.exponentialRampToValueAtTime(Math.max(1,s),d+r),f.gain.setValueAtTime(1e-4,d),f.gain.exponentialRampToValueAtTime(a,d+o),f.gain.exponentialRampToValueAtTime(1e-4,d+r),u.connect(f).connect(e),u.start(d),u.stop(d+r+.05)}noise(e,{dur:t,vol:n=.3,type:s="bandpass",f0:r=1e3,f1:a,q:o=1,attack:c=.003,delay:l=0}){let h=this.ctx,d=h.currentTime+l,u=h.createBufferSource();u.buffer=this.noiseBuf,u.playbackRate.value=.8+Math.random()*.4;let f=h.createBiquadFilter();f.type=s,f.Q.value=o,f.frequency.setValueAtTime(r,d),a&&f.frequency.exponentialRampToValueAtTime(a,d+t);let m=h.createGain();m.gain.setValueAtTime(1e-4,d),m.gain.exponentialRampToValueAtTime(n,d+c),m.gain.exponentialRampToValueAtTime(1e-4,d+t),u.connect(f).connect(m).connect(e),u.start(d,Math.random()),u.stop(d+t+.05)}play(e,t={}){if(!this.ctx||this.ctx.state!=="running")return;let n=this.ctx.currentTime,s={hit:.03,hitCrit:.04,swing:.04,bones:.05,spawn:.08,block:.05,loot:.08}[e]??0;if(s&&n-(this.last[e]||0)<s)return;this.last[e]=n;let r=()=>.9+Math.random()*.2,a=this.out(t);if(a)switch(e){case"swing":this.noise(a,{dur:.16,vol:.28,f0:900*r(),f1:3800,q:1.4,attack:.02});break;case"swingHeavy":this.noise(a,{dur:.3,vol:.4,f0:400,f1:2400,q:1.2,attack:.04}),this.tone(a,{type:"sine",f0:90,f1:50,dur:.3,vol:.2});break;case"hit":this.noise(a,{dur:.09,vol:.45,f0:1500*r(),q:1.5}),this.tone(a,{type:"triangle",f0:160*r(),f1:60,dur:.12,vol:.35}),this.noise(a,{dur:.05,vol:.2,type:"highpass",f0:5e3});break;case"hitCrit":this.noise(a,{dur:.14,vol:.55,f0:2200,q:2}),this.tone(a,{type:"triangle",f0:220,f1:55,dur:.18,vol:.45}),this.tone(a,{type:"sine",f0:2600*r(),f1:3400,dur:.2,vol:.08,delay:.01});break;case"block":this.tone(a,{type:"square",f0:900*r(),f1:700,dur:.12,vol:.12}),this.noise(a,{dur:.1,vol:.3,type:"highpass",f0:3e3});break;case"impactHeavy":this.tone(a,{type:"sine",f0:110,f1:32,dur:.6,vol:.7}),this.noise(a,{dur:.5,vol:.45,type:"lowpass",f0:1800,f1:150});break;case"bossSlam":this.tone(this.out({...t,wet:.6})||a,{type:"sine",f0:80,f1:24,dur:1.1,vol:.9}),this.noise(a,{dur:.9,vol:.6,type:"lowpass",f0:1200,f1:90});break;case"dodge":this.noise(a,{dur:.25,vol:.3,f0:500,f1:2600,q:.9,attack:.03});break;case"potion":this.tone(a,{type:"sine",f0:500,f1:900,dur:.25,vol:.18}),this.noise(a,{dur:.2,vol:.12,f0:3e3,q:4,delay:.05});break;case"skill":this.noise(a,{dur:.18,vol:.18,f0:1800,f1:600,q:2});break;case"shout":this.tone(this.out({vol:.9,wet:.5}),{type:"sawtooth",f0:180,f1:140,dur:.6,vol:.18,attack:.05}),this.tone(this.out({vol:.9,wet:.5}),{type:"sawtooth",f0:270,f1:210,dur:.6,vol:.1,attack:.05});break;case"charge":this.tone(a,{type:"sawtooth",f0:200,f1:900,dur:.8,vol:.08,attack:.3}),this.noise(a,{dur:.8,vol:.12,f0:800,f1:5e3,q:3,attack:.3});break;case"counter":this.tone(this.out({vol:1,wet:.6}),{type:"triangle",f0:1318,dur:.6,vol:.2}),this.tone(this.out({vol:1,wet:.6}),{type:"triangle",f0:1760,dur:.6,vol:.14,delay:.05}),this.tone(a,{type:"sine",f0:120,f1:40,dur:.5,vol:.6});break;case"counterTell":this.tone(this.out({vol:1,wet:.5}),{type:"sine",f0:1480,dur:.35,vol:.12}),this.tone(this.out({vol:1,wet:.5}),{type:"sine",f0:1480,dur:.35,vol:.12,delay:.18});break;case"bones":for(let o=0;o<5;o++)this.tone(a,{type:"square",f0:700+Math.random()*900,f1:300,dur:.05,vol:.06,delay:o*.04+Math.random()*.03});this.noise(a,{dur:.3,vol:.2,f0:2500,q:3});break;case"bossDie":{let o=this.out({vol:1,wet:1});this.tone(o,{type:"sawtooth",f0:90,f1:30,dur:3,vol:.4,attack:.1}),this.noise(o,{dur:3,vol:.5,type:"lowpass",f0:1500,f1:60});break}case"spawn":this.noise(a,{dur:.6,vol:.18,type:"lowpass",f0:400,attack:.1});for(let o=0;o<3;o++)this.tone(a,{type:"square",f0:400+Math.random()*500,f1:200,dur:.05,vol:.04,delay:.2+o*.12});break;case"hurt":this.tone(a,{type:"sawtooth",f0:200,f1:80,dur:.18,vol:.2}),this.noise(a,{dur:.15,vol:.3,f0:600,q:.8});break;case"down":this.tone(this.out({vol:1,wet:.7}),{type:"sine",f0:330,f1:110,dur:1.4,vol:.3});break;case"revive":[0,4,7,12,16].forEach((o,c)=>this.tone(this.out({vol:1,wet:.7}),{type:"triangle",f0:523*2**(o/12),dur:.9,vol:.1,delay:c*.08}));break;case"smoke":this.noise(a,{dur:.7,vol:.35,type:"lowpass",f0:1200,f1:300,attack:.02});break;case"bow":this.noise(a,{dur:.08,vol:.3,f0:1200,q:3}),this.tone(a,{type:"triangle",f0:180,f1:120,dur:.12,vol:.2});break;case"cast":this.tone(a,{type:"sine",f0:600,f1:1400,dur:.18,vol:.12}),this.noise(a,{dur:.2,vol:.15,f0:2500,f1:800,q:2});break;case"explode":this.tone(a,{type:"sine",f0:140,f1:35,dur:.6,vol:.6}),this.noise(a,{dur:.7,vol:.5,type:"lowpass",f0:3e3,f1:200});break;case"thunder":{let o=this.out({...t,wet:.9})||a;this.noise(o,{dur:1.4,vol:.7,type:"lowpass",f0:5e3,f1:120,attack:.002}),this.tone(o,{type:"sine",f0:70,f1:30,dur:1.2,vol:.7});break}case"soul":this.tone(a,{type:"sine",f0:300,f1:900,dur:.4,vol:.12}),this.noise(a,{dur:.5,vol:.25,type:"lowpass",f0:900});break;case"frost":this.noise(a,{dur:.8,vol:.25,type:"highpass",f0:5e3,attack:.05}),this.tone(a,{type:"sine",f0:2200,f1:1600,dur:.6,vol:.06});break;case"meteorFall":this.noise(this.out({vol:1,wet:.3}),{dur:1.2,vol:.35,f0:300,f1:2400,q:1,attack:.9});break;case"summon":this.tone(this.out({...t,wet:.8})||a,{type:"sawtooth",f0:60,f1:90,dur:1.4,vol:.2,attack:.3});break;case"seal":this.tone(this.out({vol:1,wet:.8}),{type:"sine",f0:110,dur:1.4,vol:.4,attack:.02}),this.noise(this.out({vol:1,wet:.8}),{dur:.8,vol:.2,type:"highpass",f0:3e3});break;case"bossDoor":{let o=this.out({vol:1,wet:1});this.tone(o,{type:"sine",f0:55,dur:3,vol:.6,attack:.2}),this.tone(o,{type:"sawtooth",f0:110,dur:2.5,vol:.08,attack:.5,detune:8});break}case"roar":{let o=this.out({vol:1,wet:.9});this.tone(o,{type:"sawtooth",f0:75,f1:50,dur:2,vol:.4,attack:.15}),this.tone(o,{type:"sawtooth",f0:78,f1:48,dur:2,vol:.35,attack:.2}),this.noise(o,{dur:1.8,vol:.4,type:"lowpass",f0:700,f1:200,attack:.1});break}case"clear":[0,3,7,12].forEach((o,c)=>this.tone(this.out({vol:1,wet:.8}),{type:"triangle",f0:293.7*2**(o/12),dur:1.2,vol:.12,delay:c*.1}));break;case"chest":[0,4,7,11,14].forEach((o,c)=>this.tone(this.out({vol:1,wet:.8}),{type:"sine",f0:659*2**(o/12),dur:.8,vol:.12,delay:c*.06}));break;case"loot":{let o=t.tier??0;[0,7,12,16,19].slice(0,2+o).forEach((c,l)=>this.tone(this.out({vol:1,wet:.7}),{type:"triangle",f0:587*2**(c/12),dur:.7,vol:.1,delay:l*.07}));break}case"levelup":[0,4,7,12,16,19,24].forEach((o,c)=>this.tone(this.out({vol:1,wet:.8}),{type:"triangle",f0:392*2**(o/12),dur:1.2,vol:.12,delay:c*.07}));break;case"ui":this.tone(a,{type:"sine",f0:800,f1:1e3,dur:.05,vol:.06});break;case"equip":this.noise(a,{dur:.12,vol:.2,f0:3e3,q:3}),this.tone(a,{type:"square",f0:300,f1:200,dur:.08,vol:.05});break;case"step":this.noise(a,{dur:.06,vol:.08,type:"lowpass",f0:600});break}}startMusic(){let e=this.ctx;this.pad=e.createGain(),this.pad.gain.value=0,this.padF=e.createBiquadFilter(),this.padF.type="lowpass",this.padF.frequency.value=700,this.pad.connect(this.padF).connect(this.music);let t=e.createGain();t.gain.value=.5,this.padF.connect(t).connect(this.reverb),this.voices=[];for(let r=0;r<3;r++)for(let a of[-9,0,9]){let o=e.createOscillator();o.type=r===0?"sawtooth":"triangle",o.detune.value=a;let c=e.createGain();c.gain.value=r===0?.03:.05,o.connect(c).connect(this.pad),o.start(),this.voices.push({o,i:r})}let n=e.createOscillator(),s=e.createGain();n.frequency.value=.06,s.gain.value=300,n.connect(s).connect(this.padF.frequency),n.start(),this.chord=0,this.step=0,this.next=e.currentTime+.1,setInterval(()=>this.schedule(),50),this.setMusic(this.mode)}setMusic(e){if(this.mode=e,!this.ctx||!this.pad)return;let t={menu:.5,explore:.45,combat:.4,boss:.45,victory:.6,silence:0}[e]??.4;this.pad.gain.setTargetAtTime(t,this.ctx.currentTime,1.2)}schedule(){let e=this.ctx;if(!e||e.state!=="running")return;let t=this.mode,s=60/(t==="boss"?132:t==="combat"?108:70)/4;for(;this.next<e.currentTime+.2;){let r=this.next,a=this.step++;if(a%(16*2)===0){this.chord=(this.chord+1)%zf.length;let l=t==="victory"?[50,54,57]:zf[this.chord];for(let h of this.voices)h.o.frequency.setTargetAtTime(nc(l[h.i]-12),r,.4)}let c=(t==="victory"?50:zf[this.chord][0])-24;t==="combat"||t==="boss"?(a%4===0&&this.drum(r,"kick",t==="boss"?.55:.4),t==="boss"&&a%8===6&&this.drum(r,"kick",.35),a%8===4&&this.drum(r,"snare",t==="boss"?.22:.14),a%2===1&&this.drum(r,"hat",.03),a%2===0&&this.bass(r,nc(c+(a%8===6?7:0)),s*1.8,t==="boss"?.16:.12),t==="boss"&&a%32===0&&this.brass(r,nc(c+24),s*12),t==="boss"&&a%32===20&&this.brass(r,nc(c+27),s*8)):t!=="silence"&&(a%16===0&&Math.random()<.6&&this.bell(r,nc(62+HM[Math.random()*7|0]+(Math.random()<.3?12:0)),.045),a%64===0&&this.drum(r,"boom",.35)),this.next+=s}}bell(e,t,n){let s=this.ctx,r=s.createGain();r.gain.setValueAtTime(1e-4,e),r.gain.exponentialRampToValueAtTime(n,e+.01),r.gain.exponentialRampToValueAtTime(1e-4,e+3);for(let[o,c]of[[1,1],[2.76,.3],[5.4,.1]]){let l=s.createOscillator();l.frequency.value=t*o;let h=s.createGain();h.gain.value=c,l.connect(h).connect(r),l.start(e),l.stop(e+3.1)}r.connect(this.music);let a=s.createGain();a.gain.value=1,r.connect(a).connect(this.reverb)}bass(e,t,n,s){let r=this.ctx,a=r.createOscillator(),o=r.createGain(),c=r.createBiquadFilter();a.type="sawtooth",a.frequency.value=t,c.type="lowpass",c.frequency.value=380,c.Q.value=4,o.gain.setValueAtTime(1e-4,e),o.gain.exponentialRampToValueAtTime(s,e+.01),o.gain.exponentialRampToValueAtTime(1e-4,e+n),a.connect(c).connect(o).connect(this.music),a.start(e),a.stop(e+n+.05)}brass(e,t,n){let s=this.ctx,r=s.createGain(),a=s.createBiquadFilter();a.type="lowpass",a.frequency.setValueAtTime(400,e),a.frequency.linearRampToValueAtTime(2200,e+.15),a.frequency.linearRampToValueAtTime(900,e+n),r.gain.setValueAtTime(1e-4,e),r.gain.exponentialRampToValueAtTime(.09,e+.08),r.gain.exponentialRampToValueAtTime(1e-4,e+n);for(let c of[-10,0,10])for(let l of[1,1.5]){let h=s.createOscillator();h.type="sawtooth",h.frequency.value=t*l,h.detune.value=c,h.connect(a),h.start(e),h.stop(e+n+.1)}a.connect(r).connect(this.music);let o=s.createGain();o.gain.value=.6,r.connect(o).connect(this.reverb)}drum(e,t,n){let s=this.ctx;if(t==="kick"||t==="boom"){let c=s.createOscillator(),l=s.createGain();if(c.frequency.setValueAtTime(t==="boom"?60:120,e),c.frequency.exponentialRampToValueAtTime(t==="boom"?28:38,e+(t==="boom"?1:.18)),l.gain.setValueAtTime(n,e),l.gain.exponentialRampToValueAtTime(1e-4,e+(t==="boom"?1.6:.35)),c.connect(l).connect(this.music),c.start(e),c.stop(e+1.7),t==="boom"){let h=s.createGain();h.gain.value=.6,l.connect(h).connect(this.reverb)}return}let r=s.createBufferSource();r.buffer=this.noiseBuf;let a=s.createBiquadFilter();a.type=t==="hat"?"highpass":"bandpass",a.frequency.value=t==="hat"?8e3:1600;let o=s.createGain();if(o.gain.setValueAtTime(n,e),o.gain.exponentialRampToValueAtTime(1e-4,e+(t==="hat"?.04:.2)),r.connect(a).connect(o).connect(this.music),r.start(e,Math.random()),r.stop(e+.25),t==="snare"){let c=s.createGain();c.gain.value=.5,o.connect(c).connect(this.reverb)}}};var td=class{constructor(e){this.keys=new Set,this.mouse={x:innerWidth/2,y:innerHeight/2,down:!1,right:!1},this.casts=[],this.dest=null,this.enabled=!1,this.onMoveOrder=null;let t={KeyQ:"q",KeyW:"w",KeyE:"e",KeyR:"r",Space:"dodge",KeyF:"potion",KeyI:"inventory",Tab:"inventory"};addEventListener("keydown",n=>{if(n.target instanceof HTMLInputElement||!this.enabled)return;let s=t[n.code];s&&!n.repeat&&(this.casts.push(s),s!=="inventory"&&s!=="potion"&&(this.dest=null)),this.keys.add(n.code),(["Space","Tab"].includes(n.code)||n.code.startsWith("Arrow"))&&n.preventDefault()}),addEventListener("keyup",n=>this.keys.delete(n.code)),addEventListener("blur",()=>{this.keys.clear(),this.mouse.down=this.mouse.right=!1}),addEventListener("mousemove",n=>{this.mouse.x=n.clientX,this.mouse.y=n.clientY}),e.addEventListener("mousedown",n=>{n.button===0&&(this.mouse.down=!0,this.dest=null),n.button===2&&(this.mouse.right=!0,this.clicked=!0)}),addEventListener("mouseup",n=>{n.button===0&&(this.mouse.down=!1),n.button===2&&(this.mouse.right=!1)}),e.addEventListener("contextmenu",n=>n.preventDefault())}sample(e,t){let n=this.keys,s=e.pick(this.mouse.x,this.mouse.y),r=(n.has("ArrowRight")?1:0)-(n.has("ArrowLeft")?1:0),a=(n.has("ArrowDown")?1:0)-(n.has("ArrowUp")?1:0);if((r||a)&&(this.dest=null),this.enabled&&this.mouse.right&&(this.dest={x:s.x,z:s.z},this.clicked&&(this.clicked=!1,this.onMoveOrder?.(s.x,s.z))),this.dest){let o=this.dest.x-t.x,c=this.dest.z-t.z,l=Math.hypot(o,c);l<.35?this.dest=null:(r=o/l,a=c/l)}return{mx:r,mz:a,ax:s.x,az:s.z,attack:this.enabled&&this.mouse.down}}takeCasts(){return this.casts.splice(0)}};pi();rs();pi();var Uf=[{id:"common",name:"\uC77C\uBC18",color:"#c9c4bd",weight:55,mult:1,affixes:1},{id:"uncommon",name:"\uACE0\uAE09",color:"#7ee07a",weight:28,mult:1.15,affixes:2},{id:"rare",name:"\uD76C\uADC0",color:"#5cb3ff",weight:12,mult:1.35,affixes:2},{id:"epic",name:"\uC601\uC6C5",color:"#c77dff",weight:4.5,mult:1.6,affixes:3},{id:"legendary",name:"\uC804\uC124",color:"#ff9a3c",weight:.5,mult:2,affixes:4}],bn=Object.fromEntries(Uf.map((i,e)=>[i.id,{...i,tier:e}])),Zn={weapon:{name:"\uBB34\uAE30",main:"class",base:2.8},helm:{name:"\uD22C\uAD6C",main:"vit",base:1.2},armor:{name:"\uAC11\uC637",main:"vit",base:2.2},trinket:{name:"\uC7A5\uC2E0\uAD6C",main:"crit",base:.025}},Aa=Object.keys(Zn),Ff={str:{name:ss.str,base:1.2,fmt:i=>`+${Math.round(i)}`},dex:{name:ss.dex,base:1.2,fmt:i=>`+${Math.round(i)}`},int:{name:ss.int,base:1.2,fmt:i=>`+${Math.round(i)}`},vit:{name:ss.vit,base:.9,fmt:i=>`+${Math.round(i)}`},atk:{name:"\uACF5\uACA9\uB825",base:6,fmt:i=>`+${Math.round(i)}`},hp:{name:"\uCD5C\uB300 \uC0DD\uBA85\uB825",base:45,fmt:i=>`+${Math.round(i)}`},crit:{name:"\uCE58\uBA85\uD0C0 \uD655\uB960",base:.015,fmt:i=>`+${(i*100).toFixed(1)}%`},critDmg:{name:"\uCE58\uBA85\uD0C0 \uD53C\uD574",base:.05,fmt:i=>`+${Math.round(i*100)}%`},haste:{name:"\uC2E0\uC18D",base:.015,fmt:i=>`+${(i*100).toFixed(1)}%`},def:{name:"\uBC29\uC5B4\uB825",base:8,fmt:i=>`+${Math.round(i)}`}},j0=(i,e,t)=>`${i==="atk"&&t?mr(t):Ff[i].name} ${Ff[i].fmt(e)}`,X0={weapon:{knight:["\uAE30\uC0AC\uAC80","\uC218\uD638\uC790\uC758 \uAC80","\uB9F9\uC138\uC758 \uAC80"],barbarian:["\uC804\uC7C1\uB3C4\uB07C","\uD559\uC0B4\uC790\uC758 \uB3C4\uB07C","\uBD84\uC1C4\uC790"],mage:["\uB9C8\uB825 \uC9C0\uD321\uC774","\uC7BF\uBD88 \uC9C0\uD321\uC774","\uC11C\uB9AC \uD640"],rogue:["\uC30D\uB2E8\uAC80","\uADF8\uB9BC\uC790 \uC1A1\uACF3\uB2C8","\uB3C5\uC0AC\uC758 \uC774\uBE68"],archer:["\uC11D\uAD81","\uC7A5\uAD81","\uC0AC\uB0E5\uAFBC\uC758 \uD65C","\uB9E4\uC758 \uB208"]},helm:["\uD22C\uAD6C","\uAC00\uBA74","\uAD00"],armor:["\uD749\uAC11","\uAC11\uC8FC","\uC608\uBCF5"],trinket:["\uBC18\uC9C0","\uBD80\uC801","\uBAA9\uAC78\uC774"]},VM={common:["\uB0A1\uC740","\uD22C\uBC15\uD55C"],uncommon:["\uB2E8\uB2E8\uD55C","\uC5F0\uB9C8\uB41C"],rare:["\uB9DD\uC790\uC758","\uBB18\uC9C0\uAE30\uC758"],epic:["\uD574\uACE8\uC655\uC758","\uC800\uC8FC\uBC1B\uC740"],legendary:["\uBD80\uC11C\uC9C4 \uC655\uAD00\uC758","\uC544\uB974\uCE74\uC2A4\uC758"]};function GM(i,e=0){let t=Uf.map((s,r)=>s.weight*(r===0?Math.max(.1,1-e):1+e*r*1.5)),n=i()*t.reduce((s,r)=>s+r,0);for(let s=0;s<t.length;s++)if(n-=t[s],n<=0)return Uf[s].id;return"common"}var WM=0;function $0(i,{ilvl:e=1,rarity:t,slot:n,cls:s="knight",luck:r=0}={}){t=t||GM(i,r),n=n||Aa[Math.floor(i()*Aa.length)];let a=bn[t],o=Zn[n],c=(1+e*.12)*a.mult,l=o.main==="class"?$e[s].main:o.main,h={[l]:o.base*c},d=["vit",$e[s].main,"crit","critDmg","haste","def"].filter(m=>m!==l);for(let m=0;m<a.affixes-1&&d.length;m++){let b=d.splice(Math.floor(i()*d.length),1)[0];h[b]=(h[b]||0)+Ff[b].base*c*(.7+i()*.6)}for(let m in h)h[m]=m==="crit"||m==="critDmg"||m==="haste"?Math.round(h[m]*1e3)/1e3:Math.max(1,Math.round(h[m]));let u=n==="weapon"?X0.weapon[s]:X0[n],f=`${VM[t][Math.floor(i()*2)]} ${u[Math.floor(i()*u.length)]}`;return{id:`${Date.now().toString(36)}${(WM++).toString(36)}${Math.floor(i()*1e6).toString(36)}`,slot:n,rarity:t,ilvl:e,name:f,stats:h}}pi();rs();xr();var Of="ashen.profile.v1",Ra=20,Ca=36,Pa=12,Ia=2,os=i=>120+i*90,yr=i=>String(i??"").replace(/\s+/g," ").trim().slice(0,Pa);function K0(i,e){return{cls:i,name:e,spec:Lt(i).id,look:Ta(),level:1,xp:0,equipped:{weapon:null,helm:null,armor:null,trinket:null},bag:[]}}var ic=(i,e,t,n)=>Number.isFinite(+i)?Math.max(e,Math.min(t,Math.floor(+i))):n,qM=["current","chars","maxDifficulty","difficulty"];function Y0(i,e){if(!i||typeof i!="object"||!Zn[i.slot]||e&&i.slot!==e||!bn[i.rarity]||typeof i.stats!="object")return null;let t={};for(let[n,s]of Object.entries(i.stats))Number.isFinite(s)&&(t[n]=Math.max(0,Math.min(["crit","critDmg","haste"].includes(n)?1:5e3,s)));return{id:String(i.id).slice(0,40),slot:i.slot,rarity:i.rarity,ilvl:ic(i.ilvl,1,200,1),name:String(i.name||"").slice(0,40),stats:t}}function sc(i,e){let t=yr(e)||"\uBAA8\uD5D8\uAC00",n={chars:{}};for(let s of fi){let r=i?.chars?.[s]||{},a=K0(s,yr(r.name)||t);a.spec=Lt(s,r.spec).id,a.look=Ta(r.look),a.level=ic(r.level,1,Ra,1),a.xp=ic(r.xp,0,1e7,0);for(let o of Aa)a.equipped[o]=Y0(r.equipped?.[o],o);a.bag=(Array.isArray(r.bag)?r.bag:[]).slice(0,Ca).map(o=>Y0(o)).filter(Boolean),n.chars[s]=a}return n.current=fi.includes(i?.current)?i.current:fi[0],n.maxDifficulty=ic(i?.maxDifficulty,1,Math.min(Ps,ui),1),n.difficulty=ic(i?.difficulty,1,n.maxDifficulty,1),n}var J0=i=>Object.fromEntries(qM.map(e=>[e,i[e]]));function XM(){let i="\uBAA8\uD5D8\uAC00"+Math.floor(100+Math.random()*900);return{v:1,uid:jM(),nickname:"",name:i,current:"knight",chars:Object.fromEntries(fi.map(e=>[e,K0(e,i)])),stats:{runs:0,clears:0,bestTime:0,kills:0},maxDifficulty:1,difficulty:1,settings:{master:.8,music:.5,sfx:.85,shake:!0,quality:2,numbers:!0,fps:!1,autoEquip:!0},seenTutorial:!1}}function Z0(){let i;try{i=JSON.parse(localStorage.getItem(Of)||"null")}catch{i=null}let e=XM();return(!i||i.v!==1)&&(i=e),Object.assign(i,sc(i,yr(i.name)||e.name)),(typeof i.uid!="string"||i.uid.length<8)&&(i.uid=e.uid),i.nickname=yr(i.nickname),i.nickname.length<Ia&&(i.nickname=""),i.settings={...e.settings,...i.settings},i.stats={...e.stats,...i.stats},Object.defineProperty(i,"character",{get(){return{...this.chars[this.current],name:this.nickname||this.chars[this.current].name}},enumerable:!1,configurable:!0}),i}function jM(){let i=new Uint8Array(12);return crypto.getRandomValues(i),Array.from(i,e=>e.toString(16).padStart(2,"0")).join("")}var as=null;function Bf(i,e,t){as&&Hf(i),as={local:J0(i),save:t},Object.assign(i,sc(e,ut(i).name))}function Hf(i){if(!as)return;let{local:e}=as;as=null,Object.assign(i,e),Wt(i)}var Q0=()=>!!as;function Wt(i){if(as){as.save(J0(i));try{localStorage.setItem(Of,JSON.stringify({...i,...as.local}))}catch{}return}try{localStorage.setItem(Of,JSON.stringify(i))}catch{}}function ut(i){return i.chars[i.current]}function nd(i,e){let t=Math.min(Ps,ui,e+1);return t<=i.maxDifficulty?0:(i.maxDifficulty=t,t)}function Vf(i,e){let t=yr(e);return t.length>=Ia&&(i.nickname=t),i.nickname}function eg(i,e){let t=ut(i);if(t.level>=Ra)return 0;t.xp+=e;let n=0;for(;t.level<Ra&&t.xp>=os(t.level);)t.xp-=os(t.level),t.level++,n++;return t.level>=Ra&&(t.xp=0),n}function tg(i,e){let t=ut(i);return t.bag.length>=Ca?!1:(t.bag.push(e),!0)}function rc(i,e){let t=ut(i),n=t.bag.findIndex(a=>a.id===e);if(n<0)return!1;let s=t.bag[n],r=t.equipped[s.slot];return t.bag.splice(n,1),r&&t.bag.push(r),t.equipped[s.slot]=s,!0}function ng(i,e){let t=ut(i),n=t.equipped[e];return!n||t.bag.length>=Ca?!1:(t.equipped[e]=null,t.bag.push(n),!0)}function ig(i,e){let t=ut(i);t.bag=t.bag.filter(n=>n.id!==e)}function Is(i,e=null){let t={...i.equipped};return e&&(t[e.slot]=e),Sa(i.cls,i.level,Object.values(t),i.spec)}var Di=(i,e=null)=>F0(Is(i,e));function sg(i,e){return Di(i,e)>Di(i)}function Gf(i,e=[]){let t=ut(i),n=!1;for(let s=0;s<Ca;s++){let r=null,a=0,o=Di(t);for(let c of t.bag){let l=Di(t,c)-o;l>a&&(a=l,r=c)}if(!r)break;rc(i,r.id)&&(n=!0,e.push(r))}return n}var $M={shieldDash:'<path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"/><path d="M2 12h3M1 16h4M2 8h3"/>',judgement:'<path d="M6 18L17 7l1-3-3 1L4 16z"/><path d="M4 21c3-1 6-1 9 0M3 18l3 3"/><path d="M18 14c2 1 3 3 3 5"/>',oath:'<path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"/><path d="M12 8v7M8.5 11.5h7"/>',smite:'<path d="M13 2L5 13h6l-2 9 9-12h-6z"/>',leap:'<path d="M4 20c2-8 6-13 12-15"/><path d="M13 4l4 1-1 4"/><path d="M3 21h10M5 18l-2 3M11 18l2 3"/>',whirl:'<path d="M20 12a8 8 0 1 1-3-6.2"/><path d="M17 3v3h-3"/><path d="M15 12a3 3 0 1 1-1-2.2"/>',shout:'<path d="M3 10v4h4l6 5V5L7 10z"/><path d="M16 9c1 1 1 5 0 6M19 6c2.5 3 2.5 9 0 12"/>',rage:'<circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M19 5l-3 3M8 16l-3 3"/>',flame:'<path d="M12 22c-4 0-7-3-7-7.5 0-3.5 2.2-5.6 3.5-8 .6 1.8 1.4 2.9 2.5 3.5C11 6.5 12 4 14.5 2c.3 3.2 1.8 5 3.2 7 .9 1.4 1.3 3 1.3 4.8C19 18.8 16 22 12 22z"/><path d="M12 22c-1.9 0-3.2-1.4-3.2-3.3 0-1.8 1.3-2.8 2-4.4.5 1 1 1.4 1.7 1.7.2-1.3.7-2.3 1.6-3 .5 1.6 1.9 2.8 1.9 4.9 0 2.4-1.6 4.1-4 4.1z"/>',chain:'<path d="M12 2L6.5 11H11l-3 6"/><path d="M8 17l-1.5 5"/><path d="M11 11l5.5-1-2.5 4.5 5 .5-4 7"/>',taunt:'<path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"/><path d="M12 8v5.5"/><path d="M12 16.5v.5"/>',holy:'<path d="M4 20L16 8"/><path d="M13 5h6v6"/><path d="M8 9L5 8M11 5.5L10.5 2.5M15 16l1 3M18.5 13l3 .5"/>',holyburst:'<path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.8 2.8M16.2 16.2L19 19M19 5l-2.8 2.8M7.8 16.2L5 19"/><path d="M10.5 9.5h3v3h-3z" transform="rotate(45 12 11)"/><path d="M12 9.5v5M9.5 12h5"/>',orb:'<circle cx="14" cy="12" r="5"/><path d="M14 9.5v5M11.5 12h5"/><path d="M2 9h5M3 12h5M2 15h5"/>',roar:'<path d="M4 8c2-3 5-4.5 8-4.5 4.5 0 8 3.5 8 8v1.5l-3 1v3l-3 1V21H9v-3.5c-3-1-5-4-5-7.5z"/><path d="M8.5 10.5h.01M12.5 10.5h.01"/><path d="M9 14.5c1.5 1 3 1 4.5 0"/>',iron:'<path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"/><path d="M8.5 9.5h7M8.5 13h7M12 6.5v10"/>',quake:'<path d="M2 18h20"/><path d="M5 18l2-4 2.5 2 2.5-5 2.5 4 2-2 2 5"/><path d="M12 3v5M9.5 5.5L12 8l2.5-2.5"/>',fan:'<path d="M12 21L5 6M12 21l-2.5-15.5M12 21V5M12 21l2.5-15.5M12 21l7-15"/><path d="M4 5h2M8.5 4.5h2M11 3.5h2M13.5 4.5h2M18 5h2"/>',venom:'<path d="M4 15c0-3 2.5-4 4-4 .5-3 3-5 5.5-5 3.5 0 5.5 2.5 5.5 5.5 1.5.5 2.5 2 2.5 3.5 0 2.5-2 4-4.5 4H7.5C5.5 19 4 17.5 4 15z"/><path d="M9 14.5h.01M13 13h.01M15.5 16h.01"/>',spring:'<ellipse cx="12" cy="18.5" rx="8.5" ry="2.8"/><path d="M12 15V4.5M8.5 8L12 4.5 15.5 8"/><path d="M6.5 11.5v2.5M17.5 11.5v2.5"/>',miracle:'<path d="M12 3l1.6 3.9 3.9 1.6-3.9 1.6L12 14l-1.6-3.9-3.9-1.6 3.9-1.6z"/><path d="M2.5 11.5c2 5 5.2 7.6 9.5 8.8 4.3-1.2 7.5-3.8 9.5-8.8"/><path d="M6 13.5c1.5 2.2 3.5 3.6 6 4.3 2.5-.7 4.5-2.1 6-4.3"/>',passive:'<path d="M12 2.5l2.6 6.9 6.9 2.6-6.9 2.6L12 21.5l-2.6-6.9L2.5 12l6.9-2.6z"/><circle cx="12" cy="12" r="1.6"/>',tree:'<circle cx="12" cy="4.5" r="2"/><circle cx="5.5" cy="19.5" r="2"/><circle cx="18.5" cy="19.5" r="2"/><path d="M12 6.5v5M12 11.5L6.3 17.8M12 11.5l5.7 6.3"/>',palette:'<path d="M12 3a9 9 0 1 0 0 18c1.2 0 1.8-.9 1.4-2-.5-1.2.3-2.5 1.6-2.5H17a4 4 0 0 0 4-4C21 7 17 3 12 3z"/><circle cx="7.5" cy="11" r="1.2"/><circle cx="10" cy="7" r="1.2"/><circle cx="15" cy="7.5" r="1.2"/>',menu:'<path d="M4 6.5h16M4 12h16M4 17.5h16"/>',crossbow:'<path d="M5 19L18.5 5.5"/><path d="M7.5 4c5 .8 11.7 7.5 12.5 12.5"/><path d="M7.5 4L14 12.2 20 16.5"/><path d="M3.5 20.5l3-1 .5-2.5"/>',bow:'<path d="M7 3c6 2.5 9.5 6 9.5 9s-3.5 6.5-9.5 9"/><path d="M7 3v18"/><path d="M3 12h15"/><path d="M15.5 9.5L18 12l-2.5 2.5"/>',volley:'<path d="M3 7h13M3 12h15M3 17h13"/><path d="M13 4.5L16 7l-3 2.5M15 9.5l3 2.5-3 2.5M13 14.5l3 2.5-3 2.5"/>',storm:'<path d="M4 20L20 4M4 20l7-16M4 20l16-7M4 20l3-10M4 20l10-3"/><path d="M17 3.5L20 4l.5 3"/>',pierce:'<path d="M2.5 12h16"/><path d="M15 8l4.5 4-4.5 4"/><path d="M8 6.5v3M8 14.5v3M12 6.5v3M12 14.5v3"/>',arrows:'<path d="M6 3v9M12 5v11M18 3v9"/><path d="M4 10l2 2.5L8 10M10 14l2 2.5 2-2.5M16 10l2 2.5 2-2.5"/><path d="M3 21h18"/>',backstep:'<path d="M21 12H9"/><path d="M13 7l-5 5 5 5"/><path d="M3.5 17.5l2 2 2-2-2-2zM3.5 6.5l2 2 2-2-2-2z"/>',snipe:'<circle cx="12" cy="12" r="7"/><path d="M12 2.5v5M12 16.5v5M2.5 12h5M16.5 12h5"/><circle cx="12" cy="12" r="1.2"/>',sword:'<path d="M14.5 17.5L4 7V4h3l10.5 10.5"/><path d="M13 19l6-6"/><path d="M16 16l4 4"/><path d="M19 21l2-2"/>',axe:'<path d="M4 20L14.5 9.5"/><path d="M12.5 7.5c1.8-2.8 4.6-4.2 7.5-4 .2 2.9-1.2 5.7-4 7.5z"/><path d="M12.5 7.5l4 4"/>',staff:'<path d="M5 21L15.5 8.5"/><circle cx="17.5" cy="6" r="2.8"/><path d="M21.5 2.5l-1 1M13 2.5l.8.8M21.5 10l-.9-.5"/>',dagger:'<path d="M4 20l3.5-3.5"/><path d="M6 14.5L9.5 18"/><path d="M8 16l9-9 3.5-3.5-1 4.5-9 9"/>',helm:'<path d="M4.5 15v-3.5a7.5 7.5 0 0 1 15 0V15"/><path d="M4.5 15h15v4.5h-5l-1-2.5h-3l-1 2.5h-5z"/><path d="M12 4v6"/>',armor:'<path d="M8.5 3L4 6v6l3 1v8h10v-8l3-1V6l-4.5-3c-.8 1.8-2 2.8-3.5 2.8S9.3 4.8 8.5 3z"/><path d="M12 5.8V21M7 13h10"/>',trinket:'<path d="M6.5 3c.3 4.6 2.2 7.5 5.5 8.6 3.3-1.1 5.2-4 5.5-8.6"/><path d="M12 11.6l-3.2 4.2L12 21l3.2-5.2z"/>',frost:'<path d="M12 2v20M3.5 7l17 10M20.5 7l-17 10"/><path d="M9 4l3 3 3-3M9 20l3-3 3 3"/>',meteor:'<circle cx="15" cy="15" r="5"/><path d="M3 3l7.5 7.5M6 2l6 6M2 6l6 6"/>',shadowStab:'<path d="M3 21l10-10"/><path d="M13 11l7-7 1 1-7 7z"/><path d="M4 14h4M2 18h3"/>',blades:'<path d="M4 4l7 7M20 4l-7 7M4 20l7-7M20 20l-7-7"/><circle cx="12" cy="12" r="2"/>',smoke:'<path d="M6 18a4 4 0 0 1 0-8 5 5 0 0 1 9.5-1.5A4 4 0 1 1 18 18z"/><path d="M8 21h8"/>',execute:'<path d="M5 5l14 14M19 5L5 19"/><circle cx="12" cy="12" r="9"/>',dodge:'<path d="M4 18c4 0 5-12 12-12"/><path d="M13 3l3 3-3 3"/><path d="M3 21h6"/>',potion:'<path d="M9 3h6M10 3v5L6 15a4 4 0 0 0 3.5 6h5A4 4 0 0 0 18 15l-4-7V3"/><path d="M7 15h10"/>'},YM={kn_q:"shieldDash",kn_w:"judgement",kn_e:"oath",kn_r:"smite",bb_q:"leap",bb_w:"whirl",bb_e:"shout",bb_r:"rage",kn_taunt:"taunt",kn_holy:"holy",mg_q:"flame",mg_w:"frost",mg_chain:"chain",mg_r:"meteor",mg_holy:"holyburst",mg_spring:"spring",mg_orb:"orb",mg_miracle:"miracle",bb_roar:"roar",bb_iron:"iron",bb_quake:"quake",rg_fan:"fan",rg_venom:"venom",ar_q:"pierce",ar_w:"arrows",ar_e:"backstep",ar_r:"snipe",ab_q:"volley",ab_r:"storm",rg_q:"shadowStab",rg_w:"blades",rg_e:"smoke",rg_r:"execute",dodge:"dodge",potion:"potion"};function tn(i,e="currentColor"){return`<svg viewBox="0 0 24 24" fill="none" stroke="${e}" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${$M[YM[i]||i]||""}</svg>`}var Mr={knight:"oath",barbarian:"rage",mage:"staff",rogue:"shadowStab",archer:"crossbow"},KM={knight:"sword",barbarian:"axe",mage:"staff",rogue:"dagger",archer:"crossbow"},ac=(i,e,t)=>i!=="weapon"?i:t==="ranger"?"bow":KM[e];Ut();var Bt=i=>String(i).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),ke=(i,e=document)=>e.querySelector(i),id=class{constructor(e,{profile:t,engine:n,audio:s,onGear:r,onMenu:a}){this.profile=t,this.engine=n,this.audio=s,this.onGear=r,this.onMenu=a,this.cache={},this.root=document.createElement("div"),this.root.id="hud",this.root.className="hidden",this.root.innerHTML=`
      <div class="h-top">
        <div class="room-title"></div>
        <div class="boss hidden">
          <div class="boss-name"><span class="bn"></span><span class="bt"></span></div>
          <div class="boss-bar"><i class="lag"></i><i class="hp"></i><b class="bhp"></b></div>
          <div class="judge hidden"><div class="jl">\uC655\uAD00\uC758 \uC2EC\uD310 <span class="jt"></span></div><div class="jbar"><i></i></div></div>
        </div>
      </div>
      <div class="party"></div>
      <canvas class="minimap" width="200" height="200"></canvas>
      <div class="diff-tag"></div>
      <div class="bottom">
        <div class="me-plate"><div class="pic"></div><div class="mp-name"><b></b><em></em></div><div class="mp-lv"><em></em><small>Lv</small><b></b></div></div>
        <div class="hp-wrap"><div class="hpbar"><i class="sh"></i><i class="hp"></i><b></b></div></div>
        <div class="skills"></div>
        <div class="xp" title="\uC9C1\uC5C5 \uACBD\uD5D8\uCE58"><i></i><span></span></div>
      </div>
      <div class="announce"><div class="a-title"></div><div class="a-sub"></div></div>
      <div class="loot-feed"></div>
      <div class="gain-feed"></div>
      <div class="dmg-layer"></div>
      <div class="plates"></div>
      <div class="boss-intro"><div class="bi-title"></div><div class="bi-name"></div></div>
      <div class="chapter-card"><div class="cc-num"></div><div class="cc-name"></div><p class="cc-text"></p><p class="cc-hint"></p></div>
      <div class="cine-bars"><i></i><i></i></div>
      <div class="portal-prompt hidden"></div>
      <div class="h-menu">
        <button class="hbtn" data-hud="inv" title="\uC7A5\uBE44 (Tab)">${tn("armor")}<kbd>Tab</kbd></button>
        <button class="hbtn" data-hud="menu" title="\uBA54\uB274 (Esc)">${tn("menu")}<kbd>Esc</kbd></button>
      </div>
      <div class="inventory hidden"></div>`,e.appendChild(this.root),this.dmgLayer=ke(".dmg-layer",this.root),this.plates=ke(".plates",this.root),this.plateMap=new Map,this.nums=[],this.mini=ke(".minimap",this.root).getContext("2d"),this.v3=new C,this.buildSkills(),ke(".inventory",this.root).addEventListener("click",o=>this.onInvClick(o)),ke(".inventory",this.root).addEventListener("change",o=>{o.target.dataset.auto!==void 0&&this.setAutoEquip(o.target.checked)}),ke(".h-menu",this.root).addEventListener("click",o=>{let c=o.target.closest("[data-hud]");c&&(c.blur(),c.dataset.hud==="inv"?this.toggleInventory():this.onMenu?.())})}setAutoEquip(e){this.profile.settings.autoEquip=e,e&&Gf(this.profile)&&(this.audio.play("equip",{}),this.onGear?.()),Wt(this.profile),this.renderInventory()}show(e){this.root.classList.toggle("hidden",!e),e&&(this.cache={},this.buildSkills())}set(e,t,n){this.cache[e]!==t&&(this.cache[e]=t,n(t))}buildSkills(){let e=ut(this.profile),t=$e[e.cls],n=Lt(e.cls,e.spec).skills,s=[...["q","w","e","r"].map(r=>({k:r,id:n[r],label:r.toUpperCase()})),{k:"dodge",id:"dodge",label:"SPC"},{k:"potion",id:"potion",label:"F"}];ke(".skills",this.root).innerHTML=s.map(r=>{let a=Ot[r.id],o=a?.name?`<div class="tip"><b>${a.name}</b><span>${a.desc}</span><em>\uC7AC\uC0AC\uC6A9 ${a.cd}\uCD08</em></div>`:r.k==="dodge"?'<div class="tip"><b>\uD68C\uD53C</b><span>\uC9E7\uC740 \uBB34\uC801 \uAD6C\uB974\uAE30</span></div>':'<div class="tip"><b>\uD68C\uBCF5 \uBB3C\uC57D</b><span>\uCD5C\uB300 \uC0DD\uBA85\uB825 35% \uD68C\uBCF5</span></div>';return`<div class="slot ${r.k==="r"?"ult":""} ${r.k==="dodge"||r.k==="potion"?"util":""}" data-k="${r.k}" style="--c:${t.trail}">${tn(r.id)}<div class="cd"></div><span class="cdt"></span><kbd>${r.label}</kbd>${r.k==="potion"?'<span class="charges"></span>':""}${o}</div>`}).join("")}flashSlot(e){let t=ke(`.slot[data-k="${e}"]`,this.root);t&&(t.classList.remove("deny"),t.offsetWidth,t.classList.add("deny"))}announce(e,t="#fff",n=2,s=!1,r=""){let a=ke(".announce",this.root);ke(".a-title",a).textContent=e,ke(".a-title",a).style.color=t,ke(".a-sub",a).textContent=r,a.classList.toggle("big",s),a.classList.remove("show"),a.offsetWidth,a.classList.add("show"),clearTimeout(this.annT),this.annT=setTimeout(()=>a.classList.remove("show"),n*1e3)}chapterIntro(e){this.card(`\uC81C${e}\uC7A5`,en[e].name,en[e].intro,"",5200)}chapterClear(e,t,n,s){let r=t?`\uC81C${t}\uC7A5 \xB7 ${en[t].name}`:"\uC5EC\uC815\uC758 \uB05D",a=`${n?`\uC81C${n}\uC7A5\uC774 \uC5F4\uB838\uC2B5\uB2C8\uB2E4. `:""}\uBCF4\uC2A4\uAC00 \uC788\uB358 \uC790\uB9AC\uC5D0 ${r}(\uC73C)\uB85C \uAC00\uB294 \uD3EC\uD0C8\uC774 \uC5F4\uB838\uC2B5\uB2C8\uB2E4. ${s?"\uD3EC\uD0C8\uC5D0 \uB4E4\uC5B4\uAC00\uC138\uC694.":"\uC6D4\uB4DC \uC8FC\uC778\uC774 \uD3EC\uD0C8\uC5D0 \uB4E4\uC5B4\uAC00\uBA74 \uBAA8\uB450 \uC900\uBE44\uB97C \uB204\uB974\uC138\uC694."}`;this.card(`\uC81C${e}\uC7A5 \uC644\uB8CC`,en[e].name,en[e].outro,a,9e3)}card(e,t,n,s,r){let a=ke(".chapter-card",this.root);ke(".cc-num",a).textContent=e,ke(".cc-name",a).textContent=t,ke(".cc-text",a).textContent=n,ke(".cc-hint",a).textContent=s,a.classList.remove("show"),a.offsetWidth,a.classList.add("show"),clearTimeout(this.ccT),this.ccT=setTimeout(()=>a.classList.remove("show"),r)}cinema(e){this.root.classList.toggle("cine",e)}portalPrompt(e,{host:t,localId:n,onReady:s}){let r=ke(".portal-prompt",this.root),a=e.s==="wait"&&e.need.length>0;if(r.classList.toggle("hidden",!a),!a)return;let o=e.next?`\uC81C${e.next}\uC7A5 \xB7 ${en[e.next].name}`:"\uC5EC\uC815\uC758 \uB05D",c=`${e.ready.length} / ${e.need.length}`;t?r.innerHTML=`<b>${o}</b><span>\uD30C\uD2F0\uC6D0 \uC900\uBE44 ${c} \xB7 \uBAA8\uB450 \uC900\uBE44\uB418\uBA74 \uCD9C\uBC1C\uD569\uB2C8\uB2E4</span>`:e.ready.includes(n)?r.innerHTML=`<b>${o}</b><span>\uC900\uBE44 \uC644\uB8CC \xB7 \uB2E4\uB978 \uD30C\uD2F0\uC6D0\uC744 \uAE30\uB2E4\uB9AC\uB294 \uC911 (${c})</span>`:(r.innerHTML=`<b>${o}</b><span>\uC6D4\uB4DC \uC8FC\uC778\uC774 \uD3EC\uD0C8\uC5D0 \uB4E4\uC5B4\uAC14\uC2B5\uB2C8\uB2E4 (${c})</span><button class="btn primary small" data-ready>\uC900\uBE44</button>`,r.querySelector("[data-ready]").onclick=l=>{l.currentTarget.disabled=!0,s()})}bossIntro(e,t){let n=ke(".boss-intro",this.root);ke(".bi-title",n).textContent=t,ke(".bi-name",n).textContent=e,n.classList.remove("show"),n.offsetWidth,n.classList.add("show"),setTimeout(()=>n.classList.remove("show"),3400)}damage(e,t,n,s,r={}){if(!this.profile.settings.numbers&&!r.taken)return;let a=document.createElement("div");a.className="dmg"+(r.crit?" crit":"")+(r.back?" back":"")+(r.taken?" taken":"")+(r.heal?" heal":"")+(r.blocked?" blocked":"")+(r.mine===!1?" other":""),a.innerHTML=r.text?`<span>${r.text}</span>`:`${r.back?"<small>\uBC31\uC5B4\uD0DD</small>":""}<span>${r.heal?"+":""}${s.toLocaleString()}</span>`,r.color&&(a.style.color=r.color),this.dmgLayer.appendChild(a),this.nums.push({el:a,x:e+(Math.random()-.5)*.8,y:t,z:n,t:0,life:r.crit?1.1:.85}),this.nums.length>60&&this.nums.shift().el.remove()}lootFeed(e,t,n=!1){let s=bn[e.rarity],r=document.createElement("div");r.className="loot r-"+e.rarity;let a=ut(this.profile);r.innerHTML=t?`<i class="lg" style="color:${s.color}">${tn(ac(e.slot,a.cls,a.spec))}</i><span class="lr" style="color:${s.color}">${s.name}</span> ${Bt(e.name)} <em>${Zn[e.slot].name}${n?" \xB7 \uC790\uB3D9 \uC7A5\uCC29":""}</em>`:'<span style="color:#ff8a7a">\uAC00\uBC29\uC774 \uAC00\uB4DD \uCC28 \uD68D\uB4DD\uD558\uC9C0 \uBABB\uD568</span>';let o=ke(".loot-feed",this.root);for(o.prepend(r);o.children.length>6;)o.lastChild.remove();setTimeout(()=>r.classList.add("out"),5e3),setTimeout(()=>r.remove(),5600),s.tier>=3&&this.announce(`${s.name} \uC7A5\uBE44 \uD68D\uB4DD!`,s.color,1.8,!1,e.name)}statGain(e,t,n,s=[]){let r=ut(this.profile),a=[],o=(f,m,b)=>{Math.abs(m)>1e-4&&a.push(`<li class="${m>0?"up":"down"}">${f} <b>${m>0?"+":""}${b(m)}</b></li>`)},c=f=>Math.round(f).toLocaleString(),l=f=>`${(f*100).toFixed(1)}%`;for(let f of qh)o(ss[f],t[f]-e[f],c);if(o(mr(r.cls),t.atk-e.atk,c),o("\uC0DD\uBA85\uB825",t.hp-e.hp,c),o("\uBC29\uC5B4\uB825",t.def-e.def,c),o("\uCE58\uBA85\uD0C0 \uD655\uB960",t.crit-e.crit,l),o("\uCE58\uBA85\uD0C0 \uD53C\uD574",t.critDmg-e.critDmg,l),o("\uC2E0\uC18D",Li(t)-Li(e),l),!a.length)return;let h=document.createElement("div");h.className="gain";let d=s.map(f=>{let m=bn[f.rarity];return`<div class="gi" style="--rc:${m.color}"><i>${tn(ac(f.slot,r.cls,r.spec))}</i><div><b>${Bt(f.name)}</b><em>${m.name} \xB7 ${Zn[f.slot].name}</em></div></div>`}).join("");h.innerHTML=`<h5>${n}</h5>${d}<ul>${a.join("")}</ul>`;let u=ke(".gain-feed",this.root);for(u.prepend(h);u.children.length>3;)u.lastChild.remove();setTimeout(()=>h.classList.add("out"),3800),setTimeout(()=>h.remove(),4400)}update(e,t,n,s){let r=e.players.find(m=>m.id===t.localId),a=t.me(),o=e.rooms.findIndex(m=>m==="active"),c=e.rooms.findIndex(m=>m==="idle"),l=o>=0?yt[o].name:c>=0?`\uB2E4\uC74C: ${yt[c].name}`:"";this.set("room",e.boss&&!e.boss.dead?"":l,m=>{ke(".room-title",this.root).textContent=m}),this.set("diff",e.chapter||1,m=>{ke(".diff-tag",this.root).innerHTML=`\uC81C<b>${m}</b>\uC7A5 \xB7 ${en[m].name}`});let h=e.boss;if(this.set("bossOn",!!(h&&!h.dead),m=>ke(".boss",this.root).classList.toggle("hidden",!m)),h&&!h.dead){this.set("bossName",`${h.kind}:${h.enraged}`,()=>{let g=rt[h.kind];ke(".bn",this.root).textContent=g.name,ke(".bt",this.root).textContent=h.enraged?"\uACA9\uB178":g.title,ke(".boss",this.root).classList.toggle("enraged",h.enraged)});let m=h.hp/h.maxHp;this.set("bossHp",`${h.id}:${Math.round(m*1e3)}`,()=>{let g=Math.round(m*1e3);ke(".boss-bar .hp",this.root).style.width=g/10+"%",ke(".bhp",this.root).textContent=`${h.hp.toLocaleString()} / ${h.maxHp.toLocaleString()}`,clearTimeout(this.lagT),this.lagT=setTimeout(()=>{let p=ke(".boss-bar .lag",this.root);p&&(p.style.width=g/10+"%")},450)});let b=h.gaugeMax>0;this.set("judge",b,g=>ke(".judge",this.root).classList.toggle("hidden",!g)),b&&(this.set("jg",Math.round(h.gauge/h.gaugeMax*200),g=>{ke(".jbar i",this.root).style.width=g/2+"%"}),this.set("jt",Math.ceil(h.judgeT),g=>{ke(".jt",this.root).textContent=`${g}\uCD08`}))}let d=e.players.filter(m=>m.id!==t.localId),u=d.map(m=>`${m.id}:${m.alive}:${Math.round(m.hp/m.maxHp*50)}:${Math.round((m.shield||0)/m.maxHp*50)}:${Math.round((m.revive||0)*4)}`).join("|");if(this.set("party",u,()=>{ke(".party",this.root).innerHTML=d.map(m=>{let b=$e[m.cls],g=Math.max(0,m.hp/m.maxHp)*100,p=Math.min(100,(m.shield||0)/m.maxHp*100);return`<div class="pf ${m.alive?"":"down"} ${m.id===t.localId?"me":""}"><div class="pic" style="--c:${b.trail}">${tn(Mr[m.cls])}</div><div class="pinfo"><div class="pn">${Bt(m.name)} <em>Lv${m.level} ${Lt(m.cls,m.spec).name}</em></div><div class="pbar"><i class="hp" style="width:${g}%"></i><i class="sh" style="width:${p}%"></i></div>${m.alive?"":`<div class="rv">\uBD80\uD65C ${Math.round(m.revive/4*100)}%</div>`}</div></div>`}).join("")}),r&&(this.set("me",`${r.name}|${r.cls}|${r.spec}|${r.level}|${r.alive}`,()=>{let m=ke(".me-plate",this.root);m.classList.toggle("down",!r.alive);let b=ke(".pic",m);b.style.setProperty("--c",$e[r.cls].trail),b.innerHTML=tn(Mr[r.cls]),ke(".mp-name b",m).textContent=r.name,ke(".mp-name em",m).textContent=`${$e[r.cls].name} \xB7 ${Lt(r.cls,r.spec).name}`,ke(".mp-lv b",m).textContent=r.level}),this.set("hp",`${r.hp}/${r.maxHp}/${Math.round(r.shield||0)}`,()=>{ke(".hpbar .hp",this.root).style.width=Math.max(0,r.hp/r.maxHp*100)+"%",ke(".hpbar .sh",this.root).style.width=Math.min(100,(r.hp+(r.shield||0))/r.maxHp*100)+"%",ke(".hpbar b",this.root).textContent=`${r.hp.toLocaleString()} / ${r.maxHp.toLocaleString()}${r.shield>0?` (+${Math.round(r.shield)})`:""}`,ke(".hpbar",this.root).classList.toggle("low",r.hp/r.maxHp<.3)})),a){let m=ut(this.profile),b=Lt(m.cls,m.spec).skills;for(let g of["q","w","e","r","dodge","potion"]){let p=a.cds[g]||0,v=g==="dodge"?Yh:g==="potion"?Kh:Ot[b[g]].cd*(gr(m.cls,m.spec)==="cdr"?1-Li(a.st):1),_=Math.min(1,p/v);this.set("cd"+g,Math.round(_*60)+":"+Math.ceil(p),()=>{let x=ke(`.slot[data-k="${g}"]`,this.root);x&&(x.querySelector(".cd").style.background=_>0?`conic-gradient(rgba(5,5,10,.78) ${_*360}deg, transparent 0)`:"none",x.querySelector(".cdt").textContent=p>.05?p<1?p.toFixed(1):Math.ceil(p):"",x.classList.toggle("ready",p<=.05),p<=.05&&this.cache["was"+g]>.05&&(x.classList.remove("pop"),x.offsetWidth,x.classList.add("pop")),this.cache["was"+g]=p)})}this.set("pots",a.potions,g=>{let p=ke('.slot[data-k="potion"] .charges',this.root);p&&(p.textContent=g),ke('.slot[data-k="potion"]',this.root)?.classList.toggle("empty",g<=0)})}let f=ut(this.profile);this.set("xp",`${f.level}:${f.xp}`,()=>{ke(".xp i",this.root).style.width=Math.min(100,f.xp/os(f.level)*100)+"%",ke(".xp span",this.root).textContent=`Lv ${f.level}  \xB7  ${f.xp.toLocaleString()} / ${os(f.level).toLocaleString()}`,ke(".mp-lv em",this.root).textContent=`\uC9C1\uC5C5 \uACBD\uD5D8\uCE58 ${Math.floor(Math.min(100,f.xp/os(f.level)*100))}%`}),this.updateNumbers(1/60),this.updatePlates(e,n,t),Math.floor(s*10)!==this.miniTick&&(this.miniTick=Math.floor(s*10),this.drawMinimap(e,t))}updateNumbers(e){let t=this.engine;for(let n=this.nums.length-1;n>=0;n--){let s=this.nums[n];if(s.t+=e,s.t>s.life){s.el.remove(),this.nums.splice(n,1);continue}this.v3.set(s.x,s.y+s.t*1.6,s.z);let r=t.toScreen(this.v3),a=s.t/s.life,o=s.t<.08?1+(.08-s.t)*8:1;s.el.style.transform=`translate(${r.x}px, ${r.y}px) translate(-50%, -50%) scale(${o})`,s.el.style.opacity=a>.7?(1-a)/.3:1}}updatePlates(e,t,n){let s=new Set,r=(a,o,c,l)=>{s.add(a);let h=this.plateMap.get(a);h||(h=document.createElement("div"),this.plates.appendChild(h),this.plateMap.set(a,h)),h._html!==c&&(h.innerHTML=c,h._html=c),h.className="plate "+l;let d=this.engine.toScreen(o);h.style.transform=`translate(${d.x}px, ${d.y}px) translate(-50%, -100%)`};for(let a of e.enemies){if(a.dead||rt[a.kind].boss||a.act==="spawn"||!a.elite&&a.hp>=a.maxHp)continue;let o=t.eActors.get(a.id);if(!o)continue;this.v3.copy(o.headPos),this.v3.y+=.9*(a.elite?1.3:1);let c=Math.round(a.hp/a.maxHp*100);r("e"+a.id,this.v3,`${a.elite?`<div class="en">\uC815\uC608 ${rt[a.kind].name}</div>`:""}<div class="eb"><i style="width:${c}%"></i></div>`,a.elite?"elite":"")}for(let a of e.players){if(a.id===n.localId)continue;let o=t.pActors.get(a.id);if(!o)continue;this.v3.copy(o.headPos),this.v3.y+=.8;let c=Math.round(a.hp/a.maxHp*100);r("p"+a.id,this.v3,`<div class="an">${Bt(a.name)}</div><div class="ab"><i style="width:${c}%"></i></div>`,"ally")}for(let[a,o]of this.plateMap)s.has(a)||(o.remove(),this.plateMap.delete(a))}drawMinimap(e,t){let n=this.mini,s=200,r=e.players.find(c=>c.id===t.localId);if(!r)return;let a=2.2;n.clearRect(0,0,s,s),n.save(),n.beginPath(),n.arc(s/2,s/2,s/2-2,0,Math.PI*2),n.clip(),n.fillStyle="rgba(8,8,14,0.78)",n.fillRect(0,0,s,s),n.translate(s/2-r.x*a,s/2-r.z*a);let o=4*a;for(let c=0;c<Xo;c++)for(let l=0;l<ns;l++){let h=jo[c][l];if(h===" ")continue;let d=yt.findIndex(f=>l>=f.x0&&l<=f.x1&&c>=f.z0&&c<=f.z1),u=d>=0?e.rooms[d]:"c";n.fillStyle=h===","?"#3a3528":u==="active"?"#5a2a26":u==="cleared"?"#4a4652":"#2c2a33",n.fillRect((l-.5)*o,(c-.5)*o,o+.5,o+.5)}for(let c of e.enemies)c.dead||(n.fillStyle=rt[c.kind].boss?"#ff3050":c.elite?"#ff9a3c":"#e04a3a",n.beginPath(),n.arc(c.x*a,c.z*a,rt[c.kind].boss?5:2.3,0,Math.PI*2),n.fill());for(let c of e.players)n.fillStyle=c.id===t.localId?"#ffe7a0":"#8fd0ff",n.beginPath(),n.arc(c.x*a,c.z*a,3.4,0,Math.PI*2),n.fill();n.restore(),n.strokeStyle="rgba(255,220,170,0.35)",n.lineWidth=2,n.beginPath(),n.arc(s/2,s/2,s/2-2,0,Math.PI*2),n.stroke()}toggleInventory(e){let t=ke(".inventory",this.root),n=e??t.classList.contains("hidden");if(t.classList.toggle("hidden",!n),n&&this.profile.settings.autoEquip){let s=Is(ut(this.profile)),r=[];Gf(this.profile,r)&&(Wt(this.profile),this.onGear?.(),this.statGain(s,Is(ut(this.profile)),"\uC790\uB3D9 \uC7A5\uCC29",r))}n&&this.renderInventory(),this.audio.play("ui",{})}renderInventory(){let e=ut(this.profile),t=(n,s)=>{if(!n)return`<div class="islot empty">${s?`${tn(ac(s,e.cls,e.spec))}<span>${Zn[s].name}</span>`:""}</div>`;let r=bn[n.rarity];return`<div class="islot r-${n.rarity}" data-id="${n.id}" ${s?`data-slot="${s}"`:""} style="--rc:${r.color}"><div class="ig">${tn(ac(n.slot,e.cls,e.spec),r.color)}</div><div class="il">${n.ilvl}</div>${this.tooltip(n,e)}</div>`};ke(".inventory",this.root).innerHTML=`
      <div class="inv-head"><h3>${Bt(this.profile.character.name)} <em>Lv ${e.level} ${Lt(e.cls,e.spec).name}</em></h3><label class="switch" title="\uC0C8 \uC7A5\uBE44\uAC00 \uB354 \uAC15\uD558\uBA74 \uBC14\uB85C \uC7A5\uCC29"><input type="checkbox" data-auto ${this.profile.settings.autoEquip?"checked":""}><i></i>\uCD5C\uAC15 \uC7A5\uBE44 \uC790\uB3D9 \uC7A5\uCC29</label><div class="gs">\uC804\uD22C\uB825 <b>${Di(e)}</b></div><button class="x" data-act="close">\u2715</button></div>
      <div class="inv-body">
        <div class="equip">${Aa.map(n=>`<div class="eq"><label>${Zn[n].name}</label>${t(e.equipped[n],n)}</div>`).join("")}</div>
        <div class="bag">${Array.from({length:Ca},(n,s)=>t(e.bag[s])).join("")}</div>
      </div>
      ${this.statSheet(e)}
      <p class="inv-hint">\uAC00\uBC29 \uC544\uC774\uD15C \uD074\uB9AD: \uC7A5\uCC29 \xB7 \uC7A5\uCC29 \uC544\uC774\uD15C \uD074\uB9AD: \uD574\uC81C \xB7 Shift+\uD074\uB9AD: \uBC84\uB9AC\uAE30</p>`}statSheet(e){let t=Is(e),n={[t.main]:`${mr(e.cls)} +${Xh}`,vit:`\uC0DD\uBA85\uB825 +${jh}`,str:`\uBC29\uC5B4\uB825 +${If}`,dex:`\uCE58\uBA85\uD0C0 +${(kf*100).toFixed(1)}%`},s=a=>`${(a*100).toFixed(1)}%`,r=[[mr(e.cls),Math.round(t.atk)],["\uC0DD\uBA85\uB825",Math.round(t.hp).toLocaleString()],["\uBC29\uC5B4\uB825",Math.round(t.def)],["\uCE58\uBA85\uD0C0 \uD655\uB960",s(t.crit)],["\uCE58\uBA85\uD0C0 \uD53C\uD574",`${Math.round(t.critDmg*100)}%`],[`\uC2E0\uC18D \xB7 ${$h[gr(e.cls,e.spec)]}`,s(Li(t))]];return`<div class="sheet">
      <div class="attrs">${qh.map(a=>`<div class="at ${a===t.main?"main":""}" title="1\uB2F9 ${n[a]}"><span>${ss[a]}${a===t.main?"<i>\uC8FC\uC2A4\uD0EF</i>":""}</span><b>${t[a]}</b><em>1\uB2F9 ${n[a]}</em></div>`).join("")}</div>
      <div class="derived">${r.map(([a,o])=>`<div><span>${a}</span><b>${o}</b></div>`).join("")}</div>
    </div>`}tooltip(e,t){let n=bn[e.rarity],r=t.equipped[e.slot]?.id===e.id?null:Di(t,e)-Di(t),a=$e[t.cls].main,o=(c,l)=>c===a?` <em>(${mr(t.cls)} +${Math.round(l)*Xh})</em>`:c==="vit"?` <em>(\uC0DD\uBA85\uB825 +${Math.round(l)*jh})</em>`:"";return`<div class="itip" style="--rc:${n.color}"><b style="color:${n.color}">${Bt(e.name)}</b><div class="im">${n.name} ${Zn[e.slot].name} \xB7 \uC544\uC774\uD15C \uB808\uBCA8 ${e.ilvl}</div><ul>${Object.entries(e.stats).map(([c,l])=>`<li>${j0(c,l,t.cls)}${o(c,l)}</li>`).join("")}</ul>${r!==null?`<div class="cmp ${r>=0?"up":"down"}">\uC7A5\uCC29\uD558\uBA74 \uC804\uD22C\uB825 ${r>=0?"+":""}${r}</div>`:""}</div>`}onInvClick(e){if(e.target.closest('[data-act="close"]'))return this.toggleInventory(!1);let t=e.target.closest(".islot[data-id]");if(!t)return;let n=this.profile;e.shiftKey&&!t.dataset.slot?ig(n,t.dataset.id):t.dataset.slot?ng(n,t.dataset.slot):rc(n,t.dataset.id),Wt(n),this.audio.play("equip",{}),this.onGear?.(),this.renderInventory()}};Ut();pi();var JM=5,sd=class{constructor({onSend:e}){this.onSend=e,this.mode=null,this.el=document.createElement("div"),this.el.className="chat hidden",this.el.innerHTML='<div class="chat-log"></div><form class="chat-form"><input class="chat-in" maxlength="100" placeholder="\uBA54\uC2DC\uC9C0 \uC785\uB825 \xB7 \uBE48 \uCE78\uC5D0\uC11C Enter\uB85C \uB2EB\uAE30" autocomplete="off" spellcheck="false" /></form>',this.log=this.el.querySelector(".chat-log"),this.inp=this.el.querySelector(".chat-in"),this.over=document.createElement("div"),this.over.className="overhead",document.body.appendChild(this.over),this.bubbles=new Map,this.tags=new Map,this.v3=new C,this.el.querySelector("form").addEventListener("submit",t=>t.preventDefault()),this.inp.addEventListener("keydown",t=>{if(t.stopPropagation(),t.code==="Escape"){this.inp.blur();return}if(t.key!=="Enter"||t.isComposing||t.keyCode===229)return;t.preventDefault();let n=this.inp.value.trim();this.inp.value="",n?this.onSend(n):this.inp.blur()}),this.inp.addEventListener("focus",()=>this.el.classList.add("open")),this.inp.addEventListener("blur",()=>this.el.classList.remove("open")),addEventListener("keydown",t=>{t.code!=="Enter"||!this.mode||t.target instanceof HTMLInputElement||(t.preventDefault(),this.inp.focus())})}mount(e,t){this.mode=t,e.appendChild(this.el),this.el.className=`chat ${t}`,this.log.scrollTop=this.log.scrollHeight}close(){this.mode=null,this.inp.blur(),this.el.remove(),this.log.innerHTML="";for(let e of this.bubbles.values())e.el.remove();this.bubbles.clear();for(let e of this.tags.values())e.remove();this.tags.clear()}add(e,t){let n=document.createElement("div");for(n.className="cl"+(e.sys?" sys":"")+(e.id===t?" me":""),e.sys?n.textContent=e.text:n.innerHTML=`<b style="--c:${$e[e.cls]?.trail||"#e3b866"}">${Bt(e.name)}</b><span>${Bt(e.text)}</span>`,this.log.appendChild(n);this.log.children.length>80;)this.log.firstChild.remove();this.log.scrollTop=this.log.scrollHeight,e.sys||this.bubble(e.id,e.text)}bubble(e,t){let n=this.bubbles.get(e);n||(n={el:document.createElement("div")},n.el.className="bubble",this.over.appendChild(n.el),this.bubbles.set(e,n)),n.el.textContent=t,n.t=JM}place(e,t,n,s){this.v3.copy(t.headPos),this.v3.y+=n;let r=s.toScreen(this.v3);e.style.transform=`translate(${r.x}px, ${r.y}px) translate(-50%, -100%)`}tagNames(e,t){let n=new Set;for(let s of e){n.add(s.id);let r=this.tags.get(s.id);r||(r=document.createElement("div"),r.className="tagname",r.style.setProperty("--c",$e[s.cls]?.trail||"#e3b866"),this.over.appendChild(r),this.tags.set(s.id,r)),r.textContent!==s.name&&(r.textContent=s.name),r.classList.toggle("me",!!s.me),this.place(r,s.actor,1.05,t)}for(let[s,r]of this.tags)n.has(s)||(r.remove(),this.tags.delete(s))}update(e,t,n,s,r){if(!this.mode)return;let a=this.mode==="lobby";if(a){let o=[];for(let c of t){let l=n.get(c.id);l&&o.push({id:c.id,name:c.name,cls:c.cls,actor:l,me:c.id===r})}this.tagNames(o,s)}for(let[o,c]of this.bubbles){c.t-=e;let l=n.get(o);if(c.t<=0||!l){c.el.remove(),this.bubbles.delete(o);continue}this.place(c.el,l,a?1.75:1.5,s),c.el.style.opacity=c.t<.4?c.t/.4:1}}};Ut();Qh();pi();rs();var rd=(i,e)=>i+Math.random()*(e-i);function rg(i,e){let{vfx:t,engine:n,audio:s,hud:r}=i,a=i.session.localId,o=i.listener(),c=(l,h)=>({x:l,z:h,L:o});switch(e.k){case"act":{let l=i.pActors.get(e.id),h=Ot[e.a];if(e.a==="dodge"){s.play("dodge",c(l?.root.position.x??0,l?.root.position.z??0));break}if(e.a==="potion"){s.play("potion",{});break}if(h?.name&&(s.play("skill",c(l?.root.position.x??0,l?.root.position.z??0)),l)){let d=h.cd>=18;t.rune(l.root.position.x,l.root.position.z,Wf(i,e.id),d?3.2:1.7,d?.9:.55),d&&t.flash(l.root.position.x,1.5,l.root.position.z,Wf(i,e.id),30,10)}(e.a==="kn_e"||e.a==="bb_e"||e.a==="kn_taunt")&&s.play("shout",{}),(e.a==="mg_r"||e.a==="kn_r"||e.a==="mg_miracle")&&s.play("charge",{});break}case"swing":{let l=e.team==="player"?Wf(i,e.id):"#ff5a3a",h=1.1;switch(e.team==="player"&&(e.fx==="slash"||e.fx==="smash"||e.fx==="spin"||e.fx==="blades")&&t.arc(e.x,h+.02,e.z,e.dir,e.fx==="spin"?2.6:2.5,e.fx==="spin"?6.1:e.fx==="blades"?3.3:e.fx==="smash"?1.5:2.1,"#fff4dc",{life:.18,reverse:Math.random()<.5}),e.fx){case"slash":t.arc(e.x,h,e.z,e.dir,3.1,2.3,l,{reverse:Math.random()<.5}),s.play("swing",c(e.x,e.z));break;case"smash":t.arc(e.x,h+.2,e.z,e.dir,3.4,1.6,l,{tilt:1.2,life:.3}),t.spark(e.x+Math.cos(e.dir)*2.4,.2,e.z+Math.sin(e.dir)*2.4,{n:14,color:"#d8c7a8",speed:5,normal:!0,bright:1,size:.25}),s.play("swingHeavy",c(e.x,e.z));break;case"thrust":t.arc(e.x,h,e.z,e.dir,4,.35,l,{life:.22}),s.play("swing",c(e.x,e.z));break;case"snipe":{t.arc(e.x,1.2,e.z,e.dir,20,.12,"#d8ffb0",{life:.35});for(let d=1;d<20;d+=1.2)t.spark(e.x+Math.cos(e.dir)*d,1.2,e.z+Math.sin(e.dir)*d,{n:2,color:"#e8ffc8",speed:2,size:.14,grav:0,life:.35});t.flash(e.x+Math.cos(e.dir)*1.5,1.3,e.z+Math.sin(e.dir)*1.5,"#d8ffb0",50,10),n.addShake(.35),s.play("bow",c(e.x,e.z)),s.play("impactHeavy",c(e.x,e.z));break}case"bash":t.spark(e.x,1,e.z,{n:3,color:"#fff2c0",speed:4,size:.18});break;case"holy":{t.arc(e.x,1.1,e.z,e.dir,8.5,.32,"#ffe27a",{life:.32});for(let d=1;d<8.5;d+=.9)t.spark(e.x+Math.cos(e.dir)*d,1,e.z+Math.sin(e.dir)*d,{n:3,color:"#fff0b0",speed:3,up:2,size:.18,grav:0,life:.45});t.flash(e.x+Math.cos(e.dir)*3,1.3,e.z+Math.sin(e.dir)*3,"#ffe08a",40,10),n.addShake(.2),s.play("swingHeavy",c(e.x,e.z));break}case"judgement":{t.arc(e.x,.3,e.z,e.dir,4.6,1.9,"#ffd66e",{life:.45});let d=e.x+Math.cos(e.dir)*2.6,u=e.z+Math.sin(e.dir)*2.6;t.ring(d,u,4,"#ffcf6a",.45),t.flash(d,1.5,u,"#ffd27a",40,12),t.spark(d,.2,u,{n:30,color:"#ffe3a0",speed:9,size:.2}),n.addShake(.35),s.play("impactHeavy",c(e.x,e.z));break}case"quake":case"rage":{let d=e.fx==="rage"?"#ff4a2a":"#ffae5c";t.ring(e.x,e.z,e.fx==="rage"?6.5:4,d,.5,.4),t.ring(e.x,e.z,e.fx==="rage"?8:5,"#fff0d0",.35),t.smoke(e.x,.3,e.z,{n:14,speed:5,size:1.6,jitter:1}),t.scorch(e.x,e.z,e.fx==="rage"?4:3),t.spark(e.x,.3,e.z,{n:36,color:d,speed:11,size:.22}),t.flash(e.x,1.2,e.z,d,50,14),n.addShake(e.fx==="rage"?.8:.5),s.play("impactHeavy",c(e.x,e.z));break}case"spin":t.arc(e.x,1,e.z,Math.random()*6.28,3.2,6.1,l,{life:.24}),s.play("swing",c(e.x,e.z));break;case"blades":t.arc(e.x,1+rd(-.3,.3),e.z,Math.random()*6.28,3.3,3.5,"#c9a0ff",{life:.2,tilt:rd(-.4,.4)}),s.play("swing",c(e.x,e.z));break;case"shadow":t.spark(e.x,1,e.z,{n:3,color:"#a070ff",speed:1,size:.5,life:.4,grav:0});break;case"execute":{t.arc(e.x,1.2,e.z,e.dir+.5,3.4,.9,"#ff3050",{life:.35}),t.arc(e.x,1.2,e.z,e.dir-.5,3.4,.9,"#ff3050",{life:.35,reverse:!0}),t.flash(e.x,1.2,e.z,"#ff2040",30,8),n.addShake(.3),s.play("impactHeavy",c(e.x,e.z));break}case"doom":{t.arc(e.x,1.2,e.z,e.dir,12,.4,"#b050ff",{life:.4}),t.flash(e.x+Math.cos(e.dir)*4,2,e.z+Math.sin(e.dir)*4,"#a040ff",80,18,.3),t.spark(e.x+Math.cos(e.dir)*4,.4,e.z+Math.sin(e.dir)*4,{n:30,color:"#d8a0ff",speed:10,size:.24}),n.addShake(.6),s.play("bossSlam",c(e.x,e.z));break}case"kingSmash":case"kingQuake":case"kingSpin":case"kingRing":{let d=e.fx==="kingRing"?16:e.fx==="kingSpin"?7.6:6.5,u=e.fx==="kingSmash"?e.x+Math.cos(e.dir)*5:e.x,f=e.fx==="kingSmash"?e.z+Math.sin(e.dir)*5:e.z;t.ring(u,f,d,"#ff5530",.6,.5),t.ring(u,f,d*.6,"#ffd0a0",.4),t.smoke(u,.4,f,{n:24,speed:7,size:2.2,jitter:2,alpha:.6}),t.spark(u,.3,f,{n:60,color:"#ff8a4a",speed:14,size:.26}),t.flash(u,2,f,"#ff6a3a",80,20,.3),n.addShake(1),s.play("bossSlam",c(u,f));break}default:e.team!=="player"&&(t.arc(e.x,1.1,e.z,e.dir,2.6,1.8,"#ff5a3a"),s.play("swing",c(e.x,e.z)))}break}case"dmg":{let l=i.eActors.get(e.tid);l&&(l.flash(),e.by===a&&(l.hitstop=e.crit?.07:.045));let h=i.pActors.get(e.by);h&&e.by===a&&(h.hitstop=e.crit?.07:.045,n.addShake(e.crit?.18:.08));let d=l?l.headPos.y+.6:2.4;t.spark(e.x,1.2,e.z,{n:e.crit?12:6,color:e.blocked?"#9fd0ff":e.crit?"#fff0a0":"#ffc27a",speed:e.crit?9:6,size:.14,life:.35}),(e.by===a||e.crit)&&t.impact(e.x,l?l.headPos.y*.6:1.3,e.z,e.blocked?"#9fd0ff":e.crit?"#ffe7a0":"#ffd9b0",e.crit?2.4:1.3,e.crit?.22:.15),(e.by===a||e.crit)&&r.damage(e.x,d,e.z,e.v,{crit:e.crit,back:e.back,blocked:e.blocked,mine:e.by===a}),s.play(e.blocked?"block":e.crit?"hitCrit":"hit",c(e.x,e.z));break}case"counter":{t.ring(e.x,e.z,5,"#6ec3ff",.6,.5),t.flash(e.x,2,e.z,"#8fd0ff",60,14),t.spark(e.x,2,e.z,{n:40,color:"#bfe4ff",speed:12,size:.2}),r.announce("\uCE74\uC6B4\uD130!","#8fd0ff",1.1,!0),n.addShake(.5),s.play("counter",{});break}case"counterable":{let l=i.eActors.get(e.id);l&&(l.counterGlow=e.dur),s.play("counterTell",{});break}case"kill":{let l=rt[e.kind];t.spark(e.x,1,e.z,{n:20,color:"#d9d2c4",speed:5,normal:!0,bright:.9,size:.18,floor:!0,grav:-12,life:1.2}),t.spark(e.x,1.4,e.z,{n:14,color:"#7fe8ff",speed:3,size:.2,life:.8,grav:1}),e.xp&&i.onXp(e.xp),s.play(l.boss?"bossDie":"bones",c(e.x,e.z));break}case"espawn":{if(rt[e.kind].boss)break;t.smoke(e.x,.2,e.z,{n:6,color:"#2a2a2a",speed:1.5,size:1.1,alpha:.5}),t.spark(e.x,.3,e.z,{n:10,color:"#6fe0ff",speed:2,up:3,size:.16,life:.9,grav:0}),s.play("spawn",c(e.x,e.z));break}case"phurt":{i.pActors.get(e.id)?.flash(),e.id===a&&(n.addShake(.35),i.hurt=Math.min(1,i.hurt+.5),s.play("hurt",{}),r.damage(e.x,2.6,e.z,e.v,{taken:!0}));break}case"doomcast":r.announce("\uC989\uC0AC \uACF5\uACA9","#c880ff",1.6,!1,"\uBCF4\uB77C\uC0C9 \uC7A5\uD310\uC744 \uD53C\uD558\uC138\uC694 \xB7 \uD68C\uD53C \uBB34\uC801\uC73C\uB85C\uB9CC \uBC84\uD2F8 \uC218 \uC788\uC2B5\uB2C8\uB2E4"),s.play("counterTell",{});break;case"doom":{t.ring(e.x,e.z,3.5,"#b050ff",.7,.5),t.beam(e.x,e.z,"#c070ff",9,1.8,.8),t.spark(e.x,.5,e.z,{n:40,color:"#e0b0ff",speed:6,up:6,size:.2,grav:0}),e.id===a&&(n.addShake(.8),i.hurt=1);break}case"evade":e.id===a&&r.damage(e.x,2.6,e.z,0,{text:"\uD68C\uD53C",color:"#9fdcff"});break;case"shieldhit":e.id===a&&s.play("block",{});break;case"kb":break;case"pdown":{t.ring(e.x,e.z,3,"#ff3a3a",.8),r.announce(e.id===a?"\uC4F0\uB7EC\uC84C\uC2B5\uB2C8\uB2E4":`${i.nameOf(e.id)} \uC4F0\uB7EC\uC9D0`,"#ff7a7a",2,!1,e.id===a?i.soloFeathers()?"F: \uBD80\uD65C\uC758 \uAE43\uD138 \uC0AC\uC6A9":"\uB3D9\uB8CC\uAC00 \uACC1\uC5D0 \uC640\uC57C \uBD80\uD65C\uD569\uB2C8\uB2E4":"\uACC1\uC5D0 \uC11C \uC788\uC73C\uBA74 \uBD80\uD65C \uAC8C\uC774\uC9C0\uAC00 \uC313\uC785\uB2C8\uB2E4 (\uCD1D 4\uCD08)"),s.play("down",{});break}case"previve":t.beam(e.x,e.z,"#ffe7a0",8,1.6,1.2),t.spark(e.x,.5,e.z,{n:40,color:"#ffe7a0",speed:4,up:6,size:.18,grav:0}),s.play("revive",{});break;case"heal":{let l=i.pActors.get(e.id)?.root.position;if(!l)break;t.spark(l.x,1,l.z,{n:20,color:"#7dffb0",speed:2,up:3,size:.15,grav:1}),(e.id===a||e.by===a)&&r.damage(l.x,2.6,l.z,e.v,{heal:!0,mine:!0});break}case"taunt":{t.ring(e.x,e.z,e.r,"#ffcf6a",.6,.35),t.ring(e.x,e.z,e.r*.5,"#fff0c0",.4),t.flash(e.x,1.5,e.z,"#ffd27a",40,10),n.addShake(.25);break}case"chain":{for(let d=1;d<e.pts.length;d++){let[u,f]=e.pts[d-1],[m,b]=e.pts[d];t.zap(u,d===1?1.6:1.1,f,m,1.1,b,"#bfe4ff"),t.impact(m,1.2,b,"#cfe8ff",1.8,.2),(d>1||e.pts.length===2)&&t.spark(m,1.1,b,{n:10,color:"#d8f0ff",speed:6,size:.14,life:.3})}let[l,h]=e.pts[1];t.flash(l,1.5,h,"#9fd0ff",40,10),s.play("thunder",c(l,h));break}case"miracle":{t.ring(e.x,e.z,e.r,"#7dffb0",.9,.35),t.ring(e.x,e.z,e.r*.55,"#e8fff0",.6),t.beam(e.x,e.z,"#b8ffd0",12,2.4,1.2),t.flash(e.x,3,e.z,"#9fffc0",90,20,.3),t.spark(e.x,.5,e.z,{n:60,color:"#b8ffd0",speed:5,up:8,size:.18,grav:0}),s.play("revive",{});break}case"buff":{let h=i.pActors.get(e.id)?.root.position;if(!h)break;e.kind==="shield"?(t.ring(h.x,h.z,2,"#ffd98a",.6),t.spark(h.x,1,h.z,{n:16,color:"#ffe7a0",speed:2,up:2,size:.15})):e.kind==="guard"?(t.ring(h.x,h.z,2.4,"#ffcf6a",.6,.4),t.spark(h.x,1.2,h.z,{n:20,color:"#ffe0a0",speed:3,up:1,size:.16})):(t.ring(h.x,h.z,3,"#ff5a3a",.5),t.flash(h.x,1.5,h.z,"#ff4a2a",30,8));break}case"smoke":t.smoke(e.x,.5,e.z,{n:40,color:"#3a3448",speed:4,size:2.2,jitter:2,alpha:.7,life:2}),s.play("smoke",c(e.x,e.z));break;case"shoot":s.play(["arrow","shot","pierce","arrowb"].includes(e.kind)?"bow":"cast",c(i.eActors.get(e.id)?.root.position.x??i.pActors.get(e.id)?.root.position.x??0,0));break;case"explode":{t.ring(e.x,e.z,e.r,"#ff7a2a",.45,.4),t.flash(e.x,1,e.z,"#ff8a3a",50,12),t.spark(e.x,.8,e.z,{n:36,color:"#ffb05a",speed:9,size:.3}),t.smoke(e.x,.8,e.z,{n:10,speed:3}),t.spark(e.x,.5,e.z,{n:16,color:"#ff8a3a",speed:1.5,up:6,size:.18,grav:-2,life:.9}),t.ring(e.x,e.z,e.r*1.4,"#ffd08a",.35,.15),t.scorch(e.x,e.z,e.r*.8),t.impact(e.x,1,e.z,"#ffb060",3.2,.22),n.addShake(.25),s.play("explode",c(e.x,e.z));break}case"phit":t.spark(e.x,1,e.z,{n:8,color:e.kind==="bolt"?"#9fd8ff":"#ffcf8a",speed:5,size:.15});break;case"zonefire":{e.fx==="lightning"?(t.bolt(e.x,e.z,"#cfe8ff"),t.bolt(e.x+rd(-1.5,1.5),e.z+rd(-1.5,1.5),"#9fd0ff"),t.ring(e.x,e.z,e.r,"#bfe4ff",.5,.5),t.flash(e.x,3,e.z,"#bfe4ff",120,24,.25),t.spark(e.x,.3,e.z,{n:50,color:"#d8f0ff",speed:12,size:.2}),t.scorch(e.x,e.z,e.r*.7),t.impact(e.x,1.5,e.z,"#cfe8ff",5,.25),n.addShake(.8),s.play("thunder",c(e.x,e.z))):e.fx==="meteor"?(i.meteorImpact(e.x,e.z,e.r),t.scorch(e.x,e.z,e.r*.9,5),t.impact(e.x,2,e.z,"#ffb060",7,.3)):e.fx==="soulburst"?(t.spark(e.x,.3,e.z,{n:30,color:"#5ff0c0",speed:6,up:5,size:.3,grav:1}),t.ring(e.x,e.z,e.r,"#3fffc0",.4),t.flash(e.x,1,e.z,"#3fffc0",30,8),s.play("soul",c(e.x,e.z))):e.fx==="frost"?(t.shards(e.x,e.z,e.r*.9,10,1.2),s.play("frost",c(e.x,e.z))):e.fx==="doom"?(t.ring(e.x,e.z,e.r,"#b050ff",.6,.5),t.flash(e.x,2,e.z,"#a040ff",70,16),t.spark(e.x,.3,e.z,{n:30,color:"#e0b0ff",speed:8,size:.22}),n.addShake(.4),s.play("bossSlam",c(e.x,e.z))):e.fx==="holyburst"?(t.ring(e.x,e.z,e.r,"#ffe7a0",.45,.4),t.beam(e.x,e.z,"#fff0c0",8,2,.5),t.flash(e.x,1.5,e.z,"#ffe8a8",60,14),t.spark(e.x,.4,e.z,{n:30,color:"#fff0c0",speed:8,size:.2}),t.spark(e.x,.3,e.z,{n:14,color:"#b8ffd0",speed:2,up:4,size:.14,grav:0,life:.8}),n.addShake(.2),s.play("impactHeavy",c(e.x,e.z))):e.fx==="poison"?(t.smoke(e.x,.6,e.z,{n:30,color:"#4a6a2a",speed:3,size:2.4,jitter:2.5,alpha:.6,life:2.2}),s.play("smoke",c(e.x,e.z))):(e.fx==="heal"||e.fx==="spring")&&(t.ring(e.x,e.z,e.r,"#7dffb0",.5,.3),t.spark(e.x,.3,e.z,{n:e.fx==="heal"?36:18,color:"#b8ffd0",speed:3,up:5,size:.16,grav:0,life:.9}),e.fx==="heal"&&t.beam(e.x,e.z,"#b8ffd0",7,1.6,.6),s.play("potion",{}));break}case"summon":t.ring(e.x,e.z,6,"#5fe0ff",1,.3),s.play("summon",c(e.x,e.z));break;case"room":{let l=!!yt[e.i]?.boss;e.state==="active"?(r.announce(e.name,"#e8d9c0",2.6,!1,l?"":"\uBAA8\uB4E0 \uC801\uC744 \uCC98\uCE58\uD558\uC138\uC694"),s.play(l?"bossDoor":"seal",{}),l||s.setMusic("combat")):(r.announce("\uC815\uD654 \uC644\uB8CC","#ffe3a8",2,!1,"\uBD09\uC778\uC774 \uD480\uB838\uC2B5\uB2C8\uB2E4"),s.play("clear",{}),s.setMusic("explore"));break}case"wave":{if(e.n<=1)break;let l=e.n>=e.of;r.announce(l?"\uB9C8\uC9C0\uB9C9 \uC6E8\uC774\uBE0C":`\uC6E8\uC774\uBE0C ${e.n} / ${e.of}`,"#ff9a7a",1.8,!1,l?"\uB0A8\uC740 \uB9DD\uC790\uB97C \uBAA8\uB450 \uC4F0\uB7EC\uB728\uB9AC\uC138\uC694":"\uB9DD\uC790\uB4E4\uC774 \uB2E4\uC2DC \uBAB0\uB824\uC635\uB2C8\uB2E4");break}case"chest":t.beam(e.x,e.z,"#ffd27a",10,2.2,1.4),t.spark(e.x,1,e.z,{n:60,color:"#ffd27a",speed:6,up:8,size:.16,grav:-8,floor:!0}),s.play("chest",c(e.x,e.z));break;case"loot":i.onLoot(e.item);break;case"boss":i.onBoss(e);break;case"victory":i.onVictory(e);break;case"wipe":s.setMusic("silence"),r.announce("\uC804\uBA78","#ff5a5a",3,!1,"\uD30C\uD2F0\uAC00 \uBAA8\uB450 \uC4F0\uB7EC\uC84C\uC2B5\uB2C8\uB2E4");break;case"start":s.setMusic("explore"),e.ch&&r.chapterIntro(e.ch);break}}function Wf(i,e){let t=i.lastView?.players.find(n=>n.id===e);return t?$e[t.cls].trail:"#ffd98a"}pi();xr();Jh();rs();var ZM=new Zs(1,12,10),QM=new Js(.28),qf=i=>Math.PI/2-i,ad=class{constructor({engine:e,assets:t,vfx:n,level:s,audio:r,hud:a,input:o,profile:c,onEnd:l}){Object.assign(this,{engine:e,assets:t,vfx:n,level:s,audio:r,hud:a,input:o,profile:c,onEnd:l}),this.pActors=new Map,this.eActors=new Map,this.projs=new Map,this.drops=new Map,this.chests=new Map,this.hurt=0,this.session=null,this.lastView=null,this.runXp=0,this.runLoot=[],this.levelsGained=0,this.ended=!1,this.pool=new Map}prewarmPool(e={minion:14,warrior:8,archer:6,mage:6,priest:1,warden:1,priestShade:1,wardenShade:1,king:1}){let t=[],n=(s,r,a)=>{let o=`${s}|${r}`,c=this.pool.get(o)||[];for(let l=0;l<a;l++){let h=Zh(this.assets,s,r);h.animate({moving:!1},.016,h.cfg),h.root.position.set(In.x+l%6-3,0,In.z-3-Math.floor(l/6)),this.engine.scene.add(h.root),t.push(h),c.push(h)}this.pool.set(o,c)};for(let[s,r]of Object.entries(e))n(s,!1,r);return n("warrior",!0,1),n("mage",!0,1),()=>{for(let s of t)this.engine.scene.remove(s.root)}}acquireEnemy(e,t){let n=this.pool.get(`${e}|${!!t}`),s=n&&n.length?n.pop():Zh(this.assets,e,t);return s.reset(),s.poolKey=`${e}|${!!t}`,s}releaseEnemy(e){this.engine.scene.remove(e.root),e.crownFire&&(e.crownFire.dead=!0,e.crownFire=null),this.pool.has(e.poolKey)||this.pool.set(e.poolKey,[]),this.pool.get(e.poolKey).push(e)}start(e){this.session=e,this.ended=!1,this.runXp=0,this.runLoot=[],this.levelsGained=0,this.startedAt=performance.now(),this.engine.snap(In.x,In.z),this.hud.show(!0),this.input.enabled=!0}startLobby(e){this.session=e,this.lastView=null,this.input.dest=null,this.input.enabled=!0}lobbyFrame(e){let t=this.session,n=this.input.sample(this.engine,t.self()||In);this.input.takeCasts(),t.update(e,{...n,attack:!1});let s=t.view();return s?(this.lastView=s,this.syncPlayers(s,e),s.players.find(r=>r.id===t.localId)||null):null}stop(){for(let e of this.pActors.values())this.engine.scene.remove(e.root);this.pActors.clear();for(let e of this.eActors.values())this.releaseEnemy(e);this.eActors.clear();for(let e of[this.projs,this.drops,this.chests]){for(let t of e.values())this.engine.scene.remove(t.obj),t.emitter&&(t.emitter.dead=!0);e.clear()}this.vfx.sweepDecals(),this.vfx.sweepDecals();for(let e of this.timers||[])clearTimeout(e);this.timers=[],this.cine=!1,this.engine.cine=null,this.hud.cinema(!1),this.portal&&(this.engine.scene.remove(this.portal.group),this.portal.emitter.dead=!0,this.portal=null),this.session=null,this.lastView=null,this.chapter=1,this.engine.setAtmosphere(Wn[1]),this.hurt=0,this.engine.grade.uniforms.uHurt.value=0,this.engine.grade.uniforms.uDesat.value=0,this.hud.show(!1),this.input.enabled=!1}listener(){let e=this.session?.self();return e?{x:e.x,z:e.z}:{x:0,z:0}}self(){return this.session.self()}nameOf(e){return this.lastView?.players.find(t=>t.id===e)?.name||"\uB3D9\uB8CC"}soloFeathers(){return(this.session.me()?.feathers??0)>0}onXp(e){this.runXp+=e;let t=eg(this.profile,e);if(t>0){this.levelsGained+=t;let n=ut(this.profile);this.hud.announce(`\uB808\uBCA8 ${n.level}`,"#ffe38a",2,!0,"\uB2A5\uB825\uCE58\uAC00 \uC0C1\uC2B9\uD588\uC2B5\uB2C8\uB2E4"),this.audio.play("levelup",{});let s=this.self();this.vfx.beam(s.x,s.z,"#ffe38a",9,2,1.4),this.vfx.spark(s.x,.5,s.z,{n:50,color:"#ffe38a",speed:3,up:7,size:.16,grav:0}),this.pushGear()}Wt(this.profile)}onLoot(e){let t=tg(this.profile,e),n=bn[e.rarity],s=ut(this.profile),r=Is(s),a=t&&this.profile.settings.autoEquip&&sg(s,e)&&rc(this.profile,e.id);a&&(this.pushGear(),this.audio.play("equip",{}),this.hud.statGain(r,Is(s),"\uC790\uB3D9 \uC7A5\uCC29",[e])),this.hud.root.querySelector(".inventory").classList.contains("hidden")||this.hud.renderInventory(),this.hud.lootFeed(e,t,a),this.audio.play("loot",{tier:n.tier}),t&&this.runLoot.push(e),Wt(this.profile)}pushGear(){let e=ut(this.profile);this.session.setGear(e.level,Object.values(e.equipped).filter(Boolean))}later(e,t){(this.timers||=[]).push(setTimeout(t,e))}cinematic(e){this.engine.cinematic(e),this.hud.cinema(!0),this.input.enabled=!1,this.cine=!0,this.later(e.dur*1e3,()=>{this.cine=!1,this.hud.cinema(!1),this.session&&!this.ended&&(this.input.enabled=!0)})}bossCinematic(e){let{hud:t,audio:n,engine:s,vfx:r}=this,a=rt[e.kind],o=this.lastView?.enemies.find(l=>l.id===e.id);if(n.setMusic("boss"),!o){t.bossIntro(a.name,a.title),n.play("roar",{});return}let c=a.scale||1;this.cinematic({x:o.x,z:o.z,yaw:o.face+.35,dist:[7*c,4*c],height:[1*c,1.45*c],look:[1.45*c,1.65*c],dur:3.8}),n.play("bossDoor",{}),this.later(1250,()=>{s.addShake(1),n.play("impactHeavy",{}),r.ring(o.x,o.z,6*c/2.2,"#ffcf8a",.6,.5),r.smoke(o.x,.4,o.z,{n:18,speed:5,size:2,jitter:1.5,alpha:.5})}),this.later(1650,()=>{t.bossIntro(a.name,a.title),n.play("bossSlam",{}),n.play("roar",{}),s.addShake(.7),r.flash(o.x,3,o.z,"#ff8a4a",60,16,.3)})}onVictory(e){let{audio:t,profile:n}=this;t.setMusic("victory");let s=e.ch||this.lastView?.chapter||1,r=nd(n,this.lastView?.difficulty||s);r&&(n.difficulty=r),n.stats.clears++,Wt(n),this.cinematic({x:e.x,z:e.z,yaw:(e.face??Math.PI/2)+.7,dist:[13,8.5],height:[7.5,4.5],look:[1.6,1.2],dur:3.4}),this.later(3200,()=>this.hud.chapterClear(s,e.next,r,this.session?.mode==="host"&&!this.session.online))}summary(e){let t=this.lastView;return{victory:e,difficulty:t?.difficulty||1,time:(performance.now()-this.startedAt)/1e3,xp:this.runXp,loot:this.runLoot,levels:this.levelsGained}}syncPortal(e,t){let n=e.portal;if(!n){this.portal&&(this.engine.scene.remove(this.portal.group),this.portal.emitter.dead=!0,this.portal=null);return}if(!this.portal){let s=new Et,r=new re(n.next?"#b88aff":"#ffd98a"),a=new Ue(new Qs(1.7,.13,8,48),new vt({color:r.clone().multiplyScalar(3)})),o=new Ue(new Mi(1.62,40),new vt({color:r.clone().multiplyScalar(.9),transparent:!0,opacity:.55,blending:jt,depthWrite:!1,side:Zt})),c=new Ue(new _s(1.9,2.3,48),new vt({color:r.clone().multiplyScalar(2),transparent:!0,opacity:.7,blending:jt,depthWrite:!1}));c.rotation.x=-Math.PI/2,c.position.y=.08,a.position.y=o.position.y=2,s.add(a,o,c),s.position.set(n.x,0,n.z),this.engine.scene.add(s);let l=n.next?"#d8b8ff":"#ffe7a0",h=this.vfx.emitter({rate:40,emit:d=>{let u=Math.random()*Math.PI*2;d.spark(n.x+Math.cos(u)*1.7,2+Math.sin(u)*1.7,n.z,{n:1,color:l,speed:.6,up:.4,size:.14,grav:0,life:.9})}});this.portal={group:s,disc:o,ring:a,emitter:h},this.vfx.flash(n.x,2,n.z,l,60,14,.4)}this.portal.disc.rotation.z=t*1.4,this.portal.disc.material.opacity=.45+Math.sin(t*3)*.12,this.portal.ring.scale.setScalar(1+Math.sin(t*2.2)*.03)}onBoss(e){let{hud:t,audio:n,engine:s}=this;switch(e.s){case"intro":this.bossCinematic(e);break;case"p2":t.announce("\uC655\uAD00\uC758 \uC2EC\uD310","#ff6a4a",2.4,!0,"\uBB34\uB825\uD654 \uAC8C\uC774\uC9C0\uB97C \uBAA8\uB450 \uAE4E\uC73C\uC138\uC694!"),n.play("roar",{});break;case"judgement":break;case"judgeOk":{t.announce("\uBB34\uB825\uD654 \uC131\uACF5","#8fd0ff",2,!0,"\uC9C0\uAE08\uC774 \uAE30\uD68C\uC785\uB2C8\uB2E4"),this.vfx.ring(e.x,e.z,12,"#8fd0ff",.8,.6),this.vfx.flash(e.x,3,e.z,"#8fd0ff",100,25,.4),s.addShake(1),n.play("counter",{});break}case"judgeFail":{t.announce("\uC2EC\uD310\uC774 \uB0B4\uB824\uC84C\uB2E4","#ff4a3a",2),this.vfx.ring(e.x,e.z,30,"#ff3a2a",1,.8),this.vfx.flash(e.x,3,e.z,"#ff3a2a",150,40,.5),s.addShake(1.2),n.play("bossSlam",{});break}case"phase2":t.announce(`${rt[e.kind].name}\uC758 \uAE30\uC138\uAC00 \uBC14\uB01D\uB2C8\uB2E4`,"#ff9a6a",2,!1,"\uC0C8\uB85C\uC6B4 \uD328\uD134\uC5D0 \uC8FC\uC758\uD558\uC138\uC694"),n.play("roar",{});break;case"enrage":t.announce(`${rt[e.kind].name}\uC774(\uAC00) \uACA9\uB178\uD569\uB2C8\uB2E4`,"#ff5a3a",2),n.play("roar",{});break}}meteorImpact(e,t,n){let{vfx:s,engine:r,audio:a}=this;s.ring(e,t,n*1.2,"#ff6a2a",.6,.5),s.ring(e,t,n*.7,"#fff0c0",.4),s.flash(e,3,t,"#ff7a3a",160,30,.35),s.spark(e,.5,t,{n:90,color:"#ffae4a",speed:16,up:8,size:.3,grav:-14,floor:!0,life:1.1}),s.smoke(e,1,t,{n:26,speed:6,size:2.6,jitter:2,alpha:.7,life:2.2}),r.addShake(1.1),a.play("explode",{x:e,z:t,L:this.listener()}),a.play("impactHeavy",{})}frame(e,t){let n=this.session;if(!n)return;let s=n.self(),r=this.input.sample(this.engine,s||{x:0,z:0});this.input.bot&&(r={...this.input.bot},this.input.bot=null);for(let l of this.input.takeCasts()){if(l==="inventory"){this.hud.toggleInventory();continue}!n.cast(l,r.ax,r.az)&&["q","w","e","r"].includes(l)&&this.hud.flashSlot(l)}n.update(e,r);let a=n.view();if(!a)return;this.lastView=a;for(let l of n.takeEvents())rg(this,l);this.syncPlayers(a,e),this.syncEnemies(a,e),this.syncProjectiles(a,e);for(let l of a.zones)if(this.vfx.decal(l,t),l.fx==="frost"&&l.t>l.warn&&Math.random()<e*30&&this.vfx.spark(l.x+(Math.random()-.5)*7,.2,l.z+(Math.random()-.5)*7,{n:1,color:"#bfe8ff",speed:1,up:2,size:.18,grav:0,life:.9}),l.fx==="meteor"&&l.t<l.warn&&this.meteorFalling(l,t),l.fx==="poison"&&l.t>l.warn&&Math.random()<e*14&&this.vfx.smoke(l.x+(Math.random()-.5)*8,.5,l.z+(Math.random()-.5)*8,{n:1,color:"#4a6a2a",speed:.6,size:2,alpha:.45,life:1.6}),l.fx==="arrows"&&l.t>l.warn&&Math.random()<e*40){let h=Math.random()*Math.PI*2,d=Math.sqrt(Math.random())*4;this.vfx.spark(l.x+Math.cos(h)*d,5,l.z+Math.sin(h)*d,{n:1,color:"#e8f0c0",speed:0,up:-26,drag:0,size:.12,grav:0,life:.2,floor:!0})}this.vfx.sweepDecals(),this.syncDrops(a,t),this.syncChests(a),this.level.update(e,t,a.rooms,s||{x:0,z:0}),this.vfx.update(e);let o=a.players.find(l=>l.id===n.localId);if(a.chapter!==this.chapter&&(this.chapter=a.chapter,this.engine.setAtmosphere(Wn[a.chapter])),o){let l=this.engine.camTarget;Math.hypot(l.x-o.x,l.z-o.z)>30&&this.engine.snap(o.x,o.z);let h=.12*(1-this.engine.zoom);this.engine.follow(o.x,o.z,e,{x:(r.ax-o.x)*h,z:(r.az-o.z)*h}),this.engine.faceYaw=o.face}this.hurt=Math.max(0,this.hurt-e*1.5);let c=o&&o.alive?Math.max(0,1-o.hp/o.maxHp/.3):0;this.engine.grade.uniforms.uHurt.value=Math.min(1,this.hurt+c*(.35+Math.sin(t*6)*.15)),this.engine.grade.uniforms.uDesat.value=o&&!o.alive?.85:0,this.engine.render(e,t),this.hud.update(a,n,this,t),this.syncPortal(a,t),!this.ended&&a.phase==="wipe"&&a.endT>3&&(this.ended=!0,this.onEnd(this.summary(!1)))}syncPlayers(e,t){let n=new Set;for(let s of e.players){n.add(s.id);let r=this.pActors.get(s.id);r&&(r.cls!==s.cls||r.spec!==Lt(s.cls,s.spec).id)&&(this.engine.scene.remove(r.root),this.pActors.delete(s.id),r=null),r||(r=tc(this.assets,s.cls,s.spec,s.look),r.addXray(s.id===this.session.localId?"#ffd98a":"#8fc4ff"),this.engine.scene.add(r.root),this.pActors.set(s.id,r),s.id===this.session.localId&&(this.engine.heroLight.userData.follow=r.root));let a=br(s.look,s.cls);r.lookKey!==Qo(a)&&wa(r,$e[s.cls].model,a),r.root.visible=!this.cine,r.root.position.set(s.x,s.y||0,s.z),r.root.rotation.y=qf(s.face),r.animate({act:s.act,actT:s.actT,moving:s.moving,speed:s.speed,down:!s.alive},t,r.cfg),s.rage&&Math.random()<t*25&&this.vfx.fire(s.x+(Math.random()-.5),.3+Math.random()*1.5,s.z+(Math.random()-.5),.5,"#ff3a1a"),s.shield>0&&Math.random()<t*12&&this.vfx.spark(s.x,1+Math.random(),s.z,{n:1,color:"#ffe7a0",speed:1.5,up:.5,size:.12,grav:0,life:.6})}for(let[s,r]of this.pActors)n.has(s)||(this.engine.scene.remove(r.root),this.pActors.delete(s))}syncEnemies(e,t){let n=new Set;for(let s of e.enemies){n.add(s.id);let r=this.eActors.get(s.id);if(r||(r=this.acquireEnemy(s.kind,s.elite),this.engine.scene.add(r.root),this.eActors.set(s.id,r),rt[s.kind].crown&&(r.crownFire=this.vfx.emitter({rate:40,emit:a=>{if(r.crown){let o=new C;r.crown.getWorldPosition(o),a.fire(o.x,o.y+.3,o.z,1.2,"#ff5a1a")}}}))),r.root.position.set(s.x,s.y||0,s.z),r.root.rotation.y=qf(s.face),r.animate({act:s.act==="intro"?null:s.act,actT:s.actT,moving:s.moving,speed:s.speed,dead:s.dead,deadT:s.deadT,intro:s.intro},t,r.cfg),r.counterGlow>0){r.counterGlow-=t;for(let a of r.mats)a.emissive?.setRGB(.15,.45,1.2*(.6+Math.sin(performance.now()/50)*.4));r.counterGlow<=0&&r.restoreTint(),Math.random()<t*30&&this.vfx.spark(s.x,2+Math.random()*3,s.z,{n:1,color:"#6ec3ff",speed:2,size:.25,grav:0})}s.dead&&r.crownFire&&(r.crownFire.dead=!0,r.crownFire=null)}for(let[s,r]of this.eActors)n.has(s)||(this.releaseEnemy(r),this.eActors.delete(s))}syncProjectiles(e){let t=new Set;for(let n of e.projs){t.add(n.id);let s=this.projs.get(n.id);s||(s=this.makeProjectile(n),this.projs.set(n.id,s)),s.obj.position.set(n.x,1.25,n.z),s.obj.rotation.y=qf(n.dir),s.x=n.x,s.z=n.z}for(let[n,s]of this.projs)t.has(n)||(this.engine.scene.remove(s.obj),s.emitter&&(s.emitter.dead=!0),this.projs.delete(n))}makeProjectile(e){let t=new Et,n=null,s=(a,o)=>{let c=new Ue(ZM,new vt({color:new re(a).multiplyScalar(4)}));c.scale.setScalar(o),t.add(c)},r={obj:t,x:e.x,z:e.z};if(e.kind==="fireball")s("#ff7a2a",.35),n=this.vfx.emitter({rate:90,emit:a=>a.fire(r.x,1.25,r.z,.9,"#ff6a1a")});else if(e.kind==="bolt")s("#8fd0ff",.18),n=this.vfx.emitter({rate:50,emit:a=>a.spark(r.x,1.25,r.z,{n:1,color:"#8fd0ff",speed:.5,size:.2,grav:0,life:.25})});else if(e.kind==="arrow"||e.kind==="shot"||e.kind==="pierce"||e.kind==="arrowb"){let a=this.assets.prop("w_arrow");a.rotation.x=Math.PI/2,a.scale.setScalar(1.6),t.add(a);let o=e.kind==="arrow"?"#6ff0c8":e.kind==="pierce"?"#e8ffb0":"#b8e890";e.kind==="pierce"&&s("#d8ff90",.22),n=this.vfx.emitter({rate:e.kind==="pierce"?90:40,emit:c=>c.spark(r.x,1.25,r.z,{n:1,color:o,speed:.2,size:e.kind==="pierce"?.2:.12,grav:0,life:.3})})}else e.kind==="dagger"?(s("#c9a0ff",.14),n=this.vfx.emitter({rate:40,emit:a=>a.spark(r.x,1.25,r.z,{n:1,color:"#c9a0ff",speed:.2,size:.1,grav:0,life:.2})})):e.kind==="lightorb"?(s("#ffe7a0",.55),n=this.vfx.emitter({rate:70,emit:a=>a.spark(r.x+(Math.random()-.5)*.8,1.25,r.z+(Math.random()-.5)*.8,{n:1,color:"#fff0c0",speed:.8,size:.16,grav:0,life:.4})})):s("#5ff0c0",.3);return this.engine.scene.add(t),r.emitter=n,r}meteorFalling(e,t){let n=e.t/e.warn;e._m||(e._m=!0,this.audio.play("meteorFall",{}));let s=(1-n)*22,r=e.x-(1-n)*8,a=e.z-(1-n)*5;this.vfx.fire(r,s+1,a,2.6,"#ff6a1a"),this.vfx.fire(r,s+1,a,2,"#ffb04a"),Math.random()<.5&&this.vfx.smoke(r,s+1,a,{n:1,speed:.5,size:1.4,alpha:.4})}syncDrops(e,t){let n=new Set;for(let s of e.drops){n.add(s.id);let r=this.drops.get(s.id);if(!r){let a=bn[s.rarity].color,o=bn[s.rarity].tier,c=new Et,l=new Ue(QM,new Xt({color:a,emissive:a,emissiveIntensity:1.6,metalness:.3,roughness:.3}));l.position.y=.7,c.add(l),o>=1&&c.add(this.vfx.beam(0,0,a,2+o*1.6,.35+o*.12,0,{persistent:!0})),c.position.set(s.x,0,s.z),this.engine.scene.add(c),r={obj:c,gem:l},this.drops.set(s.id,r),this.vfx.spark(s.x,.6,s.z,{n:12+o*6,color:a,speed:3,up:4,size:.14,grav:-6,floor:!0})}r.gem.rotation.y=t*2,r.gem.position.y=.7+Math.sin(t*3+s.id)*.12}for(let[s,r]of this.drops)n.has(s)||(this.engine.scene.remove(r.obj),this.drops.delete(s))}syncChests(e){for(let t of e.chests){let n=this.chests.get(t.id);if(!n){let s=this.assets.prop("d_chest_gold");s.position.set(t.x,0,t.z),s.scale.setScalar(1.3),this.engine.scene.add(s),this.vfx.spark(t.x,1,t.z,{n:30,color:"#ffd27a",speed:3,up:4,size:.14}),n={obj:s,open:!1,beam:this.vfx.beam(t.x,t.z,"#ffd27a",5,.8,0,{persistent:!0})},this.chests.set(t.id,n)}t.open&&!n.open&&(n.open=!0,this.engine.scene.remove(n.beam),n.obj.rotation.z=.08)}}};pi();rs();function ks(i,e,t,n,s,r,a=0){let o=s-e,c=r-t,l=Math.hypot(o,c);switch(i.type){case"circle":return l<=i.r+a;case"donut":return l<=i.r2+a&&l>=i.r-a;case"cone":{if(l>i.r+a)return!1;if(l<a+.5)return!0;let h=Math.atan2(c,o)-n;for(;h>Math.PI;)h-=Math.PI*2;for(;h<-Math.PI;)h+=Math.PI*2;return Math.abs(h)<=i.ang/2+Math.asin(Math.min(1,a/l))}case"rect":{let h=Math.cos(n),d=Math.sin(n),u=o*h+c*d,f=-o*d+c*h;return u>=-a&&u<=i.len+a&&Math.abs(f)<=i.w/2+a}}return!1}function ag(i,e,t){let n=Math.cos(i.face),s=Math.sin(i.face),r=e-i.x,a=t-i.z,o=Math.hypot(r,a)||1;return(n*r+s*a)/o<-.5}function og(i,e,t,{back:n=!1,stunned:s=!1,rng:r=Math.random,critBonus:a=0,backBonus:o=0}={}){let c=r()<(i.crit||0)+a,l=i.atk*e*(.94+r()*.12);return c&&(l*=i.critDmg||2),n&&(l*=1+.2+o),s&&(l*=1+.3),l*=100/(100+(t||0)),{dmg:Math.max(1,Math.round(l)),crit:c}}var cs=(i,e)=>Math.atan2(e.z-i.z,e.x-i.x),Ni=(i,e)=>Math.hypot(e.x-i.x,e.z-i.z);var dc=1/60,cd=Math.PI*2,Tr=.55,eS=4,tS=2.6,nS=.35,iS=.3,oc=i=>Ot[i]||Cs[i];function hd(i=Math.random()*2**31|0,e=1){return{seed:i,rng:Vh(i),t:0,tick:0,phase:"lobby",endT:0,difficulty:e,rooms:yt.map(()=>({state:"idle",wave:-1,waveT:0})),sealed:[],players:[],enemies:[],projs:[],zones:[],drops:[],chests:[],events:[],nextId:1,boss:null,stats:{kills:0}}}var wr=i=>i.nextId++,cc=(i,e)=>!!e?.lethalFrom&&(i.difficulty||1)>=e.lethalFrom,Le=(i,e)=>i.events.push(e),fg=i=>i.events.splice(0),ht=(i,e)=>i.players.find(t=>t.id===e),dd=i=>Math.max(1,i.players.length),pg=(i,e=In)=>e.x+(i%2?1.6:-1.6)*Math.ceil(i/2),ka=i=>Lt(i.cls,i.spec).passive.mods;function Da(i,{id:e,name:t,cls:n="knight",spec:s,look:r=null,level:a=1,gear:o=[],local:c=!1}){let l=i.players.length;s=Lt(n,s).id;let h=Sa(n,a,o,s),d={id:e,name:t,cls:n,spec:s,look:r,level:a,local:c,x:pg(l),z:In.z,y:0,vx:0,vz:0,face:-Math.PI/2,st:h,hp:h.hp,alive:!0,downT:0,revive:0,feathers:0,tp:0,act:null,combo:0,comboT:0,cds:{q:0,w:0,e:0,r:0,dodge:0,potion:0},potions:U0,shield:0,shieldT:0,buffs:[],hurtT:0,slowT:0,kbx:0,kbz:0,input:{mx:0,mz:0,ax:0,az:0,attack:!1},dmgDealt:0,kills:0,downs:0,revives:0};return i.players.push(d),d}function mg(i,e){i.players=i.players.filter(t=>t.id!==e)}function jf(i,e,{name:t,cls:n,spec:s,look:r=null,level:a,gear:o}){let c=ht(i,e);if(!(!c||i.phase!=="lobby")){c.name=t,c.cls=n,c.spec=Lt(n,s).id,c.look=r,c.level=a,c.st=Sa(n,a,o,c.spec),c.hp=c.st.hp,c.act=null;for(let l in c.cds)c.cds[l]=0}}function $f(i,e,t,n){let s=ht(i,e);if(!s)return;let r=s.hp/s.st.hp||1,a=t>s.level;s.level=t,s.st=Sa(s.cls,t,n,s.spec),s.hp=Math.min(s.st.hp,Math.round(s.st.hp*Math.min(1,r))),a&&s.alive&&Yf(i,s,s.st.hp*iS)}function Yf(i,e,t,n){let s=Math.min(Math.round(t),e.st.hp-e.hp);s<=0||!e.alive||(e.hp+=s,Le(i,{k:"heal",id:e.id,v:s,by:n}))}function cg(i){let e=i.st.speed;gr(i.cls,i.spec)==="move"&&(e*=1+Li(i.st));for(let t of i.buffs)t.speed&&(e*=1+t.speed);return i.slowT>0&&(e*=.6),e}function sS(i){let e=i.st.atk;for(let n of i.buffs)n.atk&&(e*=1+n.atk);let t=ka(i);return t.lowHpAtk&&i.hp<i.st.hp*.5&&(e*=1+t.lowHpAtk),{atk:e,crit:i.st.crit,critDmg:i.st.critDmg}}function uc(i,e,t,n,s=0){if(!i.alive)return null;let r=Lt(i.cls,i.spec).skills,a=Zo(i.cls,i.spec),o=i.act?Ot[i.act.id]:null,c=o&&i.act.t<(o.lock??o.dur),l;if(e==="dodge"){if(i.cds.dodge>0)return null;l="dodge"}else if(e==="potion"){if(i.cds.potion>0||i.potions<=0||i.hp>=i.st.hp)return null;l="potion"}else if(e==="basic"){if(o&&o!==Ot[a[i.combo%3]]&&c||c&&i.act.t<(o.combo??o.lock)||c&&i.act.id==="dodge")return null;let m=i.comboT>0?i.combo%3:0;l=a[m],i.combo=m+1,i.comboT=0}else if(l=r[e],!l||i.cds[e]>0||c&&(i.act.id==="dodge"||!a.includes(i.act.id)||i.act.t<(o.combo??0)))return null;let h=Ot[l],d=Math.atan2(n-i.z,t-i.x);e==="dodge"&&(i.input.mx||i.input.mz)&&(d=Math.atan2(i.input.mz,i.input.mx)),h.away&&(d+=Math.PI);let u=t,f=n;return h.range&&Math.hypot(t-i.x,n-i.z)>h.range&&(u=i.x+Math.cos(d)*h.range,f=i.z+Math.sin(d)*h.range),i.act={id:l,t:0,dir:d,tx:u,tz:f,sx:i.x,sz:i.z,done:{},hitIds:[]},i.face=d,e==="dodge"?i.cds.dodge=Yh:e==="potion"?i.cds.potion=Kh:e!=="basic"&&(i.cds[e]=h.cd*(gr(i.cls,i.spec)==="cdr"?1-Li(i.st):1)),i.act}function gg(i){if(!i.act||i.act.id==="dodge"||i.act.id==="potion")return 1;let e=gr(i.cls,i.spec);return e==="cast"||e==="attack"&&Zo(i.cls,i.spec).includes(i.act.id)?1+Li(i.st):1}function ud(i,e,t,n,s=!0){for(let f in i.cds)i.cds[f]>0&&(i.cds[f]=Math.max(0,i.cds[f]-t));if(i.comboT>=0&&!i.act&&(i.comboT+=t),i.comboT>.7&&(i.combo=0,i.comboT=-1),i.y=0,!i.alive){i.vx=i.vz=0;return}let r=i.act?Ot[i.act.id]:null,a=e.mx||0,o=e.mz||0,c=Math.hypot(a,o);c>1&&(a/=c,o/=c);let l=0,h=0;if(r){let f=i.act.t;if(r.move)for(let[m,b,g]of r.move)f>=m&&f<b&&(l+=Math.cos(i.act.dir)*g,h+=Math.sin(i.act.dir)*g);if(r.leap){let[m,b]=r.leap,g=Math.max(0,Math.min(1,(f-m)/(b-m))),p=g*g*(3-2*g);i.x=i.act.sx+(i.act.tx-i.act.sx)*p,i.z=i.act.sz+(i.act.tz-i.act.sz)*p,i.y=Math.sin(g*Math.PI)*2.2}if(r.moveScale&&c>.05){let m=cg(i)*r.moveScale;l+=a*m,h+=o*m}!r.move&&!r.leap&&!r.moveScale&&f>=(r.lock??r.dur)&&c>.05&&(i.act=null)}if(!i.act){let f=cg(i);l=a*f,h=o*f,c>.05&&!e.attack&&(i.face=Math.atan2(o,a))}l+=i.kbx,h+=i.kbz;let d=Math.exp(-t*10);i.kbx*=d,i.kbz*=d;let u=Math.min(1,t*18);i.vx+=(l-i.vx)*u,i.vz+=(h-i.vz)*u,r&&r.move&&(i.vx=l,i.vz=h),i.x+=i.vx*t,i.z+=i.vz*t,Kn(i,Tr,n),i.act&&(i.act.t+=t*gg(i),s&&i.act.t>=r.dur&&(i.act=null,i.comboT=0))}var Sr={x:In.x,z:In.z-5,r:1.2};function Kf(i,e,t){ud(i,{mx:e.mx,mz:e.mz},t,[]);let n=i.x-Sr.x,s=i.z-Sr.z,r=Math.hypot(n,s),a=Sr.r+Tr;if(r<a){let o=r>1e-4?a/r:0;i.x=Sr.x+(o?n*o:a),i.z=Sr.z+s*o}}function bg(i,e){i.phase==="lobby"&&(i.difficulty=Math.max(1,Math.min(Ps,e|0)))}function Jf(i){i.phase="play",i.t=0,i.chapter=Ma(i.difficulty),i.chapterRooms=N0(i.chapter),yt.forEach((n,s)=>{i.rooms[s].state=n.chapter===i.chapter?"idle":"off"});let e=en[i.chapter].start,t=i.players.length===1;i.players.forEach((n,s)=>{n.feathers=t?3:1,n.x=pg(s,e),n.z=e.z,n.vx=n.vz=0,n.face=-Math.PI/2,n.act=null,n.tp++}),rS(i,4,()=>xg(i,i.chapterRooms[0])),Le(i,{k:"start",ch:i.chapter})}function rS(i,e,t){(i.timers||=[]).push({at:i.t+e,fn:t})}function xg(i,e){let t=i.rooms[e];if(t.state!=="idle")return;t.state="active",t.wave=-1,t.waveT=1.2;let n=yt[e];i.sealed=$o(i.rooms.map(r=>r.state));let s=i.players.find(r=>r.alive&&Yo(r.x,r.z)===e);for(let r of i.players)Yo(r.x,r.z)!==e&&s&&(r.x=s.x+(i.rng()-.5)*2,r.z=s.z+(i.rng()-.5)*2,r.tp++);if(Le(i,{k:"room",i:e,state:"active",name:n.name}),n.boss){t.waveT=99;let r=Gn(...n.boss);La(i,n.bossKind,r.x,r.z,!1,e)}}var od=3.8;function aS(i,e){i.boss={id:e.id,kind:e.kind,phase:1,judged:!1,enraged:!1,queue:[],gauge:0,gaugeMax:0,judgeT:0,intro:od},e.face=Math.PI/2,e.act={id:"intro",t:0},e.iframeUntil=i.t+i.boss.intro;for(let t of i.enemies)t===e||t.dead||t.room!==e.room||(t.act?.id==="spawn"&&(t.act.t=Math.min(t.act.t,0)-(od-2),t.iframeUntil=i.t+od+.3),t.cd=Math.max(t.cd,od));Le(i,{k:"boss",s:"intro",id:e.id,kind:e.kind})}function oS(i,e){let t=i.rooms[e];t.state="cleared",i.sealed=$o(i.rooms.map(s=>s.state));let n=yt[e];if(Le(i,{k:"room",i:e,state:"cleared",name:n.name}),n.chest){let s=Gn(...n.chest);i.chests.push({id:wr(i),x:s.x,z:s.z+.6,open:!1,gold:!0,room:e})}}function vg(i,e=dc){if(i.phase==="lobby"){i.t+=e;for(let t of i.players)t.local&&Kf(t,t.input,e);return}if(i.t+=e,i.tick++,i.timers)for(let t=i.timers.length-1;t>=0;t--)i.timers[t].at<=i.t&&i.timers.splice(t,1)[0].fn();(i.phase==="victory"||i.phase==="wipe")&&(i.endT+=e);for(let t of i.players)cS(i,t,e);for(let t of i.enemies)uS(i,t,e);pS(i),vS(i,e),_S(i,e),yS(i,e),SS(i,e),dS(i,e),i.enemies=i.enemies.filter(t=>!(t.dead&&t.deadT>4.5)),i.phase==="play"&&i.players.length&&i.players.every(t=>!t.alive&&t.feathers<=0)&&(i.phase="wipe",Le(i,{k:"wipe"}))}function cS(i,e,t){if(e.hurtT>0&&(e.hurtT-=t),e.slowT>0&&(e.slowT-=t),e.shieldT>0&&(e.shieldT-=t,e.shieldT<=0&&(e.shield=0)),e.buffs=e.buffs.filter(n=>(n.t-=t)>0),e.local){if(e.alive&&e.input.attack&&(!e.act||Ot[e.act.id].combo!==void 0)){let r=uc(e,"basic",e.input.ax,e.input.az);r&&Le(i,{k:"act",id:e.id,a:r.id,dir:r.dir})}let n=e.act,s=n?n.t:0;ud(e,e.input,t,i.sealed,!1),e.act&&(ld(i,e,e.act===n?s:0,e.act.t,"player"),e.act&&e.act.t>=Ot[e.act.id].dur&&(e.act=null,e.comboT=0))}else if(e.act){let n=Ot[e.act.id],s=e.act.t;e.act.t+=t*gg(e),ld(i,e,s,e.act.t,"player"),e.act.t>=n.dur&&(e.act=null)}if(!e.local)for(let n in e.cds)e.cds[n]>0&&(e.cds[n]=Math.max(0,e.cds[n]-t))}function _g(i,e,t){let n=ht(i,e);!n||n.local||!n.alive||t.tp!==n.tp||(n.x=+t.x||n.x,n.z=+t.z||n.z,n.face=+t.f||0,n.y=+t.y||0,Kn(n,Tr,i.sealed))}function yg(i,e,t,n,s){let r=ht(i,e);if(!r)return;if(!r.alive){t==="potion"&&Mg(i,r);return}let a={x:r.x,z:r.z},o=uc(r,t,n,s);o&&(o.sx=a.x,o.sz=a.z,Le(i,{k:"act",id:r.id,a:o.id,dir:o.dir}))}function Er(i,e,t,n,s){let r=ht(i,e);if(!r)return null;if(!r.alive&&t==="potion")return Mg(i,r);let a=uc(r,t,n,s);return a&&Le(i,{k:"act",id:r.id,a:a.id,dir:a.dir}),a}function Mg(i,e){return e.alive||e.feathers<=0||e.downT<1.5?null:(e.feathers--,Zf(i,e,.5),!0)}function ld(i,e,t,n,s){let r=oc(e.act.id);if(!r)return;let a=e.act;r.iframes&&n>=r.iframes[0]&&t<=r.iframes[1]&&(e.iframeUntil=i.t+(r.iframes[1]-n));for(let o=0;o<(r.hits||[]).length;o++){let c=r.hits[o];if(c.every){let l=c.until??r.dur;for(let h=c.t;h<=l+1e-6;h+=c.every)h>t&&h<=n&&lg(i,e,c,s,`${o}`)}else c.t>t&&c.t<=n&&lg(i,e,c,s,`${o}`)}for(let o=0;o<(r.spawns||[]).length;o++){let c=r.spawns[o];c.t>=t&&c.t<n&&!a.done["s"+o]&&(a.done["s"+o]=!0,lS(i,e,c,s))}r.judgement&&!a.done.j&&(a.done.j=!0,gS(i,e,r.judgement))}function lg(i,e,t,n,s){let r=e.act,a=t.at==="target"?r.tx:e.x+Math.cos(r.dir)*(t.off||0),o=t.at==="target"?r.tz:e.z+Math.sin(r.dir)*(t.off||0),c=(n==="player"?r.dir:e.face)+(t.rot||0);if((!r.done["fx"+s]||t.every)&&(r.done["fx"+s]=!0,(t.fx||n==="player")&&Le(i,{k:"swing",id:e.id,fx:t.fx||"slash",x:a,z:o,dir:c,team:n})),n==="player")for(let l of i.enemies)l.dead||(l.iframeUntil||0)>i.t||t.once&&r.hitIds.includes(l.id)||ks(t.shape,a,o,c,l.x,l.z,l.r)&&(t.once&&r.hitIds.push(l.id),lc(i,l,e,t,a,o));else{t.tele&&fS(i,e.id,s);for(let l of i.players)l.alive&&(t.once&&r.hitIds.includes(l.id)||ks(t.shape,a,o,c,l.x,l.z,Tr)&&(t.once&&r.hitIds.push(l.id),fd(i,l,e,t.mult,a,o,t.kb,cc(i,t))))}}function lS(i,e,t,n){let s=e.act;if(t.proj){let r=Df[t.proj],a=n==="player"?s.dir:e.face;for(let o of t.fan||[0]){let c=a+o;i.projs.push({id:wr(i),kind:t.proj,team:n,owner:e.id,x:e.x+Math.cos(c)*.9,z:e.z+Math.sin(c)*.9,dir:c,speed:r.speed,r:r.r,life:r.life,mult:t.mult??r.mult,hits:[]})}Le(i,{k:"shoot",id:e.id,kind:t.proj})}if(t.zone){let r=t.zone,a=r.at==="all"?i.players.filter(o=>o.alive).map(o=>[o.x,o.z]):[[e.x,e.z]];if(r.at==="target")if(n==="player")a[0]=[s.tx,s.tz];else{let o=ht(i,e.target);o&&(a[0]=[o.x,o.z])}for(let[o,c]of a)r.scatter&&(o+=(i.rng()-.5)*2*r.scatter,c+=(i.rng()-.5)*2*r.scatter),i.zones.push({id:wr(i),team:r.team||n,owner:e.id,shape:r.shape,x:o,z:c,dir:s.dir??e.face,t:0,warn:r.warn,dur:r.dur,tick:r.tick||0,tickT:0,mult:r.mult,stag:r.stag||0,kb:r.kb||0,slow:r.slow||0,heal:r.heal||0,fx:r.fx,lethal:n!=="player"&&cc(i,r)})}if(t.behind){let r=ht(i,e.target)||i.players.find(a=>a.alive);r&&(Le(i,{k:"smoke",id:e.id,x:e.x,z:e.z,r:3}),e.x=r.x-Math.cos(r.face)*t.behind,e.z=r.z-Math.sin(r.face)*t.behind,Kn(e,e.r,i.sealed),e.face=cs(e,r),Le(i,{k:"smoke",id:e.id,x:e.x,z:e.z,r:3}))}if(t.buff){let r=t.buff;if(r.kind==="shield"){let a=r.pct*(ka(e).shieldMult||1);for(let o of i.players)o.alive&&Ni(o,e)<=r.radius&&(o.shield=Math.round(o.st.hp*a),o.shieldT=r.dur,Le(i,{k:"buff",id:o.id,kind:"shield"}))}else e.buffs.push({kind:r.kind,t:r.dur,atk:r.atk,speed:r.speed,dr:r.dr}),Le(i,{k:"buff",id:e.id,kind:r.kind})}if(t.heal&&e.potions>0){e.potions--;let r=Math.round(e.st.hp*t.heal);e.hp=Math.min(e.st.hp,e.hp+r),Le(i,{k:"heal",id:e.id,v:r})}if(t.taunt){for(let r of i.enemies)!r.dead&&Ni(r,e)<=t.taunt.radius&&(r.target=e.id,r.tauntBy=e.id,r.tauntT=t.taunt.dur,r.blindT=0);Le(i,{k:"taunt",id:e.id,x:e.x,z:e.z,r:t.taunt.radius})}if(t.chain){let r=t.chain,a=[[e.x,e.z]],o=new Set,c={x:s.tx,z:s.tz},l=3.5,h=r.mult;for(let d=0;d<r.n;d++){let u=null,f=1/0;for(let g of i.enemies){if(g.dead||o.has(g.id)||(g.iframeUntil||0)>i.t)continue;let p=Ni(g,c);p<=l+g.r&&p<f&&(f=p,u=g)}if(!u)break;o.add(u.id),a.push([u.x,u.z]);let m=u.x,b=u.z;lc(i,u,e,{mult:h,stag:r.stag,kb:.4},c.x,c.z),c={x:m,z:b},l=r.jump,h*=r.decay}a.length===1&&a.push([s.tx,s.tz]),Le(i,{k:"chain",id:e.id,pts:a})}if(t.miracle){let r=t.miracle;for(let a of i.players)Ni(a,e)>r.radius||(a.alive?Yf(i,a,a.st.hp*r.heal*(ka(e).healMult||1),e.id):Zf(i,a,r.revive));Le(i,{k:"miracle",id:e.id,x:e.x,z:e.z,r:r.radius})}if(t.smoke){for(let r of i.enemies)!r.dead&&Ni(r,e)<t.smoke&&(r.blindT=2.5,r.target=null);Le(i,{k:"smoke",id:e.id,x:e.x,z:e.z,r:t.smoke})}if(t.summon){let r=e.room??Yo(e.x,e.z),a=t.summon.n+(rt[e.kind]?.boss?dd(i)-1:0);for(let o=0;o<a;o++){let c=o/a*cd+i.rng()*.5,l={x:e.x+Math.cos(c)*t.summon.r,z:e.z+Math.sin(c)*t.summon.r};Kn(l,.6,i.sealed),i.enemies.filter(h=>!h.dead).length<40&&La(i,t.summon.kind,l.x,l.z,!1,r,!0)}Le(i,{k:"summon",id:e.id,x:e.x,z:e.z})}}function lc(i,e,t,n,s,r){let a=rt[e.kind],o=ag(e,t.x,t.z),c=e.stunT>0||e.act&&(e.act.id==="down"||e.act.id==="stun"),l=n.mult;n.lowHpScale&&(l*=1+n.lowHpScale*(1-t.hp/t.st.hp)),n.backMult&&o&&(l*=n.backMult);let h=og(sS(t),l,e.def,{back:o,stunned:c,rng:i.rng,backBonus:ka(t).backBonus||0}),d=h.dmg,u=!1;a.shield&&!o&&!c&&!(e.act&&e.act.id==="spawn")&&Math.cos(cs(e,t)-e.face)>.3&&(d=Math.round(d*(1-a.shield)),u=!0),e.hp-=d,t.dmgDealt+=d,Le(i,{k:"dmg",tid:e.id,v:d,crit:h.crit,back:o,blocked:u,x:e.x,z:e.z,by:t.id});let f=e.act?oc(e.act.id):null;if(n.counter&&f&&f.counterWindow&&e.act.t>=f.counterWindow[0]&&e.act.t<=f.counterWindow[1]&&(hc(i,e.id),e.act={id:"stun",t:0,dir:e.face,done:{},hitIds:[]},Le(i,{k:"counter",id:e.id,by:t.id,x:e.x,z:e.z})),i.boss&&i.boss.id===e.id&&i.boss.gaugeMax>0&&n.stag&&(i.boss.gauge=Math.max(0,i.boss.gauge-n.stag),i.boss.gauge<=0&&xS(i,e)),e.hp<=0){hS(i,e,t);return}if(!a.boss&&!e.elite){let m=Math.atan2(e.z-r,e.x-s),b=(n.kb||0)*(u?.3:1);e.kbx+=Math.cos(m)*b*6,e.kbz+=Math.sin(m)*b*6,!(e.act&&oc(e.act.id)?.super)&&(e.poise||0)<=0&&(!e.act||e.act.id!=="spawn")&&(hc(i,e.id),e.act={id:"hit",t:0,dir:e.face,done:{},hitIds:[]},e.poise=.9)}}function hS(i,e,t){e.dead=!0,e.hp=0,e.deadT=0,e.act=null,hc(i,e.id),i.stats.kills++,t&&t.kills++;let n=rt[e.kind],s=Math.round(n.xp*(e.elite?_r.xp:1)*Ea(i.difficulty).xp);Le(i,{k:"kill",id:e.id,kind:e.kind,x:e.x,z:e.z,xp:s});let r=e.summoned?n.drop*.3:e.elite?_r.drop:n.drop??0;for(let a of i.players){let o=n.boss?n.loot:i.rng()<r?1:0;for(let c=0;c<o;c++)Sg(i,a,e.x,e.z,n.boss?2.2:e.elite?.7:0)}if(n.boss&&yt[e.room]?.boss){i.phase="victory",i.endT=0,i.zones=i.zones.filter(c=>c.team==="player");for(let c of i.enemies)c.dead||(c.dead=!0,c.deadT=0,c.act=null,Le(i,{k:"kill",id:c.id,kind:c.kind,x:c.x,z:c.z,xp:0}));let a=yt[e.room],o=i.chapter<ui?i.chapter+1:0;i.portal={x:(a.x0+a.x1)/2*4,z:(a.z0+a.z1)/2*4+2,next:o},Le(i,{k:"victory",id:e.id,x:e.x,z:e.z,face:e.face,ch:i.chapter,next:o})}}function Sg(i,e,t,n,s){let r=i.rng()*cd,a=1+i.rng()*1.8,o={x:t+Math.cos(r)*a,z:n+Math.sin(r)*a};Kn(o,.3,i.sealed);let c=Ea(i.difficulty),l=Math.max(1,e.level+Math.floor(i.rng()*3)+c.ilvl),h=$0(i.rng,{ilvl:l,cls:e.cls,luck:s+c.luck});i.drops.push({id:wr(i),owner:e.id,x:o.x,z:o.z,item:h,t:0})}function fd(i,e,t,n,s,r,a=0,o=!1){if(!e.alive||!o&&e.hurtT>0||(e.iframeUntil||0)>i.t){(e.iframeUntil||0)>i.t&&Le(i,{k:"evade",id:e.id,x:e.x,z:e.z});return}if(o){e.shield=0,e.hp=0,e.alive=!1,e.downT=0,e.revive=0,e.act=null,e.downs++,Le(i,{k:"doom",id:e.id,x:e.x,z:e.z}),Le(i,{k:"pdown",id:e.id,x:e.x,z:e.z});return}let l=(t.st||{atk:60}).atk*n*(.9+i.rng()*.2)*(100/(100+e.st.def));for(let h of e.buffs)h.dr&&(l*=1-h.dr);if(l*=1-(ka(e).dr||0),l=Math.round(l),e.shield>0){let h=Math.min(e.shield,l);e.shield-=h,l-=h,Le(i,{k:"shieldhit",id:e.id,v:h})}if(e.hp-=l,e.hurtT=nS,a){let h=Math.atan2(e.z-r,e.x-s);Le(i,{k:"kb",id:e.id,x:Math.cos(h)*a*5,z:Math.sin(h)*a*5}),e.local&&(e.kbx+=Math.cos(h)*a*5,e.kbz+=Math.sin(h)*a*5)}Le(i,{k:"phurt",id:e.id,v:l,x:e.x,z:e.z}),e.hp<=0&&(e.hp=0,e.alive=!1,e.downT=0,e.revive=0,e.act=null,e.downs++,Le(i,{k:"pdown",id:e.id,x:e.x,z:e.z}))}function Zf(i,e,t){e.alive=!0,e.hp=Math.round(e.st.hp*t),e.downT=0,e.revive=0,e.hurtT=2,e.iframeUntil=i.t+2,Le(i,{k:"previve",id:e.id,x:e.x,z:e.z})}function dS(i,e){for(let t of i.players){if(t.alive)continue;t.downT+=e;let n=i.players.find(s=>s!==t&&s.alive&&Ni(s,t)<tS);n&&(t.revive+=e,t.revive>=eS&&(n.revives++,Zf(i,t,.4)))}}function La(i,e,t,n,s=!1,r=-1,a=!1){let o=rt[e],c=dd(i),l=Ea(i.difficulty),h=(o.boss?G0(c).hp:1+.55*(c-1))*l.hp,d=Math.round(o.hp*h*(s?_r.hp:1)),u={id:wr(i),kind:e,elite:s,x:t,z:n,face:Math.PI/2,hp:d,maxHp:d,r:o.r*(s?1.2:1),st:{atk:o.atk*(s?_r.atk:1)*l.atk},def:o.def,speed:o.speed,act:{id:"spawn",t:0,dir:Math.PI/2,done:{},hitIds:[]},cd:1+i.rng(),target:null,think:0,path:null,kbx:0,kbz:0,poise:0,stunT:0,blindT:0,slowT:0,dead:!1,deadT:0,room:r,summoned:a,strafe:i.rng()<.5?1:-1};return i.enemies.push(u),Le(i,{k:"espawn",id:u.id,kind:e,x:t,z:n}),o.boss&&aS(i,u),u}function Tg(i,e){if(e.tauntT>0){let s=ht(i,e.tauntBy);if(s&&s.alive)return s}let t=null,n=1/0;for(let s of i.players){if(!s.alive)continue;let r=Ni(s,e)-(s.id===e.target?3:0);r<n&&(rt[e.kind].boss||Yo(s.x,s.z)===e.room||r<14)&&(n=r,t=s)}return t}function uS(i,e,t){if(e.dead){e.deadT+=t;return}let n=rt[e.kind];e.poise>0&&(e.poise-=t),e.blindT>0&&(e.blindT-=t),e.tauntT>0&&(e.tauntT-=t,e.target!==e.tauntBy&&ht(i,e.tauntBy)?.alive&&(e.think=0)),e.slowT>0&&(e.slowT-=t),e.cd-=t;let s=0,r=0;if(n.boss){mS(i,e,t);return}if(e.act){let o=oc(e.act.id),c=e.act.t;if(e.act.t+=t,o.move)for(let[l,h,d]of o.move)e.act.t>=l&&e.act.t<h&&(s+=Math.cos(e.face)*d,r+=Math.sin(e.face)*d);if(o.aimLock&&e.act.t<o.aimLock){let l=ht(i,e.target);l&&(e.face=cs(e,l))}ld(i,e,c,e.act.t,"enemy"),e.act&&e.act.t>=o.dur&&(e.act=null,hc(i,e.id))}else{e.think-=t;let o=e.blindT>0?null:ht(i,e.target);if(e.think<=0&&e.blindT<=0){e.think=.4;let c=Tg(i,e);e.target=c?c.id:null,o=c}if(o&&o.alive){let c=Ni(e,o),l=Ko(e.x,e.z,o.x,o.z,i.sealed),h=cs(e,o);e.face=Xf(e.face,h,t*8);let d=e.speed*(e.slowT>0?.5:1);n.keep?(c<n.keep-2?(s=-Math.cos(h)*d,r=-Math.sin(h)*d):c>n.range-1||!l?hg(i,e,o,d,(u,f)=>{s=u,r=f}):(s=-Math.sin(h)*d*.5*e.strafe,r=Math.cos(h)*d*.5*e.strafe),c<n.range&&l&&e.cd<=0&&dg(i,e,o)):(c>n.range*.8&&hg(i,e,o,d*(c>8?1.25:1),(u,f)=>{s=u,r=f}),c<n.range&&e.cd<=0&&Math.abs(Eg(e.face,h))<.5&&dg(i,e,o))}}s+=e.kbx,r+=e.kbz;let a=Math.exp(-t*8);e.kbx*=a,e.kbz*=a,e.vx=s,e.vz=r,e.x+=s*t,e.z+=r*t,Kn(e,e.r,i.sealed)}function hg(i,e,t,n,s){let r=t.x,a=t.z;if((!e.walkLos||e.walkLos.t<i.t)&&(e.walkLos={t:i.t+.25,ok:Ko(e.x,e.z,t.x,t.z,i.sealed,e.r)}),!e.walkLos.ok){if(!e.path||e.path.t<i.t){let c=Hh(e.x,e.z,t.x,t.z,i.sealed);e.path={x:c?c.x:t.x,z:c?c.z:t.z,t:i.t+.5}}r=e.path.x,a=e.path.z}let o=Math.atan2(a-e.z,r-e.x);s(Math.cos(o)*n,Math.sin(o)*n)}function dg(i,e,t){let n=rt[e.kind],s=n.attacks[Math.floor(i.rng()*n.attacks.length)],r=Cs[s];e.face=cs(e,t),e.act={id:s,t:0,dir:e.face,done:{},hitIds:[],tx:t.x,tz:t.z},e.cd=r.cd*(e.elite?.7:1)*(.8+i.rng()*.5),wg(i,e,r),Le(i,{k:"eact",id:e.id,a:s})}function wg(i,e,t){(t.hits||[]).forEach((n,s)=>{if(!n.tele)return;let r=n.teleShape||n.shape,a=n.teleAt==="target",o=a?e.act.tx:e.x+Math.cos(e.face)*(n.tele==="rect"?0:n.off||0),c=a?e.act.tz:e.z+Math.sin(e.face)*(n.tele==="rect"?0:n.off||0);i.zones.push({id:wr(i),team:"tele",owner:e.id,key:`${s}`,shape:r,x:o,z:c,dir:e.face+(n.rot||0),rot:n.rot||0,t:0,warn:n.t,dur:.15,atTarget:a,lethal:cc(i,n)})}),t.tele&&i.zones.push({id:wr(i),team:"tele",owner:e.id,key:"aim",shape:t.tele.shape,x:e.x,z:e.z,dir:e.face,t:0,warn:t.tele.until,dur:.05,track:!0})}function fS(i,e,t){i.zones=i.zones.filter(n=>!(n.team==="tele"&&n.owner===e&&n.key===t))}function hc(i,e){i.zones=i.zones.filter(t=>!(t.team==="tele"&&t.owner===e))}function pS(i){let e=i.enemies;for(let t=0;t<e.length;t++){let n=e[t];if(!n.dead)for(let s=t+1;s<e.length;s++){let r=e[s];if(r.dead)continue;let a=r.x-n.x,o=r.z-n.z,c=n.r+r.r,l=a*a+o*o;if(l<c*c&&l>1e-6){let h=Math.sqrt(l),d=(c-h)/2,u=rt[n.kind].boss?0:1,f=rt[r.kind].boss?0:1,m=u+f||1;n.x-=a/h*d*(u/m)*2,n.z-=o/h*d*(u/m)*2,r.x+=a/h*d*(f/m)*2,r.z+=o/h*d*(f/m)*2}}}}var Eg=(i,e)=>{let t=e-i;for(;t>Math.PI;)t-=cd;for(;t<-Math.PI;)t+=cd;return t};function Xf(i,e,t){let n=Eg(i,e);return i+Math.max(-t,Math.min(t,n))}function mS(i,e,t){let n=i.boss,s=rt[e.kind];if(e.act){if(e.act.id==="intro"){e.act.t+=t,e.act.t>=n.intro&&(e.act=null,e.cd=1,Le(i,{k:"boss",s:"fight",id:e.id}));return}let l=oc(e.act.id),h=e.act.t;e.act.t+=t;let d=0,u=0;if(l.move)for(let[b,g,p]of l.move)e.act.t>=b&&e.act.t<g&&(d+=Math.cos(e.face)*p,u+=Math.sin(e.face)*p);if(l.leap){let[b,g]=l.leap,p=Math.max(0,Math.min(1,(e.act.t-b)/(g-b))),v=p*p*(3-2*p);e.x=e.act.sx+(e.act.tx-e.act.sx)*v,e.z=e.act.sz+(e.act.tz-e.act.sz)*v,e.y=Math.sin(p*Math.PI)*5}else e.y=0;let f=l.hits&&l.hits[0]?l.hits[0].t:0,m=ht(i,e.target);if(m&&e.act.t<f*.55&&!l.leap&&!l.noTrack){e.face=Xf(e.face,cs(e,m),t*2.5);for(let b of i.zones)b.team==="tele"&&b.owner===e.id&&!b.atTarget&&(b.dir=e.face+(b.rot||0),b.x=e.x,b.z=e.z)}if(ld(i,e,h,e.act.t,"enemy"),l.judgement&&bS(i,e,t),e.x+=d*t,e.z+=u*t,Kn(e,e.r,i.sealed),e.act&&e.act.t>=l.dur){let b=e.act.id;if(e.act=null,hc(i,e.id),b==="down"){e.act={id:"getup",t:0,dir:e.face,done:{},hitIds:[]};return}e.cd=n.queue.length?.15:n.enraged?.7:1.3}return}let r=e.hp/e.maxHp;if(s.judgement&&!n.judged&&r<=.55){n.judged=!0,n.phase=2,n.queue=[],ug(i,e,"kg_judgement"),Le(i,{k:"boss",s:"p2",id:e.id});return}if(!s.judgement&&n.phase===1&&r<=.5&&(n.phase=2,n.queue=[],Le(i,{k:"boss",s:"phase2",id:e.id,kind:e.kind})),!n.enraged&&r<=.25&&(n.enraged=!0,Le(i,{k:"boss",s:"enrage",id:e.id,kind:e.kind})),e.think-=t,e.think<=0){e.think=.5;let l=Tg(i,e);e.target=l?l.id:null}let a=ht(i,e.target);if(!a)return;let o=Ni(e,a),c=cs(e,a);if(e.face=Xf(e.face,c,t*3),e.cd>0&&!n.queue.length){let l=s.keep?o<s.keep-1?-1:o>s.keep+4?1:0:o>5?1:0;if(l){let h=s.speed*(n.enraged?1.3:1)*l;e.x+=Math.cos(c)*h*t,e.z+=Math.sin(c)*h*t,Kn(e,e.r,i.sealed),e.moving=!0}else e.moving=!1;return}if(e.moving=!1,!n.queue.length){let l=V0[s.patterns][n.phase].filter(d=>d.every(u=>(Cs[u].minDiff||1)<=i.difficulty)),h=l[Math.floor(i.rng()*l.length)];s.gap&&o>11&&i.rng()<.6&&(h=[s.gap]),h[0]===n.last&&l.length>1&&(h=l[(l.indexOf(h)+1)%l.length]),n.last=h[0],n.queue=[...h]}ug(i,e,n.queue.shift())}function ug(i,e,t){let n=Cs[t],s=ht(i,e.target)||i.players.find(r=>r.alive);if(s&&(e.face=cs(e,s)),e.act={id:t,t:0,dir:e.face,done:{},hitIds:[],sx:e.x,sz:e.z,tx:s?s.x:e.x,tz:s?s.z:e.z},n.leap){let r={x:e.act.tx,z:e.act.tz};Kn(r,e.r,i.sealed),e.act.tx=r.x,e.act.tz=r.z}wg(i,e,n),((n.hits||[]).some(r=>cc(i,r))||(n.spawns||[]).some(r=>cc(i,r.zone)))&&Le(i,{k:"doomcast",id:e.id}),n.counterWindow&&Le(i,{k:"counterable",id:e.id,dur:n.counterWindow[1]-n.counterWindow[0]}),Le(i,{k:"eact",id:e.id,a:t})}function gS(i,e,t){let n=i.boss;n.gaugeMax=170*(1+.8*(dd(i)-1)),n.gauge=n.gaugeMax,n.judgeT=t.time,Le(i,{k:"boss",s:"judgement",id:e.id})}function bS(i,e,t){let n=i.boss;if(!(n.gaugeMax<=0)&&(n.judgeT-=t,n.judgeT<=0)){n.gaugeMax=0;for(let s of i.players)fd(i,s,e,Cs.kg_judgement.judgement.mult,e.x,e.z,3);Le(i,{k:"boss",s:"judgeFail",id:e.id,x:e.x,z:e.z}),e.act=null,e.cd=1.5}}function xS(i,e){let t=i.boss;t.gaugeMax=0,t.gauge=0,e.act={id:"down",t:0,dir:e.face,done:{},hitIds:[]},Le(i,{k:"boss",s:"judgeOk",id:e.id,x:e.x,z:e.z})}function vS(i,e){for(let t=i.projs.length-1;t>=0;t--){let n=i.projs[t],s=Df[n.kind];n.life-=e,n.x+=Math.cos(n.dir)*n.speed*e,n.z+=Math.sin(n.dir)*n.speed*e;let r=n.life<=0,a={x:n.x,z:n.z};if(!r&&Kn(a,.1,i.sealed)&&(r=!0),!r)if(n.team==="player"){let o=ht(i,n.owner);for(let c of i.enemies)if(!(c.dead||n.hits.includes(c.id)||(c.iframeUntil||0)>i.t)&&!(Math.hypot(c.x-n.x,c.z-n.z)>c.r+n.r)&&(n.hits.push(c.id),o&&lc(i,c,o,{mult:n.mult,stag:s.stag,kb:s.kb},n.x-Math.cos(n.dir),n.z-Math.sin(n.dir)),!s.pierce)){r=!0;break}}else for(let o of i.players){if(!o.alive||Math.hypot(o.x-n.x,o.z-n.z)>Tr+n.r)continue;let c=i.enemies.find(l=>l.id===n.owner)||{st:{atk:70}};fd(i,o,c,n.mult,n.x,n.z,.6),r=!0;break}if(r){if(s.explode&&n.team==="player"){let o=ht(i,n.owner);for(let c of i.enemies)!c.dead&&Math.hypot(c.x-n.x,c.z-n.z)<s.explode.r+c.r&&o&&lc(i,c,o,s.explode,n.x,n.z);Le(i,{k:"explode",x:n.x,z:n.z,r:s.explode.r,fx:"fire"})}else Le(i,{k:"phit",x:n.x,z:n.z,kind:n.kind});i.projs.splice(t,1)}}}function _S(i,e){for(let t of[...i.zones]){if(t.gone)continue;let n=t.t;if(t.t+=e,t.track){let s=i.enemies.find(r=>r.id===t.owner);s&&(t.x=s.x,t.z=s.z,t.dir=s.face)}if(t.team==="tele"){t.t>t.warn+t.dur&&(t.gone=!0);continue}if(t.t>=t.warn){let s=n<t.warn||n===0;if(t.tickT-=e,s||t.tick&&t.tickT<=0){if(t.tickT=t.tick,s&&Le(i,{k:"zonefire",id:t.id,fx:t.fx,x:t.x,z:t.z,r:t.shape.r||t.shape.r2}),t.team==="player"&&t.heal){let r=ht(i,t.owner),a=t.heal*(r&&ka(r).healMult||1);for(let o of i.players)o.alive&&ks(t.shape,t.x,t.z,t.dir,o.x,o.z,Tr)&&Yf(i,o,o.st.hp*a,t.owner)}if(t.team==="player"&&t.mult){let r=ht(i,i.players.some(a=>a.id===t.owner)?t.owner:-1);for(let a of i.enemies)a.dead||!ks(t.shape,t.x,t.z,t.dir,a.x,a.z,a.r)||(r&&lc(i,a,r,{mult:t.mult,stag:t.stag,kb:t.kb},t.x,t.z),t.slow&&(a.slowT=.6))}else if(t.team!=="player"){let r=i.enemies.find(a=>a.id===t.owner)||{st:{atk:70}};for(let a of i.players)a.alive&&ks(t.shape,t.x,t.z,t.dir,a.x,a.z,Tr)&&fd(i,a,r,t.mult,t.x,t.z,t.kb,t.lethal)}}t.t>=t.warn+t.dur&&(t.gone=!0)}}i.zones=i.zones.filter(t=>!t.gone)}function yS(i,e){i.phase==="play"&&i.chapterRooms.forEach((t,n)=>{let s=yt[t],r=i.rooms[t];if(r.state==="idle"&&n>0&&i.rooms[i.chapterRooms[n-1]].state==="cleared"&&i.players.some(c=>c.alive&&MS(s,c.x,c.z))&&xg(i,t),!(r.state!=="active"||s.boss||i.enemies.some(o=>!o.dead&&o.room===t))&&(r.waveT-=e,!(r.waveT>0))){if(r.wave++,r.wave>=s.waves.length){oS(i,t);return}for(let[o,c,l,h]of s.waves[r.wave]){let d=Gn(c,l);La(i,o,d.x+(i.rng()-.5)*2,d.z+(i.rng()-.5)*2,!!h,t)}for(let o=1;o<dd(i);o++){let[c,l,h]=s.waves[r.wave][o%s.waves[r.wave].length],d=Gn(l,h);La(i,c==="mage"||rt[c].boss?"minion":c,d.x+(i.rng()-.5)*3,d.z+(i.rng()-.5)*3,!1,t)}r.waveT=1.4,Le(i,{k:"wave",i:t,n:r.wave+1,of:s.waves.length})}})}function MS(i,e,t){let n=(i.x0-.5)*4+1.5,s=(i.x1+.5)*4-1.5,r=(i.z0-.5)*4+1.5,a=(i.z1+.5)*4-1.5;return e>n&&e<s&&t>r&&t<a}function SS(i,e){for(let t=i.drops.length-1;t>=0;t--){let n=i.drops[t];n.t+=e;let s=ht(i,n.owner);if(!s){i.drops.splice(t,1);continue}s.alive&&n.t>.8&&Math.hypot(s.x-n.x,s.z-n.z)<1.8&&(i.drops.splice(t,1),Le(i,{k:"loot",pid:s.id,item:n.item}))}for(let t of i.chests)if(!(t.open||!i.players.find(s=>s.alive&&Math.hypot(s.x-t.x,s.z-t.z)<2.4))){t.open=!0,Le(i,{k:"chest",id:t.id,x:t.x,z:t.z});for(let s of i.players)for(let r=0;r<2;r++)Sg(i,s,t.x,t.z+1.5,t.gold?1.2:.5)}}function Qf(i){return{cds:i.cds,potions:i.potions,feathers:i.feathers,st:i.st,combo:i.combo}}pi();xr();rs();var Rg="ashen-crown-v1-",Ag="ABCDEFGHJKLMNPQRSTUVWXYZ23456789",Cg={debug:0};function tp(i=4){let e="";for(let t=0;t<i;t++)e+=Ag[Math.random()*Ag.length|0];return e}function pd(i){return String(i||"").toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,6)}function Pg(){if(!window.Peer)throw new Error("\uB124\uD2B8\uC6CC\uD06C \uBAA8\uB4C8\uC744 \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. \uC778\uD130\uB137 \uC5F0\uACB0\uC744 \uD655\uC778\uD558\uC138\uC694.")}function Ig(i,e=null){return Pg(),new Promise((t,n)=>{let s=0,r=()=>{let a=e||tp(),o=new window.Peer(Rg+a,Cg),c=!1;o.on("open",()=>{c=!0,t({code:a,peer:o})}),o.on("connection",i),o.on("error",l=>{if(!c&&l.type==="unavailable-id"&&s++<5){o.destroy(),setTimeout(r,e?1500:0);return}if(!c&&l.type==="unavailable-id"){n(new Error("\uC774 \uC6D4\uB4DC\uAC00 \uC774\uBBF8 \uB2E4\uB978 \uCC3D\uC5D0\uC11C \uC5F4\uB824 \uC788\uC2B5\uB2C8\uB2E4. \uADF8 \uCC3D\uC744 \uB2EB\uACE0 \uC7A0\uC2DC \uB4A4 \uB2E4\uC2DC \uC5EC\uC138\uC694."));return}c?console.warn("[peer]",l.type,l):n(new Error(ep(l)))}),o.on("disconnected",()=>{o.destroyed||o.reconnect()})};r()})}function kg(i){return Pg(),new Promise((e,t)=>{let n=new window.Peer(Cg),s=!1,r=o=>{s||(s=!0,n.destroy(),t(new Error(o)))},a=setTimeout(()=>r("\uC5F0\uACB0 \uC2DC\uAC04\uC774 \uCD08\uACFC\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uCF54\uB4DC\uB97C \uD655\uC778\uD558\uAC70\uB098 \uB2E4\uC2DC \uC2DC\uB3C4\uD558\uC138\uC694."),15e3);n.on("open",()=>{let o=n.connect(Rg+pd(i),{reliable:!0,serialization:"json"});o.on("open",()=>{s||(s=!0,clearTimeout(a),e({peer:n,conn:o}))}),o.on("error",c=>r(ep(c)))}),n.on("error",o=>{clearTimeout(a),r(ep(o))})})}function ep(i){switch(i&&i.type){case"peer-unavailable":return"\uD574\uB2F9 \uCF54\uB4DC\uC758 \uC6D4\uB4DC\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uC6D4\uB4DC \uC8FC\uC778\uC774 \uC6D4\uB4DC\uB97C \uC5F4\uC5B4 \uB450\uC5C8\uB294\uC9C0 \uD655\uC778\uD558\uC138\uC694.";case"network":case"server-error":case"socket-error":case"socket-closed":return"\uC5F0\uACB0 \uC11C\uBC84\uC5D0 \uC811\uC18D\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uC7A0\uC2DC \uD6C4 \uB2E4\uC2DC \uC2DC\uB3C4\uD558\uC138\uC694.";case"browser-incompatible":return"\uC774 \uBE0C\uB77C\uC6B0\uC800\uB294 \uC628\uB77C\uC778 \uD611\uB3D9\uC744 \uC9C0\uC6D0\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.";case"webrtc":return"\uC0C1\uB300\uC640 \uC9C1\uC811 \uC5F0\uACB0\uD558\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4(\uB124\uD2B8\uC6CC\uD06C \uBC29\uD654\uBCBD \uAC00\uB2A5\uC131).";default:return i&&i.message||"\uC54C \uC218 \uC5C6\uB294 \uB124\uD2B8\uC6CC\uD06C \uC624\uB958"}}var Lg=20,bd=4200,TS=.1,Rt=i=>Math.round(i*100)/100,wS=100,ES=.4,md=i=>String(i??"").replace(/\s+/g," ").trim().slice(0,wS);function AS(i){return{id:i.id,cls:i.cls,spec:i.spec,look:i.look,name:i.name,x:i.x,z:i.z,y:i.y||0,face:i.face,hp:Math.max(0,Math.round(i.hp)),maxHp:i.st.hp,shield:i.shield,alive:i.alive,act:i.act?i.act.id:null,actT:i.act?i.act.t:0,moving:Math.hypot(i.vx||0,i.vz||0)>.6,speed:Math.hypot(i.vx||0,i.vz||0),downT:i.downT,revive:i.revive,tp:i.tp,level:i.level,rage:i.buffs.some(e=>e.kind==="rage")}}function RS(i,e){return{id:i.id,kind:i.kind,elite:i.elite,x:i.x,z:i.z,y:i.y||0,face:i.face,hp:Math.max(0,Math.round(i.hp)),maxHp:i.maxHp,act:i.act?i.act.id:null,actT:i.act?i.act.t:0,dead:i.dead,deadT:i.deadT,moving:i.moving??Math.hypot(i.vx||0,i.vz||0)>.4,speed:Math.hypot(i.vx||0,i.vz||0)||(i.moving?3.6:0),intro:i.act&&i.act.id==="intro",slow:i.slowT>0}}function Dg(i,e){let t=i.boss&&i.enemies.find(n=>n.id===i.boss.id);return{t:i.t,phase:i.phase,endT:i.endT,difficulty:i.difficulty,chapter:i.chapter||1,rooms:i.rooms.map(n=>n.state),players:i.players.map(AS),enemies:i.enemies.map(n=>RS(n,i)),projs:i.projs.map(n=>({id:n.id,kind:n.kind,x:n.x,z:n.z,dir:n.dir,team:n.team})),zones:i.zones.map(n=>({id:n.id,team:n.team,shape:n.shape,x:n.x,z:n.z,dir:n.dir,t:n.t,warn:n.warn,dur:n.dur,fx:n.fx,lethal:n.lethal||void 0})),drops:i.drops.filter(n=>n.owner===e).map(n=>({id:n.id,x:n.x,z:n.z,rarity:n.item.rarity,name:n.item.name})),chests:i.chests.map(n=>({id:n.id,x:n.x,z:n.z,open:n.open})),portal:i.portal||null,boss:t?{id:t.id,kind:t.kind,hp:Math.max(0,Math.round(t.hp)),maxHp:t.maxHp,phase:i.boss.phase,gauge:i.boss.gauge,gaugeMax:i.boss.gaugeMax,judgeT:i.boss.judgeT,enraged:i.boss.enraged,dead:t.dead}:null}}var Ng=i=>i.k==="loot"?i.pid:null,Na=i=>({name:String(i.name||"\uBAA8\uD5D8\uAC00").slice(0,12),cls:$e[i.cls]?i.cls:"knight",spec:String(i.spec||""),look:Ta(i.look),level:Math.max(1,Math.min(20,i.level|0)),gear:i.gear?zg(i.gear):Object.values(i.equipped||{}).filter(Boolean)}),fc=class{constructor({profile:e,online:t,difficulty:n=1,world:s=null,handlers:r={}}){this.mode="host",this.online=t,this.h=r,this.profile=e,this.worldInfo=s,this.localId=1,this.nextPid=2,this.world=hd(void 0,n),Da(this.world,{id:1,...Na(e.character),local:!0}),this.peers=new Map,this.acc=0,this.snapAcc=0,this.fx=[],this.net=[],this.code=null}async open(){if(!this.online)return;let{code:e,peer:t}=await Ig(n=>this.onConnection(n),this.worldInfo?.code);this.code=e,this.peer=t}onConnection(e){e.on("open",()=>{let t=this.world;if(t.players.length>=4||t.phase!=="lobby"){e.send({t:"bye",reason:t.phase!=="lobby"?"\uC6D4\uB4DC \uD30C\uD2F0\uAC00 \uB358\uC804 \uC548\uC5D0 \uC788\uC2B5\uB2C8\uB2E4. \uB300\uAE30\uC2E4\uB85C \uB3CC\uC544\uC624\uBA74 \uB2E4\uC2DC \uCC38\uAC00\uD558\uC138\uC694.":"\uC6D4\uB4DC\uAC00 \uAC00\uB4DD \uCC3C\uC2B5\uB2C8\uB2E4 (\uCD5C\uB300 4\uBA85)."}),setTimeout(()=>e.close(),300);return}let n={conn:e,pid:0};this.peers.set(e.peer,n),e.on("data",s=>this.onMessage(n,s)),e.on("close",()=>this.dropPeer(e.peer)),e.on("error",()=>this.dropPeer(e.peer))})}onMessage(e,t){if(!t||typeof t!="object")return;let n=this.world;if(t.t==="hello"&&!e.pid){e.joining||(e.joining=!0,this.admit(e,t).finally(()=>{e.joining=!1}));return}if(e.pid)switch(t.t){case"m":_g(n,e.pid,t);break;case"c":{let s=ht(n,e.pid);if(!s)break;t.k in s.cds&&s.cds[t.k]<.3&&(s.cds[t.k]=0),s.alive&&s.act&&t.k!=="potion"&&(s.act=null);let r=Zo(s.cls,s.spec);t.k==="basic"&&r.includes(t.a)&&(s.combo=r.indexOf(t.a),s.comboT=s.combo?.01:-1),yg(n,e.pid,t.k,+t.ax,+t.az);break}case"gear":{let s=Math.max(1,Math.min(20,t.level|0)),r=zg(t.gear);$f(n,e.pid,s,r),Object.assign(e.char,{level:s,gear:r});break}case"char":{if(n.phase!=="lobby")break;e.char=Na(t),jf(n,e.pid,e.char),this.broadcastRoster();break}case"progress":this.worldInfo&&e.uid&&t.data&&typeof t.data=="object"&&this.worldInfo.save(e.uid,e.char.name,t.data);break;case"ping":e.conn.send({t:"pong",c:t.c});break;case"ready":this.portalOpen&&!this.portalGo&&(this.portalReady.add(e.pid),this.broadcastPortal());break;case"chat":{let s=performance.now()/1e3;if(s-(e.chatT||0)<ES)break;e.chatT=s,this.say(e.pid,t.text);break}}}say(e,t){let n=ht(this.world,e),s=md(t);n&&s&&this.relayChat({id:e,name:n.name,cls:n.cls,text:s})}relayChat(e){for(let t of this.peers.values())if(t.pid)try{t.conn.send({t:"chat",...e})}catch{}this.h.onChat?.(e)}chat(e){this.say(this.localId,e)}async admit(e,t){let n=l=>{try{e.conn.send({t:"bye",reason:l})}catch{}setTimeout(()=>e.conn.close(),300)},s=this.worldInfo;if(!s)return n("\uC774 \uD30C\uD2F0\uB294 \uCC38\uAC00\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.");if(!await s.verify(t.password))return n("\uBE44\uBC00\uBC88\uD638\uAC00 \uD2C0\uB838\uC2B5\uB2C8\uB2E4.");let r=String(t.uid||"").slice(0,40);if(r.length<8||r===this.profile.uid||[...this.peers.values()].some(l=>l!==e&&l.uid===r))return n("\uAC19\uC740 \uBE0C\uB77C\uC6B0\uC800\uC758 \uCE90\uB9AD\uD130\uAC00 \uC774\uBBF8 \uC774 \uC6D4\uB4DC\uC5D0 \uC811\uC18D\uD574 \uC788\uC2B5\uB2C8\uB2E4.");let a=this.world;if(a.phase!=="lobby")return n("\uC6D4\uB4DC \uD30C\uD2F0\uAC00 \uB358\uC804 \uC548\uC5D0 \uC788\uC2B5\uB2C8\uB2E4. \uB300\uAE30\uC2E4\uB85C \uB3CC\uC544\uC624\uBA74 \uB2E4\uC2DC \uCC38\uAC00\uD558\uC138\uC694.");if(a.players.length>=4)return n("\uC6D4\uB4DC\uAC00 \uAC00\uB4DD \uCC3C\uC2B5\uB2C8\uB2E4 (\uCD5C\uB300 4\uBA85).");if(!this.peers.has(e.conn.peer))return;let o=String(t.name||"\uBAA8\uD5D8\uAC00").slice(0,12),c=s.progressFor(r,o);s.save(r,o,c),e.uid=r,e.pid=this.nextPid++,e.char=Na({...c.chars[c.current],name:o}),Da(a,{id:e.pid,...e.char}),e.conn.send({t:"welcome",pid:e.pid,seed:a.seed,world:{name:s.name,code:s.code},progress:c}),this.broadcastRoster(),this.relayChat({sys:!0,text:`${e.char.name} \uB2D8\uC774 \uC6D4\uB4DC\uC5D0 \uB4E4\uC5B4\uC654\uC2B5\uB2C8\uB2E4`})}setChar(e){jf(this.world,this.localId,Na(e)),this.broadcastRoster()}backToLobby(){let e=this.world;this.world=hd(void 0,e.difficulty),Da(this.world,{id:this.localId,...Na(this.profile.character),local:!0});for(let t of this.peers.values())t.pid&&Da(this.world,{id:t.pid,...t.char});this.fx=[],this.net=[],this.acc=0;for(let t of this.peers.values())if(t.pid)try{t.conn.send({t:"lobby"})}catch{}this.broadcastRoster()}dropPeer(e){let t=this.peers.get(e);if(t&&(this.peers.delete(e),t.pid)){let n=ht(this.world,t.pid);mg(this.world,t.pid),this.broadcastRoster(),n&&this.relayChat({sys:!0,text:`${n.name} \uB2D8\uC774 \uB5A0\uB0AC\uC2B5\uB2C8\uB2E4`})}}roster(){return this.world.players.map(e=>({id:e.id,name:e.name,cls:e.cls,spec:e.spec,level:e.level,host:e.id===1}))}broadcastRoster(){let e=this.roster(),t=this.world.difficulty;for(let n of this.peers.values())n.pid&&n.conn.send({t:"roster",r:e,d:t});this.h.onRoster?.(e,t)}setDifficulty(e){bg(this.world,e),this.broadcastRoster()}get difficulty(){return this.world.difficulty}start(){Jf(this.world);for(let e of this.peers.values())e.pid&&e.conn.send({t:"start"})}cast(e,t,n){let s=this.world,r=ht(s,this.localId);return Er(s,this.localId,e,t,n)}setGear(e,t){$f(this.world,this.localId,e,t)}update(e,t){let n=this.world,s=ht(n,this.localId);for(s&&Object.assign(s.input,{mx:t.mx,mz:t.mz,ax:t.ax,az:t.az,attack:t.attack}),this.acc+=Math.min(e,.25);this.acc>=dc;)vg(n,dc),this.acc-=dc;let r=fg(n);for(let a of r){let o=Ng(a);(o===null||o===this.localId)&&this.fx.push(a)}this.peers.size&&this.net.push(...r),this.stepPortal(),this.snapAcc+=e,this.snapAcc>=1/Lg&&(this.snapAcc%=1/Lg,this.sendSnapshots())}stepPortal(){let e=this.world,t=e.portal;if(e.phase!=="victory"||!t||this.portalGo)return;let n=ht(e,this.localId),s=!!n&&Math.hypot(n.x-t.x,n.z-t.z)<2.2;s!==!!this.portalOpen&&(this.portalOpen=s,this.portalReady=new Set,this.broadcastPortal()),s&&this.memberIds().every(r=>this.portalReady.has(r))&&this.goPortal()}memberIds(){return this.world.players.filter(e=>e.id!==this.localId).map(e=>e.id)}broadcastPortal(e={}){let t={t:"portal",s:this.portalGo?"go":this.portalOpen?"wait":"idle",ready:[...this.portalReady||[]],need:this.memberIds(),next:this.world.portal?.next??0,...e};for(let n of this.peers.values())if(n.pid)try{n.conn.send(t)}catch{}this.h.onPortal?.(t)}goPortal(){this.portalGo=!0,this.broadcastPortal();let e=this.world.portal.next;setTimeout(()=>e?this.enterChapter(e):this.finishRun(),bd)}enterChapter(e){let t=this.world;this.world=hd(void 0,e);for(let n of t.players)Da(this.world,{id:n.id,...n.id===this.localId?Na(this.profile.character):this.peerChar(n.id),local:n.id===this.localId});Jf(this.world),this.fx=[],this.net=[],this.acc=0,this.portalOpen=!1,this.portalGo=!1,this.portalReady=new Set;for(let n of this.peers.values())if(n.pid)try{n.conn.send({t:"next"})}catch{}this.broadcastRoster(),this.h.onNext?.()}peerChar(e){return[...this.peers.values()].find(t=>t.pid===e)?.char}finishRun(){for(let e of this.peers.values())if(e.pid)try{e.conn.send({t:"finish"})}catch{}this.h.onFinish?.()}sendSnapshots(){if(!this.peers.size)return;let e=this.world,t=this.net.splice(0);for(let n of this.peers.values()){if(!n.pid)continue;let s=ht(e,n.pid);if(!s)continue;let r=Dg(e,n.pid),a=t.filter(o=>{let c=Ng(o);return c===null||c===n.pid});try{n.conn.send({t:"s",v:CS(r),ev:a,me:Qf(s)})}catch{}}}takeEvents(){return this.fx.splice(0)}me(){return Qf(ht(this.world,this.localId))}self(){return ht(this.world,this.localId)}view(){return Dg(this.world,this.localId)}get phase(){return this.world.phase}leave(){for(let e of this.peers.values())try{e.conn.send({t:"bye",reason:"\uD30C\uD2F0\uC7A5\uC774 \uAC8C\uC784\uC744 \uC885\uB8CC\uD588\uC2B5\uB2C8\uB2E4."})}catch{}setTimeout(()=>this.peer?.destroy(),200)}};function zg(i){return Array.isArray(i)?i.slice(0,4).filter(e=>e&&typeof e.stats=="object").map(e=>{let t={};for(let n of["str","dex","int","vit","atk","hp","crit","critDmg","haste","def"]){if(!Number.isFinite(e.stats[n]))continue;let s=["crit","critDmg","haste"].includes(n)?1:["str","dex","int","vit"].includes(n)?500:5e3;t[n]=Math.max(0,Math.min(s,e.stats[n]))}return{stats:t}}):[]}function CS(i){for(let e of i.players)e.x=Rt(e.x),e.z=Rt(e.z),e.y=Rt(e.y),e.face=Rt(e.face),e.actT=Rt(e.actT),e.speed=Rt(e.speed);for(let e of i.enemies)e.x=Rt(e.x),e.z=Rt(e.z),e.y=Rt(e.y),e.face=Rt(e.face),e.actT=Rt(e.actT),e.deadT=Rt(e.deadT),e.speed=Rt(e.speed);for(let e of i.projs)e.x=Rt(e.x),e.z=Rt(e.z),e.dir=Rt(e.dir);for(let e of i.zones)e.x=Rt(e.x),e.z=Rt(e.z),e.dir=Rt(e.dir),e.t=Rt(e.t);return i.t=Math.round(i.t*1e3)/1e3,i}var gd=class{constructor({profile:e,code:t,password:n="",handlers:s={}}){this.mode="client",this.h=s,this.profile=e,this.code=t,this.password=n,this.worldMeta=null,this.localId=0,this.snaps=[],this.pending=[],this.fx=[],this.offset=null,this.priv=null,this.rosterList=[],this.difficulty=1,this.phaseName="lobby",this.sendAcc=0,this.ping=0}async open(){let{peer:e,conn:t}=await kg(this.code);this.peer=e,this.conn=t,await new Promise((s,r)=>{let a=setTimeout(()=>r(new Error("\uD30C\uD2F0\uC7A5\uC758 \uC751\uB2F5\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.")),1e4);t.on("data",o=>{o&&o.t==="welcome"?(clearTimeout(a),this.localId=o.pid,this.worldMeta=o.world||null,this.h.onWelcome?.(o),s()):o&&o.t==="bye"?(clearTimeout(a),r(new Error(o.reason))):this.onMessage(o)}),t.on("close",()=>this.onClose("\uD30C\uD2F0\uC7A5\uACFC\uC758 \uC5F0\uACB0\uC774 \uB04A\uC5B4\uC84C\uC2B5\uB2C8\uB2E4.")),t.send({t:"hello",uid:this.profile.uid,password:this.password,name:this.profile.character.name})});let n=this.profile.character;this.me_={id:this.localId,cls:n.cls,spec:n.spec,x:0,z:0,y:0,vx:0,vz:0,face:0,alive:!0,act:null,combo:0,comboT:0,cds:{q:0,w:0,e:0,r:0,dodge:0,potion:0},potions:3,buffs:[],slowT:0,kbx:0,kbz:0,st:{speed:$e[n.cls].base.speed,hp:1},hp:1,input:{mx:0,mz:0},tp:-1},this.pingTimer=setInterval(()=>{try{this.conn.send({t:"ping",c:performance.now()})}catch{}},2e3)}onClose(e){this.closed||(this.closed=!0,clearInterval(this.pingTimer),this.h.onDisconnect?.(e))}onMessage(e){if(e)switch(e.t){case"roster":this.rosterList=e.r,this.difficulty=Math.max(1,Math.min(10,e.d|0)),this.h.onRoster?.(e.r,this.difficulty);break;case"start":this.h.onStart?.();break;case"bye":this.onClose(e.reason);break;case"pong":this.ping=Math.round(performance.now()-e.c);break;case"s":this.onSnapshot(e);break;case"lobby":this.onLobby();break;case"portal":this.h.onPortal?.(e);break;case"next":this.onNext();break;case"finish":this.h.onFinish?.();break;case"chat":{let t=md(e.text);t&&this.h.onChat?.({id:e.id|0,name:md(e.name).slice(0,12),cls:e.cls,sys:!!e.sys,text:t});break}}}onSnapshot(e){let t=e.v,n=this.phaseName==="lobby"&&t.phase!=="lobby";n&&(this.offset=null,this.snaps=[],this.pending=[]);let r=performance.now()/1e3-t.t;this.offset=this.offset===null||r<this.offset?r:this.offset+.0015,t.pmap=new Map(t.players.map(c=>[c.id,c])),t.emap=new Map(t.enemies.map(c=>[c.id,c])),this.snaps.push(t),this.snaps.length>30&&this.snaps.shift(),this.priv=e.me,t.phase!==this.phaseName&&(this.phaseName=t.phase,n&&this.h.onStart?.()),e.ev?.length&&this.pending.push({t:t.t,ev:e.ev});let a=t.pmap.get(this.localId),o=this.me_;if(a&&o){(a.tp!==o.tp||!a.alive)&&(o.x=a.x,o.z=a.z,o.vx=o.vz=0,o.tp=a.tp,a.alive||(o.act=null)),o.alive=a.alive,o.hp=a.hp,o.st={...o.st,...e.me.st},o.potions=e.me.potions;for(let c in e.me.cds)e.me.cds[c]>o.cds[c]+.5&&(o.cds[c]=e.me.cds[c])}this.sealed=$o(t.rooms)}renderTime(){return this.offset===null?0:performance.now()/1e3-this.offset-TS}cast(e,t,n){let s=this.me_;if(!s)return null;if(!s.alive)return e==="potion"&&this.send({t:"c",k:e,ax:t,az:n}),null;let r=uc(s,e,t,n);return r&&(this.send({t:"c",k:e,a:r.id,ax:Rt(t),az:Rt(n)}),this.fx.push({k:"act",id:this.localId,a:r.id,dir:r.dir,local:!0})),r}setGear(e,t){this.send({t:"gear",level:e,gear:t})}setChar(e){this.send({t:"char",name:e.name,cls:e.cls,spec:e.spec,look:e.look,level:e.level,gear:Object.values(e.equipped).filter(Boolean)}),this.me_&&(this.me_.cls=e.cls,this.me_.spec=e.spec,this.me_.st={...this.me_.st,speed:$e[e.cls].base.speed})}syncProgress(e){this.pendingProgress=e,!this.progressT&&(this.progressT=setTimeout(()=>{this.progressT=null,this.send({t:"progress",data:this.pendingProgress})},400))}ready(){this.send({t:"ready"})}onNext(){this.snaps=[],this.pending=[],this.offset=null;let e=this.me_;if(e){e.act=null,e.alive=!0,e.tp=-1,e.vx=e.vz=e.kbx=e.kbz=0;for(let t in e.cds)e.cds[t]=0}this.h.onNext?.()}onLobby(){this.phaseName="lobby",this.snaps=[],this.pending=[],this.offset=null;let e=this.me_;if(e){e.act=null,e.alive=!0,e.tp=-1,e.vx=e.vz=e.kbx=e.kbz=0;for(let t in e.cds)e.cds[t]=0}this.h.onLobby?.()}chat(e){let t=md(e);t&&this.send({t:"chat",text:t})}send(e){try{this.conn.send(e)}catch{}}update(e,t){let n=this.renderTime();for(;this.pending.length&&this.pending[0].t<=n+.03;)for(let r of this.pending.shift().ev)r.k==="act"&&r.id===this.localId||(r.k==="kb"&&r.id===this.localId&&this.me_&&(this.me_.kbx+=r.x,this.me_.kbz+=r.z),this.fx.push(r));let s=this.me_;!s||!this.snaps.length||(s.input=t,this.phaseName==="lobby"?Kf(s,t,e):(s.alive&&t.attack&&(!s.act||Ot[s.act.id].combo!==void 0)&&this.cast("basic",t.ax,t.az),ud(s,t,e,this.sealed||[])),this.sendAcc+=e,this.sendAcc>=1/30&&(this.sendAcc=0,this.send({t:"m",x:Rt(s.x),z:Rt(s.z),y:Rt(s.y||0),f:Rt(s.face),tp:s.tp})))}takeEvents(){return this.fx.splice(0)}me(){return this.priv?{...this.priv,cds:this.me_.cds,potions:this.me_.potions}:null}self(){return this.me_}get phase(){return this.phaseName}roster(){return this.rosterList}view(){let e=this.snaps;if(!e.length)return null;let t=this.renderTime(),n=e[e.length-1],s=n;for(let m=e.length-1;m>0;m--)if(e[m-1].t<=t){n=e[m-1],s=e[m];break}let r=s.t>n.t?Math.max(0,Math.min(1,(t-n.t)/(s.t-n.t))):1,a=(m,b)=>m+(b-m)*r,o=(m,b)=>{let g=b-m;for(;g>Math.PI;)g-=Math.PI*2;for(;g<-Math.PI;)g+=Math.PI*2;return m+g*r},c=Math.max(0,t-s.t),l=s.players.map(m=>{let b=n.pmap.get(m.id)||m;if(m.id===this.localId){let p=this.me_;return{...m,x:p.x,z:p.z,y:p.y||0,face:p.face,act:p.alive?p.act?.id??null:null,actT:p.act?.t??0,moving:Math.hypot(p.vx,p.vz)>.6,speed:Math.hypot(p.vx,p.vz)}}let g=b.tp===m.tp;return{...m,x:g?a(b.x,m.x):m.x,z:g?a(b.z,m.z):m.z,y:a(b.y,m.y),face:o(b.face,m.face),actT:m.act?m.actT+(m.act===b.act,0)+c:0}}),h=s.enemies.map(m=>{let b=n.emap.get(m.id);return b?{...m,x:a(b.x,m.x),z:a(b.z,m.z),y:a(b.y,m.y),face:o(b.face,m.face),actT:m.act&&b.act===m.act?a(b.actT,m.actT):m.actT}:m}),d=e[e.length-1],u=performance.now()/1e3-this.offset,f=d.projs.map(m=>{let b=Math.min(.2,u-d.t),g=22;return{...m,x:m.x+Math.cos(m.dir)*g*b,z:m.z+Math.sin(m.dir)*g*b}});return{...s,t:a(n.t,s.t),players:l,enemies:h,projs:f,zones:d.zones,drops:d.drops,chests:d.chests,boss:d.boss,phase:d.phase,rooms:d.rooms,endT:d.endT}}leave(){this.closed=!0,clearInterval(this.pingTimer),this.progressT&&(clearTimeout(this.progressT),this.progressT=null,this.send({t:"progress",data:this.pendingProgress})),setTimeout(()=>{try{this.conn?.close()}catch{}},150),setTimeout(()=>this.peer?.destroy(),350)}};pi();xr();Jh();function Ug(i,e){let t=ht(i,e);if(!t)return;let n=t.input;if(n.attack=!1,n.mx=0,n.mz=0,!t.alive){Er(i,e,"potion",t.x,t.z);return}for(let l of i.zones)if(!(l.team!=="tele"&&l.team!=="enemy")&&l.t>l.warn-.45&&l.t<l.warn&&ks(l.shape,l.x,l.z,l.dir,t.x,t.z,.6)){let h=Math.atan2(t.z-l.z,t.x-l.x)+(l.shape.type==="donut"?Math.PI:0);n.mx=Math.cos(h),n.mz=Math.sin(h),Er(i,e,"dodge",t.x+n.mx*5,t.z+n.mz*5);return}let s=i.players.find(l=>!l.alive&&l!==t),r=null,a=i.enemies.filter(l=>!l.dead&&!(l.act&&l.act.id==="spawn")),o=null,c=1/0;for(let l of a){let h=Math.hypot(l.x-t.x,l.z-t.z);h<c&&(c=h,o=l)}if(s&&(!o||c>6))r=s;else if(o&&c<30){let l=t.cls==="mage"||t.cls==="archer",h=l?7:1.8+o.r;if(c>h?r=o:l&&c<4&&(n.mx=t.x-o.x,n.mz=t.z-o.z),n.ax=o.x,n.az=o.z,c<h+1.5){n.attack=!0;for(let d of["r","q","w","e"])if(t.cds[d]<=0&&i.rng()<.3&&Er(i,e,d,o.x,o.z))break;t.hp<t.st.hp*.45&&Er(i,e,"potion",t.x,t.z)}}else{let l=(i.chapterRooms||[]).find(h=>i.rooms[h].state!=="cleared")??-1;if(l>=0){let h=yt[l];r=Gn((h.x0+h.x1)/2,(h.z0+h.z1)/2)}}if(r&&!n.mx&&!n.mz){let l=r.x,h=r.z;if(!Ko(t.x,t.z,l,h,i.sealed,.6)){let m=Hh(t.x,t.z,l,h,i.sealed);m&&(l=m.x,h=m.z)}let d=l-t.x,u=h-t.z,f=Math.hypot(d,u);f>.6&&(n.mx=d/f,n.mz=u/f)}}var Og="ashen.worlds.v1",np=16,xd=24,pc=6,Fg=12;function mc(){try{let i=JSON.parse(localStorage.getItem(Og)||"{}");return i&&typeof i=="object"?i:{}}catch{return{}}}function ip(i){try{localStorage.setItem(Og,JSON.stringify(i))}catch{}}async function Bg(i){let e=new TextEncoder().encode(`ashen-crown:${i}`),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t),n=>n.toString(16).padStart(2,"0")).join("")}function Hg(){return Object.values(mc()).sort((i,e)=>(e.lastPlayed||0)-(i.lastPlayed||0))}var vd=i=>mc()[i]||null;async function Vg(i,e){let t=mc();if(Object.keys(t).length>=Fg)throw new Error(`\uC6D4\uB4DC\uB294 \uCD5C\uB300 ${Fg}\uAC1C\uAE4C\uC9C0 \uB9CC\uB4E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`);let n=new Set(Object.values(t).map(a=>a.code)),s;do s=tp(pc);while(n.has(s));let r={id:s,code:s,name:String(i).trim().slice(0,np)||"\uC774\uB984 \uC5C6\uB294 \uC6D4\uB4DC",pass:e?await Bg(e):"",created:Date.now(),lastPlayed:Date.now(),members:{}};return t[r.id]=r,ip(t),r}function Gg(i){let e=mc();delete e[i],ip(e)}async function Wg(i,e){return!i.pass||i.pass===await Bg(String(e||"").slice(0,xd))}function sp(i,e,t){let n=i.members[e];return sc(n?.progress,n?.name||t)}function rp(i,e,t,n){let s=mc(),r=s[i];r&&(r.members[e]={name:String(t||"").slice(0,12),progress:sc(n,t),seen:Date.now()},r.lastPlayed=Date.now(),ip(s))}rs();var Tt=(i,e=document)=>e.querySelector(i),ei=Tt("#ui"),oe=Z0(),an=new ed,pe=new Ph(Tt("#game")),Cr=new Dh,bc=new td(Tt("#game"));ei.innerHTML='<div class="screen loading"><div class="logo"><span class="logo-en">ARKAS</span><span class="logo-ko">\uC544\uB974\uCE74\uC2A4</span></div><div class="lbar"><i></i></div><p class="lt">\uC9C0\uD558\uBB18\uC9C0\uB85C \uB0B4\uB824\uAC00\uB294 \uC911\u2026</p></div>';await Cr.load(i=>{let e=Tt(".lbar i");e&&(e.style.width=Math.round(i*100)+"%")});var Mt=new zh(pe),Pr=new Gh(pe,Cr,Mt),Ln=new id(document.body,{profile:oe,engine:pe,audio:an,onGear:()=>cn.session&&cn.pushGear(),onMenu:()=>cb()}),Pe=null,ln="menu",Qn=null,cn=new ad({engine:pe,assets:Cr,vfx:Mt,level:Pr,audio:an,hud:Ln,input:bc,profile:oe,onEnd:ob}),ls=new sd({onSend:i=>Pe?.chat?.(i)}),lp=i=>{ls.add(i,Pe?.localId),i.sys||an.play("ui",{})};bc.onMoveOrder=(i,e)=>{Mt.ring(i,e,.9,"#9fe0ff",.35,.2)};function Zg(){let i=oe.settings;an.setVolume("master",i.master),an.setVolume("music",i.music),an.setVolume("sfx",i.sfx),pe.setQuality(i.quality)}Zg();async function PS(){let{playerActor:i,enemyActor:e}=await Promise.resolve().then(()=>(Qh(),q0)),t=[],n=In.x,s=In.z-4,r=(c,l,h)=>{c.position.set(n+l,0,s+h),pe.scene.add(c),t.push(c)};[...fi.map(c=>[c]),["archer","ranger"]].forEach(([c,l],h)=>{let d=i(Cr,c,l);d.addXray("#ffd98a"),d.play("Idle"),d.mixer.update(.01),r(d.root,h*1.5-2,0)});for(let[c,l]of[["minion"],["warrior",!0],["archer"],["mage"],["priest"],["warden"],["king"]]){let h=e(Cr,c,l);h.play("Idle_Combat"),h.mixer.update(.01),r(h.root,(Math.random()-.5)*6,3)}for(let c of[Mt.arc(n,1,s,0,3,2,"#ffd98a"),Mt.ring(n,s,3,"#ffcf6a"),Mt.beam(n,s,"#ffd27a",4,1,.5),Mt.rune(n,s,"#ffd98a"),Mt.impact(n,1,s),Mt.scorch(n,s),Mt.shards(n,s)])Mt.keep(c);Mt.bolt(n,s),Mt.spark(n,1,s,{n:4}),Mt.smoke(n,1,s,{n:2}),Mt.flash(n,2,s,"#fff",1,5,.05);for(let[c,l]of[{type:"circle",r:3},{type:"cone",r:3,ang:1},{type:"rect",len:4,w:1},{type:"donut",r:2,r2:5}].entries())Mt.keep(Mt.decal({id:-1-c,shape:l,x:n,z:s,dir:0,t:.1,warn:1,dur:.1,team:c%2?"tele":"player"},0));pe.heroLight.userData.follow=t[0],pe.snap(n,s);for(let c of Pr.seals)c.mesh.visible=!0;let a=new Ue(new Js(.3),new Xt({color:"#fff",emissive:"#fff",emissiveIntensity:1.6,metalness:.3,roughness:.3})),o=new Ue(new Zs(.3),new vt({color:"#fff"}));r(a,1,1),r(o,-1,1),Mt.update(.016),pe.render(.016,0),pe.render(.016,.016);for(let c of t)pe.scene.remove(c);for(let c of Pr.seals)c.mesh.visible=!1;pe.heroLight.userData.follow=null,Mt.sweepDecals(),Mt.sweepDecals(),Mt.clearTransient()}var Ht=Sr,St={actors:[],t:0,group:new Et};{let i=new Hn("#ff8a3a",40,18,1.6);i.position.set(Ht.x,1.4,Ht.z),pe.scene.add(i),St.fireLight=i;for(let e=0;e<7;e++){let t=e/7*Math.PI*2,n=Cr.prop(e%2?"h_bone_A":"d_rubble_half");n.position.set(Ht.x+Math.cos(t)*1.1,0,Ht.z+Math.sin(t)*1.1),n.scale.setScalar(.22),St.group.add(n)}pe.scene.add(St.group),St.emitter=Mt.emitter({rate:60,emit:e=>{e.fire(Ht.x,.3,Ht.z,1.6,"#ff7a26"),Math.random()<.3&&e.fire(Ht.x,.5,Ht.z,1.1,"#ffb050")}}),fi.forEach((e,t)=>Qg(t))}function Qg(i){let e=fi[i],t=tc(Cr,e,oe.chars[e].spec,oe.chars[e].look),n=-Math.PI/2+(i-(fi.length-1)/2)*.56,s=Ht.x+Math.cos(n+Math.PI)*-3.2,r=Ht.z+Math.sin(n+Math.PI)*-3.2;t.root.position.set(s,0,r),t.root.rotation.y=Math.atan2(Ht.x-s,Ht.z-r),t.root.visible=St.actors[i]?.root.visible??!0,St.actors[i]&&St.group.remove(St.actors[i].root),St.group.add(t.root),St.actors[i]=t}function IS(i,e){if(St.t+=i,St.fireLight.intensity=40*(1+Math.sin(e*11)*.08+Math.sin(e*23)*.06),ln==="lobby"&&Pe)return kS(i,e);St.actors.forEach((a,o)=>{let c=oe.chars[a.cls];if(a.spec!==Lt(a.cls,c.spec).id)Qg(o);else{let l=br(c.look,a.cls);a.lookKey!==Qo(l)&&wa(a,$e[a.cls].model,l)}});for(let a of St.actors){let o=a.cls===oe.current;a.animate({act:null,moving:!1},i,o?{idle:$e[a.cls].idle}:{idle:"Sit_Floor_Idle"}),o&&a.cheer>0&&(a.cheer-=i,a.play("Cheer",{loop:!1}))}let t=!Ln.root.classList.contains("hidden");ls.tagNames(t?[]:St.actors.map(a=>({id:"camp:"+a.cls,name:$e[a.cls].name,cls:a.cls,actor:a,me:a.cls===oe.current})),pe);let n=St.actors.find(a=>a.cls===oe.current);if(St.editing&&n){pe.faceYaw=Math.PI/2-n.root.rotation.y,pe.follow(n.root.position.x-1.1,n.root.position.z,i),Pr.update(i,e,["idle","idle","idle","idle","idle"],Ht),Mt.update(i),pe.render(i,e);return}pe.faceYaw=null;let s=n?n.root.position.x*.6+Ht.x*.4:Ht.x,r=n?n.root.position.z*.6+Ht.z*.4:Ht.z;pe.follow(s-4.2,r-.5,i),Pr.update(i,e,["idle","idle","idle","idle","idle"],Ht),Mt.update(i),pe.render(i,e)}function kS(i,e){let t=cn.lobbyFrame(i),n=cn.lastView;if(t){let s=1-pe.zoom,r=innerWidth>900?4*s:0;pe.follow(t.x*(1-.3*s)+Ht.x*.3*s-r,t.z*(1-.3*s)+(Ht.z+1)*.3*s,i),pe.faceYaw=t.face}n&&ls.update(i,n.players,cn.pActors,pe,Pe.localId),Pr.update(i,e,["idle","idle","idle","idle","idle"],t||Ht),Mt.update(i),pe.render(i,e)}function eb(i){for(let e of St.actors)e.root.visible=i}function hp(){pe.camOffset.set(0,7.5,12.5),pe.zoom=pe.zoomTo=0,pe.faceYaw=null,pe.snap(Ht.x-2,Ht.z),St.group.visible=!0,St.emitter.dead=!1,Mt.emitters.includes(St.emitter)||Mt.emitters.push(St.emitter),an.setMusic("menu")}function LS(){pe.camOffset.set(0,19,13.5),St.fireLight.intensity=0,St.group.visible=!1,St.emitter.dead=!0}function zi(i,e=2600){let t=Tt(".toast");t||(t=document.createElement("div"),t.className="toast",document.body.appendChild(t)),t.textContent=i,t.classList.add("show"),clearTimeout(zi.h),zi.h=setTimeout(()=>t.classList.remove("show"),e)}function za(i,e,t=[{label:"\uD655\uC778",primary:!0}]){let n=document.createElement("div");n.className="modal",n.innerHTML=`<div class="mcard"><h3>${i}</h3><div class="mbody">${e}</div><div class="row"></div></div>`;for(let s of t){let r=document.createElement("button");r.className="btn "+(s.primary?"primary":"ghost"),r.textContent=s.label,r.onclick=()=>{n.remove(),s.fn?.()},Tt(".row",n).appendChild(r)}document.body.appendChild(n)}var DS=["","I","II","III","IV","V","VI","VII","VIII","IX","X"];function ap(i,e,t,n=!1){let s=a=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="${a==="-"?"M15 4l-8 8 8 8":"M9 4l8 8-8 8"}"/></svg>`,r=(a,o)=>n?'<i class="dstep-gap"></i>':`<button class="dstep" data-act="${t}${a}" ${o?"disabled":""} aria-label="${a==="-"?"\uC774\uC804":"\uB2E4\uC74C"} \uCC55\uD130">${s(a)}</button>`;return`<div class="diff-pick">
    <span class="dl">\uCC55\uD130</span>
    <div class="dp-main">${r("-",i<=1)}<b>${DS[i]||i}</b>${r("+",i>=e)}</div>
    <span class="dch">${en[Ma(i)].name}</span>
    ${n?"<em>\uC6D4\uB4DC \uC8FC\uC778\uC774 \uC815\uD569\uB2C8\uB2E4</em>":""}
  </div>`}function NS(){let i=ut(oe).name&&!/^모험가\d+$/.test(ut(oe).name)?ut(oe).name:"";ei.innerHTML=`
    <div class="screen menu">
      <div class="menu-left">
        <div class="logo"><span class="logo-en">ARKAS</span><span class="logo-ko">\uC544\uB974\uCE74\uC2A4</span></div>
        <p class="tagline">${Rf}</p>
        <div class="nick">
          <p class="nick-q">\uBE44\uC11D\uC5D0 \uC0C8\uAE38 \uC774\uB984\uC740...</p>
          <input id="nick" maxlength="${Pa}" placeholder="${Ia}~${Pa}\uC790" value="${Bt(i)}" autocomplete="off" spellcheck="false" />
          <p class="nick-err"></p>
          <p class="note">\uBB34\uB364\uC774 \uC5F4\uB9AC\uB294 \uBC24, \uBB18\uC5ED\uC73C\uB85C \uB0B4\uB824\uAC00\uB294 \uC790\uB294 \uBAA8\uB450 \uC785\uAD6C\uC758 \uBE44\uC11D\uC5D0 \uC774\uB984\uC744 \uB0A8\uAE41\uB2C8\uB2E4. \uC774 \uC774\uB984\uC740 \uD30C\uD2F0\uC6D0\uB4E4\uC5D0\uAC8C \uBD88\uB9AC\uACE0, \uD6D7\uB0A0 \uBA85\uC608\uC758 \uC804\uB2F9\uC5D0\uB3C4 \uC0C8\uACA8\uC9D1\uB2C8\uB2E4.</p>
          <button class="btn primary big" data-act="engrave">\uC774\uB984 \uC0C8\uAE30\uAE30</button>
        </div>
      </div>
      <footer class="credits">3D \uC5D0\uC14B: KayKit by Kay Lousberg (CC0)</footer>
    </div>`,setTimeout(()=>Tt("#nick")?.focus(),50)}function op(i){let e=ut(oe),t=$e[e.cls],n=Lt(e.cls,e.spec),s=e.level>=Ra,r=s?100:e.xp/os(e.level)*100;return`
    <div class="ci-head"><label class="ci-name" title="\uC774\uB984 \uBC14\uAFB8\uAE30 (\uBAA8\uB4E0 \uC9C1\uC5C5 \uACF5\uD1B5)"><input id="name" maxlength="${Pa}" value="${Bt(oe.nickname)}" autocomplete="off" spellcheck="false" aria-label="\uB0B4 \uC774\uB984" /><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13 7l4 4"/></svg></label><span>${t.name} \xB7 \uC804\uD22C\uB825 <b>${Di(e)}</b></span></div>
    <div class="pick">
      <p class="pick-label">\uC9C1\uC5C5\uC744 \uC120\uD0DD\uD558\uC138\uC694</p>
      <div class="classes">${fi.map(a=>`<button class="cls ${a===oe.current?"on":""}" data-${i.pick}="${a}" style="--c:${$e[a].trail}">${tn(Mr[a])}<b>${$e[a].name}</b><em>Lv ${oe.chars[a].level}</em></button>`).join("")}</div>
      <div class="joblv" title="${t.name}\uC758 \uB808\uBCA8\uACFC \uACBD\uD5D8\uCE58. \uBAAC\uC2A4\uD130\uB97C \uCC98\uCE58\uD558\uBA74 \uC313\uC774\uACE0, \uB808\uBCA8\uC774 \uC624\uB974\uBA74 \uB2A5\uB825\uCE58\uAC00 \uC624\uB985\uB2C8\uB2E4.">
        <div class="jl-num"><small>\uC9C1\uC5C5 \uB808\uBCA8</small><b>${e.level}</b></div>
        <div class="jl-xp"><div class="xpl"><span>\uC9C1\uC5C5 \uACBD\uD5D8\uCE58</span><b>${s?"\uCD5C\uB300 \uB808\uBCA8":`${e.xp.toLocaleString()} / ${os(e.level).toLocaleString()} (${Math.floor(r)}%)`}</b></div><div class="xpbar"><i style="width:${r}%"></i></div></div>
      </div>
    </div>
    <div class="hero-actions">
      <button class="main" data-act="${i.tree}">${tn("tree")}<b>\uC2A4\uD0AC \uD2B8\uB9AC</b><span>\uACC4\uC5F4\xB7\uD328\uC2DC\uBE0C \uC120\uD0DD</span></button>
      <button data-act="${i.inv}">${tn("armor")}<b>\uC7A5\uBE44</b><span>\uBB34\uAE30\xB7\uBC29\uC5B4\uAD6C</span></button>
      <button data-act="${i.look}">${tn("palette")}<b>\uC678\uD615</b><span>\uC0C9\xB7\uC7A5\uC2DD</span></button>
    </div>
    <div class="kit">
      <p class="ci-spec"><b>${n.name}</b><em class="role ${n.role}">${Lf[n.role]}</em><span>\uD328\uC2DC\uBE0C \xB7 ${n.passive.name}</span></p>
      <div class="ci-skills">${["q","w","e","r"].map(a=>`<div class="cis" title="${Ot[n.skills[a]].name}: ${Ot[n.skills[a]].desc}"><kbd>${a.toUpperCase()}</kbd>${tn(n.skills[a])}<span>${Ot[n.skills[a]].name}</span></div>`).join("")}</div>
    </div>
`}var qg={pick:"cls",inv:"inv",tree:"tree",look:"look"};function hs(){if(ln="menu",!oe.nickname)return NS();let i=Tt(".menu .hero");if(i){i.innerHTML=op(qg),Tt(".menu .diff-pick").outerHTML=ap(oe.difficulty,oe.maxDifficulty,"diff");return}let e=new URLSearchParams(location.search);ei.innerHTML=`
    <div class="screen menu">
      <div class="menu-left">
        <div class="logo"><span class="logo-en">ARKAS</span><span class="logo-ko">\uC544\uB974\uCE74\uC2A4</span></div>
        <p class="tagline">${Rf}</p>
        <div class="hero">${op(qg)}</div>
        <div class="sub"><button class="link-btn" data-act="howto">\uC870\uC791\uBC95</button><button class="link-btn" data-act="settings">\uC124\uC815</button><button class="link-btn" data-act="about">\uC815\uBCF4</button></div>
      </div>
      <div class="menu-play">
        <div class="actions">
          ${ap(oe.difficulty,oe.maxDifficulty,"diff")}
          <button class="btn primary big" data-act="solo">\uD63C\uC790 \uC785\uC7A5</button>
          <button class="btn" data-act="worlds">\uC6D4\uB4DC <small>\uCE5C\uAD6C\uC640 \uD568\uAED8, \uC6D4\uB4DC\uB9C8\uB2E4 \uB530\uB85C \uC131\uC7A5</small></button>
          <div class="join"><input id="code" maxlength="${pc}" placeholder="\uC6D4\uB4DC \uCF54\uB4DC" value="${Bt(pd(e.get("world")||""))}" autocomplete="off" /><button class="btn" data-act="join">\uCC38\uAC00</button></div>
        </div>
      </div>
      <footer class="credits">3D \uC5D0\uC14B: KayKit by Kay Lousberg (CC0)</footer>
    </div>`,e.get("world")&&setTimeout(()=>zi("\uC6D4\uB4DC \uCF54\uB4DC\uAC00 \uC785\uB825\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uCC38\uAC00\uB97C \uB204\uB974\uACE0 \uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD558\uC138\uC694",5e3),400)}ei.addEventListener("input",i=>{if(i.target.id!=="name")return;let e=oe.nickname;Vf(oe,i.target.value)!==e&&(Wt(oe),ln==="lobby"&&gc())});ei.addEventListener("change",i=>{i.target.id==="name"&&(i.target.value=oe.nickname)});ei.addEventListener("keydown",i=>{i.target.id==="name"&&i.code==="Enter"&&i.target.blur(),i.target.id==="nick"&&i.code==="Enter"&&tb()});function tb(){let i=Tt("#nick");if(i){if(yr(i.value).length<Ia){i.classList.add("bad"),Tt(".nick-err").textContent=`\uC774\uB984\uC740 ${Ia}~${Pa}\uC790\uB85C \uC0C8\uAE38 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`;return}Vf(oe,i.value),Wt(oe),an.unlock(),an.play("chest",{}),hs(),zi(`\uBE44\uC11D\uC5D0 "${oe.nickname}"(\uC774)\uB77C\uB294 \uC774\uB984\uC774 \uC0C8\uACA8\uC84C\uC2B5\uB2C8\uB2E4`)}}ei.addEventListener("click",i=>{let e=i.target.closest("[data-tab]");if(e){sb(e.dataset.tab),an.play("ui",{});return}let t=i.target.closest("[data-wcls]");if(t){HS(t.dataset.wcls);return}let n=i.target.closest("[data-cls]");if(n){an.unlock(),oe.current=n.dataset.cls,Wt(oe);let a=St.actors.find(o=>o.cls===oe.current);a&&(a.cheer=1.5),an.play("ui",{}),hs();return}let s=i.target.closest("[data-act]");if(!s)return;an.unlock(),an.play("ui",{});let r=s.dataset.act;switch(r){case"solo":Yg();break;case"worlds":FS();break;case"engrave":tb();break;case"join":OS(Tt("#code").value);break;case"winv":$g(gc);break;case"wtree":Xg(gc);break;case"tolobby":Pe?.mode==="host"&&Qn&&(Pe.backToLobby(),rb());break;case"inv":$g();break;case"howto":zS();break;case"tree":Xg();break;case"look":jg();break;case"wlook":jg(gc);break;case"settings":US();break;case"about":za("\uC815\uBCF4","<p>\uC544\uB974\uCE74\uC2A4\uB294 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C \uB3D9\uC791\uD558\uB294 \uCFFC\uD130\uBDF0 \uC561\uC158 RPG \uC2DC\uD5D8\uD310\uC785\uB2C8\uB2E4.</p><ul><li>3D \uCE90\uB9AD\uD130, \uBAAC\uC2A4\uD130, \uB358\uC804 \uBAA8\uB378: KayKit (Kay Lousberg, CC0)</li><li>\uD6A8\uACFC\uC74C\uACFC \uC74C\uC545\uC740 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C \uC2E4\uC2DC\uAC04 \uD569\uC131\uD569\uB2C8\uB2E4.</li><li>\uC628\uB77C\uC778 \uD30C\uD2F0\uB294 \uBE0C\uB77C\uC6B0\uC800 \uAC04 \uC9C1\uC811 \uC5F0\uACB0(WebRTC)\uC744 \uC0AC\uC6A9\uD558\uBA70, \uAC19\uC740 \uD30C\uD2F0\uC6D0\uC5D0\uAC8C \uC11C\uB85C\uC758 IP \uC8FC\uC18C\uAC00 \uC804\uB2EC\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</li><li>\uD63C\uC790 \uD558\uAE30 \uCE90\uB9AD\uD130\uB294 \uC774 \uBE0C\uB77C\uC6B0\uC800\uC5D0 \uC800\uC7A5\uB429\uB2C8\uB2E4. \uC6D4\uB4DC \uC9C4\uD589\uC740 \uC6D4\uB4DC\uB97C \uB9CC\uB4E0 \uC0AC\uB78C\uC758 \uBE0C\uB77C\uC6B0\uC800\uC5D0 \uC800\uC7A5\uB429\uB2C8\uB2E4.</li></ul>");break;case"menu":Ar();break;case"diff-":case"diff+":oe.difficulty=Math.max(1,Math.min(oe.maxDifficulty,oe.difficulty+(r==="diff+"?1:-1))),Wt(oe),hs();break;case"ldiff-":case"ldiff+":Pe?.mode==="host"&&Pe.setDifficulty(Math.max(1,Math.min(oe.maxDifficulty,Pe.difficulty+(r==="ldiff+"?1:-1))));break;case"nextdiff":case"retry":{let a=r==="nextdiff"?Math.min(oe.maxDifficulty,cp.difficulty+1):cp.difficulty;Ar(),oe.difficulty=a,Wt(oe),Yg();break}case"leave":Ar();break;case"start":Pe?.mode==="host"&&(Pe.start(),fp());break;case"copy":VS();break;case"resume":Tt(".pause")?.remove();break;case"quit":Tt(".pause")?.remove(),Ar();break}});function Xg(i=hs){let e=document.createElement("div");e.className="modal";let t=document.createElement("div");t.className="mcard tree",e.appendChild(t);let n=()=>{let s=ut(oe),r=$e[s.cls],a=Wh[s.cls],o=l=>a.length>1&&a.every(h=>h.skills[l]===a[0].skills[l]),c=["q","w","e","r"].some(o);t.innerHTML=`
      <h3>\uC2A4\uD0AC \uD2B8\uB9AC</h3>
      <div class="tree-root" style="--c:${r.trail}">${tn(Mr[s.cls])}<div><b>${Bt(oe.character.name)}</b><em>Lv ${s.level} ${r.name}</em></div></div>
      <div class="tree-branches n${a.length}">${a.map(l=>`
        <div class="branch ${l.id===s.spec?"on":""}" data-spec="${l.id}" style="--c:${r.trail}">
          <div class="br-head"><b>${l.name}</b><em class="role ${l.role}">${Lf[l.role]}</em></div>
          <p>${l.desc}</p>
          <div class="br-passive">${tn("passive")}<div><b>\uD328\uC2DC\uBE0C \xB7 ${l.passive.name}</b><span>${l.passive.desc}</span><span class="hk">\uC2E0\uC18D \uD6A8\uACFC: ${$h[l.haste]}</span></div></div>
          <div class="br-skills">${["q","w","e","r"].map(h=>{let d=Ot[l.skills[h]];return`<div class="node ${o(h)?"shared":""}" title="${d.name}: ${d.desc} (\uC7AC\uC0AC\uC6A9 ${d.cd}\uCD08)"><kbd>${h.toUpperCase()}</kbd>${tn(l.skills[h])}<span>${d.name}</span>${o(h)?"<i>\uACF5\uD1B5</i>":""}</div>`}).join("")}</div>
          <div class="br-pick">${l.id===s.spec?'<span class="picked">\uC120\uD0DD\uB428</span>':'<button class="btn small">\uC774 \uACC4\uC5F4\uB85C \uC804\uD658</button>'}</div>
        </div>`).join("")}</div>
      <p class="note">${a.length>1?`\uCEA0\uD504\uC640 \uC6D4\uB4DC \uB300\uAE30\uC2E4\uC5D0\uC11C \uC5B8\uC81C\uB4E0 \uACC4\uC5F4\uC744 \uBC14\uAFC0 \uC218 \uC788\uC2B5\uB2C8\uB2E4.${c?' <b class="tag-shared">\uACF5\uD1B5</b> \uD45C\uC2DC\uB294 \uB450 \uACC4\uC5F4\uC774 \uB611\uAC19\uC774 \uC4F0\uB294 \uC2A4\uD0AC\uC785\uB2C8\uB2E4.':""}`:"\uC774 \uC9C1\uC5C5\uC740 \uB2E8\uC77C \uACC4\uC5F4\uC785\uB2C8\uB2E4."} \uC2A4\uD0AC\uC5D0 \uB9C8\uC6B0\uC2A4\uB97C \uC62C\uB9AC\uBA74 \uC124\uBA85\uC774 \uB098\uC635\uB2C8\uB2E4.</p>
      <div class="row"><button class="btn primary" data-close>\uB2EB\uAE30</button></div>`};e.addEventListener("click",s=>{if(s.target.closest("[data-close]")||s.target===e){e.remove(),i();return}let r=s.target.closest(".branch[data-spec]"),a=ut(oe);!r||r.dataset.spec===a.spec||(a.spec=r.dataset.spec,Wt(oe),an.play("equip",{}),n(),i())}),n(),document.body.appendChild(e)}function jg(i=hs){let e=document.createElement("div");e.className="modal side",St.editing=!0,pe.zoomTo=.8;let t=document.createElement("div");t.className="mcard look",e.appendChild(t);let n=()=>{let r=ut(oe),a=r.look,o=br(a,r.cls),c=l=>`<div class="lrow"><span>${Nf[l]}</span><div class="sw">${O0[l].map(([h,d])=>`<button class="swatch ${a[l]===d?"on":""} ${d?"":"dflt"}" data-k="${l}" data-v="${d||""}" title="${h}" style="--s:${d||o[l]||"transparent"}"><i>${h}</i></button>`).join("")}</div></div>`;t.innerHTML=`
      <h3>\uC678\uD615 \uAFB8\uBBF8\uAE30</h3>
      <p class="note">${Bt(oe.character.name)} \xB7 ${$e[r.cls].name}. \uC9C1\uC5C5\uB9C8\uB2E4 \uB530\uB85C \uC800\uC7A5\uB418\uACE0 \uD30C\uD2F0\uC6D0\uC5D0\uAC8C\uB3C4 \uBCF4\uC785\uB2C8\uB2E4.</p>
      ${As.map(c).join("")}
      ${H0($e[r.cls].model)?`<div class="lrow"><span>${Nf.hat}</span><div class="sw"><button class="chip ${a.hat!==!1?"on":""}" data-hat="1">\uCC29\uC6A9</button><button class="chip ${a.hat===!1?"on":""}" data-hat="0">\uBC97\uAE30</button></div></div>`:""}
      <p class="note small">\uB208\xB7\uB208\uC379\xB7\uC785 \uBAA8\uC591\uACFC \uD5E4\uC5B4\uC2A4\uD0C0\uC77C\uC740 \uC774 \uCE90\uB9AD\uD130 \uBAA8\uB378\uC5D0\uC11C \uC5BC\uAD74\uACFC \uD55C \uB369\uC5B4\uB9AC\uB77C, \uC0C8 \uBAA8\uB378\uC744 \uB4E4\uC5EC\uC628 \uB4A4\uC5D0 \uBC14\uAFC0 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p>
      <div class="row"><button class="btn ghost" data-reset>\uCC98\uC74C\uC73C\uB85C</button><button class="btn primary" data-close>\uC644\uB8CC</button></div>`},s=()=>{Wt(oe),an.play("ui",{}),n(),i!==hs&&i()};e.addEventListener("click",r=>{let a=ut(oe),o=r.target.closest("[data-k]");if(o){a.look={...a.look,[o.dataset.k]:o.dataset.v||null},s();return}let c=r.target.closest("[data-hat]");if(c){a.look={...a.look,hat:c.dataset.hat==="1"},s();return}if(r.target.closest("[data-reset]")){a.look={skin:null,hair:null,outfit:null,accent:null,hat:!0},s();return}r.target.closest("[data-close]")&&(e.remove(),St.editing=!1,pe.zoomTo=0,i())}),n(),document.body.appendChild(e)}function zS(){za("\uC870\uC791\uBC95",`<div class="howto">
    <div><kbd>\uC6B0\uD074\uB9AD</kbd>\uC774\uB3D9 (\uB204\uB974\uACE0 \uC788\uC73C\uBA74 \uCEE4\uC11C\uB97C \uB530\uB77C\uAC10)</div><div><kbd>\uC88C\uD074\uB9AD</kbd>\uAE30\uBCF8 \uACF5\uACA9 (\uB204\uB974\uACE0 \uC788\uC73C\uBA74 \uC5F0\uC18D \uACF5\uACA9)</div>
    <div><kbd>Q</kbd><kbd>W</kbd><kbd>E</kbd><kbd>R</kbd>\uC2A4\uD0AC (\uCEE4\uC11C \uBC29\uD5A5\xB7\uC704\uCE58\uB85C \uC0AC\uC6A9)</div><div><kbd>Space</kbd>\uD68C\uD53C \uAD6C\uB974\uAE30 (\uC9E7\uC740 \uBB34\uC801)</div>
    <div><kbd>F</kbd>\uBB3C\uC57D / \uC4F0\uB7EC\uC84C\uC744 \uB54C \uBD80\uD65C\uC758 \uAE43\uD138</div><div><kbd>Tab</kbd><kbd>I</kbd>\uC7A5\uBE44</div><div><kbd>\uD720</kbd>\uD655\uB300\xB7\uCD95\uC18C (\uB05D\uAE4C\uC9C0 \uB2F9\uAE30\uBA74 \uC5BC\uAD74)</div><div><kbd>\uBC29\uD5A5\uD0A4</kbd>\uBCF4\uC870 \uC774\uB3D9</div><div><kbd>Esc</kbd>\uBA54\uB274</div>
  </div><ul class="tips"><li>\uBD89\uC740 \uC7A5\uD310\uC774 \uAC00\uB4DD \uCC28\uBA74 \uACF5\uACA9\uC774 \uB4E4\uC5B4\uC635\uB2C8\uB2E4. \uC7A5\uD310 \uBC16\uC73C\uB85C \uD53C\uD558\uC138\uC694.</li><li>\uC801\uC758 \uB4F1 \uB4A4\uB97C \uB54C\uB9AC\uBA74 \uBC31\uC5B4\uD0DD \uD53C\uD574\uAC00 \uB4E4\uC5B4\uAC11\uB2C8\uB2E4. \uBC29\uD328\uB97C \uB4E0 \uB9DD\uC790 \uC804\uC0AC\uB294 \uC815\uBA74 \uACF5\uACA9\uC744 \uB9C9\uC2B5\uB2C8\uB2E4.</li><li>\uD574\uACE8\uC655\uC774 \uD478\uB974\uAC8C \uBE5B\uB0A0 \uB54C \uCE74\uC6B4\uD130 \uC2A4\uD0AC(\uC131\uAE30\uC0AC Q, \uB3C4\uC801 Q)\uC744 \uB9DE\uD788\uBA74 \uAE30\uC808\uC2DC\uD0AC \uC218 \uC788\uC2B5\uB2C8\uB2E4.</li></ul>`)}function US(){let i=oe.settings;za("\uC124\uC815",`<div class="settings">
    <label>\uC804\uCCB4 \uC74C\uB7C9<input type="range" min="0" max="1" step="0.05" data-s="master" value="${i.master}"></label>
    <label>\uC74C\uC545<input type="range" min="0" max="1" step="0.05" data-s="music" value="${i.music}"></label>
    <label>\uD6A8\uACFC\uC74C<input type="range" min="0" max="1" step="0.05" data-s="sfx" value="${i.sfx}"></label>
    <label>\uADF8\uB798\uD53D \uD488\uC9C8<select data-s="quality">${[[3,"\uCD5C\uACE0 (\uC570\uBE44\uC5B8\uD2B8 \uC624\uD074\uB8E8\uC804, 4x \uC548\uD2F0\uC568\uB9AC\uC5B4\uC2F1)"],[2,"\uB192\uC74C (\uAD8C\uC7A5)"],[1,"\uBCF4\uD1B5 (\uC800\uD574\uC0C1\uB3C4 \uADF8\uB9BC\uC790)"],[0,"\uB0AE\uC74C (\uADF8\uB9BC\uC790, \uBE5B \uBC88\uC9D0 \uB054)"]].map(([e,t])=>`<option value="${e}" ${i.quality==e?"selected":""}>${t}</option>`).join("")}</select></label>
    <label class="ck"><input type="checkbox" data-s="numbers" ${i.numbers?"checked":""}>\uD53C\uD574 \uC22B\uC790 \uD45C\uC2DC</label>
    <label class="ck"><input type="checkbox" data-s="fps" ${i.fps?"checked":""}>FPS \uD45C\uC2DC</label>
    <p class="note">\uD504\uB808\uC784\uC774 \uB5A8\uC5B4\uC9C0\uBA74 \uB80C\uB354 \uD574\uC0C1\uB3C4\uB97C \uC790\uB3D9\uC73C\uB85C \uB0AE\uCDB0 \uBD80\uB4DC\uB7EC\uC6C0\uC744 \uC720\uC9C0\uD569\uB2C8\uB2E4.</p>
  </div>`),document.querySelector(".modal").addEventListener("input",e=>{let t=e.target.dataset.s;t&&(i[t]=e.target.type==="checkbox"?e.target.checked:+e.target.value,Wt(oe),Zg())})}function $g(i=hs){Ln.show(!0),Ln.root.classList.add("inv-only"),Ln.toggleInventory(!0);let t=setInterval(()=>{Ln.root.querySelector(".inventory").classList.contains("hidden")&&(Ln.root.classList.remove("inv-only"),Ln.show(!1),i(),clearInterval(t))},200)}function FS(){let i=document.createElement("div");i.className="modal";let e=()=>{let t=Hg();i.innerHTML=`<div class="mcard worlds">
      <h3>\uC6D4\uB4DC</h3>
      <p class="note">\uC6D4\uB4DC\uB294 \uC774 \uBE0C\uB77C\uC6B0\uC800\uC5D0 \uC800\uC7A5\uB418\uB294 \uC6B0\uB9AC\uB9CC\uC758 \uC11C\uBC84\uC785\uB2C8\uB2E4. \uCE5C\uAD6C\uB294 \uC6D4\uB4DC \uCF54\uB4DC\uC640 \uBE44\uBC00\uBC88\uD638\uB85C \uB4E4\uC5B4\uC624\uACE0, \uC6D4\uB4DC\uC5D0\uC11C \uC5BB\uC740 \uB808\uBCA8\uACFC \uC7A5\uBE44\uB294 \uADF8 \uC6D4\uB4DC\uC5D0\uB9CC \uC313\uC785\uB2C8\uB2E4. \uCE5C\uAD6C\uB294 \uB0B4\uAC00 \uC6D4\uB4DC\uB97C \uC5F4\uC5B4 \uB454 \uB3D9\uC548\uC5D0\uB9CC \uB4E4\uC5B4\uC62C \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p>
      <div class="wlist">${t.length?t.map(n=>`<div class="witem">
        <div class="wi"><b>${Bt(n.name)}</b><em>\uCF54\uB4DC <i>${n.code}</i> \xB7 \uBA64\uBC84 ${Object.keys(n.members).length}\uBA85 \xB7 ${n.pass?"\uBE44\uBC00\uBC88\uD638 \uC788\uC74C":"\uBE44\uBC00\uBC88\uD638 \uC5C6\uC74C"}</em></div>
        <button class="btn small primary" data-open="${n.id}">\uC5F4\uAE30</button><button class="btn small ghost" data-del="${n.id}">\uC0AD\uC81C</button></div>`).join(""):'<p class="note">\uC544\uC9C1 \uB9CC\uB4E0 \uC6D4\uB4DC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.</p>'}</div>
      <form class="wnew"><input name="n" maxlength="${np}" placeholder="\uC0C8 \uC6D4\uB4DC \uC774\uB984" autocomplete="off" required /><input name="p" type="password" maxlength="${xd}" placeholder="\uBE44\uBC00\uBC88\uD638 (\uBE44\uC6B0\uBA74 \uC5C6\uC74C)" autocomplete="new-password" /><button class="btn">\uB9CC\uB4E4\uAE30</button></form>
      <div class="row"><button class="btn ghost" data-close>\uB2EB\uAE30</button></div>
    </div>`};i.addEventListener("click",t=>{if(t.target.closest("[data-close]")||t.target===i){i.remove();return}let n=t.target.closest("[data-open]");if(n){i.remove(),BS(n.dataset.open);return}let s=t.target.closest("[data-del]");s&&(s.dataset.armed?(Gg(s.dataset.del),e(),zi("\uC6D4\uB4DC\uB97C \uC0AD\uC81C\uD588\uC2B5\uB2C8\uB2E4")):(s.dataset.armed="1",s.textContent="\uC815\uB9D0 \uC0AD\uC81C",s.classList.add("danger")))}),i.addEventListener("submit",async t=>{t.preventDefault();let n=t.target;try{let s=await Vg(n.n.value,n.p.value);zi(`\uC6D4\uB4DC '${s.name}'\uC744(\uB97C) \uB9CC\uB4E4\uC5C8\uC2B5\uB2C8\uB2E4`),e()}catch(s){zi(s.message)}}),e(),document.body.appendChild(i),i.querySelector("input[name=n]")?.focus()}function OS(i){let e=pd(i);if(e.length!==pc)return zi(`${pc}\uC790\uB9AC \uC6D4\uB4DC \uCF54\uB4DC\uB97C \uC785\uB825\uD558\uC138\uC694`);let t=document.createElement("div");t.className="modal",t.innerHTML=`<form class="mcard pw"><h3>\uC6D4\uB4DC \uCC38\uAC00</h3><p class="note">\uC6D4\uB4DC <b>${e}</b>\uC758 \uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD558\uC138\uC694. \uBE44\uBC00\uBC88\uD638\uAC00 \uC5C6\uB294 \uC6D4\uB4DC\uBA74 \uBE44\uC6CC \uB450\uC138\uC694.</p>
    <input name="p" type="password" maxlength="${xd}" placeholder="\uBE44\uBC00\uBC88\uD638" autocomplete="current-password" />
    <div class="row"><button type="button" class="btn ghost" data-close>\uCDE8\uC18C</button><button class="btn primary">\uCC38\uAC00</button></div></form>`,t.addEventListener("click",n=>{(n.target.closest("[data-close]")||n.target===t)&&t.remove()}),t.addEventListener("submit",n=>{n.preventDefault();let s=n.target.p.value;t.remove(),$S(e,s)}),document.body.appendChild(t),t.querySelector("input").focus()}async function BS(i){let e=vd(i);if(!e)return;ab(`${Bt(e.name)} \uC5EC\uB294 \uC911\u2026`),Bf(oe,sp(e,oe.uid,oe.nickname),n=>rp(e.id,oe.uid,oe.nickname,n)),Wt(oe);let t=new fc({profile:oe,online:!0,difficulty:oe.difficulty,world:{code:e.code,name:e.name,verify:n=>Wg(vd(e.id)||e,n),progressFor:(n,s)=>sp(vd(e.id)||e,n,s),save:(n,s,r)=>rp(e.id,n,s,r)},handlers:{onRoster:xc,onChat:lp,...up}});Pe=t,Qn={name:e.name,code:e.code,host:!0,locked:!!e.pass};try{if(await t.open(),Pe!==t)return;dp(),xc(t.roster())}catch(n){if(Pe!==t)return;Pe=null,Ar(),za("\uC6D4\uB4DC\uB97C \uC5F4 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4",Bt(n.message))}}function HS(i){!Qn||ln!=="lobby"||!$e[i]||(oe.current=i,Wt(oe),an.play("ui",{}),gc())}function gc(){Pe?.setChar?.(oe.character),nb()}function nb(){let i=Tt(".tab-char");!i||document.activeElement?.id==="name"||(i.innerHTML=op({pick:"wcls",inv:"winv",tree:"wtree",look:"wlook"}))}var ib="party";function sb(i){ib=i;for(let e of document.querySelectorAll(".tabs [data-tab]"))e.classList.toggle("on",e.dataset.tab===i);Tt(".tab-party")?.classList.toggle("hidden",i!=="party"),Tt(".tab-char")?.classList.toggle("hidden",i!=="char")}function rb(){Tt(".pause")?.remove(),cn.stop(),hp(),dp(),xc(Pe.roster(),Pe.difficulty)}function dp(){ln="lobby";let i=Qn,e=i.host;ei.innerHTML=`<div class="screen lobby"><div class="lobby-left">
    <h2>${Bt(i.name)}</h2>
    <p class="wl-code"><span>\uC6D4\uB4DC \uCF54\uB4DC</span><b>${i.code}</b><button class="link-btn" data-act="copy">\uCD08\uB300 \uB9C1\uD06C \uBCF5\uC0AC</button></p>
    <div class="tabs"><button data-tab="party">\uD30C\uD2F0</button><button data-tab="char">\uB0B4 \uCE90\uB9AD\uD130</button></div>
    <section class="tab-party">
      <div class="lobby-diff"></div>
      <ul class="roster"></ul>
      <p class="note">${e?`\uCE5C\uAD6C\uC5D0\uAC8C \uC6D4\uB4DC \uCF54\uB4DC${i.locked?"\uC640 \uBE44\uBC00\uBC88\uD638":""}\uB97C \uC54C\uB824 \uC8FC\uC138\uC694. \uCD5C\uB300 4\uBA85. \uC774 \uC6D4\uB4DC\uC5D0\uC11C \uC5BB\uC740 \uB808\uBCA8\uACFC \uC7A5\uBE44\uB294 \uC774 \uC6D4\uB4DC\uC5D0\uB9CC \uC800\uC7A5\uB429\uB2C8\uB2E4.`:"\uC774 \uC6D4\uB4DC\uC5D0\uC11C \uC5BB\uC740 \uB808\uBCA8\uACFC \uC7A5\uBE44\uB294 \uC774 \uC6D4\uB4DC\uC5D0\uB9CC \uC800\uC7A5\uB429\uB2C8\uB2E4. \uC6D4\uB4DC \uC8FC\uC778\uC774 \uB358\uC804\uC5D0 \uC785\uC7A5\uD558\uBA74 \uD568\uAED8 \uB4E4\uC5B4\uAC11\uB2C8\uB2E4."}</p>
      <div class="row"><button class="btn ghost" data-act="leave">\uC6D4\uB4DC \uB098\uAC00\uAE30</button>${e?'<button class="btn primary" data-act="start">\uB358\uC804 \uC785\uC7A5</button>':""}</div>
    </section>
    <section class="tab-char hidden"></section>
    <div class="chat-slot"></div>
  </div><p class="lobby-hint"><kbd>\uC6B0\uD074\uB9AD</kbd> \uC774\uB3D9 \xB7 <kbd>Enter</kbd> \uB300\uD654</p></div>`,ls.tagNames([],pe),ls.mount(Tt(".chat-slot"),"lobby"),pe.camOffset.set(0,11,14),eb(!1),nb(),sb(ib),cn.startLobby(Pe)}function xc(i,e=Pe?.difficulty??1){let t=Tt(".roster");if(!t)return;let n=Pe?.mode==="host";Tt(".lobby-diff").innerHTML=ap(e,n?oe.maxDifficulty:e,"ldiff",!n),t.innerHTML=Array.from({length:4},(s,r)=>{let a=i[r];return a?`<li><span class="ri" style="--c:${$e[a.cls].trail}">${tn(Mr[a.cls])}</span><b>${Bt(a.name)}</b><em>Lv ${a.level} ${Lt(a.cls,a.spec).name}</em>${a.host?'<span class="tag">\uC6D4\uB4DC \uC8FC\uC778</span>':""}${a.id===Pe?.localId?'<span class="tag me">\uB098</span>':""}</li>`:'<li class="empty">\uBE48 \uC790\uB9AC</li>'}).join("")}async function VS(){let i=`${location.origin}${location.pathname}?world=${Qn?.code}`;try{await navigator.clipboard.writeText(i),zi("\uCD08\uB300 \uB9C1\uD06C\uB97C \uBCF5\uC0AC\uD588\uC2B5\uB2C8\uB2E4")}catch{zi(i,6e3)}}function ab(i){ei.innerHTML=`<div class="screen dim"><div class="panel center"><div class="spinner"></div><p>${i}</p><button class="btn ghost small" data-act="leave">\uCDE8\uC18C</button></div></div>`}var up={onPortal:i=>GS(i),onFinish:()=>jS()};function GS(i){let e=Pe;e&&(Ln.portalPrompt(i,{host:e.mode==="host",localId:e.localId,onReady:()=>e.ready?.()}),i.s==="go"&&XS(i.next))}var WS={1:"r2",2:"hall",3:"throne"},_d={};function qS(i){if(_d[i])return _d[i];let e=yt.find(r=>r.chapter===i&&r.id===WS[i]),t=(e.x0+e.x1)/2*4,n=(e.z0+e.z1)/2*4,s={target:pe.camTarget.clone(),offset:pe.camOffset.clone(),zoom:pe.zoom,zoomTo:pe.zoomTo,faceYaw:pe.faceYaw,camYaw:pe.camYaw,cine:pe.cine};pe.cine=null,pe.zoom=pe.zoomTo=0,pe.faceYaw=null,pe.camYaw=null,pe.camOffset.set(-13,17,19),pe.camTarget.set(t,0,n),pe.setAtmosphere(Wn[i]),Pr.update(.016,Rr,[],{x:t,z:n});for(let r=0;r<3;r++)Mt.update(.05),pe.render(.016,Rr);return _d[i]=pe.canvas.toDataURL("image/jpeg",.86),pe.camTarget.copy(s.target),pe.camOffset.copy(s.offset),Object.assign(pe,{zoom:s.zoom,zoomTo:s.zoomTo,faceYaw:s.faceYaw,camYaw:s.camYaw,cine:s.cine}),pe.setAtmosphere(Wn[cn.chapter||1]),_d[i]}function XS(i){Tt(".portal-screen")?.remove();let e=document.createElement("div");if(e.className="portal-screen",i){let t=Ea(i);e.innerHTML=`<div class="ps-art" style="background-image:url(${qS(i)})"></div>
      <div class="ps-info"><span class="ps-num">\uC81C${i}\uC7A5</span><h2>${en[i].name}</h2><p>${en[i].intro}</p>
      <em>\uC801 \uCCB4\uB825 \xD7${t.hp.toFixed(1)} \xB7 \uACF5\uACA9\uB825 \xD7${t.atk.toFixed(2)}${i>=2?" \xB7 \uBCF4\uB77C\uC0C9 \uC989\uC0AC \uD328\uD134":""}</em><div class="ps-bar"><i></i></div></div>`}else e.innerHTML=`<div class="ps-info end"><span class="ps-num">\uC5EC\uC815\uC758 \uB05D</span><h2>${en[ui].name}</h2><p>${en[ui].outro}</p><div class="ps-bar"><i></i></div></div>`;e.style.setProperty("--dur",`${bd}ms`),document.body.appendChild(e),an.play("revive",{}),setTimeout(()=>{e.classList.add("out"),setTimeout(()=>e.remove(),700)},bd+300)}function jS(){ln==="play"&&(cn.ended=!0,ob(cn.summary(!0)))}async function Yg(){Pe=new fc({profile:oe,online:!1,difficulty:oe.difficulty,handlers:{onChat:lp,...up}}),Pe.start(),fp()}async function $S(i,e){ab(`${i} \uC6D4\uB4DC\uC5D0 \uC5F0\uACB0\uD558\uB294 \uC911\u2026`);let t=new gd({profile:oe,code:i,password:e,handlers:{onWelcome:n=>{Bf(oe,n.progress,s=>t.syncProgress(s)),Qn={name:n.world?.name||i,code:i,host:!1}},onRoster:xc,onChat:lp,onStart:()=>{Pe===t&&ln!=="play"&&fp()},onLobby:()=>{Pe===t&&rb()},...up,onDisconnect:n=>{Pe!==t||ln==="results"||(Ar(),za("\uC5F0\uACB0 \uC885\uB8CC",Bt(n)))}}});Pe=t;try{if(await t.open(),Pe!==t)return;dp(),xc(t.roster(),t.difficulty)}catch(n){if(Pe!==t)return;Pe=null,Ar(),za("\uCC38\uAC00\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4",Bt(n.message))}}function fp(){ln="play",ei.innerHTML="",ls.tagNames([],pe),LS(),ls.mount(document.body,"play"),cn.start(Pe),an.unlock(),oe.seenTutorial||(oe.seenTutorial=!0,Wt(oe),setTimeout(()=>Ln.announce("\uC655\uAC00 \uBB18\uC5ED","#e8d9c0",4,!1,"\uC6B0\uD074\uB9AD \uC774\uB3D9 \xB7 \uC88C\uD074\uB9AD \uACF5\uACA9 \xB7 QWER \uC2A4\uD0AC \xB7 Space \uD68C\uD53C \xB7 Enter \uCC44\uD305"),600))}function Ar(){if(Pe)try{Pe.leave()}catch{}Pe=null,Q0()&&Hf(oe),Qn=null,Tt(".pause")?.remove(),cn.stop(),ls.close(),eb(!0),hp(),hs()}var cp={difficulty:1};function ob(i){ln="results",cp=i,oe.stats.runs++,Tt(".portal-screen")?.remove(),Ln.portalPrompt({s:"idle",need:[]},{});let e=i.victory?nd(oe,i.difficulty):0;e&&(oe.difficulty=e),Wt(oe);let t=Pe?.mode==="host"&&!Pe.online,n=t&&i.victory&&i.difficulty<Math.min(Ps,ui),s=Ma(i.difficulty),r=i.victory&&s>=ui,a=ut(oe),o=Math.floor(i.time/60),c=Math.floor(i.time%60);Ln.show(!1),bc.enabled=!1,ei.innerHTML=`<div class="screen dim results"><div class="panel">
    <h2 class="${i.victory?"win":"lose"}">${i.victory?`\uC81C${s}\uC7A5 \uC644\uB8CC`:"\uD30C\uD2F0 \uC804\uBA78"}</h2>
    <p class="note">\uC81C${s}\uC7A5 \xB7 ${en[s].name}</p>
    ${i.victory?`<p class="story">${en[s].outro}</p>`:'<p class="note">\uB9DD\uC790\uB4E4\uC774 \uB2E4\uC2DC \uC774\uACF3\uC744 \uC9C0\uBC30\uD569\uB2C8\uB2E4.</p>'}
    ${r?'<p class="note center-note">\uC5BC\uB9AC \uC561\uC138\uC2A4\uC758 \uB9C8\uC9C0\uB9C9 \uCC55\uD130\uC785\uB2C8\uB2E4. \uB2E4\uC74C \uC774\uC57C\uAE30\uB294 \uC900\uBE44 \uC911\uC785\uB2C8\uB2E4.</p>':""}
    ${e?`<p class="unlock">\u25C6 \uC81C${e}\uC7A5 \xB7 ${en[Ma(e)].name} \uAC1C\uBC29 \u25C6</p>`:""}
    <div class="stats"><div><b>${o}:${String(c).padStart(2,"0")}</b><span>\uC18C\uC694 \uC2DC\uAC04</span></div><div><b>+${i.xp.toLocaleString()}</b><span>\uACBD\uD5D8\uCE58</span></div><div><b>Lv ${a.level}</b><span>${i.levels?`${i.levels} \uB808\uBCA8 \uC0C1\uC2B9`:"\uD604\uC7AC \uB808\uBCA8"}</span></div></div>
    <h4>\uD68D\uB4DD \uC7A5\uBE44 ${i.loot.length}\uAC1C</h4>
    <div class="loot-list">${i.loot.length?i.loot.map(l=>`<div class="li" style="--rc:${bn[l.rarity].color}"><b>${Bt(l.name)}</b><em>${bn[l.rarity].name} ${Zn[l.slot].name} \xB7 Lv ${l.ilvl}</em></div>`).join(""):'<p class="note">\uC5C6\uC74C</p>'}</div>
    ${Qn?`<div class="row">${Qn.host?'<button class="btn ghost" data-act="menu">\uC6D4\uB4DC \uB098\uAC00\uAE30</button><button class="btn primary" data-act="tolobby">\uB300\uAE30\uC2E4\uB85C \uB3CC\uC544\uAC00\uAE30</button>':'<button class="btn ghost" data-act="menu">\uC6D4\uB4DC \uB098\uAC00\uAE30</button>'}</div>${Qn.host?"":'<p class="note center-note">\uC6D4\uB4DC \uC8FC\uC778\uC774 \uB300\uAE30\uC2E4\uB85C \uB3CC\uC544\uAC00\uBA74 \uD568\uAED8 \uC774\uB3D9\uD569\uB2C8\uB2E4.</p>'}`:`<div class="row"><button class="btn ${n||t&&!i.victory?"ghost":"primary"}" data-act="menu">\uCEA0\uD504\uB85C \uB3CC\uC544\uAC00\uAE30</button>${n?`<button class="btn primary" data-act="nextdiff">\uC81C${i.difficulty+1}\uC7A5\uC73C\uB85C</button>`:""}${t&&!i.victory?'<button class="btn primary" data-act="retry">\uB2E4\uC2DC \uB3C4\uC804</button>':""}</div>`}
  </div></div>`}addEventListener("keydown",i=>{if(i.code!=="Escape"||ln!=="play")return;let e=Ln.root.querySelector(".inventory");if(!Tt(".pause")&&e&&!e.classList.contains("hidden")){Ln.toggleInventory(!1);return}cb()});function cb(){if(ln!=="play")return;if(Tt(".pause")){Tt(".pause").remove();return}let i=document.createElement("div");i.className="screen dim pause";let e=Qn?Qn.host?'<button class="btn" data-act="tolobby">\uBAA8\uB450 \uB300\uAE30\uC2E4\uB85C</button><button class="btn ghost" data-act="quit">\uC6D4\uB4DC \uB098\uAC00\uAE30</button>':'<button class="btn ghost" data-act="quit">\uC6D4\uB4DC \uB098\uAC00\uAE30</button>':'<button class="btn ghost" data-act="quit">\uCEA0\uD504\uB85C \uB098\uAC00\uAE30</button>';i.innerHTML=`<div class="panel center"><h2>\uBA54\uB274</h2><p class="note">${Pe?.mode==="host"&&!Pe.online?"":"\uC628\uB77C\uC778 \uD30C\uD2F0\uB294 \uBA48\uCD94\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."}</p><div class="col"><button class="btn primary" data-act="resume">\uACC4\uC18D\uD558\uAE30</button><button class="btn" data-act="settings">\uC124\uC815</button>${e}</div></div>`,ei.appendChild(i)}pe.canvas.addEventListener("wheel",i=>{ln!=="play"&&ln!=="lobby"||(i.preventDefault(),pe.zoomTo=Math.max(0,Math.min(1,pe.zoomTo-i.deltaY*.0015)))},{passive:!1});var YS=cn.prewarmPool();await PS();YS();hp();hs();var Kg=performance.now(),Rr=0;function lb(i){let e=Math.min(.05,(i-Kg)/1e3);Kg=i,Rr+=e,hb(e),requestAnimationFrame(lb)}var kn={avg:1/60,acc:0,frames:0,fpsT:0},yd=document.createElement("div");yd.className="fps hidden";document.body.appendChild(yd);function KS(i){document.hidden||(kn.avg+=(Math.min(i,.1)-kn.avg)*.05,kn.acc+=i,kn.acc>1.5&&(kn.acc=0,pe.adapt(kn.avg)),kn.frames++,kn.fpsT+=i,yd.classList.toggle("hidden",!oe.settings.fps),kn.fpsT>=.5&&(yd.textContent=`${Math.round(kn.frames/kn.fpsT)} FPS \xB7 ${(kn.avg*1e3).toFixed(1)}ms \xB7 \uD574\uC0C1\uB3C4 ${Math.round(pe.dynScale*100)}%`,kn.frames=0,kn.fpsT=0))}function hb(i){KS(i),(pe.canvas.clientWidth!==innerWidth||pe.canvas.clientHeight!==innerHeight)&&pe.resize();try{let e=Tt(".pause")&&Pe?.mode==="host"&&!Pe.online;(ln==="play"||ln==="results")&&Pe?(e?pe.render(0,Rr):cn.frame(i,Rr),cn.lastView&&ls.update(i,cn.lastView.players,cn.pActors,pe,Pe.localId)):IS(i,Rr)}catch(e){console.error(e)}}requestAnimationFrame(lb);var JS=new Worker(URL.createObjectURL(new Blob(["setInterval(() => postMessage(0), 33);"],{type:"text/javascript"}))),Jg=performance.now();JS.onmessage=()=>{let i=performance.now(),e=Math.min(.1,(i-Jg)/1e3);Jg=i,!(!document.hidden||ln!=="play"&&ln!=="lobby"||Pe?.mode!=="host"||!Pe.online)&&(Pe.update(e,{mx:0,mz:0,ax:0,az:0,attack:!1}),Pe.takeEvents())};window.__ac={get session(){return Pe},game:cn,engine:pe,profile:oe,spawn(i,e=6,t=-6){let n=Pe?.world,s=n?.players[0];return s&&La(n,i,s.x+e,s.z+t)},advance(i,e=30,t=!1){for(let n=0;n<i*e;n++){if(t&&Pe?.world){let s=Pe.world;Ug(s,Pe.localId);let r=s.players.find(a=>a.id===Pe.localId);if(bc.mouse.down=!1,r){let a=r.input;bc.bot=a}}Rr+=1/e,hb(1/e)}}};
