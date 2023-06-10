import axios from 'axios';
import { optionsUpcoming } from '../../request';
import { optionsGenre } from '../../request';

const containerMovie = document.querySelector('.container-upcoming-movie');

async function fetchUpcomingMovie() {
  try {
    const response = await axios.request(optionsUpcoming);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
async function fetchGenresMovie() {
  try {
    const genres = await axios.request(optionsGenre);
    return genres.data.genres;
  } catch (error) {
    console.log(error);
  }
}

async function fetchMovieImages(id) {
  console.log(id);
  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${id}/images`,
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOTZiN2ExNTYwNGYwMmExYWNkMTVhNWJlY2JmMjQ4MCIsInN1YiI6IjY0ODNhYTBhOTkyNTljMDBlMmY0NWE4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._Sdbi-2PalUFAI7K7hzIv-hc4p92EU6q_yg6_IJJHjA',
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function responseUpcoming() {
  const data = await fetchUpcomingMovie();
  const movieInfo = data.results;
  const randomIndex = Math.floor(Math.random() * movieInfo.length);
  const randomMovie = movieInfo[randomIndex];
  /*Math.random() генерує випадкове число в діапазоні від 0 до 1 (не включно).
  movieInfo.length повертає кількість елементів у списку movieInfo.
  Math.random() * movieInfo.length повертає випадкове число від 0 до максимальної кількості елементів у списку.
  Math.floor() округлює це число до меншого цілого числа.
  Отримане число є індексом для вибору випадкового фільму зі списку, який зберігається у змінній randomMovie. */

  const id = randomMovie.id;  // Отримуємо id фільму
  const genres = await fetchGenresMovie(id);  // Передаємо id у функцію
  const posters = await fetchMovieImages(id);
  generateGenres(movieInfo, genres);
  containerMovie.innerHTML = createMarkupUpcoming(movieInfo, genres, posters);
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

function createMarkupUpcoming(movieInfo, genres, imageInfo) {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const thisMonth = `${year}-${month}-01`;

  const filteredMovies = movieInfo.filter(
    movie => movie.release_date >= thisMonth
  );
  const randomIndex = Math.floor(Math.random() * filteredMovies.length);
  const randomMovie = filteredMovies[randomIndex];
  const {
    id: idMovie,
    backdrop_path,
    original_title,
    release_date,
    vote_average,
    vote_count,
    popularity,
    genre_ids,
    overview,
  } = randomMovie;

  const {
    id: idPoster,
    posters: [{ file_path }],
  } = imageInfo;

  const releaseDay = addLeadingZero(new Date(release_date).getDate());
  const releaseMonth = addLeadingZero(new Date(release_date).getMonth() + 1);
  const releaseYear = new Date(release_date).getFullYear();

  let poster = null;
  if (idPoster === idMovie || backdrop_path !== null) {
    if (idPoster === idMovie && imageInfo.posters.length > 1) {
      const otherImage = imageInfo.posters.find(
        image => image.file_path !== backdrop_path
      );
      if (otherImage) {
        poster = `https://image.tmdb.org/t/p/original/${otherImage.file_path}`;
      }
    } else {
      poster = backdrop_path
        ? `https://image.tmdb.org/t/p/original/${backdrop_path}`
        : `https://image.tmdb.org/t/p/original/${file_path}`;
    }
  }

  const roundedPopularity = popularity.toFixed(1);

  const genreNames = genre_ids.map(genreId => {
    const genre = genres.find(genre => genre.id === genreId);
    return genre ? genre.name : '';
  });

  return `
    <img class="upcoming-image" src="${poster}" alt="${original_title}">
    <div class="info-container">
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
    <button class="btn upcoming-btn-add btn-accent" type="button">
    <span class="btn-in">Add to my library</span></button>
    <button class="btn upcoming-btn-remove btn-dark" hidden type="button">
    <span class="btn-in">Remove from my library</span></button>
    </div>
  `;
}

responseUpcoming();

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
// BUTTON//

containerMovie.addEventListener('click', function (event) {
  event.preventDefault();
  const target = event.target;
  if (target.classList.contains('upcoming-btn-add')) {
    addToLocalStorage(event);
  } else if (target.classList.contains('upcoming-btn-remove')) {
    removeFromLocalStorage(event);
  }
});

function addToLocalStorage(e) {
  const addToLibraryBtn = e.target;
  addToLibraryBtn.style.display = 'none';
  const removeFromLibraryBtn = addToLibraryBtn.parentNode.querySelector(
    '.upcoming-btn-remove'
  );
  removeFromLibraryBtn.style.display = 'block';
}

function removeFromLocalStorage(e) {
  removeFromLibraryBtn = e.target;
  removeFromLibraryBtn.style.display = 'none';
  const addToLibraryBtn =
    removeFromLibraryBtn.parentNode.querySelector('.upcoming-btn-add');
  addToLibraryBtn.style.display = 'block';
}
