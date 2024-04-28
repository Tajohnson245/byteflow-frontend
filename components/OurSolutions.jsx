import React from "react";
import { Link } from "react-router-dom";
import "../styles/ourSolutions.css";
import BYTEFLOW_LOGO from "../images/BYTEFLOW_LOGO.png";
import BLKWOMANCODING from "../images/121721_BlackMetaverse_01.jpg";
import BLKMANMONITOR from "../images/download.jpg";
import CUSTOMSWEDEVELOPMENT from "../images/Advantages-of-Custom-Software-Development-and-Its-Impact-on-Business-Growth.jpg";
import CUSTOMWEBAPP from "../images/Build-Custom-Web-Apps.png";
import AI from "../images/e178cc_2827938e9eed4cfc8399a62f3787dde2_mv2.webp";
import MOBILEAPP from "../images/phone-mobile-application-development-concept-mobile-internet-3d-illustration_76964-5164.avif";

const OurSolutions = () => {
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
        <Link to="/ourTeam">
          <button className="connect-btn">CONNECT</button>
        </Link>
      </div>

      <div className="enticing-header">
        <div className="row">
          <div className="column1">
            <h1>BYTEFLOW Solutions</h1>
            <h3>Tailored Byte By Byte.</h3>
          </div>
          <div className="column2">
            <div id="parent">
              <img src={BLKMANMONITOR} className="image1" />
              <img src={BLKWOMANCODING} className="image2" />
            </div>
          </div>
        </div>
      </div>

      <div className="services-container">
        <div id="transition-right">
          <div className="service">
            <div className="image-container2">
              <img src={MOBILEAPP} />
            </div>
            <div className="service-content2">
              <h1>Mobile Application</h1>
              <h3>
                Our mobile application development service is more than just
                coding; it's crafting digital experiences that captivate and
                engage your audience. From intuitive UI designs to robust
                backend systems, we transform your ideas into high-performance
                mobile apps that drive growth and elevate your brand. Embrace
                the power of mobility with BYTEFLOW, and let's create something
                extraordinary together.
              </h3>
            </div>
          </div>
        </div>

        <div id="transition-left">
          <div className="service">
            <div className="service-content">
              <h1>Custom Web Application</h1>
              <h3>
                Our custom web development service is your gateway to a tailored
                online presence that reflects your unique identity and goals.
                With cutting-edge technologies and a keen eye for design, we
                build websites that not only look stunning but also deliver
                seamless functionality and unparalleled performance. Join forces
                with BYTEFLOW, and let's redefine what's possible on the web.
              </h3>
            </div>
            <div className="image-container">
              <img src={CUSTOMWEBAPP} />
            </div>
          </div>
        </div>

        <div id="transition-right">
          <div className="service">
            <div className="image-container2">
              <img src={AI} />
            </div>
            <div className="service-content2">
              <h1>AI + Data Automation</h1>
              <h3>
                Our expertise in artificial intelligence and automation empowers
                you to harness the full potential of your data, driving
                efficiency, productivity, and innovation across your
                organization. From predictive analytics to intelligent
                automation, BYTEFLOW is your partner in navigating the
                complexities of the digital age.
              </h3>
            </div>
          </div>
        </div>

        <div id="transition-left">
          <div className="service">
            <div className="service-content">
              <h1>Custom Software Development</h1>
              <h3>
                Off-the-shelf solutions can only take you so far; to truly
                differentiate and thrive in today's competitive landscape, you
                need software that's as unique as your business. That's where we
                come in. Our team of expert developers works closely with you to
                understand your goals and challenges, crafting bespoke software
                solutions that address your specific needs and propel your
                business forward. Partner with BYTEFLOW, and let's build the
                future together, one line of code at a time.
              </h3>
            </div>
            <div className="image-container">
              <img src={CUSTOMSWEDEVELOPMENT} />
            </div>
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

export default OurSolutions;
