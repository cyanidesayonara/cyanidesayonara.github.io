(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{304:function(e,t,n){"use strict";n.r(t);var l={props:{src:{type:String,required:!0},alt:{type:String,required:!0}},methods:{openModal:function(){var element=this.$el.cloneNode(!0);element.className="w-full";var e=document.getElementById("img-modal");e.innerHTML="",e.appendChild(element),document.getElementById("img-modal-text").innerHTML=element.alt,document.body.className="overflow-hidden",document.getElementById("modal-overlay").style.display=""}}},o=n(32),component=Object(o.a)(l,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("img",{attrs:{src:e.src,alt:e.alt},on:{click:e.openModal}})}),[],!1,null,null,null);t.default=component.exports}}]);