(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-49c818ea"],{"0305":function(t,a,s){"use strict";var e=s("2373"),n=s.n(e);n.a},2373:function(t,a,s){},"37d3":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"post"},[s("Header"),s("div",{staticClass:"cover",style:{"background-image":"url("+t.data.background+")"}},[s("div",{staticClass:"content"},[s("div",{staticClass:"container"},[s("p",{staticClass:"hashtag"},t._l(t.data.tags,function(a){return s("router-link",{key:a,attrs:{to:{path:"/search",query:{s:a}}}},[t._v("#"+t._s(a))])}),1),s("h2",[s("strong",[t._v(t._s(t.data.title))])]),t.data.createdAt?s("p",{staticClass:"time"},[t._v("Post "+t._s(t._f("formatDate")(t.data.createdAt.seconds))+" by "+t._s(t.data.creator))]):t._e()])])]),s("div",{staticClass:"container"},[s("div",{staticClass:"main-content col-md-10 offset-md-1"},[t._v("\n      "+t._s(t.data.content)+"\n    ")])]),s("Footer")],1)},n=[],c=s("a4bb"),o=s.n(c),i=(s("ac6a"),s("0418")),r=s("fd2d"),d=s("ba5f"),u={name:"home",components:{Header:i["a"],Footer:r["a"]},data:function(){return{data:{}}},methods:{getData:function(){var t=this,a=this.$route.params.id;Object(d["a"])(a).then(function(a){if(a.exists){t.data=a.data();var s=[];console.log(t.data),o()(t.data).forEach(function(t){t.indexOf("tag_")>-1&&s.push(t.substring(4))}),t.data.tags=s}})}},created:function(){this.getData()}},l=u,f=(s("0305"),s("2877")),h=Object(f["a"])(l,e,n,!1,null,null,null);a["default"]=h.exports}}]);
//# sourceMappingURL=chunk-49c818ea.193db480.js.map