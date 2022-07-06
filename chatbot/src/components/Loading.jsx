import React from "react";

const Loading = () => {
  return (
    <div className="px-8">
      <div className="flex items-center justify-center space-x-2 bg-neutral-100 w-20 h-10 rounded-xl">
        <div className="w-2 h-2 bg-neutral-400 rounded-full animate-pulse"></div>
        <div className="w-2 h-2 bg-neutral-400 rounded-full animate-pulse"></div>
        <div className="w-2 h-2 bg-neutral-400 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default Loading;
