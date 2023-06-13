import sprite from '../../images/sprite.svg';
import axios from 'axios';
import { libraryRender } from '../pages/library/library';
import { optionsDetails } from '../request';
import {
  removeFromLocalStorage,
  addToLocalStorage,
  moviesIdList,
  MOVIES_LIST_KEY,
} from './localStorageBtn';
const modalEl = document.querySelector('.modal');
const backdrop = document.querySelector('.backdrop');
//localadd

//localadd
// беремо списки з розмітки
const weeklyTrends = document.querySelector('.weekly_content'); // список фільмів з головної сторінки
const catalog = document.querySelector('.movies-container'); // список фільмів з каталогу
//const library = document.querySelector(''); // список фільмів з бібліотеки
const hero = document.querySelector('.film-of-day');

hero.addEventListener('click', onMoreDetailsClick);

// додаємо слухачів на списки
addModalListener(weeklyTrends);
addModalListener(catalog);
//addModalListener(library);

function addModalListener(movieList) {
  if (!movieList) {
    return;
  }
  movieList.addEventListener('click', onMovieClick);
}

// хендлер при кліку на фільм
async function onMovieClick(e) {
  if (!e.target.closest('.movie-card')) {
    return;
  }
  try {
    const movieId = e.target.closest('.movie-card').getAttribute('data-id');

    optionsDetails.url = `https://api.themoviedb.org/3/movie/${movieId}`;

    axios
      .request(optionsDetails)
      .then(function (response) {
        const movieData = response.data;
        const markup = createModalMarkup(movieData);
        openModal(markup);

        const modalCloseBtn = document.querySelector('.modal-close-btn');
        modalCloseBtn.addEventListener('click', closeModal);

        const addToLibraryBtn = document.querySelector('.modal-btn-add');
        addToLibraryBtn.addEventListener('click', e =>
          addToLocalStorage(e, movieData)
        );

        const removeFromLibraryBtn =
          document.querySelector('.modal-btn-remove');
        removeFromLibraryBtn.addEventListener('click', e =>
          removeFromLocalStorage(e, movieData)
        );
        //local
        const idFind = moviesIdList.find(e => e.id === movieData.id);
        if (idFind) {
          addToLibraryBtn.style.display = 'none';
          removeFromLibraryBtn.style.display = 'block';
        } else {
          removeFromLibraryBtn.style.display = 'none';
          addToLibraryBtn.style.display = 'block';
        }

        //local
      })
      .catch(function (error) {
        console.error(error);
      });
  } catch (error) {
    console.log(error);
  }
}

// хендлер при кліку на кнопку
async function onMoreDetailsClick(e) {
  if (!e.target.closest('.more-details-js')) {
    return;
  }
  try {
    const movieId = e.target
      .closest('.more-details-js')
      .getAttribute('data-id');

    optionsDetails.url = `https://api.themoviedb.org/3/movie/${movieId}`;

    axios
      .request(optionsDetails)
      .then(function (response) {
        const movieData = response.data;
        const markup = createModalMarkup(movieData);
        openModal(markup);

        const modalCloseBtn = document.querySelector('.modal-close-btn');
        modalCloseBtn.addEventListener('click', closeModal);

        const addToLibraryBtn = document.querySelector('.modal-btn-add');
        addToLibraryBtn.addEventListener('click', addToLocalStorage);

        const removeFromLibraryBtn =
          document.querySelector('.modal-btn-remove');
        removeFromLibraryBtn.addEventListener('click', removeFromLocalStorage);
      })
      .catch(function (error) {
        console.error(error);
      });
  } catch (error) {
    console.log(error);
  }
}

function createModalMarkup({
  id,
  poster_path,
  title,
  overview,
  popularity,
  vote_average,
  vote_count,
  genres,
}) {
  // отримання списку жанрів
  const genresList = getGenresList(genres);
  function getGenresList(genres) {
    return genres.map(g => g.name).join(', ');
  }

  const roundedVoteAverage = vote_average.toFixed(1);
  const roundedPopularity = popularity.toFixed(1);

  // розмітка модального вікна
  return `<div class="modal-container" data-id=${id}>
            <button class="modal-close-btn">
              <svg width="24" height="24" class="modal-close-icon">
                <use href="${sprite}#icon-close-outline"></use>       
              </svg>
            </button>
            <img src="https://image.tmdb.org/t/p/original/${poster_path}" loading="lazy" alt="${title}" class="img modal-img" width="248"/>
            <div class="modal-card">
              <div class="modal-info">
                <h3 class="modal-title">${title}</h3>
                <ul class="modal-details-list">
                  <li class="modal-details-item">
                    <p class="modal-details-subtitle">Vote / Votes</p>
                    <p class="modal-votes"><span>${roundedVoteAverage}</span> / <span>${vote_count}</span></p>
                  </li>
                  <li class="modal-details-item">
                    <p class="modal-details-subtitle">Popularity</p>
                    <p class="modal-popularity">${roundedPopularity}</p>
                  </li>
                  <li class="modal-details-item">
                    <p class="modal-details-subtitle">Genre</p>
                    <p class="modal-genre">${genresList}</p>
                  </li>
                </ul>
              </div>
              <h4 class="modal-about">ABOUT</h4>
              <p class="modal-about-text">${overview}</p>
              <button class="btn modal-btn-add btn-dark"  type="button">
                <span class="btn-in modal-btn-add-span" data-id="${id}">Add to my library</span>
              </button>
              <button class="btn modal-btn-remove btn-dark" type="button">
                <span class="btn-in modal-btn-remove-span" data-id="${id}">Remove from my library</span>
              </button>
            </div>
          </div>`;
}

function openModal(markup) {
  modalEl.innerHTML = markup;
  modalEl.classList.add('modal-show');
  backdrop.classList.add('modal-show');

  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalEl.classList.remove('modal-show');
  backdrop.classList.remove('modal-show');
  document.body.style.overflow = 'auto';
  libraryRender();
}

backdrop.addEventListener('click', closeModal);

window.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal();
  }
});

//localadd
//localadd
