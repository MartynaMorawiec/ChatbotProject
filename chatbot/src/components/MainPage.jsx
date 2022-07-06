import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div className="p-1 flex justify-center h-screen overflow-hidden bg-neutral-100">
      <div className="max-w-3xl border-2 rounded-xl overflow-hidden border-neutral-150 w-[768px] relative bg-white">
        <header className="bg-blue-500 h-[120px] flex items-center pl-12">
          <img src="./src/assets/chat.png" className="w-[80px] mr-4" />
          <h2 className="text-3xl text-white font-bold tracking-wider">
            Chatbot
          </h2>
        </header>
        <div className="h-full mt-[1em] mb-[3em] mx-8 relative bottom-[300px] flex justify-center items-center text-4xl md:mb-[1.5em]">
          <p className="animate-waving-hand p-3 text-5xl">👋 </p>
          <h1 className="text-blue-600 font-bold">Welcome to Chatbot!</h1>
        </div>
        <div className="flex justify-center relative bottom-[45em]">
          <img src="../src/assets/chat.png" className="w-[350px]" />
        </div>
        <div className="flex justify-center">
          <div className="absolute bottom-[2em] w-[70%] rounded-full bg-blue-500 text-white p-3 h-[70px] hover:bg-blue-600 cursor-pointer flex justify-center items-center">
            <Link
              exact
              to="/chatbot"
              className="flex justify-center text-2xl tracking-wider"
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
