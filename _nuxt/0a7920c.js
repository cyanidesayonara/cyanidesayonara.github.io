(window.webpackJsonp=window.webpackJsonp||[]).push([[14,7],{284:function(e,t){throw new Error("Module parse failed: Assigning to rvalue (1:2)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> ---\n| title: Introduction to the blog\n| description: This post will serve as a brief introduction to the content and purpose of this blog")},285:function(e,t){throw new Error("Module parse failed: Assigning to rvalue (1:2)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> ---\n| title: How to create a JAMstack blog with Nuxt.js and @nuxt/content, part 1\n| description: This post will provide you with a glossary of the technical terms you need to know as well as the reasoning behind choosing those technologies")},286:function(e,t){throw new Error('Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> <aside>\n|   <nuxt-link class="nuxt-link-active" to="/en">EN</nuxt-link>\n|   <span class="pipe"> | </span>')},287:function(e,t){throw new Error('Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> <aside>\n|   <nuxt-link to="/en">EN</nuxt-link>\n|   <span class="pipe"> | </span>')},288:function(e,t){throw new Error("Module parse failed: Assigning to rvalue (1:2)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> ---\n| title: Portfolio\n| date: 2021-10-04")},289:function(e,t){throw new Error("Module parse failed: Assigning to rvalue (1:2)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> ---\n| title: Portfolio\n| date: 2021-10-04")},427:function(e,t,n){"use strict";n.r(t);n(33),n(148);var r={data:function(){return{search:""}},methods:{execSearch:function(){return""===this.search?"/blog/":"/search/?q="+this.search.toLowerCase()}}},o=n(38),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("form",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],attrs:{type:"search",placeholder:"Search posts","aria-label":"Search Input"},domProps:{value:e.search},on:{input:function(t){t.target.composing||(e.search=t.target.value)}}}),e._v(" "),n("nuxt-link",{attrs:{to:e.execSearch()}},[n("button",{staticClass:"search-button",attrs:{"aria-label":"Search"}},[e._v("\n        Search\n      ")])])],1)])}),[],!1,null,null,null);t.default=component.exports},431:function(e,t,n){var map={"./blog/1/index.md":284,"./blog/2/index.md":285,"./index/en/index.md":286,"./index/fi/index.md":287,"./portfolio/en/index.md":288,"./portfolio/fi/index.md":289};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}r.keys=function(){return Object.keys(map)},r.resolve=o,e.exports=r,r.id=431},432:function(e,t,n){var map={"./af":292,"./af.js":292,"./ar":293,"./ar-dz":294,"./ar-dz.js":294,"./ar-kw":295,"./ar-kw.js":295,"./ar-ly":296,"./ar-ly.js":296,"./ar-ma":297,"./ar-ma.js":297,"./ar-sa":298,"./ar-sa.js":298,"./ar-tn":299,"./ar-tn.js":299,"./ar.js":293,"./az":300,"./az.js":300,"./be":301,"./be.js":301,"./bg":302,"./bg.js":302,"./bm":303,"./bm.js":303,"./bn":304,"./bn-bd":305,"./bn-bd.js":305,"./bn.js":304,"./bo":306,"./bo.js":306,"./br":307,"./br.js":307,"./bs":308,"./bs.js":308,"./ca":309,"./ca.js":309,"./cs":310,"./cs.js":310,"./cv":311,"./cv.js":311,"./cy":312,"./cy.js":312,"./da":313,"./da.js":313,"./de":314,"./de-at":315,"./de-at.js":315,"./de-ch":316,"./de-ch.js":316,"./de.js":314,"./dv":317,"./dv.js":317,"./el":318,"./el.js":318,"./en-au":319,"./en-au.js":319,"./en-ca":320,"./en-ca.js":320,"./en-gb":321,"./en-gb.js":321,"./en-ie":322,"./en-ie.js":322,"./en-il":323,"./en-il.js":323,"./en-in":324,"./en-in.js":324,"./en-nz":325,"./en-nz.js":325,"./en-sg":326,"./en-sg.js":326,"./eo":327,"./eo.js":327,"./es":328,"./es-do":329,"./es-do.js":329,"./es-mx":330,"./es-mx.js":330,"./es-us":331,"./es-us.js":331,"./es.js":328,"./et":332,"./et.js":332,"./eu":333,"./eu.js":333,"./fa":334,"./fa.js":334,"./fi":335,"./fi.js":335,"./fil":336,"./fil.js":336,"./fo":337,"./fo.js":337,"./fr":338,"./fr-ca":339,"./fr-ca.js":339,"./fr-ch":340,"./fr-ch.js":340,"./fr.js":338,"./fy":341,"./fy.js":341,"./ga":342,"./ga.js":342,"./gd":343,"./gd.js":343,"./gl":344,"./gl.js":344,"./gom-deva":345,"./gom-deva.js":345,"./gom-latn":346,"./gom-latn.js":346,"./gu":347,"./gu.js":347,"./he":348,"./he.js":348,"./hi":349,"./hi.js":349,"./hr":350,"./hr.js":350,"./hu":351,"./hu.js":351,"./hy-am":352,"./hy-am.js":352,"./id":353,"./id.js":353,"./is":354,"./is.js":354,"./it":355,"./it-ch":356,"./it-ch.js":356,"./it.js":355,"./ja":357,"./ja.js":357,"./jv":358,"./jv.js":358,"./ka":359,"./ka.js":359,"./kk":360,"./kk.js":360,"./km":361,"./km.js":361,"./kn":362,"./kn.js":362,"./ko":363,"./ko.js":363,"./ku":364,"./ku.js":364,"./ky":365,"./ky.js":365,"./lb":366,"./lb.js":366,"./lo":367,"./lo.js":367,"./lt":368,"./lt.js":368,"./lv":369,"./lv.js":369,"./me":370,"./me.js":370,"./mi":371,"./mi.js":371,"./mk":372,"./mk.js":372,"./ml":373,"./ml.js":373,"./mn":374,"./mn.js":374,"./mr":375,"./mr.js":375,"./ms":376,"./ms-my":377,"./ms-my.js":377,"./ms.js":376,"./mt":378,"./mt.js":378,"./my":379,"./my.js":379,"./nb":380,"./nb.js":380,"./ne":381,"./ne.js":381,"./nl":382,"./nl-be":383,"./nl-be.js":383,"./nl.js":382,"./nn":384,"./nn.js":384,"./oc-lnc":385,"./oc-lnc.js":385,"./pa-in":386,"./pa-in.js":386,"./pl":387,"./pl.js":387,"./pt":388,"./pt-br":389,"./pt-br.js":389,"./pt.js":388,"./ro":390,"./ro.js":390,"./ru":391,"./ru.js":391,"./sd":392,"./sd.js":392,"./se":393,"./se.js":393,"./si":394,"./si.js":394,"./sk":395,"./sk.js":395,"./sl":396,"./sl.js":396,"./sq":397,"./sq.js":397,"./sr":398,"./sr-cyrl":399,"./sr-cyrl.js":399,"./sr.js":398,"./ss":400,"./ss.js":400,"./sv":401,"./sv.js":401,"./sw":402,"./sw.js":402,"./ta":403,"./ta.js":403,"./te":404,"./te.js":404,"./tet":405,"./tet.js":405,"./tg":406,"./tg.js":406,"./th":407,"./th.js":407,"./tk":408,"./tk.js":408,"./tl-ph":409,"./tl-ph.js":409,"./tlh":410,"./tlh.js":410,"./tr":411,"./tr.js":411,"./tzl":412,"./tzl.js":412,"./tzm":413,"./tzm-latn":414,"./tzm-latn.js":414,"./tzm.js":413,"./ug-cn":415,"./ug-cn.js":415,"./uk":416,"./uk.js":416,"./ur":417,"./ur.js":417,"./uz":418,"./uz-latn":419,"./uz-latn.js":419,"./uz.js":418,"./vi":420,"./vi.js":420,"./x-pseudo":421,"./x-pseudo.js":421,"./yo":422,"./yo.js":422,"./zh-cn":423,"./zh-cn.js":423,"./zh-hk":424,"./zh-hk.js":424,"./zh-mo":425,"./zh-mo.js":425,"./zh-tw":426,"./zh-tw.js":426};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}r.keys=function(){return Object.keys(map)},r.resolve=o,e.exports=r,r.id=432},467:function(e,t,n){"use strict";n.r(t);var r=n(4),o=(n(44),n(33),n(148),n(32),n(282)),l=n.n(o),c={key:function(e){return e.fullPath},asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,o,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.$content,r=e.route,!(o=r.query.q)){t.next=8;break}return t.next=5,n("blog",{deep:!0}).only(["title","createdAt","description","image","path","date"]).sortBy("date","desc").search("title",o).limit(5).fetch();case 5:t.t0=t.sent,t.next=11;break;case 8:return t.next=10,n("blog",{deep:!0}).only(["title","createdAt","description","image","path","date"]).sortBy("date","desc").limit(5).fetch();case 10:t.t0=t.sent;case 11:return l=t.t0,t.abrupt("return",{posts:l,query:o});case 13:case"end":return t.stop()}}),t)})))()},data:function(){return{page:1,search:"",title:this.$route.query.q?"Search results for: "+this.$route.query.q:"Latest posts"}},head:function(){return{title:this.title,htmlAttrs:{lang:"en"},meta:[{hid:this.title,name:this.title,content:this.title}]}},watchQuery:["q"],methods:{getMorePosts:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(n=e.$route.query.q)){t.next=7;break}return t.next=4,e.$content("blog",{deep:!0}).only(["title","createdAt","description","image","path"]).sortBy("createdAt","desc").search("title",n).skip(5*e.page).limit(5).fetch();case 4:t.t0=t.sent,t.next=10;break;case 7:return t.next=9,e.$content("blog",{deep:!0}).only(["title","createdAt","description","image","path"]).sortBy("createdAt","desc").skip(5*e.page).limit(5).fetch();case 9:t.t0=t.sent;case 10:t.t0.forEach((function(t){e.posts.push(t)})),e.page++;case 13:case"end":return t.stop()}}),t)})))()},formatDate:function(e){return l()(e).format("MMMM Do YYYY")}}},d=n(38),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{attrs:{id:"blogs"}},[r("div",[e.query?e._e():r("h1",[e._v("Latest posts")]),e._v(" "),e.query?r("h1",[e._v("Search results for: "+e._s(e.query))]):e._e()]),e._v(" "),e._l(e.posts,(function(t){return r("article",{key:t.title},[r("nuxt-link",{attrs:{to:"/blog/"+t.path.split("/")[1]}},[t.image?r("img",{attrs:{src:n(431)("./"+t.path.split("/")[1]+"/images/"+t.image),alt:t.title}}):e._e(),e._v(" "),r("h3",[e._v("\n        "+e._s(t.title)+"\n      ")])]),e._v(" "),r("p",[e._v("Published: "+e._s(e.formatDate(t.date)))]),e._v(" "),r("p",[e._v(e._s(t.description))]),e._v(" "),r("hr")],1)})),e._v(" "),r("div",[r("button",{staticClass:"see-more",on:{click:e.getMorePosts}},[e._v("\n      See more posts\n    ")])]),e._v(" "),r("search",{staticClass:"search",attrs:{search:e.search}})],2)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Search:n(427).default})}}]);