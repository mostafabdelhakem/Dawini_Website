import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProviderProfileHeader from "../../providersprofiles/components/ProviderProfileHeader.jsx";

const skillsList = [
  "Patient Assessment",
  "Vital Signs Monitoring",
  "Medication Administration",
  "Wound Care",
  "IV Therapy",
  "Patient Education",
  "Pain Management",
  "Infection Control",
  "Emergency Care",
  "Blood Draws (Phlebotomy)",
  "Pediatric Care",
  "Geriatric Care",
  "Critical Care",
  "Telemetry",
  "Case Management",
  "Mental Health Support",
  "Documentation and Record Keeping",
  "Patient Advocacy",
  "Basic Life Support (BLS)",
  "Advanced Cardiovascular Life Support (ACLS)",
];

const SkillsSection = ({ skills }) => {
  return (
    <div className="w-full flex flex-col items-center mb-14">
      <h1 className="text-2xl font-bold mb-4">Care Skills Set</h1>
      <div className="flex flex-wrap justify-center gap-3 max-w-[800px]">
        {skills.map((skill) => (
          <p className="text-xl text-gray-500 border rounded-full py-2 px-6">
            {skill}
          </p>
        ))}
      </div>
    </div>
  );
};

const Profile = () => {
  const navigate = useNavigate();

  const [image, setImage] = useState();
  const [name, setName] = useState();
  const [specialization, setSpecialization] = useState();
  const [location, setLocation] = useState();
  const [fees, setFees] = useState();
  const [gender, setGender] = useState();
  const [description, setDescription] = useState();
  const [selectedSkills, setSelectedSkills] = useState([]);

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
      fees,
      gender,
      description,
      selectedSkills,
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

  const handleCheckboxChange = (skill) => {
    setSelectedSkills((prevSelectedSkills) => {
      if (prevSelectedSkills.includes(skill)) {
        return prevSelectedSkills.filter((s) => s !== skill);
      } else {
        return [...prevSelectedSkills, skill];
      }
    });
  };
  const mynurse = {
    firstName: "Sarah",
    lastName: " Ahmed",
    location: "Cairo, Egypt",
    gender: "female",
    fees: 120,
    rating: 4,
    description:
      "Customers are not satisfied with our CRM systems we are providing, citing a lack of innovative updates and integration issues with other platforms, Which led to decreasing the company's revenue and increasing the employee turnover rate.",
    skills: [
      "Wound Care",
      "IV Therapy",
      "Patient Education",
      "Pain Management",
      "Infection Control",
      "Emergency Care",
    ],
  };

  return (
    <div className="min-h-screen flex justify-center bg-[var(--white-color)]">
      <div className="provider-page w-full bg-white">
        <ProviderProfileHeader provider={mynurse} type={"nurse"} />
        <SkillsSection skills={mynurse.skills} />
        <hr />
        
        <div className="main-div mx-auto mt-5">
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

            {/* fees */}
            <input
              required
              type="number"
              className="w-full p-2 border rounded-lg text-sm mb-5"
              placeholder="Enter your fees"
              value={fees}
              onChange={(e) => setFees(e.target.value)}
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
            </select>

            {/* description */}
            <textarea
              required
              className={`w-full p-2 border rounded-lg text-sm mb-5`}
              placeholder="Edit Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            {/* additional data */}
            <hr />
            <h1 className="gradient-text text-center text-xl font-bold mt-4 mb-4">
              Choose your skills
            </h1>

            {/* skills */}
            <div className="mb-4">
              {skillsList.map((skill) => (
                <label key={skill} className="block mb-2">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-primary"
                    checked={selectedSkills.includes(skill)}
                    onChange={() => handleCheckboxChange(skill)}
                  />
                  <span className="ml-2 text-sm">{skill}</span>
                </label>
              ))}
            </div>

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
