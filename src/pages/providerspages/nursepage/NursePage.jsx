import DrImage from "../../authentication/assets/nurse.jpg";
import AltNavbar from "../../patienthome/components/AltNavbar";
import ProviderPageHeader from "../components/ProviderPageHeader";

const NursePage = () => {
  return (
    <div>
      <AltNavbar />
      <div className="flex justify-center bg-[var(--white-color)]">
        <div className="provider-page bg-white">
          <ProviderPageHeader imgSrc={DrImage} providerTitle={"Nurse"} />
        </div>
      </div>
    </div>
  );
};

export default NursePage;
