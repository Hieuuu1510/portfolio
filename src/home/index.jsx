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
            src="/images/avatar-home.jpg"
            alt="home_page_image"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
