import React from 'react';
import Navbar from './components/Navbar';
import MainSlider from './components/MainSlider';
import ProductSlider from './components/ProductSlider';
import Benefit from './components/Benefit';
import BlogMain from './components/BlogMain';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <MainSlider/>
      <ProductSlider/>
      <Benefit/>
      <BlogMain/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default App;
