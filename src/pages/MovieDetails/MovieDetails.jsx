import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import requests from '../../Requests';
import './MovieDetails.css';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [showMoreCast, setShowMoreCast] = useState(false);
  const [showMoreSimilar, setShowMoreSimilar] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        // Fetch movie details
        const movieResponse = await axios.get(`${requests.fetchMovieDetails}/${id}?api_key=${requests.key}`);
        setMovie(movieResponse.data);

        // Fetch movie cast
        const castResponse = await axios.get(`${requests.fetchMovieCast.replace('{id}', id)}?api_key=${requests.key}`);
        setCast(castResponse.data.cast);

        // Fetch similar movies
        const similarMoviesResponse = await axios.get(`${requests.fetchSimilarMovies.replace('{id}', id)}?api_key=${requests.key}`);
        setSimilarMovies(similarMoviesResponse.data.results);
      } catch (error) {
        setError('Error fetching data');
        console.error('Error fetching data: ', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleShowMoreCast = () => {
    setShowMoreCast((prev) => !prev);
  };

  const handleShowMoreSimilar = () => {
    setShowMoreSimilar((prev) => !prev);
  };

  const handleMovieClick = (movieId) => {
    navigate(`/movie/${movieId}`);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="movie-details">
      {movie && (
        <>
          <div className="movie-header">
            <img
              className="movie-poster"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title} 
            />
            <div className="movie-info">
              <h1>{movie.title}</h1>
              <h2 className="release-date">Release Date: {movie.release_date}</h2>
              <p className="tagline">{movie.tagline}</p>
              <p>{movie.overview}</p>
              <div className="rating">
                <span>{movie.vote_average}</span>
              </div>
            </div>
          </div>
          <div className="cast-section">
            <h3>Cast</h3>
            <div className="cast-list">
              {(showMoreCast ? cast : cast.slice(0, 8)).map((member) => (
                <div className="cast-member" key={member.cast_id}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${member.profile_path}`}
                    alt={member.name}
                  />
                  <p>{member.name}</p>
                  <p>{member.character}</p>
                </div>
              ))}
            </div>
            {cast.length > 8 && (
              <button onClick={handleShowMoreCast} className="show-more">
                {showMoreCast ? 'Show Less' : 'Show More'}
              </button>
            )}
          </div>
          <div className="similar-movies-section">
            <h3>Similar Movies</h3>
            <div className="similar-movies">
              {(showMoreSimilar ? similarMovies : similarMovies.slice(0, 8)).map((movie) => (
                <div
                  className="similar-movie"
                  key={movie.id}
                  onClick={() => handleMovieClick(movie.id)}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  />
                  <p>{movie.title}</p>
                </div>
              ))}
            </div>
            {similarMovies.length > 8 && (
              <button onClick={handleShowMoreSimilar} className="show-more">
                {showMoreSimilar ? 'Show Less' : 'Show More'}
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
