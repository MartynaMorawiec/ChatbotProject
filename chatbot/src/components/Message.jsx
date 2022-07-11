/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import PropTypes from "prop-types";

const Message = ({ actor, type, content }) => {
  return (
    <div className="h-[70%] space-y-6 px-8">
      {actor === "user" && type === "text" && (
        <section className="flex justify-end">
          <div className="max-w-[75%] bg-primary rounded-3xl rounded-br-md p-4 text-white text-base sm:text-lg">
            {content.text}
            <div className="float-right mt-3 text-xs px-4 text-neutral-200">
              11:55
            </div>
          </div>
        </section>
      )}

      {actor === "bot" && type === "text" && (
        <section className="flex">
          <div className="max-w-[75%] bg-neutral-100 rounded-3xl rounded-tl-lg p-4 text-base sm:text-lg text-neutral-900">
            {content.text}
            <div className="float-right mt-3 px-4 text-xs text-neutral-500">
              11:55
            </div>
          </div>
        </section>
      )}

      {actor === "bot" && type === "card" && (
        <section className="flex flex-col max-w-[50%] rounded-2xl overflow-hidden">
          <img src={content.image} />
          <p className="bg-neutral-100 text-sm p-3 leading-tight">
            {content.text}
          </p>
          <button className="py-2 bg-neutral-200 hover:bg-primary text-base text-neutral-900  hover:text-white">
            <a href={content.link} target="_blank">
              Learn more
            </a>
          </button>
        </section>
      )}

      {actor === "bot" && type === "image" && (
        <section className="flex flex-col max-w-[50%] rounded-2xl overflow-hidden">
          <img src={content.image} />
        </section>
      )}

      {actor === "bot" && type === "link" && (
        <section className="flex flex-col w-6/12 rounded-2xl overflow-hidden">
          <button className="bg-neutral-100 hover:bg-primary text-base sm:text-lg py-2 text-secondary hover:text-white focus:shadow-inner">
            <a href={content.link} target="_blank" className="underline">
              Click here
            </a>
          </button>
        </section>
      )}
    </div>
  );
};

Message.propTypes = {
  actor: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  content: PropTypes.object,
};

export default Message;
