import React from "react";
import "animate.css";

const Loading = () => {
  return (
    <div className="px-8">
      <div className="flex justify-center items-center w-20 h-10 space-x-2 bg-neutral-100 rounded-3xl">
        <div className="w-2 h-2 bg-neutral-500 rounded-full animate__animated animate__heartBeat animate__delay-0.5s animate__infinite"></div>
        <div className="w-2 h-2 bg-neutral-500 rounded-full animate__animated animate__heartBeat animate__delay-0.5s animate__infinite"></div>
        <div className="w-2 h-2 bg-neutral-500 rounded-full animate__animated animate__heartBeat animate__delay-0.5s animate__infinite"></div>
      </div>
    </div>
  );
};

export default Loading;
