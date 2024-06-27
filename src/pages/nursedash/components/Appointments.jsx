import React from "react";
import { useState } from "react";

const EditFees = () => {
  const [feeAmount, setFeeAmount] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("Currency");

  const handleAmountChange = (e) => {
    setFeeAmount(e.target.value);
  };

  const handleCurrencyChange = (e) => {
    setSelectedCurrency(e.target.value);
  };

  return (
    <div className="w-full">
      <h2 className="gradient-text text-lg mb-3">Add your fees</h2>
      <div className="flex items-center space-x-4 w-full">
        <input
          type="text"
          placeholder="Enter fee amount"
          value={feeAmount}
          onChange={handleAmountChange}
          className="p-2 rounded border border-gray-300 w-full"
        />
        <select
          value={selectedCurrency}
          onChange={handleCurrencyChange}
          className="p-2 rounded border border-gray-300 w-full"
        >
          <option value="">Currency</option>
          <option>USD</option>
          <option>EUR</option>
          <option>GBP</option>
        </select>
      </div>
    </div>
  );
};

const AddAppointments = () => {
  const [fromTime, setFromTime] = useState("");
  const [toTime, setToTime] = useState("");
  const [day, setDay] = useState("");
  const [appointments, setAppointments] = useState([]);

  const handleFromTimeChange = (e) => setFromTime(e.target.value);
  const handleToTimeChange = (e) => setToTime(e.target.value);
  const handleDayChange = (e) => setDay(e.target.value);

  const handleAddAppointment = () => {
    if (fromTime && toTime && day) {
      const newAppointment = { fromTime, toTime, day };
      setAppointments([...appointments, newAppointment]);
      // Reset fields after adding appointment
      setFromTime("");
      setToTime("");
      setDay("");
    }
  };

  return (
    <div className="mt-6 w-full">
      <h1 className="text-lg mb-3 gradient-text">Available for Booking</h1>
      <div className="w-full flex items-center space-x-4 mb-4">
        <label className="text-sm gradient-text">From</label>
        <input
          type="time"
          value={fromTime}
          onChange={handleFromTimeChange}
          className="p-2 rounded border w-full"
        />
        <label className="text-sm gradient-text">To</label>
        <input
          type="time"
          value={toTime}
          onChange={handleToTimeChange}
          className="p-2 rounded border w-full"
        />
        <select
          name="day"
          value={day}
          onChange={handleDayChange}
          className="p-2 rounded border w-full"
        >
          <option value="">Day</option>
          <option value="sat">Saturday</option>
          <option value="sun">Sunday</option>
          <option value="mon">Monday</option>
          <option value="tue">Tuesday</option>
          <option value="wed">Wednesday</option>
          <option value="thu">Thursday</option>
          <option value="fri">Friday</option>
        </select>
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
        <div className="main-div mx-auto mt-5 ">
          <EditFees />
          <AddAppointments />
        </div>
      </div>
    </div>
  );
};

export default Appointments;
