import { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

import img5 from "../images/ellipse.png";
import logo from "../images/group.png";
import check from "../images/check.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const [data, setData] = useState("");
  return (
    <div>
      <footer className="footer bg-black text-white  pt-3 px-5 ">
        <div className=" items-center mb-5 md:flex    pt-5 px-5 justify-between   ">
          <div className="text-center ">
            <h2 className="flex items-center justify-center gap-2 relative text-left text-xl  md:text-2xl font-bold">
              <img
                src={logo}
                alt="logo"
                className="md:w-16 md:h-16  w-10 h-10"
              />
              Hubnex Educate .
            </h2>
            <p className="md:text-lg  text-md font-normal">
              Where learning meets
            </p>
            <p className="md:text-lg  text-md font-normal">innovation!</p>
          </div>
          <div className="flex items-center footer-responsive flex-col  justify-end gap-2">
            <p className="md:text-lg  text-md font-normal">
              Signup for our
              <NavLink className="font-bold cursor-pointer ml-1  hover:underline">
                Newsletter
              </NavLink>
            </p>
            <div className="flex relative ">
              <input
                className="outline-none text-black  px-4 py-2 w-68 md:w-72 rounded-lg border-none"
                type="text"
                placeholder="Enter your email"
                onChange={(e) => {
                  const value = e.target.value;
                  setData(value);
                }}
                value={data}
              />

              <img
                className="w-6 h-6 absolute right-2 top-2"
                src={check}
                alt="icon"
              />
            </div>
          </div>
        </div>
        <hr className="border-t border-2 border-gray-400 " />
        <div className="footer-info flex flex-col   justify-around  md:flex-row gap-8 md:gap-24 mt-4">
          <div className="company-info text-left">
            <h3 className="text-xl font-bold">COMPANY</h3>
            <ul className="list-none mt-4">
              <li className="my-4">
                <a href="#about" className="text-white  hover:underline">
                  About Us
                </a>
              </li>
              <li className="my-4">
                <a href="#privacy" className="text-white  hover:underline">
                  Privacy policy
                </a>
              </li>
              <li className="my-4">
                <a href="#blog" className="text-white  hover:underline">
                  Blog
                </a>
              </li>
              <li className="my-4">
                <a href="#careers" className="text-white  hover:underline">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div className="support text-left">
            <h3 className="text-xl font-bold">Important links</h3>
            <ul className="list-none mt-4">
              <li className="my-4">
                <NavLink
                  to={"/certificate_footer"}
                  className="text-white hover:underline"
                >
                  Certificate validation
                </NavLink>
              </li>
              <li className="my-4  hover:underline">
                <a href="#careers" className="text-white ">
                  Membership plans
                </a>
              </li>
            </ul>
          </div>

          <div className="support text-left">
            <h3 className="text-xl font-bold">Support</h3>
            <ul className="list-none mt-4">
              <li className="my-4">
                <a href="#contact" className="text-white  hover:underline">
                  Contact Us
                </a>
              </li>
              <li className="my-4">
                <a href="#community" className="text-white  hover:underline">
                  Community
                </a>
              </li>
            </ul>
          </div>
          <div className="socials text-center">
            <h3 className="text-xl font-bold">Socials</h3>
            <ul className="flex justify-center mt-4 gap-3">
              <li>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className=" w-8 h-8   rounded-full   hover:scale-110 transition-transform flex items-center justify-center" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className=" w-8 h-8  hover:scale-110 transition-transform flex items-center justify-center" />
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/i/flow/login"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <RiTwitterXFill className="w-8 h-8    rounded-full   hover:scale-110 transition-transform flex items-center justify-center" />
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-[32px] max-w-fit">
            <img src={img5} alt="footer-img" className="" />
          </div>
        </div>
        <div></div>
      </footer>
      <p className="text-md  bg-white font-medium text-black text-center py-3">
        © 2024 Hubnex Educate. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
