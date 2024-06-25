import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DrImage from "../../authentication/assets/doctor.jpg";
import ProviderProfileHeader from "../../providersprofiles/components/ProviderProfileHeader.jsx";

const Profile = () => {
  const navigate = useNavigate();

  const [image, setImage] = useState();
  const [name, setName] = useState();
  const [specialization, setSpecialization] = useState();
  const [location, setLocation] = useState();
  const [gender, setGender] = useState();
  const [description, setDescription] = useState();

  const [errors, setErrors] = useState({ front: false, back: false });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    setErrors({ image: !image }); // Set errors for empty fields

    // Efficiently capture input field values in an array:
    const inputValues = [
      image,
      name,
      specialization,
      location,
      gender,
      description,
    ];
    // Concisely check if any field is empty:
    if (inputValues.some((value) => !value)) {
      // Handle empty fields:
      console.error("Please fill in all required fields."); // Or display an error message to the user
      return; // Prevent navigation
    }

    // Perform API call (including error handling):
    setTimeout(() => {
      setIsLoading(true);
      fetch("", {
        method: "POST",
        body: JSON.stringify(inputValues),
      }).then(() => {
        console.log("Registration successful!");
        navigate("/login");
      });
    }, 2000);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Check for valid image file types
      if (!["image/png", "image/jpeg", "image/gif"].includes(file.type)) {
        console.error("Invalid file type. Please select a valid image file.");
        return;
      }
      setImage(file);
      setErrors({ ...errors, front: false }); // Clear error if valid file selected
    }
  };

  const mydr = {
    imageUrl: DrImage,
    name: "Ahmed Mohamed",
    specialization: "Cardiology",
    location: "Cairo, Egypt",
    gender: "Male",
    rating: 4,
    description:
      "Customers are not satisfied with our CRM systems we are providing, citing a lack of innovative updates and integration issues with other platforms, Which led to decreasing the company's revenue and increasing the employee turnover rate.",
  };

  return (
    <div className="min-h-screen flex justify-center bg-[var(--white-color)]">
      <div className="provider-page w-full bg-white">
        <ProviderProfileHeader provider={mydr} type={"doctor"} />
        <div className="main-div">
          <form onSubmit={handleSubmit}>
            <h1 className="gradient-text section-title">Edit Profile</h1>

            {/* image */}
            <div className="flex items-center space-x-4 mb-4">
              <label htmlFor="photo">Image</label>
              <input
                type="file"
                id="image"
                required
                className="block w-full p-2 rounded-md border border-gray-300 "
                accept="image/png, image/jpeg, image/gif"
                onChange={(event) => handleFileChange(event)}
              />
            </div>

            {/* name */}
            <input
              type="text"
              required
              className={"w-full p-2 border rounded-lg text-sm mb-5"}
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            {/* specialization */}
            <select
              required
              className={`w-full p-2 border rounded-lg text-sm mb-5`}
              value={specialization}
              onChange={(e) => setSpecialization(e.target.value)}
            >
              <option value="">Select Doctor's Specialization</option>
              <option value="Cardiology">Cardiology</option>
              <option value="Dermatology">Dermatology</option>
              <option value="Endocrinology">Endocrinology</option>
              <option value="Gastroenterology">Gastroenterology</option>
              {/* Add more options as needed */}
            </select>

            {/* location */}
            <input
              type="text"
              required
              className={"w-full p-2 border rounded-lg text-sm mb-5"}
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />

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
              <option value="other">Other</option>
            </select>

            {/* description */}
            <textarea
              required
              className={`w-full p-2 border rounded-lg text-sm mb-5`}
              placeholder="Edit Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            {/* buttons */}
            <div className="flex justify-center items-center mt-6 gap-5">
              <button
                className="btn w-full md:max-w-[300px]"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
