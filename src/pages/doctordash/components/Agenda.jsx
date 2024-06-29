/* eslint-disable no-unused-vars */
import PatientImg from "../../../assets/patient image.jpg";
import { useState } from "react";
import { FaFilter } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

const FilterBar = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    month: "",
    year: "",
  });

  const handleFindClick = () => {
    // onFilterChange(filters);
  };

  const MonthFilter = () => {
    return (
      <select name="month" value={filters.month} className="p-2 rounded border">
        <option value="">Moth</option>
        <option value="jan">January</option>
        <option value="feb">February</option>
        <option value="mar">March</option>
        <option value="apr">April</option>
        <option value="may">May</option>
        <option value="jun">June</option>
        <option value="jul">July</option>
        <option value="aug">August</option>
        <option value="sep">September</option>
        <option value="oct">October</option>
        <option value="nov">November</option>
        <option value="dec">December</option>
      </select>
    );
  };

  const YearFilter = () => {
    return (
      <select name="year" value={filters.year} className="p-2 rounded border">
        <option value="">Year</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
        <option value="2025">2025</option>
        <option value="2026">2026</option>
        <option value="2027">2027</option>
        <option value="2028">2028</option>
        <option value="2029">2029</option>
        <option value="2030">2030</option>
      </select>
    );
  };

  const FilterBtn = () => {
    return (
      <button
        onClick={handleFindClick}
        className="gradient-background opacity-85 hover:opacity-100 text-white font-bold py-2 px-4 rounded"
      >
        Filter
      </button>
    );
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center gap-4 bg-white p-4 shadow rounded-lg">
      <div className="flex items-center mb-4 md:mb-0">
        <FaFilter className="text-xl text-gray-700 mr-2" />
        <h2 className="text-lg font-semibold">Filter Patients</h2>
      </div>
      <div className="flex-grow grid grid-cols-1 md:grid-cols-3 gap-2">
        <MonthFilter />
        <YearFilter />
      </div>
      <FilterBtn />
    </div>
  );
};

const PatientCard = ({ patient }) => {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:gap-0 items-center p-4 bg-white shadow-lg rounded-lg border">
      <img
        className="w-24 h-24 rounded-full mr-4 object-cover"
        src={patient.image}
        alt={`${patient.name}`}
      />
      <div className="flex-grow text-center md:text-left">
        <h3 className="text-xl font-semibold">{`${patient.name}`}</h3>
        <p className="text-gray-500">{patient.age}</p>
        <p className="text-gray-500">{`${patient.gender}`}</p>
        <p className="text-gray-500">{`${patient.phone}`}</p>
      </div>
      {/* <button className="gradient-background opacity-90 hover:opacity-100 text-white font-bold py-2 px-4 rounded">
        Call Patient
      </button> */}
    </div>
  );
};

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

const Agenda = () => {
  const patients = [
    {
      id: 1,
      image: PatientImg,
      name: "Ahmed Mohamed",
      age: 35,
      gender: "Male",
      phone: "0502133211",
    },
    {
      id: 2,
      image: PatientImg,

      name: "Wfaa Mohamed",
      age: 45,
      gender: "Female",
      phone: "0502133211",
    },
    {
      id: 3,
      image: PatientImg,

      name: "Mariam Wael",
      age: 25,
      gender: "Female",
      phone: "0502133211",
    },
    {
      id: 4,
      image: PatientImg,
      name: "Saad Omar",
      age: 30,
      gender: "Male",
      phone: "0502133211",
    },
  ];

  return (
    <div className="min-h-screen flex justify-center bg-[var(--white-color)]">
      <div className="provider-page bg-white">
        {/* <FilterBar /> */}
        <div className="p-8 grid gap-4 grid-cols-1">
          {patients.map((patient) => (
            <PatientCard patient={patient} />
          ))}
        </div>
        <ShowMoreBtn />
      </div>
    </div>
  );
};

export default Agenda;
