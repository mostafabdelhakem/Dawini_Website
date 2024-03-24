import ProviderPageHeader from "../components/FinderPageHeader";
import PharmacyImg from "../../patienthome/assets/pharmacy.jpg";
import AltNavbar from "../../patienthome/components/AltNavbar";
import { FaStar, FaRegStar } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
import { FaFilter } from "react-icons/fa";

const FilterBar = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    specialization: "",
    city: "",
    workingHours: "",
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

const PharmacyCard = ({ pharmacy }) => {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:gap-0  items-center p-4 bg-white shadow-lg rounded-lg border">
      <img
        className="w-24 h-24 rounded-full mr-4 object-cover"
        src={pharmacy.imageUrl}
        alt={`Dr. ${pharmacy.name}`}
      />
      <div className="flex-grow text-center md:text-left">
        <h3 className="text-xl font-semibold">{`${pharmacy.name}`}</h3>
        <p className="text-gray-500">{pharmacy.location}</p>
        <p className="text-gray-500">{`${pharmacy.workingHours}`}</p>
        <div className="flex justify-center md:justify-start">
          {[...Array(5)].map((_, i) =>
            i < pharmacy.rating ? (
              <FaStar key={i} className="text-yellow-400" />
            ) : (
              <FaRegStar key={i} className="text-gray-300" />
            )
          )}
        </div>
      </div>
      <button className="gradient-background opacity-90 hover:opacity-100 text-white font-bold py-2 px-4 rounded">
        View On Map
      </button>
    </div>
  );
};

const FindPharmacy = () => {
  const pharmacies = [
    {
      imageUrl: PharmacyImg,
      name: "Al Ezaby",
      location: "Cairo Egypt",
      workingHours: "Full Day",
      rating: 4,
    },
    {
      imageUrl: PharmacyImg,
      name: "Al Ezaby",
      location: "Cairo Egypt",
      workingHours: "Full Day",
      rating: 4,
    },
    {
      imageUrl: PharmacyImg,
      name: "Al Ezaby",
      location: "Cairo Egypt",
      workingHours: "Full Day",
      rating: 4,
    },
    {
      imageUrl: PharmacyImg,
      name: "Al Ezaby",
      location: "Cairo Egypt",
      workingHours: "Full Day",
      rating: 4,
    },
    {
      imageUrl: PharmacyImg,
      name: "Al Ezaby",
      location: "Cairo Egypt",
      workingHours: "Full Day",
      rating: 4,
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
          <ProviderPageHeader imgSrc={PharmacyImg} providerTitle={"Pharmacy"} />
          <FilterBar />
          <div className="p-8 grid gap-4 grid-cols-1 lg:grid-cols-2">
            {pharmacies.map((pharmacy) => (
              <PharmacyCard pharmacy={pharmacy} />
            ))}
          </div>
          <ShowMoreBtn />
        </div>
      </div>
    </div>
  );
};

export default FindPharmacy;
