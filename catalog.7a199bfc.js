var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},t=e.parcelRequire5523;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,n){r[e]=n},e.parcelRequire5523=t),t("kedjx"),t("exJDH"),t("e5MbR"),t("isemc");document.querySelector("#search-form"),document.querySelector(".search-field");var o=t("2shzp"),a=t("isemc"),i=t("e5MbR");const c=document.querySelector(".movies-container");!async function(){const e=(await async function(e){const n={method:"GET",url:"https://api.themoviedb.org/3/trending/movie/week",params:{language:"en-US",page:e},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOTZiN2ExNTYwNGYwMmExYWNkMTVhNWJlY2JmMjQ4MCIsInN1YiI6IjY0ODNhYTBhOTkyNTljMDBlMmY0NWE4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._Sdbi-2PalUFAI7K7hzIv-hc4p92EU6q_yg6_IJJHjA"}};try{return(await o.default.request(n)).data}catch(e){console.error(e)}}(1)).results,n=await async function(){try{return(await o.default.request(i.optionsGenre)).data.genres}catch(e){console.log(e)}}();e.forEach((e=>{const r=n.find((n=>n.id==e.genre_ids[0]));e.genre_name=r?r.name:""})),c.innerHTML=(0,a.galleryMarkup)(e)}(),t("isemc"),t("e5MbR"),t("8IXMh"),t("7WYWT"),t("kKdoG");
//# sourceMappingURL=catalog.7a199bfc.js.map