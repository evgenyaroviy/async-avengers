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
const LOCALE_THEME = 'locale-theme';
const refs = {
  bodyEl: document.body,
  themeSwitchEl: document.querySelector('.theme__switch'),
  mobMenuBackdropEl: document.querySelector('.mobile-backdrop'),
  mobMenuNavEl: document.querySelector('.mobile-nav'),
};
const themeBtnEl = document.querySelector('.theme');
const currentTheme = !localStorage.getItem(LOCALE_THEME)
  ? 'dark'
  : localStorage.getItem(LOCALE_THEME);

renderTheme(refs, currentTheme);

themeBtnEl.addEventListener('click', () => {
  changeTheme(refs, currentTheme);
});

function renderTheme(refs, currentTheme) {
  const refsKeys = Object.keys(refs);

  for (const ref of refsKeys) {
    refs[ref].classList.add(currentTheme);
  }
}
function changeTheme(refs, currentTheme) {
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  const refsKeys = Object.keys(refs);

  for (const ref of refsKeys) {
    refs[ref].classList.toggle(currentTheme);
    refs[ref].classList.toggle(newTheme);
  }

  localStorage.setItem(LOCALE_THEME, newTheme);
}

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
