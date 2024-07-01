import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DoctorRegister = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [gender, setGender] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [location, setLocation] = useState();
  const [datOfBirth, setDateOfBirth] = useState();
  const [image, setImage] = useState();
  const [description, setDescription] = useState();
  const [specialization, setSpecialization] = useState();
  const [appointmentFees, setFees] = useState();
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
      location,
      datOfBirth,
      image,
      description,
      specialization,
      appointmentFees,
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
      fetch(
        "https://dawiny-backend-48lm.vercel.app/api/v1/auth/doctor/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(inputValues),
        }
      ).then(() => {
        console.log("Registration successful!");
        navigate("/login");
      });
    }, 2000);
  };

  return (
    <div className="flex">
      <div className="main-div mx-auto mt-5 bg-[var(--white-color)]">
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
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />

          {/* Birth date */}
          <input
            type="date"
            required
            className={`w-full p-2 border rounded-md text-sm mb-4 focus:ring-2 focus:ring-primary focus:ring-opacity-50`}
            placeholder="Birth Date"
            value={datOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
          />

          {/* image */}
          <hr />
          <h1 className="gradient-text text-center text-xl font-bold mt-4 mb-4">
            Upload your image
          </h1>
          <div className="flex items-center space-x-4 mb-4">
            <input
              type="file"
              id="image"
              required
              className="block w-full p-2 rounded-md border border-gray-300 "
              accept="image/png, image/jpeg, image/gif"
              onChange={(event) => handleFileChange(event, "image")}
            />
          </div>

          {/* additional data */}
          <hr />
          <h1 className="gradient-text text-center text-xl font-bold mt-4 mb-4">
            Complete your data
          </h1>

          {/* specialization */}
          <select
            required
            className={`w-full p-2 border rounded-lg text-sm mb-5`}
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}
          >
            <option value="">Select Your Specialization</option>
            <option value="Allergy and Immunology">
              Allergy and Immunology
            </option>
            <option value="Anesthesiology">Anesthesiology</option>
            <option value="Cardiology">Cardiology</option>
            <option value="Dermatology">Dermatology</option>
            <option value="Endocrinology">Endocrinology</option>
            <option value="Gastroenterology">Gastroenterology</option>
            <option value="General Surgery">General Surgery</option>
            <option value="Geriatrics">Geriatrics</option>
            <option value="Hematology">Hematology</option>
            <option value="Infectious Disease">Infectious Disease</option>
            <option value="Internal Medicine">Internal Medicine</option>
            <option value="Neurology">Neurology</option>
            <option value="Oncology">Oncology</option>
            <option value="Ophthalmology">Ophthalmology</option>
            <option value="Orthopedics">Orthopedics</option>
            <option value="Otolaryngology">Otolaryngology (ENT)</option>
            <option value="Pediatrics">Pediatrics</option>
            <option value="Psychiatry">Psychiatry</option>
            <option value="Radiology">Radiology</option>
            <option value="Rheumatology">Rheumatology</option>
            <option value="Urology">Urology</option>
            <option value="Vascular Surgery">Vascular Surgery</option>
          </select>

          {/* fees */}
          <input
            required
            type="number"
            className="w-full p-2 border rounded-lg text-sm mb-5"
            placeholder="Enter your fees"
            value={appointmentFees}
            onChange={(e) => setFees(e.target.value)}
          />

          {/* description */}
          <textarea
            required
            className={`w-full p-2 border rounded-lg text-sm mb-5`}
            placeholder="Tell us about yourself"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          {/* ID */}
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

export default DoctorRegister;
