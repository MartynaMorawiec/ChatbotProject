import React from "react";
import ChatbotContent from "./ChatbotContent";
import ChatbotFooter from "./ChatbotFooter";
import ChatbotHeader from "./ChatbotHeader";
import MessageDate from "./MessageDate";

const ChatbotLayout = () => {
  return (
    <div className="p-1 flex justify-center h-screen bg-neutral-100 overflow-hidden">
      <div className="max-w-3xl border-2 border-neutral-200 relative rounded-lg overflow-hidden bg-white h-screen">
        <ChatbotHeader />
        <MessageDate />

        <ChatbotContent />

        <ChatbotFooter />
      </div>
    </div>
  );
};

export default ChatbotLayout;
