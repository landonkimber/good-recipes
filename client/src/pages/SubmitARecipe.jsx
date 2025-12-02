// SubmitARecipe.jsx
import { useState } from "react";

import {
  FaClock,
  FaUserAlt,
  FaUtensils,
  FaFireAlt,
  FaSoap,
  FaDollarSign,
  FaHeart,
  FaStar,
  FaRegCircle,
  FaCheckCircle,
  FaInfoCircle,
} from "react-icons/fa";

const randomBool = Math.random() < 0.5;
// Optional: sample data loader so you can test quickly
const sampleRecipe = {
  title: "BBQ Pulled Pork Sandwiches",
  description:
    "Slow-cooked pork shoulder shredded and tossed with tangy BBQ sauce.",
  prepTime: 20,
  cookTime: 450,
  cleanupTime: 25,
  servings: 8,
  tasteDesc: "Smoky & Sweet",
  taste: 5,
  costDesc: "Low Cost",
  cost: 1,
  difficultyDesc: "Slow and Steady",
  difficulty: 1,
  ingredients: [
    { ingredient: "Pork Shoulder", amount: 3, unit: "lb", optional: false },
    { ingredient: "Onion, Sliced", amount: 1, unit: "whole", optional: false },
    { ingredient: "BBQ Sauce", amount: 1, unit: "c", optional: false },
    { ingredient: "Chicken Broth", amount: 0.5, unit: "c", optional: false },
    { ingredient: "Brown Sugar", amount: 1, unit: "tbsp", optional: true },
    { ingredient: "Paprika", amount: 1, unit: "tsp", optional: true },
    { ingredient: "Garlic Powder", amount: 1, unit: "tsp", optional: true },
    { ingredient: "Salt", amount: 1, unit: "tsp", optional: false },
    { ingredient: "Black Pepper", amount: 0.5, unit: "tsp", optional: false },
    { ingredient: "Buns", amount: 8, unit: "pieces", optional: false },
  ],
  miceEnPlace: [
    "Slice onion.",
    "Mix dry spices.",
    "Trim excess fat from pork shoulder.",
  ],
  instructions: [
    "Place onions in slow cooker; add pork and seasonings.",
    "Pour broth; cook on LOW 7-8 hours.",
    "Shred pork; toss with BBQ sauce.",
    "Serve on buns.",
  ],
  tipsAndTricks: ["Finish under broiler for crispy edges."],
  equipment: [
    { equipment: "Slow Cooker", optionalEt: false },
    { equipment: "Forks", optionalEt: false },
    { equipment: "Kitchen Knife", optionalEt: false },
    { equipment: "Cutting Board", optionalEt: false },
    { equipment: "Measuring Spoons", optionalEt: false },
  ],
  moreInfo: "Top with coleslaw for crunch.",
  image: "/margherita.jpg",
};

