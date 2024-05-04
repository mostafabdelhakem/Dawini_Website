import React, { useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const Patients = () => {
  const patients = [
    { id: 1, name: "John Doe", age: 35, gender: "Male" },
    {
      id: 2,
      name: "Jane Smith",
      age: 45,
      gender: "Female",
    },
    {
      id: 3,
      name: "Alice Johnson",
      age: 25,
      gender: "Female",
    },
    {
      id: 4,
      name: "Mike Smith",
      age: 30,
      gender: "Male",
    },
  ];

  const Title = () => {
    return <div className="font-bold text-xl p-3 gradient-text text-center">Patients List</div>;
  };

  const [selectedPatient, setSelectedPatient] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPatients, setFilteredPatients] = useState([]);

  const handleSelectPatient = (patientId) => {
    setSelectedPatient(patientId);
  };

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    const filtered = query
      ? patients.filter((patient) =>
          patient.name.toLowerCase().includes(query.toLowerCase())
        )
      : [];
    setFilteredPatients(filtered);
  };

  const patientList = searchQuery.length > 0 ? filteredPatients : patients;

  const Search = () => {
    return (
      <div className="">
        {/* Centering the patient list */}
        <div className="w-full max-w-lg">
          <input
            type="text"
            placeholder="Search for patient"
            value={searchQuery}
            onChange={handleSearch}
            className="border border-gray-300 rounded-lg p-2 w-full text-sm mb-5"
          />
          <TransitionGroup component="ul" className="grid grid-cols-1 gap-2">
            {patientList.map((patient) => (
              <CSSTransition key={patient.id} timeout={300} classNames="fade">
                <li
                  onClick={() => handleSelectPatient(patient.id)}
                  className="bg-gray-200 p-2 rounded cursor-pointer hover:bg-gray-300 "
                >
                  {patient.name}
                </li>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
      </div>
    );
  };

  const Selection = () => {
    return (
      <div>
        {selectedPatient && (
          <div className="max-w-full text-center mt-4 p-8 gradient-background rounded-md">
            <h2 className="text-lg font-bold m-2 ">Selected Patient Details</h2>
            <p>
              Name:{" "}
              {patients.find((patient) => patient.id === selectedPatient).name}
            </p>
            <p>
              Age:{" "}
              {patients.find((patient) => patient.id === selectedPatient).age}
            </p>
            <p>
              Gender:{" "}
              {
                patients.find((patient) => patient.id === selectedPatient)
                  .gender
              }
            </p>
          </div>
        )}
      </div>
    );
  };

  // main return of this function
  return (
    <div className="items-center justify-center">
      <div className="mt-50 md:mt-0 w-full p-8 lg:gap-20">
        <Title />
        <Search />
        <Selection />
      </div>
    </div>
  );
};

export default Patients;
