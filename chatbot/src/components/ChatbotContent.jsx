import React from "react";
import Message from "./Message";
import Loading from "./Loading";

const ChatbotContent = () => {
  return (
    <div className="max-h-[calc(100vh-270px)] mt-[185px] mb-[100px] space-y-4 overflow-auto">
      <Message actor="bot" type="text" content="Hello 🤚" />
      <Loading time={2} />
      <Message actor="user" type="text" content="Yo Yo !!!" />
      <Message
        actor="bot"
        type="card"
        content={
          "https://www.visitdubai.com/-/media/gathercontent/article/t/top-rides-at-img-worlds-of-adventure/media/top-rides-at-img-worlds-of-adventure-predator-5.jpg?rev=f1bb54a15add49a09c912eac851f4ff7&cx=0.56&cy=0.4&cw=397&ch=397"
        }
      />
      <Message
        actor="bot"
        type="image"
        content={
          "https://media.istockphoto.com/photos/frozen-fire-picture-id1208302164?k=20&m=1208302164&s=170667a&w=0&h=u_rX3kg_XeHY_GsNyoo9nZjObQK0XmqZF2M5amurwZQ="
        }
      />
      <Message actor="bot" type="link" content={"https://www.google.pl/"} />
      <Loading time={2} />
      <Message />
    </div>
  );
};

export default ChatbotContent;
