(function(t){function e(e){for(var a,r,o=e[0],c=e[1],u=e[2],d=0,l=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&l.push(s[r][0]),s[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);p&&p(e);while(l.length)l.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,r=1;r<n.length;r++){var o=n[r];0!==s[o]&&(a=!1)}a&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},r={app:0},s={app:0},i=[];function o(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-1aeeea33":"0ac025ea","chunk-3c1b9bd4":"52a88810","chunk-5a7dbfa0":"ce4acd52","chunk-5af7273a":"66b15684","chunk-619737c9":"f0c8078f","chunk-8471e2aa":"70cc1318","chunk-a24a1854":"6a919e7b","chunk-a353c77e":"9b40bcb4","chunk-fd4c86d4":"2ee7a184"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-1aeeea33":1,"chunk-3c1b9bd4":1,"chunk-5a7dbfa0":1,"chunk-5af7273a":1,"chunk-619737c9":1,"chunk-8471e2aa":1,"chunk-a24a1854":1,"chunk-a353c77e":1,"chunk-fd4c86d4":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-1aeeea33":"2a459d67","chunk-3c1b9bd4":"32f2feae","chunk-5a7dbfa0":"52818098","chunk-5af7273a":"b5a0558d","chunk-619737c9":"5ee5739c","chunk-8471e2aa":"05723321","chunk-a24a1854":"bb4fc6e8","chunk-a353c77e":"1716d849","chunk-fd4c86d4":"e0169527"}[t]+".css",s=c.p+a,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var u=i[o],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===a||d===s))return e()}var l=document.getElementsByTagName("style");for(o=0;o<l.length;o++){u=l[o],d=u.getAttribute("data-href");if(d===a||d===s)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var a=e&&e.target&&e.target.src||s,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[t],p.parentNode.removeChild(p),n(i)},p.href=s;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){r[t]=0})));var a=s[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,n){a=s[t]=[e,n]}));e.push(a[2]=i);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=o(t);var l=new Error;u=function(e){d.onerror=d.onload=null,clearTimeout(p);var n=s[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",l.name="ChunkLoadError",l.type=a,l.request=r,n[1](l)}s[t]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var p=d;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"300a":function(t,e,n){},4667:function(t,e,n){"use strict";n.d(e,"f",(function(){return o})),n.d(e,"a",(function(){return l})),n.d(e,"c",(function(){return p})),n.d(e,"e",(function(){return c})),n.d(e,"d",(function(){return u})),n.d(e,"b",(function(){return d}));n("d81d"),n("a9e3"),n("96cf");var a=n("1da1"),r=n("bc3a"),s=n.n(r),i=s.a.create({baseURL:"",timeout:1e3});i.interceptors.request.use((function(t){try{t.headers["Authorization"]="Bearer "+p.getToken()}catch(e){console.error(e)}return t}));var o={getOne:function(t){return Object(a["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i.get("/users",t);case 2:return n=e.sent,e.abrupt("return",n.data.map((function(t){return{id:t._id,email:t.student_email,posted_at:Number(t.postedAt),oib:t.student_oib,name:t.student_name,study:t.student_college}})));case 4:case"end":return e.stop()}}),e)})))()},replaceOne:function(t,e){return Object(a["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return console.log(t,e),n.prev=1,n.next=4,i.put("/users/".concat(t),e);case 4:n.next=9;break;case 6:n.prev=6,n.t0=n["catch"](1),console.log(n.t0);case 9:case"end":return n.stop()}}),n,null,[[1,6]])})))()},getAll:function(){return Object(a["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i.get("/users");case 2:return e=t.sent,n=e.data,n=n.map((function(t){return{id:t._id,email:t.student_email,posted_at:Number(t.postedAt),oib:t.student_oib,name:t.student_name}})),t.abrupt("return",n);case 6:case"end":return t.stop()}}),t)})))()},insertOne:function(t){return i.post("/users",t)}},c={getOne:function(t){return Object(a["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i.get("/notifications/".concat(t));case 2:return n=e.sent,a=n.data,e.abrupt("return",{id:a._id,student_name:a.student_name,job_description:a.job_description,job_requirements:a.job_requirements});case 5:case"end":return e.stop()}}),e)})))()},getAll:function(t){return Object(a["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i.get("/notifications/".concat(t));case 2:return n=e.sent,a=n.data,a=a.map((function(t){return{id:t._id,job_position:t.job_description,name:t.student_name,study:t.your_study}})),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})))()},insertOne:function(t){return i.post("/notifications",t)}},u={getOne:function(t){return Object(a["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i.get("/candidates/".concat(t));case 2:return n=e.sent,a=n.data,e.abrupt("return",{id:a._id,student_name:a.student_name,job_description:a.job_description,job_requirements:a.job_requirements});case 5:case"end":return e.stop()}}),e)})))()},updateOne:function(t,e){return Object(a["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,i.patch("/candidates/".concat(t),e);case 2:return a=n.sent,n.abrupt("return",a.data);case 4:case"end":return n.stop()}}),n)})))()},getAll:function(t){return Object(a["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i.get("/candidates/".concat(t));case 2:return n=e.sent,a=n.data,a=a.map((function(t){return{id:t._id,student_id:t.student_id,job_position:t.job_description,name:t.student_name,study:t.your_study}})),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})))()},insertOne:function(t){return i.post("/candidates",t)}},d={getOne:function(t){return Object(a["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i.get("/applications/".concat(t));case 2:return n=e.sent,a=n.data,e.abrupt("return",{id:a._id,company_id:a.company_id,company_name:a.company_name,job_description:a.job_description,job_requirements:a.job_requirements});case 5:case"end":return e.stop()}}),e)})))()},getAll:function(t){return Object(a["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i.get("/applications/".concat(t));case 2:return n=e.sent,a=n.data,a=a.map((function(t){return{id:t._id,company_id:t.company_id,company_name:t.company_name,job_position:t.job_description,name:t.company_name,study:t.your_study,accepted:t.accepted}})),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})))()},insertOne:function(t){return i.post("/applications",t)}},l={insertOne:function(t){return i.post("/ad",t)},GetAllAdds:function(t){return Object(a["a"])(regeneratorRuntime.mark((function e(){var n,a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={},t&&(n.params={_any:t}),e.next=4,i.get("/adds",n);case 4:return a=e.sent,r=a.data,r=r.map((function(t){return{id:t._id,job_position:t.job_position,job_description:t.job_description,job_requirements:t.job_requirements,job_offers:t.job_offers,your_skills:t.your_skills,your_study:t.your_study,postedAt:Number(t.postedAt)}})),e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})))()},getAllAdds:function(){return Object(a["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i.get("/adds");case 2:return e=t.sent,n=e.data,n=n.map((function(t){return{id:t._id,job_position:t.job_position,job_description:t.job_description,job_requirements:t.job_requirements,job_offers:t.job_offers,your_skills:t.your_skills,your_study:t.your_study,postedAt:Number(t.postedAt)}})),t.abrupt("return",n);case 6:case"end":return t.stop()}}),t)})))()},getOne:function(t){return Object(a["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i.get("/adds/".concat(t));case 2:return n=e.sent,a=n.data,e.abrupt("return",{id:a._id,company_name:a.company_name,company_id:a.company_id,job_position:a.job_position,job_description:a.job_description,job_requirements:a.job_requirements,job_offers:a.job_offers,your_skills:a.your_skills,your_study:a.your_study,postedAt:Number(a.postedAt)});case 5:case"end":return e.stop()}}),e)})))()}},p={login:function(t,e,n){return Object(a["a"])(regeneratorRuntime.mark((function a(){var r,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,i.post("/auth",{username:t,password:e,authorized:n});case 2:return r=a.sent,s=r.data,localStorage.setItem("user",JSON.stringify(s)),a.abrupt("return",!0);case 6:case"end":return a.stop()}}),a)})))()},logout:function(){return localStorage.removeItem("user"),!0},getUser:function(){return JSON.parse(localStorage.getItem("user"))},getToken:function(){var t=p.getUser();return!(!t||!t.token)&&t.token},authenticated:function(){var t=p.getUser();return!(!t||!t.token)},state:{get authenticated(){return this.authenticated()}}}},"4e4e":function(t,e,n){"use strict";var a=n("d974"),r=n.n(a);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t.access?n("router-view"):n("Access")],1)},s=[],i=(n("96cf"),n("1da1")),o=n("c0d6"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"Access"}},[n("div",{staticClass:"container"},[t._m(0),n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("button",{staticStyle:{border:"none","background-color":"#FFFFFF"},on:{click:t.studentAuth}},[n("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"/Login"}},[n("center",[n("p",{staticClass:"access-component"},[t._v("I'm a student. "),n("br"),t._v("I need a job!")])])],1)],1)])]),n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("button",{staticStyle:{border:"none","background-color":"#FFFFFF"},on:{click:t.companyAuth}},[n("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"/Login"}},[n("center",[n("p",{staticClass:"access-component"},[t._v(" I own a company. "),n("br"),t._v(" I'm looking for a student")])])],1)],1)])])])])},u=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("p",{staticClass:"access-head"},[t._v("Your position")])])])}],d={data:function(){return o["a"]},methods:{studentAuth:function(){this.authorized=1,this.access=!0},companyAuth:function(){this.authorized=2,this.access=!0}}},l=d,p=(n("925a"),n("2877")),m=Object(p["a"])(l,c,u,!1,null,null,null),f=m.exports,h=n("4667"),v={components:{Access:f},data:function(){return o["a"]},mounted:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,h["c"].getUser();case 2:return n=e.sent,e.next=5,h["c"].authenticated();case 5:a=e.sent,t.access=a,console.log("User ID: ",n.id);case 8:case"end":return e.stop()}}),e)})))()}},_=v,b=(n("5c0b"),Object(p["a"])(_,r,s,!1,null,null,null)),g=b.exports,y=(n("caad"),n("d3b7"),n("8c4f")),C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"student_home",attrs:{id:"student_home"}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("div",{staticClass:"student_home-nav"},[n("div",{staticClass:"row"},[n("img",{staticClass:"logo",attrs:{src:"https://via.placeholder.com/50"}}),n("div",{staticClass:"col home-left",attrs:{id:"home-left"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchTerm,expression:"searchTerm"}],attrs:{id:"searchBar",type:"text",placeholder:"Search..."},domProps:{value:t.searchTerm},on:{input:function(e){e.target.composing||(t.searchTerm=e.target.value)}}}),t.profileActive?t._e():n("i",{staticClass:"fa fa-search",attrs:{id:"searchIcon","aria-hidden":"true"},on:{click:t.showSearch}})]),t._m(0),n("div",{staticClass:"col home-right",attrs:{id:"home-right"}},[t.profileActive?t._e():n("i",{staticClass:"fa fa-filter",attrs:{id:"searchIcon","aria-hidden":"true"},on:{click:t.showFilter}})]),n("div",{staticClass:"col webNavBar"},[n("ul",{staticClass:"navBarList"},[n("li",{staticClass:"d-inline"},[n("i",{staticClass:"fa fa-home",attrs:{"aria-hidden":"true"},on:{click:t.home_active}})]),n("li",{staticClass:"d-inline"},[n("i",{staticClass:"fa fa-folder",attrs:{"aria-hidden":"true"},on:{click:t.folder_active}})]),n("li",{staticClass:"d-inline"},[n("i",{staticClass:"fa fa-cog",attrs:{"aria-hidden":"true"},on:{click:t.cog_active}})])])])])])])]),t.profileActive?t._e():n("div",{staticClass:"row webSearchBar"},[n("div",{staticClass:"col"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchTerm,expression:"searchTerm"}],attrs:{id:"searchBarWeb",type:"text",placeholder:"Search..."},domProps:{value:t.searchTerm},on:{input:function(e){e.target.composing||(t.searchTerm=e.target.value)}}}),t.searchBarWebActive?n("i",{staticClass:"fa fa-times searchWeb",attrs:{id:"closeIconWeb","aria-hidden":"true"},on:{click:t.openSearchWeb}}):t._e(),t.searchBarWebActive?t._e():n("i",{staticClass:"fa fa-search searchWeb",attrs:{id:"searchIconWeb","aria-hidden":"true"},on:{click:t.openSearchWeb}})])]),t.profileActive?t._e():n("div",{staticClass:"row webFilterBar"},[n("div",{staticClass:"col"},[t.searchBarWebActive?t._e():n("i",{staticClass:"fa fa-filter filterWeb",attrs:{"aria-hidden":"true",id:"expander"},on:{click:t.showFilter}}),t.searchBarWebActive?n("i",{staticClass:"fa fa-search searchTermWeb",attrs:{"aria-hidden":"true",id:"expander"},on:{click:t.fetchStudentCards}}):t._e()])]),n("div",{staticClass:"home_student",attrs:{id:"home_container"}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[t.homeActive?n("div",{staticClass:"col-12"},t._l(t.cardsStudents,(function(t){return n("div",{key:t.id},[n("Student_card",{staticClass:"Student-card",attrs:{id:t.id,infoAdd:t}})],1)})),0):t._e()]),t.applicationsActive?n("div",{staticClass:"col-12"},t._l(t.cardsApplications,(function(t){return n("div",{key:t.id},[n("Application_card",{attrs:{infoApplication:t}})],1)})),0):t._e(),t.profileActive?n("div",{staticClass:"col-12"},[t.profileSetupComplete?t._e():n("Manage_profile"),t.profileSetupComplete?n("Student_profile"):t._e()],1):t._e()])]),n("div",{staticClass:"row bottom-section"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"row bottom-nav"},[n("div",{staticClass:"col-4 bottom-nav_button",attrs:{id:"bottom-home_button"},on:{click:t.home_active}},[t._m(1)]),n("div",{staticClass:"col-4 bottom-nav_button",attrs:{id:"bottom-folder_button"},on:{click:t.folder_active}},[t._m(2)]),n("div",{staticClass:"col-4 bottom-nav_button",attrs:{id:"bottom-cog_button"},on:{click:t.cog_active}},[t._m(3)])])])]),n("div",{attrs:{id:"filter"}},[n("div",{staticClass:"row"},[t._m(4),t._m(5),n("div",{staticClass:"col filter-top_small",on:{click:t.showFilter}},[n("h5",[t._v("CLOSE")])])]),t._m(6),t._m(7)])])},k=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col home-mid",attrs:{id:"home-mid"}},[n("p",{attrs:{id:"navigationText"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"button-select",attrs:{href:"#"}},[n("i",{staticClass:"fa fa-home",attrs:{id:"home-button","aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"button-select",attrs:{href:"#"}},[n("i",{staticClass:"fa fa-folder",attrs:{id:"folder-button","aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"button-select",attrs:{href:"#"}},[n("i",{staticClass:"fa fa-cog",attrs:{id:"cog-button","aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col filter-top_small"},[n("h5",[t._v("ALL")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col filter-top_big"},[n("h3",[t._v("Filters")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-4"},[n("label",{staticClass:"filter-label"},[t._v("Job positions")])]),n("div",{staticClass:"col-6 filter-label_line"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col",staticStyle:{"margin-top":"30px"}},[n("label",{staticClass:"container input-checkbox"},[t._v("Frontend developer "),n("input",{attrs:{type:"checkbox",value:"Frontend developer"}}),n("span",{staticClass:"checkmark"})]),n("label",{staticClass:"container input-checkbox"},[t._v("Backend developer "),n("input",{attrs:{type:"checkbox",value:"Backend developer"}}),n("span",{staticClass:"checkmark"})]),n("label",{staticClass:"container input-checkbox"},[t._v("Accountant "),n("input",{attrs:{type:"checkbox",value:"Accountant"}}),n("span",{staticClass:"checkmark"})]),n("label",{staticClass:"container input-checkbox"},[t._v("Administrator "),n("input",{attrs:{type:"checkbox",value:"Administrator"}}),n("span",{staticClass:"checkmark"})])])])}],w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"candidate-overview"},[n("div",{staticClass:"background-image"},[t._m(0),n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("div",{staticClass:"text-center d-block"},[n("h4",[t._v(" "+t._s(t.student_name))])]),n("div",{staticClass:"text-center d-block"},[n("h5",[t._v(t._s(t.student_college))])]),n("div",{staticClass:"text-center d-block"},[n("h6",[t._v(t._s(t.student_birth))])])])])]),n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("div",{staticClass:"data"},[t._m(1),n("div",{staticClass:"data1"},[n("p",[t._v(t._s(t.student_skills))])]),t._m(2),n("div",{staticClass:"data2"},[n("p",[t._v(t._s(t.student_personal))])])]),n("div",{staticClass:"row contact"},[n("div",{staticClass:"col"},[n("div",{staticClass:"contact"},[n("i",{staticClass:"fa fa-map-marker",attrs:{"aria-hidden":"true"}},[t._v(t._s(t.student_address))]),n("i",{staticClass:"fa fa-phone",attrs:{"aria-hidden":"true"}},[t._v(t._s(t.student_phoneNum))]),n("i",{staticClass:"fa fa-envelope",attrs:{"aria-hidden":"true"}},[t._v(t._s(t.student_email))])])])]),t._m(3),n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("button",{staticClass:"editButton",on:{click:t.editProfile}},[t._v("Edit")])])]),n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("button",{staticClass:"logoutButton",on:{click:t.logout}},[t._v("Logout")])])])])])])},A=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col profile-picture"},[n("img",{staticStyle:{"border-radius":"50%","margin-top":"3%"},attrs:{src:"https://via.placeholder.com/160"}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lines"},[n("b",[t._v("Professional skills")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lines"},[n("b",[t._v("Personal skills")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row contact"},[n("div",{staticClass:"col"},[n("div",{staticClass:"social"},[n("i",{staticClass:"fa fa-google d-inline",staticStyle:{color:"#db4a39",margin:"0"},attrs:{"aria-hidden":"true"}}),n("i",{staticClass:"fa fa-twitter d-inline social-align",staticStyle:{color:"#00acee"},attrs:{"aria-hidden":"true"}}),n("i",{staticClass:"fa fa-facebook-square d-inline social-align",staticStyle:{color:"#3b5998"},attrs:{"aria-hidden":"true"}}),n("i",{staticClass:"fa fa-linkedin d-inline social-align",staticStyle:{color:"#0e76a8"},attrs:{"aria-hidden":"true"}})])])])}],x={data:function(){return o["a"]},methods:{editProfile:function(){this.profileSetupComplete=!1,this.$router.push({name:"Student setup profile"})},logout:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,h["c"].logout();case 2:n=e.sent,console.log("Logged out",n),1==n&&(t.$router.push({path:"/login"}),t.access=!1);case 5:case"end":return e.stop()}}),e)})))()}}},j=x,E=(n("bc5c"),Object(p["a"])(j,w,A,!1,null,"4d3919af",null)),B=E.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"ManageProfile"}},[n("div",{staticClass:"container"},[t._m(0),n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("center",[n("p",{staticClass:"down"},[t._v("Manage your profile now?")])]),n("center",[n("router-link",{attrs:{to:"/setup"}},[n("button",{staticClass:"button",attrs:{type:"button"}},[t._v("Sure!")])])],1),n("center",[n("p",{staticClass:"down3",attrs:{id:"MaybeLater"},on:{click:t.adds_active2}},[t._v("Maybe later?")])])],1)])])])},I=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("img",{staticStyle:{"margin-top":"60px"},attrs:{src:"https://via.placeholder.com/300"}}),n("p",{staticClass:"up"},[t._v("Verification mail has been sent. "),n("br"),t._v(" You're almost good to go.")])])])}],O={data:function(){return o["a"]},methods:{adds_active2:function(){document.getElementById("home-button").style.opacity="100%",document.getElementById("bottom-home_button").style.borderTop="3px solid #6979F8",document.getElementById("bottom-folder_button").style.borderTop="none",document.getElementById("bottom-cog_button").style.borderTop="none",document.getElementById("folder-button").style.opacity="50%",document.getElementById("cog-button").style.opacity="50%",document.getElementById("navigationText").innerHTML="Home",this.homeActive=!0,this.applicationsActive=!1,this.profileActive=!1}}},T=O,R=(n("83d4"),Object(p["a"])(T,S,I,!1,null,null,null)),F=R.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Application_card"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("div",{staticClass:"card text-center"},[n("div",{staticClass:"card-header"},[t._v(" "+t._s(t.infoApplication.name)+" ")]),n("div",{staticClass:"card-body"},[n("h5",{staticClass:"card-title"},[t._v(t._s(t.infoApplication.job_position))]),n("div",{class:t.buttonAccepted?"buttonAcceptedPositive":"buttonAcceptedNegative"},[t._v("Accepted")])]),n("div",{staticClass:"card-footer text-muted"},[t._v(" "+t._s(t.infoApplication.study)+" ")])])])])])])},P=[],$={props:["infoApplication"],data:function(){return{buttonAccepted:!1}},mounted:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,h["b"].getOne(t.infoApplication.id);case 2:t.cardApplication=e.sent,console.log(t.infoApplication),1==t.infoApplication.accepted?t.buttonAccepted=!0:t.buttonAccepted=!1;case 5:case"end":return e.stop()}}),e)})))()}},N=$,W=(n("5ed9"),Object(p["a"])(N,L,P,!1,null,"54a23cb2",null)),q=W.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Student_card"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("div",{staticClass:"card text-center"},[n("div",{staticClass:"card-header"},[t._v(" "+t._s(this.cardStudent.company_name)+" ")]),n("div",{staticClass:"card-body"},[n("h5",{staticClass:"card-title"},[t._v(t._s(t.infoAdd.job_position))]),n("p",{staticClass:"card-text"},[t._v(t._s(t.infoAdd.job_description))]),n("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"Student full ad",params:{id:this.infoAdd.id}}}},[t._v("Details")])],1),n("div",{staticClass:"card-footer text-muted"},[t._v(" "+t._s(this.cardStudent.your_study)+" ")])])])])])])},H=[],z={props:["infoAdd"],data:function(){return o["a"]},mounted:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,h["a"].getOne(t.infoAdd.id);case 2:t.cardStudent=e.sent;case 3:case"end":return e.stop()}}),e)})))()}},U=z,D=(n("4e4e"),Object(p["a"])(U,M,H,!1,null,"57b9c5d6",null)),J=D.exports,G={name:"Student_home",data:function(){return o["a"]},components:{Student_card:J,Application_card:q,Manage_profile:F,Student_profile:B},mounted:function(){document.getElementById("navigationText").innerHTML="Home",this.homeActive&&(this.fetchAllStudentCards(),document.getElementById("navigationText").innerHTML="Home"),!0===this.profileActive&&(document.getElementById("navigationText").innerHTML="Profile")},methods:{fetchStudentCards:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,h["a"].GetAllAdds(t.searchTerm);case 2:t.cardsStudents=e.sent;case 3:case"end":return e.stop()}}),e)})))()},fetchAllStudentCards:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,h["a"].getAllAdds();case 2:t.cardsStudents=e.sent;case 3:case"end":return e.stop()}}),e)})))()},fetchAplications:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,h["c"].getUser();case 2:return n=e.sent,a=n.id,e.next=6,h["b"].getAll(a);case 6:t.cardsApplications=e.sent,console.log(t.cardsApplications);case 8:case"end":return e.stop()}}),e)})))()},showSearch:function(){var t=document.getElementById("home_container");window.onclick=function(e){e.target==t&&(t.style.display="none")},document.getElementById("searchBar").style.display="block",document.getElementById("home-mid").style.display="none",document.getElementById("home-right").style.display="none",document.getElementById("searchBar").style.marginLeft="50px",document.getElementById("searchBar").style.zIndex="10",document.getElementById("searchBar").style.marginTop="10px",document.getElementById("searchBar").style.marginBottom="20px",document.getElementById("searchIcon").style.zIndex="10",document.getElementById("searchIcon").style.position="absolute",document.getElementById("searchIcon").style.left="15px",document.getElementById("searchIcon").style.top="15px"},openSearchWeb:function(){this.searchBarWebActive?(document.getElementById("searchBarWeb").style.display="none",this.searchBarWebActive=!1):(document.getElementById("searchBarWeb").style.display="block",this.searchBarWebActive=!0)},showFilter:function(){!1===this.filterOpen?(document.getElementById("filter").style.display="block",this.filterOpen=!0):(this.filterOpen=!1,"block"===document.getElementById("filter").style.display&&!1===this.filterOpen&&(document.getElementById("filter").style.display="none"))},home_active:function(){document.getElementById("home-button").style.opacity="100%",document.getElementById("bottom-home_button").style.borderTop="3px solid #6979F8",document.getElementById("bottom-folder_button").style.borderTop="none",document.getElementById("bottom-cog_button").style.borderTop="none",document.getElementById("folder-button").style.opacity="50%",document.getElementById("cog-button").style.opacity="50%",document.getElementById("navigationText").innerHTML="Home",this.fetchAllStudentCards(),this.homeActive=!0,this.applicationsActive=!1,this.profileActive=!1},folder_active:function(){document.getElementById("folder-button").style.opacity="100%",document.getElementById("bottom-folder_button").style.borderTop="3px solid #6979F8",document.getElementById("bottom-home_button").style.borderTop="none",document.getElementById("bottom-cog_button").style.borderTop="none",document.getElementById("home-button").style.opacity="50%",document.getElementById("cog-button").style.opacity="50%",document.getElementById("navigationText").innerHTML="Applications",this.fetchAplications(),this.applicationsActive=!0,this.homeActive=!1,this.profileActive=!1},cog_active:function(){document.getElementById("cog-button").style.opacity="100%",document.getElementById("bottom-cog_button").style.borderTop="3px solid #6979F8",document.getElementById("bottom-folder_button").style.borderTop="none",document.getElementById("bottom-home_button").style.borderTop="none",document.getElementById("folder-button").style.opacity="50%",document.getElementById("home-button").style.opacity="50%",document.getElementById("navigationText").innerHTML="Profile",this.profileActive=!0,this.homeActive=!1,this.applicationsActive=!1}}},Y=G,K=(n("95b4"),Object(p["a"])(Y,C,k,!1,null,"26e3bb0a",null)),V=K.exports;a["a"].use(y["a"]);var Q=[{path:"/signup",name:"Signup",component:function(){return n.e("chunk-a24a1854").then(n.bind(null,"34c3"))}},{path:"/login",name:"Login",component:function(){return n.e("chunk-5a7dbfa0").then(n.bind(null,"a55b"))}},{path:"/student",name:"Student home",component:V,beforeEnter:function(t,e,n){var a=h["c"].getUser();2!=a.authorized?n():n("/company")}},{path:"/ad/:id",name:"Student full ad",component:function(){return n.e("chunk-5af7273a").then(n.bind(null,"37bd"))}},{path:"/setup",name:"Student setup profile",component:function(){return n.e("chunk-619737c9").then(n.bind(null,"2a12"))}},{path:"/company",name:"Company-home",component:function(){return n.e("chunk-8471e2aa").then(n.bind(null,"3c05"))},beforeEnter:function(t,e,n){var a=h["c"].getUser();1!=a.authorized?n():n("/student")}},{path:"/company-profile-question",name:"Company-profile-question",component:function(){return n.e("chunk-a353c77e").then(n.bind(null,"79ce"))}},{path:"/create-add",name:"Create-add",component:function(){return n.e("chunk-1aeeea33").then(n.bind(null,"2208"))}},{path:"/preview-add",name:"Preview-add",component:function(){return n.e("chunk-fd4c86d4").then(n.bind(null,"fa2b"))}},{path:"/candidate-overview",name:"Candidate-overview",component:function(){return n.e("chunk-3c1b9bd4").then(n.bind(null,"a7fa"))}}],X=new y["a"]({routes:Q});X.beforeEach((function(t,e,n){var a=["/login","/signup"],r=!a.includes(t.path),s=h["c"].getUser();s||!r?n():n("/login")}));var Z=X;a["a"].config.productionTip=!1,new a["a"]({router:Z,render:function(t){return t(g)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("9c0c"),r=n.n(a);r.a},"5ed9":function(t,e,n){"use strict";var a=n("6ffd"),r=n.n(a);r.a},"6c62":function(t,e,n){},"6ffd":function(t,e,n){},7173:function(t,e,n){},"83d4":function(t,e,n){"use strict";var a=n("f7b5"),r=n.n(a);r.a},"925a":function(t,e,n){"use strict";var a=n("300a"),r=n.n(a);r.a},"95b4":function(t,e,n){"use strict";var a=n("6c62"),r=n.n(a);r.a},"9c0c":function(t,e,n){},bc5c:function(t,e,n){"use strict";var a=n("7173"),r=n.n(a);r.a},c0d6:function(t,e,n){"use strict";e["a"]={searchTerm:"",email:"",password:"",passwordConfirm:"",access:"",authorized:0,noadds:!1,selectedAdd:"",manageProfileAtStart:!1,manageProfile:!1,filterOpen:!1,searchBarWebActive:!1,homeActive:!0,applicationsActive:!1,profileActive:!1,buttonAccepted:!1,currentStep:1,maxStep:2,profileSetupComplete:!1,companyHome:!0,companyCandidates:!1,companyNotifications:!1,companyProfile:!1,step1:!0,step2:!0,step3:!0,cardsNotifications:[],cardNotification:"",cardsAdds:[],cardAd:"",newAd:null,adData:"",userData:"",cardsCandidates:[],cardCandidate:"",cardsStudents:[],cardStudent:"",cardsApplications:[],cardApplication:"",selected:!1,selectedCandidate:"",selectedStudent:"",your_study:"wwe",your_skills:"sve",job_position:"job position",job_description:"job description",job_requirements:"job requirements",job_offers:"What we offer to you",job_college:"Collage",job_skills:"Skills",postedAt:null,company_name_ad:"asdasda",company_position_ad:"asdasd",company_description_ad:"asdasd",company_photo_ad:"asdasd",student_name_ad:"asdasd",student_photo_ad:"asdasdasd",student_personal_ad:"asdasdas",student_skills_ad:"asdasdasd",student_dateof_ad:"03. 03. 2020.",student_age_ad:"22",student_name:"John",student_birth:"12. April 1989.",student_town:"Pula",student_email:"john@email.com",student_college:"Sveuciliste jurja dobrile u puli",student_skills:"javascript, c++, html, css",student_personal:"sports, music, dancing",student_phoneNum:"099239491",student_address:"Avenija marina drzica",student_photo:"photo",student_social:"facebook, Myspace, Twitter, LinkedIn",student_oib:"12312515",company_name:"Company name",company_address:"Avenija marina drzica",company_phoneNum:"0993133123",company_email:"company@email.com",company_description:"Description of company",company_social:"Facebook, MySpace, Twitter, LinkedIn",company_photo:"photo",company_town:"Tokyo",company_oib:"12312515"}},d974:function(t,e,n){},f7b5:function(t,e,n){}});
//# sourceMappingURL=app.e9b4378e.js.map