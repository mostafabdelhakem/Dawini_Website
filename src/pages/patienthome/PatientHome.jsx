import AltNavbar from "./components/AltNavbar";
import PatientHero from "./components/PatientHero";

const PatientHome = () => {
  return (
    <div className="bg-[var(--white-color)] w-full h-screen relative">
      <AltNavbar />
      <PatientHero />
    </div>
  );
};

export default PatientHome;
