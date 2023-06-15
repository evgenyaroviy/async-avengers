// Щоб імпортувати використовуйте: import { optionsWeek, optionsUpcoming, optionsSearch, optionsDetails, optionsVideos, optionsGenre } from './шлях до js';

// Приклад використання:
// axios
//     .request(optionsWeek)
//     .then(function (response) {
//         console.log(response.data);
//     })
//     .catch(function (error) {
//         console.error(error);
//     });

const ACCESS_KEY =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOTZiN2ExNTYwNGYwMmExYWNkMTVhNWJlY2JmMjQ4MCIsInN1YiI6IjY0ODNhYTBhOTkyNTljMDBlMmY0NWE4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._Sdbi-2PalUFAI7K7hzIv-hc4p92EU6q_yg6_IJJHjA';

// MOVIES OF THE WEEK
export const optionsWeek = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/trending/movie/week',
  params: { language: 'en-US' },
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${ACCESS_KEY}`,
  },
};

// UPCOMING MOVIES
export const optionsUpcoming = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/movie/upcoming',
  params: { language: 'en-US' },
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${ACCESS_KEY}`,
  },
};

// SEARCH MOVIES
export const optionsSearch = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/search/movie',
  params: { include_adult: 'false', language: 'en-US', page: '1' },
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${ACCESS_KEY}`,
  },
};

// DETAILS MOVIES
export const optionsDetails = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/movie/movie_id',
  params: { language: 'en-US' },
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${ACCESS_KEY}`,
  },
};

// VIDEOS MOVIES
export const optionsVideos = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/movie/movie_id/videos',
  params: { language: 'en-US' },
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${ACCESS_KEY}`,
  },
};

// GENRE MOVIES
export const optionsGenre = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/genre/movie/list',
  params: { language: 'en' },
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${ACCESS_KEY}`,
  },
};

// RLEASE DATE

export const optionsReleaseDate = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/discover/movie',
  params: { language: 'en-US' },
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${ACCESS_KEY}`,
  },
};
