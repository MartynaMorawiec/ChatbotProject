import React from "react";
import Message from "./Message";
import Loading from "./Loading";

const chatMessages = [
  {
    id: 1,
    actor: "user",
    content: {
      text: "Hello",
    },
  },
  {
    id: 2,
    actor: "bot",
    content: {
      text: "Good Morning",
    },
  },
  {
    id: 3,
    actor: "bot",
    content: {
      text: "Have you already checked latest news?",
      image:
        "https://media.istockphoto.com/photos/villefranche-on-sea-in-evening-picture-id1145618475?k=20&m=1145618475&s=612x612&w=0&h=_mC6OZt_eWENYUAZz3tLCBTU23uvx5beulDEZHFLsxI=",
      link: "https://nytimes.com/news",
    },
  },
];

const ChatbotContent = () => {
  // const [messages, setMessages] = useState([]);
  return (
    <div className="max-h-[calc(100vh-270px)] mt-[185px] mb-[100px] space-y-4 overflow-auto">
      <Message
        actor={chatMessages[1].actor}
        type="text"
        content={{ text: chatMessages[1].content.text }}
      />
      <Loading time={2} />
      <Message
        actor={chatMessages[0].actor}
        type="text"
        content={{ text: chatMessages[0].content.text }}
      />
      <Message
        actor={chatMessages[2].actor}
        type="card"
        content={{
          image: chatMessages[2].content.image,
          text: chatMessages[2].content.text,
          link: chatMessages[2].content.link,
        }}
      />
      <Message
        actor={chatMessages[2].actor}
        type="image"
        content={{
          image: chatMessages[2].content.image,
        }}
      />
      <Message
        actor={chatMessages[2].actor}
        type="link"
        content={{
          link: chatMessages[2].content.link,
        }}
      />
      <Loading time={2} />
    </div>
  );
};

export default ChatbotContent;
