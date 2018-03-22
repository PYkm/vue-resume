webpackJsonp([0],{"3J7R":function(t,e){},Jh54:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var s=n("VU/8")({name:"App"},a,!1,function(t){n("a+Fn")},null,null).exports,o=n("/ocq"),r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"nav"}},[n("ul",t._l(t.navs,function(e){return n("li",[n("a",{attrs:{href:"#"+e.name}},[t._v(t._s(e.name)+" ")])])}))])},staticRenderFns:[]};var c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:"mobile_nav"+t.vheight,attrs:{id:"mobile_nav"}},[n("a",{staticClass:"menu_button",on:{click:t.toggleMenuList}}),t._v(" "),n("a",{staticClass:"logo",attrs:{href:"/_"}}),t._v(" "),n("transition",{attrs:{name:"fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.list,expression:"list"}],staticClass:"list"},[n("ul",t._l(t.navs,function(e){return n("li",[n("a",{class:{actived:t.activeName==e.name},attrs:{href:"#"+e.name},on:{click:function(n){t.toggleClass(e.name)}}},[t._v(t._s(e.name)+" ")])])}))])])],1)},staticRenderFns:[]};var l={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"Home"}},[e("div",{staticClass:"home"},[e("p",[this._v("Jennifer"),e("br"),this._v("Chan")]),this._v(" "),e("h2",[this._v("A Web Front End Developer")]),this._v(" "),e("h2",[this._v("-------------------------")])])])}]};var d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"About"}},[n("a",{attrs:{href:"#About"}},[t._v("About")]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"col col_left"},[n("h2",[t._v("I like to: ")]),t._v(" "),t._l(t.hobbies,function(e){return n("div",{staticClass:"hobbies"},[n("span",{staticClass:"icon-checkmark2"}),t._v(" "+t._s(e.name)+"\n    ")])})],2),t._v(" "),n("div",{staticClass:"col col_right",attrs:{id:"skills"}},[n("h2",[t._v("My Skills: ")]),t._v(" "),t._l(t.skills,function(e){return n("div",{staticClass:"skill"},[n("div",{staticClass:"skillName"},[n("h3",[t._v(t._s(e.name))])]),t._v(" "),n("div",{staticClass:"outer"},[n("div",{class:"inner_"+e.score,attrs:{title:e.score+"%"}})])])})],2)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"intro"},[e("p",[this._v("Hi, I'm Jennifer Chan from China, after finished 4 years long undergraduate study and got a bachelor's degree in Computer Science and Technology from SIT at 2015. I have been working as a web designer, front-end developer almost 3 years based in Shanghai.")])])}]};var h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"Projects"}},[n("a",{attrs:{href:"#Projects"}},[t._v("Projects")]),t._v(" "),n("div",{attrs:{id:"projectBlk"}},t._l(t.projects,function(e){return n("div",{staticClass:"project"},[n("img",{attrs:{src:"static/projects/"+e.src},on:{click:function(n){t.showDetail(e.cid)}}}),t._v(" "),n("div",{staticClass:"mask",class:{hideIt:t.activeCid!=e.cid||""==t.activeCid}},[n("div",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],staticClass:"projectDetail",attrs:{id:"project"+e.cid}},[n("a",{staticClass:"close_button icon-shrink2",on:{click:function(e){t.HideDetail()}}}),t._v(" "),n("div",{staticClass:"title"},[n("h2",[t._v(t._s(e.name))]),t._v(" "),n("h3",[t._v(t._s(e.duration))])]),t._v(" "),n("div",{staticClass:"detail"},[n("div",{staticClass:"content"},[n("p",[t._v(t._s(e.content))]),t._v(" "),n("ol",t._l(e.lists,function(e){return n("li",[t._v(t._s(e))])})),t._v(" "),n("p",[t._v("URL: "+t._s(e.url))])]),t._v(" "),n("div",{staticClass:"description"},[n("p",[t._v(t._s(e.description))])])])])])])}))])},staticRenderFns:[]};var v={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"Work"}},[n("a",{attrs:{href:"#Work"}},[t._v("Work")]),t._v(" "),n("div",{staticClass:"container"},t._l(t.photos,function(e){return n("div",{staticClass:"image"},[n("div",{staticClass:"block",class:{imgBlk_left:e.cid%2,imgBlk_right:e.cid%2==0}},[n("img",{attrs:{src:e.src}})]),t._v(" "),n("div",{staticClass:"contents block",class:t.content},[n("div",{staticClass:"contentsInner"},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("h3",[t._v(t._s(e.duration))]),t._v(" "),n("p",[t._v(t._s(e.content))])])])])}))])},staticRenderFns:[]};var u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"Contact"}},[n("a",{attrs:{href:"#Contact"}},[t._v("Contacts")]),t._v(" "),n("div",{staticClass:"infos"},t._l(t.infos,function(e){return n("div",{staticClass:"info"},[n("span",{class:"icon-"+e.text[0]}),t._v(" "+t._s(e.text[1])+"\n  ")])}))])},staticRenderFns:[]};var m={name:"Index",data:function(){return{}},components:{"v-header":n("VU/8")({name:"Header",data:function(){return{navs:[{name:"Home"},{name:"About"},{name:"Work"},{name:"Projects"},{name:"Contact"}]}}},r,!1,function(t){n("dd1Q")},"data-v-2d704e9a",null).exports,"v-nav":n("VU/8")({name:"MobileNav",list:!1,data:function(){return{navs:[{name:"Home"},{name:"About"},{name:"Work"},{name:"Projects"},{name:"Contact"}],list:this.list,activeName:"Home",vheight:40}},methods:{toggleMenuList:function(){this.list=!this.list,40==this.vheight?this.vheight=195:this.vheight=40},toggleClass:function(t){this.list=!this.list,this.vheight=40,this.activeName=t}}},c,!1,function(t){n("iDHt")},"data-v-52b01bb2",null).exports,home:n("VU/8")({name:"Home",data:function(){return{}}},l,!1,function(t){n("ui/S")},"data-v-1ecd18f1",null).exports,about:n("VU/8")({name:"About",data:function(){return{hobbies:[{name:"read novels"},{name:"watch movies"},{name:"listen musics"},{name:"go skating"},{name:"watch American TV series"}],skills:[{name:"HTML5",score:80},{name:"CSS3",score:80},{name:"JavaScript",score:70},{name:"PhotoShop",score:80},{name:"Vue.js",score:60}]}}},d,!1,function(t){n("uhRr")},"data-v-07046ddd",null).exports,projects:n("VU/8")({name:"Projects",data:function(){return{activeCid:"",projects:[{cid:3,src:"SF-Express.jpg",name:"3D transition System Design of SF-Express",duration:"2017/10 -- 2018/03",content:"I am the only network engineer in the team, cpmpleted below tasks by myself:",lists:["Build Testing Server and Client Server(Windows Server 2012).","Apache Tomcat 9.0 installation and environment vonfiguration.","Use Eclipse, JSP, HTML, CSS and JS to programming the website Fron-end and Back-end. Made the website responsive and compatible with above IE 6","Download the scm manager's war package from its official website. create a connection with the website to set the priority for the users."],description:"Need to provide a CAD plug-in for SF-express, Since this pulg-in ask users to login, so need to make connection with the Active Domain Controller, I was mainly focus on the login module and the online management system",url:"Sorry, but not convenience to visit"},{cid:2,src:"Lightspeed.jpg",name:"Ad-hoc & Tracker Projects",duration:"2015/07 -- 2017/05",content:"I mainly focus on Hong Kong and Singapore Market. Below are my jobs:",lists:["Get a Quickly scan on the questionnaire, pick up logic problems, and get back to PM so they can ask Clients to update it","Use HTML, CSS, JS and Python to program, based on the final confirmed questionnaire","Do translation if necessary","Launch the project, help DP and PM to deal with the Data."],description:"Co-operated with TNS, Millward Brown, IpSOS and Other companies to do the online survey",url:"Sorry, no link can provide. But if you had ever doing a online Survey, that may made by me."},{cid:1,src:"2nd-OPPO-Mobile-Theme-Contest.JPG",name:"2nd OPPO Mobile Theme Contest",duration:"2014/03 -- 2014/04",content:"I've made:",lists:["Search the theme Standard for mobile","Learn the Standard of icon size and so on","Use CoreIDraw to draw icons","Use PhotoShop to do the layout","Finish the main and feature interfaces and upload to the ZCool Website"],description:"A competition that design the mobile theme hosted by OPPO.",url:"http://www.zcool.com.cn/work/ZMzUzNDExNg==.html"}]}},methods:{showDetail:function(t){this.activeCid=t},HideDetail:function(){this.activeCid=""}}},h,!1,function(t){n("P6gB")},"data-v-fac6ca86",null).exports,work:n("VU/8")({name:"Work",content:"content_left",data:function(){return{imgBlk:"imgBlk_left",content:"content_left",photos:[{cid:3,src:"static/logo/zwcad.jpg",title:"Network Develop Engineer",duration:"2017/07 -- 2018/04",content:"ZW-CAD is a CAD leader brand in China, the head office is based in Guangzhou. I worked as a Network Develop Engineer. I'm responsible for building Server, Constructing Website with both Front-end and Back-end and so on. I was participated in projects which is worked for SF-Express."},{cid:2,src:"static/logo/lsr.jpg",title:"Survey Programmer",duration:"2015/05 -- 2017/05 ",content:"Lightspeed Research is a company that provide highest-quality online research for clients, the head office is based in London. I worked as a SP for 2 years. I was responsible for providing high-quality Online questionnaire for our clinets, Doing the logic programming and data checking as well."},{cid:1,src:"static/logo/seedory.jpg",title:"Art Designer(Part-time)",duration:"2015/03 -- 2015/04",content:"Seedory is a cosmetics brand. I worked at this company as a Art Designer, I was responsible for taking photos of products, as well as the post processing. And I also maked the images which needs to publish on the Webchat or Taobao everyday. "}]}}},v,!1,function(t){n("Jh54")},"data-v-a270d36c",null).exports,contact:n("VU/8")({name:"Contact",data:function(){return{infos:[{text:["location2","Shanghai"]},{text:["mobile","+86 188 cccc cccc"]},{text:["envelop","jennifer.chan3@hotmail.com"]},{text:["earth","https://pykm.github.io/"]}]}}},u,!1,function(t){n("ZqGU")},"data-v-39b2ff3c",null).exports}},f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"All"}},[e("v-header"),this._v(" "),e("v-nav"),this._v(" "),e("home"),this._v(" "),e("about"),this._v(" "),e("work"),this._v(" "),e("projects"),this._v(" "),e("contact")],1)},staticRenderFns:[]};var p=n("VU/8")(m,f,!1,function(t){n("3J7R")},"data-v-0e3c938e",null).exports;i.a.use(o.a);var _=new o.a({routes:[{path:"/",name:"Index",component:p}]});i.a.config.productionTip=!1,new i.a({el:"#app",router:_,components:{App:s},template:"<App/>"})},P6gB:function(t,e){},ZqGU:function(t,e){},"a+Fn":function(t,e){},dd1Q:function(t,e){},iDHt:function(t,e){},uhRr:function(t,e){},"ui/S":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.3958757d80eea04e4a6a.js.map