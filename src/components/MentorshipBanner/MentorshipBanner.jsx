import React from "react";

const MentorshipBanner = () => {
  return (
    <div className="relative flex flex-col items-center text-center py-20 bg-white">
      <div className="absolute inset-x-0 top-0 flex justify-between px-8">
        <img
          src="/path/to/image1.jpg"
          alt="mentor"
          className="w-12 h-12 rounded-full -translate-y-1/2"
          style={{ left: '5%' }}
        />
        <img
          src="/path/to/image2.jpg"
          alt="mentor"
          className="w-12 h-12 rounded-full -translate-y-1/4"
          style={{ left: '25%' }}
        />
        <img
          src="/path/to/image3.jpg"
          alt="mentor"
          className="w-12 h-12 rounded-full -translate-y-1/2"
          style={{ left: '50%' }}
        />
        <img
          src="/path/to/image4.jpg"
          alt="mentor"
          className="w-12 h-12 rounded-full -translate-y-1/4"
          style={{ left: '75%' }}
        />
        <img
          src="/path/to/image5.jpg"
          alt="mentor"
          className="w-12 h-12 rounded-full -translate-y-1/2"
          style={{ left: '95%' }}
        />
      </div>
      <h1 className="text-3xl font-bold mt-20">
        Transform your skills with Expert Guidance and Professional Mentorship
      </h1>
      <p className="mt-4 text-lg">
        Personalized learning journey with the
      </p>
    </div>
  );
};

export default MentorshipBanner;
