(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{19:function(e,a,t){},21:function(e,a,t){},38:function(e,a,t){e.exports=t(70)},43:function(e,a,t){},44:function(e,a,t){},51:function(e,a,t){},70:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(14),r=t.n(l),s=(t(43),t(44),t(45),t(8)),m=t(5);t(37);t(51);var o=t(24),i=t.n(o),u=function(){return c.a.createElement("div",{className:"side-menu"},c.a.createElement("div",{className:"mobile-nav d-lg-none"},c.a.createElement("button",{type:"button",className:"btn rounded-0 shadow-none float-right p-0 menu_open_btn",onClick:function(){i()("#mobile_menu").addClass("active_menu")}},c.a.createElement("div",{className:"line"}),c.a.createElement("div",{className:"line"}),c.a.createElement("div",{className:"line mb-0"}))),c.a.createElement("div",{className:"break d-lg-none"}),c.a.createElement("div",{className:"mobile-menu d-lg-none",id:"mobile_menu"},c.a.createElement("button",{type:"button",className:"btn rounded-0 shadow-none float-right p-0 menu_close_btn",onClick:function(){i()("#mobile_menu").removeClass("active_menu")}},c.a.createElement("div",{className:"line line_1"}),c.a.createElement("div",{className:"line line_2"})),c.a.createElement("div",{className:"links text-center"},c.a.createElement(s.c,{exact:!0,to:"/",activeClassName:"is-active"},"Home"),c.a.createElement(s.c,{exact:!0,to:"/about",activeClassName:"is-active"},"About"),c.a.createElement(s.c,{exact:!0,to:"/projects",activeClassName:"is-active"},"Projects"),c.a.createElement(s.c,{exact:!0,to:"/experience",activeClassName:"is-active"},"Experience"))),c.a.createElement("div",{className:"items d-none d-lg-block"},c.a.createElement(s.c,{exact:!0,to:"/",activeClassName:"is-active"},"Home"),c.a.createElement(s.c,{exact:!0,to:"/about",activeClassName:"is-active"},"About"),c.a.createElement(s.c,{exact:!0,to:"/projects",activeClassName:"is-active"},"Projects"),c.a.createElement(s.c,{exact:!0,to:"/experience",activeClassName:"is-active"},"Experience")))},d=(t(19),function(){return c.a.createElement("div",{className:"home"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12 text-center"},c.a.createElement("h1",{className:"text-uppercase name"},"abdullah al mamun"),c.a.createElement("h1",{className:"text-uppercase title"},"javascript developer")))))}),p=function(){return c.a.createElement("div",{className:"about"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12 text-right"},c.a.createElement("h1",{className:"text-uppercase name"},"about me"),c.a.createElement("h1",{className:"text-uppercase title"},"software engineer"),c.a.createElement("p",null,"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.")))))},E=t(4),b=t(12),N=t.n(b),f="https://portfolio-backend-app.herokuapp.com/api/",v=function(){var e=Object(n.useState)([]),a=Object(E.a)(e,2),t=a[0],l=a[1],r=Object(n.useState)(!1),s=Object(E.a)(r,2),m=s[0],o=s[1];Object(n.useEffect)((function(){i()}),[]);var i=function(){o(!0),N.a.get("".concat(f,"project")).then((function(e){l(e.data.projects),o(!1)}))};return c.a.createElement("div",{className:"projects about"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12 text-right"},c.a.createElement("h1",{className:"text-uppercase name"},"work"),c.a.createElement("h1",{className:"text-uppercase title"},"projects"))),m?c.a.createElement("div",{className:"text-center"},c.a.createElement("div",{className:"spinner-border text-white",role:"status"},c.a.createElement("span",{className:"sr-only"},"Loading..."))):c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12 mb-4"},t.map((function(e,a){return c.a.createElement("div",{className:"card project-card",key:a},c.a.createElement("div",{className:"card-body"},c.a.createElement("h3",null,e.name),c.a.createElement("p",null,"Entirely works on the client-side, behaves like actual micro blog, everything handled by client"),c.a.createElement("div",{className:"d-flex"},c.a.createElement("div",null,c.a.createElement("a",{href:e.repo_link,className:"btn btn-sm shadow-none"},c.a.createElement("i",{class:"fab fa-github text-muted"}))),c.a.createElement("div",{className:"pl-1"},c.a.createElement("a",{href:e.live_link,className:"btn btn-sm shadow-none"},c.a.createElement("i",{class:"fas fa-link text-muted"}))))))}))),c.a.createElement("div",{className:"col-12 text-center pt-4 pb-5"},c.a.createElement("a",{href:"https://github.com/Mamun-swe?tab=repositories",type:"button",className:"btn shadow-none show-more-btn"},"Show More")))))},h=function(){return c.a.createElement("div",{className:"experience about"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12 text-right"},c.a.createElement("h1",{className:"text-uppercase name"},"job"),c.a.createElement("h1",{className:"text-uppercase title"},"experience"),c.a.createElement("br",null),c.a.createElement("div",{className:"jobs"},c.a.createElement("div",{className:"job mb-5"},c.a.createElement("h3",{className:"mb-0 text-capitalize"},"Hear Us Project Inc. NFP"),c.a.createElement("h4",{className:"text-capitalize mb-0"},"software developer"),c.a.createElement("p",{className:"text-capitalize mb-0"},"Greater Chicago Area, USA"),c.a.createElement("p",null,"4 AUG, 2020 - Present")))))))},g=function(){return c.a.createElement("div",{className:"master main"},c.a.createElement(u,null),c.a.createElement(m.d,null,c.a.createElement(m.b,{exact:!0,path:"/",component:d}),c.a.createElement(m.b,{exact:!0,path:"/about",component:p}),c.a.createElement(m.b,{exact:!0,path:"/projects",component:v}),c.a.createElement(m.b,{exact:!0,path:"/experience",component:h})))},w=(t(21),t(16)),k=function(e){var a=Object(w.a)(),t=a.register,l=a.handleSubmit,r=a.errors,s=Object(n.useState)(!1),m=Object(E.a)(s,2),o=m[0],i=m[1],u=Object(n.useState)(!1),d=Object(E.a)(u,2),p=d[0],b=d[1];return c.a.createElement("div",{className:"login"},c.a.createElement("div",{className:"flex-center flex-column"},c.a.createElement("div",{className:"card border-0"},c.a.createElement("div",{className:"card-header p-4 text-center"},c.a.createElement("h4",{className:"mb-0"},c.a.createElement("b",null,"Login")),p?c.a.createElement("p",{className:"text-white mb-0"},"E-mail or Password incorrect."):null),c.a.createElement("div",{className:"card-body p-4 pb-lg-5"},c.a.createElement("form",{onSubmit:l((function(a){i(!0),N.a.post("".concat(f,"login"),a).then((function(a){200===a.status&&a.data.token&&(i(!1),localStorage.setItem("access_token",a.data.token),e.history.push("/dashboard")),204===a.status&&(b(!0),i(!1))}))}))},c.a.createElement("div",{className:"form-group mb-3"},r.email&&r.email.message?c.a.createElement("small",{className:"text-danger"},r.email&&r.email.message):c.a.createElement("small",null,"E-mail"),c.a.createElement("input",{type:"text",name:"email",className:"form-control shadow-none",ref:t({required:"E-mail is required",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"Invalid email address"}})})),c.a.createElement("div",{className:"form-group mb-4"},r.password&&r.password.message?c.a.createElement("small",{className:"text-danger"},r.password&&r.password.message):c.a.createElement("small",null,"Password"),c.a.createElement("input",{type:"password",name:"password",className:"form-control shadow-none",ref:t({minLength:{value:8,message:"Please enter minimum 8 characters"},required:"Please enter password"})})),c.a.createElement("button",{type:"submit",className:"btn btn-block shadow-none btn-dark"},o?c.a.createElement("p",{className:"mb-0"},c.a.createElement("i",{className:"fa fa-spinner text-white mr-2 fa-spin"}),"Loading ..."):c.a.createElement("p",{className:"mb-0"},"Submit")))))))},x=t(18),j=function(e){var a=Object(w.a)(),t=a.register,l=a.handleSubmit,r=a.errors,m=Object(n.useState)(!1),o=Object(E.a)(m,2),i=o[0],u=o[1],d=Object(n.useState)([]),p=Object(E.a)(d,2),b=p[0],v=p[1],h=Object(n.useState)(!1),g=Object(E.a)(h,2),k=g[0],j=g[1];Object(n.useEffect)((function(){y()}),[]);var y=function(){N.a.get("".concat(f,"project")).then((function(e){v(e.data.projects)}))};return c.a.createElement("div",{className:"dashboard"},c.a.createElement("div",{className:"container py-4 py-lg-5"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12 mb-4"},c.a.createElement("div",{className:"d-flex"},c.a.createElement("div",null,c.a.createElement("h1",{className:"mb-0"},"Website - ",b.length)),c.a.createElement("div",{className:"ml-auto"},c.a.createElement("button",{type:"button",className:"btn shadow-none",onClick:function(){return u(!0)}},c.a.createElement("i",{className:"fas fa-plus"})),c.a.createElement("button",{type:"button",className:"btn shadow-none logout_btn",onClick:function(){var a={headers:{Authorization:"Bearer "+localStorage.getItem("access_token")}};N.a.get(f+"logout",a).then((function(a){200===a.status&&(localStorage.clear(),e.history.push("/"))})).catch((function(a){401===a.response.status&&(localStorage.clear(),e.history.push("/"))}))}},c.a.createElement("i",{className:"fas fa-power-off"}))))),c.a.createElement("div",{className:"col-12"},b.map((function(e,a){return c.a.createElement("div",{className:"project p-2",key:a},c.a.createElement("p",{className:"mb-0 text-capitalize"},e.name),c.a.createElement("div",{className:"buttons"},c.a.createElement(s.b,{to:"edit/".concat(e._id),type:"button",className:"btn rounded-0 shadow-none border-0"},c.a.createElement("i",{className:"fas fa-pen"})),c.a.createElement("button",{type:"button",className:"btn rounded-0 shadow-none border-0",onClick:function(){return function(e){var a={headers:{Authorization:"Bearer "+localStorage.getItem("access_token")}};N.a.delete("".concat(f,"project/").concat(e),a).then((function(e){200===e.status&&y()})).catch((function(e){e&&console.log(e)}))}(e._id)}},c.a.createElement("i",{className:"fas fa-trash"}))))}))))),c.a.createElement(x.a,{show:i,onHide:function(){return u(!1)},backdrop:"static",keyboard:!1,centered:!0,className:"project_modal"},c.a.createElement(x.a.Header,{closeButton:!0,className:"px-lg-5 pt-lg-5"},c.a.createElement(x.a.Title,null,"add new project")),c.a.createElement(x.a.Body,{className:"pb-5 px-lg-5"},c.a.createElement("form",{onSubmit:l((function(e){var a={headers:{Authorization:"Bearer "+localStorage.getItem("access_token")}};j(!0),N.a.post("".concat(f,"project"),e,a).then((function(e){201===e.status&&(y(),j(!1),u(!1))})).catch((function(e){e&&console.log(e)}))}))},c.a.createElement("div",{className:"form-group mb-3"},r.name&&r.name.message?c.a.createElement("small",{className:"text-danger"},r.name&&r.name.message):c.a.createElement("small",{className:"text-white"},"Project Name"),c.a.createElement("input",{type:"text",name:"name",className:"form-control shadow-none",ref:t({required:"Project Name is required"})})),c.a.createElement("div",{className:"form-group mb-3"},r.framework&&r.framework.message?c.a.createElement("small",{className:"text-danger"},r.framework&&r.framework.message):c.a.createElement("small",{className:"text-white"},"Framework"),c.a.createElement("select",{name:"framework",className:"form-control shadow-none pl-1",ref:t({required:"Framework is required"})},c.a.createElement("option",{defaultValue:!0},"Select a framework"),c.a.createElement("option",{value:"react"},"React.js"),c.a.createElement("option",{value:"vue"},"Vue.js"),c.a.createElement("option",{value:"laravel"},"Laravel"))),c.a.createElement("div",{className:"form-group mb-3"},r.live_link&&r.live_link.message?c.a.createElement("small",{className:"text-danger"},r.live_link&&r.live_link.message):c.a.createElement("small",{className:"text-white"},"Live Link"),c.a.createElement("input",{type:"text",name:"live_link",className:"form-control shadow-none",ref:t({required:"Live link is required"})})),c.a.createElement("div",{className:"form-group mb-3"},r.repo_link&&r.repo_link.message?c.a.createElement("small",{className:"text-danger"},r.repo_link&&r.repo_link.message):c.a.createElement("small",{className:"text-white"},"Repository Link"),c.a.createElement("input",{type:"text",name:"repo_link",className:"form-control shadow-none",ref:t({required:"Repository link is required"})})),c.a.createElement("button",{type:"submit",className:"btn btn-block shadow-none btn-dark"},k?c.a.createElement("p",{className:"mb-0"},c.a.createElement("i",{className:"fa fa-spinner text-white mr-2 fa-spin"}),"Adding ..."):c.a.createElement("p",{className:"mb-0"},"Submit"))))))},y=function(e){var a=Object(n.useState)(""),t=Object(E.a)(a,2),l=t[0],r=t[1],s=Object(w.a)(),m=s.register,o=s.handleSubmit,i=s.errors,u=Object(n.useState)(!1),d=Object(E.a)(u,2),p=d[0],b=d[1];Object(n.useEffect)((function(){v()}),[]);var v=function(){var a={headers:{Authorization:"Bearer "+localStorage.getItem("access_token")}};N.a.get("".concat(f,"/project/").concat(e.match.params.id),a).then((function(e){r(e.data.project)})).catch((function(e){e&&console.log(e)}))};return c.a.createElement("div",{className:"edit"},c.a.createElement("div",{className:"flex-center flex-column"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body p-4 p-lg-5"},c.a.createElement("form",{onSubmit:o((function(a){b(!0);var t={headers:{Authorization:"Bearer "+localStorage.getItem("access_token")}};N.a.put("".concat(f,"project/").concat(e.match.params.id),a,t).then((function(e){200===e.status&&(v(),b(!1))})).catch((function(e){e&&console.log(e)}))}))},c.a.createElement("div",{className:"form-group mb-3"},i.name&&i.name.message?c.a.createElement("small",{className:"text-danger"},i.name&&i.name.message):c.a.createElement("small",{className:"text-white"},"Project Name"),c.a.createElement("input",{type:"text",name:"name",defaultValue:l.name,className:"form-control shadow-none",ref:m({required:"Project Name is required"})})),c.a.createElement("div",{className:"form-group mb-3"},i.framework&&i.framework.message?c.a.createElement("small",{className:"text-danger"},i.framework&&i.framework.message):c.a.createElement("small",{className:"text-white"},"Framework"),c.a.createElement("select",{name:"framework",className:"form-control shadow-none pl-1",ref:m({required:"Framework is required"})},c.a.createElement("option",{defaultValue:l.framework},l.framework),c.a.createElement("option",{value:"react"},"React.js"),c.a.createElement("option",{value:"vue"},"Vue.js"),c.a.createElement("option",{value:"laravel"},"Laravel"))),c.a.createElement("div",{className:"form-group mb-3"},i.live_link&&i.live_link.message?c.a.createElement("small",{className:"text-danger"},i.live_link&&i.live_link.message):c.a.createElement("small",{className:"text-white"},"Live Link"),c.a.createElement("input",{type:"text",name:"live_link",defaultValue:l.live_link,className:"form-control shadow-none",ref:m({required:"Live link is required"})})),c.a.createElement("div",{className:"form-group mb-3"},i.repo_link&&i.repo_link.message?c.a.createElement("small",{className:"text-danger"},i.repo_link&&i.repo_link.message):c.a.createElement("small",{className:"text-white"},"Repository Link"),c.a.createElement("input",{type:"text",name:"repo_link",defaultValue:l.repo_link,className:"form-control shadow-none",ref:m({required:"Repository link is required"})})),c.a.createElement("button",{type:"submit",className:"btn btn-block shadow-none btn-dark"},p?c.a.createElement("p",{className:"mb-0"},c.a.createElement("i",{className:"fa fa-spinner text-white mr-2 fa-spin"}),"Updating..."):c.a.createElement("p",{className:"mb-0"},"Update")))))))};var _=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(s.a,null,c.a.createElement("div",null,c.a.createElement(m.d,null,c.a.createElement(m.b,{exact:!0,path:"/",component:g}),c.a.createElement(m.b,{path:"/login",component:k}),c.a.createElement(m.b,{path:"/dashboard",component:j}),c.a.createElement(m.b,{path:"/edit/:id",component:y}),c.a.createElement(m.b,{component:g})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.85950ed3.chunk.js.map