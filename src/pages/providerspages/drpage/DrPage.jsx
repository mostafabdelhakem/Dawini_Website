import DrImage from "../../authentication/assets/doctor.jpg";
import ProviderPageHeader from "../components/ProviderPageHeader";

const DrPage = () => {
  return (
    <div className="provider-page">
      <ProviderPageHeader imgSrc={DrImage} providerTitle={"Doctor"} />
    </div>
  );
};

export default DrPage;
