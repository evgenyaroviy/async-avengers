export function switchBtn(e){
    e.preventDefault();
    const addToLibraryBtn = e.target.parentNode;
    addToLibraryBtn.style.display = 'none';
    const removeFromLibraryBtn = addToLibraryBtn.nextElementSibling || addToLibraryBtn.previousElementSibling;
    removeFromLibraryBtn.style.display = 'block';
}