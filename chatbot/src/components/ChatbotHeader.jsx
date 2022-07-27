import React from "react";

const ChatbotHeader = () => {
  return (
    <header className="absolute top-0 flex items-center w-full h-[120px] pl-12 bg-gradient-to-br from-secondary via-secondary to-primary">
      <img
        src="./src/assets/botSmile.png"
        className="w-16 mr-5"
        data-testid="logochatbot"
      />
      <h2 className="text-3xl text-white font-bold tracking-wider">Chatbot</h2>
    </header>
  );
};

export default ChatbotHeader;
