import React, { useState, useEffect } from "react";
import ChatbotContent from "./ChatbotContent";
import ChatbotFooter from "./ChatbotFooter";
import ChatbotHeader from "./ChatbotHeader";
import MessageDate from "./MessageDate";
import { v4 as uuidv4 } from "uuid";
import {
  WEATHER_API_URL,
  WIT_AI_URL,
  GIPHY_API_URL,
  NEWS_API_URL,
} from "../api/constantsAPI";

const answer = [
  "Please ask a question again. 🙂",
  "Sorry, I dont't understand that. 🤭",
  "What did you say? 🤔",
  "Sorry, I dont't understand what you mean. 🙄",
  "Sorry, I don't get it. 🤨 Try again. 😉",
];

const greetings = [
  "Hello 👋 ",
  "Hi 🙂",
  "Yo 🤘",
  "Hey 😃",
  "Sup 😄",
  "What's up? 😉",
];

const goodbye = [
  "Goodbye 👋",
  "Bye ✋",
  "Adios 💋",
  "Bye bye 👋 ",
  "Hasta la vista 👀",
];

const ChatbotLayout = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [witData, setWitData] = useState(null);
  const [weather, setWeather] = useState(null);
  const [gif, setGif] = useState(null);
  const [news, setNews] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setMessages([
        {
          id: uuidv4(),
          actor: "bot",
          type: "text",
          time: Date.now(),
          content: {
            text: `Hello 👋 , welcome to chatbot. 
            You can ask me about current weather 🌤, latest news 📰  
            or I can simply send you a GIF message 😉.`,
          },
        },
      ]);
      setLoading(false);
    }, 2000);

    setLoading(true);
  }, []);

  useEffect(() => {
    if (checkIsMessageFromUser(messages) && !checkIsGifMessage(messages)) {
      fetchWitData(messages[messages.length - 1].content.text).then((res) =>
        setWitData(res)
      );
    } else if (
      checkIsMessageFromUser(messages) &&
      checkIsGifMessage(messages)
    ) {
      fetchGiphyData();
    }
  }, [messages]);

  useEffect(() => {
    if (checkWitEntities(witData, "wit$get_weather", "wit$location:location")) {
      fetchWeatherData();
    } else if (checkWitEntities(witData, "get_news", "news:news")) {
      fetchNewsData();
    } else if (checkWitTraits(witData, "greeting", "wit$greetings")) {
      chatbotGreetingMessage();
    } else if (checkWitTraits(witData, "bye", "wit$bye")) {
      chatbotGoodbyeMessage();
    } else if (checkIsMessageFromUser(messages)) {
      chatbotMessage();
    }
  }, [witData]);

  useEffect(() => {
    if (checkIsMessageFromUser(messages) && weather) {
      chatbotWeatherMessage();
    }
  }, [weather]);

  useEffect(() => {
    if (checkIsMessageFromUser(messages) && gif) {
      chatbotGiphyMessage();
    }
  }, [gif]);

  useEffect(() => {
    if (checkIsMessageFromUser(messages) && news) {
      chatbotNewsMessage();
    }
  }, [news]);

  const fetchWeatherData = () => {
    const u = `&q=${witData.entities?.["wit$location:location"][0].body}`;
    fetch(WEATHER_API_URL + import.meta.env.VITE_WEATHER_API_KEY + u)
      .then((res) => res.json())
      .then((res) => setWeather(res));
  };

  const fetchGiphyData = () => {
    fetch(
      `${GIPHY_API_URL}${import.meta.env.VITE_GIPHY_API_KEY}&q=${
        messages[messages.length - 1].content.text.split(" ")[1]
      }`
    )
      .then((res) => res.json())
      .then((res) => setGif(res));
  };

  const fetchNewsData = () => {
    fetch(`${NEWS_API_URL}${import.meta.env.VITE_NEWS_API_KEY}`)
      .then((res) => res.json())
      .then((res) => setNews(res));
  };

  const chatbotWeatherMessage = () => {
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
  };

  const chatbotMessage = () => {
    setTimeout(() => {
      setMessages((prevMessages) => {
        return [
          ...prevMessages,
          {
            id: uuidv4(),
            actor: "bot",
            type: "text",
            time: Date.now(),
            content: {
              text: answer[Math.floor(Math.random() * answer.length)],
            },
          },
        ];
      });
      setLoading(false);
    }, 2000);

    setLoading(true);
  };

  const chatbotGreetingMessage = () => {
    setTimeout(() => {
      setMessages((prevMessages) => {
        return [
          ...prevMessages,
          {
            id: uuidv4(),
            actor: "bot",
            type: "text",
            time: Date.now(),
            content: {
              text: greetings[Math.floor(Math.random() * greetings.length)],
            },
          },
        ];
      });
      setLoading(false);
    }, 2000);

    setLoading(true);
  };

  const chatbotGoodbyeMessage = () => {
    setTimeout(() => {
      setMessages((prevMessages) => {
        return [
          ...prevMessages,
          {
            id: uuidv4(),
            actor: "bot",
            type: "text",
            time: Date.now(),
            content: {
              text: goodbye[Math.floor(Math.random() * goodbye.length)],
            },
          },
        ];
      });
      setLoading(false);
    }, 2000);

    setLoading(true);
  };

  const chatbotGiphyMessage = () => {
    setTimeout(() => {
      setMessages((prevMessages) => {
        return [
          ...prevMessages,
          {
            id: uuidv4(),
            actor: "bot",
            type: "image",
            content: {
              image:
                gif?.data?.[Math.floor(Math.random() * gif?.data?.length)]
                  ?.images?.fixed_height?.url,
            },
          },
        ];
      });
      setLoading(false);
    }, 2000);

    setLoading(true);
  };

  const chatbotNewsMessage = () => {
    const article =
      news?.articles?.[Math.floor(Math.random() * news?.articles?.length)];
    setTimeout(() => {
      setMessages((prevMessages) => {
        return [
          ...prevMessages,
          {
            id: uuidv4(),
            actor: "bot",
            type: "card",
            content: {
              text: article?.title,
              image: article?.urlToImage,
              link: article?.url,
            },
          },
        ];
      });
      setLoading(false);
    }, 2000);

    setLoading(true);
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

const fetchWitData = (query) => {
  const q = encodeURIComponent(query);

  return fetch(WIT_AI_URL + q, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_WIT_API_KEY}`,
    },
  }).then((res) => res.json());
};

const checkIsGifMessage = (messages) => {
  return (
    messages[messages.length - 1].content.text.split(" ")[0] === "gif" ||
    messages[messages.length - 1].content.text.split(" ")[0] === "giphy" ||
    messages[messages.length - 1].content.text.split(" ")[0] === "meme"
  );
};

const checkIsMessageFromUser = (messages) => {
  return messages?.length && messages?.[messages.length - 1]?.actor === "user";
};

const checkWitEntities = (witData, intentsName, entitiesName) => {
  return (
    witData?.intents[0]?.name === intentsName &&
    witData?.entities?.[entitiesName]
  );
};

const checkWitTraits = (witData, intentsName, traitsName) => {
  return (
    witData?.intents[0]?.name === intentsName && witData?.traits?.[traitsName]
  );
};

export default ChatbotLayout;
