import axios from 'axios';
import { galleryMarkup } from '../../galleryMarkup';
import { optionsWeek } from '../../request';

const CARD_BLOCK = document.querySelector('.movies-container');
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
getResponce();
function createMarkup(data) {
  CARD_BLOCK.innerHTML = galleryMarkup(data);
}
