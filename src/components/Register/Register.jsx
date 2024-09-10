import React, { useState } from "react";
import "./Register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    termsAgreed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <>
      <div className="registration-main">
        <div className="left-container">
        <img src="./image1.jpg" alt="image1" className="slider-img" />
          <img src="./image2.jpg" alt="image2" className="slider-img" />
          <img src="./image3.jpg" alt="image3" className="slider-img" />
          <img src="./image4.jpg" alt="image4" className="slider-img" />
          <img src="./image5.jpg" alt="image5" className="slider-img" />
          <img src="./image6.jpg" alt="image6" className="slider-img" />
        </div>

        <div className="heading">
          <h1>Welcome Back!</h1>

          <form onSubmit={handleSubmit}>
            <div className="right-container">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="contact-inputs"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="contact-inputs1"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="class">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="password"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="number"
                name="phone"
                placeholder="Phone Number"
                className="password"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="password"
                value={formData.password}
                onChange={handleChange}
                required
                
              />
              
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  name="termsAgreed"
                  id="terms"
                  checked={formData.termsAgreed}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="terms">
                  By creating an account, you agree to our{" "}
                  <a
                    href="/terms-and-conditions"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Terms and Conditions
                  </a>{" "}
                  and{" "}
                  <a
                    href="/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Privacy Policy
                  </a>
                </label>
              </div>

              <button className="reg-button" type="submit">
                Create Account
              </button>
              <p className="sign-in-option">
                Already have an account? <a href="/sign-in">Sign In</a>
              </p>
              <div className="social-login">
          <img src="./reg-facebook.png" alt="facebook" className="social-logo" />
          <img src="./Google.png" alt="Facebook"  className="social-logo" />
          <img src="./apple.png" alt="Apple" className="social-logo" />
        </div>

            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
