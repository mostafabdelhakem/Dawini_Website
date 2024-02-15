import React from "react";
import Patient from "../assets/patient.jpg";
import Doctor from "../assets/doctor.jpg";
import Nurse from "../assets/nurse.jpg";
import Nutritionist from "../assets/nutritionist.jpg";
import { Card } from "./Card";

const Switcher = () => {
  return (
    <div className="h-screen w-screen flex bg-[var(--white-color)]">
      <div className="main-div max-w-3xl">
        <h1 className="gradient-text section-title">Choose your Service</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Card bg={Patient} text="Patient" role="patient" />
          <Card bg={Doctor} text="Doctor" role="doctor" />
          <Card bg={Nurse} text="Nurse" role="nurse" />
          <Card bg={Nutritionist} text="Nutritionist" role="nutritionist" />
        </div>
      </div>
    </div> // main div
  );
};

export default Switcher;
