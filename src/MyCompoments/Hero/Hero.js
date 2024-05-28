import React from "react";
import "./Hero.css";
import profile_pic from "../../assets/profile_pic_cropped.png";

const Hero = () => {
  return (
    <div className="hero">
      <img src={profile_pic} alt="profile pic" />

      <h1>I'm Dhana Tonatanahal, frontend developer from India.</h1>

      <p>I am Dhana, a frontend developer with 10 years of experience.</p>

      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-cv">My cv</div>
      </div>
    </div>
  );
};

export default Hero;
