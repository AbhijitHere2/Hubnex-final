import React, { useState, useRef, useEffect } from "react";
import { IoArrowBackCircleOutline } from "react-icons/io5";

import "./index.css";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

// import '..Cards/index.css'

const Mani = [
  {
    title: "HR",
    content:
      "Master HR skills with clear and specialized workshop and become an human resource expert.",
    anchor: "https://hubnex.in/",
  },

  {
    title: "Data Science",
    content:
      "Master HR skills with clear and specialized workshop and become an human resource expert.",
    anchor: "https://hubnex.in/",
  },

  {
    title: "Marketing",
    content:
      "Master Marketing with clear and specialized workshop and become an marketing expert.",
    anchor: "https://hubnex.in/",
  },

  {
    title: "UIUX",
    content:
      "Master UIUX with clear and specialized workshop and become an design expert",
    anchor: "https://hubnex.in/",
  },

  {
    title: "Finance",
    content:
      "Master Finance with clear and specialized workshop and become an finance expert.",
    anchor: "https://hubnex.in/",
  },

  {
    title: "Front End",
    content:
      "Master Front-end with clear and specialized workshop and become an frontend expert.",
    anchor: "https://hubnex.in/",
  },

  {
    title: "AIML",
    content:
      "Master AIML with clear and specialized workshop and become an AIML expert.",
    anchor: "https://hubnex.in/",
  },

  {
    title: "Full Stack",
    content:
      " Master Full Stack with clear and specialized workshop and become an Full stack expert.",
    anchor: "https://hubnex.in/",
  },
];
const Cards = () => {
  const [scrollPosition, setNewScroll] = useState(0);
  const containerRef = useRef(null);

  const forwardHandler = () => {
    containerRef.current.scrollBy({
      left: "361",
      behavior: "smooth",
    });
  };

  const PreviousHandler = () => {
    containerRef.current.scrollBy({
      left: "-361",
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const container = containerRef.current;
    let isScrolling = false;
    const handleScroll = () => {
      if (!isScrolling) {
        isScrolling = true;
        requestAnimationFrame(() => {
          if (
            container.scrollLeft >=
            container.scrollWidth - container.clientWidth
          ) {
            container.scrollLeft = 0;
            setNewScroll(0);
          }
          isScrolling = false;
        });
      }
    };
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const CardsTitle = () => {
    return (
      <div className="Cardstitle-details">
        <h4 className="font-bold text-3xl max-md:text-2xl pt-5  max-sm:text-lg  ">
          Comprehensive Services Tailored for Success
        </h4>
        <p className="max-sm:text-xs text-center">
          {" "}
          Expert academic counseling, our services are designed to{" "}
        </p>
        <p className="max-sm:text-xs text-center">
          {" "}
          meet your every educational needs{" "}
        </p>

        <div className="div-viewmore max-sm:pt-6 ">
          <a className="anchor-viewmore" href="https://hubnex.in/">
            {" "}
            <h6 className=""> View more </h6>{" "}
            <i class="fa-solid fa-angle-right "></i>{" "}
          </a>
        </div>
      </div>
    );
  };

  return (
    <div className="Cards-body ">
      <CardsTitle />

      <div className="Cards-Container-body" ref={containerRef}>
        {Mani.map((each) => (
          <div className="Cards-Container">
            <h1 className="title "> {each.title} </h1>
            <h1 className="title1"> {each.title} </h1>
            <p className="paragraph font-normal max-md:text-2xl ">
              {each.content}
            </p>
            <p className="new  "> {each.content} </p>
            <a className="anchor-content  " href={each.anchor}>
              <button className="button-link max-md:w-[39px] max-md:h-10 max-sm:w-[30px] max-sm:h-8 ">
                +
              </button>
            </a>
          </div>
        ))}
      </div>

      <div className="button-control-div">
        <button className="" onClick={PreviousHandler}>
          <IoArrowBackCircleOutline className="text-5xl  " />
        </button>
        <button className="" onClick={forwardHandler}>
          <IoArrowForwardCircleOutline className="text-5xl " />
        </button>
      </div>
    </div>
  );
};

export default Cards;
