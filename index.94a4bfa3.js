!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},i=e.parcelRequire5523;null==i&&((i=function(t){if(t in n)return n[t].exports;if(t in a){var e=a[t];delete a[t];var i={id:t,exports:{}};return n[t]=i,e.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){a[t]=e},e.parcelRequire5523=i);var o=document.querySelector(".mob-menu-btn"),r=document.querySelector(".mobile-backdrop");function c(){r.classList.toggle("is-open"),document.body.classList.toggle("no-scroll")}o.addEventListener("click",c),r.addEventListener("click",(function(t){t.target===r&&c()})),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(t){t.matches&&(document.body.classList.remove("no-scroll"),r.classList.remove("is-open"))}));var s=document.body,l=document.querySelector(".theme"),u=document.querySelector(".theme__switch");s.classList.add("dark"),l.addEventListener("click",(function(){if(s.classList.contains("dark"))return s.classList.remove("dark"),s.classList.add("light"),u.classList.add("switchLight"),void u.classList.remove("switchDark");s.classList.remove("light"),s.classList.add("dark"),u.classList.add("switchDark"),u.classList.remove("switchLight")})),"/"===window.location.pathname&&(window.location.pathname="index.html");var d=document.querySelectorAll(".js-nav-link");window.addEventListener("load",(function(){var t=window.location.pathname;return d.forEach((function(e){e.getAttribute("href")===t&&e.classList.add("active-page")}))}));var p=i("bpxeT"),m=i("2TvXO"),g=i("dIxxU"),h="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOTZiN2ExNTYwNGYwMmExYWNkMTVhNWJlY2JmMjQ4MCIsInN1YiI6IjY0ODNhYTBhOTkyNTljMDBlMmY0NWE4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._Sdbi-2PalUFAI7K7hzIv-hc4p92EU6q_yg6_IJJHjA",f=("Bearer ".concat(h),{method:"GET",url:"https://api.themoviedb.org/3/movie/upcoming",params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer ".concat(h)}}),v=("Bearer ".concat(h),"Bearer ".concat(h),"Bearer ".concat(h),{method:"GET",url:"https://api.themoviedb.org/3/genre/movie/list",params:{language:"en"},headers:{accept:"application/json",Authorization:"Bearer ".concat(h)}}),b=document.querySelector(".loader");function y(){b.style.display="block"}function w(){b.style.display="none"}var L=document.querySelector(".container-upcoming-movie");function k(){return _.apply(this,arguments)}function _(){return(_=t(p)(t(m).mark((function e(){var n;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,y(),t.next=4,g.default.request(f);case 4:return n=t.sent,t.abrupt("return",n.data);case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0),L.innerHTML=I();case 12:return t.prev=12,w(),t.finish(12);case 15:case"end":return t.stop()}}),e,null,[[0,8,12,15]])})))).apply(this,arguments)}function x(t){return E.apply(this,arguments)}function E(){return(E=t(p)(t(m).mark((function e(n){var a;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g.default.request(v);case 3:return a=t.sent,t.abrupt("return",a.data.genres);case 7:return t.prev=7,t.t0=t.catch(0),console.log(t.t0),t.abrupt("return",[]);case 11:case"end":return t.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function S(){return(S=t(p)(t(m).mark((function e(){var n,a,i,o,r,c;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,y(),t.next=4,k();case 4:return n=t.sent,a=n.results,i=Math.floor(Math.random()*a.length),o=a[i],r=o.id,t.next=11,x(r);case 11:0===(c=t.sent).length?L.innerHTML=T(a,[]):(M(a,c),L.innerHTML=T(a,c));case 13:return t.prev=13,w(),t.finish(13);case 16:case"end":return t.stop()}}),e,null,[[0,,13,16]])})))).apply(this,arguments)}function M(t,e){var n=[];t.forEach((function(t){var a=[];t.genre_ids.forEach((function(t){var n=e.find((function(e){return e.id===t}));n&&a.push(n.name)})),n.push(a.join(", "))}))}function T(t,e){var n=new Date,a=n.getFullYear(),i=String(n.getMonth()+1).padStart(2,"0"),o="".concat(a,"-").concat(i,"-01"),r=t.filter((function(t){return t.release_date>=o})),c=r[Math.floor(Math.random()*r.length)],s=c.id,l=c.backdrop_path,u=c.poster_path,d=c.original_title,p=c.release_date,m=c.vote_average,g=c.vote_count,h=c.popularity,f=c.genre_ids,v=c.overview,b=N(new Date(p).getDate()),y=N(new Date(p).getMonth()+1),w=new Date(p).getFullYear(),L=null;L=window.innerWidth<=767&&u?"https://image.tmdb.org/t/p/original/".concat(u):l?"https://image.tmdb.org/t/p/original/".concat(l):"https://astoriamuseums.org/wp-content/uploads/2020/10/OFM-poster-not-available.png";var k=h.toFixed(1),_=f.map((function(t){var n=e.find((function(e){return e.id===t}));return n?n.name:""}));return'\n    <img width="280" height="402" class="upcoming-image"  src="'.concat(L,'" alt="').concat(d,'">\n    <div class="info-container" >\n    <h3 class="upcoming-movie-title">').concat(d,'</h3>\n    <ul class="upcoming-list-details list">\n      <li class="upcoming-list-details-item">\n        <p class="upcoming-list-details-subtitle">Release date</p>\n        <p class="upcoming-realese-date">').concat(b,".").concat(y,".").concat(w,'</p>\n      </li>\n      <li class="upcoming-list-details-item">\n        <p class="upcoming-list-details-subtitle">Vote / Votes</p>\n        <p class="upcoming-votes"><span>').concat(m,"</span> / <span>").concat(g,'</span></p>\n      </li>\n      <li class="upcoming-list-details-item">\n        <p class="upcoming-list-details-subtitle">Popularity</p>\n        <p class="upcoming-popularity">').concat(k,'</p>\n      </li>\n      <li class="upcoming-list-details-item">\n        <p class="upcoming-list-details-subtitle">Genre</p>\n        <p class="genre">').concat(_.join(", "),'</p>\n      </li>\n    </ul>\n    <h4 class="upcoming-about">ABOUT</h4>\n    <p class="upcoming-about-text">').concat(v,'</p>\n    <button class="btn upcoming-btn-add btn-accent" data-id="').concat(s,'" type="button">\n    <span class="btn-in upcoming-btn-add-span" >Add to my library</span></button>\n    <button class="btn upcoming-btn-remove btn-dark" data-id="').concat(s,'" hidden  type="button">\n    <span class="btn-in upcoming-btn-remove-span"  >Remove from my library</span></button>\n    </div>\n  ')}function I(){return console.log("hello"),'      \n<h2 class="upcoming-error">\nOOPS...<br>\nWe are very sorry!<br>\nSomething went wrong.</h2>'}function N(t){return String(t).padStart(2,"0")}L.addEventListener("click",(function(t){t.preventDefault();var e=t.target;e.classList.contains("upcoming-btn-add-span")?(n=t,a=n.target.parentNode,a.style.display="none",a.nextElementSibling.style.display="block"):e.classList.contains("upcoming-btn-remove-span")&&function(t){var e=t.target.parentNode;e.style.display="none",e.previousElementSibling.style.display="block"}(t);var n,a})),function(){S.apply(this,arguments)}();g=i("dIxxU");var q=document.querySelector(".weekly_content");console.log(function(){try{return g.default.get("https://api.themoviedb.org/3/trending/movie/week?language=en-US&api_key=".concat("e80fd9fb75f14049ed52c4547080278b")).then((function(t){return e=t.data.results.slice(0,1),n=e.map((function(t){return'<div class="card">\n    <img class="test_img" src="https://image.tmdb.org/t/p/w500'.concat(t.poster_path,'" alt="').concat(t.title,'">\n    <div class="card_titles">\n    <p class="card_sup_title">').concat(t.title,'</p>\n    <p class="card_sub_title">').concat(t.release_date.slice(0,4),"</p>\n  </div>\n    </div>")})).join(""),void q.insertAdjacentHTML("beforeend",n);var e,n}))}catch(t){console.log("error"+t)}}());var O=document.querySelector(".scroll-up-btn");window.addEventListener("scroll",(function(){window.pageYOffset>300?O.style.display="block":O.style.display="none"})),O.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})}))}();
//# sourceMappingURL=index.94a4bfa3.js.map
