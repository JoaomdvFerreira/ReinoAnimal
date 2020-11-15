import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://reino-animal-api.herokuapp.com/'
    // baseURL: 'http://localhost:8000'
})
export default instance;