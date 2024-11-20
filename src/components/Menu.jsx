import React, { useState } from "react";
import "./Menu.css";
import imgfood1 from "../assets/imgfood1.png";
import imgfood2 from "../assets/imgfood2.png";
import imgfood3 from "../assets/imgfood3.png";
import imgfood4 from "../assets/imgfood4.png";
import imgfood5 from "../assets/imgfood5.png";
import imgfood6 from "../assets/imgfood6.png";
import imgfood7 from "../assets/imgfood7.png";


const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [favorites, setFavorites] = useState({}); // Dữ liệu yêu thích

  // Dữ liệu menu items
  const menuItems = [
    { id: 1, category: "CAFÉ", name: "Bạc xỉu", price: "45,000", oldPrice: "48,000", img: imgfood4 },
    { id: 2, category: "TRÀ", name: "Trà sen", price: "60,000", img: imgfood2 },
    { id: 3, category: "TRÀ", name: "Trà sen sữa", price: "55,000", img: imgfood3 },
    { id: 4, category: "ĐÁ XAY", name: "Trà xanh đá xay", price: "50,000", oldPrice: "55,000", img: imgfood1 },
    { id: 5, category: "SINH TỐ", name: "Chocolate", price: "45,000", oldPrice: "50,000", img: imgfood5 },
    { id: 6, category: "TRÀ SỮA", name: "Chocolate", price: "45,000", oldPrice: "50,000", img: imgfood6 },
    { id: 7, category: "TRÀ LẠNH", name: "Chocolate", price: "45,000", oldPrice: "50,000", img: imgfood7 },
  ];  

  // Danh mục món ăn
  const categories = ["ALL", "CAFÉ", "ĐÁ XAY", "TRÀ", "TRÀ SỮA", "SINH TỐ", "TRÀ LẠNH"];

  // Lọc món ăn theo danh mục đã chọn
  const filterItems = activeCategory === "ALL" ? menuItems : menuItems.filter(item => item.category === activeCategory);

  // Xử lý khi nhấn vào yêu thích
  const handleToggleFavorite = (id) => {
    setFavorites({
      ...favorites,
      [id]: !favorites[id],
    });
  };

  // Xử lý khi nhấn vào thêm món ăn vào giỏ hàng
  const handleAddToCart = (id) => {
    console.log(`Add to cart: ${id}`);
  };

  return (
    <div className="menu-wrapper">
      <h1 className="menu-header">
        Thực đơn Bamos<span>Coffee</span>
      </h1>

      {/* Danh sách các danh mục */}
      <div className="menu-category-wrapper">
        {categories.map((category) => (
          <button
            key={category}
            className={`menu-category-button ${activeCategory === category ? "active" : ""}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Hiển thị món ăn theo danh mục đã chọn */}
      <div className="menu-items-wrapper">
        {filterItems.map((item) => (
          <div className="menu-item-card" key={item.id}>
            <div className="menu-item-image">
              <a href={`/ProductMain/Detail/${item.id}`}>
                <img src={item.img} alt={item.name} />
              </a>
            </div>
            {/* Icon yêu thích */}
            <div
              className={`favorite-icon ${favorites[item.id] ? 'active' : ''}`}
              onClick={() => handleToggleFavorite(item.id)}
            >
              {favorites[item.id] ? '♥' : '♡'}
            </div>
            <div className="menu-item-info">
              <h6 className="menu-item-name">
                <a href={`/ProductMain/Detail/${item.id}`}>{item.name}</a>
              </h6>
              <div className="menu-item-price">
                <span>{item.price}</span>
                {item.oldPrice && <span className="price-old">{item.oldPrice}</span>}
              </div>
            </div>
            {/* Nút thêm vào giỏ hàng */}
            <div className="add-to-cart-button">
              <button onClick={() => handleAddToCart(item.id)}>Thêm vào giỏ hàng</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
