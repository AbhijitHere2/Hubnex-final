import React from "react";
import "../Cards.css";
import step1 from "../../images/stap1.svg";
import { FaCircleArrowDown } from "react-icons/fa6";

const Card = () => {
  return (
    <div
      id="card1"
      
      ddata-aos-delay="500"
      data-aos="fade-up"
      class="aos-all"
      className="card  my-5   flex justify-center items-center max-lg:h-auto max-xl:w-auto  max-lg:flex-col   transition-all duration-300  ease "
    >
      <div className="  transition-all duration-300  max-md:w-auto ease   ">
        <img className=" incard rounded-[19px]" src={step1} alt="" />
      </div>
      <div className="infoo max-sm:py-[7px]  max-md:mt-[25px] space-y-3 max-md:w-auto transition-all duration-300 ease w-[514px]   ">
        <p className="flex text-xl font-semibold text-[32px] ">
          <span>
            <FaCircleArrowDown className="mr-3 mt-1 text-[25px]" />
          </span>
          Submit Application
        </p>
        <p className=" text-2xl font-medium">
          Unleash your potential apply now for exclusive workshop!
        </p>
        <p className="  text-[16px] ">
          Tell us a bit about yourself and mention your reasons for
          participating in this program
        </p>
       <div className=" text-center  ">
       <button className="card-btn border-gradient-purple  ">Apply Now</button>

       </div>
      </div>
    </div>
  );
};

export default Card;
