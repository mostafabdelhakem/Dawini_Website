import { useEffect, useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import DrImage from "../authentication/assets/doctor.jpg";
import NurseImage from "../authentication/assets/nurse.jpg";
import useFetch from "../customhooks/useFetch";

const ProviderInfo = ({ provider, role }) => {
  return (
    <div className="h-[300px] md:h-[200px] p-4 bg-white shadow-lg rounded-lg border flex items-center justify-center">
      <div className="flex flex-col gap-4 md:flex-row md:gap-0 items-center">
        <img
          className="w-24 h-24 rounded-full mr-4 object-cover"
          src={provider.gender === "male" ? DrImage : NurseImage}
          alt={`Provider Image`}
        />
        <div className="flex-grow text-center md:text-left">
          <h3 className="text-xl font-semibold">
            {role === "doctor" && "Dr."}{" "}
            {`${provider.firstName} ${provider.lastName}`}
          </h3>
          {role === "doctor" && (
            <p className="text-gray-600">{provider.specialization}</p>
          )}
          <p className="text-gray-500">{provider.location}</p>
          <p className="text-gray-500">{provider.gender}</p>
          <p className="text-gray-500">{`${provider.fees} LE`}</p>
          <div className="flex justify-center md:justify-start">
            {[...Array(5)].map((_, i) =>
              i < provider.rating ? (
                <FaStar key={i} className="text-yellow-400" />
              ) : (
                <FaRegStar key={i} className="text-gray-300" />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const BookingInfo = () => {
  return (
    <div className="flex flex-col justify-center min-w-[300px] max-w-[400px] gap-4">
      <h1 className="text-center font-bold text-2xl">Select Date</h1>
      <select name="" id="" className="rounded-md p-2 bg-[var(--white-color)]">
        <option value="">DD/MM/YYYY</option>
        <option value="">25/04/2024</option>
        <option value="">30/04/2024</option>
        <option value="">06/05/2024</option>
      </select>
      <div className="p-1"></div>
      <h1 className="text-center font-bold text-2xl">Select Time</h1>
      <select name="" id="" className="rounded-md p-2 bg-[var(--white-color)]">
        <option value="">HH:MM AM/PM</option>
        <option value="">04:30 PM</option>
        <option value="">05:30 PM</option>
        <option value="">06:30 PM</option>
      </select>
      <button className="gradient-background text-white font-bold rounded-md mt-6 p-2">
        Confirm Booking
      </button>
    </div>
  );
};

const BookingPage = () => {
  const { role, providerid } = useParams();

  const doctorByIDEndPoint = `https://dawiny-backend-48lm.vercel.app/api/v1/doctors/${providerid}`;
  const nurseByIDEndPoint = `https://dawiny-backend-48lm.vercel.app/api/v1/nurses/${providerid}`;

  const providerByIDEndPoint =
    role == "doctor" ? doctorByIDEndPoint : nurseByIDEndPoint;

  const { data: provider, isPending, error } = useFetch(providerByIDEndPoint);

  return (
    <div className="min-h-screen flex justify-center bg-[var(--white-color)]">
      <div className="provider-page min-h-full w-full bg-white p-10">
        <h1 className="section-title gradient-text">Book Now</h1>
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {provider && (
          <div className="h-[80%] grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex flex-col justify-center">
              <h1 className="text-center font-bold text-2xl mb-4">
                Booking With
              </h1>
              <ProviderInfo provider={provider} role={role} />
            </div>
            <div className="flex flex-col justify-center items-center">
              <BookingInfo />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingPage;
