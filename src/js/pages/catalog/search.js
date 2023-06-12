import axios from 'axios';

import { optionsSearch, optionsGenre } from '../../request.js';
import { galleryMarkup } from '../../galleryMarkup';
import { galleryContainer, catalogFailure } from './gallery.js';

const formEl = document.querySelector('#search-form');
const inputEl = document.querySelector('.search-field');
const resetContainer = document.querySelector('.reset-container');
const resetSearch = document.querySelector('.reset-search');

formEl.addEventListener('submit', handleSubmitForm);

resetSearch.addEventListener('click', handleResetSearch);

function handleSubmitForm(event) {
  event.preventDefault();
  clearMarkup();
  catalogFailure.style.display = 'none';

  if (inputEl.value.trim() === '') {
    catalogFailure.style.display = 'block';
    inputEl.focus();
    return;
  } else {
    optionsSearch.params.query = inputEl.value;
    responseOptionsSearch();
  }
}

async function responseOptionsSearch() {
  const data = await fetchOptionsSearch();
  const genres = await fetchGenresMovie();
  const moviesArr = data.results;

  if (moviesArr.length === 0) {
    catalogFailure.style.display = 'block';
    resetContainer.style.display = 'block';
    return;
  } else {
    moviesArr.forEach(e => {
      const genre = genres.find(genre => genre.id == e.genre_ids[0]);
      e.genre_name = genre ? genre.name : '';
    });

    resetContainer.style.display = 'block';
    galleryContainer.innerHTML = galleryMarkup(moviesArr);
  }
}

async function fetchOptionsSearch() {
  try {
    const response = await axios.request(optionsSearch);
    return response.data;
  } catch (error) {
    console.error(error);
    catalogFailure.style.display = 'block';
  }
}

async function fetchGenresMovie() {
  try {
    const response = await axios.request(optionsGenre);
    return response.data.genres;
  } catch (error) {
    console.log(error);
  }
}

function handleResetSearch() {
  resetContainer.style.display = 'none';
  inputEl.focus();
  document.location.reload();
}

function clearMarkup() {
  galleryContainer.innerHTML = '';
}

// Additional functionality

// const selectElement = document.getElementById('year');
// const placeholderOption = document.createElement('option');

// placeholderOption.value = '';
// placeholderOption.textContent = 'Year';
// placeholderOption.disabled = true;
// placeholderOption.selected = true;
// selectElement.appendChild(placeholderOption);

// const currentYear = new Date().getFullYear();

// for (let year = currentYear; year >= 2015; year -= 1) {
//   const optionElement = document.createElement('option');
//   optionElement.value = year;
//   optionElement.textContent = year;
//   selectElement.appendChild(optionElement);
// }

// selectElement.addEventListener('change', function () {
//   const selectedYear = selectElement.value;
//   console.log(selectedYear);
// });
