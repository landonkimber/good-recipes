import { Link } from "react-router-dom";
import {
  FaDollarSign,
  FaHeart,
  FaStar,
  FaArrowRight,
  FaBookmark,
  FaDownload,
} from "react-icons/fa";

import ReactDOM from "react-dom";
import slugify from "slugify";

const ModalPortal = ({ children }) => {
  return ReactDOM.createPortal(children, document.body);
};

const IconRating = ({ count, total = 5, Icon, color, emptyColor }) => (
  <div className="flex gap-1">
    {[...Array(total)].map((_, i) => (
      <Icon
        key={i}
        className={`text-2xl md:text-2xl lg:text-3xl mx-0 md:mx-1 ${
          i < count ? color : emptyColor
        }`}
      />
    ))}
  </div>
);

const ExploreModal = ({ recipe, onClose }) => {
  if (!recipe) return null;
  const screenWidth = window.innerWidth;

  const modalSize = screenWidth < 768 ? "w-full" : "min-w-72rem w-[75vw]";

  return (
    <ModalPortal>
      <div
        className="fixed inset-0 flex items-center justify-center bg-black/60 z-50"
        role="dialog"
        aria-modal="true"
        onClick={onClose}
      >
        <div
          className={`relative bg-slate-800 rounded-md ${modalSize} h-[80vh] shadow-md shadow-indigo-400/50`}
          onClick={(e) => e.stopPropagation()}
        >
          <div id="top-half" className="h-[65%]">
          {screenWidth > 768 ? (
            <button
              onClick={onClose}
              className="absolute h-12 w-12 top-2 right-2 px-3 py-1 bg-red-700 font-bold text-md text-white rounded-full border-2 border-red-700 hover:bg-white hover:text-red-700"
              aria-label="Close"
            >
              ✕
            </button>
          ) : (
            <button
              onClick={onClose}
              className="fixed h-12 w-12 top-[10vh] -translate-y-6 right-2 px-3 py-1 bg-red-700 font-bold text-2xl text-white rounded-full border-2 border-red-700 hover:bg-white hover:text-red-700"
              aria-label="Close"
            >
              ✕
            </button>
          )}
          <div className="flex justify-center lg:justify-start">
            <div className="relative rounded-sm bg-slate-300 lg:left-16 p-4 mt-6 w-fit z-30">
              <h2 className="text-2xl md:text-4xl text-slate-900 font-redhat font-bold">
                {recipe.title}
              </h2>
            </div>
          </div>
          <div className="absolute left-0 top-16 w-full h-1/2">
            {/* Image */}
            <img
              src={recipe.image}
              alt={recipe.title}
              className="absolute h-full w-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute h-full w-full bg-slate-800/80 backdrop-blur-md pointer-events-none z-10" />
          </div>
          <img
            src={recipe.image}
            alt={recipe.title}
            className="absolute left-1/2 -translate-x-1/2 top-16 h-1/2 w-auto z-20 transform scale-[110%] rounded-md"
          />
          </div>
          <div
            id="bottom-half"
            className="flex absolute w-full h-[35%] top-[65%] border border-4 border-slate-300 rounded-t-xl"
          >
            <div className="flex flex-col justify-center items-center w-1/3 bg-gradient-to-tl rounded-tl-xl from-sky-950 to-slate-800">
              <div className="text-center">
                <h2 className="text-lg text-2xl md:text-2xl lg:text-xl text-slate-300 font-redhat font-semibold mb-1">
                  {recipe.tasteDesc}
                </h2>

                <IconRating
                  count={recipe.taste}
                  Icon={FaHeart}
                  color="text-rose-400 drop-shadow-md drop-shadow-rose-300"
                  emptyColor="text-slate-600"
                />
              </div>

              <div className="text-center">
                <h2 className="text-lg text-2xl md:text-2xl lg:text-xl text-slate-300 font-redhat font-semibold mb-1">
                  {recipe.costDesc}
                </h2>
                <IconRating
                  count={recipe.cost}
                  Icon={FaDollarSign}
                  color="text-emerald-600 drop-shadow-md drop-shadow-emerald-200"
                  emptyColor="text-slate-600 "
                />
              </div>

              <div className="text-center">
                <h2 className="text-lg text-2xl md:text-2xl lg:text-xl text-slate-300 font-redhat font-semibold mb-1">
                  {recipe.difficultyDesc}
                </h2>
                <IconRating
                  count={recipe.difficulty}
                  Icon={FaStar}
                  color="text-amber-300 drop-shadow-md drop-shadow-amber-100"
                  emptyColor="text-slate-600 drop-shadow-inner"
                />
              </div>
            </div>
            <div className="flex flex-row justify-between w-2/3 bg-slate-300 bg-cover">
              <div className="flex flex-col justify-between h-full w-[80%]">
                <div className="relative h-[80%] w-full p-1 md:p-1 lg:p-2 grid-rows-2 overflow-x-hidden overflow-y-scroll">
                  <div className="flex flex-row w-full h-auto justify-between">
                    <h2 className="text-xl md:text-4xl text-slate-900 flex items-center font-redhat font-bold underline">
                      {recipe.title}
                    </h2>
                    <div className="flex w-auto flex-col md:flex-col lg:flex-row items-center justify-center md:pr-1 lg:pr-4">
                      <img
                        src="/headshot.jpg"
                        alt="image of a headshot"
                        className="h-8 w-8 md:h-12 md:w-12 rounded-full md:mx-4 mx-1"
                      />
                      <div className="font-redhat text-sky-900">
                        <p className="text-center md:text-center text-sm lg:text-left">
                          Jane Doe
                        </p>
                        <p className="text-center md:ml-0 md:text-center lg:text-left text-xs ml-1 text-navy-700">
                          08/19/2025
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="w-full text-xs p-1 md:text-xl my-4 p-0 md:p-2 font-redhat text-slate-900 overflow-hidden">
                    {recipe.description}
                  </p>
                  <p className="underline text-xs md:text-xl font-redhat  text-sky-700">
                    What you'll need!
                  </p>
                  <p className="w-full p-1 text-xs md:text-xl my-4 p-2 text-wrap  font-redhat text-slate-900 overflow-hidden">
                    {recipe.ingredients}
                  </p>
                  <p className="underline text-xs md:text-xl font-redhat  text-sky-700">
                    Before you cook
                  </p>
                  <p className="w-full my-2 p-1 text-xs md:text-xl text-wrap font-redhat text-slate-900 overflow-hiddenl">
                    {recipe.miceEnPlace}
                  </p>
                  <p className="underline text-xs md:text-xl font-redhat text-sky-700">
                    Instructions
                  </p>
                  <p className="w-full my-2 p-1 text-wrap text-xs md:text-xl font-redhat text-slate-900 overflow-hidden">
                    {recipe.instructions}
                  </p>
                  <div className="absolute w-[95%] h-4 bg-gradient-to-t from-slate-300 to-transparent z-[60]"></div>
                </div>
                <div className="max-w-full h-[20%] p-1 bg-slate-200 flex justify-start align-center gap-2 pl-1 text-sky-900 text-xs md:text-lg lg:pb-3 md:pb-1 overflow-y-hidden overflow-x-auto">
                  <p className="h-fit px-2 py-1 font-redhat rounded text-nowrap bg-sky-300">
                    {recipe.totalTime}
                  </p>
                  <p className="h-fit px-2 py-1 font-redhat rounded text-nowrap bg-emerald-300">
                    {recipe.servings} servings
                  </p>
                  <p className="h-fit  px-2 py-1 font-redhat rounded text-nowrap bg-amber-300">
                    {recipe.difficultyDesc}
                  </p>
                </div>
              </div>
              <div className="w-[20%] flex items-end  justify-center bg-slate-400 pb-2 rounded-tr-lg">
                <div className="flex flex-col items-center gap-2">
                  <button className="p-2 text-amber-200 rounded-full hover:bg-amber-200 hover:text-white">
                    <FaBookmark size={window.innerWidth > 768 ? 32 : 24} />
                  </button>

                  <button className="p-2 text-slate-800 rounded-full hover:bg-slate-700 hover:text-white">
                    <FaDownload size={window.innerWidth > 768 ? 32 : 24} />
                  </button>
                  <Link
                    className="p-2 text-white bg-emerald-500 rounded-full  hover:bg-white hover:text-emerald-500"
                    to={`/${slugify(recipe.title, { lower: true })}`}
                    aria-label="Go to recipe"
                  >
                    <FaArrowRight size={window.innerWidth > 768 ? 32 : 24} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalPortal>
  );
};

export default ExploreModal;
