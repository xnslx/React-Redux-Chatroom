(this["webpackJsonpreact-redux-chatroom"]=this["webpackJsonpreact-redux-chatroom"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports={SideBar:"SideBar_SideBar__3LhU8",List:"SideBar_List__2YW92",ListItem:"SideBar_ListItem__z4mnJ"}},function(e,t,a){e.exports={User:"User_User__2jvCF",Image:"User_Image__1-Mu5",Button:"User_Button__fFtO6"}},,,,function(e,t,a){e.exports={Header:"Header_Header__3qoaR",Status:"Header_Status__2UbhJ"}},function(e,t,a){e.exports={Form:"UserInput_Form__29nbm",Input:"UserInput_Input__1eoQ6"}},,,,function(e,t,a){e.exports=a.p+"static/media/ayo-ogunseinde-sibVwORYqs0-unsplash.9f2dcbe5.jpg"},function(e,t,a){e.exports=a.p+"static/media/kal-visuals-b1Hg7QI-zcc-unsplash.245453a4.jpg"},function(e,t,a){e.exports=a.p+"static/media/michael-dam-mEZ3PoFGs_k-unsplash.de9b37f0.jpg"},function(e,t,a){e.exports=a.p+"static/media/philipe-cavalcante-Ugpcxb0jG4Q-unsplash.c9eb29ae.jpg"},function(e,t,a){e.exports=a.p+"static/media/christopher-campbell-rDEOVtE7vOs-unsplash.d30290e3.jpg"},function(e,t,a){e.exports={Main:"Main_Main__3hqTp"}},function(e,t,a){e.exports={Container:"ChatWindow_Container__3DRMt"}},function(e,t,a){e.exports={Chats:"Chats_Chats__1dZJh"}},,function(e,t,a){e.exports=a(44)},,,,,function(e,t,a){},,,,,,,,,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),r=a(4),c=a.n(r),i=(a(30),a(3)),u=a(1),o=a(5),l=a(2),m=a(16),d=a.n(m),_=a(17),g=a.n(_),v=a(18),p=a.n(v),b=a(19),f=a.n(b),E=a(20),h=a.n(E),O=a(46),j=a(37),I={Tony:{userName:"Tony",avatar:d.a,status:j.sentence(),userId:Object(O.a)()},Jane:{userName:"Jane",avatar:g.a,status:j.sentence(),userId:Object(O.a)()},Anny:{userName:"Anny",avatar:p.a,status:j.sentence(),userId:Object(O.a)()},Emily:{userName:"Emily",avatar:f.a,status:j.sentence(),userId:Object(O.a)()}},U={userName:"Xian",avatar:h.a,status:j.sentence(),userId:Object(O.a)()},x={id:null},y={messages:{Tony:{0:{id:Object(O.a)(),is_user_msg:!1,text:j.sentence()},1:{id:Object(O.a)(),is_user_msg:!0,text:j.sentence()},2:{id:Object(O.a)(),is_user_msg:!1,text:j.sentence()},3:{id:Object(O.a)(),is_user_msg:!0,text:j.sentence()}},Jane:{0:{id:Object(O.a)(),is_user_msg:!1,text:j.sentence()},1:{id:Object(O.a)(),is_user_msg:!0,text:j.sentence()},2:{id:Object(O.a)(),is_user_msg:!1,text:j.sentence()},3:{id:Object(O.a)(),is_user_msg:!0,text:j.sentence()}},Anny:{0:{id:Object(O.a)(),is_user_msg:!1,text:j.sentence()},1:{id:Object(O.a)(),is_user_msg:!0,text:j.sentence()},2:{id:Object(O.a)(),is_user_msg:!1,text:j.sentence()},3:{id:Object(O.a)(),is_user_msg:!0,text:j.sentence()}},Emily:{0:{id:Object(O.a)(),is_user_msg:!1,text:j.sentence()},1:{id:Object(O.a)(),is_user_msg:!0,text:j.sentence()},2:{id:Object(O.a)(),is_user_msg:!1,text:j.sentence()},3:{id:Object(O.a)(),is_user_msg:!0,text:j.sentence()}}},activeUserMessages:{}},S={value:""},N=Object(i.b)({contacts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;return t.type,e},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;return t.type,e},activeUserId:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case" SET_ACTIVE_USER_ID":return Object(l.a)(Object(l.a)({},e),{},{id:t.activeUserId});default:return e}},messages:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_MESSAGES":return Object(l.a)(Object(l.a)({},e),{},{activeUserMessages:e.messages[t.userName]});case"USER_SUBMIT":var a=+Object.keys(e.activeUserMessages).pop()+1;return Object(l.a)(Object(l.a)({},e),{},{activeUserMessages:Object(l.a)(Object(l.a)({},e.activeUserMessages),{},Object(o.a)({},a,{id:Object(O.a)(),is_user_msg:!0,text:t.userInput}))});default:return e}},userInput:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_INPUT":return{value:t.userInput};default:return e}}}),M=(a(43),a(6)),w=a.n(M),T=Object(u.b)((function(e){return{contacts:e.contacts,messages:e.messages.messages}}),null)((function(e){var t=Object.keys(e.contacts).map((function(t){return e.contacts[t]}));return n.a.createElement("aside",{className:w.a.SideBar},n.a.createElement(n.a.Fragment,null,t.map((function(t){return n.a.createElement("ul",{key:t.userId,className:w.a.List,onClick:function(){return function(t,a){e.dispatch(function(e){return{type:" SET_ACTIVE_USER_ID",activeUserId:e}}(t)),e.dispatch({type:"GET_MESSAGES",userName:a.userName})}(t.userId,t)}},n.a.createElement("img",{alt:"userImage",src:t.avatar,style:{width:"64px",height:"64px",borderRadius:"50%",objectFit:"cover"}}),n.a.createElement("li",{className:w.a.ListItem},n.a.createElement("strong",null,t.userName)))}))))})),R=a(21),k=a.n(R),B=a(7),C=a.n(B),L=Object(u.b)((function(e){return{user:e.user}}))((function(e){var t=e.user,a=t.userName,s=t.avatar,r=t.status;return n.a.createElement("div",{className:C.a.User},n.a.createElement("h2",null,"Welcome,",a),n.a.createElement("img",{alt:"userImage",src:s,style:{width:"72px",height:"72px",borderRadius:"50%",objectFit:"cover"},className:C.a.Image}),n.a.createElement("p",{style:{width:"30vw",marginLeft:"auto",marginRight:"auto"}},n.a.createElement("strong",null,"Status"),":",r),n.a.createElement("button",{className:C.a.Button},"Start a conversation"))})),A=a(24),D=a(22),F=a.n(D),J=a(11),G=a.n(J),H=function(e){var t=e.user,a=t.userName,s=t.status;return n.a.createElement("header",{className:G.a.Header},n.a.createElement("p",{style:{textAlign:"left",marginLeft:"20px"}},"To: ",n.a.createElement("strong",null,a)),n.a.createElement("p",{style:{textAlign:"left",marginLeft:"20px"},className:G.a.Status},s))},V=a(23),W=a.n(V),X=function(e){var t=e.message,a=e.id,s=e.isUserMsg;return n.a.createElement("span",{key:a,className:"Chat ".concat(s?"is-user-msg":"")},t)},q=function(e){var t=e.activeUserMessages,a=Object.keys(t).map((function(e){return t[e]}));return n.a.createElement("div",{className:W.a.Chats},a.map((function(e){return n.a.createElement(X,{message:e.text,key:e.id,isUserMsg:e.is_user_msg})})))},P=a(12),Q=a.n(P),z=Object(u.b)((function(e){return{activeUserId:e.activeUserId,contacts:e.contacts,messages:e.messages.messages,activeUserMessages:e.messages.activeUserMessages,userInput:e.userInput}}))((function(e){console.log(e);var t=Object(s.useRef)("");return n.a.createElement("form",{onSubmit:function(a){var s,n;a.preventDefault(),e.dispatch((s=t.current.value,n=e.activeUserId,{type:"USER_SUBMIT",userInput:s,activeUserId:n})),t.current.value=""},className:Q.a.Form},n.a.createElement("input",{placeholder:"imessage",ref:t,onBlur:function(){e.dispatch({type:"USER_INPUT",userInput:t.current.value})},className:Q.a.Input}))})),Y=Object(u.b)((function(e){return{activeUserId:e.activeUserId,contacts:e.contacts,messages:e.messages.messages,activeUserMessages:e.messages.activeUserMessages}}))((function(e){var t,a,s=Object.keys(e.contacts).map((function(t){return e.contacts[t]})).values(),r=Object(A.a)(s);try{for(r.s();!(a=r.n()).done;){var c=a.value;c.userId===e.activeUserId.id&&(t=c)}}catch(i){r.e(i)}finally{r.f()}return n.a.createElement("div",{className:F.a.Container},n.a.createElement(H,{user:t}),n.a.createElement(q,{activeUserMessages:e.activeUserMessages,activeUser:t}),n.a.createElement(z,null))})),Z=Object(u.b)((function(e){return{activeUserId:e.activeUserId}}))((function(e){var t=null;return t=null===e.activeUserId.id?n.a.createElement(L,null):n.a.createElement(Y,null),n.a.createElement("div",{className:k.a.Main},t)}));var $=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(T,null),n.a.createElement(Z,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var K=Object(i.c)(N,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());c.a.render(n.a.createElement(u.a,{store:K},n.a.createElement(n.a.StrictMode,null,n.a.createElement($,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[25,1,2]]]);
//# sourceMappingURL=main.445ae2f4.chunk.js.map