(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{33:function(e,t,a){e.exports=a(67)},56:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(28),c=a.n(s),l=a(7),o=a(1),m=a(15),i=a.n(m),u=a(29),v=a(10),p=a(11),E=a(13),d=a(12),f=a(30),_=a.n(f),y=a(32);var h=function(){var e=Object(n.useState)(0),t=Object(y.a)(e,2),a=t[0],s=t[1];return r.a.createElement("div",null,r.a.createElement("span",null,"\uc88b\uc544\uc694 ",a,"\uac1c"),r.a.createElement("button",{onClick:function(){return s(a+1)}},r.a.createElement("span",null,"\u2764\ufe0f")),r.a.createElement("button",{onClick:function(){return s(a-1)}},r.a.createElement("span",null,"\ud83e\udd0d")))};a(56);var g=function(e){var t=e.id,a=e.year,n=e.title,s=e.summary,c=e.poster,o=e.genres;return r.a.createElement("div",{className:"movie"},r.a.createElement(l.b,{to:{pathname:"/movie/".concat(t),state:{year:a,title:n,summary:s,poster:c,genres:o}}},r.a.createElement("img",{src:c,alt:n,title:n}),r.a.createElement("div",{className:"movie__data"},r.a.createElement("h3",{className:"movie__title"},n),r.a.createElement("h5",{className:"movie__year"},a),r.a.createElement("ul",{className:"movie__genres"},o.map((function(e,t){return r.a.createElement("li",{key:t,className:"genres__genre"},e)}))),r.a.createElement("p",{className:"movie__summary"},s.slice(0,180),"..."))),r.a.createElement(h,null))},b=(a(62),function(e){Object(E.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,movies:[]},e.getMovies=Object(u.a)(i.a.mark((function t(){var a,n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:a=t.sent,n=a.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Loading...")):r.a.createElement("div",{className:"movies"},a.map((function(e){return r.a.createElement(g,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),a}(r.a.Component));a(63);var N=function(e){return console.log(e),r.a.createElement("div",{className:"about__container"},r.a.createElement("span",null,"\u201cFreedom is the freedom to say that two plus two make four. If that is granted, all else follows.\u201d"),r.a.createElement("span",null,"\u2212 George Orwell, 1984"))},k=(a(64),function(e){Object(E.a)(a,e);var t=Object(d.a)(a);function a(){return Object(v.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,a=e.history;void 0===t.state&&a.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?r.a.createElement("div",{className:"movie"},r.a.createElement("img",{src:e.state.poster,alt:e.state.title,title:e.state.title}),r.a.createElement("div",{className:"movie__data"},r.a.createElement("h3",{className:"movie__title"},e.state.title),r.a.createElement("h5",{className:"movie__year"},e.state.year),r.a.createElement("ul",{className:"genres"},e.state.genres.map((function(e,t){return r.a.createElement("li",{key:t,className:"genres__genre"},e)}))),r.a.createElement("p",{className:"movie__summary"},e.state.summary))):null}}]),a}(r.a.Component));a(65);var j=function(){return r.a.createElement("div",{className:"nav"},r.a.createElement(l.b,{to:"/"},"Home"),r.a.createElement(l.b,{to:{pathname:"/about",state:{fromNavigation:!0}}},"About"))};a(66);var O=function(){return r.a.createElement(l.a,null,r.a.createElement(j,null),r.a.createElement(o.a,{path:"/",exact:!0,component:b}),r.a.createElement(o.a,{path:"/about",component:N}),r.a.createElement(o.a,{path:"/movie/:id",component:k}))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.36c947b8.chunk.js.map