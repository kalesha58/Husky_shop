import "./App.css";
import Header from "./component/layout/Header.js";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import WebFont from "webfontloader";
import { useEffect } from "react";
import React from "react"
import Footer from "./component/footer/Footer";
import Home from "./component/Home/Home";
import ProductDetails from "./component/Product/ProductDetails";
import Products from "./component/Product/Products";
import Search from "./component/Product/Search";

function App() {
  useEffect(() => {
      WebFont.load({
        google: {
          families: ["Roboto", "Droid Sans", "Chilanka"],
        },
      });
    }, []);
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product/:id" element={<ProductDetails/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/products/:keyword" element={<Products/>}/>
        <Route path="/Search" element={<Search/>}/>
     
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
