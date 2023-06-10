import axios from 'axios';
import {
  optionsWeek,
  optionsUpcoming,
  optionsSearch,
  optionsDetails,
  optionsVideos,
  optionsGenre,
} from '../../request';

import { galleryMarkup } from '../../galleryMarkup';
import { ratingToStars } from '../../components/ratingAPI';

const galleryContainer = document.querySelector('.gallery-container');

const options = {
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
  .request(options)
  .then(function (response) {
    // console.log(response.data);

    const { genres: genresNew } = response.data;
    console.log(genresNew);
  })
  .catch(function (error) {
    console.error(error);
  });

axios
  .request(optionsWeek)
  .then(function (response) {
    const { results: resultsNew } = response.data;

    const resultsYears = resultsNew.map(r => {
      r.release_date = r.release_date.slice(0, 4);
      r.vote_average = ratingToStars(r.vote_average);
      //   r.genre_ids = ratingToStars(r.vote_average);
      return r;
    });

    // console.log(resultsYears);

    galleryContainer.innerHTML = galleryMarkup(response.data.results);
  })
  .catch(function (error) {
    console.error(error);
  });
