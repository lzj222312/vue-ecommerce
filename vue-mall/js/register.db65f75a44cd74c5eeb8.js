webpackJsonp([13],{0:function(t,s,i){"use strict";function e(t){var s={};return c()(t).forEach(function(i){s[i]=v+t[i]}),s}function a(t,s){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return new r.a(function(e,a){u()({method:t,url:s,params:i}).then(function(t){var s=t.data;"string"==typeof s&&(s=JSON.parse(s)),200===s.status?e(s):300===s.status||a(s)}).catch(function(t){a({status:-1,message:"系统错误，请稍后重试！"})})})}i.d(s,"a",function(){return e}),i.d(s,"b",function(){return a});var n=i(29),r=i.n(n),o=i(18),c=i.n(o),l=i(27),u=i.n(l),v=i(8).devHost},10:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=i(0),a={};a=i.i(e.a)(a),s.default={data:function(){return{}}}},11:function(t,s){},12:function(t,s){t.exports="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QN7aHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjAtYzA2MCA2MS4xMzQzNDIsIDIwMTAvMDEvMTAtMTg6MDY6NDMgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NzIzQ0U3N0NFOENBRTUxMTlBNkE5RTAxQ0Q4NzAwNjgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QURBQkNBNUIxNUVDMTFFNkJDNjI5RTBBMDMxN0EwMUYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QURBQkNBNUExNUVDMTFFNkJDNjI5RTBBMDMxN0EwMUYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmJkMTk1YThmLWY5NjUtY2U0Yy1hNGQxLWY5ZGM1ODEyNTUyMCIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjJmZDJjYTE0LWNiMmEtMTFlNS05MWIxLWFlYTM2NzU0ODQyZSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9y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"},13:function(t,s,i){t.exports={render:function(){var t=this,s=t.$createElement;t._self._c;return t._m(0,!1,!1)},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"ft wrapper-width",attrs:{id:"foot"}},[e("div",{staticClass:"main-content-w"},[e("ul",{staticClass:"ft-resourceCenter"},[e("li",[e("i",{staticClass:"ft-guide"}),t._v(" "),e("h5",[t._v("购物指南")]),t._v(" "),e("a",{attrs:{href:"helpCenter.html"}},[t._v("购物流程")]),t._v(" "),e("a",{attrs:{href:"helpCenter.html"}},[t._v("会员介绍")]),t._v(" "),e("a",{attrs:{href:"helpCenter.html"}},[t._v("常见问题")])]),t._v(" "),e("li",[e("i",{staticClass:"ft-service"}),t._v(" "),e("h5",[t._v("售后服务")]),t._v(" "),e("a",{attrs:{href:"helpCenter.html"}},[t._v("售后政策")]),t._v(" "),e("a",{attrs:{href:"helpCenter.html"}},[t._v("价格保护")]),t._v(" "),e("a",{attrs:{href:"helpCenter.html"}},[t._v("退款说明")])]),t._v(" "),e("li",[e("i",{staticClass:"ft-payment"}),t._v(" "),e("h5",[t._v("支付方式")]),t._v(" "),e("a",{attrs:{href:"helpCenter.html"}},[t._v("货到付款")]),t._v(" "),e("a",{attrs:{href:"helpCenter.html"}},[t._v("在线支付")]),t._v(" "),e("a",{attrs:{href:"helpCenter.html"}},[t._v("分期付款")])]),t._v(" "),e("li",[e("i",{staticClass:"ft-delivery"}),t._v(" "),e("h5",[t._v("送货方式")]),t._v(" "),e("a",{attrs:{href:"helpCenter.html"}},[t._v("配送服务查询")]),t._v(" "),e("a",{attrs:{href:"helpCenter.html"}},[t._v("配送费收取标准")]),t._v(" "),e("a",{attrs:{href:"helpCenter.html"}},[t._v("上门自提")])])]),t._v(" "),e("div",{staticClass:"ft-info"},[e("div",{staticClass:"ft-info-logo"},[e("i",{staticClass:"logo-white"}),t._v(" "),e("p",[t._v("挖掘机服务平台")])]),t._v(" "),e("div",{staticClass:"ft-info-content"},[e("p",[t._v("挖掘机服务热线：13800138000 电子邮箱：13800138000@163.com")]),t._v(" "),e("p",[t._v("挖掘机设备有限公司版权所有2012-2016 京ICP 备12345")])]),t._v(" "),e("div",{staticClass:"ft-info-qr"},[e("img",{attrs:{src:i(12)}}),t._v(" "),e("p",[t._v("扫一扫下载APP")])])])])])}]}},15:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=i(0),a=i(4),n={getUrl:"/user/getUser.do",dropOut:"/user/logout.do"};n=i.i(e.a)(n),s.default={data:function(){return{mobile:"",isLogin:!1}},created:function(){var t=this;this.getUser(),a.a.$on("login",function(s){t.mobile=s.mobile,t.isLogin=!0})},methods:{getUser:function(){var t=this;i.i(e.b)("post",n.getUrl).then(function(s){t.isLogin=!0;var i=s.data.user;t.name=i.name,t.headImage=i.headlmage,t.mobile=i.mobile,a.a.$emit("topLogin",s)})},dropOut:function(){var t=this;i.i(e.b)("post",n.dropOut).then(function(s){t.isLogin=!1,t.mobile="",a.a.$emit("dropOut")})}}}},154:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),function(t){var s=i(44),e=(i.n(s),i(7)),a=i.n(e),n=i(5),r=i.n(n),o=i(45),c=i.n(o);new t({el:"#app",components:{Top:a.a,Foot:r.a,Common:c.a}})}.call(s,i(1))},16:function(t,s){},17:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"hd wrapper-width",attrs:{id:"head"}},[i("div",{staticClass:"main-content-w"},[i("ul",{staticClass:"hd-left"},[i("li",[t._v("您好，欢迎来到饥人谷挖掘机服务平台!")]),t._v(" "),t.isLogin?i("li",[i("a",{attrs:{href:"javascript:;"}},[t._v(t._s(t.mobile)+"，您好！")]),t._v(" "),i("a",{attrs:{href:"javascript:;"},on:{click:t.dropOut}},[t._v("退出")])]):i("li",[i("a",{attrs:{href:"login.html"}},[t._v("请登录")]),t._v(" "),i("a",{attrs:{href:"register.html"}},[t._v("注册")])])]),t._v(" "),t._m(0,!1,!1)])])},staticRenderFns:[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("ul",{staticClass:"hd-right"},[i("li",[i("a",{attrs:{href:"index.html"}},[i("i",{staticClass:"icon-Home"}),t._v("首页")]),t._v(" | ")]),t._v(" "),i("li",[i("a",{attrs:{href:"personal.html"}},[i("i",{staticClass:"icon-geren"}),t._v("个人中心")]),t._v(" | ")]),t._v(" "),i("li",[i("a",{attrs:{href:"javascript:;"}},[i("i",{staticClass:"icon-aboutus"}),t._v("关于我们")])])])}]}},26:function(t,s,i){"use strict";function e(t){return!!/^1[3,4,5,7,8,9]\d{9}$/.test(t)}i.d(s,"a",function(){return e})},3:function(t,s){},38:function(t,s){},4:function(t,s,i){"use strict";(function(t){var i=new t;s.a=i}).call(s,i(1))},44:function(t,s){},45:function(t,s,i){i(78);var e=i(2)(i(60),i(80),"data-v-1702058a",null);t.exports=e.exports},5:function(t,s,i){i(11);var e=i(2)(i(10),i(13),"data-v-fc7e1c2c",null);t.exports=e.exports},6:function(t,s){},60:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),function(t){var e=i(6),a=(i.n(e),i(9)),n=i.n(a),r=i(38),o=(i.n(r),i(3)),c=(i.n(o),i(55)),l=i.n(c),u=i(26),v=i(0);t.use(l.a);var d={code:"/user/code.do"};d=i.i(v.a)(d),s.default={data:function(){return{phone:"",passwd:"",phoneMsg:"",passwdMsg:"",verifyPasswd:"",verifyPasswdMsg:"",verification:"",verificationMsg:"",obtainSecond:10,registerFlag:!1,isBtn:!1,time:null}},methods:{isPhone:function(){return this.phone?i.i(u.a)(this.phone)?(this.phoneMsg="",!0):(this.phoneMsg="请输入正确的手机号码！",!1):(this.phoneMsg="请填写手机号码！",!1)},isPassWd:function(){return this.passwd?(this.passwdMsg="",!0):(this.passwdMsg="请填写密码！",!1)},verifyPwd:function(){return this.verifyPasswd?this.verifyPasswd!=this.passwd?(this.verifyPasswdMsg="必须与登录密码保持一致！",!1):(this.verifyPasswdMsg="",!0):(this.verifyPasswdMsg="请填写确认密码！",!1)},isObtain:function(){if(this.isPhone()){if(this.isBtn=!0,10!=this.obtainSecond)return!1;i.i(v.b)("post",d.code,{mobile:this.phone}).then(function(t){n()({message:t.data.code,type:"success"})}),this.time=setInterval(this.countDown,1e3)}},countDown:function(){--this.obtainSecond<=0&&(clearInterval(this.time),this.time=null,this.obtainSecond=10,this.isBtn=!1)},registered:function(){if(this.verifyPwd()&&this.isPassWd()&&this.isPhone()){if(!this.verification)return this.verificationMsg="请填写接收到的验证码！",!1;this.verificationMsg="",this.registerFlag=!0,setTimeout(function(){location.href="http://localhost:8080/login.html"},5e3)}}},watch:{passwd:function(t,s){t==this.verifyPasswd&&(this.verifyPasswdMsg="")}}}}.call(s,i(1))},7:function(t,s,i){i(16);var e=i(2)(i(15),i(17),"data-v-dc357e54",null);t.exports=e.exports},78:function(t,s){},8:function(t,s){t.exports={devHost:"https://www.easy-mock.com/mock/59d3bea69cabc90bb5e5f8d7/mall"}},80:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"register"},[i("div",{directives:[{name:"show",rawName:"v-show",value:!t.registerFlag,expression:"!registerFlag"}],staticClass:" register-import"},[i("dl",[i("dt",[t._v("注册手机号：")]),t._v(" "),i("dd",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],attrs:{type:"tel"},domProps:{value:t.phone},on:{blur:t.isPhone,input:function(s){s.target.composing||(t.phone=s.target.value)}}})]),t._v(" "),i("dd",[i("span",{class:{"btn-span":t.isBtn},on:{click:t.isObtain}},[t._v(t._s(10==t.obtainSecond?"获取验证码":t.obtainSecond+"s"))])])]),t._v(" "),i("p",{staticClass:"validate_msg"},[t._v(t._s(t.phoneMsg))]),t._v(" "),i("dl",[i("dt",[t._v("输入验证码：")]),t._v(" "),i("dd",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.verification,expression:"verification"}],attrs:{type:"type"},domProps:{value:t.verification},on:{input:function(s){s.target.composing||(t.verification=s.target.value)}}})])]),t._v(" "),i("p",{staticClass:"validate_msg"},[t._v(t._s(t.verificationMsg))]),t._v(" "),i("dl",[i("dt",[t._v("登录密码：")]),t._v(" "),i("dd",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.passwd,expression:"passwd"}],attrs:{type:"password"},domProps:{value:t.passwd},on:{blur:t.isPassWd,input:function(s){s.target.composing||(t.passwd=s.target.value)}}})])]),t._v(" "),i("p",{staticClass:"validate_msg"},[t._v(t._s(t.passwdMsg))]),t._v(" "),i("dl",[i("dt",[t._v("确认密码：")]),t._v(" "),i("dd",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.verifyPasswd,expression:"verifyPasswd"}],attrs:{type:"password"},domProps:{value:t.verifyPasswd},on:{blur:t.verifyPwd,input:function(s){s.target.composing||(t.verifyPasswd=s.target.value)}}})])]),t._v(" "),i("p",{staticClass:"validate_msg"},[t._v(t._s(t.verifyPasswdMsg))]),t._v(" "),i("el-button",{staticClass:"btn",attrs:{loading:t.registerFlag},on:{click:t.registered}},[t._v("\n\t\t\t注册\n\t\t")])],1),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.registerFlag,expression:"registerFlag"}],staticClass:"register-success"},[t._m(0,!1,!1),t._v(" "),i("button",{staticClass:"btn"},[t._v("\n\t\t\t登    录\n\t\t")])])])},staticRenderFns:[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"register-success-msg"},[i("i",{staticClass:"icon-chache"}),t._v(" "),i("p",[t._v("恭喜您已注册成功！")])])}]}}},[154]);
//# sourceMappingURL=register.db65f75a44cd74c5eeb8.js.map