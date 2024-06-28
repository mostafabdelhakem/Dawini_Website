import { useParams } from "react-router-dom";
import AltNavbar from "../patienthome/components/AltNavbar";
import FilterBar from "./components/FilterBar";
import FinderPageHeader from "./components/FinderPageHeader";
import { MdKeyboardArrowDown } from "react-icons/md";
import ProviderCard from "./components/ProviderCard";
import useFetch from "../customhooks/useFetch";

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

  const doctorsEndPoint = "http://localhost:8000/doctors";
  const nursesEndPoint = "http://localhost:8000/nurses";
  const pharmaciesEndPoint = "http://localhost:8000/pharmacies";

  const roleEndPoint =
    (role == "doctor" && doctorsEndPoint) ||
    (role == "nurse" && nursesEndPoint) ||
    (role == "pharmacy" && pharmaciesEndPoint);

  return (
    <div>
      <AltNavbar />
      <div className="min-h-screen flex justify-center bg-[var(--white-color)]">
        <div className="provider-page bg-white">
          <FinderPageHeader role={role} />
          <FilterBar role={role} />
          <ProvidersList providersEndPoint={roleEndPoint} role={role} />
        </div>
      </div>
    </div>
  );
}

export default FindProvider;
