"use strict";(self.webpackChunkdigital_waiter=self.webpackChunkdigital_waiter||[]).push([[461],{523:(_e,ue,it)=>{Error;const ve=function(o,...i){if(ve.translate){const f=ve.translate(o,i);o=f[0],i=f[1]}let u=fe(o[0],o.raw[0]);for(let f=1;f<o.length;f++)u+=i[f-1]+fe(o[f],o.raw[f]);return u},yt=":";function fe(o,i){return i.charAt(0)===yt?o.substring(function ge(o,i){for(let u=1,f=1;u<o.length;u++,f++)if("\\"===i[f])f++;else if(":"===o[u])return u;throw new Error(`Unterminated $localize metadata block in "${i}".`)}(o,i)+1):o}globalThis.$localize=ve,it(935)},935:()=>{const _e=globalThis;function ue(e){return(_e.__Zone_symbol_prefix||"__zone_symbol__")+e}const Me=Object.getOwnPropertyDescriptor,Ue=Object.defineProperty,Qe=Object.getPrototypeOf,ze=Object.create,St=Array.prototype.slice,et="addEventListener",ct="removeEventListener",tt=ue(et),nt=ue(ct),Te="true",Ee="false",Ae=ue("");function rt(e,r){return Zone.current.wrap(e,r)}function Re(e,r,l,t,a){return Zone.current.scheduleMacroTask(e,r,l,t,a)}const z=ue,xe=typeof window<"u",Pe=xe?window:void 0,ee=xe&&Pe||globalThis;function je(e,r){for(let l=e.length-1;l>=0;l--)"function"==typeof e[l]&&(e[l]=rt(e[l],r+"_"+l));return e}function lt(e){return!e||!1!==e.writable&&!("function"==typeof e.get&&typeof e.set>"u")}const Ve=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,Ge=!("nw"in ee)&&typeof ee.process<"u"&&"[object process]"===ee.process.toString(),Fe=!Ge&&!Ve&&!(!xe||!Pe.HTMLElement),ut=typeof ee.process<"u"&&"[object process]"===ee.process.toString()&&!Ve&&!(!xe||!Pe.HTMLElement),We={},Tt=z("enable_beforeunload"),ft=function(e){if(!(e=e||ee.event))return;let r=We[e.type];r||(r=We[e.type]=z("ON_PROPERTY"+e.type));const l=this||e.target||ee,t=l[r];let a;return Fe&&l===Pe&&"error"===e.type?(a=t&&t.call(this,e.message,e.filename,e.lineno,e.colno,e.error),!0===a&&e.preventDefault()):(a=t&&t.apply(this,arguments),"beforeunload"===e.type&&ee[Tt]&&"string"==typeof a?e.returnValue=a:null!=a&&!a&&e.preventDefault()),a};function ot(e,r,l){let t=Me(e,r);if(!t&&l&&Me(l,r)&&(t={enumerable:!0,configurable:!0}),!t||!t.configurable)return;const a=z("on"+r+"patched");if(e.hasOwnProperty(a)&&e[a])return;delete t.writable,delete t.value;const _=t.get,y=t.set,k=r.slice(2);let w=We[k];w||(w=We[k]=z("ON_PROPERTY"+k)),t.set=function(M){let E=this;!E&&e===ee&&(E=ee),E&&("function"==typeof E[w]&&E.removeEventListener(k,ft),y&&y.call(E,null),E[w]=M,"function"==typeof M&&E.addEventListener(k,ft,!1))},t.get=function(){let M=this;if(!M&&e===ee&&(M=ee),!M)return null;const E=M[w];if(E)return E;if(_){let O=_.call(this);if(O)return t.set.call(this,O),"function"==typeof M.removeAttribute&&M.removeAttribute(r),O}return null},Ue(e,r,t),e[a]=!0}function ht(e,r,l){if(r)for(let t=0;t<r.length;t++)ot(e,"on"+r[t],l);else{const t=[];for(const a in e)"on"==a.slice(0,2)&&t.push(a);for(let a=0;a<t.length;a++)ot(e,t[a],l)}}const ge=z("originalInstance");function Ze(e){const r=ee[e];if(!r)return;ee[z(e)]=r,ee[e]=function(){const a=je(arguments,e);switch(a.length){case 0:this[ge]=new r;break;case 1:this[ge]=new r(a[0]);break;case 2:this[ge]=new r(a[0],a[1]);break;case 3:this[ge]=new r(a[0],a[1],a[2]);break;case 4:this[ge]=new r(a[0],a[1],a[2],a[3]);break;default:throw new Error("Arg list too long.")}},me(ee[e],r);const l=new r(function(){});let t;for(t in l)"XMLHttpRequest"===e&&"responseBlob"===t||function(a){"function"==typeof l[a]?ee[e].prototype[a]=function(){return this[ge][a].apply(this[ge],arguments)}:Ue(ee[e].prototype,a,{set:function(_){"function"==typeof _?(this[ge][a]=rt(_,e+"."+a),me(this[ge][a],_)):this[ge][a]=_},get:function(){return this[ge][a]}})}(t);for(t in r)"prototype"!==t&&r.hasOwnProperty(t)&&(ee[e][t]=r[t])}function ke(e,r,l){let t=e;for(;t&&!t.hasOwnProperty(r);)t=Qe(t);!t&&e[r]&&(t=e);const a=z(r);let _=null;if(t&&(!(_=t[a])||!t.hasOwnProperty(a))&&(_=t[a]=t[r],lt(t&&Me(t,r)))){const k=l(_,a,r);t[r]=function(){return k(this,arguments)},me(t[r],_)}return _}function Et(e,r,l){let t=null;function a(_){const y=_.data;return y.args[y.cbIdx]=function(){_.invoke.apply(this,arguments)},t.apply(y.target,y.args),_}t=ke(e,r,_=>function(y,k){const w=l(y,k);return w.cbIdx>=0&&"function"==typeof k[w.cbIdx]?Re(w.name,k[w.cbIdx],w,a):_.apply(y,k)})}function me(e,r){e[z("OriginalDelegate")]=r}let mt=!1,qe=!1;function Nt(){if(mt)return qe;mt=!0;try{const e=Pe.navigator.userAgent;(-1!==e.indexOf("MSIE ")||-1!==e.indexOf("Trident/")||-1!==e.indexOf("Edge/"))&&(qe=!0)}catch{}return qe}function pt(e){return"function"==typeof e}function _t(e){return"number"==typeof e}let ve=!1;if(typeof window<"u")try{const e=Object.defineProperty({},"passive",{get:function(){ve=!0}});window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch{ve=!1}const yt={useG:!0},fe={},kt={},o=new RegExp("^"+Ae+"(\\w+)(true|false)$"),i=z("propagationStopped");function u(e,r){const l=(r?r(e):e)+Ee,t=(r?r(e):e)+Te,a=Ae+l,_=Ae+t;fe[e]={},fe[e][Ee]=a,fe[e][Te]=_}function f(e,r,l,t){const a=t&&t.add||et,_=t&&t.rm||ct,y=t&&t.listeners||"eventListeners",k=t&&t.rmAll||"removeAllListeners",w=z(a),M="."+a+":",E="prependListener",O="."+E+":",B=function(S,T,G){if(S.isRemoved)return;const q=S.callback;let oe;"object"==typeof q&&q.handleEvent&&(S.callback=v=>q.handleEvent(v),S.originalDelegate=q);try{S.invoke(S,T,[G])}catch(v){oe=v}const X=S.options;return X&&"object"==typeof X&&X.once&&T[_].call(T,G.type,S.originalDelegate?S.originalDelegate:S.callback,X),oe};function W(S,T,G){if(!(T=T||e.event))return;const q=S||T.target||e,oe=q[fe[T.type][G?Te:Ee]];if(oe){const X=[];if(1===oe.length){const v=B(oe[0],q,T);v&&X.push(v)}else{const v=oe.slice();for(let Q=0;Q<v.length&&(!T||!0!==T[i]);Q++){const x=B(v[Q],q,T);x&&X.push(x)}}if(1===X.length)throw X[0];for(let v=0;v<X.length;v++){const Q=X[v];r.nativeScheduleMicroTask(()=>{throw Q})}}}const J=function(S){return W(this,S,!1)},ae=function(S){return W(this,S,!0)};function le(S,T){if(!S)return!1;let G=!0;T&&void 0!==T.useG&&(G=T.useG);const q=T&&T.vh;let oe=!0;T&&void 0!==T.chkDup&&(oe=T.chkDup);let X=!1;T&&void 0!==T.rt&&(X=T.rt);let v=S;for(;v&&!v.hasOwnProperty(a);)v=Qe(v);if(!v&&S[a]&&(v=S),!v||v[w])return!1;const Q=T&&T.eventNameToString,x={},D=v[w]=v[a],I=v[z(_)]=v[_],A=v[z(y)]=v[y],de=v[z(k)]=v[k];let te;T&&T.prepend&&(te=v[z(T.prepend)]=v[T.prepend]);const ne=G?function(c){if(!x.isExisting)return D.call(x.target,x.eventName,x.capture?ae:J,x.options)}:function(c){return D.call(x.target,x.eventName,c.invoke,x.options)},U=G?function(c){if(!c.isRemoved){const d=fe[c.eventName];let N;d&&(N=d[c.capture?Te:Ee]);const L=N&&c.target[N];if(L)for(let b=0;b<L.length;b++)if(L[b]===c){L.splice(b,1),c.isRemoved=!0,c.removeAbortListener&&(c.removeAbortListener(),c.removeAbortListener=null),0===L.length&&(c.allRemoved=!0,c.target[N]=null);break}}if(c.allRemoved)return I.call(c.target,c.eventName,c.capture?ae:J,c.options)}:function(c){return I.call(c.target,c.eventName,c.invoke,c.options)},Se=T&&T.diff?T.diff:function(c,d){const N=typeof d;return"function"===N&&c.callback===d||"object"===N&&c.originalDelegate===d},Ne=Zone[z("UNPATCHED_EVENTS")],pe=e[z("PASSIVE_EVENTS")],h=function(c,d,N,L,b=!1,Z=!1){return function(){const $=this||e;let H=arguments[0];T&&T.transferEventName&&(H=T.transferEventName(H));let Y=arguments[1];if(!Y)return c.apply(this,arguments);if(Ge&&"uncaughtException"===H)return c.apply(this,arguments);let K=!1;if("function"!=typeof Y){if(!Y.handleEvent)return c.apply(this,arguments);K=!0}if(q&&!q(c,Y,$,arguments))return;const De=ve&&!!pe&&-1!==pe.indexOf(H),be=function g(c){if("object"==typeof c&&null!==c){const d={...c};return c.signal&&(d.signal=c.signal),d}return c}(function j(c,d){return!ve&&"object"==typeof c&&c?!!c.capture:ve&&d?"boolean"==typeof c?{capture:c,passive:!0}:c?"object"==typeof c&&!1!==c.passive?{...c,passive:!0}:c:{passive:!0}:c}(arguments[2],De)),Ke=be?.signal;if(Ke?.aborted)return;if(Ne)for(let we=0;we<Ne.length;we++)if(H===Ne[we])return De?c.call($,H,Y,be):c.apply(this,arguments);const Rt=!!be&&("boolean"==typeof be||be.capture),Ct=!(!be||"object"!=typeof be)&&be.once,xt=Zone.current;let Pt=fe[H];Pt||(u(H,Q),Pt=fe[H]);const Ot=Pt[Rt?Te:Ee];let gt,Je=$[Ot],Dt=!1;if(Je){if(Dt=!0,oe)for(let we=0;we<Je.length;we++)if(Se(Je[we],Y))return}else Je=$[Ot]=[];const Lt=$.constructor.name,Mt=kt[Lt];Mt&&(gt=Mt[H]),gt||(gt=Lt+d+(Q?Q(H):H)),x.options=be,Ct&&(x.options.once=!1),x.target=$,x.capture=Rt,x.eventName=H,x.isExisting=Dt;const st=G?yt:void 0;st&&(st.taskData=x),Ke&&(x.options.signal=void 0);const ye=xt.scheduleEventTask(gt,Y,st,N,L);if(Ke){x.options.signal=Ke;const we=()=>ye.zone.cancelTask(ye);c.call(Ke,"abort",we,{once:!0}),ye.removeAbortListener=()=>Ke.removeEventListener("abort",we)}return x.target=null,st&&(st.taskData=null),Ct&&(x.options.once=!0),!ve&&"boolean"==typeof ye.options||(ye.options=be),ye.target=$,ye.capture=Rt,ye.eventName=H,K&&(ye.originalDelegate=Y),Z?Je.unshift(ye):Je.push(ye),b?$:void 0}};return v[a]=h(D,M,ne,U,X),te&&(v[E]=h(te,O,function(c){return te.call(x.target,x.eventName,c.invoke,x.options)},U,X,!0)),v[_]=function(){const c=this||e;let d=arguments[0];T&&T.transferEventName&&(d=T.transferEventName(d));const N=arguments[2],L=!!N&&("boolean"==typeof N||N.capture),b=arguments[1];if(!b)return I.apply(this,arguments);if(q&&!q(I,b,c,arguments))return;const Z=fe[d];let $;Z&&($=Z[L?Te:Ee]);const H=$&&c[$];if(H)for(let Y=0;Y<H.length;Y++){const K=H[Y];if(Se(K,b))return H.splice(Y,1),K.isRemoved=!0,0!==H.length||(K.allRemoved=!0,c[$]=null,L||"string"!=typeof d)||(c[Ae+"ON_PROPERTY"+d]=null),K.zone.cancelTask(K),X?c:void 0}return I.apply(this,arguments)},v[y]=function(){const c=this||e;let d=arguments[0];T&&T.transferEventName&&(d=T.transferEventName(d));const N=[],L=p(c,Q?Q(d):d);for(let b=0;b<L.length;b++){const Z=L[b];N.push(Z.originalDelegate?Z.originalDelegate:Z.callback)}return N},v[k]=function(){const c=this||e;let d=arguments[0];if(d){T&&T.transferEventName&&(d=T.transferEventName(d));const N=fe[d];if(N){const Z=c[N[Ee]],$=c[N[Te]];if(Z){const H=Z.slice();for(let Y=0;Y<H.length;Y++){const K=H[Y];this[_].call(this,d,K.originalDelegate?K.originalDelegate:K.callback,K.options)}}if($){const H=$.slice();for(let Y=0;Y<H.length;Y++){const K=H[Y];this[_].call(this,d,K.originalDelegate?K.originalDelegate:K.callback,K.options)}}}}else{const N=Object.keys(c);for(let L=0;L<N.length;L++){const Z=o.exec(N[L]);let $=Z&&Z[1];$&&"removeListener"!==$&&this[k].call(this,$)}this[k].call(this,"removeListener")}if(X)return this},me(v[a],D),me(v[_],I),de&&me(v[k],de),A&&me(v[y],A),!0}let re=[];for(let S=0;S<l.length;S++)re[S]=le(l[S],t);return re}function p(e,r){if(!r){const _=[];for(let y in e){const k=o.exec(y);let w=k&&k[1];if(w&&(!r||w===r)){const M=e[y];if(M)for(let E=0;E<M.length;E++)_.push(M[E])}}return _}let l=fe[r];l||(u(r),l=fe[r]);const t=e[l[Ee]],a=e[l[Te]];return t?a?t.concat(a):t.slice():a?a.slice():[]}function R(e,r){const l=e.Event;l&&l.prototype&&r.patchMethod(l.prototype,"stopImmediatePropagation",t=>function(a,_){a[i]=!0,t&&t.apply(a,_)})}const F=z("zoneTask");function V(e,r,l,t){let a=null,_=null;l+=t;const y={};function k(M){const E=M.data;E.args[0]=function(){return M.invoke.apply(this,arguments)};const O=a.apply(e,E.args);return _t(O)?E.handleId=O:(E.handle=O,E.isRefreshable=pt(O.refresh)),M}function w(M){const{handle:E,handleId:O}=M.data;return _.call(e,E??O)}a=ke(e,r+=t,M=>function(E,O){if(pt(O[0])){const B={isRefreshable:!1,isPeriodic:"Interval"===t,delay:"Timeout"===t||"Interval"===t?O[1]||0:void 0,args:O},W=O[0];O[0]=function(){try{return W.apply(this,arguments)}finally{const{handle:G,handleId:q,isPeriodic:oe,isRefreshable:X}=B;!oe&&!X&&(q?delete y[q]:G&&(G[F]=null))}};const J=Re(r,O[0],B,k,w);if(!J)return J;const{handleId:ae,handle:le,isRefreshable:re,isPeriodic:S}=J.data;if(ae)y[ae]=J;else if(le&&(le[F]=J,re&&!S)){const T=le.refresh;le.refresh=function(){const{zone:G,state:q}=J;return"notScheduled"===q?(J._state="scheduled",G._updateTaskCount(J,1)):"running"===q&&(J._state="scheduling"),T.call(this)}}return le??ae??J}return M.apply(e,O)}),_=ke(e,l,M=>function(E,O){const B=O[0];let W;_t(B)?(W=y[B],delete y[B]):(W=B?.[F],W?B[F]=null:W=B),W?.type?W.cancelFn&&W.zone.cancelTask(W):M.apply(e,O)})}function He(e,r,l){if(!l||0===l.length)return r;const t=l.filter(_=>_.target===e);if(!t||0===t.length)return r;const a=t[0].ignoreProperties;return r.filter(_=>-1===a.indexOf(_))}function Xe(e,r,l,t){e&&ht(e,He(e,r,l),t)}function he(e){return Object.getOwnPropertyNames(e).filter(r=>r.startsWith("on")&&r.length>2).map(r=>r.substring(2))}function bt(e,r,l,t,a){const _=Zone.__symbol__(t);if(r[_])return;const y=r[_]=r[t];r[t]=function(k,w,M){return w&&w.prototype&&a.forEach(function(E){const O=`${l}.${t}::`+E,B=w.prototype;try{if(B.hasOwnProperty(E)){const W=e.ObjectGetOwnPropertyDescriptor(B,E);W&&W.value?(W.value=e.wrapWithCurrentZone(W.value,O),e._redefineProperty(w.prototype,E,W)):B[E]&&(B[E]=e.wrapWithCurrentZone(B[E],O))}else B[E]&&(B[E]=e.wrapWithCurrentZone(B[E],O))}catch{}}),y.call(r,k,w,M)},e.attachOriginToPatched(r[t],y)}const It=function Le(){const e=globalThis,r=!0===e[ue("forceDuplicateZoneCheck")];if(e.Zone&&(r||"function"!=typeof e.Zone.__symbol__))throw new Error("Zone already loaded.");return e.Zone??=function it(){const e=_e.performance;function r(j){e&&e.mark&&e.mark(j)}function l(j,m){e&&e.measure&&e.measure(j,m)}r("Zone");let t=(()=>{class j{static{this.__symbol__=ue}static assertZonePatched(){if(_e.Promise!==x.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")}static get root(){let n=j.current;for(;n.parent;)n=n.parent;return n}static get current(){return I.zone}static get currentTask(){return A}static __load_patch(n,s,P=!1){if(x.hasOwnProperty(n)){const C=!0===_e[ue("forceDuplicateZoneCheck")];if(!P&&C)throw Error("Already loaded patch: "+n)}else if(!_e["__Zone_disable_"+n]){const C="Zone:"+n;r(C),x[n]=s(_e,j,D),l(C,C)}}get parent(){return this._parent}get name(){return this._name}constructor(n,s){this._parent=n,this._name=s?s.name||"unnamed":"<root>",this._properties=s&&s.properties||{},this._zoneDelegate=new _(this,this._parent&&this._parent._zoneDelegate,s)}get(n){const s=this.getZoneWith(n);if(s)return s._properties[n]}getZoneWith(n){let s=this;for(;s;){if(s._properties.hasOwnProperty(n))return s;s=s._parent}return null}fork(n){if(!n)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,n)}wrap(n,s){if("function"!=typeof n)throw new Error("Expecting function got: "+n);const P=this._zoneDelegate.intercept(this,n,s),C=this;return function(){return C.runGuarded(P,this,arguments,s)}}run(n,s,P,C){I={parent:I,zone:this};try{return this._zoneDelegate.invoke(this,n,s,P,C)}finally{I=I.parent}}runGuarded(n,s=null,P,C){I={parent:I,zone:this};try{try{return this._zoneDelegate.invoke(this,n,s,P,C)}catch(ne){if(this._zoneDelegate.handleError(this,ne))throw ne}}finally{I=I.parent}}runTask(n,s,P){if(n.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(n.zone||le).name+"; Execution: "+this.name+")");const C=n,{type:ne,data:{isPeriodic:U=!1,isRefreshable:Oe=!1}={}}=n;if(n.state===re&&(ne===Q||ne===v))return;const Se=n.state!=G;Se&&C._transitionTo(G,T);const Ne=A;A=C,I={parent:I,zone:this};try{ne==v&&n.data&&!U&&!Oe&&(n.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,C,s,P)}catch(pe){if(this._zoneDelegate.handleError(this,pe))throw pe}}finally{const pe=n.state;if(pe!==re&&pe!==oe)if(ne==Q||U||Oe&&pe===S)Se&&C._transitionTo(T,G,S);else{const g=C._zoneDelegates;this._updateTaskCount(C,-1),Se&&C._transitionTo(re,G,re),Oe&&(C._zoneDelegates=g)}I=I.parent,A=Ne}}scheduleTask(n){if(n.zone&&n.zone!==this){let P=this;for(;P;){if(P===n.zone)throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${n.zone.name}`);P=P.parent}}n._transitionTo(S,re);const s=[];n._zoneDelegates=s,n._zone=this;try{n=this._zoneDelegate.scheduleTask(this,n)}catch(P){throw n._transitionTo(oe,S,re),this._zoneDelegate.handleError(this,P),P}return n._zoneDelegates===s&&this._updateTaskCount(n,1),n.state==S&&n._transitionTo(T,S),n}scheduleMicroTask(n,s,P,C){return this.scheduleTask(new y(X,n,s,P,C,void 0))}scheduleMacroTask(n,s,P,C,ne){return this.scheduleTask(new y(v,n,s,P,C,ne))}scheduleEventTask(n,s,P,C,ne){return this.scheduleTask(new y(Q,n,s,P,C,ne))}cancelTask(n){if(n.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(n.zone||le).name+"; Execution: "+this.name+")");if(n.state===T||n.state===G){n._transitionTo(q,T,G);try{this._zoneDelegate.cancelTask(this,n)}catch(s){throw n._transitionTo(oe,q),this._zoneDelegate.handleError(this,s),s}return this._updateTaskCount(n,-1),n._transitionTo(re,q),n.runCount=-1,n}}_updateTaskCount(n,s){const P=n._zoneDelegates;-1==s&&(n._zoneDelegates=null);for(let C=0;C<P.length;C++)P[C]._updateTaskCount(n.type,s)}}return j})();const a={name:"",onHasTask:(j,m,n,s)=>j.hasTask(n,s),onScheduleTask:(j,m,n,s)=>j.scheduleTask(n,s),onInvokeTask:(j,m,n,s,P,C)=>j.invokeTask(n,s,P,C),onCancelTask:(j,m,n,s)=>j.cancelTask(n,s)};class _{get zone(){return this._zone}constructor(m,n,s){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this._zone=m,this._parentDelegate=n,this._forkZS=s&&(s&&s.onFork?s:n._forkZS),this._forkDlgt=s&&(s.onFork?n:n._forkDlgt),this._forkCurrZone=s&&(s.onFork?this._zone:n._forkCurrZone),this._interceptZS=s&&(s.onIntercept?s:n._interceptZS),this._interceptDlgt=s&&(s.onIntercept?n:n._interceptDlgt),this._interceptCurrZone=s&&(s.onIntercept?this._zone:n._interceptCurrZone),this._invokeZS=s&&(s.onInvoke?s:n._invokeZS),this._invokeDlgt=s&&(s.onInvoke?n:n._invokeDlgt),this._invokeCurrZone=s&&(s.onInvoke?this._zone:n._invokeCurrZone),this._handleErrorZS=s&&(s.onHandleError?s:n._handleErrorZS),this._handleErrorDlgt=s&&(s.onHandleError?n:n._handleErrorDlgt),this._handleErrorCurrZone=s&&(s.onHandleError?this._zone:n._handleErrorCurrZone),this._scheduleTaskZS=s&&(s.onScheduleTask?s:n._scheduleTaskZS),this._scheduleTaskDlgt=s&&(s.onScheduleTask?n:n._scheduleTaskDlgt),this._scheduleTaskCurrZone=s&&(s.onScheduleTask?this._zone:n._scheduleTaskCurrZone),this._invokeTaskZS=s&&(s.onInvokeTask?s:n._invokeTaskZS),this._invokeTaskDlgt=s&&(s.onInvokeTask?n:n._invokeTaskDlgt),this._invokeTaskCurrZone=s&&(s.onInvokeTask?this._zone:n._invokeTaskCurrZone),this._cancelTaskZS=s&&(s.onCancelTask?s:n._cancelTaskZS),this._cancelTaskDlgt=s&&(s.onCancelTask?n:n._cancelTaskDlgt),this._cancelTaskCurrZone=s&&(s.onCancelTask?this._zone:n._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;const P=s&&s.onHasTask;(P||n&&n._hasTaskZS)&&(this._hasTaskZS=P?s:a,this._hasTaskDlgt=n,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=this._zone,s.onScheduleTask||(this._scheduleTaskZS=a,this._scheduleTaskDlgt=n,this._scheduleTaskCurrZone=this._zone),s.onInvokeTask||(this._invokeTaskZS=a,this._invokeTaskDlgt=n,this._invokeTaskCurrZone=this._zone),s.onCancelTask||(this._cancelTaskZS=a,this._cancelTaskDlgt=n,this._cancelTaskCurrZone=this._zone))}fork(m,n){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,m,n):new t(m,n)}intercept(m,n,s){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,m,n,s):n}invoke(m,n,s,P,C){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,m,n,s,P,C):n.apply(s,P)}handleError(m,n){return!this._handleErrorZS||this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,m,n)}scheduleTask(m,n){let s=n;if(this._scheduleTaskZS)this._hasTaskZS&&s._zoneDelegates.push(this._hasTaskDlgtOwner),s=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,m,n),s||(s=n);else if(n.scheduleFn)n.scheduleFn(n);else{if(n.type!=X)throw new Error("Task is missing scheduleFn.");J(n)}return s}invokeTask(m,n,s,P){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,m,n,s,P):n.callback.apply(s,P)}cancelTask(m,n){let s;if(this._cancelTaskZS)s=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,m,n);else{if(!n.cancelFn)throw Error("Task is not cancelable");s=n.cancelFn(n)}return s}hasTask(m,n){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,m,n)}catch(s){this.handleError(m,s)}}_updateTaskCount(m,n){const s=this._taskCounts,P=s[m],C=s[m]=P+n;if(C<0)throw new Error("More tasks executed then were scheduled.");0!=P&&0!=C||this.hasTask(this._zone,{microTask:s.microTask>0,macroTask:s.macroTask>0,eventTask:s.eventTask>0,change:m})}}class y{constructor(m,n,s,P,C,ne){if(this._zone=null,this.runCount=0,this._zoneDelegates=null,this._state="notScheduled",this.type=m,this.source=n,this.data=P,this.scheduleFn=C,this.cancelFn=ne,!s)throw new Error("callback is not defined");this.callback=s;const U=this;this.invoke=m===Q&&P&&P.useG?y.invokeTask:function(){return y.invokeTask.call(_e,U,this,arguments)}}static invokeTask(m,n,s){m||(m=this),de++;try{return m.runCount++,m.zone.runTask(m,n,s)}finally{1==de&&ae(),de--}}get zone(){return this._zone}get state(){return this._state}cancelScheduleRequest(){this._transitionTo(re,S)}_transitionTo(m,n,s){if(this._state!==n&&this._state!==s)throw new Error(`${this.type} '${this.source}': can not transition to '${m}', expecting state '${n}'${s?" or '"+s+"'":""}, was '${this._state}'.`);this._state=m,m==re&&(this._zoneDelegates=null)}toString(){return this.data&&typeof this.data.handleId<"u"?this.data.handleId.toString():Object.prototype.toString.call(this)}toJSON(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}}}const k=ue("setTimeout"),w=ue("Promise"),M=ue("then");let B,E=[],O=!1;function W(j){if(B||_e[w]&&(B=_e[w].resolve(0)),B){let m=B[M];m||(m=B.then),m.call(B,j)}else _e[k](j,0)}function J(j){0===de&&0===E.length&&W(ae),j&&E.push(j)}function ae(){if(!O){for(O=!0;E.length;){const j=E;E=[];for(let m=0;m<j.length;m++){const n=j[m];try{n.zone.runTask(n,null,null)}catch(s){D.onUnhandledError(s)}}}D.microtaskDrainDone(),O=!1}}const le={name:"NO ZONE"},re="notScheduled",S="scheduling",T="scheduled",G="running",q="canceling",oe="unknown",X="microTask",v="macroTask",Q="eventTask",x={},D={symbol:ue,currentZoneFrame:()=>I,onUnhandledError:te,microtaskDrainDone:te,scheduleMicroTask:J,showUncaughtError:()=>!t[ue("ignoreConsoleErrorUncaughtError")],patchEventTarget:()=>[],patchOnProperties:te,patchMethod:()=>te,bindArguments:()=>[],patchThen:()=>te,patchMacroTask:()=>te,patchEventPrototype:()=>te,isIEOrEdge:()=>!1,getGlobalObjects:()=>{},ObjectDefineProperty:()=>te,ObjectGetOwnPropertyDescriptor:()=>{},ObjectCreate:()=>{},ArraySlice:()=>[],patchClass:()=>te,wrapWithCurrentZone:()=>te,filterProperties:()=>[],attachOriginToPatched:()=>te,_redefineProperty:()=>te,patchCallbacks:()=>te,nativeScheduleMicroTask:W};let I={parent:null,zone:new t(null,null)},A=null,de=0;function te(){}return l("Zone","Zone"),t}(),e.Zone}();(function At(e){(function Be(e){e.__load_patch("ZoneAwarePromise",(r,l,t)=>{const a=Object.getOwnPropertyDescriptor,_=Object.defineProperty,k=t.symbol,w=[],M=!1!==r[k("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")],E=k("Promise"),O=k("then");t.onUnhandledError=g=>{if(t.showUncaughtError()){const h=g&&g.rejection;h?console.error("Unhandled Promise rejection:",h instanceof Error?h.message:h,"; Zone:",g.zone.name,"; Task:",g.task&&g.task.source,"; Value:",h,h instanceof Error?h.stack:void 0):console.error(g)}},t.microtaskDrainDone=()=>{for(;w.length;){const g=w.shift();try{g.zone.runGuarded(()=>{throw g.throwOriginal?g.rejection:g})}catch(h){J(h)}}};const W=k("unhandledPromiseRejectionHandler");function J(g){t.onUnhandledError(g);try{const h=l[W];"function"==typeof h&&h.call(this,g)}catch{}}function ae(g){return g&&g.then}function le(g){return g}function re(g){return U.reject(g)}const S=k("state"),T=k("value"),G=k("finally"),q=k("parentPromiseValue"),oe=k("parentPromiseState"),v=null,Q=!0,x=!1;function I(g,h){return c=>{try{j(g,h,c)}catch(d){j(g,!1,d)}}}const A=function(){let g=!1;return function(c){return function(){g||(g=!0,c.apply(null,arguments))}}},de="Promise resolved with itself",te=k("currentTaskTrace");function j(g,h,c){const d=A();if(g===c)throw new TypeError(de);if(g[S]===v){let N=null;try{("object"==typeof c||"function"==typeof c)&&(N=c&&c.then)}catch(L){return d(()=>{j(g,!1,L)})(),g}if(h!==x&&c instanceof U&&c.hasOwnProperty(S)&&c.hasOwnProperty(T)&&c[S]!==v)n(c),j(g,c[S],c[T]);else if(h!==x&&"function"==typeof N)try{N.call(c,d(I(g,h)),d(I(g,!1)))}catch(L){d(()=>{j(g,!1,L)})()}else{g[S]=h;const L=g[T];if(g[T]=c,g[G]===G&&h===Q&&(g[S]=g[oe],g[T]=g[q]),h===x&&c instanceof Error){const b=l.currentTask&&l.currentTask.data&&l.currentTask.data.__creationTrace__;b&&_(c,te,{configurable:!0,enumerable:!1,writable:!0,value:b})}for(let b=0;b<L.length;)s(g,L[b++],L[b++],L[b++],L[b++]);if(0==L.length&&h==x){g[S]=0;let b=c;try{throw new Error("Uncaught (in promise): "+function y(g){return g&&g.toString===Object.prototype.toString?(g.constructor&&g.constructor.name||"")+": "+JSON.stringify(g):g?g.toString():Object.prototype.toString.call(g)}(c)+(c&&c.stack?"\n"+c.stack:""))}catch(Z){b=Z}M&&(b.throwOriginal=!0),b.rejection=c,b.promise=g,b.zone=l.current,b.task=l.currentTask,w.push(b),t.scheduleMicroTask()}}}return g}const m=k("rejectionHandledHandler");function n(g){if(0===g[S]){try{const h=l[m];h&&"function"==typeof h&&h.call(this,{rejection:g[T],promise:g})}catch{}g[S]=x;for(let h=0;h<w.length;h++)g===w[h].promise&&w.splice(h,1)}}function s(g,h,c,d,N){n(g);const L=g[S],b=L?"function"==typeof d?d:le:"function"==typeof N?N:re;h.scheduleMicroTask("Promise.then",()=>{try{const Z=g[T],$=!!c&&G===c[G];$&&(c[q]=Z,c[oe]=L);const H=h.run(b,void 0,$&&b!==re&&b!==le?[]:[Z]);j(c,!0,H)}catch(Z){j(c,!1,Z)}},c)}const C=function(){},ne=r.AggregateError;class U{static toString(){return"function ZoneAwarePromise() { [native code] }"}static resolve(h){return h instanceof U?h:j(new this(null),Q,h)}static reject(h){return j(new this(null),x,h)}static withResolvers(){const h={};return h.promise=new U((c,d)=>{h.resolve=c,h.reject=d}),h}static any(h){if(!h||"function"!=typeof h[Symbol.iterator])return Promise.reject(new ne([],"All promises were rejected"));const c=[];let d=0;try{for(let b of h)d++,c.push(U.resolve(b))}catch{return Promise.reject(new ne([],"All promises were rejected"))}if(0===d)return Promise.reject(new ne([],"All promises were rejected"));let N=!1;const L=[];return new U((b,Z)=>{for(let $=0;$<c.length;$++)c[$].then(H=>{N||(N=!0,b(H))},H=>{L.push(H),d--,0===d&&(N=!0,Z(new ne(L,"All promises were rejected")))})})}static race(h){let c,d,N=new this((Z,$)=>{c=Z,d=$});function L(Z){c(Z)}function b(Z){d(Z)}for(let Z of h)ae(Z)||(Z=this.resolve(Z)),Z.then(L,b);return N}static all(h){return U.allWithCallback(h)}static allSettled(h){return(this&&this.prototype instanceof U?this:U).allWithCallback(h,{thenCallback:d=>({status:"fulfilled",value:d}),errorCallback:d=>({status:"rejected",reason:d})})}static allWithCallback(h,c){let d,N,L=new this((H,Y)=>{d=H,N=Y}),b=2,Z=0;const $=[];for(let H of h){ae(H)||(H=this.resolve(H));const Y=Z;try{H.then(K=>{$[Y]=c?c.thenCallback(K):K,b--,0===b&&d($)},K=>{c?($[Y]=c.errorCallback(K),b--,0===b&&d($)):N(K)})}catch(K){N(K)}b++,Z++}return b-=2,0===b&&d($),L}constructor(h){const c=this;if(!(c instanceof U))throw new Error("Must be an instanceof Promise.");c[S]=v,c[T]=[];try{const d=A();h&&h(d(I(c,Q)),d(I(c,x)))}catch(d){j(c,!1,d)}}get[Symbol.toStringTag](){return"Promise"}get[Symbol.species](){return U}then(h,c){let d=this.constructor?.[Symbol.species];(!d||"function"!=typeof d)&&(d=this.constructor||U);const N=new d(C),L=l.current;return this[S]==v?this[T].push(L,N,h,c):s(this,L,N,h,c),N}catch(h){return this.then(null,h)}finally(h){let c=this.constructor?.[Symbol.species];(!c||"function"!=typeof c)&&(c=U);const d=new c(C);d[G]=G;const N=l.current;return this[S]==v?this[T].push(N,d,h,h):s(this,N,d,h,h),d}}U.resolve=U.resolve,U.reject=U.reject,U.race=U.race,U.all=U.all;const Oe=r[E]=r.Promise;r.Promise=U;const Se=k("thenPatched");function Ne(g){const h=g.prototype,c=a(h,"then");if(c&&(!1===c.writable||!c.configurable))return;const d=h.then;h[O]=d,g.prototype.then=function(N,L){return new U((Z,$)=>{d.call(this,Z,$)}).then(N,L)},g[Se]=!0}return t.patchThen=Ne,Oe&&(Ne(Oe),ke(r,"fetch",g=>function pe(g){return function(h,c){let d=g.apply(h,c);if(d instanceof U)return d;let N=d.constructor;return N[Se]||Ne(N),d}}(g))),Promise[l.__symbol__("uncaughtPromiseErrors")]=w,U})})(e),function vt(e){e.__load_patch("toString",r=>{const l=Function.prototype.toString,t=z("OriginalDelegate"),a=z("Promise"),_=z("Error"),y=function(){if("function"==typeof this){const E=this[t];if(E)return"function"==typeof E?l.call(E):Object.prototype.toString.call(E);if(this===Promise){const O=r[a];if(O)return l.call(O)}if(this===Error){const O=r[_];if(O)return l.call(O)}}return l.call(this)};y[t]=l,Function.prototype.toString=y;const k=Object.prototype.toString;Object.prototype.toString=function(){return"function"==typeof Promise&&this instanceof Promise?"[object Promise]":k.call(this)}})}(e),function wt(e){e.__load_patch("util",(r,l,t)=>{const a=he(r);t.patchOnProperties=ht,t.patchMethod=ke,t.bindArguments=je,t.patchMacroTask=Et;const _=l.__symbol__("BLACK_LISTED_EVENTS"),y=l.__symbol__("UNPATCHED_EVENTS");r[y]&&(r[_]=r[y]),r[_]&&(l[_]=l[y]=r[_]),t.patchEventPrototype=R,t.patchEventTarget=f,t.isIEOrEdge=Nt,t.ObjectDefineProperty=Ue,t.ObjectGetOwnPropertyDescriptor=Me,t.ObjectCreate=ze,t.ArraySlice=St,t.patchClass=Ze,t.wrapWithCurrentZone=rt,t.filterProperties=He,t.attachOriginToPatched=me,t._redefineProperty=Object.defineProperty,t.patchCallbacks=bt,t.getGlobalObjects=()=>({globalSources:kt,zoneSymbolEventNames:fe,eventNames:a,isBrowser:Fe,isMix:ut,isNode:Ge,TRUE_STR:Te,FALSE_STR:Ee,ZONE_SYMBOL_PREFIX:Ae,ADD_EVENT_LISTENER_STR:et,REMOVE_EVENT_LISTENER_STR:ct})})}(e)})(It),function se(e){e.__load_patch("legacy",r=>{const l=r[e.__symbol__("legacyPatch")];l&&l()}),e.__load_patch("timers",r=>{const l="set",t="clear";V(r,l,t,"Timeout"),V(r,l,t,"Interval"),V(r,l,t,"Immediate")}),e.__load_patch("requestAnimationFrame",r=>{V(r,"request","cancel","AnimationFrame"),V(r,"mozRequest","mozCancel","AnimationFrame"),V(r,"webkitRequest","webkitCancel","AnimationFrame")}),e.__load_patch("blocking",(r,l)=>{const t=["alert","prompt","confirm"];for(let a=0;a<t.length;a++)ke(r,t[a],(y,k,w)=>function(M,E){return l.current.run(y,r,E,w)})}),e.__load_patch("EventTarget",(r,l,t)=>{(function $e(e,r){r.patchEventPrototype(e,r)})(r,t),function Ce(e,r){if(Zone[r.symbol("patchEventTarget")])return;const{eventNames:l,zoneSymbolEventNames:t,TRUE_STR:a,FALSE_STR:_,ZONE_SYMBOL_PREFIX:y}=r.getGlobalObjects();for(let w=0;w<l.length;w++){const M=l[w],B=y+(M+_),W=y+(M+a);t[M]={},t[M][_]=B,t[M][a]=W}const k=e.EventTarget;k&&k.prototype&&r.patchEventTarget(e,r,[k&&k.prototype])}(r,t);const a=r.XMLHttpRequestEventTarget;a&&a.prototype&&t.patchEventTarget(r,t,[a.prototype])}),e.__load_patch("MutationObserver",(r,l,t)=>{Ze("MutationObserver"),Ze("WebKitMutationObserver")}),e.__load_patch("IntersectionObserver",(r,l,t)=>{Ze("IntersectionObserver")}),e.__load_patch("FileReader",(r,l,t)=>{Ze("FileReader")}),e.__load_patch("on_property",(r,l,t)=>{!function Ye(e,r){if(Ge&&!ut||Zone[e.symbol("patchEvents")])return;const l=r.__Zone_ignore_on_properties;let t=[];if(Fe){const a=window;t=t.concat(["Document","SVGElement","Element","HTMLElement","HTMLBodyElement","HTMLMediaElement","HTMLFrameSetElement","HTMLFrameElement","HTMLIFrameElement","HTMLMarqueeElement","Worker"]);const _=function dt(){try{const e=Pe.navigator.userAgent;if(-1!==e.indexOf("MSIE ")||-1!==e.indexOf("Trident/"))return!0}catch{}return!1}()?[{target:a,ignoreProperties:["error"]}]:[];Xe(a,he(a),l&&l.concat(_),Qe(a))}t=t.concat(["XMLHttpRequest","XMLHttpRequestEventTarget","IDBIndex","IDBRequest","IDBOpenDBRequest","IDBDatabase","IDBTransaction","IDBCursor","WebSocket"]);for(let a=0;a<t.length;a++){const _=r[t[a]];_&&_.prototype&&Xe(_.prototype,he(_.prototype),l)}}(t,r)}),e.__load_patch("customElements",(r,l,t)=>{!function ie(e,r){const{isBrowser:l,isMix:t}=r.getGlobalObjects();(l||t)&&e.customElements&&"customElements"in e&&r.patchCallbacks(r,e.customElements,"customElements","define",["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback","formAssociatedCallback","formDisabledCallback","formResetCallback","formStateRestoreCallback"])}(r,t)}),e.__load_patch("XHR",(r,l)=>{!function M(E){const O=E.XMLHttpRequest;if(!O)return;const B=O.prototype;let J=B[tt],ae=B[nt];if(!J){const D=E.XMLHttpRequestEventTarget;if(D){const I=D.prototype;J=I[tt],ae=I[nt]}}const le="readystatechange",re="scheduled";function S(D){const I=D.data,A=I.target;A[y]=!1,A[w]=!1;const de=A[_];J||(J=A[tt],ae=A[nt]),de&&ae.call(A,le,de);const te=A[_]=()=>{if(A.readyState===A.DONE)if(!I.aborted&&A[y]&&D.state===re){const m=A[l.__symbol__("loadfalse")];if(0!==A.status&&m&&m.length>0){const n=D.invoke;D.invoke=function(){const s=A[l.__symbol__("loadfalse")];for(let P=0;P<s.length;P++)s[P]===D&&s.splice(P,1);!I.aborted&&D.state===re&&n.call(D)},m.push(D)}else D.invoke()}else!I.aborted&&!1===A[y]&&(A[w]=!0)};return J.call(A,le,te),A[t]||(A[t]=D),Q.apply(A,I.args),A[y]=!0,D}function T(){}function G(D){const I=D.data;return I.aborted=!0,x.apply(I.target,I.args)}const q=ke(B,"open",()=>function(D,I){return D[a]=0==I[2],D[k]=I[1],q.apply(D,I)}),X=z("fetchTaskAborting"),v=z("fetchTaskScheduling"),Q=ke(B,"send",()=>function(D,I){if(!0===l.current[v]||D[a])return Q.apply(D,I);{const A={target:D,url:D[k],isPeriodic:!1,args:I,aborted:!1},de=Re("XMLHttpRequest.send",T,A,S,G);D&&!0===D[w]&&!A.aborted&&de.state===re&&de.invoke()}}),x=ke(B,"abort",()=>function(D,I){const A=function W(D){return D[t]}(D);if(A&&"string"==typeof A.type){if(null==A.cancelFn||A.data&&A.data.aborted)return;A.zone.cancelTask(A)}else if(!0===l.current[X])return x.apply(D,I)})}(r);const t=z("xhrTask"),a=z("xhrSync"),_=z("xhrListener"),y=z("xhrScheduled"),k=z("xhrURL"),w=z("xhrErrorBeforeScheduled")}),e.__load_patch("geolocation",r=>{r.navigator&&r.navigator.geolocation&&function Ie(e,r){const l=e.constructor.name;for(let t=0;t<r.length;t++){const a=r[t],_=e[a];if(_){if(!lt(Me(e,a)))continue;e[a]=(k=>{const w=function(){return k.apply(this,je(arguments,l+"."+a))};return me(w,k),w})(_)}}}(r.navigator.geolocation,["getCurrentPosition","watchPosition"])}),e.__load_patch("PromiseRejectionEvent",(r,l)=>{function t(a){return function(_){p(r,a).forEach(k=>{const w=r.PromiseRejectionEvent;if(w){const M=new w(a,{promise:_.promise,reason:_.rejection});k.invoke(M)}})}}r.PromiseRejectionEvent&&(l[z("unhandledPromiseRejectionHandler")]=t("unhandledrejection"),l[z("rejectionHandledHandler")]=t("rejectionhandled"))}),e.__load_patch("queueMicrotask",(r,l,t)=>{!function ce(e,r){r.patchMethod(e,"queueMicrotask",l=>function(t,a){Zone.current.scheduleMicroTask("queueMicrotask",a[0])})}(r,t)})}(It)}},_e=>{_e(_e.s=523)}]);