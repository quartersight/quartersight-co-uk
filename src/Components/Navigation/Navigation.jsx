import React, { Component } from "react";
import { Link } from "@reach/router";

import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";

class Navigation extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-dark navbar-expand-md fixed-top bg-dark navigation-clean">
          <div className="container">
            <a className="navbar-brand" href="/">
              QS Logo here
            </a>
            <button
              data-toggle="collapse"
              className="navbar-toggler"
              data-target="#navcol-1"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navcol-1">
              <ul className="nav navbar-nav ml-auto align-items-center">
                <li className="nav-item" role="presentation">
                  <a className="nav-link" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a className="nav-link" href="/about">
                    About
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a className="nav-link" href="/projects">
                    Projects
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a className="nav-link" href="/contact">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <div>
                    <span className="socialLink">
                      <FaGithub />
                    </span>

                    <span className="socialLink">
                      <FaTwitter />
                    </span>

                    <span className="socialLink">
                      <FaLinkedinIn />
                    </span>
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
