import { Logo } from "../../landingpage/components/Navbar";
import { IoPersonCircleOutline } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";

const Tailor = ({ patientId }) => {
  let navigate = useNavigate();
  const routeChange = () => {
    navigate(`/patienthome/${patientId}/patientprofile`);
  };

  return (
    <IoPersonCircleOutline
      size={30}
      className={"cursor-pointer"}
      onClick={() => routeChange()}
    />
  );
};

const AltNavbar = () => {
  const { patientid } = useParams();

  return (
    <nav className="top-0 left-0 w-full h-20 p-4 text-xl z-20 flex items-center bg-[var(--white-color)] border">
      <div className="nav-wrapper max-w-[1240px] w-full mx-auto flex justify-between items-center ">
        <Logo dest={`/patienthome/${patientid}`} />
        <Tailor patientId={patientid} />
      </div>
    </nav>
  );
};

export default AltNavbar;
