!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},i=e.parcelRequire5523;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in t){var i=t[e];delete t[e];var a={id:e,exports:{}};return n[e]=a,i.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,n){t[e]=n},e.parcelRequire5523=i);var a=document.querySelector(".mob-menu-btn"),o=document.querySelector(".mobile-backdrop");a.addEventListener("click",(function(){o.classList.toggle("is-open")})),o.addEventListener("click",(function(e){e.target.classList.remove("is-open")})),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(e){e.matches&&o.classList.remove("is-open")}));var r=document.body,s=document.querySelector(".theme"),c=document.querySelector(".theme__switch");r.classList.add("dark"),s.addEventListener("click",(function(){if(r.classList.contains("dark"))return r.classList.remove("dark"),r.classList.add("light"),c.classList.add("switchLight"),void c.classList.remove("switchDark");r.classList.remove("light"),r.classList.add("dark"),c.classList.add("switchDark"),c.classList.remove("switchLight")}));var l=document.querySelectorAll(".js-nav-link");window.addEventListener("load",(function(){var e=window.location.pathname;return l.forEach((function(n){n.getAttribute("href")===e&&n.classList.add("active-page")}))}));var d="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOTZiN2ExNTYwNGYwMmExYWNkMTVhNWJlY2JmMjQ4MCIsInN1YiI6IjY0ODNhYTBhOTkyNTljMDBlMmY0NWE4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._Sdbi-2PalUFAI7K7hzIv-hc4p92EU6q_yg6_IJJHjA",p={method:"GET",url:"https://api.themoviedb.org/3/trending/movie/week",params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer ".concat(d)}};"Bearer ".concat(d),"Bearer ".concat(d),"Bearer ".concat(d),"Bearer ".concat(d),"Bearer ".concat(d);document.querySelector("#search-form"),document.querySelector(".search-field");var u=i("dIxxU"),f='\n<svg class="star" width="18" height="18" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M9.23339 10.5019C9.15446 10.5023 9.07744 10.4776 9.01331 10.4316L5.99902 8.24632L2.98472 10.4316C2.92032 10.4783 2.84274 10.5034 2.76318 10.5031C2.68363 10.5028 2.60623 10.4772 2.54217 10.43C2.47811 10.3828 2.43072 10.3165 2.40684 10.2406C2.38296 10.1648 2.38383 10.0832 2.40933 10.0079L3.58495 6.52577L0.538077 4.43632C0.47208 4.39111 0.422269 4.32598 0.395922 4.25045C0.369575 4.17492 0.368073 4.09294 0.391636 4.01649C0.415199 3.94004 0.462591 3.87313 0.526888 3.82554C0.591186 3.77794 0.669018 3.75215 0.749015 3.75194H4.50792L5.6423 0.260929C5.66673 0.185559 5.71442 0.119866 5.7785 0.0732747C5.84259 0.026683 5.91978 0.00158691 5.99902 0.00158691C6.07825 0.00158691 6.15544 0.026683 6.21953 0.0732747C6.28362 0.119866 6.3313 0.185559 6.35573 0.260929L7.49011 3.75312H11.249C11.3291 3.75308 11.4071 3.77868 11.4716 3.82619C11.5361 3.87369 11.5837 3.9406 11.6074 4.0171C11.6311 4.09361 11.6297 4.1757 11.6034 4.25134C11.5771 4.32699 11.5272 4.39223 11.4611 4.43749L8.41308 6.52577L9.588 10.0069C9.60704 10.0633 9.61239 10.1234 9.60362 10.1822C9.59485 10.2411 9.57221 10.297 9.53757 10.3453C9.50292 10.3937 9.45727 10.4331 9.40438 10.4603C9.35149 10.4876 9.29288 10.5018 9.23339 10.5019Z" fill="url(#paint0_linear_148_11901)"/>\n<defs>\n<linearGradient id="paint0_linear_148_11901" x1="1.74902" y1="0.751953" x2="9.24902" y2="10.752" gradientUnits="userSpaceOnUse">\n<stop stop-color="#F84119"/>\n<stop offset="1" stop-color="#F89F19" stop-opacity="0.68"/>\n</linearGradient>\n</defs>\n</svg>\n',h='<svg class="star" width="18" height="18" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">\n<path d="M11.25 5.12695H7.21875L6 1.37695L4.78125 5.12695H0.75L4.03125 7.37695L2.76562 11.127L6 8.7832L9.23438 11.127L7.96875 7.37695L11.25 5.12695Z" stroke="url(#paint0_linear_148_11906)" stroke-linejoin="round"/>\n<defs>\n<linearGradient id="paint0_linear_148_11906" x1="2.03251" y1="2.07362" x2="8.98534" y2="11.3936" gradientUnits="userSpaceOnUse">\n<stop stop-color="#F84119"/>\n<stop offset="1" stop-color="#F89F19" stop-opacity="0.68"/>\n</linearGradient>\n</defs>\n</svg>';var v=document.querySelector(".gallery-container");u.default.request({method:"GET",url:"https://api.themoviedb.org/3/genre/movie/list",params:{language:"en"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YTA1ZGZhMzkwMDIxYjkyZTc3ZDMzYzRhODYyZjRmNiIsInN1YiI6IjY0ODFmZWJmNjQ3NjU0MDBhZDgxYTBlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.grPFkj7_KdeogJCliXg4MDIgfDdRvjZd4DM3BdVB2Kw"}}).then((function(e){var n=e.data.genres;console.log(n)})).catch((function(e){console.error(e)})),u.default.request(p).then((function(e){e.data.results.map((function(e){var n,t,i,a,o,r;return e.release_date=e.release_date.slice(0,4),e.vote_average=(n=e.vote_average,t=[h,h,h,h,h],i=Math.round(n),a=i/2,o=Math.floor(a),r=a-o>0,0!==i&&n?i>=10?(t.fill(f),'<div class="rating__wrapper">'.concat(t.join(""),"</div>")):(t.fill(f,0,o),r&&t.fill('<svg class="star" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M16.875 7.3125H10.8281L9 1.6875L7.17188 7.3125H1.125L6.04688 10.6875L4.14844 16.3125L9 12.7969L13.8516 16.3125L11.9531 10.6875L16.875 7.3125Z" stroke="url(#paint0_linear_148_7005)" stroke-linejoin="round"/>\n<path d="M9 1.6875V12.7969L4.14844 16.3125L6.04688 10.6875L1.125 7.3125H7.17188L9 1.6875Z" fill="url(#paint1_linear_148_7005)"/>\n<defs>\n<linearGradient id="paint0_linear_148_7005" x1="3.04877" y1="2.73251" x2="13.478" y2="16.7124" gradientUnits="userSpaceOnUse">\n<stop stop-color="#F84119"/>\n<stop offset="1" stop-color="#F89F19" stop-opacity="0.68"/>\n</linearGradient>\n<linearGradient id="paint1_linear_148_7005" x1="2.08688" y1="2.73251" x2="12.1506" y2="9.47748" gradientUnits="userSpaceOnUse">\n<stop stop-color="#F84119"/>\n<stop offset="1" stop-color="#F89F19" stop-opacity="0.68"/>\n</linearGradient>\n</defs>\n</svg>\n',o,o+1),'<div class="rating">'.concat(t.join(""),"</div>")):'<div class="rating__wrapper">'.concat(t.join(""),"</div>")),e}));v.innerHTML=e.data.results.map((function(e){var n=e.title,t=e.poster_path,i=e.genre_ids,a=e.vote_average,o=e.release_date;return'<div class="movie-card">\n        <img src="'.concat(t,'" alt="').concat(n,'" loading="lazy" class="movie-card__img"/>\n      <div class="movie-card__info">\n        <div>\n        <p class="info-item">\n          <b class="info-item__name">').concat(n,'</b>\n        </p>\n\n        <p class="info-item">\n          <b class="info-item__name">').concat(i,'</b>\n        </p>\n        \n        <p class="info-item">\n          <b class="info-item__name">').concat(o,'</b>\n        </p>\n        </div>\n\n        <div>\n        <p class="info-item">\n          <b class="info-item__name">').concat(a,"</b>\n        </p>\n        </div>\n      </div>\n    </div>")})).join("")})).catch((function(e){console.error(e)}));var m=document.querySelector(".scroll-up-btn");window.addEventListener("scroll",(function(){window.pageYOffset>300?m.style.display="block":m.style.display="none"})),m.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})}))}();
//# sourceMappingURL=catalog.2d09cf93.js.map
