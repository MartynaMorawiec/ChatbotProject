import { v4 as uuidv4 } from "uuid";
export const unclearQuestion = [
  "Please ask a question again. 🙂",
  "Sorry, I dont't understand that. 🤭",
  "What did you say? 🤔",
  "Sorry, I dont't understand what you mean. 🙄",
  "Sorry, I don't get it. 🤨 Try again. 😉",
];
export const greetings = [
  "Hello 👋 ",
  "Hi 🙂",
  "Yo 🤘",
  "Hey 😃",
  "Sup 😄",
  "What's up? 😉",
];
export const goodbye = [
  "Goodbye 👋",
  "Bye ✋",
  "Adios 💋",
  "Bye bye 👋 ",
  "Hasta la vista 👀",
];
export const welcomeMessage = {
  id: uuidv4(),
  actor: "bot",
  type: "text",
  content: {
    text: `Hello 👋 , welcome to chatbot. 
    You can ask me about current weather in any city 🌤, 
    latest news 📰 , YouTube videos 🎥
    or I can simply send you a GIF message 😉.`,
    time: Date.now(),
  },
};
export const responseNotFound = {
  giphy: "🔍 I can't find this GIF 🎞. Try again 😉",
  city: "🔍 I can't find this city 🌆. Ask again. 🙂",
  news: "🔍 I can't find any news 🗞️ . Try again. 😉",
  movie: "🔍 I can't find a YouTube movie 🎦. Try again. 😉",
};
