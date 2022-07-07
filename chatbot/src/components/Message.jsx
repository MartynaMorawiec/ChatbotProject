/* eslint-disable react/jsx-no-target-blank */
import React from "react";

const Message = () => {
  return (
    <div className="space-y-6 px-8">
      <section className="flex justify-end">
        <div className="bg-primary rounded-3xl rounded-br-lg p-[12px] text-white max-w-[75%]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque magnam
          pariatur aliquid reiciendis quaerat repellendus amet? Deserunt,
          accusantium!
          <div className="float-right mt-2 text-xs px-4">11:55</div>
        </div>
      </section>

      <section className="flex">
        <div className="bg-neutral-100 rounded-3xl rounded-tl-lg p-[12px] text-neutral-900 max-w-[75%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          deleniti quidem qui obcaecati quos quae ad, perferendis nisi
          repudiandae, in aspernatur porro voluptas delectus iusto? Nesciunt
          veritatis facilis nostrum numquam.
          <div className="float-right mt-2 text-xs px-4">11:55</div>
        </div>
      </section>

      <section className="flex flex-col max-w-[50%] rounded-2xl overflow-hidden">
        <img
          src="https://www.visitdubai.com/-/media/gathercontent/article/t/top-rides-at-img-worlds-of-adventure/media/top-rides-at-img-worlds-of-adventure-predator-5.jpg?rev=f1bb54a15add49a09c912eac851f4ff7&cx=0.56&cy=0.4&cw=397&ch=397"
          className=""
        />
        <p className="leading-tight text-sm p-1 bg-neutral-100">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus,
          eius tempora?
        </p>
        <button className="text-base py-2 bg-neutral-200 hover:bg-primary hover:text-white">
          <a href="">Learn more</a>
        </button>
      </section>

      <section className="flex flex-col max-w-[50%] rounded-2xl overflow-hidden">
        <img
          src="https://media.istockphoto.com/photos/frozen-fire-picture-id1208302164?k=20&m=1208302164&s=170667a&w=0&h=u_rX3kg_XeHY_GsNyoo9nZjObQK0XmqZF2M5amurwZQ="
          className=""
        />
      </section>

      <section className="flex flex-col w-6/12 rounded-2xl overflow-hidden">
        <button className="text-base py-2 text-secondary bg-neutral-100 hover:bg-primary hover:text-white ">
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
