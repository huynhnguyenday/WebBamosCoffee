import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./BlogMain.css";

import imgblog1 from "../assets/imgblog1.png";
import imgblog2 from "../assets/imgblog2.png";
import imgblog3 from "../assets/imgblog3.png";

const blogs = [
  {
    id: 1,
    title: "Here are the trends I see coming this fall",
    date: "Dec 01, 2017",
    author: "admin",
    image: imgblog1,
    link: "#",
  },
  {
    id: 2,
    title: "The ultimate guide to your autumn wardrobe",
    date: "Nov 15, 2017",
    author: "editor",
    image: imgblog2,
    link: "#",
  },
  {
    id: 3,
    title: "Top 5 destinations for this winter vacation",
    date: "Oct 30, 2017",
    author: "traveller",
    image: imgblog3,
    link: "#",
  },
];

const BlogMain = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: false });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: i * 0.4 }, // Thêm delay dựa trên index
    }),
  };

  return (
    <div className="blogs">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <div className="section_title">
              <h2>Tin mới nóng hổi</h2>
              <div className="divider"></div>
            </div>
          </div>
        </div>
        <div className="row blogs_container" ref={ref}>
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              className="col-lg-4 blog_item_col"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={index} 
              variants={cardVariants}
            >
              <div className="blog_item">
                <img src={blog.image} alt={blog.title} />
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
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogMain;
