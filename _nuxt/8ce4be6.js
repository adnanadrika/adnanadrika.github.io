(window.webpackJsonp=window.webpackJsonp||[]).push([[80,14,64],{380:function(t,e,r){"use strict";r.r(e);r(16),r(36);var n=r(0).a.extend({props:{title:{type:String,required:!0},description:{type:String,required:!1,default:[]}},computed:{getDescriptions:function(){return"string"==typeof this.description?[this.description]:this.description}}}),o=r(8),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"text-black/50 dark:text-white/30"},[e("header",{staticClass:"space-y-2 my-12"},[e("h1",{staticClass:"text-black/90 dark:text-white/90 text-4xl font-semibold"},[t._v("\n      "+t._s(t.title)+"\n    ")]),t._v(" "),t._l(t.getDescriptions,(function(r,n){return e("p",{key:"description-".concat(n)},[t._v("\n      "+t._s(r)+"\n    ")])}))],2),t._v(" "),t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},382:function(t,e,r){"use strict";r.r(e);var n=r(6),o=r(0).a.extend({props:{title:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},icon:{type:String,required:!1,default:null},href:{type:[],required:!1,default:null},tight:{type:Boolean,required:!1,default:!1},elevated:{type:Boolean,required:!1,default:!1},cursor:{type:Boolean,required:!1,default:!0},truncate:{type:Boolean,required:!1,default:!0}},data:function(){return{classes:"rounded-md overflow-x-hidden transition-colors"}}}),l=r(8),component=Object(l.a)(o,(function(){var t,e=this,r=e._self._c;e._self._setupProxy;return r(e.href?"SmartLink":"div",e._b({tag:"component",staticClass:"rounded-lg card-base",class:(t={},Object(n.a)(t,e.classes,!0),Object(n.a)(t,"p-2",!0===e.tight),Object(n.a)(t,"p-4",!1===e.tight),Object(n.a)(t,"cursor-pointer",!0===e.cursor),Object(n.a)(t,"items-center flex space-x-4",e.$slots.icon||e.$slots["icon-left"]),Object(n.a)(t,"justify-between",e.$slots.icon&&!e.$slots["icon-left"]),t),staticStyle:{"min-height":"128px","max-height":"600px"},attrs:{href:e.href}},"component",!!e.href&&e.$attrs,!1),[e.$slots["icon-left"]?r("div",{staticClass:"flex-shrink-0"},[e._t("icon-left")],2):e._e(),e._v(" "),r("div",{staticClass:"overflow-x-hidden leading-relaxed space-y-2"},[e.title?r("h2",{staticClass:"font-medium text-black dark:text-white truncate"},[e._v("\n      "+e._s(e.title)+"\n    ")]):e._e(),e._v(" "),e.$slots.default?r("p",{staticClass:"text-black/50 dark:text-white/30 text-sm",class:!0===e.truncate&&"line-clamp-2"},[e._t("default")],2):e._e()]),e._v(" "),e.$slots.icon?r("div",{staticClass:"flex-shrink-0"},[e._t("icon")],2):e._e()])}),[],!1,null,null,null);e.default=component.exports},514:function(t,e,r){"use strict";r.r(e);r(16),r(36);var n=r(0).a.extend({data:function(){return{pages:[{title:"Custom Status",url:"/projects/premid/custom-status",description:"Tool that allows you do display whatever you want on your Discord profile with PreMiD! Easy and free!"},{title:"Metadata Creator",url:"/projects/premid/mdcreator",description:"Easy and free to use tool to create PreMiD Presence metadata files easily, without even opening your code editor!"}]}},head:function(){var title="PreMiD";return{title:title,meta:this.$prepareMeta({title:title,description:"Custom tools created for your PreMiD experience! Featuring Custom Status and Metadata Creator for free and fresh UI!",image:"https://i.imgur.com/CuVtvKW.png",keywords:"premid, custom, status",url:"https://eggsy.xyz/projects/premid"}),link:[{rel:"canonical",href:"https://eggsy.xyz/projects/premid"}]}}}),o=r(8),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("PageLayout",{staticClass:"space-y-12",attrs:{title:"PreMiD",description:"PreMiD is a simple, configurable utility that allows you to show what\n        you're doing on the web in your Discord now playing status."}},[e("section",{staticClass:"grid gap-4 sm:grid-cols-2"},t._l(t.pages,(function(r,n){return e("Card",{key:"page-".concat(n),attrs:{title:r.title,href:r.url}},[e("span",{staticClass:"text-black/50 dark:text-white/30"},[t._v(t._s(r.description))])])})),1),t._v(" "),e("section",{staticClass:"space-y-4"},[e("Button",{attrs:{href:"https://premid.app",blank:""},scopedSlots:t._u([{key:"icon",fn:function(){return[e("IconDev",{staticClass:"h-6 text-gray-700 w-6 dark:text-neutral-300",attrs:{brand:"premid"}})]},proxy:!0}])},[t._v("\n\n      Visit PreMiD\n    ")])],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Card:r(382).default,IconDev:r(398).default,Button:r(99).default,PageLayout:r(380).default})}}]);