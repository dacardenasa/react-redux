(this["webpackJsonpreact-redux"]=this["webpackJsonpreact-redux"]||[]).push([[0],{102:function(e,t,n){e.exports={checkout__terms__alerts:"checkboxInput_checkout__terms__alerts__3eWQU"}},104:function(e,t,n){},105:function(e,t,n){},107:function(e,t,n){},108:function(e,t,n){},245:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),i=n(45),c=n.n(i),s=n(109),l=n(3),o=n(2),u=n(33),d=n.n(u);n(119);function m(e){var t;return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)||(t="Invalid email address"),t}function j(e){var t;return e||(t="Required"),t}function p(e){var t;return e?e.length<2?t="Nombre Inv\xe1lido!":/^[a-zA-Z\xc0-\xff\u00f1\u00d1]+(\s*[a-zA-Z\xc0-\xff\u00f1\u00d1]*)*[a-zA-Z\xc0-\xff\u00f1\u00d1]+$/g.test(e)||(t="Nombre Inv\xe1lido!"):t="Nombre Requerido!",t}function h(e){var t;return e?e.length<2?t="Apellido Inv\xe1lido!":/^[a-zA-Z\xc0-\xff\u00f1\u00d1]+(\s*[a-zA-Z\xc0-\xff\u00f1\u00d1]*)*[a-zA-Z\xc0-\xff\u00f1\u00d1]+$/g.test(e)||(t="Apellido Inv\xe1lido!"):t="Apellido Requerido!",t}function b(e){var t;return e?/^(([0-9]{2})( |-)?)?(\(?[0-9]{3}\)?|[0-9]{3})( |-)?([0-9]{7})$/gm.test(e)||(t="Tel\xe9fono Inv\xe1lido"):t="Tel\xe9fono Requerido!",t}function x(e){var t;return e?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)||(t="Invalid email address"):t="Correo electr\xf3nico requerido",t}function f(e){var t,n=new RegExp("(?=.*[A-Z])"),a=new RegExp("[^A-Za-z0-9]");return e?n.test(e)?a.test(e)||(t="La contrase\xf1a debe tener como m\xednimo 1 caracter especial"):t="La contrase\xf1a debe tener como m\xednimo 1 caracter en May\xfascula":t="Contrase\xf1a requerida",t}function g(e){var t;return e||(t="Debe aceptar los terminos para continuar!"),t}var O={firstName:"",lastName:"",email:"",phone:"",password:"",terms:!1,alerts:!1},y=function(e,t){var n=t.setSubmitting;setTimeout((function(){alert(JSON.stringify(e,null,2)),n(!1)}),400)},v=n(26),w=n(48),_=n(49),k=n.n(_),C=function(e){var t=e.field,n=e.form,r=n.touched,i=n.errors,c=Object(w.a)(e,["field","form"]),s=function(){return!i[t.name]&&r[t.name]?"success":i[t.name]&&r[t.name]?"error":void 0};return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("label",{className:k.a.pure_material_textfield_outlined,children:[Object(a.jsx)("input",Object(v.a)(Object(v.a)({placeholder:" ",className:"success"===s()?k.a.success:"error"===s()?k.a.error:""},t),c)),Object(a.jsx)("span",{children:t.name})]})})},I=n(102),B=n.n(I),F=function(e){var t=e.field,n=e.form,r=(n.touched,n.errors,Object(w.a)(e,["field","form"]));return Object(a.jsx)("div",{className:B.a.checkout__terms__alerts,children:Object(a.jsx)("input",Object(v.a)(Object(v.a)({},t),r))})},N=function(){return Object(a.jsx)(o.d,{initialValues:O,onSubmit:y,children:function(e){var t=e.errors,n=e.touched,r=e.dirty;return Object(a.jsxs)(o.c,{style:{display:"flex",flexDirection:"column",margin:"0 auto",width:"70%"},children:[Object(a.jsx)(o.b,{name:"firstName",validate:p,component:C}),n.firstName&&t.firstName&&Object(a.jsx)("span",{style:{color:"#b00020"},children:t.firstName}),Object(a.jsx)(o.b,{name:"lastName",validate:h,component:C}),n.lastName&&t.lastName&&Object(a.jsx)("span",{style:{color:"#b00020"},children:t.lastName}),Object(a.jsx)(o.b,{name:"phone",validate:b,component:C}),t.phone&&n.phone&&Object(a.jsx)("span",{style:{color:"#b00020"},children:t.phone}),Object(a.jsx)(o.b,{name:"email",validate:x,component:C}),n.email&&t.email&&Object(a.jsx)("span",{style:{color:"#b00020"},children:t.email}),Object(a.jsx)(o.b,{name:"password",validate:f,component:C}),n.password&&t.password&&Object(a.jsx)("span",{style:{color:"#b00020"},children:t.password}),Object(a.jsxs)("div",{style:{display:"flex",marginBottom:"3%"},children:[Object(a.jsx)(o.b,{name:"terms",type:"checkbox",validate:g,component:F}),Object(a.jsx)("label",{htmlFor:"acceptTerms",style:{fontSize:"12px",marginLeft:"2%"},children:"Acepto t\xe9rminos, condiciones y pol\xedticas de privacidad"})]}),Object(a.jsxs)("div",{style:{display:"flex"},children:[Object(a.jsx)(o.b,{name:"alerts",type:"checkbox",component:F}),Object(a.jsx)("label",{htmlFor:"acceptTerms",style:{fontSize:"12px",marginLeft:"2%"},children:"Acepto recibir alertas en mi correo electr\xf3nico"})]}),n.terms&&t.terms&&Object(a.jsx)("span",{style:{color:"#b00020",fontSize:"11px",textAlign:"center"},children:t.terms}),Object(a.jsx)("button",{type:"submit",style:{marginTop:"5%"},disabled:!r,children:"Submit"})]})}})},S=function(e){return function(t){return t?void 0:e}},A=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Pick a username"}),Object(a.jsx)(o.d,{initialValues:{username:"",email:""},onSubmit:function(e){alert(JSON.stringify(e,null,2))},render:function(e){e.errors,e.touched;var t=e.setFieldValue,n=e.setFieldTouched,r=e.validateField,i=e.validateForm;return Object(a.jsxs)(o.c,{children:[Object(a.jsx)("label",{htmlFor:"username",children:"Username"}),Object(a.jsxs)("div",{children:[Object(a.jsx)(o.b,{name:"username",validate:S("This field is required"),type:"text",placeholder:"Username"}),Object(a.jsx)(o.a,{name:"username"})]}),Object(a.jsx)("br",{}),Object(a.jsxs)("div",{children:[Object(a.jsx)(o.b,{name:"email",validate:S("This field is required"),type:"text",placeholder:"Email"}),Object(a.jsx)(o.a,{name:"email"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{children:"username field actions"}),Object(a.jsx)("button",{type:"button",onClick:function(){n("username",!0,!0)},children:"setFieldTouched"}),Object(a.jsx)("button",{type:"button",onClick:function(){t("username","",!0)},children:"setFieldValue"}),Object(a.jsx)("button",{type:"button",onClick:function(){r("username")},children:"validateField"}),Object(a.jsx)("br",{})]}),Object(a.jsx)("br",{}),Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{children:"Form actions"}),Object(a.jsx)("button",{type:"button",onClick:i,children:"validate form"}),Object(a.jsx)("button",{type:"submit",children:"Submit"})]})]})}})]})},z=n(103),Z=n.n(z),q=function(e){console.log(e)},M=function(){console.log("hello")},T=function(){return c.a.createPortal(Object(a.jsx)("div",{style:{width:"50%",margin:"0 auto"},children:Object(a.jsx)(Z.a,{appId:"1088597931155576",autoLoad:!1,fields:"name,email,picture",onClick:M,callback:q})}),document.getElementById("popups"))},D=n(10),E=n.n(D),V=n(19),J=n(11),K=n(104),L=n.n(K),R=function(){var e=Object(r.useState)(null),t=Object(J.a)(e,2),n=t[0],i=t[1],c=Object(r.useState)(""),s=Object(J.a)(c,2),l=s[0],o=s[1],u=function(){var e=Object(V.a)(E.a.mark((function e(){var t,n,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://api.unsplash.com/search/photos","?query=").concat(l,"&client_id=").concat("gm0C0MBkMldZw_MkfZD-sfopNX0iyrcq-WJ9MOcB1SA"));case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.next=8,n.results;case 8:a=e.sent,i(a);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsxs)("section",{className:L.a.images_container,children:[Object(a.jsxs)("div",{style:{display:"flex",width:"50%",margin:"0 auto",flexDirection:"column",marginBottom:"5%"},children:[Object(a.jsx)("input",{type:"text",value:l,onChange:function(e){o(e.target.value)},style:{marginBottom:"3%"}}),Object(a.jsx)("button",{type:"button",style:{marginBottom:"5%"},onClick:u,children:"Cargar imagenes"})]}),Object(a.jsx)("div",{style:{display:"flex",flexFlow:"row wrap",width:"100%",justifyContent:"space-between"},children:n&&n.length>0?n.map((function(e,t){return Object(a.jsx)("img",{src:e.urls.full,alt:t,style:{width:"45%",marginBottom:"3%"}},t)})):null})]})},W=n(68),$=[{url:"https://res.cloudinary.com/dacardenasa/image/upload/v1613701438/1_nkatg6.jpg",name:"First"},{url:"https://res.cloudinary.com/dacardenasa/image/upload/v1613701730/2_nxgave.jpg",name:"Second"},{url:"https://res.cloudinary.com/dacardenasa/image/upload/v1613701520/3_nk2f46.jpg",name:"Third"},{url:"https://res.cloudinary.com/dacardenasa/image/upload/v1613701479/4_ctift2.jpg",name:"Fourth"},{url:"https://res.cloudinary.com/dacardenasa/image/upload/v1613701540/5_lgcctv.jpg",name:"Fifth"},{url:"https://res.cloudinary.com/dacardenasa/image/upload/v1613701444/6_uxwotf.jpg",name:"Sixth"},{url:"https://res.cloudinary.com/dacardenasa/image/upload/v1613701532/7_ssrh37.jpg",name:"Seventh"},{url:"https://res.cloudinary.com/dacardenasa/image/upload/v1613701679/9_ebn8nl.jpg",name:"Eight"},{url:"https://res.cloudinary.com/dacardenasa/image/upload/v1613701679/9_ebn8nl.jpg",name:"Nineth"},{url:"https://res.cloudinary.com/dacardenasa/image/upload/v1613701690/10_ckoav4.jpg",name:"Tenth"},{url:"https://res.cloudinary.com/dacardenasa/image/upload/v1613692195/tiger_dbjz0t.jpg",name:"Eleventh"}],X=[{url:"1_nkatg6.jpg",name:"First"},{url:"2_nxgave.jpg",name:"Second"},{url:"3_nk2f46.jpg",name:"Third"},{url:"4_ctift2.jpg",name:"Fourth"},{url:"5_lgcctv.jpg",name:"Fifth"},{url:"6_uxwotf.jpg",name:"Sixth"},{url:"7_ssrh37.jpg",name:"Seventh"},{url:"8_zw5bck.jpg",name:"Eight"},{url:"9_ebn8nl.jpg",name:"Nineth"},{url:"10_ckoav4.jpg",name:"Tenth"},{url:"tiger_dbjz0t.jpg",name:"Eleventh"}],U=n(105),P=n.n(U),Q=function(){var e=Object(r.useState)(null),t=Object(J.a)(e,2),n=t[0],i=t[1],c=Object(r.useState)(""),s=Object(J.a)(c,2),l=s[0],o=s[1],u=function(){var e=Object(V.a)(E.a.mark((function e(){var t,n,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://api.unsplash.com/search/photos","?query=").concat(l,"&client_id=").concat("gm0C0MBkMldZw_MkfZD-sfopNX0iyrcq-WJ9MOcB1SA"));case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.next=8,n.results;case 8:a=e.sent,i(a);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsxs)("section",{className:P.a.images_container,children:[Object(a.jsx)("h1",{style:{textAlign:"center"},children:"Cloudinary Image Optimization"}),Object(a.jsxs)("div",{style:{display:"flex",width:"50%",margin:"0 auto",flexDirection:"column",marginBottom:"5%"},children:[Object(a.jsx)("input",{type:"text",value:l,onChange:function(e){o(e.target.value)},style:{marginBottom:"3%"}}),Object(a.jsx)("button",{type:"button",style:{marginBottom:"5%"},onClick:u,children:"Cargar imagenes"})]}),Object(a.jsx)("h1",{children:"Optimization fetch Images"}),Object(a.jsx)("div",{style:{display:"flex",flexFlow:"row wrap",width:"100%",justifyContent:"space-between"},children:n&&n.length>0?n.map((function(e,t){return function(e,t){return Object(a.jsx)(W.Image,{publicId:e,loading:"lazy",style:{marginBottom:"3%"},cloudName:"dacardenasa",secure:"true",fetchFormat:"auto",type:"fetch",quality:"auto",width:"300",height:"300",crop:"limit"},t)}(e.urls.full,t)})):null}),Object(a.jsx)("h1",{children:"Original Fetch Images"}),Object(a.jsx)("div",{style:{display:"flex",flexFlow:"row wrap",width:"100%",justifyContent:"space-between"},children:n&&n.length>0?n.map((function(e,t){return Object(a.jsx)("img",{src:e.urls.full,width:"300",height:"300",alt:"cat",style:{marginBottom:"3%"}},t)})):null}),Object(a.jsx)("h1",{children:"Cloudinary domain Images optimization"}),Object(a.jsx)("div",{style:{display:"flex",flexFlow:"row wrap",width:"100%",justifyContent:"space-between"},children:$.map((function(e,t){return function(e,t){return Object(a.jsx)(W.Image,{publicId:e,loading:"lazy",style:{marginBottom:"3%"},cloudName:"dacardenasa",secure:"true",fetchFormat:"auto",quality:"auto",width:"300",height:"300"},t)}(e.url,t)}))})]})},G=n(106),H=n.n(G),Y=n(107),ee=n.n(Y),te=function(e,t){return Object(a.jsx)(H.a,{cloudName:"dacardenasa",imageName:e,fixed:{width:300,height:300},style:{marginBottom:"3%"},alt:"image"},t)},ne=function(){var e=Object(r.useState)(null),t=Object(J.a)(e,2),n=t[0],i=t[1],c=Object(r.useState)(""),s=Object(J.a)(c,2),l=s[0],o=s[1],u=function(){var e=Object(V.a)(E.a.mark((function e(){var t,n,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://api.unsplash.com/search/photos","?query=").concat(l,"&client_id=").concat("gm0C0MBkMldZw_MkfZD-sfopNX0iyrcq-WJ9MOcB1SA"));case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.next=8,n.results;case 8:a=e.sent,i(a);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsxs)("section",{className:ee.a.images_container,children:[Object(a.jsxs)("div",{style:{display:"flex",width:"50%",margin:"0 auto",flexDirection:"column",marginBottom:"5%"},children:[Object(a.jsx)("input",{type:"text",value:l,onChange:function(e){o(e.target.value)},style:{marginBottom:"3%"}}),Object(a.jsx)("button",{type:"button",style:{marginBottom:"5%"},onClick:u,children:"Cargar imagenes"})]}),Object(a.jsx)("div",{style:{display:"flex",flexFlow:"row wrap",width:"100%",justifyContent:"space-between"},children:n&&n.length>0?n.map((function(e,t){return te(e.urls.full,t)})):null}),Object(a.jsx)("div",{style:{display:"flex",flexFlow:"row wrap",width:"100%",justifyContent:"space-between"},children:X.map((function(e,t){return te(e.url,t)}))})]})},ae=n(27),re=n(108),ie=n.n(re),ce=function(){var e=Object(r.useState)(null),t=Object(J.a)(e,2),n=t[0],i=t[1],c=Object(r.useState)(""),s=Object(J.a)(c,2),l=s[0],o=s[1],u=function(){var e=Object(V.a)(E.a.mark((function e(){var t,n,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://api.unsplash.com/search/photos","?query=").concat(l,"&client_id=").concat("gm0C0MBkMldZw_MkfZD-sfopNX0iyrcq-WJ9MOcB1SA"));case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.next=8,n.results;case 8:a=e.sent,i(a);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsxs)("section",{className:ie.a.images_container,children:[Object(a.jsx)("h1",{style:{textAlign:"center"},children:"Cloudinary Image Optimization"}),Object(a.jsxs)("div",{style:{display:"flex",width:"50%",margin:"0 auto",flexDirection:"column",marginBottom:"5%"},children:[Object(a.jsx)("input",{type:"text",value:l,onChange:function(e){o(e.target.value)},style:{marginBottom:"3%"}}),Object(a.jsx)("button",{type:"button",style:{marginBottom:"5%"},onClick:u,children:"Cargar imagenes"})]}),Object(a.jsx)("h1",{children:"Optimization fetch Images"}),Object(a.jsx)("div",{style:{display:"flex",flexFlow:"row wrap",width:"100%",justifyContent:"space-between"},children:Object(a.jsxs)(ae.IKContext,{urlEndpoint:"https://ik.imagekit.io/xrpvo7ohdsp",children:[n&&n.length>0?n.map((function(e,t){return function(e,t){return Object(a.jsx)(ae.IKImage,{src:e,loading:"lazy",transformation:[{height:200,width:200}],style:{marginBottom:"3%"}},t)}(e.urls.full,t)})):null,Object(a.jsx)(ae.IKImage,{src:"https://ik.imagekit.io/xrpvo7ohdsp/dragon-link.png",loading:"lazy",transformation:[{height:500,width:500}]}),Object(a.jsx)(ae.IKImage,{src:"https://ik.imagekit.io/xrpvo7ohdsp/dogmatika/dogmatika.jpg",loading:"lazy",transformation:[{height:500,width:500}]}),Object(a.jsx)(ae.IKImage,{src:"https://ik.imagekit.io/xrpvo7ohdsp/perfum.png"})]})}),Object(a.jsx)("h1",{children:"Original Fetch Images"}),Object(a.jsx)("div",{style:{display:"flex",flexFlow:"row wrap",width:"100%",justifyContent:"space-between"},children:n&&n.length>0?n.map((function(e,t){return Object(a.jsx)("img",{src:e.urls.full,width:"300",height:"300",alt:"cat",style:{marginBottom:"3%"}},t)})):null})]})},se=Object(a.jsx)(s.a,{children:Object(a.jsxs)(l.d,{children:[Object(a.jsx)(l.b,{path:"/results",component:function(){return Object(a.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(a.jsx)("h1",{children:"Signup"}),Object(a.jsx)(o.d,{initialValues:{username:"",email:""},onSubmit:function(e){console.log(e)},children:function(e){var t=e.errors,n=e.touched;return Object(a.jsxs)(o.c,{style:{display:"flex",flexDirection:"column",margin:"0 auto",width:"50%"},children:[Object(a.jsx)(o.b,{name:"email",validate:m,children:function(e){var n=e.field,r=e.form;return Object(a.jsx)(d.a,{label:"email",outlined:!0,style:{marginBottom:"5%"},children:Object(a.jsx)(u.Input,{name:"email",type:"text",value:n.value,isValid:!t.email,onChange:function(e){r.setFieldValue("email",e.target.value)}})})}}),t.email&&n.email&&Object(a.jsx)("div",{children:t.email}),Object(a.jsx)(o.b,{name:"username",validate:j,children:function(e){var n=e.field,r=e.form;return Object(a.jsx)(d.a,{label:"username",outlined:!0,style:{marginBottom:"5%"},children:Object(a.jsx)(u.Input,{name:"username",type:"text",value:n.value,isValid:!t.username,onChange:function(e){r.setFieldValue("username",e.target.value)}})})}}),t.username&&n.username&&Object(a.jsx)("div",{children:t.username}),Object(a.jsx)("button",{type:"submit",children:"Submit"})]})}})]})}}),Object(a.jsx)(l.b,{path:"/form",component:N}),Object(a.jsx)(l.b,{path:"/level",component:A}),Object(a.jsx)(l.b,{path:"/facebook",component:T}),Object(a.jsx)(l.b,{path:"/images",component:R}),Object(a.jsx)(l.b,{path:"/imagesCloud",component:Q}),Object(a.jsx)(l.b,{path:"/imagesResizer",component:ne}),Object(a.jsx)(l.b,{path:"/imageKit",component:ce}),Object(a.jsx)(l.a,{from:"/",to:"/imagesCloud"})]})});c.a.render(se,document.getElementById("root"))},49:function(e,t,n){e.exports={pure_material_textfield_outlined:"outlinedInput_pure_material_textfield_outlined__3MKLv",success:"outlinedInput_success__2TL7Q",error:"outlinedInput_error__2GSsW"}}},[[245,1,2]]]);
//# sourceMappingURL=main.e2d64df1.chunk.js.map