import { v4 as uuidv4 } from "uuid";

export const checkIsGifMessage = (messages) => {
  return ["gif", "giphy", "meme", "GIF"].includes(
    messages[messages.length - 1].content.text.split(" ")[0]
  );
};
export const checkIsYoutubeMessage = (messages) => {
  return ["youtube", "video"].includes(
    messages[messages.length - 1].content.text.split(" ")[0]
  );
};
export const checkIsMessageFromUser = (messages) => {
  return messages?.length && messages?.[messages.length - 1]?.actor === "user";
};
export const checkWitEntities = (witData, intentsName, entitiesName) => {
  return (
    witData?.intents[0]?.name === intentsName &&
    witData?.entities?.[entitiesName]
  );
};
export const checkWitTraits = (witData, intentsName, traitsName) => {
  return (
    witData?.intents[0]?.name === intentsName && witData?.traits?.[traitsName]
  );
};
export const getMessageQuery = (messages) => {
  return messages[messages.length - 1].content.text
    .split(" ")
    .slice(1)
    .join(" ");
};
export const randomResponse = (response) =>
  response[Math.floor(Math.random() * response.length)];

export const chatbotResponse = (setMessages, setLoading, type, content) => {
  setTimeout(() => {
    setMessages((prevMessages) => {
      return [
        ...prevMessages,
        {
          id: uuidv4(),
          actor: "bot",
          type: type,
          content: content,
        },
      ];
    });
    setLoading(false);
  }, 2000);

  setLoading(true);
};

export const userMessage = (setMessages, message) => {
  setMessages((prevMessages) => [
    ...prevMessages,
    {
      id: uuidv4(),
      actor: "user",
      type: "text",
      content: {
        text: message,
        time: Date.now(),
      },
    },
  ]);
};
