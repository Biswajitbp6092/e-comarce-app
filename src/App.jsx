import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import ProductListing from "./Pages/ProductListing/ProductListing";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="productlisting" element={<ProductListing />} />
          <Route path="/product/:id" element={<ProductDetails/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
