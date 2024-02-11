import React from "react";

export const Card = (props) => {
  return (
    <div className="relative">
      <img
        className="w-full h-full object-fill rounded-lg"
        src={props.bg}
        alt="/"
      />
      <p className="left-3 bottom-3  text-lg sm:text-2xl font-bold text-white absolute">
        {props.text}
      </p>
    </div>
  );
};
