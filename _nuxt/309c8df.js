(window.webpackJsonp=window.webpackJsonp||[]).push([[26,12,13],{437:function(t,n,e){"use strict";e.r(n);var l=e(40),component=Object(l.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("aside",[e("button",{directives:[{name:"show",rawName:"v-show",value:"en"===t.$i18n.locale,expression:"$i18n.locale === 'en'"}],staticClass:"language-button nuxt-link-active pointer-events-none",attrs:{disabled:""}},[t._v("EN")]),t._v(" "),e("button",{directives:[{name:"show",rawName:"v-show",value:"fi"===t.$i18n.locale,expression:"$i18n.locale === 'fi'"}],staticClass:"language-button",on:{click:function(n){return n.preventDefault(),n.stopPropagation(),t.$i18n.setLocale("en")}}},[t._v("EN")]),t._v(" "),e("span",{staticClass:"pipe"},[t._v(" | ")]),t._v(" "),e("button",{directives:[{name:"show",rawName:"v-show",value:"en"===t.$i18n.locale,expression:"$i18n.locale === 'en'"}],staticClass:"language-button",on:{click:function(n){return n.preventDefault(),n.stopPropagation(),t.$i18n.setLocale("fi")}}},[t._v("FI")]),t._v(" "),e("button",{directives:[{name:"show",rawName:"v-show",value:"fi"===t.$i18n.locale,expression:"$i18n.locale === 'fi'"}],staticClass:"language-button nuxt-link-active pointer-events-none",attrs:{disabled:""}},[t._v("FI")])])}),[],!1,null,null,null);n.default=component.exports},456:function(t,n,e){"use strict";e.r(n);var l=e(40),component=Object(l.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("img",{staticClass:"float-right ml-3 mb-0 w-1/2 cursor-default",attrs:{src:"photo.png",alt:t.$t("index.img_alt")}}),t._v(" "),e("p",[t._v(t._s(t.$t("index.line1")))]),t._v(" "),e("p",[t._v("\n    "+t._s(t.$t("index.line2"))+"\n    "),e("nuxt-link",{attrs:{to:"/portfolio"}},[t._v(t._s(t.$t("index.links.portfolio.text")))]),t._v("\n    "+t._s(t.$t("index.line3"))+"\n    "),e("nuxt-link",{attrs:{to:"/portfolio#"+t.$t("index.links.work_experience.id")}},[t._v(t._s(t.$t("index.links.work_experience.text")))]),t._v(",\n    "),e("nuxt-link",{attrs:{to:"/portfolio#"+t.$t("index.links.personal_projects.id")}},[t._v(t._s(t.$t("index.links.personal_projects.text")))]),t._v(",\n    "),e("nuxt-link",{attrs:{to:"/portfolio#"+t.$t("index.links.education.id")}},[t._v(t._s(t.$t("index.links.education.text")))]),t._v(",\n    "+t._s(t.$t("index.line4"))+"\n    "),e("a",{attrs:{href:"https://www.linkedin.com/in/santtu-nykanen/"}},[t._v("LinkedIn")]),t._v("\n    "+t._s(t.$t("index.line5"))+"\n    "),e("a",{attrs:{href:"https://github.com/cyanidesayonara"}},[t._v("GitHub")]),t._v(".\n  ")],1),t._v(" "),e("p",[t._v("\n    "+t._s(t.$t("index.line6"))+"\n    "),e("nuxt-link",{attrs:{to:"/blog/"}},[t._v(t._s(t.$t("index.line7")))]),t._v(",\n    "+t._s(t.$t("index.line8"))+"\n    "),e("nuxt-link",{attrs:{to:"/blog/1"}},[t._v(t._s(t.$t("index.line9")))]),t._v("\n    "+t._s(t.$t("index.line10"))+"\n  ")],1),t._v(" "),e("p",[t._v(t._s(t.$t("index.salutation")))])])}),[],!1,null,null,null);n.default=component.exports},492:function(t,n,e){"use strict";e.r(n);var l={head:function(){return{title:"Portfolio | Blog",htmlAttrs:{lang:this.$i18n.locale},meta:[{hid:"Portfolio | Blog",name:"Portfolio | Blog",content:"Portfolio | Blog"}]}}},o=e(40),component=Object(o.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("article",{attrs:{id:"index"}},[e("LanguageInput"),t._v(" "),e("h1",[t._v(t._s(t.$t("index.greeting")))]),t._v(" "),e("LandingPage"),t._v(" "),e("hr")],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{LanguageInput:e(437).default,LandingPage:e(456).default})}}]);