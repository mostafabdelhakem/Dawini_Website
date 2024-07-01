import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    const loginData = { email, password }; // Create login data
    console.log(loginData);

    try {
      const response = await fetch(
        "https://dawiny-backend-48lm.vercel.app/api/v1/auth/login",
        {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(loginData),
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log("Login success", data);
        navigate(`${data.user.role}home/${data.user.userDetails._id}`);
      } else {
        console.error("Login failed:", response.statusText);
        setShowError(true);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    // main border
    <div className="w-screen h-screen flex">
      {/* inner content */}
      <div className="main-div mx-auto w-full mt-5 bg-[var(--white-color)] flex flex-col justify-center">
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
          <div className="mt-2">
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
          <button className="btn w-full mt-5">Login</button>
        </form>

        {/* showing warning if one of them is wrong */}
        {showError && (
          <div className="p-4 mt-4 text-center">
            <p className="font-bold">Login failed:</p>
            <p>Invalid email or password. Please try again.</p>
          </div>
        )}

        {/* don't have an account */}
        <Link
          className="mt-10 w-full flex justify-center pt-9 font-bold underline"
          to="/switcher"
        >
          Don't have an account
        </Link>
      </div>
    </div>
  );
};

export default Login;

// email: mohamed.ali@example.com
// password: securePassword123

// -----------------------------------

// email: john.doe@example.com
// password: securepassword123
