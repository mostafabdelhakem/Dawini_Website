import React from "react";
import Patient from "../assets/patient.jpg";
import Doctor from "../assets/doctor.jpg";
import Nurse from "../assets/nurse.jpg";
import Nutritionist from "../assets/nutritionist.jpg";
import { Card } from "./Card";

const Signup3 = () => {
  return (
    <div className="h-screen w-screen flex ">
      <div className="main-div max-w-3xl">
        <h1 className="gradient-text section-title">Choose your Service</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <button
            onClick={() => {
              console.log("Patient");
            }}
            className="hover:opacity-75"
          >
            <Card bg={Patient} text="Patient" />
          </button>
          <button
            onClick={() => {
              console.log("Doctor");
            }}
            className="hover:opacity-70"
          >
            <Card bg={Doctor} text="Doctor" />
          </button>
          <button
            onClick={() => {
              console.log("Nurse");
            }}
            className="hover:opacity-70"
          >
            <Card bg={Nurse} text="Nurse" />
          </button>
          <button
            onClick={() => {
              console.log("Nutritionist clicked");
            }}
            className="hover:opacity-70"
          >
            <Card bg={Nutritionist} text="Nutritionist" />
          </button>
        </div>
        {/* buttons */}
        <div className="flex justify-center items-center mt-6 gap-5">
          <button className="alt-btn w-full">Back</button>
          <button className="btn w-full" type="submit">
            submit
          </button>
        </div>
      </div>
    </div> // main div
  );
};

export default Signup3;
