var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=e.parcelRequire5523;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var r=t[e];delete t[e];var o={id:e,exports:{}};return n[e]=o,r.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,n){t[e]=n},e.parcelRequire5523=r),r("kedjx"),r("exJDH");var o=r("2shzp"),a=r("e5MbR"),i=r("isemc");o=r("2shzp"),i=r("isemc"),a=r("e5MbR");const c=document.querySelector(".movies-container"),s=document.querySelector(".catalog-failure");!async function(){const e=(await async function(e){const n={method:"GET",url:"https://api.themoviedb.org/3/trending/movie/week",params:{language:"en-US",page:e},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOTZiN2ExNTYwNGYwMmExYWNkMTVhNWJlY2JmMjQ4MCIsInN1YiI6IjY0ODNhYTBhOTkyNTljMDBlMmY0NWE4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._Sdbi-2PalUFAI7K7hzIv-hc4p92EU6q_yg6_IJJHjA"}};try{return(await o.default.request(n)).data}catch(e){console.error(e),s.style.display="block"}}(1)).results,n=await async function(){try{return(await o.default.request(a.optionsGenre)).data.genres}catch(e){console.log(e)}}();e.forEach((e=>{const t=n.find((n=>n.id==e.genre_ids[0]));e.genre_name=t?t.name:""})),c.innerHTML=(0,i.galleryMarkup)(e)}();const l=document.querySelector("#search-form"),u=document.querySelector(".search-field"),d=document.querySelector(".reset-container"),y=document.querySelector(".reset-search");l.addEventListener("submit",(function(e){if(e.preventDefault(),function(){c.innerHTML=""}(),s.style.display="none",""===u.value.trim())return s.style.display="block",void u.focus();a.optionsSearch.params.query=u.value,async function(){const e=await async function(){try{return(await o.default.request(a.optionsSearch)).data}catch(e){console.error(e),s.style.display="block"}}(),n=await async function(){try{return(await o.default.request(a.optionsGenre)).data.genres}catch(e){console.log(e)}}(),t=e.results;if(0===t.length)return s.style.display="block",void(d.style.display="block");t.forEach((e=>{const t=n.find((n=>n.id==e.genre_ids[0]));e.genre_name=t?t.name:""})),d.style.display="block",c.innerHTML=(0,i.galleryMarkup)(t)}()})),y.addEventListener("click",(function(){d.style.display="none",u.focus(),document.location.reload()})),r("isemc"),r("e5MbR"),r("8IXMh"),r("7WYWT"),r("kKdoG");
//# sourceMappingURL=catalog.5e2e7179.js.map