import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div className="flex justify-center h-screen bg-neutral-200 font-urbanist font-medium tracking-wider overflow-hidden">
      <div className="relative max-w-3xl w-[768px] h-[100%] overflow-hidden bg-white shadow-lg">
        <header className="relative z-10 flex items-center h-[120px] w-full pl-12 bg-gradient-to-br from-secondary via-secondary to-primary">
          <img
            src="./src/assets/botSmile.png"
            className="w-16 mr-5"
            data-testid="logomain"
          />
          <h2 className="text-white text-3xl font-bold tracking-wider">
            Chatbot
          </h2>
        </header>
        <main className="relative h-[300px]">
          <div className="absolute top-[100px] z-10 flex justify-center items-center w-full h-[5vh] text-5xl">
            <h1 className="text-primary text-center font-bold">
              Welcome to Chatbot!
            </h1>
          </div>
          <div className="relative top-[calc(20vh)] h-[calc(50vh-10px)] flex justify-center items-center">
            <img
              src="../src/assets/idea.svg"
              className="max-w-[65%]"
              data-testid="picturemain"
            />
          </div>
        </main>
        <div className="flex justify-center">
          <div className="absolute bottom-[4em] z-20 flex justify-center items-center w-[85%] mt-6 bg-secondary rounded-full text-white py-5 hover:bg-primary cursor-pointer shadow-blue">
            <Link
              to="/chatbot"
              className="flex justify-center text-2xl font-bold tracking-wider"
              data-testid="getstarted"
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
