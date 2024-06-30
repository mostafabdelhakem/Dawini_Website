import { useState } from "react";
import { FaFilter } from "react-icons/fa";

const PharmacyFilterBar = ({ setEndPoint }) => {
  const initialFilters = {
    city: "",
    fullOrHalf: "",
    rating: "",
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

  const WorkingHoursDropdown = () => {
    const handleWorkingHoursDropdown = (e) => {
      setFilters({ ...filters, fullOrHalf: e.target.value });
    };

    return (
      <select
        onChange={handleWorkingHoursDropdown}
        name="workingHours"
        value={filters.fullOrHalf}
        className="p-2 rounded border"
      >
        <option value="">workingHours</option>
        <option value="Full Day">Full Day</option>
        <option value="Night Shift">Night Shift</option>
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

  const FindBtn = () => {
    const onFindBtnClick = () => {
      const { city, fullOrHalf, rating } = filters;

      const filterCity = city ? `city=${city}` : "";
      const filterFullOrHalf = fullOrHalf ? `fullOrHalf=${fullOrHalf}` : "";
      const filterRating = rating ? `rating[gte]=${rating}` : "";

      const filterValues = [filterCity, filterFullOrHalf, filterRating];

      const filtersString = filterValues
        .filter((value) => value !== "")
        .join("&");

      const filtrationEndPoint = `https://dawiny-backend-48lm.vercel.app/api/v1/pharmacies?${filtersString}`;
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
        <h2 className="text-lg font-semibold text-nowrap">Filter Pharmacies</h2>
      </div>
      <div className="flex-grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        <LocationDropdown />
        <WorkingHoursDropdown />
        <RatingDropdown />
        <FindBtn />
      </div>
    </div>
  );
};

export default PharmacyFilterBar;
