import React from "react";

const ChatbotHeader = () => {
  return (
    <header className="bg-blue-500 h-[120px] flex items-center pl-12">
      <img src="./src/assets/chat.png" className="w-20 mr-4" />
      <h2 className="text-3xl text-white font-bold tracking-wider">Chatbot</h2>
    </header>
  );
};

export default ChatbotHeader;
