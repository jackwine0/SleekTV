// API key
const key = '93e9df3782487f0b4ca7fe295ebd4d13';

// Base URL for the API
const baseURL = 'https://api.themoviedb.org/3';

// API request endpoints
const requests = {
  key, // Include API key
  fetchPopularMovies: `${baseURL}/movie/popular?api_key=${key}&language=en-US&page=1`,
  fetchTopRatedMovies: `${baseURL}/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  fetchTrendingMovies: `${baseURL}/trending/movie/week?api_key=${key}`,
  fetchTvSeries: `${baseURL}/tv/popular?api_key=${key}&language=en-US&page=1`,
  fetchUpcomingMovies: `${baseURL}/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  fetchPopularTV: `${baseURL}/tv/popular?api_key=${key}&language=en-US&page=1`,
  fetchTopRatedTV: `${baseURL}/tv/top_rated?api_key=${key}&language=en-US&page=1`,
  fetchTrendingTV: `${baseURL}/trending/tv/week?api_key=${key}`,
  fetchMovieDetails: `${baseURL}/movie`, // Base endpoint for movie details
  fetchMovieCast: `${baseURL}/movie/{id}/credits`, // Endpoint for movie cast
  fetchSimilarMovies: `${baseURL}/movie/{id}/similar`, // Endpoint for similar movies
};

export default requests;
