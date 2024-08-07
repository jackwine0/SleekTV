import React from 'react';
import './MovieDetails.css'; // Import CSS file for styling

const MovieDetails = ({ movie }) => {
  if (!movie) {
    return <div>Loading...</div>; // Display loading message if no movie is provided
  }

  return (
    <div className="movie-details">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="poster-img"
        />
      </div>
      <div className="movie-info">
        <h2 className="movie-title">{movie.title}</h2>
        <p className="movie-overview">{movie.overview}</p>
        <p className="movie-rating">Rating: {movie.vote_average}/10</p>
        <p className="movie-release-date">
          Release Date: {new Date(movie.release_date).toDateString()}
        </p>
      </div>
    </div>
  );
};

export default MovieDetails;
