(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{380:function(t,e,n){"use strict";n.r(e);n(16),n(36);var r=n(0).a.extend({props:{title:{type:String,required:!0},description:{type:String,required:!1,default:[]}},computed:{getDescriptions:function(){return"string"==typeof this.description?[this.description]:this.description}}}),c=n(8),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"text-black/50 dark:text-white/30"},[e("header",{staticClass:"space-y-2 my-12"},[e("h1",{staticClass:"text-black/90 dark:text-white/90 text-4xl font-semibold"},[t._v("\n      "+t._s(t.title)+"\n    ")]),t._v(" "),t._l(t.getDescriptions,(function(n,r){return e("p",{key:"description-".concat(r)},[t._v("\n      "+t._s(n)+"\n    ")])}))],2),t._v(" "),t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports}}]);