import axios from 'axios';

import {
  optionsWeek,
  optionsUpcoming,
  optionsSearch,
  optionsDetails,
  optionsVideos,
  optionsGenre,
} from '../../request.js';

import { galleryMarkup } from '../../galleryMarkup';

const formEl = document.querySelector('#search-form');
const inputEl = document.querySelector('.search-field');

// function handleSubmitForm(event) {
//   event.preventDefault();

//   // clearMarkup();
//   // page = 1;

//   if (inputEl.value.trim() === '') {
//     alert(
//       'Sorry, there are no moves matching your search query. Please try again.'
//     );
//     return;
//   } else {
//     try {
//       axios
//         .request(optionsWeek)
//         .then(function (response) {
//           console.log(response.data);
//           return response.data;
//         })
//         .then(data => {
//           if (data.results.length === 20) {
//             alert(
//               'Sorry, there are no moves matching your search query. Please try again.'
//             );
//           }
//         })
//         .catch(function (error) {
//           console.error(error);
//         });
//     } catch (error) {
//       alert('Sorry, something went wrong. Try again later.');
//     }
//   }
// }
// if (data.totalHits > page) {
//   observer.observe(guard);
// }

// } else {
//       galleryMarkup(data.hits);
//       Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images.`);
//     }
//   } catch (error) {
//     Notiflix.Notify.failure('Sorry, something went wrong. Try again later.');
//   }
// }

// function handlePagination(entries, observer) {
//   try {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         page += 1;
//         fetchImages(inputEl.value, page, limit).then(data => {
//           galleryMarkup(data.hits);

//           if (data.totalHits <= page * limit) {
//             observer.unobserve(guard);
//             setTimeout(() => {
//               Notiflix.Notify.info(
//                 "We're sorry, but you've reached the end of search results."
//               );
//             }, 2000);
//           }
//         });
//       }
//     });
//   } catch (error) {
//     Notiflix.Notify.failure('Sorry, something went wrong. Try again later.');
//   }
// }

// function galleryMarkup(fetchedImages) {
//   const markup = fetchedImages
//     .map(
//       image => `
//         <div style="flex-basis: 360px; border-bottom-right-radius: 2px; border-bottom-left-radius: 2px; box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.54);
// -webkit-box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.54);
// -moz-box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.54);">
//           <a class="gallery-link" href="${image.largeImageURL}"><img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" style="display: block; width: 100%; height: 220px"></a>
//           <ul style="display: flex; list-style: none; justify-content: space-evenly; padding-left: 0">
//             <li style="text-align: center; height: 50px"><b>Likes</b><p>${image.likes}</p></li>
//             <li style="text-align: center; height: 50px"><b>Views</b><p>${image.views}</p></li>
//             <li style="text-align: center; height: 50px"><b>Comments</b><p>${image.comments}</p></li>
//             <li style="text-align: center; height: 50px"><b>Downloads</b><p>${image.downloads}</p></li>
//           </ul>
//         </div>
//       `
//     )
//     .join('');

//   galleryContainer.style.display = 'flex';
//   galleryContainer.style.justifyContent = 'center';
//   galleryContainer.style.flexWrap = 'wrap';
//   galleryContainer.style.columnGap = '20px';
//   galleryContainer.style.rowGap = '20px';
//   galleryContainer.insertAdjacentHTML('beforeend', markup);

//   refreshLightbox();
// }

// function clearMarkup() {
//   galleryContainer.innerHTML = '';
// }

// function refreshLightbox() {
//   if (lightbox) {
//     lightbox.refresh();
//   } else {
//     lightbox = new SimpleLightbox('.gallery-link', {
//       captionDelay: 250,
//       animationSlide: false,
//     });
//   }
// }
