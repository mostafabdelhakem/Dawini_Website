import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MalePatient from "../../assets/male-patient.jpg";
import FemalePatient from "../../assets/female-patient.jpg";
import AltNavbar from "../patienthome/components/AltNavbar";

function PatientInfo({ patient }) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:gap-0 items-center p-4">
      <img
        className="w-[250px] h-[250px] rounded-full md:mr-16 object-cover"
        src={patient.gender == "male" ? MalePatient : FemalePatient}
        alt={`patient`}
      />
      <div className="flex-grow text-center md:text-left">
        <h3 className="text-4xl font-semibold">{`${patient.firstName} ${patient.lastName}`}</h3>
        <p className="text-gray-500 text-xl mt-1">{patient.location}</p>
        <p className="text-gray-500 text-xl mt-1">{patient.gender}</p>
        <p className="text-gray-500 text-xl mt-1">{patient.phoneNumber}</p>
      </div>
    </div>
  );
}

function Booking({ booking }) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center w-full px-4 py-2 bg-[var(--white-color)] rounded-lg">
      <h1 className="font-bold text-xl pb-1">{`Booking with ${booking.providerRole} ${booking.providerFirstName} ${booking.providerLastName}`}</h1>
      <div className="flex gap-2">
        <p>{`Date: ${booking.bookingDate}`}</p>
        <p>{`Time: ${booking.bookingTime}`}</p>
      </div>
    </div>
  );
}

function PatientProfile() {
  const { patientid } = useParams();
  const [patient, setPatient] = useState(null);
  const patientByIDEndPoint = `http://localhost:8000/patients/${patientid}`;

  useEffect(() => {
    const fetchPatientInfo = async () => {
      try {
        const response = await fetch(patientByIDEndPoint);
        if (!response.ok) {
          throw new Error("Failed to fetch patient data");
        }
        const data = await response.json();
        setPatient(data);
      } catch (error) {
        console.error("Error fetching patient data:", error);
        // Handle error state or retry logic here
      }
    };

    fetchPatientInfo();
  }, [patientid]);

  if (!patient) {
    return <div>Loading...</div>; // or show a loading indicator
  }

  return (
    <div>
      <AltNavbar />
      <div className="min-h-screen flex justify-center bg-[var(--white-color)]">
        <div className="provider-page w-full bg-white">
          <div className="border-b mb-10 p-10 flex flex-col items-center">
            <h1 className="gradient-text text-4xl font-bold mb-10">
              Patient Info
            </h1>
            <PatientInfo patient={patient} />
          </div>
          <div className="flex flex-col items-center mb-10">
            <h1 className="gradient-text text-4xl font-bold mb-10">
              Bookings History
            </h1>
            <div className="px-5 m:px-10 lg:px-20 w-full">
              <div className="flex flex-col gap-3">
                {patient.bookings.map((booking) => (
                  <Booking booking={booking} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientProfile;
