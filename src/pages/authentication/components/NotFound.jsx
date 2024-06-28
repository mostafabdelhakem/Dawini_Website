import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen flex">
      {/* inner content */}
      <div className="main-div mx-auto mt-5 flex flex-col items-center justify-center bg-[var(--white-color)]">
        <h1 className="gradient-text section-title text-center mb-5">
          Sorry, That page cannot be found!
        </h1>
        <Link className="flex justify-center text-lg" to="/">
          Back to the Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
