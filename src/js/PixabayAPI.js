import axios from 'axios';

const URL = "https://pixabay.com/api/";
const KEY = "39180190-1b66e176a079ee52d78ae6385";

export async function fetchPhoto(q, page, perPage) {
    const url = `${URL}?key=${KEY}&q=${q}&page=${page}&per_page=${perPage}&image_type=photo&orientation=horizontal&safesearch=true`;
    const response = await axios.get(url);
    return response.data;          
};