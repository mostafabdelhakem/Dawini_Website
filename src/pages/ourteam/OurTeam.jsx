import Navbar from "../landingpage/components/Navbar";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Alaa from "./assets/Alaa Bashar.jpg";
import Mostafa from "./assets/Mostafa Abdelhakem.png";
import Salah from "./assets/Salah.jpeg";
import Amer from "./assets/Ahmed Amer.jpg";
import Atef from "./assets/Ahmed Atef.jpeg";

const Title = () => {
  return <h1 className="section-title gradient-text mt-10">Our Team</h1>;
};

const PersonCard = ({ image, name, title, linkedin, github, brief }) => {
  return (
    <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4 w-80">
      <img
        src={image}
        alt="person-image"
        className="h-24 w-24 rounded-full object-cover"
      />
      <h3 className="text-xl font-bold mt-2">{name}</h3>
      <p className="text-gray-500">{title}</p>
      <div className="flex mt-4 space-x-4">
        <a href={linkedin} target="_blank" rel="noreferrer">
          <FaLinkedin className="h-6 w-6 text-blue-600" />
        </a>
        <a href={github} target="_blank" rel="noreferrer">
          <FaGithub className="h-6 w-6 text-gray-800" />
        </a>
      </div>
      <p className="text-gray-700 mt-4 text-center">{brief}</p>
    </div>
  );
};

const AllTeam = () => {
  const persons = [
    {
      imgUrl: Alaa,
      name: "Alaa Bashar",
      title: "Frontend Developer",
      linkedin: "https://www.linkedin.com/in/alaa-bashar-9526451a4/",
      github: "https://github.com/alaa-bashar",
      brief:
        "A human being who is interested in leveraging his Computer Engineering background, and his Entrepreneurship knowledge and passion to make a difference in the business world.",
    },
    {
      imgUrl: Mostafa,
      name: "Mostafa Abdelhakam",
      title: "Frontend Developer",
      linkedin: "https://www.linkedin.com/in/mostafa-abdelhakem-64a5551bb/",
      github: "https://github.com/Mostafa-Ahmed-Abdelhakem",
      brief: "Computer Engineering Student | Curious Learner.",
    },
    {
      imgUrl: Salah,
      name: "Salah Ashawy",
      title: "Backend Developer",
      linkedin: "https://www.linkedin.com/in/salah-ashawy-4344b7163",
      github: "https://github.com/SalahAshawy",
      brief:
        "A Software Engineer specializing in Full Stack development. Skilled in delivering high-quality software solutions across the entire development stack.",
    },
    {
      imgUrl: Amer,
      name: "Ahmed Amer",
      title: "Backend Developer",
      linkedin: "https://www.linkedin.com/in/ahmad-aamer-221290201/",
      github: "https://github.com/AhmadAamer",
      brief:
        "Currently in the final year of my study at faculty of engineering (SCE) , with a passion for technology and problem-solving. I am on a journey to become a full-stack developer.",
    },
    {
      imgUrl: Atef,
      name: "Ahmed Atef",
      title: "IOS Mobile Developer",
      linkedin:
        "https://www.linkedin.com/in/ahmed-atef-%F0%9F%87%B5%F0%9F%87%B8-494816230/",
      github: "https://github.com/AhmedAtef277",
      brief:
        "With over a year of iOS engineering experience, I'm committed to leveraging technology for user-centric solutions. Currently completing my final year at the Faculty of Engineering.",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
      {persons.map((person) => {
        return (
          <PersonCard
            image={person.imgUrl}
            name={person.name}
            title={person.title}
            linkedin={person.linkedin}
            github={person.github}
            brief={person.brief}
          />
        );
      })}
    </div>
  );
};

const OurTeam = () => {
  return (
    <div className="bg-[var(--white-color)]">
      <section className="bg-[var(--white-color)] py-10 md:py-20 px-5 md:px-20 mx-auto min-h-screen">
        <Navbar />
        <Title />
        <div className="flex items-center justify-center">
          <AllTeam />
        </div>
      </section>
    </div>
  );
};

export default OurTeam;
