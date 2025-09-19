import React from "react";
import "../styles/Hero.css";
import heroImg from "../images/hero-img1.png"; // right side food image

const Hero = () => {
  return (
    <div className="hero-section">
      {/* LEFT SIDE TEXT */}
      <div className="hero-content">
        <p className="hero-subtitle">WELCOME</p>
        <h1 className="hero-title">Discover a world of culinary delights</h1>
        <p className="hero-desc"> 
             Explore fresh, wholesome ingredients and easy-to-follow steps to create 
             unforgettable meals for everyone.
             Your next favorite dish is just a click away!
        </p>

        
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="hero-image">
        <img src={heroImg} alt="Delicious food" />
      </div>
    </div>
  );
};

export default Hero;
