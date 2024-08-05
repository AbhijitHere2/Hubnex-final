import React from "react";
import { MdOutlineHandshake } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";
import { FaChalkboardUser } from "react-icons/fa6";
import "./Hr.css";

const Hr = () => {
  return (
    <div className="overflow-hidden w-full   ">
      <div className="bg-gray-100 md:px-8  lg:px-16 py-5 flex justify-center">
        <div className="max-w-7xl pt-5 ">
          <div className="flex flex-col max-sm:pl-6 lg:flex-row items-center banner">
            <div className="  h-[484px]   ">
              <div className="in-div sm:w-[725px]  ">
                <h1 className="text-3xl md:text-4xl w-[388px] lg:text-5xl  pt-20 ml-16 font-semibold text-white">
                  Human Resource Workshops
                </h1>
                <p className="mt-4 ml-16 font-normal text-lg max-sm:text-base w-[388px] max-sm:w-[310px] text-white">
                  This workshop focuses on the latest trends and best practices
                  in human resource management, including talent acquisition,
                  employee engagement, and performance management.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-16 text-center mb-5 ">
            <h2 className="text-2xl font-semibold text-gray-900">
              Explore <span className="text-indigo-600">My Offerings</span> for
              you
            </h2>
            <p className="mt-2  text-gray-500">
              Discover tailored solutions infused with cutting-edge <br />{" "}
              innovation and expertise.
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 mx-5 hover:shadow-lg hover:shadow-slate-500   bg-white  rounded-lg shadow-md        text-center">
                <div className="text-indigo-500 text-3xl">
                  <FaChalkboardUser className="tag " />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Interactive Sessions
                </h3>
                <p className="mt-2 text-gray-700">
                  Engage with hands-on activities, Q&A, and networking
                  discussions.
                </p>
              </div>
              <div className="p-8 mx-5 hover:shadow-lg hover:shadow-slate-500  bg-white rounded-lg shadow-md text-center">
                <div className="text-indigo-500 text-3xl ">
                  <MdOutlineHandshake className="tag " />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Expert Mentors
                </h3>
                <p className="mt-2 text-gray-700">
                  Invite industry experts to share their knowledge and
                  experiences.
                </p>
              </div>
              <div className="p-8 mx-5 hover:shadow-lg hover:shadow-slate-500 bg-white rounded-lg shadow-md text-center">
                <div className="text-indigo-500 text-3xl ">
                  <FaBookReader className="tag " />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Resource Sharing
                </h3>
                <p className="mt-2 text-gray-700">
                  Engage with hands-on activities, Q&A, and networking
                  discussions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hr;
