import axios from 'axios';
import { optionsUpcoming } from '../../request';
import { optionsGenre } from '../../request';
import { showLoader, hideLoader } from '../../components/loader';
import {
  removeFromLocalStorage,
  addToLocalStorage,
  moviesIdList,
  MOVIES_LIST_KEY,
} from '../../components/localStorageBtn';

const containerMovie = document.querySelector('.container-upcoming-movie');

async function fetchUpcomingMovie() {
  try {
    showLoader();
    const response = await axios.request(optionsUpcoming);
    return response.data;
  } catch (error) {
    console.error(error);
    containerMovie.innerHTML = markupError();
  } finally {
    hideLoader();
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
try {
} catch {}
function createRandomMovies(movieInfo) {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const thisMonth = `${year}-${month}-01`;
  const filteredMovies = movieInfo.filter(
    movie => movie.release_date >= thisMonth
  );
  const randomIndexFilm = Math.floor(Math.random() * filteredMovies.length);
  const randomMovieFilm = filteredMovies[randomIndexFilm];
  return randomMovieFilm;
}
async function responseUpcoming() {
  try {
    showLoader();
    const data = await fetchUpcomingMovie();
    const movieInfo = data.results;
    const randomIndex = Math.floor(Math.random() * movieInfo.length);
    const randomMovie = movieInfo[randomIndex];
    const id = randomMovie.id;
    const genres = await fetchGenresMovie(id);
    const randomMovieFilm = createRandomMovies(movieInfo);
    //local
    // BUTTON//
    containerMovie.addEventListener('click', onClickAddToLocalStorage);

    function onClickAddToLocalStorage(event) {
      event.preventDefault();

      const target = event.target;
      if (target.classList.contains('upcoming-btn-add-span')) {
        addToLocalStorage(event, randomMovieFilm);
      } else if (target.classList.contains('upcoming-btn-remove-span')) {
        removeFromLocalStorage(event, randomMovieFilm);
      }
    }
    //local
    if (genres.length === 0) {
      containerMovie.innerHTML = createMarkupUpcoming([], randomMovieFilm);
    } else {
      generateGenres(movieInfo, genres);
      containerMovie.innerHTML = createMarkupUpcoming(genres, randomMovieFilm);
    }
  } finally {
    hideLoader();
  }
}

function generateGenres(movieInfo, genres) {
  const genresName = [];
  movieInfo.forEach(movie => {
    const genreNames = [];
    movie.genre_ids.forEach(genreId => {
      const genre = genres.find(genre => genre.id === genreId);
      if (genre) {
        genreNames.push(genre.name);
      }
    });
    genresName.push(genreNames.join(', '));
  });
}

function createMarkupUpcoming(movieInfo, genres) {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const startOfMonth = `${year}-${month}-01`;
  const endOfMonth = `${year}-${month}-31`;

  const filteredMovies = movieInfo.filter(movie => {
    return (
      movie.release_date >= startOfMonth && movie.release_date <= endOfMonth
    );
  });
  const randomIndex = Math.floor(Math.random() * filteredMovies.length);
  const randomMovie = filteredMovies[randomIndex];

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
  } = randomMovie;

  const releaseDay = addLeadingZero(new Date(release_date).getDate());
  const releaseMonth = addLeadingZero(new Date(release_date).getMonth() + 1);
  const releaseYear = new Date(release_date).getFullYear();

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
        <p class="upcoming-realese-date">${releaseDay}.${releaseMonth}.${releaseYear}</p>
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

// ERROR//

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

// function addToLocalStorage(e) {
//   const addToLibraryBtn = e.target.parentNode;
//   addToLibraryBtn.style.display = 'none';
//   const removeFromLibraryBtn = addToLibraryBtn.nextElementSibling;
//   removeFromLibraryBtn.style.display = 'block';
// }
// function removeFromLocalStorage(e) {
//   const removeFromLibraryBtn = e.target.parentNode;
//   removeFromLibraryBtn.style.display = 'none';
//   const addToLibraryBtn = removeFromLibraryBtn.previousElementSibling;
//   addToLibraryBtn.style.display = 'block';
// }
responseUpcoming();
