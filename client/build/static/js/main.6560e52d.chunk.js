(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{25:function(e,t,a){e.exports=a.p+"static/media/edit.ce82bc88.svg"},42:function(e,t,a){e.exports=a(80)},51:function(e,t,a){},52:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),s=a(23),o=a.n(s),u=a(2),i=a(5),l=a(4),m=(a(51),a(52),a(9)),p=a(1),f=a.n(p),d=a(6),b=a(7),E=a(14),v=a.n(E),g=Object(b.b)("login/fetchUserLogin",function(){var e=Object(d.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("/api/login/".concat(t));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),j=Object(b.b)("login/registerUser",function(){var e=Object(d.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.post("/api/login",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),h=Object(b.c)({name:"login",initialState:{isLoggedIn:!1,username:"",userId:null},reducers:{logout:function(){return{isLoggedIn:!1,username:"",userId:null}}},extraReducers:(n={},Object(m.a)(n,g.fulfilled,(function(e,t){return{isLoggedIn:!0,username:t.payload.username,userId:t.payload.id}})),Object(m.a)(n,j.fulfilled,(function(e,t){return{isLoggedIn:!0,username:t.payload.username,userId:t.payload.id}})),n)}),O=h.actions.logout;function y(){var e=Object(u.c)((function(e){return e.login})),t=Object(u.b)();return e.isLoggedIn?c.a.createElement("div",{className:"logout-container"},c.a.createElement("p",{className:"welcome-text"},"Welcome, ",e.username),c.a.createElement(i.b,{to:"/user/".concat(e.userId),className:"my-posts"},c.a.createElement("button",{className:"login-btn login my-posts"},"My Posts")),c.a.createElement(i.b,{to:"/"},c.a.createElement("button",{className:"logout login-btn",onClick:function(){return t(O())}},"Logout"))):c.a.createElement("div",null,c.a.createElement(i.b,{to:"/register"},c.a.createElement("button",{className:"login-btn login"},"Register")),c.a.createElement(i.b,{to:"/login"},c.a.createElement("button",{className:"login-btn login"},"Login")))}a(72);function N(){return c.a.createElement("div",{className:"header"},c.a.createElement(i.b,{to:"/",className:"nav-item"},c.a.createElement("h1",{className:"nav-item__chatty-time"},"Chatty Time")),c.a.createElement(y,null))}var x,w,k=a(13),S=a(20),I=Object(b.b)("posts/fetchPosts",Object(d.a)(f.a.mark((function e(){var t,a,n=arguments;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:1,e.next=3,v.a.get("/api/posts/page/".concat(t));case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})))),L=Object(b.b)("posts/fetchUserPosts",function(){var e=Object(d.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.post("/api/posts/user",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),P=Object(b.b)("posts/fetchSinglePost",function(){var e=Object(d.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("/api/posts/".concat(t));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),_=Object(b.b)("posts/addPost",function(){var e=Object(d.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.post("/api/posts/page/1",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),C=Object(b.b)("posts/editPost",function(){var e=Object(d.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.put("/api/posts/".concat(t.id),{body:t.inputVal});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),R=Object(b.b)("posts/deletePost",function(){var e=Object(d.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.delete("/api/posts/".concat(t));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),U=Object(b.c)({name:"posts",initialState:[],reducers:{reset:function(){return[]}},extraReducers:(x={},Object(m.a)(x,I.fulfilled,(function(e,t){var a=[].concat(Object(S.a)(e),Object(S.a)(t.payload)),n=a.map((function(e){return e.id})),r=new Set(n);return a.filter((function(e){return!!r.has(e.id)&&(r.delete(e.id),!0)}))})),Object(m.a)(x,_.fulfilled,(function(e,t){return[t.payload].concat(Object(S.a)(e))})),Object(m.a)(x,L.fulfilled,(function(e,t){return t.payload})),Object(m.a)(x,P.fulfilled,(function(e,t){return[t.payload]})),x)}),D=U.actions.reset,q=Object(b.c)({name:"error",initialState:"",reducers:{resetError:function(){return""}},extraReducers:(w={},Object(m.a)(w,g.rejected,(function(){return"Sorry, that username doesn't exist. Have you registered?"})),Object(m.a)(w,I.rejected,(function(){return"You've reached the end of all posts!"})),Object(m.a)(w,j.rejected,(function(){return"Sorry, that username is already taken..."})),w)}),A=q.actions.resetError;a(73);function T(){var e=Object(r.useState)(""),t=Object(k.a)(e,2),a=t[0],n=t[1],s=Object(u.b)(),o=Object(l.f)(),i=Object(u.c)((function(e){return e.error}));Object(r.useEffect)((function(){s(A())}),[]);var m=function(){var e=Object(d.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=document.querySelector(".error")).className="error",t.preventDefault(),s(A()),e.next=6,s(g(a));case 6:"login/fetchUserLogin/fulfilled"===e.sent.type?o.push("/"):n.className="error error-active";case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"login-container"},c.a.createElement("h1",{className:"login-title"},"Log In"),c.a.createElement("form",{onSubmit:m,className:"login-form"},c.a.createElement("input",{id:"username",type:"text",value:a,className:"login-input",onChange:function(e){return n(e.target.value)},placeholder:"Username"}),c.a.createElement("button",{className:"login-submit",type:"submit"},"Submit")),c.a.createElement("p",{className:"error"},i))}a(74);function H(){var e=Object(r.useState)(""),t=Object(k.a)(e,2),a=t[0],n=t[1],s=Object(u.b)(),o=Object(l.f)(),i=Object(u.c)((function(e){return e.error}));Object(r.useEffect)((function(){s(A())}),[]);var m=function(){var e=Object(d.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=document.querySelector(".error")).className="error",t.preventDefault(),s(A()),e.next=6,s(j({username:a}));case 6:"login/registerUser/fulfilled"===e.sent.type?o.push("/"):n.className="error error-active";case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"register-container"},c.a.createElement("h1",{className:"register-title"},"Register"),c.a.createElement("h2",{className:"register-subtitle"},"All you need is a username!"),c.a.createElement("form",{onSubmit:m,className:"register-form"},c.a.createElement("input",{type:"text",value:a,className:"register-input",onChange:function(e){return n(e.target.value)},placeholder:"Username"}),c.a.createElement("button",{className:"register-submit",type:"submit"},"Register me!")),c.a.createElement("p",{className:"error"},i))}var J=a(41),M=a(19),V=a.n(M);a(76),a(77);function W(){var e=Object(r.useState)(""),t=Object(k.a)(e,2),a=t[0],n=t[1],s=Object(u.b)(),o=Object(u.c)((function(e){return e.login.userId}));return c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),s(_({body:a,user_id:o})),n("")}},c.a.createElement("input",{type:"text",className:"post-input",placeholder:"What's on your mind?",value:a,onChange:function(e){return n(e.target.value)}}),c.a.createElement("button",{className:"post-submit"},"Post"))}var B=Object(b.b)("authors/fetchPostAuthor",function(){var e=Object(d.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("/api/user/".concat(t));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Y=Object(b.c)({name:"authors",initialState:{},extraReducers:Object(m.a)({},B.fulfilled,(function(e,t){var a=t.payload;e[a.id]=a.username}))}),z=a(25),F=a.n(z);function G(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.posts})),a=Object(u.c)((function(e){return e.author})),n=Object(u.c)((function(e){return e.error})),s=Object(u.c)((function(e){return e.login})),o=Object(r.useState)(1),l=Object(k.a)(o,2),m=l[0],p=l[1];return Object(r.useEffect)((function(){e(A()),e(D()),e(I(m))}),[]),Object(r.useEffect)((function(){var a,n=Object(S.a)(new Set(t.map((function(e){return e.user_id})))),r=Object(J.a)(n);try{for(r.s();!(a=r.n()).done;){var c=a.value;e(B(c))}}catch(s){r.e(s)}finally{r.f()}}),[t]),Object(r.useEffect)((function(){var e=document.querySelector(".post-error");e.className="post-error",n&&(e.className="post-error post-error-active")}),[n]),c.a.createElement("div",{className:"posts-container"},s.isLoggedIn?c.a.createElement(W,null):c.a.createElement("p",{className:"post-login-message"},"Log in or register to make a post"),t.map((function(e){return e.user_id===s.userId?c.a.createElement("div",{key:e.id,className:"post-container"},c.a.createElement("p",{className:"post-body"},e.body),c.a.createElement(i.b,{to:"/user/".concat(e.user_id),className:"post-author-container"},c.a.createElement("p",{className:"post-author"},"@",a[e.user_id]," (you)"),c.a.createElement("p",{className:"post-timestamp"},"~ ",V.a.utc(e.timestamp).local().fromNow())),c.a.createElement(i.b,{to:"/post/".concat(e.id)},c.a.createElement("button",{className:"post-edit"},c.a.createElement("img",{src:F.a})))):c.a.createElement("div",{key:e.id,className:"post-container"},c.a.createElement("p",{className:"post-body"},e.body),c.a.createElement(i.b,{to:"/user/".concat(e.user_id),className:"post-author-container"},c.a.createElement("p",{className:"post-author"},"@",a[e.user_id]),c.a.createElement("p",{className:"post-timestamp"},"~ ",V.a.utc(e.timestamp).local().fromNow())))})),c.a.createElement("button",{className:"posts-next-page",onClick:function(){e(I(m+1)),p(m+1)}},"Load more posts"),c.a.createElement("p",{className:"post-error"},n))}a(78);function K(e){var t=Object(u.b)(),a=Object(u.c)((function(e){return e.posts})),n=Object(u.c)((function(e){return e.login.userId})),s=Object(u.c)((function(t){return t.author[Number(e.match.params.id)]}));return Object(r.useEffect)((function(){s||t(B(Number(e.match.params.id))),t(L({user_id:Number(e.match.params.id)}))}),[]),c.a.createElement("div",{className:"user-posts-container"},c.a.createElement("h1",{className:"username-title"},"@",s),a.map((function(e){return e.user_id===n?c.a.createElement("div",{key:e.id,className:"post-container"},c.a.createElement("p",{className:"post-body"},e.body),c.a.createElement("p",{className:"post-timestamp post-author-container"},"~ ",V.a.utc(e.timestamp).local().fromNow()),c.a.createElement(i.b,{to:"/post/".concat(e.id)},c.a.createElement("button",{className:"post-edit"},c.a.createElement("img",{src:F.a})))):c.a.createElement("div",{key:e.id,className:"post-container"},c.a.createElement("p",{className:"post-body"},e.body),c.a.createElement("p",{className:"post-timestamp post-author-container"},"~ ",V.a.utc(e.timestamp).local().fromNow()))})))}a(79);function Q(e){var t=Object(u.b)(),a=Object(u.c)((function(e){return e.login.userId})),n=Object(r.useState)(!1),s=Object(k.a)(n,2),o=s[0],i=s[1],m=Object(u.c)((function(e){return e.posts})),p=Object(r.useState)(""),b=Object(k.a)(p,2),E=b[0],v=b[1],g=Object(l.f)(),j=Object(r.useState)(!1),h=Object(k.a)(j,2),O=h[0],y=h[1];Object(r.useEffect)((function(){t(P(e.match.params.id)).then((function(e){i(!0),v(e.payload.body)}))}),[]);var N=function(){var a=Object(d.a)(f.a.mark((function a(n){return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),a.next=3,t(C({id:e.match.params.id,inputVal:E}));case 3:"posts/editPost/fulfilled"===a.sent.type&&g.push("/");case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),x=function(){var a=Object(d.a)(f.a.mark((function a(){var n;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(O){a.next=8;break}(n=document.querySelector(".post-delete")).innerText="Are you sure?",n.style.backgroundColor="rgb(189, 0, 0)",n.style.color="aliceblue",y(!0),a.next=12;break;case 8:return a.next=10,t(R(e.match.params.id));case 10:"posts/deletePost/fulfilled"===a.sent.type&&g.push("/");case 12:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return o?a===m[0].user_id?c.a.createElement("div",{className:"edit-post-container"},c.a.createElement("h2",null,"Edit Post"),c.a.createElement("form",{onSubmit:N},c.a.createElement("textarea",{value:E,onChange:function(e){return v(e.target.value)},rows:"10",cols:"40",className:"edit-post-input"}),c.a.createElement("br",null),c.a.createElement("button",{type:"submit",className:"post-edit post-edit-submit"},"Edit")),c.a.createElement("button",{className:"post-edit post-delete",onClick:x},"Delete Post")):c.a.createElement("div",{className:"edit-post-container"},c.a.createElement("h2",null,"This is not your post! Have you logged in?"),c.a.createElement("p",null,m[0].body)):null}function X(){return c.a.createElement("div",null,c.a.createElement(N,null),c.a.createElement(l.c,null,c.a.createElement(l.a,{path:"/login"},c.a.createElement(T,null)),c.a.createElement(l.a,{path:"/register"},c.a.createElement(H,null)),c.a.createElement(l.a,{path:"/user/:id",component:K}),c.a.createElement(l.a,{path:"/post/:id",component:Q}),c.a.createElement(l.a,{path:"/"},c.a.createElement(G,null))))}var Z=Object(b.a)({reducer:{login:h.reducer,error:q.reducer,posts:U.reducer,author:Y.reducer}});o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(i.a,null,c.a.createElement(u.a,{store:Z},c.a.createElement(X,null)))),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.6560e52d.chunk.js.map