import React from "react";
import "../Cards.css";
import step3 from "../../images/step3.svg";
import certificate from'../../images/certificate.svg'

const CardThree = () => {
  return (
    <div
      id="cardThree"
      ddata-aos-delay="500"
      data-aos="fade-up"
      class="aos-all"
      className="card   flex justify-center items-center max-lg:h-auto max-md:w-auto  max-lg:flex-col   transition-all duration-500    "
    >
        <div className="  transition-all duration-300  max-md:w-auto ease   ">
        <img className=" incard rounded-[19px]" src={step3} alt="" />
      </div>
      <div className="infoo max-md:mt-[25px] space-y-3 max-md:w-auto transition-all duration-300 ease w-[514px] max-sm:py-[10px]  ">
        <p className="flex text-xl font-semibold text-[32px] ">
          <span>
            <img className="mt-1 mr-4 text-[32px]" src={certificate} alt="" />
          </span>
          Certification
        </p>
        <p className=" text-2xl font-medium">
        Earn Your Credentials Certifications for a Brighter Future        </p>
        <p className="  text-[16px] ">
        Earn Your Credentials Certifications for a Brighter Future
        </p>
       <div className=" text-center  ">
       <button className="card-btn border-gradient-purple  ">Apply Now</button>

       </div>
      </div>
    </div>
  );
};

export default CardThree;