const SubmitARecipe = () => {
  const isMobile = window.innerWidth < 768 ? true : false;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({ phone: "", email: "" });
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [totalTime, setTotalTime] = useState("");
  const [prepTime, setPrepTime] = useState("");
  const [cookTime, setCookTime] = useState("");
  const [cleanupTime, setCleanupTime] = useState("");
  const [servings, setServings] = useState(0);
  const [tasteDesc, setTasteDesc] = useState("");
  const [taste, setTaste] = useState(0);
  const [costDesc, setCostDesc] = useState("");
  const [cost, setCost] = useState(0);
  const [difficultyDesc, setDifficultyDesc] = useState("");
  const [difficulty, setDifficulty] = useState(0);
  const [ingredients, setIngredients] = useState([
    { ingredient: "", amount: 0, unit: "", optional: false },
  ]);
  const [miceEnPlace, setMiceEnPlace] = useState([""]);
  const [instructions, setInstructions] = useState([""]);
  const [tipsAndTricks, setTipsAndTricks] = useState([""]);
  const [equipment, setEquipment] = useState([
    { equipment: "", alt: "", optionalEt: false },
  ]);
  const [moreInfo, setMoreInfo] = useState("");
  const [image, setImage] = useState("");

  function loadSample() {
    setTitle(sampleRecipe.title);
    setDescription(sampleRecipe.description);
    setTotalTime(sampleRecipe.totalTime);
    setPrepTime(sampleRecipe.prepTime);
    setCookTime(sampleRecipe.cookTime);
    setCleanupTime(sampleRecipe.cleanupTime);
    setServings(sampleRecipe.servings);
    setTasteDesc(sampleRecipe.tasteDesc);
    setTaste(sampleRecipe.taste);
    setCostDesc(sampleRecipe.costDesc);
    setCost(sampleRecipe.cost);
    setDifficultyDesc(sampleRecipe.difficultyDesc);
    setDifficulty(sampleRecipe.difficulty);
    setIngredients(sampleRecipe.ingredients);
    setMiceEnPlace(sampleRecipe.miceEnPlace);
    setInstructions(sampleRecipe.instructions);
    setTipsAndTricks(sampleRecipe.tipsAndTricks);
    setEquipment(sampleRecipe.equipment);
    setMoreInfo(sampleRecipe.moreInfo);
    setImage(sampleRecipe.image);
  }

  function resetForm() {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setTitle("");
    setDescription("");
    setTotalTime("");
    setPrepTime("");
    setCookTime("");
    setCleanupTime("");
    setServings(0);
    setTasteDesc("");
    setTaste(0);
    setCostDesc("");
    setCost(0);
    setDifficultyDesc("");
    setDifficulty(0);
    setIngredients([{ ingredient: "", amount: 0, unit: "", optional: false }]);
    setMiceEnPlace([""]);
    setInstructions([""]);
    setTipsAndTricks([""]);
    setEquipment([{ equipment: "", optional: false }]);
    setMoreInfo("");
    setImage("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    const payload = {
      firstName,
      lastName,
      email,
      phone,
      title,
      description,
      totalTime: Number(totalMin),
      prepTime: Number(prepTime),
      cookTime: Number(cookTime),
      cleanupTime: Number(cleanupTime),
      servings: Number(servings),
      tasteDesc,
      taste: Number(taste),
      costDesc,
      cost: Number(cost),
      difficultyDesc,
      difficulty: Number(difficulty),
      ingredients: ingredients.map((it) => ({
        ingredient: it.ingredient,
        amount: Number(it.amount),
        unit: it.unit,
        optional: Boolean(it.optional),
      })),
      miceEnPlace: miceEnPlace.filter((s) => s.trim() !== ""),
      instructions: instructions.filter((s) => s.trim() !== ""),
      tipsAndTricks: tipsAndTricks.filter((s) => s.trim() !== ""),
      equipment: equipment
        .filter((et) => et.equipment.trim() !== "")
        .map((et) => ({
          equipment: et.equipment,
          alt: et.alt,
          optionalEt: Boolean(et.optionalEt),
        })),
      moreInfo,
      image,
    };

    // For now, JSON is submitted to console
    console.log("Recipe submitted:", payload);
    alert("Recipe JSON logged to console.");
  }

  const IconRatingSelect = ({
    count,
    total = 5,
    Icon,
    color,
    emptyColor,
    setFunction,
  }) => (
    <div className="flex flex-row justify-evenly w-full md:w-3/4 lg:w-[60%] mx-auto">
      {[...Array(total)].map((_, i) => (
        <Icon
          key={i}
          onClick={() => setFunction(i + 1)}
          className={`text-3xl md:text-3xl lg:text-5xl xl:text-6xl mx-0 md:mx-1 ${
            i < count ? color : emptyColor
          } hover:cursor-pointer`}
        />
      ))}
    </div>
  );

  // --- Helpers for list updates ---
  const updateArrayItem = (arrSetter) => (index, newValue) =>
    arrSetter((prev) => prev.map((v, i) => (i === index ? newValue : v)));

  const addArrayItem = (arrSetter, emptyValue) => () =>
    arrSetter((prev) => [...prev, emptyValue]);

  const removeArrayItem = (arrSetter) => (index) =>
    arrSetter((prev) => prev.filter((_, i) => i !== index));

  // Formats for phone
  function formatPhoneNumber(value) {
    // Remove all non-digits
    const digits = value.replace(/\D/g, "").slice(0, 10);
    const parts = [];

    if (digits.length > 0) parts.push("(" + digits.slice(0, 3));
    if (digits.length >= 4) parts.push(")-" + digits.slice(3, 6));
    if (digits.length >= 7) parts.push("-" + digits.slice(6, 10));

    return parts.join("");
  }

  function handlePhoneChange(e) {
    const formatted = formatPhoneNumber(e.target.value);
    setPhone(formatted);

    // Validation: must be 10 digits
    const isValid = /^\(\d{3}\)-\d{3}-\d{4}$/.test(formatted);
    setErrors((prev) => ({
      ...prev,
      phone: isValid || formatted === "" ? "" : "Phone must be 10 digits",
    }));
  }

  function handleEmailChange(e) {
    const value = e.target.value;
    setEmail(value);

    // Simple email regex
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    setErrors((prev) => ({
      ...prev,
      email: isValid || value === "" ? "" : "Invalid email address",
    }));
  }

  const formatDuration = (h, m) => {
    const total = h * 60 + m;
    return total; // returns a number
  };

  const parseDuration = (value = 0) => {
    const total = Number(value) || 0;
    const hours = Math.floor(total / 60);
    const minutes = total % 60;
    return { hours, minutes };
  };

  const formatReadable = (mins) => {
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    return h > 0
      ? `${h} hr${h > 1 ? "s" : ""} ${m ? m + " min" : ""}`
      : `${m} min`;
  };
  const totalMin =
    Number(prepTime || 0) + Number(cookTime || 0) + Number(cleanupTime || 0);

  function DurationField({ label, value, onChange }) {
    const { hours, minutes } = parseDuration(value);

    const handleHours = (e) =>
      onChange(formatDuration(Number(e.target.value), minutes));
    const handleMinutes = (e) =>
      onChange(formatDuration(hours, Number(e.target.value)));

    return (
      <label className="w-full h-auto p-1 md:p-2 mx-auto flex flex-col whitespace-nowrap text-left font-redhat font-bold">
        {label}
        <div className="w-full flex gap-2 mt-1">
          <select
            value={hours}
            onChange={handleHours}
            className={`w-1/2 ${inputFieldStyling(hours)} bg-slate-500`}
          >
            {Array.from({ length: 25 }, (_, i) => (
              <option key={i} value={i}>
                {i} {i === 1 ? "hour" : "hours"}
              </option>
            ))}
          </select>

          <select
            value={minutes}
            onChange={handleMinutes}
            className={`w-1/2 ${inputFieldStyling(minutes)} bg-slate-500`}
          >
            {[0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55].map((m) => (
              <option key={m} value={m}>
                {m} min
              </option>
            ))}
          </select>
        </div>
      </label>
    );
  }

  const inputFieldStyling = (data) =>
    `rounded-md p-1 md:p-2 bg-slate-50 border-2 font-normal focus:border-sky-300 ${
      !data ? "border-transparent" : "border-emerald-400"
    }`;

  // Render
  return (
    <div
      className="relative w-full
       bg-slate-800/60 backdrop-blur-[5px] rounded-sm max-w-7xl mx-auto mt-[3vh] md:mt-[8vh] lg:mt-[10vh]"
    >
      <div
        id="submit-recipe-header"
        className="w-full p-4 lg:p-8 text-lg text-slate-50 font-bold md:text-xl lg:text-2xl flex flex-col items-center"
      >
        <h1 className="text-center m-2 text-2xl md:text-3xl lg:text-4xl font-redhat">
          Submit A Recipe For Review
        </h1>
        <div className="h-1 w-[80%] my-4 mx-auto bg-slate-300"></div>
        <p className="font-normal">
          Have a lowcost, easy, and delicious recipe worth sharing?? We are
          always looking for more content to fill our site! Please fill out the
          application below to subimit a recipe to our team and the chance to be
          featured on Good Recipes!
        </p>
        <div>
          <button
            type="button"
            onClick={loadSample}
            className="text-center m-2  mx-4 bg-amber-400 p-2 rounded-md"
          >
            Load Example
          </button>
          <button
            type="button"
            onClick={resetForm}
            style={{ marginLeft: 8 }}
            className="text-center m-2 mx-4  bg-red-400 p-2 rounded-md"
          >
            Reset
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            style={{ marginLeft: 8 }}
            className="text-center m-2 mx-4 bg-emerald-400  p-2 rounded-md"
          >
            Submit
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <fieldset id="about-you">
          <div className="w-[90%] mx-auto text-lg md:text-xl lg:text-2xl text-sky-800 bg-slate-300 p-2 md:p-4 rounded-md">
            <legend className="font-redhat font-bold text-xl md:text-2xl lg:text-3xl">
              About You
            </legend>

            <div className="h-1 max-w-[80%] my-4 mx-auto bg-amber-400 rounded-md"></div>
            <div className="grid grid-cols-2">
              <label className="w-full h-auto p-1 md:p-2 mx-auto flex justify-end whitespace-nowrap items-center font-redhat font-bold">
                First Name
                <input
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className={`w-full ${inputFieldStyling(firstName)} mx-2 `}
                  placeholder={randomBool ? "Jane" : "John"}
                />
              </label>
              <label className="w-full h-auto p-1 md:p-2 mx-auto flex justify-end whitespace-nowrap items-center font-redhat font-bold">
                Last Name
                <input
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className={`w-full ${inputFieldStyling(lastName)} mx-2`}
                  placeholder="Doe"
                />
              </label>
              <label className="w-full h-auto p-1 md:p-2 mx-auto flex justify-end whitespace-nowrap items-center font-redhat font-bold">
                Email
                <input
                  value={email}
                  onChange={handleEmailChange}
                  className={`w-full mx-2 rounded-md p-1 md:p-2 bg-slate-50 border-2 font-normal focus:border-sky-300 ${
                    errors.email
                      ? "border-red-500"
                      : email
                      ? "border-emerald-400"
                      : " border-transparent "
                  }`}
                  placeholder={`${randomBool ? "jane" : "john"}doh@example.com`}
                />
              </label>

              <label className="w-full h-auto p-1 md:p-2 mx-auto flex justify-end whitespace-nowrap items-center font-redhat font-bold">
                Phone
                <input
                  value={phone}
                  onChange={handlePhoneChange}
                  className={`w-full mx-2 rounded-md p-1 md:p-2 bg-slate-50 border-2 font-normal focus:border-sky-300  ${
                    errors.phone
                      ? "border-red-500"
                      : phone
                      ? "border-emerald-400"
                      : " border-transparent "
                  }`}
                  placeholder={`(123)-555-1234`}
                />
              </label>
              {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
              {errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>}
            </div>
          </div>
        </fieldset>

        <div className="w-full h-auto mt-4 p-2 md:p-4 bg-slate-700 md:text-xl lg:text-2xl text-slate-200 rounded-md">
          <fieldset id="recipe-stats" className="flex flex-col">
            <legend className="w-full font-redhat font-bold text-xl md:text-2xl lg:text-3xl text-center font-slate-300">
              Your Recipe
            </legend>
            <div className="h-1 w-[80%] my-4 mx-auto bg-blue-600 rounded-md"></div>
            <label className="w-full h-auto p-1 md:p-2 mx-auto flex flex-col whitespace-nowrap text-left font-bold">
              Recipe Title
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className={`w-full ${inputFieldStyling(title)} bg-slate-500`}
                placeholder="Food Title Here"
              />
            </label>

            <label className="w-full h-auto p-1 md:p-2 mx-auto flex flex-col items-start whitespace-nowrap text-left font-bold">
              <h1>Description</h1>
              <h2 className="ml-4 flex max-w-[90%] items-center text-wrap text-sm md:text-md lg:text-lg text-slate-400">
                <FaInfoCircle className="flex-shrink-0 h-4 w-4 lg:h-8 lg:w-8 m-2" />
                <p>
                  Write a quick but eye-catching description not just about your
                  food but, also your recipe.
                </p>
              </h2>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className={`w-full ${inputFieldStyling(
                  description
                )} bg-slate-500 min-h-40`}
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..."
              />
            </label>
            <label className="w-full h-auto p-1 md:p-2 mx-auto flex flex-col items-start whitespace-nowrap text-left font-bold">
              Servings
              <input
                type="number"
                value={servings}
                onChange={(e) => setServings(e.target.value)}
                className={`w-full ${inputFieldStyling(servings)} bg-slate-500`}
              />
            </label>
            <div className="grid grid-cols-2 gap-2 lg:gap-4 my-2 lg:my-4">
              <DurationField
                label="Prep Time"
                value={prepTime}
                onChange={setPrepTime}
              />
              <DurationField
                label="Cook Time"
                value={cookTime}
                onChange={setCookTime}
              />
              <DurationField
                label="Cleanup Time"
                value={cleanupTime}
                onChange={setCleanupTime}
              />
              <label className="w-full h-auto p-1 md:p-2 mx-auto flex flex-col whitespace-nowrap text-left bg-sky-300 rounded-md text-sky-800 font-redhat font-bold">
                Total Time
                <input
                  type="text"
                  readOnly
                  value={formatReadable(
                    Number(prepTime || 0) +
                      Number(cookTime || 0) +
                      Number(cleanupTime || 0)
                  )}
                  className={`w-full ${inputFieldStyling(
                    totalMin
                  )} bg-slate-600 text-slate-200 cursor-not-allowed`}
                />
              </label>
            </div>

            <label className="w-full h-auto mb-4 p-1 md:p-2 mx-auto flex flex-col items-start whitespace-nowrap text-left font-bold">
              Taste
              <div className="h-1 w-full my-1 bg-rose-400 rounded-full"></div>
              <h1 className="ml-2 text-slate-400">Rate the taste</h1>
              <IconRatingSelect
                count={taste}
                setFunction={setTaste}
                Icon={FaHeart}
                color="text-rose-400 drop-shadow-md drop-shadow-rose-300"
                emptyColor="text-slate-600"
              />
              <h1 className="ml-2 text-slate-400">Taste Description</h1>
              <h2 className="ml-4 flex max-w-[90%] items-center text-wrap text-sm md:text-md lg:text-lg text-slate-400">
                <FaInfoCircle className="flex-shrink-0 h-4 w-4 lg:h-8 lg:w-8 m-2" />
                <p>
                  In a few words, describe how your food tastes. Ex. "Sweet, yet
                  sour!"
                </p>
              </h2>
              <input
                value={tasteDesc}
                onChange={(e) => setTasteDesc(e.target.value)}
                className={`w-full ${inputFieldStyling(
                  tasteDesc
                )} bg-slate-500`}
                placeholder="A few fun adjectives here..."
              />
            </label>
            <label className="w-full h-auto mb-4 p-1 md:p-2 mx-auto flex flex-col items-start whitespace-nowrap text-left font-bold">
              Cost
              <div className="h-1 w-full my-1 bg-emerald-600 rounded-md"></div>
              <h1 className="ml-2 text-slate-400">Rate the cost</h1>
              <IconRatingSelect
                count={cost}
                setFunction={setCost}
                Icon={FaDollarSign}
                color="text-emerald-600 drop-shadow-md drop-shadow-emerald-200"
                emptyColor="text-slate-600"
              />
              <h1 className="ml-2 text-slate-400">Cost Description</h1>
              <h2 className="ml-4 flex max-w-[90%] items-center text-wrap text-sm md:text-md lg:text-lg text-slate-400">
                <FaInfoCircle className="flex-shrink-0 h-4 w-4 lg:h-8 lg:w-8 m-2" />
                <p>
                  Again, as consisely as possible, tell the reader how much this
                  recipe costs to make. Consider both the ingredients, spices,
                  and the equipment required to properly make the dish. Not
                  everyone has a KitchenAid. Ex. "Cheap with the right tools!"
                </p>
              </h2>
              <input
                value={costDesc}
                onChange={(e) => setCostDesc(e.target.value)}
                className={`w-full ${inputFieldStyling(costDesc)} bg-slate-500`}
                placeholder="More adjectives here."
              />
            </label>

            <label className="w-full h-auto mb-4 p-1 md:p-2 mx-auto flex flex-col items-start whitespace-nowrap text-left font-bold">
              Difficulty
              <div className="h-1 w-full my-1 bg-amber-400 rounded-md"></div>
              <h1 className="ml-2 text-slate-400">Rate the difficulty</h1>
              <IconRatingSelect
                count={difficulty}
                setFunction={setDifficulty}
                Icon={FaStar}
                color="text-amber-300 drop-shadow-md drop-shadow-amber-100"
                emptyColor="text-slate-600"
              />
              <h1 className="ml-2 text-slate-400">Difficulty Description</h1>
              <h2 className="ml-4 flex max-w-[90%] items-center text-wrap text-sm md:text-md lg:text-lg text-slate-400">
                <FaInfoCircle className="flex-shrink-0 h-4 w-4 lg:h-8 lg:w-8 m-2" />
                <p>
                  How difficult would this be for the&nbsp;
                  <span className="italic underline">average</span>&nbsp;at home
                  cook? Ex. "Easy with patience"
                </p>
              </h2>
              <input
                value={difficultyDesc}
                onChange={(e) => setTasteDesc(e.target.value)}
                className={`w-full ${inputFieldStyling(
                  difficultyDesc
                )} bg-slate-500`}
                placeholder="A few fun adjectives here..."
              />
            </label>
          </fieldset>

          <fieldset id="ingredients-and-equipment">
            <div className="bg-blue-600 rounded-lg p-2 md:p-4">
              {/* INGREDIENTS */}
              <legend className="font-redhat my-2 md:my-4 f font-bold underline text-xl md:text-2xl lg:text-3xl text-left">
                &nbsp;&nbsp;&nbsp;&nbsp;Ingredients&nbsp;&nbsp;&nbsp;&nbsp;
              </legend>
              <div className="w-full flex font-redhat text-lg md:text-xl lg:text-2xl">
                <div className="w-[45%] min-w-0 ">Ingredient Name</div>
                <div className="w-[13%]  min-w-0">
                  {isMobile ? "#" : "Amount"}
                </div>
                <div className="w-[15%] min-w-0">Unit</div>
                <div className="w-[15%] text-center min-w-0">Optional?</div>
                <div className="w-[12%] min-w-0"></div>
              </div>

              {ingredients.map((it, idx) => (
                <div
                  key={idx}
                  className="w-full flex p-1 first:rounded-t-lg last:rounded-b-lg odd:bg-indigo-100 even:bg-indigo-200"
                >
                  <input
                    value={it.ingredient}
                    onChange={(e) =>
                      updateArrayItem(setIngredients)(idx, {
                        ...it,
                        ingredient: e.target.value,
                      })
                    }
                    className="w-[45%]  min-w-0 py-1 bg-transparent text-slate-800 rounded-sm"
                  />

                  <input
                    type="number"
                    step="any"
                    value={it.amount}
                    onChange={(e) =>
                      updateArrayItem(setIngredients)(idx, {
                        ...it,
                        amount: e.target.value,
                      })
                    }
                    className="w-[13%]  min-w-0 px-2 bg-slate-800/10 rounded-md text-slate-800"
                  />

                  <input
                    value={it.unit}
                    onChange={(e) =>
                      updateArrayItem(setIngredients)(idx, {
                        ...it,
                        unit: e.target.value,
                      })
                    }
                    className="w-[15%] min-w-0 py-1 bg-transparent text-slate-800"
                  />

                  <input
                    type="checkbox"
                    checked={it.optional}
                    onChange={(e) =>
                      updateArrayItem(setIngredients)(idx, {
                        ...it,
                        optional: e.target.checked,
                      })
                    }
                    className="w-[15%] min-w-0 flex-shrink-0"
                  />

                  <button
                    type="button"
                    onClick={() => removeArrayItem(setIngredients)(idx)}
                    className="w-[12%] text-slate-50 font-normal min-w-0 rounded-lg bg-red-400 hover:transform hover:scale-[105%] hover:font-bold p-1"
                  >
                    X
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={addArrayItem(setIngredients, {
                  ingredient: "",
                  amount: 0,
                  unit: "",
                  optional: false,
                })}
                className="w-60 whitespace-nowrap bg-emerald-600 text-slate-50 rounded-md hover:transform hover:scale-[105%] hover:font-bol p-1 md:p-2 my-2"
              >
                Add Ingredient
              </button>
              {/* EQUIPMENT */}
              <legend className="font-redhat my-2 md:my-4 font-bold underline text-xl md:text-2xl lg:text-3xl text-left">
                &nbsp;&nbsp;&nbsp;&nbsp;Equipment&nbsp;&nbsp;&nbsp;&nbsp;
              </legend>
              <div className="w-full flex font-redhat text-lg md:text-xl lg:text-2xl">
                <div className="w-[40%] min-w-0">Equipment</div>
                <div className="w-[33%] min-w-0">Alt</div>
                <div className="w-[15%] text-center min-w-0">Optional?</div>
                <div className="w-[12%] min-w-0"></div>
              </div>

              {equipment.map((et, idx) => (
                <div
                  key={idx}
                  className="w-full flex flex-wrap first:rounded-t-lg last:rounded-b-lg odd:bg-indigo-100 even:bg-indigo-200 p-1"
                >
                  <input
                    value={et.equipment}
                    onChange={(e) =>
                      updateArrayItem(setEquipment)(idx, {
                        ...et,
                        equipment: e.target.value,
                      })
                    }
                    className="w-[40%] min-w-0 py-1 bg-transparent text-slate-800 rounded-sm"
                  />

                  <input
                    value={et.alt}
                    onChange={(e) =>
                      updateArrayItem(setEquipment)(idx, {
                        ...et,
                        alt: e.target.value,
                      })
                    }
                    className="w-[33%] min-w-0 bg-slate-500/10 text-slate-800 rounded-md"
                  />

                  <input
                    type="checkbox"
                    checked={et.optionalEt}
                    onChange={(e) =>
                      updateArrayItem(setEquipment)(idx, {
                        ...et,
                        optionalEt: e.target.checked,
                      })
                    }
                    className="w-[15%] min-w-0"
                  />

                  <button
                    type="button"
                    onClick={() => removeArrayItem(setEquipment)(idx)}
                    className="w-[12%] text-slate-50 font-normal min-w-0 rounded-lg bg-red-400 hover:transform hover:scale-[105%] hover:font-bold p-1"
                  >
                    X
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={addArrayItem(setEquipment, {
                  equipment: "",
                  alt: "",
                  optionalEt: false,
                })}
                className="w-60 whitespace-nowrap bg-emerald-600 text-slate-50 rounded-md hover:transform hover:scale-[105%] hover:font-bold p-1 md:p-2 my-2"
              >
                Add Equipment
              </button>
            </div>
          </fieldset>

          <fieldset id="instructions">
            <legend className="w-full font-redhat my-2 md:my-4 font-bold underline text-xl md:text-2xl lg:text-3xl text-left">
              &nbsp;&nbsp;&nbsp;&nbsp;Mice En Place&nbsp;&nbsp;&nbsp;&nbsp;
            </legend>
            <div className="w-full flex font-redhat text-lg md:text-xl lg:text-2xl">
              <div className="w-[8%] min-w-0 text-center">#</div>
              <div className="w-[80%]">Preparation</div>
              <div className="w-[12%] min-w-0"></div>
            </div>
            {miceEnPlace.map((step, idx) => (
              <div
                key={idx}
                className="w-full h-auto flex p-1 flex-wrap first:rounded-t-lg last:rounded-b-lg odd:bg-orange-100 even:bg-orange-50 text-slate-600"
              >
                <div className="w-[8%] py-2 text-right pr-2">{idx + 1}.</div>
                <textarea
                  value={step}
                  onChange={(e) => {
                    updateArrayItem(setMiceEnPlace)(idx, e.target.value);
                    e.target.style.height = "auto";
                    e.target.style.height = `${e.target.scrollHeight}px`;
                  }}
                  className="w-[80%] min-h-4 p-1 md:p-2 bg-transparent rounded-sm "
                  placeholder="Type here..."
                  rows={1}
                />
                <button
                  type="button"
                  onClick={() => removeArrayItem(setMiceEnPlace)(idx)}
                  className="w-[12%] h-12 text-slate-50 font-normal min-w-0 rounded-lg bg-red-400 hover:transform hover:scale-[105%] hover:font-bold p-1"
                >
                  X
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addArrayItem(setMiceEnPlace, "")}
              className="w-60 whitespace-nowrap bg-emerald-600 text-slate-50 rounded-md hover:transform hover:scale-[105%] hover:font-bol p-1 md:p-2 my-2"
            >
              Add Prep Step
            </button>
            <legend className="font-redhat my-2 md:my-4 font-bold underline text-xl md:text-2xl lg:text-3xl text-left font-slate-300">
              &nbsp;&nbsp;&nbsp;&nbsp;Instructions&nbsp;&nbsp;&nbsp;&nbsp;
            </legend>
            <div className="w-full flex font-redhat text-lg md:text-xl lg:text-2xl">
              <div className="w-[8%] min-w-0 text-center">#</div>
              <div className="w-[80%]">Instruction</div>
              <div className="w-[12%] min-w-0"></div>
            </div>
            {instructions.map((instruction, idx) => (
              <div
                key={idx}
                className="w-full h-auto flex p-1 flex-wrap first:rounded-t-lg last:rounded-b-lg odd:bg-orange-100 even:bg-orange-50 text-slate-600"
              >
                <div className="w-[8%] py-2 text-right pr-2">{idx + 1}.</div>
                <textarea
                  value={instruction}
                  onChange={(e) => {
                    updateArrayItem(setInstructions)(idx, e.target.value);
                    e.target.style.height = "auto";
                    e.target.style.height = `${e.target.scrollHeight}px`;
                  }}
                  className="w-[80%] min-h-4 p-1 md:p-2 bg-transparent rounded-sm "
                  placeholder="Type here..."
                  rows={1}
                />
                <button
                  type="button"
                  onClick={() => removeArrayItem(setInstructions)(idx)}
                  className="w-[12%] text-slate-50 font-normal min-w-0 rounded-lg bg-red-400 hover:transform hover:scale-[105%] hover:font-bold p-1"
                >
                  X
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addArrayItem(setInstructions, "")}
              className="w-60 whitespace-nowrap bg-emerald-600 text-slate-50 rounded-md hover:transform hover:scale-[105%] hover:font-bol p-1 md:p-2 my-2"
            >
              Add Instruction
            </button>
          </fieldset>

          <fieldset id="extras">
            <div className="bg-violet-600 rounded-lg p-4 px-8 mt-2 md:mt-4">
              <legend className="w-full font-redhat my-2 md:my-4 font-bold underline text-xl md:text-2xl lg:text-3xl text-center text-slate-50">
                &nbsp;&nbsp;&nbsp;&nbsp;Extras&nbsp;&nbsp;&nbsp;&nbsp;
              </legend>
              <h1 className="text-slate-50 items-start whitespace-nowrap text-left font-bold">
                Tips & Tricks
              </h1>
              <div className="w-full flex font-redhat text-lg md:text-xl lg:text-2xl">
                <div className="w-[4%] min-w-0 text-center"></div>
                <div className="w-[84%] text-slate-50">Add A Tip</div>
                <div className="w-[12%] min-w-0"></div>
              </div>
              {tipsAndTricks.map((tip, idx) => (
                <div
                  key={idx}
                  className="w-full h-auto flex p-1 flex-wrap first:rounded-t-lg last:rounded-b-lg odd:bg-purple-300 even:bg-fuchsia-200 text-slate-600"
                >
                  <div className="w-[4%] flex justify-center items-center">
                    <FaStar />
                  </div>
                  <textarea
                    value={tip}
                    onChange={(e) => {
                      updateArrayItem(setTipsAndTricks)(idx, e.target.value);
                      e.target.style.height = "auto";
                      e.target.style.height = `${e.target.scrollHeight}px`;
                    }}
                    className="w-[84%] min-h-4 p-1 md:p-2 bg-transparent rounded-sm "
                    placeholder="Type here..."
                    rows={1}
                  />
                  <button
                    type="button"
                    onClick={() => removeArrayItem(setTipsAndTricks)(idx)}
                    className="w-[12%] h-12 text-slate-50 font-normal min-w-0 rounded-lg bg-red-400 hover:transform hover:scale-[105%] hover:font-bold p-1"
                  >
                    X
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={addArrayItem(setTipsAndTricks, "")}
                className="w-60 whitespace-nowrap bg-emerald-600 text-slate-50 rounded-md hover:transform hover:scale-[105%] hover:font-bol p-1 md:p-2 my-2"
              >
                Add Tip
              </button>

              <label className="w-full h-auto p-1 md:p-2 mx-auto flex flex-col text-slate-50 items-start whitespace-nowrap text-left font-bold">
                <h1>More Info About The Recipe</h1>
                {/* <h2 className="ml-4 flex max-w-[90%] items-center text-wrap text-sm md:text-md lg:text-lg text-slate-50">
                  <FaInfoCircle className="flex-shrink-0 h-4 w-4 lg:h-8 lg:w-8 m-2" />
                  <p>Optional but recomended</p>
                </h2> */}
                <textarea
                  value={moreInfo}
                  onChange={(e) => setMoreInfo(e.target.value)}
                  className={`w-full ${inputFieldStyling(
                    moreInfo
                  )} text-slate-600 bg-violet-200 min-h-40`}
                  placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
              </label>

              {/* <label>
                Image (path or URL)
                <input
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
              </label> */}
            </div>
          </fieldset>

          <div className="w-3/4 rounded-full bg-emerald-400 h-12 mx-auto my-4 md:my-8 flex justify-center items-center">
            <button
              type="submit"
              className="font-redhat font-bold text-slate-50"
            >
              Submit Recipe
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SubmitARecipe;
