(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{140:function(n,t,e){"use strict";t.a=function(n){var i,s,t,e,a,r,o=n.app;i=window,s=document,t="script",e="ga",i.GoogleAnalyticsObject=e,i.ga=i.ga||function(){(i.ga.q=i.ga.q||[]).push(arguments)},i.ga.l=1*new Date,a=s.createElement(t),r=s.getElementsByTagName(t)[0],a.async=1,a.src="https://www.google-analytics.com/analytics.js",r.parentNode.insertBefore(a,r),ga("create","UA-120584024-2","auto"),o.router.afterEach((function(n,t){ga("set","page",n.fullPath),ga("send","pageview")}))}},141:function(n,t,e){"use strict";var r=e(0),o=e(26),l=e(190),c=e(191),f=e(192);o.a.autoAddCss=!1,o.c.add(c.a),o.c.add(f.a),r.a.component("font-awesome-icon",l.a)},174:function(n,t,e){var content=e(241);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(83).default)("1239d49d",content,!0,{sourceMap:!1})},195:function(n,t,e){"use strict";var r=e(196),o=e(197),l={components:{Header:r.default,Footer:o.default}},c=(e(240),e(37)),component=Object(c.a)(l,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{attrs:{id:"app"}},[e("Header"),n._v(" "),e("main",[e("Nuxt")],1),n._v(" "),e("Footer")],1)}),[],!1,null,null,null);t.a=component.exports;installComponents(component,{Header:function(){return Promise.resolve().then(e.bind(null,196)).then((function(n){return n.default||n}))},Footer:function(){return Promise.resolve().then(e.bind(null,197)).then((function(n){return n.default||n}))}})},196:function(n,t,e){"use strict";e.r(t);var r={data:function(){return{searchInHeader:""}},methods:{search:function(){""===this.searchInHeader?this.$router.push("/search/"):(this.$router.push("/search/?s="+this.searchInHeader.toLowerCase()),this.searchInHeader="")}}},o=e(37),component=Object(o.a)(r,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("header",[e("aside",{attrs:{"aria-label":"Linkit"}},[e("a",{attrs:{href:"https://www.linkedin.com/in/santtu-nykanen/"}},[e("font-awesome-icon",{attrs:{icon:["fab","linkedin"]}})],1),n._v(" "),e("span",{staticClass:"pipe"},[n._v(" | ")]),n._v(" "),e("a",{attrs:{href:"https://github.com/cyanidesayonara"}},[e("font-awesome-icon",{attrs:{icon:["fab","github"]}})],1)]),n._v(" "),e("nav",[e("nuxt-link",{attrs:{to:"/portfolio/"}},[n._v("PORTFOLIO")]),n._v(" "),e("span",{staticClass:"pipe"},[n._v(" | ")]),n._v(" "),e("nuxt-link",{attrs:{to:"/blog"}},[n._v("BLOG")])],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Header:function(){return Promise.resolve().then(e.bind(null,196)).then((function(n){return n.default||n}))}})},197:function(n,t,e){"use strict";e.r(t);var r=e(37),component=Object(r.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("footer",[e("aside",{attrs:{"aria-label":"Linkit"}},[e("a",{attrs:{href:"https://www.linkedin.com/in/santtu-nykanen/"}},[e("font-awesome-icon",{attrs:{icon:["fab","linkedin"]}})],1),n._v(" "),e("span",{staticClass:"pipe"},[n._v(" | ")]),n._v(" "),e("a",{attrs:{href:"https://github.com/cyanidesayonara"}},[e("font-awesome-icon",{attrs:{icon:["fab","github"]}})],1)]),n._v(" "),e("small",[n._v("Updated 2021-08-08")])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Footer:function(){return Promise.resolve().then(e.bind(null,197)).then((function(n){return n.default||n}))}})},199:function(n,t,e){e(200),n.exports=e(201)},240:function(n,t,e){"use strict";e(174)},241:function(n,t,e){var r=e(82)((function(i){return i[1]}));r.push([n.i,'/*purgecss start ignore*/\n#app{\n  -webkit-font-smoothing:antialiased;\n  -moz-osx-font-smoothing:grayscale;\n  max-width:600px;\n  margin:auto;\n  min-height:100vh;\n  display:flex;\n  flex-direction:column;\n  justify-content:space-between;\n  align-items:stretch\n}\na{\n  font-weight:700;\n  color:#2cb3ac\n}\nhtml{\n  box-sizing:border-box\n}\n*,:after,:before{\n  box-sizing:inherit\n}\nbody{\n  font-family:"Titillium Web",sans-serif;\n  margin:0;\n  overflow-y:scroll\n}\nol,ul{\n  list-style:unset;\n  -webkit-padding-start:40px;\n          padding-inline-start:40px\n}\nfooter,header,main{\n  padding:20px\n}\naside,footer,header{\n  font-size:22px\n}\n#author img,#portfolio img,aside{\n  float:right\n}\nimg{\n  border-radius:.2rem;\n  box-shadow:0 0 20px rgba(0,0,0,.5);\n  width:40%;\n  margin:20px\n}\nhr{\n  margin:30px 0;\n  border:0;\n  height:1px;\n  background-image:linear-gradient(90deg,transparent 0,rgba(0,0,0,.1) 10%,rgba(0,0,0,.2) 50%,rgba(0,0,0,.1) 90%,transparent)\n}\na{\n  text-decoration:none\n}\na:hover{\n  text-decoration:underline\n}\n.nuxt-link-active{\n  color:#000\n}\n.pipe{\n  vertical-align:.125em\n}\n#author img{\n  width:20%\n}\nmain{\n  flex:auto\n}\nmain p{\n  margin-bottom:1.25em\n}\nmain h1{\n  font-weight:800;\n  font-size:2em;\n  margin-top:0;\n  margin-bottom:.8888889em;\n  line-height:1.1111111\n}\nmain h2{\n  font-weight:700;\n  font-size:1.5em;\n  margin-top:2em;\n  margin-bottom:1em;\n  line-height:1.3333333\n}\nmain h3{\n  font-weight:600;\n  font-size:1.25em;\n  margin-top:1.6em;\n  margin-bottom:.6em;\n  line-height:1.6\n}\n\n/*purgecss end ignore*/',""]),r.locals={},n.exports=r},56:function(n,t,e){"use strict";var r={layout:"error",props:["error"]},o=e(37),component=Object(o.a)(r,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("section",{attrs:{id:"error"}},[404===n.error.statusCode?e("h1",[n._v("Page not found")]):e("h1",[n._v("An error occurred")])])}),[],!1,null,null,null);t.a=component.exports}},[[199,14,2,15]]]);