import axios from 'axios';
const apiKey = '1f0a3e91e916058be7e3e2e294d1069c'
const movieBaseUrl = `https://api.themoviedb.org/3/`;
const movieByGenreBaseURL = 'https://api.themoviedb.org/3/discover/movie?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf';

// https://api.themoviedb.org/3/trending/all/day?api_key=1f0a3e91e916058be7e3e2e294d1069c

const getTrendingVideos = axios.get(`${movieBaseUrl}trending/all/day?api_key=${apiKey}`);


const getMovieByGenreId = (id) => (
    axios.get(`${movieByGenreBaseURL}&with_genres=${id}`)

)
export default { getTrendingVideos, getMovieByGenreId };

