import React from "react";

const Footer = () => {
  return (
    <footer className="xy:py-[2em] xs:bg-white xs:bottom-[2em] relative w-full max-h-[6em] flex justify-between items-center px-8">
      <form className="w-full xs:mt-[1em]">
        <input
          type="text"
          placeholder="Type something"
          className="xs:w-[70%] border-solid border-2 border-neutral-200 rounded-xl h-15 p-2 md:w-[85%] focus:outline-blue-500"
        />
        <button className="p-[8px] text-lg font-bold">
          <i className="fa-solid fa-paper-plane text-blue-500 hover:text-blue-600 text-[2rem] rotate-[40deg]"></i>
        </button>
      </form>
      <button className="bg-blue-500 w-[4em] h-[4em] mt-[1em] mr-3 rounded-full text-white text-sm hover:bg-blue-600">
        <i className="fa-solid fa-microphone text-xl"></i>
        {/* <i className="fa-solid fa-microphone-slash"></i> */}
      </button>
    </footer>
  );
};

export default Footer;
