import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div className="flex justify-center h-screen overflow-hidden bg-neutral-200 font-urbanist font-medium tracking-wider">
      <div className="max-w-3xl w-[768px] h-[100%] relative overflow-hidden bg-white shadow-lg">
        <header className="bg-gradient-to-br from-secondary via-secondary to-primary h-[120px] w-full flex items-center pl-12 relative z-10">
          <img src="./src/assets/botSmile.png" className="w-16 mr-5" />
          <h2 className="text-3xl text-white font-bold tracking-wider">
            Chatbot
          </h2>
        </header>
        <main className="relative h-[300px]">
          <div className=" w-full absolute top-[100px] h-[5vh] flex justify-center items-center text-5xl z-10">
            <p className="animate-waving-hand pl-8 pr-6 text-5xl text-center"></p>
            <h1 className="text-primary font-bold pr-10 text-center">
              Welcome to Chatbot!
            </h1>
          </div>
          <div className="flex justify-center items-center relative top-[calc(20vh)] h-[calc(50vh-10px)] ">
            <img
              src="../src/assets/idea.svg"
              className="max-w-[65%] absolute"
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
