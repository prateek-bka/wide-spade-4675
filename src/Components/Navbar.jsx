import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <Link to={"/"} className="navlinks">
        HOME
      </Link>
      <Link to={"/makeup"} className="navlinks">
        MAKEUP
      </Link>
      <Link to={"/hair"} className="navlinks">
        HAIR CARE
      </Link>
      <Link to={"/skin"} className="navlinks">
        SKIN CARE
      </Link>
      <Link to={"/care"} className="navlinks">
        SANITIZING CARE
      </Link>
      <Link to={"/collection"} className="navlinks">
        COLLECTION
      </Link>
      <Link to={"/rewards"} className="navlinks">
        REWARDS
      </Link>
      <Link to={"/studio"} className="navlinks">
        MYGLAMY STUDIO
      </Link>
      <Link to={"/offers"} className="navlinks">
        OFFERS
      </Link>
    </div>
  );
};

export default Navbar;
