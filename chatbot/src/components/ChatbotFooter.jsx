import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white absolute bottom-0 h-[80px] w-full flex justify-between items-center px-8">
      <form className="w-full mt-[2px] mb-4">
        <input
          type="text"
          placeholder="Type something..."
          className="w-[85%] bg-neutral-100 rounded-xl p-3 focus:outline-secondary focus:bg-focus"
        />
        <button className="text-xl font-bold">
          <i className="fa-solid fa-paper-plane  text-secondary hover:text-primary text-[2rem] sm:text-[2.5rem] ml-2 rotate-[40deg] drop-shadow-xlBlue"></i>
        </button>
      </form>
      <button className="bg-secondary hover:bg-primary w-[3.5em] h-[3.5em] sm:w-[4em] sm:h-[4em] mt-[1em] mr-6 mb-6 rounded-full text-white text-sm flex justify-center items-center shadow-blue">
        <i className="fa-solid fa-microphone text-2xl sm:text-3xl p-6"></i>
        {/* <i className="fa-solid fa-microphone-slash"></i> */}
      </button>
    </footer>
  );
};

export default Footer;
