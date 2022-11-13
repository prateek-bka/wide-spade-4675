import React, { useEffect, useState } from "react";
import SkinCarousel from "../../Components/SkinCarousel";
import axios from "axios";

const SkinCareContainer = () => {
  const [data, setData] = useState([]);

  async function getData() {
    axios
      .get(
        "https://makeup-api.herokuapp.com/api/v1/products.json?product_type=blush"
      )
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      });
  }

  useEffect(() => {
    getData();
    console.log("data_fetched", data);
  }, []);

  return (
    <div>
      <SkinCarousel />
      <div>
        <div className="productCardList">
          {data.map((e) => (
            <div key={e.id}>
              <div className="card_container">
                <img src={e.api_featured_image} alt="" />
                <h5>{e.name}</h5>
                <div>
                  <p>{`Rs ${e.price}`}</p>
                  <button>Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkinCareContainer;
