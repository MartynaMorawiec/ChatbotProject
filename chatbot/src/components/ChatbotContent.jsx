import React from "react";
import Message from "./Message";
import Loading from "./Loading";
import PropTypes from "prop-types";

const ChatbotContent = ({ messages }) => {
  return (
    <div className="max-h-[calc(100vh-270px)] mt-[185px] mb-[100px] space-y-4 overflow-auto">
      {messages.map((message) => (
        <Message
          key={message.id}
          type={message.type}
          actor={message.actor}
          content={message.content}
        />
      ))}
      <Loading />
    </div>
  );
};

ChatbotContent.propTypes = {
  messages: PropTypes.any,
};

export default ChatbotContent;
