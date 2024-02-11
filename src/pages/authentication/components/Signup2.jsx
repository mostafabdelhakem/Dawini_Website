import React from "react";
import { useState } from "react";

const Signup2 = () => {
  const [frontImage, setFrontImage] = useState(null);
  const [backImage, setBackImage] = useState(null);

  const handleFileChange = (event, side) => {
    const file = event.target.files[0];
    if (file) {
      // Check for valid image file types
      if (!["image/png", "image/jpeg", "image/gif"].includes(file.type)) {
        console.error("Invalid file type. Please select a valid image file.");
        return;
      }

      if (side === "front") {
        setFrontImage(file);
      } else if (side === "back") {
        setBackImage(file);
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
  return (
    <div className="h-screen w-screen flex ">
      <div className="main-div">
        <h1 className="gradient-text section-title">Upload your ID card</h1>
        <form>
          {/* ID front */}
          <div className="flex items-center space-x-4 mb-4">
            <label htmlFor="photo">Front</label>
            <input
              type="file"
              id="frontID"
              className="block w-full p-3 rounded-md border border-gray-300 "
              accept="image/png, image/jpeg, image/gif"
              onChange={(event) => handleFileChange(event, "front")}
            />
          </div>

          {/* ID back */}
          <div className="flex items-center space-x-4 mb-4">
            <label htmlFor="photo">Back</label>
            <input
              type="file"
              id="backID"
              className="block w-full p-3 rounded-md border border-gray-300 "
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

export default Signup2;
