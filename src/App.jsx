import React, { createContext, use, useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import ProductListing from "./Pages/ProductListing/ProductListing";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";

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
import { fetchDataFromApi, postData } from "./utlis/api";
import Address from "./Pages/MyAccount/Address";
import OrderSuccess from "./Pages/Orders/OrderSuccess";
import OrderFailed from "./Pages/Orders/OrderFailed";

const myContext = createContext();

function App() {
  const [openProductDetailsModal, setOpenProductDetailsModal] = useState({
    open: false,
    item: {},
  });

  const [isLogin, setIsLogin] = useState(false);
  const [userData, setUserData] = useState(null);
  const [catData, setCatData] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [myListData, setMyListData] = useState([]);

  const [openCartPanel, setOpenCartPanel] = useState(false);
  const [openAddressPanel, setOpenAddressPanel] = useState(false);

  const [addressMode, setAddressMode] = useState("add");
  const [addressId, setAddressId] = useState("");

  const handleOpenProductDetailsModal = (status, item) => {
    setOpenProductDetailsModal({
      open: status,
      item: item,
    });
  };

  const handleCloseProductDetailsModal = () => {
    setOpenProductDetailsModal({
      open: false,
      item: {},
    });
  };

  const toggleCartPanel = (newOpen) => () => {
    setOpenCartPanel(newOpen);
  };
  const toggleAddressPanel = (newOpen) => () => {
    if (newOpen === false) {
      setAddressMode("add");
    }
    setOpenAddressPanel(newOpen);
  };

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token !== undefined && token !== null && token !== "") {
      setIsLogin(true);

      getCartItems();
      getMyListData();
      getUserDetails();
    } else {
      setIsLogin(false);
    }
  }, [isLogin]);

  const getUserDetails = () => {
    fetchDataFromApi(`/api/user/user-details`).then((res) => {
      setUserData(res?.data?.data);
      if (res?.data?.data?.error === true) {
        if (res?.data?.data?.message === "you have not login") {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          openAlartBox("Error", "your Sesion is closed please login again");
          window.location.href = "/login";
          setIsLogin(false);
        }
      }
    });
  };

  useEffect(() => {
    fetchDataFromApi(`/api/category`).then((res) => {
      if (res?.data?.error === false) {
        setCatData(res?.data?.data);
      }
    });
  }, []);

  const openAlartBox = (status, msg) => {
    if (status === "Sucess") {
      toast.success(msg);
    }
    if (status === "Error") {
      toast.error(msg);
    }
  };

  const addToCart = (product, userId, quantity) => {
    if (userId === undefined) {
      openAlartBox("Error", "You are not Login, please Login Frist");
      return false;
    }
    const data = {
      productTitle: product?.name,
      image: product?.image,
      rating: product?.rating,
      price: product?.price,
      oldPrice: product?.oldPrice,
      quantity: quantity,
      subTotal: parseInt(product?.price * quantity),
      productId: product?._id,
      countInStock: product?.countInStock,
      userId: userId,
      brand: product?.brand,
      discount: product?.discount,
      size: product?.size,
      weight: product?.weight,
      ram: product?.ram,
    };

    postData("/api/cart/add", data).then((res) => {
      if (res?.error === false) {
        openAlartBox("Sucess", res?.message);
        getCartItems();
      } else {
        openAlartBox("Error", res?.message);
      }
    });
  };

  const getCartItems = () => {
    fetchDataFromApi(`/api/cart/get`).then((res) => {
      if (res?.data?.error === false) {
        setCartData(res?.data?.data);
      }
    });
  };
  const getMyListData = () => {
    fetchDataFromApi(`/api/mylist`).then((res) => {
      if (res?.data?.error === false) {
        setMyListData(res?.data?.data);
      }
    });
  };

  const values = {
    openProductDetailsModal,
    setOpenProductDetailsModal,
    handleOpenProductDetailsModal,
    handleCloseProductDetailsModal,
    setOpenCartPanel,
    toggleCartPanel,
    openCartPanel,
    setOpenAddressPanel,
    toggleAddressPanel,
    openAddressPanel,
    openAlartBox,
    isLogin,
    setIsLogin,
    userData,
    setUserData,
    setCatData,
    catData,
    addToCart,
    cartData,
    setCartData,
    getCartItems,
    myListData,
    setMyListData,
    getMyListData,
    getUserDetails,
    addressMode,
    setAddressMode,
    setAddressId,
    addressId,
  };
  return (
    <>
      <BrowserRouter>
        <myContext.Provider value={values}>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/productlisting" element={<ProductListing />} />
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
            <Route path="/orders/success" element={<OrderSuccess />} />
            <Route path="/orders/failed" element={<OrderFailed />} />
            <Route path="/address" element={<Address />} />
          </Routes>
          <Footer />
        </myContext.Provider>
      </BrowserRouter>

      <Toaster />
    </>
  );
}

export default App;
export { myContext };
