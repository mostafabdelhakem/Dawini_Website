import { useParams } from "react-router-dom";
import AltNavbar from "../patienthome/components/AltNavbar";
import FilterBar from "./components/filterbar/FilterBar";
import FinderPageHeader from "./components/FinderPageHeader";
import { MdKeyboardArrowDown } from "react-icons/md";
import ProviderCard from "./components/ProviderCard";
import useFetch from "../customhooks/useFetch";
import { useState } from "react";

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

const ProvidersList = ({ providersEndPoint, role }) => {
  const { data: providers, isPending, error } = useFetch(providersEndPoint);

  return (
    <div>
      <div className="p-8 grid gap-4 grid-cols-1 lg:grid-cols-2">
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {providers &&
          providers.map((provider) => (
            <ProviderCard provider={provider} role={role} />
          ))}
      </div>
      <ShowMoreBtn />
    </div>
  );
};

function FindProvider() {
  const { role } = useParams();
  const doctorsEndPoint =
    "https://dawiny-backend-48lm.vercel.app/api/v1/doctors/";
  const nursesEndPoint = "https://dawiny-backend-48lm.vercel.app/api/v1/nurses";
  const pharmaciesEndPoint =
    "https://dawiny-backend-48lm.vercel.app/api/v1/pharmacies";

  const [endPoint, setEndPoint] = useState(
    (role == "doctor" && doctorsEndPoint) ||
      (role == "nurse" && nursesEndPoint) ||
      (role == "pharmacy" && pharmaciesEndPoint)
  );
  console.log(endPoint);

  return (
    <div>
      <AltNavbar />
      <div className="min-h-screen flex justify-center bg-[var(--white-color)]">
        <div className="provider-page bg-white">
          <FinderPageHeader role={role} />
          <FilterBar role={role} setEndPoint={setEndPoint} />
          <ProvidersList providersEndPoint={endPoint} role={role} />
        </div>
      </div>
    </div>
  );
}

export default FindProvider;

{
  /* <FilterBar role={role} setEndPoint={setEndPoint} /> */
}

// const endPoint = `http://localhost:8000/doctors`;

// const doctorsEndPoint =
//   "https://dawiny-backend-48lm.vercel.app/api/v1/doctors/";
// const nursesEndPoint = "https://dawiny-backend-48lm.vercel.app/api/v1/nurses";
// const pharmaciesEndPoint =
//   "https://dawiny-backend-48lm.vercel.app/api/v1/pharmacies";

// endPoint =
//   (role == "doctor" && doctorsEndPoint) ||
//   (role == "nurse" && nursesEndPoint) ||
//   (role == "pharmacy" && pharmaciesEndPoint);
