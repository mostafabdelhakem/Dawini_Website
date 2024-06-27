import { FaStar, FaRegStar } from "react-icons/fa";
import DrImage from "../../authentication/assets/doctor.jpg";
import NurseImage from "../../authentication/assets/nurse.jpg";

const ProviderProfileHeader = ({ provider, role }) => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center items-center my-10 max-w-[800px]">
        <div className="flex flex-col gap-4 md:flex-row md:gap-0 items-center p-4">
          <img
            className="w-[250px] h-[250px] rounded-full md:mr-16 object-cover"
            src={provider.gender === "male" ? DrImage : NurseImage}
            alt={`Provider Image`}
          />
          <div className="flex-grow text-center md:text-left">
            <h3 className="text-4xl font-semibold">
              {role === "doctor" && "Dr."}{" "}
              {`${provider.firstName} ${provider.lastName}`}
            </h3>
            {role === "doctor" && (
              <p className="text-gray-600 text-xl mt-1">
                {provider.specialization}
              </p>
            )}
            <p className="text-gray-500 text-xl mt-1">{provider.location}</p>
            <p className="text-gray-500 text-xl mt-1">{provider.gender}</p>
            <p className="text-gray-500 text-xl mt-1">{`${provider.fees} LE`}</p>
            <div className="flex justify-center md:justify-start text-xl mt-1">
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
        <p className="text-gray-500 text-xl mt-4 md:mt-8 p-4 text-justify">
          {provider.description}
        </p>
      </div>
    </div>
  );
};

export default ProviderProfileHeader;
