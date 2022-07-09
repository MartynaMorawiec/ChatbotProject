import React from "react";
import ChatbotContent from "./ChatbotContent";
import ChatbotFooter from "./ChatbotFooter";
import ChatbotHeader from "./ChatbotHeader";
import MessageDate from "./MessageDate";

const ChatbotLayout = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-neutral-200 overflow-hidden">
      <div className="relative max-w-3xl w-[768px] h-screen bg-white font-urbanist font-medium tracking-wider overflow-hidden shadow-lg">
        <ChatbotHeader />
        <MessageDate />

        <ChatbotContent />

        <ChatbotFooter />
      </div>
    </div>
  );
};

export default ChatbotLayout;
