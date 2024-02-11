import { FaFacebook, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaAppStoreIos } from "react-icons/fa6";

const LINKS = [
  {
    title: "Product",
    items: ["Overview", "Features", "Solutions", "Tutorials"],
  },
  { title: "Company", items: ["About us", "Careers", "Press", "News"] },
  { title: "Resource", items: ["Blog", "Newsletter", "Events", "Help center"] },
];

const currentYear = new Date().getFullYear();

const Logo = () => {
  return <h1 className="gradient-text text-4xl font-bold mb-6">Dawini</h1>;
};

const Links = () => {
  return (
    <div className="grid grid-cols-3 justify-between gap-4">
      {LINKS.map(({ title, items }) => (
        <ul key={title}>
          <p
            variant="small"
            color="blue-gray"
            className="mb-3 font-medium opacity-40"
          >
            {title}
          </p>
          {items.map((link) => (
            <li key={link}>
              <a
                href="#"
                color="gray"
                className="py-1.5 font-normal transition-colors hover:text-blue-gray-900"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
};

const Copyrights = () => {
  return (
    <p
      variant="small"
      className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
    >
      © {currentYear} Dawini. All Rights Reserved.
    </p>
  );
};

const Socials = () => {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <a
        name="Facebook"
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-gray-900 transition-colors hover:text-[var(--blue-color)]"
      >
        <FaFacebook size={20} />
      </a>
      <a
        name="LinkedIn"
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-gray-900 transition-colors hover:text-[var(--blue-color)]"
      >
        <FaLinkedin size={20} />
      </a>
      <a
        name="Instagram"
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-gray-900 transition-colors hover:text-[var(--blue-color)]"
      >
        <FaInstagramSquare size={20} />
      </a>
    </div>
  );
};

const Stores = () => {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <a
        key="Play Store"
        href="https://play.google.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-gray-900 transition-colors hover:text-[var(--blue-color)]"
      >
        <BiLogoPlayStore size={20} />
      </a>
      <a
        key="App Store"
        href="https://apps.apple.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-gray-900 transition-colors hover:text-[var(--blue-color)]"
      >
        <FaAppStoreIos size={20} />
      </a>
    </div>
  );
};

function Footer() {
  return (
    <footer className="relative w-full bg-[var(--white-color)] p-8">
      <div className="mx-auto w-full max-w-[1240px] px-8">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
          <Logo />
          <Links />
        </div>
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Copyrights />
          <div className="flex flex-wrap items-center gap-4">
            <Socials />
            <Stores />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
