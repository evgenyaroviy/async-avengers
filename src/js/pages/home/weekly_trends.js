import axios from 'axios';
import { galleryMarkup } from '../../galleryMarkup';
import { optionsWeek } from '../../request';

const API_KEY = 'e80fd9fb75f14049ed52c4547080278b';
const CARD_BLOCK = document.querySelector('.weekly_content');
const getResponce = async () => {
  try {
    const res = axios.request(optionsWeek);
    return res.then(res => {
      if (window.screen.width <= 768) {
        createMarkup(res.data.results.slice(0, 1));
      } else {
        createMarkup(res.data.results.slice(0, 3));
      }
    });
  } catch (error) {
    console.log(error);
  }
};
console.log(getResponce());
function createMarkup(data) {
  CARD_BLOCK.insertAdjacentHTML('beforeend', galleryMarkup(data));
}
