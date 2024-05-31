import React from "react";
import "./Portfolio.css";
import portfolio_1 from "../../assets/portfolio-1.jpg";
import portfolio_2 from "../../assets/portfolio-2.png";
import portfolio_3 from "../../assets/portfolio-3.jpg";
import portfolio_4 from "../../assets/portfolio-4.jpg";
import portfolio_5 from "../../assets/portfolio-5.jpg";
import portfolio_6 from "../../assets/portfolio-6.jpg";

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <h1>My Portfolio</h1>
      <div class="portfolio">
        <div class="portfolio-item">
          <img src={portfolio_1} alt="Project 1" />
          <div class="portfolio-info">
            <h2>Project Title 1</h2>
            <p>Description of the project 1.</p>
          </div>
        </div>
        <div class="portfolio-item">
          <img src={portfolio_2} alt="Project 2" />
          <div class="portfolio-info">
            <h2>Project Title 2</h2>
            <p>Description of the project 2.</p>
          </div>
        </div>
        <div class="portfolio-item">
          <img src={portfolio_3} alt="Project 3" />
          <div class="portfolio-info">
            <h2>Project Title 3</h2>
            <p>Description of the project 3.</p>
          </div>
        </div>
        <div class="portfolio-item">
          <img src={portfolio_4} alt="Project 4" />
          <div class="portfolio-info">
            <h2>Project Title 4</h2>
            <p>Description of the project 4.</p>
          </div>
        </div>
        <div class="portfolio-item">
          <img src={portfolio_5} alt="Project 5" />
          <div class="portfolio-info">
            <h2>Project Title 5</h2>
            <p>Description of the project 5.</p>
          </div>
        </div>
        <div class="portfolio-item">
          <img src={portfolio_6} alt="Project 6" />
          <div class="portfolio-info">
            <h2>Project Title 6</h2>
            <p>Description of the project 6.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
