import axios from 'axios';

import { optionsSearch, optionsGenre, optionsReleaseDate } from '../../request';
import { galleryMarkup } from '../../galleryMarkup';
import { galleryContainer, catalogFailure, gallerySection } from './gallery';
import { toggleLoader } from '../../components/loader';

const formEl = document.querySelector('#search-form');
const inputEl = document.querySelector('.search');
const resetContainer = document.querySelector('.reset-container');
const resetSearch = document.querySelector('.reset-search');
const selectElement = document.getElementById('year');
const placeholderOption = document.createElement('option');

formEl.addEventListener('submit', handleSubmitForm);
resetSearch.addEventListener('click', handleResetSearch);

function handleSubmitForm(event) {
  event.preventDefault();
  catalogFailure.style.display = 'none';
  clearMarkup();

  const query = inputEl.value.trim();
  const selectedYear = selectElement.value;

  if (query === '' && selectedYear === '') {
    catalogFailure.style.display = 'block';
    gallerySection.classList.add('failure-event');
    inputEl.focus();
    return;
  }

  if (selectedYear !== '' && query !== '') {
    optionsSearch.params.year = selectedYear;
    optionsSearch.params.query = query;
    responseOptionsSearch();
  }

  if (selectedYear !== '' && query === '') {
    optionsReleaseDate.params.primary_release_year = selectedYear;
    responseOptionsSearch();
  } else {
    optionsSearch.params.query = query;
    responseOptionsSearch();
  }
}

async function responseOptionsSearch() {
  try {
    const data = await fetchOptionsSearch();
    const genres = await fetchGenresMovie();
    const release = await fetchReleaseDate();

    let moviesArr = [];

    if (data && data.results.length !== 0) {
      moviesArr = data.results;
    } else {
      catalogFailure.style.display = 'block';
      gallerySection.classList.add('failure-event');
      resetContainer.style.display = 'block';
    }

    if (release) {
      moviesArr = moviesArr.concat(release.results);
    }

    if (data.results.length === 0 && !release) {
      return;
    } else {
      moviesArr.forEach(e => {
        const genre = genres.find(genre => genre.id == e.genre_ids[0]);
        e.genre_name = genre ? genre.name : '';
      });

      resetContainer.style.display = 'block';
      catalogFailure.style.display = 'none';
      galleryContainer.innerHTML = galleryMarkup(moviesArr);
    }
  } catch (error) {
    console.log(error);
  }
}

async function fetchOptionsSearch() {
  try {
    const response = await axios.request(optionsSearch);
    return response.data;
  } catch (error) {
    console.error(error);
    catalogFailure.style.display = 'block';
    gallerySection.classList.add('failure-event');
  } finally {
    toggleLoader();
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
  document.location.reload();
}

function clearMarkup() {
  galleryContainer.innerHTML = '';
}

// Additional functionality

placeholderOption.value = '';
placeholderOption.textContent = 'Year';
placeholderOption.disabled = true;
placeholderOption.selected = true;
selectElement.appendChild(placeholderOption);

const currentYear = new Date().getFullYear();

for (let year = currentYear; year >= 2015; year -= 1) {
  const optionElement = document.createElement('option');
  optionElement.value = year;
  optionElement.textContent = year;
  selectElement.appendChild(optionElement);
}

async function fetchReleaseDate() {
  try {
    const response = await axios.request(optionsReleaseDate);
    return response.data;
  } catch (error) {
    console.error(error);
    catalogFailure.style.display = 'block';
  } finally {
    selectElement.value = '';
    toggleLoader();
  }
}
