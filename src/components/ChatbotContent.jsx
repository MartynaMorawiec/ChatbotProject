import React, { useRef, useEffect } from "react";
import Message from "./Message";
import PropTypes from "prop-types";
import Loading from "./Loading";

const ChatbotContent = ({ messages, loading }) => {
  const element = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      element.current.scrollIntoView({ block: "end", behavior: "smooth" });
    }, 100);
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
      <div>{loading && <Loading />}</div>
      <div id={"el"} ref={element}></div>
    </div>
  );
};

ChatbotContent.propTypes = {
  messages: PropTypes.array,
  loading: PropTypes.bool,
};

export default ChatbotContent;
