import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="preFoot">
        <div className="preNav_div_1">
          <div>{giftCard}</div>
          <div>
            <p>Pick Any Product at Rs 199</p>
          </div>
        </div>

        <div className="preNav_div_2">
          <a href="https://www.myglamm.com/collection/pick-any-product-at-rs199">
            <b>SHOP NOW </b>
          </a>
        </div>

        <div className="preNav_div_3">
          {homeIcon}
          <p> MyGlamm Store</p>
        </div>
      </div>

      <div className="post_preNav">
        <div className="logo">
          <Link to={"/"}>
            <img src="https://i.ibb.co/HBYtz01/Beauty-Store.png" alt="logo" />
          </Link>
        </div>

        <div className="searchbox">
          <input
            type="text"
            name="search"
            placeholder="Find Lipistik, Eyeliner, Makeup, Tutorial, etc."
          />
        </div>
        {bagIcon}
        {userIcon}
      </div>
    </div>
  );
};

export default Footer;
