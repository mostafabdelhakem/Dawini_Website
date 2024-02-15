import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    const loginData = { email, password }; // Create login data

    // for development
    fetch("", {
      method: "POST",
      body: JSON.stringify(loginData),
    });
    console.log(loginData);
    navigate("/");

    // for production
    // try {
    //   const response = await fetch(
    //     "https://a68c-156-221-173-155.ngrok-free.app/api/v1/auth/login",
    //     {
    //       method: "POST",
    //       body: JSON.stringify(loginData),
    //     }
    //   );
    //   if (response.ok) {

    //     const role = await response.json(); // Parse response data
    //     navigate(`/${role}`); // Navigate to role page
    //   } else {
    //     console.error("Login failed:", response.statusText);
    //   }
    // } catch (error) {
    //   console.error("Error:", error);
    // }
  };
  return (
    // main border
    <div className="h-screen flex bg-[var(--white-color)]">
      {/* inner content */}
      <div className="main-div">
        <h1 className="gradient-text section-title">Login to your account</h1>

        {/* login form */}
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              className={`w-full p-2  border rounded-lg text-sm mb-5`}
              type="email"
              required
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              className={`w-full p-2 border rounded-lg text-sm mb-5`}
              type="password"
              required
              placeholder="Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* button */}
          <button className="btn w-full">Login</button>
        </form>

        {/* continue with google */}
        <a
          className="flex w-full items-center justify-center rounded bg-primary py-2 px-6 mt-4 border"
          href="/"
          role="button"
        >
          <FaGoogle className="mr-2" size={15} />
          Continue with Google
        </a>

        {/* don't have an account */}
        <a className="m-2 flex justify-center pt-3 underline" href="/switcher">
          Don't have an account
        </a>
      </div>
    </div>
  );
};

export default Login;
