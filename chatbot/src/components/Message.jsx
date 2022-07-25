import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

const Message = ({ actor, type, content }) => {
  return (
    <div className="h-[70%] space-y-6 px-8">
      {actor === "user" && type === "text" && (
        <section className="flex justify-end">
          <div className="max-w-[75%] bg-primary rounded-3xl rounded-br-md p-4 text-white text-base sm:text-lg font-normal">
            {content.text}
            <div className="float-right mt-3 text-xs px-4 text-neutral-200">
              {moment(content.time).format("hh:mm")}
            </div>
          </div>
        </section>
      )}

      {actor === "bot" && type === "text" && (
        <section className="flex">
          <div className="max-w-[75%] bg-neutral-100 rounded-3xl rounded-tl-lg p-4 text-base sm:text-lg text-neutral-900">
            {content.text}
            <div className="float-right mt-3 px-4 text-xs text-neutral-500">
              {moment(content.time).format("hh:mm")}
            </div>
          </div>
        </section>
      )}

      {actor === "bot" && type === "weather" && (
        <section className="flex">
          <div className="max-w-[75%] bg-neutral-100 rounded-3xl rounded-tl-lg p-4 text-base sm:text-lg text-neutral-900">
            <img src={content.text?.current?.condition?.icon} />
            <p>
              Weather in {content.text?.location?.name},{" "}
              {content.text?.location?.country}
            </p>
            <p>
              {content.text?.current?.condition?.text} sky with a temperature of{" "}
              {content.text?.current?.temp_c}°C
            </p>
            <div className="float-right mt-3 px-4 text-xs text-neutral-500">
              {moment(content.time).format("hh:mm")}
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
            <a href={content.link} target="_blank" rel="noopener noreferrer">
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

      {actor === "bot" && type === "youtube" && (
        <section className="flex flex-col max-w-[45%] rounded-2xl overflow-hidden">
          <iframe title="video-player" src={content.video} />
        </section>
      )}

      {actor === "bot" && type === "link" && (
        <section className="flex flex-col w-6/12 rounded-2xl overflow-hidden">
          <button className="bg-neutral-100 hover:bg-primary text-base sm:text-lg py-2 text-secondary hover:text-white focus:shadow-inner">
            <a
              href={content.link}
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
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
  time: PropTypes.func,
};

export default Message;
