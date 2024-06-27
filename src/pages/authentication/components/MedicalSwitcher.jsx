import React from "react";
import Doctor from "../assets/doctor.jpg";
import Nurse from "../assets/nurse.jpg";
import { Card } from "./Card";

const MedicalSwitcher = () => {
  return (
    <div className="w-screen h-screen flex">
      <div className="main-div mx-auto mt-5  max-w-3xl bg-[var(--white-color)]  flex flex-col items-center justify-center">
        <h1 className="gradient-text section-title">Choose your service</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Card bg={Doctor} text="Doctor" role="doctor" />
          <Card bg={Nurse} text="Nurse" role="nurse" />
        </div>
      </div>
    </div> // main div
  );
};

export default MedicalSwitcher;
