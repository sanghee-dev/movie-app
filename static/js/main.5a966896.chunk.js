(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{38:function(e,t,a){e.exports=a(77)},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(33),o=a.n(c),l=a(9),m=a(1),s=a(20),i=a.n(s),u=a(34),p=a(13),d=a(14),v=a(17),E=a(16),f=a(35),_=a.n(f),b=a(8);a(61);var g=function(){var e=Object(n.useState)(0),t=Object(b.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",null,r.a.createElement("button",{className:"heart__button",onClick:function(){return c(a+1)}},r.a.createElement("span",{className:"heart__emoji"},r.a.createElement("span",null,"\u2764\ufe0f"))),r.a.createElement("button",{className:"heart__button",onClick:function(){return c(a-1)}},r.a.createElement("span",{className:"heart__emoji"},r.a.createElement("span",null,"\ud83e\udd0d"))),r.a.createElement("span",{className:"heart__text"},"\uc88b\uc544\uc694 ",a,"\uac1c"))},h=(a(62),function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),l=Object(b.a)(o,2),m=l[0],s=l[1],i=Object(n.useMemo)((function(){return 0===(e=a).length?0:e.reduce((function(e,t){return e+t}))/e.length;var e}),[a]);return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",{className:"rating__text"},"My rating ",r.a.createElement("span",{role:"img"},"\u2b50")," ",i.toFixed(2)," points")),r.a.createElement("form",null,r.a.createElement("input",{value:m,onChange:function(e){s(e.target.value)},placeholder:"From 0 to 10",className:"rating__input"}),r.a.createElement("button",{onClick:function(){var e=a.concat(parseInt(m));c(e),s("")},className:"rating__button"},r.a.createElement("span",{role:"img"},"\u270f\ufe0f"))))});a(63);var y=function(e){var t=e.id,a=e.year,n=e.title,c=e.summary,o=e.poster,m=e.genres,s=e.rating;return r.a.createElement("div",{className:"movie"},r.a.createElement(l.b,{to:{pathname:"/movie/".concat(t),state:{year:a,title:n,summary:c,poster:o,genres:m,rating:s}}},r.a.createElement("img",{src:o,alt:n,title:n}),r.a.createElement("div",{className:"movie__data"},r.a.createElement("h3",{className:"movie__title"},n),r.a.createElement("h5",{className:"movie__year"},a),r.a.createElement("h5",{className:"movie__rating"},r.a.createElement("span",{role:"img"},"\u2b50")," ",s),r.a.createElement("ul",{className:"movie__genres"},m.map((function(e,t){return r.a.createElement("li",{key:t,className:"genres__genre"},e)}))),r.a.createElement("p",{className:"movie__summary"},c.slice(0,180),"..."))),r.a.createElement(g,null),r.a.createElement(h,null))},j=(a(69),function(e){Object(v.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,movies:[]},e.getMovies=Object(u.a)(i.a.mark((function t(){var a,n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:a=t.sent,n=a.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Loading...")):r.a.createElement("div",{className:"movies"},a.map((function(e){return r.a.createElement(y,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres,rating:e.rating})}))))}}]),a}(r.a.Component));a(70);var O=function(e){return console.log(e),r.a.createElement("div",{className:"about__container"},r.a.createElement("span",null,"\u201cFreedom is the freedom to say that two plus two make four. If that is granted, all else follows.\u201d"),r.a.createElement("span",null,"\u2212 George Orwell, 1984"))},N=a(18),k=a(7),D=a(37),x=a.n(D),w={toDos:[],completed:[]},C=function(e,t){switch(t.type){case"add":return Object(k.a)(Object(k.a)({},e),{},{toDos:[].concat(Object(N.a)(e.toDos),[{text:t.payload,id:x()()}])});case"del":return Object(k.a)(Object(k.a)({},e),{},{toDos:e.toDos.filter((function(e){return e.id!==t.payload}))});case"complete":var a=e.toDos.find((function(e){return e.id===t.payload}));return Object(k.a)(Object(k.a)({},e),{},{toDos:e.toDos.filter((function(e){return e.id!==t.payload})),completed:[].concat(Object(N.a)(e.completed),[Object(k.a)({},a)])});case"uncomplete":var n=e.completed.find((function(e){return e.id===t.payload}));return Object(k.a)(Object(k.a)({},e),{},{completed:e.completed.filter((function(e){return e.id!==t.payload})),toDos:[].concat(Object(N.a)(e.toDos),[Object(k.a)({},n)])});default:return}};a(73);var M=function(){var e=Object(n.useReducer)(C,w),t=Object(b.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),l=Object(b.a)(o,2),m=l[0],s=l[1],i=function(e){e.preventDefault(),c({type:"add",payload:m}),s("")};return r.a.createElement("div",null,r.a.createElement("div",{className:"comment__text"},"My comment"),r.a.createElement("div",{className:"comment"},r.a.createElement("form",{onSubmit:i},r.a.createElement("input",{value:m,type:"text",placeholder:"Write a comment",onChange:function(e){var t=e.target.value;s(t)},className:"comment__input"})),r.a.createElement("button",{onClick:i,className:"comment__button"},r.a.createElement("span",{role:"img"},"\u270f\ufe0f"))),r.a.createElement("ul",null,a.toDos.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("span",null,e.text))}))))},S=(a(74),function(e){Object(v.a)(a,e);var t=Object(E.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,a=e.history;void 0===t.state&&a.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?r.a.createElement("section",{className:"container"},r.a.createElement("div",{className:"movie__detail"},r.a.createElement("img",{src:e.state.poster,alt:e.state.title,title:e.state.title}),r.a.createElement("div",{className:"movie__data"},r.a.createElement("h3",{className:"movie__title"},e.state.title),r.a.createElement("h5",{className:"movie__year"},e.state.year),r.a.createElement("p",{className:"movie__summary"},e.state.summary)),r.a.createElement(M,null))):null}}]),a}(r.a.Component));a(75);var L=function(){return r.a.createElement("div",{className:"nav"},r.a.createElement(l.b,{to:"/"},"Home"),r.a.createElement(l.b,{to:{pathname:"/about",state:{fromNavigation:!0}}},"About"))};a(76);var F=function(){return r.a.createElement(l.a,null,r.a.createElement(L,null),r.a.createElement(m.a,{path:"/",exact:!0,component:j}),r.a.createElement(m.a,{path:"/about",component:O}),r.a.createElement(m.a,{path:"/movie/:id",component:S}))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(F,null)),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.5a966896.chunk.js.map