import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="main_footer_container">
      <div className="mini_footer_div">
        <b>Company</b>
        <p>About Myglammm</p>
        <p>Customers Speak</p>
        <p>In the News</p>
        <p>Terms and Conditions</p>
        <p>Privacy Policy</p>
        <p>Fees and Payment Policy</p>
        <p>Shipping and Delivery Policy</p>
      </div>
      <div className="mini_footer_div">
        <b>Shopping</b>
        <p>Browse by A-Z</p>
        <p>Browse by Manufacturers</p>
        <p>Beauty Blogs</p>
        <p>Offers / Coupons</p>
        <p>FAQs</p>
      </div>
      <div className="mini_footer_div">
        <b>Social</b>
        <p>Facebook</p>
        <p>Twitter</p>
        <p>LinkedIn</p>
        <p>Youtube</p>
        <p>Refer & Earn</p>
      </div>
      <div className="mini_footer_div">
        <b>SUBSCRIBE TO OUR NEWSLETTER</b>
        <p>Stay tuned to our latest offers</p>
        <input type="text" placeholder="Enter your Email Address" />
        <br />
        <br />
        <br />
        <img
          src="https://e7.pngegg.com/pngimages/912/1019/png-clipart-app-store-google-play-apple-apple-text-logo.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Footer;
