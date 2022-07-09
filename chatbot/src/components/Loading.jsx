import React from "react";
// import PropTypes from "prop-types";

const Loading = () => {
  return (
    <>
      <div className="px-8">
        <div className="flex items-center justify-center space-x-2 bg-neutral-100 w-20 h-10 rounded-xl">
          <div className="w-2 h-2 bg-neutral-400 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-neutral-400 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-neutral-400 rounded-full animate-pulse"></div>
        </div>
      </div>
    </>
  );
};

// Loading.propTypes = {
//   time: PropTypes.number,
// };

export default Loading;
