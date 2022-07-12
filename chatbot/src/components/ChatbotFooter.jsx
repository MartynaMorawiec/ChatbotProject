import "regenerator-runtime";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const ChatbotFooter = ({ onSend, onRecord }) => {
  const [isListening, setIsListening] = useState(false);
  const { transcript, resetTranscript } = useSpeechRecognition();
  const [input, setInput] = useState("");

  console.log(onRecord);

  useEffect(() => {
    handleListen();
  }, [isListening]);

  const handleSend = (event) => {
    event.preventDefault();
    if (typeof onSend === "function") {
      onSend(input);
      setInput("");
    }
  };

  const handleListen = () => {
    if (transcript !== "") {
      console.log("Result:", transcript);
      onRecord(transcript);
      resetTranscript;
    }

    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
      console.log(
        "Your browser does not support speech recognition software! Try Chrome desktop, maybe?"
      );
    }

    if (isListening) {
      SpeechRecognition.startListening({
        continuous: true,
        language: "en-US",
      });
    } else {
      SpeechRecognition.stopListening();
    }
  };

  return (
    <footer className="absolute bottom-0 w-full flex justify-between items-center h-[80px] px-8 bg-white">
      <form onSubmit={handleSend} className="flex items-center w-full mb-3">
        <input
          type="text"
          placeholder="Type something..."
          className="w-[85%] p-3 bg-neutral-100 rounded-xl focus:outline-secondary focus:bg-focus"
          name="input"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button className="text-xl font-bold">
          <i className="fa-solid fa-paper-plane ml-2 mr-2 mb-2 text-[2rem] sm:text-[2.5rem] text-secondary hover:text-primary rotate-[40deg]"></i>
        </button>
      </form>
      <button
        onClick={() => setIsListening((prevState) => !prevState)}
        className="flex justify-center items-center w-[3.5em] h-[3.5em] sm:w-[4em] sm:h-[4em] ml-2 mr-2 mb-7 mt-[1em] bg-secondary hover:bg-primary text-white text-sm rounded-full shadow-blue"
      >
        <i className="fa-solid fa-microphone p-6 text-2xl sm:text-3xl"></i>
        {/* <i className="fa-solid fa-microphone-slash"></i> */}
      </button>
    </footer>
  );
};

ChatbotFooter.propTypes = {
  onSend: PropTypes.func,
  onRecord: PropTypes.func,
};

export default ChatbotFooter;
