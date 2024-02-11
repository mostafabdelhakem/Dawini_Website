import React from "react";
import { useState } from "react";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [birthDate, setBirthDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const log = {
      firstName,
      lastName,
      phone,
      email,
      password,
      city,
      birthDate,
    };
    console.log("Submit");
    console.log(log);
  };
  return (
    <div className="h-screen w-screen flex ">
      <div className="main-div">
        <h1 className="gradient-text section-title">Sign Up</h1>

        <form onSubmit={handleSubmit}>
          {/* name */}
          <div className="flex">
            <input
              type="text"
              className={"w-full p-2 border rounded-md text-sm mb-4 mr-1"}
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              className={"w-full p-2 border rounded-md text-sm mb-4 ml-1"}
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          {/* phone */}
          <input
            type="tel"
            className={"w-full p-2 border rounded-md text-sm mb-4"}
            placeholder="Phone Number"
            maxLength={15} // Prevent overly long numbers
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          {/* email */}
          <input
            type="email"
            className={`w-full p-2  border rounded-lg text-sm mb-5`}
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* password */}
          <input
            className={`w-full p-2 border rounded-lg text-sm mb-5`}
            type="password"
            placeholder="Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* City */}
          <input
            type="text"
            className={`w-full p-2 border rounded-md text-sm mb-4 focus:ring-2 focus:ring-primary focus:ring-opacity-50`}
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

          {/* Birth date */}
          <input
            type="date"
            className={`w-full p-2 border rounded-md text-sm mb-4 focus:ring-2 focus:ring-primary focus:ring-opacity-50`}
            placeholder="Birth Date"
            value={birthDate.value}
            onChange={(e) => setBirthDate(e.target.value)}
          />

          {/* buttons */}
          <div className="flex justify-center items-center mt-6 gap-5">
            <button className="alt-btn w-full">Back</button>
            <button className="btn w-full" type="submit">
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
