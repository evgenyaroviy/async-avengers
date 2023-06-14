import axios from 'axios';
import { galleryMarkup } from '../../galleryMarkup';
import { optionsGenre, optionsWeek } from '../../request';

const API_KEY = 'e80fd9fb75f14049ed52c4547080278b';
const CARD_BLOCK = document.querySelector('.movies-container');
const getResponce = async () => {
  try {
    const res = axios.request(optionsWeek);
    return res.then(res => {
      if (window.screen.width <= 768) {
        createMarkup(res.data.results.slice(0, 1));
        getGenres(res.data.results.slice(0, 1));
      } else {
        createMarkup(res.data.results.slice(0, 3));
        // generateGenres(res.data.results.slice(0, 1), getGenres);
      }
    });
  } catch (error) {
    console.log(error);
  }
};
getResponce();
async function createMarkup(data) {
  const genres = await fetchGenresMovie();
  data.forEach(e => {
    const genre = genres.find(genre => genre.id == e.genre_ids[0]);
    e.genre_name = genre ? genre.name : '';
  });
  CARD_BLOCK.innerHTML = galleryMarkup(data);
}

async function fetchGenresMovie() {
  try {
    const response = await axios.request(optionsGenre);
    return response.data.genres;
  } catch (error) {
    console.log(error);
  }
}
