const MOVIES_LIST_KEY = 'MOVIE-ID-LIST';

const moviesIdList = JSON.parse(localStorage.getItem('MOVIE-ID-LIST')) || [];

function removeFromLocalStorage(e,data) {
    e.preventDefault();
    const removeFromLibraryBtn = e.target.parentNode;
    removeFromLibraryBtn.style.display = 'none';
    const addToLibraryBtn = removeFromLibraryBtn.previousElementSibling;
    addToLibraryBtn.style.display = 'block';
    //localAdd
    const indexId = moviesIdList.findIndex(e => e.id === data.id);
    if (indexId !== -1) {
      moviesIdList.splice(indexId, 1);
      localStorage.setItem('MOVIE-ID-LIST', JSON.stringify(moviesIdList));
    }
    //localAdd
  }
  function addToLocalStorage(e,data) {
    e.preventDefault();
    const addToLibraryBtn = e.target.parentNode;
    addToLibraryBtn.style.display = 'none';
    const removeFromLibraryBtn = addToLibraryBtn.nextElementSibling;
    removeFromLibraryBtn.style.display = 'block';
    //localAdd
    if (!moviesIdList.find(e => e.id === data.id)) {
      moviesIdList.push(data);
      localStorage.setItem('MOVIE-ID-LIST', JSON.stringify(moviesIdList));
  
      //localAdd
    }
  }
  export {addToLocalStorage,removeFromLocalStorage,moviesIdList,MOVIES_LIST_KEY}