import React from "react";
import Message from "./Message";
import Loading from "./Loading";

const ChatbotContent = () => {
  return (
    <div className="max-h-[calc(100vh-270px)] mt-[185px] mb-[100px] overflow-auto space-y-4">
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
