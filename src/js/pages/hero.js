import { ratingToStars } from '../components/ratingAPI';
import { showLoader, hideLoader } from '../components/loader';

import axios from 'axios';

const API_KEY = 'e80fd9fb75f14049ed52c4547080278b';
const CARD_HERO = document.querySelector('.film-of-day');

// Функция для получения случайного объекта из массива

function getRandomObject(data) {
  const randomIndex = Math.floor(Math.random() * data.length);
  return data[randomIndex];
}

const getResponse = async () => {
  try {
    showLoader();

    // Выполняем GET-запрос к API, чтобы получить популярные фильмы за день

    const res = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=${API_KEY}`
    );

    // Создаем объекты фильмов из полученных данных

    const data = createObject(res.data.results);

    // Получаем случайный объект из массива данных

    const randomObject = getRandomObject(data);

    // Создаем разметку с данными случайного объекта

    createMarkup([randomObject]);
  } catch (error) {
    getStartedBox.style.display = 'block'; // Показываем get-started-box
    console.log('error' + error);
  } finally {
    hideLoader();
  }
};

// Функция для создания объектов фильмов из полученных данных

function createObject(data) {
  return data.map(item => ({
    backdropPath: item.backdrop_path,
    title: item.title || item.name,
    voteAverage: item.vote_average,
    overview: item.overview,
    id: item.id,
  }));
}

const getStartedBox = document.querySelector('.get-started-section');


// Функция для создания разметки с данными объекта фильма

function createMarkup(data) {
  let card = data
    .map(item => {

      // Проверяем наличие необходимых данных в объекте

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
      

      // Создаем разметку для текущего объекта фильма

      return `<div class="hero__img-gradient"></div>
  <img class="hero__img" loading="lazy" width="1280" height="720"
    srcset="https://image.tmdb.org/t/p/w1280${item.backdropPath} 1280w,
    https://image.tmdb.org/t/p/w780${item.backdropPath} 768w,
    https://image.tmdb.org/t/p/w300${item.backdropPath} 320w"
    src="https://image.tmdb.org/t/p/w300${item.backdropPath}"
    sizes="(min-width: 1280px) 1280px, (min-width: 768px) 768px, (min-width: 320px) 320px"
    alt="${item.title}"
  >
  <div class="hero__title-box">
    <h2 class="hero__title">${item.title}</h2>
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
<button class="watch-trailer btn btn-accent" type="button" data-id="${
        item.id
      }" data-trailer="${item.movie_id}">
      <span class="btn-in">Watch trailer</span></button>
<button class="more-details btn btn-dark more-details-js" type="button" data-id="${
        item.id
      }">
      <span class="btn-in">More details</span>
</button>
</div>`;
    })
    .join('');
  CARD_HERO.insertAdjacentHTML('beforeend', card);
}

// Вызываем функцию для получения данных и создания разметки

getResponse();


