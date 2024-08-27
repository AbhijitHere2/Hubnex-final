import React from "react";
import "./Ui.css";
import Benifit from "./Benifit";
import EmployerPartners from "./employer";
import FAQ from "./FAQ";

function Ui() {
  return (
    <div>
      <div className="flex justify-center    flex-col items-center">
        <div className="con220  md:max-w-6xl md:w-[80%] w-[92%] h-54  mx-auto    md:mt-10 ">
          <div className=" con22 flex space-y-4  md:space-y-8 p-8 rounded-xl flex-col h-full justify-end   ">
            <h1 className="text-white md:text-5xl text-2xl  font-bold   ">
              Become a Full Stack Developer in 8 Weeks
            </h1>
            <h2 className="text-white md:text-lg text-md font-normal ">
              Our live, online Full Stack Developer workshop helps you build the
              skills to excel in the industry, get hired, and earn more.
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
                This is an 8-week program. Each week we'll cover a different
                aspect of Full Stack <br />
                Development. You'll learn by doing - we'll give you real-world
                projects to help you practice <br /> what you learn. Here's the
                breakdown:
              </p>
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-0">
              <div className="flex flex-1 gap-3 rounded-lg border border-[#cedde8] bg-slate-50 p-4 flex-col cursor-pointer hover:shadow-lg hover:shadow-gray-600">
                <div
                  className="text-[#0d151c]"
                  data-icon="Question"
                  data-size="24px"
                  data-weight="regular"
                >
                  <div
                    className="text-[#0d151c]"
                    data-icon="Storefront"
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
                    <path d="M232,96a7.89,7.89,0,0,0-.3-2.2L217.35,43.6A16.07,16.07,0,0,0,202,32H54A16.07,16.07,0,0,0,38.65,43.6L24.31,93.8A7.89,7.89,0,0,0,24,96v16a40,40,0,0,0,16,32v64a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V144a40,40,0,0,0,16-32ZM54,48H202l11.42,40H42.61Zm50,56h48v8a24,24,0,0,1-48,0Zm-16,0v8a24,24,0,0,1-48,0v-8ZM200,208H56V151.2a40.57,40.57,0,0,0,8,.8,40,40,0,0,0,32-16,40,40,0,0,0,64,0,40,40,0,0,0,32,16,40.57,40.57,0,0,0,8-.8Zm-8-72a24,24,0,0,1-24-24v-8h48v8A24,24,0,0,1,192,136Z"></path>
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-[#0d151c] text-base font-bold leading-tight">
                    Week 1: Introduction to Web Development
                  </h2>
                  <p className="text-[#49779c] text-sm font-normal leading-normal">
                    Understand the basics of Web Development and its
                    applications in the industry.
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
                    <path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"></path>
                  </svg>
                </div>
                <div className="flex flex-col gap-1 ">
                  <h2 className="text-[#0d151c] text-base font-bold leading-tight">
                    Week 2: Frontend Development
                  </h2>
                  <p className="text-[#49779c] text-sm font-normal leading-normal">
                    Learn how to build interactive and responsive user
                    interfaces.
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
                    <path d="M216,80H184V48a16,16,0,0,0-16-16H40A16,16,0,0,0,24,48V176a8,8,0,0,0,13,6.22L72,154V184a16,16,0,0,0,16,16h93.59L219,230.22a8,8,0,0,0,5,1.78,8,8,0,0,0,8-8V96A16,16,0,0,0,216,80ZM66.55,137.78,40,159.25V48H168v88H71.58A8,8,0,0,0,66.55,137.78ZM216,207.25l-26.55-21.47a8,8,0,0,0-5-1.78H88V152h80a16,16,0,0,0,16-16V96h32Z"></path>
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-[#0d151c] text-base font-bold leading-tight">
                    Week 3: Backend Development
                  </h2>
                  <p className="text-[#49779c] text-sm font-normal leading-normal">
                    Dive into the world of Backend Development and learn about
                    server-side logic.
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
                    <path d="M207.06,80.67A111.24,111.24,0,0,0,128,48h-.4C66.07,48.21,16,99,16,161.13V184a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V160A111.25,111.25,0,0,0,207.06,80.67ZM224,184H119.71l54.76-75.3a8,8,0,0,0-12.94-9.42L99.92,184H32V161.13c0-3.08.15-6.12.43-9.13H56a8,8,0,0,0,0-16H35.27c10.32-38.86,44-68.24,84.73-71.66V88a8,8,0,0,0,16,0V64.33A96.14,96.14,0,0,1,221,136H200a8,8,0,0,0,0,16h23.67c.21,2.65.33,5.31.33,8Z"></path>
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-[#0d151c] text-base font-bold leading-tight">
                    Week 4: Databases and APIs
                  </h2>
                  <p className="text-[#49779c] text-sm font-normal leading-normal">
                    Master the art of Database Design and RESTful APIs.
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
                    <path d="M207.06,80.67A111.24,111.24,0,0,0,128,48h-.4C66.07,48.21,16,99,16,161.13V184a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V160A111.25,111.25,0,0,0,207.06,80.67ZM224,184H119.71l54.76-75.3a8,8,0,0,0-12.94-9.42L99.92,184H32V161.13c0-3.08.15-6.12.43-9.13H56a8,8,0,0,0,0-16H35.27c10.32-38.86,44-68.24,84.73-71.66V88a8,8,0,0,0,16,0V64.33A96.14,96.14,0,0,1,221,136H200a8,8,0,0,0,0,16h23.67c.21,2.65.33,5.31.33,8Z"></path>
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-[#0d151c] text-base font-bold leading-tight">
                    Week 5: Authentication and Security
                  </h2>
                  <p className="text-[#49779c] text-sm font-normal leading-normal">
                    Explore the realm of Authentication and Security in modern
                    web applications.
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
                    <path d="M207.06,80.67A111.24,111.24,0,0,0,128,48h-.4C66.07,48.21,16,99,16,161.13V184a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V160A111.25,111.25,0,0,0,207.06,80.67ZM224,184H119.71l54.76-75.3a8,8,0,0,0-12.94-9.42L99.92,184H32V161.13c0-3.08.15-6.12.43-9.13H56a8,8,0,0,0,0-16H35.27c10.32-38.86,44-68.24,84.73-71.66V88a8,8,0,0,0,16,0V64.33A96.14,96.14,0,0,1,221,136H200a8,8,0,0,0,0,16h23.67c.21,2.65.33,5.31.33,8Z"></path>
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-[#0d151c] text-base font-bold leading-tight">
                    Week 6: Testing and Debugging
                  </h2>
                  <p className="text-[#49779c] text-sm font-normal leading-normal">
                    Learn the best practices for Testing and Debugging your
                    code.{" "}
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
                    <path d="M207.06,80.67A111.24,111.24,0,0,0,128,48h-.4C66.07,48.21,16,99,16,161.13V184a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V160A111.25,111.25,0,0,0,207.06,80.67ZM224,184H119.71l54.76-75.3a8,8,0,0,0-12.94-9.42L99.92,184H32V161.13c0-3.08.15-6.12.43-9.13H56a8,8,0,0,0,0-16H35.27c10.32-38.86,44-68.24,84.73-71.66V88a8,8,0,0,0,16,0V64.33A96.14,96.14,0,0,1,221,136H200a8,8,0,0,0,0,16h23.67c.21,2.65.33,5.31.33,8Z"></path>
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-[#0d151c] text-base font-bold leading-tight">
                    Week 7: Deployment and DevOps
                  </h2>
                  <p className="text-[#49779c] text-sm font-normal leading-normal">
                    Understand the concepts of Deployment and DevOps in a
                    production environment.{" "}
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
                    <path d="M232,216H208V40a16,16,0,0,0-16-16H64A16,16,0,0,0,48,40V216H24a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16ZM64,40H192V216H64Zm104,92a12,12,0,1,1-12-12A12,12,0,0,1,168,132Z"></path>
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-[#0d151c] text-base font-bold leading-tight">
                    Week 8: Capstone Project
                  </h2>
                  <p className="text-[#49779c]  text-sm font-normal leading-normal">
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
    </div>
  );
}

export default Ui;
