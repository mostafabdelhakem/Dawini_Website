import { useEffect, useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import DrImage from "../authentication/assets/doctor.jpg";
import NurseImage from "../authentication/assets/nurse.jpg";
import useFetch from "../customhooks/useFetch";

const ProviderInfo = ({ provider, role }) => {
  return (
    <div className="h-[300px] md:h-[200px] p-4 bg-white shadow-lg rounded-lg border flex items-center justify-center">
      <div className="flex flex-col gap-4 md:flex-row md:gap-0 items-center">
        <img
          className="w-24 h-24 rounded-full mr-4 object-cover"
          src={
            provider.gender === "male" || provider.gender === "Male"
              ? DrImage
              : NurseImage
          }
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
          <p className="text-gray-500">{`${provider.appointmentFees} LE`}</p>
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

const BookingInfo = ({ provider, role }) => {
  const availableAppointments = provider.availableAppointments;

  const { patientid, providerid } = useParams();

  let navigate = useNavigate();

  const initialAppointment = {
    date: "",
    time: "",
  };

  const [appointment, setAppointment] = useState(initialAppointment);

  const handleConfirmBtn = async () => {
    const requestedAppointmentObj = {
      patientId: patientid,
      providerId: providerid,
      date: appointment.date.split("T")[0],
      time: appointment.time,
    };

    console.log("requestedAppointmentObj:", requestedAppointmentObj);

    try {
      const response = await fetch(
        "https://dawiny-backend-48lm.vercel.app/api/v1/appointments/patient/book-appointment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Add any other headers as needed
          },
          body: JSON.stringify(requestedAppointmentObj),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to book appointment");
      }

      const responseData = await response.json();
      console.log("Response from server:", responseData);

      if (response.status == 201) {
        const alertMessage = `Your appointment with ${role} ${
          provider.firstName
        } ${provider.lastName} at date: ${
          appointment.date.split("T")[0]
        } - time ${appointment.time} is reserved.`;

        // Show alert for 3 seconds
        alert(alertMessage);

        // Delay navigation after 3 seconds
        setTimeout(() => {
          navigate(`/patienthome/${patientid}`);
        }, 2000); // 3000 milliseconds = 3 seconds
      }
      // Handle any further actions after successful booking
      // For example, updating UI or state
    } catch (error) {
      console.error("Error booking appointment:", error.message);
      // Handle error gracefully, show message to user, etc.
    }
  };

  const handleSelectAppointment = (e) => {
    const { value } = e.target; // Assuming `value` is a string representation of the appointment object
    console.log(value);
    setAppointment(JSON.parse(value)); // Parse the value back into an object
  };

  return (
    <div className="flex flex-col justify-center min-w-[300px] max-w-[400px] gap-4">
      <h1 className="text-center font-bold text-2xl">Available Appointments</h1>
      <select
        onChange={handleSelectAppointment}
        value={JSON.stringify(appointment)} // Serialize appointment object to string for value
        className="rounded-md p-2 bg-[var(--white-color)]"
      >
        <option value={JSON.stringify(initialAppointment)}>
          Choose Appointment
        </option>
        {availableAppointments &&
          availableAppointments.map((appointment, index) => (
            <option
              key={index}
              value={JSON.stringify({
                date: appointment.date,
                time: appointment.time,
              })}
            >
              {`Date: ${appointment.date.split("T")[0]} - Time: ${
                appointment.time
              }`}
            </option>
          ))}
      </select>
      <button
        onClick={handleConfirmBtn}
        className="gradient-background text-white font-bold rounded-md mt-6 p-2"
      >
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
              <BookingInfo provider={provider} role={role} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingPage;
