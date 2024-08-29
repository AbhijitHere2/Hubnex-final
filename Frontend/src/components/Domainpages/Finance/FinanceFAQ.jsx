import React, { useState } from "react";

import a1 from '../../images/FinanceImg/fin1.png'
import a2 from '../../images/FinanceImg/fin2.png'
import a3 from '../../images/FinanceImg/fin3.png'



const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto p-10 px-28">
      <h2 className="text-2xl font-bold mb-4">FAQ</h2>
      <div className="divide-y divide-gray-200">
        {[
          {
            question: "What are the prerequisites for this workshop?",
            answer:
              "Before attending the finance workshop, it's essential to have a basic understanding of accounting principles, financial statements, and economic concepts. Familiarity with spreadsheets, basic investment knowledge, and analytical skills are beneficial. A keen interest in financial markets and a willingness to engage with complex topics will enhance your learning experience.",
          },
          {
            question: "Is this workshop suitable for beginners?",
            answer:
              "Basic knowledge of HTML, CSS, and JavaScript is recommended for the frontend workshop. Familiarity with web browsers and development tools will be beneficial. A creative mindset and a keen interest in web design can enhance the learning experience.",
          },
          {
            question: "Will I get a certificate after completing the workshop?",
            answer:
              "Yes, you will receive a certification upon successful completion of the workshop. This certificate will recognize your participation and the skills you've gained, which can be valuable for career advancement and showcasing your expertise in the field.",
          },
          {/* {
            question: "Can I cancel my enrollment and get a refund?",
            answer:
              'Yes, you can cancel your enrollment. For checking the refund policy, please <a href="https://example.com/refund-policy" className="text-blue-500  underline hover:text-blue-700">click here</a>.',
          }, */}
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
          <img src={a1} alt="Employee Relations workshop" className="h-80 w-full object-cover rounded-xl mx-auto" />
          <div className="font-bold text-lg mt-2 text-center">
          JavaScript Workshop<br />
            {/* <span className="font-normal text-blue-700">August 15th, 2024</span> */}
          </div>
        </div>

        {/* Workshop Card 2 */}
        <div className="flex-1 mb-6 md:mb-0 px-0">
          <img src={a2} alt="Talent Management workshop" className="h-80 w-full object-cover rounded-xl mx-auto" />
          <div className="font-bold text-lg mt-2 text-center">
          React Workshop <br />
            {/* <span className="font-normal text-blue-700">August 22nd, 2024</span> */}
          </div>
        </div>

        {/* Workshop Card 3 */}
        <div className="flex-1 mb-6 md:mb-0">
          <img src={a3} alt="Diversity and Inclusion workshop" className="h-80 w-full object-cover rounded-xl mx-auto" />
          <div className="font-bold text-lg mt-2 text-center">
          Redux Workshop <br />
            {/* <span className="font-normal text-blue-700">August 29th, 2024</span> */}
          </div>
        </div>
      </div>
    </div><br/><br/>

    
    </div>
  );
};

export default FAQ;
