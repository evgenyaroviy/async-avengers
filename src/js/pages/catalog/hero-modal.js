const ACCESS_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOTZiN2ExNTYwNGYwMmExYWNkMTVhNWJlY2JmMjQ4MCIsInN1YiI6IjY0ODNhYTBhOTkyNTljMDBlMmY0NWE4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._Sdbi-2PalUFAI7K7hzIv-hc4p92EU6q_yg6_IJJHjA'

const refs = {
  buttonCloseEl: document.querySelector('.modal-close-btn'),
  backdropEl: document.querySelector('.js-backdrop'),
  modalBodyEl: document.querySelector('.js-modal-body'),
};

async function onOpenModal(event) {
  console.log(event.target);
  try {

    event.preventDefault();

    toggleModal();
    document.addEventListener('keydown', keyBoardPress);
    onScrollHidden();

    const targetEl = event.target;
    const idEl = targetEl.parentElement;

    const movieId = idEl.dataset.id;

    const results = await fetchMovieById(movieId);

    const newResults = createMarkupCardModal(results);
    updateCardModal(newResults);
    prepareMovieToSaving(results);
  } catch (error) {
    console.log(error);
  }
}

function closeBtnClick() {
  toggleModal();
  document.removeEventListener('keydown', keyBoardPress);
  onScroll();
  onClearModalWindow();
}

function keyBoardPress(event) {
  if (event.key === 'Escape') {
    closeBtnClick();
    onScroll();
    onClearModalWindow();
  }
}

function onBackdropClick(event) {
  if (event.target === event.currentTarget) {
    closeBtnClick();
    onScroll();
    onClearModalWindow();
  }
}

refs.buttonCloseEl.addEventListener('click', closeBtnClick);
refs.backdropEl.addEventListener('click', onBackdropClick);

function toggleModal() {
  refs.backdropEl.classList.toggle('is-hidden');
}

function onScroll() {
  document.body.style.overflow = 'scroll';
}

function onScrollHidden() {
  document.body.style.overflow = 'hidden';
}

function onClearModalWindow() {
  refs.modalBodyEl.innerHTML = '';
}

async function fetchMovieById(movieId) {
  try {
    const options = {
        method: 'GET',
        params: { language: 'en-US' },
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${ACCESS_KEY}`,
      },
    };

const response = await fetch(
  `https://api.themoviedb.org/3/movie/${movieId}`,
  options
);

      
    if (!response.ok) {
      throw new Error(
        (refs.modalBodyEl.innerHTML = `<div class="sorry-message">OOPS...We are very sorry! We don't have more information about this movie.</div>`)
      );
    }
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

function createMarkupCardModal({
  genres,
  overview,
  poster_path,
  popularity,
  vote_average,
  vote_count,
  title,
}) {
  let genresEl = genres
    .map(({ name }) => {
      return `${name}`;
    })
    .join(' ');

  if (poster_path === null) {
    const markup = `<div class="film-wrapper">
          <img
            class="film-non-image"
            src="${img}"
            alt="${title}"
            loading="lazy"
          />
          <div class="film-information">
            <h2 class="film-title">${title}</h2>
            <ul>
              <li class="film-item">
                <p class="film-details">Vote / Votes</p>
                <p class="film-info--upper">
                  <span class="film-rating">${vote_average.toFixed(1)}</span>
                  <span class="film-divider"> / </span>
                  <span class="film-vote-count">${vote_count}</span>
                </p>
              </li>
              <li class="film-item">
                <p class="film-details">Popularity</p>
                <p class="film-info--upper">${popularity.toFixed(1)}</p>
              </li>
              <li class="film-item">
                <p class="film-details">Genre</p>
                <p class="film-info--upper">${genresEl}</p>
              </li>
            </ul>
            <h3 class="film-about-title">ABOUT</h3>
            <p class="film-about-text">${overview}</p>
            <button type="button" class="film-button js-watch">
              my library
            </button>
            
          </div>
        </div>`;
    return markup;
  }
  const markup = `<div class="film-wrapper">
          <img
            class="film-image"
            src="https://image.tmdb.org/t/p/w500${poster_path}"
            alt="${title}"
            loading="lazy"
          />
          <div class="film-information">
            <h2 class="film-title">${title}</h2>
            <ul>
              <li class="film-item">
                <p class="film-details">Vote / Votes</p>
                <p class="film-info--upper">
                  <span class="film-rating">${vote_average.toFixed(1)}</span>
                  <span class="film-divider"> / </span>
                  <span class="film-vote-count">${vote_count}</span>
                </p>
              </li>
              <li class="film-item">
                <p class="film-details">Popularity</p>
                <p class="film-info--upper">${popularity.toFixed(1)}</p>
              </li>
              <li class="film-item">
                <p class="film-details">Genre</p>
                <p class="film-info--upper">${genresEl}</p>
              </li>
            </ul>
            <h3 class="film-about-title">ABOUT</h3>
            <p class="film-about-text">${overview}</p>
            <button type="button" class="film-button js-watch">
              my library
            </button>
            
          </div>
        </div>`;

  return markup;
}

function updateCardModal(markup) {
  refs.modalBodyEl.innerHTML = markup;
}

export { onOpenModal };