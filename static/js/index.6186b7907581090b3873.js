webpackJsonp([3],{0:function(t,e,a){"use strict";var n={hotLists:"/index/hotLists",bannerlists:"/index/banner",topList:"/category/topList",rank:"/category/rank",subList:"/category/subList",searchList:"/search/list",details:"/goods/details",dealList:"/goods/deal",cartAdd:"/cart/add",carLists:"/cart/list",cartUpdate:"/cart/update",cartReduce:"/cart/reduce",cartRemove:"/cart/remove",cartMrremove:"/cart/mrremove",addressAdd:"/address/add",addressRemove:"/address/remove",addressList:"/address/list",addressUpdate:"/address/update",addressDefault:"/address/setDefault"};for(var s in n)n.hasOwnProperty(s)&&(n[s]="http://rap2api.taobao.org/app/mock/7058"+n[s]);e.a=n},10:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bottom-nav"},[a("ul",t._l(t.navConfig,function(e,n){return a("li",{class:{active:n==t.curIndex},on:{click:function(a){return t.changeNav(e,n)}}},[a("a",{attrs:{href:e.href}},[a("i",{class:e.icon}),t._v(" "),a("div",[t._v(t._s(e.name))])])])}),0)])},staticRenderFns:[]}},11:function(t,e){},12:function(t,e,a){function n(t){a(15)}var s=a(4)(a(14),a(17),n,"data-v-3c79c839",null);t.exports=s.exports},14:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(29);e.default={name:"swiper",props:{lists:{required:!0}},mounted:function(){new n.a(".swiper-container",{loop:!0,autoplay:!0,pagination:{el:".swiper-pagination",clickable:!0}})}}},15:function(t,e){},17:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"swiper-container"},[a("div",{staticClass:"swiper-wrapper"},t._l(t.lists,function(t){return a("div",{key:t.index,staticClass:" swiper-slide"},[a("a",{staticClass:"js-no-follow",attrs:{href:t.clickUrl}},[a("img",{staticClass:"goods-main-photo fadeIn",attrs:{src:t.img}})])])}),0),t._v(" "),a("div",{staticClass:"swiper-pagination"})])},staticRenderFns:[]}},32:function(t,e){},44:function(t,e){},68:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(32),s=(a.n(n),a(46)),i=a.n(s),r=a(11),o=(a.n(r),a(44)),c=(a.n(o),a(1)),d=a(3),l=a.n(d),u=a(0),f=a(7),p=a.n(f),h=a(12),v=a.n(h);c.default.use(i.a);new c.default({el:"#app",data:{lists:null,loading:!1,allLoaded:!1,pageNum:1,pageSize:6,bannerlists:null},created:function(){this.getLists(),this.getbanner()},methods:{getLists:function(){var t=this;this.allLoaded||(this.loading=!0,l.a.get(u.a.hotLists,{params:{pageNum:this.pageNum,pageSize:this.pageSize}}).then(function(e){var a=e.data.lists;a.length<6&&(t.allLoaded=!0),t.lists?t.lists=t.lists.concat(a):t.lists=a,t.pageNum++,t.loading=!1}))},getbanner:function(){var t=this;l.a.get(u.a.bannerlists).then(function(e){t.bannerlists=e.data.lists})}},components:{Foot:p.a,swiper:v.a}})},7:function(t,e,a){function n(t){a(9)}var s=a(4)(a(8),a(10),n,"data-v-5453db8f",null);t.exports=s.exports},8:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(5),s=a.n(n),i=s.a.parse(location.search.substr(1)),r=i.index,o=[{name:"有赞",href:"index.html",icon:"icon-home"},{name:"分类",href:"category.html",icon:"icon-category"},{name:"购物车",href:"cart.html",icon:"icon-cart"},{name:"我",href:"member.html",icon:"icon-user"}];e.default={name:"Foot",data:function(){return{navConfig:o,curIndex:parseInt(r)||0}},methods:{changeNav:function(t,e){console.log(t.href),location.href=t.href+"?index="+e,window.event.returnValue=!1}}}},9:function(t,e){}},[68]);
//# sourceMappingURL=index.6186b7907581090b3873.js.map