"use client";
import Link from "next/link";
import React, { useState } from "react";
import { DataNavBar } from "../DataStatic.tsx/DataNavBar";

interface NavBarData {
  id: number;
  name: string;
  link: string;
}

const NavBar = () => {
  const ListNav: NavBarData[] = DataNavBar;
  const [condition, setCondition] = useState(false);
  return (
    <div className="bg-purple-800 md:bg-slate-200 w-full p-5 fixed z-20 ">
      <div className="flex justify-between">
        <div className="text-black">
          <p className="text-2xl pt-1 font-semibold text-white md:text-black">
            Portfolio
          </p>
        </div>
        <div className="">
          {!condition && (
            <div onClick={() => setCondition(!condition)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="white"
                className="bi bi-list md:hidden"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </div>
          )}
          {condition && (
            <div className="bg-white rounded-lg">
              <p
                className="text-end p-4 text-black font-semibold"
                onClick={() => setCondition(!condition)}
              >
                x
              </p>
              {ListNav.map((value) => (
                <Link href={value.link} key={value.id}>
                  <div
                    className="px-4 py-2 hover:bg-pink-500 text-black  rounded-lg drop-shadow-2xl hover:text-white "
                    onClick={() => setCondition(!condition)}
                  >
                    <h1 className="text-sm md:text-lg mx-5">{value.name}</h1>
                  </div>
                </Link>
              ))}
            </div>
          )}
          <div className="md:flex justify-around hidden ">
            {ListNav.map((value) => (
              <Link href={value.link} key={value.id}>
                <div
                  className="px-4 py-2 hover:bg-pink-500 text-black  rounded-lg drop-shadow-2xl hover:text-white "
                  onClick={() => setCondition(!condition)}
                >
                  <h1 className="text-sm md:text-lg mx-5">{value.name}</h1>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
