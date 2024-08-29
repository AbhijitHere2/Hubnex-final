import React from "react";
import Cancelation from "./Cancelation";
import Employer from "./Employer";
import FAQ from "./FAQ";

const Marketing = () => {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Space Grotesk", "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="@container">
              <div className="@[480px]:p-4">
                <div
                  className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/sdxl10/d0655ed6-a2e5-44b4-ab80-24c52d42d628.png")',
                  }}
                >
                  <div className="flex flex-col gap-2 text-left">
                    <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                      Become a Marketing Pro in 4 Weeks
                    </h1>
                    <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                      Our live, online Marketing workshop helps you build the
                      skills to excel in the industry, get hired, and earn more.
                    </h2>
                  </div>
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#2094f3] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                    <span className="truncate">Start</span>
                  </button>
                </div>
              </div>
            </div>

            <h1 class="text-[#0d151c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 text-left pb-3 pt-5">
              Weekly Learning Objectives
            </h1>
            <div class="flex flex-col gap-10 px-4 py-10 @container">
              <div class="flex flex-col gap-4">
                <h1 class="text-[#0d151c] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
                  What You'll Learn
                </h1>
                <p class="text-[#0d151c] text-base font-normal leading-normal max-w-[720px]">
                  This is a 4-week program. Each week we'll cover a different
                  aspect of Marketing. You'll learn by doing - we'll give you
                  real-world projects to help you practice what you learn.
                  Here's the breakdown:
                </p>
              </div>
              <div class="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-0">
                <div class="flex flex-1 gap-3 rounded-lg border border-[#cedde8] bg-slate-50 p-4 flex-col">
                  <div
                    class="text-[#0d151c]"
                    data-icon="Storefront"
                    data-size="24px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M232,96a7.89,7.89,0,0,0-.3-2.2L217.35,43.6A16.07,16.07,0,0,0,202,32H54A16.07,16.07,0,0,0,38.65,43.6L24.31,93.8A7.89,7.89,0,0,0,24,96v16a40,40,0,0,0,16,32v64a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V144a40,40,0,0,0,16-32ZM54,48H202l11.42,40H42.61Zm50,56h48v8a24,24,0,0,1-48,0Zm-16,0v8a24,24,0,0,1-48,0v-8ZM200,208H56V151.2a40.57,40.57,0,0,0,8,.8,40,40,0,0,0,32-16,40,40,0,0,0,64,0,40,40,0,0,0,32,16,40.57,40.57,0,0,0,8-.8Zm-8-72a24,24,0,0,1-24-24v-8h48v8A24,24,0,0,1,192,136Z"></path>
                    </svg>
                  </div>
                  <div class="flex flex-col gap-1">
                    <h2 class="text-[#0d151c] text-base font-bold leading-tight">
                      Week 1: Introduction to Marketing
                    </h2>
                    <p class="text-[#49779c] text-sm font-normal leading-normal">
                      Understand the basics of Marketing and its applications in
                      the industry.
                    </p>
                  </div>
                </div>
                <div class="flex flex-1 gap-3 rounded-lg border border-[#cedde8] bg-slate-50 p-4 flex-col">
                  <div
                    class="text-[#0d151c]"
                    data-icon="Television"
                    data-size="24px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M216,64H147.31l34.35-34.34a8,8,0,1,0-11.32-11.32L128,60.69,85.66,18.34A8,8,0,0,0,74.34,29.66L108.69,64H40A16,16,0,0,0,24,80V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V80A16,16,0,0,0,216,64ZM40,80H144V200H40ZM216,200H160V80h56V200Zm-16-84a12,12,0,1,1-12-12A12,12,0,0,1,200,116Zm0,48a12,12,0,1,1-12-12A12,12,0,0,1,200,164Z"></path>
                    </svg>
                  </div>
                  <div class="flex flex-col gap-1">
                    <h2 class="text-[#0d151c] text-base font-bold leading-tight">
                      Week 2: Digital Marketing
                    </h2>
                    <p class="text-[#49779c] text-sm font-normal leading-normal">
                      Learn how to use Digital Marketing tools and platforms
                      effectively.
                    </p>
                  </div>
                </div>
                <div class="flex flex-1 gap-3 rounded-lg border border-[#cedde8] bg-slate-50 p-4 flex-col">
                  <div
                    class="text-[#0d151c]"
                    data-icon="Brandy"
                    data-size="24px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M224,88h0a95.63,95.63,0,0,0-15.53-52.37,8,8,0,0,0-6.7-3.63H54.23a8,8,0,0,0-6.7,3.63A95.63,95.63,0,0,0,32,88h0a96.12,96.12,0,0,0,88,95.66V216H88a8,8,0,0,0,0,16h80a8,8,0,0,0,0-16H136V183.66A96.12,96.12,0,0,0,224,88ZM58.7,48H197.3a79.52,79.52,0,0,1,10.3,32H48.4A79.52,79.52,0,0,1,58.7,48ZM128,168A80.11,80.11,0,0,1,48.4,96H207.6A80.11,80.11,0,0,1,128,168Z"></path>
                    </svg>
                  </div>
                  <div class="flex flex-col gap-1">
                    <h2 class="text-[#0d151c] text-base font-bold leading-tight">
                      Week 3: Branding and Strategy
                    </h2>
                    <p class="text-[#49779c] text-sm font-normal leading-normal">
                      Dive into the world of Branding and Marketing Strategy.
                    </p>
                  </div>
                </div>
                <div class="flex flex-1 gap-3 rounded-lg border border-[#cedde8] bg-slate-50 p-4 flex-col">
                  <div
                    class="text-[#0d151c]"
                    data-icon="Presentation"
                    data-size="24px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M216,40H136V24a8,8,0,0,0-16,0V40H40A16,16,0,0,0,24,56V176a16,16,0,0,0,16,16H79.36L57.75,219a8,8,0,0,0,12.5,10l29.59-37h56.32l29.59,37a8,8,0,1,0,12.5-10l-21.61-27H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,136H40V56H216V176Z"></path>
                    </svg>
                  </div>
                  <div class="flex flex-col gap-1">
                    <h2 class="text-[#0d151c] text-base font-bold leading-tight">
                      Week 4: Marketing Analytics
                    </h2>
                    <p class="text-[#49779c] text-sm font-normal leading-normal">
                      Master the art of Marketing Analytics and Reporting.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Cancelation />
        <Employer />
        <FAQ />
      </div>
    </div>
  );
};

export default Marketing;
