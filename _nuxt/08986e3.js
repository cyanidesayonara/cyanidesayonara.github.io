(window.webpackJsonp=window.webpackJsonp||[]).push([[9,8],{277:function(e,t,n){e.exports=n.p+"img/index.a2f6c5c.png"},278:function(e,t){throw new Error("Module parse failed: Assigning to rvalue (1:2)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> ---\n| title: Introduction to the blog\n| description: This post will serve as a brief introduction to the content and purpose of this blog")},279:function(e,t,n){e.exports=n.p+"img/index.a2f6c5c.png"},280:function(e,t){throw new Error("Module parse failed: Assigning to rvalue (1:2)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> ---\n| title: How to create a JAMstack blog with Nuxt.js and @nuxt/content, part 1\n| description: This post will provide you with a glossary of the technical terms you need to know as well as the reasoning behind choosing those technologies")},281:function(e,t,n){e.exports=n.p+"img/index.a2f6c5c.png"},282:function(e,t){throw new Error('Module parse failed: Unterminated string constant (1:1)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> I\'m Santtu Nykänen, a thirty-something fullstack-developer from Helsinki.\n| \n| This website includes my <nuxt-link to="/portfolio">portfolio</nuxt-link> with work experience, personal projects,')},283:function(e,t,n){e.exports=n.p+"img/index.a2f6c5c.png"},284:function(e,t){throw new Error('Module parse failed: Unexpected token (1:5)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> Olen Santtu Nykänen, kolmikymppinen fullstack-kehittäjä Helsingistä.\n| \n| Tämä nettisivu sisältää <nuxt-link to="/portfolio">portfolioni</nuxt-link>, josta löytyy tietoa työhistoriastani,')},285:function(e,t,n){e.exports=n.p+"img/index.a2f6c5c.png"},286:function(e,t){throw new Error('Module parse failed: Unterminated string constant (1:1)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> I\'m Santtu Nykänen, a thirty-something fullstack-developer from Helsinki.\n| \n| This website includes my <nuxt-link to="/portfolio">portfolio</nuxt-link> with work experience, personal projects,')},287:function(e,t,n){e.exports=n.p+"img/index.a2f6c5c.png"},288:function(e,t){throw new Error('Module parse failed: Unexpected token (1:5)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> Olen Santtu Nykänen, kolmikymppinen fullstack-kehittäjä Helsingistä.\n| \n| Tämä nettisivu sisältää <nuxt-link to="/portfolio">portfolioni</nuxt-link>, josta löytyy tietoa työhistoriastani, ')},289:function(e,t,n){var map={"./content/blog/1/images/index.png":277,"./content/blog/1/index.md":278,"./content/blog/2/images/index.png":279,"./content/blog/2/index.md":280,"./content/index/en/images/index.png":281,"./content/index/en/index.md":282,"./content/index/fi/images/index.png":283,"./content/index/fi/index.md":284,"./content/portfolio/en/images/index.png":285,"./content/portfolio/en/index.md":286,"./content/portfolio/fi/images/index.png":287,"./content/portfolio/fi/index.md":288};function o(e){var t=r(e);return n(t)}function r(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}o.keys=function(){return Object.keys(map)},o.resolve=r,e.exports=o,o.id=289},425:function(e,t,n){"use strict";n.r(t);n(51);var o={props:{src:{type:String,required:!0},alt:{type:String,required:!0}},methods:{imgSrc:function(){try{var e=this.$parent.$parent.post;return n(289)("./content".concat(e.dir,"/images/").concat(this.src))}catch(e){return null}}}},r=n(37),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("img",{attrs:{src:e.imgSrc(),alt:e.alt}})}),[],!1,null,null,null);t.default=component.exports},471:function(e,t,n){"use strict";n.r(t);var o=n(8),r=n(3),l=(n(45),{asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,l,c,d,f,h,m,x;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$content,l=e.params,c=e.error,"en",d=null!==(n=l.slug)&&void 0!==n?n:"en",f="/index/".concat(d),t.next=6,r("index",{deep:!0}).where({dir:f}).fetch();case 6:return h=t.sent,m=Object(o.a)(h,1),(x=m[0])||c({statusCode:404,message:"Page could not be found"}),t.abrupt("return",{post:x});case 11:case"end":return t.stop()}}),t)})))()},head:function(){return{title:"Portfolio | Blog",htmlAttrs:{lang:"en"},meta:[{hid:"Portfolio | Blog",name:"Portfolio | Blog",content:"Portfolio | Blog"}]}}}),c=n(37),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",{attrs:{id:"portfolio"}},[n("v-img",{attrs:{src:"index.png",alt:"A photo of me"}}),e._v(" "),n("h1",[e._v("# Hi ツ")]),e._v(" "),n("nuxt-content",{attrs:{document:e.post}})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{VImg:n(425).default})}}]);