import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Patients from "./Patients";
import Profile from "./Profile";
import Testimonials from "./TestimonialsPage";

export const Logo = () => {
  return (
    <div className="flex p-3 mb-6 gradient-text text-4xl font-bold">
      <Link to="/">Dawini.</Link>
    </div>
  );
};

const Title = () => {
  return <div className="font-bold text-xl p-3 ">Doctor Dashboard</div>;
};

const Copyrights = () => {
  const currentYear = new Date().getFullYear();
  return (
    <p className="mt-20 text-center justify-end gradient-text">
      ©{currentYear} Dawini. All Rights Reserved.
    </p>
  );
};
const Sidebar = () => {
  const [content, setContent] = useState();
  const handleScreenChange = (value) => {
    setContent(value); // Update state with the clicked value
  };

  return (
    <div className=" flex">
      <div className="h-screen w-auto">
        <div className="h-full bg-white">
          <Logo />
          <Title />
          <ul className="tabs px-5 py-4 flex-col z-50 ">
            <li className="p-3 mb-2">
              <a
                href="#patients"
                onClick={() => handleScreenChange("patients")}
              >
                Patients
              </a>
            </li>
            <li className="p-3 mb-2">
              <a href="#profile" onClick={() => handleScreenChange("profile")}>
                Profile
              </a>
            </li>
            <li className="p-3 mb-2">
              <a
                href="#testimonials"
                onClick={() => handleScreenChange("testimonials")}
              >
                Testimonials
              </a>
            </li>
          </ul>
          <Copyrights />
        </div>
      </div>
      <div className="flex-1 w-full">
        <Content content={content} />
      </div>
    </div>
  );
};

const Content = ({ content }) => {
  // Render different content based on the value of the screen state
  switch (content) {
    case "patients":
      return <Patients />;
    case "profile":
      return <Profile />;
    case "testimonials":
      return <Testimonials />;
    default:
      return null; // If no screen is selected, render nothing
  }
};

const Screen = () => {
  return (
    <div>
      <Sidebar />
      <Content />
    </div>
  );
};

export default Screen;
