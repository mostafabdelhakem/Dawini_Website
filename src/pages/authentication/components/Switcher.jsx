import React from "react";
import PatientImg from "../assets/patient.jpg";
import MedicalImg from "../assets/medical.jpg";
import { Card } from "./Card";

const Switcher = () => {
  return (
    <div className="h-screen w-screen flex ">
      <div className="main-div max-w-3xl">
        <h1 className="gradient-text section-title">Join as</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <button
            onClick={() => {
              console.log("patient clicked");
            }}
            className="hover:opacity-75"
          >
            <Card bg={PatientImg} text="Patient" />
          </button>
          <button
            onClick={() => {
              console.log("Medical clicked");
            }}
            className="hover:opacity-70"
          >
            <Card bg={MedicalImg} text="Medical Provider" />
          </button>
        </div>
      </div>
    </div> // main div
  );
};

export default Switcher;
