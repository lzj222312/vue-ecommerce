webpackJsonp([0],{"/uwb":function(t,n,r){n=t.exports=r("BkJT")(!0),n.push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"work.vue",sourceRoot:""}])},"1XoS":function(t,n,r){"use strict";var e=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"doc-right"},[r("h2",[r("a",{attrs:{id:"bas",href:"#bas"}},[t._v("基础")])]),t._v(" "),r("hr"),t._v(" "),r("h3",[r("a",{attrs:{id:"start",href:"#start"}},[t._v("开始")])]),t._v(" "),r("div",[t._v("\n\t\t开始相关内容\n\t")]),t._v(" "),r("h3",[r("a",{attrs:{id:"dongtai",href:"#dongtai"}},[t._v("动态路由")])]),t._v(" "),r("div",[t._v("\n\t\t动态路由相关内容\n\t")]),t._v(" "),r("h3",[r("a",{attrs:{id:"qiantao",href:"#qiantao"}},[t._v("嵌套路由")])]),t._v(" "),r("div",[t._v("\n\t\t嵌套路由相关内容\n\t")]),t._v(" "),r("h2",[r("a",{attrs:{id:"adv",href:"#adv"}},[t._v("进阶")])]),t._v(" "),r("hr"),t._v(" "),r("h3",[r("a",{attrs:{id:"daohang",href:"#daohang"}},[t._v("导航钩子")])]),t._v(" "),r("div",[t._v("\n\t\t导航钩子相关内容\n\t")]),t._v(" "),r("h3",[r("a",{attrs:{id:"luyou",href:"#luyou"}},[t._v("路由元信息")])]),t._v(" "),r("div",[t._v("\n\t\t路由元信息相关内容\n\t")]),t._v(" "),r("h3",[r("a",{attrs:{id:"guodu",href:"#guodu"}},[t._v("过渡动效")])]),t._v(" "),r("div",[t._v("\n\t\t过渡动效相关内容\n\t")])])}],o={render:e,staticRenderFns:i};n.a=o},"2pVe":function(t,n,r){"use strict";var e=r("Kb3i"),i=r("1XoS"),o=r("J0+h"),u=o(e.a,i.a,null,null,null);n.a=u.exports},GcIh:function(t,n,r){"use strict";n.a={name:"Code",data:function(){return{}}}},ImRq:function(t,n,r){"use strict";var e=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",[r("div",{staticClass:"block-content"},[t._v("\n    这是工作台页面\n  ")])])}],o={render:e,staticRenderFns:i};n.a=o},Kb3i:function(t,n,r){"use strict";n.a={}},V0EG:function(t,n){function r(){throw new Error("setTimeout has not been defined")}function e(){throw new Error("clearTimeout has not been defined")}function i(t){if(l===setTimeout)return setTimeout(t,0);if((l===r||!l)&&setTimeout)return l=setTimeout,setTimeout(t,0);try{return l(t,0)}catch(n){try{return l.call(null,t,0)}catch(n){return l.call(this,t,0)}}}function o(t){if(f===clearTimeout)return clearTimeout(t);if((f===e||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(t);try{return f(t)}catch(n){try{return f.call(null,t)}catch(n){return f.call(this,t)}}}function u(){p&&v&&(p=!1,v.length?d=v.concat(d):_=-1,d.length&&a())}function a(){if(!p){var t=i(u);p=!0;for(var n=d.length;n;){for(v=d,d=[];++_<n;)v&&v[_].run();_=-1,n=d.length}v=null,p=!1,o(t)}}function s(t,n){this.fun=t,this.array=n}function c(){}var l,f,h=t.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:r}catch(t){l=r}try{f="function"==typeof clearTimeout?clearTimeout:e}catch(t){f=e}}();var v,d=[],p=!1,_=-1;h.nextTick=function(t){var n=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)n[r-1]=arguments[r];d.push(new s(t,n)),1!==d.length||p||i(a)},s.prototype.run=function(){this.fun.apply(null,this.array)},h.title="browser",h.browser=!0,h.env={},h.argv=[],h.version="",h.versions={},h.on=c,h.addListener=c,h.once=c,h.off=c,h.removeListener=c,h.removeAllListeners=c,h.emit=c,h.prependListener=c,h.prependOnceListener=c,h.listeners=function(t){return[]},h.binding=function(t){throw new Error("process.binding is not supported")},h.cwd=function(){return"/"},h.chdir=function(t){throw new Error("process.chdir is not supported")},h.umask=function(){return 0}},"Yed/":function(t,n,r){var e=r("/uwb");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);r("XkoO")("5009b056",e,!0)},Zoud:function(t,n,r){"use strict";function e(t){r("Yed/")}Object.defineProperty(n,"__esModule",{value:!0});var i=r("GcIh"),o=r("ImRq"),u=r("J0+h"),a=e,s=u(i.a,o.a,a,null,null);n.default=s.exports},oWnN:function(t,n,r){"use strict";var e=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"doc"},[r("div",{staticClass:"doc-left-nav"},[r("ul",{staticClass:"nav"},[r("li",{staticClass:"basis"},[r("router-link",{attrs:{to:{path:"#bas"}}},[t._v("基础")]),t._v(" "),r("ul",{staticClass:"secondary-nav"},[r("li",{staticClass:"bassis-content"},[r("router-link",{attrs:{to:{path:"#start"}}},[t._v("开始")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:{path:"#dongtai"}}},[t._v("动态路由")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:{path:"#qiantao"}}},[t._v("嵌套路由")])],1)])],1),t._v(" "),r("li",{staticClass:"advanced"},[r("router-link",{attrs:{to:{path:"#adv"}}},[t._v("进阶")]),t._v(" "),r("ul",{staticClass:"secondary-nav"},[r("li",{staticClass:"advanced-content"},[r("router-link",{attrs:{to:{path:"#daohang"}}},[t._v("导航钩子")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:{path:"#luyou"}}},[t._v("路由元信息")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:{path:"#guodu"}}},[t._v("过度动效")])],1)])],1)])]),t._v(" "),r("div",{staticClass:"doc-content"},[r("doc-right")],1)])},i=[],o={render:e,staticRenderFns:i};n.a=o},rdDF:function(t,n,r){"use strict";var e=r("2pVe"),i=r("vy4U"),o=r.n(i);n.a={components:{docRight:e.a},beforeRouteEnter:function(t,n,r){r(function(n){n.animite(t),r()})},beforeRouteUpdate:function(t,n,r){this.animite(t),r()},methods:{animite:function(t){function n(t){requestAnimationFrame(n),o.a.update(t)}if(t.hash){var r=document.querySelector("#"+t.hash.slice(1)),e=document.querySelector(".doc");r&&(n(),new o.a.Tween({position:e.scrollTop}).to({position:r.offsetTop},500).onUpdate(function(){e.scrollTop=this.position.toFixed(0)}).start())}}}}},vy4U:function(t,n,r){(function(r){var e,i,o=o||function(){var t=[];return{getAll:function(){return t},removeAll:function(){t=[]},add:function(n){t.push(n)},remove:function(n){var r=t.indexOf(n);-1!==r&&t.splice(r,1)},update:function(n,r){if(0===t.length)return!1;var e=0;for(n=void 0!==n?n:o.now();e<t.length;)t[e].update(n)||r?e++:t.splice(e,1);return!0}}}();"undefined"==typeof window&&void 0!==r?o.now=function(){var t=r.hrtime();return 1e3*t[0]+t[1]/1e6}:"undefined"!=typeof window&&void 0!==window.performance&&void 0!==window.performance.now?o.now=window.performance.now.bind(window.performance):void 0!==Date.now?o.now=Date.now:o.now=function(){return(new Date).getTime()},o.Tween=function(t){var n,r=t,e={},i={},u={},a=1e3,s=0,c=!1,l=!1,f=!1,h=0,v=null,d=o.Easing.Linear.None,p=o.Interpolation.Linear,_=[],m=null,w=!1,g=null,y=null,I=null;this.to=function(t,n){return i=t,void 0!==n&&(a=n),this},this.start=function(t){o.add(this),l=!0,w=!1,v=void 0!==t?t:o.now(),v+=h;for(var n in i){if(i[n]instanceof Array){if(0===i[n].length)continue;i[n]=[r[n]].concat(i[n])}void 0!==r[n]&&(e[n]=r[n],e[n]instanceof Array==!1&&(e[n]*=1),u[n]=e[n]||0)}return this},this.stop=function(){return l?(o.remove(this),l=!1,null!==I&&I.call(r,r),this.stopChainedTweens(),this):this},this.end=function(){return this.update(v+a),this},this.stopChainedTweens=function(){for(var t=0,n=_.length;t<n;t++)_[t].stop()},this.delay=function(t){return h=t,this},this.repeat=function(t){return s=t,this},this.repeatDelay=function(t){return n=t,this},this.yoyo=function(t){return c=t,this},this.easing=function(t){return d=t,this},this.interpolation=function(t){return p=t,this},this.chain=function(){return _=arguments,this},this.onStart=function(t){return m=t,this},this.onUpdate=function(t){return g=t,this},this.onComplete=function(t){return y=t,this},this.onStop=function(t){return I=t,this},this.update=function(t){var o,l,I;if(t<v)return!0;!1===w&&(null!==m&&m.call(r,r),w=!0),l=(t-v)/a,l=l>1?1:l,I=d(l);for(o in i)if(void 0!==e[o]){var M=e[o]||0,O=i[o];O instanceof Array?r[o]=p(O,I):("string"==typeof O&&(O="+"===O.charAt(0)||"-"===O.charAt(0)?M+parseFloat(O):parseFloat(O)),"number"==typeof O&&(r[o]=M+(O-M)*I))}if(null!==g&&g.call(r,I),1===l){if(s>0){isFinite(s)&&s--;for(o in u){if("string"==typeof i[o]&&(u[o]=u[o]+parseFloat(i[o])),c){var T=u[o];u[o]=i[o],i[o]=T}e[o]=u[o]}return c&&(f=!f),v=void 0!==n?t+n:t+h,!0}null!==y&&y.call(r,r);for(var b=0,C=_.length;b<C;b++)_[b].start(v+a);return!1}return!0}},o.Easing={Linear:{None:function(t){return t}},Quadratic:{In:function(t){return t*t},Out:function(t){return t*(2-t)},InOut:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)}},Cubic:{In:function(t){return t*t*t},Out:function(t){return--t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)}},Quartic:{In:function(t){return t*t*t*t},Out:function(t){return 1- --t*t*t*t},InOut:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)}},Quintic:{In:function(t){return t*t*t*t*t},Out:function(t){return--t*t*t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)}},Sinusoidal:{In:function(t){return 1-Math.cos(t*Math.PI/2)},Out:function(t){return Math.sin(t*Math.PI/2)},InOut:function(t){return.5*(1-Math.cos(Math.PI*t))}},Exponential:{In:function(t){return 0===t?0:Math.pow(1024,t-1)},Out:function(t){return 1===t?1:1-Math.pow(2,-10*t)},InOut:function(t){return 0===t?0:1===t?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(2-Math.pow(2,-10*(t-1)))}},Circular:{In:function(t){return 1-Math.sqrt(1-t*t)},Out:function(t){return Math.sqrt(1- --t*t)},InOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)}},Elastic:{In:function(t){return 0===t?0:1===t?1:-Math.pow(2,10*(t-1))*Math.sin(5*(t-1.1)*Math.PI)},Out:function(t){return 0===t?0:1===t?1:Math.pow(2,-10*t)*Math.sin(5*(t-.1)*Math.PI)+1},InOut:function(t){return 0===t?0:1===t?1:(t*=2,t<1?-.5*Math.pow(2,10*(t-1))*Math.sin(5*(t-1.1)*Math.PI):.5*Math.pow(2,-10*(t-1))*Math.sin(5*(t-1.1)*Math.PI)+1)}},Back:{In:function(t){var n=1.70158;return t*t*((n+1)*t-n)},Out:function(t){var n=1.70158;return--t*t*((n+1)*t+n)+1},InOut:function(t){var n=2.5949095;return(t*=2)<1?t*t*((n+1)*t-n)*.5:.5*((t-=2)*t*((n+1)*t+n)+2)}},Bounce:{In:function(t){return 1-o.Easing.Bounce.Out(1-t)},Out:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},InOut:function(t){return t<.5?.5*o.Easing.Bounce.In(2*t):.5*o.Easing.Bounce.Out(2*t-1)+.5}}},o.Interpolation={Linear:function(t,n){var r=t.length-1,e=r*n,i=Math.floor(e),u=o.Interpolation.Utils.Linear;return n<0?u(t[0],t[1],e):n>1?u(t[r],t[r-1],r-e):u(t[i],t[i+1>r?r:i+1],e-i)},Bezier:function(t,n){for(var r=0,e=t.length-1,i=Math.pow,u=o.Interpolation.Utils.Bernstein,a=0;a<=e;a++)r+=i(1-n,e-a)*i(n,a)*t[a]*u(e,a);return r},CatmullRom:function(t,n){var r=t.length-1,e=r*n,i=Math.floor(e),u=o.Interpolation.Utils.CatmullRom;return t[0]===t[r]?(n<0&&(i=Math.floor(e=r*(1+n))),u(t[(i-1+r)%r],t[i],t[(i+1)%r],t[(i+2)%r],e-i)):n<0?t[0]-(u(t[0],t[0],t[1],t[1],-e)-t[0]):n>1?t[r]-(u(t[r],t[r],t[r-1],t[r-1],e-r)-t[r]):u(t[i?i-1:0],t[i],t[r<i+1?r:i+1],t[r<i+2?r:i+2],e-i)},Utils:{Linear:function(t,n,r){return(n-t)*r+t},Bernstein:function(t,n){var r=o.Interpolation.Utils.Factorial;return r(t)/r(n)/r(t-n)},Factorial:function(){var t=[1];return function(n){var r=1;if(t[n])return t[n];for(var e=n;e>1;e--)r*=e;return t[n]=r,r}}(),CatmullRom:function(t,n,r,e,i){var o=.5*(r-t),u=.5*(e-n),a=i*i;return(2*n-2*r+o+u)*(i*a)+(-3*n+3*r-2*o-u)*a+o*i+n}}},function(r){e=[],void 0!==(i=function(){return o}.apply(n,e))&&(t.exports=i)}()}).call(n,r("V0EG"))},zxWh:function(t,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=r("rdDF"),i=r("oWnN"),o=r("J0+h"),u=o(e.a,i.a,null,null,null);n.default=u.exports}});
//# sourceMappingURL=0.5c814e7eb03a401cf316.js.map