import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen flex bg-[var(--white-color)]">
      {/* inner content */}
      <div className="main-div">
        <h1 className="gradient-text section-title">
          Sorry That page cannot be found!
        </h1>
        <Link className="flex justify-center text-lg" to="/">
          Back to the Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
