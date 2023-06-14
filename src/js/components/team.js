import { scrollBtn } from "./scrollUp";
const btnCloseTeam = document.querySelector('.team-close-btn');
const teamModal = document.querySelector('.team-modal');
const footerBtn = document.querySelector('.footer__btn');
const backdrop = document.querySelector('.backdrop-team');

footerBtn.addEventListener('click', showTeamModal);
btnCloseTeam.addEventListener('click', hideTeamModal);
backdrop.addEventListener('click', hideTeamModal);

function showTeamModal(e) {
    e.preventDefault();
    teamModal.classList.add('is-visible');
    backdrop.classList.add('is-visible');
    document.body.style.overflow = 'hidden';
    teamModal.style.overflow = 'auto';
    scrollBtn.style.display = "none"
}
 
function hideTeamModal(e) {
    e.preventDefault();
    teamModal.classList.remove('is-visible');
     backdrop.classList.remove('is-visible');
    document.body.style.overflow = 'auto';
     scrollBtn.style.display = 'block';
}


window.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    hideTeamModal(e);
  }
});