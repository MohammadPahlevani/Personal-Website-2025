import React from "react";
import { Link } from "react-router-dom";

export default function Social({image, to}) {
  return (
    <div>
      <Link to={to}>
        <img src={image} alt="social-network-image" className="size-5 transition-all duration-300 delay-100 hover:scale-150"/>
      </Link>
    </div>
  );
}
