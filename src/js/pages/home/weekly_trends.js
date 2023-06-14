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
function createMarkup(data) {
  CARD_BLOCK.innerHTML = galleryMarkup(data);
}
async function getGenres() {
  try {
    const res = await axios.request(optionsGenre);
    return res.then(res => {
      return res.data;
    });
  } catch (error) {}
}

console.log(getGenres());
// function generateGenres(movieInfo, genres) {
//   const genresName = [];
//   movieInfo.forEach(movie => {
//     const genreNames = [];
//     movie.genre_ids.forEach(genreId => {
//       const genre = genres.find(genre => genre.id === genreId);
//       if (genre) {
//         genreNames.push(genre.name);
//       }
//     });
//     genresName.push(genreNames.join(', '));
//   });
//   return genresName;
// }
