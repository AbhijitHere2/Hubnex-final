import React from 'react';
import EmployerPartners from "./EmployerPartners"
import Benefitdesigner from "./Benefitdesigner"
import FAQ from "./FAQ"

const Hero = () => {
  return (
    <div className="flex justify-center max-w-6xl mx-auto flex-col px-12">
      <div className="w-full mt-16">
        <div
          className="relative left-4 p-4 w-97 h-[560px] rounded-xl "
          style={{ backgroundImage: "url('https://cdn.usegalileo.ai/sdxl10/7a4f87e8-4c10-4eec-afff-ebb5abde991d.png')", }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-black/10 rounded-xl"></div>
          <div className="relative flex flex-col gap-4 w-full h-full justify-end items-start pl-20 mb-16 max-sm:pl-3">
            <h1 className="text-white text-5xl font-bold max-sm:text-4xl">
            Become a Frontend Expert in just 6 weeks
            </h1>
            <h2 className="text-white text-lg font-normal">
            Our live, online Frontend workshop helps you build the skills to excel in the industry, get hired, and earn more.
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
              This is a 6-week program. Each week we'll cover a different aspect of Frontend. You'll learn by doing - we'll give you real-world projects to help you practice what you learn. Here's the breakdown:
              </p>
            </div>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3">
              {[
                {
                  title: "Week 1: HTML and CSS",
                  description: "Learn the fundamentals of HTML and CSS, including responsive design and best practices.",
                  icon: "path-to-icon-1", // replace with your SVG paths
                },
                {
                  title: "Week 2: JavaScript",
                  description: "Develop the skills to create interactive web pages using JavaScript. Learn about DOM manipulation and event handling.",
                  icon: "path-to-icon-2",
                },
                {
                  title: "Week 3: React",
                  description: "Master the tools and techniques used in the industry, including React, JSX, and component-based architecture.",
                  icon: "path-to-icon-3",
                },
                {
                  title: "Week 4: Redux",
                  description: "Learn the importance of state management in large-scale applications. Understand the role of Redux and its benefits.",
                  icon: "path-to-icon-4",
                },
                {
                  title: "Week 5: Advanced Topics",
                  description: "Work on a real-world project under the guidance of our instructors. Get hands-on experience in an industry-relevant environment.",
                  icon: "path-to-icon-4",
                },
                {
                  title: "Week 6: Capstone Project",
                  description: "Review and optimize your project. Receive feedback from instructors and industry professionals.",
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
            </div>
          </div>
        </div>
      </div>
       
      <Benefitdesigner /> 
      <EmployerPartners />
      <FAQ />
    </div>
  );
};

export default Hero;
