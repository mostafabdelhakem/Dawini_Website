import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Logo = ({ dest }) => {
  return (
    <div className="logo gradient-text font-bold text-3xl drop-shadow-sm">
      <Link to={dest}>Dawini.</Link>
    </div>
  );
};

const Tabs = () => {
  return (
    <ul className="tabs hidden md:flex justify-between gap-6">
      <li>
        <a href="#join">Join</a>
      </li>
      <li>
        <a href="#testimonials">Testimonials</a>
      </li>
      <li>
        <a href="#faqs">FAQs</a>
      </li>
      <li>
        <Link to="/team">Our Team</Link>
      </li>
    </ul>
  );
};

function Login() {
  return (
    <button className="btn">
      <Link to="/login">Login</Link>
    </button>
  );
}
const MenuIcon = ({ isMenu, handleMenu }) => {
  return (
    <div className="cursor-pointer" onClick={handleMenu}>
      {isMenu ? (
        <IoClose size={25} className="text-[var(--black-color)]" />
      ) : (
        <IoMenu size={25} className="text-[var(--black-color)]" />
      )}
    </div>
  );
};

const MenuDrop = ({ isMenu }) => {
  return (
    <div
      className={
        isMenu
          ? "absolute left-0 top-20 w-full bg-gray-100/90 px-4 py-3 flex flex-col z-50 md:hidden"
          : "hidden"
      }
    >
      <ul className="droplist md:flex justify-between gap-6">
        <li className="p-3 mb-1">
          <a href="#join">Join</a>
        </li>
        <li className="p-3 mb-1">
          <a href="#testimonials">Testimonials</a>
        </li>
        <li className="p-3 mb-1">
          <a href="#faqs">FAQs</a>
        </li>
        <li className="p-3 mb-1">
          <Link to="/team">Our Team</Link>
        </li>
      </ul>
      <Login className="mt-5" />
    </div>
  );
};

const Menu = ({ isMenu, handleMenu }) => {
  return (
    <div className="md:hidden">
      <MenuIcon isMenu={isMenu} handleMenu={handleMenu} />
      <MenuDrop isMenu={isMenu} />
    </div>
  );
};

const Tailor = () => {
  return (
    <div>
      <div className="hidden md:block">
        <Login />
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false);
  function handleMenu() {
    setIsMenu(!isMenu);
  }

  return (
    <nav className="absolute top-0 left-0 w-full h-20 p-4 text-xl z-20 flex items-center">
      <div className="nav-wrapper max-w-[1240px] w-full mx-auto flex justify-between items-center ">
        <Logo dest={"/"} />
        <Tabs />
        <Tailor />
        <Menu isMenu={isMenu} handleMenu={handleMenu} />
      </div>
    </nav>
  );
};

export default Navbar;
