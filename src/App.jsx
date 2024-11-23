import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Address from "./components/Address";
import DetailFood from "./components/DetailFood";  // Import component DetailFood
import Newsletter from "./components/Newsletter";
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
          <Route path="/address" element={<Address />} />
          <Route path="/detailfood/:id" element={<DetailFood />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Newsletter />
        <Footer />
      </div>
    </Router>
  );
};

export default App; 