"use client";
import Image from "next/image";
import React, { useState } from "react";
import { DataPort } from "../DataStatic.tsx/DataPortfolio";
import Link from "next/link";

const Portfolio = () => {
  const listPort = DataPort;
  const [select, setSelect] = useState(listPort[0]);

  return (
    <div
      className="bg-gradient-to-b from-purple-700 to-black p-4 xl:p-10 z-30"
      id="portfolio"
    >
      <h1 className="text-3xl font-semibold text-center text-white">
        My Latest Portfolio
      </h1>
      <div className="xl:flex xl:justify-center mt-7">
        <div className="flex justify-center">
          <Image
            src={select.picture}
            width={550}
            height={500}
            alt={select.name}
            className="rounded-lg border-2 border-white xl:mx-5"
          />
        </div>
        <div className="xl:w-96">
          <h1 className="text-2xl text-center py-2 xl:text-3xl font-semibold text-pink-300">
            {select.name}
          </h1>
          <p className="text-justify py-2 text-white text-sm">
            {select.description}
          </p>
          <Link href={select.link}>
            <button className="w-full mt-2 transition hover:delay-150 duration-300 ease-in-out hover:bg-pink-600 hover:text-white py-2 font-semibold bg-blue-200 rounded-lg border-white border-1 text-blue-800">
              Explore
            </button>
          </Link>
        </div>
      </div>

      <div className="xl:flex xl:justify-center mt-10">
        <div className="columns-3">
          {listPort.map((value) => (
            <div
              key={value.id}
              onClick={() => setSelect(value)}
              className="mb-3 "
            >
              <Image
                src={value.picture}
                width={200}
                height={200}
                alt={value.name}
                className="rounded-lg w-full hover:scale-105 xl:w-200 xl:h-100 overflow-hidden xl:mb-4 cursor-pointer border border-1 border-white"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
