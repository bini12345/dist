(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["EmployeeInfo~ImportData"],{"159b":function(t,e,r){var n=r("da84"),o=r("fdbc"),i=r("17c2"),a=r("9112");for(var s in o){var c=n[s],u=c&&c.prototype;if(u&&u.forEach!==i)try{a(u,"forEach",i)}catch(f){u.forEach=i}}},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,o=r("a640"),i=r("ae40"),a=o("forEach"),s=i("forEach");t.exports=a&&s?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("d3b7"),r("e6cf");function n(t,e,r,n,o,i,a){try{var s=t[i](a),c=s.value}catch(u){return void r(u)}s.done?e(c):Promise.resolve(c).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function s(t){n(a,o,i,s,c,"next",t)}function c(t){n(a,o,i,s,c,"throw",t)}s(void 0)}))}}},4160:function(t,e,r){"use strict";var n=r("23e7"),o=r("17c2");n({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},"4de4":function(t,e,r){"use strict";var n=r("23e7"),o=r("b727").filter,i=r("1dde"),a=r("ae40"),s=i("filter"),c=a("filter");n({target:"Array",proto:!0,forced:!s||!c},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},"7db0":function(t,e,r){"use strict";var n=r("23e7"),o=r("b727").find,i=r("44d2"),a=r("ae40"),s="find",c=!0,u=a(s);s in[]&&Array(1)[s]((function(){c=!1})),n({target:"Array",proto:!0,forced:c||!u},{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i(s)},"87cf":function(t,e,r){"use strict";r("4de4"),r("7db0"),r("4160"),r("a15b"),r("d81d"),r("d3b7"),r("159b"),r("96cf");var n=r("1da1"),o=r("1146"),i=r.n(o),a=r("bc3a"),s=r.n(a);e["a"]={data:function(){return{localMossadId:null,allEmpsInfo:[],codeDescription:[],empsHours:[],dataToExport:[]}},created:function(){this.getCodesDescription()},methods:{createWeeklyHoursToMossad:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,e.getAllEmpInfo(t);case 2:return r.next=4,e.getAllEmpHours(t);case 4:return r.next=6,e.setWeeklyHoursAndExport(t);case 6:e.dataToExport=[],e.allEmpsInfo=[],e.empsHours=[];case 9:case"end":return r.stop()}}),r)})))()},createWeeklyHoursToEmployee:function(t,e){var r=this;return Object(n["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,r.getEmpInfo(t,e);case 2:return n.next=4,r.getEmpHours(t,e);case 4:r.setWeeklyHoursAndExport(e);case 5:case"end":return n.stop()}}),n)})))()},setWeeklyHoursAndExport:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n="",r.next=3,new Promise((function(e){s.a.get("/mossadot/byId",{params:{mossadId:t}}).then((function(t){console.log(t),n=t.data.mossadName,e(t)})).catch((function(t){console.log(t)}))}));case 3:e.allEmpsInfo.forEach((function(r){e.setExistHours(r,e.empsHours.filter((function(t){return t.empId==r.empId})),t,n)})),e.downloadFile(e.dataToExport,e.getWeeklyHoursHeaders(),"מצבת שעות.xlsx","מערכת שעות פרונטליות");case 5:case"end":return r.stop()}}),r)})))()},getEmpHours:function(t,e){var r=this;return new Promise((function(n){s.a.get("/teacherEmploymentDetails/byMossad",{params:{empId:t,mossadId:e}}).then((function(t){r.empsHours=t.data,n(t)}))}))},getEmpInfo:function(t){var e=this;return new Promise((function(r){s.a.get("/employees/byId",{params:{empId:t}}).then((function(t){e.allEmpsInfo.push(t.data),r(t)}))}))},getAllEmpInfo:function(t){var e=this;return new Promise((function(r){s.a.get("/employees/byMossad",{params:{mossadId:t}}).then((function(t){e.allEmpsInfo=t.data,r(t)}))}))},getAllEmpHours:function(t){var e=this;return new Promise((function(r){s.a.get("/teacherEmploymentDetails/allByMossad",{params:{mossadId:t}}).then((function(t){e.empsHours=t.data,r(t)}))}))},getCodesDescription:function(){var t=this;s.a.get("/convertHours/all").then((function(e){t.codeDescription=e.data})).catch((function(e){return t.$store.dispatch("displayErrorMessage",{error:e})}))},downloadDemoFile:function(){var t=[];this.downloadFile(t,this.getWeeklyHoursHeaders(),"מצבת שעות.xlsx","מערכת שעות פרונטליות")},downloadFile:function(t,e,r,n){var o=t;o.unshift(e);var a=i.a.utils.json_to_sheet(o,{skipHeader:!0,Views:[{RTL:!0}]}),s=i.a.utils.book_new();i.a.utils.book_append_sheet(s,a,n),this.set_right_to_left(s),i.a.writeFile(s,r)},set_right_to_left:function(t){t.Workbook||(t.Workbook={}),t.Workbook.Views||(t.Workbook.Views=[]),t.Workbook.Views[0]||(t.Workbook.Views[0]={},t.Workbook.Views[0].RTL=!0)},setExistHours:function(t,e,r,n){var o=this,i={},a=[];e.forEach((function(e){o.codeDescription.find((function(t){return t.code==e.empCode})).hourType,void 0==a.find((function(t){return t.code==e.empCode}))&&(i={empId:t.empId,lastName:t.lastName,firstName:t.firstName,ageHours:o.getAgeHours(t.birthDate),isMother:o.getIsMother(t.mother),code:e.empCode,codeDescription:o.getCodeDescription(e.empCode),mossadId:r+"100",mossadName:n,begda:e.begda,endda:e.endda,Sunday:0,Monday:0,Tuesday:0,Wednesday:0,Thursday:0,Friday:0,totalHours:0,reformType:o.getReformType(e.empCode),systemMessages:""},a.push(i)),o.setHoursInDay(a.find((function(t){return t.code==e.empCode})),e.day,e.hours)})),this.dataToExport.push.apply(this.dataToExport,a)},sortWeeklyhoursTable:function(t){t.sort((function(t,e){return t.empCode-e.empCode}))},getWeeklyHoursHeaders:function(){var t={empId:"מספר עובד",lastName:"שם משפחה",firstName:"שם פרטי",ageHours:"שעות גיל",isMother:"מורה אם",code:"פיצול",codeDescription:"תאור פיצול",mossadId:"מוסד",mossadName:"שם מוסד",begda:"מתאריך",endda:"עד תאריך",Sunday:"א'",Monday:"ב'",Tuesday:"ג'",Wednesday:"ד",Thursday:"ה'",Friday:"ו'",totalHours:'סה"כ שעות פרונטליות',reformType:"רפורמה",systemMessages:"הערות מערכת"};return t},setHoursInDay:function(t,e,r){0==e?t.Sunday+=r:1==e?t.Monday+=r:2==e?t.Tuesday+=r:3==e?t.Wednesday+=r:4==e?t.Thursday+=r:5==e&&(t.Friday+=r),t.totalHours+=r},formattedDate:function(t){var e=new Date(t);return[e.getDate(),e.getMonth()+1,e.getFullYear()].map((function(t){return t<10?"0".concat(t):"".concat(t)})).join("/")},fromatGenderText:function(t){return"F"==t?"נקבה":"זכר"},formatMotherType:function(t){return 1==t?"כן":"לא"},getIsMother:function(t){return"לא"==t?0:1},getAgeHours:function(t){var e=new Date(t),r=new Date,n=new Date(r.getFullYear(),8,1);r.getUTCMonth()>8&&n.setFullYear(n.getFullYear()+1);var o=n.getFullYear()-e.getFullYear();return o<50?0:o>55?4:2},getCodeDescription:function(t){return this.codeDescription.find((function(e){return e.code==t})).codeDescription},getReformType:function(t){return"TODO"}}}},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,i=Object.create(o.prototype),a=new D(n||[]);return i._invoke=T(t,r,a),i}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=c;var f="suspendedStart",l="suspendedYield",d="executing",h="completed",p={};function m(){}function y(){}function g(){}var v={};v[i]=function(){return this};var w=Object.getPrototypeOf,E=w&&w(w(S([])));E&&E!==r&&n.call(E,i)&&(v=E);var b=g.prototype=m.prototype=Object.create(v);function L(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function x(t,e){function r(o,i,a,s){var c=u(t[o],t,i);if("throw"!==c.type){var f=c.arg,l=f.value;return l&&"object"===typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,s)}),(function(t){r("throw",t,a,s)})):e.resolve(l).then((function(t){f.value=t,a(f)}),(function(t){return r("throw",t,a,s)}))}s(c.arg)}var o;function i(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}this._invoke=i}function T(t,e,r){var n=f;return function(o,i){if(n===d)throw new Error("Generator is already running");if(n===h){if("throw"===o)throw i;return M()}r.method=o,r.arg=i;while(1){var a=r.delegate;if(a){var s=k(a,r);if(s){if(s===p)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var c=u(t,e,r);if("normal"===c.type){if(n=r.done?h:l,c.arg===p)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=h,r.method="throw",r.arg=c.arg)}}}function k(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,k(t,r),"throw"===r.method))return p;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=u(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,p;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,p):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function H(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function D(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(H,this),this.reset(!0)}function S(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){while(++o<t.length)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:M}}function M(){return{value:e,done:!0}}return y.prototype=b.constructor=g,g.constructor=y,g[s]=y.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},L(x.prototype),x.prototype[a]=function(){return this},t.AsyncIterator=x,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new x(c(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(b),b[s]="Generator",b[i]=function(){return this},b.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=S,D.prototype={constructor:D,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(I),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return s.type="throw",s.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),I(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;I(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:S(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),p}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},a15b:function(t,e,r){"use strict";var n=r("23e7"),o=r("44ad"),i=r("fc6a"),a=r("a640"),s=[].join,c=o!=Object,u=a("join",",");n({target:"Array",proto:!0,forced:c||!u},{join:function(t){return s.call(i(this),void 0===t?",":t)}})},d58f:function(t,e,r){var n=r("1c0b"),o=r("7b0b"),i=r("44ad"),a=r("50c4"),s=function(t){return function(e,r,s,c){n(r);var u=o(e),f=i(u),l=a(u.length),d=t?l-1:0,h=t?-1:1;if(s<2)while(1){if(d in f){c=f[d],d+=h;break}if(d+=h,t?d<0:l<=d)throw TypeError("Reduce of empty array with no initial value")}for(;t?d>=0:l>d;d+=h)d in f&&(c=r(c,f[d],d,u));return c}};t.exports={left:s(!1),right:s(!0)}},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=EmployeeInfo~ImportData.d7c3ebd9.js.map