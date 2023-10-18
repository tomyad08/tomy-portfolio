"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import Footer from "./Footer";

interface Inputs {
  full_name?: string;
  company?: string;
  email?: string;
  write_anything?: string;
}

const AskForm: React.FC = () => {
  const [inputs, setInputs] = useState<Inputs>({});
  const [verif, setVerif] = useState(false);

  const end: string =
    "https://script.google.com/macros/s/AKfycby_G3nuAI2gvzTwq1cQhvRiPZTeW5f5FjEKZiN8I3ooirPc7phkv6WFipmZkcDLcUfo2Q/exec";
  const styleInput: string =
    "p-2 w-full bg-white border-b-2 border-slate-200 focus:outline-none text-black";
  const styleLabel: string = "text-blue-800 text-sm mt-2";

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("full_name", inputs.full_name || " ");
    formData.append("email", inputs.email || " ");
    formData.append("company", inputs.company || " ");
    formData.append("write_anything", inputs.write_anything || " ");

    fetch(end, { method: "POST", body: formData }).then(() => setVerif(true));
  };

  return (
    <div
      className="bg-white xl:h-screen flex justify-center items-center xl:rounded-t-full py-10 xl:py-0"
      id="contactme"
    >
      <div className="xl:h-96">
        {verif && (
          <div className="flex justify-center">
            <div className="text-sm text-black rounded-lg text-center bg-blue-300 p-2 w-52">
              Thank you for submitting
            </div>
          </div>
        )}
        <h1 className="text-center text-lg xl:text-xl font-semibold text-purple-800 mb-5">
          Any help? Don't hesitate to contact me.
        </h1>
        <div className="flex justify-center">
          <form
            onSubmit={handleSubmit}
            className="w-full xl:w-2/4 p-5 bg-white rounded-lg drop-shadow-xl"
          >
            <label className={styleLabel}>Full Name</label>
            <input
              className={styleInput}
              type="text"
              name="full_name"
              value={inputs.full_name || ""}
              onChange={handleChange}
            />
            <label className={styleLabel}>Company</label>
            <input
              className={styleInput}
              type="text"
              name="company"
              value={inputs.company || ""}
              onChange={handleChange}
            />
            <label className={styleLabel}>Email</label>
            <input
              className={styleInput}
              type="email"
              name="email"
              value={inputs.email || ""}
              onChange={handleChange}
            />
            <label className={styleLabel}>Write Anything</label>
            <textarea
              className={styleInput}
              name="write_anything"
              value={inputs.write_anything || ""}
              onChange={handleChange}
            />
            <button
              className="p-2 w-full bg-pink-600 rounded-lg mt-5"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default AskForm;
