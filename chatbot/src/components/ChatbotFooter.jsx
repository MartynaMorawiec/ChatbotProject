import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-white bottom-0 w-full flex justify-between items-center px-8">
      <form className="w-full mt-[2px] mb-[70px] md:mb-[100px]">
        <input
          type="text"
          placeholder="Type something"
          className="w-[70%] border-solid border-2 border-neutral-200 rounded-xl h-15 p-2 md:w-[85%] focus:outline-blue-500"
        />
        <button className="p-[8px] text-lg font-bold">
          <i className="fa-solid fa-paper-plane text-blue-500 hover:text-blue-600 text-[2rem] rotate-[40deg]"></i>
        </button>
      </form>
      <button className="bg-blue-500 w-[4em] h-[4em] mt-[1em] mr-3 mb-[65px] md:mb-[120px] rounded-full text-white text-sm hover:bg-blue-600">
        <i className="fa-solid fa-microphone text-xl"></i>
        {/* <i className="fa-solid fa-microphone-slash"></i> */}
      </button>
    </footer>
  );
};

export default Footer;
