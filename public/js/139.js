(self.webpackChunk=self.webpackChunk||[]).push([[139],{7757:(t,e,r)=>{t.exports=r(5666)},5666:t=>{var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof w?e:w,i=Object.create(o.prototype),a=new D(n||[]);return i._invoke=function(t,e,r){var n=h;return function(o,i){if(n===d)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return T()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var s=j(a,r);if(s){if(s===v)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var c=l(t,e,r);if("normal"===c.type){if(n=r.done?p:f,c.arg===v)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=p,r.method="throw",r.arg=c.arg)}}}(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var h="suspendedStart",f="suspendedYield",d="executing",p="completed",v={};function w(){}function g(){}function m(){}var y={};c(y,i,(function(){return this}));var x=Object.getPrototypeOf,b=x&&x(x(O([])));b&&b!==r&&n.call(b,i)&&(y=b);var k=m.prototype=w.prototype=Object.create(y);function L(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function r(o,i,a,s){var c=l(t[o],t,i);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,a,s)}),(function(t){r("throw",t,a,s)})):e.resolve(h).then((function(t){u.value=t,a(u)}),(function(t){return r("throw",t,a,s)}))}s(c.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function j(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,j(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function D(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function O(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:T}}function T(){return{value:e,done:!0}}return g.prototype=m,c(k,"constructor",m),c(m,"constructor",g),g.displayName=c(m,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,c(t,s,"GeneratorFunction")),t.prototype=Object.create(k),t},t.awrap=function(t){return{__await:t}},L(_.prototype),c(_.prototype,a,(function(){return this})),t.AsyncIterator=_,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new _(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(k),c(k,s,"Generator"),c(k,i,(function(){return this})),c(k,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=O,D.prototype={constructor:D,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(C),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return s.type="throw",s.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),C(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;C(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:O(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}},2139:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>x});var n=r(821),o={class:"max-w-screen-md mx-auto text-gray-900"},i={class:"flex justify-center"},a={class:"flex-1"},s={class:"border w-auto"},c=(0,n._)("div",{class:"border p-4 font-semibold"},"Verify your email !",-1),u={class:"p-4 bg-white"},l={class:"my-1 py-2 sm:w-8/12 md:w-10/12 md:p-4 w-full mx-auto flex justify-center items-center mt-3 sm:mt-0"},h={key:0,class:"flex justify-center items-center p-2 px-6 rounded-sm text-white bg-blue-500 hover:bg-blue-600"};var f=r(7757),d=r.n(f),p=r(3724),v=r(4716),w=r(6367),g=r(9304);function m(t,e,r,n,o,i,a){try{var s=t[i](a),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,o)}const y={components:{XIcon:p.b0D,Errors:v.Z,Success:w.Z,CircleSvg:g.Z},props:{id:{required:!0},hash:{required:!0}},data:function(){return{errors:null,success:"",busy:!1}},methods:{verify:function(){var t,e=this;return(t=d().mark((function t(){return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.busy=!0,e.errors=null,e.success="",t.next=5,e.$store.dispatch("verifyEmail",{id:e.id,hash:e.hash}).then((function(t){e.success=t.data.message?t.data.message+" Redirecting ...":" Redirecting ...",setTimeout((function(){e.$router.push({name:"home"})}),1e3)})).catch((function(t){e.errors="internal error ! plzase try again later ."}));case 5:e.busy=!1;case 6:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){m(i,n,o,a,s,"next",t)}function s(t){m(i,n,o,a,s,"throw",t)}a(void 0)}))})()},resend:function(){var t=this;this.errors=null,this.success="",this.$store.dispatch("verifyResend",{id:this.id}).then((function(e){t.success=e.data.message+" Redirecting ...",setTimeout((function(){t.$router.push({name:"home"})}),1e3)})).catch((function(e){t.errors="internal error ! plzase try again later .",setTimeout((function(){t.$router.push({name:"home"})}),1e3)}))}}};const x=(0,r(3744).Z)(y,[["render",function(t,e,r,f,d,p){var v=(0,n.up)("success"),w=(0,n.up)("errors"),g=(0,n.up)("circle-svg");return(0,n.wg)(),(0,n.iD)("div",o,[(0,n._)("div",i,[(0,n._)("div",a,[(0,n._)("div",s,[c,(0,n._)("div",u,[d.success?((0,n.wg)(),(0,n.j4)(v,{key:0,content:d.success,onClose:e[0]||(e[0]=function(t){return d.success=null})},null,8,["content"])):(0,n.kq)("",!0),d.errors?((0,n.wg)(),(0,n.j4)(w,{key:1,content:d.errors,onClose:e[1]||(e[1]=function(t){return d.errors=null})},null,8,["content"])):(0,n.kq)("",!0),(0,n._)("div",l,[d.busy?((0,n.wg)(),(0,n.iD)("div",h,[(0,n.Wm)(g,{class:"w-6 h-6"})])):((0,n.wg)(),(0,n.iD)("button",{key:1,onClick:e[2]||(e[2]=function(e){return t.error?p.resend():p.verify()}),class:(0,n.C_)("p-3 rounded-sm text-white"+(t.error?" bg-red-400 text-white hover:bg-red-600":" bg-blue-500 hover:bg-blue-600"))},(0,n.zw)(t.error?"Oops ! Resend ?":"Click to Verify"),3))])])])])])])}]])},9304:(t,e,r)=>{"use strict";r.d(e,{Z:()=>s});var n=r(821),o=["width","height","viewBox","stroke"],i=[(0,n.uE)('<g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="2"><circle stroke-opacity=".8" cx="18" cy="18" r="18"></circle><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"></animateTransform></path></g></g>',1)];const a={props:{stroke:{type:String,default:"#fff"},w:{type:Number,default:38},h:{type:Number,default:38}},computed:{viewBox:function(){return"0 0 "+this.w+" "+this.h}}};const s=(0,r(3744).Z)(a,[["render",function(t,e,r,a,s,c){return(0,n.wg)(),(0,n.iD)("svg",{width:r.w,height:r.h,viewBox:c.viewBox,xmlns:"http://www.w3.org/2000/svg",stroke:r.stroke},i,8,o)}]])},4716:(t,e,r)=>{"use strict";r.d(e,{Z:()=>u});var n=r(821),o={class:"flex items-start border px-4 py-3 rounded relative md:w-10/12 md:p-2 w-full mx-auto bg-red-100 border border-red-100 text-red-500",role:"alert shadow"},i={key:0,class:"block sm:inline w-full text-center"},a={key:1,class:"block sm:inline w-full text-center"},s={class:"text-sm"};const c={components:{XIcon:r(7751).b0D},props:{type:{type:String,default:"success"},content:{type:Object,default:"hello !"}}};const u=(0,r(3744).Z)(c,[["render",function(t,e,r,c,u,l){var h=(0,n.up)("XIcon");return(0,n.wg)(),(0,n.iD)("div",o,[r.content.errors?((0,n.wg)(),(0,n.iD)("div",a,[(0,n._)("ul",s,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(r.content.errors,(function(t){return(0,n.wg)(),(0,n.iD)("li",{key:t.index},(0,n.zw)(t[0]),1)})),128))])])):((0,n.wg)(),(0,n.iD)("span",i,(0,n.zw)(r.content.message),1)),(0,n._)("span",{onClick:e[0]||(e[0]=function(e){return t.$emit("close")}),class:""},[(0,n.Wm)(h,{class:"h-5 w-5 font-bold cursor-pointer"})])])}]])},6367:(t,e,r)=>{"use strict";r.d(e,{Z:()=>s});var n=r(821),o={class:"flex items-start border px-4 py-3 rounded relative md:w-10/12 md:p-2 w-full mx-auto bg-green-100 border border-green-100 text-green-500",role:"alert shadow"},i={class:"block sm:inline w-full text-center"};const a={components:{XIcon:r(7751).b0D},props:{content:{type:String,default:"hello !"}}};const s=(0,r(3744).Z)(a,[["render",function(t,e,r,a,s,c){var u=(0,n.up)("XIcon");return(0,n.wg)(),(0,n.iD)("div",o,[(0,n._)("span",i,(0,n.zw)(r.content),1),(0,n._)("span",{onClick:e[0]||(e[0]=function(e){return t.$emit("close")}),class:""},[(0,n.Wm)(u,{class:"h-5 w-5 font-bold cursor-pointer"})])])}]])},7751:(t,e,r)=>{"use strict";r.d(e,{_m8:()=>o,tBG:()=>i,b0D:()=>a});var n=r(821);function o(t,e){return(0,n.wg)(),(0,n.j4)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[(0,n.Wm)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"})])}function i(t,e){return(0,n.wg)(),(0,n.j4)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[(0,n.Wm)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})])}function a(t,e){return(0,n.wg)(),(0,n.j4)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[(0,n.Wm)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})])}},3724:(t,e,r)=>{"use strict";r.d(e,{b0D:()=>o});var n=r(821);function o(t,e){return(0,n.wg)(),(0,n.j4)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[(0,n.Wm)("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})])}}}]);