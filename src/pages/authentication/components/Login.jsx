import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    const loginData = { email, password }; // Create login data
    console.log(loginData);

    // for development
    // fetch("", {
    //   method: "POST",
    //   body: JSON.stringify(loginData),
    // });
    // console.log(loginData);
    // navigate("/");

    // for production
    try {
      const response = await fetch(
        "https://4801-156-221-223-24.ngrok-free.app/api/v1/auth/login",
        {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(loginData),
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log("Login success", data);
        navigate(`${data.login}`);
      } else {
        console.error("Login failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    // main border
    <div className="h-screen flex bg-[var(--white-color)]">
      {/* inner content */}
      <div className="main-div mx-auto mt-5">
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

        {/* don't have an account */}
        <Link className="m-2 flex justify-center pt-3 underline" to="/switcher">
          Don't have an account
        </Link>
      </div>
    </div>
  );
};

export default Login;
