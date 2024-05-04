import DrImage from "../../authentication/assets/doctor.jpg";
import AltNavbar from "../../patienthome/components/AltNavbar";
import ProviderPageHeader from "../components/FinderPageHeader";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
import { FaFilter } from "react-icons/fa";
import ProviderCard from "../components/ProviderCard";

// FilterBar Component
const FilterBar = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    specialization: "",
    city: "",
    gender: "",
    rating: "",
    fees: "",
  });

  // const handleFilterChange = (e) => {
  //   const { name, value } = e.target;
  //   setFilters((prevFilters) => ({
  //     ...prevFilters,
  //     [name]: value,
  //   }));
  // };

  const handleFindClick = () => {
    // onFilterChange(filters);
  };

  const SpecializationDropdown = () => {
    return (
      <select
        name="specialization"
        value={filters.specialization}
        className="p-2 rounded border"
      >
        <option value="">Specialization</option>
        {/* Replace with actual options */}
        <option value="cardiology">Cardiology</option>
        <option value="neurology">Neurology</option>
        {/* ... */}
      </select>
    );
  };

  const CityDropdown = () => {
    return (
      <select name="city" value={filters.city} className="p-2 rounded border">
        <option value="">City</option>
        {/* Replace with actual options */}
        <option value="cairo">Cairo</option>
        <option value="alexandria">Alexandria</option>
        {/* ... */}
      </select>
    );
  };

  const GenderDropdown = () => {
    return (
      <select
        name="gender"
        value={filters.gender}
        className="p-2 rounded border"
      >
        <option value="">Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    );
  };

  const RatingDropdown = () => {
    return (
      <select
        name="rating"
        value={filters.rating}
        className="p-2 rounded border"
      >
        <option value="">Rating</option>
        <option value="1">1 Star</option>
        <option value="2">2 Stars</option>
        <option value="3">3 Stars</option>
        <option value="4">4 Stars</option>
        <option value="5">5 Stars</option>
      </select>
    );
  };

  const FeesInput = () => {
    return (
      <input
        type="number"
        name="fees"
        value={filters.fees}
        placeholder="Max Fees"
        className="p-2 rounded border"
      />
    );
  };

  const FindBtn = () => {
    return (
      <button
        onClick={handleFindClick}
        className="gradient-background opacity-85 hover:opacity-100 text-white font-bold py-2 px-4 rounded"
      >
        Find
      </button>
    );
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center gap-4 bg-white p-4 shadow rounded-lg">
      <div className="flex items-center mb-4 md:mb-0">
        <FaFilter className="text-xl text-gray-700 mr-2" />
        <h2 className="text-lg font-semibold">Filter Doctors</h2>
      </div>
      <div className="flex-grow grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-2">
        <SpecializationDropdown />
        <CityDropdown />
        <GenderDropdown />
        <RatingDropdown />
        <FeesInput />
      </div>
      <FindBtn />
    </div>
  );
};

// // Parent Component Example Usage
// const ParentComponent = () => {
//   // State for doctors list
//   const [doctors, setDoctors] = useState(/* Your initial doctors list */);

//   // Function to handle filter changes
//   const handleFilterChange = (filters) => {
//     // Implement your filtering logic here
//     // Update the doctors state based on the filters
//   };

//   return (
//     <div>
//       <FilterBar onFilterChange={handleFilterChange} />
//       {/* Render your doctors list here */}
//     </div>
//   );
// };

const FindDoctor = () => {
  const doctors = [
    {
      imageUrl: DrImage,
      name: "Sarah Ahmed",
      specialization: "Cardiology",
      location: "Cairo, Egypt",
      gender: "Female",
      rating: 4,
    },
    {
      imageUrl: DrImage,
      name: "Tarek El-Sayed",
      specialization: "Neurology",
      location: "Alexandria, Egypt",
      gender: "Male",
      rating: 5,
    },
    {
      imageUrl: DrImage,
      name: "Laila Mahmoud",
      specialization: "Pediatrics",
      location: "Giza, Egypt",
      gender: "Female",
      rating: 4,
    },
    {
      imageUrl: DrImage,
      name: "Amr Youssef",
      specialization: "Orthopedics",
      location: "Luxor, Egypt",
      gender: "Male",
      rating: 4,
    },
    {
      imageUrl: DrImage,
      name: "Heba Mostafa",
      specialization: "Dermatology",
      location: "Aswan, Egypt",
      gender: "Female",
      rating: 5,
    },
    {
      imageUrl: DrImage,
      name: "Sarah Ahmed",
      specialization: "Cardiology",
      location: "Cairo, Egypt",
      gender: "Female",
      rating: 4,
    },
    {
      imageUrl: DrImage,
      name: "Tarek El-Sayed",
      specialization: "Neurology",
      location: "Alexandria, Egypt",
      gender: "Male",
      rating: 5,
    },
    {
      imageUrl: DrImage,
      name: "Laila Mahmoud",
      specialization: "Pediatrics",
      location: "Giza, Egypt",
      gender: "Female",
      rating: 4,
    },
    {
      imageUrl: DrImage,
      name: "Amr Youssef",
      specialization: "Orthopedics",
      location: "Luxor, Egypt",
      gender: "Male",
      rating: 4,
    },
    {
      imageUrl: DrImage,
      name: "Heba Mostafa",
      specialization: "Dermatology",
      location: "Aswan, Egypt",
      gender: "Female",
      rating: 5,
    },
    {
      imageUrl: DrImage,
      name: "Heba Mostafa",
      specialization: "Dermatology",
      location: "Aswan, Egypt",
      gender: "Female",
      rating: 5,
    },
  ];

  const ShowMoreBtn = () => {
    return (
      <div className="w-full flex justify-center items-center mb-8">
        <button className="gradient-background text-white py-4 px-8 rounded-full shadow-lg font-bold">
          <p className="flex items-center gap-2">
            Show More <MdKeyboardArrowDown />
          </p>
        </button>
      </div>
    );
  };

  return (
    <div>
      <AltNavbar />
      <div className="min-h-screen flex justify-center bg-[var(--white-color)]">
        <div className="provider-page bg-white">
          <ProviderPageHeader imgSrc={DrImage} providerTitle={"Doctor"} />
          <FilterBar />
          <div className="p-8 grid gap-4 grid-cols-1 lg:grid-cols-2">
            {doctors.map((doctor) => (
              <ProviderCard provider={doctor} type={"doctor"} />
            ))}
          </div>
          <ShowMoreBtn />
        </div>
      </div>
    </div>
  );
};

export default FindDoctor;
