(window.webpackJsonp=window.webpackJsonp||[]).push([[13,3,4,8],{283:function(t,e,n){var content=n(291);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(86).default)("b69a1ae0",content,!0,{sourceMap:!1})},290:function(t,e,n){"use strict";n(283)},291:function(t,e,n){var o=n(85)((function(i){return i[1]}));o.push([t.i,"/*purgecss start ignore*/\n.modal-overlay[data-v-0ffccc8b]{\n  position:fixed;\n  top:0;\n  bottom:0;\n  left:0;\n  right:0;\n  display:flex;\n  justify-content:center;\n  background-color:rgba(0,0,0,.8549019607843137)\n}\n.modal[data-v-0ffccc8b]{\n  text-align:center;\n  margin:20% auto;\n  padding:20px;\n  border-radius:.2rem\n}\n.close[data-v-0ffccc8b]{\n  padding:10px 20px;\n  top:0;\n  right:0;\n  font-size:26px;\n  cursor:pointer\n}\n#img-modal-text[data-v-0ffccc8b],.close[data-v-0ffccc8b]{\n  color:#fff;\n  position:absolute\n}\n#img-modal-text[data-v-0ffccc8b]{\n  width:100%;\n  text-align:center;\n  margin-top:17%;\n  font-size:calc(12px + 1vw)\n}\n\n/*purgecss end ignore*/",""]),o.locals={},t.exports=o},428:function(t,e,n){"use strict";n.r(e);var o={props:["toc"]},r=n(38),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tableofcontents"},[n("h3",[t._v("Table of Contents")]),t._v(" "),n("div",{attrs:{id:"toc"}},[n("ul",t._l(t.toc,(function(link){return n("li",{key:link.id,class:{toc2:2===link.depth,toc3:3===link.depth}},[n("NuxtLink",{attrs:{to:"#"+link.id}},[t._v(t._s(link.text))])],1)})),0)]),t._v(" "),n("hr")])}),[],!1,null,null,null);e.default=component.exports},429:function(t,e,n){"use strict";n.r(e);var o={props:{author:{type:Object,required:!0}}},r=n(38),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"author"}},[n("img",{staticClass:"float-right",attrs:{src:t.author.image,alt:"A picture of me"}}),t._v(" "),n("strong",[t._v("Author")]),t._v(" "),n("p",[t._v(t._s(t.author.name))]),t._v(" "),n("strong",[t._v("Bio")]),t._v(" "),n("p",[t._v(t._s(t.author.bio))]),t._v(" "),n("hr")])}),[],!1,null,null,null);e.default=component.exports},430:function(t,e,n){"use strict";n.r(e);var o={},r=(n(290),n(38)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal-overlay",on:{click:function(e){return t.$emit("close-modal")}}},[n("button",{staticClass:"close",on:{click:function(e){return t.$emit("close-modal")}}},[t._v("\n    X\n  ")]),t._v(" "),n("div",{staticClass:"modal",attrs:{id:"img-modal"}}),t._v(" "),n("p",{attrs:{id:"img-modal-text"}})])}),[],!1,null,"0ffccc8b",null);e.default=component.exports},468:function(t,e,n){"use strict";n.r(e);var o=n(9),r=n(4),c=(n(44),n(32),n(450));function l(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e={replace:{"ä":"a","ö":"o"}};t.forEach((function(t){t.props&&t.props.id&&(t.props.id=Object(c.slugify)(t.props.id,e)),t.id&&(t.id=Object(c.slugify)(t.id,e)),t.children&&l(t.children)}))}var d={asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,c,d,f,m,v,h,_;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,c=t.params,d=t.error,"en",f=null!==(n=c.slug)&&void 0!==n?n:"en",m="/portfolio/".concat(f),e.next=6,r("portfolio",{deep:!0}).where({dir:m}).fetch();case 6:return v=e.sent,h=Object(o.a)(v,1),(_=h[0])||d({statusCode:404,message:"Page could not be found"}),l(_.body.children),l(_.toc),e.abrupt("return",{post:_});case 13:case"end":return e.stop()}}),e)})))()},data:function(){return{showModal:!1}},head:function(){return{title:"Portfolio",htmlAttrs:{lang:"en"},meta:[{hid:"Portfolio",name:"Portfolio",content:"Portfolio"}]}},mounted:function(){var t=this;document.querySelectorAll(".nuxt-content img").forEach((function(e){e.addEventListener("click",(function(e){t.showModal=!0;var element=e.target.cloneNode(!0);element.className="",element.style.float=null,element.style.margin="unset",element.style.width="100%";var n=document.getElementById("img-modal");n.innerHTML="",n.appendChild(element),document.getElementById("img-modal-text").innerHTML=element.alt}))}))},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}},f=n(38),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{attrs:{id:"portfolio"}},[n("author",{attrs:{author:t.post.author}}),t._v(" "),n("h1",[t._v(t._s(t.post.title))]),t._v(" "),n("p",[t._v("Published: "+t._s(t.formatDate(t.post.date)))]),t._v(" "),n("p",[t._v("Last updated: "+t._s(t.formatDate(t.post.updatedAt)))]),t._v(" "),n("hr"),t._v(" "),n("table-of-contents",{attrs:{toc:t.post.toc}}),t._v(" "),n("nuxt-content",{attrs:{document:t.post}}),t._v(" "),n("img-modal",{directives:[{name:"show",rawName:"v-show",value:t.showModal,expression:"showModal"}],on:{"close-modal":function(e){t.showModal=!1}}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Author:n(429).default,TableOfContents:n(428).default,ImgModal:n(430).default})}}]);