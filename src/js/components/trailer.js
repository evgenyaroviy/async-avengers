import axios from 'axios';
import sprite from '../../images/sprite.svg';

const backdrop = document.querySelector('.backdrop');
const modalEl = document.querySelector('.modal');
const heroTrailer = document.querySelector('.film-of-day');
heroTrailer.addEventListener('click', onClickWatchTrailer);






const optionsDetails = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/movie/movieId/videos',
  params: {language: 'en-US'},
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOTZiN2ExNTYwNGYwMmExYWNkMTVhNWJlY2JmMjQ4MCIsInN1YiI6IjY0ODNhYTBhOTkyNTljMDBlMmY0NWE4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._Sdbi-2PalUFAI7K7hzIv-hc4p92EU6q_yg6_IJJHjA'
  }
};


async function onClickWatchTrailer(e) {
    try {
    const movieId = e.target
      .closest('.watch-trailer-js')
      .getAttribute('data-id');
       
    optionsDetails.url = `https://api.themoviedb.org/3/movie/${movieId}/videos`;
    
    axios
      .request(optionsDetails)
      .then(function (response) {
        const movieData = response.data;
        const key = movieData.results[0].key;
        const youtubeLink = `https://www.youtube.com/embed/${key}`;
        const iframeMarkup = `
    <div class='watch-modal__content watch-trailer'>
            <button class="modal-close-btn">
              <svg width="24" height="24" class="modal-close-icon">
                <use href="${sprite}#icon-close-outline"></use>       
              </svg>
    </button>
        <iframe class="iframe" id="myVideo" width="560" height="315" src="${youtubeLink}" frameborder="0" allowfullscreen></iframe>`;
        openModal(iframeMarkup);
        
        const modalCloseBtn = document.querySelector('.modal-close-btn');
       modalCloseBtn.addEventListener('click', closeModal);

      })
      .catch(function (error) {
        console.error(error);
        openModal(errorModalTemplate())
        const modalCloseBtn = document.querySelector('.modal-close-btn');
        modalCloseBtn.addEventListener('click', closeModal);
      });
  }   catch (error) {
      console.log(error);
  }
}



function closeModal() {
  modalEl.classList.remove('modal-show');
  backdrop.classList.remove('modal-show');
  document.body.style.overflow = 'auto';

}

// function stopWatchTrailer() {
//  player[0].contentWindow.close()
// }


function openModal(markup) {
  modalEl.innerHTML = markup;
  modalEl.classList.add('modal-show');
  backdrop.classList.add('modal-show');
  document.body.style.overflow = 'hidden';
}

backdrop.addEventListener('click', closeModal) 
window.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal();
   }
});

function errorModalTemplate() {
    return `<div class='watch-modal modal-error'>
                <button class="modal-close-btn">
                <svg width="24" height="24" class="modal-close-icon">
                <use href="${sprite}#icon-close-outline"></use>       
                </svg>
                </button>
            <div class='watch-modal__content'>
    <p class='watch-modal__error-message'>OOPS... </p>
    <p class='watch-modal__error-message'>We are very sorry! </p>
    <p class='watch-modal__error-message'>But we couldn’t find the trailer.</p>
            </div>
    <div class='watch-modal__error-image'>
     
      </div>`;
  
}



