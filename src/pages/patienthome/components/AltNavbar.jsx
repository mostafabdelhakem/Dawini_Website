import { Logo } from "../../landingpage/components/Navbar";
import { IoPersonCircleOutline } from "react-icons/io5";

const Tailor = () => {
  return <IoPersonCircleOutline size={30} />;
};

const AltNavbar = () => {
  return (
    <nav className="top-0 left-0 w-full h-20 p-4 text-xl z-20 flex items-center bg-[var(--white-color)]">
      <div className="nav-wrapper max-w-[1240px] w-full mx-auto flex justify-between items-center ">
        <Logo />
        <Tailor />
      </div>
    </nav>
  );
};

export default AltNavbar;
