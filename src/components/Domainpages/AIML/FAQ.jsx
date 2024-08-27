import React from "react";

const FAQ = () => {
  return (
    <div className= "md:px-52 px-4 font-inter">
      {/* FAQ Section */}
      <h2 className="text-[#0d151c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        FAQ
      </h2>
      <div className="flex flex-col p-4">
        <details
          className="flex flex-col border-t border-t-[#cedde8] py-2 group"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
            <p className="text-[#0d151c] text-sm font-medium leading-normal">
              What are the prerequisites for this workshop?
            </p>
            <div
              className="text-[#0d151c] group-open:rotate-180"
              data-icon="CaretDown"
              data-size="20px"
              data-weight="regular"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
              </svg>
            </div>
          </summary>
          <p className="text-[#49779c] text-sm font-normal leading-normal pb-2">
            Before starting the AI/ML workshop, having a foundational understanding of programming, particularly in Python, is crucial. Basic knowledge of mathematics, including linear algebra, calculus, and statistics, will be beneficial for grasping core concepts in machine learning and AI.
          </p>
        </details>
        <details className="flex flex-col border-t border-t-[#cedde8] py-2 group">
          <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
            <p className="text-[#0d151c] text-sm font-medium leading-normal">
              Is this workshop suitable for beginners?
            </p>
            <div
              className="text-[#0d151c] group-open:rotate-180"
              data-icon="CaretDown"
              data-size="20px"
              data-weight="regular"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
              </svg>
            </div>
          </summary>
          <p className="text-[#49779c] text-sm font-normal leading-normal pb-2">
            Yes, the AI/ML workshop is suitable for beginners with a basic understanding of programming and math. The course starts with foundational concepts, making it accessible for newcomers while also offering depth for those looking to advance their skills.
          </p>
        </details>
        <details className="flex flex-col border-t border-t-[#cedde8] py-2 group">
          <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
            <p className="text-[#0d151c] text-sm font-medium leading-normal">
              Will I get a certificate after completing the workshop?
            </p>
            <div
              className="text-[#0d151c] group-open:rotate-180"
              data-icon="CaretDown"
              data-size="20px"
              data-weight="regular"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
              </svg>
            </div>
          </summary>
          <p className="text-[#49779c] text-sm font-normal leading-normal pb-2">
            Yes, you will receive a certification upon successful completion of the workshop. This certificate will recognize your participation and the skills you've gained, which can be valuable for career advancement and showcasing your expertise in the field.
          </p>
        </details>
      </div>

      {/* Upcoming Workshops Section */}
      <h2 className="text-[#0d151c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Upcoming Workshops
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
        <div className="flex flex-col gap-3 pb-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
            style={{
              backgroundImage:
                'url("https://cdn.usegalileo.ai/stability/d4a3ad98-ad39-44eb-8573-58219b32d053.png")',
            }}
          ></div>
          <div>
            <p className="text-[#0d151c] text-base font-medium leading-normal">
              Deep Learning Workshop
            </p>
            <p className="text-[#49779c] text-sm font-normal leading-normal">
              
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 pb-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
            style={{
              backgroundImage:
                'url("https://cdn.usegalileo.ai/sdxl10/6cdf5652-32b3-4dcf-be0d-21c6e7ee8099.png")',
            }}
          ></div>
          <div>
            <p className="text-[#0d151c] text-base font-medium leading-normal">
              Model Optimization Workshop
            </p>
            <p className="text-[#49779c] text-sm font-normal leading-normal">
              
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 pb-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
            style={{
              backgroundImage:
                'url("https://cdn.usegalileo.ai/sdxl10/47eecbd3-03c6-433a-a0f2-601f1deb7fe6.png")',
            }}
          ></div>
          <div>
            <p className="text-[#0d151c] text-base font-medium leading-normal">
              Industry Applications Workshop
            </p>
            <p className="text-[#49779c] text-sm font-normal leading-normal">
              
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
