// OptionHandlers.js
export const handleOptionClick = (option, setMessages) => {
  const ignoredOptions = [
    "Personalized Mentorship",
    "Practical Training",
    "Resume and Cover Letter Assistance",
    "Skill Development Workshops",
    "Workshops",
    "Networking Opportunities",
    "Training Programs",
    "Job Assistance",
  ];

  if (ignoredOptions.includes(option)) {
    return;
  }

  let question = option;
  let answer = "";

  switch (option) {
    case "Domain":
      answer = `
        <div class="domain-options">
          <div class="head">The following types of workshops we provide to students:</div>
          <div class="option-item" data-sub-option="HR">HR</div>
          <div class="option-item" data-sub-option="Data Science">Data Science</div>
          <div class="option-item" data-sub-option="Marketing">Marketing</div>
          <div class="option-item" data-sub-option="UI/UX">UI/UX</div>
          <div class="option-item" data-sub-option="Machine Learning">Machine Learning</div>
          <div class="option-item" data-sub-option="Cyber Security">Cyber Security</div>
          For more details, <a href="https://example.com/domain" target="_blank">click here.</a>
        </div>
      `;
      break;
    case "workshop date":
      answer = `
        <div class="workshop-options">
          <div class="head">Available workshop dates are:</div>
          <div class="option-item">August 09, 2024, at 10:00 AM</div>
          <div class="option-item">August 12, 2024, at 01:00 PM</div>
          <div class="option-item">August 15, 2024, at 03:00 PM</div>
          <div class="option-item">August 20, 2024, at 11:00 AM</div>
          <div class="option-item">August 24, 2024, at 10:30 AM</div>
          <div class="option-item">August 28, 2024, at 10:00 AM</div>
          For more details, <a href="https://example.com/domain" target="_blank">click here.</a>
        </div>
      `;
      break;
    case "Career Guidance":
      answer = `
        <div class="career-options">
          <div class="head">Explore our career guidance services to help you navigate your professional journey. We offer:</div>
          <div class="option-item" data-sub-option="Personalized Mentorship" disabled>Personalized Mentorship</div>
          <div class="option-item" data-sub-option="Practical Training" disabled>Practical Training</div>
          <div class="option-item" data-sub-option="Resume and Cover Letter Assistance" disabled>Resume and Cover Letter Assistance</div>
          <div class="option-item" data-sub-option="Skill Development Workshops" disabled>Skill Development Workshops</div>
          For more details, <a href="https://example.com/career-guidance" target="_blank">click here.</a>
        </div>
      `;
      break;
    case "Services":
      answer = `
        <div class="career-options">
          <div class="head">Discover the range of services we offer to support your educational and professional development:</div>
          <div class="option-item" data-sub-option="Workshops" disabled>Workshops</div>
          <div class="option-item" data-sub-option="Training Programs" disabled>Training Programs</div>
          <div class="option-item" data-sub-option="Networking Opportunities" disabled>Networking Opportunities</div>
          <div class="option-item" data-sub-option="Job Assistance" disabled>Job Assistance</div>
          For more details, <a href="https://example.com/services" target="_blank">click here.</a>
        </div>
      `;
      break;
    case "Customer Executive":
      answer = `
        <div class="customer-executive-options">
          <button class="option-item" data-sub-option="Chat with Us">Chat with Us</button>
          <button class="option-item" data-sub-option="Talk over Call">Talk over Call</button>
          <button class="option-item" data-sub-option="Email Us">Email Us</button>
        </div>
      `;
      break;
    case "WhatsApp":
      answer =
        'You can chat with us on WhatsApp. <a href="https://wa.me/your-number" target="_blank">Click here.</a>';
      break;
    case "Telegram":
      answer =
        'You can chat with us on Telegram. <a href="https://t.me/your-telegram-handle" target="_blank">Click here.</a>';
      break;
    case "Message":
      answer =
        'You can chat with us via SMS. <a href="sms:+your-number" target="_blank">Click here.</a>';
      break;
    case "Slack":
      answer =
        'You can chat with us on Slack. <a href="https://slack.com/your-slack-workspace" target="_blank">Click here.</a>';
      break;
    case "Blog":
      answer = `
        <div class="blog-options">
          <div class="option-item" class="head">Read our latest blog posts for insights and updates.
          We cover a range of topics from industry trends to practical tips.</div>
          For more details, <a href="https://example.com/blog" target="_blank">click here.</a>
        </div>
      `;
      break;
    case "Newsletter":
      answer = `
        <div class="newsletter-options">
          <div class="option-item" class="head">Subscribe to our newsletter for regular updates and exclusive content.
           Stay informed about our latest news, events, and offers.</div>
          For more details, <a href="https://example.com/newsletter" target="_blank">click here.</a>
        </div>
      `;
      break;
    default:
      answer = "";
  }

  setMessages((prevMessages) => [
    ...prevMessages,
    { sender: "You", text: question, type: "user-message" },
    ...(answer
      ? [{ sender: "Chatbot", text: answer, type: "chatbot-message" }]
      : []),
  ]);
};

// OptionHandlers.js
export const handleSubOptionClick = (subOption, setMessages) => {
  let answer = "";
  let link = "";

  switch (subOption) {
    case "HR":
      answer =
        "HR Workshop: Learn about human resources management and practices. For more details,";
      link = "https://example.com/hr";
      break;
    case "Data Science":
      answer =
        "Data Science Workshop: Dive into data analysis, machine learning, and more. For more details,";
      link = "https://example.com/data-science";
      break;
    case "Marketing":
      answer =
        "Marketing Workshop: Understand the fundamentals of marketing and strategy. For more details,";
      link = "https://example.com/marketing";
      break;
    case "UI/UX":
      answer =
        "UI/UX Workshop: Explore user interface and user experience design principles. For more details,";
      link = "https://example.com/ui-ux";
      break;
    case "Machine Learning":
      answer =
        "Machine Learning Workshop: Get hands-on with algorithms and models. For more details,";
      link = "https://example.com/machine-learning";
      break;
    case "Cyber Security":
      answer =
        "Cyber Security Workshop: Gain insights into protecting systems and networks. For more details,";
      link = "https://example.com/cyber-security";
      break;
    case "Chat with Us":
      answer = "You can chat with us online. For more details,";
      link = "https://example.com/chat";
      break;
    case "Talk over Call":
      answer = "You can talk to us over a call. For more details,";
      link = "https://example.com/call";
      break;
    case "Email Us":
      answer = "You can email us for more information. For more details,";
      link = "https://example.com/email";
      break;
    default:
      answer = "";
  }

  setMessages((prevMessages) => [
    ...prevMessages,
    { sender: "You", text: subOption, type: "user-message" },
    ...(answer
      ? [
          {
            sender: "Chatbot",
            text: `${answer} <a href="${link}" target="_blank">click here.</a>`,
            type: "chatbot-message",
          },
        ]
      : []),
  ]);
};
