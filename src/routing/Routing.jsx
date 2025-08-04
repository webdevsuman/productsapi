import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";
import CategoryProducts from "../pages/CategoryProducts";
import SearchProducts from "../pages/SearchProducts";

const Routing = ({ updateCatProducts, updateSearchProducts }) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route
        path="/products/category/:cat"
        element={<CategoryProducts updateCatProducts={updateCatProducts} />}
      />
      <Route
        path="/products/search/:keyword"
        element={<SearchProducts updateSearchProducts={updateSearchProducts} />}
      />
    </Routes>
  );
};

export default Routing;
