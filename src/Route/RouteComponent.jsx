import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeContainer from "../Container/Home/HomeContainer";
import ProductContainer from "../Container/Products/ProductContainer";

import Navbar from "../Components/Navbar";
import PreNavbar from "../Components/PreNavbar";
import Footer from "../Components/Footer";
import RewardsContainer from "../Container/Rewards/RewardsContainer";
import SkinCareContainer from "../Container/SkinCare/SkinCareContainer";

const RouteComponent = () => {
  return (
    <>
      <BrowserRouter>
        <PreNavbar />
        <Navbar />

        <Routes>
          <Route path="/" element={<HomeContainer />}></Route>
          <Route path="/products" element={<ProductContainer />}></Route>
          <Route path="/skin" element={<SkinCareContainer />}></Route>
          <Route path="/rewards" element={<RewardsContainer />}></Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
};

export default RouteComponent;
