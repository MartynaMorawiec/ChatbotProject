import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div className="flex justify-center h-screen overflow-hidden bg-neutral-200 font-urbanist font-medium tracking-wider">
      <div className="max-w-3xl w-[768px] h-[100%] relative overflow-hidden bg-white shadow-lg">
        <header className="bg-gradient-to-br from-secondary via-secondary to-primary h-[120px] w-full flex items-center pl-12">
          <img src="./src/assets/chat.png" className="w-20 mr-4" />
          <h2 className="text-3xl text-white font-bold tracking-wider">
            Chatbot
          </h2>
        </header>
        <main className="relative h-[300px]">
          <div className=" w-full absolute top-[100px] h-[5vh] flex justify-center items-center text-5xl">
            <p className="animate-waving-hand pl-8 pr-6 text-5xl text-center">
              👋
            </p>
            <h1 className="text-primary font-bold pr-10 text-center">
              Welcome to Chatbot!
            </h1>
          </div>
          <div className="flex justify-center items-center relative top-[120px] h-[calc(50vh-10px)]">
            <img
              src="../src/assets/chat.png"
              className="max-w-[40%] absolute"
            />
          </div>
        </main>
        <div className="flex justify-center">
          <div className="absolute bottom-[4em] w-[85%] mt-6 rounded-full bg-secondary text-white py-5 hover:bg-primary cursor-pointer flex justify-center items-center shadow-blue">
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
