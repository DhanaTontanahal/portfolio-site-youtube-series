import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "81924d7f-934d-4e04-9efa-3fba964a1fe7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact-container">
      <h1>Contact us</h1>

      <div className="contact-section">
        <div class="contact-info">
          <h2>Contact Information</h2>
          <p>
            Email:{" "}
            <a href="mailto:urwithdhanu@gmail.com">urwithdhanu@gmail.com</a>
          </p>
          <p>
            Phone: <a href="tel:+8105724657">8105724657</a>
          </p>
          <div class="social-card">
            <h3>Connect with me</h3>
            <a
              rel="noreferrer"
              href="https://www.linkedin.com/in/tontanahal/"
              target="_blank"
            >
              <i class="fab fa-linkedin"></i> LinkedIn
            </a>
            <a
              rel="noreferrer"
              href="https://stackoverflow.com/users/5730885/dhana"
              target="_blank"
            >
              <i class="fab fa-stack-overflow"></i> StackOverflow
            </a>
            <a
              rel="noreferrer"
              href="https://twitter.com/DhanaTontanahal"
              target="_blank"
            >
              <i class="fab fa-twitter"></i> Twitter
            </a>
          </div>
        </div>

        <div class="contact-form">
          <h2>Contact Us</h2>

          <form onSubmit={onSubmit}>
            <label for="subject">Subject:</label>
            <input type="text" id="subject" name="name" required />

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button type="submit">Submit</button>
          </form>
          <span>{result}</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
