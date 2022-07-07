import React from "react";
import Message from "./Message";
import Loading from "./Loading";

const ChatbotContent = () => {
  return (
    <div className="relative max-h-[65%] md:max-h-[70%] overflow-auto space-y-4">
      <Message />
      <Loading />
      <Message />
      <Loading />
      <Message />
      <Loading />
      <Message />
      <Loading />
      <Message />
      <Message />
    </div>
  );
};

export default ChatbotContent;
