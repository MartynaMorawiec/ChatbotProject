import React, { useState, useEffect } from "react";
import ChatbotContent from "./ChatbotContent";
import ChatbotFooter from "./ChatbotFooter";
import ChatbotHeader from "./ChatbotHeader";
import MessageDate from "./MessageDate";
import {
  WEATHER_API_URL,
  GIPHY_API_URL,
  NEWS_API_URL,
  YOUTUBE_API_URL,
} from "../app/constantsURL";
import { fetchData, fetchWitData } from "../app/getData";
import {
  checkIsGifMessage,
  checkIsYoutubeMessage,
  checkIsMessageFromUser,
  checkWitEntities,
  checkWitTraits,
  getMessageQuery,
  randomResponse,
  chatbotResponse,
  userMessage,
} from "../app/chatbotLayoutFunc";
import {
  unclearQuestion,
  greetings,
  goodbye,
  welcomeMessage,
  responseNotFound,
  newsImage,
} from "../app/chatbotLayoutConst";

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
    const fullUrl = `${WEATHER_API_URL}${
      import.meta.env.VITE_WEATHER_API_KEY
    }${query}`;

    fetchData(fullUrl, chatbotMessage, responseNotFound.city, setWeather);
  };

  const fetchGiphyData = () => {
    const fullUrl = `${GIPHY_API_URL}${
      import.meta.env.VITE_GIPHY_API_KEY
    }&q=${getMessageQuery(messages)}
    `;

    fetchData(fullUrl, chatbotMessage, responseNotFound.giphy, setGif);
  };

  const fetchNewsData = () => {
    const fullUrl = `${NEWS_API_URL}${
      import.meta.env.VITE_NEWS_API_KEY
    }&language=en&country=us&category=politics,world`;

    fetchData(fullUrl, chatbotMessage, responseNotFound.news, setNews);
  };

  const fetchYoutubeData = () => {
    const fullUrl = `${YOUTUBE_API_URL}${
      import.meta.env.VITE_YOUTUBE_API_KEY
    }&part=snippet&q=${getMessageQuery(messages)}`;

    fetchData(fullUrl, chatbotMessage, responseNotFound.movie, setYoutube);
  };

  const chatbotWeatherMessage = () => {
    chatbotResponse(setMessages, setLoading, "weather", {
      text: weather,
      time: Date.now(),
    });
  };

  const chatbotMessage = (message) => {
    chatbotResponse(setMessages, setLoading, "text", {
      text: message,
      time: Date.now(),
    });
  };

  const chatbotGiphyMessage = () => {
    chatbotResponse(setMessages, setLoading, "image", {
      image: randomResponse(gif?.data)?.images?.fixed_height?.url,
    });
  };

  const chatbotYoutubeMessage = () => {
    chatbotResponse(setMessages, setLoading, "youtube", {
      video: `https://www.youtube.com/embed/${
        randomResponse(youtube?.items)?.id?.videoId
      }`,
    });
  };
  const chatbotNewsMessage = () => {
    const article = randomResponse(news?.results);
    chatbotResponse(setMessages, setLoading, "card", {
      text: article?.title,
      image: article?.image_url ? article?.image_url : newsImage,
      link: article?.link,
    });
  };

  const send = (message) => {
    if (message !== "") {
      userMessage(setMessages, message);
    }
  };

  const voice = (message) => {
    userMessage(setMessages, message);
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
