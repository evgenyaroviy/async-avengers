import {galleryMarkup} from '../../galleryMarkup'
export function libraryRender(){
    try{
    const localMoviesList = JSON.parse(localStorage.getItem('MOVIE-ID-LIST'))
    const moviesContainerEl = document.querySelector('.movies-libary')
    const oopsMessage = document.querySelector('.oops-message')
    moviesContainerEl.innerHTML = ``
    if(localMoviesList.length===0){
        oopsMessage.style.display = 'block'
    }else{
        moviesContainerEl.insertAdjacentHTML('beforeend',galleryMarkup(localMoviesList))
    }
}catch{
    //hi hi hi HARD CODE
}}
libraryRender()