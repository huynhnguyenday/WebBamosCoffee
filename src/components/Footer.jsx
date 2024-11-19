import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faTiktok } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between items-start">
          {/* Phần bên trái */}
          <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
            <h2 className="text-lg font-bold mb-4">BAMOS COFFEE</h2>
            <p className="text-sm leading-relaxed introduce">
              Bamos định vị sẽ là thương hiệu cafe hoạt động 24/7 với không gian sân vườn rộng rãi kết hợp cùng đa dạng các hoạt động phù hợp cho cả các bạn trẻ, sinh viên cũng như là nơi tụ tập cuối tuần cho gia đình, nhóm bạn.
            </p>
          </div>

          {/* Phần ở giữa */}
          <div className="w-full sm:w-1/3 mb-6 sm:mb-0 text-center">
            <h2 className="text-lg font-bold mb-4 underline-title">Về chúng tôi</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#menu" className="hover:underline">
                  Thực đơn
                </a>
              </li>
              <li>
                <a href="#news" className="hover:underline">
                  Tin tức
                </a>
              </li>
              <li>
                <a href="#address" className="hover:underline">
                  Địa chỉ
                </a>
              </li>
            </ul>
          </div>

          {/* Phần bên phải */}
          <div className="w-full sm:w-1/3 text-right">
            <h2 className="text-lg font-bold mb-4 lienhe">Liên hệ</h2>
            <div className="flex justify-end space-x-4 mb-4">
              <div className="tooltip">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <span className="tooltiptext">Follow on Facebook</span>
              </div>
              <div className="tooltip">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <span className="tooltiptext">Follow on Instagram</span>
              </div>
              <div className="tooltip">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <span className="tooltiptext">Follow on Twitter</span>
              </div>
              <div className="tooltip">
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FontAwesomeIcon icon={faTiktok} />
                </a>
                <span className="tooltiptext">Follow on TikTok</span>
              </div>
            </div>
            <p className="text-xs text-gray-400 codeby">
              © 2024 BAMOS COFFEE. Designer by Group 1
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
