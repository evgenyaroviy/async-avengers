import axios from 'axios';
import { optionsWeek, optionsUpcoming, optionsSearch, optionsDetails, optionsVideos, optionsGenre } from '../../request';
import { galleryMarkup } from "../../galleryMarkup";

// Приклад використання:
console.log('Hello')

axios
    .request(optionsWeek)
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        console.error(error);
    });