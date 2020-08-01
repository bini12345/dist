(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["EmployeeInfo"],{1148:function(e,t,r){"use strict";var o=r("a691"),s=r("1d80");e.exports="".repeat||function(e){var t=String(s(this)),r="",a=o(e);if(a<0||a==1/0)throw RangeError("Wrong number of repetitions");for(;a>0;(a>>>=1)&&(t+=t))1&a&&(r+=t);return r}},"246e":function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",[r("setEmployeesHours")],1)},s=[],a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",{staticClass:"wrapper"},[r("div",{attrs:{id:"mossadHoursDetails"}},[r("v-row",[r("v-col",{attrs:{cols:"12",md:"2"}},[r("p",[e._v("מוסד - "+e._s(e._mossadInfo.mossadName))])]),r("v-col",{attrs:{cols:"12",md:"2"}},[r("p",[e._v("שעות מאוישות - "+e._s(e._mossadInfo.currHours))])]),r("v-col",{attrs:{cols:"12",md:"2"}},[r("p",[e._v("יתרת שעות - "+e._s(e._mossadInfo.maxHours-e._mossadInfo.currHours))])]),r("v-col",{attrs:{cols:"12",md:"2"}},[r("p",[e._v("כמות שעות מקסימלית - "+e._s(e._mossadInfo.maxHours))])]),r("v-col",{attrs:{cols:"12",md:"2"}},[r("p",[e._v("אחוז איוש - "+e._s(e.getTwoDigits(e._mossadInfo.currHours,e._mossadInfo.maxHours))+"%")])])],1)],1),r("div",{staticClass:"first"},[r("v-row",[r("v-col",{attrs:{cols:"12",md:"8"}},[r("v-card-text",[r("v-autocomplete",{attrs:{items:e.tzArray,color:"indigo lighten-5","hide-selected":"","item-text":function(e){return e.firstName+" "+e.lastName+" - "+e.empId},"item-value":"empId",label:"תעודת זהות",placeholder:"חפש"},on:{change:function(t){return e.getEmployeeInfo()}},model:{value:e.empId,callback:function(t){e.empId=t},expression:"empId"}})],1)],1)],1)],1),Object.keys(this.employeeInfo).length>0?r("div",{staticClass:"mainBody"},[r("div",{staticClass:"second"},[r("v-row",[r("v-col",{staticClass:"test"},[r("p",[e._v("שם פרטי")]),e._v(" "+e._s(e.employeeInfo.firstName)+" ")]),r("v-col",{staticClass:"test"},[r("p",[e._v("שם משפחה")]),e._v(" "+e._s(e.employeeInfo.lastName)+" ")]),r("v-col",{staticClass:"test"},[r("p",[e._v("גיל")]),e._v(" "+e._s(e.formatDate)+" ")]),r("v-col",{staticClass:"test"},[r("p",[e._v("מין")]),e._v(" "+e._s(e.formatGender)+" ")]),r("v-col",{staticClass:"test"},[r("p",[e._v("משרת אם")]),e._v(" "+e._s(e.formatIsMother)+" ")]),r("v-col",{staticClass:"test"},[r("p",[e._v("שעות גיל")]),e._v(" "+e._s(e.ageHours)+" ")])],1)],1)]):e._e(),Object.keys(this.existHours).length>0?r("table",{attrs:{id:"detailsTable"}},[r("thead",[r("th"),r("th",[e._v("א")]),r("th",[e._v("ב")]),r("th",[e._v("ג")]),r("th",[e._v("ד")]),r("th",[e._v("ה")]),r("th",[e._v("ו")]),r("th",[e._v("סיכום")])]),r("tbody",e._l(e.existHours,(function(t,o){return r("tr",{key:o},[r("td",[e._v(e._s(e.getRowType(t.type)))]),e._l(t.week,(function(t,o){return r("td",{key:o},[e._v(e._s(t))])})),r("td",[e._v(e._s(e.totalHours(t.week)))])],2)})),0)]):e._e(),null!=e.empId?r("v-row",[r("v-col",{attrs:{cols:"12",md:"2"}},[r("v-select",{attrs:{items:e.reformTypes,"item-text":"name","item-value":"reformId",label:"בחר רפורמה","single-line":""},model:{value:e.reformId,callback:function(t){e.reformId=t},expression:"reformId"}})],1)],1):e._e(),null!=e.employeeInfo&&null!=e.reformId?r("v-card",[r("v-card",{staticClass:"center"},[r("weeklyHours",{attrs:{empId:e.empId,reformType:e.reformId}})],1)],1):e._e()],1)},n=[],i=(r("13d5"),r("b680"),r("bc3a")),l=r.n(i),c=r("1b38"),u={name:"setEmployeesHours",components:{weeklyHours:c["a"]},data:function(){return{search:null,reformId:null,empId:null,tzArray:[],employeeInfo:{},existHours:[],weeklyHoursComponents:[],reformTypes:[]}},created:function(){this.getAllTz(),this.getReformTypes()},computed:{_mossadInfo:function(){return this.$store.state.mossadInfo},formatDate:function(){if(void 0!=this.employeeInfo.birthDate){var e=new Date(this.employeeInfo.birthDate),t=new Date;return t.getFullYear()-e.getFullYear()}},formatGender:function(){if(void 0!=this.employeeInfo.gender)return"M"===this.employeeInfo.gender?"זכר":"נקבה"},formatIsMother:function(){return!0===this.employeeInfo.mother?"כן":"לא"},ageHours:function(){if(void 0===this.employeeInfo.birthDate)return null;var e=new Date(this.employeeInfo.birthDate),t=new Date,r=t.getFullYear()-e.getFullYear();return r<50?0:r>55?4:2}},methods:{totalHours:function(e){return null!=e?e.reduce((function(e,t){return parseInt(e)+parseInt(t)}),0):0},getRowType:function(e){return 1===e?"במוסד":"בכל המוסדות"},getAllTz:function(){var e=this;l.a.get("/employees/all").then((function(t){e.tzArray=t.data})).catch((function(t){return e.$store.dispatch("displayErrorMessage",{error:t})}))},getEmployeeInfo:function(){var e=this;l.a.get("/employees/byId",{params:{empId:this.empId}}).then((function(t){e.employeeInfo=t.data})).catch((function(t){return e.$store.dispatch("displayErrorMessage",{error:t})})),this.getAllExistHours()},getAllExistHours:function(){var e=this;this.existHours=[],l.a.get("/teacherEmploymentDetails/weekSum",{params:{empId:this.empId}}).then((function(t){e.existHours.push({type:1,week:t.data})})).catch((function(t){return e.$store.dispatch("displayErrorMessage",{error:t})})),l.a.get("/teacherEmploymentDetails/weekSumPerMossad",{params:{empId:this.empId,mossadId:this.$store.state.mossadId}}).then((function(t){e.existHours.push({type:2,week:t.data})}))},getReformTypes:function(){var e=this;l.a.get("/reformTypes/relevant").then((function(t){e.reformTypes=t.data})).catch((function(t){return e.$store.dispatch("displayErrorMessage",{error:t})}))},navigateToHirepage:function(){this.$router.push("/HireEmp")},getTwoDigits:function(e,t){return parseFloat(e/t*100).toFixed(2)}}},f=u,m=(r("e48f"),r("2877")),d=r("6544"),p=r.n(d),v=r("c6a6"),h=r("b0af"),_=r("99d9"),I=r("62ad"),y=r("0fd9"),g=r("b974"),w=Object(m["a"])(f,a,n,!1,null,"76a848ba",null),b=w.exports;p()(w,{VAutocomplete:v["a"],VCard:h["a"],VCardText:_["b"],VCol:I["a"],VRow:y["a"],VSelect:g["a"]});var x={name:"employeeInfo",components:{setEmployeesHours:b},data:function(){return{}}},H=x,E=Object(m["a"])(H,o,s,!1,null,"39a9c389",null);t["default"]=E.exports;p()(E,{VCard:h["a"]})},"408a":function(e,t,r){var o=r("c6b6");e.exports=function(e){if("number"!=typeof e&&"Number"!=o(e))throw TypeError("Incorrect invocation");return+e}},b680:function(e,t,r){"use strict";var o=r("23e7"),s=r("a691"),a=r("408a"),n=r("1148"),i=r("d039"),l=1..toFixed,c=Math.floor,u=function(e,t,r){return 0===t?r:t%2===1?u(e,t-1,r*e):u(e*e,t/2,r)},f=function(e){var t=0,r=e;while(r>=4096)t+=12,r/=4096;while(r>=2)t+=1,r/=2;return t},m=l&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!i((function(){l.call({})}));o({target:"Number",proto:!0,forced:m},{toFixed:function(e){var t,r,o,i,l=a(this),m=s(e),d=[0,0,0,0,0,0],p="",v="0",h=function(e,t){var r=-1,o=t;while(++r<6)o+=e*d[r],d[r]=o%1e7,o=c(o/1e7)},_=function(e){var t=6,r=0;while(--t>=0)r+=d[t],d[t]=c(r/e),r=r%e*1e7},I=function(){var e=6,t="";while(--e>=0)if(""!==t||0===e||0!==d[e]){var r=String(d[e]);t=""===t?r:t+n.call("0",7-r.length)+r}return t};if(m<0||m>20)throw RangeError("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return String(l);if(l<0&&(p="-",l=-l),l>1e-21)if(t=f(l*u(2,69,1))-69,r=t<0?l*u(2,-t,1):l/u(2,t,1),r*=4503599627370496,t=52-t,t>0){h(0,r),o=m;while(o>=7)h(1e7,0),o-=7;h(u(10,o,1),0),o=t-1;while(o>=23)_(1<<23),o-=23;_(1<<o),h(1,1),_(2),v=I()}else h(0,r),h(1<<-t,0),v=I()+n.call("0",m);return m>0?(i=v.length,v=p+(i<=m?"0."+n.call("0",m-i)+v:v.slice(0,i-m)+"."+v.slice(i-m))):v=p+v,v}})},e48f:function(e,t,r){"use strict";var o=r("fee5"),s=r.n(o);s.a},fee5:function(e,t,r){}}]);
//# sourceMappingURL=EmployeeInfo.726e97c2.js.map