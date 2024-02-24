import React from "react";
import { useNavigate } from "react-router-dom";

export const Card = (props) => {
  const navigate = useNavigate();
  
  const handleClick = (role) => {
    console.log(role);
    // navigate(`/${role}register?role=${role}`);
    navigate(`/${role}/register`);
  };


  return (
    <button
      onClick={() => handleClick(props.role)}
      className="hover:opacity-75"
    >
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
    </button>
  );
};
