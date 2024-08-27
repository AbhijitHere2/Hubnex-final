import React from "react";

const FAQ = () => {
  return (
    <div  className= "md:px-52 px-4 font-inter">
      {/* FAQ Section */}
      <h2 className="text-[#0d151c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        FAQ
      </h2>
      <div className="flex flex-col p-4 gap-3">
        <details
          className="flex flex-col rounded-xl border border-[#cedde8] bg-slate-50 px-[15px] py-[7px] group"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
            <p className="text-[#0d151c] text-sm font-medium leading-normal">
              What are the prerequisites for the workshop?
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
            You should have a basic understanding of Marketing concepts.
            Knowledge of Digital Marketing tools (like Google Ads, Facebook
            Ads) is a plus, but not mandatory.
          </p>
        </details>
        <details className="flex flex-col rounded-xl border border-[#cedde8] bg-slate-50 px-[15px] py-[7px] group">
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
            Yes, the marketing workshop is designed to cater to all levels,
            including beginners. It provides foundational knowledge and
            practical skills, making it an excellent starting point for those
            new to the field or looking to deepen their understanding of
            marketing concepts.
          </p>
        </details>
        <details className="flex flex-col rounded-xl border border-[#cedde8] bg-slate-50 px-[15px] py-[7px] group">
          <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
            <p className="text-[#0d151c] text-sm font-medium leading-normal">
              Will I get a certificate at the end of the workshop?
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
            Yes, you will receive a certification upon successful completion of
            the workshop. This certificate will recognize your participation and
            the skills you've gained, which can be valuable for career
            advancement and showcasing your expertise in the field.
          </p>
        </details>
        <details className="flex flex-col rounded-xl border border-[#cedde8] bg-slate-50 px-[15px] py-[7px] group">
          <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
            <p className="text-[#0d151c] text-sm font-medium leading-normal">
              Can I cancel my enrollment and get a refund?
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
            Yes you can cancel your enrollment, for checking refund policy.
            Please click here.
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
                'url("https://cdn.usegalileo.ai/sdxl10/5c8e2519-70cd-4601-b54e-da7fb4b8a1dd.png")',
            }}
          ></div>
          <div>
            <p className="text-[#0d151c] text-base font-medium leading-normal">
              Introduction to Marketing Workshop
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
                'url("https://cdn.usegalileo.ai/stability/5660e537-48f4-4d6a-a08a-d4c155657b09.png")',
            }}
          ></div>
          <div>
            <p className="text-[#0d151c] text-base font-medium leading-normal">
              Digital Marketing Workshop
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
                'url("https://cdn.usegalileo.ai/sdxl10/53cb94c9-9d1e-422c-ba67-d45c0531c450.png")',
            }}
          ></div>
          <div>
            <p className="text-[#0d151c] text-base font-medium leading-normal">
              Marketing Analytics Workshop
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
