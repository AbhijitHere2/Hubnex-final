import React from "react";
import "../Cards.css";
import step2 from "../../images/step2.svg";
import { FaCircleCheck } from "react-icons/fa6";
const CardTwo = () => {
  return (
    <div
      id="cardTwo"
      ddata-aos-delay="500"
      data-aos="fade-up"
      class="aos-all"
      className="card  flex justify-center items-center max-lg:h-auto max-md:w-auto  max-lg:flex-col-reverse   transition-all duration-500  ease   "
    >
      
      <div className="infoo max-sm:py-[7px]  max-md:mt-[25px] space-y-3 max-md:w-auto transition-all duration-300 ease w-[514px] ">
        <p className="flex text-xl font-semibold text-[32px] ">
          <span>
            <FaCircleCheck className=" mr-3 mt-1 text-[25px]" />
          </span>
          Select your domain
        </p>
        <p className=" text-2xl font-medium">
          Ready to take your skills to next level? join our intensive workshop{" "}
        </p>
        <p className="  text-[16px] ">
          Choose the domain of your interest and get started with the program
        </p>
        <div className=" text-center  ">
          <button className="card-btn border-gradient-purple  ">
            Apply Now
          </button>
        </div>
      </div>
      <div className="  transition-all duration-300  max-md:w-auto ease   ">
        <img className=" incard rounded-[19px]" src={step2} alt="" />
      </div>
    </div>
  );
};

export default CardTwo;
