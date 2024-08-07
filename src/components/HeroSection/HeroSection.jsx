import React, { useEffect, useState } from 'react';
import requests from '../../Requests';
import axios from 'axios';
import './HeroSection.css'; // Assuming you are creating a separate CSS file

const HeroSection = () => {
  const [movies, setMovies] = useState([]);

  // This selects a random movie from the movies array
  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.fetchPopularMovies).then((response) => {
      setMovies(response.data.results);
    });
  }, []); // The empty array ensures this effect runs only once, similar to componentDidMount

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + '...';
    }
    return str;
  };

  return (
    <div className="hero-section">
      <div className="hero-background">
        {movie && (
          <img
            className="hero-img"
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt={movie.title}
          />
        )}
        <div className="hero-text">
          <h1 className="movie-title">{movie?.title}</h1>
          <p className="movie-description">{truncateString(movie?.overview, 250)}</p>
        </div>
        <div className="hero-buttons">
          <button className="hero-button hero-button-left">Watch Now</button>
          <button className="hero-button hero-button-right">Trailer</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
