import React from "react";
import Message from "./Message";
import Loading from "./Loading";

const ChatbotContent = () => {
  return (
    <div className="h-[65%] md:h-[75%] overflow-auto space-y-4 py-4">
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
