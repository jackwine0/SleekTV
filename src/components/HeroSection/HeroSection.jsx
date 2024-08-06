import React from "react";
import "./HeroSection.css";

const HeroSection = () => (
  <section className="hero">
    <img
      src="featured-movie.jpg"
      alt="Featured Movie"
      className="hero__image"
    />
    <div className="hero__overlay">
      <h1 className="hero__title">Featured Movie Title</h1>
      <p className="hero__description">
        Brief description of the movie or TV show.
      </p>
      <div className="hero__buttons">
        <button className="hero__button">Watch Now</button>
        <button className="hero__button">Trailer</button>
      </div>
    </div>
  </section>
);

export default HeroSection;
