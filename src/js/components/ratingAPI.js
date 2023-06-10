import { fullStar, emptyStar, halfStar } from './starsPattern';

export function ratingToStars(value) {
  let starsRating = [emptyStar, emptyStar, emptyStar, emptyStar, emptyStar];

  const rating = Math.round(value);
  const ratingStars = rating / 2;
  const quantityFullStars = Math.floor(ratingStars);
  const isHalfStar = ratingStars - quantityFullStars > 0;

  if (rating === 0 || !value) {
    return `<div class="rating__wrapper">${starsRating.join('')}</div>`;
  }
  if (rating >= 10) {
    starsRating.fill(fullStar);
    return `<div class="rating__wrapper">${starsRating.join('')}</div>`;
  }

  starsRating.fill(fullStar, 0, quantityFullStars);

  if (isHalfStar) {
    starsRating.fill(halfStar, quantityFullStars, quantityFullStars + 1);
  }

  return `<div class="rating">${starsRating.join('')}</div>`;
}
