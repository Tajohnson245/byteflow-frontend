import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import BYTEFLOW_LOGO from "../images/BYTEFLOW_LOGO.png";
import "../styles/ourTeam.css";
import CEO from "../images/CEO.jpeg";
import PRESIDENT from "../images/President.png";
import CFO from "../images/CFO.png";
import CSO from "../images/CSO.png";
import LSWE from "../images/LSWE.png";
import COO from "../images/COO.png";
import "../styles/footerStyles.css";
import "../styles/headerStyles.css";

const OurTeam = () => {
  // State variables to store form data
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
  });

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://byteflow-website-main-d621de538164.herokuapp.com/ourTeam",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();
      console.log(data); // Handle response from the server
    } catch (error) {
      console.error("Error:", error);
    }

    // Reset form fields
    setFormData({
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
    });
  };

  return (
    <body>
      <div className="header">
        <img
          src={BYTEFLOW_LOGO}
          alt="BYTEFLOW LOGO"
          style={{ width: "300px", height: "90px" }}
          className="byteflow-logo"
        />

        <nav className="nav_links">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/ourTeam">Our Team</a>
            </li>
            <li>
              <a href="/ourSolutions">Solutions</a>
            </li>
          </ul>
        </nav>
        <a>
          <button className="connect-btn">CONNECT</button>
        </a>
      </div>

      <div className="box">
        <h1 className="text1">Meet The Team.</h1>
        <div className="text-box">
          <h3 className="text2">
            We are not just a team; we're a force of digital innovation. With
            tech visionaries, data wizards, and design maestros, we sculpt
            seamless user experiences and redefine what's possible. Beyond work,
            we're adventurers and artists, fueling our passions as fiercely as
            our projects."
          </h3>
        </div>
      </div>

      <div className="team-container">
        <div className="team-member">
          <img src={CEO} />
          <h3>Tyrone Johnson</h3>
          <h3>Founder & CEO</h3>
        </div>
        <div className="team-member">
          <img src={PRESIDENT} />
          <h3>Adam Mitchell-Lewis</h3>
          <h3>President</h3>
        </div>
        <div className="team-member">
          <img src={COO} />
          <h3>Samuel Ndubuisi</h3>
          <h3>Cheif Operations Officer</h3>
        </div>
        <div className="team-member">
          <img src={CSO} />
          <h3>Bryan Bernard</h3>
          <h3>Cyber Security Officer</h3>
        </div>
        <div className="team-member">
          <img src={LSWE} />
          <h3>Michael Ameteku</h3>
          <h3>Lead Software Developer</h3>
        </div>
        <div className="team-member">
          <img src={CFO} />
          <h3>Kevin Asamoah</h3>
          <h3>CFO</h3>
        </div>
      </div>

      <div class="join-team-container">
        <h1>Looking To Join Our Team?</h1>
        <form class="join-form" onSubmit={handleSubmit}>
          <div class="form-group">
            <div class="name-group">
              <label for="first-name">First Name:</label>
              <InputText
                id="first-name"
                name="first_name"
                placeholder="Enter your first name"
                value={formData.first_name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div class="name-group">
              <label for="last-name">Last Name:</label>
              <InputText
                id="last-name"
                name="last_name"
                placeholder="Enter your last name"
                value={formData.last_name}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div class="form-group">
            <div class="contact-group">
              <label for="email">Email:</label>
              <InputText
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div class="contact-group">
              <label for="phone">Phone Number:</label>
              <InputText
                id="phone"
                name="phone_number"
                placeholder="Enter your phone number"
                value={formData.phone_number}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <button type="submit" onSubmit={handleSubmit}>
            Connect
          </button>
        </form>
      </div>

      <footer className="footer">
        <div className="container">
          <div className="footer-row">
            <div className="footer-column">
              <img src={BYTEFLOW_LOGO} />
              <h2>byteflowservices@gmail.com</h2>
            </div>
            <div className="footer-column">
              <h2>Services</h2>
              <div id="horizontal-line"></div>
              <p>Website Maintenance</p>
              <p>Custom Web Development</p>
              <p>Mobile App Development</p>
            </div>
            <div className="footer-column">
              <h2>About Us</h2>
              <div id="horizontal-line"></div>
              <p>Portfolio</p>
              <p>Packages</p>
              <p>About Us</p>
            </div>
          </div>
        </div>
      </footer>
    </body>
  );
};

export default OurTeam;
