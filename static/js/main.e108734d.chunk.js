(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{25:function(e,t,c){},26:function(e,t,c){},52:function(e,t,c){"use strict";c.r(t);var s=c(1),l=c.n(s),n=c(19),a=c.n(n),i=(c(25),c(26),c(2)),r=c(3),o=c(5),j=c.n(o),b=c(0),d=function(){var e=Object(s.useState)([]),t=Object(r.a)(e,2),c=t[0],l=t[1];return Object(s.useEffect)((function(){j.a.get("http://localhost:8000/api/pets").then((function(e){l(e.data.results)})).catch((function(e){return console.log(e)}))}),[]),Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"d-flex justify-content-between align-items-center mt-3",children:[Object(b.jsx)("h1",{children:"Pet Shelter"}),Object(b.jsx)(i.a,{to:"/pets/new",className:"d-inlineblock",children:"add a pet to the shelter"})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{className:"text-left mt-4",children:"These pets are looking for a good home"}),Object(b.jsxs)("table",{className:"table table-hover mt-4",children:[Object(b.jsx)("thead",{className:"thead-light",children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{scope:"col",children:"Name"}),Object(b.jsx)("th",{scope:"col",children:"Type"}),Object(b.jsx)("th",{scope:"col",children:"Actions"})]})}),Object(b.jsx)("tbody",{children:c.map((function(e,t){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e.name}),Object(b.jsx)("td",{children:e.type}),Object(b.jsxs)("td",{children:[Object(b.jsx)(i.a,{to:"/pets/".concat(e._id),className:"btn btn-medium btn-primary mr-3",children:"details"}),Object(b.jsx)(i.a,{to:"/pets/".concat(e._id,"/edit"),className:"btn btn-medium btn-primary",children:"edit"})]})]},t)}))})]})]})]})},m=function(e){var t=Object(s.useState)({}),c=Object(r.a)(t,2),l=c[0],n=c[1];Object(s.useEffect)((function(){j.a.get("http://localhost:8000/api/pets/".concat(e.petid)).then((function(e){n(e.data.results)})).catch((function(e){return console.log(e)}))}),[]);return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"d-flex justify-content-between align-items-center mt-3",children:[Object(b.jsx)("h1",{children:"Pet Shelter"}),Object(b.jsx)(i.a,{to:"/",className:"d-inlineblock",children:"back to home"})]}),Object(b.jsxs)("div",{className:"d-flex justify-content-between align-items-center mt-3",children:[Object(b.jsxs)("h3",{children:["Details about ",l.name]}),Object(b.jsxs)("button",{onClick:function(t){j.a.delete("http://localhost:8000/api/pets/".concat(e.petid)).then((function(e){Object(i.c)("/")})).catch((function(e){return console.log(e)}))},className:"btn btn-large btn-danger",children:["Adopt ",l.name]})]}),Object(b.jsxs)("div",{className:"border mt-3",children:[Object(b.jsxs)("div",{className:"d-flex align-items-center ml-3 mt-3",children:[Object(b.jsx)("p",{className:"font-weight-bold petinfo",children:"Pet type:"}),Object(b.jsx)("p",{className:"ml-5 petinfo",children:l.type})]}),Object(b.jsxs)("div",{className:"d-flex align-items-center ml-3 mt-3",children:[Object(b.jsx)("p",{className:"font-weight-bold petinfo",children:"Description:"}),Object(b.jsx)("p",{className:"ml-3 petinfo",children:l.description})]}),Object(b.jsxs)("div",{className:"d-flex align-items-center ml-3 mt-3",children:[Object(b.jsx)("p",{className:"font-weight-bold petinfo",children:"Skills:"}),Object(b.jsxs)("div",{className:"d-flex flex-column",children:[Object(b.jsx)("p",{className:"ml-3 petinfo",children:l.skillOne}),Object(b.jsx)("p",{className:"ml-3 petinfo",children:l.skillTwo}),Object(b.jsx)("p",{className:"ml-3 petinfo",children:l.skillThree})]})]})]})]})},h=function(){var e=Object(s.useState)(""),t=Object(r.a)(e,2),c=t[0],l=t[1],n=Object(s.useState)(""),a=Object(r.a)(n,2),o=a[0],d=a[1],m=Object(s.useState)(""),h=Object(r.a)(m,2),O=h[0],x=h[1],p=Object(s.useState)(""),u=Object(r.a)(p,2),f=u[0],N=u[1],g=Object(s.useState)(""),v=Object(r.a)(g,2),k=v[0],y=v[1],w=Object(s.useState)(""),S=Object(r.a)(w,2),T=S[0],C=S[1],F=Object(s.useState)({}),P=Object(r.a)(F,2),E=P[0],D=P[1];return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"d-flex justify-content-between align-items-center mt-3",children:[Object(b.jsx)("h1",{children:"Pet Shelter"}),Object(b.jsx)(i.a,{to:"/",className:"d-inlineblock",children:"back to home"})]}),Object(b.jsx)("h3",{className:"text-left mt-4",children:"Know a pet needing a home?"}),Object(b.jsx)("div",{className:"border mt-4",children:Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),j.a.post("http://localhost:8000/api/pets/create",{name:c,type:o,description:O,skillOne:f,skillTwo:k,skillThree:T}).then((function(e){e.data.results?Object(i.c)("/"):(console.log("Error on form submission"),console.log(e),D(e.data.err.errors))})).catch((function(e){return console.log(e)}))},className:"form",children:[Object(b.jsxs)("div",{className:"row m-3",children:[Object(b.jsxs)("div",{className:"col",children:[Object(b.jsx)("h6",{children:"Pet Information (required)"}),Object(b.jsx)("label",{htmlFor:"name",className:"control-label",children:"Name: "}),Object(b.jsx)("input",{onChange:function(e){return l(e.target.value)},type:"text",className:"form-control",name:"name"}),E.name?Object(b.jsx)("p",{className:"text-danger",children:E.name.message}):""]}),Object(b.jsxs)("div",{className:"col",children:[Object(b.jsx)("h6",{children:"Skills (optional)"}),Object(b.jsx)("label",{htmlFor:"skillOne",className:"control-label",children:"Skill 1: "}),Object(b.jsx)("input",{onChange:function(e){return N(e.target.value)},type:"text",className:"form-control",name:"skillOne"})]})]}),Object(b.jsxs)("div",{className:"row m-3",children:[Object(b.jsxs)("div",{className:"col",children:[Object(b.jsx)("label",{htmlFor:"type",className:"control-label",children:"Type: "}),Object(b.jsx)("input",{onChange:function(e){return d(e.target.value)},type:"text",className:"form-control",name:"type"}),E.type?Object(b.jsx)("p",{className:"text-danger",children:E.type.message}):""]}),Object(b.jsxs)("div",{className:"col",children:[Object(b.jsx)("label",{htmlFor:"skillTwo",className:"control-label",children:"Skill 2: "}),Object(b.jsx)("input",{onChange:function(e){return y(e.target.value)},type:"text",className:"form-control",name:"skillTwo"})]})]}),Object(b.jsxs)("div",{className:"row m-3",children:[Object(b.jsxs)("div",{className:"col",children:[Object(b.jsx)("label",{htmlFor:"description",className:"control-label",children:"Description: "}),Object(b.jsx)("input",{onChange:function(e){return x(e.target.value)},type:"text",className:"form-control",name:"description"}),E.description?Object(b.jsx)("p",{className:"text-danger",children:E.description.message}):""]}),Object(b.jsxs)("div",{className:"col",children:[Object(b.jsx)("label",{htmlFor:"skillThree",className:"control-label",children:"Skill 3: "}),Object(b.jsx)("input",{onChange:function(e){return C(e.target.value)},type:"text",className:"form-control",name:"skillThree"})]})]}),Object(b.jsx)("div",{className:"row m-3",children:Object(b.jsx)("div",{className:"col",children:Object(b.jsx)("input",{className:"btn btn-lg btn-primary",type:"submit",value:"Add Pet"})})})]})})]})},O=c(7),x=c(9),p=function(e){var t=Object(s.useState)({name:"",type:"",description:"",skillOne:"",skillTwo:"",skillThree:""}),c=Object(r.a)(t,2),l=c[0],n=c[1],a=Object(s.useState)({}),o=Object(r.a)(a,2),d=o[0],m=o[1];Object(s.useEffect)((function(){j.a.get("http://localhost:8000/api/pets/".concat(e.petid)).then((function(e){n(e.data.results)})).catch((function(e){return console.log(e)}))}),[]);var h=function(e){n(Object(x.a)(Object(x.a)({},l),{},Object(O.a)({},e.target.name,e.target.value)))};return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"d-flex justify-content-between align-items-center mt-3",children:[Object(b.jsx)("h1",{children:"Pet Shelter"}),Object(b.jsx)(i.a,{to:"/",className:"d-inlineblock",children:"back to home"})]}),Object(b.jsxs)("h3",{className:"text-left mt-4",children:["Edit ",l.name]}),Object(b.jsx)("div",{className:"border mt-4",children:Object(b.jsxs)("form",{onSubmit:function(t){t.preventDefault(),j.a.put("http://localhost:8000/api/pets/".concat(e.petid),l).then((function(e){e.data.results?Object(i.c)("/"):(console.log("Error on form submission"),console.log(e),m(e.data.err.errors))})).catch((function(e){return console.log(e)}))},className:"form",children:[Object(b.jsxs)("div",{className:"row m-3",children:[Object(b.jsxs)("div",{className:"col",children:[Object(b.jsx)("h6",{children:"Pet Information (required)"}),Object(b.jsx)("label",{htmlFor:"name",className:"control-label",children:"Name: "}),Object(b.jsx)("input",{onChange:h,type:"text",className:"form-control",name:"name",value:l.name}),d.name?Object(b.jsx)("p",{className:"text-danger",children:d.name.message}):""]}),Object(b.jsxs)("div",{className:"col",children:[Object(b.jsx)("h6",{children:"Skills (optional)"}),Object(b.jsx)("label",{htmlFor:"skillOne",className:"control-label",children:"Skill 1: "}),Object(b.jsx)("input",{onChange:h,type:"text",className:"form-control",name:"skillOne",value:l.skillOne})]})]}),Object(b.jsxs)("div",{className:"row m-3",children:[Object(b.jsxs)("div",{className:"col",children:[Object(b.jsx)("label",{htmlFor:"type",className:"control-label",children:"Type: "}),Object(b.jsx)("input",{onChange:h,type:"text",className:"form-control",name:"type",value:l.type}),d.type?Object(b.jsx)("p",{className:"text-danger",children:d.type.message}):""]}),Object(b.jsxs)("div",{className:"col",children:[Object(b.jsx)("label",{htmlFor:"skillTwo",className:"control-label",children:"Skill 2: "}),Object(b.jsx)("input",{onChange:h,type:"text",className:"form-control",name:"skillTwo",value:l.skillTwo})]})]}),Object(b.jsxs)("div",{className:"row m-3",children:[Object(b.jsxs)("div",{className:"col",children:[Object(b.jsx)("label",{htmlFor:"description",className:"control-label",children:"Description: "}),Object(b.jsx)("input",{onChange:h,type:"text",className:"form-control",name:"description",value:l.description}),d.description?Object(b.jsx)("p",{className:"text-danger",children:d.description.message}):""]}),Object(b.jsxs)("div",{className:"col",children:[Object(b.jsx)("label",{htmlFor:"skillThree",className:"control-label",children:"Skill 3: "}),Object(b.jsx)("input",{onChange:h,type:"text",className:"form-control",name:"skillThree",value:l.skillThree})]})]}),Object(b.jsx)("div",{className:"row m-3",children:Object(b.jsx)("div",{className:"col",children:Object(b.jsx)("input",{className:"btn btn-lg btn-primary",type:"submit",value:"Edit Pet"})})})]})})]})};var u=function(){return Object(b.jsx)("div",{className:"App container",children:Object(b.jsxs)(i.b,{children:[Object(b.jsx)(d,{path:"/"}),Object(b.jsx)(m,{path:"/pets/:petid"}),Object(b.jsx)(h,{path:"/pets/new"}),Object(b.jsx)(p,{path:"pets/:petid/edit"})]})})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,53)).then((function(t){var c=t.getCLS,s=t.getFID,l=t.getFCP,n=t.getLCP,a=t.getTTFB;c(e),s(e),l(e),n(e),a(e)}))};a.a.render(Object(b.jsx)(l.a.StrictMode,{children:Object(b.jsx)(u,{})}),document.getElementById("root")),f()}},[[52,1,2]]]);
//# sourceMappingURL=main.e108734d.chunk.js.map