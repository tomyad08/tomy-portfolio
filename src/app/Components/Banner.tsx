import { useEffect, useState } from "react";
import { DataSkill } from "../DataStatic.tsx/DataSkill";

interface DataSkill {
  id: number;
  name: string;
}
const Banner = () => {
  const listSkill: DataSkill[] = DataSkill;

  return (
    <div
      className=" bg-gradient-to-b from-white to-slate-400 md:py-9 xl:py-10"
      id="aboutme"
    >
      <div className="xl:flex xl:justify-around pt-20 xl:pt-24">
        <div className="relative flex justify-center -top-1">
          <div className="absolute top-0 xl:m-4 xl:w-96 w-full h-24 bg-purple-700 xl:h-96 xl:bg-slate-100 xl:opacity-30 xl:rounded-full p-5 z-5"></div>
          <div className="absolute right-10 top-4 w-10 h-10 xl:w-24 xl:h-24 bg-gradient-to-b from-slate-400 to-blue-500 rounded-full p-5 z-5"></div>
          <div className="absolute right-24 top-24 w-14 h-14 xl:w-72 xl:h-72 bg-gradient-to-b from-slate-100 to-pink-600 rounded-full p-5 z-5"></div>
          <img
            src="/tomy.png"
            alt="photo profil"
            className={`z-10 w-2/5 xl:w-4/5 rounded-full bg-blue-100 xl:bg-transparent border-dashed border-4 border-blue-700`}
          />
        </div>
        <div className="xl:mx-10   px-5 w-full xl:w-2/4">
          <p className="text-3xl text-center xl:text-7xl font-bold text-purple-800 drop-shadow-xl">
            Tomy Adiansyah
          </p>
          <p className="text-sm text-justify text-black py-5">
            I am a graduate from physics department in Universitas Indonesia
            2021. I love coding since my last semester to solve math-physics
            problems. But in sep 2022, I tried to learn everything about
            frontend web development. In the past few months, I have also been
            exploring server-side rendering technology in Next JS, learning the
            GraphQL query language, state management using Redux, and creating
            rest api with Node JS and express JS. In the future, I want to
            become a software engineer.
          </p>
          <div className="hidden md:block">
            <h1 className="font-semibold text-xl text-purple-800 mb-2">
              My Skill
            </h1>

            <div className="columns-6">
              {listSkill.map((value) => (
                <div
                  className="bg-blue-800 text-purple-100 p-1 mb-2 me-2 rounded-lg text-sm text-center"
                  style={{ scrollSnapAlign: "start" }}
                  key={value.id}
                >
                  {value.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
