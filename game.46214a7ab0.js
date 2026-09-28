var $g=Object.defineProperty;var Ds=(i,e)=>()=>(i&&(e=i(i=0)),e);var Yg=(i,e)=>{for(var t in e)$g(i,t,{get:e[t],enumerable:!0})};function li(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]+"-"+fn[e&255]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[t&63|128]+fn[t>>8&255]+"-"+fn[t>>16&255]+fn[t>>24&255]+fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]).toLowerCase()}function Ke(i,e,t){return Math.max(e,Math.min(t,i))}function ld(i,e){return(i%e+e)%e}function Kg(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Jg(i,e,t){return i!==e?(t-i)/(e-i):0}function Fa(i,e,t){return(1-t)*i+t*e}function Zg(i,e,t,n){return Fa(i,e,1-Math.exp(-t*n))}function Qg(i,e=1){return e-Math.abs(ld(i,e*2)-e)}function eb(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function tb(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function nb(i,e){return i+Math.floor(Math.random()*(e-i+1))}function ib(i,e){return i+Math.random()*(e-i)}function sb(i){return i*(.5-Math.random())}function rb(i){i!==void 0&&(np=i);let e=np+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ab(i){return i*za}function ob(i){return i*Ws}function cb(i){return(i&i-1)===0&&i!==0}function lb(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function hb(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ub(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),m=a((n-e)/2);switch(s){case"XYX":i.set(o*h,c*u,c*d,o*l);break;case"YZY":i.set(c*d,o*h,c*u,o*l);break;case"ZXZ":i.set(c*u,c*d,o*h,o*l);break;case"XZX":i.set(o*h,c*m,c*f,o*l);break;case"YXY":i.set(c*f,o*h,c*m,o*l);break;case"ZYZ":i.set(c*m,c*f,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function oi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ft(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}function ud(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function $r(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function bm(){let i=$r("canvas");return i.style.display="block",i}function Yr(i){i in sp||(sp[i]=!0,console.warn(i))}function xm(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function db(){let i={enabled:!0,workingColorSpace:hn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ct&&(s.r=Gi(s.r),s.g=Gi(s.g),s.b=Gi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ct&&(s.r=qr(s.r),s.g=qr(s.g),s.b=qr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Qi?Ba:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Yr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Yr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[hn]:{primaries:e,whitePoint:n,transfer:Ba,toXYZ:rp,fromXYZ:ap,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ut},outputColorSpaceConfig:{drawingBufferColorSpace:Ut}},[Ut]:{primaries:e,whitePoint:n,transfer:ct,toXYZ:rp,fromXYZ:ap,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ut}}}),i}function Gi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function qr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}function du(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?zc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}function pu(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Us.fromArray(i,r);let o=s.x*Math.abs(Us.x)+s.y*Math.abs(Us.y)+s.z*Math.abs(Us.z),c=e.dot(Us),l=t.dot(Us),h=n.dot(Us);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}function Au(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function wb(i,e,t,n,s,r,a,o){let c;if(e.side===_n?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===hi,o),c===null)return null;Sc.copy(o),Sc.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Sc);return l<t.near||l>t.far?null:{distance:l,point:Sc.clone(),object:i}}function Tc(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,vc),i.getVertexPosition(c,_c),i.getVertexPosition(l,yc);let h=wb(i,e,t,n,vc,_c,yc,bp);if(h){let u=new P;gs.getBarycoord(bp,vc,_c,yc,u),s&&(h.uv=gs.getInterpolatedAttribute(s,o,c,l,u,new ye)),r&&(h.uv1=gs.getInterpolatedAttribute(r,o,c,l,u,new ye)),a&&(h.normal=gs.getInterpolatedAttribute(a,o,c,l,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new P,materialIndex:0};gs.getNormal(vc,_c,yc,d.normal),h.face=d,h.barycoord=u}return h}function sr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function mn(i){let e={};for(let t=0;t<i.length;t++){let n=sr(i[t]);for(let s in n)e[s]=n[s]}return e}function Eb(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function dd(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}function Cc(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(Vc.fromBufferAttribute(o,s),Gc.fromBufferAttribute(o,r),t.distanceSqToSegment(Vc,Gc,Lu,Cp)>n)return;Lu.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Lu);if(!(l<e.near||l>e.far))return{distance:l,point:Cp.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}function Lp(i,e,t,n,s,r,a){let o=Fu.distanceSqToPoint(i);if(o<t){let c=new P;Fu.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}function kc(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Ub(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function zb(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Dp(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let c=0;c!==e;++c)s[a++]=i[o+c]}return s}function _m(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}function Fb(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Mi;case"vector":case"vector2":case"vector3":case"vector4":return Ti;case"color":return ro;case"quaternion":return Si;case"bool":case"boolean":return $i;case"string":return Yi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Ob(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Fb(i.type);if(i.times===void 0){let t=[],n=[];_m(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}function Op(i,e){return i.distance-e.distance}function Wu(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Wu(r[a],e,t,!0)}}function md(i,e,t,n){let s=Yb(n);switch(t){case td:return i*e;case yl:return i*e/s.components*s.byteLength;case Ml:return i*e/s.components*s.byteLength;case id:return i*e*2/s.components*s.byteLength;case Sl:return i*e*2/s.components*s.byteLength;case nd:return i*e*3/s.components*s.byteLength;case yn:return i*e*4/s.components*s.byteLength;case Tl:return i*e*4/s.components*s.byteLength;case xo:case vo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case _o:case yo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case El:case Rl:return Math.max(i,16)*Math.max(e,8)/4;case wl:case Al:return Math.max(i,8)*Math.max(e,8)/2;case Cl:case Pl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Il:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case kl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ll:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Dl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Nl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ul:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case zl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Fl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ol:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Bl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Hl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Vl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Gl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Wl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ql:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Xl:case jl:case $l:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Yl:case Kl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Jl:case Zl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Yb(i){switch(i){case Gn:case Ju:return{byteLength:1,components:1};case la:case Zu:case un:return{byteLength:2,components:1};case vl:case _l:return{byteLength:2,components:4};case ys:case xl:case Kn:return{byteLength:4,components:1};case Qu:case ed:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}var Bp,qu,Hp,Xu,tl,Ei,hi,_n,Kt,Jt,Wi,en,ju,$u,nl,On,Vp,Gp,Wp,qp,er,Xp,jp,$p,Dc,Nc,mo,Yp,go,Kp,Jp,Zp,Qp,em,tm,il,sl,rl,Hs,al,ol,aa,cl,Yu,nm,im,Zi,ll,hl,ul,oa,dl,fl,pl,zu,sm,Ku,tr,nr,ml,gl,bo,An,xi,Xr,Yt,bl,ir,xn,ca,fi,Gn,Ju,Zu,la,xl,ys,Kn,un,vl,_l,Ms,Qu,ed,td,nd,yn,jr,Ss,yl,Ml,id,Sl,Tl,xo,vo,_o,yo,wl,El,Al,Rl,Cl,Pl,Il,kl,Ll,Dl,Nl,Ul,zl,Fl,Ol,Bl,Hl,Vl,Gl,Wl,ql,Xl,jl,$l,Yl,Kl,Jl,Zl,Ql,eh,rm,Vs,Gs,Lc,Os,Bs,Oa,th,am,sd,Mo,ha,om,cm,nh,lm,Qi,Ut,hn,Ba,ct,ai,rd,ad,Ha,hm,um,dm,od,fm,pm,mm,gm,Uc,So,cd,ci,Va,_i,fn,np,za,Ws,hd,ye,ln,P,hu,ip,qe,uu,sp,rp,ap,je,Ir,zc,fb,Kr,pb,fu,rn,at,Fc,qt,Ga,Oc,Bn,zi,ii,lc,kr,Lr,Dr,hs,us,Ns,Ca,hc,uc,Us,mb,Pa,mu,Rn,Fi,gu,dc,ds,bu,fc,xu,bs,Ie,Nr,si,gb,bb,fs,pc,zn,op,cp,ui,Jr,xb,lp,Ur,Oi,mc,Ia,vb,_b,hp,up,dp,fp,yb,zr,vu,It,ri,Bi,_u,Hi,Fr,Or,pp,yu,Mu,Su,Tu,wu,Eu,gs,vm,ps,gc,re,pn,Mb,vn,yt,jt,bc,Sb,Pt,Wa,qa,nt,Tb,Yn,Ru,Br,Fn,ka,sn,Mt,mp,zs,xc,gp,vc,_c,yc,Cu,Mc,bp,Sc,Oe,Zr,Mn,Ab,Rb,it,Xa,ms,xp,vp,$t,Hr,Vr,Bc,ja,Hc,wt,Cb,Qr,$a,Ya,ea,bn,ta,_p,yp,Mp,Pb,Sp,wc,Pu,Tp,Iu,qs,na,qi,wp,Ib,Ka,di,Gr,Ep,Ec,Ap,kb,La,Da,Xs,ku,Lb,Db,bi,Fs,Nb,Ac,ia,Xi,Vc,Gc,Rp,Na,Rc,Lu,Cp,yi,Pp,Ip,Ja,Za,sa,kp,Fu,Pc,Ic,Qa,js,eo,xs,vs,to,Wc,$s,Hn,_s,Ys,Ks,no,Qt,Cn,io,qc,Xc,ji,jc,so,$c,Pn,$i,ro,Mi,Yc,Si,Yi,Ti,Js,vi,Kc,ym,wi,Vi,Ou,ra,Wr,Jc,ao,Zs,oo,Du,Np,Up,co,Bu,lo,zp,Ua,Nu,Hu,Vn,Ki,Vu,Qs,Ji,Uu,ho,Zc,uo,Qc,fd,Bb,pd,Hb,Vb,Gb,Wb,qb,Xb,jb,Gu,bt,el,$b,fo,Fp,po,gd=Ds(()=>{Bp=0,qu=1,Hp=2,Xu=1,tl=2,Ei=3,hi=0,_n=1,Kt=2,Jt=0,Wi=1,en=2,ju=3,$u=4,nl=5,On=100,Vp=101,Gp=102,Wp=103,qp=104,er=200,Xp=201,jp=202,$p=203,Dc=204,Nc=205,mo=206,Yp=207,go=208,Kp=209,Jp=210,Zp=211,Qp=212,em=213,tm=214,il=0,sl=1,rl=2,Hs=3,al=4,ol=5,aa=6,cl=7,Yu=0,nm=1,im=2,Zi=0,ll=1,hl=2,ul=3,oa=4,dl=5,fl=6,pl=7,zu="attached",sm="detached",Ku=300,tr=301,nr=302,ml=303,gl=304,bo=306,An=1e3,xi=1001,Xr=1002,Yt=1003,bl=1004,ir=1005,xn=1006,ca=1007,fi=1008,Gn=1009,Ju=1010,Zu=1011,la=1012,xl=1013,ys=1014,Kn=1015,un=1016,vl=1017,_l=1018,Ms=1020,Qu=35902,ed=35899,td=1021,nd=1022,yn=1023,jr=1026,Ss=1027,yl=1028,Ml=1029,id=1030,Sl=1031,Tl=1033,xo=33776,vo=33777,_o=33778,yo=33779,wl=35840,El=35841,Al=35842,Rl=35843,Cl=36196,Pl=37492,Il=37496,kl=37808,Ll=37809,Dl=37810,Nl=37811,Ul=37812,zl=37813,Fl=37814,Ol=37815,Bl=37816,Hl=37817,Vl=37818,Gl=37819,Wl=37820,ql=37821,Xl=36492,jl=36494,$l=36495,Yl=36283,Kl=36284,Jl=36285,Zl=36286,Ql=2200,eh=2201,rm=2202,Vs=2300,Gs=2301,Lc=2302,Os=2400,Bs=2401,Oa=2402,th=2500,am=2501,sd=0,Mo=1,ha=2,om=3200,cm=3201,nh=0,lm=1,Qi="",Ut="srgb",hn="srgb-linear",Ba="linear",ct="srgb",ai=7680,rd=7681,ad=517,Ha=519,hm=512,um=513,dm=514,od=515,fm=516,pm=517,mm=518,gm=519,Uc=35044,So=35048,cd="300 es",ci=2e3,Va=2001,_i=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],np=1234567,za=Math.PI/180,Ws=180/Math.PI;hd={DEG2RAD:za,RAD2DEG:Ws,generateUUID:li,clamp:Ke,euclideanModulo:ld,mapLinear:Kg,inverseLerp:Jg,lerp:Fa,damp:Zg,pingpong:Qg,smoothstep:eb,smootherstep:tb,randInt:nb,randFloat:ib,randFloatSpread:sb,seededRandom:rb,degToRad:ab,radToDeg:ob,isPowerOfTwo:cb,ceilPowerOfTwo:lb,floorPowerOfTwo:hb,setQuaternionFromProperEuler:ub,normalize:ft,denormalize:oi},ye=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ln=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],m=r[a+2],b=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=b;return}if(u!==b||c!==d||l!==f||h!==m){let g=1-o,p=c*d+l*f+h*m+u*b,v=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let w=Math.sqrt(_),E=Math.atan2(w,p*v);g=Math.sin(g*E)/w,o=Math.sin(o*E)/w}let x=o*v;if(c=c*g+d*x,l=l*g+f*x,h=h*g+m*x,u=u*g+b*x,g===1-o){let w=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=w,l*=w,h*=w,u*=w}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],m=r[a+3];return e[t]=o*m+h*u+c*f-l*d,e[t+1]=c*m+h*d+l*u-o*f,e[t+2]=l*m+h*f+o*d-c*u,e[t+3]=h*m-o*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),d=c(n/2),f=c(s/2),m=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"YZX":this._x=d*h*u+l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u-d*f*m;break;case"XZY":this._x=d*h*u-l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ip.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ip.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return hu.copy(this).projectOnVector(e),this.sub(hu)}reflect(e){return this.sub(hu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},hu=new P,ip=new ln,qe=class i{constructor(e,t,n,s,r,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],b=s[0],g=s[3],p=s[6],v=s[1],_=s[4],x=s[7],w=s[2],E=s[5],R=s[8];return r[0]=a*b+o*v+c*w,r[3]=a*g+o*_+c*E,r[6]=a*p+o*x+c*R,r[1]=l*b+h*v+u*w,r[4]=l*g+h*_+u*E,r[7]=l*p+h*x+u*R,r[2]=d*b+f*v+m*w,r[5]=d*g+f*_+m*E,r[8]=d*p+f*x+m*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,m=t*u+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/m;return e[0]=u*b,e[1]=(s*l-h*n)*b,e[2]=(o*n-s*a)*b,e[3]=d*b,e[4]=(h*t-s*c)*b,e[5]=(s*r-o*t)*b,e[6]=f*b,e[7]=(n*c-l*t)*b,e[8]=(a*t-n*r)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(uu.makeScale(e,t)),this}rotate(e){return this.premultiply(uu.makeRotation(-e)),this}translate(e,t){return this.premultiply(uu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},uu=new qe;sp={};rp=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ap=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);je=db();zc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ir===void 0&&(Ir=$r("canvas")),Ir.width=e.width,Ir.height=e.height;let s=Ir.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ir}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=$r("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Gi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Gi(t[n]/255)*255):t[n]=Gi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},fb=0,Kr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fb++}),this.uuid=li(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(du(s[a].image)):r.push(du(s[a]))}else r=du(s);n.url=r}return t||(e.images[this.uuid]=n),n}};pb=0,fu=new P,rn=class i extends _i{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=xi,s=xi,r=xn,a=fi,o=yn,c=Gn,l=i.DEFAULT_ANISOTROPY,h=Qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pb++}),this.uuid=li(),this.name="",this.source=new Kr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ye(0,0),this.repeat=new ye(1,1),this.center=new ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(fu).x}get height(){return this.source.getSize(fu).y}get depth(){return this.source.getSize(fu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ku)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case An:e.x=e.x-Math.floor(e.x);break;case xi:e.x=e.x<0?0:1;break;case Xr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case An:e.y=e.y-Math.floor(e.y);break;case xi:e.y=e.y<0?0:1;break;case Xr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=Ku;rn.DEFAULT_ANISOTROPY=1;at=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],m=c[9],b=c[2],g=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-b)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+b)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(l+1)/2,x=(f+1)/2,w=(p+1)/2,E=(h+d)/4,R=(u+b)/4,I=(m+g)/4;return _>x&&_>w?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=E/n,r=R/n):x>w?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=E/s,r=I/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=R/r,s=I/r),this.set(n,s,r,t),this}let v=Math.sqrt((g-m)*(g-m)+(u-b)*(u-b)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(u-b)/v,this.z=(d-h)/v,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Fc=class extends _i{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new rn(s);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:xn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Kr(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},qt=class extends Fc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ga=class extends rn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Oc=class extends rn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Bn=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ii.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ii.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ii.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ii):ii.fromBufferAttribute(r,a),ii.applyMatrix4(e.matrixWorld),this.expandByPoint(ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),lc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),lc.copy(n.boundingBox)),lc.applyMatrix4(e.matrixWorld),this.union(lc)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ii),ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ca),hc.subVectors(this.max,Ca),kr.subVectors(e.a,Ca),Lr.subVectors(e.b,Ca),Dr.subVectors(e.c,Ca),hs.subVectors(Lr,kr),us.subVectors(Dr,Lr),Ns.subVectors(kr,Dr);let t=[0,-hs.z,hs.y,0,-us.z,us.y,0,-Ns.z,Ns.y,hs.z,0,-hs.x,us.z,0,-us.x,Ns.z,0,-Ns.x,-hs.y,hs.x,0,-us.y,us.x,0,-Ns.y,Ns.x,0];return!pu(t,kr,Lr,Dr,hc)||(t=[1,0,0,0,1,0,0,0,1],!pu(t,kr,Lr,Dr,hc))?!1:(uc.crossVectors(hs,us),t=[uc.x,uc.y,uc.z],pu(t,kr,Lr,Dr,hc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},zi=[new P,new P,new P,new P,new P,new P,new P,new P],ii=new P,lc=new Bn,kr=new P,Lr=new P,Dr=new P,hs=new P,us=new P,Ns=new P,Ca=new P,hc=new P,uc=new P,Us=new P;mb=new Bn,Pa=new P,mu=new P,Rn=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):mb.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pa.subVectors(e,this.center);let t=Pa.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Pa,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(mu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pa.copy(e.center).add(mu)),this.expandByPoint(Pa.copy(e.center).sub(mu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Fi=new P,gu=new P,dc=new P,ds=new P,bu=new P,fc=new P,xu=new P,bs=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fi.copy(this.origin).addScaledVector(this.direction,t),Fi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){gu.copy(e).add(t).multiplyScalar(.5),dc.copy(t).sub(e).normalize(),ds.copy(this.origin).sub(gu);let r=e.distanceTo(t)*.5,a=-this.direction.dot(dc),o=ds.dot(this.direction),c=-ds.dot(dc),l=ds.lengthSq(),h=Math.abs(1-a*a),u,d,f,m;if(h>0)if(u=a*c-o,d=a*o-c,m=r*h,u>=0)if(d>=-m)if(d<=m){let b=1/h;u*=b,d*=b,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(gu).addScaledVector(dc,d),f}intersectSphere(e,t){Fi.subVectors(e.center,this.origin);let n=Fi.dot(this.direction),s=Fi.dot(Fi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Fi)!==null}intersectTriangle(e,t,n,s,r){bu.subVectors(t,e),fc.subVectors(n,e),xu.crossVectors(bu,fc);let a=this.direction.dot(xu),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ds.subVectors(this.origin,e);let c=o*this.direction.dot(fc.crossVectors(ds,fc));if(c<0)return null;let l=o*this.direction.dot(bu.cross(ds));if(l<0||c+l>a)return null;let h=-o*ds.dot(xu);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ie=class i{constructor(e,t,n,s,r,a,o,c,l,h,u,d,f,m,b,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,u,d,f,m,b,g)}set(e,t,n,s,r,a,o,c,l,h,u,d,f,m,b,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=b,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Nr.setFromMatrixColumn(e,0).length(),r=1/Nr.setFromMatrixColumn(e,1).length(),a=1/Nr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,m=o*h,b=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+m*l,t[5]=d-b*l,t[9]=-o*c,t[2]=b-d*l,t[6]=m+f*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,m=l*h,b=l*u;t[0]=d+b*o,t[4]=m*o-f,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-m,t[6]=b+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,m=l*h,b=l*u;t[0]=d-b*o,t[4]=-a*u,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*h,t[9]=b-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,f=a*u,m=o*h,b=o*u;t[0]=c*h,t[4]=m*l-f,t[8]=d*l+b,t[1]=c*u,t[5]=b*l+d,t[9]=f*l-m,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,f=a*l,m=o*c,b=o*l;t[0]=c*h,t[4]=b-d*u,t[8]=m*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*u+m,t[10]=d-b*u}else if(e.order==="XZY"){let d=a*c,f=a*l,m=o*c,b=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+b,t[5]=a*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=o*h,t[10]=b*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gb,e,bb)}lookAt(e,t,n){let s=this.elements;return zn.subVectors(e,t),zn.lengthSq()===0&&(zn.z=1),zn.normalize(),fs.crossVectors(n,zn),fs.lengthSq()===0&&(Math.abs(n.z)===1?zn.x+=1e-4:zn.z+=1e-4,zn.normalize(),fs.crossVectors(n,zn)),fs.normalize(),pc.crossVectors(zn,fs),s[0]=fs.x,s[4]=pc.x,s[8]=zn.x,s[1]=fs.y,s[5]=pc.y,s[9]=zn.y,s[2]=fs.z,s[6]=pc.z,s[10]=zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],b=n[6],g=n[10],p=n[14],v=n[3],_=n[7],x=n[11],w=n[15],E=s[0],R=s[4],I=s[8],S=s[12],y=s[1],C=s[5],D=s[9],F=s[13],H=s[2],X=s[6],W=s[10],ee=s[14],V=s[3],Z=s[7],le=s[11],Me=s[15];return r[0]=a*E+o*y+c*H+l*V,r[4]=a*R+o*C+c*X+l*Z,r[8]=a*I+o*D+c*W+l*le,r[12]=a*S+o*F+c*ee+l*Me,r[1]=h*E+u*y+d*H+f*V,r[5]=h*R+u*C+d*X+f*Z,r[9]=h*I+u*D+d*W+f*le,r[13]=h*S+u*F+d*ee+f*Me,r[2]=m*E+b*y+g*H+p*V,r[6]=m*R+b*C+g*X+p*Z,r[10]=m*I+b*D+g*W+p*le,r[14]=m*S+b*F+g*ee+p*Me,r[3]=v*E+_*y+x*H+w*V,r[7]=v*R+_*C+x*X+w*Z,r[11]=v*I+_*D+x*W+w*le,r[15]=v*S+_*F+x*ee+w*Me,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],b=e[7],g=e[11],p=e[15];return m*(+r*c*u-s*l*u-r*o*d+n*l*d+s*o*f-n*c*f)+b*(+t*c*f-t*l*d+r*a*d-s*a*f+s*l*h-r*c*h)+g*(+t*l*u-t*o*f-r*a*u+n*a*f+r*o*h-n*l*h)+p*(-s*o*h-t*c*u+t*o*d+s*a*u-n*a*d+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],b=e[13],g=e[14],p=e[15],v=u*g*l-b*d*l+b*c*f-o*g*f-u*c*p+o*d*p,_=m*d*l-h*g*l-m*c*f+a*g*f+h*c*p-a*d*p,x=h*b*l-m*u*l+m*o*f-a*b*f-h*o*p+a*u*p,w=m*u*c-h*b*c-m*o*d+a*b*d+h*o*g-a*u*g,E=t*v+n*_+s*x+r*w;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/E;return e[0]=v*R,e[1]=(b*d*r-u*g*r-b*s*f+n*g*f+u*s*p-n*d*p)*R,e[2]=(o*g*r-b*c*r+b*s*l-n*g*l-o*s*p+n*c*p)*R,e[3]=(u*c*r-o*d*r-u*s*l+n*d*l+o*s*f-n*c*f)*R,e[4]=_*R,e[5]=(h*g*r-m*d*r+m*s*f-t*g*f-h*s*p+t*d*p)*R,e[6]=(m*c*r-a*g*r-m*s*l+t*g*l+a*s*p-t*c*p)*R,e[7]=(a*d*r-h*c*r+h*s*l-t*d*l-a*s*f+t*c*f)*R,e[8]=x*R,e[9]=(m*u*r-h*b*r-m*n*f+t*b*f+h*n*p-t*u*p)*R,e[10]=(a*b*r-m*o*r+m*n*l-t*b*l-a*n*p+t*o*p)*R,e[11]=(h*o*r-a*u*r-h*n*l+t*u*l+a*n*f-t*o*f)*R,e[12]=w*R,e[13]=(h*b*s-m*u*s+m*n*d-t*b*d-h*n*g+t*u*g)*R,e[14]=(m*o*s-a*b*s-m*n*c+t*b*c+a*n*g-t*o*g)*R,e[15]=(a*u*s-h*o*s+h*n*c-t*u*c-a*n*d+t*o*d)*R,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,m=r*u,b=a*h,g=a*u,p=o*u,v=c*l,_=c*h,x=c*u,w=n.x,E=n.y,R=n.z;return s[0]=(1-(b+p))*w,s[1]=(f+x)*w,s[2]=(m-_)*w,s[3]=0,s[4]=(f-x)*E,s[5]=(1-(d+p))*E,s[6]=(g+v)*E,s[7]=0,s[8]=(m+_)*R,s[9]=(g-v)*R,s[10]=(1-(d+b))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Nr.set(s[0],s[1],s[2]).length(),a=Nr.set(s[4],s[5],s[6]).length(),o=Nr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],si.copy(this);let l=1/r,h=1/a,u=1/o;return si.elements[0]*=l,si.elements[1]*=l,si.elements[2]*=l,si.elements[4]*=h,si.elements[5]*=h,si.elements[6]*=h,si.elements[8]*=u,si.elements[9]*=u,si.elements[10]*=u,t.setFromRotationMatrix(si),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=ci,c=!1){let l=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),m,b;if(c)m=r/(a-r),b=a*r/(a-r);else if(o===ci)m=-(a+r)/(a-r),b=-2*a*r/(a-r);else if(o===Va)m=-a/(a-r),b=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=b,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=ci,c=!1){let l=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),m,b;if(c)m=1/(a-r),b=a/(a-r);else if(o===ci)m=-2/(a-r),b=-(a+r)/(a-r);else if(o===Va)m=-1/(a-r),b=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=m,l[14]=b,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Nr=new P,si=new Ie,gb=new P(0,0,0),bb=new P(1,1,1),fs=new P,pc=new P,zn=new P,op=new Ie,cp=new ln,ui=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return op.makeRotationFromQuaternion(e),this.setFromRotationMatrix(op,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return cp.setFromEuler(this),this.setFromQuaternion(cp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ui.DEFAULT_ORDER="XYZ";Jr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},xb=0,lp=new P,Ur=new ln,Oi=new Ie,mc=new P,Ia=new P,vb=new P,_b=new ln,hp=new P(1,0,0),up=new P(0,1,0),dp=new P(0,0,1),fp={type:"added"},yb={type:"removed"},zr={type:"childadded",child:null},vu={type:"childremoved",child:null},It=class i extends _i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xb++}),this.uuid=li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new P,t=new ui,n=new ln,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ie},normalMatrix:{value:new qe}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ur.setFromAxisAngle(e,t),this.quaternion.multiply(Ur),this}rotateOnWorldAxis(e,t){return Ur.setFromAxisAngle(e,t),this.quaternion.premultiply(Ur),this}rotateX(e){return this.rotateOnAxis(hp,e)}rotateY(e){return this.rotateOnAxis(up,e)}rotateZ(e){return this.rotateOnAxis(dp,e)}translateOnAxis(e,t){return lp.copy(e).applyQuaternion(this.quaternion),this.position.add(lp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hp,e)}translateY(e){return this.translateOnAxis(up,e)}translateZ(e){return this.translateOnAxis(dp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Oi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?mc.copy(e):mc.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ia.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oi.lookAt(Ia,mc,this.up):Oi.lookAt(mc,Ia,this.up),this.quaternion.setFromRotationMatrix(Oi),s&&(Oi.extractRotation(s.matrixWorld),Ur.setFromRotationMatrix(Oi),this.quaternion.premultiply(Ur.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(fp),zr.child=e,this.dispatchEvent(zr),zr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yb),vu.child=e,this.dispatchEvent(vu),vu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(fp),zr.child=e,this.dispatchEvent(zr),zr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ia,e,vb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ia,_b,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};It.DEFAULT_UP=new P(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;ri=new P,Bi=new P,_u=new P,Hi=new P,Fr=new P,Or=new P,pp=new P,yu=new P,Mu=new P,Su=new P,Tu=new at,wu=new at,Eu=new at,gs=class i{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ri.subVectors(e,t),s.cross(ri);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ri.subVectors(s,t),Bi.subVectors(n,t),_u.subVectors(e,t);let a=ri.dot(ri),o=ri.dot(Bi),c=ri.dot(_u),l=Bi.dot(Bi),h=Bi.dot(_u),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-o*h)*d,m=(a*h-o*c)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Hi)===null?!1:Hi.x>=0&&Hi.y>=0&&Hi.x+Hi.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Hi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Hi.x),c.addScaledVector(a,Hi.y),c.addScaledVector(o,Hi.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return Tu.setScalar(0),wu.setScalar(0),Eu.setScalar(0),Tu.fromBufferAttribute(e,t),wu.fromBufferAttribute(e,n),Eu.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Tu,r.x),a.addScaledVector(wu,r.y),a.addScaledVector(Eu,r.z),a}static isFrontFacing(e,t,n,s){return ri.subVectors(n,t),Bi.subVectors(e,t),ri.cross(Bi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ri.subVectors(this.c,this.b),Bi.subVectors(this.a,this.b),ri.cross(Bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Fr.subVectors(s,n),Or.subVectors(r,n),yu.subVectors(e,n);let c=Fr.dot(yu),l=Or.dot(yu);if(c<=0&&l<=0)return t.copy(n);Mu.subVectors(e,s);let h=Fr.dot(Mu),u=Or.dot(Mu);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Fr,a);Su.subVectors(e,r);let f=Fr.dot(Su),m=Or.dot(Su);if(m>=0&&f<=m)return t.copy(r);let b=f*l-c*m;if(b<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(n).addScaledVector(Or,o);let g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return pp.subVectors(r,s),o=(u-h)/(u-h+(f-m)),t.copy(s).addScaledVector(pp,o);let p=1/(g+b+d);return a=b*p,o=d*p,t.copy(n).addScaledVector(Fr,a).addScaledVector(Or,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},vm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ps={h:0,s:0,l:0},gc={h:0,s:0,l:0};re=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=je.workingColorSpace){return this.r=e,this.g=t,this.b=n,je.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=je.workingColorSpace){if(e=ld(e,1),t=Ke(t,0,1),n=Ke(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Au(a,r,e+1/3),this.g=Au(a,r,e),this.b=Au(a,r,e-1/3)}return je.colorSpaceToWorking(this,s),this}setStyle(e,t=Ut){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ut){let n=vm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gi(e.r),this.g=Gi(e.g),this.b=Gi(e.b),this}copyLinearToSRGB(e){return this.r=qr(e.r),this.g=qr(e.g),this.b=qr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ut){return je.workingToColorSpace(pn.copy(this),e),Math.round(Ke(pn.r*255,0,255))*65536+Math.round(Ke(pn.g*255,0,255))*256+Math.round(Ke(pn.b*255,0,255))}getHexString(e=Ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.workingToColorSpace(pn.copy(this),t);let n=pn.r,s=pn.g,r=pn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=je.workingColorSpace){return je.workingToColorSpace(pn.copy(this),t),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=Ut){je.workingToColorSpace(pn.copy(this),e);let t=pn.r,n=pn.g,s=pn.b;return e!==Ut?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ps),this.setHSL(ps.h+e,ps.s+t,ps.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ps),e.getHSL(gc);let n=Fa(ps.h,gc.h,t),s=Fa(ps.s,gc.s,t),r=Fa(ps.l,gc.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},pn=new re;re.NAMES=vm;Mb=0,vn=class extends _i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mb++}),this.uuid=li(),this.name="",this.type="Material",this.blending=Wi,this.side=hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Dc,this.blendDst=Nc,this.blendEquation=On,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new re(0,0,0),this.blendAlpha=0,this.depthFunc=Hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ha,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ai,this.stencilZFail=ai,this.stencilZPass=ai,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Wi&&(n.blending=this.blending),this.side!==hi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Dc&&(n.blendSrc=this.blendSrc),this.blendDst!==Nc&&(n.blendDst=this.blendDst),this.blendEquation!==On&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Hs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ha&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ai&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ai&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ai&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},yt=class extends vn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=Yu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},jt=new P,bc=new ye,Sb=0,Pt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Sb++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Uc,this.updateRanges=[],this.gpuType=Kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)bc.fromBufferAttribute(this,t),bc.applyMatrix3(e),this.setXY(t,bc.x,bc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix3(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=oi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ft(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=oi(t,this.array)),t}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=oi(t,this.array)),t}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=oi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=oi(t,this.array)),t}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),s=ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),s=ft(s,this.array),r=ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Uc&&(e.usage=this.usage),e}},Wa=class extends Pt{constructor(e,t,n){super(new Uint16Array(e),t,n)}},qa=class extends Pt{constructor(e,t,n){super(new Uint32Array(e),t,n)}},nt=class extends Pt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Tb=0,Yn=new Ie,Ru=new It,Br=new P,Fn=new Bn,ka=new Bn,sn=new P,Mt=class i extends _i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tb++}),this.uuid=li(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ud(e)?qa:Wa)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yn.makeRotationFromQuaternion(e),this.applyMatrix4(Yn),this}rotateX(e){return Yn.makeRotationX(e),this.applyMatrix4(Yn),this}rotateY(e){return Yn.makeRotationY(e),this.applyMatrix4(Yn),this}rotateZ(e){return Yn.makeRotationZ(e),this.applyMatrix4(Yn),this}translate(e,t,n){return Yn.makeTranslation(e,t,n),this.applyMatrix4(Yn),this}scale(e,t,n){return Yn.makeScale(e,t,n),this.applyMatrix4(Yn),this}lookAt(e){return Ru.lookAt(e),Ru.updateMatrix(),this.applyMatrix4(Ru.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Br).negate(),this.translate(Br.x,Br.y,Br.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new nt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Fn.setFromBufferAttribute(r),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let n=this.boundingSphere.center;if(Fn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];ka.setFromBufferAttribute(o),this.morphTargetsRelative?(sn.addVectors(Fn.min,ka.min),Fn.expandByPoint(sn),sn.addVectors(Fn.max,ka.max),Fn.expandByPoint(sn)):(Fn.expandByPoint(ka.min),Fn.expandByPoint(ka.max))}Fn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)sn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(sn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)sn.fromBufferAttribute(o,l),c&&(Br.fromBufferAttribute(e,l),sn.add(Br)),s=Math.max(s,n.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let I=0;I<n.count;I++)o[I]=new P,c[I]=new P;let l=new P,h=new P,u=new P,d=new ye,f=new ye,m=new ye,b=new P,g=new P;function p(I,S,y){l.fromBufferAttribute(n,I),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,y),d.fromBufferAttribute(r,I),f.fromBufferAttribute(r,S),m.fromBufferAttribute(r,y),h.sub(l),u.sub(l),f.sub(d),m.sub(d);let C=1/(f.x*m.y-m.x*f.y);isFinite(C)&&(b.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(C),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(C),o[I].add(b),o[S].add(b),o[y].add(b),c[I].add(g),c[S].add(g),c[y].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let I=0,S=v.length;I<S;++I){let y=v[I],C=y.start,D=y.count;for(let F=C,H=C+D;F<H;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let _=new P,x=new P,w=new P,E=new P;function R(I){w.fromBufferAttribute(s,I),E.copy(w);let S=o[I];_.copy(S),_.sub(w.multiplyScalar(w.dot(S))).normalize(),x.crossVectors(E,S);let C=x.dot(c[I])<0?-1:1;a.setXYZW(I,_.x,_.y,_.z,C)}for(let I=0,S=v.length;I<S;++I){let y=v[I],C=y.start,D=y.count;for(let F=C,H=C+D;F<H;F+=3)R(e.getX(F+0)),R(e.getX(F+1)),R(e.getX(F+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Pt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new P,r=new P,a=new P,o=new P,c=new P,l=new P,h=new P,u=new P;if(e)for(let d=0,f=e.count;d<f;d+=3){let m=e.getX(d+0),b=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,g),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,b),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)sn.fromBufferAttribute(e,t),sn.normalize(),e.setXYZ(t,sn.x,sn.y,sn.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),f=0,m=0;for(let b=0,g=c.length;b<g;b++){o.isInterleavedBufferAttribute?f=c[b]*o.data.stride+o.offset:f=c[b]*h;for(let p=0;p<h;p++)d[m++]=l[f++]}return new Pt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},mp=new Ie,zs=new bs,xc=new Rn,gp=new P,vc=new P,_c=new P,yc=new P,Cu=new P,Mc=new P,bp=new P,Sc=new P,Oe=class extends It{constructor(e=new Mt,t=new yt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Mc.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(Cu.fromBufferAttribute(u,e),a?Mc.addScaledVector(Cu,h):Mc.addScaledVector(Cu.sub(t),h))}t.add(Mc)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xc.copy(n.boundingSphere),xc.applyMatrix4(r),zs.copy(e.ray).recast(e.near),!(xc.containsPoint(zs.origin)===!1&&(zs.intersectSphere(xc,gp)===null||zs.origin.distanceToSquared(gp)>(e.far-e.near)**2))&&(mp.copy(r).invert(),zs.copy(e.ray).applyMatrix4(mp),!(n.boundingBox!==null&&zs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,zs)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,b=d.length;m<b;m++){let g=d[m],p=a[g.materialIndex],v=Math.max(g.start,f.start),_=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let x=v,w=_;x<w;x+=3){let E=o.getX(x),R=o.getX(x+1),I=o.getX(x+2);s=Tc(this,p,e,n,l,h,u,E,R,I),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),b=Math.min(o.count,f.start+f.count);for(let g=m,p=b;g<p;g+=3){let v=o.getX(g),_=o.getX(g+1),x=o.getX(g+2);s=Tc(this,a,e,n,l,h,u,v,_,x),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,b=d.length;m<b;m++){let g=d[m],p=a[g.materialIndex],v=Math.max(g.start,f.start),_=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let x=v,w=_;x<w;x+=3){let E=x,R=x+1,I=x+2;s=Tc(this,p,e,n,l,h,u,E,R,I),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),b=Math.min(c.count,f.start+f.count);for(let g=m,p=b;g<p;g+=3){let v=g,_=g+1,x=g+2;s=Tc(this,a,e,n,l,h,u,v,_,x),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};Zr=class i extends Mt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,s,a,2),m("x","z","y",1,-1,e,n,-t,s,a,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new nt(l,3)),this.setAttribute("normal",new nt(h,3)),this.setAttribute("uv",new nt(u,2));function m(b,g,p,v,_,x,w,E,R,I,S){let y=x/R,C=w/I,D=x/2,F=w/2,H=E/2,X=R+1,W=I+1,ee=0,V=0,Z=new P;for(let le=0;le<W;le++){let Me=le*C-F;for(let Ve=0;Ve<X;Ve++){let ot=Ve*y-D;Z[b]=ot*v,Z[g]=Me*_,Z[p]=H,l.push(Z.x,Z.y,Z.z),Z[b]=0,Z[g]=0,Z[p]=E>0?1:-1,h.push(Z.x,Z.y,Z.z),u.push(Ve/R),u.push(1-le/I),ee+=1}}for(let le=0;le<I;le++)for(let Me=0;Me<R;Me++){let Ve=d+Me+X*le,ot=d+Me+X*(le+1),dt=d+(Me+1)+X*(le+1),et=d+(Me+1)+X*le;c.push(Ve,ot,et),c.push(ot,dt,et),V+=6}o.addGroup(f,V,S),f+=V,d+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};Mn={clone:sr,merge:mn},Ab=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,it=class extends vn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ab,this.fragmentShader=Rb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=sr(e.uniforms),this.uniformsGroups=Eb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Xa=class extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie,this.coordinateSystem=ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ms=new P,xp=new ye,vp=new ye,$t=class extends Xa{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ws*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(za*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ws*2*Math.atan(Math.tan(za*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ms.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ms.x,ms.y).multiplyScalar(-e/ms.z),ms.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ms.x,ms.y).multiplyScalar(-e/ms.z)}getViewSize(e,t){return this.getViewBounds(e,xp,vp),t.subVectors(vp,xp)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(za*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Hr=-90,Vr=1,Bc=class extends It{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new $t(Hr,Vr,e,t);s.layers=this.layers,this.add(s);let r=new $t(Hr,Vr,e,t);r.layers=this.layers,this.add(r);let a=new $t(Hr,Vr,e,t);a.layers=this.layers,this.add(a);let o=new $t(Hr,Vr,e,t);o.layers=this.layers,this.add(o);let c=new $t(Hr,Vr,e,t);c.layers=this.layers,this.add(c);let l=new $t(Hr,Vr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===ci)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Va)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},ja=class extends rn{constructor(e=[],t=tr,n,s,r,a,o,c,l,h){super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Hc=class extends qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ja(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Zr(5,5,5),r=new it({name:"CubemapFromEquirect",uniforms:sr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:_n,blending:Jt});r.uniforms.tEquirect.value=t;let a=new Oe(s,r),o=t.minFilter;return t.minFilter===fi&&(t.minFilter=xn),new Bc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},wt=class extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}},Cb={type:"move"},Qr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let b of e.hand.values()){let g=t.getJointPose(b,n),p=this._getHandJoint(l,b);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Cb)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new wt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},$a=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new re(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},Ya=class extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ui,this.environmentIntensity=1,this.environmentRotation=new ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},ea=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Uc,this.updateRanges=[],this.version=0,this.uuid=li()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=li()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=li()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},bn=new P,ta=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)bn.fromBufferAttribute(this,t),bn.applyMatrix4(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bn.fromBufferAttribute(this,t),bn.applyNormalMatrix(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bn.fromBufferAttribute(this,t),bn.transformDirection(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=oi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ft(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=oi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=oi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=oi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=oi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),s=ft(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),s=ft(s,this.array),r=ft(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Pt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},_p=new P,yp=new at,Mp=new at,Pb=new P,Sp=new Ie,wc=new P,Pu=new Rn,Tp=new Ie,Iu=new bs,qs=class extends Oe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=zu,this.bindMatrix=new Ie,this.bindMatrixInverse=new Ie,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Bn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,wc),this.boundingBox.expandByPoint(wc)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Rn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,wc),this.boundingSphere.expandByPoint(wc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Pu.copy(this.boundingSphere),Pu.applyMatrix4(s),e.ray.intersectsSphere(Pu)!==!1&&(Tp.copy(s).invert(),Iu.copy(e.ray).applyMatrix4(Tp),!(this.boundingBox!==null&&Iu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Iu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new at,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===zu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===sm?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;yp.fromBufferAttribute(s.attributes.skinIndex,e),Mp.fromBufferAttribute(s.attributes.skinWeight,e),_p.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=Mp.getComponent(r);if(a!==0){let o=yp.getComponent(r);Sp.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Pb.copy(_p).applyMatrix4(Sp),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},na=class extends It{constructor(){super(),this.isBone=!0,this.type="Bone"}},qi=class extends rn{constructor(e=null,t=1,n=1,s,r,a,o,c,l=Yt,h=Yt,u,d){super(null,a,o,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},wp=new Ie,Ib=new Ie,Ka=class i{constructor(e=[],t=[]){this.uuid=li(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ie)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ie;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:Ib;wp.multiplyMatrices(o,t[r]),wp.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new qi(t,e,e,yn,Kn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new na),this.bones.push(a),this.boneInverses.push(new Ie().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},di=class extends Pt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Gr=new Ie,Ep=new Ie,Ec=[],Ap=new Bn,kb=new Ie,La=new Oe,Da=new Rn,Xs=class extends Oe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new di(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,kb)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Bn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Gr),Ap.copy(e.boundingBox).applyMatrix4(Gr),this.boundingBox.union(Ap)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Rn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Gr),Da.copy(e.boundingSphere).applyMatrix4(Gr),this.boundingSphere.union(Da)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(La.geometry=this.geometry,La.material=this.material,La.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Da.copy(this.boundingSphere),Da.applyMatrix4(n),e.ray.intersectsSphere(Da)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Gr),Ep.multiplyMatrices(n,Gr),La.matrixWorld=Ep,La.raycast(e,Ec);for(let a=0,o=Ec.length;a<o;a++){let c=Ec[a];c.instanceId=r,c.object=this,t.push(c)}Ec.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new di(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new qi(new Float32Array(s*this.count),s,this.count,yl,Kn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ku=new P,Lb=new P,Db=new qe,bi=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=ku.subVectors(n,t).cross(Lb.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(ku),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Db.getNormalMatrix(e),s=this.coplanarPoint(ku).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Fs=new Rn,Nb=new ye(.5,.5),Ac=new P,ia=class{constructor(e=new bi,t=new bi,n=new bi,s=new bi,r=new bi,a=new bi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ci,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],f=r[7],m=r[8],b=r[9],g=r[10],p=r[11],v=r[12],_=r[13],x=r[14],w=r[15];if(s[0].setComponents(l-a,f-h,p-m,w-v).normalize(),s[1].setComponents(l+a,f+h,p+m,w+v).normalize(),s[2].setComponents(l+o,f+u,p+b,w+_).normalize(),s[3].setComponents(l-o,f-u,p-b,w-_).normalize(),n)s[4].setComponents(c,d,g,x).normalize(),s[5].setComponents(l-c,f-d,p-g,w-x).normalize();else if(s[4].setComponents(l-c,f-d,p-g,w-x).normalize(),t===ci)s[5].setComponents(l+c,f+d,p+g,w+x).normalize();else if(t===Va)s[5].setComponents(c,d,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fs)}intersectsSprite(e){Fs.center.set(0,0,0);let t=Nb.distanceTo(e.center);return Fs.radius=.7071067811865476+t,Fs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Ac.x=s.normal.x>0?e.max.x:e.min.x,Ac.y=s.normal.y>0?e.max.y:e.min.y,Ac.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ac)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Xi=class extends vn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Vc=new P,Gc=new P,Rp=new Ie,Na=new bs,Rc=new Rn,Lu=new P,Cp=new P,yi=class extends It{constructor(e=new Mt,t=new Xi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Vc.fromBufferAttribute(t,s-1),Gc.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Vc.distanceTo(Gc);e.setAttribute("lineDistance",new nt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Rc.copy(n.boundingSphere),Rc.applyMatrix4(s),Rc.radius+=r,e.ray.intersectsSphere(Rc)===!1)return;Rp.copy(s).invert(),Na.copy(e.ray).applyMatrix4(Rp);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let b=f,g=m-1;b<g;b+=l){let p=h.getX(b),v=h.getX(b+1),_=Cc(this,e,Na,c,p,v,b);_&&t.push(_)}if(this.isLineLoop){let b=h.getX(m-1),g=h.getX(f),p=Cc(this,e,Na,c,b,g,m-1);p&&t.push(p)}}else{let f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let b=f,g=m-1;b<g;b+=l){let p=Cc(this,e,Na,c,b,b+1,b);p&&t.push(p)}if(this.isLineLoop){let b=Cc(this,e,Na,c,m-1,f,m-1);b&&t.push(b)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};Pp=new P,Ip=new P,Ja=class extends yi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Pp.fromBufferAttribute(t,s),Ip.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Pp.distanceTo(Ip);e.setAttribute("lineDistance",new nt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Za=class extends yi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},sa=class extends vn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},kp=new Ie,Fu=new bs,Pc=new Rn,Ic=new P,Qa=class extends It{constructor(e=new Mt,t=new sa){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Pc.copy(n.boundingSphere),Pc.applyMatrix4(s),Pc.radius+=r,e.ray.intersectsSphere(Pc)===!1)return;kp.copy(s).invert(),Fu.copy(e.ray).applyMatrix4(kp);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let m=d,b=f;m<b;m++){let g=l.getX(m);Ic.fromBufferAttribute(u,g),Lp(Ic,g,c,s,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let m=d,b=f;m<b;m++)Ic.fromBufferAttribute(u,m),Lp(Ic,m,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};js=class extends rn{constructor(e,t,n=ys,s,r,a,o=Yt,c=Yt,l,h=jr,u=1){if(h!==jr&&h!==Ss)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Kr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},eo=class extends rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},xs=class i extends Mt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],c=[],l=new P,h=new ye;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new nt(a,3)),this.setAttribute("normal",new nt(o,3)),this.setAttribute("uv",new nt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},vs=class i extends Mt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],m=0,b=[],g=n/2,p=0;v(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new nt(u,3)),this.setAttribute("normal",new nt(d,3)),this.setAttribute("uv",new nt(f,2));function v(){let x=new P,w=new P,E=0,R=(t-e)/n;for(let I=0;I<=r;I++){let S=[],y=I/r,C=y*(t-e)+e;for(let D=0;D<=s;D++){let F=D/s,H=F*c+o,X=Math.sin(H),W=Math.cos(H);w.x=C*X,w.y=-y*n+g,w.z=C*W,u.push(w.x,w.y,w.z),x.set(X,R,W).normalize(),d.push(x.x,x.y,x.z),f.push(F,1-y),S.push(m++)}b.push(S)}for(let I=0;I<s;I++)for(let S=0;S<r;S++){let y=b[S][I],C=b[S+1][I],D=b[S+1][I+1],F=b[S][I+1];(e>0||S!==0)&&(h.push(y,C,F),E+=3),(t>0||S!==r-1)&&(h.push(C,D,F),E+=3)}l.addGroup(p,E,0),p+=E}function _(x){let w=m,E=new ye,R=new P,I=0,S=x===!0?e:t,y=x===!0?1:-1;for(let D=1;D<=s;D++)u.push(0,g*y,0),d.push(0,y,0),f.push(.5,.5),m++;let C=m;for(let D=0;D<=s;D++){let H=D/s*c+o,X=Math.cos(H),W=Math.sin(H);R.x=S*W,R.y=g*y,R.z=S*X,u.push(R.x,R.y,R.z),d.push(0,y,0),E.x=X*.5+.5,E.y=W*.5*y+.5,f.push(E.x,E.y),m++}for(let D=0;D<s;D++){let F=w+D,H=C+D;x===!0?h.push(H,H+1,F):h.push(H+1,H,F),I+=3}l.addGroup(p,I,x===!0?1:2),p+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},to=class i extends vs{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Wc=class i extends Mt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new nt(r,3)),this.setAttribute("normal",new nt(r.slice(),3)),this.setAttribute("uv",new nt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let _=new P,x=new P,w=new P;for(let E=0;E<t.length;E+=3)f(t[E+0],_),f(t[E+1],x),f(t[E+2],w),c(_,x,w,v)}function c(v,_,x,w){let E=w+1,R=[];for(let I=0;I<=E;I++){R[I]=[];let S=v.clone().lerp(x,I/E),y=_.clone().lerp(x,I/E),C=E-I;for(let D=0;D<=C;D++)D===0&&I===E?R[I][D]=S:R[I][D]=S.clone().lerp(y,D/C)}for(let I=0;I<E;I++)for(let S=0;S<2*(E-I)-1;S++){let y=Math.floor(S/2);S%2===0?(d(R[I][y+1]),d(R[I+1][y]),d(R[I][y])):(d(R[I][y+1]),d(R[I+1][y+1]),d(R[I+1][y]))}}function l(v){let _=new P;for(let x=0;x<r.length;x+=3)_.x=r[x+0],_.y=r[x+1],_.z=r[x+2],_.normalize().multiplyScalar(v),r[x+0]=_.x,r[x+1]=_.y,r[x+2]=_.z}function h(){let v=new P;for(let _=0;_<r.length;_+=3){v.x=r[_+0],v.y=r[_+1],v.z=r[_+2];let x=g(v)/2/Math.PI+.5,w=p(v)/Math.PI+.5;a.push(x,1-w)}m(),u()}function u(){for(let v=0;v<a.length;v+=6){let _=a[v+0],x=a[v+2],w=a[v+4],E=Math.max(_,x,w),R=Math.min(_,x,w);E>.9&&R<.1&&(_<.2&&(a[v+0]+=1),x<.2&&(a[v+2]+=1),w<.2&&(a[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function f(v,_){let x=v*3;_.x=e[x+0],_.y=e[x+1],_.z=e[x+2]}function m(){let v=new P,_=new P,x=new P,w=new P,E=new ye,R=new ye,I=new ye;for(let S=0,y=0;S<r.length;S+=9,y+=6){v.set(r[S+0],r[S+1],r[S+2]),_.set(r[S+3],r[S+4],r[S+5]),x.set(r[S+6],r[S+7],r[S+8]),E.set(a[y+0],a[y+1]),R.set(a[y+2],a[y+3]),I.set(a[y+4],a[y+5]),w.copy(v).add(_).add(x).divideScalar(3);let C=g(w);b(E,y+0,v,C),b(R,y+2,_,C),b(I,y+4,x,C)}}function b(v,_,x,w){w<0&&v.x===1&&(a[_]=v.x-1),x.x===0&&x.z===0&&(a[_]=w/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},$s=class i extends Wc{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Hn=class i extends Mt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=e/o,d=t/c,f=[],m=[],b=[],g=[];for(let p=0;p<h;p++){let v=p*d-a;for(let _=0;_<l;_++){let x=_*u-r;m.push(x,-v,0),b.push(0,0,1),g.push(_/o),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<o;v++){let _=v+l*p,x=v+l*(p+1),w=v+1+l*(p+1),E=v+1+l*p;f.push(_,x,E),f.push(x,w,E)}this.setIndex(f),this.setAttribute("position",new nt(m,3)),this.setAttribute("normal",new nt(b,3)),this.setAttribute("uv",new nt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},_s=class i extends Mt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],c=[],l=[],h=[],u=e,d=(t-e)/s,f=new P,m=new ye;for(let b=0;b<=s;b++){for(let g=0;g<=n;g++){let p=r+g/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,h.push(m.x,m.y)}u+=d}for(let b=0;b<s;b++){let g=b*(n+1);for(let p=0;p<n;p++){let v=p+g,_=v,x=v+n+1,w=v+n+2,E=v+1;o.push(_,x,E),o.push(x,w,E)}}this.setIndex(o),this.setAttribute("position",new nt(c,3)),this.setAttribute("normal",new nt(l,3)),this.setAttribute("uv",new nt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Ys=class i extends Mt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new P,d=new P,f=[],m=[],b=[],g=[];for(let p=0;p<=n;p++){let v=[],_=p/n,x=0;p===0&&a===0?x=.5/t:p===n&&c===Math.PI&&(x=-.5/t);for(let w=0;w<=t;w++){let E=w/t;u.x=-e*Math.cos(s+E*r)*Math.sin(a+_*o),u.y=e*Math.cos(a+_*o),u.z=e*Math.sin(s+E*r)*Math.sin(a+_*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),b.push(d.x,d.y,d.z),g.push(E+x,1-_),v.push(l++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){let _=h[p][v+1],x=h[p][v],w=h[p+1][v],E=h[p+1][v+1];(p!==0||a>0)&&f.push(_,x,E),(p!==n-1||c<Math.PI)&&f.push(x,w,E)}this.setIndex(f),this.setAttribute("position",new nt(m,3)),this.setAttribute("normal",new nt(b,3)),this.setAttribute("uv",new nt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Ks=class i extends Mt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],c=[],l=[],h=new P,u=new P,d=new P;for(let f=0;f<=n;f++)for(let m=0;m<=s;m++){let b=m/s*r,g=f/n*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(b),u.y=(e+t*Math.cos(g))*Math.sin(b),u.z=t*Math.sin(g),o.push(u.x,u.y,u.z),h.x=e*Math.cos(b),h.y=e*Math.sin(b),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(m/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=s;m++){let b=(s+1)*f+m-1,g=(s+1)*(f-1)+m-1,p=(s+1)*(f-1)+m,v=(s+1)*f+m;a.push(b,g,v),a.push(g,p,v)}this.setIndex(a),this.setAttribute("position",new nt(o,3)),this.setAttribute("normal",new nt(c,3)),this.setAttribute("uv",new nt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},no=class extends it{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Qt=class extends vn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nh,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Cn=class extends Qt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ye(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ke(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},io=class extends vn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nh,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},qc=class extends vn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=om,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Xc=class extends vn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};ji=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break t}a=t.length;break n}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},jc=class extends ji{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Os,endingEnd:Os}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Bs:r=e,o=2*t-n;break;case Oa:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Bs:a=e,c=2*n-t;break;case Oa:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(s-t),b=m*m,g=b*m,p=-d*g+2*d*b-d*m,v=(1+d)*g+(-1.5-2*d)*b+(-.5+d)*m+1,_=(-1-f)*g+(1.5+f)*b+.5*m,x=f*g-f*b;for(let w=0;w!==o;++w)r[w]=p*a[h+w]+v*a[l+w]+_*a[c+w]+x*a[u+w];return r}},so=class extends ji{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},$c=class extends ji{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Pn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=kc(t,this.TimeBufferType),this.values=kc(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:kc(e.times,Array),values:kc(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new $c(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new so(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new jc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Vs:t=this.InterpolantFactoryMethodDiscrete;break;case Gs:t=this.InterpolantFactoryMethodLinear;break;case Lc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Vs;case this.InterpolantFactoryMethodLinear:return Gs;case this.InterpolantFactoryMethodSmooth:return Lc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&Ub(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Lc,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let u=o*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){let b=t[u+m];if(b!==t[d+m]||b!==t[f+m]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Pn.prototype.ValueTypeName="";Pn.prototype.TimeBufferType=Float32Array;Pn.prototype.ValueBufferType=Float32Array;Pn.prototype.DefaultInterpolation=Gs;$i=class extends Pn{constructor(e,t,n){super(e,t,n)}};$i.prototype.ValueTypeName="bool";$i.prototype.ValueBufferType=Array;$i.prototype.DefaultInterpolation=Vs;$i.prototype.InterpolantFactoryMethodLinear=void 0;$i.prototype.InterpolantFactoryMethodSmooth=void 0;ro=class extends Pn{constructor(e,t,n,s){super(e,t,n,s)}};ro.prototype.ValueTypeName="color";Mi=class extends Pn{constructor(e,t,n,s){super(e,t,n,s)}};Mi.prototype.ValueTypeName="number";Yc=class extends ji{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)ln.slerpFlat(r,0,a,l-o,a,l,c);return r}},Si=class extends Pn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Yc(this.times,this.values,this.getValueSize(),e)}};Si.prototype.ValueTypeName="quaternion";Si.prototype.InterpolantFactoryMethodSmooth=void 0;Yi=class extends Pn{constructor(e,t,n){super(e,t,n)}};Yi.prototype.ValueTypeName="string";Yi.prototype.ValueBufferType=Array;Yi.prototype.DefaultInterpolation=Vs;Yi.prototype.InterpolantFactoryMethodLinear=void 0;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;Ti=class extends Pn{constructor(e,t,n,s){super(e,t,n,s)}};Ti.prototype.ValueTypeName="vector";Js=class{constructor(e="",t=-1,n=[],s=th){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=li(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Ob(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(Pn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let h=zb(c);c=Dp(c,1,h),l=Dp(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new Mi(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(l)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,f,m,b){if(f.length!==0){let g=[],p=[];_m(f,g,p,m),g.length!==0&&b.push(new u(d,g,p))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let b=0;b<d[m].morphTargets.length;b++)f[d[m].morphTargets[b]]=-1;for(let b in f){let g=[],p=[];for(let v=0;v!==d[m].morphTargets.length;++v){let _=d[m];g.push(_.time),p.push(_.morphTarget===b?1:0)}s.push(new Mi(".morphTargetInfluence["+b+"]",g,p))}c=f.length*a}else{let f=".bones["+t[u].name+"]";n(Ti,f+".position",d,"pos",s),n(Si,f+".quaternion",d,"rot",s),n(Ti,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};vi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Kc=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],m=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},ym=new Kc,wi=class{constructor(e){this.manager=e!==void 0?e:ym,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};wi.DEFAULT_MATERIAL_NAME="__DEFAULT";Vi={},Ou=class extends Error{constructor(e,t){super(e),this.response=t}},ra=class extends wi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=vi.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Vi[e]!==void 0){Vi[e].push({onLoad:t,onProgress:n,onError:s});return}Vi[e]=[],Vi[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=Vi[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0,b=0,g=new ReadableStream({start(p){v();function v(){u.read().then(({done:_,value:x})=>{if(_)p.close();else{b+=x.byteLength;let w=new ProgressEvent("progress",{lengthComputable:m,loaded:b,total:f});for(let E=0,R=h.length;E<R;E++){let I=h[E];I.onProgress&&I.onProgress(w)}p.enqueue(x),v()}},_=>{p.error(_)})}}});return new Response(g)}else throw new Ou(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(m=>f.decode(m))}}}).then(l=>{vi.add(`file:${e}`,l);let h=Vi[e];delete Vi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=Vi[e];if(h===void 0)throw this.manager.itemError(e),l;delete Vi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},Wr=new WeakMap,Jc=class extends wi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=vi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=Wr.get(a);u===void 0&&(u=[],Wr.set(a,u)),u.push({onLoad:t,onError:s})}return a}let o=$r("img");function c(){h(),t&&t(this);let u=Wr.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}Wr.delete(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),vi.remove(`image:${e}`);let d=Wr.get(this)||[];for(let f=0;f<d.length;f++){let m=d[f];m.onError&&m.onError(u)}Wr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),vi.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}},ao=class extends wi{constructor(e){super(e)}load(e,t,n,s){let r=new rn,a=new Jc(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Zs=class extends It{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},oo=class extends Zs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.groundColor=new re(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Du=new Ie,Np=new P,Up=new P,co=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ye(512,512),this.mapType=Gn,this.map=null,this.mapPass=null,this.matrix=new Ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ia,this._frameExtents=new ye(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Np.setFromMatrixPosition(e.matrixWorld),t.position.copy(Np),Up.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Up),t.updateMatrixWorld(),Du.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Du,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Du)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Bu=class extends co{constructor(){super(new $t(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Ws*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},lo=class extends Zs{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Bu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},zp=new Ie,Ua=new P,Nu=new P,Hu=class extends co{constructor(){super(new $t(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ye(4,2),this._viewportCount=6,this._viewports=[new at(2,1,1,1),new at(0,1,1,1),new at(3,1,1,1),new at(1,1,1,1),new at(3,0,1,1),new at(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ua.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ua),Nu.copy(n.position),Nu.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Nu),n.updateMatrixWorld(),s.makeTranslation(-Ua.x,-Ua.y,-Ua.z),zp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zp,n.coordinateSystem,n.reversedDepth)}},Vn=class extends Zs{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Hu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Ki=class extends Xa{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Vu=class extends co{constructor(){super(new Ki(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Qs=class extends Zs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new Vu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Ji=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Uu=new WeakMap,ho=class extends wi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=vi.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{if(Uu.has(a)===!0)s&&s(Uu.get(a)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(l),r.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return vi.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),Uu.set(c,l),vi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});vi.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},Zc=class extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},uo=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}},Qc=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,a;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,s=this.valueSize,r=e*s+s,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==s;++o)n[r+o]=n[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(n,r,0,o,s)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let c=t*this._origIndex;this._mixBufferRegion(n,s,c,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){o.setValue(n,s);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,a=s;r!==a;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,s){ln.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){let a=this._workIndex*r;ln.multiplyQuaternionsFlat(e,a,e,t,e,n),ln.slerpFlat(e,t,e,t,e,a,s)}_lerp(e,t,n,s,r){let a=1-s;for(let o=0;o!==r;++o){let c=t+o;e[c]=e[c]*a+e[n+o]*s}}_lerpAdditive(e,t,n,s,r){for(let a=0;a!==r;++a){let o=t+a;e[o]=e[o]+e[n+a]*s}}},fd="\\[\\]\\.:\\/",Bb=new RegExp("["+fd+"]","g"),pd="[^"+fd+"]",Hb="[^"+fd.replace("\\.","")+"]",Vb=/((?:WC+[\/:])*)/.source.replace("WC",pd),Gb=/(WCOD+)?/.source.replace("WCOD",Hb),Wb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",pd),qb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",pd),Xb=new RegExp("^"+Vb+Gb+Wb+qb+"$"),jb=["material","materials","bones","map"],Gu=class{constructor(e,t,n){let s=n||bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},bt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Bb,"")}static parseTrackName(e){let t=Xb.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);jb.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};bt.Composite=Gu;bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};bt.prototype.GetterByBindingType=[bt.prototype._getValue_direct,bt.prototype._getValue_array,bt.prototype._getValue_arrayElement,bt.prototype._getValue_toArray];bt.prototype.SetterByBindingTypeAndVersioning=[[bt.prototype._setValue_direct,bt.prototype._setValue_direct_setNeedsUpdate,bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_array,bt.prototype._setValue_array_setNeedsUpdate,bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_arrayElement,bt.prototype._setValue_arrayElement_setNeedsUpdate,bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_fromArray,bt.prototype._setValue_fromArray_setNeedsUpdate,bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];el=class{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;let r=t.tracks,a=r.length,o=new Array(a),c={endingStart:Os,endingEnd:Os};for(let l=0;l!==a;++l){let h=r[l].createInterpolant(null);o[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=eh,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let s=this._clip.duration,r=e._clip.duration,a=r/s,o=s/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let s=this._mixer,r=s.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=s._lendControlInterpolant(),this._timeScaleInterpolant=o);let c=o.parameterPositions,l=o.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/a,l[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case am:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(a),l[h].accumulateAdditive(o);break;case th:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(a),l[h].accumulate(s,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,s=this.time+e,r=this._loopCount,a=n===rm;if(e===0)return r===-1?s:a&&(r&1)===1?t-s:s;if(n===Ql){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),s>=t||s<0){let o=Math.floor(s/t);s-=t*o,r+=Math.abs(o);let c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=s;if(a&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){let s=this._interpolantSettings;n?(s.endingStart=Bs,s.endingEnd=Bs):(e?s.endingStart=this.zeroSlopeAtStart?Bs:Os:s.endingStart=Oa,t?s.endingEnd=this.zeroSlopeAtEnd?Bs:Os:s.endingEnd=Oa)}_scheduleFading(e,t,n){let s=this._mixer,r=s.time,a=this._weightInterpolant;a===null&&(a=s._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,c=a.sampleValues;return o[0]=r,c[0]=t,o[1]=r+e,c[1]=n,this}},$b=new Float32Array(1),fo=class extends _i{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,a=e._propertyBindings,o=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName,h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==r;++u){let d=s[u],f=d.name,m=h[f];if(m!==void 0)++m.referenceCount,a[u]=m;else{if(m=a[u],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,c,f));continue}let b=t&&t._propertyBindings[u].binding.parsedPath;m=new Qc(bt.create(n,f,b),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,c,f),a[u]=m}o[u].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let s=this._actions,r=this._actionsByClip,a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=s.length,s.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,a=this._actionsByClip,o=a[r],c=o.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;let u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],c.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let s=this._bindingsByRootAndName,r=this._bindings,a=s[t];a===void 0&&(a={},s[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[s],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[s]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new so(new Float32Array(2),new Float32Array(2),1,$b),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let s=t||this._root,r=s.uuid,a=typeof e=="string"?Js.findByName(s,e):e,o=a!==null?a.uuid:e,c=this._actionsByClip[o],l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=th),c!==void 0){let u=c.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;let h=new el(this,a,t,n);return this._bindAction(h,l),this._addInactiveAction(h,o,r),h}existingAction(e,t){let n=t||this._root,s=n.uuid,r=typeof e=="string"?Js.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[s]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(s,e,r,a);let o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){let a=r.knownActions;for(let o=0,c=a.length;o!==c;++o){let l=a[o];this._deactivateAction(l);let h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete s[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(let a in r){let o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}},Fp=new Ie,po=class{constructor(e,t,n=0,s=1/0){this.ray=new bs(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Jr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Fp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Fp),this}intersectObject(e,t=!0,n=[]){return Wu(e,this,n,t),n.sort(Op),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Wu(e[s],this,n,t);return n.sort(Op),n}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180")});function qm(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Jb(i){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],b=u[f];b.start<=m.start+m.count+1?m.count=Math.max(m.count,b.start+b.count-m.start):(++d,u[d]=b)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let b=u[f];i.bufferSubData(l,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}function k_(i,e,t,n,s,r,a){let o=new re(0),c=r===!0?0:1,l,h,u=null,d=0,f=null;function m(_){let x=_.isScene===!0?_.background:null;return x&&x.isTexture&&(x=(_.backgroundBlurriness>0?t:e).get(x)),x}function b(_){let x=!1,w=m(_);w===null?p(o,c):w&&w.isColor&&(p(w,1),x=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(_,x){let w=m(x);w&&(w.isCubeTexture||w.mapping===bo)?(h===void 0&&(h=new Oe(new Zr(1,1,1),new it({name:"BackgroundCubeMaterial",uniforms:sr(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,R,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),rr.copy(x.backgroundRotation),rr.x*=-1,rr.y*=-1,rr.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(rr.y*=-1,rr.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(I_.makeRotationFromEuler(rr)),h.material.toneMapped=je.getTransfer(w.colorSpace)!==ct,(u!==w||d!==w.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=w,d=w.version,f=i.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new Oe(new Hn(2,2),new it({name:"BackgroundMaterial",uniforms:sr(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=je.getTransfer(w.colorSpace)!==ct,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||d!==w.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=w,d=w.version,f=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function p(_,x){_.getRGB(ih,dd(i)),n.buffers.color.setClear(ih.r,ih.g,ih.b,x,a)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,x=1){o.set(_),c=x,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,p(o,c)},render:b,addToRenderList:g,dispose:v}}function L_(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(y,C,D,F,H){let X=!1,W=u(F,D,C);r!==W&&(r=W,l(r.object)),X=f(y,F,D,H),X&&m(y,F,D,H),H!==null&&e.update(H,i.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,x(y,C,D,F),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function u(y,C,D){let F=D.wireframe===!0,H=n[y.id];H===void 0&&(H={},n[y.id]=H);let X=H[C.id];X===void 0&&(X={},H[C.id]=X);let W=X[F];return W===void 0&&(W=d(c()),X[F]=W),W}function d(y){let C=[],D=[],F=[];for(let H=0;H<t;H++)C[H]=0,D[H]=0,F[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:D,attributeDivisors:F,object:y,attributes:{},index:null}}function f(y,C,D,F){let H=r.attributes,X=C.attributes,W=0,ee=D.getAttributes();for(let V in ee)if(ee[V].location>=0){let le=H[V],Me=X[V];if(Me===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(Me=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(Me=y.instanceColor)),le===void 0||le.attribute!==Me||Me&&le.data!==Me.data)return!0;W++}return r.attributesNum!==W||r.index!==F}function m(y,C,D,F){let H={},X=C.attributes,W=0,ee=D.getAttributes();for(let V in ee)if(ee[V].location>=0){let le=X[V];le===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(le=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(le=y.instanceColor));let Me={};Me.attribute=le,le&&le.data&&(Me.data=le.data),H[V]=Me,W++}r.attributes=H,r.attributesNum=W,r.index=F}function b(){let y=r.newAttributes;for(let C=0,D=y.length;C<D;C++)y[C]=0}function g(y){p(y,0)}function p(y,C){let D=r.newAttributes,F=r.enabledAttributes,H=r.attributeDivisors;D[y]=1,F[y]===0&&(i.enableVertexAttribArray(y),F[y]=1),H[y]!==C&&(i.vertexAttribDivisor(y,C),H[y]=C)}function v(){let y=r.newAttributes,C=r.enabledAttributes;for(let D=0,F=C.length;D<F;D++)C[D]!==y[D]&&(i.disableVertexAttribArray(D),C[D]=0)}function _(y,C,D,F,H,X,W){W===!0?i.vertexAttribIPointer(y,C,D,H,X):i.vertexAttribPointer(y,C,D,F,H,X)}function x(y,C,D,F){b();let H=F.attributes,X=D.getAttributes(),W=C.defaultAttributeValues;for(let ee in X){let V=X[ee];if(V.location>=0){let Z=H[ee];if(Z===void 0&&(ee==="instanceMatrix"&&y.instanceMatrix&&(Z=y.instanceMatrix),ee==="instanceColor"&&y.instanceColor&&(Z=y.instanceColor)),Z!==void 0){let le=Z.normalized,Me=Z.itemSize,Ve=e.get(Z);if(Ve===void 0)continue;let ot=Ve.buffer,dt=Ve.type,et=Ve.bytesPerElement,j=dt===i.INT||dt===i.UNSIGNED_INT||Z.gpuType===xl;if(Z.isInterleavedBufferAttribute){let Y=Z.data,de=Y.stride,Ce=Z.offset;if(Y.isInstancedInterleavedBuffer){for(let ge=0;ge<V.locationSize;ge++)p(V.location+ge,Y.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let ge=0;ge<V.locationSize;ge++)g(V.location+ge);i.bindBuffer(i.ARRAY_BUFFER,ot);for(let ge=0;ge<V.locationSize;ge++)_(V.location+ge,Me/V.locationSize,dt,le,de*et,(Ce+Me/V.locationSize*ge)*et,j)}else{if(Z.isInstancedBufferAttribute){for(let Y=0;Y<V.locationSize;Y++)p(V.location+Y,Z.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Y=0;Y<V.locationSize;Y++)g(V.location+Y);i.bindBuffer(i.ARRAY_BUFFER,ot);for(let Y=0;Y<V.locationSize;Y++)_(V.location+Y,Me/V.locationSize,dt,le,Me*et,Me/V.locationSize*Y*et,j)}}else if(W!==void 0){let le=W[ee];if(le!==void 0)switch(le.length){case 2:i.vertexAttrib2fv(V.location,le);break;case 3:i.vertexAttrib3fv(V.location,le);break;case 4:i.vertexAttrib4fv(V.location,le);break;default:i.vertexAttrib1fv(V.location,le)}}}}v()}function w(){I();for(let y in n){let C=n[y];for(let D in C){let F=C[D];for(let H in F)h(F[H].object),delete F[H];delete C[D]}delete n[y]}}function E(y){if(n[y.id]===void 0)return;let C=n[y.id];for(let D in C){let F=C[D];for(let H in F)h(F[H].object),delete F[H];delete C[D]}delete n[y.id]}function R(y){for(let C in n){let D=n[C];if(D[y.id]===void 0)continue;let F=D[y.id];for(let H in F)h(F[H].object),delete F[H];delete D[y.id]}}function I(){S(),a=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:S,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfProgram:R,initAttributes:b,enableAttribute:g,disableUnusedAttributes:v}}function D_(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function a(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function o(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];t.update(f,n,1)}function c(l,h,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<l.length;m++)a(l[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let m=0;for(let b=0;b<u;b++)m+=h[b]*d[b];t.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function N_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==yn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let I=R===un&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Gn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Kn&&!I)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=m>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:b,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:w,maxSamples:E}}function U_(i){let e=this,t=null,n=0,s=!1,r=!1,a=new bi,o=new qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,b=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):l();else{let v=r?0:n,_=v*4,x=p.clippingState||null;c.value=x,x=h(m,d,_,f);for(let w=0;w!==_;++w)x[w]=t[w];p.clippingState=x,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,m){let b=u!==null?u.length:0,g=null;if(b!==0){if(g=c.value,m!==!0||g===null){let p=f+b*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let _=0,x=f;_!==b;++_,x+=4)a.copy(u[_]).applyMatrix4(v,o),a.normal.toArray(g,x),g[x+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,g}}function z_(i){let e=new WeakMap;function t(a,o){return o===ml?a.mapping=tr:o===gl&&(a.mapping=nr),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===ml||o===gl)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new Hc(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}function O_(i){let e=[],t=[],n=[],s=i,r=i-da+1+Mm.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let c=1/o;a>i-da?c=Mm[a-i+da-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,b=3,g=2,p=1,v=new Float32Array(b*m*f),_=new Float32Array(g*m*f),x=new Float32Array(p*m*f);for(let E=0;E<f;E++){let R=E%3*2/3-1,I=E>2?0:-1,S=[R,I,0,R+2/3,I,0,R+2/3,I+1,0,R,I,0,R+2/3,I+1,0,R,I+1,0];v.set(S,b*m*E),_.set(d,g*m*E);let y=[E,E,E,E,E,E];x.set(y,p*m*E)}let w=new Mt;w.setAttribute("position",new Pt(v,b)),w.setAttribute("uv",new Pt(_,g)),w.setAttribute("faceIndex",new Pt(x,p)),e.push(w),s>da&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function wm(i,e,t){let n=new qt(i,e,t);return n.texture.mapping=bo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function sh(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function B_(i,e,t){let n=new Float32Array(cr),s=new P(0,1,0);return new it({name:"SphericalGaussianBlur",defines:{n:cr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Id(),fragmentShader:`

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
		`,blending:Jt,depthTest:!1,depthWrite:!1})}function Em(){return new it({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Id(),fragmentShader:`

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
		`,blending:Jt,depthTest:!1,depthWrite:!1})}function Am(){return new it({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Id(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jt,depthTest:!1,depthWrite:!1})}function Id(){return`

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
	`}function H_(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===ml||c===gl,h=c===tr||c===nr;if(l||h){let u=e.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new ah(i)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return l&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new ah(i)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function V_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Yr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function G_(i,e,t,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let f in d)e.update(d[f],i.ARRAY_BUFFER)}function l(u){let d=[],f=u.index,m=u.attributes.position,b=0;if(f!==null){let v=f.array;b=f.version;for(let _=0,x=v.length;_<x;_+=3){let w=v[_+0],E=v[_+1],R=v[_+2];d.push(w,E,E,R,R,w)}}else if(m!==void 0){let v=m.array;b=m.version;for(let _=0,x=v.length/3-1;_<x;_+=3){let w=_+0,E=_+1,R=_+2;d.push(w,E,E,R,R,w)}}else return;let g=new(ud(d)?qa:Wa)(d,1);g.version=b;let p=r.get(u);p&&e.remove(p),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function W_(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*a),t.update(f,n,1)}function l(d,f,m){m!==0&&(i.drawElementsInstanced(n,f,r,d*a,m),t.update(f,n,m))}function h(d,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];t.update(g,n,1)}function u(d,f,m,b){if(m===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)l(d[p]/a,f[p],b[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,b,0,m);let p=0;for(let v=0;v<m;v++)p+=f[v]*b[v];t.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function q_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function X_(i,e,t){let n=new WeakMap,s=new at;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let S=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],_=0;f===!0&&(_=1),m===!0&&(_=2),b===!0&&(_=3);let x=o.attributes.position.count*_,w=1;x>e.maxTextureSize&&(w=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let E=new Float32Array(x*w*4*u),R=new Ga(E,x,w,u);R.type=Kn,R.needsUpdate=!0;let I=_*4;for(let y=0;y<u;y++){let C=g[y],D=p[y],F=v[y],H=x*w*4*y;for(let X=0;X<C.count;X++){let W=X*I;f===!0&&(s.fromBufferAttribute(C,X),E[H+W+0]=s.x,E[H+W+1]=s.y,E[H+W+2]=s.z,E[H+W+3]=0),m===!0&&(s.fromBufferAttribute(D,X),E[H+W+4]=s.x,E[H+W+5]=s.y,E[H+W+6]=s.z,E[H+W+7]=0),b===!0&&(s.fromBufferAttribute(F,X),E[H+W+8]=s.x,E[H+W+9]=s.y,E[H+W+10]=s.z,E[H+W+11]=F.itemSize===4?s.w:1)}}d={count:u,texture:R,size:new ye(x,w)},n.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let b=0;b<l.length;b++)f+=l[b];let m=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function j_(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}function pa(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Cm[s];if(r===void 0&&(r=new Float32Array(s),Cm[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function tn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function nn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ch(i,e){let t=Pm[e];t===void 0&&(t=new Int32Array(e),Pm[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function $_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Y_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;i.uniform2fv(this.addr,e),nn(t,e)}}function K_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tn(t,e))return;i.uniform3fv(this.addr,e),nn(t,e)}}function J_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;i.uniform4fv(this.addr,e),nn(t,e)}}function Z_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;Lm.set(n),i.uniformMatrix2fv(this.addr,!1,Lm),nn(t,n)}}function Q_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;km.set(n),i.uniformMatrix3fv(this.addr,!1,km),nn(t,n)}}function ey(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;Im.set(n),i.uniformMatrix4fv(this.addr,!1,Im),nn(t,n)}}function ty(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function ny(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;i.uniform2iv(this.addr,e),nn(t,e)}}function iy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;i.uniform3iv(this.addr,e),nn(t,e)}}function sy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;i.uniform4iv(this.addr,e),nn(t,e)}}function ry(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function ay(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;i.uniform2uiv(this.addr,e),nn(t,e)}}function oy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;i.uniform3uiv(this.addr,e),nn(t,e)}}function cy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;i.uniform4uiv(this.addr,e),nn(t,e)}}function ly(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Rm.compareFunction=od,r=Rm):r=Xm,t.setTexture2D(e||r,s)}function hy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||$m,s)}function uy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Ym,s)}function dy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||jm,s)}function fy(i){switch(i){case 5126:return $_;case 35664:return Y_;case 35665:return K_;case 35666:return J_;case 35674:return Z_;case 35675:return Q_;case 35676:return ey;case 5124:case 35670:return ty;case 35667:case 35671:return ny;case 35668:case 35672:return iy;case 35669:case 35673:return sy;case 5125:return ry;case 36294:return ay;case 36295:return oy;case 36296:return cy;case 35678:case 36198:case 36298:case 36306:case 35682:return ly;case 35679:case 36299:case 36307:return hy;case 35680:case 36300:case 36308:case 36293:return uy;case 36289:case 36303:case 36311:case 36292:return dy}}function py(i,e){i.uniform1fv(this.addr,e)}function my(i,e){let t=pa(e,this.size,2);i.uniform2fv(this.addr,t)}function gy(i,e){let t=pa(e,this.size,3);i.uniform3fv(this.addr,t)}function by(i,e){let t=pa(e,this.size,4);i.uniform4fv(this.addr,t)}function xy(i,e){let t=pa(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function vy(i,e){let t=pa(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function _y(i,e){let t=pa(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function yy(i,e){i.uniform1iv(this.addr,e)}function My(i,e){i.uniform2iv(this.addr,e)}function Sy(i,e){i.uniform3iv(this.addr,e)}function Ty(i,e){i.uniform4iv(this.addr,e)}function wy(i,e){i.uniform1uiv(this.addr,e)}function Ey(i,e){i.uniform2uiv(this.addr,e)}function Ay(i,e){i.uniform3uiv(this.addr,e)}function Ry(i,e){i.uniform4uiv(this.addr,e)}function Cy(i,e,t){let n=this.cache,s=e.length,r=ch(t,s);tn(n,r)||(i.uniform1iv(this.addr,r),nn(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Xm,r[a])}function Py(i,e,t){let n=this.cache,s=e.length,r=ch(t,s);tn(n,r)||(i.uniform1iv(this.addr,r),nn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||$m,r[a])}function Iy(i,e,t){let n=this.cache,s=e.length,r=ch(t,s);tn(n,r)||(i.uniform1iv(this.addr,r),nn(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Ym,r[a])}function ky(i,e,t){let n=this.cache,s=e.length,r=ch(t,s);tn(n,r)||(i.uniform1iv(this.addr,r),nn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||jm,r[a])}function Ly(i){switch(i){case 5126:return py;case 35664:return my;case 35665:return gy;case 35666:return by;case 35674:return xy;case 35675:return vy;case 35676:return _y;case 5124:case 35670:return yy;case 35667:case 35671:return My;case 35668:case 35672:return Sy;case 35669:case 35673:return Ty;case 5125:return wy;case 36294:return Ey;case 36295:return Ay;case 36296:return Ry;case 35678:case 36198:case 36298:case 36306:case 35682:return Cy;case 35679:case 36299:case 36307:return Py;case 35680:case 36300:case 36308:case 36293:return Iy;case 36289:case 36303:case 36311:case 36292:return ky}}function Dm(i,e){i.seq.push(e),i.map[e.id]=e}function Dy(i,e,t){let n=i.name,s=n.length;for(Md.lastIndex=0;;){let r=Md.exec(n),a=Md.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Dm(t,l===void 0?new Sd(o,i,e):new Td(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new wd(o),Dm(t,u)),t=u}}}function Nm(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}function zy(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Fy(i){je._getMatrix(Um,je.workingColorSpace,i);let e=`mat3( ${Um.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(i)){case Ba:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function zm(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+zy(i.getShaderSource(e),o)}else return r}function Oy(i,e){let t=Fy(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function By(i,e){let t;switch(e){case ll:t="Linear";break;case hl:t="Reinhard";break;case ul:t="Cineon";break;case oa:t="ACESFilmic";break;case fl:t="AgX";break;case pl:t="Neutral";break;case dl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Hy(){je.getLuminanceCoefficients(rh);let i=rh.x.toFixed(4),e=rh.y.toFixed(4),t=rh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Vy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(To).join(`
`)}function Gy(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Wy(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function To(i){return i!==""}function Fm(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Om(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function Ed(i){return i.replace(qy,jy)}function jy(i,e){let t=Xe[e];if(t===void 0){let n=Xy.get(e);if(n!==void 0)t=Xe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ed(t)}function Bm(i){return i.replace($y,Yy)}function Yy(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Hm(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Ky(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Xu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===tl?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ei&&(e="SHADOWMAP_TYPE_VSM"),e}function Jy(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case tr:case nr:e="ENVMAP_TYPE_CUBE";break;case bo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Zy(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case nr:e="ENVMAP_MODE_REFRACTION";break}return e}function Qy(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Yu:e="ENVMAP_BLENDING_MULTIPLY";break;case nm:e="ENVMAP_BLENDING_MIX";break;case im:e="ENVMAP_BLENDING_ADD";break}return e}function e1(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function t1(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=Ky(t),l=Jy(t),h=Zy(t),u=Qy(t),d=e1(t),f=Vy(t),m=Gy(r),b=s.createProgram(),g,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(To).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(To).join(`
`),p.length>0&&(p+=`
`)):(g=[Hm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(To).join(`
`),p=[Hm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zi?"#define TONE_MAPPING":"",t.toneMapping!==Zi?Xe.tonemapping_pars_fragment:"",t.toneMapping!==Zi?By("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,Oy("linearToOutputTexel",t.outputColorSpace),Hy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(To).join(`
`)),a=Ed(a),a=Fm(a,t),a=Om(a,t),o=Ed(o),o=Fm(o,t),o=Om(o,t),a=Bm(a),o=Bm(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===cd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=v+g+a,x=v+p+o,w=Nm(s,s.VERTEX_SHADER,_),E=Nm(s,s.FRAGMENT_SHADER,x);s.attachShader(b,w),s.attachShader(b,E),t.index0AttributeName!==void 0?s.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function R(C){if(i.debug.checkShaderErrors){let D=s.getProgramInfoLog(b)||"",F=s.getShaderInfoLog(w)||"",H=s.getShaderInfoLog(E)||"",X=D.trim(),W=F.trim(),ee=H.trim(),V=!0,Z=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,b,w,E);else{let le=zm(s,w,"vertex"),Me=zm(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+X+`
`+le+`
`+Me)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(W===""||ee==="")&&(Z=!1);Z&&(C.diagnostics={runnable:V,programLog:X,vertexShader:{log:W,prefix:g},fragmentShader:{log:ee,prefix:p}})}s.deleteShader(w),s.deleteShader(E),I=new fa(s,b),S=Wy(s,b)}let I;this.getUniforms=function(){return I===void 0&&R(this),I};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(b,Ny)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Uy++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=w,this.fragmentShader=E,this}function i1(i,e,t,n,s,r,a){let o=new Jr,c=new Ad,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(S){return l.add(S),S===0?"uv":`uv${S}`}function g(S,y,C,D,F){let H=D.fog,X=F.geometry,W=S.isMeshStandardMaterial?D.environment:null,ee=(S.isMeshStandardMaterial?t:e).get(S.envMap||W),V=ee&&ee.mapping===bo?ee.image.height:null,Z=m[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let le=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Me=le!==void 0?le.length:0,Ve=0;X.morphAttributes.position!==void 0&&(Ve=1),X.morphAttributes.normal!==void 0&&(Ve=2),X.morphAttributes.color!==void 0&&(Ve=3);let ot,dt,et,j;if(Z){let ht=Ai[Z];ot=ht.vertexShader,dt=ht.fragmentShader}else ot=S.vertexShader,dt=S.fragmentShader,c.update(S),et=c.getVertexShaderID(S),j=c.getFragmentShaderID(S);let Y=i.getRenderTarget(),de=i.state.buffers.depth.getReversed(),Ce=F.isInstancedMesh===!0,ge=F.isBatchedMesh===!0,Ye=!!S.map,Xt=!!S.matcap,k=!!ee,pt=!!S.aoMap,He=!!S.lightMap,Le=!!S.bumpMap,xe=!!S.normalMap,mt=!!S.displacementMap,ve=!!S.emissiveMap,Ge=!!S.metalnessMap,Vt=!!S.roughnessMap,At=S.anisotropy>0,A=S.clearcoat>0,M=S.dispersion>0,z=S.iridescence>0,q=S.sheen>0,K=S.transmission>0,G=At&&!!S.anisotropyMap,Se=A&&!!S.clearcoatMap,ie=A&&!!S.clearcoatNormalMap,be=A&&!!S.clearcoatRoughnessMap,Ee=z&&!!S.iridescenceMap,te=z&&!!S.iridescenceThicknessMap,he=q&&!!S.sheenColorMap,Ne=q&&!!S.sheenRoughnessMap,Ae=!!S.specularMap,oe=!!S.specularColorMap,ze=!!S.specularIntensityMap,L=K&&!!S.transmissionMap,J=K&&!!S.thicknessMap,se=!!S.gradientMap,_e=!!S.alphaMap,Q=S.alphaTest>0,$=!!S.alphaHash,we=!!S.extensions,We=Zi;S.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(We=i.toneMapping);let Tt={shaderID:Z,shaderType:S.type,shaderName:S.name,vertexShader:ot,fragmentShader:dt,defines:S.defines,customVertexShaderID:et,customFragmentShaderID:j,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:ge,batchingColor:ge&&F._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&F.instanceColor!==null,instancingMorph:Ce&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Y===null?i.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:hn,alphaToCoverage:!!S.alphaToCoverage,map:Ye,matcap:Xt,envMap:k,envMapMode:k&&ee.mapping,envMapCubeUVHeight:V,aoMap:pt,lightMap:He,bumpMap:Le,normalMap:xe,displacementMap:d&&mt,emissiveMap:ve,normalMapObjectSpace:xe&&S.normalMapType===lm,normalMapTangentSpace:xe&&S.normalMapType===nh,metalnessMap:Ge,roughnessMap:Vt,anisotropy:At,anisotropyMap:G,clearcoat:A,clearcoatMap:Se,clearcoatNormalMap:ie,clearcoatRoughnessMap:be,dispersion:M,iridescence:z,iridescenceMap:Ee,iridescenceThicknessMap:te,sheen:q,sheenColorMap:he,sheenRoughnessMap:Ne,specularMap:Ae,specularColorMap:oe,specularIntensityMap:ze,transmission:K,transmissionMap:L,thicknessMap:J,gradientMap:se,opaque:S.transparent===!1&&S.blending===Wi&&S.alphaToCoverage===!1,alphaMap:_e,alphaTest:Q,alphaHash:$,combine:S.combine,mapUv:Ye&&b(S.map.channel),aoMapUv:pt&&b(S.aoMap.channel),lightMapUv:He&&b(S.lightMap.channel),bumpMapUv:Le&&b(S.bumpMap.channel),normalMapUv:xe&&b(S.normalMap.channel),displacementMapUv:mt&&b(S.displacementMap.channel),emissiveMapUv:ve&&b(S.emissiveMap.channel),metalnessMapUv:Ge&&b(S.metalnessMap.channel),roughnessMapUv:Vt&&b(S.roughnessMap.channel),anisotropyMapUv:G&&b(S.anisotropyMap.channel),clearcoatMapUv:Se&&b(S.clearcoatMap.channel),clearcoatNormalMapUv:ie&&b(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&b(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&b(S.iridescenceMap.channel),iridescenceThicknessMapUv:te&&b(S.iridescenceThicknessMap.channel),sheenColorMapUv:he&&b(S.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&b(S.sheenRoughnessMap.channel),specularMapUv:Ae&&b(S.specularMap.channel),specularColorMapUv:oe&&b(S.specularColorMap.channel),specularIntensityMapUv:ze&&b(S.specularIntensityMap.channel),transmissionMapUv:L&&b(S.transmissionMap.channel),thicknessMapUv:J&&b(S.thicknessMap.channel),alphaMapUv:_e&&b(S.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(xe||At),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!X.attributes.uv&&(Ye||_e),fog:!!H,useFog:S.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:de,skinning:F.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:Ve,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:We,decodeVideoTexture:Ye&&S.map.isVideoTexture===!0&&je.getTransfer(S.map.colorSpace)===ct,decodeVideoTextureEmissive:ve&&S.emissiveMap.isVideoTexture===!0&&je.getTransfer(S.emissiveMap.colorSpace)===ct,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Kt,flipSided:S.side===_n,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:we&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(we&&S.extensions.multiDraw===!0||ge)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Tt.vertexUv1s=l.has(1),Tt.vertexUv2s=l.has(2),Tt.vertexUv3s=l.has(3),l.clear(),Tt}function p(S){let y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(let C in S.defines)y.push(C),y.push(S.defines[C]);return S.isRawShaderMaterial===!1&&(v(y,S),_(y,S),y.push(i.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function v(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function _(S,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),y.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),S.push(o.mask)}function x(S){let y=m[S.type],C;if(y){let D=Ai[y];C=Mn.clone(D.uniforms)}else C=S.uniforms;return C}function w(S,y){let C;for(let D=0,F=h.length;D<F;D++){let H=h[D];if(H.cacheKey===y){C=H,++C.usedTimes;break}}return C===void 0&&(C=new t1(i,y,S,r),h.push(C)),C}function E(S){if(--S.usedTimes===0){let y=h.indexOf(S);h[y]=h[h.length-1],h.pop(),S.destroy()}}function R(S){c.remove(S)}function I(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:x,acquireProgram:w,releaseProgram:E,releaseShaderCache:R,programs:h,dispose:I}}function s1(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function r1(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Vm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Gm(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,d,f,m,b,g){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:b,group:g},i[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=b,p.group=g),e++,p}function o(u,d,f,m,b,g){let p=a(u,d,f,m,b,g);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function c(u,d,f,m,b,g){let p=a(u,d,f,m,b,g);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||r1),n.length>1&&n.sort(d||Vm),s.length>1&&s.sort(d||Vm)}function h(){for(let u=e,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function a1(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Gm,i.set(n,[a])):s>=r.length?(a=new Gm,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function o1(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new re};break;case"SpotLight":t={position:new P,direction:new P,color:new re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new re,groundColor:new re};break;case"RectAreaLight":t={color:new re,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function c1(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}function h1(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function u1(i){let e=new o1,t=c1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);let s=new P,r=new Ie,a=new Ie;function o(l){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,m=0,b=0,g=0,p=0,v=0,_=0,x=0,w=0,E=0,R=0;l.sort(h1);for(let S=0,y=l.length;S<y;S++){let C=l[S],D=C.color,F=C.intensity,H=C.distance,X=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=D.r*F,u+=D.g*F,d+=D.b*F;else if(C.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(C.sh.coefficients[W],F);R++}else if(C.isDirectionalLight){let W=e.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let ee=C.shadow,V=t.get(C);V.shadowIntensity=ee.intensity,V.shadowBias=ee.bias,V.shadowNormalBias=ee.normalBias,V.shadowRadius=ee.radius,V.shadowMapSize=ee.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=X,n.directionalShadowMatrix[f]=C.shadow.matrix,v++}n.directional[f]=W,f++}else if(C.isSpotLight){let W=e.get(C);W.position.setFromMatrixPosition(C.matrixWorld),W.color.copy(D).multiplyScalar(F),W.distance=H,W.coneCos=Math.cos(C.angle),W.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),W.decay=C.decay,n.spot[b]=W;let ee=C.shadow;if(C.map&&(n.spotLightMap[w]=C.map,w++,ee.updateMatrices(C),C.castShadow&&E++),n.spotLightMatrix[b]=ee.matrix,C.castShadow){let V=t.get(C);V.shadowIntensity=ee.intensity,V.shadowBias=ee.bias,V.shadowNormalBias=ee.normalBias,V.shadowRadius=ee.radius,V.shadowMapSize=ee.mapSize,n.spotShadow[b]=V,n.spotShadowMap[b]=X,x++}b++}else if(C.isRectAreaLight){let W=e.get(C);W.color.copy(D).multiplyScalar(F),W.halfWidth.set(C.width*.5,0,0),W.halfHeight.set(0,C.height*.5,0),n.rectArea[g]=W,g++}else if(C.isPointLight){let W=e.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),W.distance=C.distance,W.decay=C.decay,C.castShadow){let ee=C.shadow,V=t.get(C);V.shadowIntensity=ee.intensity,V.shadowBias=ee.bias,V.shadowNormalBias=ee.normalBias,V.shadowRadius=ee.radius,V.shadowMapSize=ee.mapSize,V.shadowCameraNear=ee.camera.near,V.shadowCameraFar=ee.camera.far,n.pointShadow[m]=V,n.pointShadowMap[m]=X,n.pointShadowMatrix[m]=C.shadow.matrix,_++}n.point[m]=W,m++}else if(C.isHemisphereLight){let W=e.get(C);W.skyColor.copy(C.color).multiplyScalar(F),W.groundColor.copy(C.groundColor).multiplyScalar(F),n.hemi[p]=W,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let I=n.hash;(I.directionalLength!==f||I.pointLength!==m||I.spotLength!==b||I.rectAreaLength!==g||I.hemiLength!==p||I.numDirectionalShadows!==v||I.numPointShadows!==_||I.numSpotShadows!==x||I.numSpotMaps!==w||I.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=b,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=x+w-E,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=R,I.directionalLength=f,I.pointLength=m,I.spotLength=b,I.rectAreaLength=g,I.hemiLength=p,I.numDirectionalShadows=v,I.numPointShadows=_,I.numSpotShadows=x,I.numSpotMaps=w,I.numLightProbes=R,n.version=l1++)}function c(l,h){let u=0,d=0,f=0,m=0,b=0,g=h.matrixWorldInverse;for(let p=0,v=l.length;p<v;p++){let _=l[p];if(_.isDirectionalLight){let x=n.directional[u];x.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),u++}else if(_.isSpotLight){let x=n.spot[f];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),f++}else if(_.isRectAreaLight){let x=n.rectArea[m];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(g),a.identity(),r.copy(_.matrixWorld),r.premultiply(g),a.extractRotation(r),x.halfWidth.set(_.width*.5,0,0),x.halfHeight.set(0,_.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),m++}else if(_.isPointLight){let x=n.point[d];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(g),d++}else if(_.isHemisphereLight){let x=n.hemi[b];x.direction.setFromMatrixPosition(_.matrixWorld),x.direction.transformDirection(g),b++}}}return{setup:o,setupView:c,state:n}}function Wm(i){let e=new u1(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function d1(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Wm(i),e.set(s,[o])):r>=a.length?(o=new Wm(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}function m1(i,e,t){let n=new ia,s=new ye,r=new ye,a=new at,o=new qc({depthPacking:cm}),c=new Xc,l={},h=t.maxTextureSize,u={[hi]:_n,[_n]:hi,[Kt]:Kt},d=new it({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ye},radius:{value:4}},vertexShader:f1,fragmentShader:p1}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new Mt;m.setAttribute("position",new Pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Oe(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xu;let p=this.type;this.render=function(E,R,I){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;let S=i.getRenderTarget(),y=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Jt),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let F=p!==Ei&&this.type===Ei,H=p===Ei&&this.type!==Ei;for(let X=0,W=E.length;X<W;X++){let ee=E[X],V=ee.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let Z=V.getFrameExtents();if(s.multiply(Z),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Z.x),s.x=r.x*Z.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Z.y),s.y=r.y*Z.y,V.mapSize.y=r.y)),V.map===null||F===!0||H===!0){let Me=this.type!==Ei?{minFilter:Yt,magFilter:Yt}:{};V.map!==null&&V.map.dispose(),V.map=new qt(s.x,s.y,Me),V.map.texture.name=ee.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();let le=V.getViewportCount();for(let Me=0;Me<le;Me++){let Ve=V.getViewport(Me);a.set(r.x*Ve.x,r.y*Ve.y,r.x*Ve.z,r.y*Ve.w),D.viewport(a),V.updateMatrices(ee,Me),n=V.getFrustum(),x(R,I,V.camera,ee,this.type)}V.isPointLightShadow!==!0&&this.type===Ei&&v(V,I),V.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(S,y,C)};function v(E,R){let I=e.update(b);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new qt(s.x,s.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(R,null,I,d,b,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(R,null,I,f,b,null)}function _(E,R,I,S){let y=null,C=I.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(C!==void 0)y=C;else if(y=I.isPointLight===!0?c:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let D=y.uuid,F=R.uuid,H=l[D];H===void 0&&(H={},l[D]=H);let X=H[F];X===void 0&&(X=y.clone(),H[F]=X,R.addEventListener("dispose",w)),y=X}if(y.visible=R.visible,y.wireframe=R.wireframe,S===Ei?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:u[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,y.map=R.map,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,I.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let D=i.properties.get(y);D.light=I}return y}function x(E,R,I,S,y){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&y===Ei)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,E.matrixWorld);let F=e.update(E),H=E.material;if(Array.isArray(H)){let X=F.groups;for(let W=0,ee=X.length;W<ee;W++){let V=X[W],Z=H[V.materialIndex];if(Z&&Z.visible){let le=_(E,Z,S,y);E.onBeforeShadow(i,E,R,I,F,le,V),i.renderBufferDirect(I,null,F,le,E,V),E.onAfterShadow(i,E,R,I,F,le,V)}}}else if(H.visible){let X=_(E,H,S,y);E.onBeforeShadow(i,E,R,I,F,X,null),i.renderBufferDirect(I,null,F,X,E,null),E.onAfterShadow(i,E,R,I,F,X,null)}}let D=E.children;for(let F=0,H=D.length;F<H;F++)x(D[F],R,I,S,y)}function w(E){E.target.removeEventListener("dispose",w);for(let I in l){let S=l[I],y=E.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}function b1(i,e){function t(){let L=!1,J=new at,se=null,_e=new at(0,0,0,0);return{setMask:function(Q){se!==Q&&!L&&(i.colorMask(Q,Q,Q,Q),se=Q)},setLocked:function(Q){L=Q},setClear:function(Q,$,we,We,Tt){Tt===!0&&(Q*=We,$*=We,we*=We),J.set(Q,$,we,We),_e.equals(J)===!1&&(i.clearColor(Q,$,we,We),_e.copy(J))},reset:function(){L=!1,se=null,_e.set(-1,0,0,0)}}}function n(){let L=!1,J=!1,se=null,_e=null,Q=null;return{setReversed:function($){if(J!==$){let we=e.get("EXT_clip_control");$?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),J=$;let We=Q;Q=null,this.setClear(We)}},getReversed:function(){return J},setTest:function($){$?Y(i.DEPTH_TEST):de(i.DEPTH_TEST)},setMask:function($){se!==$&&!L&&(i.depthMask($),se=$)},setFunc:function($){if(J&&($=g1[$]),_e!==$){switch($){case il:i.depthFunc(i.NEVER);break;case sl:i.depthFunc(i.ALWAYS);break;case rl:i.depthFunc(i.LESS);break;case Hs:i.depthFunc(i.LEQUAL);break;case al:i.depthFunc(i.EQUAL);break;case ol:i.depthFunc(i.GEQUAL);break;case aa:i.depthFunc(i.GREATER);break;case cl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_e=$}},setLocked:function($){L=$},setClear:function($){Q!==$&&(J&&($=1-$),i.clearDepth($),Q=$)},reset:function(){L=!1,se=null,_e=null,Q=null,J=!1}}}function s(){let L=!1,J=null,se=null,_e=null,Q=null,$=null,we=null,We=null,Tt=null;return{setTest:function(ht){L||(ht?Y(i.STENCIL_TEST):de(i.STENCIL_TEST))},setMask:function(ht){J!==ht&&!L&&(i.stencilMask(ht),J=ht)},setFunc:function(ht,Ui,gi){(se!==ht||_e!==Ui||Q!==gi)&&(i.stencilFunc(ht,Ui,gi),se=ht,_e=Ui,Q=gi)},setOp:function(ht,Ui,gi){($!==ht||we!==Ui||We!==gi)&&(i.stencilOp(ht,Ui,gi),$=ht,we=Ui,We=gi)},setLocked:function(ht){L=ht},setClear:function(ht){Tt!==ht&&(i.clearStencil(ht),Tt=ht)},reset:function(){L=!1,J=null,se=null,_e=null,Q=null,$=null,we=null,We=null,Tt=null}}}let r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,f=[],m=null,b=!1,g=null,p=null,v=null,_=null,x=null,w=null,E=null,R=new re(0,0,0),I=0,S=!1,y=null,C=null,D=null,F=null,H=null,X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,ee=0,V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(V)[1]),W=ee>=1):V.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),W=ee>=2);let Z=null,le={},Me=i.getParameter(i.SCISSOR_BOX),Ve=i.getParameter(i.VIEWPORT),ot=new at().fromArray(Me),dt=new at().fromArray(Ve);function et(L,J,se,_e){let Q=new Uint8Array(4),$=i.createTexture();i.bindTexture(L,$),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let we=0;we<se;we++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(J,0,i.RGBA,1,1,_e,0,i.RGBA,i.UNSIGNED_BYTE,Q):i.texImage2D(J+we,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Q);return $}let j={};j[i.TEXTURE_2D]=et(i.TEXTURE_2D,i.TEXTURE_2D,1),j[i.TEXTURE_CUBE_MAP]=et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[i.TEXTURE_2D_ARRAY]=et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),j[i.TEXTURE_3D]=et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Y(i.DEPTH_TEST),a.setFunc(Hs),Le(!1),xe(qu),Y(i.CULL_FACE),pt(Jt);function Y(L){h[L]!==!0&&(i.enable(L),h[L]=!0)}function de(L){h[L]!==!1&&(i.disable(L),h[L]=!1)}function Ce(L,J){return u[L]!==J?(i.bindFramebuffer(L,J),u[L]=J,L===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=J),L===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=J),!0):!1}function ge(L,J){let se=f,_e=!1;if(L){se=d.get(J),se===void 0&&(se=[],d.set(J,se));let Q=L.textures;if(se.length!==Q.length||se[0]!==i.COLOR_ATTACHMENT0){for(let $=0,we=Q.length;$<we;$++)se[$]=i.COLOR_ATTACHMENT0+$;se.length=Q.length,_e=!0}}else se[0]!==i.BACK&&(se[0]=i.BACK,_e=!0);_e&&i.drawBuffers(se)}function Ye(L){return m!==L?(i.useProgram(L),m=L,!0):!1}let Xt={[On]:i.FUNC_ADD,[Vp]:i.FUNC_SUBTRACT,[Gp]:i.FUNC_REVERSE_SUBTRACT};Xt[Wp]=i.MIN,Xt[qp]=i.MAX;let k={[er]:i.ZERO,[Xp]:i.ONE,[jp]:i.SRC_COLOR,[Dc]:i.SRC_ALPHA,[Jp]:i.SRC_ALPHA_SATURATE,[go]:i.DST_COLOR,[mo]:i.DST_ALPHA,[$p]:i.ONE_MINUS_SRC_COLOR,[Nc]:i.ONE_MINUS_SRC_ALPHA,[Kp]:i.ONE_MINUS_DST_COLOR,[Yp]:i.ONE_MINUS_DST_ALPHA,[Zp]:i.CONSTANT_COLOR,[Qp]:i.ONE_MINUS_CONSTANT_COLOR,[em]:i.CONSTANT_ALPHA,[tm]:i.ONE_MINUS_CONSTANT_ALPHA};function pt(L,J,se,_e,Q,$,we,We,Tt,ht){if(L===Jt){b===!0&&(de(i.BLEND),b=!1);return}if(b===!1&&(Y(i.BLEND),b=!0),L!==nl){if(L!==g||ht!==S){if((p!==On||x!==On)&&(i.blendEquation(i.FUNC_ADD),p=On,x=On),ht)switch(L){case Wi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case en:i.blendFunc(i.ONE,i.ONE);break;case ju:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $u:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Wi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case en:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ju:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $u:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}v=null,_=null,w=null,E=null,R.set(0,0,0),I=0,g=L,S=ht}return}Q=Q||J,$=$||se,we=we||_e,(J!==p||Q!==x)&&(i.blendEquationSeparate(Xt[J],Xt[Q]),p=J,x=Q),(se!==v||_e!==_||$!==w||we!==E)&&(i.blendFuncSeparate(k[se],k[_e],k[$],k[we]),v=se,_=_e,w=$,E=we),(We.equals(R)===!1||Tt!==I)&&(i.blendColor(We.r,We.g,We.b,Tt),R.copy(We),I=Tt),g=L,S=!1}function He(L,J){L.side===Kt?de(i.CULL_FACE):Y(i.CULL_FACE);let se=L.side===_n;J&&(se=!se),Le(se),L.blending===Wi&&L.transparent===!1?pt(Jt):pt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);let _e=L.stencilWrite;o.setTest(_e),_e&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ve(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Y(i.SAMPLE_ALPHA_TO_COVERAGE):de(i.SAMPLE_ALPHA_TO_COVERAGE)}function Le(L){y!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),y=L)}function xe(L){L!==Bp?(Y(i.CULL_FACE),L!==C&&(L===qu?i.cullFace(i.BACK):L===Hp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):de(i.CULL_FACE),C=L}function mt(L){L!==D&&(W&&i.lineWidth(L),D=L)}function ve(L,J,se){L?(Y(i.POLYGON_OFFSET_FILL),(F!==J||H!==se)&&(i.polygonOffset(J,se),F=J,H=se)):de(i.POLYGON_OFFSET_FILL)}function Ge(L){L?Y(i.SCISSOR_TEST):de(i.SCISSOR_TEST)}function Vt(L){L===void 0&&(L=i.TEXTURE0+X-1),Z!==L&&(i.activeTexture(L),Z=L)}function At(L,J,se){se===void 0&&(Z===null?se=i.TEXTURE0+X-1:se=Z);let _e=le[se];_e===void 0&&(_e={type:void 0,texture:void 0},le[se]=_e),(_e.type!==L||_e.texture!==J)&&(Z!==se&&(i.activeTexture(se),Z=se),i.bindTexture(L,J||j[L]),_e.type=L,_e.texture=J)}function A(){let L=le[Z];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function M(){try{i.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function z(){try{i.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function q(){try{i.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function K(){try{i.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function G(){try{i.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Se(){try{i.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ie(){try{i.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function be(){try{i.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ee(){try{i.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function te(){try{i.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function he(L){ot.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),ot.copy(L))}function Ne(L){dt.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),dt.copy(L))}function Ae(L,J){let se=l.get(J);se===void 0&&(se=new WeakMap,l.set(J,se));let _e=se.get(L);_e===void 0&&(_e=i.getUniformBlockIndex(J,L.name),se.set(L,_e))}function oe(L,J){let _e=l.get(J).get(L);c.get(J)!==_e&&(i.uniformBlockBinding(J,_e,L.__bindingPointIndex),c.set(J,_e))}function ze(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},Z=null,le={},u={},d=new WeakMap,f=[],m=null,b=!1,g=null,p=null,v=null,_=null,x=null,w=null,E=null,R=new re(0,0,0),I=0,S=!1,y=null,C=null,D=null,F=null,H=null,ot.set(0,0,i.canvas.width,i.canvas.height),dt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Y,disable:de,bindFramebuffer:Ce,drawBuffers:ge,useProgram:Ye,setBlending:pt,setMaterial:He,setFlipSided:Le,setCullFace:xe,setLineWidth:mt,setPolygonOffset:ve,setScissorTest:Ge,activeTexture:Vt,bindTexture:At,unbindTexture:A,compressedTexImage2D:M,compressedTexImage3D:z,texImage2D:Ee,texImage3D:te,updateUBOMapping:Ae,uniformBlockBinding:oe,texStorage2D:ie,texStorage3D:be,texSubImage2D:q,texSubImage3D:K,compressedTexSubImage2D:G,compressedTexSubImage3D:Se,scissor:he,viewport:Ne,reset:ze}}function x1(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ye,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,M){return f?new OffscreenCanvas(A,M):$r("canvas")}function b(A,M,z){let q=1,K=At(A);if((K.width>z||K.height>z)&&(q=z/Math.max(K.width,K.height)),q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let G=Math.floor(q*K.width),Se=Math.floor(q*K.height);u===void 0&&(u=m(G,Se));let ie=M?m(G,Se):u;return ie.width=G,ie.height=Se,ie.getContext("2d").drawImage(A,0,0,G,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+G+"x"+Se+")."),ie}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),A;return A}function g(A){return A.generateMipmaps}function p(A){i.generateMipmap(A)}function v(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(A,M,z,q,K=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let G=M;if(M===i.RED&&(z===i.FLOAT&&(G=i.R32F),z===i.HALF_FLOAT&&(G=i.R16F),z===i.UNSIGNED_BYTE&&(G=i.R8)),M===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(G=i.R8UI),z===i.UNSIGNED_SHORT&&(G=i.R16UI),z===i.UNSIGNED_INT&&(G=i.R32UI),z===i.BYTE&&(G=i.R8I),z===i.SHORT&&(G=i.R16I),z===i.INT&&(G=i.R32I)),M===i.RG&&(z===i.FLOAT&&(G=i.RG32F),z===i.HALF_FLOAT&&(G=i.RG16F),z===i.UNSIGNED_BYTE&&(G=i.RG8)),M===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(G=i.RG8UI),z===i.UNSIGNED_SHORT&&(G=i.RG16UI),z===i.UNSIGNED_INT&&(G=i.RG32UI),z===i.BYTE&&(G=i.RG8I),z===i.SHORT&&(G=i.RG16I),z===i.INT&&(G=i.RG32I)),M===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(G=i.RGB8UI),z===i.UNSIGNED_SHORT&&(G=i.RGB16UI),z===i.UNSIGNED_INT&&(G=i.RGB32UI),z===i.BYTE&&(G=i.RGB8I),z===i.SHORT&&(G=i.RGB16I),z===i.INT&&(G=i.RGB32I)),M===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(G=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(G=i.RGBA16UI),z===i.UNSIGNED_INT&&(G=i.RGBA32UI),z===i.BYTE&&(G=i.RGBA8I),z===i.SHORT&&(G=i.RGBA16I),z===i.INT&&(G=i.RGBA32I)),M===i.RGB&&(z===i.UNSIGNED_INT_5_9_9_9_REV&&(G=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(G=i.R11F_G11F_B10F)),M===i.RGBA){let Se=K?Ba:je.getTransfer(q);z===i.FLOAT&&(G=i.RGBA32F),z===i.HALF_FLOAT&&(G=i.RGBA16F),z===i.UNSIGNED_BYTE&&(G=Se===ct?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(G=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(G=i.RGB5_A1)}return(G===i.R16F||G===i.R32F||G===i.RG16F||G===i.RG32F||G===i.RGBA16F||G===i.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function x(A,M){let z;return A?M===null||M===ys||M===Ms?z=i.DEPTH24_STENCIL8:M===Kn?z=i.DEPTH32F_STENCIL8:M===la&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ys||M===Ms?z=i.DEPTH_COMPONENT24:M===Kn?z=i.DEPTH_COMPONENT32F:M===la&&(z=i.DEPTH_COMPONENT16),z}function w(A,M){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==Yt&&A.minFilter!==xn?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function E(A){let M=A.target;M.removeEventListener("dispose",E),I(M),M.isVideoTexture&&h.delete(M)}function R(A){let M=A.target;M.removeEventListener("dispose",R),y(M)}function I(A){let M=n.get(A);if(M.__webglInit===void 0)return;let z=A.source,q=d.get(z);if(q){let K=q[M.__cacheKey];K.usedTimes--,K.usedTimes===0&&S(A),Object.keys(q).length===0&&d.delete(z)}n.remove(A)}function S(A){let M=n.get(A);i.deleteTexture(M.__webglTexture);let z=A.source,q=d.get(z);delete q[M.__cacheKey],a.memory.textures--}function y(A){let M=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(M.__webglFramebuffer[q]))for(let K=0;K<M.__webglFramebuffer[q].length;K++)i.deleteFramebuffer(M.__webglFramebuffer[q][K]);else i.deleteFramebuffer(M.__webglFramebuffer[q]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[q])}else{if(Array.isArray(M.__webglFramebuffer))for(let q=0;q<M.__webglFramebuffer.length;q++)i.deleteFramebuffer(M.__webglFramebuffer[q]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let q=0;q<M.__webglColorRenderbuffer.length;q++)M.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[q]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let z=A.textures;for(let q=0,K=z.length;q<K;q++){let G=n.get(z[q]);G.__webglTexture&&(i.deleteTexture(G.__webglTexture),a.memory.textures--),n.remove(z[q])}n.remove(A)}let C=0;function D(){C=0}function F(){let A=C;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),C+=1,A}function H(A){let M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function X(A,M){let z=n.get(A);if(A.isVideoTexture&&Ge(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&z.__version!==A.version){let q=A.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(z,A,M);return}}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+M)}function W(A,M){let z=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){j(z,A,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+M)}function ee(A,M){let z=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){j(z,A,M);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+M)}function V(A,M){let z=n.get(A);if(A.version>0&&z.__version!==A.version){Y(z,A,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+M)}let Z={[An]:i.REPEAT,[xi]:i.CLAMP_TO_EDGE,[Xr]:i.MIRRORED_REPEAT},le={[Yt]:i.NEAREST,[bl]:i.NEAREST_MIPMAP_NEAREST,[ir]:i.NEAREST_MIPMAP_LINEAR,[xn]:i.LINEAR,[ca]:i.LINEAR_MIPMAP_NEAREST,[fi]:i.LINEAR_MIPMAP_LINEAR},Me={[hm]:i.NEVER,[gm]:i.ALWAYS,[um]:i.LESS,[od]:i.LEQUAL,[dm]:i.EQUAL,[mm]:i.GEQUAL,[fm]:i.GREATER,[pm]:i.NOTEQUAL};function Ve(A,M){if(M.type===Kn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===xn||M.magFilter===ca||M.magFilter===ir||M.magFilter===fi||M.minFilter===xn||M.minFilter===ca||M.minFilter===ir||M.minFilter===fi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Z[M.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Z[M.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Z[M.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,le[M.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,le[M.minFilter]),M.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Me[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Yt||M.minFilter!==ir&&M.minFilter!==fi||M.type===Kn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function ot(A,M){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",E));let q=M.source,K=d.get(q);K===void 0&&(K={},d.set(q,K));let G=H(M);if(G!==A.__cacheKey){K[G]===void 0&&(K[G]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),K[G].usedTimes++;let Se=K[A.__cacheKey];Se!==void 0&&(K[A.__cacheKey].usedTimes--,Se.usedTimes===0&&S(M)),A.__cacheKey=G,A.__webglTexture=K[G].texture}return z}function dt(A,M,z){return Math.floor(Math.floor(A/z)/M)}function et(A,M,z,q){let G=A.updateRanges;if(G.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,z,q,M.data);else{G.sort((te,he)=>te.start-he.start);let Se=0;for(let te=1;te<G.length;te++){let he=G[Se],Ne=G[te],Ae=he.start+he.count,oe=dt(Ne.start,M.width,4),ze=dt(he.start,M.width,4);Ne.start<=Ae+1&&oe===ze&&dt(Ne.start+Ne.count-1,M.width,4)===oe?he.count=Math.max(he.count,Ne.start+Ne.count-he.start):(++Se,G[Se]=Ne)}G.length=Se+1;let ie=i.getParameter(i.UNPACK_ROW_LENGTH),be=i.getParameter(i.UNPACK_SKIP_PIXELS),Ee=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let te=0,he=G.length;te<he;te++){let Ne=G[te],Ae=Math.floor(Ne.start/4),oe=Math.ceil(Ne.count/4),ze=Ae%M.width,L=Math.floor(Ae/M.width),J=oe,se=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,ze),i.pixelStorei(i.UNPACK_SKIP_ROWS,L),t.texSubImage2D(i.TEXTURE_2D,0,ze,L,J,se,z,q,M.data)}A.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ie),i.pixelStorei(i.UNPACK_SKIP_PIXELS,be),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ee)}}function j(A,M,z){let q=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(q=i.TEXTURE_3D);let K=ot(A,M),G=M.source;t.bindTexture(q,A.__webglTexture,i.TEXTURE0+z);let Se=n.get(G);if(G.version!==Se.__version||K===!0){t.activeTexture(i.TEXTURE0+z);let ie=je.getPrimaries(je.workingColorSpace),be=M.colorSpace===Qi?null:je.getPrimaries(M.colorSpace),Ee=M.colorSpace===Qi||ie===be?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let te=b(M.image,!1,s.maxTextureSize);te=Vt(M,te);let he=r.convert(M.format,M.colorSpace),Ne=r.convert(M.type),Ae=_(M.internalFormat,he,Ne,M.colorSpace,M.isVideoTexture);Ve(q,M);let oe,ze=M.mipmaps,L=M.isVideoTexture!==!0,J=Se.__version===void 0||K===!0,se=G.dataReady,_e=w(M,te);if(M.isDepthTexture)Ae=x(M.format===Ss,M.type),J&&(L?t.texStorage2D(i.TEXTURE_2D,1,Ae,te.width,te.height):t.texImage2D(i.TEXTURE_2D,0,Ae,te.width,te.height,0,he,Ne,null));else if(M.isDataTexture)if(ze.length>0){L&&J&&t.texStorage2D(i.TEXTURE_2D,_e,Ae,ze[0].width,ze[0].height);for(let Q=0,$=ze.length;Q<$;Q++)oe=ze[Q],L?se&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,oe.width,oe.height,he,Ne,oe.data):t.texImage2D(i.TEXTURE_2D,Q,Ae,oe.width,oe.height,0,he,Ne,oe.data);M.generateMipmaps=!1}else L?(J&&t.texStorage2D(i.TEXTURE_2D,_e,Ae,te.width,te.height),se&&et(M,te,he,Ne)):t.texImage2D(i.TEXTURE_2D,0,Ae,te.width,te.height,0,he,Ne,te.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){L&&J&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_e,Ae,ze[0].width,ze[0].height,te.depth);for(let Q=0,$=ze.length;Q<$;Q++)if(oe=ze[Q],M.format!==yn)if(he!==null)if(L){if(se)if(M.layerUpdates.size>0){let we=md(oe.width,oe.height,M.format,M.type);for(let We of M.layerUpdates){let Tt=oe.data.subarray(We*we/oe.data.BYTES_PER_ELEMENT,(We+1)*we/oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,We,oe.width,oe.height,1,he,Tt)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,oe.width,oe.height,te.depth,he,oe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,Ae,oe.width,oe.height,te.depth,0,oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?se&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,oe.width,oe.height,te.depth,he,Ne,oe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Q,Ae,oe.width,oe.height,te.depth,0,he,Ne,oe.data)}else{L&&J&&t.texStorage2D(i.TEXTURE_2D,_e,Ae,ze[0].width,ze[0].height);for(let Q=0,$=ze.length;Q<$;Q++)oe=ze[Q],M.format!==yn?he!==null?L?se&&t.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,oe.width,oe.height,he,oe.data):t.compressedTexImage2D(i.TEXTURE_2D,Q,Ae,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?se&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,oe.width,oe.height,he,Ne,oe.data):t.texImage2D(i.TEXTURE_2D,Q,Ae,oe.width,oe.height,0,he,Ne,oe.data)}else if(M.isDataArrayTexture)if(L){if(J&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_e,Ae,te.width,te.height,te.depth),se)if(M.layerUpdates.size>0){let Q=md(te.width,te.height,M.format,M.type);for(let $ of M.layerUpdates){let we=te.data.subarray($*Q/te.data.BYTES_PER_ELEMENT,($+1)*Q/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$,te.width,te.height,1,he,Ne,we)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,he,Ne,te.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ae,te.width,te.height,te.depth,0,he,Ne,te.data);else if(M.isData3DTexture)L?(J&&t.texStorage3D(i.TEXTURE_3D,_e,Ae,te.width,te.height,te.depth),se&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,he,Ne,te.data)):t.texImage3D(i.TEXTURE_3D,0,Ae,te.width,te.height,te.depth,0,he,Ne,te.data);else if(M.isFramebufferTexture){if(J)if(L)t.texStorage2D(i.TEXTURE_2D,_e,Ae,te.width,te.height);else{let Q=te.width,$=te.height;for(let we=0;we<_e;we++)t.texImage2D(i.TEXTURE_2D,we,Ae,Q,$,0,he,Ne,null),Q>>=1,$>>=1}}else if(ze.length>0){if(L&&J){let Q=At(ze[0]);t.texStorage2D(i.TEXTURE_2D,_e,Ae,Q.width,Q.height)}for(let Q=0,$=ze.length;Q<$;Q++)oe=ze[Q],L?se&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,he,Ne,oe):t.texImage2D(i.TEXTURE_2D,Q,Ae,he,Ne,oe);M.generateMipmaps=!1}else if(L){if(J){let Q=At(te);t.texStorage2D(i.TEXTURE_2D,_e,Ae,Q.width,Q.height)}se&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,he,Ne,te)}else t.texImage2D(i.TEXTURE_2D,0,Ae,he,Ne,te);g(M)&&p(q),Se.__version=G.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function Y(A,M,z){if(M.image.length!==6)return;let q=ot(A,M),K=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+z);let G=n.get(K);if(K.version!==G.__version||q===!0){t.activeTexture(i.TEXTURE0+z);let Se=je.getPrimaries(je.workingColorSpace),ie=M.colorSpace===Qi?null:je.getPrimaries(M.colorSpace),be=M.colorSpace===Qi||Se===ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let Ee=M.isCompressedTexture||M.image[0].isCompressedTexture,te=M.image[0]&&M.image[0].isDataTexture,he=[];for(let $=0;$<6;$++)!Ee&&!te?he[$]=b(M.image[$],!0,s.maxCubemapSize):he[$]=te?M.image[$].image:M.image[$],he[$]=Vt(M,he[$]);let Ne=he[0],Ae=r.convert(M.format,M.colorSpace),oe=r.convert(M.type),ze=_(M.internalFormat,Ae,oe,M.colorSpace),L=M.isVideoTexture!==!0,J=G.__version===void 0||q===!0,se=K.dataReady,_e=w(M,Ne);Ve(i.TEXTURE_CUBE_MAP,M);let Q;if(Ee){L&&J&&t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,ze,Ne.width,Ne.height);for(let $=0;$<6;$++){Q=he[$].mipmaps;for(let we=0;we<Q.length;we++){let We=Q[we];M.format!==yn?Ae!==null?L?se&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,we,0,0,We.width,We.height,Ae,We.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,we,ze,We.width,We.height,0,We.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,we,0,0,We.width,We.height,Ae,oe,We.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,we,ze,We.width,We.height,0,Ae,oe,We.data)}}}else{if(Q=M.mipmaps,L&&J){Q.length>0&&_e++;let $=At(he[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,ze,$.width,$.height)}for(let $=0;$<6;$++)if(te){L?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,he[$].width,he[$].height,Ae,oe,he[$].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,ze,he[$].width,he[$].height,0,Ae,oe,he[$].data);for(let we=0;we<Q.length;we++){let Tt=Q[we].image[$].image;L?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,we+1,0,0,Tt.width,Tt.height,Ae,oe,Tt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,we+1,ze,Tt.width,Tt.height,0,Ae,oe,Tt.data)}}else{L?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ae,oe,he[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,ze,Ae,oe,he[$]);for(let we=0;we<Q.length;we++){let We=Q[we];L?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,we+1,0,0,Ae,oe,We.image[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,we+1,ze,Ae,oe,We.image[$])}}}g(M)&&p(i.TEXTURE_CUBE_MAP),G.__version=K.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function de(A,M,z,q,K,G){let Se=r.convert(z.format,z.colorSpace),ie=r.convert(z.type),be=_(z.internalFormat,Se,ie,z.colorSpace),Ee=n.get(M),te=n.get(z);if(te.__renderTarget=M,!Ee.__hasExternalTextures){let he=Math.max(1,M.width>>G),Ne=Math.max(1,M.height>>G);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,G,be,he,Ne,M.depth,0,Se,ie,null):t.texImage2D(K,G,be,he,Ne,0,Se,ie,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),ve(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,K,te.__webglTexture,0,mt(M)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,K,te.__webglTexture,G),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ce(A,M,z){if(i.bindRenderbuffer(i.RENDERBUFFER,A),M.depthBuffer){let q=M.depthTexture,K=q&&q.isDepthTexture?q.type:null,G=x(M.stencilBuffer,K),Se=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=mt(M);ve(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie,G,M.width,M.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,G,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,G,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Se,i.RENDERBUFFER,A)}else{let q=M.textures;for(let K=0;K<q.length;K++){let G=q[K],Se=r.convert(G.format,G.colorSpace),ie=r.convert(G.type),be=_(G.internalFormat,Se,ie,G.colorSpace),Ee=mt(M);z&&ve(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ee,be,M.width,M.height):ve(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ee,be,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,be,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ge(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let q=n.get(M.depthTexture);q.__renderTarget=M,(!q.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),X(M.depthTexture,0);let K=q.__webglTexture,G=mt(M);if(M.depthTexture.format===jr)ve(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,G):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(M.depthTexture.format===Ss)ve(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,G):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Ye(A){let M=n.get(A),z=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){let q=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),q){let K=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,q.removeEventListener("dispose",K)};q.addEventListener("dispose",K),M.__depthDisposeCallback=K}M.__boundDepthTexture=q}if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");let q=A.texture.mipmaps;q&&q.length>0?ge(M.__webglFramebuffer[0],A):ge(M.__webglFramebuffer,A)}else if(z){M.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[q]),M.__webglDepthbuffer[q]===void 0)M.__webglDepthbuffer[q]=i.createRenderbuffer(),Ce(M.__webglDepthbuffer[q],A,!1);else{let K=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,G=M.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,G),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,G)}}else{let q=A.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),Ce(M.__webglDepthbuffer,A,!1);else{let K=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,G=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,G),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,G)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Xt(A,M,z){let q=n.get(A);M!==void 0&&de(q.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Ye(A)}function k(A){let M=A.texture,z=n.get(A),q=n.get(M);A.addEventListener("dispose",R);let K=A.textures,G=A.isWebGLCubeRenderTarget===!0,Se=K.length>1;if(Se||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=M.version,a.memory.textures++),G){z.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer[ie]=[];for(let be=0;be<M.mipmaps.length;be++)z.__webglFramebuffer[ie][be]=i.createFramebuffer()}else z.__webglFramebuffer[ie]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer=[];for(let ie=0;ie<M.mipmaps.length;ie++)z.__webglFramebuffer[ie]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(Se)for(let ie=0,be=K.length;ie<be;ie++){let Ee=n.get(K[ie]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&ve(A)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ie=0;ie<K.length;ie++){let be=K[ie];z.__webglColorRenderbuffer[ie]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[ie]);let Ee=r.convert(be.format,be.colorSpace),te=r.convert(be.type),he=_(be.internalFormat,Ee,te,be.colorSpace,A.isXRRenderTarget===!0),Ne=mt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ne,he,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.RENDERBUFFER,z.__webglColorRenderbuffer[ie])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),Ce(z.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(G){t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Ve(i.TEXTURE_CUBE_MAP,M);for(let ie=0;ie<6;ie++)if(M.mipmaps&&M.mipmaps.length>0)for(let be=0;be<M.mipmaps.length;be++)de(z.__webglFramebuffer[ie][be],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,be);else de(z.__webglFramebuffer[ie],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);g(M)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let ie=0,be=K.length;ie<be;ie++){let Ee=K[ie],te=n.get(Ee),he=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(he=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,te.__webglTexture),Ve(he,Ee),de(z.__webglFramebuffer,A,Ee,i.COLOR_ATTACHMENT0+ie,he,0),g(Ee)&&p(he)}t.unbindTexture()}else{let ie=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ie=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ie,q.__webglTexture),Ve(ie,M),M.mipmaps&&M.mipmaps.length>0)for(let be=0;be<M.mipmaps.length;be++)de(z.__webglFramebuffer[be],A,M,i.COLOR_ATTACHMENT0,ie,be);else de(z.__webglFramebuffer,A,M,i.COLOR_ATTACHMENT0,ie,0);g(M)&&p(ie),t.unbindTexture()}A.depthBuffer&&Ye(A)}function pt(A){let M=A.textures;for(let z=0,q=M.length;z<q;z++){let K=M[z];if(g(K)){let G=v(A),Se=n.get(K).__webglTexture;t.bindTexture(G,Se),p(G),t.unbindTexture()}}}let He=[],Le=[];function xe(A){if(A.samples>0){if(ve(A)===!1){let M=A.textures,z=A.width,q=A.height,K=i.COLOR_BUFFER_BIT,G=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=n.get(A),ie=M.length>1;if(ie)for(let Ee=0;Ee<M.length;Ee++)t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);let be=A.texture.mipmaps;be&&be.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let Ee=0;Ee<M.length;Ee++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),ie){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Se.__webglColorRenderbuffer[Ee]);let te=n.get(M[Ee]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,te,0)}i.blitFramebuffer(0,0,z,q,0,0,z,q,K,i.NEAREST),c===!0&&(He.length=0,Le.length=0,He.push(i.COLOR_ATTACHMENT0+Ee),A.depthBuffer&&A.resolveDepthBuffer===!1&&(He.push(G),Le.push(G),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Le)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,He))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ie)for(let Ee=0;Ee<M.length;Ee++){t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,Se.__webglColorRenderbuffer[Ee]);let te=n.get(M[Ee]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,te,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){let M=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function mt(A){return Math.min(s.maxSamples,A.samples)}function ve(A){let M=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ge(A){let M=a.render.frame;h.get(A)!==M&&(h.set(A,M),A.update())}function Vt(A,M){let z=A.colorSpace,q=A.format,K=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==hn&&z!==Qi&&(je.getTransfer(z)===ct?(q!==yn||K!==Gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),M}function At(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=D,this.setTexture2D=X,this.setTexture2DArray=W,this.setTexture3D=ee,this.setTextureCube=V,this.rebindTextures=Xt,this.setupRenderTarget=k,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=de,this.useMultisampledRTT=ve}function v1(i,e){function t(n,s=Qi){let r,a=je.getTransfer(s);if(n===Gn)return i.UNSIGNED_BYTE;if(n===vl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===_l)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Qu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ed)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ju)return i.BYTE;if(n===Zu)return i.SHORT;if(n===la)return i.UNSIGNED_SHORT;if(n===xl)return i.INT;if(n===ys)return i.UNSIGNED_INT;if(n===Kn)return i.FLOAT;if(n===un)return i.HALF_FLOAT;if(n===td)return i.ALPHA;if(n===nd)return i.RGB;if(n===yn)return i.RGBA;if(n===jr)return i.DEPTH_COMPONENT;if(n===Ss)return i.DEPTH_STENCIL;if(n===yl)return i.RED;if(n===Ml)return i.RED_INTEGER;if(n===id)return i.RG;if(n===Sl)return i.RG_INTEGER;if(n===Tl)return i.RGBA_INTEGER;if(n===xo||n===vo||n===_o||n===yo)if(a===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===xo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===vo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===_o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===xo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===vo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===_o)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===yo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===wl||n===El||n===Al||n===Rl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===wl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===El)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Al)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Rl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Cl||n===Pl||n===Il)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Cl||n===Pl)return a===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Il)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===kl||n===Ll||n===Dl||n===Nl||n===Ul||n===zl||n===Fl||n===Ol||n===Bl||n===Hl||n===Vl||n===Gl||n===Wl||n===ql)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===kl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ll)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Dl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Nl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ul)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===zl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Fl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ol)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Bl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Hl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Vl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Gl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ql)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Xl||n===jl||n===$l)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Xl)return a===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===jl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===$l)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Yl||n===Kl||n===Jl||n===Zl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Yl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Kl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Jl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Zl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ms?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}function S1(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,dd(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,v,_,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,x)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),b(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?c(g,p,v,_):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===_n&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===_n&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let v=e.get(p),_=v.envMap,x=v.envMapRotation;_&&(g.envMap.value=_,ar.copy(x),ar.x*=-1,ar.y*=-1,ar.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ar.y*=-1,ar.z*=-1),g.envMapRotation.value.setFromMatrix4(M1.makeRotationFromEuler(ar)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,v,_){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=_*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,v){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===_n&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function b(g,p){let v=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function T1(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,_){let x=_.program;n.uniformBlockBinding(v,x)}function l(v,_){let x=s[v.id];x===void 0&&(m(v),x=h(v),s[v.id]=x,v.addEventListener("dispose",g));let w=_.program;n.updateUBOMapping(v,w);let E=e.render.frame;r[v.id]!==E&&(d(v),r[v.id]=E)}function h(v){let _=u();v.__bindingPointIndex=_;let x=i.createBuffer(),w=v.__size,E=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,w,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,x),x}function u(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let _=s[v.id],x=v.uniforms,w=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let E=0,R=x.length;E<R;E++){let I=Array.isArray(x[E])?x[E]:[x[E]];for(let S=0,y=I.length;S<y;S++){let C=I[S];if(f(C,E,S,w)===!0){let D=C.__offset,F=Array.isArray(C.value)?C.value:[C.value],H=0;for(let X=0;X<F.length;X++){let W=F[X],ee=b(W);typeof W=="number"||typeof W=="boolean"?(C.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,D+H,C.__data)):W.isMatrix3?(C.__data[0]=W.elements[0],C.__data[1]=W.elements[1],C.__data[2]=W.elements[2],C.__data[3]=0,C.__data[4]=W.elements[3],C.__data[5]=W.elements[4],C.__data[6]=W.elements[5],C.__data[7]=0,C.__data[8]=W.elements[6],C.__data[9]=W.elements[7],C.__data[10]=W.elements[8],C.__data[11]=0):(W.toArray(C.__data,H),H+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,D,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,_,x,w){let E=v.value,R=_+"_"+x;if(w[R]===void 0)return typeof E=="number"||typeof E=="boolean"?w[R]=E:w[R]=E.clone(),!0;{let I=w[R];if(typeof E=="number"||typeof E=="boolean"){if(I!==E)return w[R]=E,!0}else if(I.equals(E)===!1)return I.copy(E),!0}return!1}function m(v){let _=v.uniforms,x=0,w=16;for(let R=0,I=_.length;R<I;R++){let S=Array.isArray(_[R])?_[R]:[_[R]];for(let y=0,C=S.length;y<C;y++){let D=S[y],F=Array.isArray(D.value)?D.value:[D.value];for(let H=0,X=F.length;H<X;H++){let W=F[H],ee=b(W),V=x%w,Z=V%ee.boundary,le=V+Z;x+=Z,le!==0&&w-le<ee.storage&&(x+=w-le),D.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=x,x+=ee.storage}}}let E=x%w;return E>0&&(x+=w-E),v.__size=x,v.__cache={},this}function b(v){let _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function g(v){let _=v.target;_.removeEventListener("dispose",g);let x=a.indexOf(_.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(let v in s)i.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}var Zb,Qb,ex,tx,nx,ix,sx,rx,ax,ox,cx,lx,hx,ux,dx,fx,px,mx,gx,bx,xx,vx,_x,yx,Mx,Sx,Tx,wx,Ex,Ax,Rx,Cx,Px,Ix,kx,Lx,Dx,Nx,Ux,zx,Fx,Ox,Bx,Hx,Vx,Gx,Wx,qx,Xx,jx,$x,Yx,Kx,Jx,Zx,Qx,ev,tv,nv,iv,sv,rv,av,ov,cv,lv,hv,uv,dv,fv,pv,mv,gv,bv,xv,vv,_v,yv,Mv,Sv,Tv,wv,Ev,Av,Rv,Cv,Pv,Iv,kv,Lv,Dv,Nv,Uv,zv,Fv,Ov,Bv,Hv,Vv,Gv,Wv,qv,Xv,jv,$v,Yv,Kv,Jv,Zv,Qv,e_,t_,n_,i_,s_,r_,a_,o_,c_,l_,h_,u_,d_,f_,p_,m_,g_,b_,x_,v_,__,y_,M_,S_,T_,w_,E_,A_,R_,C_,P_,Xe,ce,Ai,ih,rr,I_,da,Mm,cr,bd,Sm,xd,vd,_d,yd,or,ua,Tm,F_,ah,Xm,Rm,jm,$m,Ym,Cm,Pm,Im,km,Lm,Sd,Td,wd,Md,fa,Ny,Uy,Um,rh,qy,Xy,$y,n1,Ad,Rd,l1,f1,p1,g1,_1,y1,Cd,Pd,ar,M1,oh,zt=Ds(()=>{gd();gd();Zb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qb=`#ifdef USE_ALPHAHASH
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
#endif`,ex=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ix=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sx=`#ifdef USE_AOMAP
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
#endif`,rx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ax=`#ifdef USE_BATCHING
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
#endif`,ox=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ux=`#ifdef USE_IRIDESCENCE
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
#endif`,dx=`#ifdef USE_BUMPMAP
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
#endif`,fx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,px=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_x=`#if defined( USE_COLOR_ALPHA )
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
#endif`,yx=`#define PI 3.141592653589793
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
} // validated`,Mx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Sx=`vec3 transformedNormal = objectNormal;
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
#endif`,Tx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ex=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ax=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Px=`#ifdef USE_ENVMAP
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
#endif`,Ix=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kx=`#ifdef USE_ENVMAP
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
#endif`,Lx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dx=`#ifdef USE_ENVMAP
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
#endif`,Nx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ux=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ox=`#ifdef USE_GRADIENTMAP
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
}`,Bx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gx=`uniform bool receiveShadow;
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
#endif`,Wx=`#ifdef USE_ENVMAP
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
#endif`,qx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$x=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yx=`PhysicalMaterial material;
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
#endif`,Kx=`struct PhysicalMaterial {
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
}`,Jx=`
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
#endif`,Zx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Qx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ev=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,av=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ov=`#if defined( USE_POINTS_UV )
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
#endif`,cv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,uv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fv=`#ifdef USE_MORPHTARGETS
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
#endif`,pv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,bv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_v=`#ifdef USE_NORMALMAP
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
#endif`,yv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ev=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Av=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Iv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Nv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Uv=`float getShadowMask() {
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
}`,zv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fv=`#ifdef USE_SKINNING
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
#endif`,Ov=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bv=`#ifdef USE_SKINNING
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
#endif`,Hv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qv=`#ifdef USE_TRANSMISSION
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
#endif`,Xv=`#ifdef USE_TRANSMISSION
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
#endif`,jv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$v=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Jv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zv=`uniform sampler2D t2D;
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
}`,Qv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,t_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i_=`#include <common>
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
}`,s_=`#if DEPTH_PACKING == 3200
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
}`,r_=`#define DISTANCE
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
}`,a_=`#define DISTANCE
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
}`,o_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,c_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l_=`uniform float scale;
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
}`,h_=`uniform vec3 diffuse;
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
}`,u_=`#include <common>
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
}`,d_=`uniform vec3 diffuse;
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
}`,f_=`#define LAMBERT
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
}`,p_=`#define LAMBERT
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
}`,m_=`#define MATCAP
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
}`,g_=`#define MATCAP
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
}`,b_=`#define NORMAL
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
}`,x_=`#define NORMAL
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
}`,v_=`#define PHONG
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
}`,__=`#define PHONG
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
}`,y_=`#define STANDARD
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
}`,M_=`#define STANDARD
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
}`,S_=`#define TOON
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
}`,T_=`#define TOON
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
}`,w_=`uniform float size;
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
}`,E_=`uniform vec3 diffuse;
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
}`,A_=`#include <common>
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
}`,R_=`uniform vec3 color;
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
}`,C_=`uniform float rotation;
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
}`,P_=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:Zb,alphahash_pars_fragment:Qb,alphamap_fragment:ex,alphamap_pars_fragment:tx,alphatest_fragment:nx,alphatest_pars_fragment:ix,aomap_fragment:sx,aomap_pars_fragment:rx,batching_pars_vertex:ax,batching_vertex:ox,begin_vertex:cx,beginnormal_vertex:lx,bsdfs:hx,iridescence_fragment:ux,bumpmap_pars_fragment:dx,clipping_planes_fragment:fx,clipping_planes_pars_fragment:px,clipping_planes_pars_vertex:mx,clipping_planes_vertex:gx,color_fragment:bx,color_pars_fragment:xx,color_pars_vertex:vx,color_vertex:_x,common:yx,cube_uv_reflection_fragment:Mx,defaultnormal_vertex:Sx,displacementmap_pars_vertex:Tx,displacementmap_vertex:wx,emissivemap_fragment:Ex,emissivemap_pars_fragment:Ax,colorspace_fragment:Rx,colorspace_pars_fragment:Cx,envmap_fragment:Px,envmap_common_pars_fragment:Ix,envmap_pars_fragment:kx,envmap_pars_vertex:Lx,envmap_physical_pars_fragment:Wx,envmap_vertex:Dx,fog_vertex:Nx,fog_pars_vertex:Ux,fog_fragment:zx,fog_pars_fragment:Fx,gradientmap_pars_fragment:Ox,lightmap_pars_fragment:Bx,lights_lambert_fragment:Hx,lights_lambert_pars_fragment:Vx,lights_pars_begin:Gx,lights_toon_fragment:qx,lights_toon_pars_fragment:Xx,lights_phong_fragment:jx,lights_phong_pars_fragment:$x,lights_physical_fragment:Yx,lights_physical_pars_fragment:Kx,lights_fragment_begin:Jx,lights_fragment_maps:Zx,lights_fragment_end:Qx,logdepthbuf_fragment:ev,logdepthbuf_pars_fragment:tv,logdepthbuf_pars_vertex:nv,logdepthbuf_vertex:iv,map_fragment:sv,map_pars_fragment:rv,map_particle_fragment:av,map_particle_pars_fragment:ov,metalnessmap_fragment:cv,metalnessmap_pars_fragment:lv,morphinstance_vertex:hv,morphcolor_vertex:uv,morphnormal_vertex:dv,morphtarget_pars_vertex:fv,morphtarget_vertex:pv,normal_fragment_begin:mv,normal_fragment_maps:gv,normal_pars_fragment:bv,normal_pars_vertex:xv,normal_vertex:vv,normalmap_pars_fragment:_v,clearcoat_normal_fragment_begin:yv,clearcoat_normal_fragment_maps:Mv,clearcoat_pars_fragment:Sv,iridescence_pars_fragment:Tv,opaque_fragment:wv,packing:Ev,premultiplied_alpha_fragment:Av,project_vertex:Rv,dithering_fragment:Cv,dithering_pars_fragment:Pv,roughnessmap_fragment:Iv,roughnessmap_pars_fragment:kv,shadowmap_pars_fragment:Lv,shadowmap_pars_vertex:Dv,shadowmap_vertex:Nv,shadowmask_pars_fragment:Uv,skinbase_vertex:zv,skinning_pars_vertex:Fv,skinning_vertex:Ov,skinnormal_vertex:Bv,specularmap_fragment:Hv,specularmap_pars_fragment:Vv,tonemapping_fragment:Gv,tonemapping_pars_fragment:Wv,transmission_fragment:qv,transmission_pars_fragment:Xv,uv_pars_fragment:jv,uv_pars_vertex:$v,uv_vertex:Yv,worldpos_vertex:Kv,background_vert:Jv,background_frag:Zv,backgroundCube_vert:Qv,backgroundCube_frag:e_,cube_vert:t_,cube_frag:n_,depth_vert:i_,depth_frag:s_,distanceRGBA_vert:r_,distanceRGBA_frag:a_,equirect_vert:o_,equirect_frag:c_,linedashed_vert:l_,linedashed_frag:h_,meshbasic_vert:u_,meshbasic_frag:d_,meshlambert_vert:f_,meshlambert_frag:p_,meshmatcap_vert:m_,meshmatcap_frag:g_,meshnormal_vert:b_,meshnormal_frag:x_,meshphong_vert:v_,meshphong_frag:__,meshphysical_vert:y_,meshphysical_frag:M_,meshtoon_vert:S_,meshtoon_frag:T_,points_vert:w_,points_frag:E_,shadow_vert:A_,shadow_frag:R_,sprite_vert:C_,sprite_frag:P_},ce={common:{diffuse:{value:new re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new re(16777215)},opacity:{value:1},center:{value:new ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},Ai={basic:{uniforms:mn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:mn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new re(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:mn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new re(0)},specular:{value:new re(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:mn([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:mn([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new re(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:mn([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:mn([ce.points,ce.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:mn([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:mn([ce.common,ce.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:mn([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:mn([ce.sprite,ce.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:mn([ce.common,ce.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:mn([ce.lights,ce.fog,{color:{value:new re(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};Ai.physical={uniforms:mn([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new re(0)},specularColor:{value:new re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};ih={r:0,b:0,g:0},rr=new ui,I_=new Ie;da=4,Mm=[.125,.215,.35,.446,.526,.582],cr=20,bd=new Ki,Sm=new re,xd=null,vd=0,_d=0,yd=!1,or=(1+Math.sqrt(5))/2,ua=1/or,Tm=[new P(-or,ua,0),new P(or,ua,0),new P(-ua,0,or),new P(ua,0,or),new P(0,or,-ua),new P(0,or,ua),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],F_=new P,ah=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=F_}=r;xd=this._renderer.getRenderTarget(),vd=this._renderer.getActiveCubeFace(),_d=this._renderer.getActiveMipmapLevel(),yd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Am(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Em(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(xd,vd,_d),this._renderer.xr.enabled=yd,e.scissorTest=!1,sh(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===tr||e.mapping===nr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xd=this._renderer.getRenderTarget(),vd=this._renderer.getActiveCubeFace(),_d=this._renderer.getActiveMipmapLevel(),yd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:un,format:yn,colorSpace:hn,depthBuffer:!1},s=wm(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wm(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=O_(r)),this._blurMaterial=B_(r,e,t)}return s}_compileMaterial(e){let t=new Oe(this._lodPlanes[0],e);this._renderer.compile(t,bd)}_sceneToCubeUV(e,t,n,s,r){let c=new $t(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Sm),u.toneMapping=Zi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let b=new yt({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1}),g=new Oe(new Zr,b),p=!1,v=e.background;v?v.isColor&&(b.color.copy(v),e.background=null,p=!0):(b.color.copy(Sm),p=!0);for(let _=0;_<6;_++){let x=_%3;x===0?(c.up.set(0,l[_],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[_],r.y,r.z)):x===1?(c.up.set(0,0,l[_]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[_],r.z)):(c.up.set(0,l[_],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[_]));let w=this._cubeSize;sh(s,x*w,_>2?w:0,w,w),u.setRenderTarget(s),p&&u.render(g,c),u.render(e,c)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=v}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===tr||e.mapping===nr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Am()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Em());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Oe(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;sh(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,bd)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Tm[(s-r-1)%Tm.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Oe(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*cr-1),b=r/m,g=isFinite(r)?1+Math.floor(h*b):cr;g>cr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${cr}`);let p=[],v=0;for(let R=0;R<cr;++R){let I=R/b,S=Math.exp(-I*I/2);p.push(S),R===0?v+=S:R<g&&(v+=2*S)}for(let R=0;R<p.length;R++)p[R]=p[R]/v;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:_}=this;d.dTheta.value=m,d.mipInt.value=_-n;let x=this._sizeLods[s],w=3*x*(s>_-da?s-_+da:0),E=4*(this._cubeSize-x);sh(t,w,E,3*x,2*x),c.setRenderTarget(t),c.render(u,bd)}};Xm=new rn,Rm=new js(1,1),jm=new Ga,$m=new Oc,Ym=new ja,Cm=[],Pm=[],Im=new Float32Array(16),km=new Float32Array(9),Lm=new Float32Array(4);Sd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=fy(t.type)}},Td=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ly(t.type)}},wd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Md=/(\w+)(\])?(\[|\.)?/g;fa=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Dy(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};Ny=37297,Uy=0;Um=new qe;rh=new P;qy=/^[ \t]*#include +<([\w\d./]+)>/gm;Xy=new Map;$y=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;n1=0,Ad=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Rd(e),t.set(e,n)),n}},Rd=class{constructor(e){this.id=n1++,this.code=e,this.usedTimes=0}};l1=0;f1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,p1=`uniform sampler2D shadow_pass;
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
}`;g1={[il]:sl,[rl]:aa,[al]:cl,[Hs]:ol,[sl]:il,[aa]:rl,[cl]:al,[ol]:Hs};_1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,y1=`
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

}`,Cd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new eo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new it({vertexShader:_1,fragmentShader:y1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Oe(new Hn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Pd=class extends _i{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,m=null,b=typeof XRWebGLBinding<"u",g=new Cd,p={},v=t.getContextAttributes(),_=null,x=null,w=[],E=[],R=new ye,I=null,S=new $t;S.viewport=new at;let y=new $t;y.viewport=new at;let C=[S,y],D=new Zc,F=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let Y=w[j];return Y===void 0&&(Y=new Qr,w[j]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(j){let Y=w[j];return Y===void 0&&(Y=new Qr,w[j]=Y),Y.getGripSpace()},this.getHand=function(j){let Y=w[j];return Y===void 0&&(Y=new Qr,w[j]=Y),Y.getHandSpace()};function X(j){let Y=E.indexOf(j.inputSource);if(Y===-1)return;let de=w[Y];de!==void 0&&(de.update(j.inputSource,j.frame,l||a),de.dispatchEvent({type:j.type,data:j.inputSource}))}function W(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",ee);for(let j=0;j<w.length;j++){let Y=E[j];Y!==null&&(E[j]=null,w[j].disconnect(Y))}F=null,H=null,g.reset();for(let j in p)delete p[j];e.setRenderTarget(_),f=null,d=null,u=null,s=null,x=null,et.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&b&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(_=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",W),s.addEventListener("inputsourceschange",ee),v.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(R),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,Ce=null,ge=null;v.depth&&(ge=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=v.stencil?Ss:jr,Ce=v.stencil?Ms:ys);let Ye={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Ye),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new qt(d.textureWidth,d.textureHeight,{format:yn,type:Gn,depthTexture:new js(d.textureWidth,d.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let de={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,de),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new qt(f.framebufferWidth,f.framebufferHeight,{format:yn,type:Gn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),et.setContext(s),et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ee(j){for(let Y=0;Y<j.removed.length;Y++){let de=j.removed[Y],Ce=E.indexOf(de);Ce>=0&&(E[Ce]=null,w[Ce].disconnect(de))}for(let Y=0;Y<j.added.length;Y++){let de=j.added[Y],Ce=E.indexOf(de);if(Ce===-1){for(let Ye=0;Ye<w.length;Ye++)if(Ye>=E.length){E.push(de),Ce=Ye;break}else if(E[Ye]===null){E[Ye]=de,Ce=Ye;break}if(Ce===-1)break}let ge=w[Ce];ge&&ge.connect(de)}}let V=new P,Z=new P;function le(j,Y,de){V.setFromMatrixPosition(Y.matrixWorld),Z.setFromMatrixPosition(de.matrixWorld);let Ce=V.distanceTo(Z),ge=Y.projectionMatrix.elements,Ye=de.projectionMatrix.elements,Xt=ge[14]/(ge[10]-1),k=ge[14]/(ge[10]+1),pt=(ge[9]+1)/ge[5],He=(ge[9]-1)/ge[5],Le=(ge[8]-1)/ge[0],xe=(Ye[8]+1)/Ye[0],mt=Xt*Le,ve=Xt*xe,Ge=Ce/(-Le+xe),Vt=Ge*-Le;if(Y.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Vt),j.translateZ(Ge),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),ge[10]===-1)j.projectionMatrix.copy(Y.projectionMatrix),j.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{let At=Xt+Ge,A=k+Ge,M=mt-Vt,z=ve+(Ce-Vt),q=pt*k/A*At,K=He*k/A*At;j.projectionMatrix.makePerspective(M,z,q,K,At,A),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function Me(j,Y){Y===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(Y.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let Y=j.near,de=j.far;g.texture!==null&&(g.depthNear>0&&(Y=g.depthNear),g.depthFar>0&&(de=g.depthFar)),D.near=y.near=S.near=Y,D.far=y.far=S.far=de,(F!==D.near||H!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),F=D.near,H=D.far),D.layers.mask=j.layers.mask|6,S.layers.mask=D.layers.mask&3,y.layers.mask=D.layers.mask&5;let Ce=j.parent,ge=D.cameras;Me(D,Ce);for(let Ye=0;Ye<ge.length;Ye++)Me(ge[Ye],Ce);ge.length===2?le(D,S,y):D.projectionMatrix.copy(S.projectionMatrix),Ve(j,D,Ce)};function Ve(j,Y,de){de===null?j.matrix.copy(Y.matrixWorld):(j.matrix.copy(de.matrixWorld),j.matrix.invert(),j.matrix.multiply(Y.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(Y.projectionMatrix),j.projectionMatrixInverse.copy(Y.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Ws*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(j){c=j,d!==null&&(d.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(D)},this.getCameraTexture=function(j){return p[j]};let ot=null;function dt(j,Y){if(h=Y.getViewerPose(l||a),m=Y,h!==null){let de=h.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let Ce=!1;de.length!==D.cameras.length&&(D.cameras.length=0,Ce=!0);for(let k=0;k<de.length;k++){let pt=de[k],He=null;if(f!==null)He=f.getViewport(pt);else{let xe=u.getViewSubImage(d,pt);He=xe.viewport,k===0&&(e.setRenderTargetTextures(x,xe.colorTexture,xe.depthStencilTexture),e.setRenderTarget(x))}let Le=C[k];Le===void 0&&(Le=new $t,Le.layers.enable(k),Le.viewport=new at,C[k]=Le),Le.matrix.fromArray(pt.transform.matrix),Le.matrix.decompose(Le.position,Le.quaternion,Le.scale),Le.projectionMatrix.fromArray(pt.projectionMatrix),Le.projectionMatrixInverse.copy(Le.projectionMatrix).invert(),Le.viewport.set(He.x,He.y,He.width,He.height),k===0&&(D.matrix.copy(Le.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Ce===!0&&D.cameras.push(Le)}let ge=s.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){u=n.getBinding();let k=u.getDepthInformation(de[0]);k&&k.isValid&&k.texture&&g.init(k,s.renderState)}if(ge&&ge.includes("camera-access")&&b){e.state.unbindTexture(),u=n.getBinding();for(let k=0;k<de.length;k++){let pt=de[k].camera;if(pt){let He=p[pt];He||(He=new eo,p[pt]=He);let Le=u.getCameraImage(pt);He.sourceTexture=Le}}}}for(let de=0;de<w.length;de++){let Ce=E[de],ge=w[de];Ce!==null&&ge!==void 0&&ge.update(Ce,Y,l||a)}ot&&ot(j,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),m=null}let et=new qm;et.setAnimationLoop(dt),this.setAnimationLoop=function(j){ot=j},this.dispose=function(){}}},ar=new ui,M1=new Ie;oh=class{constructor(e={}){let{canvas:t=bm(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let m=new Uint32Array(4),b=new Int32Array(4),g=null,p=null,v=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let x=this,w=!1;this._outputColorSpace=Ut;let E=0,R=0,I=null,S=-1,y=null,C=new at,D=new at,F=null,H=new re(0),X=0,W=t.width,ee=t.height,V=1,Z=null,le=null,Me=new at(0,0,W,ee),Ve=new at(0,0,W,ee),ot=!1,dt=new ia,et=!1,j=!1,Y=new Ie,de=new P,Ce=new at,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ye=!1;function Xt(){return I===null?V:1}let k=n;function pt(T,N){return t.getContext(T,N)}try{let T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",_e,!1),t.addEventListener("webglcontextcreationerror",Q,!1),k===null){let N="webgl2";if(k=pt(N,T),k===null)throw pt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let He,Le,xe,mt,ve,Ge,Vt,At,A,M,z,q,K,G,Se,ie,be,Ee,te,he,Ne,Ae,oe,ze;function L(){He=new V_(k),He.init(),Ae=new v1(k,He),Le=new N_(k,He,e,Ae),xe=new b1(k,He),Le.reversedDepthBuffer&&d&&xe.buffers.depth.setReversed(!0),mt=new q_(k),ve=new s1,Ge=new x1(k,He,xe,ve,Le,Ae,mt),Vt=new z_(x),At=new H_(x),A=new Jb(k),oe=new L_(k,A),M=new G_(k,A,mt,oe),z=new j_(k,M,A,mt),te=new X_(k,Le,Ge),ie=new U_(ve),q=new i1(x,Vt,At,He,Le,oe,ie),K=new S1(x,ve),G=new a1,Se=new d1(He),Ee=new k_(x,Vt,At,xe,z,f,c),be=new m1(x,z,Le),ze=new T1(k,mt,Le,xe),he=new D_(k,He,mt),Ne=new W_(k,He,mt),mt.programs=q.programs,x.capabilities=Le,x.extensions=He,x.properties=ve,x.renderLists=G,x.shadowMap=be,x.state=xe,x.info=mt}L();let J=new Pd(x,k);this.xr=J,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let T=He.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=He.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(T){T!==void 0&&(V=T,this.setSize(W,ee,!1))},this.getSize=function(T){return T.set(W,ee)},this.setSize=function(T,N,O=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=T,ee=N,t.width=Math.floor(T*V),t.height=Math.floor(N*V),O===!0&&(t.style.width=T+"px",t.style.height=N+"px"),this.setViewport(0,0,T,N)},this.getDrawingBufferSize=function(T){return T.set(W*V,ee*V).floor()},this.setDrawingBufferSize=function(T,N,O){W=T,ee=N,V=O,t.width=Math.floor(T*O),t.height=Math.floor(N*O),this.setViewport(0,0,T,N)},this.getCurrentViewport=function(T){return T.copy(C)},this.getViewport=function(T){return T.copy(Me)},this.setViewport=function(T,N,O,B){T.isVector4?Me.set(T.x,T.y,T.z,T.w):Me.set(T,N,O,B),xe.viewport(C.copy(Me).multiplyScalar(V).round())},this.getScissor=function(T){return T.copy(Ve)},this.setScissor=function(T,N,O,B){T.isVector4?Ve.set(T.x,T.y,T.z,T.w):Ve.set(T,N,O,B),xe.scissor(D.copy(Ve).multiplyScalar(V).round())},this.getScissorTest=function(){return ot},this.setScissorTest=function(T){xe.setScissorTest(ot=T)},this.setOpaqueSort=function(T){Z=T},this.setTransparentSort=function(T){le=T},this.getClearColor=function(T){return T.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(T=!0,N=!0,O=!0){let B=0;if(T){let U=!1;if(I!==null){let ne=I.texture.format;U=ne===Tl||ne===Sl||ne===Ml}if(U){let ne=I.texture.type,ue=ne===Gn||ne===ys||ne===la||ne===Ms||ne===vl||ne===_l,Te=Ee.getClearColor(),me=Ee.getClearAlpha(),Ue=Te.r,Fe=Te.g,Pe=Te.b;ue?(m[0]=Ue,m[1]=Fe,m[2]=Pe,m[3]=me,k.clearBufferuiv(k.COLOR,0,m)):(b[0]=Ue,b[1]=Fe,b[2]=Pe,b[3]=me,k.clearBufferiv(k.COLOR,0,b))}else B|=k.COLOR_BUFFER_BIT}N&&(B|=k.DEPTH_BUFFER_BIT),O&&(B|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",_e,!1),t.removeEventListener("webglcontextcreationerror",Q,!1),Ee.dispose(),G.dispose(),Se.dispose(),ve.dispose(),Vt.dispose(),At.dispose(),z.dispose(),oe.dispose(),ze.dispose(),q.dispose(),J.dispose(),J.removeEventListener("sessionstart",gi),J.removeEventListener("sessionend",Kf),ks.stop()};function se(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function _e(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let T=mt.autoReset,N=be.enabled,O=be.autoUpdate,B=be.needsUpdate,U=be.type;L(),mt.autoReset=T,be.enabled=N,be.autoUpdate=O,be.needsUpdate=B,be.type=U}function Q(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function $(T){let N=T.target;N.removeEventListener("dispose",$),we(N)}function we(T){We(T),ve.remove(T)}function We(T){let N=ve.get(T).programs;N!==void 0&&(N.forEach(function(O){q.releaseProgram(O)}),T.isShaderMaterial&&q.releaseShaderCache(T))}this.renderBufferDirect=function(T,N,O,B,U,ne){N===null&&(N=ge);let ue=U.isMesh&&U.matrixWorld.determinant()<0,Te=Vg(T,N,O,B,U);xe.setMaterial(B,ue);let me=O.index,Ue=1;if(B.wireframe===!0){if(me=M.getWireframeAttribute(O),me===void 0)return;Ue=2}let Fe=O.drawRange,Pe=O.attributes.position,Ze=Fe.start*Ue,gt=(Fe.start+Fe.count)*Ue;ne!==null&&(Ze=Math.max(Ze,ne.start*Ue),gt=Math.min(gt,(ne.start+ne.count)*Ue)),me!==null?(Ze=Math.max(Ze,0),gt=Math.min(gt,me.count)):Pe!=null&&(Ze=Math.max(Ze,0),gt=Math.min(gt,Pe.count));let Gt=gt-Ze;if(Gt<0||Gt===1/0)return;oe.setup(U,B,Te,O,me);let Rt,_t=he;if(me!==null&&(Rt=A.get(me),_t=Ne,_t.setIndex(Rt)),U.isMesh)B.wireframe===!0?(xe.setLineWidth(B.wireframeLinewidth*Xt()),_t.setMode(k.LINES)):_t.setMode(k.TRIANGLES);else if(U.isLine){let De=B.linewidth;De===void 0&&(De=1),xe.setLineWidth(De*Xt()),U.isLineSegments?_t.setMode(k.LINES):U.isLineLoop?_t.setMode(k.LINE_LOOP):_t.setMode(k.LINE_STRIP)}else U.isPoints?_t.setMode(k.POINTS):U.isSprite&&_t.setMode(k.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Yr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),_t.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(He.get("WEBGL_multi_draw"))_t.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let De=U._multiDrawStarts,Dt=U._multiDrawCounts,rt=U._multiDrawCount,Nn=me?A.get(me).bytesPerElement:1,Pr=ve.get(B).currentProgram.getUniforms();for(let Un=0;Un<rt;Un++)Pr.setValue(k,"_gl_DrawID",Un),_t.render(De[Un]/Nn,Dt[Un])}else if(U.isInstancedMesh)_t.renderInstances(Ze,Gt,U.count);else if(O.isInstancedBufferGeometry){let De=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,Dt=Math.min(O.instanceCount,De);_t.renderInstances(Ze,Gt,Dt)}else _t.render(Ze,Gt)};function Tt(T,N,O){T.transparent===!0&&T.side===Kt&&T.forceSinglePass===!1?(T.side=_n,T.needsUpdate=!0,cc(T,N,O),T.side=hi,T.needsUpdate=!0,cc(T,N,O),T.side=Kt):cc(T,N,O)}this.compile=function(T,N,O=null){O===null&&(O=T),p=Se.get(O),p.init(N),_.push(p),O.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),T!==O&&T.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();let B=new Set;return T.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let ne=U.material;if(ne)if(Array.isArray(ne))for(let ue=0;ue<ne.length;ue++){let Te=ne[ue];Tt(Te,O,U),B.add(Te)}else Tt(ne,O,U),B.add(ne)}),p=_.pop(),B},this.compileAsync=function(T,N,O=null){let B=this.compile(T,N,O);return new Promise(U=>{function ne(){if(B.forEach(function(ue){ve.get(ue).currentProgram.isReady()&&B.delete(ue)}),B.size===0){U(T);return}setTimeout(ne,10)}He.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let ht=null;function Ui(T){ht&&ht(T)}function gi(){ks.stop()}function Kf(){ks.start()}let ks=new qm;ks.setAnimationLoop(Ui),typeof self<"u"&&ks.setContext(self),this.setAnimationLoop=function(T){ht=T,J.setAnimationLoop(T),T===null?ks.stop():ks.start()},J.addEventListener("sessionstart",gi),J.addEventListener("sessionend",Kf),this.render=function(T,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(N),N=J.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,N,I),p=Se.get(T,_.length),p.init(N),_.push(p),Y.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),dt.setFromProjectionMatrix(Y,ci,N.reversedDepth),j=this.localClippingEnabled,et=ie.init(this.clippingPlanes,j),g=G.get(T,v.length),g.init(),v.push(g),J.enabled===!0&&J.isPresenting===!0){let ne=x.xr.getDepthSensingMesh();ne!==null&&cu(ne,N,-1/0,x.sortObjects)}cu(T,N,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(Z,le),Ye=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,Ye&&Ee.addToRenderList(g,T),this.info.render.frame++,et===!0&&ie.beginShadows();let O=p.state.shadowsArray;be.render(O,T,N),et===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();let B=g.opaque,U=g.transmissive;if(p.setupLights(),N.isArrayCamera){let ne=N.cameras;if(U.length>0)for(let ue=0,Te=ne.length;ue<Te;ue++){let me=ne[ue];Zf(B,U,T,me)}Ye&&Ee.render(T);for(let ue=0,Te=ne.length;ue<Te;ue++){let me=ne[ue];Jf(g,T,me,me.viewport)}}else U.length>0&&Zf(B,U,T,N),Ye&&Ee.render(T),Jf(g,T,N);I!==null&&R===0&&(Ge.updateMultisampleRenderTarget(I),Ge.updateRenderTargetMipmap(I)),T.isScene===!0&&T.onAfterRender(x,T,N),oe.resetDefaultState(),S=-1,y=null,_.pop(),_.length>0?(p=_[_.length-1],et===!0&&ie.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?g=v[v.length-1]:g=null};function cu(T,N,O,B){if(T.visible===!1)return;if(T.layers.test(N.layers)){if(T.isGroup)O=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(N);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||dt.intersectsSprite(T)){B&&Ce.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Y);let ue=z.update(T),Te=T.material;Te.visible&&g.push(T,ue,Te,O,Ce.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||dt.intersectsObject(T))){let ue=z.update(T),Te=T.material;if(B&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ce.copy(T.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),Ce.copy(ue.boundingSphere.center)),Ce.applyMatrix4(T.matrixWorld).applyMatrix4(Y)),Array.isArray(Te)){let me=ue.groups;for(let Ue=0,Fe=me.length;Ue<Fe;Ue++){let Pe=me[Ue],Ze=Te[Pe.materialIndex];Ze&&Ze.visible&&g.push(T,ue,Ze,O,Ce.z,Pe)}}else Te.visible&&g.push(T,ue,Te,O,Ce.z,null)}}let ne=T.children;for(let ue=0,Te=ne.length;ue<Te;ue++)cu(ne[ue],N,O,B)}function Jf(T,N,O,B){let U=T.opaque,ne=T.transmissive,ue=T.transparent;p.setupLightsView(O),et===!0&&ie.setGlobalState(x.clippingPlanes,O),B&&xe.viewport(C.copy(B)),U.length>0&&oc(U,N,O),ne.length>0&&oc(ne,N,O),ue.length>0&&oc(ue,N,O),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function Zf(T,N,O,B){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[B.id]===void 0&&(p.state.transmissionRenderTarget[B.id]=new qt(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float")?un:Gn,minFilter:fi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace}));let ne=p.state.transmissionRenderTarget[B.id],ue=B.viewport||C;ne.setSize(ue.z*x.transmissionResolutionScale,ue.w*x.transmissionResolutionScale);let Te=x.getRenderTarget(),me=x.getActiveCubeFace(),Ue=x.getActiveMipmapLevel();x.setRenderTarget(ne),x.getClearColor(H),X=x.getClearAlpha(),X<1&&x.setClearColor(16777215,.5),x.clear(),Ye&&Ee.render(O);let Fe=x.toneMapping;x.toneMapping=Zi;let Pe=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),p.setupLightsView(B),et===!0&&ie.setGlobalState(x.clippingPlanes,B),oc(T,O,B),Ge.updateMultisampleRenderTarget(ne),Ge.updateRenderTargetMipmap(ne),He.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let gt=0,Gt=N.length;gt<Gt;gt++){let Rt=N[gt],_t=Rt.object,De=Rt.geometry,Dt=Rt.material,rt=Rt.group;if(Dt.side===Kt&&_t.layers.test(B.layers)){let Nn=Dt.side;Dt.side=_n,Dt.needsUpdate=!0,Qf(_t,O,B,De,Dt,rt),Dt.side=Nn,Dt.needsUpdate=!0,Ze=!0}}Ze===!0&&(Ge.updateMultisampleRenderTarget(ne),Ge.updateRenderTargetMipmap(ne))}x.setRenderTarget(Te,me,Ue),x.setClearColor(H,X),Pe!==void 0&&(B.viewport=Pe),x.toneMapping=Fe}function oc(T,N,O){let B=N.isScene===!0?N.overrideMaterial:null;for(let U=0,ne=T.length;U<ne;U++){let ue=T[U],Te=ue.object,me=ue.geometry,Ue=ue.group,Fe=ue.material;Fe.allowOverride===!0&&B!==null&&(Fe=B),Te.layers.test(O.layers)&&Qf(Te,N,O,me,Fe,Ue)}}function Qf(T,N,O,B,U,ne){T.onBeforeRender(x,N,O,B,U,ne),T.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),U.onBeforeRender(x,N,O,B,T,ne),U.transparent===!0&&U.side===Kt&&U.forceSinglePass===!1?(U.side=_n,U.needsUpdate=!0,x.renderBufferDirect(O,N,B,U,T,ne),U.side=hi,U.needsUpdate=!0,x.renderBufferDirect(O,N,B,U,T,ne),U.side=Kt):x.renderBufferDirect(O,N,B,U,T,ne),T.onAfterRender(x,N,O,B,U,ne)}function cc(T,N,O){N.isScene!==!0&&(N=ge);let B=ve.get(T),U=p.state.lights,ne=p.state.shadowsArray,ue=U.state.version,Te=q.getParameters(T,U.state,ne,N,O),me=q.getProgramCacheKey(Te),Ue=B.programs;B.environment=T.isMeshStandardMaterial?N.environment:null,B.fog=N.fog,B.envMap=(T.isMeshStandardMaterial?At:Vt).get(T.envMap||B.environment),B.envMapRotation=B.environment!==null&&T.envMap===null?N.environmentRotation:T.envMapRotation,Ue===void 0&&(T.addEventListener("dispose",$),Ue=new Map,B.programs=Ue);let Fe=Ue.get(me);if(Fe!==void 0){if(B.currentProgram===Fe&&B.lightsStateVersion===ue)return tp(T,Te),Fe}else Te.uniforms=q.getUniforms(T),T.onBeforeCompile(Te,x),Fe=q.acquireProgram(Te,me),Ue.set(me,Fe),B.uniforms=Te.uniforms;let Pe=B.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Pe.clippingPlanes=ie.uniform),tp(T,Te),B.needsLights=Wg(T),B.lightsStateVersion=ue,B.needsLights&&(Pe.ambientLightColor.value=U.state.ambient,Pe.lightProbe.value=U.state.probe,Pe.directionalLights.value=U.state.directional,Pe.directionalLightShadows.value=U.state.directionalShadow,Pe.spotLights.value=U.state.spot,Pe.spotLightShadows.value=U.state.spotShadow,Pe.rectAreaLights.value=U.state.rectArea,Pe.ltc_1.value=U.state.rectAreaLTC1,Pe.ltc_2.value=U.state.rectAreaLTC2,Pe.pointLights.value=U.state.point,Pe.pointLightShadows.value=U.state.pointShadow,Pe.hemisphereLights.value=U.state.hemi,Pe.directionalShadowMap.value=U.state.directionalShadowMap,Pe.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Pe.spotShadowMap.value=U.state.spotShadowMap,Pe.spotLightMatrix.value=U.state.spotLightMatrix,Pe.spotLightMap.value=U.state.spotLightMap,Pe.pointShadowMap.value=U.state.pointShadowMap,Pe.pointShadowMatrix.value=U.state.pointShadowMatrix),B.currentProgram=Fe,B.uniformsList=null,Fe}function ep(T){if(T.uniformsList===null){let N=T.currentProgram.getUniforms();T.uniformsList=fa.seqWithValue(N.seq,T.uniforms)}return T.uniformsList}function tp(T,N){let O=ve.get(T);O.outputColorSpace=N.outputColorSpace,O.batching=N.batching,O.batchingColor=N.batchingColor,O.instancing=N.instancing,O.instancingColor=N.instancingColor,O.instancingMorph=N.instancingMorph,O.skinning=N.skinning,O.morphTargets=N.morphTargets,O.morphNormals=N.morphNormals,O.morphColors=N.morphColors,O.morphTargetsCount=N.morphTargetsCount,O.numClippingPlanes=N.numClippingPlanes,O.numIntersection=N.numClipIntersection,O.vertexAlphas=N.vertexAlphas,O.vertexTangents=N.vertexTangents,O.toneMapping=N.toneMapping}function Vg(T,N,O,B,U){N.isScene!==!0&&(N=ge),Ge.resetTextureUnits();let ne=N.fog,ue=B.isMeshStandardMaterial?N.environment:null,Te=I===null?x.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:hn,me=(B.isMeshStandardMaterial?At:Vt).get(B.envMap||ue),Ue=B.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Fe=!!O.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Pe=!!O.morphAttributes.position,Ze=!!O.morphAttributes.normal,gt=!!O.morphAttributes.color,Gt=Zi;B.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Gt=x.toneMapping);let Rt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,_t=Rt!==void 0?Rt.length:0,De=ve.get(B),Dt=p.state.lights;if(et===!0&&(j===!0||T!==y)){let gn=T===y&&B.id===S;ie.setState(B,T,gn)}let rt=!1;B.version===De.__version?(De.needsLights&&De.lightsStateVersion!==Dt.state.version||De.outputColorSpace!==Te||U.isBatchedMesh&&De.batching===!1||!U.isBatchedMesh&&De.batching===!0||U.isBatchedMesh&&De.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&De.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&De.instancing===!1||!U.isInstancedMesh&&De.instancing===!0||U.isSkinnedMesh&&De.skinning===!1||!U.isSkinnedMesh&&De.skinning===!0||U.isInstancedMesh&&De.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&De.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&De.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&De.instancingMorph===!1&&U.morphTexture!==null||De.envMap!==me||B.fog===!0&&De.fog!==ne||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==ie.numPlanes||De.numIntersection!==ie.numIntersection)||De.vertexAlphas!==Ue||De.vertexTangents!==Fe||De.morphTargets!==Pe||De.morphNormals!==Ze||De.morphColors!==gt||De.toneMapping!==Gt||De.morphTargetsCount!==_t)&&(rt=!0):(rt=!0,De.__version=B.version);let Nn=De.currentProgram;rt===!0&&(Nn=cc(B,N,U));let Pr=!1,Un=!1,Ra=!1,Nt=Nn.getUniforms(),jn=De.uniforms;if(xe.useProgram(Nn.program)&&(Pr=!0,Un=!0,Ra=!0),B.id!==S&&(S=B.id,Un=!0),Pr||y!==T){xe.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Nt.setValue(k,"projectionMatrix",T.projectionMatrix),Nt.setValue(k,"viewMatrix",T.matrixWorldInverse);let En=Nt.map.cameraPosition;En!==void 0&&En.setValue(k,de.setFromMatrixPosition(T.matrixWorld)),Le.logarithmicDepthBuffer&&Nt.setValue(k,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Nt.setValue(k,"isOrthographic",T.isOrthographicCamera===!0),y!==T&&(y=T,Un=!0,Ra=!0)}if(U.isSkinnedMesh){Nt.setOptional(k,U,"bindMatrix"),Nt.setOptional(k,U,"bindMatrixInverse");let gn=U.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),Nt.setValue(k,"boneTexture",gn.boneTexture,Ge))}U.isBatchedMesh&&(Nt.setOptional(k,U,"batchingTexture"),Nt.setValue(k,"batchingTexture",U._matricesTexture,Ge),Nt.setOptional(k,U,"batchingIdTexture"),Nt.setValue(k,"batchingIdTexture",U._indirectTexture,Ge),Nt.setOptional(k,U,"batchingColorTexture"),U._colorsTexture!==null&&Nt.setValue(k,"batchingColorTexture",U._colorsTexture,Ge));let $n=O.morphAttributes;if(($n.position!==void 0||$n.normal!==void 0||$n.color!==void 0)&&te.update(U,O,Nn),(Un||De.receiveShadow!==U.receiveShadow)&&(De.receiveShadow=U.receiveShadow,Nt.setValue(k,"receiveShadow",U.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(jn.envMap.value=me,jn.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&N.environment!==null&&(jn.envMapIntensity.value=N.environmentIntensity),Un&&(Nt.setValue(k,"toneMappingExposure",x.toneMappingExposure),De.needsLights&&Gg(jn,Ra),ne&&B.fog===!0&&K.refreshFogUniforms(jn,ne),K.refreshMaterialUniforms(jn,B,V,ee,p.state.transmissionRenderTarget[T.id]),fa.upload(k,ep(De),jn,Ge)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(fa.upload(k,ep(De),jn,Ge),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Nt.setValue(k,"center",U.center),Nt.setValue(k,"modelViewMatrix",U.modelViewMatrix),Nt.setValue(k,"normalMatrix",U.normalMatrix),Nt.setValue(k,"modelMatrix",U.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){let gn=B.uniformsGroups;for(let En=0,lu=gn.length;En<lu;En++){let Ls=gn[En];ze.update(Ls,Nn),ze.bind(Ls,Nn)}}return Nn}function Gg(T,N){T.ambientLightColor.needsUpdate=N,T.lightProbe.needsUpdate=N,T.directionalLights.needsUpdate=N,T.directionalLightShadows.needsUpdate=N,T.pointLights.needsUpdate=N,T.pointLightShadows.needsUpdate=N,T.spotLights.needsUpdate=N,T.spotLightShadows.needsUpdate=N,T.rectAreaLights.needsUpdate=N,T.hemisphereLights.needsUpdate=N}function Wg(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(T,N,O){let B=ve.get(T);B.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),ve.get(T.texture).__webglTexture=N,ve.get(T.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:O,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,N){let O=ve.get(T);O.__webglFramebuffer=N,O.__useDefaultFramebuffer=N===void 0};let qg=k.createFramebuffer();this.setRenderTarget=function(T,N=0,O=0){I=T,E=N,R=O;let B=!0,U=null,ne=!1,ue=!1;if(T){let me=ve.get(T);if(me.__useDefaultFramebuffer!==void 0)xe.bindFramebuffer(k.FRAMEBUFFER,null),B=!1;else if(me.__webglFramebuffer===void 0)Ge.setupRenderTarget(T);else if(me.__hasExternalTextures)Ge.rebindTextures(T,ve.get(T.texture).__webglTexture,ve.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Pe=T.depthTexture;if(me.__boundDepthTexture!==Pe){if(Pe!==null&&ve.has(Pe)&&(T.width!==Pe.image.width||T.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ge.setupDepthRenderbuffer(T)}}let Ue=T.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(ue=!0);let Fe=ve.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Fe[N])?U=Fe[N][O]:U=Fe[N],ne=!0):T.samples>0&&Ge.useMultisampledRTT(T)===!1?U=ve.get(T).__webglMultisampledFramebuffer:Array.isArray(Fe)?U=Fe[O]:U=Fe,C.copy(T.viewport),D.copy(T.scissor),F=T.scissorTest}else C.copy(Me).multiplyScalar(V).floor(),D.copy(Ve).multiplyScalar(V).floor(),F=ot;if(O!==0&&(U=qg),xe.bindFramebuffer(k.FRAMEBUFFER,U)&&B&&xe.drawBuffers(T,U),xe.viewport(C),xe.scissor(D),xe.setScissorTest(F),ne){let me=ve.get(T.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+N,me.__webglTexture,O)}else if(ue){let me=N;for(let Ue=0;Ue<T.textures.length;Ue++){let Fe=ve.get(T.textures[Ue]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Ue,Fe.__webglTexture,O,me)}}else if(T!==null&&O!==0){let me=ve.get(T.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,me.__webglTexture,O)}S=-1},this.readRenderTargetPixels=function(T,N,O,B,U,ne,ue,Te=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let me=ve.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ue!==void 0&&(me=me[ue]),me){xe.bindFramebuffer(k.FRAMEBUFFER,me);try{let Ue=T.textures[Te],Fe=Ue.format,Pe=Ue.type;if(!Le.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Le.textureTypeReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=T.width-B&&O>=0&&O<=T.height-U&&(T.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Te),k.readPixels(N,O,B,U,Ae.convert(Fe),Ae.convert(Pe),ne))}finally{let Ue=I!==null?ve.get(I).__webglFramebuffer:null;xe.bindFramebuffer(k.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(T,N,O,B,U,ne,ue,Te=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let me=ve.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ue!==void 0&&(me=me[ue]),me)if(N>=0&&N<=T.width-B&&O>=0&&O<=T.height-U){xe.bindFramebuffer(k.FRAMEBUFFER,me);let Ue=T.textures[Te],Fe=Ue.format,Pe=Ue.type;if(!Le.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Le.textureTypeReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ze=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Ze),k.bufferData(k.PIXEL_PACK_BUFFER,ne.byteLength,k.STREAM_READ),T.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Te),k.readPixels(N,O,B,U,Ae.convert(Fe),Ae.convert(Pe),0);let gt=I!==null?ve.get(I).__webglFramebuffer:null;xe.bindFramebuffer(k.FRAMEBUFFER,gt);let Gt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await xm(k,Gt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Ze),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,ne),k.deleteBuffer(Ze),k.deleteSync(Gt),ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,N=null,O=0){let B=Math.pow(2,-O),U=Math.floor(T.image.width*B),ne=Math.floor(T.image.height*B),ue=N!==null?N.x:0,Te=N!==null?N.y:0;Ge.setTexture2D(T,0),k.copyTexSubImage2D(k.TEXTURE_2D,O,0,0,ue,Te,U,ne),xe.unbindTexture()};let Xg=k.createFramebuffer(),jg=k.createFramebuffer();this.copyTextureToTexture=function(T,N,O=null,B=null,U=0,ne=null){ne===null&&(U!==0?(Yr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ne=U,U=0):ne=0);let ue,Te,me,Ue,Fe,Pe,Ze,gt,Gt,Rt=T.isCompressedTexture?T.mipmaps[ne]:T.image;if(O!==null)ue=O.max.x-O.min.x,Te=O.max.y-O.min.y,me=O.isBox3?O.max.z-O.min.z:1,Ue=O.min.x,Fe=O.min.y,Pe=O.isBox3?O.min.z:0;else{let $n=Math.pow(2,-U);ue=Math.floor(Rt.width*$n),Te=Math.floor(Rt.height*$n),T.isDataArrayTexture?me=Rt.depth:T.isData3DTexture?me=Math.floor(Rt.depth*$n):me=1,Ue=0,Fe=0,Pe=0}B!==null?(Ze=B.x,gt=B.y,Gt=B.z):(Ze=0,gt=0,Gt=0);let _t=Ae.convert(N.format),De=Ae.convert(N.type),Dt;N.isData3DTexture?(Ge.setTexture3D(N,0),Dt=k.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Ge.setTexture2DArray(N,0),Dt=k.TEXTURE_2D_ARRAY):(Ge.setTexture2D(N,0),Dt=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,N.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,N.unpackAlignment);let rt=k.getParameter(k.UNPACK_ROW_LENGTH),Nn=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Pr=k.getParameter(k.UNPACK_SKIP_PIXELS),Un=k.getParameter(k.UNPACK_SKIP_ROWS),Ra=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Rt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Rt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Ue),k.pixelStorei(k.UNPACK_SKIP_ROWS,Fe),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Pe);let Nt=T.isDataArrayTexture||T.isData3DTexture,jn=N.isDataArrayTexture||N.isData3DTexture;if(T.isDepthTexture){let $n=ve.get(T),gn=ve.get(N),En=ve.get($n.__renderTarget),lu=ve.get(gn.__renderTarget);xe.bindFramebuffer(k.READ_FRAMEBUFFER,En.__webglFramebuffer),xe.bindFramebuffer(k.DRAW_FRAMEBUFFER,lu.__webglFramebuffer);for(let Ls=0;Ls<me;Ls++)Nt&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ve.get(T).__webglTexture,U,Pe+Ls),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ve.get(N).__webglTexture,ne,Gt+Ls)),k.blitFramebuffer(Ue,Fe,ue,Te,Ze,gt,ue,Te,k.DEPTH_BUFFER_BIT,k.NEAREST);xe.bindFramebuffer(k.READ_FRAMEBUFFER,null),xe.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(U!==0||T.isRenderTargetTexture||ve.has(T)){let $n=ve.get(T),gn=ve.get(N);xe.bindFramebuffer(k.READ_FRAMEBUFFER,Xg),xe.bindFramebuffer(k.DRAW_FRAMEBUFFER,jg);for(let En=0;En<me;En++)Nt?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,$n.__webglTexture,U,Pe+En):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,$n.__webglTexture,U),jn?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,gn.__webglTexture,ne,Gt+En):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,gn.__webglTexture,ne),U!==0?k.blitFramebuffer(Ue,Fe,ue,Te,Ze,gt,ue,Te,k.COLOR_BUFFER_BIT,k.NEAREST):jn?k.copyTexSubImage3D(Dt,ne,Ze,gt,Gt+En,Ue,Fe,ue,Te):k.copyTexSubImage2D(Dt,ne,Ze,gt,Ue,Fe,ue,Te);xe.bindFramebuffer(k.READ_FRAMEBUFFER,null),xe.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else jn?T.isDataTexture||T.isData3DTexture?k.texSubImage3D(Dt,ne,Ze,gt,Gt,ue,Te,me,_t,De,Rt.data):N.isCompressedArrayTexture?k.compressedTexSubImage3D(Dt,ne,Ze,gt,Gt,ue,Te,me,_t,Rt.data):k.texSubImage3D(Dt,ne,Ze,gt,Gt,ue,Te,me,_t,De,Rt):T.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,ne,Ze,gt,ue,Te,_t,De,Rt.data):T.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,ne,Ze,gt,Rt.width,Rt.height,_t,Rt.data):k.texSubImage2D(k.TEXTURE_2D,ne,Ze,gt,ue,Te,_t,De,Rt);k.pixelStorei(k.UNPACK_ROW_LENGTH,rt),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Nn),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Pr),k.pixelStorei(k.UNPACK_SKIP_ROWS,Un),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ra),ne===0&&N.generateMipmaps&&k.generateMipmap(Dt),xe.unbindTexture()},this.initRenderTarget=function(T){ve.get(T).__webglFramebuffer===void 0&&Ge.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Ge.setTextureCube(T,0):T.isData3DTexture?Ge.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ge.setTexture2DArray(T,0):Ge.setTexture2D(T,0),xe.unbindTexture()},this.resetState=function(){E=0,R=0,I=null,xe.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}}});function xa(i,e,t=[],n){let s=$e[i],r=s.base,a=Math.max(1,e)-1,o={...r,atk:0,hp:0,def:0};for(let l of Ph)o[l]=Math.floor(s.attr[l]+s.grow[l]*a);for(let l of t)if(l)for(let[h,u]of Object.entries(l.stats))o[h]=(o[h]||0)+u;o.main=s.main,o.atk+=o[s.main]*Ih,o.hp+=o.vit*kh,o.def+=Math.round(r.def*(1+a*.05))+Math.floor(o.str*bf),o.crit+=o.dex*xf;let c=Ct(i,n).passive.mods;return o.hp*=1+(c.hpPct||0),o.def=Math.round(o.def*(1+(c.defPct||0))),o.atk=Math.round(o.atk*(1+(c.atkPct||0))),o.crit+=c.crit||0,o.critDmg+=c.critDmg||0,o.haste=(o.haste||0)+(c.haste||0),o.speed*=1+(c.speedPct||0),o.hp=Math.round(o.hp),o}function g0(i){let e=i.atk*(1+Math.min(1,i.crit)*(i.critDmg-1))*(1+ki(i)*.5),t=i.hp*(1+i.def/100)/12;return Math.round(e+t)}var $e,ei,ns,Ph,Ih,kh,bf,xf,dr,Ch,vf,Lh,sM,fr,ki,Ct,Oo,Es,Tn,Fo,Ot,_f,Dh,Nh,m0,pi=Ds(()=>{$e={knight:{name:"\uC131\uAE30\uC0AC",model:"Knight",show:["1H_Sword","Badge_Shield"],idle:"Idle",run:"Running_A",trail:"#ffd98a",desc:"\uBC29\uD328\uB85C \uD30C\uD2F0\uB97C \uC9C0\uD0A4\uAC70\uB098 \uC131\uAC80\uC73C\uB85C \uC801\uC744 \uBCA0\uB294 \uADFC\uC811 \uC804\uC0AC. \uAC15\uB825\uD55C \uBB34\uB825\uD654.",main:"str",attr:{str:20,dex:8,int:4,vit:28},grow:{str:1.4,dex:.4,int:.2,vit:2.24},base:{def:60,crit:.092,critDmg:2,speed:5.4,haste:0},basic:["kn_b1","kn_b2","kn_b3"]},barbarian:{name:"\uAD11\uC804\uC0AC",model:"Barbarian",show:["2H_Axe","Barbarian_Hat"],idle:"2H_Melee_Idle",run:"Running_A",trail:"#ff7a4a",desc:"\uAC70\uB300\uD55C \uB3C4\uB07C\uB97C \uD718\uB450\uB974\uB294 \uB3CC\uACA9\uD615 \uB51C\uB7EC. \uCCB4\uB825\uC774 \uB0AE\uC744\uC218\uB85D \uAC15\uD574\uC9D0.",main:"str",attr:{str:22,dex:10,int:3,vit:25},grow:{str:1.57,dex:.5,int:.1,vit:2},base:{def:34,crit:.11,critDmg:2,speed:5.5,haste:0},basic:["bb_b1","bb_b2","bb_b3"]},mage:{name:"\uB9C8\uBC95\uC0AC",model:"Mage",show:["2H_Staff","Mage_Hat"],idle:"Idle",run:"Running_B",trail:"#8fd0ff",desc:"\uC6D0\uC18C \uB9C8\uBC95\uC73C\uB85C \uC801\uC744 \uC4F8\uC5B4\uBC84\uB9AC\uAC70\uB098 \uCE58\uC720 \uB9C8\uBC95\uC73C\uB85C \uD30C\uD2F0\uB97C \uC0B4\uB9AC\uB294 \uC6D0\uAC70\uB9AC \uB9C8\uBC95\uC0AC.",main:"int",attr:{str:6,dex:10,int:24,vit:19},grow:{str:.3,dex:.5,int:1.65,vit:1.52},base:{def:27,crit:.11,critDmg:2,speed:5.3,haste:0},basic:["mg_b1","mg_b2","mg_b1"]},rogue:{name:"\uB3C4\uC801",model:"Rogue_Hooded",show:["Knife","Knife_Offhand"],idle:"Idle",run:"Running_A",trail:"#b98cff",desc:"\uC30D\uB2E8\uAC80\uC73C\uB85C \uB4F1 \uB4A4\uB97C \uB178\uB9AC\uB294 \uC554\uC0B4\uC790. \uBC31\uC5B4\uD0DD \uD53C\uD574 \uD2B9\uD654.",main:"dex",attr:{str:10,dex:21,int:5,vit:21},grow:{str:.5,dex:1.48,int:.2,vit:1.68},base:{def:35,crit:.199,critDmg:2.1,speed:5.9,haste:.1},basic:["rg_b1","rg_b2","rg_b3"]},archer:{name:"\uAD81\uC218",model:"Rogue_Hooded",show:["2H_Crossbow"],hide:["Rogue_Cape"],idle:"Idle",run:"Running_A",trail:"#a8e070",desc:"\uC11D\uAD81\uC73C\uB85C \uBA3C \uAC70\uB9AC\uC5D0\uC11C \uC801\uC744 \uAFF0\uB6AB\uB294 \uC0AC\uC218. \uAC70\uB9AC\uB97C \uBC8C\uB9AC\uBA70 \uC18D\uC0AC.",main:"dex",attr:{str:8,dex:22,int:6,vit:20},grow:{str:.4,dex:1.54,int:.3,vit:1.6},base:{def:31,crit:.138,critDmg:2.1,speed:5.6,haste:.05},basic:["ar_b1","ar_b2","ar_b1"]}},ei=Object.keys($e),ns={str:"\uD798",dex:"\uBBFC\uCCA9",int:"\uC9C0\uB2A5",vit:"\uCCB4\uB825"},Ph=Object.keys(ns),Ih=5,kh=50,bf=.5,xf=.001,dr=i=>$e[i].main==="int"?"\uB9C8\uB825":"\uACF5\uACA9\uB825",Ch={knight:[{id:"guardian",haste:"move",name:"\uC218\uD638 \uAE30\uC0AC",role:"tank",desc:"\uC801\uC758 \uACF5\uACA9\uC744 \uB04C\uC5B4\uC548\uACE0 \uD30C\uD2F0\uB97C \uC9C0\uD0A4\uB294 \uBC29\uD328.",skills:{q:"kn_q",w:"kn_taunt",e:"kn_e",r:"kn_r"},passive:{name:"\uBD88\uAD74\uC758 \uC218\uD638\uC790",desc:"\uCD5C\uB300 \uC0DD\uBA85\uB825 +35%, \uBC29\uC5B4\uB825 +60%, \uBC1B\uB294 \uD53C\uD574 -10%, \uBCF4\uD638\uB9C9 \uD6A8\uACFC +50%.",mods:{hpPct:.35,defPct:.6,dr:.1,shieldMult:1.5}}},{id:"crusader",haste:"move",name:"\uC9D5\uBC8C \uAE30\uC0AC",role:"dps",desc:"\uC131\uAC80\uC73C\uB85C \uC801\uC9C4\uC744 \uBCA0\uC5B4 \uAC00\uB974\uB294 \uACF5\uACA9\uD615 \uAE30\uC0AC.",skills:{q:"kn_q",w:"kn_w",e:"kn_holy",r:"kn_r"},passive:{name:"\uC9D5\uBC8C\uC758 \uB9F9\uC138",desc:"\uACF5\uACA9\uB825 +15%, \uCE58\uBA85\uD0C0 \uD655\uB960 +8%.",mods:{atkPct:.15,crit:.08}}}],barbarian:[{id:"berserker",haste:"move",name:"\uAD11\uC804\uC0AC",role:"dps",desc:"\uC0C1\uCC98\uAC00 \uAE4A\uC744\uC218\uB85D \uAC70\uC138\uC9C0\uB294 \uB3CC\uACA9\uD615 \uB51C\uB7EC.",skills:{q:"bb_q",w:"bb_w",e:"bb_e",r:"bb_r"},passive:{name:"\uD22C\uC9C0",desc:"\uC0DD\uBA85\uB825\uC774 50% \uC774\uD558\uC77C \uB54C \uACF5\uACA9\uB825 +20%.",mods:{lowHpAtk:.2}}},{id:"warlord",haste:"move",name:"\uC804\uC7C1\uAD70\uC8FC",role:"tank",desc:"\uD3EC\uD6A8\uB85C \uC801\uC744 \uB04C\uC5B4\uBAA8\uC73C\uACE0 \uAC15\uCCA0 \uAC19\uC740 \uBAB8\uC73C\uB85C \uBC84\uD2F0\uB294 \uC804\uC120\uC758 \uBCBD.",skills:{q:"bb_q",w:"bb_roar",e:"bb_iron",r:"bb_quake"},passive:{name:"\uAC15\uCCA0 \uC758\uC9C0",desc:"\uCD5C\uB300 \uC0DD\uBA85\uB825 +35%, \uBC29\uC5B4\uB825 +60%, \uBC1B\uB294 \uD53C\uD574 -10%.",mods:{hpPct:.35,defPct:.6,dr:.1}}}],mage:[{id:"elemental",haste:"cast",name:"\uC6D0\uC18C\uC220\uC0AC",role:"dps",desc:"\uD654\uC5FC, \uC11C\uB9AC, \uBC88\uAC1C\uB85C \uC801\uC744 \uD55C\uAEBC\uBC88\uC5D0 \uC4F8\uC5B4\uBC84\uB9BC.",skills:{q:"mg_q",w:"mg_w",e:"mg_chain",r:"mg_r"},passive:{name:"\uC6D0\uC18C \uC99D\uD3ED",desc:"\uCE58\uBA85\uD0C0 \uD53C\uD574 +30%, \uC2E0\uC18D +10%.",mods:{critDmg:.3,haste:.1}}},{id:"healer",haste:"cdr",name:"\uCE58\uC720\uC0AC",role:"heal",desc:"\uBE5B\uC73C\uB85C \uC801\uC744 \uD0DC\uC6B0\uBA70 \uD30C\uD2F0\uB97C \uD68C\uBCF5\uC2DC\uD0A4\uACE0 \uC4F0\uB7EC\uC9C4 \uB3D9\uB8CC\uB97C \uC77C\uC73C\uD0B4. \uD63C\uC790\uC11C\uB3C4 \uC2F8\uC6B8 \uC218 \uC788\uC74C.",skills:{q:"mg_holy",w:"mg_spring",e:"mg_orb",r:"mg_miracle"},passive:{name:"\uC0DD\uBA85\uC758 \uC0D8",desc:"\uCE58\uC720\uB7C9 +30%, \uCD5C\uB300 \uC0DD\uBA85\uB825 +10%, \uB9C8\uB825 +10%.",mods:{healMult:1.3,hpPct:.1,atkPct:.1}}}],archer:[{id:"marksman",haste:"cdr",name:"\uC11D\uAD81 \uC0AC\uC218",role:"dps",desc:"\uBB35\uC9C1\uD55C \uC11D\uAD81\uC73C\uB85C \uD55C \uBC1C \uD55C \uBC1C \uC801\uC744 \uAFF0\uB6AB\uB294 \uC800\uACA9\uC218.",skills:{q:"ar_q",w:"ar_w",e:"ar_e",r:"ar_r"},passive:{name:"\uB9E4\uC758 \uB208",desc:"\uCE58\uBA85\uD0C0 \uD655\uB960 +10%, \uCE58\uBA85\uD0C0 \uD53C\uD574 +20%.",mods:{crit:.1,critDmg:.2}}},{id:"ranger",haste:"attack",name:"\uC7A5\uAD81 \uAD81\uC0AC",role:"dps",weapon:"bow",desc:"\uD65C\uB85C \uC274 \uC0C8 \uC5C6\uC774 \uD654\uC0B4\uC744 \uD37C\uBD93\uB294 \uC18D\uC0AC\uD615 \uAD81\uC218.",basic:["ab_b1","ab_b2","ab_b1"],skills:{q:"ab_q",w:"ar_w",e:"ar_e",r:"ab_r"},passive:{name:"\uBC14\uB78C\uC758 \uC190",desc:"\uC2E0\uC18D +20%, \uC774\uB3D9 \uC18D\uB3C4 +8%, \uCE58\uBA85\uD0C0 \uD655\uB960 +5%.",mods:{haste:.2,speedPct:.08,crit:.05}}}],rogue:[{id:"assassin",haste:"attack",name:"\uC554\uC0B4\uC790",role:"dps",desc:"\uADF8\uB9BC\uC790 \uC18D\uC5D0\uC11C \uB4F1 \uB4A4\uB97C \uB178\uB9AC\uB294 \uC554\uC0B4\uC790.",skills:{q:"rg_q",w:"rg_w",e:"rg_e",r:"rg_r"},passive:{name:"\uC554\uC0B4 \uBCF8\uB2A5",desc:"\uBC31\uC5B4\uD0DD \uD53C\uD574 +30%.",mods:{backBonus:.3}}},{id:"trickster",haste:"cdr",name:"\uB3C5\uCE7C\uC7A1\uC774",role:"dps",desc:"\uB2E8\uAC80\uC744 \uD769\uBFCC\uB9AC\uACE0 \uB3C5\uC548\uAC1C\uB85C \uC801\uC744 \uB9D0\uB824 \uC8FD\uC774\uB294 \uAD11\uC5ED \uB51C\uB7EC.",skills:{q:"rg_fan",w:"rg_w",e:"rg_e",r:"rg_venom"},passive:{name:"\uB9F9\uB3C5\uC758 \uCE7C\uB0A0",desc:"\uCE58\uBA85\uD0C0 \uD655\uB960 +8%, \uC2E0\uC18D +15%.",mods:{crit:.08,haste:.15}}}]},vf={tank:"\uD0F1\uCEE4",dps:"\uB51C\uB7EC",heal:"\uD790\uB7EC"},Lh={move:"\uC774\uB3D9 \uC18D\uB3C4",cast:"\uC2DC\uC804 \uC18D\uB3C4",attack:"\uACF5\uACA9 \uC18D\uB3C4",cdr:"\uC7AC\uC0AC\uC6A9 \uB300\uAE30\uC2DC\uAC04 \uAC10\uC18C"},sM=.4,fr=(i,e)=>Ct(i,e).haste||"cdr",ki=i=>Math.min(sM,Math.max(0,i?.haste||0)),Ct=(i,e)=>Ch[i].find(t=>t.id===e)||Ch[i][0],Oo=(i,e)=>Ct(i,e).basic||$e[i].basic,Es=(i,e)=>({type:"cone",r:i,ang:e*Math.PI/180}),Tn=i=>({type:"circle",r:i}),Fo=(i,e)=>({type:"rect",len:i,w:e}),Ot={dodge:{anim:"Dodge_Forward",dur:.42,lock:.42,move:[[0,.36,15]],iframes:[0,.38],cancelable:!1},potion:{anim:null,dur:.1,lock:0,spawns:[{t:0,heal:.35}]},kn_b1:{anim:"1H_Melee_Attack_Slice_Horizontal",dur:.46,lock:.4,combo:.26,move:[[.02,.14,4]],hits:[{t:.2,shape:Es(3.1,130),mult:.9,stag:4,kb:.5,fx:"slash"}]},kn_b2:{anim:"1H_Melee_Attack_Slice_Diagonal",dur:.46,lock:.4,combo:.26,move:[[.02,.14,4]],hits:[{t:.2,shape:Es(3.1,130),mult:1,stag:4,kb:.5,fx:"slash"}]},kn_b3:{anim:"1H_Melee_Attack_Chop",dur:.62,lock:.56,combo:.5,move:[[.05,.2,5]],hits:[{t:.3,shape:Es(3.4,90),mult:1.6,stag:8,kb:1.6,fx:"smash"}]},kn_q:{name:"\uBC29\uD328 \uB3CC\uC9C4",desc:"\uC804\uBC29\uC73C\uB85C \uB3CC\uC9C4\uD558\uBA70 \uBD80\uB52A\uD78C \uC801\uC744 \uBC00\uC5B4\uB0C4. \uCE74\uC6B4\uD130 \uAC00\uB2A5.",cd:8,anim:"Block_Attack",dur:.62,lock:.56,super:!0,move:[[.04,.34,21]],hits:[{t:.04,until:.36,every:.04,once:!0,shape:Tn(1.8),off:.9,mult:2.2,stag:22,kb:3.5,counter:!0,fx:"bash"}]},kn_w:{name:"\uC2EC\uD310\uC758 \uBCA0\uAE30",desc:"\uB3C4\uC57D\uD558\uBA70 \uC804\uBC29 \uB113\uC740 \uBC94\uC704\uB97C \uB0B4\uB824\uCE68.",cd:6,anim:"1H_Melee_Attack_Jump_Chop",dur:.82,lock:.78,super:!0,move:[[.08,.36,7]],hits:[{t:.46,shape:Es(4.6,110),mult:3.4,stag:28,kb:2.2,fx:"judgement"}]},kn_e:{name:"\uC218\uD638\uC758 \uC11C\uC57D",desc:"\uC8FC\uBCC0 \uD30C\uD2F0\uC6D0\uC5D0\uAC8C \uCD5C\uB300 \uCCB4\uB825 25% \uBCF4\uD638\uB9C9(6\uCD08).",cd:16,anim:"Cheer",clip:[.2,1.3],dur:.7,lock:.6,spawns:[{t:.3,buff:{kind:"shield",pct:.25,dur:6,radius:12}}]},kn_taunt:{name:"\uB3C4\uBC1C",desc:"\uC8FC\uBCC0 \uC801\uC758 \uD45C\uC801\uC744 4\uCD08\uAC04 \uC790\uC2E0\uC5D0\uAC8C \uACE0\uC815\uD558\uACE0 5\uCD08\uAC04 \uBC1B\uB294 \uD53C\uD574 30% \uAC10\uC18C.",cd:12,anim:"Taunt",dur:.7,lock:.6,spawns:[{t:.25,taunt:{radius:9,dur:4}},{t:.25,buff:{kind:"guard",dr:.3,dur:5,self:!0}}]},kn_holy:{name:"\uBE5B\uC758 \uD30C\uB3D9",desc:"\uC804\uBC29 \uC77C\uC9C1\uC120\uC73C\uB85C \uBE5B\uC758 \uAC80\uAE30\uB97C \uB0B4\uBFDC\uC5B4 \uAD00\uD1B5 \uD53C\uD574.",cd:9,anim:"1H_Melee_Attack_Stab",clip:[.2,1.1],dur:.6,lock:.55,super:!0,move:[[.02,.12,6]],hits:[{t:.24,shape:Fo(8.5,2.6),mult:4.4,stag:18,kb:1.8,fx:"holy"}]},kn_r:{name:"\uCC9C\uBC8C",desc:"\uC9C0\uC815\uD55C \uC704\uCE58\uC5D0 \uB099\uB8B0\uB97C \uB5A8\uC5B4\uB728\uB9BC. \uBB34\uB825\uD654 \uCD5C\uC0C1.",cd:24,anim:"Spellcast_Raise",clip:[.3,1.6],dur:1,lock:.95,super:!0,range:9,spawns:[{t:.15,zone:{at:"target",shape:Tn(4.8),warn:.7,dur:.01,mult:9,stag:70,kb:2,fx:"lightning",team:"player"}}]},bb_b1:{anim:"2H_Melee_Attack_Slice",dur:.58,lock:.5,combo:.36,move:[[.02,.16,4]],hits:[{t:.28,shape:Es(3.6,150),mult:1.15,stag:5,kb:.8,fx:"slash"}]},bb_b2:{anim:"2H_Melee_Attack_Chop",clip:[.2,1.3],dur:.62,lock:.54,combo:.4,move:[[.02,.16,4]],hits:[{t:.3,shape:Es(3.6,80),mult:1.35,stag:6,kb:1,fx:"smash"}]},bb_b3:{anim:"2H_Melee_Attack_Stab",clip:[.1,1.2],dur:.66,lock:.6,combo:.52,move:[[.1,.3,9]],hits:[{t:.3,shape:Fo(4.2,2.2),mult:1.9,stag:10,kb:2.4,fx:"thrust"}]},bb_q:{name:"\uB3C4\uC57D \uAC15\uD0C0",desc:"\uC9C0\uC815\uD55C \uC704\uCE58\uB85C \uB3C4\uC57D\uD574 \uCDA9\uACA9\uD30C\uB97C \uC77C\uC73C\uD0B4.",cd:9,anim:"Jump_Full_Short",clip:[.1,1.1],dur:.8,lock:.76,super:!0,range:10,leap:[.05,.55],hits:[{t:.56,shape:Tn(3.8),mult:3.8,stag:26,kb:3,fx:"quake"}]},bb_w:{name:"\uD68C\uC804 \uBCA0\uAE30",desc:"\uC774\uB3D9\uD558\uBA70 \uC5F0\uC18D\uC73C\uB85C \uD68C\uC804\uD574 \uC8FC\uBCC0\uC744 \uBCB0.",cd:10,anim:"2H_Melee_Attack_Spinning",dur:2,lock:0,loopAnim:!0,moveScale:.6,super:!0,hits:[{t:.1,until:1.95,every:.24,shape:Tn(3.2),mult:.75,stag:4,kb:.4,fx:"spin"}]},bb_e:{name:"\uC804\uD22C \uD568\uC131",desc:"8\uCD08\uAC04 \uACF5\uACA9\uB825 25%, \uC774\uB3D9 \uC18D\uB3C4 15% \uC99D\uAC00.",cd:18,anim:"Taunt",dur:.7,lock:.6,spawns:[{t:.25,buff:{kind:"rage",atk:.25,speed:.15,dur:8,self:!0}}]},bb_r:{name:"\uBD84\uB178 \uD3ED\uBC1C",desc:"\uAC70\uB300\uD55C \uD68C\uC804 \uC77C\uACA9. \uC783\uC740 \uCCB4\uB825\uC5D0 \uBE44\uB840\uD574 \uCD5C\uB300 60% \uAC15\uD654.",cd:26,anim:"2H_Melee_Attack_Spin",clip:[.2,2.1],dur:1.2,lock:1.15,super:!0,hits:[{t:.62,shape:Tn(6.2),mult:9,stag:55,kb:4,fx:"rage",lowHpScale:.6}]},bb_roar:{name:"\uC704\uD611\uC758 \uD3EC\uD6A8",desc:"\uC8FC\uBCC0 \uC801\uC758 \uD45C\uC801\uC744 4\uCD08\uAC04 \uC790\uC2E0\uC5D0\uAC8C \uACE0\uC815\uD558\uACE0 5\uCD08\uAC04 \uBC1B\uB294 \uD53C\uD574 30% \uAC10\uC18C.",cd:12,anim:"Taunt",dur:.7,lock:.6,spawns:[{t:.25,taunt:{radius:10,dur:4}},{t:.25,buff:{kind:"guard",dr:.3,dur:5,self:!0}}]},bb_iron:{name:"\uAC15\uCCA0 \uD53C\uBD80",desc:"6\uCD08\uAC04 \uCD5C\uB300 \uC0DD\uBA85\uB825 35% \uBCF4\uD638\uB9C9\uC744 \uB450\uB974\uACE0 \uBC1B\uB294 \uD53C\uD574 20% \uAC10\uC18C.",cd:16,anim:"Cheer",clip:[.2,1.3],dur:.6,lock:.5,spawns:[{t:.25,buff:{kind:"shield",pct:.35,dur:6,radius:.5}},{t:.25,buff:{kind:"guard",dr:.2,dur:6,self:!0}}]},bb_quake:{name:"\uB300\uC9C0 \uBD84\uC1C4",desc:"\uB3C4\uB07C\uB85C \uB545\uC744 \uB0B4\uB9AC\uCCD0 \uC8FC\uBCC0 \uB113\uC740 \uBC94\uC704\uB97C \uAC15\uD0C0. \uBB34\uB825\uD654 \uCD5C\uC0C1.",cd:24,anim:"2H_Melee_Attack_Chop",clip:[.1,1.3],dur:1,lock:.95,super:!0,hits:[{t:.52,shape:Tn(7),mult:6.5,stag:80,kb:3.5,fx:"quake"}]},mg_b1:{anim:"Spellcast_Shoot",clip:[.1,.8],dur:.42,lock:.34,combo:.28,spawns:[{t:.2,proj:"bolt"}]},mg_b2:{anim:"Spellcast_Shoot",clip:[.1,.8],dur:.42,lock:.34,combo:.28,spawns:[{t:.2,proj:"bolt"}]},mg_q:{name:"\uD654\uC5FC\uAD6C",desc:"\uC801\uC911 \uC2DC \uD3ED\uBC1C\uD558\uB294 \uD654\uC5FC\uAD6C\uB97C \uBC1C\uC0AC.",cd:5,anim:"Spellcast_Shoot",clip:[.05,.9],dur:.5,lock:.42,spawns:[{t:.22,proj:"fireball"}]},mg_w:{name:"\uC11C\uB9AC \uC7A5\uD310",desc:"\uC9C0\uC815 \uC704\uCE58\uC5D0 4\uCD08\uAC04 \uC5BC\uC74C \uD3ED\uD48D. \uC9C0\uC18D \uD53C\uD574\uC640 \uB454\uD654.",cd:11,anim:"Spellcasting",dur:.55,lock:.5,range:11,spawns:[{t:.3,zone:{at:"target",shape:Tn(3.8),warn:0,dur:4,tick:.4,mult:.7,stag:3,slow:.45,fx:"frost",team:"player"}}]},mg_chain:{name:"\uC5F0\uC1C4 \uBC88\uAC1C",desc:"\uC870\uC900\uD55C \uC801\uC5D0\uAC8C \uBC88\uAC1C\uB97C \uB0B4\uB9AC\uAF42\uACE0 \uC8FC\uBCC0 \uC801 \uCD5C\uB300 4\uBA85\uC5D0\uAC8C \uD295\uAE40.",cd:8,anim:"Spellcast_Shoot",clip:[.05,.9],dur:.45,lock:.4,range:11,spawns:[{t:.2,chain:{n:5,jump:6.5,mult:2.6,decay:.8,stag:10}}]},mg_r:{name:"\uC6B4\uC11D \uB099\uD558",desc:"\uC9C0\uC815 \uC704\uCE58\uC5D0 \uAC70\uB300\uD55C \uC6B4\uC11D\uC744 \uB5A8\uC5B4\uB728\uB9BC.",cd:26,anim:"Spellcast_Long",clip:[.2,2.2],dur:1.1,lock:1.05,super:!0,range:12,spawns:[{t:.2,zone:{at:"target",shape:Tn(5.2),warn:1.25,dur:.01,mult:13,stag:55,kb:3,fx:"meteor",team:"player"}}]},mg_holy:{name:"\uC2E0\uC131 \uD3ED\uBC1C",desc:"\uC9C0\uC815 \uC704\uCE58\uC5D0 \uBE5B\uC744 \uD130\uB728\uB824 \uC801\uC5D0\uAC8C \uD53C\uD574\uB97C \uC8FC\uACE0, \uBC94\uC704 \uC548 \uD30C\uD2F0\uC6D0\uC740 12% \uD68C\uBCF5.",cd:5,anim:"Spellcast_Raise",clip:[.3,1.3],dur:.5,lock:.42,range:12,spawns:[{t:.2,zone:{at:"target",shape:Tn(3.6),warn:.25,dur:.01,mult:3.4,stag:14,kb:1,heal:.12,fx:"holyburst",team:"player"}}]},mg_orb:{name:"\uBE5B\uC758 \uAD6C\uCCB4",desc:"\uCC9C\uCC9C\uD788 \uB098\uC544\uAC00\uBA70 \uB2FF\uB294 \uBAA8\uB4E0 \uC801\uC744 \uAD00\uD1B5\uD558\uB294 \uBE5B\uC758 \uAD6C\uCCB4.",cd:7,anim:"Spellcast_Shoot",clip:[.05,.9],dur:.5,lock:.42,spawns:[{t:.22,proj:"lightorb"}]},mg_spring:{name:"\uC7AC\uC0DD\uC758 \uC0D8",desc:"\uC9C0\uC815 \uC704\uCE58\uC5D0 5\uCD08\uAC04 \uCE58\uC720\uC758 \uC0D8. \uC548\uC5D0 \uC788\uC73C\uBA74 0.5\uCD08\uB9C8\uB2E4 3.5% \uD68C\uBCF5.",cd:14,anim:"Spellcasting",dur:.55,lock:.5,range:12,spawns:[{t:.3,zone:{at:"target",shape:Tn(4.2),warn:0,dur:5,tick:.5,heal:.035,fx:"spring",team:"player"}}]},mg_miracle:{name:"\uC0DD\uBA85\uC758 \uAE30\uC801",desc:"\uC8FC\uBCC0 \uD30C\uD2F0\uC6D0\uC744 50% \uD68C\uBCF5\uD558\uACE0 \uC4F0\uB7EC\uC9C4 \uB3D9\uB8CC\uB97C 35% \uC0DD\uBA85\uB825\uC73C\uB85C \uBD80\uD65C.",cd:40,anim:"Spellcast_Long",clip:[.2,2.2],dur:1.1,lock:1.05,super:!0,spawns:[{t:.55,miracle:{radius:14,heal:.5,revive:.35}}]},rg_b1:{anim:"Dualwield_Melee_Attack_Slice",clip:[.1,1],dur:.36,lock:.3,combo:.2,move:[[.02,.12,5]],hits:[{t:.16,shape:Es(2.7,120),mult:.75,stag:3,kb:.3,fx:"slash"}]},rg_b2:{anim:"Dualwield_Melee_Attack_Chop",clip:[.1,1.1],dur:.36,lock:.3,combo:.2,move:[[.02,.12,5]],hits:[{t:.16,shape:Es(2.7,120),mult:.8,stag:3,kb:.3,fx:"slash"}]},rg_b3:{anim:"Dualwield_Melee_Attack_Stab",clip:[.2,1.3],dur:.48,lock:.42,combo:.36,move:[[.04,.2,7]],hits:[{t:.22,shape:Fo(3.2,1.8),mult:1.3,stag:5,kb:1,fx:"thrust"}]},rg_q:{name:"\uADF8\uB9BC\uC790 \uCC0C\uB974\uAE30",desc:"\uC801\uC744 \uAFF0\uB6AB\uC73C\uBA70 \uB3CC\uC9C4. \uCE74\uC6B4\uD130 \uAC00\uB2A5.",cd:6,anim:"Dualwield_Melee_Attack_Stab",clip:[.2,1],dur:.46,lock:.42,super:!0,iframes:[.02,.3],move:[[.02,.3,24]],hits:[{t:.02,until:.32,every:.03,once:!0,shape:Tn(1.6),mult:2.4,stag:16,kb:.5,counter:!0,fx:"shadow"}]},rg_w:{name:"\uCE7C\uB0A0 \uD3ED\uD48D",desc:"\uC8FC\uBCC0\uC744 \uBE60\uB974\uAC8C \uB2E4\uC12F \uBC88 \uBCB0.",cd:8,anim:"2H_Melee_Attack_Spin",clip:[.3,2],dur:.9,lock:.85,super:!0,hits:[{t:.12,until:.8,every:.16,shape:Tn(3.3),mult:.9,stag:4,kb:.2,fx:"blades"}]},rg_e:{name:"\uC5F0\uB9C9",desc:"\uC5F0\uB9C9\uC744 \uD130\uB728\uB824 1.5\uCD08 \uBB34\uC801. \uC8FC\uBCC0 \uC801\uC774 \uB300\uC0C1\uC744 \uB193\uCE68.",cd:14,anim:"Throw",clip:[.3,1.1],dur:.4,lock:.3,iframes:[0,1.5],spawns:[{t:.1,smoke:5}]},rg_fan:{name:"\uB2E8\uAC80 \uBD80\uCC44",desc:"\uC804\uBC29 \uBD80\uCC44\uAF34\uB85C \uB2E8\uAC80 \uB2E4\uC12F \uC790\uB8E8\uB97C \uB358\uC9D0.",cd:5,anim:"Throw",clip:[.3,1.1],dur:.42,lock:.36,spawns:[{t:.16,proj:"dagger",fan:[-.32,-.16,0,.16,.32]}]},rg_venom:{name:"\uB3C5\uC548\uAC1C",desc:"\uC9C0\uC815 \uC704\uCE58\uC5D0 4\uCD08\uAC04 \uB3C5\uC548\uAC1C. \uC9C0\uC18D \uD53C\uD574\uC640 \uB454\uD654.",cd:20,anim:"Throw",clip:[.3,1.1],dur:.5,lock:.45,range:10,spawns:[{t:.2,zone:{at:"target",shape:Tn(5),warn:.2,dur:4,tick:.35,mult:1.1,stag:4,slow:.4,fx:"poison",team:"player"}}]},rg_r:{name:"\uCC98\uD615",desc:"\uC9E7\uAC8C \uD30C\uACE0\uB4E4\uC5B4 \uCE58\uBA85\uC801\uC778 \uC77C\uACA9. \uBC31\uC5B4\uD0DD \uC2DC \uD53C\uD574 2\uBC30.",cd:20,anim:"1H_Melee_Attack_Stab",clip:[.3,1.2],dur:.6,lock:.56,super:!0,move:[[.02,.16,18]],hits:[{t:.24,shape:Fo(3.2,2.4),mult:11,stag:35,kb:1,fx:"execute",backMult:2}]},ab_b1:{anim:"1H_Ranged_Shoot",clip:[.2,.9],dur:.34,lock:.28,combo:.22,spawns:[{t:.14,proj:"arrowb"}]},ab_b2:{anim:"1H_Ranged_Shoot",clip:[.2,.9],dur:.34,lock:.28,combo:.22,spawns:[{t:.14,proj:"arrowb"}]},ab_q:{name:"\uC5F0\uC18D \uC0AC\uACA9",desc:"\uD654\uC0B4 \uC138 \uBC1C\uC744 \uBE60\uB974\uAC8C \uC5F0\uB2EC\uC544 \uC3E8.",cd:6,anim:"1H_Ranged_Shoot",clip:[.2,.9],dur:.72,lock:.66,spawns:[.12,.34,.56].map(i=>({t:i,proj:"arrowb",mult:1.7}))},ab_r:{name:"\uD3ED\uD48D \uD654\uC0B4",desc:"\uC804\uBC29 \uB113\uC740 \uBD80\uCC44\uAF34\uB85C \uD654\uC0B4\uC744 \uB450 \uCC28\uB840 \uC3DF\uC544\uB0C4.",cd:20,anim:"1H_Ranged_Aiming",clip:[0,1],dur:.95,lock:.9,super:!0,spawns:[.45,.7].map((i,e)=>({t:i,proj:"arrowb",mult:2.4,fan:[-.6,-.45,-.3,-.15,0,.15,.3,.45,.6].map(t=>t+e*.075)}))},ar_b1:{anim:"2H_Ranged_Shoot",clip:[.25,.95],dur:.44,lock:.36,combo:.3,spawns:[{t:.18,proj:"shot"}]},ar_b2:{anim:"2H_Ranged_Shoot",clip:[.25,.95],dur:.44,lock:.36,combo:.3,spawns:[{t:.18,proj:"shot"}]},ar_q:{name:"\uAD00\uD1B5 \uC0AC\uACA9",desc:"\uC77C\uC9C1\uC120\uC758 \uC801\uC744 \uBAA8\uB450 \uAFF0\uB6AB\uB294 \uAC15\uD654 \uD654\uC0B4.",cd:6,anim:"2H_Ranged_Shoot",clip:[.15,1],dur:.5,lock:.44,spawns:[{t:.24,proj:"pierce"}]},ar_w:{name:"\uD654\uC0B4\uBE44",desc:"\uC9C0\uC815 \uC704\uCE58\uC5D0 2.4\uCD08\uAC04 \uD654\uC0B4\uC744 \uD37C\uBD80\uC74C.",cd:12,anim:"1H_Ranged_Aiming",dur:.55,lock:.5,range:13,spawns:[{t:.3,zone:{at:"target",shape:Tn(4.2),warn:.45,dur:2.4,tick:.3,mult:.6,stag:3,fx:"arrows",team:"player"}}]},ar_e:{name:"\uD6C4\uBC29 \uB3C4\uC57D",desc:"\uC870\uC900 \uBC18\uB300 \uBC29\uD5A5\uC73C\uB85C \uAD74\uB7EC \uBE60\uC9C0\uBA70 \uC81C\uC790\uB9AC\uC5D0 \uB454\uD654 \uB36B \uC124\uCE58.",cd:10,anim:"Dodge_Forward",dur:.42,lock:.42,away:!0,move:[[0,.36,16]],iframes:[0,.4],spawns:[{t:0,zone:{shape:Tn(3),warn:0,dur:3,tick:.5,mult:.25,stag:2,slow:.5,fx:"trap",team:"player"}}]},ar_r:{name:"\uC9D1\uC911 \uC800\uACA9",desc:"\uC7A0\uC2DC \uC870\uC900 \uD6C4 \uC804\uBC29 \uC77C\uC9C1\uC120\uC744 \uAFF0\uB6AB\uB294 \uCE58\uBA85\uC801\uC778 \uD55C \uBC1C.",cd:22,anim:"1H_Ranged_Aiming",clip:[0,1],dur:1.15,lock:1.1,super:!0,hits:[{t:.85,shape:Fo(20,2.4),mult:11,stag:50,kb:2.5,fx:"snipe"}]}},_f={bolt:{speed:26,r:.45,life:.6,mult:.95,stag:3,kb:.3,fx:"bolt"},fireball:{speed:20,r:.6,life:.9,mult:1.5,stag:10,kb:1.5,explode:{r:3,mult:2.6,stag:12,kb:2},fx:"fireball"},arrow:{speed:24,r:.35,life:1.2,fx:"arrow"},shot:{speed:30,r:.4,life:.55,mult:.95,stag:3,kb:.3,fx:"arrow"},arrowb:{speed:32,r:.4,life:.55,mult:.78,stag:2,kb:.2,fx:"arrow"},pierce:{speed:34,r:.55,life:.62,mult:2.8,stag:12,kb:.8,pierce:!0,fx:"arrow"},dagger:{speed:26,r:.45,life:.42,mult:1.15,stag:4,kb:.4,fx:"dagger"},lightorb:{speed:13,r:.9,life:1.3,mult:2.6,stag:6,kb:.6,pierce:!0,fx:"lightorb"},bone:{speed:11,r:.6,life:3.5,fx:"soulfire"}},Dh=4,Nh=15,m0=3});function va(i){let e={hat:i?.hat!==!1};for(let t of As)e[t]=typeof i?.[t]=="string"&&aM.test(i[t])?i[t].toLowerCase():null;return e}function pr(i,e){let t=rM[e]||{},n=va(i);for(let s of As)n[s]=n[s]??t[s]??null;return n}var As,yf,b0,rM,aM,mr=Ds(()=>{As=["skin","hair","outfit","accent"],yf={skin:"\uD53C\uBD80\uC0C9",hair:"\uBA38\uB9AC\uC0C9",outfit:"\uC637 \uC0C9",accent:"\uD3EC\uC778\uD2B8 \uC0C9",hat:"\uBA38\uB9AC \uC7A5\uC2DD"},b0={skin:[["\uAE30\uBCF8",null],["\uBC1D\uC740","#ffe2cf"],["\uAD6C\uB9BF\uBE5B","#e2a878"],["\uAC08\uC0C9","#b87a50"],["\uC9D9\uC740","#7a4a30"],["\uCC3D\uBC31\uD55C","#e4dcef"],["\uC7BF\uBE5B","#9aa2ae"],["\uCD08\uB85D","#8fbf7a"]],hair:[["\uAE30\uBCF8",null],["\uAC80\uC815","#1c1a1f"],["\uAC08\uC0C9","#5a3a22"],["\uAE08\uBC1C","#e8c46a"],["\uC801\uBC1C","#b8452a"],["\uC740\uBC1C","#dfe4ea"],["\uD478\uB978","#3f63d6"],["\uBCF4\uB77C","#9a52cc"]],outfit:[["\uAE30\uBCF8",null],["\uC9C4\uD64D","#c3342f"],["\uCCAD\uB78C","#3563c9"],["\uC232","#2e8c4e"],["\uC790\uC218\uC815","#6f45c0"],["\uCE60\uD751","#23222a"],["\uC0C1\uC544","#e6ddc8"],["\uD669\uAE08","#d49a2a"],["\uAC00\uC8FD","#9a6a3c"],["\uCCAD\uB85D","#23868f"]],accent:[["\uAE30\uBCF8",null],["\uD669\uAE08","#d8b050"],["\uAC15\uCCA0","#9aa4ad"],["\uD751\uCCA0","#2e2e36"],["\uC9C4\uD64D","#c3342f"],["\uCCAD\uB78C","#3563c9"],["\uBC31\uC0C9","#f0ede6"],["\uAC08\uC0C9","#7a4e2c"]]},rM={archer:{outfit:"#9a6a3c"}},aM=/^#[0-9a-f]{6}$/i});function hM(i,e){if(i.lookUniforms)return i.lookUniforms;let t=x0[e],n={uCellRegion:{value:new Float32Array(32)},uRegionColor:{value:[0,1,2,3,4].map(()=>new re)},uRegionRef:{value:new Float32Array(5)},uRegionOn:{value:new Float32Array(5)}};return As.forEach((s,r)=>{for(let[a,o]of t[s])n.uCellRegion.value[a+o*8]=r+1;n.uRegionRef.value[r+1]=oM(new re(t.base[s]).convertSRGBToLinear())}),i.model.traverse(s=>{if(!s.isMesh||!s.material?.map)return;let r=s.material;r.onBeforeCompile=a=>{Object.assign(a.uniforms,n),a.fragmentShader=cM+a.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
${lM}`)},r.customProgramCacheKey=()=>"avatar-look",r.needsUpdate=!0}),i.lookUniforms=n,i.lookHat=t.hat,n}function _a(i,e,t={}){let n=hM(i,e);As.forEach((s,r)=>{let a=t[s];n.uRegionOn.value[r+1]=a?1:0,a&&n.uRegionColor.value[r+1].set(a).convertSRGBToLinear()}),i.lookHat&&i.model.traverse(s=>{s.name===i.lookHat&&(s.visible=t.hat!==!1)}),i.lookKey=Bo(t)}var x0,oM,cM,lM,Bo,v0,Uh=Ds(()=>{zt();mr();x0={Knight:{skin:[[0,0]],hair:[[1,0]],outfit:[[0,1]],accent:[[3,0],[7,0]],base:{skin:"#f6c29f",hair:"#dcb281",outfit:"#da3539",accent:"#899499"},hat:"Knight_Helmet"},Barbarian:{skin:[[0,0]],hair:[[1,0]],outfit:[[0,1],[1,1]],accent:[[6,0]],base:{skin:"#f6c29f",hair:"#9a928a",outfit:"#507088",accent:"#9f5e47"},hat:"Barbarian_Hat"},Mage:{skin:[[0,0],[7,2]],hair:[[1,0]],outfit:[[0,1],[1,1],[7,1]],accent:[[2,1]],base:{skin:"#f6c29f",hair:"#201d20",outfit:"#4f4b79",accent:"#ab1a5c"},hat:"Mage_Hat"},Rogue_Hooded:{skin:[[0,0]],hair:[[1,0]],outfit:[[0,1],[1,1]],accent:[[5,0],[5,2]],base:{skin:"#f6c29f",hair:"#9f5e47",outfit:"#008955",accent:"#b57354"},hat:null}},oM=i=>.299*i.r+.587*i.g+.114*i.b,cM=`
uniform float uCellRegion[32];
uniform vec3 uRegionColor[5];
uniform float uRegionRef[5];
uniform float uRegionOn[5];
`,lM=`
{
  vec2 cell = floor(clamp(vMapUv, 0.0, 0.9999) * vec2(8.0, 4.0));
  int r = int(uCellRegion[int(cell.x + cell.y * 8.0)]);
  if (r > 0 && uRegionOn[r] > 0.5) {
    float l = dot(diffuseColor.rgb, vec3(0.299, 0.587, 0.114));
    diffuseColor.rgb = clamp(uRegionColor[r] * (l / max(uRegionRef[r], 0.02)), 0.0, 1.0);
  }
}`;Bo=(i={})=>[...As.map(e=>i[e]||""),i.hat===!1?0:1].join("|"),v0=i=>!!x0[i]?.hat});function xr(i){let e=Math.max(1,Math.min(is,i|0))-1;return{hp:1+.5*e,atk:1+.15*e,xp:1+.3*e,ilvl:2*e,luck:.06*e}}function y0(i){return{hp:1+.75*(i-1),atk:1}}var gr,mi,Rs,st,br,Cs,_0,is,ss=Ds(()=>{gr=(i,e)=>({type:"cone",r:i,ang:e*Math.PI/180}),mi=i=>({type:"circle",r:i}),Rs=(i,e)=>({type:"rect",len:i,w:e}),st={minion:{name:"\uB9DD\uC790 \uC878\uAC1C",model:"Skeleton_Minion",weapons:[["w_Skeleton_Blade","handslot.r"]],hp:320,atk:55,def:10,speed:3.3,r:.6,xp:12,drop:.08,range:2.1,attacks:["en_chop"],idle:"Idle_Combat",walk:"Walking_D_Skeletons",run:"Running_C"},warrior:{name:"\uB9DD\uC790 \uC804\uC0AC",model:"Skeleton_Warrior",weapons:[["w_Skeleton_Axe","handslot.r"],["w_Skeleton_Shield_Small_A","handslot.l"]],hp:700,atk:80,def:35,speed:2.9,r:.7,xp:24,drop:.14,range:2.6,attacks:["en_slice","en_bash"],shield:.6,idle:"Idle_Combat",walk:"Walking_D_Skeletons",run:"Running_C"},archer:{name:"\uB9DD\uC790 \uAD81\uC218",model:"Skeleton_Rogue",weapons:[["w_Skeleton_Crossbow","handslot.r"]],hp:360,atk:72,def:10,speed:3.4,r:.6,xp:18,drop:.12,range:15,keep:9,attacks:["en_shoot"],idle:"Idle_Combat",walk:"Walking_D_Skeletons",run:"Running_C"},mage:{name:"\uB9DD\uC790 \uC8FC\uC220\uC0AC",model:"Skeleton_Mage",weapons:[["w_Skeleton_Staff","handslot.r"]],hp:520,atk:70,def:15,speed:2.7,r:.6,xp:26,drop:.16,range:13,keep:8,attacks:["en_fire","en_fire","en_summon"],idle:"Idle_Combat",walk:"Walking_D_Skeletons",run:"Running_C"},priest:{name:"\uBF08\uC758 \uB300\uC0AC\uC81C \uBAA8\uB974\uAC04",title:"\uC608\uBC30\uB2F9\uC758 \uB9DD\uB839",model:"Skeleton_Mage",weapons:[["w_Skeleton_Staff","handslot.r"]],scale:2.2,boss:!0,loot:2,hp:13e3,atk:115,def:35,speed:2.8,r:1.5,xp:150,keep:7,patterns:"priest",introAnim:"Spellcast_Raise",idle:"Idle_Combat",walk:"Walking_D_Skeletons",run:"Running_C"},warden:{name:"\uBCF4\uBB3C\uACE0 \uC218\uBB38\uC7A5",title:"\uD669\uAE08\uC744 \uC9C0\uD0A4\uB294 \uADF8\uB9BC\uC790",model:"Skeleton_Rogue",weapons:[["w_Skeleton_Blade","handslot.r"],["w_Skeleton_Blade","handslot.l"]],scale:2.2,boss:!0,loot:2,hp:17500,atk:125,def:50,speed:4.4,r:1.5,xp:220,gap:"wd_dash",patterns:"warden",idle:"Idle_Combat",walk:"Walking_D_Skeletons",run:"Running_C"},king:{name:"\uD574\uACE8\uC655 \uC544\uB974\uCE74\uC2A4",title:"\uC7BF\uBE5B \uC655\uAD00\uC758 \uC8FC\uC778",model:"Skeleton_Warrior",weapons:[["w_Skeleton_Axe","handslot.r"]],scale:2.4,boss:!0,crown:!0,judgement:!0,loot:3,hp:42e3,atk:150,def:60,speed:3.6,r:1.7,xp:400,range:4.5,gap:"kg_leap",patterns:"king",idle:"Idle_Combat",walk:"Walking_D_Skeletons",run:"Running_C"}};st.priestShade={...st.priest,name:"\uBAA8\uB974\uAC04\uC758 \uB9DD\uB839",title:"\uAEBC\uC9C0\uC9C0 \uC54A\uB294 \uC758\uC2DD",scale:2,hp:11e3,xp:120,tint:"#6ab8ff"};st.wardenShade={...st.warden,name:"\uC218\uBB38\uC7A5\uC758 \uADF8\uB9BC\uC790",title:"\uC625\uC88C\uB97C \uC9C0\uD0A4\uB294 \uCE7C\uB0A0",scale:2,hp:15e3,xp:170,tint:"#b05aff"};br={hp:4.5,atk:1.4,scale:1.4,xp:4,drop:.9},Cs={spawn:{anim:"Skeletons_Awaken_Floor",dur:2.2,lock:2.2,iframes:[0,2.1]},hit:{anim:"Hit_A",dur:.4,lock:.4},stun:{anim:"Hit_B",dur:3,lock:3,loopAnim:!0},down:{anim:"Death_A",clip:[0,.75],hold:!0,dur:8,lock:8},getup:{anim:"Lie_StandUp",clip:[.6,2.3],dur:1.1,lock:1.1},en_chop:{anim:"1H_Melee_Attack_Chop",dur:1.15,lock:1.1,cd:1.6,hits:[{t:.62,shape:gr(2.5,90),mult:1,kb:1.2,tele:!0}]},en_slice:{anim:"1H_Melee_Attack_Slice_Horizontal",dur:1.1,lock:1.05,cd:1.8,hits:[{t:.6,shape:gr(3.1,150),mult:1.1,kb:1.5,tele:!0}]},en_bash:{anim:"Block_Attack",dur:1.25,lock:1.2,cd:4,super:!0,move:[[.62,.9,16]],hits:[{t:.62,until:.9,every:.05,once:!0,shape:mi(1.6),off:.8,mult:1.3,kb:3,tele:"rect",teleShape:Rs(5.2,1.8)}]},en_shoot:{anim:"1H_Ranged_Shoot",dur:1.55,lock:1.5,cd:2.6,hits:[],spawns:[{t:1.05,proj:"arrow",mult:1}],tele:{shape:Rs(22,.7),until:1.05},aimLock:.8},en_fire:{anim:"Spellcast_Shoot",dur:1.5,lock:1.45,cd:3.2,spawns:[{t:.3,zone:{at:"target",shape:mi(2.6),warn:1.1,dur:.01,mult:1.3,kb:1,fx:"soulburst",team:"enemy"}}]},en_summon:{anim:"Spellcast_Summon",clip:[.3,2.6],dur:1.8,lock:1.75,cd:9,spawns:[{t:1.2,summon:{kind:"minion",n:2,r:3}}]},kg_slash1:{anim:"2H_Melee_Attack_Slice",dur:1.25,lock:1.2,super:!0,move:[[.55,.75,6]],hits:[{t:.78,shape:gr(6.2,150),mult:1.2,kb:3,tele:!0}]},kg_slash2:{anim:"1H_Melee_Attack_Slice_Diagonal",dur:1,lock:.95,super:!0,move:[[.35,.55,6]],hits:[{t:.58,shape:gr(6.2,150),mult:1.2,kb:3,tele:!0}]},kg_slash3:{anim:"2H_Melee_Attack_Chop",dur:1.5,lock:1.45,super:!0,move:[[.6,.85,8]],hits:[{t:.95,shape:Rs(10,3.6),mult:1.8,kb:5,tele:!0,fx:"kingSmash"}]},kg_leap:{anim:"1H_Melee_Attack_Jump_Chop",dur:1.9,lock:1.85,super:!0,leap:[.35,1.15],leapToTarget:!0,hits:[{t:1.18,shape:mi(6.5),mult:2.1,kb:6,tele:!0,teleAt:"target",fx:"kingQuake"}]},kg_spin:{anim:"2H_Melee_Attack_Spin",clip:[.1,2.3],dur:2.1,lock:2.05,super:!0,hits:[{t:1.25,shape:mi(7.6),mult:1.9,kb:7,tele:!0,fx:"kingSpin"}]},kg_summon:{anim:"Spellcast_Summon",clip:[.2,3.2],dur:2.4,lock:2.35,super:!0,spawns:[{t:1.4,summon:{kind:"minion",n:5,r:7}}]},kg_charge:{anim:"2H_Melee_Attack_Stab",clip:[.1,1.6],dur:2,lock:1.95,super:!0,counterWindow:[.15,1.05],move:[[1.05,1.5,32]],hits:[{t:1.05,until:1.5,every:.04,once:!0,shape:mi(2.4),off:1.4,mult:2.4,kb:8,tele:"rect",teleShape:Rs(17,3.4)}]},kg_ring:{anim:"Spellcast_Long",clip:[.1,2.5],dur:3,lock:2.95,super:!0,noTrack:!0,hits:[{t:2.7,shape:{type:"donut",r:5.5,r2:30},mult:3.2,kb:4,tele:!0,fx:"kingRing",lethalFrom:3}]},kg_doom:{anim:"Spellcast_Raise",clip:[.2,1.9],dur:2.8,lock:2.75,super:!0,noTrack:!0,minDiff:3,hits:[{t:2.3,shape:gr(15,200),mult:6,kb:4,tele:!0,fx:"doom",lethalFrom:3}]},kg_judgement:{anim:"Spellcast_Raise",clip:[.2,1.9],hold:!0,dur:11,lock:11,super:!0,judgement:{gauge:1,time:10,mult:7}},pr_volley:{anim:"Spellcast_Shoot",dur:1.6,lock:1.55,super:!0,spawns:[0,1,2].map(()=>({t:.3,zone:{at:"target",scatter:3.5,shape:mi(2.8),warn:1.05,dur:.01,mult:1.3,kb:1,fx:"soulburst",team:"enemy"}}))},pr_bolt:{anim:"Spellcast_Shoot",dur:1.2,lock:1.15,super:!0,spawns:[{t:.6,proj:"bone",fan:[-.35,0,.35],mult:1.2}]},pr_nova:{anim:"Spellcast_Raise",clip:[.2,1.9],dur:1.8,lock:1.75,super:!0,hits:[{t:1.35,shape:mi(7),mult:2,kb:5,tele:!0,fx:"kingQuake"}]},pr_summon:{anim:"Spellcast_Summon",clip:[.2,3.2],dur:2.4,lock:2.35,super:!0,spawns:[{t:1.4,summon:{kind:"minion",n:3,r:5}},{t:1.4,summon:{kind:"archer",n:1,r:6}}]},pr_doom:{anim:"Spellcast_Summon",clip:[.3,2.6],dur:2.6,lock:2.55,super:!0,noTrack:!0,minDiff:2,spawns:[{t:.3,zone:{at:"all",shape:mi(3.4),warn:2.1,dur:.01,mult:4,kb:2,fx:"doom",team:"enemy",lethalFrom:2}}]},pr_rain:{anim:"Spellcast_Long",clip:[.2,2.2],dur:2.2,lock:2.15,super:!0,noTrack:!0,spawns:[{t:.4,zone:{at:"all",shape:mi(3.2),warn:1.3,dur:.01,mult:1.7,kb:2,fx:"soulburst",team:"enemy"}}]},wd_combo1:{anim:"Dualwield_Melee_Attack_Slice",dur:1,lock:.95,super:!0,move:[[.35,.55,7]],hits:[{t:.55,shape:gr(5.5,140),mult:1.1,kb:2.5,tele:!0}]},wd_combo2:{anim:"Dualwield_Melee_Attack_Chop",dur:.9,lock:.85,super:!0,move:[[.3,.5,7]],hits:[{t:.5,shape:gr(5.5,100),mult:1.25,kb:3,tele:!0}]},wd_dash:{anim:"Dualwield_Melee_Attack_Stab",clip:[.1,1.2],dur:1.5,lock:1.45,super:!0,counterWindow:[.1,.75],move:[[.75,1.05,34]],hits:[{t:.75,until:1.05,every:.04,once:!0,shape:mi(2.2),off:1.2,mult:2.2,kb:7,tele:"rect",teleShape:Rs(12,3)}]},wd_fan:{anim:"Throw",clip:[.3,1.1],dur:1.3,lock:1.25,super:!0,spawns:[{t:.8,proj:"arrow",fan:[-.5,-.25,0,.25,.5],mult:1.1}],tele:{shape:Rs(18,.6),until:.8}},wd_spin:{anim:"2H_Melee_Attack_Spin",clip:[.1,2.3],dur:1.7,lock:1.65,super:!0,hits:[{t:1,shape:mi(6),mult:1.8,kb:6,tele:!0,fx:"kingSpin"}]},wd_cross:{anim:"2H_Melee_Attack_Spin",clip:[.1,2.3],dur:2.3,lock:2.25,super:!0,noTrack:!0,minDiff:2,hits:[0,1,2,3].map(i=>({t:1.9,shape:Rs(24,3.4),rot:i*Math.PI/2,mult:5,kb:5,tele:"rect",fx:"doom",lethalFrom:2}))},wd_cross45:{anim:"2H_Melee_Attack_Spin",clip:[.1,2.3],dur:2.1,lock:2.05,super:!0,noTrack:!0,minDiff:2,hits:[0,1,2,3].map(i=>({t:1.7,shape:Rs(24,3.4),rot:Math.PI/4+i*Math.PI/2,mult:5,kb:5,tele:"rect",fx:"doom",lethalFrom:2}))},wd_vanish:{anim:"Throw",clip:[.3,1.1],dur:1,lock:.95,super:!0,iframes:[.3,.9],spawns:[{t:.55,behind:3}]}},_0={king:{1:[["kg_slash1","kg_slash2","kg_slash3"],["kg_leap"],["kg_spin"],["kg_charge"],["kg_summon"],["kg_leap","kg_spin"]],2:[["kg_slash1","kg_slash2","kg_slash3"],["kg_leap","kg_leap"],["kg_spin"],["kg_charge"],["kg_ring"],["kg_summon","kg_ring"],["kg_leap","kg_spin"],["kg_doom"],["kg_doom","kg_ring"]]},priest:{1:[["pr_volley"],["pr_bolt","pr_bolt"],["pr_nova"],["pr_summon"],["pr_volley","pr_bolt"]],2:[["pr_rain"],["pr_volley","pr_volley"],["pr_nova","pr_bolt"],["pr_summon","pr_rain"],["pr_rain","pr_nova"],["pr_doom"],["pr_doom","pr_volley"]]},warden:{1:[["wd_combo1","wd_combo2"],["wd_dash"],["wd_fan"],["wd_spin"],["wd_vanish","wd_combo1"]],2:[["wd_combo1","wd_combo2","wd_spin"],["wd_dash","wd_dash"],["wd_fan","wd_fan"],["wd_vanish","wd_combo2","wd_combo1"],["wd_spin","wd_dash"],["wd_cross","wd_cross45"],["wd_cross"]]}},is=10});var S0={};Yg(S0,{Actor:()=>Ho,enemyActor:()=>zh,playerActor:()=>Vo});function fM(){let i=new wt,e=new Qt({color:"#8a5a2c",roughness:.7}),t=.46,n=Math.PI*.8,s=new Oe(new Ks(t,.03,6,20,n),e);s.rotation.z=(Math.PI-n)/2;let r=t*Math.sin((Math.PI-n)/2),a=2*t*Math.cos((Math.PI-n)/2),o=new Oe(new vs(.006,.006,a,4),new yt({color:"#e8dcc0"}));o.rotation.z=Math.PI/2,o.position.y=r;let c=new Oe(new vs(.04,.04,.16,6),new Qt({color:"#3a2414",roughness:.9}));c.rotation.z=Math.PI/2,c.position.y=t,i.add(s,o,c),i.position.y=-t;let l=new wt;return l.add(i),l.rotation.set(0,0,Math.PI/2),l.traverse(h=>{h.isMesh&&(h.castShadow=!0)}),l}function Vo(i,e,t,n=null){let s=$e[e],r=Ct(e,t),a=r.weapon==="bow",o=new Ho(i,{model:s.model,show:a?[]:s.show,hideNodes:s.hide||[]});if(o.cls=e,o.spec=r.id,a&&o.handR){let c=fM();o.handR.add(c),c.traverse(l=>{l.isMesh&&l.material.emissive&&o.mats.push(l.material)})}return _a(o,s.model,pr(n,e)),o.cfg={idle:s.idle,run:s.run,runSpeed:s.base.speed,death:"Death_A"},o}function zh(i,e,t){let n=st[e],s=(n.scale||1)*(t?br.scale:1),r=new Ho(i,{model:n.model,weapons:n.weapons,scale:s,boss:!!n.crown,elite:t,hideNodes:n.crown?["Skeleton_Warrior_Helmet"]:[]});return n.tint&&r.tint(n.tint,.35),r.cfg={idle:n.idle,run:n.walk,runSpeed:n.speed,death:"Death_C_Skeletons",intro:n.introAnim},r}var uM,M0,dM,Ho,Fh=Ds(()=>{zt();pi();mr();Uh();ss();uM={Knight:["1H_Sword_Offhand","Badge_Shield","Rectangle_Shield","Round_Shield","Spike_Shield","1H_Sword","2H_Sword"],Barbarian:["1H_Axe_Offhand","Barbarian_Round_Shield","1H_Axe","2H_Axe","Mug","Barbarian_Hat"],Mage:["Spellbook","Spellbook_open","1H_Wand","2H_Staff","Mage_Hat"],Rogue_Hooded:["Knife_Offhand","1H_Crossbow","2H_Crossbow","Knife","Throwable"]},M0=i=>Ot[i]||Cs[i],dM=.12,Ho=class{constructor(e,{model:t,show:n=[],weapons:s=[],scale:r=1,boss:a=!1,elite:o=!1,hideNodes:c=[]}){this.assets=e,this.root=new wt,this.model=e.character(t),this.model.scale.setScalar(r),this.root.add(this.model),this.scale=r;let l=[...(uM[t]||[]).filter(h=>!n.includes(h)),...c];this.mats=[],this.model.traverse(h=>{l.includes(h.name)&&(h.visible=!1),h.isMesh&&this.mats.push(h.material),h.isBone&&h.name==="head"&&(this.head=h),h.isBone&&(h.name==="handslotr"||h.name==="handslot.r")&&(this.handR=h),h.isBone&&(h.name==="handslotl"||h.name==="handslot.l")&&(this.handL=h)});for(let[h,u]of s){let d=e.prop(h);d.traverse(f=>{f.isMesh&&(f.castShadow=!0,this.mats.push(f.material=f.material.clone()))}),(u==="handslot.l"?this.handL:this.handR)?.add(d)}this.mixer=new fo(this.model),this.actions=new Map,this.cur=null,this.curName="",this.flashT=0,this.sink=0,this.headPos=new P,a&&this.makeCrown(),o&&this.tint("#ff5a3c",.35)}clip(e){let t=this.actions.get(e);if(!t){let n=this.assets.clips[e];if(!n)return null;t=this.mixer.clipAction(n),this.actions.set(e,t)}return t}play(e,{loop:t=!0,time:n=null,speed:s=1}={}){let r=this.clip(e);r&&(this.curName!==e&&(r.reset(),r.setLoop(t?eh:Ql,1/0),r.clampWhenFinished=!t,r.enabled=!0,r.setEffectiveWeight(1),this.cur&&r.crossFadeFrom(this.cur,dM,!1),r.play(),this.cur=r,this.curName=e),n!==null?(r.time=Math.max(0,Math.min(n,r.getClip().duration-.001)),r.timeScale=0):r.timeScale=s)}animate(e,t,n){if(e.dead)this.play(n.death||"Death_A",{loop:!1}),e.deadT>2.4&&(this.sink=Math.min(1,(e.deadT-2.4)/1.6));else if(e.down)this.play("Lie_Idle");else if(e.act&&M0(e.act)?.anim){let s=M0(e.act),r=this.assets.clips[s.anim],[a,o]=s.clip||[0,r.duration],c=e.actT;s.loopAnim?c=a+c*1.4%(o-a):s.hold?c=a+Math.min(1,c/Math.min(s.dur,(o-a)*1.2))*(o-a):c=a+Math.min(1,c/s.dur)*(o-a),this.play(s.anim,{loop:!1,time:c})}else e.intro?this.play(n.intro||"Taunt",{loop:!0,speed:.8}):e.moving?this.play(n.run,{speed:n.runSpeed?Math.max(.6,e.speed/n.runSpeed):1}):this.play(n.idle);if(this.mixer.update(this.hitstop>0?0:t),this.hitstop>0&&(this.hitstop-=t),this.flashT>0){this.flashT-=t;let s=Math.max(0,this.flashT/.12);for(let r of this.mats)r.emissive?.setRGB(s*1.2,s*1.1,s);this.flashT<=0&&this.restoreTint()}this.model.position.y=-this.sink*2.2*this.scale,this.head&&this.head.getWorldPosition(this.headPos)}flash(){this.flashT=.12}reset(){this.mixer.stopAllAction(),this.cur=null,this.curName="",this.sink=0,this.hitstop=0,this.flashT=0,this.counterGlow=0,this.model.position.y=0,this.restoreTint()}addXray(e){for(let s of this.mats)s.stencilWrite=!0,s.stencilRef=1,s.stencilFunc=Ha,s.stencilZPass=rd;let t=new yt({color:e,transparent:!0,opacity:.5,depthWrite:!1,depthFunc:aa,stencilWrite:!0,stencilRef:1,stencilFunc:ad,stencilFail:ai,stencilZFail:ai,stencilZPass:ai}),n=[];this.model.traverse(s=>{s.isSkinnedMesh&&s.visible&&n.push(s)});for(let s of n){let r=new qs(s.geometry,t);r.bind(s.skeleton,s.bindMatrix),r.frustumCulled=!1,r.renderOrder=30,s.parent.add(r)}}tint(e,t){this.tintColor=new re(e).multiplyScalar(t),this.restoreTint()}restoreTint(){for(let e of this.mats)e.emissive&&e.name!=="Glow"&&(this.tintColor?e.emissive.copy(this.tintColor):e.emissive.setRGB(0,0,0))}makeCrown(){let e=new wt,t=new Qt({color:"#d8a640",metalness:.9,roughness:.25,emissive:"#ff7a1a",emissiveIntensity:1.2}),n=new Oe(new vs(.34,.3,.14,16,1,!0),t);e.add(n);for(let s=0;s<7;s++){let r=s/7*Math.PI*2,a=new Oe(new to(.06,.28,6),t);a.position.set(Math.cos(r)*.32,.18,Math.sin(r)*.32),e.add(a)}e.position.set(0,.62,0),this.head?.add(e),this.crown=e;for(let s of this.mats)s.name==="Glow"&&(s.emissive.set("#ff5020"),s.emissiveIntensity=7)}}});zt();zt();zt();var Ci={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};zt();zt();var Sn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},w1=new Ki(-1,1,1,-1,0,1),kd=class extends Mt{constructor(){super(),this.setAttribute("position",new nt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new nt([0,2,0,0,2,0],2))}},E1=new kd,Pi=class{constructor(e){this._mesh=new Oe(E1,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,w1)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var lr=class extends Sn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof it?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Mn.clone(e.uniforms),this.material=new it({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Pi(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var wo=class extends Sn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},lh=class extends Sn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var hh=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ye);this._width=n.width,this._height=n.height,t=new qt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:un}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new lr(Ci),this.copyPass.material.blending=Jt,this.clock=new uo}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}wo!==void 0&&(a instanceof wo?n=!0:a instanceof lh&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ye);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};zt();var uh=class extends Sn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new re}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};zt();zt();var Eo={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ye},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Ie},cameraProjectionMatrixInverse:{value:new Ie},cameraWorldMatrix:{value:new Ie},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new P(-1,-1,-1)},sceneBoxMax:{value:new P(1,1,1)}},vertexShader:`

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
		}`},Ao={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},dh={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function Km(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=A1(e),n=t.length,s=new Uint8Array(n*4);for(let a=0;a<n;++a){let o=t[a],c=2*Math.PI*o/n,l=new P(Math.cos(c),Math.sin(c),0).normalize();s[a*4]=(l.x*.5+.5)*255,s[a*4+1]=(l.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}let r=new qi(s,e,e);return r.wrapS=An,r.wrapT=An,r.needsUpdate=!0,r}function A1(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let a=1;a<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=a++;r++,s--}return n}zt();var Ro={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Ld(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ye},cameraProjectionMatrixInverse:{value:new Ie},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Ld(i,e,t){let n=R1(i,e,t),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let a=n[r];s+=`vec3(${a.x}, ${a.y}, ${a.z})${r<i-1?",":")"}`}return s}function R1(i,e,t){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*e*s/i,a=Math.pow(s/(i-1),t);n.push(new P(Math.cos(r),Math.sin(r),a))}return n}var fh=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,s,r,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,c=Math.floor(e+o),l=Math.floor(t+o),h=(3-Math.sqrt(3))/6,u=(c+l)*h,d=c-u,f=l-u,m=e-d,b=t-f,g,p;m>b?(g=1,p=0):(g=0,p=1);let v=m-g+h,_=b-p+h,x=m-1+2*h,w=b-1+2*h,E=c&255,R=l&255,I=this.perm[E+this.perm[R]]%12,S=this.perm[E+g+this.perm[R+p]]%12,y=this.perm[E+1+this.perm[R+1]]%12,C=.5-m*m-b*b;C<0?n=0:(C*=C,n=C*C*this._dot(this.grad3[I],m,b));let D=.5-v*v-_*_;D<0?s=0:(D*=D,s=D*D*this._dot(this.grad3[S],v,_));let F=.5-x*x-w*w;return F<0?r=0:(F*=F,r=F*F*this._dot(this.grad3[y],x,w)),70*(n+s+r)}noise3d(e,t,n){let s,r,a,o,l=(e+t+n)*.3333333333333333,h=Math.floor(e+l),u=Math.floor(t+l),d=Math.floor(n+l),f=1/6,m=(h+u+d)*f,b=h-m,g=u-m,p=d-m,v=e-b,_=t-g,x=n-p,w,E,R,I,S,y;v>=_?_>=x?(w=1,E=0,R=0,I=1,S=1,y=0):v>=x?(w=1,E=0,R=0,I=1,S=0,y=1):(w=0,E=0,R=1,I=1,S=0,y=1):_<x?(w=0,E=0,R=1,I=0,S=1,y=1):v<x?(w=0,E=1,R=0,I=0,S=1,y=1):(w=0,E=1,R=0,I=1,S=1,y=0);let C=v-w+f,D=_-E+f,F=x-R+f,H=v-I+2*f,X=_-S+2*f,W=x-y+2*f,ee=v-1+3*f,V=_-1+3*f,Z=x-1+3*f,le=h&255,Me=u&255,Ve=d&255,ot=this.perm[le+this.perm[Me+this.perm[Ve]]]%12,dt=this.perm[le+w+this.perm[Me+E+this.perm[Ve+R]]]%12,et=this.perm[le+I+this.perm[Me+S+this.perm[Ve+y]]]%12,j=this.perm[le+1+this.perm[Me+1+this.perm[Ve+1]]]%12,Y=.6-v*v-_*_-x*x;Y<0?s=0:(Y*=Y,s=Y*Y*this._dot3(this.grad3[ot],v,_,x));let de=.6-C*C-D*D-F*F;de<0?r=0:(de*=de,r=de*de*this._dot3(this.grad3[dt],C,D,F));let Ce=.6-H*H-X*X-W*W;Ce<0?a=0:(Ce*=Ce,a=Ce*Ce*this._dot3(this.grad3[et],H,X,W));let ge=.6-ee*ee-V*V-Z*Z;return ge<0?o=0:(ge*=ge,o=ge*ge*this._dot3(this.grad3[j],ee,V,Z)),32*(s+r+a+o)}noise4d(e,t,n,s){let r=this.grad4,a=this.simplex,o=this.perm,c=(Math.sqrt(5)-1)/4,l=(5-Math.sqrt(5))/20,h,u,d,f,m,b=(e+t+n+s)*c,g=Math.floor(e+b),p=Math.floor(t+b),v=Math.floor(n+b),_=Math.floor(s+b),x=(g+p+v+_)*l,w=g-x,E=p-x,R=v-x,I=_-x,S=e-w,y=t-E,C=n-R,D=s-I,F=S>y?32:0,H=S>C?16:0,X=y>C?8:0,W=S>D?4:0,ee=y>D?2:0,V=C>D?1:0,Z=F+H+X+W+ee+V,le=a[Z][0]>=3?1:0,Me=a[Z][1]>=3?1:0,Ve=a[Z][2]>=3?1:0,ot=a[Z][3]>=3?1:0,dt=a[Z][0]>=2?1:0,et=a[Z][1]>=2?1:0,j=a[Z][2]>=2?1:0,Y=a[Z][3]>=2?1:0,de=a[Z][0]>=1?1:0,Ce=a[Z][1]>=1?1:0,ge=a[Z][2]>=1?1:0,Ye=a[Z][3]>=1?1:0,Xt=S-le+l,k=y-Me+l,pt=C-Ve+l,He=D-ot+l,Le=S-dt+2*l,xe=y-et+2*l,mt=C-j+2*l,ve=D-Y+2*l,Ge=S-de+3*l,Vt=y-Ce+3*l,At=C-ge+3*l,A=D-Ye+3*l,M=S-1+4*l,z=y-1+4*l,q=C-1+4*l,K=D-1+4*l,G=g&255,Se=p&255,ie=v&255,be=_&255,Ee=o[G+o[Se+o[ie+o[be]]]]%32,te=o[G+le+o[Se+Me+o[ie+Ve+o[be+ot]]]]%32,he=o[G+dt+o[Se+et+o[ie+j+o[be+Y]]]]%32,Ne=o[G+de+o[Se+Ce+o[ie+ge+o[be+Ye]]]]%32,Ae=o[G+1+o[Se+1+o[ie+1+o[be+1]]]]%32,oe=.6-S*S-y*y-C*C-D*D;oe<0?h=0:(oe*=oe,h=oe*oe*this._dot4(r[Ee],S,y,C,D));let ze=.6-Xt*Xt-k*k-pt*pt-He*He;ze<0?u=0:(ze*=ze,u=ze*ze*this._dot4(r[te],Xt,k,pt,He));let L=.6-Le*Le-xe*xe-mt*mt-ve*ve;L<0?d=0:(L*=L,d=L*L*this._dot4(r[he],Le,xe,mt,ve));let J=.6-Ge*Ge-Vt*Vt-At*At-A*A;J<0?f=0:(J*=J,f=J*J*this._dot4(r[Ne],Ge,Vt,At,A));let se=.6-M*M-z*z-q*q-K*K;return se<0?m=0:(se*=se,m=se*se*this._dot4(r[Ae],M,z,q,K)),27*(h+u+d+f+m)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}_dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}};var Co=class i extends Sn{constructor(e,t,n=512,s=512,r,a,o){super(),this.width=n,this.height=s,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Km(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new qt(this.width,this.height,{type:un}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new it({defines:Object.assign({},Eo.defines),uniforms:Mn.clone(Eo.uniforms),vertexShader:Eo.vertexShader,fragmentShader:Eo.fragmentShader,blending:Jt,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new io,this.normalMaterial.blending=Jt,this.pdMaterial=new it({defines:Object.assign({},Ro.defines),uniforms:Mn.clone(Ro.uniforms),vertexShader:Ro.vertexShader,fragmentShader:Ro.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new it({defines:Object.assign({},Ao.defines),uniforms:Mn.clone(Ao.uniforms),vertexShader:Ao.vertexShader,fragmentShader:Ao.fragmentShader,blending:Jt}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new it({uniforms:Mn.clone(Ci.uniforms),vertexShader:Ci.vertexShader,fragmentShader:Ci.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:go,blendDst:er,blendEquation:On,blendSrcAlpha:mo,blendDstAlpha:er,blendEquationAlpha:On}),this.blendMaterial=new it({uniforms:Mn.clone(dh.uniforms),vertexShader:dh.vertexShader,fragmentShader:dh.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:nl,blendSrc:go,blendDst:er,blendEquation:On,blendSrcAlpha:mo,blendDstAlpha:er,blendEquationAlpha:On}),this._fsQuad=new Pi(null),this._originalClearColor=new re,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new js,this.depthTexture.format=Ss,this.depthTexture.type=Ms,this.normalRenderTarget=new qt(this.width,this.height,{minFilter:Yt,magFilter:Yt,type:un,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Ld(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Jt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Jt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Jt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Jt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Jt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new fh,n=e*e*4,s=new Uint8Array(n);for(let a=0;a<e;a++)for(let o=0;o<e;o++){let c=a,l=o;s[(a*e+o)*4]=(t.noise(c,l)*.5+.5)*255,s[(a*e+o)*4+1]=(t.noise(c+e,l)*.5+.5)*255,s[(a*e+o)*4+2]=(t.noise(c,l+e)*.5+.5)*255,s[(a*e+o)*4+3]=(t.noise(c+e,l+e)*.5+.5)*255}let r=new qi(s,e,e,yn,Gn);return r.wrapS=An,r.wrapT=An,r.needsUpdate=!0,r}};Co.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};zt();zt();var Jm={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new re(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var ma=class i extends Sn{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new ye(e.x,e.y):new ye(256,256),this.clearColor=new re(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new qt(r,a,{type:un}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new qt(r,a,{type:un});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let d=new qt(r,a,{type:un});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}let o=Jm;this.highPassUniforms=Mn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new it({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ye(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Mn.clone(Ci.uniforms),this.blendMaterial=new it({uniforms:this.copyUniforms,vertexShader:Ci.vertexShader,fragmentShader:Ci.fragmentShader,blending:en,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new re,this._oldClearAlpha=1,this._basic=new yt,this._fsQuad=new Pi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ye(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new it({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ye(.5,.5)},direction:{value:new ye(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}};ma.BlurDirectionX=new ye(1,0);ma.BlurDirectionY=new ye(0,1);zt();var Po={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var ph=class extends Sn{constructor(){super(),this.uniforms=Mn.clone(Po.uniforms),this.material=new no({name:Po.name,uniforms:this.uniforms,vertexShader:Po.vertexShader,fragmentShader:Po.fragmentShader}),this._fsQuad=new Pi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},je.getTransfer(this._outputColorSpace)===ct&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ll?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===hl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ul?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===oa?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===fl?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===pl?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===dl&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var C1={uniforms:{tDiffuse:{value:null},uTime:{value:0},uVignette:{value:.42},uSaturation:{value:1.08},uLift:{value:new P(.012,.01,.022)},uGain:{value:new P(1.04,1,.97)},uHurt:{value:0},uDesat:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
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
    }`},P1={uniforms:{tDiffuse:{value:null}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform sampler2D tDiffuse; varying vec2 vUv;
    void main(){
      vec4 c = texture2D(tDiffuse, vUv);
      if (any(isnan(c)) || any(isinf(c))) c = vec4(0.0, 0.0, 0.0, 1.0);
      gl_FragColor = vec4(min(c.rgb, vec3(24.0)), c.a);
    }`},hr=(i,e,t)=>i+(e-i)*t,Io=(i,e,t)=>{let n=Math.max(0,Math.min(1,(t-i)/(e-i)));return n*n*(3-2*n)},Zm=(i,e,t)=>{let n=e-i;for(;n>Math.PI;)n-=Math.PI*2;for(;n<-Math.PI;)n+=Math.PI*2;return i+n*t},mh=class{constructor(e){this.canvas=e;let t=this.renderer=new oh({canvas:e,antialias:!1,stencil:!0,powerPreference:"high-performance"});t.setPixelRatio(Math.min(devicePixelRatio,1.5)),t.outputColorSpace=Ut,t.toneMapping=oa,t.toneMappingExposure=1.05,t.shadowMap.enabled=!0,t.shadowMap.type=tl,this.scene=new Ya,this.scene.background=new re("#06050a"),this.scene.fog=new $a("#08070c",.026),this.camera=new $t(34,1,.5,200),this.camOffset=new P(0,19,13.5),this.camTarget=new P,this.look=new P,this.cine=null,this.cinePos=new P,this.cineLook=new P,this.zoom=0,this.zoomTo=0,this.faceYaw=null,this.camYaw=null,this.shake=0,this.quality=2,this.hemi=new oo("#5a6690","#140f0c",.32),this.scene.add(this.hemi);let n=this.sun=new Qs("#9fb0ee",.75);n.castShadow=!0,n.shadow.mapSize.set(2048,2048),n.shadow.bias=-4e-4,n.shadow.normalBias=.03;let s=n.shadow.camera;s.left=-26,s.right=26,s.top=26,s.bottom=-26,s.near=1,s.far=80,this.scene.add(n,n.target),this.heroLight=new Vn("#ffd9a8",0,9,1.6),this.scene.add(this.heroLight),this.cap=1.5,this.dynScale=1,this.buildComposer(),this.resize(),addEventListener("resize",()=>this.resize())}buildComposer(){let e=this.renderer,t=new qt(2,2,{type:un,samples:4,stencilBuffer:!0}),n=this.composer=new hh(e,t);n.addPass(new uh(this.scene,this.camera)),this.gtao=new Co(this.scene,this.camera,2,2),this.gtao.updateGtaoMaterial({radius:.9,distanceExponent:1.4,thickness:1.2,scale:1.1,samples:8}),this.gtao.blendIntensity=.85,n.addPass(this.gtao),n.addPass(new lr(P1)),this.bloom=new ma(new ye(2,2),.75,.55,.82),n.addPass(this.bloom),this.grade=new lr(C1),n.addPass(this.grade),n.addPass(new ph)}setQuality(e){e=Math.max(0,Math.min(3,e|0)),this.quality=e,this.gtao.enabled=e>=3,this.bloom.enabled=e>=1;let t=e>=1;this.renderer.shadowMap.enabled!==t&&(this.renderer.shadowMap.enabled=t);let n=e>=2?2048:1024;this.sun.shadow.mapSize.x!==n&&(this.sun.shadow.mapSize.set(n,n),this.sun.shadow.map?.dispose(),this.sun.shadow.map=null);let s=e>=3?4:e>=1?2:0;for(let r of[this.composer.renderTarget1,this.composer.renderTarget2])r.samples!==s&&(r.samples=s,r.dispose());this.cap=e>=2?1.5:e===1?1:.85,this.dynScale=1,this.resize()}adapt(e){let t=this.dynScale;e>1/50&&this.dynScale>.6?this.dynScale=Math.max(.6,this.dynScale-.1):e<1/58&&this.dynScale<1&&(this.dynScale=Math.min(1,this.dynScale+.05)),this.dynScale!==t&&this.resize()}resize(){let e=innerWidth,t=innerHeight;this.renderer.setPixelRatio(Math.min(devicePixelRatio,this.cap??1.5)*(this.dynScale??1)),this.renderer.setSize(e,t,!1),this.canvas.style.width=e+"px",this.canvas.style.height=t+"px",this.camera.aspect=e/t,this.camera.fov=e<t?52:34,this.camera.updateProjectionMatrix();let n=this.renderer.getPixelRatio();this.composer.setPixelRatio(n),this.composer.setSize(e,t)}follow(e,t,n,s){let r=1-Math.exp(-n*6),a=e+(s?.x||0),o=t+(s?.z||0);this.camTarget.x+=(a-this.camTarget.x)*r,this.camTarget.z+=(o-this.camTarget.z)*r}snap(e,t){this.camTarget.set(e,0,t)}cinematic(e){this.cine={...e,t:0}}cineShot(e,t,n){let s=this.cine;s.t+=e;let r=Math.min(1,s.t/s.dur);if(r>=1){this.cine=null;return}let a=Io(0,.16,r)*(1-Io(.84,1,r)),o=Io(0,1,r),c=hr(s.dist[0],s.dist[1],o);this.cinePos.set(s.x+Math.cos(s.yaw)*c,hr(s.height[0],s.height[1],o),s.z+Math.sin(s.yaw)*c),this.cineLook.set(s.x,hr(s.look[0],s.look[1],o),s.z),t.lerp(this.cinePos,a),n.lerp(this.cineLook,a)}setAtmosphere({fog:e,bg:t,sky:n="#5a6690",ground:s="#140f0c",moon:r="#9fb0ee",moonI:a=.75}){this.scene.fog.color.set(e),this.scene.background.set(t),this.hemi.color.set(n),this.hemi.groundColor.set(s),this.sun.color.set(r),this.sun.intensity=a}addShake(e){this.shake=Math.min(1.2,this.shake+e)}render(e,t){let n=this.camera;this.shake*=Math.exp(-e*9);let s=this.shake;this.zoom+=(this.zoomTo-this.zoom)*(1-Math.exp(-e*8));let r=this.camOffset,a=Io(0,1,this.zoom),o=Math.atan2(r.z,r.x),c=this.faceYaw===null?o:Zm(o,this.faceYaw,Io(.55,1,this.zoom));this.camYaw=this.camYaw===null?c:Zm(this.camYaw,c,1-Math.exp(-e*3));let l=hr(Math.hypot(r.x,r.z),4.8,a),h=hr(r.y,2,a);n.position.set(this.camTarget.x+Math.cos(this.camYaw)*l,h,this.camTarget.z+Math.sin(this.camYaw)*l),this.look.set(this.camTarget.x,hr(.8,1.2,a),this.camTarget.z),this.cine&&this.cineShot(e,n.position,this.look),n.position.x+=(Math.random()-.5)*s,n.position.y+=(Math.random()-.5)*s*.6,n.position.z+=(Math.random()-.5)*s,n.lookAt(this.look);let u=this.heroLight.userData.follow;if(this.cine){let f=this.cine;this.heroLight.position.set(f.x+Math.cos(f.yaw)*3.5,this.cineLook.y+.5,f.z+Math.sin(f.yaw)*3.5),this.heroLight.intensity=45,this.heroLight.distance=14}else u&&u.parent?(this.heroLight.position.set(u.position.x+Math.cos(this.camYaw)*1.8*a,hr(3.2,2.3,a),u.position.z+Math.sin(this.camYaw)*1.8*a),this.heroLight.intensity=9,this.heroLight.distance=9):this.heroLight.intensity=0;let d=this.sun;d.position.set(this.camTarget.x-12,30,this.camTarget.z+8),d.target.position.set(this.camTarget.x,0,this.camTarget.z),this.grade.uniforms.uTime.value=t,this.composer.render(e)}pick(e,t){let n=new ye(e/innerWidth*2-1,-(t/innerHeight)*2+1),s=new po;s.setFromCamera(n,this.camera);let r=-s.ray.origin.y/Math.min(s.ray.direction.y,-.05);return{x:s.ray.origin.x+s.ray.direction.x*r,z:s.ray.origin.z+s.ray.direction.z*r}}toScreen(e){let t=e.clone().project(this.camera);return{x:(t.x*.5+.5)*innerWidth,y:(-t.y*.5+.5)*innerHeight,visible:t.z<1}}};zt();zt();zt();function gh(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new Mt,l=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(t){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+h);h+=i[d].attributes.position.count}c.setIndex(u)}for(let h in r){let u=Qm(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let b=0;b<a[h].length;++b)f.push(a[h][b][d]);let m=Qm(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}return c}function Qm(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new Pt(a,t,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let u=c/t;for(let d=0,f=h.count;d<f;d++)for(let m=0;m<t;m++){let b=h.getComponent(d,m);o.setComponent(d+u,m,b)}}else a.set(h.array,c);c+=h.count*t}return s!==void 0&&(o.gpuType=s),o}function Dd(i,e){if(e===sd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===ha||e===Mo){let t=i.getIndex();if(t===null){let a=[],o=i.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===ha)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var bh=class extends wi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Hd(t)}),this.register(function(t){return new Vd(t)}),this.register(function(t){return new Jd(t)}),this.register(function(t){return new Zd(t)}),this.register(function(t){return new Qd(t)}),this.register(function(t){return new Wd(t)}),this.register(function(t){return new qd(t)}),this.register(function(t){return new Xd(t)}),this.register(function(t){return new jd(t)}),this.register(function(t){return new Bd(t)}),this.register(function(t){return new $d(t)}),this.register(function(t){return new Gd(t)}),this.register(function(t){return new Kd(t)}),this.register(function(t){return new Yd(t)}),this.register(function(t){return new Fd(t)}),this.register(function(t){return new ef(t)}),this.register(function(t){return new tf(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=Ji.extractUrlBase(e);a=Ji.resolveURL(l,this.path)}else a=Ji.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new ra(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===s0){try{a[Je.KHR_BINARY_GLTF]=new nf(e)}catch(u){s&&s(u);return}r=JSON.parse(a[Je.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new hf(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Je.KHR_MATERIALS_UNLIT:a[u]=new Od;break;case Je.KHR_DRACO_MESH_COMPRESSION:a[u]=new sf(r,this.dracoLoader);break;case Je.KHR_TEXTURE_TRANSFORM:a[u]=new rf;break;case Je.KHR_MESH_QUANTIZATION:a[u]=new af;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function I1(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var Je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Fd=class{constructor(e){this.parser=e,this.name=Je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new re(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],hn);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Qs(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Vn(h),l.distance=u;break;case"spot":l=new lo(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Ii(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},Od=class{constructor(){this.name=Je.KHR_MATERIALS_UNLIT}getMaterialType(){return yt}extendParams(e,t,n){let s=[];e.color=new re(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],hn),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Ut))}return Promise.all(s)}},Bd=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Hd=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ye(o,o)}return Promise.all(r)}},Vd=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Gd=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},Wd=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new re(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],hn)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Ut)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},qd=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},Xd=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new re().setRGB(o[0],o[1],o[2],hn),Promise.all(r)}},jd=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},$d=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new re().setRGB(o[0],o[1],o[2],hn),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Ut)),Promise.all(r)}},Yd=class{constructor(e){this.parser=e,this.name=Je.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}},Kd=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},Jd=class{constructor(e){this.parser=e,this.name=Je.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Zd=class{constructor(e){this.parser=e,this.name=Je.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},Qd=class{constructor(e){this.parser=e,this.name=Je.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},ef=class{constructor(e){this.name=Je.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},tf=class{constructor(e){this.name=Je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==Jn.TRIANGLES&&l.mode!==Jn.TRIANGLE_STRIP&&l.mode!==Jn.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(let m of u){let b=new Ie,g=new P,p=new ln,v=new P(1,1,1),_=new Xs(m.geometry,m.material,d);for(let x=0;x<d;x++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,x),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,x),c.SCALE&&v.fromBufferAttribute(c.SCALE,x),_.setMatrixAt(x,b.compose(g,p,v));for(let x in c)if(x==="_COLOR_0"){let w=c[x];_.instanceColor=new di(w.array,w.itemSize,w.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&m.geometry.setAttribute(x,c[x]);It.prototype.copy.call(_,m),this.parser.assignFinalMaterial(_),f.push(_)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},s0="glTF",ko=12,e0={JSON:1313821514,BIN:5130562},nf=class{constructor(e){this.name=Je.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,ko),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==s0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-ko,r=new DataView(e,ko),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let c=r.getUint32(a,!0);if(a+=4,c===e0.JSON){let l=new Uint8Array(e,ko+a,o);this.content=n.decode(l)}else if(c===e0.BIN){let l=ko+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},sf=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let h in a){let u=cf[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=cf[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],f=ga[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let m in f.attributes){let b=f.attributes[m],g=c[m];g!==void 0&&(b.normalized=g)}u(f)},o,l,hn,d)})})}},rf=class{constructor(){this.name=Je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},af=class{constructor(){this.name=Je.KHR_MESH_QUANTIZATION}},xh=class extends ji{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,m=e*l,b=m-l,g=-2*f+3*d,p=f-d,v=1-g,_=p-d+u;for(let x=0;x!==o;x++){let w=a[b+x+o],E=a[b+x+c]*h,R=a[m+x+o],I=a[m+x]*h;r[x]=v*w+_*E+g*R+p*I}return r}},k1=new ln,of=class extends xh{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return k1.fromArray(r).normalize().toArray(r),r}},Jn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ga={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},t0={9728:Yt,9729:xn,9984:bl,9985:ca,9986:ir,9987:fi},n0={33071:xi,33648:Xr,10497:An},Nd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},cf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ts={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},L1={CUBICSPLINE:void 0,LINEAR:Gs,STEP:Vs},Ud={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function D1(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Qt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:hi})),i.DefaultMaterial}function ur(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ii(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function N1(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;a.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function U1(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function z1(i){let e,t=i.extensions&&i.extensions[Je.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+zd(t.attributes):e=i.indices+":"+zd(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+zd(i.targets[n]);return e}function zd(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function lf(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function F1(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var O1=new Ie,hf=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new I1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new ao(this.options.manager):this.textureLoader=new ho(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ra(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return ur(r,o,s),Ii(o,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,h]of a.children.entries())r(h,o.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Je.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(Ji.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=Nd[s.type],o=ga[s.componentType],c=s.normalized===!0,l=new o(s.count*a);return Promise.resolve(new Pt(l,a,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],c=Nd[s.type],l=ga[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,m=s.normalized===!0,b,g;if(f&&f!==u){let p=Math.floor(d/f),v="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,_=t.cache.get(v);_||(b=new l(o,p*f,s.count*f/h),_=new ea(b,f/h),t.cache.add(v,_)),g=new ta(_,c,d%f/h,m)}else o===null?b=new l(s.count*c):b=new l(o,d,s.count*c),g=new Pt(b,c,m);if(s.sparse!==void 0){let p=Nd.SCALAR,v=ga[s.sparse.indices.componentType],_=s.sparse.indices.byteOffset||0,x=s.sparse.values.byteOffset||0,w=new v(a[1],_,s.sparse.count*p),E=new l(a[2],x,s.sparse.count*c);o!==null&&(g=new Pt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let R=0,I=w.length;R<I;R++){let S=w[R];if(g.setX(S,E[R*c]),c>=2&&g.setY(S,E[R*c+1]),c>=3&&g.setZ(S,E[R*c+2]),c>=4&&g.setW(S,E[R*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=t0[d.magFilter]||xn,h.minFilter=t0[d.minFilter]||fi,h.wrapS=n0[d.wrapS]||An,h.wrapT=n0[d.wrapT]||An,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Yt&&h.minFilter!==xn,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=s.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(u){l=!0;let d=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let m=d;t.isImageBitmapLoader===!0&&(m=function(b){let g=new rn(b);g.needsUpdate=!0,d(g)}),t.load(Ji.resolveURL(u,r.path),m,void 0,f)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),Ii(u,a),u.userData.mimeType=a.mimeType||F1(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Je.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[Je.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(a);a=r.extensions[Je.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new sa,vn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Xi,vn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Qt}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},c=r.extensions||{},l=[];if(c[Je.KHR_MATERIALS_UNLIT]){let u=s[Je.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new re(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],hn),o.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,Ut)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Kt);let h=r.alphaMode||Ud.OPAQUE;if(h===Ud.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Ud.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==yt&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new ye(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==yt&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==yt){let u=r.emissiveFactor;o.emissive=new re().setRGB(u[0],u[1],u[2],hn)}return r.emissiveTexture!==void 0&&a!==yt&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Ut)),Promise.all(l).then(function(){let u=new a(o);return r.name&&(u.name=r.name),Ii(u,r),t.associations.set(u,{materials:e}),r.extensions&&ur(s,u,r),u})}createUniqueName(e){let t=bt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[Je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return i0(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],h=z1(l),u=s[h];if(u)a.push(u.promise);else{let d;l.extensions&&l.extensions[Je.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=i0(new Mt,l,t),s[h]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let h=a[c].material===void 0?D1(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,m=h.length;f<m;f++){let b=h[f],g=a[f],p,v=l[f];if(g.mode===Jn.TRIANGLES||g.mode===Jn.TRIANGLE_STRIP||g.mode===Jn.TRIANGLE_FAN||g.mode===void 0)p=r.isSkinnedMesh===!0?new qs(b,v):new Oe(b,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===Jn.TRIANGLE_STRIP?p.geometry=Dd(p.geometry,Mo):g.mode===Jn.TRIANGLE_FAN&&(p.geometry=Dd(p.geometry,ha));else if(g.mode===Jn.LINES)p=new Ja(b,v);else if(g.mode===Jn.LINE_STRIP)p=new yi(b,v);else if(g.mode===Jn.LINE_LOOP)p=new Za(b,v);else if(g.mode===Jn.POINTS)p=new Qa(b,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&U1(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Ii(p,r),g.extensions&&ur(s,p,g),t.assignFinalMaterial(p),u.push(p)}for(let f=0,m=u.length;f<m;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&ur(s,u[0],r),u[0];let d=new wt;r.extensions&&ur(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,m=u.length;f<m;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new $t(hd.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Ki(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ii(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],c=[];for(let l=0,h=a.length;l<h;l++){let u=a[l];if(u){o.push(u);let d=new Ie;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Ka(o,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],m=s.samplers[f.sampler],b=f.target,g=b.node,p=s.parameters!==void 0?s.parameters[m.input]:m.input,v=s.parameters!==void 0?s.parameters[m.output]:m.output;b.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",v)),l.push(m),h.push(b))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],m=u[2],b=u[3],g=u[4],p=[];for(let _=0,x=d.length;_<x;_++){let w=d[_],E=f[_],R=m[_],I=b[_],S=g[_];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();let y=n._createAnimationTracks(w,E,R,I,S);if(y)for(let C=0;C<y.length;C++)p.push(y[C])}let v=new Js(r,void 0,p);return Ii(v,s),v})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=s.weights.length;c<l;c++)o.morphTargetInfluences[c]=s.weights[c]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,O1)});for(let f=0,m=u.length;f<m;f++)h.add(u[f]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new na:l.length>1?h=new wt:l.length===1?h=l[0]:h=new It,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=a),Ii(h,r),r.extensions&&ur(n,h,r),r.matrix!==void 0){let u=new Ie;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new wt;n.name&&(r.name=s.createUniqueName(n.name)),Ii(r,n),n.extensions&&ur(t,r,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(s.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);let l=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof vn||d instanceof rn)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,c=[];Ts[r.path]===Ts.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let l;switch(Ts[r.path]){case Ts.weights:l=Mi;break;case Ts.rotation:l=Si;break;case Ts.translation:case Ts.scale:l=Ti;break;default:switch(n.itemSize){case 1:l=Mi;break;case 2:case 3:default:l=Ti;break}break}let h=s.interpolation!==void 0?L1[s.interpolation]:Gs,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){let m=new l(c[d]+"."+Ts[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),a.push(m)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=lf(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Si?of:xh;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function B1(i,e,t){let n=e.attributes,s=new Bn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(s.set(new P(c[0],c[1],c[2]),new P(l[0],l[1],l[2])),o.normalized){let h=lf(ga[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new P,c=new P;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){let b=lf(ga[d.componentType]);c.multiplyScalar(b)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new Rn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function i0(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(let a in n){let o=cf[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return je.workingColorSpace!==hn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${je.workingColorSpace}" not supported.`),Ii(i,e),B1(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?N1(i,e.targets,t):i})}var r0=(function(){var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q:Odkr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq;w8Wqdbk;esezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9Uc;WFbGgocjdaocjd6EhDaicefhocbhqdnindndndnaeaq9nmbaDaeaq9RaqaDfae6Egkcsfglcl4cifcd4hxalc9WGgmTmecbhPawcjdfhsaohzinaraz9Rax6mvarazaxfgo9RcK6mvczhlcbhHinalgic9WfgOawcj;cbffhldndndndndnazaOco4fRbbaHcoG4ciGPlbedibkal9cb83ibalcwf9cb83ibxikalaoRblaoRbbgOco4gAaAciSgAE86bbawcj;cbfaifglcGfaoclfaAfgARbbaOcl4ciGgCaCciSgCE86bbalcVfaAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc7faAaCfgARbbaOciGgOaOciSgOE86bbalctfaAaOfgARbbaoRbegOco4gCaCciSgCE86bbalc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbalc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc93faAaCfgARbbaOciGgOaOciSgOE86bbalc94faAaOfgARbbaoRbdgOco4gCaCciSgCE86bbalc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbalc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc97faAaCfgARbbaOciGgOaOciSgOE86bbalc98faAaOfgORbbaoRbigoco4gAaAciSgAE86bbalc99faOaAfgORbbaocl4ciGgAaAciSgAE86bbalc9:faOaAfgORbbaocd4ciGgAaAciSgAE86bbalcufaOaAfglRbbaociGgoaociSgoE86bbalaofhoxdkalaoRbwaoRbbgOcl4gAaAcsSgAE86bbawcj;cbfaifglcGfaocwfaAfgARbbaOcsGgOaOcsSgOE86bbalcVfaAaOfgORbbaoRbegAcl4gCaCcsSgCE86bbalc7faOaCfgORbbaAcsGgAaAcsSgAE86bbalctfaOaAfgORbbaoRbdgAcl4gCaCcsSgCE86bbalc91faOaCfgORbbaAcsGgAaAcsSgAE86bbalc4faOaAfgORbbaoRbigAcl4gCaCcsSgCE86bbalc93faOaCfgORbbaAcsGgAaAcsSgAE86bbalc94faOaAfgORbbaoRblgAcl4gCaCcsSgCE86bbalc95faOaCfgORbbaAcsGgAaAcsSgAE86bbalc96faOaAfgORbbaoRbvgAcl4gCaCcsSgCE86bbalc97faOaCfgORbbaAcsGgAaAcsSgAE86bbalc98faOaAfgORbbaoRbogAcl4gCaCcsSgCE86bbalc99faOaCfgORbbaAcsGgAaAcsSgAE86bbalc9:faOaAfgORbbaoRbrgocl4gAaAcsSgAE86bbalcufaOaAfglRbbaocsGgoaocsSgoE86bbalaofhoxekalao8Pbb83bbalcwfaocwf8Pbb83bbaoczfhokdnaiam9pmbaHcdfhHaiczfhlarao9RcL0mekkaiam6mvaoTmvdnakTmbawaPfRbbhHawcj;cbfhlashiakhOinaialRbbgzce4cbazceG9R7aHfgH86bbaiadfhialcefhlaOcufgOmbkkascefhsaohzaPcefgPad9hmbxikkcbc99arao9Radcaadca0ESEhoxlkaoaxad2fhCdnakmbadhlinaoTmlarao9Rax6mlaoaxfhoalcufglmbkaChoxekcbhmawcjdfhAinarao9Rax6miawamfRbbhHawcj;cbfhlaAhiakhOinaialRbbgzce4cbazceG9R7aHfgH86bbaiadfhialcefhlaOcufgOmbkaAcefhAaoaxfhoamcefgmad9hmbkaChokabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqaombkc9:hoxekc9:hokavcj;ebf8Kjjjjbaok;cseHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhDaicefgqarfhidnaeTmbcmcsawceSEhkcbhxcbhmcbhPcbhwcbhlindnaiaD9nmbc9:hoxikdndnaqRbbgoc;Ve0mbavc;abfalaocu7gscl4fcsGcitfgzydlhrazydbhzdnaocsGgHak9pmbavawasfcsGcdtfydbaxaHEhoaHThsdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkaxasfhxcdhHavawcdtfaoBdbawasfhwcehsalhOxdkdndnaHcsSmbaHc987aHamffcefhoxekaicefhoai8SbbgHcFeGhsdndnaHcu9mmbaohixekaicvfhiascFbGhscrhHdninao8SbbgOcFbGaHtasVhsaOcu9kmeaocefhoaHcrfgHc8J9hmbxdkkaocefhikasce4cbasceG9R7amfhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhHavawcdtfaoBdbcehsawcefhwalhOaohmxekdnaocpe0mbaxcefgHavawaDaocsGfRbbgocl49RcsGcdtfydbaocz6gzEhravawao9RcsGcdtfydbaHazfgAaocsGgHEhoaHThCdndnadcd9hmbabaPcetfgHax87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHaxBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfaxBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgOaxBdlaOarBdbavawazfgwcsGcdtfaoBdbalcefcsGhOawaCfhwaxhzaAaCfhxxekaxcbaiRbbgOEgzaoc;:eSgHfhraOcsGhCaOcl4hAdndnaOcs0mbarcefhoxekarhoavawaA9RcsGcdtfydbhrkdndnaCmbaocefhxxekaohxavawaO9RcsGcdtfydbhokdndnaHTmbaicefhHxekaicdfhHai8SbegscFeGhzdnascu9kmbaicofhXazcFbGhzcrhidninaH8SbbgscFbGaitazVhzascu9kmeaHcefhHaicrfgic8J9hmbkaXhHxekaHcefhHkazce4cbazceG9R7amfgmhzkdndnaAcsSmbaHhsxekaHcefhsaH8SbbgicFeGhrdnaicu9kmbaHcvfhXarcFbGhrcrhidninas8SbbgHcFbGaitarVhraHcu9kmeascefhsaicrfgic8J9hmbkaXhsxekascefhskarce4cbarceG9R7amfgmhrkdndnaCcsSmbashixekascefhias8SbbgocFeGhHdnaocu9kmbascvfhXaHcFbGhHcrhodninai8SbbgscFbGaotaHVhHascu9kmeaicefhiaocrfgoc8J9hmbkaXhixekaicefhikaHce4cbaHceG9R7amfgmhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfazBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgXazBdlaXarBdbavawaOcz6aAcsSVfgwcsGcdtfaoBdbawaCTaCcsSVfhwalcefcsGhOkaqcefhqavc;abfaOcitfgOarBdlaOaoBdbavc;abfalasfcsGcitfgraoBdlarazBdbawcsGhwalaHfcsGhlaPcifgPae6mbkkcbc99aiaDSEhokavc;aef8Kjjjjbaok:flevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;oiliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabaiavcefciGfcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:OhDxekcjjjj94hDkabaiavciGfgkcd7cetfaD87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:OhDxekcjjjj94hDkabaiavcufciGfcetfaD87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohvxekcjjjj94hvkabakcetfav87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklzNbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q:6dkr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq:p9sqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk:N8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhlaicefhodnaeTmbadTmbalc;WFbGglcjdalcjd6EhwcbhDinawaeaD9RaDawfae6Egqcsfglc9WGgkci2hxakcethmalcl4cifcd4hPabaDad2fhsakc;ab6hzcbhHincbhOaohAdndninaraA9RaP6meavcj;cbfaOak2fhCaAaPfhocbhidnazmbarao9Rc;Gb6mbcbhlinaCalfhidndndndndnaAalco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklbaoczfhokdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklzaoczfhokdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklaaoczfhokdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WaoclfaYpQbfaXc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WaocwfaYpQbfaXc:q:yjjbfRbbfhoxekaiaopbbbpkl8Waoczfhokalc;abfhialcjefak0meaihlarao9Rc;Fb0mbkkdnaiak9pmbaici4hlinarao9RcK6miaCaifhXdndndndndnaAaico4fRbbalcoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpkbbxikaXaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkbbaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaXaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkbbaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaXaopbbbpkbbaoczfhokalcdfhlaiczfgiak6mbkkaoTmeaohAaOcefgOclSmdxbkkc9:hoxlkdnakTmbavcjdfaHfhiavaHfpbdbhYcbhXinaiavcj;cbfaXfglpblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLalakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEalamfpblbg3cep9Ta3aQp9op9Hp9rg3alaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfhiaXczfgXak6mbkkaHclfgHad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfgDae6mbkkcbc99arao9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk::seHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhDaicefgqarfhidnaeTmbcmcsawceSEhkcbhxcbhmcbhPcbhwcbhlindnaiaD9nmbc9:hoxikdndnaqRbbgoc;Ve0mbavc;abfalaocu7gscl4fcsGcitfgzydlhrazydbhzdnaocsGgHak9pmbavawasfcsGcdtfydbaxaHEhoaHThsdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkaxasfhxcdhHavawcdtfaoBdbawasfhwcehsalhOxdkdndnaHcsSmbaHc987aHamffcefhoxekaicefhoai8SbbgHcFeGhsdndnaHcu9mmbaohixekaicvfhiascFbGhscrhHdninao8SbbgOcFbGaHtasVhsaOcu9kmeaocefhoaHcrfgHc8J9hmbxdkkaocefhikasce4cbasceG9R7amfhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhHavawcdtfaoBdbcehsawcefhwalhOaohmxekdnaocpe0mbaxcefgHavawaDaocsGfRbbgocl49RcsGcdtfydbaocz6gzEhravawao9RcsGcdtfydbaHazfgAaocsGgHEhoaHThCdndnadcd9hmbabaPcetfgHax87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHaxBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfaxBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgOaxBdlaOarBdbavawazfgwcsGcdtfaoBdbalcefcsGhOawaCfhwaxhzaAaCfhxxekaxcbaiRbbgOEgzaoc;:eSgHfhraOcsGhCaOcl4hAdndnaOcs0mbarcefhoxekarhoavawaA9RcsGcdtfydbhrkdndnaCmbaocefhxxekaohxavawaO9RcsGcdtfydbhokdndnaHTmbaicefhHxekaicdfhHai8SbegscFeGhzdnascu9kmbaicofhXazcFbGhzcrhidninaH8SbbgscFbGaitazVhzascu9kmeaHcefhHaicrfgic8J9hmbkaXhHxekaHcefhHkazce4cbazceG9R7amfgmhzkdndnaAcsSmbaHhsxekaHcefhsaH8SbbgicFeGhrdnaicu9kmbaHcvfhXarcFbGhrcrhidninas8SbbgHcFbGaitarVhraHcu9kmeascefhsaicrfgic8J9hmbkaXhsxekascefhskarce4cbarceG9R7amfgmhrkdndnaCcsSmbashixekascefhias8SbbgocFeGhHdnaocu9kmbascvfhXaHcFbGhHcrhodninai8SbbgscFbGaotaHVhHascu9kmeaicefhiaocrfgoc8J9hmbkaXhixekaicefhikaHce4cbaHceG9R7amfgmhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfazBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgXazBdlaXarBdbavawaOcz6aAcsSVfgwcsGcdtfaoBdbawaCTaCcsSVfhwalcefcsGhOkaqcefhqavc;abfaOcitfgOarBdlaOaoBdbavc;abfalasfcsGcitfgraoBdlarazBdbawcsGhwalaHfcsGhlaPcifgPae6mbkkcbc99aiaDSEhokavc;aef8Kjjjjbaok:flevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:wPliuo97eue978Jjjjjbca9Rhiaec98Ghldndnadcl9hmbdnalTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalaeSmeaipxbbbbbbbbbbbbbbbbgqpklbaiabalcdtfgdaeciGglcdtgv;8qbbdnalTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDaqp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkadaiav;8qbbskdnalTmbcbhvabhdinadczfgxaxpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;Meawaqawamp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oaoarpmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgval6mbkkalaeSmbaiaeciGgvcitgdfcbcaad9R;8kbaiabalcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;Meawaqawamp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oaoarpmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaDakp;Mearp;Keamp9oaqakp;Mearp;Keczp:Rep9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalaeSmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaDakp;Mearp;Keamp9oaqakp;Mearp;Keczp:Rep9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbheabhdinadadpbbbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbadczfhdaeclfgeav6mbkkdnavalSmbaialciGgecdtgdVcbc;abad9R;8kbaiabavcdtfgvad;8qbbdnaeTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepklbkavaiad;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz:Dbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(t)?o(e):o(i),r,a=WebAssembly.instantiate(s,{}).then(function(p){r=p.instance,r.exports.__wasm_call_ctors()});function o(p){for(var v=new Uint8Array(p.length),_=0;_<p.length;++_){var x=p.charCodeAt(_);v[_]=x>96?x-97:x>64?x-39:x+4}for(var w=0,_=0;_<p.length;++_)v[w++]=v[_]<60?n[v[_]]:(v[_]-60)*64+v[++_];return v.buffer.slice(0,w)}function c(p,v,_,x,w,E,R){var I=p.exports.sbrk,S=x+3&-4,y=I(S*w),C=I(E.length),D=new Uint8Array(p.exports.memory.buffer);D.set(E,C);var F=v(y,x,w,C,E.length);if(F==0&&R&&R(y,S,w),_.set(D.subarray(y,y+x*w)),I(y-I(0)),F!=0)throw new Error("Malformed buffer data: "+F)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],d=0;function f(p){var v={object:new Worker(p),pending:0,requests:{}};return v.object.onmessage=function(_){var x=_.data;v.pending-=x.count,v.requests[x.id][x.action](x.value),delete v.requests[x.id]},v}function m(p){for(var v="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(s)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+g.name+";"+c.toString()+g.toString(),_=new Blob([v],{type:"text/javascript"}),x=URL.createObjectURL(_),w=u.length;w<p;++w)u[w]=f(x);for(var w=p;w<u.length;++w)u[w].object.postMessage({});u.length=p,URL.revokeObjectURL(x)}function b(p,v,_,x,w){for(var E=u[0],R=1;R<u.length;++R)u[R].pending<E.pending&&(E=u[R]);return new Promise(function(I,S){var y=new Uint8Array(_),C=++d;E.pending+=p,E.requests[C]={resolve:I,reject:S},E.object.postMessage({id:C,count:p,size:v,source:y,mode:x,filter:w},[y.buffer])})}function g(p){var v=p.data;if(!v.id)return self.close();self.ready.then(function(_){try{var x=new Uint8Array(v.count*v.size);c(_,_.exports[v.mode],x,v.count,v.size,v.source,_.exports[v.filter]),self.postMessage({id:v.id,count:v.count,action:"resolve",value:x},[x.buffer])}catch(w){self.postMessage({id:v.id,count:v.count,action:"reject",value:w})}})}return{ready:a,supported:!0,useWorkers:function(p){m(p)},decodeVertexBuffer:function(p,v,_,x,w){c(r,r.exports.meshopt_decodeVertexBuffer,p,v,_,x,r.exports[l[w]])},decodeIndexBuffer:function(p,v,_,x){c(r,r.exports.meshopt_decodeIndexBuffer,p,v,_,x)},decodeIndexSequence:function(p,v,_,x){c(r,r.exports.meshopt_decodeIndexSequence,p,v,_,x)},decodeGltfBuffer:function(p,v,_,x,w,E){c(r,r.exports[h[w]],p,v,_,x,r.exports[l[E]])},decodeGltfBufferAsync:function(p,v,_,x,w){return u.length>0?b(p,v,_,h[x],l[w]):a.then(function(){var E=new Uint8Array(p*v);return c(r,r.exports[h[x]],E,p,v,_,r.exports[l[w]]),E})}}})();function a0(i){let e=new Map,t=new Map,n=i.clone();return o0(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function o0(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)o0(i.children[n],e.children[n],t)}var V1="assets/",c0=["Knight","Barbarian","Mage","Rogue_Hooded","Skeleton_Minion","Skeleton_Warrior","Skeleton_Rogue","Skeleton_Mage"],vh=class{constructor(){this.loader=new bh,this.loader.setMeshoptDecoder(r0),this.chars={},this.clips={},this.props=null,this.propCache=new Map}async load(e){let t=["anims","props",...c0],n=0,s=()=>e?.(++n/t.length),r=l=>this.loader.loadAsync(V1+l+".glb").then(h=>(s(),h)),[a,o,...c]=await Promise.all(t.map(r));for(let l of a.animations)this.clips[l.name]=l;c0.forEach((l,h)=>{this.chars[l]=c[h],l0(c[h].scene,!0)}),this.props=o.scene,l0(this.props,!1)}character(e){let t=a0(this.chars[e].scene);return t.traverse(n=>{n.isMesh&&(n.material=n.material.clone(),n.castShadow=!0,n.receiveShadow=!0,n.frustumCulled=!1)}),t}prop(e){let t=this.props.getObjectByName(e);if(!t)throw new Error("missing prop "+e);let n=t.clone(!0);return n.position.set(0,0,0),n.rotation.set(0,0,0),n.scale.set(1,1,1),n}propParts(e){if(this.propCache.has(e))return this.propCache.get(e);let t=this.prop(e);t.updateMatrixWorld(!0);let n=[];return t.traverse(s=>{s.isMesh&&n.push({geometry:s.geometry,material:s.material,matrix:s.matrixWorld.clone()})}),this.propCache.set(e,n),n}};function l0(i,e){i.traverse(t=>{if(!t.isMesh)return;t.castShadow=!0,t.receiveShadow=!0;let n=t.material;n&&n.isMeshStandardMaterial&&(n.roughness=e?.72:.86,n.metalness=0,n.map&&(n.map.anisotropy=4,n.map.colorSpace=Ut),n.name==="Glow"&&(n.emissive=new re("#7fe8ff"),n.emissiveIntensity=4))})}zt();var uf=Math.PI*2,St=(i,e)=>i+Math.random()*(e-i),G1=new _s(.85,1,64),W1=new Hn(2,2),h0=(()=>{let i=new Hn(1,1);return i.translate(0,.5,0),i})();var q1=4,X1=`
  attribute vec4 iColor; attribute vec3 iData; // size, rotation, softness
  varying vec4 vColor; varying vec2 vUv; varying float vSoft;
  void main(){
    vColor = iColor; vUv = uv; vSoft = iData.z;
    vec4 mv = modelViewMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
    float c = cos(iData.y), s = sin(iData.y);
    vec2 p = mat2(c, -s, s, c) * position.xy * iData.x;
    mv.xy += p;
    gl_Position = projectionMatrix * mv;
  }`,j1=`
  varying vec4 vColor; varying vec2 vUv; varying float vSoft;
  void main(){
    float d = length(vUv - 0.5) * 2.0;
    float a = smoothstep(1.0, vSoft, d);
    if (a <= 0.001) discard;
    gl_FragColor = vec4(vColor.rgb, vColor.a * a);
  }`,_h=class{constructor(e,t,n){this.max=t;let s=new Hn(1,1);this.color=new di(new Float32Array(t*4),4),this.data=new di(new Float32Array(t*3),3),this.color.setUsage(So),this.data.setUsage(So),s.setAttribute("iColor",this.color),s.setAttribute("iData",this.data);let r=new it({name:"particles",vertexShader:X1,fragmentShader:j1,transparent:!0,depthWrite:!1,blending:n});this.mesh=new Xs(s,r,t),this.mesh.instanceMatrix.setUsage(So),this.mesh.frustumCulled=!1,this.mesh.renderOrder=n===en?20:10,e.add(this.mesh),this.parts=[],this.m=new Ie}add(e){this.parts.length>=this.max&&this.parts.shift(),this.parts.push(e)}update(e){let t=this.parts,n=0,s=this.m,r=this.color.array,a=this.data.array;for(let o=t.length-1;o>=0;o--){let c=t[o];if(c.life-=e,c.life<=0){t.splice(o,1);continue}let l=Math.exp(-c.drag*e);c.vx*=l,c.vy*=l,c.vz*=l,c.vy+=c.grav*e,c.x+=c.vx*e,c.y+=c.vy*e,c.z+=c.vz*e,c.floor&&c.y<.05&&(c.y=.05,c.vy*=-.3,c.vx*=.6,c.vz*=.6),c.rot+=c.spin*e}for(let o of t){let c=o.life/o.max,l=o.size*(o.grow?1+(1-c)*o.grow:1)*(o.shrink?Math.max(.05,c):1),h=o.alpha*(o.fadeIn?Math.min(1,(1-c)*6):1)*Math.min(1,c*2.2);s.makeTranslation(o.x,o.y,o.z),this.mesh.setMatrixAt(n,s),r[n*4]=o.r,r[n*4+1]=o.g,r[n*4+2]=o.b,r[n*4+3]=h,a[n*3]=l,a[n*3+1]=o.rot,a[n*3+2]=o.soft,n++}this.mesh.count=n,this.mesh.instanceMatrix.needsUpdate=!0,this.color.needsUpdate=!0,this.data.needsUpdate=!0}},$1="varying vec2 vP; uniform float uExtent; void main(){ vP = position.xy * uExtent; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",Y1=`
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
  }`,yh=class{constructor(e){this.engine=e,this.scene=e.scene,this.add=new _h(this.scene,4e3,en),this.norm=new _h(this.scene,1500,Wi),this.items=[],this.decals=new Map,this.emitters=[],this.lights=[];for(let t=0;t<q1;t++){let n=new Vn("#ffffff",0,10,1.8);this.scene.add(n),this.lights.push({l:n,life:0,max:1,i:0})}this.t=0,this.arcGeo=new Map,this.keepers=new Set}keep(e){e.traverse?.(t=>{t.material&&this.keepers.add(t.material)})}spark(e,t,n,s={}){let r=s.n??10,a=new re(s.color??"#ffcf7a"),o=s.normal?this.norm:this.add;for(let c=0;c<r;c++){let l=(s.dir??St(0,uf))+(s.spread!==void 0?St(-s.spread,s.spread):0),h=(s.speed??6)*St(.35,1.1),u=s.up??St(-.2,1)*h*.6,d=(s.life??.5)*St(.6,1.3),f=s.bright??1.6;o.add({x:e+St(-1,1)*(s.jitter||0),y:t,z:n+St(-1,1)*(s.jitter||0),vx:Math.cos(l)*h,vy:u,vz:Math.sin(l)*h,life:d,max:d,size:(s.size??.2)*St(.6,1.3),alpha:s.alpha??1,r:a.r*f,g:a.g*f,b:a.b*f,drag:s.drag??3,grav:s.grav??-4,rot:St(0,uf),spin:St(-3,3),soft:s.soft??0,grow:s.grow||0,shrink:s.shrink??!0,floor:s.floor,fadeIn:s.fadeIn})}}smoke(e,t,n,s={}){this.spark(e,t,n,{n:s.n??8,color:s.color??"#2a2630",normal:!0,bright:1,speed:s.speed??1.5,up:s.up??1,life:s.life??1.4,size:s.size??1.4,grow:s.grow??1.5,shrink:!1,drag:1.5,grav:.3,soft:.2,alpha:s.alpha??.5,jitter:s.jitter??.4,fadeIn:!0})}flash(e,t,n,s,r=20,a=10,o=.18){let c=this.lights[0];for(let l of this.lights)l.life/l.max<c.life/c.max&&(c=l);c.l.position.set(e,t,n),c.l.color.set(s),c.l.distance=a,c.life=o,c.max=o,c.i=r,c.l.intensity=r}timed(e,t,n){return this.scene.add(e),this.items.push({mesh:e,life:t,max:t,update:n}),e}ring(e,t,n,s,r=.5,a=.25,o=.06){let c=new yt({color:new re(s).multiplyScalar(2.2),transparent:!0,blending:en,depthWrite:!1,side:Kt}),l=new Oe(G1,c);return l.rotation.x=-Math.PI/2,l.position.set(e,o,t),this.timed(l,r,(h,u)=>{let d=1-u,f=n*(.25+.75*(1-Math.pow(1-d,3)));h.scale.set(f,f,1),h.material.opacity=u;let m=h.geometry;h.userData.w||(h.userData.w=a)})}arc(e,t,n,s,r,a,o,c={}){let l=`${a.toFixed(2)}`,h=this.arcGeo.get(l);if(!h){h=new _s(.62,1,48,1,-a/2,a);let b=h.attributes.position,g=h.attributes.uv;for(let p=0;p<b.count;p++){let v=Math.atan2(b.getY(p),b.getX(p));g.setXY(p,(v+a/2)/a,Math.hypot(b.getX(p),b.getY(p)))}this.arcGeo.set(l,h)}let u=new re(o),d=new it({name:"arc",uniforms:{uT:{value:0},uColor:{value:u},uRev:{value:c.reverse?1:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`varying vec2 vUv; uniform float uT, uRev; uniform vec3 uColor;
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
        }`,transparent:!0,blending:en,depthWrite:!1,side:Kt}),f=new Oe(h,d);f.rotation.order="YXZ",f.rotation.x=-Math.PI/2+(c.tilt??.18),f.rotation.y=-s,f.position.set(e,t,n),f.scale.set(r,r,1);let m=c.life??.28;return this.timed(f,m,(b,g)=>{b.material.uniforms.uT.value=1-g})}beam(e,t,n,s=6,r=.6,a=1,o={}){let c=new it({name:"beam",uniforms:{uColor:{value:new re(n)},uA:{value:1},uTime:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`varying vec2 vUv; uniform vec3 uColor; uniform float uA, uTime;
        void main(){ float x = abs(vUv.x - 0.5) * 2.0; float core = pow(1.0 - x, 3.0); float fade = pow(1.0 - vUv.y, 1.6);
          float flick = 0.85 + 0.15 * sin(uTime * 12.0 + vUv.y * 20.0);
          float a = core * fade * uA * flick; if (a < 0.01) discard; gl_FragColor = vec4(uColor * (1.2 + core * 2.0), a); }`,transparent:!0,blending:en,depthWrite:!1,side:Kt}),l=new wt,h=new Oe(h0,c),u=new Oe(h0,c);return h.scale.set(r,s,1),u.scale.set(r,s,1),u.rotation.y=Math.PI/2,l.add(h,u),l.position.set(e,0,t),o.persistent?(this.scene.add(l),l):this.timed(l,a,(d,f)=>{c.uniforms.uA.value=f,c.uniforms.uTime.value=this.t})}bolt(e,t,n="#bfe4ff",s=14){let r=[],a=e,o=t;for(let u=s;u>=0;u-=1.1)r.push(new P(a,u,o)),a+=St(-.6,.6),o+=St(-.6,.6);r.push(new P(e,0,t));let c=new Mt().setFromPoints(r),l=new Xi({color:new re(n).multiplyScalar(4),transparent:!0,blending:en}),h=new yi(c,l);h.userData.ownGeo=!0,this.timed(h,.25,(u,d)=>{u.material.opacity=d}),this.beam(e,t,n,s,1.2,.3)}zap(e,t,n,s,r,a,o="#bfe4ff"){let c=[],l=Math.max(4,Math.round(Math.hypot(s-e,a-n)/.7));for(let f=0;f<=l;f++){let m=f/l,b=f===0||f===l?0:.45;c.push(new P(e+(s-e)*m+St(-b,b),t+(r-t)*m+St(-b,b)*.6,n+(a-n)*m+St(-b,b)))}let h=new Mt().setFromPoints(c),u=new Xi({color:new re(o).multiplyScalar(4),transparent:!0,blending:en}),d=new yi(h,u);d.userData.ownGeo=!0,this.timed(d,.3,(f,m)=>{f.material.opacity=m})}decal(e,t){let n=this.decals.get(e.id),s=e.shape,r=s.type==="rect"?Math.max(s.len,s.w)+1:(s.r2||s.r)+.5;if(!n){let h={circle:0,cone:1,rect:2,donut:3}[s.type],u=e.team!=="player",d=e.fx==="heal"||e.fx==="spring",f=e.fx==="trap",m=e.fx==="holyburst",b=e.fx==="poison",g=new it({name:"decal",uniforms:{uType:{value:h},uR:{value:s.r||0},uR2:{value:s.r2||0},uAng:{value:s.ang||0},uLen:{value:s.len||0},uW:{value:s.w||0},uFill:{value:0},uAlpha:{value:0},uTime:{value:0},uExtent:{value:r},uColor:{value:new re(e.lethal?"#a23cff":u?"#ff3b2a":e.fx==="frost"?"#6cc8ff":d?"#3fe08a":f?"#8fd05a":m?"#ffe7a0":b?"#7ac03a":"#ffb347")},uEdge:{value:new re(e.lethal?"#f0c0ff":u?"#ff8a5c":e.fx==="frost"?"#d8f2ff":d?"#c8ffd8":f?"#e0ffb0":m?"#fff8e0":b?"#d0ff90":"#ffe0a0")}},vertexShader:$1,fragmentShader:Y1,transparent:!0,depthWrite:!1,blending:en});n=new Oe(W1,g),n.rotation.order="YXZ",n.renderOrder=5,this.scene.add(n),this.decals.set(e.id,n)}let a=n.material.uniforms;n.position.set(e.x,.07+e.id%7*.002,e.z),n.rotation.set(-Math.PI/2,-e.dir,0),n.scale.set(r,r,1);let o=e.warn||.001,c=e.warn>0?Math.min(1,e.t/o):1;a.uFill.value=c;let l=e.team==="player"&&e.dur>.5;return a.uAlpha.value=l?.6:Math.min(1,e.t*6)*(e.t>o?Math.max(0,1-(e.t-o)*6):1),s.type==="rect"&&s.w<1&&(a.uAlpha.value*=.4),a.uTime.value=t,n.userData.seen=!0,n}sweepDecals(){for(let[e,t]of this.decals)t.userData.seen?t.userData.seen=!1:(this.scene.remove(t),this.keepers.has(t.material)||t.material.dispose(),this.decals.delete(e))}emitter(e){return this.emitters.push(e),e}fire(e,t,n,s=1,r="#ff8a2a"){let a=new re(r);this.add.add({x:e+St(-.06,.06)*s,y:t,z:n+St(-.06,.06)*s,vx:St(-.2,.2),vy:St(1.2,2.2)*s,vz:St(-.2,.2),life:St(.35,.6),max:.6,size:St(.25,.45)*s,alpha:.9,r:a.r*2.4,g:a.g*2.2,b:a.b*2,drag:2,grav:.5,rot:St(0,uf),spin:St(-2,2),soft:.1,shrink:!0}),Math.random()<.08&&this.add.add({x:e,y:t+.3,z:n,vx:St(-.5,.5),vy:St(1.5,3),vz:St(-.5,.5),life:1.2,max:1.2,size:.05,alpha:1,r:3,g:1.6,b:.6,drag:1,grav:-.5,rot:0,spin:0,soft:0,shrink:!0})}clearTransient(){for(let e of this.items)e.life=0;for(let e of this.lights)e.life=0;this.add.parts.length=0,this.norm.parts.length=0,this.update(0)}update(e){this.t+=e;for(let t of this.emitters)if(!t.dead)for(t.acc=(t.acc||0)+e*(t.rate||30);t.acc>=1;)t.acc-=1,t.emit(this);this.emitters=this.emitters.filter(t=>!t.dead);for(let t=this.items.length-1;t>=0;t--){let n=this.items[t];if(n.life-=e,n.life<=0){this.scene.remove(n.mesh),n.mesh.traverse?.(s=>{s.material&&!this.keepers.has(s.material)&&s.material.dispose?.(),s.userData.ownGeo&&s.geometry.dispose()}),this.items.splice(t,1);continue}n.update?.(n.mesh,n.life/n.max)}for(let t of this.lights){if(t.life<=0){t.l.intensity=0;continue}t.life-=e,t.l.intensity=t.i*Math.max(0,t.life/t.max)}this.add.update(e),this.norm.update(e)}};zt();var u0=["        .........         ","        .........         ","        .........         ","        .........         ","        .........         ","        .........         ","        .........         ","        .........         ","            =             ","            =             ","......   .......          ","......   .......          ","......===.......          ","......   .......          ","......   .......          ","......   .......          ","  =                       ","  =      ,,,,,,,,,        ","......   ,,,,,,,,,        ","......   ,,,,,,,,,        ","......===,,,,,,,,,        ","......   ,,,,,,,,,        ","......   ,,,,,,,,,        ","         ,,,,,,,,,        ","         ,,,,,,,,,        "],K1=[" ............             "," ............             "," ............             "," ............             "," ............             "," ............             "," ............             "," ............             ","    =                     ","    =                     ","  ......                  ","  ......                  ","  ......    ...........   ","  ......    ...........   ","  ......====...........   ","  ......    ...........   ","  ......    ...........   ","  ......         =        ","                 =        ","              ........    ","              ........    ","              ........    ","              ........    ","              ........    ","              ........    "],d0=u0.map(i=>[...i].reverse().join(""));for(let i=0;i<8;i++)d0[i]=" ".repeat(7)+".".repeat(13)+" ".repeat(6);var J1=26,ws={1:0,2:30,3:60},ff=u0.map((i,e)=>i.padEnd(30)+K1[e].padEnd(30)+d0[e]),es=ff[0].length,Lo=ff.length,Do=ff.map(i=>i.padEnd(es," ").split("")),Th=i=>i>=ws[3]?3:i>=ws[2]?2:1,Z1=[{id:"yard",name:"\uC655\uAC00 \uBB18\uC5ED",x0:9,z0:17,x1:17,z1:24,seals:[],outdoor:!0,waves:[[["minion",11,19],["minion",13,18],["minion",15,19],["minion",12,21],["minion",16,21]],[["archer",10,18],["archer",16,18],["minion",13,20],["minion",11,22],["minion",15,22],["warrior",13,18]]]},{id:"r1",name:"\uB9DD\uC790\uC758 \uD68C\uB791",x0:0,z0:18,x1:5,z1:22,seals:[[6,20],[2,17]],waves:[[["minion",1,19],["minion",3,19],["minion",1,21],["warrior",3,21],["warrior",4,19],["minion",4,22]],[["archer",1,18],["archer",5,18],["mage",3,18],["minion",2,20],["minion",4,20]]]},{id:"r2",name:"\uBF08\uC758 \uC608\uBC30\uB2F9",x0:0,z0:10,x1:5,z1:15,seals:[[2,16],[6,12]],waves:[[["warrior",1,11],["warrior",4,11],["mage",2,10],["minion",1,13],["minion",4,13],["archer",3,10]],[["warrior",2,12,!0],["minion",0,14],["minion",5,14],["archer",0,10],["archer",5,10]]]},{id:"r3",name:"\uC655\uC758 \uBCF4\uBB3C\uACE0",x0:9,z0:10,x1:15,z1:15,seals:[[8,12],[12,9]],waves:[[["mage",10,11],["mage",14,11],["warrior",12,12],["minion",10,14],["minion",14,14],["minion",12,14]],[["archer",9,10],["archer",15,10],["warrior",11,11],["warrior",13,11],["mage",12,10,!0]]],chest:[12,10]},{id:"boss",name:"\uB300\uC0AC\uC81C\uC758 \uC81C\uB2E8",x0:8,z0:0,x1:16,z1:7,seals:[[12,8]],boss:[12,2],bossKind:"priest",waves:[]}],Q1=[{id:"entry",name:"\uCE68\uC218\uB41C \uC785\uAD6C",x0:14,z0:19,x1:21,z1:24,seals:[[17,18]],waves:[[["minion",15,20],["minion",20,20],["minion",17,19],["archer",15,19],["archer",20,19]],[["warrior",16,20],["warrior",19,20],["minion",15,22],["minion",20,22],["mage",17,19]]]},{id:"hall",name:"\uBB3C\uC5D0 \uC7A0\uAE34 \uD68C\uB791",x0:12,z0:12,x1:22,z1:16,seals:[[17,17],[11,14]],waves:[[["archer",13,12],["archer",21,12],["warrior",15,14],["warrior",19,14],["minion",14,16],["minion",20,16],["mage",17,12]],[["warrior",17,13,!0],["archer",12,12],["archer",22,12],["minion",13,15],["minion",21,15],["minion",17,16]]]},{id:"vault",name:"\uAE08\uD654\uC758 \uC800\uC7A5\uACE0",x0:2,z0:10,x1:7,z1:17,seals:[[8,14],[4,9]],waves:[[["mage",3,11],["mage",6,11],["warrior",4,13],["archer",2,10],["archer",7,10],["minion",3,16],["minion",6,16]],[["priestShade",4,12],["minion",2,15],["minion",7,15]]],chest:[4,10]},{id:"strong",name:"\uBD09\uC778\uB41C \uAE08\uACE0",x0:1,z0:0,x1:12,z1:7,seals:[[4,8]],boss:[7,2],bossKind:"warden",waves:[]}],pe=i=>J1-1-i,eM=[{id:"court",name:"\uBD88\uD0C0\uB294 \uC548\uB730",x0:pe(17),z0:17,x1:pe(9),z1:24,seals:[],outdoor:!0,waves:[[["minion",pe(11),19],["minion",pe(13),18],["minion",pe(15),19],["warrior",pe(12),21],["warrior",pe(16),21],["archer",pe(10),18]],[["archer",pe(10),18],["archer",pe(16),18],["mage",pe(13),18],["warrior",pe(11),22,!0],["minion",pe(15),22],["minion",pe(13),21]]]},{id:"gate",name:"\uC7AC\uC758 \uC131\uBB38",x0:pe(5),z0:18,x1:pe(0),z1:22,seals:[[pe(6),20],[pe(2),17]],waves:[[["warrior",pe(1),19],["warrior",pe(4),19],["mage",pe(3),18],["minion",pe(1),21],["minion",pe(4),21],["archer",pe(5),18]],[["warrior",pe(3),20,!0],["archer",pe(1),18],["archer",pe(5),18],["mage",pe(2),22],["mage",pe(4),22]]]},{id:"hall",name:"\uBD88\uAF43\uC758 \uD68C\uB2F9",x0:pe(5),z0:10,x1:pe(0),z1:15,seals:[[pe(2),16],[pe(6),12]],waves:[[["mage",pe(1),11],["mage",pe(4),11],["warrior",pe(2),12],["warrior",pe(4),13],["archer",pe(0),10],["archer",pe(5),10]],[["priestShade",pe(2),11],["minion",pe(0),14],["minion",pe(5),14]]]},{id:"armory",name:"\uC655\uC2E4 \uBB34\uAE30\uACE0",x0:pe(15),z0:10,x1:pe(9),z1:15,seals:[[pe(8),12],[pe(12),9]],waves:[[["warrior",pe(10),11],["warrior",pe(14),11],["mage",pe(12),10,!0],["archer",pe(9),10],["archer",pe(15),10],["minion",pe(12),14]],[["wardenShade",pe(12),11],["archer",pe(9),10],["archer",pe(15),10]]],chest:[pe(12),10]},{id:"throne",name:"\uC7BF\uBE5B \uC625\uC88C",x0:7,z0:0,x1:19,z1:7,seals:[[pe(12),8]],boss:[pe(12),2],bossKind:"king",waves:[]}];function df(i,e,t){let n=([s,r,...a])=>[s+e,r,...a];return{...i,chapter:t,x0:i.x0+e,x1:i.x1+e,seals:i.seals.map(n),waves:i.waves.map(s=>s.map(([r,a,o,c])=>[r,a+e,o,c])),boss:i.boss&&n(i.boss),chest:i.chest&&n(i.chest)}}var xt=[...Z1.map(i=>df(i,ws[1],1)),...Q1.map(i=>df(i,ws[2],2)),...eM.map(i=>df(i,ws[3],3))],In=3,Zt={1:{name:"\uAE68\uC5B4\uB09C \uBB18\uC5ED",start:{x:52,z:92},intro:"\uBB18\uC5ED\uC758 \uC885\uC774 \uC2A4\uC2A4\uB85C \uC6B8\uB9B0\uB2E4. \uBB34\uB364\uC744 \uAE68\uC6B0\uB294 \uC790\uB97C \uCC3E\uC544 \uC9C0\uD558\uBB18\uC9C0\uB85C \uB0B4\uB824\uAC00\uB77C.",outro:'\uC4F0\uB7EC\uC9C0\uBA70 \uBAA8\uB974\uAC04\uC740 \uC6C3\uC5C8\uB2E4. "\uC655\uAD00\uC758 \uC870\uAC01\uC740 \uC774\uBBF8 \uBCF4\uBB3C\uACE0\uC5D0 \uBAA8\uC600\uB2E4." \uBB3C\uC5D0 \uC7A0\uAE34 \uBCF4\uBB3C\uACE0\uB85C \uAC00\uB294 \uAE38\uC774 \uC5F4\uB838\uB2E4.'},2:{name:"\uAC00\uB77C\uC549\uC740 \uBCF4\uBB3C\uACE0",start:{x:(ws[2]+17.5)*4,z:22.5*4},intro:"\uC655\uAD6D\uC758 \uAE08\uACE0\uB294 \uBC31 \uB144 \uB3D9\uC548 \uAC80\uC740 \uBB3C \uC544\uB798 \uC7A0\uACA8 \uC788\uC5C8\uB2E4. \uADF8 \uAE4A\uC740 \uACF3\uC5D0\uC11C \uBB34\uC5B8\uAC00\uAC00 \uC655\uAD00\uC758 \uC870\uAC01\uC744 \uC9C0\uD0A4\uACE0 \uC788\uB2E4.",outro:"\uC218\uBB38\uC7A5\uC774 \uBB34\uB108\uC9C0\uC790 \uAE08\uACE0 \uAC00\uC7A5 \uAE4A\uC740 \uACF3\uC758 \uBB38\uC774 \uC5F4\uB838\uB2E4. \uC7AC\uAC00 \uD769\uB0A0\uB9AC\uB294 \uACC4\uB2E8 \uB05D\uC5D0\uC11C \uC61B \uC655\uC131\uC774 \uBD88\uD0C0\uACE0 \uC788\uB2E4."},3:{name:"\uC7BF\uBE5B \uC625\uC88C",start:{x:(ws[3]+pe(13))*4,z:92},intro:"\uC655\uC131\uC740 \uBC31 \uB144\uC9F8 \uAEBC\uC9C0\uC9C0 \uC54A\uB294 \uBD88\uAE38 \uC18D\uC5D0 \uC788\uB2E4. \uC625\uC88C\uC5D0 \uC549\uC740 \uC790\uAC00 \uC7BF\uBE5B \uC655\uAD00\uC758 \uC8FC\uC778\uC774\uB2E4.",outro:"\uC655\uAD00\uC774 \uBD80\uC11C\uC84C\uB2E4. \uADF8\uB7EC\uB098 \uC7AC \uC18D\uC5D0\uC11C \uBB34\uC5B8\uAC00\uAC00 \uC544\uC9C1 \uC228\uC744 \uC26C\uACE0 \uC788\uB2E4."}},pf="\uBC31 \uB144 \uC804, \uBD88\uBA78\uC744 \uD0D0\uD55C \uC655 \uC544\uB974\uCE74\uC2A4\uB294 \uC7BF\uBE5B \uC655\uAD00\uC744 \uC37C\uACE0 \uC655\uAD6D\uC740 \uD558\uB8FB\uBC24\uC5D0 \uC7AC\uAC00 \uB418\uC5C8\uB2E4. \uC774\uC81C \uC655\uAC00 \uBB18\uC5ED\uC758 \uBB34\uB364\uC774 \uD558\uB098\uB458 \uC5F4\uB9AC\uACE0 \uC788\uB2E4.",ba=i=>Math.max(1,Math.min(In,i|0)),f0=i=>xt.map((e,t)=>e.chapter===i?t:-1).filter(e=>e>=0),kn=Zt[1].start,Ft=(i,e)=>i>=0&&e>=0&&i<es&&e<Lo&&Do[e][i]!==" ",ts=(i,e)=>[Math.floor(i/4+.5),Math.floor(e/4+.5)],Wn=(i,e)=>({x:i*4,z:e*4}),tt=(i,e,t,n,s)=>({x:(ws[i]+e)*4,z:t*4,r:n,prop:s}),wh=[tt(1,9.5,1.5,.9,"d_pillar_decorated"),tt(1,14.5,1.5,.9,"d_pillar_decorated"),tt(1,9.5,5.5,.9,"d_pillar_decorated"),tt(1,14.5,5.5,.9,"d_pillar_decorated"),tt(1,1.5,11.5,.8,"d_pillar"),tt(1,3.5,13.5,.8,"d_pillar"),tt(1,10.5,12.5,.8,"d_column"),tt(1,13.5,12.5,.8,"d_column"),tt(1,10.4,20.3,.9,"h_grave_A"),tt(1,16.2,19.4,.9,"h_grave_B"),tt(1,14.6,23.2,1.1,"h_tree_dead_large"),tt(1,11.1,23.6,.9,"h_gravestone"),tt(1,16.6,22.5,.8,"h_grave_A_destroyed"),tt(2,14.5,13.5,.8,"d_column"),tt(2,19.5,13.5,.8,"d_column"),tt(2,14.5,15.5,.8,"d_column"),tt(2,19.5,15.5,.8,"d_column"),tt(2,3.5,1.5,.9,"d_pillar_decorated"),tt(2,9.5,1.5,.9,"d_pillar_decorated"),tt(2,3.5,5.5,.9,"d_pillar_decorated"),tt(2,9.5,5.5,.9,"d_pillar_decorated"),tt(2,3.5,12.5,.8,"d_pillar"),tt(2,5.5,15.5,.8,"d_pillar"),tt(3,8.5,1.5,.9,"d_pillar_decorated"),tt(3,16.5,1.5,.9,"d_pillar_decorated"),tt(3,8.5,5.5,.9,"d_pillar_decorated"),tt(3,16.5,5.5,.9,"d_pillar_decorated"),tt(3,pe(1.5),11.5,.8,"d_pillar"),tt(3,pe(3.5),13.5,.8,"d_pillar"),tt(3,pe(10.5),12.5,.8,"d_column"),tt(3,pe(13.5),12.5,.8,"d_column"),tt(3,pe(10.4),20.3,.9,"d_rubble_large"),tt(3,pe(16.2),19.4,.9,"h_tree_dead_large_decorated"),tt(3,pe(14.6),23.2,1.1,"h_tree_dead_large"),tt(3,pe(16.6),22.5,.8,"d_rubble_large")];function No(i){let e=[];return xt.forEach((t,n)=>{if(i[n]==="active")for(let s of t.seals)e.push(s)}),e}function Uo(i,e){let[t,n]=ts(i,e);return xt.findIndex(s=>t>=s.x0&&t<=s.x1&&n>=s.z0&&n<=s.z1)}var Mh=4/2,Sh=.5;function mf(i,e,t){if(!Ft(i,e))return!0;if(t){for(let n of t)if(n[0]===i&&n[1]===e)return!0}return!1}function Zn(i,e,t){let n=!1;for(let s=0;s<2;s++){let[r,a]=ts(i.x,i.z);for(let o=-1;o<=1;o++)for(let c=-1;c<=1;c++){let l=r+c,h=a+o;if(!mf(l,h,t))continue;let u=l*4,d=h*4,f=u-Mh-Sh,m=u+Mh+Sh,b=d-Mh-Sh,g=d+Mh+Sh,p=Math.max(f,Math.min(i.x,m)),v=Math.max(b,Math.min(i.z,g)),_=i.x-p,x=i.z-v,w=_*_+x*x;if(w<e*e){if(w<1e-8){let E=i.x-f,R=m-i.x,I=i.z-b,S=g-i.z,y=Math.min(E,R,I,S);y===E?i.x=f-e:y===R?i.x=m+e:y===I?i.z=b-e:i.z=g+e}else{let E=Math.sqrt(w);i.x=p+_/E*e,i.z=v+x/E*e}n=!0}}}for(let s of wh){let r=i.x-s.x,a=i.z-s.z,o=s.r+e,c=r*r+a*a;if(c<o*o){let l=Math.sqrt(c)||1e-4;i.x=s.x+r/l*o,i.z=s.z+a/l*o,n=!0}}return n}function tM(i,e,t){let[n,s]=ts(i,e);return!mf(n,s,t)}function zo(i,e,t,n,s,r=0){let a=Math.hypot(t-i,n-e),o=Math.ceil(a/(r>0?.6:1)),c={x:0,z:0};for(let l=1;l<o;l++){let h=l/o,u=i+(t-i)*h,d=e+(n-e)*h;if(!tM(u,d,s)||r>0&&(c.x=u,c.z=d,Zn(c,r,s),Math.abs(c.x-u)+Math.abs(c.z-d)>.05))return!1}return!0}function Eh(i,e,t,n,s){let[r,a]=ts(i,e),[o,c]=ts(t,n);if(r===o&&a===c)return{x:t,z:n};let l=(b,g)=>g*es+b,h=[[r,a]],u=new Map,d=new Map([[l(r,a),0]]),f=new Map([[l(r,a),Math.abs(o-r)+Math.abs(c-a)]]),m=0;for(;h.length&&m++<600;){let b=0;for(let v=1;v<h.length;v++)f.get(l(...h[v]))<f.get(l(...h[b]))&&(b=v);let[g,p]=h.splice(b,1)[0];if(g===o&&p===c){let v=l(g,p),_=v;for(;u.has(v)&&u.get(v)!==l(r,a);)_=v,v=u.get(v);let x=u.has(v)?v:_;return Wn(x%es,Math.floor(x/es))}for(let[v,_]of[[1,0],[-1,0],[0,1],[0,-1]]){let x=g+v,w=p+_;if(mf(x,w,s))continue;let E=l(x,w),R=d.get(l(g,p))+1;R<(d.get(E)??1/0)&&(u.set(E,l(g,p)),d.set(E,R),f.set(E,R+Math.abs(o-x)+Math.abs(c-w)),h.some(([I,S])=>I===x&&S===w)||h.push([x,w]))}}return null}function Ah(i){let e=i>>>0,t=()=>{e=e+1831565813>>>0;let n=e;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296};return t.range=(n,s)=>n+t()*(s-n),t.int=(n,s)=>Math.floor(n+t()*(s-n+1)),t.pick=n=>n[Math.floor(t()*n.length)],t.chance=n=>t()<n,t}var Qn=Math.PI*2,qn={1:{torch:"#ff9448",bossTorch:"#7fd0ff",flame:"#ff7a26",bossFlame:"#58b6ff",banner:["d_banner_patternA_red","d_banner_thin_red"],fog:"#08070c",bg:"#06050a"},2:{torch:"#4fe0c8",bossTorch:"#8fd0ff",flame:"#2fd8c0",bossFlame:"#7fc8ff",banner:["d_banner_patternB_blue"],fog:"#040c10",bg:"#02070a",sky:"#3a7a8a",ground:"#06161a",moon:"#8fd8e8",moonI:.6},3:{torch:"#ff6a2a",bossTorch:"#ff3a1a",flame:"#ff5a1a",bossFlame:"#ff2a0a",banner:["d_banner_triple_red","d_banner_shield_red"],fog:"#130605",bg:"#0b0403",sky:"#8a4a3a",ground:"#2a0c06",moon:"#ff9a6a",moonI:.55}},p0=16,nM=/floor|path|rubble_half|coin|candle|bone|skull/;function iM(i){let e=new Mt,t=i.attributes.position.count;for(let n of["position","normal","uv"]){let s=i.attributes[n],r=n==="uv"?2:3,a=new Float32Array(t*r);if(s)for(let o=0;o<t;o++)a[o*r]=s.getX(o),a[o*r+1]=s.getY(o),r===3&&(a[o*r+2]=s.getZ(o));e.setAttribute(n,new Pt(a,r))}return i.index?e.setIndex(new Pt(Uint32Array.from(i.index.array),1)):e.setIndex([...Array(t).keys()]),e}var gf=class{constructor(e){this.assets=e,this.byKey=new Map,this.floatCache=new Map}add(e,t,n,s,r=0,a=1,o=1){let c=new Ie().compose(new P(t,n,s),new ln().setFromAxisAngle(new P(0,1,0),r),new P(a,a*o,a));this.byKey.has(e)||this.byKey.set(e,[]),this.byKey.get(e).push(c)}build(e){let t=new Map,n=new Ie;for(let[a,o]of this.byKey){let c=!nM.test(a);for(let l of this.assets.propParts(a)){let h=this.floatCache.get(l.geometry);h||(h=iM(l.geometry),this.floatCache.set(l.geometry,h));for(let u of o){let d=`${Math.floor(u.elements[12]/p0)},${Math.floor(u.elements[14]/p0)}|${l.material.uuid}|${c}`,f=t.get(d);f||(f={material:l.material,cast:c,geos:[]},t.set(d,f)),f.geos.push(h.clone().applyMatrix4(n.multiplyMatrices(u,l.matrix)))}}}let s=0,r=0;for(let a of t.values()){let o=gh(a.geos,!1);for(let l of a.geos)l.dispose();o.computeBoundingSphere();let c=new Oe(o,a.material);c.castShadow=a.cast,c.receiveShadow=!0,c.matrixAutoUpdate=!1,e.add(c),s++,r+=o.index.count/3}for(let a of this.floatCache.values())a.dispose();this.stats={meshes:s,tris:Math.round(r)}}},Rh=class{constructor(e,t,n){this.engine=e,this.assets=t,this.vfx=n,this.group=new wt,this.torches=[],this.water=[],this.cracks=[],this.chapter=1,this.seals=[],this.chests=new Map,this.build(),e.scene.add(this.group),this.lightPool=[];for(let s=0;s<6;s++){let r=new Vn("#ff9448",0,15,1.7);e.scene.add(r),this.lightPool.push(r)}}prop(e,t,n,s,r=0,a=1){this.inst.add(e,t,n,s,r,a)}build(){let e=Ah(1337),t=this.inst=new gf(this.assets),n=(c,l)=>Ft(c,l)&&Do[l][c]===",",s=(c,l)=>xt.find(h=>c>=h.x0&&c<=h.x1&&l>=h.z0&&l<=h.z1);for(let c=0;c<Lo;c++)for(let l=0;l<es;l++){if(!Ft(l,c))continue;let{x:h,z:u}=Wn(l,c),d=s(l,c),f=Th(l),m=qn[f],b=Math.floor(e()*4)*(Qn/4);if(n(l,c))f===3?t.add(e()<.3?"d_floor_dirt_large_rocky":"d_floor_dirt_large",h,0,u,b):t.add(e()<.04?"h_floor_dirt_grave":"h_floor_dirt",h,0,u,b);else if(f===2){for(let[p,v]of[[-1,-1],[1,-1],[-1,1],[1,1]]){let _=e();t.add(_<.18?"d_floor_tile_small_broken_A":_<.3?"d_floor_tile_small_weeds_A":_<.36?"d_floor_tile_small_broken_B":"d_floor_tile_small",h+p,0,u+v,Math.floor(e()*4)*(Qn/4))}this.water.push([h,u])}else if(f===3){let p=e();t.add(p<.4?"d_floor_tile_large_rocks":p<.46&&d?"d_floor_tile_big_grate":"d_floor_tile_large",h,0,u,b),e()<.3&&this.cracks.push([h+(e()-.5)*2,u+(e()-.5)*2,e()*Qn])}else{let p=e(),v=d?.boss?p<.2?"d_floor_tile_large_rocks":"d_floor_tile_large":p<.14?"d_floor_tile_large_rocks":p<.2&&d?"d_floor_tile_big_grate":"d_floor_tile_large";t.add(v,h,0,u,b)}let g=[[0,-1,0,-2,0],[0,1,Math.PI,2,0],[-1,0,Math.PI/2,0,-2],[1,0,-Math.PI/2,0,2]];for(let[p,v,_,x,w]of g){if(Ft(l+p,c+v))continue;let E=h+w,R=u+x,I=_;if(n(l,c)&&f===1){t.add(e()<.2?"h_fence_broken":"h_fence",E,0,R,I),t.add("h_fence_pillar",E+(v!==0?2:0),0,R+(p!==0?2:0));continue}let S=e(),y=v===1,C=y?"d_wall":S<.1?"d_wall_cracked":S<.16&&d?"d_wall_shelves":S<.2&&d&&!d.boss?"d_wall_window_closed":S<.26&&d?"d_wall_arched":"d_wall";if(!y&&f===2&&S<.3&&d&&!d.boss&&(C=S<.18?"d_wall_archedwindow_gated":"d_wall_arched"),!y&&f===3&&(C=n(l,c)?S<.5?"d_wall_broken":"d_wall_half":S<.22?"d_wall_cracked":S<.32?"d_wall_broken":C),t.add(C,E,0,R,I,1,y?.22:1),y)continue;let D=E-w*.25,F=R-x*.25,H=(l*7+c*13+(p+2)*3+v)%5;if(C==="d_wall"&&(H===0||d?.boss&&H<3)){this.prop("d_torch_mounted",D,2,F,I);let X=D+Math.sin(I)*.45,W=F+Math.cos(I)*.45;this.torches.push({x:X,y:2.75,z:W,color:d?.boss?m.bossTorch:m.torch,flame:d?.boss?m.bossFlame:m.flame,boss:!!d?.boss})}else C==="d_wall"&&d&&H===2&&this.prop(d.boss&&f!==2?"d_banner_triple_red":m.banner[Math.floor(e()*m.banner.length)],D,0,F,I)}}for(let c of wh)this.prop(c.prop,c.x,0,c.z,e()*Qn);let r=(c,l,h,u=1.2)=>{for(let d=0;d<h;d++){let f=Math.floor(e()*4),m=(l.x0-.5)*4+u,b=(l.x1+.5)*4-u,g=(l.z0-.5)*4+u,p=(l.z1+.5)*4-u,v=m+e()*(b-m),_=g+e()*(p-g);f===0?_=g:f===1?_=p:f===2?v=m:v=b,this.prop(c[Math.floor(e()*c.length)],v,0,_,e()*Qn)}};for(let c of xt){if(c.outdoor)continue;let l=c.chapter;if(c.boss){let h=Wn(...c.boss);if(l===1){r(["d_candle_triple","d_candle_lit","h_skull_candle","h_bone_A","h_ribcage","d_rubble_half"],c,26,1),this.prop("d_stairs_wide",h.x,0,h.z-9.8,0);for(let u of[-6,6])this.prop("h_shrine_candles",h.x+u,0,h.z-7,0);for(let[u,d]of[[-10,0],[10,0],[-10,12],[10,12]])this.prop("h_coffin_decorated",h.x+u,0,h.z+d,u>0?-Math.PI/2:Math.PI/2)}else if(l===2){r(["d_coin_stack_large","d_coin_stack_medium","d_chest","d_trunk_large_A","d_candle_melted","d_keyring_hanging"],c,30,1);for(let[u,d]of[[-8,-4],[8,-4],[-8,10],[8,10]])this.prop("d_chest_gold",h.x+u,0,h.z+d,u>0?-Math.PI/2:Math.PI/2)}else{r(["d_rubble_large","d_rubble_half","d_sword_shield_broken","d_candle_triple","h_skull_candle"],c,26,1),this.prop("d_stairs_wide",h.x,0,h.z-9.8,0);for(let u of[-8,8])this.prop("h_shrine_candles",h.x+u,0,h.z-7,0),this.torches.push({x:h.x+u,y:1.6,z:h.z-7,color:qn[3].bossTorch,flame:qn[3].bossFlame,boss:!0})}}else l===2?r(["d_barrel_large","d_barrel_small_stack","d_crates_stacked","d_keg","d_shelf_small_candles","d_trunk_large_A","d_coin_stack_medium","d_rubble_half"],c,16):l===3?r(["d_rubble_large","d_rubble_half","d_sword_shield_broken","d_table_long_broken","d_barrel_large","d_candle_triple","h_bone_B"],c,16):r(["d_barrel_large","d_barrel_small","d_crates_stacked","d_box_stacked","d_candle_triple","d_rubble_half","h_bone_B","h_skull","d_keg","d_trunk_large_A","d_candle_melted"],c,14);if(c.chest){let h=Wn(...c.chest);for(let[u,d]of[[-2.2,.2],[2.2,.4],[-1.6,-1.2],[1.4,-1.4]])this.prop(e()<.5?"d_coin_stack_large":"d_coin_stack_medium",h.x+u,0,h.z+d,e()*Qn)}}let a=xt[0];for(let c=0;c<16;c++){let l=a.x0+e()*(a.x1-a.x0),h=a.z0+e()*(a.z1-a.z0),u=l*4,d=h*4;Math.hypot(u-52,d-92)<6||wh.some(f=>Math.hypot(f.x-u,f.z-d)<3)||this.prop(["h_gravemarker_A","h_gravemarker_B","h_skull","h_bone_C","h_candle_triple","h_lantern_standing"][Math.floor(e()*6)],u,0,d,e()*Qn)}for(let c=0;c<70;c++){let l=e()*Qn,h=52,u=20.5*4,d=22+e()*22,f=h+Math.cos(l)*d*1.1,m=u+Math.sin(l)*d*.9,[b,g]=[Math.round(f/4),Math.round(m/4)];if(Ft(b,g)||Ft(b+1,g)||Ft(b-1,g)||Ft(b,g+1)||Ft(b,g-1))continue;let p=e(),v=p<.45?e()<.5?"h_tree_dead_large":"h_tree_dead_medium":p<.7?"h_grave_A":p<.85?"h_gravestone":"h_post_lantern";this.prop(v,f,0,m,e()*Qn,.9+e()*.5),v==="h_post_lantern"&&this.torches.push({x:f,y:3,z:m,color:"#ffb35c",outdoor:!0})}for(let c=0;c<26;c++){let l=6+Math.floor(e()*16),h=15+Math.floor(e()*13);Ft(l,h)||Ft(l-1,h)||Ft(l+1,h)||Ft(l,h-1)||Ft(l,h+1)||l<9&&h<23}let o=new Oe(new xs(60,48),new Qt({color:"#1a1712",roughness:1}));o.rotation.x=-Math.PI/2,o.position.set(52,-.12,20.5*4),o.receiveShadow=!0,this.group.add(o);{let c=xt.find(d=>d.chapter===3&&d.outdoor),l=(c.x0+c.x1)/2*4,h=(c.z0+c.z1)/2*4,u=new Oe(new xs(46,40),new Qt({color:"#1c0e0a",roughness:1}));u.rotation.x=-Math.PI/2,u.position.set(l,-.12,h),u.receiveShadow=!0,this.group.add(u);for(let[d,f]of[[-12,-8],[12,-8],[-12,8],[12,8]]){let m=l+d,b=h+f;Ft(...ts(m,b))&&(this.prop("h_lantern_standing",m,0,b,e()*Qn,1.3),this.torches.push({x:m,y:2.4,z:b,color:qn[3].torch,flame:qn[3].flame,outdoor:!0}))}for(let d=0;d<60;d++){let f=e()*Qn,m=20+e()*20,b=l+Math.cos(f)*m*1.1,g=h+Math.sin(f)*m*.9,[p,v]=ts(b,g);if(Th(p)!==3||Ft(p,v)||Ft(p+1,v)||Ft(p-1,v)||Ft(p,v+1)||Ft(p,v-1))continue;let _=e(),x=_<.3?"h_tree_dead_large":_<.55?"d_rubble_large":_<.75?"d_wall_broken":_<.9?"d_pillar":"h_post_lantern";this.prop(x,b,0,g,e()*Qn,.9+e()*.4),x==="h_post_lantern"&&this.torches.push({x:b,y:3,z:g,color:qn[3].torch,flame:qn[3].flame,outdoor:!0})}}if(this.water.length){let c=this.water.map(([h,u])=>{let d=new Hn(4,4);return d.rotateX(-Math.PI/2),d.translate(h,.05,u),d}),l=new Oe(gh(c,!1),new Qt({color:"#237a88",emissive:"#0a3a44",transparent:!0,opacity:.5,roughness:.08,metalness:.3,depthWrite:!1}));for(let h of c)h.dispose();l.renderOrder=2,this.group.add(l)}if(this.cracks.length){let c=this.cracks.map(([h,u,d])=>{let f=new Hn(2.4,.1);return f.rotateX(-Math.PI/2),f.rotateY(d),f.translate(h,.06,u),f}),l=new Oe(gh(c,!1),new yt({color:new re("#ff5a14").multiplyScalar(2.5)}));for(let h of c)h.dispose();this.group.add(l)}this.prop("h_arch",8.5*4,0,80,Math.PI/2),this.prop("h_post_skull",8.5*4,0,19.3*4-1.5,0),this.prop("h_post_skull",8.5*4,0,20.7*4+1.5,0);for(let c=0;c<xt.length;c++)for(let[l,h]of xt[c].seals){let{x:u,z:d}=Wn(l,h),f=Ft(l,h-1)||Ft(l,h+1),m=this.makeSeal();m.position.set(u,0,d),m.rotation.y=f?0:Math.PI/2,m.visible=!1,this.group.add(m),this.seals.push({room:c,mesh:m,x:u,z:d,a:0})}t.build(this.group);for(let c of this.torches){let l=c.flame||(c.boss?"#58b6ff":"#ff7a26");this.vfx.emitter({rate:c.outdoor?14:26,emit:h=>h.fire(c.x,c.y,c.z,c.outdoor?.5:.8,l)})}this.vfx.emitter({rate:30,emit:c=>{this.chapter!==3||!this.focus||c.spark(this.focus.x+(Math.random()-.5)*34,.2,this.focus.z+(Math.random()-.5)*26,{n:1,color:"#ff8a3a",speed:.4,up:1.5+Math.random()*1.5,size:.1,grav:.3,drag:.5,life:2.4})}})}makeSeal(){let e=new it({name:"seal",uniforms:{uTime:{value:0},uA:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`varying vec2 vUv; uniform float uTime, uA;
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
        }`,transparent:!0,blending:en,depthWrite:!1,side:Kt}),t=new Hn(3.2,3.6);return t.translate(0,1.8,0),new Oe(t,e)}update(e,t,n,s){this.focus=s,this.chapter=Th(ts(s.x,s.z)[0]);for(let a of this.seals){let o=n[a.room]==="active";a.a+=((o?1:0)-a.a)*Math.min(1,e*5),a.mesh.visible=a.a>.01,a.mesh.material.uniforms.uA.value=a.a,a.mesh.material.uniforms.uTime.value=t,o&&Math.random()<e*20&&this.vfx.spark(a.x+(Math.random()-.5)*3,Math.random()*3,a.z,{n:1,color:"#ff5533",speed:.5,up:1,life:.8,size:.12,grav:.5})}let r=this.torches.map(a=>({tc:a,d:(a.x-s.x)**2+(a.z-s.z)**2})).sort((a,o)=>a.d-o.d);this.lightPool.forEach((a,o)=>{let c=r[o];if(!c||c.d>1600){a.intensity=0;return}let l=c.tc;a.position.set(l.x,l.y,l.z),a.color.set(l.color);let h=1+Math.sin(t*13+o*3.1)*.07+Math.sin(t*31+o)*.05;a.intensity=(l.outdoor?14:l.boss?28:24)*h,a.distance=l.outdoor?12:15})}};Fh();var pM=[0,2,3,5,7,8,10],Mf=[[50,53,57],[46,50,53],[48,52,55],[45,49,52]],Go=i=>440*2**((i-69)/12),Oh=class{constructor(){this.ctx=null,this.vol={master:.8,music:.5,sfx:.85},this.mode="menu",this.last={}}unlock(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let e=window.AudioContext||window.webkitAudioContext;if(!e)return;let t=this.ctx=new e;this.comp=t.createDynamicsCompressor(),this.comp.threshold.value=-12,this.comp.ratio.value=5,this.comp.attack.value=.003,this.master=t.createGain(),this.master.gain.value=this.vol.master,this.comp.connect(this.master).connect(t.destination),this.sfx=t.createGain(),this.sfx.gain.value=this.vol.sfx,this.sfx.connect(this.comp),this.music=t.createGain(),this.music.gain.value=this.vol.music,this.music.connect(this.comp),this.reverb=t.createConvolver(),this.reverb.buffer=this.impulse(3.6,2.4);let n=t.createGain();n.gain.value=.55,this.reverb.connect(n).connect(this.comp),this.noiseBuf=this.makeNoise(2),this.startMusic()}setVolume(e,t){if(this.vol[e]=t,!this.ctx)return;(e==="master"?this.master:e==="music"?this.music:this.sfx).gain.setTargetAtTime(t,this.ctx.currentTime,.05)}impulse(e,t){let n=this.ctx,s=n.sampleRate*e,r=n.createBuffer(2,s,n.sampleRate);for(let a=0;a<2;a++){let o=r.getChannelData(a);for(let c=0;c<s;c++)o[c]=(Math.random()*2-1)*(1-c/s)**t}return r}makeNoise(e){let t=this.ctx,n=t.sampleRate*e,s=t.createBuffer(1,n,t.sampleRate),r=s.getChannelData(0);for(let a=0;a<n;a++)r[a]=Math.random()*2-1;return s}out(e){let t=this.ctx,n=e.vol??1,s=0;if(e.L&&e.x!==void 0){let c=e.x-e.L.x,l=(e.z??e.L.z)-e.L.z;n*=Math.max(0,1-Math.hypot(c,l)/40)**1.3,s=Math.max(-1,Math.min(1,c/18))}if(n<.01)return null;let r=t.createGain();r.gain.value=n;let a=t.createStereoPanner();a.pan.value=s,r.connect(a).connect(this.sfx);let o=t.createGain();return o.gain.value=e.wet??.25,a.connect(o).connect(this.reverb),r}tone(e,{type:t="sine",f0:n,f1:s,dur:r,vol:a=.3,attack:o=.005,delay:c=0,detune:l=0}){let h=this.ctx,u=h.currentTime+c,d=h.createOscillator(),f=h.createGain();d.type=t,d.detune.value=l,d.frequency.setValueAtTime(n,u),s&&d.frequency.exponentialRampToValueAtTime(Math.max(1,s),u+r),f.gain.setValueAtTime(1e-4,u),f.gain.exponentialRampToValueAtTime(a,u+o),f.gain.exponentialRampToValueAtTime(1e-4,u+r),d.connect(f).connect(e),d.start(u),d.stop(u+r+.05)}noise(e,{dur:t,vol:n=.3,type:s="bandpass",f0:r=1e3,f1:a,q:o=1,attack:c=.003,delay:l=0}){let h=this.ctx,u=h.currentTime+l,d=h.createBufferSource();d.buffer=this.noiseBuf,d.playbackRate.value=.8+Math.random()*.4;let f=h.createBiquadFilter();f.type=s,f.Q.value=o,f.frequency.setValueAtTime(r,u),a&&f.frequency.exponentialRampToValueAtTime(a,u+t);let m=h.createGain();m.gain.setValueAtTime(1e-4,u),m.gain.exponentialRampToValueAtTime(n,u+c),m.gain.exponentialRampToValueAtTime(1e-4,u+t),d.connect(f).connect(m).connect(e),d.start(u,Math.random()),d.stop(u+t+.05)}play(e,t={}){if(!this.ctx||this.ctx.state!=="running")return;let n=this.ctx.currentTime,s={hit:.03,hitCrit:.04,swing:.04,bones:.05,spawn:.08,block:.05,loot:.08}[e]??0;if(s&&n-(this.last[e]||0)<s)return;this.last[e]=n;let r=()=>.9+Math.random()*.2,a=this.out(t);if(a)switch(e){case"swing":this.noise(a,{dur:.16,vol:.28,f0:900*r(),f1:3800,q:1.4,attack:.02});break;case"swingHeavy":this.noise(a,{dur:.3,vol:.4,f0:400,f1:2400,q:1.2,attack:.04}),this.tone(a,{type:"sine",f0:90,f1:50,dur:.3,vol:.2});break;case"hit":this.noise(a,{dur:.09,vol:.45,f0:1500*r(),q:1.5}),this.tone(a,{type:"triangle",f0:160*r(),f1:60,dur:.12,vol:.35}),this.noise(a,{dur:.05,vol:.2,type:"highpass",f0:5e3});break;case"hitCrit":this.noise(a,{dur:.14,vol:.55,f0:2200,q:2}),this.tone(a,{type:"triangle",f0:220,f1:55,dur:.18,vol:.45}),this.tone(a,{type:"sine",f0:2600*r(),f1:3400,dur:.2,vol:.08,delay:.01});break;case"block":this.tone(a,{type:"square",f0:900*r(),f1:700,dur:.12,vol:.12}),this.noise(a,{dur:.1,vol:.3,type:"highpass",f0:3e3});break;case"impactHeavy":this.tone(a,{type:"sine",f0:110,f1:32,dur:.6,vol:.7}),this.noise(a,{dur:.5,vol:.45,type:"lowpass",f0:1800,f1:150});break;case"bossSlam":this.tone(this.out({...t,wet:.6})||a,{type:"sine",f0:80,f1:24,dur:1.1,vol:.9}),this.noise(a,{dur:.9,vol:.6,type:"lowpass",f0:1200,f1:90});break;case"dodge":this.noise(a,{dur:.25,vol:.3,f0:500,f1:2600,q:.9,attack:.03});break;case"potion":this.tone(a,{type:"sine",f0:500,f1:900,dur:.25,vol:.18}),this.noise(a,{dur:.2,vol:.12,f0:3e3,q:4,delay:.05});break;case"skill":this.noise(a,{dur:.18,vol:.18,f0:1800,f1:600,q:2});break;case"shout":this.tone(this.out({vol:.9,wet:.5}),{type:"sawtooth",f0:180,f1:140,dur:.6,vol:.18,attack:.05}),this.tone(this.out({vol:.9,wet:.5}),{type:"sawtooth",f0:270,f1:210,dur:.6,vol:.1,attack:.05});break;case"charge":this.tone(a,{type:"sawtooth",f0:200,f1:900,dur:.8,vol:.08,attack:.3}),this.noise(a,{dur:.8,vol:.12,f0:800,f1:5e3,q:3,attack:.3});break;case"counter":this.tone(this.out({vol:1,wet:.6}),{type:"triangle",f0:1318,dur:.6,vol:.2}),this.tone(this.out({vol:1,wet:.6}),{type:"triangle",f0:1760,dur:.6,vol:.14,delay:.05}),this.tone(a,{type:"sine",f0:120,f1:40,dur:.5,vol:.6});break;case"counterTell":this.tone(this.out({vol:1,wet:.5}),{type:"sine",f0:1480,dur:.35,vol:.12}),this.tone(this.out({vol:1,wet:.5}),{type:"sine",f0:1480,dur:.35,vol:.12,delay:.18});break;case"bones":for(let o=0;o<5;o++)this.tone(a,{type:"square",f0:700+Math.random()*900,f1:300,dur:.05,vol:.06,delay:o*.04+Math.random()*.03});this.noise(a,{dur:.3,vol:.2,f0:2500,q:3});break;case"bossDie":{let o=this.out({vol:1,wet:1});this.tone(o,{type:"sawtooth",f0:90,f1:30,dur:3,vol:.4,attack:.1}),this.noise(o,{dur:3,vol:.5,type:"lowpass",f0:1500,f1:60});break}case"spawn":this.noise(a,{dur:.6,vol:.18,type:"lowpass",f0:400,attack:.1});for(let o=0;o<3;o++)this.tone(a,{type:"square",f0:400+Math.random()*500,f1:200,dur:.05,vol:.04,delay:.2+o*.12});break;case"hurt":this.tone(a,{type:"sawtooth",f0:200,f1:80,dur:.18,vol:.2}),this.noise(a,{dur:.15,vol:.3,f0:600,q:.8});break;case"down":this.tone(this.out({vol:1,wet:.7}),{type:"sine",f0:330,f1:110,dur:1.4,vol:.3});break;case"revive":[0,4,7,12,16].forEach((o,c)=>this.tone(this.out({vol:1,wet:.7}),{type:"triangle",f0:523*2**(o/12),dur:.9,vol:.1,delay:c*.08}));break;case"smoke":this.noise(a,{dur:.7,vol:.35,type:"lowpass",f0:1200,f1:300,attack:.02});break;case"bow":this.noise(a,{dur:.08,vol:.3,f0:1200,q:3}),this.tone(a,{type:"triangle",f0:180,f1:120,dur:.12,vol:.2});break;case"cast":this.tone(a,{type:"sine",f0:600,f1:1400,dur:.18,vol:.12}),this.noise(a,{dur:.2,vol:.15,f0:2500,f1:800,q:2});break;case"explode":this.tone(a,{type:"sine",f0:140,f1:35,dur:.6,vol:.6}),this.noise(a,{dur:.7,vol:.5,type:"lowpass",f0:3e3,f1:200});break;case"thunder":{let o=this.out({...t,wet:.9})||a;this.noise(o,{dur:1.4,vol:.7,type:"lowpass",f0:5e3,f1:120,attack:.002}),this.tone(o,{type:"sine",f0:70,f1:30,dur:1.2,vol:.7});break}case"soul":this.tone(a,{type:"sine",f0:300,f1:900,dur:.4,vol:.12}),this.noise(a,{dur:.5,vol:.25,type:"lowpass",f0:900});break;case"frost":this.noise(a,{dur:.8,vol:.25,type:"highpass",f0:5e3,attack:.05}),this.tone(a,{type:"sine",f0:2200,f1:1600,dur:.6,vol:.06});break;case"meteorFall":this.noise(this.out({vol:1,wet:.3}),{dur:1.2,vol:.35,f0:300,f1:2400,q:1,attack:.9});break;case"summon":this.tone(this.out({...t,wet:.8})||a,{type:"sawtooth",f0:60,f1:90,dur:1.4,vol:.2,attack:.3});break;case"seal":this.tone(this.out({vol:1,wet:.8}),{type:"sine",f0:110,dur:1.4,vol:.4,attack:.02}),this.noise(this.out({vol:1,wet:.8}),{dur:.8,vol:.2,type:"highpass",f0:3e3});break;case"bossDoor":{let o=this.out({vol:1,wet:1});this.tone(o,{type:"sine",f0:55,dur:3,vol:.6,attack:.2}),this.tone(o,{type:"sawtooth",f0:110,dur:2.5,vol:.08,attack:.5,detune:8});break}case"roar":{let o=this.out({vol:1,wet:.9});this.tone(o,{type:"sawtooth",f0:75,f1:50,dur:2,vol:.4,attack:.15}),this.tone(o,{type:"sawtooth",f0:78,f1:48,dur:2,vol:.35,attack:.2}),this.noise(o,{dur:1.8,vol:.4,type:"lowpass",f0:700,f1:200,attack:.1});break}case"clear":[0,3,7,12].forEach((o,c)=>this.tone(this.out({vol:1,wet:.8}),{type:"triangle",f0:293.7*2**(o/12),dur:1.2,vol:.12,delay:c*.1}));break;case"chest":[0,4,7,11,14].forEach((o,c)=>this.tone(this.out({vol:1,wet:.8}),{type:"sine",f0:659*2**(o/12),dur:.8,vol:.12,delay:c*.06}));break;case"loot":{let o=t.tier??0;[0,7,12,16,19].slice(0,2+o).forEach((c,l)=>this.tone(this.out({vol:1,wet:.7}),{type:"triangle",f0:587*2**(c/12),dur:.7,vol:.1,delay:l*.07}));break}case"levelup":[0,4,7,12,16,19,24].forEach((o,c)=>this.tone(this.out({vol:1,wet:.8}),{type:"triangle",f0:392*2**(o/12),dur:1.2,vol:.12,delay:c*.07}));break;case"ui":this.tone(a,{type:"sine",f0:800,f1:1e3,dur:.05,vol:.06});break;case"equip":this.noise(a,{dur:.12,vol:.2,f0:3e3,q:3}),this.tone(a,{type:"square",f0:300,f1:200,dur:.08,vol:.05});break;case"step":this.noise(a,{dur:.06,vol:.08,type:"lowpass",f0:600});break}}startMusic(){let e=this.ctx;this.pad=e.createGain(),this.pad.gain.value=0,this.padF=e.createBiquadFilter(),this.padF.type="lowpass",this.padF.frequency.value=700,this.pad.connect(this.padF).connect(this.music);let t=e.createGain();t.gain.value=.5,this.padF.connect(t).connect(this.reverb),this.voices=[];for(let r=0;r<3;r++)for(let a of[-9,0,9]){let o=e.createOscillator();o.type=r===0?"sawtooth":"triangle",o.detune.value=a;let c=e.createGain();c.gain.value=r===0?.03:.05,o.connect(c).connect(this.pad),o.start(),this.voices.push({o,i:r})}let n=e.createOscillator(),s=e.createGain();n.frequency.value=.06,s.gain.value=300,n.connect(s).connect(this.padF.frequency),n.start(),this.chord=0,this.step=0,this.next=e.currentTime+.1,setInterval(()=>this.schedule(),50),this.setMusic(this.mode)}setMusic(e){if(this.mode=e,!this.ctx||!this.pad)return;let t={menu:.5,explore:.45,combat:.4,boss:.45,victory:.6,silence:0}[e]??.4;this.pad.gain.setTargetAtTime(t,this.ctx.currentTime,1.2)}schedule(){let e=this.ctx;if(!e||e.state!=="running")return;let t=this.mode,s=60/(t==="boss"?132:t==="combat"?108:70)/4;for(;this.next<e.currentTime+.2;){let r=this.next,a=this.step++;if(a%(16*2)===0){this.chord=(this.chord+1)%Mf.length;let l=t==="victory"?[50,54,57]:Mf[this.chord];for(let h of this.voices)h.o.frequency.setTargetAtTime(Go(l[h.i]-12),r,.4)}let c=(t==="victory"?50:Mf[this.chord][0])-24;t==="combat"||t==="boss"?(a%4===0&&this.drum(r,"kick",t==="boss"?.55:.4),t==="boss"&&a%8===6&&this.drum(r,"kick",.35),a%8===4&&this.drum(r,"snare",t==="boss"?.22:.14),a%2===1&&this.drum(r,"hat",.03),a%2===0&&this.bass(r,Go(c+(a%8===6?7:0)),s*1.8,t==="boss"?.16:.12),t==="boss"&&a%32===0&&this.brass(r,Go(c+24),s*12),t==="boss"&&a%32===20&&this.brass(r,Go(c+27),s*8)):t!=="silence"&&(a%16===0&&Math.random()<.6&&this.bell(r,Go(62+pM[Math.random()*7|0]+(Math.random()<.3?12:0)),.045),a%64===0&&this.drum(r,"boom",.35)),this.next+=s}}bell(e,t,n){let s=this.ctx,r=s.createGain();r.gain.setValueAtTime(1e-4,e),r.gain.exponentialRampToValueAtTime(n,e+.01),r.gain.exponentialRampToValueAtTime(1e-4,e+3);for(let[o,c]of[[1,1],[2.76,.3],[5.4,.1]]){let l=s.createOscillator();l.frequency.value=t*o;let h=s.createGain();h.gain.value=c,l.connect(h).connect(r),l.start(e),l.stop(e+3.1)}r.connect(this.music);let a=s.createGain();a.gain.value=1,r.connect(a).connect(this.reverb)}bass(e,t,n,s){let r=this.ctx,a=r.createOscillator(),o=r.createGain(),c=r.createBiquadFilter();a.type="sawtooth",a.frequency.value=t,c.type="lowpass",c.frequency.value=380,c.Q.value=4,o.gain.setValueAtTime(1e-4,e),o.gain.exponentialRampToValueAtTime(s,e+.01),o.gain.exponentialRampToValueAtTime(1e-4,e+n),a.connect(c).connect(o).connect(this.music),a.start(e),a.stop(e+n+.05)}brass(e,t,n){let s=this.ctx,r=s.createGain(),a=s.createBiquadFilter();a.type="lowpass",a.frequency.setValueAtTime(400,e),a.frequency.linearRampToValueAtTime(2200,e+.15),a.frequency.linearRampToValueAtTime(900,e+n),r.gain.setValueAtTime(1e-4,e),r.gain.exponentialRampToValueAtTime(.09,e+.08),r.gain.exponentialRampToValueAtTime(1e-4,e+n);for(let c of[-10,0,10])for(let l of[1,1.5]){let h=s.createOscillator();h.type="sawtooth",h.frequency.value=t*l,h.detune.value=c,h.connect(a),h.start(e),h.stop(e+n+.1)}a.connect(r).connect(this.music);let o=s.createGain();o.gain.value=.6,r.connect(o).connect(this.reverb)}drum(e,t,n){let s=this.ctx;if(t==="kick"||t==="boom"){let c=s.createOscillator(),l=s.createGain();if(c.frequency.setValueAtTime(t==="boom"?60:120,e),c.frequency.exponentialRampToValueAtTime(t==="boom"?28:38,e+(t==="boom"?1:.18)),l.gain.setValueAtTime(n,e),l.gain.exponentialRampToValueAtTime(1e-4,e+(t==="boom"?1.6:.35)),c.connect(l).connect(this.music),c.start(e),c.stop(e+1.7),t==="boom"){let h=s.createGain();h.gain.value=.6,l.connect(h).connect(this.reverb)}return}let r=s.createBufferSource();r.buffer=this.noiseBuf;let a=s.createBiquadFilter();a.type=t==="hat"?"highpass":"bandpass",a.frequency.value=t==="hat"?8e3:1600;let o=s.createGain();if(o.gain.setValueAtTime(n,e),o.gain.exponentialRampToValueAtTime(1e-4,e+(t==="hat"?.04:.2)),r.connect(a).connect(o).connect(this.music),r.start(e,Math.random()),r.stop(e+.25),t==="snare"){let c=s.createGain();c.gain.value=.5,o.connect(c).connect(this.reverb)}}};var Bh=class{constructor(e){this.keys=new Set,this.mouse={x:innerWidth/2,y:innerHeight/2,down:!1,right:!1},this.casts=[],this.dest=null,this.enabled=!1,this.onMoveOrder=null;let t={KeyQ:"q",KeyW:"w",KeyE:"e",KeyR:"r",Space:"dodge",KeyF:"potion",KeyI:"inventory",Tab:"inventory"};addEventListener("keydown",n=>{if(n.target instanceof HTMLInputElement||!this.enabled)return;let s=t[n.code];s&&!n.repeat&&(this.casts.push(s),s!=="inventory"&&s!=="potion"&&(this.dest=null)),this.keys.add(n.code),(["Space","Tab"].includes(n.code)||n.code.startsWith("Arrow"))&&n.preventDefault()}),addEventListener("keyup",n=>this.keys.delete(n.code)),addEventListener("blur",()=>{this.keys.clear(),this.mouse.down=this.mouse.right=!1}),addEventListener("mousemove",n=>{this.mouse.x=n.clientX,this.mouse.y=n.clientY}),e.addEventListener("mousedown",n=>{n.button===0&&(this.mouse.down=!0,this.dest=null),n.button===2&&(this.mouse.right=!0,this.clicked=!0)}),addEventListener("mouseup",n=>{n.button===0&&(this.mouse.down=!1),n.button===2&&(this.mouse.right=!1)}),e.addEventListener("contextmenu",n=>n.preventDefault())}sample(e,t){let n=this.keys,s=e.pick(this.mouse.x,this.mouse.y),r=(n.has("ArrowRight")?1:0)-(n.has("ArrowLeft")?1:0),a=(n.has("ArrowDown")?1:0)-(n.has("ArrowUp")?1:0);if((r||a)&&(this.dest=null),this.enabled&&this.mouse.right&&(this.dest={x:s.x,z:s.z},this.clicked&&(this.clicked=!1,this.onMoveOrder?.(s.x,s.z))),this.dest){let o=this.dest.x-t.x,c=this.dest.z-t.z,l=Math.hypot(o,c);l<.35?this.dest=null:(r=o/l,a=c/l)}return{mx:r,mz:a,ax:s.x,az:s.z,attack:this.enabled&&this.mouse.down}}takeCasts(){return this.casts.splice(0)}};pi();ss();pi();var Sf=[{id:"common",name:"\uC77C\uBC18",color:"#c9c4bd",weight:55,mult:1,affixes:1},{id:"uncommon",name:"\uACE0\uAE09",color:"#7ee07a",weight:28,mult:1.15,affixes:2},{id:"rare",name:"\uD76C\uADC0",color:"#5cb3ff",weight:12,mult:1.35,affixes:2},{id:"epic",name:"\uC601\uC6C5",color:"#c77dff",weight:4.5,mult:1.6,affixes:3},{id:"legendary",name:"\uC804\uC124",color:"#ff9a3c",weight:.5,mult:2,affixes:4}],wn=Object.fromEntries(Sf.map((i,e)=>[i.id,{...i,tier:e}])),Xn={weapon:{name:"\uBB34\uAE30",main:"class",base:2.8},helm:{name:"\uD22C\uAD6C",main:"vit",base:1.2},armor:{name:"\uAC11\uC637",main:"vit",base:2.2},trinket:{name:"\uC7A5\uC2E0\uAD6C",main:"crit",base:.025}},ya=Object.keys(Xn),Tf={str:{name:ns.str,base:1.2,fmt:i=>`+${Math.round(i)}`},dex:{name:ns.dex,base:1.2,fmt:i=>`+${Math.round(i)}`},int:{name:ns.int,base:1.2,fmt:i=>`+${Math.round(i)}`},vit:{name:ns.vit,base:.9,fmt:i=>`+${Math.round(i)}`},atk:{name:"\uACF5\uACA9\uB825",base:6,fmt:i=>`+${Math.round(i)}`},hp:{name:"\uCD5C\uB300 \uC0DD\uBA85\uB825",base:45,fmt:i=>`+${Math.round(i)}`},crit:{name:"\uCE58\uBA85\uD0C0 \uD655\uB960",base:.015,fmt:i=>`+${(i*100).toFixed(1)}%`},critDmg:{name:"\uCE58\uBA85\uD0C0 \uD53C\uD574",base:.05,fmt:i=>`+${Math.round(i*100)}%`},haste:{name:"\uC2E0\uC18D",base:.015,fmt:i=>`+${(i*100).toFixed(1)}%`},def:{name:"\uBC29\uC5B4\uB825",base:8,fmt:i=>`+${Math.round(i)}`}},w0=(i,e,t)=>`${i==="atk"&&t?dr(t):Tf[i].name} ${Tf[i].fmt(e)}`,T0={weapon:{knight:["\uAE30\uC0AC\uAC80","\uC218\uD638\uC790\uC758 \uAC80","\uB9F9\uC138\uC758 \uAC80"],barbarian:["\uC804\uC7C1\uB3C4\uB07C","\uD559\uC0B4\uC790\uC758 \uB3C4\uB07C","\uBD84\uC1C4\uC790"],mage:["\uB9C8\uB825 \uC9C0\uD321\uC774","\uC7BF\uBD88 \uC9C0\uD321\uC774","\uC11C\uB9AC \uD640"],rogue:["\uC30D\uB2E8\uAC80","\uADF8\uB9BC\uC790 \uC1A1\uACF3\uB2C8","\uB3C5\uC0AC\uC758 \uC774\uBE68"],archer:["\uC11D\uAD81","\uC7A5\uAD81","\uC0AC\uB0E5\uAFBC\uC758 \uD65C","\uB9E4\uC758 \uB208"]},helm:["\uD22C\uAD6C","\uAC00\uBA74","\uAD00"],armor:["\uD749\uAC11","\uAC11\uC8FC","\uC608\uBCF5"],trinket:["\uBC18\uC9C0","\uBD80\uC801","\uBAA9\uAC78\uC774"]},mM={common:["\uB0A1\uC740","\uD22C\uBC15\uD55C"],uncommon:["\uB2E8\uB2E8\uD55C","\uC5F0\uB9C8\uB41C"],rare:["\uB9DD\uC790\uC758","\uBB18\uC9C0\uAE30\uC758"],epic:["\uD574\uACE8\uC655\uC758","\uC800\uC8FC\uBC1B\uC740"],legendary:["\uC7BF\uBE5B \uC655\uAD00\uC758","\uC544\uB974\uCE74\uC2A4\uC758"]};function gM(i,e=0){let t=Sf.map((s,r)=>s.weight*(r===0?Math.max(.1,1-e):1+e*r*1.5)),n=i()*t.reduce((s,r)=>s+r,0);for(let s=0;s<t.length;s++)if(n-=t[s],n<=0)return Sf[s].id;return"common"}var bM=0;function E0(i,{ilvl:e=1,rarity:t,slot:n,cls:s="knight",luck:r=0}={}){t=t||gM(i,r),n=n||ya[Math.floor(i()*ya.length)];let a=wn[t],o=Xn[n],c=(1+e*.12)*a.mult,l=o.main==="class"?$e[s].main:o.main,h={[l]:o.base*c},u=["vit",$e[s].main,"crit","critDmg","haste","def"].filter(m=>m!==l);for(let m=0;m<a.affixes-1&&u.length;m++){let b=u.splice(Math.floor(i()*u.length),1)[0];h[b]=(h[b]||0)+Tf[b].base*c*(.7+i()*.6)}for(let m in h)h[m]=m==="crit"||m==="critDmg"||m==="haste"?Math.round(h[m]*1e3)/1e3:Math.max(1,Math.round(h[m]));let d=n==="weapon"?T0.weapon[s]:T0[n],f=`${mM[t][Math.floor(i()*2)]} ${d[Math.floor(i()*d.length)]}`;return{id:`${Date.now().toString(36)}${(bM++).toString(36)}${Math.floor(i()*1e6).toString(36)}`,slot:n,rarity:t,ilvl:e,name:f,stats:h}}pi();ss();mr();var wf="ashen.profile.v1",vr=20,Ma=36,_r=12,Xo=2,as=i=>120+i*90,qo=i=>String(i??"").replace(/\s+/g," ").trim().slice(0,_r);function R0(i,e){return{cls:i,name:e,spec:Ct(i).id,look:va(),level:1,xp:0,equipped:{weapon:null,helm:null,armor:null,trinket:null},bag:[]}}var Wo=(i,e,t,n)=>Number.isFinite(+i)?Math.max(e,Math.min(t,Math.floor(+i))):n,xM=["current","chars","maxDifficulty","difficulty"];function A0(i,e){if(!i||typeof i!="object"||!Xn[i.slot]||e&&i.slot!==e||!wn[i.rarity]||typeof i.stats!="object")return null;let t={};for(let[n,s]of Object.entries(i.stats))Number.isFinite(s)&&(t[n]=Math.max(0,Math.min(["crit","critDmg","haste"].includes(n)?1:5e3,s)));return{id:String(i.id).slice(0,40),slot:i.slot,rarity:i.rarity,ilvl:Wo(i.ilvl,1,200,1),name:String(i.name||"").slice(0,40),stats:t}}function jo(i,e){let t=qo(e)||"\uBAA8\uD5D8\uAC00",n={chars:{}};for(let s of ei){let r=i?.chars?.[s]||{},a=R0(s,qo(r.name)||t);a.spec=Ct(s,r.spec).id,a.look=va(r.look),a.level=Wo(r.level,1,vr,1),a.xp=Wo(r.xp,0,1e7,0);for(let o of ya)a.equipped[o]=A0(r.equipped?.[o],o);a.bag=(Array.isArray(r.bag)?r.bag:[]).slice(0,Ma).map(o=>A0(o)).filter(Boolean),n.chars[s]=a}return n.current=ei.includes(i?.current)?i.current:ei[0],n.maxDifficulty=Wo(i?.maxDifficulty,1,Math.min(is,In),1),n.difficulty=Wo(i?.difficulty,1,n.maxDifficulty,1),n}var C0=i=>Object.fromEntries(xM.map(e=>[e,i[e]]));function vM(){let i="\uBAA8\uD5D8\uAC00"+Math.floor(100+Math.random()*900);return{v:1,uid:_M(),nickname:"",name:i,current:"knight",chars:Object.fromEntries(ei.map(e=>[e,R0(e,i)])),stats:{runs:0,clears:0,bestTime:0,kills:0},maxDifficulty:1,difficulty:1,settings:{master:.8,music:.5,sfx:.85,shake:!0,quality:2,numbers:!0,fps:!1,autoEquip:!0},seenTutorial:!1}}function P0(){let i;try{i=JSON.parse(localStorage.getItem(wf)||"null")}catch{i=null}let e=vM();return(!i||i.v!==1)&&(i=e),Object.assign(i,jo(i,qo(i.name)||e.name)),(typeof i.uid!="string"||i.uid.length<8)&&(i.uid=e.uid),i.nickname=qo(i.nickname),i.nickname.length<Xo&&(i.nickname=""),i.settings={...e.settings,...i.settings},i.stats={...e.stats,...i.stats},Object.defineProperty(i,"character",{get(){return{...this.chars[this.current],name:this.nickname||this.chars[this.current].name}},enumerable:!1,configurable:!0}),i}function _M(){let i=new Uint8Array(12);return crypto.getRandomValues(i),Array.from(i,e=>e.toString(16).padStart(2,"0")).join("")}var rs=null;function Ef(i,e,t){rs&&Af(i),rs={local:C0(i),save:t},Object.assign(i,jo(e,ut(i).name))}function Af(i){if(!rs)return;let{local:e}=rs;rs=null,Object.assign(i,e),Wt(i)}var I0=()=>!!rs;function Wt(i){if(rs){rs.save(C0(i));try{localStorage.setItem(wf,JSON.stringify({...i,...rs.local}))}catch{}return}try{localStorage.setItem(wf,JSON.stringify(i))}catch{}}function ut(i){return i.chars[i.current]}function Hh(i,e){let t=Math.min(is,In,e+1);return t<=i.maxDifficulty?0:(i.maxDifficulty=t,t)}function Rf(i,e){let t=qo(e);return t.length>=Xo&&(i.nickname=t),i.nickname}function k0(i,e){let t=ut(i);if(t.level>=vr)return 0;t.xp+=e;let n=0;for(;t.level<vr&&t.xp>=as(t.level);)t.xp-=as(t.level),t.level++,n++;return t.level>=vr&&(t.xp=0),n}function L0(i,e){let t=ut(i);return t.bag.length>=Ma?!1:(t.bag.push(e),!0)}function $o(i,e){let t=ut(i),n=t.bag.findIndex(a=>a.id===e);if(n<0)return!1;let s=t.bag[n],r=t.equipped[s.slot];return t.bag.splice(n,1),r&&t.bag.push(r),t.equipped[s.slot]=s,!0}function D0(i,e){let t=ut(i),n=t.equipped[e];return!n||t.bag.length>=Ma?!1:(t.equipped[e]=null,t.bag.push(n),!0)}function N0(i,e){let t=ut(i);t.bag=t.bag.filter(n=>n.id!==e)}function Ps(i,e=null){let t={...i.equipped};return e&&(t[e.slot]=e),xa(i.cls,i.level,Object.values(t),i.spec)}var Li=(i,e=null)=>g0(Ps(i,e));function U0(i,e){return Li(i,e)>Li(i)}function Cf(i){let e=ut(i),t=!1;for(let n=0;n<Ma;n++){let s=null,r=0,a=Li(e);for(let o of e.bag){let c=Li(e,o)-a;c>r&&(r=c,s=o)}if(!s)break;t=$o(i,s.id)||t}return t}var yM={shieldDash:'<path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"/><path d="M2 12h3M1 16h4M2 8h3"/>',judgement:'<path d="M6 18L17 7l1-3-3 1L4 16z"/><path d="M4 21c3-1 6-1 9 0M3 18l3 3"/><path d="M18 14c2 1 3 3 3 5"/>',oath:'<path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"/><path d="M12 8v7M8.5 11.5h7"/>',smite:'<path d="M13 2L5 13h6l-2 9 9-12h-6z"/>',leap:'<path d="M4 20c2-8 6-13 12-15"/><path d="M13 4l4 1-1 4"/><path d="M3 21h10M5 18l-2 3M11 18l2 3"/>',whirl:'<path d="M20 12a8 8 0 1 1-3-6.2"/><path d="M17 3v3h-3"/><path d="M15 12a3 3 0 1 1-1-2.2"/>',shout:'<path d="M3 10v4h4l6 5V5L7 10z"/><path d="M16 9c1 1 1 5 0 6M19 6c2.5 3 2.5 9 0 12"/>',rage:'<circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M19 5l-3 3M8 16l-3 3"/>',flame:'<path d="M12 22c-4 0-7-3-7-7.5 0-3.5 2.2-5.6 3.5-8 .6 1.8 1.4 2.9 2.5 3.5C11 6.5 12 4 14.5 2c.3 3.2 1.8 5 3.2 7 .9 1.4 1.3 3 1.3 4.8C19 18.8 16 22 12 22z"/><path d="M12 22c-1.9 0-3.2-1.4-3.2-3.3 0-1.8 1.3-2.8 2-4.4.5 1 1 1.4 1.7 1.7.2-1.3.7-2.3 1.6-3 .5 1.6 1.9 2.8 1.9 4.9 0 2.4-1.6 4.1-4 4.1z"/>',chain:'<path d="M12 2L6.5 11H11l-3 6"/><path d="M8 17l-1.5 5"/><path d="M11 11l5.5-1-2.5 4.5 5 .5-4 7"/>',taunt:'<path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"/><path d="M12 8v5.5"/><path d="M12 16.5v.5"/>',holy:'<path d="M4 20L16 8"/><path d="M13 5h6v6"/><path d="M8 9L5 8M11 5.5L10.5 2.5M15 16l1 3M18.5 13l3 .5"/>',holyburst:'<path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.8 2.8M16.2 16.2L19 19M19 5l-2.8 2.8M7.8 16.2L5 19"/><path d="M10.5 9.5h3v3h-3z" transform="rotate(45 12 11)"/><path d="M12 9.5v5M9.5 12h5"/>',orb:'<circle cx="14" cy="12" r="5"/><path d="M14 9.5v5M11.5 12h5"/><path d="M2 9h5M3 12h5M2 15h5"/>',roar:'<path d="M4 8c2-3 5-4.5 8-4.5 4.5 0 8 3.5 8 8v1.5l-3 1v3l-3 1V21H9v-3.5c-3-1-5-4-5-7.5z"/><path d="M8.5 10.5h.01M12.5 10.5h.01"/><path d="M9 14.5c1.5 1 3 1 4.5 0"/>',iron:'<path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"/><path d="M8.5 9.5h7M8.5 13h7M12 6.5v10"/>',quake:'<path d="M2 18h20"/><path d="M5 18l2-4 2.5 2 2.5-5 2.5 4 2-2 2 5"/><path d="M12 3v5M9.5 5.5L12 8l2.5-2.5"/>',fan:'<path d="M12 21L5 6M12 21l-2.5-15.5M12 21V5M12 21l2.5-15.5M12 21l7-15"/><path d="M4 5h2M8.5 4.5h2M11 3.5h2M13.5 4.5h2M18 5h2"/>',venom:'<path d="M4 15c0-3 2.5-4 4-4 .5-3 3-5 5.5-5 3.5 0 5.5 2.5 5.5 5.5 1.5.5 2.5 2 2.5 3.5 0 2.5-2 4-4.5 4H7.5C5.5 19 4 17.5 4 15z"/><path d="M9 14.5h.01M13 13h.01M15.5 16h.01"/>',spring:'<ellipse cx="12" cy="18.5" rx="8.5" ry="2.8"/><path d="M12 15V4.5M8.5 8L12 4.5 15.5 8"/><path d="M6.5 11.5v2.5M17.5 11.5v2.5"/>',miracle:'<path d="M12 3l1.6 3.9 3.9 1.6-3.9 1.6L12 14l-1.6-3.9-3.9-1.6 3.9-1.6z"/><path d="M2.5 11.5c2 5 5.2 7.6 9.5 8.8 4.3-1.2 7.5-3.8 9.5-8.8"/><path d="M6 13.5c1.5 2.2 3.5 3.6 6 4.3 2.5-.7 4.5-2.1 6-4.3"/>',passive:'<path d="M12 2.5l2.6 6.9 6.9 2.6-6.9 2.6L12 21.5l-2.6-6.9L2.5 12l6.9-2.6z"/><circle cx="12" cy="12" r="1.6"/>',tree:'<circle cx="12" cy="4.5" r="2"/><circle cx="5.5" cy="19.5" r="2"/><circle cx="18.5" cy="19.5" r="2"/><path d="M12 6.5v5M12 11.5L6.3 17.8M12 11.5l5.7 6.3"/>',menu:'<path d="M4 6.5h16M4 12h16M4 17.5h16"/>',crossbow:'<path d="M5 19L18.5 5.5"/><path d="M7.5 4c5 .8 11.7 7.5 12.5 12.5"/><path d="M7.5 4L14 12.2 20 16.5"/><path d="M3.5 20.5l3-1 .5-2.5"/>',bow:'<path d="M7 3c6 2.5 9.5 6 9.5 9s-3.5 6.5-9.5 9"/><path d="M7 3v18"/><path d="M3 12h15"/><path d="M15.5 9.5L18 12l-2.5 2.5"/>',volley:'<path d="M3 7h13M3 12h15M3 17h13"/><path d="M13 4.5L16 7l-3 2.5M15 9.5l3 2.5-3 2.5M13 14.5l3 2.5-3 2.5"/>',storm:'<path d="M4 20L20 4M4 20l7-16M4 20l16-7M4 20l3-10M4 20l10-3"/><path d="M17 3.5L20 4l.5 3"/>',pierce:'<path d="M2.5 12h16"/><path d="M15 8l4.5 4-4.5 4"/><path d="M8 6.5v3M8 14.5v3M12 6.5v3M12 14.5v3"/>',arrows:'<path d="M6 3v9M12 5v11M18 3v9"/><path d="M4 10l2 2.5L8 10M10 14l2 2.5 2-2.5M16 10l2 2.5 2-2.5"/><path d="M3 21h18"/>',backstep:'<path d="M21 12H9"/><path d="M13 7l-5 5 5 5"/><path d="M3.5 17.5l2 2 2-2-2-2zM3.5 6.5l2 2 2-2-2-2z"/>',snipe:'<circle cx="12" cy="12" r="7"/><path d="M12 2.5v5M12 16.5v5M2.5 12h5M16.5 12h5"/><circle cx="12" cy="12" r="1.2"/>',sword:'<path d="M14.5 17.5L4 7V4h3l10.5 10.5"/><path d="M13 19l6-6"/><path d="M16 16l4 4"/><path d="M19 21l2-2"/>',axe:'<path d="M4 20L14.5 9.5"/><path d="M12.5 7.5c1.8-2.8 4.6-4.2 7.5-4 .2 2.9-1.2 5.7-4 7.5z"/><path d="M12.5 7.5l4 4"/>',staff:'<path d="M5 21L15.5 8.5"/><circle cx="17.5" cy="6" r="2.8"/><path d="M21.5 2.5l-1 1M13 2.5l.8.8M21.5 10l-.9-.5"/>',dagger:'<path d="M4 20l3.5-3.5"/><path d="M6 14.5L9.5 18"/><path d="M8 16l9-9 3.5-3.5-1 4.5-9 9"/>',helm:'<path d="M4.5 15v-3.5a7.5 7.5 0 0 1 15 0V15"/><path d="M4.5 15h15v4.5h-5l-1-2.5h-3l-1 2.5h-5z"/><path d="M12 4v6"/>',armor:'<path d="M8.5 3L4 6v6l3 1v8h10v-8l3-1V6l-4.5-3c-.8 1.8-2 2.8-3.5 2.8S9.3 4.8 8.5 3z"/><path d="M12 5.8V21M7 13h10"/>',trinket:'<path d="M6.5 3c.3 4.6 2.2 7.5 5.5 8.6 3.3-1.1 5.2-4 5.5-8.6"/><path d="M12 11.6l-3.2 4.2L12 21l3.2-5.2z"/>',frost:'<path d="M12 2v20M3.5 7l17 10M20.5 7l-17 10"/><path d="M9 4l3 3 3-3M9 20l3-3 3 3"/>',meteor:'<circle cx="15" cy="15" r="5"/><path d="M3 3l7.5 7.5M6 2l6 6M2 6l6 6"/>',shadowStab:'<path d="M3 21l10-10"/><path d="M13 11l7-7 1 1-7 7z"/><path d="M4 14h4M2 18h3"/>',blades:'<path d="M4 4l7 7M20 4l-7 7M4 20l7-7M20 20l-7-7"/><circle cx="12" cy="12" r="2"/>',smoke:'<path d="M6 18a4 4 0 0 1 0-8 5 5 0 0 1 9.5-1.5A4 4 0 1 1 18 18z"/><path d="M8 21h8"/>',execute:'<path d="M5 5l14 14M19 5L5 19"/><circle cx="12" cy="12" r="9"/>',dodge:'<path d="M4 18c4 0 5-12 12-12"/><path d="M13 3l3 3-3 3"/><path d="M3 21h6"/>',potion:'<path d="M9 3h6M10 3v5L6 15a4 4 0 0 0 3.5 6h5A4 4 0 0 0 18 15l-4-7V3"/><path d="M7 15h10"/>'},MM={kn_q:"shieldDash",kn_w:"judgement",kn_e:"oath",kn_r:"smite",bb_q:"leap",bb_w:"whirl",bb_e:"shout",bb_r:"rage",kn_taunt:"taunt",kn_holy:"holy",mg_q:"flame",mg_w:"frost",mg_chain:"chain",mg_r:"meteor",mg_holy:"holyburst",mg_spring:"spring",mg_orb:"orb",mg_miracle:"miracle",bb_roar:"roar",bb_iron:"iron",bb_quake:"quake",rg_fan:"fan",rg_venom:"venom",ar_q:"pierce",ar_w:"arrows",ar_e:"backstep",ar_r:"snipe",ab_q:"volley",ab_r:"storm",rg_q:"shadowStab",rg_w:"blades",rg_e:"smoke",rg_r:"execute",dodge:"dodge",potion:"potion"};function dn(i,e="currentColor"){return`<svg viewBox="0 0 24 24" fill="none" stroke="${e}" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${yM[MM[i]||i]||""}</svg>`}var yr={knight:"oath",barbarian:"rage",mage:"staff",rogue:"shadowStab",archer:"crossbow"},SM={knight:"sword",barbarian:"axe",mage:"staff",rogue:"dagger",archer:"crossbow"},Vh=(i,e,t)=>i!=="weapon"?i:t==="ranger"?"bow":SM[e];zt();var Bt=i=>String(i).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Be=(i,e=document)=>e.querySelector(i),Gh=class{constructor(e,{profile:t,engine:n,audio:s,onGear:r,onMenu:a}){this.profile=t,this.engine=n,this.audio=s,this.onGear=r,this.onMenu=a,this.cache={},this.root=document.createElement("div"),this.root.id="hud",this.root.className="hidden",this.root.innerHTML=`
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
        <div class="hp-wrap"><div class="hpbar"><i class="sh"></i><i class="hp"></i><b></b></div></div>
        <div class="skills"></div>
        <div class="xp"><i></i><span></span></div>
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
        <button class="hbtn" data-hud="inv" title="\uC7A5\uBE44 (Tab)">${dn("armor")}<kbd>Tab</kbd></button>
        <button class="hbtn" data-hud="menu" title="\uBA54\uB274 (Esc)">${dn("menu")}<kbd>Esc</kbd></button>
      </div>
      <div class="inventory hidden"></div>`,e.appendChild(this.root),this.dmgLayer=Be(".dmg-layer",this.root),this.plates=Be(".plates",this.root),this.plateMap=new Map,this.nums=[],this.mini=Be(".minimap",this.root).getContext("2d"),this.v3=new P,this.buildSkills(),Be(".inventory",this.root).addEventListener("click",o=>this.onInvClick(o)),Be(".inventory",this.root).addEventListener("change",o=>{o.target.dataset.auto!==void 0&&this.setAutoEquip(o.target.checked)}),Be(".h-menu",this.root).addEventListener("click",o=>{let c=o.target.closest("[data-hud]");c&&(c.blur(),c.dataset.hud==="inv"?this.toggleInventory():this.onMenu?.())})}setAutoEquip(e){this.profile.settings.autoEquip=e,e&&Cf(this.profile)&&(this.audio.play("equip",{}),this.onGear?.()),Wt(this.profile),this.renderInventory()}show(e){this.root.classList.toggle("hidden",!e),e&&(this.cache={},this.buildSkills())}set(e,t,n){this.cache[e]!==t&&(this.cache[e]=t,n(t))}buildSkills(){let e=ut(this.profile),t=$e[e.cls],n=Ct(e.cls,e.spec).skills,s=[...["q","w","e","r"].map(r=>({k:r,id:n[r],label:r.toUpperCase()})),{k:"dodge",id:"dodge",label:"SPC"},{k:"potion",id:"potion",label:"F"}];Be(".skills",this.root).innerHTML=s.map(r=>{let a=Ot[r.id],o=a?.name?`<div class="tip"><b>${a.name}</b><span>${a.desc}</span><em>\uC7AC\uC0AC\uC6A9 ${a.cd}\uCD08</em></div>`:r.k==="dodge"?'<div class="tip"><b>\uD68C\uD53C</b><span>\uC9E7\uC740 \uBB34\uC801 \uAD6C\uB974\uAE30</span></div>':'<div class="tip"><b>\uD68C\uBCF5 \uBB3C\uC57D</b><span>\uCD5C\uB300 \uC0DD\uBA85\uB825 35% \uD68C\uBCF5</span></div>';return`<div class="slot ${r.k==="r"?"ult":""} ${r.k==="dodge"||r.k==="potion"?"util":""}" data-k="${r.k}" style="--c:${t.trail}">${dn(r.id)}<div class="cd"></div><span class="cdt"></span><kbd>${r.label}</kbd>${r.k==="potion"?'<span class="charges"></span>':""}${o}</div>`}).join("")}flashSlot(e){let t=Be(`.slot[data-k="${e}"]`,this.root);t&&(t.classList.remove("deny"),t.offsetWidth,t.classList.add("deny"))}announce(e,t="#fff",n=2,s=!1,r=""){let a=Be(".announce",this.root);Be(".a-title",a).textContent=e,Be(".a-title",a).style.color=t,Be(".a-sub",a).textContent=r,a.classList.toggle("big",s),a.classList.remove("show"),a.offsetWidth,a.classList.add("show"),clearTimeout(this.annT),this.annT=setTimeout(()=>a.classList.remove("show"),n*1e3)}chapterIntro(e){this.card(`\uC81C${e}\uC7A5`,Zt[e].name,Zt[e].intro,"",5200)}chapterClear(e,t,n,s){let r=t?`\uC81C${t}\uC7A5 \xB7 ${Zt[t].name}`:"\uC5EC\uC815\uC758 \uB05D",a=`${n?`\uC81C${n}\uC7A5\uC774 \uC5F4\uB838\uC2B5\uB2C8\uB2E4. `:""}\uBCF4\uC2A4\uAC00 \uC788\uB358 \uC790\uB9AC\uC5D0 ${r}(\uC73C)\uB85C \uAC00\uB294 \uD3EC\uD0C8\uC774 \uC5F4\uB838\uC2B5\uB2C8\uB2E4. ${s?"\uD3EC\uD0C8\uC5D0 \uB4E4\uC5B4\uAC00\uC138\uC694.":"\uC6D4\uB4DC \uC8FC\uC778\uC774 \uD3EC\uD0C8\uC5D0 \uB4E4\uC5B4\uAC00\uBA74 \uBAA8\uB450 \uC900\uBE44\uB97C \uB204\uB974\uC138\uC694."}`;this.card(`\uC81C${e}\uC7A5 \uC644\uB8CC`,Zt[e].name,Zt[e].outro,a,9e3)}card(e,t,n,s,r){let a=Be(".chapter-card",this.root);Be(".cc-num",a).textContent=e,Be(".cc-name",a).textContent=t,Be(".cc-text",a).textContent=n,Be(".cc-hint",a).textContent=s,a.classList.remove("show"),a.offsetWidth,a.classList.add("show"),clearTimeout(this.ccT),this.ccT=setTimeout(()=>a.classList.remove("show"),r)}cinema(e){this.root.classList.toggle("cine",e)}portalPrompt(e,{host:t,localId:n,onReady:s}){let r=Be(".portal-prompt",this.root),a=e.s==="wait"&&e.need.length>0;if(r.classList.toggle("hidden",!a),!a)return;let o=e.next?`\uC81C${e.next}\uC7A5 \xB7 ${Zt[e.next].name}`:"\uC5EC\uC815\uC758 \uB05D",c=`${e.ready.length} / ${e.need.length}`;t?r.innerHTML=`<b>${o}</b><span>\uD30C\uD2F0\uC6D0 \uC900\uBE44 ${c} \xB7 \uBAA8\uB450 \uC900\uBE44\uB418\uBA74 \uCD9C\uBC1C\uD569\uB2C8\uB2E4</span>`:e.ready.includes(n)?r.innerHTML=`<b>${o}</b><span>\uC900\uBE44 \uC644\uB8CC \xB7 \uB2E4\uB978 \uD30C\uD2F0\uC6D0\uC744 \uAE30\uB2E4\uB9AC\uB294 \uC911 (${c})</span>`:(r.innerHTML=`<b>${o}</b><span>\uC6D4\uB4DC \uC8FC\uC778\uC774 \uD3EC\uD0C8\uC5D0 \uB4E4\uC5B4\uAC14\uC2B5\uB2C8\uB2E4 (${c})</span><button class="btn primary small" data-ready>\uC900\uBE44</button>`,r.querySelector("[data-ready]").onclick=l=>{l.currentTarget.disabled=!0,s()})}bossIntro(e,t){let n=Be(".boss-intro",this.root);Be(".bi-title",n).textContent=t,Be(".bi-name",n).textContent=e,n.classList.remove("show"),n.offsetWidth,n.classList.add("show"),setTimeout(()=>n.classList.remove("show"),3400)}damage(e,t,n,s,r={}){if(!this.profile.settings.numbers&&!r.taken)return;let a=document.createElement("div");a.className="dmg"+(r.crit?" crit":"")+(r.back?" back":"")+(r.taken?" taken":"")+(r.heal?" heal":"")+(r.blocked?" blocked":"")+(r.mine===!1?" other":""),a.innerHTML=r.text?`<span>${r.text}</span>`:`${r.back?"<small>\uBC31\uC5B4\uD0DD</small>":""}<span>${r.heal?"+":""}${s.toLocaleString()}</span>`,r.color&&(a.style.color=r.color),this.dmgLayer.appendChild(a),this.nums.push({el:a,x:e+(Math.random()-.5)*.8,y:t,z:n,t:0,life:r.crit?1.1:.85}),this.nums.length>60&&this.nums.shift().el.remove()}lootFeed(e,t,n=!1){let s=wn[e.rarity],r=document.createElement("div");r.className="loot r-"+e.rarity;let a=ut(this.profile);r.innerHTML=t?`<i class="lg" style="color:${s.color}">${dn(Vh(e.slot,a.cls,a.spec))}</i><span class="lr" style="color:${s.color}">${s.name}</span> ${Bt(e.name)} <em>${Xn[e.slot].name}${n?" \xB7 \uC790\uB3D9 \uC7A5\uCC29":""}</em>`:'<span style="color:#ff8a7a">\uAC00\uBC29\uC774 \uAC00\uB4DD \uCC28 \uD68D\uB4DD\uD558\uC9C0 \uBABB\uD568</span>';let o=Be(".loot-feed",this.root);for(o.prepend(r);o.children.length>6;)o.lastChild.remove();setTimeout(()=>r.classList.add("out"),5e3),setTimeout(()=>r.remove(),5600),s.tier>=3&&this.announce(`${s.name} \uC7A5\uBE44 \uD68D\uB4DD!`,s.color,1.8,!1,e.name)}statGain(e,t,n){let s=ut(this.profile),r=[],a=(u,d,f)=>{Math.abs(d)>1e-4&&r.push(`<li class="${d>0?"up":"down"}">${u} <b>${d>0?"+":""}${f(d)}</b></li>`)},o=u=>Math.round(u).toLocaleString(),c=u=>`${(u*100).toFixed(1)}%`;for(let u of Ph)a(ns[u],t[u]-e[u],o);if(a(dr(s.cls),t.atk-e.atk,o),a("\uC0DD\uBA85\uB825",t.hp-e.hp,o),a("\uBC29\uC5B4\uB825",t.def-e.def,o),a("\uCE58\uBA85\uD0C0 \uD655\uB960",t.crit-e.crit,c),a("\uCE58\uBA85\uD0C0 \uD53C\uD574",t.critDmg-e.critDmg,c),a("\uC2E0\uC18D",ki(t)-ki(e),c),!r.length)return;let l=document.createElement("div");l.className="gain",l.innerHTML=`<h5>${n}</h5><ul>${r.join("")}</ul>`;let h=Be(".gain-feed",this.root);for(h.prepend(l);h.children.length>3;)h.lastChild.remove();setTimeout(()=>l.classList.add("out"),3800),setTimeout(()=>l.remove(),4400)}update(e,t,n,s){let r=e.players.find(f=>f.id===t.localId),a=t.me(),o=e.rooms.findIndex(f=>f==="active"),c=e.rooms.findIndex(f=>f==="idle"),l=o>=0?xt[o].name:c>=0?`\uB2E4\uC74C: ${xt[c].name}`:"";this.set("room",e.boss&&!e.boss.dead?"":l,f=>{Be(".room-title",this.root).textContent=f}),this.set("diff",e.chapter||1,f=>{Be(".diff-tag",this.root).innerHTML=`\uC81C<b>${f}</b>\uC7A5 \xB7 ${Zt[f].name}`});let h=e.boss;if(this.set("bossOn",!!(h&&!h.dead),f=>Be(".boss",this.root).classList.toggle("hidden",!f)),h&&!h.dead){this.set("bossName",`${h.kind}:${h.enraged}`,()=>{let b=st[h.kind];Be(".bn",this.root).textContent=b.name,Be(".bt",this.root).textContent=h.enraged?"\uACA9\uB178":b.title,Be(".boss",this.root).classList.toggle("enraged",h.enraged)});let f=h.hp/h.maxHp;this.set("bossHp",`${h.id}:${Math.round(f*1e3)}`,()=>{let b=Math.round(f*1e3);Be(".boss-bar .hp",this.root).style.width=b/10+"%",Be(".bhp",this.root).textContent=`${h.hp.toLocaleString()} / ${h.maxHp.toLocaleString()}`,clearTimeout(this.lagT),this.lagT=setTimeout(()=>{let g=Be(".boss-bar .lag",this.root);g&&(g.style.width=b/10+"%")},450)});let m=h.gaugeMax>0;this.set("judge",m,b=>Be(".judge",this.root).classList.toggle("hidden",!b)),m&&(this.set("jg",Math.round(h.gauge/h.gaugeMax*200),b=>{Be(".jbar i",this.root).style.width=b/2+"%"}),this.set("jt",Math.ceil(h.judgeT),b=>{Be(".jt",this.root).textContent=`${b}\uCD08`}))}let u=e.players.map(f=>`${f.id}:${f.alive}:${Math.round(f.hp/f.maxHp*50)}:${Math.round((f.shield||0)/f.maxHp*50)}:${Math.round((f.revive||0)*4)}`).join("|");if(this.set("party",u,()=>{Be(".party",this.root).innerHTML=e.players.map(f=>{let m=$e[f.cls],b=Math.max(0,f.hp/f.maxHp)*100,g=Math.min(100,(f.shield||0)/f.maxHp*100);return`<div class="pf ${f.alive?"":"down"} ${f.id===t.localId?"me":""}"><div class="pic" style="--c:${m.trail}">${dn(yr[f.cls])}</div><div class="pinfo"><div class="pn">${Bt(f.name)} <em>Lv${f.level} ${Ct(f.cls,f.spec).name}</em></div><div class="pbar"><i class="hp" style="width:${b}%"></i><i class="sh" style="width:${g}%"></i></div>${f.alive?"":`<div class="rv">\uBD80\uD65C ${Math.round(f.revive/4*100)}%</div>`}</div></div>`}).join("")}),r&&this.set("hp",`${r.hp}/${r.maxHp}/${Math.round(r.shield||0)}`,()=>{Be(".hpbar .hp",this.root).style.width=Math.max(0,r.hp/r.maxHp*100)+"%",Be(".hpbar .sh",this.root).style.width=Math.min(100,(r.hp+(r.shield||0))/r.maxHp*100)+"%",Be(".hpbar b",this.root).textContent=`${r.hp.toLocaleString()} / ${r.maxHp.toLocaleString()}${r.shield>0?` (+${Math.round(r.shield)})`:""}`,Be(".hpbar",this.root).classList.toggle("low",r.hp/r.maxHp<.3)}),a){let f=ut(this.profile),m=Ct(f.cls,f.spec).skills;for(let b of["q","w","e","r","dodge","potion"]){let g=a.cds[b]||0,p=b==="dodge"?Dh:b==="potion"?Nh:Ot[m[b]].cd*(fr(f.cls,f.spec)==="cdr"?1-ki(a.st):1),v=Math.min(1,g/p);this.set("cd"+b,Math.round(v*60)+":"+Math.ceil(g),()=>{let _=Be(`.slot[data-k="${b}"]`,this.root);_&&(_.querySelector(".cd").style.background=v>0?`conic-gradient(rgba(5,5,10,.78) ${v*360}deg, transparent 0)`:"none",_.querySelector(".cdt").textContent=g>.05?g<1?g.toFixed(1):Math.ceil(g):"",_.classList.toggle("ready",g<=.05),g<=.05&&this.cache["was"+b]>.05&&(_.classList.remove("pop"),_.offsetWidth,_.classList.add("pop")),this.cache["was"+b]=g)})}this.set("pots",a.potions,b=>{let g=Be('.slot[data-k="potion"] .charges',this.root);g&&(g.textContent=b),Be('.slot[data-k="potion"]',this.root)?.classList.toggle("empty",b<=0)})}let d=ut(this.profile);this.set("xp",`${d.level}:${d.xp}`,()=>{Be(".xp i",this.root).style.width=Math.min(100,d.xp/as(d.level)*100)+"%",Be(".xp span",this.root).textContent=`Lv ${d.level}  \xB7  ${d.xp.toLocaleString()} / ${as(d.level).toLocaleString()}`}),this.updateNumbers(1/60),this.updatePlates(e,n,t),Math.floor(s*10)!==this.miniTick&&(this.miniTick=Math.floor(s*10),this.drawMinimap(e,t))}updateNumbers(e){let t=this.engine;for(let n=this.nums.length-1;n>=0;n--){let s=this.nums[n];if(s.t+=e,s.t>s.life){s.el.remove(),this.nums.splice(n,1);continue}this.v3.set(s.x,s.y+s.t*1.6,s.z);let r=t.toScreen(this.v3),a=s.t/s.life,o=s.t<.08?1+(.08-s.t)*8:1;s.el.style.transform=`translate(${r.x}px, ${r.y}px) translate(-50%, -50%) scale(${o})`,s.el.style.opacity=a>.7?(1-a)/.3:1}}updatePlates(e,t,n){let s=new Set,r=(a,o,c,l)=>{s.add(a);let h=this.plateMap.get(a);h||(h=document.createElement("div"),this.plates.appendChild(h),this.plateMap.set(a,h)),h._html!==c&&(h.innerHTML=c,h._html=c),h.className="plate "+l;let u=this.engine.toScreen(o);h.style.transform=`translate(${u.x}px, ${u.y}px) translate(-50%, -100%)`};for(let a of e.enemies){if(a.dead||st[a.kind].boss||a.act==="spawn"||!a.elite&&a.hp>=a.maxHp)continue;let o=t.eActors.get(a.id);if(!o)continue;this.v3.copy(o.headPos),this.v3.y+=.9*(a.elite?1.3:1);let c=Math.round(a.hp/a.maxHp*100);r("e"+a.id,this.v3,`${a.elite?`<div class="en">\uC815\uC608 ${st[a.kind].name}</div>`:""}<div class="eb"><i style="width:${c}%"></i></div>`,a.elite?"elite":"")}for(let a of e.players){if(a.id===n.localId)continue;let o=t.pActors.get(a.id);if(!o)continue;this.v3.copy(o.headPos),this.v3.y+=.8;let c=Math.round(a.hp/a.maxHp*100);r("p"+a.id,this.v3,`<div class="an">${Bt(a.name)}</div><div class="ab"><i style="width:${c}%"></i></div>`,"ally")}for(let[a,o]of this.plateMap)s.has(a)||(o.remove(),this.plateMap.delete(a))}drawMinimap(e,t){let n=this.mini,s=200,r=e.players.find(c=>c.id===t.localId);if(!r)return;let a=2.2;n.clearRect(0,0,s,s),n.save(),n.beginPath(),n.arc(s/2,s/2,s/2-2,0,Math.PI*2),n.clip(),n.fillStyle="rgba(8,8,14,0.78)",n.fillRect(0,0,s,s),n.translate(s/2-r.x*a,s/2-r.z*a);let o=4*a;for(let c=0;c<Lo;c++)for(let l=0;l<es;l++){let h=Do[c][l];if(h===" ")continue;let u=xt.findIndex(f=>l>=f.x0&&l<=f.x1&&c>=f.z0&&c<=f.z1),d=u>=0?e.rooms[u]:"c";n.fillStyle=h===","?"#3a3528":d==="active"?"#5a2a26":d==="cleared"?"#4a4652":"#2c2a33",n.fillRect((l-.5)*o,(c-.5)*o,o+.5,o+.5)}for(let c of e.enemies)c.dead||(n.fillStyle=st[c.kind].boss?"#ff3050":c.elite?"#ff9a3c":"#e04a3a",n.beginPath(),n.arc(c.x*a,c.z*a,st[c.kind].boss?5:2.3,0,Math.PI*2),n.fill());for(let c of e.players)n.fillStyle=c.id===t.localId?"#ffe7a0":"#8fd0ff",n.beginPath(),n.arc(c.x*a,c.z*a,3.4,0,Math.PI*2),n.fill();n.restore(),n.strokeStyle="rgba(255,220,170,0.35)",n.lineWidth=2,n.beginPath(),n.arc(s/2,s/2,s/2-2,0,Math.PI*2),n.stroke()}toggleInventory(e){let t=Be(".inventory",this.root),n=e??t.classList.contains("hidden");if(t.classList.toggle("hidden",!n),n&&this.profile.settings.autoEquip){let s=Ps(ut(this.profile));Cf(this.profile)&&(Wt(this.profile),this.onGear?.(),this.statGain(s,Ps(ut(this.profile)),"\uC790\uB3D9 \uC7A5\uCC29"))}n&&this.renderInventory(),this.audio.play("ui",{})}renderInventory(){let e=ut(this.profile),t=(n,s)=>{if(!n)return`<div class="islot empty">${s?`${dn(Vh(s,e.cls,e.spec))}<span>${Xn[s].name}</span>`:""}</div>`;let r=wn[n.rarity];return`<div class="islot r-${n.rarity}" data-id="${n.id}" ${s?`data-slot="${s}"`:""} style="--rc:${r.color}"><div class="ig">${dn(Vh(n.slot,e.cls,e.spec),r.color)}</div><div class="il">${n.ilvl}</div>${this.tooltip(n,e)}</div>`};Be(".inventory",this.root).innerHTML=`
      <div class="inv-head"><h3>${Bt(this.profile.character.name)} <em>Lv ${e.level} ${Ct(e.cls,e.spec).name}</em></h3><label class="switch" title="\uC0C8 \uC7A5\uBE44\uAC00 \uB354 \uAC15\uD558\uBA74 \uBC14\uB85C \uC7A5\uCC29"><input type="checkbox" data-auto ${this.profile.settings.autoEquip?"checked":""}><i></i>\uCD5C\uAC15 \uC7A5\uBE44 \uC790\uB3D9 \uC7A5\uCC29</label><div class="gs">\uC804\uD22C\uB825 <b>${Li(e)}</b></div><button class="x" data-act="close">\u2715</button></div>
      <div class="inv-body">
        <div class="equip">${ya.map(n=>`<div class="eq"><label>${Xn[n].name}</label>${t(e.equipped[n],n)}</div>`).join("")}</div>
        <div class="bag">${Array.from({length:Ma},(n,s)=>t(e.bag[s])).join("")}</div>
      </div>
      ${this.statSheet(e)}
      <p class="inv-hint">\uAC00\uBC29 \uC544\uC774\uD15C \uD074\uB9AD: \uC7A5\uCC29 \xB7 \uC7A5\uCC29 \uC544\uC774\uD15C \uD074\uB9AD: \uD574\uC81C \xB7 Shift+\uD074\uB9AD: \uBC84\uB9AC\uAE30</p>`}statSheet(e){let t=Ps(e),n={[t.main]:`${dr(e.cls)} +${Ih}`,vit:`\uC0DD\uBA85\uB825 +${kh}`,str:`\uBC29\uC5B4\uB825 +${bf}`,dex:`\uCE58\uBA85\uD0C0 +${(xf*100).toFixed(1)}%`},s=a=>`${(a*100).toFixed(1)}%`,r=[[dr(e.cls),Math.round(t.atk)],["\uC0DD\uBA85\uB825",Math.round(t.hp).toLocaleString()],["\uBC29\uC5B4\uB825",Math.round(t.def)],["\uCE58\uBA85\uD0C0 \uD655\uB960",s(t.crit)],["\uCE58\uBA85\uD0C0 \uD53C\uD574",`${Math.round(t.critDmg*100)}%`],[`\uC2E0\uC18D \xB7 ${Lh[fr(e.cls,e.spec)]}`,s(ki(t))]];return`<div class="sheet">
      <div class="attrs">${Ph.map(a=>`<div class="at ${a===t.main?"main":""}" title="1\uB2F9 ${n[a]}"><span>${ns[a]}${a===t.main?"<i>\uC8FC\uC2A4\uD0EF</i>":""}</span><b>${t[a]}</b><em>1\uB2F9 ${n[a]}</em></div>`).join("")}</div>
      <div class="derived">${r.map(([a,o])=>`<div><span>${a}</span><b>${o}</b></div>`).join("")}</div>
    </div>`}tooltip(e,t){let n=wn[e.rarity],r=t.equipped[e.slot]?.id===e.id?null:Li(t,e)-Li(t),a=$e[t.cls].main,o=(c,l)=>c===a?` <em>(${dr(t.cls)} +${Math.round(l)*Ih})</em>`:c==="vit"?` <em>(\uC0DD\uBA85\uB825 +${Math.round(l)*kh})</em>`:"";return`<div class="itip" style="--rc:${n.color}"><b style="color:${n.color}">${Bt(e.name)}</b><div class="im">${n.name} ${Xn[e.slot].name} \xB7 \uC544\uC774\uD15C \uB808\uBCA8 ${e.ilvl}</div><ul>${Object.entries(e.stats).map(([c,l])=>`<li>${w0(c,l,t.cls)}${o(c,l)}</li>`).join("")}</ul>${r!==null?`<div class="cmp ${r>=0?"up":"down"}">\uC7A5\uCC29\uD558\uBA74 \uC804\uD22C\uB825 ${r>=0?"+":""}${r}</div>`:""}</div>`}onInvClick(e){if(e.target.closest('[data-act="close"]'))return this.toggleInventory(!1);let t=e.target.closest(".islot[data-id]");if(!t)return;let n=this.profile;e.shiftKey&&!t.dataset.slot?N0(n,t.dataset.id):t.dataset.slot?D0(n,t.dataset.slot):$o(n,t.dataset.id),Wt(n),this.audio.play("equip",{}),this.onGear?.(),this.renderInventory()}};zt();pi();var TM=5,Wh=class{constructor({onSend:e}){this.onSend=e,this.mode=null,this.el=document.createElement("div"),this.el.className="chat hidden",this.el.innerHTML='<div class="chat-log"></div><form class="chat-form"><input class="chat-in" maxlength="100" placeholder="Enter \uD0A4\uB85C \uB300\uD654" autocomplete="off" spellcheck="false" /></form>',this.log=this.el.querySelector(".chat-log"),this.inp=this.el.querySelector(".chat-in"),this.over=document.createElement("div"),this.over.className="overhead",document.body.appendChild(this.over),this.bubbles=new Map,this.tags=new Map,this.v3=new P,this.el.querySelector("form").addEventListener("submit",t=>{t.preventDefault();let n=this.inp.value.trim();this.inp.value="",n&&this.onSend(n),this.mode==="play"&&this.inp.blur()}),this.inp.addEventListener("keydown",t=>{t.code==="Escape"&&(this.inp.blur(),t.stopPropagation())}),this.inp.addEventListener("focus",()=>this.el.classList.add("open")),this.inp.addEventListener("blur",()=>this.el.classList.remove("open")),addEventListener("keydown",t=>{t.code!=="Enter"||!this.mode||t.target instanceof HTMLInputElement||(t.preventDefault(),this.inp.focus())})}mount(e,t){this.mode=t,e.appendChild(this.el),this.el.className=`chat ${t}`,this.log.scrollTop=this.log.scrollHeight}close(){this.mode=null,this.inp.blur(),this.el.remove(),this.log.innerHTML="";for(let e of this.bubbles.values())e.el.remove();this.bubbles.clear();for(let e of this.tags.values())e.remove();this.tags.clear()}add(e,t){let n=document.createElement("div");for(n.className="cl"+(e.sys?" sys":"")+(e.id===t?" me":""),e.sys?n.textContent=e.text:n.innerHTML=`<b style="--c:${$e[e.cls]?.trail||"#e3b866"}">${Bt(e.name)}</b><span>${Bt(e.text)}</span>`,this.log.appendChild(n);this.log.children.length>80;)this.log.firstChild.remove();this.log.scrollTop=this.log.scrollHeight,e.sys||this.bubble(e.id,e.text)}bubble(e,t){let n=this.bubbles.get(e);n||(n={el:document.createElement("div")},n.el.className="bubble",this.over.appendChild(n.el),this.bubbles.set(e,n)),n.el.textContent=t,n.t=TM}place(e,t,n,s){this.v3.copy(t.headPos),this.v3.y+=n;let r=s.toScreen(this.v3);e.style.transform=`translate(${r.x}px, ${r.y}px) translate(-50%, -100%)`}tagNames(e,t){let n=new Set;for(let s of e){n.add(s.id);let r=this.tags.get(s.id);r||(r=document.createElement("div"),r.className="tagname",r.style.setProperty("--c",$e[s.cls]?.trail||"#e3b866"),this.over.appendChild(r),this.tags.set(s.id,r)),r.textContent!==s.name&&(r.textContent=s.name),r.classList.toggle("me",!!s.me),this.place(r,s.actor,1.05,t)}for(let[s,r]of this.tags)n.has(s)||(r.remove(),this.tags.delete(s))}update(e,t,n,s,r){if(!this.mode)return;let a=this.mode==="lobby";if(a){let o=[];for(let c of t){let l=n.get(c.id);l&&o.push({id:c.id,name:c.name,cls:c.cls,actor:l,me:c.id===r})}this.tagNames(o,s)}for(let[o,c]of this.bubbles){c.t-=e;let l=n.get(o);if(c.t<=0||!l){c.el.remove(),this.bubbles.delete(o);continue}this.place(c.el,l,a?1.75:1.5,s),c.el.style.opacity=c.t<.4?c.t/.4:1}}};zt();Fh();pi();ss();var qh=(i,e)=>i+Math.random()*(e-i);function z0(i,e){let{vfx:t,engine:n,audio:s,hud:r}=i,a=i.session.localId,o=i.listener(),c=(l,h)=>({x:l,z:h,L:o});switch(e.k){case"act":{let l=i.pActors.get(e.id),h=Ot[e.a];if(e.a==="dodge"){s.play("dodge",c(l?.root.position.x??0,l?.root.position.z??0));break}if(e.a==="potion"){s.play("potion",{});break}h?.name&&s.play("skill",c(l?.root.position.x??0,l?.root.position.z??0)),(e.a==="kn_e"||e.a==="bb_e"||e.a==="kn_taunt")&&s.play("shout",{}),(e.a==="mg_r"||e.a==="kn_r"||e.a==="mg_miracle")&&s.play("charge",{});break}case"swing":{let l=e.team==="player"?wM(i,e.id):"#ff5a3a",h=1.1;switch(e.fx){case"slash":t.arc(e.x,h,e.z,e.dir,3.1,2.3,l,{reverse:Math.random()<.5}),s.play("swing",c(e.x,e.z));break;case"smash":t.arc(e.x,h+.2,e.z,e.dir,3.4,1.6,l,{tilt:1.2,life:.3}),t.spark(e.x+Math.cos(e.dir)*2.4,.2,e.z+Math.sin(e.dir)*2.4,{n:14,color:"#d8c7a8",speed:5,normal:!0,bright:1,size:.25}),s.play("swingHeavy",c(e.x,e.z));break;case"thrust":t.arc(e.x,h,e.z,e.dir,4,.35,l,{life:.22}),s.play("swing",c(e.x,e.z));break;case"snipe":{t.arc(e.x,1.2,e.z,e.dir,20,.12,"#d8ffb0",{life:.35});for(let u=1;u<20;u+=1.2)t.spark(e.x+Math.cos(e.dir)*u,1.2,e.z+Math.sin(e.dir)*u,{n:2,color:"#e8ffc8",speed:2,size:.14,grav:0,life:.35});t.flash(e.x+Math.cos(e.dir)*1.5,1.3,e.z+Math.sin(e.dir)*1.5,"#d8ffb0",50,10),n.addShake(.35),s.play("bow",c(e.x,e.z)),s.play("impactHeavy",c(e.x,e.z));break}case"bash":t.spark(e.x,1,e.z,{n:3,color:"#fff2c0",speed:4,size:.18});break;case"holy":{t.arc(e.x,1.1,e.z,e.dir,8.5,.32,"#ffe27a",{life:.32});for(let u=1;u<8.5;u+=.9)t.spark(e.x+Math.cos(e.dir)*u,1,e.z+Math.sin(e.dir)*u,{n:3,color:"#fff0b0",speed:3,up:2,size:.18,grav:0,life:.45});t.flash(e.x+Math.cos(e.dir)*3,1.3,e.z+Math.sin(e.dir)*3,"#ffe08a",40,10),n.addShake(.2),s.play("swingHeavy",c(e.x,e.z));break}case"judgement":{t.arc(e.x,.3,e.z,e.dir,4.6,1.9,"#ffd66e",{life:.45});let u=e.x+Math.cos(e.dir)*2.6,d=e.z+Math.sin(e.dir)*2.6;t.ring(u,d,4,"#ffcf6a",.45),t.flash(u,1.5,d,"#ffd27a",40,12),t.spark(u,.2,d,{n:30,color:"#ffe3a0",speed:9,size:.2}),n.addShake(.35),s.play("impactHeavy",c(e.x,e.z));break}case"quake":case"rage":{let u=e.fx==="rage"?"#ff4a2a":"#ffae5c";t.ring(e.x,e.z,e.fx==="rage"?6.5:4,u,.5,.4),t.ring(e.x,e.z,e.fx==="rage"?8:5,"#fff0d0",.35),t.smoke(e.x,.3,e.z,{n:14,speed:5,size:1.6,jitter:1}),t.spark(e.x,.3,e.z,{n:36,color:u,speed:11,size:.22}),t.flash(e.x,1.2,e.z,u,50,14),n.addShake(e.fx==="rage"?.8:.5),s.play("impactHeavy",c(e.x,e.z));break}case"spin":t.arc(e.x,1,e.z,Math.random()*6.28,3.2,6.1,l,{life:.24}),s.play("swing",c(e.x,e.z));break;case"blades":t.arc(e.x,1+qh(-.3,.3),e.z,Math.random()*6.28,3.3,3.5,"#c9a0ff",{life:.2,tilt:qh(-.4,.4)}),s.play("swing",c(e.x,e.z));break;case"shadow":t.spark(e.x,1,e.z,{n:3,color:"#a070ff",speed:1,size:.5,life:.4,grav:0});break;case"execute":{t.arc(e.x,1.2,e.z,e.dir+.5,3.4,.9,"#ff3050",{life:.35}),t.arc(e.x,1.2,e.z,e.dir-.5,3.4,.9,"#ff3050",{life:.35,reverse:!0}),t.flash(e.x,1.2,e.z,"#ff2040",30,8),n.addShake(.3),s.play("impactHeavy",c(e.x,e.z));break}case"doom":{t.arc(e.x,1.2,e.z,e.dir,12,.4,"#b050ff",{life:.4}),t.flash(e.x+Math.cos(e.dir)*4,2,e.z+Math.sin(e.dir)*4,"#a040ff",80,18,.3),t.spark(e.x+Math.cos(e.dir)*4,.4,e.z+Math.sin(e.dir)*4,{n:30,color:"#d8a0ff",speed:10,size:.24}),n.addShake(.6),s.play("bossSlam",c(e.x,e.z));break}case"kingSmash":case"kingQuake":case"kingSpin":case"kingRing":{let u=e.fx==="kingRing"?16:e.fx==="kingSpin"?7.6:6.5,d=e.fx==="kingSmash"?e.x+Math.cos(e.dir)*5:e.x,f=e.fx==="kingSmash"?e.z+Math.sin(e.dir)*5:e.z;t.ring(d,f,u,"#ff5530",.6,.5),t.ring(d,f,u*.6,"#ffd0a0",.4),t.smoke(d,.4,f,{n:24,speed:7,size:2.2,jitter:2,alpha:.6}),t.spark(d,.3,f,{n:60,color:"#ff8a4a",speed:14,size:.26}),t.flash(d,2,f,"#ff6a3a",80,20,.3),n.addShake(1),s.play("bossSlam",c(d,f));break}default:e.team!=="player"&&(t.arc(e.x,1.1,e.z,e.dir,2.6,1.8,"#ff5a3a"),s.play("swing",c(e.x,e.z)))}break}case"dmg":{let l=i.eActors.get(e.tid);l&&(l.flash(),e.by===a&&(l.hitstop=e.crit?.07:.045));let h=i.pActors.get(e.by);h&&e.by===a&&(h.hitstop=e.crit?.07:.045,n.addShake(e.crit?.18:.08));let u=l?l.headPos.y+.6:2.4;t.spark(e.x,1.2,e.z,{n:e.crit?12:6,color:e.blocked?"#9fd0ff":e.crit?"#fff0a0":"#ffc27a",speed:e.crit?9:6,size:.14,life:.35}),(e.by===a||e.crit)&&r.damage(e.x,u,e.z,e.v,{crit:e.crit,back:e.back,blocked:e.blocked,mine:e.by===a}),s.play(e.blocked?"block":e.crit?"hitCrit":"hit",c(e.x,e.z));break}case"counter":{t.ring(e.x,e.z,5,"#6ec3ff",.6,.5),t.flash(e.x,2,e.z,"#8fd0ff",60,14),t.spark(e.x,2,e.z,{n:40,color:"#bfe4ff",speed:12,size:.2}),r.announce("\uCE74\uC6B4\uD130!","#8fd0ff",1.1,!0),n.addShake(.5),s.play("counter",{});break}case"counterable":{let l=i.eActors.get(e.id);l&&(l.counterGlow=e.dur),s.play("counterTell",{});break}case"kill":{let l=st[e.kind];t.spark(e.x,1,e.z,{n:20,color:"#d9d2c4",speed:5,normal:!0,bright:.9,size:.18,floor:!0,grav:-12,life:1.2}),t.spark(e.x,1.4,e.z,{n:14,color:"#7fe8ff",speed:3,size:.2,life:.8,grav:1}),e.xp&&i.onXp(e.xp),s.play(l.boss?"bossDie":"bones",c(e.x,e.z));break}case"espawn":{if(st[e.kind].boss)break;t.smoke(e.x,.2,e.z,{n:6,color:"#2a2a2a",speed:1.5,size:1.1,alpha:.5}),t.spark(e.x,.3,e.z,{n:10,color:"#6fe0ff",speed:2,up:3,size:.16,life:.9,grav:0}),s.play("spawn",c(e.x,e.z));break}case"phurt":{i.pActors.get(e.id)?.flash(),e.id===a&&(n.addShake(.35),i.hurt=Math.min(1,i.hurt+.5),s.play("hurt",{}),r.damage(e.x,2.6,e.z,e.v,{taken:!0}));break}case"doomcast":r.announce("\uC989\uC0AC \uACF5\uACA9","#c880ff",1.6,!1,"\uBCF4\uB77C\uC0C9 \uC7A5\uD310\uC744 \uD53C\uD558\uC138\uC694 \xB7 \uD68C\uD53C \uBB34\uC801\uC73C\uB85C\uB9CC \uBC84\uD2F8 \uC218 \uC788\uC2B5\uB2C8\uB2E4"),s.play("counterTell",{});break;case"doom":{t.ring(e.x,e.z,3.5,"#b050ff",.7,.5),t.beam(e.x,e.z,"#c070ff",9,1.8,.8),t.spark(e.x,.5,e.z,{n:40,color:"#e0b0ff",speed:6,up:6,size:.2,grav:0}),e.id===a&&(n.addShake(.8),i.hurt=1);break}case"evade":e.id===a&&r.damage(e.x,2.6,e.z,0,{text:"\uD68C\uD53C",color:"#9fdcff"});break;case"shieldhit":e.id===a&&s.play("block",{});break;case"kb":break;case"pdown":{t.ring(e.x,e.z,3,"#ff3a3a",.8),r.announce(e.id===a?"\uC4F0\uB7EC\uC84C\uC2B5\uB2C8\uB2E4":`${i.nameOf(e.id)} \uC4F0\uB7EC\uC9D0`,"#ff7a7a",2,!1,e.id===a?i.soloFeathers()?"F: \uBD80\uD65C\uC758 \uAE43\uD138 \uC0AC\uC6A9":"\uB3D9\uB8CC\uAC00 \uACC1\uC5D0 \uC640\uC57C \uBD80\uD65C\uD569\uB2C8\uB2E4":"\uACC1\uC5D0 \uC11C \uC788\uC73C\uBA74 \uBD80\uD65C \uAC8C\uC774\uC9C0\uAC00 \uC313\uC785\uB2C8\uB2E4 (\uCD1D 4\uCD08)"),s.play("down",{});break}case"previve":t.beam(e.x,e.z,"#ffe7a0",8,1.6,1.2),t.spark(e.x,.5,e.z,{n:40,color:"#ffe7a0",speed:4,up:6,size:.18,grav:0}),s.play("revive",{});break;case"heal":{let l=i.pActors.get(e.id)?.root.position;if(!l)break;t.spark(l.x,1,l.z,{n:20,color:"#7dffb0",speed:2,up:3,size:.15,grav:1}),(e.id===a||e.by===a)&&r.damage(l.x,2.6,l.z,e.v,{heal:!0,mine:!0});break}case"taunt":{t.ring(e.x,e.z,e.r,"#ffcf6a",.6,.35),t.ring(e.x,e.z,e.r*.5,"#fff0c0",.4),t.flash(e.x,1.5,e.z,"#ffd27a",40,10),n.addShake(.25);break}case"chain":{for(let u=1;u<e.pts.length;u++){let[d,f]=e.pts[u-1],[m,b]=e.pts[u];t.zap(d,u===1?1.6:1.1,f,m,1.1,b,"#bfe4ff"),(u>1||e.pts.length===2)&&t.spark(m,1.1,b,{n:10,color:"#d8f0ff",speed:6,size:.14,life:.3})}let[l,h]=e.pts[1];t.flash(l,1.5,h,"#9fd0ff",40,10),s.play("thunder",c(l,h));break}case"miracle":{t.ring(e.x,e.z,e.r,"#7dffb0",.9,.35),t.ring(e.x,e.z,e.r*.55,"#e8fff0",.6),t.beam(e.x,e.z,"#b8ffd0",12,2.4,1.2),t.flash(e.x,3,e.z,"#9fffc0",90,20,.3),t.spark(e.x,.5,e.z,{n:60,color:"#b8ffd0",speed:5,up:8,size:.18,grav:0}),s.play("revive",{});break}case"buff":{let h=i.pActors.get(e.id)?.root.position;if(!h)break;e.kind==="shield"?(t.ring(h.x,h.z,2,"#ffd98a",.6),t.spark(h.x,1,h.z,{n:16,color:"#ffe7a0",speed:2,up:2,size:.15})):e.kind==="guard"?(t.ring(h.x,h.z,2.4,"#ffcf6a",.6,.4),t.spark(h.x,1.2,h.z,{n:20,color:"#ffe0a0",speed:3,up:1,size:.16})):(t.ring(h.x,h.z,3,"#ff5a3a",.5),t.flash(h.x,1.5,h.z,"#ff4a2a",30,8));break}case"smoke":t.smoke(e.x,.5,e.z,{n:40,color:"#3a3448",speed:4,size:2.2,jitter:2,alpha:.7,life:2}),s.play("smoke",c(e.x,e.z));break;case"shoot":s.play(["arrow","shot","pierce","arrowb"].includes(e.kind)?"bow":"cast",c(i.eActors.get(e.id)?.root.position.x??i.pActors.get(e.id)?.root.position.x??0,0));break;case"explode":{t.ring(e.x,e.z,e.r,"#ff7a2a",.45,.4),t.flash(e.x,1,e.z,"#ff8a3a",50,12),t.spark(e.x,.8,e.z,{n:36,color:"#ffb05a",speed:9,size:.3}),t.smoke(e.x,.8,e.z,{n:10,speed:3}),n.addShake(.25),s.play("explode",c(e.x,e.z));break}case"phit":t.spark(e.x,1,e.z,{n:8,color:e.kind==="bolt"?"#9fd8ff":"#ffcf8a",speed:5,size:.15});break;case"zonefire":{e.fx==="lightning"?(t.bolt(e.x,e.z,"#cfe8ff"),t.bolt(e.x+qh(-1.5,1.5),e.z+qh(-1.5,1.5),"#9fd0ff"),t.ring(e.x,e.z,e.r,"#bfe4ff",.5,.5),t.flash(e.x,3,e.z,"#bfe4ff",120,24,.25),t.spark(e.x,.3,e.z,{n:50,color:"#d8f0ff",speed:12,size:.2}),n.addShake(.8),s.play("thunder",c(e.x,e.z))):e.fx==="meteor"?i.meteorImpact(e.x,e.z,e.r):e.fx==="soulburst"?(t.spark(e.x,.3,e.z,{n:30,color:"#5ff0c0",speed:6,up:5,size:.3,grav:1}),t.ring(e.x,e.z,e.r,"#3fffc0",.4),t.flash(e.x,1,e.z,"#3fffc0",30,8),s.play("soul",c(e.x,e.z))):e.fx==="frost"?s.play("frost",c(e.x,e.z)):e.fx==="doom"?(t.ring(e.x,e.z,e.r,"#b050ff",.6,.5),t.flash(e.x,2,e.z,"#a040ff",70,16),t.spark(e.x,.3,e.z,{n:30,color:"#e0b0ff",speed:8,size:.22}),n.addShake(.4),s.play("bossSlam",c(e.x,e.z))):e.fx==="holyburst"?(t.ring(e.x,e.z,e.r,"#ffe7a0",.45,.4),t.beam(e.x,e.z,"#fff0c0",8,2,.5),t.flash(e.x,1.5,e.z,"#ffe8a8",60,14),t.spark(e.x,.4,e.z,{n:30,color:"#fff0c0",speed:8,size:.2}),t.spark(e.x,.3,e.z,{n:14,color:"#b8ffd0",speed:2,up:4,size:.14,grav:0,life:.8}),n.addShake(.2),s.play("impactHeavy",c(e.x,e.z))):e.fx==="poison"?(t.smoke(e.x,.6,e.z,{n:30,color:"#4a6a2a",speed:3,size:2.4,jitter:2.5,alpha:.6,life:2.2}),s.play("smoke",c(e.x,e.z))):(e.fx==="heal"||e.fx==="spring")&&(t.ring(e.x,e.z,e.r,"#7dffb0",.5,.3),t.spark(e.x,.3,e.z,{n:e.fx==="heal"?36:18,color:"#b8ffd0",speed:3,up:5,size:.16,grav:0,life:.9}),e.fx==="heal"&&t.beam(e.x,e.z,"#b8ffd0",7,1.6,.6),s.play("potion",{}));break}case"summon":t.ring(e.x,e.z,6,"#5fe0ff",1,.3),s.play("summon",c(e.x,e.z));break;case"room":{let l=!!xt[e.i]?.boss;e.state==="active"?(r.announce(e.name,"#e8d9c0",2.6,!1,l?"":"\uBAA8\uB4E0 \uC801\uC744 \uCC98\uCE58\uD558\uC138\uC694"),s.play(l?"bossDoor":"seal",{}),l||s.setMusic("combat")):(r.announce("\uC815\uD654 \uC644\uB8CC","#ffe3a8",2,!1,"\uBD09\uC778\uC774 \uD480\uB838\uC2B5\uB2C8\uB2E4"),s.play("clear",{}),s.setMusic("explore"));break}case"wave":{if(e.n<=1)break;let l=e.n>=e.of;r.announce(l?"\uB9C8\uC9C0\uB9C9 \uC6E8\uC774\uBE0C":`\uC6E8\uC774\uBE0C ${e.n} / ${e.of}`,"#ff9a7a",1.8,!1,l?"\uB0A8\uC740 \uB9DD\uC790\uB97C \uBAA8\uB450 \uC4F0\uB7EC\uB728\uB9AC\uC138\uC694":"\uB9DD\uC790\uB4E4\uC774 \uB2E4\uC2DC \uBAB0\uB824\uC635\uB2C8\uB2E4");break}case"chest":t.beam(e.x,e.z,"#ffd27a",10,2.2,1.4),t.spark(e.x,1,e.z,{n:60,color:"#ffd27a",speed:6,up:8,size:.16,grav:-8,floor:!0}),s.play("chest",c(e.x,e.z));break;case"loot":i.onLoot(e.item);break;case"boss":i.onBoss(e);break;case"victory":i.onVictory(e);break;case"wipe":s.setMusic("silence"),r.announce("\uC804\uBA78","#ff5a5a",3,!1,"\uD30C\uD2F0\uAC00 \uBAA8\uB450 \uC4F0\uB7EC\uC84C\uC2B5\uB2C8\uB2E4");break;case"start":s.setMusic("explore"),e.ch&&r.chapterIntro(e.ch);break}}function wM(i,e){let t=i.lastView?.players.find(n=>n.id===e);return t?$e[t.cls].trail:"#ffd98a"}pi();mr();Uh();ss();var EM=new Ys(1,12,10),AM=new $s(.28),Pf=i=>Math.PI/2-i,Xh=class{constructor({engine:e,assets:t,vfx:n,level:s,audio:r,hud:a,input:o,profile:c,onEnd:l}){Object.assign(this,{engine:e,assets:t,vfx:n,level:s,audio:r,hud:a,input:o,profile:c,onEnd:l}),this.pActors=new Map,this.eActors=new Map,this.projs=new Map,this.drops=new Map,this.chests=new Map,this.hurt=0,this.session=null,this.lastView=null,this.runXp=0,this.runLoot=[],this.levelsGained=0,this.ended=!1,this.pool=new Map}prewarmPool(e={minion:14,warrior:8,archer:6,mage:6,priest:1,warden:1,priestShade:1,wardenShade:1,king:1}){let t=[],n=(s,r,a)=>{let o=`${s}|${r}`,c=this.pool.get(o)||[];for(let l=0;l<a;l++){let h=zh(this.assets,s,r);h.animate({moving:!1},.016,h.cfg),h.root.position.set(kn.x+l%6-3,0,kn.z-3-Math.floor(l/6)),this.engine.scene.add(h.root),t.push(h),c.push(h)}this.pool.set(o,c)};for(let[s,r]of Object.entries(e))n(s,!1,r);return n("warrior",!0,1),n("mage",!0,1),()=>{for(let s of t)this.engine.scene.remove(s.root)}}acquireEnemy(e,t){let n=this.pool.get(`${e}|${!!t}`),s=n&&n.length?n.pop():zh(this.assets,e,t);return s.reset(),s.poolKey=`${e}|${!!t}`,s}releaseEnemy(e){this.engine.scene.remove(e.root),e.crownFire&&(e.crownFire.dead=!0,e.crownFire=null),this.pool.has(e.poolKey)||this.pool.set(e.poolKey,[]),this.pool.get(e.poolKey).push(e)}start(e){this.session=e,this.ended=!1,this.runXp=0,this.runLoot=[],this.levelsGained=0,this.startedAt=performance.now(),this.engine.snap(kn.x,kn.z),this.hud.show(!0),this.input.enabled=!0}startLobby(e){this.session=e,this.lastView=null,this.input.dest=null,this.input.enabled=!0}lobbyFrame(e){let t=this.session,n=this.input.sample(this.engine,t.self()||kn);this.input.takeCasts(),t.update(e,{...n,attack:!1});let s=t.view();return s?(this.lastView=s,this.syncPlayers(s,e),s.players.find(r=>r.id===t.localId)||null):null}stop(){for(let e of this.pActors.values())this.engine.scene.remove(e.root);this.pActors.clear();for(let e of this.eActors.values())this.releaseEnemy(e);this.eActors.clear();for(let e of[this.projs,this.drops,this.chests]){for(let t of e.values())this.engine.scene.remove(t.obj),t.emitter&&(t.emitter.dead=!0);e.clear()}this.vfx.sweepDecals(),this.vfx.sweepDecals();for(let e of this.timers||[])clearTimeout(e);this.timers=[],this.cine=!1,this.engine.cine=null,this.hud.cinema(!1),this.portal&&(this.engine.scene.remove(this.portal.group),this.portal.emitter.dead=!0,this.portal=null),this.session=null,this.lastView=null,this.chapter=1,this.engine.setAtmosphere(qn[1]),this.hurt=0,this.engine.grade.uniforms.uHurt.value=0,this.engine.grade.uniforms.uDesat.value=0,this.hud.show(!1),this.input.enabled=!1}listener(){let e=this.session?.self();return e?{x:e.x,z:e.z}:{x:0,z:0}}self(){return this.session.self()}nameOf(e){return this.lastView?.players.find(t=>t.id===e)?.name||"\uB3D9\uB8CC"}soloFeathers(){return(this.session.me()?.feathers??0)>0}onXp(e){this.runXp+=e;let t=k0(this.profile,e);if(t>0){this.levelsGained+=t;let n=ut(this.profile);this.hud.announce(`\uB808\uBCA8 ${n.level}`,"#ffe38a",2,!0,"\uB2A5\uB825\uCE58\uAC00 \uC0C1\uC2B9\uD588\uC2B5\uB2C8\uB2E4"),this.audio.play("levelup",{});let s=this.self();this.vfx.beam(s.x,s.z,"#ffe38a",9,2,1.4),this.vfx.spark(s.x,.5,s.z,{n:50,color:"#ffe38a",speed:3,up:7,size:.16,grav:0}),this.pushGear()}Wt(this.profile)}onLoot(e){let t=L0(this.profile,e),n=wn[e.rarity],s=ut(this.profile),r=Ps(s),a=t&&this.profile.settings.autoEquip&&U0(s,e)&&$o(this.profile,e.id);a&&(this.pushGear(),this.audio.play("equip",{}),this.hud.statGain(r,Ps(s),`\uC790\uB3D9 \uC7A5\uCC29 \xB7 ${Xn[e.slot].name}`)),this.hud.root.querySelector(".inventory").classList.contains("hidden")||this.hud.renderInventory(),this.hud.lootFeed(e,t,a),this.audio.play("loot",{tier:n.tier}),t&&this.runLoot.push(e),Wt(this.profile)}pushGear(){let e=ut(this.profile);this.session.setGear(e.level,Object.values(e.equipped).filter(Boolean))}later(e,t){(this.timers||=[]).push(setTimeout(t,e))}cinematic(e){this.engine.cinematic(e),this.hud.cinema(!0),this.input.enabled=!1,this.cine=!0,this.later(e.dur*1e3,()=>{this.cine=!1,this.hud.cinema(!1),this.session&&!this.ended&&(this.input.enabled=!0)})}bossCinematic(e){let{hud:t,audio:n,engine:s,vfx:r}=this,a=st[e.kind],o=this.lastView?.enemies.find(l=>l.id===e.id);if(n.setMusic("boss"),!o){t.bossIntro(a.name,a.title),n.play("roar",{});return}let c=a.scale||1;this.cinematic({x:o.x,z:o.z,yaw:o.face+.35,dist:[7*c,4*c],height:[1*c,1.45*c],look:[1.45*c,1.65*c],dur:3.8}),n.play("bossDoor",{}),this.later(1250,()=>{s.addShake(1),n.play("impactHeavy",{}),r.ring(o.x,o.z,6*c/2.2,"#ffcf8a",.6,.5),r.smoke(o.x,.4,o.z,{n:18,speed:5,size:2,jitter:1.5,alpha:.5})}),this.later(1650,()=>{t.bossIntro(a.name,a.title),n.play("bossSlam",{}),n.play("roar",{}),s.addShake(.7),r.flash(o.x,3,o.z,"#ff8a4a",60,16,.3)})}onVictory(e){let{audio:t,profile:n}=this;t.setMusic("victory");let s=e.ch||this.lastView?.chapter||1,r=Hh(n,this.lastView?.difficulty||s);r&&(n.difficulty=r),n.stats.clears++,Wt(n),this.cinematic({x:e.x,z:e.z,yaw:(e.face??Math.PI/2)+.7,dist:[13,8.5],height:[7.5,4.5],look:[1.6,1.2],dur:3.4}),this.later(3200,()=>this.hud.chapterClear(s,e.next,r,this.session?.mode==="host"&&!this.session.online))}summary(e){let t=this.lastView;return{victory:e,difficulty:t?.difficulty||1,time:(performance.now()-this.startedAt)/1e3,xp:this.runXp,loot:this.runLoot,levels:this.levelsGained}}syncPortal(e,t){let n=e.portal;if(!n){this.portal&&(this.engine.scene.remove(this.portal.group),this.portal.emitter.dead=!0,this.portal=null);return}if(!this.portal){let s=new wt,r=new re(n.next?"#b88aff":"#ffd98a"),a=new Oe(new Ks(1.7,.13,8,48),new yt({color:r.clone().multiplyScalar(3)})),o=new Oe(new xs(1.62,40),new yt({color:r.clone().multiplyScalar(.9),transparent:!0,opacity:.55,blending:en,depthWrite:!1,side:Kt})),c=new Oe(new _s(1.9,2.3,48),new yt({color:r.clone().multiplyScalar(2),transparent:!0,opacity:.7,blending:en,depthWrite:!1}));c.rotation.x=-Math.PI/2,c.position.y=.08,a.position.y=o.position.y=2,s.add(a,o,c),s.position.set(n.x,0,n.z),this.engine.scene.add(s);let l=n.next?"#d8b8ff":"#ffe7a0",h=this.vfx.emitter({rate:40,emit:u=>{let d=Math.random()*Math.PI*2;u.spark(n.x+Math.cos(d)*1.7,2+Math.sin(d)*1.7,n.z,{n:1,color:l,speed:.6,up:.4,size:.14,grav:0,life:.9})}});this.portal={group:s,disc:o,ring:a,emitter:h},this.vfx.flash(n.x,2,n.z,l,60,14,.4)}this.portal.disc.rotation.z=t*1.4,this.portal.disc.material.opacity=.45+Math.sin(t*3)*.12,this.portal.ring.scale.setScalar(1+Math.sin(t*2.2)*.03)}onBoss(e){let{hud:t,audio:n,engine:s}=this;switch(e.s){case"intro":this.bossCinematic(e);break;case"p2":t.announce("\uC655\uAD00\uC758 \uC2EC\uD310","#ff6a4a",2.4,!0,"\uBB34\uB825\uD654 \uAC8C\uC774\uC9C0\uB97C \uBAA8\uB450 \uAE4E\uC73C\uC138\uC694!"),n.play("roar",{});break;case"judgement":break;case"judgeOk":{t.announce("\uBB34\uB825\uD654 \uC131\uACF5","#8fd0ff",2,!0,"\uC9C0\uAE08\uC774 \uAE30\uD68C\uC785\uB2C8\uB2E4"),this.vfx.ring(e.x,e.z,12,"#8fd0ff",.8,.6),this.vfx.flash(e.x,3,e.z,"#8fd0ff",100,25,.4),s.addShake(1),n.play("counter",{});break}case"judgeFail":{t.announce("\uC2EC\uD310\uC774 \uB0B4\uB824\uC84C\uB2E4","#ff4a3a",2),this.vfx.ring(e.x,e.z,30,"#ff3a2a",1,.8),this.vfx.flash(e.x,3,e.z,"#ff3a2a",150,40,.5),s.addShake(1.2),n.play("bossSlam",{});break}case"phase2":t.announce(`${st[e.kind].name}\uC758 \uAE30\uC138\uAC00 \uBC14\uB01D\uB2C8\uB2E4`,"#ff9a6a",2,!1,"\uC0C8\uB85C\uC6B4 \uD328\uD134\uC5D0 \uC8FC\uC758\uD558\uC138\uC694"),n.play("roar",{});break;case"enrage":t.announce(`${st[e.kind].name}\uC774(\uAC00) \uACA9\uB178\uD569\uB2C8\uB2E4`,"#ff5a3a",2),n.play("roar",{});break}}meteorImpact(e,t,n){let{vfx:s,engine:r,audio:a}=this;s.ring(e,t,n*1.2,"#ff6a2a",.6,.5),s.ring(e,t,n*.7,"#fff0c0",.4),s.flash(e,3,t,"#ff7a3a",160,30,.35),s.spark(e,.5,t,{n:90,color:"#ffae4a",speed:16,up:8,size:.3,grav:-14,floor:!0,life:1.1}),s.smoke(e,1,t,{n:26,speed:6,size:2.6,jitter:2,alpha:.7,life:2.2}),r.addShake(1.1),a.play("explode",{x:e,z:t,L:this.listener()}),a.play("impactHeavy",{})}frame(e,t){let n=this.session;if(!n)return;let s=n.self(),r=this.input.sample(this.engine,s||{x:0,z:0});this.input.bot&&(r={...this.input.bot},this.input.bot=null);for(let l of this.input.takeCasts()){if(l==="inventory"){this.hud.toggleInventory();continue}!n.cast(l,r.ax,r.az)&&["q","w","e","r"].includes(l)&&this.hud.flashSlot(l)}n.update(e,r);let a=n.view();if(!a)return;this.lastView=a;for(let l of n.takeEvents())z0(this,l);this.syncPlayers(a,e),this.syncEnemies(a,e),this.syncProjectiles(a,e);for(let l of a.zones)if(this.vfx.decal(l,t),l.fx==="frost"&&l.t>l.warn&&Math.random()<e*30&&this.vfx.spark(l.x+(Math.random()-.5)*7,.2,l.z+(Math.random()-.5)*7,{n:1,color:"#bfe8ff",speed:1,up:2,size:.18,grav:0,life:.9}),l.fx==="meteor"&&l.t<l.warn&&this.meteorFalling(l,t),l.fx==="poison"&&l.t>l.warn&&Math.random()<e*14&&this.vfx.smoke(l.x+(Math.random()-.5)*8,.5,l.z+(Math.random()-.5)*8,{n:1,color:"#4a6a2a",speed:.6,size:2,alpha:.45,life:1.6}),l.fx==="arrows"&&l.t>l.warn&&Math.random()<e*40){let h=Math.random()*Math.PI*2,u=Math.sqrt(Math.random())*4;this.vfx.spark(l.x+Math.cos(h)*u,5,l.z+Math.sin(h)*u,{n:1,color:"#e8f0c0",speed:0,up:-26,drag:0,size:.12,grav:0,life:.2,floor:!0})}this.vfx.sweepDecals(),this.syncDrops(a,t),this.syncChests(a),this.level.update(e,t,a.rooms,s||{x:0,z:0}),this.vfx.update(e);let o=a.players.find(l=>l.id===n.localId);if(a.chapter!==this.chapter&&(this.chapter=a.chapter,this.engine.setAtmosphere(qn[a.chapter])),o){let l=this.engine.camTarget;Math.hypot(l.x-o.x,l.z-o.z)>30&&this.engine.snap(o.x,o.z);let h=.12*(1-this.engine.zoom);this.engine.follow(o.x,o.z,e,{x:(r.ax-o.x)*h,z:(r.az-o.z)*h}),this.engine.faceYaw=o.face}this.hurt=Math.max(0,this.hurt-e*1.5);let c=o&&o.alive?Math.max(0,1-o.hp/o.maxHp/.3):0;this.engine.grade.uniforms.uHurt.value=Math.min(1,this.hurt+c*(.35+Math.sin(t*6)*.15)),this.engine.grade.uniforms.uDesat.value=o&&!o.alive?.85:0,this.engine.render(e,t),this.hud.update(a,n,this,t),this.syncPortal(a,t),!this.ended&&a.phase==="wipe"&&a.endT>3&&(this.ended=!0,this.onEnd(this.summary(!1)))}syncPlayers(e,t){let n=new Set;for(let s of e.players){n.add(s.id);let r=this.pActors.get(s.id);r&&(r.cls!==s.cls||r.spec!==Ct(s.cls,s.spec).id)&&(this.engine.scene.remove(r.root),this.pActors.delete(s.id),r=null),r||(r=Vo(this.assets,s.cls,s.spec,s.look),r.addXray(s.id===this.session.localId?"#ffd98a":"#8fc4ff"),this.engine.scene.add(r.root),this.pActors.set(s.id,r),s.id===this.session.localId&&(this.engine.heroLight.userData.follow=r.root));let a=pr(s.look,s.cls);r.lookKey!==Bo(a)&&_a(r,$e[s.cls].model,a),r.root.visible=!this.cine,r.root.position.set(s.x,s.y||0,s.z),r.root.rotation.y=Pf(s.face),r.animate({act:s.act,actT:s.actT,moving:s.moving,speed:s.speed,down:!s.alive},t,r.cfg),s.rage&&Math.random()<t*25&&this.vfx.fire(s.x+(Math.random()-.5),.3+Math.random()*1.5,s.z+(Math.random()-.5),.5,"#ff3a1a"),s.shield>0&&Math.random()<t*12&&this.vfx.spark(s.x,1+Math.random(),s.z,{n:1,color:"#ffe7a0",speed:1.5,up:.5,size:.12,grav:0,life:.6})}for(let[s,r]of this.pActors)n.has(s)||(this.engine.scene.remove(r.root),this.pActors.delete(s))}syncEnemies(e,t){let n=new Set;for(let s of e.enemies){n.add(s.id);let r=this.eActors.get(s.id);if(r||(r=this.acquireEnemy(s.kind,s.elite),this.engine.scene.add(r.root),this.eActors.set(s.id,r),st[s.kind].crown&&(r.crownFire=this.vfx.emitter({rate:40,emit:a=>{if(r.crown){let o=new P;r.crown.getWorldPosition(o),a.fire(o.x,o.y+.3,o.z,1.2,"#ff5a1a")}}}))),r.root.position.set(s.x,s.y||0,s.z),r.root.rotation.y=Pf(s.face),r.animate({act:s.act==="intro"?null:s.act,actT:s.actT,moving:s.moving,speed:s.speed,dead:s.dead,deadT:s.deadT,intro:s.intro},t,r.cfg),r.counterGlow>0){r.counterGlow-=t;for(let a of r.mats)a.emissive?.setRGB(.15,.45,1.2*(.6+Math.sin(performance.now()/50)*.4));r.counterGlow<=0&&r.restoreTint(),Math.random()<t*30&&this.vfx.spark(s.x,2+Math.random()*3,s.z,{n:1,color:"#6ec3ff",speed:2,size:.25,grav:0})}s.dead&&r.crownFire&&(r.crownFire.dead=!0,r.crownFire=null)}for(let[s,r]of this.eActors)n.has(s)||(this.releaseEnemy(r),this.eActors.delete(s))}syncProjectiles(e){let t=new Set;for(let n of e.projs){t.add(n.id);let s=this.projs.get(n.id);s||(s=this.makeProjectile(n),this.projs.set(n.id,s)),s.obj.position.set(n.x,1.25,n.z),s.obj.rotation.y=Pf(n.dir),s.x=n.x,s.z=n.z}for(let[n,s]of this.projs)t.has(n)||(this.engine.scene.remove(s.obj),s.emitter&&(s.emitter.dead=!0),this.projs.delete(n))}makeProjectile(e){let t=new wt,n=null,s=(a,o)=>{let c=new Oe(EM,new yt({color:new re(a).multiplyScalar(4)}));c.scale.setScalar(o),t.add(c)},r={obj:t,x:e.x,z:e.z};if(e.kind==="fireball")s("#ff7a2a",.35),n=this.vfx.emitter({rate:90,emit:a=>a.fire(r.x,1.25,r.z,.9,"#ff6a1a")});else if(e.kind==="bolt")s("#8fd0ff",.18),n=this.vfx.emitter({rate:50,emit:a=>a.spark(r.x,1.25,r.z,{n:1,color:"#8fd0ff",speed:.5,size:.2,grav:0,life:.25})});else if(e.kind==="arrow"||e.kind==="shot"||e.kind==="pierce"||e.kind==="arrowb"){let a=this.assets.prop("w_arrow");a.rotation.x=Math.PI/2,a.scale.setScalar(1.6),t.add(a);let o=e.kind==="arrow"?"#6ff0c8":e.kind==="pierce"?"#e8ffb0":"#b8e890";e.kind==="pierce"&&s("#d8ff90",.22),n=this.vfx.emitter({rate:e.kind==="pierce"?90:40,emit:c=>c.spark(r.x,1.25,r.z,{n:1,color:o,speed:.2,size:e.kind==="pierce"?.2:.12,grav:0,life:.3})})}else e.kind==="dagger"?(s("#c9a0ff",.14),n=this.vfx.emitter({rate:40,emit:a=>a.spark(r.x,1.25,r.z,{n:1,color:"#c9a0ff",speed:.2,size:.1,grav:0,life:.2})})):e.kind==="lightorb"?(s("#ffe7a0",.55),n=this.vfx.emitter({rate:70,emit:a=>a.spark(r.x+(Math.random()-.5)*.8,1.25,r.z+(Math.random()-.5)*.8,{n:1,color:"#fff0c0",speed:.8,size:.16,grav:0,life:.4})})):s("#5ff0c0",.3);return this.engine.scene.add(t),r.emitter=n,r}meteorFalling(e,t){let n=e.t/e.warn;e._m||(e._m=!0,this.audio.play("meteorFall",{}));let s=(1-n)*22,r=e.x-(1-n)*8,a=e.z-(1-n)*5;this.vfx.fire(r,s+1,a,2.6,"#ff6a1a"),this.vfx.fire(r,s+1,a,2,"#ffb04a"),Math.random()<.5&&this.vfx.smoke(r,s+1,a,{n:1,speed:.5,size:1.4,alpha:.4})}syncDrops(e,t){let n=new Set;for(let s of e.drops){n.add(s.id);let r=this.drops.get(s.id);if(!r){let a=wn[s.rarity].color,o=wn[s.rarity].tier,c=new wt,l=new Oe(AM,new Qt({color:a,emissive:a,emissiveIntensity:1.6,metalness:.3,roughness:.3}));l.position.y=.7,c.add(l),o>=1&&c.add(this.vfx.beam(0,0,a,2+o*1.6,.35+o*.12,0,{persistent:!0})),c.position.set(s.x,0,s.z),this.engine.scene.add(c),r={obj:c,gem:l},this.drops.set(s.id,r),this.vfx.spark(s.x,.6,s.z,{n:12+o*6,color:a,speed:3,up:4,size:.14,grav:-6,floor:!0})}r.gem.rotation.y=t*2,r.gem.position.y=.7+Math.sin(t*3+s.id)*.12}for(let[s,r]of this.drops)n.has(s)||(this.engine.scene.remove(r.obj),this.drops.delete(s))}syncChests(e){for(let t of e.chests){let n=this.chests.get(t.id);if(!n){let s=this.assets.prop("d_chest_gold");s.position.set(t.x,0,t.z),s.scale.setScalar(1.3),this.engine.scene.add(s),this.vfx.spark(t.x,1,t.z,{n:30,color:"#ffd27a",speed:3,up:4,size:.14}),n={obj:s,open:!1,beam:this.vfx.beam(t.x,t.z,"#ffd27a",5,.8,0,{persistent:!0})},this.chests.set(t.id,n)}t.open&&!n.open&&(n.open=!0,this.engine.scene.remove(n.beam),n.obj.rotation.z=.08)}}};pi();ss();function Is(i,e,t,n,s,r,a=0){let o=s-e,c=r-t,l=Math.hypot(o,c);switch(i.type){case"circle":return l<=i.r+a;case"donut":return l<=i.r2+a&&l>=i.r-a;case"cone":{if(l>i.r+a)return!1;if(l<a+.5)return!0;let h=Math.atan2(c,o)-n;for(;h>Math.PI;)h-=Math.PI*2;for(;h<-Math.PI;)h+=Math.PI*2;return Math.abs(h)<=i.ang/2+Math.asin(Math.min(1,a/l))}case"rect":{let h=Math.cos(n),u=Math.sin(n),d=o*h+c*u,f=-o*u+c*h;return d>=-a&&d<=i.len+a&&Math.abs(f)<=i.w/2+a}}return!1}function F0(i,e,t){let n=Math.cos(i.face),s=Math.sin(i.face),r=e-i.x,a=t-i.z,o=Math.hypot(r,a)||1;return(n*r+s*a)/o<-.5}function O0(i,e,t,{back:n=!1,stunned:s=!1,rng:r=Math.random,critBonus:a=0,backBonus:o=0}={}){let c=r()<(i.crit||0)+a,l=i.atk*e*(.94+r()*.12);return c&&(l*=i.critDmg||2),n&&(l*=1+.2+o),s&&(l*=1+.3),l*=100/(100+(t||0)),{dmg:Math.max(1,Math.round(l)),crit:c}}var os=(i,e)=>Math.atan2(e.z-i.z,e.x-i.x),Di=(i,e)=>Math.hypot(e.x-i.x,e.z-i.z);var Qo=1/60,$h=Math.PI*2,Sr=.55,RM=4,CM=2.6,PM=.35,IM=.3,Yo=i=>Ot[i]||Cs[i];function Kh(i=Math.random()*2**31|0,e=1){return{seed:i,rng:Ah(i),t:0,tick:0,phase:"lobby",endT:0,difficulty:e,rooms:xt.map(()=>({state:"idle",wave:-1,waveT:0})),sealed:[],players:[],enemies:[],projs:[],zones:[],drops:[],chests:[],events:[],nextId:1,boss:null,stats:{kills:0}}}var Tr=i=>i.nextId++,Ko=(i,e)=>!!e?.lethalFrom&&(i.difficulty||1)>=e.lethalFrom,ke=(i,e)=>i.events.push(e),q0=i=>i.events.splice(0),lt=(i,e)=>i.players.find(t=>t.id===e),Jh=i=>Math.max(1,i.players.length),X0=(i,e=kn)=>e.x+(i%2?1.6:-1.6)*Math.ceil(i/2),Sa=i=>Ct(i.cls,i.spec).passive.mods;function wa(i,{id:e,name:t,cls:n="knight",spec:s,look:r=null,level:a=1,gear:o=[],local:c=!1}){let l=i.players.length;s=Ct(n,s).id;let h=xa(n,a,o,s),u={id:e,name:t,cls:n,spec:s,look:r,level:a,local:c,x:X0(l),z:kn.z,y:0,vx:0,vz:0,face:-Math.PI/2,st:h,hp:h.hp,alive:!0,downT:0,revive:0,feathers:0,tp:0,act:null,combo:0,comboT:0,cds:{q:0,w:0,e:0,r:0,dodge:0,potion:0},potions:m0,shield:0,shieldT:0,buffs:[],hurtT:0,slowT:0,kbx:0,kbz:0,input:{mx:0,mz:0,ax:0,az:0,attack:!1},dmgDealt:0,kills:0,downs:0,revives:0};return i.players.push(u),u}function j0(i,e){i.players=i.players.filter(t=>t.id!==e)}function kf(i,e,{name:t,cls:n,spec:s,look:r=null,level:a,gear:o}){let c=lt(i,e);if(!(!c||i.phase!=="lobby")){c.name=t,c.cls=n,c.spec=Ct(n,s).id,c.look=r,c.level=a,c.st=xa(n,a,o,c.spec),c.hp=c.st.hp,c.act=null;for(let l in c.cds)c.cds[l]=0}}function Lf(i,e,t,n){let s=lt(i,e);if(!s)return;let r=s.hp/s.st.hp||1,a=t>s.level;s.level=t,s.st=xa(s.cls,t,n,s.spec),s.hp=Math.min(s.st.hp,Math.round(s.st.hp*Math.min(1,r))),a&&s.alive&&Df(i,s,s.st.hp*IM)}function Df(i,e,t,n){let s=Math.min(Math.round(t),e.st.hp-e.hp);s<=0||!e.alive||(e.hp+=s,ke(i,{k:"heal",id:e.id,v:s,by:n}))}function B0(i){let e=i.st.speed;fr(i.cls,i.spec)==="move"&&(e*=1+ki(i.st));for(let t of i.buffs)t.speed&&(e*=1+t.speed);return i.slowT>0&&(e*=.6),e}function kM(i){let e=i.st.atk;for(let n of i.buffs)n.atk&&(e*=1+n.atk);let t=Sa(i);return t.lowHpAtk&&i.hp<i.st.hp*.5&&(e*=1+t.lowHpAtk),{atk:e,crit:i.st.crit,critDmg:i.st.critDmg}}function ec(i,e,t,n,s=0){if(!i.alive)return null;let r=Ct(i.cls,i.spec).skills,a=Oo(i.cls,i.spec),o=i.act?Ot[i.act.id]:null,c=o&&i.act.t<(o.lock??o.dur),l;if(e==="dodge"){if(i.cds.dodge>0)return null;l="dodge"}else if(e==="potion"){if(i.cds.potion>0||i.potions<=0||i.hp>=i.st.hp)return null;l="potion"}else if(e==="basic"){if(o&&o!==Ot[a[i.combo%3]]&&c||c&&i.act.t<(o.combo??o.lock)||c&&i.act.id==="dodge")return null;let m=i.comboT>0?i.combo%3:0;l=a[m],i.combo=m+1,i.comboT=0}else if(l=r[e],!l||i.cds[e]>0||c&&(i.act.id==="dodge"||!a.includes(i.act.id)||i.act.t<(o.combo??0)))return null;let h=Ot[l],u=Math.atan2(n-i.z,t-i.x);e==="dodge"&&(i.input.mx||i.input.mz)&&(u=Math.atan2(i.input.mz,i.input.mx)),h.away&&(u+=Math.PI);let d=t,f=n;return h.range&&Math.hypot(t-i.x,n-i.z)>h.range&&(d=i.x+Math.cos(u)*h.range,f=i.z+Math.sin(u)*h.range),i.act={id:l,t:0,dir:u,tx:d,tz:f,sx:i.x,sz:i.z,done:{},hitIds:[]},i.face=u,e==="dodge"?i.cds.dodge=Dh:e==="potion"?i.cds.potion=Nh:e!=="basic"&&(i.cds[e]=h.cd*(fr(i.cls,i.spec)==="cdr"?1-ki(i.st):1)),i.act}function $0(i){if(!i.act||i.act.id==="dodge"||i.act.id==="potion")return 1;let e=fr(i.cls,i.spec);return e==="cast"||e==="attack"&&Oo(i.cls,i.spec).includes(i.act.id)?1+ki(i.st):1}function Zh(i,e,t,n,s=!0){for(let f in i.cds)i.cds[f]>0&&(i.cds[f]=Math.max(0,i.cds[f]-t));if(i.comboT>=0&&!i.act&&(i.comboT+=t),i.comboT>.7&&(i.combo=0,i.comboT=-1),i.y=0,!i.alive){i.vx=i.vz=0;return}let r=i.act?Ot[i.act.id]:null,a=e.mx||0,o=e.mz||0,c=Math.hypot(a,o);c>1&&(a/=c,o/=c);let l=0,h=0;if(r){let f=i.act.t;if(r.move)for(let[m,b,g]of r.move)f>=m&&f<b&&(l+=Math.cos(i.act.dir)*g,h+=Math.sin(i.act.dir)*g);if(r.leap){let[m,b]=r.leap,g=Math.max(0,Math.min(1,(f-m)/(b-m))),p=g*g*(3-2*g);i.x=i.act.sx+(i.act.tx-i.act.sx)*p,i.z=i.act.sz+(i.act.tz-i.act.sz)*p,i.y=Math.sin(g*Math.PI)*2.2}if(r.moveScale&&c>.05){let m=B0(i)*r.moveScale;l+=a*m,h+=o*m}!r.move&&!r.leap&&!r.moveScale&&f>=(r.lock??r.dur)&&c>.05&&(i.act=null)}if(!i.act){let f=B0(i);l=a*f,h=o*f,c>.05&&!e.attack&&(i.face=Math.atan2(o,a))}l+=i.kbx,h+=i.kbz;let u=Math.exp(-t*10);i.kbx*=u,i.kbz*=u;let d=Math.min(1,t*18);i.vx+=(l-i.vx)*d,i.vz+=(h-i.vz)*d,r&&r.move&&(i.vx=l,i.vz=h),i.x+=i.vx*t,i.z+=i.vz*t,Zn(i,Sr,n),i.act&&(i.act.t+=t*$0(i),s&&i.act.t>=r.dur&&(i.act=null,i.comboT=0))}var Mr={x:kn.x,z:kn.z-5,r:1.2};function Nf(i,e,t){Zh(i,{mx:e.mx,mz:e.mz},t,[]);let n=i.x-Mr.x,s=i.z-Mr.z,r=Math.hypot(n,s),a=Mr.r+Sr;if(r<a){let o=r>1e-4?a/r:0;i.x=Mr.x+(o?n*o:a),i.z=Mr.z+s*o}}function Y0(i,e){i.phase==="lobby"&&(i.difficulty=Math.max(1,Math.min(is,e|0)))}function Uf(i){i.phase="play",i.t=0,i.chapter=ba(i.difficulty),i.chapterRooms=f0(i.chapter),xt.forEach((n,s)=>{i.rooms[s].state=n.chapter===i.chapter?"idle":"off"});let e=Zt[i.chapter].start,t=i.players.length===1;i.players.forEach((n,s)=>{n.feathers=t?3:1,n.x=X0(s,e),n.z=e.z,n.vx=n.vz=0,n.face=-Math.PI/2,n.act=null,n.tp++}),LM(i,4,()=>K0(i,i.chapterRooms[0])),ke(i,{k:"start",ch:i.chapter})}function LM(i,e,t){(i.timers||=[]).push({at:i.t+e,fn:t})}function K0(i,e){let t=i.rooms[e];if(t.state!=="idle")return;t.state="active",t.wave=-1,t.waveT=1.2;let n=xt[e];i.sealed=No(i.rooms.map(r=>r.state));let s=i.players.find(r=>r.alive&&Uo(r.x,r.z)===e);for(let r of i.players)Uo(r.x,r.z)!==e&&s&&(r.x=s.x+(i.rng()-.5)*2,r.z=s.z+(i.rng()-.5)*2,r.tp++);if(ke(i,{k:"room",i:e,state:"active",name:n.name}),n.boss){t.waveT=99;let r=Wn(...n.boss);Ta(i,n.bossKind,r.x,r.z,!1,e)}}var jh=3.8;function DM(i,e){i.boss={id:e.id,kind:e.kind,phase:1,judged:!1,enraged:!1,queue:[],gauge:0,gaugeMax:0,judgeT:0,intro:jh},e.face=Math.PI/2,e.act={id:"intro",t:0},e.iframeUntil=i.t+i.boss.intro;for(let t of i.enemies)t===e||t.dead||t.room!==e.room||(t.act?.id==="spawn"&&(t.act.t=Math.min(t.act.t,0)-(jh-2),t.iframeUntil=i.t+jh+.3),t.cd=Math.max(t.cd,jh));ke(i,{k:"boss",s:"intro",id:e.id,kind:e.kind})}function NM(i,e){let t=i.rooms[e];t.state="cleared",i.sealed=No(i.rooms.map(s=>s.state));let n=xt[e];if(ke(i,{k:"room",i:e,state:"cleared",name:n.name}),n.chest){let s=Wn(...n.chest);i.chests.push({id:Tr(i),x:s.x,z:s.z+.6,open:!1,gold:!0,room:e})}}function J0(i,e=Qo){if(i.phase==="lobby"){i.t+=e;for(let t of i.players)t.local&&Nf(t,t.input,e);return}if(i.t+=e,i.tick++,i.timers)for(let t=i.timers.length-1;t>=0;t--)i.timers[t].at<=i.t&&i.timers.splice(t,1)[0].fn();(i.phase==="victory"||i.phase==="wipe")&&(i.endT+=e);for(let t of i.players)UM(i,t,e);for(let t of i.enemies)BM(i,t,e);VM(i),jM(i,e),$M(i,e),YM(i,e),JM(i,e),OM(i,e),i.enemies=i.enemies.filter(t=>!(t.dead&&t.deadT>4.5)),i.phase==="play"&&i.players.length&&i.players.every(t=>!t.alive&&t.feathers<=0)&&(i.phase="wipe",ke(i,{k:"wipe"}))}function UM(i,e,t){if(e.hurtT>0&&(e.hurtT-=t),e.slowT>0&&(e.slowT-=t),e.shieldT>0&&(e.shieldT-=t,e.shieldT<=0&&(e.shield=0)),e.buffs=e.buffs.filter(n=>(n.t-=t)>0),e.local){if(e.alive&&e.input.attack&&(!e.act||Ot[e.act.id].combo!==void 0)){let r=ec(e,"basic",e.input.ax,e.input.az);r&&ke(i,{k:"act",id:e.id,a:r.id,dir:r.dir})}let n=e.act,s=n?n.t:0;Zh(e,e.input,t,i.sealed,!1),e.act&&(Yh(i,e,e.act===n?s:0,e.act.t,"player"),e.act&&e.act.t>=Ot[e.act.id].dur&&(e.act=null,e.comboT=0))}else if(e.act){let n=Ot[e.act.id],s=e.act.t;e.act.t+=t*$0(e),Yh(i,e,s,e.act.t,"player"),e.act.t>=n.dur&&(e.act=null)}if(!e.local)for(let n in e.cds)e.cds[n]>0&&(e.cds[n]=Math.max(0,e.cds[n]-t))}function Z0(i,e,t){let n=lt(i,e);!n||n.local||!n.alive||t.tp!==n.tp||(n.x=+t.x||n.x,n.z=+t.z||n.z,n.face=+t.f||0,n.y=+t.y||0,Zn(n,Sr,i.sealed))}function Q0(i,e,t,n,s){let r=lt(i,e);if(!r)return;if(!r.alive){t==="potion"&&eg(i,r);return}let a={x:r.x,z:r.z},o=ec(r,t,n,s);o&&(o.sx=a.x,o.sz=a.z,ke(i,{k:"act",id:r.id,a:o.id,dir:o.dir}))}function wr(i,e,t,n,s){let r=lt(i,e);if(!r)return null;if(!r.alive&&t==="potion")return eg(i,r);let a=ec(r,t,n,s);return a&&ke(i,{k:"act",id:r.id,a:a.id,dir:a.dir}),a}function eg(i,e){return e.alive||e.feathers<=0||e.downT<1.5?null:(e.feathers--,zf(i,e,.5),!0)}function Yh(i,e,t,n,s){let r=Yo(e.act.id);if(!r)return;let a=e.act;r.iframes&&n>=r.iframes[0]&&t<=r.iframes[1]&&(e.iframeUntil=i.t+(r.iframes[1]-n));for(let o=0;o<(r.hits||[]).length;o++){let c=r.hits[o];if(c.every){let l=c.until??r.dur;for(let h=c.t;h<=l+1e-6;h+=c.every)h>t&&h<=n&&H0(i,e,c,s,`${o}`)}else c.t>t&&c.t<=n&&H0(i,e,c,s,`${o}`)}for(let o=0;o<(r.spawns||[]).length;o++){let c=r.spawns[o];c.t>=t&&c.t<n&&!a.done["s"+o]&&(a.done["s"+o]=!0,zM(i,e,c,s))}r.judgement&&!a.done.j&&(a.done.j=!0,WM(i,e,r.judgement))}function H0(i,e,t,n,s){let r=e.act,a=t.at==="target"?r.tx:e.x+Math.cos(r.dir)*(t.off||0),o=t.at==="target"?r.tz:e.z+Math.sin(r.dir)*(t.off||0),c=(n==="player"?r.dir:e.face)+(t.rot||0);if((!r.done["fx"+s]||t.every)&&(r.done["fx"+s]=!0,(t.fx||n==="player")&&ke(i,{k:"swing",id:e.id,fx:t.fx||"slash",x:a,z:o,dir:c,team:n})),n==="player")for(let l of i.enemies)l.dead||(l.iframeUntil||0)>i.t||t.once&&r.hitIds.includes(l.id)||Is(t.shape,a,o,c,l.x,l.z,l.r)&&(t.once&&r.hitIds.push(l.id),Jo(i,l,e,t,a,o));else{t.tele&&HM(i,e.id,s);for(let l of i.players)l.alive&&(t.once&&r.hitIds.includes(l.id)||Is(t.shape,a,o,c,l.x,l.z,Sr)&&(t.once&&r.hitIds.push(l.id),Qh(i,l,e,t.mult,a,o,t.kb,Ko(i,t))))}}function zM(i,e,t,n){let s=e.act;if(t.proj){let r=_f[t.proj],a=n==="player"?s.dir:e.face;for(let o of t.fan||[0]){let c=a+o;i.projs.push({id:Tr(i),kind:t.proj,team:n,owner:e.id,x:e.x+Math.cos(c)*.9,z:e.z+Math.sin(c)*.9,dir:c,speed:r.speed,r:r.r,life:r.life,mult:t.mult??r.mult,hits:[]})}ke(i,{k:"shoot",id:e.id,kind:t.proj})}if(t.zone){let r=t.zone,a=r.at==="all"?i.players.filter(o=>o.alive).map(o=>[o.x,o.z]):[[e.x,e.z]];if(r.at==="target")if(n==="player")a[0]=[s.tx,s.tz];else{let o=lt(i,e.target);o&&(a[0]=[o.x,o.z])}for(let[o,c]of a)r.scatter&&(o+=(i.rng()-.5)*2*r.scatter,c+=(i.rng()-.5)*2*r.scatter),i.zones.push({id:Tr(i),team:r.team||n,owner:e.id,shape:r.shape,x:o,z:c,dir:s.dir??e.face,t:0,warn:r.warn,dur:r.dur,tick:r.tick||0,tickT:0,mult:r.mult,stag:r.stag||0,kb:r.kb||0,slow:r.slow||0,heal:r.heal||0,fx:r.fx,lethal:n!=="player"&&Ko(i,r)})}if(t.behind){let r=lt(i,e.target)||i.players.find(a=>a.alive);r&&(ke(i,{k:"smoke",id:e.id,x:e.x,z:e.z,r:3}),e.x=r.x-Math.cos(r.face)*t.behind,e.z=r.z-Math.sin(r.face)*t.behind,Zn(e,e.r,i.sealed),e.face=os(e,r),ke(i,{k:"smoke",id:e.id,x:e.x,z:e.z,r:3}))}if(t.buff){let r=t.buff;if(r.kind==="shield"){let a=r.pct*(Sa(e).shieldMult||1);for(let o of i.players)o.alive&&Di(o,e)<=r.radius&&(o.shield=Math.round(o.st.hp*a),o.shieldT=r.dur,ke(i,{k:"buff",id:o.id,kind:"shield"}))}else e.buffs.push({kind:r.kind,t:r.dur,atk:r.atk,speed:r.speed,dr:r.dr}),ke(i,{k:"buff",id:e.id,kind:r.kind})}if(t.heal&&e.potions>0){e.potions--;let r=Math.round(e.st.hp*t.heal);e.hp=Math.min(e.st.hp,e.hp+r),ke(i,{k:"heal",id:e.id,v:r})}if(t.taunt){for(let r of i.enemies)!r.dead&&Di(r,e)<=t.taunt.radius&&(r.target=e.id,r.tauntBy=e.id,r.tauntT=t.taunt.dur,r.blindT=0);ke(i,{k:"taunt",id:e.id,x:e.x,z:e.z,r:t.taunt.radius})}if(t.chain){let r=t.chain,a=[[e.x,e.z]],o=new Set,c={x:s.tx,z:s.tz},l=3.5,h=r.mult;for(let u=0;u<r.n;u++){let d=null,f=1/0;for(let g of i.enemies){if(g.dead||o.has(g.id)||(g.iframeUntil||0)>i.t)continue;let p=Di(g,c);p<=l+g.r&&p<f&&(f=p,d=g)}if(!d)break;o.add(d.id),a.push([d.x,d.z]);let m=d.x,b=d.z;Jo(i,d,e,{mult:h,stag:r.stag,kb:.4},c.x,c.z),c={x:m,z:b},l=r.jump,h*=r.decay}a.length===1&&a.push([s.tx,s.tz]),ke(i,{k:"chain",id:e.id,pts:a})}if(t.miracle){let r=t.miracle;for(let a of i.players)Di(a,e)>r.radius||(a.alive?Df(i,a,a.st.hp*r.heal*(Sa(e).healMult||1),e.id):zf(i,a,r.revive));ke(i,{k:"miracle",id:e.id,x:e.x,z:e.z,r:r.radius})}if(t.smoke){for(let r of i.enemies)!r.dead&&Di(r,e)<t.smoke&&(r.blindT=2.5,r.target=null);ke(i,{k:"smoke",id:e.id,x:e.x,z:e.z,r:t.smoke})}if(t.summon){let r=e.room??Uo(e.x,e.z),a=t.summon.n+(st[e.kind]?.boss?Jh(i)-1:0);for(let o=0;o<a;o++){let c=o/a*$h+i.rng()*.5,l={x:e.x+Math.cos(c)*t.summon.r,z:e.z+Math.sin(c)*t.summon.r};Zn(l,.6,i.sealed),i.enemies.filter(h=>!h.dead).length<40&&Ta(i,t.summon.kind,l.x,l.z,!1,r,!0)}ke(i,{k:"summon",id:e.id,x:e.x,z:e.z})}}function Jo(i,e,t,n,s,r){let a=st[e.kind],o=F0(e,t.x,t.z),c=e.stunT>0||e.act&&(e.act.id==="down"||e.act.id==="stun"),l=n.mult;n.lowHpScale&&(l*=1+n.lowHpScale*(1-t.hp/t.st.hp)),n.backMult&&o&&(l*=n.backMult);let h=O0(kM(t),l,e.def,{back:o,stunned:c,rng:i.rng,backBonus:Sa(t).backBonus||0}),u=h.dmg,d=!1;a.shield&&!o&&!c&&!(e.act&&e.act.id==="spawn")&&Math.cos(os(e,t)-e.face)>.3&&(u=Math.round(u*(1-a.shield)),d=!0),e.hp-=u,t.dmgDealt+=u,ke(i,{k:"dmg",tid:e.id,v:u,crit:h.crit,back:o,blocked:d,x:e.x,z:e.z,by:t.id});let f=e.act?Yo(e.act.id):null;if(n.counter&&f&&f.counterWindow&&e.act.t>=f.counterWindow[0]&&e.act.t<=f.counterWindow[1]&&(Zo(i,e.id),e.act={id:"stun",t:0,dir:e.face,done:{},hitIds:[]},ke(i,{k:"counter",id:e.id,by:t.id,x:e.x,z:e.z})),i.boss&&i.boss.id===e.id&&i.boss.gaugeMax>0&&n.stag&&(i.boss.gauge=Math.max(0,i.boss.gauge-n.stag),i.boss.gauge<=0&&XM(i,e)),e.hp<=0){FM(i,e,t);return}if(!a.boss&&!e.elite){let m=Math.atan2(e.z-r,e.x-s),b=(n.kb||0)*(d?.3:1);e.kbx+=Math.cos(m)*b*6,e.kbz+=Math.sin(m)*b*6,!(e.act&&Yo(e.act.id)?.super)&&(e.poise||0)<=0&&(!e.act||e.act.id!=="spawn")&&(Zo(i,e.id),e.act={id:"hit",t:0,dir:e.face,done:{},hitIds:[]},e.poise=.9)}}function FM(i,e,t){e.dead=!0,e.hp=0,e.deadT=0,e.act=null,Zo(i,e.id),i.stats.kills++,t&&t.kills++;let n=st[e.kind],s=Math.round(n.xp*(e.elite?br.xp:1)*xr(i.difficulty).xp);ke(i,{k:"kill",id:e.id,kind:e.kind,x:e.x,z:e.z,xp:s});let r=e.summoned?n.drop*.3:e.elite?br.drop:n.drop??0;for(let a of i.players){let o=n.boss?n.loot:i.rng()<r?1:0;for(let c=0;c<o;c++)tg(i,a,e.x,e.z,n.boss?2.2:e.elite?.7:0)}if(n.boss&&xt[e.room]?.boss){i.phase="victory",i.endT=0,i.zones=i.zones.filter(c=>c.team==="player");for(let c of i.enemies)c.dead||(c.dead=!0,c.deadT=0,c.act=null,ke(i,{k:"kill",id:c.id,kind:c.kind,x:c.x,z:c.z,xp:0}));let a=xt[e.room],o=i.chapter<In?i.chapter+1:0;i.portal={x:(a.x0+a.x1)/2*4,z:(a.z0+a.z1)/2*4+2,next:o},ke(i,{k:"victory",id:e.id,x:e.x,z:e.z,face:e.face,ch:i.chapter,next:o})}}function tg(i,e,t,n,s){let r=i.rng()*$h,a=1+i.rng()*1.8,o={x:t+Math.cos(r)*a,z:n+Math.sin(r)*a};Zn(o,.3,i.sealed);let c=xr(i.difficulty),l=Math.max(1,e.level+Math.floor(i.rng()*3)+c.ilvl),h=E0(i.rng,{ilvl:l,cls:e.cls,luck:s+c.luck});i.drops.push({id:Tr(i),owner:e.id,x:o.x,z:o.z,item:h,t:0})}function Qh(i,e,t,n,s,r,a=0,o=!1){if(!e.alive||!o&&e.hurtT>0||(e.iframeUntil||0)>i.t){(e.iframeUntil||0)>i.t&&ke(i,{k:"evade",id:e.id,x:e.x,z:e.z});return}if(o){e.shield=0,e.hp=0,e.alive=!1,e.downT=0,e.revive=0,e.act=null,e.downs++,ke(i,{k:"doom",id:e.id,x:e.x,z:e.z}),ke(i,{k:"pdown",id:e.id,x:e.x,z:e.z});return}let l=(t.st||{atk:60}).atk*n*(.9+i.rng()*.2)*(100/(100+e.st.def));for(let h of e.buffs)h.dr&&(l*=1-h.dr);if(l*=1-(Sa(e).dr||0),l=Math.round(l),e.shield>0){let h=Math.min(e.shield,l);e.shield-=h,l-=h,ke(i,{k:"shieldhit",id:e.id,v:h})}if(e.hp-=l,e.hurtT=PM,a){let h=Math.atan2(e.z-r,e.x-s);ke(i,{k:"kb",id:e.id,x:Math.cos(h)*a*5,z:Math.sin(h)*a*5}),e.local&&(e.kbx+=Math.cos(h)*a*5,e.kbz+=Math.sin(h)*a*5)}ke(i,{k:"phurt",id:e.id,v:l,x:e.x,z:e.z}),e.hp<=0&&(e.hp=0,e.alive=!1,e.downT=0,e.revive=0,e.act=null,e.downs++,ke(i,{k:"pdown",id:e.id,x:e.x,z:e.z}))}function zf(i,e,t){e.alive=!0,e.hp=Math.round(e.st.hp*t),e.downT=0,e.revive=0,e.hurtT=2,e.iframeUntil=i.t+2,ke(i,{k:"previve",id:e.id,x:e.x,z:e.z})}function OM(i,e){for(let t of i.players){if(t.alive)continue;t.downT+=e;let n=i.players.find(s=>s!==t&&s.alive&&Di(s,t)<CM);n&&(t.revive+=e,t.revive>=RM&&(n.revives++,zf(i,t,.4)))}}function Ta(i,e,t,n,s=!1,r=-1,a=!1){let o=st[e],c=Jh(i),l=xr(i.difficulty),h=(o.boss?y0(c).hp:1+.55*(c-1))*l.hp,u=Math.round(o.hp*h*(s?br.hp:1)),d={id:Tr(i),kind:e,elite:s,x:t,z:n,face:Math.PI/2,hp:u,maxHp:u,r:o.r*(s?1.2:1),st:{atk:o.atk*(s?br.atk:1)*l.atk},def:o.def,speed:o.speed,act:{id:"spawn",t:0,dir:Math.PI/2,done:{},hitIds:[]},cd:1+i.rng(),target:null,think:0,path:null,kbx:0,kbz:0,poise:0,stunT:0,blindT:0,slowT:0,dead:!1,deadT:0,room:r,summoned:a,strafe:i.rng()<.5?1:-1};return i.enemies.push(d),ke(i,{k:"espawn",id:d.id,kind:e,x:t,z:n}),o.boss&&DM(i,d),d}function ng(i,e){if(e.tauntT>0){let s=lt(i,e.tauntBy);if(s&&s.alive)return s}let t=null,n=1/0;for(let s of i.players){if(!s.alive)continue;let r=Di(s,e)-(s.id===e.target?3:0);r<n&&(st[e.kind].boss||Uo(s.x,s.z)===e.room||r<14)&&(n=r,t=s)}return t}function BM(i,e,t){if(e.dead){e.deadT+=t;return}let n=st[e.kind];e.poise>0&&(e.poise-=t),e.blindT>0&&(e.blindT-=t),e.tauntT>0&&(e.tauntT-=t,e.target!==e.tauntBy&&lt(i,e.tauntBy)?.alive&&(e.think=0)),e.slowT>0&&(e.slowT-=t),e.cd-=t;let s=0,r=0;if(n.boss){GM(i,e,t);return}if(e.act){let o=Yo(e.act.id),c=e.act.t;if(e.act.t+=t,o.move)for(let[l,h,u]of o.move)e.act.t>=l&&e.act.t<h&&(s+=Math.cos(e.face)*u,r+=Math.sin(e.face)*u);if(o.aimLock&&e.act.t<o.aimLock){let l=lt(i,e.target);l&&(e.face=os(e,l))}Yh(i,e,c,e.act.t,"enemy"),e.act&&e.act.t>=o.dur&&(e.act=null,Zo(i,e.id))}else{e.think-=t;let o=e.blindT>0?null:lt(i,e.target);if(e.think<=0&&e.blindT<=0){e.think=.4;let c=ng(i,e);e.target=c?c.id:null,o=c}if(o&&o.alive){let c=Di(e,o),l=zo(e.x,e.z,o.x,o.z,i.sealed),h=os(e,o);e.face=If(e.face,h,t*8);let u=e.speed*(e.slowT>0?.5:1);n.keep?(c<n.keep-2?(s=-Math.cos(h)*u,r=-Math.sin(h)*u):c>n.range-1||!l?V0(i,e,o,u,(d,f)=>{s=d,r=f}):(s=-Math.sin(h)*u*.5*e.strafe,r=Math.cos(h)*u*.5*e.strafe),c<n.range&&l&&e.cd<=0&&G0(i,e,o)):(c>n.range*.8&&V0(i,e,o,u*(c>8?1.25:1),(d,f)=>{s=d,r=f}),c<n.range&&e.cd<=0&&Math.abs(sg(e.face,h))<.5&&G0(i,e,o))}}s+=e.kbx,r+=e.kbz;let a=Math.exp(-t*8);e.kbx*=a,e.kbz*=a,e.vx=s,e.vz=r,e.x+=s*t,e.z+=r*t,Zn(e,e.r,i.sealed)}function V0(i,e,t,n,s){let r=t.x,a=t.z;if((!e.walkLos||e.walkLos.t<i.t)&&(e.walkLos={t:i.t+.25,ok:zo(e.x,e.z,t.x,t.z,i.sealed,e.r)}),!e.walkLos.ok){if(!e.path||e.path.t<i.t){let c=Eh(e.x,e.z,t.x,t.z,i.sealed);e.path={x:c?c.x:t.x,z:c?c.z:t.z,t:i.t+.5}}r=e.path.x,a=e.path.z}let o=Math.atan2(a-e.z,r-e.x);s(Math.cos(o)*n,Math.sin(o)*n)}function G0(i,e,t){let n=st[e.kind],s=n.attacks[Math.floor(i.rng()*n.attacks.length)],r=Cs[s];e.face=os(e,t),e.act={id:s,t:0,dir:e.face,done:{},hitIds:[],tx:t.x,tz:t.z},e.cd=r.cd*(e.elite?.7:1)*(.8+i.rng()*.5),ig(i,e,r),ke(i,{k:"eact",id:e.id,a:s})}function ig(i,e,t){(t.hits||[]).forEach((n,s)=>{if(!n.tele)return;let r=n.teleShape||n.shape,a=n.teleAt==="target",o=a?e.act.tx:e.x+Math.cos(e.face)*(n.tele==="rect"?0:n.off||0),c=a?e.act.tz:e.z+Math.sin(e.face)*(n.tele==="rect"?0:n.off||0);i.zones.push({id:Tr(i),team:"tele",owner:e.id,key:`${s}`,shape:r,x:o,z:c,dir:e.face+(n.rot||0),rot:n.rot||0,t:0,warn:n.t,dur:.15,atTarget:a,lethal:Ko(i,n)})}),t.tele&&i.zones.push({id:Tr(i),team:"tele",owner:e.id,key:"aim",shape:t.tele.shape,x:e.x,z:e.z,dir:e.face,t:0,warn:t.tele.until,dur:.05,track:!0})}function HM(i,e,t){i.zones=i.zones.filter(n=>!(n.team==="tele"&&n.owner===e&&n.key===t))}function Zo(i,e){i.zones=i.zones.filter(t=>!(t.team==="tele"&&t.owner===e))}function VM(i){let e=i.enemies;for(let t=0;t<e.length;t++){let n=e[t];if(!n.dead)for(let s=t+1;s<e.length;s++){let r=e[s];if(r.dead)continue;let a=r.x-n.x,o=r.z-n.z,c=n.r+r.r,l=a*a+o*o;if(l<c*c&&l>1e-6){let h=Math.sqrt(l),u=(c-h)/2,d=st[n.kind].boss?0:1,f=st[r.kind].boss?0:1,m=d+f||1;n.x-=a/h*u*(d/m)*2,n.z-=o/h*u*(d/m)*2,r.x+=a/h*u*(f/m)*2,r.z+=o/h*u*(f/m)*2}}}}var sg=(i,e)=>{let t=e-i;for(;t>Math.PI;)t-=$h;for(;t<-Math.PI;)t+=$h;return t};function If(i,e,t){let n=sg(i,e);return i+Math.max(-t,Math.min(t,n))}function GM(i,e,t){let n=i.boss,s=st[e.kind];if(e.act){if(e.act.id==="intro"){e.act.t+=t,e.act.t>=n.intro&&(e.act=null,e.cd=1,ke(i,{k:"boss",s:"fight",id:e.id}));return}let l=Yo(e.act.id),h=e.act.t;e.act.t+=t;let u=0,d=0;if(l.move)for(let[b,g,p]of l.move)e.act.t>=b&&e.act.t<g&&(u+=Math.cos(e.face)*p,d+=Math.sin(e.face)*p);if(l.leap){let[b,g]=l.leap,p=Math.max(0,Math.min(1,(e.act.t-b)/(g-b))),v=p*p*(3-2*p);e.x=e.act.sx+(e.act.tx-e.act.sx)*v,e.z=e.act.sz+(e.act.tz-e.act.sz)*v,e.y=Math.sin(p*Math.PI)*5}else e.y=0;let f=l.hits&&l.hits[0]?l.hits[0].t:0,m=lt(i,e.target);if(m&&e.act.t<f*.55&&!l.leap&&!l.noTrack){e.face=If(e.face,os(e,m),t*2.5);for(let b of i.zones)b.team==="tele"&&b.owner===e.id&&!b.atTarget&&(b.dir=e.face+(b.rot||0),b.x=e.x,b.z=e.z)}if(Yh(i,e,h,e.act.t,"enemy"),l.judgement&&qM(i,e,t),e.x+=u*t,e.z+=d*t,Zn(e,e.r,i.sealed),e.act&&e.act.t>=l.dur){let b=e.act.id;if(e.act=null,Zo(i,e.id),b==="down"){e.act={id:"getup",t:0,dir:e.face,done:{},hitIds:[]};return}e.cd=n.queue.length?.15:n.enraged?.7:1.3}return}let r=e.hp/e.maxHp;if(s.judgement&&!n.judged&&r<=.55){n.judged=!0,n.phase=2,n.queue=[],W0(i,e,"kg_judgement"),ke(i,{k:"boss",s:"p2",id:e.id});return}if(!s.judgement&&n.phase===1&&r<=.5&&(n.phase=2,n.queue=[],ke(i,{k:"boss",s:"phase2",id:e.id,kind:e.kind})),!n.enraged&&r<=.25&&(n.enraged=!0,ke(i,{k:"boss",s:"enrage",id:e.id,kind:e.kind})),e.think-=t,e.think<=0){e.think=.5;let l=ng(i,e);e.target=l?l.id:null}let a=lt(i,e.target);if(!a)return;let o=Di(e,a),c=os(e,a);if(e.face=If(e.face,c,t*3),e.cd>0&&!n.queue.length){let l=s.keep?o<s.keep-1?-1:o>s.keep+4?1:0:o>5?1:0;if(l){let h=s.speed*(n.enraged?1.3:1)*l;e.x+=Math.cos(c)*h*t,e.z+=Math.sin(c)*h*t,Zn(e,e.r,i.sealed),e.moving=!0}else e.moving=!1;return}if(e.moving=!1,!n.queue.length){let l=_0[s.patterns][n.phase].filter(u=>u.every(d=>(Cs[d].minDiff||1)<=i.difficulty)),h=l[Math.floor(i.rng()*l.length)];s.gap&&o>11&&i.rng()<.6&&(h=[s.gap]),h[0]===n.last&&l.length>1&&(h=l[(l.indexOf(h)+1)%l.length]),n.last=h[0],n.queue=[...h]}W0(i,e,n.queue.shift())}function W0(i,e,t){let n=Cs[t],s=lt(i,e.target)||i.players.find(r=>r.alive);if(s&&(e.face=os(e,s)),e.act={id:t,t:0,dir:e.face,done:{},hitIds:[],sx:e.x,sz:e.z,tx:s?s.x:e.x,tz:s?s.z:e.z},n.leap){let r={x:e.act.tx,z:e.act.tz};Zn(r,e.r,i.sealed),e.act.tx=r.x,e.act.tz=r.z}ig(i,e,n),((n.hits||[]).some(r=>Ko(i,r))||(n.spawns||[]).some(r=>Ko(i,r.zone)))&&ke(i,{k:"doomcast",id:e.id}),n.counterWindow&&ke(i,{k:"counterable",id:e.id,dur:n.counterWindow[1]-n.counterWindow[0]}),ke(i,{k:"eact",id:e.id,a:t})}function WM(i,e,t){let n=i.boss;n.gaugeMax=170*(1+.8*(Jh(i)-1)),n.gauge=n.gaugeMax,n.judgeT=t.time,ke(i,{k:"boss",s:"judgement",id:e.id})}function qM(i,e,t){let n=i.boss;if(!(n.gaugeMax<=0)&&(n.judgeT-=t,n.judgeT<=0)){n.gaugeMax=0;for(let s of i.players)Qh(i,s,e,Cs.kg_judgement.judgement.mult,e.x,e.z,3);ke(i,{k:"boss",s:"judgeFail",id:e.id,x:e.x,z:e.z}),e.act=null,e.cd=1.5}}function XM(i,e){let t=i.boss;t.gaugeMax=0,t.gauge=0,e.act={id:"down",t:0,dir:e.face,done:{},hitIds:[]},ke(i,{k:"boss",s:"judgeOk",id:e.id,x:e.x,z:e.z})}function jM(i,e){for(let t=i.projs.length-1;t>=0;t--){let n=i.projs[t],s=_f[n.kind];n.life-=e,n.x+=Math.cos(n.dir)*n.speed*e,n.z+=Math.sin(n.dir)*n.speed*e;let r=n.life<=0,a={x:n.x,z:n.z};if(!r&&Zn(a,.1,i.sealed)&&(r=!0),!r)if(n.team==="player"){let o=lt(i,n.owner);for(let c of i.enemies)if(!(c.dead||n.hits.includes(c.id)||(c.iframeUntil||0)>i.t)&&!(Math.hypot(c.x-n.x,c.z-n.z)>c.r+n.r)&&(n.hits.push(c.id),o&&Jo(i,c,o,{mult:n.mult,stag:s.stag,kb:s.kb},n.x-Math.cos(n.dir),n.z-Math.sin(n.dir)),!s.pierce)){r=!0;break}}else for(let o of i.players){if(!o.alive||Math.hypot(o.x-n.x,o.z-n.z)>Sr+n.r)continue;let c=i.enemies.find(l=>l.id===n.owner)||{st:{atk:70}};Qh(i,o,c,n.mult,n.x,n.z,.6),r=!0;break}if(r){if(s.explode&&n.team==="player"){let o=lt(i,n.owner);for(let c of i.enemies)!c.dead&&Math.hypot(c.x-n.x,c.z-n.z)<s.explode.r+c.r&&o&&Jo(i,c,o,s.explode,n.x,n.z);ke(i,{k:"explode",x:n.x,z:n.z,r:s.explode.r,fx:"fire"})}else ke(i,{k:"phit",x:n.x,z:n.z,kind:n.kind});i.projs.splice(t,1)}}}function $M(i,e){for(let t of[...i.zones]){if(t.gone)continue;let n=t.t;if(t.t+=e,t.track){let s=i.enemies.find(r=>r.id===t.owner);s&&(t.x=s.x,t.z=s.z,t.dir=s.face)}if(t.team==="tele"){t.t>t.warn+t.dur&&(t.gone=!0);continue}if(t.t>=t.warn){let s=n<t.warn||n===0;if(t.tickT-=e,s||t.tick&&t.tickT<=0){if(t.tickT=t.tick,s&&ke(i,{k:"zonefire",id:t.id,fx:t.fx,x:t.x,z:t.z,r:t.shape.r||t.shape.r2}),t.team==="player"&&t.heal){let r=lt(i,t.owner),a=t.heal*(r&&Sa(r).healMult||1);for(let o of i.players)o.alive&&Is(t.shape,t.x,t.z,t.dir,o.x,o.z,Sr)&&Df(i,o,o.st.hp*a,t.owner)}if(t.team==="player"&&t.mult){let r=lt(i,i.players.some(a=>a.id===t.owner)?t.owner:-1);for(let a of i.enemies)a.dead||!Is(t.shape,t.x,t.z,t.dir,a.x,a.z,a.r)||(r&&Jo(i,a,r,{mult:t.mult,stag:t.stag,kb:t.kb},t.x,t.z),t.slow&&(a.slowT=.6))}else if(t.team!=="player"){let r=i.enemies.find(a=>a.id===t.owner)||{st:{atk:70}};for(let a of i.players)a.alive&&Is(t.shape,t.x,t.z,t.dir,a.x,a.z,Sr)&&Qh(i,a,r,t.mult,t.x,t.z,t.kb,t.lethal)}}t.t>=t.warn+t.dur&&(t.gone=!0)}}i.zones=i.zones.filter(t=>!t.gone)}function YM(i,e){i.phase==="play"&&i.chapterRooms.forEach((t,n)=>{let s=xt[t],r=i.rooms[t];if(r.state==="idle"&&n>0&&i.rooms[i.chapterRooms[n-1]].state==="cleared"&&i.players.some(c=>c.alive&&KM(s,c.x,c.z))&&K0(i,t),!(r.state!=="active"||s.boss||i.enemies.some(o=>!o.dead&&o.room===t))&&(r.waveT-=e,!(r.waveT>0))){if(r.wave++,r.wave>=s.waves.length){NM(i,t);return}for(let[o,c,l,h]of s.waves[r.wave]){let u=Wn(c,l);Ta(i,o,u.x+(i.rng()-.5)*2,u.z+(i.rng()-.5)*2,!!h,t)}for(let o=1;o<Jh(i);o++){let[c,l,h]=s.waves[r.wave][o%s.waves[r.wave].length],u=Wn(l,h);Ta(i,c==="mage"||st[c].boss?"minion":c,u.x+(i.rng()-.5)*3,u.z+(i.rng()-.5)*3,!1,t)}r.waveT=1.4,ke(i,{k:"wave",i:t,n:r.wave+1,of:s.waves.length})}})}function KM(i,e,t){let n=(i.x0-.5)*4+1.5,s=(i.x1+.5)*4-1.5,r=(i.z0-.5)*4+1.5,a=(i.z1+.5)*4-1.5;return e>n&&e<s&&t>r&&t<a}function JM(i,e){for(let t=i.drops.length-1;t>=0;t--){let n=i.drops[t];n.t+=e;let s=lt(i,n.owner);if(!s){i.drops.splice(t,1);continue}s.alive&&n.t>.8&&Math.hypot(s.x-n.x,s.z-n.z)<1.8&&(i.drops.splice(t,1),ke(i,{k:"loot",pid:s.id,item:n.item}))}for(let t of i.chests)if(!(t.open||!i.players.find(s=>s.alive&&Math.hypot(s.x-t.x,s.z-t.z)<2.4))){t.open=!0,ke(i,{k:"chest",id:t.id,x:t.x,z:t.z});for(let s of i.players)for(let r=0;r<2;r++)tg(i,s,t.x,t.z+1.5,t.gold?1.2:.5)}}function Ff(i){return{cds:i.cds,potions:i.potions,feathers:i.feathers,st:i.st,combo:i.combo}}pi();mr();ss();var ag="ashen-crown-v1-",rg="ABCDEFGHJKLMNPQRSTUVWXYZ23456789",og={debug:0};function Bf(i=4){let e="";for(let t=0;t<i;t++)e+=rg[Math.random()*rg.length|0];return e}function eu(i){return String(i||"").toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,6)}function cg(){if(!window.Peer)throw new Error("\uB124\uD2B8\uC6CC\uD06C \uBAA8\uB4C8\uC744 \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. \uC778\uD130\uB137 \uC5F0\uACB0\uC744 \uD655\uC778\uD558\uC138\uC694.")}function lg(i,e=null){return cg(),new Promise((t,n)=>{let s=0,r=()=>{let a=e||Bf(),o=new window.Peer(ag+a,og),c=!1;o.on("open",()=>{c=!0,t({code:a,peer:o})}),o.on("connection",i),o.on("error",l=>{if(!c&&l.type==="unavailable-id"&&s++<5){o.destroy(),setTimeout(r,e?1500:0);return}if(!c&&l.type==="unavailable-id"){n(new Error("\uC774 \uC6D4\uB4DC\uAC00 \uC774\uBBF8 \uB2E4\uB978 \uCC3D\uC5D0\uC11C \uC5F4\uB824 \uC788\uC2B5\uB2C8\uB2E4. \uADF8 \uCC3D\uC744 \uB2EB\uACE0 \uC7A0\uC2DC \uB4A4 \uB2E4\uC2DC \uC5EC\uC138\uC694."));return}c?console.warn("[peer]",l.type,l):n(new Error(Of(l)))}),o.on("disconnected",()=>{o.destroyed||o.reconnect()})};r()})}function hg(i){return cg(),new Promise((e,t)=>{let n=new window.Peer(og),s=!1,r=o=>{s||(s=!0,n.destroy(),t(new Error(o)))},a=setTimeout(()=>r("\uC5F0\uACB0 \uC2DC\uAC04\uC774 \uCD08\uACFC\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uCF54\uB4DC\uB97C \uD655\uC778\uD558\uAC70\uB098 \uB2E4\uC2DC \uC2DC\uB3C4\uD558\uC138\uC694."),15e3);n.on("open",()=>{let o=n.connect(ag+eu(i),{reliable:!0,serialization:"json"});o.on("open",()=>{s||(s=!0,clearTimeout(a),e({peer:n,conn:o}))}),o.on("error",c=>r(Of(c)))}),n.on("error",o=>{clearTimeout(a),r(Of(o))})})}function Of(i){switch(i&&i.type){case"peer-unavailable":return"\uD574\uB2F9 \uCF54\uB4DC\uC758 \uC6D4\uB4DC\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uC6D4\uB4DC \uC8FC\uC778\uC774 \uC6D4\uB4DC\uB97C \uC5F4\uC5B4 \uB450\uC5C8\uB294\uC9C0 \uD655\uC778\uD558\uC138\uC694.";case"network":case"server-error":case"socket-error":case"socket-closed":return"\uC5F0\uACB0 \uC11C\uBC84\uC5D0 \uC811\uC18D\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uC7A0\uC2DC \uD6C4 \uB2E4\uC2DC \uC2DC\uB3C4\uD558\uC138\uC694.";case"browser-incompatible":return"\uC774 \uBE0C\uB77C\uC6B0\uC800\uB294 \uC628\uB77C\uC778 \uD611\uB3D9\uC744 \uC9C0\uC6D0\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.";case"webrtc":return"\uC0C1\uB300\uC640 \uC9C1\uC811 \uC5F0\uACB0\uD558\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4(\uB124\uD2B8\uC6CC\uD06C \uBC29\uD654\uBCBD \uAC00\uB2A5\uC131).";default:return i&&i.message||"\uC54C \uC218 \uC5C6\uB294 \uB124\uD2B8\uC6CC\uD06C \uC624\uB958"}}var ug=20,iu=4200,ZM=.1,Et=i=>Math.round(i*100)/100,QM=100,eS=.4,tu=i=>String(i??"").replace(/\s+/g," ").trim().slice(0,QM);function tS(i){return{id:i.id,cls:i.cls,spec:i.spec,look:i.look,name:i.name,x:i.x,z:i.z,y:i.y||0,face:i.face,hp:Math.max(0,Math.round(i.hp)),maxHp:i.st.hp,shield:i.shield,alive:i.alive,act:i.act?i.act.id:null,actT:i.act?i.act.t:0,moving:Math.hypot(i.vx||0,i.vz||0)>.6,speed:Math.hypot(i.vx||0,i.vz||0),downT:i.downT,revive:i.revive,tp:i.tp,level:i.level,rage:i.buffs.some(e=>e.kind==="rage")}}function nS(i,e){return{id:i.id,kind:i.kind,elite:i.elite,x:i.x,z:i.z,y:i.y||0,face:i.face,hp:Math.max(0,Math.round(i.hp)),maxHp:i.maxHp,act:i.act?i.act.id:null,actT:i.act?i.act.t:0,dead:i.dead,deadT:i.deadT,moving:i.moving??Math.hypot(i.vx||0,i.vz||0)>.4,speed:Math.hypot(i.vx||0,i.vz||0)||(i.moving?3.6:0),intro:i.act&&i.act.id==="intro",slow:i.slowT>0}}function dg(i,e){let t=i.boss&&i.enemies.find(n=>n.id===i.boss.id);return{t:i.t,phase:i.phase,endT:i.endT,difficulty:i.difficulty,chapter:i.chapter||1,rooms:i.rooms.map(n=>n.state),players:i.players.map(tS),enemies:i.enemies.map(n=>nS(n,i)),projs:i.projs.map(n=>({id:n.id,kind:n.kind,x:n.x,z:n.z,dir:n.dir,team:n.team})),zones:i.zones.map(n=>({id:n.id,team:n.team,shape:n.shape,x:n.x,z:n.z,dir:n.dir,t:n.t,warn:n.warn,dur:n.dur,fx:n.fx,lethal:n.lethal||void 0})),drops:i.drops.filter(n=>n.owner===e).map(n=>({id:n.id,x:n.x,z:n.z,rarity:n.item.rarity,name:n.item.name})),chests:i.chests.map(n=>({id:n.id,x:n.x,z:n.z,open:n.open})),portal:i.portal||null,boss:t?{id:t.id,kind:t.kind,hp:Math.max(0,Math.round(t.hp)),maxHp:t.maxHp,phase:i.boss.phase,gauge:i.boss.gauge,gaugeMax:i.boss.gaugeMax,judgeT:i.boss.judgeT,enraged:i.boss.enraged,dead:t.dead}:null}}var fg=i=>i.k==="loot"?i.pid:null,Ea=i=>({name:String(i.name||"\uBAA8\uD5D8\uAC00").slice(0,12),cls:$e[i.cls]?i.cls:"knight",spec:String(i.spec||""),look:va(i.look),level:Math.max(1,Math.min(20,i.level|0)),gear:i.gear?pg(i.gear):Object.values(i.equipped||{}).filter(Boolean)}),tc=class{constructor({profile:e,online:t,difficulty:n=1,world:s=null,handlers:r={}}){this.mode="host",this.online=t,this.h=r,this.profile=e,this.worldInfo=s,this.localId=1,this.nextPid=2,this.world=Kh(void 0,n),wa(this.world,{id:1,...Ea(e.character),local:!0}),this.peers=new Map,this.acc=0,this.snapAcc=0,this.fx=[],this.net=[],this.code=null}async open(){if(!this.online)return;let{code:e,peer:t}=await lg(n=>this.onConnection(n),this.worldInfo?.code);this.code=e,this.peer=t}onConnection(e){e.on("open",()=>{let t=this.world;if(t.players.length>=4||t.phase!=="lobby"){e.send({t:"bye",reason:t.phase!=="lobby"?"\uC6D4\uB4DC \uD30C\uD2F0\uAC00 \uB358\uC804 \uC548\uC5D0 \uC788\uC2B5\uB2C8\uB2E4. \uB300\uAE30\uC2E4\uB85C \uB3CC\uC544\uC624\uBA74 \uB2E4\uC2DC \uCC38\uAC00\uD558\uC138\uC694.":"\uC6D4\uB4DC\uAC00 \uAC00\uB4DD \uCC3C\uC2B5\uB2C8\uB2E4 (\uCD5C\uB300 4\uBA85)."}),setTimeout(()=>e.close(),300);return}let n={conn:e,pid:0};this.peers.set(e.peer,n),e.on("data",s=>this.onMessage(n,s)),e.on("close",()=>this.dropPeer(e.peer)),e.on("error",()=>this.dropPeer(e.peer))})}onMessage(e,t){if(!t||typeof t!="object")return;let n=this.world;if(t.t==="hello"&&!e.pid){e.joining||(e.joining=!0,this.admit(e,t).finally(()=>{e.joining=!1}));return}if(e.pid)switch(t.t){case"m":Z0(n,e.pid,t);break;case"c":{let s=lt(n,e.pid);if(!s)break;t.k in s.cds&&s.cds[t.k]<.3&&(s.cds[t.k]=0),s.alive&&s.act&&t.k!=="potion"&&(s.act=null);let r=Oo(s.cls,s.spec);t.k==="basic"&&r.includes(t.a)&&(s.combo=r.indexOf(t.a),s.comboT=s.combo?.01:-1),Q0(n,e.pid,t.k,+t.ax,+t.az);break}case"gear":{let s=Math.max(1,Math.min(20,t.level|0)),r=pg(t.gear);Lf(n,e.pid,s,r),Object.assign(e.char,{level:s,gear:r});break}case"char":{if(n.phase!=="lobby")break;e.char=Ea(t),kf(n,e.pid,e.char),this.broadcastRoster();break}case"progress":this.worldInfo&&e.uid&&t.data&&typeof t.data=="object"&&this.worldInfo.save(e.uid,e.char.name,t.data);break;case"ping":e.conn.send({t:"pong",c:t.c});break;case"ready":this.portalOpen&&!this.portalGo&&(this.portalReady.add(e.pid),this.broadcastPortal());break;case"chat":{let s=performance.now()/1e3;if(s-(e.chatT||0)<eS)break;e.chatT=s,this.say(e.pid,t.text);break}}}say(e,t){let n=lt(this.world,e),s=tu(t);n&&s&&this.relayChat({id:e,name:n.name,cls:n.cls,text:s})}relayChat(e){for(let t of this.peers.values())if(t.pid)try{t.conn.send({t:"chat",...e})}catch{}this.h.onChat?.(e)}chat(e){this.say(this.localId,e)}async admit(e,t){let n=l=>{try{e.conn.send({t:"bye",reason:l})}catch{}setTimeout(()=>e.conn.close(),300)},s=this.worldInfo;if(!s)return n("\uC774 \uD30C\uD2F0\uB294 \uCC38\uAC00\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.");if(!await s.verify(t.password))return n("\uBE44\uBC00\uBC88\uD638\uAC00 \uD2C0\uB838\uC2B5\uB2C8\uB2E4.");let r=String(t.uid||"").slice(0,40);if(r.length<8||r===this.profile.uid||[...this.peers.values()].some(l=>l!==e&&l.uid===r))return n("\uAC19\uC740 \uBE0C\uB77C\uC6B0\uC800\uC758 \uCE90\uB9AD\uD130\uAC00 \uC774\uBBF8 \uC774 \uC6D4\uB4DC\uC5D0 \uC811\uC18D\uD574 \uC788\uC2B5\uB2C8\uB2E4.");let a=this.world;if(a.phase!=="lobby")return n("\uC6D4\uB4DC \uD30C\uD2F0\uAC00 \uB358\uC804 \uC548\uC5D0 \uC788\uC2B5\uB2C8\uB2E4. \uB300\uAE30\uC2E4\uB85C \uB3CC\uC544\uC624\uBA74 \uB2E4\uC2DC \uCC38\uAC00\uD558\uC138\uC694.");if(a.players.length>=4)return n("\uC6D4\uB4DC\uAC00 \uAC00\uB4DD \uCC3C\uC2B5\uB2C8\uB2E4 (\uCD5C\uB300 4\uBA85).");if(!this.peers.has(e.conn.peer))return;let o=String(t.name||"\uBAA8\uD5D8\uAC00").slice(0,12),c=s.progressFor(r,o);s.save(r,o,c),e.uid=r,e.pid=this.nextPid++,e.char=Ea({...c.chars[c.current],name:o}),wa(a,{id:e.pid,...e.char}),e.conn.send({t:"welcome",pid:e.pid,seed:a.seed,world:{name:s.name,code:s.code},progress:c}),this.broadcastRoster(),this.relayChat({sys:!0,text:`${e.char.name} \uB2D8\uC774 \uC6D4\uB4DC\uC5D0 \uB4E4\uC5B4\uC654\uC2B5\uB2C8\uB2E4`})}setChar(e){kf(this.world,this.localId,Ea(e)),this.broadcastRoster()}backToLobby(){let e=this.world;this.world=Kh(void 0,e.difficulty),wa(this.world,{id:this.localId,...Ea(this.profile.character),local:!0});for(let t of this.peers.values())t.pid&&wa(this.world,{id:t.pid,...t.char});this.fx=[],this.net=[],this.acc=0;for(let t of this.peers.values())if(t.pid)try{t.conn.send({t:"lobby"})}catch{}this.broadcastRoster()}dropPeer(e){let t=this.peers.get(e);if(t&&(this.peers.delete(e),t.pid)){let n=lt(this.world,t.pid);j0(this.world,t.pid),this.broadcastRoster(),n&&this.relayChat({sys:!0,text:`${n.name} \uB2D8\uC774 \uB5A0\uB0AC\uC2B5\uB2C8\uB2E4`})}}roster(){return this.world.players.map(e=>({id:e.id,name:e.name,cls:e.cls,spec:e.spec,level:e.level,host:e.id===1}))}broadcastRoster(){let e=this.roster(),t=this.world.difficulty;for(let n of this.peers.values())n.pid&&n.conn.send({t:"roster",r:e,d:t});this.h.onRoster?.(e,t)}setDifficulty(e){Y0(this.world,e),this.broadcastRoster()}get difficulty(){return this.world.difficulty}start(){Uf(this.world);for(let e of this.peers.values())e.pid&&e.conn.send({t:"start"})}cast(e,t,n){let s=this.world,r=lt(s,this.localId);return wr(s,this.localId,e,t,n)}setGear(e,t){Lf(this.world,this.localId,e,t)}update(e,t){let n=this.world,s=lt(n,this.localId);for(s&&Object.assign(s.input,{mx:t.mx,mz:t.mz,ax:t.ax,az:t.az,attack:t.attack}),this.acc+=Math.min(e,.25);this.acc>=Qo;)J0(n,Qo),this.acc-=Qo;let r=q0(n);for(let a of r){let o=fg(a);(o===null||o===this.localId)&&this.fx.push(a)}this.peers.size&&this.net.push(...r),this.stepPortal(),this.snapAcc+=e,this.snapAcc>=1/ug&&(this.snapAcc%=1/ug,this.sendSnapshots())}stepPortal(){let e=this.world,t=e.portal;if(e.phase!=="victory"||!t||this.portalGo)return;let n=lt(e,this.localId),s=!!n&&Math.hypot(n.x-t.x,n.z-t.z)<2.2;s!==!!this.portalOpen&&(this.portalOpen=s,this.portalReady=new Set,this.broadcastPortal()),s&&this.memberIds().every(r=>this.portalReady.has(r))&&this.goPortal()}memberIds(){return this.world.players.filter(e=>e.id!==this.localId).map(e=>e.id)}broadcastPortal(e={}){let t={t:"portal",s:this.portalGo?"go":this.portalOpen?"wait":"idle",ready:[...this.portalReady||[]],need:this.memberIds(),next:this.world.portal?.next??0,...e};for(let n of this.peers.values())if(n.pid)try{n.conn.send(t)}catch{}this.h.onPortal?.(t)}goPortal(){this.portalGo=!0,this.broadcastPortal();let e=this.world.portal.next;setTimeout(()=>e?this.enterChapter(e):this.finishRun(),iu)}enterChapter(e){let t=this.world;this.world=Kh(void 0,e);for(let n of t.players)wa(this.world,{id:n.id,...n.id===this.localId?Ea(this.profile.character):this.peerChar(n.id),local:n.id===this.localId});Uf(this.world),this.fx=[],this.net=[],this.acc=0,this.portalOpen=!1,this.portalGo=!1,this.portalReady=new Set;for(let n of this.peers.values())if(n.pid)try{n.conn.send({t:"next"})}catch{}this.broadcastRoster(),this.h.onNext?.()}peerChar(e){return[...this.peers.values()].find(t=>t.pid===e)?.char}finishRun(){for(let e of this.peers.values())if(e.pid)try{e.conn.send({t:"finish"})}catch{}this.h.onFinish?.()}sendSnapshots(){if(!this.peers.size)return;let e=this.world,t=this.net.splice(0);for(let n of this.peers.values()){if(!n.pid)continue;let s=lt(e,n.pid);if(!s)continue;let r=dg(e,n.pid),a=t.filter(o=>{let c=fg(o);return c===null||c===n.pid});try{n.conn.send({t:"s",v:iS(r),ev:a,me:Ff(s)})}catch{}}}takeEvents(){return this.fx.splice(0)}me(){return Ff(lt(this.world,this.localId))}self(){return lt(this.world,this.localId)}view(){return dg(this.world,this.localId)}get phase(){return this.world.phase}leave(){for(let e of this.peers.values())try{e.conn.send({t:"bye",reason:"\uD30C\uD2F0\uC7A5\uC774 \uAC8C\uC784\uC744 \uC885\uB8CC\uD588\uC2B5\uB2C8\uB2E4."})}catch{}setTimeout(()=>this.peer?.destroy(),200)}};function pg(i){return Array.isArray(i)?i.slice(0,4).filter(e=>e&&typeof e.stats=="object").map(e=>{let t={};for(let n of["str","dex","int","vit","atk","hp","crit","critDmg","haste","def"]){if(!Number.isFinite(e.stats[n]))continue;let s=["crit","critDmg","haste"].includes(n)?1:["str","dex","int","vit"].includes(n)?500:5e3;t[n]=Math.max(0,Math.min(s,e.stats[n]))}return{stats:t}}):[]}function iS(i){for(let e of i.players)e.x=Et(e.x),e.z=Et(e.z),e.y=Et(e.y),e.face=Et(e.face),e.actT=Et(e.actT),e.speed=Et(e.speed);for(let e of i.enemies)e.x=Et(e.x),e.z=Et(e.z),e.y=Et(e.y),e.face=Et(e.face),e.actT=Et(e.actT),e.deadT=Et(e.deadT),e.speed=Et(e.speed);for(let e of i.projs)e.x=Et(e.x),e.z=Et(e.z),e.dir=Et(e.dir);for(let e of i.zones)e.x=Et(e.x),e.z=Et(e.z),e.dir=Et(e.dir),e.t=Et(e.t);return i.t=Math.round(i.t*1e3)/1e3,i}var nu=class{constructor({profile:e,code:t,password:n="",handlers:s={}}){this.mode="client",this.h=s,this.profile=e,this.code=t,this.password=n,this.worldMeta=null,this.localId=0,this.snaps=[],this.pending=[],this.fx=[],this.offset=null,this.priv=null,this.rosterList=[],this.difficulty=1,this.phaseName="lobby",this.sendAcc=0,this.ping=0}async open(){let{peer:e,conn:t}=await hg(this.code);this.peer=e,this.conn=t,await new Promise((s,r)=>{let a=setTimeout(()=>r(new Error("\uD30C\uD2F0\uC7A5\uC758 \uC751\uB2F5\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.")),1e4);t.on("data",o=>{o&&o.t==="welcome"?(clearTimeout(a),this.localId=o.pid,this.worldMeta=o.world||null,this.h.onWelcome?.(o),s()):o&&o.t==="bye"?(clearTimeout(a),r(new Error(o.reason))):this.onMessage(o)}),t.on("close",()=>this.onClose("\uD30C\uD2F0\uC7A5\uACFC\uC758 \uC5F0\uACB0\uC774 \uB04A\uC5B4\uC84C\uC2B5\uB2C8\uB2E4.")),t.send({t:"hello",uid:this.profile.uid,password:this.password,name:this.profile.character.name})});let n=this.profile.character;this.me_={id:this.localId,cls:n.cls,spec:n.spec,x:0,z:0,y:0,vx:0,vz:0,face:0,alive:!0,act:null,combo:0,comboT:0,cds:{q:0,w:0,e:0,r:0,dodge:0,potion:0},potions:3,buffs:[],slowT:0,kbx:0,kbz:0,st:{speed:$e[n.cls].base.speed,hp:1},hp:1,input:{mx:0,mz:0},tp:-1},this.pingTimer=setInterval(()=>{try{this.conn.send({t:"ping",c:performance.now()})}catch{}},2e3)}onClose(e){this.closed||(this.closed=!0,clearInterval(this.pingTimer),this.h.onDisconnect?.(e))}onMessage(e){if(e)switch(e.t){case"roster":this.rosterList=e.r,this.difficulty=Math.max(1,Math.min(10,e.d|0)),this.h.onRoster?.(e.r,this.difficulty);break;case"start":this.h.onStart?.();break;case"bye":this.onClose(e.reason);break;case"pong":this.ping=Math.round(performance.now()-e.c);break;case"s":this.onSnapshot(e);break;case"lobby":this.onLobby();break;case"portal":this.h.onPortal?.(e);break;case"next":this.onNext();break;case"finish":this.h.onFinish?.();break;case"chat":{let t=tu(e.text);t&&this.h.onChat?.({id:e.id|0,name:tu(e.name).slice(0,12),cls:e.cls,sys:!!e.sys,text:t});break}}}onSnapshot(e){let t=e.v,n=this.phaseName==="lobby"&&t.phase!=="lobby";n&&(this.offset=null,this.snaps=[],this.pending=[]);let r=performance.now()/1e3-t.t;this.offset=this.offset===null||r<this.offset?r:this.offset+.0015,t.pmap=new Map(t.players.map(c=>[c.id,c])),t.emap=new Map(t.enemies.map(c=>[c.id,c])),this.snaps.push(t),this.snaps.length>30&&this.snaps.shift(),this.priv=e.me,t.phase!==this.phaseName&&(this.phaseName=t.phase,n&&this.h.onStart?.()),e.ev?.length&&this.pending.push({t:t.t,ev:e.ev});let a=t.pmap.get(this.localId),o=this.me_;if(a&&o){(a.tp!==o.tp||!a.alive)&&(o.x=a.x,o.z=a.z,o.vx=o.vz=0,o.tp=a.tp,a.alive||(o.act=null)),o.alive=a.alive,o.hp=a.hp,o.st={...o.st,...e.me.st},o.potions=e.me.potions;for(let c in e.me.cds)e.me.cds[c]>o.cds[c]+.5&&(o.cds[c]=e.me.cds[c])}this.sealed=No(t.rooms)}renderTime(){return this.offset===null?0:performance.now()/1e3-this.offset-ZM}cast(e,t,n){let s=this.me_;if(!s)return null;if(!s.alive)return e==="potion"&&this.send({t:"c",k:e,ax:t,az:n}),null;let r=ec(s,e,t,n);return r&&(this.send({t:"c",k:e,a:r.id,ax:Et(t),az:Et(n)}),this.fx.push({k:"act",id:this.localId,a:r.id,dir:r.dir,local:!0})),r}setGear(e,t){this.send({t:"gear",level:e,gear:t})}setChar(e){this.send({t:"char",name:e.name,cls:e.cls,spec:e.spec,look:e.look,level:e.level,gear:Object.values(e.equipped).filter(Boolean)}),this.me_&&(this.me_.cls=e.cls,this.me_.spec=e.spec,this.me_.st={...this.me_.st,speed:$e[e.cls].base.speed})}syncProgress(e){this.pendingProgress=e,!this.progressT&&(this.progressT=setTimeout(()=>{this.progressT=null,this.send({t:"progress",data:this.pendingProgress})},400))}ready(){this.send({t:"ready"})}onNext(){this.snaps=[],this.pending=[],this.offset=null;let e=this.me_;if(e){e.act=null,e.alive=!0,e.tp=-1,e.vx=e.vz=e.kbx=e.kbz=0;for(let t in e.cds)e.cds[t]=0}this.h.onNext?.()}onLobby(){this.phaseName="lobby",this.snaps=[],this.pending=[],this.offset=null;let e=this.me_;if(e){e.act=null,e.alive=!0,e.tp=-1,e.vx=e.vz=e.kbx=e.kbz=0;for(let t in e.cds)e.cds[t]=0}this.h.onLobby?.()}chat(e){let t=tu(e);t&&this.send({t:"chat",text:t})}send(e){try{this.conn.send(e)}catch{}}update(e,t){let n=this.renderTime();for(;this.pending.length&&this.pending[0].t<=n+.03;)for(let r of this.pending.shift().ev)r.k==="act"&&r.id===this.localId||(r.k==="kb"&&r.id===this.localId&&this.me_&&(this.me_.kbx+=r.x,this.me_.kbz+=r.z),this.fx.push(r));let s=this.me_;!s||!this.snaps.length||(s.input=t,this.phaseName==="lobby"?Nf(s,t,e):(s.alive&&t.attack&&(!s.act||Ot[s.act.id].combo!==void 0)&&this.cast("basic",t.ax,t.az),Zh(s,t,e,this.sealed||[])),this.sendAcc+=e,this.sendAcc>=1/30&&(this.sendAcc=0,this.send({t:"m",x:Et(s.x),z:Et(s.z),y:Et(s.y||0),f:Et(s.face),tp:s.tp})))}takeEvents(){return this.fx.splice(0)}me(){return this.priv?{...this.priv,cds:this.me_.cds,potions:this.me_.potions}:null}self(){return this.me_}get phase(){return this.phaseName}roster(){return this.rosterList}view(){let e=this.snaps;if(!e.length)return null;let t=this.renderTime(),n=e[e.length-1],s=n;for(let m=e.length-1;m>0;m--)if(e[m-1].t<=t){n=e[m-1],s=e[m];break}let r=s.t>n.t?Math.max(0,Math.min(1,(t-n.t)/(s.t-n.t))):1,a=(m,b)=>m+(b-m)*r,o=(m,b)=>{let g=b-m;for(;g>Math.PI;)g-=Math.PI*2;for(;g<-Math.PI;)g+=Math.PI*2;return m+g*r},c=Math.max(0,t-s.t),l=s.players.map(m=>{let b=n.pmap.get(m.id)||m;if(m.id===this.localId){let p=this.me_;return{...m,x:p.x,z:p.z,y:p.y||0,face:p.face,act:p.alive?p.act?.id??null:null,actT:p.act?.t??0,moving:Math.hypot(p.vx,p.vz)>.6,speed:Math.hypot(p.vx,p.vz)}}let g=b.tp===m.tp;return{...m,x:g?a(b.x,m.x):m.x,z:g?a(b.z,m.z):m.z,y:a(b.y,m.y),face:o(b.face,m.face),actT:m.act?m.actT+(m.act===b.act,0)+c:0}}),h=s.enemies.map(m=>{let b=n.emap.get(m.id);return b?{...m,x:a(b.x,m.x),z:a(b.z,m.z),y:a(b.y,m.y),face:o(b.face,m.face),actT:m.act&&b.act===m.act?a(b.actT,m.actT):m.actT}:m}),u=e[e.length-1],d=performance.now()/1e3-this.offset,f=u.projs.map(m=>{let b=Math.min(.2,d-u.t),g=22;return{...m,x:m.x+Math.cos(m.dir)*g*b,z:m.z+Math.sin(m.dir)*g*b}});return{...s,t:a(n.t,s.t),players:l,enemies:h,projs:f,zones:u.zones,drops:u.drops,chests:u.chests,boss:u.boss,phase:u.phase,rooms:u.rooms,endT:u.endT}}leave(){this.closed=!0,clearInterval(this.pingTimer),this.progressT&&(clearTimeout(this.progressT),this.progressT=null,this.send({t:"progress",data:this.pendingProgress})),setTimeout(()=>{try{this.conn?.close()}catch{}},150),setTimeout(()=>this.peer?.destroy(),350)}};pi();mr();Uh();function mg(i,e){let t=lt(i,e);if(!t)return;let n=t.input;if(n.attack=!1,n.mx=0,n.mz=0,!t.alive){wr(i,e,"potion",t.x,t.z);return}for(let l of i.zones)if(!(l.team!=="tele"&&l.team!=="enemy")&&l.t>l.warn-.45&&l.t<l.warn&&Is(l.shape,l.x,l.z,l.dir,t.x,t.z,.6)){let h=Math.atan2(t.z-l.z,t.x-l.x)+(l.shape.type==="donut"?Math.PI:0);n.mx=Math.cos(h),n.mz=Math.sin(h),wr(i,e,"dodge",t.x+n.mx*5,t.z+n.mz*5);return}let s=i.players.find(l=>!l.alive&&l!==t),r=null,a=i.enemies.filter(l=>!l.dead&&!(l.act&&l.act.id==="spawn")),o=null,c=1/0;for(let l of a){let h=Math.hypot(l.x-t.x,l.z-t.z);h<c&&(c=h,o=l)}if(s&&(!o||c>6))r=s;else if(o&&c<30){let l=t.cls==="mage"||t.cls==="archer",h=l?7:1.8+o.r;if(c>h?r=o:l&&c<4&&(n.mx=t.x-o.x,n.mz=t.z-o.z),n.ax=o.x,n.az=o.z,c<h+1.5){n.attack=!0;for(let u of["r","q","w","e"])if(t.cds[u]<=0&&i.rng()<.3&&wr(i,e,u,o.x,o.z))break;t.hp<t.st.hp*.45&&wr(i,e,"potion",t.x,t.z)}}else{let l=(i.chapterRooms||[]).find(h=>i.rooms[h].state!=="cleared")??-1;if(l>=0){let h=xt[l];r=Wn((h.x0+h.x1)/2,(h.z0+h.z1)/2)}}if(r&&!n.mx&&!n.mz){let l=r.x,h=r.z;if(!zo(t.x,t.z,l,h,i.sealed,.6)){let m=Eh(t.x,t.z,l,h,i.sealed);m&&(l=m.x,h=m.z)}let u=l-t.x,d=h-t.z,f=Math.hypot(u,d);f>.6&&(n.mx=u/f,n.mz=d/f)}}var bg="ashen.worlds.v1",Hf=16,su=24,nc=6,gg=12;function ic(){try{let i=JSON.parse(localStorage.getItem(bg)||"{}");return i&&typeof i=="object"?i:{}}catch{return{}}}function Vf(i){try{localStorage.setItem(bg,JSON.stringify(i))}catch{}}async function xg(i){let e=new TextEncoder().encode(`ashen-crown:${i}`),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t),n=>n.toString(16).padStart(2,"0")).join("")}function vg(){return Object.values(ic()).sort((i,e)=>(e.lastPlayed||0)-(i.lastPlayed||0))}var ru=i=>ic()[i]||null;async function _g(i,e){let t=ic();if(Object.keys(t).length>=gg)throw new Error(`\uC6D4\uB4DC\uB294 \uCD5C\uB300 ${gg}\uAC1C\uAE4C\uC9C0 \uB9CC\uB4E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`);let n=new Set(Object.values(t).map(a=>a.code)),s;do s=Bf(nc);while(n.has(s));let r={id:s,code:s,name:String(i).trim().slice(0,Hf)||"\uC774\uB984 \uC5C6\uB294 \uC6D4\uB4DC",pass:e?await xg(e):"",created:Date.now(),lastPlayed:Date.now(),members:{}};return t[r.id]=r,Vf(t),r}function yg(i){let e=ic();delete e[i],Vf(e)}async function Mg(i,e){return!i.pass||i.pass===await xg(String(e||"").slice(0,su))}function Gf(i,e,t){let n=i.members[e];return jo(n?.progress,n?.name||t)}function Wf(i,e,t,n){let s=ic(),r=s[i];r&&(r.members[e]={name:String(t||"").slice(0,12),progress:jo(n,t),seen:Date.now()},r.lastPlayed=Date.now(),Vf(s))}ss();var Lt=(i,e=document)=>e.querySelector(i),ni=Lt("#ui"),ae=P0(),an=new Oh,fe=new mh(Lt("#game")),Rr=new vh,rc=new Bh(Lt("#game"));ni.innerHTML='<div class="screen loading"><div class="logo"><span class="k">\uC7BF\uBE5B \uC655\uAD00</span><span class="e">ASHEN CROWN</span></div><div class="lbar"><i></i></div><p class="lt">\uC9C0\uD558\uBB18\uC9C0\uB85C \uB0B4\uB824\uAC00\uB294 \uC911\u2026</p></div>';await Rr.load(i=>{let e=Lt(".lbar i");e&&(e.style.width=Math.round(i*100)+"%")});var kt=new yh(fe),Cr=new Rh(fe,Rr,kt),Dn=new Gh(document.body,{profile:ae,engine:fe,audio:an,onGear:()=>on.session&&on.pushGear(),onMenu:()=>Og()}),Re=null,cn="menu",ti=null,on=new Xh({engine:fe,assets:Rr,vfx:kt,level:Cr,audio:an,hud:Dn,input:rc,profile:ae,onEnd:Fg}),cs=new Wh({onSend:i=>Re?.chat?.(i)}),Cg=i=>{cs.add(i,Re?.localId),i.sys||an.play("ui",{})};rc.onMoveOrder=(i,e)=>{kt.ring(i,e,.9,"#9fe0ff",.35,.2)};function Pg(){let i=ae.settings;an.setVolume("master",i.master),an.setVolume("music",i.music),an.setVolume("sfx",i.sfx),fe.setQuality(i.quality)}Pg();async function sS(){let{playerActor:i,enemyActor:e}=await Promise.resolve().then(()=>(Fh(),S0)),t=[],n=kn.x,s=kn.z-4,r=(c,l,h)=>{c.position.set(n+l,0,s+h),fe.scene.add(c),t.push(c)};[...ei.map(c=>[c]),["archer","ranger"]].forEach(([c,l],h)=>{let u=i(Rr,c,l);u.addXray("#ffd98a"),u.play("Idle"),u.mixer.update(.01),r(u.root,h*1.5-2,0)});for(let[c,l]of[["minion"],["warrior",!0],["archer"],["mage"],["priest"],["warden"],["king"]]){let h=e(Rr,c,l);h.play("Idle_Combat"),h.mixer.update(.01),r(h.root,(Math.random()-.5)*6,3)}for(let c of[kt.arc(n,1,s,0,3,2,"#ffd98a"),kt.ring(n,s,3,"#ffcf6a"),kt.beam(n,s,"#ffd27a",4,1,.5)])kt.keep(c);kt.bolt(n,s),kt.spark(n,1,s,{n:4}),kt.smoke(n,1,s,{n:2}),kt.flash(n,2,s,"#fff",1,5,.05);for(let[c,l]of[{type:"circle",r:3},{type:"cone",r:3,ang:1},{type:"rect",len:4,w:1},{type:"donut",r:2,r2:5}].entries())kt.keep(kt.decal({id:-1-c,shape:l,x:n,z:s,dir:0,t:.1,warn:1,dur:.1,team:c%2?"tele":"player"},0));fe.heroLight.userData.follow=t[0],fe.snap(n,s);for(let c of Cr.seals)c.mesh.visible=!0;let a=new Oe(new $s(.3),new Qt({color:"#fff",emissive:"#fff",emissiveIntensity:1.6,metalness:.3,roughness:.3})),o=new Oe(new Ys(.3),new yt({color:"#fff"}));r(a,1,1),r(o,-1,1),kt.update(.016),fe.render(.016,0),fe.render(.016,.016);for(let c of t)fe.scene.remove(c);for(let c of Cr.seals)c.mesh.visible=!1;fe.heroLight.userData.follow=null,kt.sweepDecals(),kt.sweepDecals(),kt.clearTransient()}var Ht=Mr,vt={actors:[],t:0,group:new wt};{let i=new Vn("#ff8a3a",40,18,1.6);i.position.set(Ht.x,1.4,Ht.z),fe.scene.add(i),vt.fireLight=i;for(let e=0;e<7;e++){let t=e/7*Math.PI*2,n=Rr.prop(e%2?"h_bone_A":"d_rubble_half");n.position.set(Ht.x+Math.cos(t)*1.1,0,Ht.z+Math.sin(t)*1.1),n.scale.setScalar(.22),vt.group.add(n)}fe.scene.add(vt.group),vt.emitter=kt.emitter({rate:60,emit:e=>{e.fire(Ht.x,.3,Ht.z,1.6,"#ff7a26"),Math.random()<.3&&e.fire(Ht.x,.5,Ht.z,1.1,"#ffb050")}}),ei.forEach((e,t)=>Ig(t))}function Ig(i){let e=ei[i],t=Vo(Rr,e,ae.chars[e].spec,ae.chars[e].look),n=-Math.PI/2+(i-(ei.length-1)/2)*.56,s=Ht.x+Math.cos(n+Math.PI)*-3.2,r=Ht.z+Math.sin(n+Math.PI)*-3.2;t.root.position.set(s,0,r),t.root.rotation.y=Math.atan2(Ht.x-s,Ht.z-r),t.root.visible=vt.actors[i]?.root.visible??!0,vt.actors[i]&&vt.group.remove(vt.actors[i].root),vt.group.add(t.root),vt.actors[i]=t}function rS(i,e){if(vt.t+=i,vt.fireLight.intensity=40*(1+Math.sin(e*11)*.08+Math.sin(e*23)*.06),cn==="lobby"&&Re)return aS(i,e);vt.actors.forEach((a,o)=>{let c=ae.chars[a.cls];if(a.spec!==Ct(a.cls,c.spec).id)Ig(o);else{let l=pr(c.look,a.cls);a.lookKey!==Bo(l)&&_a(a,$e[a.cls].model,l)}});for(let a of vt.actors){let o=a.cls===ae.current;a.animate({act:null,moving:!1},i,o?{idle:$e[a.cls].idle}:{idle:"Sit_Floor_Idle"}),o&&a.cheer>0&&(a.cheer-=i,a.play("Cheer",{loop:!1}))}let t=!Dn.root.classList.contains("hidden");cs.tagNames(t?[]:vt.actors.map(a=>({id:"camp:"+a.cls,name:$e[a.cls].name,cls:a.cls,actor:a,me:a.cls===ae.current})),fe);let n=vt.actors.find(a=>a.cls===ae.current);if(vt.editing&&n){fe.faceYaw=Math.PI/2-n.root.rotation.y,fe.follow(n.root.position.x-1.1,n.root.position.z,i),Cr.update(i,e,["idle","idle","idle","idle","idle"],Ht),kt.update(i),fe.render(i,e);return}fe.faceYaw=null;let s=n?n.root.position.x*.6+Ht.x*.4:Ht.x,r=n?n.root.position.z*.6+Ht.z*.4:Ht.z;fe.follow(s-4.2,r-.5,i),Cr.update(i,e,["idle","idle","idle","idle","idle"],Ht),kt.update(i),fe.render(i,e)}function aS(i,e){let t=on.lobbyFrame(i),n=on.lastView;if(t){let s=1-fe.zoom,r=innerWidth>900?4*s:0;fe.follow(t.x*(1-.3*s)+Ht.x*.3*s-r,t.z*(1-.3*s)+(Ht.z+1)*.3*s,i),fe.faceYaw=t.face}n&&cs.update(i,n.players,on.pActors,fe,Re.localId),Cr.update(i,e,["idle","idle","idle","idle","idle"],t||Ht),kt.update(i),fe.render(i,e)}function kg(i){for(let e of vt.actors)e.root.visible=i}function Xf(){fe.camOffset.set(0,7.5,12.5),fe.zoom=fe.zoomTo=0,fe.faceYaw=null,fe.snap(Ht.x-2,Ht.z),vt.group.visible=!0,vt.emitter.dead=!1,kt.emitters.includes(vt.emitter)||kt.emitters.push(vt.emitter),an.setMusic("menu")}function oS(){fe.camOffset.set(0,19,13.5),vt.fireLight.intensity=0,vt.group.visible=!1,vt.emitter.dead=!0}function Ni(i,e=2600){let t=Lt(".toast");t||(t=document.createElement("div"),t.className="toast",document.body.appendChild(t)),t.textContent=i,t.classList.add("show"),clearTimeout(Ni.h),Ni.h=setTimeout(()=>t.classList.remove("show"),e)}function Aa(i,e,t=[{label:"\uD655\uC778",primary:!0}]){let n=document.createElement("div");n.className="modal",n.innerHTML=`<div class="mcard"><h3>${i}</h3><div class="mbody">${e}</div><div class="row"></div></div>`;for(let s of t){let r=document.createElement("button");r.className="btn "+(s.primary?"primary":"ghost"),r.textContent=s.label,r.onclick=()=>{n.remove(),s.fn?.()},Lt(".row",n).appendChild(r)}document.body.appendChild(n)}function Lg(i,e,t,n=!1){let s=xr(i),r=(o,c)=>n?"":`<button class="dstep" data-act="${t}${o}" ${c?"disabled":""} aria-label="${o==="-"?"\uC774\uC804":"\uB2E4\uC74C"} \uCC55\uD130">${o==="-"?"\u25C0":"\u25B6"}</button>`,a=e>=In?` \xB7 ${In+1}~${is}\uC7A5\uC740 \uC900\uBE44 \uC911`:"";return`<div class="diff-pick"><span class="dl">\uCC55\uD130</span>${r("-",i<=1)}<b>${i}</b>${r("+",i>=e)}<span class="dch">${Zt[ba(i)].name}</span><em>${n?"\uC6D4\uB4DC \uC8FC\uC778\uC774 \uC815\uD569\uB2C8\uB2E4 \xB7 ":`\uAC1C\uBC29 ${e} / ${In}\uC7A5 (\uC5BC\uB9AC \uC561\uC138\uC2A4)${a} \xB7 `}\uC801 \uCCB4\uB825 \xD7${s.hp.toFixed(1)} \xB7 \uACF5\uACA9\uB825 \xD7${s.atk.toFixed(2)}</em></div>`}function cS(){let i=ut(ae).name&&!/^모험가\d+$/.test(ut(ae).name)?ut(ae).name:"";ni.innerHTML=`
    <div class="screen menu">
      <div class="menu-left">
        <div class="logo"><span class="k">\uC7BF\uBE5B \uC655\uAD00</span><span class="e">ASHEN CROWN</span></div>
        <p class="tagline">${pf}</p>
        <div class="nick">
          <p class="nick-q">\uBE44\uC11D\uC5D0 \uC0C8\uAE38 \uC774\uB984\uC740...</p>
          <input id="nick" maxlength="${_r}" placeholder="${Xo}~${_r}\uC790" value="${Bt(i)}" autocomplete="off" spellcheck="false" />
          <p class="nick-err"></p>
          <p class="note">\uBB34\uB364\uC774 \uC5F4\uB9AC\uB294 \uBC24, \uBB18\uC5ED\uC73C\uB85C \uB0B4\uB824\uAC00\uB294 \uC790\uB294 \uBAA8\uB450 \uC785\uAD6C\uC758 \uBE44\uC11D\uC5D0 \uC774\uB984\uC744 \uB0A8\uAE41\uB2C8\uB2E4. \uC774 \uC774\uB984\uC740 \uD30C\uD2F0\uC6D0\uB4E4\uC5D0\uAC8C \uBD88\uB9AC\uACE0, \uD6D7\uB0A0 \uBA85\uC608\uC758 \uC804\uB2F9\uC5D0\uB3C4 \uC0C8\uACA8\uC9D1\uB2C8\uB2E4.</p>
          <button class="btn primary big" data-act="engrave">\uC774\uB984 \uC0C8\uAE30\uAE30</button>
        </div>
      </div>
      <footer class="credits">3D \uC5D0\uC14B: KayKit by Kay Lousberg (CC0)</footer>
    </div>`,setTimeout(()=>Lt("#nick")?.focus(),50)}function ls(){if(cn="menu",!ae.nickname)return cS();let i=ut(ae),e=$e[i.cls],t=Ct(i.cls,i.spec),n=new URLSearchParams(location.search);ni.innerHTML=`
    <div class="screen menu">
      <div class="menu-left">
        <div class="logo"><span class="k">\uC7BF\uBE5B \uC655\uAD00</span><span class="e">ASHEN CROWN</span></div>
        <p class="tagline">${pf}</p>
        <div class="classes">${ei.map(s=>{let r=ae.chars[s];return`<button class="cls ${s===ae.current?"on":""}" data-cls="${s}" style="--c:${$e[s].trail}">${dn(yr[s])}<b>${$e[s].name}</b><em>Lv ${r.level}</em></button>`}).join("")}</div>
        <div class="cls-info">
          <div class="ci-head"><label class="ci-name" title="\uC774\uB984 \uBC14\uAFB8\uAE30 (\uBAA8\uB4E0 \uC9C1\uC5C5 \uACF5\uD1B5)"><input id="name" maxlength="${_r}" value="${Bt(ae.nickname)}" autocomplete="off" spellcheck="false" aria-label="\uB0B4 \uC774\uB984" title="\uBE44\uC11D\uC5D0 \uC0C8\uAE34 \uC774\uB984 (\uBAA8\uB4E0 \uC9C1\uC5C5 \uACF5\uD1B5)" /><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13 7l4 4"/></svg></label><span>Lv ${i.level} ${e.name} \xB7 \uC804\uD22C\uB825 ${Li(i)}</span></div>
          <button class="ci-spec" data-act="tree">${dn("tree")}<b>${t.name}</b><em class="role ${t.role}">${vf[t.role]}</em><span>\uD328\uC2DC\uBE0C \xB7 ${t.passive.name}</span><i>\uC2A4\uD0AC \uD2B8\uB9AC \u203A</i></button>
          <div class="ci-skills">${["q","w","e","r"].map(s=>`<div class="cis" title="${Ot[t.skills[s]].name}: ${Ot[t.skills[s]].desc}"><kbd>${s.toUpperCase()}</kbd>${dn(t.skills[s])}<span>${Ot[t.skills[s]].name}</span></div>`).join("")}</div>
          <div class="xpline" title="\uB2E4\uC74C \uB808\uBCA8\uAE4C\uC9C0 \uD544\uC694\uD55C \uACBD\uD5D8\uCE58"><div class="xpl"><span>\uACBD\uD5D8\uCE58</span><b>${i.level>=vr?"\uCD5C\uB300 \uB808\uBCA8":`${i.xp.toLocaleString()} / ${as(i.level).toLocaleString()} (${Math.floor(i.xp/as(i.level)*100)}%)`}</b></div><div class="xpbar"><i style="width:${i.level>=vr?100:i.xp/as(i.level)*100}%"></i></div></div>
        </div>
        <div class="actions">
          ${Lg(ae.difficulty,ae.maxDifficulty,"diff")}
          <button class="btn primary big" data-act="solo">\uD63C\uC790 \uC785\uC7A5</button>
          <button class="btn" data-act="worlds">\uC6D4\uB4DC <small>\uCE5C\uAD6C\uC640 \uD568\uAED8, \uC6D4\uB4DC\uB9C8\uB2E4 \uB530\uB85C \uC131\uC7A5</small></button>
          <div class="join"><input id="code" maxlength="${nc}" placeholder="\uC6D4\uB4DC \uCF54\uB4DC" value="${Bt(eu(n.get("world")||""))}" autocomplete="off" /><button class="btn" data-act="join">\uCC38\uAC00</button></div>
          <div class="sub"><button class="btn ghost" data-act="inv">\uC7A5\uBE44</button><button class="btn ghost" data-act="tree">\uC2A4\uD0AC \uD2B8\uB9AC</button><button class="btn ghost" data-act="look">\uC678\uD615</button><button class="btn ghost" data-act="howto">\uC870\uC791\uBC95</button><button class="btn ghost" data-act="settings">\uC124\uC815</button></div>
        </div>
      </div>
      <footer class="credits">3D \uC5D0\uC14B: KayKit by Kay Lousberg (CC0) \xB7 <button class="link" data-act="about">\uC815\uBCF4</button></footer>
    </div>`,n.get("world")&&setTimeout(()=>Ni("\uC6D4\uB4DC \uCF54\uB4DC\uAC00 \uC785\uB825\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uCC38\uAC00\uB97C \uB204\uB974\uACE0 \uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD558\uC138\uC694",5e3),400)}ni.addEventListener("input",i=>{if(i.target.id!=="name")return;let e=ae.nickname;Rf(ae,i.target.value)!==e&&(Wt(ae),cn==="lobby"&&sc())});ni.addEventListener("change",i=>{i.target.id==="name"&&(i.target.value=ae.nickname)});ni.addEventListener("keydown",i=>{i.target.id==="name"&&i.code==="Enter"&&i.target.blur(),i.target.id==="nick"&&i.code==="Enter"&&Dg()});function Dg(){let i=Lt("#nick");if(!i)return;let e=ae.nickname;if(Rf(ae,i.value)===e||!ae.nickname){i.classList.add("bad"),Lt(".nick-err").textContent=`\uC774\uB984\uC740 ${Xo}~${_r}\uC790\uB85C \uC0C8\uAE38 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`;return}Wt(ae),an.unlock(),an.play("chest",{}),ls(),Ni(`\uBE44\uC11D\uC5D0 "${ae.nickname}"(\uC774)\uB77C\uB294 \uC774\uB984\uC774 \uC0C8\uACA8\uC84C\uC2B5\uB2C8\uB2E4`)}ni.addEventListener("click",i=>{let e=i.target.closest("[data-wcls]");if(e){pS(e.dataset.wcls);return}let t=i.target.closest("[data-cls]");if(t){an.unlock(),ae.current=t.dataset.cls,Wt(ae);let r=vt.actors.find(a=>a.cls===ae.current);r&&(r.cheer=1.5),an.play("ui",{}),ls();return}let n=i.target.closest("[data-act]");if(!n)return;an.unlock(),an.play("ui",{});let s=n.dataset.act;switch(s){case"solo":Eg();break;case"worlds":uS();break;case"engrave":Dg();break;case"join":dS(Lt("#code").value);break;case"winv":wg(sc);break;case"wtree":Sg(sc);break;case"tolobby":Re?.mode==="host"&&ti&&(Re.backToLobby(),Ug());break;case"inv":wg();break;case"howto":lS();break;case"tree":Sg();break;case"look":Tg();break;case"wlook":Tg(sc);break;case"settings":hS();break;case"about":Aa("\uC815\uBCF4","<p>\uC7BF\uBE5B \uC655\uAD00\uC740 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C \uB3D9\uC791\uD558\uB294 \uCFFC\uD130\uBDF0 \uC561\uC158 RPG \uC2DC\uD5D8\uD310\uC785\uB2C8\uB2E4.</p><ul><li>3D \uCE90\uB9AD\uD130, \uBAAC\uC2A4\uD130, \uB358\uC804 \uBAA8\uB378: KayKit (Kay Lousberg, CC0)</li><li>\uD6A8\uACFC\uC74C\uACFC \uC74C\uC545\uC740 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C \uC2E4\uC2DC\uAC04 \uD569\uC131\uD569\uB2C8\uB2E4.</li><li>\uC628\uB77C\uC778 \uD30C\uD2F0\uB294 \uBE0C\uB77C\uC6B0\uC800 \uAC04 \uC9C1\uC811 \uC5F0\uACB0(WebRTC)\uC744 \uC0AC\uC6A9\uD558\uBA70, \uAC19\uC740 \uD30C\uD2F0\uC6D0\uC5D0\uAC8C \uC11C\uB85C\uC758 IP \uC8FC\uC18C\uAC00 \uC804\uB2EC\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</li><li>\uD63C\uC790 \uD558\uAE30 \uCE90\uB9AD\uD130\uB294 \uC774 \uBE0C\uB77C\uC6B0\uC800\uC5D0 \uC800\uC7A5\uB429\uB2C8\uB2E4. \uC6D4\uB4DC \uC9C4\uD589\uC740 \uC6D4\uB4DC\uB97C \uB9CC\uB4E0 \uC0AC\uB78C\uC758 \uBE0C\uB77C\uC6B0\uC800\uC5D0 \uC800\uC7A5\uB429\uB2C8\uB2E4.</li></ul>");break;case"menu":Er();break;case"diff-":case"diff+":ae.difficulty=Math.max(1,Math.min(ae.maxDifficulty,ae.difficulty+(s==="diff+"?1:-1))),Wt(ae),ls();break;case"ldiff-":case"ldiff+":Re?.mode==="host"&&Re.setDifficulty(Math.max(1,Math.min(ae.maxDifficulty,Re.difficulty+(s==="ldiff+"?1:-1))));break;case"nextdiff":case"retry":{let r=s==="nextdiff"?Math.min(ae.maxDifficulty,qf.difficulty+1):qf.difficulty;Er(),ae.difficulty=r,Wt(ae),Eg();break}case"leave":Er();break;case"start":Re?.mode==="host"&&(Re.start(),Yf());break;case"copy":mS();break;case"resume":Lt(".pause")?.remove();break;case"quit":Lt(".pause")?.remove(),Er();break}});function Sg(i=ls){let e=document.createElement("div");e.className="modal";let t=()=>{let n=ut(ae),s=$e[n.cls],r=Ch[n.cls],a=c=>r.length>1&&r.every(l=>l.skills[c]===r[0].skills[c]),o=["q","w","e","r"].some(a);e.innerHTML=`<div class="mcard tree">
      <h3>\uC2A4\uD0AC \uD2B8\uB9AC</h3>
      <div class="tree-root" style="--c:${s.trail}">${dn(yr[n.cls])}<div><b>${Bt(ae.character.name)}</b><em>Lv ${n.level} ${s.name}</em></div></div>
      <div class="tree-branches n${r.length}">${r.map(c=>`
        <div class="branch ${c.id===n.spec?"on":""}" data-spec="${c.id}" style="--c:${s.trail}">
          <div class="br-head"><b>${c.name}</b><em class="role ${c.role}">${vf[c.role]}</em></div>
          <p>${c.desc}</p>
          <div class="br-passive">${dn("passive")}<div><b>\uD328\uC2DC\uBE0C \xB7 ${c.passive.name}</b><span>${c.passive.desc}</span><span class="hk">\uC2E0\uC18D \uD6A8\uACFC: ${Lh[c.haste]}</span></div></div>
          <div class="br-skills">${["q","w","e","r"].map(l=>{let h=Ot[c.skills[l]];return`<div class="node ${a(l)?"shared":""}" title="${h.name}: ${h.desc} (\uC7AC\uC0AC\uC6A9 ${h.cd}\uCD08)"><kbd>${l.toUpperCase()}</kbd>${dn(c.skills[l])}<span>${h.name}</span>${a(l)?"<i>\uACF5\uD1B5</i>":""}</div>`}).join("")}</div>
          <div class="br-pick">${c.id===n.spec?'<span class="picked">\uC120\uD0DD\uB428</span>':'<button class="btn small">\uC774 \uACC4\uC5F4\uB85C \uC804\uD658</button>'}</div>
        </div>`).join("")}</div>
      <p class="note">${r.length>1?`\uCEA0\uD504\uC640 \uC6D4\uB4DC \uB300\uAE30\uC2E4\uC5D0\uC11C \uC5B8\uC81C\uB4E0 \uACC4\uC5F4\uC744 \uBC14\uAFC0 \uC218 \uC788\uC2B5\uB2C8\uB2E4.${o?' <b class="tag-shared">\uACF5\uD1B5</b> \uD45C\uC2DC\uB294 \uB450 \uACC4\uC5F4\uC774 \uB611\uAC19\uC774 \uC4F0\uB294 \uC2A4\uD0AC\uC785\uB2C8\uB2E4.':""}`:"\uC774 \uC9C1\uC5C5\uC740 \uB2E8\uC77C \uACC4\uC5F4\uC785\uB2C8\uB2E4."} \uC2A4\uD0AC\uC5D0 \uB9C8\uC6B0\uC2A4\uB97C \uC62C\uB9AC\uBA74 \uC124\uBA85\uC774 \uB098\uC635\uB2C8\uB2E4.</p>
      <div class="row"><button class="btn primary" data-close>\uB2EB\uAE30</button></div>
    </div>`};e.addEventListener("click",n=>{if(n.target.closest("[data-close]")||n.target===e){e.remove(),i();return}let s=n.target.closest(".branch[data-spec]"),r=ut(ae);!s||s.dataset.spec===r.spec||(r.spec=s.dataset.spec,Wt(ae),an.play("equip",{}),t(),i())}),t(),document.body.appendChild(e)}function Tg(i=ls){let e=document.createElement("div");e.className="modal side",vt.editing=!0,fe.zoomTo=.8;let t=()=>{let s=ut(ae),r=s.look,a=pr(r,s.cls),o=c=>`<div class="lrow"><span>${yf[c]}</span><div class="sw">${b0[c].map(([l,h])=>`<button class="swatch ${r[c]===h?"on":""} ${h?"":"dflt"}" data-k="${c}" data-v="${h||""}" title="${l}" style="--s:${h||a[c]||"transparent"}"><i>${l}</i></button>`).join("")}</div></div>`;e.innerHTML=`<div class="mcard look">
      <h3>\uC678\uD615 \uAFB8\uBBF8\uAE30</h3>
      <p class="note">${Bt(ae.character.name)} \xB7 ${$e[s.cls].name}. \uC9C1\uC5C5\uB9C8\uB2E4 \uB530\uB85C \uC800\uC7A5\uB418\uACE0 \uD30C\uD2F0\uC6D0\uC5D0\uAC8C\uB3C4 \uBCF4\uC785\uB2C8\uB2E4.</p>
      ${As.map(o).join("")}
      ${v0($e[s.cls].model)?`<div class="lrow"><span>${yf.hat}</span><div class="sw"><button class="chip ${r.hat!==!1?"on":""}" data-hat="1">\uCC29\uC6A9</button><button class="chip ${r.hat===!1?"on":""}" data-hat="0">\uBC97\uAE30</button></div></div>`:""}
      <p class="note small">\uB208\xB7\uB208\uC379\xB7\uC785 \uBAA8\uC591\uACFC \uD5E4\uC5B4\uC2A4\uD0C0\uC77C\uC740 \uC774 \uCE90\uB9AD\uD130 \uBAA8\uB378\uC5D0\uC11C \uC5BC\uAD74\uACFC \uD55C \uB369\uC5B4\uB9AC\uB77C, \uC0C8 \uBAA8\uB378\uC744 \uB4E4\uC5EC\uC628 \uB4A4\uC5D0 \uBC14\uAFC0 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p>
      <div class="row"><button class="btn ghost" data-reset>\uCC98\uC74C\uC73C\uB85C</button><button class="btn primary" data-close>\uC644\uB8CC</button></div>
    </div>`},n=()=>{Wt(ae),an.play("ui",{}),t(),i!==ls&&i()};e.addEventListener("click",s=>{let r=ut(ae),a=s.target.closest("[data-k]");if(a){r.look={...r.look,[a.dataset.k]:a.dataset.v||null},n();return}let o=s.target.closest("[data-hat]");if(o){r.look={...r.look,hat:o.dataset.hat==="1"},n();return}if(s.target.closest("[data-reset]")){r.look={skin:null,hair:null,outfit:null,accent:null,hat:!0},n();return}s.target.closest("[data-close]")&&(e.remove(),vt.editing=!1,fe.zoomTo=0,i())}),t(),document.body.appendChild(e)}function lS(){Aa("\uC870\uC791\uBC95",`<div class="howto">
    <div><kbd>\uC6B0\uD074\uB9AD</kbd>\uC774\uB3D9 (\uB204\uB974\uACE0 \uC788\uC73C\uBA74 \uCEE4\uC11C\uB97C \uB530\uB77C\uAC10)</div><div><kbd>\uC88C\uD074\uB9AD</kbd>\uAE30\uBCF8 \uACF5\uACA9 (\uB204\uB974\uACE0 \uC788\uC73C\uBA74 \uC5F0\uC18D \uACF5\uACA9)</div>
    <div><kbd>Q</kbd><kbd>W</kbd><kbd>E</kbd><kbd>R</kbd>\uC2A4\uD0AC (\uCEE4\uC11C \uBC29\uD5A5\xB7\uC704\uCE58\uB85C \uC0AC\uC6A9)</div><div><kbd>Space</kbd>\uD68C\uD53C \uAD6C\uB974\uAE30 (\uC9E7\uC740 \uBB34\uC801)</div>
    <div><kbd>F</kbd>\uBB3C\uC57D / \uC4F0\uB7EC\uC84C\uC744 \uB54C \uBD80\uD65C\uC758 \uAE43\uD138</div><div><kbd>Tab</kbd><kbd>I</kbd>\uC7A5\uBE44</div><div><kbd>\uD720</kbd>\uD655\uB300\xB7\uCD95\uC18C (\uB05D\uAE4C\uC9C0 \uB2F9\uAE30\uBA74 \uC5BC\uAD74)</div><div><kbd>\uBC29\uD5A5\uD0A4</kbd>\uBCF4\uC870 \uC774\uB3D9</div><div><kbd>Esc</kbd>\uBA54\uB274</div>
  </div><ul class="tips"><li>\uBD89\uC740 \uC7A5\uD310\uC774 \uAC00\uB4DD \uCC28\uBA74 \uACF5\uACA9\uC774 \uB4E4\uC5B4\uC635\uB2C8\uB2E4. \uC7A5\uD310 \uBC16\uC73C\uB85C \uD53C\uD558\uC138\uC694.</li><li>\uC801\uC758 \uB4F1 \uB4A4\uB97C \uB54C\uB9AC\uBA74 \uBC31\uC5B4\uD0DD \uD53C\uD574\uAC00 \uB4E4\uC5B4\uAC11\uB2C8\uB2E4. \uBC29\uD328\uB97C \uB4E0 \uB9DD\uC790 \uC804\uC0AC\uB294 \uC815\uBA74 \uACF5\uACA9\uC744 \uB9C9\uC2B5\uB2C8\uB2E4.</li><li>\uD574\uACE8\uC655\uC774 \uD478\uB974\uAC8C \uBE5B\uB0A0 \uB54C \uCE74\uC6B4\uD130 \uC2A4\uD0AC(\uC131\uAE30\uC0AC Q, \uB3C4\uC801 Q)\uC744 \uB9DE\uD788\uBA74 \uAE30\uC808\uC2DC\uD0AC \uC218 \uC788\uC2B5\uB2C8\uB2E4.</li></ul>`)}function hS(){let i=ae.settings;Aa("\uC124\uC815",`<div class="settings">
    <label>\uC804\uCCB4 \uC74C\uB7C9<input type="range" min="0" max="1" step="0.05" data-s="master" value="${i.master}"></label>
    <label>\uC74C\uC545<input type="range" min="0" max="1" step="0.05" data-s="music" value="${i.music}"></label>
    <label>\uD6A8\uACFC\uC74C<input type="range" min="0" max="1" step="0.05" data-s="sfx" value="${i.sfx}"></label>
    <label>\uADF8\uB798\uD53D \uD488\uC9C8<select data-s="quality">${[[3,"\uCD5C\uACE0 (\uC570\uBE44\uC5B8\uD2B8 \uC624\uD074\uB8E8\uC804, 4x \uC548\uD2F0\uC568\uB9AC\uC5B4\uC2F1)"],[2,"\uB192\uC74C (\uAD8C\uC7A5)"],[1,"\uBCF4\uD1B5 (\uC800\uD574\uC0C1\uB3C4 \uADF8\uB9BC\uC790)"],[0,"\uB0AE\uC74C (\uADF8\uB9BC\uC790, \uBE5B \uBC88\uC9D0 \uB054)"]].map(([e,t])=>`<option value="${e}" ${i.quality==e?"selected":""}>${t}</option>`).join("")}</select></label>
    <label class="ck"><input type="checkbox" data-s="numbers" ${i.numbers?"checked":""}>\uD53C\uD574 \uC22B\uC790 \uD45C\uC2DC</label>
    <label class="ck"><input type="checkbox" data-s="fps" ${i.fps?"checked":""}>FPS \uD45C\uC2DC</label>
    <p class="note">\uD504\uB808\uC784\uC774 \uB5A8\uC5B4\uC9C0\uBA74 \uB80C\uB354 \uD574\uC0C1\uB3C4\uB97C \uC790\uB3D9\uC73C\uB85C \uB0AE\uCDB0 \uBD80\uB4DC\uB7EC\uC6C0\uC744 \uC720\uC9C0\uD569\uB2C8\uB2E4.</p>
  </div>`),document.querySelector(".modal").addEventListener("input",e=>{let t=e.target.dataset.s;t&&(i[t]=e.target.type==="checkbox"?e.target.checked:+e.target.value,Wt(ae),Pg())})}function wg(i=ls){Dn.show(!0),Dn.root.classList.add("inv-only"),Dn.toggleInventory(!0);let t=setInterval(()=>{Dn.root.querySelector(".inventory").classList.contains("hidden")&&(Dn.root.classList.remove("inv-only"),Dn.show(!1),i(),clearInterval(t))},200)}function uS(){let i=document.createElement("div");i.className="modal";let e=()=>{let t=vg();i.innerHTML=`<div class="mcard worlds">
      <h3>\uC6D4\uB4DC</h3>
      <p class="note">\uC6D4\uB4DC\uB294 \uC774 \uBE0C\uB77C\uC6B0\uC800\uC5D0 \uC800\uC7A5\uB418\uB294 \uC6B0\uB9AC\uB9CC\uC758 \uC11C\uBC84\uC785\uB2C8\uB2E4. \uCE5C\uAD6C\uB294 \uC6D4\uB4DC \uCF54\uB4DC\uC640 \uBE44\uBC00\uBC88\uD638\uB85C \uB4E4\uC5B4\uC624\uACE0, \uC6D4\uB4DC\uC5D0\uC11C \uC5BB\uC740 \uB808\uBCA8\uACFC \uC7A5\uBE44\uB294 \uADF8 \uC6D4\uB4DC\uC5D0\uB9CC \uC313\uC785\uB2C8\uB2E4. \uCE5C\uAD6C\uB294 \uB0B4\uAC00 \uC6D4\uB4DC\uB97C \uC5F4\uC5B4 \uB454 \uB3D9\uC548\uC5D0\uB9CC \uB4E4\uC5B4\uC62C \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p>
      <div class="wlist">${t.length?t.map(n=>`<div class="witem">
        <div class="wi"><b>${Bt(n.name)}</b><em>\uCF54\uB4DC <i>${n.code}</i> \xB7 \uBA64\uBC84 ${Object.keys(n.members).length}\uBA85 \xB7 ${n.pass?"\uBE44\uBC00\uBC88\uD638 \uC788\uC74C":"\uBE44\uBC00\uBC88\uD638 \uC5C6\uC74C"}</em></div>
        <button class="btn small primary" data-open="${n.id}">\uC5F4\uAE30</button><button class="btn small ghost" data-del="${n.id}">\uC0AD\uC81C</button></div>`).join(""):'<p class="note">\uC544\uC9C1 \uB9CC\uB4E0 \uC6D4\uB4DC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.</p>'}</div>
      <form class="wnew"><input name="n" maxlength="${Hf}" placeholder="\uC0C8 \uC6D4\uB4DC \uC774\uB984" autocomplete="off" required /><input name="p" type="password" maxlength="${su}" placeholder="\uBE44\uBC00\uBC88\uD638 (\uBE44\uC6B0\uBA74 \uC5C6\uC74C)" autocomplete="new-password" /><button class="btn">\uB9CC\uB4E4\uAE30</button></form>
      <div class="row"><button class="btn ghost" data-close>\uB2EB\uAE30</button></div>
    </div>`};i.addEventListener("click",t=>{if(t.target.closest("[data-close]")||t.target===i){i.remove();return}let n=t.target.closest("[data-open]");if(n){i.remove(),fS(n.dataset.open);return}let s=t.target.closest("[data-del]");s&&(s.dataset.armed?(yg(s.dataset.del),e(),Ni("\uC6D4\uB4DC\uB97C \uC0AD\uC81C\uD588\uC2B5\uB2C8\uB2E4")):(s.dataset.armed="1",s.textContent="\uC815\uB9D0 \uC0AD\uC81C",s.classList.add("danger")))}),i.addEventListener("submit",async t=>{t.preventDefault();let n=t.target;try{let s=await _g(n.n.value,n.p.value);Ni(`\uC6D4\uB4DC '${s.name}'\uC744(\uB97C) \uB9CC\uB4E4\uC5C8\uC2B5\uB2C8\uB2E4`),e()}catch(s){Ni(s.message)}}),e(),document.body.appendChild(i),i.querySelector("input[name=n]")?.focus()}function dS(i){let e=eu(i);if(e.length!==nc)return Ni(`${nc}\uC790\uB9AC \uC6D4\uB4DC \uCF54\uB4DC\uB97C \uC785\uB825\uD558\uC138\uC694`);let t=document.createElement("div");t.className="modal",t.innerHTML=`<form class="mcard pw"><h3>\uC6D4\uB4DC \uCC38\uAC00</h3><p class="note">\uC6D4\uB4DC <b>${e}</b>\uC758 \uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD558\uC138\uC694. \uBE44\uBC00\uBC88\uD638\uAC00 \uC5C6\uB294 \uC6D4\uB4DC\uBA74 \uBE44\uC6CC \uB450\uC138\uC694.</p>
    <input name="p" type="password" maxlength="${su}" placeholder="\uBE44\uBC00\uBC88\uD638" autocomplete="current-password" />
    <div class="row"><button type="button" class="btn ghost" data-close>\uCDE8\uC18C</button><button class="btn primary">\uCC38\uAC00</button></div></form>`,t.addEventListener("click",n=>{(n.target.closest("[data-close]")||n.target===t)&&t.remove()}),t.addEventListener("submit",n=>{n.preventDefault();let s=n.target.p.value;t.remove(),yS(e,s)}),document.body.appendChild(t),t.querySelector("input").focus()}async function fS(i){let e=ru(i);if(!e)return;zg(`${Bt(e.name)} \uC5EC\uB294 \uC911\u2026`),Ef(ae,Gf(e,ae.uid,ae.nickname),n=>Wf(e.id,ae.uid,ae.nickname,n)),Wt(ae);let t=new tc({profile:ae,online:!0,difficulty:ae.difficulty,world:{code:e.code,name:e.name,verify:n=>Mg(ru(e.id)||e,n),progressFor:(n,s)=>Gf(ru(e.id)||e,n,s),save:(n,s,r)=>Wf(e.id,n,s,r)},handlers:{onRoster:ac,onChat:Cg,...$f}});Re=t,ti={name:e.name,code:e.code,host:!0,locked:!!e.pass};try{if(await t.open(),Re!==t)return;jf(),ac(t.roster())}catch(n){if(Re!==t)return;Re=null,Er(),Aa("\uC6D4\uB4DC\uB97C \uC5F4 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4",Bt(n.message))}}function pS(i){!ti||cn!=="lobby"||!$e[i]||(ae.current=i,Wt(ae),an.play("ui",{}),sc())}function sc(){Re?.setChar?.(ae.character),Ng()}function Ng(){let i=Lt(".wchars");i&&(i.innerHTML=ei.map(e=>`<button class="wc ${e===ae.current?"on":""}" data-wcls="${e}" style="--c:${$e[e].trail}" title="${$e[e].name} \xB7 ${Ct(e,ae.chars[e].spec).name}">${dn(yr[e])}<span>Lv ${ae.chars[e].level}</span></button>`).join("")+'<button class="btn small ghost" data-act="winv">\uC7A5\uBE44</button><button class="btn small ghost" data-act="wtree">\uC2A4\uD0AC \uD2B8\uB9AC</button><button class="btn small ghost" data-act="wlook">\uC678\uD615</button>')}function Ug(){Lt(".pause")?.remove(),on.stop(),Xf(),jf(),ac(Re.roster(),Re.difficulty)}function jf(){cn="lobby";let i=ti,e=i.host;ni.innerHTML=`<div class="screen lobby"><div class="lobby-left">
    <h2>${Bt(i.name)}</h2>
    <div class="codebox"><div><span>\uC6D4\uB4DC \uCF54\uB4DC</span><b>${i.code}</b></div><button class="btn small" data-act="copy">\uCD08\uB300 \uB9C1\uD06C \uBCF5\uC0AC</button></div>
    <label class="lobby-nick"><span>\uB0B4 \uC774\uB984</span><input id="name" maxlength="${_r}" value="${Bt(ae.nickname)}" autocomplete="off" spellcheck="false" /></label>
    <div class="wchars"></div>
    <div class="lobby-diff"></div>
    <ul class="roster"></ul>
    <p class="note">${e?`\uCE5C\uAD6C\uC5D0\uAC8C \uC6D4\uB4DC \uCF54\uB4DC${i.locked?"\uC640 \uBE44\uBC00\uBC88\uD638":""}\uB97C \uC54C\uB824 \uC8FC\uC138\uC694. \uCD5C\uB300 4\uBA85. \uC774 \uC6D4\uB4DC\uC5D0\uC11C \uC5BB\uC740 \uB808\uBCA8\uACFC \uC7A5\uBE44\uB294 \uC774 \uC6D4\uB4DC\uC5D0\uB9CC \uC800\uC7A5\uB429\uB2C8\uB2E4.`:"\uC774 \uC6D4\uB4DC\uC5D0\uC11C \uC5BB\uC740 \uB808\uBCA8\uACFC \uC7A5\uBE44\uB294 \uC774 \uC6D4\uB4DC\uC5D0\uB9CC \uC800\uC7A5\uB429\uB2C8\uB2E4. \uC6D4\uB4DC \uC8FC\uC778\uC774 \uB358\uC804\uC5D0 \uC785\uC7A5\uD558\uBA74 \uD568\uAED8 \uB4E4\uC5B4\uAC11\uB2C8\uB2E4."}</p>
    <div class="row"><button class="btn ghost" data-act="leave">\uC6D4\uB4DC \uB098\uAC00\uAE30</button>${e?'<button class="btn primary" data-act="start">\uB358\uC804 \uC785\uC7A5</button>':""}</div>
    <div class="chat-slot"></div>
  </div><p class="lobby-hint"><kbd>\uC6B0\uD074\uB9AD</kbd> \uC774\uB3D9 \xB7 <kbd>Enter</kbd> \uB300\uD654</p></div>`,cs.tagNames([],fe),cs.mount(Lt(".chat-slot"),"lobby"),fe.camOffset.set(0,11,14),kg(!1),Ng(),on.startLobby(Re)}function ac(i,e=Re?.difficulty??1){let t=Lt(".roster");if(!t)return;let n=Re?.mode==="host";Lt(".lobby-diff").innerHTML=Lg(e,n?ae.maxDifficulty:e,"ldiff",!n),t.innerHTML=Array.from({length:4},(s,r)=>{let a=i[r];return a?`<li><span class="ri" style="--c:${$e[a.cls].trail}">${dn(yr[a.cls])}</span><b>${Bt(a.name)}</b><em>Lv ${a.level} ${Ct(a.cls,a.spec).name}</em>${a.host?'<span class="tag">\uC6D4\uB4DC \uC8FC\uC778</span>':""}${a.id===Re?.localId?'<span class="tag me">\uB098</span>':""}</li>`:'<li class="empty">\uBE48 \uC790\uB9AC</li>'}).join("")}async function mS(){let i=`${location.origin}${location.pathname}?world=${ti?.code}`;try{await navigator.clipboard.writeText(i),Ni("\uCD08\uB300 \uB9C1\uD06C\uB97C \uBCF5\uC0AC\uD588\uC2B5\uB2C8\uB2E4")}catch{Ni(i,6e3)}}function zg(i){ni.innerHTML=`<div class="screen dim"><div class="panel center"><div class="spinner"></div><p>${i}</p><button class="btn ghost small" data-act="leave">\uCDE8\uC18C</button></div></div>`}var $f={onPortal:i=>gS(i),onFinish:()=>_S()};function gS(i){let e=Re;e&&(Dn.portalPrompt(i,{host:e.mode==="host",localId:e.localId,onReady:()=>e.ready?.()}),i.s==="go"&&vS(i.next))}var bS={1:"r2",2:"hall",3:"throne"},au={};function xS(i){if(au[i])return au[i];let e=xt.find(r=>r.chapter===i&&r.id===bS[i]),t=(e.x0+e.x1)/2*4,n=(e.z0+e.z1)/2*4,s={target:fe.camTarget.clone(),offset:fe.camOffset.clone(),zoom:fe.zoom,zoomTo:fe.zoomTo,faceYaw:fe.faceYaw,camYaw:fe.camYaw,cine:fe.cine};fe.cine=null,fe.zoom=fe.zoomTo=0,fe.faceYaw=null,fe.camYaw=null,fe.camOffset.set(-13,17,19),fe.camTarget.set(t,0,n),fe.setAtmosphere(qn[i]),Cr.update(.016,Ar,[],{x:t,z:n});for(let r=0;r<3;r++)kt.update(.05),fe.render(.016,Ar);return au[i]=fe.canvas.toDataURL("image/jpeg",.86),fe.camTarget.copy(s.target),fe.camOffset.copy(s.offset),Object.assign(fe,{zoom:s.zoom,zoomTo:s.zoomTo,faceYaw:s.faceYaw,camYaw:s.camYaw,cine:s.cine}),fe.setAtmosphere(qn[on.chapter||1]),au[i]}function vS(i){Lt(".portal-screen")?.remove();let e=document.createElement("div");if(e.className="portal-screen",i){let t=xr(i);e.innerHTML=`<div class="ps-art" style="background-image:url(${xS(i)})"></div>
      <div class="ps-info"><span class="ps-num">\uC81C${i}\uC7A5</span><h2>${Zt[i].name}</h2><p>${Zt[i].intro}</p>
      <em>\uC801 \uCCB4\uB825 \xD7${t.hp.toFixed(1)} \xB7 \uACF5\uACA9\uB825 \xD7${t.atk.toFixed(2)}${i>=2?" \xB7 \uBCF4\uB77C\uC0C9 \uC989\uC0AC \uD328\uD134":""}</em><div class="ps-bar"><i></i></div></div>`}else e.innerHTML=`<div class="ps-info end"><span class="ps-num">\uC5EC\uC815\uC758 \uB05D</span><h2>${Zt[In].name}</h2><p>${Zt[In].outro}</p><div class="ps-bar"><i></i></div></div>`;e.style.setProperty("--dur",`${iu}ms`),document.body.appendChild(e),an.play("revive",{}),setTimeout(()=>{e.classList.add("out"),setTimeout(()=>e.remove(),700)},iu+300)}function _S(){cn==="play"&&(on.ended=!0,Fg(on.summary(!0)))}async function Eg(){Re=new tc({profile:ae,online:!1,difficulty:ae.difficulty,handlers:$f}),Re.start(),Yf()}async function yS(i,e){zg(`${i} \uC6D4\uB4DC\uC5D0 \uC5F0\uACB0\uD558\uB294 \uC911\u2026`);let t=new nu({profile:ae,code:i,password:e,handlers:{onWelcome:n=>{Ef(ae,n.progress,s=>t.syncProgress(s)),ti={name:n.world?.name||i,code:i,host:!1}},onRoster:ac,onChat:Cg,onStart:()=>{Re===t&&cn!=="play"&&Yf()},onLobby:()=>{Re===t&&Ug()},...$f,onDisconnect:n=>{Re!==t||cn==="results"||(Er(),Aa("\uC5F0\uACB0 \uC885\uB8CC",Bt(n)))}}});Re=t;try{if(await t.open(),Re!==t)return;jf(),ac(t.roster(),t.difficulty)}catch(n){if(Re!==t)return;Re=null,Er(),Aa("\uCC38\uAC00\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4",Bt(n.message))}}function Yf(){cn="play",ni.innerHTML="",cs.tagNames([],fe),oS(),Re.online!==!1&&cs.mount(document.body,"play"),on.start(Re),an.unlock(),ae.seenTutorial||(ae.seenTutorial=!0,Wt(ae),setTimeout(()=>Dn.announce("\uC655\uAC00 \uBB18\uC5ED","#e8d9c0",4,!1,"\uC6B0\uD074\uB9AD \uC774\uB3D9 \xB7 \uC88C\uD074\uB9AD \uACF5\uACA9 \xB7 QWER \uC2A4\uD0AC \xB7 Space \uD68C\uD53C"),600))}function Er(){if(Re)try{Re.leave()}catch{}Re=null,I0()&&Af(ae),ti=null,Lt(".pause")?.remove(),on.stop(),cs.close(),kg(!0),Xf(),ls()}var qf={difficulty:1};function Fg(i){cn="results",qf=i,ae.stats.runs++,Lt(".portal-screen")?.remove(),Dn.portalPrompt({s:"idle",need:[]},{});let e=i.victory?Hh(ae,i.difficulty):0;e&&(ae.difficulty=e),Wt(ae);let t=Re?.mode==="host"&&!Re.online,n=t&&i.victory&&i.difficulty<Math.min(is,In),s=ba(i.difficulty),r=i.victory&&s>=In,a=ut(ae),o=Math.floor(i.time/60),c=Math.floor(i.time%60);Dn.show(!1),rc.enabled=!1,ni.innerHTML=`<div class="screen dim results"><div class="panel">
    <h2 class="${i.victory?"win":"lose"}">${i.victory?`\uC81C${s}\uC7A5 \uC644\uB8CC`:"\uD30C\uD2F0 \uC804\uBA78"}</h2>
    <p class="note">\uC81C${s}\uC7A5 \xB7 ${Zt[s].name}</p>
    ${i.victory?`<p class="story">${Zt[s].outro}</p>`:'<p class="note">\uB9DD\uC790\uB4E4\uC774 \uB2E4\uC2DC \uC774\uACF3\uC744 \uC9C0\uBC30\uD569\uB2C8\uB2E4.</p>'}
    ${r?'<p class="note center-note">\uC5BC\uB9AC \uC561\uC138\uC2A4\uC758 \uB9C8\uC9C0\uB9C9 \uCC55\uD130\uC785\uB2C8\uB2E4. \uB2E4\uC74C \uC774\uC57C\uAE30\uB294 \uC900\uBE44 \uC911\uC785\uB2C8\uB2E4.</p>':""}
    ${e?`<p class="unlock">\u25C6 \uC81C${e}\uC7A5 \xB7 ${Zt[ba(e)].name} \uAC1C\uBC29 \u25C6</p>`:""}
    <div class="stats"><div><b>${o}:${String(c).padStart(2,"0")}</b><span>\uC18C\uC694 \uC2DC\uAC04</span></div><div><b>+${i.xp.toLocaleString()}</b><span>\uACBD\uD5D8\uCE58</span></div><div><b>Lv ${a.level}</b><span>${i.levels?`${i.levels} \uB808\uBCA8 \uC0C1\uC2B9`:"\uD604\uC7AC \uB808\uBCA8"}</span></div></div>
    <h4>\uD68D\uB4DD \uC7A5\uBE44 ${i.loot.length}\uAC1C</h4>
    <div class="loot-list">${i.loot.length?i.loot.map(l=>`<div class="li" style="--rc:${wn[l.rarity].color}"><b>${Bt(l.name)}</b><em>${wn[l.rarity].name} ${Xn[l.slot].name} \xB7 Lv ${l.ilvl}</em></div>`).join(""):'<p class="note">\uC5C6\uC74C</p>'}</div>
    ${ti?`<div class="row">${ti.host?'<button class="btn ghost" data-act="menu">\uC6D4\uB4DC \uB098\uAC00\uAE30</button><button class="btn primary" data-act="tolobby">\uB300\uAE30\uC2E4\uB85C \uB3CC\uC544\uAC00\uAE30</button>':'<button class="btn ghost" data-act="menu">\uC6D4\uB4DC \uB098\uAC00\uAE30</button>'}</div>${ti.host?"":'<p class="note center-note">\uC6D4\uB4DC \uC8FC\uC778\uC774 \uB300\uAE30\uC2E4\uB85C \uB3CC\uC544\uAC00\uBA74 \uD568\uAED8 \uC774\uB3D9\uD569\uB2C8\uB2E4.</p>'}`:`<div class="row"><button class="btn ${n||t&&!i.victory?"ghost":"primary"}" data-act="menu">\uCEA0\uD504\uB85C \uB3CC\uC544\uAC00\uAE30</button>${n?`<button class="btn primary" data-act="nextdiff">\uC81C${i.difficulty+1}\uC7A5\uC73C\uB85C</button>`:""}${t&&!i.victory?'<button class="btn primary" data-act="retry">\uB2E4\uC2DC \uB3C4\uC804</button>':""}</div>`}
  </div></div>`}addEventListener("keydown",i=>{if(i.code!=="Escape"||cn!=="play")return;let e=Dn.root.querySelector(".inventory");if(!Lt(".pause")&&e&&!e.classList.contains("hidden")){Dn.toggleInventory(!1);return}Og()});function Og(){if(cn!=="play")return;if(Lt(".pause")){Lt(".pause").remove();return}let i=document.createElement("div");i.className="screen dim pause";let e=ti?ti.host?'<button class="btn" data-act="tolobby">\uBAA8\uB450 \uB300\uAE30\uC2E4\uB85C</button><button class="btn ghost" data-act="quit">\uC6D4\uB4DC \uB098\uAC00\uAE30</button>':'<button class="btn ghost" data-act="quit">\uC6D4\uB4DC \uB098\uAC00\uAE30</button>':'<button class="btn ghost" data-act="quit">\uCEA0\uD504\uB85C \uB098\uAC00\uAE30</button>';i.innerHTML=`<div class="panel center"><h2>\uBA54\uB274</h2><p class="note">${Re?.mode==="host"&&!Re.online?"":"\uC628\uB77C\uC778 \uD30C\uD2F0\uB294 \uBA48\uCD94\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."}</p><div class="col"><button class="btn primary" data-act="resume">\uACC4\uC18D\uD558\uAE30</button><button class="btn" data-act="settings">\uC124\uC815</button>${e}</div></div>`,ni.appendChild(i)}fe.canvas.addEventListener("wheel",i=>{cn!=="play"&&cn!=="lobby"||(i.preventDefault(),fe.zoomTo=Math.max(0,Math.min(1,fe.zoomTo-i.deltaY*.0015)))},{passive:!1});var MS=on.prewarmPool();await sS();MS();Xf();ls();var Ag=performance.now(),Ar=0;function Bg(i){let e=Math.min(.05,(i-Ag)/1e3);Ag=i,Ar+=e,Hg(e),requestAnimationFrame(Bg)}var Ln={avg:1/60,acc:0,frames:0,fpsT:0},ou=document.createElement("div");ou.className="fps hidden";document.body.appendChild(ou);function SS(i){document.hidden||(Ln.avg+=(Math.min(i,.1)-Ln.avg)*.05,Ln.acc+=i,Ln.acc>1.5&&(Ln.acc=0,fe.adapt(Ln.avg)),Ln.frames++,Ln.fpsT+=i,ou.classList.toggle("hidden",!ae.settings.fps),Ln.fpsT>=.5&&(ou.textContent=`${Math.round(Ln.frames/Ln.fpsT)} FPS \xB7 ${(Ln.avg*1e3).toFixed(1)}ms \xB7 \uD574\uC0C1\uB3C4 ${Math.round(fe.dynScale*100)}%`,Ln.frames=0,Ln.fpsT=0))}function Hg(i){SS(i),(fe.canvas.clientWidth!==innerWidth||fe.canvas.clientHeight!==innerHeight)&&fe.resize();try{let e=Lt(".pause")&&Re?.mode==="host"&&!Re.online;(cn==="play"||cn==="results")&&Re?(e?fe.render(0,Ar):on.frame(i,Ar),on.lastView&&cs.update(i,on.lastView.players,on.pActors,fe,Re.localId)):rS(i,Ar)}catch(e){console.error(e)}}requestAnimationFrame(Bg);var TS=new Worker(URL.createObjectURL(new Blob(["setInterval(() => postMessage(0), 33);"],{type:"text/javascript"}))),Rg=performance.now();TS.onmessage=()=>{let i=performance.now(),e=Math.min(.1,(i-Rg)/1e3);Rg=i,!(!document.hidden||cn!=="play"&&cn!=="lobby"||Re?.mode!=="host"||!Re.online)&&(Re.update(e,{mx:0,mz:0,ax:0,az:0,attack:!1}),Re.takeEvents())};window.__ac={get session(){return Re},game:on,engine:fe,profile:ae,spawn(i,e=6,t=-6){let n=Re?.world,s=n?.players[0];return s&&Ta(n,i,s.x+e,s.z+t)},advance(i,e=30,t=!1){for(let n=0;n<i*e;n++){if(t&&Re?.world){let s=Re.world;mg(s,Re.localId);let r=s.players.find(a=>a.id===Re.localId);if(rc.mouse.down=!1,r){let a=r.input;rc.bot=a}}Ar+=1/e,Hg(1/e)}}};
