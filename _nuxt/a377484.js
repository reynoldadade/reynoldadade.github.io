(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{240:function(e,t,n){var content=n(242);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(50).default)("1af339ee",content,!0,{sourceMap:!1})},241:function(e,t,n){"use strict";n(240)},242:function(e,t,n){var o=n(49)((function(i){return i[1]}));o.push([e.i,"/*purgecss start ignore*/\n\n/*purgecss end ignore*/",""]),o.locals={},e.exports=o},243:function(e,t,n){"use strict";n.r(t);var o={},r=n(36),l=Object(r.a)(o,(function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:" m-2 p-4 text-sm"},[n("div",{staticClass:"text-center text-5xl px-2 py-8 uppercase font-bold"},[e._v("\n    Other interesting facts\n  ")]),e._v(" "),n("div",{staticClass:"grid grid-cols-4 gap-6"},[n("div",{staticClass:"bg-white p-1 shadow "},[n("p",[e._v("\n        I am planning to build a unified healthcare management system, that\n        allows hospital to provide part or all their services to patients\n      ")])]),e._v(" "),n("div",{staticClass:"bg-white p-1 shadow "},[n("p",[e._v("\n        I believe there is no joy in a job that does not challenge you,\n        because there isn't a single reward it can give since there aren't\n        anymore questions it can ask you.\n      ")])])])])}],!1,null,null,null).exports,c=n(239),d={data:function(){return{socials:[{icon:"fab fa-linkedin fa-2x",url:"https://www.linkedin.com/in/reynold-osei-adade",name:"linkedin"},{icon:"fab fa-github fa-2x",url:"https://github.com/reynoldadade",name:"github"},{icon:"fab fa-medium fa-2x",url:"https://medium.com/@nana_adade",name:"medium"}]}},methods:{insertIntro:function(){var e=c.a.timeline();e.from("#name_div",{duration:1,opacity:.2,x:"100%",ease:"bounce"}),e.from("#message",{duration:2,ease:"steps",opacity:0,scale:.2})}},mounted:function(){this.insertIntro()}},m=Object(r.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"w-full flex justify-center h-screen",attrs:{id:"introduction"}},[n("div",{staticClass:"text-center flex flex-col items-center justify-center md:w-1/2 w-full m-2"},[n("div",{staticClass:"text-4xl uppercase font-semibold text-white ",attrs:{id:"name_div"}},[e._v("\n      Reynold Osei Adade\n    ")]),e._v(" "),e._m(0),e._v(" "),e._m(1),e._v(" "),n("div",{staticClass:"p-2 flex justify-center w-full text-white",attrs:{id:"socials"}},e._l(e.socials,(function(e){return n("a",{key:e.name,staticClass:"m-2",attrs:{href:e.url}},[n("i",{class:e.icon})])})),0)])])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"py-4 px-8 font-bold text-white",attrs:{id:"tagline"}},[n("p",[n("span",{staticClass:"text-4xl"},[e._v("W")]),e._v("elcome. I'm Reynold -- a frontend\n        designer and coder who creates for a living.\n      ")]),e._v(" "),n("p",[e._v("I am a craftman, that is the best way to describe my skills")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"py-4 px-8 text-sm bg-white m-4 relative",attrs:{id:"message"}},[n("div",{staticClass:"absolute right-0 top-0 transform rotate-45 text-red-500"},[n("span",[n("i",{staticClass:"fas fa-thumbtack"})])]),e._v(" "),n("p",[e._v("\n        I'm detail-oriented and i specialise to building complex systems, i\n        have been led in teams and i have led teams too, i have a knack for\n        getting up to speed pretty quickly, i have 5 year plus experience\n        working in the financial and geospatial and geomapping industries. I\n        strive to understand the technologies i use so if you want to build\n        with me. Just send me an email\n      ")])])}],!1,null,null,null).exports,h={methods:{skewCard:function(e){this.skewed?(c.a.to("#project-".concat(e),{duration:.3,rotate:0,ease:"bounce"}),this.skewed=!1):(c.a.to("#project-".concat(e),{duration:.3,rotate:-5,ease:"bounce"}),this.skewed=!0)}},data:function(){return{skewed:!1,projects:[{id:1,name:"Wainsight",description:"WaInsight is Walulel’s Geospatial Intelligence Platform. The platform enables Residential Real Estate market participants to understand the quality of every neighbourhood, postcode or zip code.",githubLink:"",url:"https://wa-insight.com",image:"/images/wainsight.png",technologies:["Vue","Nuxt","TailwindCSS","MapboxGL.js","SweetAlert","Chart.js","HighCharts.js","Vuex","SyncfusionVue"]},{id:2,name:"Secure",description:"Single Login application for all walulel products",githubLink:"",url:"https://dalex-gvive.firebaseapp.com/",image:"/images/wa-auth.png",technologies:["Vue","Nuxt","TailwindCSS","SweetAlert"]},{id:3,name:"Dalex GVIVE",description:"Allows verfication of passports, voters ID cards and ssnit, using an independent indentification check api",githubLink:"",url:"https://dalex-gvive.firebaseapp.com/",image:"/images/project-1.png",technologies:["Angular","firebase","w3CSS"]},{id:4,name:"Dalex FILMS",description:"The Loan posting and disbursement app for Dalex Finance this software seeks to ease the need for face to face interaction of Compliance officers and clients looking for loans. Using E-Form it allows compliance to process loans under 3 hours for clients and takes away bias because all check are automated and passed by the system",githubLink:"",url:"http://films.dalexhq.com/",image:"/images/project-2.png",technologies:["AngularJS","Bootstrap3","w3CSS","AwesomeFont"]},{id:5,name:"Dalex DP Portal",description:"To manage over 3000 sales personnel requires an app that just manages personnel. Built as an extension of FILMS it is designed to help Team Leaders manage and enroll new members of their teams and to manage team member transfers and promotions",githubLink:"",url:"http://dpms.dalexhq.com/",image:"/images/project-3.png",technologies:["Ionic"]},{id:6,name:"Dalex Recovery App",description:"What do you then do if loans given go bad. How do you track who has what loan and how do you provide the clients convenient ways to pay off their loans",githubLink:"",url:"http://197.221.85.146:6767/filmspwa/login",image:"/images/project-4.png",technologies:["Ionic"]},{id:7,name:"Dalex Eligibility App",description:"Built for Dalex Finance and hosted on a Linux Server built with Django, this is the main quality check system used to validate all clients that require loans, it removes all manual compliance tasks on loans",githubLink:"",url:"http://197.221.85.146/",image:"/images/project-5.png",technologies:["Django","Bootstrap"]}]}}},f=Object(r.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"p-4 h-full  m-2",attrs:{id:"projects"}},[n("div",{staticClass:"text-center text-5xl px-2 py-8 uppercase font-bold text-white"},[e._v("\n    Projects\n  ")]),e._v(" "),n("div",{staticClass:"h-full grid md:grid-cols-4 gap-4 grid-cols-1"},e._l(e.projects,(function(t){return n("div",{key:t.id,staticClass:"bg-white  shadow p-2 relative flex flex-col cursor-pointer hover:shadow-lg",attrs:{id:"project-"+t.id},on:{click:function(n){return n.preventDefault(),e.skewCard(t.id)}}},[n("div",{key:"thumbtack-"+t.id,staticClass:"absolute right-0 top-0 transform rotate-45 text-red-500 z-50",attrs:{id:"thumbtack-"+t.id}},[e._m(0,!0)]),e._v(" "),n("div",{staticClass:"font-semibold p-1 "},[n("a",{staticClass:"hover:underline",attrs:{href:t.url,target:"_blank",rel:"noopener noreferrer"}},[e._v("\n          "+e._s(t.name))])]),e._v(" "),n("div",{staticClass:"h-64 border-2 border-black"},[n("img",{staticClass:"w-full h-full",attrs:{src:t.image,alt:""}})]),e._v(" "),n("div",{staticClass:"flex flex-col justify-between flex-grow"},[n("div",[n("div",{staticClass:"p-2 text-sm"},[e._v("\n            "+e._s(t.description)+"\n          ")]),e._v(" "),n("div",{staticClass:"w-full flex flex-wrap"},e._l(t.technologies,(function(t,o){return n("div",{key:o,staticClass:" p-1 border-2 border-black m-1 font-semibold  text-xs "},[e._v("\n              "+e._s(t)+"\n            ")])})),0)]),e._v(" "),n("div",{staticClass:"p-2 text-sm font-bold"},[n("a",{staticClass:"hover:underline p-2",attrs:{href:t.url,target:"_blank",rel:"noopener noreferrer"}},[e._v("\n            check it out "),e._m(1,!0)])])])])})),0)])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("span",[t("i",{staticClass:"fas fa-thumbtack"})])},function(){var e=this.$createElement,t=this._self._c||e;return t("span",[t("i",{staticClass:"fas fa-arrow-right"})])}],!1,null,null,null).exports,v={data:function(){return{skills:[{name:"Vue.js / Nuxt.js",years:3,projects:5,description:"The framework I have the strongest proficiency in by far, I can join a team that uses this stack from day 1 and i can contribute and make a difference almost immediately."},{name:"Python",years:2,projects:2,description:"if you need basic scripts written, from finding creative ways of doing your excel or making tons of api calls at once, i do have alittle bit of experience in that"},{name:"Mapbox.js",years:1,projects:2,description:"This is google maps slightly annnoying and inverted brother, I can build with this to any level of complexity"},{name:"Tailwind",years:1,projects:2,description:"If you need to have a personal feel to your app for any reason, if you want to build without using javascript and alot of css, tailwind is the way to go and actually my personal favourite"},{name:"Bootstrap",years:5,projects:4,description:"My second choice in building for websites, I have experience in both its modern and legacy versions"},{name:"Angular",years:4,projects:4,description:"The framework with the longest experience in, my second most proficient, i can build enterprise level apps with it using its cleana and contained components and my original love"},{name:"React",years:2,projects:1,description:"Everyone loves react and i love it to, I have enough proficiency in this to easily insert myself into any project"},{name:"Scrum",years:4,projects:5,description:"Agile methodologies are one of the most effienct ways of running projects, I have enough experience in scrum to lead teams that require scrum restructuring, I am a certified scrum master and i can also apply this knowlege to easily insert myself into scrum practicing teams"}]}}},y={components:{Header:l,Intro:m,Skills:Object(r.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:" p-4 m-2 ",attrs:{id:"skills"}},[n("div",{staticClass:"text-center text-5xl px-2 py-8 uppercase font-bold text-white"},[e._v("\n    the skills\n  ")]),e._v(" "),n("div",{staticClass:"grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4 py-4"},e._l(e.skills,(function(t){return n("div",{key:t.name,staticClass:"p-2 bg-white  shadow relative"},[e._m(0,!0),e._v(" "),n("div",{staticClass:"font-bold py-2"},[e._v(e._s(t.name))]),e._v(" "),n("div",{staticClass:"text-sm p-1"},[e._v("\n        "+e._s(t.description)+"\n      ")]),e._v(" "),n("div",{staticClass:"flex w-full text-sm font-semibold"},[n("div",[e._v(e._s(t.years)+" "),n("span",{staticClass:"text-gray-500"},[e._v("years")])]),e._v(" "),n("div",{staticClass:"px-2"},[e._v("\n          "+e._s(t.projects)+" "),n("span",{staticClass:"text-gray-500"},[e._v("projects")])])])])})),0)])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"absolute right-0 top-0 transform rotate-45 text-red-500"},[t("span",[t("i",{staticClass:"fas fa-thumbtack"})])])}],!1,null,null,null).exports,Projects:f},mounted:function(){},methods:{moveCircle:function(e){c.a.to("#circle",{duration:.3,css:{left:e.pageX,top:e.pageY}})}}},x=(n(241),Object(r.a)(y,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"w-full"},[n("Intro"),e._v(" "),n("Skills"),e._v(" "),n("Projects"),e._v(" "),n("Header")],1)}),[],!1,null,null,null));t.default=x.exports}}]);