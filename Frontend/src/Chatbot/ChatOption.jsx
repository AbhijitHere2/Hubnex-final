import "./Chatbot.css";

export const renderWelcomeOptions = () => {
  return `
    <div class="welcome-message">
      <h4>Where would you like to chat?</h4>
      <div class="chat-options">
        <button class="option-button" data-option="WhatsApp">
          <img src="whatsapp.png" alt="WhatsApp" />
          <span class="button-label">WhatsApp</span>
        </button>
        <button class="option-button" data-option="Telegram">
          <img class="telegram-logo" src="telegram2.png" alt="Telegram" />
          <span class="button-label">Telegram</span>
        </button>
        <button class="option-button" data-option="Message">
          <img src="message.jpeg" alt="Message" />
          <span class="button-label">Message</span>
        </button>
        <button class="option-button" data-option="Slack">
          <img src="slack2.png" alt="Slack" />
          <span class="button-label">Slack</span>
        </button>
      </div>
    </div>
  `;
};

export const renderOptions = () => {
  return `
    <div class="options">
      <button class="option-button" data-option="Customer Executive">Customer Executive</button>
      <button class="option-button" data-option="more">Do you want to know more about?</button>
    </div>
  `;
};

export const renderMoreOptions = () => {
  return `
    <div class="options">
      <button class="option-button" data-option="Domain">Domain</button>
      <button class="option-button" data-option="Career Guidance">Career Guidance</button>
      <button class="option-button" data-option="Services">Services</button>
      <button class="option-button" data-option="workshop date">workshop date</button>
      <button class="option-button" data-option="Blog">Blog</button>
      <button class="option-button" data-option="Newsletter">Newsletter</button>
    </div>
  `;
};
