import React, { useState, useEffect } from "react";
import ChatbotContent from "./ChatbotContent";
import ChatbotFooter from "./ChatbotFooter";
import ChatbotHeader from "./ChatbotHeader";
import MessageDate from "./MessageDate";
import { v4 as uuidv4 } from "uuid";
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

const URL = "http://api.weatherapi.com/v1/current.json?key=";

const URI = "https://api.wit.ai/message?v=20220717&q=";

const ChatbotLayout = () => {
  const [messages, setMessages] = useState(chatMessages);
  const [loading, setLoading] = useState(false);
  const [witData, setWitData] = useState(null);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetchWitData();
    fetchWeatherData();
    chatbotMessage();
  }, [messages, witData, setWeather]);

  const fetchWitData = () => {
    if (messages.length && messages[messages.length - 1].actor === "user") {
      const q = encodeURIComponent(messages[messages.length - 1].content.text);
      console.log("messages " + messages[messages.length - 1].content.text);
      fetch(URI + q, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_WIT_API_KEY}`,
        },
      })
        .then((res) => res.json())
        .then((res) => setWitData(res));
    }
  };

  const fetchWeatherData = () => {
    if (witData?.entities["wit$location:location"]) {
      console.log(
        "witdata:",
        witData?.entities?.["wit$location:location"][0].body
      );
      const u = `&q=${witData.entities?.["wit$location:location"][0].body}`;
      fetch(URL + import.meta.env.VITE_WEATHER_API_KEY + u)
        .then((res) => res.json())
        .then((res) => setWeather(res));
      console.log(weather);
    }
  };

  const chatbotMessage = () => {
    if (
      messages.length &&
      messages[messages.length - 1].actor === "user" &&
      weather
    ) {
      console.log("weather " + weather?.current?.condition?.text);
      setTimeout(() => {
        setMessages((prevMessages) => {
          return [
            ...prevMessages,
            {
              id: uuidv4(),
              actor: "bot",
              type: "weather",
              time: Date.now(),
              content: {
                text: weather,
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
          id: uuidv4(),
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
        id: uuidv4(),
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
