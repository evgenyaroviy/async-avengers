import axios from 'axios';
import { galleryMarkup } from '../../galleryMarkup';

const API_KEY = 'e80fd9fb75f14049ed52c4547080278b';
const CARD_BLOCK = document.querySelector('.weekly_content');
const getResponce = () => {
  try {
    const res = axios.get(
      `https://api.themoviedb.org/3/trending/movie/week?language=en-US&api_key=${API_KEY}`
    );
    return res.then(res => {
      if (window.screen.width > 380 && window.screen.width < 450) {
        createMarkup(res.data.results.slice(0, 1));
      } else {
        createMarkup(res.data.results.slice(0, 3));
      }
    });
  } catch (error) {
    console.log('error' + error);
  }
};
console.log(getResponce());
function createMarkup(data) {
  CARD_BLOCK.insertAdjacentHTML('beforeend', galleryMarkup(data));
}
