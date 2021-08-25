import React, { useState } from "react";
import data from "../data";

const Pledges = () => {
  const [cards, setCards] = useState(data);
  return (
    <>
      <div className="grid grid-cols-1 gap-5">
        {cards.map((card) => {
          const { id, title, pledge, desc, left, button } = card;
          return (
            <article
              key={id}
              className={"border-2 p-5 rounded-lg " + (left == 0 ? "data" : "")}
            >
              <div className="md:flex md:justify-between">
                <h3 className="font-bold text-lg">{title}</h3>
                <p className="subTitle font-bold">{pledge}</p>
              </div>
              <p className="my-5">{desc}</p>
              <div className="md:flex md:justify-between">
                <p className="font-bold text-4xl flex items-center mb-5">
                  {left}{" "}
                  <span className="font-light text-base text-gray-600 ml-3">
                    left
                  </span>
                </p>
                <button className="btn py-2 px-6 rounded-full  text-white">
                  {button}
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
};

export default Pledges;
