import React from "react";
import "./signup.css"; // Ensure this file exists and is properly linked

const Signup = () => {
  
  return (
    <div className="signup-page">
      <div className="navbar">
        <nav>
          <div className="left">
            <img
              className="signuplogo"
              src="https://res.cloudinary.com/duicyr28v/image/upload/v1722794255/sleek_logo_ei9agh.svg"
              alt="SleekTV Logo"
            />
            <span className="logo-text">SleekTV</span>
          </div>
          
        </nav>
      </div>
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Sign Up</h2>
          <p className="card-description">
            Create your account by filling in the information below
          </p>
        </div>
        <div className="card-content">
          <form className="form-grid">
          <div className="signup__input-row">
            <div className="form-group">
              <label htmlFor="first-name" className="form-label">
                First Name
              </label>
              <input
                id="first-name"
                type="text"
                placeholder="John"
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="last-name" className="form-label">
                Last Name
              </label>
              <input
                id="last-name"
                type="text"
                placeholder="Doe"
                required
                className="form-input"
              />
            </div>
            </div> 
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="john.doe@example.com"
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                className="form-input"
              />
            </div>
            <button type="submit" className="button primary">
              Sign Up
            </button>
          </form>
          <div className="text-center text-sm">
            Already have an account?{" "}
            <a href="/login" className="link">
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
