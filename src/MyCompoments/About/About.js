import React from "react";
import "./About.css";
import profile_pic from "../../assets/profile_pic_cropped.png";
import bgP from "../../assets/shape-dark.svg";

const About = () => {
  return (
    <div className="about">
      <h1>About me</h1>

      <div className="about-sections">
        <div className="about-right">
          <div className="about-para">
            <p>
              Hi there! I'm Dhana shekhar , and I'm on a journey in the world of
              Software Engineering developing & maintaining Scalable Enterprise
              Cloud ready Applications. 🌍
            </p>
            <p>
              Currently, I'm working closely with Smooth commerce team, which is
              based out in Canada , where I am a Senior React developer
              developing & deploying innovative food commerce solutions to
              foodies. I'm based in Hyderabad Telangana, but my work knows no
              boundaries.
            </p>
          </div>

          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>

            <div className="about-skill">
              <p>ReactJS</p>
              <hr style={{ width: "70%" }} />
            </div>

            <div className="about-skill">
              <p>Javascript</p>
              <hr style={{ width: "60%" }} />
            </div>

            <div className="about-skill">
              <p>NextJS</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>

        <div className="about-left">
          <img className="about-bg-img" src={bgP} alt="about-background" />
          <img
            className="about-profile-img"
            src={profile_pic}
            alt="about-profile"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
