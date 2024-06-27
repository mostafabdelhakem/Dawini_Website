import React from "react";
import Patient from "../assets/patient.jpg";
import Doctor from "../assets/doctor.jpg";
import Nurse from "../assets/nurse.jpg";
import { Card } from "./Card";

const Switcher = () => {
  return (
    <div className="w-screen h-screen flex">
      <div className="main-div mx-auto mt-5 bg-[var(--white-color)] flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="gradient-text text-center section-title flex items-center">
            Choose your category
          </div>
          <Card bg={Patient} text="Patient" role="patient" />
          <Card bg={Doctor} text="Doctor" role="doctor" />
          <Card bg={Nurse} text="Nurse" role="nurse" />
        </div>
      </div>
    </div> // main div
  );
};

export default Switcher;
