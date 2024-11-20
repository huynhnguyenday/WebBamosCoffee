import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Newsletter from "./components/Newsletter";
import Address from "./components/Address";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/address" element={<Address />} />
        </Routes>
        <Newsletter/>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
