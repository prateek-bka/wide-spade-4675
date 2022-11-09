import React from "react";
import { Link } from "react-router-dom";
import "../styles/PreNavbar.css";

const homeIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 0 24 24"
    width="24px"
    fill="#000000"
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
  </svg>
);

const giftCard = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 0 24 24"
    width="24px"
    fill="#000000"
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 12 7.4l3.38 4.6L17 10.83 14.92 8H20v6z" />
  </svg>
);

const searchIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 0 24 24"
    width="24px"
    fill="#000000"
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
  </svg>
);

const Prenavbar = () => {
  return (
    <div>
      <div className="preNav">
        <div className="preNav_div_1">
          {giftCard}
          <p>Pick Any Product at Rs 199</p>
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

        <div className="searchbox"></div>
        <input
          type="text"
          name="search"
          placeholder="Find Lipistik, Eyeliner, Makeup, Tutorial, etc."
        />
        {searchIcon}
      </div>
    </div>
  );
};

export default Prenavbar;
