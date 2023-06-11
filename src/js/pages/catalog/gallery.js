import axios from 'axios';
import { optionsWeek, optionsDetails, optionsGenre } from '../../request';

import { galleryMarkup } from '../../galleryMarkup';
import { ratingToStars } from '../../components/ratingAPI';

export const galleryContainer = document.querySelector('.gallery-container');
export const catalogFailure = document.querySelector('.catalog-failure');

const optionsGenre = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/genre/movie/list',
  params: { language: 'en' },
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YTA1ZGZhMzkwMDIxYjkyZTc3ZDMzYzRhODYyZjRmNiIsInN1YiI6IjY0ODFmZWJmNjQ3NjU0MDBhZDgxYTBlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.grPFkj7_KdeogJCliXg4MDIgfDdRvjZd4DM3BdVB2Kw',
  },
};

axios
  .request(optionsGenre)
  .then(function (response) {
    const { genres: genresFetched } = response.data;
    console.log(genresFetched);
  })
  .catch(function (error) {
    console.error(error);
  });

axios
  .request(optionsWeek)
  .then(function (response) {
    const { results: resultsFetched } = response.data;
    const resultsAll = resultsFetched.map(element => {
      element.release_date = element.release_date.slice(0, 4);
      element.vote_average = ratingToStars(element.vote_average);
      //   element.genre_ids
      return element;
    });

    galleryContainer.innerHTML = galleryMarkup(resultsAll);
  })
  .catch(function (error) {
    console.error(error);
    catalogFailure.style.display = 'block';
  });
