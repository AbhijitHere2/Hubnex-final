import React from "react";
import Girlimg from "../images/girlimg.png";
import Boyimg from "../images/boyimg.png";
import "../Hero2/Hero2.css";

import HUbnex from "../Hubnex/Hubnex";
import Chatbot from "../../Chatbot/Chatbot";

const Hero2 = () => {
  return (
    <div>
      <div>
        <div className=" absolute w-full flex justify-between ">
          <div className=" felx ">
            <img
              className="i1 ml-4 max-md:hidden absolute left-60"
              src="1.svg"
            />
            <img className="i2 ml-5 max-md:hidden absolute top-6" src="2.svg" />

            <img
              className="i4 max-md:hidden absolute bottom-8 left-36"
              src="4.svg"
            />
          </div>

          <div className="">
            <img
              className="i3 max-md:hidden relative right-80 top-8 "
              src="3.svg"
            />
            <img className="i5 max-md:hidden relative right-20" src="5.svg" />
          </div>
        </div>

        <h1 className="max-sm:text-lg max-md:text-2xl font-bold pt-20 max-md:pt-10 p-5 text-5xl flex text-center justify-center">
          Transform your skills with Expert<br></br> Guidance and Professional
          Mentorship
        </h1>

        {/* //images */}
      </div>

      <div className=" flex justify-between ">
        <div className="max-md:w-auto max-sm:w-[1px] pt-5 flex justify-center">
          <img src={Girlimg}></img>
          <div className="gg2"></div>
          <div className="gg"></div>
        </div>

        <div>
          <p className=" max-sm:text-sm max-md:text-xl text-3xl max-md:w-80 max-sm:w-64 pb-5  flex justify-center  font-thin  text-center">
            Personalized learning journey with the help of expert mentors
          </p>
          <div className=" max-sm:h-8 max-md:h-10 flex  justify-center ">
            <img src="group1.png" alt="200+ mentors"></img>
          </div>
          <div className="flex justify-center p-2">
            <button className="bg-blue-700 text-white p-2 rounded-md">
              Book Mentorship
            </button>
          </div>
        </div>
        <div className="max-md:w-auto max-sm:w-[1px] pt-5 ">
          <img
            className="h-[350px] w-[600px] max-sm:hidden max-md:h-52 "
            src={Boyimg}
          ></img>
        </div>
      </div>
      <Chatbot />
      <div className=" max-lg:hidden">
        <HUbnex />
      </div>
    </div>
  );
};

export default Hero2;
