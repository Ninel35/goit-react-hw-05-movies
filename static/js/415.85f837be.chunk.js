"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{251:function(e,n,t){t.d(n,{Eb:function(){return f},TP:function(){return s},Jh:function(){return p},gH:function(){return o},Hg:function(){return i}});var r=t(861),a=t(757),u=t.n(a),c=t(340).Z.create({baseURL:"https://api.themoviedb.org/3"}),i=function(){var e=(0,r.Z)(u().mark((function e(){var n,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("/trending/movie/day?api_key=2e39566998eaefb55fd8d83f773b6784");case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("/movie/".concat(n,"?api_key=2e39566998eaefb55fd8d83f773b6784&language=en-US"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("/search/movie?api_key=2e39566998eaefb55fd8d83f773b6784&query=".concat(n,"&include_adult=false&language=en-US&page=1"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("movie/".concat(n,"/credits?language=en-US&api_key=2e39566998eaefb55fd8d83f773b6784"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("/movie/".concat(n,"/reviews?language=en-US&page=1&api_key=2e39566998eaefb55fd8d83f773b6784"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},487:function(e,n,t){t(791);var r=t(87),a=t(184);n.Z=function(e){var n=e.movies,t=e.location;return(0,a.jsx)("ul",{children:n.map((function(e){return(0,a.jsx)("li",{children:(0,a.jsx)(r.rU,{to:"/movies/"+e.id,state:t,children:e.title})},e.id)}))})}},415:function(e,n,t){t.r(n);var r=t(861),a=t(439),u=t(757),c=t.n(u),i=t(251),s=t(487),o=t(791),f=t(689),p=t(184);n.default=function(){var e=(0,o.useState)([]),n=(0,a.Z)(e,2),t=n[0],u=n[1],d=(0,o.useState)(!1),l=(0,a.Z)(d,2),v=l[0],h=l[1],b=(0,o.useState)(null),m=(0,a.Z)(b,2),g=m[0],x=m[1],k=(0,f.TH)(),w=(0,o.useCallback)((0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.Hg)();case 3:n=e.sent,u(n.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),x(e.t0);case 10:return e.prev=10,h(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])}))),[]);return(0,o.useEffect)((function(){w()}),[w]),(0,p.jsxs)(p.Fragment,{children:[v&&(0,p.jsx)("p",{children:"Loading..."}),g&&(0,p.jsx)("p",{children:"Something went wrong..."}),t.length>0&&(0,p.jsx)(s.Z,{movies:t,location:k})]})}}}]);
//# sourceMappingURL=415.85f837be.chunk.js.map