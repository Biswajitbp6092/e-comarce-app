import React, { createContext, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import ProductListing from "./Pages/ProductListing/ProductListing";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";

import { IoClose } from "react-icons/io5";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";

import DialogContent from "@mui/material/DialogContent";

import ProductZoom from "./components/ProductZoom/ProductZoom";
import ProductDetailsComponent from "./components/ProductDetailsComponent/ProductDetailsComponent";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import CartPage from "./Pages/CartPage/CartPage";
import Verify from "./Pages/Verify/Verify";

import toast, { Toaster } from "react-hot-toast";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import CheckOut from "./Pages/CheckOut/CheckOut";
import MyAccount from "./Pages/MyAccount/MyAccount";
import MyList from "./Pages/MyList/MyList";
import Orders from "./Pages/Orders/Orders";

const myContext = createContext();

function App() {
  const [openProductDetailsModal, setOpenProductDetailsModal] = useState(false);
  const [maxWidth, setMaxWidth] = useState("lg");
  const [fullWidth, setFullWidth] = useState(true);
  const [openCartPanel, setOpenCartPanel] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const handleCloseProductDetailsModal = () => {
    setOpenProductDetailsModal(false);
  };

  const toggleCartPanel = (newOpen) => () => {
    setOpenCartPanel(newOpen);
  };

  const openAlartBox = (status, msg) => {
    if (status === "Sucess") {
      toast.success(msg);
    }
    if (status === "Error") {
      toast.error(msg);
    }
  };

  const values = {
    setOpenProductDetailsModal,
    setOpenCartPanel,
    toggleCartPanel,
    openCartPanel,
    openAlartBox,
    isLogin,
    setIsLogin,
  };
  return (
    <>
      <BrowserRouter>
        <myContext.Provider value={values}>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="productlisting" element={<ProductListing />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/verify" element={<Verify />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="/my-account" element={<MyAccount />} />
            <Route path="/my-list" element={<MyList />} />
            <Route path="/my-orders" element={<Orders />} />
          </Routes>
          <Footer />
        </myContext.Provider>
      </BrowserRouter>

      <Toaster />

      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={openProductDetailsModal}
        onClose={handleCloseProductDetailsModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="productDetailsModal"
      >
        <DialogContent>
          <div className="flex items-center w-full productDetailsModalContainer relative">
            <Button
              onClick={handleCloseProductDetailsModal}
              className="!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000] !absolute right-[15px] top-[15px] !bg-[#f2f2f2]"
            >
              <IoClose size={32} />
            </Button>
            <div className="col1 w-[40%] px-3">
              <ProductZoom />
            </div>
            <div className="col2 w-[60%] py-8 px-8 pr-16 productContain">
              <ProductDetailsComponent />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default App;
export { myContext };
