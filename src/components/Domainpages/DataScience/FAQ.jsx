import React, { useState } from "react";

import f1 from "../../images/DataSci/f1.png"
import f2 from "../../images/DataSci/f2.png"
import f3 from "../../images/DataSci/f3.png"


const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto p-5 md:px-4  lg:px-28 Ft">
      <h2 className="text-2xl font-bold mb-4">FAQ</h2>
      <div className="divide-y divide-gray-200">
        {[
          {
            question: "What are the prerequisites for this workshop?",
            answer:
              "Before attending the finance workshop, it's essential to have a basic understanding of accounting principles, financial statements, and economic concepts. Familiarity with spreadsheets, basic investment knowledge, and analytical skills are beneficial. A keen interest in financial markets and a willingness to engage with complex topics will enhance gour learning experience.",
          },
          {
            question: "Is this workshop suitable for beginners?",
            answer:
              "Yes, the finance workshop is suitable for beginners. It starts with fundamental concepts, making it accessible to those with little to no prior knowledge of finance. The course builds a solid foundation, gradually introducing more complex topics to ensure a comprehensive understanding.",
          },
          {
            question: "Will I get a certificate after completing the workshop?",
            answer:
              "Yes, you will receive a certification upon successful completion of the workshop. This certificate will recognize your participation and the skills you've gained, which can be valuable for career advancement and showcasing your expertise in the field.",
          },
          {
             question: "Can I cancel my enrollment and get a refund?",
           answer:
              'Yes, you can cancel your enrollment. For checking the refund policy, please <a href="https://example.com/refund-policy" className="text-blue-500  underline hover:text-blue-700">click here</a>.',
          },
        ].map((faq, index) => (
          <div key={index} className="py-4">
            <button
              className="w-full flex justify-between items-center text-lg font-medium text-gray-700 focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <svg
                className={`w-6 h-6 transform transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            {openIndex === index && (
              <div
                className="mt-2 text-blue-600 font-normal"
                dangerouslySetInnerHTML={{ __html: faq.answer }}
              ></div>
            )}
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto   ">
      <h2 className="text-2xl font-bold mb-8 mt-8">Upcoming Workshops</h2>
      <div className="flex flex-col md:flex-row md:space-x-4">
        {/* Workshop Card 1 */}
        <div className="flex-1 mb-6 md:mb-0">
          <img src={f1} alt="Employee Relations workshop" className="h-80 w-full object-cover rounded-xl mx-auto" />
          <div className="font-bold text-lg mt-2 text-center">
          Financial Analysis Workshop<br />
            {/* <span className="font-normal text-blue-700">August 15th, 2024</span> */}
          </div>
        </div>

        {/* Workshop Card 2 */}
        <div className="flex-1 mb-6 md:mb-0 px-0">
          <img src={f2} alt="Talent Management workshop" className="h-80 w-full object-cover rounded-xl mx-auto" />
          <div className="font-bold text-lg mt-2 text-center">
          Investment Management Workshop <br />
            {/* <span className="font-normal text-blue-700">August 22nd, 2024</span> */}
          </div>
        </div>

        {/* Workshop Card 3 */}
        <div className="flex-1 mb-6 md:mb-0">
          <img src={f3} alt="Diversity and Inclusion workshop" className="h-80 w-full object-cover rounded-xl mx-auto" />
          <div className="font-bold text-lg mt-2 text-center">
          Risk Management Workshop <br />
            {/* <span className="font-normal text-blue-700">August 29th, 2024</span> */}
          </div>
        </div>
      </div>
    </div><br/><br/>

    
      {/* <footer className="bg-black text-white py-8 px-4">

        
        <hr className="border-t border-gray-300 mb-8" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
         
          <div>
            <h3 className="text-lg font-semibold mb-2">COMPANY</h3>
            <ul>
              <li className="mb-1"><a href="#" className="hover:underline">About Us</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Privacy policy</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Blog</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Careers</a></li>
            </ul>
          </div>

       
          <div>
            <h3 className="text-lg font-semibold mb-2">Support</h3>
            <ul>
              <li className="mb-1"><a href="#" className="hover:underline">Contact Us</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Community</a></li>
            </ul>
          </div>

    
          <div>
            <h3 className="text-lg font-semibold mb-2">Socials</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-black">
                <FontAwesomeIcon icon={faFacebook} className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-500 hover:text-black">
                <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-500 hover:text-black">
                <FontAwesomeIcon icon={faTwitter} className="h-6 w-6" />
              </a>
            </div>
          </div>

         
          <div>
            <h2 className="text-lg font-semibold mb-2">Sign Up</h2>
            <form className="mt-3">
              <input
                type="text"
                placeholder="Enter your email"
                className="border px-3 py-2 w-full rounded"
              />
            </form>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default FAQ;
