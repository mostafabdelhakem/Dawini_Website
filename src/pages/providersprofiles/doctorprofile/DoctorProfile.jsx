import DrImage from "../../authentication/assets/doctor.jpg";
import ActionBtns from "../components/ActionBtns";
import Testimonials from "../../landingpage/components/Testimonials";
import ProviderProfileHeader from "../components/ProviderProfileHeader";

const DoctorProfile = () => {
  const mydr = {
    imageUrl: DrImage,
    name: "Sarah Ahmed",
    specialization: "Cardiology",
    location: "Cairo, Egypt",
    gender: "Female",
    rating: 4,
    description:
      "Customers are not satisfied with our CRM systems we are providing, citing a lack of innovative updates and integration issues with other platforms, Which led to decreasing the company's revenue and increasing the employee turnover rate.",
  };

  return (
    <div className="min-h-screen flex justify-center bg-[var(--white-color)]">
      <div className="provider-page w-full bg-white">
        <ActionBtns />
        <ProviderProfileHeader provider={mydr} type={"doctor"} />
        <Testimonials />
      </div>
    </div>
  );
};

export default DoctorProfile;
