import axios from 'axios';
import { optionsUpcoming } from '../../request';
import { optionsGenre } from '../../request';
import { toggleLoader } from '../../components/loader';
import {
  removeFromLocalStorage,
  addToLocalStorage,
  moviesIdList,
  MOVIES_LIST_KEY,
} from '../../components/localStorageBtn';

const containerMovie = document.querySelector('.container-upcoming-movie');

async function responseUpcoming() {
  try {
    toggleLoader(true);

    const movieInfo = (await fetchUpcomingMovie()).results;
    const randomFilm = createRandomMovies(movieInfo);
    const genres = await fetchGenresMovie(randomFilm.id);

    if (genres.length === 0) {
      containerMovie.innerHTML = createMarkupUpcoming(randomFilm, []);
    } else {
      generateGenres(movieInfo, genres);
      containerMovie.innerHTML = createMarkupUpcoming(randomFilm, genres);
    }
    const idFind = moviesIdList.find(e => e.id === randomFilm.id);
    const addToLibraryBtn = document.querySelector('.upcoming-btn-add');
    const removeFromLibraryBtn = document.querySelector('.upcoming-btn-remove');

    if (idFind) {
      addToLibraryBtn.style.display = 'none';
      removeFromLibraryBtn.style.display = 'block';
    } else {
      removeFromLibraryBtn.style.display = 'none';
      addToLibraryBtn.style.display = 'block';
    }

    containerMovie.addEventListener('click', onClickAddToLocalStorage);

    function onClickAddToLocalStorage(event) {
      event.preventDefault();

      const target = event.target;
      if (target.classList.contains('upcoming-btn-add-span')) {
        addToLocalStorage(event, randomFilm);
      } else if (target.classList.contains('upcoming-btn-remove-span')) {
        removeFromLocalStorage(event, randomFilm);
      }
    }
    //local
  } catch (error) {
    console.log(error);
    markupError();
  } finally {
    toggleLoader(false);
  }
}

async function fetchUpcomingMovie() {
  try {
    toggleLoader(true);
    return (await axios.request(optionsUpcoming)).data;
  } catch (error) {
    console.error(error);
    containerMovie.innerHTML = markupError();
  } finally {
    toggleLoader(false);
  }
}
async function fetchGenresMovie(id) {
  try {
    const genres = await axios.request(optionsGenre);
    return genres.data.genres;
  } catch (error) {
    console.log(error);
    return [];
  }
}

function createRandomMovies(movieInfo) {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const startOfMonth = `${year}-${month}-01`;
  const endOfMonth = `${year}-${month}-31`;

  const filteredMovies = movieInfo.filter(
    movie =>
      movie.release_date >= startOfMonth && movie.release_date <= endOfMonth
  );
  const randomMovieFilm =
    filteredMovies[Math.floor(Math.random() * filteredMovies.length)];

  return randomMovieFilm;
}

function generateGenres(movieInfo, genres) {
  return movieInfo.map(movie => {
    const genreNames = movie.genre_ids.map(genreId => {
      const genre = genres.find(genre => genre.id === genreId);
      return genre ? genre.name : '';
    });
    return genreNames.join(', ');
  });
}

function generateReleaseDate(date) {
  const releaseDay = addLeadingZero(new Date(date).getDate());
  const releaseMonth = addLeadingZero(new Date(date).getMonth() + 1);
  const releaseYear = new Date(date).getFullYear();
  return `${releaseDay}.${releaseMonth}.${releaseYear}`;
}

function createMarkupUpcoming(movieInfo, genres) {
  const {
    id: idMovie,
    backdrop_path,
    poster_path,
    original_title,
    release_date,
    vote_average,
    vote_count,
    popularity,
    genre_ids,
    overview,
  } = movieInfo;

  const releaseDate = generateReleaseDate(release_date);

  let poster = null;
  const screenWidth = window.innerWidth;
  if (screenWidth <= 767 && poster_path) {
    poster = `https://image.tmdb.org/t/p/original/${poster_path}`;
  } else if (backdrop_path) {
    poster = `https://image.tmdb.org/t/p/original/${backdrop_path}`;
  } else {
    poster = `https://astoriamuseums.org/wp-content/uploads/2020/10/OFM-poster-not-available.png`;
  }

  const roundedPopularity = popularity.toFixed(1);

  const genreNames = genre_ids.map(genreId => {
    const genre = genres.find(genre => genre.id === genreId);
    return genre ? genre.name : '';
  });

  return `
    <img width="280" height="402" class="upcoming-image" loading="lazy" src="${poster}" alt="${original_title}">
    <div class="info-container" >
    <h3 class="upcoming-movie-title">${original_title}</h3>
    <ul class="upcoming-list-details list">
      <li class="upcoming-list-details-item">
        <p class="upcoming-list-details-subtitle">Release date</p>
        <p class="upcoming-realese-date">${releaseDate}</p>
      </li>
      <li class="upcoming-list-details-item">
        <p class="upcoming-list-details-subtitle">Vote / Votes</p>
        <p class="upcoming-votes"><span>${vote_average}</span> / <span>${vote_count}</span></p>
      </li>
      <li class="upcoming-list-details-item">
        <p class="upcoming-list-details-subtitle">Popularity</p>
        <p class="upcoming-popularity">${roundedPopularity}</p>
      </li>
      <li class="upcoming-list-details-item">
        <p class="upcoming-list-details-subtitle">Genre</p>
        <p class="genre">${genreNames.join(', ')}</p>
      </li>
    </ul>
    <h4 class="upcoming-about">ABOUT</h4>
    <p class="upcoming-about-text">${overview}</p>
    <button class="btn upcoming-btn-add btn-accent" data-id="${idMovie}" type="button">
    <span class="btn-in upcoming-btn-add-span" >Add to my library</span></button>
    <button class="btn upcoming-btn-remove btn-dark" data-id="${idMovie}" hidden  type="button">
    <span class="btn-in upcoming-btn-remove-span"  >Remove from my library</span></button>
    </div>
  `;
}

function markupError() {
  console.log('hello');
  return `      
<h2 class="upcoming-error">
OOPS...<br>
We are very sorry!<br>
Something went wrong.</h2>`;
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

responseUpcoming();
