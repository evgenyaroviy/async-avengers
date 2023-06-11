// mobileMenu
const mobileMenuBtnEl = document.querySelector('.mob-menu-btn');
const mobileBackdropEl = document.querySelector('.mobile-backdrop');

mobileMenuBtnEl.addEventListener('click', toogleMobMenu);
mobileBackdropEl.addEventListener('click', closeMobMenu);

function closeMobMenu(e) {
  if (e.target === mobileBackdropEl) {
    toogleMobMenu();
  }
}
function toogleMobMenu() {
  mobileBackdropEl.classList.toggle('is-open');
  document.body.classList.toggle('no-scroll');
}

// Закрываем мобильное меню на более широких экранах
// в случае изменения ориентации устройства.
window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
  if (!e.matches) return;
  document.body.classList.remove('no-scroll');
  mobileBackdropEl.classList.remove('is-open');
});

//switchTheme
const bodyEl = document.body;
const themeBtnEl = document.querySelector('.theme');
const themeSwitchEl = document.querySelector('.theme__switch');

bodyEl.classList.add('dark');

themeBtnEl.addEventListener('click', () => {
  if (bodyEl.classList.contains('dark')) {
    bodyEl.classList.remove('dark');
    bodyEl.classList.add('light');
    themeSwitchEl.classList.add('switchLight');
    themeSwitchEl.classList.remove('switchDark');
    return;
  }
  bodyEl.classList.remove('light');
  bodyEl.classList.add('dark');
  themeSwitchEl.classList.add('switchDark');
  themeSwitchEl.classList.remove('switchLight');
});

//pageActive
if (window.location.pathname === '/') {
  window.location.pathname = 'index.html';
}
const siteNavLinks = document.querySelectorAll('.js-nav-link');

window.addEventListener('load', () => {
  const titleEl = window.location.pathname;

  return siteNavLinks.forEach(el => {
    if (el.getAttribute('href') === titleEl) {
      el.classList.add('active-page');
    }
  });
});
