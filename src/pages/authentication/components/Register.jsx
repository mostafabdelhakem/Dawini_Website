import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [gender, setGender] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [city, setCity] = useState();
  const [dateOfBirth, setDateOfBirth] = useState();
  const [image, setImage] = useState();
  const [frontImage, setFrontImage] = useState(null);
  const [backImage, setBackImage] = useState(null);

  const [errors, setErrors] = useState({ front: false, back: false });
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (event, side) => {
    const file = event.target.files[0];
    if (file) {
      // Check for valid image file types
      if (!["image/png", "image/jpeg", "image/gif"].includes(file.type)) {
        console.error("Invalid file type. Please select a valid image file.");
        return;
      }
      if (side === "image") {
        setImage(file);
        setErrors({ ...errors, front: false }); // Clear error if valid file selected
      } else if (side === "front") {
        setFrontImage(file);
        setErrors({ ...errors, front: false }); // Clear error if valid file selected
      } else if (side === "back") {
        setBackImage(file);
        setErrors({ ...errors, back: false }); // Clear error if valid file selected
      }
    }
  };

  // Function to create image preview (you can customize styling)
  const createImagePreview = (file, id) => {
    if (file) {
      const url = URL.createObjectURL(file);
      return (
        <img
          key={id}
          src={url}
          alt={`Preview of ${id}`}
          style={{ maxWidth: 200, maxHeight: 200 }}
        />
      );
    }
    return null;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    setErrors({ front: !frontImage, back: !backImage, image: !image }); // Set errors for empty fields

    // Efficiently capture input field values in an array:
    const inputValues = [
      firstName,
      lastName,
      gender,
      phoneNumber,
      email,
      password,
      city,
      dateOfBirth,
      image,
    ];
    // Concisely check if any field is empty:
    if (inputValues.some((value) => !value)) {
      // Handle empty fields:
      console.error("Please fill in all required fields."); // Or display an error message to the user
      return; // Prevent navigation
    }
    if (!frontImage || !backImage || !image) {
      return; // Don't navigate if errors exist
    }
    // Perform API call (including error handling):
    setTimeout(() => {
      setIsLoading(true);
      fetch("https://dawiny-backend-48lm.vercel.app/api/v1/auth/patient/register", {
        method: "POST",
        body: JSON.stringify(inputValues),
      }).then(() => {
        console.log("Registration successful!");
        navigate("/login");
      });
    }, 2000);
  };

  return (
    <div className="">
      <div className="main-div mx-auto mt-5  bg-[var(--white-color)]">
        <h1 className="gradient-text section-title">Create an account</h1>
        <form onSubmit={handleSubmit}>
          <h1 className="gradient-text text-center text-xl font-bold mb-4">
            Fill your data
          </h1>
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

          {/* gender */}
          <select
            required
            className={`w-full p-2 border rounded-lg text-sm mb-5`}
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">Select Your Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          {/* phone */}
          <input
            type="tel"
            required
            className={"w-full p-2 border rounded-md text-sm mb-4"}
            placeholder="Phone Number"
            maxLength={15} // Prevent overly long numbers
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
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
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
          />

          {/* image */}
          <div className="flex items-center space-x-4 mb-4">
            <label htmlFor="photo">Image</label>
            <input
              type="file"
              id="image"
              required
              className="block w-full p-2 rounded-md border border-gray-300 "
              accept="image/png, image/jpeg, image/gif"
              onChange={(event) => handleFileChange(event, "image")}
            />
          </div>

          {/* ID front */}
          <hr />
          <h1 className="gradient-text text-center text-xl font-bold mt-4 mb-4">
            Upload your ID
          </h1>
          <div className="flex items-center space-x-4 mb-4">
            <label htmlFor="photo">Front</label>
            <input
              type="file"
              id="frontID"
              required
              className="block w-full p-2 rounded-md border border-gray-300 "
              accept="image/png, image/jpeg, image/gif"
              onChange={(event) => handleFileChange(event, "front")}
            />
          </div>

          {/* ID back */}
          <div className="flex items-center space-x-4 mb-4">
            <label htmlFor="photo">Back</label>
            <input
              type="file"
              required
              id="backID"
              className="block w-full p-2 rounded-md border border-gray-300 "
              accept="image/png, image/jpeg, image/gif"
              onChange={(event) => handleFileChange(event, "back")}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center justify-center">
            {createImagePreview(frontImage, "front")}
            {createImagePreview(backImage, "back")}
          </div>

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
            <button className="btn w-full" type="submit" disabled={isLoading}>
              {isLoading ? "Loading..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div> // main div>
  );
};

export default Register;
