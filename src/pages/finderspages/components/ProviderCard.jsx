import { FaStar, FaRegStar } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import DrImage from "../../authentication/assets/doctor.jpg";
import NurseImage from "../../authentication/assets/nurse.jpg";
import PharmacyImg from "../../patienthome/assets/pharmacy.jpg";

const PharmacyCard = ({ pharmacy }) => {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:gap-0  items-center p-4 bg-white shadow-lg rounded-lg border">
      <img
        className="w-24 h-24 rounded-full mr-4 object-cover"
        src={PharmacyImg}
        alt={`Pharmacy Image`}
      />
      <div className="flex-grow text-center md:text-left">
        <h3 className="text-xl font-semibold">{`${pharmacy.name}`}</h3>
        <p className="text-gray-500">{pharmacy.city}</p>
        <p className="text-gray-500">{`${
          pharmacy.fullOrHalf === "Full" ? "Full Day" : "Night Shift"
        }`}</p>
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
      <button
        onClick={() => window.open(pharmacy.location, "_blank")}
        className="gradient-background opacity-90 hover:opacity-100 text-white font-bold py-2 px-4 rounded"
      >
        View On Map
      </button>
    </div>
  );
};

const DoctorOrNurseCard = ({ provider }) => {
  const { patientid, role } = useParams();

  let navigate = useNavigate();
  const routeChange = () => {
    navigate(
      `/patienthome/${patientid}/findprovider/${role}/providerprofile/${provider._id}`
    );
  };

  return (
    <div className="flex flex-col gap-4 md:flex-row md:gap-0 items-center p-4 bg-white shadow-lg rounded-lg border">
      <img
        className="w-24 h-24 rounded-full mr-4 object-cover"
        src={
          (provider.gender === "male") | (provider.gender === "Male")
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
      <button
        onClick={routeChange}
        className="gradient-background opacity-90 hover:opacity-100 text-white font-bold py-2 px-4 rounded"
      >
        View Profile
      </button>
    </div>
  );
};

const ProviderCard = ({ provider, role }) => {
  return (
    <div>
      {role == "pharmacy" ? (
        <PharmacyCard pharmacy={provider} />
      ) : (
        <DoctorOrNurseCard provider={provider} />
      )}
    </div>
  );
};

export default ProviderCard;
