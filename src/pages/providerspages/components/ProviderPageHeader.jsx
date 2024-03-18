const ProviderPageHeader = ({ imgSrc, providerTitle }) => {
  return (
    <div>
      <div className="h-screen w-full">
        <div className="h-[25%] md:h-[30%] lg:h-[40%] relative">
          <div className="h-full w-full">
            <img
              src={imgSrc}
              alt=""
              className="w-full h-full object-cover blur-sm grayscale-[100%]"
            />
            <div className="w-full h-full gradient-background opacity-65 z-10 absolute top-0"></div>
          </div>
          <div className="drop-shadow-md flex justify-center text-[var(--white-color)] z-20 items-center w-[90%] absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]">
            <h3 className="font-bold text-3xl md:text-4xl lg:text-5xl">
              Find A {providerTitle} Now
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderPageHeader;
