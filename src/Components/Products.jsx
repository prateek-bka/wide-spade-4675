import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Products.css";

const Products = () => {
  const [data, setData] = useState([]);

  async function getData() {
    axios
      .get(
        "https://makeup-api.herokuapp.com/api/v1/products.json?product_type=foundation"
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
      <div className="productCardList">
        {data.map((e) => (
          <div key={e.id}>
            <div className="card_container">
              <img src={e.image_link} alt="" />
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
  );
};

export default Products;
