(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{14:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);n(14);var a=n(0),r=n.n(a),c=n(10),o=n.n(c),i=n(12),l=n(8),s=n(3),u=n(13),b=n(9),j=n(2);var d=Object(j.a)("section",{target:"en9kuea7"})({name:"1pjz0de",styles:"width:900px;margin:0 auto;display:flex;flex-direction:column;align-items:center"}),g=Object(j.a)("h1",{target:"en9kuea6"})({name:"mgvo7e",styles:"font-size:40px;margin:15px 0"}),f=Object(j.a)("form",{target:"en9kuea5"})({name:"zigog8",styles:"display:flex;flex-direction:column;align-items:center"}),m=Object(j.a)("label",{target:"en9kuea4"})({name:"1fttcpj",styles:"display:flex;flex-direction:column"}),h=Object(j.a)("input",{target:"en9kuea3"})({name:"15cpxzz",styles:"display:block;margin-top:5px;margin-bottom:10px;width:200px;height:25px;background-color:rgba(0, 0, 255, 0.1);border:none;color:white;&:focus,&:hover{outline:none;background-color:rgba(0, 255, 255, 0.1);}"}),p=Object(j.a)("button",{target:"en9kuea2"})({name:"zl22cq",styles:"margin-top:5px;width:150px;height:25px;background-color:rgba(0, 0, 255, 0.1);border:none;color:white;cursor:pointer;&:focus,&:hover{outline:none;background-color:rgba(0, 255, 255, 0.1);}&:active{background-color:rgba(0, 0, 255, 0.1);}"}),x=Object(j.a)("li",{target:"en9kuea1"})({name:"21t511",styles:"display:flex;width:400px;align-items:center;justify-content:space-between;&:not(:last-child){margin-bottom:10px;}"}),O=Object(j.a)("button",{target:"en9kuea0"})({name:"uenzv",styles:"width:150px;height:25px;background-color:rgba(0, 0, 255, 0.1);border:none;color:white;cursor:pointer;&:focus,&:hover{outline:none;background-color:rgba(0, 255, 255, 0.1);}&:active{background-color:rgba(0, 0, 255, 0.1);}"}),v=n(1);function k(e){var t=e.onSubmit,n=Object(a.useState)(""),r=Object(s.a)(n,2),c=r[0],o=r[1],i=Object(a.useState)(""),l=Object(s.a)(i,2),u=l[0],b=l[1];function j(e){"name"===e.target.name?o(e.target.value):"number"===e.target.name&&b(e.target.value)}return Object(v.jsxs)(f,{onSubmit:function(e){e.preventDefault(),t({name:c,number:u}),b(""),o("")},children:[Object(v.jsxs)(m,{children:["\u0418\u043c\u044f",Object(v.jsx)(h,{onChange:j,value:c,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(v.jsxs)(m,{children:["\u0422\u0435\u043b\u0435\u0444\u043e\u043d",Object(v.jsx)(h,{onChange:j,value:u,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(v.jsx)(p,{type:"submit",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043d\u0442\u0430\u043a\u0442"})]})}function y(e){var t=e.onDelete,n=e.contacts,a=e.filterValue;function r(e){t(e.target.id)}var c=n.filter((function(e){return e.name.toLowerCase().includes(a)}));return Object(v.jsx)("ul",{children:c.map((function(e){var t=e.name,n=e.number,a=e.id;return Object(v.jsxs)(x,{children:[t,": ",n,Object(v.jsx)(O,{id:a,onClick:r,children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]},a)}))})}function w(e){var t=e.onFilterChange,n=e.filterValue;return Object(v.jsxs)("label",{children:["\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0441\u043f\u0438\u0441\u043a\u0443 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043e\u0432:",Object(v.jsx)(h,{onChange:function(e){t(e.target.value)},value:n,type:"text",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0424\u0438\u043b\u044c\u0442\u0440",required:!0})]})}function z(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),o=Object(s.a)(c,2),j=o[0],f=o[1];return Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("contactsList"));e&&r(e),console.log("sfsfsdff")}),[]),Object(a.useEffect)((function(){n&&localStorage.setItem("contactsList",JSON.stringify(n))}),[n]),Object(v.jsxs)(d,{children:[Object(v.jsx)(g,{children:"Phonebook"}),Object(v.jsx)(k,{onSubmit:function(e){var t=Object(l.a)(Object(l.a)({},e),{},{id:Object(u.a)()});n.map((function(e){return e.name})).includes(t.name)?b.b.error("\u0422\u0430\u043a\u043e\u0435 \u0438\u043c\u044f \u0443\u0436\u0435 \u0435\u0441\u0442\u044c \u0432 \u0441\u043f\u0438\u0441\u043a\u0435 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043e\u0432, \u043f\u0440\u0438\u0434\u0443\u043c\u0430\u0439\u0442\u0435 \u043d\u043e\u0432\u043e\u0435 \u0438\u043c\u044f."):r([].concat(Object(i.a)(n),[t]))}}),Object(v.jsx)("h2",{children:"Contacts"}),Object(v.jsx)(w,{filterValue:j,onFilterChange:function(e){var t=e.toLowerCase();f(t)}}),Object(v.jsx)(y,{contacts:n,filterValue:j,onDelete:function(e){var t=n.filter((function(t){return t.id!==e}));r(t)}}),Object(v.jsx)(b.a,{position:"top-right"})]})}function S(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(z,{})})}o.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(S,{})}),document.querySelector("#root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.de2a3f23.chunk.js.map