import { API_URL, API_KEY ,} from "../config/url";
import apiHandler from "./apiHandler";

// fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=8d181bcb5e80a929053da01f6921e4a9&language=en-US&page=1')
// .then(resp => resp.json())
// .then(data => console.log(data))

// "https://image.tmdb.org/t/p/w500"

export default {
  getMovies: (category, page = 1) => {
    const url = `${API_URL}/movie/${category}?api_key=${API_KEY}&language=en-US&page=${page}`;
    return apiHandler.get(url);
  },
  getSearch: (query) => {
    const url = `${API_URL}/search/movie?query=${query}&api_key=${API_KEY}`;
    return apiHandler.get(url);
  },
  getMovieById: (movieId) => {
    const url = `${API_URL}/movie/${movieId}?api_key=${API_KEY}&append_to_response=videos`;
    return apiHandler.get(url);
  },
  getMostVoted: (page = 1) => {
    const url = `${API_URL}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=vote_average.asc&include_adult=true&include_video=false&page=${page}`;
    return apiHandler.get(url);
  },
  getGenres: (page = 1) => {
    const url = `${API_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US&page=${page}`;
    return apiHandler.get(url);
  }
};


