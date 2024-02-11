import img from "../assets/hero-doctor.png";

const HeroContentHeader = () => {
  return (
    <div className="gradient-text text-4xl font-extrabold">
      All Your Medical Needs
    </div>
  );
};

const HeroContentText = () => {
  return (
    <p className="text-lg leading-8 my-8">
      A medical platform where patients get connected to the various medical
      providers. <br />
      Get started now and know more about Dawini.
    </p>
  );
};

const HeroContentActionBtn = () => {
  return (
    <div>
      <a
        href="#join"
        className="btn w-full sm:min-w-[200px] md:max-w-[25%] text-center"
      >
        Get Started Now &gt;
      </a>
    </div>
  );
};

const HeroContent = () => {
  return (
    <div className="hero-content w-full h-full basis-3/5 flex flex-col justify-center text-center lg:text-left">
      <HeroContentHeader />
      <HeroContentText />
      <HeroContentActionBtn />
    </div>
  );
};

const HeroImg = () => {
  return (
    <img
      src={img}
      alt=""
      className="object-cover w-full h-full z-10 relative"
    />
  );
};

const HeroBg = () => {
  return (
    <div className="gradient-background rounded-lg w-[80%] h-[80%] absolute bottom-0"></div>
  );
};

const HeroMedia = () => {
  return (
    <div className="hidden w-full h-full lg:flex justify-center items-center lg:basis-2/5">
      <div className="w-[90%] h-[90%] relative">
        <HeroImg />
        <HeroBg />
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <header className="bg-[--white-color] w-full h-screen flex items-center justify-center">
      <div className="mt-20 md:mt-0 w-full h-full max-w-[1240px] max-h-[80%] p-4 flex flex-col justify-center gap-8 lg:flex-row lg:gap-20">
        <HeroContent />
        <HeroMedia />
      </div>
    </header>
  );
};

export default Hero;
