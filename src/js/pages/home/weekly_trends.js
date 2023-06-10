import axios from 'axios';

const API_KEY = 'e80fd9fb75f14049ed52c4547080278b';
const CARD_BLOCK = document.querySelector('.weekly_content');
const getResponce = () => {
  try {
    const res = axios.get(
      `https://api.themoviedb.org/3/trending/movie/week?language=en-US&api_key=${API_KEY}`
    );
    return res.then(res => createMarkup(res.data.results.slice(0, 1)));
  } catch (error) {
    console.log('error' + error);
  }
};
console.log(getResponce());
function createMarkup(data) {
  let card = data
    .map(item => {
      return `<div class="card">
    <img class="test_img" src="https://image.tmdb.org/t/p/w500${
      item.poster_path
    }" alt="${item.title}">
    <div class="card_titles">
    <p class="card_sup_title">${item.title}</p>
    <p class="card_sub_title">${item.release_date.slice(0, 4)}</p>
  </div>
    </div>`;
    })
    .join('');
  CARD_BLOCK.insertAdjacentHTML('beforeend', card);
}
