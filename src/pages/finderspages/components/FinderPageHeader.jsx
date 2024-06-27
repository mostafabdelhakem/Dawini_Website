import DrImage from "../../authentication/assets/doctor.jpg";
import NurseImage from "../../authentication/assets/nurse.jpg";
import PharmacyImage from "../../../assets/clinic Image.jpg";

const FinderPageHeader = ({ role }) => {
  return (
    <div>
      <div className="w-full">
        <div className="h-[25vh] md:h-[30vh] lg:h-[40vh] relative">
          <div className="h-full w-full">
            <img
              src={
                (role == "doctor" && DrImage) ||
                (role == "nurse" && NurseImage) ||
                (role == "pharmacy" && PharmacyImage)
              }
              alt=""
              className="w-full h-full object-cover blur-sm grayscale-[100%]"
            />
            <div className="w-full h-full gradient-background opacity-65 z-10 absolute top-0"></div>
          </div>
          <div className="drop-shadow-md flex justify-center text-[var(--white-color)] z-20 items-center w-[90%] absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]">
            <h3 className="font-bold text-3xl md:text-4xl lg:text-5xl capitalize">
              Find a {role} now
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinderPageHeader;
