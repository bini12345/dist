(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["calcHours"],{"10f8":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-card",{staticClass:"center wrapper"},[s("calcHoursTable")],1)},i=[],r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("v-row",{staticClass:"center"},[s("v-col",{attrs:{cols:"12",md:"3"}},[s("v-autocomplete",{staticClass:"myMaxWindth",attrs:{items:e.reformTable,"hide-selected":"","item-text":"name","item-value":"reformId",label:"רפורמה",placeholder:"בחר"},on:{change:function(t){return e.filterTable()}},model:{value:e.reformType,callback:function(t){e.reformType=t},expression:"reformType"}})],1),s("v-col",{attrs:{cols:"12",md:"3"}},[s("v-autocomplete",{staticClass:"myMaxWindth",attrs:{items:e.ageHoursTable,"hide-selected":"","item-text":"text","item-value":"value",label:"שעות גיל",placeholder:"בחר"},on:{change:function(t){return e.filterTable()}},model:{value:e.ageHours,callback:function(t){e.ageHours=t},expression:"ageHours"}})],1),s("v-col",{attrs:{cols:"12",md:"3"}},[s("v-autocomplete",{staticClass:"myMaxWindth",attrs:{items:e.isMotherTable,"hide-selected":"","item-text":"text","item-value":"value",label:"משרת אם",placeholder:"בחר"},on:{change:function(t){return e.filterTable()}},model:{value:e.isMother,callback:function(t){e.isMother=t},expression:"isMother"}})],1),e.dataToTable.length>0?s("v-btn",{attrs:{color:"success"},on:{click:function(t){return e.exportCalcHoursToExcel()}}},[e._v("ייצוא לאקסל")]):e._e(),s("a",{attrs:{href:"https://tlush.edu.gov.il/calculators/",target:"_blank"}},[e._v("סימולטור שכר")])],1),e.dataToTable.length>0?s("v-data-table",{staticClass:"elevation-1 center",attrs:{dense:"",id:"myTable",item:"",headers:e.headers,items:e.dataToTable,"footer-props":{"items-per-page-options":[20,50,100,-1],"items-per-page-text":"מספר תוצאות  :"}},scopedSlots:e._u([{key:"item.jobPercent",fn:function(t){var a=t.item;return[s("p",[e._v(e._s(a.jobPercent))])]}}],null,!0)}):e._e()],1)},n=[],o=(s("4de4"),s("4160"),s("159b"),s("1146")),l=s.n(o),c=s("bc3a"),h=s.n(c),u={name:"calcHoursTable",data:function(){return{headers:[],excelHeaders:[],reformType:"",ageHours:"",isMother:"",reformTable:[],ageHoursTable:[],isMotherTable:[],empCodesTable:[],dataToTable:[]}},created:function(){this.initilizer(),this.getReforms(),this.getEmploymentcodes()},methods:{initilizer:function(){this.headers=[{text:"שעות גיל",value:"ageHours"},{text:"משרת אם",value:"mother"},{text:"שעות פרונטליות",value:"frontalHours"},{text:"שעות שהייה",value:"pauseHours"},{text:"שעות פרטניות",value:"privateHours"},{text:"אחוז משרה",value:"jobPercent"}],this.excelHeaders={ageHours:"שעות גיל",mother:"משרת אם",frontalHours:"שעות פרונטליות",pauseHours:"שעות שהייה",privateHours:"שעות פרטניות",jobPercent:"אחוז משרה"},this.ageHoursTable=[{text:"הכל",value:""},{text:"0",value:"0"},{text:"2",value:"2"},{text:"4",value:"4"}],this.isMotherTable=[{text:"הכל",value:null},{text:"כן",value:!0},{text:"לא",value:!1}]},getReforms:function(){var e=this;h.a.get("/reformTypes/all").then((function(t){return e.reformTable=t.data.filter((function(e){return 1==e.reformId||2==e.reformId||5==e.reformId}))}))},getEmploymentcodes:function(){var e=this;h.a.get("/calcHours/all").then((function(t){e.empCodesTable=t.data}))},filterTable:function(){var e=this;this.dataToTable=[],this.empCodesTable.forEach((function(t){t.reformType!=e.reformType&&null!=e.reformType||t.mother!=e.isMother&&null!=e.isMother||t.ageHours!=e.ageHours&&""!=e.ageHours||e.dataToTable.push({ageHours:t.ageHours,mother:e.formatMotherType(t.mother),frontalHours:t.frontalHours,pauseHours:t.pauseHours,privateHours:t.privateHours,jobPercent:t.jobPercent+"%"})}))},formatMotherType:function(e){return 1==e?"כן":"לא"},exportCalcHoursToExcel:function(){this.downloadFile(this.dataToTable,this.excelHeaders,"פיצול שעות.xlsx","פיצול שעות")},downloadDemoFile:function(){var e=[];this.downloadFile(e,this.excelHeaders,"פיצול שעות.xlsx","פיצול שעות")},downloadFile:function(e,t,s,a){var i=e;i.unshift(t);var r=l.a.utils.json_to_sheet(i,{skipHeader:!0,Views:[{RTL:!0}]}),n=l.a.utils.book_new();l.a.utils.book_append_sheet(n,r,a),this.set_right_to_left(n),l.a.writeFile(n,s)},set_right_to_left:function(e){e.Workbook||(e.Workbook={}),e.Workbook.Views||(e.Workbook.Views=[]),e.Workbook.Views[0]||(e.Workbook.Views[0]={},e.Workbook.Views[0].RTL=!0)}}},d=u,m=(s("73a9"),s("2877")),p=s("6544"),f=s.n(p),v=s("c6a6"),b=s("8336"),g=s("62ad"),I=s("8fea"),x=s("0fd9"),S=Object(m["a"])(d,r,n,!1,null,"77f005e0",null),T=S.exports;f()(S,{VAutocomplete:v["a"],VBtn:b["a"],VCol:g["a"],VDataTable:I["a"],VRow:x["a"]});var y={name:"employeeInfo",components:{calcHoursTable:T},data:function(){return{empId:103103103}}},H=y,C=(s("7bfc"),s("b0af")),w=Object(m["a"])(H,a,i,!1,null,"3753b1f9",null);t["default"]=w.exports;f()(w,{VCard:C["a"]})},"159b":function(e,t,s){var a=s("da84"),i=s("fdbc"),r=s("17c2"),n=s("9112");for(var o in i){var l=a[o],c=l&&l.prototype;if(c&&c.forEach!==r)try{n(c,"forEach",r)}catch(h){c.forEach=r}}},"17c2":function(e,t,s){"use strict";var a=s("b727").forEach,i=s("a640"),r=s("ae40"),n=i("forEach"),o=r("forEach");e.exports=n&&o?[].forEach:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}},"2bfd":function(e,t,s){},4160:function(e,t,s){"use strict";var a=s("23e7"),i=s("17c2");a({target:"Array",proto:!0,forced:[].forEach!=i},{forEach:i})},"4de4":function(e,t,s){"use strict";var a=s("23e7"),i=s("b727").filter,r=s("1dde"),n=s("ae40"),o=r("filter"),l=n("filter");a({target:"Array",proto:!0,forced:!o||!l},{filter:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},"73a9":function(e,t,s){"use strict";var a=s("ed97"),i=s.n(a);i.a},"7bfc":function(e,t,s){"use strict";var a=s("cb73"),i=s.n(a);i.a},c6a6:function(e,t,s){"use strict";s("2bfd");var a=s("b974"),i=s("8654"),r=s("d9f7"),n=s("80d2");const o={...a["b"],offsetY:!0,offsetOverflow:!0,transition:!1};t["a"]=a["a"].extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:(e,t,s)=>s.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1},hideNoData:Boolean,menuProps:{type:a["a"].options.props.menuProps.type,default:()=>o},noFilter:Boolean,searchInput:{type:String,default:void 0}},data(){return{lazySearch:this.searchInput}},computed:{classes(){return{...a["a"].options.computed.classes.call(this),"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1}},computedItems(){return this.filteredItems},selectedValues(){return this.selectedItems.map(e=>this.getValue(e))},hasDisplayedItems(){return this.hideSelected?this.filteredItems.some(e=>!this.hasItem(e)):this.filteredItems.length>0},currentRange(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems(){return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter(e=>{const t=Object(n["q"])(e,this.itemText),s=null!=t?String(t):"";return this.filter(e,String(this.internalSearch),s)})},internalSearch:{get(){return this.lazySearch},set(e){this.lazySearch=e,this.$emit("update:search-input",e)}},isAnyValueAllowed(){return!1},isDirty(){return this.searchIsDirty||this.selectedItems.length>0},isSearching(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps(){const e=a["a"].options.computed.$_menuProps.call(this);return e.contentClass=("v-autocomplete__content "+(e.contentClass||"")).trim(),{...o,...e}},searchIsDirty(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem(){return this.multiple?null:this.selectedItems.find(e=>this.valueComparator(this.getValue(e),this.getValue(this.internalValue)))},listData(){const e=a["a"].options.computed.listData.call(this);return e.props={...e.props,items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch},e}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.updateSelf())},isMenuActive(e){!e&&this.hasSlot&&(this.lazySearch=void 0)},items(e,t){t&&t.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!e.length||this.activateMenu()},searchInput(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created(){this.setSearch()},destroyed(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged(e,t){e!==t&&(this.setMenuIndex(-1),this.$nextTick(()=>{this.internalSearch&&(1===e.length||this.autoSelectFirst)&&(this.$refs.menu.getTiles(),this.setMenuIndex(0))}))},onInternalSearchChanged(){this.updateMenuDimensions()},updateMenuDimensions(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex(e){this.searchIsDirty||(this.multiple&&e===n["w"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===n["w"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:e!==n["w"].backspace&&e!==n["w"].delete||this.deleteCurrentItem())},deleteCurrentItem(){const e=this.selectedIndex,t=this.selectedItems[e];if(!this.isInteractive||this.getDisabled(t))return;const s=this.selectedItems.length-1;if(-1===this.selectedIndex&&0!==s)return void(this.selectedIndex=s);const a=this.selectedItems.length,i=e!==a-1?e:e-1,r=this.selectedItems[i];r?this.selectItem(t):this.setValue(this.multiple?[]:void 0),this.selectedIndex=i},clearableCallback(){this.internalSearch=void 0,a["a"].options.methods.clearableCallback.call(this)},genInput(){const e=i["a"].options.methods.genInput.call(this);return e.data=Object(r["a"])(e.data,{attrs:{"aria-activedescendant":Object(n["o"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(n["o"])(e.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),e},genInputSlot(){const e=a["a"].options.methods.genInputSlot.call(this);return e.data.attrs.role="combobox",e},genSelections(){return this.hasSlot||this.multiple?a["a"].options.methods.genSelections.call(this):[]},onClick(e){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput(e){if(this.selectedIndex>-1||!e.target)return;const t=e.target,s=t.value;t.value&&this.activateMenu(),this.internalSearch=s,this.badInput=t.validity&&t.validity.badInput},onKeyDown(e){const t=e.keyCode;a["a"].options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(t)},onSpaceDown(e){},onTabDown(e){a["a"].options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown(e){e.preventDefault(),this.activateMenu()},selectItem(e){a["a"].options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems(){a["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch(){this.$nextTick(()=>{this.multiple&&this.internalSearch&&this.isMenuActive||(this.internalSearch=!this.selectedItems.length||this.multiple||this.hasSlot?null:this.getText(this.selectedItem))})},updateSelf(){(this.searchIsDirty||this.internalValue)&&(this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy(e){if(-1===this.selectedIndex)return;const t=this.selectedItems[this.selectedIndex],s=this.getText(t);e.clipboardData.setData("text/plain",s),e.clipboardData.setData("text/vnd.vuetify.autocomplete.item+plain",s),e.preventDefault()}}})},cb73:function(e,t,s){},ed97:function(e,t,s){},fdbc:function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=calcHours.e986431f.js.map