(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{12:function(t){t.exports=JSON.parse('[{"id":"id-1","name":"John Piters","phone":"555-55-55"},{"id":"id-2","name":"Piter Johnson","phone":"444-44-44"},{"id":"id-3","name":"Pit Ivans","phone":"333-33-33"},{"id":"id-4","name":"Ivan Piterson","phone":"222-22-22"}]')},14:function(t,e,n){t.exports={label:"Filter_label__34f9k"}},15:function(t,e,n){t.exports={container:"Container_container__G1EWC"}},2:function(t,e,n){t.exports={form:"NameForm_form__2IG7i",container:"NameForm_container__L3VaN",label:"NameForm_label__1nuCU",input:"NameForm_input__evAbp",button:"NameForm_button__rA09U"}},22:function(t,e,n){},31:function(t,e,n){},32:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),o=n.n(c),r=n(11),i=n.n(r),s=(n(22),n(16)),l=n(6),u=n(7),h=n(9),b=n(8),d=n(3),m=n.n(d),j=n(4),p=n.n(j),f=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(a.jsx)("ul",{children:e.map((function(t){var e=t.id,c=t.name,o=t.phone;return Object(a.jsxs)("li",{className:p.a.container,children:[Object(a.jsx)("p",{className:p.a.name,children:c}),Object(a.jsx)("p",{className:p.a.name,children:o}),Object(a.jsx)("button",{className:p.a.button,type:"button",onClick:function(){return n(e)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]},e)}))})},O=n(12),v=n(13),x=n(2),C=n.n(x),_=function(t){Object(h.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",phone:"",id:""},t.nameInputId=m.a.generate(),t.phoneInputId=m.a.generate(),t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(v.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.setState({name:"",phone:""})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.phone;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("form",{className:C.a.form,onSubmit:this.handleSubmit,children:Object(a.jsxs)("div",{className:C.a.container,children:[Object(a.jsxs)("label",{className:C.a.label,children:["Name",Object(a.jsx)("input",{type:"text",name:"name",value:e,onChange:this.handleChange,id:this.nameInputId})]}),Object(a.jsxs)("label",{className:C.a.label,children:["Phone",Object(a.jsx)("input",{type:"text",name:"phone",value:n,onChange:this.handleChange,id:this.phoneInputId})]}),Object(a.jsx)("button",{className:C.a.button,type:"submit",children:"Add contact"})]})})})}}]),n}(c.Component),g=n(14),N=n.n(g),F=function(t){var e=t.value,n=t.onChange;return Object(a.jsxs)("label",{className:N.a.label,children:["Name filter ",Object(a.jsx)("input",{type:"text",value:e,onChange:n})]})},y=n(15),I=n.n(y);var S=function(t){var e=t.children;return Object(a.jsx)("div",{className:I.a.container,children:e})},w=(n(31),function(t){Object(h.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:O,name:"",filter:""},t.addContact=function(e){var n=e.name,a=e.phone,c={id:m.a.generate(),name:n,phone:a};t.state.contacts.find((function(t){return t.name.toLowerCase()===c.name.toLowerCase()}))?alert("".concat(n," is already added.")):t.setState((function(t){var e=t.contacts;return{contacts:[].concat(Object(s.a)(e),[c])}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContacts();return Object(a.jsxs)(S,{children:[Object(a.jsx)("h1",{className:"title",children:" Phonebook "}),Object(a.jsx)("h2",{className:"subtitle",children:"Add new contact"}),Object(a.jsx)(_,{onSubmit:this.addContact}),Object(a.jsx)("h2",{className:"subtitle",children:"Find contact"}),Object(a.jsx)(F,{value:t,onChange:this.changeFilter}),Object(a.jsx)("h2",{className:"subtitle",children:"Contact list"}),Object(a.jsx)(f,{contacts:e,onDeleteContact:this.deleteContact})]})}}]),n}(c.Component)),L=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,33)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,o=e.getLCP,r=e.getTTFB;n(t),a(t),c(t),o(t),r(t)}))};i.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(w,{})}),document.getElementById("root")),L()},4:function(t,e,n){t.exports={container:"ContactList_container__3YfxC",name:"ContactList_name__AHmJ2",button:"ContactList_button__1DvVT"}}},[[32,1,2]]]);
//# sourceMappingURL=main.662c03a8.chunk.js.map