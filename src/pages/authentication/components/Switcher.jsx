import React from "react";
import Patient from "../assets/patient.jpg";
import Doctor from "../assets/doctor.jpg";
import Nurse from "../assets/nurse.jpg";
import Nutritionist from "../assets/nutritionist.jpg";
import { Card } from "./Card";
import { useNavigate } from "react-router-dom";

const Switcher = () => {
  const navigate = useNavigate();

  const handleClick = (type) => {
    console.log(type)
    navigate(`/${type}/signup`);
    
  };

  return (
    <div className="h-screen w-screen flex bg-[var(--white-color)]">
      <div className="main-div max-w-3xl">
        <h1 className="gradient-text section-title">Choose your Service</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <button
            onClick={() => handleClick("patient")}
            className="hover:opacity-75"
          >
            <Card bg={Patient} text="Patient" />
          </button>
          <button
            onClick={() => handleClick("doctor")}
            className="hover:opacity-70"
          >
            <Card bg={Doctor} text="Doctor" />
          </button>
          <button
            onClick={() => handleClick("nurse")}
            className="hover:opacity-70"
          >
            <Card bg={Nurse} text="Nurse" />
          </button>
          <button
            onClick={() => handleClick("nutritionist")}
            className="hover:opacity-70"
          >
            <Card bg={Nutritionist} text="Nutritionist" />
          </button>
        </div>
      </div>
    </div> // main div
  );
};

export default Switcher;
