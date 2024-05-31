import React from "react";
import profile_pic from "../../assets/profile_pic_cropped.png";
import bgP from "../../assets/shape-dark.svg";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <h1>About me</h1>

      <div className="about-sections">
        <div className="about-left">
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
              <p>Accessibility</p>
              <hr style={{ width: "70%" }} />
            </div>

            <div className="about-skill">
              <p>Javascript</p>
              <hr style={{ width: "80%" }} />
            </div>

            <div className="about-skill">
              <p>ReactJS</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>

        <div className="about-right">
          <img
            src={profile_pic}
            alt="profiel pic"
            className="about-profile-img"
          />

          <img src={bgP} alt="background pic" className="about-bg-img" />
        </div>
      </div>
    </div>
  );
};

export default About;
