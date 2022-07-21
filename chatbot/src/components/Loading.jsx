import React from "react";

const Loading = () => {
  return (
    <div className="px-8">
      <div className="flex justify-center items-center w-20 h-10 space-x-2 bg-neutral-100 rounded-3xl">
        <div className="w-2 h-2 bg-neutral-400 rounded-full animate-pulse"></div>
        <div className="w-2 h-2 bg-neutral-400 rounded-full animate-pulse"></div>
        <div className="w-2 h-2 bg-neutral-400 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default Loading;
