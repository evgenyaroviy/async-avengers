import {galleryMarkup} from '../../galleryMarkup'

const genresSelect = document.querySelector('.genres-select')

if(genresSelect){
genresSelect.addEventListener('change',libraryRender) }
export function libraryRender(){
    try{
const localMoviesList = JSON.parse(localStorage.getItem('MOVIE-ID-LIST'))

    const moviesContainerEl = document.querySelector('.movies-libary')
    const oopsMessage = document.querySelector('.oops-message')
    let localMoviesListGanresSort = []
    moviesContainerEl.innerHTML = ``
    if(localMoviesList){
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
    })}
    console.log(localMoviesList)
    if(!localMoviesList ||localMoviesList.length===0){
        oopsMessage.style.display = 'block'
    }else{
        moviesContainerEl.insertAdjacentHTML('beforeend',galleryMarkup(localMoviesListGanresSort))
    }
}catch{
    //hi hi hi HARD CODE
}}
libraryRender()