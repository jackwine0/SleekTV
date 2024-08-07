import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import "./Watchlist.css";

const Watchlist = () => {
  const [watchlist, setWatchlist] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // 4x3 grid
  const navigate = useNavigate();

  useEffect(() => {
    const savedMovies = JSON.parse(localStorage.getItem("likedMovies")) || [];
    setWatchlist(savedMovies);
  }, []);

  const removeMovie = (id) => {
    const updatedList = watchlist.filter((movie) => movie.id !== id);
    setWatchlist(updatedList);
    localStorage.setItem("likedMovies", JSON.stringify(updatedList));
  };

  const handleMovieClick = (movieId) => {
    navigate(`/movie/${movieId}`);
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentMovies = watchlist.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(watchlist.length / itemsPerPage);

  return (
    <div className="watchlist">
      {watchlist.length > 0 && <h1>My Watchlist</h1>}
      <div className="watchlist-container">
        {currentMovies.length === 0 ? (
          <div className="empty">
            <div className="error-page-container">
              <h1 className="error-title">
                <a href="/" className="error-link">
                  Add Movies!
                </a>
              </h1>
              <p className="error-message">Your watchlist is empty.</p>
              <p className="error-subtext">Let's add some movies to get started!</p>
              <div className="error-background"></div>
            </div>
          </div>
        ) : (
          currentMovies.map((movie) => (
            <div className="watchlist-item" key={movie.id}>
              <div className="watchlist-card" onClick={() => handleMovieClick(movie.id)}>
                <img
                  className="watchlist-img"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
                <div
                  className="delete-icon"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeMovie(movie.id);
                  }}
                >
                  <AiOutlineClose />
                </div>
                <p className="watchlist-title">{movie.title}</p>
              </div>
            </div>
          ))
        )}
      </div>
      {totalPages > 1 && (
        <div className="pagination">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => paginate(i + 1)}
              className={currentPage === i + 1 ? "active" : ""}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Watchlist;
