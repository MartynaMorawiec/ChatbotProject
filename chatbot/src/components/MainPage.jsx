import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div className="p-1 flex justify-center h-screen overflow-hidden bg-neutral-100">
      <div className="max-w-3xl w-[768px] relative border-2 rounded-xl overflow-hidden border-neutral-150 bg-white">
        <header className="bg-blue-500 h-[120px] flex items-center pl-12">
          <img src="./src/assets/chat.png" className="w-20 mr-4" />
          <h2 className="text-3xl text-white font-bold tracking-wider">
            Chatbot
          </h2>
        </header>
        <div className="mt-[1em] mx-8 w-full absolute top-56 flex justify-center items-center text-4xl">
          <p className="animate-waving-hand pr-3 text-5xl">👋 </p>
          <h1 className="text-blue-600 font-bold pr-10">Welcome to Chatbot!</h1>
        </div>
        <div className="flex justify-center absolute top-96">
          <img src="../src/assets/chat.png" className="w-3/6" />
        </div>
        <div className="flex justify-center">
          <div className="absolute bottom-[2em] w-[70%] mt-6 rounded-full bg-blue-500 text-white p-3 h-[70px] hover:bg-blue-600 cursor-pointer flex justify-center items-center">
            <Link
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
