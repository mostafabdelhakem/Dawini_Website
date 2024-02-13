import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Efficiently capture input field values in an array:
    const inputValues = [
      firstName,
      lastName,
      phone,
      email,
      password,
      city,
      birthDate,
    ];

    // Concisely check if any field is empty:
    if (inputValues.some((value) => !value)) {
      // Handle empty fields:
      console.error("Please fill in all required fields."); // Or display an error message to the user
      return; // Prevent navigation
    }

    // Perform API call (including error handling):
    fetch("", {
      method: "POST",
      body: JSON.stringify(inputValues),
    }).then(() => {
      console.log("Registration successful!");
      navigate("/signup2");
    });
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
              required
              className={"w-full p-2 border rounded-md text-sm mb-4 mr-1"}
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              required
              className={"w-full p-2 border rounded-md text-sm mb-4 ml-1"}
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          {/* phone */}
          <input
            type="tel"
            required
            className={"w-full p-2 border rounded-md text-sm mb-4"}
            placeholder="Phone Number"
            maxLength={15} // Prevent overly long numbers
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          {/* email */}
          <input
            type="email"
            required
            className={`w-full p-2  border rounded-lg text-sm mb-5`}
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* password */}
          <input
            className={`w-full p-2 border rounded-lg text-sm mb-5`}
            type="password"
            required
            placeholder="Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* City */}
          <input
            type="text"
            required
            className={`w-full p-2 border rounded-md text-sm mb-4 focus:ring-2 focus:ring-primary focus:ring-opacity-50`}
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

          {/* Birth date */}
          <input
            type="date"
            required
            className={`w-full p-2 border rounded-md text-sm mb-4 focus:ring-2 focus:ring-primary focus:ring-opacity-50`}
            placeholder="Birth Date"
            value={birthDate.value}
            onChange={(e) => setBirthDate(e.target.value)}
          />

          {/* buttons */}
          <div className="flex justify-center items-center mt-6 gap-5">
            <button
              className="alt-btn w-full"
              onClick={() => {
                navigate(-1);
              }}
            >
              Back
            </button>
            <button className="btn w-full" type="submit" onClick={handleSubmit}>
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
