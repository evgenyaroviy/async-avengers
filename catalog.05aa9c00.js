!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},a=n.parcelRequire5523;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in i){var n=i[e];delete i[e];var a={id:e,exports:{}};return t[e]=a,n.call(a.exports,a,a.exports),a.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){i[e]=n},n.parcelRequire5523=a);var r=document.querySelector(".mob-menu-btn"),o=document.querySelector(".mobile-backdrop");function s(){o.classList.toggle("is-open"),document.body.classList.toggle("no-scroll")}r.addEventListener("click",s),o.addEventListener("click",(function(e){e.target===o&&s()})),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(e){e.matches&&(document.body.classList.remove("no-scroll"),o.classList.remove("is-open"))}));var c=document.body,l=document.querySelector(".theme"),d=document.querySelector(".theme__switch");c.classList.add("dark"),l.addEventListener("click",(function(){if(c.classList.contains("dark"))return c.classList.remove("dark"),c.classList.add("light"),d.classList.add("switchLight"),void d.classList.remove("switchDark");c.classList.remove("light"),c.classList.add("dark"),d.classList.add("switchDark"),d.classList.remove("switchLight")})),"/"===window.location.pathname&&(window.location.pathname="index.html");var p=document.querySelectorAll(".js-nav-link");window.addEventListener("load",(function(){var e=window.location.pathname;return p.forEach((function(n){n.getAttribute("href")===e&&n.classList.add("active-page")}))}));var u="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOTZiN2ExNTYwNGYwMmExYWNkMTVhNWJlY2JmMjQ4MCIsInN1YiI6IjY0ODNhYTBhOTkyNTljMDBlMmY0NWE4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._Sdbi-2PalUFAI7K7hzIv-hc4p92EU6q_yg6_IJJHjA",h=("Bearer ".concat(u),"Bearer ".concat(u),"Bearer ".concat(u),"Bearer ".concat(u),"Bearer ".concat(u),{method:"GET",url:"https://api.themoviedb.org/3/genre/movie/list",params:{language:"en"},headers:{accept:"application/json",Authorization:"Bearer ".concat(u)}}),f='\n<svg class="star" width="18" height="18" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M9.23339 10.5019C9.15446 10.5023 9.07744 10.4776 9.01331 10.4316L5.99902 8.24632L2.98472 10.4316C2.92032 10.4783 2.84274 10.5034 2.76318 10.5031C2.68363 10.5028 2.60623 10.4772 2.54217 10.43C2.47811 10.3828 2.43072 10.3165 2.40684 10.2406C2.38296 10.1648 2.38383 10.0832 2.40933 10.0079L3.58495 6.52577L0.538077 4.43632C0.47208 4.39111 0.422269 4.32598 0.395922 4.25045C0.369575 4.17492 0.368073 4.09294 0.391636 4.01649C0.415199 3.94004 0.462591 3.87313 0.526888 3.82554C0.591186 3.77794 0.669018 3.75215 0.749015 3.75194H4.50792L5.6423 0.260929C5.66673 0.185559 5.71442 0.119866 5.7785 0.0732747C5.84259 0.026683 5.91978 0.00158691 5.99902 0.00158691C6.07825 0.00158691 6.15544 0.026683 6.21953 0.0732747C6.28362 0.119866 6.3313 0.185559 6.35573 0.260929L7.49011 3.75312H11.249C11.3291 3.75308 11.4071 3.77868 11.4716 3.82619C11.5361 3.87369 11.5837 3.9406 11.6074 4.0171C11.6311 4.09361 11.6297 4.1757 11.6034 4.25134C11.5771 4.32699 11.5272 4.39223 11.4611 4.43749L8.41308 6.52577L9.588 10.0069C9.60704 10.0633 9.61239 10.1234 9.60362 10.1822C9.59485 10.2411 9.57221 10.297 9.53757 10.3453C9.50292 10.3937 9.45727 10.4331 9.40438 10.4603C9.35149 10.4876 9.29288 10.5018 9.23339 10.5019Z" fill="url(#paint0_linear_148_11901)"/>\n<defs>\n<linearGradient id="paint0_linear_148_11901" x1="1.74902" y1="0.751953" x2="9.24902" y2="10.752" gradientUnits="userSpaceOnUse">\n<stop stop-color="#F84119"/>\n<stop offset="1" stop-color="#F89F19" stop-opacity="0.68"/>\n</linearGradient>\n</defs>\n</svg>\n',v='<svg class="star" width="18" height="18" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">\n<path d="M11.25 5.12695H7.21875L6 1.37695L4.78125 5.12695H0.75L4.03125 7.37695L2.76562 11.127L6 8.7832L9.23438 11.127L7.96875 7.37695L11.25 5.12695Z" stroke="url(#paint0_linear_148_11906)" stroke-linejoin="round"/>\n<defs>\n<linearGradient id="paint0_linear_148_11906" x1="2.03251" y1="2.07362" x2="8.98534" y2="11.3936" gradientUnits="userSpaceOnUse">\n<stop stop-color="#F84119"/>\n<stop offset="1" stop-color="#F89F19" stop-opacity="0.68"/>\n</linearGradient>\n</defs>\n</svg>';function m(e){return e.map((function(e){var n,t,i,a,r,o,s=e.title,c=e.poster_path,l=e.genre_name,d=e.vote_average,p=e.release_date,u=e.id,h=(n=d,t=[v,v,v,v,v],i=Math.round(n),a=i/2,r=Math.floor(a),o=a-r>0,0!==i&&n?i>=10?(t.fill(f),'<div class="rating__wrapper">'.concat(t.join(""),"</div>")):(t.fill(f,0,r),o&&t.fill('<svg class="star" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M16.875 7.3125H10.8281L9 1.6875L7.17188 7.3125H1.125L6.04688 10.6875L4.14844 16.3125L9 12.7969L13.8516 16.3125L11.9531 10.6875L16.875 7.3125Z" stroke="url(#paint0_linear_148_7005)" stroke-linejoin="round"/>\n<path d="M9 1.6875V12.7969L4.14844 16.3125L6.04688 10.6875L1.125 7.3125H7.17188L9 1.6875Z" fill="url(#paint1_linear_148_7005)"/>\n<defs>\n<linearGradient id="paint0_linear_148_7005" x1="3.04877" y1="2.73251" x2="13.478" y2="16.7124" gradientUnits="userSpaceOnUse">\n<stop stop-color="#F84119"/>\n<stop offset="1" stop-color="#F89F19" stop-opacity="0.68"/>\n</linearGradient>\n<linearGradient id="paint1_linear_148_7005" x1="2.08688" y1="2.73251" x2="12.1506" y2="9.47748" gradientUnits="userSpaceOnUse">\n<stop stop-color="#F84119"/>\n<stop offset="1" stop-color="#F89F19" stop-opacity="0.68"/>\n</linearGradient>\n</defs>\n</svg>\n',r,r+1),'<div class="rating">'.concat(t.join(""),"</div>")):'<div class="rating__wrapper">'.concat(t.join(""),"</div>")),m=p.slice(0,4);return"<li data-id=".concat(u,' class="movie-card"> \n      <img src="https://image.tmdb.org/t/p/original').concat(c,'" alt="').concat(s,'" loading="lazy" class="movie-card__img" width="280" height="406"/> \n      <div class="movie-card__backdrop"> \n        <div class="movie-card__info"> \n          <p class="info-item__name">').concat(s,'</p> \n           \n          <div class="movie-card__info__items"> \n            <p class="info-item__genreYear">').concat(l," | ").concat(m,'</p> \n            <div class="info-item__stars">').concat(h,"</div> \n          </div> \n        </div> \n      </div> \n    </li>")})).join("")}document.querySelector("#search-form"),document.querySelector(".search-field");var g=a("bpxeT"),_=a("2TvXO"),w=a("dIxxU"),y=document.querySelector(".movies-container");function L(){return(L=e(g)(e(_).mark((function n(){var t,i,a;return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(1);case 2:return t=e.sent,i=t.results,e.next=6,J();case 6:a=e.sent,i.forEach((function(e){var n=a.find((function(n){return n.id==e.genre_ids[0]}));e.genre_name=n?n.name:""})),y.innerHTML=m(i);case 9:case"end":return e.stop()}}),n)})))).apply(this,arguments)}function x(e){return I.apply(this,arguments)}function I(){return(I=e(g)(e(_).mark((function n(t){var i,a;return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOTZiN2ExNTYwNGYwMmExYWNkMTVhNWJlY2JmMjQ4MCIsInN1YiI6IjY0ODNhYTBhOTkyNTljMDBlMmY0NWE4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._Sdbi-2PalUFAI7K7hzIv-hc4p92EU6q_yg6_IJJHjA",i={method:"GET",url:"https://api.themoviedb.org/3/trending/movie/week",params:{language:"en-US",page:t},headers:{accept:"application/json",Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOTZiN2ExNTYwNGYwMmExYWNkMTVhNWJlY2JmMjQ4MCIsInN1YiI6IjY0ODNhYTBhOTkyNTljMDBlMmY0NWE4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._Sdbi-2PalUFAI7K7hzIv-hc4p92EU6q_yg6_IJJHjA")}},e.prev=2,e.next=5,w.default.request(i);case 5:return a=e.sent,e.abrupt("return",a.data);case 9:e.prev=9,e.t0=e.catch(2),console.error(e.t0);case 12:case"end":return e.stop()}}),n,null,[[2,9]])})))).apply(this,arguments)}function J(){return N.apply(this,arguments)}function N(){return(N=e(g)(e(_).mark((function n(){var t;return e(_).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.default.request(h);case 3:return t=e.sent,e.abrupt("return",t.data.genres);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}!function(){L.apply(this,arguments)}();var b=document.querySelector(".scroll-up-btn");window.addEventListener("scroll",(function(){window.pageYOffset>300?b.style.display="block":b.style.display="none"})),b.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})}))}();
//# sourceMappingURL=catalog.05aa9c00.js.map
