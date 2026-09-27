var u0=Object.defineProperty;var sa=(s,e)=>()=>(s&&(e=s(s=0)),e);var d0=(s,e)=>{for(var t in e)u0(s,t,{get:e[t],enumerable:!0})};function ei(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(an[s&255]+an[s>>8&255]+an[s>>16&255]+an[s>>24&255]+"-"+an[e&255]+an[e>>8&255]+"-"+an[e>>16&15|64]+an[e>>24&255]+"-"+an[t&63|128]+an[t>>8&255]+"-"+an[t>>16&255]+an[t>>24&255]+an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]).toLowerCase()}function $e(s,e,t){return Math.max(e,Math.min(t,s))}function ku(s,e){return(s%e+e)%e}function f0(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function p0(s,e,t){return s!==e?(t-s)/(e-s):0}function pa(s,e,t){return(1-t)*s+t*e}function m0(s,e,t,n){return pa(s,e,1-Math.exp(-t*n))}function g0(s,e=1){return e-Math.abs(ku(s,e*2)-e)}function b0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function x0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function v0(s,e){return s+Math.floor(Math.random()*(e-s+1))}function _0(s,e){return s+Math.random()*(e-s)}function y0(s){return s*(.5-Math.random())}function M0(s){s!==void 0&&(Tf=s);let e=Tf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function S0(s){return s*fa}function T0(s){return s*Rs}function w0(s){return(s&s-1)===0&&s!==0}function E0(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function A0(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function R0(s,e,t,n,i){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),m=a((n-e)/2);switch(i){case"XYX":s.set(o*h,c*u,c*d,o*l);break;case"YZY":s.set(c*d,o*h,c*u,o*l);break;case"ZXZ":s.set(c*u,c*d,o*h,o*l);break;case"XZX":s.set(o*h,c*m,c*f,o*l);break;case"YXY":s.set(c*f,o*h,c*m,o*l);break;case"ZYZ":s.set(c*m,c*f,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Zn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function lt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}function Du(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Mr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Op(){let s=Mr("canvas");return s.style.display="block",s}function Sr(s){s in Ef||(Ef[s]=!0,console.warn(s))}function Bp(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function C0(){let s={enabled:!0,workingColorSpace:en,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===st&&(i.r=Di(i.r),i.g=Di(i.g),i.b=Di(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===st&&(i.r=vr(i.r),i.g=vr(i.g),i.b=vr(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Wi?ga:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Sr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Sr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[en]:{primaries:e,whitePoint:n,transfer:ga,toXYZ:Af,fromXYZ:Rf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:It},outputColorSpaceConfig:{drawingBufferColorSpace:It}},[It]:{primaries:e,whitePoint:n,transfer:st,toXYZ:Af,fromXYZ:Rf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:It}}}),s}function Di(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function vr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}function Nh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?fc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}function Fh(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){_s.fromArray(s,r);let o=i.x*Math.abs(_s.x)+i.y*Math.abs(_s.y)+i.z*Math.abs(_s.z),c=e.dot(_s),l=t.dot(_s),h=n.dot(_s);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}function Kh(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}function V0(s,e,t,n,i,r,a,o){let c;if(e.side===mn?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,e.side===ti,o),c===null)return null;Qo.copy(o),Qo.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(Qo);return l<t.near||l>t.far?null:{distance:l,point:Qo.clone(),object:s}}function ec(s,e,t,n,i,r,a,o,c,l){s.getVertexPosition(o,Yo),s.getVertexPosition(c,Ko),s.getVertexPosition(l,Jo);let h=V0(s,e,t,n,Yo,Ko,Jo,Of);if(h){let u=new I;as.getBarycoord(Of,Yo,Ko,Jo,u),i&&(h.uv=as.getInterpolatedAttribute(i,o,c,l,u,new ve)),r&&(h.uv1=as.getInterpolatedAttribute(r,o,c,l,u,new ve)),a&&(h.normal=as.getInterpolatedAttribute(a,o,c,l,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new I,materialIndex:0};as.getNormal(Yo,Ko,Jo,d.normal),h.face=d,h.barycoord=u}return h}function Hs(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function ln(s){let e={};for(let t=0;t<s.length;t++){let n=Hs(s[t]);for(let i in n)e[i]=n[i]}return e}function G0(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Nu(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}function rc(s,e,t,n,i,r,a){let o=s.geometry.attributes.position;if(xc.fromBufferAttribute(o,i),vc.fromBufferAttribute(o,r),t.distanceSqToSegment(xc,vc,nu,Jf)>n)return;nu.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(nu);if(!(l<e.near||l>e.far))return{distance:l,point:Jf.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}function tp(s,e,t,n,i,r,a){let o=ou.distanceSqToPoint(s);if(o<t){let c=new I;ou.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}function cc(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Q0(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function eb(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function np(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let c=0;c!==e;++c)i[a++]=s[o+c]}return i}function Vp(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}function tb(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return mi;case"vector":case"vector2":case"vector3":case"vector4":return bi;case"color":return Fa;case"quaternion":return gi;case"bool":case"boolean":return Oi;case"string":return Bi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function nb(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=tb(s.type);if(s.times===void 0){let t=[],n=[];Vp(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}function op(s,e){return s.distance-e.distance}function fu(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let a=0,o=r.length;a<o;a++)fu(r[a],e,t,!0)}}function zu(s,e,t,n){let i=db(n);switch(t){case Tu:return s*e;case Jc:return s*e/i.components*i.byteLength;case Zc:return s*e/i.components*i.byteLength;case Eu:return s*e*2/i.components*i.byteLength;case Qc:return s*e*2/i.components*i.byteLength;case wu:return s*e*3/i.components*i.byteLength;case gn:return s*e*4/i.components*i.byteLength;case el:return s*e*4/i.components*i.byteLength;case Ya:case Ka:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ja:case Za:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case nl:case sl:return Math.max(s,16)*Math.max(e,8)/4;case tl:case il:return Math.max(s,8)*Math.max(e,8)/2;case rl:case al:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ol:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case cl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ll:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case hl:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case ul:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case dl:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case fl:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case pl:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case ml:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case gl:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case bl:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case xl:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case vl:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case _l:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case yl:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Ml:case Sl:case Tl:return Math.ceil(s/4)*Math.ceil(e/4)*16;case wl:case El:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Al:case Rl:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function db(s){switch(s){case Fn:case _u:return{byteLength:1,components:1};case zr:case yu:case nn:return{byteLength:2,components:1};case Yc:case Kc:return{byteLength:2,components:4};case ls:case $c:case Vn:return{byteLength:4,components:1};case Mu:case Su:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}var cp,pu,lp,mu,Pc,vi,ti,mn,Zt,Gt,Ni,cn,gu,bu,kc,Dn,hp,up,dp,fp,Fs,pp,mp,gp,hc,uc,Xa,bp,ja,xp,vp,_p,yp,Mp,Sp,Lc,Dc,Nc,ws,Uc,Fc,Nr,zc,xu,Tp,wp,Gi,Oc,Bc,Hc,Ur,Vc,Gc,Wc,au,Ep,vu,zs,Os,qc,Xc,$a,Tn,ui,_r,Vt,jc,Bs,fn,Fr,ri,Fn,_u,yu,zr,$c,ls,Vn,nn,Yc,Kc,hs,Mu,Su,Tu,wu,gn,yr,us,Jc,Zc,Eu,Qc,el,Ya,Ka,Ja,Za,tl,nl,il,sl,rl,al,ol,cl,ll,hl,ul,dl,fl,pl,ml,gl,bl,xl,vl,_l,yl,Ml,Sl,Tl,wl,El,Al,Rl,Cl,Il,Ap,Es,As,lc,Ss,Ts,ma,Pl,Rp,Au,Qa,Or,Cp,Ip,kl,Pp,Wi,It,en,ga,st,Jn,Ru,Cu,ba,kp,Lp,Dp,Iu,Np,Up,Fp,zp,dc,eo,Pu,Qn,xa,fi,an,Tf,fa,Rs,Lu,ve,Qt,I,Lh,wf,He,Dh,Ef,Af,Rf,Xe,rr,fc,I0,Tr,P0,Uh,Jt,tt,pc,zt,va,mc,Nn,Ri,$n,Oo,ar,or,cr,es,ts,vs,ra,Bo,Ho,_s,k0,aa,zh,wn,Ci,Oh,Vo,ns,Bh,Go,Hh,os,Ce,lr,Yn,L0,D0,is,Wo,kn,Cf,If,ni,wr,N0,Pf,hr,Ii,qo,oa,U0,F0,kf,Lf,Df,Nf,z0,ur,Vh,Et,Kn,Pi,Gh,ki,dr,fr,Uf,Wh,qh,Xh,jh,$h,Yh,as,Hp,ss,Xo,ae,on,O0,pn,Dt,Bt,jo,B0,wt,_a,ya,Ze,H0,Hn,Jh,pr,Ln,ca,Kt,mt,Ff,ys,$o,zf,Yo,Ko,Jo,Zh,Zo,Of,Qo,Ge,Er,bn,W0,q0,Qe,Ma,rs,Bf,Hf,Ht,mr,gr,gc,Sa,bc,St,X0,Ar,Ta,wa,Rr,dn,Cr,Vf,Gf,Wf,j0,qf,tc,Qh,Xf,eu,Cs,Ir,Ui,jf,$0,Ea,ii,br,$f,nc,Yf,Y0,la,ha,Is,tu,K0,J0,hi,Ms,Z0,ic,Pr,Fi,xc,vc,Kf,ua,sc,nu,Jf,pi,Zf,Qf,Aa,Ra,kr,ep,ou,ac,oc,Ca,Ps,Ia,Pa,cs,ka,_c,ks,si,Lr,Ls,La,Da,tn,En,Na,yc,Mc,zi,Sc,Ua,Tc,An,Oi,Fa,mi,wc,gi,Bi,bi,Ds,di,Ec,Gp,xi,Li,cu,Dr,xr,Ac,za,Ns,Oa,iu,ip,sp,Ba,lu,Ha,rp,da,su,hu,Un,Hi,uu,Us,Vi,ru,Va,Rc,Ga,Cc,Uu,ib,Fu,sb,rb,ab,ob,cb,lb,hb,du,ft,Ic,ub,Wa,ap,qa,Ou=sa(()=>{cp=0,pu=1,lp=2,mu=1,Pc=2,vi=3,ti=0,mn=1,Zt=2,Gt=0,Ni=1,cn=2,gu=3,bu=4,kc=5,Dn=100,hp=101,up=102,dp=103,fp=104,Fs=200,pp=201,mp=202,gp=203,hc=204,uc=205,Xa=206,bp=207,ja=208,xp=209,vp=210,_p=211,yp=212,Mp=213,Sp=214,Lc=0,Dc=1,Nc=2,ws=3,Uc=4,Fc=5,Nr=6,zc=7,xu=0,Tp=1,wp=2,Gi=0,Oc=1,Bc=2,Hc=3,Ur=4,Vc=5,Gc=6,Wc=7,au="attached",Ep="detached",vu=300,zs=301,Os=302,qc=303,Xc=304,$a=306,Tn=1e3,ui=1001,_r=1002,Vt=1003,jc=1004,Bs=1005,fn=1006,Fr=1007,ri=1008,Fn=1009,_u=1010,yu=1011,zr=1012,$c=1013,ls=1014,Vn=1015,nn=1016,Yc=1017,Kc=1018,hs=1020,Mu=35902,Su=35899,Tu=1021,wu=1022,gn=1023,yr=1026,us=1027,Jc=1028,Zc=1029,Eu=1030,Qc=1031,el=1033,Ya=33776,Ka=33777,Ja=33778,Za=33779,tl=35840,nl=35841,il=35842,sl=35843,rl=36196,al=37492,ol=37496,cl=37808,ll=37809,hl=37810,ul=37811,dl=37812,fl=37813,pl=37814,ml=37815,gl=37816,bl=37817,xl=37818,vl=37819,_l=37820,yl=37821,Ml=36492,Sl=36494,Tl=36495,wl=36283,El=36284,Al=36285,Rl=36286,Cl=2200,Il=2201,Ap=2202,Es=2300,As=2301,lc=2302,Ss=2400,Ts=2401,ma=2402,Pl=2500,Rp=2501,Au=0,Qa=1,Or=2,Cp=3200,Ip=3201,kl=0,Pp=1,Wi="",It="srgb",en="srgb-linear",ga="linear",st="srgb",Jn=7680,Ru=7681,Cu=517,ba=519,kp=512,Lp=513,Dp=514,Iu=515,Np=516,Up=517,Fp=518,zp=519,dc=35044,eo=35048,Pu="300 es",Qn=2e3,xa=2001,fi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Tf=1234567,fa=Math.PI/180,Rs=180/Math.PI;Lu={DEG2RAD:fa,RAD2DEG:Rs,generateUUID:ei,clamp:$e,euclideanModulo:ku,mapLinear:f0,inverseLerp:p0,lerp:pa,damp:m0,pingpong:g0,smoothstep:b0,smootherstep:x0,randInt:v0,randFloat:_0,randFloatSpread:y0,seededRandom:M0,degToRad:S0,radToDeg:T0,isPowerOfTwo:w0,ceilPowerOfTwo:E0,floorPowerOfTwo:A0,setQuaternionFromProperEuler:R0,normalize:lt,denormalize:Zn},ve=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Qt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],d=r[a+0],f=r[a+1],m=r[a+2],b=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=b;return}if(u!==b||c!==d||l!==f||h!==m){let g=1-o,p=c*d+l*f+h*m+u*b,v=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let w=Math.sqrt(_),E=Math.atan2(w,p*v);g=Math.sin(g*E)/w,o=Math.sin(o*E)/w}let x=o*v;if(c=c*g+d*x,l=l*g+f*x,h=h*g+m*x,u=u*g+b*x,g===1-o){let w=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=w,l*=w,h*=w,u*=w}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){let o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[a],d=r[a+1],f=r[a+2],m=r[a+3];return e[t]=o*m+h*u+c*f-l*d,e[t+1]=c*m+h*d+l*u-o*f,e[t+2]=l*m+h*f+o*d-c*u,e[t+3]=h*m-o*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(r/2),d=c(n/2),f=c(i/2),m=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"YZX":this._x=d*h*u+l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u-d*f*m;break;case"XZY":this._x=d*h*u-l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-i)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+l)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-l)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+i*l-r*c,this._y=i*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),h=2*(o*t-r*i),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=i+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Lh.copy(this).projectOnVector(e),this.sub(Lh)}reflect(e){return this.sub(Lh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Lh=new I,wf=new Qt,He=class s{constructor(e,t,n,i,r,a,o,c,l){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l)}set(e,t,n,i,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],b=i[0],g=i[3],p=i[6],v=i[1],_=i[4],x=i[7],w=i[2],E=i[5],R=i[8];return r[0]=a*b+o*v+c*w,r[3]=a*g+o*_+c*E,r[6]=a*p+o*x+c*R,r[1]=l*b+h*v+u*w,r[4]=l*g+h*_+u*E,r[7]=l*p+h*x+u*R,r[2]=d*b+f*v+m*w,r[5]=d*g+f*_+m*E,r[8]=d*p+f*x+m*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+i*r*l-i*a*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,m=t*u+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/m;return e[0]=u*b,e[1]=(i*l-h*n)*b,e[2]=(o*n-i*a)*b,e[3]=d*b,e[4]=(h*t-i*c)*b,e[5]=(i*r-o*t)*b,e[6]=f*b,e[7]=(n*c-l*t)*b,e[8]=(a*t-n*r)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Dh.makeScale(e,t)),this}rotate(e){return this.premultiply(Dh.makeRotation(-e)),this}translate(e,t){return this.premultiply(Dh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Dh=new He;Ef={};Af=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rf=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Xe=C0();fc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{rr===void 0&&(rr=Mr("canvas")),rr.width=e.width,rr.height=e.height;let i=rr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=rr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Mr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Di(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Di(t[n]/255)*255):t[n]=Di(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},I0=0,Tr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:I0++}),this.uuid=ei(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Nh(i[a].image)):r.push(Nh(i[a]))}else r=Nh(i);n.url=r}return t||(e.images[this.uuid]=n),n}};P0=0,Uh=new I,Jt=class s extends fi{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=ui,i=ui,r=fn,a=ri,o=gn,c=Fn,l=s.DEFAULT_ANISOTROPY,h=Wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:P0++}),this.uuid=ei(),this.name="",this.source=new Tr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ve(0,0),this.repeat=new ve(1,1),this.center=new ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Uh).x}get height(){return this.source.getSize(Uh).y}get depth(){return this.source.getSize(Uh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Tn:e.x=e.x-Math.floor(e.x);break;case ui:e.x=e.x<0?0:1;break;case _r:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Tn:e.y=e.y-Math.floor(e.y);break;case ui:e.y=e.y<0?0:1;break;case _r:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=vu;Jt.DEFAULT_ANISOTROPY=1;tt=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],m=c[9],b=c[2],g=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-b)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+b)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(l+1)/2,x=(f+1)/2,w=(p+1)/2,E=(h+d)/4,R=(u+b)/4,P=(m+g)/4;return _>x&&_>w?_<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(_),i=E/n,r=R/n):x>w?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=E/i,r=P/i):w<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),n=R/r,i=P/r),this.set(n,i,r,t),this}let v=Math.sqrt((g-m)*(g-m)+(u-b)*(u-b)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(u-b)/v,this.z=(d-h)/v,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},pc=class extends fi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new tt(0,0,e,t),this.scissorTest=!1,this.viewport=new tt(0,0,e,t);let i={width:e,height:t,depth:n.depth},r=new Jt(i);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:fn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new Tr(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},zt=class extends pc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},va=class extends Jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},mc=class extends Jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Nn=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint($n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint($n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=$n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,$n):$n.fromBufferAttribute(r,a),$n.applyMatrix4(e.matrixWorld),this.expandByPoint($n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Oo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Oo.copy(n.boundingBox)),Oo.applyMatrix4(e.matrixWorld),this.union(Oo)}let i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$n),$n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ra),Bo.subVectors(this.max,ra),ar.subVectors(e.a,ra),or.subVectors(e.b,ra),cr.subVectors(e.c,ra),es.subVectors(or,ar),ts.subVectors(cr,or),vs.subVectors(ar,cr);let t=[0,-es.z,es.y,0,-ts.z,ts.y,0,-vs.z,vs.y,es.z,0,-es.x,ts.z,0,-ts.x,vs.z,0,-vs.x,-es.y,es.x,0,-ts.y,ts.x,0,-vs.y,vs.x,0];return!Fh(t,ar,or,cr,Bo)||(t=[1,0,0,0,1,0,0,0,1],!Fh(t,ar,or,cr,Bo))?!1:(Ho.crossVectors(es,ts),t=[Ho.x,Ho.y,Ho.z],Fh(t,ar,or,cr,Bo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ri=[new I,new I,new I,new I,new I,new I,new I,new I],$n=new I,Oo=new Nn,ar=new I,or=new I,cr=new I,es=new I,ts=new I,vs=new I,ra=new I,Bo=new I,Ho=new I,_s=new I;k0=new Nn,aa=new I,zh=new I,wn=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):k0.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;aa.subVectors(e,this.center);let t=aa.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(aa,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(aa.copy(e.center).add(zh)),this.expandByPoint(aa.copy(e.center).sub(zh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Ci=new I,Oh=new I,Vo=new I,ns=new I,Bh=new I,Go=new I,Hh=new I,os=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ci.copy(this.origin).addScaledVector(this.direction,t),Ci.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Oh.copy(e).add(t).multiplyScalar(.5),Vo.copy(t).sub(e).normalize(),ns.copy(this.origin).sub(Oh);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Vo),o=ns.dot(this.direction),c=-ns.dot(Vo),l=ns.lengthSq(),h=Math.abs(1-a*a),u,d,f,m;if(h>0)if(u=a*c-o,d=a*o-c,m=r*h,u>=0)if(d>=-m)if(d<=m){let b=1/h;u*=b,d*=b,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Oh).addScaledVector(Vo,d),f}intersectSphere(e,t){Ci.subVectors(e.center,this.origin);let n=Ci.dot(this.direction),i=Ci.dot(Ci)-n*n,r=e.radius*e.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ci)!==null}intersectTriangle(e,t,n,i,r){Bh.subVectors(t,e),Go.subVectors(n,e),Hh.crossVectors(Bh,Go);let a=this.direction.dot(Hh),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ns.subVectors(this.origin,e);let c=o*this.direction.dot(Go.crossVectors(ns,Go));if(c<0)return null;let l=o*this.direction.dot(Bh.cross(ns));if(l<0||c+l>a)return null;let h=-o*ns.dot(Hh);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ce=class s{constructor(e,t,n,i,r,a,o,c,l,h,u,d,f,m,b,g){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l,h,u,d,f,m,b,g)}set(e,t,n,i,r,a,o,c,l,h,u,d,f,m,b,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=b,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/lr.setFromMatrixColumn(e,0).length(),r=1/lr.setFromMatrixColumn(e,1).length(),a=1/lr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,m=o*h,b=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+m*l,t[5]=d-b*l,t[9]=-o*c,t[2]=b-d*l,t[6]=m+f*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,m=l*h,b=l*u;t[0]=d+b*o,t[4]=m*o-f,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-m,t[6]=b+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,m=l*h,b=l*u;t[0]=d-b*o,t[4]=-a*u,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*h,t[9]=b-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,f=a*u,m=o*h,b=o*u;t[0]=c*h,t[4]=m*l-f,t[8]=d*l+b,t[1]=c*u,t[5]=b*l+d,t[9]=f*l-m,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,f=a*l,m=o*c,b=o*l;t[0]=c*h,t[4]=b-d*u,t[8]=m*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*u+m,t[10]=d-b*u}else if(e.order==="XZY"){let d=a*c,f=a*l,m=o*c,b=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+b,t[5]=a*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=o*h,t[10]=b*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(L0,e,D0)}lookAt(e,t,n){let i=this.elements;return kn.subVectors(e,t),kn.lengthSq()===0&&(kn.z=1),kn.normalize(),is.crossVectors(n,kn),is.lengthSq()===0&&(Math.abs(n.z)===1?kn.x+=1e-4:kn.z+=1e-4,kn.normalize(),is.crossVectors(n,kn)),is.normalize(),Wo.crossVectors(kn,is),i[0]=is.x,i[4]=Wo.x,i[8]=kn.x,i[1]=is.y,i[5]=Wo.y,i[9]=kn.y,i[2]=is.z,i[6]=Wo.z,i[10]=kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],b=n[6],g=n[10],p=n[14],v=n[3],_=n[7],x=n[11],w=n[15],E=i[0],R=i[4],P=i[8],S=i[12],M=i[1],C=i[5],D=i[9],z=i[13],G=i[2],X=i[6],W=i[10],ee=i[14],H=i[3],Z=i[7],ce=i[11],_e=i[15];return r[0]=a*E+o*M+c*G+l*H,r[4]=a*R+o*C+c*X+l*Z,r[8]=a*P+o*D+c*W+l*ce,r[12]=a*S+o*z+c*ee+l*_e,r[1]=h*E+u*M+d*G+f*H,r[5]=h*R+u*C+d*X+f*Z,r[9]=h*P+u*D+d*W+f*ce,r[13]=h*S+u*z+d*ee+f*_e,r[2]=m*E+b*M+g*G+p*H,r[6]=m*R+b*C+g*X+p*Z,r[10]=m*P+b*D+g*W+p*ce,r[14]=m*S+b*z+g*ee+p*_e,r[3]=v*E+_*M+x*G+w*H,r[7]=v*R+_*C+x*X+w*Z,r[11]=v*P+_*D+x*W+w*ce,r[15]=v*S+_*z+x*ee+w*_e,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],b=e[7],g=e[11],p=e[15];return m*(+r*c*u-i*l*u-r*o*d+n*l*d+i*o*f-n*c*f)+b*(+t*c*f-t*l*d+r*a*d-i*a*f+i*l*h-r*c*h)+g*(+t*l*u-t*o*f-r*a*u+n*a*f+r*o*h-n*l*h)+p*(-i*o*h-t*c*u+t*o*d+i*a*u-n*a*d+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],b=e[13],g=e[14],p=e[15],v=u*g*l-b*d*l+b*c*f-o*g*f-u*c*p+o*d*p,_=m*d*l-h*g*l-m*c*f+a*g*f+h*c*p-a*d*p,x=h*b*l-m*u*l+m*o*f-a*b*f-h*o*p+a*u*p,w=m*u*c-h*b*c-m*o*d+a*b*d+h*o*g-a*u*g,E=t*v+n*_+i*x+r*w;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/E;return e[0]=v*R,e[1]=(b*d*r-u*g*r-b*i*f+n*g*f+u*i*p-n*d*p)*R,e[2]=(o*g*r-b*c*r+b*i*l-n*g*l-o*i*p+n*c*p)*R,e[3]=(u*c*r-o*d*r-u*i*l+n*d*l+o*i*f-n*c*f)*R,e[4]=_*R,e[5]=(h*g*r-m*d*r+m*i*f-t*g*f-h*i*p+t*d*p)*R,e[6]=(m*c*r-a*g*r-m*i*l+t*g*l+a*i*p-t*c*p)*R,e[7]=(a*d*r-h*c*r+h*i*l-t*d*l-a*i*f+t*c*f)*R,e[8]=x*R,e[9]=(m*u*r-h*b*r-m*n*f+t*b*f+h*n*p-t*u*p)*R,e[10]=(a*b*r-m*o*r+m*n*l-t*b*l-a*n*p+t*o*p)*R,e[11]=(h*o*r-a*u*r-h*n*l+t*u*l+a*n*f-t*o*f)*R,e[12]=w*R,e[13]=(h*b*i-m*u*i+m*n*d-t*b*d-h*n*g+t*u*g)*R,e[14]=(m*o*i-a*b*i-m*n*c+t*b*c+a*n*g-t*o*g)*R,e[15]=(a*u*i-h*o*i+h*n*c-t*u*c-a*n*d+t*o*d)*R,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,m=r*u,b=a*h,g=a*u,p=o*u,v=c*l,_=c*h,x=c*u,w=n.x,E=n.y,R=n.z;return i[0]=(1-(b+p))*w,i[1]=(f+x)*w,i[2]=(m-_)*w,i[3]=0,i[4]=(f-x)*E,i[5]=(1-(d+p))*E,i[6]=(g+v)*E,i[7]=0,i[8]=(m+_)*R,i[9]=(g-v)*R,i[10]=(1-(d+b))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=lr.set(i[0],i[1],i[2]).length(),a=lr.set(i[4],i[5],i[6]).length(),o=lr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Yn.copy(this);let l=1/r,h=1/a,u=1/o;return Yn.elements[0]*=l,Yn.elements[1]*=l,Yn.elements[2]*=l,Yn.elements[4]*=h,Yn.elements[5]*=h,Yn.elements[6]*=h,Yn.elements[8]*=u,Yn.elements[9]*=u,Yn.elements[10]*=u,t.setFromRotationMatrix(Yn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=Qn,c=!1){let l=this.elements,h=2*r/(t-e),u=2*r/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i),m,b;if(c)m=r/(a-r),b=a*r/(a-r);else if(o===Qn)m=-(a+r)/(a-r),b=-2*a*r/(a-r);else if(o===xa)m=-a/(a-r),b=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=b,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Qn,c=!1){let l=this.elements,h=2/(t-e),u=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i),m,b;if(c)m=1/(a-r),b=a/(a-r);else if(o===Qn)m=-2/(a-r),b=-(a+r)/(a-r);else if(o===xa)m=-1/(a-r),b=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=m,l[14]=b,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},lr=new I,Yn=new Ce,L0=new I(0,0,0),D0=new I(1,1,1),is=new I,Wo=new I,kn=new I,Cf=new Ce,If=new Qt,ni=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin($e(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-$e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Cf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return If.setFromEuler(this),this.setFromQuaternion(If,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ni.DEFAULT_ORDER="XYZ";wr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},N0=0,Pf=new I,hr=new Qt,Ii=new Ce,qo=new I,oa=new I,U0=new I,F0=new Qt,kf=new I(1,0,0),Lf=new I(0,1,0),Df=new I(0,0,1),Nf={type:"added"},z0={type:"removed"},ur={type:"childadded",child:null},Vh={type:"childremoved",child:null},Et=class s extends fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:N0++}),this.uuid=ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new I,t=new ni,n=new Qt,i=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ce},normalMatrix:{value:new He}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hr.setFromAxisAngle(e,t),this.quaternion.multiply(hr),this}rotateOnWorldAxis(e,t){return hr.setFromAxisAngle(e,t),this.quaternion.premultiply(hr),this}rotateX(e){return this.rotateOnAxis(kf,e)}rotateY(e){return this.rotateOnAxis(Lf,e)}rotateZ(e){return this.rotateOnAxis(Df,e)}translateOnAxis(e,t){return Pf.copy(e).applyQuaternion(this.quaternion),this.position.add(Pf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(kf,e)}translateY(e){return this.translateOnAxis(Lf,e)}translateZ(e){return this.translateOnAxis(Df,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?qo.copy(e):qo.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),oa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(oa,qo,this.up):Ii.lookAt(qo,oa,this.up),this.quaternion.setFromRotationMatrix(Ii),i&&(Ii.extractRotation(i.matrixWorld),hr.setFromRotationMatrix(Ii),this.quaternion.premultiply(hr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Nf),ur.child=e,this.dispatchEvent(ur),ur.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(z0),Vh.child=e,this.dispatchEvent(Vh),Vh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Nf),ur.child=e,this.dispatchEvent(ur),ur.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oa,e,U0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oa,F0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];i.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};Et.DEFAULT_UP=new I(0,1,0);Et.DEFAULT_MATRIX_AUTO_UPDATE=!0;Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Kn=new I,Pi=new I,Gh=new I,ki=new I,dr=new I,fr=new I,Uf=new I,Wh=new I,qh=new I,Xh=new I,jh=new tt,$h=new tt,Yh=new tt,as=class s{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Kn.subVectors(e,t),i.cross(Kn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Kn.subVectors(i,t),Pi.subVectors(n,t),Gh.subVectors(e,t);let a=Kn.dot(Kn),o=Kn.dot(Pi),c=Kn.dot(Gh),l=Pi.dot(Pi),h=Pi.dot(Gh),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-o*h)*d,m=(a*h-o*c)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ki)===null?!1:ki.x>=0&&ki.y>=0&&ki.x+ki.y<=1}static getInterpolation(e,t,n,i,r,a,o,c){return this.getBarycoord(e,t,n,i,ki)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ki.x),c.addScaledVector(a,ki.y),c.addScaledVector(o,ki.z),c)}static getInterpolatedAttribute(e,t,n,i,r,a){return jh.setScalar(0),$h.setScalar(0),Yh.setScalar(0),jh.fromBufferAttribute(e,t),$h.fromBufferAttribute(e,n),Yh.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(jh,r.x),a.addScaledVector($h,r.y),a.addScaledVector(Yh,r.z),a}static isFrontFacing(e,t,n,i){return Kn.subVectors(n,t),Pi.subVectors(e,t),Kn.cross(Pi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kn.subVectors(this.c,this.b),Pi.subVectors(this.a,this.b),Kn.cross(Pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,a,o;dr.subVectors(i,n),fr.subVectors(r,n),Wh.subVectors(e,n);let c=dr.dot(Wh),l=fr.dot(Wh);if(c<=0&&l<=0)return t.copy(n);qh.subVectors(e,i);let h=dr.dot(qh),u=fr.dot(qh);if(h>=0&&u<=h)return t.copy(i);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(dr,a);Xh.subVectors(e,r);let f=dr.dot(Xh),m=fr.dot(Xh);if(m>=0&&f<=m)return t.copy(r);let b=f*l-c*m;if(b<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(n).addScaledVector(fr,o);let g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return Uf.subVectors(r,i),o=(u-h)/(u-h+(f-m)),t.copy(i).addScaledVector(Uf,o);let p=1/(g+b+d);return a=b*p,o=d*p,t.copy(n).addScaledVector(dr,a).addScaledVector(fr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Hp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ss={h:0,s:0,l:0},Xo={h:0,s:0,l:0};ae=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=It){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Xe.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Xe.workingColorSpace){if(e=ku(e,1),t=$e(t,0,1),n=$e(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Kh(a,r,e+1/3),this.g=Kh(a,r,e),this.b=Kh(a,r,e-1/3)}return Xe.colorSpaceToWorking(this,i),this}setStyle(e,t=It){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=It){let n=Hp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Di(e.r),this.g=Di(e.g),this.b=Di(e.b),this}copyLinearToSRGB(e){return this.r=vr(e.r),this.g=vr(e.g),this.b=vr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=It){return Xe.workingToColorSpace(on.copy(this),e),Math.round($e(on.r*255,0,255))*65536+Math.round($e(on.g*255,0,255))*256+Math.round($e(on.b*255,0,255))}getHexString(e=It){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.workingToColorSpace(on.copy(this),t);let n=on.r,i=on.g,r=on.b,a=Math.max(n,i,r),o=Math.min(n,i,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Xe.workingColorSpace){return Xe.workingToColorSpace(on.copy(this),t),e.r=on.r,e.g=on.g,e.b=on.b,e}getStyle(e=It){Xe.workingToColorSpace(on.copy(this),e);let t=on.r,n=on.g,i=on.b;return e!==It?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ss),this.setHSL(ss.h+e,ss.s+t,ss.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ss),e.getHSL(Xo);let n=pa(ss.h,Xo.h,t),i=pa(ss.s,Xo.s,t),r=pa(ss.l,Xo.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},on=new ae;ae.NAMES=Hp;O0=0,pn=class extends fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:O0++}),this.uuid=ei(),this.name="",this.type="Material",this.blending=Ni,this.side=ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hc,this.blendDst=uc,this.blendEquation=Dn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ae(0,0,0),this.blendAlpha=0,this.depthFunc=ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ba,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jn,this.stencilZFail=Jn,this.stencilZPass=Jn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ni&&(n.blending=this.blending),this.side!==ti&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==hc&&(n.blendSrc=this.blendSrc),this.blendDst!==uc&&(n.blendDst=this.blendDst),this.blendEquation!==Dn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ws&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ba&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Jn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Jn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Jn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Dt=class extends pn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.combine=xu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Bt=new I,jo=new ve,B0=0,wt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:B0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=dc,this.updateRanges=[],this.gpuType=Vn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)jo.fromBufferAttribute(this,t),jo.applyMatrix3(e),this.setXY(t,jo.x,jo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix3(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Zn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=lt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zn(t,this.array)),t}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zn(t,this.array)),t}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zn(t,this.array)),t}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array),r=lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==dc&&(e.usage=this.usage),e}},_a=class extends wt{constructor(e,t,n){super(new Uint16Array(e),t,n)}},ya=class extends wt{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Ze=class extends wt{constructor(e,t,n){super(new Float32Array(e),t,n)}},H0=0,Hn=new Ce,Jh=new Et,pr=new I,Ln=new Nn,ca=new Nn,Kt=new I,mt=class s extends fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:H0++}),this.uuid=ei(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Du(e)?ya:_a)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new He().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Hn.makeRotationFromQuaternion(e),this.applyMatrix4(Hn),this}rotateX(e){return Hn.makeRotationX(e),this.applyMatrix4(Hn),this}rotateY(e){return Hn.makeRotationY(e),this.applyMatrix4(Hn),this}rotateZ(e){return Hn.makeRotationZ(e),this.applyMatrix4(Hn),this}translate(e,t,n){return Hn.makeTranslation(e,t,n),this.applyMatrix4(Hn),this}scale(e,t,n){return Hn.makeScale(e,t,n),this.applyMatrix4(Hn),this}lookAt(e){return Jh.lookAt(e),Jh.updateMatrix(),this.applyMatrix4(Jh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pr).negate(),this.translate(pr.x,pr.y,pr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ze(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];Ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Kt.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(Kt),Kt.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(Kt)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let n=this.boundingSphere.center;if(Ln.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];ca.setFromBufferAttribute(o),this.morphTargetsRelative?(Kt.addVectors(Ln.min,ca.min),Ln.expandByPoint(Kt),Kt.addVectors(Ln.max,ca.max),Ln.expandByPoint(Kt)):(Ln.expandByPoint(ca.min),Ln.expandByPoint(ca.max))}Ln.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Kt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Kt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Kt.fromBufferAttribute(o,l),c&&(pr.fromBufferAttribute(e,l),Kt.add(pr)),i=Math.max(i,n.distanceToSquared(Kt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let P=0;P<n.count;P++)o[P]=new I,c[P]=new I;let l=new I,h=new I,u=new I,d=new ve,f=new ve,m=new ve,b=new I,g=new I;function p(P,S,M){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,S),m.fromBufferAttribute(r,M),h.sub(l),u.sub(l),f.sub(d),m.sub(d);let C=1/(f.x*m.y-m.x*f.y);isFinite(C)&&(b.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(C),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(C),o[P].add(b),o[S].add(b),o[M].add(b),c[P].add(g),c[S].add(g),c[M].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let P=0,S=v.length;P<S;++P){let M=v[P],C=M.start,D=M.count;for(let z=C,G=C+D;z<G;z+=3)p(e.getX(z+0),e.getX(z+1),e.getX(z+2))}let _=new I,x=new I,w=new I,E=new I;function R(P){w.fromBufferAttribute(i,P),E.copy(w);let S=o[P];_.copy(S),_.sub(w.multiplyScalar(w.dot(S))).normalize(),x.crossVectors(E,S);let C=x.dot(c[P])<0?-1:1;a.setXYZW(P,_.x,_.y,_.z,C)}for(let P=0,S=v.length;P<S;++P){let M=v[P],C=M.start,D=M.count;for(let z=C,G=C+D;z<G;z+=3)R(e.getX(z+0)),R(e.getX(z+1)),R(e.getX(z+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new wt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new I,r=new I,a=new I,o=new I,c=new I,l=new I,h=new I,u=new I;if(e)for(let d=0,f=e.count;d<f;d+=3){let m=e.getX(d+0),b=e.getX(d+1),g=e.getX(d+2);i.fromBufferAttribute(t,m),r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,g),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,b),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Kt.fromBufferAttribute(e,t),Kt.normalize(),e.setXYZ(t,Kt.x,Kt.y,Kt.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),f=0,m=0;for(let b=0,g=c.length;b<g;b++){o.isInterleavedBufferAttribute?f=c[b]*o.data.stride+o.offset:f=c[b]*h;for(let p=0;p<h;p++)d[m++]=l[f++]}return new wt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let o in i){let c=i[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ff=new Ce,ys=new os,$o=new wn,zf=new I,Yo=new I,Ko=new I,Jo=new I,Zh=new I,Zo=new I,Of=new I,Qo=new I,Ge=class extends Et{constructor(e=new mt,t=new Dt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(r&&o){Zo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(Zh.fromBufferAttribute(u,e),a?Zo.addScaledVector(Zh,h):Zo.addScaledVector(Zh.sub(t),h))}t.add(Zo)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$o.copy(n.boundingSphere),$o.applyMatrix4(r),ys.copy(e.ray).recast(e.near),!($o.containsPoint(ys.origin)===!1&&(ys.intersectSphere($o,zf)===null||ys.origin.distanceToSquared(zf)>(e.far-e.near)**2))&&(Ff.copy(r).invert(),ys.copy(e.ray).applyMatrix4(Ff),!(n.boundingBox!==null&&ys.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ys)))}_computeIntersections(e,t,n){let i,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,b=d.length;m<b;m++){let g=d[m],p=a[g.materialIndex],v=Math.max(g.start,f.start),_=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let x=v,w=_;x<w;x+=3){let E=o.getX(x),R=o.getX(x+1),P=o.getX(x+2);i=ec(this,p,e,n,l,h,u,E,R,P),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let m=Math.max(0,f.start),b=Math.min(o.count,f.start+f.count);for(let g=m,p=b;g<p;g+=3){let v=o.getX(g),_=o.getX(g+1),x=o.getX(g+2);i=ec(this,a,e,n,l,h,u,v,_,x),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,b=d.length;m<b;m++){let g=d[m],p=a[g.materialIndex],v=Math.max(g.start,f.start),_=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let x=v,w=_;x<w;x+=3){let E=x,R=x+1,P=x+2;i=ec(this,p,e,n,l,h,u,E,R,P),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let m=Math.max(0,f.start),b=Math.min(c.count,f.start+f.count);for(let g=m,p=b;g<p;g+=3){let v=g,_=g+1,x=g+2;i=ec(this,a,e,n,l,h,u,v,_,x),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}};Er=class s extends mt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,i,a,2),m("x","z","y",1,-1,e,n,-t,i,a,3),m("x","y","z",1,-1,e,t,n,i,r,4),m("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Ze(l,3)),this.setAttribute("normal",new Ze(h,3)),this.setAttribute("uv",new Ze(u,2));function m(b,g,p,v,_,x,w,E,R,P,S){let M=x/R,C=w/P,D=x/2,z=w/2,G=E/2,X=R+1,W=P+1,ee=0,H=0,Z=new I;for(let ce=0;ce<W;ce++){let _e=ce*C-z;for(let ze=0;ze<X;ze++){let it=ze*M-D;Z[b]=it*v,Z[g]=_e*_,Z[p]=G,l.push(Z.x,Z.y,Z.z),Z[b]=0,Z[g]=0,Z[p]=E>0?1:-1,h.push(Z.x,Z.y,Z.z),u.push(ze/R),u.push(1-ce/P),ee+=1}}for(let ce=0;ce<P;ce++)for(let _e=0;_e<R;_e++){let ze=d+_e+X*ce,it=d+_e+X*(ce+1),ct=d+(_e+1)+X*(ce+1),Je=d+(_e+1)+X*ce;c.push(ze,it,Je),c.push(it,ct,Je),H+=6}o.addGroup(f,H,S),f+=H,d+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};bn={clone:Hs,merge:ln},W0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,q0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Qe=class extends pn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=W0,this.fragmentShader=q0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hs(e.uniforms),this.uniformsGroups=G0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Ma=class extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ce,this.projectionMatrix=new Ce,this.projectionMatrixInverse=new Ce,this.coordinateSystem=Qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},rs=new I,Bf=new ve,Hf=new ve,Ht=class extends Ma{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Rs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(fa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rs*2*Math.atan(Math.tan(fa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){rs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(rs.x,rs.y).multiplyScalar(-e/rs.z),rs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(rs.x,rs.y).multiplyScalar(-e/rs.z)}getViewSize(e,t){return this.getViewBounds(e,Bf,Hf),t.subVectors(Hf,Bf)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(fa*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},mr=-90,gr=1,gc=class extends Et{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ht(mr,gr,e,t);i.layers=this.layers,this.add(i);let r=new Ht(mr,gr,e,t);r.layers=this.layers,this.add(r);let a=new Ht(mr,gr,e,t);a.layers=this.layers,this.add(a);let o=new Ht(mr,gr,e,t);o.layers=this.layers,this.add(o);let c=new Ht(mr,gr,e,t);c.layers=this.layers,this.add(c);let l=new Ht(mr,gr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===Qn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===xa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Sa=class extends Jt{constructor(e=[],t=zs,n,i,r,a,o,c,l,h){super(e,t,n,i,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},bc=class extends zt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Sa(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Er(5,5,5),r=new Qe({name:"CubemapFromEquirect",uniforms:Hs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:mn,blending:Gt});r.uniforms.tEquirect.value=t;let a=new Ge(i,r),o=t.minFilter;return t.minFilter===ri&&(t.minFilter=fn),new gc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}},St=class extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}},X0={type:"move"},Ar=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new St,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new St,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new St,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let b of e.hand.values()){let g=t.getJointPose(b,n),p=this._getHandJoint(l,b);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(X0)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new St;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Ta=class s{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ae(e),this.density=t}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},wa=class extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ni,this.environmentIntensity=1,this.environmentRotation=new ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Rr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=dc,this.updateRanges=[],this.version=0,this.uuid=ei()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ei()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ei()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},dn=new I,Cr=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix4(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyNormalMatrix(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.transformDirection(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Zn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=lt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Zn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Zn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Zn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Zn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array),r=lt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new wt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Vf=new I,Gf=new tt,Wf=new tt,j0=new I,qf=new Ce,tc=new I,Qh=new wn,Xf=new Ce,eu=new os,Cs=class extends Ge{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=au,this.bindMatrix=new Ce,this.bindMatrixInverse=new Ce,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Nn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,tc),this.boundingBox.expandByPoint(tc)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new wn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,tc),this.boundingSphere.expandByPoint(tc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qh.copy(this.boundingSphere),Qh.applyMatrix4(i),e.ray.intersectsSphere(Qh)!==!1&&(Xf.copy(i).invert(),eu.copy(e.ray).applyMatrix4(Xf),!(this.boundingBox!==null&&eu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,eu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new tt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===au?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ep?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;Gf.fromBufferAttribute(i.attributes.skinIndex,e),Wf.fromBufferAttribute(i.attributes.skinWeight,e),Vf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=Wf.getComponent(r);if(a!==0){let o=Gf.getComponent(r);qf.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(j0.copy(Vf).applyMatrix4(qf),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},Ir=class extends Et{constructor(){super(),this.isBone=!0,this.type="Bone"}},Ui=class extends Jt{constructor(e=null,t=1,n=1,i,r,a,o,c,l=Vt,h=Vt,u,d){super(null,a,o,c,l,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},jf=new Ce,$0=new Ce,Ea=class s{constructor(e=[],t=[]){this.uuid=ei(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ce)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ce;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:$0;jf.multiplyMatrices(o,t[r]),jf.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Ui(t,e,e,gn,Vn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Ir),this.bones.push(a),this.boneInverses.push(new Ce().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},ii=class extends wt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},br=new Ce,$f=new Ce,nc=[],Yf=new Nn,Y0=new Ce,la=new Ge,ha=new wn,Is=class extends Ge{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ii(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Y0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Nn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,br),Yf.copy(e.boundingBox).applyMatrix4(br),this.boundingBox.union(Yf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new wn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,br),ha.copy(e.boundingSphere).applyMatrix4(br),this.boundingSphere.union(ha)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(la.geometry=this.geometry,la.material=this.material,la.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ha.copy(this.boundingSphere),ha.applyMatrix4(n),e.ray.intersectsSphere(ha)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,br),$f.multiplyMatrices(n,br),la.matrixWorld=$f,la.raycast(e,nc);for(let a=0,o=nc.length;a<o;a++){let c=nc[a];c.instanceId=r,c.object=this,t.push(c)}nc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ii(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ui(new Float32Array(i*this.count),i,this.count,Jc,Vn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},tu=new I,K0=new I,J0=new He,hi=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=tu.subVectors(n,t).cross(K0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(tu),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||J0.getNormalMatrix(e),i=this.coplanarPoint(tu).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ms=new wn,Z0=new ve(.5,.5),ic=new I,Pr=class{constructor(e=new hi,t=new hi,n=new hi,i=new hi,r=new hi,a=new hi){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Qn,n=!1){let i=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],f=r[7],m=r[8],b=r[9],g=r[10],p=r[11],v=r[12],_=r[13],x=r[14],w=r[15];if(i[0].setComponents(l-a,f-h,p-m,w-v).normalize(),i[1].setComponents(l+a,f+h,p+m,w+v).normalize(),i[2].setComponents(l+o,f+u,p+b,w+_).normalize(),i[3].setComponents(l-o,f-u,p-b,w-_).normalize(),n)i[4].setComponents(c,d,g,x).normalize(),i[5].setComponents(l-c,f-d,p-g,w-x).normalize();else if(i[4].setComponents(l-c,f-d,p-g,w-x).normalize(),t===Qn)i[5].setComponents(l+c,f+d,p+g,w+x).normalize();else if(t===xa)i[5].setComponents(c,d,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ms.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ms)}intersectsSprite(e){Ms.center.set(0,0,0);let t=Z0.distanceTo(e.center);return Ms.radius=.7071067811865476+t,Ms.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ms)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(ic.x=i.normal.x>0?e.max.x:e.min.x,ic.y=i.normal.y>0?e.max.y:e.min.y,ic.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ic)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Fi=class extends pn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ae(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},xc=new I,vc=new I,Kf=new Ce,ua=new os,sc=new wn,nu=new I,Jf=new I,pi=class extends Et{constructor(e=new mt,t=new Fi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)xc.fromBufferAttribute(t,i-1),vc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=xc.distanceTo(vc);e.setAttribute("lineDistance",new Ze(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),sc.copy(n.boundingSphere),sc.applyMatrix4(i),sc.radius+=r,e.ray.intersectsSphere(sc)===!1)return;Kf.copy(i).invert(),ua.copy(e.ray).applyMatrix4(Kf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let b=f,g=m-1;b<g;b+=l){let p=h.getX(b),v=h.getX(b+1),_=rc(this,e,ua,c,p,v,b);_&&t.push(_)}if(this.isLineLoop){let b=h.getX(m-1),g=h.getX(f),p=rc(this,e,ua,c,b,g,m-1);p&&t.push(p)}}else{let f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let b=f,g=m-1;b<g;b+=l){let p=rc(this,e,ua,c,b,b+1,b);p&&t.push(p)}if(this.isLineLoop){let b=rc(this,e,ua,c,m-1,f,m-1);b&&t.push(b)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};Zf=new I,Qf=new I,Aa=class extends pi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Zf.fromBufferAttribute(t,i),Qf.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Zf.distanceTo(Qf);e.setAttribute("lineDistance",new Ze(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ra=class extends pi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},kr=class extends pn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ep=new Ce,ou=new os,ac=new wn,oc=new I,Ca=class extends Et{constructor(e=new mt,t=new kr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ac.copy(n.boundingSphere),ac.applyMatrix4(i),ac.radius+=r,e.ray.intersectsSphere(ac)===!1)return;ep.copy(i).invert(),ou.copy(e.ray).applyMatrix4(ep);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let m=d,b=f;m<b;m++){let g=l.getX(m);oc.fromBufferAttribute(u,g),tp(oc,g,c,i,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let m=d,b=f;m<b;m++)oc.fromBufferAttribute(u,m),tp(oc,m,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};Ps=class extends Jt{constructor(e,t,n=ls,i,r,a,o=Vt,c=Vt,l,h=yr,u=1){if(h!==yr&&h!==us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,i,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Tr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ia=class extends Jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Pa=class s extends mt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],a=[],o=[],c=[],l=new I,h=new ve;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*i;l.x=e*Math.cos(f),l.y=e*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ze(a,3)),this.setAttribute("normal",new Ze(o,3)),this.setAttribute("uv",new Ze(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},cs=class s extends mt{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],d=[],f=[],m=0,b=[],g=n/2,p=0;v(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Ze(u,3)),this.setAttribute("normal",new Ze(d,3)),this.setAttribute("uv",new Ze(f,2));function v(){let x=new I,w=new I,E=0,R=(t-e)/n;for(let P=0;P<=r;P++){let S=[],M=P/r,C=M*(t-e)+e;for(let D=0;D<=i;D++){let z=D/i,G=z*c+o,X=Math.sin(G),W=Math.cos(G);w.x=C*X,w.y=-M*n+g,w.z=C*W,u.push(w.x,w.y,w.z),x.set(X,R,W).normalize(),d.push(x.x,x.y,x.z),f.push(z,1-M),S.push(m++)}b.push(S)}for(let P=0;P<i;P++)for(let S=0;S<r;S++){let M=b[S][P],C=b[S+1][P],D=b[S+1][P+1],z=b[S][P+1];(e>0||S!==0)&&(h.push(M,C,z),E+=3),(t>0||S!==r-1)&&(h.push(C,D,z),E+=3)}l.addGroup(p,E,0),p+=E}function _(x){let w=m,E=new ve,R=new I,P=0,S=x===!0?e:t,M=x===!0?1:-1;for(let D=1;D<=i;D++)u.push(0,g*M,0),d.push(0,M,0),f.push(.5,.5),m++;let C=m;for(let D=0;D<=i;D++){let G=D/i*c+o,X=Math.cos(G),W=Math.sin(G);R.x=S*W,R.y=g*M,R.z=S*X,u.push(R.x,R.y,R.z),d.push(0,M,0),E.x=X*.5+.5,E.y=W*.5*M+.5,f.push(E.x,E.y),m++}for(let D=0;D<i;D++){let z=w+D,G=C+D;x===!0?h.push(G,G+1,z):h.push(G+1,G,z),P+=3}l.addGroup(p,P,x===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ka=class s extends cs{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},_c=class s extends mt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],a=[];o(i),l(n),h(),this.setAttribute("position",new Ze(r,3)),this.setAttribute("normal",new Ze(r.slice(),3)),this.setAttribute("uv",new Ze(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let _=new I,x=new I,w=new I;for(let E=0;E<t.length;E+=3)f(t[E+0],_),f(t[E+1],x),f(t[E+2],w),c(_,x,w,v)}function c(v,_,x,w){let E=w+1,R=[];for(let P=0;P<=E;P++){R[P]=[];let S=v.clone().lerp(x,P/E),M=_.clone().lerp(x,P/E),C=E-P;for(let D=0;D<=C;D++)D===0&&P===E?R[P][D]=S:R[P][D]=S.clone().lerp(M,D/C)}for(let P=0;P<E;P++)for(let S=0;S<2*(E-P)-1;S++){let M=Math.floor(S/2);S%2===0?(d(R[P][M+1]),d(R[P+1][M]),d(R[P][M])):(d(R[P][M+1]),d(R[P+1][M+1]),d(R[P+1][M]))}}function l(v){let _=new I;for(let x=0;x<r.length;x+=3)_.x=r[x+0],_.y=r[x+1],_.z=r[x+2],_.normalize().multiplyScalar(v),r[x+0]=_.x,r[x+1]=_.y,r[x+2]=_.z}function h(){let v=new I;for(let _=0;_<r.length;_+=3){v.x=r[_+0],v.y=r[_+1],v.z=r[_+2];let x=g(v)/2/Math.PI+.5,w=p(v)/Math.PI+.5;a.push(x,1-w)}m(),u()}function u(){for(let v=0;v<a.length;v+=6){let _=a[v+0],x=a[v+2],w=a[v+4],E=Math.max(_,x,w),R=Math.min(_,x,w);E>.9&&R<.1&&(_<.2&&(a[v+0]+=1),x<.2&&(a[v+2]+=1),w<.2&&(a[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function f(v,_){let x=v*3;_.x=e[x+0],_.y=e[x+1],_.z=e[x+2]}function m(){let v=new I,_=new I,x=new I,w=new I,E=new ve,R=new ve,P=new ve;for(let S=0,M=0;S<r.length;S+=9,M+=6){v.set(r[S+0],r[S+1],r[S+2]),_.set(r[S+3],r[S+4],r[S+5]),x.set(r[S+6],r[S+7],r[S+8]),E.set(a[M+0],a[M+1]),R.set(a[M+2],a[M+3]),P.set(a[M+4],a[M+5]),w.copy(v).add(_).add(x).divideScalar(3);let C=g(w);b(E,M+0,v,C),b(R,M+2,_,C),b(P,M+4,x,C)}}function b(v,_,x,w){w<0&&v.x===1&&(a[_]=v.x-1),x.x===0&&x.z===0&&(a[_]=w/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.details)}},ks=class s extends _c{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},si=class s extends mt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=e/o,d=t/c,f=[],m=[],b=[],g=[];for(let p=0;p<h;p++){let v=p*d-a;for(let _=0;_<l;_++){let x=_*u-r;m.push(x,-v,0),b.push(0,0,1),g.push(_/o),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<o;v++){let _=v+l*p,x=v+l*(p+1),w=v+1+l*(p+1),E=v+1+l*p;f.push(_,x,E),f.push(x,w,E)}this.setIndex(f),this.setAttribute("position",new Ze(m,3)),this.setAttribute("normal",new Ze(b,3)),this.setAttribute("uv",new Ze(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},Lr=class s extends mt{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);let o=[],c=[],l=[],h=[],u=e,d=(t-e)/i,f=new I,m=new ve;for(let b=0;b<=i;b++){for(let g=0;g<=n;g++){let p=r+g/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,h.push(m.x,m.y)}u+=d}for(let b=0;b<i;b++){let g=b*(n+1);for(let p=0;p<n;p++){let v=p+g,_=v,x=v+n+1,w=v+n+2,E=v+1;o.push(_,x,E),o.push(x,w,E)}}this.setIndex(o),this.setAttribute("position",new Ze(c,3)),this.setAttribute("normal",new Ze(l,3)),this.setAttribute("uv",new Ze(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Ls=class s extends mt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new I,d=new I,f=[],m=[],b=[],g=[];for(let p=0;p<=n;p++){let v=[],_=p/n,x=0;p===0&&a===0?x=.5/t:p===n&&c===Math.PI&&(x=-.5/t);for(let w=0;w<=t;w++){let E=w/t;u.x=-e*Math.cos(i+E*r)*Math.sin(a+_*o),u.y=e*Math.cos(a+_*o),u.z=e*Math.sin(i+E*r)*Math.sin(a+_*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),b.push(d.x,d.y,d.z),g.push(E+x,1-_),v.push(l++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){let _=h[p][v+1],x=h[p][v],w=h[p+1][v],E=h[p+1][v+1];(p!==0||a>0)&&f.push(_,x,E),(p!==n-1||c<Math.PI)&&f.push(x,w,E)}this.setIndex(f),this.setAttribute("position",new Ze(m,3)),this.setAttribute("normal",new Ze(b,3)),this.setAttribute("uv",new Ze(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},La=class s extends mt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],c=[],l=[],h=new I,u=new I,d=new I;for(let f=0;f<=n;f++)for(let m=0;m<=i;m++){let b=m/i*r,g=f/n*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(b),u.y=(e+t*Math.cos(g))*Math.sin(b),u.z=t*Math.sin(g),o.push(u.x,u.y,u.z),h.x=e*Math.cos(b),h.y=e*Math.sin(b),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(m/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=i;m++){let b=(i+1)*f+m-1,g=(i+1)*(f-1)+m-1,p=(i+1)*(f-1)+m,v=(i+1)*f+m;a.push(b,g,v),a.push(g,p,v)}this.setIndex(a),this.setAttribute("position",new Ze(o,3)),this.setAttribute("normal",new Ze(c,3)),this.setAttribute("uv",new Ze(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},Da=class extends Qe{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},tn=class extends pn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kl,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},En=class extends tn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ve(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $e(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ae(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ae(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ae(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Na=class extends pn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kl,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},yc=class extends pn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Mc=class extends pn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};zi=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Sc=class extends zi{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ss,endingEnd:Ss}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,a=e+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ts:r=e,o=2*t-n;break;case ma:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ts:a=e,c=2*n-t;break;case ma:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(i-t),b=m*m,g=b*m,p=-d*g+2*d*b-d*m,v=(1+d)*g+(-1.5-2*d)*b+(-.5+d)*m+1,_=(-1-f)*g+(1.5+f)*b+.5*m,x=f*g-f*b;for(let w=0;w!==o;++w)r[w]=p*a[h+w]+v*a[l+w]+_*a[c+w]+x*a[u+w];return r}},Ua=class extends zi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},Tc=class extends zi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},An=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=cc(t,this.TimeBufferType),this.values=cc(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:cc(e.times,Array),values:cc(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Tc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ua(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Sc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Es:t=this.InterpolantFactoryMethodDiscrete;break;case As:t=this.InterpolantFactoryMethodLinear;break;case lc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Es;case this.InterpolantFactoryMethodLinear:return As;case this.InterpolantFactoryMethodSmooth:return lc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&Q0(i))for(let o=0,c=i.length;o!==c;++o){let l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===lc,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(i)c=!0;else{let u=o*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){let b=t[u+m];if(b!==t[d+m]||b!==t[f+m]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};An.prototype.ValueTypeName="";An.prototype.TimeBufferType=Float32Array;An.prototype.ValueBufferType=Float32Array;An.prototype.DefaultInterpolation=As;Oi=class extends An{constructor(e,t,n){super(e,t,n)}};Oi.prototype.ValueTypeName="bool";Oi.prototype.ValueBufferType=Array;Oi.prototype.DefaultInterpolation=Es;Oi.prototype.InterpolantFactoryMethodLinear=void 0;Oi.prototype.InterpolantFactoryMethodSmooth=void 0;Fa=class extends An{constructor(e,t,n,i){super(e,t,n,i)}};Fa.prototype.ValueTypeName="color";mi=class extends An{constructor(e,t,n,i){super(e,t,n,i)}};mi.prototype.ValueTypeName="number";wc=class extends zi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t),l=e*o;for(let h=l+o;l!==h;l+=4)Qt.slerpFlat(r,0,a,l-o,a,l,c);return r}},gi=class extends An{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new wc(this.times,this.values,this.getValueSize(),e)}};gi.prototype.ValueTypeName="quaternion";gi.prototype.InterpolantFactoryMethodSmooth=void 0;Bi=class extends An{constructor(e,t,n){super(e,t,n)}};Bi.prototype.ValueTypeName="string";Bi.prototype.ValueBufferType=Array;Bi.prototype.DefaultInterpolation=Es;Bi.prototype.InterpolantFactoryMethodLinear=void 0;Bi.prototype.InterpolantFactoryMethodSmooth=void 0;bi=class extends An{constructor(e,t,n,i){super(e,t,n,i)}};bi.prototype.ValueTypeName="vector";Ds=class{constructor(e="",t=-1,n=[],i=Pl){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=ei(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(nb(n[a]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(An.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let h=eb(c);c=np(c,1,h),l=np(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new mi(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(r);if(h&&h.length>1){let u=h[1],d=i[u];d||(i[u]=d=[]),d.push(l)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,f,m,b){if(f.length!==0){let g=[],p=[];Vp(f,g,p,m),g.length!==0&&b.push(new u(d,g,p))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let b=0;b<d[m].morphTargets.length;b++)f[d[m].morphTargets[b]]=-1;for(let b in f){let g=[],p=[];for(let v=0;v!==d[m].morphTargets.length;++v){let _=d[m];g.push(_.time),p.push(_.morphTarget===b?1:0)}i.push(new mi(".morphTargetInfluence["+b+"]",g,p))}c=f.length*a}else{let f=".bones["+t[u].name+"]";n(bi,f+".position",d,"pos",i),n(gi,f+".quaternion",d,"rot",i),n(bi,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};di={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},Ec=class{constructor(e,t,n){let i=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],m=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Gp=new Ec,xi=class{constructor(e){this.manager=e!==void 0?e:Gp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};xi.DEFAULT_MATERIAL_NAME="__DEFAULT";Li={},cu=class extends Error{constructor(e,t){super(e),this.response=t}},Dr=class extends xi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=di.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Li[e]!==void 0){Li[e].push({onLoad:t,onProgress:n,onError:i});return}Li[e]=[],Li[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=Li[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0,b=0,g=new ReadableStream({start(p){v();function v(){u.read().then(({done:_,value:x})=>{if(_)p.close();else{b+=x.byteLength;let w=new ProgressEvent("progress",{lengthComputable:m,loaded:b,total:f});for(let E=0,R=h.length;E<R;E++){let P=h[E];P.onProgress&&P.onProgress(w)}p.enqueue(x),v()}},_=>{p.error(_)})}}});return new Response(g)}else throw new cu(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(m=>f.decode(m))}}}).then(l=>{di.add(`file:${e}`,l);let h=Li[e];delete Li[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=Li[e];if(h===void 0)throw this.manager.itemError(e),l;delete Li[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},xr=new WeakMap,Ac=class extends xi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=di.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=xr.get(a);u===void 0&&(u=[],xr.set(a,u)),u.push({onLoad:t,onError:i})}return a}let o=Mr("img");function c(){h(),t&&t(this);let u=xr.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}xr.delete(this),r.manager.itemEnd(e)}function l(u){h(),i&&i(u),di.remove(`image:${e}`);let d=xr.get(this)||[];for(let f=0;f<d.length;f++){let m=d[f];m.onError&&m.onError(u)}xr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),di.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}},za=class extends xi{constructor(e){super(e)}load(e,t,n,i){let r=new Jt,a=new Ac(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},Ns=class extends Et{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ae(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Oa=class extends Ns{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ae(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},iu=new Ce,ip=new I,sp=new I,Ba=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ve(512,512),this.mapType=Fn,this.map=null,this.mapPass=null,this.matrix=new Ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pr,this._frameExtents=new ve(1,1),this._viewportCount=1,this._viewports=[new tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;ip.setFromMatrixPosition(e.matrixWorld),t.position.copy(ip),sp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(sp),t.updateMatrixWorld(),iu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(iu,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(iu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},lu=class extends Ba{constructor(){super(new Ht(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Rs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Ha=class extends Ns{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new lu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},rp=new Ce,da=new I,su=new I,hu=class extends Ba{constructor(){super(new Ht(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ve(4,2),this._viewportCount=6,this._viewports=[new tt(2,1,1,1),new tt(0,1,1,1),new tt(3,1,1,1),new tt(1,1,1,1),new tt(3,0,1,1),new tt(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),da.setFromMatrixPosition(e.matrixWorld),n.position.copy(da),su.copy(n.position),su.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(su),n.updateMatrixWorld(),i.makeTranslation(-da.x,-da.y,-da.z),rp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rp,n.coordinateSystem,n.reversedDepth)}},Un=class extends Ns{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new hu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Hi=class extends Ma{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},uu=class extends Ba{constructor(){super(new Hi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Us=class extends Ns{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.shadow=new uu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Vi=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},ru=new WeakMap,Va=class extends xi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=di.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{if(ru.has(a)===!0)i&&i(ru.get(a)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(l),r.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return di.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),ru.set(c,l),di.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});di.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},Rc=class extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Ga=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}},Cc=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,a;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,r=e*i+i,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){o.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){Qt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){let a=this._workIndex*r;Qt.multiplyQuaternionsFlat(e,a,e,t,e,n),Qt.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){let a=1-i;for(let o=0;o!==r;++o){let c=t+o;e[c]=e[c]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){let o=t+a;e[o]=e[o]+e[n+a]*i}}},Uu="\\[\\]\\.:\\/",ib=new RegExp("["+Uu+"]","g"),Fu="[^"+Uu+"]",sb="[^"+Uu.replace("\\.","")+"]",rb=/((?:WC+[\/:])*)/.source.replace("WC",Fu),ab=/(WCOD+)?/.source.replace("WCOD",sb),ob=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Fu),cb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Fu),lb=new RegExp("^"+rb+ab+ob+cb+"$"),hb=["material","materials","bones","map"],du=class{constructor(e,t,n){let i=n||ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ft=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ib,"")}static parseTrackName(e){let t=lb.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);hb.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[i];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ft.Composite=du;ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ft.prototype.GetterByBindingType=[ft.prototype._getValue_direct,ft.prototype._getValue_array,ft.prototype._getValue_arrayElement,ft.prototype._getValue_toArray];ft.prototype.SetterByBindingTypeAndVersioning=[[ft.prototype._setValue_direct,ft.prototype._setValue_direct_setNeedsUpdate,ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_array,ft.prototype._setValue_array_setNeedsUpdate,ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_arrayElement,ft.prototype._setValue_arrayElement_setNeedsUpdate,ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_fromArray,ft.prototype._setValue_fromArray_setNeedsUpdate,ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];Ic=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let r=t.tracks,a=r.length,o=new Array(a),c={endingStart:Ss,endingEnd:Ss};for(let l=0;l!==a;++l){let h=r[l].createInterpolant(null);o[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Il,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let i=this._clip.duration,r=e._clip.duration,a=r/i,o=i/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,r=i.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);let c=o.parameterPositions,l=o.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/a,l[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Rp:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(a),l[h].accumulateAdditive(o);break;case Pl:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(a),l[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,r=this._loopCount,a=n===Ap;if(e===0)return r===-1?i:a&&(r&1)===1?t-i:i;if(n===Cl){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){let o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);let c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=Ts,i.endingEnd=Ts):(e?i.endingStart=this.zeroSlopeAtStart?Ts:Ss:i.endingStart=ma,t?i.endingEnd=this.zeroSlopeAtEnd?Ts:Ss:i.endingEnd=ma)}_scheduleFading(e,t,n){let i=this._mixer,r=i.time,a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,c=a.sampleValues;return o[0]=r,c[0]=t,o[1]=r+e,c[1]=n,this}},ub=new Float32Array(1),Wa=class extends fi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,o=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName,h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==r;++u){let d=i[u],f=d.name,m=h[f];if(m!==void 0)++m.referenceCount,a[u]=m;else{if(m=a[u],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,c,f));continue}let b=t&&t._propertyBindings[u].binding.parsedPath;m=new Cc(ft.create(n,f,b),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,c,f),a[u]=m}o[u].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,r=this._actionsByClip,a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,a=this._actionsByClip,o=a[r],c=o.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;let u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],c.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,r=this._bindings,a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Ua(new Float32Array(2),new Float32Array(2),1,ub),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let i=t||this._root,r=i.uuid,a=typeof e=="string"?Ds.findByName(i,e):e,o=a!==null?a.uuid:e,c=this._actionsByClip[o],l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Pl),c!==void 0){let u=c.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;let h=new Ic(this,a,t,n);return this._bindAction(h,l),this._addInactiveAction(h,o,r),h}existingAction(e,t){let n=t||this._root,i=n.uuid,r=typeof e=="string"?Ds.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,r,a);let o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let a=r.knownActions;for(let o=0,c=a.length;o!==c;++o){let l=a[o];this._deactivateAction(l);let h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(let a in r){let o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}},ap=new Ce,qa=class{constructor(e,t,n=0,i=1/0){this.ray=new os(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new wr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ap.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ap),this}intersectObject(e,t=!0,n=[]){return fu(e,this,n,t),n.sort(op),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)fu(e[i],this,n,t);return n.sort(op),n}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180")});function fm(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function pb(s){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,u=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=s.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){let h=c.array,u=c.updateRanges;if(s.bindBuffer(l,o),u.length===0)s.bufferSubData(l,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],b=u[f];b.start<=m.start+m.count+1?m.count=Math.max(m.count,b.start+b.count-m.start):(++d,u[d]=b)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let b=u[f];s.bufferSubData(l,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(s.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:r,update:a}}function Yv(s,e,t,n,i,r,a){let o=new ae(0),c=r===!0?0:1,l,h,u=null,d=0,f=null;function m(_){let x=_.isScene===!0?_.background:null;return x&&x.isTexture&&(x=(_.backgroundBlurriness>0?t:e).get(x)),x}function b(_){let x=!1,w=m(_);w===null?p(o,c):w&&w.isColor&&(p(w,1),x=!0);let E=s.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(_,x){let w=m(x);w&&(w.isCubeTexture||w.mapping===$a)?(h===void 0&&(h=new Ge(new Er(1,1,1),new Qe({name:"BackgroundCubeMaterial",uniforms:Hs(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,R,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Vs.copy(x.backgroundRotation),Vs.x*=-1,Vs.y*=-1,Vs.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Vs.y*=-1,Vs.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4($v.makeRotationFromEuler(Vs)),h.material.toneMapped=Xe.getTransfer(w.colorSpace)!==st,(u!==w||d!==w.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=w,d=w.version,f=s.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new Ge(new si(2,2),new Qe({name:"BackgroundMaterial",uniforms:Hs(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=Xe.getTransfer(w.colorSpace)!==st,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||d!==w.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,u=w,d=w.version,f=s.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function p(_,x){_.getRGB(Ll,Nu(s)),n.buffers.color.setClear(Ll.r,Ll.g,Ll.b,x,a)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,x=1){o.set(_),c=x,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,p(o,c)},render:b,addToRenderList:g,dispose:v}}function Kv(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,a=!1;function o(M,C,D,z,G){let X=!1,W=u(z,D,C);r!==W&&(r=W,l(r.object)),X=f(M,z,D,G),X&&m(M,z,D,G),G!==null&&e.update(G,s.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,x(M,C,D,z),G!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function c(){return s.createVertexArray()}function l(M){return s.bindVertexArray(M)}function h(M){return s.deleteVertexArray(M)}function u(M,C,D){let z=D.wireframe===!0,G=n[M.id];G===void 0&&(G={},n[M.id]=G);let X=G[C.id];X===void 0&&(X={},G[C.id]=X);let W=X[z];return W===void 0&&(W=d(c()),X[z]=W),W}function d(M){let C=[],D=[],z=[];for(let G=0;G<t;G++)C[G]=0,D[G]=0,z[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:D,attributeDivisors:z,object:M,attributes:{},index:null}}function f(M,C,D,z){let G=r.attributes,X=C.attributes,W=0,ee=D.getAttributes();for(let H in ee)if(ee[H].location>=0){let ce=G[H],_e=X[H];if(_e===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(_e=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(_e=M.instanceColor)),ce===void 0||ce.attribute!==_e||_e&&ce.data!==_e.data)return!0;W++}return r.attributesNum!==W||r.index!==z}function m(M,C,D,z){let G={},X=C.attributes,W=0,ee=D.getAttributes();for(let H in ee)if(ee[H].location>=0){let ce=X[H];ce===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(ce=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(ce=M.instanceColor));let _e={};_e.attribute=ce,ce&&ce.data&&(_e.data=ce.data),G[H]=_e,W++}r.attributes=G,r.attributesNum=W,r.index=z}function b(){let M=r.newAttributes;for(let C=0,D=M.length;C<D;C++)M[C]=0}function g(M){p(M,0)}function p(M,C){let D=r.newAttributes,z=r.enabledAttributes,G=r.attributeDivisors;D[M]=1,z[M]===0&&(s.enableVertexAttribArray(M),z[M]=1),G[M]!==C&&(s.vertexAttribDivisor(M,C),G[M]=C)}function v(){let M=r.newAttributes,C=r.enabledAttributes;for(let D=0,z=C.length;D<z;D++)C[D]!==M[D]&&(s.disableVertexAttribArray(D),C[D]=0)}function _(M,C,D,z,G,X,W){W===!0?s.vertexAttribIPointer(M,C,D,G,X):s.vertexAttribPointer(M,C,D,z,G,X)}function x(M,C,D,z){b();let G=z.attributes,X=D.getAttributes(),W=C.defaultAttributeValues;for(let ee in X){let H=X[ee];if(H.location>=0){let Z=G[ee];if(Z===void 0&&(ee==="instanceMatrix"&&M.instanceMatrix&&(Z=M.instanceMatrix),ee==="instanceColor"&&M.instanceColor&&(Z=M.instanceColor)),Z!==void 0){let ce=Z.normalized,_e=Z.itemSize,ze=e.get(Z);if(ze===void 0)continue;let it=ze.buffer,ct=ze.type,Je=ze.bytesPerElement,j=ct===s.INT||ct===s.UNSIGNED_INT||Z.gpuType===$c;if(Z.isInterleavedBufferAttribute){let Y=Z.data,ue=Y.stride,Ee=Z.offset;if(Y.isInstancedInterleavedBuffer){for(let fe=0;fe<H.locationSize;fe++)p(H.location+fe,Y.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let fe=0;fe<H.locationSize;fe++)g(H.location+fe);s.bindBuffer(s.ARRAY_BUFFER,it);for(let fe=0;fe<H.locationSize;fe++)_(H.location+fe,_e/H.locationSize,ct,ce,ue*Je,(Ee+_e/H.locationSize*fe)*Je,j)}else{if(Z.isInstancedBufferAttribute){for(let Y=0;Y<H.locationSize;Y++)p(H.location+Y,Z.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Y=0;Y<H.locationSize;Y++)g(H.location+Y);s.bindBuffer(s.ARRAY_BUFFER,it);for(let Y=0;Y<H.locationSize;Y++)_(H.location+Y,_e/H.locationSize,ct,ce,_e*Je,_e/H.locationSize*Y*Je,j)}}else if(W!==void 0){let ce=W[ee];if(ce!==void 0)switch(ce.length){case 2:s.vertexAttrib2fv(H.location,ce);break;case 3:s.vertexAttrib3fv(H.location,ce);break;case 4:s.vertexAttrib4fv(H.location,ce);break;default:s.vertexAttrib1fv(H.location,ce)}}}}v()}function w(){P();for(let M in n){let C=n[M];for(let D in C){let z=C[D];for(let G in z)h(z[G].object),delete z[G];delete C[D]}delete n[M]}}function E(M){if(n[M.id]===void 0)return;let C=n[M.id];for(let D in C){let z=C[D];for(let G in z)h(z[G].object),delete z[G];delete C[D]}delete n[M.id]}function R(M){for(let C in n){let D=n[C];if(D[M.id]===void 0)continue;let z=D[M.id];for(let G in z)h(z[G].object),delete z[G];delete D[M.id]}}function P(){S(),a=!0,r!==i&&(r=i,l(r.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:P,resetDefaultState:S,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfProgram:R,initAttributes:b,enableAttribute:g,disableUnusedAttributes:v}}function Jv(s,e,t){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),t.update(h,n,1)}function a(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function o(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];t.update(f,n,1)}function c(l,h,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<l.length;m++)a(l[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let m=0;for(let b=0;b<u;b++)m+=h[b]*d[b];t.update(m,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Zv(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(R){return!(R!==gn&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let P=R===nn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Fn&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Vn&&!P)}function c(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),_=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=m>0,E=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:b,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:w,maxSamples:E}}function Qv(s){let e=this,t=null,n=0,i=!1,r=!1,a=new hi,o=new He,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,b=u.clipIntersection,g=u.clipShadows,p=s.get(u);if(!i||m===null||m.length===0||r&&!g)r?h(null):l();else{let v=r?0:n,_=v*4,x=p.clippingState||null;c.value=x,x=h(m,d,_,f);for(let w=0;w!==_;++w)x[w]=t[w];p.clippingState=x,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,m){let b=u!==null?u.length:0,g=null;if(b!==0){if(g=c.value,m!==!0||g===null){let p=f+b*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let _=0,x=f;_!==b;++_,x+=4)a.copy(u[_]).applyMatrix4(v,o),a.normal.toArray(g,x),g[x+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,g}}function e_(s){let e=new WeakMap;function t(a,o){return o===qc?a.mapping=zs:o===Xc&&(a.mapping=Os),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===qc||o===Xc)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new bc(c.height);return l.fromEquirectangularTexture(s,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}function n_(s){let e=[],t=[],n=[],i=s,r=s-Hr+1+Wp.length;for(let a=0;a<r;a++){let o=Math.pow(2,i);t.push(o);let c=1/o;a>s-Hr?c=Wp[a-s+Hr-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,b=3,g=2,p=1,v=new Float32Array(b*m*f),_=new Float32Array(g*m*f),x=new Float32Array(p*m*f);for(let E=0;E<f;E++){let R=E%3*2/3-1,P=E>2?0:-1,S=[R,P,0,R+2/3,P,0,R+2/3,P+1,0,R,P,0,R+2/3,P+1,0,R,P+1,0];v.set(S,b*m*E),_.set(d,g*m*E);let M=[E,E,E,E,E,E];x.set(M,p*m*E)}let w=new mt;w.setAttribute("position",new wt(v,b)),w.setAttribute("uv",new wt(_,g)),w.setAttribute("faceIndex",new wt(x,p)),e.push(w),i>Hr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function jp(s,e,t){let n=new zt(s,e,t);return n.texture.mapping=$a,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Dl(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function i_(s,e,t){let n=new Float32Array(qs),i=new I(0,1,0);return new Qe({name:"SphericalGaussianBlur",defines:{n:qs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ed(),fragmentShader:`

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
		`,blending:Gt,depthTest:!1,depthWrite:!1})}function $p(){return new Qe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ed(),fragmentShader:`

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
		`,blending:Gt,depthTest:!1,depthWrite:!1})}function Yp(){return new Qe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ed(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gt,depthTest:!1,depthWrite:!1})}function ed(){return`

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
	`}function s_(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===qc||c===Xc,h=c===zs||c===Os;if(l||h){let u=e.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Ul(s)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return l&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new Ul(s)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function r_(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&Sr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function a_(s,e,t,n){let i={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",a),delete i[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let f in d)e.update(d[f],s.ARRAY_BUFFER)}function l(u){let d=[],f=u.index,m=u.attributes.position,b=0;if(f!==null){let v=f.array;b=f.version;for(let _=0,x=v.length;_<x;_+=3){let w=v[_+0],E=v[_+1],R=v[_+2];d.push(w,E,E,R,R,w)}}else if(m!==void 0){let v=m.array;b=m.version;for(let _=0,x=v.length/3-1;_<x;_+=3){let w=_+0,E=_+1,R=_+2;d.push(w,E,E,R,R,w)}}else return;let g=new(Du(d)?ya:_a)(d,1);g.version=b;let p=r.get(u);p&&e.remove(p),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function o_(s,e,t){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,f){s.drawElements(n,f,r,d*a),t.update(f,n,1)}function l(d,f,m){m!==0&&(s.drawElementsInstanced(n,f,r,d*a,m),t.update(f,n,m))}function h(d,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];t.update(g,n,1)}function u(d,f,m,b){if(m===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)l(d[p]/a,f[p],b[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,b,0,m);let p=0;for(let v=0;v<m;v++)p+=f[v]*b[v];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function c_(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function l_(s,e,t){let n=new WeakMap,i=new tt;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let S=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],_=0;f===!0&&(_=1),m===!0&&(_=2),b===!0&&(_=3);let x=o.attributes.position.count*_,w=1;x>e.maxTextureSize&&(w=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let E=new Float32Array(x*w*4*u),R=new va(E,x,w,u);R.type=Vn,R.needsUpdate=!0;let P=_*4;for(let M=0;M<u;M++){let C=g[M],D=p[M],z=v[M],G=x*w*4*M;for(let X=0;X<C.count;X++){let W=X*P;f===!0&&(i.fromBufferAttribute(C,X),E[G+W+0]=i.x,E[G+W+1]=i.y,E[G+W+2]=i.z,E[G+W+3]=0),m===!0&&(i.fromBufferAttribute(D,X),E[G+W+4]=i.x,E[G+W+5]=i.y,E[G+W+6]=i.z,E[G+W+7]=0),b===!0&&(i.fromBufferAttribute(z,X),E[G+W+8]=i.x,E[G+W+9]=i.y,E[G+W+10]=i.z,E[G+W+11]=z.itemSize===4?i.w:1)}}d={count:u,texture:R,size:new ve(x,w)},n.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let f=0;for(let b=0;b<l.length;b++)f+=l[b];let m=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(s,"morphTargetBaseInfluence",m),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function h_(s,e,t,n){let i=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function a(){i=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}function Gr(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=Jp[i];if(r===void 0&&(r=new Float32Array(i),Jp[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function qt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Xt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function zl(s,e){let t=Zp[e];t===void 0&&(t=new Int32Array(e),Zp[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function u_(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function d_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;s.uniform2fv(this.addr,e),Xt(t,e)}}function f_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(qt(t,e))return;s.uniform3fv(this.addr,e),Xt(t,e)}}function p_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;s.uniform4fv(this.addr,e),Xt(t,e)}}function m_(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Xt(t,e)}else{if(qt(t,n))return;tm.set(n),s.uniformMatrix2fv(this.addr,!1,tm),Xt(t,n)}}function g_(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Xt(t,e)}else{if(qt(t,n))return;em.set(n),s.uniformMatrix3fv(this.addr,!1,em),Xt(t,n)}}function b_(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Xt(t,e)}else{if(qt(t,n))return;Qp.set(n),s.uniformMatrix4fv(this.addr,!1,Qp),Xt(t,n)}}function x_(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function v_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;s.uniform2iv(this.addr,e),Xt(t,e)}}function __(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;s.uniform3iv(this.addr,e),Xt(t,e)}}function y_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;s.uniform4iv(this.addr,e),Xt(t,e)}}function M_(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function S_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;s.uniform2uiv(this.addr,e),Xt(t,e)}}function T_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;s.uniform3uiv(this.addr,e),Xt(t,e)}}function w_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;s.uniform4uiv(this.addr,e),Xt(t,e)}}function E_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Kp.compareFunction=Iu,r=Kp):r=pm,t.setTexture2D(e||r,i)}function A_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||gm,i)}function R_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||bm,i)}function C_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||mm,i)}function I_(s){switch(s){case 5126:return u_;case 35664:return d_;case 35665:return f_;case 35666:return p_;case 35674:return m_;case 35675:return g_;case 35676:return b_;case 5124:case 35670:return x_;case 35667:case 35671:return v_;case 35668:case 35672:return __;case 35669:case 35673:return y_;case 5125:return M_;case 36294:return S_;case 36295:return T_;case 36296:return w_;case 35678:case 36198:case 36298:case 36306:case 35682:return E_;case 35679:case 36299:case 36307:return A_;case 35680:case 36300:case 36308:case 36293:return R_;case 36289:case 36303:case 36311:case 36292:return C_}}function P_(s,e){s.uniform1fv(this.addr,e)}function k_(s,e){let t=Gr(e,this.size,2);s.uniform2fv(this.addr,t)}function L_(s,e){let t=Gr(e,this.size,3);s.uniform3fv(this.addr,t)}function D_(s,e){let t=Gr(e,this.size,4);s.uniform4fv(this.addr,t)}function N_(s,e){let t=Gr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function U_(s,e){let t=Gr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function F_(s,e){let t=Gr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function z_(s,e){s.uniform1iv(this.addr,e)}function O_(s,e){s.uniform2iv(this.addr,e)}function B_(s,e){s.uniform3iv(this.addr,e)}function H_(s,e){s.uniform4iv(this.addr,e)}function V_(s,e){s.uniform1uiv(this.addr,e)}function G_(s,e){s.uniform2uiv(this.addr,e)}function W_(s,e){s.uniform3uiv(this.addr,e)}function q_(s,e){s.uniform4uiv(this.addr,e)}function X_(s,e,t){let n=this.cache,i=e.length,r=zl(t,i);qt(n,r)||(s.uniform1iv(this.addr,r),Xt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||pm,r[a])}function j_(s,e,t){let n=this.cache,i=e.length,r=zl(t,i);qt(n,r)||(s.uniform1iv(this.addr,r),Xt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||gm,r[a])}function $_(s,e,t){let n=this.cache,i=e.length,r=zl(t,i);qt(n,r)||(s.uniform1iv(this.addr,r),Xt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||bm,r[a])}function Y_(s,e,t){let n=this.cache,i=e.length,r=zl(t,i);qt(n,r)||(s.uniform1iv(this.addr,r),Xt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||mm,r[a])}function K_(s){switch(s){case 5126:return P_;case 35664:return k_;case 35665:return L_;case 35666:return D_;case 35674:return N_;case 35675:return U_;case 35676:return F_;case 5124:case 35670:return z_;case 35667:case 35671:return O_;case 35668:case 35672:return B_;case 35669:case 35673:return H_;case 5125:return V_;case 36294:return G_;case 36295:return W_;case 36296:return q_;case 35678:case 36198:case 36298:case 36306:case 35682:return X_;case 35679:case 36299:case 36307:return j_;case 35680:case 36300:case 36308:case 36293:return $_;case 36289:case 36303:case 36311:case 36292:return Y_}}function nm(s,e){s.seq.push(e),s.map[e.id]=e}function J_(s,e,t){let n=s.name,i=n.length;for(qu.lastIndex=0;;){let r=qu.exec(n),a=qu.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){nm(t,l===void 0?new Xu(o,s,e):new ju(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new $u(o),nm(t,u)),t=u}}}function im(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}function ey(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function ty(s){Xe._getMatrix(sm,Xe.workingColorSpace,s);let e=`mat3( ${sm.elements.map(t=>t.toFixed(4))} )`;switch(Xe.getTransfer(s)){case ga:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function rm(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+ey(s.getShaderSource(e),o)}else return r}function ny(s,e){let t=ty(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function iy(s,e){let t;switch(e){case Oc:t="Linear";break;case Bc:t="Reinhard";break;case Hc:t="Cineon";break;case Ur:t="ACESFilmic";break;case Gc:t="AgX";break;case Wc:t="Neutral";break;case Vc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function sy(){Xe.getLuminanceCoefficients(Nl);let s=Nl.x.toFixed(4),e=Nl.y.toFixed(4),t=Nl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ry(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(to).join(`
`)}function ay(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function oy(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function to(s){return s!==""}function am(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function om(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function Yu(s){return s.replace(cy,hy)}function hy(s,e){let t=We[e];if(t===void 0){let n=ly.get(e);if(n!==void 0)t=We[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Yu(t)}function cm(s){return s.replace(uy,dy)}function dy(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function lm(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function fy(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===mu?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Pc?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===vi&&(e="SHADOWMAP_TYPE_VSM"),e}function py(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case zs:case Os:e="ENVMAP_TYPE_CUBE";break;case $a:e="ENVMAP_TYPE_CUBE_UV";break}return e}function my(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Os:e="ENVMAP_MODE_REFRACTION";break}return e}function gy(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case xu:e="ENVMAP_BLENDING_MULTIPLY";break;case Tp:e="ENVMAP_BLENDING_MIX";break;case wp:e="ENVMAP_BLENDING_ADD";break}return e}function by(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function xy(s,e,t,n){let i=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=fy(t),l=py(t),h=my(t),u=gy(t),d=by(t),f=ry(t),m=ay(r),b=i.createProgram(),g,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(to).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(to).join(`
`),p.length>0&&(p+=`
`)):(g=[lm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(to).join(`
`),p=[lm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gi?"#define TONE_MAPPING":"",t.toneMapping!==Gi?We.tonemapping_pars_fragment:"",t.toneMapping!==Gi?iy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,ny("linearToOutputTexel",t.outputColorSpace),sy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(to).join(`
`)),a=Yu(a),a=am(a,t),a=om(a,t),o=Yu(o),o=am(o,t),o=om(o,t),a=cm(a),o=cm(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Pu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=v+g+a,x=v+p+o,w=im(i,i.VERTEX_SHADER,_),E=im(i,i.FRAGMENT_SHADER,x);i.attachShader(b,w),i.attachShader(b,E),t.index0AttributeName!==void 0?i.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(b,0,"position"),i.linkProgram(b);function R(C){if(s.debug.checkShaderErrors){let D=i.getProgramInfoLog(b)||"",z=i.getShaderInfoLog(w)||"",G=i.getShaderInfoLog(E)||"",X=D.trim(),W=z.trim(),ee=G.trim(),H=!0,Z=!0;if(i.getProgramParameter(b,i.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,b,w,E);else{let ce=rm(i,w,"vertex"),_e=rm(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(b,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+X+`
`+ce+`
`+_e)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(W===""||ee==="")&&(Z=!1);Z&&(C.diagnostics={runnable:H,programLog:X,vertexShader:{log:W,prefix:g},fragmentShader:{log:ee,prefix:p}})}i.deleteShader(w),i.deleteShader(E),P=new Vr(i,b),S=oy(i,b)}let P;this.getUniforms=function(){return P===void 0&&R(this),P};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(b,Z_)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Q_++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=w,this.fragmentShader=E,this}function _y(s,e,t,n,i,r,a){let o=new wr,c=new Ku,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures,f=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(S){return l.add(S),S===0?"uv":`uv${S}`}function g(S,M,C,D,z){let G=D.fog,X=z.geometry,W=S.isMeshStandardMaterial?D.environment:null,ee=(S.isMeshStandardMaterial?t:e).get(S.envMap||W),H=ee&&ee.mapping===$a?ee.image.height:null,Z=m[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let ce=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,_e=ce!==void 0?ce.length:0,ze=0;X.morphAttributes.position!==void 0&&(ze=1),X.morphAttributes.normal!==void 0&&(ze=2),X.morphAttributes.color!==void 0&&(ze=3);let it,ct,Je,j;if(Z){let rt=_i[Z];it=rt.vertexShader,ct=rt.fragmentShader}else it=S.vertexShader,ct=S.fragmentShader,c.update(S),Je=c.getVertexShaderID(S),j=c.getFragmentShaderID(S);let Y=s.getRenderTarget(),ue=s.state.buffers.depth.getReversed(),Ee=z.isInstancedMesh===!0,fe=z.isBatchedMesh===!0,je=!!S.map,Ot=!!S.matcap,k=!!ee,ht=!!S.aoMap,Fe=!!S.lightMap,Ie=!!S.bumpMap,ge=!!S.normalMap,ut=!!S.displacementMap,be=!!S.emissiveMap,Oe=!!S.metalnessMap,kt=!!S.roughnessMap,yt=S.anisotropy>0,A=S.clearcoat>0,y=S.dispersion>0,F=S.iridescence>0,q=S.sheen>0,K=S.transmission>0,V=yt&&!!S.anisotropyMap,ye=A&&!!S.clearcoatMap,ie=A&&!!S.clearcoatNormalMap,pe=A&&!!S.clearcoatRoughnessMap,Te=F&&!!S.iridescenceMap,te=F&&!!S.iridescenceThicknessMap,le=q&&!!S.sheenColorMap,ke=q&&!!S.sheenRoughnessMap,we=!!S.specularMap,re=!!S.specularColorMap,Ne=!!S.specularIntensityMap,L=K&&!!S.transmissionMap,J=K&&!!S.thicknessMap,se=!!S.gradientMap,xe=!!S.alphaMap,Q=S.alphaTest>0,$=!!S.alphaHash,Se=!!S.extensions,Be=Gi;S.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Be=s.toneMapping);let xt={shaderID:Z,shaderType:S.type,shaderName:S.name,vertexShader:it,fragmentShader:ct,defines:S.defines,customVertexShaderID:Je,customFragmentShaderID:j,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:fe,batchingColor:fe&&z._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&z.instanceColor!==null,instancingMorph:Ee&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Y===null?s.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:en,alphaToCoverage:!!S.alphaToCoverage,map:je,matcap:Ot,envMap:k,envMapMode:k&&ee.mapping,envMapCubeUVHeight:H,aoMap:ht,lightMap:Fe,bumpMap:Ie,normalMap:ge,displacementMap:d&&ut,emissiveMap:be,normalMapObjectSpace:ge&&S.normalMapType===Pp,normalMapTangentSpace:ge&&S.normalMapType===kl,metalnessMap:Oe,roughnessMap:kt,anisotropy:yt,anisotropyMap:V,clearcoat:A,clearcoatMap:ye,clearcoatNormalMap:ie,clearcoatRoughnessMap:pe,dispersion:y,iridescence:F,iridescenceMap:Te,iridescenceThicknessMap:te,sheen:q,sheenColorMap:le,sheenRoughnessMap:ke,specularMap:we,specularColorMap:re,specularIntensityMap:Ne,transmission:K,transmissionMap:L,thicknessMap:J,gradientMap:se,opaque:S.transparent===!1&&S.blending===Ni&&S.alphaToCoverage===!1,alphaMap:xe,alphaTest:Q,alphaHash:$,combine:S.combine,mapUv:je&&b(S.map.channel),aoMapUv:ht&&b(S.aoMap.channel),lightMapUv:Fe&&b(S.lightMap.channel),bumpMapUv:Ie&&b(S.bumpMap.channel),normalMapUv:ge&&b(S.normalMap.channel),displacementMapUv:ut&&b(S.displacementMap.channel),emissiveMapUv:be&&b(S.emissiveMap.channel),metalnessMapUv:Oe&&b(S.metalnessMap.channel),roughnessMapUv:kt&&b(S.roughnessMap.channel),anisotropyMapUv:V&&b(S.anisotropyMap.channel),clearcoatMapUv:ye&&b(S.clearcoatMap.channel),clearcoatNormalMapUv:ie&&b(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&b(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&b(S.iridescenceMap.channel),iridescenceThicknessMapUv:te&&b(S.iridescenceThicknessMap.channel),sheenColorMapUv:le&&b(S.sheenColorMap.channel),sheenRoughnessMapUv:ke&&b(S.sheenRoughnessMap.channel),specularMapUv:we&&b(S.specularMap.channel),specularColorMapUv:re&&b(S.specularColorMap.channel),specularIntensityMapUv:Ne&&b(S.specularIntensityMap.channel),transmissionMapUv:L&&b(S.transmissionMap.channel),thicknessMapUv:J&&b(S.thicknessMap.channel),alphaMapUv:xe&&b(S.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(ge||yt),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!X.attributes.uv&&(je||xe),fog:!!G,useFog:S.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ue,skinning:z.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:ze,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:Be,decodeVideoTexture:je&&S.map.isVideoTexture===!0&&Xe.getTransfer(S.map.colorSpace)===st,decodeVideoTextureEmissive:be&&S.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(S.emissiveMap.colorSpace)===st,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Zt,flipSided:S.side===mn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Se&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&S.extensions.multiDraw===!0||fe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return xt.vertexUv1s=l.has(1),xt.vertexUv2s=l.has(2),xt.vertexUv3s=l.has(3),l.clear(),xt}function p(S){let M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(let C in S.defines)M.push(C),M.push(S.defines[C]);return S.isRawShaderMaterial===!1&&(v(M,S),_(M,S),M.push(s.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function v(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function _(S,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function x(S){let M=m[S.type],C;if(M){let D=_i[M];C=bn.clone(D.uniforms)}else C=S.uniforms;return C}function w(S,M){let C;for(let D=0,z=h.length;D<z;D++){let G=h[D];if(G.cacheKey===M){C=G,++C.usedTimes;break}}return C===void 0&&(C=new xy(s,M,S,r),h.push(C)),C}function E(S){if(--S.usedTimes===0){let M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function R(S){c.remove(S)}function P(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:x,acquireProgram:w,releaseProgram:E,releaseShaderCache:R,programs:h,dispose:P}}function yy(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function My(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function hm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function um(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u,d,f,m,b,g){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:b,group:g},s[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=b,p.group=g),e++,p}function o(u,d,f,m,b,g){let p=a(u,d,f,m,b,g);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function c(u,d,f,m,b,g){let p=a(u,d,f,m,b,g);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||My),n.length>1&&n.sort(d||hm),i.length>1&&i.sort(d||hm)}function h(){for(let u=e,d=s.length;u<d;u++){let f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:h,sort:l}}function Sy(){let s=new WeakMap;function e(n,i){let r=s.get(n),a;return r===void 0?(a=new um,s.set(n,[a])):i>=r.length?(a=new um,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Ty(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new ae};break;case"SpotLight":t={position:new I,direction:new I,color:new ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new ae,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new ae,groundColor:new ae};break;case"RectAreaLight":t={color:new ae,position:new I,halfWidth:new I,halfHeight:new I};break}return s[e.id]=t,t}}}function wy(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}function Ay(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Ry(s){let e=new Ty,t=wy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);let i=new I,r=new Ce,a=new Ce;function o(l){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,m=0,b=0,g=0,p=0,v=0,_=0,x=0,w=0,E=0,R=0;l.sort(Ay);for(let S=0,M=l.length;S<M;S++){let C=l[S],D=C.color,z=C.intensity,G=C.distance,X=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=D.r*z,u+=D.g*z,d+=D.b*z;else if(C.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(C.sh.coefficients[W],z);R++}else if(C.isDirectionalLight){let W=e.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let ee=C.shadow,H=t.get(C);H.shadowIntensity=ee.intensity,H.shadowBias=ee.bias,H.shadowNormalBias=ee.normalBias,H.shadowRadius=ee.radius,H.shadowMapSize=ee.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=X,n.directionalShadowMatrix[f]=C.shadow.matrix,v++}n.directional[f]=W,f++}else if(C.isSpotLight){let W=e.get(C);W.position.setFromMatrixPosition(C.matrixWorld),W.color.copy(D).multiplyScalar(z),W.distance=G,W.coneCos=Math.cos(C.angle),W.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),W.decay=C.decay,n.spot[b]=W;let ee=C.shadow;if(C.map&&(n.spotLightMap[w]=C.map,w++,ee.updateMatrices(C),C.castShadow&&E++),n.spotLightMatrix[b]=ee.matrix,C.castShadow){let H=t.get(C);H.shadowIntensity=ee.intensity,H.shadowBias=ee.bias,H.shadowNormalBias=ee.normalBias,H.shadowRadius=ee.radius,H.shadowMapSize=ee.mapSize,n.spotShadow[b]=H,n.spotShadowMap[b]=X,x++}b++}else if(C.isRectAreaLight){let W=e.get(C);W.color.copy(D).multiplyScalar(z),W.halfWidth.set(C.width*.5,0,0),W.halfHeight.set(0,C.height*.5,0),n.rectArea[g]=W,g++}else if(C.isPointLight){let W=e.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),W.distance=C.distance,W.decay=C.decay,C.castShadow){let ee=C.shadow,H=t.get(C);H.shadowIntensity=ee.intensity,H.shadowBias=ee.bias,H.shadowNormalBias=ee.normalBias,H.shadowRadius=ee.radius,H.shadowMapSize=ee.mapSize,H.shadowCameraNear=ee.camera.near,H.shadowCameraFar=ee.camera.far,n.pointShadow[m]=H,n.pointShadowMap[m]=X,n.pointShadowMatrix[m]=C.shadow.matrix,_++}n.point[m]=W,m++}else if(C.isHemisphereLight){let W=e.get(C);W.skyColor.copy(C.color).multiplyScalar(z),W.groundColor.copy(C.groundColor).multiplyScalar(z),n.hemi[p]=W,p++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=oe.LTC_FLOAT_1,n.rectAreaLTC2=oe.LTC_FLOAT_2):(n.rectAreaLTC1=oe.LTC_HALF_1,n.rectAreaLTC2=oe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let P=n.hash;(P.directionalLength!==f||P.pointLength!==m||P.spotLength!==b||P.rectAreaLength!==g||P.hemiLength!==p||P.numDirectionalShadows!==v||P.numPointShadows!==_||P.numSpotShadows!==x||P.numSpotMaps!==w||P.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=b,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=x+w-E,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=R,P.directionalLength=f,P.pointLength=m,P.spotLength=b,P.rectAreaLength=g,P.hemiLength=p,P.numDirectionalShadows=v,P.numPointShadows=_,P.numSpotShadows=x,P.numSpotMaps=w,P.numLightProbes=R,n.version=Ey++)}function c(l,h){let u=0,d=0,f=0,m=0,b=0,g=h.matrixWorldInverse;for(let p=0,v=l.length;p<v;p++){let _=l[p];if(_.isDirectionalLight){let x=n.directional[u];x.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(g),u++}else if(_.isSpotLight){let x=n.spot[f];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(g),f++}else if(_.isRectAreaLight){let x=n.rectArea[m];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(g),a.identity(),r.copy(_.matrixWorld),r.premultiply(g),a.extractRotation(r),x.halfWidth.set(_.width*.5,0,0),x.halfHeight.set(0,_.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),m++}else if(_.isPointLight){let x=n.point[d];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(g),d++}else if(_.isHemisphereLight){let x=n.hemi[b];x.direction.setFromMatrixPosition(_.matrixWorld),x.direction.transformDirection(g),b++}}}return{setup:o,setupView:c,state:n}}function dm(s){let e=new Ry(s),t=[],n=[];function i(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Cy(s){let e=new WeakMap;function t(i,r=0){let a=e.get(i),o;return a===void 0?(o=new dm(s),e.set(i,[o])):r>=a.length?(o=new dm(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}function ky(s,e,t){let n=new Pr,i=new ve,r=new ve,a=new tt,o=new yc({depthPacking:Ip}),c=new Mc,l={},h=t.maxTextureSize,u={[ti]:mn,[mn]:ti,[Zt]:Zt},d=new Qe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ve},radius:{value:4}},vertexShader:Iy,fragmentShader:Py}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new mt;m.setAttribute("position",new wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Ge(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mu;let p=this.type;this.render=function(E,R,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;let S=s.getRenderTarget(),M=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),D=s.state;D.setBlending(Gt),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let z=p!==vi&&this.type===vi,G=p===vi&&this.type!==vi;for(let X=0,W=E.length;X<W;X++){let ee=E[X],H=ee.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);let Z=H.getFrameExtents();if(i.multiply(Z),r.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/Z.x),i.x=r.x*Z.x,H.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/Z.y),i.y=r.y*Z.y,H.mapSize.y=r.y)),H.map===null||z===!0||G===!0){let _e=this.type!==vi?{minFilter:Vt,magFilter:Vt}:{};H.map!==null&&H.map.dispose(),H.map=new zt(i.x,i.y,_e),H.map.texture.name=ee.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();let ce=H.getViewportCount();for(let _e=0;_e<ce;_e++){let ze=H.getViewport(_e);a.set(r.x*ze.x,r.y*ze.y,r.x*ze.z,r.y*ze.w),D.viewport(a),H.updateMatrices(ee,_e),n=H.getFrustum(),x(R,P,H.camera,ee,this.type)}H.isPointLightShadow!==!0&&this.type===vi&&v(H,P),H.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(S,M,C)};function v(E,R){let P=e.update(b);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new zt(i.x,i.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(R,null,P,d,b,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(R,null,P,f,b,null)}function _(E,R,P,S){let M=null,C=P.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(C!==void 0)M=C;else if(M=P.isPointLight===!0?c:o,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let D=M.uuid,z=R.uuid,G=l[D];G===void 0&&(G={},l[D]=G);let X=G[z];X===void 0&&(X=M.clone(),G[z]=X,R.addEventListener("dispose",w)),M=X}if(M.visible=R.visible,M.wireframe=R.wireframe,S===vi?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:u[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let D=s.properties.get(M);D.light=P}return M}function x(E,R,P,S,M){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===vi)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,E.matrixWorld);let z=e.update(E),G=E.material;if(Array.isArray(G)){let X=z.groups;for(let W=0,ee=X.length;W<ee;W++){let H=X[W],Z=G[H.materialIndex];if(Z&&Z.visible){let ce=_(E,Z,S,M);E.onBeforeShadow(s,E,R,P,z,ce,H),s.renderBufferDirect(P,null,z,ce,E,H),E.onAfterShadow(s,E,R,P,z,ce,H)}}}else if(G.visible){let X=_(E,G,S,M);E.onBeforeShadow(s,E,R,P,z,X,null),s.renderBufferDirect(P,null,z,X,E,null),E.onAfterShadow(s,E,R,P,z,X,null)}}let D=E.children;for(let z=0,G=D.length;z<G;z++)x(D[z],R,P,S,M)}function w(E){E.target.removeEventListener("dispose",w);for(let P in l){let S=l[P],M=E.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}function Dy(s,e){function t(){let L=!1,J=new tt,se=null,xe=new tt(0,0,0,0);return{setMask:function(Q){se!==Q&&!L&&(s.colorMask(Q,Q,Q,Q),se=Q)},setLocked:function(Q){L=Q},setClear:function(Q,$,Se,Be,xt){xt===!0&&(Q*=Be,$*=Be,Se*=Be),J.set(Q,$,Se,Be),xe.equals(J)===!1&&(s.clearColor(Q,$,Se,Be),xe.copy(J))},reset:function(){L=!1,se=null,xe.set(-1,0,0,0)}}}function n(){let L=!1,J=!1,se=null,xe=null,Q=null;return{setReversed:function($){if(J!==$){let Se=e.get("EXT_clip_control");$?Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.ZERO_TO_ONE_EXT):Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.NEGATIVE_ONE_TO_ONE_EXT),J=$;let Be=Q;Q=null,this.setClear(Be)}},getReversed:function(){return J},setTest:function($){$?Y(s.DEPTH_TEST):ue(s.DEPTH_TEST)},setMask:function($){se!==$&&!L&&(s.depthMask($),se=$)},setFunc:function($){if(J&&($=Ly[$]),xe!==$){switch($){case Lc:s.depthFunc(s.NEVER);break;case Dc:s.depthFunc(s.ALWAYS);break;case Nc:s.depthFunc(s.LESS);break;case ws:s.depthFunc(s.LEQUAL);break;case Uc:s.depthFunc(s.EQUAL);break;case Fc:s.depthFunc(s.GEQUAL);break;case Nr:s.depthFunc(s.GREATER);break;case zc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}xe=$}},setLocked:function($){L=$},setClear:function($){Q!==$&&(J&&($=1-$),s.clearDepth($),Q=$)},reset:function(){L=!1,se=null,xe=null,Q=null,J=!1}}}function i(){let L=!1,J=null,se=null,xe=null,Q=null,$=null,Se=null,Be=null,xt=null;return{setTest:function(rt){L||(rt?Y(s.STENCIL_TEST):ue(s.STENCIL_TEST))},setMask:function(rt){J!==rt&&!L&&(s.stencilMask(rt),J=rt)},setFunc:function(rt,Ai,li){(se!==rt||xe!==Ai||Q!==li)&&(s.stencilFunc(rt,Ai,li),se=rt,xe=Ai,Q=li)},setOp:function(rt,Ai,li){($!==rt||Se!==Ai||Be!==li)&&(s.stencilOp(rt,Ai,li),$=rt,Se=Ai,Be=li)},setLocked:function(rt){L=rt},setClear:function(rt){xt!==rt&&(s.clearStencil(rt),xt=rt)},reset:function(){L=!1,J=null,se=null,xe=null,Q=null,$=null,Se=null,Be=null,xt=null}}}let r=new t,a=new n,o=new i,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,f=[],m=null,b=!1,g=null,p=null,v=null,_=null,x=null,w=null,E=null,R=new ae(0,0,0),P=0,S=!1,M=null,C=null,D=null,z=null,G=null,X=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,ee=0,H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(H)[1]),W=ee>=1):H.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),W=ee>=2);let Z=null,ce={},_e=s.getParameter(s.SCISSOR_BOX),ze=s.getParameter(s.VIEWPORT),it=new tt().fromArray(_e),ct=new tt().fromArray(ze);function Je(L,J,se,xe){let Q=new Uint8Array(4),$=s.createTexture();s.bindTexture(L,$),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Se=0;Se<se;Se++)L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY?s.texImage3D(J,0,s.RGBA,1,1,xe,0,s.RGBA,s.UNSIGNED_BYTE,Q):s.texImage2D(J+Se,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Q);return $}let j={};j[s.TEXTURE_2D]=Je(s.TEXTURE_2D,s.TEXTURE_2D,1),j[s.TEXTURE_CUBE_MAP]=Je(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[s.TEXTURE_2D_ARRAY]=Je(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),j[s.TEXTURE_3D]=Je(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Y(s.DEPTH_TEST),a.setFunc(ws),Ie(!1),ge(pu),Y(s.CULL_FACE),ht(Gt);function Y(L){h[L]!==!0&&(s.enable(L),h[L]=!0)}function ue(L){h[L]!==!1&&(s.disable(L),h[L]=!1)}function Ee(L,J){return u[L]!==J?(s.bindFramebuffer(L,J),u[L]=J,L===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=J),L===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=J),!0):!1}function fe(L,J){let se=f,xe=!1;if(L){se=d.get(J),se===void 0&&(se=[],d.set(J,se));let Q=L.textures;if(se.length!==Q.length||se[0]!==s.COLOR_ATTACHMENT0){for(let $=0,Se=Q.length;$<Se;$++)se[$]=s.COLOR_ATTACHMENT0+$;se.length=Q.length,xe=!0}}else se[0]!==s.BACK&&(se[0]=s.BACK,xe=!0);xe&&s.drawBuffers(se)}function je(L){return m!==L?(s.useProgram(L),m=L,!0):!1}let Ot={[Dn]:s.FUNC_ADD,[hp]:s.FUNC_SUBTRACT,[up]:s.FUNC_REVERSE_SUBTRACT};Ot[dp]=s.MIN,Ot[fp]=s.MAX;let k={[Fs]:s.ZERO,[pp]:s.ONE,[mp]:s.SRC_COLOR,[hc]:s.SRC_ALPHA,[vp]:s.SRC_ALPHA_SATURATE,[ja]:s.DST_COLOR,[Xa]:s.DST_ALPHA,[gp]:s.ONE_MINUS_SRC_COLOR,[uc]:s.ONE_MINUS_SRC_ALPHA,[xp]:s.ONE_MINUS_DST_COLOR,[bp]:s.ONE_MINUS_DST_ALPHA,[_p]:s.CONSTANT_COLOR,[yp]:s.ONE_MINUS_CONSTANT_COLOR,[Mp]:s.CONSTANT_ALPHA,[Sp]:s.ONE_MINUS_CONSTANT_ALPHA};function ht(L,J,se,xe,Q,$,Se,Be,xt,rt){if(L===Gt){b===!0&&(ue(s.BLEND),b=!1);return}if(b===!1&&(Y(s.BLEND),b=!0),L!==kc){if(L!==g||rt!==S){if((p!==Dn||x!==Dn)&&(s.blendEquation(s.FUNC_ADD),p=Dn,x=Dn),rt)switch(L){case Ni:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case cn:s.blendFunc(s.ONE,s.ONE);break;case gu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case bu:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Ni:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case cn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case gu:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bu:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}v=null,_=null,w=null,E=null,R.set(0,0,0),P=0,g=L,S=rt}return}Q=Q||J,$=$||se,Se=Se||xe,(J!==p||Q!==x)&&(s.blendEquationSeparate(Ot[J],Ot[Q]),p=J,x=Q),(se!==v||xe!==_||$!==w||Se!==E)&&(s.blendFuncSeparate(k[se],k[xe],k[$],k[Se]),v=se,_=xe,w=$,E=Se),(Be.equals(R)===!1||xt!==P)&&(s.blendColor(Be.r,Be.g,Be.b,xt),R.copy(Be),P=xt),g=L,S=!1}function Fe(L,J){L.side===Zt?ue(s.CULL_FACE):Y(s.CULL_FACE);let se=L.side===mn;J&&(se=!se),Ie(se),L.blending===Ni&&L.transparent===!1?ht(Gt):ht(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);let xe=L.stencilWrite;o.setTest(xe),xe&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),be(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Y(s.SAMPLE_ALPHA_TO_COVERAGE):ue(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(L){M!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),M=L)}function ge(L){L!==cp?(Y(s.CULL_FACE),L!==C&&(L===pu?s.cullFace(s.BACK):L===lp?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ue(s.CULL_FACE),C=L}function ut(L){L!==D&&(W&&s.lineWidth(L),D=L)}function be(L,J,se){L?(Y(s.POLYGON_OFFSET_FILL),(z!==J||G!==se)&&(s.polygonOffset(J,se),z=J,G=se)):ue(s.POLYGON_OFFSET_FILL)}function Oe(L){L?Y(s.SCISSOR_TEST):ue(s.SCISSOR_TEST)}function kt(L){L===void 0&&(L=s.TEXTURE0+X-1),Z!==L&&(s.activeTexture(L),Z=L)}function yt(L,J,se){se===void 0&&(Z===null?se=s.TEXTURE0+X-1:se=Z);let xe=ce[se];xe===void 0&&(xe={type:void 0,texture:void 0},ce[se]=xe),(xe.type!==L||xe.texture!==J)&&(Z!==se&&(s.activeTexture(se),Z=se),s.bindTexture(L,J||j[L]),xe.type=L,xe.texture=J)}function A(){let L=ce[Z];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function y(){try{s.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function F(){try{s.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function q(){try{s.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function K(){try{s.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function V(){try{s.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ye(){try{s.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ie(){try{s.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pe(){try{s.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Te(){try{s.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function te(){try{s.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function le(L){it.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),it.copy(L))}function ke(L){ct.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),ct.copy(L))}function we(L,J){let se=l.get(J);se===void 0&&(se=new WeakMap,l.set(J,se));let xe=se.get(L);xe===void 0&&(xe=s.getUniformBlockIndex(J,L.name),se.set(L,xe))}function re(L,J){let xe=l.get(J).get(L);c.get(J)!==xe&&(s.uniformBlockBinding(J,xe,L.__bindingPointIndex),c.set(J,xe))}function Ne(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},Z=null,ce={},u={},d=new WeakMap,f=[],m=null,b=!1,g=null,p=null,v=null,_=null,x=null,w=null,E=null,R=new ae(0,0,0),P=0,S=!1,M=null,C=null,D=null,z=null,G=null,it.set(0,0,s.canvas.width,s.canvas.height),ct.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Y,disable:ue,bindFramebuffer:Ee,drawBuffers:fe,useProgram:je,setBlending:ht,setMaterial:Fe,setFlipSided:Ie,setCullFace:ge,setLineWidth:ut,setPolygonOffset:be,setScissorTest:Oe,activeTexture:kt,bindTexture:yt,unbindTexture:A,compressedTexImage2D:y,compressedTexImage3D:F,texImage2D:Te,texImage3D:te,updateUBOMapping:we,uniformBlockBinding:re,texStorage2D:ie,texStorage3D:pe,texSubImage2D:q,texSubImage3D:K,compressedTexSubImage2D:V,compressedTexSubImage3D:ye,scissor:le,viewport:ke,reset:Ne}}function Ny(s,e,t,n,i,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ve,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,y){return f?new OffscreenCanvas(A,y):Mr("canvas")}function b(A,y,F){let q=1,K=yt(A);if((K.width>F||K.height>F)&&(q=F/Math.max(K.width,K.height)),q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let V=Math.floor(q*K.width),ye=Math.floor(q*K.height);u===void 0&&(u=m(V,ye));let ie=y?m(V,ye):u;return ie.width=V,ie.height=ye,ie.getContext("2d").drawImage(A,0,0,V,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+V+"x"+ye+")."),ie}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),A;return A}function g(A){return A.generateMipmaps}function p(A){s.generateMipmap(A)}function v(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function _(A,y,F,q,K=!1){if(A!==null){if(s[A]!==void 0)return s[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let V=y;if(y===s.RED&&(F===s.FLOAT&&(V=s.R32F),F===s.HALF_FLOAT&&(V=s.R16F),F===s.UNSIGNED_BYTE&&(V=s.R8)),y===s.RED_INTEGER&&(F===s.UNSIGNED_BYTE&&(V=s.R8UI),F===s.UNSIGNED_SHORT&&(V=s.R16UI),F===s.UNSIGNED_INT&&(V=s.R32UI),F===s.BYTE&&(V=s.R8I),F===s.SHORT&&(V=s.R16I),F===s.INT&&(V=s.R32I)),y===s.RG&&(F===s.FLOAT&&(V=s.RG32F),F===s.HALF_FLOAT&&(V=s.RG16F),F===s.UNSIGNED_BYTE&&(V=s.RG8)),y===s.RG_INTEGER&&(F===s.UNSIGNED_BYTE&&(V=s.RG8UI),F===s.UNSIGNED_SHORT&&(V=s.RG16UI),F===s.UNSIGNED_INT&&(V=s.RG32UI),F===s.BYTE&&(V=s.RG8I),F===s.SHORT&&(V=s.RG16I),F===s.INT&&(V=s.RG32I)),y===s.RGB_INTEGER&&(F===s.UNSIGNED_BYTE&&(V=s.RGB8UI),F===s.UNSIGNED_SHORT&&(V=s.RGB16UI),F===s.UNSIGNED_INT&&(V=s.RGB32UI),F===s.BYTE&&(V=s.RGB8I),F===s.SHORT&&(V=s.RGB16I),F===s.INT&&(V=s.RGB32I)),y===s.RGBA_INTEGER&&(F===s.UNSIGNED_BYTE&&(V=s.RGBA8UI),F===s.UNSIGNED_SHORT&&(V=s.RGBA16UI),F===s.UNSIGNED_INT&&(V=s.RGBA32UI),F===s.BYTE&&(V=s.RGBA8I),F===s.SHORT&&(V=s.RGBA16I),F===s.INT&&(V=s.RGBA32I)),y===s.RGB&&(F===s.UNSIGNED_INT_5_9_9_9_REV&&(V=s.RGB9_E5),F===s.UNSIGNED_INT_10F_11F_11F_REV&&(V=s.R11F_G11F_B10F)),y===s.RGBA){let ye=K?ga:Xe.getTransfer(q);F===s.FLOAT&&(V=s.RGBA32F),F===s.HALF_FLOAT&&(V=s.RGBA16F),F===s.UNSIGNED_BYTE&&(V=ye===st?s.SRGB8_ALPHA8:s.RGBA8),F===s.UNSIGNED_SHORT_4_4_4_4&&(V=s.RGBA4),F===s.UNSIGNED_SHORT_5_5_5_1&&(V=s.RGB5_A1)}return(V===s.R16F||V===s.R32F||V===s.RG16F||V===s.RG32F||V===s.RGBA16F||V===s.RGBA32F)&&e.get("EXT_color_buffer_float"),V}function x(A,y){let F;return A?y===null||y===ls||y===hs?F=s.DEPTH24_STENCIL8:y===Vn?F=s.DEPTH32F_STENCIL8:y===zr&&(F=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ls||y===hs?F=s.DEPTH_COMPONENT24:y===Vn?F=s.DEPTH_COMPONENT32F:y===zr&&(F=s.DEPTH_COMPONENT16),F}function w(A,y){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==Vt&&A.minFilter!==fn?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function E(A){let y=A.target;y.removeEventListener("dispose",E),P(y),y.isVideoTexture&&h.delete(y)}function R(A){let y=A.target;y.removeEventListener("dispose",R),M(y)}function P(A){let y=n.get(A);if(y.__webglInit===void 0)return;let F=A.source,q=d.get(F);if(q){let K=q[y.__cacheKey];K.usedTimes--,K.usedTimes===0&&S(A),Object.keys(q).length===0&&d.delete(F)}n.remove(A)}function S(A){let y=n.get(A);s.deleteTexture(y.__webglTexture);let F=A.source,q=d.get(F);delete q[y.__cacheKey],a.memory.textures--}function M(A){let y=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(y.__webglFramebuffer[q]))for(let K=0;K<y.__webglFramebuffer[q].length;K++)s.deleteFramebuffer(y.__webglFramebuffer[q][K]);else s.deleteFramebuffer(y.__webglFramebuffer[q]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[q])}else{if(Array.isArray(y.__webglFramebuffer))for(let q=0;q<y.__webglFramebuffer.length;q++)s.deleteFramebuffer(y.__webglFramebuffer[q]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let q=0;q<y.__webglColorRenderbuffer.length;q++)y.__webglColorRenderbuffer[q]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[q]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let F=A.textures;for(let q=0,K=F.length;q<K;q++){let V=n.get(F[q]);V.__webglTexture&&(s.deleteTexture(V.__webglTexture),a.memory.textures--),n.remove(F[q])}n.remove(A)}let C=0;function D(){C=0}function z(){let A=C;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),C+=1,A}function G(A){let y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function X(A,y){let F=n.get(A);if(A.isVideoTexture&&Oe(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&F.__version!==A.version){let q=A.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(F,A,y);return}}else A.isExternalTexture&&(F.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,F.__webglTexture,s.TEXTURE0+y)}function W(A,y){let F=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){j(F,A,y);return}t.bindTexture(s.TEXTURE_2D_ARRAY,F.__webglTexture,s.TEXTURE0+y)}function ee(A,y){let F=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){j(F,A,y);return}t.bindTexture(s.TEXTURE_3D,F.__webglTexture,s.TEXTURE0+y)}function H(A,y){let F=n.get(A);if(A.version>0&&F.__version!==A.version){Y(F,A,y);return}t.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+y)}let Z={[Tn]:s.REPEAT,[ui]:s.CLAMP_TO_EDGE,[_r]:s.MIRRORED_REPEAT},ce={[Vt]:s.NEAREST,[jc]:s.NEAREST_MIPMAP_NEAREST,[Bs]:s.NEAREST_MIPMAP_LINEAR,[fn]:s.LINEAR,[Fr]:s.LINEAR_MIPMAP_NEAREST,[ri]:s.LINEAR_MIPMAP_LINEAR},_e={[kp]:s.NEVER,[zp]:s.ALWAYS,[Lp]:s.LESS,[Iu]:s.LEQUAL,[Dp]:s.EQUAL,[Fp]:s.GEQUAL,[Np]:s.GREATER,[Up]:s.NOTEQUAL};function ze(A,y){if(y.type===Vn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===fn||y.magFilter===Fr||y.magFilter===Bs||y.magFilter===ri||y.minFilter===fn||y.minFilter===Fr||y.minFilter===Bs||y.minFilter===ri)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,Z[y.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,Z[y.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,Z[y.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,ce[y.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,ce[y.minFilter]),y.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,_e[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Vt||y.minFilter!==Bs&&y.minFilter!==ri||y.type===Vn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let F=e.get("EXT_texture_filter_anisotropic");s.texParameterf(A,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function it(A,y){let F=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",E));let q=y.source,K=d.get(q);K===void 0&&(K={},d.set(q,K));let V=G(y);if(V!==A.__cacheKey){K[V]===void 0&&(K[V]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,F=!0),K[V].usedTimes++;let ye=K[A.__cacheKey];ye!==void 0&&(K[A.__cacheKey].usedTimes--,ye.usedTimes===0&&S(y)),A.__cacheKey=V,A.__webglTexture=K[V].texture}return F}function ct(A,y,F){return Math.floor(Math.floor(A/F)/y)}function Je(A,y,F,q){let V=A.updateRanges;if(V.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,y.width,y.height,F,q,y.data);else{V.sort((te,le)=>te.start-le.start);let ye=0;for(let te=1;te<V.length;te++){let le=V[ye],ke=V[te],we=le.start+le.count,re=ct(ke.start,y.width,4),Ne=ct(le.start,y.width,4);ke.start<=we+1&&re===Ne&&ct(ke.start+ke.count-1,y.width,4)===re?le.count=Math.max(le.count,ke.start+ke.count-le.start):(++ye,V[ye]=ke)}V.length=ye+1;let ie=s.getParameter(s.UNPACK_ROW_LENGTH),pe=s.getParameter(s.UNPACK_SKIP_PIXELS),Te=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,y.width);for(let te=0,le=V.length;te<le;te++){let ke=V[te],we=Math.floor(ke.start/4),re=Math.ceil(ke.count/4),Ne=we%y.width,L=Math.floor(we/y.width),J=re,se=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ne),s.pixelStorei(s.UNPACK_SKIP_ROWS,L),t.texSubImage2D(s.TEXTURE_2D,0,Ne,L,J,se,F,q,y.data)}A.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,ie),s.pixelStorei(s.UNPACK_SKIP_PIXELS,pe),s.pixelStorei(s.UNPACK_SKIP_ROWS,Te)}}function j(A,y,F){let q=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(q=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(q=s.TEXTURE_3D);let K=it(A,y),V=y.source;t.bindTexture(q,A.__webglTexture,s.TEXTURE0+F);let ye=n.get(V);if(V.version!==ye.__version||K===!0){t.activeTexture(s.TEXTURE0+F);let ie=Xe.getPrimaries(Xe.workingColorSpace),pe=y.colorSpace===Wi?null:Xe.getPrimaries(y.colorSpace),Te=y.colorSpace===Wi||ie===pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let te=b(y.image,!1,i.maxTextureSize);te=kt(y,te);let le=r.convert(y.format,y.colorSpace),ke=r.convert(y.type),we=_(y.internalFormat,le,ke,y.colorSpace,y.isVideoTexture);ze(q,y);let re,Ne=y.mipmaps,L=y.isVideoTexture!==!0,J=ye.__version===void 0||K===!0,se=V.dataReady,xe=w(y,te);if(y.isDepthTexture)we=x(y.format===us,y.type),J&&(L?t.texStorage2D(s.TEXTURE_2D,1,we,te.width,te.height):t.texImage2D(s.TEXTURE_2D,0,we,te.width,te.height,0,le,ke,null));else if(y.isDataTexture)if(Ne.length>0){L&&J&&t.texStorage2D(s.TEXTURE_2D,xe,we,Ne[0].width,Ne[0].height);for(let Q=0,$=Ne.length;Q<$;Q++)re=Ne[Q],L?se&&t.texSubImage2D(s.TEXTURE_2D,Q,0,0,re.width,re.height,le,ke,re.data):t.texImage2D(s.TEXTURE_2D,Q,we,re.width,re.height,0,le,ke,re.data);y.generateMipmaps=!1}else L?(J&&t.texStorage2D(s.TEXTURE_2D,xe,we,te.width,te.height),se&&Je(y,te,le,ke)):t.texImage2D(s.TEXTURE_2D,0,we,te.width,te.height,0,le,ke,te.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){L&&J&&t.texStorage3D(s.TEXTURE_2D_ARRAY,xe,we,Ne[0].width,Ne[0].height,te.depth);for(let Q=0,$=Ne.length;Q<$;Q++)if(re=Ne[Q],y.format!==gn)if(le!==null)if(L){if(se)if(y.layerUpdates.size>0){let Se=zu(re.width,re.height,y.format,y.type);for(let Be of y.layerUpdates){let xt=re.data.subarray(Be*Se/re.data.BYTES_PER_ELEMENT,(Be+1)*Se/re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,Be,re.width,re.height,1,le,xt)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,re.width,re.height,te.depth,le,re.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Q,we,re.width,re.height,te.depth,0,re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?se&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,re.width,re.height,te.depth,le,ke,re.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Q,we,re.width,re.height,te.depth,0,le,ke,re.data)}else{L&&J&&t.texStorage2D(s.TEXTURE_2D,xe,we,Ne[0].width,Ne[0].height);for(let Q=0,$=Ne.length;Q<$;Q++)re=Ne[Q],y.format!==gn?le!==null?L?se&&t.compressedTexSubImage2D(s.TEXTURE_2D,Q,0,0,re.width,re.height,le,re.data):t.compressedTexImage2D(s.TEXTURE_2D,Q,we,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?se&&t.texSubImage2D(s.TEXTURE_2D,Q,0,0,re.width,re.height,le,ke,re.data):t.texImage2D(s.TEXTURE_2D,Q,we,re.width,re.height,0,le,ke,re.data)}else if(y.isDataArrayTexture)if(L){if(J&&t.texStorage3D(s.TEXTURE_2D_ARRAY,xe,we,te.width,te.height,te.depth),se)if(y.layerUpdates.size>0){let Q=zu(te.width,te.height,y.format,y.type);for(let $ of y.layerUpdates){let Se=te.data.subarray($*Q/te.data.BYTES_PER_ELEMENT,($+1)*Q/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,$,te.width,te.height,1,le,ke,Se)}y.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,le,ke,te.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,we,te.width,te.height,te.depth,0,le,ke,te.data);else if(y.isData3DTexture)L?(J&&t.texStorage3D(s.TEXTURE_3D,xe,we,te.width,te.height,te.depth),se&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,le,ke,te.data)):t.texImage3D(s.TEXTURE_3D,0,we,te.width,te.height,te.depth,0,le,ke,te.data);else if(y.isFramebufferTexture){if(J)if(L)t.texStorage2D(s.TEXTURE_2D,xe,we,te.width,te.height);else{let Q=te.width,$=te.height;for(let Se=0;Se<xe;Se++)t.texImage2D(s.TEXTURE_2D,Se,we,Q,$,0,le,ke,null),Q>>=1,$>>=1}}else if(Ne.length>0){if(L&&J){let Q=yt(Ne[0]);t.texStorage2D(s.TEXTURE_2D,xe,we,Q.width,Q.height)}for(let Q=0,$=Ne.length;Q<$;Q++)re=Ne[Q],L?se&&t.texSubImage2D(s.TEXTURE_2D,Q,0,0,le,ke,re):t.texImage2D(s.TEXTURE_2D,Q,we,le,ke,re);y.generateMipmaps=!1}else if(L){if(J){let Q=yt(te);t.texStorage2D(s.TEXTURE_2D,xe,we,Q.width,Q.height)}se&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,le,ke,te)}else t.texImage2D(s.TEXTURE_2D,0,we,le,ke,te);g(y)&&p(q),ye.__version=V.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function Y(A,y,F){if(y.image.length!==6)return;let q=it(A,y),K=y.source;t.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+F);let V=n.get(K);if(K.version!==V.__version||q===!0){t.activeTexture(s.TEXTURE0+F);let ye=Xe.getPrimaries(Xe.workingColorSpace),ie=y.colorSpace===Wi?null:Xe.getPrimaries(y.colorSpace),pe=y.colorSpace===Wi||ye===ie?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);let Te=y.isCompressedTexture||y.image[0].isCompressedTexture,te=y.image[0]&&y.image[0].isDataTexture,le=[];for(let $=0;$<6;$++)!Te&&!te?le[$]=b(y.image[$],!0,i.maxCubemapSize):le[$]=te?y.image[$].image:y.image[$],le[$]=kt(y,le[$]);let ke=le[0],we=r.convert(y.format,y.colorSpace),re=r.convert(y.type),Ne=_(y.internalFormat,we,re,y.colorSpace),L=y.isVideoTexture!==!0,J=V.__version===void 0||q===!0,se=K.dataReady,xe=w(y,ke);ze(s.TEXTURE_CUBE_MAP,y);let Q;if(Te){L&&J&&t.texStorage2D(s.TEXTURE_CUBE_MAP,xe,Ne,ke.width,ke.height);for(let $=0;$<6;$++){Q=le[$].mipmaps;for(let Se=0;Se<Q.length;Se++){let Be=Q[Se];y.format!==gn?we!==null?L?se&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se,0,0,Be.width,Be.height,we,Be.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se,Ne,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se,0,0,Be.width,Be.height,we,re,Be.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se,Ne,Be.width,Be.height,0,we,re,Be.data)}}}else{if(Q=y.mipmaps,L&&J){Q.length>0&&xe++;let $=yt(le[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,xe,Ne,$.width,$.height)}for(let $=0;$<6;$++)if(te){L?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,le[$].width,le[$].height,we,re,le[$].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ne,le[$].width,le[$].height,0,we,re,le[$].data);for(let Se=0;Se<Q.length;Se++){let xt=Q[Se].image[$].image;L?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se+1,0,0,xt.width,xt.height,we,re,xt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se+1,Ne,xt.width,xt.height,0,we,re,xt.data)}}else{L?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,we,re,le[$]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ne,we,re,le[$]);for(let Se=0;Se<Q.length;Se++){let Be=Q[Se];L?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se+1,0,0,we,re,Be.image[$]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se+1,Ne,we,re,Be.image[$])}}}g(y)&&p(s.TEXTURE_CUBE_MAP),V.__version=K.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function ue(A,y,F,q,K,V){let ye=r.convert(F.format,F.colorSpace),ie=r.convert(F.type),pe=_(F.internalFormat,ye,ie,F.colorSpace),Te=n.get(y),te=n.get(F);if(te.__renderTarget=y,!Te.__hasExternalTextures){let le=Math.max(1,y.width>>V),ke=Math.max(1,y.height>>V);K===s.TEXTURE_3D||K===s.TEXTURE_2D_ARRAY?t.texImage3D(K,V,pe,le,ke,y.depth,0,ye,ie,null):t.texImage2D(K,V,pe,le,ke,0,ye,ie,null)}t.bindFramebuffer(s.FRAMEBUFFER,A),be(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,q,K,te.__webglTexture,0,ut(y)):(K===s.TEXTURE_2D||K>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,q,K,te.__webglTexture,V),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ee(A,y,F){if(s.bindRenderbuffer(s.RENDERBUFFER,A),y.depthBuffer){let q=y.depthTexture,K=q&&q.isDepthTexture?q.type:null,V=x(y.stencilBuffer,K),ye=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ie=ut(y);be(y)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ie,V,y.width,y.height):F?s.renderbufferStorageMultisample(s.RENDERBUFFER,ie,V,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,V,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ye,s.RENDERBUFFER,A)}else{let q=y.textures;for(let K=0;K<q.length;K++){let V=q[K],ye=r.convert(V.format,V.colorSpace),ie=r.convert(V.type),pe=_(V.internalFormat,ye,ie,V.colorSpace),Te=ut(y);F&&be(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Te,pe,y.width,y.height):be(y)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Te,pe,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,pe,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function fe(A,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let q=n.get(y.depthTexture);q.__renderTarget=y,(!q.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),X(y.depthTexture,0);let K=q.__webglTexture,V=ut(y);if(y.depthTexture.format===yr)be(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,K,0,V):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,K,0);else if(y.depthTexture.format===us)be(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,K,0,V):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function je(A){let y=n.get(A),F=A.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==A.depthTexture){let q=A.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),q){let K=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,q.removeEventListener("dispose",K)};q.addEventListener("dispose",K),y.__depthDisposeCallback=K}y.__boundDepthTexture=q}if(A.depthTexture&&!y.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");let q=A.texture.mipmaps;q&&q.length>0?fe(y.__webglFramebuffer[0],A):fe(y.__webglFramebuffer,A)}else if(F){y.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[q]),y.__webglDepthbuffer[q]===void 0)y.__webglDepthbuffer[q]=s.createRenderbuffer(),Ee(y.__webglDepthbuffer[q],A,!1);else{let K=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,V=y.__webglDepthbuffer[q];s.bindRenderbuffer(s.RENDERBUFFER,V),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,V)}}else{let q=A.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),Ee(y.__webglDepthbuffer,A,!1);else{let K=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,V=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,V),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,V)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ot(A,y,F){let q=n.get(A);y!==void 0&&ue(q.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),F!==void 0&&je(A)}function k(A){let y=A.texture,F=n.get(A),q=n.get(y);A.addEventListener("dispose",R);let K=A.textures,V=A.isWebGLCubeRenderTarget===!0,ye=K.length>1;if(ye||(q.__webglTexture===void 0&&(q.__webglTexture=s.createTexture()),q.__version=y.version,a.memory.textures++),V){F.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer[ie]=[];for(let pe=0;pe<y.mipmaps.length;pe++)F.__webglFramebuffer[ie][pe]=s.createFramebuffer()}else F.__webglFramebuffer[ie]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer=[];for(let ie=0;ie<y.mipmaps.length;ie++)F.__webglFramebuffer[ie]=s.createFramebuffer()}else F.__webglFramebuffer=s.createFramebuffer();if(ye)for(let ie=0,pe=K.length;ie<pe;ie++){let Te=n.get(K[ie]);Te.__webglTexture===void 0&&(Te.__webglTexture=s.createTexture(),a.memory.textures++)}if(A.samples>0&&be(A)===!1){F.__webglMultisampledFramebuffer=s.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ie=0;ie<K.length;ie++){let pe=K[ie];F.__webglColorRenderbuffer[ie]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,F.__webglColorRenderbuffer[ie]);let Te=r.convert(pe.format,pe.colorSpace),te=r.convert(pe.type),le=_(pe.internalFormat,Te,te,pe.colorSpace,A.isXRRenderTarget===!0),ke=ut(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,ke,le,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ie,s.RENDERBUFFER,F.__webglColorRenderbuffer[ie])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(F.__webglDepthRenderbuffer=s.createRenderbuffer(),Ee(F.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(V){t.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture),ze(s.TEXTURE_CUBE_MAP,y);for(let ie=0;ie<6;ie++)if(y.mipmaps&&y.mipmaps.length>0)for(let pe=0;pe<y.mipmaps.length;pe++)ue(F.__webglFramebuffer[ie][pe],A,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,pe);else ue(F.__webglFramebuffer[ie],A,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);g(y)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let ie=0,pe=K.length;ie<pe;ie++){let Te=K[ie],te=n.get(Te),le=s.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(le=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(le,te.__webglTexture),ze(le,Te),ue(F.__webglFramebuffer,A,Te,s.COLOR_ATTACHMENT0+ie,le,0),g(Te)&&p(le)}t.unbindTexture()}else{let ie=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ie=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ie,q.__webglTexture),ze(ie,y),y.mipmaps&&y.mipmaps.length>0)for(let pe=0;pe<y.mipmaps.length;pe++)ue(F.__webglFramebuffer[pe],A,y,s.COLOR_ATTACHMENT0,ie,pe);else ue(F.__webglFramebuffer,A,y,s.COLOR_ATTACHMENT0,ie,0);g(y)&&p(ie),t.unbindTexture()}A.depthBuffer&&je(A)}function ht(A){let y=A.textures;for(let F=0,q=y.length;F<q;F++){let K=y[F];if(g(K)){let V=v(A),ye=n.get(K).__webglTexture;t.bindTexture(V,ye),p(V),t.unbindTexture()}}}let Fe=[],Ie=[];function ge(A){if(A.samples>0){if(be(A)===!1){let y=A.textures,F=A.width,q=A.height,K=s.COLOR_BUFFER_BIT,V=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ye=n.get(A),ie=y.length>1;if(ie)for(let Te=0;Te<y.length;Te++)t.bindFramebuffer(s.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ye.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer);let pe=A.texture.mipmaps;pe&&pe.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let Te=0;Te<y.length;Te++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(K|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(K|=s.STENCIL_BUFFER_BIT)),ie){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ye.__webglColorRenderbuffer[Te]);let te=n.get(y[Te]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,te,0)}s.blitFramebuffer(0,0,F,q,0,0,F,q,K,s.NEAREST),c===!0&&(Fe.length=0,Ie.length=0,Fe.push(s.COLOR_ATTACHMENT0+Te),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Fe.push(V),Ie.push(V),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ie)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Fe))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ie)for(let Te=0;Te<y.length;Te++){t.bindFramebuffer(s.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.RENDERBUFFER,ye.__webglColorRenderbuffer[Te]);let te=n.get(y[Te]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ye.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.TEXTURE_2D,te,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){let y=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function ut(A){return Math.min(i.maxSamples,A.samples)}function be(A){let y=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Oe(A){let y=a.render.frame;h.get(A)!==y&&(h.set(A,y),A.update())}function kt(A,y){let F=A.colorSpace,q=A.format,K=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||F!==en&&F!==Wi&&(Xe.getTransfer(F)===st?(q!==gn||K!==Fn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),y}function yt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=D,this.setTexture2D=X,this.setTexture2DArray=W,this.setTexture3D=ee,this.setTextureCube=H,this.rebindTextures=Ot,this.setupRenderTarget=k,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=ge,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=be}function Uy(s,e){function t(n,i=Wi){let r,a=Xe.getTransfer(i);if(n===Fn)return s.UNSIGNED_BYTE;if(n===Yc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Kc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Mu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Su)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===_u)return s.BYTE;if(n===yu)return s.SHORT;if(n===zr)return s.UNSIGNED_SHORT;if(n===$c)return s.INT;if(n===ls)return s.UNSIGNED_INT;if(n===Vn)return s.FLOAT;if(n===nn)return s.HALF_FLOAT;if(n===Tu)return s.ALPHA;if(n===wu)return s.RGB;if(n===gn)return s.RGBA;if(n===yr)return s.DEPTH_COMPONENT;if(n===us)return s.DEPTH_STENCIL;if(n===Jc)return s.RED;if(n===Zc)return s.RED_INTEGER;if(n===Eu)return s.RG;if(n===Qc)return s.RG_INTEGER;if(n===el)return s.RGBA_INTEGER;if(n===Ya||n===Ka||n===Ja||n===Za)if(a===st)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ya)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ja)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ya)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ka)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ja)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Za)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===tl||n===nl||n===il||n===sl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===tl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===nl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===il)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===sl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===rl||n===al||n===ol)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===rl||n===al)return a===st?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ol)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===cl||n===ll||n===hl||n===ul||n===dl||n===fl||n===pl||n===ml||n===gl||n===bl||n===xl||n===vl||n===_l||n===yl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===cl)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ll)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===hl)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ul)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===dl)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===fl)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===pl)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ml)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===gl)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===bl)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===xl)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===vl)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===_l)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===yl)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ml||n===Sl||n===Tl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ml)return a===st?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Sl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Tl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===wl||n===El||n===Al||n===Rl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===wl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===El)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Al)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Rl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===hs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}function By(s,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Nu(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,v,_,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,x)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),b(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?c(g,p,v,_):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===mn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===mn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let v=e.get(p),_=v.envMap,x=v.envMapRotation;_&&(g.envMap.value=_,Gs.copy(x),Gs.x*=-1,Gs.y*=-1,Gs.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Gs.y*=-1,Gs.z*=-1),g.envMapRotation.value.setFromMatrix4(Oy.makeRotationFromEuler(Gs)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,v,_){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=_*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,v){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===mn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function b(g,p){let v=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Hy(s,e,t,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,_){let x=_.program;n.uniformBlockBinding(v,x)}function l(v,_){let x=i[v.id];x===void 0&&(m(v),x=h(v),i[v.id]=x,v.addEventListener("dispose",g));let w=_.program;n.updateUBOMapping(v,w);let E=e.render.frame;r[v.id]!==E&&(d(v),r[v.id]=E)}function h(v){let _=u();v.__bindingPointIndex=_;let x=s.createBuffer(),w=v.__size,E=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,w,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,x),x}function u(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let _=i[v.id],x=v.uniforms,w=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let E=0,R=x.length;E<R;E++){let P=Array.isArray(x[E])?x[E]:[x[E]];for(let S=0,M=P.length;S<M;S++){let C=P[S];if(f(C,E,S,w)===!0){let D=C.__offset,z=Array.isArray(C.value)?C.value:[C.value],G=0;for(let X=0;X<z.length;X++){let W=z[X],ee=b(W);typeof W=="number"||typeof W=="boolean"?(C.__data[0]=W,s.bufferSubData(s.UNIFORM_BUFFER,D+G,C.__data)):W.isMatrix3?(C.__data[0]=W.elements[0],C.__data[1]=W.elements[1],C.__data[2]=W.elements[2],C.__data[3]=0,C.__data[4]=W.elements[3],C.__data[5]=W.elements[4],C.__data[6]=W.elements[5],C.__data[7]=0,C.__data[8]=W.elements[6],C.__data[9]=W.elements[7],C.__data[10]=W.elements[8],C.__data[11]=0):(W.toArray(C.__data,G),G+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,D,C.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(v,_,x,w){let E=v.value,R=_+"_"+x;if(w[R]===void 0)return typeof E=="number"||typeof E=="boolean"?w[R]=E:w[R]=E.clone(),!0;{let P=w[R];if(typeof E=="number"||typeof E=="boolean"){if(P!==E)return w[R]=E,!0}else if(P.equals(E)===!1)return P.copy(E),!0}return!1}function m(v){let _=v.uniforms,x=0,w=16;for(let R=0,P=_.length;R<P;R++){let S=Array.isArray(_[R])?_[R]:[_[R]];for(let M=0,C=S.length;M<C;M++){let D=S[M],z=Array.isArray(D.value)?D.value:[D.value];for(let G=0,X=z.length;G<X;G++){let W=z[G],ee=b(W),H=x%w,Z=H%ee.boundary,ce=H+Z;x+=Z,ce!==0&&w-ce<ee.storage&&(x+=w-ce),D.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=x,x+=ee.storage}}}let E=x%w;return E>0&&(x+=w-E),v.__size=x,v.__cache={},this}function b(v){let _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function g(v){let _=v.target;_.removeEventListener("dispose",g);let x=a.indexOf(_.__bindingPointIndex);a.splice(x,1),s.deleteBuffer(i[_.id]),delete i[_.id],delete r[_.id]}function p(){for(let v in i)s.deleteBuffer(i[v]);a=[],i={},r={}}return{bind:c,update:l,dispose:p}}var mb,gb,bb,xb,vb,_b,yb,Mb,Sb,Tb,wb,Eb,Ab,Rb,Cb,Ib,Pb,kb,Lb,Db,Nb,Ub,Fb,zb,Ob,Bb,Hb,Vb,Gb,Wb,qb,Xb,jb,$b,Yb,Kb,Jb,Zb,Qb,ex,tx,nx,ix,sx,rx,ax,ox,cx,lx,hx,ux,dx,fx,px,mx,gx,bx,xx,vx,_x,yx,Mx,Sx,Tx,wx,Ex,Ax,Rx,Cx,Ix,Px,kx,Lx,Dx,Nx,Ux,Fx,zx,Ox,Bx,Hx,Vx,Gx,Wx,qx,Xx,jx,$x,Yx,Kx,Jx,Zx,Qx,ev,tv,nv,iv,sv,rv,av,ov,cv,lv,hv,uv,dv,fv,pv,mv,gv,bv,xv,vv,_v,yv,Mv,Sv,Tv,wv,Ev,Av,Rv,Cv,Iv,Pv,kv,Lv,Dv,Nv,Uv,Fv,zv,Ov,Bv,Hv,Vv,Gv,Wv,qv,Xv,jv,We,oe,_i,Ll,Vs,$v,Hr,Wp,qs,Bu,qp,Hu,Vu,Gu,Wu,Ws,Br,Xp,t_,Ul,pm,Kp,mm,gm,bm,Jp,Zp,Qp,em,tm,Xu,ju,$u,qu,Vr,Z_,Q_,sm,Nl,cy,ly,uy,vy,Ku,Ju,Ey,Iy,Py,Ly,Fy,zy,Zu,Qu,Gs,Oy,Fl,Nt=sa(()=>{Ou();Ou();mb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gb=`#ifdef USE_ALPHAHASH
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
#endif`,bb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_b=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yb=`#ifdef USE_AOMAP
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
#endif`,Mb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sb=`#ifdef USE_BATCHING
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
#endif`,Tb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Eb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ab=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Rb=`#ifdef USE_IRIDESCENCE
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
#endif`,Cb=`#ifdef USE_BUMPMAP
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
#endif`,Ib=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Pb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Db=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Nb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ub=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Fb=`#if defined( USE_COLOR_ALPHA )
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
#endif`,zb=`#define PI 3.141592653589793
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
} // validated`,Ob=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Bb=`vec3 transformedNormal = objectNormal;
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
#endif`,Hb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jb=`#ifdef USE_ENVMAP
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
#endif`,$b=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Yb=`#ifdef USE_ENVMAP
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
#endif`,Kb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jb=`#ifdef USE_ENVMAP
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
#endif`,Zb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ex=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nx=`#ifdef USE_GRADIENTMAP
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
}`,ix=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ax=`uniform bool receiveShadow;
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
#endif`,ox=`#ifdef USE_ENVMAP
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
#endif`,cx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ux=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dx=`PhysicalMaterial material;
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
#endif`,fx=`struct PhysicalMaterial {
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
}`,px=`
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
#endif`,mx=`#if defined( RE_IndirectDiffuse )
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
#endif`,gx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_x=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Tx=`#if defined( USE_POINTS_UV )
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
#endif`,wx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ex=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ax=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Rx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ix=`#ifdef USE_MORPHTARGETS
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
#endif`,Px=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Lx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Dx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ux=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fx=`#ifdef USE_NORMALMAP
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
#endif`,zx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ox=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Wx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$x=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Qx=`float getShadowMask() {
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
}`,ev=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tv=`#ifdef USE_SKINNING
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
#endif`,nv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,iv=`#ifdef USE_SKINNING
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
#endif`,sv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,av=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ov=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,cv=`#ifdef USE_TRANSMISSION
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
#endif`,lv=`#ifdef USE_TRANSMISSION
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
#endif`,hv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,pv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mv=`uniform sampler2D t2D;
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
}`,gv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,xv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_v=`#include <common>
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
}`,yv=`#if DEPTH_PACKING == 3200
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
}`,Mv=`#define DISTANCE
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
}`,Sv=`#define DISTANCE
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
}`,Tv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ev=`uniform float scale;
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
}`,Av=`uniform vec3 diffuse;
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
}`,Rv=`#include <common>
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
}`,Cv=`uniform vec3 diffuse;
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
}`,Iv=`#define LAMBERT
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
}`,Pv=`#define LAMBERT
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
}`,kv=`#define MATCAP
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
}`,Lv=`#define MATCAP
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
}`,Dv=`#define NORMAL
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
}`,Nv=`#define NORMAL
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
}`,Uv=`#define PHONG
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
}`,Fv=`#define PHONG
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
}`,zv=`#define STANDARD
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
}`,Ov=`#define STANDARD
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
}`,Bv=`#define TOON
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
}`,Hv=`#define TOON
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
}`,Vv=`uniform float size;
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
}`,Gv=`uniform vec3 diffuse;
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
}`,Wv=`#include <common>
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
}`,qv=`uniform vec3 color;
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
}`,Xv=`uniform float rotation;
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
}`,jv=`uniform vec3 diffuse;
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
}`,We={alphahash_fragment:mb,alphahash_pars_fragment:gb,alphamap_fragment:bb,alphamap_pars_fragment:xb,alphatest_fragment:vb,alphatest_pars_fragment:_b,aomap_fragment:yb,aomap_pars_fragment:Mb,batching_pars_vertex:Sb,batching_vertex:Tb,begin_vertex:wb,beginnormal_vertex:Eb,bsdfs:Ab,iridescence_fragment:Rb,bumpmap_pars_fragment:Cb,clipping_planes_fragment:Ib,clipping_planes_pars_fragment:Pb,clipping_planes_pars_vertex:kb,clipping_planes_vertex:Lb,color_fragment:Db,color_pars_fragment:Nb,color_pars_vertex:Ub,color_vertex:Fb,common:zb,cube_uv_reflection_fragment:Ob,defaultnormal_vertex:Bb,displacementmap_pars_vertex:Hb,displacementmap_vertex:Vb,emissivemap_fragment:Gb,emissivemap_pars_fragment:Wb,colorspace_fragment:qb,colorspace_pars_fragment:Xb,envmap_fragment:jb,envmap_common_pars_fragment:$b,envmap_pars_fragment:Yb,envmap_pars_vertex:Kb,envmap_physical_pars_fragment:ox,envmap_vertex:Jb,fog_vertex:Zb,fog_pars_vertex:Qb,fog_fragment:ex,fog_pars_fragment:tx,gradientmap_pars_fragment:nx,lightmap_pars_fragment:ix,lights_lambert_fragment:sx,lights_lambert_pars_fragment:rx,lights_pars_begin:ax,lights_toon_fragment:cx,lights_toon_pars_fragment:lx,lights_phong_fragment:hx,lights_phong_pars_fragment:ux,lights_physical_fragment:dx,lights_physical_pars_fragment:fx,lights_fragment_begin:px,lights_fragment_maps:mx,lights_fragment_end:gx,logdepthbuf_fragment:bx,logdepthbuf_pars_fragment:xx,logdepthbuf_pars_vertex:vx,logdepthbuf_vertex:_x,map_fragment:yx,map_pars_fragment:Mx,map_particle_fragment:Sx,map_particle_pars_fragment:Tx,metalnessmap_fragment:wx,metalnessmap_pars_fragment:Ex,morphinstance_vertex:Ax,morphcolor_vertex:Rx,morphnormal_vertex:Cx,morphtarget_pars_vertex:Ix,morphtarget_vertex:Px,normal_fragment_begin:kx,normal_fragment_maps:Lx,normal_pars_fragment:Dx,normal_pars_vertex:Nx,normal_vertex:Ux,normalmap_pars_fragment:Fx,clearcoat_normal_fragment_begin:zx,clearcoat_normal_fragment_maps:Ox,clearcoat_pars_fragment:Bx,iridescence_pars_fragment:Hx,opaque_fragment:Vx,packing:Gx,premultiplied_alpha_fragment:Wx,project_vertex:qx,dithering_fragment:Xx,dithering_pars_fragment:jx,roughnessmap_fragment:$x,roughnessmap_pars_fragment:Yx,shadowmap_pars_fragment:Kx,shadowmap_pars_vertex:Jx,shadowmap_vertex:Zx,shadowmask_pars_fragment:Qx,skinbase_vertex:ev,skinning_pars_vertex:tv,skinning_vertex:nv,skinnormal_vertex:iv,specularmap_fragment:sv,specularmap_pars_fragment:rv,tonemapping_fragment:av,tonemapping_pars_fragment:ov,transmission_fragment:cv,transmission_pars_fragment:lv,uv_pars_fragment:hv,uv_pars_vertex:uv,uv_vertex:dv,worldpos_vertex:fv,background_vert:pv,background_frag:mv,backgroundCube_vert:gv,backgroundCube_frag:bv,cube_vert:xv,cube_frag:vv,depth_vert:_v,depth_frag:yv,distanceRGBA_vert:Mv,distanceRGBA_frag:Sv,equirect_vert:Tv,equirect_frag:wv,linedashed_vert:Ev,linedashed_frag:Av,meshbasic_vert:Rv,meshbasic_frag:Cv,meshlambert_vert:Iv,meshlambert_frag:Pv,meshmatcap_vert:kv,meshmatcap_frag:Lv,meshnormal_vert:Dv,meshnormal_frag:Nv,meshphong_vert:Uv,meshphong_frag:Fv,meshphysical_vert:zv,meshphysical_frag:Ov,meshtoon_vert:Bv,meshtoon_frag:Hv,points_vert:Vv,points_frag:Gv,shadow_vert:Wv,shadow_frag:qv,sprite_vert:Xv,sprite_frag:jv},oe={common:{diffuse:{value:new ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new ae(16777215)},opacity:{value:1},center:{value:new ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},_i={basic:{uniforms:ln([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:ln([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new ae(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:ln([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new ae(0)},specular:{value:new ae(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:ln([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:ln([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new ae(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:ln([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:ln([oe.points,oe.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:ln([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:ln([oe.common,oe.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:ln([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:ln([oe.sprite,oe.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:ln([oe.common,oe.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:ln([oe.lights,oe.fog,{color:{value:new ae(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};_i.physical={uniforms:ln([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new ae(0)},specularColor:{value:new ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};Ll={r:0,b:0,g:0},Vs=new ni,$v=new Ce;Hr=4,Wp=[.125,.215,.35,.446,.526,.582],qs=20,Bu=new Hi,qp=new ae,Hu=null,Vu=0,Gu=0,Wu=!1,Ws=(1+Math.sqrt(5))/2,Br=1/Ws,Xp=[new I(-Ws,Br,0),new I(Ws,Br,0),new I(-Br,0,Ws),new I(Br,0,Ws),new I(0,Ws,-Br),new I(0,Ws,Br),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],t_=new I,Ul=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,r={}){let{size:a=256,position:o=t_}=r;Hu=this._renderer.getRenderTarget(),Vu=this._renderer.getActiveCubeFace(),Gu=this._renderer.getActiveMipmapLevel(),Wu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$p(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Hu,Vu,Gu),this._renderer.xr.enabled=Wu,e.scissorTest=!1,Dl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===zs||e.mapping===Os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hu=this._renderer.getRenderTarget(),Vu=this._renderer.getActiveCubeFace(),Gu=this._renderer.getActiveMipmapLevel(),Wu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:nn,format:gn,colorSpace:en,depthBuffer:!1},i=jp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jp(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=n_(r)),this._blurMaterial=i_(r,e,t)}return i}_compileMaterial(e){let t=new Ge(this._lodPlanes[0],e);this._renderer.compile(t,Bu)}_sceneToCubeUV(e,t,n,i,r){let c=new Ht(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(qp),u.toneMapping=Gi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null));let b=new Dt({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1}),g=new Ge(new Er,b),p=!1,v=e.background;v?v.isColor&&(b.color.copy(v),e.background=null,p=!0):(b.color.copy(qp),p=!0);for(let _=0;_<6;_++){let x=_%3;x===0?(c.up.set(0,l[_],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[_],r.y,r.z)):x===1?(c.up.set(0,0,l[_]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[_],r.z)):(c.up.set(0,l[_],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[_]));let w=this._cubeSize;Dl(i,x*w,_>2?w:0,w,w),u.setRenderTarget(i),p&&u.render(g,c),u.render(e,c)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=v}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===zs||e.mapping===Os;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$p());let r=i?this._cubemapMaterial:this._equirectMaterial,a=new Ge(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;Dl(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Bu)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Xp[(i-r-1)%Xp.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Ge(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*qs-1),b=r/m,g=isFinite(r)?1+Math.floor(h*b):qs;g>qs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${qs}`);let p=[],v=0;for(let R=0;R<qs;++R){let P=R/b,S=Math.exp(-P*P/2);p.push(S),R===0?v+=S:R<g&&(v+=2*S)}for(let R=0;R<p.length;R++)p[R]=p[R]/v;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:_}=this;d.dTheta.value=m,d.mipInt.value=_-n;let x=this._sizeLods[i],w=3*x*(i>_-Hr?i-_+Hr:0),E=4*(this._cubeSize-x);Dl(t,w,E,3*x,2*x),c.setRenderTarget(t),c.render(u,Bu)}};pm=new Jt,Kp=new Ps(1,1),mm=new va,gm=new mc,bm=new Sa,Jp=[],Zp=[],Qp=new Float32Array(16),em=new Float32Array(9),tm=new Float32Array(4);Xu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=I_(t.type)}},ju=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=K_(t.type)}},$u=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(e,t[o.id],n)}}},qu=/(\w+)(\])?(\[|\.)?/g;Vr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);J_(r,a,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let a=e[i];a.id in t&&n.push(a)}return n}};Z_=37297,Q_=0;sm=new He;Nl=new I;cy=/^[ \t]*#include +<([\w\d./]+)>/gm;ly=new Map;uy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;vy=0,Ku=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ju(e),t.set(e,n)),n}},Ju=class{constructor(e){this.id=vy++,this.code=e,this.usedTimes=0}};Ey=0;Iy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Py=`uniform sampler2D shadow_pass;
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
}`;Ly={[Lc]:Dc,[Nc]:Nr,[Uc]:zc,[ws]:Fc,[Dc]:Lc,[Nr]:Nc,[zc]:Uc,[Fc]:ws};Fy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zy=`
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

}`,Zu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ia(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Qe({vertexShader:Fy,fragmentShader:zy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ge(new si(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Qu=class extends fi{constructor(e,t){super();let n=this,i=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,m=null,b=typeof XRWebGLBinding<"u",g=new Zu,p={},v=t.getContextAttributes(),_=null,x=null,w=[],E=[],R=new ve,P=null,S=new Ht;S.viewport=new tt;let M=new Ht;M.viewport=new tt;let C=[S,M],D=new Rc,z=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let Y=w[j];return Y===void 0&&(Y=new Ar,w[j]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(j){let Y=w[j];return Y===void 0&&(Y=new Ar,w[j]=Y),Y.getGripSpace()},this.getHand=function(j){let Y=w[j];return Y===void 0&&(Y=new Ar,w[j]=Y),Y.getHandSpace()};function X(j){let Y=E.indexOf(j.inputSource);if(Y===-1)return;let ue=w[Y];ue!==void 0&&(ue.update(j.inputSource,j.frame,l||a),ue.dispatchEvent({type:j.type,data:j.inputSource}))}function W(){i.removeEventListener("select",X),i.removeEventListener("selectstart",X),i.removeEventListener("selectend",X),i.removeEventListener("squeeze",X),i.removeEventListener("squeezestart",X),i.removeEventListener("squeezeend",X),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",ee);for(let j=0;j<w.length;j++){let Y=E[j];Y!==null&&(E[j]=null,w[j].disconnect(Y))}z=null,G=null,g.reset();for(let j in p)delete p[j];e.setRenderTarget(_),f=null,d=null,u=null,i=null,x=null,Je.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&b&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(_=e.getRenderTarget(),i.addEventListener("select",X),i.addEventListener("selectstart",X),i.addEventListener("selectend",X),i.addEventListener("squeeze",X),i.addEventListener("squeezestart",X),i.addEventListener("squeezeend",X),i.addEventListener("end",W),i.addEventListener("inputsourceschange",ee),v.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(R),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let ue=null,Ee=null,fe=null;v.depth&&(fe=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=v.stencil?us:yr,Ee=v.stencil?hs:ls);let je={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(je),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new zt(d.textureWidth,d.textureHeight,{format:gn,type:Fn,depthTexture:new Ps(d.textureWidth,d.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let ue={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,ue),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new zt(f.framebufferWidth,f.framebufferHeight,{format:gn,type:Fn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),Je.setContext(i),Je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ee(j){for(let Y=0;Y<j.removed.length;Y++){let ue=j.removed[Y],Ee=E.indexOf(ue);Ee>=0&&(E[Ee]=null,w[Ee].disconnect(ue))}for(let Y=0;Y<j.added.length;Y++){let ue=j.added[Y],Ee=E.indexOf(ue);if(Ee===-1){for(let je=0;je<w.length;je++)if(je>=E.length){E.push(ue),Ee=je;break}else if(E[je]===null){E[je]=ue,Ee=je;break}if(Ee===-1)break}let fe=w[Ee];fe&&fe.connect(ue)}}let H=new I,Z=new I;function ce(j,Y,ue){H.setFromMatrixPosition(Y.matrixWorld),Z.setFromMatrixPosition(ue.matrixWorld);let Ee=H.distanceTo(Z),fe=Y.projectionMatrix.elements,je=ue.projectionMatrix.elements,Ot=fe[14]/(fe[10]-1),k=fe[14]/(fe[10]+1),ht=(fe[9]+1)/fe[5],Fe=(fe[9]-1)/fe[5],Ie=(fe[8]-1)/fe[0],ge=(je[8]+1)/je[0],ut=Ot*Ie,be=Ot*ge,Oe=Ee/(-Ie+ge),kt=Oe*-Ie;if(Y.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(kt),j.translateZ(Oe),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),fe[10]===-1)j.projectionMatrix.copy(Y.projectionMatrix),j.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{let yt=Ot+Oe,A=k+Oe,y=ut-kt,F=be+(Ee-kt),q=ht*k/A*yt,K=Fe*k/A*yt;j.projectionMatrix.makePerspective(y,F,q,K,yt,A),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function _e(j,Y){Y===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(Y.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let Y=j.near,ue=j.far;g.texture!==null&&(g.depthNear>0&&(Y=g.depthNear),g.depthFar>0&&(ue=g.depthFar)),D.near=M.near=S.near=Y,D.far=M.far=S.far=ue,(z!==D.near||G!==D.far)&&(i.updateRenderState({depthNear:D.near,depthFar:D.far}),z=D.near,G=D.far),D.layers.mask=j.layers.mask|6,S.layers.mask=D.layers.mask&3,M.layers.mask=D.layers.mask&5;let Ee=j.parent,fe=D.cameras;_e(D,Ee);for(let je=0;je<fe.length;je++)_e(fe[je],Ee);fe.length===2?ce(D,S,M):D.projectionMatrix.copy(S.projectionMatrix),ze(j,D,Ee)};function ze(j,Y,ue){ue===null?j.matrix.copy(Y.matrixWorld):(j.matrix.copy(ue.matrixWorld),j.matrix.invert(),j.matrix.multiply(Y.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(Y.projectionMatrix),j.projectionMatrixInverse.copy(Y.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Rs*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(j){c=j,d!==null&&(d.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(D)},this.getCameraTexture=function(j){return p[j]};let it=null;function ct(j,Y){if(h=Y.getViewerPose(l||a),m=Y,h!==null){let ue=h.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let Ee=!1;ue.length!==D.cameras.length&&(D.cameras.length=0,Ee=!0);for(let k=0;k<ue.length;k++){let ht=ue[k],Fe=null;if(f!==null)Fe=f.getViewport(ht);else{let ge=u.getViewSubImage(d,ht);Fe=ge.viewport,k===0&&(e.setRenderTargetTextures(x,ge.colorTexture,ge.depthStencilTexture),e.setRenderTarget(x))}let Ie=C[k];Ie===void 0&&(Ie=new Ht,Ie.layers.enable(k),Ie.viewport=new tt,C[k]=Ie),Ie.matrix.fromArray(ht.transform.matrix),Ie.matrix.decompose(Ie.position,Ie.quaternion,Ie.scale),Ie.projectionMatrix.fromArray(ht.projectionMatrix),Ie.projectionMatrixInverse.copy(Ie.projectionMatrix).invert(),Ie.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),k===0&&(D.matrix.copy(Ie.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Ee===!0&&D.cameras.push(Ie)}let fe=i.enabledFeatures;if(fe&&fe.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&b){u=n.getBinding();let k=u.getDepthInformation(ue[0]);k&&k.isValid&&k.texture&&g.init(k,i.renderState)}if(fe&&fe.includes("camera-access")&&b){e.state.unbindTexture(),u=n.getBinding();for(let k=0;k<ue.length;k++){let ht=ue[k].camera;if(ht){let Fe=p[ht];Fe||(Fe=new Ia,p[ht]=Fe);let Ie=u.getCameraImage(ht);Fe.sourceTexture=Ie}}}}for(let ue=0;ue<w.length;ue++){let Ee=E[ue],fe=w[ue];Ee!==null&&fe!==void 0&&fe.update(Ee,Y,l||a)}it&&it(j,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),m=null}let Je=new fm;Je.setAnimationLoop(ct),this.setAnimationLoop=function(j){it=j},this.dispose=function(){}}},Gs=new ni,Oy=new Ce;Fl=class{constructor(e={}){let{canvas:t=Op(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let m=new Uint32Array(4),b=new Int32Array(4),g=null,p=null,v=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let x=this,w=!1;this._outputColorSpace=It;let E=0,R=0,P=null,S=-1,M=null,C=new tt,D=new tt,z=null,G=new ae(0),X=0,W=t.width,ee=t.height,H=1,Z=null,ce=null,_e=new tt(0,0,W,ee),ze=new tt(0,0,W,ee),it=!1,ct=new Pr,Je=!1,j=!1,Y=new Ce,ue=new I,Ee=new tt,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},je=!1;function Ot(){return P===null?H:1}let k=n;function ht(T,N){return t.getContext(T,N)}try{let T={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",xe,!1),t.addEventListener("webglcontextcreationerror",Q,!1),k===null){let N="webgl2";if(k=ht(N,T),k===null)throw ht(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Fe,Ie,ge,ut,be,Oe,kt,yt,A,y,F,q,K,V,ye,ie,pe,Te,te,le,ke,we,re,Ne;function L(){Fe=new r_(k),Fe.init(),we=new Uy(k,Fe),Ie=new Zv(k,Fe,e,we),ge=new Dy(k,Fe),Ie.reversedDepthBuffer&&d&&ge.buffers.depth.setReversed(!0),ut=new c_(k),be=new yy,Oe=new Ny(k,Fe,ge,be,Ie,we,ut),kt=new e_(x),yt=new s_(x),A=new pb(k),re=new Kv(k,A),y=new a_(k,A,ut,re),F=new h_(k,y,A,ut),te=new l_(k,Ie,Oe),ie=new Qv(be),q=new _y(x,kt,yt,Fe,Ie,re,ie),K=new By(x,be),V=new Sy,ye=new Cy(Fe),Te=new Yv(x,kt,yt,ge,F,f,c),pe=new ky(x,F,Ie),Ne=new Hy(k,ut,Ie,ge),le=new Jv(k,Fe,ut),ke=new o_(k,Fe,ut),ut.programs=q.programs,x.capabilities=Ie,x.extensions=Fe,x.properties=be,x.renderLists=V,x.shadowMap=pe,x.state=ge,x.info=ut}L();let J=new Qu(x,k);this.xr=J,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let T=Fe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=Fe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(T){T!==void 0&&(H=T,this.setSize(W,ee,!1))},this.getSize=function(T){return T.set(W,ee)},this.setSize=function(T,N,O=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=T,ee=N,t.width=Math.floor(T*H),t.height=Math.floor(N*H),O===!0&&(t.style.width=T+"px",t.style.height=N+"px"),this.setViewport(0,0,T,N)},this.getDrawingBufferSize=function(T){return T.set(W*H,ee*H).floor()},this.setDrawingBufferSize=function(T,N,O){W=T,ee=N,H=O,t.width=Math.floor(T*O),t.height=Math.floor(N*O),this.setViewport(0,0,T,N)},this.getCurrentViewport=function(T){return T.copy(C)},this.getViewport=function(T){return T.copy(_e)},this.setViewport=function(T,N,O,B){T.isVector4?_e.set(T.x,T.y,T.z,T.w):_e.set(T,N,O,B),ge.viewport(C.copy(_e).multiplyScalar(H).round())},this.getScissor=function(T){return T.copy(ze)},this.setScissor=function(T,N,O,B){T.isVector4?ze.set(T.x,T.y,T.z,T.w):ze.set(T,N,O,B),ge.scissor(D.copy(ze).multiplyScalar(H).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(T){ge.setScissorTest(it=T)},this.setOpaqueSort=function(T){Z=T},this.setTransparentSort=function(T){ce=T},this.getClearColor=function(T){return T.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor(...arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha(...arguments)},this.clear=function(T=!0,N=!0,O=!0){let B=0;if(T){let U=!1;if(P!==null){let ne=P.texture.format;U=ne===el||ne===Qc||ne===Zc}if(U){let ne=P.texture.type,he=ne===Fn||ne===ls||ne===zr||ne===hs||ne===Yc||ne===Kc,Me=Te.getClearColor(),de=Te.getClearAlpha(),Le=Me.r,Ue=Me.g,Re=Me.b;he?(m[0]=Le,m[1]=Ue,m[2]=Re,m[3]=de,k.clearBufferuiv(k.COLOR,0,m)):(b[0]=Le,b[1]=Ue,b[2]=Re,b[3]=de,k.clearBufferiv(k.COLOR,0,b))}else B|=k.COLOR_BUFFER_BIT}N&&(B|=k.DEPTH_BUFFER_BIT),O&&(B|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",xe,!1),t.removeEventListener("webglcontextcreationerror",Q,!1),Te.dispose(),V.dispose(),ye.dispose(),be.dispose(),kt.dispose(),yt.dispose(),F.dispose(),re.dispose(),Ne.dispose(),q.dispose(),J.dispose(),J.removeEventListener("sessionstart",li),J.removeEventListener("sessionend",xf),bs.stop()};function se(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function xe(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let T=ut.autoReset,N=pe.enabled,O=pe.autoUpdate,B=pe.needsUpdate,U=pe.type;L(),ut.autoReset=T,pe.enabled=N,pe.autoUpdate=O,pe.needsUpdate=B,pe.type=U}function Q(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function $(T){let N=T.target;N.removeEventListener("dispose",$),Se(N)}function Se(T){Be(T),be.remove(T)}function Be(T){let N=be.get(T).programs;N!==void 0&&(N.forEach(function(O){q.releaseProgram(O)}),T.isShaderMaterial&&q.releaseShaderCache(T))}this.renderBufferDirect=function(T,N,O,B,U,ne){N===null&&(N=fe);let he=U.isMesh&&U.matrixWorld.determinant()<0,Me=r0(T,N,O,B,U);ge.setMaterial(B,he);let de=O.index,Le=1;if(B.wireframe===!0){if(de=y.getWireframeAttribute(O),de===void 0)return;Le=2}let Ue=O.drawRange,Re=O.attributes.position,Ke=Ue.start*Le,dt=(Ue.start+Ue.count)*Le;ne!==null&&(Ke=Math.max(Ke,ne.start*Le),dt=Math.min(dt,(ne.start+ne.count)*Le)),de!==null?(Ke=Math.max(Ke,0),dt=Math.min(dt,de.count)):Re!=null&&(Ke=Math.max(Ke,0),dt=Math.min(dt,Re.count));let Lt=dt-Ke;if(Lt<0||Lt===1/0)return;re.setup(U,B,Me,O,de);let Mt,pt=le;if(de!==null&&(Mt=A.get(de),pt=ke,pt.setIndex(Mt)),U.isMesh)B.wireframe===!0?(ge.setLineWidth(B.wireframeLinewidth*Ot()),pt.setMode(k.LINES)):pt.setMode(k.TRIANGLES);else if(U.isLine){let Pe=B.linewidth;Pe===void 0&&(Pe=1),ge.setLineWidth(Pe*Ot()),U.isLineSegments?pt.setMode(k.LINES):U.isLineLoop?pt.setMode(k.LINE_LOOP):pt.setMode(k.LINE_STRIP)}else U.isPoints?pt.setMode(k.POINTS):U.isSprite&&pt.setMode(k.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Sr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Fe.get("WEBGL_multi_draw"))pt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let Pe=U._multiDrawStarts,Rt=U._multiDrawCounts,et=U._multiDrawCount,In=de?A.get(de).bytesPerElement:1,sr=be.get(B).currentProgram.getUniforms();for(let Pn=0;Pn<et;Pn++)sr.setValue(k,"_gl_DrawID",Pn),pt.render(Pe[Pn]/In,Rt[Pn])}else if(U.isInstancedMesh)pt.renderInstances(Ke,Lt,U.count);else if(O.isInstancedBufferGeometry){let Pe=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,Rt=Math.min(O.instanceCount,Pe);pt.renderInstances(Ke,Lt,Rt)}else pt.render(Ke,Lt)};function xt(T,N,O){T.transparent===!0&&T.side===Zt&&T.forceSinglePass===!1?(T.side=mn,T.needsUpdate=!0,zo(T,N,O),T.side=ti,T.needsUpdate=!0,zo(T,N,O),T.side=Zt):zo(T,N,O)}this.compile=function(T,N,O=null){O===null&&(O=T),p=ye.get(O),p.init(N),_.push(p),O.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),T!==O&&T.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();let B=new Set;return T.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let ne=U.material;if(ne)if(Array.isArray(ne))for(let he=0;he<ne.length;he++){let Me=ne[he];xt(Me,O,U),B.add(Me)}else xt(ne,O,U),B.add(ne)}),p=_.pop(),B},this.compileAsync=function(T,N,O=null){let B=this.compile(T,N,O);return new Promise(U=>{function ne(){if(B.forEach(function(he){be.get(he).currentProgram.isReady()&&B.delete(he)}),B.size===0){U(T);return}setTimeout(ne,10)}Fe.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let rt=null;function Ai(T){rt&&rt(T)}function li(){bs.stop()}function xf(){bs.start()}let bs=new fm;bs.setAnimationLoop(Ai),typeof self<"u"&&bs.setContext(self),this.setAnimationLoop=function(T){rt=T,J.setAnimationLoop(T),T===null?bs.stop():bs.start()},J.addEventListener("sessionstart",li),J.addEventListener("sessionend",xf),this.render=function(T,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(N),N=J.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,N,P),p=ye.get(T,_.length),p.init(N),_.push(p),Y.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),ct.setFromProjectionMatrix(Y,Qn,N.reversedDepth),j=this.localClippingEnabled,Je=ie.init(this.clippingPlanes,j),g=V.get(T,v.length),g.init(),v.push(g),J.enabled===!0&&J.isPresenting===!0){let ne=x.xr.getDepthSensingMesh();ne!==null&&Ph(ne,N,-1/0,x.sortObjects)}Ph(T,N,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(Z,ce),je=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,je&&Te.addToRenderList(g,T),this.info.render.frame++,Je===!0&&ie.beginShadows();let O=p.state.shadowsArray;pe.render(O,T,N),Je===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();let B=g.opaque,U=g.transmissive;if(p.setupLights(),N.isArrayCamera){let ne=N.cameras;if(U.length>0)for(let he=0,Me=ne.length;he<Me;he++){let de=ne[he];_f(B,U,T,de)}je&&Te.render(T);for(let he=0,Me=ne.length;he<Me;he++){let de=ne[he];vf(g,T,de,de.viewport)}}else U.length>0&&_f(B,U,T,N),je&&Te.render(T),vf(g,T,N);P!==null&&R===0&&(Oe.updateMultisampleRenderTarget(P),Oe.updateRenderTargetMipmap(P)),T.isScene===!0&&T.onAfterRender(x,T,N),re.resetDefaultState(),S=-1,M=null,_.pop(),_.length>0?(p=_[_.length-1],Je===!0&&ie.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?g=v[v.length-1]:g=null};function Ph(T,N,O,B){if(T.visible===!1)return;if(T.layers.test(N.layers)){if(T.isGroup)O=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(N);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ct.intersectsSprite(T)){B&&Ee.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Y);let he=F.update(T),Me=T.material;Me.visible&&g.push(T,he,Me,O,Ee.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||ct.intersectsObject(T))){let he=F.update(T),Me=T.material;if(B&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ee.copy(T.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),Ee.copy(he.boundingSphere.center)),Ee.applyMatrix4(T.matrixWorld).applyMatrix4(Y)),Array.isArray(Me)){let de=he.groups;for(let Le=0,Ue=de.length;Le<Ue;Le++){let Re=de[Le],Ke=Me[Re.materialIndex];Ke&&Ke.visible&&g.push(T,he,Ke,O,Ee.z,Re)}}else Me.visible&&g.push(T,he,Me,O,Ee.z,null)}}let ne=T.children;for(let he=0,Me=ne.length;he<Me;he++)Ph(ne[he],N,O,B)}function vf(T,N,O,B){let U=T.opaque,ne=T.transmissive,he=T.transparent;p.setupLightsView(O),Je===!0&&ie.setGlobalState(x.clippingPlanes,O),B&&ge.viewport(C.copy(B)),U.length>0&&Fo(U,N,O),ne.length>0&&Fo(ne,N,O),he.length>0&&Fo(he,N,O),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function _f(T,N,O,B){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[B.id]===void 0&&(p.state.transmissionRenderTarget[B.id]=new zt(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float")?nn:Fn,minFilter:ri,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace}));let ne=p.state.transmissionRenderTarget[B.id],he=B.viewport||C;ne.setSize(he.z*x.transmissionResolutionScale,he.w*x.transmissionResolutionScale);let Me=x.getRenderTarget(),de=x.getActiveCubeFace(),Le=x.getActiveMipmapLevel();x.setRenderTarget(ne),x.getClearColor(G),X=x.getClearAlpha(),X<1&&x.setClearColor(16777215,.5),x.clear(),je&&Te.render(O);let Ue=x.toneMapping;x.toneMapping=Gi;let Re=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),p.setupLightsView(B),Je===!0&&ie.setGlobalState(x.clippingPlanes,B),Fo(T,O,B),Oe.updateMultisampleRenderTarget(ne),Oe.updateRenderTargetMipmap(ne),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let dt=0,Lt=N.length;dt<Lt;dt++){let Mt=N[dt],pt=Mt.object,Pe=Mt.geometry,Rt=Mt.material,et=Mt.group;if(Rt.side===Zt&&pt.layers.test(B.layers)){let In=Rt.side;Rt.side=mn,Rt.needsUpdate=!0,yf(pt,O,B,Pe,Rt,et),Rt.side=In,Rt.needsUpdate=!0,Ke=!0}}Ke===!0&&(Oe.updateMultisampleRenderTarget(ne),Oe.updateRenderTargetMipmap(ne))}x.setRenderTarget(Me,de,Le),x.setClearColor(G,X),Re!==void 0&&(B.viewport=Re),x.toneMapping=Ue}function Fo(T,N,O){let B=N.isScene===!0?N.overrideMaterial:null;for(let U=0,ne=T.length;U<ne;U++){let he=T[U],Me=he.object,de=he.geometry,Le=he.group,Ue=he.material;Ue.allowOverride===!0&&B!==null&&(Ue=B),Me.layers.test(O.layers)&&yf(Me,N,O,de,Ue,Le)}}function yf(T,N,O,B,U,ne){T.onBeforeRender(x,N,O,B,U,ne),T.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),U.onBeforeRender(x,N,O,B,T,ne),U.transparent===!0&&U.side===Zt&&U.forceSinglePass===!1?(U.side=mn,U.needsUpdate=!0,x.renderBufferDirect(O,N,B,U,T,ne),U.side=ti,U.needsUpdate=!0,x.renderBufferDirect(O,N,B,U,T,ne),U.side=Zt):x.renderBufferDirect(O,N,B,U,T,ne),T.onAfterRender(x,N,O,B,U,ne)}function zo(T,N,O){N.isScene!==!0&&(N=fe);let B=be.get(T),U=p.state.lights,ne=p.state.shadowsArray,he=U.state.version,Me=q.getParameters(T,U.state,ne,N,O),de=q.getProgramCacheKey(Me),Le=B.programs;B.environment=T.isMeshStandardMaterial?N.environment:null,B.fog=N.fog,B.envMap=(T.isMeshStandardMaterial?yt:kt).get(T.envMap||B.environment),B.envMapRotation=B.environment!==null&&T.envMap===null?N.environmentRotation:T.envMapRotation,Le===void 0&&(T.addEventListener("dispose",$),Le=new Map,B.programs=Le);let Ue=Le.get(de);if(Ue!==void 0){if(B.currentProgram===Ue&&B.lightsStateVersion===he)return Sf(T,Me),Ue}else Me.uniforms=q.getUniforms(T),T.onBeforeCompile(Me,x),Ue=q.acquireProgram(Me,de),Le.set(de,Ue),B.uniforms=Me.uniforms;let Re=B.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Re.clippingPlanes=ie.uniform),Sf(T,Me),B.needsLights=o0(T),B.lightsStateVersion=he,B.needsLights&&(Re.ambientLightColor.value=U.state.ambient,Re.lightProbe.value=U.state.probe,Re.directionalLights.value=U.state.directional,Re.directionalLightShadows.value=U.state.directionalShadow,Re.spotLights.value=U.state.spot,Re.spotLightShadows.value=U.state.spotShadow,Re.rectAreaLights.value=U.state.rectArea,Re.ltc_1.value=U.state.rectAreaLTC1,Re.ltc_2.value=U.state.rectAreaLTC2,Re.pointLights.value=U.state.point,Re.pointLightShadows.value=U.state.pointShadow,Re.hemisphereLights.value=U.state.hemi,Re.directionalShadowMap.value=U.state.directionalShadowMap,Re.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Re.spotShadowMap.value=U.state.spotShadowMap,Re.spotLightMatrix.value=U.state.spotLightMatrix,Re.spotLightMap.value=U.state.spotLightMap,Re.pointShadowMap.value=U.state.pointShadowMap,Re.pointShadowMatrix.value=U.state.pointShadowMatrix),B.currentProgram=Ue,B.uniformsList=null,Ue}function Mf(T){if(T.uniformsList===null){let N=T.currentProgram.getUniforms();T.uniformsList=Vr.seqWithValue(N.seq,T.uniforms)}return T.uniformsList}function Sf(T,N){let O=be.get(T);O.outputColorSpace=N.outputColorSpace,O.batching=N.batching,O.batchingColor=N.batchingColor,O.instancing=N.instancing,O.instancingColor=N.instancingColor,O.instancingMorph=N.instancingMorph,O.skinning=N.skinning,O.morphTargets=N.morphTargets,O.morphNormals=N.morphNormals,O.morphColors=N.morphColors,O.morphTargetsCount=N.morphTargetsCount,O.numClippingPlanes=N.numClippingPlanes,O.numIntersection=N.numClipIntersection,O.vertexAlphas=N.vertexAlphas,O.vertexTangents=N.vertexTangents,O.toneMapping=N.toneMapping}function r0(T,N,O,B,U){N.isScene!==!0&&(N=fe),Oe.resetTextureUnits();let ne=N.fog,he=B.isMeshStandardMaterial?N.environment:null,Me=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:en,de=(B.isMeshStandardMaterial?yt:kt).get(B.envMap||he),Le=B.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Ue=!!O.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Re=!!O.morphAttributes.position,Ke=!!O.morphAttributes.normal,dt=!!O.morphAttributes.color,Lt=Gi;B.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Lt=x.toneMapping);let Mt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,pt=Mt!==void 0?Mt.length:0,Pe=be.get(B),Rt=p.state.lights;if(Je===!0&&(j===!0||T!==M)){let un=T===M&&B.id===S;ie.setState(B,T,un)}let et=!1;B.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==Rt.state.version||Pe.outputColorSpace!==Me||U.isBatchedMesh&&Pe.batching===!1||!U.isBatchedMesh&&Pe.batching===!0||U.isBatchedMesh&&Pe.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Pe.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Pe.instancing===!1||!U.isInstancedMesh&&Pe.instancing===!0||U.isSkinnedMesh&&Pe.skinning===!1||!U.isSkinnedMesh&&Pe.skinning===!0||U.isInstancedMesh&&Pe.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Pe.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Pe.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Pe.instancingMorph===!1&&U.morphTexture!==null||Pe.envMap!==de||B.fog===!0&&Pe.fog!==ne||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==ie.numPlanes||Pe.numIntersection!==ie.numIntersection)||Pe.vertexAlphas!==Le||Pe.vertexTangents!==Ue||Pe.morphTargets!==Re||Pe.morphNormals!==Ke||Pe.morphColors!==dt||Pe.toneMapping!==Lt||Pe.morphTargetsCount!==pt)&&(et=!0):(et=!0,Pe.__version=B.version);let In=Pe.currentProgram;et===!0&&(In=zo(B,N,U));let sr=!1,Pn=!1,ia=!1,Ct=In.getUniforms(),On=Pe.uniforms;if(ge.useProgram(In.program)&&(sr=!0,Pn=!0,ia=!0),B.id!==S&&(S=B.id,Pn=!0),sr||M!==T){ge.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Ct.setValue(k,"projectionMatrix",T.projectionMatrix),Ct.setValue(k,"viewMatrix",T.matrixWorldInverse);let Sn=Ct.map.cameraPosition;Sn!==void 0&&Sn.setValue(k,ue.setFromMatrixPosition(T.matrixWorld)),Ie.logarithmicDepthBuffer&&Ct.setValue(k,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Ct.setValue(k,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,Pn=!0,ia=!0)}if(U.isSkinnedMesh){Ct.setOptional(k,U,"bindMatrix"),Ct.setOptional(k,U,"bindMatrixInverse");let un=U.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),Ct.setValue(k,"boneTexture",un.boneTexture,Oe))}U.isBatchedMesh&&(Ct.setOptional(k,U,"batchingTexture"),Ct.setValue(k,"batchingTexture",U._matricesTexture,Oe),Ct.setOptional(k,U,"batchingIdTexture"),Ct.setValue(k,"batchingIdTexture",U._indirectTexture,Oe),Ct.setOptional(k,U,"batchingColorTexture"),U._colorsTexture!==null&&Ct.setValue(k,"batchingColorTexture",U._colorsTexture,Oe));let Bn=O.morphAttributes;if((Bn.position!==void 0||Bn.normal!==void 0||Bn.color!==void 0)&&te.update(U,O,In),(Pn||Pe.receiveShadow!==U.receiveShadow)&&(Pe.receiveShadow=U.receiveShadow,Ct.setValue(k,"receiveShadow",U.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(On.envMap.value=de,On.flipEnvMap.value=de.isCubeTexture&&de.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&N.environment!==null&&(On.envMapIntensity.value=N.environmentIntensity),Pn&&(Ct.setValue(k,"toneMappingExposure",x.toneMappingExposure),Pe.needsLights&&a0(On,ia),ne&&B.fog===!0&&K.refreshFogUniforms(On,ne),K.refreshMaterialUniforms(On,B,H,ee,p.state.transmissionRenderTarget[T.id]),Vr.upload(k,Mf(Pe),On,Oe)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Vr.upload(k,Mf(Pe),On,Oe),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Ct.setValue(k,"center",U.center),Ct.setValue(k,"modelViewMatrix",U.modelViewMatrix),Ct.setValue(k,"normalMatrix",U.normalMatrix),Ct.setValue(k,"modelMatrix",U.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){let un=B.uniformsGroups;for(let Sn=0,kh=un.length;Sn<kh;Sn++){let xs=un[Sn];Ne.update(xs,In),Ne.bind(xs,In)}}return In}function a0(T,N){T.ambientLightColor.needsUpdate=N,T.lightProbe.needsUpdate=N,T.directionalLights.needsUpdate=N,T.directionalLightShadows.needsUpdate=N,T.pointLights.needsUpdate=N,T.pointLightShadows.needsUpdate=N,T.spotLights.needsUpdate=N,T.spotLightShadows.needsUpdate=N,T.rectAreaLights.needsUpdate=N,T.hemisphereLights.needsUpdate=N}function o0(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(T,N,O){let B=be.get(T);B.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),be.get(T.texture).__webglTexture=N,be.get(T.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:O,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,N){let O=be.get(T);O.__webglFramebuffer=N,O.__useDefaultFramebuffer=N===void 0};let c0=k.createFramebuffer();this.setRenderTarget=function(T,N=0,O=0){P=T,E=N,R=O;let B=!0,U=null,ne=!1,he=!1;if(T){let de=be.get(T);if(de.__useDefaultFramebuffer!==void 0)ge.bindFramebuffer(k.FRAMEBUFFER,null),B=!1;else if(de.__webglFramebuffer===void 0)Oe.setupRenderTarget(T);else if(de.__hasExternalTextures)Oe.rebindTextures(T,be.get(T.texture).__webglTexture,be.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Re=T.depthTexture;if(de.__boundDepthTexture!==Re){if(Re!==null&&be.has(Re)&&(T.width!==Re.image.width||T.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Oe.setupDepthRenderbuffer(T)}}let Le=T.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(he=!0);let Ue=be.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ue[N])?U=Ue[N][O]:U=Ue[N],ne=!0):T.samples>0&&Oe.useMultisampledRTT(T)===!1?U=be.get(T).__webglMultisampledFramebuffer:Array.isArray(Ue)?U=Ue[O]:U=Ue,C.copy(T.viewport),D.copy(T.scissor),z=T.scissorTest}else C.copy(_e).multiplyScalar(H).floor(),D.copy(ze).multiplyScalar(H).floor(),z=it;if(O!==0&&(U=c0),ge.bindFramebuffer(k.FRAMEBUFFER,U)&&B&&ge.drawBuffers(T,U),ge.viewport(C),ge.scissor(D),ge.setScissorTest(z),ne){let de=be.get(T.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+N,de.__webglTexture,O)}else if(he){let de=N;for(let Le=0;Le<T.textures.length;Le++){let Ue=be.get(T.textures[Le]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Le,Ue.__webglTexture,O,de)}}else if(T!==null&&O!==0){let de=be.get(T.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,de.__webglTexture,O)}S=-1},this.readRenderTargetPixels=function(T,N,O,B,U,ne,he,Me=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let de=be.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&he!==void 0&&(de=de[he]),de){ge.bindFramebuffer(k.FRAMEBUFFER,de);try{let Le=T.textures[Me],Ue=Le.format,Re=Le.type;if(!Ie.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ie.textureTypeReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=T.width-B&&O>=0&&O<=T.height-U&&(T.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Me),k.readPixels(N,O,B,U,we.convert(Ue),we.convert(Re),ne))}finally{let Le=P!==null?be.get(P).__webglFramebuffer:null;ge.bindFramebuffer(k.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(T,N,O,B,U,ne,he,Me=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let de=be.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&he!==void 0&&(de=de[he]),de)if(N>=0&&N<=T.width-B&&O>=0&&O<=T.height-U){ge.bindFramebuffer(k.FRAMEBUFFER,de);let Le=T.textures[Me],Ue=Le.format,Re=Le.type;if(!Ie.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ie.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ke=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Ke),k.bufferData(k.PIXEL_PACK_BUFFER,ne.byteLength,k.STREAM_READ),T.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Me),k.readPixels(N,O,B,U,we.convert(Ue),we.convert(Re),0);let dt=P!==null?be.get(P).__webglFramebuffer:null;ge.bindFramebuffer(k.FRAMEBUFFER,dt);let Lt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await Bp(k,Lt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Ke),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,ne),k.deleteBuffer(Ke),k.deleteSync(Lt),ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,N=null,O=0){let B=Math.pow(2,-O),U=Math.floor(T.image.width*B),ne=Math.floor(T.image.height*B),he=N!==null?N.x:0,Me=N!==null?N.y:0;Oe.setTexture2D(T,0),k.copyTexSubImage2D(k.TEXTURE_2D,O,0,0,he,Me,U,ne),ge.unbindTexture()};let l0=k.createFramebuffer(),h0=k.createFramebuffer();this.copyTextureToTexture=function(T,N,O=null,B=null,U=0,ne=null){ne===null&&(U!==0?(Sr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ne=U,U=0):ne=0);let he,Me,de,Le,Ue,Re,Ke,dt,Lt,Mt=T.isCompressedTexture?T.mipmaps[ne]:T.image;if(O!==null)he=O.max.x-O.min.x,Me=O.max.y-O.min.y,de=O.isBox3?O.max.z-O.min.z:1,Le=O.min.x,Ue=O.min.y,Re=O.isBox3?O.min.z:0;else{let Bn=Math.pow(2,-U);he=Math.floor(Mt.width*Bn),Me=Math.floor(Mt.height*Bn),T.isDataArrayTexture?de=Mt.depth:T.isData3DTexture?de=Math.floor(Mt.depth*Bn):de=1,Le=0,Ue=0,Re=0}B!==null?(Ke=B.x,dt=B.y,Lt=B.z):(Ke=0,dt=0,Lt=0);let pt=we.convert(N.format),Pe=we.convert(N.type),Rt;N.isData3DTexture?(Oe.setTexture3D(N,0),Rt=k.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Oe.setTexture2DArray(N,0),Rt=k.TEXTURE_2D_ARRAY):(Oe.setTexture2D(N,0),Rt=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,N.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,N.unpackAlignment);let et=k.getParameter(k.UNPACK_ROW_LENGTH),In=k.getParameter(k.UNPACK_IMAGE_HEIGHT),sr=k.getParameter(k.UNPACK_SKIP_PIXELS),Pn=k.getParameter(k.UNPACK_SKIP_ROWS),ia=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Mt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Mt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Le),k.pixelStorei(k.UNPACK_SKIP_ROWS,Ue),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Re);let Ct=T.isDataArrayTexture||T.isData3DTexture,On=N.isDataArrayTexture||N.isData3DTexture;if(T.isDepthTexture){let Bn=be.get(T),un=be.get(N),Sn=be.get(Bn.__renderTarget),kh=be.get(un.__renderTarget);ge.bindFramebuffer(k.READ_FRAMEBUFFER,Sn.__webglFramebuffer),ge.bindFramebuffer(k.DRAW_FRAMEBUFFER,kh.__webglFramebuffer);for(let xs=0;xs<de;xs++)Ct&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,be.get(T).__webglTexture,U,Re+xs),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,be.get(N).__webglTexture,ne,Lt+xs)),k.blitFramebuffer(Le,Ue,he,Me,Ke,dt,he,Me,k.DEPTH_BUFFER_BIT,k.NEAREST);ge.bindFramebuffer(k.READ_FRAMEBUFFER,null),ge.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(U!==0||T.isRenderTargetTexture||be.has(T)){let Bn=be.get(T),un=be.get(N);ge.bindFramebuffer(k.READ_FRAMEBUFFER,l0),ge.bindFramebuffer(k.DRAW_FRAMEBUFFER,h0);for(let Sn=0;Sn<de;Sn++)Ct?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Bn.__webglTexture,U,Re+Sn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Bn.__webglTexture,U),On?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,un.__webglTexture,ne,Lt+Sn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,un.__webglTexture,ne),U!==0?k.blitFramebuffer(Le,Ue,he,Me,Ke,dt,he,Me,k.COLOR_BUFFER_BIT,k.NEAREST):On?k.copyTexSubImage3D(Rt,ne,Ke,dt,Lt+Sn,Le,Ue,he,Me):k.copyTexSubImage2D(Rt,ne,Ke,dt,Le,Ue,he,Me);ge.bindFramebuffer(k.READ_FRAMEBUFFER,null),ge.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else On?T.isDataTexture||T.isData3DTexture?k.texSubImage3D(Rt,ne,Ke,dt,Lt,he,Me,de,pt,Pe,Mt.data):N.isCompressedArrayTexture?k.compressedTexSubImage3D(Rt,ne,Ke,dt,Lt,he,Me,de,pt,Mt.data):k.texSubImage3D(Rt,ne,Ke,dt,Lt,he,Me,de,pt,Pe,Mt):T.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,ne,Ke,dt,he,Me,pt,Pe,Mt.data):T.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,ne,Ke,dt,Mt.width,Mt.height,pt,Mt.data):k.texSubImage2D(k.TEXTURE_2D,ne,Ke,dt,he,Me,pt,Pe,Mt);k.pixelStorei(k.UNPACK_ROW_LENGTH,et),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,In),k.pixelStorei(k.UNPACK_SKIP_PIXELS,sr),k.pixelStorei(k.UNPACK_SKIP_ROWS,Pn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,ia),ne===0&&N.generateMipmaps&&k.generateMipmap(Rt),ge.unbindTexture()},this.initRenderTarget=function(T){be.get(T).__webglFramebuffer===void 0&&Oe.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Oe.setTextureCube(T,0):T.isData3DTexture?Oe.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Oe.setTexture2DArray(T,0):Oe.setTexture2D(T,0),ge.unbindTexture()},this.resetState=function(){E=0,R=0,P=null,ge.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Xe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Xe._getUnpackColorSpace()}}});function jr(s,e,t=[],n){let i=nt[s],r=i.base,a=Math.max(1,e)-1,o={...r,atk:0,hp:0,def:0};for(let l of Fd)o[l]=Math.floor(i.attr[l]+i.grow[l]*a);for(let l of t)if(l)for(let[h,u]of Object.entries(l.stats))o[h]=(o[h]||0)+u;o.main=i.main,o.atk+=o[i.main]*rh,o.hp+=o.vit*ah,o.def+=Math.round(r.def*(1+a*.05))+Math.floor(o.str*zd),o.crit+=o.dex*Od;let c=At(s,n).passive.mods;return o.hp*=1+(c.hpPct||0),o.def=Math.round(o.def*(1+(c.defPct||0))),o.atk=Math.round(o.atk*(1+(c.atkPct||0))),o.crit+=c.crit||0,o.critDmg+=c.critDmg||0,o.haste=(o.haste||0)+(c.haste||0),o.speed*=1+(c.speedPct||0),o.hp=Math.round(o.hp),o}function Fm(s){let e=s.atk*(1+Math.min(1,s.crit)*(s.critDmg-1))*(1+Math.min(.4,s.haste||0)*.5),t=s.hp*(1+s.def/100)/12;return Math.round(e+t)}var nt,qn,ms,Fd,rh,ah,zd,Od,Xr,sh,Bd,At,oh,ps,_n,go,Pt,Hd,ch,lh,Um,ai=sa(()=>{nt={knight:{name:"\uC131\uAE30\uC0AC",model:"Knight",show:["1H_Sword","Badge_Shield"],idle:"Idle",run:"Running_A",trail:"#ffd98a",desc:"\uBC29\uD328\uB85C \uD30C\uD2F0\uB97C \uC9C0\uD0A4\uAC70\uB098 \uC131\uAC80\uC73C\uB85C \uC801\uC744 \uBCA0\uB294 \uADFC\uC811 \uC804\uC0AC. \uAC15\uB825\uD55C \uBB34\uB825\uD654.",main:"str",attr:{str:20,dex:8,int:4,vit:28},grow:{str:1.4,dex:.4,int:.2,vit:2.24},base:{def:60,crit:.092,critDmg:2,speed:5.4,haste:0},basic:["kn_b1","kn_b2","kn_b3"]},barbarian:{name:"\uAD11\uC804\uC0AC",model:"Barbarian",show:["2H_Axe","Barbarian_Hat"],idle:"2H_Melee_Idle",run:"Running_A",trail:"#ff7a4a",desc:"\uAC70\uB300\uD55C \uB3C4\uB07C\uB97C \uD718\uB450\uB974\uB294 \uB3CC\uACA9\uD615 \uB51C\uB7EC. \uCCB4\uB825\uC774 \uB0AE\uC744\uC218\uB85D \uAC15\uD574\uC9D0.",main:"str",attr:{str:22,dex:10,int:3,vit:25},grow:{str:1.57,dex:.5,int:.1,vit:2},base:{def:34,crit:.11,critDmg:2,speed:5.5,haste:0},basic:["bb_b1","bb_b2","bb_b3"]},mage:{name:"\uB9C8\uBC95\uC0AC",model:"Mage",show:["2H_Staff","Mage_Hat"],idle:"Idle",run:"Running_B",trail:"#8fd0ff",desc:"\uC6D0\uC18C \uB9C8\uBC95\uC73C\uB85C \uC801\uC744 \uC4F8\uC5B4\uBC84\uB9AC\uAC70\uB098 \uCE58\uC720 \uB9C8\uBC95\uC73C\uB85C \uD30C\uD2F0\uB97C \uC0B4\uB9AC\uB294 \uC6D0\uAC70\uB9AC \uB9C8\uBC95\uC0AC.",main:"int",attr:{str:6,dex:10,int:24,vit:19},grow:{str:.3,dex:.5,int:1.65,vit:1.52},base:{def:27,crit:.11,critDmg:2,speed:5.3,haste:0},basic:["mg_b1","mg_b2","mg_b1"]},rogue:{name:"\uB3C4\uC801",model:"Rogue_Hooded",show:["Knife","Knife_Offhand"],idle:"Idle",run:"Running_A",trail:"#b98cff",desc:"\uC30D\uB2E8\uAC80\uC73C\uB85C \uB4F1 \uB4A4\uB97C \uB178\uB9AC\uB294 \uC554\uC0B4\uC790. \uBC31\uC5B4\uD0DD \uD53C\uD574 \uD2B9\uD654.",main:"dex",attr:{str:10,dex:21,int:5,vit:21},grow:{str:.5,dex:1.48,int:.2,vit:1.68},base:{def:35,crit:.199,critDmg:2.1,speed:5.9,haste:.1},basic:["rg_b1","rg_b2","rg_b3"]},archer:{name:"\uAD81\uC218",model:"Rogue_Hooded",show:["2H_Crossbow"],hide:["Rogue_Cape"],idle:"Idle",run:"Running_A",trail:"#a8e070",recolor:"leather",desc:"\uC11D\uAD81\uC73C\uB85C \uBA3C \uAC70\uB9AC\uC5D0\uC11C \uC801\uC744 \uAFF0\uB6AB\uB294 \uC0AC\uC218. \uAC70\uB9AC\uB97C \uBC8C\uB9AC\uBA70 \uC18D\uC0AC.",main:"dex",attr:{str:8,dex:22,int:6,vit:20},grow:{str:.4,dex:1.54,int:.3,vit:1.6},base:{def:31,crit:.138,critDmg:2.1,speed:5.6,haste:.05},basic:["ar_b1","ar_b2","ar_b1"]}},qn=Object.keys(nt),ms={str:"\uD798",dex:"\uBBFC\uCCA9",int:"\uC9C0\uB2A5",vit:"\uCCB4\uB825"},Fd=Object.keys(ms),rh=5,ah=50,zd=.5,Od=.001,Xr=s=>nt[s].main==="int"?"\uB9C8\uB825":"\uACF5\uACA9\uB825",sh={knight:[{id:"guardian",name:"\uC218\uD638 \uAE30\uC0AC",role:"tank",desc:"\uC801\uC758 \uACF5\uACA9\uC744 \uB04C\uC5B4\uC548\uACE0 \uD30C\uD2F0\uB97C \uC9C0\uD0A4\uB294 \uBC29\uD328.",skills:{q:"kn_q",w:"kn_taunt",e:"kn_e",r:"kn_r"},passive:{name:"\uBD88\uAD74\uC758 \uC218\uD638\uC790",desc:"\uCD5C\uB300 \uC0DD\uBA85\uB825 +35%, \uBC29\uC5B4\uB825 +60%, \uBC1B\uB294 \uD53C\uD574 -10%, \uBCF4\uD638\uB9C9 \uD6A8\uACFC +50%.",mods:{hpPct:.35,defPct:.6,dr:.1,shieldMult:1.5}}},{id:"crusader",name:"\uC9D5\uBC8C \uAE30\uC0AC",role:"dps",desc:"\uC131\uAC80\uC73C\uB85C \uC801\uC9C4\uC744 \uBCA0\uC5B4 \uAC00\uB974\uB294 \uACF5\uACA9\uD615 \uAE30\uC0AC.",skills:{q:"kn_q",w:"kn_w",e:"kn_holy",r:"kn_r"},passive:{name:"\uC9D5\uBC8C\uC758 \uB9F9\uC138",desc:"\uACF5\uACA9\uB825 +15%, \uCE58\uBA85\uD0C0 \uD655\uB960 +8%.",mods:{atkPct:.15,crit:.08}}}],barbarian:[{id:"berserker",name:"\uAD11\uC804\uC0AC",role:"dps",desc:"\uC0C1\uCC98\uAC00 \uAE4A\uC744\uC218\uB85D \uAC70\uC138\uC9C0\uB294 \uB3CC\uACA9\uD615 \uB51C\uB7EC.",skills:{q:"bb_q",w:"bb_w",e:"bb_e",r:"bb_r"},passive:{name:"\uD22C\uC9C0",desc:"\uC0DD\uBA85\uB825\uC774 50% \uC774\uD558\uC77C \uB54C \uACF5\uACA9\uB825 +20%.",mods:{lowHpAtk:.2}}},{id:"warlord",name:"\uC804\uC7C1\uAD70\uC8FC",role:"tank",desc:"\uD3EC\uD6A8\uB85C \uC801\uC744 \uB04C\uC5B4\uBAA8\uC73C\uACE0 \uAC15\uCCA0 \uAC19\uC740 \uBAB8\uC73C\uB85C \uBC84\uD2F0\uB294 \uC804\uC120\uC758 \uBCBD.",skills:{q:"bb_q",w:"bb_roar",e:"bb_iron",r:"bb_quake"},passive:{name:"\uAC15\uCCA0 \uC758\uC9C0",desc:"\uCD5C\uB300 \uC0DD\uBA85\uB825 +35%, \uBC29\uC5B4\uB825 +60%, \uBC1B\uB294 \uD53C\uD574 -10%.",mods:{hpPct:.35,defPct:.6,dr:.1}}}],mage:[{id:"elemental",name:"\uC6D0\uC18C\uC220\uC0AC",role:"dps",desc:"\uD654\uC5FC, \uC11C\uB9AC, \uBC88\uAC1C\uB85C \uC801\uC744 \uD55C\uAEBC\uBC88\uC5D0 \uC4F8\uC5B4\uBC84\uB9BC.",skills:{q:"mg_q",w:"mg_w",e:"mg_chain",r:"mg_r"},passive:{name:"\uC6D0\uC18C \uC99D\uD3ED",desc:"\uCE58\uBA85\uD0C0 \uD53C\uD574 +30%, \uC2E0\uC18D +10%.",mods:{critDmg:.3,haste:.1}}},{id:"healer",name:"\uCE58\uC720\uC0AC",role:"heal",desc:"\uBE5B\uC73C\uB85C \uC801\uC744 \uD0DC\uC6B0\uBA70 \uD30C\uD2F0\uB97C \uD68C\uBCF5\uC2DC\uD0A4\uACE0 \uC4F0\uB7EC\uC9C4 \uB3D9\uB8CC\uB97C \uC77C\uC73C\uD0B4. \uD63C\uC790\uC11C\uB3C4 \uC2F8\uC6B8 \uC218 \uC788\uC74C.",skills:{q:"mg_holy",w:"mg_spring",e:"mg_orb",r:"mg_miracle"},passive:{name:"\uC0DD\uBA85\uC758 \uC0D8",desc:"\uCE58\uC720\uB7C9 +30%, \uCD5C\uB300 \uC0DD\uBA85\uB825 +10%, \uB9C8\uB825 +10%.",mods:{healMult:1.3,hpPct:.1,atkPct:.1}}}],archer:[{id:"marksman",name:"\uC11D\uAD81 \uC0AC\uC218",role:"dps",desc:"\uBB35\uC9C1\uD55C \uC11D\uAD81\uC73C\uB85C \uD55C \uBC1C \uD55C \uBC1C \uC801\uC744 \uAFF0\uB6AB\uB294 \uC800\uACA9\uC218.",skills:{q:"ar_q",w:"ar_w",e:"ar_e",r:"ar_r"},passive:{name:"\uB9E4\uC758 \uB208",desc:"\uCE58\uBA85\uD0C0 \uD655\uB960 +10%, \uCE58\uBA85\uD0C0 \uD53C\uD574 +20%.",mods:{crit:.1,critDmg:.2}}},{id:"ranger",name:"\uC7A5\uAD81 \uAD81\uC0AC",role:"dps",weapon:"bow",desc:"\uD65C\uB85C \uC274 \uC0C8 \uC5C6\uC774 \uD654\uC0B4\uC744 \uD37C\uBD93\uB294 \uC18D\uC0AC\uD615 \uAD81\uC218.",basic:["ab_b1","ab_b2","ab_b1"],skills:{q:"ab_q",w:"ar_w",e:"ar_e",r:"ab_r"},passive:{name:"\uBC14\uB78C\uC758 \uC190",desc:"\uC2E0\uC18D +20%, \uC774\uB3D9 \uC18D\uB3C4 +8%, \uCE58\uBA85\uD0C0 \uD655\uB960 +5%.",mods:{haste:.2,speedPct:.08,crit:.05}}}],rogue:[{id:"assassin",name:"\uC554\uC0B4\uC790",role:"dps",desc:"\uADF8\uB9BC\uC790 \uC18D\uC5D0\uC11C \uB4F1 \uB4A4\uB97C \uB178\uB9AC\uB294 \uC554\uC0B4\uC790.",skills:{q:"rg_q",w:"rg_w",e:"rg_e",r:"rg_r"},passive:{name:"\uC554\uC0B4 \uBCF8\uB2A5",desc:"\uBC31\uC5B4\uD0DD \uD53C\uD574 +30%.",mods:{backBonus:.3}}},{id:"trickster",name:"\uB3C5\uCE7C\uC7A1\uC774",role:"dps",desc:"\uB2E8\uAC80\uC744 \uD769\uBFCC\uB9AC\uACE0 \uB3C5\uC548\uAC1C\uB85C \uC801\uC744 \uB9D0\uB824 \uC8FD\uC774\uB294 \uAD11\uC5ED \uB51C\uB7EC.",skills:{q:"rg_fan",w:"rg_w",e:"rg_e",r:"rg_venom"},passive:{name:"\uB9F9\uB3C5\uC758 \uCE7C\uB0A0",desc:"\uCE58\uBA85\uD0C0 \uD655\uB960 +8%, \uC2E0\uC18D +15%.",mods:{crit:.08,haste:.15}}}]},Bd={tank:"\uD0F1\uCEE4",dps:"\uB51C\uB7EC",heal:"\uD790\uB7EC"},At=(s,e)=>sh[s].find(t=>t.id===e)||sh[s][0],oh=(s,e)=>At(s,e).basic||nt[s].basic,ps=(s,e)=>({type:"cone",r:s,ang:e*Math.PI/180}),_n=s=>({type:"circle",r:s}),go=(s,e)=>({type:"rect",len:s,w:e}),Pt={dodge:{anim:"Dodge_Forward",dur:.42,lock:.42,move:[[0,.36,15]],iframes:[0,.38],cancelable:!1},potion:{anim:null,dur:.1,lock:0,spawns:[{t:0,heal:.35}]},kn_b1:{anim:"1H_Melee_Attack_Slice_Horizontal",dur:.46,lock:.4,combo:.26,move:[[.02,.14,4]],hits:[{t:.2,shape:ps(3.1,130),mult:.9,stag:4,kb:.5,fx:"slash"}]},kn_b2:{anim:"1H_Melee_Attack_Slice_Diagonal",dur:.46,lock:.4,combo:.26,move:[[.02,.14,4]],hits:[{t:.2,shape:ps(3.1,130),mult:1,stag:4,kb:.5,fx:"slash"}]},kn_b3:{anim:"1H_Melee_Attack_Chop",dur:.62,lock:.56,combo:.5,move:[[.05,.2,5]],hits:[{t:.3,shape:ps(3.4,90),mult:1.6,stag:8,kb:1.6,fx:"smash"}]},kn_q:{name:"\uBC29\uD328 \uB3CC\uC9C4",desc:"\uC804\uBC29\uC73C\uB85C \uB3CC\uC9C4\uD558\uBA70 \uBD80\uB52A\uD78C \uC801\uC744 \uBC00\uC5B4\uB0C4. \uCE74\uC6B4\uD130 \uAC00\uB2A5.",cd:8,anim:"Block_Attack",dur:.62,lock:.56,super:!0,move:[[.04,.34,21]],hits:[{t:.04,until:.36,every:.04,once:!0,shape:_n(1.8),off:.9,mult:2.2,stag:22,kb:3.5,counter:!0,fx:"bash"}]},kn_w:{name:"\uC2EC\uD310\uC758 \uBCA0\uAE30",desc:"\uB3C4\uC57D\uD558\uBA70 \uC804\uBC29 \uB113\uC740 \uBC94\uC704\uB97C \uB0B4\uB824\uCE68.",cd:6,anim:"1H_Melee_Attack_Jump_Chop",dur:.82,lock:.78,super:!0,move:[[.08,.36,7]],hits:[{t:.46,shape:ps(4.6,110),mult:3.4,stag:28,kb:2.2,fx:"judgement"}]},kn_e:{name:"\uC218\uD638\uC758 \uC11C\uC57D",desc:"\uC8FC\uBCC0 \uD30C\uD2F0\uC6D0\uC5D0\uAC8C \uCD5C\uB300 \uCCB4\uB825 25% \uBCF4\uD638\uB9C9(6\uCD08).",cd:16,anim:"Cheer",clip:[.2,1.3],dur:.7,lock:.6,spawns:[{t:.3,buff:{kind:"shield",pct:.25,dur:6,radius:12}}]},kn_taunt:{name:"\uB3C4\uBC1C",desc:"\uC8FC\uBCC0 \uC801\uC758 \uD45C\uC801\uC744 4\uCD08\uAC04 \uC790\uC2E0\uC5D0\uAC8C \uACE0\uC815\uD558\uACE0 5\uCD08\uAC04 \uBC1B\uB294 \uD53C\uD574 30% \uAC10\uC18C.",cd:12,anim:"Taunt",dur:.7,lock:.6,spawns:[{t:.25,taunt:{radius:9,dur:4}},{t:.25,buff:{kind:"guard",dr:.3,dur:5,self:!0}}]},kn_holy:{name:"\uBE5B\uC758 \uD30C\uB3D9",desc:"\uC804\uBC29 \uC77C\uC9C1\uC120\uC73C\uB85C \uBE5B\uC758 \uAC80\uAE30\uB97C \uB0B4\uBFDC\uC5B4 \uAD00\uD1B5 \uD53C\uD574.",cd:9,anim:"1H_Melee_Attack_Stab",clip:[.2,1.1],dur:.6,lock:.55,super:!0,move:[[.02,.12,6]],hits:[{t:.24,shape:go(8.5,2.6),mult:4.4,stag:18,kb:1.8,fx:"holy"}]},kn_r:{name:"\uCC9C\uBC8C",desc:"\uC9C0\uC815\uD55C \uC704\uCE58\uC5D0 \uB099\uB8B0\uB97C \uB5A8\uC5B4\uB728\uB9BC. \uBB34\uB825\uD654 \uCD5C\uC0C1.",cd:24,anim:"Spellcast_Raise",clip:[.3,1.6],dur:1,lock:.95,super:!0,range:9,spawns:[{t:.15,zone:{at:"target",shape:_n(4.8),warn:.7,dur:.01,mult:9,stag:70,kb:2,fx:"lightning",team:"player"}}]},bb_b1:{anim:"2H_Melee_Attack_Slice",dur:.58,lock:.5,combo:.36,move:[[.02,.16,4]],hits:[{t:.28,shape:ps(3.6,150),mult:1.15,stag:5,kb:.8,fx:"slash"}]},bb_b2:{anim:"2H_Melee_Attack_Chop",clip:[.2,1.3],dur:.62,lock:.54,combo:.4,move:[[.02,.16,4]],hits:[{t:.3,shape:ps(3.6,80),mult:1.35,stag:6,kb:1,fx:"smash"}]},bb_b3:{anim:"2H_Melee_Attack_Stab",clip:[.1,1.2],dur:.66,lock:.6,combo:.52,move:[[.1,.3,9]],hits:[{t:.3,shape:go(4.2,2.2),mult:1.9,stag:10,kb:2.4,fx:"thrust"}]},bb_q:{name:"\uB3C4\uC57D \uAC15\uD0C0",desc:"\uC9C0\uC815\uD55C \uC704\uCE58\uB85C \uB3C4\uC57D\uD574 \uCDA9\uACA9\uD30C\uB97C \uC77C\uC73C\uD0B4.",cd:9,anim:"Jump_Full_Short",clip:[.1,1.1],dur:.8,lock:.76,super:!0,range:10,leap:[.05,.55],hits:[{t:.56,shape:_n(3.8),mult:3.8,stag:26,kb:3,fx:"quake"}]},bb_w:{name:"\uD68C\uC804 \uBCA0\uAE30",desc:"\uC774\uB3D9\uD558\uBA70 \uC5F0\uC18D\uC73C\uB85C \uD68C\uC804\uD574 \uC8FC\uBCC0\uC744 \uBCB0.",cd:10,anim:"2H_Melee_Attack_Spinning",dur:2,lock:0,loopAnim:!0,moveScale:.6,super:!0,hits:[{t:.1,until:1.95,every:.24,shape:_n(3.2),mult:.75,stag:4,kb:.4,fx:"spin"}]},bb_e:{name:"\uC804\uD22C \uD568\uC131",desc:"8\uCD08\uAC04 \uACF5\uACA9\uB825 25%, \uC774\uB3D9 \uC18D\uB3C4 15% \uC99D\uAC00.",cd:18,anim:"Taunt",dur:.7,lock:.6,spawns:[{t:.25,buff:{kind:"rage",atk:.25,speed:.15,dur:8,self:!0}}]},bb_r:{name:"\uBD84\uB178 \uD3ED\uBC1C",desc:"\uAC70\uB300\uD55C \uD68C\uC804 \uC77C\uACA9. \uC783\uC740 \uCCB4\uB825\uC5D0 \uBE44\uB840\uD574 \uCD5C\uB300 60% \uAC15\uD654.",cd:26,anim:"2H_Melee_Attack_Spin",clip:[.2,2.1],dur:1.2,lock:1.15,super:!0,hits:[{t:.62,shape:_n(6.2),mult:9,stag:55,kb:4,fx:"rage",lowHpScale:.6}]},bb_roar:{name:"\uC704\uD611\uC758 \uD3EC\uD6A8",desc:"\uC8FC\uBCC0 \uC801\uC758 \uD45C\uC801\uC744 4\uCD08\uAC04 \uC790\uC2E0\uC5D0\uAC8C \uACE0\uC815\uD558\uACE0 5\uCD08\uAC04 \uBC1B\uB294 \uD53C\uD574 30% \uAC10\uC18C.",cd:12,anim:"Taunt",dur:.7,lock:.6,spawns:[{t:.25,taunt:{radius:10,dur:4}},{t:.25,buff:{kind:"guard",dr:.3,dur:5,self:!0}}]},bb_iron:{name:"\uAC15\uCCA0 \uD53C\uBD80",desc:"6\uCD08\uAC04 \uCD5C\uB300 \uC0DD\uBA85\uB825 35% \uBCF4\uD638\uB9C9\uC744 \uB450\uB974\uACE0 \uBC1B\uB294 \uD53C\uD574 20% \uAC10\uC18C.",cd:16,anim:"Cheer",clip:[.2,1.3],dur:.6,lock:.5,spawns:[{t:.25,buff:{kind:"shield",pct:.35,dur:6,radius:.5}},{t:.25,buff:{kind:"guard",dr:.2,dur:6,self:!0}}]},bb_quake:{name:"\uB300\uC9C0 \uBD84\uC1C4",desc:"\uB3C4\uB07C\uB85C \uB545\uC744 \uB0B4\uB9AC\uCCD0 \uC8FC\uBCC0 \uB113\uC740 \uBC94\uC704\uB97C \uAC15\uD0C0. \uBB34\uB825\uD654 \uCD5C\uC0C1.",cd:24,anim:"2H_Melee_Attack_Chop",clip:[.1,1.3],dur:1,lock:.95,super:!0,hits:[{t:.52,shape:_n(7),mult:6.5,stag:80,kb:3.5,fx:"quake"}]},mg_b1:{anim:"Spellcast_Shoot",clip:[.1,.8],dur:.42,lock:.34,combo:.28,spawns:[{t:.2,proj:"bolt"}]},mg_b2:{anim:"Spellcast_Shoot",clip:[.1,.8],dur:.42,lock:.34,combo:.28,spawns:[{t:.2,proj:"bolt"}]},mg_q:{name:"\uD654\uC5FC\uAD6C",desc:"\uC801\uC911 \uC2DC \uD3ED\uBC1C\uD558\uB294 \uD654\uC5FC\uAD6C\uB97C \uBC1C\uC0AC.",cd:5,anim:"Spellcast_Shoot",clip:[.05,.9],dur:.5,lock:.42,spawns:[{t:.22,proj:"fireball"}]},mg_w:{name:"\uC11C\uB9AC \uC7A5\uD310",desc:"\uC9C0\uC815 \uC704\uCE58\uC5D0 4\uCD08\uAC04 \uC5BC\uC74C \uD3ED\uD48D. \uC9C0\uC18D \uD53C\uD574\uC640 \uB454\uD654.",cd:11,anim:"Spellcasting",dur:.55,lock:.5,range:11,spawns:[{t:.3,zone:{at:"target",shape:_n(3.8),warn:0,dur:4,tick:.4,mult:.7,stag:3,slow:.45,fx:"frost",team:"player"}}]},mg_chain:{name:"\uC5F0\uC1C4 \uBC88\uAC1C",desc:"\uC870\uC900\uD55C \uC801\uC5D0\uAC8C \uBC88\uAC1C\uB97C \uB0B4\uB9AC\uAF42\uACE0 \uC8FC\uBCC0 \uC801 \uCD5C\uB300 4\uBA85\uC5D0\uAC8C \uD295\uAE40.",cd:8,anim:"Spellcast_Shoot",clip:[.05,.9],dur:.45,lock:.4,range:11,spawns:[{t:.2,chain:{n:5,jump:6.5,mult:2.6,decay:.8,stag:10}}]},mg_r:{name:"\uC6B4\uC11D \uB099\uD558",desc:"\uC9C0\uC815 \uC704\uCE58\uC5D0 \uAC70\uB300\uD55C \uC6B4\uC11D\uC744 \uB5A8\uC5B4\uB728\uB9BC.",cd:26,anim:"Spellcast_Long",clip:[.2,2.2],dur:1.1,lock:1.05,super:!0,range:12,spawns:[{t:.2,zone:{at:"target",shape:_n(5.2),warn:1.25,dur:.01,mult:13,stag:55,kb:3,fx:"meteor",team:"player"}}]},mg_holy:{name:"\uC2E0\uC131 \uD3ED\uBC1C",desc:"\uC9C0\uC815 \uC704\uCE58\uC5D0 \uBE5B\uC744 \uD130\uB728\uB824 \uC801\uC5D0\uAC8C \uD53C\uD574\uB97C \uC8FC\uACE0, \uBC94\uC704 \uC548 \uD30C\uD2F0\uC6D0\uC740 12% \uD68C\uBCF5.",cd:5,anim:"Spellcast_Raise",clip:[.3,1.3],dur:.5,lock:.42,range:12,spawns:[{t:.2,zone:{at:"target",shape:_n(3.6),warn:.25,dur:.01,mult:3.4,stag:14,kb:1,heal:.12,fx:"holyburst",team:"player"}}]},mg_orb:{name:"\uBE5B\uC758 \uAD6C\uCCB4",desc:"\uCC9C\uCC9C\uD788 \uB098\uC544\uAC00\uBA70 \uB2FF\uB294 \uBAA8\uB4E0 \uC801\uC744 \uAD00\uD1B5\uD558\uB294 \uBE5B\uC758 \uAD6C\uCCB4.",cd:7,anim:"Spellcast_Shoot",clip:[.05,.9],dur:.5,lock:.42,spawns:[{t:.22,proj:"lightorb"}]},mg_spring:{name:"\uC7AC\uC0DD\uC758 \uC0D8",desc:"\uC9C0\uC815 \uC704\uCE58\uC5D0 5\uCD08\uAC04 \uCE58\uC720\uC758 \uC0D8. \uC548\uC5D0 \uC788\uC73C\uBA74 0.5\uCD08\uB9C8\uB2E4 3.5% \uD68C\uBCF5.",cd:14,anim:"Spellcasting",dur:.55,lock:.5,range:12,spawns:[{t:.3,zone:{at:"target",shape:_n(4.2),warn:0,dur:5,tick:.5,heal:.035,fx:"spring",team:"player"}}]},mg_miracle:{name:"\uC0DD\uBA85\uC758 \uAE30\uC801",desc:"\uC8FC\uBCC0 \uD30C\uD2F0\uC6D0\uC744 50% \uD68C\uBCF5\uD558\uACE0 \uC4F0\uB7EC\uC9C4 \uB3D9\uB8CC\uB97C 35% \uC0DD\uBA85\uB825\uC73C\uB85C \uBD80\uD65C.",cd:40,anim:"Spellcast_Long",clip:[.2,2.2],dur:1.1,lock:1.05,super:!0,spawns:[{t:.55,miracle:{radius:14,heal:.5,revive:.35}}]},rg_b1:{anim:"Dualwield_Melee_Attack_Slice",clip:[.1,1],dur:.36,lock:.3,combo:.2,move:[[.02,.12,5]],hits:[{t:.16,shape:ps(2.7,120),mult:.75,stag:3,kb:.3,fx:"slash"}]},rg_b2:{anim:"Dualwield_Melee_Attack_Chop",clip:[.1,1.1],dur:.36,lock:.3,combo:.2,move:[[.02,.12,5]],hits:[{t:.16,shape:ps(2.7,120),mult:.8,stag:3,kb:.3,fx:"slash"}]},rg_b3:{anim:"Dualwield_Melee_Attack_Stab",clip:[.2,1.3],dur:.48,lock:.42,combo:.36,move:[[.04,.2,7]],hits:[{t:.22,shape:go(3.2,1.8),mult:1.3,stag:5,kb:1,fx:"thrust"}]},rg_q:{name:"\uADF8\uB9BC\uC790 \uCC0C\uB974\uAE30",desc:"\uC801\uC744 \uAFF0\uB6AB\uC73C\uBA70 \uB3CC\uC9C4. \uCE74\uC6B4\uD130 \uAC00\uB2A5.",cd:6,anim:"Dualwield_Melee_Attack_Stab",clip:[.2,1],dur:.46,lock:.42,super:!0,iframes:[.02,.3],move:[[.02,.3,24]],hits:[{t:.02,until:.32,every:.03,once:!0,shape:_n(1.6),mult:2.4,stag:16,kb:.5,counter:!0,fx:"shadow"}]},rg_w:{name:"\uCE7C\uB0A0 \uD3ED\uD48D",desc:"\uC8FC\uBCC0\uC744 \uBE60\uB974\uAC8C \uB2E4\uC12F \uBC88 \uBCB0.",cd:8,anim:"2H_Melee_Attack_Spin",clip:[.3,2],dur:.9,lock:.85,super:!0,hits:[{t:.12,until:.8,every:.16,shape:_n(3.3),mult:.9,stag:4,kb:.2,fx:"blades"}]},rg_e:{name:"\uC5F0\uB9C9",desc:"\uC5F0\uB9C9\uC744 \uD130\uB728\uB824 1.5\uCD08 \uBB34\uC801. \uC8FC\uBCC0 \uC801\uC774 \uB300\uC0C1\uC744 \uB193\uCE68.",cd:14,anim:"Throw",clip:[.3,1.1],dur:.4,lock:.3,iframes:[0,1.5],spawns:[{t:.1,smoke:5}]},rg_fan:{name:"\uB2E8\uAC80 \uBD80\uCC44",desc:"\uC804\uBC29 \uBD80\uCC44\uAF34\uB85C \uB2E8\uAC80 \uB2E4\uC12F \uC790\uB8E8\uB97C \uB358\uC9D0.",cd:5,anim:"Throw",clip:[.3,1.1],dur:.42,lock:.36,spawns:[{t:.16,proj:"dagger",fan:[-.32,-.16,0,.16,.32]}]},rg_venom:{name:"\uB3C5\uC548\uAC1C",desc:"\uC9C0\uC815 \uC704\uCE58\uC5D0 4\uCD08\uAC04 \uB3C5\uC548\uAC1C. \uC9C0\uC18D \uD53C\uD574\uC640 \uB454\uD654.",cd:20,anim:"Throw",clip:[.3,1.1],dur:.5,lock:.45,range:10,spawns:[{t:.2,zone:{at:"target",shape:_n(5),warn:.2,dur:4,tick:.35,mult:1.1,stag:4,slow:.4,fx:"poison",team:"player"}}]},rg_r:{name:"\uCC98\uD615",desc:"\uC9E7\uAC8C \uD30C\uACE0\uB4E4\uC5B4 \uCE58\uBA85\uC801\uC778 \uC77C\uACA9. \uBC31\uC5B4\uD0DD \uC2DC \uD53C\uD574 2\uBC30.",cd:20,anim:"1H_Melee_Attack_Stab",clip:[.3,1.2],dur:.6,lock:.56,super:!0,move:[[.02,.16,18]],hits:[{t:.24,shape:go(3.2,2.4),mult:11,stag:35,kb:1,fx:"execute",backMult:2}]},ab_b1:{anim:"1H_Ranged_Shoot",clip:[.2,.9],dur:.34,lock:.28,combo:.22,spawns:[{t:.14,proj:"arrowb"}]},ab_b2:{anim:"1H_Ranged_Shoot",clip:[.2,.9],dur:.34,lock:.28,combo:.22,spawns:[{t:.14,proj:"arrowb"}]},ab_q:{name:"\uC5F0\uC18D \uC0AC\uACA9",desc:"\uD654\uC0B4 \uC138 \uBC1C\uC744 \uBE60\uB974\uAC8C \uC5F0\uB2EC\uC544 \uC3E8.",cd:6,anim:"1H_Ranged_Shoot",clip:[.2,.9],dur:.72,lock:.66,spawns:[.12,.34,.56].map(s=>({t:s,proj:"arrowb",mult:1.7}))},ab_r:{name:"\uD3ED\uD48D \uD654\uC0B4",desc:"\uC804\uBC29 \uB113\uC740 \uBD80\uCC44\uAF34\uB85C \uD654\uC0B4\uC744 \uB450 \uCC28\uB840 \uC3DF\uC544\uB0C4.",cd:20,anim:"1H_Ranged_Aiming",clip:[0,1],dur:.95,lock:.9,super:!0,spawns:[.45,.7].map((s,e)=>({t:s,proj:"arrowb",mult:2.4,fan:[-.6,-.45,-.3,-.15,0,.15,.3,.45,.6].map(t=>t+e*.075)}))},ar_b1:{anim:"2H_Ranged_Shoot",clip:[.25,.95],dur:.44,lock:.36,combo:.3,spawns:[{t:.18,proj:"shot"}]},ar_b2:{anim:"2H_Ranged_Shoot",clip:[.25,.95],dur:.44,lock:.36,combo:.3,spawns:[{t:.18,proj:"shot"}]},ar_q:{name:"\uAD00\uD1B5 \uC0AC\uACA9",desc:"\uC77C\uC9C1\uC120\uC758 \uC801\uC744 \uBAA8\uB450 \uAFF0\uB6AB\uB294 \uAC15\uD654 \uD654\uC0B4.",cd:6,anim:"2H_Ranged_Shoot",clip:[.15,1],dur:.5,lock:.44,spawns:[{t:.24,proj:"pierce"}]},ar_w:{name:"\uD654\uC0B4\uBE44",desc:"\uC9C0\uC815 \uC704\uCE58\uC5D0 2.4\uCD08\uAC04 \uD654\uC0B4\uC744 \uD37C\uBD80\uC74C.",cd:12,anim:"1H_Ranged_Aiming",dur:.55,lock:.5,range:13,spawns:[{t:.3,zone:{at:"target",shape:_n(4.2),warn:.45,dur:2.4,tick:.3,mult:.6,stag:3,fx:"arrows",team:"player"}}]},ar_e:{name:"\uD6C4\uBC29 \uB3C4\uC57D",desc:"\uC870\uC900 \uBC18\uB300 \uBC29\uD5A5\uC73C\uB85C \uAD74\uB7EC \uBE60\uC9C0\uBA70 \uC81C\uC790\uB9AC\uC5D0 \uB454\uD654 \uB36B \uC124\uCE58.",cd:10,anim:"Dodge_Forward",dur:.42,lock:.42,away:!0,move:[[0,.36,16]],iframes:[0,.4],spawns:[{t:0,zone:{shape:_n(3),warn:0,dur:3,tick:.5,mult:.25,stag:2,slow:.5,fx:"trap",team:"player"}}]},ar_r:{name:"\uC9D1\uC911 \uC800\uACA9",desc:"\uC7A0\uC2DC \uC870\uC900 \uD6C4 \uC804\uBC29 \uC77C\uC9C1\uC120\uC744 \uAFF0\uB6AB\uB294 \uCE58\uBA85\uC801\uC778 \uD55C \uBC1C.",cd:22,anim:"1H_Ranged_Aiming",clip:[0,1],dur:1.15,lock:1.1,super:!0,hits:[{t:.85,shape:go(20,2.4),mult:11,stag:50,kb:2.5,fx:"snipe"}]}},Hd={bolt:{speed:26,r:.45,life:.6,mult:.95,stag:3,kb:.3,fx:"bolt"},fireball:{speed:20,r:.6,life:.9,mult:1.5,stag:10,kb:1.5,explode:{r:3,mult:2.6,stag:12,kb:2},fx:"fireball"},arrow:{speed:24,r:.35,life:1.2,fx:"arrow"},shot:{speed:30,r:.4,life:.55,mult:.95,stag:3,kb:.3,fx:"arrow"},arrowb:{speed:32,r:.4,life:.55,mult:.78,stag:2,kb:.2,fx:"arrow"},pierce:{speed:34,r:.55,life:.62,mult:2.8,stag:12,kb:.8,pierce:!0,fx:"arrow"},dagger:{speed:26,r:.45,life:.42,mult:1.15,stag:4,kb:.4,fx:"dagger"},lightorb:{speed:13,r:.9,life:1.3,mult:2.6,stag:6,kb:.6,pierce:!0,fx:"lightorb"},bone:{speed:11,r:.6,life:3.5,fx:"soulfire"}},ch=4,lh=15,Um=3});function Kr(s){let e=Math.max(1,Math.min(ji,s|0))-1;return{hp:1+.5*e,atk:1+.15*e,xp:1+.3*e,ilvl:2*e,luck:.06*e}}function Om(s){return{hp:1+.75*(s-1),atk:1}}var $r,Ti,Yr,at,$s,Ys,zm,ji,$i=sa(()=>{$r=(s,e)=>({type:"cone",r:s,ang:e*Math.PI/180}),Ti=s=>({type:"circle",r:s}),Yr=(s,e)=>({type:"rect",len:s,w:e}),at={minion:{name:"\uB9DD\uC790 \uC878\uAC1C",model:"Skeleton_Minion",weapons:[["w_Skeleton_Blade","handslot.r"]],hp:320,atk:55,def:10,speed:3.3,r:.6,xp:12,drop:.08,range:2.1,attacks:["en_chop"],idle:"Idle_Combat",walk:"Walking_D_Skeletons",run:"Running_C"},warrior:{name:"\uB9DD\uC790 \uC804\uC0AC",model:"Skeleton_Warrior",weapons:[["w_Skeleton_Axe","handslot.r"],["w_Skeleton_Shield_Small_A","handslot.l"]],hp:700,atk:80,def:35,speed:2.9,r:.7,xp:24,drop:.14,range:2.6,attacks:["en_slice","en_bash"],shield:.6,idle:"Idle_Combat",walk:"Walking_D_Skeletons",run:"Running_C"},archer:{name:"\uB9DD\uC790 \uAD81\uC218",model:"Skeleton_Rogue",weapons:[["w_Skeleton_Crossbow","handslot.r"]],hp:360,atk:72,def:10,speed:3.4,r:.6,xp:18,drop:.12,range:15,keep:9,attacks:["en_shoot"],idle:"Idle_Combat",walk:"Walking_D_Skeletons",run:"Running_C"},mage:{name:"\uB9DD\uC790 \uC8FC\uC220\uC0AC",model:"Skeleton_Mage",weapons:[["w_Skeleton_Staff","handslot.r"]],hp:520,atk:70,def:15,speed:2.7,r:.6,xp:26,drop:.16,range:13,keep:8,attacks:["en_fire","en_fire","en_summon"],idle:"Idle_Combat",walk:"Walking_D_Skeletons",run:"Running_C"},priest:{name:"\uBF08\uC758 \uB300\uC0AC\uC81C \uBAA8\uB974\uAC04",title:"\uC608\uBC30\uB2F9\uC758 \uB9DD\uB839",model:"Skeleton_Mage",weapons:[["w_Skeleton_Staff","handslot.r"]],scale:2.2,boss:!0,loot:2,hp:13e3,atk:115,def:35,speed:2.8,r:1.5,xp:150,keep:7,patterns:"priest",idle:"Idle_Combat",walk:"Walking_D_Skeletons",run:"Running_C"},warden:{name:"\uBCF4\uBB3C\uACE0 \uC218\uBB38\uC7A5",title:"\uD669\uAE08\uC744 \uC9C0\uD0A4\uB294 \uADF8\uB9BC\uC790",model:"Skeleton_Rogue",weapons:[["w_Skeleton_Blade","handslot.r"],["w_Skeleton_Blade","handslot.l"]],scale:2.2,boss:!0,loot:2,hp:17500,atk:125,def:50,speed:4.4,r:1.5,xp:220,gap:"wd_dash",patterns:"warden",idle:"Idle_Combat",walk:"Walking_D_Skeletons",run:"Running_C"},king:{name:"\uD574\uACE8\uC655 \uC544\uB974\uCE74\uC2A4",title:"\uC7BF\uBE5B \uC655\uAD00\uC758 \uC8FC\uC778",model:"Skeleton_Warrior",weapons:[["w_Skeleton_Axe","handslot.r"]],scale:2.4,boss:!0,final:!0,judgement:!0,loot:3,hp:42e3,atk:150,def:60,speed:3.6,r:1.7,xp:400,range:4.5,gap:"kg_leap",patterns:"king",idle:"Idle_Combat",walk:"Walking_D_Skeletons",run:"Running_C"}},$s={hp:4.5,atk:1.4,scale:1.4,xp:4,drop:.9},Ys={spawn:{anim:"Skeletons_Awaken_Floor",dur:2.2,lock:2.2,iframes:[0,2.1]},hit:{anim:"Hit_A",dur:.4,lock:.4},stun:{anim:"Hit_B",dur:3,lock:3,loopAnim:!0},down:{anim:"Death_A",clip:[0,.75],hold:!0,dur:8,lock:8},getup:{anim:"Lie_StandUp",clip:[.6,2.3],dur:1.1,lock:1.1},en_chop:{anim:"1H_Melee_Attack_Chop",dur:1.15,lock:1.1,cd:1.6,hits:[{t:.62,shape:$r(2.5,90),mult:1,kb:1.2,tele:!0}]},en_slice:{anim:"1H_Melee_Attack_Slice_Horizontal",dur:1.1,lock:1.05,cd:1.8,hits:[{t:.6,shape:$r(3.1,150),mult:1.1,kb:1.5,tele:!0}]},en_bash:{anim:"Block_Attack",dur:1.25,lock:1.2,cd:4,super:!0,move:[[.62,.9,16]],hits:[{t:.62,until:.9,every:.05,once:!0,shape:Ti(1.6),off:.8,mult:1.3,kb:3,tele:"rect",teleShape:Yr(5.2,1.8)}]},en_shoot:{anim:"1H_Ranged_Shoot",dur:1.55,lock:1.5,cd:2.6,hits:[],spawns:[{t:1.05,proj:"arrow",mult:1}],tele:{shape:Yr(22,.7),until:1.05},aimLock:.8},en_fire:{anim:"Spellcast_Shoot",dur:1.5,lock:1.45,cd:3.2,spawns:[{t:.3,zone:{at:"target",shape:Ti(2.6),warn:1.1,dur:.01,mult:1.3,kb:1,fx:"soulburst",team:"enemy"}}]},en_summon:{anim:"Spellcast_Summon",clip:[.3,2.6],dur:1.8,lock:1.75,cd:9,spawns:[{t:1.2,summon:{kind:"minion",n:2,r:3}}]},kg_slash1:{anim:"2H_Melee_Attack_Slice",dur:1.25,lock:1.2,super:!0,move:[[.55,.75,6]],hits:[{t:.78,shape:$r(6.2,150),mult:1.2,kb:3,tele:!0}]},kg_slash2:{anim:"1H_Melee_Attack_Slice_Diagonal",dur:1,lock:.95,super:!0,move:[[.35,.55,6]],hits:[{t:.58,shape:$r(6.2,150),mult:1.2,kb:3,tele:!0}]},kg_slash3:{anim:"2H_Melee_Attack_Chop",dur:1.5,lock:1.45,super:!0,move:[[.6,.85,8]],hits:[{t:.95,shape:Yr(10,3.6),mult:1.8,kb:5,tele:!0,fx:"kingSmash"}]},kg_leap:{anim:"1H_Melee_Attack_Jump_Chop",dur:1.9,lock:1.85,super:!0,leap:[.35,1.15],leapToTarget:!0,hits:[{t:1.18,shape:Ti(6.5),mult:2.1,kb:6,tele:!0,teleAt:"target",fx:"kingQuake"}]},kg_spin:{anim:"2H_Melee_Attack_Spin",clip:[.1,2.3],dur:2.1,lock:2.05,super:!0,hits:[{t:1.25,shape:Ti(7.6),mult:1.9,kb:7,tele:!0,fx:"kingSpin"}]},kg_summon:{anim:"Spellcast_Summon",clip:[.2,3.2],dur:2.4,lock:2.35,super:!0,spawns:[{t:1.4,summon:{kind:"minion",n:5,r:7}}]},kg_charge:{anim:"2H_Melee_Attack_Stab",clip:[.1,1.6],dur:2,lock:1.95,super:!0,counterWindow:[.15,1.05],move:[[1.05,1.5,32]],hits:[{t:1.05,until:1.5,every:.04,once:!0,shape:Ti(2.4),off:1.4,mult:2.4,kb:8,tele:"rect",teleShape:Yr(17,3.4)}]},kg_ring:{anim:"Spellcast_Long",clip:[.1,2.5],dur:3,lock:2.95,super:!0,noTrack:!0,hits:[{t:2.7,shape:{type:"donut",r:5.5,r2:30},mult:3.2,kb:4,tele:!0,fx:"kingRing"}]},kg_judgement:{anim:"Spellcast_Raise",clip:[.2,1.9],hold:!0,dur:11,lock:11,super:!0,judgement:{gauge:1,time:10,mult:7}},pr_volley:{anim:"Spellcast_Shoot",dur:1.6,lock:1.55,super:!0,spawns:[0,1,2].map(()=>({t:.3,zone:{at:"target",scatter:3.5,shape:Ti(2.8),warn:1.05,dur:.01,mult:1.3,kb:1,fx:"soulburst",team:"enemy"}}))},pr_bolt:{anim:"Spellcast_Shoot",dur:1.2,lock:1.15,super:!0,spawns:[{t:.6,proj:"bone",fan:[-.35,0,.35],mult:1.2}]},pr_nova:{anim:"Spellcast_Raise",clip:[.2,1.9],dur:1.8,lock:1.75,super:!0,hits:[{t:1.35,shape:Ti(7),mult:2,kb:5,tele:!0,fx:"kingQuake"}]},pr_summon:{anim:"Spellcast_Summon",clip:[.2,3.2],dur:2.4,lock:2.35,super:!0,spawns:[{t:1.4,summon:{kind:"minion",n:3,r:5}},{t:1.4,summon:{kind:"archer",n:1,r:6}}]},pr_rain:{anim:"Spellcast_Long",clip:[.2,2.2],dur:2.2,lock:2.15,super:!0,noTrack:!0,spawns:[{t:.4,zone:{at:"all",shape:Ti(3.2),warn:1.3,dur:.01,mult:1.7,kb:2,fx:"soulburst",team:"enemy"}}]},wd_combo1:{anim:"Dualwield_Melee_Attack_Slice",dur:1,lock:.95,super:!0,move:[[.35,.55,7]],hits:[{t:.55,shape:$r(5.5,140),mult:1.1,kb:2.5,tele:!0}]},wd_combo2:{anim:"Dualwield_Melee_Attack_Chop",dur:.9,lock:.85,super:!0,move:[[.3,.5,7]],hits:[{t:.5,shape:$r(5.5,100),mult:1.25,kb:3,tele:!0}]},wd_dash:{anim:"Dualwield_Melee_Attack_Stab",clip:[.1,1.2],dur:1.5,lock:1.45,super:!0,counterWindow:[.1,.75],move:[[.75,1.05,34]],hits:[{t:.75,until:1.05,every:.04,once:!0,shape:Ti(2.2),off:1.2,mult:2.2,kb:7,tele:"rect",teleShape:Yr(12,3)}]},wd_fan:{anim:"Throw",clip:[.3,1.1],dur:1.3,lock:1.25,super:!0,spawns:[{t:.8,proj:"arrow",fan:[-.5,-.25,0,.25,.5],mult:1.1}],tele:{shape:Yr(18,.6),until:.8}},wd_spin:{anim:"2H_Melee_Attack_Spin",clip:[.1,2.3],dur:1.7,lock:1.65,super:!0,hits:[{t:1,shape:Ti(6),mult:1.8,kb:6,tele:!0,fx:"kingSpin"}]},wd_vanish:{anim:"Throw",clip:[.3,1.1],dur:1,lock:.95,super:!0,iframes:[.3,.9],spawns:[{t:.55,behind:3}]}},zm={king:{1:[["kg_slash1","kg_slash2","kg_slash3"],["kg_leap"],["kg_spin"],["kg_charge"],["kg_summon"],["kg_leap","kg_spin"]],2:[["kg_slash1","kg_slash2","kg_slash3"],["kg_leap","kg_leap"],["kg_spin"],["kg_charge"],["kg_ring"],["kg_summon","kg_ring"],["kg_leap","kg_spin"]]},priest:{1:[["pr_volley"],["pr_bolt","pr_bolt"],["pr_nova"],["pr_summon"],["pr_volley","pr_bolt"]],2:[["pr_rain"],["pr_volley","pr_volley"],["pr_nova","pr_bolt"],["pr_summon","pr_rain"],["pr_rain","pr_nova"]]},warden:{1:[["wd_combo1","wd_combo2"],["wd_dash"],["wd_fan"],["wd_spin"],["wd_vanish","wd_combo1"]],2:[["wd_combo1","wd_combo2","wd_spin"],["wd_dash","wd_dash"],["wd_fan","wd_fan"],["wd_vanish","wd_combo2","wd_combo1"],["wd_spin","wd_dash"]]}},ji=10});var Hm={};d0(Hm,{Actor:()=>bo,enemyActor:()=>hh,playerActor:()=>xo});function xM(s){s.traverse(e=>{!e.isMesh||!e.visible||(e.material.onBeforeCompile=t=>{t.fragmentShader=t.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
        { float gm = smoothstep(0.004, 0.05, diffuseColor.g - max(diffuseColor.r, diffuseColor.b));
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.62, 0.42, 0.24) * (diffuseColor.g * 1.5), gm); }`)},e.material.customProgramCacheKey=()=>"recolor-leather")})}function vM(){let s=new St,e=new tn({color:"#8a5a2c",roughness:.7}),t=.46,n=Math.PI*.8,i=new Ge(new La(t,.03,6,20,n),e);i.rotation.z=(Math.PI-n)/2;let r=t*Math.sin((Math.PI-n)/2),a=2*t*Math.cos((Math.PI-n)/2),o=new Ge(new cs(.006,.006,a,4),new Dt({color:"#e8dcc0"}));o.rotation.z=Math.PI/2,o.position.y=r;let c=new Ge(new cs(.04,.04,.16,6),new tn({color:"#3a2414",roughness:.9}));c.rotation.z=Math.PI/2,c.position.y=t,s.add(i,o,c),s.position.y=-t;let l=new St;return l.add(s),l.rotation.set(0,0,Math.PI/2),l.traverse(h=>{h.isMesh&&(h.castShadow=!0)}),l}function xo(s,e,t){let n=nt[e],i=At(e,t),r=i.weapon==="bow",a=new bo(s,{model:n.model,show:r?[]:n.show,hideNodes:n.hide||[]});if(a.cls=e,a.spec=i.id,r&&a.handR){let o=vM();a.handR.add(o),o.traverse(c=>{c.isMesh&&c.material.emissive&&a.mats.push(c.material)})}return n.recolor&&xM(a.model),a.cfg={idle:n.idle,run:n.run,runSpeed:n.base.speed,death:"Death_A"},a}function hh(s,e,t){let n=at[e],i=(n.scale||1)*(t?$s.scale:1),r=new bo(s,{model:n.model,weapons:n.weapons,scale:i,boss:!!n.boss,elite:t,hideNodes:n.boss?["Skeleton_Warrior_Helmet"]:[]});return r.cfg={idle:n.idle,run:n.walk,runSpeed:n.speed,death:"Death_C_Skeletons"},r}var gM,Bm,bM,bo,uh=sa(()=>{Nt();ai();$i();gM={Knight:["1H_Sword_Offhand","Badge_Shield","Rectangle_Shield","Round_Shield","Spike_Shield","1H_Sword","2H_Sword"],Barbarian:["1H_Axe_Offhand","Barbarian_Round_Shield","1H_Axe","2H_Axe","Mug","Barbarian_Hat"],Mage:["Spellbook","Spellbook_open","1H_Wand","2H_Staff","Mage_Hat"],Rogue_Hooded:["Knife_Offhand","1H_Crossbow","2H_Crossbow","Knife","Throwable"]},Bm=s=>Pt[s]||Ys[s],bM=.12,bo=class{constructor(e,{model:t,show:n=[],weapons:i=[],scale:r=1,boss:a=!1,elite:o=!1,hideNodes:c=[]}){this.assets=e,this.root=new St,this.model=e.character(t),this.model.scale.setScalar(r),this.root.add(this.model),this.scale=r;let l=[...(gM[t]||[]).filter(h=>!n.includes(h)),...c];this.mats=[],this.model.traverse(h=>{l.includes(h.name)&&(h.visible=!1),h.isMesh&&this.mats.push(h.material),h.isBone&&h.name==="head"&&(this.head=h),h.isBone&&(h.name==="handslotr"||h.name==="handslot.r")&&(this.handR=h),h.isBone&&(h.name==="handslotl"||h.name==="handslot.l")&&(this.handL=h)});for(let[h,u]of i){let d=e.prop(h);d.traverse(f=>{f.isMesh&&(f.castShadow=!0,this.mats.push(f.material=f.material.clone()))}),(u==="handslot.l"?this.handL:this.handR)?.add(d)}this.mixer=new Wa(this.model),this.actions=new Map,this.cur=null,this.curName="",this.flashT=0,this.sink=0,this.headPos=new I,a&&this.makeCrown(),o&&this.tint("#ff5a3c",.35)}clip(e){let t=this.actions.get(e);if(!t){let n=this.assets.clips[e];if(!n)return null;t=this.mixer.clipAction(n),this.actions.set(e,t)}return t}play(e,{loop:t=!0,time:n=null,speed:i=1}={}){let r=this.clip(e);r&&(this.curName!==e&&(r.reset(),r.setLoop(t?Il:Cl,1/0),r.clampWhenFinished=!t,r.enabled=!0,r.setEffectiveWeight(1),this.cur&&r.crossFadeFrom(this.cur,bM,!1),r.play(),this.cur=r,this.curName=e),n!==null?(r.time=Math.min(n,r.getClip().duration-.001),r.timeScale=0):r.timeScale=i)}animate(e,t,n){if(e.dead)this.play(n.death||"Death_A",{loop:!1}),e.deadT>2.4&&(this.sink=Math.min(1,(e.deadT-2.4)/1.6));else if(e.down)this.play("Lie_Idle");else if(e.act&&Bm(e.act)?.anim){let i=Bm(e.act),r=this.assets.clips[i.anim],[a,o]=i.clip||[0,r.duration],c=e.actT;i.loopAnim?c=a+c*1.4%(o-a):i.hold?c=a+Math.min(1,c/Math.min(i.dur,(o-a)*1.2))*(o-a):c=a+Math.min(1,c/i.dur)*(o-a),this.play(i.anim,{loop:!1,time:c})}else e.intro?this.play("Taunt",{loop:!0,speed:.8}):e.moving?this.play(n.run,{speed:n.runSpeed?Math.max(.6,e.speed/n.runSpeed):1}):this.play(n.idle);if(this.mixer.update(this.hitstop>0?0:t),this.hitstop>0&&(this.hitstop-=t),this.flashT>0){this.flashT-=t;let i=Math.max(0,this.flashT/.12);for(let r of this.mats)r.emissive?.setRGB(i*1.2,i*1.1,i);this.flashT<=0&&this.restoreTint()}this.model.position.y=-this.sink*2.2*this.scale,this.head&&this.head.getWorldPosition(this.headPos)}flash(){this.flashT=.12}reset(){this.mixer.stopAllAction(),this.cur=null,this.curName="",this.sink=0,this.hitstop=0,this.flashT=0,this.counterGlow=0,this.model.position.y=0,this.restoreTint()}addXray(e){for(let i of this.mats)i.stencilWrite=!0,i.stencilRef=1,i.stencilFunc=ba,i.stencilZPass=Ru;let t=new Dt({color:e,transparent:!0,opacity:.5,depthWrite:!1,depthFunc:Nr,stencilWrite:!0,stencilRef:1,stencilFunc:Cu,stencilFail:Jn,stencilZFail:Jn,stencilZPass:Jn}),n=[];this.model.traverse(i=>{i.isSkinnedMesh&&i.visible&&n.push(i)});for(let i of n){let r=new Cs(i.geometry,t);r.bind(i.skeleton,i.bindMatrix),r.frustumCulled=!1,r.renderOrder=30,i.parent.add(r)}}tint(e,t){this.tintColor=new ae(e).multiplyScalar(t),this.restoreTint()}restoreTint(){for(let e of this.mats)e.emissive&&e.name!=="Glow"&&(this.tintColor?e.emissive.copy(this.tintColor):e.emissive.setRGB(0,0,0))}makeCrown(){let e=new St,t=new tn({color:"#d8a640",metalness:.9,roughness:.25,emissive:"#ff7a1a",emissiveIntensity:1.2}),n=new Ge(new cs(.34,.3,.14,16,1,!0),t);e.add(n);for(let i=0;i<7;i++){let r=i/7*Math.PI*2,a=new Ge(new ka(.06,.28,6),t);a.position.set(Math.cos(r)*.32,.18,Math.sin(r)*.32),e.add(a)}e.position.set(0,.62,0),this.head?.add(e),this.crown=e;for(let i of this.mats)i.name==="Glow"&&(i.emissive.set("#ff5020"),i.emissiveIntensity=7)}}});Nt();Nt();Nt();var yi={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};Nt();Nt();var xn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Vy=new Hi(-1,1,1,-1,0,1),td=class extends mt{constructor(){super(),this.setAttribute("position",new Ze([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ze([0,2,0,0,2,0],2))}},Gy=new td,Mi=class{constructor(e){this._mesh=new Ge(Gy,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Vy)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Xs=class extends xn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Qe?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=bn.clone(e.uniforms),this.material=new Qe({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Mi(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var no=class extends xn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},Ol=class extends xn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Bl=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ve);this._width=n.width,this._height=n.height,t=new zt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:nn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Xs(yi),this.copyPass.material.blending=Gt,this.clock=new Ga}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}no!==void 0&&(a instanceof no?n=!0:a instanceof Ol&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ve);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};Nt();var Hl=class extends xn{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ae}render(e,t,n){let i=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}};Nt();Nt();var io={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ve},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Ce},cameraProjectionMatrixInverse:{value:new Ce},cameraWorldMatrix:{value:new Ce},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new I(-1,-1,-1)},sceneBoxMax:{value:new I(1,1,1)}},vertexShader:`

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
		}`},so={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},Vl={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function xm(s=5){let e=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),t=Wy(e),n=t.length,i=new Uint8Array(n*4);for(let a=0;a<n;++a){let o=t[a],c=2*Math.PI*o/n,l=new I(Math.cos(c),Math.sin(c),0).normalize();i[a*4]=(l.x*.5+.5)*255,i[a*4+1]=(l.y*.5+.5)*255,i[a*4+2]=127,i[a*4+3]=255}let r=new Ui(i,e,e);return r.wrapS=Tn,r.wrapT=Tn,r.needsUpdate=!0,r}function Wy(s){let e=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),t=e*e,n=Array(t).fill(0),i=Math.floor(e/2),r=e-1;for(let a=1;a<=t;){if(i===-1&&r===e?(r=e-2,i=0):(r===e&&(r=0),i<0&&(i=e-1)),n[i*e+r]!==0){r-=2,i++;continue}else n[i*e+r]=a++;r++,i--}return n}Nt();var ro={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:nd(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ve},cameraProjectionMatrixInverse:{value:new Ce},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function nd(s,e,t){let n=qy(s,e,t),i="vec3[SAMPLES](";for(let r=0;r<s;r++){let a=n[r];i+=`vec3(${a.x}, ${a.y}, ${a.z})${r<s-1?",":")"}`}return i}function qy(s,e,t){let n=[];for(let i=0;i<s;i++){let r=2*Math.PI*e*i/s,a=Math.pow(i/(s-1),t);n.push(new I(Math.cos(r),Math.sin(r),a))}return n}var Gl=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,i,r,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,c=Math.floor(e+o),l=Math.floor(t+o),h=(3-Math.sqrt(3))/6,u=(c+l)*h,d=c-u,f=l-u,m=e-d,b=t-f,g,p;m>b?(g=1,p=0):(g=0,p=1);let v=m-g+h,_=b-p+h,x=m-1+2*h,w=b-1+2*h,E=c&255,R=l&255,P=this.perm[E+this.perm[R]]%12,S=this.perm[E+g+this.perm[R+p]]%12,M=this.perm[E+1+this.perm[R+1]]%12,C=.5-m*m-b*b;C<0?n=0:(C*=C,n=C*C*this._dot(this.grad3[P],m,b));let D=.5-v*v-_*_;D<0?i=0:(D*=D,i=D*D*this._dot(this.grad3[S],v,_));let z=.5-x*x-w*w;return z<0?r=0:(z*=z,r=z*z*this._dot(this.grad3[M],x,w)),70*(n+i+r)}noise3d(e,t,n){let i,r,a,o,l=(e+t+n)*.3333333333333333,h=Math.floor(e+l),u=Math.floor(t+l),d=Math.floor(n+l),f=1/6,m=(h+u+d)*f,b=h-m,g=u-m,p=d-m,v=e-b,_=t-g,x=n-p,w,E,R,P,S,M;v>=_?_>=x?(w=1,E=0,R=0,P=1,S=1,M=0):v>=x?(w=1,E=0,R=0,P=1,S=0,M=1):(w=0,E=0,R=1,P=1,S=0,M=1):_<x?(w=0,E=0,R=1,P=0,S=1,M=1):v<x?(w=0,E=1,R=0,P=0,S=1,M=1):(w=0,E=1,R=0,P=1,S=1,M=0);let C=v-w+f,D=_-E+f,z=x-R+f,G=v-P+2*f,X=_-S+2*f,W=x-M+2*f,ee=v-1+3*f,H=_-1+3*f,Z=x-1+3*f,ce=h&255,_e=u&255,ze=d&255,it=this.perm[ce+this.perm[_e+this.perm[ze]]]%12,ct=this.perm[ce+w+this.perm[_e+E+this.perm[ze+R]]]%12,Je=this.perm[ce+P+this.perm[_e+S+this.perm[ze+M]]]%12,j=this.perm[ce+1+this.perm[_e+1+this.perm[ze+1]]]%12,Y=.6-v*v-_*_-x*x;Y<0?i=0:(Y*=Y,i=Y*Y*this._dot3(this.grad3[it],v,_,x));let ue=.6-C*C-D*D-z*z;ue<0?r=0:(ue*=ue,r=ue*ue*this._dot3(this.grad3[ct],C,D,z));let Ee=.6-G*G-X*X-W*W;Ee<0?a=0:(Ee*=Ee,a=Ee*Ee*this._dot3(this.grad3[Je],G,X,W));let fe=.6-ee*ee-H*H-Z*Z;return fe<0?o=0:(fe*=fe,o=fe*fe*this._dot3(this.grad3[j],ee,H,Z)),32*(i+r+a+o)}noise4d(e,t,n,i){let r=this.grad4,a=this.simplex,o=this.perm,c=(Math.sqrt(5)-1)/4,l=(5-Math.sqrt(5))/20,h,u,d,f,m,b=(e+t+n+i)*c,g=Math.floor(e+b),p=Math.floor(t+b),v=Math.floor(n+b),_=Math.floor(i+b),x=(g+p+v+_)*l,w=g-x,E=p-x,R=v-x,P=_-x,S=e-w,M=t-E,C=n-R,D=i-P,z=S>M?32:0,G=S>C?16:0,X=M>C?8:0,W=S>D?4:0,ee=M>D?2:0,H=C>D?1:0,Z=z+G+X+W+ee+H,ce=a[Z][0]>=3?1:0,_e=a[Z][1]>=3?1:0,ze=a[Z][2]>=3?1:0,it=a[Z][3]>=3?1:0,ct=a[Z][0]>=2?1:0,Je=a[Z][1]>=2?1:0,j=a[Z][2]>=2?1:0,Y=a[Z][3]>=2?1:0,ue=a[Z][0]>=1?1:0,Ee=a[Z][1]>=1?1:0,fe=a[Z][2]>=1?1:0,je=a[Z][3]>=1?1:0,Ot=S-ce+l,k=M-_e+l,ht=C-ze+l,Fe=D-it+l,Ie=S-ct+2*l,ge=M-Je+2*l,ut=C-j+2*l,be=D-Y+2*l,Oe=S-ue+3*l,kt=M-Ee+3*l,yt=C-fe+3*l,A=D-je+3*l,y=S-1+4*l,F=M-1+4*l,q=C-1+4*l,K=D-1+4*l,V=g&255,ye=p&255,ie=v&255,pe=_&255,Te=o[V+o[ye+o[ie+o[pe]]]]%32,te=o[V+ce+o[ye+_e+o[ie+ze+o[pe+it]]]]%32,le=o[V+ct+o[ye+Je+o[ie+j+o[pe+Y]]]]%32,ke=o[V+ue+o[ye+Ee+o[ie+fe+o[pe+je]]]]%32,we=o[V+1+o[ye+1+o[ie+1+o[pe+1]]]]%32,re=.6-S*S-M*M-C*C-D*D;re<0?h=0:(re*=re,h=re*re*this._dot4(r[Te],S,M,C,D));let Ne=.6-Ot*Ot-k*k-ht*ht-Fe*Fe;Ne<0?u=0:(Ne*=Ne,u=Ne*Ne*this._dot4(r[te],Ot,k,ht,Fe));let L=.6-Ie*Ie-ge*ge-ut*ut-be*be;L<0?d=0:(L*=L,d=L*L*this._dot4(r[le],Ie,ge,ut,be));let J=.6-Oe*Oe-kt*kt-yt*yt-A*A;J<0?f=0:(J*=J,f=J*J*this._dot4(r[ke],Oe,kt,yt,A));let se=.6-y*y-F*F-q*q-K*K;return se<0?m=0:(se*=se,m=se*se*this._dot4(r[we],y,F,q,K)),27*(h+u+d+f+m)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,i){return e[0]*t+e[1]*n+e[2]*i}_dot4(e,t,n,i,r){return e[0]*t+e[1]*n+e[2]*i+e[3]*r}};var ao=class s extends xn{constructor(e,t,n=512,i=512,r,a,o){super(),this.width=n,this.height=i,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=xm(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new zt(this.width,this.height,{type:nn}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Qe({defines:Object.assign({},io.defines),uniforms:bn.clone(io.uniforms),vertexShader:io.vertexShader,fragmentShader:io.fragmentShader,blending:Gt,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Na,this.normalMaterial.blending=Gt,this.pdMaterial=new Qe({defines:Object.assign({},ro.defines),uniforms:bn.clone(ro.uniforms),vertexShader:ro.vertexShader,fragmentShader:ro.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Qe({defines:Object.assign({},so.defines),uniforms:bn.clone(so.uniforms),vertexShader:so.vertexShader,fragmentShader:so.fragmentShader,blending:Gt}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Qe({uniforms:bn.clone(yi.uniforms),vertexShader:yi.vertexShader,fragmentShader:yi.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:ja,blendDst:Fs,blendEquation:Dn,blendSrcAlpha:Xa,blendDstAlpha:Fs,blendEquationAlpha:Dn}),this.blendMaterial=new Qe({uniforms:bn.clone(Vl.uniforms),vertexShader:Vl.vertexShader,fragmentShader:Vl.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:kc,blendSrc:ja,blendDst:Fs,blendEquation:Dn,blendSrcAlpha:Xa,blendDstAlpha:Fs,blendEquationAlpha:Dn}),this._fsQuad=new Mi(null),this._originalClearColor=new ae,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new Ps,this.depthTexture.format=us,this.depthTexture.type=hs,this.normalRenderTarget=new zt(this.width,this.height,{minFilter:Vt,magFilter:Vt,type:nn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,i=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=i,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=i,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=nd(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case s.OUTPUT.Off:break;case s.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Gt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Gt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Gt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Gt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Gt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,i,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,i,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i=t.clearColor||i,r=t.clearAlpha||r,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new Gl,n=e*e*4,i=new Uint8Array(n);for(let a=0;a<e;a++)for(let o=0;o<e;o++){let c=a,l=o;i[(a*e+o)*4]=(t.noise(c,l)*.5+.5)*255,i[(a*e+o)*4+1]=(t.noise(c+e,l)*.5+.5)*255,i[(a*e+o)*4+2]=(t.noise(c,l+e)*.5+.5)*255,i[(a*e+o)*4+3]=(t.noise(c+e,l+e)*.5+.5)*255}let r=new Ui(i,e,e,gn,Fn);return r.wrapS=Tn,r.wrapT=Tn,r.needsUpdate=!0,r}};ao.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};Nt();Nt();var vm={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ae(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Wr=class s extends xn{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new ve(e.x,e.y):new ve(256,256),this.clearColor=new ae(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new zt(r,a,{type:nn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new zt(r,a,{type:nn});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let d=new zt(r,a,{type:nn});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}let o=vm;this.highPassUniforms=bn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Qe({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ve(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=bn.clone(yi.uniforms),this.blendMaterial=new Qe({uniforms:this.copyUniforms,vertexShader:yi.vertexShader,fragmentShader:yi.fragmentShader,blending:cn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ae,this._oldClearAlpha=1,this._basic=new Dt,this._fsQuad=new Mi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new ve(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=s.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=s.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Qe({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ve(.5,.5)},direction:{value:new ve(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}_getCompositeMaterial(e){return new Qe({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Wr.BlurDirectionX=new ve(1,0);Wr.BlurDirectionY=new ve(0,1);Nt();var oo={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Wl=class extends xn{constructor(){super(),this.uniforms=bn.clone(oo.uniforms),this.material=new Da({name:oo.name,uniforms:this.uniforms,vertexShader:oo.vertexShader,fragmentShader:oo.fragmentShader}),this._fsQuad=new Mi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Xe.getTransfer(this._outputColorSpace)===st&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Oc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Bc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Hc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ur?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Gc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Wc?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Vc&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Xy={uniforms:{tDiffuse:{value:null},uTime:{value:0},uVignette:{value:.42},uSaturation:{value:1.08},uLift:{value:new I(.012,.01,.022)},uGain:{value:new I(1.04,1,.97)},uHurt:{value:0},uDesat:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
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
    }`},jy={uniforms:{tDiffuse:{value:null}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform sampler2D tDiffuse; varying vec2 vUv;
    void main(){
      vec4 c = texture2D(tDiffuse, vUv);
      if (any(isnan(c)) || any(isinf(c))) c = vec4(0.0, 0.0, 0.0, 1.0);
      gl_FragColor = vec4(min(c.rgb, vec3(24.0)), c.a);
    }`},ql=(s,e,t)=>s+(e-s)*t,_m=(s,e,t)=>{let n=Math.max(0,Math.min(1,(t-s)/(e-s)));return n*n*(3-2*n)},ym=(s,e,t)=>{let n=e-s;for(;n>Math.PI;)n-=Math.PI*2;for(;n<-Math.PI;)n+=Math.PI*2;return s+n*t},Xl=class{constructor(e){this.canvas=e;let t=this.renderer=new Fl({canvas:e,antialias:!1,stencil:!0,powerPreference:"high-performance"});t.setPixelRatio(Math.min(devicePixelRatio,1.5)),t.outputColorSpace=It,t.toneMapping=Ur,t.toneMappingExposure=1.05,t.shadowMap.enabled=!0,t.shadowMap.type=Pc,this.scene=new wa,this.scene.background=new ae("#06050a"),this.scene.fog=new Ta("#08070c",.026),this.camera=new Ht(34,1,.5,200),this.camOffset=new I(0,19,13.5),this.camTarget=new I,this.zoom=0,this.zoomTo=0,this.faceYaw=null,this.camYaw=null,this.shake=0,this.quality=2,this.hemi=new Oa("#5a6690","#140f0c",.32),this.scene.add(this.hemi);let n=this.sun=new Us("#9fb0ee",.75);n.castShadow=!0,n.shadow.mapSize.set(2048,2048),n.shadow.bias=-4e-4,n.shadow.normalBias=.03;let i=n.shadow.camera;i.left=-26,i.right=26,i.top=26,i.bottom=-26,i.near=1,i.far=80,this.scene.add(n,n.target),this.heroLight=new Un("#ffd9a8",0,9,1.6),this.scene.add(this.heroLight),this.cap=1.5,this.dynScale=1,this.buildComposer(),this.resize(),addEventListener("resize",()=>this.resize())}buildComposer(){let e=this.renderer,t=new zt(2,2,{type:nn,samples:4,stencilBuffer:!0}),n=this.composer=new Bl(e,t);n.addPass(new Hl(this.scene,this.camera)),this.gtao=new ao(this.scene,this.camera,2,2),this.gtao.updateGtaoMaterial({radius:.9,distanceExponent:1.4,thickness:1.2,scale:1.1,samples:8}),this.gtao.blendIntensity=.85,n.addPass(this.gtao),n.addPass(new Xs(jy)),this.bloom=new Wr(new ve(2,2),.75,.55,.82),n.addPass(this.bloom),this.grade=new Xs(Xy),n.addPass(this.grade),n.addPass(new Wl)}setQuality(e){e=Math.max(0,Math.min(3,e|0)),this.quality=e,this.gtao.enabled=e>=3,this.bloom.enabled=e>=1;let t=e>=1;this.renderer.shadowMap.enabled!==t&&(this.renderer.shadowMap.enabled=t);let n=e>=2?2048:1024;this.sun.shadow.mapSize.x!==n&&(this.sun.shadow.mapSize.set(n,n),this.sun.shadow.map?.dispose(),this.sun.shadow.map=null);let i=e>=3?4:e>=1?2:0;for(let r of[this.composer.renderTarget1,this.composer.renderTarget2])r.samples!==i&&(r.samples=i,r.dispose());this.cap=e>=2?1.5:e===1?1:.85,this.dynScale=1,this.resize()}adapt(e){let t=this.dynScale;e>1/50&&this.dynScale>.6?this.dynScale=Math.max(.6,this.dynScale-.1):e<1/58&&this.dynScale<1&&(this.dynScale=Math.min(1,this.dynScale+.05)),this.dynScale!==t&&this.resize()}resize(){let e=innerWidth,t=innerHeight;this.renderer.setPixelRatio(Math.min(devicePixelRatio,this.cap??1.5)*(this.dynScale??1)),this.renderer.setSize(e,t,!1),this.canvas.style.width=e+"px",this.canvas.style.height=t+"px",this.camera.aspect=e/t,this.camera.fov=e<t?52:34,this.camera.updateProjectionMatrix();let n=this.renderer.getPixelRatio();this.composer.setPixelRatio(n),this.composer.setSize(e,t)}follow(e,t,n,i){let r=1-Math.exp(-n*6),a=e+(i?.x||0),o=t+(i?.z||0);this.camTarget.x+=(a-this.camTarget.x)*r,this.camTarget.z+=(o-this.camTarget.z)*r}snap(e,t){this.camTarget.set(e,0,t)}addShake(e){this.shake=Math.min(1.2,this.shake+e)}render(e,t){let n=this.camera;this.shake*=Math.exp(-e*9);let i=this.shake;this.zoom+=(this.zoomTo-this.zoom)*(1-Math.exp(-e*8));let r=this.camOffset,a=_m(0,1,this.zoom),o=Math.atan2(r.z,r.x),c=this.faceYaw===null?o:ym(o,this.faceYaw,_m(.55,1,this.zoom));this.camYaw=this.camYaw===null?c:ym(this.camYaw,c,1-Math.exp(-e*3));let l=ql(Math.hypot(r.x,r.z),4.8,a),h=ql(r.y,2,a);n.position.set(this.camTarget.x+Math.cos(this.camYaw)*l,h,this.camTarget.z+Math.sin(this.camYaw)*l),n.position.x+=(Math.random()-.5)*i,n.position.y+=(Math.random()-.5)*i*.6,n.position.z+=(Math.random()-.5)*i,n.lookAt(this.camTarget.x,ql(.8,1.2,a),this.camTarget.z);let u=this.heroLight.userData.follow;u&&u.parent?(this.heroLight.position.set(u.position.x+Math.cos(this.camYaw)*1.8*a,ql(3.2,2.3,a),u.position.z+Math.sin(this.camYaw)*1.8*a),this.heroLight.intensity=9):this.heroLight.intensity=0;let d=this.sun;d.position.set(this.camTarget.x-12,30,this.camTarget.z+8),d.target.position.set(this.camTarget.x,0,this.camTarget.z),this.grade.uniforms.uTime.value=t,this.composer.render(e)}pick(e,t){let n=new ve(e/innerWidth*2-1,-(t/innerHeight)*2+1),i=new qa;i.setFromCamera(n,this.camera);let r=-i.ray.origin.y/Math.min(i.ray.direction.y,-.05);return{x:i.ray.origin.x+i.ray.direction.x*r,z:i.ray.origin.z+i.ray.direction.z*r}}toScreen(e){let t=e.clone().project(this.camera);return{x:(t.x*.5+.5)*innerWidth,y:(-t.y*.5+.5)*innerHeight,visible:t.z<1}}};Nt();Nt();Nt();function Sm(s,e=!1){let t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,c=new mt,l=0;for(let h=0;h<s.length;++h){let u=s[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(t){let h=0,u=[];for(let d=0;d<s.length;++d){let f=s[d].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+h);h+=s[d].attributes.position.count}c.setIndex(u)}for(let h in r){let u=Mm(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let b=0;b<a[h].length;++b)f.push(a[h][b][d]);let m=Mm(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}return c}function Mm(s){let e,t,n,i=-1,r=0;for(let l=0;l<s.length;++l){let h=s[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new wt(a,t,n),c=0;for(let l=0;l<s.length;++l){let h=s[l];if(h.isInterleavedBufferAttribute){let u=c/t;for(let d=0,f=h.count;d<f;d++)for(let m=0;m<t;m++){let b=h.getComponent(d,m);o.setComponent(d+u,m,b)}}else a.set(h.array,c);c+=h.count*t}return i!==void 0&&(o.gpuType=i),o}function id(s,e){if(e===Au)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Or||e===Qa){let t=s.getIndex();if(t===null){let a=[],o=s.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===Or)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var jl=class extends xi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new hd(t)}),this.register(function(t){return new ud(t)}),this.register(function(t){return new _d(t)}),this.register(function(t){return new yd(t)}),this.register(function(t){return new Md(t)}),this.register(function(t){return new fd(t)}),this.register(function(t){return new pd(t)}),this.register(function(t){return new md(t)}),this.register(function(t){return new gd(t)}),this.register(function(t){return new ld(t)}),this.register(function(t){return new bd(t)}),this.register(function(t){return new dd(t)}),this.register(function(t){return new vd(t)}),this.register(function(t){return new xd(t)}),this.register(function(t){return new od(t)}),this.register(function(t){return new Sd(t)}),this.register(function(t){return new Td(t)})}load(e,t,n,i){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=Vi.extractUrlBase(e);a=Vi.resolveURL(l,this.path)}else a=Vi.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Dr(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Rm){try{a[Ye.KHR_BINARY_GLTF]=new wd(e)}catch(u){i&&i(u);return}r=JSON.parse(a[Ye.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new kd(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Ye.KHR_MATERIALS_UNLIT:a[u]=new cd;break;case Ye.KHR_DRACO_MESH_COMPRESSION:a[u]=new Ed(r,this.dracoLoader);break;case Ye.KHR_TEXTURE_TRANSFORM:a[u]=new Ad;break;case Ye.KHR_MESH_QUANTIZATION:a[u]=new Rd;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function $y(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var Ye={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},od=class{constructor(e){this.parser=e,this.name=Ye.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new ae(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],en);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Us(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Un(h),l.distance=u;break;case"spot":l=new Ha(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Si(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},cd=class{constructor(){this.name=Ye.KHR_MATERIALS_UNLIT}getMaterialType(){return Dt}extendParams(e,t,n){let i=[];e.color=new ae(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],en),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,It))}return Promise.all(i)}},ld=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},hd=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ve(o,o)}return Promise.all(r)}},ud=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},dd=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},fd=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new ae(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],en)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,It)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},pd=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},md=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new ae().setRGB(o[0],o[1],o[2],en),Promise.all(r)}},gd=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},bd=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new ae().setRGB(o[0],o[1],o[2],en),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,It)),Promise.all(r)}},xd=class{constructor(e){this.parser=e,this.name=Ye.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}},vd=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},_d=class{constructor(e){this.parser=e,this.name=Ye.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},yd=class{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},Md=class{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},Sd=class{constructor(e){this.name=Ye.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}},Td=class{constructor(e){this.name=Ye.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==Gn.TRIANGLES&&l.mode!==Gn.TRIANGLE_STRIP&&l.mode!==Gn.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(let m of u){let b=new Ce,g=new I,p=new Qt,v=new I(1,1,1),_=new Is(m.geometry,m.material,d);for(let x=0;x<d;x++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,x),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,x),c.SCALE&&v.fromBufferAttribute(c.SCALE,x),_.setMatrixAt(x,b.compose(g,p,v));for(let x in c)if(x==="_COLOR_0"){let w=c[x];_.instanceColor=new ii(w.array,w.itemSize,w.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&m.geometry.setAttribute(x,c[x]);Et.prototype.copy.call(_,m),this.parser.assignFinalMaterial(_),f.push(_)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Rm="glTF",co=12,Tm={JSON:1313821514,BIN:5130562},wd=class{constructor(e){this.name=Ye.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,co),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Rm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-co,r=new DataView(e,co),a=0;for(;a<i;){let o=r.getUint32(a,!0);a+=4;let c=r.getUint32(a,!0);if(a+=4,c===Tm.JSON){let l=new Uint8Array(e,co+a,o);this.content=n.decode(l)}else if(c===Tm.BIN){let l=co+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Ed=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ye.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let h in a){let u=Id[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=Id[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],f=qr[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(let m in f.attributes){let b=f.attributes[m],g=c[m];g!==void 0&&(b.normalized=g)}u(f)},o,l,en,d)})})}},Ad=class{constructor(){this.name=Ye.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Rd=class{constructor(){this.name=Ye.KHR_MESH_QUANTIZATION}},$l=class extends zi{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,m=e*l,b=m-l,g=-2*f+3*d,p=f-d,v=1-g,_=p-d+u;for(let x=0;x!==o;x++){let w=a[b+x+o],E=a[b+x+c]*h,R=a[m+x+o],P=a[m+x]*h;r[x]=v*w+_*E+g*R+p*P}return r}},Yy=new Qt,Cd=class extends $l{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return Yy.fromArray(r).normalize().toArray(r),r}},Gn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},qr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},wm={9728:Vt,9729:fn,9984:jc,9985:Fr,9986:Bs,9987:ri},Em={33071:ui,33648:_r,10497:Tn},sd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Id={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ds={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Ky={CUBICSPLINE:void 0,LINEAR:As,STEP:Es},rd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Jy(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new tn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ti})),s.DefaultMaterial}function js(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Si(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Zy(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;a.push(d)}if(i){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;o.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function Qy(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function eM(s){let e,t=s.extensions&&s.extensions[Ye.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ad(t.attributes):e=s.indices+":"+ad(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+ad(s.targets[n]);return e}function ad(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Pd(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function tM(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var nM=new Ce,kd=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new $y,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new za(this.options.manager):this.textureLoader=new Va(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Dr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return js(r,o,i),Si(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,h]of a.children.entries())r(h,o.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ye.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,a){n.load(Vi.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let a=sd[i.type],o=qr[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new wt(l,a,c))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],c=sd[i.type],l=qr[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0,b,g;if(f&&f!==u){let p=Math.floor(d/f),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,_=t.cache.get(v);_||(b=new l(o,p*f,i.count*f/h),_=new Rr(b,f/h),t.cache.add(v,_)),g=new Cr(_,c,d%f/h,m)}else o===null?b=new l(i.count*c):b=new l(o,d,i.count*c),g=new wt(b,c,m);if(i.sparse!==void 0){let p=sd.SCALAR,v=qr[i.sparse.indices.componentType],_=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,w=new v(a[1],_,i.sparse.count*p),E=new l(a[2],x,i.sparse.count*c);o!==null&&(g=new wt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let R=0,P=w.length;R<P;R++){let S=w[R];if(g.setX(S,E[R*c]),c>=2&&g.setY(S,E[R*c+1]),c>=3&&g.setZ(S,E[R*c+2]),c>=4&&g.setW(S,E[R*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let i=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=wm[d.magFilter]||fn,h.minFilter=wm[d.minFilter]||ri,h.wrapS=Em[d.wrapS]||Tn,h.wrapT=Em[d.wrapT]||Tn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Vt&&h.minFilter!==fn,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=i.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(u){l=!0;let d=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let m=d;t.isImageBitmapLoader===!0&&(m=function(b){let g=new Jt(b);g.needsUpdate=!0,d(g)}),t.load(Vi.resolveURL(u,r.path),m,void 0,f)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),Si(u,a),u.userData.mimeType=a.mimeType||tM(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Ye.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[Ye.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(a);a=r.extensions[Ye.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new kr,pn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Fi,pn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return tn}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],a,o={},c=r.extensions||{},l=[];if(c[Ye.KHR_MATERIALS_UNLIT]){let u=i[Ye.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new ae(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],en),o.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,It)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Zt);let h=r.alphaMode||rd.OPAQUE;if(h===rd.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===rd.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Dt&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new ve(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==Dt&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Dt){let u=r.emissiveFactor;o.emissive=new ae().setRGB(u[0],u[1],u[2],en)}return r.emissiveTexture!==void 0&&a!==Dt&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,It)),Promise.all(l).then(function(){let u=new a(o);return r.name&&(u.name=r.name),Si(u,r),t.associations.set(u,{materials:e}),r.extensions&&js(i,u,r),u})}createUniqueName(e){let t=ft.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[Ye.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Am(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],h=eM(l),u=i[h];if(u)a.push(u.promise);else{let d;l.extensions&&l.extensions[Ye.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=Am(new mt,l,t),i[h]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let h=a[c].material===void 0?Jy(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,m=h.length;f<m;f++){let b=h[f],g=a[f],p,v=l[f];if(g.mode===Gn.TRIANGLES||g.mode===Gn.TRIANGLE_STRIP||g.mode===Gn.TRIANGLE_FAN||g.mode===void 0)p=r.isSkinnedMesh===!0?new Cs(b,v):new Ge(b,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===Gn.TRIANGLE_STRIP?p.geometry=id(p.geometry,Qa):g.mode===Gn.TRIANGLE_FAN&&(p.geometry=id(p.geometry,Or));else if(g.mode===Gn.LINES)p=new Aa(b,v);else if(g.mode===Gn.LINE_STRIP)p=new pi(b,v);else if(g.mode===Gn.LINE_LOOP)p=new Ra(b,v);else if(g.mode===Gn.POINTS)p=new Ca(b,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&Qy(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Si(p,r),g.extensions&&js(i,p,g),t.assignFinalMaterial(p),u.push(p)}for(let f=0,m=u.length;f<m;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&js(i,u[0],r),u[0];let d=new St;r.extensions&&js(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,m=u.length;f<m;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ht(Lu.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Hi(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Si(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),a=i,o=[],c=[];for(let l=0,h=a.length;l<h;l++){let u=a[l];if(u){o.push(u);let d=new Ce;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Ea(o,c)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){let f=i.channels[u],m=i.samplers[f.sampler],b=f.target,g=b.node,p=i.parameters!==void 0?i.parameters[m.input]:m.input,v=i.parameters!==void 0?i.parameters[m.output]:m.output;b.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",v)),l.push(m),h.push(b))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],m=u[2],b=u[3],g=u[4],p=[];for(let _=0,x=d.length;_<x;_++){let w=d[_],E=f[_],R=m[_],P=b[_],S=g[_];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();let M=n._createAnimationTracks(w,E,R,P,S);if(M)for(let C=0;C<M.length;C++)p.push(M[C])}let v=new Ds(r,void 0,p);return Si(v,i),v})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,nM)});for(let f=0,m=u.length;f<m;f++)h.add(u[f]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new Ir:l.length>1?h=new St:l.length===1?h=l[0]:h=new Et,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=a),Si(h,r),r.extensions&&js(n,h,r),r.matrix!==void 0){let u=new Ce;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){let u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new St;n.name&&(r.name=i.createUniqueName(n.name)),Si(r,n),n.extensions&&js(t,r,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);let l=h=>{let u=new Map;for(let[d,f]of i.associations)(d instanceof pn||d instanceof Jt)&&u.set(d,f);return h.traverse(d=>{let f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){let a=[],o=e.name?e.name:e.uuid,c=[];ds[r.path]===ds.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let l;switch(ds[r.path]){case ds.weights:l=mi;break;case ds.rotation:l=gi;break;case ds.translation:case ds.scale:l=bi;break;default:switch(n.itemSize){case 1:l=mi;break;case 2:case 3:default:l=bi;break}break}let h=i.interpolation!==void 0?Ky[i.interpolation]:As,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){let m=new l(c[d]+"."+ds[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),a.push(m)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Pd(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof gi?Cd:$l;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function iM(s,e,t){let n=e.attributes,i=new Nn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new I(c[0],c[1],c[2]),new I(l[0],l[1],l[2])),o.normalized){let h=Pd(qr[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new I,c=new I;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){let b=Pd(qr[d.componentType]);c.multiplyScalar(b)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;let a=new wn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function Am(s,e,t){let n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){s.setAttribute(o,c)})}for(let a in n){let o=Id[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){let a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return Xe.workingColorSpace!==en&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Xe.workingColorSpace}" not supported.`),Si(s,e),iM(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Zy(s,e.targets,t):s})}var Cm=(function(){var s="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q:Odkr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq;w8Wqdbk;esezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9Uc;WFbGgocjdaocjd6EhDaicefhocbhqdnindndndnaeaq9nmbaDaeaq9RaqaDfae6Egkcsfglcl4cifcd4hxalc9WGgmTmecbhPawcjdfhsaohzinaraz9Rax6mvarazaxfgo9RcK6mvczhlcbhHinalgic9WfgOawcj;cbffhldndndndndnazaOco4fRbbaHcoG4ciGPlbedibkal9cb83ibalcwf9cb83ibxikalaoRblaoRbbgOco4gAaAciSgAE86bbawcj;cbfaifglcGfaoclfaAfgARbbaOcl4ciGgCaCciSgCE86bbalcVfaAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc7faAaCfgARbbaOciGgOaOciSgOE86bbalctfaAaOfgARbbaoRbegOco4gCaCciSgCE86bbalc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbalc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc93faAaCfgARbbaOciGgOaOciSgOE86bbalc94faAaOfgARbbaoRbdgOco4gCaCciSgCE86bbalc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbalc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc97faAaCfgARbbaOciGgOaOciSgOE86bbalc98faAaOfgORbbaoRbigoco4gAaAciSgAE86bbalc99faOaAfgORbbaocl4ciGgAaAciSgAE86bbalc9:faOaAfgORbbaocd4ciGgAaAciSgAE86bbalcufaOaAfglRbbaociGgoaociSgoE86bbalaofhoxdkalaoRbwaoRbbgOcl4gAaAcsSgAE86bbawcj;cbfaifglcGfaocwfaAfgARbbaOcsGgOaOcsSgOE86bbalcVfaAaOfgORbbaoRbegAcl4gCaCcsSgCE86bbalc7faOaCfgORbbaAcsGgAaAcsSgAE86bbalctfaOaAfgORbbaoRbdgAcl4gCaCcsSgCE86bbalc91faOaCfgORbbaAcsGgAaAcsSgAE86bbalc4faOaAfgORbbaoRbigAcl4gCaCcsSgCE86bbalc93faOaCfgORbbaAcsGgAaAcsSgAE86bbalc94faOaAfgORbbaoRblgAcl4gCaCcsSgCE86bbalc95faOaCfgORbbaAcsGgAaAcsSgAE86bbalc96faOaAfgORbbaoRbvgAcl4gCaCcsSgCE86bbalc97faOaCfgORbbaAcsGgAaAcsSgAE86bbalc98faOaAfgORbbaoRbogAcl4gCaCcsSgCE86bbalc99faOaCfgORbbaAcsGgAaAcsSgAE86bbalc9:faOaAfgORbbaoRbrgocl4gAaAcsSgAE86bbalcufaOaAfglRbbaocsGgoaocsSgoE86bbalaofhoxekalao8Pbb83bbalcwfaocwf8Pbb83bbaoczfhokdnaiam9pmbaHcdfhHaiczfhlarao9RcL0mekkaiam6mvaoTmvdnakTmbawaPfRbbhHawcj;cbfhlashiakhOinaialRbbgzce4cbazceG9R7aHfgH86bbaiadfhialcefhlaOcufgOmbkkascefhsaohzaPcefgPad9hmbxikkcbc99arao9Radcaadca0ESEhoxlkaoaxad2fhCdnakmbadhlinaoTmlarao9Rax6mlaoaxfhoalcufglmbkaChoxekcbhmawcjdfhAinarao9Rax6miawamfRbbhHawcj;cbfhlaAhiakhOinaialRbbgzce4cbazceG9R7aHfgH86bbaiadfhialcefhlaOcufgOmbkaAcefhAaoaxfhoamcefgmad9hmbkaChokabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqaombkc9:hoxekc9:hokavcj;ebf8Kjjjjbaok;cseHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhDaicefgqarfhidnaeTmbcmcsawceSEhkcbhxcbhmcbhPcbhwcbhlindnaiaD9nmbc9:hoxikdndnaqRbbgoc;Ve0mbavc;abfalaocu7gscl4fcsGcitfgzydlhrazydbhzdnaocsGgHak9pmbavawasfcsGcdtfydbaxaHEhoaHThsdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkaxasfhxcdhHavawcdtfaoBdbawasfhwcehsalhOxdkdndnaHcsSmbaHc987aHamffcefhoxekaicefhoai8SbbgHcFeGhsdndnaHcu9mmbaohixekaicvfhiascFbGhscrhHdninao8SbbgOcFbGaHtasVhsaOcu9kmeaocefhoaHcrfgHc8J9hmbxdkkaocefhikasce4cbasceG9R7amfhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhHavawcdtfaoBdbcehsawcefhwalhOaohmxekdnaocpe0mbaxcefgHavawaDaocsGfRbbgocl49RcsGcdtfydbaocz6gzEhravawao9RcsGcdtfydbaHazfgAaocsGgHEhoaHThCdndnadcd9hmbabaPcetfgHax87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHaxBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfaxBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgOaxBdlaOarBdbavawazfgwcsGcdtfaoBdbalcefcsGhOawaCfhwaxhzaAaCfhxxekaxcbaiRbbgOEgzaoc;:eSgHfhraOcsGhCaOcl4hAdndnaOcs0mbarcefhoxekarhoavawaA9RcsGcdtfydbhrkdndnaCmbaocefhxxekaohxavawaO9RcsGcdtfydbhokdndnaHTmbaicefhHxekaicdfhHai8SbegscFeGhzdnascu9kmbaicofhXazcFbGhzcrhidninaH8SbbgscFbGaitazVhzascu9kmeaHcefhHaicrfgic8J9hmbkaXhHxekaHcefhHkazce4cbazceG9R7amfgmhzkdndnaAcsSmbaHhsxekaHcefhsaH8SbbgicFeGhrdnaicu9kmbaHcvfhXarcFbGhrcrhidninas8SbbgHcFbGaitarVhraHcu9kmeascefhsaicrfgic8J9hmbkaXhsxekascefhskarce4cbarceG9R7amfgmhrkdndnaCcsSmbashixekascefhias8SbbgocFeGhHdnaocu9kmbascvfhXaHcFbGhHcrhodninai8SbbgscFbGaotaHVhHascu9kmeaicefhiaocrfgoc8J9hmbkaXhixekaicefhikaHce4cbaHceG9R7amfgmhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfazBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgXazBdlaXarBdbavawaOcz6aAcsSVfgwcsGcdtfaoBdbawaCTaCcsSVfhwalcefcsGhOkaqcefhqavc;abfaOcitfgOarBdlaOaoBdbavc;abfalasfcsGcitfgraoBdlarazBdbawcsGhwalaHfcsGhlaPcifgPae6mbkkcbc99aiaDSEhokavc;aef8Kjjjjbaok:flevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;oiliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabaiavcefciGfcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:OhDxekcjjjj94hDkabaiavciGfgkcd7cetfaD87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:OhDxekcjjjj94hDkabaiavcufciGfcetfaD87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohvxekcjjjj94hvkabakcetfav87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklzNbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q:6dkr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq:p9sqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk:N8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhlaicefhodnaeTmbadTmbalc;WFbGglcjdalcjd6EhwcbhDinawaeaD9RaDawfae6Egqcsfglc9WGgkci2hxakcethmalcl4cifcd4hPabaDad2fhsakc;ab6hzcbhHincbhOaohAdndninaraA9RaP6meavcj;cbfaOak2fhCaAaPfhocbhidnazmbarao9Rc;Gb6mbcbhlinaCalfhidndndndndnaAalco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklbaoczfhokdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklzaoczfhokdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklaaoczfhokdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WaoclfaYpQbfaXc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WaocwfaYpQbfaXc:q:yjjbfRbbfhoxekaiaopbbbpkl8Waoczfhokalc;abfhialcjefak0meaihlarao9Rc;Fb0mbkkdnaiak9pmbaici4hlinarao9RcK6miaCaifhXdndndndndnaAaico4fRbbalcoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpkbbxikaXaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkbbaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaXaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkbbaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaXaopbbbpkbbaoczfhokalcdfhlaiczfgiak6mbkkaoTmeaohAaOcefgOclSmdxbkkc9:hoxlkdnakTmbavcjdfaHfhiavaHfpbdbhYcbhXinaiavcj;cbfaXfglpblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLalakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEalamfpblbg3cep9Ta3aQp9op9Hp9rg3alaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfhiaXczfgXak6mbkkaHclfgHad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfgDae6mbkkcbc99arao9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk::seHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhDaicefgqarfhidnaeTmbcmcsawceSEhkcbhxcbhmcbhPcbhwcbhlindnaiaD9nmbc9:hoxikdndnaqRbbgoc;Ve0mbavc;abfalaocu7gscl4fcsGcitfgzydlhrazydbhzdnaocsGgHak9pmbavawasfcsGcdtfydbaxaHEhoaHThsdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkaxasfhxcdhHavawcdtfaoBdbawasfhwcehsalhOxdkdndnaHcsSmbaHc987aHamffcefhoxekaicefhoai8SbbgHcFeGhsdndnaHcu9mmbaohixekaicvfhiascFbGhscrhHdninao8SbbgOcFbGaHtasVhsaOcu9kmeaocefhoaHcrfgHc8J9hmbxdkkaocefhikasce4cbasceG9R7amfhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhHavawcdtfaoBdbcehsawcefhwalhOaohmxekdnaocpe0mbaxcefgHavawaDaocsGfRbbgocl49RcsGcdtfydbaocz6gzEhravawao9RcsGcdtfydbaHazfgAaocsGgHEhoaHThCdndnadcd9hmbabaPcetfgHax87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHaxBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfaxBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgOaxBdlaOarBdbavawazfgwcsGcdtfaoBdbalcefcsGhOawaCfhwaxhzaAaCfhxxekaxcbaiRbbgOEgzaoc;:eSgHfhraOcsGhCaOcl4hAdndnaOcs0mbarcefhoxekarhoavawaA9RcsGcdtfydbhrkdndnaCmbaocefhxxekaohxavawaO9RcsGcdtfydbhokdndnaHTmbaicefhHxekaicdfhHai8SbegscFeGhzdnascu9kmbaicofhXazcFbGhzcrhidninaH8SbbgscFbGaitazVhzascu9kmeaHcefhHaicrfgic8J9hmbkaXhHxekaHcefhHkazce4cbazceG9R7amfgmhzkdndnaAcsSmbaHhsxekaHcefhsaH8SbbgicFeGhrdnaicu9kmbaHcvfhXarcFbGhrcrhidninas8SbbgHcFbGaitarVhraHcu9kmeascefhsaicrfgic8J9hmbkaXhsxekascefhskarce4cbarceG9R7amfgmhrkdndnaCcsSmbashixekascefhias8SbbgocFeGhHdnaocu9kmbascvfhXaHcFbGhHcrhodninai8SbbgscFbGaotaHVhHascu9kmeaicefhiaocrfgoc8J9hmbkaXhixekaicefhikaHce4cbaHceG9R7amfgmhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfazBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgXazBdlaXarBdbavawaOcz6aAcsSVfgwcsGcdtfaoBdbawaCTaCcsSVfhwalcefcsGhOkaqcefhqavc;abfaOcitfgOarBdlaOaoBdbavc;abfalasfcsGcitfgraoBdlarazBdbawcsGhwalaHfcsGhlaPcifgPae6mbkkcbc99aiaDSEhokavc;aef8Kjjjjbaok:flevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:wPliuo97eue978Jjjjjbca9Rhiaec98Ghldndnadcl9hmbdnalTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalaeSmeaipxbbbbbbbbbbbbbbbbgqpklbaiabalcdtfgdaeciGglcdtgv;8qbbdnalTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDaqp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkadaiav;8qbbskdnalTmbcbhvabhdinadczfgxaxpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;Meawaqawamp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oaoarpmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgval6mbkkalaeSmbaiaeciGgvcitgdfcbcaad9R;8kbaiabalcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;Meawaqawamp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oaoarpmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaDakp;Mearp;Keamp9oaqakp;Mearp;Keczp:Rep9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalaeSmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaDakp;Mearp;Keamp9oaqakp;Mearp;Keczp:Rep9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbheabhdinadadpbbbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbadczfhdaeclfgeav6mbkkdnavalSmbaialciGgecdtgdVcbc;abad9R;8kbaiabavcdtfgvad;8qbbdnaeTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepklbkavaiad;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz:Dbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?o(e):o(s),r,a=WebAssembly.instantiate(i,{}).then(function(p){r=p.instance,r.exports.__wasm_call_ctors()});function o(p){for(var v=new Uint8Array(p.length),_=0;_<p.length;++_){var x=p.charCodeAt(_);v[_]=x>96?x-97:x>64?x-39:x+4}for(var w=0,_=0;_<p.length;++_)v[w++]=v[_]<60?n[v[_]]:(v[_]-60)*64+v[++_];return v.buffer.slice(0,w)}function c(p,v,_,x,w,E,R){var P=p.exports.sbrk,S=x+3&-4,M=P(S*w),C=P(E.length),D=new Uint8Array(p.exports.memory.buffer);D.set(E,C);var z=v(M,x,w,C,E.length);if(z==0&&R&&R(M,S,w),_.set(D.subarray(M,M+x*w)),P(M-P(0)),z!=0)throw new Error("Malformed buffer data: "+z)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],d=0;function f(p){var v={object:new Worker(p),pending:0,requests:{}};return v.object.onmessage=function(_){var x=_.data;v.pending-=x.count,v.requests[x.id][x.action](x.value),delete v.requests[x.id]},v}function m(p){for(var v="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(i)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+g.name+";"+c.toString()+g.toString(),_=new Blob([v],{type:"text/javascript"}),x=URL.createObjectURL(_),w=u.length;w<p;++w)u[w]=f(x);for(var w=p;w<u.length;++w)u[w].object.postMessage({});u.length=p,URL.revokeObjectURL(x)}function b(p,v,_,x,w){for(var E=u[0],R=1;R<u.length;++R)u[R].pending<E.pending&&(E=u[R]);return new Promise(function(P,S){var M=new Uint8Array(_),C=++d;E.pending+=p,E.requests[C]={resolve:P,reject:S},E.object.postMessage({id:C,count:p,size:v,source:M,mode:x,filter:w},[M.buffer])})}function g(p){var v=p.data;if(!v.id)return self.close();self.ready.then(function(_){try{var x=new Uint8Array(v.count*v.size);c(_,_.exports[v.mode],x,v.count,v.size,v.source,_.exports[v.filter]),self.postMessage({id:v.id,count:v.count,action:"resolve",value:x},[x.buffer])}catch(w){self.postMessage({id:v.id,count:v.count,action:"reject",value:w})}})}return{ready:a,supported:!0,useWorkers:function(p){m(p)},decodeVertexBuffer:function(p,v,_,x,w){c(r,r.exports.meshopt_decodeVertexBuffer,p,v,_,x,r.exports[l[w]])},decodeIndexBuffer:function(p,v,_,x){c(r,r.exports.meshopt_decodeIndexBuffer,p,v,_,x)},decodeIndexSequence:function(p,v,_,x){c(r,r.exports.meshopt_decodeIndexSequence,p,v,_,x)},decodeGltfBuffer:function(p,v,_,x,w,E){c(r,r.exports[h[w]],p,v,_,x,r.exports[l[E]])},decodeGltfBufferAsync:function(p,v,_,x,w){return u.length>0?b(p,v,_,h[x],l[w]):a.then(function(){var E=new Uint8Array(p*v);return c(r,r.exports[h[x]],E,p,v,_,r.exports[l[w]]),E})}}})();function Im(s){let e=new Map,t=new Map,n=s.clone();return Pm(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let r=i,a=e.get(i),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Pm(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)Pm(s.children[n],e.children[n],t)}var rM="assets/",km=["Knight","Barbarian","Mage","Rogue_Hooded","Skeleton_Minion","Skeleton_Warrior","Skeleton_Rogue","Skeleton_Mage"],Yl=class{constructor(){this.loader=new jl,this.loader.setMeshoptDecoder(Cm),this.chars={},this.clips={},this.props=null,this.propCache=new Map}async load(e){let t=["anims","props",...km],n=0,i=()=>e?.(++n/t.length),r=l=>this.loader.loadAsync(rM+l+".glb").then(h=>(i(),h)),[a,o,...c]=await Promise.all(t.map(r));for(let l of a.animations)this.clips[l.name]=l;km.forEach((l,h)=>{this.chars[l]=c[h],Lm(c[h].scene,!0)}),this.props=o.scene,Lm(this.props,!1)}character(e){let t=Im(this.chars[e].scene);return t.traverse(n=>{n.isMesh&&(n.material=n.material.clone(),n.castShadow=!0,n.receiveShadow=!0,n.frustumCulled=!1)}),t}prop(e){let t=this.props.getObjectByName(e);if(!t)throw new Error("missing prop "+e);let n=t.clone(!0);return n.position.set(0,0,0),n.rotation.set(0,0,0),n.scale.set(1,1,1),n}propParts(e){if(this.propCache.has(e))return this.propCache.get(e);let t=this.prop(e);t.updateMatrixWorld(!0);let n=[];return t.traverse(i=>{i.isMesh&&n.push({geometry:i.geometry,material:i.material,matrix:i.matrixWorld.clone()})}),this.propCache.set(e,n),n}};function Lm(s,e){s.traverse(t=>{if(!t.isMesh)return;t.castShadow=!0,t.receiveShadow=!0;let n=t.material;n&&n.isMeshStandardMaterial&&(n.roughness=e?.72:.86,n.metalness=0,n.map&&(n.map.anisotropy=4,n.map.colorSpace=It),n.name==="Glow"&&(n.emissive=new ae("#7fe8ff"),n.emissiveIntensity=4))})}Nt();var Ld=Math.PI*2,gt=(s,e)=>s+Math.random()*(e-s),aM=new Lr(.85,1,64),oM=new si(2,2),Dm=(()=>{let s=new si(1,1);return s.translate(0,.5,0),s})();var cM=4,lM=`
  attribute vec4 iColor; attribute vec3 iData; // size, rotation, softness
  varying vec4 vColor; varying vec2 vUv; varying float vSoft;
  void main(){
    vColor = iColor; vUv = uv; vSoft = iData.z;
    vec4 mv = modelViewMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
    float c = cos(iData.y), s = sin(iData.y);
    vec2 p = mat2(c, -s, s, c) * position.xy * iData.x;
    mv.xy += p;
    gl_Position = projectionMatrix * mv;
  }`,hM=`
  varying vec4 vColor; varying vec2 vUv; varying float vSoft;
  void main(){
    float d = length(vUv - 0.5) * 2.0;
    float a = smoothstep(1.0, vSoft, d);
    if (a <= 0.001) discard;
    gl_FragColor = vec4(vColor.rgb, vColor.a * a);
  }`,Kl=class{constructor(e,t,n){this.max=t;let i=new si(1,1);this.color=new ii(new Float32Array(t*4),4),this.data=new ii(new Float32Array(t*3),3),this.color.setUsage(eo),this.data.setUsage(eo),i.setAttribute("iColor",this.color),i.setAttribute("iData",this.data);let r=new Qe({name:"particles",vertexShader:lM,fragmentShader:hM,transparent:!0,depthWrite:!1,blending:n});this.mesh=new Is(i,r,t),this.mesh.instanceMatrix.setUsage(eo),this.mesh.frustumCulled=!1,this.mesh.renderOrder=n===cn?20:10,e.add(this.mesh),this.parts=[],this.m=new Ce}add(e){this.parts.length>=this.max&&this.parts.shift(),this.parts.push(e)}update(e){let t=this.parts,n=0,i=this.m,r=this.color.array,a=this.data.array;for(let o=t.length-1;o>=0;o--){let c=t[o];if(c.life-=e,c.life<=0){t.splice(o,1);continue}let l=Math.exp(-c.drag*e);c.vx*=l,c.vy*=l,c.vz*=l,c.vy+=c.grav*e,c.x+=c.vx*e,c.y+=c.vy*e,c.z+=c.vz*e,c.floor&&c.y<.05&&(c.y=.05,c.vy*=-.3,c.vx*=.6,c.vz*=.6),c.rot+=c.spin*e}for(let o of t){let c=o.life/o.max,l=o.size*(o.grow?1+(1-c)*o.grow:1)*(o.shrink?Math.max(.05,c):1),h=o.alpha*(o.fadeIn?Math.min(1,(1-c)*6):1)*Math.min(1,c*2.2);i.makeTranslation(o.x,o.y,o.z),this.mesh.setMatrixAt(n,i),r[n*4]=o.r,r[n*4+1]=o.g,r[n*4+2]=o.b,r[n*4+3]=h,a[n*3]=l,a[n*3+1]=o.rot,a[n*3+2]=o.soft,n++}this.mesh.count=n,this.mesh.instanceMatrix.needsUpdate=!0,this.color.needsUpdate=!0,this.data.needsUpdate=!0}},uM="varying vec2 vP; uniform float uExtent; void main(){ vP = position.xy * uExtent; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",dM=`
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
  }`,Jl=class{constructor(e){this.engine=e,this.scene=e.scene,this.add=new Kl(this.scene,4e3,cn),this.norm=new Kl(this.scene,1500,Ni),this.items=[],this.decals=new Map,this.emitters=[],this.lights=[];for(let t=0;t<cM;t++){let n=new Un("#ffffff",0,10,1.8);this.scene.add(n),this.lights.push({l:n,life:0,max:1,i:0})}this.t=0,this.arcGeo=new Map,this.keepers=new Set}keep(e){e.traverse?.(t=>{t.material&&this.keepers.add(t.material)})}spark(e,t,n,i={}){let r=i.n??10,a=new ae(i.color??"#ffcf7a"),o=i.normal?this.norm:this.add;for(let c=0;c<r;c++){let l=(i.dir??gt(0,Ld))+(i.spread!==void 0?gt(-i.spread,i.spread):0),h=(i.speed??6)*gt(.35,1.1),u=i.up??gt(-.2,1)*h*.6,d=(i.life??.5)*gt(.6,1.3),f=i.bright??1.6;o.add({x:e+gt(-1,1)*(i.jitter||0),y:t,z:n+gt(-1,1)*(i.jitter||0),vx:Math.cos(l)*h,vy:u,vz:Math.sin(l)*h,life:d,max:d,size:(i.size??.2)*gt(.6,1.3),alpha:i.alpha??1,r:a.r*f,g:a.g*f,b:a.b*f,drag:i.drag??3,grav:i.grav??-4,rot:gt(0,Ld),spin:gt(-3,3),soft:i.soft??0,grow:i.grow||0,shrink:i.shrink??!0,floor:i.floor,fadeIn:i.fadeIn})}}smoke(e,t,n,i={}){this.spark(e,t,n,{n:i.n??8,color:i.color??"#2a2630",normal:!0,bright:1,speed:i.speed??1.5,up:i.up??1,life:i.life??1.4,size:i.size??1.4,grow:i.grow??1.5,shrink:!1,drag:1.5,grav:.3,soft:.2,alpha:i.alpha??.5,jitter:i.jitter??.4,fadeIn:!0})}flash(e,t,n,i,r=20,a=10,o=.18){let c=this.lights[0];for(let l of this.lights)l.life/l.max<c.life/c.max&&(c=l);c.l.position.set(e,t,n),c.l.color.set(i),c.l.distance=a,c.life=o,c.max=o,c.i=r,c.l.intensity=r}timed(e,t,n){return this.scene.add(e),this.items.push({mesh:e,life:t,max:t,update:n}),e}ring(e,t,n,i,r=.5,a=.25,o=.06){let c=new Dt({color:new ae(i).multiplyScalar(2.2),transparent:!0,blending:cn,depthWrite:!1,side:Zt}),l=new Ge(aM,c);return l.rotation.x=-Math.PI/2,l.position.set(e,o,t),this.timed(l,r,(h,u)=>{let d=1-u,f=n*(.25+.75*(1-Math.pow(1-d,3)));h.scale.set(f,f,1),h.material.opacity=u;let m=h.geometry;h.userData.w||(h.userData.w=a)})}arc(e,t,n,i,r,a,o,c={}){let l=`${a.toFixed(2)}`,h=this.arcGeo.get(l);if(!h){h=new Lr(.62,1,48,1,-a/2,a);let b=h.attributes.position,g=h.attributes.uv;for(let p=0;p<b.count;p++){let v=Math.atan2(b.getY(p),b.getX(p));g.setXY(p,(v+a/2)/a,Math.hypot(b.getX(p),b.getY(p)))}this.arcGeo.set(l,h)}let u=new ae(o),d=new Qe({name:"arc",uniforms:{uT:{value:0},uColor:{value:u},uRev:{value:c.reverse?1:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`varying vec2 vUv; uniform float uT, uRev; uniform vec3 uColor;
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
        }`,transparent:!0,blending:cn,depthWrite:!1,side:Zt}),f=new Ge(h,d);f.rotation.order="YXZ",f.rotation.x=-Math.PI/2+(c.tilt??.18),f.rotation.y=-i,f.position.set(e,t,n),f.scale.set(r,r,1);let m=c.life??.28;return this.timed(f,m,(b,g)=>{b.material.uniforms.uT.value=1-g})}beam(e,t,n,i=6,r=.6,a=1,o={}){let c=new Qe({name:"beam",uniforms:{uColor:{value:new ae(n)},uA:{value:1},uTime:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`varying vec2 vUv; uniform vec3 uColor; uniform float uA, uTime;
        void main(){ float x = abs(vUv.x - 0.5) * 2.0; float core = pow(1.0 - x, 3.0); float fade = pow(1.0 - vUv.y, 1.6);
          float flick = 0.85 + 0.15 * sin(uTime * 12.0 + vUv.y * 20.0);
          float a = core * fade * uA * flick; if (a < 0.01) discard; gl_FragColor = vec4(uColor * (1.2 + core * 2.0), a); }`,transparent:!0,blending:cn,depthWrite:!1,side:Zt}),l=new St,h=new Ge(Dm,c),u=new Ge(Dm,c);return h.scale.set(r,i,1),u.scale.set(r,i,1),u.rotation.y=Math.PI/2,l.add(h,u),l.position.set(e,0,t),o.persistent?(this.scene.add(l),l):this.timed(l,a,(d,f)=>{c.uniforms.uA.value=f,c.uniforms.uTime.value=this.t})}bolt(e,t,n="#bfe4ff",i=14){let r=[],a=e,o=t;for(let u=i;u>=0;u-=1.1)r.push(new I(a,u,o)),a+=gt(-.6,.6),o+=gt(-.6,.6);r.push(new I(e,0,t));let c=new mt().setFromPoints(r),l=new Fi({color:new ae(n).multiplyScalar(4),transparent:!0,blending:cn}),h=new pi(c,l);h.userData.ownGeo=!0,this.timed(h,.25,(u,d)=>{u.material.opacity=d}),this.beam(e,t,n,i,1.2,.3)}zap(e,t,n,i,r,a,o="#bfe4ff"){let c=[],l=Math.max(4,Math.round(Math.hypot(i-e,a-n)/.7));for(let f=0;f<=l;f++){let m=f/l,b=f===0||f===l?0:.45;c.push(new I(e+(i-e)*m+gt(-b,b),t+(r-t)*m+gt(-b,b)*.6,n+(a-n)*m+gt(-b,b)))}let h=new mt().setFromPoints(c),u=new Fi({color:new ae(o).multiplyScalar(4),transparent:!0,blending:cn}),d=new pi(h,u);d.userData.ownGeo=!0,this.timed(d,.3,(f,m)=>{f.material.opacity=m})}decal(e,t){let n=this.decals.get(e.id),i=e.shape,r=i.type==="rect"?Math.max(i.len,i.w)+1:(i.r2||i.r)+.5;if(!n){let h={circle:0,cone:1,rect:2,donut:3}[i.type],u=e.team!=="player",d=e.fx==="heal"||e.fx==="spring",f=e.fx==="trap",m=e.fx==="holyburst",b=e.fx==="poison",g=new Qe({name:"decal",uniforms:{uType:{value:h},uR:{value:i.r||0},uR2:{value:i.r2||0},uAng:{value:i.ang||0},uLen:{value:i.len||0},uW:{value:i.w||0},uFill:{value:0},uAlpha:{value:0},uTime:{value:0},uExtent:{value:r},uColor:{value:new ae(u?"#ff3b2a":e.fx==="frost"?"#6cc8ff":d?"#3fe08a":f?"#8fd05a":m?"#ffe7a0":b?"#7ac03a":"#ffb347")},uEdge:{value:new ae(u?"#ff8a5c":e.fx==="frost"?"#d8f2ff":d?"#c8ffd8":f?"#e0ffb0":m?"#fff8e0":b?"#d0ff90":"#ffe0a0")}},vertexShader:uM,fragmentShader:dM,transparent:!0,depthWrite:!1,blending:cn});n=new Ge(oM,g),n.rotation.order="YXZ",n.renderOrder=5,this.scene.add(n),this.decals.set(e.id,n)}let a=n.material.uniforms;n.position.set(e.x,.07+e.id%7*.002,e.z),n.rotation.set(-Math.PI/2,-e.dir,0),n.scale.set(r,r,1);let o=e.warn||.001,c=e.warn>0?Math.min(1,e.t/o):1;a.uFill.value=c;let l=e.team==="player"&&e.dur>.5;return a.uAlpha.value=l?.6:Math.min(1,e.t*6)*(e.t>o?Math.max(0,1-(e.t-o)*6):1),i.type==="rect"&&i.w<1&&(a.uAlpha.value*=.4),a.uTime.value=t,n.userData.seen=!0,n}sweepDecals(){for(let[e,t]of this.decals)t.userData.seen?t.userData.seen=!1:(this.scene.remove(t),this.keepers.has(t.material)||t.material.dispose(),this.decals.delete(e))}emitter(e){return this.emitters.push(e),e}fire(e,t,n,i=1,r="#ff8a2a"){let a=new ae(r);this.add.add({x:e+gt(-.06,.06)*i,y:t,z:n+gt(-.06,.06)*i,vx:gt(-.2,.2),vy:gt(1.2,2.2)*i,vz:gt(-.2,.2),life:gt(.35,.6),max:.6,size:gt(.25,.45)*i,alpha:.9,r:a.r*2.4,g:a.g*2.2,b:a.b*2,drag:2,grav:.5,rot:gt(0,Ld),spin:gt(-2,2),soft:.1,shrink:!0}),Math.random()<.08&&this.add.add({x:e,y:t+.3,z:n,vx:gt(-.5,.5),vy:gt(1.5,3),vz:gt(-.5,.5),life:1.2,max:1.2,size:.05,alpha:1,r:3,g:1.6,b:.6,drag:1,grav:-.5,rot:0,spin:0,soft:0,shrink:!0})}clearTransient(){for(let e of this.items)e.life=0;for(let e of this.lights)e.life=0;this.add.parts.length=0,this.norm.parts.length=0,this.update(0)}update(e){this.t+=e;for(let t of this.emitters)if(!t.dead)for(t.acc=(t.acc||0)+e*(t.rate||30);t.acc>=1;)t.acc-=1,t.emit(this);this.emitters=this.emitters.filter(t=>!t.dead);for(let t=this.items.length-1;t>=0;t--){let n=this.items[t];if(n.life-=e,n.life<=0){this.scene.remove(n.mesh),n.mesh.traverse?.(i=>{i.material&&!this.keepers.has(i.material)&&i.material.dispose?.(),i.userData.ownGeo&&i.geometry.dispose()}),this.items.splice(t,1);continue}n.update?.(n.mesh,n.life/n.max)}for(let t of this.lights){if(t.life<=0){t.l.intensity=0;continue}t.life-=e,t.l.intensity=t.i*Math.max(0,t.life/t.max)}this.add.update(e),this.norm.update(e)}};Nt();var Dd=["        .........         ","        .........         ","        .........         ","        .........         ","        .........         ","        .........         ","        .........         ","        .........         ","            =             ","            =             ","......   .......          ","......   .......          ","......===.......          ","......   .......          ","......   .......          ","......   .......          ","  =                       ","  =      ,,,,,,,,,        ","......   ,,,,,,,,,        ","......   ,,,,,,,,,        ","......===,,,,,,,,,        ","......   ,,,,,,,,,        ","......   ,,,,,,,,,        ","         ,,,,,,,,,        ","         ,,,,,,,,,        "],Xi=Dd[0].length,ho=Dd.length,uo=Dd.map(s=>s.padEnd(Xi," ").split("")),jt=[{id:"yard",name:"\uC655\uAC00 \uBB18\uC5ED",x0:9,z0:17,x1:17,z1:24,seals:[],outdoor:!0,waves:[[["minion",11,19],["minion",13,18],["minion",15,19],["minion",12,21],["minion",16,21]],[["archer",10,18],["archer",16,18],["minion",13,20],["minion",11,22],["minion",15,22],["warrior",13,18]]]},{id:"r1",name:"\uB9DD\uC790\uC758 \uD68C\uB791",x0:0,z0:18,x1:5,z1:22,seals:[[6,20],[2,17]],waves:[[["minion",1,19],["minion",3,19],["minion",1,21],["warrior",3,21],["warrior",4,19],["minion",4,22]],[["archer",1,18],["archer",5,18],["mage",3,18],["minion",2,20],["minion",4,20]]]},{id:"r2",name:"\uBF08\uC758 \uC608\uBC30\uB2F9",x0:0,z0:10,x1:5,z1:15,seals:[[2,16],[6,12]],waves:[[["warrior",1,11],["warrior",4,11],["mage",2,10],["minion",1,13],["minion",4,13],["archer",3,10]],[["warrior",2,12,!0],["minion",0,14],["minion",5,14],["archer",0,10],["archer",5,10]],[["priest",2,11],["minion",1,14],["minion",4,14]]]},{id:"r3",name:"\uC655\uC758 \uBCF4\uBB3C\uACE0",x0:9,z0:10,x1:15,z1:15,seals:[[8,12],[12,9]],waves:[[["mage",10,11],["mage",14,11],["warrior",12,12],["minion",10,14],["minion",14,14],["minion",12,14]],[["archer",9,10],["archer",15,10],["warrior",11,11],["warrior",13,11],["mage",12,10,!0]],[["warden",12,11],["archer",9,10],["archer",15,10]]],chest:[12,10]},{id:"boss",name:"\uD574\uACE8\uC655\uC758 \uC625\uC88C",x0:8,z0:0,x1:16,z1:7,seals:[[12,8]],boss:[12,2],waves:[]}],vn={x:52,z:92},sn=(s,e)=>s>=0&&e>=0&&s<Xi&&e<ho&&uo[e][s]!==" ",lo=(s,e)=>[Math.floor(s/4+.5),Math.floor(e/4+.5)],zn=(s,e)=>({x:s*4,z:e*4}),eh=[{x:9.5*4,z:1.5*4,r:.9,prop:"d_pillar_decorated"},{x:14.5*4,z:1.5*4,r:.9,prop:"d_pillar_decorated"},{x:9.5*4,z:5.5*4,r:.9,prop:"d_pillar_decorated"},{x:14.5*4,z:5.5*4,r:.9,prop:"d_pillar_decorated"},{x:1.5*4,z:11.5*4,r:.8,prop:"d_pillar"},{x:3.5*4,z:13.5*4,r:.8,prop:"d_pillar"},{x:10.5*4,z:12.5*4,r:.8,prop:"d_column"},{x:13.5*4,z:12.5*4,r:.8,prop:"d_column"},{x:10.4*4,z:20.3*4,r:.9,prop:"h_grave_A"},{x:16.2*4,z:19.4*4,r:.9,prop:"h_grave_B"},{x:14.6*4,z:23.2*4,r:1.1,prop:"h_tree_dead_large"},{x:11.1*4,z:23.6*4,r:.9,prop:"h_gravestone"},{x:16.6*4,z:22.5*4,r:.8,prop:"h_grave_A_destroyed"}];function fo(s){let e=[];return jt.forEach((t,n)=>{if(s[n]==="active")for(let i of t.seals)e.push(i)}),e}function po(s,e){let[t,n]=lo(s,e);return jt.findIndex(i=>t>=i.x0&&t<=i.x1&&n>=i.z0&&n<=i.z1)}var Zl=4/2,Ql=.5;function Nd(s,e,t){if(!sn(s,e))return!0;if(t){for(let n of t)if(n[0]===s&&n[1]===e)return!0}return!1}function Wn(s,e,t){let n=!1;for(let i=0;i<2;i++){let[r,a]=lo(s.x,s.z);for(let o=-1;o<=1;o++)for(let c=-1;c<=1;c++){let l=r+c,h=a+o;if(!Nd(l,h,t))continue;let u=l*4,d=h*4,f=u-Zl-Ql,m=u+Zl+Ql,b=d-Zl-Ql,g=d+Zl+Ql,p=Math.max(f,Math.min(s.x,m)),v=Math.max(b,Math.min(s.z,g)),_=s.x-p,x=s.z-v,w=_*_+x*x;if(w<e*e){if(w<1e-8){let E=s.x-f,R=m-s.x,P=s.z-b,S=g-s.z,M=Math.min(E,R,P,S);M===E?s.x=f-e:M===R?s.x=m+e:M===P?s.z=b-e:s.z=g+e}else{let E=Math.sqrt(w);s.x=p+_/E*e,s.z=v+x/E*e}n=!0}}}for(let i of eh){let r=s.x-i.x,a=s.z-i.z,o=i.r+e,c=r*r+a*a;if(c<o*o){let l=Math.sqrt(c)||1e-4;s.x=i.x+r/l*o,s.z=i.z+a/l*o,n=!0}}return n}function fM(s,e,t){let[n,i]=lo(s,e);return!Nd(n,i,t)}function mo(s,e,t,n,i,r=0){let a=Math.hypot(t-s,n-e),o=Math.ceil(a/(r>0?.6:1)),c={x:0,z:0};for(let l=1;l<o;l++){let h=l/o,u=s+(t-s)*h,d=e+(n-e)*h;if(!fM(u,d,i)||r>0&&(c.x=u,c.z=d,Wn(c,r,i),Math.abs(c.x-u)+Math.abs(c.z-d)>.05))return!1}return!0}function th(s,e,t,n,i){let[r,a]=lo(s,e),[o,c]=lo(t,n);if(r===o&&a===c)return{x:t,z:n};let l=(b,g)=>g*Xi+b,h=[[r,a]],u=new Map,d=new Map([[l(r,a),0]]),f=new Map([[l(r,a),Math.abs(o-r)+Math.abs(c-a)]]),m=0;for(;h.length&&m++<600;){let b=0;for(let v=1;v<h.length;v++)f.get(l(...h[v]))<f.get(l(...h[b]))&&(b=v);let[g,p]=h.splice(b,1)[0];if(g===o&&p===c){let v=l(g,p),_=v;for(;u.has(v)&&u.get(v)!==l(r,a);)_=v,v=u.get(v);let x=u.has(v)?v:_;return zn(x%Xi,Math.floor(x/Xi))}for(let[v,_]of[[1,0],[-1,0],[0,1],[0,-1]]){let x=g+v,w=p+_;if(Nd(x,w,i))continue;let E=l(x,w),R=d.get(l(g,p))+1;R<(d.get(E)??1/0)&&(u.set(E,l(g,p)),d.set(E,R),f.set(E,R+Math.abs(o-x)+Math.abs(c-w)),h.some(([P,S])=>P===x&&S===w)||h.push([x,w]))}}return null}function nh(s){let e=s>>>0,t=()=>{e=e+1831565813>>>0;let n=e;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296};return t.range=(n,i)=>n+t()*(i-n),t.int=(n,i)=>Math.floor(n+t()*(i-n+1)),t.pick=n=>n[Math.floor(t()*n.length)],t.chance=n=>t()<n,t}var fs=Math.PI*2,Nm=16,pM=/floor|path|rubble_half|coin|candle|bone|skull/;function mM(s){let e=new mt,t=s.attributes.position.count;for(let n of["position","normal","uv"]){let i=s.attributes[n],r=n==="uv"?2:3,a=new Float32Array(t*r);if(i)for(let o=0;o<t;o++)a[o*r]=i.getX(o),a[o*r+1]=i.getY(o),r===3&&(a[o*r+2]=i.getZ(o));e.setAttribute(n,new wt(a,r))}return s.index?e.setIndex(new wt(Uint32Array.from(s.index.array),1)):e.setIndex([...Array(t).keys()]),e}var Ud=class{constructor(e){this.assets=e,this.byKey=new Map,this.floatCache=new Map}add(e,t,n,i,r=0,a=1,o=1){let c=new Ce().compose(new I(t,n,i),new Qt().setFromAxisAngle(new I(0,1,0),r),new I(a,a*o,a));this.byKey.has(e)||this.byKey.set(e,[]),this.byKey.get(e).push(c)}build(e){let t=new Map,n=new Ce;for(let[a,o]of this.byKey){let c=!pM.test(a);for(let l of this.assets.propParts(a)){let h=this.floatCache.get(l.geometry);h||(h=mM(l.geometry),this.floatCache.set(l.geometry,h));for(let u of o){let d=`${Math.floor(u.elements[12]/Nm)},${Math.floor(u.elements[14]/Nm)}|${l.material.uuid}|${c}`,f=t.get(d);f||(f={material:l.material,cast:c,geos:[]},t.set(d,f)),f.geos.push(h.clone().applyMatrix4(n.multiplyMatrices(u,l.matrix)))}}}let i=0,r=0;for(let a of t.values()){let o=Sm(a.geos,!1);for(let l of a.geos)l.dispose();o.computeBoundingSphere();let c=new Ge(o,a.material);c.castShadow=a.cast,c.receiveShadow=!0,c.matrixAutoUpdate=!1,e.add(c),i++,r+=o.index.count/3}for(let a of this.floatCache.values())a.dispose();this.stats={meshes:i,tris:Math.round(r)}}},ih=class{constructor(e,t,n){this.engine=e,this.assets=t,this.vfx=n,this.group=new St,this.torches=[],this.seals=[],this.chests=new Map,this.build(),e.scene.add(this.group),this.lightPool=[];for(let i=0;i<6;i++){let r=new Un("#ff9448",0,15,1.7);e.scene.add(r),this.lightPool.push(r)}}prop(e,t,n,i,r=0,a=1){this.inst.add(e,t,n,i,r,a)}build(){let e=nh(1337),t=this.inst=new Ud(this.assets),n=(c,l)=>sn(c,l)&&uo[l][c]===",",i=(c,l)=>jt.find(h=>c>=h.x0&&c<=h.x1&&l>=h.z0&&l<=h.z1);for(let c=0;c<ho;c++)for(let l=0;l<Xi;l++){if(!sn(l,c))continue;let{x:h,z:u}=zn(l,c),d=i(l,c);if(n(l,c))t.add(e()<.04?"h_floor_dirt_grave":"h_floor_dirt",h,0,u,Math.floor(e()*4)*(fs/4));else{let m=e(),b=d?.boss?m<.2?"d_floor_tile_large_rocks":"d_floor_tile_large":m<.14?"d_floor_tile_large_rocks":m<.2&&d?"d_floor_tile_big_grate":"d_floor_tile_large";t.add(b,h,0,u,Math.floor(e()*4)*(fs/4))}let f=[[0,-1,0,-2,0],[0,1,Math.PI,2,0],[-1,0,Math.PI/2,0,-2],[1,0,-Math.PI/2,0,2]];for(let[m,b,g,p,v]of f){if(sn(l+m,c+b))continue;let _=h+v,x=u+p,w=g;if(n(l,c)){t.add(e()<.2?"h_fence_broken":"h_fence",_,0,x,w),t.add("h_fence_pillar",_+(b!==0?2:0),0,x+(m!==0?2:0));continue}let E=e(),R=b===1,P=R?"d_wall":E<.1?"d_wall_cracked":E<.16&&d?"d_wall_shelves":E<.2&&d&&!d.boss?"d_wall_window_closed":E<.26&&d?"d_wall_arched":"d_wall";if(t.add(P,_,0,x,w,1,R?.22:1),R)continue;let S=_-v*.25,M=x-p*.25,C=(l*7+c*13+(m+2)*3+b)%5;if(P==="d_wall"&&(C===0||d?.boss&&C<3)){this.prop("d_torch_mounted",S,2,M,w);let D=S+Math.sin(w)*.45,z=M+Math.cos(w)*.45;this.torches.push({x:D,y:2.75,z,color:d?.boss?"#7fd0ff":"#ff9448",boss:!!d?.boss})}else P==="d_wall"&&d&&C===2&&this.prop(d.boss?"d_banner_triple_red":e()<.5?"d_banner_patternA_red":"d_banner_thin_red",S,0,M,w)}}for(let c of eh)this.prop(c.prop,c.x,0,c.z,e()*fs);let r=(c,l,h,u=1.2)=>{for(let d=0;d<h;d++){let f=Math.floor(e()*4),m=(l.x0-.5)*4+u,b=(l.x1+.5)*4-u,g=(l.z0-.5)*4+u,p=(l.z1+.5)*4-u,v=m+e()*(b-m),_=g+e()*(p-g);f===0?_=g:f===1?_=p:f===2?v=m:v=b,this.prop(c[Math.floor(e()*c.length)],v,0,_,e()*fs)}};for(let c of jt)if(!c.outdoor){if(c.boss){r(["d_candle_triple","d_candle_lit","h_skull_candle","h_bone_A","h_ribcage","d_rubble_half"],c,26,1);let l=zn(12,0);this.prop("d_stairs_wide",l.x,0,l.z-1.8,0);for(let h of[-6,6])this.prop("h_shrine_candles",l.x+h,0,l.z+1,0);for(let[h,u]of[[-10,8],[10,8],[-10,20],[10,20]])this.prop("h_coffin_decorated",l.x+h,0,l.z+u,h>0?-Math.PI/2:Math.PI/2)}else r(["d_barrel_large","d_barrel_small","d_crates_stacked","d_box_stacked","d_candle_triple","d_rubble_half","h_bone_B","h_skull","d_keg","d_trunk_large_A","d_candle_melted"],c,14);if(c.chest){let l=zn(...c.chest);for(let[h,u]of[[-2.2,.2],[2.2,.4],[-1.6,-1.2],[1.4,-1.4]])this.prop(e()<.5?"d_coin_stack_large":"d_coin_stack_medium",l.x+h,0,l.z+u,e()*fs)}}let a=jt[0];for(let c=0;c<16;c++){let l=a.x0+e()*(a.x1-a.x0),h=a.z0+e()*(a.z1-a.z0),u=l*4,d=h*4;Math.hypot(u-52,d-92)<6||eh.some(f=>Math.hypot(f.x-u,f.z-d)<3)||this.prop(["h_gravemarker_A","h_gravemarker_B","h_skull","h_bone_C","h_candle_triple","h_lantern_standing"][Math.floor(e()*6)],u,0,d,e()*fs)}for(let c=0;c<70;c++){let l=e()*fs,h=52,u=20.5*4,d=22+e()*22,f=h+Math.cos(l)*d*1.1,m=u+Math.sin(l)*d*.9,[b,g]=[Math.round(f/4),Math.round(m/4)];if(sn(b,g)||sn(b+1,g)||sn(b-1,g)||sn(b,g+1)||sn(b,g-1))continue;let p=e(),v=p<.45?e()<.5?"h_tree_dead_large":"h_tree_dead_medium":p<.7?"h_grave_A":p<.85?"h_gravestone":"h_post_lantern";this.prop(v,f,0,m,e()*fs,.9+e()*.5),v==="h_post_lantern"&&this.torches.push({x:f,y:3,z:m,color:"#ffb35c",outdoor:!0})}for(let c=0;c<26;c++){let l=6+Math.floor(e()*16),h=15+Math.floor(e()*13);sn(l,h)||sn(l-1,h)||sn(l+1,h)||sn(l,h-1)||sn(l,h+1)||l<9&&h<23}let o=new Ge(new Pa(60,48),new tn({color:"#1a1712",roughness:1}));o.rotation.x=-Math.PI/2,o.position.set(52,-.12,20.5*4),o.receiveShadow=!0,this.group.add(o),this.prop("h_arch",8.5*4,0,80,Math.PI/2),this.prop("h_post_skull",8.5*4,0,19.3*4-1.5,0),this.prop("h_post_skull",8.5*4,0,20.7*4+1.5,0);for(let c=0;c<jt.length;c++)for(let[l,h]of jt[c].seals){let{x:u,z:d}=zn(l,h),f=sn(l,h-1)||sn(l,h+1),m=this.makeSeal();m.position.set(u,0,d),m.rotation.y=f?0:Math.PI/2,m.visible=!1,this.group.add(m),this.seals.push({room:c,mesh:m,x:u,z:d,a:0})}t.build(this.group);for(let c of this.torches)this.vfx.emitter({rate:c.outdoor?14:26,emit:l=>l.fire(c.x,c.y,c.z,c.outdoor?.5:.8,c.boss?"#58b6ff":"#ff7a26")})}makeSeal(){let e=new Qe({name:"seal",uniforms:{uTime:{value:0},uA:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`varying vec2 vUv; uniform float uTime, uA;
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
        }`,transparent:!0,blending:cn,depthWrite:!1,side:Zt}),t=new si(3.2,3.6);return t.translate(0,1.8,0),new Ge(t,e)}update(e,t,n,i){for(let a of this.seals){let o=n[a.room]==="active";a.a+=((o?1:0)-a.a)*Math.min(1,e*5),a.mesh.visible=a.a>.01,a.mesh.material.uniforms.uA.value=a.a,a.mesh.material.uniforms.uTime.value=t,o&&Math.random()<e*20&&this.vfx.spark(a.x+(Math.random()-.5)*3,Math.random()*3,a.z,{n:1,color:"#ff5533",speed:.5,up:1,life:.8,size:.12,grav:.5})}let r=this.torches.map(a=>({tc:a,d:(a.x-i.x)**2+(a.z-i.z)**2})).sort((a,o)=>a.d-o.d);this.lightPool.forEach((a,o)=>{let c=r[o];if(!c||c.d>1600){a.intensity=0;return}let l=c.tc;a.position.set(l.x,l.y,l.z),a.color.set(l.color);let h=1+Math.sin(t*13+o*3.1)*.07+Math.sin(t*31+o)*.05;a.intensity=(l.outdoor?14:l.boss?28:24)*h,a.distance=l.outdoor?12:15})}};uh();var _M=[0,2,3,5,7,8,10],Vd=[[50,53,57],[46,50,53],[48,52,55],[45,49,52]],vo=s=>440*2**((s-69)/12),dh=class{constructor(){this.ctx=null,this.vol={master:.8,music:.5,sfx:.85},this.mode="menu",this.last={}}unlock(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let e=window.AudioContext||window.webkitAudioContext;if(!e)return;let t=this.ctx=new e;this.comp=t.createDynamicsCompressor(),this.comp.threshold.value=-12,this.comp.ratio.value=5,this.comp.attack.value=.003,this.master=t.createGain(),this.master.gain.value=this.vol.master,this.comp.connect(this.master).connect(t.destination),this.sfx=t.createGain(),this.sfx.gain.value=this.vol.sfx,this.sfx.connect(this.comp),this.music=t.createGain(),this.music.gain.value=this.vol.music,this.music.connect(this.comp),this.reverb=t.createConvolver(),this.reverb.buffer=this.impulse(3.6,2.4);let n=t.createGain();n.gain.value=.55,this.reverb.connect(n).connect(this.comp),this.noiseBuf=this.makeNoise(2),this.startMusic()}setVolume(e,t){if(this.vol[e]=t,!this.ctx)return;(e==="master"?this.master:e==="music"?this.music:this.sfx).gain.setTargetAtTime(t,this.ctx.currentTime,.05)}impulse(e,t){let n=this.ctx,i=n.sampleRate*e,r=n.createBuffer(2,i,n.sampleRate);for(let a=0;a<2;a++){let o=r.getChannelData(a);for(let c=0;c<i;c++)o[c]=(Math.random()*2-1)*(1-c/i)**t}return r}makeNoise(e){let t=this.ctx,n=t.sampleRate*e,i=t.createBuffer(1,n,t.sampleRate),r=i.getChannelData(0);for(let a=0;a<n;a++)r[a]=Math.random()*2-1;return i}out(e){let t=this.ctx,n=e.vol??1,i=0;if(e.L&&e.x!==void 0){let c=e.x-e.L.x,l=(e.z??e.L.z)-e.L.z;n*=Math.max(0,1-Math.hypot(c,l)/40)**1.3,i=Math.max(-1,Math.min(1,c/18))}if(n<.01)return null;let r=t.createGain();r.gain.value=n;let a=t.createStereoPanner();a.pan.value=i,r.connect(a).connect(this.sfx);let o=t.createGain();return o.gain.value=e.wet??.25,a.connect(o).connect(this.reverb),r}tone(e,{type:t="sine",f0:n,f1:i,dur:r,vol:a=.3,attack:o=.005,delay:c=0,detune:l=0}){let h=this.ctx,u=h.currentTime+c,d=h.createOscillator(),f=h.createGain();d.type=t,d.detune.value=l,d.frequency.setValueAtTime(n,u),i&&d.frequency.exponentialRampToValueAtTime(Math.max(1,i),u+r),f.gain.setValueAtTime(1e-4,u),f.gain.exponentialRampToValueAtTime(a,u+o),f.gain.exponentialRampToValueAtTime(1e-4,u+r),d.connect(f).connect(e),d.start(u),d.stop(u+r+.05)}noise(e,{dur:t,vol:n=.3,type:i="bandpass",f0:r=1e3,f1:a,q:o=1,attack:c=.003,delay:l=0}){let h=this.ctx,u=h.currentTime+l,d=h.createBufferSource();d.buffer=this.noiseBuf,d.playbackRate.value=.8+Math.random()*.4;let f=h.createBiquadFilter();f.type=i,f.Q.value=o,f.frequency.setValueAtTime(r,u),a&&f.frequency.exponentialRampToValueAtTime(a,u+t);let m=h.createGain();m.gain.setValueAtTime(1e-4,u),m.gain.exponentialRampToValueAtTime(n,u+c),m.gain.exponentialRampToValueAtTime(1e-4,u+t),d.connect(f).connect(m).connect(e),d.start(u,Math.random()),d.stop(u+t+.05)}play(e,t={}){if(!this.ctx||this.ctx.state!=="running")return;let n=this.ctx.currentTime,i={hit:.03,hitCrit:.04,swing:.04,bones:.05,spawn:.08,block:.05,loot:.08}[e]??0;if(i&&n-(this.last[e]||0)<i)return;this.last[e]=n;let r=()=>.9+Math.random()*.2,a=this.out(t);if(a)switch(e){case"swing":this.noise(a,{dur:.16,vol:.28,f0:900*r(),f1:3800,q:1.4,attack:.02});break;case"swingHeavy":this.noise(a,{dur:.3,vol:.4,f0:400,f1:2400,q:1.2,attack:.04}),this.tone(a,{type:"sine",f0:90,f1:50,dur:.3,vol:.2});break;case"hit":this.noise(a,{dur:.09,vol:.45,f0:1500*r(),q:1.5}),this.tone(a,{type:"triangle",f0:160*r(),f1:60,dur:.12,vol:.35}),this.noise(a,{dur:.05,vol:.2,type:"highpass",f0:5e3});break;case"hitCrit":this.noise(a,{dur:.14,vol:.55,f0:2200,q:2}),this.tone(a,{type:"triangle",f0:220,f1:55,dur:.18,vol:.45}),this.tone(a,{type:"sine",f0:2600*r(),f1:3400,dur:.2,vol:.08,delay:.01});break;case"block":this.tone(a,{type:"square",f0:900*r(),f1:700,dur:.12,vol:.12}),this.noise(a,{dur:.1,vol:.3,type:"highpass",f0:3e3});break;case"impactHeavy":this.tone(a,{type:"sine",f0:110,f1:32,dur:.6,vol:.7}),this.noise(a,{dur:.5,vol:.45,type:"lowpass",f0:1800,f1:150});break;case"bossSlam":this.tone(this.out({...t,wet:.6})||a,{type:"sine",f0:80,f1:24,dur:1.1,vol:.9}),this.noise(a,{dur:.9,vol:.6,type:"lowpass",f0:1200,f1:90});break;case"dodge":this.noise(a,{dur:.25,vol:.3,f0:500,f1:2600,q:.9,attack:.03});break;case"potion":this.tone(a,{type:"sine",f0:500,f1:900,dur:.25,vol:.18}),this.noise(a,{dur:.2,vol:.12,f0:3e3,q:4,delay:.05});break;case"skill":this.noise(a,{dur:.18,vol:.18,f0:1800,f1:600,q:2});break;case"shout":this.tone(this.out({vol:.9,wet:.5}),{type:"sawtooth",f0:180,f1:140,dur:.6,vol:.18,attack:.05}),this.tone(this.out({vol:.9,wet:.5}),{type:"sawtooth",f0:270,f1:210,dur:.6,vol:.1,attack:.05});break;case"charge":this.tone(a,{type:"sawtooth",f0:200,f1:900,dur:.8,vol:.08,attack:.3}),this.noise(a,{dur:.8,vol:.12,f0:800,f1:5e3,q:3,attack:.3});break;case"counter":this.tone(this.out({vol:1,wet:.6}),{type:"triangle",f0:1318,dur:.6,vol:.2}),this.tone(this.out({vol:1,wet:.6}),{type:"triangle",f0:1760,dur:.6,vol:.14,delay:.05}),this.tone(a,{type:"sine",f0:120,f1:40,dur:.5,vol:.6});break;case"counterTell":this.tone(this.out({vol:1,wet:.5}),{type:"sine",f0:1480,dur:.35,vol:.12}),this.tone(this.out({vol:1,wet:.5}),{type:"sine",f0:1480,dur:.35,vol:.12,delay:.18});break;case"bones":for(let o=0;o<5;o++)this.tone(a,{type:"square",f0:700+Math.random()*900,f1:300,dur:.05,vol:.06,delay:o*.04+Math.random()*.03});this.noise(a,{dur:.3,vol:.2,f0:2500,q:3});break;case"bossDie":{let o=this.out({vol:1,wet:1});this.tone(o,{type:"sawtooth",f0:90,f1:30,dur:3,vol:.4,attack:.1}),this.noise(o,{dur:3,vol:.5,type:"lowpass",f0:1500,f1:60});break}case"spawn":this.noise(a,{dur:.6,vol:.18,type:"lowpass",f0:400,attack:.1});for(let o=0;o<3;o++)this.tone(a,{type:"square",f0:400+Math.random()*500,f1:200,dur:.05,vol:.04,delay:.2+o*.12});break;case"hurt":this.tone(a,{type:"sawtooth",f0:200,f1:80,dur:.18,vol:.2}),this.noise(a,{dur:.15,vol:.3,f0:600,q:.8});break;case"down":this.tone(this.out({vol:1,wet:.7}),{type:"sine",f0:330,f1:110,dur:1.4,vol:.3});break;case"revive":[0,4,7,12,16].forEach((o,c)=>this.tone(this.out({vol:1,wet:.7}),{type:"triangle",f0:523*2**(o/12),dur:.9,vol:.1,delay:c*.08}));break;case"smoke":this.noise(a,{dur:.7,vol:.35,type:"lowpass",f0:1200,f1:300,attack:.02});break;case"bow":this.noise(a,{dur:.08,vol:.3,f0:1200,q:3}),this.tone(a,{type:"triangle",f0:180,f1:120,dur:.12,vol:.2});break;case"cast":this.tone(a,{type:"sine",f0:600,f1:1400,dur:.18,vol:.12}),this.noise(a,{dur:.2,vol:.15,f0:2500,f1:800,q:2});break;case"explode":this.tone(a,{type:"sine",f0:140,f1:35,dur:.6,vol:.6}),this.noise(a,{dur:.7,vol:.5,type:"lowpass",f0:3e3,f1:200});break;case"thunder":{let o=this.out({...t,wet:.9})||a;this.noise(o,{dur:1.4,vol:.7,type:"lowpass",f0:5e3,f1:120,attack:.002}),this.tone(o,{type:"sine",f0:70,f1:30,dur:1.2,vol:.7});break}case"soul":this.tone(a,{type:"sine",f0:300,f1:900,dur:.4,vol:.12}),this.noise(a,{dur:.5,vol:.25,type:"lowpass",f0:900});break;case"frost":this.noise(a,{dur:.8,vol:.25,type:"highpass",f0:5e3,attack:.05}),this.tone(a,{type:"sine",f0:2200,f1:1600,dur:.6,vol:.06});break;case"meteorFall":this.noise(this.out({vol:1,wet:.3}),{dur:1.2,vol:.35,f0:300,f1:2400,q:1,attack:.9});break;case"summon":this.tone(this.out({...t,wet:.8})||a,{type:"sawtooth",f0:60,f1:90,dur:1.4,vol:.2,attack:.3});break;case"seal":this.tone(this.out({vol:1,wet:.8}),{type:"sine",f0:110,dur:1.4,vol:.4,attack:.02}),this.noise(this.out({vol:1,wet:.8}),{dur:.8,vol:.2,type:"highpass",f0:3e3});break;case"bossDoor":{let o=this.out({vol:1,wet:1});this.tone(o,{type:"sine",f0:55,dur:3,vol:.6,attack:.2}),this.tone(o,{type:"sawtooth",f0:110,dur:2.5,vol:.08,attack:.5,detune:8});break}case"roar":{let o=this.out({vol:1,wet:.9});this.tone(o,{type:"sawtooth",f0:75,f1:50,dur:2,vol:.4,attack:.15}),this.tone(o,{type:"sawtooth",f0:78,f1:48,dur:2,vol:.35,attack:.2}),this.noise(o,{dur:1.8,vol:.4,type:"lowpass",f0:700,f1:200,attack:.1});break}case"clear":[0,3,7,12].forEach((o,c)=>this.tone(this.out({vol:1,wet:.8}),{type:"triangle",f0:293.7*2**(o/12),dur:1.2,vol:.12,delay:c*.1}));break;case"chest":[0,4,7,11,14].forEach((o,c)=>this.tone(this.out({vol:1,wet:.8}),{type:"sine",f0:659*2**(o/12),dur:.8,vol:.12,delay:c*.06}));break;case"loot":{let o=t.tier??0;[0,7,12,16,19].slice(0,2+o).forEach((c,l)=>this.tone(this.out({vol:1,wet:.7}),{type:"triangle",f0:587*2**(c/12),dur:.7,vol:.1,delay:l*.07}));break}case"levelup":[0,4,7,12,16,19,24].forEach((o,c)=>this.tone(this.out({vol:1,wet:.8}),{type:"triangle",f0:392*2**(o/12),dur:1.2,vol:.12,delay:c*.07}));break;case"ui":this.tone(a,{type:"sine",f0:800,f1:1e3,dur:.05,vol:.06});break;case"equip":this.noise(a,{dur:.12,vol:.2,f0:3e3,q:3}),this.tone(a,{type:"square",f0:300,f1:200,dur:.08,vol:.05});break;case"step":this.noise(a,{dur:.06,vol:.08,type:"lowpass",f0:600});break}}startMusic(){let e=this.ctx;this.pad=e.createGain(),this.pad.gain.value=0,this.padF=e.createBiquadFilter(),this.padF.type="lowpass",this.padF.frequency.value=700,this.pad.connect(this.padF).connect(this.music);let t=e.createGain();t.gain.value=.5,this.padF.connect(t).connect(this.reverb),this.voices=[];for(let r=0;r<3;r++)for(let a of[-9,0,9]){let o=e.createOscillator();o.type=r===0?"sawtooth":"triangle",o.detune.value=a;let c=e.createGain();c.gain.value=r===0?.03:.05,o.connect(c).connect(this.pad),o.start(),this.voices.push({o,i:r})}let n=e.createOscillator(),i=e.createGain();n.frequency.value=.06,i.gain.value=300,n.connect(i).connect(this.padF.frequency),n.start(),this.chord=0,this.step=0,this.next=e.currentTime+.1,setInterval(()=>this.schedule(),50),this.setMusic(this.mode)}setMusic(e){if(this.mode=e,!this.ctx||!this.pad)return;let t={menu:.5,explore:.45,combat:.4,boss:.45,victory:.6,silence:0}[e]??.4;this.pad.gain.setTargetAtTime(t,this.ctx.currentTime,1.2)}schedule(){let e=this.ctx;if(!e||e.state!=="running")return;let t=this.mode,i=60/(t==="boss"?132:t==="combat"?108:70)/4;for(;this.next<e.currentTime+.2;){let r=this.next,a=this.step++;if(a%(16*2)===0){this.chord=(this.chord+1)%Vd.length;let l=t==="victory"?[50,54,57]:Vd[this.chord];for(let h of this.voices)h.o.frequency.setTargetAtTime(vo(l[h.i]-12),r,.4)}let c=(t==="victory"?50:Vd[this.chord][0])-24;t==="combat"||t==="boss"?(a%4===0&&this.drum(r,"kick",t==="boss"?.55:.4),t==="boss"&&a%8===6&&this.drum(r,"kick",.35),a%8===4&&this.drum(r,"snare",t==="boss"?.22:.14),a%2===1&&this.drum(r,"hat",.03),a%2===0&&this.bass(r,vo(c+(a%8===6?7:0)),i*1.8,t==="boss"?.16:.12),t==="boss"&&a%32===0&&this.brass(r,vo(c+24),i*12),t==="boss"&&a%32===20&&this.brass(r,vo(c+27),i*8)):t!=="silence"&&(a%16===0&&Math.random()<.6&&this.bell(r,vo(62+_M[Math.random()*7|0]+(Math.random()<.3?12:0)),.045),a%64===0&&this.drum(r,"boom",.35)),this.next+=i}}bell(e,t,n){let i=this.ctx,r=i.createGain();r.gain.setValueAtTime(1e-4,e),r.gain.exponentialRampToValueAtTime(n,e+.01),r.gain.exponentialRampToValueAtTime(1e-4,e+3);for(let[o,c]of[[1,1],[2.76,.3],[5.4,.1]]){let l=i.createOscillator();l.frequency.value=t*o;let h=i.createGain();h.gain.value=c,l.connect(h).connect(r),l.start(e),l.stop(e+3.1)}r.connect(this.music);let a=i.createGain();a.gain.value=1,r.connect(a).connect(this.reverb)}bass(e,t,n,i){let r=this.ctx,a=r.createOscillator(),o=r.createGain(),c=r.createBiquadFilter();a.type="sawtooth",a.frequency.value=t,c.type="lowpass",c.frequency.value=380,c.Q.value=4,o.gain.setValueAtTime(1e-4,e),o.gain.exponentialRampToValueAtTime(i,e+.01),o.gain.exponentialRampToValueAtTime(1e-4,e+n),a.connect(c).connect(o).connect(this.music),a.start(e),a.stop(e+n+.05)}brass(e,t,n){let i=this.ctx,r=i.createGain(),a=i.createBiquadFilter();a.type="lowpass",a.frequency.setValueAtTime(400,e),a.frequency.linearRampToValueAtTime(2200,e+.15),a.frequency.linearRampToValueAtTime(900,e+n),r.gain.setValueAtTime(1e-4,e),r.gain.exponentialRampToValueAtTime(.09,e+.08),r.gain.exponentialRampToValueAtTime(1e-4,e+n);for(let c of[-10,0,10])for(let l of[1,1.5]){let h=i.createOscillator();h.type="sawtooth",h.frequency.value=t*l,h.detune.value=c,h.connect(a),h.start(e),h.stop(e+n+.1)}a.connect(r).connect(this.music);let o=i.createGain();o.gain.value=.6,r.connect(o).connect(this.reverb)}drum(e,t,n){let i=this.ctx;if(t==="kick"||t==="boom"){let c=i.createOscillator(),l=i.createGain();if(c.frequency.setValueAtTime(t==="boom"?60:120,e),c.frequency.exponentialRampToValueAtTime(t==="boom"?28:38,e+(t==="boom"?1:.18)),l.gain.setValueAtTime(n,e),l.gain.exponentialRampToValueAtTime(1e-4,e+(t==="boom"?1.6:.35)),c.connect(l).connect(this.music),c.start(e),c.stop(e+1.7),t==="boom"){let h=i.createGain();h.gain.value=.6,l.connect(h).connect(this.reverb)}return}let r=i.createBufferSource();r.buffer=this.noiseBuf;let a=i.createBiquadFilter();a.type=t==="hat"?"highpass":"bandpass",a.frequency.value=t==="hat"?8e3:1600;let o=i.createGain();if(o.gain.setValueAtTime(n,e),o.gain.exponentialRampToValueAtTime(1e-4,e+(t==="hat"?.04:.2)),r.connect(a).connect(o).connect(this.music),r.start(e,Math.random()),r.stop(e+.25),t==="snare"){let c=i.createGain();c.gain.value=.5,o.connect(c).connect(this.reverb)}}};var fh=class{constructor(e){this.keys=new Set,this.mouse={x:innerWidth/2,y:innerHeight/2,down:!1,right:!1},this.casts=[],this.dest=null,this.enabled=!1,this.onMoveOrder=null;let t={KeyQ:"q",KeyW:"w",KeyE:"e",KeyR:"r",Space:"dodge",KeyF:"potion",KeyI:"inventory",Tab:"inventory"};addEventListener("keydown",n=>{if(n.target instanceof HTMLInputElement||!this.enabled)return;let i=t[n.code];i&&!n.repeat&&(this.casts.push(i),i!=="inventory"&&i!=="potion"&&(this.dest=null)),this.keys.add(n.code),(["Space","Tab"].includes(n.code)||n.code.startsWith("Arrow"))&&n.preventDefault()}),addEventListener("keyup",n=>this.keys.delete(n.code)),addEventListener("blur",()=>{this.keys.clear(),this.mouse.down=this.mouse.right=!1}),addEventListener("mousemove",n=>{this.mouse.x=n.clientX,this.mouse.y=n.clientY}),e.addEventListener("mousedown",n=>{n.button===0&&(this.mouse.down=!0,this.dest=null),n.button===2&&(this.mouse.right=!0,this.clicked=!0)}),addEventListener("mouseup",n=>{n.button===0&&(this.mouse.down=!1),n.button===2&&(this.mouse.right=!1)}),e.addEventListener("contextmenu",n=>n.preventDefault())}sample(e,t){let n=this.keys,i=e.pick(this.mouse.x,this.mouse.y),r=(n.has("ArrowRight")?1:0)-(n.has("ArrowLeft")?1:0),a=(n.has("ArrowDown")?1:0)-(n.has("ArrowUp")?1:0);if((r||a)&&(this.dest=null),this.enabled&&this.mouse.right&&(this.dest={x:i.x,z:i.z},this.clicked&&(this.clicked=!1,this.onMoveOrder?.(i.x,i.z))),this.dest){let o=this.dest.x-t.x,c=this.dest.z-t.z,l=Math.hypot(o,c);l<.35?this.dest=null:(r=o/l,a=c/l)}return{mx:r,mz:a,ax:i.x,az:i.z,attack:this.enabled&&this.mouse.down}}takeCasts(){return this.casts.splice(0)}};ai();$i();ai();var Gd=[{id:"common",name:"\uC77C\uBC18",color:"#c9c4bd",weight:55,mult:1,affixes:1},{id:"uncommon",name:"\uACE0\uAE09",color:"#7ee07a",weight:28,mult:1.15,affixes:2},{id:"rare",name:"\uD76C\uADC0",color:"#5cb3ff",weight:12,mult:1.35,affixes:2},{id:"epic",name:"\uC601\uC6C5",color:"#c77dff",weight:4.5,mult:1.6,affixes:3},{id:"legendary",name:"\uC804\uC124",color:"#ff9a3c",weight:.5,mult:2,affixes:4}],yn=Object.fromEntries(Gd.map((s,e)=>[s.id,{...s,tier:e}])),oi={weapon:{name:"\uBB34\uAE30",main:"class",base:2.8},helm:{name:"\uD22C\uAD6C",main:"vit",base:1.2},armor:{name:"\uAC11\uC637",main:"vit",base:2.2},trinket:{name:"\uC7A5\uC2E0\uAD6C",main:"crit",base:.025}},Jr=Object.keys(oi),Wd={str:{name:ms.str,base:1.2,fmt:s=>`+${Math.round(s)}`},dex:{name:ms.dex,base:1.2,fmt:s=>`+${Math.round(s)}`},int:{name:ms.int,base:1.2,fmt:s=>`+${Math.round(s)}`},vit:{name:ms.vit,base:.9,fmt:s=>`+${Math.round(s)}`},atk:{name:"\uACF5\uACA9\uB825",base:6,fmt:s=>`+${Math.round(s)}`},hp:{name:"\uCD5C\uB300 \uC0DD\uBA85\uB825",base:45,fmt:s=>`+${Math.round(s)}`},crit:{name:"\uCE58\uBA85\uD0C0 \uD655\uB960",base:.015,fmt:s=>`+${(s*100).toFixed(1)}%`},critDmg:{name:"\uCE58\uBA85\uD0C0 \uD53C\uD574",base:.05,fmt:s=>`+${Math.round(s*100)}%`},haste:{name:"\uC2E0\uC18D(\uC7AC\uC0AC\uC6A9 \uB300\uAE30\uC2DC\uAC04 \uAC10\uC18C)",base:.015,fmt:s=>`+${(s*100).toFixed(1)}%`},def:{name:"\uBC29\uC5B4\uB825",base:8,fmt:s=>`+${Math.round(s)}`}},Gm=(s,e,t)=>`${s==="atk"&&t?Xr(t):Wd[s].name} ${Wd[s].fmt(e)}`,Vm={weapon:{knight:["\uAE30\uC0AC\uAC80","\uC218\uD638\uC790\uC758 \uAC80","\uB9F9\uC138\uC758 \uAC80"],barbarian:["\uC804\uC7C1\uB3C4\uB07C","\uD559\uC0B4\uC790\uC758 \uB3C4\uB07C","\uBD84\uC1C4\uC790"],mage:["\uB9C8\uB825 \uC9C0\uD321\uC774","\uC7BF\uBD88 \uC9C0\uD321\uC774","\uC11C\uB9AC \uD640"],rogue:["\uC30D\uB2E8\uAC80","\uADF8\uB9BC\uC790 \uC1A1\uACF3\uB2C8","\uB3C5\uC0AC\uC758 \uC774\uBE68"],archer:["\uC11D\uAD81","\uC7A5\uAD81","\uC0AC\uB0E5\uAFBC\uC758 \uD65C","\uB9E4\uC758 \uB208"]},helm:["\uD22C\uAD6C","\uAC00\uBA74","\uAD00"],armor:["\uD749\uAC11","\uAC11\uC8FC","\uC608\uBCF5"],trinket:["\uBC18\uC9C0","\uBD80\uC801","\uBAA9\uAC78\uC774"]},yM={common:["\uB0A1\uC740","\uD22C\uBC15\uD55C"],uncommon:["\uB2E8\uB2E8\uD55C","\uC5F0\uB9C8\uB41C"],rare:["\uB9DD\uC790\uC758","\uBB18\uC9C0\uAE30\uC758"],epic:["\uD574\uACE8\uC655\uC758","\uC800\uC8FC\uBC1B\uC740"],legendary:["\uC7BF\uBE5B \uC655\uAD00\uC758","\uC544\uB974\uCE74\uC2A4\uC758"]};function MM(s,e=0){let t=Gd.map((i,r)=>i.weight*(r===0?Math.max(.1,1-e):1+e*r*1.5)),n=s()*t.reduce((i,r)=>i+r,0);for(let i=0;i<t.length;i++)if(n-=t[i],n<=0)return Gd[i].id;return"common"}var SM=0;function Wm(s,{ilvl:e=1,rarity:t,slot:n,cls:i="knight",luck:r=0}={}){t=t||MM(s,r),n=n||Jr[Math.floor(s()*Jr.length)];let a=yn[t],o=oi[n],c=(1+e*.12)*a.mult,l=o.main==="class"?nt[i].main:o.main,h={[l]:o.base*c},u=["vit",nt[i].main,"crit","critDmg","haste","def"].filter(m=>m!==l);for(let m=0;m<a.affixes-1&&u.length;m++){let b=u.splice(Math.floor(s()*u.length),1)[0];h[b]=(h[b]||0)+Wd[b].base*c*(.7+s()*.6)}for(let m in h)h[m]=m==="crit"||m==="critDmg"||m==="haste"?Math.round(h[m]*1e3)/1e3:Math.max(1,Math.round(h[m]));let d=n==="weapon"?Vm.weapon[i]:Vm[n],f=`${yM[t][Math.floor(s()*2)]} ${d[Math.floor(s()*d.length)]}`;return{id:`${Date.now().toString(36)}${(SM++).toString(36)}${Math.floor(s()*1e6).toString(36)}`,slot:n,rarity:t,ilvl:e,name:f,stats:h}}ai();$i();var qd="ashen.profile.v1",Ks=20,Zr=36,Xd=12,Ki=s=>120+s*90,ph=s=>String(s??"").replace(/\s+/g," ").trim().slice(0,Xd);function Xm(s,e){return{cls:s,name:e,spec:At(s).id,level:1,xp:0,equipped:{weapon:null,helm:null,armor:null,trinket:null},bag:[]}}var _o=(s,e,t,n)=>Number.isFinite(+s)?Math.max(e,Math.min(t,Math.floor(+s))):n,TM=["current","chars","maxDifficulty","difficulty"];function qm(s,e){if(!s||typeof s!="object"||!oi[s.slot]||e&&s.slot!==e||!yn[s.rarity]||typeof s.stats!="object")return null;let t={};for(let[n,i]of Object.entries(s.stats))Number.isFinite(i)&&(t[n]=Math.max(0,Math.min(["crit","critDmg","haste"].includes(n)?1:5e3,i)));return{id:String(s.id).slice(0,40),slot:s.slot,rarity:s.rarity,ilvl:_o(s.ilvl,1,200,1),name:String(s.name||"").slice(0,40),stats:t}}function yo(s,e){let t=ph(e)||"\uBAA8\uD5D8\uAC00",n={chars:{}};for(let i of qn){let r=s?.chars?.[i]||{},a=Xm(i,ph(r.name)||t);a.spec=At(i,r.spec).id,a.level=_o(r.level,1,Ks,1),a.xp=_o(r.xp,0,1e7,0);for(let o of Jr)a.equipped[o]=qm(r.equipped?.[o],o);a.bag=(Array.isArray(r.bag)?r.bag:[]).slice(0,Zr).map(o=>qm(o)).filter(Boolean),n.chars[i]=a}return n.current=qn.includes(s?.current)?s.current:qn[0],n.maxDifficulty=_o(s?.maxDifficulty,1,ji,1),n.difficulty=_o(s?.difficulty,1,n.maxDifficulty,1),n}var jm=s=>Object.fromEntries(TM.map(e=>[e,s[e]]));function wM(){let s="\uBAA8\uD5D8\uAC00"+Math.floor(100+Math.random()*900);return{v:1,uid:EM(),name:s,current:"knight",chars:Object.fromEntries(qn.map(e=>[e,Xm(e,s)])),stats:{runs:0,clears:0,bestTime:0,kills:0},maxDifficulty:1,difficulty:1,settings:{master:.8,music:.5,sfx:.85,shake:!0,quality:2,numbers:!0,fps:!1,autoEquip:!0},seenTutorial:!1}}function $m(){let s;try{s=JSON.parse(localStorage.getItem(qd)||"null")}catch{s=null}let e=wM();return(!s||s.v!==1)&&(s=e),Object.assign(s,yo(s,ph(s.name)||e.name)),(typeof s.uid!="string"||s.uid.length<8)&&(s.uid=e.uid),s.settings={...e.settings,...s.settings},s.stats={...e.stats,...s.stats},Object.defineProperty(s,"character",{get(){return{...this.chars[this.current]}},enumerable:!1,configurable:!0}),s}function EM(){let s=new Uint8Array(12);return crypto.getRandomValues(s),Array.from(s,e=>e.toString(16).padStart(2,"0")).join("")}var Yi=null;function jd(s,e,t){Yi&&$d(s),Yi={local:jm(s),save:t},Object.assign(s,yo(e,vt(s).name))}function $d(s){if(!Yi)return;let{local:e}=Yi;Yi=null,Object.assign(s,e),$t(s)}var Ym=()=>!!Yi;function $t(s){if(Yi){Yi.save(jm(s));try{localStorage.setItem(qd,JSON.stringify({...s,...Yi.local}))}catch{}return}try{localStorage.setItem(qd,JSON.stringify(s))}catch{}}function vt(s){return s.chars[s.current]}function Km(s,e){let t=Math.min(ji,e+1);return t<=s.maxDifficulty?0:(s.maxDifficulty=t,t)}function Jm(s,e){let t=vt(s),n=ph(e);return n&&(t.name=n),t.name}function Zm(s,e){let t=vt(s);if(t.level>=Ks)return 0;t.xp+=e;let n=0;for(;t.level<Ks&&t.xp>=Ki(t.level);)t.xp-=Ki(t.level),t.level++,n++;return t.level>=Ks&&(t.xp=0),n}function Qm(s,e){let t=vt(s);return t.bag.length>=Zr?!1:(t.bag.push(e),!0)}function Mo(s,e){let t=vt(s),n=t.bag.findIndex(a=>a.id===e);if(n<0)return!1;let i=t.bag[n],r=t.equipped[i.slot];return t.bag.splice(n,1),r&&t.bag.push(r),t.equipped[i.slot]=i,!0}function eg(s,e){let t=vt(s),n=t.equipped[e];return!n||t.bag.length>=Zr?!1:(t.equipped[e]=null,t.bag.push(n),!0)}function tg(s,e){let t=vt(s);t.bag=t.bag.filter(n=>n.id!==e)}function Yd(s,e=null){let t={...s.equipped};return e&&(t[e.slot]=e),jr(s.cls,s.level,Object.values(t),s.spec)}var wi=(s,e=null)=>Fm(Yd(s,e));function ng(s,e){return wi(s,e)>wi(s)}function Kd(s){let e=vt(s),t=!1;for(let n=0;n<Zr;n++){let i=null,r=0,a=wi(e);for(let o of e.bag){let c=wi(e,o)-a;c>r&&(r=c,i=o)}if(!i)break;t=Mo(s,i.id)||t}return t}var AM={shieldDash:'<path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"/><path d="M2 12h3M1 16h4M2 8h3"/>',judgement:'<path d="M6 18L17 7l1-3-3 1L4 16z"/><path d="M4 21c3-1 6-1 9 0M3 18l3 3"/><path d="M18 14c2 1 3 3 3 5"/>',oath:'<path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"/><path d="M12 8v7M8.5 11.5h7"/>',smite:'<path d="M13 2L5 13h6l-2 9 9-12h-6z"/>',leap:'<path d="M4 20c2-8 6-13 12-15"/><path d="M13 4l4 1-1 4"/><path d="M3 21h10M5 18l-2 3M11 18l2 3"/>',whirl:'<path d="M20 12a8 8 0 1 1-3-6.2"/><path d="M17 3v3h-3"/><path d="M15 12a3 3 0 1 1-1-2.2"/>',shout:'<path d="M3 10v4h4l6 5V5L7 10z"/><path d="M16 9c1 1 1 5 0 6M19 6c2.5 3 2.5 9 0 12"/>',rage:'<circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M19 5l-3 3M8 16l-3 3"/>',flame:'<path d="M12 22c-4 0-7-3-7-7.5 0-3.5 2.2-5.6 3.5-8 .6 1.8 1.4 2.9 2.5 3.5C11 6.5 12 4 14.5 2c.3 3.2 1.8 5 3.2 7 .9 1.4 1.3 3 1.3 4.8C19 18.8 16 22 12 22z"/><path d="M12 22c-1.9 0-3.2-1.4-3.2-3.3 0-1.8 1.3-2.8 2-4.4.5 1 1 1.4 1.7 1.7.2-1.3.7-2.3 1.6-3 .5 1.6 1.9 2.8 1.9 4.9 0 2.4-1.6 4.1-4 4.1z"/>',chain:'<path d="M12 2L6.5 11H11l-3 6"/><path d="M8 17l-1.5 5"/><path d="M11 11l5.5-1-2.5 4.5 5 .5-4 7"/>',taunt:'<path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"/><path d="M12 8v5.5"/><path d="M12 16.5v.5"/>',holy:'<path d="M4 20L16 8"/><path d="M13 5h6v6"/><path d="M8 9L5 8M11 5.5L10.5 2.5M15 16l1 3M18.5 13l3 .5"/>',holyburst:'<path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.8 2.8M16.2 16.2L19 19M19 5l-2.8 2.8M7.8 16.2L5 19"/><path d="M10.5 9.5h3v3h-3z" transform="rotate(45 12 11)"/><path d="M12 9.5v5M9.5 12h5"/>',orb:'<circle cx="14" cy="12" r="5"/><path d="M14 9.5v5M11.5 12h5"/><path d="M2 9h5M3 12h5M2 15h5"/>',roar:'<path d="M4 8c2-3 5-4.5 8-4.5 4.5 0 8 3.5 8 8v1.5l-3 1v3l-3 1V21H9v-3.5c-3-1-5-4-5-7.5z"/><path d="M8.5 10.5h.01M12.5 10.5h.01"/><path d="M9 14.5c1.5 1 3 1 4.5 0"/>',iron:'<path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"/><path d="M8.5 9.5h7M8.5 13h7M12 6.5v10"/>',quake:'<path d="M2 18h20"/><path d="M5 18l2-4 2.5 2 2.5-5 2.5 4 2-2 2 5"/><path d="M12 3v5M9.5 5.5L12 8l2.5-2.5"/>',fan:'<path d="M12 21L5 6M12 21l-2.5-15.5M12 21V5M12 21l2.5-15.5M12 21l7-15"/><path d="M4 5h2M8.5 4.5h2M11 3.5h2M13.5 4.5h2M18 5h2"/>',venom:'<path d="M4 15c0-3 2.5-4 4-4 .5-3 3-5 5.5-5 3.5 0 5.5 2.5 5.5 5.5 1.5.5 2.5 2 2.5 3.5 0 2.5-2 4-4.5 4H7.5C5.5 19 4 17.5 4 15z"/><path d="M9 14.5h.01M13 13h.01M15.5 16h.01"/>',spring:'<ellipse cx="12" cy="18.5" rx="8.5" ry="2.8"/><path d="M12 15V4.5M8.5 8L12 4.5 15.5 8"/><path d="M6.5 11.5v2.5M17.5 11.5v2.5"/>',miracle:'<path d="M12 3l1.6 3.9 3.9 1.6-3.9 1.6L12 14l-1.6-3.9-3.9-1.6 3.9-1.6z"/><path d="M2.5 11.5c2 5 5.2 7.6 9.5 8.8 4.3-1.2 7.5-3.8 9.5-8.8"/><path d="M6 13.5c1.5 2.2 3.5 3.6 6 4.3 2.5-.7 4.5-2.1 6-4.3"/>',passive:'<path d="M12 2.5l2.6 6.9 6.9 2.6-6.9 2.6L12 21.5l-2.6-6.9L2.5 12l6.9-2.6z"/><circle cx="12" cy="12" r="1.6"/>',tree:'<circle cx="12" cy="4.5" r="2"/><circle cx="5.5" cy="19.5" r="2"/><circle cx="18.5" cy="19.5" r="2"/><path d="M12 6.5v5M12 11.5L6.3 17.8M12 11.5l5.7 6.3"/>',menu:'<path d="M4 6.5h16M4 12h16M4 17.5h16"/>',crossbow:'<path d="M5 19L18.5 5.5"/><path d="M7.5 4c5 .8 11.7 7.5 12.5 12.5"/><path d="M7.5 4L14 12.2 20 16.5"/><path d="M3.5 20.5l3-1 .5-2.5"/>',bow:'<path d="M7 3c6 2.5 9.5 6 9.5 9s-3.5 6.5-9.5 9"/><path d="M7 3v18"/><path d="M3 12h15"/><path d="M15.5 9.5L18 12l-2.5 2.5"/>',volley:'<path d="M3 7h13M3 12h15M3 17h13"/><path d="M13 4.5L16 7l-3 2.5M15 9.5l3 2.5-3 2.5M13 14.5l3 2.5-3 2.5"/>',storm:'<path d="M4 20L20 4M4 20l7-16M4 20l16-7M4 20l3-10M4 20l10-3"/><path d="M17 3.5L20 4l.5 3"/>',pierce:'<path d="M2.5 12h16"/><path d="M15 8l4.5 4-4.5 4"/><path d="M8 6.5v3M8 14.5v3M12 6.5v3M12 14.5v3"/>',arrows:'<path d="M6 3v9M12 5v11M18 3v9"/><path d="M4 10l2 2.5L8 10M10 14l2 2.5 2-2.5M16 10l2 2.5 2-2.5"/><path d="M3 21h18"/>',backstep:'<path d="M21 12H9"/><path d="M13 7l-5 5 5 5"/><path d="M3.5 17.5l2 2 2-2-2-2zM3.5 6.5l2 2 2-2-2-2z"/>',snipe:'<circle cx="12" cy="12" r="7"/><path d="M12 2.5v5M12 16.5v5M2.5 12h5M16.5 12h5"/><circle cx="12" cy="12" r="1.2"/>',sword:'<path d="M14.5 17.5L4 7V4h3l10.5 10.5"/><path d="M13 19l6-6"/><path d="M16 16l4 4"/><path d="M19 21l2-2"/>',axe:'<path d="M4 20L14.5 9.5"/><path d="M12.5 7.5c1.8-2.8 4.6-4.2 7.5-4 .2 2.9-1.2 5.7-4 7.5z"/><path d="M12.5 7.5l4 4"/>',staff:'<path d="M5 21L15.5 8.5"/><circle cx="17.5" cy="6" r="2.8"/><path d="M21.5 2.5l-1 1M13 2.5l.8.8M21.5 10l-.9-.5"/>',dagger:'<path d="M4 20l3.5-3.5"/><path d="M6 14.5L9.5 18"/><path d="M8 16l9-9 3.5-3.5-1 4.5-9 9"/>',helm:'<path d="M4.5 15v-3.5a7.5 7.5 0 0 1 15 0V15"/><path d="M4.5 15h15v4.5h-5l-1-2.5h-3l-1 2.5h-5z"/><path d="M12 4v6"/>',armor:'<path d="M8.5 3L4 6v6l3 1v8h10v-8l3-1V6l-4.5-3c-.8 1.8-2 2.8-3.5 2.8S9.3 4.8 8.5 3z"/><path d="M12 5.8V21M7 13h10"/>',trinket:'<path d="M6.5 3c.3 4.6 2.2 7.5 5.5 8.6 3.3-1.1 5.2-4 5.5-8.6"/><path d="M12 11.6l-3.2 4.2L12 21l3.2-5.2z"/>',frost:'<path d="M12 2v20M3.5 7l17 10M20.5 7l-17 10"/><path d="M9 4l3 3 3-3M9 20l3-3 3 3"/>',meteor:'<circle cx="15" cy="15" r="5"/><path d="M3 3l7.5 7.5M6 2l6 6M2 6l6 6"/>',shadowStab:'<path d="M3 21l10-10"/><path d="M13 11l7-7 1 1-7 7z"/><path d="M4 14h4M2 18h3"/>',blades:'<path d="M4 4l7 7M20 4l-7 7M4 20l7-7M20 20l-7-7"/><circle cx="12" cy="12" r="2"/>',smoke:'<path d="M6 18a4 4 0 0 1 0-8 5 5 0 0 1 9.5-1.5A4 4 0 1 1 18 18z"/><path d="M8 21h8"/>',execute:'<path d="M5 5l14 14M19 5L5 19"/><circle cx="12" cy="12" r="9"/>',dodge:'<path d="M4 18c4 0 5-12 12-12"/><path d="M13 3l3 3-3 3"/><path d="M3 21h6"/>',potion:'<path d="M9 3h6M10 3v5L6 15a4 4 0 0 0 3.5 6h5A4 4 0 0 0 18 15l-4-7V3"/><path d="M7 15h10"/>'},RM={kn_q:"shieldDash",kn_w:"judgement",kn_e:"oath",kn_r:"smite",bb_q:"leap",bb_w:"whirl",bb_e:"shout",bb_r:"rage",kn_taunt:"taunt",kn_holy:"holy",mg_q:"flame",mg_w:"frost",mg_chain:"chain",mg_r:"meteor",mg_holy:"holyburst",mg_spring:"spring",mg_orb:"orb",mg_miracle:"miracle",bb_roar:"roar",bb_iron:"iron",bb_quake:"quake",rg_fan:"fan",rg_venom:"venom",ar_q:"pierce",ar_w:"arrows",ar_e:"backstep",ar_r:"snipe",ab_q:"volley",ab_r:"storm",rg_q:"shadowStab",rg_w:"blades",rg_e:"smoke",rg_r:"execute",dodge:"dodge",potion:"potion"};function rn(s,e="currentColor"){return`<svg viewBox="0 0 24 24" fill="none" stroke="${e}" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${AM[RM[s]||s]||""}</svg>`}var Js={knight:"oath",barbarian:"rage",mage:"staff",rogue:"shadowStab",archer:"crossbow"},CM={knight:"sword",barbarian:"axe",mage:"staff",rogue:"dagger",archer:"crossbow"},mh=(s,e,t)=>s!=="weapon"?s:t==="ranger"?"bow":CM[e];Nt();var Wt=s=>String(s).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),qe=(s,e=document)=>e.querySelector(s),gh=class{constructor(e,{profile:t,engine:n,audio:i,onGear:r,onMenu:a}){this.profile=t,this.engine=n,this.audio=i,this.onGear=r,this.onMenu=a,this.cache={},this.root=document.createElement("div"),this.root.id="hud",this.root.className="hidden",this.root.innerHTML=`
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
      <div class="dmg-layer"></div>
      <div class="plates"></div>
      <div class="boss-intro"><div class="bi-title"></div><div class="bi-name"></div></div>
      <div class="h-menu">
        <button class="hbtn" data-hud="inv" title="\uC7A5\uBE44 (Tab)">${rn("armor")}<kbd>Tab</kbd></button>
        <button class="hbtn" data-hud="menu" title="\uBA54\uB274 (Esc)">${rn("menu")}<kbd>Esc</kbd></button>
      </div>
      <div class="inventory hidden"></div>`,e.appendChild(this.root),this.dmgLayer=qe(".dmg-layer",this.root),this.plates=qe(".plates",this.root),this.plateMap=new Map,this.nums=[],this.mini=qe(".minimap",this.root).getContext("2d"),this.v3=new I,this.buildSkills(),qe(".inventory",this.root).addEventListener("click",o=>this.onInvClick(o)),qe(".inventory",this.root).addEventListener("change",o=>{o.target.dataset.auto!==void 0&&this.setAutoEquip(o.target.checked)}),qe(".h-menu",this.root).addEventListener("click",o=>{let c=o.target.closest("[data-hud]");c&&(c.blur(),c.dataset.hud==="inv"?this.toggleInventory():this.onMenu?.())})}setAutoEquip(e){this.profile.settings.autoEquip=e,e&&Kd(this.profile)&&(this.audio.play("equip",{}),this.onGear?.()),$t(this.profile),this.renderInventory()}show(e){this.root.classList.toggle("hidden",!e),e&&(this.cache={},this.buildSkills())}set(e,t,n){this.cache[e]!==t&&(this.cache[e]=t,n(t))}buildSkills(){let e=vt(this.profile),t=nt[e.cls],n=At(e.cls,e.spec).skills,i=[...["q","w","e","r"].map(r=>({k:r,id:n[r],label:r.toUpperCase()})),{k:"dodge",id:"dodge",label:"SPC"},{k:"potion",id:"potion",label:"F"}];qe(".skills",this.root).innerHTML=i.map(r=>{let a=Pt[r.id],o=a?.name?`<div class="tip"><b>${a.name}</b><span>${a.desc}</span><em>\uC7AC\uC0AC\uC6A9 ${a.cd}\uCD08</em></div>`:r.k==="dodge"?'<div class="tip"><b>\uD68C\uD53C</b><span>\uC9E7\uC740 \uBB34\uC801 \uAD6C\uB974\uAE30</span></div>':'<div class="tip"><b>\uD68C\uBCF5 \uBB3C\uC57D</b><span>\uCD5C\uB300 \uC0DD\uBA85\uB825 35% \uD68C\uBCF5</span></div>';return`<div class="slot ${r.k==="r"?"ult":""} ${r.k==="dodge"||r.k==="potion"?"util":""}" data-k="${r.k}" style="--c:${t.trail}">${rn(r.id)}<div class="cd"></div><span class="cdt"></span><kbd>${r.label}</kbd>${r.k==="potion"?'<span class="charges"></span>':""}${o}</div>`}).join("")}flashSlot(e){let t=qe(`.slot[data-k="${e}"]`,this.root);t&&(t.classList.remove("deny"),t.offsetWidth,t.classList.add("deny"))}announce(e,t="#fff",n=2,i=!1,r=""){let a=qe(".announce",this.root);qe(".a-title",a).textContent=e,qe(".a-title",a).style.color=t,qe(".a-sub",a).textContent=r,a.classList.toggle("big",i),a.classList.remove("show"),a.offsetWidth,a.classList.add("show"),clearTimeout(this.annT),this.annT=setTimeout(()=>a.classList.remove("show"),n*1e3)}bossIntro(e,t){let n=qe(".boss-intro",this.root);qe(".bi-title",n).textContent=t,qe(".bi-name",n).textContent=e,n.classList.remove("show"),n.offsetWidth,n.classList.add("show"),setTimeout(()=>n.classList.remove("show"),3400)}damage(e,t,n,i,r={}){if(!this.profile.settings.numbers&&!r.taken)return;let a=document.createElement("div");a.className="dmg"+(r.crit?" crit":"")+(r.back?" back":"")+(r.taken?" taken":"")+(r.heal?" heal":"")+(r.blocked?" blocked":"")+(r.mine===!1?" other":""),a.innerHTML=r.text?`<span>${r.text}</span>`:`${r.back?"<small>\uBC31\uC5B4\uD0DD</small>":""}<span>${r.heal?"+":""}${i.toLocaleString()}</span>`,r.color&&(a.style.color=r.color),this.dmgLayer.appendChild(a),this.nums.push({el:a,x:e+(Math.random()-.5)*.8,y:t,z:n,t:0,life:r.crit?1.1:.85}),this.nums.length>60&&this.nums.shift().el.remove()}lootFeed(e,t,n=!1){let i=yn[e.rarity],r=document.createElement("div");r.className="loot r-"+e.rarity;let a=vt(this.profile);r.innerHTML=t?`<i class="lg" style="color:${i.color}">${rn(mh(e.slot,a.cls,a.spec))}</i><span class="lr" style="color:${i.color}">${i.name}</span> ${Wt(e.name)} <em>${oi[e.slot].name}${n?" \xB7 \uC790\uB3D9 \uC7A5\uCC29":""}</em>`:'<span style="color:#ff8a7a">\uAC00\uBC29\uC774 \uAC00\uB4DD \uCC28 \uD68D\uB4DD\uD558\uC9C0 \uBABB\uD568</span>';let o=qe(".loot-feed",this.root);for(o.prepend(r);o.children.length>6;)o.lastChild.remove();setTimeout(()=>r.classList.add("out"),5e3),setTimeout(()=>r.remove(),5600),i.tier>=3&&this.announce(`${i.name} \uC7A5\uBE44 \uD68D\uB4DD!`,i.color,1.8,!1,e.name)}update(e,t,n,i){let r=e.players.find(f=>f.id===t.localId),a=t.me(),o=e.rooms.findIndex(f=>f==="active"),c=e.rooms.findIndex(f=>f!=="cleared"),l=o>=0?jt[o].name:c>=0?`\uB2E4\uC74C: ${jt[c].name}`:"";this.set("room",e.boss&&!e.boss.dead?"":l,f=>{qe(".room-title",this.root).textContent=f}),this.set("diff",e.difficulty||1,f=>{qe(".diff-tag",this.root).innerHTML=`\uB09C\uC774\uB3C4 <b>${f}</b>`});let h=e.boss;if(this.set("bossOn",!!(h&&!h.dead),f=>qe(".boss",this.root).classList.toggle("hidden",!f)),h&&!h.dead){this.set("bossName",`${h.kind}:${h.enraged}`,()=>{let b=at[h.kind];qe(".bn",this.root).textContent=b.name,qe(".bt",this.root).textContent=h.enraged?"\uACA9\uB178":b.title,qe(".boss",this.root).classList.toggle("enraged",h.enraged)});let f=h.hp/h.maxHp;this.set("bossHp",`${h.id}:${Math.round(f*1e3)}`,()=>{let b=Math.round(f*1e3);qe(".boss-bar .hp",this.root).style.width=b/10+"%",qe(".bhp",this.root).textContent=`${h.hp.toLocaleString()} / ${h.maxHp.toLocaleString()}`,clearTimeout(this.lagT),this.lagT=setTimeout(()=>{let g=qe(".boss-bar .lag",this.root);g&&(g.style.width=b/10+"%")},450)});let m=h.gaugeMax>0;this.set("judge",m,b=>qe(".judge",this.root).classList.toggle("hidden",!b)),m&&(this.set("jg",Math.round(h.gauge/h.gaugeMax*200),b=>{qe(".jbar i",this.root).style.width=b/2+"%"}),this.set("jt",Math.ceil(h.judgeT),b=>{qe(".jt",this.root).textContent=`${b}\uCD08`}))}let u=e.players.map(f=>`${f.id}:${f.alive}:${Math.round(f.hp/f.maxHp*50)}:${Math.round((f.shield||0)/f.maxHp*50)}:${Math.round((f.revive||0)*4)}`).join("|");if(this.set("party",u,()=>{qe(".party",this.root).innerHTML=e.players.map(f=>{let m=nt[f.cls],b=Math.max(0,f.hp/f.maxHp)*100,g=Math.min(100,(f.shield||0)/f.maxHp*100);return`<div class="pf ${f.alive?"":"down"} ${f.id===t.localId?"me":""}"><div class="pic" style="--c:${m.trail}">${rn(Js[f.cls])}</div><div class="pinfo"><div class="pn">${Wt(f.name)} <em>Lv${f.level} ${At(f.cls,f.spec).name}</em></div><div class="pbar"><i class="hp" style="width:${b}%"></i><i class="sh" style="width:${g}%"></i></div>${f.alive?"":`<div class="rv">\uBD80\uD65C ${Math.round(f.revive/4*100)}%</div>`}</div></div>`}).join("")}),r&&this.set("hp",`${r.hp}/${r.maxHp}/${Math.round(r.shield||0)}`,()=>{qe(".hpbar .hp",this.root).style.width=Math.max(0,r.hp/r.maxHp*100)+"%",qe(".hpbar .sh",this.root).style.width=Math.min(100,(r.hp+(r.shield||0))/r.maxHp*100)+"%",qe(".hpbar b",this.root).textContent=`${r.hp.toLocaleString()} / ${r.maxHp.toLocaleString()}${r.shield>0?` (+${Math.round(r.shield)})`:""}`,qe(".hpbar",this.root).classList.toggle("low",r.hp/r.maxHp<.3)}),a){let f=vt(this.profile),m=At(f.cls,f.spec).skills;for(let b of["q","w","e","r","dodge","potion"]){let g=a.cds[b]||0,p=b==="dodge"?ch:b==="potion"?lh:Pt[m[b]].cd*(1-Math.min(.4,a.st?.haste||0)),v=Math.min(1,g/p);this.set("cd"+b,Math.round(v*60)+":"+Math.ceil(g),()=>{let _=qe(`.slot[data-k="${b}"]`,this.root);_&&(_.querySelector(".cd").style.background=v>0?`conic-gradient(rgba(5,5,10,.78) ${v*360}deg, transparent 0)`:"none",_.querySelector(".cdt").textContent=g>.05?g<1?g.toFixed(1):Math.ceil(g):"",_.classList.toggle("ready",g<=.05),g<=.05&&this.cache["was"+b]>.05&&(_.classList.remove("pop"),_.offsetWidth,_.classList.add("pop")),this.cache["was"+b]=g)})}this.set("pots",a.potions,b=>{let g=qe('.slot[data-k="potion"] .charges',this.root);g&&(g.textContent=b),qe('.slot[data-k="potion"]',this.root)?.classList.toggle("empty",b<=0)})}let d=vt(this.profile);this.set("xp",`${d.level}:${d.xp}`,()=>{qe(".xp i",this.root).style.width=Math.min(100,d.xp/Ki(d.level)*100)+"%",qe(".xp span",this.root).textContent=`Lv ${d.level}  \xB7  ${d.xp.toLocaleString()} / ${Ki(d.level).toLocaleString()}`}),this.updateNumbers(1/60),this.updatePlates(e,n,t),Math.floor(i*10)!==this.miniTick&&(this.miniTick=Math.floor(i*10),this.drawMinimap(e,t))}updateNumbers(e){let t=this.engine;for(let n=this.nums.length-1;n>=0;n--){let i=this.nums[n];if(i.t+=e,i.t>i.life){i.el.remove(),this.nums.splice(n,1);continue}this.v3.set(i.x,i.y+i.t*1.6,i.z);let r=t.toScreen(this.v3),a=i.t/i.life,o=i.t<.08?1+(.08-i.t)*8:1;i.el.style.transform=`translate(${r.x}px, ${r.y}px) translate(-50%, -50%) scale(${o})`,i.el.style.opacity=a>.7?(1-a)/.3:1}}updatePlates(e,t,n){let i=new Set,r=(a,o,c,l)=>{i.add(a);let h=this.plateMap.get(a);h||(h=document.createElement("div"),this.plates.appendChild(h),this.plateMap.set(a,h)),h._html!==c&&(h.innerHTML=c,h._html=c),h.className="plate "+l;let u=this.engine.toScreen(o);h.style.transform=`translate(${u.x}px, ${u.y}px) translate(-50%, -100%)`};for(let a of e.enemies){if(a.dead||at[a.kind].boss||a.act==="spawn"||!a.elite&&a.hp>=a.maxHp)continue;let o=t.eActors.get(a.id);if(!o)continue;this.v3.copy(o.headPos),this.v3.y+=.9*(a.elite?1.3:1);let c=Math.round(a.hp/a.maxHp*100);r("e"+a.id,this.v3,`${a.elite?`<div class="en">\uC815\uC608 ${at[a.kind].name}</div>`:""}<div class="eb"><i style="width:${c}%"></i></div>`,a.elite?"elite":"")}for(let a of e.players){if(a.id===n.localId)continue;let o=t.pActors.get(a.id);if(!o)continue;this.v3.copy(o.headPos),this.v3.y+=.8;let c=Math.round(a.hp/a.maxHp*100);r("p"+a.id,this.v3,`<div class="an">${Wt(a.name)}</div><div class="ab"><i style="width:${c}%"></i></div>`,"ally")}for(let[a,o]of this.plateMap)i.has(a)||(o.remove(),this.plateMap.delete(a))}drawMinimap(e,t){let n=this.mini,i=200,r=e.players.find(c=>c.id===t.localId);if(!r)return;let a=2.2;n.clearRect(0,0,i,i),n.save(),n.beginPath(),n.arc(i/2,i/2,i/2-2,0,Math.PI*2),n.clip(),n.fillStyle="rgba(8,8,14,0.78)",n.fillRect(0,0,i,i),n.translate(i/2-r.x*a,i/2-r.z*a);let o=4*a;for(let c=0;c<ho;c++)for(let l=0;l<Xi;l++){let h=uo[c][l];if(h===" ")continue;let u=jt.findIndex(f=>l>=f.x0&&l<=f.x1&&c>=f.z0&&c<=f.z1),d=u>=0?e.rooms[u]:"c";n.fillStyle=h===","?"#3a3528":d==="active"?"#5a2a26":d==="cleared"?"#4a4652":"#2c2a33",n.fillRect((l-.5)*o,(c-.5)*o,o+.5,o+.5)}for(let c of e.enemies)c.dead||(n.fillStyle=at[c.kind].boss?"#ff3050":c.elite?"#ff9a3c":"#e04a3a",n.beginPath(),n.arc(c.x*a,c.z*a,at[c.kind].boss?5:2.3,0,Math.PI*2),n.fill());for(let c of e.players)n.fillStyle=c.id===t.localId?"#ffe7a0":"#8fd0ff",n.beginPath(),n.arc(c.x*a,c.z*a,3.4,0,Math.PI*2),n.fill();n.restore(),n.strokeStyle="rgba(255,220,170,0.35)",n.lineWidth=2,n.beginPath(),n.arc(i/2,i/2,i/2-2,0,Math.PI*2),n.stroke()}toggleInventory(e){let t=qe(".inventory",this.root),n=e??t.classList.contains("hidden");t.classList.toggle("hidden",!n),n&&this.profile.settings.autoEquip&&Kd(this.profile)&&($t(this.profile),this.onGear?.()),n&&this.renderInventory(),this.audio.play("ui",{})}renderInventory(){let e=vt(this.profile),t=(n,i)=>{if(!n)return`<div class="islot empty">${i?`${rn(mh(i,e.cls,e.spec))}<span>${oi[i].name}</span>`:""}</div>`;let r=yn[n.rarity];return`<div class="islot r-${n.rarity}" data-id="${n.id}" ${i?`data-slot="${i}"`:""} style="--rc:${r.color}"><div class="ig">${rn(mh(n.slot,e.cls,e.spec),r.color)}</div><div class="il">${n.ilvl}</div>${this.tooltip(n,e)}</div>`};qe(".inventory",this.root).innerHTML=`
      <div class="inv-head"><h3>${Wt(e.name)} <em>Lv ${e.level} ${At(e.cls,e.spec).name}</em></h3><label class="switch" title="\uC0C8 \uC7A5\uBE44\uAC00 \uB354 \uAC15\uD558\uBA74 \uBC14\uB85C \uC7A5\uCC29"><input type="checkbox" data-auto ${this.profile.settings.autoEquip?"checked":""}><i></i>\uCD5C\uAC15 \uC7A5\uBE44 \uC790\uB3D9 \uC7A5\uCC29</label><div class="gs">\uC804\uD22C\uB825 <b>${wi(e)}</b></div><button class="x" data-act="close">\u2715</button></div>
      <div class="inv-body">
        <div class="equip">${Jr.map(n=>`<div class="eq"><label>${oi[n].name}</label>${t(e.equipped[n],n)}</div>`).join("")}</div>
        <div class="bag">${Array.from({length:Zr},(n,i)=>t(e.bag[i])).join("")}</div>
      </div>
      ${this.statSheet(e)}
      <p class="inv-hint">\uAC00\uBC29 \uC544\uC774\uD15C \uD074\uB9AD: \uC7A5\uCC29 \xB7 \uC7A5\uCC29 \uC544\uC774\uD15C \uD074\uB9AD: \uD574\uC81C \xB7 Shift+\uD074\uB9AD: \uBC84\uB9AC\uAE30</p>`}statSheet(e){let t=Yd(e),n={[t.main]:`${Xr(e.cls)} +${rh}`,vit:`\uC0DD\uBA85\uB825 +${ah}`,str:`\uBC29\uC5B4\uB825 +${zd}`,dex:`\uCE58\uBA85\uD0C0 +${(Od*100).toFixed(1)}%`},i=a=>`${(a*100).toFixed(1)}%`,r=[[Xr(e.cls),Math.round(t.atk)],["\uC0DD\uBA85\uB825",Math.round(t.hp).toLocaleString()],["\uBC29\uC5B4\uB825",Math.round(t.def)],["\uCE58\uBA85\uD0C0 \uD655\uB960",i(t.crit)],["\uCE58\uBA85\uD0C0 \uD53C\uD574",`${Math.round(t.critDmg*100)}%`],["\uC2E0\uC18D",i(t.haste||0)]];return`<div class="sheet">
      <div class="attrs">${Fd.map(a=>`<div class="at ${a===t.main?"main":""}" title="1\uB2F9 ${n[a]}"><span>${ms[a]}${a===t.main?"<i>\uC8FC\uC2A4\uD0EF</i>":""}</span><b>${t[a]}</b><em>1\uB2F9 ${n[a]}</em></div>`).join("")}</div>
      <div class="derived">${r.map(([a,o])=>`<div><span>${a}</span><b>${o}</b></div>`).join("")}</div>
    </div>`}tooltip(e,t){let n=yn[e.rarity],r=t.equipped[e.slot]?.id===e.id?null:wi(t,e)-wi(t),a=nt[t.cls].main,o=(c,l)=>c===a?` <em>(${Xr(t.cls)} +${Math.round(l)*rh})</em>`:c==="vit"?` <em>(\uC0DD\uBA85\uB825 +${Math.round(l)*ah})</em>`:"";return`<div class="itip" style="--rc:${n.color}"><b style="color:${n.color}">${Wt(e.name)}</b><div class="im">${n.name} ${oi[e.slot].name} \xB7 \uC544\uC774\uD15C \uB808\uBCA8 ${e.ilvl}</div><ul>${Object.entries(e.stats).map(([c,l])=>`<li>${Gm(c,l,t.cls)}${o(c,l)}</li>`).join("")}</ul>${r!==null?`<div class="cmp ${r>=0?"up":"down"}">\uC7A5\uCC29\uD558\uBA74 \uC804\uD22C\uB825 ${r>=0?"+":""}${r}</div>`:""}</div>`}onInvClick(e){if(e.target.closest('[data-act="close"]'))return this.toggleInventory(!1);let t=e.target.closest(".islot[data-id]");if(!t)return;let n=this.profile;e.shiftKey&&!t.dataset.slot?tg(n,t.dataset.id):t.dataset.slot?eg(n,t.dataset.slot):Mo(n,t.dataset.id),$t(n),this.audio.play("equip",{}),this.onGear?.(),this.renderInventory()}};Nt();ai();var IM=5,bh=class{constructor({onSend:e}){this.onSend=e,this.mode=null,this.el=document.createElement("div"),this.el.className="chat hidden",this.el.innerHTML='<div class="chat-log"></div><form class="chat-form"><input class="chat-in" maxlength="100" placeholder="Enter \uD0A4\uB85C \uB300\uD654" autocomplete="off" spellcheck="false" /></form>',this.log=this.el.querySelector(".chat-log"),this.inp=this.el.querySelector(".chat-in"),this.over=document.createElement("div"),this.over.className="overhead",document.body.appendChild(this.over),this.bubbles=new Map,this.tags=new Map,this.v3=new I,this.el.querySelector("form").addEventListener("submit",t=>{t.preventDefault();let n=this.inp.value.trim();this.inp.value="",n&&this.onSend(n),this.mode==="play"&&this.inp.blur()}),this.inp.addEventListener("keydown",t=>{t.code==="Escape"&&(this.inp.blur(),t.stopPropagation())}),this.inp.addEventListener("focus",()=>this.el.classList.add("open")),this.inp.addEventListener("blur",()=>this.el.classList.remove("open")),addEventListener("keydown",t=>{t.code!=="Enter"||!this.mode||t.target instanceof HTMLInputElement||(t.preventDefault(),this.inp.focus())})}mount(e,t){this.mode=t,e.appendChild(this.el),this.el.className=`chat ${t}`,this.log.scrollTop=this.log.scrollHeight}close(){this.mode=null,this.inp.blur(),this.el.remove(),this.log.innerHTML="";for(let e of this.bubbles.values())e.el.remove();this.bubbles.clear();for(let e of this.tags.values())e.remove();this.tags.clear()}add(e,t){let n=document.createElement("div");for(n.className="cl"+(e.sys?" sys":"")+(e.id===t?" me":""),e.sys?n.textContent=e.text:n.innerHTML=`<b style="--c:${nt[e.cls]?.trail||"#e3b866"}">${Wt(e.name)}</b><span>${Wt(e.text)}</span>`,this.log.appendChild(n);this.log.children.length>80;)this.log.firstChild.remove();this.log.scrollTop=this.log.scrollHeight,e.sys||this.bubble(e.id,e.text)}bubble(e,t){let n=this.bubbles.get(e);n||(n={el:document.createElement("div")},n.el.className="bubble",this.over.appendChild(n.el),this.bubbles.set(e,n)),n.el.textContent=t,n.t=IM}place(e,t,n,i){this.v3.copy(t.headPos),this.v3.y+=n;let r=i.toScreen(this.v3);e.style.transform=`translate(${r.x}px, ${r.y}px) translate(-50%, -100%)`}tagNames(e,t){let n=new Set;for(let i of e){n.add(i.id);let r=this.tags.get(i.id);r||(r=document.createElement("div"),r.className="tagname",r.style.setProperty("--c",nt[i.cls]?.trail||"#e3b866"),this.over.appendChild(r),this.tags.set(i.id,r)),r.textContent!==i.name&&(r.textContent=i.name),r.classList.toggle("me",!!i.me),this.place(r,i.actor,1.05,t)}for(let[i,r]of this.tags)n.has(i)||(r.remove(),this.tags.delete(i))}update(e,t,n,i,r){if(!this.mode)return;let a=this.mode==="lobby";if(a){let o=[];for(let c of t){let l=n.get(c.id);l&&o.push({id:c.id,name:c.name,cls:c.cls,actor:l,me:c.id===r})}this.tagNames(o,i)}for(let[o,c]of this.bubbles){c.t-=e;let l=n.get(o);if(c.t<=0||!l){c.el.remove(),this.bubbles.delete(o);continue}this.place(c.el,l,a?1.75:1.5,i),c.el.style.opacity=c.t<.4?c.t/.4:1}}};Nt();uh();ai();$i();var xh=(s,e)=>s+Math.random()*(e-s);function ig(s,e){let{vfx:t,engine:n,audio:i,hud:r}=s,a=s.session.localId,o=s.listener(),c=(l,h)=>({x:l,z:h,L:o});switch(e.k){case"act":{let l=s.pActors.get(e.id),h=Pt[e.a];if(e.a==="dodge"){i.play("dodge",c(l?.root.position.x??0,l?.root.position.z??0));break}if(e.a==="potion"){i.play("potion",{});break}h?.name&&i.play("skill",c(l?.root.position.x??0,l?.root.position.z??0)),(e.a==="kn_e"||e.a==="bb_e"||e.a==="kn_taunt")&&i.play("shout",{}),(e.a==="mg_r"||e.a==="kn_r"||e.a==="mg_miracle")&&i.play("charge",{});break}case"swing":{let l=e.team==="player"?PM(s,e.id):"#ff5a3a",h=1.1;switch(e.fx){case"slash":t.arc(e.x,h,e.z,e.dir,3.1,2.3,l,{reverse:Math.random()<.5}),i.play("swing",c(e.x,e.z));break;case"smash":t.arc(e.x,h+.2,e.z,e.dir,3.4,1.6,l,{tilt:1.2,life:.3}),t.spark(e.x+Math.cos(e.dir)*2.4,.2,e.z+Math.sin(e.dir)*2.4,{n:14,color:"#d8c7a8",speed:5,normal:!0,bright:1,size:.25}),i.play("swingHeavy",c(e.x,e.z));break;case"thrust":t.arc(e.x,h,e.z,e.dir,4,.35,l,{life:.22}),i.play("swing",c(e.x,e.z));break;case"snipe":{t.arc(e.x,1.2,e.z,e.dir,20,.12,"#d8ffb0",{life:.35});for(let u=1;u<20;u+=1.2)t.spark(e.x+Math.cos(e.dir)*u,1.2,e.z+Math.sin(e.dir)*u,{n:2,color:"#e8ffc8",speed:2,size:.14,grav:0,life:.35});t.flash(e.x+Math.cos(e.dir)*1.5,1.3,e.z+Math.sin(e.dir)*1.5,"#d8ffb0",50,10),n.addShake(.35),i.play("bow",c(e.x,e.z)),i.play("impactHeavy",c(e.x,e.z));break}case"bash":t.spark(e.x,1,e.z,{n:3,color:"#fff2c0",speed:4,size:.18});break;case"holy":{t.arc(e.x,1.1,e.z,e.dir,8.5,.32,"#ffe27a",{life:.32});for(let u=1;u<8.5;u+=.9)t.spark(e.x+Math.cos(e.dir)*u,1,e.z+Math.sin(e.dir)*u,{n:3,color:"#fff0b0",speed:3,up:2,size:.18,grav:0,life:.45});t.flash(e.x+Math.cos(e.dir)*3,1.3,e.z+Math.sin(e.dir)*3,"#ffe08a",40,10),n.addShake(.2),i.play("swingHeavy",c(e.x,e.z));break}case"judgement":{t.arc(e.x,.3,e.z,e.dir,4.6,1.9,"#ffd66e",{life:.45});let u=e.x+Math.cos(e.dir)*2.6,d=e.z+Math.sin(e.dir)*2.6;t.ring(u,d,4,"#ffcf6a",.45),t.flash(u,1.5,d,"#ffd27a",40,12),t.spark(u,.2,d,{n:30,color:"#ffe3a0",speed:9,size:.2}),n.addShake(.35),i.play("impactHeavy",c(e.x,e.z));break}case"quake":case"rage":{let u=e.fx==="rage"?"#ff4a2a":"#ffae5c";t.ring(e.x,e.z,e.fx==="rage"?6.5:4,u,.5,.4),t.ring(e.x,e.z,e.fx==="rage"?8:5,"#fff0d0",.35),t.smoke(e.x,.3,e.z,{n:14,speed:5,size:1.6,jitter:1}),t.spark(e.x,.3,e.z,{n:36,color:u,speed:11,size:.22}),t.flash(e.x,1.2,e.z,u,50,14),n.addShake(e.fx==="rage"?.8:.5),i.play("impactHeavy",c(e.x,e.z));break}case"spin":t.arc(e.x,1,e.z,Math.random()*6.28,3.2,6.1,l,{life:.24}),i.play("swing",c(e.x,e.z));break;case"blades":t.arc(e.x,1+xh(-.3,.3),e.z,Math.random()*6.28,3.3,3.5,"#c9a0ff",{life:.2,tilt:xh(-.4,.4)}),i.play("swing",c(e.x,e.z));break;case"shadow":t.spark(e.x,1,e.z,{n:3,color:"#a070ff",speed:1,size:.5,life:.4,grav:0});break;case"execute":{t.arc(e.x,1.2,e.z,e.dir+.5,3.4,.9,"#ff3050",{life:.35}),t.arc(e.x,1.2,e.z,e.dir-.5,3.4,.9,"#ff3050",{life:.35,reverse:!0}),t.flash(e.x,1.2,e.z,"#ff2040",30,8),n.addShake(.3),i.play("impactHeavy",c(e.x,e.z));break}case"kingSmash":case"kingQuake":case"kingSpin":case"kingRing":{let u=e.fx==="kingRing"?16:e.fx==="kingSpin"?7.6:6.5,d=e.fx==="kingSmash"?e.x+Math.cos(e.dir)*5:e.x,f=e.fx==="kingSmash"?e.z+Math.sin(e.dir)*5:e.z;t.ring(d,f,u,"#ff5530",.6,.5),t.ring(d,f,u*.6,"#ffd0a0",.4),t.smoke(d,.4,f,{n:24,speed:7,size:2.2,jitter:2,alpha:.6}),t.spark(d,.3,f,{n:60,color:"#ff8a4a",speed:14,size:.26}),t.flash(d,2,f,"#ff6a3a",80,20,.3),n.addShake(1),i.play("bossSlam",c(d,f));break}default:e.team!=="player"&&(t.arc(e.x,1.1,e.z,e.dir,2.6,1.8,"#ff5a3a"),i.play("swing",c(e.x,e.z)))}break}case"dmg":{let l=s.eActors.get(e.tid);l&&(l.flash(),e.by===a&&(l.hitstop=e.crit?.07:.045));let h=s.pActors.get(e.by);h&&e.by===a&&(h.hitstop=e.crit?.07:.045,n.addShake(e.crit?.18:.08));let u=l?l.headPos.y+.6:2.4;t.spark(e.x,1.2,e.z,{n:e.crit?12:6,color:e.blocked?"#9fd0ff":e.crit?"#fff0a0":"#ffc27a",speed:e.crit?9:6,size:.14,life:.35}),(e.by===a||e.crit)&&r.damage(e.x,u,e.z,e.v,{crit:e.crit,back:e.back,blocked:e.blocked,mine:e.by===a}),i.play(e.blocked?"block":e.crit?"hitCrit":"hit",c(e.x,e.z));break}case"counter":{t.ring(e.x,e.z,5,"#6ec3ff",.6,.5),t.flash(e.x,2,e.z,"#8fd0ff",60,14),t.spark(e.x,2,e.z,{n:40,color:"#bfe4ff",speed:12,size:.2}),r.announce("\uCE74\uC6B4\uD130!","#8fd0ff",1.1,!0),n.addShake(.5),i.play("counter",{});break}case"counterable":{let l=s.eActors.get(e.id);l&&(l.counterGlow=e.dur),i.play("counterTell",{});break}case"kill":{let l=at[e.kind];t.spark(e.x,1,e.z,{n:20,color:"#d9d2c4",speed:5,normal:!0,bright:.9,size:.18,floor:!0,grav:-12,life:1.2}),t.spark(e.x,1.4,e.z,{n:14,color:"#7fe8ff",speed:3,size:.2,life:.8,grav:1}),e.xp&&s.onXp(e.xp),i.play(l.boss?"bossDie":"bones",c(e.x,e.z));break}case"espawn":{if(at[e.kind].boss)break;t.smoke(e.x,.2,e.z,{n:6,color:"#2a2a2a",speed:1.5,size:1.1,alpha:.5}),t.spark(e.x,.3,e.z,{n:10,color:"#6fe0ff",speed:2,up:3,size:.16,life:.9,grav:0}),i.play("spawn",c(e.x,e.z));break}case"phurt":{s.pActors.get(e.id)?.flash(),e.id===a&&(n.addShake(.35),s.hurt=Math.min(1,s.hurt+.5),i.play("hurt",{}),r.damage(e.x,2.6,e.z,e.v,{taken:!0}));break}case"evade":e.id===a&&r.damage(e.x,2.6,e.z,0,{text:"\uD68C\uD53C",color:"#9fdcff"});break;case"shieldhit":e.id===a&&i.play("block",{});break;case"kb":break;case"pdown":{t.ring(e.x,e.z,3,"#ff3a3a",.8),r.announce(e.id===a?"\uC4F0\uB7EC\uC84C\uC2B5\uB2C8\uB2E4":`${s.nameOf(e.id)} \uC4F0\uB7EC\uC9D0`,"#ff7a7a",2,!1,e.id===a?s.soloFeathers()?"F: \uBD80\uD65C\uC758 \uAE43\uD138 \uC0AC\uC6A9":"\uB3D9\uB8CC\uAC00 \uACC1\uC5D0 \uC640\uC57C \uBD80\uD65C\uD569\uB2C8\uB2E4":"\uACC1\uC5D0 \uC11C \uC788\uC73C\uBA74 \uBD80\uD65C \uAC8C\uC774\uC9C0\uAC00 \uC313\uC785\uB2C8\uB2E4 (\uCD1D 4\uCD08)"),i.play("down",{});break}case"previve":t.beam(e.x,e.z,"#ffe7a0",8,1.6,1.2),t.spark(e.x,.5,e.z,{n:40,color:"#ffe7a0",speed:4,up:6,size:.18,grav:0}),i.play("revive",{});break;case"heal":{let l=s.pActors.get(e.id)?.root.position;if(!l)break;t.spark(l.x,1,l.z,{n:20,color:"#7dffb0",speed:2,up:3,size:.15,grav:1}),(e.id===a||e.by===a)&&r.damage(l.x,2.6,l.z,e.v,{heal:!0,mine:!0});break}case"taunt":{t.ring(e.x,e.z,e.r,"#ffcf6a",.6,.35),t.ring(e.x,e.z,e.r*.5,"#fff0c0",.4),t.flash(e.x,1.5,e.z,"#ffd27a",40,10),n.addShake(.25);break}case"chain":{for(let u=1;u<e.pts.length;u++){let[d,f]=e.pts[u-1],[m,b]=e.pts[u];t.zap(d,u===1?1.6:1.1,f,m,1.1,b,"#bfe4ff"),(u>1||e.pts.length===2)&&t.spark(m,1.1,b,{n:10,color:"#d8f0ff",speed:6,size:.14,life:.3})}let[l,h]=e.pts[1];t.flash(l,1.5,h,"#9fd0ff",40,10),i.play("thunder",c(l,h));break}case"miracle":{t.ring(e.x,e.z,e.r,"#7dffb0",.9,.35),t.ring(e.x,e.z,e.r*.55,"#e8fff0",.6),t.beam(e.x,e.z,"#b8ffd0",12,2.4,1.2),t.flash(e.x,3,e.z,"#9fffc0",90,20,.3),t.spark(e.x,.5,e.z,{n:60,color:"#b8ffd0",speed:5,up:8,size:.18,grav:0}),i.play("revive",{});break}case"buff":{let h=s.pActors.get(e.id)?.root.position;if(!h)break;e.kind==="shield"?(t.ring(h.x,h.z,2,"#ffd98a",.6),t.spark(h.x,1,h.z,{n:16,color:"#ffe7a0",speed:2,up:2,size:.15})):e.kind==="guard"?(t.ring(h.x,h.z,2.4,"#ffcf6a",.6,.4),t.spark(h.x,1.2,h.z,{n:20,color:"#ffe0a0",speed:3,up:1,size:.16})):(t.ring(h.x,h.z,3,"#ff5a3a",.5),t.flash(h.x,1.5,h.z,"#ff4a2a",30,8));break}case"smoke":t.smoke(e.x,.5,e.z,{n:40,color:"#3a3448",speed:4,size:2.2,jitter:2,alpha:.7,life:2}),i.play("smoke",c(e.x,e.z));break;case"shoot":i.play(["arrow","shot","pierce","arrowb"].includes(e.kind)?"bow":"cast",c(s.eActors.get(e.id)?.root.position.x??s.pActors.get(e.id)?.root.position.x??0,0));break;case"explode":{t.ring(e.x,e.z,e.r,"#ff7a2a",.45,.4),t.flash(e.x,1,e.z,"#ff8a3a",50,12),t.spark(e.x,.8,e.z,{n:36,color:"#ffb05a",speed:9,size:.3}),t.smoke(e.x,.8,e.z,{n:10,speed:3}),n.addShake(.25),i.play("explode",c(e.x,e.z));break}case"phit":t.spark(e.x,1,e.z,{n:8,color:e.kind==="bolt"?"#9fd8ff":"#ffcf8a",speed:5,size:.15});break;case"zonefire":{e.fx==="lightning"?(t.bolt(e.x,e.z,"#cfe8ff"),t.bolt(e.x+xh(-1.5,1.5),e.z+xh(-1.5,1.5),"#9fd0ff"),t.ring(e.x,e.z,e.r,"#bfe4ff",.5,.5),t.flash(e.x,3,e.z,"#bfe4ff",120,24,.25),t.spark(e.x,.3,e.z,{n:50,color:"#d8f0ff",speed:12,size:.2}),n.addShake(.8),i.play("thunder",c(e.x,e.z))):e.fx==="meteor"?s.meteorImpact(e.x,e.z,e.r):e.fx==="soulburst"?(t.spark(e.x,.3,e.z,{n:30,color:"#5ff0c0",speed:6,up:5,size:.3,grav:1}),t.ring(e.x,e.z,e.r,"#3fffc0",.4),t.flash(e.x,1,e.z,"#3fffc0",30,8),i.play("soul",c(e.x,e.z))):e.fx==="frost"?i.play("frost",c(e.x,e.z)):e.fx==="holyburst"?(t.ring(e.x,e.z,e.r,"#ffe7a0",.45,.4),t.beam(e.x,e.z,"#fff0c0",8,2,.5),t.flash(e.x,1.5,e.z,"#ffe8a8",60,14),t.spark(e.x,.4,e.z,{n:30,color:"#fff0c0",speed:8,size:.2}),t.spark(e.x,.3,e.z,{n:14,color:"#b8ffd0",speed:2,up:4,size:.14,grav:0,life:.8}),n.addShake(.2),i.play("impactHeavy",c(e.x,e.z))):e.fx==="poison"?(t.smoke(e.x,.6,e.z,{n:30,color:"#4a6a2a",speed:3,size:2.4,jitter:2.5,alpha:.6,life:2.2}),i.play("smoke",c(e.x,e.z))):(e.fx==="heal"||e.fx==="spring")&&(t.ring(e.x,e.z,e.r,"#7dffb0",.5,.3),t.spark(e.x,.3,e.z,{n:e.fx==="heal"?36:18,color:"#b8ffd0",speed:3,up:5,size:.16,grav:0,life:.9}),e.fx==="heal"&&t.beam(e.x,e.z,"#b8ffd0",7,1.6,.6),i.play("potion",{}));break}case"summon":t.ring(e.x,e.z,6,"#5fe0ff",1,.3),i.play("summon",c(e.x,e.z));break;case"room":{e.state==="active"?(r.announce(e.name,"#e8d9c0",2.6,!1,e.i===4?"":"\uBAA8\uB4E0 \uC801\uC744 \uCC98\uCE58\uD558\uC138\uC694"),i.play(e.i===4?"bossDoor":"seal",{}),e.i!==4&&i.setMusic("combat")):(r.announce("\uC815\uD654 \uC644\uB8CC","#ffe3a8",2,!1,"\uBD09\uC778\uC774 \uD480\uB838\uC2B5\uB2C8\uB2E4"),i.play("clear",{}),i.setMusic("explore"));break}case"wave":e.n>1&&r.announce(`\uC99D\uC6D0 ${e.n}/${e.of}`,"#ff9a7a",1.4);break;case"chest":t.beam(e.x,e.z,"#ffd27a",10,2.2,1.4),t.spark(e.x,1,e.z,{n:60,color:"#ffd27a",speed:6,up:8,size:.16,grav:-8,floor:!0}),i.play("chest",c(e.x,e.z));break;case"loot":s.onLoot(e.item);break;case"boss":s.onBoss(e);break;case"victory":i.setMusic("victory");break;case"wipe":i.setMusic("silence"),r.announce("\uC804\uBA78","#ff5a5a",3,!1,"\uD30C\uD2F0\uAC00 \uBAA8\uB450 \uC4F0\uB7EC\uC84C\uC2B5\uB2C8\uB2E4");break;case"start":i.setMusic("explore");break}}function PM(s,e){let t=s.lastView?.players.find(n=>n.id===e);return t?nt[t.cls].trail:"#ffd98a"}ai();$i();var kM=new Ls(1,12,10),LM=new ks(.28),Jd=s=>Math.PI/2-s,vh=class{constructor({engine:e,assets:t,vfx:n,level:i,audio:r,hud:a,input:o,profile:c,onEnd:l}){Object.assign(this,{engine:e,assets:t,vfx:n,level:i,audio:r,hud:a,input:o,profile:c,onEnd:l}),this.pActors=new Map,this.eActors=new Map,this.projs=new Map,this.drops=new Map,this.chests=new Map,this.hurt=0,this.session=null,this.lastView=null,this.runXp=0,this.runLoot=[],this.levelsGained=0,this.ended=!1,this.pool=new Map}prewarmPool(e={minion:14,warrior:8,archer:6,mage:6,priest:1,warden:1,king:1}){let t=[],n=(i,r,a)=>{let o=`${i}|${r}`,c=this.pool.get(o)||[];for(let l=0;l<a;l++){let h=hh(this.assets,i,r);h.animate({moving:!1},.016,h.cfg),h.root.position.set(vn.x+l%6-3,0,vn.z-3-Math.floor(l/6)),this.engine.scene.add(h.root),t.push(h),c.push(h)}this.pool.set(o,c)};for(let[i,r]of Object.entries(e))n(i,!1,r);return n("warrior",!0,1),n("mage",!0,1),()=>{for(let i of t)this.engine.scene.remove(i.root)}}acquireEnemy(e,t){let n=this.pool.get(`${e}|${!!t}`),i=n&&n.length?n.pop():hh(this.assets,e,t);return i.reset(),i.poolKey=`${e}|${!!t}`,i}releaseEnemy(e){this.engine.scene.remove(e.root),e.crownFire&&(e.crownFire.dead=!0,e.crownFire=null),this.pool.has(e.poolKey)||this.pool.set(e.poolKey,[]),this.pool.get(e.poolKey).push(e)}start(e){this.session=e,this.ended=!1,this.runXp=0,this.runLoot=[],this.levelsGained=0,this.startedAt=performance.now(),this.engine.snap(vn.x,vn.z),this.hud.show(!0),this.input.enabled=!0}startLobby(e){this.session=e,this.lastView=null,this.input.dest=null,this.input.enabled=!0}lobbyFrame(e){let t=this.session,n=this.input.sample(this.engine,t.self()||vn);this.input.takeCasts(),t.update(e,{...n,attack:!1});let i=t.view();return i?(this.lastView=i,this.syncPlayers(i,e),i.players.find(r=>r.id===t.localId)||null):null}stop(){for(let e of this.pActors.values())this.engine.scene.remove(e.root);this.pActors.clear();for(let e of this.eActors.values())this.releaseEnemy(e);this.eActors.clear();for(let e of[this.projs,this.drops,this.chests]){for(let t of e.values())this.engine.scene.remove(t.obj),t.emitter&&(t.emitter.dead=!0);e.clear()}this.vfx.sweepDecals(),this.vfx.sweepDecals(),this.session=null,this.lastView=null,this.hurt=0,this.engine.grade.uniforms.uHurt.value=0,this.engine.grade.uniforms.uDesat.value=0,this.hud.show(!1),this.input.enabled=!1}listener(){let e=this.session?.self();return e?{x:e.x,z:e.z}:{x:0,z:0}}self(){return this.session.self()}nameOf(e){return this.lastView?.players.find(t=>t.id===e)?.name||"\uB3D9\uB8CC"}soloFeathers(){return(this.session.me()?.feathers??0)>0}onXp(e){this.runXp+=e;let t=Zm(this.profile,e);if(t>0){this.levelsGained+=t;let n=vt(this.profile);this.hud.announce(`\uB808\uBCA8 ${n.level}`,"#ffe38a",2,!0,"\uB2A5\uB825\uCE58\uAC00 \uC0C1\uC2B9\uD588\uC2B5\uB2C8\uB2E4"),this.audio.play("levelup",{});let i=this.self();this.vfx.beam(i.x,i.z,"#ffe38a",9,2,1.4),this.vfx.spark(i.x,.5,i.z,{n:50,color:"#ffe38a",speed:3,up:7,size:.16,grav:0}),this.pushGear()}$t(this.profile)}onLoot(e){let t=Qm(this.profile,e),n=yn[e.rarity],i=t&&this.profile.settings.autoEquip&&ng(vt(this.profile),e)&&Mo(this.profile,e.id);i&&(this.pushGear(),this.audio.play("equip",{})),this.hud.root.querySelector(".inventory").classList.contains("hidden")||this.hud.renderInventory(),this.hud.lootFeed(e,t,i),this.audio.play("loot",{tier:n.tier}),t&&this.runLoot.push(e),$t(this.profile)}pushGear(){let e=vt(this.profile);this.session.setGear(e.level,Object.values(e.equipped).filter(Boolean))}onBoss(e){let{hud:t,audio:n,engine:i}=this;switch(e.s){case"intro":t.bossIntro(at[e.kind].name,at[e.kind].title),n.play("roar",{}),n.setMusic("boss"),i.addShake(.6);break;case"p2":t.announce("\uC655\uAD00\uC758 \uC2EC\uD310","#ff6a4a",2.4,!0,"\uBB34\uB825\uD654 \uAC8C\uC774\uC9C0\uB97C \uBAA8\uB450 \uAE4E\uC73C\uC138\uC694!"),n.play("roar",{});break;case"judgement":break;case"judgeOk":{t.announce("\uBB34\uB825\uD654 \uC131\uACF5","#8fd0ff",2,!0,"\uC9C0\uAE08\uC774 \uAE30\uD68C\uC785\uB2C8\uB2E4"),this.vfx.ring(e.x,e.z,12,"#8fd0ff",.8,.6),this.vfx.flash(e.x,3,e.z,"#8fd0ff",100,25,.4),i.addShake(1),n.play("counter",{});break}case"judgeFail":{t.announce("\uC2EC\uD310\uC774 \uB0B4\uB824\uC84C\uB2E4","#ff4a3a",2),this.vfx.ring(e.x,e.z,30,"#ff3a2a",1,.8),this.vfx.flash(e.x,3,e.z,"#ff3a2a",150,40,.5),i.addShake(1.2),n.play("bossSlam",{});break}case"phase2":t.announce(`${at[e.kind].name}\uC758 \uAE30\uC138\uAC00 \uBC14\uB01D\uB2C8\uB2E4`,"#ff9a6a",2,!1,"\uC0C8\uB85C\uC6B4 \uD328\uD134\uC5D0 \uC8FC\uC758\uD558\uC138\uC694"),n.play("roar",{});break;case"enrage":t.announce(`${at[e.kind].name}\uC774(\uAC00) \uACA9\uB178\uD569\uB2C8\uB2E4`,"#ff5a3a",2),n.play("roar",{});break}}meteorImpact(e,t,n){let{vfx:i,engine:r,audio:a}=this;i.ring(e,t,n*1.2,"#ff6a2a",.6,.5),i.ring(e,t,n*.7,"#fff0c0",.4),i.flash(e,3,t,"#ff7a3a",160,30,.35),i.spark(e,.5,t,{n:90,color:"#ffae4a",speed:16,up:8,size:.3,grav:-14,floor:!0,life:1.1}),i.smoke(e,1,t,{n:26,speed:6,size:2.6,jitter:2,alpha:.7,life:2.2}),r.addShake(1.1),a.play("explode",{x:e,z:t,L:this.listener()}),a.play("impactHeavy",{})}frame(e,t){let n=this.session;if(!n)return;let i=n.self(),r=this.input.sample(this.engine,i||{x:0,z:0});this.input.bot&&(r={...this.input.bot},this.input.bot=null);for(let l of this.input.takeCasts()){if(l==="inventory"){this.hud.toggleInventory();continue}!n.cast(l,r.ax,r.az)&&["q","w","e","r"].includes(l)&&this.hud.flashSlot(l)}n.update(e,r);let a=n.view();if(!a)return;this.lastView=a;for(let l of n.takeEvents())ig(this,l);this.syncPlayers(a,e),this.syncEnemies(a,e),this.syncProjectiles(a,e);for(let l of a.zones)if(this.vfx.decal(l,t),l.fx==="frost"&&l.t>l.warn&&Math.random()<e*30&&this.vfx.spark(l.x+(Math.random()-.5)*7,.2,l.z+(Math.random()-.5)*7,{n:1,color:"#bfe8ff",speed:1,up:2,size:.18,grav:0,life:.9}),l.fx==="meteor"&&l.t<l.warn&&this.meteorFalling(l,t),l.fx==="poison"&&l.t>l.warn&&Math.random()<e*14&&this.vfx.smoke(l.x+(Math.random()-.5)*8,.5,l.z+(Math.random()-.5)*8,{n:1,color:"#4a6a2a",speed:.6,size:2,alpha:.45,life:1.6}),l.fx==="arrows"&&l.t>l.warn&&Math.random()<e*40){let h=Math.random()*Math.PI*2,u=Math.sqrt(Math.random())*4;this.vfx.spark(l.x+Math.cos(h)*u,5,l.z+Math.sin(h)*u,{n:1,color:"#e8f0c0",speed:0,up:-26,drag:0,size:.12,grav:0,life:.2,floor:!0})}this.vfx.sweepDecals(),this.syncDrops(a,t),this.syncChests(a),this.level.update(e,t,a.rooms,i||{x:0,z:0}),this.vfx.update(e);let o=a.players.find(l=>l.id===n.localId);if(o){let l=.12*(1-this.engine.zoom);this.engine.follow(o.x,o.z,e,{x:(r.ax-o.x)*l,z:(r.az-o.z)*l}),this.engine.faceYaw=o.face}this.hurt=Math.max(0,this.hurt-e*1.5);let c=o&&o.alive?Math.max(0,1-o.hp/o.maxHp/.3):0;this.engine.grade.uniforms.uHurt.value=Math.min(1,this.hurt+c*(.35+Math.sin(t*6)*.15)),this.engine.grade.uniforms.uDesat.value=o&&!o.alive?.85:0,this.engine.render(e,t),this.hud.update(a,n,this,t),!this.ended&&(a.phase==="victory"||a.phase==="wipe")&&a.endT>(a.phase==="victory"?5:3)&&(this.ended=!0,this.onEnd({victory:a.phase==="victory",difficulty:a.difficulty||1,time:(performance.now()-this.startedAt)/1e3,xp:this.runXp,loot:this.runLoot,levels:this.levelsGained,kills:a.players.find(l=>l.id===n.localId)}))}syncPlayers(e,t){let n=new Set;for(let i of e.players){n.add(i.id);let r=this.pActors.get(i.id);r&&(r.cls!==i.cls||r.spec!==At(i.cls,i.spec).id)&&(this.engine.scene.remove(r.root),this.pActors.delete(i.id),r=null),r||(r=xo(this.assets,i.cls,i.spec),r.addXray(i.id===this.session.localId?"#ffd98a":"#8fc4ff"),this.engine.scene.add(r.root),this.pActors.set(i.id,r),i.id===this.session.localId&&(this.engine.heroLight.userData.follow=r.root)),r.root.position.set(i.x,i.y||0,i.z),r.root.rotation.y=Jd(i.face),r.animate({act:i.act,actT:i.actT,moving:i.moving,speed:i.speed,down:!i.alive},t,r.cfg),i.rage&&Math.random()<t*25&&this.vfx.fire(i.x+(Math.random()-.5),.3+Math.random()*1.5,i.z+(Math.random()-.5),.5,"#ff3a1a"),i.shield>0&&Math.random()<t*12&&this.vfx.spark(i.x,1+Math.random(),i.z,{n:1,color:"#ffe7a0",speed:1.5,up:.5,size:.12,grav:0,life:.6})}for(let[i,r]of this.pActors)n.has(i)||(this.engine.scene.remove(r.root),this.pActors.delete(i))}syncEnemies(e,t){let n=new Set;for(let i of e.enemies){n.add(i.id);let r=this.eActors.get(i.id);if(r||(r=this.acquireEnemy(i.kind,i.elite),this.engine.scene.add(r.root),this.eActors.set(i.id,r),at[i.kind].boss&&(r.crownFire=this.vfx.emitter({rate:40,emit:a=>{if(r.crown){let o=new I;r.crown.getWorldPosition(o),a.fire(o.x,o.y+.3,o.z,1.2,"#ff5a1a")}}}))),r.root.position.set(i.x,i.y||0,i.z),r.root.rotation.y=Jd(i.face),r.animate({act:i.act==="intro"?null:i.act,actT:i.actT,moving:i.moving,speed:i.speed,dead:i.dead,deadT:i.deadT,intro:i.intro},t,r.cfg),r.counterGlow>0){r.counterGlow-=t;for(let a of r.mats)a.emissive?.setRGB(.15,.45,1.2*(.6+Math.sin(performance.now()/50)*.4));r.counterGlow<=0&&r.restoreTint(),Math.random()<t*30&&this.vfx.spark(i.x,2+Math.random()*3,i.z,{n:1,color:"#6ec3ff",speed:2,size:.25,grav:0})}i.dead&&r.crownFire&&(r.crownFire.dead=!0,r.crownFire=null)}for(let[i,r]of this.eActors)n.has(i)||(this.releaseEnemy(r),this.eActors.delete(i))}syncProjectiles(e){let t=new Set;for(let n of e.projs){t.add(n.id);let i=this.projs.get(n.id);i||(i=this.makeProjectile(n),this.projs.set(n.id,i)),i.obj.position.set(n.x,1.25,n.z),i.obj.rotation.y=Jd(n.dir),i.x=n.x,i.z=n.z}for(let[n,i]of this.projs)t.has(n)||(this.engine.scene.remove(i.obj),i.emitter&&(i.emitter.dead=!0),this.projs.delete(n))}makeProjectile(e){let t=new St,n=null,i=(a,o)=>{let c=new Ge(kM,new Dt({color:new ae(a).multiplyScalar(4)}));c.scale.setScalar(o),t.add(c)},r={obj:t,x:e.x,z:e.z};if(e.kind==="fireball")i("#ff7a2a",.35),n=this.vfx.emitter({rate:90,emit:a=>a.fire(r.x,1.25,r.z,.9,"#ff6a1a")});else if(e.kind==="bolt")i("#8fd0ff",.18),n=this.vfx.emitter({rate:50,emit:a=>a.spark(r.x,1.25,r.z,{n:1,color:"#8fd0ff",speed:.5,size:.2,grav:0,life:.25})});else if(e.kind==="arrow"||e.kind==="shot"||e.kind==="pierce"||e.kind==="arrowb"){let a=this.assets.prop("w_arrow");a.rotation.x=Math.PI/2,a.scale.setScalar(1.6),t.add(a);let o=e.kind==="arrow"?"#6ff0c8":e.kind==="pierce"?"#e8ffb0":"#b8e890";e.kind==="pierce"&&i("#d8ff90",.22),n=this.vfx.emitter({rate:e.kind==="pierce"?90:40,emit:c=>c.spark(r.x,1.25,r.z,{n:1,color:o,speed:.2,size:e.kind==="pierce"?.2:.12,grav:0,life:.3})})}else e.kind==="dagger"?(i("#c9a0ff",.14),n=this.vfx.emitter({rate:40,emit:a=>a.spark(r.x,1.25,r.z,{n:1,color:"#c9a0ff",speed:.2,size:.1,grav:0,life:.2})})):e.kind==="lightorb"?(i("#ffe7a0",.55),n=this.vfx.emitter({rate:70,emit:a=>a.spark(r.x+(Math.random()-.5)*.8,1.25,r.z+(Math.random()-.5)*.8,{n:1,color:"#fff0c0",speed:.8,size:.16,grav:0,life:.4})})):i("#5ff0c0",.3);return this.engine.scene.add(t),r.emitter=n,r}meteorFalling(e,t){let n=e.t/e.warn;e._m||(e._m=!0,this.audio.play("meteorFall",{}));let i=(1-n)*22,r=e.x-(1-n)*8,a=e.z-(1-n)*5;this.vfx.fire(r,i+1,a,2.6,"#ff6a1a"),this.vfx.fire(r,i+1,a,2,"#ffb04a"),Math.random()<.5&&this.vfx.smoke(r,i+1,a,{n:1,speed:.5,size:1.4,alpha:.4})}syncDrops(e,t){let n=new Set;for(let i of e.drops){n.add(i.id);let r=this.drops.get(i.id);if(!r){let a=yn[i.rarity].color,o=yn[i.rarity].tier,c=new St,l=new Ge(LM,new tn({color:a,emissive:a,emissiveIntensity:1.6,metalness:.3,roughness:.3}));l.position.y=.7,c.add(l),o>=1&&c.add(this.vfx.beam(0,0,a,2+o*1.6,.35+o*.12,0,{persistent:!0})),c.position.set(i.x,0,i.z),this.engine.scene.add(c),r={obj:c,gem:l},this.drops.set(i.id,r),this.vfx.spark(i.x,.6,i.z,{n:12+o*6,color:a,speed:3,up:4,size:.14,grav:-6,floor:!0})}r.gem.rotation.y=t*2,r.gem.position.y=.7+Math.sin(t*3+i.id)*.12}for(let[i,r]of this.drops)n.has(i)||(this.engine.scene.remove(r.obj),this.drops.delete(i))}syncChests(e){for(let t of e.chests){let n=this.chests.get(t.id);if(!n){let i=this.assets.prop("d_chest_gold");i.position.set(t.x,0,t.z),i.scale.setScalar(1.3),this.engine.scene.add(i),this.vfx.spark(t.x,1,t.z,{n:30,color:"#ffd27a",speed:3,up:4,size:.14}),n={obj:i,open:!1,beam:this.vfx.beam(t.x,t.z,"#ffd27a",5,.8,0,{persistent:!0})},this.chests.set(t.id,n)}t.open&&!n.open&&(n.open=!0,this.engine.scene.remove(n.beam),n.obj.rotation.z=.08)}}};ai();$i();function gs(s,e,t,n,i,r,a=0){let o=i-e,c=r-t,l=Math.hypot(o,c);switch(s.type){case"circle":return l<=s.r+a;case"donut":return l<=s.r2+a&&l>=s.r-a;case"cone":{if(l>s.r+a)return!1;if(l<a+.5)return!0;let h=Math.atan2(c,o)-n;for(;h>Math.PI;)h-=Math.PI*2;for(;h<-Math.PI;)h+=Math.PI*2;return Math.abs(h)<=s.ang/2+Math.asin(Math.min(1,a/l))}case"rect":{let h=Math.cos(n),u=Math.sin(n),d=o*h+c*u,f=-o*u+c*h;return d>=-a&&d<=s.len+a&&Math.abs(f)<=s.w/2+a}}return!1}function sg(s,e,t){let n=Math.cos(s.face),i=Math.sin(s.face),r=e-s.x,a=t-s.z,o=Math.hypot(r,a)||1;return(n*r+i*a)/o<-.5}function rg(s,e,t,{back:n=!1,stunned:i=!1,rng:r=Math.random,critBonus:a=0,backBonus:o=0}={}){let c=r()<(s.crit||0)+a,l=s.atk*e*(.94+r()*.12);return c&&(l*=s.critDmg||2),n&&(l*=1+.2+o),i&&(l*=1+.3),l*=100/(100+(t||0)),{dmg:Math.max(1,Math.round(l)),crit:c}}var Ji=(s,e)=>Math.atan2(e.z-s.z,e.x-s.x),Ei=(s,e)=>Math.hypot(e.x-s.x,e.z-s.z);var Eo=1/60,_h=Math.PI*2,Qs=.55,DM=4,NM=2.6,UM=.35,FM=.3,So=s=>Pt[s]||Ys[s];function Qd(s=Math.random()*2**31|0,e=1){return{seed:s,rng:nh(s),t:0,tick:0,phase:"lobby",endT:0,difficulty:e,rooms:jt.map(()=>({state:"idle",wave:-1,waveT:0})),sealed:[],players:[],enemies:[],projs:[],zones:[],drops:[],chests:[],events:[],nextId:1,boss:null,stats:{kills:0}}}var er=s=>s.nextId++,De=(s,e)=>s.events.push(e),ug=s=>s.events.splice(0),ot=(s,e)=>s.players.find(t=>t.id===e),Mh=s=>Math.max(1,s.players.length),dg=s=>vn.x+(s%2?1.6:-1.6)*Math.ceil(s/2),Qr=s=>At(s.cls,s.spec).passive.mods;function Ao(s,{id:e,name:t,cls:n="knight",spec:i,level:r=1,gear:a=[],local:o=!1}){let c=s.players.length;i=At(n,i).id;let l=jr(n,r,a,i),h={id:e,name:t,cls:n,spec:i,level:r,local:o,x:dg(c),z:vn.z,y:0,vx:0,vz:0,face:-Math.PI/2,st:l,hp:l.hp,alive:!0,downT:0,revive:0,feathers:0,tp:0,act:null,combo:0,comboT:0,cds:{q:0,w:0,e:0,r:0,dodge:0,potion:0},potions:Um,shield:0,shieldT:0,buffs:[],hurtT:0,slowT:0,kbx:0,kbz:0,input:{mx:0,mz:0,ax:0,az:0,attack:!1},dmgDealt:0,kills:0,downs:0,revives:0};return s.players.push(h),h}function fg(s,e){s.players=s.players.filter(t=>t.id!==e)}function ef(s,e,{name:t,cls:n,spec:i,level:r,gear:a}){let o=ot(s,e);if(!(!o||s.phase!=="lobby")){o.name=t,o.cls=n,o.spec=At(n,i).id,o.level=r,o.st=jr(n,r,a,o.spec),o.hp=o.st.hp,o.act=null;for(let c in o.cds)o.cds[c]=0}}function tf(s,e,t,n){let i=ot(s,e);if(!i)return;let r=i.hp/i.st.hp||1,a=t>i.level;i.level=t,i.st=jr(i.cls,t,n,i.spec),i.hp=Math.min(i.st.hp,Math.round(i.st.hp*Math.min(1,r))),a&&i.alive&&nf(s,i,i.st.hp*FM)}function nf(s,e,t,n){let i=Math.min(Math.round(t),e.st.hp-e.hp);i<=0||!e.alive||(e.hp+=i,De(s,{k:"heal",id:e.id,v:i,by:n}))}function ag(s){let e=s.st.speed;for(let t of s.buffs)t.speed&&(e*=1+t.speed);return s.slowT>0&&(e*=.6),e}function zM(s){let e=s.st.atk;for(let n of s.buffs)n.atk&&(e*=1+n.atk);let t=Qr(s);return t.lowHpAtk&&s.hp<s.st.hp*.5&&(e*=1+t.lowHpAtk),{atk:e,crit:s.st.crit,critDmg:s.st.critDmg}}function Ro(s,e,t,n,i=0){if(!s.alive)return null;let r=At(s.cls,s.spec).skills,a=oh(s.cls,s.spec),o=s.act?Pt[s.act.id]:null,c=o&&s.act.t<(o.lock??o.dur),l;if(e==="dodge"){if(s.cds.dodge>0)return null;l="dodge"}else if(e==="potion"){if(s.cds.potion>0||s.potions<=0||s.hp>=s.st.hp)return null;l="potion"}else if(e==="basic"){if(o&&o!==Pt[a[s.combo%3]]&&c||c&&s.act.t<(o.combo??o.lock)||c&&s.act.id==="dodge")return null;let b=s.comboT>0?s.combo%3:0;l=a[b],s.combo=b+1,s.comboT=0}else if(l=r[e],!l||s.cds[e]>0||c&&(s.act.id==="dodge"||!a.includes(s.act.id)||s.act.t<(o.combo??0)))return null;let h=Pt[l],u=Math.atan2(n-s.z,t-s.x);e==="dodge"&&(s.input.mx||s.input.mz)&&(u=Math.atan2(s.input.mz,s.input.mx)),h.away&&(u+=Math.PI);let d=t,f=n;h.range&&Math.hypot(t-s.x,n-s.z)>h.range&&(d=s.x+Math.cos(u)*h.range,f=s.z+Math.sin(u)*h.range),s.act={id:l,t:0,dir:u,tx:d,tz:f,sx:s.x,sz:s.z,done:{},hitIds:[]},s.face=u;let m=Math.min(.4,s.st.haste||0);return e==="dodge"?s.cds.dodge=ch:e==="potion"?s.cds.potion=lh:e!=="basic"&&(s.cds[e]=h.cd*(1-m)),s.act}function Sh(s,e,t,n,i=!0){for(let f in s.cds)s.cds[f]>0&&(s.cds[f]=Math.max(0,s.cds[f]-t));if(s.comboT>=0&&!s.act&&(s.comboT+=t),s.comboT>.7&&(s.combo=0,s.comboT=-1),s.y=0,!s.alive){s.vx=s.vz=0;return}let r=s.act?Pt[s.act.id]:null,a=e.mx||0,o=e.mz||0,c=Math.hypot(a,o);c>1&&(a/=c,o/=c);let l=0,h=0;if(r){let f=s.act.t;if(r.move)for(let[m,b,g]of r.move)f>=m&&f<b&&(l+=Math.cos(s.act.dir)*g,h+=Math.sin(s.act.dir)*g);if(r.leap){let[m,b]=r.leap,g=Math.max(0,Math.min(1,(f-m)/(b-m))),p=g*g*(3-2*g);s.x=s.act.sx+(s.act.tx-s.act.sx)*p,s.z=s.act.sz+(s.act.tz-s.act.sz)*p,s.y=Math.sin(g*Math.PI)*2.2}if(r.moveScale&&c>.05){let m=ag(s)*r.moveScale;l+=a*m,h+=o*m}!r.move&&!r.leap&&!r.moveScale&&f>=(r.lock??r.dur)&&c>.05&&(s.act=null)}if(!s.act){let f=ag(s);l=a*f,h=o*f,c>.05&&!e.attack&&(s.face=Math.atan2(o,a))}l+=s.kbx,h+=s.kbz;let u=Math.exp(-t*10);s.kbx*=u,s.kbz*=u;let d=Math.min(1,t*18);s.vx+=(l-s.vx)*d,s.vz+=(h-s.vz)*d,r&&r.move&&(s.vx=l,s.vz=h),s.x+=s.vx*t,s.z+=s.vz*t,Wn(s,Qs,n),s.act&&(s.act.t+=t,i&&s.act.t>=r.dur&&(s.act=null,s.comboT=0))}var Zs={x:vn.x,z:vn.z-5,r:1.2};function sf(s,e,t){Sh(s,{mx:e.mx,mz:e.mz},t,[]);let n=s.x-Zs.x,i=s.z-Zs.z,r=Math.hypot(n,i),a=Zs.r+Qs;if(r<a){let o=r>1e-4?a/r:0;s.x=Zs.x+(o?n*o:a),s.z=Zs.z+i*o}}function pg(s,e){s.phase==="lobby"&&(s.difficulty=Math.max(1,Math.min(ji,e|0)))}function mg(s){s.phase="play",s.t=0;let e=s.players.length===1;s.players.forEach((t,n)=>{t.feathers=e?3:1,t.x=dg(n),t.z=vn.z,t.vx=t.vz=0,t.face=-Math.PI/2,t.act=null,t.tp++}),OM(s,2.5,()=>gg(s,0)),De(s,{k:"start"})}function OM(s,e,t){(s.timers||=[]).push({at:s.t+e,fn:t})}function gg(s,e){let t=s.rooms[e];if(t.state!=="idle")return;t.state="active",t.wave=-1,t.waveT=1.2;let n=jt[e];s.sealed=fo(s.rooms.map(r=>r.state));let i=s.players.find(r=>r.alive&&po(r.x,r.z)===e);for(let r of s.players)po(r.x,r.z)!==e&&i&&(r.x=i.x+(s.rng()-.5)*2,r.z=i.z+(s.rng()-.5)*2,r.tp++);if(De(s,{k:"room",i:e,state:"active",name:n.name}),n.boss){t.waveT=99;let r=zn(...n.boss);ea(s,"king",r.x,r.z,!1,e)}}function BM(s,e){s.boss={id:e.id,kind:e.kind,phase:1,judged:!1,enraged:!1,queue:[],gauge:0,gaugeMax:0,judgeT:0,intro:3.2},e.face=Math.PI/2,e.act={id:"intro",t:0},e.iframeUntil=s.t+s.boss.intro,De(s,{k:"boss",s:"intro",id:e.id,kind:e.kind})}function HM(s,e){let t=s.rooms[e];t.state="cleared",s.sealed=fo(s.rooms.map(i=>i.state));let n=jt[e];if(De(s,{k:"room",i:e,state:"cleared",name:n.name}),n.chest){let i=zn(...n.chest);s.chests.push({id:er(s),x:i.x,z:i.z+.6,open:!1,gold:!0,room:e})}}function bg(s,e=Eo){if(s.phase==="lobby"){s.t+=e;for(let t of s.players)t.local&&sf(t,t.input,e);return}if(s.t+=e,s.tick++,s.timers)for(let t=s.timers.length-1;t>=0;t--)s.timers[t].at<=s.t&&s.timers.splice(t,1)[0].fn();(s.phase==="victory"||s.phase==="wipe")&&(s.endT+=e);for(let t of s.players)VM(s,t,e);for(let t of s.enemies)XM(s,t,e);$M(s),QM(s,e),e1(s,e),t1(s,e),i1(s,e),qM(s,e),s.enemies=s.enemies.filter(t=>!(t.dead&&t.deadT>4.5)),s.phase==="play"&&s.players.length&&s.players.every(t=>!t.alive&&t.feathers<=0)&&(s.phase="wipe",De(s,{k:"wipe"}))}function VM(s,e,t){if(e.hurtT>0&&(e.hurtT-=t),e.slowT>0&&(e.slowT-=t),e.shieldT>0&&(e.shieldT-=t,e.shieldT<=0&&(e.shield=0)),e.buffs=e.buffs.filter(n=>(n.t-=t)>0),e.local){if(e.alive&&e.input.attack&&(!e.act||Pt[e.act.id].combo!==void 0)){let r=Ro(e,"basic",e.input.ax,e.input.az);r&&De(s,{k:"act",id:e.id,a:r.id,dir:r.dir})}let n=e.act,i=n?n.t:0;Sh(e,e.input,t,s.sealed,!1),e.act&&(yh(s,e,e.act===n?i:0,e.act.t,"player"),e.act&&e.act.t>=Pt[e.act.id].dur&&(e.act=null,e.comboT=0))}else if(e.act){let n=Pt[e.act.id],i=e.act.t;e.act.t+=t,yh(s,e,i,e.act.t,"player"),e.act.t>=n.dur&&(e.act=null)}if(!e.local)for(let n in e.cds)e.cds[n]>0&&(e.cds[n]=Math.max(0,e.cds[n]-t))}function xg(s,e,t){let n=ot(s,e);!n||n.local||!n.alive||t.tp!==n.tp||(n.x=+t.x||n.x,n.z=+t.z||n.z,n.face=+t.f||0,n.y=+t.y||0,Wn(n,Qs,s.sealed))}function vg(s,e,t,n,i){let r=ot(s,e);if(!r)return;if(!r.alive){t==="potion"&&_g(s,r);return}let a={x:r.x,z:r.z},o=Ro(r,t,n,i);o&&(o.sx=a.x,o.sz=a.z,De(s,{k:"act",id:r.id,a:o.id,dir:o.dir}))}function tr(s,e,t,n,i){let r=ot(s,e);if(!r)return null;if(!r.alive&&t==="potion")return _g(s,r);let a=Ro(r,t,n,i);return a&&De(s,{k:"act",id:r.id,a:a.id,dir:a.dir}),a}function _g(s,e){return e.alive||e.feathers<=0||e.downT<1.5?null:(e.feathers--,rf(s,e,.5),!0)}function yh(s,e,t,n,i){let r=So(e.act.id);if(!r)return;let a=e.act;r.iframes&&n>=r.iframes[0]&&t<=r.iframes[1]&&(e.iframeUntil=s.t+(r.iframes[1]-n));for(let o=0;o<(r.hits||[]).length;o++){let c=r.hits[o];if(c.every){let l=c.until??r.dur;for(let h=c.t;h<=l+1e-6;h+=c.every)h>t&&h<=n&&og(s,e,c,i,`${o}`)}else c.t>t&&c.t<=n&&og(s,e,c,i,`${o}`)}for(let o=0;o<(r.spawns||[]).length;o++){let c=r.spawns[o];c.t>=t&&c.t<n&&!a.done["s"+o]&&(a.done["s"+o]=!0,GM(s,e,c,i))}r.judgement&&!a.done.j&&(a.done.j=!0,KM(s,e,r.judgement))}function og(s,e,t,n,i){let r=e.act,a=t.at==="target"?r.tx:e.x+Math.cos(r.dir)*(t.off||0),o=t.at==="target"?r.tz:e.z+Math.sin(r.dir)*(t.off||0),c=n==="player"?r.dir:e.face;if((!r.done["fx"+i]||t.every)&&(r.done["fx"+i]=!0,(t.fx||n==="player")&&De(s,{k:"swing",id:e.id,fx:t.fx||"slash",x:a,z:o,dir:c,team:n})),n==="player")for(let l of s.enemies)l.dead||(l.iframeUntil||0)>s.t||t.once&&r.hitIds.includes(l.id)||gs(t.shape,a,o,c,l.x,l.z,l.r)&&(t.once&&r.hitIds.push(l.id),To(s,l,e,t,a,o));else{t.tele&&jM(s,e.id,i);for(let l of s.players)l.alive&&(t.once&&r.hitIds.includes(l.id)||gs(t.shape,a,o,c,l.x,l.z,Qs)&&(t.once&&r.hitIds.push(l.id),Th(s,l,e,t.mult,a,o,t.kb)))}}function GM(s,e,t,n){let i=e.act;if(t.proj){let r=Hd[t.proj],a=n==="player"?i.dir:e.face;for(let o of t.fan||[0]){let c=a+o;s.projs.push({id:er(s),kind:t.proj,team:n,owner:e.id,x:e.x+Math.cos(c)*.9,z:e.z+Math.sin(c)*.9,dir:c,speed:r.speed,r:r.r,life:r.life,mult:t.mult??r.mult,hits:[]})}De(s,{k:"shoot",id:e.id,kind:t.proj})}if(t.zone){let r=t.zone,a=r.at==="all"?s.players.filter(o=>o.alive).map(o=>[o.x,o.z]):[[e.x,e.z]];if(r.at==="target")if(n==="player")a[0]=[i.tx,i.tz];else{let o=ot(s,e.target);o&&(a[0]=[o.x,o.z])}for(let[o,c]of a)r.scatter&&(o+=(s.rng()-.5)*2*r.scatter,c+=(s.rng()-.5)*2*r.scatter),s.zones.push({id:er(s),team:r.team||n,owner:e.id,shape:r.shape,x:o,z:c,dir:i.dir??e.face,t:0,warn:r.warn,dur:r.dur,tick:r.tick||0,tickT:0,mult:r.mult,stag:r.stag||0,kb:r.kb||0,slow:r.slow||0,heal:r.heal||0,fx:r.fx})}if(t.behind){let r=ot(s,e.target)||s.players.find(a=>a.alive);r&&(De(s,{k:"smoke",id:e.id,x:e.x,z:e.z,r:3}),e.x=r.x-Math.cos(r.face)*t.behind,e.z=r.z-Math.sin(r.face)*t.behind,Wn(e,e.r,s.sealed),e.face=Ji(e,r),De(s,{k:"smoke",id:e.id,x:e.x,z:e.z,r:3}))}if(t.buff){let r=t.buff;if(r.kind==="shield"){let a=r.pct*(Qr(e).shieldMult||1);for(let o of s.players)o.alive&&Ei(o,e)<=r.radius&&(o.shield=Math.round(o.st.hp*a),o.shieldT=r.dur,De(s,{k:"buff",id:o.id,kind:"shield"}))}else e.buffs.push({kind:r.kind,t:r.dur,atk:r.atk,speed:r.speed,dr:r.dr}),De(s,{k:"buff",id:e.id,kind:r.kind})}if(t.heal&&e.potions>0){e.potions--;let r=Math.round(e.st.hp*t.heal);e.hp=Math.min(e.st.hp,e.hp+r),De(s,{k:"heal",id:e.id,v:r})}if(t.taunt){for(let r of s.enemies)!r.dead&&Ei(r,e)<=t.taunt.radius&&(r.target=e.id,r.tauntBy=e.id,r.tauntT=t.taunt.dur,r.blindT=0);De(s,{k:"taunt",id:e.id,x:e.x,z:e.z,r:t.taunt.radius})}if(t.chain){let r=t.chain,a=[[e.x,e.z]],o=new Set,c={x:i.tx,z:i.tz},l=3.5,h=r.mult;for(let u=0;u<r.n;u++){let d=null,f=1/0;for(let g of s.enemies){if(g.dead||o.has(g.id)||(g.iframeUntil||0)>s.t)continue;let p=Ei(g,c);p<=l+g.r&&p<f&&(f=p,d=g)}if(!d)break;o.add(d.id),a.push([d.x,d.z]);let m=d.x,b=d.z;To(s,d,e,{mult:h,stag:r.stag,kb:.4},c.x,c.z),c={x:m,z:b},l=r.jump,h*=r.decay}a.length===1&&a.push([i.tx,i.tz]),De(s,{k:"chain",id:e.id,pts:a})}if(t.miracle){let r=t.miracle;for(let a of s.players)Ei(a,e)>r.radius||(a.alive?nf(s,a,a.st.hp*r.heal*(Qr(e).healMult||1),e.id):rf(s,a,r.revive));De(s,{k:"miracle",id:e.id,x:e.x,z:e.z,r:r.radius})}if(t.smoke){for(let r of s.enemies)!r.dead&&Ei(r,e)<t.smoke&&(r.blindT=2.5,r.target=null);De(s,{k:"smoke",id:e.id,x:e.x,z:e.z,r:t.smoke})}if(t.summon){let r=e.room??po(e.x,e.z),a=t.summon.n+(at[e.kind]?.boss?Mh(s)-1:0);for(let o=0;o<a;o++){let c=o/a*_h+s.rng()*.5,l={x:e.x+Math.cos(c)*t.summon.r,z:e.z+Math.sin(c)*t.summon.r};Wn(l,.6,s.sealed),s.enemies.filter(h=>!h.dead).length<40&&ea(s,t.summon.kind,l.x,l.z,!1,r,!0)}De(s,{k:"summon",id:e.id,x:e.x,z:e.z})}}function To(s,e,t,n,i,r){let a=at[e.kind],o=sg(e,t.x,t.z),c=e.stunT>0||e.act&&(e.act.id==="down"||e.act.id==="stun"),l=n.mult;n.lowHpScale&&(l*=1+n.lowHpScale*(1-t.hp/t.st.hp)),n.backMult&&o&&(l*=n.backMult);let h=rg(zM(t),l,e.def,{back:o,stunned:c,rng:s.rng,backBonus:Qr(t).backBonus||0}),u=h.dmg,d=!1;a.shield&&!o&&!c&&!(e.act&&e.act.id==="spawn")&&Math.cos(Ji(e,t)-e.face)>.3&&(u=Math.round(u*(1-a.shield)),d=!0),e.hp-=u,t.dmgDealt+=u,De(s,{k:"dmg",tid:e.id,v:u,crit:h.crit,back:o,blocked:d,x:e.x,z:e.z,by:t.id});let f=e.act?So(e.act.id):null;if(n.counter&&f&&f.counterWindow&&e.act.t>=f.counterWindow[0]&&e.act.t<=f.counterWindow[1]&&(wo(s,e.id),e.act={id:"stun",t:0,dir:e.face,done:{},hitIds:[]},De(s,{k:"counter",id:e.id,by:t.id,x:e.x,z:e.z})),s.boss&&s.boss.id===e.id&&s.boss.gaugeMax>0&&n.stag&&(s.boss.gauge=Math.max(0,s.boss.gauge-n.stag),s.boss.gauge<=0&&ZM(s,e)),e.hp<=0){WM(s,e,t);return}if(!a.boss&&!e.elite){let m=Math.atan2(e.z-r,e.x-i),b=(n.kb||0)*(d?.3:1);e.kbx+=Math.cos(m)*b*6,e.kbz+=Math.sin(m)*b*6,!(e.act&&So(e.act.id)?.super)&&(e.poise||0)<=0&&(!e.act||e.act.id!=="spawn")&&(wo(s,e.id),e.act={id:"hit",t:0,dir:e.face,done:{},hitIds:[]},e.poise=.9)}}function WM(s,e,t){e.dead=!0,e.hp=0,e.deadT=0,e.act=null,wo(s,e.id),s.stats.kills++,t&&t.kills++;let n=at[e.kind],i=Math.round(n.xp*(e.elite?$s.xp:1)*Kr(s.difficulty).xp);De(s,{k:"kill",id:e.id,kind:e.kind,x:e.x,z:e.z,xp:i});let r=e.summoned?n.drop*.3:e.elite?$s.drop:n.drop??0;for(let a of s.players){let o=n.boss?n.loot:s.rng()<r?1:0;for(let c=0;c<o;c++)yg(s,a,e.x,e.z,n.boss?2.2:e.elite?.7:0)}if(n.final){s.phase="victory",s.endT=0,s.zones=s.zones.filter(a=>a.team==="player");for(let a of s.enemies)a.dead||(a.dead=!0,a.deadT=0,a.act=null,De(s,{k:"kill",id:a.id,kind:a.kind,x:a.x,z:a.z,xp:0}));De(s,{k:"victory"})}}function yg(s,e,t,n,i){let r=s.rng()*_h,a=1+s.rng()*1.8,o={x:t+Math.cos(r)*a,z:n+Math.sin(r)*a};Wn(o,.3,s.sealed);let c=Kr(s.difficulty),l=Math.max(1,e.level+Math.floor(s.rng()*3)+c.ilvl),h=Wm(s.rng,{ilvl:l,cls:e.cls,luck:i+c.luck});s.drops.push({id:er(s),owner:e.id,x:o.x,z:o.z,item:h,t:0})}function Th(s,e,t,n,i,r,a=0){if(!e.alive||e.hurtT>0||(e.iframeUntil||0)>s.t){(e.iframeUntil||0)>s.t&&De(s,{k:"evade",id:e.id,x:e.x,z:e.z});return}let c=(t.st||{atk:60}).atk*n*(.9+s.rng()*.2)*(100/(100+e.st.def));for(let l of e.buffs)l.dr&&(c*=1-l.dr);if(c*=1-(Qr(e).dr||0),c=Math.round(c),e.shield>0){let l=Math.min(e.shield,c);e.shield-=l,c-=l,De(s,{k:"shieldhit",id:e.id,v:l})}if(e.hp-=c,e.hurtT=UM,a){let l=Math.atan2(e.z-r,e.x-i);De(s,{k:"kb",id:e.id,x:Math.cos(l)*a*5,z:Math.sin(l)*a*5}),e.local&&(e.kbx+=Math.cos(l)*a*5,e.kbz+=Math.sin(l)*a*5)}De(s,{k:"phurt",id:e.id,v:c,x:e.x,z:e.z}),e.hp<=0&&(e.hp=0,e.alive=!1,e.downT=0,e.revive=0,e.act=null,e.downs++,De(s,{k:"pdown",id:e.id,x:e.x,z:e.z}))}function rf(s,e,t){e.alive=!0,e.hp=Math.round(e.st.hp*t),e.downT=0,e.revive=0,e.hurtT=2,e.iframeUntil=s.t+2,De(s,{k:"previve",id:e.id,x:e.x,z:e.z})}function qM(s,e){for(let t of s.players){if(t.alive)continue;t.downT+=e;let n=s.players.find(i=>i!==t&&i.alive&&Ei(i,t)<NM);n&&(t.revive+=e,t.revive>=DM&&(n.revives++,rf(s,t,.4)))}}function ea(s,e,t,n,i=!1,r=-1,a=!1){let o=at[e],c=Mh(s),l=Kr(s.difficulty),h=(o.boss?Om(c).hp:1+.55*(c-1))*l.hp,u=Math.round(o.hp*h*(i?$s.hp:1)),d={id:er(s),kind:e,elite:i,x:t,z:n,face:Math.PI/2,hp:u,maxHp:u,r:o.r*(i?1.2:1),st:{atk:o.atk*(i?$s.atk:1)*l.atk},def:o.def,speed:o.speed,act:{id:"spawn",t:0,dir:Math.PI/2,done:{},hitIds:[]},cd:1+s.rng(),target:null,think:0,path:null,kbx:0,kbz:0,poise:0,stunT:0,blindT:0,slowT:0,dead:!1,deadT:0,room:r,summoned:a,strafe:s.rng()<.5?1:-1};return s.enemies.push(d),De(s,{k:"espawn",id:d.id,kind:e,x:t,z:n}),o.boss&&BM(s,d),d}function Mg(s,e){if(e.tauntT>0){let i=ot(s,e.tauntBy);if(i&&i.alive)return i}let t=null,n=1/0;for(let i of s.players){if(!i.alive)continue;let r=Ei(i,e)-(i.id===e.target?3:0);r<n&&(at[e.kind].boss||po(i.x,i.z)===e.room||r<14)&&(n=r,t=i)}return t}function XM(s,e,t){if(e.dead){e.deadT+=t;return}let n=at[e.kind];e.poise>0&&(e.poise-=t),e.blindT>0&&(e.blindT-=t),e.tauntT>0&&(e.tauntT-=t,e.target!==e.tauntBy&&ot(s,e.tauntBy)?.alive&&(e.think=0)),e.slowT>0&&(e.slowT-=t),e.cd-=t;let i=0,r=0;if(n.boss){YM(s,e,t);return}if(e.act){let o=So(e.act.id),c=e.act.t;if(e.act.t+=t,o.move)for(let[l,h,u]of o.move)e.act.t>=l&&e.act.t<h&&(i+=Math.cos(e.face)*u,r+=Math.sin(e.face)*u);if(o.aimLock&&e.act.t<o.aimLock){let l=ot(s,e.target);l&&(e.face=Ji(e,l))}yh(s,e,c,e.act.t,"enemy"),e.act&&e.act.t>=o.dur&&(e.act=null,wo(s,e.id))}else{e.think-=t;let o=e.blindT>0?null:ot(s,e.target);if(e.think<=0&&e.blindT<=0){e.think=.4;let c=Mg(s,e);e.target=c?c.id:null,o=c}if(o&&o.alive){let c=Ei(e,o),l=mo(e.x,e.z,o.x,o.z,s.sealed),h=Ji(e,o);e.face=Zd(e.face,h,t*8);let u=e.speed*(e.slowT>0?.5:1);n.keep?(c<n.keep-2?(i=-Math.cos(h)*u,r=-Math.sin(h)*u):c>n.range-1||!l?cg(s,e,o,u,(d,f)=>{i=d,r=f}):(i=-Math.sin(h)*u*.5*e.strafe,r=Math.cos(h)*u*.5*e.strafe),c<n.range&&l&&e.cd<=0&&lg(s,e,o)):(c>n.range*.8&&cg(s,e,o,u*(c>8?1.25:1),(d,f)=>{i=d,r=f}),c<n.range&&e.cd<=0&&Math.abs(Tg(e.face,h))<.5&&lg(s,e,o))}}i+=e.kbx,r+=e.kbz;let a=Math.exp(-t*8);e.kbx*=a,e.kbz*=a,e.vx=i,e.vz=r,e.x+=i*t,e.z+=r*t,Wn(e,e.r,s.sealed)}function cg(s,e,t,n,i){let r=t.x,a=t.z;if((!e.walkLos||e.walkLos.t<s.t)&&(e.walkLos={t:s.t+.25,ok:mo(e.x,e.z,t.x,t.z,s.sealed,e.r)}),!e.walkLos.ok){if(!e.path||e.path.t<s.t){let c=th(e.x,e.z,t.x,t.z,s.sealed);e.path={x:c?c.x:t.x,z:c?c.z:t.z,t:s.t+.5}}r=e.path.x,a=e.path.z}let o=Math.atan2(a-e.z,r-e.x);i(Math.cos(o)*n,Math.sin(o)*n)}function lg(s,e,t){let n=at[e.kind],i=n.attacks[Math.floor(s.rng()*n.attacks.length)],r=Ys[i];e.face=Ji(e,t),e.act={id:i,t:0,dir:e.face,done:{},hitIds:[],tx:t.x,tz:t.z},e.cd=r.cd*(e.elite?.7:1)*(.8+s.rng()*.5),Sg(s,e,r),De(s,{k:"eact",id:e.id,a:i})}function Sg(s,e,t){(t.hits||[]).forEach((n,i)=>{if(!n.tele)return;let r=n.teleShape||n.shape,a=n.teleAt==="target",o=a?e.act.tx:e.x+Math.cos(e.face)*(n.tele==="rect"?0:n.off||0),c=a?e.act.tz:e.z+Math.sin(e.face)*(n.tele==="rect"?0:n.off||0);s.zones.push({id:er(s),team:"tele",owner:e.id,key:`${i}`,shape:r,x:o,z:c,dir:e.face,t:0,warn:n.t,dur:.15,atTarget:a})}),t.tele&&s.zones.push({id:er(s),team:"tele",owner:e.id,key:"aim",shape:t.tele.shape,x:e.x,z:e.z,dir:e.face,t:0,warn:t.tele.until,dur:.05,track:!0})}function jM(s,e,t){s.zones=s.zones.filter(n=>!(n.team==="tele"&&n.owner===e&&n.key===t))}function wo(s,e){s.zones=s.zones.filter(t=>!(t.team==="tele"&&t.owner===e))}function $M(s){let e=s.enemies;for(let t=0;t<e.length;t++){let n=e[t];if(!n.dead)for(let i=t+1;i<e.length;i++){let r=e[i];if(r.dead)continue;let a=r.x-n.x,o=r.z-n.z,c=n.r+r.r,l=a*a+o*o;if(l<c*c&&l>1e-6){let h=Math.sqrt(l),u=(c-h)/2,d=at[n.kind].boss?0:1,f=at[r.kind].boss?0:1,m=d+f||1;n.x-=a/h*u*(d/m)*2,n.z-=o/h*u*(d/m)*2,r.x+=a/h*u*(f/m)*2,r.z+=o/h*u*(f/m)*2}}}}var Tg=(s,e)=>{let t=e-s;for(;t>Math.PI;)t-=_h;for(;t<-Math.PI;)t+=_h;return t};function Zd(s,e,t){let n=Tg(s,e);return s+Math.max(-t,Math.min(t,n))}function YM(s,e,t){let n=s.boss,i=at[e.kind];if(e.act){if(e.act.id==="intro"){e.act.t+=t,e.act.t>=n.intro&&(e.act=null,e.cd=1,De(s,{k:"boss",s:"fight",id:e.id}));return}let l=So(e.act.id),h=e.act.t;e.act.t+=t;let u=0,d=0;if(l.move)for(let[b,g,p]of l.move)e.act.t>=b&&e.act.t<g&&(u+=Math.cos(e.face)*p,d+=Math.sin(e.face)*p);if(l.leap){let[b,g]=l.leap,p=Math.max(0,Math.min(1,(e.act.t-b)/(g-b))),v=p*p*(3-2*p);e.x=e.act.sx+(e.act.tx-e.act.sx)*v,e.z=e.act.sz+(e.act.tz-e.act.sz)*v,e.y=Math.sin(p*Math.PI)*5}else e.y=0;let f=l.hits&&l.hits[0]?l.hits[0].t:0,m=ot(s,e.target);if(m&&e.act.t<f*.55&&!l.leap&&!l.noTrack){e.face=Zd(e.face,Ji(e,m),t*2.5);for(let b of s.zones)b.team==="tele"&&b.owner===e.id&&!b.atTarget&&(b.dir=e.face,b.x=e.x,b.z=e.z)}if(yh(s,e,h,e.act.t,"enemy"),l.judgement&&JM(s,e,t),e.x+=u*t,e.z+=d*t,Wn(e,e.r,s.sealed),e.act&&e.act.t>=l.dur){let b=e.act.id;if(e.act=null,wo(s,e.id),b==="down"){e.act={id:"getup",t:0,dir:e.face,done:{},hitIds:[]};return}e.cd=n.queue.length?.15:n.enraged?.7:1.3}return}let r=e.hp/e.maxHp;if(i.judgement&&!n.judged&&r<=.55){n.judged=!0,n.phase=2,n.queue=[],hg(s,e,"kg_judgement"),De(s,{k:"boss",s:"p2",id:e.id});return}if(!i.judgement&&n.phase===1&&r<=.5&&(n.phase=2,n.queue=[],De(s,{k:"boss",s:"phase2",id:e.id,kind:e.kind})),!n.enraged&&r<=.25&&(n.enraged=!0,De(s,{k:"boss",s:"enrage",id:e.id,kind:e.kind})),e.think-=t,e.think<=0){e.think=.5;let l=Mg(s,e);e.target=l?l.id:null}let a=ot(s,e.target);if(!a)return;let o=Ei(e,a),c=Ji(e,a);if(e.face=Zd(e.face,c,t*3),e.cd>0&&!n.queue.length){let l=i.keep?o<i.keep-1?-1:o>i.keep+4?1:0:o>5?1:0;if(l){let h=i.speed*(n.enraged?1.3:1)*l;e.x+=Math.cos(c)*h*t,e.z+=Math.sin(c)*h*t,Wn(e,e.r,s.sealed),e.moving=!0}else e.moving=!1;return}if(e.moving=!1,!n.queue.length){let l=zm[i.patterns][n.phase],h=l[Math.floor(s.rng()*l.length)];i.gap&&o>11&&s.rng()<.6&&(h=[i.gap]),h[0]===n.last&&l.length>1&&(h=l[(l.indexOf(h)+1)%l.length]),n.last=h[0],n.queue=[...h]}hg(s,e,n.queue.shift())}function hg(s,e,t){let n=Ys[t],i=ot(s,e.target)||s.players.find(r=>r.alive);if(i&&(e.face=Ji(e,i)),e.act={id:t,t:0,dir:e.face,done:{},hitIds:[],sx:e.x,sz:e.z,tx:i?i.x:e.x,tz:i?i.z:e.z},n.leap){let r={x:e.act.tx,z:e.act.tz};Wn(r,e.r,s.sealed),e.act.tx=r.x,e.act.tz=r.z}Sg(s,e,n),n.counterWindow&&De(s,{k:"counterable",id:e.id,dur:n.counterWindow[1]-n.counterWindow[0]}),De(s,{k:"eact",id:e.id,a:t})}function KM(s,e,t){let n=s.boss;n.gaugeMax=170*(1+.8*(Mh(s)-1)),n.gauge=n.gaugeMax,n.judgeT=t.time,De(s,{k:"boss",s:"judgement",id:e.id})}function JM(s,e,t){let n=s.boss;if(!(n.gaugeMax<=0)&&(n.judgeT-=t,n.judgeT<=0)){n.gaugeMax=0;for(let i of s.players)Th(s,i,e,Ys.kg_judgement.judgement.mult,e.x,e.z,3);De(s,{k:"boss",s:"judgeFail",id:e.id,x:e.x,z:e.z}),e.act=null,e.cd=1.5}}function ZM(s,e){let t=s.boss;t.gaugeMax=0,t.gauge=0,e.act={id:"down",t:0,dir:e.face,done:{},hitIds:[]},De(s,{k:"boss",s:"judgeOk",id:e.id,x:e.x,z:e.z})}function QM(s,e){for(let t=s.projs.length-1;t>=0;t--){let n=s.projs[t],i=Hd[n.kind];n.life-=e,n.x+=Math.cos(n.dir)*n.speed*e,n.z+=Math.sin(n.dir)*n.speed*e;let r=n.life<=0,a={x:n.x,z:n.z};if(!r&&Wn(a,.1,s.sealed)&&(r=!0),!r)if(n.team==="player"){let o=ot(s,n.owner);for(let c of s.enemies)if(!(c.dead||n.hits.includes(c.id)||(c.iframeUntil||0)>s.t)&&!(Math.hypot(c.x-n.x,c.z-n.z)>c.r+n.r)&&(n.hits.push(c.id),o&&To(s,c,o,{mult:n.mult,stag:i.stag,kb:i.kb},n.x-Math.cos(n.dir),n.z-Math.sin(n.dir)),!i.pierce)){r=!0;break}}else for(let o of s.players){if(!o.alive||Math.hypot(o.x-n.x,o.z-n.z)>Qs+n.r)continue;let c=s.enemies.find(l=>l.id===n.owner)||{st:{atk:70}};Th(s,o,c,n.mult,n.x,n.z,.6),r=!0;break}if(r){if(i.explode&&n.team==="player"){let o=ot(s,n.owner);for(let c of s.enemies)!c.dead&&Math.hypot(c.x-n.x,c.z-n.z)<i.explode.r+c.r&&o&&To(s,c,o,i.explode,n.x,n.z);De(s,{k:"explode",x:n.x,z:n.z,r:i.explode.r,fx:"fire"})}else De(s,{k:"phit",x:n.x,z:n.z,kind:n.kind});s.projs.splice(t,1)}}}function e1(s,e){for(let t of[...s.zones]){if(t.gone)continue;let n=t.t;if(t.t+=e,t.track){let i=s.enemies.find(r=>r.id===t.owner);i&&(t.x=i.x,t.z=i.z,t.dir=i.face)}if(t.team==="tele"){t.t>t.warn+t.dur&&(t.gone=!0);continue}if(t.t>=t.warn){let i=n<t.warn||n===0;if(t.tickT-=e,i||t.tick&&t.tickT<=0){if(t.tickT=t.tick,i&&De(s,{k:"zonefire",id:t.id,fx:t.fx,x:t.x,z:t.z,r:t.shape.r||t.shape.r2}),t.team==="player"&&t.heal){let r=ot(s,t.owner),a=t.heal*(r&&Qr(r).healMult||1);for(let o of s.players)o.alive&&gs(t.shape,t.x,t.z,t.dir,o.x,o.z,Qs)&&nf(s,o,o.st.hp*a,t.owner)}if(t.team==="player"&&t.mult){let r=ot(s,s.players.some(a=>a.id===t.owner)?t.owner:-1);for(let a of s.enemies)a.dead||!gs(t.shape,t.x,t.z,t.dir,a.x,a.z,a.r)||(r&&To(s,a,r,{mult:t.mult,stag:t.stag,kb:t.kb},t.x,t.z),t.slow&&(a.slowT=.6))}else if(t.team!=="player"){let r=s.enemies.find(a=>a.id===t.owner)||{st:{atk:70}};for(let a of s.players)a.alive&&gs(t.shape,t.x,t.z,t.dir,a.x,a.z,Qs)&&Th(s,a,r,t.mult,t.x,t.z,t.kb)}}t.t>=t.warn+t.dur&&(t.gone=!0)}}s.zones=s.zones.filter(t=>!t.gone)}function t1(s,e){s.phase==="play"&&jt.forEach((t,n)=>{let i=s.rooms[n];if(i.state==="idle"&&n>0&&s.rooms[n-1].state==="cleared"&&s.players.some(o=>o.alive&&n1(t,o.x,o.z))&&gg(s,n),!(i.state!=="active"||t.boss||s.enemies.some(a=>!a.dead&&a.room===n))&&(i.waveT-=e,!(i.waveT>0))){if(i.wave++,i.wave>=t.waves.length){HM(s,n);return}for(let[a,o,c,l]of t.waves[i.wave]){let h=zn(o,c);ea(s,a,h.x+(s.rng()-.5)*2,h.z+(s.rng()-.5)*2,!!l,n)}for(let a=1;a<Mh(s);a++){let[o,c,l]=t.waves[i.wave][a%t.waves[i.wave].length],h=zn(c,l);ea(s,o==="mage"||at[o].boss?"minion":o,h.x+(s.rng()-.5)*3,h.z+(s.rng()-.5)*3,!1,n)}i.waveT=1.4,De(s,{k:"wave",i:n,n:i.wave+1,of:t.waves.length})}})}function n1(s,e,t){let n=(s.x0-.5)*4+1.5,i=(s.x1+.5)*4-1.5,r=(s.z0-.5)*4+1.5,a=(s.z1+.5)*4-1.5;return e>n&&e<i&&t>r&&t<a}function i1(s,e){for(let t=s.drops.length-1;t>=0;t--){let n=s.drops[t];n.t+=e;let i=ot(s,n.owner);if(!i){s.drops.splice(t,1);continue}i.alive&&n.t>.8&&Math.hypot(i.x-n.x,i.z-n.z)<1.8&&(s.drops.splice(t,1),De(s,{k:"loot",pid:i.id,item:n.item}))}for(let t of s.chests)if(!(t.open||!s.players.find(i=>i.alive&&Math.hypot(i.x-t.x,i.z-t.z)<2.4))){t.open=!0,De(s,{k:"chest",id:t.id,x:t.x,z:t.z});for(let i of s.players)for(let r=0;r<2;r++)yg(s,i,t.x,t.z+1.5,t.gold?1.2:.5)}}function af(s){return{cds:s.cds,potions:s.potions,feathers:s.feathers,st:s.st,combo:s.combo}}ai();$i();var Eg="ashen-crown-v1-",wg="ABCDEFGHJKLMNPQRSTUVWXYZ23456789",Ag={debug:0};function cf(s=4){let e="";for(let t=0;t<s;t++)e+=wg[Math.random()*wg.length|0];return e}function wh(s){return String(s||"").toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,6)}function Rg(){if(!window.Peer)throw new Error("\uB124\uD2B8\uC6CC\uD06C \uBAA8\uB4C8\uC744 \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. \uC778\uD130\uB137 \uC5F0\uACB0\uC744 \uD655\uC778\uD558\uC138\uC694.")}function Cg(s,e=null){return Rg(),new Promise((t,n)=>{let i=0,r=()=>{let a=e||cf(),o=new window.Peer(Eg+a,Ag),c=!1;o.on("open",()=>{c=!0,t({code:a,peer:o})}),o.on("connection",s),o.on("error",l=>{if(!c&&l.type==="unavailable-id"&&i++<5){o.destroy(),setTimeout(r,e?1500:0);return}if(!c&&l.type==="unavailable-id"){n(new Error("\uC774 \uC6D4\uB4DC\uAC00 \uC774\uBBF8 \uB2E4\uB978 \uCC3D\uC5D0\uC11C \uC5F4\uB824 \uC788\uC2B5\uB2C8\uB2E4. \uADF8 \uCC3D\uC744 \uB2EB\uACE0 \uC7A0\uC2DC \uB4A4 \uB2E4\uC2DC \uC5EC\uC138\uC694."));return}c?console.warn("[peer]",l.type,l):n(new Error(of(l)))}),o.on("disconnected",()=>{o.destroyed||o.reconnect()})};r()})}function Ig(s){return Rg(),new Promise((e,t)=>{let n=new window.Peer(Ag),i=!1,r=o=>{i||(i=!0,n.destroy(),t(new Error(o)))},a=setTimeout(()=>r("\uC5F0\uACB0 \uC2DC\uAC04\uC774 \uCD08\uACFC\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uCF54\uB4DC\uB97C \uD655\uC778\uD558\uAC70\uB098 \uB2E4\uC2DC \uC2DC\uB3C4\uD558\uC138\uC694."),15e3);n.on("open",()=>{let o=n.connect(Eg+wh(s),{reliable:!0,serialization:"json"});o.on("open",()=>{i||(i=!0,clearTimeout(a),e({peer:n,conn:o}))}),o.on("error",c=>r(of(c)))}),n.on("error",o=>{clearTimeout(a),r(of(o))})})}function of(s){switch(s&&s.type){case"peer-unavailable":return"\uD574\uB2F9 \uCF54\uB4DC\uC758 \uC6D4\uB4DC\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uC6D4\uB4DC \uC8FC\uC778\uC774 \uC6D4\uB4DC\uB97C \uC5F4\uC5B4 \uB450\uC5C8\uB294\uC9C0 \uD655\uC778\uD558\uC138\uC694.";case"network":case"server-error":case"socket-error":case"socket-closed":return"\uC5F0\uACB0 \uC11C\uBC84\uC5D0 \uC811\uC18D\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uC7A0\uC2DC \uD6C4 \uB2E4\uC2DC \uC2DC\uB3C4\uD558\uC138\uC694.";case"browser-incompatible":return"\uC774 \uBE0C\uB77C\uC6B0\uC800\uB294 \uC628\uB77C\uC778 \uD611\uB3D9\uC744 \uC9C0\uC6D0\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.";case"webrtc":return"\uC0C1\uB300\uC640 \uC9C1\uC811 \uC5F0\uACB0\uD558\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4(\uB124\uD2B8\uC6CC\uD06C \uBC29\uD654\uBCBD \uAC00\uB2A5\uC131).";default:return s&&s.message||"\uC54C \uC218 \uC5C6\uB294 \uB124\uD2B8\uC6CC\uD06C \uC624\uB958"}}var Pg=20,s1=.1,_t=s=>Math.round(s*100)/100,r1=100,a1=.4,Eh=s=>String(s??"").replace(/\s+/g," ").trim().slice(0,r1);function o1(s){return{id:s.id,cls:s.cls,spec:s.spec,name:s.name,x:s.x,z:s.z,y:s.y||0,face:s.face,hp:Math.max(0,Math.round(s.hp)),maxHp:s.st.hp,shield:s.shield,alive:s.alive,act:s.act?s.act.id:null,actT:s.act?s.act.t:0,moving:Math.hypot(s.vx||0,s.vz||0)>.6,speed:Math.hypot(s.vx||0,s.vz||0),downT:s.downT,revive:s.revive,tp:s.tp,level:s.level,rage:s.buffs.some(e=>e.kind==="rage")}}function c1(s,e){return{id:s.id,kind:s.kind,elite:s.elite,x:s.x,z:s.z,y:s.y||0,face:s.face,hp:Math.max(0,Math.round(s.hp)),maxHp:s.maxHp,act:s.act?s.act.id:null,actT:s.act?s.act.t:0,dead:s.dead,deadT:s.deadT,moving:s.moving??Math.hypot(s.vx||0,s.vz||0)>.4,speed:Math.hypot(s.vx||0,s.vz||0)||(s.moving?3.6:0),intro:s.act&&s.act.id==="intro",slow:s.slowT>0}}function kg(s,e){let t=s.boss&&s.enemies.find(n=>n.id===s.boss.id);return{t:s.t,phase:s.phase,endT:s.endT,difficulty:s.difficulty,rooms:s.rooms.map(n=>n.state),players:s.players.map(o1),enemies:s.enemies.map(n=>c1(n,s)),projs:s.projs.map(n=>({id:n.id,kind:n.kind,x:n.x,z:n.z,dir:n.dir,team:n.team})),zones:s.zones.map(n=>({id:n.id,team:n.team,shape:n.shape,x:n.x,z:n.z,dir:n.dir,t:n.t,warn:n.warn,dur:n.dur,fx:n.fx})),drops:s.drops.filter(n=>n.owner===e).map(n=>({id:n.id,x:n.x,z:n.z,rarity:n.item.rarity,name:n.item.name})),chests:s.chests.map(n=>({id:n.id,x:n.x,z:n.z,open:n.open})),boss:t?{id:t.id,kind:t.kind,hp:Math.max(0,Math.round(t.hp)),maxHp:t.maxHp,phase:s.boss.phase,gauge:s.boss.gauge,gaugeMax:s.boss.gaugeMax,judgeT:s.boss.judgeT,enraged:s.boss.enraged,dead:t.dead}:null}}var Lg=s=>s.k==="loot"?s.pid:null,Co=s=>({name:String(s.name||"\uBAA8\uD5D8\uAC00").slice(0,12),cls:nt[s.cls]?s.cls:"knight",spec:String(s.spec||""),level:Math.max(1,Math.min(20,s.level|0)),gear:s.gear?Dg(s.gear):Object.values(s.equipped||{}).filter(Boolean)}),Io=class{constructor({profile:e,online:t,difficulty:n=1,world:i=null,handlers:r={}}){this.mode="host",this.online=t,this.h=r,this.profile=e,this.worldInfo=i,this.localId=1,this.nextPid=2,this.world=Qd(void 0,n),Ao(this.world,{id:1,...Co(e.character),local:!0}),this.peers=new Map,this.acc=0,this.snapAcc=0,this.fx=[],this.net=[],this.code=null}async open(){if(!this.online)return;let{code:e,peer:t}=await Cg(n=>this.onConnection(n),this.worldInfo?.code);this.code=e,this.peer=t}onConnection(e){e.on("open",()=>{let t=this.world;if(t.players.length>=4||t.phase!=="lobby"){e.send({t:"bye",reason:t.phase!=="lobby"?"\uC6D4\uB4DC \uD30C\uD2F0\uAC00 \uB358\uC804 \uC548\uC5D0 \uC788\uC2B5\uB2C8\uB2E4. \uB300\uAE30\uC2E4\uB85C \uB3CC\uC544\uC624\uBA74 \uB2E4\uC2DC \uCC38\uAC00\uD558\uC138\uC694.":"\uC6D4\uB4DC\uAC00 \uAC00\uB4DD \uCC3C\uC2B5\uB2C8\uB2E4 (\uCD5C\uB300 4\uBA85)."}),setTimeout(()=>e.close(),300);return}let n={conn:e,pid:0};this.peers.set(e.peer,n),e.on("data",i=>this.onMessage(n,i)),e.on("close",()=>this.dropPeer(e.peer)),e.on("error",()=>this.dropPeer(e.peer))})}onMessage(e,t){if(!t||typeof t!="object")return;let n=this.world;if(t.t==="hello"&&!e.pid){e.joining||(e.joining=!0,this.admit(e,t).finally(()=>{e.joining=!1}));return}if(e.pid)switch(t.t){case"m":xg(n,e.pid,t);break;case"c":{let i=ot(n,e.pid);if(!i)break;t.k in i.cds&&i.cds[t.k]<.3&&(i.cds[t.k]=0),i.alive&&i.act&&t.k!=="potion"&&(i.act=null);let r=oh(i.cls,i.spec);t.k==="basic"&&r.includes(t.a)&&(i.combo=r.indexOf(t.a),i.comboT=i.combo?.01:-1),vg(n,e.pid,t.k,+t.ax,+t.az);break}case"gear":{let i=Math.max(1,Math.min(20,t.level|0)),r=Dg(t.gear);tf(n,e.pid,i,r),Object.assign(e.char,{level:i,gear:r});break}case"char":{if(n.phase!=="lobby")break;e.char=Co(t),ef(n,e.pid,e.char),this.broadcastRoster();break}case"progress":this.worldInfo&&e.uid&&t.data&&typeof t.data=="object"&&this.worldInfo.save(e.uid,e.char.name,t.data);break;case"ping":e.conn.send({t:"pong",c:t.c});break;case"chat":{let i=performance.now()/1e3;if(i-(e.chatT||0)<a1)break;e.chatT=i,this.say(e.pid,t.text);break}}}say(e,t){let n=ot(this.world,e),i=Eh(t);n&&i&&this.relayChat({id:e,name:n.name,cls:n.cls,text:i})}relayChat(e){for(let t of this.peers.values())if(t.pid)try{t.conn.send({t:"chat",...e})}catch{}this.h.onChat?.(e)}chat(e){this.say(this.localId,e)}async admit(e,t){let n=c=>{try{e.conn.send({t:"bye",reason:c})}catch{}setTimeout(()=>e.conn.close(),300)},i=this.worldInfo;if(!i)return n("\uC774 \uD30C\uD2F0\uB294 \uCC38\uAC00\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.");if(!await i.verify(t.password))return n("\uBE44\uBC00\uBC88\uD638\uAC00 \uD2C0\uB838\uC2B5\uB2C8\uB2E4.");let r=String(t.uid||"").slice(0,40);if(r.length<8||r===this.profile.uid||[...this.peers.values()].some(c=>c!==e&&c.uid===r))return n("\uAC19\uC740 \uBE0C\uB77C\uC6B0\uC800\uC758 \uCE90\uB9AD\uD130\uAC00 \uC774\uBBF8 \uC774 \uC6D4\uB4DC\uC5D0 \uC811\uC18D\uD574 \uC788\uC2B5\uB2C8\uB2E4.");let a=this.world;if(a.phase!=="lobby")return n("\uC6D4\uB4DC \uD30C\uD2F0\uAC00 \uB358\uC804 \uC548\uC5D0 \uC788\uC2B5\uB2C8\uB2E4. \uB300\uAE30\uC2E4\uB85C \uB3CC\uC544\uC624\uBA74 \uB2E4\uC2DC \uCC38\uAC00\uD558\uC138\uC694.");if(a.players.length>=4)return n("\uC6D4\uB4DC\uAC00 \uAC00\uB4DD \uCC3C\uC2B5\uB2C8\uB2E4 (\uCD5C\uB300 4\uBA85).");if(!this.peers.has(e.conn.peer))return;let o=i.progressFor(r,t.name);i.save(r,o.chars[o.current].name,o),e.uid=r,e.pid=this.nextPid++,e.char=Co(o.chars[o.current]),Ao(a,{id:e.pid,...e.char}),e.conn.send({t:"welcome",pid:e.pid,seed:a.seed,world:{name:i.name,code:i.code},progress:o}),this.broadcastRoster(),this.relayChat({sys:!0,text:`${e.char.name} \uB2D8\uC774 \uC6D4\uB4DC\uC5D0 \uB4E4\uC5B4\uC654\uC2B5\uB2C8\uB2E4`})}setChar(e){ef(this.world,this.localId,Co(e)),this.broadcastRoster()}backToLobby(){let e=this.world;this.world=Qd(void 0,e.difficulty),Ao(this.world,{id:this.localId,...Co(this.profile.character),local:!0});for(let t of this.peers.values())t.pid&&Ao(this.world,{id:t.pid,...t.char});this.fx=[],this.net=[],this.acc=0;for(let t of this.peers.values())if(t.pid)try{t.conn.send({t:"lobby"})}catch{}this.broadcastRoster()}dropPeer(e){let t=this.peers.get(e);if(t&&(this.peers.delete(e),t.pid)){let n=ot(this.world,t.pid);fg(this.world,t.pid),this.broadcastRoster(),n&&this.relayChat({sys:!0,text:`${n.name} \uB2D8\uC774 \uB5A0\uB0AC\uC2B5\uB2C8\uB2E4`})}}roster(){return this.world.players.map(e=>({id:e.id,name:e.name,cls:e.cls,spec:e.spec,level:e.level,host:e.id===1}))}broadcastRoster(){let e=this.roster(),t=this.world.difficulty;for(let n of this.peers.values())n.pid&&n.conn.send({t:"roster",r:e,d:t});this.h.onRoster?.(e,t)}setDifficulty(e){pg(this.world,e),this.broadcastRoster()}get difficulty(){return this.world.difficulty}start(){mg(this.world);for(let e of this.peers.values())e.pid&&e.conn.send({t:"start"})}cast(e,t,n){let i=this.world,r=ot(i,this.localId);return tr(i,this.localId,e,t,n)}setGear(e,t){tf(this.world,this.localId,e,t)}update(e,t){let n=this.world,i=ot(n,this.localId);for(i&&Object.assign(i.input,{mx:t.mx,mz:t.mz,ax:t.ax,az:t.az,attack:t.attack}),this.acc+=Math.min(e,.25);this.acc>=Eo;)bg(n,Eo),this.acc-=Eo;let r=ug(n);for(let a of r){let o=Lg(a);(o===null||o===this.localId)&&this.fx.push(a)}this.peers.size&&this.net.push(...r),this.snapAcc+=e,this.snapAcc>=1/Pg&&(this.snapAcc%=1/Pg,this.sendSnapshots())}sendSnapshots(){if(!this.peers.size)return;let e=this.world,t=this.net.splice(0);for(let n of this.peers.values()){if(!n.pid)continue;let i=ot(e,n.pid);if(!i)continue;let r=kg(e,n.pid),a=t.filter(o=>{let c=Lg(o);return c===null||c===n.pid});try{n.conn.send({t:"s",v:l1(r),ev:a,me:af(i)})}catch{}}}takeEvents(){return this.fx.splice(0)}me(){return af(ot(this.world,this.localId))}self(){return ot(this.world,this.localId)}view(){return kg(this.world,this.localId)}get phase(){return this.world.phase}leave(){for(let e of this.peers.values())try{e.conn.send({t:"bye",reason:"\uD30C\uD2F0\uC7A5\uC774 \uAC8C\uC784\uC744 \uC885\uB8CC\uD588\uC2B5\uB2C8\uB2E4."})}catch{}setTimeout(()=>this.peer?.destroy(),200)}};function Dg(s){return Array.isArray(s)?s.slice(0,4).filter(e=>e&&typeof e.stats=="object").map(e=>{let t={};for(let n of["str","dex","int","vit","atk","hp","crit","critDmg","haste","def"]){if(!Number.isFinite(e.stats[n]))continue;let i=["crit","critDmg","haste"].includes(n)?1:["str","dex","int","vit"].includes(n)?500:5e3;t[n]=Math.max(0,Math.min(i,e.stats[n]))}return{stats:t}}):[]}function l1(s){for(let e of s.players)e.x=_t(e.x),e.z=_t(e.z),e.y=_t(e.y),e.face=_t(e.face),e.actT=_t(e.actT),e.speed=_t(e.speed);for(let e of s.enemies)e.x=_t(e.x),e.z=_t(e.z),e.y=_t(e.y),e.face=_t(e.face),e.actT=_t(e.actT),e.deadT=_t(e.deadT),e.speed=_t(e.speed);for(let e of s.projs)e.x=_t(e.x),e.z=_t(e.z),e.dir=_t(e.dir);for(let e of s.zones)e.x=_t(e.x),e.z=_t(e.z),e.dir=_t(e.dir),e.t=_t(e.t);return s.t=Math.round(s.t*1e3)/1e3,s}var Ah=class{constructor({profile:e,code:t,password:n="",handlers:i={}}){this.mode="client",this.h=i,this.profile=e,this.code=t,this.password=n,this.worldMeta=null,this.localId=0,this.snaps=[],this.pending=[],this.fx=[],this.offset=null,this.priv=null,this.rosterList=[],this.difficulty=1,this.phaseName="lobby",this.sendAcc=0,this.ping=0}async open(){let{peer:e,conn:t}=await Ig(this.code);this.peer=e,this.conn=t,await new Promise((i,r)=>{let a=setTimeout(()=>r(new Error("\uD30C\uD2F0\uC7A5\uC758 \uC751\uB2F5\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.")),1e4);t.on("data",o=>{o&&o.t==="welcome"?(clearTimeout(a),this.localId=o.pid,this.worldMeta=o.world||null,this.h.onWelcome?.(o),i()):o&&o.t==="bye"?(clearTimeout(a),r(new Error(o.reason))):this.onMessage(o)}),t.on("close",()=>this.onClose("\uD30C\uD2F0\uC7A5\uACFC\uC758 \uC5F0\uACB0\uC774 \uB04A\uC5B4\uC84C\uC2B5\uB2C8\uB2E4.")),t.send({t:"hello",uid:this.profile.uid,password:this.password,name:this.profile.character.name})});let n=this.profile.character;this.me_={id:this.localId,cls:n.cls,spec:n.spec,x:0,z:0,y:0,vx:0,vz:0,face:0,alive:!0,act:null,combo:0,comboT:0,cds:{q:0,w:0,e:0,r:0,dodge:0,potion:0},potions:3,buffs:[],slowT:0,kbx:0,kbz:0,st:{speed:nt[n.cls].base.speed,hp:1},hp:1,input:{mx:0,mz:0},tp:-1},this.pingTimer=setInterval(()=>{try{this.conn.send({t:"ping",c:performance.now()})}catch{}},2e3)}onClose(e){this.closed||(this.closed=!0,clearInterval(this.pingTimer),this.h.onDisconnect?.(e))}onMessage(e){if(e)switch(e.t){case"roster":this.rosterList=e.r,this.difficulty=Math.max(1,Math.min(10,e.d|0)),this.h.onRoster?.(e.r,this.difficulty);break;case"start":this.h.onStart?.();break;case"bye":this.onClose(e.reason);break;case"pong":this.ping=Math.round(performance.now()-e.c);break;case"s":this.onSnapshot(e);break;case"lobby":this.onLobby();break;case"chat":{let t=Eh(e.text);t&&this.h.onChat?.({id:e.id|0,name:Eh(e.name).slice(0,12),cls:e.cls,sys:!!e.sys,text:t});break}}}onSnapshot(e){let t=e.v,n=this.phaseName==="lobby"&&t.phase!=="lobby";n&&(this.offset=null,this.snaps=[],this.pending=[]);let r=performance.now()/1e3-t.t;this.offset=this.offset===null||r<this.offset?r:this.offset+.0015,t.pmap=new Map(t.players.map(c=>[c.id,c])),t.emap=new Map(t.enemies.map(c=>[c.id,c])),this.snaps.push(t),this.snaps.length>30&&this.snaps.shift(),this.priv=e.me,t.phase!==this.phaseName&&(this.phaseName=t.phase,n&&this.h.onStart?.()),e.ev?.length&&this.pending.push({t:t.t,ev:e.ev});let a=t.pmap.get(this.localId),o=this.me_;if(a&&o){(a.tp!==o.tp||!a.alive)&&(o.x=a.x,o.z=a.z,o.vx=o.vz=0,o.tp=a.tp,a.alive||(o.act=null)),o.alive=a.alive,o.hp=a.hp,o.st={...o.st,...e.me.st},o.potions=e.me.potions;for(let c in e.me.cds)e.me.cds[c]>o.cds[c]+.5&&(o.cds[c]=e.me.cds[c])}this.sealed=fo(t.rooms)}renderTime(){return this.offset===null?0:performance.now()/1e3-this.offset-s1}cast(e,t,n){let i=this.me_;if(!i)return null;if(!i.alive)return e==="potion"&&this.send({t:"c",k:e,ax:t,az:n}),null;let r=Ro(i,e,t,n);return r&&(this.send({t:"c",k:e,a:r.id,ax:_t(t),az:_t(n)}),this.fx.push({k:"act",id:this.localId,a:r.id,dir:r.dir,local:!0})),r}setGear(e,t){this.send({t:"gear",level:e,gear:t})}setChar(e){this.send({t:"char",name:e.name,cls:e.cls,spec:e.spec,level:e.level,gear:Object.values(e.equipped).filter(Boolean)}),this.me_&&(this.me_.cls=e.cls,this.me_.spec=e.spec,this.me_.st={...this.me_.st,speed:nt[e.cls].base.speed})}syncProgress(e){this.pendingProgress=e,!this.progressT&&(this.progressT=setTimeout(()=>{this.progressT=null,this.send({t:"progress",data:this.pendingProgress})},400))}onLobby(){this.phaseName="lobby",this.snaps=[],this.pending=[],this.offset=null;let e=this.me_;if(e){e.act=null,e.alive=!0,e.tp=-1,e.vx=e.vz=e.kbx=e.kbz=0;for(let t in e.cds)e.cds[t]=0}this.h.onLobby?.()}chat(e){let t=Eh(e);t&&this.send({t:"chat",text:t})}send(e){try{this.conn.send(e)}catch{}}update(e,t){let n=this.renderTime();for(;this.pending.length&&this.pending[0].t<=n+.03;)for(let r of this.pending.shift().ev)r.k==="act"&&r.id===this.localId||(r.k==="kb"&&r.id===this.localId&&this.me_&&(this.me_.kbx+=r.x,this.me_.kbz+=r.z),this.fx.push(r));let i=this.me_;!i||!this.snaps.length||(i.input=t,this.phaseName==="lobby"?sf(i,t,e):(i.alive&&t.attack&&(!i.act||Pt[i.act.id].combo!==void 0)&&this.cast("basic",t.ax,t.az),Sh(i,t,e,this.sealed||[])),this.sendAcc+=e,this.sendAcc>=1/30&&(this.sendAcc=0,this.send({t:"m",x:_t(i.x),z:_t(i.z),y:_t(i.y||0),f:_t(i.face),tp:i.tp})))}takeEvents(){return this.fx.splice(0)}me(){return this.priv?{...this.priv,cds:this.me_.cds,potions:this.me_.potions}:null}self(){return this.me_}get phase(){return this.phaseName}roster(){return this.rosterList}view(){let e=this.snaps;if(!e.length)return null;let t=this.renderTime(),n=e[e.length-1],i=n;for(let m=e.length-1;m>0;m--)if(e[m-1].t<=t){n=e[m-1],i=e[m];break}let r=i.t>n.t?Math.max(0,Math.min(1,(t-n.t)/(i.t-n.t))):1,a=(m,b)=>m+(b-m)*r,o=(m,b)=>{let g=b-m;for(;g>Math.PI;)g-=Math.PI*2;for(;g<-Math.PI;)g+=Math.PI*2;return m+g*r},c=Math.max(0,t-i.t),l=i.players.map(m=>{let b=n.pmap.get(m.id)||m;if(m.id===this.localId){let p=this.me_;return{...m,x:p.x,z:p.z,y:p.y||0,face:p.face,act:p.alive?p.act?.id??null:null,actT:p.act?.t??0,moving:Math.hypot(p.vx,p.vz)>.6,speed:Math.hypot(p.vx,p.vz)}}let g=b.tp===m.tp;return{...m,x:g?a(b.x,m.x):m.x,z:g?a(b.z,m.z):m.z,y:a(b.y,m.y),face:o(b.face,m.face),actT:m.act?m.actT+(m.act===b.act,0)+c:0}}),h=i.enemies.map(m=>{let b=n.emap.get(m.id);return b?{...m,x:a(b.x,m.x),z:a(b.z,m.z),y:a(b.y,m.y),face:o(b.face,m.face),actT:m.act&&b.act===m.act?a(b.actT,m.actT):m.actT}:m}),u=e[e.length-1],d=performance.now()/1e3-this.offset,f=u.projs.map(m=>{let b=Math.min(.2,d-u.t),g=22;return{...m,x:m.x+Math.cos(m.dir)*g*b,z:m.z+Math.sin(m.dir)*g*b}});return{...i,t:a(n.t,i.t),players:l,enemies:h,projs:f,zones:u.zones,drops:u.drops,chests:u.chests,boss:u.boss,phase:u.phase,rooms:u.rooms,endT:u.endT}}leave(){this.closed=!0,clearInterval(this.pingTimer),this.progressT&&(clearTimeout(this.progressT),this.progressT=null,this.send({t:"progress",data:this.pendingProgress})),setTimeout(()=>{try{this.conn?.close()}catch{}},150),setTimeout(()=>this.peer?.destroy(),350)}};ai();function Ng(s,e){let t=ot(s,e);if(!t)return;let n=t.input;if(n.attack=!1,n.mx=0,n.mz=0,!t.alive){tr(s,e,"potion",t.x,t.z);return}for(let l of s.zones)if(!(l.team!=="tele"&&l.team!=="enemy")&&l.t>l.warn-.45&&l.t<l.warn&&gs(l.shape,l.x,l.z,l.dir,t.x,t.z,.6)){let h=Math.atan2(t.z-l.z,t.x-l.x)+(l.shape.type==="donut"?Math.PI:0);n.mx=Math.cos(h),n.mz=Math.sin(h),tr(s,e,"dodge",t.x+n.mx*5,t.z+n.mz*5);return}let i=s.players.find(l=>!l.alive&&l!==t),r=null,a=s.enemies.filter(l=>!l.dead&&!(l.act&&l.act.id==="spawn")),o=null,c=1/0;for(let l of a){let h=Math.hypot(l.x-t.x,l.z-t.z);h<c&&(c=h,o=l)}if(i&&(!o||c>6))r=i;else if(o&&c<30){let l=t.cls==="mage"||t.cls==="archer",h=l?7:1.8+o.r;if(c>h?r=o:l&&c<4&&(n.mx=t.x-o.x,n.mz=t.z-o.z),n.ax=o.x,n.az=o.z,c<h+1.5){n.attack=!0;for(let u of["r","q","w","e"])if(t.cds[u]<=0&&s.rng()<.3&&tr(s,e,u,o.x,o.z))break;t.hp<t.st.hp*.45&&tr(s,e,"potion",t.x,t.z)}}else{let l=s.rooms.findIndex(h=>h.state!=="cleared");if(l>=0){let h=jt[l];r=zn((h.x0+h.x1)/2,(h.z0+h.z1)/2)}}if(r&&!n.mx&&!n.mz){let l=r.x,h=r.z;if(!mo(t.x,t.z,l,h,s.sealed,.6)){let m=th(t.x,t.z,l,h,s.sealed);m&&(l=m.x,h=m.z)}let u=l-t.x,d=h-t.z,f=Math.hypot(u,d);f>.6&&(n.mx=u/f,n.mz=d/f)}}var Fg="ashen.worlds.v1",lf=16,Rh=24,Po=6,Ug=12;function ko(){try{let s=JSON.parse(localStorage.getItem(Fg)||"{}");return s&&typeof s=="object"?s:{}}catch{return{}}}function hf(s){try{localStorage.setItem(Fg,JSON.stringify(s))}catch{}}async function zg(s){let e=new TextEncoder().encode(`ashen-crown:${s}`),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t),n=>n.toString(16).padStart(2,"0")).join("")}function Og(){return Object.values(ko()).sort((s,e)=>(e.lastPlayed||0)-(s.lastPlayed||0))}var Ch=s=>ko()[s]||null;async function Bg(s,e){let t=ko();if(Object.keys(t).length>=Ug)throw new Error(`\uC6D4\uB4DC\uB294 \uCD5C\uB300 ${Ug}\uAC1C\uAE4C\uC9C0 \uB9CC\uB4E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`);let n=new Set(Object.values(t).map(a=>a.code)),i;do i=cf(Po);while(n.has(i));let r={id:i,code:i,name:String(s).trim().slice(0,lf)||"\uC774\uB984 \uC5C6\uB294 \uC6D4\uB4DC",pass:e?await zg(e):"",created:Date.now(),lastPlayed:Date.now(),members:{}};return t[r.id]=r,hf(t),r}function Hg(s){let e=ko();delete e[s],hf(e)}async function Vg(s,e){return!s.pass||s.pass===await zg(String(e||"").slice(0,Rh))}function uf(s,e,t){let n=s.members[e];return yo(n?.progress,n?.name||t)}function df(s,e,t,n){let i=ko(),r=i[s];r&&(r.members[e]={name:String(t||"").slice(0,12),progress:yo(n,t),seen:Date.now()},r.lastPlayed=Date.now(),hf(i))}$i();var Yt=(s,e=document)=>e.querySelector(s),ci=Yt("#ui"),me=$m(),Cn=new dh,Ve=new Xl(Yt("#game")),ir=new Yl,Do=new fh(Yt("#game"));ci.innerHTML='<div class="screen loading"><div class="logo"><span class="k">\uC7BF\uBE5B \uC655\uAD00</span><span class="e">ASHEN CROWN</span></div><div class="lbar"><i></i></div><p class="lt">\uC9C0\uD558\uBB18\uC9C0\uB85C \uB0B4\uB824\uAC00\uB294 \uC911\u2026</p></div>';await ir.load(s=>{let e=Yt(".lbar i");e&&(e.style.width=Math.round(s*100)+"%")});var Ut=new Jl(Ve),No=new ih(Ve,ir,Ut),Xn=new gh(document.body,{profile:me,engine:Ve,audio:Cn,onGear:()=>Mn.session&&Mn.pushGear(),onMenu:()=>n0()}),Ae=null,hn="menu",jn=null,Mn=new vh({engine:Ve,assets:ir,vfx:Ut,level:No,audio:Cn,hud:Xn,input:Do,profile:me,onEnd:M1}),Qi=new bh({onSend:s=>Ae?.chat?.(s)}),$g=s=>{Qi.add(s,Ae?.localId),s.sys||Cn.play("ui",{})};Do.onMoveOrder=(s,e)=>{Ut.ring(s,e,.9,"#9fe0ff",.35,.2)};function Yg(){let s=me.settings;Cn.setVolume("master",s.master),Cn.setVolume("music",s.music),Cn.setVolume("sfx",s.sfx),Ve.setQuality(s.quality)}Yg();async function h1(){let{playerActor:s,enemyActor:e}=await Promise.resolve().then(()=>(uh(),Hm)),t=[],n=vn.x,i=vn.z-4,r=(c,l,h)=>{c.position.set(n+l,0,i+h),Ve.scene.add(c),t.push(c)};[...qn.map(c=>[c]),["archer","ranger"]].forEach(([c,l],h)=>{let u=s(ir,c,l);u.addXray("#ffd98a"),u.play("Idle"),u.mixer.update(.01),r(u.root,h*1.5-2,0)});for(let[c,l]of[["minion"],["warrior",!0],["archer"],["mage"],["priest"],["warden"],["king"]]){let h=e(ir,c,l);h.play("Idle_Combat"),h.mixer.update(.01),r(h.root,(Math.random()-.5)*6,3)}for(let c of[Ut.arc(n,1,i,0,3,2,"#ffd98a"),Ut.ring(n,i,3,"#ffcf6a"),Ut.beam(n,i,"#ffd27a",4,1,.5)])Ut.keep(c);Ut.bolt(n,i),Ut.spark(n,1,i,{n:4}),Ut.smoke(n,1,i,{n:2}),Ut.flash(n,2,i,"#fff",1,5,.05);for(let[c,l]of[{type:"circle",r:3},{type:"cone",r:3,ang:1},{type:"rect",len:4,w:1},{type:"donut",r:2,r2:5}].entries())Ut.keep(Ut.decal({id:-1-c,shape:l,x:n,z:i,dir:0,t:.1,warn:1,dur:.1,team:c%2?"tele":"player"},0));Ve.heroLight.userData.follow=t[0],Ve.snap(n,i);for(let c of No.seals)c.mesh.visible=!0;let a=new Ge(new ks(.3),new tn({color:"#fff",emissive:"#fff",emissiveIntensity:1.6,metalness:.3,roughness:.3})),o=new Ge(new Ls(.3),new Dt({color:"#fff"}));r(a,1,1),r(o,-1,1),Ut.update(.016),Ve.render(.016,0),Ve.render(.016,.016);for(let c of t)Ve.scene.remove(c);for(let c of No.seals)c.mesh.visible=!1;Ve.heroLight.userData.follow=null,Ut.sweepDecals(),Ut.sweepDecals(),Ut.clearTransient()}var Ft=Zs,Tt={actors:[],t:0,group:new St};{let s=new Un("#ff8a3a",40,18,1.6);s.position.set(Ft.x,1.4,Ft.z),Ve.scene.add(s),Tt.fireLight=s;for(let e=0;e<7;e++){let t=e/7*Math.PI*2,n=ir.prop(e%2?"h_bone_A":"d_rubble_half");n.position.set(Ft.x+Math.cos(t)*1.1,0,Ft.z+Math.sin(t)*1.1),n.scale.setScalar(.22),Tt.group.add(n)}Ve.scene.add(Tt.group),Tt.emitter=Ut.emitter({rate:60,emit:e=>{e.fire(Ft.x,.3,Ft.z,1.6,"#ff7a26"),Math.random()<.3&&e.fire(Ft.x,.5,Ft.z,1.1,"#ffb050")}}),qn.forEach((e,t)=>Kg(t))}function Kg(s){let e=qn[s],t=xo(ir,e,me.chars[e].spec),n=-Math.PI/2+(s-(qn.length-1)/2)*.56,i=Ft.x+Math.cos(n+Math.PI)*-3.2,r=Ft.z+Math.sin(n+Math.PI)*-3.2;t.root.position.set(i,0,r),t.root.rotation.y=Math.atan2(Ft.x-i,Ft.z-r),t.root.visible=Tt.actors[s]?.root.visible??!0,Tt.actors[s]&&Tt.group.remove(Tt.actors[s].root),Tt.group.add(t.root),Tt.actors[s]=t}function u1(s,e){if(Tt.t+=s,Tt.fireLight.intensity=40*(1+Math.sin(e*11)*.08+Math.sin(e*23)*.06),hn==="lobby"&&Ae)return d1(s,e);Tt.actors.forEach((a,o)=>{a.spec!==At(a.cls,me.chars[a.cls].spec).id&&Kg(o)});for(let a of Tt.actors){let o=a.cls===me.current;a.animate({act:null,moving:!1},s,o?{idle:nt[a.cls].idle}:{idle:"Sit_Floor_Idle"}),o&&a.cheer>0&&(a.cheer-=s,a.play("Cheer",{loop:!1}))}let t=!Xn.root.classList.contains("hidden");Qi.tagNames(t?[]:Tt.actors.map(a=>({id:"camp:"+a.cls,name:me.chars[a.cls].name,cls:a.cls,actor:a,me:a.cls===me.current})),Ve);let n=Tt.actors.find(a=>a.cls===me.current),i=n?n.root.position.x*.6+Ft.x*.4:Ft.x,r=n?n.root.position.z*.6+Ft.z*.4:Ft.z;Ve.follow(i-4.2,r-.5,s),No.update(s,e,["idle","idle","idle","idle","idle"],Ft),Ut.update(s),Ve.render(s,e)}function d1(s,e){let t=Mn.lobbyFrame(s),n=Mn.lastView;if(t){let i=1-Ve.zoom,r=innerWidth>900?4*i:0;Ve.follow(t.x*(1-.3*i)+Ft.x*.3*i-r,t.z*(1-.3*i)+(Ft.z+1)*.3*i,s),Ve.faceYaw=t.face}n&&Qi.update(s,n.players,Mn.pActors,Ve,Ae.localId),No.update(s,e,["idle","idle","idle","idle","idle"],t||Ft),Ut.update(s),Ve.render(s,e)}function Jg(s){for(let e of Tt.actors)e.root.visible=s}function mf(){Ve.camOffset.set(0,7.5,12.5),Ve.zoom=Ve.zoomTo=0,Ve.faceYaw=null,Ve.snap(Ft.x-2,Ft.z),Tt.group.visible=!0,Tt.emitter.dead=!1,Ut.emitters.includes(Tt.emitter)||Ut.emitters.push(Tt.emitter),Cn.setMusic("menu")}function f1(){Ve.camOffset.set(0,19,13.5),Tt.fireLight.intensity=0,Tt.group.visible=!1,Tt.emitter.dead=!0}function Zi(s,e=2600){let t=Yt(".toast");t||(t=document.createElement("div"),t.className="toast",document.body.appendChild(t)),t.textContent=s,t.classList.add("show"),clearTimeout(Zi.h),Zi.h=setTimeout(()=>t.classList.remove("show"),e)}function ta(s,e,t=[{label:"\uD655\uC778",primary:!0}]){let n=document.createElement("div");n.className="modal",n.innerHTML=`<div class="mcard"><h3>${s}</h3><div class="mbody">${e}</div><div class="row"></div></div>`;for(let i of t){let r=document.createElement("button");r.className="btn "+(i.primary?"primary":"ghost"),r.textContent=i.label,r.onclick=()=>{n.remove(),i.fn?.()},Yt(".row",n).appendChild(r)}document.body.appendChild(n)}function Zg(s,e,t,n=!1){let i=Kr(s),r=(a,o)=>n?"":`<button class="dstep" data-act="${t}${a}" ${o?"disabled":""} aria-label="\uB09C\uC774\uB3C4 ${a==="-"?"\uB0AE\uCD94\uAE30":"\uB192\uC774\uAE30"}">${a==="-"?"\u25C0":"\u25B6"}</button>`;return`<div class="diff-pick"><span class="dl">\uB09C\uC774\uB3C4</span>${r("-",s<=1)}<b>${s}</b>${r("+",s>=e)}<em>${n?"\uD30C\uD2F0\uC7A5\uC774 \uC815\uD569\uB2C8\uB2E4":`\uAC1C\uBC29 ${e} / ${ji}`} \xB7 \uC801 \uCCB4\uB825 \xD7${i.hp.toFixed(1)} \xB7 \uACF5\uACA9\uB825 \xD7${i.atk.toFixed(2)}</em></div>`}function na(){hn="menu";let s=vt(me),e=nt[s.cls],t=At(s.cls,s.spec),n=new URLSearchParams(location.search);ci.innerHTML=`
    <div class="screen menu">
      <div class="menu-left">
        <div class="logo"><span class="k">\uC7BF\uBE5B \uC655\uAD00</span><span class="e">ASHEN CROWN</span></div>
        <p class="tagline">\uD574\uACE8\uC655 \uC544\uB974\uCE74\uC2A4\uAC00 \uC7A0\uB4E0 \uC9C0\uD558\uBB18\uC9C0. \uCD5C\uB300 4\uBA85\uC758 \uD30C\uD2F0\uB85C \uC800\uC8FC\uBC1B\uC740 \uC655\uAD00\uC744 \uBD80\uC218\uC138\uC694.</p>
        <div class="classes">${qn.map(i=>{let r=me.chars[i];return`<button class="cls ${i===me.current?"on":""}" data-cls="${i}" style="--c:${nt[i].trail}">${rn(Js[i])}<b>${nt[i].name}</b><em>Lv ${r.level}</em></button>`}).join("")}</div>
        <div class="cls-info">
          <div class="ci-head"><label class="ci-name" title="\uCE90\uB9AD\uD130 \uC774\uB984 \uBC14\uAFB8\uAE30"><input id="name" maxlength="${Xd}" value="${Wt(s.name)}" autocomplete="off" spellcheck="false" aria-label="\uCE90\uB9AD\uD130 \uC774\uB984" /><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13 7l4 4"/></svg></label><span>Lv ${s.level} ${e.name} \xB7 \uC804\uD22C\uB825 ${wi(s)}</span></div>
          <button class="ci-spec" data-act="tree">${rn("tree")}<b>${t.name}</b><em class="role ${t.role}">${Bd[t.role]}</em><span>\uD328\uC2DC\uBE0C \xB7 ${t.passive.name}</span><i>\uC2A4\uD0AC \uD2B8\uB9AC \u203A</i></button>
          <div class="ci-skills">${["q","w","e","r"].map(i=>`<div class="cis" title="${Pt[t.skills[i]].name}: ${Pt[t.skills[i]].desc}"><kbd>${i.toUpperCase()}</kbd>${rn(t.skills[i])}<span>${Pt[t.skills[i]].name}</span></div>`).join("")}</div>
          <div class="xpline" title="\uB2E4\uC74C \uB808\uBCA8\uAE4C\uC9C0 \uD544\uC694\uD55C \uACBD\uD5D8\uCE58"><div class="xpl"><span>\uACBD\uD5D8\uCE58</span><b>${s.level>=Ks?"\uCD5C\uB300 \uB808\uBCA8":`${s.xp.toLocaleString()} / ${Ki(s.level).toLocaleString()} (${Math.floor(s.xp/Ki(s.level)*100)}%)`}</b></div><div class="xpbar"><i style="width:${s.level>=Ks?100:s.xp/Ki(s.level)*100}%"></i></div></div>
        </div>
        <div class="actions">
          ${Zg(me.difficulty,me.maxDifficulty,"diff")}
          <button class="btn primary big" data-act="solo">\uD63C\uC790 \uC785\uC7A5</button>
          <button class="btn" data-act="worlds">\uC6D4\uB4DC <small>\uCE5C\uAD6C\uC640 \uD568\uAED8, \uC6D4\uB4DC\uB9C8\uB2E4 \uB530\uB85C \uC131\uC7A5</small></button>
          <div class="join"><input id="code" maxlength="${Po}" placeholder="\uC6D4\uB4DC \uCF54\uB4DC" value="${Wt(wh(n.get("world")||""))}" autocomplete="off" /><button class="btn" data-act="join">\uCC38\uAC00</button></div>
          <div class="sub"><button class="btn ghost" data-act="inv">\uC7A5\uBE44</button><button class="btn ghost" data-act="tree">\uC2A4\uD0AC \uD2B8\uB9AC</button><button class="btn ghost" data-act="howto">\uC870\uC791\uBC95</button><button class="btn ghost" data-act="settings">\uC124\uC815</button></div>
        </div>
      </div>
      <footer class="credits">3D \uC5D0\uC14B: KayKit by Kay Lousberg (CC0) \xB7 <button class="link" data-act="about">\uC815\uBCF4</button></footer>
    </div>`,n.get("world")&&setTimeout(()=>Zi("\uC6D4\uB4DC \uCF54\uB4DC\uAC00 \uC785\uB825\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uCC38\uAC00\uB97C \uB204\uB974\uACE0 \uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD558\uC138\uC694",5e3),400)}ci.addEventListener("input",s=>{s.target.id==="name"&&(Jm(me,s.target.value),$t(me))});ci.addEventListener("change",s=>{s.target.id==="name"&&(s.target.value=vt(me).name)});ci.addEventListener("keydown",s=>{s.target.id==="name"&&s.code==="Enter"&&s.target.blur()});ci.addEventListener("click",s=>{let e=s.target.closest("[data-wcls]");if(e){v1(e.dataset.wcls);return}let t=s.target.closest("[data-cls]");if(t){Cn.unlock(),me.current=t.dataset.cls,$t(me);let r=Tt.actors.find(a=>a.cls===me.current);r&&(r.cheer=1.5),Cn.play("ui",{}),na();return}let n=s.target.closest("[data-act]");if(!n)return;Cn.unlock(),Cn.play("ui",{});let i=n.dataset.act;switch(i){case"solo":qg();break;case"worlds":g1();break;case"join":b1(Yt("#code").value);break;case"winv":Wg(ff);break;case"wtree":Gg(ff);break;case"tolobby":Ae?.mode==="host"&&jn&&(Ae.backToLobby(),e0());break;case"inv":Wg();break;case"howto":p1();break;case"tree":Gg();break;case"settings":m1();break;case"about":ta("\uC815\uBCF4","<p>\uC7BF\uBE5B \uC655\uAD00\uC740 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C \uB3D9\uC791\uD558\uB294 \uCFFC\uD130\uBDF0 \uC561\uC158 RPG \uC2DC\uD5D8\uD310\uC785\uB2C8\uB2E4.</p><ul><li>3D \uCE90\uB9AD\uD130, \uBAAC\uC2A4\uD130, \uB358\uC804 \uBAA8\uB378: KayKit (Kay Lousberg, CC0)</li><li>\uD6A8\uACFC\uC74C\uACFC \uC74C\uC545\uC740 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C \uC2E4\uC2DC\uAC04 \uD569\uC131\uD569\uB2C8\uB2E4.</li><li>\uC628\uB77C\uC778 \uD30C\uD2F0\uB294 \uBE0C\uB77C\uC6B0\uC800 \uAC04 \uC9C1\uC811 \uC5F0\uACB0(WebRTC)\uC744 \uC0AC\uC6A9\uD558\uBA70, \uAC19\uC740 \uD30C\uD2F0\uC6D0\uC5D0\uAC8C \uC11C\uB85C\uC758 IP \uC8FC\uC18C\uAC00 \uC804\uB2EC\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</li><li>\uD63C\uC790 \uD558\uAE30 \uCE90\uB9AD\uD130\uB294 \uC774 \uBE0C\uB77C\uC6B0\uC800\uC5D0 \uC800\uC7A5\uB429\uB2C8\uB2E4. \uC6D4\uB4DC \uC9C4\uD589\uC740 \uC6D4\uB4DC\uB97C \uB9CC\uB4E0 \uC0AC\uB78C\uC758 \uBE0C\uB77C\uC6B0\uC800\uC5D0 \uC800\uC7A5\uB429\uB2C8\uB2E4.</li></ul>");break;case"menu":nr();break;case"diff-":case"diff+":me.difficulty=Math.max(1,Math.min(me.maxDifficulty,me.difficulty+(i==="diff+"?1:-1))),$t(me),na();break;case"ldiff-":case"ldiff+":Ae?.mode==="host"&&Ae.setDifficulty(Math.max(1,Math.min(me.maxDifficulty,Ae.difficulty+(i==="ldiff+"?1:-1))));break;case"nextdiff":case"retry":{let r=i==="nextdiff"?Math.min(me.maxDifficulty,pf.difficulty+1):pf.difficulty;nr(),me.difficulty=r,$t(me),qg();break}case"leave":nr();break;case"start":Ae?.mode==="host"&&(Ae.start(),bf());break;case"copy":_1();break;case"resume":Yt(".pause")?.remove();break;case"quit":Yt(".pause")?.remove(),nr();break}});function Gg(s=na){let e=document.createElement("div");e.className="modal";let t=()=>{let n=vt(me),i=nt[n.cls],r=sh[n.cls],a=c=>r.length>1&&r.every(l=>l.skills[c]===r[0].skills[c]),o=["q","w","e","r"].some(a);e.innerHTML=`<div class="mcard tree">
      <h3>\uC2A4\uD0AC \uD2B8\uB9AC</h3>
      <div class="tree-root" style="--c:${i.trail}">${rn(Js[n.cls])}<div><b>${Wt(n.name)}</b><em>Lv ${n.level} ${i.name}</em></div></div>
      <div class="tree-branches n${r.length}">${r.map(c=>`
        <div class="branch ${c.id===n.spec?"on":""}" data-spec="${c.id}" style="--c:${i.trail}">
          <div class="br-head"><b>${c.name}</b><em class="role ${c.role}">${Bd[c.role]}</em></div>
          <p>${c.desc}</p>
          <div class="br-passive">${rn("passive")}<div><b>\uD328\uC2DC\uBE0C \xB7 ${c.passive.name}</b><span>${c.passive.desc}</span></div></div>
          <div class="br-skills">${["q","w","e","r"].map(l=>{let h=Pt[c.skills[l]];return`<div class="node ${a(l)?"shared":""}" title="${h.name}: ${h.desc} (\uC7AC\uC0AC\uC6A9 ${h.cd}\uCD08)"><kbd>${l.toUpperCase()}</kbd>${rn(c.skills[l])}<span>${h.name}</span>${a(l)?"<i>\uACF5\uD1B5</i>":""}</div>`}).join("")}</div>
          <div class="br-pick">${c.id===n.spec?'<span class="picked">\uC120\uD0DD\uB428</span>':'<button class="btn small">\uC774 \uACC4\uC5F4\uB85C \uC804\uD658</button>'}</div>
        </div>`).join("")}</div>
      <p class="note">${r.length>1?`\uCEA0\uD504\uC640 \uC6D4\uB4DC \uB300\uAE30\uC2E4\uC5D0\uC11C \uC5B8\uC81C\uB4E0 \uACC4\uC5F4\uC744 \uBC14\uAFC0 \uC218 \uC788\uC2B5\uB2C8\uB2E4.${o?' <b class="tag-shared">\uACF5\uD1B5</b> \uD45C\uC2DC\uB294 \uB450 \uACC4\uC5F4\uC774 \uB611\uAC19\uC774 \uC4F0\uB294 \uC2A4\uD0AC\uC785\uB2C8\uB2E4.':""}`:"\uC774 \uC9C1\uC5C5\uC740 \uB2E8\uC77C \uACC4\uC5F4\uC785\uB2C8\uB2E4."} \uC2A4\uD0AC\uC5D0 \uB9C8\uC6B0\uC2A4\uB97C \uC62C\uB9AC\uBA74 \uC124\uBA85\uC774 \uB098\uC635\uB2C8\uB2E4.</p>
      <div class="row"><button class="btn primary" data-close>\uB2EB\uAE30</button></div>
    </div>`};e.addEventListener("click",n=>{if(n.target.closest("[data-close]")||n.target===e){e.remove(),s();return}let i=n.target.closest(".branch[data-spec]"),r=vt(me);!i||i.dataset.spec===r.spec||(r.spec=i.dataset.spec,$t(me),Cn.play("equip",{}),t(),s())}),t(),document.body.appendChild(e)}function p1(){ta("\uC870\uC791\uBC95",`<div class="howto">
    <div><kbd>\uC6B0\uD074\uB9AD</kbd>\uC774\uB3D9 (\uB204\uB974\uACE0 \uC788\uC73C\uBA74 \uCEE4\uC11C\uB97C \uB530\uB77C\uAC10)</div><div><kbd>\uC88C\uD074\uB9AD</kbd>\uAE30\uBCF8 \uACF5\uACA9 (\uB204\uB974\uACE0 \uC788\uC73C\uBA74 \uC5F0\uC18D \uACF5\uACA9)</div>
    <div><kbd>Q</kbd><kbd>W</kbd><kbd>E</kbd><kbd>R</kbd>\uC2A4\uD0AC (\uCEE4\uC11C \uBC29\uD5A5\xB7\uC704\uCE58\uB85C \uC0AC\uC6A9)</div><div><kbd>Space</kbd>\uD68C\uD53C \uAD6C\uB974\uAE30 (\uC9E7\uC740 \uBB34\uC801)</div>
    <div><kbd>F</kbd>\uBB3C\uC57D / \uC4F0\uB7EC\uC84C\uC744 \uB54C \uBD80\uD65C\uC758 \uAE43\uD138</div><div><kbd>Tab</kbd><kbd>I</kbd>\uC7A5\uBE44</div><div><kbd>\uD720</kbd>\uD655\uB300\xB7\uCD95\uC18C (\uB05D\uAE4C\uC9C0 \uB2F9\uAE30\uBA74 \uC5BC\uAD74)</div><div><kbd>\uBC29\uD5A5\uD0A4</kbd>\uBCF4\uC870 \uC774\uB3D9</div><div><kbd>Esc</kbd>\uBA54\uB274</div>
  </div><ul class="tips"><li>\uBD89\uC740 \uC7A5\uD310\uC774 \uAC00\uB4DD \uCC28\uBA74 \uACF5\uACA9\uC774 \uB4E4\uC5B4\uC635\uB2C8\uB2E4. \uC7A5\uD310 \uBC16\uC73C\uB85C \uD53C\uD558\uC138\uC694.</li><li>\uC801\uC758 \uB4F1 \uB4A4\uB97C \uB54C\uB9AC\uBA74 \uBC31\uC5B4\uD0DD \uD53C\uD574\uAC00 \uB4E4\uC5B4\uAC11\uB2C8\uB2E4. \uBC29\uD328\uB97C \uB4E0 \uB9DD\uC790 \uC804\uC0AC\uB294 \uC815\uBA74 \uACF5\uACA9\uC744 \uB9C9\uC2B5\uB2C8\uB2E4.</li><li>\uD574\uACE8\uC655\uC774 \uD478\uB974\uAC8C \uBE5B\uB0A0 \uB54C \uCE74\uC6B4\uD130 \uC2A4\uD0AC(\uC131\uAE30\uC0AC Q, \uB3C4\uC801 Q)\uC744 \uB9DE\uD788\uBA74 \uAE30\uC808\uC2DC\uD0AC \uC218 \uC788\uC2B5\uB2C8\uB2E4.</li></ul>`)}function m1(){let s=me.settings;ta("\uC124\uC815",`<div class="settings">
    <label>\uC804\uCCB4 \uC74C\uB7C9<input type="range" min="0" max="1" step="0.05" data-s="master" value="${s.master}"></label>
    <label>\uC74C\uC545<input type="range" min="0" max="1" step="0.05" data-s="music" value="${s.music}"></label>
    <label>\uD6A8\uACFC\uC74C<input type="range" min="0" max="1" step="0.05" data-s="sfx" value="${s.sfx}"></label>
    <label>\uADF8\uB798\uD53D \uD488\uC9C8<select data-s="quality">${[[3,"\uCD5C\uACE0 (\uC570\uBE44\uC5B8\uD2B8 \uC624\uD074\uB8E8\uC804, 4x \uC548\uD2F0\uC568\uB9AC\uC5B4\uC2F1)"],[2,"\uB192\uC74C (\uAD8C\uC7A5)"],[1,"\uBCF4\uD1B5 (\uC800\uD574\uC0C1\uB3C4 \uADF8\uB9BC\uC790)"],[0,"\uB0AE\uC74C (\uADF8\uB9BC\uC790, \uBE5B \uBC88\uC9D0 \uB054)"]].map(([e,t])=>`<option value="${e}" ${s.quality==e?"selected":""}>${t}</option>`).join("")}</select></label>
    <label class="ck"><input type="checkbox" data-s="numbers" ${s.numbers?"checked":""}>\uD53C\uD574 \uC22B\uC790 \uD45C\uC2DC</label>
    <label class="ck"><input type="checkbox" data-s="fps" ${s.fps?"checked":""}>FPS \uD45C\uC2DC</label>
    <p class="note">\uD504\uB808\uC784\uC774 \uB5A8\uC5B4\uC9C0\uBA74 \uB80C\uB354 \uD574\uC0C1\uB3C4\uB97C \uC790\uB3D9\uC73C\uB85C \uB0AE\uCDB0 \uBD80\uB4DC\uB7EC\uC6C0\uC744 \uC720\uC9C0\uD569\uB2C8\uB2E4.</p>
  </div>`),document.querySelector(".modal").addEventListener("input",e=>{let t=e.target.dataset.s;t&&(s[t]=e.target.type==="checkbox"?e.target.checked:+e.target.value,$t(me),Yg())})}function Wg(s=na){Xn.show(!0),Xn.root.classList.add("inv-only"),Xn.toggleInventory(!0);let t=setInterval(()=>{Xn.root.querySelector(".inventory").classList.contains("hidden")&&(Xn.root.classList.remove("inv-only"),Xn.show(!1),s(),clearInterval(t))},200)}function g1(){let s=document.createElement("div");s.className="modal";let e=()=>{let t=Og();s.innerHTML=`<div class="mcard worlds">
      <h3>\uC6D4\uB4DC</h3>
      <p class="note">\uC6D4\uB4DC\uB294 \uC774 \uBE0C\uB77C\uC6B0\uC800\uC5D0 \uC800\uC7A5\uB418\uB294 \uC6B0\uB9AC\uB9CC\uC758 \uC11C\uBC84\uC785\uB2C8\uB2E4. \uCE5C\uAD6C\uB294 \uC6D4\uB4DC \uCF54\uB4DC\uC640 \uBE44\uBC00\uBC88\uD638\uB85C \uB4E4\uC5B4\uC624\uACE0, \uC6D4\uB4DC\uC5D0\uC11C \uC5BB\uC740 \uB808\uBCA8\uACFC \uC7A5\uBE44\uB294 \uADF8 \uC6D4\uB4DC\uC5D0\uB9CC \uC313\uC785\uB2C8\uB2E4. \uCE5C\uAD6C\uB294 \uB0B4\uAC00 \uC6D4\uB4DC\uB97C \uC5F4\uC5B4 \uB454 \uB3D9\uC548\uC5D0\uB9CC \uB4E4\uC5B4\uC62C \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p>
      <div class="wlist">${t.length?t.map(n=>`<div class="witem">
        <div class="wi"><b>${Wt(n.name)}</b><em>\uCF54\uB4DC <i>${n.code}</i> \xB7 \uBA64\uBC84 ${Object.keys(n.members).length}\uBA85 \xB7 ${n.pass?"\uBE44\uBC00\uBC88\uD638 \uC788\uC74C":"\uBE44\uBC00\uBC88\uD638 \uC5C6\uC74C"}</em></div>
        <button class="btn small primary" data-open="${n.id}">\uC5F4\uAE30</button><button class="btn small ghost" data-del="${n.id}">\uC0AD\uC81C</button></div>`).join(""):'<p class="note">\uC544\uC9C1 \uB9CC\uB4E0 \uC6D4\uB4DC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.</p>'}</div>
      <form class="wnew"><input name="n" maxlength="${lf}" placeholder="\uC0C8 \uC6D4\uB4DC \uC774\uB984" autocomplete="off" required /><input name="p" type="password" maxlength="${Rh}" placeholder="\uBE44\uBC00\uBC88\uD638 (\uBE44\uC6B0\uBA74 \uC5C6\uC74C)" autocomplete="new-password" /><button class="btn">\uB9CC\uB4E4\uAE30</button></form>
      <div class="row"><button class="btn ghost" data-close>\uB2EB\uAE30</button></div>
    </div>`};s.addEventListener("click",t=>{if(t.target.closest("[data-close]")||t.target===s){s.remove();return}let n=t.target.closest("[data-open]");if(n){s.remove(),x1(n.dataset.open);return}let i=t.target.closest("[data-del]");i&&(i.dataset.armed?(Hg(i.dataset.del),e(),Zi("\uC6D4\uB4DC\uB97C \uC0AD\uC81C\uD588\uC2B5\uB2C8\uB2E4")):(i.dataset.armed="1",i.textContent="\uC815\uB9D0 \uC0AD\uC81C",i.classList.add("danger")))}),s.addEventListener("submit",async t=>{t.preventDefault();let n=t.target;try{let i=await Bg(n.n.value,n.p.value);Zi(`\uC6D4\uB4DC '${i.name}'\uC744(\uB97C) \uB9CC\uB4E4\uC5C8\uC2B5\uB2C8\uB2E4`),e()}catch(i){Zi(i.message)}}),e(),document.body.appendChild(s),s.querySelector("input[name=n]")?.focus()}function b1(s){let e=wh(s);if(e.length!==Po)return Zi(`${Po}\uC790\uB9AC \uC6D4\uB4DC \uCF54\uB4DC\uB97C \uC785\uB825\uD558\uC138\uC694`);let t=document.createElement("div");t.className="modal",t.innerHTML=`<form class="mcard pw"><h3>\uC6D4\uB4DC \uCC38\uAC00</h3><p class="note">\uC6D4\uB4DC <b>${e}</b>\uC758 \uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD558\uC138\uC694. \uBE44\uBC00\uBC88\uD638\uAC00 \uC5C6\uB294 \uC6D4\uB4DC\uBA74 \uBE44\uC6CC \uB450\uC138\uC694.</p>
    <input name="p" type="password" maxlength="${Rh}" placeholder="\uBE44\uBC00\uBC88\uD638" autocomplete="current-password" />
    <div class="row"><button type="button" class="btn ghost" data-close>\uCDE8\uC18C</button><button class="btn primary">\uCC38\uAC00</button></div></form>`,t.addEventListener("click",n=>{(n.target.closest("[data-close]")||n.target===t)&&t.remove()}),t.addEventListener("submit",n=>{n.preventDefault();let i=n.target.p.value;t.remove(),y1(e,i)}),document.body.appendChild(t),t.querySelector("input").focus()}async function x1(s){let e=Ch(s);if(!e)return;t0(`${Wt(e.name)} \uC5EC\uB294 \uC911\u2026`),jd(me,uf(e,me.uid,vt(me).name),n=>df(e.id,me.uid,vt(me).name,n)),$t(me);let t=new Io({profile:me,online:!0,difficulty:me.difficulty,world:{code:e.code,name:e.name,verify:n=>Vg(Ch(e.id)||e,n),progressFor:(n,i)=>uf(Ch(e.id)||e,n,i),save:(n,i,r)=>df(e.id,n,i,r)},handlers:{onRoster:Uo,onChat:$g}});Ae=t,jn={name:e.name,code:e.code,host:!0,locked:!!e.pass};try{if(await t.open(),Ae!==t)return;gf(),Uo(t.roster())}catch(n){if(Ae!==t)return;Ae=null,nr(),ta("\uC6D4\uB4DC\uB97C \uC5F4 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4",Wt(n.message))}}function v1(s){!jn||hn!=="lobby"||!nt[s]||(me.current=s,$t(me),Cn.play("ui",{}),ff())}function ff(){Ae?.setChar?.(me.character),Qg()}function Qg(){let s=Yt(".wchars");s&&(s.innerHTML=qn.map(e=>`<button class="wc ${e===me.current?"on":""}" data-wcls="${e}" style="--c:${nt[e].trail}" title="${nt[e].name} \xB7 ${At(e,me.chars[e].spec).name}">${rn(Js[e])}<span>Lv ${me.chars[e].level}</span></button>`).join("")+'<button class="btn small ghost" data-act="winv">\uC7A5\uBE44</button><button class="btn small ghost" data-act="wtree">\uC2A4\uD0AC \uD2B8\uB9AC</button>')}function e0(){Yt(".pause")?.remove(),Mn.stop(),mf(),gf(),Uo(Ae.roster(),Ae.difficulty)}function gf(){hn="lobby";let s=jn,e=s.host;ci.innerHTML=`<div class="screen lobby"><div class="lobby-left">
    <h2>${Wt(s.name)}</h2>
    <div class="codebox"><div><span>\uC6D4\uB4DC \uCF54\uB4DC</span><b>${s.code}</b></div><button class="btn small" data-act="copy">\uCD08\uB300 \uB9C1\uD06C \uBCF5\uC0AC</button></div>
    <div class="wchars"></div>
    <div class="lobby-diff"></div>
    <ul class="roster"></ul>
    <p class="note">${e?`\uCE5C\uAD6C\uC5D0\uAC8C \uC6D4\uB4DC \uCF54\uB4DC${s.locked?"\uC640 \uBE44\uBC00\uBC88\uD638":""}\uB97C \uC54C\uB824 \uC8FC\uC138\uC694. \uCD5C\uB300 4\uBA85. \uC774 \uC6D4\uB4DC\uC5D0\uC11C \uC5BB\uC740 \uB808\uBCA8\uACFC \uC7A5\uBE44\uB294 \uC774 \uC6D4\uB4DC\uC5D0\uB9CC \uC800\uC7A5\uB429\uB2C8\uB2E4.`:"\uC774 \uC6D4\uB4DC\uC5D0\uC11C \uC5BB\uC740 \uB808\uBCA8\uACFC \uC7A5\uBE44\uB294 \uC774 \uC6D4\uB4DC\uC5D0\uB9CC \uC800\uC7A5\uB429\uB2C8\uB2E4. \uC6D4\uB4DC \uC8FC\uC778\uC774 \uB358\uC804\uC5D0 \uC785\uC7A5\uD558\uBA74 \uD568\uAED8 \uB4E4\uC5B4\uAC11\uB2C8\uB2E4."}</p>
    <div class="row"><button class="btn ghost" data-act="leave">\uC6D4\uB4DC \uB098\uAC00\uAE30</button>${e?'<button class="btn primary" data-act="start">\uB358\uC804 \uC785\uC7A5</button>':""}</div>
    <div class="chat-slot"></div>
  </div><p class="lobby-hint"><kbd>\uC6B0\uD074\uB9AD</kbd> \uC774\uB3D9 \xB7 <kbd>Enter</kbd> \uB300\uD654</p></div>`,Qi.tagNames([],Ve),Qi.mount(Yt(".chat-slot"),"lobby"),Ve.camOffset.set(0,11,14),Jg(!1),Qg(),Mn.startLobby(Ae)}function Uo(s,e=Ae?.difficulty??1){let t=Yt(".roster");if(!t)return;let n=Ae?.mode==="host";Yt(".lobby-diff").innerHTML=Zg(e,n?me.maxDifficulty:e,"ldiff",!n),t.innerHTML=Array.from({length:4},(i,r)=>{let a=s[r];return a?`<li><span class="ri" style="--c:${nt[a.cls].trail}">${rn(Js[a.cls])}</span><b>${Wt(a.name)}</b><em>Lv ${a.level} ${At(a.cls,a.spec).name}</em>${a.host?'<span class="tag">\uC6D4\uB4DC \uC8FC\uC778</span>':""}${a.id===Ae?.localId?'<span class="tag me">\uB098</span>':""}</li>`:'<li class="empty">\uBE48 \uC790\uB9AC</li>'}).join("")}async function _1(){let s=`${location.origin}${location.pathname}?world=${jn?.code}`;try{await navigator.clipboard.writeText(s),Zi("\uCD08\uB300 \uB9C1\uD06C\uB97C \uBCF5\uC0AC\uD588\uC2B5\uB2C8\uB2E4")}catch{Zi(s,6e3)}}function t0(s){ci.innerHTML=`<div class="screen dim"><div class="panel center"><div class="spinner"></div><p>${s}</p><button class="btn ghost small" data-act="leave">\uCDE8\uC18C</button></div></div>`}async function qg(){Ae=new Io({profile:me,online:!1,difficulty:me.difficulty}),Ae.start(),bf()}async function y1(s,e){t0(`${s} \uC6D4\uB4DC\uC5D0 \uC5F0\uACB0\uD558\uB294 \uC911\u2026`);let t=new Ah({profile:me,code:s,password:e,handlers:{onWelcome:n=>{jd(me,n.progress,i=>t.syncProgress(i)),jn={name:n.world?.name||s,code:s,host:!1}},onRoster:Uo,onChat:$g,onStart:()=>{Ae===t&&hn!=="play"&&bf()},onLobby:()=>{Ae===t&&e0()},onDisconnect:n=>{Ae!==t||hn==="results"||(nr(),ta("\uC5F0\uACB0 \uC885\uB8CC",Wt(n)))}}});Ae=t;try{if(await t.open(),Ae!==t)return;gf(),Uo(t.roster(),t.difficulty)}catch(n){if(Ae!==t)return;Ae=null,nr(),ta("\uCC38\uAC00\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4",Wt(n.message))}}function bf(){hn="play",ci.innerHTML="",Qi.tagNames([],Ve),f1(),Ae.online!==!1&&Qi.mount(document.body,"play"),Mn.start(Ae),Cn.unlock(),me.seenTutorial||(me.seenTutorial=!0,$t(me),setTimeout(()=>Xn.announce("\uC655\uAC00 \uBB18\uC5ED","#e8d9c0",4,!1,"\uC6B0\uD074\uB9AD \uC774\uB3D9 \xB7 \uC88C\uD074\uB9AD \uACF5\uACA9 \xB7 QWER \uC2A4\uD0AC \xB7 Space \uD68C\uD53C"),600))}function nr(){if(Ae)try{Ae.leave()}catch{}Ae=null,Ym()&&$d(me),jn=null,Yt(".pause")?.remove(),Mn.stop(),Qi.close(),Jg(!0),mf(),na()}var pf={difficulty:1};function M1(s){hn="results",pf=s,me.stats.runs++,s.victory&&me.stats.clears++;let e=s.victory?Km(me,s.difficulty):0;e&&(me.difficulty=e),$t(me);let t=Ae?.mode==="host"&&!Ae.online,n=t&&s.victory&&s.difficulty<ji,i=vt(me),r=Math.floor(s.time/60),a=Math.floor(s.time%60);Xn.show(!1),Do.enabled=!1,ci.innerHTML=`<div class="screen dim results"><div class="panel">
    <h2 class="${s.victory?"win":"lose"}">${s.victory?"\uC655\uAD00\uC774 \uBD80\uC11C\uC84C\uB2E4":"\uD30C\uD2F0 \uC804\uBA78"}</h2>
    <p class="note">\uB09C\uC774\uB3C4 ${s.difficulty} \xB7 ${s.victory?"\uD574\uACE8\uC655 \uC544\uB974\uCE74\uC2A4\uB97C \uC4F0\uB7EC\uB728\uB838\uC2B5\uB2C8\uB2E4.":"\uB9DD\uC790\uB4E4\uC774 \uB2E4\uC2DC \uBB18\uC9C0\uB97C \uC9C0\uBC30\uD569\uB2C8\uB2E4."}</p>
    ${e?`<p class="unlock">\u25C6 \uB09C\uC774\uB3C4 ${e} \uAC1C\uBC29 \u25C6</p>`:""}
    <div class="stats"><div><b>${r}:${String(a).padStart(2,"0")}</b><span>\uC18C\uC694 \uC2DC\uAC04</span></div><div><b>+${s.xp.toLocaleString()}</b><span>\uACBD\uD5D8\uCE58</span></div><div><b>Lv ${i.level}</b><span>${s.levels?`${s.levels} \uB808\uBCA8 \uC0C1\uC2B9`:"\uD604\uC7AC \uB808\uBCA8"}</span></div></div>
    <h4>\uD68D\uB4DD \uC7A5\uBE44 ${s.loot.length}\uAC1C</h4>
    <div class="loot-list">${s.loot.length?s.loot.map(o=>`<div class="li" style="--rc:${yn[o.rarity].color}"><b>${Wt(o.name)}</b><em>${yn[o.rarity].name} ${oi[o.slot].name} \xB7 Lv ${o.ilvl}</em></div>`).join(""):'<p class="note">\uC5C6\uC74C</p>'}</div>
    ${jn?`<div class="row">${jn.host?'<button class="btn ghost" data-act="menu">\uC6D4\uB4DC \uB098\uAC00\uAE30</button><button class="btn primary" data-act="tolobby">\uB300\uAE30\uC2E4\uB85C \uB3CC\uC544\uAC00\uAE30</button>':'<button class="btn ghost" data-act="menu">\uC6D4\uB4DC \uB098\uAC00\uAE30</button>'}</div>${jn.host?"":'<p class="note center-note">\uC6D4\uB4DC \uC8FC\uC778\uC774 \uB300\uAE30\uC2E4\uB85C \uB3CC\uC544\uAC00\uBA74 \uD568\uAED8 \uC774\uB3D9\uD569\uB2C8\uB2E4.</p>'}`:`<div class="row"><button class="btn ${n||t&&!s.victory?"ghost":"primary"}" data-act="menu">\uCEA0\uD504\uB85C \uB3CC\uC544\uAC00\uAE30</button>${n?`<button class="btn primary" data-act="nextdiff">\uB09C\uC774\uB3C4 ${s.difficulty+1} \uB3C4\uC804</button>`:""}${t&&!s.victory?'<button class="btn primary" data-act="retry">\uB2E4\uC2DC \uB3C4\uC804</button>':""}</div>`}
  </div></div>`}addEventListener("keydown",s=>{if(s.code!=="Escape"||hn!=="play")return;let e=Xn.root.querySelector(".inventory");if(!Yt(".pause")&&e&&!e.classList.contains("hidden")){Xn.toggleInventory(!1);return}n0()});function n0(){if(hn!=="play")return;if(Yt(".pause")){Yt(".pause").remove();return}let s=document.createElement("div");s.className="screen dim pause";let e=jn?jn.host?'<button class="btn" data-act="tolobby">\uBAA8\uB450 \uB300\uAE30\uC2E4\uB85C</button><button class="btn ghost" data-act="quit">\uC6D4\uB4DC \uB098\uAC00\uAE30</button>':'<button class="btn ghost" data-act="quit">\uC6D4\uB4DC \uB098\uAC00\uAE30</button>':'<button class="btn ghost" data-act="quit">\uCEA0\uD504\uB85C \uB098\uAC00\uAE30</button>';s.innerHTML=`<div class="panel center"><h2>\uBA54\uB274</h2><p class="note">${Ae?.mode==="host"&&!Ae.online?"":"\uC628\uB77C\uC778 \uD30C\uD2F0\uB294 \uBA48\uCD94\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."}</p><div class="col"><button class="btn primary" data-act="resume">\uACC4\uC18D\uD558\uAE30</button><button class="btn" data-act="settings">\uC124\uC815</button>${e}</div></div>`,ci.appendChild(s)}Ve.canvas.addEventListener("wheel",s=>{hn!=="play"&&hn!=="lobby"||(s.preventDefault(),Ve.zoomTo=Math.max(0,Math.min(1,Ve.zoomTo-s.deltaY*.0015)))},{passive:!1});var S1=Mn.prewarmPool();await h1();S1();mf();na();var Xg=performance.now(),Lo=0;function i0(s){let e=Math.min(.05,(s-Xg)/1e3);Xg=s,Lo+=e,s0(e),requestAnimationFrame(i0)}var Rn={avg:1/60,acc:0,frames:0,fpsT:0},Ih=document.createElement("div");Ih.className="fps hidden";document.body.appendChild(Ih);function T1(s){document.hidden||(Rn.avg+=(Math.min(s,.1)-Rn.avg)*.05,Rn.acc+=s,Rn.acc>1.5&&(Rn.acc=0,Ve.adapt(Rn.avg)),Rn.frames++,Rn.fpsT+=s,Ih.classList.toggle("hidden",!me.settings.fps),Rn.fpsT>=.5&&(Ih.textContent=`${Math.round(Rn.frames/Rn.fpsT)} FPS \xB7 ${(Rn.avg*1e3).toFixed(1)}ms \xB7 \uD574\uC0C1\uB3C4 ${Math.round(Ve.dynScale*100)}%`,Rn.frames=0,Rn.fpsT=0))}function s0(s){T1(s),(Ve.canvas.clientWidth!==innerWidth||Ve.canvas.clientHeight!==innerHeight)&&Ve.resize();try{let e=Yt(".pause")&&Ae?.mode==="host"&&!Ae.online;(hn==="play"||hn==="results")&&Ae?(e?Ve.render(0,Lo):Mn.frame(s,Lo),Mn.lastView&&Qi.update(s,Mn.lastView.players,Mn.pActors,Ve,Ae.localId)):u1(s,Lo)}catch(e){console.error(e)}}requestAnimationFrame(i0);var w1=new Worker(URL.createObjectURL(new Blob(["setInterval(() => postMessage(0), 33);"],{type:"text/javascript"}))),jg=performance.now();w1.onmessage=()=>{let s=performance.now(),e=Math.min(.1,(s-jg)/1e3);jg=s,!(!document.hidden||hn!=="play"&&hn!=="lobby"||Ae?.mode!=="host"||!Ae.online)&&(Ae.update(e,{mx:0,mz:0,ax:0,az:0,attack:!1}),Ae.takeEvents())};window.__ac={get session(){return Ae},game:Mn,engine:Ve,profile:me,spawn(s,e=6,t=-6){let n=Ae?.world,i=n?.players[0];return i&&ea(n,s,i.x+e,i.z+t)},advance(s,e=30,t=!1){for(let n=0;n<s*e;n++){if(t&&Ae?.world){let i=Ae.world;Ng(i,Ae.localId);let r=i.players.find(a=>a.id===Ae.localId);if(Do.mouse.down=!1,r){let a=r.input;Do.bot=a}}Lo+=1/e,s0(1/e)}}};
