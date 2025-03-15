import React from "react";
import Image from "next/image";
const Home = () => {
  return (
    <div className="home_page">
      <div className="home_page_content">
        <div className="home_page_content_title">
          <div>Hello World, I'm</div>
          <h1>Hiếu bão tố</h1>
          <div className="text_animation">Frontend Developer</div>
          <div className="welcome_text">Welcome to My personal website. 🫰</div>
        </div>
        <div className="home_page_image">
          <Image
            src="/images/home_page_image.png"
            alt="home_page_image"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
