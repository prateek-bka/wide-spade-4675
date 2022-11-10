import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeContainer from "../Container/Home/HomeContainer";
import ProductContainer from "../Container/Products/ProductContainer";

import Navbar from "../Components/Navbar";
import PreNavbar from "../Components/PreNavbar";

const RouteComponent = () => {
  return (
    <>
      <BrowserRouter>
        <PreNavbar />
        <Navbar />

        <Routes>
          <Route path="/" element={<HomeContainer />}></Route>
          <Route path="/products" element={<ProductContainer />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RouteComponent;
