import { v4 as uuidv4 } from "uuid";
export const unclearQuestion = [
  "Please ask a question again. ๐",
  "Sorry, I dont't understand that. ๐คญ",
  "What did you say? ๐ค",
  "Sorry, I dont't understand what you mean. ๐",
  "Sorry, I don't get it. ๐คจ Try again. ๐",
];
export const greetings = [
  "Hello ๐ ",
  "Hi ๐",
  "Yo ๐ค",
  "Hey ๐",
  "Sup ๐",
  "What's up? ๐",
];
export const goodbye = [
  "Goodbye ๐",
  "Bye โ",
  "Adios ๐",
  "Bye bye ๐ ",
  "Hasta la vista ๐",
];
export const welcomeMessage = {
  id: uuidv4(),
  actor: "bot",
  type: "text",
  content: {
    text: `Hello ๐ , welcome to chatbot. 
    You can ask me about current weather in any city ๐ค, 
    latest news ๐ฐ , YouTube videos ๐ฅ
    or I can simply send you a GIF message ๐.`,
    time: Date.now(),
  },
};
export const responseNotFound = {
  giphy: "๐ I can't find this GIF ๐. Try again ๐",
  city: "๐ I can't find this city ๐. Ask again. ๐",
  news: "๐ I can't find any news ๐๏ธ . Try again. ๐",
  movie: "๐ I can't find a YouTube movie ๐ฆ. Try again. ๐",
};

export const newsImage =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6R4Zyx54iywRfUjiStobIkKV26Sivi2TufhRDlGG0mk0fgujq3EwdlR5Z82ilaLtGM5E&usqp=CAU";
