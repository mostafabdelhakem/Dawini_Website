import NurseImage from "../../authentication/assets/nurse.jpg";
import ActionBtns from "../components/ActionBtns";
import Testimonials from "../../landingpage/components/Testimonials";
import ProviderProfileHeader from "../components/ProviderProfileHeader";

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

const NurseProfile = () => {
  const mynurse = {
    imageUrl: NurseImage,
    name: "Sarah Ahmed",
    location: "Cairo, Egypt",
    gender: "Female",
    rating: 4,
    description:
      "Customers are not satisfied with our CRM systems we are providing, citing a lack of innovative updates and integration issues with other platforms, Which led to decreasing the company's revenue and increasing the employee turnover rate.",
    skills: [
      "Skill 1",
      "Skill 2",
      "Skill 3",
      "Skill 4",
      "Skill 5",
      "Skill 6",
      "Skill 7",
    ],
  };

  return (
    <div className="min-h-screen flex justify-center bg-[var(--white-color)]">
      <div className="provider-page w-full bg-white">
        <ActionBtns />
        <ProviderProfileHeader provider={mynurse} type={"nurse"} />
        <SkillsSection skills={mynurse.skills} />
        <Testimonials />
      </div>
    </div>
  );
};

export default NurseProfile;
