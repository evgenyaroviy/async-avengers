import axios from "axios";
import * as basicLightbox from 'basiclightbox';

const KEY = 'e80fd9fb75f14049ed52c4547080278b';

export async function getTrailer(id) {
    try {
        return await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${KEY}&language=en-US`)
    } catch (error) {
        console.error(error)
    }
}

export function watchTrailer({ data }) {
    const trailers = data.results;
    const watchTrailerBtn = document.querySelector('.watch-trailer');
    if (trailers !== 0) {
        const randomIndex = Math.floor(Math.random() * (trailers.length - 1));
        const randomTrailer = trailers[randomIndex]
        console.log(randomTrailer.key)
        watchTrailerBtn.addEventListener('click', () => {
            const videoUrl = `https://www.youtube.com/embed/${randomTrailer.key}`;
            openVideoModal(videoUrl)
            
        })
    }
}

function openVideoModal(videoUrl) {
    console.log(videoUrl)
  const instance = basicLightbox.create(
    `<div class="modal-video">
      <iframe width="560" height="315" src="${videoUrl}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
     </div>`,
    {
      onShow: instance => {
        instance
          .element()
          .querySelector('iframe')
          .setAttribute('allow', 'autoplay; encrypted-media');
      },
    }
  );
  instance.show();
}

// export function openNoTrailerModal(){
//   const watchButton = document.querySelector('.hero-button-js');
//   watchButton.addEventListener('click', function () {
//     const markup = `
//     <div class="without-trailer">
//       <div class="without-trailer-text-wrapper">
//         <p class="without-trailer-text">OOPS...</p>
//         <p class="without-trailer-text">We are very sorry!</p>
//         <p class="without-trailer-text">But we couldn’t find the trailer.</p>
//       </div>
//       <div class="notrailer-img"></div>
//     </div>
// `;
// const lightbox = basicLightbox.create(markup);
// lightbox.show();
//   })
  
// }

// openNoTrailerModal()