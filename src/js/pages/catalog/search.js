import axios from 'axios';

import { optionsSearch, optionsGenre } from '../../request';
import { galleryMarkup } from '../../galleryMarkup';
import { galleryContainer, catalogFailure, gallerySection } from './gallery';
import { hideLoader, showLoader } from '../../components/loader';


const formEl = document.querySelector('#search-form');
const inputEl1 = document.querySelector('.search1');
const inputEl2 = document.querySelector('.search2');
const resetContainer1 = document.querySelector('.reset-container1');
const resetContainer2 = document.querySelector('.reset-container2');
const resetSearch1 = document.querySelector('.reset-search1');
const resetSearch2 = document.querySelector('.reset-search2');

const inputs = [inputEl1, inputEl2];
const resetContainers = [resetContainer1, resetContainer2];

formEl.addEventListener('submit', handleSubmitForm);

resetSearch1.addEventListener('click', handleResetSearch1);
resetSearch2.addEventListener('click', handleResetSearch2);

function handleSubmitForm(event) {
  event.preventDefault();

  catalogFailure.style.display = 'none';
  clearMarkup();

  const query1 = inputEl1.value.trim();
  const query2 = inputEl2.value.trim();

  if (query1 === '' && query2 === '') {
    catalogFailure.style.display = 'block';
    gallerySection.classList.add('failure-event');
    inputs.forEach(el => el.focus());
    return;
  } else {
    optionsSearch.params.query = query1;
    responseOptionsSearch();
  }

  if (query2 !== '') {
    optionsSearch.params.query = query2;
    responseOptionsSearch();
  }
}

async function responseOptionsSearch() {
  try {
    showLoader();
    const data = await fetchOptionsSearch();
    const genres = await fetchGenresMovie();
    const moviesArr = data.results;

    if (moviesArr.length === 0) {
      catalogFailure.style.display = 'block';
      gallerySection.classList.add('failure-event');
      resetContainers.forEach(el => (el.style.display = 'block'));

      return;
    } else {
      moviesArr.forEach(e => {
        const genre = genres.find(genre => genre.id == e.genre_ids[0]);
        e.genre_name = genre ? genre.name : '';
      });

      resetContainers.forEach(el => (el.style.display = 'block'));
      catalogFailure.style.display = 'none';
      galleryContainer.innerHTML = galleryMarkup(moviesArr);
    }
  } catch (error) {
    console.log(error);
  } finally {
    hideLoader();
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

function handleResetSearch1() {
  resetContainer1.style.display = 'none';
  inputEl1.focus();
  inputEl1.value = '';
  document.location.reload();
}

function handleResetSearch2() {
  resetContainer2.style.display = 'none';
  inputEl2.focus();
  inputEl2.value = '';
  document.location.reload();
}

function clearMarkup() {
  galleryContainer.innerHTML = '';
}

// Additional functionality

const selectElement = document.getElementById('year');
const placeholderOption = document.createElement('option');

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

selectElement.addEventListener('change', function () {
  const selectedYear = selectElement.value;
  if (selectedYear !== '') {
    optionsSearch.params.year = selectedYear;
    responseOptionsSearch();
  }
});
