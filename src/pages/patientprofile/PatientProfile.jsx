import DrImage from "../authentication/assets/doctor.jpg";
import AltNavbar from "../patienthome/components/AltNavbar";

function PatientInfo() {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:gap-0 items-center p-4">
      <img
        className="w-[250px] h-[250px] rounded-full md:mr-16 object-cover"
        src={DrImage}
        alt={`patient`}
      />
      <div className="flex-grow text-center md:text-left">
        <h3 className="text-4xl font-semibold">Ahmed Mohammed</h3>
        <p className="text-gray-500 text-xl mt-1">Cairo</p>
        <p className="text-gray-500 text-xl mt-1">Male</p>
      </div>
    </div>
  );
}

function Booking() {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center w-full px-4 py-2 bg-[var(--white-color)] rounded-lg">
      <h1 className="font-bold text-xl pb-1">Booking with Dr. Sarah</h1>
      <div className="flex gap-2">
        <p>Date: 25/7/2023</p>
        <p>Time: 01:30 PM</p>
      </div>
    </div>
  );
}

function PatientProfile() {
  return (
    <div>
      <AltNavbar />
      <div className="min-h-screen flex justify-center bg-[var(--white-color)]">
        <div className="provider-page w-full bg-white">
          <div className="border-b mb-10 p-10 flex flex-col items-center">
            <h1 className="gradient-text text-4xl font-bold mb-10">
              Patient Info
            </h1>
            <PatientInfo />
          </div>
          <div className="flex flex-col items-center mb-10">
            <h1 className="gradient-text text-4xl font-bold mb-10">
              Bookings History
            </h1>
            <div className="px-5 m:px-10 lg:px-20 w-full">
              <div className="flex flex-col gap-3">
                <Booking />
                <Booking />
                <Booking />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientProfile;
