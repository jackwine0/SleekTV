import React from "react";
import "./forgotpassword.css"; // Ensure this file exists and is properly linked

const ForgotPassword = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, add logic to handle password reset email submission
    // For example, call an API or display a message
    console.log("Password reset email sent!");
    // Redirect to ConfirmPassword page after submitting
    window.location.href = "/confirm-password";
  };

  return (
    <div className="forgotpassword-page">
      <div className="navbar">
        <nav>
          <div className="left">
            <img
              className="forgotpassword-logo"
              src="https://res.cloudinary.com/duicyr28v/image/upload/v1722794255/sleek_logo_ei9agh.svg"
              alt="SleekTV Logo"
            />
            <span className="logo-text">SleekTV</span>
          </div>
          
        </nav>
      </div>
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Forgot Password</h2>
          <p className="card-description">
            Enter your email below to receive a password reset link
          </p>
        </div>
        <div className="card-content">
          <form className="form-grid" onSubmit={handleSubmit}>
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
            <button type="submit" className="button primary">
              Send Reset Link
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
