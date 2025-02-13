import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  const toggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`navbarO ${scrolled ? "navbar-scrolled" : ""}`}>
      <nav className="navO">
        <div className="nav-left">
          <Link to={"/home"}>
            <img
              className="nav-logo"
              src="https://res.cloudinary.com/duicyr28v/image/upload/v1722794255/sleek_logo_ei9agh.svg"
              alt="SleekTV Logo"
            />
          </Link>
          <span className="nav-logo-text">SleekTV</span>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        </div>
        <div className={`navlinks ${menuOpen ? "show" : ""}`}>
          <ul className="nav__links">
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/browse">Browse</a>
            </li>
            <li>
              <a href="/watchlist">Watchlist</a>
            </li>
            <li>
              <a href="/downloads">Downloads</a>
            </li>
          </ul>
        </div>
        <div className="navbar__icons">
          <div className="search" onClick={toggleSearch}></div>
          <div className="profile-avatar" onClick={toggleProfileMenu}>
            <img
              src="https://res.cloudinary.com/duicyr28v/image/upload/v1722910237/sleek2_hkvou9.svg"
              alt="profile"
            />
            {showProfileMenu && (
              <div className="profile-dropdown">
                <ul>
                  <li>
                    <a href="/profile">Profile</a>
                  </li>
                  <li>
                    <a href="/settings">Settings</a>
                  </li>
                  <li>
                    <a href="/logout">Logout</a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
      {showSearch && (
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button type="submit" className="search-button">
            <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
              <path
                fill="#666666"
                d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
