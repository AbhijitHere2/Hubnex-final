import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer ">
        <div className="newsletter">
          <h2>
            {" "}
            <img src="Images/logo.png" alt="logo" /> Hubnex Educate
          </h2>
          <div className="flex-container1">
            <p className="title1">
              Signup for our{" "}
              <span style={{ fontWeight: "bold" }}>Newsletter</span>
            </p>
            <input
              className="input1"
              type="search"
              placeholder="Enter your email"
            />
            <img className="imag2" src="Images/righticon.png" alt="icon" />
          </div>
        </div>
        <hr />
        <div className="footer-info">
          <div className="company-info">
            <h3>COMPANY</h3>
            <ul>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#privacy">Privacy policy</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
              <li>
                <a href="#careers">Careers</a>
              </li>
            </ul>
          </div>
          <div className="support">
            <h3>Support</h3>
            <ul>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
              <li>
                <a href="#community">Community</a>
              </li>
            </ul>
          </div>
          <div className="socials">
            <h3>Socials</h3>
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="./footer-facebook.png" alt="facebook" target="blank" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="./linkdin.png" alt="linkdin" />
              </a>
            </li>
            <li>
              <a
                href="https://x.com/i/flow/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="./twitter.png" alt="twitter" />
              </a>
            </li>
          </div>
          <div className="fotter-img">
            <img src="./fotter-img.png" alt="fotter-img" />
          </div>
        </div>
      </footer>
      <div className="footer-bottom">
        <img className="imag5" src="Images/copyright.png" alt="copyright" />
        <p className="pt1">2024 Hubnex educate. All rights reserved.</p>
        
      </div>
    </>
  );
};

export default Footer;
