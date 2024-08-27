import React from 'react';

const EmployerPartners = () => {
  return (
    <div className= " max-w-6xl mx-auto md:w-[80%]  px-4 font-inter">
      <h1 className="text-[#0d151c] tracking-light text-[32px] font-bold leading-tight px-4 text-center pb-8 pt-6">
      Our Employer Partners
      </h1>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(168px,1fr))] gap-3">
        {[
          "https://cdn.usegalileo.ai/sdxl10/70ebdf53-18a5-41e4-b706-625bf73a1b76.png",
          "https://cdn.usegalileo.ai/sdxl10/d49ef172-0dfc-4b6d-a5b5-2e9ceaa714f5.png",
          "https://cdn.usegalileo.ai/sdxl10/030ac155-b7a3-41db-942d-26c9010d5763.png",
          "https://cdn.usegalileo.ai/sdxl10/a7333b6a-c870-430e-a740-313e88e3eaa4.png",
          "https://cdn.usegalileo.ai/sdxl10/51151cc1-b54f-49e5-8533-4b297ef796ba.png",
          "https://cdn.usegalileo.ai/sdxl10/fa974156-5500-4990-a688-3c7205878831.png",
          "https://cdn.usegalileo.ai/sdxl10/0ad9f026-f3a1-4ae8-b53e-3fc5d4c46dd1.png",
          "https://cdn.usegalileo.ai/sdxl10/204cc2f5-585d-4878-af98-bddeae082269.png",
        ].map((image, index) => (
          <div key={index} className="flex flex-col gap-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          </div>
        ))}
      </div>
      <div className="flex px-4 py-3 justify-end">
       <a href="https://hubnex.in/"> <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#2094f3] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em]">
          <span className="truncate">Get started</span>
        </button></a>
      </div>
      <h1 className="text-[#0d151c] tracking-light text-[22px] font-bold leading-tight px-4 text-start pb-3 pt-6">
        What Our Students Say
      </h1>
      <div className="flex flex-col gap-8 overflow-x-hidden bg-slate-50 p-4">
        {[
          {
            name: "Rachel Williams",
            date: "June 1, 2024",
            review:
              "The program is fantastic. It's helped me learn a lot about Full Stack Development. I've improved my skills, learned new tools, and gained valuable insights. I've also learned a lot about the industry and the role of a Full Stack Developer.",
            likes: 5,
          },
          {
            name: "John Smith",
            date: "May 15, 2024",
            review:
              "I learned a lot from this program. The instructors were great, and the content was very relevant. I've already started applying what I learned in my projects, and I'm seeing results. I would definitely recommend this program to others.",
            likes: 7,
          },

          {
            name: "Sarah Johnson",
            date: "April 30, 2024",
            review:
              "This program is excellent. It covers all the essential Full Stack Development skills, and the instructors are very knowledgeable. I've gained a lot of valuable insights that I can apply to my work. I'm looking forward to the next session.",
            likes: 4,
          },

        ].map((testimonial, index) => (
          <div key={index} className="flex flex-col gap-3 bg-slate-50">
            <div className="flex-1">
              <p className="text-[#0d151c] text-base font-medium leading-normal">{testimonial.name}</p>
              <p className="text-[#49779c] text-sm font-normal leading-normal">{testimonial.date}</p>
            </div>
            <div className="flex gap-0.5">
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <div key={i} className="text-[#2094f3]" data-icon="Star" data-size="20px" data-weight="fill">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
                    </svg>
                  </div>
                ))}
            </div>
            <p className="text-[#0d151c] text-base font-normal leading-normal">{testimonial.review}</p>
            <div className="flex gap-9 text-[#49779c]">
              <button className="flex items-center gap-2">
                <div className="text-inherit" data-icon="ThumbsUp" data-size="20px" data-weight="regular">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M234,80.12A24,24,0,0,0,216,72H160V56a40,40,0,0,0-40-40,8,8,0,0,0-7.16,4.42L75.06,96H32a16,16,0,0,0-16,16v88a16,16,0,0,0,16,16H204a24,24,0,0,0,23.82-21l12-96A24,24,0,0,0,234,80.12ZM32,112H72v88H32ZM223.94,97l-12,96a8,8,0,0,1-7.94,7H88V105.89l36.71-73.43A24,24,0,0,1,144,56V80a8,8,0,0,0,8,8h64a8,8,0,0,1,7.94,9Z"></path>
                  </svg>
                </div>
                <p className="text-inherit">{testimonial.likes}</p>
              </button>
              <button className="flex items-center gap-2">
                <div className="text-inherit" data-icon="ThumbsDown" data-size="20px" data-weight="regular">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M239.82,157l-12-96A24,24,0,0,0,204,40H32A16,16,0,0,0,16,56v88a16,16,0,0,0,16,16H75.06l37.78,75.58A8,8,0,0,0,120,240a40,40,0,0,0,40-40V184h56a24,24,0,0,0,23.82-27ZM72,144H32V56H72Zm150,21.29a7.88,7.88,0,0,1-6,2.71H152a8,8,0,0,0-8,8v24a24,24,0,0,1-19.29,23.54L88,150.11V56H204a8,8,0,0,1,7.94,7l12,96A7.87,7.87,0,0,1,222,165.29Z"></path>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployerPartners;
