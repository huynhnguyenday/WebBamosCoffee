import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Newsletter from "./components/Newsletter";
import Address from "./components/Address";
import "./app.css";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          {/* Đặt Home là trang chủ mặc định */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/address" element={<Address />} />
          {/* Chuyển hướng tất cả các tuyến không xác định về Home */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Newsletter />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
