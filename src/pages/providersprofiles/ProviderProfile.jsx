import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
  const [provider, setProvider] = useState(null);

  const doctorByIDEndPoint = `http://localhost:8000/doctors/${providerid}`;
  const nurseByIDEndPoint = `http://localhost:8000/nurses/${providerid}`;

  const providerByIDEndPoint =
    role == "doctor" ? doctorByIDEndPoint : nurseByIDEndPoint;

  useEffect(() => {
    const fetchProviderInfo = async () => {
      try {
        const response = await fetch(providerByIDEndPoint);
        if (!response.ok) {
          throw new Error("Failed to fetch provider data");
        }
        const data = await response.json();
        setProvider(data);
      } catch (error) {
        console.error("Error fetching provider data:", error);
        // Handle error state or retry logic here
      }
    };

    fetchProviderInfo();
  }, [providerid]);

  if (!provider) {
    return <div>Loading...</div>; // or show a loading indicator
  }

  return (
    <div className="min-h-screen flex justify-center bg-[var(--white-color)]">
      <div className="provider-page w-full bg-white">
        <ActionBtns />
        <ProviderProfileHeader provider={provider} role={role} />
        {role == "nurse" && <SkillsSection skills={provider.skills} />}
        <Testimonials />
      </div>
    </div>
  );
}

export default ProviderProfile;
