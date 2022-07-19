import React, { useState, useEffect } from "react";
import ChatbotContent from "./ChatbotContent";
import ChatbotFooter from "./ChatbotFooter";
import ChatbotHeader from "./ChatbotHeader";
import MessageDate from "./MessageDate";
import { v4 as uuidv4 } from "uuid";

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

const WEATHER_API_URL = "http://api.weatherapi.com/v1/current.json?key=";
const WIT_AI_URL = "https://api.wit.ai/message?v=20220717&q=";
const GIPHY_API_URL = "https://api.giphy.com/v1/gifs/search?api_key=";
const NEWS_API_URL = "https://gnews.io/api/v4/search?q=example&token=";

const ChatbotLayout = () => {
  const [messages, setMessages] = useState(chatMessages);
  const [loading, setLoading] = useState(false);
  const [witData, setWitData] = useState(null);
  const [weather, setWeather] = useState(null);
  const [gif, setGif] = useState(null);
  const [news, setNews] = useState(null);

  useEffect(() => {
    const fetchWitData = () => {
      const q = encodeURIComponent(messages[messages.length - 1].content.text);

      fetch(WIT_AI_URL + q, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_WIT_API_KEY}`,
        },
      })
        .then((res) => res.json())
        .then((res) => setWitData(res));
    };
    if (
      messages.length &&
      messages[messages.length - 1].actor === "user" &&
      !(
        messages[messages.length - 1].content.text.split(" ")[0] === "gif" ||
        messages[messages.length - 1].content.text.split(" ")[0] === "giphy" ||
        messages[messages.length - 1].content.text.split(" ")[0] === "meme"
      )
    ) {
      fetchWitData();
    }
    if (
      messages.length &&
      messages[messages.length - 1].actor === "user" &&
      (messages[messages.length - 1].content.text.split(" ")[0] === "gif" ||
        messages[messages.length - 1].content.text.split(" ")[0] === "giphy" ||
        messages[messages.length - 1].content.text.split(" ")[0] === "meme")
    ) {
      fetchGiphyData();
    }
  }, [messages]);

  useEffect(() => {
    if (
      witData?.intents[0]?.name === "wit$get_weather" &&
      witData?.entities?.["wit$location:location"]
    ) {
      fetchWeatherData();
    } else if (
      witData?.intents[0]?.name === "get_news" &&
      witData?.entities?.["news:news"]
    ) {
      fetchNewsData();
    } else if (
      witData?.intents[0]?.name === "greeting" &&
      witData?.traits["wit$greetings"]
    ) {
      chatbotGreetingMessage();
    } else if (
      witData?.intents[0]?.name === "bye" &&
      witData?.traits["wit$bye"]
    ) {
      chatbotGoodbyeMessage();
    } else if (
      messages.length &&
      messages[messages.length - 1].actor === "user"
    ) {
      chatbotMessage();
    }
  }, [witData]);

  useEffect(() => {
    if (
      messages.length &&
      messages[messages.length - 1].actor === "user" &&
      weather
    ) {
      chatbotWeatherMessage();
    }
  }, [weather]);

  useEffect(() => {
    if (
      messages.length &&
      messages[messages.length - 1].actor === "user" &&
      gif
    ) {
      chatbotGiphyMessage();
    }
  }, [gif]);

  useEffect(() => {
    if (
      messages.length &&
      messages[messages.length - 1].actor === "user" &&
      news
    ) {
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
    console.log(
      "giphy text " + messages[messages.length - 1].content.text.split(" ")[1]
    );
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
    const answer = [
      "Please ask a question again. 🙂",
      "Sorry, I dont't understand that. 🤭",
      "What did you say? 🤔",
      "Sorry, I dont't understand what you mean. 🙄",
      "Sorry, I don't get it. 🤨  Try again. 😉",
    ];
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
    const greetings = [
      "Hello 👋 ",
      "Hi 🙂",
      "Yo 🤘",
      "Hey 😃",
      "Sup 😄",
      "What's up? 😉",
    ];
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
    const goodbye = [
      "Goodbye 👋",
      "Bye ✋",
      "Adios 💋",
      "Bye bye 👋 ",
      "Hasta la vista 👀",
    ];
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
                gif.data[Math.floor(Math.random() * gif.data.length)].images
                  .fixed_height.url,
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
      news.articles[Math.floor(Math.random() * news.articles.length)];
    setTimeout(() => {
      setMessages((prevMessages) => {
        return [
          ...prevMessages,
          {
            id: uuidv4(),
            actor: "bot",
            type: "card",
            content: {
              text: article.title,
              image: article.image,
              link: article.url,
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

export default ChatbotLayout;
