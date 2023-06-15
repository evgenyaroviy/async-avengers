import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.css';
import axios from 'axios';
import { optionsWeek, ACCESS_KEY } from '../../request';
import { galleryMarkup } from '../../galleryMarkup';
import { optionsGenre } from '../../request';
import { galleryContainer } from './gallery';


{/* <svg class="tui-ico-style" width="28" height="28"><use href="../../../images/chevron-forward-l.svg"></use></svg> */ }

const paginationContainer = document.getElementById('pagination');
const paginationOptions = {
  totalItems: 100,
  itemsPerPage: 20,
  visiblePages: 5,
  page: 1, //add leading zero
  centerAlign: true,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage:
      '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}"></span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}"></span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};
const pagination = new Pagination(paginationContainer, paginationOptions);
let currentPage = 1;
let catalogTotalItems;

responseWeeklytrends();
checkTotalItems();
pagination.on('beforeMove', event => {
  currentPage = event.page;
  console.log(currentPage);
  optionsWeek.params.page = currentPage;
  responseWeeklytrends();
});

function checkTotalItems() {
  const timer = setInterval(() => {
    const loadSucceed = document.querySelector('.movie-card');
    console.log('loading...');
    if (loadSucceed) {
      console.log('success!');
      pagination.reset(catalogTotalItems);
      clearInterval(timer);
    }
  }, 500);
}
// functions from gallery.js
async function responseWeeklytrends() {
  const data = await fetchWeeklytrends(currentPage);
  const moviesArr = data.results;

  const genres = await fetchGenresMovie();

  moviesArr.forEach(e => {
    const genre = genres.find(genre => genre.id == e.genre_ids[0]);
    e.genre_name = genre ? genre.name : '';
  });

  galleryContainer.innerHTML = galleryMarkup(moviesArr);
}

async function fetchWeeklytrends(currentPage) {
  const ACCESS_KEY =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOTZiN2ExNTYwNGYwMmExYWNkMTVhNWJlY2JmMjQ4MCIsInN1YiI6IjY0ODNhYTBhOTkyNTljMDBlMmY0NWE4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._Sdbi-2PalUFAI7K7hzIv-hc4p92EU6q_yg6_IJJHjA';
  const optionsWeek = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/trending/movie/week',
    params: { language: 'en-US', page: currentPage },
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${ACCESS_KEY}`,
    },
  };

  try {
    const response = await axios.request(optionsWeek);
    catalogTotalItems = response.data.total_results;
    return response.data;
  } catch (error) {
    console.error(error);
    catalogFailure.style.display = 'block';
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
