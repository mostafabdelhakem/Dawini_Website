import DrImage from "../../authentication/assets/nurse.jpg";
import ProviderPageHeader from "../components/ProviderPageHeader";

const NursePage = () => {
  return (
    <div className="provider-page">
      <ProviderPageHeader imgSrc={DrImage} providerTitle={"Nurse"} />
    </div>
  );
};

export default NursePage;
