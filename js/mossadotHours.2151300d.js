(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mossadotHours"],{"0d6b":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("mossadHours")],1)},s=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-data-table",{staticClass:"elevation-1",attrs:{dense:"",id:"mossadotTable",headers:e.mossadotHeaders,items:e.mossadotTable,search:e.search,"footer-props":{"items-per-page-options":[20,50,100,-1],"items-per-page-text":"מספר תוצאות  :"},"item-key":"mossadId"},scopedSlots:e._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:"",color:"white"}},[a("v-toolbar-title",[a("v-card-title",[a("v-row",[a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-text-field",{attrs:{label:"Search",placeholder:"חפש","single-line":"",autocomplete:"off","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),a("v-col",{attrs:{cols:"12",md:"3"}},[a("v-select",{attrs:{items:e.years,"item-text":"hebrewYear","item-value":"year",label:"שנה"},on:{change:function(t){return e.getAllMossadotHours()}},model:{value:e.selectedYear,callback:function(t){e.selectedYear=t},expression:"selectedYear"}})],1)],1)],1)],1),a("v-spacer")],1)]},proxy:!0},{key:"item.mossadName",fn:function(t){var a=t.item;return[e._v(e._s(e.getMossadName(a.mossadId)))]}},{key:"item.maxHours",fn:function(t){var r=t.item;return[a("v-text-field",{staticStyle:{"max-width":"75px"},attrs:{dense:"",disabled:r.disabled,type:"number"},model:{value:r.maxHours,callback:function(t){e.$set(r,"maxHours",t)},expression:"item.maxHours"}})]}},{key:"item.actions",fn:function(t){var r=t.item;return[a("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on,o=t.attrs;return[a("v-icon",e._g(e._b({staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editMossad(r)}}},"v-icon",o,!1),s),[e._v("mdi-pencil")])]}}],null,!0)},[a("span",[e._v(e._s(e.editText(r)))])]),a("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on,o=t.attrs;return[a("v-icon",e._g(e._b({staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.saveMossad(r)}}},"v-icon",o,!1),s),[e._v("mdi-content-save")])]}}],null,!0)},[a("span",[e._v("שמור")])]),a("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on,o=t.attrs;return[a("v-icon",e._g(e._b({staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.deleteMossad(r)}}},"v-icon",o,!1),s),[e._v("mdi-delete")])]}}],null,!0)},[a("span",[e._v("מחק")])])]}}],null,!0)})],1)},n=[],i=(a("7db0"),a("4160"),a("159b"),a("96cf"),a("1da1")),c=a("bc3a"),d=a.n(c),u={name:"mossadHours",components:{},data:function(){return{isNew:!1,mossadInfo:{},search:"",years:[],dialog:!1,selectedYear:0,mossadot:[],mossadotTable:[],mossadotHours:[],mossadTypes:[],mossadotHeaders:[{text:"מוסד",value:"mossadName"},{text:"מגבלת שעות",value:"maxHours"},{text:"שעות בפועל",value:"currHours"},{text:"פעולות",value:"actions",sortable:!1}]}},created:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.initilize(),t.next=3,e.getAllMossadot();case 3:return t.next=5,e.getAllMossadotHours();case 5:case"end":return t.stop()}}),t)})))()},methods:{editText:function(e){return 0!=e.disabled?"ערוך":"צפייה"},initilize:function(){this.years=[{year:2021,hebrewYear:'תשפ"א'},{year:2022,hebrewYear:'תשפ"ב'},{year:2023,hebrewYear:'תשפ"ג'},{year:2024,hebrewYear:'תשפ"ד'},{year:2025,hebrewYear:'תשפ"ה'}];var e=new Date;this.selectedYear=e.getFullYear(),e.getMonth()>=8&&this.selectedYear++},getAllMossadot:function(){var e=this;d.a.get("/mossadot/all").then((function(t){e.mossadot=t.data})).catch((function(t){return e.$store.dispatch("displayErrorMessage",{error:t})}))},getAllMossadotHours:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,d.a.get("/mossadHours/byYear",{params:{year:e.selectedYear}}).then((function(t){e.mossadotHours=t.data})).catch((function(t){return e.$store.dispatch("displayErrorMessage",{error:t})}));case 2:e.orderMossadot();case 3:case"end":return t.stop()}}),t)})))()},getMossadName:function(e){var t=this.mossadot.find((function(t){return t.mossadId==e}));return null==t?"":t.mossadName},createMossad:function(){this.isNew=!0,this.mossadInfo={}},saveMossadInfo:function(){var e=this,t=!1;return d()({url:"/mossadHours/save",method:"post",data:this.mossadInfo}).then((function(){alert("הנתונים נשמרו בהצלחה"),t=!0,location.reload()})).catch((function(t){e.$store.dispatch("displayErrorMessage",{error:t})})),t},editMossad:function(e){e.disabled=!e.disabled},saveMossad:function(e){var t=this;d()({url:"/mossadHours/save",method:"post",data:e}).then((function(){alert("הנתונים נשמרו בהצלחה"),t.getAllMossadotHours()})).catch((function(e){t.$store.dispatch("displayErrorMessage",{error:e})}))},deleteMossad:function(e){var t=this;d.a.delete("/mossadHours/byId",{params:{mossadId:e.mossadId,year:e.year}}).then((function(){alert("פעולת המחיקה בוצעה בהצלחה"),location.reload()})).catch((function(e){return t.$store.dispatch("displayErrorMessage",{error:e})}))},cleanmossadInfo:function(){this.mossadInfo={}},orderMossadot:function(){var e=this;this.mossadotTable=[],this.mossadot.forEach((function(t){e.mossadotTable.push({mossadId:t.mossadId,mossadName:t.mossadName,mossadType:t.mossadType,currHours:0,maxHours:0,year:e.selectedYear,disabled:!0})})),this.mossadotTable.forEach((function(t){var a=e.mossadotHours.find((function(e){return e.mossadId==t.mossadId}));void 0!=a&&(t.maxHours=a.maxHours,t.currHours=a.currHours)}))}}},l=u,f=(a("a2ab"),a("2877")),m=a("6544"),v=a.n(m),h=a("99d9"),p=a("62ad"),b=a("8fea"),y=a("132d"),x=a("0fd9"),g=a("b974"),S=a("2fa4"),M=a("8654"),H=a("71d9"),T=a("2a7f"),w=a("3a2f"),L=Object(f["a"])(l,o,n,!1,null,"8e9ade5a",null),E=L.exports;v()(L,{VCardTitle:h["b"],VCol:p["a"],VDataTable:b["a"],VIcon:y["a"],VRow:x["a"],VSelect:g["a"],VSpacer:S["a"],VTextField:M["a"],VToolbar:H["a"],VToolbarTitle:T["a"],VTooltip:w["a"]});var _={name:"mossadotHours",components:{mossadHours:E},data:function(){return{expanded:[],singleExpand:!1,cSel:"A",res:[{fullName:"name 1",med:"med 1",startDate:"start  date 1",path:["A","B","C","D"],selected:""},{fullName:"name 2",med:"med 22",startDate:"start  date 2",path:["A","B","C","D"],selected:""}],totalRes:0,search:"",loading:!1,options:{page:1,itemsPerPage:40},headers:[{text:"Name",value:"fullName"},{text:"Med",value:"med"},{text:"Start Date",value:"startDate"},{text:"Create  ",value:"path",width:"200"},{text:"selected  ",value:"selected"}]}}},A=_,k=(a("79bb"),Object(f["a"])(A,r,s,!1,null,"d355f116",null));t["default"]=k.exports},"159b":function(e,t,a){var r=a("da84"),s=a("fdbc"),o=a("17c2"),n=a("9112");for(var i in s){var c=r[i],d=c&&c.prototype;if(d&&d.forEach!==o)try{n(d,"forEach",o)}catch(u){d.forEach=o}}},"17c2":function(e,t,a){"use strict";var r=a("b727").forEach,s=a("a640"),o=a("ae40"),n=s("forEach"),i=o("forEach");e.exports=n&&i?[].forEach:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}},4160:function(e,t,a){"use strict";var r=a("23e7"),s=a("17c2");r({target:"Array",proto:!0,forced:[].forEach!=s},{forEach:s})},"65f0":function(e,t,a){var r=a("861d"),s=a("e8b5"),o=a("b622"),n=o("species");e.exports=function(e,t){var a;return s(e)&&(a=e.constructor,"function"!=typeof a||a!==Array&&!s(a.prototype)?r(a)&&(a=a[n],null===a&&(a=void 0)):a=void 0),new(void 0===a?Array:a)(0===t?0:t)}},"79bb":function(e,t,a){"use strict";var r=a("bb56"),s=a.n(r);s.a},"7db0":function(e,t,a){"use strict";var r=a("23e7"),s=a("b727").find,o=a("44d2"),n=a("ae40"),i="find",c=!0,d=n(i);i in[]&&Array(1)[i]((function(){c=!1})),r({target:"Array",proto:!0,forced:c||!d},{find:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}}),o(i)},a2ab:function(e,t,a){"use strict";var r=a("ab1e"),s=a.n(r);s.a},a640:function(e,t,a){"use strict";var r=a("d039");e.exports=function(e,t){var a=[][e];return!!a&&r((function(){a.call(null,t||function(){throw 1},1)}))}},ab1e:function(e,t,a){},ae40:function(e,t,a){var r=a("83ab"),s=a("d039"),o=a("5135"),n=Object.defineProperty,i={},c=function(e){throw e};e.exports=function(e,t){if(o(i,e))return i[e];t||(t={});var a=[][e],d=!!o(t,"ACCESSORS")&&t.ACCESSORS,u=o(t,0)?t[0]:c,l=o(t,1)?t[1]:void 0;return i[e]=!!a&&!s((function(){if(d&&!r)return!0;var e={length:-1};d?n(e,1,{enumerable:!0,get:c}):e[1]=1,a.call(e,u,l)}))}},b727:function(e,t,a){var r=a("0366"),s=a("44ad"),o=a("7b0b"),n=a("50c4"),i=a("65f0"),c=[].push,d=function(e){var t=1==e,a=2==e,d=3==e,u=4==e,l=6==e,f=5==e||l;return function(m,v,h,p){for(var b,y,x=o(m),g=s(x),S=r(v,h,3),M=n(g.length),H=0,T=p||i,w=t?T(m,M):a?T(m,0):void 0;M>H;H++)if((f||H in g)&&(b=g[H],y=S(b,H,x),e))if(t)w[H]=y;else if(y)switch(e){case 3:return!0;case 5:return b;case 6:return H;case 2:c.call(w,b)}else if(u)return!1;return l?-1:d||u?u:w}};e.exports={forEach:d(0),map:d(1),filter:d(2),some:d(3),every:d(4),find:d(5),findIndex:d(6)}},bb56:function(e,t,a){},e8b5:function(e,t,a){var r=a("c6b6");e.exports=Array.isArray||function(e){return"Array"==r(e)}},fdbc:function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=mossadotHours.2151300d.js.map