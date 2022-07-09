import React from "react";

const ChatbotHeader = () => {
  return (
    <header className="w-full absolute top-0 bg-gradient-to-br from-secondary via-secondary to-primary h-[120px] flex items-center pl-12">
      <img src="./src/assets/botSmile.png" className="w-16 mr-5" />
      <h2 className="text-3xl text-white font-bold tracking-wider">Chatbot</h2>
    </header>
  );
};

export default ChatbotHeader;
