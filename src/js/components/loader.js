// Щоб дадати loader до своєї сторінки потрібно:
// 1. Додати  <span class="loader"></span> до свого HTML у потрібному місці (перед ДОМ)
// 2. зробити імпорт у свій файл JS: import { showLoader, hideLoader } from '../../components/loader';
// 3. Викликати  showLoader() в конструкції try перед асинхронним запитом 
// 4. Викликати hideLoader() в конструкції finally
// Підглянути можна в monthly.trends.js

const loader = document.querySelector('.loader');

export function toggleLoader(show) {
  loader.style.display = show ? 'block' : 'none';
}
// export { toggleLoader };
