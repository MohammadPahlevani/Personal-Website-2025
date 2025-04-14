import React from "react";
import { Link } from "react-router-dom";

export default function Project({
  title,
  description,
  to,
  image,
  flex,
  position,
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-10 ${
        flex === "row" ? "xl:flex-row" : "xl:flex-row-reverse"
      }`}
    >
      <div className="hidden font-Vazir-Medium text-center rotate-90">
        <p>طراحی و توسعه</p>
        <p>1404</p>
      </div>
      <div className="group h-full flex flex-col items-center gap-14 xl:relative">
        <div className="w-full h-80 shadow-xl shadow-gray-500 rounded-lg sm:h-90 md:w-130 md:h-100 ">
          <img
            src={image}
            alt="project-image"
            className="w-full h-full rounded-lg shadow-xl shadow-gray-500 transition-all duration-300 delay-100 group-hover:scale-110"
          />
        </div>
        <span
          className={`block w-25 rounded h-[0.3rem] bg-linear-to-r from-blueme to-redme transition-all duration-300 delay-100 xl:group-hover:scale-110 xl:absolute xl:top-12 ${
            position === "-right-12"
              ? "xl:-right-12 xl:group-hover:-right-19"
              : "xl:-left-12 xl:group-hover:-left-19"
          }`}
        ></span>
      </div>
      <div className="flex flex-col items-center w-4/7 gap-10">
        <h2 className="font-Vazir-Bold text-xl text-center md:text-4xl">{title}</h2>
        <p className="font-Vazir-Medium text-gray-500 text-lg text-center">
          {description}
        </p>
        <Link
          to={to}
          className="font-Vazir-Medium text-white bg-linear-to-r from-blueme to-redme rounded-full pt-3 pb-3 pl-6 pr-6 transition-all duration-300 delay-100 hover:text-black"
        >
          مشاهده پروژه
        </Link>
      </div>
    </div>
  );
}
