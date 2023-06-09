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

// MOVIES OF THE WEEK
export const optionsWeek = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/trending/movie/week',
    params: { language: 'en-US' },
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer 4a05dfa390021b92e77d33c4a862f4f6'
    }
};

// UPCOMING MOVIES
export const optionsUpcoming = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/upcoming',
    params: { language: 'en-US', page: '1' },
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer 4a05dfa390021b92e77d33c4a862f4f6'
    }
};

// SEARCH MOVIES
export const optionsSearch = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/search/movie',
    params: { include_adult: 'false', language: 'en-US', page: '1' },
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer 4a05dfa390021b92e77d33c4a862f4f6'
    }
};

// DETAILS MOVIES
export const optionsDetails = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/movie_id',
    params: { language: 'en-US' },
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer 4a05dfa390021b92e77d33c4a862f4f6'
    }
};

// VIDEOS MOVIES 
export const optionsVideos = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/movie_id/videos',
    params: { language: 'en-US' },
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer 4a05dfa390021b92e77d33c4a862f4f6'
    }
};


// GENRE MOVIES
export const optionsGenre = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/genre/movie/list',
    params: { language: 'en' },
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer 4a05dfa390021b92e77d33c4a862f4f6'
    }
};