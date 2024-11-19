import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './ProductSlider.css';
import imgfood1 from "../assets/imgfood1.png";
import imgfood2 from "../assets/imgfood2.png";
import imgfood3 from "../assets/imgfood3.png";
import imgfood4 from "../assets/imgfood4.png";
import imgfood5 from "../assets/imgfood5.png";

const products = [
  {
    id: 1,
    name: "Sinh to dau",
    image: imgfood1,
    sell_price: 20000,
    price: 25000
  },
  {
    id: 2,
    name: "Cafe sua",
    image: imgfood2,
    sell_price: 30000,
    price: 35000
  },
  {
    id: 3,
    name: "Ca phe den",
    image: imgfood3,
    sell_price: 40000,
    price: 45000
  },
  {
    id: 4,
    name: "Tra sua chan trau duong den",
    image: imgfood4,
    sell_price: 50000,
    price: 55000
  },
  {
    id: 5,
    name: "Tra dao cam sa",
    image: imgfood5,
    sell_price: 60000,
    price: 65000
  },
  {
    id: 6,
    name: "Cam tac xi muoi",
    image: imgfood1,
    sell_price: 70000,
    price: 75000
  },
  {
    id: 7,
    name: "Tra sua olong",
    image: imgfood2,
    sell_price: 80000,
    price: 85000
  }
];

const ProductSlider = () => {
  const [favorites, setFavorites] = useState({});
  const swiperRef = useRef(null); // Ref for Swiper instance

  const handleAddToCart = (productId) => {
    console.log(`Sản phẩm ${productId} đã được thêm vào giỏ hàng!`);
  };

  const handleToggleFavorite = (productId) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [productId]: !prevFavorites[productId]
    }));
  };

  const handlePrevClick = () => {
    if (swiperRef.current.swiper.realIndex > 0) { // Prevent going past the first slide
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperRef.current.swiper.realIndex < products.length - 1) { // Prevent going past the last slide
      swiperRef.current.swiper.slideNext();
    }
  };

  useEffect(() => {
    const swiper = swiperRef.current.swiper;
    // Disable "Next" button when on last slide
    swiper.on('slideChange', () => {
      const isLastSlide = swiper.realIndex === products.length - 1;
      const isFirstSlide = swiper.realIndex === 0;
      // Disable the "Next" button if it's the last slide
      document.querySelector('.swiper-button-next').disabled = isLastSlide;
      // Disable the "Previous" button if it's the first slide
      document.querySelector('.swiper-button-prev').disabled = isFirstSlide;
    });
    // Initialize button states
    const isLastSlide = swiper.realIndex === products.length - 1;
    const isFirstSlide = swiper.realIndex === 0;
    document.querySelector('.swiper-button-next').disabled = isLastSlide;
    document.querySelector('.swiper-button-prev').disabled = isFirstSlide;
  }, [products.length]);

  return (
    <div className="product-slider">
      <div className="slider-title">
        Sản phẩm bán chạy
      </div>
      <div className="divider"></div>

      <Swiper
        ref={swiperRef}
        spaceBetween={0}
        slidesPerView={5}
        navigation={{
          prevEl: ".swiper-button-prev", // Link prev button to Swiper
          nextEl: ".swiper-button-next", // Link next button to Swiper
        }}
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 5,
          }
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="product-card">
              <div className="product-image">
                <a href={`/ProductMain/Detail/${product.id}`}>
                  <img src={product.image} alt={product.name} />
                </a>
              </div>
              <div 
                className={`favorite ${favorites[product.id] ? 'favorite-active' : ''}`} 
                onClick={() => handleToggleFavorite(product.id)}
              >
                {favorites[product.id] ? '♥' : '♡'}
              </div>
              <div className="product-bubble">HOT</div>
              <div className="product-info">
                <h6 className="product-name">
                  <a href={`/ProductMain/Detail/${product.id}`}>{product.name}</a>
                </h6>
                <div className="product-price">
                  <span>{product.sell_price.toLocaleString()} đ</span>
                  {product.price !== product.sell_price && (
                    <span className="price-old">
                      {product.price.toLocaleString()} đ
                    </span>
                  )}
                </div>
              </div>
              <div className="red-button">
                <button onClick={() => handleAddToCart(product.id)}>Thêm vào giỏ hàng</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="swiper-button-prev" onClick={handlePrevClick}></div>
      <div className="swiper-button-next" onClick={handleNextClick}></div>
    </div>
  );
};

export default ProductSlider;
