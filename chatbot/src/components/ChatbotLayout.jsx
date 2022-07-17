import React, { useState, useEffect } from "react";
import ChatbotContent from "./ChatbotContent";
import ChatbotFooter from "./ChatbotFooter";
import ChatbotHeader from "./ChatbotHeader";
import MessageDate from "./MessageDate";
// import moment from "moment";

const chatMessages = [
  {
    id: 1,
    actor: "user",
    type: "text",
    time: Date.now(),
    content: {
      text: "Hello",
    },
  },
  {
    id: 2,
    actor: "bot",
    type: "text",
    time: Date.now(),
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
        "https://www.incimages.com/uploaded_files/image/1920x1080/getty_912592258_366180.jpg",
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

const u = `&q=${"Madrid"}`;
const URL = "http://api.weatherapi.com/v1/current.json?key=";

fetch(URL + import.meta.env.VITE_WEATHER_API_KEY + u)
  .then((res) => res.json())
  .then((res) => console.log(res));

const ChatbotLayout = () => {
  const [messages, setMessages] = useState(chatMessages);
  const [loading, setLoading] = useState(false);
  const [witData, setWitData] = useState("");

  const uri = "https://api.wit.ai/message?v=20220717&q=";

  useEffect(() => {
    chatbotMessage();
    fetchWitData();
  }, [messages]);

  console.log("witdata:", witData.entities);

  const fetchWitData = () => {
    if (messages.length && messages[messages.length - 1].actor === "user") {
      const q = encodeURIComponent(messages[messages.length - 1].content.text);
      fetch(uri + q, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_WIT_API_KEY}`,
        },
      })
        .then((res) => res.json())
        .then((res) => setWitData(res));
      // console.log(messages[messages.length - 1].content.text);
    }
  };

  const chatbotMessage = () => {
    if (messages.length && messages[messages.length - 1].actor === "user") {
      setTimeout(() => {
        setMessages((prevMessages) => {
          return [
            ...prevMessages,
            {
              id: prevMessages.length + 100,
              actor: "bot",
              type: "text",
              time: Date.now(),
              content: {
                text: "Lorem ipsum",
              },
            },
          ];
        });
        setLoading(false);
      }, 2000);
      setLoading(true);
    }
  };

  const send = (message) => {
    if (message !== "") {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          id: prevMessages.length + 1,
          actor: "user",
          type: "text",
          time: Date.now(),
          content: {
            text: message,
          },
        },
      ]);
    }
  };

  const voice = (message) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        id: prevMessages.length + 200,
        actor: "user",
        type: "text",
        time: Date.now(),
        content: {
          text: message,
        },
      },
    ]);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-neutral-200 overflow-hidden">
      <div className="relative max-w-3xl w-[768px] h-screen bg-white font-urbanist font-medium tracking-wider overflow-hidden shadow-lg">
        <ChatbotHeader />
        <MessageDate />

        <ChatbotContent messages={messages} loading={loading} />

        <ChatbotFooter onSend={send} onVoice={voice} />
      </div>
    </div>
  );
};

export default ChatbotLayout;
