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
