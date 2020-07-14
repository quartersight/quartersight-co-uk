import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";

class Navigation extends Component {
  render() {
    return (
      <>
        <div className="row no-gutters">
          <div className="col">
            <img
              className="d-md-flex d-none mx-auto logo-top"
              src={require("../../Images/quarter_sight_logo_with_text.png")}
              alt="Quarter Sight Logo"
            />
          </div>
        </div>
        <nav className="navbar navbar-dark navbar-expand-md sticky-top bg-dark navigation-clean navbar-custom-color">
          <div className="container">
            <button
              data-toggle="collapse"
              className="navbar-toggler"
              data-target="#navcol-1"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse flex-grow-1 justify-content-between"
              id="navcol-1"
            >
              <ul className="nav navbar-nav flex-grow-1 justify-content-between ml-auto">
                <li className="nav-item mouse-pointer" role="presentation">
                  <NavLink
                    exact={true}
                    className="nav-link dark-nav-text"
                    activeClassName="dark-nav-text-active"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item mouse-pointer" role="presentation">
                  <NavLink
                    className="nav-link dark-nav-text"
                    activeClassName="dark-nav-text-active"
                    to="/about"
                  >
                    About
                  </NavLink>
                </li>
                <li className="nav-item mouse-pointer" role="presentation">
                  <NavLink
                    className="nav-link dark-nav-text"
                    activeClassName="dark-nav-text-active"
                    to="/projects"
                  >
                    Projects
                  </NavLink>
                </li>
                <li className="nav-item mouse-pointer" role="presentation">
                  <NavLink
                    className="nav-link dark-nav-text"
                    activeClassName="dark-nav-text-active"
                    to="/contact"
                  >
                    Contact
                  </NavLink>
                </li>
                <li className="nav-item mouse-pointer">
                  <div className="allSocialNavBar">
                    <a
                      href="https://www.github.com/quartersight"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="socialLink"
                    >
                      <FaGithub />
                    </a>

                    <a
                      href="https://www.twitter.com/quartersight"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="socialLink"
                    >
                      <FaTwitter />
                    </a>

                    <a
                      href="https://www.linkedin.com/in/carldtrnr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="socialLink"
                    >
                      <FaLinkedinIn />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Navigation;
