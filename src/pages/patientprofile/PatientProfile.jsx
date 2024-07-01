import { useParams } from "react-router-dom";
import MalePatient from "../../assets/male-patient.jpg";
import FemalePatient from "../../assets/female-patient.jpg";
import AltNavbar from "../patienthome/components/AltNavbar";
import useFetch from "../customhooks/useFetch";

function PatientInfo({ patient }) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:gap-0 items-center p-4">
      <img
        className="w-[250px] h-[250px] rounded-full md:mr-16 object-cover"
        src={
          (patient.gender === "male") | (patient.gender === "Male")
            ? MalePatient
            : FemalePatient
        }
        alt={`patient`}
      />
      <div className="flex-grow text-center md:text-left">
        <h3 className="text-4xl font-semibold">{`${patient.firstName} ${patient.lastName}`}</h3>
        <p className="text-gray-500 text-xl mt-1">{patient.city}</p>
        <p className="text-gray-500 text-xl mt-1">{patient.gender}</p>
        <p className="text-gray-500 text-xl mt-1">{patient.phoneNumber}</p>
      </div>
    </div>
  );
}

function Reservation({ reservation }) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center w-full px-4 py-2 bg-[var(--white-color)] rounded-lg">
      <h1 className="font-bold text-xl pb-1">{`Booking with ${reservation.role} ${reservation.providerFirstName} ${reservation.providerLastName}`}</h1>
      <div className="flex gap-2">
        <p>{`Date: ${reservation.date}`}</p>
        <p>{`Time: ${reservation.time}`}</p>
      </div>
    </div>
  );
}

function PatientProfile() {
  let { patientid } = useParams();
  patientid = patientid.split(":")[1];
  console.log(patientid);
  const patientByIDEndPoint = `https://dawiny-backend-48lm.vercel.app/api/v1/patients/${patientid}`;

  const { data: patient, isPending, error } = useFetch(patientByIDEndPoint);

  return (
    <div>
      <AltNavbar />
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {patient && (
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
                {patient && patient.reservations && (
                  <div className="flex flex-col gap-3">
                    {patient.reservations.map((reservation) => (
                      <Reservation
                        key={reservation.id}
                        reservation={reservation}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PatientProfile;
