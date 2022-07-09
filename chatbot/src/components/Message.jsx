/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import PropTypes from "prop-types";

const Message = ({ actor, type, content }) => {
  return (
    <div className="h-[70%] space-y-6 px-8">
      {actor === "user" && type === "text" && (
        <section className="flex justify-end">
          <div className="bg-primary rounded-3xl rounded-br-md p-5 text-white text-base sm:text-lg max-w-[75%]">
            {content}
            <div className="float-right mt-2 text-xs px-4">11:55</div>
          </div>
        </section>
      )}

      {actor == "bot" && type === "text" && (
        <section className="flex">
          <div className="bg-neutral-100 rounded-3xl rounded-tl-lg p-5 text-base sm:text-lg text-neutral-900 max-w-[75%]">
            {content}
            <div className="float-right mt-2 text-xs px-4">11:55</div>
          </div>
        </section>
      )}

      {actor == "bot" && type === "card" && (
        <section className="flex flex-col max-w-[50%] rounded-2xl overflow-hidden">
          <img src={content} className="" />
          <p className="leading-tight text-sm p-3 bg-neutral-100">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus,
            eius tempora?
          </p>
          <button className="text-base py-2 bg-neutral-200 hover:bg-primary text-neutral-900  hover:text-white">
            <a href="">Learn more</a>
          </button>
        </section>
      )}

      {actor == "bot" && type === "image" && (
        <section className="flex flex-col max-w-[50%] rounded-2xl overflow-hidden">
          <img src={content} />
        </section>
      )}

      {actor == "bot" && type === "link" && (
        <section className="flex flex-col w-6/12 rounded-2xl overflow-hidden">
          <button className="text-base sm:text-lg py-2 text-secondary bg-neutral-100 hover:bg-primary hover:text-white focus:shadow-inner">
            <a href={content} target="_blank" className="underline">
              Link
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
  content: PropTypes.any.isRequired,
};

export default Message;
