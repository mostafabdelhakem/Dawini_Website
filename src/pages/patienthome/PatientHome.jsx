import AltNavbar from "./AltNavbar";
import PatientHero from "./PatientHero";

const PatientHome = () => {
  return (
    <div className="bg-[var(--white-color)] w-full h-screen relative">
      <AltNavbar />
      <PatientHero />
    </div>
  );
};

export default PatientHome;
