import React from "react";
import { Link } from "react-router-dom";
import Social from "../social/Social";
import copyright from "../../assets/images/copyright.svg";
import icon from "../../assets/images/moplidev-icon.svg";
import instagram from "../../assets/images/instagram.svg";
import telegram from "../../assets/images/telegram.svg";
import linkedin from "../../assets/images/linkedin.svg";
import github from "../../assets/images/github.svg";

export default function Footer() {
  return (
    <div className="flex flex-col items-center gap-7 mt-20" id="contact">
      <p className="font-Vazir-Medium text-lg text-center">من را دنبال کنید</p>
      <div className="flex items-center gap-6">
        <Social
          image={github}
          to={"https://github.com/mohammadpahlevani"}
        ></Social>
        <Social
          image={linkedin}
          to={
            "https://www.linkedin.com/in/mohammad-pahlevani-81a246354?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          }
        ></Social>
        <Social image={telegram} to={"https://t.me/moplidev"}></Social>
        <Social
          image={instagram}
          to={"https://instagram.com/moplidev"}
        ></Social>
      </div>
      <div className="flex items-center justify-center gap-3 pt-5">
        <img src={copyright} alt="copyright-icon" className="size-4" />
        <p className="font-Vazir-Medium text-gray-500 text-center">
          طراحی و توسعه داده شده توسط
        </p>
        <Link to={"https://github.com/mohammadpahlevani"}>
          <img
            src={icon}
            alt="site-icon"
            className="w-20 transition-all duration-300 delay-100 hover:scale-110"
          />
        </Link>
      </div>
    </div>
  );
}
