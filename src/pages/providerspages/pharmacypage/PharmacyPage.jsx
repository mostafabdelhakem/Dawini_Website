import ProviderPageHeader from "../components/ProviderPageHeader";
import PharmacyImg from "../../patienthome/assets/pharmacy.jpg";
import AltNavbar from "../../patienthome/components/AltNavbar";

const PharmacyPage = () => {
  return (
    <div>
      <AltNavbar />
      <div className="flex justify-center bg-[var(--white-color)]">
        <div className="provider-page bg-white">
          <ProviderPageHeader imgSrc={PharmacyImg} providerTitle={"Pharmacy"} />
        </div>
      </div>
    </div>
  );
};

export default PharmacyPage;
