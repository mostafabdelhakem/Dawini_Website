import { useState } from "react";
import { FaFilter } from "react-icons/fa";

const DoctorFilterBar = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    specialization: "",
    city: "",
    gender: "",
    rating: "",
    fees: "",
  });

  const SpecializationDropdown = () => {
    return (
      <select
        name="specialization"
        value={filters.specialization}
        className="p-2 rounded border"
      >
        <option value="">Specialization</option>
        <option value="cardiology">Cardiology</option>
        <option value="neurology">Neurology</option>
      </select>
    );
  };

  const CityDropdown = () => {
    return (
      <select name="city" value={filters.city} className="p-2 rounded border">
        <option value="">City</option>
        <option value="cairo">Cairo</option>
        <option value="alexandria">Alexandria</option>
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
      <button className="gradient-background opacity-85 hover:opacity-100 text-white font-bold py-2 px-4 rounded">
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

const NurseFilterBar = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    specialization: "",
    city: "",
    gender: "",
    rating: "",
    fees: "",
  });

  const handleFindClick = () => {};

  const CityDropdown = () => {
    return (
      <select name="city" value={filters.city} className="p-2 rounded border">
        <option value="">City</option>
        <option value="cairo">Cairo</option>
        <option value="alexandria">Alexandria</option>
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
        <h2 className="text-lg font-semibold">Filter Nurses</h2>
      </div>
      <div className="flex-grow grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2">
        <CityDropdown />
        <GenderDropdown />
        <RatingDropdown />
        <FeesInput />
      </div>
      <FindBtn />
    </div>
  );
};

const PharmacyFilterBar = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    city: "",
    workingHours: "",
    rating: "",
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

  const WorkingHoursDropdown = () => {
    return (
      <select
        name="workingHours"
        value={filters.workingHours}
        className="p-2 rounded border"
      >
        <option value="">workingHours</option>
        <option value="fullDay">Full Day</option>
        <option value="mostDay">Most Day</option>
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
        <h2 className="text-lg font-semibold">Filter Pharmacies</h2>
      </div>
      <div className="flex-grow grid grid-cols-1 md:grid-cols-3 gap-2">
        <CityDropdown />
        <WorkingHoursDropdown />
        <RatingDropdown />
      </div>
      <FindBtn />
    </div>
  );
};

function FilterBar({ role }) {
  return (
    <div>
      {(role == "doctor" && <DoctorFilterBar />) ||
        (role == "nurse" && <NurseFilterBar />) ||
        (role == "pharmacy" && <PharmacyFilterBar />)}
    </div>
  );
}

export default FilterBar;
