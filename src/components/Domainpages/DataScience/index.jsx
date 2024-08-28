import React from "react";
import "./Ui.css";
import Benifit from "./Benifit";
import EmployerPartners from "./employer";
import FAQ from "./FAQ";
import Footer from "../../Footer/Footer";

function index() {
  return (
    <div>
      <div className="flex justify-center    flex-col items-center">
        <div className="con220  md:max-w-6xl md:w-[80%] w-[92%] h-54  mx-auto    md:mt-10 ">
          <div className=" con22 flex space-y-4  md:space-y-8 p-8 rounded-xl flex-col h-full justify-end   ">
            <h1 className="text-white md:text-5xl text-2xl  font-bold   ">
              Get Mastery in Data Science in just 6 weeks
            </h1>
            <h2 className="text-white md:text-lg text-md font-normal ">
              Our live, online Data Science workshop helps you build the skills
              to excel in the industry, get hired, and earn more.
            </h2>

            <div className=" w-full ">
              <button className="  w-24 py-3   cursor-pointer   rounded-xl px-4  bg-[#2094f3] text-slate-50 text-base font-bold leading-normal hover:shadow-lg hover:shadow-gray-600">
                <span className="truncate">Start</span>
              </button>
            </div>
          </div>
        </div>


        <div className=" w-full md:w-[80%]  max-w-6xl mx-auto">
          <h1 className="text-[#0d151c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 text-left pb-3 pt-5">
            Weekly Learning Objectives
          </h1>
          <div className="flex flex-col gap-10 px-4 py-10 @container ">
            <div className="flex flex-col gap-4">
              <h1 className="text-[#0d151c] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
                What You'll Learn
              </h1>
              <p className="text-[#0d151c] text-base font-normal leading-normal max-w-[720px]">
                This is a 6-week program. Each week we'll cover a different
                aspect of Data Science. You'll learn by doing - we'll give you
                real-world projects to help you practice what you learn. Here's
                the breakdown:
              </p>
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-0">
              <div className="flex flex-1 gap-3 rounded-lg border border-[#cedde8] bg-slate-50 p-4 flex-col cursor-pointer hover:shadow-lg hover:shadow-gray-600">
                <div
                  class="text-[#0d151c]"
                    data-icon="FileCsv"
                    data-size="24px"
                    data-weight="regular"
                >
                  <div
                    class="text-[#0d151c]"
                    data-icon="BracketsCurly"
                    data-size="24px"
                    data-weight="regular"
                  ></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path
                        d="M48,180c0,11,7.18,20,16,20a14.24,14.24,0,0,0,10.22-4.66A8,8,0,0,1,85.78,206.4,30.06,30.06,0,0,1,64,216c-17.65,0-32-16.15-32-36s14.35-36,32-36a30.06,30.06,0,0,1,21.78,9.6,8,8,0,0,1-11.56,11.06A14.24,14.24,0,0,0,64,160C55.18,160,48,169,48,180Zm79.6-8.69c-4-1.16-8.14-2.35-10.45-3.84-1.25-.81-1.23-1-1.12-1.9a4.57,4.57,0,0,1,2-3.67c4.6-3.12,15.34-1.73,19.82-.56A8,8,0,0,0,142,145.86c-2.12-.55-21-5.22-32.84,2.76a20.58,20.58,0,0,0-9,14.95c-2,15.88,13.65,20.41,23,23.11,12.06,3.49,13.12,4.92,12.78,7.59-.31,2.41-1.26,3.34-2.14,3.93-4.6,3.06-15.17,1.56-19.55.36A8,8,0,0,0,109.94,214a61.34,61.34,0,0,0,15.19,2c5.82,0,12.3-1,17.49-4.46a20.82,20.82,0,0,0,9.19-15.23C154,179,137.49,174.17,127.6,171.31Zm83.09-26.84a8,8,0,0,0-10.23,4.84L188,184.21l-12.47-34.9a8,8,0,0,0-15.07,5.38l20,56a8,8,0,0,0,15.07,0l20-56A8,8,0,0,0,210.69,144.47ZM216,88v24a8,8,0,0,1-16,0V96H152a8,8,0,0,1-8-8V40H56v72a8,8,0,0,1-16,0V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88Zm-27.31-8L160,51.31V80Z"
                      ></path>                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-[#0d151c] text-base font-bold leading-tight">
                    Week 1: Introduction to Data Science
                  </h2>
                  <p className="text-[#49779c] text-sm font-normal leading-normal">
                    Understand the basics of Data Science and its applications
                    in the industry.
                  </p>
                </div>
              </div>
              <div className="flex flex-1 gap-3 rounded-lg border border-[#cedde8] bg-slate-50 p-4 flex-col cursor-pointer hover:shadow-lg hover:shadow-gray-600">
                <div
                  className="text-[#0d151c]"
                  data-icon="Users"
                  data-size="24px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
<path
                        d="M43.18,128a29.78,29.78,0,0,1,8,10.26c4.8,9.9,4.8,22,4.8,33.74,0,24.31,1,36,24,36a8,8,0,0,1,0,16c-17.48,0-29.32-6.14-35.2-18.26-4.8-9.9-4.8-22-4.8-33.74,0-24.31-1-36-24-36a8,8,0,0,1,0-16c23,0,24-11.69,24-36,0-11.72,0-23.84,4.8-33.74C50.68,38.14,62.52,32,80,32a8,8,0,0,1,0,16C57,48,56,59.69,56,84c0,11.72,0,23.84-4.8,33.74A29.78,29.78,0,0,1,43.18,128ZM240,120c-23,0-24-11.69-24-36,0-11.72,0-23.84-4.8-33.74C205.32,38.14,193.48,32,176,32a8,8,0,0,0,0,16c23,0,24,11.69,24,36,0,11.72,0,23.84,4.8,33.74a29.78,29.78,0,0,0,8,10.26,29.78,29.78,0,0,0-8,10.26c-4.8,9.9-4.8,22-4.8,33.74,0,24.31-1,36-24,36a8,8,0,0,0,0,16c17.48,0,29.32-6.14,35.2-18.26,4.8-9.9,4.8-22,4.8-33.74,0-24.31,1-36,24-36a8,8,0,0,0,0-16Z"
                      ></path>                  </svg>
                </div>
                <div className="flex flex-col gap-1 ">
                  <h2 className="text-[#0d151c] text-base font-bold leading-tight">
                    Week 2: Data Preprocessing
                  </h2>
                  <p className="text-[#49779c] text-sm font-normal leading-normal">
                    Dive into the world of EDA and learn how to extract insights
                    from data.
                  </p>
                </div>
              </div>
              <div className="flex flex-1 gap-3 rounded-lg border border-[#cedde8] bg-slate-50 p-4 flex-col cursor-pointer hover:shadow-lg hover:shadow-gray-600">
                <div
                  className="text-[#0d151c]"
                  data-icon="Chats"
                  data-size="24px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                      <path
                        d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V88H40V56Zm0,144H40V104H216v96Z"
                      ></path>                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-[#0d151c] text-base font-bold leading-tight">
                    Week 3: Exploratory Data Analysis
                  </h2>
                  <p className="text-[#49779c] text-sm font-normal leading-normal">
                    Dive into the world of EDA and learn how to extract insights
                    from data.
                  </p>
                </div>
              </div>
              <div className="flex flex-1 gap-3 rounded-lg border border-[#cedde8] bg-slate-50 p-4 flex-col cursor-pointer hover:shadow-lg hover:shadow-gray-600">
                <div
                  className="text-[#0d151c]"
                  data-icon="Gauge"
                  data-size="24px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
 <path
                        d="M200,48H136V16a8,8,0,0,0-16,0V48H56A32,32,0,0,0,24,80V192a32,32,0,0,0,32,32H200a32,32,0,0,0,32-32V80A32,32,0,0,0,200,48Zm16,144a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V80A16,16,0,0,1,56,64H200a16,16,0,0,1,16,16Zm-52-56H92a28,28,0,0,0,0,56h72a28,28,0,0,0,0-56Zm-28,16v24H120V152ZM80,164a12,12,0,0,1,12-12h12v24H92A12,12,0,0,1,80,164Zm84,12H152V152h12a12,12,0,0,1,0,24ZM72,108a12,12,0,1,1,12,12A12,12,0,0,1,72,108Zm88,0a12,12,0,1,1,12,12A12,12,0,0,1,160,108Z"
                      ></path>                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-[#0d151c] text-base font-bold leading-tight">
                    Week 4: Machine Learning
                  </h2>
                  <p className="text-[#49779c] text-sm font-normal leading-normal">
                    Master the art of Machine Learning and its various
                    algorithms.
                  </p>
                </div>
              </div>

              <div className="flex flex-1 gap-3 rounded-lg border border-[#cedde8] bg-slate-50 p-4 flex-col cursor-pointer hover:shadow-lg hover:shadow-gray-600">
                <div
                  className="text-[#0d151c]"
                  data-icon="Gauge"
                  data-size="24px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
<path
                        d="M248,124a56.11,56.11,0,0,0-32-50.61V72a48,48,0,0,0-88-26.49A48,48,0,0,0,40,72v1.39a56,56,0,0,0,0,101.2V176a48,48,0,0,0,88,26.49A48,48,0,0,0,216,176v-1.41A56.09,56.09,0,0,0,248,124ZM88,208a32,32,0,0,1-31.81-28.56A55.87,55.87,0,0,0,64,180h8a8,8,0,0,0,0-16H64A40,40,0,0,1,50.67,86.27,8,8,0,0,0,56,78.73V72a32,32,0,0,1,64,0v68.26A47.8,47.8,0,0,0,88,128a8,8,0,0,0,0,16,32,32,0,0,1,0,64Zm104-44h-8a8,8,0,0,0,0,16h8a55.87,55.87,0,0,0,7.81-.56A32,32,0,1,1,168,144a8,8,0,0,0,0-16,47.8,47.8,0,0,0-32,12.26V72a32,32,0,0,1,64,0v6.73a8,8,0,0,0,5.33,7.54A40,40,0,0,1,192,164Zm16-52a8,8,0,0,1-8,8h-4a36,36,0,0,1-36-36V80a8,8,0,0,1,16,0v4a20,20,0,0,0,20,20h4A8,8,0,0,1,208,112ZM60,120H56a8,8,0,0,1,0-16h4A20,20,0,0,0,80,84V80a8,8,0,0,1,16,0v4A36,36,0,0,1,60,120Z"
                      ></path>                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-[#0d151c] text-base font-bold leading-tight">
                    Week 5: Deep Learning
                  </h2>
                  <p className="text-[#49779c] text-sm font-normal leading-normal">
                    Explore the realm of Deep Learning and its applications in
                    modern AI.
                  </p>
                </div>
              </div>
              <div className="flex flex-1 gap-3 rounded-lg border border-[#cedde8] bg-slate-50 p-4 flex-col cursor-pointer hover:shadow-lg hover:shadow-gray-600">
                <div
                  className="text-[#0d151c]"
                  data-icon="Gauge"
                  data-size="24px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                      <path
                        d="M176,88a39.79,39.79,0,0,1,21.53,6.1A12,12,0,0,0,216,84V48a16,16,0,0,0-16-16H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V172a12,12,0,0,0-18.44-10.11c-7.25,4.65-13.41,6.41-21.24,6.11H176a40,40,0,0,1,0-80Zm-56,40a56.07,56.07,0,0,0,55.84,56A48.37,48.37,0,0,0,200,178.89V208H56V48H200V77.23A56.3,56.3,0,0,0,120,128Z"
                      ></path>                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-[#0d151c] text-base font-bold leading-tight">
                    Week 6: Capstone Project
                  </h2>
                  <p className="text-[#49779c] text-sm font-normal leading-normal">
                    Work on a real-world project under the guidance of our
                    instructors. Get hands-on experience in an industry-relevant
                    environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Benifit />

      <EmployerPartners />

      <FAQ />
      <Footer />
    </div>
  );
}

export default index;
