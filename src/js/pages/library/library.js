import {galleryMarkup} from '../../galleryMarkup'

const localMoviesList = JSON.parse(localStorage.getItem('MOVIE-ID-LIST'))
const genresSelect = document.querySelector('.genres-select')

genresSelect 
if(genresSelect){
genresSelect.addEventListener('change',libraryRender) }
export function libraryRender(){
    try{
    const moviesContainerEl = document.querySelector('.movies-libary')
    const oopsMessage = document.querySelector('.oops-message')
    let localMoviesListGanresSort = []
    moviesContainerEl.innerHTML = ``
    localMoviesList.forEach(e => {
        e.genre_name = e.genres[0].name
    })

    localMoviesList.sort(e => {
        e.genre_name === genresSelect.value
    })

    localMoviesList.forEach(e => {
        if(e.genre_name === genresSelect.value){
            localMoviesListGanresSort.unshift(e)
        }else{
            localMoviesListGanresSort.push(e)
        }
    })
    if(localMoviesList.length===0){
        oopsMessage.style.display = 'block'
    }else{
        moviesContainerEl.insertAdjacentHTML('beforeend',galleryMarkup(localMoviesListGanresSort))
    }
}catch{
    //hi hi hi HARD CODE
}}
libraryRender()