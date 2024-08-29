import React from 'react';

const FAQ = () => {
  return (
    <div>
      <h2 className="text-[#0d151c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">FAQ</h2>
      <div className="flex flex-col p-4">
        <details className="flex flex-col border-t border-t-[#cedde8] py-2 group" open>
          <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
            <p className="text-[#0d151c] text-sm font-medium leading-normal">What are the prerequisites for this workshop?</p>
            <div className="text-[#0d151c] group-open:rotate-180" data-icon="CaretDown" data-size="20px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
              </svg>
            </div>
          </summary>
          <p className="text-[#49779c] text-sm font-normal leading-normal pb-2">
            Basic knowledge of HTML, CSS, and JavaScript is recommended for the frontend workshop. Familiarity with web browsers and development tools will be beneficial. A creative mindset and a keen interest in web design can enhance the learning experience.
          </p>
        </details>
        <details className="flex flex-col border-t border-t-[#cedde8] py-2 group">
          <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
            <p className="text-[#0d151c] text-sm font-medium leading-normal">Is this workshop suitable for beginners?</p>
            <div className="text-[#0d151c] group-open:rotate-180" data-icon="CaretDown" data-size="20px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
              </svg>
            </div>
          </summary>
          <p className="text-[#49779c] text-sm font-normal leading-normal pb-2">
            Basic knowledge of HTML, CSS, and JavaScript is recommended for the frontend workshop. Familiarity with web browsers and development tools will be beneficial. A creative mindset and a keen interest in web design can enhance the learning experience.
          </p>
        </details>
        <details className="flex flex-col border-t border-t-[#cedde8] py-2 group">
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
            style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/81ab4ffe-ed96-4f43-8820-aa875b7a3148.png")' }}
          ></div>
          <div>
            <p className="text-[#0d151c] text-base font-medium leading-normal">JavaScript Workshop</p>
            <p className="text-[#49779c] text-sm font-normal leading-normal"></p>
          </div>
        </div>
        <div className="flex flex-col gap-3 pb-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
            style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/467a9d0a-b1a8-49e4-af62-96e5f0ea141e.png")' }}
          ></div>
          <div>
            <p className="text-[#0d151c] text-base font-medium leading-normal">React Workshop</p>
            <p className="text-[#49779c] text-sm font-normal leading-normal"></p>
          </div>
        </div>
        <div className="flex flex-col gap-3 pb-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
            style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/db96066d-7b9a-40d6-aef3-b285b0756c37.png")' }}
          ></div>
          <div>
            <p className="text-[#0d151c] text-base font-medium leading-normal">Redux Workshop</p>
            <p className="text-[#49779c] text-sm font-normal leading-normal"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
