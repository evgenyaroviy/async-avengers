!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=e.parcelRequire5523;null==o&&((o=function(t){if(t in n)return n[t].exports;if(t in r){var e=r[t];delete r[t];var o={id:t,exports:{}};return n[t]=o,e.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){r[t]=e},e.parcelRequire5523=o);var i=document.querySelector(".mob-menu-btn"),a=document.querySelector(".mobile-backdrop");i.addEventListener("click",(function(){a.classList.toggle("is-open")})),a.addEventListener("click",(function(t){t.target.classList.remove("is-open")})),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(t){t.matches&&a.classList.remove("is-open")}));var c=document.body,s=document.querySelector(".theme"),l=document.querySelector(".theme__switch");c.classList.add("dark"),s.addEventListener("click",(function(){if(c.classList.contains("dark"))return c.classList.remove("dark"),c.classList.add("light"),l.classList.add("switchLight"),void l.classList.remove("switchDark");c.classList.remove("light"),c.classList.add("dark"),l.classList.add("switchDark"),l.classList.remove("switchLight")}));var u=document.querySelectorAll(".js-nav-link");window.addEventListener("load",(function(){var t=window.location.pathname;return u.forEach((function(e){e.getAttribute("href")===t&&e.classList.add("active-page")}))}));var p={};function h(t,e,n,r,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,o)}Object.defineProperty(p,"__esModule",{value:!0}),p.default=function(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){h(i,r,o,a,c,"next",t)}function c(t){h(i,r,o,a,c,"throw",t)}a(void 0)}))}};var d=o("1t1Wn"),f={},v=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var o=e&&e.prototype instanceof m?e:m,i=Object.create(o.prototype),a=new I(r||[]);return i._invoke=function(t,e,n){var r=p;return function(o,i){if(r===d)throw new Error("Generator is already running");if(r===f){if("throw"===o)throw i;return O()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=k(a,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===p)throw r=f,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var s=u(t,e,n);if("normal"===s.type){if(r=n.done?f:h,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=f,n.method="throw",n.arg=s.arg)}}}(t,n,a),i}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var p="suspendedStart",h="suspendedYield",d="executing",f="completed",v={};function m(){}function g(){}function y(){}var b={};s(b,i,(function(){return this}));var w=Object.getPrototypeOf,L=w&&w(w(T([])));L&&L!==n&&r.call(L,i)&&(b=L);var x=y.prototype=m.prototype=Object.create(b);function _(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function n(o,i,a,c){var s=u(t[o],t,i);if("throw"!==s.type){var l=s.arg,p=l.value;return p&&"object"==typeof p&&r.call(p,"__await")?e.resolve(p.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(p).then((function(t){l.value=t,a(l)}),(function(t){return n("throw",t,a,c)}))}c(s.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function k(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,k(t,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=u(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,v;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function T(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:O}}function O(){return{value:e,done:!0}}return g.prototype=y,s(x,"constructor",y),s(y,"constructor",g),g.displayName=s(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},_(E.prototype),s(E.prototype,a,(function(){return this})),t.AsyncIterator=E,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new E(l(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(x),s(x,c,"Generator"),s(x,i,(function(){return this})),s(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=T,I.prototype={constructor:I,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(s&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;j(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:T(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}(f);try{regeneratorRuntime=v}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=v:Function("r","regeneratorRuntime = r")(v)}var m=o("dIxxU"),g="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOTZiN2ExNTYwNGYwMmExYWNkMTVhNWJlY2JmMjQ4MCIsInN1YiI6IjY0ODNhYTBhOTkyNTljMDBlMmY0NWE4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._Sdbi-2PalUFAI7K7hzIv-hc4p92EU6q_yg6_IJJHjA",y=("Bearer ".concat(g),{method:"GET",url:"https://api.themoviedb.org/3/movie/upcoming",params:{language:"en-US",page:"1"},headers:{accept:"application/json",Authorization:"Bearer ".concat(g)}}),b=("Bearer ".concat(g),"Bearer ".concat(g),"Bearer ".concat(g),{method:"GET",url:"https://api.themoviedb.org/3/genre/movie/list",params:{language:"en"},headers:{accept:"application/json",Authorization:"Bearer ".concat(g)}}),w=document.querySelector(".container-upcoming-movie");function L(){return x.apply(this,arguments)}function x(){return(x=t(p)(t(f).mark((function e(){var n;return t(f).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m.default.request(y);case 3:return n=t.sent,t.abrupt("return",n.data);case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function _(){return E.apply(this,arguments)}function E(){return(E=t(p)(t(f).mark((function e(){var n;return t(f).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m.default.request(b);case 3:return n=t.sent,t.abrupt("return",n.data.genres);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function k(t){return N.apply(this,arguments)}function N(){return(N=t(p)(t(f).mark((function e(n){var r,o;return t(f).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(n),r={method:"GET",url:"https://api.themoviedb.org/3/movie/".concat(n,"/images"),headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOTZiN2ExNTYwNGYwMmExYWNkMTVhNWJlY2JmMjQ4MCIsInN1YiI6IjY0ODNhYTBhOTkyNTljMDBlMmY0NWE4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._Sdbi-2PalUFAI7K7hzIv-hc4p92EU6q_yg6_IJJHjA"}},t.prev=2,t.next=5,m.default.request(r);case 5:return o=t.sent,t.abrupt("return",o.data);case 9:t.prev=9,t.t0=t.catch(2),console.error(t.t0);case 12:case"end":return t.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}function j(){return(j=t(p)(t(f).mark((function e(){var n,r,o,i,a,c,s;return t(f).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L();case 2:return n=t.sent,r=n.results,o=Math.floor(Math.random()*r.length),i=r[o],a=i.id,t.next=9,_(a);case 9:return c=t.sent,t.next=12,k(a);case 12:s=t.sent,I(r,c),w.innerHTML=T(r,c,s);case 15:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function I(t,e){var n=[];t.forEach((function(t){var r=[];t.genre_ids.forEach((function(t){var n=e.find((function(e){return e.id===t}));n&&r.push(n.name)})),n.push(r.join(", "))}))}function T(e,n,r){var o=new Date,i=o.getFullYear(),a=String(o.getMonth()+1).padStart(2,"0"),c="".concat(i,"-").concat(a,"-01"),s=e.filter((function(t){return t.release_date>=c})),l=s[Math.floor(Math.random()*s.length)],u=l.id,p=l.backdrop_path,h=l.original_title,f=l.release_date,v=l.vote_average,m=l.vote_count,g=l.popularity,y=l.genre_ids,b=l.overview,w=r.id,L=t(d)(r.posters,1)[0].file_path,x=O(new Date(f).getDate()),_=O(new Date(f).getMonth()+1),E=new Date(f).getFullYear(),k=null;if(w===u||null!==p)if(w===u&&r.posters.length>1){var N=r.posters.find((function(t){return t.file_path!==p}));N&&(k="https://image.tmdb.org/t/p/original/".concat(N.file_path))}else k="https://image.tmdb.org/t/p/original/".concat(p||L);var j=g.toFixed(1),I=y.map((function(t){var e=n.find((function(e){return e.id===t}));return e?e.name:""}));return'\n    <img class="upcoming-image" src="'.concat(k,'" alt="').concat(h,'">\n    <div class="info-container">\n    <h3 class="upcoming-movie-title">').concat(h,'</h3>\n    <ul class="upcoming-list-details list">\n      <li class="upcoming-list-details-item">\n        <p class="upcoming-list-details-subtitle">Release date</p>\n        <p class="upcoming-realese-date">').concat(x,".").concat(_,".").concat(E,'</p>\n      </li>\n      <li class="upcoming-list-details-item">\n        <p class="upcoming-list-details-subtitle">Vote / Votes</p>\n        <p class="upcoming-votes"><span>').concat(v,"</span> / <span>").concat(m,'</span></p>\n      </li>\n      <li class="upcoming-list-details-item">\n        <p class="upcoming-list-details-subtitle">Popularity</p>\n        <p class="upcoming-popularity">').concat(j,'</p>\n      </li>\n      <li class="upcoming-list-details-item">\n        <p class="upcoming-list-details-subtitle">Genre</p>\n        <p class="genre">').concat(I.join(", "),'</p>\n      </li>\n    </ul>\n    <h4 class="upcoming-about">ABOUT</h4>\n    <p class="upcoming-about-text">').concat(b,'</p>\n    <button class="btn upcoming-btn-add btn-accent" type="button">\n    <span class="btn-in">Add to my library</span></button>\n    <button class="btn upcoming-btn-remove btn-dark" hidden type="button">\n    <span class="btn-in">Remove from my library</span></button>\n    </div>\n  ')}function O(t){return String(t).padStart(2,"0")}!function(){j.apply(this,arguments)}(),w.addEventListener("click",(function(t){t.preventDefault();var e,n=t.target;n.classList.contains("upcoming-btn-add")?((e=t.target).style.display="none",e.parentNode.querySelector(".upcoming-btn-remove").style.display="block"):n.classList.contains("upcoming-btn-remove")&&function(t){removeFromLibraryBtn=t.target,removeFromLibraryBtn.style.display="none",removeFromLibraryBtn.parentNode.querySelector(".upcoming-btn-add").style.display="block"}(t)}));m=o("dIxxU");var J=document.querySelector(".weekly_content");console.log(function(){try{return m.default.get("https://api.themoviedb.org/3/trending/movie/week?language=en-US&api_key=".concat("e80fd9fb75f14049ed52c4547080278b")).then((function(t){return e=t.data.results.slice(0,1),n=e.map((function(t){return'<div class="card">\n    <img class="test_img" src="https://image.tmdb.org/t/p/w500'.concat(t.poster_path,'" alt="').concat(t.title,'">\n    <div class="card_titles">\n    <p class="card_sup_title">').concat(t.title,'</p>\n    <p class="card_sub_title">').concat(t.release_date.slice(0,4),"</p>\n  </div>\n    </div>")})).join(""),void J.insertAdjacentHTML("beforeend",n);var e,n}))}catch(t){console.log("error"+t)}}());var S=document.querySelector(".scroll-up-btn");window.addEventListener("scroll",(function(){window.pageYOffset>300?S.style.display="block":S.style.display="none"})),S.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})}))}();
//# sourceMappingURL=index.6d5320a6.js.map
