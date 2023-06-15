import { ratingToStars } from '../js/components/ratingAPI';
import posterPlaceholder from '../images/poster-not-available.jpg';


export function galleryMarkup(movies) {
  return movies
    .map(
      ({ title, poster_path, genre_name, vote_average, release_date, id }) => {
        const stars = ratingToStars(vote_average);
        const releaseYear = release_date.slice(0, 4);
        
        if (poster_path == null) {
          srcAlt = `src='${posterPlaceholder}' alt='${title}'`;
        } else {
          srcAlt = `srcset="https://image.tmdb.org/t/p/w500/${poster_path} 500w,
                  https://image.tmdb.org/t/p/w300/${poster_path} 342w,
                  https://image.tmdb.org/t/p/w185/${poster_path} 185w"
                  src="https://image.tmdb.org/t/p/w500/${poster_path}"
                  "sizes=" (min-width: 768px) 500px, (min-width: 480px) 342px, (min-width: 320px) 185px, 100vw"   
                  alt='${title}'`;
        }

        if (genre_name === '') {
          genre_name = `No information yet`;
        }
           
           return `<li data-id=${id} class="movie-card"> 
      <img ${srcAlt}
        loading="lazy" 
        width='395' height='574'
        class="movie-card__img" /> 
      <div class="movie-card__backdrop"> 
        <div class="movie-card__info"> 
          <h3 class="info-item__name">${title}</h3> 
           
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
