(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-45d166c2"],{"2d3b":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"search "},[a("Header"),a("br"),a("br"),a("div",{staticClass:"container"},[a("h2",[e._v("Search for: "),a("strong",[e._v(e._s(e.keySearch))])])]),a("br"),a("Blog",{attrs:{data:e.blogs}}),a("Pagination",{attrs:{pageIndex:e.pageIndex,total:e.total,onChangePage:e.onChangePage}}),a("Footer")],1)},o=[],c=a("cebc"),r=a("0418"),s=a("fd2d"),i=a("3d68"),h=a("ba5f"),d={name:"search",components:{Header:r["a"],Footer:s["a"],Blog:i["a"]},data:function(){return{keySearch:"",blogs:[],pageIndex:1,total:0}},methods:{onChangePage:function(){},doSearch:function(){this.keySearch=this.$route.query.s;var e=this;console.log("doSearch"),Object(h["c"])(this.pageIndex,this.keySearch).then(function(t){e.blogs=[];var a=t.list;console.log("getSearchPosts >>>>>>>>>>>>>",t),e.total=t.total,a.map(function(t){e.blogs.push(Object(c["a"])({id:t.id},t))})})}},watch:{"$route.query.s":function(){this.doSearch()}},created:function(){this.doSearch()}},l=d,u=(a("3de7"),a("2877")),g=Object(u["a"])(l,n,o,!1,null,null,null);t["default"]=g.exports},"3de7":function(e,t,a){"use strict";var n=a("f32b"),o=a.n(n);o.a},f32b:function(e,t,a){}}]);
//# sourceMappingURL=chunk-45d166c2.c5031e37.js.map