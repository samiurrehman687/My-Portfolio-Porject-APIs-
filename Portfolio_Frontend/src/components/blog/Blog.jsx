import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import MonoBlog from "./MonoBlog";

import "swiper/css";
import "swiper/css/pagination";
import "./blog.css";

// Breakpoints
const custom_breakpoints = {
  640: {
    slidesPerView: 2,
    spaceBetween: 15,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 15,
  },
  1220: {
    slidesPerView: 4,
    spaceBetween: 24,
  },
};

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  // 🔥 FETCH BLOG API
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/blog/`)
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="content py-25 px-2 relative" id="blog">

      {/* TITLE */}
      <div className="max-w-135 text-center mx-auto pb-17.5">
        <p className="section-title pb-6">Blog</p>
        <p className="text-xs xs:text-[16px] md:text-lg text-gray-400">
          Check out my recent blog posts where I share insights on design,
          development, and the latest industry trends.
        </p>
      </div>

      {/* SWIPER */}
      <Swiper
        grabCursor={true}
        breakpoints={custom_breakpoints}
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        {blogs?.map((data, index) => (
          <SwiperSlide
            key={index}
            className="mb-10"
            style={{ backgroundColor: "transparent" }}
          >
            <MonoBlog data={data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Blog;