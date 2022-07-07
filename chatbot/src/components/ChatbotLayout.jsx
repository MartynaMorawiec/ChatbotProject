import React from "react";
import ChatbotContent from "./ChatbotContent";
import ChatbotFooter from "./ChatbotFooter";
import ChatbotHeader from "./ChatbotHeader";
import MessageDate from "./MessageDate";

const ChatbotLayout = () => {
  return (
    <div className="flex justify-center h-screen bg-neutral-200 overflow-hidden">
      <div className="max-w-3xl w-[768px] relative overflow-hidden bg-white max-h-screen font-urbanist font-medium tracking-wider shadow-lg">
        <ChatbotHeader />
        <MessageDate />

        <ChatbotContent />

        <ChatbotFooter />
      </div>
    </div>
  );
};

export default ChatbotLayout;
