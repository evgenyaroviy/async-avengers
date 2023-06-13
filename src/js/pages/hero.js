import { ratingToStars } from '../components/ratingAPI';

import axios from 'axios';

const API_KEY = 'e80fd9fb75f14049ed52c4547080278b';
const CARD_HERO = document.querySelector('.film-of-day');

function getRandomObject(data) {
  const randomIndex = Math.floor(Math.random() * data.length);
  return data[randomIndex];
}

const getResponse = async () => {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=${API_KEY}`
    );
    const data = createObject(res.data.results);
    const randomObject = getRandomObject(data);
    createMarkup([randomObject]);
  } catch (error) {
    console.log('error' + error);
  }
};

function createObject(data) {
  return data.map(item => ({
    backdropPath: item.backdrop_path,
    title: item.title,
    voteAverage: item.vote_average,
    overview: item.overview,
    id: item.id,
    name: item.name,
  }));
}

function createMarkup(data) {
  let card = data
    .map(item => {
      const titleName = (item.title || item.name);
      return `<div class="hero__img-gradient"></div>
  <img class="hero__img" loading="lazy" width="1280" height="720"
    srcset="https://image.tmdb.org/t/p/w1280${item.backdropPath} 1280w,
    https://image.tmdb.org/t/p/w780${item.backdropPath} 768w,
    https://image.tmdb.org/t/p/w300${item.backdropPath} 320w"
    src="https://image.tmdb.org/t/p/w300${item.backdropPath}"
    sizes="(min-width: 1280px) 1280px, (min-width: 768px) 768px, (min-width: 320px) 320px"
    alt="${titleName}"
  >
  <div class="hero__title-box">
    <h2 class="hero__title">${titleName}</h2>
</div>
<div class="rating rating-box">
    <p class="info-item">
        <b class="info-item__name">${ratingToStars(item.voteAverage)}</b>
    </p>
</div>
<div class="hero__text-box">
    <p class="hero__text">${item.overview}</p>
</div>
<div class="buttons">
<button class="more-details btn" type="button" data-movie-id="${item.id}">
      <span class="btn-in">More details</span>
      </button>
<button class="watch-trailer btn" type="button" data-movie-id="${item.id
        }">
      <span class="btn-in">Watch trailer</span></button>
      </div>`;
    })
    .join("");
  CARD_HERO.insertAdjacentHTML('beforeend', card);
}

getResponse();
