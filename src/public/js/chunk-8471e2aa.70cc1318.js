(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8471e2aa"],{2497:function(t,e,n){"use strict";var o=n("fd50"),a=n.n(o);a.a},"28ab":function(t,e,n){"use strict";var o=n("78c4"),a=n.n(o);a.a},2975:function(t,e,n){"use strict";var o=n("ee3f"),a=n.n(o);a.a},"3c05":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container nasswidth",attrs:{id:"Company-home"}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("center",[n("p",{staticClass:"head",attrs:{id:"top-nav"}})])],1)]),n("div",{staticClass:"row container-margin"},[n("div",{staticClass:"col"},[t.noadds?n("Noadds"):t._e(),t.manageProfile?n("ManageProfile"):t._e(),t.companyHome?n("div",t._l(t.cardsAdds,(function(t){return n("div",{key:t.id},[n("Ad",{attrs:{infoAd:t}})],1)})),0):t._e(),t.companyCandidates?n("div",t._l(t.cardsCandidates,(function(t){return n("div",{key:t.id},[n("Candidate",{attrs:{infoCandidate:t}})],1)})),0):t._e(),t.companyNotifications?n("div",t._l(t.cardsNotifications,(function(t){return n("div",{key:t.id},[n("Notification",{attrs:{infoNotification:t}})],1)})),0):t._e(),t.companyProfile?n("Profile"):t._e()],1)]),n("div",{staticClass:"row bottom-nav"},[n("div",{staticClass:"col",staticStyle:{padding:"0!important"}},[n("div",{staticClass:"row bottom"},[n("div",{staticClass:"col-5"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col",attrs:{id:"bottom_home_ads_button"},on:{click:t.adds_active}},[n("i",{staticClass:"fa fa-th-large",attrs:{id:"home_ads_button","aria-hidden":"true"}})]),n("div",{staticClass:"col",attrs:{id:"bottom_candidates_button"},on:{click:t.candidates_active}},[n("i",{staticClass:"fa fa-users",attrs:{id:"candidates_button","aria-hidden":"true"}})])])]),n("div",{staticClass:"col-2 pluswrapper"},[n("div",{staticClass:"plus",attrs:{id:"plus"}},[n("router-link",{attrs:{to:"/create-add"}},[t.companyHome?n("i",{staticClass:"fa fa-plus",staticStyle:{color:"white"},attrs:{"aria-hidden":"true"}}):t._e()]),t.companyCandidates?n("i",{staticClass:"fa fa-check",staticStyle:{color:"white"},attrs:{"aria-hidden":"true"},on:{click:t.acceptCandidates}}):t._e(),t.companyNotifications?n("i",{staticClass:"fa fa-trash",staticStyle:{color:"white"},attrs:{"aria-hidden":"true"}}):t._e(),t.companyProfile?n("i",{staticClass:"fa fa-floppy-o",staticStyle:{color:"white"},attrs:{"aria-hidden":"true"}}):t._e()],1)]),n("div",{staticClass:"col-5"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col",attrs:{id:"bottom_notifications_button"},on:{click:t.notifications_active}},[n("i",{staticClass:"fa fa-bell",attrs:{id:"notifications_button","aria-hidden":"true"}})]),n("div",{staticClass:"col",attrs:{id:"bottom_profile_button"},on:{click:t.profile_active}},[t.companyProfile?t._e():n("i",{staticClass:"fas fa-cog",staticStyle:{color:"#0D0C2C"},attrs:{id:"profile_button","aria-hidden":"true"}}),t.companyProfile?n("i",{staticClass:"fas fa-power-off",staticStyle:{color:"#EB5757"},attrs:{id:"profile_button","aria-hidden":"true"},on:{click:t.logout}}):t._e()])])])])])])])},a=[],i=(n("96cf"),n("1da1")),s=n("c0d6"),c=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},d=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"Noadds"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("img",{staticStyle:{"margin-top":"100px"},attrs:{src:"https://via.placeholder.com/300"}}),n("p",{staticClass:"body"},[t._v("You have no active ads.")])])])])])}],r={data:function(){return s["a"]},methods:{}},l=r,m=n("2877"),u=Object(m["a"])(l,c,d,!1,null,null,null),p=u.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Company_card"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("div",{staticClass:"card text-center"},[n("div",{staticClass:"card-header"},[t._v(" "+t._s(t.infoAd.job_position)+" ")]),n("div",{staticClass:"card-body"},[n("h5",{staticClass:"card-title"},[t._v(t._s(t.infoAd.job_description))]),n("p",{staticClass:"card-text"},[t._v(t._s(t.infoAd.your_skills))])])])])])])])},f=[],_=n("4667"),b={props:["infoAd"],data:function(){return s["a"]},mounted:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,_["a"].getOne(t.infoAd.id);case 2:t.cardAd=e.sent;case 3:case"end":return e.stop()}}),e)})))()},methods:{}},h=b,v=(n("2497"),Object(m["a"])(h,y,f,!1,null,null,null)),g=v.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container",on:{click:t.selectCandidate}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("div",{staticClass:"card text-center"},[n("div",{staticClass:"card-header"},[t._v(" "+t._s(t.infoCandidate.name)+" ")]),n("div",{staticClass:"card-body",attrs:{id:t.infoCandidate.id}},[n("h5",{staticClass:"card-title"},[t._v(t._s(t.infoCandidate.job_position))]),n("p",{staticClass:"card-text"},[t._v(t._s(t.infoCandidate.study))])])])])])])},E=[],B={props:["infoCandidate"],data:function(){return s["a"]},mounted:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,_["d"].getOne(t.infoCandidate.id);case 2:t.cardCandidate=e.sent;case 3:case"end":return e.stop()}}),e)})))()},methods:{selectCandidate:function(){this.selected?(this.selectedCandidate=0,this.selectedStudent=0,document.getElementById(this.infoCandidate.id).style.backgroundColor="#ffffff",this.selected=!1):(this.selected=this.infoCandidate.id,this.selectedCandidate=this.infoCandidate.id,this.selectedStudent=this.infoCandidate.student_id,document.getElementById(this.selected).style.backgroundColor="#D3D3D3")}}},I=B,w=(n("f0f9"),Object(m["a"])(I,C,E,!1,null,null,null)),x=w.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Notification"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("div",{staticClass:"card text-center"},[n("div",{staticClass:"card-header"},[t._v(" "+t._s(t.infoNotification.name)+" ")]),n("div",{staticClass:"card-body"},[n("h5",{staticClass:"card-title"},[t._v(t._s(t.infoNotification.job_position))]),n("p",{staticClass:"card-text"},[t._v(t._s(t.infoNotification.study))])])])])])])])},N=[],P={props:["infoNotification"],data:function(){return s["a"]},mounted:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,_["e"].getOne(t.infoNotification.id);case 2:t.cardNotification=e.sent,console.log(t.infoNotification.id);case 4:case"end":return e.stop()}}),e)})))()}},k=P,j=(n("28ab"),Object(m["a"])(k,T,N,!1,null,null,null)),S=j.exports,H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"ManageProfile"}},[n("div",{staticClass:"container"},[t._m(0),n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("center",[n("p",{staticClass:"down"},[t._v("Manage your profile now?")])]),n("center",[n("button",{staticClass:"button",attrs:{type:"button"},on:{click:t.Sure}},[t._v("Sure!")])]),n("center",[n("p",{staticClass:"down3",attrs:{id:"MaybeLater"},on:{click:t.adds_active2}},[t._v("Maybe later?")])])],1)])])])},A=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("img",{staticStyle:{"margin-top":"60px"},attrs:{src:"https://via.placeholder.com/300"}}),n("p",{staticClass:"up"},[t._v("Verification mail has been sent. "),n("br"),t._v(" You're almost good to go.")])])])}],M={data:function(){return s["a"]},methods:{adds_active2:function(){document.getElementById("home_ads_button").style.opacity="100%",document.getElementById("bottom_home_ads_button").style.borderTop="3px solid #6979F8",document.getElementById("bottom_candidates_button").style.borderTop="none",document.getElementById("bottom_notifications_button").style.borderTop="none",document.getElementById("bottom_profile_button").style.borderTop="none",document.getElementById("candidates_button").style.opacity="50%",document.getElementById("notifications_button").style.opacity="50%",document.getElementById("profile_button").style.opacity="50%",document.getElementById("top-nav").innerHTML="My adds",this.companyCandidates=!1,this.companyNotifications=!1,this.companyHome=!0,this.companyProfile=!1,this.manageProfile=!1},Sure:function(){this.manageProfile=!1,document.getElementById("profile_button").style.opacity="100%",document.getElementById("bottom_profile_button").style.borderTop="3px solid #6979F8",document.getElementById("bottom_home_ads_button").style.borderTop="none",document.getElementById("bottom_candidates_button").style.borderTop="none",document.getElementById("bottom_notifications_button").style.borderTop="none",document.getElementById("home_ads_button").style.opacity="50%",document.getElementById("candidates_button").style.opacity="50%",document.getElementById("notifications_button").style.opacity="50%",document.getElementById("top-nav").innerHTML="Profile",this.companyHome=!1,this.companyCandidates=!1,this.companyNotifications=!1,this.companyProfile=!0}}},O=M,R=(n("fd61"),Object(m["a"])(O,H,A,!1,null,null,null)),L=R.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"profile"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("div",{staticClass:"inputs"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.company_name,expression:"company_name"}],staticClass:"company",attrs:{id:"companyName",type:"text",placeholder:"company name"},domProps:{value:t.company_name},on:{input:function(e){e.target.composing||(t.company_name=e.target.value)}}})]),n("div",{staticClass:"inputs"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.company_address,expression:"company_address"}],staticClass:"company",attrs:{id:"adress",type:"text",placeholder:"company address"},domProps:{value:t.company_address},on:{input:function(e){e.target.composing||(t.company_address=e.target.value)}}})]),n("div",{staticClass:"inputs"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.company_town,expression:"company_town"}],staticClass:"company",attrs:{id:"town",type:"text",placeholder:"company town"},domProps:{value:t.company_town},on:{input:function(e){e.target.composing||(t.company_town=e.target.value)}}})]),n("form",{staticClass:"inputs"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.company_phoneNum,expression:"company_phoneNum"}],staticClass:"company",attrs:{id:"number",type:"text",placeholder:"Company phone"},domProps:{value:t.company_phoneNum},on:{input:function(e){e.target.composing||(t.company_phoneNum=e.target.value)}}})]),n("div",{staticClass:"inputs"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.company_email,expression:"company_email"}],staticClass:"company",attrs:{id:"email",type:"text",placeholder:"Company email"},domProps:{value:t.company_email},on:{input:function(e){e.target.composing||(t.company_email=e.target.value)}}})]),n("div",{staticClass:"inputs"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.company_description,expression:"company_description"}],staticClass:"company_description",attrs:{id:"companyDescription",type:"text",placeholder:"Company description"},domProps:{value:t.company_description},on:{input:function(e){e.target.composing||(t.company_description=e.target.value)}}})]),n("div",{staticClass:"inputs"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.company_social,expression:"company_social"}],staticClass:"company",attrs:{id:"companySocial",type:"text",placeholder:"Company social"},domProps:{value:t.company_social},on:{input:function(e){e.target.composing||(t.company_social=e.target.value)}}})])])]),t._m(0)])},F=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row contact"},[n("div",{staticClass:"col"},[n("div",{staticClass:"social"},[n("i",{staticClass:"fa fas-google d-inline",staticStyle:{color:"#db4a39"},attrs:{"aria-hidden":"true"}}),n("i",{staticClass:"fa fas-twitter d-inline social-align",staticStyle:{color:"#00acee"},attrs:{"aria-hidden":"true"}}),n("i",{staticClass:"fa fas-facebook-square d-inline social-align",staticStyle:{color:"#3b5998"},attrs:{"aria-hidden":"true"}}),n("i",{staticClass:"fa fas-linkedin d-inline social-align",staticStyle:{color:"#0e76a8"},attrs:{"aria-hidden":"true"}}),n("i",{staticClass:"fa fas-sign-out d-inline social-align-last",staticStyle:{color:"red"},attrs:{"aria-hidden":"true"}})])])])}],D={data:function(){return s["a"]},methods:{}},U=D,q=(n("3f1b"),Object(m["a"])(U,$,F,!1,null,"e9af871a",null)),J=q.exports,Y={data:function(){return s["a"]},mounted:function(){this.companyCandidates&&(document.getElementById("candidates_button").style.opacity="100%",document.getElementById("bottom_candidates_button").style.borderTop="#6979F8",document.getElementById("bottom_home_ads_button").style.borderTop="none",document.getElementById("bottom_notifications_button").style.borderTop="none",document.getElementById("bottom_profile_button").style.borderTop="none",document.getElementById("home_ads_button").style.opacity="50%",document.getElementById("notifications_button").style.opacity="50%",document.getElementById("profile_button").style.opacity="50%",document.getElementById("top-nav").innerHTML="Candidates",this.companyNotifications=!1,this.companyHome=!1,this.manageProfile=!1,this.companyProfile=!1,this.companyCandidates=!0),this.manageProfileAtStart&&(document.getElementById("profile_button").style.opacity="100%",document.getElementById("bottom_profile_button").style.borderTop="#6979F8",document.getElementById("bottom_home_ads_button").style.borderTop="none",document.getElementById("bottom_candidates_button").style.borderTop="none",document.getElementById("bottom_notifications_button").style.borderTop="none",document.getElementById("home_ads_button").style.opacity="50%",document.getElementById("candidates_button").style.opacity="50%",document.getElementById("notifications_button").style.opacity="50%",document.getElementById("top-nav").innerHTML="Profile",this.companyHome=!1,this.companyCandidates=!1,this.companyNotifications=!1,this.manageProfile=!1,this.companyProfile=!0),this.manageProfileAtStart||(document.getElementById("home_ads_button").style.opacity="100%",document.getElementById("bottom_home_ads_button").style.borderTop="#6979F8",document.getElementById("bottom_candidates_button").style.borderTop="none",document.getElementById("bottom_notifications_button").style.borderTop="none",document.getElementById("bottom_profile_button").style.borderTop="none",document.getElementById("candidates_button").style.opacity="50%",document.getElementById("notifications_button").style.opacity="50%",document.getElementById("profile_button").style.opacity="50%",document.getElementById("top-nav").innerHTML="My adds",this.companyCandidates=!1,this.companyNotifications=!1,this.companyProfile=!1,this.manageProfile=!1,this.companyHome=!0),this.companyHome&&(this.fetchAdds(),document.getElementById("top-nav").innerHTML="My adds")},methods:{fetchNotifications:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,_["c"].getUser();case 2:return n=e.sent,o=n.id,e.next=6,_["e"].getAll(o);case 6:t.cardsNotifications=e.sent;case 7:case"end":return e.stop()}}),e)})))()},fetchAdds:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,_["a"].getAllAdds();case 2:t.cardsAdds=e.sent;case 3:case"end":return e.stop()}}),e)})))()},fetchCandidates:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,_["c"].getUser();case 2:return n=e.sent,o=n.id,e.next=6,_["d"].getAll(o);case 6:t.cardsCandidates=e.sent;case 7:case"end":return e.stop()}}),e)})))()},logout:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,_["c"].logout();case 2:n=e.sent,console.log("Logged out",n),1==n&&t.$router.push({path:"/login"});case 5:case"end":return e.stop()}}),e)})))()},acceptCandidates:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,o,a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,_["c"].getUser();case 2:return n=e.sent,o=n.id,a=t.candidate_id,i={accepted:!0,company_id:o,student_id:t.selectedStudent},e.next=8,_["d"].updateOne(a,i);case 8:t.acceptedCandidate=e.sent;case 9:case"end":return e.stop()}}),e)})))()},adds_active:function(){document.getElementById("home_ads_button").style.opacity="100%",document.getElementById("bottom_home_ads_button").style.borderTop="#6979F8",document.getElementById("bottom_candidates_button").style.borderTop="none",document.getElementById("bottom_notifications_button").style.borderTop="none",document.getElementById("bottom_profile_button").style.borderTop="none",document.getElementById("candidates_button").style.opacity="50%",document.getElementById("notifications_button").style.opacity="50%",document.getElementById("profile_button").style.opacity="50%",document.getElementById("top-nav").innerHTML="My adds",this.fetchAdds(),this.companyCandidates=!1,this.companyNotifications=!1,this.companyProfile=!1,this.manageProfile=!1,this.companyHome=!0},candidates_active:function(){document.getElementById("candidates_button").style.opacity="100%",document.getElementById("bottom_candidates_button").style.borderTop="#6979F8",document.getElementById("bottom_home_ads_button").style.borderTop="none",document.getElementById("bottom_notifications_button").style.borderTop="none",document.getElementById("bottom_profile_button").style.borderTop="none",document.getElementById("home_ads_button").style.opacity="50%",document.getElementById("notifications_button").style.opacity="50%",document.getElementById("profile_button").style.opacity="50%",document.getElementById("top-nav").innerHTML="Candidates",this.fetchCandidates(),this.companyNotifications=!1,this.companyHome=!1,this.manageProfile=!1,this.companyProfile=!1,this.companyCandidates=!0},notifications_active:function(){document.getElementById("notifications_button").style.opacity="100%",document.getElementById("bottom_notifications_button").style.borderTop="#6979F8",document.getElementById("bottom_home_ads_button").style.borderTop="none",document.getElementById("bottom_candidates_button").style.borderTop="none",document.getElementById("bottom_profile_button").style.borderTop="none",document.getElementById("home_ads_button").style.opacity="50%",document.getElementById("candidates_button").style.opacity="50%",document.getElementById("profile_button").style.opacity="50%",document.getElementById("top-nav").innerHTML="Notifications",this.fetchNotifications(),this.companyHome=!1,this.companyCandidates=!1,this.manageProfile=!1,this.companyProfile=!1,this.companyNotifications=!0},profile_active:function(){document.getElementById("profile_button").style.opacity="100%",document.getElementById("bottom_profile_button").style.borderTop="#6979F8",document.getElementById("bottom_home_ads_button").style.borderTop="none",document.getElementById("bottom_candidates_button").style.borderTop="none",document.getElementById("bottom_notifications_button").style.borderTop="none",document.getElementById("home_ads_button").style.opacity="50%",document.getElementById("candidates_button").style.opacity="50%",document.getElementById("notifications_button").style.opacity="50%",document.getElementById("top-nav").innerHTML="Profile",this.companyHome=!1,this.companyCandidates=!1,this.companyNotifications=!1,this.manageProfile?this.companyProfile=!1:(this.companyProfile=!0,this.manageProfile=!1)},plus:function(){var t=document.getElementById("plus");t.onclick=function(){this.job_position="",this.job_description="",this.job_requirements="",this.job_pluses="",this.your_study="",this.your_skills=""}}},components:{Noadds:p,Ad:g,Candidate:x,Notification:S,ManageProfile:L,Profile:J}},V=Y,z=(n("2975"),Object(m["a"])(V,o,a,!1,null,null,null));e["default"]=z.exports},"3f1b":function(t,e,n){"use strict";var o=n("6e9b"),a=n.n(o);a.a},"6e9b":function(t,e,n){},"776a":function(t,e,n){},"78c4":function(t,e,n){},cb20:function(t,e,n){},ee3f:function(t,e,n){},f0f9:function(t,e,n){"use strict";var o=n("cb20"),a=n.n(o);a.a},fd50:function(t,e,n){},fd61:function(t,e,n){"use strict";var o=n("776a"),a=n.n(o);a.a}}]);
//# sourceMappingURL=chunk-8471e2aa.70cc1318.js.map