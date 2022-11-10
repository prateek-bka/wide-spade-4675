import React from "react";
import "../styles/SpotlightHomePage.css";

const SpotlightHome = () => {
  return (
    <div className="SpotlightHomePage_Structure">
      <div className="basic-home-structure">
        <img
          src="https://files.myglamm.com/site-images/original/ULt2240x614.jpg"
          alt=""
        />
      </div>

      <div>
        <div>
          <h3>IN THE SPOTLIGHT</h3>
        </div>

        <div className="cardsContainer-homepage">
          <div className="cards-homepage">
            <img
              src="https://files.myglamm.com/site-images/original/Ult700x488.jpg"
              alt=""
            />
            <h3>Perfect lipstick for everyday wear</h3>
          </div>
          <div className="cards-homepage">
            <img
              src="https://files.myglamm.com/site-images/original/MM700X488_2.jpg"
              alt=""
            />
            <h3>Manish Malhotra Face Range</h3>
          </div>
          <div className="cards-homepage">
            <img
              src="https://files.myglamm.com/site-images/original/Lit700x488.png"
              alt=""
            />
            <h3>LIT Matte About It Lip Color</h3>
          </div>
        </div>
      </div>

      <div className="basic-home-structure">
        <img
          src="https://files.myglamm.com/site-images/original/2240x614-Gifting-Store-KV-refresh.jpg"
          alt=""
        />
      </div>

      <div>
        <h3>SHOP FROM CATEGORIES</h3>
      </div>
      <div className="categories_homePage">
        <div>
          <img
            src="https://files.myglamm.com/site-images/original/SKin-1-2.png"
            alt=""
          />
          <h4>Skin</h4>
        </div>
        <div>
          <img
            src="https://files.myglamm.com/site-images/original/Lips-3.png"
            alt=""
          />
          <h4>Lips</h4>
        </div>
        <div>
          <img
            src="https://files.myglamm.com/site-images/original/Superfoods-Model-120-X-120-px_2.jpg"
            alt=""
          />
          <h4>Hair</h4>
        </div>
        <div>
          <img
            src="https://files.myglamm.com/site-images/original/Eyes-4.png"
            alt=""
          />
          <h4>Eyes</h4>
        </div>
        <div>
          <img
            src="https://files.myglamm.com/site-images/original/Face-5.png"
            alt=""
          />
          <h4>Face</h4>
        </div>
        <div>
          <img
            src="https://files.myglamm.com/site-images/original/Nails-1.png"
            alt=""
          />
          <h4>Nails</h4>
        </div>
      </div>

      <div className="basic-home-structure">
        <img
          src="https://files.myglamm.com/site-images/original/make2240X614.jpg"
          alt=""
        />
      </div>

      <div>
        <div>
          <h3>LATEST GLAMM LAUNCHES</h3>
        </div>

        <div className="cardsContainer-homepage">
          <div className="cards-homepage">
            <img
              src="https://files.myglamm.com/site-images/original/final-glow-SK-banner-700x488.gif"
              alt=""
            />
          </div>
          <div className="cards-homepage">
            <img
              src="https://files.myglamm.com/site-images/original/Beauty-Calender-desktop-700x488.jpg"
              alt=""
            />
          </div>
          <div className="cards-homepage">
            <img
              src="https://files.myglamm.com/site-images/original/Influencer-Store700x488.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpotlightHome;
