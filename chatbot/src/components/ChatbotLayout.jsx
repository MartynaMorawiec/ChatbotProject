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
  YOUTUBE_API_URL,
} from "../api/constantsAPI";

const ChatbotLayout = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [witData, setWitData] = useState(null);
  const [weather, setWeather] = useState(null);
  const [gif, setGif] = useState(null);
  const [news, setNews] = useState(null);
  const [youtube, setYoutube] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setMessages([welcomeMessage]);
      setLoading(false);
    }, 2000);

    setLoading(true);
  }, []);

  useEffect(() => {
    if (checkIsMessageFromUser(messages)) {
      if (checkIsGifMessage(messages)) return fetchGiphyData();
      if (checkIsYoutubeMessage(messages)) return fetchYoutubeData();
      if (!checkIsGifMessage(messages) && !checkIsYoutubeMessage(messages)) {
        fetchWitData(messages[messages.length - 1].content.text).then((res) =>
          setWitData(res)
        );
      }
    }
  }, [messages]);

  useEffect(() => {
    if (checkWitEntities(witData, "wit$get_weather", "wit$location:location")) {
      fetchWeatherData();
    } else if (checkWitEntities(witData, "get_news", "news:news")) {
      fetchNewsData();
    } else if (checkWitTraits(witData, "greeting", "wit$greetings")) {
      chatbotMessage(randomResponse(greetings));
    } else if (checkWitTraits(witData, "bye", "wit$bye")) {
      chatbotMessage(randomResponse(goodbye));
    } else if (checkIsMessageFromUser(messages)) {
      chatbotMessage(randomResponse(unclearQuestion));
    }
  }, [witData]);

  useEffect(() => {
    if (checkIsMessageFromUser(messages) && weather) {
      chatbotWeatherMessage();
    }
  }, [weather]);

  useEffect(() => {
    if (checkIsMessageFromUser(messages)) {
      if (gif?.data?.length) return chatbotGiphyMessage();
      return chatbotMessage(responseNotFound.giphy);
    }
  }, [gif]);

  useEffect(() => {
    if (checkIsMessageFromUser(messages) && news) {
      chatbotNewsMessage();
    }
  }, [news]);

  useEffect(() => {
    if (checkIsMessageFromUser(messages) && youtube) {
      chatbotYoutubeMessage();
    }
  }, [youtube]);

  const fetchWeatherData = () => {
    const query = `&q=${witData?.entities?.["wit$location:location"]?.[0]?.body}`;
    fetch(`${WEATHER_API_URL}${import.meta.env.VITE_WEATHER_API_KEY}${query}`)
      .then((res) => {
        if (res.status === 400) {
          chatbotMessage(responseNotFound.city);
          return;
        }
        return res.json();
      })
      .then((res) => setWeather(res))
      .catch(() => {});
  };

  const fetchGiphyData = () => {
    fetch(
      `${GIPHY_API_URL}${
        import.meta.env.VITE_GIPHY_API_KEY
      }&q=${getMessageQuery(messages)}
      }`
    )
      .then((res) => {
        if (res.status === 400) {
          chatbotMessage(responseNotFound.giphy);
          return;
        }
        return res.json();
      })
      .then((res) => setGif(res));
  };

  const fetchNewsData = () => {
    fetch(`${NEWS_API_URL}${import.meta.env.VITE_NEWS_API_KEY}`)
      .then((res) => {
        if (res.status === 400) {
          chatbotMessage(responseNotFound.news);
          return;
        }
        return res.json();
      })
      .then((res) => setNews(res));
  };

  const fetchYoutubeData = () => {
    fetch(
      `${YOUTUBE_API_URL}${
        import.meta.env.VITE_YOUTUBE_API_KEY
      }&part=snippet&q=${getMessageQuery(messages)}`
    )
      .then((res) => {
        if (res.status === 400) {
          chatbotMessage(responseNotFound.movie);
          return;
        }
        return res.json();
      })
      .then((res) => setYoutube(res));
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

  const chatbotMessage = (message) => {
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
              text: message,
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
              image: randomResponse(gif?.data)?.images?.fixed_height?.url,
            },
          },
        ];
      });
      setLoading(false);
    }, 2000);

    setLoading(true);
  };

  const chatbotYoutubeMessage = () => {
    setTimeout(() => {
      setMessages((prevMessages) => {
        return [
          ...prevMessages,
          {
            id: uuidv4(),
            actor: "bot",
            type: "youtube",
            content: {
              video: `https://www.youtube.com/embed/${
                randomResponse(youtube?.items)?.id?.videoId
              }`,
            },
          },
        ];
      });
      setLoading(false);
    }, 2000);

    setLoading(true);
  };
  const chatbotNewsMessage = () => {
    const article = randomResponse(news?.articles);
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
  return ["gif", "giphy", "meme"].includes(
    messages[messages.length - 1].content.text.split(" ")[0]
  );
};
const checkIsYoutubeMessage = (messages) => {
  return ["youtube", "video"].includes(
    messages[messages.length - 1].content.text.split(" ")[0]
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
const getMessageQuery = (messages) => {
  return messages[messages.length - 1].content.text
    .split(" ")
    .slice(1)
    .join(" ");
};
const randomResponse = (response) =>
  response[Math.floor(Math.random() * response.length)];

const unclearQuestion = [
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
const welcomeMessage = {
  id: uuidv4(),
  actor: "bot",
  type: "text",
  time: Date.now(),
  content: {
    text: `Hello 👋 , welcome to chatbot. 
    You can ask me about current weather in any city 🌤, 
    latest news 📰 , YouTube videos 🎥
    or I can simply send you a GIF message 😉.`,
  },
};
const responseNotFound = {
  giphy: "🔍 I can't find this GIF 🎞. Try again 😉",
  city: "🔍 I can't find this city 🌆. Ask again. 🙂",
  news: "🔍 I can't find any news 🗞️ . Try again. 😉",
  movie: "🔍 I can't find a YouTube movie 🎦. Try again. 😉",
};

export default ChatbotLayout;
