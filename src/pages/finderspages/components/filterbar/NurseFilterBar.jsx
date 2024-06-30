import { useState } from "react";
import { FaFilter } from "react-icons/fa";

const NurseFilterBar = ({ setEndPoint }) => {
  const initialFilters = {
    location: "",
    gender: "",
    rating: "",
    appointmentFees: "",
  };

  const [filters, setFilters] = useState(initialFilters);

  const LocationDropdown = () => {
    const handleLocationDropdown = (e) => {
      setFilters({ ...filters, location: e.target.value });
    };

    return (
      <select
        onChange={handleLocationDropdown}
        value={filters.location}
        name="location"
        className="p-2 rounded border"
      >
        <option value="">Location</option>
        <option value="Cairo">Cairo</option>
        <option value="Alexandria">Alexandria</option>
      </select>
    );
  };

  const GenderDropdown = () => {
    const handleGenderDropdown = (e) => {
      setFilters({ ...filters, gender: e.target.value });
    };

    return (
      <select
        onChange={handleGenderDropdown}
        value={filters.gender}
        name="gender"
        className="p-2 rounded border"
      >
        <option value="">Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
    );
  };

  const RatingDropdown = () => {
    const handleRatingDropdown = (e) => {
      setFilters({ ...filters, rating: e.target.value });
    };

    return (
      <select
        onChange={handleRatingDropdown}
        value={filters.rating}
        name="rating"
        className="p-2 rounded border"
      >
        <option value="">Min Rating</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    );
  };

  const FeesInput = () => {
    const handleFeesInput = (e) => {
      console.log("Input value:", e.target.value);
      setFilters({ ...filters, appointmentFees: e.target.value });
    };

    return (
      <input
        onChange={handleFeesInput}
        value={filters.appointmentFees}
        type="number"
        name="fees"
        placeholder="Max Fees"
        className="p-2 rounded border"
      />
    );
  };

  const FindBtn = () => {
    const onFindBtnClick = () => {
      const { location, gender, rating, appointmentFees } = filters;

      const filterLocation = location ? `location=${location}` : "";
      const filterGender = gender ? `gender=${gender}` : "";
      const filterRating = rating ? `rating[gte]=${rating}` : "";
      const filterAppointmentFees = appointmentFees
        ? `appointmentFees[lte]=${appointmentFees}`
        : "";

      const filterValues = [
        filterLocation,
        filterGender,
        filterRating,
        filterAppointmentFees,
      ];

      const filtersString = filterValues
        .filter((value) => value !== "")
        .join("&");

      const filtrationEndPoint = `https://dawiny-backend-48lm.vercel.app/api/v1/nurses?${filtersString}`;
      console.log(filtrationEndPoint);
      setEndPoint(filtrationEndPoint);
    };

    return (
      <button
        onClick={onFindBtnClick}
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
        <h2 className="text-lg font-semibold text-nowrap">Filter Nurses</h2>
      </div>
      <div className="flex-grow grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-2">
        <LocationDropdown />
        <GenderDropdown />
        <RatingDropdown />
        <FeesInput />
        <FindBtn />
      </div>
    </div>
  );
};

export default NurseFilterBar;
