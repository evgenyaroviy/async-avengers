import { galleryMarkup } from '../../galleryMarkup';
try {
  let colbMovies = 9;
  const btnLoadMore = document.querySelector('.btn-load-more');
  btnLoadMore.style.display = 'none';

  btnLoadMore.addEventListener('click', () => {
    colbMovies += 9;
    libraryRender(colbMovies);
  });
} catch {}
export function libraryRender(colbMovies) {
    try{
  const btnLoadMore = document.querySelector('.btn-load-more');

  const genresSelect = document.querySelector('.genres-select');
  if (genresSelect) {
    genresSelect.addEventListener('change', () => libraryRender(colbMovies));
  }
  const localMoviesList = JSON.parse(localStorage.getItem('MOVIE-ID-LIST'));
  const moviesContainerEl = document.querySelector('.movies-libary');
  const oopsMessage = document.querySelector('.oops-message');
  let localMoviesListGanresSort = [];
  moviesContainerEl.innerHTML = ``;
  if (localMoviesList) {
    localMoviesList.forEach(e => {
      Array.isArray(e) ? (e = e[0]) : e;
        if(e.genres){
            e.genre_name =e.genres[0].name
        }
    });

    localMoviesList.sort(e => {
      if (genresSelect) e.genre_name === genresSelect.value;
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
    oopsMessage.style.display = 'none';
    moviesContainerEl.insertAdjacentHTML(
      'beforeend',
      galleryMarkup(localMoviesListGanresSort.slice(0, colbMovies || 9))
    );
    if (localMoviesList.length > 9) {
      colbMovies += 9;
      btnLoadMore.style.display = 'block';
    }
  const libraryMoviesList = document.querySelector('.library-movies--list');

    if (
      libraryMoviesList.childNodes.length === localMoviesListGanresSort.length
    ) {
      btnLoadMore.style.display = 'none';
    }
  }
}catch{
  //hi hi hi HARD CODE
}}
libraryRender();
