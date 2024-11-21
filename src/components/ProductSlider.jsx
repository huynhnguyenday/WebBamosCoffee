import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./ProductSlider.css";
import imgfood1 from "../assets/imgfood1.png";
import imgfood2 from "../assets/imgfood2.png";
import imgfood3 from "../assets/imgfood3.png";
import imgfood4 from "../assets/imgfood4.png";
import imgfood5 from "../assets/imgfood5.png";
import imgfood6 from "../assets/imgfood6.png";
import imgfood7 from "../assets/imgfood7.png";

const products = [
  { id: 1, name: "Sinh tố dâu", image: imgfood1, sell_price: 20000, price: 25000 },
  { id: 2, name: "Cà phê sữa", image: imgfood2, sell_price: 30000, price: 35000 },
  { id: 3, name: "Cà phê đen", image: imgfood3, sell_price: 40000, price: 45000 },
  { id: 4, name: "Trà sữa trân châu đường đen", image: imgfood4, sell_price: 50000, price: 55000 },
  { id: 5, name: "Trà đào cam sả", image: imgfood5, sell_price: 60000, price: 65000 },
  { id: 6, name: "Cam tắc xí muội", image: imgfood6, sell_price: 70000, price: 75000 },
  { id: 7, name: "Trà sữa ô long", image: imgfood7, sell_price: 80000, price: 85000 },
];

const ProductSlider = () => {
  const [favorites, setFavorites] = useState({});
  const swiperRef = useRef(null);

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.5 });

  // Trigger animation when in view
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden"); // Reset animation khi ra ngoài khung nhìn
    }
  }, [controls, inView]);

  const handleAddToCart = (productId) => {
    console.log(`Sản phẩm ${productId} đã được thêm vào giỏ hàng!`);
  };

  const handleToggleFavorite = (productId) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [productId]: !prevFavorites[productId],
    }));
  };

  const handlePrevClick = () => {
    if (swiperRef.current.swiper.realIndex > 0) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperRef.current.swiper.realIndex < products.length - 1) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="product-slider" ref={ref}>
      <div className="slider-title">Sản phẩm bán chạy</div>
      <Swiper
        ref={swiperRef}
        spaceBetween={0}
        slidesPerView={5}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        breakpoints={{
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={product.id}>
            <motion.div
              className="product-card"
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 100 }, // Bắt đầu từ dưới (100px)
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  transition: { delay: index * 0.2, type: "spring", stiffness: 80 } 
                },
              }}
            >
              <div className="product-image">
                <a href={`/ProductMain/Detail/${product.id}`}>
                  <img src={product.image} alt={product.name} />
                </a>
              </div>
              <div
                className={`favorite ${favorites[product.id] ? "favorite-active" : ""}`}
                onClick={() => handleToggleFavorite(product.id)}
              >
                {favorites[product.id] ? "♥" : "♡"}
              </div>
              <div className="product-bubble">HOT</div>
              <div className="product-info">
                <h6 className="product-name">
                  <a href={`/ProductMain/Detail/${product.id}`}>{product.name}</a>
                </h6>
                <div className="product-price">
                  <span>{product.sell_price.toLocaleString()} đ</span>
                  {product.price !== product.sell_price && (
                    <span className="price-old">{product.price.toLocaleString()} đ</span>
                  )}
                </div>
              </div>
              <div className="red-button">
                <button onClick={() => handleAddToCart(product.id)}>Thêm vào giỏ hàng</button>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-button-prev" onClick={handlePrevClick}></div>
      <div className="swiper-button-next" onClick={handleNextClick}></div>
    </div>
  );
};

export default ProductSlider;
