import React from "react";
import "./Service.css";

const Service = () => {
  return (
    <div className="service">
      <h1>My Services</h1>
      <div class="services-container">
        <div class="service-cards">
          <div class="service-card">
            <h2>Website Development</h2>
            <p>
              We create responsive and robust websites tailored to your business
              needs.
            </p>
          </div>
          <div class="service-card">
            <h2>Website Design</h2>
            <p>
              Our designs are user-centric, aesthetically pleasing, and
              functional.
            </p>
          </div>
          <div class="service-card">
            <h2>Content Creation</h2>
            <p>
              We provide high-quality content to engage your audience and boost
              your online presence.
            </p>
          </div>
          <div class="service-card">
            <h2>Accessibility (WCAG Standard Implementation)</h2>
            <p>
              We ensure your website meets the WCAG standards for accessibility,
              making it usable for everyone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
