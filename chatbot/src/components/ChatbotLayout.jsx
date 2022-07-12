import React, { useState } from "react";
import ChatbotContent from "./ChatbotContent";
import ChatbotFooter from "./ChatbotFooter";
import ChatbotHeader from "./ChatbotHeader";
import MessageDate from "./MessageDate";

const chatMessages = [
  {
    id: 1,
    actor: "user",
    type: "text",
    content: {
      text: "Hello",
    },
  },
  {
    id: 2,
    actor: "bot",
    type: "text",
    content: {
      text: "Good Morning",
    },
  },
  {
    id: 3,
    actor: "bot",
    type: "card",
    content: {
      text: "Have you already checked latest news?",
      image:
        "https://media.istockphoto.com/photos/villefranche-on-sea-in-evening-picture-id1145618475?k=20&m=1145618475&s=612x612&w=0&h=_mC6OZt_eWENYUAZz3tLCBTU23uvx5beulDEZHFLsxI=",
      link: "https://nytimes.com/news",
    },
  },
  {
    id: 4,
    actor: "bot",
    type: "image",
    content: {
      image:
        "https://www.incimages.com/uploaded_files/image/1920x1080/getty_912592258_366180.jpg",
    },
  },
  {
    id: 5,
    actor: "bot",
    type: "link",
    content: {
      link: "https://nytimes.com/news",
    },
  },
];

const ChatbotLayout = () => {
  const [messages, setMessages] = useState(chatMessages);

  const send = (message) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        id: prevMessages.length + 1,
        actor: "user",
        type: "text",
        content: {
          text: message,
        },
      },
    ]);
  };

  const voice = (message) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        id: prevMessages + 2,
        actor: "user",
        type: "text",
        content: {
          text: message,
        },
      },
    ]);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-neutral-200 overflow-hidden">
      <div className="relative max-w-3xl w-[768px] h-screen bg-white font-urbanist font-medium tracking-wider overflow-hidden shadow-lg">
        <ChatbotHeader />
        <MessageDate />

        <ChatbotContent messages={messages} />

        <ChatbotFooter onSend={send} onVoice={voice} />
      </div>
    </div>
  );
};

export default ChatbotLayout;
