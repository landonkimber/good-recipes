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
        className={`text-xl md:text-5xl mx-0 md:mx-1 ${
          i < count ? color : emptyColor
        }`}
      />
    ))}
  </div>
);

const ExploreModal = ({ recipe, onClose }) => {
  if (!recipe) return null;
  const screenWidth = window.innerWidth;

  const modalSize = screenWidth < 768 ? "w-[100vw]" : "min-w-72rem w-[75vw]";

  return (
    <ModalPortal>
      <div
        className="fixed inset-0 flex items-center justify-center bg-black/60 z-50"
        role="dialog"
        aria-modal="true"
        onClick={onClose}
      >
        <div
          className={`relative bg-slate-800 rounded-md ${modalSize} h-[80vh] shadow-md shadow-indigo-400/50 overflow-y-auto`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute h-12 w-12 top-2 right-2 px-3 py-1 bg-red-700 font-bold text-md text-white rounded-full border-2 border-red-700 hover:bg-white hover:text-red-700"
            aria-label="Close"
          >
            ✕
          </button>
          <div className="relative rounded-sm bg-slate-300 left-16 p-4 mt-6 w-fit z-30">
            <h2 className="text-2xl md:text-4xl text-slate-900 font-redhat font-bold">
              {recipe.title}
            </h2>
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
          <div
            id="bottom-half"
            className="flex absolute w-full h-[35%] top-[65%] border border-4 border-slate-300 rounded-t-xl"
          >
            <div className="flex flex-col justify-center items-center w-1/3 bg-gradient-to-tl rounded-tl-xl from-sky-950 to-slate-800">
              <div className="text-center">
                <h2 className="text-lg md:text-3xl text-slate-300 font-redhat font-semibold mb-2">
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
                <h2 className="text-lg md:text-3xl text-slate-300 font-redhat font-semibold mb-2">
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
                <h2 className="text-lg md:text-3xl text-slate-300 font-redhat font-semibold mb-2">
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
            <div className="border border-green-400 flex flex-row justify-between w-2/3 bg-slate-300 bg-cover">
              <div className="flex flex-col justify-between h-full w-[80%]">
                <div className="relative h-[80%] w-full p-0 md:p-0 lg:p-2 grid-rows-2 overflow-scroll">
                  <div className="border border-red-500 md:flex md:flex-col w-full h-[20%] flex justify-between pr-12">
                    <h2 className="text-xl md:text-4xl text-slate-900 font-redhat font-bold underline">
                      {recipe.title}
                    </h2>
                    <div className="flex">
                      <img
                        src="/headshot.jpg"
                        alt="image of a headshot"
                        className="h-8 w-8 md:h-12 md:w-12 rounded-full md:mx-4 mx-1"
                      />
                      <div className="text-xs md:text-sm font-redhat text-sky-900">
                        <p>Jane Doe</p>
                        <p className="ml-2 text-navy-700">08/19/2025</p>
                      </div>
                    </div>
                  </div>
                  <p className="w-full text-xs md:text-xl my-4 p-0 md:p-2 font-redhat text-slate-900">
                    {recipe.description}
                  </p>
                  <p className="underline text-xs md:text-xl font-redhat  text-sky-700">
                    What you'll need!
                  </p>
                  <p className="w-full text-xs md:text-xl my-4 p-2 text-wrap  font-redhat text-slate-900 overflow-scroll">
                    {recipe.ingredients}
                  </p>
                  <p className="underline text-xs md:text-xl font-redhat  text-sky-700">
                    Before you cook
                  </p>
                  <p className="w-full my-4 p-2 text-xs md:text-xl text-wrap font-redhat text-slate-900 overflow-scroll">
                    {recipe.miceEnPlace}
                  </p>
                  <p className="underline text-xs md:text-xl font-redhat text-sky-700">
                    Instructions
                  </p>
                  <p className="w-full my-4 text-wrap text-xs md:text-xl font-redhat text-slate-900 overflow-scroll">
                    {recipe.instructions}
                  </p>
                  <div className="absolute w-[95%] h-4 bg-gradient-to-t from-slate-300 to-transparent z-[60]"></div>
                </div>
                <div className="w-full flex justify-start gap-2 text-sky-900 text-xs md:text-lg mb-3">
                  <p className="px-2 py-1 font-redhat rounded bg-sky-300">
                    {recipe.totalTime}
                  </p>
                  <p className="px-2 py-1 font-redhat rounded bg-emerald-300">
                    {recipe.servings} servings
                  </p>
                  <p className="px-2 py-1 font-redhat rounded bg-amber-300">
                    {recipe.difficultyDesc}
                  </p>
                </div>
              </div>
              <div className="w-[20%] flex items-end  justify-center bg-slate-400 pb-4 rounded-tr-lg">
                <div className="flex flex-col items-center gap-4">
                  <button className="p-3 text-amber-200 rounded-full hover:bg-amber-200 hover:text-white">
                    <FaBookmark size={window.innerWidth > 640 ? 44 : 24} />
                  </button>

                  <button className="p-3 text-slate-800 rounded-full hover:bg-slate-700 hover:text-white">
                    <FaDownload size={window.innerWidth > 640 ? 44 : 24} />
                  </button>
                  <Link
                    className="p-3 text-white bg-emerald-500 rounded-full  hover:bg-white hover:text-emerald-500"
                    to={`/${slugify(recipe.title, { lower: true })}`}
                    aria-label="Go to recipe"
                  >
                    <FaArrowRight size={window.innerWidth > 640 ? 44 : 24} />
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
