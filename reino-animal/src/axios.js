import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://reino-animal-api.herokuapp.com/'
})
export default instance;