import React from "react";
import "../styles/PreNavbar.css";

const Prenavbar = () => {
  return (
    <div>
      <div className="preNav">
        <div className="preNav_div_1">
          <p>Pick Any Product at Rs 199</p>
        </div>

        <div className="preNav_div_2">
          <a href="https://www.myglamm.com/collection/pick-any-product-at-rs199">
            SHOP NOW
          </a>
        </div>

        <div className="preNav_div_3">
          <p>MyGlamm Store</p>
        </div>
      </div>
    </div>
  );
};

export default Prenavbar;
