import { FaStar, FaRegStar } from "react-icons/fa";

const ProviderCard = ({ provider, type }) => {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:gap-0 items-center p-4 bg-white shadow-lg rounded-lg border">
      <img
        className="w-24 h-24 rounded-full mr-4 object-cover"
        src={provider.imageUrl}
        alt={`Dr. ${provider.name}`}
      />
      <div className="flex-grow text-center md:text-left">
        <h3 className="text-xl font-semibold">
          {type == "doctor" && "Dr."} {provider.name}
        </h3>
        {type == "doctor" && (
          <p className="text-gray-600">{provider.specialization}</p>
        )}
        <p className="text-gray-500">{provider.location}</p>
        <p className="text-gray-500">{provider.gender}</p>
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
      <button className="gradient-background opacity-90 hover:opacity-100 text-white font-bold py-2 px-4 rounded">
        View Profile
      </button>
    </div>
  );
};

export default ProviderCard;
