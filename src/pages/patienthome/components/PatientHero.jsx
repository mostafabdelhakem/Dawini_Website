import Doctor from "../../authentication/assets/doctor.jpg";
import Nurse from "../../authentication/assets/nurse.jpg";
import Pharmacy from "../assets/pharmacy.jpg";
import { FaChevronRight } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";

const PatientHeroContent = () => {
  return (
    <div className="w-full h-full lg:col-span-3 flex flex-col justify-center text-center lg:text-left">
      <h1 className="gradient-text text-4xl font-bold">
        What are you looking for?
      </h1>
      <p className="mt-5 leading-8">
        Find, book, and pay for quality, affordable, and convenient healthcare
        services near you. Whether you need a doctor, a nurse, a dentist, a
        clinic, a pharmacy, etc... <br />
        Dawini has you covered.
      </p>
    </div>
  );
};

const PatientHeroCategoryNavigator = ({ categoryName, imgSrc, role }) => {
  const { patientid } = useParams();
  const navigate = useNavigate();
  function handleClicks() {
    navigate(`/login/patienthome/${patientid}/findprovider/${role}`);
  }

  return (
    <button
      onClick={handleClicks}
      className="border opacity-80 hover:opacity-100 shadow-md w-full h-full max-h-[120px] rounded-lg overflow-hidden relative"
    >
      <div>
        <img src={imgSrc} alt="" className="w-full h-full object-fill" />
        <div className="w-full h-full bg-gray-950/20 z-10 absolute top-0"></div>
      </div>
      <div className="drop-shadow-md flex justify-between text-[var(--white-color)] z-20 items-center w-[90%] absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]">
        <h3 className="font-bold text-xl">Find {categoryName} Now</h3>
        <FaChevronRight />
      </div>
    </button>
  );
};

const PatientHeroAllCategories = () => {
  return (
    <div className="w-full h-full lg:col-span-2 rounded-lg p-1 flex flex-col sm:flex-row lg:flex-col justify-center items-center gap-2">
      <PatientHeroCategoryNavigator
        categoryName={"Doctor"}
        imgSrc={Doctor}
        role={"doctor"}
      />
      <PatientHeroCategoryNavigator
        categoryName={"Nurse"}
        imgSrc={Nurse}
        role={"nurse"}
      />
      <PatientHeroCategoryNavigator
        categoryName={"Pharmacy"}
        imgSrc={Pharmacy}
        role={"pharmacy"}
      />
    </div>
  );
};

const PatientHero = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-5 gap-8 absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] w-full h-[80%]">
      <PatientHeroContent />
      <PatientHeroAllCategories />
    </section>
  );
};

export default PatientHero;
