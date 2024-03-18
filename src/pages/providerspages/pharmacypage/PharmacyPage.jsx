import ProviderPageHeader from "../components/ProviderPageHeader";
import PharmacyImg from "../../patienthome/assets/pharmacy.jpg";

const PharmacyPage = () => {
  return (
    <div className="provider-page">
      <ProviderPageHeader imgSrc={PharmacyImg} providerTitle={"Pharmacy"} />
    </div>
  );
};

export default PharmacyPage;
