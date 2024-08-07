import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import './Row.css'; // Import your CSS file for styling
import { FaHeart, FaRegHeart } from 'react-icons/fa'; // Import heart icons

const Row = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState([]);
  const [like, setLike] = useState(false); // State for the like button
  const rowRef = useRef(null); // Create a ref for the row container

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(fetchURL);
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchMovies();
  }, [fetchURL]);

  const scrollLeft = () => {
    if (rowRef.current) {
      rowRef.current.scrollBy({ left: -window.innerWidth / 2, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (rowRef.current) {
      rowRef.current.scrollBy({ left: window.innerWidth / 2, behavior: 'smooth' });
    }
  };

  const saveShow = () => {
    setLike(!like); // Toggle the like state
  };

  return (
    <div className="row">
      <h2 className="row-title">{title}</h2>
      <div className="row-slider-container">
        <button className="nav-button nav-button-left" onClick={scrollLeft}>
          <img
            src="https://res.cloudinary.com/duicyr28v/image/upload/v1722981365/icons8-back-100_caagax.png"
            alt="Back"
          />
        </button>
        <div className="row-slider" ref={rowRef}>
          {movies.map((item, id) => (
            <div className="row-item" key={id}>
              <div className="image-container">
                <img
                  className="row-img"
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  alt={item.title}
                />
                <div className="overlay">
                  <p className="overlay-text">{item.title}</p>
                </div>
                <div className="like-button" onClick={saveShow}>
                  {like ? (
                    <FaHeart className='like-icon' />
                  ) : (
                    <FaRegHeart className='like-icon' />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="nav-button nav-button-right" onClick={scrollRight}>
          <img
            src="https://res.cloudinary.com/duicyr28v/image/upload/v1722981365/icons8-forward-100_qus0nq.png"
            alt="Forward"
          />
        </button>
      </div>
    </div>
  );
};

export default Row;
