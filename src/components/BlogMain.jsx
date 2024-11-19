import React from "react";
import "./BlogMain.css";

// Import ảnh từ thư mục assets
import imgblog1 from "../assets/imgblog1.png";
import imgblog2 from "../assets/imgblog2.png";
import imgblog3 from "../assets/imgblog3.png";

const blogs = [
  {
    id: 1,
    title: "Here are the trends I see coming this fall",
    date: "Dec 01, 2017",
    author: "admin",
    image: imgblog1, // Sử dụng ảnh import
    link: "#",
  },
  {
    id: 2,
    title: "The ultimate guide to your autumn wardrobe",
    date: "Nov 15, 2017",
    author: "editor",
    image: imgblog2, // Sử dụng ảnh import
    link: "#",
  },
  {
    id: 3,
    title: "Top 5 destinations for this winter vacation",
    date: "Oct 30, 2017",
    author: "traveller",
    image: imgblog3, // Sử dụng ảnh import
    link: "#",
  },
];

const BlogMain = () => {
  return (
    <div className="blogs">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <div className="section_title">
              <h2>Tin tức mới nhất</h2>
              <div className="divider"></div>
            </div>
          </div>
        </div>
        <div className="row blogs_container">
          {blogs.map((blog) => (
            <div key={blog.id} className="col-lg-4 blog_item_col">
              <div
                className="blog_item"
                style={{ backgroundImage: `url(${blog.image})` }} 
              >
                {/* Thông tin hiển thị khi hover */}
                <div className="blog_content_overlay">
                  <h4 className="blog_title">{blog.title}</h4>
                  <span className="blog_meta">
                    by {blog.author} | {blog.date}
                  </span>
                  <a className="blog_more" href={blog.link}>
                    Read more
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogMain;
