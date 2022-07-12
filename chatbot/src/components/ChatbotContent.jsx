import React, { useState } from "react";
import Message from "./Message";
import Loading from "./Loading";

const chatMessages = [
  {
    id: 1,
    actor: "user",
    type: "text",
    content: {
      text: "Hello",
    },
  },
  {
    id: 2,
    actor: "bot",
    type: "text",
    content: {
      text: "Good Morning",
    },
  },
  {
    id: 3,
    actor: "bot",
    type: "card",
    content: {
      text: "Have you already checked latest news?",
      image:
        "https://media.istockphoto.com/photos/villefranche-on-sea-in-evening-picture-id1145618475?k=20&m=1145618475&s=612x612&w=0&h=_mC6OZt_eWENYUAZz3tLCBTU23uvx5beulDEZHFLsxI=",
      link: "https://nytimes.com/news",
    },
  },
  {
    id: 4,
    actor: "bot",
    type: "image",
    content: {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC_zqOhM-xbA6kgBlpbx0JqRAs2DKMt1LI6w&usqp=CAU",
    },
  },
  {
    id: 5,
    actor: "bot",
    type: "link",
    content: {
      link: "https://nytimes.com/news",
    },
  },
];

const ChatbotContent = () => {
  const [messages, setMessages] = useState(chatMessages);

  console.log(setMessages);

  // useEffect(() => {
  //   function loadWelcomeMessage() {
  //     setMessages([
  //       <Message
  //         key="0"
  //         actor="bot"
  //         type="text"
  //         content={{ text: "Welcome to chatbot" }}
  //       />,
  //     ]);
  //   }
  //   loadWelcomeMessage();
  //   console.log(messages);
  // }, []);

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
      {/* <Message
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
      <Loading time={2} /> */}
    </div>
  );
};

export default ChatbotContent;
