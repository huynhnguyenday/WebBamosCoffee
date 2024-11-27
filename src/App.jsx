import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Address from "./components/Address";
import DetailFood from "./components/DetailFood";
import Newsletter from "./components/Newsletter";
import DetailBlog from "./components/DetailBlog";
import BlogMain from "./components/BlogMain";
import News from "./components/News";
import PaymentPage from "./components/PaymentPage";
import "./app.css";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/news" element={<News />} />
          <Route path="/address" element={<Address />} />
          <Route path="/detailfood/:id" element={<DetailFood />} />
          <Route path="/blogs" element={<BlogMain />} />
          <Route path="/blogs/:id" element={<DetailBlog />} /> 
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Newsletter />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
