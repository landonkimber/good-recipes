import { useState } from "react";

import { FaInfoCircle } from "react-icons/fa";

const inputFieldStyling = (data) =>
  `rounded-md p-1 md:p-2 bg-slate-50 border-2 font-normal focus:border-sky-300 ${
    !data ? "border-transparent" : "border-emerald-400"
  }`;
const randomBool = Math.random() < 0.5;

const ContactForm = () => {
  const isMobile = window.innerWidth < 768 ? true : false;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({ phone: "", email: "" });

  function resetForm() {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setMessage("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    const payload = {
      firstName,
      lastName,
      email,
      phone,
      message,
    };

    // For now, JSON is submitted to console
    console.log("Contact Submited:", payload);
    alert("Contact JSON logged to console.");
  }

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
  return (
    <div
      className="relative w-full
       bg-slate-800/60 backdrop-blur-[5px] pb-[5vh] rounded-md max-w-7xl mx-auto mt-[3vh] md:mt-[8vh] lg:mt-[10vh]"
    >
      <form onSubmit={handleSubmit}>
        <div
          id="submit-recipe-header"
          className="w-full p-4 lg:p-8 text-lg text-slate-50 font-bold md:text-xl lg:text-2xl flex flex-col items-center"
        >
          <h1 className="text-center m-2 text-2xl md:text-3xl lg:text-4xl font-redhat">
            Contact Form
          </h1>
          <div className="h-1 w-[80%] my-4 mx-auto bg-slate-300"></div>
          <p className="font-normal">
            Questions, comments, concerns? Submit a message using the form below
            and we will get back to you as soon as we can!
          </p>
        </div>
        <fieldset id="about-you">
          <div className="w-[90%] mx-auto text-lg md:text-xl lg:text-2xl text-sky-800 bg-slate-300 p-2 md:p-4 rounded-md">
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
            <label className="w-full h-auto p-1 md:p-2 mx-auto flex flex-col items-start whitespace-nowrap text-left font-bold">
              <h1>Message</h1>
              {/* <h2 className="ml-4 flex max-w-[90%] items-center text-wrap text-sm md:text-md lg:text-lg text-slate-400">
                <FaInfoCircle className="flex-shrink-0 h-4 w-4 lg:h-8 lg:w-8 m-2" />
                <p>
                  Write a quick but eye-catching description not just about your
                  food but, also your recipe.
                </p>
              </h2> */}
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={`w-full ${inputFieldStyling(
                  message
                )} bg-slate-200 min-h-40`}
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..."
              />
            </label>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default ContactForm;
