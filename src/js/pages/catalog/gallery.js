import axios from 'axios'; 
import { galleryMarkup } from '../../galleryMarkup';
import { optionsGenre } from '../../request';

let currentPage = 1; 
 
const galleryContainer = document.querySelector('.movies-container'); 
 
responseWeeklytrends(); 
 
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
    return response.data;
  } catch (error) {
    console.error(error);
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