"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[736],{251:function(e,n,r){r.d(n,{Eb:function(){return f},TP:function(){return s},Jh:function(){return p},gH:function(){return o},Hg:function(){return i}});var t=r(861),a=r(757),u=r.n(a),c=r(340).Z.create({baseURL:"https://api.themoviedb.org/3"}),i=function(){var e=(0,t.Z)(u().mark((function e(){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("/trending/movie/day?api_key=2e39566998eaefb55fd8d83f773b6784");case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,t.Z)(u().mark((function e(n){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("/movie/".concat(n,"?api_key=2e39566998eaefb55fd8d83f773b6784&language=en-US"));case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),o=function(){var e=(0,t.Z)(u().mark((function e(n){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("/search/movie?api_key=2e39566998eaefb55fd8d83f773b6784&query=".concat(n,"&include_adult=false&language=en-US&page=1"));case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)(u().mark((function e(n){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("movie/".concat(n,"/credits?language=en-US&api_key=2e39566998eaefb55fd8d83f773b6784"));case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(u().mark((function e(n){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("/movie/".concat(n,"/reviews?language=en-US&page=1&api_key=2e39566998eaefb55fd8d83f773b6784"));case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},736:function(e,n,r){r.r(n);var t=r(861),a=r(439),u=r(757),c=r.n(u),i=r(689),s=r(791),o=r(251),f=r(184);n.default=function(){var e=(0,s.useState)([]),n=(0,a.Z)(e,2),r=n[0],u=n[1],p=(0,s.useState)(!1),d=(0,a.Z)(p,2),h=d[0],v=d[1],l=(0,s.useState)(null),b=(0,a.Z)(l,2),m=b[0],w=b[1],g=(0,i.UO)().movieId,k=(0,s.useCallback)(function(){var e=(0,t.Z)(c().mark((function e(n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.Jh)(n);case 3:r=e.sent,u(r.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),w(e.t0);case 10:return e.prev=10,v(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(n){return e.apply(this,arguments)}}(),[]);return(0,s.useEffect)((function(){k(g)}),[k,g]),(0,f.jsxs)(f.Fragment,{children:[h&&(0,f.jsx)("p",{children:"Loading..."}),m&&(0,f.jsx)("p",{children:"Something went wrong..."}),(0,f.jsx)("ul",{children:r.length>0?r.map((function(e){var n=e.author,r=e.content,t=e.id;return(0,f.jsxs)("li",{children:[(0,f.jsx)("h3",{children:n}),r]},t)})):"We don't have any reviews for this movie"})]})}}}]);
//# sourceMappingURL=736.40c41d69.chunk.js.map