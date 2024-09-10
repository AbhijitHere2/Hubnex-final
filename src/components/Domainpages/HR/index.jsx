import React from 'react';
import  Benefitdesigner from '../HR/Benefitdesigner'
import  EmployerPartners from '../HR/EmployerPartners'
import  FAQ from '../HR/FAQ'
import Footer from '../../Footer/Footer';

const Hero = () => {
  return (
  <>
    <div className="flex justify-center max-w-6xl mx-auto flex-col">
      <div className="w-full mt-16">
        <div
          className="relative left-4 p-4 w-97 h-[560px] rounded-xl "
          style={{ backgroundImage: "url('https://cdn.usegalileo.ai/sdxl10/f19572df-3304-4064-aa15-f19df58d4b06.png')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-black/10 rounded-xl"></div>
          <div className="relative flex flex-col gap-4 w-full h-full justify-end items-start pl-20 mb-16 max-sm:pl-3">
            <h1 className="text-white text-5xl font-bold">
            Master HR in just 4 Weeks
            </h1>
            <h2 className="text-white text-lg font-normal">
            Our live, online HR workshop helps you build the skills to excel in the industry, get hired, and earn more.
            </h2>
            <div className="w-full">
              <button className="w-24 py-3 rounded-xl px-4 bg-blue-500 text-white text-base font-bold leading-normal hover:shadow-lg hover:shadow-gray-600">
                <span className="truncate">Start</span>
              </button>
            </div>
          </div>
        </div>

        <div className="w-full">
          <h1 className="text-gray-900 text-2xl font-bold leading-tight tracking-tight px-4 text-left pb-3 pt-5">
            Weekly Learning Objectives
          </h1>

          <div className="flex flex-col gap-10 px-4 py-10">
            <div className="flex flex-col gap-4">
              <h1 className="text-gray-900 text-4xl font-black leading-tight tracking-tight max-w-[720px]">
                What You'll Learn
              </h1>
              <p className="text-gray-900 text-base font-normal leading-normal max-w-[720px]">
              This is a 4-week program. Each week we'll cover a different aspect of HR. You'll learn by doing <br/>- we'll give you real-world projects to help you practice what you learn. Here's the<br/> breakdown:
              </p>
            </div>

            {/* <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3">
              {[
                {
                  title: "Week 1: Understand UI/UX",
                  description: "Learn the fundamentals of UI/UX design, user research, and design thinking. Understand the role of a designer in a digital environment.",
                  icon: "path-to-icon-1", // replace with your SVG paths
                },
                {
                  title: "Week 2: Design Principles",
                  description: "Develop the skills to create intuitive, user-friendly designs based on principles like hierarchy, consistency, and feedback. Learn the importance of user experience in design.",
                  icon: "path-to-icon-2",
                },
                {
                  title: "Week 3: Tools and Techniques",
                  description: "Master the tools and techniques used in the industry, including Adobe XD, Figma, and Sketch. Understand the role of a designer in a collaborative environment.",
                  icon: "path-to-icon-3",
                },
                {
                  title: "Week 4: Portfolio Projects",
                  description: "Work on real-world projects to build your portfolio. Showcase your skills and prepare for job interviews.",
                  icon: "path-to-icon-4",
                },
              ].map((item, index) => (
                <div key={index} className="flex flex-1 gap-3 rounded-lg border border-gray-300 bg-slate-50 p-4 flex-col cursor-pointer hover:shadow-lg hover:shadow-gray-600">
                  <div className="text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path d={item.icon}></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-gray-900 text-base font-bold leading-tight">{item.title}</h2>
                    <p className="text-blue-500 text-sm font-normal leading-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div> */}
             <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-0 w-auto">
              <div className="flex flex-1 gap-3 rounded-lg border border-[#cedde8] bg-slate-50 p-4 flex-col cursor-pointer hover:shadow-lg hover:shadow-gray-600">
                <div
                  className="text-[#0d151c]"
                  data-icon="Question"
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
                    <path d="M140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180ZM128,72c-22.06,0-40,16.15-40,36v4a8,8,0,0,0,16,0v-4c0-11,10.77-20,24-20s24,9,24,20-10.77,20-24,20a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-.72c18.24-3.35,32-17.9,32-35.28C168,88.15,150.06,72,128,72Zm104,56A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path>
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-[#0d151c] text-base font-bold leading-tight">
                    Week 1: Introduction to HR
                  </h2>
                  <p className="text-[#49779c] text-sm font-normal leading-normal">
                    Understand the basics of HR and its applications in the
                    industry.
                  </p>
                </div>
              </div>
              <div className="flex flex-1 gap-3 rounded-lg border border-[#cedde8] bg-slate-50 p-4 flex-col cursor-pointer  hover:shadow-lg hover:shadow-gray-600">
                <div
                  className="text-[#0d151c]"
                  data-icon="Person"
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
                    <path d="M160,40a32,32,0,1,0-32,32A32,32,0,0,0,160,40ZM128,56a16,16,0,1,1,16-16A16,16,0,0,1,128,56Zm90.34,78.05L173.17,82.83a32,32,0,0,0-24-10.83H106.83a32,32,0,0,0-24,10.83L37.66,134.05a20,20,0,0,0,28.13,28.43l16.3-13.08L65.55,212.28A20,20,0,0,0,102,228.8l26-44.87,26,44.87a20,20,0,0,0,36.41-16.52L173.91,149.4l16.3,13.08a20,20,0,0,0,28.13-28.43Zm-11.51,16.77a4,4,0,0,1-5.66,0c-.21-.2-.42-.4-.65-.58L165,121.76A8,8,0,0,0,152.26,130L175.14,217a7.72,7.72,0,0,0,.48,1.35,4,4,0,1,1-7.25,3.38,6.25,6.25,0,0,0-.33-.63L134.92,164a8,8,0,0,0-13.84,0L88,221.05a6.25,6.25,0,0,0-.33.63,4,4,0,0,1-2.26,2.07,4,4,0,0,1-5-5.45,7.72,7.72,0,0,0,.48-1.35L103.74,130A8,8,0,0,0,91,121.76L55.48,150.24c-.23.18-.44.38-.65.58a4,4,0,1,1-5.66-5.65c.12-.12.23-.24.34-.37L94.83,93.41a16,16,0,0,1,12-5.41h42.34a16,16,0,0,1,12,5.41l45.32,51.39c.11.13.22.25.34.37A4,4,0,0,1,206.83,150.82Z"></path>
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-[#0d151c] text-base font-bold leading-tight">
                    Week 2: Employee Relations
                  </h2>
                  <p className="text-[#49779c] text-sm font-normal leading-normal">
                    Learn how to manage employee relations and handle conflicts.
                  </p>
                </div>
              </div>
              <div className="flex flex-1 gap-3 rounded-lg border border-[#cedde8] bg-slate-50 p-4 flex-col cursor-pointer hover:shadow-lg hover:shadow-gray-600">
                <div
                  className="text-[#0d151c]"
                  data-icon="Control"
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
                    <path d="M205.66,125.66a8,8,0,0,1-11.32,0L128,59.31,61.66,125.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0l72,72A8,8,0,0,1,205.66,125.66Z"></path>
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-[#0d151c] text-base font-bold leading-tight">
                    Week 3: Talent Management
                  </h2>
                  <p className="text-[#49779c] text-sm font-normal leading-normal">
                    Dive into the world of Talent Management and learn about
                    different HR systems.
                  </p>
                </div>
              </div>
              <div className="flex flex-1 gap-3 rounded-lg border border-[#cedde8] bg-slate-50 p-4 flex-col cursor-pointer hover:shadow-lg hover:shadow-gray-600">
                <div
                  className="text-[#0d151c]"
                  data-icon="Checks"
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
                    <path d="M149.61,85.71l-89.6,88a8,8,0,0,1-11.22,0L10.39,136a8,8,0,1,1,11.22-11.41L54.4,156.79l84-82.5a8,8,0,1,1,11.22,11.42Zm96.1-11.32a8,8,0,0,0-11.32-.1l-84,82.5-18.83-18.5a8,8,0,0,0-11.21,11.42l24.43,24a8,8,0,0,0,11.22,0l89.6-88A8,8,0,0,0,245.71,74.39Z"></path>
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-[#0d151c] text-base font-bold leading-tight">
                    Week 4: Compliance and Ethics
                  </h2>
                  <p className="text-[#49779c] text-sm font-normal leading-normal">
                    Master the art of Compliance and Ethics in the workplace.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Benefitdesigner/>
      <EmployerPartners/>
      <FAQ/>
     
    </div>
     <Footer/>
     </>
  );
};

export default Hero;
