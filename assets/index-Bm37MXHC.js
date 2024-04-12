import{c as j,d as F,q as L,U as K,ap as re,b as d,k as E,an as ve,ao as fe,aQ as de,D as Q,E as he,aq as ge,i as me,j as we,v as ye,a as $,t as M,n as U,M as _,am as V,C as G,ay as k,p as be,aR as R,w as J,aw as xe}from"./index-Dq03yOVi.js";import{u as pe,a as Z}from"./index-BQ57qpDf.js";const[ee,z]=j("swipe"),Se={loop:M,width:U,height:U,vertical:Boolean,autoplay:_(0),duration:_(500),touchable:M,lazyRender:Boolean,initialSwipe:_(0),indicatorColor:String,showIndicators:M,stopPropagation:M},te=Symbol(ee);var Te=F({name:ee,props:Se,emits:["change","dragStart","dragEnd"],setup(a,{emit:b,slots:g}){const u=L(),h=L(),t=K({rect:null,width:0,height:0,offset:0,active:0,swiping:!1});let x=!1;const r=pe(),{children:m,linkChildren:s}=re(te),i=d(()=>m.length),o=d(()=>t[a.vertical?"height":"width"]),v=d(()=>a.vertical?r.deltaY.value:r.deltaX.value),y=d(()=>t.rect?(a.vertical?t.rect.height:t.rect.width)-o.value*i.value:0),I=d(()=>o.value?Math.ceil(Math.abs(y.value)/o.value):i.value),D=d(()=>i.value*o.value),p=d(()=>(t.active+i.value)%i.value),B=d(()=>{const e=a.vertical?"vertical":"horizontal";return r.direction.value===e}),ae=d(()=>{const e={transitionDuration:`${t.swiping?0:a.duration}ms`,transform:`translate${a.vertical?"Y":"X"}(${+t.offset.toFixed(2)}px)`};if(o.value){const l=a.vertical?"height":"width",n=a.vertical?"width":"height";e[l]=`${D.value}px`,e[n]=a[n]?`${a[n]}px`:""}return e}),ie=e=>{const{active:l}=t;return e?a.loop?R(l+e,-1,i.value):R(l+e,0,I.value):l},Y=(e,l=0)=>{let n=e*o.value;a.loop||(n=Math.min(n,-y.value));let f=l-n;return a.loop||(f=R(f,y.value,0)),f},w=({pace:e=0,offset:l=0,emitChange:n})=>{if(i.value<=1)return;const{active:f}=t,c=ie(e),P=Y(c,l);if(a.loop){if(m[0]&&P!==y.value){const O=P<y.value;m[0].setOffset(O?D.value:0)}if(m[i.value-1]&&P!==0){const O=P>0;m[i.value-1].setOffset(O?-D.value:0)}}t.active=c,t.offset=P,n&&c!==f&&b("change",p.value)},A=()=>{t.swiping=!0,t.active<=-1?w({pace:i.value}):t.active>=i.value&&w({pace:-i.value})},ne=()=>{A(),r.reset(),k(()=>{t.swiping=!1,w({pace:-1,emitChange:!0})})},X=()=>{A(),r.reset(),k(()=>{t.swiping=!1,w({pace:1,emitChange:!0})})};let H;const T=()=>clearTimeout(H),C=()=>{T(),+a.autoplay>0&&i.value>1&&(H=setTimeout(()=>{X(),C()},+a.autoplay))},S=(e=+a.initialSwipe)=>{if(!u.value)return;const l=()=>{var n,f;if(!V(u)){const c={width:u.value.offsetWidth,height:u.value.offsetHeight};t.rect=c,t.width=+((n=a.width)!=null?n:c.width),t.height=+((f=a.height)!=null?f:c.height)}i.value&&(e=Math.min(i.value-1,e),e===-1&&(e=i.value-1)),t.active=e,t.swiping=!0,t.offset=Y(e),m.forEach(c=>{c.setOffset(0)}),C()};V(u)?G().then(l):l()},N=()=>S(t.active);let W;const le=e=>{!a.touchable||e.touches.length>1||(r.start(e),x=!1,W=Date.now(),T(),A())},oe=e=>{a.touchable&&t.swiping&&(r.move(e),B.value&&(!a.loop&&(t.active===0&&v.value>0||t.active===i.value-1&&v.value<0)||(be(e,a.stopPropagation),w({offset:v.value}),x||(b("dragStart",{index:p.value}),x=!0))))},q=()=>{if(!a.touchable||!t.swiping)return;const e=Date.now()-W,l=v.value/e;if((Math.abs(l)>.25||Math.abs(v.value)>o.value/2)&&B.value){const f=a.vertical?r.offsetY.value:r.offsetX.value;let c=0;a.loop?c=f>0?v.value>0?-1:1:0:c=-Math[v.value>0?"ceil":"floor"](v.value/o.value),w({pace:c,emitChange:!0})}else v.value&&w({pace:0});x=!1,t.swiping=!1,b("dragEnd",{index:p.value}),C()},se=(e,l={})=>{A(),r.reset(),k(()=>{let n;a.loop&&e===i.value?n=t.active===0?0:e:n=e%i.value,l.immediate?k(()=>{t.swiping=!1}):t.swiping=!1,w({pace:n-t.active,emitChange:!0})})},ce=(e,l)=>{const n=l===p.value,f=n?{backgroundColor:a.indicatorColor}:void 0;return $("i",{style:f,class:z("indicator",{active:n})},null)},ue=()=>{if(g.indicator)return g.indicator({active:p.value,total:i.value});if(a.showIndicators&&i.value>1)return $("div",{class:z("indicators",{vertical:a.vertical})},[Array(i.value).fill("").map(ce)])};return Z({prev:ne,next:X,state:t,resize:N,swipeTo:se}),s({size:o,props:a,count:i,activeIndicator:p}),E(()=>a.initialSwipe,e=>S(+e)),E(i,()=>S(t.active)),E(()=>a.autoplay,C),E([ve,fe,()=>a.width,()=>a.height],N),E(de(),e=>{e==="visible"?C():T()}),Q(S),he(()=>S(t.active)),ge(()=>S(t.active)),me(T),we(T),ye("touchmove",oe,{target:h}),()=>{var e;return $("div",{ref:u,class:z()},[$("div",{ref:h,style:ae.value,class:z("track",{vertical:a.vertical}),onTouchstartPassive:le,onTouchend:q,onTouchcancel:q},[(e=g.default)==null?void 0:e.call(g)]),ue()])}}});const Me=J(Te),[Ce,Pe]=j("swipe-item");var Ee=F({name:Ce,setup(a,{slots:b}){let g;const u=K({offset:0,inited:!1,mounted:!1}),{parent:h,index:t}=xe(te);if(!h)return;const x=d(()=>{const s={},{vertical:i}=h.props;return h.size.value&&(s[i?"height":"width"]=`${h.size.value}px`),u.offset&&(s.transform=`translate${i?"Y":"X"}(${u.offset}px)`),s}),r=d(()=>{const{loop:s,lazyRender:i}=h.props;if(!i||g)return!0;if(!u.mounted)return!1;const o=h.activeIndicator.value,v=h.count.value-1,y=o===0&&s?v:o-1,I=o===v&&s?0:o+1;return g=t.value===o||t.value===y||t.value===I,g}),m=s=>{u.offset=s};return Q(()=>{G(()=>{u.mounted=!0})}),Z({setOffset:m}),()=>{var s;return $("div",{class:Pe(),style:x.value},[r.value?(s=b.default)==null?void 0:s.call(b):null])}}});const ke=J(Ee);export{Me as S,ke as a};
