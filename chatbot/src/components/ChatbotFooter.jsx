import React from "react";

const Footer = () => {
  return (
    <footer className="absolute bottom-0 w-full flex justify-between items-center h-[80px] px-8 bg-white">
      <form className="flex items-center w-full mb-3">
        <input
          type="text"
          placeholder="Type something..."
          className="w-[85%] p-3 bg-neutral-100 rounded-xl focus:outline-secondary focus:bg-focus"
        />
        <button className="text-xl font-bold">
          <i className="fa-solid fa-paper-plane ml-2 mr-2 mb-2 text-[2rem] sm:text-[2.5rem] text-secondary hover:text-primary rotate-[40deg]"></i>
        </button>
      </form>
      <button className="flex justify-center items-center w-[3.5em] h-[3.5em] sm:w-[4em] sm:h-[4em] ml-2 mr-2 mb-7 mt-[1em] bg-secondary hover:bg-primary text-white text-sm rounded-full shadow-blue">
        <i className="fa-solid fa-microphone p-6 text-2xl sm:text-3xl"></i>
        {/* <i className="fa-solid fa-microphone-slash"></i> */}
      </button>
    </footer>
  );
};

export default Footer;
