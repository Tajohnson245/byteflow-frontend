import React from "react";
import BYTEFLOW_LOGO from "../images/BYTEFLOW_LOGO.png";
import blackPeopleCoding from "../images/blackPeopleCoding.jpg";
import PYTHON from "../images/Python-Symbol.png";
import REACT from "../images/reactjs.png";
import JAVASCRIPT from "../images/javascript.png";
import NODEJS from "../images/nodejs.png";
import SQL from "../images/sql.png";
import PHP from "../images/php.png";
import HTML from "../images/html.png";
import CSS from "../images/css.png";
import CWD from "../images/customWebDevlopment.png";
import DV from "../images/dataVisualization.png";
import MA from "../images/mobileApplication.png";
import WM from "../images/websiteMaintenance.png";
import BD from "../images/backendDevelopment.png";
import DAH from "../images/domainAndHosting.png";
import SEOO from "../images/seoOptimization.png";
import "../styles/landingPage.css";
import "../styles/footerStyles.css";
import "../styles/headerStyles.css";

const LandingPage = () => {
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
        <h1 className="text1">Building Byte by Byte</h1>
        <h3 className="text2">
          <a href="/">Setup A Consultation</a>
        </h3>
      </div>

      <div className="container-who-we-are">
        <div className="who-are-we-text">
          <h2>WHO WE ARE</h2>
          <p>
            Established in 2024 amidst the technological zenith and AI boom,
            BYTEFLOW Solutions emerged from the collective expertise of six
            visionary friends with diverse talents in the tech sector. We
            harness our combined knowledge to offer scalable business solutions.
          </p>
        </div>
        <div className="team-image">
          <img src={blackPeopleCoding} />
        </div>
      </div>

      <div className="our-services-container">
        <div className="our-services">
          <h3>Our Services</h3>
        </div>
        <div className="images-carousel">
          <div className="images-slide">
            <img src={CWD} />
            <img src={DV} />
            <img src={WM} />
            <img src={MA} />
            <img src={BD} />
            <img src={DAH} />
            <img src={SEOO} />
          </div>
          <div className="images-slide">
            <img src={CWD} />
            <img src={DV} />
            <img src={WM} />
            <img src={MA} />
            <img src={BD} />
            <img src={DAH} />
            <img src={SEOO} />
          </div>
        </div>
      </div>

      <div className="our-technologies-container">
        <div className="our-technologies">
          <h3>Our Technologies</h3>
        </div>
        <div className="image-carousel">
          <div className="image-slide">
            <img src={PYTHON} />
            <img src={REACT} />
            <img src={NODEJS} />
            <img src={SQL} />
            <img src={PHP} />
            <img src={JAVASCRIPT} />
            <img src={HTML} />
            <img src={CSS} />
          </div>
          <div className="image-slide">
            <img src={PYTHON} />
            <img src={REACT} />
            <img src={NODEJS} />
            <img src={SQL} />
            <img src={PHP} />
            <img src={JAVASCRIPT} />
            <img src={HTML} />
            <img src={CSS} />
          </div>
        </div>
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

export default LandingPage;
