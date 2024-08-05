import React, { useEffect, useState } from "react";
import "./Cards.css";
import way1 from "../images/Vector.svg";
import way2 from "../images/Vector1.svg";
import way3 from "../images/Vector2.svg";

import AOS from "aos";
import "aos/dist/aos.css";
import Card from "./Card/Card";
import CardTwo from "./CardTwo/CardTwo";
import CardThree from "./CardThree/CardThree";
import { Link } from "react-scroll";

import { FaCircleCheck } from "react-icons/fa6";

const Cards = () => {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 2000,
      easing: "ease-out-cubic",
      delay:250,
    });
  }, []);

  return (
    <>
   <div className="  overflow-hidden">
   <div className=" flex mt-16 flex-col w-full items-center gap-[50px]  justify-center ">
        <div className="head-box flex flex-col justify-center items-center ">
          <h1 className="text-[32px] font-semibold text-center w-[658] max-sm:w-[315px]">Achieve Your Goals in Just 3 Simple Steps</h1>
          <p className="text-[24px] font-extralight w-[658px] text-center max-sm:w-[315px]">Our tailored learning plan and receive continuous support to ensure your success every step of the way</p>
        </div>
        <div className="flex justify-evenly  w-full  text-[24px] max-sm:text-base  ">
          <Link to="card1" smooth={true} duration={1000}>
            <button className="btn max-sm:w-28 border-gradient-purple "> Submit Application</button>
          </Link>

          <Link to="cardTwo" smooth={true} duration={1500}>
            <button className="btn max-sm:w-24 border-gradient-purple">Select Domain</button>
          </Link>

          <Link to="cardThree" smooth={true} duration={2000}>
            <button className="btn max-sm:w-24 max-sm:py-6 border-gradient-purple">
              {" "}
              Certificate
            </button>
          </Link>
        </div>
      </div>
      <div className="  px-2  w-full cont flex flex-row max-md:justify-center justify-center  pt-16">
        <div className="  w-full flex justify-center items-center flex-col  ">
          <Card />
          <div>
            <img className="  max-sm:ml-28   max-lg:w-[50%] max-xl:w-[55%] max-xl:ml-52    " src={way1} alt="" />
          </div>
          <CardTwo />
          <div>
            <img className="  max-sm:ml-28  max-lg:w-[50%] max-xl:w-[55%] max-xl:ml-52   " src={way2} alt="" />
          </div>
          <CardThree />
          <div>
            <img className="  mr-96  max-lg:ml-52 max-sm:ml-28 max-lg:w-[30%] max-xl:w-[35%] max-xl:ml-36   " src={way3} alt="" />
          </div>
          <div className="end  transition-all duration-300 ease flex justify-center items-center w-auto ">
          
            <div className=" space-y-3  lg:w-[1036px] flex flex-col justify-center items-center ">
              <h1 className=" text-[24px] ">Join Us</h1>
               <h1 className="text-[40px] max-sm:text-2xl text-center font-bold  ">40+ Students attend this workshop and gained insights from industry leaders</h1>
                  <div className="flex gap-4 p-2 max-sm:text-sm">
                    <div className="flex "> <FaCircleCheck className="text-[#A2E80B] mt-1 mr-2 "/> Access to resource library</div>
                    <div className="flex  "> <FaCircleCheck className="text-[#A2E80B] mt-1 mr-2"/>Personalized workshop</div>
                    <div className="flex"> <FaCircleCheck className="text-[#A2E80B] mt-1 mr-2"/>Guidance from industry experts</div>
                  </div>
                  <div className="space-x-6">
                    <button className="px-6 font-semibold  bg-[#6633DD] py-3">Get Started</button>
                    <button className="px-6 font-semibold border-[1px] border-solid border-white py-[10px]">Contact</button>
                  </div>
            </div>
          </div>
        </div>
      </div>
   </div>
    </>
  );
};

export default Cards;
