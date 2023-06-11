import axios from 'axios';

import { optionsSearch, optionsDetails, optionsGenre } from '../../request.js';

import { ratingToStars } from '../../components/ratingAPI';
import { galleryMarkup } from '../../galleryMarkup';
import { galleryContainer } from './gallery.js';
import { catalogFailure } from './gallery.js';

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
    return;
  } else {
    optionsSearch.params.query = inputEl.value;
    axios
      .request(optionsSearch)
      .then(function (response) {
        const { results: resultsFetched } = response.data;
        const resultsAll = resultsFetched.map(element => {
          element.release_date = element.release_date.slice(0, 4);
          element.vote_average = ratingToStars(element.vote_average);
          //   element.genre_ids
          return element;
        });
        resetContainer.style.display = 'block';
        galleryContainer.innerHTML = galleryMarkup(resultsAll);
      })
      .catch(function (error) {
        console.error(error);
        catalogFailure.style.display = 'block';
      });
  }
}

function handleResetSearch() {
  resetContainer.style.display = 'none';
}
function clearMarkup() {
  galleryContainer.innerHTML = '';
}
