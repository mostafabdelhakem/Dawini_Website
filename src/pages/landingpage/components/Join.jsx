import doctorImg from "../../../assets/clinic Image.jpg";
import patientImg from "../../../assets/patient image.jpg";
import { useNavigate } from "react-router-dom";

const Title = () => {
  return <h1 className="section-title gradient-text">Join Now</h1>;
};

const JoinImg = ({ url }) => {
  return <img src={url} alt="" className="w-full h-full object-cover" />;
};

const JoinContent = ({ title, description, btnTxt }) => {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="gradient-text text-3xl">{title}</h1>
      <p className="text-justify my-8">{description}</p>
      <button
        className="btn w-full md:max-w-[300px]"
        onClick={() => {
          navigate("/switcher");
        }}
      >
        {btnTxt}
      </button>
    </div>
  );
};

const JoinGrid = () => {
  const patientDetails = {
    title: "patient",
    description:
      "Dawini is the best way to find, book, and pay for quality, affordable, and convenient healthcare services near you. Whether you need a doctor, a nurse, a dentist, a clinic, a pharmacy, Dawini has you covered. Join Dawini today and take charge of your health.",
  };

  const medicalDetails = {
    title: "medical provider",
    description:
      "Do you want to grow your practice and reach more patients? Do you want to streamline your booking and payment processes? Do you want to join a network of trusted and reputable healthcare providers? If you answered yes to any of these questions, then you should join Dawini today.",
  };

  return (
    <div className="w-full grid md:grid-cols-5 md:grid-rows-2 gap-x-10 gap-y-20">
      <div className="order-1 w-full h-[450px] md:col-span-2 flex justify-center items-center rounded-lg overflow-hidden shadow-lg">
        <JoinImg url={patientImg} />
      </div>
      <div className="order-2 w-full h-full md:col-span-3 flex flex-col justify-center">
        <JoinContent
          title={`As a ${patientDetails.title}`}
          description={patientDetails.description}
          btnTxt={`Join as a ${patientDetails.title} for free`}
        />
      </div>
      <div className="order-4 md:order-3 w-full h-full md:col-span-3 flex flex-col justify-center">
        <JoinContent
          title={`A a ${medicalDetails.title}`}
          description={medicalDetails.description}
          btnTxt={`Join as a ${medicalDetails.title} for free`}
        />
      </div>
      <div className="order-3 md:order-4 w-full h-[450px] md:col-span-2 flex justify-center items-center rounded-lg overflow-hidden shadow-lg">
        <JoinImg url={doctorImg} />
      </div>
    </div>
  );
};

const Join = () => {
  return (
    <section id="join">
      <Title />
      <JoinGrid />
    </section>
  );
};

export default Join;
