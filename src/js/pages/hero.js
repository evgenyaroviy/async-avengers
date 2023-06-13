import { ratingToStars } from '../components/ratingAPI';
import { showLoader, hideLoader } from '../components/loader';

import axios from 'axios';

const API_KEY = 'e80fd9fb75f14049ed52c4547080278b';
const CARD_HERO = document.querySelector('.film-of-day');

function getRandomObject(data) {
  const randomIndex = Math.floor(Math.random() * data.length);
  return data[randomIndex];
}

const getResponse = async () => {
  try {
    showLoader();

    const res = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=${API_KEY}`
    );
    const data = createObject(res.data.results);
    const randomObject = getRandomObject(data);
    createMarkup([randomObject]);
  } catch (error) {
    console.log('error' + error);
  } finally {
    hideLoader();
  }
};

function createObject(data) {
  return data.map(item => ({
    backdropPath: item.backdrop_path,
    title: item.title || item.name,
    voteAverage: item.vote_average,
    overview: item.overview,
    id: item.id,
    movie_id: item.movie_id,
  }));
}

const getStartedBox = document.querySelector('.get-started-section');

function createMarkup(data) {
  let card = data
    .map(item => {
      const title = item.title !== undefined ? item.title : item.name;

      if (
        item.backdropPath === null ||
        item.title === null ||
        item.voteAverage === null ||
        item.overview === null ||
        item.id === null ||
        item.backdropPath === undefined ||
        item.title === undefined ||
        item.voteAverage === undefined ||
        item.overview === undefined ||
        item.id === undefined
      ) {
        CARD_HERO.style.display = 'none'; // Скрываем основную разметку
        getStartedBox.style.display = 'block'; // Показываем get-started-box
        return;
      }

      console.log('Current Card:', item);

      return `<div class="hero__img-gradient"></div>
  <img class="hero__img" loading="lazy" width="1280" height="720"
    srcset="https://image.tmdb.org/t/p/w1280${item.backdropPath} 1280w,
    https://image.tmdb.org/t/p/w780${item.backdropPath} 768w,
    https://image.tmdb.org/t/p/w300${item.backdropPath} 320w"
    src="https://image.tmdb.org/t/p/w300${item.backdropPath}"
    sizes="(min-width: 1280px) 1280px, (min-width: 768px) 768px, (min-width: 320px) 320px"
    alt="${item.title}"
  >
  <div class="hero__title-box container">
    <h2 class="hero__title">${item.title}</h2>
</div>
<div class="rating rating-box container">
    <p class="info-item">
        <b class="info-item__name">${ratingToStars(item.voteAverage)}</b>
    </p>
</div>
<div class="hero__text-box container">
    <p class="hero__text">${item.overview}</p>
</div>
<div class="buttons container">
<button class="watch-trailer btn btn-accent" type="button" data-id="${
        item.id
      }" data-trailer="${item.movie_id}">
      <span class="btn-in">Watch trailer</span></button>
<button class="more-details btn btn-light more-details-js" type="button" data-id="${
        item.id
      }">
      <span class="btn-in">More details</span>
</button>
</div>`;
    })
    .join('');
  CARD_HERO.insertAdjacentHTML('beforeend', card);
}

getResponse();

// Создаем новую разметку "заглушку"

// function createNewMarkup() {
//   const newMarkup = `<div class="hero__img-gradient"></div>
//   <img class="hero__img" loading="lazy" width="1280" height="720"
//    src="images/hero_desk_1x.jpg"
//     sizes="(min-width: 1280px) 1280px, (min-width: 768px) 768px, (min-width: 320px) 320px"
//     alt="7 people go to the fire pit"
//   >
//   <div class="hero__title-box-gs">
//     <h2 class="hero__title">Let’s Make Your Own Cinema</h2>
// </div>
// <div class="hero__text-box-gs">
//     <p class="hero__text">Is a guide to creating a personalized movie theater experience. You'll need a projector, screen, and speakers. Decorate your space, choose your films, and stock up on snacks for the full experience.</p>
// </div>
// <button class="get-started btn btn-accent" type="button" data-id="">
//       <span class="btn-in">Get Started</span></button>`;
//   CARD_HERO.insertAdjacentHTML('afterbegin', newMarkup);

const getStartedButton = document.querySelector('.get-started-btn');
getStartedButton.addEventListener('click', function () {
  window.location.href = '../../catalog.html'; // Переход на страницу "catalog"
});

