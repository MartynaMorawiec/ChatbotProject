import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div className="flex justify-center h-screen overflow-hidden bg-neutral-200 font-urbanist font-medium tracking-wider">
      <div className="max-w-3xl w-[768px] h-screen relative overflow-hidden bg-white shadow-lg">
        <header className="bg-gradient-to-br from-secondary via-secondary to-primary h-[120px] flex items-center pl-12">
          <img src="./src/assets/chat.png" className="w-20 mr-4" />
          <h2 className="text-3xl text-white font-bold tracking-wider">
            Chatbot
          </h2>
        </header>
        <div className="mt-[1em] mx-8 w-full absolute top-56 flex justify-center items-center text-5xl">
          <p className="animate-waving-hand pr-6 text-5xl">👋 </p>
          <h1 className="text-primary font-bold pr-10">Welcome to Chatbot!</h1>
        </div>
        <div className="flex justify-center absolute top-96">
          <img src="../src/assets/chat.png" className="max-w-[45%]" />
        </div>
        <div className="flex justify-center">
          <div className="absolute bottom-[4em] w-[90%] mt-6 rounded-full bg-secondary text-white p-3 h-[70px] hover:bg-primary cursor-pointer flex justify-center items-center shadow-blue">
            <Link
              to="/chatbot"
              className="flex justify-center text-2xl tracking-wider font-bold"
            >
              Get started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
