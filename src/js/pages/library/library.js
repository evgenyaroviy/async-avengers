import { galleryMarkup } from '../../galleryMarkup';

const genresSelect = document.querySelector('.genres-select');

if (genresSelect) {
  genresSelect.addEventListener('change', libraryRender);
}
let colbMovies = 9;

const btnLoadMore = document.querySelector('.btn-load-more');
// btnLoadMore.style.display = 'none';
// btnLoadMore.addEventListener('click', () => {
//   colbMovies += 9
//   libraryRender()
// })
export function libraryRender() {
  try {
    const localMoviesList = JSON.parse(localStorage.getItem('MOVIE-ID-LIST'));
    const moviesContainerEl = document.querySelector('.movies-libary');
    const oopsMessage = document.querySelector('.oops-message');
    const libraryMoviesList = document.querySelector('.library-movies--list')
    let localMoviesListGanresSort = [];
    moviesContainerEl.innerHTML = ``;
    if (localMoviesList) {
      localMoviesList.forEach(e => {
        e.genre_name = e.genres[0].name;
      });

      localMoviesList.sort(e => {
        e.genre_name === genresSelect.value;
      });

      localMoviesList.forEach(e => {
        if (e.genre_name === genresSelect.value) {
          localMoviesListGanresSort.unshift(e);
        } else {
          localMoviesListGanresSort.push(e);
        }
      });
    }
    if (!localMoviesList || localMoviesList.length === 0) {
      oopsMessage.style.display = 'block';
    } else {
      if (localMoviesList.length > 9) {
        btnLoadMore.style.display = 'block'
      }
      moviesContainerEl.insertAdjacentHTML(
        'beforeend',
        galleryMarkup(localMoviesListGanresSort.slice(0, colbMovies))
      );
      if (libraryMoviesList.childNodes.length === localMoviesListGanresSort.length) {
        btnLoadMore.style.display = 'none'
      }
    }
  } catch {
    //hi hi hi HARD CODE
  }
}
libraryRender()