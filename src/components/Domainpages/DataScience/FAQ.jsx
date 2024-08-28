import React from "react";

const FAQ = () => {
  return (
    <div className="flex  max-w-6xl  mx-auto flex-col  px-14 py-10  ">
      <h2 className="text-[#0d151c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">FAQ</h2>
      <div className="flex flex-col p-4 gap-3">
        <details className="flex flex-col rounded-xl border border-[#cedde8] bg-slate-50 px-[15px] py-[7px] group" open>
          <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
            <p className="text-[#0d151c] text-sm font-medium leading-normal">What are the prerequisites for the workshop?</p>
            <div className="text-[#0d151c] group-open:rotate-180" data-icon="CaretDown" data-size="20px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
              </svg>
            </div>
          </summary>
          <p className="text-[#49779c] text-sm font-normal leading-normal pb-2">
          It's recommended to have a basic understanding of programming, especially in Python, and familiarity with statistics and linear algebra. Experience with data manipulation and visualization tools will be helpful. A curious mindset and problem-solving skills are key for tackling data-driven challenges.
          </p>
        </details>

        <details className="flex flex-col rounded-xl border border-[#cedde8] bg-slate-50 px-[15px] py-[7px] group">
          <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
            <p className="text-[#0d151c] text-sm font-medium leading-normal">Is this workshop suitable for beginners?</p>
            <div className="text-[#0d151c] group-open:rotate-180" data-icon="CaretDown" data-size="20px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
              </svg>
            </div>
          </summary>
          <p className="text-[#49779c] text-sm font-normal leading-normal pb-2">
          Yes, the workshop is designed to accommodate beginners, providing foundational knowledge in data science concepts and tools. It's structured to progressively build skills, making it suitable for those new to the field and eager to learn.
          </p>
        </details>

        <details className="flex flex-col rounded-xl border border-[#cedde8] bg-slate-50 px-[15px] py-[7px] group">
          <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
            <p className="text-[#0d151c] text-sm font-medium leading-normal">Will I get a certificate after completing the workshop?</p>
            <div className="text-[#0d151c] group-open:rotate-180" data-icon="CaretDown" data-size="20px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
              </svg>
            </div>
          </summary>
          <p className="text-[#49779c] text-sm font-normal leading-normal pb-2">
          Yes, you will receive a certification upon successful completion of the workshop. This certificate will recognize your participation and the skills you've gained, which can be valuable for career advancement and showcasing your expertise in the field.
          </p>
        </details>

      
      </div>

      <h2 className="text-[#0d151c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Upcoming Workshops</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
        <div className="flex flex-col gap-3 pb-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
            style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/b67ad156-29ad-4030-9081-b43af1b539eb.png")' }}
          ></div>
          <div>
            <p className="text-[#0d151c] text-base font-medium leading-normal">Data Preprocessing Workshop</p>
            <p className="text-[#49779c] text-sm font-normal leading-normal"></p>
          </div>
        </div>

        <div className="flex flex-col gap-3 pb-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
            style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/stability/c91a82d9-1e74-4d78-9c70-a753765d3460.png")' }}
          ></div>
          <div>
            <p className="text-[#0d151c] text-base font-medium leading-normal">Machine Learning Workshop</p>
            <p className="text-[#49779c] text-sm font-normal leading-normal"></p>
          </div>
        </div>

        <div className="flex flex-col gap-3 pb-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
            style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/d97e75c3-056b-4898-8d16-fa905fafca09.png")' }}
          ></div>
          <div>
            <p className="text-[#0d151c] text-base font-medium leading-normal">Deep Learning Workshop</p>
            <p className="text-[#49779c] text-sm font-normal leading-normal"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
