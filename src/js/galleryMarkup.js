import { ratingToStars } from '../js/components/ratingAPI';

export function galleryMarkup(movies) {
  return movies
    .map(
      ({ title, poster_path, genre_name, vote_average, release_date, id }) => {
        const stars = ratingToStars(vote_average);
        const releaseYear = release_date.slice(0, 4);

        return `<li data-id=${id} class="movie-card"> 
      <img src="https://image.tmdb.org/t/p/original${poster_path}" alt="${title}" loading="lazy" class="movie-card__img" width="280" height="406"/> 
      <div class="movie-card__backdrop"> 
        <div class="movie-card__info"> 
          <p class="info-item__name">${title}</p> 
           
          <div class="movie-card__info__items"> 
            <p class="info-item__genreYear">${genre_name} | ${releaseYear}</p> 
            <div class="info-item__stars">${stars}</div> 
          </div> 
        </div> 
      </div> 
    </li>`;
      }
    )
    .join('');
}