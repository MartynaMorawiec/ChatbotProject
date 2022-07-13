import React, { useRef, useEffect } from "react";
import Message from "./Message";
import Loading from "./Loading";
import PropTypes from "prop-types";

const ChatbotContent = ({ messages, fetchMessage }) => {
  const element = useRef(null);
  console.log(fetchMessage);

  useEffect(() => {
    element.current.scrollIntoView({ block: "end", behavior: "smooth" });
  });

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
      <div id={"el"} ref={element}></div>
    </div>
  );
};

ChatbotContent.propTypes = {
  messages: PropTypes.any,
  fetchMessage: PropTypes.func,
};

export default ChatbotContent;
