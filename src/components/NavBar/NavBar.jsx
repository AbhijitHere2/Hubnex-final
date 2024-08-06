import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import "./NavBar.css";
import logo from '../images/Logo.png'

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <div className=" h-16 flex  z-50 bg-slate-50  fixed w-full justify-around items-center  ">
        <div className="mr-2 px-2 w-full max-lg:w-72  font-semibold text-xl">
          <NavLink to={"/"}>
            <img className="" src={logo} alt="hubnex-logo"></img>
          </NavLink>
        </div>
        
        <div className="flex w-full justify-around ml-14  max-sm:hidden ">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/About"}>About</NavLink>
          <NavLink to={"/Blog"}>Blog</NavLink>
          <NavLink to={"/Services"}>Services</NavLink>
          <NavLink to={"/Pricing"}>Pricing</NavLink>
       
        
        </div>
        
        <div className=" flex w-full justify-end mr-20 max-md:mr-2 gap-4">
          
          <NavLink
            className={
              "border-2 text-center max-sm:w-13 rounded-full border-black w-20 p-1"
            }
            to={"/Login"}
          >
            Login
          </NavLink>
          <NavLink
            className={
              " w-24 text-center bg-blue-600  max-sm:w-13 text-white rounded-full border-black p-1"
            }
            to={"/Register"}
          >
            Register
          </NavLink>
        </div>
        <div>
          <GiHamburgerMenu className=" sm:hidden mx-2 " onClick={toggleNav} />
        </div>
      </div>
      <div
        className={`flex w-full space-y-2 relative top-16   flex-col items-center justify-between sm:hidden bg-blue-50 transition-all duration-500 ${
          isNavOpen ? `block` : `hidden`
        } `}
      >
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/Services"}>Services</NavLink>
        <NavLink to={"/Blog"}>Blog</NavLink>
        <NavLink to={"/About"}>About Us</NavLink>
      </div>
    </>
  );
};

export default NavBar;




// const Navbar = () => {
//   return (
//     <nav className="bg-white shadow-md py-4">
//       <div className="container mx-auto flex justify-between items-center px-4">
//         <div className="text-blue-600 font-bold text-xl">
//           Hubnex Educate.
//         </div>
//         <div className="hidden md:flex space-x-6">
//           <NavLink to="/" className="text-gray-800 hover:text-blue-600">
//             Home
//           </NavLink>
//           <NavLink to="/about" className="text-gray-800 hover:text-blue-600">
//             About
//           </NavLink>
//           <NavLink to="/blog" className="text-gray-800 hover:text-blue-600">
//             Blog
//           </NavLink>
//           <NavLink to="/services" className="text-gray-800 hover:text-blue-600">
//             Services
//           </NavLink>
//           <NavLink to="/pricing" className="text-gray-800 hover:text-blue-600">
//             Pricing
//           </NavLink>
//         </div>
//         <div className="hidden md:flex space-x-4">
//           <button className="px-4 py-2 border border-blue-600 rounded text-blue-600 hover:bg-blue-50">
//             Login
//           </button>
//           <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
//             Register
//           </button>
//         </div>
//         <div className="md:hidden flex items-center">
//           {/* Mobile menu button */}
//           <button className="text-gray-800 focus:outline-none">
//             {/* Icon here */}
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
