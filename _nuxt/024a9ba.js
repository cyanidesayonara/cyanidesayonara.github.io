(window.webpackJsonp=window.webpackJsonp||[]).push([[32,21],{466:function(e,t,n){"use strict";n.r(t);n(25),n(159);var o={data:function(){return{search:""}},methods:{execSearch:function(){return""===this.search?"/blog/":"/search/?q="+this.search.toLowerCase()}}},r=n(33),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("div",[t("form",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],attrs:{type:"search",placeholder:"Search posts","aria-label":"Search Input"},domProps:{value:e.search},on:{input:function(t){t.target.composing||(e.search=t.target.value)}}}),e._v(" "),t("nuxt-link",{attrs:{to:e.execSearch()}},[t("button",{staticClass:"search-button",attrs:{"aria-label":"Search"}},[e._v("\n        Search\n      ")])])],1)])}),[],!1,null,null,null);t.default=component.exports},481:function(e,t,n){var map={"./blog/1/index.md":482,"./blog/2/index.md":483};function o(e){var t=r(e);return n(t)}function r(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}o.keys=function(){return Object.keys(map)},o.resolve=r,e.exports=o,o.id=481},482:function(e,t){e.exports={attributes:{title:"Introduction to the blog",description:"This post will serve as a brief introduction to the content and purpose of this blog",date:"2021-07-25T00:00:00.000Z",author:{name:"Santtu Nykänen",bio:"I'm a thirty-something full-stack developer from Helsinki.",image:"photo.png"}},html:'<h2>What to expect from this blog</h2>\n<p>This blog will contain tutorials and walkthroughs of my personal projects as\nwell as discussion on other technical topics. I\'m starting with the obvious\none, this blog!</p>\n<p>In the next few blog posts we will drill into the nitty-gritty of creating a\nJAMstack blog with the Vue-based framework Nuxt.js and its @nuxt/content\nmodule, which will allow us to easily turn Markdown files into blog posts.</p>\n<p>If that means nothing to you, don\'t worry: We will start with an overview of\nthe terms mentioned in the previous paragraph as well as an explanation of\nthe general purpose of the blog itself.</p>\n<p><v-img src="index.png" alt="Screenshot of the landing page"></v-img></p>\n<p>Here\'s a screenshot of what the landing page looks like now. It has\nnavigation links to portfolio/blog, a language selector and a cute photo of me.</p>\n<p>Aside from the top bar, all of the content on screen is rendered from Markdown.</p>\n<p>At this point the blog is functional, but very bare bones. Hence the\nfollowing posts will also include tutorials on how to add new features.</p>\n<hr>\n<h2>New features to add</h2>\n<p>Here\'s a short list of missing features that I can come up with off the top\nof my head:</p>\n<h3>A button that allows the user to print my resume as a PDF file</h3>\n<p><v-img src="portfolio.png" alt="Screenshot of the portfolio page"></v-img></p>\n<p>This is what the portfolio page looks like now.</p>\n<p>As the porpose of this blog (for now at least) is mainly to be a landing\npage for recruiters, I wanted to create an easy way to print a\ndecent-looking and up-to-date PDF of my resume.</p>\n<p>The layout is still a bit rough to say the least, but it already has a lot\nof functionality. The author section as well as the table of contents are<br>\nalso generated from the same Markdown file. Stashed in a corner somewhere<br>\nI would like to see a button that says &quot;Print PDF&quot;.</p>\n<h3>Improving the search page</h3>\n<p><v-img src="search.png" alt="Screenshot of the search page" /></v-img></p>\n<p>This is what the search page looks like now.</p>\n<p>It shows latest blog posts listed in order of publishing date.</p>\n<p>On the bottom there is a functional search box, but it still needs to be\nimproved and bugsprayed.</p>\n<p>The button that says &quot;Add new post&quot; is not yet implemented, but is\nsupposed to create a new Markdown file with entered title and other\nmetadata, making it less of a hassle. The button only show up in\ndevelopment mode.</p>\n<p>The &quot;See more posts&quot; button is also waiting to be implemented, perhaps\nwith a spinner and a popup if no posts were found.</p>\n<h3>A list of related blog posts &amp; better navigation between blog</h3>\n<p><v-img src="blog.png" alt="Screenshot of the blog page"></v-img></p>\n<p>Here\'s a screenshot of what the blog page looks like now.</p>\n<p>This might be a more advanced feature, but there could be a list of posts\nwith related keywords on the bottom of each post.</p>\n<p>More navigational links should be also added, such as buttons for\nnext/previous post.</p>\n<p>It has almost exactly the same layout as the portfolio page, aside from\nthe author page being moved to the bottom.</p>\n<h3>Comments</h3>\n<p>As the blog uses no backend or database, reader comments will have to be\nadded through an exteral service. I have no idea how yet, but this will\ndefinitely be explored in a later post.</p>\n<p>Of course, not all of these features are necessary or even feasible, but it\nshould still be interesting to try to implement them. You often learn more\nfrom failure than success after all!</p>\n<hr>\n<h2>What not to expect from this blog</h2>\n<p>This will NOT be a personal blog. I\'ll do my best to spare you the sordid\ndetails of my life, however, I might throw in a funny anecdote where\nappropriate. Let\'s keep it casual.</p>\n<p>So, please tag along whether you\'re someone who already knows how to code or\nsomeone eager to learn. My hope is to grow this blog from a mere recruiting\ntool to a fully realized platform for documenting my work. This is a start.</p>\n<p>Yours truly,</p>\n<p>-Santtu</p>\n'}},483:function(e,t){e.exports={attributes:{title:"How to create a JAMstack blog with Nuxt.js and @nuxt/content, part 1",description:"This post will provide you with a glossary of the technical terms you need to know as well as the reasoning behind choosing those technologies",date:"2021-08-14T00:00:00.000Z",author:{name:"Santtu Nykänen",bio:"I'm a thirty-something full-stack developer from Helsinki.",image:"photo.png"}},html:"<h2>Glossary of terms</h2>\n<p>The title of this post has some technical terms you may or may not be\nfamiliar with. Let's go through them one by one</p>\n<h3>JAMstack</h3>\n<p>Wikipedia says:</p>\n<p><em><strong>&quot;Jamstack, previously stylized as JAMStack, stands for Javascript, API\nand Markup (generated by a static site generator) and was first coined by\nMathias Biilmann, CEO of Netlify in 2015. In Jamstack websites, the\napplication logic typically resides on the client side (for example\nembedded e-commerce checkout that interacts with pre-rendered static\ncontent), without being tightly coupled to the back end server. They are\nmostly served with git based CMS or headless CMS. Netlify organizes a\nconference every year called &quot;Popular Jamstack&quot; that is co-hosted amongst\nothers by Vercel and Cloudflare Pages.</strong></em></p>\n<p><em><strong>The Jamstack is not a framework but is rather defined by Jamstack.org\nas an architecture pattern.&quot;</strong></em></p>\n<h3>Nuxt.js</h3>\n<p>Again, a Wikipedia description:</p>\n<p><em><strong>&quot;Nuxt.js is a free and open source web application framework based on\nVue.js, Node.js, Webpack and Babel.js. Nuxt is inspired by Next.js, which\nis a framework of similar purpose, based on React.js.</strong></em></p>\n<p><em><strong>The framework is advertised as a &quot;meta-framework for universal\napplications&quot;. The term universal is used here with the meaning that the\ngoal of the framework is to enable users to create web views in JavaScript\nutilizing the Vue.js single file component system and that can function\nboth as in-browser single page application (SPA) views as well as\nserver-rendered web views which are then (after server rendering)\n&quot;rehydrated&quot; to full SPA functionality. Additionally, the framework\nenables users to have the content, or parts of it, fully pre-rendered on\nthe server and served in the manner of static site generators.</strong></em></p>\n<p><em><strong>The benefits of this approach are, among others, reduced time to\ninteractivity and improved SEO compared to SPAs, due to the fact that full\ncontents of each page are being served by the web server before any\nclient-side JavaScript is executed. Put alternatively, one can maintain\nboth the benefits of traditional server-side rendered HTML pages, and\nimproved interactivity and advanced user interface of SPAs. The core\nbenefit of the Nuxt.js framework itself is that it makes the configuration\nand setup of such applications simplified and seamless to the application\ndeveloper, who can simply develop UI portions of the application as if it\nwere a more common Vue.js single file application. NuxtJS version 3.0\nhasn't been announced by the developers.&quot;</strong></em></p>\n<h3>@nuxt/content</h3>\n<p>@nuxt/content is a Nuxt.js module. nuxtjs.org describes it thusly:</p>\n<p><em><strong>&quot;Empower your NuxtJS application with @nuxt/content module: write in a\ncontent/ directory and fetch your Markdown, JSON, YAML, XML and CSV files\nthrough a MongoDB like API, acting as a Git-based Headless CMS.&quot;</strong></em></p>\n<p>To be continued...</p>\n"}},484:function(e,t,n){var map={"./af":331,"./af.js":331,"./ar":332,"./ar-dz":333,"./ar-dz.js":333,"./ar-kw":334,"./ar-kw.js":334,"./ar-ly":335,"./ar-ly.js":335,"./ar-ma":336,"./ar-ma.js":336,"./ar-sa":337,"./ar-sa.js":337,"./ar-tn":338,"./ar-tn.js":338,"./ar.js":332,"./az":339,"./az.js":339,"./be":340,"./be.js":340,"./bg":341,"./bg.js":341,"./bm":342,"./bm.js":342,"./bn":343,"./bn-bd":344,"./bn-bd.js":344,"./bn.js":343,"./bo":345,"./bo.js":345,"./br":346,"./br.js":346,"./bs":347,"./bs.js":347,"./ca":348,"./ca.js":348,"./cs":349,"./cs.js":349,"./cv":350,"./cv.js":350,"./cy":351,"./cy.js":351,"./da":352,"./da.js":352,"./de":353,"./de-at":354,"./de-at.js":354,"./de-ch":355,"./de-ch.js":355,"./de.js":353,"./dv":356,"./dv.js":356,"./el":357,"./el.js":357,"./en-au":358,"./en-au.js":358,"./en-ca":359,"./en-ca.js":359,"./en-gb":360,"./en-gb.js":360,"./en-ie":361,"./en-ie.js":361,"./en-il":362,"./en-il.js":362,"./en-in":363,"./en-in.js":363,"./en-nz":364,"./en-nz.js":364,"./en-sg":365,"./en-sg.js":365,"./eo":366,"./eo.js":366,"./es":367,"./es-do":368,"./es-do.js":368,"./es-mx":369,"./es-mx.js":369,"./es-us":370,"./es-us.js":370,"./es.js":367,"./et":371,"./et.js":371,"./eu":372,"./eu.js":372,"./fa":373,"./fa.js":373,"./fi":374,"./fi.js":374,"./fil":375,"./fil.js":375,"./fo":376,"./fo.js":376,"./fr":377,"./fr-ca":378,"./fr-ca.js":378,"./fr-ch":379,"./fr-ch.js":379,"./fr.js":377,"./fy":380,"./fy.js":380,"./ga":381,"./ga.js":381,"./gd":382,"./gd.js":382,"./gl":383,"./gl.js":383,"./gom-deva":384,"./gom-deva.js":384,"./gom-latn":385,"./gom-latn.js":385,"./gu":386,"./gu.js":386,"./he":387,"./he.js":387,"./hi":388,"./hi.js":388,"./hr":389,"./hr.js":389,"./hu":390,"./hu.js":390,"./hy-am":391,"./hy-am.js":391,"./id":392,"./id.js":392,"./is":393,"./is.js":393,"./it":394,"./it-ch":395,"./it-ch.js":395,"./it.js":394,"./ja":396,"./ja.js":396,"./jv":397,"./jv.js":397,"./ka":398,"./ka.js":398,"./kk":399,"./kk.js":399,"./km":400,"./km.js":400,"./kn":401,"./kn.js":401,"./ko":402,"./ko.js":402,"./ku":403,"./ku.js":403,"./ky":404,"./ky.js":404,"./lb":405,"./lb.js":405,"./lo":406,"./lo.js":406,"./lt":407,"./lt.js":407,"./lv":408,"./lv.js":408,"./me":409,"./me.js":409,"./mi":410,"./mi.js":410,"./mk":411,"./mk.js":411,"./ml":412,"./ml.js":412,"./mn":413,"./mn.js":413,"./mr":414,"./mr.js":414,"./ms":415,"./ms-my":416,"./ms-my.js":416,"./ms.js":415,"./mt":417,"./mt.js":417,"./my":418,"./my.js":418,"./nb":419,"./nb.js":419,"./ne":420,"./ne.js":420,"./nl":421,"./nl-be":422,"./nl-be.js":422,"./nl.js":421,"./nn":423,"./nn.js":423,"./oc-lnc":424,"./oc-lnc.js":424,"./pa-in":425,"./pa-in.js":425,"./pl":426,"./pl.js":426,"./pt":427,"./pt-br":428,"./pt-br.js":428,"./pt.js":427,"./ro":429,"./ro.js":429,"./ru":430,"./ru.js":430,"./sd":431,"./sd.js":431,"./se":432,"./se.js":432,"./si":433,"./si.js":433,"./sk":434,"./sk.js":434,"./sl":435,"./sl.js":435,"./sq":436,"./sq.js":436,"./sr":437,"./sr-cyrl":438,"./sr-cyrl.js":438,"./sr.js":437,"./ss":439,"./ss.js":439,"./sv":440,"./sv.js":440,"./sw":441,"./sw.js":441,"./ta":442,"./ta.js":442,"./te":443,"./te.js":443,"./tet":444,"./tet.js":444,"./tg":445,"./tg.js":445,"./th":446,"./th.js":446,"./tk":447,"./tk.js":447,"./tl-ph":448,"./tl-ph.js":448,"./tlh":449,"./tlh.js":449,"./tr":450,"./tr.js":450,"./tzl":451,"./tzl.js":451,"./tzm":452,"./tzm-latn":453,"./tzm-latn.js":453,"./tzm.js":452,"./ug-cn":454,"./ug-cn.js":454,"./uk":455,"./uk.js":455,"./ur":456,"./ur.js":456,"./uz":457,"./uz-latn":458,"./uz-latn.js":458,"./uz.js":457,"./vi":459,"./vi.js":459,"./x-pseudo":460,"./x-pseudo.js":460,"./yo":461,"./yo.js":461,"./zh-cn":462,"./zh-cn.js":462,"./zh-hk":463,"./zh-hk.js":463,"./zh-mo":464,"./zh-mo.js":464,"./zh-tw":465,"./zh-tw.js":465};function o(e){var t=r(e);return n(t)}function r(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}o.keys=function(){return Object.keys(map)},o.resolve=r,e.exports=o,o.id=484},525:function(e,t,n){"use strict";n.r(t);n(25),n(67),n(28),n(42),n(159);var o=n(6),r=(n(48),n(12),n(83),n(36),n(329)),l=n.n(r),h={key:function(e){return e.fullPath},asyncData:function(e){return Object(o.a)(regeneratorRuntime.mark((function t(){var n,o,r,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.$content,o=e.route,!(r=o.query.q.toString())){t.next=8;break}return t.next=5,n("blog",{deep:!0}).only(["title","createdAt","description","image","path","date"]).sortBy("date","desc").search("title",r).limit(5).fetch();case 5:t.t0=t.sent,t.next=11;break;case 8:return t.next=10,n("blog",{deep:!0}).only(["title","createdAt","description","image","path","date"]).sortBy("date","desc").limit(5).fetch();case 10:t.t0=t.sent;case 11:return l=t.t0,t.abrupt("return",{posts:l,query:r});case 13:case"end":return t.stop()}}),t)})))()},data:function(){return{page:1,search:"",title:this.$route.query.q?"Search results for: "+this.$route.query.q:"Latest posts"}},head:function(){return{title:this.title,htmlAttrs:{lang:"en"}}},watchQuery:["q"],methods:{getMorePosts:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(n=e.$route.query.q.toString())){t.next=7;break}return t.next=4,e.$content("blog",{deep:!0}).only(["title","createdAt","description","image","path"]).sortBy("createdAt","desc").search("title",n).skip(5*e.page).limit(5).fetch();case 4:t.t0=t.sent,t.next=10;break;case 7:return t.next=9,e.$content("blog",{deep:!0}).only(["title","createdAt","description","image","path"]).sortBy("createdAt","desc").skip(5*e.page).limit(5).fetch();case 9:t.t0=t.sent;case 10:t.t0.forEach((function(t){e.posts.push(t)})),e.page++;case 13:case"end":return t.stop()}}),t)})))()},formatDate:function(e){return l()(e).format("MMMM Do YYYY")}}},c=n(33),component=Object(c.a)(h,(function(){var e=this,t=e._self._c;return t("section",{attrs:{id:"blogs"}},[t("div",[e.query?e._e():t("h1",[e._v("Latest posts")]),e._v(" "),e.query?t("h1",[e._v("Search results for: "+e._s(e.query))]):e._e()]),e._v(" "),e._l(e.posts,(function(o){return t("article",{key:o.title},[t("nuxt-link",{attrs:{to:"/blog/"+o.path.split("/")[1]}},[o.image?t("img",{attrs:{src:n(481)("./"+o.path.split("/")[1]+"/images/"+o.image),alt:o.title}}):e._e(),e._v(" "),t("h3",[e._v("\n        "+e._s(o.title)+"\n      ")])]),e._v(" "),t("p",[e._v("Published: "+e._s(e.formatDate(o.date)))]),e._v(" "),t("p",[e._v(e._s(o.description))]),e._v(" "),t("hr")],1)})),e._v(" "),t("div",[t("button",{staticClass:"see-more",on:{click:e.getMorePosts}},[e._v("\n      See more posts\n    ")])]),e._v(" "),t("search",{staticClass:"search",attrs:{search:e.search}})],2)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Search:n(466).default})}}]);