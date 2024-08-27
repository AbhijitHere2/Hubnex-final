import React from 'react'

const Benifit = () => {


  return (
    <div>
      <div className="flex  max-w-5xl  mx-auto flex-col gap-10 px-4 py-10  ">
                <div className="flex flex-col gap-4">
                  <h1 className="text-[#0d151c] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
                    Benefits of the Program
                  </h1>
                  <p className="text-[#0d151c] text-base font-normal leading-normal max-w-[720px]">
                  Our Full Stack Developer program is designed to help you grow as a Developer. Here are some of the benefits you'll get from completing the program.                  </p>
                </div>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-0">
                  <div className="flex flex-1 gap-3 rounded-lg border border-[#cedde8] bg-slate-50 p-4 flex-col cursor-pointer hover:shadow-lg hover:shadow-gray-600">
                    <div
                      className="text-[#0d151c]"
                      data-icon="Trophy"
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
                        <path d="M232,64H208V56a16,16,0,0,0-16-16H64A16,16,0,0,0,48,56v8H24A16,16,0,0,0,8,80V96a40,40,0,0,0,40,40h3.65A80.13,80.13,0,0,0,120,191.61V216H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V191.58c31.94-3.23,58.44-25.64,68.08-55.58H208a40,40,0,0,0,40-40V80A16,16,0,0,0,232,64ZM48,120A24,24,0,0,1,24,96V80H48v32q0,4,.39,8Zm144-8.9c0,35.52-28.49,64.64-63.51,64.9H128a64,64,0,0,1-64-64V56H192ZM232,96a24,24,0,0,1-24,24h-.5a81.81,81.81,0,0,0,.5-8.9V80h24Z"></path>
                      </svg>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h2 className="text-[#0d151c] text-base font-bold leading-tight">
                        Earn a certificate and badge
                      </h2>
                      <p className="text-[#49779c] text-sm font-normal leading-normal">
                      Get a certificate of completion and a digital badge to add to your portfolio
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-1 gap-3 rounded-lg border border-[#cedde8] bg-slate-50 p-4 flex-col cursor-pointer hover:shadow-lg hover:shadow-gray-600">
                    <div
                      className="text-[#0d151c]"
                      data-icon="User"
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
                        <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
                      </svg>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h2 className="text-[#0d151c] text-base font-bold leading-tight">
                      Learn from experienced Developers                      </h2>
                      <p className="text-[#49779c] text-sm font-normal leading-normal">
                      Our instructors are experienced Developers from top companies                      </p>
                    </div>
                  </div>
                  <div className="flex flex-1 gap-3 rounded-lg border border-[#cedde8] bg-slate-50 p-4 flex-col cursor-pointer hover:shadow-lg hover:shadow-gray-600">
                    <div
                      className="text-[#0d151c]"
                      data-icon="Lightning"
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
                        <path d="M215.79,118.17a8,8,0,0,0-5-5.66L153.18,90.9l14.66-73.33a8,8,0,0,0-13.69-7l-112,120a8,8,0,0,0,3,13l57.63,21.61L88.16,238.43a8,8,0,0,0,13.69,7l112-120A8,8,0,0,0,215.79,118.17ZM109.37,214l10.47-52.38a8,8,0,0,0-5-9.06L62,132.71l84.62-90.66L136.16,94.43a8,8,0,0,0,5,9.06l52.8,19.8Z"></path>
                      </svg>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h2 className="text-[#0d151c] text-base font-bold leading-tight">
                      Master Full Stack Development skills                      </h2>
                      <p className="text-[#49779c] text-sm font-normal leading-normal">
                      Our curriculum is designed to help you master the skills needed in the industry                      </p>
                    </div>
                  </div>
                  <div className="flex flex-1 gap-3 rounded-lg border border-[#cedde8] bg-slate-50 p-4 flex-col cursor-pointer hover:shadow-lg hover:shadow-gray-600">
                    <div
                      className="text-[#0d151c]"
                      data-icon="Briefcase"
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
                        <path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z"></path>
                      </svg>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h2 className="text-[#0d151c] text-base font-bold leading-tight">
                      Boost your career
                      </h2>
                      <p className="text-[#49779c] text-sm font-normal leading-normal">
                      Our students have been hired, earned raises, and found new jobs after completing our programs.
                      </p>
                    </div>
                  </div>
                  
                </div>
                <div>
              <h2 className="text-[#0d151c] text-left text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                Certificate Criteria
              </h2>
              <p className="text-[#0d151c] text-base font-normal leading-normal pb-3 pt-1 px-4">
                To earn the certificate, you must complete all the course
                requirements and the capstone project. The certificate will be
                issued by our institution and can be shared on your LinkedIn
                profile or resume.
              </p>
              <h2 className="text-[#0d151c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                Cancellation Policy
              </h2>
              <p className="text-[#0d151c] justify-center items-center text-base font-normal leading-normal pb-3 pt-1 px-4">
                You can cancel your enrollment up to 7 days before the start of
                the program and get a full refund. After that, the refund will
                be prorated based on the completed portion of the program.
              </p>
              </div>
              </div>
             
            </div>
         
  )
}

export default Benifit
