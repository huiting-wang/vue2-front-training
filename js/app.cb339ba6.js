(self["webpackChunkvue_front_exam"]=self["webpackChunkvue_front_exam"]||[]).push([[143],{5665:function(e,t,n){"use strict";n.r(t),t["default"]={name:"ExamIcon",functional:!0,props:{title:{type:String,default:""},fontSize:{type:[Number,String],default:24},color:{type:String,default:"currentColor"},tag:{type:String,default:"span"}},render(e,t){const{title:n,fontSize:a,color:s,tag:r}=t.props,o={position:"relative",alignSelf:"center",width:"1em",fontSize:"number"===typeof a?`${a}px`:a,color:s};let u={class:`exam-icon mdi mdi-${n}`,style:o};return e(r,u)}}},7026:function(e,t,n){"use strict";var a=n(144),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],o=n(1001),u={},l=(0,o.Z)(u,s,r,!1,null,null,null),i=l.exports,d=n(8345),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-container",{class:["layout-container",{"sidebar-opend":e.sidebarOpened}]},[n("el-aside",{staticStyle:{"background-color":"#2c3e50"},attrs:{width:"210px"}},[n("layout-sidebar",e._l(e.menuRoutes,(function(e){return n("LayoutNested",{key:e.path,attrs:{item:e}})})),1)],1),n("el-container",{staticClass:"layout-container__main"},[n("el-header",{staticClass:"layout-container__navbar",attrs:{height:"48px"}},[n("div",{staticClass:"layout-container__hamburger",on:{click:e.toggleSideBar}},[n("ExamIcon",{attrs:{title:"menu",color:"#2c3e50"}})],1)]),n("el-main",{attrs:{id:"layout-main"}},[n("router-view")],1)],1)],1)},p=[],m=n(629),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-menu",{staticClass:"layout-sidebar",attrs:{collapse:!e.sidebarOpened,"default-active":e.activeIndex,"background-color":"#2c3e50","text-color":"#AAABAB",router:""}},[n("div",{staticClass:"layout-sidebar__wrapper"},[e._t("default")],2)])},h=[],y={name:"LayoutSidebar",data(){return{activeIndex:""}},computed:{...(0,m.rn)({sidebarOpened:e=>e.layout.sidebarOpened})},watch:{$route(e){this.activeIndex=e.name}},mounted(){this.activeIndex=this.$route.name}},g=y,b=(0,o.Z)(g,f,h,!1,null,"3d777493",null),v=b.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"layout-sidebar__items"},[e.routeChildrenExist(e.item)?n("el-submenu",{attrs:{index:e.item.path,"popper-append-to-body":""}},[n("template",{slot:"title"},[n("ExamIcon",{attrs:{title:e.item&&e.item.meta.icon}}),n("span",{directives:[{name:"show",rawName:"v-show",value:!e.$parent.collapse,expression:"!$parent.collapse"}],staticClass:"layout-sidebar__items--title"},[e._v(e._s(e.item.meta.title)+" ")])],1),e._l(e.item.children,(function(t){return n("el-menu-item",{key:t.name,staticClass:"layout-sidebar__items--link",attrs:{index:t.name,route:e.resolvePath(e.item.path,t.path),disabled:t.meta.hidden}},[e._v(e._s(t.meta.title)+" ")])}))],2):n("el-menu-item",{staticClass:"layout-sidebar__items--link",attrs:{index:e.item.name,route:{path:e.item.path}}},[n("ExamIcon",{attrs:{title:e.item.meta&&e.item.meta.icon}}),n("span",{directives:[{name:"show",rawName:"v-show",value:e.sidebarOpened,expression:"sidebarOpened"}],staticClass:"layout-sidebar__items--title"},[e._v(e._s(e.item.meta.title))])],1)],1)},x=[],w=n(6470),k=n.n(w),O={name:"LayoutNested",props:{item:{type:Object,required:!0}},computed:{...(0,m.rn)({sidebarOpened:e=>e.layout.sidebarOpened})},methods:{resolvePath(e,t){return k().resolve(e,t)},routeChildrenExist(e){return!!e.children&&e.children.length>0}}},E=O,C=(0,o.Z)(E,_,x,!1,null,"2bb69f0c",null),L=C.exports,S={name:"LayoutIndex",components:{LayoutSidebar:v,LayoutNested:L},computed:{...(0,m.rn)({sidebarOpened:e=>e.layout.sidebarOpened}),menuRoutes(){return M[0].children}},methods:{toggleSideBar(){this.$store.dispatch("layout/toggleSideBar")}}},$=S,Z=(0,o.Z)($,c,p,!1,null,"00764257",null),I=Z.exports;const M=[{name:"homePage",path:"/",component:I,redirect:"/home",children:[{name:"rulesMarkdown",path:"home",component:()=>n.e(96).then(n.bind(n,5096)),meta:{icon:"home",title:"團隊開發規範"}},{name:"featureMarkdown",path:"feature",component:()=>n.e(921).then(n.bind(n,5921)),meta:{icon:"information",title:"主題功能需求"}}]}];a["default"].use(d.Z);const R=d.Z.prototype.push;d.Z.prototype.push=function(e,t,n){if(t||n)return R.call(this,e,t,n);try{return R.call(this,e).catch((e=>e))}catch(a){console.log(a)}};const N=d.Z.prototype.replace;d.Z.prototype.replace=function(e,t,n){if(t||n)return N.call(this,e,t,n);try{return N.call(this,e).catch((e=>e))}catch(a){console.log(a)}};const U=new d.Z({mode:"history",base:"/vue2-front-training/",routes:M,scrollBehavior(e,t,n){return n||{x:0,y:0}}});var j=U,B=n(4702);const P="SET_SIDEBAR";var T={namespaced:!0,state:{sidebarOpened:!0},mutations:{[P](e,t){e.sidebarOpened=t}},actions:{toggleSideBar({commit:e,state:t}){e(P,!t.sidebarOpened)},setSideBar({commit:e},t){e(P,t)}}};a["default"].use(m.ZP);var A=new m.ZP.Store({modules:{layout:T},plugins:[(0,B.Z)({paths:["layout.sidebarOpened"]})]}),q=(n(6699),n(7152));a["default"].use(q.Z);const z=new q.Z({fallbackLocale:"en"}),D=[];function H(e){return z.locale=e,document.querySelector("html").setAttribute("lang",e),e}function F(e){return z.locale!==e?D.includes(e)?Promise.resolve(H(e)):n(9897)(`./${e}.js`).then((t=>(z.setLocaleMessage(e,t.default),D.push(e),H(e)))):Promise.resolve(e)}F();var X=z,J=n(6473),G=n.n(J),K=n(272),Q=n.n(K),V=n(6769),W=n.n(V),Y=n(3591),ee=n.n(Y),te=n(4947),ne=n.n(te),ae=n(3921),se=n.n(ae),re=n(4243),oe=n.n(re),ue=n(4433),le=n.n(ue),ie=n(7092),de=n.n(ie),ce=n(2182),pe=n.n(ce),me=n(5303),fe=n.n(me),he=n(1937),ye=n.n(he),ge=n(2428),be=n.n(ge),ve=n(927),_e=n.n(ve),xe=n(7433),we=n.n(xe),ke=n(1530),Oe=n.n(ke),Ee=n(905),Ce=n.n(Ee),Le=n(6507),Se=n.n(Le),$e=n(2111),Ze=n.n($e),Ie=n(7698),Me=n.n(Ie),Re=n(5517),Ne=n.n(Re),Ue=n(4242),je=n.n(Ue),Be=n(32),Pe=n.n(Be),Te=n(4223),Ae=n.n(Te),qe=n(4561),ze=n.n(qe),De=n(4650),He=n.n(De),Fe=n(5034),Xe=n.n(Fe),Je=n(3364),Ge=n.n(Je),Ke=n(7563),Qe=n.n(Ke),Ve=n(6426),We=n.n(Ve),Ye=n(4354),et=n.n(Ye),tt=n(5614),nt=n.n(tt),at=n(7186),st=n.n(at),rt=n(8970),ot=n.n(rt),ut=n(3235),lt=n.n(ut),it=n(2810),dt=n.n(it),ct=n(2626),pt=n.n(ct),mt=n(8331),ft=n.n(mt),ht=n(1337),yt=n.n(ht),gt=n(1955),bt=n.n(gt),vt=n(7626),_t=n.n(vt),xt=n(4468),wt=n.n(xt),kt=n(1119),Ot=n.n(kt),Et=n(6909),Ct=n.n(Et),Lt=n(642),St=n.n(Lt),$t=n(2173),Zt=n.n($t),It=n(3229),Mt=n.n(It),Rt=n(7099),Nt=n.n(Rt),Ut=n(950),jt=n.n(Ut),Bt=n(6177),Pt=n.n(Bt),Tt=n(5134),At=n.n(Tt),qt=n(7665),zt=n.n(qt),Dt=n(7787),Ht=n.n(Dt),Ft=n(6181),Xt=n.n(Ft),Jt=n(1802);a["default"].use(Xt()),a["default"].use(Ht()),a["default"].use(zt()),a["default"].use(At()),a["default"].use(Pt()),a["default"].use(jt()),a["default"].use(Nt()),a["default"].use(Mt()),a["default"].use(Zt()),a["default"].use(St()),a["default"].use(Ct()),a["default"].use(Ot()),a["default"].use(wt()),a["default"].use(_t()),a["default"].use(bt()),a["default"].use(yt()),a["default"].use(ft()),a["default"].use(pt()),a["default"].use(dt()),a["default"].use(lt()),a["default"].use(ot()),a["default"].use(st()),a["default"].use(nt()),a["default"].use(et()),a["default"].use(We()),a["default"].use(Qe()),a["default"].use(Ge()),a["default"].use(Xe()),a["default"].use(He()),a["default"].use(ze()),a["default"].use(Ae()),a["default"].use(Pe()),a["default"].use(je()),a["default"].use(Ne()),a["default"].use(Me()),a["default"].use(Ze()),a["default"].use(Se()),a["default"].use(Ce()),a["default"].use(Oe()),a["default"].use(we()),a["default"].use(_e()),a["default"].use(be()),a["default"].use(ye()),a["default"].use(fe()),a["default"].use(pe()),a["default"].use(de()),a["default"].use(le()),a["default"].use(oe()),a["default"].use(se()),a["default"].use(ne()),a["default"].use(ee().directive),Jt["default"].i18n(((e,t)=>X.t(e,t))),a["default"].prototype.$loading=ee().service,a["default"].prototype.$msgbox=W(),a["default"].prototype.$alert=W().alert,a["default"].prototype.$confirm=W().confirm,a["default"].prototype.$prompt=W().prompt,a["default"].prototype.$notify=Q(),a["default"].prototype.$message=G();var Gt=n(8929),Kt=n.n(Gt),Qt=n(1700),Vt=n.n(Qt);const Wt=n(1619);Wt.keys().forEach((e=>{const t=Wt(e),n=Vt()(Kt()(e.split("/").pop().replace(/\.\w+$/,"")));a["default"].component(n,t.default||t)}));var Yt=n(5623),en=n.n(Yt),tn=n(5472),nn=n.n(tn);n(1581);const an=e=>e.toString().toLowerCase().replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/\s/g,"");const sn=e=>"string"===typeof e,rn={apiUrl:"/mock/v1/sample/info",timeout:50,resultList:[],count:2578,filterColumns:["name","email","phone","desc","date"]};en().setup({timeout:rn.timeout}),en().Random.extend({phone:function(){const e="09";return this.pick(e)+en().mock(/\d{2}\-\d{6}/)},http:function(){const e="http://";return this.pick(e)+en().mock(/.{1,90}/)}});for(let pn=0;pn<rn.count;pn++)rn.resultList.push(en().mock({id:"@increment",name:"@name(true)",email:"@email()",phone:"@phone",desc:"@paragraph(1, 1)",date:en().Random.now("yyyy-MM-dd")}));function on(e=[],t=""){if(!sn(t)||e.length<=0)return;let n=new RegExp(an(t),"ig");return e.filter((e=>{const t=Object.keys(e).reduce(((t,n)=>rn.filterColumns.includes(n)?t+e[n]:t),"");return t.match(n)}))}var un=[{url:rn.apiUrl,type:"get",response:e=>{const{page:t=0,per_page:n=10,sort:a,keyword:s}=e.query;let r=parseInt(t),o=parseInt(n),u=a?a.split("|"):[],l=[];l=u[0]&&u[1]?on(nn()(rn.resultList,[e=>e[u[0]]],[u[1]]),s):on(rn.resultList,s);let i=r>0?(r-1)*o:0,d=i+o;const c=l.slice(i,d);return{code:200,from:l.length>0?i+1:0,to:c?.length>=o?d:i+c.length,per_page:r,total:l.length>0?l.length:0,list:r>0?c:l}}},{url:rn.apiUrl,type:"post",response:e=>{const t=e?.body;let n=rn.resultList[rn.resultList.length-1],a=Math.abs(n.id)+1,s={id:a.toString(),name:t.name,email:t.email,phone:t.phone,desc:t.desc,date:en().Random.now("yyyy-MM-dd")};return rn.resultList.push.apply(rn.resultList,[s]),{code:200,list:rn.resultList,data:s,message:"儲存成功"}}},{url:rn.apiUrl,type:"put",response:e=>{const{id:t,name:n,email:a,phone:s,desc:r}=e.body,o={id:t,name:n,email:a,phone:s,desc:r,date:en().Random.now("yyyy-MM-dd")};return rn.resultList.forEach((e=>{e.id===t&&(e.name=n,e.email=a,e.phone=s,e.desc=r,e.date=en().Random.now("yyyy-MM-dd"))})),{code:200,data:o,message:"資料已變更"}}},{url:rn.apiUrl,type:"delete",response:e=>{const{id:t}=e.query;return rn.resultList.forEach(((e,n)=>{e.id===Number(t)&&rn.resultList.splice(n,1)})),{code:200,message:"刪除成功"}}}],ln=[...un];function dn(e){const t=decodeURIComponent(e.split("?")[1]).replace(/\+/g," ");if(!t)return{};const n={},a=t.split("&");return a.forEach((e=>{const t=e.indexOf("=");if(-1!==t){const a=e.substring(0,t),s=e.substring(t+1,e.length);n[a]=s}})),n}function cn(){function e(e){return function(t){let n=null;if(e instanceof Function){const{body:a,type:s,url:r}=t;n=e({method:s,body:JSON.parse(a),query:dn(r)})}else n=e;return en().mock(n)}}en().XHR.prototype.proxy_send=en().XHR.prototype.send,en().XHR.prototype.send=function(){this.custom.xhr&&(this.custom.xhr.withCredentials=this.withCredentials||!1,this.responseType&&(this.custom.xhr.responseType=this.responseType)),this.proxy_send(...arguments)},ln.forEach((t=>{en().mock(new RegExp(t.url+".*"),t.type||"get",e(t.response))}))}n(6229);n(7628).shim(),cn(),a["default"].config.productionTip=!1,new a["default"]({router:j,store:A,i18n:X,render:e=>e(i)}).$mount("#app")},1619:function(e,t,n){var a={"./ExamIcon.js":5665};function s(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}s.keys=function(){return Object.keys(a)},s.resolve=r,e.exports=s,s.id=1619},9897:function(e,t,n){var a={"./en.js":[7246,8,820],"./zh-Hans.js":[8264,529],"./zh-Hant.js":[1097,8,219]};function s(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],s=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(s)}))}s.keys=function(){return Object.keys(a)},s.id=9897,e.exports=s}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[8,748,875,692,126,561,674,925,612],(function(){return t(7026)}));e.O()}]);