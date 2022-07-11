import React from "react";
import Message from "./Message";
import Loading from "./Loading";

const ChatbotContent = () => {
  return (
    <div className="max-h-[calc(100vh-270px)] mt-[185px] mb-[100px] space-y-4 overflow-auto">
      <Message actor="bot" type="text" content={{ text: "Hello 🤚" }} />
      <Loading time={2} />
      <Message actor="user" type="text" content={{ text: "Yo Yo !!!" }} />
      <Message
        actor="bot"
        type="card"
        content={{
          image:
            "https://images.theconversation.com/files/370685/original/file-20201123-13-x1rq79.jpg?ixlib=rb-1.1.0&rect=8%2C0%2C5422%2C3628&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip",
          text: "Jujubes bonbon cookie danish pudding chocolate I love bonbon tart.",
          link: "https://www.google.pl/",
        }}
      />
      <Message
        actor="bot"
        type="image"
        content={{
          image:
            "https://media.istockphoto.com/photos/frozen-fire-picture-id1208302164?k=20&m=1208302164&s=170667a&w=0&h=u_rX3kg_XeHY_GsNyoo9nZjObQK0XmqZF2M5amurwZQ=",
        }}
      />
      <Message
        actor="bot"
        type="link"
        content={{ link: "https://www.google.pl/" }}
      />
      <Loading time={2} />
    </div>
  );
};

export default ChatbotContent;
