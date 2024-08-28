import React, { useState } from "react";
import "./SignIn.css";

const SignIn = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    alert("Sign-in successful!");
  };

  const handleOAuthLogin = (provider) => {
    window.location.href = `http://your-backend-url.com/auth/${provider}`;
  };

  return (
    <div className="sign-in-container">
      <form onSubmit={handleSubmit} className="sign-in-form">
        <h2>Sign In</h2>
        <div className="input-container">
          <input type="text" name="email" placeholder="Email" className="email-input" required />
        </div>
        <div className="input-container password-container">
          <input type={passwordVisible ? "text" : "password"} name="password" placeholder="Password" className="password-input" required />
          <span className="eye-icon" onClick={togglePasswordVisibility}>
            <i className={passwordVisible ? "fas fa-eye" : "fas fa-eye-slash"}></i>
          </span>
        </div>
        <button type  ="submit">Sign In</button>
        <div className="sign-up-link">
          Don't have an account? <a href="/registration">Create Account</a>
        </div>
        <div className="social-login1">
          <img src="./Google.png" alt="Sign In with Google" className="social-logo" onClick={() => handleOAuthLogin('google')} />
          <img src="./reg-facebook.png" alt="Sign In with Facebook" className="social-logo" onClick={() => handleOAuthLogin('facebook')} />
          <img src="./apple.png" alt="Sign In with Apple" className="social-logo" onClick={() => handleOAuthLogin('apple')} />
        </div>
      </form>
    </div>
  );
};

export default SignIn;
