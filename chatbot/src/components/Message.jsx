/* eslint-disable react/jsx-no-target-blank */
import React from "react";

const Message = () => {
  return (
    <div className="space-y-4 px-8">
      <section className="flex justify-end">
        <div className="bg-blue-600 rounded-2xl p-[12px] text-white w-6/12">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque magnam
          pariatur aliquid reiciendis quaerat repellendus amet? Deserunt,
          accusantium!
          <div className="float-right mt-6 text-xs pr-4">11:55</div>
        </div>
      </section>

      <section className="flex">
        <div className="bg-neutral-100 rounded-2xl p-[12px] text-neutral-900 w-6/12">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque magnam
          pariatur aliquid reiciendis quaerat repellendus amet? Deserunt,
          accusantium!
          <div className="float-right mt-6 text-xs pr-4">11:55</div>
        </div>
      </section>

      <section className="flex flex-col max-w-[200px] rounded-2xl overflow-hidden">
        <img
          src="https://www.visitdubai.com/-/media/gathercontent/article/t/top-rides-at-img-worlds-of-adventure/media/top-rides-at-img-worlds-of-adventure-predator-5.jpg?rev=f1bb54a15add49a09c912eac851f4ff7&cx=0.56&cy=0.4&cw=397&ch=397"
          className="max-w-[200px]"
        />
        <p className="leading-tight text-sm p-1 bg-neutral-100">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus,
          eius tempora?
        </p>
        <button className="text-base py-1 bg-neutral-200 hover:bg-blue-500 hover:text-white">
          <a href="">Learn more</a>
        </button>
      </section>

      <section className="flex flex-col max-w-[200px] rounded-2xl overflow-hidden">
        <img
          src="https://media.istockphoto.com/photos/frozen-fire-picture-id1208302164?k=20&m=1208302164&s=170667a&w=0&h=u_rX3kg_XeHY_GsNyoo9nZjObQK0XmqZF2M5amurwZQ="
          className="max-w-[200px]"
        />
      </section>

      <section className="flex flex-col max-w-[200px] rounded-xl overflow-hidden">
        <button className="text-base py-2 text-blue-800 bg-neutral-100 hover:bg-blue-500 hover:text-white ">
          <a
            href="https://www.google.pl/"
            target="_blank"
            className="underline"
          >
            Link
          </a>
        </button>
      </section>
    </div>
  );
};

export default Message;
