import { Link } from "react-router-dom";

const Contact = () => {
  window.scrollTo(0, 0);
  return (
    <div
      className={`mx-auto relative h-[50vh] w-full max-w-7xl bg-slate-800/60 backdrop-blur-[5px] rounded-sm flex flex-row justify-center items-center`}
    >
      {/* Left: Logo + Title */}
      <Link
        to={"/contact-form"}
        className="h-2/3 w-full m-4 bg-emerald-400 rounded-md"
      >
        ContactUs
      </Link>
      <div className="h-full w-1 mb-2 bg-sky-900 rounded-full"></div>
      {/* Right: Intro Text */}
      <Link
        to={"/submit-a-recipe"}
        className="h-2/3 w-full m-4 bg-amber-400 text-sky-800 rounded-md"
      >
        Submit A Recipe
      </Link>
    </div>
  );
};

export default Contact;
