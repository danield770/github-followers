(this["webpackJsonpgithub-folowwers"]=this["webpackJsonpgithub-folowwers"]||[]).push([[0],{18:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(6),c=n.n(a),l=(n(18),n(2)),s=n.n(l),u=n(3),i=n(12),d=n(5),f=function(){return Object(d.b)()},v=d.c,p=function(){var e=Object(u.a)(s.a.mark((function e(t,n){var o,r,a,c,l,u,i,d,f,v,p,h,b,m,j;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=Object({NODE_ENV:"production",PUBLIC_URL:"/github-followers",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).PORT||8080,r="http://localhost:".concat(o,"/api"),e.prev=2,h=void 0===n?"".concat(r,"?user=").concat(t):"".concat(r,"?user=").concat(t,"&cursor=").concat(n),e.next=6,fetch(h);case 6:return b=e.sent,e.next=9,b.json();case 9:return m=e.sent,j={names:null===m||void 0===m||null===(a=m.user)||void 0===a||null===(c=a.followers)||void 0===c||null===(l=c.edges)||void 0===l?void 0:l.map((function(e){var t,n;return[null===e||void 0===e||null===(t=e.node)||void 0===t?void 0:t.login,null===e||void 0===e||null===(n=e.node)||void 0===n?void 0:n.name]})),endCursor:null===m||void 0===m||null===(u=m.user)||void 0===u||null===(i=u.followers)||void 0===i||null===(d=i.pageInfo)||void 0===d?void 0:d.endCursor,hasNextPage:null===m||void 0===m||null===(f=m.user)||void 0===f||null===(v=f.followers)||void 0===v||null===(p=v.pageInfo)||void 0===p?void 0:p.hasNextPage},e.abrupt("return",j);case 14:throw e.prev=14,e.t0=e.catch(2),e.t0;case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t,n){return e.apply(this,arguments)}}(),h=n(13),b=n(8),m=Object(b.b)({name:"homePage",initialState:{followersPages:[],user:"",isAccountName:!1,depth:1},reducers:{addUser:function(e,t){e.user=t.payload,e.followersPages=[],e.depth=1},addFollowersPage:function(e,t){e.followersPages=[].concat(Object(h.a)(e.followersPages),[t.payload])},updateDepth:function(e,t){e.depth+=t.payload},updateNameType:function(e,t){e.isAccountName=t.payload}}}),j=function(e){return e.homePage.user},g=function(e){return e.homePage.isAccountName},w=function(e){return e.homePage.depth},O=function(e){var t,n,o;return null===(t=e.homePage)||void 0===t||null===(n=t.followersPages)||void 0===n||null===(o=n[e.homePage.depth-1])||void 0===o?void 0:o.names},x=function(e){var t,n,o,r;return[null===(t=e.homePage.followersPages)||void 0===t||null===(n=t[e.homePage.depth-1])||void 0===n?void 0:n.endCursor,null===(o=e.homePage.followersPages)||void 0===o||null===(r=o[e.homePage.depth-1])||void 0===r?void 0:r.hasNextPage]},P=m.actions,N=P.addUser,y=P.addFollowersPage,S=P.updateDepth,k=P.updateNameType,T=m.reducer,C=n(1);var D=function(){var e=v(j),t=v(O),n=v(g),o={"--start-count":30*(v(w)-1)};return Object(C.jsxs)("ol",{className:"followers ".concat(0===(null===t||void 0===t?void 0:t.length)?"followers--empty":""),style:o,children:[0===(null===t||void 0===t?void 0:t.length)&&Object(C.jsxs)("div",{children:["Unfortunately ",e," currently doesn't have any followers \ud83d\ude22"]}),null===t||void 0===t?void 0:t.map((function(e){return Object(C.jsx)("li",{className:"follower ".concat(n&&!e[1]?"follower-empty":""),children:n?e[1]||"- No name specified -":e[0]},e[0])}))]})};var E=function(){var e,t=v(j),n=v(w),o=v(x),r=(e=f(),{setFollowersPage:function(t){return e(y(t))},setDepth:function(t){return e(S(t))}}),a=r.setFollowersPage,c=r.setDepth;return Object(C.jsxs)("div",{className:"pagination-buttons",children:[n>1&&Object(C.jsx)("button",{className:"btn prev",title:"".concat(1+30*(n-2)," - ").concat(30*(n-1)),type:"button",onClick:function(){c(-1)},children:"\u2039 Show previous 30 followers"}),o[1]&&Object(C.jsx)("button",{className:"btn next",title:"".concat(1+30*n," - ").concat(30*(n+1)),type:"button",onClick:function(){(function(){var e=Object(u.a)(s.a.mark((function e(){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(t,o[0]);case 2:n=e.sent,console.log("page: nextclick",n),n&&a(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(),c(1)},children:"Show more followers \u203a"})]})};function F(e){var t,n=(t=f(),{setNewUser:function(e){return t(N(e))},setFollowersPage:function(e){return t(y(e))},setNameType:function(e){return t(k(e))}}),r=n.setNewUser,a=n.setFollowersPage,c=n.setNameType,l=Object(o.useRef)(null),d=Object(o.useState)(),h=Object(i.a)(d,2),b=h[0],m=h[1],j=Object(o.useState)(""),w=Object(i.a)(j,2),O=w[0],x=w[1],P=v(g);function S(){return(S=Object(u.a)(s.a.mark((function e(t){var n,o,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),console.log("formInput: ",null===l||void 0===l||null===(n=l.current)||void 0===n?void 0:n.value),a=null===(o=l.current)||void 0===o?void 0:o.value,b!==a){e.next=5;break}return e.abrupt("return");case 5:a&&m(a),a&&r(a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(o.useEffect)((function(){b&&function(){var e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p(b,undefined);case 3:t=e.sent,console.log("page",t),t&&a(t),x(""),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("error 456: ",e.t0),x(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}()()}),[b]),Object(C.jsxs)("main",{children:[Object(C.jsxs)("form",{onSubmit:function(e){return S.apply(this,arguments)},children:[Object(C.jsx)("input",{className:"input",type:"text",ref:l,placeholder:"Enter github login name"}),Object(C.jsx)("button",{className:"btn btn--primary",children:"Display followers"}),Object(C.jsxs)("div",{className:"checkbox-wpr",children:[Object(C.jsx)("input",{className:"checkbox",type:"checkbox",id:"cb",onChange:function(){c(!P)}}),Object(C.jsx)("label",{className:"",htmlFor:"cb",children:"Login Names"}),Object(C.jsx)("label",{htmlFor:"cb",children:"Account Names"})]})]}),Object(C.jsx)(E,{}),""!==O.toString()?Object(C.jsx)("div",{className:"error-msg",children:O.toString()}):Object(C.jsx)(D,{})]})}n(25);var _=function(){return Object(C.jsx)(F,{})},U=Object(b.a)({reducer:{homePage:T}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(C.jsx)(r.a.StrictMode,{children:Object(C.jsx)(d.a,{store:U,children:Object(C.jsx)(_,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.254313d7.chunk.js.map