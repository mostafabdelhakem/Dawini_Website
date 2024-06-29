import { useParams } from "react-router-dom";
import useFetch from "../customhooks/useFetch";
import Testimonials from "../landingpage/components/Testimonials";
import ActionBtns from "./components/ActionBtns";
import ProviderProfileHeader from "./components/ProviderProfileHeader";

const SkillsSection = ({ skills }) => {
  return (
    <div className="w-full flex flex-col items-center mb-14">
      <h1 className="text-2xl font-bold mb-4">Care Skills Set</h1>
      <div className="flex flex-wrap justify-center gap-3 max-w-[800px]">
        {skills.map((skill) => (
          <p className="text-xl text-gray-500 border rounded-full py-2 px-6">
            {skill}
          </p>
        ))}
      </div>
    </div>
  );
};

function ProviderProfile() {
  const { role, providerid } = useParams();

  const doctorByIDEndPoint = `https://dawiny-backend-48lm.vercel.app/api/v1/doctors/${providerid}`;
  const nurseByIDEndPoint = `https://dawiny-backend-48lm.vercel.app/api/v1/nurses/${providerid}`;

  const providerByIDEndPoint =
    role == "doctor" ? doctorByIDEndPoint : nurseByIDEndPoint;

  const { data: provider, isPending, error } = useFetch(providerByIDEndPoint);

  return (
    <div>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {provider && (
        <div className="min-h-screen flex justify-center bg-[var(--white-color)]">
          <div className="provider-page w-full bg-white">
            <ActionBtns />
            <ProviderProfileHeader provider={provider} role={role} />
            {role == "nurse" && (
              <SkillsSection skills={provider.skills || []} />
            )}
            <Testimonials />
          </div>
        </div>
      )}
    </div>
  );
}

export default ProviderProfile;
