export function galleryMarkup(movies) {
    return movies
        .map(
            ({
                title,
                poster_path,
                genre_ids,
                vote_average,
                release_date,
            }) => {
                return `<div class="movie-card">
        <img src="${poster_path}" alt="${title}" loading="lazy" class="movie-card__img"/>
      <div class="movie-card__info">
        <div>
        <p class="info-item">
          <b class="info-item__name">${title}</b>
        </p>

        <p class="info-item">
          <b class="info-item__name">${genre_ids}</b>
        </p>
        
        <p class="info-item">
          <b class="info-item__name">${release_date}</b>
        </p>
        </div>

        <div>
        <p class="info-item">
          <b class="info-item__name">${vote_average}</b>
        </p>
        </div>
      </div>
    </div>`;
            }
        )
        .join('');
}