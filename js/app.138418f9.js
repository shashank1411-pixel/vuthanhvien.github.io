(function(t){function e(e){for(var s,i,o=e[0],c=e[1],l=e[2],u=0,v=[];u<o.length;u++)i=o[u],n[i]&&v.push(n[i][0]),n[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);f&&f(e);while(v.length)v.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,i=1;i<a.length;i++){var c=a[i];0!==n[c]&&(s=!1)}s&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},n={app:0},r=[];function i(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"ff0fe3ae"}[t]+".js"}function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(t){var e=[],a=n[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise(function(e,s){a=n[t]=[e,s]});e.push(a[2]=s);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=i(t),r=function(e){c.onerror=c.onload=null,clearTimeout(l);var a=n[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+s+": "+r+")");i.type=s,i.request=r,a[1](i)}n[t]=void 0}};var l=setTimeout(function(){r({type:"timeout",target:c})},12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(e)},o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var f=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"116c":function(t,e,a){},"21bb":function(t,e,a){"use strict";var s=a("bcc9"),n=a.n(s);n.a},"2e81":function(t,e,a){},"3fe5":function(t,e,a){"use strict";var s=a("2e81"),n=a.n(s);n.a},"4f6c":function(t,e,a){"use strict";var s=a("7da5"),n=a.n(s);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},r=[],i=(a("5c0b"),a("2877")),o={},c=Object(i["a"])(o,n,r,!1,null,null,null),l=c.exports,u=a("8c4f"),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home "},[a("Header"),a("Intro"),a("Blog"),a("Footer")],1)},v=[],d=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},p=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"intro container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-7"},[a("h1",[t._v("\n        Hello! I'm\n        "),a("span",[t._v("Vien Vu")])]),a("h3",[t._v("I'm a frontend developer")]),a("p",[a("a",[t._v("#CSS")]),a("a",[t._v("#HTML")]),a("a",[t._v("#JS")])]),a("p",{staticClass:"social"},[a("a",{attrs:{href:"https://www.facebook.com/thangkubom742",target:"_blank"}},[a("i",{staticClass:"fa fa-facebook"})]),a("a",[a("i",{staticClass:"fa fa-instagram"})]),a("a",{attrs:{href:"https://www.youtube.com/channel/UCDqLCfHn9VMHk7bYG-xlvhw",target:"_blank"}},[a("i",{staticClass:"fa fa-youtube"})])])]),a("div",{staticClass:"col-md-5 text-right"},[a("div",{staticClass:"avatar"},[a("img",{attrs:{src:"avatar.jpg"}})])])])])}],m={name:"Intro",props:{msg:String}},h=m,b=(a("9a91"),Object(i["a"])(h,d,p,!1,null,"4dc4d9e8",null)),g=b.exports,C=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},_=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header container"},[a("div",{staticClass:"logo"},[a("a",{attrs:{href:"/"}},[a("img",{attrs:{src:"logo.png"}})])]),a("div",{staticClass:"menu"},[a("ul",[a("li",[a("div",{staticClass:"sub active"},[a("a",{attrs:{href:"/"}},[t._v("Home")])])]),a("li",[a("div",{staticClass:"sub"},[a("a",{attrs:{href:"/programming"}},[t._v("Programing")])])]),a("li",[a("div",{staticClass:"sub"},[a("a",{attrs:{href:"/hobby"}},[t._v("\n            Hobby\n            "),a("i",{staticClass:"fa fa-chevron-down"})]),a("div",{staticClass:"sub-menu"},[a("ul",[a("li",[a("a",[t._v("Photographer")])]),a("li",[a("a",[t._v("Film review")])]),a("li",[a("a",[t._v("Book review")])])])])])]),a("li",[a("div",{staticClass:"sub"},[a("a",{attrs:{href:"/whoiam"}},[t._v("Who am I?")])])]),a("li",[a("div",{staticClass:"sub"},[a("a",{attrs:{href:"/contact"}},[t._v("Contact")])])])])]),a("div",{staticClass:"search"},[a("i",{staticClass:"fa fa-search"})])])}],w={name:"Header",props:{msg:String}},y=w,j=(a("3fe5"),Object(i["a"])(y,C,_,!1,null,"7a08945d",null)),O=j.exports,x=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},P=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer"},[a("p",{staticClass:"text-center"},[t._v("Design and develop by Vienvu")])])}],S={name:"Footer",props:{msg:String}},E=S,k=(a("4f6c"),Object(i["a"])(E,x,P,!1,null,"519811d5",null)),$=k.exports,T=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},H=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"blog container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-8"},[a("div",{staticClass:"blog-detail"},[a("div",{staticClass:"content"},[a("p",{staticClass:"hashtag"},[t._v("#Programming")]),a("h5",[t._v("Why We Trust Apple and Google More Than Our Governments")]),a("p",{staticClass:"time"},[t._v("Posted 5 min ago")])]),a("div",{staticClass:"overflow"})])]),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"blog-detail"},[a("div",{staticClass:"content"},[a("p",{staticClass:"hashtag"},[t._v("#Travel")]),a("h5",[t._v("Why We Trust Apple and Google")]),a("p",{staticClass:"time"},[t._v("Posted 8 min ago")])]),a("div",{staticClass:"overflow"})])]),a("div",{staticClass:"col-md-5"},[a("div",{staticClass:"blog-detail"},[a("div",{staticClass:"overflow"})])]),a("div",{staticClass:"col-md-7"},[a("div",{staticClass:"blog-detail"},[a("div",{staticClass:"overflow"})])]),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"blog-detail"},[a("div",{staticClass:"overflow"})])]),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"blog-detail"},[a("div",{staticClass:"overflow"})])])])])}],M={name:"Blog",props:{msg:String}},I=M,W=(a("fcb9"),Object(i["a"])(I,T,H,!1,null,"d642d238",null)),B=W.exports,F={name:"home",components:{Intro:g,Header:O,Footer:$,Blog:B}},G=F,V=(a("21bb"),Object(i["a"])(G,f,v,!1,null,null,null)),A=V.exports;s["a"].use(u["a"]);var J=new u["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:A},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}}]}),L=a("2f62");s["a"].use(L["a"]);var q=new L["a"].Store({state:{},mutations:{},actions:{}}),D=a("9f7b"),U=a.n(D);a("f9e3"),a("2dd8");s["a"].config.productionTip=!1,s["a"].use(U.a),new s["a"]({router:J,store:q,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var s=a("5e27"),n=a.n(s);n.a},"5e27":function(t,e,a){},"7da5":function(t,e,a){},"8d25":function(t,e,a){},"9a91":function(t,e,a){"use strict";var s=a("8d25"),n=a.n(s);n.a},bcc9:function(t,e,a){},fcb9:function(t,e,a){"use strict";var s=a("116c"),n=a.n(s);n.a}});
//# sourceMappingURL=app.138418f9.js.map