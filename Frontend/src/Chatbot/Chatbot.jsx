import React, { useState, useEffect, useRef } from "react";
import "./Chatbot.css";
import parse from "html-react-parser";
import {
  renderWelcomeOptions,
  renderOptions,
  renderMoreOptions,
} from "./ChatOption";
import { handleOptionClick, handleSubOptionClick } from "./ChatSubOptions";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const chatBodyRef = useRef(null);

  const askQuestion = async () => {
    const question = userInput;
    setUserInput("");
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "You", text: question, type: "user-message" },
      { sender: "Chatbot", text: "typing...", type: "typing-message" },
    ]);

    try {
      const response = await fetch("http://localhost:3001/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      let answer = "";
      let showOptions = false;

      if (Array.isArray(data.answer)) {
        answer = data.answer.join("<br>");
      } else {
        answer =
          data.answer || "Sorry, I couldn't find an answer to your question.";
        if (data.responseType === "unrecognized") {
          answer =
            "I don't understand that question. Please try asking something else or you can click on the options below.";
          showOptions = true;
        }
      }

      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages.filter((msg) => msg.text !== "typing..."),
          { sender: "Chatbot", text: answer, type: "chatbot-message" },
          ...(showOptions
            ? [
                {
                  sender: "Chatbot",
                  text: renderOptions(),
                  type: "chatbot-options",
                },
              ]
            : []),
        ]);
      }, 1000);
    } catch (error) {
      console.error("Failed to fetch", error);
      setMessages((prevMessages) => [
        ...prevMessages.filter((msg) => msg.text !== "typing..."),
        {
          sender: "Chatbot",
          text: "Failed to fetch response.",
          type: "chatbot-message",
        },
      ]);
    }
  };

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  const handleInputChange = (e) => setUserInput(e.target.value);
  const handleToggleChatbot = () => {
    if (isOpen) {
      setMessages([]);
    } else {
      setMessages([
        {
          sender: "Chatbot",
          text: "Welcome! How may we assist you today?",
          type: "chatbot-message",
        },
        { text: renderWelcomeOptions(), type: "chatbot-options" },
      ]);
    }
    setIsOpen(!isOpen);
  };

  const handleShowMoreOptions = () => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "Chatbot", text: renderMoreOptions(), type: "chatbot-options" },
    ]);
  };

  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (e.target.classList.contains("option-button")) {
        const option = e.target.getAttribute("data-option");
        if (option === "more") {
          handleShowMoreOptions();
        } else {
          handleOptionClick(option, setMessages);
        }
      } else if (e.target.classList.contains("option-item")) {
        const subOption = e.target.getAttribute("data-sub-option");
        handleSubOptionClick(subOption, setMessages);
      }
    };

    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <div className="main-container">
      {isOpen && (
        <div className="chat-container">
          <div className="chat-header ">
            <div className="chat-title ml-5">Hubnex Educate</div>
            <button
              className=" text-[2.5rem]  px-5"
              onClick={handleToggleChatbot}
            >
              ×
            </button>
          </div>
          <div className="chat-body" id="chat-body" ref={chatBodyRef}>
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.type}`}>
                <strong>{msg.sender}:</strong> {parse(msg.text)}
              </div>
            ))}
          </div>
          <div className="chat-footer">
            <input
              type="text"
              value={userInput}
              onChange={handleInputChange}
              autoComplete="off"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  askQuestion();
                }
              }}
              placeholder="Type your message here..."
              id="user-input"
            />
            <button id="send-button" onClick={askQuestion}>
              Send
            </button>
          </div>
        </div>
      )}
      {!isOpen && (
        <button
          id="toggle-chatbot"
          className="fixed  md:top-[39.5rem] "
          onClick={handleToggleChatbot}
        >
          How may we help you?
        </button>
      )}
    </div>
  );
};

export default Chatbot;
