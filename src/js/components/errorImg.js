export function errorImg() {
  return `<li class="movie-card"> 
      <img src="/images/poster-not-available.jpg"
        alt="OOPS...
        We are very sorry!
        Something went wrong" 
        loading="lazy" 
        sizes="(min-width: 1280px) 364px, (min-width: 768px) 224px, 280px"
        class="movie-card__img" /> 
    </li>`;
}