import React from "react";
import { useState } from "react";

const AddAppointments = () => {
  const [fromTime, setFromTime] = useState("");
  const [day, setDay] = useState("");
  const [appointments, setAppointments] = useState([]);

  const handleFromTimeChange = (e) => setFromTime(e.target.value);
  const handleDayChange = (e) => setDay(e.target.value);

  const handleAddAppointment = () => {
    if (fromTime && day) {
      const newAppointment = { fromTime, day };
      setAppointments([...appointments, newAppointment]);
      // Reset fields after adding appointment
      setFromTime("");
      setDay("");
    }
  };

  return (
    <div className="mt-6 w-full">
      <h1 className="gradient-text text-lg text-center m-2">
        Available for Booking
      </h1>
      <div className="w-full flex items-center space-x-4 mb-4">
        <label className="text-sm gradient-text">From</label>
        <input
          type="time"
          value={fromTime}
          onChange={handleFromTimeChange}
          className="p-2 rounded border w-full"
        />
        <input
          type="date"
          value={day}
          onChange={handleDayChange}
          className="p-2 rounded border w-full"
        />
      </div>
      <div className="flex justify-center mb-4">
        <button className="btn" onClick={handleAddAppointment}>
          Add Appointment
        </button>
      </div>
      <div>
        {appointments.length > 0 && (
          <div className="mt-6">
            <hr />
            <h1 className="gradient-text text-lg text-center m-2">
              Available Appointments
            </h1>
            <ul className="list-disc pl-5">
              {appointments.map((appointment, index) => (
                <li key={index} className="mb-2">
                  {index + 1}. From: {appointment.fromTime}, To:{" "}
                  {appointment.toTime}, Day: {appointment.day}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

const Appointments = () => {
  return (
    <div className="min-h-screen flex justify-center bg-[var(--white-color)]">
      <div className="provider-page bg-white">
        <h1 className="gradient-text section-title mt-10">Appointments</h1>
        <div className="main-div mx-auto mt-5  ">
          <AddAppointments />
        </div>
      </div>
    </div>
  );
};

export default Appointments;
