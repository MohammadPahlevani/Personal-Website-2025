import React from "react";
import Project from "../project/Project";
import arrow from "../../assets/images/arrow.mpi91.ir_.png";
import moplidev from "../../assets/images/moplidev.ir_.png";

export default function Main() {
  return (
    <div className="container flex flex-col gap-30" id="project">
      <div className="w-full flex items-center justify-center">
        <span className="block w-3/4 mt-25 rounded h-[0.3rem] bg-linear-to-r from-blueme to-redme"></span>
      </div>
      <Project
        title={"پروژه تمرینی"}
        description={"HTML5, CSS3, JavaScript, React, Swiper.js and TailwindCSS"}
        image={arrow}
        to={"http://arrow.moplidev.ir"}
        flex={"row-reverse"}
        position={"-right-12"}
      ></Project>
      <Project
        title={"وب‌سایت شخصی"}
        description={"HTML5, CSS3, JavaScript, React and TailwindCSS"}
        image={moplidev}
        to={"http://moplidev.ir"}
        flex={"row"}
        position={"-left-12"}
      ></Project>
      <div className="w-full flex items-center justify-center">
        <span className="block w-3/4 rounded h-[0.3rem] bg-linear-to-r from-blueme to-redme"></span>
      </div>
    </div>
  );
}
