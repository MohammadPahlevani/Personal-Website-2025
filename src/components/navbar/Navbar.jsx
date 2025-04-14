import React, { useEffect, useState } from "react";
import icon from "../../assets/images/moplidev-icon.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [barStatus, setBarStatus] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  const handleScrollClick = () => {
    window.scrollTo(0, 0);
  };
  const handleClick = () => {
    setBarStatus((prevState) => !prevState);
  };
  return (
    <div className=" container fixed top-0 left-0 right-0 z-100 flex justify-between items-center pt-5 pb-5">
      <Link to={"https://github.com/mohammadpahlevani"}>
        <img src={icon} alt="site-icon" />
      </Link>
      <button className="rounded-full p-2 transition-all duration-300 delay-100 cursor-pointer hover:bg-gray-200">
        <svg className="w-7 h-7" onClick={handleClick}>
          <use href="#bars-3"></use>
        </svg>
      </button>
      <div
        className={`${
          barStatus ? "" : "hidden"
        } fixed z-1000 cursor-pointer bg-linear-to-r from-blueme to-redme text-white top-0 bottom-0 left-0 right-0 flex justify-center items-center font-Vazir-Bold lg:text-2xl xl:text-3xl`}
      >
        <svg
          className="absolute top-0 left-0 size-7 m-5 p-1 border rounded-full lg:size-9 transition-all duration-300 delay-100 hover:bg-gray-200 hover:text-black"
          onClick={handleClick}
        >
          <use href="#x-mark"></use>
        </svg>
        <ul className="flex flex-col gap-15 items-center">
          <li>
            <a
              href="#home"
              onClick={handleClick}
              className="transition-all duration-300 delay-100 hover:text-black"
            >
              خانه
            </a>
          </li>
          <li>
            <a
              href="#project"
              onClick={handleClick}
              className="transition-all duration-300 delay-100 hover:text-black"
            >
              پروژه‌ها
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={handleClick}
              className="transition-all duration-300 delay-100 hover:text-black"
            >
              تماس
            </a>
          </li>
        </ul>
      </div>
      <svg
        className={`fixed bottom-5 left-10 z-100 size-10 rounded-full border p-2 cursor-pointer transition-all duration-300 delay-100 hover:scale-110 sm:left-22 xl:left-30 ${
          scroll ? "translate-y-0" : "translate-y-30"
        }`}
        onClick={handleScrollClick}
      >
        <use href="#arrow-long-up"></use>
      </svg>
    </div>
  );
}
