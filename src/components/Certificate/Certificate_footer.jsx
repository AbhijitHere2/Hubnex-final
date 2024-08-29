import React from "react";

function Certificate_footer() {
  return (
    <div>
      <div className="px-40  flex flex-1 justify-center py-14">
        <div className="layout-content-container flex flex-col w-[512px]  max-sm:pl-20  py-5 max-w-[960px] flex-1">
          <div className="flex flex-wrap justify-between gap-3 p-4">
            <div className="flex min-w-72 flex-col gap-3">
              <p className="text-[#0d151c] tracking-light text-[32px] font-bold leading-tight">
                Certificate Verification
              </p>
              <p className="text-[#49779c] text-sm font-normal leading-normal">
                Your certificate is unique and can be verified here. You will
                need the certificate ID to verify your certificate.
              </p>
            </div>
          </div>
          <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <p className="text-[#0d151c] text-base font-medium leading-normal pb-2">
                Enter Certificate ID
              </p>
              {/* <input
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0d151c] focus:outline-0 focus:ring-0 border-none bg-[#e7eef4] focus:border-none h-14 placeholder:text-[#49779c] p-4 text-base font-normal leading-normal"
                  value=""
                /> */}
              <input
                type="text"
                id="default-input"
                className=" border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  bg-[#e7eef4] dark:placeholder-gray-400  dark:focus:ring-blue-500 "
              ></input>
            </label>
          </div>
          <div className="flex px-4 py-3">
            <a href="Verify Certificate ">
              {" "}
              <button className="flex min-w-[380px]  max-w-[480px]  cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 flex-1 bg-[#2094f3] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">Verify Certificate</span>
              </button>
            </a>
          </div>
          <h3 className="text-[#0d151c] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
            Refund Policy
          </h3>
          <p className="text-[#0d151c] text-base font-normal leading-normal pb-3 pt-1 px-4">
            You may cancel your registration up to 7 days before the event start
            date for a full refund. We do not provide refunds for cancellations
            made within 7 days of the event start date.Refunds will be processed
            within 7-10 business days after the cancellation date. For any
            refund-related queries, please contact our support team.
          </p>
          <h3 className="text-[#0d151c] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
            Attendance Policy
          </h3>
          <p className="text-[#0d151c] text-base font-normal leading-normal pb-3 pt-1 px-4">
            You are required to attend at least 80% of the workshop sessions to
            be eligible for a certificate. Any missed sessions must be notified
            in advance to the workshop coordinator.
          </p>
          <h3 className="text-[#0d151c] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
            Cancellation Policy
          </h3>
          <p className="text-[#0d151c] text-base font-normal leading-normal pb-3 pt-1 px-4">
            We reserve the right to cancel or reschedule any workshop. In the
            event of cancellation, we will provide a full refund. In the event
            of rescheduling, we will offer a transfer to a future event or a
            full refund if the new date does not work for you.
          </p>
          <footer className="flex justify-center">
            <div className="flex max-w-[960px] flex-1 flex-col">
              <footer className="flex flex-col gap-6 px-5 py-10 text-center @container">
                <div className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
                  <a
                    className="text-[#49779c] text-base font-normal leading-normal min-w-40"
                    href="#"
                  >
                    Contact Us
                  </a>
                  <a
                    className="text-[#49779c] text-base font-normal leading-normal min-w-40"
                    href="#"
                  >
                    Privacy Policy
                  </a>
                </div>
                <p className="text-[#49779c] text-base font-normal leading-normal">
                  Hubnex Educate
                </p>
              </footer>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Certificate_footer;
