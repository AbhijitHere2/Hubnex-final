import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = ({ onClick, isActive }) => {
  return (
    <button
      className={`absolute top-3/4 transform -translate-y-1/2 right-10 md:right-16 lg:right-24 cursor-pointer z-10 ${
        isActive ? "bg-blue-500" : "bg-white"
      } text-lg border-2 hover:bg-slate-300 p-3 rounded-full`}
      onClick={onClick}
    >
      →
       </button>
  );
};

const PrevArrow = ({ onClick, isActive }) => {
  return (
    <button
      className={`absolute top-3/4 transform -translate-y-1/2 left-10 md:left-16 lg:left-24 cursor-pointer z-10 ${
        isActive ? "bg-blue-500" : "bg-white"
      } text-lg border-2 hover:bg-slate-300 p-3 rounded-full`}
      onClick={onClick}
    >
      ←
    </button>
  );
};

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [nextButtonActive, setNextButtonActive] = useState(false);
  const [prevButtonActive, setPrevButtonActive] = useState(false);
  const imageClasses = [".i1", ".i3", ".i5", ".i6", ".i2", ".i7", ".i4", ".i8"];

  useEffect(() => {
    const index = currentSlide % imageClasses.length;
    const elements = document.querySelectorAll(".animate");

    elements.forEach((element) => {
      element.classList.remove("animate");
    });

    const currentElement = document.querySelector(imageClasses[index]);
    if (currentElement) currentElement.classList.add("animate");
  }, [currentSlide, imageClasses]);

  const handleSlideChange = (newIndex) => {
    setCurrentSlide(newIndex);
  };

  const handleNextClick = () => {
    setNextButtonActive(true);
    setTimeout(() => {
      setNextButtonActive(false);
    }, 300); // Change back after 300ms
  };

  const handlePrevClick = () => {
    setPrevButtonActive(true);
    setTimeout(() => {
      setPrevButtonActive(false);
    }, 300); // Change back after 300ms
  };

  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow onClick={handleNextClick} isActive={nextButtonActive} />,
    prevArrow: <PrevArrow onClick={handlePrevClick} isActive={prevButtonActive} />,
    beforeChange: (current, next) => handleSlideChange(next),
  };

  const slides = [
    { image: "Images/card7.png" },
    { image: "Images/card4.png" },
    { image: "Images/card5.png" },
    { image: "Images/card3.png" },
    { image: "Images/card2.png" },
    { image: "Images/card6.png" },
    { image: "Images/card8.png" },
    { image: "Images/card1.png" },
  ];

  return (
    <div className="relative px-4 sm:px-12">
      <p className="text-lg sm:text-2xl font-semibold mt-6 sm:mt-12">Testimonials</p>
      
      {/* Decorative Images */}
      <div className="hidden md:block absolute top-32 left-1/3 sm:left-98 sm:top-80">
        <img src="Images/rect2.png" className="w-10 sm:w-20" alt="decorative" style={{ width: "72px", height: "115px" }} />
      </div>
      <div className="hidden md:block absolute top-32" style={{ left: "61%" }}>
        <img src="Images/rect.png" className="w-10 sm:w-20" alt="decorative" style={{ width: "68px", height: "115px" }} />
      </div>

      {/* Slider */}
      <div className="mx-auto mt-12 sm:mt-24 w-full max-w-lg">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="p-2 sm:p-4">
              <img src={slide.image} alt={`Slide ${index}`} className="w-full animate" />
            </div>
          ))}
        </Slider>
      </div>

      {/* Animated Decorative Images */}
     
  <img src="Images/l2.svg" className="i1 animate hidden md:block absolute top-64 left-4 lg:left-18 w-6 lg:w-12" alt="decorative" />
  <img src="Images/r1.svg" className="i7 animate hidden md:block absolute top-40 right-4 lg:right-56 w-6 lg:w-12" alt="decorative" />
  <img src="Images/r3.svg" className="i2 animate hidden md:block absolute top-80 right-4 lg:right-64 w-6 lg:w-12" alt="decorative" />
  <img src="Images/l3.svg" className="i3 animate hidden md:block absolute top-40 left-12 lg:left-36 w-6 lg:w-12" alt="decorative" />
  <img src="Images/r2.svg" className="i4 animate hidden md:block absolute top-64 right-12 lg:right-56 w-6 lg:w-12" alt="decorative" />
  <img src="Images/l5.svg" className="i5 animate hidden md:block absolute top-96 left-12 lg:left-36 w-6 lg:w-12" alt="decorative" />
  <img src="Images/l4.svg" className="i6 animate hidden md:block absolute top-72 left-20 lg:left-44 w-6 lg:w-12" alt="decorative" />
  <img src="Images/l1.svg" className="i8 animate hidden md:block absolute top-40 left-32 lg:left-64 w-6 lg:w-12" alt="decorative" />

    </div>
  );
};

export default Carousel;
