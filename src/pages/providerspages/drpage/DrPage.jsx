import DrImage from "../../authentication/assets/doctor.jpg";
import AltNavbar from "../../patienthome/components/AltNavbar";
import ProviderPageHeader from "../components/ProviderPageHeader";

const DrPage = () => {
  return (
    <div>
      <AltNavbar />
      <div className="flex justify-center bg-[var(--white-color)]">
        <div className="provider-page bg-white">
          <ProviderPageHeader imgSrc={DrImage} providerTitle={"Doctor"} />
        </div>
      </div>
    </div>
  );
};

export default DrPage;
